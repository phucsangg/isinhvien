import React from 'react';
import { Award, AlertCircle, Clock, CheckCircle, BarChart3, ChevronRight } from 'lucide-react';

export const SampleReportSection: React.FC<{ onOpenDiagnostic: () => void }> = ({ onOpenDiagnostic }) => {
  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">Giao diện phân tích mẫu</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Báo cáo Năng lực Đầy đủ Bạn Sẽ Nhận Được
          </h3>
          <p className="text-slate-400 mt-3 text-base">
            Minh họa trực quan báo cáo sau khi hoàn thành bài kiểm tra chẩn đoán 20 phút.
          </p>
        </div>

        {/* Demo Dashboard Frame */}
        <div className="bg-slate-800/90 rounded-3xl border border-slate-700 p-6 lg:p-8 shadow-2xl max-w-5xl mx-auto">
          
          {/* Top Banner Disclaimer */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-6 flex items-center gap-2 text-xs text-amber-300">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Lưu ý quan trọng:</strong> Điểm dự báo chỉ mang tính tham khảo và không phải kết quả chính thức của ĐHQG-HCM.
            </span>
          </div>

          {/* Main Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/60">
              <div className="text-xs text-slate-400">Dự báo điểm V-ACT</div>
              <div className="text-3xl font-extrabold text-blue-400 mt-1">740 – 790</div>
              <div className="text-[11px] text-slate-500 mt-1">Trên thang điểm 1.200</div>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/60">
              <div className="text-xs text-slate-400 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Tỷ lệ chính xác</span>
              </div>
              <div className="text-3xl font-extrabold text-emerald-400 mt-1">70.0%</div>
              <div className="text-[11px] text-emerald-500 mt-1">↑ +5% so với tuần trước</div>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/60">
              <div className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Thời gian trung bình</span>
              </div>
              <div className="text-3xl font-extrabold text-amber-400 mt-1">1.15 <span className="text-xs font-normal">phút/câu</span></div>
              <div className="text-[11px] text-slate-500 mt-1">Đạt tốc độ khuyến nghị</div>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/60">
              <div className="text-xs text-slate-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-teal-400" />
                <span>Mức độ sẵn sàng</span>
              </div>
              <div className="text-3xl font-extrabold text-teal-400 mt-1">Khá cao</div>
              <div className="text-[11px] text-slate-500 mt-1">Cần thêm 30 ngày luyện</div>
            </div>
          </div>

          {/* Skill Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700/50">
              <h4 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span>Chi tiết 6 Nhóm Năng lực V-ACT</span>
              </h4>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span className="text-slate-300">Tiếng Việt (Đọc hiểu & Sử dụng từ)</span>
                    <span className="text-emerald-400 font-bold">82% - Điểm mạnh</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[82%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span className="text-slate-300">Tiếng Anh (Đọc hiểu & Ngữ pháp)</span>
                    <span className="text-blue-400 font-bold">75% - Tốt</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[75%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span className="text-slate-300">Toán học (Mô hình hóa)</span>
                    <span className="text-amber-400 font-bold">60% - Cần chú ý</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-[60%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span className="text-slate-300">Tư duy Logic (Mệnh đề & Sắp xếp)</span>
                    <span className="text-blue-400 font-bold">68% - Đạt</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[68%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span className="text-slate-300">Phân tích số liệu (Biểu đồ)</span>
                    <span className="text-rose-400 font-bold">55% - Lỗ hổng lớn</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[55%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700/50 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-200 mb-3">Dạng bài bị mất điểm nhiều nhất</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                    <div>
                      <strong className="text-white">Đọc biểu đồ đường hỗn hợp:</strong> Thường nhầm lẫn giữa tỷ lệ % và số liệu tuyệt đối.
                    </div>
                  </li>
                  <li className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                    <div>
                      <strong className="text-white">Toán ứng dụng thực tế:</strong> Quên công thức tính lãi kép & tỷ lệ tăng trưởng.
                    </div>
                  </li>
                  <li className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                    <div>
                      <strong className="text-white">Bài tập thí nghiệm Hóa học:</strong> Tính sai thứ tự phản ứng sủi bọt khí CO2.
                    </div>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenDiagnostic}
                className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Nhận bản báo cáo riêng của bạn</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
