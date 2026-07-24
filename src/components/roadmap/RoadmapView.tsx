import React, { useState } from 'react';
import { Target, Calendar, CheckCircle2, BookOpen, Clock, ArrowRight, Sparkles, ChevronRight, BarChart2, ShieldCheck, Download, Award, RotateCcw } from 'lucide-react';

interface RoadmapViewProps {
  onStartDiagnostic: () => void;
  setActiveTab: (tab: string) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ onStartDiagnostic, setActiveTab }) => {
  const [activePlan, setActivePlan] = useState<'60days' | '30days' | 'grade11'>('60days');
  const [targetScoreGoal, setTargetScoreGoal] = useState<number>(850);

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
          day: 'Ngày 1 - 3',
          task: 'Làm bài kiểm tra chẩn đoán 20p Sangsang để lập Bản đồ Radar Năng lực & xác định 3 lỗ hổng kiến thức.',
          category: 'Chẩn đoán'
        },
        {
          day: 'Ngày 4 - 7',
          task: 'Hệ thống lại 50 cặp từ Hán-Việt dễ sai chính tả (chẩn đoán vs chuẩn đoán, xuề xòa, giành giật) + 20 cấu trúc Tiếng Anh đọc hiểu.',
          category: 'Ngôn ngữ'
        },
        {
          day: 'Ngày 8 - 12',
          task: 'Học phương pháp Ma trận Logic 5 đối tượng (Modus Tollens, suy luận mệnh đề phủ định, tổ hợp sắp xếp hàng dọc).',
          category: 'Logic'
        },
        {
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
          day: 'Ngày 16 - 20',
          task: 'Master 4 loại biểu đồ V-ACT: Biểu đồ cột chồng, biểu đồ đường tốc độ tăng trưởng, biểu đồ tròn % và bảng số liệu phức hợp.',
          category: 'Phân tích số liệu'
        },
        {
          day: 'Ngày 21 - 25',
          task: 'Kỹ năng trích xuất dữ liệu thí nghiệm Khoa học (Vật lý đồ thị dao động, Hóa học phản ứng sủi bọt khí CO2, Sinh học di truyền).',
          category: 'Suy luận khoa học'
        },
        {
          day: 'Ngày 26 - 30',
          task: 'Phương pháp đọc nhanh Atlas & Bảng số liệu kinh tế phần Địa lý - Lịch sử Nam Trung Bộ & Tây Nguyên.',
          category: 'Xã hội'
        },
        {
          day: 'Ngày 31 - 35',
          task: 'Tạo thói quen lưu Sổ câu sai (Spaced Repetition) mỗi tối: Đánh dấu nguyên nhân sai (đọc sai đề vs thiếu kiến thức).',
          category: 'Sổ câu sai'
        }
      ]
    },
    {
      phaseNumber: '03',
      title: 'Giai đoạn 3: Luyện Đề Mô Phỏng 150 Phút & Quản Lý Thời Gian',
      timeframe: 'Ngày 36 – Ngày 50 (Tuần 6 - Tuần 7)',
      color: 'border-amber-500 bg-amber-50/40 text-amber-900',
      badgeBg: 'bg-amber-100 text-amber-800',
      objective: 'Áp dụng quy tắc 3 lượt làm bài dưới áp lực đếm ngược 150 phút phòng thi thật.',
      milestones: [
        {
          day: 'Lượt 1 (45 phút đầu)',
          task: 'Giải quyết 100% câu hỏi nhận biết & thông hiểu dễ ăn điểm ở cả 3 phần (Ngôn ngữ, Logic, Khoa học).',
          category: 'Tốc độ'
        },
        {
          day: 'Lượt 2 (60 phút giữa)',
          task: 'Tập trung xử lý các bài toán Phân tích số liệu biểu đồ & đoạn văn đọc hiểu Tiếng Việt/Anh dài.',
          category: 'Tập trung'
        },
        {
          day: 'Lượt 3 (45 phút cuối)',
          task: 'Giải quyết các câu phân hóa cao, soát đáp án tô nháp và kiểm tra các câu đã cắm cờ xem lại.',
          category: 'Bứt phá'
        },
        {
          day: 'Sau khi nộp đề',
          task: 'Phân tích chi tiết 100% lời giải A, B, C, D để rút kinh nghiệm tư duy.',
          category: 'Rút kinh nghiệm'
        }
      ]
    },
    {
      phaseNumber: '04',
      title: 'Giai đoạn 4: Tối Ưu Sổ Câu Sai & Tâm Lý Phòng Thi',
      timeframe: 'Ngày 51 – Ngày 60 (10 ngày cuối)',
      color: 'border-purple-500 bg-purple-50/40 text-purple-900',
      badgeBg: 'bg-purple-100 text-purple-800',
      objective: 'Giữ vững phong độ, rà soát 100% câu sai cũ, chuẩn bị tinh thần và dụng cụ thi.',
      milestones: [
        {
          day: 'Ngày 51 - 55',
          task: 'Mở Sổ câu sai Sangsang rà soát lặp lại toàn bộ các câu từng làm sai trong 50 ngày qua.',
          category: 'Spaced Repetition'
        },
        {
          day: 'Ngày 56 - 58',
          task: 'Làm 1 đề thi thử nhẹ nhàng ở khung giờ thi thật (8h00 sáng) để tạo nhịp sinh học.',
          category: 'Nhịp sinh học'
        },
        {
          day: 'Ngày 59 - 60',
          task: 'Nghỉ ngơi thả lỏng, kiểm tra giấy tờ tùy thân, Căn cước công dân và máy tính bỏ túi.',
          category: 'Sẵn sàng'
        }
      ]
    }
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl space-y-4 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Khung Lộ Trình Ôn Thi V-ACT Chuẩn Sangsang 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Lộ Trình Cá Nhân Hóa Chuẩn Cho Thí Sinh V-ACT
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dựa trên ma trận 120 câu hỏi V-ACT ĐHQG TP.HCM. Học sinh có thể tham khảo áp dụng theo từng mốc thời gian để tối ưu hiệu quả ôn luyện.
            </p>
          </div>

          <button
            onClick={onStartDiagnostic}
            className="px-6 py-4 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-rose-500/30 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Kiểm tra năng lực lập lộ trình riêng</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Target Score Allocation Calculator Widget */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-rose-500" />
                <span>Bảng Phân Bổ Mục Tiêu Số Câu Đúng Tham Khảo</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Chọn mục tiêu điểm của bạn để xem phân bổ số câu cần làm đúng ở từng phần</p>
            </div>

            {/* Target Score Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {[650, 750, 850, 950].map(score => (
                <button
                  key={score}
                  onClick={() => setTargetScoreGoal(score)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    targetScoreGoal === score
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  Mục tiêu {score}+
                </button>
              ))}
            </div>
          </div>

          {/* Allocation Score Metric Cards */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-700">
              Chi tiết mục tiêu: <span className="text-rose-600 font-extrabold">{scoreBreakdown.targetLabel}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-1">
                <div className="text-[11px] font-bold text-blue-700">Tiếng Việt (20 câu)</div>
                <div className="text-2xl font-black text-blue-900">{scoreBreakdown.tv} <span className="text-xs font-normal text-slate-500">câu đúng</span></div>
                <div className="text-[10px] text-blue-600 font-semibold">Đạt {Math.round((scoreBreakdown.tv/20)*100)}%</div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-center space-y-1">
                <div className="text-[11px] font-bold text-indigo-700">Tiếng Anh (20 câu)</div>
                <div className="text-2xl font-black text-indigo-900">{scoreBreakdown.ta} <span className="text-xs font-normal text-slate-500">câu đúng</span></div>
                <div className="text-[10px] text-indigo-600 font-semibold">Đạt {Math.round((scoreBreakdown.ta/20)*100)}%</div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                <div className="text-[11px] font-bold text-emerald-700">Toán học (10 câu)</div>
                <div className="text-2xl font-black text-emerald-900">{scoreBreakdown.th} <span className="text-xs font-normal text-slate-500">câu đúng</span></div>
                <div className="text-[10px] text-emerald-600 font-semibold">Đạt {Math.round((scoreBreakdown.th/10)*100)}%</div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-1">
                <div className="text-[11px] font-bold text-purple-700">Logic (10 câu)</div>
                <div className="text-2xl font-black text-purple-900">{scoreBreakdown.lg} <span className="text-xs font-normal text-slate-500">câu đúng</span></div>
                <div className="text-[10px] text-purple-600 font-semibold">Đạt {Math.round((scoreBreakdown.lg/10)*100)}%</div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center space-y-1">
                <div className="text-[11px] font-bold text-rose-700">Số liệu (10 câu)</div>
                <div className="text-2xl font-black text-rose-900">{scoreBreakdown.sl} <span className="text-xs font-normal text-slate-500">câu đúng</span></div>
                <div className="text-[10px] text-rose-600 font-semibold">Đạt {Math.round((scoreBreakdown.sl/10)*100)}%</div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-1">
                <div className="text-[11px] font-bold text-teal-700">Khoa học (50 câu)</div>
                <div className="text-2xl font-black text-teal-900">{scoreBreakdown.kh} <span className="text-xs font-normal text-slate-500">câu đúng</span></div>
                <div className="text-[10px] text-teal-600 font-semibold">Đạt {Math.round((scoreBreakdown.kh/50)*100)}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Phases Timeline Roadmap Details */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span>Lộ Trình Ôn Thi 4 Giai Đoạn Chi Tiết (60 Ngày)</span>
            </h2>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActivePlan('60days')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold ${activePlan === '60days' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700'}`}
              >
                60 Ngày chuẩn
              </button>
              <button
                onClick={() => setActivePlan('30days')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold ${activePlan === '30days' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700'}`}
              >
                30 Ngày cấp tốc
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {phases.map((phase, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-8 border-2 ${phase.color} shadow-sm space-y-6 transition-all hover:shadow-md`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-rose-600">{phase.phaseNumber}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{phase.title}</h3>
                      <p className="text-xs text-slate-500">{phase.timeframe}</p>
                    </div>
                  </div>

                  <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${phase.badgeBg}`}>
                    {phase.objective.slice(0, 45)}...
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <strong>Mục tiêu cốt lõi:</strong> {phase.objective}
                </p>

                {/* Milestones Checklist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.milestones.map((m, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 bg-white border border-slate-200 px-2.5 py-0.5 rounded-lg">
                          {m.day}
                        </span>
                        <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                          {m.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {m.task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action card */}
        <div className="bg-gradient-to-r from-rose-600 to-rose-500 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold">Bạn Đã Sẵn Sàng Bắt Đầu Lộ Trình Của Riêng Mình?</h3>
            <p className="text-xs sm:text-sm text-rose-100">
              Làm bài chẩn đoán 20 phút ngay bây giờ để Sangsang tự động lập bản đồ năng lực & lịch học 15 phút mỗi ngày cho bạn.
            </p>
          </div>

          <button
            onClick={onStartDiagnostic}
            className="px-8 py-4 bg-white text-rose-600 hover:bg-rose-50 font-extrabold text-sm rounded-2xl shadow-lg shrink-0 transition-all flex items-center gap-2"
          >
            <span>Bắt đầu Chẩn đoán miễn phí</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
