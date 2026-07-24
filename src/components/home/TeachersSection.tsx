import React, { useState } from 'react';
import { REAL_SANGSANG_TEACHERS } from '../../data/teachers-data';
import { Award, Star, Users, CheckCircle2, Sparkles, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

export const TeachersSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(REAL_SANGSANG_TEACHERS.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Slice current 3 teachers for the active slide page
  const currentTeachers = REAL_SANGSANG_TEACHERS.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Slider Control Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Giáo viên của tôi - Số 1 Sangsang</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Đội Ngũ Giáo Viên Uy Tín Hàng Đầu V-ACT Sangsang
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Quy tụ các Thạc sĩ, Thủ khoa, Chuyên gia Bùi Văn Công & Giáo viên VTV đồng hành luyện thi V-ACT.
            </p>
          </div>

          {/* Carousel Slider Control Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 border border-slate-200 text-slate-700 transition-all active:scale-95 shadow-sm"
              aria-label="Giáo viên trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-slate-500 font-mono px-2">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={handleNext}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 border border-slate-200 text-slate-700 transition-all active:scale-95 shadow-sm"
              aria-label="Giáo viên tiếp theo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Teachers Per Row Grid Slide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[480px]">
          {currentTeachers.map((teacher) => (
            <div 
              key={teacher.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-rose-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group animate-fadeIn"
            >
              <div>
                {/* Teacher Profile Image & Badge Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative shrink-0 overflow-hidden w-18 h-18 sm:w-20 sm:h-20 rounded-2xl border-2 border-rose-500 shadow-md">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${teacher.avatarClass || 'object-center'}`}
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white z-10"></span>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 bg-rose-100 px-2 py-0.5 rounded-md inline-block mb-1">
                      {teacher.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {teacher.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-snug">{teacher.title}</p>
                  </div>
                </div>

                {/* Subject & Specialty */}
                <div className="p-3 bg-white rounded-2xl border border-slate-200/80 mb-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Phụ trách chuyên môn:</div>
                  <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>{teacher.subject}</span>
                  </div>
                </div>

                {/* Teacher Quote */}
                <p className="text-xs italic text-slate-600 mb-5 leading-relaxed bg-rose-50/50 p-3 rounded-xl border border-rose-100/60">
                  "{teacher.quote}"
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Thành tích & Hồ sơ:</div>
                  {teacher.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-slate-800">{teacher.rating}</span>
                  <span className="text-[11px] text-slate-400">/5.0</span>
                </div>

                <div className="flex items-center gap-1 text-slate-600">
                  <Users className="w-3.5 h-3.5 text-rose-500" />
                  <span>{teacher.studentsTaught.toLocaleString('vi-VN')}+ học sinh</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-2.5 rounded-full transition-all ${
                currentPage === idx ? 'w-8 bg-rose-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Trang giáo viên ${idx + 1}`}
            />
          ))}
        </div>

        {/* Banner Footer */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">Học Trực Tiếp Cùng Thầy Bùi Văn Công & Đội Ngũ Sangsang</h4>
            <p className="text-xs text-slate-300">Nhận giải đáp 1-on-1, chữa đề thi thử và bí quyết bấm máy tính giải nhanh V-ACT.</p>
          </div>

          <a
            href="https://2k9.livesctgv.sangsang.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow-lg shrink-0 transition-all"
          >
            Vào cổng Livestream Sangsang
          </a>
        </div>

      </div>
    </section>
  );
};
