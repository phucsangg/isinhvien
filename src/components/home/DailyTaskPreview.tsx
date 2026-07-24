import React from 'react';
import { Calendar, PlayCircle, FileText, CheckCircle2, RotateCcw, Award, ArrowRight } from 'lucide-react';

export const DailyTaskPreview: React.FC<{ setActiveTab: (tab: string) => void }> = ({ setActiveTab }) => {
  const mockTasks = [
    { title: '15 phút đọc hiểu văn bản nghệ thuật Tiếng Việt', category: 'Tiếng Việt', duration: '15 phút', icon: FileText, xp: '+50 XP', status: 'pending' },
    { title: '10 câu phân tích số liệu (Biểu đồ cột & đường)', category: 'Số liệu', duration: '20 phút', icon: Calendar, xp: '+80 XP', status: 'pending' },
    { title: 'Ôn lại 3 câu làm sai hôm qua trong Sổ câu sai', category: 'Sổ câu sai', duration: '15 phút', icon: RotateCcw, xp: '+60 XP', status: 'pending' },
    { title: 'Video chiến thuật giải ma trận Logic trong 45 giây', category: 'Logic', duration: '12 phút', icon: PlayCircle, xp: '+40 XP', status: 'pending' },
    { title: 'Mini Test 15 phút: Suy luận khoa học (Hóa - Lý)', category: 'Khoa học', duration: '15 phút', icon: Award, xp: '+100 XP', status: 'pending' },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
              Trải nghiệm học tập mỗi ngày
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Học hôm nay: Nhỏ gọn, Đúng trọng tâm, Không dàn trải
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Mỗi ngày hệ thống tự động giao 3–5 nhiệm vụ micro-learning kéo dài 15–20 phút. Bạn chỉ cần mở app và hoàn thành mục tiêu ngày mà không lo hoang mang.
            </p>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Tiến độ nhiệm vụ hôm nay</span>
                <span className="text-rose-600 font-bold">0 / 5 Hoàn thành (0%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-amber-400 h-full w-[0%] rounded-full transition-all"></div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('student-dash')}
              className="px-6 py-3.5 bg-slate-900 hover:bg-rose-600 text-white font-bold text-sm rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Vào Dashboard làm nhiệm vụ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column Tasks Card List */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-rose-500" />
                <span className="font-bold text-slate-900 text-base">Nhiệm vụ Ngày 22/07/2026</span>
              </div>
              <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                Chuỗi 7 ngày học liên tiếp
              </span>
            </div>

            <div className="space-y-3">
              {mockTasks.map((t, idx) => {
                const Icon = t.icon;
                const isDone = t.status === 'completed';
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                      isDone
                        ? 'bg-emerald-50/50 border-emerald-200/80 text-slate-700'
                        : 'bg-slate-50 hover:bg-rose-50/40 border-slate-200/80 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isDone ? 'bg-emerald-500 text-white' : 'bg-rose-100 text-rose-600'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>
                      <div className="min-w-0">
                        <div className={`text-xs sm:text-sm font-bold truncate ${isDone ? 'line-through text-slate-500' : ''}`}>
                          {t.title}
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-0.5">
                          <span className="font-medium bg-slate-200/60 text-slate-700 px-2 py-0.5 rounded">{t.category}</span>
                          <span>{t.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-bold text-emerald-600">{t.xp}</span>
                      <button
                        onClick={() => setActiveTab('student-dash')}
                        className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-colors ${
                          isDone
                            ? 'bg-emerald-100 text-emerald-700 cursor-default'
                            : 'bg-rose-500 hover:bg-rose-600 text-white shadow-sm'
                        }`}
                      >
                        {isDone ? 'Đã xong' : 'Thực hiện'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
