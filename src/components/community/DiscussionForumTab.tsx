import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Send, CheckCircle2, User, Search, Filter, Sparkles, Award } from 'lucide-react';

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
  const [newTitle, setNewTitle] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('Logic');
  const [isAsking, setIsAsking] = useState<boolean>(false);

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
      answersCount: 0,
      isAnsweredByTeacher: false
    }
  ]);

  const handlePostQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newItem: DiscussionItem = {
      id: `d-${Date.now()}`,
      author: 'Học sinh Sangsang (Bạn)',
      authorRole: 'student',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      subject: selectedSubject,
      questionTitle: newTitle,
      questionContent: newContent,
      timestamp: 'Vừa xong',
      upvotes: 1,
      answersCount: 0,
      isAnsweredByTeacher: false
    };

    setDiscussions([newItem, ...discussions]);
    setNewTitle('');
    setNewContent('');
    setIsAsking(false);
  };

  const handleUpvote = (id: string) => {
    setDiscussions(prev => prev.map(d => d.id === id ? { ...d, upvotes: d.upvotes + 1 } : d));
  };

  const filteredDiscussions = discussions.filter(d => {
    const matchSubject = activeSubject === 'all' || d.subject === activeSubject;
    const matchSearch = d.questionTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        d.questionContent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSubject && matchSearch;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Cộng đồng Hỏi Đáp Sangsang 24/7
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-rose-500" />
            <span>Diễn Đàn Hỏi Đáp Cùng Thầy Bùi Văn Công & Trợ Giảng</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">Nơi giải đáp 100% thắc mắc tư duy bài tập V-ACT trong vòng 15 phút</p>
        </div>

        <button
          onClick={() => setIsAsking(!isAsking)}
          className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow-md transition-colors flex items-center gap-2 shrink-0"
        >
          <Sparkles className="w-4 h-4 text-amber-200" />
          <span>{isAsking ? 'Đóng khung đặt câu hỏi' : 'Đặt câu hỏi mới'}</span>
        </button>
      </div>

      {/* Post Question Form */}
      {isAsking && (
        <form onSubmit={handlePostQuestion} className="p-5 bg-rose-50/50 rounded-2xl border border-rose-200 space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Tiêu đề câu hỏi *</label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="VD: Mẹo giải nhanh câu suy luận mệnh đề 4 đối tượng?"
                className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-rose-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phân môn *</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-rose-500 outline-none"
              >
                <option value="Logic">Tư duy Logic</option>
                <option value="Toán">Toán học V-ACT</option>
                <option value="Số liệu">Phân tích số liệu</option>
                <option value="Vật lý">Vật lý 12</option>
                <option value="Hóa học">Hóa học 12</option>
                <option value="Sinh học">Sinh học 12</option>
                <option value="Lịch sử">Lịch sử V-ACT</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Nội dung chi tiết thắc mắc *</label>
            <textarea
              required
              rows={3}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Mô tả chi tiết câu hỏi hoặc chụp đề bài để nhận trợ giúp từ Thầy Cô..."
              className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:ring-2 focus:ring-rose-500 outline-none"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAsking(false)}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-colors"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-extrabold rounded-xl shadow transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Gửi câu hỏi tới Thầy Bùi Văn Công</span>
            </button>
          </div>
        </form>
      )}

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {['all', 'Logic', 'Toán', 'Số liệu', 'Vật lý', 'Hóa học', 'Sinh học'].map((subj) => (
            <button
              key={subj}
              onClick={() => setActiveSubject(subj)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                activeSubject === subj
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {subj === 'all' ? 'Tất cả chủ đề' : subj}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm thảo luận..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredDiscussions.map((item) => (
          <div key={item.id} className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-rose-200 shadow-sm transition-all space-y-3">
            
            {/* User Meta */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt={item.author} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                <div>
                  <div className="text-xs font-bold text-slate-900">{item.author}</div>
                  <div className="text-[10px] text-slate-500">{item.timestamp} • <span className="font-semibold text-rose-600">{item.subject}</span></div>
                </div>
              </div>

              <button
                onClick={() => handleUpvote(item.id)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-xs font-bold text-slate-600 transition-colors"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{item.upvotes}</span>
              </button>
            </div>

            {/* Question Body */}
            <div>
              <h3 className="text-sm font-bold text-slate-900">{item.questionTitle}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.questionContent}</p>
            </div>

            {/* Verified Teacher Answer Block (If answered) */}
            {item.isAnsweredByTeacher && item.teacherAnswer && (
              <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl space-y-2 mt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={item.teacherAnswer.teacherAvatar} alt={item.teacherAnswer.teacherName} className="w-7 h-7 rounded-full object-cover border border-emerald-400" />
                    <div>
                      <div className="text-xs font-extrabold text-emerald-900 flex items-center gap-1">
                        <span>{item.teacherAnswer.teacherName}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                      </div>
                      <div className="text-[10px] text-emerald-700 font-medium">Giải đáp chính thức từ Sangsang • {item.teacherAnswer.timestamp}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded-full">
                    Đã duyệt đáp án
                  </span>
                </div>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed pl-9">
                  {item.teacherAnswer.answerContent}
                </p>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
};
