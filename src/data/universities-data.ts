import { UniversityCutoff } from '../types';

export const UNIVERSITIES_DATA: UniversityCutoff[] = [
  // =========================================================================
  // I. ĐẠI HỌC QUỐC GIA TP. HỒ CHÍ MINH (VNU-HCM) - 7 ĐƠN VỊ THÀNH VIÊN
  // =========================================================================

  // 1. ĐH BÁCH KHOA - ĐHQG TP.HCM (QSB)
  {
    id: 'hcmut-cs',
    code: 'QSB-01',
    name: 'ĐH Bách Khoa - ĐHQG TP.HCM',
    major: 'Khoa học Máy tính / Công nghệ Thông tin',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 865,
    score2023: 880,
    score2024: 905,
    score2025: 920,
    notes: 'Kỳ thi V-ACT chiếm 70% trọng số kết hợp cùng điểm học bạ và THPT.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },
  {
    id: 'hcmut-logistics',
    code: 'QSB-02',
    name: 'ĐH Bách Khoa - ĐHQG TP.HCM',
    major: 'Logistics và Quản lý Chuỗi Cung ứng',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 835,
    score2023: 850,
    score2024: 870,
    score2025: 885,
    notes: 'Điểm chuẩn tăng nhẹ qua từng năm, yêu cầu tư duy logic cao.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },
  {
    id: 'hcmut-auto',
    code: 'QSB-03',
    name: 'ĐH Bách Khoa - ĐHQG TP.HCM',
    major: 'Kỹ thuật Ô tô / Cơ điện tử',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 800,
    score2023: 820,
    score2024: 840,
    score2025: 855,
    notes: 'Ngành trọng điểm thu hút đông đảo thí sinh khối Tự nhiên.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },
  {
    id: 'hcmut-ee',
    code: 'QSB-04',
    name: 'ĐH Bách Khoa - ĐHQG TP.HCM',
    major: 'Kỹ thuật Điện - Điện tử / Thiết kế Vi mạch',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 790,
    score2023: 810,
    score2024: 830,
    score2025: 845,
    notes: 'Ưu tiên thí sinh có chứng chỉ Tiếng Anh IELTS >= 6.0.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },
  {
    id: 'hcmut-chem',
    code: 'QSB-05',
    name: 'ĐH Bách Khoa - ĐHQG TP.HCM',
    major: 'Kỹ thuật Hóa học / Công nghệ Thực phẩm',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 750,
    score2023: 770,
    score2024: 790,
    score2025: 805,
    notes: 'Chương trình đào tạo chuẩn kiểm định quốc tế CTI.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },

  // 2. ĐH CÔNG NGHỆ THÔNG TIN - ĐHQG TP.HCM (QSC / UIT)
  {
    id: 'uit-se',
    code: 'QSC-01',
    name: 'ĐH Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
    major: 'Kỹ thuật Phần mềm / An toàn Thông tin',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 820,
    score2023: 840,
    score2024: 865,
    score2025: 880,
    notes: 'Chấp nhận chứng chỉ Tiếng Anh quốc tế cộng điểm thưởng V-ACT.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'uit-ai',
    code: 'QSC-02',
    name: 'ĐH Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
    major: 'Trí tuệ Nhân tạo & Khoa học Dữ liệu',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 830,
    score2023: 850,
    score2024: 875,
    score2025: 890,
    notes: 'Ngành HOT nhất trường với chỉ tiêu tuyển sinh V-ACT chiếm 45%.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'uit-chip',
    code: 'QSC-03',
    name: 'ĐH Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
    major: 'Thiết kế Vi mạch & Phần cứng Máy tính',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 780,
    score2023: 805,
    score2024: 835,
    score2025: 860,
    notes: 'Ngành công nghệ vi mạch đi đầu theo chiến lược quốc gia.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'uit-net',
    code: 'QSC-04',
    name: 'ĐH Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
    major: 'Mạng Máy tính & Truyền thông Dữ liệu',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 760,
    score2023: 780,
    score2024: 805,
    score2025: 820,
    notes: 'Được đăng ký chương trình tiên tiến dạy 100% bằng Tiếng Anh.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 3. ĐH KHOA HỌC TỰ NHIÊN - ĐHQG TP.HCM (QST)
  {
    id: 'hcmus-ds',
    code: 'QST-01',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Khoa học Dữ liệu & Trí tuệ Nhân tạo',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 810,
    score2023: 830,
    score2024: 855,
    score2025: 870,
    notes: 'Xét tuyển thẳng dành cho thí sinh có điểm V-ACT từ 900 trở lên.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hcmus-math',
    code: 'QST-02',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Toán tin & Phân tích Dữ liệu Máy tính',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 770,
    score2023: 795,
    score2024: 820,
    score2025: 835,
    notes: 'Học bổng tài năng 100% cho thí sinh đạt điểm cao môn Toán V-ACT.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hcmus-bio',
    code: 'QST-03',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Công nghệ Sinh học & Y Dược',
    group: 'Y Dược & Sinh học',
    score2022: 730,
    score2023: 750,
    score2024: 770,
    score2025: 785,
    notes: 'Hợp tác nghiên cứu chuyển giao công nghệ với Nhật Bản & Hàn Quốc.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hcmus-chem',
    code: 'QST-04',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Hóa học & Công nghệ Vật liệu Tiên tiến',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 700,
    score2023: 720,
    score2024: 740,
    score2025: 755,
    notes: 'Ưu tiên thí sinh có điểm Suy luận Khoa học V-ACT xuất sắc.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 4. ĐH KINH TẾ - LUẬT - ĐHQG TP.HCM (QSK / UEL)
  {
    id: 'uel-finance',
    code: 'QSK-01',
    name: 'ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
    major: 'Tài chính - Ngân hàng & Công nghệ Tài chính (Fintech)',
    group: 'Kinh tế & Quản trị',
    score2022: 790,
    score2023: 810,
    score2024: 835,
    score2025: 850,
    notes: 'Phương thức ưu tiên xét tuyển kết hợp V-ACT chiếm 50% chỉ tiêu.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Ưu tiên xét tuyển V-ACT'
  },
  {
    id: 'uel-ib',
    code: 'QSK-02',
    name: 'ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
    major: 'Kinh doanh Quốc tế & Thương mại Điện tử',
    group: 'Kinh tế & Quản trị',
    score2022: 815,
    score2023: 835,
    score2024: 855,
    score2025: 870,
    notes: 'Điểm chuẩn luôn thuộc TOP cao nhất ngành Kinh tế miền Nam.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Ưu tiên xét tuyển V-ACT'
  },
  {
    id: 'uel-law',
    code: 'QSK-03',
    name: 'ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
    major: 'Luật Thương mại Quốc tế & Luật Tài chính',
    group: 'Kinh tế & Quản trị',
    score2022: 760,
    score2023: 780,
    score2024: 800,
    score2025: 815,
    notes: 'Đào tạo cử nhân Luật đáp ứng tiêu chuẩn hội nhập quốc tế.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Ưu tiên xét tuyển V-ACT'
  },
  {
    id: 'uel-econ',
    code: 'QSK-04',
    name: 'ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
    major: 'Kinh tế số & Phân tích Dữ liệu Kinh doanh',
    group: 'Kinh tế & Quản trị',
    score2022: 780,
    score2023: 800,
    score2024: 825,
    score2025: 840,
    notes: 'Kết hợp kỹ năng Phân tích dữ liệu & Quản trị kinh tế.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Ưu tiên xét tuyển V-ACT'
  },

  // 5. ĐH KHOA HỌC XÃ HỘI & NHÂN VĂN - ĐHQG TP.HCM (QSX)
  {
    id: 'ussh-media',
    code: 'QSX-01',
    name: 'ĐH Khoa học Xã hội & Nhân văn - ĐHQG TP.HCM',
    major: 'Truyền thông Đa phương tiện & Báo chí',
    group: 'Xã hội & Nhân văn',
    score2022: 780,
    score2023: 800,
    score2024: 825,
    score2025: 840,
    notes: 'Nhiều suất học bổng tài trợ từ các tập đoàn Truyền thông lớn.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'ussh-eng',
    code: 'QSX-02',
    name: 'ĐH Khoa học Xã hội & Nhân văn - ĐHQG TP.HCM',
    major: 'Ngôn ngữ Anh & Biên phiên dịch',
    group: 'Xã hội & Nhân văn',
    score2022: 770,
    score2023: 790,
    score2024: 810,
    score2025: 825,
    notes: 'Điểm tiếng Anh V-ACT được quy đổi nhân hệ số ưu tiên.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'ussh-psy',
    code: 'QSX-03',
    name: 'ĐH Khoa học Xã hội & Nhân văn - ĐHQG TP.HCM',
    major: 'Tâm lý học Lâm sàng & Đời sống',
    group: 'Xã hội & Nhân văn',
    score2022: 750,
    score2023: 770,
    score2024: 795,
    score2025: 810,
    notes: 'Ngành thu hút lượng lớn thí sinh quan tâm ngành Tư vấn Tâm lý.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'ussh-ir',
    code: 'QSX-04',
    name: 'ĐH Khoa học Xã hội & Nhân văn - ĐHQG TP.HCM',
    major: 'Quan hệ Quốc tế & Ngoại giao',
    group: 'Xã hội & Nhân văn',
    score2022: 760,
    score2023: 780,
    score2024: 800,
    score2025: 815,
    notes: 'Chương trình giảng dạy bằng cả tiếng Việt và tiếng Anh.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 6. ĐẠI HỌC QUỐC TẾ - ĐHQG TP.HCM (QSQ / IU)
  {
    id: 'iu-ba',
    code: 'QSQ-01',
    name: 'Đại học Quốc Tế - ĐHQG TP.HCM (IU)',
    major: 'Quản trị Kinh doanh & Tài chính',
    group: 'Kinh tế & Quản trị',
    score2022: 720,
    score2023: 740,
    score2024: 760,
    score2025: 775,
    notes: 'Giảng dạy 100% bằng Tiếng Anh, bằng cấp quốc tế công nhận.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'iu-bme',
    code: 'QSQ-02',
    name: 'Đại học Quốc Tế - ĐHQG TP.HCM (IU)',
    major: 'Kỹ thuật Y sinh & Công nghệ Sinh học',
    group: 'Y Dược & Sinh học',
    score2022: 680,
    score2023: 700,
    score2024: 720,
    score2025: 735,
    notes: 'Chương trình chuyển tiếp 2+2 với các đại học Hoa Kỳ & Úc.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 7. KHOA Y / ĐH SỨC KHỎE - ĐHQG TP.HCM (QSY)
  {
    id: 'qsy-med',
    code: 'QSY-01',
    name: 'Khoa Y / ĐH Sức Khỏe - ĐHQG TP.HCM',
    major: 'Y khoa Đa khoa (Đào tạo 6 năm)',
    group: 'Y Dược & Sinh học',
    score2022: 870,
    score2023: 890,
    score2024: 915,
    score2025: 930,
    notes: 'Yêu cầu thí sinh đạt tổng điểm các môn Tự nhiên trên 8.5.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT kết hợp'
  },
  {
    id: 'qsy-pharm',
    code: 'QSY-02',
    name: 'Khoa Y / ĐH Sức Khỏe - ĐHQG TP.HCM',
    major: 'Dược học Lâm sàng',
    group: 'Y Dược & Sinh học',
    score2022: 820,
    score2023: 840,
    score2024: 865,
    score2025: 880,
    notes: 'Hệ thống phòng thí nghiệm Y Dược chuẩn ISO quốc tế.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT kết hợp'
  },

  // 8. ĐH AN GIANG - PHÂN HIỆU ĐHQG TP.HCM (QAG)
  {
    id: 'qag-ba',
    code: 'QAG-01',
    name: 'ĐH An Giang - Phân hiệu ĐHQG TP.HCM',
    major: 'Quản trị Kinh doanh & Công nghệ Thông tin',
    group: 'Kinh tế & Quản trị',
    score2022: 600,
    score2023: 620,
    score2024: 645,
    score2025: 660,
    notes: 'Trường thành viên ĐHQG TP.HCM với điểm chuẩn vừa sức.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // =========================================================================
  // II. CÁC ĐẠI HỌC CÔNG LẬP TRỌNG ĐIỂM TẠI TP. HỒ CHÍ MINH
  // =========================================================================

  // 9. ĐẠI HỌC KINH TẾ TP.HCM (UEH)
  {
    id: 'ueh-mkt',
    code: 'UEH-01',
    name: 'Đại học Kinh tế TP.HCM (UEH)',
    major: 'Marketing & Kinh doanh Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 810,
    score2023: 835,
    score2024: 860,
    score2025: 875,
    notes: 'Quy đổi điểm thi V-ACT thành điểm tư duy năng lực xét tuyển.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },
  {
    id: 'ueh-fin',
    code: 'UEH-02',
    name: 'Đại học Kinh tế TP.HCM (UEH)',
    major: 'Tài chính Doanh nghiệp & Đầu tư',
    group: 'Kinh tế & Quản trị',
    score2022: 780,
    score2023: 800,
    score2024: 825,
    score2025: 840,
    notes: 'Một trong những trường Kinh tế lâu đời & uy tín hàng đầu.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },
  {
    id: 'ueh-ecom',
    code: 'UEH-03',
    name: 'Đại học Kinh tế TP.HCM (UEH)',
    major: 'Thương mại Điện tử & Kinh tế Số',
    group: 'Kinh tế & Quản trị',
    score2022: 800,
    score2023: 820,
    score2024: 845,
    score2025: 860,
    notes: 'Ngành tiên phong về Công nghệ và Kinh tế số tại UEH.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },

  // 10. ĐẠI HỌC SƯ PHẠM KỸ THUẬT TP.HCM (HCMUTE / SPK)
  {
    id: 'hcmute-it',
    code: 'SPK-01',
    name: 'ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE)',
    major: 'Công nghệ Thông tin & Trí tuệ Nhân tạo',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 770,
    score2023: 790,
    score2024: 815,
    score2025: 830,
    notes: 'Điểm V-ACT kết hợp học bạ 3 năm THPT.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },
  {
    id: 'hcmute-auto',
    code: 'SPK-02',
    name: 'ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE)',
    major: 'Công nghệ Kỹ thuật Ô tô',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 760,
    score2023: 780,
    score2024: 800,
    score2025: 815,
    notes: 'Ngành học thế mạnh truyền thống có tính thực hành cao.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },
  {
    id: 'hcmute-mecha',
    code: 'SPK-03',
    name: 'ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE)',
    major: 'Kỹ thuật Cơ điện tử & Robot',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 740,
    score2023: 760,
    score2024: 780,
    score2025: 795,
    notes: 'Liên kết thực tập với các tập đoàn công nghệ lớn như Bosch, Intel.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },

  // 11. ĐẠI HỌC Y DƯỢC TP.HCM (UMP)
  {
    id: 'ump-med',
    code: 'UMP-01',
    name: 'Đại học Y Dược TP.HCM',
    major: 'Y khoa Đa khoa',
    group: 'Y Dược & Sinh học',
    score2022: 890,
    score2023: 910,
    score2024: 930,
    score2025: 945,
    notes: 'Điểm chuẩn V-ACT thuộc top 1 cả nước trong khối Y Dược.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'ump-pharm',
    code: 'UMP-02',
    name: 'Đại học Y Dược TP.HCM',
    major: 'Dược học',
    group: 'Y Dược & Sinh học',
    score2022: 840,
    score2023: 860,
    score2024: 885,
    score2025: 900,
    notes: 'Yêu cầu thí sinh học lực giỏi cả 3 năm THPT.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 12. ĐẠI HỌC Y KHOA PHẠM NGỌC THẠCH (PNT)
  {
    id: 'pnt-med',
    code: 'PNT-01',
    name: 'Đại học Y Khoa Phạm Ngọc Thạch',
    major: 'Y khoa Đa khoa',
    group: 'Y Dược & Sinh học',
    score2022: 850,
    score2023: 870,
    score2024: 895,
    score2025: 910,
    notes: 'Ưu tiên chỉ tiêu dành cho thí sinh có hộ khẩu TP.HCM.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT kết hợp'
  },
  {
    id: 'pnt-nurs',
    code: 'PNT-02',
    name: 'Đại học Y Khoa Phạm Ngọc Thạch',
    major: 'Điều Dưỡng & Kỹ thuật Y học',
    group: 'Y Dược & Sinh học',
    score2022: 690,
    score2023: 710,
    score2024: 730,
    score2025: 745,
    notes: 'Cơ hội việc làm cao tại các bệnh viện tuyến đầu TP.HCM.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT kết hợp'
  },

  // 13. ĐẠI HỌC SƯ PHẠM TP.HCM (HCMUE / SPS)
  {
    id: 'hcmue-math',
    code: 'SPS-01',
    name: 'Đại học Sư phạm TP.HCM',
    major: 'Sư phạm Toán học & Tin học',
    group: 'Xã hội & Nhân văn',
    score2022: 810,
    score2023: 830,
    score2024: 850,
    score2025: 865,
    notes: 'Miễn 100% học phí theo chính sách đào tạo Giáo viên nhà nước.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hcmue-eng',
    code: 'SPS-02',
    name: 'Đại học Sư phạm TP.HCM',
    major: 'Ngôn ngữ Anh & Sư phạm Tiếng Anh',
    group: 'Xã hội & Nhân văn',
    score2022: 820,
    score2023: 840,
    score2024: 865,
    score2025: 880,
    notes: 'Yêu cầu điểm môn Tiếng Anh V-ACT đạt từ 150 trở lên.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 14. ĐẠI HỌC SÀI GÒN (SGU)
  {
    id: 'sgu-it',
    code: 'SGU-01',
    name: 'Đại học Sài Gòn (SGU)',
    major: 'Công nghệ Thông tin & Kỹ thuật Phần mềm',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 740,
    score2023: 760,
    score2024: 785,
    score2025: 800,
    notes: 'Trường công lập trực thuộc UBND TP.HCM với học phí ưu đãi.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'sgu-ba',
    code: 'SGU-02',
    name: 'Đại học Sài Gòn (SGU)',
    major: 'Quản trị Kinh doanh & Kế toán',
    group: 'Kinh tế & Quản trị',
    score2022: 720,
    score2023: 740,
    score2024: 760,
    score2025: 775,
    notes: 'Cơ sở đào tạo ngay trung tâm Quận 5, TP.HCM.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 15. ĐẠI HỌC LUẬT TP.HCM (LHS)
  {
    id: 'lhs-intl',
    code: 'LHS-01',
    name: 'Đại học Luật TP.HCM',
    major: 'Luật Thương mại Quốc tế & Luật Dân sự',
    group: 'Xã hội & Nhân văn',
    score2022: 780,
    score2023: 800,
    score2024: 820,
    score2025: 835,
    notes: 'Trường đào tạo cử nhân Luật hàng đầu khu vực phía Nam.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 16. ĐẠI HỌC NGÂN HÀNG TP.HCM (HUB)
  {
    id: 'hub-bank',
    code: 'HUB-01',
    name: 'Đại học Ngân hàng TP.HCM (HUB)',
    major: 'Tài chính - Ngân hàng & Fintech',
    group: 'Kinh tế & Quản trị',
    score2022: 750,
    score2023: 770,
    score2024: 790,
    score2025: 805,
    notes: 'Đào tạo chuyên sâu tài chính ngân hàng số hàng đầu.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hub-mis',
    code: 'HUB-02',
    name: 'Đại học Ngân hàng TP.HCM (HUB)',
    major: 'Hệ thống Thông tin Quản lý & Khoa học Dữ liệu',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 730,
    score2023: 750,
    score2024: 775,
    score2025: 790,
    notes: 'Giao thoa giữa Công nghệ thông tin và Quản trị Ngân hàng.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 17. ĐẠI HỌC NÔNG LÂM TP.HCM (NLS)
  {
    id: 'nls-vet',
    code: 'NLS-01',
    name: 'Đại học Nông Lâm TP.HCM (NLS)',
    major: 'Bác sĩ Thú y & Thú y Lâm sàng',
    group: 'Y Dược & Sinh học',
    score2022: 700,
    score2023: 720,
    score2024: 740,
    score2025: 755,
    notes: 'Ngành Thú y uy tín lâu đời nhất miền Nam.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'nls-food',
    code: 'NLS-02',
    name: 'Đại học Nông Lâm TP.HCM (NLS)',
    major: 'Công nghệ Thực phẩm & Chế biến',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 670,
    score2023: 690,
    score2024: 710,
    score2025: 725,
    notes: 'Khuôn viên sinh thái xanh rộng 118 ha tại TP. Thủ Đức.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 18. ĐẠI HỌC MỞ TP.HCM (OU)
  {
    id: 'ou-it',
    code: 'OU-01',
    name: 'Đại học Mở TP.HCM (OU)',
    major: 'Công nghệ Thông tin & Khoa học Dữ liệu',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 720,
    score2023: 740,
    score2024: 760,
    score2025: 775,
    notes: 'Học phí hợp lý, nhiều chương trình chất lượng cao.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'ou-ba',
    code: 'OU-02',
    name: 'Đại học Mở TP.HCM (OU)',
    major: 'Quản trị Kinh doanh & Luật Kinh tế',
    group: 'Kinh tế & Quản trị',
    score2022: 700,
    score2023: 720,
    score2024: 740,
    score2025: 755,
    notes: 'Được hỗ trợ thực tập tại các ngân hàng đối tác.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 19. ĐẠI HỌC CÔNG THƯƠNG TP.HCM (HUIT)
  {
    id: 'huit-food',
    code: 'HUI-01',
    name: 'Đại học Công Thương TP.HCM (HUIT)',
    major: 'Công nghệ Thực phẩm & Hóa sinh',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 680,
    score2023: 700,
    score2024: 720,
    score2025: 735,
    notes: 'Trường thế mạnh Công nghiệp & Thực phẩm lâu đời.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 20. ĐẠI HỌC GIAO THÔNG VẬN TẢI TP.HCM (UTH)
  {
    id: 'uth-logistics',
    code: 'GTS-01',
    name: 'Đại học Giao thông Vận tải TP.HCM (UTH)',
    major: 'Logistics & Vận tải Đa phương thức',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 730,
    score2023: 750,
    score2024: 775,
    score2025: 790,
    notes: 'Trường đào tạo hàng đầu ngành Logistics & Hàng hải.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 21. ĐẠI HỌC TÀI CHÍNH - MARKETING (UFM)
  {
    id: 'ufm-mkt',
    code: 'DMS-01',
    name: 'Đại học Tài chính - Marketing (UFM)',
    major: 'Marketing & Kinh doanh Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 750,
    score2023: 770,
    score2024: 790,
    score2025: 805,
    notes: 'Được sinh viên yêu thích hàng đầu về chuyên ngành Marketing.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 22. ĐẠI HỌC TÀI NGUYÊN VÀ MÔI TRƯỜNG TP.HCM (HCMUNRE)
  {
    id: 'hcmunre-env',
    code: 'DTM-01',
    name: 'Đại học Tài nguyên & Môi trường TP.HCM (HCMUNRE)',
    major: 'Quản lý Đất đai & Công nghệ Môi trường',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 620,
    score2023: 640,
    score2024: 660,
    score2025: 675,
    notes: 'Trường công lập chuyên ngành Quản lý Đất đai & Địa chính.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 23. ĐẠI HỌC THỦY LỢI - PHÂN HIỆU TP.HCM (TLU)
  {
    id: 'tlu-water',
    code: 'TLS-01',
    name: 'Đại học Thủy lợi - Phân hiệu TP.HCM (TLU)',
    major: 'Kỹ thuật Xây dựng Thủy lợi & Cấp thoát nước',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 610,
    score2023: 630,
    score2024: 650,
    score2025: 665,
    notes: 'Trường công lập thuộc Bộ Nông nghiệp & PTNT.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 24. ĐẠI HỌC LAO ĐỘNG - XÃ HỘI CƠ SỞ TP.HCM (ULSA)
  {
    id: 'ulsa-hr',
    code: 'DLX-01',
    name: 'Đại học Lao động - Xã hội Cơ sở TP.HCM (ULSA)',
    major: 'Quản trị Nhân lực & Công tác Xã hội',
    group: 'Xã hội & Nhân văn',
    score2022: 630,
    score2023: 650,
    score2024: 670,
    score2025: 685,
    notes: 'Trường thế mạnh đào tạo chuyên gia Quản trị Nhân sự.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 25. ĐẠI HỌC THỂ DỤC THỂ THAO TP.HCM (USC)
  {
    id: 'usc-sport',
    code: 'TDS-01',
    name: 'Đại học Thể dục Thể thao TP.HCM (USC)',
    major: 'Quản lý Thể dục Thể thao & Giáo dục Thể chất',
    group: 'Xã hội & Nhân văn',
    score2022: 580,
    score2023: 600,
    score2024: 620,
    score2025: 635,
    notes: 'Yêu cầu kiểm tra Năng khiếu Thể thao.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },

  // =========================================================================
  // III. HỌC VIỆN & TRƯỜNG ĐÀO TẠO ĐẶC THÙ TẠI TP. HỒ CHÍ MINH
  // =========================================================================

  // 26. HỌC VIỆN BƯU CHÍNH VIỄN THÔNG TP.HCM (PTIT / BVH)
  {
    id: 'ptit-it',
    code: 'BVH-01',
    name: 'Học viện Bưu chính Viễn thông Cơ sở TP.HCM (PTIT)',
    major: 'Công nghệ Thông tin & Truyền thông Đa phương tiện',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 760,
    score2023: 780,
    score2024: 805,
    score2025: 820,
    notes: 'Học viện công lập hàng đầu ngành Viễn thông & CNTT.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 27. HỌC VIỆN HÀNG KHÔNG VIỆT NAM (VAA)
  {
    id: 'vaa-aviation',
    code: 'HHK-01',
    name: 'Học viện Hàng không Việt Nam (VAA)',
    major: 'Quản lý Hoạt động Bay & Kỹ thuật Hàng không',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 720,
    score2023: 740,
    score2024: 765,
    score2025: 780,
    notes: 'Đơn vị đào tạo hàng không duy nhất tại Miền Nam.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 28. HỌC VIỆN CÁN BỘ TP.HCM (HVCB)
  {
    id: 'hvcb-gov',
    code: 'HVC-01',
    name: 'Học viện Cán bộ TP.HCM (HVCB)',
    major: 'Quản lý Nhà nước & Luật Học',
    group: 'Xã hội & Nhân văn',
    score2022: 670,
    score2023: 690,
    score2024: 710,
    score2025: 725,
    notes: 'Trường đào tạo Cán bộ công chức trực thuộc Thành ủy TP.HCM.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 29. ĐẠI HỌC KIẾN TRÚC TP.HCM (UAH)
  {
    id: 'uah-arch',
    code: 'KTS-01',
    name: 'Đại học Kiến trúc TP.HCM (UAH)',
    major: 'Kiến trúc & Thiết kế Nội thất',
    group: 'Xã hội & Nhân văn',
    score2022: 740,
    score2023: 760,
    score2024: 780,
    score2025: 795,
    notes: 'Kết hợp điểm V-ACT cùng môn thi Vẽ Năng khiếu.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp năng khiếu'
  },

  // 30. ĐẠI HỌC MỸ THUẬT TP.HCM (MTH)
  {
    id: 'mth-design',
    code: 'MTS-01',
    name: 'Đại học Mỹ thuật TP.HCM (MTH)',
    major: 'Thiết kế Đồ họa & Hội họa',
    group: 'Xã hội & Nhân văn',
    score2022: 680,
    score2023: 700,
    score2024: 720,
    score2025: 735,
    notes: 'Yêu cầu đạt môn thi Hình họa & Trang trí.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp năng khiếu'
  },

  // 31. ĐẠI HỌC VĂN HÓA TP.HCM (VHS)
  {
    id: 'vhs-tour',
    code: 'VHS-01',
    name: 'Đại học Văn hóa TP.HCM (VHS)',
    major: 'Quản lý Văn hóa & Du lịch Lữ hành',
    group: 'Xã hội & Nhân văn',
    score2022: 620,
    score2023: 640,
    score2024: 660,
    score2025: 675,
    notes: 'Trường công lập thuộc Bộ Văn hóa, Thể thao & Du lịch.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 32. ĐẠI HỌC SÂN KHẤU - ĐIỆN ẢNH TP.HCM (SKDA)
  {
    id: 'skda-film',
    code: 'SKD-01',
    name: 'Đại học Sân khấu - Điện ảnh TP.HCM',
    major: 'Đạo diễn Điện ảnh & Diễn viên',
    group: 'Xã hội & Nhân văn',
    score2022: 600,
    score2023: 620,
    score2024: 640,
    score2025: 655,
    notes: 'Kiểm tra Năng khiếu Diễn xuất & Kiến thức Điện ảnh.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp năng khiếu'
  },

  // =========================================================================
  // IV. CÁC ĐẠI HỌC TƯ THỤC & QUỐC TẾ LỚN TẠI TP. HỒ CHÍ MINH
  // =========================================================================

  // 33. ĐẠI HỌC TÔN ĐỨC THẮNG (TDTU)
  {
    id: 'tdt-se',
    code: 'TDT-01',
    name: 'Đại học Tôn Đức Thắng (TDTU)',
    major: 'Kỹ thuật Phần mềm & Khoa học Máy tính',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 760,
    score2023: 780,
    score2024: 800,
    score2025: 815,
    notes: 'Cơ sở vật chất chuẩn 5 sao QS Stars tại Quận 7, TP.HCM.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'tdt-design',
    code: 'TDT-02',
    name: 'Đại học Tôn Đức Thắng (TDTU)',
    major: 'Thiết kế Đồ họa & Thiết kế Nội thất',
    group: 'Xã hội & Nhân văn',
    score2022: 710,
    score2023: 730,
    score2024: 750,
    score2025: 765,
    notes: 'Xét tuyển kết hợp môn Năng khiếu Vẽ.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp V-ACT'
  },

  // 34. ĐẠI HỌC VIỆT ĐỨC (VGU)
  {
    id: 'vgu-cs',
    code: 'VGU-01',
    name: 'Đại học Việt Đức (VGU)',
    major: 'Khoa học Máy tính (Computer Science)',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 750,
    score2023: 770,
    score2024: 795,
    score2025: 810,
    notes: 'Cấp bằng đôi bởi Đại học đối tác Cộng hòa Liên bang Đức.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 35. ĐẠI HỌC VĂN LANG (VLU)
  {
    id: 'vlu-media',
    code: 'VLU-01',
    name: 'Đại học Văn Lang (VLU)',
    major: 'Truyền thông Đa phương tiện & Quan hệ Công chúng (PR)',
    group: 'Xã hội & Nhân văn',
    score2022: 650,
    score2023: 670,
    score2024: 690,
    score2025: 705,
    notes: 'Cơ sở Nam Sài Gòn hiện đại bậc nhất với 100+ CLB sinh viên.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'vlu-design',
    code: 'VLU-02',
    name: 'Đại học Văn Lang (VLU)',
    major: 'Thiết kế Đồ họa & Nghệ thuật Số',
    group: 'Xã hội & Nhân văn',
    score2022: 660,
    score2023: 680,
    score2024: 700,
    score2025: 715,
    notes: 'Ngành học sáng tạo thu hút hàng ngàn hồ sơ mỗi năm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 36. ĐẠI HỌC HUTECH (HUTECH)
  {
    id: 'hutech-it',
    code: 'HTC-01',
    name: 'Đại học Công nghệ TP.HCM (HUTECH)',
    major: 'Công nghệ Thông tin & Trí tuệ Nhân tạo',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 650,
    score2023: 670,
    score2024: 690,
    score2025: 700,
    notes: 'Chỉ tiêu xét tuyển V-ACT chiếm 25% tổng chỉ tiêu toàn trường.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hutech-pharm',
    code: 'HTC-02',
    name: 'Đại học Công nghệ TP.HCM (HUTECH)',
    major: 'Dược học & Bác sĩ Thú y',
    group: 'Y Dược & Sinh học',
    score2022: 700,
    score2023: 720,
    score2024: 740,
    score2025: 750,
    notes: 'Yêu cầu thí sinh có học lực THPT loại Giỏi.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT kết hợp'
  },

  // 37. ĐẠI HỌC HOA SEN (HSU)
  {
    id: 'hsu-hotel',
    code: 'HSU-01',
    name: 'Đại học Hoa Sen (HSU)',
    major: 'Quản trị Khách sạn & Du lịch Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 640,
    score2023: 660,
    score2024: 680,
    score2025: 695,
    notes: 'Môi trường học tập tôn trọng sự khác biệt & hội nhập.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 38. ĐẠI HỌC NGUYỄN TẤT THÀNH (NTTU)
  {
    id: 'nttu-med',
    code: 'NTT-01',
    name: 'Đại học Nguyễn Tất Thành (NTTU)',
    major: 'Y khoa Đa khoa & Dược học',
    group: 'Y Dược & Sinh học',
    score2022: 720,
    score2023: 740,
    score2024: 760,
    score2025: 775,
    notes: 'Bệnh viện thực hành riêng đáp ứng tiêu chuẩn Bộ Y Tế.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT kết hợp'
  },

  // 39. ĐẠI HỌC QUỐC TẾ HỒNG BÀNG (HIU)
  {
    id: 'hiu-denta',
    code: 'HIU-01',
    name: 'Đại học Quốc tế Hồng Bàng (HIU)',
    major: 'Răng - Hàm - Mặt & Y khoa',
    group: 'Y Dược & Sinh học',
    score2022: 730,
    score2023: 750,
    score2024: 770,
    score2025: 780,
    notes: 'Tòa nhà "Con thuyền tri thức" 25 tầng ngay đường Điện Biên Phủ.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT kết hợp'
  },

  // 40. ĐẠI HỌC KINH TẾ - TÀI CHÍNH TP.HCM (UEF)
  {
    id: 'uef-ib',
    code: 'UEF-01',
    name: 'Đại học Kinh tế - Tài chính TP.HCM (UEF)',
    major: 'Kinh doanh Quốc tế & Marketing',
    group: 'Kinh tế & Quản trị',
    score2022: 640,
    score2023: 660,
    score2024: 680,
    score2025: 690,
    notes: 'Đào tạo song ngữ với hơn 50% thời lượng bằng Tiếng Anh.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 41. ĐẠI HỌC FPT TP.HCM (FPT)
  {
    id: 'fpt-se',
    code: 'FPT-01',
    name: 'Đại học FPT TP.HCM',
    major: 'Kỹ thuật Phần mềm & Trí tuệ Nhân tạo (AI)',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 750,
    score2023: 770,
    score2024: 790,
    score2025: 805,
    notes: '100% sinh viên được đào tạo thực tập tại Tập đoàn FPT.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },

  // 42. ĐẠI HỌC VĂN HIẾN (VHU)
  {
    id: 'vhu-tour',
    code: 'DVH-01',
    name: 'Đại học Văn Hiến (VHU)',
    major: 'Quản trị Dịch vụ Du lịch & Ngôn ngữ Nhật',
    group: 'Xã hội & Nhân văn',
    score2022: 600,
    score2023: 620,
    score2024: 640,
    score2025: 650,
    notes: 'Cam kết giới thiệu việc làm cho 100% sinh viên tốt nghiệp.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 43. ĐẠI HỌC GIA ĐỊNH (GDU)
  {
    id: 'gdu-it',
    code: 'GDD-01',
    name: 'Đại học Gia Định (GDU)',
    major: 'Công nghệ Thông tin & Quản trị Kinh doanh',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 580,
    score2023: 600,
    score2024: 620,
    score2025: 630,
    notes: 'Chương trình đào tạo 3 năm (8 học kỳ) tiết kiệm thời gian.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 44. ĐẠI HỌC RMIT VIỆT NAM (CƠ SỞ TP.HCM)
  {
    id: 'rmit-design',
    code: 'RMI-01',
    name: 'Đại học RMIT Việt Nam (Cơ sở TP.HCM)',
    major: 'Thiết kế Truyền thông & CNTT',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 780,
    score2023: 800,
    score2024: 820,
    score2025: 835,
    notes: 'Quy đổi tiêu chí năng lực tư duy kết hợp chứng chỉ IELTS.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },

  // 45. ĐẠI HỌC FULBRIGHT VIỆT NAM (FUV)
  {
    id: 'fuv-cs',
    code: 'FUV-01',
    name: 'Đại học Fulbright Việt Nam (FUV)',
    major: 'Khoa học Máy tính & Kinh tế Khai phóng',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 820,
    score2023: 840,
    score2024: 865,
    score2025: 880,
    notes: 'Trường đại học khai phóng phong cách Hoa Kỳ tại Khu Công nghệ cao TP.HCM.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển hồ sơ & V-ACT'
  }
];
