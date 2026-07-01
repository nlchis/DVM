# Figma API Sizing & Auto-Layout Rules Summary

Tài liệu này lưu trữ các kiến thức đúc kết được trong quá trình thiết kế và sửa lỗi giao diện hệ thống theo dõi đơn hàng (Dashboard, Order List, Create Order, Order Details) thông qua Figma Plugin API.

---

## 1. Cơ chế hoạt động của Figma Plugin Sandbox & Gotchas

### a. Cấu trúc Node trả về từ `getNodeById`
- Các node được trả về bởi `figma.getNodeById(id)` thực chất là **bản sao dữ liệu JSON đơn giản** (chỉ chứa các thuộc tính cơ bản như `width`, `height`, `name` và không có danh sách `.children` hoặc `.getChildren()`).
- Để lấy cấu trúc cây đầy đủ có chứa `.children` để duyệt đệ quy (Recursive Traversal), bắt buộc phải dùng hàm `figma.get_design({ id })`.
- Để cập nhật thuộc tính của một node, bắt buộc phải dùng `figma.modify({ id, ...properties })`. Không thể thay đổi trực tiếp bằng cách gán thuộc tính vào Object (ví dụ: `node.layoutAlign = "STRETCH"` không có tác dụng).

### b. Lỗi Timeout khi Gọi API Đa tầng (`get_design`, `loadIcon`)
- Lệnh `get_design` trên các frame/clone lớn hoặc chứa nhiều vector có thể gây chậm và kích hoạt timeout (30-60 giây) của MCP tool.
- Lệnh `figma.loadIcon` tải icon qua mạng cũng có độ trễ lớn và dễ gây nghẽn.
- **Giải pháp tối ưu:** 
  - Thay vì gọi `get_design`, hãy dùng `figma_read` với `operation: "search_nodes"`, lọc theo `type: "FRAME"` hoặc `namePattern` cụ thể. Bộ lọc này chạy cực nhanh (dưới 1 giây) và không bị timeout.
  - Sử dụng các hình vẽ hình học cục bộ (ví dụ: `FRAME` hoặc `RECTANGLE` tô màu có chữ đại diện) làm placeholder cho icon thay vì gọi `loadIcon` từ mạng trong môi trường nhạy cảm về thời gian.

### c. Tránh Cache Reparenting khi Reorder (Mẹo Reorder)
- Figma Bridge tối ưu hóa lệnh `figma.modify({ id, parentId: currentParentId })` như một no-op nếu nó nhận diện node đã thuộc cha đó rồi.
- Để cưỡng chế reorder vị trí các con trong Auto Layout của một Parent:
  1. **Bước 1 (Transaction 1):** Di chuyển toàn bộ các con sang một Parent tạm thời (ví dụ: Frame màn hình lớn ngoài cùng).
  2. **Bước 2 (Transaction 2):** Di chuyển các con quay trở lại Parent gốc theo đúng thứ tự mong muốn trong mảng.

---

## 2. Quy tắc Sizing & Auto-Layout nâng cao

### a. Tránh xung đột giữa HUG (AUTO) và STRETCH (FILL)
- Nếu một frame cha có chế độ ôm nội dung (Hug Height - `counterAxisSizingMode: "AUTO"`), thì ít nhất phải có một phần tử con bên trong không dùng chế độ co giãn (`STRETCH`) dọc để đóng vai trò làm trục định vị chiều cao thực tế cho cả frame cha.
- Khi frame con dùng `layoutAlign: "STRETCH"`, nếu thuộc tính định cỡ dọc của nó (`primaryAxisSizingMode`) bị đặt là `"AUTO"`, Figma sẽ ưu tiên ôm nội dung con bên trong của nó và **bỏ qua hoàn toàn lệnh Stretch** của parent. Do đó, cần đặt `primaryAxisSizingMode: "FIXED"` trên các Sidebar hoặc Panel phụ để nó tự giãn theo chiều dọc của toàn trang.

### b. Thứ tự Resizing và Sizing Mode
- Khi gọi lệnh `figma.resize({ id, width, height })` lên một frame, Figma Editor sẽ **tự động chuyển Sizing Mode của hướng đó về FIXED**.
- Do đó, nếu muốn chiều cao hoặc rộng của frame mẹ tự động ôm (`AUTO`), lệnh thiết lập `sizingMode` thành `"AUTO"` phải được gọi **sau** khi đã gọi lệnh `resize()`.

### c. Nguyên lý Cập nhật Layout đa tầng (Bottom-Up)
- Khi cập nhật kích thước chữ (`textAutoResize`) và các thuộc tính ôm viền của nút/badge, luôn phải chạy theo trình tự **Bottom-Up (từ dưới lên trên)**:
  1. **Pass 1:** Thiết lập `textAutoResize: "WIDTH_AND_HEIGHT"` (hoặc `"HEIGHT"`) cho các Text node trước để chúng tự nở rộng theo nội dung thật.
  2. **Pass 2:** Đặt `primaryAxisSizingMode: "AUTO"` cho các nút/badge chứa các text đó sau. Khi đó các nút/badge sẽ ôm vừa vặn lấy kích thước chữ thật mới được định hình ở Pass 1, tránh tình trạng bị co rúm ở size mặc định (thường là 100px).

---

## 3. Bài học từ sửa lỗi thiết kế Giao diện Thực tế

### a. Thanh tiến trình Timeline dọc nối liền không đứt đoạn
- **Vấn đề:** Đặt padding-bottom hoặc itemSpacing trên khung dòng `TrackStep` sẽ tạo ra một khoảng trống (gap) vật lý mà các con không thể vẽ tràn qua (kể cả khi dùng `layoutAlign: "STRETCH"`), dẫn đến các checkpoint timeline bị đứt đoạn.
- **Giải pháp:** 
  1. Thiết lập `itemSpacing: 0` trên khung danh sách `StepsList`.
  2. Thêm `paddingBottom: 24` (hoặc khoảng cách mong muốn) vào **khung text cột bên phải** của từng bước để đẩy chiều cao bước đó lên.
  3. Cột chứa đường vẽ bên trái (StepGraphic) được set `layoutAlign: "STRETCH"` và đường Line dọc được đặt `layoutGrow: 1`. Lúc này, đường Line dọc sẽ tự động kéo dài chạm mép dưới cùng của hàng và chạm khít vào chấm trạng thái tiếp theo ở hàng dưới, tạo thành đường nối liền hoàn hảo.

### b. Căn thẳng cột bảng biểu dữ liệu (Data Table Alignment)
- **Vấn đề:** Các cột trong bảng dữ liệu bị xô lệch do độ dài nội dung (tên khách hàng, trạng thái, mã đơn) co giãn động.
- **Giải pháp:**
  1. Thiết lập chiều rộng cố định (`primaryAxisSizingMode: "FIXED"`) và cùng một kích thước `width` cụ thể cho các cột tiêu đề (Header) và các cột dữ liệu tương ứng ở các hàng (ví dụ: cột Mã Đơn `120px`, cột Trạng Thái `150px`, cột Thao tác `80px`).
  2. Các cột trung gian cần giãn theo độ rộng màn hình (như cột Họ tên khách hàng) đặt `layoutGrow: 1` cho cả Header và dòng dữ liệu.
  3. **Đồng bộ căn lề văn bản:** Bắt buộc tiêu đề cột ở Header và dữ liệu cột ở các dòng phải có cùng thuộc tính căn lề (`textAlign: "LEFT"` hoặc `"CENTER"`). Nếu tiêu đề căn giữa còn dữ liệu căn trái, cột sẽ nhìn rất lệch mắt.

### c. Tránh méo hình khi resize các Frame chứa Icon/Vector
- **Vấn đề:** Khi resize chiều rộng/cao của một Frame thao tác (Actions) hoặc StatusBadge, các icon vector bên trong (ví dụ icon mắt, icon in) có ràng buộc `SCALE` hoặc `STRETCH` sẽ bị bóp méo, dẹt hoặc phình to.
- **Giải pháp:**
  - Thiết lập ràng buộc của icon con thành `MIN` (Left, Top) trước khi thay đổi kích thước cha, hoặc luôn gọi lệnh `figma.resize` để cưỡng chế kích thước icon về đúng `20x20px` (kích thước chuẩn) sau khi chỉnh sửa kích thước cha.
