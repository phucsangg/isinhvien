import React, { useState, useEffect } from 'react';
import { getRandomDiagnosticQuestions } from '../../data/diagnostic-questions';
import { DE_MINH_HOA_2026_QUESTIONS } from '../../data/de-minh-hoa-2026';
import { DE_MINH_HOA_2025_QUESTIONS } from '../../data/de-minh-hoa-2025';
import { DE_MINH_HOA_LEGACY_QUESTIONS } from '../../data/de-minh-hoa-legacy';
import { StudentGoal, DiagnosticResult, SkillScore, ExamSkillDomain, DiagnosticQuestion } from '../../types';
import { Clock, Bookmark, Edit3, ArrowRight, ArrowLeft, CheckCircle2, FileText, Sparkles, LayoutGrid, X } from 'lucide-react';
import { MockExamItem } from '../../data/mock-exams-library';

interface DiagnosticEngineProps {
  goal: StudentGoal;
  selectedExam?: MockExamItem | null;
  onComplete: (result: DiagnosticResult) => void;
  onCancel: () => void;
}

const renderFormattedPassage = (content: string) => {
  if (!content) return null;

  // Check if content contains markdown table syntax (| col1 | col2 |)
  if (content.includes('|') && content.includes('\n|')) {
    const lines = content.split('\n');
    const tableLines: string[] = [];
    const textBefore: string[] = [];
    const textAfter: string[] = [];

    let inTable = false;
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        tableLines.push(trimmed);
      } else if (inTable) {
        textAfter.push(line);
      } else {
        textBefore.push(line);
      }
    }

    if (tableLines.length >= 2) {
      const rows = tableLines.map(line =>
        line.split('|').slice(1, -1).map(c => c.trim())
      );

      const hasSeparator = rows.length > 1 && rows[1].every(cell => /^[-:]+$/.test(cell));
      const headerRow = rows[0];
      const dataRows = hasSeparator ? rows.slice(2) : rows.slice(1);

      return (
        <div className="space-y-4">
          {textBefore.length > 0 && (
            <div className="whitespace-pre-line">{textBefore.join('\n').trim()}</div>
          )}

          <div className="overflow-x-auto my-4 rounded-2xl border border-slate-700/80 bg-slate-950/80 shadow-2xl">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800 text-amber-300 font-extrabold border-b border-slate-700">
                  {headerRow.map((col, idx) => (
                    <th key={idx} className="px-3.5 py-3 border-r border-slate-700/60 last:border-r-0 text-center uppercase tracking-wider">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {dataRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className={`px-3.5 py-2.5 border-r border-slate-800/60 last:border-r-0 text-slate-100 font-medium ${cIdx === 0 || cIdx >= 2 ? 'text-center' : 'text-left'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {textAfter.length > 0 && (
            <div className="whitespace-pre-line">{textAfter.join('\n').trim()}</div>
          )}
        </div>
      );
    }
  }

  return <div className="whitespace-pre-line">{content}</div>;
};

export const DiagnosticEngine: React.FC<DiagnosticEngineProps> = ({ goal, selectedExam, onComplete, onCancel }) => {
  const initialTimeSeconds = selectedExam ? selectedExam.timeLimitMinutes * 60 : 20 * 60;

  // Load EXACT sequential questions from selected official PDF exam or custom topic practice questions
  const questions: DiagnosticQuestion[] = React.useMemo(() => {
    if (selectedExam) {
      if (selectedExam.questions && selectedExam.questions.length > 0) {
        return selectedExam.questions;
      }
      if (selectedExam.id === 'exam-2025-minh-hoa') {
        return DE_MINH_HOA_2025_QUESTIONS;
      }
      if (selectedExam.id === 'exam-legacy-minh-hoa') {
        return DE_MINH_HOA_LEGACY_QUESTIONS;
      }
      return DE_MINH_HOA_2026_QUESTIONS;
    }
    return getRandomDiagnosticQuestions(20);
  }, [selectedExam]);
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(initialTimeSeconds);
  const [showScratchpad, setShowScratchpad] = useState<boolean>(false);
  const [scratchpadText, setScratchpadText] = useState<string>('');
  const [showPaletteModal, setShowPaletteModal] = useState<boolean>(false);

  const [activePaletteGroup, setActivePaletteGroup] = useState<number>(0);

  useEffect(() => {
    setSelectedAnswers({});
    setBookmarkedIds([]);
    setCurrentIndex(0);
  }, [selectedExam]);

  useEffect(() => {
    setActivePaletteGroup(Math.floor(currentIndex / 20));
    const el = document.getElementById(`q-pill-${currentIndex}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentIndex]);

  const currentQ = questions[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const toggleBookmark = (qId: string) => {
    setBookmarkedIds(prev => 
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  const handleSubmitTest = () => {
    const domainScores: Record<ExamSkillDomain, { correct: number; total: number }> = {
      tieng_viet: { correct: 0, total: 0 },
      tieng_anh: { correct: 0, total: 0 },
      toan_hoc: { correct: 0, total: 0 },
      logic: { correct: 0, total: 0 },
      so_lieu: { correct: 0, total: 0 },
      khoa_hoc: { correct: 0, total: 0 }
    };

    questions.forEach(q => {
      const isCorrect = selectedAnswers[q.id] === q.correctOptionId;
      if (domainScores[q.domain]) {
        domainScores[q.domain].total += 1;
        if (isCorrect) {
          domainScores[q.domain].correct += 1;
        }
      }
    });

    const totalQuestions = questions.length;
    let totalCorrect = 0;
    const skillBreakdown: SkillScore[] = (Object.keys(domainScores) as ExamSkillDomain[]).map(domainKey => {
      const data = domainScores[domainKey];
      totalCorrect += data.correct;
      const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
      
      let name = 'Kỹ năng';
      if (domainKey === 'tieng_viet') name = 'Tiếng Việt';
      if (domainKey === 'tieng_anh') name = 'Tiếng Anh';
      if (domainKey === 'toan_hoc') name = 'Toán học';
      if (domainKey === 'logic') name = 'Tư duy Logic';
      if (domainKey === 'so_lieu') name = 'Phân tích số liệu';
      if (domainKey === 'khoa_hoc') name = 'Suy luận Khoa học';

      return {
        domain: domainKey,
        label: name,
        score: pct,
        maxScore: 100,
        correctCount: data.correct,
        totalCount: data.total,
        avgTimeSec: 45,
        status: pct >= 80 ? 'strong' : pct >= 60 ? 'moderate' : 'weak'
      };
    });

    const overallScorePercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const estimatedTotalScore = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 1200) : 0;

    const margin = totalQuestions >= 120 ? 30 : 50;
    const calcMin = Math.max(0, estimatedTotalScore - margin);
    const calcMax = Math.min(1200, estimatedTotalScore + margin);

    const forecastMin = Math.min(calcMin, calcMax);
    const forecastMax = Math.max(calcMin, calcMax);

    const result: DiagnosticResult = {
      attemptId: `res-${Date.now()}`,
      timestamp: new Date().toISOString(),
      totalScoreForecast: estimatedTotalScore,
      forecastMin: forecastMin,
      forecastMax: forecastMax,
      totalCorrect: totalCorrect,
      totalQuestions: totalQuestions,
      accuracyRate: overallScorePercent,
      totalTimeMinutes: Math.max(1, Math.round((initialTimeSeconds - secondsRemaining) / 60)),
      skills: skillBreakdown,
      topWeaknesses: skillBreakdown.filter(s => s.status === 'weak').map(s => s.label),
      topStrengths: skillBreakdown.filter(s => s.status === 'strong').map(s => s.label),
      recommendedTasks: [
        'Ôn tập chèo cổ & văn học trung đại trong Đề Minh Họa 2026',
        'Luyện bài toán quy hoạch tuyến tính & lãi suất',
        'Làm lại các câu sai trong Sổ tay Spaced Repetition'
      ]
    };

    onComplete(result);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Fixed Navigation Bar */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-3.5 sticky top-0 z-30 flex items-center justify-between shadow-lg">
        
        <div className="flex items-center gap-3">
          <button
            onClick={onCancel}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors text-xs font-bold flex items-center gap-1.5 border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Thoát</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-extrabold uppercase tracking-wider rounded-md">
                {selectedExam ? selectedExam.code : 'ĐGNL CHÍNH THỨC'}
              </span>
              <h1 className="text-sm sm:text-base font-extrabold text-white truncate max-w-[200px] sm:max-w-md">
                {selectedExam ? selectedExam.title : 'Bài Đánh Giá Năng Lực Tổng Hợp'}
              </h1>
            </div>
          </div>
        </div>

        {/* Action Controls: Palette Toggle, Timer, Submit */}
        <div className="flex items-center gap-3">
          
          {/* Question List Palette Drawer Toggle Button */}
          <button
            onClick={() => setShowPaletteModal(!showPaletteModal)}
            className={`px-3.5 py-2 rounded-xl border text-xs font-extrabold flex items-center gap-2 transition-all ${
              showPaletteModal
                ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/20'
                : 'bg-slate-800 border-slate-700 text-slate-200 hover:text-white hover:bg-slate-750'
            }`}
          >
            <LayoutGrid className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Danh sách câu hỏi</span>
            <span className="bg-slate-900/80 px-2 py-0.5 rounded-lg text-amber-300 font-mono text-[11px] border border-slate-700">
              {answeredCount}/{questions.length}
            </span>
          </button>

          {/* Timer Display */}
          <div className={`px-3.5 py-2 rounded-xl border font-mono font-bold text-xs flex items-center gap-2 ${
            secondsRemaining < 300
              ? 'bg-rose-500/20 border-rose-500/50 text-rose-400 animate-pulse'
              : 'bg-slate-800 border-slate-700 text-amber-300'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTime(secondsRemaining)}</span>
          </div>

          {/* Submit Test Button */}
          <button
            onClick={handleSubmitTest}
            className="px-4 py-2 bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-rose-500/20 transition-all flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span className="hidden sm:inline">Nộp bài thi</span>
          </button>
        </div>
      </header>

      {/* Main Examination Layout - Split Screen Mode (50% Passage / 50% Question) */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Passage / Context Panel (Expanded ~60% width when passageText exists) */}
        {currentQ.passageText && (
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex-1 flex flex-col space-y-4 max-h-[calc(100vh-140px)] overflow-y-auto sticky top-24 custom-scrollbar">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-extrabold text-amber-400 uppercase tracking-wide">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                  <span>DỮ LIỆU / NGỮ CẢNH BÀI ĐỌC BÊN TRÁI</span>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold">
                  Cuộn để đọc tiếp
                </span>
              </div>
              <div className="text-[15px] sm:text-base text-slate-100 leading-relaxed sm:leading-loose font-normal selection:bg-rose-500/30">
                {renderFormattedPassage(currentQ.passageText.normalize('NFC'))}
              </div>
            </div>
          </div>
        )}

        {/* Right Column: Question Display & Answer Choices Panel (~40% width when passageText exists) */}
        <div className={`${currentQ.passageText ? 'lg:col-span-5' : 'lg:col-span-12 max-w-4xl mx-auto'} space-y-6 flex flex-col w-full`}>
          
          {/* Question Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex-1 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Question Header & Meta Info */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-300 font-extrabold text-xs rounded-lg">
                    Câu {currentIndex + 1} / {questions.length}
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-bold rounded-lg border border-slate-700">
                    Phần: {currentQ.domainName}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowScratchpad(!showScratchpad)}
                    className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      showScratchpad
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                    title="Mở nháp tính toán"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span className="hidden sm:inline">Nháp</span>
                  </button>

                  <button
                    onClick={() => toggleBookmark(currentQ.id)}
                    className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      bookmarkedIds.includes(currentQ.id)
                        ? 'bg-rose-500/20 border-rose-500/50 text-rose-400'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                    title="Đánh dấu câu hỏi cần xem lại"
                  >
                    <Bookmark className="w-4 h-4" />
                    <span className="hidden sm:inline">Đánh dấu</span>
                  </button>
                </div>
              </div>

              {/* Scratchpad Overlay */}
              {showScratchpad && (
                <div className="p-4 bg-slate-950 rounded-2xl border border-amber-500/30 space-y-2 animate-fadeIn">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Giấy nháp cá nhân (Dữ liệu không gửi lên server)</span>
                  </div>
                  <textarea
                    value={scratchpadText}
                    onChange={(e) => setScratchpadText(e.target.value)}
                    placeholder="Viết nháp công thức, tính toán hoặc ghi chú tại đây..."
                    rows={3}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 outline-none focus:border-amber-500/50"
                  />
                </div>
              )}

              {/* Question Stem Text */}
              <div className="text-lg sm:text-xl font-extrabold text-white leading-snug tracking-tight">
                {currentQ.questionText}
              </div>

              {/* Options List */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedAnswers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full text-left px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl border transition-all flex items-center gap-3.5 min-h-[58px] ${
                        isSelected
                          ? 'bg-rose-500/15 border-2 border-rose-500 text-white shadow-lg shadow-rose-500/15 ring-2 ring-rose-500/30'
                          : 'bg-slate-800/70 hover:bg-slate-800 border-slate-700/80 hover:border-slate-500 text-slate-100'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 transition-colors shadow ${
                        isSelected
                          ? 'bg-rose-500 text-white shadow-rose-500/50 ring-2 ring-rose-300'
                          : 'bg-slate-700/80 text-slate-200 border border-slate-600'
                      }`}>
                        {opt.id}
                      </div>
                      <div className="text-[15px] sm:text-base font-semibold leading-relaxed flex-1">
                        {opt.text}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Fixed Horizontal Question Strip & Controls */}
      <footer className="sticky bottom-0 z-30 bg-slate-900/98 backdrop-blur-lg border-t border-slate-800 px-3 sm:px-6 py-2.5 shadow-2xl space-y-2">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Left: Previous Button */}
          <div className="flex items-center gap-2 shrink-0 justify-between w-full md:w-auto">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white font-extrabold text-xs rounded-xl transition-all flex items-center gap-1.5 border border-slate-700 shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Câu trước</span>
            </button>

            {/* Mobile-only Modal Opener */}
            <button
              onClick={() => setShowPaletteModal(true)}
              className="md:hidden px-3 py-1.5 bg-slate-800 border border-slate-700 text-amber-300 font-extrabold text-xs rounded-xl flex items-center gap-1.5"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{currentIndex + 1}/{questions.length}</span>
            </button>

            {/* Mobile Next / Submit Button */}
            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                className="md:hidden px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl flex items-center gap-1 shadow-md shadow-rose-500/20"
              >
                <span>Tiếp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleSubmitTest}
                className="md:hidden px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-xl flex items-center gap-1 shadow-md shadow-emerald-500/30 animate-pulse"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Nộp bài ({answeredCount}/{questions.length})</span>
              </button>
            )}
          </div>

          {/* Center: Clean Continuous Horizontal Question Strip (1..N) */}
          <div className="hidden md:flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-2 flex-1 justify-start max-w-3xl scroll-smooth">
            {questions.map((q, idx) => {
              const isCurrent = currentIndex === idx;
              const isAnswered = !!selectedAnswers[q.id];
              const isBookmarked = bookmarkedIds.includes(q.id);

              return (
                <button
                  key={q.id}
                  id={`q-pill-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-8 h-8 rounded-xl font-mono text-xs font-black transition-all relative flex items-center justify-center border shrink-0 ${
                    isCurrent
                      ? 'bg-rose-500 text-white border-rose-300 ring-4 ring-rose-500/40 shadow-lg shadow-rose-500/30 scale-105 z-10'
                      : isAnswered
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold hover:bg-emerald-500/30'
                      : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                  } ${isBookmarked ? 'ring-2 ring-amber-400 border-amber-400' : ''}`}
                  title={`Câu ${idx + 1}: ${q.domainName} ${isAnswered ? '(Đã trả lời)' : '(Chưa làm)'}`}
                >
                  <span>{idx + 1}</span>
                  {isBookmarked && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-slate-900 flex items-center justify-center text-[7px] text-slate-950 font-bold">★</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Grid Drawer Trigger & Next / Submit Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowPaletteModal(true)}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white rounded-xl text-xs font-extrabold border border-slate-700 flex items-center gap-2 transition-all shadow-sm"
              title="Mở toàn bộ danh sách câu hỏi dạng lưới"
            >
              <LayoutGrid className="w-4 h-4 text-amber-400" />
              <span>Danh sách câu hỏi</span>
              <span className="px-2 py-0.5 rounded-lg bg-slate-900 text-emerald-400 font-mono text-[11px] border border-slate-700">
                {answeredCount}/{questions.length}
              </span>
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-rose-500/20"
              >
                <span className="hidden sm:inline">Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitTest}
                className="px-5 py-2 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-black text-xs rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-rose-500/30 animate-pulse"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>Nộp bài thi ({answeredCount}/{questions.length})</span>
              </button>
            )}
          </div>

        </div>
      </footer>

      {/* Popover / Modal Drawer for Complete Question Grid Overview */}
      {showPaletteModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col space-y-5">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5 text-amber-400" />
                  <span>DANH SÁCH {questions.length} CÂU HỎI BÀI THI</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Nhấp vào số câu để chuyển nhanh đến câu hỏi đó</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                  {progressPercent}% Hoàn thành ({answeredCount}/{questions.length})
                </span>
                <button
                  onClick={() => setShowPaletteModal(false)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Range Group Shortcut Tabs Inside Modal */}
            {questions.length > 20 && (
              <div className="flex items-center gap-1.5 no-scrollbar overflow-x-auto pb-1">
                {Array.from({ length: Math.ceil(questions.length / 20) }).map((_, pIdx) => {
                  const startNum = pIdx * 20 + 1;
                  const endNum = Math.min(questions.length, (pIdx + 1) * 20);
                  const isCurrentGroup = activePaletteGroup === pIdx;

                  return (
                    <button
                      key={pIdx}
                      onClick={() => setActivePaletteGroup(pIdx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all border shrink-0 ${
                        isCurrentGroup
                          ? 'bg-rose-500 text-white border-rose-400 shadow-md'
                          : 'bg-slate-800/80 text-slate-400 border-slate-700/60 hover:text-white hover:bg-slate-750'
                      }`}
                    >
                      Nhóm {startNum}–{endNum}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Grid Palette 120 Buttons */}
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2.5 max-h-96 overflow-y-auto p-1 custom-scrollbar">
              {questions.map((q, idx) => {
                const isCurrent = currentIndex === idx;
                const isAnswered = !!selectedAnswers[q.id];
                const isBookmarked = bookmarkedIds.includes(q.id);

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setActivePaletteGroup(Math.floor(idx / 20));
                      setShowPaletteModal(false);
                    }}
                    className={`h-10 rounded-xl font-mono text-xs font-bold transition-all relative flex items-center justify-center border ${
                      isCurrent
                        ? 'bg-rose-500 text-white border-rose-300 ring-2 ring-rose-500/50 shadow-lg scale-105'
                        : isAnswered
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-750 hover:text-white'
                    }`}
                    title={`Câu ${idx + 1}: ${q.domainName}`}
                  >
                    <span>{idx + 1}</span>
                    {isBookmarked && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-slate-900 flex items-center justify-center text-[7px] text-slate-950 font-bold">★</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend Indicators & Action */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-emerald-500/20 border border-emerald-500/40 shrink-0"></span>
                  <span>Đã chọn ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-slate-800 border border-slate-700 shrink-0"></span>
                  <span>Chưa chọn ({questions.length - answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></span>
                  <span>Cắm cờ ({bookmarkedIds.length})</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowPaletteModal(false);
                  handleSubmitTest();
                }}
                className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow-lg transition-colors flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Nộp bài ngay</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
