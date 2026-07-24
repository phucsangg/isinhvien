import React, { useState } from 'react';
import { Radio, Calendar, Users, Clock, MessageSquare, Send, Sparkles, ShieldCheck, Play, Bell, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { REAL_SANGSANG_TEACHERS } from '../../data/teachers-data';

export const LivestreamTab: React.FC = () => {
  const [activeSession, setActiveSession] = useState({
    id: 'live-01',
    title: 'Bí quyết bóc tách Ma trận Logic & Phân tích số liệu ĐHQG TP.HCM 2026',
    teacher: REAL_SANGSANG_TEACHERS[0], // Thầy Bùi Văn Công
    viewerCount: 1420,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1',
    description: 'Buổi Livestream độc quyền giải chi tiết 30 câu hỏi Phân tích số liệu & Logic ma trận khó nhất trong bộ đề minh họa V-ACT 2026.'
  });

  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Nguyễn Văn Minh (TP.HCM)', text: 'Thầy ơi, câu phân tích GDP ngành Dịch vụ tính nhanh như thế nào ạ?', time: '20:15' },
    { id: 2, user: 'Trần Thị Thu Hà (Đồng Nai)', text: 'Thầy Công giảng dễ hiểu quá ạ, phần ma trận logic trượt 5 đối tượng chuẩn đét luôn!', time: '20:17' },
    { id: 3, user: 'ThS. Bùi Văn Công (Chuyên gia)', isTeacher: true, text: 'Các em chú ý quy tắc phản đảo P => Q nhé. Đọc đáp án loại ngay các phương án khẳng định tuyệt đối!', time: '20:18' },
    { id: 4, user: 'Lê Hoàng Anh (Cần Thơ)', text: 'Cho em xin tài liệu PDF buổi live hôm nay với ạ thầy ơi', time: '20:20' }
  ]);

  const [inputChat, setInputChat] = useState('');
  const [remindedSessions, setRemindedSessions] = useState<Record<string, boolean>>({});

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputChat.trim()) return;
    setChatMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        user: 'Bạn (Học sinh Sangsang)',
        text: inputChat.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInputChat('');
  };

  const scheduleList = [
    {
      id: 'live-sched-01',
      title: 'Tối ưu 45 phút làm bài Tiếng Việt & Đọc hiểu văn bản nghệ thuật',
      teacherName: 'Cô Nguyễn Hương Sen',
      teacherAvatar: '/images/teachers/co_nguyen_huong_sen.png',
      subject: 'Tiếng Việt & Đọc Hiểu',
      date: '20:00 - Thứ 5, 26/03/2027',
      registered: 850
    },
    {
      id: 'live-sched-02',
      title: 'Chiến thuật Keyword Scanning & Sửa lỗi sai gạch chân Tiếng Anh',
      teacherName: 'Thầy Nguyễn Thành Luân',
      teacherAvatar: '/images/teachers/thay_nguyen_thanh_luan.png',
      subject: 'Tiếng Anh V-ACT',
      date: '20:00 - Thứ 7, 28/03/2027',
      registered: 1120
    },
    {
      id: 'live-sched-03',
      title: 'Giải chi tiết 30 câu Khoa học Tự nhiên & Bài toán Thí nghiệm Hóa - Lý',
      teacherName: 'Thầy Phạm Văn Thuận',
      teacherAvatar: '/images/teachers/thay_pham_van_thuan.png',
      subject: 'Suy luận Khoa học',
      date: '20:00 - Chủ Nhật, 29/03/2027',
      registered: 1450
    }
  ];

  const toggleReminder = (id: string) => {
    setRemindedSessions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-700 text-xs font-extrabold">
              <Radio className="w-4 h-4 text-rose-600 animate-pulse" />
              <span>Phòng Học Trực Tuyến Live Stream V-ACT</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Sangsang Livestream Chữa Đề & Luyện Chiến Thuật
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-3xl">
              Học trực tiếp cùng Thạc sĩ Bùi Văn Công và các Thầy Cô top 1 Sangsang. Tương tác đặt câu hỏi 1-1, nhận tài liệu PDF độc quyền và mẹo bóc tách ma trận đề thi V-ACT 2027.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 text-rose-700 font-extrabold text-xs sm:text-sm rounded-2xl flex items-center gap-2">
              <Users className="w-4 h-4 text-rose-600" />
              <span>{activeSession.viewerCount.toLocaleString()} sĩ tử đang xem</span>
            </div>
          </div>
        </div>

        {/* Live Stream Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Video Stream Container (8 Columns) */}
          <div className="lg:col-span-8 space-y-5">
            <div className="relative bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 aspect-video group">
              {/* Live Badge Overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-rose-600 text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg animate-pulse">
                  <Radio className="w-3.5 h-3.5" />
                  <span>ĐANG PHÁT TRỰC TIẾP</span>
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-900/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Chuyên chủ đề: Logic & Số liệu</span>
                </span>
              </div>

              {/* Video Mock Player Embed */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-rose-950 to-slate-950 relative">
                <img
                  src="/images/teachers/thay_bui_van_cong.png"
                  alt="Thầy Bùi Văn Công Live"
                  className="w-full h-full object-cover opacity-40 blur-[2px]"
                />
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-2xl shadow-rose-600/50 border-4 border-white/20 animate-bounce">
                    <Play className="w-10 h-10 fill-current ml-1" />
                  </div>
                  <div className="space-y-1 max-w-lg">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-rose-400">Buổi Livestream Trực Tiếp #102</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{activeSession.title}</h3>
                    <p className="text-xs text-slate-300">Giảng viên chính: <strong className="text-amber-400">ThS. Bùi Văn Công</strong> (Thủ khoa Chuyên sâu V-ACT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher Details & Live Session Intro */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="/images/teachers/thay_bui_van_cong.png"
                  alt="Thầy Bùi Văn Công"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-rose-500 shadow-md shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900">ThS. Bùi Văn Công</h3>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-extrabold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Xác minh Sangsang</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">15+ năm kinh nghiệm ôn thi ĐGNL V-ACT ĐHQG TP.HCM</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-5 py-2.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs shadow-lg shadow-rose-500/25 transition-all">
                  Tải PDF Bài Tập Livestream
                </button>
              </div>
            </div>
          </div>

          {/* Right Live Chat Container (4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-[560px]">
            {/* Chat Header */}
            <div className="p-4 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-extrabold">Trò chuyện trực tiếp (Live Chat)</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/50">
              {chatMessages.map(msg => (
                <div
                  key={msg.id}
                  className={`p-3 rounded-2xl text-xs space-y-1 ${
                    msg.isTeacher
                      ? 'bg-rose-900/90 text-white border border-rose-700 shadow-md ml-2'
                      : 'bg-white text-slate-800 border border-slate-200/80 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span className={msg.isTeacher ? 'text-amber-300 font-black' : 'text-slate-900'}>
                      {msg.user}
                    </span>
                    <span className="text-[10px] opacity-60 font-normal">{msg.time}</span>
                  </div>
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
              ))}
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSendChat} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
                placeholder="Đặt câu hỏi cho Thầy Bùi Văn Công..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold transition-all shadow"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Upcoming Livestream Schedule Grid */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span>Lịch Livestream V-ACT Sắp Diễn Ra Trong Tuần</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scheduleList.map(item => {
              const isReminded = !!remindedSessions[item.id];
              return (
                <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-rose-400 hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold bg-rose-50 text-rose-700 px-3 py-1 rounded-xl border border-rose-200">
                        {item.subject}
                      </span>
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>{item.date}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.teacherAvatar}
                        alt={item.teacherName}
                        className="w-10 h-10 rounded-xl object-cover border border-rose-300"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-800">{item.teacherName}</div>
                        <div className="text-[11px] text-slate-400">{item.registered.toLocaleString()} sĩ tử đã đăng ký</div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleReminder(item.id)}
                      className={`p-2.5 rounded-xl border transition-all ${
                        isReminded
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-600 border-slate-200'
                      }`}
                      title={isReminded ? 'Đã bật nhắc nhở Zalo/SMS' : 'Nhận nhắc nhở lịch học'}
                    >
                      <Bell className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
