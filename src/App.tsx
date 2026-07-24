import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { DisclaimerBanner } from './components/common/DisclaimerBanner';
import { HeroSection } from './components/home/HeroSection';
import { SocialProof } from './components/home/SocialProof';
import { PainPointsSection } from './components/home/PainPointsSection';
import { ThreeStepsSection } from './components/home/ThreeStepsSection';
import { SampleReportSection } from './components/home/SampleReportSection';
import { DailyTaskPreview } from './components/home/DailyTaskPreview';
import { ExamSimPreview } from './components/home/ExamSimPreview';
import { TeachersSection } from './components/home/TeachersSection';
import { ProgressStoriesSection } from './components/home/ProgressStoriesSection';
import { CoursesPricingSection } from './components/home/CoursesPricingSection';
import { KnowledgeHubSection } from './components/home/KnowledgeHubSection';
import { FAQSection } from './components/home/FAQSection';

import { PreQuizModal } from './components/diagnostic/PreQuizModal';
import { DiagnosticEngine } from './components/diagnostic/DiagnosticEngine';
import { DiagnosticReport } from './components/diagnostic/DiagnosticReport';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { WrongAnswerNotebook } from './components/dashboard/WrongAnswerNotebook';
import { ParentDashboard } from './components/dashboard/ParentDashboard';
import { UniversityLookupTool } from './components/tools/UniversityLookupTool';
import { RoadmapView } from './components/roadmap/RoadmapView';
import { SEOArticleDetail } from './components/seo/SEOArticleDetail';
import { DiscussionForumTab } from './components/community/DiscussionForumTab';
import { UserProfileView } from './components/profile/UserProfileView';
import { MockExamLibraryModal } from './components/exam/MockExamLibraryModal';
import { TopicPracticeModal } from './components/practice/TopicPracticeModal';
import { Modal } from './components/common/Modal';
import { Toast, ToastProps } from './components/common/Toast';
import { StudentGoal, DiagnosticResult, DiagnosticQuestion } from './types';
import { AuthService, UserProfile } from './services/auth-service';
import { MockExamItem } from './data/mock-exams-library';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => AuthService.getCurrentUser());
  const isLoggedIn = !!currentUser;
  
  // Quiz Flow State
  const [isPreQuizOpen, setIsPreQuizOpen] = useState<boolean>(false);
  const [isExamLibraryOpen, setIsExamLibraryOpen] = useState<boolean>(false);
  const [isTopicPracticeOpen, setIsTopicPracticeOpen] = useState<boolean>(false);
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [selectedExamForQuiz, setSelectedExamForQuiz] = useState<MockExamItem | null>(null);
  const [currentGoal, setCurrentGoal] = useState<StudentGoal | null>(null);
  const [quizResult, setQuizResult] = useState<DiagnosticResult | null>(null);

  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authFullname, setAuthFullname] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPhone, setAuthPhone] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  // SEO Article Detail State
  const [selectedArticleId, setSelectedArticleId] = useState<string>('art-01');

  // Toasts State
  const [toasts, setToasts] = useState<Omit<ToastProps, 'onClose'>[]>([]);

  // Automatically scroll to top whenever activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const addToast = (type: 'success' | 'warning' | 'error' | 'info', message: string) => {
    const id = `toast-${Date.now()}`;
    setToasts(prev => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleStartPreQuiz = () => {
    setSelectedExamForQuiz(null);
    setIsPreQuizOpen(true);
  };

  const handleOpenExamLibrary = () => {
    setIsExamLibraryOpen(true);
  };

  const handleConfirmStartQuiz = (goal: StudentGoal) => {
    setCurrentGoal(goal);
    setIsPreQuizOpen(false);
    setIsQuizActive(true);
    setActiveTab('diagnostic-room');
  };

  const handleStartFullExamFromLibrary = (goal: StudentGoal, examItem: MockExamItem) => {
    setCurrentGoal(goal);
    setSelectedExamForQuiz(examItem);
    setIsExamLibraryOpen(false);
    setIsQuizActive(true);
    setActiveTab('diagnostic-room');
    addToast('info', `Bắt đầu làm bài ${examItem.code} (120 câu - 150 phút)...`);
  };

  const handleStartTopicPractice = (questions: DiagnosticQuestion[], topicTitle: string, durationMinutes: number) => {
    const customExamItem: MockExamItem = {
      id: `topic-${Date.now()}`,
      code: topicTitle,
      title: topicTitle,
      description: `Bài luyện tập chuyên đề với ${questions.length} câu hỏi chọn lọc (${durationMinutes} phút).`,
      questionCount: questions.length,
      timeLimitMinutes: durationMinutes,
      difficulty: 'Mục tiêu 850+',
      source: 'Sangsang V-ACT Chuyên đề',
      averageScore: 750,
      totalAttempts: 120,
      isOfficial: true,
      questions: questions,
    };

    const defaultGoal: StudentGoal = currentGoal || {
      targetUniversity: 'Đại học Bách Khoa TP.HCM',
      targetMajor: 'Khoa học Máy tính',
      targetScore: 900,
      grade: '12',
      currentEstimatedScore: 650,
      examDate: 'Đợt 1 - Tháng 3/2026',
      dailyStudyMinutes: 60,
    };

    setCurrentGoal(defaultGoal);
    setSelectedExamForQuiz(customExamItem);
    setIsTopicPracticeOpen(false);
    setIsQuizActive(true);
    setActiveTab('diagnostic-room');
    addToast('info', `Bắt đầu ${topicTitle} (${questions.length} câu - ${durationMinutes} phút)...`);
  };

  const handleQuizComplete = (result: DiagnosticResult) => {
    setQuizResult(result);
    setIsQuizActive(false);
    setSelectedExamForQuiz(null);
    
    // Mark full 120-question exam completed in AuthService database to unlock certificate!
    if (currentUser) {
      const updatedProfile = AuthService.markFullExamCompleted(currentUser.id);
      if (updatedProfile) {
        setCurrentUser(updatedProfile);
      }
    }

    setActiveTab('diagnostic-report');
    addToast('success', 'Hoàn thành bài thi! Đã tính điểm và mở khóa Chứng nhận QR Code.');
  };

  const handleRegisterAndUnlock = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (authMode === 'login') {
      const res = AuthService.login(authEmail, authPassword);
      if (res.success && res.user) {
        setCurrentUser(res.user);
        setIsAuthModalOpen(false);
        addToast('success', res.message);
        setActiveTab('profile');
      } else {
        addToast('error', res.message);
      }
    } else {
      const res = AuthService.register({
        fullname: authFullname || 'Học sinh Sangsang',
        email: authEmail,
        phone: authPhone,
        password: authPassword
      });

      if (res.success && res.user) {
        setCurrentUser(res.user);
        setIsAuthModalOpen(false);
        addToast('success', res.message);
        setActiveTab('profile');
      } else {
        addToast('error', res.message);
      }
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    setActiveTab('home');
    addToast('info', 'Đã đăng xuất tài khoản.');
  };

  // Render Full Screen Quiz mode if active
  if (isQuizActive && currentGoal) {
    return (
      <DiagnosticEngine
        goal={currentGoal}
        selectedExam={selectedExamForQuiz}
        onComplete={handleQuizComplete}
        onCancel={() => {
          setIsQuizActive(false);
          setSelectedExamForQuiz(null);
          setActiveTab('home');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-rose-500 selection:text-white">
      
      {/* Top Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Main Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDiagnostic={handleStartPreQuiz}
        isLoggedIn={isLoggedIn}
        onOpenAuth={() => {
          setAuthMode('login');
          setIsAuthModalOpen(true);
        }}
        onOpenExamLibrary={handleOpenExamLibrary}
        onOpenTopicPractice={() => setIsTopicPracticeOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Dynamic View Content — Tab Navigation Architecture */}
      <main className="flex-1">
        
        {/* HOMEPAGE VIEW */}
        {activeTab === 'home' && (
          <>
            <HeroSection onOpenDiagnostic={handleStartPreQuiz} setActiveTab={setActiveTab} />
            <SocialProof />
            <PainPointsSection onOpenDiagnostic={handleStartPreQuiz} setActiveTab={setActiveTab} onOpenExamLibrary={handleOpenExamLibrary} />
            <ThreeStepsSection onOpenDiagnostic={handleStartPreQuiz} />
            <SampleReportSection onOpenDiagnostic={handleStartPreQuiz} />
            <DailyTaskPreview setActiveTab={setActiveTab} />
            <ProgressStoriesSection />
          </>
        )}

        {/* DEDICATED USER PROFILE VIEW */}
        {activeTab === 'profile' && currentUser && (
          <UserProfileView
            currentUser={currentUser}
            onLogout={handleLogout}
            setActiveTab={setActiveTab}
            onUpdateUser={(updated) => {
              setCurrentUser(updated);
              addToast('success', 'Đã cập nhật thông tin hồ sơ cá nhân!');
            }}
          />
        )}

        {/* DEDICATED ROADMAP TAB VIEW */}
        {activeTab === 'roadmap' && (
          <RoadmapView
            onStartDiagnostic={handleStartPreQuiz}
            setActiveTab={setActiveTab}
          />
        )}

        {/* DEDICATED COURSES & PRICING TAB VIEW */}
        {(activeTab === 'courses' || activeTab === 'pricing') && (
          <CoursesPricingSection onOpenDiagnostic={handleStartPreQuiz} />
        )}

        {/* DEDICATED TEACHERS TAB VIEW */}
        {activeTab === 'teachers' && (
          <TeachersSection />
        )}

        {/* DEDICATED DISCUSSION Q&A FORUM TAB VIEW */}
        {activeTab === 'discussion' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DiscussionForumTab />
          </div>
        )}

        {/* DEDICATED KNOWLEDGE HUB & ARTICLES TAB VIEW */}
        {activeTab === 'knowledge' && (
          <KnowledgeHubSection setActiveTab={setActiveTab} setSelectedArticleId={setSelectedArticleId} />
        )}

        {/* DEDICATED ARTICLE DETAIL VIEW */}
        {activeTab === 'article-detail' && (
          <SEOArticleDetail
            articleId={selectedArticleId}
            onBack={() => setActiveTab('knowledge')}
            onSelectArticle={(id) => {
              setSelectedArticleId(id);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          />
        )}

        {/* DEDICATED UNIVERSITY LOOKUP TOOL TAB VIEW */}
        {activeTab === 'university-lookup' && (
          <UniversityLookupTool />
        )}

        {/* DEDICATED STUDENT DASHBOARD TAB VIEW */}
        {activeTab === 'student-dash' && (
          <StudentDashboard setActiveTab={setActiveTab} />
        )}

        {/* DEDICATED WRONG ANSWER NOTEBOOK TAB VIEW */}
        {activeTab === 'wrong-notebook' && (
          <WrongAnswerNotebook onBack={() => setActiveTab('student-dash')} />
        )}

        {/* DEDICATED PARENT DASHBOARD TAB VIEW */}
        {activeTab === 'parent-dash' && (
          <ParentDashboard onBack={() => setActiveTab('student-dash')} />
        )}

        {/* DEDICATED FAQ TAB VIEW */}
        {activeTab === 'faq' && (
          <FAQSection />
        )}

        {/* DEDICATED DIAGNOSTIC REPORT VIEW */}
        {activeTab === 'diagnostic-report' && quizResult && currentGoal && (
          <DiagnosticReport
            result={quizResult}
            goal={currentGoal}
            onRegisterToUnlock={handleRegisterAndUnlock}
            onRetake={handleStartPreQuiz}
          />
        )}

      </main>

      {/* Main Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenDiagnostic={handleStartPreQuiz}
        onOpenExamLibrary={handleOpenExamLibrary}
        onOpenTopicPractice={() => setIsTopicPracticeOpen(true)}
      />

      {/* Mobile Bottom Bar for Logged-In / Mobile Navigation */}
      {isLoggedIn && (
        <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      {/* Pre-Quiz Survey Modal */}
      <PreQuizModal
        isOpen={isPreQuizOpen}
        onClose={() => setIsPreQuizOpen(false)}
        onStartQuiz={handleConfirmStartQuiz}
      />

      {/* Mock Exam Library Modal (Full 100+ Exam Repository from Sangsang V-ACT) */}
      <MockExamLibraryModal
        isOpen={isExamLibraryOpen}
        onClose={() => setIsExamLibraryOpen(false)}
        isLoggedIn={isLoggedIn}
        onOpenAuth={() => {
          setIsExamLibraryOpen(false);
          setAuthMode('login');
          setIsAuthModalOpen(true);
        }}
        onStartExam={handleStartFullExamFromLibrary}
      />

      {/* Targeted Topic Practice Modal */}
      <TopicPracticeModal
        isOpen={isTopicPracticeOpen}
        onClose={() => setIsTopicPracticeOpen(false)}
        onStartTopicPractice={handleStartTopicPractice}
      />

      {/* Auth Modal (Login / Register) Connected with Database Service */}
      <Modal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        title={authMode === 'login' ? 'Đăng Nhập Tài Khoản Học Sinh Sangsang' : 'Đăng Ký Tài Khoản Học Sinh Mới'}
      >
        <form onSubmit={handleAuthSubmit} className="space-y-4 text-slate-900">
          
          {authMode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Họ và tên học sinh *</label>
              <input
                type="text"
                value={authFullname}
                onChange={(e) => setAuthFullname(e.target.value)}
                placeholder="VD: Nguyễn Văn Minh"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-rose-500 outline-none"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email *</label>
            <input
              type="email"
              value={authEmail}
              onChange={(e) => setAuthEmail(e.target.value)}
              placeholder="VD: hocsinh@sangsang.edu.vn"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-rose-500 outline-none"
              required
            />
          </div>

          {authMode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Số điện thoại / Zalo</label>
              <input
                type="tel"
                value={authPhone}
                onChange={(e) => setAuthPhone(e.target.value)}
                placeholder="VD: 0908123456"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-rose-500 outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mật khẩu *</label>
            <input
              type="password"
              value={authPassword}
              onChange={(e) => setAuthPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-rose-500 outline-none"
              required
            />
          </div>

          {authMode === 'login' && (
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-[11px] text-rose-700 font-semibold leading-relaxed">
              💡 <strong>Tài khoản Demo sẵn có:</strong><br />
              • Email: <code className="bg-white px-1 py-0.5 rounded text-rose-900 font-bold">hocsinh@sangsang.edu.vn</code><br />
              • Mật khẩu: <code className="bg-white px-1 py-0.5 rounded text-rose-900 font-bold">123</code>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow transition-colors"
          >
            {authMode === 'login' ? 'Đăng nhập vào hệ thống' : 'Đăng ký tài khoản mới & Lưu lộ trình'}
          </button>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
              className="text-xs font-bold text-rose-600 hover:underline"
            >
              {authMode === 'login' ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Floating Toast Manager */}
      <div className="fixed bottom-20 md:bottom-6 right-6 z-50 space-y-2 max-w-sm">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={removeToast} />
        ))}
      </div>

    </div>
  );
}
