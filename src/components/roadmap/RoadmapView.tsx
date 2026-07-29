import React, { useState } from 'react';
import { Target, Calendar, CheckCircle2, BookOpen, Clock, ArrowRight, Sparkles, ChevronRight, BarChart2, ShieldCheck, Download, Award, RotateCcw, Check, Printer } from 'lucide-react';

interface RoadmapViewProps {
  onStartDiagnostic: () => void;
  setActiveTab: (tab: string) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ onStartDiagnostic, setActiveTab }) => {
  const [activePlan, setActivePlan] = useState<'60days' | '30days' | 'grade11'>('60days');
  const [targetScoreGoal, setTargetScoreGoal] = useState<number>(850);
  const [completedMilestones, setCompletedMilestones] = useState<string[]>(['m-1-1', 'm-1-2']);

  // Target score allocation breakdown
  const scoreBreakdown = {
    650: { tv: 14, ta: 13, th: 6, lg: 6, sl: 5, kh: 30, targetLabel: '650+ (Mức Khá)' },
    750: { tv: 16, ta: 15, th: 7, lg: 7, sl: 7, kh: 36, targetLabel: '750+ (Mức Giỏi - ĐH UEL, USSH)' },
    850: { tv: 18, ta: 17, th: 8, lg: 8, sl: 8, kh: 42, targetLabel: '850+ (Xuất sắc - ĐH Bách Khoa, UIT, UEH)' },
    950: { tv: 19, ta: 19, th: 9, lg: 9, sl: 9, kh: 46, targetLabel: '950+ (Top 1% - Học bổng & Ngành HOT)' },
  }[targetScoreGoal as 650 | 750 | 850 | 950] || { tv: 18, ta: 17, th: 8, lg: 8, sl: 8, kh: 42, targetLabel: '850+' };

  const phases = [
    {
      phaseNumber: '01',
      title: 'Giai đoạn 1: Chẩn đoán & Xây Nền Tảng Khung',
      timeframe: 'Ngày 1 – Ngày 15 (Tuần 1 - Tuần 2)',
      color: 'border-blue-500 bg-blue-50/40 text-blue-900',
      badgeBg: 'bg-blue-100 text-blue-800',
      objective: 'Nắm trắc ma trận 120 câu hỏi V-ACT 2026, loại bỏ sai lầm chính tả Tiếng Việt và nắm vững quy tắc suy luận Logic.',
      milestones: [
        {
          id: 'm-1-1',
          day: 'Ngày 1 - 3',
          task: 'Làm bài kiểm tra chẩn đoán 20p Sangsang để lập Bản đồ Radar Năng lực & xác định 3 lỗ hổng kiến thức.',
          category: 'Chẩn đoán',
          actionBtn: { label: 'Bắt đầu Thi Chẩn Đoán', onClick: onStartDiagnostic }
        },
        {
          id: 'm-1-2',
          day: 'Ngày 4 - 7',
          task: 'Hệ thống lại 50 cặp từ Hán-Việt dễ sai chính tả (chẩn đoán vs chuẩn đoán, xuề xòa, giành giật) + 20 cấu trúc Tiếng Anh đọc hiểu.',
          category: 'Ngôn ngữ'
        },
        {
          id: 'm-1-3',
          day: 'Ngày 8 - 12',
          task: 'Học phương pháp Ma trận Logic 5 đối tượng (Modus Tollens, suy luận mệnh đề phủ định, tổ hợp sắp xếp hàng dọc).',
          category: 'Logic'
        },
        {
          id: 'm-1-4',
          day: 'Ngày 13 - 15',
          task: 'Ôn tập công thức Toán ứng dụng thực tế (Lãi kép, tỷ lệ tăng trưởng phần trăm, cực đại cực tiểu hàm số).',
          category: 'Toán học'
        }
      ]
    },
    {
      phaseNumber: '02',
      title: 'Giai đoạn 2: Khắc Phục Lỗ Hổng & Đọc Số Liệu Nhanh',
      timeframe: 'Ngày 16 – Ngày 35 (Tuần 3 - Tuần 5)',
      color: 'border-emerald-500 bg-emerald-50/40 text-emerald-900',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      objective: 'Bứt phá trọn điểm phần Phân tích số liệu (biểu đồ) và rèn luyện kỹ năng trích xuất dữ liệu bài báo khoa học.',
      milestones: [
        {
          id: 'm-2-1',
          day: 'Ngày 16 - 20',
          task: 'Master 4 loại biểu đồ V-ACT: Biểu đồ cột chồng, biểu đồ đường tốc độ tăng trưởng, biểu đồ tròn % và bảng số liệu phức hợp.',
          category: 'Phân tích số liệu'
        },
        {
          id: 'm-2-2',
          day: 'Ngày 21 - 25',
          task: 'Kỹ năng trích xuất dữ liệu thí nghiệm Khoa học (Vật lý đồ thị dao động, Hóa học phản ứng sủi bọt khí CO2, Sinh học di truyền).',
          category: 'Suy luận khoa học'
        },
        {
          id: 'm-2-3',
          day: 'Ngày 26 - 30',
          task: 'Phương pháp đọc nhanh Atlas & Bảng số liệu kinh tế phần Địa lý - Lịch sử Nam Trung Bộ & Tây Nguyên.',
          category: 'Xã hội'
        },
        {
          id: 'm-2-4',
          day: 'Ngày 31 - 35',
          task: 'Tạo thói quen lưu Sổ câu sai (Spaced Repetition) mỗi tối: Đánh dấu nguyên nhân sai (đọc sai đề vs thiếu kiến thức).',
          category: 'Sổ câu sai',
          actionBtn: { label: 'Xem Sổ Câu Sai', onClick: () => setActiveTab('wrong-notebook') }
        }
      ]
    },
    {
      phaseNumber: '03',
      title: 'Giai đoạn 3: Luyện Đề Mô Phỏng & Tối Ưu Tốc Độ',
      timeframe: 'Ngày 36 – Ngày 50 (Tuần 6 - Tuần 7)',
      color: 'border-amber-500 bg-amber-50/40 text-amber-900',
      badgeBg: 'bg-amber-100 text-amber-800',
      objective: 'Rèn áp lực thời gian 150 phút, phân bổ nhịp làm bài (75s/câu) và áp dụng chiến thuật bỏ qua câu quá khó.',
      milestones: [
        {
          id: 'm-3-1',
          day: 'Ngày 36 - 40',
          task: 'Giải 3 Đề mô phỏng chuẩn ma trận ĐHQG TP.HCM (Thi đúng khung giờ 8h30 - 11h00 sáng Chủ Nhật).',
          category: 'Thi thử 150 phút',
          actionBtn: { label: 'Vào Phòng Thi Thử', onClick: () => setActiveTab('mock-exam') }
        },
        {
          id: 'm-3-2',
          day: 'Ngày 41 - 45',
          task: 'Phân tích báo cáo chi tiết sau thi: Xác định chính xác tỷ lệ đúng theo từng phân môn (Tiếng Việt > 80%, Logic > 75%).',
          category: 'Báo cáo chi tiết'
        },
        {
          id: 'm-3-3',
          day: 'Ngày 46 - 50',
          task: 'Chiến thuật Phân bổ thời gian 3 vòng: Vòng 1 (45p - 60 câu dễ), Vòng 2 (60p - 40 câu trung bình), Vòng 3 (45p - 20 câu vận dụng cao).',
          category: 'Chiến thuật'
        }
      ]
    },
    {
      phaseNumber: '04',
      title: 'Giai đoạn 4: Tổng Ôn Điểm Rơi & Chuẩn Bị Tâm Lý',
      timeframe: 'Ngày 51 – Ngày 60 (Tuần 8)',
      color: 'border-purple-500 bg-purple-50/40 text-purple-900',
      badgeBg: 'bg-purple-100 text-purple-800',
      objective: 'Rà soát lại toàn bộ Sổ câu sai, chuẩn bị đầy đủ Căn cước công dân, Giấy báo dự thi và tâm lý tự tin nhất.',
      milestones: [
        {
          id: 'm-4-1',
          day: 'Ngày 51 - 55',
          task: 'Ôn lại toàn bộ 100 câu sai đã tích lũy trong Sổ câu sai Sangsang. Không giải thêm đề mới gây quá tải.',
          category: 'Rà soát tổng hợp'
        },
        {
          id: 'm-4-2',
          day: 'Ngày 56 - 58',
          task: 'Đối soát lại bảng điểm chuẩn các trường nguyện vọng mục tiêu (ĐH Bách Khoa, UIT, UEL, UEH, SGU) bằng công cụ Tra cứu.',
          category: 'Tra cứu nguyện vọng',
          actionBtn: { label: 'Tra Cứu Trường', onClick: () => setActiveTab('university-lookup') }
        },
        {
          id: 'm-4-3',
          day: 'Ngày 59 - 60',
          task: 'Nghỉ ngơi thả lỏng, kiểm tra thẻ dự thi + CCCD gốc, bút chì 2B, tẩy và bình nước uống mang vào phòng thi.',
          category: 'Sẵn sàng đi thi'
        }
      ]
    }
  ];

  const totalMilestonesCount = phases.reduce((acc, p) => acc + p.milestones.length, 0);
  const completedCount = completedMilestones.length;
  const overallProgress = Math.round((completedCount / totalMilestonesCount) * 100);

  const toggleMilestone = (id: string) => {
    setCompletedMilestones(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title Header */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-300 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Lộ Trình Cá Nhân Hóa Chuẩn V-ACT 2026</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Lộ Trình Ôn Thi Theo Mục Tiêu Điểm
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Xây dựng chi tiết các giai đoạn ôn luyện ngắt quãng (Spaced Repetition) giúp thí sinh bứt phá tối đa từ mức năng lực hiện tại lên điểm số mục tiêu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-2xl text-xs font-black border border-slate-700 shadow-sm flex items-center gap-2 transition-all"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Xuất PDF Lịch Học</span>
            </button>

            <button
              onClick={onStartDiagnostic}
              className="px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-xs font-black shadow-lg shadow-rose-600/30 flex items-center gap-2 transition-all"
            >
              <Target className="w-4 h-4" />
              <span>Thi Chẩn Đoán Ngay</span>
            </button>
          </div>
        </div>

        {/* Overall Progress & Target Allocation Gauge */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Target Score Selector & Allocation */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-rose-600" />
                <h3 className="text-sm font-black text-slate-900">Mục Tiêu Điểm V-ACT Của Bạn:</h3>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200">
                {[650, 750, 850, 950].map((score) => (
                  <button
                    key={score}
                    onClick={() => setTargetScoreGoal(score)}
                    className={`px-3 py-1 rounded-xl text-xs font-mono font-black transition-all ${
                      targetScoreGoal === score
                        ? 'bg-rose-600 text-white shadow-sm scale-105'
                        : 'text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {score}đ
                  </button>
                ))}
              </div>
            </div>

            {/* Allocation Table / Badge List */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-500 flex justify-between">
                <span>Phân bổ số câu cần làm đúng (Mục tiêu {scoreBreakdown.targetLabel}):</span>
                <span className="text-rose-600 font-mono font-black">
                  {scoreBreakdown.tv + scoreBreakdown.ta + scoreBreakdown.th + scoreBreakdown.lg + scoreBreakdown.sl + scoreBreakdown.kh} / 120 câu
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs pt-1">
                <div className="bg-blue-50 border border-blue-200 p-2.5 rounded-2xl">
                  <div className="text-[10px] text-blue-700 font-black">Tiếng Việt</div>
                  <strong className="text-slate-900 font-mono text-sm font-black">{scoreBreakdown.tv}/30</strong>
                </div>
                <div className="bg-sky-50 border border-sky-200 p-2.5 rounded-2xl">
                  <div className="text-[10px] text-sky-700 font-black">Tiếng Anh</div>
                  <strong className="text-slate-900 font-mono text-sm font-black">{scoreBreakdown.ta}/30</strong>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-2xl">
                  <div className="text-[10px] text-emerald-700 font-black">Toán Học</div>
                  <strong className="text-slate-900 font-mono text-sm font-black">{scoreBreakdown.th}/10</strong>
                </div>
                <div className="bg-purple-50 border border-purple-200 p-2.5 rounded-2xl">
                  <div className="text-[10px] text-purple-700 font-black">Logic</div>
                  <strong className="text-slate-900 font-mono text-sm font-black">{scoreBreakdown.lg}/10</strong>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-2xl">
                  <div className="text-[10px] text-amber-800 font-black">Số Liệu</div>
                  <strong className="text-slate-900 font-mono text-sm font-black">{scoreBreakdown.sl}/10</strong>
                </div>
                <div className="bg-rose-50 border border-rose-200 p-2.5 rounded-2xl">
                  <div className="text-[10px] text-rose-700 font-black">Khoa Học</div>
                  <strong className="text-slate-900 font-mono text-sm font-black">{scoreBreakdown.kh}/30</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Overall Roadmap Progress Counter */}
          <div className="md:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black uppercase text-slate-500 tracking-wider">TIẾN ĐỘ HOÀN THÀNH LỘ TRÌNH</h3>
              <span className="text-rose-600 font-mono font-black text-lg">{overallProgress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-rose-500 to-amber-500 h-full transition-all duration-300"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-bold text-slate-500">
                <span>Đã đánh dấu: {completedCount}/{totalMilestonesCount} mốc học tập</span>
                <span className="text-emerald-700 font-black">+{completedCount * 50} XP tích lũy</span>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs text-slate-600 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Bấm vào dấu tích ô vuông ở từng mốc để đánh dấu tiến độ thực hiện!</span>
            </div>
          </div>

        </div>

        {/* Timeline Phases */}
        <div className="space-y-6">
          {phases.map((phase) => {
            const phaseMilestoneIds = phase.milestones.map(m => m.id);
            const phaseCompletedCount = phaseMilestoneIds.filter(id => completedMilestones.includes(id)).length;
            const isPhaseDone = phaseCompletedCount === phaseMilestoneIds.length;

            return (
              <div 
                key={phase.phaseNumber} 
                className={`bg-white rounded-3xl border-2 p-6 sm:p-7 shadow-md space-y-5 transition-all ${
                  isPhaseDone ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200'
                }`}
              >
                {/* Phase Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black px-3 py-1 rounded-full ${phase.badgeBg}`}>
                        {phase.timeframe}
                      </span>
                      {isPhaseDone && (
                        <span className="text-xs font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" />
                          <span>Đã hoàn thành Chặng {phase.phaseNumber}</span>
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900">
                      {phase.title}
                    </h2>
                  </div>

                  <div className="text-xs font-bold text-slate-500">
                    Tiến độ chặng: <strong className="text-slate-900 font-mono font-black">{phaseCompletedCount}/{phaseMilestoneIds.length} mốc</strong>
                  </div>
                </div>

                {/* Phase Objective */}
                <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200 font-medium leading-relaxed">
                  🎯 <strong>Mục tiêu chặng:</strong> {phase.objective}
                </p>

                {/* Milestones List */}
                <div className="space-y-3">
                  {phase.milestones.map((m) => {
                    const isChecked = completedMilestones.includes(m.id);
                    return (
                      <div
                        key={m.id}
                        className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          isChecked 
                            ? 'bg-emerald-50/60 border-emerald-200 text-slate-800' 
                            : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-900'
                        }`}
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <button
                            onClick={() => toggleMilestone(m.id)}
                            className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border mt-0.5 transition-all ${
                              isChecked
                                ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                                : 'bg-white border-slate-300 hover:border-rose-500'
                            }`}
                            title={isChecked ? 'Đánh dấu chưa hoàn thành' : 'Đánh dấu đã hoàn thành mốc này'}
                          >
                            {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                          </button>

                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-black text-rose-600 font-mono bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                                {m.day}
                              </span>
                              <span className="text-[10px] font-bold text-slate-500 uppercase bg-slate-200/80 px-2 py-0.5 rounded">
                                {m.category}
                              </span>
                            </div>
                            <p className={`text-xs sm:text-sm font-bold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                              {m.task}
                            </p>
                          </div>
                        </div>

                        {/* Optional Action Button */}
                        {m.actionBtn && (
                          <button
                            onClick={m.actionBtn.onClick}
                            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-xl shadow-md transition-all shrink-0 flex items-center justify-center gap-1.5 self-start sm:self-auto"
                          >
                            <span>{m.actionBtn.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
