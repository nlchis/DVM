
        // MOCK DATABASE
        let orders = [
            { id: "247-00123", tracking: "247XYZ123", name: "Nguyen Van A", phone: "0901234567", address: "Số 10 Đường số 4, Hiệp Bình Chánh, Thủ Đức, TP. Hồ Chí Minh", product: "Macbook Pro M3", weight: 1.5, price: 20000000, quantity: 1, cod: 20000000, status: "DELIVERING", date: "2026-06-29", history: [] },
            { id: "247-00124", tracking: "247ABC789", name: "Tran Thi B", phone: "0987654321", address: "125 Hai Bà Trưng, Quận 1, TP. Hồ Chí Minh", product: "iPhone 15 Pro", weight: 0.3, price: 12000000, quantity: 1, cod: 12000000, status: "SUCCESS", date: "2026-06-30", history: [] },
            { id: "247-00125", tracking: "247KLO456", name: "Le Van C", phone: "0933444555", address: "36 Hoàng Hoa Thám, Quận Tân Bình, TP. Hồ Chí Minh", product: "Macbook Air M2", weight: 1.3, price: 15000000, quantity: 1, cod: 15000000, status: "FAILED", date: "2026-07-01", history: [] },
            { id: "247-00126", tracking: "247XYZ888", name: "Phạm Văn D", phone: "0909090909", address: "420 Trần Hưng Đạo, Quận 5, TP. Hồ Chí Minh", product: "iPad Pro M4", weight: 0.8, price: 18000000, quantity: 1, cod: 18000000, status: "DELIVERING", date: "2026-06-29", history: [] },
            { id: "247-00127", tracking: "247XYZ999", name: "Hoàng Thị E", phone: "0918118118", address: "78 Nguyễn Trãi, Quận 5, TP. Hồ Chí Minh", product: "AirPods Pro 2", weight: 0.1, price: 3500000, quantity: 1, cod: 3500000, status: "SUCCESS", date: "2026-06-30", history: [] },
            { id: "247-00128", tracking: "247XYZ777", name: "Đỗ Văn F", phone: "0945445445", address: "12 Cộng Hòa, Quận Tân Bình, TP. Hồ Chí Minh", product: "Bàn phím cơ Keychron", weight: 1.2, price: 2500000, quantity: 1, cod: 2500000, status: "DELIVERING", date: "2026-07-01", history: [] },
            { id: "247-00129", tracking: "247XYZ666", name: "Vũ Thị G", phone: "0967667667", address: "99 Cách Mạng Tháng 8, Quận 3, TP. Hồ Chí Minh", product: "Chuột Logitech MX Master 3S", weight: 0.2, price: 3000000, quantity: 1, cod: 3000000, status: "SUCCESS", date: "2026-07-02", history: [] },
            { id: "247-00130", tracking: "247XYZ555", name: "Ngô Văn H", phone: "0978778778", address: "15 Lê Lợi, Quận 1, TP. Hồ Chí Minh", product: "Màn hình Dell UltraSharp", weight: 6.5, price: 9800000, quantity: 1, cod: 9800000, status: "DELIVERING", date: "2026-07-02", history: [] },
            { id: "247-00131", tracking: "247XYZ444", name: "Bùi Văn I", phone: "0989889889", address: "250 Lê Hồng Phong, Quận 10, TP. Hồ Chí Minh", product: "Loa Marshall Stanmore", weight: 4.5, price: 7500000, quantity: 1, cod: 7500000, status: "DELIVERING", date: "2026-07-03", history: [] },
            { id: "247-00132", tracking: "Chưa cấp", name: "Nguyễn Thị K", phone: "0905556667", address: "15 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội", product: "Macbook Pro M3", weight: 1.5, price: 20000000, quantity: 1, cod: 20000000, status: "PENDING_APPROVAL", date: "2026-07-03", creator: "Sales phụ trách", history: [] },
            { id: "247-00133", tracking: "Chưa cấp", name: "Phạm Minh L", phone: "0912223334", address: "Số 8 Chùa Bộc, Đống Đa, Hà Nội", product: "iPhone 15 Pro", weight: 0.3, price: 12000000, quantity: 1, cod: 12000000, status: "PENDING_APPROVAL", date: "2026-07-03", creator: "Sales phụ trách", history: [] },
            { id: "247-00134", tracking: "Chưa cấp", name: "Lê Hoàng M", phone: "0934445556", address: "45 Lê Lợi, Hải Phòng", product: "iPad Air 5", weight: 0.5, price: 7000000, quantity: 1, cod: 7000000, status: "REJECTED", date: "2026-07-02", creator: "Sales phụ trách", rejectReason: "Địa chỉ nhận hàng không cụ thể, thiếu số nhà.", history: [] }
        ];

        // MOCK INVENTORY DATABASE
        let inventory = [
            { code: "SP-001", name: "Macbook Pro M3", location: "KỆ-A01", qty: 5 },
            { code: "SP-002", name: "iPhone 15 Pro", location: "KỆ-B02", qty: 8 },
            { code: "SP-003", name: "iPad Air 5", location: "KỆ-C03", qty: 12 },
            { code: "SP-004", name: "AirPods Pro 2", location: "KỆ-D04", qty: 15 }
        ];
        let replenishLog = [
            { id: "LOG-001", date: "2026-07-02 09:15", user: "Vũ Văn Kho", product: "Macbook Pro M3", added: 2, total: 5, document: "CO_CQ_Macbook_M3.pdf" },
            { id: "LOG-002", date: "2026-07-01 14:30", user: "Vũ Văn Kho", product: "iPad Air 5", added: 5, total: 12, document: "CO_CQ_iPad_Air.pdf" }
        ];

        // Active Order Selection for Details Tab
        let activeOrderId = "247-00123";
        let shippingChart = null;

        // Initialize App on load
        window.addEventListener('DOMContentLoaded', () => {
            switchRole('SALES');

            // Disable scroll wheel modifications on number inputs to prevent accidental changes
            const preventScrollOnNumber = (e) => {
                if (document.activeElement === e.target) {
                    e.preventDefault();
                }
            };
            const codInput = document.getElementById('form-cod');
            const weightInput = document.getElementById('form-weight');
            if (codInput) codInput.addEventListener('wheel', preventScrollOnNumber, { passive: false });
            if (weightInput) weightInput.addEventListener('wheel', preventScrollOnNumber, { passive: false });
        });

        // Tab Navigation switching logic
        function switchTab(tabId) {
            // Hide all tab panels
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
            // Remove active style from all sidebar buttons
            document.querySelectorAll('aside nav button').forEach(b => b.classList.remove('nav-active'));

            // Show target panel
            document.getElementById(`panel-${tabId}`).classList.remove('hidden');
            // Add active styling to nav button
            const navBtn = document.getElementById(`nav-${tabId}`);
            if (navBtn) {
                navBtn.classList.add('nav-active');
            } else if (tabId === 'order-details') {
                const listBtn = document.getElementById('nav-order-list');
                if (listBtn) listBtn.classList.add('nav-active');
            }

            // Update Header Title
            const titles = {
                'dashboard': 'Dashboard Tổng quan',
                'order-list': 'Quản lý Đơn hàng',
                'create-order': 'Tạo Đơn Vận Chuyển',
                'order-details': 'Chi tiết Đơn hàng &amp; Tracking',
                'system-flow': 'Sơ đồ Luồng Hệ thống',
                'checker-approval': 'Duyệt Đơn Hàng (Checker)',
                'replenish-inventory': 'Quản lý Tồn kho &amp; Nhập kho'
            };
            document.getElementById('header-title').innerText = titles[tabId] || 'Hệ thống';

            if (tabId === 'dashboard') {
                updateDashboardMetrics();
                if (shippingChart) {
                    shippingChart.destroy();
                    initChart();
                }
            } else if (tabId === 'order-details') {
                renderOrderDetails();
            } else if (tabId === 'system-flow') {
                switchFlowPhase(1);
            } else if (tabId === 'checker-approval') {
                renderCheckerApprovalTable();
            } else if (tabId === 'replenish-inventory') {
                renderInventoryTable();
                renderReplenishLog();
            }
        }

        // Aggregate count of orders by status
        function updateDashboardMetrics() {
            const statusCounts = { PENDING_APPROVAL: 0, REJECTED: 0, PENDING: 0, DELIVERING: 0, SUCCESS: 0, FAILED: 0, RETURNED: 0 };
            orders.forEach(o => {
                if (statusCounts[o.status] !== undefined) {
                    statusCounts[o.status]++;
                }
            });

            const countPendingApprovalEl = document.getElementById('count-pending-approval');
            if (countPendingApprovalEl) countPendingApprovalEl.innerText = statusCounts.PENDING_APPROVAL;

            const countRejectedEl = document.getElementById('count-rejected');
            if (countRejectedEl) countRejectedEl.innerText = statusCounts.REJECTED;

            const pendingCountEl = document.getElementById('count-pending');
            if (pendingCountEl) pendingCountEl.innerText = statusCounts.PENDING;

            const countDeliveringEl = document.getElementById('count-delivering');
            if (countDeliveringEl) countDeliveringEl.innerText = statusCounts.DELIVERING;

            const countSuccessEl = document.getElementById('count-success');
            if (countSuccessEl) countSuccessEl.innerText = statusCounts.SUCCESS;

            const countFailedEl = document.getElementById('count-failed');
            if (countFailedEl) countFailedEl.innerText = statusCounts.FAILED;

            const countReturnedEl = document.getElementById('count-returned');
            if (countReturnedEl) countReturnedEl.innerText = statusCounts.RETURNED;

            const badge = document.getElementById('pending-approval-badge');
            if (badge) badge.innerText = `${statusCounts.PENDING_APPROVAL} đơn chờ duyệt`;

            // Render Urgent Alerts List
            const alertList = document.getElementById('urgent-alerts-list');
            if (alertList) {
                alertList.innerHTML = '';

                const errorOrders = orders.filter(o => o.status === 'FAILED' || o.status === 'RETURNED' || o.status === 'PENDING_APPROVAL');
                if (errorOrders.length === 0) {
                    alertList.innerHTML = `
                        <div class="text-center py-8 text-slate-400">
                            <i class="fa-solid fa-shield-check text-4xl mb-2 text-emerald-500"></i>
                            <p class="text-sm">Không có đơn hàng nào cần xử lý khẩn cấp.</p>
                        </div>`;
                } else {
                    errorOrders.forEach(o => {
                        let icon = 'fa-circle-xmark text-rose-500';
                        let label = 'Giao Chờ xử lý';
                        let colorClass = 'bg-rose-50';

                        if (o.status === 'RETURNED') {
                            icon = 'fa-arrow-rotate-left text-red-600';
                            label = 'Chờ Hoàn Hàng';
                            colorClass = 'bg-red-50';
                        } else if (o.status === 'PENDING_APPROVAL') {
                            icon = 'fa-user-clock text-indigo-500';
                            label = 'Chờ Phê Duyệt';
                            colorClass = 'bg-indigo-50';
                        }

                        alertList.innerHTML += `
                            <div onclick="openOrderDetails('${o.id}')" class="p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition cursor-pointer flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <span class="w-8 h-8 rounded-lg flex items-center justify-center text-sm ${colorClass}">
                                        <i class="fa-solid ${icon}"></i>
                                    </span>
                                    <div>
                                        <h5 class="text-xs font-bold text-slate-900">${o.id} - ${o.name}</h5>
                                        <p class="text-[10px] text-slate-500">${o.product} | ${label}</p>
                                    </div>
                                </div>
                                <span class="text-xs font-semibold text-blue-600 hover:underline">Xử lý <i class="fa-solid fa-chevron-right text-[10px]"></i></span>
                            </div>`;
                    });
                }
            }
        }

        // Initialize Chart.js Bar Chart
        function initChart() {
            // Group orders by date (Monday to Friday) and status
            const days = ["2026-06-29", "2026-06-30", "2026-07-01", "2026-07-02", "2026-07-03"];
            const successData = [0, 0, 0, 0, 0];
            const deliveringData = [0, 0, 0, 0, 0];
            const failedData = [0, 0, 0, 0, 0];

            orders.forEach(o => {
                const dayIndex = days.indexOf(o.date);
                if (dayIndex !== -1) {
                    if (o.status === 'SUCCESS') successData[dayIndex]++;
                    else if (o.status === 'DELIVERING') deliveringData[dayIndex]++;
                    else if (o.status === 'FAILED' || o.status === 'RETURNED') failedData[dayIndex]++;
                }
            });

            const chartCanvas = document.getElementById('shippingChart');
            if (!chartCanvas) return;
            const ctx = chartCanvas.getContext('2d');
            shippingChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6'],
                    datasets: [
                        { label: 'Giao thành công', data: successData, backgroundColor: '#00b894', borderRadius: 4 },
                        { label: 'Đang vận chuyển', data: deliveringData, backgroundColor: '#f59e0b', borderRadius: 4 },
                        { label: 'Đơn gặp sự cố (Hoàn/Lỗi)', data: failedData, backgroundColor: '#ef4444', borderRadius: 4 }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { stepSize: 1 }
                        }
                    },
                    plugins: {
                        legend: { position: 'top' }
                    }
                }
            });
        }

        // Format Status Badge for HTML representation
        function getStatusBadgeHTML(status) {
            const styles = {
                PENDING_APPROVAL: { text: "Chờ Phê Duyệt", bg: "bg-indigo-50 text-indigo-600", dot: "bg-indigo-500" },
                REJECTED: { text: "Từ Chối Duyệt", bg: "bg-slate-100 text-slate-600", dot: "bg-slate-500" },
                PENDING: { text: "Đã tiếp nhận Hàng", bg: "bg-blue-50 text-blue-600", dot: "bg-blue-500 pulse-blue" },
                DELIVERING: { text: "Đang đi phát Hàng", bg: "bg-amber-50 text-amber-500", dot: "bg-amber-500 pulse-orange" },
                SUCCESS: { text: "Giao Thành Công", bg: "bg-emerald-50 text-emerald-500", dot: "bg-emerald-500" },
                FAILED: { text: "Giao Chờ xử lý", bg: "bg-rose-50 text-rose-500", dot: "bg-rose-500" },
                WAITING_FOR_RETURN: { text: "Chờ Hoàn Hàng", bg: "bg-orange-50 text-orange-600", dot: "bg-orange-500" },
                RETURNED: { text: "Đã chuyển hoàn Hàng", bg: "bg-red-50 text-red-600", dot: "bg-red-600" }
            };
            const s = styles[status] || styles.DELIVERING;
            return `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${s.bg}">
                    <span class="w-1.5 h-1.5 rounded-full ${s.dot}"></span>
                    ${s.text}
                </span>`;
        }

        // Render rows of the Order Data Table
        function renderOrderTable(dataList) {
            const body = document.getElementById('order-table-body');
            if (!body) return;
            body.innerHTML = '';

            if (dataList.length === 0) {
                body.innerHTML = `
                    <tr>
                        <td colspan="4" class="py-12 px-6 text-center text-slate-400">
                            <i class="fa-solid fa-magnifying-glass text-4xl mb-2"></i>
                            <p class="text-sm">Không tìm thấy đơn hàng nào phù hợp.</p>
                        </td>
                    </tr>`;
                document.getElementById('pagination-text').innerText = "Hiển thị 0 - 0 của 0 đơn";
                return;
            }

            dataList.forEach(o => {
                body.innerHTML += `
                    <tr class="hover:bg-slate-50/50 transition">
                        <td class="py-4 px-6">
                            <span class="text-sm font-semibold text-slate-900">${o.id}</span>
                            <span class="block text-xs text-slate-400">${o.tracking}</span>
                        </td>
                        <td class="py-4 px-6">
                            <span class="text-sm font-semibold text-slate-900">${o.name}</span>
                            <span class="block text-xs text-slate-500">${o.product} (${o.weight}kg)</span>
                        </td>
                        <td class="py-4 px-6 text-center">
                            ${getStatusBadgeHTML(o.status)}
                        </td>
                        <td class="py-4 px-6 text-right space-x-2">
                            <button type="button" onclick="openOrderDetails('${o.id}')" class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition">
                                <i class="fa-solid fa-eye"></i> Xem
                            </button>
                            <button type="button" onclick="directPrintOrder('${o.id}')" class="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-955 transition ml-3">
                                <i class="fa-solid fa-print"></i> In
                            </button>
                        </td>
                    </tr>`;
            });

            document.getElementById('pagination-text').innerText = `Hiển thị 1 - ${dataList.length} của ${dataList.length} đơn`;
        }

        // Live Real-time filtering logic
        function filterOrders() {
            const query = document.getElementById('search-input').value.toLowerCase().trim();
            const statusFilter = document.getElementById('status-filter').value;

            const filtered = orders.filter(o => {
                const matchesQuery = o.id.toLowerCase().includes(query) ||
                                     o.tracking.toLowerCase().includes(query) ||
                                     o.name.toLowerCase().includes(query) ||
                                     o.phone.toLowerCase().includes(query);

                const matchesStatus = (statusFilter === 'ALL') ||
                                      (statusFilter === o.status) ||
                                      (statusFilter === 'FAILED' && o.status === 'RETURNED');

                return matchesQuery && matchesStatus;
            });

            renderOrderTable(filtered);
        }

        // Trigger switch tab with filter pre-selected from metric card click
        function filterListByStatus(status) {
            document.getElementById('status-filter').value = status;
            switchTab('order-list');
            filterOrders();
        }

        // Direct print warehouse receipt from table actions
        function directPrintOrder(orderId) {
            activeOrderId = orderId;
            const o = orders.find(ord => ord.id === orderId);
            if (o) {
                populatePrintLayout(o);
                window.print();
            }
        }

        // Open specific order detailed views
        function openOrderDetails(orderId) {
            activeOrderId = orderId;

            // Check details state error checkbox based on clicked status
            const o = orders.find(ord => ord.id === orderId);
            const checkbox = document.getElementById('toggle-details-error');
            if (o) {
                if (o.status === 'FAILED' || o.status === 'RETURNED') {
                    if (checkbox) checkbox.checked = true;
                } else {
                    if (checkbox) checkbox.checked = false;
                }
            }

            switchTab('order-details');
        }

        // Sync visual warning banners and text on details change
        function updateDetailsState() {
            if (document.getElementById('panel-order-details').classList.contains('hidden')) return;
            renderOrderDetails();
        }

        // Render detailed order info and timeline checks
        function renderOrderDetails() {
            const o = orders.find(ord => ord.id === activeOrderId);
            if (!o) return;

            const checkbox = document.getElementById('toggle-details-error');
            const isErrorState = checkbox ? checkbox.checked : false;

            // Fill header status details
            document.getElementById('details-code').innerText = `CHI TIẾT ĐƠN HÀNG: #${o.id}`;

            // Sync status variables in database if toggled on-the-fly
            let statusChanged = false;
            if (isErrorState && o.status !== 'FAILED' && o.status !== 'RETURNED') {
                o.status = 'FAILED';
                statusChanged = true;
            } else if (!isErrorState && (o.status === 'FAILED' || o.status === 'RETURNED')) {
                o.status = 'DELIVERING';
                statusChanged = true;
            }

            if (statusChanged) {
                updateDashboardMetrics();
                filterOrders();
            }

            const badgeContainer = document.getElementById('details-badge-container');
            if (badgeContainer) {
                badgeContainer.innerHTML = getStatusBadgeHTML(o.status);
            }

            // Fill summary fields
            document.getElementById('details-name').innerText = o.name;
            document.getElementById('details-phone').innerText = o.phone;
            document.getElementById('details-product').innerText = o.product;
            document.getElementById('details-cod').innerText = o.cod.toLocaleString('vi-VN') + " đ";

            // Render Timeline List and Actions Banner
            const banner = document.getElementById('failed-action-banner');
            const node2Icon = document.getElementById('node-2-icon');
            const node2Line = document.getElementById('node-2-line');
            const node3Icon = document.getElementById('node-3-icon');
            const node3Time = document.getElementById('node-3-time');
            const node3Title = document.getElementById('node-3-title');
            const failedNotifRow = document.getElementById('failed-notif-row');
            const node2Time = document.getElementById('node-2-time');
            const node2Title = document.getElementById('node-2-title');
            const telegramRow = document.getElementById('notif-telegram-row');

            // Config print and action buttons in details depending on role and order status
            const printBtn = document.querySelector('[onclick="printWarehouseReceipt()"]');
            if (printBtn) {
                if (currentRole === 'WH' || currentRole === 'CHECKER') {
                    printBtn.classList.remove('hidden');
                } else {
                    printBtn.classList.add('hidden');
                }
            }

            const editBtn = document.getElementById('details-edit-btn');
            if (editBtn) {
                if (currentRole === 'SALES' && o.status === 'PENDING_APPROVAL') {
                    editBtn.disabled = false;
                    editBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                } else {
                    editBtn.disabled = true;
                    editBtn.classList.add('opacity-50', 'cursor-not-allowed');
                }
            }

            const vatBtn = document.getElementById('details-vat-btn');
            if (vatBtn) {
                    vatBtn.classList.remove('hidden');
                } else {
                    vatBtn.classList.add('hidden');
                }
            }

            // Populate changes history logs list in Details
            const historyBody = document.getElementById('details-history-table-body');
            if (historyBody) {
                if (!o.history || o.history.length === 0) {
                    historyBody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 italic">Chưa có lịch sử thay đổi cho đơn hàng này.</td></tr>`;
                } else {
                    historyBody.innerHTML = o.history.map(log => `
                        <tr>
                            <td class="p-4 font-semibold text-slate-800">${log.time}</td>
                            <td class="p-4">${log.maker}</td>
                            <td class="p-4 font-semibold text-slate-900">${log.field}</td>
                            <td class="p-4 text-slate-500 font-mono text-xs">${log.oldValue}</td>
                            <td class="p-4 text-slate-800 font-mono font-semibold text-xs">${log.newValue}</td>
                        </tr>
                    `).join('');
                }
            }

            switchDetailsTab('general');

            if (o.status === 'FAILED' || o.status === 'RETURNED') {
                // Show failed actions banner on top
                if (banner) banner.classList.remove('hidden');

                // Timeline Step 2 line points green but icon is ok
                if (node2Icon) {
                    node2Icon.innerHTML = `<i class="fa-solid fa-check"></i>`;
                    node2Icon.className = "w-6 h-6 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 text-[10px] z-10";
                }
                if (node2Line) node2Line.className = "w-[2px] bg-emerald-500 flex-1";

                // Reset Node 2 text to checked state
                if (node2Time) node2Time.innerText = "14:00";
                if (node2Title) {
                    node2Title.innerText = "Bưu tá đã lấy hàng";
                    node2Title.className = "text-sm font-semibold text-slate-900";
                }
                if (telegramRow) telegramRow.classList.remove('hidden');

                // Timeline Step 3 is a failure cross
                if (node3Icon) {
                    node3Icon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
                    node3Icon.className = "w-6 h-6 rounded-full bg-rose-50 border-2 border-rose-500 flex items-center justify-center text-rose-500 text-[10px] z-10";
                }
                if (node3Time) {
                    node3Time.innerText = "16:00";
                    node3Time.className = "text-xs font-semibold text-rose-500";
                }
                if (node3Title) {
                    node3Title.innerText = "Giao hàng thất bại (Khách không nghe máy)";
                    node3Title.className = "text-sm font-semibold text-rose-500";
                }

                // Show notification error
                if (failedNotifRow) failedNotifRow.classList.remove('hidden');

                // Update banner details
                if (banner) {
                    if (o.status === 'RETURNED') {
                        banner.innerHTML = `
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                                    <i class="fa-solid fa-arrow-rotate-left"></i>
                                </div>
                                <div class="space-y-1">
                                    <h4 class="font-bold text-red-950">TRẠNG THÁI: Chờ hoàn hàng về kho.</h4>
                                    <p class="text-sm text-red-800">Đã gửi thông báo cho Ban cung ứng nhận hàng hoàn trả.</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                ${currentRole === 'SALES' ? `<button type="button" onclick="resolveAction('DELIVERING')" class="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg text-sm transition">Chuyển lại Đang đi phát</button>` : ''}
                            </div>`;
                    } else {
                        banner.innerHTML = `
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                </div>
                                <div class="space-y-1">
                                    <h4 class="font-bold text-amber-900">CẢNH BÁO: Đơn hàng giao không thành công lần 1.</h4>
                                    <p class="text-sm text-amber-800">Lý do từ bưu tá: "Khách hàng thuê bao không liên lạc được khi giao hàng".</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                ${currentRole === 'SALES' ? `
                                <button type="button" onclick="resolveAction('DELIVERING')" class="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-sm shadow-md transition">Yêu cầu Giao Lại (lần 2)</button>
                                <button type="button" onclick="resolveAction('RETURNED')" class="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg text-sm shadow-md transition">Xác nhận Hoàn Hàng</button>
                                ` : '<span class="text-xs text-slate-500 italic">Chờ Sales phụ trách xử lý sự cố giao lỗi</span>'}
                            </div>`;
                    }
                }
            } else {
                // Happy delivery path or delivered success path
                if (banner) banner.classList.add('hidden');
                if (failedNotifRow) failedNotifRow.classList.add('hidden');

                if (o.status === 'SUCCESS') {
                    // All checkpoints green
                    if (node2Icon) {
                        node2Icon.innerHTML = `<i class="fa-solid fa-check"></i>`;
                        node2Icon.className = "w-6 h-6 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 text-[10px] z-10";
                    }
                    if (node2Line) node2Line.className = "w-[2px] bg-emerald-500 flex-1";

                    // Reset Node 2 text
                    if (node2Time) node2Time.innerText = "14:00";
                    if (node2Title) {
                        node2Title.innerText = "Bưu tá đã lấy hàng";
                        node2Title.className = "text-sm font-semibold text-slate-900";
                    }
                    if (telegramRow) telegramRow.classList.remove('hidden');

                    if (node3Icon) {
                        node3Icon.innerHTML = `<i class="fa-solid fa-check"></i>`;
                        node3Icon.className = "w-6 h-6 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 text-[10px] z-10";
                    }
                    if (node3Time) {
                        node3Time.innerText = "18:00";
                        node3Time.className = "text-xs font-semibold text-slate-400";
                    }
                    if (node3Title) {
                        node3Title.innerText = "Giao hàng thành công (Đã ký nhận)";
                        node3Title.className = "text-sm font-semibold text-slate-900";
                    }
                } else if (o.status === 'PENDING') {
                    // Pending: Step 2 and Step 3 are waiting
                    if (node2Icon) {
                        node2Icon.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;
                        node2Icon.className = "w-6 h-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-300 text-[10px] z-10";
                    }
                    if (node2Line) node2Line.className = "w-[2px] bg-slate-200 flex-1";

                    if (node2Time) node2Time.innerText = "...";
                    if (node2Title) {
                        node2Title.innerText = "Chờ bưu tá lấy hàng (Chờ cập nhật)";
                        node2Title.className = "text-sm font-semibold text-slate-500";
                    }
                    if (telegramRow) telegramRow.classList.add('hidden');

                    if (node3Icon) {
                        node3Icon.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;
                        node3Icon.className = "w-6 h-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-300 text-[10px] z-10";
                    }
                    if (node3Time) {
                        node3Time.innerText = "...";
                        node3Time.className = "text-xs font-semibold text-slate-400";
                    }
                    if (node3Title) {
                        node3Title.innerText = "Đang đi phát hàng (Chờ cập nhật)";
                        node3Title.className = "text-sm font-semibold text-slate-500";
                    }
                } else if (o.status === 'PENDING_APPROVAL' || o.status === 'REJECTED') {
                    // Approval process timeline
                    if (node2Icon) {
                        node2Icon.innerHTML = `<i class="fa-solid fa-clock"></i>`;
                        node2Icon.className = "w-6 h-6 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center text-indigo-500 text-[10px] z-10";
                    }
                    if (node2Line) node2Line.className = "w-[2px] bg-slate-200 flex-1";

                    if (node2Time) node2Time.innerText = o.date;
                    if (node2Title) {
                        node2Title.innerText = o.status === 'PENDING_APPROVAL' ? "Chờ Admin phê duyệt để xuất kho" : "Admin từ chối duyệt: " + (o.rejectReason || '');
                        node2Title.className = "text-sm font-semibold " + (o.status === 'PENDING_APPROVAL' ? "text-indigo-600" : "text-rose-600");
                    }
                    if (telegramRow) telegramRow.classList.add('hidden');

                    if (node3Icon) {
                        node3Icon.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;
                        node3Icon.className = "w-6 h-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-300 text-[10px] z-10";
                    }
                    if (node3Time) {
                        node3Time.innerText = "...";
                        node3Time.className = "text-xs font-semibold text-slate-400";
                    }
                    if (node3Title) {
                        node3Title.innerText = "Đang đi phát hàng (Chờ phê duyệt)";
                        node3Title.className = "text-sm font-semibold text-slate-500";
                    }
                } else {
                    // Delivering: Step 3 is waiting
                    if (node2Icon) {
                        node2Icon.innerHTML = `<i class="fa-solid fa-check"></i>`;
                        node2Icon.className = "w-6 h-6 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 text-[10px] z-10";
                    }
                    if (node2Line) node2Line.className = "w-[2px] bg-slate-200 flex-1";

                    // Reset Node 2 text
                    if (node2Time) node2Time.innerText = "14:00";
                    if (node2Title) {
                        node2Title.innerText = "Bưu tá đã lấy hàng";
                        node2Title.className = "text-sm font-semibold text-slate-900";
                    }
                    if (telegramRow) telegramRow.classList.remove('hidden');

                    if (node3Icon) {
                        node3Icon.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;
                        node3Icon.className = "w-6 h-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-300 text-[10px] z-10";
                    }
                    if (node3Time) {
                        node3Time.innerText = "...";
                        node3Time.className = "text-xs font-semibold text-slate-400";
                    }
                    if (node3Title) {
                        node3Title.innerText = "Đang đi phát hàng (Chờ cập nhật)";
                        node3Title.className = "text-sm font-semibold text-slate-500";
                    }
                }
            }

        // Handle Quick Action resolve (Yêu cầu Giao lại / Xác nhận Hoàn hàng)
        function resolveAction(newStatus) {
            const o = orders.find(ord => ord.id === activeOrderId);
            if (o) {
                const oldStatus = o.status;
                o.status = newStatus;

                // If transitioning to RETURNED (Đã chuyển hoàn Hàng) from a non-returned state, return stock to inventory!
                if (newStatus === 'RETURNED' && oldStatus !== 'RETURNED') {
                    const invItem = inventory.find(i => i.name === o.product);
                    if (invItem) {
                        invItem.qty += o.quantity || 1;
                        showToast("Hoàn trả tồn kho", `Đã cộng lại ${o.quantity || 1} sản phẩm ${o.product} vào tồn kho tại vị trí ${invItem.location}.`);
                    }
                }

                // Uncheck error state checkbox if moving to delivering
                const checkbox = document.getElementById('toggle-details-error');
                if (checkbox) {
                    if (newStatus === 'DELIVERING') {
                        checkbox.checked = false;
                    } else if (newStatus === 'RETURNED') {
                        checkbox.checked = true;
                    }
                }

                renderOrderDetails();
                updateDashboardMetrics();
                filterOrders();
            }
        }

        // Retry / Resend SMS notification with visual spinners
        function resendNotification() {
            const text = document.getElementById('resend-text');
            const spinner = document.getElementById('resend-spinner');

            if (text) text.innerText = "Đang gửi...";
            if (spinner) spinner.classList.remove('hidden');

            setTimeout(() => {
                if (text) text.innerText = "Gửi lại";
                if (spinner) spinner.classList.add('hidden');

                const failedRow = document.getElementById('failed-notif-row');
                if (failedRow) {
                    failedRow.innerHTML = `
                        <div class="w-8 h-8 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="space-y-1">
                            <p class="text-xs text-slate-400">Vừa xong</p>
                            <p class="text-xs text-slate-700"><span class="font-bold text-emerald-500">[OK]</span> Gửi SMS Brandname thành công (Đã gửi thủ công).</p>
                        </div>`;
                }
            }, 1500);
        }

        // Populate HTML layout with order variables before printing
        function populatePrintLayout(o) {
            const prCode = document.getElementById('print-order-code');
            if (prCode) prCode.innerText = `#${o.id}`;

            const prName = document.getElementById('print-receiver-name');
            if (prName) prName.innerText = o.name;

            const prPhone = document.getElementById('print-receiver-phone');
            if (prPhone) prPhone.innerText = o.phone;

            const prAddr = document.getElementById('print-receiver-address');
            if (prAddr) prAddr.innerText = o.address;

            const prTrack = document.getElementById('print-tracking-number');
            if (prTrack) prTrack.innerText = o.tracking;

            const prProd = document.getElementById('print-product-name');
            if (prProd) prProd.innerText = o.product;

            const prW = document.getElementById('print-weight');
            if (prW) prW.innerText = `${o.weight} kg`;

            const prCod = document.getElementById('print-cod');
            if (prCod) prCod.innerText = o.cod.toLocaleString('vi-VN') + " đ";

            const prStatus = document.getElementById('print-status');
            if (prStatus) {
                const statusLabels = { PENDING_APPROVAL: "Chờ Duyệt", REJECTED: "Từ Chối Duyệt", PENDING: "Đã tiếp nhận", DELIVERING: "Đang Vận Chuyển", SUCCESS: "Thành Công", FAILED: "Chờ xử lý", RETURNED: "Hoàn Hàng" };
                prStatus.innerText = statusLabels[o.status] || "Đang Vận Chuyển";
            }
        }

        // Print warehouse receipt trigger
        function printWarehouseReceipt() {
            const o = orders.find(ord => ord.id === activeOrderId);
            if (o) {
                populatePrintLayout(o);
                window.print();
            }
        }

        // Create new order submission logic
        function submitNewOrder(event) {
            event.preventDefault();

            // Clear previous errors
            document.getElementById('error-name').classList.add('hidden');
            document.getElementById('error-phone').classList.add('hidden');
            document.getElementById('error-address').classList.add('hidden');
            document.getElementById('error-product').classList.add('hidden');
            document.getElementById('error-weight').classList.add('hidden');
            document.getElementById('form-global-error').classList.add('hidden');

            const name = document.getElementById('form-name').value.trim();
            const phone = document.getElementById('form-phone').value.trim();
            const address = document.getElementById('form-address').value.trim();
            const product = document.getElementById('form-product').value.trim();
            const weightVal = document.getElementById('form-weight').value;
            const weight = parseFloat(weightVal);
            const codVal = document.getElementById('form-cod').value;
            const cod = parseInt(codVal) || 0;

            let hasError = false;

            // Form Validations checks
            if (!name) {
                document.getElementById('error-name').classList.remove('hidden');
                hasError = true;
            }
            if (!phone || phone.length < 10 || isNaN(phone)) {
                document.getElementById('error-phone').classList.remove('hidden');
                hasError = true;
            }
            if (!address) {
                document.getElementById('error-address').classList.remove('hidden');
                hasError = true;
            }
            if (!product) {
                document.getElementById('error-product').classList.remove('hidden');
                hasError = true;
            }
            if (isNaN(weight) || weight <= 0) {
                document.getElementById('error-weight').classList.remove('hidden');
                hasError = true;
            }

            if (hasError) return;

            // Check if simulated network failure is active
            const isApiErrorEnabled = document.getElementById('toggle-api-error').checked;
            if (isApiErrorEnabled) {
                document.getElementById('form-global-error').classList.remove('hidden');
                return;
            }

            // Happy Path submission loader overlay
            const overlay = document.getElementById('loading-overlay');
            if (overlay) {
                overlay.classList.remove('hidden');
                overlay.classList.add('opacity-100');
            }

            setTimeout(() => {
                const randId = "247-00" + (135 + Math.floor(Math.random() * 100));

                // Add to database
                const newOrderObj = {
                    id: randId,
                    tracking: "Chưa cấp",
                    name: name,
                    phone: phone,
                    address: address,
                    product: product,
                    weight: weight,
                    cod: cod,
                    status: "PENDING_APPROVAL", // Always goes to pending approval for checker process
                    date: new Date().toISOString().split('T')[0],
                    creator: "Sales phụ trách"
                };

                orders.push(newOrderObj);

                // Clear fields
                document.getElementById('create-order-form').reset();

                // Hide loading overlay
                if (overlay) {
                    overlay.classList.remove('opacity-100');
                    overlay.classList.add('hidden');
                }

                // Redirect to Order List and display the new row
                switchTab('order-list');
                filterOrders();
                showToast("Tạo đơn hàng thành công", `Đơn hàng ${randId} đang ở trạng thái Chờ Phê Duyệt.`);
            }, 2000);
        }


        // --- DETAILS TAB NAVIGATION SWITCHER ---
        function switchDetailsTab(tabId) {
            if (tabId === 'general') {
                document.getElementById('details-tab-general-content').classList.remove('hidden');
                document.getElementById('details-tab-history-content').classList.add('hidden');
                document.getElementById('tab-details-general').className = 'border-blue-600 text-blue-600 border-b-2 py-3 px-1 text-sm font-semibold transition-all';
                document.getElementById('tab-details-history').className = 'border-transparent text-slate-500 hover:text-slate-700 border-b-2 py-3 px-1 text-sm font-semibold transition-all';
            } else {
                document.getElementById('details-tab-general-content').classList.add('hidden');
                document.getElementById('details-tab-history-content').classList.remove('hidden');
                document.getElementById('tab-details-general').className = 'border-transparent text-slate-500 hover:text-slate-700 border-b-2 py-3 px-1 text-sm font-semibold transition-all';
                document.getElementById('tab-details-history').className = 'border-blue-600 text-blue-600 border-b-2 py-3 px-1 text-sm font-semibold transition-all';
            }
        }

        // --- EDIT ORDER POPUP FUNCTIONS ---
        function openEditOrderPopup() {
            const o = orders.find(ord => ord.id === activeOrderId);
            if (!o) return;

            document.getElementById('edit-validation-error').classList.add('hidden');

            document.getElementById('edit-name').value = o.name;
            document.getElementById('edit-phone').value = o.phone;
            document.getElementById('edit-address').value = o.address;
            document.getElementById('edit-product').value = o.product;
            document.getElementById('edit-price').value = o.price || (o.cod > 0 ? o.cod : 20000000);
            document.getElementById('edit-qty').value = o.quantity || 1;
            document.getElementById('edit-weight').value = o.weight;

            calculateEditCOD();

            document.getElementById('edit-order-modal').classList.remove('hidden');
        }

        function closeEditOrderPopup() {
            document.getElementById('edit-order-modal').classList.add('hidden');
        }

        function calculateEditCOD() {
            const price = parseFloat(document.getElementById('edit-price').value) || 0;
            const qty = parseFloat(document.getElementById('edit-qty').value) || 0;
            const cod = price * qty;
            document.getElementById('edit-cod-display').value = cod.toLocaleString('vi-VN') + ' đ';
        }

        function onEditProductChange(val) {
            const prices = {
                'Macbook Pro M3': 20000000,
                'iPhone 15 Pro': 12000000,
                'iPad Air 5': 7000000,
                'AirPods Pro 2': 3500000
            };
            document.getElementById('edit-price').value = prices[val] || 20000000;
            calculateEditCOD();
        }

        function saveEditedOrder(event) {
            event.preventDefault();
            const o = orders.find(ord => ord.id === activeOrderId);
            if (!o) return;

            const name = document.getElementById('edit-name').value.trim();
            const phone = document.getElementById('edit-phone').value.trim();
            const address = document.getElementById('edit-address').value.trim();
            const product = document.getElementById('edit-product').value;
            const price = parseFloat(document.getElementById('edit-price').value) || 0;
            const qty = parseInt(document.getElementById('edit-qty').value) || 0;
            const weight = parseFloat(document.getElementById('edit-weight').value) || 0;
            const cod = price * qty;

            const errDiv = document.getElementById('edit-validation-error');
            errDiv.classList.add('hidden');

            // 1. Phone number validation
            const phoneRegex = /^0\d{9}$/;
            if (!phoneRegex.test(phone)) {
                errDiv.innerText = 'Số điện thoại nhận phải gồm đúng 10 chữ số và bắt đầu bằng số 0 (ví dụ: 0901234567).';
                errDiv.classList.remove('hidden');
                return;
            }

            // 2. Quantity validation
            if (qty <= 0) {
                errDiv.innerText = 'Số lượng sản phẩm phải lớn hơn 0.';
                errDiv.classList.remove('hidden');
                return;
            }

            // 3. Real-time stock validation
            const invItem = inventory.find(i => i.name === product);
            if (invItem) {
                const oldProductQtyInThisOrder = (o.product === product) ? (o.quantity || 1) : 0;
                const netRequiredQty = qty - oldProductQtyInThisOrder;

                if (netRequiredQty > invItem.qty) {
                    errDiv.innerText = `Số lượng yêu cầu vượt quá tồn kho khả dụng hiện tại (Còn lại: ${invItem.qty} sản phẩm).`;
                    errDiv.classList.remove('hidden');
                    return;
                }

                invItem.qty -= netRequiredQty;
            }

            // 4. Calculate diffs and append logs
            const timestamp = new Date().toLocaleTimeString('vi-VN') + ' ' + new Date().toLocaleDateString('vi-VN');
            const diffs = [];

            if (o.name !== name) diffs.push({ field: 'Họ tên người nhận', old: o.name, new: name });
            if (o.phone !== phone) diffs.push({ field: 'SĐT liên lạc', old: o.phone, new: phone });
            if (o.address !== address) diffs.push({ field: 'Địa chỉ nhận hàng', old: o.address, new: address });
            if (o.product !== product) diffs.push({ field: 'Sản phẩm', old: o.product, new: product });
            if (o.price !== price) diffs.push({ field: 'Đơn giá', old: (o.price || 0).toLocaleString('vi-VN') + ' đ', new: price.toLocaleString('vi-VN') + ' đ' });
            if (o.quantity !== qty) diffs.push({ field: 'Số lượng', old: String(o.quantity || 1), new: String(qty) });
            if (o.weight !== weight) diffs.push({ field: 'Khối lượng', old: o.weight + ' kg', new: weight + ' kg' });
            if (o.cod !== cod) diffs.push({ field: 'Tiền thu hộ COD', old: o.cod.toLocaleString('vi-VN') + ' đ', new: cod.toLocaleString('vi-VN') + ' đ' });

            if (!o.history) o.history = [];

            diffs.forEach(diff => {
                o.history.push({
                    time: timestamp,
                    maker: 'Sales phụ trách',
                    field: diff.field,
                    oldValue: diff.old,
                    newValue: diff.new
                });
            });

            // Update order in memory
            o.name = name;
            o.phone = phone;
            o.address = address;
            o.product = product;
            o.price = price;
            o.quantity = qty;
            o.weight = weight;
            o.cod = cod;

            closeEditOrderPopup();
            viewOrderDetails(o);
            showToast("Cập nhật đơn hàng thành công", "Các thay đổi đã được lưu và ghi nhật ký lịch sử.");
            updateDashboardMetrics();
            filterOrders();
        }

        let reconciliationDiscrepancies = [];

        function simulateExcelImport(event) {
            const file = event.target.files[0];
            if (!file) return;

            showToast("Đang nạp tệp đối soát", "Portal đang đối chiếu dữ liệu thu hộ từ đối tác 247Express...");

            setTimeout(() => {
                reconciliationDiscrepancies = [
                    { id: "247-00125", name: "Le Van C", tracking: "247KLO456", invoice: 15000000, collected: 14800000, discrepancy: 200000, status: "Lệch COD" },
                    { id: "247-00128", name: "Đỗ Văn F", tracking: "247XYZ777", invoice: 2500000, collected: 2500000, discrepancy: 0, status: "Khớp đối soát" }
                ];

                renderReconciliationTable();
                document.getElementById('reconcile-empty-state').classList.add('hidden');
                document.getElementById('reconcile-data-container').classList.remove('hidden');
                showToast("Nạp tệp thành công", "Phát hiện chênh lệch đối soát đối với 1 đơn hàng.");
            }, 1500);
        }

        function renderReconciliationTable() {
            const tbody = document.getElementById('reconcile-table-body');
            if (!tbody) return;

            tbody.innerHTML = reconciliationDiscrepancies.map(item => `
                <tr>
                    <td class="p-4 font-bold text-slate-800">${item.id}</td>
                    <td class="p-4 font-semibold text-slate-900">${item.tracking}</td>
                    <td class="p-4">${item.invoice.toLocaleString('vi-VN')} đ</td>
                    <td class="p-4">${item.collected.toLocaleString('vi-VN')} đ</td>
                    <td class="p-4 ${item.discrepancy > 0 ? 'text-rose-600 font-bold' : 'text-slate-500'}">
                        ${item.discrepancy > 0 ? '-' + item.discrepancy.toLocaleString('vi-VN') + ' đ' : '0 đ'}
                    </td>
                    <td class="p-4 text-center">
                        <span class="px-2.5 py-1 text-xs font-bold rounded-lg ${
                            item.discrepancy > 0 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }">
                            ${item.status}
                        </span>
                    </td>
                    <td class="p-4 text-center">
                        ${item.discrepancy > 0 ? `
                            <button type="button" onclick="resolveSingleDiscrepancy('${item.id}')" class="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs shadow transition">
                                Tất Toán
                            </button>
                        ` : `
                            <span class="text-xs text-slate-400 italic">Đã Khớp</span>
                        `}
                    </td>
                </tr>
            `).join('');
        }

        function autoReconcileAll() {
            const matches = reconciliationDiscrepancies.filter(i => i.discrepancy === 0);
            if (matches.length === 0) {
                showToast("Không có đơn khớp", "Không phát hiện thêm đơn hàng nào có công nợ trùng khớp hoàn toàn.");
                return;
            }

            matches.forEach(item => {
                item.status = "Đã Tất Toán";
                const o = orders.find(ord => ord.id === item.id);
                if (o) o.paymentStatus = "Đã Tất Toán";
            });

            renderReconciliationTable();
            showToast("Tất toán tự động", `Đã tất toán công nợ tự động thành công cho ${matches.length} đơn hàng.`);
        }

        function manualReconcileDiscrepancy() {
            const discrepancyItem = reconciliationDiscrepancies.find(i => i.discrepancy > 0);
            if (!discrepancyItem) {
                showToast("Không có đơn lệch", "Hiện không có đơn hàng nào lệch công nợ cần đối soát.");
                return;
            }

            resolveSingleDiscrepancy(discrepancyItem.id);
        }

        function resolveSingleDiscrepancy(id) {
            const item = reconciliationDiscrepancies.find(i => i.id === id);
            if (!item) return;

            item.discrepancy = 0;
            item.status = "Khớp đối soát (Đã xử lý)";

            const o = orders.find(ord => ord.id === id);
            if (o) {
                o.status = "SUCCESS";
                o.paymentStatus = "Đã tất toán";
            }

            renderReconciliationTable();
            showToast("Tất toán thành công", `Đã xử lý đối soát tất toán thủ công thành công cho đơn #${id}.`);
            updateDashboardMetrics();
            filterOrders();
        }

        function switchRole(role) {
            currentRole = role;

            // Sync Header Display Name, Role name, Avatar letter and styling
            const roleInfo = {
                SALES: { name: "Nguyễn Văn Sales", title: "Sales phụ trách (Maker)", char: "S", bg: "bg-blue-600", defaultTab: "dashboard" },
                CHECKER: { name: "Trần Thị Checker", title: "Quản trị viên (Checker)", char: "C", bg: "bg-purple-600", defaultTab: "dashboard" },
                WH: { name: "Vũ Văn Kho", title: "Thủ kho chuyên trách", char: "K", bg: "bg-amber-600", defaultTab: "replenish-inventory" },

            };

            const info = roleInfo[role] || roleInfo.SALES;
            document.getElementById('user-display-name').innerText = info.name;
            document.getElementById('user-display-role').innerText = info.title;
            const avatar = document.getElementById('user-avatar');
            if (avatar) {
                avatar.innerText = info.char;
                avatar.className = `w-10 h-10 ${info.bg} rounded-full flex items-center justify-center text-white text-lg font-semibold shadow-md transition-all duration-300`;
            }

            // Show/Hide sidebar items based on role
            document.querySelectorAll('.role-nav-item').forEach(btn => {
                btn.classList.add('hidden');
            });
            if (role === 'SALES') {
                document.querySelectorAll('.role-sales').forEach(btn => btn.classList.remove('hidden'));
            } else if (role === 'CHECKER') {
                document.querySelectorAll('.role-checker').forEach(btn => btn.classList.remove('hidden'));
            } else if (role === 'WH') {
                document.querySelectorAll('.role-wh').forEach(btn => btn.classList.remove('hidden'));
                document.querySelectorAll('.role-accountant').forEach(btn => btn.classList.remove('hidden'));
            }

            // Sync dropdown selection just in case
            const switcher = document.getElementById('role-switcher');
            if (switcher) switcher.value = role;

            // Switch to default tab for that role
            if (role === 'ACCOUNTANT') {
                switchTab('reconcile-cod');
            } else {
                switchTab(info.defaultTab);
            }

            // Re-render order table to reflect potential status filter or changes
            filterOrders();
        }

        function showToast(title, msg, type = 'success') {
            const toast = document.getElementById('toast-notif');
            const iconBg = document.getElementById('toast-icon-bg');
            const icon = document.getElementById('toast-icon');
            const titleEl = document.getElementById('toast-title');
            const msgEl = document.getElementById('toast-msg');

            if (!toast) return;

            titleEl.innerText = title;
            msgEl.innerText = msg;

            if (type === 'success') {
                if (iconBg) iconBg.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-emerald-500 text-white';
                if (icon) icon.className = 'fa-solid fa-circle-check';
            } else {
                if (iconBg) iconBg.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-rose-500 text-white';
                if (icon) icon.className = 'fa-solid fa-triangle-exclamation';
            }

            // Slide in
            toast.className = 'fixed bottom-5 right-5 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 z-50 transform translate-y-0 opacity-100 transition-all duration-300 max-w-sm';

            setTimeout(() => {
                // Slide out
                toast.className = 'fixed bottom-5 right-5 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 z-50 transform translate-y-20 opacity-0 transition-all duration-300 max-w-sm';
            }, 3500);
        }

        function renderCheckerApprovalTable() {
            const body = document.getElementById('checker-table-body');
            if (!body) return;
            body.innerHTML = '';

            const pendingApprovalOrders = orders.filter(o => o.status === 'PENDING_APPROVAL');

            if (pendingApprovalOrders.length === 0) {
                body.innerHTML = `
                    <tr>
                        <td colspan="5" class="py-12 px-6 text-center text-slate-400">
                            <i class="fa-solid fa-circle-check text-4xl mb-2 text-emerald-500"></i>
                            <p class="text-sm">Tất cả đơn hàng đã được duyệt xong.</p>
                        </td>
                    </tr>`;
                return;
            }

            pendingApprovalOrders.forEach(o => {
                body.innerHTML += `
                    <tr class="hover:bg-slate-50/50 transition border-b border-slate-100">
                        <td class="py-4 px-6 font-semibold text-slate-950 text-sm">${o.id}</td>
                        <td class="py-4 px-6">
                            <span class="text-sm font-semibold text-slate-900">${o.name}</span>
                            <span class="block text-xs text-slate-500">${o.product} (${o.weight}kg)</span>
                        </td>
                        <td class="py-4 px-6 text-slate-600 text-sm">${o.creator || 'Sales phụ trách'}</td>
                        <td class="py-4 px-6 text-right font-semibold text-slate-900 text-sm">${o.cod.toLocaleString('vi-VN')} đ</td>
                        <td class="py-4 px-6 text-center space-x-2">
                            <button type="button" onclick="approveOrder('${o.id}')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition">
                                <i class="fa-solid fa-check mr-1"></i> Duyệt
                            </button>
                            <button type="button" onclick="openRejectModal('${o.id}')" class="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg text-xs transition">
                                <i class="fa-solid fa-ban mr-1"></i> Từ chối
                            </button>
                        </td>
                    </tr>`;
            });
        }

        function approveOrder(orderId) {
            const o = orders.find(ord => ord.id === orderId);
            if (o) {
                o.status = 'PENDING';
                o.tracking = "247XYZ" + (Math.floor(Math.random() * 900) + 100);

                showToast("Phê duyệt thành công", `Đơn hàng #${orderId} đã được phê duyệt và chuyển sang Đã tiếp nhận.`);
                updateDashboardMetrics();
                renderCheckerApprovalTable();
                filterOrders();
            }
        }

        let activeRejectOrderId = null;
        function openRejectModal(orderId) {
            activeRejectOrderId = orderId;
            document.getElementById('reject-modal-order-id').innerText = '#' + orderId;
            document.getElementById('reject-reason-input').value = '';
            document.getElementById('reject-reason-error').classList.add('hidden');

            const modal = document.getElementById('checker-reject-modal');
            if (modal) {
                modal.classList.remove('hidden');
                setTimeout(() => modal.classList.add('opacity-100'), 50);
            }
        }

        function closeRejectModal() {
            const modal = document.getElementById('checker-reject-modal');
            if (modal) {
                modal.classList.remove('opacity-100');
                setTimeout(() => modal.classList.add('hidden'), 300);
            }
        }

        function submitRejectOrder() {
            const reason = document.getElementById('reject-reason-input').value.trim();
            const error = document.getElementById('reject-reason-error');

            if (reason.length < 10 || reason.length > 200) {
                if (error) error.classList.remove('hidden');
                return;
            }

            const o = orders.find(ord => ord.id === activeRejectOrderId);
            if (o) {
                o.status = 'REJECTED';
                o.rejectReason = reason;

                closeRejectModal();
                showToast("Từ chối duyệt đơn", `Đơn hàng #${activeRejectOrderId} đã bị từ chối duyệt.`, 'error');
                updateDashboardMetrics();
                renderCheckerApprovalTable();
                filterOrders();
            }
        }

        function renderInventoryTable() {
            const body = document.getElementById('inventory-table-body');
            if (!body) return;
            body.innerHTML = '';

            inventory.forEach(item => {
                body.innerHTML += `
                    <tr class="hover:bg-slate-50/50 transition border-b border-slate-100">
                        <td class="py-4 px-6 font-semibold text-slate-800">${item.code}</td>
                        <td class="py-4 px-6 font-semibold text-slate-900">${item.name}</td>
                        <td class="py-4 px-6 text-center text-slate-600 text-sm font-medium">${item.location}</td>
                        <td class="py-4 px-6 text-center">
                            <span class="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold rounded-lg">${item.qty} chiếc</span>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <button type="button" onclick="openReplenishModal('${item.code}')" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs transition flex items-center gap-1 mx-auto">
                                <i class="fa-solid fa-circle-plus"></i> Nhập bổ sung
                            </button>
                        </td>
                    </tr>`;
            });
        }

        function renderReplenishLog() {
            const body = document.getElementById('replenish-log-body');
            if (!body) return;
            body.innerHTML = '';

            replenishLog.forEach(log => {
                body.innerHTML += `
                    <tr class="hover:bg-slate-50/50 transition border-b border-slate-100">
                        <td class="py-3 px-4 text-slate-500">${log.date}</td>
                        <td class="py-3 px-4 font-semibold text-slate-900">${log.user}</td>
                        <td class="py-3 px-4 font-semibold text-slate-800">${log.product}</td>
                        <td class="py-3 px-4 text-center font-bold text-emerald-600">+&nbsp;${log.added}</td>
                        <td class="py-3 px-4 text-center font-bold text-slate-950">${log.total}</td>
                        <td class="py-3 px-4 text-blue-600 hover:underline cursor-pointer"><i class="fa-solid fa-file-pdf mr-1 text-red-500"></i>${log.document}</td>
                    </tr>`;
            });
        }

        let activeReplenishProductCode = null;
        let selectedReplenishFile = "CO_CQ_Default.pdf";

        function openReplenishModal(productCode) {
            activeReplenishProductCode = productCode;
            const item = inventory.find(i => i.code === productCode);
            if (!item) return;

            document.getElementById('replenish-product-name').value = item.name;
            document.getElementById('replenish-current-qty').value = item.qty + " chiếc";
            document.getElementById('replenish-qty-input').value = '';
            document.getElementById('replenish-qty-error').classList.add('hidden');
            document.getElementById('replenish-file-error').classList.add('hidden');
            document.getElementById('replenish-upload-label').innerText = "Chọn file chứng từ lô hàng (CO/CQ)";
            selectedReplenishFile = "CO_CQ_" + item.name.replace(/\s+/g, "_") + ".pdf";

            const modal = document.getElementById('replenish-modal');
            if (modal) {
                modal.classList.remove('hidden');
                setTimeout(() => modal.classList.add('opacity-100'), 50);
            }
        }

        function closeReplenishModal() {
            const modal = document.getElementById('replenish-modal');
            if (modal) {
                modal.classList.remove('opacity-100');
                setTimeout(() => modal.classList.add('hidden'), 300);
            }
        }

        function triggerReplenishFileSelect() {
            const fileInput = document.getElementById('replenish-file-input');
            if (fileInput) fileInput.click();
        }

        function handleReplenishFileSelect(event) {
            const file = event.target.files[0];
            if (!file) return;

            const error = document.getElementById('replenish-file-error');
            if (error) error.classList.add('hidden');

            if (file.size > 5 * 1024 * 1024) {
                if (error) {
                    error.innerText = "Dung lượng file vượt quá giới hạn 5MB";
                    error.classList.remove('hidden');
                }
                return;
            }

            const ext = file.name.split('.').pop().toLowerCase();
            if (ext !== 'pdf' && ext !== 'png' && ext !== 'jpg' && ext !== 'jpeg') {
                if (error) {
                    error.innerText = "Định dạng file không được hỗ trợ (chỉ PDF, PNG, JPG)";
                    error.classList.remove('hidden');
                }
                return;
            }

            selectedReplenishFile = file.name;
            const label = document.getElementById('replenish-upload-label');
            if (label) label.innerText = file.name + ` (${(file.size / (1024*1024)).toFixed(2)} MB)`;
        }

        function submitReplenish() {
            const qtyVal = document.getElementById('replenish-qty-input').value.trim();
            const qty = parseInt(qtyVal);
            const qtyError = document.getElementById('replenish-qty-error');

            if (isNaN(qty) || qty <= 0 || qtyVal.includes('.')) {
                if (qtyError) qtyError.classList.remove('hidden');
                return;
            }

            const item = inventory.find(i => i.code === activeReplenishProductCode);
            if (item) {
                item.qty += qty;

                // Add to replenish log
                const now = new Date();
                const timestamp = now.getFullYear() + '-' +
                                  String(now.getMonth() + 1).padStart(2, '0') + '-' +
                                  String(now.getDate()).padStart(2, '0') + ' ' +
                                  String(now.getHours()).padStart(2, '0') + ':' +
                                  String(now.getMinutes()).padStart(2, '0');

                const newLog = {
                    id: "LOG-0" + (100 + replenishLog.length + 1),
                    date: timestamp,
                    user: "Vũ Văn Kho",
                    product: item.name,
                    added: qty,
                    total: item.qty,
                    document: selectedReplenishFile
                };
                replenishLog.unshift(newLog);

                closeReplenishModal();
                showToast("Nhập kho thành công", `Đã nhập thêm +${qty} chiếc ${item.name} vào kho khả dụng.`);
                renderInventoryTable();
                renderReplenishLog();
            }
        }



        // --- SYSTEM FLOW DIAGRAM LOGIC ---
        const flowPhases = [
            {
                id: 1,
                name: "Khởi tạo &amp; Đồng bộ",
                steps: [
                    { id: "1.1", title: "1. Tạo đơn &amp; Upload file", source: 1, target: 2, direction: 'right', description: "Nhân viên Sales hoặc Admin điền form tạo đơn vận chuyển mới và đính kèm tài liệu CO/CQ của hàng hóa.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-circle-check text-emerald-500 mr-1.5'></i> Họ tên, SĐT, Địa chỉ, Tên sản phẩm, Khối lượng bắt buộc điền.</li><li class='mb-1.5'><i class='fa-solid fa-circle-check text-emerald-500 mr-1.5'></i> Số điện thoại người nhận phải hợp lệ tại Việt Nam (10 số, bắt đầu bằng 0).</li><li class='mb-1.5'><i class='fa-solid fa-circle-check text-emerald-500 mr-1.5'></i> Dung lượng file CO/CQ tối đa 5MB.</li></ul>" },
                    { id: "1.2", title: "2. Validate Form &amp; File Size", source: 2, target: 2, direction: 'self', description: "Hệ thống Portal thực hiện validate dữ liệu nhập vào và kích thước file CO/CQ.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-circle-info text-blue-500 mr-1.5'></i> Nếu có lỗi xảy ra, Portal hiển thị thông báo lỗi inline dạng chữ đỏ ngay phía dưới trường bị lỗi.</li><li class='mb-1.5'><i class='fa-solid fa-circle-info text-blue-500 mr-1.5'></i> Nút 'Xác nhận tạo' bị vô hiệu hóa hoặc không thể thực thi thành công cho đến khi hết lỗi validation.</li></ul>" },
                    { id: "1.3", title: "3. API Create Order", source: 2, target: 3, direction: 'right', description: "Portal thực hiện gửi request tạo vận đơn sang API 247Express sau khi các bước validate thành công.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-triangle-exclamation text-amber-500 mr-1.5'></i> Trường hợp API 247Express lỗi hoặc mất kết nối: Hệ thống Portal hiển thị banner thông báo lỗi màu đỏ kèm nút 'Thử Lại' để gửi lại yêu cầu và không làm mất dữ liệu đã nhập.</li></ul>" },
                    { id: "1.4", title: "4. Trả về Tracking Number", source: 3, target: 2, direction: 'left', description: "Hệ thống 247Express tiếp nhận, tạo đơn thành công và trả về mã vận đơn (Tracking ID).", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-database text-slate-500 mr-1.5'></i> Portal tiếp nhận mã vận đơn để làm cơ sở ánh xạ dữ liệu hành trình với đối tác 247Express.</li></ul>" },
                    { id: "1.5", title: "5. Lưu đơn &amp; đặt PENDING", source: 2, target: 2, direction: 'self', description: "Portal thực hiện lưu thông tin và đổi trạng thái của đơn thành PENDING.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-circle-notch text-blue-500 mr-1.5 animate-spin'></i> Cập nhật cơ sở dữ liệu và chuyển trạng thái đơn hàng của hệ thống sang PENDING (Chờ bưu tá lấy hàng).</li></ul>" },
                    { id: "1.6", title: "6. Trigger SMS tạo đơn", source: 2, target: 4, direction: 'right', description: "Portal gọi dịch vụ thông báo để gửi tin nhắn cho khách hàng nhằm tăng độ tin cậy.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-shield text-emerald-500 mr-1.5'></i> Áp dụng cơ chế idempotency dựa trên ID đơn hàng để đảm bảo tin nhắn không bao giờ bị gửi lặp (ngăn chặn spam).</li></ul>" },
                    { id: "1.7", title: "7. SMS gửi Khách hàng", source: 4, target: 5, direction: 'right', description: "Hệ thống gửi SMS Brandname thành công đến thiết bị di động của khách hàng.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-envelope text-indigo-500 mr-1.5'></i> Tin nhắn mẫu: <i>'VietMec da tiep nhan don hang cua ban. Ma van don: 247XYZ123.'</i></li></ul>" },
                    { id: "1.8", title: "8. Hiển thị thông tin đơn mới", source: 2, target: 1, direction: 'left', description: "Portal hoàn tất luồng và hiển thị chi tiết đơn hàng cho Sales/Admin xem.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-desktop text-blue-500 mr-1.5'></i> Chuyển hướng người dùng về màn hình danh sách hoặc chi tiết đơn kèm thông báo thành công.</li></ul>" }
                ]
            },
            {
                id: 2,
                name: "Cập nhật hành trình",
                steps: [
                    { id: "2.1", title: "1. Bưu tá lấy hàng &amp; quét mã", source: 3, target: 3, direction: 'self', description: "Bưu tá của 247Express đến kho VietMec lấy hàng vật lý và thực hiện quét mã vận đơn.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-qrcode text-slate-500 mr-1.5'></i> Thiết bị bưu tá cập nhật trạng thái đơn trên hệ thống 247Express thành 'Đang vận chuyển'.</li></ul>" },
                    { id: "2.2", title: "2. Webhook: Đang vận chuyển", source: 3, target: 2, direction: 'left', description: "Hệ thống 247Express bắn webhook trạng thái DELIVERING về Web Portal của VietMec.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-server text-blue-500 mr-1.5'></i> <b>Cơ chế dự phòng:</b> Nếu webhook lỗi, hệ thống chạy cronjob quét API 247Express 15 phút một lần để đồng bộ.</li></ul>" },
                    { id: "2.3", title: "3. Cập nhật DB: DELIVERING", source: 2, target: 2, direction: 'self', description: "Portal ghi nhận webhook và cập nhật trạng thái đơn trong DB thành DELIVERING.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-database text-slate-500 mr-1.5'></i> Ghi log lịch sử trạng thái mới.</li></ul>" },
                    { id: "2.4", title: "4. Trigger SMS &amp; Telegram Alert", source: 2, target: 4, direction: 'right', description: "Portal gọi các service để trigger gửi tin nhắn hành trình và alert Telegram.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-list-check text-blue-500 mr-1.5'></i> Đảm bảo kiểm tra trạng thái trước khi bắn tin để tránh gửi lặp.</li></ul>" },
                    { id: "2.5", title: "5. SMS gửi Khách hàng", source: 4, target: 5, direction: 'right', description: "Hệ thống SMS gửi tin nhắn báo cho khách hàng biết đơn hàng đang được đi giao.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-mobile-screen text-indigo-500 mr-1.5'></i> Nội dung SMS: <i>'Don hang 247XYZ123 dang duoc giao den ban. Vui long chu y dien thoai.'</i></li></ul>" },
                    { id: "2.6", title: "6. Telegram gửi nhóm Sales", source: 4, target: 1, direction: 'left', description: "Bot Telegram gửi alert tự động tới group chat nội bộ của Sales.", rules: "<ul><li class='mb-1.5'><i class='fa-brands fa-telegram text-blue-400 mr-1.5'></i> Mẫu tin nhắn: <i>'[VẬN CHUYỂN] Đơn hàng #247-00123 của KH Nguyen Van A đang được đi giao. Mã vận đơn: 247XYZ123.'</i></li></ul>" },
                    { id: "2.7", title: "7. Phản hồi Webhook 200 OK", source: 2, target: 3, direction: 'right', description: "Portal trả về status HTTP 200 OK cho 247Express để kết thúc luồng nhận webhook.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-check text-emerald-500 mr-1.5'></i> Trả về response nhanh tránh gây nghẽn hàng đợi webhook bên đối tác.</li></ul>" }
                ]
            },
            {
                id: 3,
                name: "Lỗi giao hàng &amp; Xử lý",
                steps: [
                    { id: "3.1", title: "1. Webhook: Giao thất bại", source: 3, target: 2, direction: 'left', description: "Bưu tá báo giao lỗi lần 1, 247Express gửi Webhook báo giao thất bại kèm lý do.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-circle-xmark text-rose-500 mr-1.5'></i> Portal cập nhật trạng thái đơn thành <b>FAILED</b> (Tạm tính là Thất bại).</li><li class='mb-1.5'><i class='fa-solid fa-align-left text-slate-500 mr-1.5'></i> Ghi nhận và hiển thị chi tiết lý do lỗi từ bưu tá (Ví dụ: <i>'Khách thuê bao không nghe máy'</i>).</li></ul>" },
                    { id: "3.2", title: "2. Trigger Telegram Alert sự cố", source: 2, target: 4, direction: 'right', description: "Hệ thống ghi nhận sự cố, trigger Telegram alert khẩn.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-triangle-exclamation text-rose-500 mr-1.5'></i> <b>Xử lý lỗi gửi:</b> Nếu tin nhắn SMS Brandname gửi đi bị lỗi (do nhà mạng), hệ thống hiển thị nút 'Gửi lại' màu đỏ trong trang chi tiết để gửi lại thủ công.</li></ul>" },
                    { id: "3.3", title: "3. Telegram Alert gửi Sales", source: 4, target: 1, direction: 'left', description: "Bot Telegram bắn alert sự cố kèm lý do chi tiết và SĐT khách cho nhóm Sales.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-phone text-blue-500 mr-1.5'></i> Tin nhắn Telegram chứa số điện thoại khách để Sales bấm gọi hỗ trợ ngay lập tức.</li></ul>" },
                    { id: "3.4", title: "4. Phản hồi Webhook 200 OK", source: 2, target: 3, direction: 'right', description: "Portal trả về status HTTP 200 OK cho 247Express để xác nhận nhận webhook.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-check text-emerald-500 mr-1.5'></i> Phản hồi nhanh để đối tác đóng transaction webhook.</li></ul>" },
                    { id: "3.5", title: "5. Sales xem chi tiết đơn", source: 1, target: 2, direction: 'right', description: "Sales truy cập Portal kiểm tra thông tin đơn lỗi.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-search text-slate-500 mr-1.5'></i> Tìm kiếm đơn hoặc click trực tiếp từ link Telegram.</li></ul>" },
                    { id: "3.6", title: "6. Hiển thị Banner xử lý khẩn", source: 2, target: 1, direction: 'left', description: "Portal hiển thị trang chi tiết đơn kèm Banner cảnh báo có 2 nút [Yêu cầu giao lại] và [Xác nhận hoàn hàng].", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-flag text-rose-500 mr-1.5'></i> Banner nổi bật giúp hướng dẫn người dùng điều phối khẩn cấp.</li></ul>" },
                    { id: "3.7a", title: "7a. [Giao lại] Gọi API giao lại", source: 2, target: 3, direction: 'right', description: "Nếu Sales chọn giao lại, Portal gọi API điều phối của 247Express và đưa đơn về trạng thái DELIVERING.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-rotate text-blue-500 mr-1.5'></i> Hệ thống chuyển đổi trạng thái của đơn về <b>DELIVERING</b>.</li></ul>" },
                    { id: "3.7b", title: "7b. [Hoàn hàng] Gọi API hoàn trả", source: 2, target: 3, direction: 'right', description: "Nếu Sales chọn hoàn hàng, Portal gọi API hoàn trả của 247Express và chuyển đơn sang trạng thái RETURNED.", rules: "<ul><li class='mb-1.5'><i class='fa-solid fa-reply text-red-500 mr-1.5'></i> Hệ thống chuyển đổi trạng thái của đơn về <b>RETURNED</b> (Chờ hoàn về kho).</li></ul>" }
                ]
            }
        ];

        function renderFlowDiagram(phaseId) {
            const wrapper = document.getElementById('flow-arrows-wrapper');
            if (!wrapper) return;
            wrapper.innerHTML = '';

            // Re-render vertical lifelines to ensure clean layer order
            wrapper.innerHTML = `
                <div class="absolute inset-y-0 left-[9%] w-[1px] border-l border-dashed border-slate-800/80 pointer-events-none"></div>
                <div class="absolute inset-y-0 left-[29%] w-[1px] border-l border-dashed border-slate-800/80 pointer-events-none"></div>
                <div class="absolute inset-y-0 left-[50%] w-[1px] border-l border-dashed border-slate-800/80 pointer-events-none"></div>
                <div class="absolute inset-y-0 left-[71%] w-[1px] border-l border-dashed border-slate-800/80 pointer-events-none"></div>
                <div class="absolute inset-y-0 left-[91%] w-[1px] border-l border-dashed border-slate-800/80 pointer-events-none"></div>
            `;

            const steps = flowPhases[phaseId - 1].steps;

            steps.forEach((step, idx) => {
                const topOffset = 15 + idx * 68; // vertical spacing
                const colPositions = [0, 9, 29, 50, 71, 91]; // 1-indexed for columns

                let left, width, arrowClass, lineClass;

                if (step.direction === 'right') {
                    const startCol = step.source;
                    const endCol = step.target;
                    left = colPositions[startCol];
                    width = colPositions[endCol] - colPositions[startCol];
                    arrowClass = "fa-solid fa-caret-right absolute right-[-2px] top-1/2 -translate-y-1/2 text-blue-500 text-sm";
                    lineClass = "bg-blue-500";
                } else if (step.direction === 'left') {
                    const startCol = step.source;
                    const endCol = step.target;
                    left = colPositions[endCol];
                    width = colPositions[startCol] - colPositions[endCol];
                    arrowClass = "fa-solid fa-caret-left absolute left-[-2px] top-1/2 -translate-y-1/2 text-amber-500 text-sm";
                    lineClass = "bg-amber-500";
                } else if (step.direction === 'self') {
                    left = colPositions[step.source];
                    width = 8; // small loop width %
                    arrowClass = "";
                }

                let innerArrowHTML = '';
                if (step.direction === 'self') {
                    // Render a small looping bracket
                    innerArrowHTML = `
                        <div class="absolute left-0 top-[2px] w-8 h-[40px] border-t-2 border-r-2 border-b-2 border-slate-500 rounded-r-md pointer-events-none"></div>
                        <i class="fa-solid fa-caret-left absolute left-[-2px] top-[37px] text-slate-400 text-xs"></i>
                        <span class="absolute left-10 top-[12px] text-[10px] font-bold text-slate-200 bg-slate-800 px-2 py-1 rounded border border-slate-700 shadow-md whitespace-nowrap hover:text-white transition-all cursor-pointer">
                            ${step.title}
                        </span>
                    `;
                } else {
                    // Render horizontal line with arrowhead
                    innerArrowHTML = `
                        <div class="w-full h-[2px] ${lineClass} relative">
                            <i class="${arrowClass}"></i>
                            <span class="absolute left-1/2 -translate-x-1/2 -top-5 text-[10px] font-bold text-slate-200 bg-slate-800 px-2 py-1 rounded border border-slate-700 shadow-md whitespace-nowrap hover:text-white transition-all cursor-pointer">
                                ${step.title}
                            </span>
                        </div>
                    `;
                }

                const stepDiv = document.createElement('div');
                stepDiv.className = `absolute h-12 cursor-pointer transition-all duration-200 hover:scale-[1.02]`;
                stepDiv.style.top = `${topOffset}px`;
                stepDiv.style.left = `${left}%`;
                stepDiv.style.width = `${width}%`;
                stepDiv.id = `flow-step-${step.id}`;
                stepDiv.onclick = () => selectFlowStep(step.id, phaseId);

                stepDiv.innerHTML = innerArrowHTML;
                wrapper.appendChild(stepDiv);
            });

            // Select first step by default
            if (steps.length > 0) {
                selectFlowStep(steps[0].id, phaseId);
            }
        }

        function selectFlowStep(stepId, phaseId) {
            // Remove active/selected highlights from all arrows
            document.querySelectorAll('#flow-arrows-wrapper > div').forEach(div => {
                if (div.id.startsWith('flow-step-')) {
                    div.classList.remove('opacity-100');
                    div.classList.add('opacity-50');
                }
            });

            // Highlight the selected step arrow
            const activeDiv = document.getElementById(`flow-step-${stepId}`);
            if (activeDiv) {
                activeDiv.classList.remove('opacity-50');
                activeDiv.classList.add('opacity-100');
            }

            // Find the step details
            const phase = flowPhases[phaseId - 1];
            const step = phase.steps.find(s => s.id === stepId);
            if (!step) return;

            const detailsEl = document.getElementById('flow-details-card');
            if (detailsEl) {
                detailsEl.innerHTML = `
                    <div class="space-y-6 flex-1 flex flex-col justify-between h-full">
                        <div class="space-y-4">
                            <div class="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                                <span class="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                                    ${step.id}
                                </span>
                                <h4 class="font-bold text-slate-900 text-sm font-title leading-tight">${step.title}</h4>
                            </div>

                            <div class="space-y-1.5">
                                <h5 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mô tả Nghiệp vụ</h5>
                                <p class="text-xs text-slate-600 leading-relaxed">${step.description}</p>
                            </div>

                            <div class="space-y-1.5">
                                <h5 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quy tắc &amp; Kiểm tra (Rules)</h5>
                                <div class="text-xs text-slate-600 leading-relaxed max-h-48 overflow-y-auto pr-1">
                                    ${step.rules}
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                            <span>Nguồn: <strong class="text-slate-600">${getParticipantName(step.source)}</strong></span>
                            <span>Đích: <strong class="text-slate-650">${getParticipantName(step.target)}</strong></span>
                        </div>
                    </div>
                `;
            }
        }

        function getParticipantName(colId) {
            const names = ["", "Sales / Admin", "Web Portal", "247Express", "SMS &amp; Telegram", "Khách hàng"];
            return names[colId] || "";
        }

        function switchFlowPhase(phaseId) {
            // Update button styles
            for (let i = 1; i <= 3; i++) {
                const btn = document.getElementById(`btn-phase-${i}`);
                if (btn) {
                    if (i === phaseId) {
                        btn.className = "px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-md transition-all";
                    } else {
                        btn.className = "px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all";
                    }
                }
            }
            renderFlowDiagram(phaseId);
        }

        function setFlowViewMode(mode) {
            const visualBtn = document.getElementById('btn-view-visual');
            const umlBtn = document.getElementById('btn-view-plantuml');
            const container = document.getElementById('flow-diagram-container');
            const details = document.getElementById('flow-details-card');
            const umlBlock = document.getElementById('flow-plantuml-block');

            if (mode === 'visual') {
                if (visualBtn) visualBtn.className = "px-3 py-1 bg-slate-900 text-white text-[11px] font-bold rounded-md transition-all";
                if (umlBtn) umlBtn.className = "px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold rounded-md transition-all";
                if (container) container.classList.remove('hidden');
                if (details) details.classList.remove('hidden');
                if (umlBlock) umlBlock.classList.add('hidden');
            } else {
                if (visualBtn) visualBtn.className = "px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold rounded-md transition-all";
                if (umlBtn) umlBtn.className = "px-3 py-1 bg-slate-900 text-white text-[11px] font-bold rounded-md transition-all";
                if (container) container.classList.add('hidden');
                if (details) details.classList.add('hidden');
                if (umlBlock) umlBlock.classList.remove('hidden');

                // Populate PlantUML code content
                const codeEl = document.getElementById('plantuml-code-content');
                if (codeEl) codeEl.innerText = getPlantUMLCodeText();
            }
        }

        function getPlantUMLCodeText() {
            return `@startuml
autonumber
skinparam BoxPadding 10
skinparam ParticipantPadding 10

actor "Sales / Admin" as User
participant "Web Portal VietMec" as System
participant "Hệ thống 247Express" as Courier
participant "SMS &amp; Telegram Bot" as Notif
actor "Khách hàng" as Cust

== 1. TẠO ĐƠN &amp; ĐỒNG BỘ VẬN CHUYỂN ==
User -> System: Điền form tạo đơn + Upload file CO/CQ
activate System
System -> System: Validate thông tin bắt buộc\\n& dung lượng file (< 5MB)
System -> Courier: Gửi yêu cầu khởi tạo đơn hàng (Create Order API)
activate Courier
Courier --> System: Phản hồi thành công + Trả về Mã vận đơn (Tracking Number)
deactivate Courier
System -> System: Lưu thông tin đơn &amp; đặt Trạng thái: PENDING
System -> Notif: Gửi SMS thông báo tạo đơn
activate Notif
Notif -> Cust: SMS Brandname: "Đơn hàng đã được tạo thành công"
deactivate Notif
System --> User: Hiển thị thông tin đơn hàng mới tạo
deactivate System

== 2. THEO DÕI HÀNH TRÌNH TỰ ĐỘNG ==
Courier -> Courier: Bưu tá lấy hàng &amp; quét mã
Courier -> System: Gửi Webhook cập nhật trạng thái: ĐANG VẬN CHUYỂN
activate System
System -> System: Cập nhật Trạng thái đơn: DELIVERING
System -> Notif: Gửi tin nhắn cập nhật hành trình đơn
activate Notif
Notif -> Cust: SMS Brandname: "Đơn hàng đang được giao..."
Notif -> User: Alert Telegram nhóm Sales: "Đơn hàng bắt đầu giao"
deactivate Notif
System --> Courier: Phản hồi nhận webhook thành công (200 OK)
deactivate System

== 3. XỬ LÝ LỖI GIAO HÀNG (EDGE CASE) ==
Courier -> Courier: Giao hàng thất bại lần 1 (Không liên lạc được)
Courier -> System: Gửi Webhook cập nhật trạng thái: GIAO THẤT BẠI
activate System
System -> System: Cập nhật Trạng thái đơn: FAILED\\n& Lưu lý do giao lỗi
System -> Notif: Gửi cảnh báo sự cố
activate Notif
Notif -> User: Alert Telegram nhóm Sales: "Đơn hàng giao lỗi lần 1: Khách không liên lạc được"
deactivate Notif
System --> Courier: Phản hồi nhận webhook thành công (200 OK)
deactivate System

...
User -> System: Truy cập trang chi tiết đơn hàng #247-xxx
activate System
System --> User: Hiển thị chi tiết đơn + Banner đề xuất hành động nhanh
deactivate System

alt Lựa chọn 1: Yêu cầu giao lại
    User -> System: Nhấn nút [Yêu cầu Giao Lại]
    activate System
    System -> Courier: Gửi API yêu cầu giao lại lần 2
    Courier --> System: Xác nhận yêu cầu giao lại thành công
    System -> System: Chuyển trạng thái đơn về DELIVERING
    System --> User: Thông báo cập nhật thành công
    deactivate System
else Lựa chọn 2: Xác nhận hoàn hàng
    User -> System: Nhấn nút [Xác nhận Hoàn Hàng]
    activate System
    System -> Courier: Gửi API yêu cầu hoàn hàng
    Courier --> System: Xác nhận chuyển trạng thái hoàn
    System -> System: Cập nhật trạng thái đơn: RETURNED (Chờ hoàn hàng)
    System --> User: Thông báo cập nhật thành công
    deactivate System
end
@endum`;
        }

        function copyPlantUMLCode() {
            const codeText = getPlantUMLCodeText();
            navigator.clipboard.writeText(codeText).then(() => {
                const btnText = document.getElementById('copy-btn-text');
                if (btnText) {
                    btnText.innerText = "Đã sao chép!";
                    setTimeout(() => {
                        btnText.innerText = "Sao chép mã";
                    }, 2000);
                }
            });
        }
    