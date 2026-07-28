# 🚀 Sangsang V-ACT — Nền Tảng Chẩn Đoán Năng Lực & Luyện Thi ĐGNL ĐHQG TP.HCM 2026

![React 19](https://img.shields.io/badge/React-19.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.1-646cff?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

> **Sangsang V-ACT** là ứng dụng web hiện đại giúp học sinh THPT chẩn đoán năng lực, luyện thi bài bản và tối ưu hóa điểm số cho **Kỳ thi Đánh giá Năng lực (ĐGNL) ĐHQG TP.HCM năm 2026**.

---

## 💡 Nổi Bật Về Tính Năng (Key Features)

### 1. ⚡ Chẩn Đoán Năng Lực Nhanh (20 Phút)
- Đánh giá tổng quan 6 nhóm kỹ năng cốt lõi theo ma trận ĐHQG TP.HCM.
- Dự đoán khoảng điểm V-ACT chính xác trên thang 1.200 điểm ($0 - 1200$).
- Phân tích chi tiết điểm mạnh, điểm yếu và đưa ra gợi ý lộ trình cải thiện cá nhân hóa.

### 2. 📚 Kho 100+ Đề Thi Thử V-ACT 120 Câu Chuẩn Ma Trận
- Bộ đề thi thử sát với cấu trúc ĐHQG TP.HCM công bố (Các năm 2026, 2025, 2024).
- Đồng hồ canh giờ mô phỏng áp lực phòng thi thực tế (150 phút).
- Lời giải chi tiết từ Ban Chuyên môn kèm giải thích lý do vì sao các phương án khác sai.
- **Tính năng tự động**: Chuyển nút *"Câu tiếp theo"* thành *"Nộp bài thi"* khi thí sinh làm đến câu cuối cùng ($120/120$, $20/20$).

### 3. 🎯 Luyện Tập Theo Chuyên Đề & Phân Môn
- Tùy chỉnh luyện sâu vào từng phân môn cụ thể:
  - **Toán học & Tính toán** (30 câu)
  - **Tiếng Việt & Đọc hiểu** (30 câu)
  - **Tiếng Anh / English** (20 câu)
  - **Logic & Phân tích số liệu** (12 câu)
  - **Suy luận Khoa học Tự nhiên & Xã hội** (28 câu)
- Tự chọn thời gian canh giờ (15 phút, 30 phút, 45 phút) và nguồn đề (2026, 2025, 2024).

### 4. 🎓 Công Cụ Tra Cứu Trường & Ngành
- Tra cứu và so sánh điểm chuẩn V-ACT từ các trường Đại học thành viên ĐHQG TP.HCM và trường liên kết qua các năm (2023 - 2025).
- Đánh giá cơ hội trúng tuyển dựa trên kết quả chẩn đoán năng lực cá nhân.

### 5. 📖 Sổ Tay Câu Sai (Spaced Repetition Notebook)
- Lưu trữ tự động toàn bộ câu làm sai qua các lần thi.
- Phân loại câu hỏi theo chuyên đề và mức độ cần ôn lại.

### 6. 👨‍👩‍👧 Góc Phụ Huynh & Báo Cáo Tiến Độ
- Báo cáo định kỳ mức độ hoàn thành nhiệm vụ và chỉ số tiến bộ của học sinh.
- Đề xuất lời khuyên thực tế từ Mentor để phụ huynh đồng hành cùng con.

### 7. 📱 Trải Nghiệm Responsive Mượt Mà Trên Thiết Bị Di Động
- Thanh điều hướng đáy di động (**MobileBottomNav**) tối ưu chạm bấm.
- Hệ thống ghi nhớ và khôi phục trang trước khi đóng các cửa sổ Pop-up.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Frontend**: React 19, TypeScript 5, Vite 6
- **Styling**: TailwindCSS, CSS Glassmorphism & Modern UI Design
- **Icons**: Lucide React Icons
- **Biểu đồ & Phân tích**: Recharts (Radar Chart, Progress Bar)
- **Hiệu ứng**: Canvas Confetti

---

## 📁 Cấu Trúc Thư Mục Dự Án (Project Structure)

```text
isinhvien/
├── public/                 # Tài nguyên tĩnh (Hình ảnh, Logo, Favicon)
├── src/
│   ├── components/         # Các React Component theo mô-đun
│   │   ├── common/         # Component dùng chung (Modal, Toast, Card)
│   │   ├── community/      # Diễn đàn hỏi đáp & Giáo viên
│   │   ├── dashboard/      # Bảng điều hành & Góc Phụ huynh
│   │   ├── diagnostic/     # Phòng thi chẩn đoán năng lực
│   │   ├── exam/           # Kho đề thi thử & Mô phỏng phòng thi
│   │   ├── home/           # Trang chủ giới thiệu & Hero Banner
│   │   ├── layout/         # Navbar, Footer & MobileBottomNav
│   │   ├── learn/          # Khóa học & Lộ trình 4 bước
│   │   ├── practice/       # Pop-up Luyện tập theo Chuyên đề
│   │   ├── profile/        # Trang cá nhân & Sổ tay câu sai
│   │   ├── roadmap/        # Lộ trình học tập chi tiết
│   │   ├── seo/            # Trang chi tiết bài viết & tài liệu
│   │   └── tools/          # Công cụ tra cứu trường & ngành
│   ├── data/               # Ngân hàng đề thi & Dữ liệu mô phỏng
│   │   ├── de-minh-hoa-2026.ts
│   │   ├── de-minh-hoa-2025.ts
│   │   ├── de-minh-hoa-legacy.ts
│   │   ├── mock-exams-library.ts
│   │   └── universities-data.ts
│   ├── services/           # Dịch vụ Giả lập Auth & Lưu trữ Local
│   ├── types/              # Định nghĩa kiểu dữ liệu TypeScript
│   ├── App.tsx             # Component điều phối chính & Routing
│   ├── index.css           # Cấu hình Tailwind & Custom Styles
│   └── main.tsx            # Entry Point ứng dụng
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Cục Bộ (Getting Started)

### Yêu cầu hệ thống:
- **Node.js**: phiên bản `>= 18.0.0`
- **npm** hoặc **yarn**

### Các bước thực hiện:

1. **Clone Repository về máy**:
   ```bash
   git clone https://github.com/phucsangg/isinhvien.git
   cd isinhvien
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies)**:
   ```bash
   npm install
   ```

3. **Khởi chạy máy chủ phát triển (Dev Server)**:
   ```bash
   npm run dev
   ```
   Sau đó mở trình duyệt và truy cập: **`http://localhost:3000/`** (hoặc port được chỉ định bởi Vite).

4. **Biên dịch Dự án (Build for Production)**:
   ```bash
   npm run build
   ```

---

## 📝 Giấy Phép & Bản Quyền (License)

Dự án thuộc bản quyền phát triển bởi **Sangsang Education**. All rights reserved.
