import React from 'react';
import { Users, CheckSquare, Award, Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const metrics = [
    { icon: Users, value: '18.500+', label: 'Học sinh kiểm tra năng lực', sub: 'Lớp 10, 11, 12 & tự do' },
    { icon: CheckSquare, value: '1.200.000+', label: 'Lượt bài luyện hoàn thành', sub: 'Ngân hàng 8.000+ câu chuẩn hóa' },
    { icon: Award, value: '86.4%', label: 'Tỷ lệ cải thiện điểm số', sub: 'Sau 1 chu kỳ 30 ngày' },
    { icon: Star, value: '4.9/5.0', label: 'Mức độ hài lòng học sinh', sub: 'Dựa trên 2.400+ đánh giá' },
  ];

  return (
    <section className="bg-slate-900/90 border-y border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/80">
              <m.icon className="w-6 h-6 text-blue-400 mx-auto mb-2 opacity-90" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{m.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">{m.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{m.sub}</div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-center text-slate-500 mt-6 italic">
          * Số liệu được thống kê từ hệ thống thử nghiệm lâm sàng và kiểm thử mẫu học sinh niên khóa 2025–2026.
        </p>
      </div>
    </section>
  );
};
