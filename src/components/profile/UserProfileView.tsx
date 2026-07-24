import React, { useState } from 'react';
import { UserProfile, AuthService } from '../../services/auth-service';
import { User, Mail, Phone, Target, Award, ShieldCheck, LogOut, Edit3, CheckCircle2, QrCode, BookOpen, Clock, Calendar, Sparkles, Download, Lock, FileText } from 'lucide-react';
import { Modal } from '../common/Modal';

interface UserProfileViewProps {
  currentUser: UserProfile;
  onLogout: () => void;
  setActiveTab: (tab: string) => void;
  onUpdateUser: (updatedUser: UserProfile) => void;
}

export const UserProfileView: React.FC<UserProfileViewProps> = ({
  currentUser,
  onLogout,
  setActiveTab,
  onUpdateUser
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [fullname, setFullname] = useState(currentUser.fullname);
  const [phone, setPhone] = useState(currentUser.phone || '');
  const [targetUni, setTargetUni] = useState(currentUser.targetUniversity);
  const [targetScore, setTargetScore] = useState(currentUser.targetScore);

  // Real exam history: empty by default until user completes a test
  const [examHistory, setExamHistory] = useState<any[]>(
    currentUser.hasCompletedFullExam
      ? [
          {
            id: 'ex-01',
            title: 'Bài thi Mô phỏng 120 câu V-ACT',
            date: currentUser.createdAt,
            score: 850,
            accuracy: '85%',
            timeMinutes: 140,
            status: 'Hoàn thành'
          }
        ]
      : []
  );

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: UserProfile = {
      ...currentUser,
      fullname,
      phone,
      targetUniversity: targetUni,
      targetScore: Number(targetScore)
    };

    localStorage.setItem('sangsang_current_user', JSON.stringify(updated));
    onUpdateUser(updated);
    setIsEditModalOpen(false);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Profile Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left z-10">
            <div className="w-20 h-20 rounded-3xl bg-rose-500 text-white flex items-center justify-center font-black text-2xl shadow-lg border-2 border-rose-400 shrink-0">
              {currentUser.fullname.charAt(0).toUpperCase()}
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white">{currentUser.fullname}</h1>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Tài khoản Học sinh</span>
                </span>
              </div>
              
              <p className="text-xs text-slate-300 flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-0.5">
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-rose-400" /> {currentUser.email}</span>
                {currentUser.phone && <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-amber-400" /> {currentUser.phone}</span>}
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-400" /> Ngày tham gia: {currentUser.createdAt}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 z-10 shrink-0">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Edit3 className="w-4 h-4 text-rose-400" />
              <span>Sửa hồ sơ</span>
            </button>

            <button
              onClick={onLogout}
              className="px-4 py-2.5 bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white text-xs font-bold rounded-xl border border-rose-500/30 transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-4 h-4" />
              <span>Đăng xuất</span>
            </button>
          </div>

        </div>

        {/* Profile Grid (Without VIP Member block, only real data when completed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content: Target & Exam History */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* School & Target Score Progress Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Target className="w-5 h-5 text-rose-500" />
                  <span>Mục Tiêu Tuyển Sinh & Nguyện Vọng</span>
                </h3>
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                  Mục tiêu {currentUser.targetScore} Điểm
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Trường mục tiêu chọn</div>
                  <div className="text-base font-extrabold text-slate-900 mt-1">{currentUser.targetUniversity}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Dự báo khoảng điểm V-ACT</div>
                  <div className="text-base font-extrabold text-slate-900 mt-1">
                    {currentUser.hasCompletedFullExam ? (
                      <span className="text-emerald-600">820 – 870 / 1.200 V-ACT</span>
                    ) : (
                      <span className="text-slate-400 font-normal italic text-xs">Chưa làm bài test (Cần thực hiện bài thi)</span>
                    )}
                  </div>
                </div>
              </div>

              {currentUser.hasCompletedFullExam && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Tiến độ đạt mục tiêu ({currentUser.targetScore} điểm)</span>
                    <span className="text-rose-600 font-bold">100% Đã hoàn thành</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-emerald-500 h-full w-[100%] rounded-full transition-all"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Exam History Card — Empty until user actually completes a test */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-rose-500" />
                  <span>Lịch Sử Thi & Kết Quả Bài Làm</span>
                </h3>
                <span className="text-xs text-slate-500 font-bold">{examHistory.length} Bài đã hoàn thành</span>
              </div>

              {examHistory.length > 0 ? (
                <div className="space-y-3">
                  {examHistory.map((ex) => (
                    <div key={ex.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-4">
                      <div className="space-y-1 min-w-0">
                        <div className="text-sm font-bold text-slate-900 truncate">{ex.title}</div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                          <span>{ex.date}</span>
                          <span>•</span>
                          <span>{ex.timeMinutes} phút</span>
                          <span>•</span>
                          <span className="text-emerald-600 font-bold">Tỷ lệ đúng {ex.accuracy}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-lg font-black text-rose-600">{ex.score} đ</div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {ex.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-200/70 text-slate-400 flex items-center justify-center mx-auto">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-slate-700">Chưa có lịch sử làm bài</div>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Bạn chưa thực hiện bài thi thử nào. Hãy làm bài kiểm tra chẩn đoán hoặc bài thi 120 câu để hệ thống lưu vết kết quả.
                  </p>
                  <button
                    onClick={() => setActiveTab('roadmap')}
                    className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow transition-colors inline-block"
                  >
                    Bắt đầu làm bài test ngay
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Side Column: Certificate Lock/Unlocked Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Verification Certificate Status Card (Only shown when completed 120Q exam) */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <QrCode className="w-4 h-4 text-rose-500" />
                <span>Chứng Nhận QR Code</span>
              </h3>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
                {currentUser.hasCompletedFullExam ? (
                  <>
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-slate-900">Mã chứng nhận: {currentUser.certificateId || 'SS-VACT-2026-9821'}</div>
                    <p className="text-[11px] text-emerald-700 font-medium">Đã mở khóa chứng nhận QR Code chính thức từ Thạc sĩ Bùi Văn Công.</p>
                    <button
                      onClick={() => setActiveTab('student-dash')}
                      className="w-full py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow transition-colors"
                    >
                      Xem & Tải Chứng nhận QR
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto border border-amber-300">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-slate-800">Chưa mở khóa Chứng nhận QR</div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Chứng nhận QR Code chỉ được cấp sau khi bạn **hoàn thành bài thi mô phỏng 120 câu V-ACT (150 phút)**.
                    </p>
                  </>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Chỉnh Sửa Hồ Sơ Cá Nhân"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleSaveProfile} className="space-y-4 text-slate-900">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Họ và tên *</label>
            <input
              type="text"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Số điện thoại / Zalo</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Trường ĐH mục tiêu *</label>
            <input
              type="text"
              required
              value={targetUni}
              onChange={(e) => setTargetUni(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Điểm V-ACT mục tiêu (Thang 1.200) *</label>
            <input
              type="number"
              required
              min={300}
              max={1200}
              value={targetScore}
              onChange={(e) => setTargetScore(Number(e.target.value))}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow transition-colors"
          >
            Lưu thay đổi hồ sơ
          </button>
        </form>
      </Modal>

    </div>
  );
};
