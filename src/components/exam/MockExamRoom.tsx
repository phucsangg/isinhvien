import React, { useState, useEffect } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../../data/diagnostic-questions';
import { Clock, Bookmark, Edit3, ShieldAlert, CheckCircle2, ArrowLeft, ArrowRight, XCircle, RotateCcw, Sparkles, Pause, Play, Filter, X } from 'lucide-react';
import { Modal } from '../common/Modal';

export const MockExamRoom: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const questions = DIAGNOSTIC_QUESTIONS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [secondsLeft, setSecondsLeft] = useState<number>(30 * 60); // 30-min demo simulation mode
  const [isPaused, setIsPaused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScratchpad, setShowScratchpad] = useState(false);
  const [scratchText, setScratchText] = useState('');
  const [navFilter, setNavFilter] = useState<'all' | 'unanswered' | 'flagged' | 'tv' | 'ta' | 'toan' | 'kh'>('all');

  const currentQ = questions[currentIndex];

  useEffect(() => {
    if (isSubmitted || isPaused) return;
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, isPaused]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleFlag = (id: string) => {
    setFlaggedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.filter(q => answers[q.id] === q.correctOptionId).length;
  const calculatedScore = Math.round((correctCount / questions.length) * 1200);

  // Nav question filtering
  const filteredNavQuestions = questions.filter((q, idx) => {
    if (navFilter === 'unanswered') return !answers[q.id];
    if (navFilter === 'flagged') return flaggedIds.includes(q.id);
    if (navFilter === 'tv') return q.domainName.includes('Tiếng Việt');
    if (navFilter === 'ta') return q.domainName.includes('Tiếng Anh');
    if (navFilter === 'toan') return q.domainName.includes('Toán') || q.domainName.includes('Logic');
    if (navFilter === 'kh') return q.domainName.includes('Khoa học') || q.domainName.includes('Số liệu');
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      
      {/* Simulation Header */}
      <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="font-black text-white text-base leading-tight">V-ACT Exam Simulator 2026</div>
              <div className="text-[10px] text-slate-400 font-medium">Đề Mô Phỏng ĐHQG TP.HCM</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isSubmitted ? (
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono border ${
                  secondsLeft < 300 ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse' : 'bg-slate-800 text-sky-300 border-slate-700'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span>{formatTime(secondsLeft)}</span>
                </div>

                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold border border-slate-700 transition-colors flex items-center gap-1"
                  title={isPaused ? 'Tiếp tục bài thi' : 'Tạm dừng bài thi'}
                >
                  {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4 text-amber-400" />}
                  <span className="hidden sm:inline">{isPaused ? 'Tiếp tục' : 'Tạm dừng'}</span>
                </button>
              </div>
            ) : (
              <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-xl text-xs font-black border border-emerald-500/30">
                ✓ Đã nộp bài
              </span>
            )}

            <button
              onClick={() => setShowScratchpad(!showScratchpad)}
              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-300 flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Edit3 className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Bảng nháp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Exam View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Question Area */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-black bg-rose-500/20 text-rose-300 px-3.5 py-1.5 rounded-full border border-rose-500/30">
              Câu {currentIndex + 1} / {questions.length} • {currentQ.domainName}
            </span>

            {!isSubmitted && (
              <button
                onClick={() => toggleFlag(currentQ.id)}
                className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-xl border transition-colors ${
                  flaggedIds.includes(currentQ.id)
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-black'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${flaggedIds.includes(currentQ.id) ? 'fill-amber-400' : ''}`} />
                <span>{flaggedIds.includes(currentQ.id) ? 'Đã cắm cờ 🚩' : 'Cắm cờ theo dõi'}</span>
              </button>
            )}
          </div>

          {/* Question Box */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-6">
            
            {/* Passage if available */}
            {currentQ.passageText && (
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-2">
                <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Văn bản bài đọc / Ngữ liệu:</div>
                <div className="whitespace-pre-line font-medium text-slate-200">{currentQ.passageText}</div>
              </div>
            )}

            {/* Question Title */}
            <h2 className="text-base sm:text-lg font-black text-white leading-relaxed">
              {currentQ.questionText}
            </h2>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentQ.id] === opt.id;
                const isCorrect = isSubmitted && opt.id === currentQ.correctOptionId;
                const isWrongSelected = isSubmitted && isSelected && !isCorrect;

                return (
                  <button
                    key={opt.id}
                    disabled={isSubmitted}
                    onClick={() => setAnswers(prev => ({ ...prev, [currentQ.id]: opt.id }))}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      isCorrect
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                        : isWrongSelected
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold'
                        : isSelected
                        ? 'bg-rose-600/30 border-rose-500 text-white font-bold shadow-md'
                        : 'bg-slate-950 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg font-mono font-black text-xs flex items-center justify-center shrink-0 border ${
                      isSelected ? 'bg-rose-500 text-white border-rose-400' : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      {opt.id}
                    </span>
                    <span className="text-xs sm:text-sm pt-0.5 leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation when submitted */}
            {isSubmitted && (
              <div className="bg-slate-950 p-5 rounded-2xl border border-blue-500/30 text-xs space-y-2 mt-4">
                <div className="font-black text-blue-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Lời Giải Chi Tiết Của Thầy Cô Sangsang:</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-medium">
                  {currentQ.explanation || 'Xem phân tích chi tiết đáp án chuẩn ma trận V-ACT 2026.'}
                </p>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(prev => prev - 1)}
              className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 disabled:opacity-40 text-xs font-extrabold flex items-center gap-2 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Câu trước</span>
            </button>

            {!isSubmitted ? (
              <button
                onClick={() => setIsSubmitted(true)}
                className="px-6 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 font-black text-xs text-white shadow-lg shadow-rose-600/30 transition-all"
              >
                Nộp bài ngay
              </button>
            ) : (
              <button
                onClick={onBack}
                className="px-6 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 font-black text-xs text-white shadow-lg transition-all"
              >
                Hoàn thành & Xem Báo cáo
              </button>
            )}

            <button
              disabled={currentIndex === questions.length - 1}
              onClick={() => setCurrentIndex(prev => prev + 1)}
              className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 disabled:opacity-40 text-xs font-extrabold flex items-center gap-2 transition-all"
            >
              <span>Câu tiếp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Question Grid Navigator & Scratchpad Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Navigator Box */}
          <div className="bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-black uppercase text-slate-300 tracking-wider">Danh Sách Câu Hỏi</span>
              <span className="text-xs font-mono font-black text-emerald-400">
                {answeredCount}/{questions.length} Đã chọn
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1 text-[11px] font-bold">
              <button 
                onClick={() => setNavFilter('all')} 
                className={`px-2.5 py-1 rounded-lg transition-all ${navFilter === 'all' ? 'bg-rose-500 text-white font-black' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
              >
                Tất cả ({questions.length})
              </button>
              <button 
                onClick={() => setNavFilter('unanswered')} 
                className={`px-2.5 py-1 rounded-lg transition-all ${navFilter === 'unanswered' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
              >
                Chưa làm ({questions.length - answeredCount})
              </button>
              <button 
                onClick={() => setNavFilter('flagged')} 
                className={`px-2.5 py-1 rounded-lg transition-all ${navFilter === 'flagged' ? 'bg-amber-400 text-slate-950 font-black' : 'bg-slate-950 text-slate-400 hover:text-white'}`}
              >
                🚩 Cắm cờ ({flaggedIds.length})
              </button>
            </div>

            {/* Grid Buttons */}
            <div className="grid grid-cols-5 gap-2 pt-1 max-h-60 overflow-y-auto">
              {filteredNavQuestions.map((q) => {
                const originalIndex = questions.findIndex(orig => orig.id === q.id);
                const isAns = !!answers[q.id];
                const isFlag = flaggedIds.includes(q.id);
                const isCur = originalIndex === currentIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(originalIndex)}
                    className={`py-2 rounded-xl text-xs font-mono font-black border relative transition-all ${
                      isCur
                        ? 'border-rose-500 bg-rose-500/20 text-rose-300 font-extrabold ring-2 ring-rose-500/50'
                        : isAns
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {originalIndex + 1}
                    {isFlag && <span className="absolute -top-1 -right-1 text-[10px]">🚩</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Scratchpad Window */}
          {showScratchpad && (
            <div className="bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-xl space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-emerald-400 flex items-center gap-1.5">
                  <Edit3 className="w-4 h-4" />
                  <span>Bảng Nháp Tính Toán / Ghi Chú</span>
                </span>
                <button onClick={() => setShowScratchpad(false)} className="text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <textarea
                value={scratchText}
                onChange={(e) => setScratchText(e.target.value)}
                placeholder="Ghi chú công thức, lập bảng logic 5 đối tượng tại đây..."
                className="w-full h-40 p-3 bg-slate-950 border border-slate-800 rounded-2xl text-xs font-mono text-slate-200 outline-none focus:border-emerald-500 resize-none shadow-inner"
              />
            </div>
          )}

        </div>

      </main>

      {/* PAUSE EXAM TIMER MODAL */}
      {isPaused && (
        <Modal
          isOpen={isPaused}
          onClose={() => setIsPaused(false)}
          title="Tạm Dừng Bài Thi Mô Phỏng"
          maxWidth="max-w-md"
        >
          <div className="text-center space-y-5 text-slate-900 py-2">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto border-2 border-amber-300">
              <Pause className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-slate-900">Bài Thi Đã Được Đóng Băng</h3>
              <p className="text-xs text-slate-600 font-medium">Đồng hồ đếm ngược đang tạm dừng. Bạn có thể nghỉ ngơi chốc lát trước khi tiếp tục.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs font-mono text-slate-800 space-y-1">
              <div>Thời gian còn lại: <strong className="text-rose-600 font-bold">{formatTime(secondsLeft)}</strong></div>
              <div>Số câu đã trả lời: <strong className="text-emerald-700 font-bold">{answeredCount}/{questions.length} câu</strong></div>
            </div>

            <button
              onClick={() => setIsPaused(false)}
              className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Tiếp tục làm bài</span>
            </button>
          </div>
        </Modal>
      )}

    </div>
  );
};
