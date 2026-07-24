import React, { useState } from 'react';
import { DiagnosticResult, StudentGoal } from '../../types';
import { Award, AlertCircle, CheckCircle, TrendingUp, Sparkles, Lock, ArrowRight, BookOpen, Clock, Target, RotateCcw, BarChart2, QrCode, Download, ShieldCheck, UserCheck } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { Modal } from '../common/Modal';

interface DiagnosticReportProps {
  result: DiagnosticResult;
  goal?: StudentGoal | null;
  onRegisterToUnlock: () => void;
  onRetake: () => void;
}

export const DiagnosticReport: React.FC<DiagnosticReportProps> = ({
  result,
  goal,
  onRegisterToUnlock,
  onRetake
}) => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [showRequirementAlert, setShowRequirementAlert] = useState(false);

  const safeGoal: StudentGoal = goal || {
    targetScore: 850,
    targetUniversity: 'ĐH Quốc Gia TP.HCM',
    targetMajor: 'Công nghệ Thông tin',
    grade: '12',
    examDate: 'Đợt 1 - Tháng 3/2026',
    dailyStudyMinutes: 45
  };

  // Business Rule: Certificate is ONLY for students who are LOGGED IN and HAVE COMPLETED A FULL 120-QUESTION MOCK EXAM
  const isFull120Exam = (result.totalQuestions || 20) >= 120;
  
  const radarData = (result.skills || []).filter(s => (s.totalCount || 0) > 0).map(s => ({
    subject: s.label || s.domain,
    A: s.score || 0,
    correctText: `${s.correctCount || 0}/${s.totalCount || 0} câu đúng (${s.score || 0}%)`,
    fullMark: 100
  }));

  const handleCertClick = () => {
    if (!isFull120Exam) {
      setShowRequirementAlert(true);
    } else {
      setIsCertModalOpen(true);
    }
  };

  const fMin = typeof result.forecastMin === 'number' ? result.forecastMin : Math.max(0, (result.totalScoreForecast || 0) - 30);
  const fMax = typeof result.forecastMax === 'number' ? result.forecastMax : Math.min(1200, (result.totalScoreForecast || 0) + 30);
  const pointsNeeded = Math.max(0, safeGoal.targetScore - fMax);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Hoàn thành Chẩn đoán V-ACT!</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Bản Đồ Năng Lực & Dự Báo Điểm V-ACT
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Hệ thống đã phân tích kết quả {result.totalQuestions || 20} câu chẩn đoán dựa trên thuật toán ma trận độ khó V-ACT 2026.
          </p>
        </div>

        {/* Disclaimer Banner */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm text-amber-300">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong>Thông báo miễn trừ trách nhiệm:</strong> Điểm số dự báo ({fMin} – {fMax} điểm) chỉ mang tính chất tham khảo cá nhân và không phải kết quả chính thức của ĐHQG-HCM.
          </div>
        </div>

        {/* Score & Target Summary Banner */}
        <div className="bg-slate-800/90 rounded-3xl border border-slate-700 p-6 sm:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Điểm dự báo hiện tại</div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400 mt-2">
              {fMin} – {fMax}
            </div>
            <div className="text-xs text-slate-400 mt-1">Thang điểm chuẩn 1.200 V-ACT</div>
          </div>

          <div className="border-y md:border-y-0 md:border-x border-slate-700/80 py-4 md:py-0 md:px-6">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
              <Target className="w-4 h-4 text-rose-400" />
              <span>Mục tiêu trường chọn</span>
            </div>
            <div className="text-xl font-bold text-white mt-2">{safeGoal.targetUniversity}</div>
            <div className="text-xs text-emerald-400 mt-1 font-semibold">Mục tiêu: {safeGoal.targetScore} điểm ({pointsNeeded > 0 ? `+${pointsNeeded} điểm cần tăng` : 'Đã đạt mục tiêu!'})</div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Độ chính xác & Tốc độ</div>
            <div className="text-2xl font-extrabold text-white mt-2">
              {result.totalCorrect || 0}/{result.totalQuestions || 20} câu đúng ({result.accuracyRate || 0}%)
            </div>
            <div className="text-xs text-slate-400 mt-1">Thời gian hoàn thành: {result.totalTimeMinutes || 1} phút</div>
          </div>

        </div>

        {/* Radar Chart & Skill Matrix Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Radar Visualization */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-3xl p-6 border border-slate-700 flex flex-col items-center justify-center">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">
              Biểu Đồ Radar Năng Lực 6 Miền Kiến Thức
            </h3>
            <p className="text-xs text-slate-400 mb-4 text-center">Tỷ lệ chính xác % tương ứng với điểm làm trên từng nhóm câu hỏi</p>
            
            <div className="w-full h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#475569" />
                  <PolarAngleAxis dataKey="subject" stroke="#94A3B8" tick={{ fill: '#CBD5E1', fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                  <Radar name="Học sinh (% đúng)" dataKey="A" stroke="#EF4444" fill="#EF4444" fillOpacity={0.5} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                    itemStyle={{ color: '#F87171', fontWeight: 'bold' }}
                    formatter={(value: any, name: any, item: any) => [`${value}% (${item.payload.correctText})`, 'Tỷ lệ đúng']}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Skill Breakdowns */}
          <div className="lg:col-span-5 bg-slate-800/80 rounded-3xl p-6 border border-slate-700 space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider border-b border-slate-700 pb-3">
              Chi Tiết Từng Miền Năng Lực
            </h3>
            
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {(result.skills || []).filter(s => (s.totalCount || 0) > 0).map((skill, idx) => (
                <div key={idx} className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{skill.label || skill.domain}</span>
                    <span className={`font-mono font-extrabold px-2 py-0.5 rounded text-[10px] ${
                      skill.score >= 80 ? 'bg-emerald-500/20 text-emerald-400' :
                      skill.score >= 60 ? 'bg-amber-500/20 text-amber-300' : 'bg-rose-500/20 text-rose-400'
                    }`}>
                      {skill.correctCount}/{skill.totalCount} ({skill.score}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        skill.score >= 80 ? 'bg-emerald-400' : skill.score >= 60 ? 'bg-amber-400' : 'bg-rose-500'
                      }`} 
                      style={{ width: `${skill.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certificate Card Section */}
        <div className="bg-gradient-to-br from-slate-800 via-rose-950/40 to-slate-800 rounded-3xl border border-rose-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
              <Award className="w-4 h-4 text-amber-300" />
              <span>Chứng Nhận Khả Năng Số V-ACT</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">Chứng Nhận QR Code Xác Thực Sangsang</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Chứng nhận chính thức ghi nhận điểm số thi thử 120 câu bấm giờ 150 phút. Dành riêng cho học sinh đã hoàn thành đề thi thật.
            </p>
          </div>

          <button
            onClick={handleCertClick}
            className={`px-6 py-3.5 rounded-2xl font-extrabold text-xs shadow-xl transition-all flex items-center justify-center gap-2 shrink-0 ${
              isFull120Exam
                ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20'
                : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700'
            }`}
          >
            {isFull120Exam ? <QrCode className="w-4 h-4" /> : <Lock className="w-4 h-4 text-amber-400" />}
            <span>{isFull120Exam ? 'Xem & Tải Chứng nhận QR' : 'Mở khóa Chứng nhận VIP'}</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onRetake}
            className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4 text-slate-400" />
            <span>Thi bài chẩn đoán khác</span>
          </button>
        </div>

      </div>

      {/* Alert Modal for 120 Exam Requirement */}
      {showRequirementAlert && (
        <Modal
          isOpen={showRequirementAlert}
          onClose={() => setShowRequirementAlert(false)}
          title="Yêu Cầu Mở Khóa Chứng Nhận QR Code"
        >
          <div className="space-y-4 text-slate-900">
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-2">
              <div className="font-extrabold text-sm flex items-center gap-2 text-amber-800">
                <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Yêu cầu hoàn thành đề thi mô phỏng 120 câu!</span>
              </div>
              <p>
                Để đảm bảo giá trị xác thực của <strong>Chứng nhận Năng lực Số Sangsang</strong>, học sinh cần hoàn thành <strong>bài thi thử 120 câu 150 phút</strong> chuẩn ma trận ĐHQG TP.HCM.
              </p>
            </div>
            <button
              onClick={() => {
                setShowRequirementAlert(false);
                onRetake();
              }}
              className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow transition-colors"
            >
              Vào Kho Đề Thi Thử 120 Câu Ngay
            </button>
          </div>
        </Modal>
      )}

      {/* Certificate Preview Modal */}
      {isCertModalOpen && (
        <Modal
          isOpen={isCertModalOpen}
          onClose={() => setIsCertModalOpen(false)}
          title="Chứng Nhận Năng Lực Số V-ACT Official"
        >
          <div className="space-y-4 text-slate-900">
            <div className="p-6 bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 rounded-3xl border-2 border-amber-400/40 text-white text-center space-y-4 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-extrabold text-rose-400 uppercase tracking-widest">CÔNG TY CỔ PHẦN MHNG • SANGSANG</span>
                <span className="text-[10px] font-mono text-amber-300">ID: SS-CERT-2026</span>
              </div>
              
              <div className="space-y-1">
                <h2 className="text-xl font-black text-amber-300 tracking-wider uppercase">CHỨNG NHẬN NĂNG LỰC V-ACT</h2>
                <p className="text-xs text-slate-300">Cấp cho Học sinh xuất sắc hoàn thành Đề thi mô phỏng ĐHQG TP.HCM</p>
              </div>

              <div className="py-2">
                <div className="text-lg font-extrabold text-white">HỌC SINH SANGSANG</div>
                <div className="text-2xl font-black text-rose-400 mt-1">ĐIỂM DỰ BÁO: {result.forecastMax} / 1200 ĐIỂM</div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2 border-t border-white/10">
                <QrCode className="w-16 h-16 text-white p-1 bg-white/10 rounded-xl" />
                <div className="text-left text-[11px] text-slate-300 space-y-1">
                  <div>• Mã QR Code tra cứu trực tuyến</div>
                  <div>• Ngày cấp: {new Date().toLocaleDateString('vi-VN')}</div>
                  <div>• Xác thực bởi Sangsang.edu.vn</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsCertModalOpen(false)}
              className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow transition-colors"
            >
              Đóng xem chứng nhận
            </button>
          </div>
        </Modal>
      )}

    </div>
  );
};
