import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { StudentGoal } from '../../types';
import { Sparkles, ArrowRight, Target, GraduationCap } from 'lucide-react';

interface PreQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartQuiz: (goal: StudentGoal) => void;
}

export const PreQuizModal: React.FC<PreQuizModalProps> = ({ isOpen, onClose, onStartQuiz }) => {
  const [grade, setGrade] = useState<'10' | '11' | '12' | 'tu_do'>('12');
  const [targetScore, setTargetScore] = useState<number>(850);
  const [targetUniversity, setTargetUniversity] = useState<string>('ĐH Bách Khoa TP.HCM');
  const [targetMajor, setTargetMajor] = useState<string>('Khoa học Máy tính');
  const [dailyStudyMinutes, setDailyStudyMinutes] = useState<number>(30);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartQuiz({
      grade,
      targetScore,
      targetUniversity,
      targetMajor,
      examDate: 'Đợt 1 - Tháng 3/2026',
      dailyStudyMinutes
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Khảo Sát Mục Tiêu Trước Khi Chẩn Đoán">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-blue-900">
          <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
          <span>
            Thông tin khảo sát giúp thuật toán điều chỉnh độ khó bài test chẩn đoán phù hợp với mục tiêu điểm của bạn.
          </span>
        </div>

        {/* Grade selection */}
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
            Bạn hiện đang học lớp mấy?
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { id: '10', label: 'Lớp 10' },
              { id: '11', label: 'Lớp 11' },
              { id: '12', label: 'Lớp 12' },
              { id: 'tu_do', label: 'Thí sinh tự do' }
            ].map(item => (
              <button
                type="button"
                key={item.id}
                onClick={() => setGrade(item.id as any)}
                className={`py-2.5 px-3 text-xs font-bold rounded-xl border transition-all ${
                  grade === item.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Target Score & University */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Target className="w-3.5 h-3.5 text-blue-600" />
              <span>Mục tiêu điểm V-ACT</span>
            </label>
            <select
              value={targetScore}
              onChange={(e) => setTargetScore(Number(e.target.value))}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value={650}>600 – 700 điểm (Mức cơ bản)</option>
              <option value={750}>700 – 800 điểm (Khá)</option>
              <option value={850}>800 – 900 điểm (Giỏi)</option>
              <option value={950}>900 – 1.000+ điểm (Xuất sắc)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>Trường mong muốn</span>
            </label>
            <input
              type="text"
              value={targetUniversity}
              onChange={(e) => setTargetUniversity(e.target.value)}
              placeholder="VD: ĐH Bách Khoa TP.HCM"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        </div>

        {/* Target Major & Daily Minutes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Ngành học mong muốn
            </label>
            <input
              type="text"
              value={targetMajor}
              onChange={(e) => setTargetMajor(e.target.value)}
              placeholder="VD: Khoa học Máy tính / Kinh tế"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Thời gian có thể học/ngày
            </label>
            <select
              value={dailyStudyMinutes}
              onChange={(e) => setDailyStudyMinutes(Number(e.target.value))}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value={15}>15 phút/ngày (Thong thả)</option>
              <option value={30}>30 phút/ngày (Khuyên dùng)</option>
              <option value={45}>45 phút/ngày (Tăng tốc)</option>
              <option value={60}>60+ phút/ngày (Cấp tốc)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
        >
          <span>Bắt đầu bài chẩn đoán 20 câu</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </form>
    </Modal>
  );
};
