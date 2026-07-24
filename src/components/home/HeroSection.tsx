import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, CheckCircle2, TrendingUp, Target, BarChart2, PlayCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenDiagnostic: () => void;
  setActiveTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiagnostic, setActiveTab }) => {
  const handleScrollToHowItWorks = () => {
    const el = document.getElementById('three-steps-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Sangsang — Giáo viên của tôi - Số 1 (Luyện thi V-ACT 2026)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Biết chính xác bạn cần cải thiện gì để <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400">tăng điểm <span className="inline-block whitespace-nowrap">V-ACT.</span></span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Trải nghiệm bài chẩn đoán 20 phút miễn phí từ Sangsang, nhận bản đồ năng lực trực quan và lộ trình học cá nhân hóa theo đúng mục tiêu trường/ngành bạn mơ ước.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 active:from-rose-700 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-rose-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <span>Kiểm tra năng lực miễn phí</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToHowItWorks}
                className="w-full sm:w-auto px-6 py-4 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-base rounded-2xl transition-colors flex items-center justify-center gap-2 group"
              >
                <PlayCircle className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
                <span>Xem cách hoạt động</span>
              </button>
            </div>

            {/* Microcopy (CRO & Transparency) */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Không yêu cầu thẻ thanh toán</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>Hoàn thành trong 15–20 phút</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Nhận kết quả phân tích ngay lập tức</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dashboard Mockup Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Sangsang Competency Report</span>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Dự báo: 740 – 790/1200
                </span>
              </div>

              {/* Score Metric Row */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-700/40">
                  <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-rose-400" />
                    <span>Mục tiêu điểm</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white">850 <span className="text-xs font-normal text-slate-400">điểm</span></div>
                  <div className="text-[11px] text-rose-400 mt-1 font-medium">ĐH Bách Khoa TP.HCM</div>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-700/40">
                  <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Khoảng cách mục tiêu</span>
                  </div>
                  <div className="text-2xl font-extrabold text-emerald-400">+80 <span className="text-xs font-normal text-slate-400">cần tăng</span></div>
                  <div className="text-[11px] text-slate-400 mt-1">Còn 45 ngày thi</div>
                </div>
              </div>

              {/* 3 Priority Skill Gaps */}
              <div className="space-y-3 mb-5">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <BarChart2 className="w-4 h-4 text-rose-400" />
                  <span>3 Kỹ năng cần ưu tiên cải thiện</span>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Phân tích số liệu (Biểu đồ cột)</span>
                      <span className="text-rose-400 font-bold">55% (Yếu)</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full w-[55%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Toán học (Mô hình hóa)</span>
                      <span className="text-amber-400 font-bold">60% (Trung bình)</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[60%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Tư duy Logic (Mệnh đề)</span>
                      <span className="text-rose-400 font-bold">68% (Đạt)</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full w-[68%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Roadmap Action */}
              <button
                onClick={onOpenDiagnostic}
                className="w-full py-3 bg-slate-700/80 hover:bg-slate-700 text-rose-300 font-bold text-xs rounded-xl border border-slate-600 transition-colors flex items-center justify-center gap-2"
              >
                <span>Bắt đầu chẩn đoán cùng Sangsang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
