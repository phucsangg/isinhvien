export type ExamSkillDomain = 
  | 'tieng_viet' 
  | 'tieng_anh' 
  | 'toan_hoc' 
  | 'logic' 
  | 'so_lieu' 
  | 'khoa_hoc';

export interface SkillScore {
  domain: ExamSkillDomain;
  label: string;
  score: number; // 0-100 percentage or raw score
  maxScore: number;
  correctCount: number;
  totalCount: number;
  avgTimeSec: number;
  status: 'strong' | 'moderate' | 'weak';
}

export interface DiagnosticQuestion {
  id: string;
  domain: ExamSkillDomain;
  domainName: string;
  questionText: string;
  passageText?: string;
  codeSnippet?: string;
  imageUrl?: string;
  options: {
    id: string; // 'A' | 'B' | 'C' | 'D'
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
  whyWrong: Record<string, string>; // explanation for each option
  difficulty: 'de' | 'trung_binh' | 'phuc_tap';
  estimatedTimeSeconds: number;
}

export interface StudentGoal {
  targetScore: number; // e.g., 850
  targetUniversity: string;
  targetMajor: string;
  grade: '10' | '11' | '12' | 'tu_do';
  currentEstimatedScore?: number;
  examDate: string; // e.g., "Đợt 1 - Tháng 3/2026"
  dailyStudyMinutes: number;
}

export interface DiagnosticResult {
  attemptId: string;
  timestamp: string;
  totalScoreForecast: number; // e.g. 760
  forecastMin: number; // e.g. 730
  forecastMax: number; // e.g. 790
  totalCorrect: number;
  totalQuestions: number;
  accuracyRate: number;
  totalTimeMinutes: number;
  skills: SkillScore[];
  topWeaknesses: string[];
  topStrengths: string[];
  recommendedTasks: string[];
}

export interface WrongAnswerBookItem {
  id: string;
  question: DiagnosticQuestion;
  userAnswerId: string;
  userMistakeCategory: 'thieu_kien_thuc' | 'doc_sai_de' | 'tinh_toan_sai' | 'thieu_thoi_gian' | 'doan';
  dateAdded: string;
  reviewCount: number;
  nextReviewDate: string;
  isMastered: boolean;
}

export interface DailyTask {
  id: string;
  title: string;
  category: ExamSkillDomain;
  durationMinutes: number;
  type: 'concept' | 'drill' | 'video' | 'wrong_review';
  completed: boolean;
  xpPoints: number;
}

export interface UniversityCutoff {
  id: string;
  code: string;
  name: string;
  major: string;
  group: string;
  score2022?: number;
  score2023: number;
  score2024: number;
  score2025: number;
  notes: string;
  location: string;
  admissionMethod?: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  domain: string;
  experienceYears: number;
  achievements: string[];
  teachingMethod: string;
  videoIntroUrl?: string;
  coursesHandled: string[];
  avatar: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Cấu trúc V-ACT' | 'Chiến thuật' | 'Tiếng Việt & Anh' | 'Toán & Logic' | 'Suy luận Khoa học' | 'Điểm chuẩn & Trường';
  author: string;
  reviewer: string;
  publishedDate: string;
  readTimeMinutes: number;
  contentMarkdown: string;
  views: number;
}
