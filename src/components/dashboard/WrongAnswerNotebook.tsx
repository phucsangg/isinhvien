import React, { useState } from 'react';
import { INITIAL_WRONG_ANSWERS } from '../../data/mock-student-data';
import { WrongAnswerBookItem } from '../../types';
import { RotateCcw, CheckCircle2, AlertTriangle, BookOpen, Clock, ArrowLeft, Tag, HelpCircle, Filter } from 'lucide-react';

export const WrongAnswerNotebook: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [items, setItems] = useState<WrongAnswerBookItem[]>(INITIAL_WRONG_ANSWERS);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [selectedItemForReview, setSelectedItemForReview] = useState<WrongAnswerBookItem | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(false);

  const mistakeLabels: Record<string, { label: string; bg: string; text: string }> = {
    thieu_kien_thuc: { label: 'Thiếu kiến thức', bg: 'bg-rose-100', text: 'text-rose-800' },
    doc_sai_de: { label: 'Đọc sai đề', bg: 'bg-amber-100', text: 'text-amber-800' },
    tinh_toan_sai: { label: 'Tính toán sai', bg: 'bg-blue-100', text: 'text-blue-800' },
    thieu_thoi_gian: { label: 'Thiếu thời gian', bg: 'bg-purple-100', text: 'text-purple-800' },
    doan: { label: 'Đoán bừa', bg: 'bg-slate-200', text: 'text-slate-800' }
  };

  const handleUpdateCategory = (itemId: string, newCategory: any) => {
    setItems(prev => prev.map(item => item.id === itemId ? { ...item, userMistakeCategory: newCategory } : item));
  };

  const handleMarkMastered = (itemId: string) => {
    setItems(prev => prev.map(item => item.id === itemId ? { ...item, isMastered: true } : item));
    setSelectedItemForReview(null);
  };

  const filteredItems = activeCategoryFilter === 'all'
    ? items
    : items.filter(i => i.userMistakeCategory === activeCategoryFilter);

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Header Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Dashboard</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Spaced Repetition System
            </span>
          </div>
        </div>

        {/* Title Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <RotateCcw className="w-4 h-4" />
              <span>Sổ Câu Sai Thông Minh</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Khắc Phục TẬN GỐC Tư Duy Làm Sai
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Phân loại nguyên nhân sai (đọc sai đề vs thiếu kiến thức) và ôn lặp lại ngắt quãng đến khi thành thạo.
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl border border-white/20 text-center shrink-0">
            <div className="text-3xl font-black text-white">{items.filter(i => !i.isMastered).length}</div>
            <div className="text-[11px] text-slate-300 font-semibold">Câu cần rà soát lại</div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-2xl border border-slate-200">
          <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Lọc theo nguyên nhân:</span>
          </span>

          {[
            { id: 'all', label: 'Tất cả câu sai' },
            { id: 'thieu_kien_thuc', label: 'Thiếu kiến thức' },
            { id: 'doc_sai_de', label: 'Đọc sai đề' },
            { id: 'tinh_toan_sai', label: 'Tính toán sai' },
            { id: 'thieu_thoi_gian', label: 'Thiếu thời gian' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveCategoryFilter(f.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategoryFilter === f.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center text-slate-500 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">Không có câu sai nào thuộc mục này!</h3>
              <p className="text-xs">Bạn đã thành thạo các câu hỏi thuộc nguyên nhân này.</p>
            </div>
          ) : (
            filteredItems.map(item => {
              const q = item.question;
              const categoryObj = mistakeLabels[item.userMistakeCategory];

              return (
                <div 
                  key={item.id}
                  className={`bg-white rounded-3xl p-6 border transition-all shadow-sm space-y-4 ${
                    item.isMastered ? 'border-emerald-200 bg-emerald-50/20 opacity-75' : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                        {q.domainName}
                      </span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${categoryObj.bg} ${categoryObj.text}`}>
                        Nguyên nhân: {categoryObj.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Lên lịch ôn: <strong className="text-slate-800">{item.nextReviewDate}</strong></span>
                    </div>
                  </div>

                  {/* Question snippet */}
                  <div className="text-sm font-bold text-slate-900 leading-relaxed">
                    {q.questionText}
                  </div>

                  {/* Options status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map(opt => {
                      const isUserWrong = opt.id === item.userAnswerId;
                      const isCorrect = opt.id === q.correctOptionId;

                      let style = 'bg-slate-50 border-slate-200 text-slate-700';
                      if (isUserWrong) style = 'bg-rose-50 border-rose-300 text-rose-900 font-bold';
                      if (isCorrect) style = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold';

                      return (
                        <div key={opt.id} className={`p-2.5 rounded-xl border flex items-center justify-between ${style}`}>
                          <span><strong>{opt.id}.</strong> {opt.text}</span>
                          {isUserWrong && <span className="text-[10px] text-rose-600 uppercase font-bold">(Bạn chọn sai)</span>}
                          {isCorrect && <span className="text-[10px] text-emerald-600 uppercase font-bold">(Đáp án đúng)</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Update Category & Retake Bar */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Tag className="w-3.5 h-3.5 text-slate-400" />
                      <span>Đổi nguyên nhân sai:</span>
                      <select
                        value={item.userMistakeCategory}
                        onChange={(e) => handleUpdateCategory(item.id, e.target.value)}
                        className="bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold px-2 py-1 outline-none text-slate-800"
                      >
                        <option value="thieu_kien_thuc">Thiếu kiến thức</option>
                        <option value="doc_sai_de">Đọc sai đề</option>
                        <option value="tinh_toan_sai">Tính toán sai</option>
                        <option value="thieu_thoi_gian">Thiếu thời gian</option>
                        <option value="doan">Đoán bừa</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedItemForReview(item);
                          setSelectedAnswer('');
                          setShowExplanation(false);
                        }}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Thử giải lại câu này</span>
                      </button>

                      {!item.isMastered && (
                        <button
                          onClick={() => handleMarkMastered(item.id)}
                          className="px-3 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold text-xs rounded-xl transition-colors"
                        >
                          Đánh dấu đã hiểu
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Retake Review Modal */}
        {selectedItemForReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-5 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Luyện Giải Lại Câu Sai</span>
                <button onClick={() => setSelectedItemForReview(null)} className="text-xs font-bold text-slate-400 hover:text-slate-600">Đóng</button>
              </div>

              <div className="text-base font-bold text-slate-900">
                {selectedItemForReview.question.questionText}
              </div>

              <div className="space-y-2">
                {selectedItemForReview.question.options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedAnswer(opt.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border font-medium text-xs transition-all flex items-center justify-between ${
                      selectedAnswer === opt.id
                        ? 'bg-blue-600 text-white border-blue-600 font-bold'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                    }`}
                  >
                    <span><strong>{opt.id}.</strong> {opt.text}</span>
                  </button>
                ))}
              </div>

              {selectedAnswer && (
                <div className="space-y-3 pt-2">
                  {selectedAnswer === selectedItemForReview.question.correctOptionId ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Xuất sắc! Bạn đã chọn chính xác đáp án đúng lần này.</span>
                    </div>
                  ) : (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-900 font-bold flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>Chưa chính xác. Đáp án đúng là {selectedItemForReview.question.correctOptionId}.</span>
                    </div>
                  )}

                  <div className="p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-2">
                    <div className="font-bold text-emerald-400">Giải thích chi tiết:</div>
                    <p className="text-slate-300 leading-relaxed">{selectedItemForReview.question.explanation}</p>
                  </div>

                  <button
                    onClick={() => handleMarkMastered(selectedItemForReview.id)}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors"
                  >
                    Đánh dấu đã hiểu hoàn toàn câu này
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
