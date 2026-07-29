import React, { useState } from 'react';
import { PlayCircle, Calendar, Users, MessageSquare, Download, Bell, ShieldCheck, Sparkles, Send, Check, Heart, Clock } from 'lucide-react';

interface LivestreamItem {
  id: string;
  title: string;
  teacherName: string;
  teacherAvatar: string;
  teacherRole: string;
  subject: string;
  date: string;
  time: string;
  status: 'live' | 'upcoming' | 'replay';
  viewerCount: number;
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  materialPdfUrl?: string;
}

export const LivestreamTab: React.FC = () => {
  const [activeLivestream, setActiveLivestream] = useState<LivestreamItem | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{ id: string; user: string; text: string; time: string; isTeacher?: boolean }>>([
    { id: 'c1', user: 'Hoàng Nam', text: 'Chào thầy Công ạ! Hôm nay học dạng bài nào ạ?', time: '19:30' },
    { id: 'c2', user: 'Thạc sĩ Bùi Văn Công', text: 'Chào Nam nhé! Hôm nay thầy hướng dẫn ma trận 5 đối tượng 45s.', time: '19:31', isTeacher: true },
    { id: 'c3', user: 'Thu Trang', text: 'Thầy cho em xin slide bài giảng này với ạ!', time: '19:32' },
    { id: 'c4', user: 'Trần Văn Hoàng', text: 'Bấm máy tính Casio 580 nhanh lắm các bạn ơi!', time: '19:33' }
  ]);
  const [inputChat, setInputChat] = useState('');
  const [remindedIds, setRemindedIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const livestreams: LivestreamItem[] = [
    {
      id: 'ls-01',
      title: 'Bí Kíp Ma Trận Logic 5 Đối Tượng & Suy Luận Mệnh Đề V-ACT 2026',
      teacherName: 'Thạc sĩ Bùi Văn Công',
      teacherAvatar: '/images/teachers/thay_bui_van_cong.png',
      teacherRole: 'Chuyên gia Luyện thi V-ACT ĐHQG TP.HCM',
      subject: 'Logic & Mệnh Đề',
      date: 'Hôm nay',
      time: '19:30 - 21:00',
      status: 'live',
      viewerCount: 1245,
      thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
      description: 'Chữa trực tiếp 15 câu Ma trận Logic Vận dụng Cao, hướng dẫn kỹ thuật trượt khối 45 giây không lo nhầm lẫn.',
      materialPdfUrl: 'https://sangsang.edu.vn/materials/logic-matran-45s.pdf'
    },
    {
      id: 'ls-02',
      title: 'Chiến Thuật Xử Lý Biểu Đồ Cột Chồng & Bảng Số Liệu Kép',
      teacherName: 'Cô Nguyễn Hương Sen',
      teacherAvatar: '/images/teachers/co_nguyen_huong_sen_avatar_1784686267819.png',
      teacherRole: 'Chuyên gia Đọc hiểu & Phân tích số liệu',
      subject: 'Phân Tích Số Liệu',
      date: 'Chủ Nhật (Tháng 3/2026)',
      time: '20:00 - 21:30',
      status: 'upcoming',
      viewerCount: 890,
      thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      description: 'Giải mã dạng bài Số liệu kinh tế tổng hợp, kỹ năng đọc lướt số liệu & loại trừ đáp án nhiễu.',
      materialPdfUrl: 'https://sangsang.edu.vn/materials/so-lieu-bieu-do-kep.pdf'
    },
    {
      id: 'ls-03',
      title: 'Toàn Tập 50 Cặp Từ Hán-Việt Dễ Sai Chính Tả Bài Thi V-ACT',
      teacherName: 'Thạc sĩ Bùi Văn Công',
      teacherAvatar: '/images/teachers/thay_bui_van_cong.png',
      teacherRole: 'Chuyên gia Luyện thi V-ACT ĐHQG TP.HCM',
      subject: 'Tiếng Việt',
      date: 'Tuần trước',
      time: 'Đã phát sóng',
      status: 'replay',
      viewerCount: 3420,
      thumbnailUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
      description: 'Phân tích từ vựng ngữ âm, thành ngữ, từ Hán Việt & quy tắc viết hoa trong đề thi chính thức các năm.',
      materialPdfUrl: 'https://sangsang.edu.vn/materials/50-tu-han-viet.pdf'
    }
  ];

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputChat.trim()) return;

    const newMsg = {
      id: `c-${Date.now()}`,
      user: 'Bạn (Học sinh)',
      text: inputChat.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, newMsg]);
    setInputChat('');
  };

  const toggleReminder = (id: string, title: string) => {
    setRemindedIds(prev => {
      const exists = prev.includes(id);
      if (exists) {
        setToastMessage(`Đã hủy nhắc nhở buổi Livestream: ${title}`);
        setTimeout(() => setToastMessage(null), 3000);
        return prev.filter(i => i !== id);
      } else {
        setToastMessage(`🔔 Đã đặt lịch nhắc nhở buổi Livestream: ${title}`);
        setTimeout(() => setToastMessage(null), 3000);
        return [...prev, id];
      }
    });
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs font-black animate-bounce-short">
            {toastMessage}
          </div>
        )}

        {/* Title Header */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-300 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              <PlayCircle className="w-4 h-4 text-rose-400 animate-pulse" />
              <span>Phòng Học Livestream Trực Tuyến Sangsang</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Livestream Chữa Đề & Giải Đáp Trực Tiếp 2026
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Tương tác trực tiếp với Thạc sĩ Bùi Văn Công và dàn Giáo viên chuyên môn Sangsang. Hỏi đáp 1-1, nhận tài liệu file PDF độc quyền!
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-xs font-bold text-slate-200 shrink-0">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>Hơn 1.200+ Thí sinh đang tham gia buổi livestream</span>
          </div>
        </div>

        {/* Active Livestream Player & Real-time Chat Section */}
        {activeLivestream && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-6 animate-fade-in">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="bg-rose-600 text-white font-mono font-black text-xs px-3 py-1 rounded-full uppercase flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span>ĐANG PHÁT LIVE</span>
                </span>
                <h2 className="text-base sm:text-lg font-black text-slate-900">{activeLivestream.title}</h2>
              </div>
              <button
                onClick={() => setActiveLivestream(null)}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
              >
                Thu gọn video
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Simulated Player View */}
              <div className="lg:col-span-8 space-y-4">
                <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center group">
                  <img src={activeLivestream.thumbnailUrl} alt="Livestream Cover" className="w-full h-full object-cover opacity-60" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                  <div className="absolute text-center space-y-3 p-4">
                    <div className="w-16 h-16 rounded-full bg-rose-600/90 text-white flex items-center justify-center mx-auto shadow-2xl border-2 border-rose-400 group-hover:scale-110 transition-transform cursor-pointer">
                      <PlayCircle className="w-8 h-8 fill-white text-rose-600" />
                    </div>
                    <div className="text-xs font-black text-white bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-700">
                      Buổi Livestream Trực Tiếp Với {activeLivestream.teacherName}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <img src={activeLivestream.teacherAvatar} alt={activeLivestream.teacherName} className="w-10 h-10 rounded-full object-cover border border-slate-300" />
                    <div>
                      <div className="text-xs font-black text-slate-900">{activeLivestream.teacherName}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{activeLivestream.teacherRole}</div>
                    </div>
                  </div>

                  {activeLivestream.materialPdfUrl && (
                    <a
                      href={activeLivestream.materialPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <Download className="w-4 h-4" />
                      <span>Tải Slide & Bài Tập (PDF)</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Interactive Live Chat Box */}
              <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 shadow-xl flex flex-col justify-between h-[420px]">
                <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                  <span className="text-xs font-black text-rose-400 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4" />
                    <span>Trò Chuyện Trực Tiếp ({chatMessages.length})</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">1.245 viewers</span>
                </div>

                {/* Messages Stream */}
                <div className="flex-1 overflow-y-auto py-3 space-y-2.5 text-xs font-medium pr-1">
                  {chatMessages.map(msg => (
                    <div key={msg.id} className={`space-y-0.5 p-2 rounded-xl ${msg.isTeacher ? 'bg-rose-500/20 border border-rose-500/40 text-rose-200' : 'bg-slate-950/80 text-slate-200'}`}>
                      <div className="flex justify-between items-center text-[10px]">
                        <strong className={msg.isTeacher ? 'text-rose-400 font-black' : 'text-slate-300 font-bold'}>{msg.user}</strong>
                        <span className="text-slate-500 font-mono">{msg.time}</span>
                      </div>
                      <p className="text-xs leading-relaxed">{msg.text}</p>
                    </div>
                  ))}
                </div>

                {/* Send Chat Form */}
                <form onSubmit={handleSendChat} className="pt-2 border-t border-slate-800 flex items-center gap-2">
                  <input
                    type="text"
                    value={inputChat}
                    onChange={(e) => setInputChat(e.target.value)}
                    placeholder="Gửi câu hỏi trực tiếp..."
                    className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-medium text-white outline-none focus:border-rose-500"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        )}

        {/* Livestream Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {livestreams.map((ls) => {
            const isReminded = remindedIds.includes(ls.id);
            return (
              <div key={ls.id} className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all">
                <div className="space-y-4">
                  <div className="relative aspect-video bg-slate-900 overflow-hidden">
                    <img src={ls.thumbnailUrl} alt={ls.title} className="w-full h-full object-cover" />
                    
                    <div className="absolute inset-0 bg-slate-950/40"></div>

                    <span className={`absolute top-3 left-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border shadow-sm ${
                      ls.status === 'live'
                        ? 'bg-rose-600 text-white border-rose-500 animate-pulse'
                        : ls.status === 'upcoming'
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}>
                      {ls.status === 'live' ? '🔴 Đang Live' : ls.status === 'upcoming' ? '🗓️ Sắp Diễn Ra' : '🎥 Phân Đoạn Replay'}
                    </span>

                    <div className="absolute bottom-3 left-3 text-xs font-mono font-black text-white bg-slate-900/80 px-2.5 py-0.5 rounded-lg border border-slate-700">
                      {ls.date} • {ls.time}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="text-[10px] font-black uppercase text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-md inline-block">
                      {ls.subject}
                    </div>

                    <h3 className="font-black text-base text-slate-900 leading-snug">{ls.title}</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{ls.description}</p>

                    <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                      <img src={ls.teacherAvatar} alt={ls.teacherName} className="w-8 h-8 rounded-full object-cover border border-slate-200" />
                      <div>
                        <div className="text-xs font-black text-slate-900">{ls.teacherName}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{ls.teacherRole}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex gap-2">
                  <button
                    onClick={() => setActiveLivestream(ls)}
                    className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>{ls.status === 'live' ? 'Vào Học Trực Tiếp' : 'Xem Lại Video'}</span>
                  </button>

                  <button
                    onClick={() => toggleReminder(ls.id, ls.title)}
                    className={`p-2.5 rounded-xl border transition-all ${
                      isReminded
                        ? 'bg-amber-100 border-amber-300 text-amber-800'
                        : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                    }`}
                    title={isReminded ? 'Đã đặt nhắc nhở' : 'Đặt lịch nhắc nhở'}
                  >
                    <Bell className={`w-4 h-4 ${isReminded ? 'fill-amber-600 text-amber-600' : ''}`} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
