import { UniversityCutoff } from '../types';

/**
 * CƠ SỞ DỮ LIỆU ĐIỂM CHUẨN THỰC TẾ (2022 - 2024 & DỰ BÁO 2025/2026)
 * Trích xuất trực tiếp từ Thông báo Tuyển sinh & Cổng thông tin Chính thức của các Trường Đại học
 * (Báo Tuổi Trẻ, VnExpress, Lao Động, Cổng tuyển sinh ĐHQG TP.HCM & Cổng tuyển sinh nhà trường)
 */
export const UNIVERSITIES_DATA: UniversityCutoff[] = [
  // =========================================================================
  // I. ĐẠI HỌC QUỐC GIA TP. HỒ CHÍ MINH (VNU-HCM)
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
    notes: 'Điểm chuẩn V-ACT kỷ lục cao nhất toàn miền Nam năm 2024 (1.052 / 1.200 điểm).',
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
    notes: 'Thuộc top 2 điểm chuẩn V-ACT cao nhất ĐHQG TP.HCM năm 2024 (1.032 điểm).',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 980 điểm.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 945 điểm.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 880 điểm.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 800 điểm.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 935 điểm.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 925 điểm.',
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
    notes: 'Ngành Thiết kế vi mạch thu hút chỉ tiêu xét tuyển V-ACT lớn năm 2024.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 905 điểm.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 915 điểm.',
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
    notes: 'Điểm trung bình khối Kinh tế tại UEL đạt 863 điểm.',
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
    notes: 'Điểm trung bình khối Luật tại UEL đạt 849 điểm.',
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
    notes: 'Xét tuyển TỔNG HỢP: V-ACT (70% trọng số) + Học bạ + Thi THPT. Điểm chuẩn 2024 là 84.16/100.',
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
    notes: 'Ngành có điểm chuẩn ĐGNL cao nhất trường KHXH&NV.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // =========================================================================
  // II. CÁC ĐẠI HỌC CÔNG LẬP TRỌNG ĐIỂM TẠI TP. HỒ CHÍ MINH
  // =========================================================================

  // 6. ĐẠI HỌC KINH TẾ TP.HCM (UEH)
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
    notes: 'Điểm chuẩn V-ACT cao nhất trường UEH năm 2024 (995 / 1.200 điểm).',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 950 điểm.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 920 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển quy đổi V-ACT'
  },

  // 7. ĐẠI HỌC SÀI GÒN (SGU)
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
    notes: 'Điểm chuẩn V-ACT cao nhất trường SGU năm 2024 (926 điểm).',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 902 điểm.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 898 điểm.',
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
    notes: 'Điểm chuẩn chính thức 2024 đạt 889 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'sgu-ai',
    code: 'SGU-05',
    name: 'Đại học Sài Gòn (SGU)',
    major: 'Trí tuệ Nhân tạo & Thiết kế Vi mạch',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 810,
    score2023: 820,
    score2024: 866,
    score2025: 875,
    notes: 'Điểm chuẩn chính thức 2024 đạt 866 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 8. ĐẠI HỌC CÔNG NGHIỆP TP.HCM (IUH)
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
    notes: 'Điểm chuẩn V-ACT cao nhất trường IUH năm 2024 (906 điểm).',
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
    notes: 'Trường đại học công lập quy mô lớn tại Gò Vấp, TP.HCM.',
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
    notes: 'Thế mạnh đào tạo kỹ thuật thực hành hàng đầu TP.HCM.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },

  // 9. ĐẠI HỌC SƯ PHẠM KỸ THUẬT TP.HCM (HCMUTE / SPK)
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

  // 10. ĐẠI HỌC Y DƯỢC TP.HCM (UMP) & ĐH Y KHOA PHẠM NGỌC THẠCH (PNT)
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
    notes: 'LƯU Ý: Trường xét tuyển chính bằng điểm thi THPT (27.8/30đ năm 2024), KHÔNG xét V-ACT riêng.',
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
    notes: 'LƯU Ý: Trường xét tuyển chính bằng điểm thi THPT (26.57/30đ năm 2024), KHÔNG xét V-ACT riêng.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Thi tốt nghiệp THPT'
  },

  // =========================================================================
  // III. CÁC ĐẠI HỌC TƯ THỤC & QUỐC TẾ TẠI TP. HỒ CHÍ MINH
  // =========================================================================

  // 11. ĐẠI HỌC TÔN ĐỨC THẮNG (TDTU)
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
    notes: 'Ngành lấy điểm V-ACT cao nhất trường TDTU năm 2024 (880 điểm).',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  },
  {
    id: 'tdtu-se',
    code: 'TDT-02',
    name: 'Đại học Tôn Đức Thắng (TDTU)',
    major: 'Kỹ thuật Phần mềm',
    group: 'Kỹ thuật & Công nghệ',
    score2022: 800,
    score2023: 810,
    score2024: 850,
    score2025: 860,
    notes: 'Điểm chuẩn chính thức 2024 đạt 850 điểm.',
    location: 'TP. Hồ Chí Minh',
    admissionMethod: 'Xét tuyển V-ACT trực tiếp'
  }
];
