import React from 'react';
import { ClipboardCheck, Radar, CalendarCheck, ArrowRight } from 'lucide-react';

export const ThreeStepsSection: React.FC<{ onOpenDiagnostic: () => void }> = ({ onOpenDiagnostic }) => {
  const steps = [
    {
      number: '01',
      icon: ClipboardCheck,
      title: 'Bước 1: Chẩn đoán năng lực 20p',
      desc: 'Làm bài kiểm tra ngắn 20 câu bao quát 6 miền kiến thức V-ACT mà không cần ôn tập trước.',
      badge: '15-20 Phút'
    },
    {
      number: '02',
      icon: Radar,
      title: 'Bước 2: Nhận Bản đồ Năng lực',
      desc: 'Xem biểu đồ Radar trực quan, ước tính khoảng điểm hiện tại và vị trí điểm yếu cần khắc phục.',
      badge: 'Nhận kết quả ngay'
    },
    {
      number: '03',
      icon: CalendarCheck,
      title: 'Bước 3: Học theo Lộ trình 15p/ngày',
      desc: 'Hệ thống tự động giao nhiệm vụ học và đề xuất bài luyện vừa sức theo số ngày còn lại đến kỳ thi.',
      badge: 'Cá nhân hóa 100%'
    }
  ];

  return (
    <section id="three-steps-section" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-2">Phương pháp học Sangsang</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ba bước để học đúng trọng tâm – Không lãng phí thời gian
          </h3>
          <p className="text-slate-600 mt-3 text-base">
            Thay vì giải đề tràn lan, Sangsang tập trung khắc phục chính xác điểm yếu của từng học sinh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-rose-300 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-rose-600/30">{step.number}</span>
                  <span className="text-xs font-bold bg-rose-100 text-rose-800 px-3 py-1 rounded-full">
                    {step.badge}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-rose-500/20">
                  <Icon className="w-6 h-6" />
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenDiagnostic}
            className="px-8 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-rose-500/25 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <span>Bắt đầu Bước 1: Kiểm tra miễn phí ngay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
