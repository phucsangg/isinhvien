import { DailyTask, WrongAnswerBookItem, SkillScore } from '../types';
import { DIAGNOSTIC_QUESTIONS } from './diagnostic-questions';

export const INITIAL_SKILL_SCORES: SkillScore[] = [
  { domain: 'tieng_viet', label: 'Tiếng Việt', score: 82, maxScore: 100, correctCount: 16, totalCount: 20, avgTimeSec: 42, status: 'strong' },
  { domain: 'tieng_anh', label: 'Tiếng Anh', score: 75, maxScore: 100, correctCount: 15, totalCount: 20, avgTimeSec: 48, status: 'moderate' },
  { domain: 'toan_hoc', label: 'Toán học', score: 60, maxScore: 100, correctCount: 6, totalCount: 10, avgTimeSec: 75, status: 'weak' },
  { domain: 'logic', label: 'Tư duy Logic', score: 68, maxScore: 100, correctCount: 7, totalCount: 10, avgTimeSec: 65, status: 'moderate' },
  { domain: 'so_lieu', label: 'Phân tích số liệu', score: 55, maxScore: 100, correctCount: 5, totalCount: 10, avgTimeSec: 80, status: 'weak' },
  { domain: 'khoa_hoc', label: 'Suy luận Khoa học', score: 70, maxScore: 100, correctCount: 35, totalCount: 50, avgTimeSec: 55, status: 'moderate' },
];

// All daily tasks default to uncompleted (completed: false)
export const INITIAL_DAILY_TASKS: DailyTask[] = [
  { id: 'task-1', title: '15 phút: Đọc hiểu văn bản nghệ thuật Tiếng Việt', category: 'tieng_viet', durationMinutes: 15, type: 'drill', completed: false, xpPoints: 50 },
  { id: 'task-2', title: '10 câu: Phân tích số liệu biểu đồ cột & đường', category: 'so_lieu', durationMinutes: 20, type: 'drill', completed: false, xpPoints: 80 },
  { id: 'task-3', title: 'Ôn lại 3 câu sai hôm qua (Sổ câu sai)', category: 'toan_hoc', durationMinutes: 15, type: 'wrong_review', completed: false, xpPoints: 60 },
  { id: 'task-4', title: 'Video: Chiến thuật giải ma trận Logic 45 giây', category: 'logic', durationMinutes: 12, type: 'video', completed: false, xpPoints: 40 },
  { id: 'task-5', title: 'Mini Test 15 phút: Suy luận khoa học (Hóa - Lý)', category: 'khoa_hoc', durationMinutes: 15, type: 'drill', completed: false, xpPoints: 100 }
];

export const INITIAL_WRONG_ANSWERS: WrongAnswerBookItem[] = [
  {
    id: 'w-01',
    question: DIAGNOSTIC_QUESTIONS[4], // th-01 (Toán cực đại)
    userAnswerId: 'C',
    userMistakeCategory: 'tinh_toan_sai',
    dateAdded: '20/07/2026',
    reviewCount: 2,
    nextReviewDate: 'Hôm nay',
    isMastered: false
  },
  {
    id: 'w-02',
    question: DIAGNOSTIC_QUESTIONS[8], // sl-02 (Tốc độ tăng điểm)
    userAnswerId: 'D',
    userMistakeCategory: 'doc_sai_de',
    dateAdded: '21/07/2026',
    reviewCount: 1,
    nextReviewDate: 'Ngày mai',
    isMastered: false
  },
  {
    id: 'w-03',
    question: DIAGNOSTIC_QUESTIONS[12], // kh-04 (Địa lý mưa Duyên hải)
    userAnswerId: 'B',
    userMistakeCategory: 'thieu_kien_thuc',
    dateAdded: '21/07/2026',
    reviewCount: 1,
    nextReviewDate: 'Hôm nay',
    isMastered: false
  }
];
