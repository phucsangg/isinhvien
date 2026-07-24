import React, { useState, useEffect } from 'react';
import { Modal } from '../common/Modal';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, Award, Clock, Sparkles, BookOpen, RotateCcw, AlertCircle, Quote, ChevronRight, ShieldCheck } from 'lucide-react';
import { DiagnosticQuestion } from '../../types';

interface TaskPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskTitle: string;
  taskCategory: string; // 'tieng_viet' | 'so_lieu' | 'khoa_hoc'
  xpPoints: number;
  durationMinutes: number;
  onCompleteTask: (xp: number) => void;
}

const TASK_QUESTIONS: Record<string, DiagnosticQuestion[]> = {
  tieng_viet: [
    {
      id: 'task-tv-01',
      domain: 'tieng_viet',
      domainName: 'Tiếng Việt & Đọc Hiểu',
      questionText: 'Trong tác phẩm "Việt Bắc" của Tố Hữu, cụm từ "Mình về mình có nhớ ta" thể hiện phong cách nghệ thuật nào nổi bật?',
      passageText: '“Mình về mình có nhớ ta\nMười lăm năm ấy thiết tha mặn nồng.\nMình về mình có nhớ không\nNhìn cây nhớ núi, nhìn sông nhớ nguồn?”',
      options: [
        { id: 'A', text: 'Phong cách thơ trữ tình - chính trị kết hợp xưng hô mình - ta đậm đà tính dân tộc' },
        { id: 'B', text: 'Phong cách thơ hiện đại phương Tây kết hợp hình ảnh tượng trưng' },
        { id: 'C', text: 'Phong cách trào phúng châm biếm kết hợp ẩn dụ' },
        { id: 'D', text: 'Phong cách sử thi hoành tráng miêu tả chiến trường' }
      ],
      correctOptionId: 'A',
      explanation: 'Cách xưng hô "mình - ta" truyền thống trong ca dao dân ca được Tố Hữu vận dụng sáng tạo để biểu đạt tình cảm cách mạng thiết tha, gắn kết tình quân dân Việt Bắc đậm đà bản sắc dân tộc.',
      whyWrong: {
        B: 'Tác phẩm mang tính dân tộc truyền thống, không theo trường phái tượng trưng phương Tây.',
        C: 'Tác phẩm là bài thơ trữ tình tình nghĩa, không có tính trào phúng châm biếm.',
        D: 'Đoạn thơ trên thiên về tình cảm thủy chung nghĩa tình, không phải sử thi chiến trường.'
      },
      difficulty: 'de',
      estimatedTimeSeconds: 60
    },
    {
      id: 'task-tv-02',
      domain: 'tieng_viet',
      domainName: 'Tiếng Việt & Đọc Hiểu',
      questionText: 'Từ "mặn nồng" trong câu "Mười lăm năm ấy thiết tha mặn nồng" thuộc loại từ nào?',
      options: [
        { id: 'A', text: 'Từ ghép chính phụ' },
        { id: 'B', text: 'Từ ghép đẳng lập' },
        { id: 'C', text: 'Từ láy bộ phận' },
        { id: 'D', text: 'Từ đơn đa âm' }
      ],
      correctOptionId: 'B',
      explanation: '"Mặn" và "nồng" đều có nghĩa độc lập bổ sung cho nhau thể hiện tình cảm đậm đà sâu sắc -> Từ ghép đẳng lập.',
      whyWrong: {
        A: 'Không có tiếng chính tiếng phụ phụ thuộc nhau.',
        C: 'Hai tiếng mang ý nghĩa từ vựng độc lập, không phải từ láy thuần túy.',
        D: 'Đây là hai tiếng ghép lại thành một từ phức.'
      },
      difficulty: 'trung_binh',
      estimatedTimeSeconds: 45
    },
    {
      id: 'task-tv-03',
      domain: 'tieng_viet',
      domainName: 'Tiếng Việt & Đọc Hiểu',
      questionText: 'Biện pháp tu từ nào được sử dụng chủ đạo trong hai câu thơ "Nhìn cây nhớ núi, nhìn sông nhớ nguồn"?',
      options: [
        { id: 'A', text: 'Điệp từ (nhìn, nhớ) kết hợp hoán dụ và đạo lý truyền thống "Uống nước nhớ nguồn"' },
        { id: 'B', text: 'So sánh ngang bằng' },
        { id: 'C', text: 'Nói giảm nói tránh' },
        { id: 'D', text: 'Phóng đại cường điệu' }
      ],
      correctOptionId: 'A',
      explanation: 'Phép điệp từ "nhìn... nhớ..." lặp lại cấu trúc nhịp nhàng nhằm nhấn mạnh tình cảm gắn bó với căn cứ địa Việt Bắc và đạo lý tri ân truyền thống.',
      whyWrong: {
        B: 'Không có từ so sánh như/bằng/tày.',
        C: 'Không dùng từ ngữ giảm nhẹ quy mô.',
        D: 'Không có sự thổi phồng quá mức thực tế.'
      },
      difficulty: 'trung_binh',
      estimatedTimeSeconds: 60
    }
  ],

  so_lieu: [
    {
      id: 'task-sl-01',
      domain: 'so_lieu',
      domainName: 'Phân tích Số liệu V-ACT',
      questionText: 'Dựa vào bảng số liệu GDP dưới đây, ngành nào có tốc độ tăng trưởng quy mô tuyệt đối lớn nhất từ năm 2021 đến 2024?',
      passageText: '| Ngành Kinh Tế | Năm 2021 (Tỷ USD) | Năm 2024 (Tỷ USD) |\n|---|---|---|\n| Nông - Lâm - Thủy sản | 40.5 | 48.6 |\n| Công nghiệp - Xây dựng | 135.2 | 175.8 |\n| Dịch vụ | 150.3 | 202.9 |\n| Thuế sản phẩm trừ trợ cấp | 34.0 | 42.7 |',
      options: [
        { id: 'A', text: 'Dịch vụ (+52.6 tỷ USD)' },
        { id: 'B', text: 'Công nghiệp - Xây dựng (+40.6 tỷ USD)' },
        { id: 'C', text: 'Nông - Lâm - Thủy sản (+8.1 tỷ USD)' },
        { id: 'D', text: 'Thuế sản phẩm (+8.7 tỷ USD)' }
      ],
      correctOptionId: 'A',
      explanation: 'Tăng trưởng quy mô tuyệt đối của ngành Dịch vụ = 202.9 - 150.3 = 52.6 tỷ USD, lớn nhất trong 4 ngành.',
      whyWrong: {
        B: 'Công nghiệp tăng 175.8 - 135.2 = 40.6 tỷ USD, thấp hơn Dịch vụ.',
        C: 'Nông nghiệp tăng 48.6 - 40.5 = 8.1 tỷ USD.',
        D: 'Thuế sản phẩm tăng 42.7 - 34.0 = 8.7 tỷ USD.'
      },
      difficulty: 'de',
      estimatedTimeSeconds: 60
    },
    {
      id: 'task-sl-02',
      domain: 'so_lieu',
      domainName: 'Phân tích Số liệu V-ACT',
      questionText: 'Tỷ trọng của ngành Dịch vụ trong tổng GDP năm 2024 xấp xỉ bao nhiêu %?',
      passageText: '| Ngành Kinh Tế | Năm 2021 (Tỷ USD) | Năm 2024 (Tỷ USD) |\n|---|---|---|\n| Nông - Lâm - Thủy sản | 40.5 | 48.6 |\n| Công nghiệp - Xây dựng | 135.2 | 175.8 |\n| Dịch vụ | 150.3 | 202.9 |\n| Thuế sản phẩm trừ trợ cấp | 34.0 | 42.7 |',
      options: [
        { id: 'A', text: '43.2%' },
        { id: 'B', text: '37.4%' },
        { id: 'C', text: '10.3%' },
        { id: 'D', text: '51.5%' }
      ],
      correctOptionId: 'A',
      explanation: 'Tổng GDP 2024 = 48.6 + 175.8 + 202.9 + 42.7 = 470 tỷ USD. Tỷ trọng Dịch vụ = (202.9 / 470) * 100% ≈ 43.17% ≈ 43.2%.',
      whyWrong: {
        B: '37.4% là tỷ trọng của ngành Công nghiệp - Xây dựng.',
        C: '10.3% là tỷ trọng của Nông - Lâm - Thủy sản.',
        D: '51.5% tính sai tổng GDP.'
      },
      difficulty: 'trung_binh',
      estimatedTimeSeconds: 75
    }
  ],

  khoa_hoc: [
    {
      id: 'task-kh-01',
      domain: 'khoa_hoc',
      domainName: 'Khoa học Tự nhiên V-ACT',
      questionText: 'Trong mạch điện xoay chiều RLC nối tiếp có hiện tượng cộng hưởng điện, phát biểu nào sau đây là SAI?',
      options: [
        { id: 'A', text: 'Cường độ dòng điện hiệu dụng trong mạch đạt giá trị nhỏ nhất' },
        { id: 'B', text: 'Cảm kháng bằng dung kháng (ZL = ZC)' },
        { id: 'C', text: 'Dòng điện cùng pha với điện áp hai đầu đoạn mạch (\u03c6 = 0)' },
        { id: 'D', text: 'Tổng trở đoạn mạch đạt giá trị nhỏ nhất (Zmin = R)' }
      ],
      correctOptionId: 'A',
      explanation: 'Khi cộng hưởng điện (ZL = ZC), tổng trở Zmin = R nên cường độ dòng điện hiệu dụng đạt giá trị CỰC ĐẠI (Imax = U/R). Phương án A ghi "nhỏ nhất" là sai.',
      whyWrong: {
        B: 'Đúng, đây là điều kiện cộng hưởng điện.',
        C: 'Đúng, khi ZL = ZC thì độ lệch pha \u03c6 = 0.',
        D: 'Đúng, tổng trở đạt cực tiểu Z = R.'
      },
      difficulty: 'de',
      estimatedTimeSeconds: 60
    },
    {
      id: 'task-kh-02',
      domain: 'khoa_hoc',
      domainName: 'Khoa học Tự nhiên V-ACT',
      questionText: 'Cho phản ứng hóa học: Fe + 2HCl -> FeCl2 + H2. Vai trò của Fe trong phản ứng là gì?',
      options: [
        { id: 'A', text: 'Chất khử (số oxi hóa tăng từ 0 lên +2)' },
        { id: 'B', text: 'Chất oxi hóa (số oxi hóa giảm)' },
        { id: 'C', text: 'Môi trường phản ứng' },
        { id: 'D', text: 'Chất xúc tác không tham gia phản ứng' }
      ],
      correctOptionId: 'A',
      explanation: 'Fe nhường 2 electron (Fe -> Fe2+ + 2e) nên Fe là chất khử (chất bị oxi hóa).',
      whyWrong: {
        B: 'HCl (H+) mới là chất oxi hóa nhận electron.',
        C: 'Dung dịch nước đóng vai trò dung môi môi trường.',
        D: 'Fe là chất tham gia phản ứng trực tiếp.'
      },
      difficulty: 'de',
      estimatedTimeSeconds: 45
    }
  ]
};

const renderFormattedPassage = (content: string) => {
  if (!content) return null;
  const normalizedContent = content.normalize('NFC');

  // Check if content contains markdown table syntax (| col1 | col2 |)
  if (normalizedContent.includes('|') && normalizedContent.includes('\n|')) {
    const lines = normalizedContent.split('\n');
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
        <div className="space-y-3">
          {textBefore.length > 0 && (
            <div className="text-sm font-semibold text-slate-900 whitespace-pre-line leading-relaxed">
              {textBefore.join('\n').trim()}
            </div>
          )}

          <div className="overflow-x-auto my-3 rounded-2xl border border-amber-300/80 bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-amber-500 to-rose-500 text-white font-extrabold">
                  {headerRow.map((col, idx) => (
                    <th key={idx} className={`px-4 py-3 border-r border-white/20 last:border-r-0 uppercase tracking-wider ${idx > 0 ? 'text-center' : 'text-left'}`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {dataRows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-amber-50/30 hover:bg-amber-50/70 transition-colors' : 'bg-white hover:bg-amber-50/70 transition-colors'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className={`px-4 py-3 border-r border-slate-100 last:border-r-0 font-medium ${cIdx > 0 ? 'text-center font-bold text-slate-900' : 'text-left font-semibold text-slate-800'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {textAfter.length > 0 && (
            <div className="text-xs text-slate-600 italic whitespace-pre-line">
              {textAfter.join('\n').trim()}
            </div>
          )}
        </div>
      );
    }
  }

  return (
    <div className="text-sm sm:text-base font-sans font-semibold text-slate-900 whitespace-pre-line leading-relaxed pl-2 border-l-2 border-amber-300/60 tracking-normal">
      {normalizedContent}
    </div>
  );
};

export const TaskPracticeModal: React.FC<TaskPracticeModalProps> = ({
  isOpen,
  onClose,
  taskTitle,
  taskCategory,
  xpPoints,
  durationMinutes,
  onCompleteTask,
}) => {
  const questions = TASK_QUESTIONS[taskCategory] || TASK_QUESTIONS['tieng_viet'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setSelectedOption(null);
      setUserAnswers({});
      setIsSubmitted(false);
      setShowExplanation(false);
    }
  }, [isOpen]);

  const currentQ = questions[currentIndex];
  const activePassage = currentQ.passageText || (questions[0] && questions[0].passageText);

  const handleSelectOption = (optId: string) => {
    if (isSubmitted) return;
    setSelectedOption(optId);
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: optId }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      const nextQId = questions[currentIndex + 1].id;
      setSelectedOption(userAnswers[nextQId] || null);
      setShowExplanation(!!userAnswers[nextQId]);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleFinish = () => {
    onCompleteTask(xpPoints);
    onClose();
  };

  // Calculate score
  const correctCount = questions.filter(q => userAnswers[q.id] === q.correctOptionId).length;
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={taskTitle} maxWidth="max-w-3xl">
      <div className="space-y-6 text-slate-900">
        
        {/* Top Premium Dark Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white p-5 rounded-3xl border border-rose-500/20 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 backdrop-blur-md flex items-center justify-center font-bold shrink-0">
              <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded-md border border-rose-500/30">
                  Nhiệm vụ hàng ngày Sangsang
                </span>
                <span className="text-xs text-slate-400">
                  {currentQ.domainName}
                </span>
              </div>
              <div className="text-base sm:text-lg font-black text-white">{taskTitle}</div>
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Phần thưởng</div>
            <div className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 font-black text-sm rounded-xl inline-flex items-center gap-1 shadow-inner">
              <Award className="w-4 h-4 text-amber-400" />
              <span>+{xpPoints} XP</span>
            </div>
          </div>
        </div>

        {!isSubmitted ? (
          <div className="space-y-6">
            
            {/* Progress & Time Status Bar */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span className="flex items-center gap-2 text-rose-600 font-black">
                  <BookOpen className="w-4 h-4 text-rose-500" />
                  <span>Câu hỏi {currentIndex + 1} / {questions.length}</span>
                </span>

                <span className="flex items-center gap-1.5 text-slate-500">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Khuyến nghị: {durationMinutes} phút</span>
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-rose-500 to-amber-500 h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Passage Text / Data Table */}
            {activePassage && (
              <div className="relative bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-50/70 border-l-4 border-amber-500 p-5 rounded-2xl shadow-sm text-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                  <Quote className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Văn bản trích đọc / Dữ liệu bài tập:</span>
                </div>
                {renderFormattedPassage(activePassage)}
              </div>
            )}

            {/* Question Text Header */}
            <div className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {currentQ.questionText}
            </div>

            {/* Interactive Options Cards */}
            <div className="space-y-3">
              {currentQ.options.map(opt => {
                const isSelected = selectedOption === opt.id;
                const isCorrect = opt.id === currentQ.correctOptionId;

                let cardStyle = 'bg-white border-2 border-slate-100 hover:border-rose-300 hover:bg-rose-50/20 text-slate-800 shadow-sm';
                let badgeStyle = 'bg-slate-100 text-slate-700 font-extrabold';

                if (showExplanation) {
                  if (isCorrect) {
                    cardStyle = 'bg-emerald-50/90 border-2 border-emerald-500 text-emerald-950 font-bold shadow-md';
                    badgeStyle = 'bg-emerald-500 text-white font-black';
                  } else if (isSelected) {
                    cardStyle = 'bg-rose-50/90 border-2 border-rose-400 text-rose-950 font-bold';
                    badgeStyle = 'bg-rose-500 text-white font-black';
                  } else {
                    cardStyle = 'bg-slate-50 border border-slate-200 text-slate-400 opacity-60';
                    badgeStyle = 'bg-slate-200 text-slate-500';
                  }
                } else if (isSelected) {
                  cardStyle = 'bg-rose-50/90 border-2 border-rose-500 text-rose-950 font-bold shadow-md';
                  badgeStyle = 'bg-rose-500 text-white font-black';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={showExplanation}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-4 text-xs sm:text-sm ${cardStyle}`}
                  >
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 transition-transform ${badgeStyle}`}>
                      {opt.id}
                    </span>
                    <span className="pt-1 leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Premium Teacher Explanation Card */}
            {showExplanation && (
              <div className="bg-slate-900 text-white rounded-3xl p-5 border border-slate-800 shadow-xl space-y-3 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <img
                    src="/images/teachers/thay_bui_van_cong.png"
                    alt="Thầy Bùi Văn Công"
                    className="w-10 h-10 rounded-xl object-cover border-2 border-rose-500 shrink-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-rose-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Hướng dẫn giải chi tiết • Thạc sĩ Bùi Văn Công</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Chuyên gia Hàng đầu V-ACT ĐHQG TP.HCM</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium pt-1">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Footer Action Button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextQuestion}
                disabled={!selectedOption}
                className="px-7 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 disabled:opacity-40 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2 active:scale-95"
              >
                <span>{currentIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành bài tập'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Completion Screen */
          <div className="text-center py-8 space-y-6 animate-fadeIn">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-xl border-4 border-emerald-200">
              <Award className="w-12 h-12 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Tuyệt vời! Đã Hoàn Thành</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Bạn đã vượt qua bài tập <strong className="text-slate-900">{taskTitle}</strong>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto bg-slate-50 p-5 rounded-3xl border border-slate-200 shadow-sm">
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Số câu đúng</div>
                <div className="text-2xl font-black text-emerald-600">{correctCount} / {questions.length}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">XP Tích Lũy</div>
                <div className="text-2xl font-black text-amber-500">+{xpPoints} XP</div>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full max-w-sm mx-auto py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              Nhận Phần Thưởng & Quay Về Bảng Điều Khiển
            </button>
          </div>
        )}

      </div>
    </Modal>
  );
};
