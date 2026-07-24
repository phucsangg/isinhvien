import React, { useState, useEffect } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../../data/diagnostic-questions';
import { Clock, Bookmark, Edit3, ShieldAlert, CheckCircle2, ArrowLeft, ArrowRight, XCircle, RotateCcw, Sparkles } from 'lucide-react';

export const MockExamRoom: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const questions = DIAGNOSTIC_QUESTIONS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [secondsLeft, setSecondsLeft] = useState<number>(30 * 60); // 30-min demo simulation mode
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScratchpad, setShowScratchpad] = useState(false);
  const [scratchText, setScratchText] = useState('');

  const currentQ = questions[currentIndex];

  useEffect(() => {
    if (isSubmitted) return;
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
  }, [isSubmitted]);

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

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      
      {/* Simulation Header */}
      <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-extrabold text-blue-400 text-base">V-ACT Exam Simulator 2026</span>
          </div>

          <div className="flex items-center gap-4">
            {!isSubmitted ? (
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold font-mono border ${
                secondsLeft < 300 ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse' : 'bg-slate-800 text-blue-300 border-slate-700'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTime(secondsLeft)}</span>
              </div>
            ) : (
              <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-xl text-xs font-bold border border-emerald-500/30">
                Đã nộp bài
              </span>
            )}

            <button
              onClick={() => setShowScratchpad(!showScratchpad)}
              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-300 flex items-center gap-1 border border-slate-700"
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
            <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
              Câu {currentIndex + 1} / {questions.length} • {currentQ.domainName}
            </span>

            {!isSubmitted && (
              <button
                onClick={() => toggleFlag(currentQ.id)}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg border transition-colors ${
                  flaggedIds.includes(currentQ.id)
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{flaggedIds.includes(currentQ.id) ? 'Đã cắm cờ' : 'Cắm cờ xem lại'}</span>
              </button>
            )}
          </div>

          {currentQ.passageText && (
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-700/60 text-[15px] sm:text-base text-slate-100 leading-relaxed sm:leading-loose whitespace-pre-line shadow-lg font-sans">
              <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-slate-800 text-xs font-extrabold text-amber-400 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>DỮ LIỆU / NGỮ CẢNH BÀI ĐỌC ĐỀ MINH HỌA 2026</span>
              </div>
              <div className="text-slate-100 font-normal">
                {currentQ.passageText.normalize('NFC')}
              </div>
            </div>
          )}

          <div className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentQ.questionText}
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map(opt => {
              const isSelected = answers[currentQ.id] === opt.id;
              const isCorrect = opt.id === currentQ.correctOptionId;

              let cardStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850';
              if (!isSubmitted && isSelected) cardStyle = 'bg-blue-600/30 border-blue-500 text-white font-bold';
              
              if (isSubmitted) {
                if (isCorrect) cardStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                else if (isSelected && !isCorrect) cardStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold';
              }

              return (
                <button
                  key={opt.id}
                  disabled={isSubmitted}
                  onClick={() => setAnswers(prev => ({ ...prev, [currentQ.id]: opt.id }))}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${cardStyle}`}
                >
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {opt.id}
                  </div>
                  <span className="text-sm font-medium pt-0.5">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation Box when Submitted */}
          {isSubmitted && (
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm space-y-3">
              <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Giải thích chi tiết từ Ban Chuyên môn:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{currentQ.explanation}</p>
              
              <div className="pt-2 border-t border-slate-800">
                <strong className="text-slate-400 block mb-1">Vì sao các phương án khác sai:</strong>
                <ul className="space-y-1 text-xs text-slate-400">
                  {Object.entries(currentQ.whyWrong).map(([key, val]) => (
                    <li key={key}><strong>{key}:</strong> {val}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Bottom Nav */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-800">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300 font-bold text-xs rounded-xl flex items-center gap-2 border border-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Câu trước</span>
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center gap-2"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : !isSubmitted ? (
              <button
                onClick={() => setIsSubmitted(true)}
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Nộp bài thi thử</span>
              </button>
            ) : (
              <button
                onClick={onBack}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl"
              >
                Thoát phòng thi
              </button>
            )}
          </div>

        </div>

        {/* Right Palette Nav */}
        <div className="lg:col-span-4 space-y-6">
          
          {isSubmitted && (
            <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-center space-y-2">
              <div className="text-xs text-slate-400">Kết quả thi thử mô phỏng</div>
              <div className="text-3xl font-black text-emerald-400">{calculatedScore} / 1200 điểm</div>
              <div className="text-xs text-slate-300">{correctCount}/{questions.length} câu làm đúng</div>
            </div>
          )}

          <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-300">Danh sách câu hỏi</span>
              <span className="text-[11px] text-emerald-400 font-semibold">{answeredCount}/{questions.length} đã trả lời</span>
            </div>

            <div className="grid grid-cols-5 gap-2 max-h-96 overflow-y-auto pr-1 custom-scrollbar">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = !!answers[q.id];
                const isFlagged = flaggedIds.includes(q.id);

                let btnStyle = 'bg-slate-800 text-slate-400 border-slate-700/80 hover:bg-slate-750 hover:text-white';
                if (isCurrent) btnStyle = 'bg-blue-600 text-white border-blue-400 font-extrabold ring-2 ring-blue-500/30 scale-105 z-10';
                else if (isAnswered) btnStyle = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold';
                else if (isFlagged) btnStyle = 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold';

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl font-mono text-xs font-semibold border transition-all relative ${btnStyle}`}
                    title={`Câu ${idx + 1}: ${q.domainName}`}
                  >
                    {idx + 1}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {showScratchpad && (
            <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
              <div className="text-xs font-bold text-slate-300 mb-2">Bảng nháp thi</div>
              <textarea
                value={scratchText}
                onChange={(e) => setScratchText(e.target.value)}
                placeholder="Nháp nhanh công thức toán/logic..."
                className="w-full h-32 p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none font-mono"
              />
            </div>
          )}

        </div>

      </main>
    </div>
  );
};
