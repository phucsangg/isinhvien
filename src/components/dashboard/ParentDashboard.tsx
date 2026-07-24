import React from 'react';
import { UserCheck, Award, TrendingUp, Calendar, Download, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const ParentDashboard: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Góc Giám Sát Phụ Huynh V-ACT Mind</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Báo Cáo Tiến Độ Học Tập Của Học Sinh
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Học sinh: <strong className="text-white">Nguyễn Văn Minh (Lớp 12)</strong> • Mục tiêu: <strong className="text-white">ĐH Bách Khoa TP.HCM (850+)</strong>
            </p>
          </div>

          <button
            onClick={() => alert("Đang khởi tạo file Báo cáo Năng lực PDF cho Phụ huynh...")}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 shrink-0 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Tải Báo cáo Định kỳ (PDF)</span>
          </button>
        </div>

        {/* 4 Summary Cards for Parents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Điểm dự báo V-ACT</div>
            <div className="text-3xl font-black text-blue-600">760 – 790</div>
            <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Tăng +60 điểm sau 30 ngày</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tỷ lệ học chuyên cần</div>
            <div className="text-3xl font-black text-emerald-600">92.8%</div>
            <div className="text-xs text-slate-500 font-semibold">Chuỗi 7 ngày học liên tiếp</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bài luyện hoàn thành</div>
            <div className="text-3xl font-black text-slate-900">42 / 45</div>
            <div className="text-xs text-blue-600 font-semibold">Đạt 93% kế hoạch tuần</div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Đánh giá từ Mentor</div>
            <div className="text-xl font-bold text-slate-800">Cực kỳ tích cực</div>
            <div className="text-xs text-slate-500 font-semibold">Cần cố gắng thêm phần Logic</div>
          </div>
        </div>

        {/* Detailed Feedback & Growth Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Nhận xét chuyên môn từ ThS. Trần Nhật Minh (Mentor)</span>
            </h3>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
              <p>
                "Chào Quý Phụ huynh, em Minh có tinh thần tự giác rất cao. Kỹ năng Đọc hiểu Tiếng Việt và Tiếng Anh của em đã đạt mức 80%+. Điểm sáng nhất tuần qua là em đã giảm tỷ lệ đọc sai đề từ 40% xuống còn 15% nhờ sử dụng Sổ câu sai mỗi tối."
              </p>
              <p className="text-blue-700 font-semibold">
                Đề xuất gia đình: Khuyến khích em dành thêm 15 phút mỗi tối giải các bài tập phân tích số liệu biểu đồ cột.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bảng tiến độ 6 kỹ năng</h4>
              
              {[
                { name: 'Tiếng Việt', score: '82%', status: 'Giỏi', color: 'bg-emerald-500' },
                { name: 'Tiếng Anh', score: '75%', status: 'Tốt', color: 'bg-blue-500' },
                { name: 'Toán học', score: '60%', status: 'Cần cố gắng', color: 'bg-amber-500' },
                { name: 'Tư duy Logic', score: '68%', status: 'Đạt', color: 'bg-blue-500' },
                { name: 'Phân tích số liệu', score: '55%', status: 'Lỗ hổng cần phụ đạo', color: 'bg-rose-500' },
                { name: 'Suy luận khoa học', score: '70%', status: 'Khá', color: 'bg-emerald-500' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 w-36">{item.name}</span>
                  <div className="flex-1 mx-4 bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: item.score }}></div>
                  </div>
                  <span className="font-bold text-slate-900 w-12 text-right">{item.score}</span>
                  <span className="text-[11px] font-bold text-slate-500 w-32 text-right">{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Parental Rights & Subscription Summary */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Thông tin gói học đang đăng ký</h3>

              <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-200 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>Gói đăng ký:</span>
                  <span className="text-blue-700">Gói Đồng hành Lớp Trực tuyến</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Thời hạn:</span>
                  <span>Còn 120 ngày (Đến 22/11/2026)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Quyền lợi:</span>
                  <span>Lớp trực tuyến + Mentor + Báo cáo</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Báo cáo SMS / Zalo thông báo khi con hoàn thành 100% nhiệm vụ tuần.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cam kết học thử 7 ngày hoàn tiền 100% nếu không hài lòng.</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBack}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-2xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Quay về Dashboard Học Sinh</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
