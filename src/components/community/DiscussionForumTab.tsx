import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Send, CheckCircle2, User, Search, Filter, Sparkles, Award, Plus, X, ShieldCheck } from 'lucide-react';
import { Modal } from '../common/Modal';

interface DiscussionItem {
  id: string;
  author: string;
  authorRole: 'student' | 'teacher' | 'assistant';
  avatar: string;
  subject: string;
  questionTitle: string;
  questionContent: string;
  timestamp: string;
  upvotes: number;
  isUpvoted?: boolean;
  answersCount: number;
  isAnsweredByTeacher: boolean;
  teacherAnswer?: {
    teacherName: string;
    teacherAvatar: string;
    answerContent: string;
    timestamp: string;
  };
}

export const DiscussionForumTab: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [teacherOnly, setTeacherOnly] = useState<boolean>(false);
  
  // Ask Question Modal State
  const [isAsking, setIsAsking] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('Logic');

  const [discussions, setDiscussions] = useState<DiscussionItem[]>([
    {
      id: 'd-01',
      author: 'Hoàng Nam (ĐH Bách Khoa target)',
      authorRole: 'student',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      subject: 'Logic',
      questionTitle: 'Thầy Công cho em hỏi cách xử lý nhanh câu suy luận mệnh đề 4 đối tượng?',
      questionContent: 'Em hay bị rối khi gặp bài toán xếp hàng 5 bạn có điều kiện liên tiếp. Có mẹo vẽ bảng nào nhanh trong 45 giây không ạ?',
      timestamp: '15 phút trước',
      upvotes: 18,
      answersCount: 1,
      isAnsweredByTeacher: true,
      teacherAnswer: {
        teacherName: 'Thạc sĩ Bùi Văn Công',
        teacherAvatar: '/images/teachers/thay_bui_van_cong.png',
        answerContent: 'Em lập ma trận 2 chiều (Vị trí x Tên). Ưu tiên điền ngay các vị trí cố định tuyệt đối (VD: T ở vị trí 3), sau đó dùng khối liền kề (Q-R) để trượt vào ô trống còn lại nhé!',
        timestamp: '10 phút trước'
      }
    },
    {
      id: 'd-02',
      author: 'Thu Trang (ĐH Y Dược target)',
      authorRole: 'student',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      subject: 'Sinh học',
      questionTitle: 'Phân biệt xác suất cây thuần chủng trong số thân cao?',
      questionContent: 'Thầy cho em hỏi khi đề bảo "trong số các cây thân cao ở F1" thì chia cho 3 hay chia cho 4 ạ?',
      timestamp: '2 giờ trước',
      upvotes: 12,
      answersCount: 1,
      isAnsweredByTeacher: true,
      teacherAnswer: {
        teacherName: 'Thầy Đỗ Tuấn (Sangsang Master)',
        teacherAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        answerContent: 'Vì điều kiện đã thu hẹp "trong số cây thân cao" (gồm 1AA : 2Aa = 3 phần), nên em phải chia cho 3 (xác suất AA = 1/3) thay vì chia toàn bộ F1 (4 phần) nhé!',
        timestamp: '1 giờ trước'
      }
    },
    {
      id: 'd-03',
      author: 'Lê Minh Đức (ĐH Kinh Tế target)',
      authorRole: 'student',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
      subject: 'Số liệu',
      questionTitle: 'Công thức tính nhanh tốc độ tăng trưởng liên hoàn biểu đồ cột?',
      questionContent: 'Cho em xin công thức chuẩn để bấm máy tính Casio bài phân tích tốc độ tăng trưởng số liệu với ạ.',
      timestamp: '4 giờ trước',
      upvotes: 9,
      answersCount: 1,
      isAnsweredByTeacher: true,
      teacherAnswer: {
        teacherName: 'Thạc sĩ Bùi Văn Công',
        teacherAvatar: '/images/teachers/thay_bui_van_cong.png',
        answerContent: 'Tốc độ tăng trưởng liên hoàn = (Giá trị năm T / Giá trị năm T-1 - 1) x 100%. Em bấm phím Ans/Prev trên máy Casio 580 là ra kết quả ngay.',
        timestamp: '3 giờ trước'
      }
    }
  ]);

  const handleToggleUpvote = (id: string) => {
    setDiscussions(prev => prev.map(d => {
      if (d.id === id) {
        const nextUpvoted = !d.isUpvoted;
        return {
          ...d,
          isUpvoted: nextUpvoted,
          upvotes: nextUpvoted ? d.upvotes + 1 : d.upvotes - 1
        };
      }
      return d;
    }));
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newItem: DiscussionItem = {
      id: `d-${Date.now()}`,
      author: 'Bạn (Học sinh Sangsang)',
      authorRole: 'student',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      subject: selectedSubject,
      questionTitle: newTitle,
      questionContent: newContent,
      timestamp: 'Vừa xong',
      upvotes: 1,
      isUpvoted: true,
      answersCount: 0,
      isAnsweredByTeacher: false
    };

    setDiscussions([newItem, ...discussions]);
    setNewTitle('');
    setNewContent('');
    setIsAsking(false);
  };

  const filteredDiscussions = discussions.filter(item => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.questionTitle.toLowerCase().includes(q) || 
      item.questionContent.toLowerCase().includes(q);

    const matchesSubject = activeSubject === 'all' || item.subject === activeSubject;
    const matchesTeacher = !teacherOnly || item.isAnsweredByTeacher;

    return matchesSearch && matchesSubject && matchesTeacher;
  });

  return (
    <div className="py-8 bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-300 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Diễn Đàn Hỏi Đáp V-ACT 24/7</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Hỏi Đáp Trực Tiếp Với Thầy Cô & Thủ Khoa
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Đặt câu hỏi bài tập khó, thắc mắc đáp án hoặc xin mẹo bấm máy tính Casio. Đội ngũ Thạc sĩ Bùi Văn Công giải đáp trực tiếp!
            </p>
          </div>

          <button
            onClick={() => setIsAsking(true)}
            className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-xs font-black shadow-lg shadow-rose-600/30 flex items-center gap-2 transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Đặt Câu Hỏi Mới</span>
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm câu hỏi theo chủ đề, từ khóa..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-2xl text-xs font-bold text-slate-900 focus:border-rose-500 focus:bg-white outline-none shadow-sm placeholder:text-slate-400"
            />
          </div>

          {/* Subject Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'Logic', label: '🧠 Logic' },
              { id: 'Số liệu', label: '📊 Số liệu' },
              { id: 'Tiếng Việt', label: '📖 Tiếng Việt' },
              { id: 'Sinh học', label: '🧬 Sinh học' }
            ].map(sub => (
              <button
                key={sub.id}
                onClick={() => setActiveSubject(sub.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeSubject === sub.id
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Teacher Answered Filter Toggle */}
          <button
            onClick={() => setTeacherOnly(!teacherOnly)}
            className={`px-3.5 py-2 rounded-xl text-xs font-black border transition-all flex items-center gap-1.5 ${
              teacherOnly
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300 shadow-sm'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Có lời giải Thầy Cô</span>
          </button>

        </div>

        {/* Discussions List */}
        <div className="space-y-4">
          {filteredDiscussions.length > 0 ? (
            filteredDiscussions.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 transition-all">
                
                {/* Author & Subject Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.author} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                    <div>
                      <div className="text-xs font-black text-slate-900">{item.author}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{item.timestamp}</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-black uppercase text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-lg font-mono">
                    {item.subject}
                  </span>
                </div>

                {/* Question Title & Content */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-slate-900 leading-snug">{item.questionTitle}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.questionContent}</p>
                </div>

                {/* Teacher Official Answer Box */}
                {item.teacherAnswer && (
                  <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 space-y-2 shadow-inner">
                    <div className="flex items-center gap-2 text-xs font-black text-emerald-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{item.teacherAnswer.teacherName} (Giáo viên Sangsang)</span>
                      <span className="text-[10px] text-slate-400 font-normal">({item.teacherAnswer.timestamp})</span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium leading-relaxed pl-6">
                      "{item.teacherAnswer.answerContent}"
                    </p>
                  </div>
                )}

                {/* Actions Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleToggleUpvote(item.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all font-bold ${
                        item.isUpvoted
                          ? 'bg-rose-50 text-rose-600 border-rose-200 font-black'
                          : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${item.isUpvoted ? 'fill-rose-600 text-rose-600' : ''}`} />
                      <span>{item.upvotes} Hữu ích</span>
                    </button>

                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{item.answersCount} Phản hồi</span>
                    </span>
                  </div>

                  {item.isAnsweredByTeacher && (
                    <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Đã giải đáp</span>
                    </span>
                  )}
                </div>

              </div>
            ))
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center text-slate-500 space-y-2 border border-slate-200">
              <div className="text-base font-bold text-slate-800">Không tìm thấy câu hỏi phù hợp</div>
              <p className="text-xs">Hãy thử đổi từ khóa tìm kiếm hoặc bấm nút đặt câu hỏi mới!</p>
            </div>
          )}
        </div>

      </div>

      {/* ASK QUESTION MODAL */}
      {isAsking && (
        <Modal
          isOpen={isAsking}
          onClose={() => setIsAsking(false)}
          title="Đặt Câu Hỏi Cho Giáo Viên & Thủ Khoa V-ACT"
          maxWidth="max-w-lg"
        >
          <form onSubmit={handleAddQuestion} className="space-y-4 py-2">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                Môn học / Chuyên đề:
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-rose-500"
              >
                <option value="Logic">🧠 Logic & Suy luận Mệnh đề</option>
                <option value="Số liệu">📊 Phân tích Số liệu / Biểu đồ</option>
                <option value="Tiếng Việt">📖 Tiếng Việt & Đọc hiểu</option>
                <option value="Sinh học">🧬 Sinh học & Khoa học</option>
                <option value="Toán học">📐 Toán học ứng dụng</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                Tiêu đề câu hỏi:
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="VD: Cách giải nhanh dạng bài biểu đồ cột chồng 2026..."
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:border-rose-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                Chi tiết thắc mắc:
              </label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Mô tả chi tiết câu hỏi hoặc bước bị vướng..."
                className="w-full h-32 p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 outline-none focus:border-rose-500 resize-none"
                required
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAsking(false)}
                className="w-1/3 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
              >
                Hủy
              </button>

              <button
                type="submit"
                className="w-2/3 py-3 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>Gửi câu hỏi ngay</span>
              </button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};
