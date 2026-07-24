import { DiagnosticQuestion } from '../types';

export interface MockExamItem {
  id: string;
  code: string;
  title: string;
  description: string;
  questionCount: number;
  timeLimitMinutes: number;
  difficulty: 'Mục tiêu 500+' | 'Mục tiêu 750+' | 'Mục tiêu 850+';
  source: string;
  averageScore: number;
  totalAttempts: number;
  isOfficial?: boolean;
  questions?: DiagnosticQuestion[];
}

export const MOCK_EXAMS_LIBRARY: MockExamItem[] = [
  {
    id: 'exam-2026-minh-hoa',
    code: 'APT2026-MINHHOA',
    title: 'Đề Thi Minh Họa ĐGNL ĐHQG-HCM 2026 (Chính Thức)',
    description: 'Bộ đề thi mẫu đánh giá năng lực chính thức năm 2026 ban hành bởi Trung tâm Khảo thí & Đánh giá Chất lượng Đào tạo ĐHQG TP.HCM. Chuẩn cấu trúc 120 câu - 150 phút (60 câu Ngôn ngữ, 30 câu Toán học, 30 câu Tư duy Khoa học).',
    questionCount: 120,
    timeLimitMinutes: 150,
    difficulty: 'Mục tiêu 850+',
    source: 'ĐHQG TP.HCM (TTKT & ĐGCLĐT)',
    averageScore: 785,
    totalAttempts: 12450,
    isOfficial: true
  },
  {
    id: 'exam-2025-minh-hoa',
    code: 'APT2025-MINHHOA',
    title: 'Đề Thi Minh Họa ĐGNL ĐHQG-HCM 2025 (Chính Thức)',
    description: 'Bộ đề thi mẫu đánh giá năng lực chính thức năm 2025 ban hành bởi ĐHQG TP.HCM. Chuẩn cấu trúc 120 câu - 150 phút (60 câu Ngôn ngữ, 30 câu Toán học, 30 câu Tư duy Khoa học).',
    questionCount: 120,
    timeLimitMinutes: 150,
    difficulty: 'Mục tiêu 850+',
    source: 'ĐHQG TP.HCM (TTKT & ĐGCLĐT)',
    averageScore: 760,
    totalAttempts: 9820,
    isOfficial: true
  },
  {
    id: 'exam-legacy-minh-hoa',
    code: 'APT2024-TRUYENTHONG',
    title: 'Đề Thi Mẫu ĐGNL ĐHQG-HCM 2024 (Cấu Trúc Truyền Thống)',
    description: 'Bộ đề thi mẫu đánh giá năng lực theo cấu trúc 10 môn thi truyền thống: Tiếng Việt (20), Tiếng Anh (20), Toán (10), Logic (10), Phân tích số liệu (10), Hóa học (10), Vật lý (10), Sinh học (10), Địa lý (10), Lịch sử (10).',
    questionCount: 120,
    timeLimitMinutes: 150,
    difficulty: 'Mục tiêu 750+',
    source: 'ĐHQG TP.HCM',
    averageScore: 742,
    totalAttempts: 15300,
    isOfficial: true
  }
];
