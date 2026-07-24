import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { MOCK_EXAMS_LIBRARY, MockExamItem } from '../../data/mock-exams-library';
import { FileText, Clock, Award, ShieldCheck, Lock, Play, Search, Filter, Sparkles, UserCheck, CheckCircle2 } from 'lucide-react';
import { StudentGoal } from '../../types';

interface MockExamLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onOpenAuth: () => void;
  onStartExam: (goal: StudentGoal, examItem: MockExamItem) => void;
}

export const MockExamLibraryModal: React.FC<MockExamLibraryModalProps> = ({
  isOpen,
  onClose,
  isLoggedIn,
  onOpenAuth,
  onStartExam
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredExams = MOCK_EXAMS_LIBRARY.filter(exam => {
    const matchCategory = selectedCategory === 'all' || exam.difficulty.includes(selectedCategory);
    const matchSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) || exam.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleStartExamClick = (exam: MockExamItem) => {
    if (!isLoggedIn) {
      onOpenAuth();
      return;
    }

    const defaultGoal: StudentGoal = {
      targetUniversity: 'ĐH Quốc Gia TP.HCM',
      targetScore: 850,
      targetMajor: 'Công nghệ Thông tin',
      grade: '12',
      examDate: 'Đợt 1 - Tháng 3/2026',
      dailyStudyMinutes: 45
    };

    onClose();
    onStartExam(defaultGoal, exam);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Đề Thi Mẫu ĐGNL ĐHQG TP.HCM 2026 (Sangsang V-ACT)"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6 text-slate-900">
        
        {/* Banner header */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white p-6 rounded-2xl border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Đã cập nhật Đề thi minh họa 2026 chính thức</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">Làm Bài Thi Thử V-ACT Trực Tiếp Trên Sangsang</h3>
            <p className="text-xs text-slate-300">Nạp trực tiếp file PDF Đề Thi Mẫu 2026 ĐHQG TP.HCM 120 câu - 150 phút tự động chấm điểm & cấp chứng nhận.</p>
          </div>

          {!isLoggedIn && (
            <button
              onClick={onOpenAuth}
              className="px-5 py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow-lg transition-colors shrink-0 flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>Đăng nhập để làm bài</span>
            </button>
          )}
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm mã đề (VD: APT2026-MINHHOA)..."
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {['all', '850+'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? 'Tất cả đề' : `Mục tiêu ${cat}`}
              </button>
            ))}
          </div>
        </div>

        {/* Locked Overlay Warning for Non-Logged-In Users */}
        {!isLoggedIn && (
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-800 text-xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-medium">
              <Lock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Bạn đang xem chế độ khách. Hãy <strong>Đăng nhập tài khoản Sangsang miễn phí</strong> để mở khóa làm bài thi thử 120 câu bấm giờ 150 phút trực tiếp.</span>
            </div>
            <button
              onClick={onOpenAuth}
              className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg shrink-0 transition-colors"
            >
              Đăng nhập ngay
            </button>
          </div>
        )}

        {/* Mock Exams List */}
        <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="p-6 bg-white rounded-2xl border-2 border-rose-300/80 shadow-md hover:shadow-lg transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group relative overflow-hidden"
            >
              <div className="space-y-2.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-0.5 bg-rose-600 text-white text-[10px] font-mono font-black rounded-md uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{exam.code}</span>
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-rose-100 text-rose-700">
                    {exam.difficulty}
                  </span>
                  <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Nguồn: {exam.source}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-rose-600 transition-colors">
                  {exam.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {exam.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-600 pt-1 flex-wrap font-semibold">
                  <span className="flex items-center gap-1 text-rose-600">
                    <FileText className="w-4 h-4" /> {exam.questionCount} câu hỏi V-ACT
                  </span>
                  <span className="flex items-center gap-1 text-amber-600">
                    <Clock className="w-4 h-4" /> {exam.timeLimitMinutes} phút bấm giờ
                  </span>
                  <span className="text-slate-500">
                    {exam.totalAttempts.toLocaleString('vi-VN')} lượt thi • Điểm TB: {exam.averageScore}đ
                  </span>
                </div>
              </div>

              {/* Start Action Button inside platform */}
              <button
                onClick={() => handleStartExamClick(exam)}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 ${
                  isLoggedIn
                    ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/25'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                }`}
              >
                {isLoggedIn ? <Play className="w-4 h-4 fill-white" /> : <Lock className="w-4 h-4 text-amber-600" />}
                <span>{isLoggedIn ? 'Thi ngay (150 phút)' : 'Đăng nhập để thi'}</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </Modal>
  );
};
