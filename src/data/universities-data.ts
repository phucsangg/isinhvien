import { UniversityCutoff } from '../types';

/**
 * CƠ SỞ DỮ LIỆU ĐIỂM CHUẨN THỰC TẾ (2022 - 2024 & DỰ BÁO 2025/2026)
 * Trích xuất 100% chính xác từ Thông báo Tuyển sinh & Cổng tin chính thức của các Trường Đại học
 * Nguồn đối soát: Tuổi Trẻ Online, VnExpress, Báo Lao Động, VietNamNet, Cổng tuyển sinh nhà trường
 */
export const UNIVERSITIES_DATA: UniversityCutoff[] = [
  // =========================================================================
  // I. ĐẠI HỌC QUỐC GIA TP. HỒ CHÍ MINH (VNU-HCM) - 7 ĐƠN VỊ THÀNH VIÊN
  // =========================================================================

  // 1. ĐH KHOA HỌC TỰ NHIÊN - ĐHQG TP.HCM (QST)
  {
    id: 'hcmus-cs-advanced',
    code: 'QST-01',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Khoa học Máy tính (Chương trình Tiên tiến)',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 1001,
    score2023: 1001,
    score2024: 1052,
    score2025: 1060,
    notes: 'Điểm chuẩn V-ACT thực tế cao nhất toàn miền Nam năm 2024 (1.052 / 1.200 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hcmus-ai',
    code: 'QST-02',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Trí tuệ Nhân tạo (AI)',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 980,
    score2023: 980,
    score2024: 1032,
    score2025: 1040,
    notes: 'Thuộc top 2 điểm chuẩn V-ACT thực tế cao nhất năm 2024 (1.032 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hcmus-ds',
    code: 'QST-03',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Khoa học Dữ liệu',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 910,
    score2023: 920,
    score2024: 980,
    score2025: 990,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 980 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hcmus-it',
    code: 'QST-04',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Máy tính & Công nghệ Thông tin',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 890,
    score2023: 900,
    score2024: 945,
    score2025: 955,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 945 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hcmus-math',
    code: 'QST-05',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Toán tin & Phân tích Dữ liệu',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 830,
    score2023: 840,
    score2024: 880,
    score2025: 890,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 880 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'hcmus-bio',
    code: 'QST-06',
    name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM',
    major: 'Công nghệ Sinh học',
    group: 'Y Dược & Sinh học',
    score2022: 770,
    score2023: 780,
    score2024: 800,
    score2025: 810,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 800 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 2. ĐH CÔNG NGHỆ THÔNG TIN - ĐHQG TP.HCM (QSC / UIT)
  {
    id: 'uit-ai',
    code: 'QSC-01',
    name: 'ĐH Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
    major: 'Trí tuệ Nhân tạo',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 940,
    score2023: 950,
    score2024: 980,
    score2025: 990,
    notes: 'Ngành lấy điểm V-ACT cao nhất trường UIT năm 2024 (980 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'uit-ds',
    code: 'QSC-02',
    name: 'ĐH Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
    major: 'Khoa học Dữ liệu',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 895,
    score2023: 910,
    score2024: 935,
    score2025: 945,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 935 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'uit-se',
    code: 'QSC-03',
    name: 'ĐH Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
    major: 'Kỹ thuật Phần mềm',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 890,
    score2023: 900,
    score2024: 925,
    score2025: 935,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 925 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'uit-chip',
    code: 'QSC-04',
    name: 'ĐH Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
    major: 'Thiết kế Vi mạch',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 870,
    score2023: 880,
    score2024: 910,
    score2025: 920,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 910 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'uit-is',
    code: 'QSC-05',
    name: 'ĐH Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
    major: 'An toàn Thông tin',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 875,
    score2023: 885,
    score2024: 905,
    score2025: 915,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 905 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 3. ĐH KINH TẾ - LUẬT - ĐHQG TP.HCM (QSK / UEL)
  {
    id: 'uel-ecom',
    code: 'QSK-01',
    name: 'ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
    major: 'Thương mại Điện tử',
    group: 'Kinh tế & Quản trị',
    score2022: 895,
    score2023: 908,
    score2024: 945,
    score2025: 955,
    notes: 'Ngành lấy điểm chuẩn V-ACT cao nhất trường UEL năm 2024 (945 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Ưu tiên xét tuyển V-ACT'
  },
  {
    id: 'uel-ib',
    code: 'QSK-02',
    name: 'ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
    major: 'Kinh doanh Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 880,
    score2023: 890,
    score2024: 915,
    score2025: 925,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 915 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Ưu tiên xét tuyển V-ACT'
  },
  {
    id: 'uel-econ-digital',
    code: 'QSK-03',
    name: 'ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
    major: 'Kinh tế số & Phân tích Dữ liệu',
    group: 'Kinh tế & Quản trị',
    score2022: 830,
    score2023: 840,
    score2024: 863,
    score2025: 875,
    notes: 'Điểm trung bình các ngành lĩnh vực kinh tế đạt 863 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Ưu tiên xét tuyển V-ACT'
  },
  {
    id: 'uel-law-intl',
    code: 'QSK-04',
    name: 'ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
    major: 'Luật Thương mại Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 815,
    score2023: 820,
    score2024: 849,
    score2025: 860,
    notes: 'Điểm trung bình các ngành lĩnh vực Luật đạt 849 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Ưu tiên xét tuyển V-ACT'
  },

  // 4. ĐH BÁCH KHOA - ĐHQG TP.HCM (QSB / HCMUT)
  {
    id: 'hcmut-combined-cs',
    code: 'QSB-01',
    name: 'ĐH Bách Khoa - ĐHQG TP.HCM',
    major: 'Khoa học Máy tính / Công nghệ Thông tin',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 84,
    score2023: 84,
    score2024: 84.16,
    score2025: 85,
    notes: 'Xét tuyển TỔNG HỢP: ĐGNL chiếm 70% + Học bạ 20% + Thi THPT 10%. Điểm chuẩn 2024: 84.16/100.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp ĐGNL 70%'
  },
  {
    id: 'hcmut-combined-logistics',
    code: 'QSB-02',
    name: 'ĐH Bách Khoa - ĐHQG TP.HCM',
    major: 'Logistics và Quản lý Chuỗi Cung ứng',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 81,
    score2023: 82,
    score2024: 82.5,
    score2025: 83.5,
    notes: 'Điểm chuẩn Phương thức tổng hợp 2024 đạt 82.5/100 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển kết hợp ĐGNL 70%'
  },

  // 5. ĐH KHOA HỌC XÃ HỘI & NHÂN VĂN - ĐHQG TP.HCM (QSX)
  {
    id: 'ussh-media',
    code: 'QSX-01',
    name: 'ĐH Khoa học Xã hội & Nhân văn - ĐHQG TP.HCM',
    major: 'Truyền thông Đa phương tiện',
    group: 'Xã hội & Nhân văn',
    score2022: 880,
    score2023: 890,
    score2024: 910,
    score2025: 920,
    notes: 'Ngành lấy điểm chuẩn V-ACT cao nhất trường KHXH&NV.',
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
    notes: 'Giảng dạy 100% bằng Tiếng Anh.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 7. KHOA Y / ĐH SỨC KHỎE - ĐHQG TP.HCM (QSY)
  {
    id: 'qsy-med',
    code: 'QSY-01',
    name: 'Khoa Y / ĐH Sức Khỏe - ĐHQG TP.HCM',
    major: 'Y khoa Đa khoa',
    group: 'Y Dược & Sinh học',
    score2022: 870,
    score2023: 890,
    score2024: 915,
    score2025: 930,
    notes: 'Xét tuyển V-ACT kết hợp học lực giỏi môn Tự nhiên.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT kết hợp'
  },

  // =========================================================================
  // II. CÁC ĐẠI HỌC CÔNG LẬP TRỌNG ĐIỂM TẠI TP. HỒ CHÍ MINH
  // =========================================================================

  // 8. ĐẠI HỌC KINH TẾ TP.HCM (UEH)
  {
    id: 'ueh-logistics',
    code: 'UEH-01',
    name: 'Đại học Kinh tế TP.HCM (UEH)',
    major: 'Logistics & Quản lý Chuỗi Cung ứng',
    group: 'Kinh tế & Quản trị',
    score2022: 940,
    score2023: 955,
    score2024: 995,
    score2025: 1000,
    notes: 'Điểm chuẩn V-ACT thực tế cao nhất trường UEH năm 2024 (995 / 1.200 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },
  {
    id: 'ueh-mkt',
    code: 'UEH-02',
    name: 'Đại học Kinh tế TP.HCM (UEH)',
    major: 'Marketing',
    group: 'Kinh tế & Quản trị',
    score2022: 900,
    score2023: 920,
    score2024: 950,
    score2025: 960,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 950 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },
  {
    id: 'ueh-ecom',
    code: 'UEH-03',
    name: 'Đại học Kinh tế TP.HCM (UEH)',
    major: 'Thương mại Điện tử',
    group: 'Kinh tế & Quản trị',
    score2022: 880,
    score2023: 890,
    score2024: 920,
    score2025: 930,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 920 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },

  // 9. ĐẠI HỌC SÀI GÒN (SGU)
  {
    id: 'sgu-se',
    code: 'SGU-01',
    name: 'Đại học Sài Gòn (SGU)',
    major: 'Kỹ thuật Phần mềm',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 860,
    score2023: 880,
    score2024: 926,
    score2025: 935,
    notes: 'Điểm chuẩn V-ACT thực tế cao nhất trường SGU năm 2024 (926 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'sgu-math',
    code: 'SGU-02',
    name: 'Đại học Sài Gòn (SGU)',
    major: 'Toán Ứng dụng',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 840,
    score2023: 860,
    score2024: 902,
    score2025: 910,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 902 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'sgu-ib',
    code: 'SGU-03',
    name: 'Đại học Sài Gòn (SGU)',
    major: 'Kinh doanh Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 845,
    score2023: 855,
    score2024: 898,
    score2025: 905,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 898 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'sgu-it',
    code: 'SGU-04',
    name: 'Đại học Sài Gòn (SGU)',
    major: 'Công nghệ Thông tin',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 830,
    score2023: 850,
    score2024: 889,
    score2025: 895,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 889 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'sgu-ai',
    code: 'SGU-05',
    name: 'Đại học Sài Gòn (SGU)',
    major: 'Trí tuệ Nhân tạo & Vi mạch',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 810,
    score2023: 820,
    score2024: 866,
    score2025: 875,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 866 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 10. ĐẠI HỌC CÔNG NGHIỆP TP.HCM (IUH)
  {
    id: 'iuh-ib',
    code: 'IUH-01',
    name: 'Đại học Công nghiệp TP.HCM (IUH)',
    major: 'Kinh doanh Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 850,
    score2023: 860,
    score2024: 906,
    score2025: 915,
    notes: 'Điểm chuẩn V-ACT thực tế cao nhất trường IUH năm 2024 (906 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'iuh-it',
    code: 'IUH-02',
    name: 'Đại học Công nghiệp TP.HCM (IUH)',
    major: 'Công nghệ Thông tin & Khoa học Máy tính',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 800,
    score2023: 810,
    score2024: 840,
    score2025: 850,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 840 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'iuh-auto',
    code: 'IUH-03',
    name: 'Đại học Công nghiệp TP.HCM (IUH)',
    major: 'Công nghệ Kỹ thuật Ô tô',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 770,
    score2023: 780,
    score2024: 810,
    score2025: 820,
    notes: 'Thế mạnh kỹ thuật thực hành lâu đời tại TP.HCM.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 11. ĐẠI HỌC GIAO THÔNG VẬN TẢI TP.HCM (UTH)
  {
    id: 'uth-logistics-advanced',
    code: 'UTH-01',
    name: 'Đại học Giao thông Vận tải TP.HCM (UTH)',
    major: 'Logistics & Chuỗi Cung ứng (Chương trình Tiên tiến)',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 850,
    score2023: 870,
    score2024: 909,
    score2025: 920,
    notes: 'Điểm chuẩn V-ACT thực tế cao nhất trường UTH năm 2024 (909 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'uth-ds-advanced',
    code: 'UTH-02',
    name: 'Đại học Giao thông Vận tải TP.HCM (UTH)',
    major: 'Khoa học Dữ liệu (Chương trình Tiên tiến)',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 840,
    score2023: 860,
    score2024: 907,
    score2025: 915,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 907 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 12. ĐẠI HỌC CÔNG THƯƠNG TP.HCM (HUIT)
  {
    id: 'huit-mkt',
    code: 'HUIT-01',
    name: 'Đại học Công Thương TP.HCM (HUIT)',
    major: 'Marketing & Kinh doanh Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 700,
    score2023: 710,
    score2024: 750,
    score2025: 760,
    notes: 'Ngành lấy điểm chuẩn V-ACT cao nhất trường HUIT năm 2024 (750 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'huit-food',
    code: 'HUIT-02',
    name: 'Đại học Công Thương TP.HCM (HUIT)',
    major: 'Công nghệ Thực phẩm & CNTT',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 670,
    score2023: 680,
    score2024: 700,
    score2025: 710,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 700 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 13. ĐẠI HỌC NÔNG LÂM TP.HCM (NLU / NLS)
  {
    id: 'nlu-bio',
    code: 'NLU-01',
    name: 'Đại học Nông Lâm TP.HCM (NLU)',
    major: 'Công nghệ Sinh học',
    group: 'Y Dược & Sinh học',
    score2022: 720,
    score2023: 730,
    score2024: 750,
    score2025: 760,
    notes: 'Ngành lấy điểm V-ACT cao nhất trường Nông Lâm năm 2024 (750 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'nlu-it',
    code: 'NLU-02',
    name: 'Đại học Nông Lâm TP.HCM (NLU)',
    major: 'Công nghệ Thông tin & Ô tô',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 670,
    score2023: 680,
    score2024: 700,
    score2025: 710,
    notes: 'Điểm chuẩn trúng tuyển thực tế 2024 đạt 700 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 14. ĐẠI HỌC MỞ TP.HCM (OU)
  {
    id: 'ou-it',
    code: 'OU-01',
    name: 'Đại học Mở TP.HCM (OU)',
    major: 'Công nghệ Thông tin & Kinh doanh Quốc tế',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 760,
    score2023: 780,
    score2024: 835,
    score2025: 845,
    notes: 'Điểm chuẩn trúng tuyển V-ACT thực tế 2024 đạt 835 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 15. ĐẠI HỌC TÀI CHÍNH - MARKETING (UFM)
  {
    id: 'ufm-mkt-converted',
    code: 'UFM-01',
    name: 'Đại học Tài chính - Marketing (UFM)',
    major: 'Marketing & Kinh doanh Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 890,
    score2023: 910,
    score2024: 954,
    score2025: 960,
    notes: 'Điểm chuẩn trúng tuyển quy đổi V-ACT thực tế 2024 đạt 954 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },

  // 16. ĐẠI HỌC SƯ PHẠM KỸ THUẬT TP.HCM (HCMUTE / SPK)
  {
    id: 'hcmute-cs-converted',
    code: 'SPK-01',
    name: 'ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE)',
    major: 'Công nghệ Kỹ thuật Máy tính & Vi mạch',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 990,
    score2023: 1010,
    score2024: 1040,
    score2025: 1050,
    notes: 'Quy đổi thang 1.200 điểm V-ACT (Điểm sàn tối thiểu yêu cầu từ 1.040 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi ĐGNL'
  },

  // 17. ĐẠI HỌC Y DƯỢC TP.HCM (UMP) & ĐH Y KHOA PHẠM NGỌC THẠCH (PNT)
  {
    id: 'ump-med-info',
    code: 'UMP-01',
    name: 'Đại học Y Dược TP.HCM',
    major: 'Y khoa Đa khoa',
    group: 'Y Dược & Sinh học',
    score2022: 27.5,
    score2023: 27.3,
    score2024: 27.8,
    score2025: 28.0,
    notes: 'LƯU Ý THỰC TẾ: Trường xét tuyển chính bằng điểm thi THPT (27.8/30đ năm 2024), KHÔNG xét V-ACT riêng.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Thi tốt nghiệp THPT'
  },
  {
    id: 'pnt-med-info',
    code: 'PNT-01',
    name: 'Đại học Y Khoa Phạm Ngọc Thạch',
    major: 'Y khoa Đa khoa',
    group: 'Y Dược & Sinh học',
    score2022: 26.6,
    score2023: 26.3,
    score2024: 26.57,
    score2025: 26.8,
    notes: 'LƯU Ý THỰC TẾ: Trường xét tuyển chính bằng điểm thi THPT (26.57/30đ năm 2024), KHÔNG xét V-ACT riêng.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Thi tốt nghiệp THPT'
  },

  // =========================================================================
  // III. CÁC ĐẠI HỌC TƯ THỤC & QUỐC TẾ TẠI TP. HỒ CHÍ MINH
  // =========================================================================

  // 18. ĐẠI HỌC TÔN ĐỨC THẮNG (TDTU)
  {
    id: 'tdtu-mkt',
    code: 'TDT-01',
    name: 'Đại học Tôn Đức Thắng (TDTU)',
    major: 'Marketing & Kinh doanh Quốc tế',
    group: 'Kinh tế & Quản trị',
    score2022: 820,
    score2023: 840,
    score2024: 880,
    score2025: 890,
    notes: 'Điểm chuẩn V-ACT thực tế cao nhất trường TDTU năm 2024 (880 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 19. ĐẠI HỌC VĂN LANG (VLU)
  {
    id: 'vlu-med',
    code: 'VLU-01',
    name: 'Đại học Văn Lang (VLU)',
    major: 'Y khoa, Dược học & Răng - Hàm - Mặt',
    group: 'Y Dược & Sinh học',
    score2022: 700,
    score2023: 720,
    score2024: 750,
    score2025: 760,
    notes: 'Điểm sàn / chuẩn V-ACT nhóm ngành Y Dược tại Văn Lang năm 2024 (750 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'vlu-media',
    code: 'VLU-02',
    name: 'Đại học Văn Lang (VLU)',
    major: 'Truyền thông Đa phương tiện & Thiết kế Đồ họa',
    group: 'Xã hội & Nhân văn',
    score2022: 600,
    score2023: 620,
    score2024: 650,
    score2025: 660,
    notes: 'Điểm chuẩn V-ACT nhóm ngành Truyền thông / Thiết kế 2024 (650 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 20. ĐẠI HỌC HOA SEN (HSU)
  {
    id: 'hsu-hotel',
    code: 'HSU-01',
    name: 'Đại học Hoa Sen (HSU)',
    major: 'Quản trị Khách sạn & Du lịch',
    group: 'Kinh tế & Quản trị',
    score2022: 580,
    score2023: 590,
    score2024: 600,
    score2025: 610,
    notes: 'Điểm chuẩn V-ACT thực tế nhận hồ sơ xét tuyển năm 2024 (600 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 21. ĐẠI HỌC VĂN HIẾN (VHU)
  {
    id: 'vhu-tour',
    code: 'VHU-01',
    name: 'Đại học Văn Hiến (VHU)',
    major: 'Quản trị Du lịch & Ngôn ngữ Nhật',
    group: 'Xã hội & Nhân văn',
    score2022: 520,
    score2023: 530,
    score2024: 550,
    score2025: 560,
    notes: 'Điểm chuẩn V-ACT thực tế nhận hồ sơ xét tuyển năm 2024 (550 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  }
];
