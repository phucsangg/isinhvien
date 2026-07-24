import React from 'react';
import { Clock, Bookmark, Edit3, ShieldAlert, Save, Maximize2, CheckCircle2, ChevronRight } from 'lucide-react';

export const ExamSimPreview: React.FC<{ setActiveTab: (tab: string) => void }> = ({ setActiveTab }) => {
  const features = [
    { icon: Clock, title: 'Đồng hồ canh giờ chuẩn 150 phút', desc: 'Có đếm ngược từng phần & cảnh báo khi còn 15 phút.' },
    { icon: Bookmark, title: 'Đánh dấu câu cần xem lại', iconColor: 'text-amber-500', desc: 'Ghi cờ đánh dấu nhanh để quay lại rà soát trước khi nộp.' },
    { icon: Edit3, title: 'Ghi chú & Bảng nháp trực tiếp', iconColor: 'text-blue-500', desc: 'Tích hợp bảng tính nháp nháp ngay cạnh bài đọc.' },
    { icon: Save, title: 'Tự động lưu bài làm', iconColor: 'text-emerald-500', desc: 'Không lo mất kết nối mạng hay lỡ tay đóng trình duyệt.' },
    { icon: ShieldAlert, title: 'Cảnh báo phân bổ thời gian', iconColor: 'text-rose-500', desc: 'Nhắc nhở nếu bạn quá 2 phút cho 1 câu hỏi.' },
    { icon: Maximize2, title: 'Chế độ thi mô phỏng toàn màn hình', iconColor: 'text-indigo-500', desc: 'Tạo áp lực phòng thi thật 100% giúp rèn luyện tâm lý.' }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Trải nghiệm phòng thi thật</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mô Phỏng 100% Giao Diện & Áp Lực Phòng Thi V-ACT
          </h3>
          <p className="text-slate-600 mt-3 text-base">
            Rèn luyện kỹ năng quản lý thời gian và phản xạ chọn đáp án đúng trong điều kiện chuẩn hóa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-4">
                  <Icon className={`w-5 h-5 ${f.iconColor || 'text-blue-600'}`} />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{f.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Callout box to attempt mock exam */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>Giải thích chi tiết 100% lựa chọn A, B, C, D sau khi nộp</span>
            </div>
            <h4 className="text-xl font-bold">Thử sức ngay với 1 Đề Thi Thử Mô Phỏng Miễn Phí</h4>
            <p className="text-xs text-slate-300">Không yêu cầu tài khoản trả phí - Đánh giá phản xạ thời gian thực ngay hôm nay.</p>
          </div>

          <button
            onClick={() => setActiveTab('exam')}
            className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition-all shrink-0 flex items-center gap-2"
          >
            <span>Vào phòng thi thử ngay</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
