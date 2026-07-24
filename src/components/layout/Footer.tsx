import React from 'react';
import { ExternalLink, ShieldCheck, Phone, Mail, MapPin, MessageSquare, FileCheck, Award, Heart, Sparkles, Compass, Users } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenDiagnostic?: () => void;
  onOpenExamLibrary?: () => void;
  onOpenTopicPractice?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenDiagnostic, onOpenExamLibrary, onOpenTopicPractice }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. Top Section: 4 Column Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Official Legal Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveTab('home')} className="focus:outline-none">
                <img 
                  src="https://storage.sangsang.edu.vn/elearning/2026/01/08/61b35b45-722a-4c9d-ba64-7cc7854882c1-b3e170a3-d9f9-4947-9f73-7be7b9b5985e-logo-full.svg" 
                  alt="Sangsang" 
                  className="h-10 w-auto bg-white/95 p-1.5 rounded-xl shadow-md"
                />
              </button>
            </div>
            
            <p className="text-sm font-extrabold text-rose-400">
              Sangsang — Giáo viên của tôi - Số 1
            </p>

            <div className="text-xs text-slate-400 space-y-2 leading-relaxed">
              <p className="font-extrabold text-white">CÔNG TY CỔ PHẦN MHNG</p>
              <p>GPKD số: <strong className="text-slate-200">0111238632</strong> (Cấp ngày: 02/10/2025 tại Sở Tài chính TP. Hà Nội)</p>
              <p className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Tầng 2 tòa nhà CT2 chung cư Yên Hòa Parkview, số 3 Vũ Phạm Hàm, P. Yên Hòa, TP. Hà Nội</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Hotline tư vấn: <strong className="text-white">0868391290</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Email hỗ trợ: <strong className="text-white">support@sangsang.edu.vn</strong></span>
              </p>
              <div className="pt-1 text-[11px] text-slate-500 font-medium">
                <span>Người đại diện: Lee Sung Gun</span> • <span>Chịu trách nhiệm nội dung: Hoàng Chí Đức</span>
              </div>
            </div>

            {/* Social Network Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61586354768301" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-rose-500/20 hover:text-rose-300 text-xs font-bold text-slate-300 border border-slate-800 transition-colors flex items-center gap-1.5"
              >
                <span>Facebook</span>
              </a>
              <a 
                href="https://zalo.me/g/dntpqtu7y3hpdwkzdnmf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-blue-500/20 hover:text-blue-300 text-xs font-bold text-blue-400 border border-slate-800 transition-colors flex items-center gap-1.5"
              >
                <span>Zalo Group</span>
              </a>
              <a 
                href="https://www.tiktok.com/@sangsang8708" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-rose-500/20 hover:text-rose-300 text-xs font-bold text-rose-400 border border-slate-800 transition-colors flex items-center gap-1.5"
              >
                <span>TikTok @sangsang8708</span>
              </a>
            </div>
          </div>

          {/* Col 2: Chẩn đoán & Thư viện Đề thi */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-rose-500 pl-2.5">
              Thi Thử & Lộ Trình V-ACT
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={onOpenDiagnostic} className="hover:text-rose-400 transition-colors text-left">
                  Bài kiểm tra chẩn đoán 20p
                </button>
              </li>
              <li>
                <button onClick={onOpenTopicPractice} className="hover:text-rose-400 font-bold text-amber-400 transition-colors text-left flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Luyện tập theo Chuyên đề</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenExamLibrary} 
                  className="hover:text-rose-400 font-bold text-rose-400 transition-colors text-left flex items-center gap-1"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Kho Đề thi thử 120 câu</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('roadmap')} className="hover:text-rose-400 transition-colors text-left">
                  Lộ trình ôn tập 4 giai đoạn
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('wrong-notebook')} className="hover:text-rose-400 transition-colors text-left">
                  Sổ câu sai (Spaced Repetition)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('university-lookup')} className="hover:text-rose-400 transition-colors text-left">
                  Tra cứu điểm chuẩn trường/ngành
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Khóa học & Đội ngũ Giáo viên */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-rose-500 pl-2.5">
              Hệ Sinh Thái Sangsang
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="https://2k9.livesctgv.sangsang.edu.vn/" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">
                  Cổng Livestream trực tiếp
                </a>
              </li>
              <li>
                <button onClick={() => setActiveTab('discussion')} className="hover:text-rose-400 transition-colors text-left flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
                  <span>Diễn đàn Hỏi đáp 24/7</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-rose-400 transition-colors text-left">
                  Các khóa học Nền tảng & Về đích
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('teachers')} className="hover:text-rose-400 transition-colors text-left">
                  Thạc sĩ Bùi Văn Công & 9 Giáo viên
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('pricing')} className="hover:text-rose-400 transition-colors text-left">
                  Bảng giá khóa học & Mentor 1-on-1
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Chính sách & Bộ Công Thương */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-rose-500 pl-2.5">
              Chính Sách & Pháp Lý
            </h4>
            <ul className="space-y-2.5 text-xs font-medium mb-4">
              <li>
                <a href="https://storage.sangsang.edu.vn/sangsang-public/pages/B1.%20%C4%90i%E1%BB%81u%20kho%E1%BA%A3n%20v%C3%A0%20quy%20%C4%91%E1%BB%8Bnh%20chung.html" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">
                  Điều khoản và quy định chung
                </a>
              </li>
              <li>
                <a href="https://storage.sangsang.edu.vn/sangsang-public/pages/B2.%20Ch%C3%ADnh%20s%C3%A1ch%20b%E1%BA%A3o%20m%E1%BA%ADt%20th%C3%B4ng%20tin.html" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">
                  Chính sách bảo mật thông tin
                </a>
              </li>
              <li>
                <a href="https://storage.sangsang.edu.vn/sangsang-public/pages/B3.%20H%C3%ACnh%20th%E1%BB%A9c%20thanh%20to%C3%A1n.html" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">
                  Phương thức thanh toán
                </a>
              </li>
              <li>
                <a href="https://storage.sangsang.edu.vn/sangsang-public/pages/B5.%20Ch%C3%ADnh%20s%C3%A1ch%20b%E1%BA%A3o%20h%C3%A0nh%20v%C3%A0%20%C4%91%E1%BB%95i%20tr%E1%BA%A3.html" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">
                  Chính sách đổi trả & hoàn tiền
                </a>
              </li>
            </ul>

            {/* Ministry Badge */}
            <a href="http://online.gov.vn/Home/WebDetails/141988" target="_blank" rel="noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <img 
                src="https://storage.sangsang.edu.vn/sangsang-public/logo-da-thong-bao-bo-cong-thuong-mau-xanh.png" 
                alt="Đã thông báo Bộ Công Thương" 
                className="w-40 h-auto"
              />
            </a>
          </div>

        </div>

        {/* 2. Middle Section: Official About Us & Brand Story Section */}
        <div className="bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-900 p-8 rounded-3xl border border-rose-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <img 
              src="https://storage.sangsang.edu.vn/elearning/2025/12/19/3d2e22c0-6424-445d-8d3e-8bd7d7ac6b37-icon-ss.svg" 
              alt="Icon SS" 
              className="w-80 h-80"
            />
          </div>

          <div className="relative z-10 space-y-6">
            
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-rose-500/20 pb-5">
              <div className="flex items-center gap-3">
                <span className="w-2 h-8 bg-rose-500 rounded-full"></span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                    Về Chúng Tôi — Sangsang.edu.vn
                  </h3>
                  <p className="text-xs text-rose-300 font-semibold">Giáo viên của tôi - Số 1 • Nền tảng luyện thi ĐGNL 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Nền tảng học tập trao quyền</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Col 1: About Us & Mission */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                  <Compass className="w-4 h-4 text-rose-400" />
                  <span>Hành Trình Kết Nối Tri Thức</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tại <strong className="text-white">Sangsang</strong>, mỗi ngày trôi qua đều là một hành trình kết nối tri thức đầy đam mê. Chúng tôi tự hào là cầu nối tin cậy, mang đến những khóa học và dịch vụ giáo dục chất lượng cao, giúp xóa bỏ mọi rào cản về khoảng cách.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Với hệ sinh thái vận hành <strong className="text-rose-400">24/7</strong>, Sangsang cho phép học sinh gặp gỡ những giáo viên tâm huyết vào bất cứ lúc nào. Đây là không gian để thầy cô tỏa sáng và học trò bứt phá.
                </p>
              </div>

              {/* Col 2: Learning Partner */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-rose-400" />
                  <span>Đối Tác Đồng Hành (Learning Partner)</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tại Sangsang, chúng tôi tin rằng: <strong className="text-amber-300">"Không có học sinh yếu, chỉ có học sinh chưa tìm được giáo viên phù hợp."</strong>
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Giáo viên không chỉ là người truyền đạt kiến thức, mà là một đối tác đồng hành thấu hiểu, khích lệ và cùng học sinh chinh phục mục tiêu 850+ V-ACT ĐHQG TP.HCM.
                </p>
              </div>

              {/* Col 3: Platform Value */}
              <div className="space-y-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-rose-400" />
                  <span>Khởi Nguồn Cảm Hứng Mỗi Ngày</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0 mt-1.5"></span>
                    <span><strong className="text-white">Với Học sinh:</strong> Tiếp cận phương pháp luyện thi hiện đại, bám sát ma trận 2026.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0 mt-1.5"></span>
                    <span><strong className="text-white">Với Giáo viên:</strong> Nơi xây dựng thương hiệu cá nhân và đồng hành cùng thế hệ học trò xuất sắc.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* 3. Bottom Section: Legal Disclaimer Box & Copyright */}
        <div className="pt-2 pb-4 text-xs text-slate-400 space-y-3">
          <div className="bg-slate-900/90 p-4.5 rounded-2xl border border-slate-800 leading-relaxed space-y-1">
            <div className="font-bold text-slate-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-400" />
              <span>Tuyên bố độc lập thương hiệu Sangsang</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Sangsang (sangsang.edu.vn) thuộc CÔNG TY CỔ PHẦN MHNG. Đây là nền tảng giáo dục độc lập, không phải website chính thức của Đại học Quốc gia TP.HCM (ĐHQG-HCM). Điểm số dự báo là chỉ số ước tính thống kê cá nhân hóa và không cấu thành kết quả thi chính thức.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-slate-500 pt-2 gap-2 text-[11px]">
            <div>© 2026 Sangsang (sangsang.edu.vn). Tất cả quyền được bảo lưu.</div>
            <div className="flex items-center gap-3">
              <span>GPKD 0111238632</span>
              <span>•</span>
              <span>Đã thông báo Bộ Công Thương</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
