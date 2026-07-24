import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { BookOpen, Globe, Calculator, BarChart3, FlaskConical, Clock, Sparkles, ArrowRight, Target, CheckCircle2 } from 'lucide-react';
import { DiagnosticQuestion } from '../../types';
import { DE_MINH_HOA_2026_QUESTIONS } from '../../data/de-minh-hoa-2026';
import { DE_MINH_HOA_2025_QUESTIONS } from '../../data/de-minh-hoa-2025';
import { DE_MINH_HOA_LEGACY_QUESTIONS } from '../../data/de-minh-hoa-legacy';

interface TopicPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTopicPractice: (questions: DiagnosticQuestion[], topicTitle: string, durationMinutes: number) => void;
}

export const TopicPracticeModal: React.FC<TopicPracticeModalProps> = ({
  isOpen,
  onClose,
  onStartTopicPractice,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('toan_hoc');
  const [selectedYear, setSelectedYear] = useState<'2026' | '2025' | '2024'>('2026');
  const [selectedDuration, setSelectedDuration] = useState<number>(30);

  const domains = [
    {
      id: 'toan_hoc',
      title: 'Toán học & Tính toán',
      count: '30 câu',
      icon: Calculator,
      color: 'from-blue-600 to-indigo-600 text-blue-400 bg-blue-500/10 border-blue-500/30',
      description: 'Hàm số, Tích phân, Hình học không gian, Xác suất & Thống kê.',
    },
    {
      id: 'tieng_viet',
      title: 'Tiếng Việt & Đọc hiểu',
      count: '30 câu',
      icon: BookOpen,
      color: 'from-rose-600 to-amber-600 text-rose-400 bg-rose-500/10 border-rose-500/30',
      description: 'Đọc hiểu tác phẩm, Ngữ pháp, Phong cách ngôn ngữ & Từ vựng.',
    },
    {
      id: 'tieng_anh',
      title: 'Tiếng Anh (English)',
      count: '20 câu',
      icon: Globe,
      color: 'from-emerald-600 to-teal-600 text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      description: 'Vocabulary, Error Identification, Sentence Restatement & Reading.',
    },
    {
      id: 'logic_so_lieu',
      title: 'Logic & Phân tích số liệu',
      count: '12 câu',
      icon: BarChart3,
      color: 'from-amber-600 to-orange-600 text-amber-400 bg-amber-500/10 border-amber-500/30',
      description: 'Bài toán suy luận logic, biểu đồ cột/tròn & bảng phân tích số liệu.',
    },
    {
      id: 'khoa_hoc',
      title: 'Khoa học (Tự nhiên & Xã hội)',
      count: '28 câu',
      icon: FlaskConical,
      color: 'from-purple-600 to-violet-600 text-purple-400 bg-purple-500/10 border-purple-500/30',
      description: 'Vật lý, Hóa học, Sinh học, Lịch sử & Địa lý.',
    },
  ];

  const handleStart = () => {
    let rawDataset: DiagnosticQuestion[] = DE_MINH_HOA_2026_QUESTIONS;
    if (selectedYear === '2025') rawDataset = DE_MINH_HOA_2025_QUESTIONS;
    if (selectedYear === '2024') rawDataset = DE_MINH_HOA_LEGACY_QUESTIONS;

    // Filter questions matching selected domain
    const filtered = rawDataset.filter(q => q.domain === selectedDomain);

    const currentDomainObj = domains.find(d => d.id === selectedDomain);
    const topicTitle = `Luyện chuyên đề: ${currentDomainObj?.title || selectedDomain} (${selectedYear})`;

    onStartTopicPractice(filtered.length > 0 ? filtered : rawDataset.slice(0, 30), topicTitle, selectedDuration);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Luyện Tập Theo Chuyên Đề / Phân Môn">
      <div className="space-y-6">
        
        {/* Subtitle intro */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-bold text-slate-200 text-sm">Cá nhân hóa chuyên đề luyện tập</p>
            <p className="text-slate-400 leading-relaxed">
              Tập trung ôn luyện sâu vào các điểm yếu cụ thể giúp tối ưu hóa thời gian và tăng điểm vọt trong từng phân môn.
            </p>
          </div>
        </div>

        {/* 1. Select Domain */}
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-rose-500" />
            <span>1. Chọn Chuyên Đề Cần Luyện Tập:</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {domains.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedDomain === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedDomain(item.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-rose-500 ring-2 ring-rose-500/30 text-white shadow-lg'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-xl border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected ? (
                      <CheckCircle2 className="w-5 h-5 text-rose-500" />
                    ) : (
                      <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                    <p className={`text-[11px] leading-snug line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Select Exam Year & Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Exam Year Source */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              2. Chọn Nguồn Bộ Đề:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { year: '2026', label: 'Đề 2026' },
                { year: '2025', label: 'Đề 2025' },
                { year: '2024', label: 'Đề 2024' },
              ].map((y) => (
                <button
                  key={y.year}
                  type="button"
                  onClick={() => setSelectedYear(y.year as any)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    selectedYear === y.year
                      ? 'bg-rose-600 border-rose-600 text-white shadow'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {y.label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Limit */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>3. Thời Gian Canh Giờ:</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { time: 15, label: '15 Phút' },
                { time: 30, label: '30 Phút' },
                { time: 45, label: '45 Phút' },
              ].map((t) => (
                <button
                  key={t.time}
                  type="button"
                  onClick={() => setSelectedDuration(t.time)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    selectedDuration === t.time
                      ? 'bg-slate-900 border-slate-900 text-white shadow'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 active:from-rose-700 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-rose-600/20 transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>Bắt đầu Luyện Chuyên Đề Ngay</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </Modal>
  );
};
