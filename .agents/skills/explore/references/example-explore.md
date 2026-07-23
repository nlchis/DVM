---
type: explore
feature: momo-reconciliation
topic_slug: daily-matching
status: completed
created: 2026-06-03
updated: 2026-06-03
links: []
tags: [explore, momo-reconciliation]
changelog:
  - 2026-06-03 | /explore | Khởi tạo tài liệu nghiên cứu nghiệp vụ đối soát Momo hàng ngày
---

# Nghiên cứu & Phân tích tính năng: Đối soát Momo hàng ngày

> Bối cảnh: momo-reconciliation | Chủ đề: daily-matching

## 1. Ý tưởng gốc (Idea Seed)

"Tôi muốn xây dựng tính năng đối soát tự động hàng ngày các giao dịch nhận tiền từ ví điện tử Momo nhằm phát hiện các giao dịch bị thiếu, lệch tiền, hoặc sai trạng thái giữa hệ thống ARS của chúng ta và đối tác."

## 2. Bối cảnh nghiệp vụ & Thuật ngữ chính

### 2.1 Bối cảnh nghiệp vụ (Domain Context)

Trong quá trình vận hành thanh toán qua Ví điện tử Momo, hệ thống ghi nhận giao dịch của khách hàng thông qua webhook gọi là IPN (Instant Payment Notification). Tuy nhiên, có những trường hợp IPN bị lỗi (mất kết nối mạng, server bận), dẫn đến dữ liệu giao dịch trên hệ thống ARS bị lệch so với dữ liệu thực tế thu tiền của Momo. Việc đối soát hàng ngày giúp kiểm tra đối chiếu chéo giữa file sao kê (Settlement Report) của Momo và dữ liệu giao dịch trên ARS để đảm bảo dòng tiền chính xác 100%.

### 2.2 Thuật ngữ nghiệp vụ chính (Glossary)

| Thuật ngữ | Ý nghĩa nghiệp vụ |
|-----------|-------------------|
| **IPN (Instant Payment Notification)** | Cơ chế gọi API tự động từ Momo để thông báo trạng thái thanh toán ngay khi giao dịch xảy ra. |
| **Báo cáo đối soát (Settlement Report)** | File dữ liệu danh sách giao dịch Momo gửi định kỳ hàng ngày (qua SFTP hoặc tải trực tiếp) ghi nhận các giao dịch đã thực thu tiền thực tế. |
| **Giao dịch đối chiếu khớp (Matched)** | Giao dịch trùng khớp hoàn toàn về mã giao dịch, số tiền và trạng thái giữa hai hệ thống. |
| **Lệch tiền (Amount Mismatch)** | Giao dịch tồn tại ở cả hai hệ thống nhưng số tiền thực tế nhận được khác số tiền ghi nhận trong đơn hàng. |
| **Giao dịch đơn phương (Unilateral Transaction)** | Giao dịch chỉ tồn tại ở một trong hai hệ thống (chỉ có ở Momo hoặc chỉ có ở ARS). |

## 3. Từ khóa chính & Phạm vi tìm kiếm

- **Các từ khóa tìm kiếm (Search Keywords)**: "Momo settlement report api", "payment gateway reconciliation rules", "automated payment matching algorithms", "Odoo bank reconciliation match rules".
- **Phạm vi đối thủ mục tiêu (Target Competitors)**: Stripe, Odoo Accounting, QuickBooks.
- **Các dự án mã nguồn mở tương tự (Similar Projects)**: Django-reconciliation, OpenReconcile.

## 4. Chi tiết phân tích đối thủ

### 4.1 Đối thủ 1: Stripe Reconciliation

- **Mô tả cách họ triển khai tính năng**: Stripe tự động đối chiếu các khoản thanh toán (Charges), tiền chuyển về tài khoản (Payouts) và phí giao dịch (Fees). Họ cung cấp báo cáo dạng Ledger (sổ cái) đối chiếu tiền vào/ra theo ngày và cho phép tự động khớp giao dịch dựa trên Metadata hoặc Client Reference ID.
- **Ưu điểm nghiệp vụ**: Độ chính xác cao, tự động phân tích phí giao dịch chi tiết, luồng xử lý tự động hoàn toàn (Auto-match) đạt tỷ lệ >95%.
- **Nhược điểm/Hạn chế**: Hệ thống phức tạp, khó cấu hình tùy chỉnh cho các ví điện tử nội địa tại Việt Nam như Momo hay VNPay.

### 4.2 Đối thủ 2: Odoo Accounting

- **Mô tả cách họ triển khai tính năng**: Odoo cho phép thiết lập các quy tắc đối soát (Reconciliation Rules) linh hoạt. Người dùng có thể thiết lập quy tắc tự động khớp (ví dụ: khớp nếu trùng mã đơn hàng và số tiền chênh lệch nhỏ hơn 1.000 VND). Nếu không khớp tự động, Odoo cung cấp giao diện đối soát thủ công (Manual reconciliation interface) trực quan để kế toán chọn và khớp thủ công bằng tay.
- **Ưu điểm nghiệp vụ**: Rất linh hoạt, có giao diện đối soát thủ công xuất sắc cho các trường hợp ngoại lệ.
- **Nhược điểm/Hạn chế**: Cần cấu hình ban đầu phức tạp, không tự động tối ưu hóa việc phân tích đối soát từ đầu mà phụ thuộc nhiều vào thiết lập quy tắc của người dùng.

## 5. Bảng so sánh tính năng

| Tính năng so sánh | Stripe Reconciliation | Odoo Matching rules | Đề xuất cho Hệ thống ARS |
|-------------------|----------------------------------|----------------------------------|--------------------------|
| **Cơ chế nạp file sao kê** | Tự động qua API nội bộ của Stripe | Nhập file thủ công (CSV/OFX) hoặc tích hợp ngân hàng | Hỗ trợ cả hai: Tự động kéo file qua SFTP của Momo lúc 08:00 hàng ngày, và cho phép nạp file CSV thủ công (fallback). |
| **Quy tắc đối chiếu tự động** | Khớp cứng theo Transaction ID và số tiền | Cho phép cấu hình rules (độ ưu tiên, khoảng sai lệch tiền) | Khớp tự động (P0): Khớp chính xác nếu trùng `Partner Ref ID` (Mã giao dịch Momo) và `Amount` (Số tiền thanh toán). |
| **Xử lý giao dịch ngoại lệ** | Tự động tạo Refund hoặc Chargeback | Giao diện kéo thả để khớp thủ công và ghi nhận lý do lệch | Giao diện Đối soát thủ công (P1): Liệt kê các dòng lệch (Lệch số tiền, Đơn phương ARS, Đơn phương Momo) để kế toán bấm khớp tay và điền ghi chú giải trình. |

## 6. Đề xuất tính năng cho ARS

Dưới góc nhìn của Business Analyst, đề xuất bộ tính năng đối soát Momo cho Hệ thống Đối soát Tự động (ARS) như sau:

### 6.1 Nhóm tính năng P0 (Must Have - Bắt buộc phải có)

- **Cơ chế nạp báo cáo đối soát Momo**: Hệ thống tự động kết nối SFTP của Momo hàng ngày để tải file báo cáo đối soát lúc 08:00 sáng. Hỗ trợ import file CSV dự phòng nếu SFTP gặp sự cố lỗi kết nối.
- **Quy tắc khớp tự động cơ bản**: Hệ thống đối chiếu dữ liệu giao dịch trong file với DB theo hai tiêu chí bắt buộc: Mã tham chiếu Momo (Partner Transaction ID) và Số tiền thực nhận. Trạng thái khớp sẽ chuyển sang `MATCHED`.
- **Báo cáo sai lệch**: Hệ thống lọc ra danh sách các giao dịch rơi vào trạng thái ngoại lệ:
  - `MISMATCH_AMOUNT`: Trùng mã nhưng lệch tiền thực nhận.
  - `UNILATERAL_PARTNER`: Có trong file Momo nhưng hệ thống ARS không có đơn hàng.
  - `UNILATERAL_ARS`: ARS ghi nhận thành công nhưng trong file Momo không có.

### 6.2 Nhóm tính năng P1 (Should Have - Nên có)

- **Giao diện đối soát thủ công (Manual Matching Interface)**: Cung cấp màn hình hiển thị danh sách các giao dịch bị lệch tiền hoặc đơn phương. Kế toán có thể thực hiện chọn giao dịch ARS và giao dịch Momo bị lệch để "Khớp thủ công" (Force Match) kèm theo chọn lý do (ví dụ: "Momo tính sai phí", "Khách hàng chuyển khoản nhầm đơn").
- **Nhật ký đối soát nghiệp vụ (Audit Trail)**: Ghi nhận lịch sử ai đã khớp thủ công, thời gian và lý do khớp.

### 6.3 Nhóm tính năng P2 (Nice to Have - Có thì tốt)

- **Tự động Query API Momo**: Đối với các giao dịch ở trạng thái đơn phương ARS, hệ thống tự động gọi API Query Transaction của Momo để cập nhật lại trạng thái tức thời trước khi chạy đối soát chính thức nhằm giảm thiểu tỷ lệ lệch giả.

## 7. Luồng nghiệp vụ đề xuất (Happy Path)

### 7.1 Mô tả các bước nghiệp vụ

1. **Hệ thống ARS**: Định kỳ 08:00 sáng tự động kéo file Settlement Report của ngày hôm trước từ SFTP Momo.
2. **Hệ thống ARS**: Thực hiện chạy tự động Quy tắc khớp (Matching rules) đối chiếu với các đơn hàng trong DB.
3. **Hệ thống ARS**: Tự động đánh dấu `Matched` cho 99% giao dịch khớp hoàn toàn và xuất danh sách lệch tiền/đơn phương sang màn hình "Xử lý lệch đối soát".
4. **Kế toán (User)**: Truy cập màn hình đối soát để xử lý thủ công các giao dịch lệch, chọn lý do và ấn "Xác nhận đối soát". Hệ thống cập nhật trạng thái đối soát hoàn tất và lưu nhật ký đối soát.

### 7.2 Sơ đồ luồng dạng ASCII (ASCII Flow Diagram)

```
+------------------+             +-----------------+             +------------------+
|    Ví điện tử    |             |   Hệ thống ARS  |             |  Kế toán (User)  |
|       Momo       |             |   (Reconciliation)|           |                  |
+--------+---------+             +--------+--------+             +--------+---------+
         |                                |                               |
         | --- Gửi file sao kê (SFTP) --> |                               |
         |                                | (08:00 Tự động khớp)           |
         |                                |                               |
         |                                | --- Hiển thị danh sách lệch ->|
         |                                |                               | (Kiểm tra lý do lệch)
         |                                |                               | (Khớp thủ công)
         |                                | <--- Xác nhận đối soát tay ---|
         |                                |                               |
         |                                | (Cập nhật DB & Ghi Log)       |
         v                                v                               v
```

## 8. Giả định & Rủi ro nghiệp vụ

### 8.1 Giả định (Assumptions)

- Phía Momo luôn gửi file báo cáo đối soát của ngày T vào trước 08:00 sáng ngày T+1.
- Mã giao dịch từ phía Momo gửi về qua webhook IPN và file sao kê khớp hoàn toàn với nhau.

### 8.2 Rủi ro nghiệp vụ & Giải pháp phòng ngừa (Risks & Mitigations)

| Rủi ro nghiệp vụ | Khả năng xảy ra | Tác động nghiệp vụ | Giải pháp phòng ngừa đề xuất |
|-------------------|-----------------|-------------------|-----------------------------|
| Momo gửi file trễ hoặc kết nối SFTP bị lỗi | Trung bình | Kế toán không thể hoàn thành đối soát đầu ngày đúng giờ. | Hỗ trợ tính năng upload file thủ công CSV từ Admin Panel để không bị phụ thuộc hoàn toàn vào SFTP tự động. |
| Khách hàng tạo giao dịch sát nút giao thời (23:59:59) | Thấp | Dễ dẫn đến lệch do ngày ghi nhận đơn hàng khác nhau giữa 2 hệ thống. | Thiết lập khoảng thời gian đệm (Buffer window ±15 phút) ở điểm giao ngày khi đối chiếu. |

## 9. Các câu hỏi mở (Open Questions)

- [ ] OQ-1: Phí dịch vụ của Momo (ví dụ: 1.2% + 2.000 VND) sẽ được đối soát khớp cứng hàng ngày hay đối soát gộp tổng cuối tháng? (Trạng thái: Chờ phản hồi)
- [ ] OQ-2: Có cần cơ chế gửi thông báo tự động cho IT khi phát hiện có giao dịch đơn phương từ phía Momo (nghi ngờ hệ thống bị hack hoặc rò rỉ bảo mật) hay không? (Trạng thái: Chờ phản hồi)

## 10. Bước tiếp theo

Sau khi tài liệu Nghiên cứu đối soát Momo này được duyệt, đề xuất các bước tiếp theo:
- Chạy `/brainstorm momo-reconciliation` để phác thảo chi tiết hành vi xử lý khi Momo gửi thông tin webhook IPN lệch trạng thái.
- Tạo tài liệu `/urd momo-reconciliation` để thu thập các màn hình kế toán mong muốn sử dụng khi đối soát thủ công.
