export const VACT_EXAM_STRUCTURE = {
  examYear: "2026",
  officialTitle: "Kỳ thi Đánh giá năng lực ĐHQG TP.HCM (V-ACT)",
  totalQuestions: 120,
  totalTimeMinutes: 150,
  maxScore: 1200,
  sections: [
    {
      id: "part1",
      title: "Phần 1: Sử dụng ngôn ngữ",
      questionCount: 40,
      timeMinutes: 45,
      subsections: [
        { name: "Tiếng Việt", count: 20, focus: "Chính tả, từ vựng, cú pháp, đọc hiểu tác phẩm & văn bản nghệ thuật/khoa học" },
        { name: "Tiếng Anh", count: 20, focus: "Nữ pháp, từ vựng, giao tiếp, đọc hiểu ngữ cảnh & suy luận" }
      ]
    },
    {
      id: "part2",
      title: "Phần 2: Toán học, Tư duy logic và Phân tích số liệu",
      questionCount: 30,
      timeMinutes: 50,
      subsections: [
        { name: "Toán học", count: 10, focus: "Toán phổ thông, tư duy giải thuật, mô hình hóa toán học" },
        { name: "Tư duy logic", count: 10, focus: "Suy luận mệnh đề, lập luận điều kiện, tổ hợp sắp xếp" },
        { name: "Phân tích số liệu", count: 10, focus: "Đọc bảng biểu, biểu đồ cột/đường/tròn, tính toán tốc độ & chỉ số" }
      ]
    },
    {
      id: "part3",
      title: "Phần 3: Giải quyết vấn đề (Suy luận khoa học)",
      questionCount: 50,
      timeMinutes: 55,
      subsections: [
        { name: "Vật lý", count: 10, focus: "Hiện tượng tự nhiên, suy luận thí nghiệm, đồ thị vật lý" },
        { name: "Hóa học", count: 10, focus: "Phản ứng, định lượng, thí nghiệm & ứng dụng thực tiễn" },
        { name: "Sinh học", count: 10, focus: "Di truyền, sinh thái, cơ chế sinh học & bảng số liệu thí nghiệm" },
        { name: "Lịch sử & Địa lý", count: 20, focus: "Phân tích tài liệu lịch sử, bản đồ/Atlas, biểu đồ địa lý & dữ liệu kinh tế" }
      ]
    }
  ],
  disclaimer: "Dữ liệu cấu trúc được cập nhật theo thông tin chính thức của ĐHQG-HCM cho kỳ thi V-ACT 2026. V-ACT Mind cập nhật liên tục khi có điều chỉnh."
};
