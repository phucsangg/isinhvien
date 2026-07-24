export interface Teacher {
  id: string;
  name: string;
  title: string;
  subject: string;
  avatar: string;
  avatarClass?: string;
  badge: string;
  experienceYears: number;
  studentsTaught: number;
  rating: number;
  quote: string;
  highlights: string[];
}

export const REAL_SANGSANG_TEACHERS: Teacher[] = [
  {
    id: 'tch-00',
    name: 'Thầy Bùi Văn Công',
    title: 'Thạc sĩ ĐHQG TP.HCM • Chuyên gia V-ACT #1',
    subject: 'Toán học, Logic & Phân tích số liệu V-ACT',
    avatar: '/images/teachers/thay_bui_van_cong.png',
    avatarClass: 'object-center',
    badge: 'Chuyên gia Hàng đầu V-ACT ĐHQG-HCM',
    experienceYears: 15,
    studentsTaught: 65000,
    rating: 4.99,
    quote: 'Chiến thuật làm bài V-ACT không nằm ở giải trâu bò, mà ở khả năng nhận diện mô hình dữ liệu trong 30 giây.',
    highlights: [
      'Thạc sĩ ĐH KHTN ĐHQG TP.HCM • Cử nhân Ngôn ngữ Anh ĐH KHXH&NV',
      '15+ năm kinh nghiệm giảng dạy & chuyên sâu thi ĐGNL V-ACT',
      'Người sáng lập cộng đồng Ôn thi ĐGNL lớn nhất với hàng trăm nghìn học sinh',
      'Tác giả chuỗi sách ma trận giải nhanh Logic & Số liệu Sangsang'
    ]
  },
  {
    id: 'tch-01',
    name: 'Thầy Phạm Minh Nhật',
    title: 'Chuyên gia Ngữ văn • Sangsang Master Teacher',
    subject: 'Tiếng Việt & Đọc hiểu Ngữ văn V-ACT',
    avatar: '/images/teachers/thay_pham_minh_nhat.jpg',
    avatarClass: 'object-[center_top] scale-110',
    badge: 'Chuyên gia Luyện văn Đỉnh cao',
    experienceYears: 12,
    studentsTaught: 58000,
    rating: 4.98,
    quote: 'Tiếng Việt V-ACT đòi hỏi sự tinh tế về tư duy ngôn ngữ và ngữ cảnh. Thầy sẽ giúp em đạt điểm tối đa.',
    highlights: [
      'Giáo viên Ngữ văn nổi tiếng hàng đầu Việt Nam',
      'Đào tạo hàng chục nghìn học sinh đạt điểm 9+ Ngữ văn & Tiếng Việt',
      'Phương pháp phân tích tư duy văn bản trích xuất siêu tốc',
      'Chuyên gia biên soạn đề Ngôn ngữ Tiếng Việt Sangsang'
    ]
  },
  {
    id: 'tch-02',
    name: 'Cô Nguyễn Hương Sen',
    title: 'Thạc sĩ Lịch sử • THPT Chuyên Chu Văn An',
    subject: 'Khoa học Xã hội & Lịch sử V-ACT',
    avatar: '/images/teachers/co_nguyen_huong_sen.png',
    avatarClass: 'object-center',
    badge: 'Thủ khoa ĐH Sư phạm Hà Nội',
    experienceYears: 12,
    studentsTaught: 35000,
    rating: 4.98,
    quote: 'Hiểu bản chất sự kiện giúp học sinh suy luận đúng 100% câu hỏi ĐGNL mà không cần học thuộc lòng.',
    highlights: [
      'Thủ khoa ĐH Sư phạm Hà Nội, Thạc sĩ ĐH KHXH&NV',
      'Giáo viên trường THPT Chuyên Chu Văn An (Hà Nội)',
      'Đào tạo nhiều Thủ khoa khối C00 toàn quốc (2023-2026)',
      'Chuyên gia biên soạn ma trận đề thi Xã hội V-ACT Sangsang'
    ]
  },
  {
    id: 'tch-03',
    name: 'Thầy Phạm Văn Thuận',
    title: 'Thạc sĩ Hóa học • Giảng viên VTV',
    subject: 'Suy luận Hóa học & Thí nghiệm V-ACT',
    avatar: '/images/teachers/thay_pham_van_thuan.png',
    avatarClass: 'object-[68%_8%] scale-[1.25]',
    badge: 'Giáo viên Truyền hình VTV',
    experienceYears: 14,
    studentsTaught: 48000,
    rating: 4.97,
    quote: 'Mỗi bài toán thí nghiệm Hóa học V-ACT đều có chìa khóa logic. Thầy giúp các em bứt phá tư duy.',
    highlights: [
      'Thạc sĩ Lý luận & Phương pháp giảng dạy Hóa học',
      'Giáo viên giảng dạy chính thức trên Đài Truyền hình Việt Nam',
      'Tác giả phương pháp giải nhanh Hóa học thực tiễn',
      'Chuyên gia hướng dẫn phần Suy luận Khoa học Sangsang'
    ]
  },
  {
    id: 'tch-04',
    name: 'Cô Hoàng Thị Mai Anh',
    title: 'Thạc sĩ Địa lý • Tác giả sách ĐGNL',
    subject: 'Phân tích Số liệu & Biểu đồ V-ACT',
    avatar: '/images/teachers/co_hoang_thi_mai_anh.png',
    avatarClass: 'object-[center_12%] scale-[1.35]',
    badge: 'Tốt nghiệp Xuất sắc ĐH Sư phạm',
    experienceYears: 10,
    studentsTaught: 29000,
    rating: 4.96,
    quote: 'Biểu đồ và Atlas không phải để học thuộc, mà để đọc vị xu hướng số liệu trong 30 giây.',
    highlights: [
      'Thạc sĩ Lí luận & Phương pháp dạy học Địa lý',
      'Tốt nghiệp Xuất sắc ĐH Sư phạm Hà Nội',
      'Tác giả chuỗi đầu sách luyện thi ĐGNL & THPT bán chạy',
      'Chuyên gia Phân tích Số liệu & Bảng thống kê Sangsang'
    ]
  },
  {
    id: 'tch-05',
    name: 'Thầy Vũ Tuấn Anh',
    title: 'Thạc sĩ Vật lý • Học bổng Master Quốc tế',
    subject: 'Vật lý Ứng dụng & Mô hình hóa V-ACT',
    avatar: '/images/teachers/thay_vu_tuan_anh.png',
    avatarClass: 'object-[center_12%] scale-[1.3]',
    badge: 'Học bổng Master Chuyên ngành',
    experienceYears: 11,
    studentsTaught: 32000,
    rating: 4.95,
    quote: 'Vật lý V-ACT đòi hỏi hiểu hiện tượng thực tế. Thầy đồng hành giúp em làm chủ mọi đồ thị.',
    highlights: [
      'Tốt nghiệp Loại Giỏi ĐH Sư phạm Hà Nội',
      'Nhận học bổng du học Master chuyên ngành Khoa học Vật liệu',
      'Hơn 11 năm kinh nghiệm luyện thi ĐGNL & Chuyên sâu Vật lý',
      'Chuyên gia xây dựng ngân hàng bài tập Vật lý Sangsang'
    ]
  },
  {
    id: 'tch-06',
    name: 'Thầy Nguyễn Thành Luân',
    title: 'Thủ khoa Khối A1 • Chuyên gia Tiếng Anh',
    subject: 'Đọc hiểu & Từ vựng Tiếng Anh V-ACT',
    avatar: '/images/teachers/thay_nguyen_thanh_luan.png',
    avatarClass: 'object-[center_28%] scale-[1.3]',
    badge: 'Thủ khoa Khối A1',
    experienceYears: 9,
    studentsTaught: 26000,
    rating: 4.94,
    quote: 'Tối ưu 20 câu Tiếng Anh V-ACT bằng kỹ năng quét từ khóa Keyword Scanning chuẩn mực.',
    highlights: [
      'Thủ khoa Khối A1 kỳ thi THPT',
      'Đào tạo hàng nghìn học sinh đạt điểm 9+ môn Tiếng Anh',
      'Phương pháp Skimming & Scanning trích xuất dữ liệu nhanh',
      'Chuyên gia cố vấn phần Ngôn ngữ Anh Sangsang'
    ]
  },
  {
    id: 'tch-07',
    name: 'Thầy Nguyễn Vũ Minh Trí',
    title: 'Chuyên gia Toán học • Sangsang Senior Teacher',
    subject: 'Toán học Phân hóa & Mô hình Toán V-ACT',
    avatar: '/images/teachers/thay_nguyen_vu_minh_tri.png',
    avatarClass: 'object-[center_28%] scale-[1.35]',
    badge: 'Chuyên gia Toán học Sangsang',
    experienceYears: 11,
    studentsTaught: 31000,
    rating: 4.95,
    quote: 'Toán V-ACT không đánh đố tính toán dài dòng, mà thử thách khả năng áp dụng công thức vào thực tiễn.',
    highlights: [
      'Chuyên gia biên soạn đề thi Toán học ứng dụng Sangsang',
      'Nhiều năm kinh nghiệm luyện thi học sinh giỏi & ĐGNL',
      'Hệ thống mẹo bấm máy tính Casio xử lý siêu tốc',
      'Cố vấn chuyên môn khối Toán ứng dụng V-ACT'
    ]
  },
  {
    id: 'tch-08',
    name: 'Thầy Đỗ Tuấn',
    title: 'Cử nhân Sư phạm Sinh học • 10+ Năm Kn',
    subject: 'Sinh học & Thử nghiệm Khoa học V-ACT',
    avatar: '/images/teachers/thay_do_tuan.png',
    avatarClass: 'object-[center_15%] scale-[1.35]',
    badge: '10+ Năm Kinh nghiệm Luyện thi',
    experienceYears: 10,
    studentsTaught: 22000,
    rating: 4.93,
    quote: 'Di truyền và Sinh thái V-ACT sẽ trở nên đơn giản khi em nắm vững quy luật bản chất.',
    highlights: [
      'Cử nhân Sư phạm Sinh học ĐH Sư phạm TP.HCM',
      'Hơn 10 năm kinh nghiệm chuyên sâu luyện thi đại học & ĐGNL',
      'Biên soạn hệ thống sơ đồ tư duy Sinh học trực quan',
      'Cố vấn chuyên môn Sinh học hệ thống Sangsang'
    ]
  }
];

export const TEACHERS_DATA = REAL_SANGSANG_TEACHERS;
