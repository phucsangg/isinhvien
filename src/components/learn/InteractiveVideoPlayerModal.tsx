import React, { useState, useRef } from 'react';
import { Modal } from '../common/Modal';
import { Play, Pause, RotateCcw, Bookmark, FileText, Download, Clock, Sparkles, Video, Film, Search, ChevronRight } from 'lucide-react';

interface InteractiveVideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
  teacherName: string;
  subject: string;
}

interface TranscriptLine {
  timeSeconds: number;
  timeLabel: string;
  speaker: string;
  text: string;
}

interface VideoCourseItem {
  id: string;
  name: string;
  url: string;
  topic: string;
  transcripts: TranscriptLine[];
}

export const InteractiveVideoPlayerModal: React.FC<InteractiveVideoPlayerModalProps> = ({
  isOpen,
  onClose,
  teacherName,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Dedicated Smart Transcripts for ALL 5 Real GitHub MP4 Videos of Thầy Bùi Văn Công
  const repoVideos: VideoCourseItem[] = [
    {
      id: 'v1',
      name: 'Bài 1: Chiến thuật giải ma trận Logic 45 giây',
      url: 'https://raw.githubusercontent.com/tomyrese/buivancong/main/src/videos/1.mp4',
      topic: 'Tư duy Logic & Mệnh đề',
      transcripts: [
        { timeSeconds: 5, timeLabel: '00:05', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Chào mừng các em đến với bài phân tích cấu trúc Đề mẫu ĐGNL ĐHQG TP.HCM 2026.' },
        { timeSeconds: 15, timeLabel: '00:15', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Trong phần tư duy Logic, câu hỏi dạng kéo theo P suy ra Q chiếm 30% tổng số câu.' },
        { timeSeconds: 32, timeLabel: '00:32', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Mẹo 45 giây: Luôn dùng mệnh đề phản đảo tương đương ~Q suy ra ~P để loại ngay 2 phương án nhiễu.' },
        { timeSeconds: 55, timeLabel: '00:55', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Lập sơ đồ vị trí 5 bạn: Cố định vị trí tuyệt đối trước, sau đó trượt nhóm liền kề Q-R vào ô trống.' }
      ]
    },
    {
      id: 'v2',
      name: 'Bài 2: Phương pháp đọc vị số liệu biểu đồ cột',
      url: 'https://raw.githubusercontent.com/tomyrese/buivancong/main/src/videos/2.mp4',
      topic: 'Phân tích Số liệu',
      transcripts: [
        { timeSeconds: 4, timeLabel: '00:04', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Hôm nay thầy sẽ chỉ ra 3 lỗi sai phổ biến nhất khi đọc biểu đồ cột ghép trong đề V-ACT.' },
        { timeSeconds: 20, timeLabel: '00:20', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Đề bài hỏi tốc độ tăng trưởng liên hoàn hay tốc độ tăng so với năm gốc? Hãy gạch chân từ khóa gốc!' },
        { timeSeconds: 45, timeLabel: '00:45', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Bấm máy tính Casio: Dùng phím Answ/100 để tính chênh lệch phần trăm trong 10 giây.' }
      ]
    },
    {
      id: 'v3',
      name: 'Bài 3: Tư duy suy luận khoa học Vật lý & Hóa học',
      url: 'https://raw.githubusercontent.com/tomyrese/buivancong/main/src/videos/3.mp4',
      topic: 'Suy luận Khoa học',
      transcripts: [
        { timeSeconds: 6, timeLabel: '00:06', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Phần Suy luận Khoa học không yêu cầu học vẹt mà đòi hỏi khả năng đọc hiểu ngữ cảnh thí nghiệm.' },
        { timeSeconds: 28, timeLabel: '00:28', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Vật lý nhiệt: Thí nghiệm Brown chứng minh các phân tử nước chuyển động nhiệt va chạm không đối xứng.' },
        { timeSeconds: 50, timeLabel: '00:50', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Hóa học thí nghiệm: Nhỏ từ từ axit HCl vào hỗn hợp muối cacbonat, khí CO2 chỉ thoát ra sau khi hết CO3(2-).' }
      ]
    },
    {
      id: 'v4',
      name: 'Bài 4: Bẫy tâm lý phổ biến trong đề thi V-ACT',
      url: 'https://raw.githubusercontent.com/tomyrese/buivancong/main/src/videos/4.mp4',
      topic: 'Kỹ năng làm bài',
      transcripts: [
        { timeSeconds: 5, timeLabel: '00:05', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Phân bổ thời gian 150 phút: Đừng dành quá 2 phút cho 1 câu hỏi Logic chưa có hướng giải.' },
        { timeSeconds: 25, timeLabel: '00:25', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Nguyên tắc nhảy câu: Đánh dấu nháp, làm hết 1 lượt các câu thế mạnh để chốt chắc 700+ điểm trước.' },
        { timeSeconds: 48, timeLabel: '00:48', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Bẫy đọc sót từ "KHÔNG": Luôn gạch chân từ phủ định trong câu hỏi Tiếng Việt và Khoa học.' }
      ]
    },
    {
      id: 'v5',
      name: 'Bài 5: Tổng ôn ma trận bài tập phân hóa cao',
      url: 'https://raw.githubusercontent.com/tomyrese/buivancong/main/src/videos/5.mp4',
      topic: 'Tổng ôn Về đích 850+',
      transcripts: [
        { timeSeconds: 8, timeLabel: '00:08', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Các câu hỏi lấy điểm 850+ thường kết hợp cả Toán học ứng dụng và bảng thống kê thực tế.' },
        { timeSeconds: 30, timeLabel: '00:30', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Bài toán tối ưu hóa lợi nhuận: Đỉnh parabol P\'(x) = 0 cho ta số lượng sản phẩm cần bán ra.' },
        { timeSeconds: 52, timeLabel: '00:52', speaker: 'Thạc sĩ Bùi Văn Công', text: 'Chúc các em học sinh Sangsang luyện tập kiên trì và bứt phá điểm số tối đa!' }
      ]
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState<VideoCourseItem>(repoVideos[0]);
  const [activeTab, setActiveTab] = useState<'transcript' | 'notes'>('transcript');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [notes, setNotes] = useState<Array<{ id: string; timestamp: string; content: string }>>([
    { id: '1', timestamp: '00:15', content: 'Ghi nhớ công thức tính nhanh số câu đúng phần Logic mệnh đề kéo theo (P -> Q tương đương ~Q -> ~P).' },
    { id: '2', timestamp: '00:32', content: 'Mẹo 30 giây: Đối với bài toán biểu đồ tròn, ưu tiên tính tỷ trọng % tổng thể trước.' }
  ]);
  const [newNoteText, setNewNoteText] = useState('');

  const handleSeekTo = (timeSeconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeSeconds;
      videoRef.current.play();
    }
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;
    const timeFormatted = '00:30';
    setNotes(prev => [...prev, { id: Date.now().toString(), timestamp: timeFormatted, content: newNoteText }]);
    setNewNoteText('');
  };

  const handleExportNotes = () => {
    const textContent = `GHI CHÚ BÀI GIẢNG SANGSANG V-ACT\nBài: ${selectedVideo.name}\nGiáo viên: ${teacherName}\n` + 
      notes.map(n => `[${n.timestamp}] ${n.content}`).join('\n');
    
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ghi_chu_Sangsang_${Date.now()}.txt`;
    link.click();
  };

  const filteredTranscripts = selectedVideo.transcripts.filter(t => 
    t.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.speaker.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Bài Giảng & Smart Transcript — Thầy Bùi Văn Công`}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        
        {/* Real MP4 Video Player directly streaming from tomyrese/buivancong repository */}
        <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
          <video
            ref={videoRef}
            key={selectedVideo.id}
            controls
            autoPlay
            playsInline
            controlsList="nodownload"
            className="w-full h-full object-contain bg-black"
            src={selectedVideo.url}
          >
            Trình duyệt của bạn không hỗ trợ phát MP4.
          </video>
        </div>

        {/* Video Selector Buttons from GitHub repo list */}
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <Film className="w-4 h-4" />
              <span>Danh sách 5 Video bài giảng gốc Thầy Bùi Văn Công</span>
            </span>
            <span className="text-[11px] text-slate-400">Chủ đề: <strong className="text-emerald-400">{selectedVideo.topic}</strong></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {repoVideos.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVideo(v)}
                className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center gap-2 ${
                  selectedVideo.id === v.id
                    ? 'bg-rose-500 text-white border-rose-400 shadow-md'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                }`}
              >
                <Video className="w-4 h-4 shrink-0" />
                <span className="truncate">{v.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Controls: Smart Transcript vs Smart Notes */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-4">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('transcript')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'transcript' ? 'bg-rose-500 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Smart Transcript ({selectedVideo.transcripts.length} mốc)</span>
              </button>

              <button
                onClick={() => setActiveTab('notes')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'notes' ? 'bg-rose-500 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Ghi chú cá nhân ({notes.length})</span>
              </button>
            </div>

            {activeTab === 'transcript' && (
              <div className="relative w-full sm:w-56">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm từ khóa trong lời thoại..."
                  className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
            )}

            {activeTab === 'notes' && (
              <button
                onClick={handleExportNotes}
                className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-rose-500" />
                <span>Xuất ghi chú TXT</span>
              </button>
            )}
          </div>

          {/* Interactive Smart Transcript Tab (Click timestamp to jump video!) */}
          {activeTab === 'transcript' && (
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              <div className="text-[11px] text-slate-500 font-semibold mb-2">
                💡 Bấm vào mốc thời gian màu đỏ để nhảy trực tiếp đoạn video tương ứng:
              </div>
              {filteredTranscripts.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => handleSeekTo(item.timeSeconds)}
                  className="p-3 bg-white hover:bg-rose-50/60 rounded-xl border border-slate-200 hover:border-rose-300 transition-all cursor-pointer flex items-start gap-3 group"
                >
                  <button className="px-2 py-1 bg-rose-100 group-hover:bg-rose-500 text-rose-700 group-hover:text-white font-mono font-bold rounded text-xs shrink-0 flex items-center gap-1 transition-colors">
                    <Clock className="w-3 h-3" />
                    <span>[{item.timeLabel}]</span>
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-slate-400 group-hover:text-rose-600 transition-colors">
                      {item.speaker}
                    </div>
                    <div className="text-xs font-medium text-slate-800 leading-relaxed mt-0.5">
                      {item.text}
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                </div>
              ))}
            </div>
          )}

          {/* Smart Notes Tab */}
          {activeTab === 'notes' && (
            <div className="space-y-3">
              <form onSubmit={handleAddNote} className="flex gap-2">
                <input
                  type="text"
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Nhập ghi chú cá nhân tại thời điểm xem video..."
                  className="flex-1 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-rose-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-extrabold rounded-xl shadow transition-colors shrink-0"
                >
                  Lưu ghi chú
                </button>
              </form>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {notes.map((n) => (
                  <div key={n.id} className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3 text-xs">
                    <span className="px-2 py-0.5 bg-rose-100 text-rose-700 font-mono font-bold rounded text-[11px] shrink-0">
                      {n.timestamp}
                    </span>
                    <p className="text-slate-800 font-medium flex-1">{n.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </Modal>
  );
};
