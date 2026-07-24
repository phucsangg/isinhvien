import React from 'react';
import { HelpCircle, TrendingDown, Clock, Search, ArrowRight } from 'lucide-react';

interface PainPointsSectionProps {
  onOpenDiagnostic: () => void;
  setActiveTab: (tab: string) => void;
  onOpenExamLibrary?: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onOpenDiagnostic, setActiveTab, onOpenExamLibrary }) => {
  const cards = [
    {
      id: 1,
      icon: HelpCircle,
      title: 'Không biết bắt đầu từ đâu?',
      problem: 'Hoang mang trước cấu trúc 120 câu gồm cả Tự nhiên, Xã hội, Logic và Ngôn ngữ.',
      solution: 'Chẩn đoán 20 phút xây ngay lộ trình ưu tiên.',
      cta: 'Làm bài chẩn đoán',
      action: onOpenDiagnostic,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 2,
      icon: TrendingDown,
      title: 'Làm nhiều đề nhưng điểm không tăng?',
      problem: 'Giải hàng chục đề nhưng tiếp tục lặp lại các lỗi sai cũ mà không hiểu nguyên nhân tư duy.',
      solution: 'Tự động lưu Sổ câu sai & phân loại nguyên nhân.',
      cta: 'Khám phá Sổ câu sai',
      action: () => setActiveTab('wrong-notebook'),
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 3,
      icon: Clock,
      title: 'Thường xuyên thiếu thời gian?',
      problem: 'Mất quá nhiều thời gian cho các bài toán phân tích số liệu hoặc đoạn văn Tiếng Việt dài.',
      solution: 'Luyện tốc độ với đồng hồ canh giờ & mẹo phản xạ.',
      cta: 'Vào phòng luyện tập',
      action: () => (onOpenExamLibrary ? onOpenExamLibrary() : onOpenDiagnostic()),
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 4,
      icon: Search,
      title: 'Không biết phần nào đang yếu?',
      problem: 'Không đo lường được tỷ lệ đúng/sai theo từng nhóm kỹ năng nhỏ để tập trung ôn.',
      solution: 'Bản đồ Radar phân tích lỗ hổng kiến thức 6 nhóm.',
      cta: 'Phân tích lỗ hổng của tôi',
      action: onOpenDiagnostic,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Định vị vấn đề</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bạn đang gặp chướng ngại nào trong kỳ thi V-ACT?
          </h3>
          <p className="text-slate-600 mt-3 text-base">
            Mỗi khó khăn của bạn đều có giải pháp cá nhân hóa tương ứng tại V-ACT Mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id} 
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{card.problem}</p>
                  
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Giải pháp V-ACT Mind</div>
                    <div className="text-xs font-semibold text-slate-800">{card.solution}</div>
                  </div>
                </div>

                <button
                  onClick={card.action}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
