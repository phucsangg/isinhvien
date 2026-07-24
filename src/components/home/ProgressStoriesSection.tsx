import React, { useState } from 'react';
import { Award, TrendingUp, CheckCircle, Quote, Sparkles } from 'lucide-react';

export const ProgressStoriesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mat-goc' | 'target-800' | 'target-900' | 'tang-toc'>('all');

  const stories = [
    {
      id: 1,
      name: 'Nguyễn Văn Minh (Lớp 12 - THPT Chuyên Nguyễn Hữu Huân)',
      filterTag: 'target-900',
      tagLabel: 'Mục tiêu 900+',
      inputScore: 650,
      outputScore: 925,
      growth: '+275 điểm',
      duration: '60 ngày',
      initialProblem: 'Yếu phần Phân tích số liệu và thiếu chiến thuật quản lý thời gian 150 phút.',
      roadmap: 'Tập trung giải 15 bài biểu đồ/ngày + 10 đề thi thử mô phỏng có đếm ngược.',
      comment: 'Bản đồ Radar của V-ACT Mind chỉ ra chính xác mình hay sai vì đọc sai đơn vị % biểu đồ. Nhờ sửa đúng điểm đó mà mình tự tin bứt phá mốc 900+.',
      university: 'Đã trúng tuyển: Khoa học Máy tính - ĐH Bách Khoa TP.HCM'
    },
    {
      id: 2,
      name: 'Lê Thảo My (Lớp 12 - THPT Gia Định)',
      filterTag: 'mat-goc',
      tagLabel: 'Mất gốc tự nhiên',
      inputScore: 520,
      outputScore: 780,
      growth: '+260 điểm',
      duration: '45 ngày',
      initialProblem: 'Mất gốc kiến thức Lý - Hóa - Sinh, hay bị ngợp khi đọc các đoạn văn dài phần Khoa học.',
      roadmap: 'Học lộ trình micro-learning 15p/ngày + dùng Sổ câu sai để ôn lặp lại ngắt quãng.',
      comment: 'Website không bắt học tràn lan mà hướng dẫn mình tập trung đúng 20 câu Tiếng Việt và 10 câu Logic để lấy trọn điểm.',
      university: 'Đã trúng tuyển: Truyền thông Đa phương tiện - ĐH KHXH&NV'
    },
    {
      id: 3,
      name: 'Phạm Đức Anh (Lớp 12 - THPT Nguyễn Thị Minh Khai)',
      filterTag: 'tang-toc',
      tagLabel: 'Tăng tốc 30 ngày',
      inputScore: 710,
      outputScore: 865,
      growth: '+155 điểm',
      duration: '30 ngày',
      initialProblem: 'Điểm số giậm chân tại chỗ ở mức 700 do làm sai những câu dễ vì chủ quan.',
      roadmap: 'Hệ thống cảnh báo loại bẫy thường gặp + rà soát Sổ câu sai mỗi tối.',
      comment: 'Rất ấn tượng với giao diện thi thử mô phỏng giống 100% phòng thi thật, giúp mình hết bị áp lực tâm lý.',
      university: 'Đã trúng tuyển: Tài chính - Ngân hàng - ĐH Kinh tế - Luật'
    }
  ];

  const filteredStories = activeFilter === 'all' 
    ? stories 
    : stories.filter(s => s.filterTag === activeFilter);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Hành trình học viên</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Câu Chuyện Bứt Phá Điểm Số Thực Tế
          </h3>
          <p className="text-slate-600 mt-3 text-base">
            Mỗi học sinh có một điểm xuất phát và hành trình tiến bộ bằng dữ liệu minh bạch.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Tất cả câu chuyện' },
            { id: 'mat-goc', label: 'Mất gốc tự nhiên' },
            { id: 'target-800', label: 'Mục tiêu 800+' },
            { id: 'target-900', label: 'Mục tiêu 900+' },
            { id: 'tang-toc', label: 'Tăng tốc 30 ngày' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === f.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredStories.map(story => (
            <div 
              key={story.id} 
              className="bg-slate-50 rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {story.tagLabel}
                  </span>
                  <div className="flex items-center gap-1 text-emerald-600 font-extrabold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{story.growth}</span>
                  </div>
                </div>

                {/* Score Journey Banner */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-5 flex items-center justify-around text-center">
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Đầu vào</div>
                    <div className="text-xl font-black text-slate-700">{story.inputScore}</div>
                  </div>
                  <div className="text-slate-300 font-bold">→</div>
                  <div>
                    <div className="text-[10px] text-emerald-600 font-bold uppercase">Đạt được</div>
                    <div className="text-2xl font-black text-emerald-600">{story.outputScore}</div>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{story.duration}</div>
                </div>

                <h4 className="font-bold text-slate-900 text-base mb-3">{story.name}</h4>

                <div className="space-y-3 text-xs mb-5">
                  <div className="p-3 bg-white rounded-xl border border-slate-100">
                    <strong className="text-slate-900 block mb-1">Khó khăn ban đầu:</strong>
                    <span className="text-slate-600">{story.initialProblem}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100">
                    <strong className="text-slate-900 block mb-1">Lộ trình áp dụng:</strong>
                    <span className="text-slate-600">{story.roadmap}</span>
                  </div>
                </div>

                <div className="relative pl-4 border-l-2 border-blue-500 italic text-xs text-slate-700 mb-4">
                  <Quote className="w-4 h-4 text-blue-300 absolute -top-2 -left-2 bg-slate-50" />
                  "{story.comment}"
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{story.university}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-400 text-center mt-8 italic">
          * Thông tin học viên tiến bộ mẫu minh họa dựa trên dữ liệu thử nghiệm. Dữ liệu thật sẽ cập nhật khi có sự đồng ý của học viên.
        </p>

      </div>
    </section>
  );
};
