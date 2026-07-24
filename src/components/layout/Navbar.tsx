import React, { useState } from 'react';
import { Sparkles, ChevronDown, Menu, X, User, Compass, BookOpen, Target, Award, Users, Search, HelpCircle, Radio, MessageSquare, UserCheck, LogOut, LayoutDashboard, RotateCcw, FileCheck } from 'lucide-react';
import { UserProfile } from '../../services/auth-service';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDiagnostic: () => void;
  isLoggedIn: boolean;
  onOpenAuth: () => void;
  onOpenExamLibrary: () => void;
  onOpenTopicPractice?: () => void;
  currentUser?: UserProfile | null;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenDiagnostic,
  isLoggedIn,
  onOpenAuth,
  onOpenExamLibrary,
  onOpenTopicPractice,
  currentUser,
  onLogout,
}) => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userInitial = currentUser?.fullname ? currentUser.fullname.charAt(0).toUpperCase() : 'S';

  const navLinks = [
    { id: 'roadmap', label: 'Lộ trình' },
    { id: 'courses', label: 'Khóa học' },
    { id: 'livestream', label: 'Livestream', isExternal: true, href: 'https://2k9.livesctgv.sangsang.edu.vn/' },
    { id: 'knowledge', label: 'Tài liệu & Bài viết' },
  ];

  const exploreLinks = [
    { id: 'topic-practice', label: 'Luyện tập theo Chuyên đề', icon: Target, desc: 'Luyện sâu từng môn: Toán, Tiếng Việt, Tiếng Anh, Logic' },
    { id: 'exam-library', label: 'Kho Đề thi thử V-ACT 120 câu', icon: FileCheck, desc: 'Bộ đề thi thử ma trận chuẩn ĐHQG TP.HCM 2026' },
    { id: 'discussion', label: 'Diễn đàn Hỏi đáp 24/7', icon: MessageSquare, desc: 'Hỏi đáp bài tập trực tiếp với Thầy Bùi Văn Công' },
    { id: 'university-lookup', label: 'Tra cứu trường & ngành', icon: Search, desc: 'So sánh điểm chuẩn V-ACT 2023-2025' },
    { id: 'teachers', label: 'Giáo viên của tôi', icon: Users, desc: 'Thầy cô uy tín số 1 Sangsang' },
    { id: 'parent-dash', label: 'Góc Phụ huynh', icon: Target, desc: 'Báo cáo tiến bộ định kỳ của con' },
    { id: 'faq', label: 'Hỏi đáp V-ACT', icon: HelpCircle, desc: 'Giải đáp thắc mắc kỳ thi & lộ trình' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full gap-4">
          
          {/* Left Container: Clean Official Sangsang Logo */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center cursor-pointer focus:outline-none hover:opacity-90 transition-opacity shrink-0"
            aria-label="Về trang chủ Sangsang"
          >
            <img 
              src="https://storage.sangsang.edu.vn/elearning/2026/01/08/f561a8c3-6052-4314-85b5-f7c619a1381e-b3e170a3-d9f9-4947-9f73-7be7b9b5985e-logo-full.svg" 
              alt="Sangsang Logo" 
              className="h-9 sm:h-10 w-auto"
            />
          </button>

          {/* Center Container: Centered Navigation Menu Links Only */}
          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-6 flex-1">
            {navLinks.map((link) => {
              if (link.isExternal) {
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50/60 rounded-xl transition-colors whitespace-nowrap"
                  >
                    <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
                    <span>{link.label}</span>
                  </a>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-xl transition-colors whitespace-nowrap ${
                    activeTab === link.id
                      ? 'text-rose-600 bg-rose-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Submenu Dropdown: Khám phá */}
            <div className="relative">
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl transition-colors whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-rose-500" />
                <span>Khám phá</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExploreOpen ? 'rotate-180' : ''}`} />
              </button>

              {isExploreOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn"
                  onMouseLeave={() => setIsExploreOpen(false)}
                >
                  <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Hệ sinh thái Sangsang V-ACT
                  </div>
                  {exploreLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setIsExploreOpen(false);
                        setActiveTab(item.id);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-start gap-3 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                          <span>{item.label}</span>
                          {item.id === 'exam-library' && <span className="bg-rose-100 text-rose-700 text-[10px] font-extrabold px-1.5 py-0.2 rounded">MỚI</span>}
                        </div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Zone: CTA Button + Sleek User Avatar Button */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Prominent Red CTA Button */}
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-bold text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 rounded-xl shadow-md shadow-rose-500/25 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 h-10"
            >
              <Sparkles className="w-4 h-4 text-amber-200 shrink-0" />
              <span>Kiểm tra miễn phí</span>
            </button>

            {/* Clean Round User Avatar Button */}
            {isLoggedIn ? (
              <div className="relative shrink-0">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-1.5 p-1 pr-2 rounded-full border border-slate-200 hover:border-rose-300 hover:bg-rose-50/50 transition-all focus:outline-none"
                  title={currentUser?.fullname || 'Tài khoản học sinh'}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-rose-600 text-white flex items-center justify-center font-black text-sm shadow-sm ring-2 ring-white">
                    {userInitial}
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-600 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn"
                    onMouseLeave={() => setIsUserMenuOpen(false)}
                  >
                    <div className="px-4 py-2.5 border-b border-slate-100 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-sm shrink-0">
                        {userInitial}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-slate-900 truncate">{currentUser?.fullname || 'Học sinh Sangsang'}</div>
                        <div className="text-[11px] text-slate-500 truncate">{currentUser?.email}</div>
                      </div>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => {
                          setActiveTab('profile');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 text-xs font-bold text-slate-700 transition-colors"
                      >
                        <UserCheck className="w-4 h-4 text-rose-500" />
                        <span>Trang cá nhân & Hồ sơ</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveTab('student-dash');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 text-xs font-bold text-slate-700 transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4 text-blue-500" />
                        <span>Dashboard làm nhiệm vụ</span>
                      </button>
                    </div>

                    {/* Logout Button */}
                    <div className="pt-1 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          if (onLogout) onLogout();
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-rose-50 flex items-center gap-2.5 text-xs font-bold text-rose-600 transition-colors"
                      >
                        <LogOut className="w-4 h-4 text-rose-500" />
                        <span>Đăng xuất tài khoản</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-rose-600 hover:bg-slate-100/80 transition-colors border border-slate-200 rounded-xl whitespace-nowrap shrink-0 h-10"
              >
                <User className="w-4 h-4 text-slate-500" />
                <span>Đăng nhập</span>
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Menu Sangsang</div>
          
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenExamLibrary();
            }}
            className="w-full text-left px-3 py-2.5 text-base font-bold bg-rose-50 text-rose-700 rounded-xl flex items-center gap-2"
          >
            <FileCheck className="w-5 h-5 text-rose-600" />
            <span>Kho 100+ Đề thi thử V-ACT 120 câu</span>
          </button>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (link.isExternal && link.href) {
                  window.open(link.href, '_blank', 'noopener,noreferrer');
                } else {
                  setActiveTab(link.id);
                }
              }}
              className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-xl ${
                activeTab === link.id ? 'bg-rose-50 text-rose-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}

          {isLoggedIn && onLogout && (
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLogout();
                }}
                className="w-full text-left px-3 py-2.5 text-base font-bold text-rose-600 hover:bg-rose-50 rounded-xl flex items-center gap-2"
              >
                <LogOut className="w-5 h-5 text-rose-600" />
                <span>Đăng xuất tài khoản</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
