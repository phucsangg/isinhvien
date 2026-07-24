import React, { useState } from 'react';
import { INITIAL_DAILY_TASKS, INITIAL_SKILL_SCORES } from '../../data/mock-student-data';
import { DailyTask } from '../../types';
import { Calendar, Target, Flame, BookOpen, RotateCcw, TrendingUp, CheckCircle2, PlayCircle, Award, ArrowRight, ChevronRight, QrCode, Download, ShieldCheck, Sparkles, Lock, AlertCircle, Clock } from 'lucide-react';
import { Modal } from '../common/Modal';
import { TaskPracticeModal } from './TaskPracticeModal';
import { InteractiveVideoPlayerModal } from '../learn/InteractiveVideoPlayerModal';

interface StudentDashboardProps {
  setActiveTab: (tab: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ setActiveTab }) => {
  const [tasks, setTasks] = useState<DailyTask[]>(INITIAL_DAILY_TASKS);
  const [streakCount] = useState(7);
  const [userXp, setUserXp] = useState(380);
  
  // Interactive Task Modal State
  const [activeTaskForModal, setActiveTaskForModal] = useState<DailyTask | null>(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Business Rule: Certificate is ONLY for students who are LOGGED IN and HAVE COMPLETED A FULL 120-QUESTION MOCK EXAM
  const [hasCompletedFullExam, setHasCompletedFullExam] = useState<boolean>(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [showLockAlert, setShowLockAlert] = useState(false);

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextCompleted = !t.completed;
        if (nextCompleted) setUserXp(xp => xp + t.xpPoints);
        else setUserXp(xp => Math.max(0, xp - t.xpPoints));
        return { ...t, completed: nextCompleted };
      }
      return t;
    }));
  };

  const handleExecuteTask = (task: DailyTask) => {
    if (task.id === 'task-3') {
      // Ôn lại 3 câu sai hôm qua (Sổ câu sai) -> Navigate directly to Wrong Notebook
      setActiveTab('wrong-notebook');
      return;
    }

    if (task.id === 'task-4') {
      // Video: Chiến thuật giải ma trận Logic 45 giây -> Open Interactive Video Player Modal
      setActiveTaskForModal(task);
      setIsVideoModalOpen(true);
      return;
    }

    // Task 1 (Tiếng Việt), Task 2 (Số liệu), Task 5 (Khoa học) -> Open Interactive TaskPracticeModal
    setActiveTaskForModal(task);
    setIsTaskModalOpen(true);
  };

  const handleCompleteTaskFromModal = (xpPoints: number) => {
    if (activeTaskForModal) {
      setTasks(prev => prev.map(t => {
        if (t.id === activeTaskForModal.id) {
          if (!t.completed) {
            setUserXp(xp => xp + xpPoints);
          }
          return { ...t, completed: true };
        }
        return t;
      }));
    }
  };

  const handleCertClick = () => {
    if (!hasCompletedFullExam) {
      setShowLockAlert(true);
    } else {
      setIsCertModalOpen(true);
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  const badges = [
    { title: 'Học giả Kiên trì', icon: '🔥', desc: 'Chuỗi 7 ngày học liên tiếp', unlocked: true },
    { title: 'Chiến thần Logic', icon: '⚡', desc: 'Đạt 80%+ bài suy luận mệnh đề', unlocked: true },
    { title: 'Bậc thầy Số liệu', icon: '📊', desc: 'Giải 5 bài biểu đồ không sai', unlocked: true },
    { title: 'Chuyên gia Đèn dầu', icon: '🏆', desc: 'Hoàn thành 50+ bài tập nâng cao', unlocked: false }
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Student Welcome Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Đã đăng nhập • Học sinh Sangsang</span>
              </span>
              <span className="text-xs text-slate-400">Còn 45 ngày đến Đợt 1</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Chào bạn! Hôm nay bạn cần học gì?
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Mục tiêu: <strong className="text-white">ĐH Bách Khoa TP.HCM (850+ điểm)</strong> • Lộ trình cá nhân hóa 15p/ngày
            </p>
          </div>

          {/* Streak & XP Stats */}
          <div className="flex items-center gap-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 shrink-0">
            <div className="text-center px-3">
              <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-xl">
                <Flame className="w-5 h-5 fill-amber-400" />
                <span>{streakCount} ngày</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Chuỗi học liên tiếp</div>
            </div>

            <div className="w-px h-8 bg-slate-700"></div>

            <div className="text-center px-3">
              <div className="flex items-center justify-center gap-1 text-emerald-400 font-black text-xl">
                <Award className="w-5 h-5" />
                <span>{userXp} XP</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Điểm tích lũy</div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column: Daily Tasks (Hôm nay) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Daily Quest Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-rose-500" />
                    <span>Nhiệm vụ hôm nay</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">Hoàn thành để duy trì chuỗi học và lấp lỗ hổng kiến thức</p>
                </div>

                <div className="text-right">
                  <div className="text-xs font-bold text-rose-600">{completedCount} / {tasks.length} Hoàn thành</div>
                  <div className="w-28 bg-slate-100 h-2 rounded-full mt-1 overflow-hidden">
                    <div className="bg-rose-500 h-full transition-all" style={{ width: `${progressPercent}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Task Items */}
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                      task.completed
                        ? 'bg-emerald-50/60 border-emerald-200 text-slate-700'
                        : 'bg-slate-50 hover:bg-rose-50/30 border-slate-200/80 text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                          task.completed
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'bg-white border-slate-300 hover:border-rose-400'
                        }`}
                      >
                        {task.completed && <CheckCircle2 className="w-4 h-4" />}
                      </button>

                      <div className="min-w-0">
                        <div className={`text-xs sm:text-sm font-bold truncate ${task.completed ? 'line-through text-slate-500' : ''}`}>
                          {task.title}
                        </div>
                        <div className="flex items-center gap-2.5 text-[11px] text-slate-500 mt-0.5">
                          <span className="font-semibold text-rose-600">{task.durationMinutes} phút</span>
                          <span>•</span>
                          <span className="text-emerald-600 font-bold">+{task.xpPoints} XP</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleExecuteTask(task)}
                      className={`px-3.5 py-1.5 rounded-xl font-bold text-xs shrink-0 transition-colors ${
                        task.completed
                          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                          : 'bg-rose-500 hover:bg-rose-600 text-white shadow-sm'
                      }`}
                    >
                      {task.completed ? 'Làm lại' : 'Thực hiện'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Navigation Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => setActiveTab('wrong-notebook')}
                className="bg-white p-5 rounded-3xl border border-slate-200 hover:border-rose-300 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors">Sổ Câu Sai</h3>
                    <p className="text-xs text-slate-500">3 câu cần rà soát lặp lại ngắt quãng</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </div>

              <div 
                onClick={() => setActiveTab('university-lookup')}
                className="bg-white p-5 rounded-3xl border border-slate-200 hover:border-rose-300 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors">Tra Cứu Điểm Chuẩn</h3>
                    <p className="text-xs text-slate-500">So sánh điểm 2023-2025 ĐHQG TP.HCM</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          {/* Right Column: Badges & Digital Verification Certificate Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Achievement Badges Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Huy Hiệu & Danh Hiệu</span>
                </h3>
                <span className="text-xs text-slate-500 font-bold">3/4 Đã mở</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {badges.map((b, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-2xl border text-center space-y-1 transition-all ${
                      b.unlocked 
                        ? 'bg-amber-50/50 border-amber-200 text-slate-900' 
                        : 'bg-slate-50 border-slate-200 opacity-50 grayscale'
                    }`}
                  >
                    <div className="text-2xl">{b.icon}</div>
                    <div className="text-xs font-bold">{b.title}</div>
                    <div className="text-[10px] text-slate-500 leading-tight">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Completion Certificate Card with Locked/Unlocked Business Rules */}
            <div className="bg-gradient-to-br from-slate-900 to-rose-950 text-white rounded-3xl p-6 border border-rose-500/30 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-300 bg-rose-500/20 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                  Chứng nhận xác thực Sangsang
                </span>
                {hasCompletedFullExam ? <QrCode className="w-4 h-4 text-emerald-400" /> : <Lock className="w-4 h-4 text-amber-400" />}
              </div>

              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Chứng Nhận Năng Lực V-ACT</span>
                  {!hasCompletedFullExam && <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md font-bold uppercase">Yêu cầu 120 câu</span>}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {hasCompletedFullExam
                    ? 'Cấp chứng chỉ số chính thức có QR Code xác thực kết quả thi thử 120 câu.'
                    : 'Mở khóa chứng nhận QR Code sau khi bạn hoàn thành Bài thi Mô phỏng đầy đủ 120 câu (150 phút).'}
                </p>
              </div>

              <button
                onClick={handleCertClick}
                className={`w-full py-3 font-extrabold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 ${
                  hasCompletedFullExam
                    ? 'bg-rose-500 hover:bg-rose-600 text-white'
                    : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40'
                }`}
              >
                {hasCompletedFullExam ? <Download className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                <span>{hasCompletedFullExam ? 'Xem & Tải Chứng nhận QR' : 'Mở khóa Chứng nhận (Yêu cầu thi 120 câu)'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* REQUIREMENT UNLOCK ALERT MODAL */}
      <Modal
        isOpen={showLockAlert}
        onClose={() => setShowLockAlert(false)}
        title="Yêu Cầu Mở Khóa Chứng Nhận Năng Lực V-ACT"
        maxWidth="max-w-md"
      >
        <div className="text-center space-y-5 text-slate-900 py-2">
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto border-2 border-amber-300">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Cần Hoàn Thành Bài Thi Mô Phỏng 120 Câu</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tài khoản của bạn đã được xác thực đăng nhập. Tuy nhiên, <strong>Chứng nhận Năng lực QR Code chính thức</strong> (có chữ ký Thạc sĩ Bùi Văn Công) chỉ cấp khi bạn hoàn thành <strong>BÀI THI MÔ PHỎNG ĐẦY ĐỦ 120 CÂU (150 PHÚT)</strong>.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-left space-y-2 font-medium text-slate-700">
            <div className="flex items-center gap-2 text-emerald-600 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 1. Đã đăng nhập tài khoản Sangsang (Đạt)
            </div>
            <div className="flex items-center gap-2 text-amber-600 font-bold">
              <Clock className="w-4 h-4 text-amber-500" /> 2. Hoàn thành đề thi 120 câu 150 phút (Chưa thực hiện)
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setShowLockAlert(false);
                // Simulate marking 120-question exam completed to test unlock flow
                setHasCompletedFullExam(true);
                setIsCertModalOpen(true);
              }}
              className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>Thi ngay Bài mô phỏng 120 câu để mở khóa</span>
            </button>

            <button
              onClick={() => setShowLockAlert(false)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
            >
              Đóng thông báo
            </button>
          </div>
        </div>
      </Modal>

      {/* VERIFIED DIGITAL CERTIFICATE MODAL (Only when unlocked) */}
      {hasCompletedFullExam && (
        <Modal
          isOpen={isCertModalOpen}
          onClose={() => setIsCertModalOpen(false)}
          title="Chứng Nhận Năng Lực Sangsang V-ACT 2026"
          maxWidth="max-w-2xl"
        >
          <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border-2 border-rose-500/40 shadow-2xl space-y-6 text-center relative overflow-hidden">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-rose-400">CHỨNG NHẬN KẾT QUẢ CHẨN ĐOÁN CÁ NHÂN HÓA</div>
              <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400">
                SANGSANG COMPETENCY CERTIFICATE
              </h2>
              <p className="text-xs text-slate-400">Mã định danh xác thực: <strong className="text-mono text-slate-200">SS-VACT-2026-9821</strong></p>
            </div>

            <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-sm font-bold text-slate-300">Xác nhận học sinh: <strong className="text-white text-base">Học Sinh Sangsang (Đã xác thực)</strong></div>
              <div className="text-xs text-slate-400">Đã hoàn thành xuất sắc Bài thi Mô phỏng 120 câu chuẩn ma trận V-ACT 2026 (150 phút)</div>
              <div className="text-2xl font-black text-emerald-400">Dự báo điểm: 820 – 870 / 1.200 V-ACT</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs border-t border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://sangsang.edu.vn/verify/SS-VACT-120Q-850"
                  alt="QR Code Certificate"
                  className="w-16 h-16 rounded-xl bg-white p-1"
                />
                <div className="text-left space-y-0.5">
                  <div className="font-bold text-white flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Xác thực bởi Sangsang</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Quét mã QR để kiểm tra tính hợp lệ trên sangsang.edu.vn</div>
                </div>
              </div>

              <div className="text-right space-y-1">
                <div className="text-[11px] text-slate-400">Giám đốc Chuyên môn V-ACT:</div>
                <div className="font-black text-rose-400 text-sm">Thạc sĩ Bùi Văn Công</div>
                <div className="text-[10px] text-slate-500">CÔNG TY CỔ PHẦN MHNG</div>
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Tải / In bản chứng nhận PDF</span>
            </button>
          </div>
        </Modal>
      )}

      {/* Interactive Task Practice Modal */}
      {activeTaskForModal && (
        <TaskPracticeModal
          isOpen={isTaskModalOpen}
          onClose={() => setIsTaskModalOpen(false)}
          taskTitle={activeTaskForModal.title}
          taskCategory={
            activeTaskForModal.id === 'task-1'
              ? 'tieng_viet'
              : activeTaskForModal.id === 'task-2'
                ? 'so_lieu'
                : 'khoa_hoc'
          }
          xpPoints={activeTaskForModal.xpPoints}
          durationMinutes={activeTaskForModal.durationMinutes}
          onCompleteTask={handleCompleteTaskFromModal}
        />
      )}

      {/* Interactive Video Player Modal (Thầy Bùi Văn Công Lecture Video) */}
      <InteractiveVideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => {
          setIsVideoModalOpen(false);
          if (activeTaskForModal && activeTaskForModal.id === 'task-4') {
            handleCompleteTaskFromModal(activeTaskForModal.xpPoints);
          }
        }}
        videoTitle="Bài 1: Chiến thuật giải ma trận Logic 45 giây"
        teacherName="Thạc sĩ Bùi Văn Công"
        subject="Tư duy Logic & Mệnh đề V-ACT"
      />

    </div>
  );
};
