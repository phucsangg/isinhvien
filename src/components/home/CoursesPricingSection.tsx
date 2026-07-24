import React, { useState } from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight, QrCode, CreditCard, Wallet, Copy, CheckCircle2, Phone, Mail, User, Building, AlertCircle, PlayCircle, Filter } from 'lucide-react';
import { Modal } from '../common/Modal';
import { InteractiveVideoPlayerModal } from '../learn/InteractiveVideoPlayerModal';

interface CoursesPricingSectionProps {
  onOpenDiagnostic: () => void;
}

interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  level: 'all' | 'foundation' | 'intensive' | 'advanced';
  levelLabel: string;
  priceRaw: number;
  priceFormatted: string;
  period: '/ 6 tháng truy cập' | '/ 6 tháng trọn gói' | '/ Khóa 60 ngày';
  recommended: boolean;
  badge?: string;
  features: string[];
  cta: string;
}

export const CoursesPricingSection: React.FC<CoursesPricingSectionProps> = ({ onOpenDiagnostic }) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanItem | null>(null);
  const [activeLevelFilter, setActiveLevelFilter] = useState<'all' | 'foundation' | 'intensive' | 'advanced'>('all');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [demoVideoInfo, setDemoVideoInfo] = useState({ title: 'Chiến thuật giải ma trận Logic 45 giây', teacher: 'Thạc sĩ Bùi Văn Công', subject: 'Logic' });

  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'momo' | 'card'>('qr');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const plans: PlanItem[] = [
    {
      id: 'self-study',
      name: 'Gói Tự học V-ACT Pass',
      tagline: 'Dành cho học sinh lấy gốc & ôn tập nền tảng tự do theo tiến độ cá nhân',
      level: 'foundation',
      levelLabel: 'Nền tảng 500+ điểm',
      priceRaw: 490000,
      priceFormatted: '490.000đ',
      period: '/ 6 tháng truy cập',
      recommended: false,
      features: [
        'Bài chẩn đoán năng lực không giới hạn',
        'Bản đồ Radar & Phân tích lỗ hổng kiến thức',
        'Ngân hàng 8.000+ bài luyện phân theo kỹ năng',
        'Tự động lưu Sổ câu sai & lặp lại Spaced Repetition',
        '10 đề thi thử mô phỏng giao diện chuẩn 150 phút',
        'Công cụ tra cứu điểm chuẩn trường/ngành 2023-2025'
      ],
      cta: 'Thanh toán Gói Tự học'
    },
    {
      id: 'guided',
      name: 'Gói Đồng hành Lớp Trực tuyến',
      tagline: 'Toàn bộ gói Tự học + Lớp chuyên sâu Livestream & Chữa đề hàng tuần',
      level: 'intensive',
      levelLabel: 'Chuyên đề 750+ điểm',
      priceRaw: 1490000,
      priceFormatted: '1.490.000đ',
      period: '/ 6 tháng trọn gói',
      recommended: true,
      badge: 'Được đăng ký nhiều nhất',
      features: [
        'Toàn bộ quyền lợi Gói Tự học',
        'Lớp học trực tuyến hàng tuần với Thầy Bùi Văn Công & Thầy Cô Thạc sĩ',
        'Chữa chi tiết 20 đề thi thử phân hóa cao',
        'Tham gia Nhóm hỗ trợ hỏi đáp kiến thức 24/7',
        'Tài liệu độc quyền & Bộ thẻ ghi nhớ từ vựng',
        'Báo cáo định kỳ dành cho Phụ huynh mỗi tháng'
      ],
      cta: 'Thanh toán Gói Đồng hành'
    },
    {
      id: 'mentor',
      name: 'Gói Mentor Cá nhân 1-on-1',
      tagline: 'Toàn bộ gói Đồng hành + Mentor riêng điều chỉnh lộ trình 850+ V-ACT',
      level: 'advanced',
      levelLabel: 'Về đích 850+ điểm',
      priceRaw: 3290000,
      priceFormatted: '3.290.000đ',
      period: '/ Khóa 60 ngày',
      recommended: false,
      features: [
        'Toàn bộ quyền lợi Gói Đồng hành',
        'Mentor cá nhân theo sát 1-on-1 suốt 60 ngày',
        'Điều chỉnh lộ trình học theo tuần dựa trên tiến độ thật',
        'Buổi chữa lỗi tư duy 1-on-1 hàng tuần (45 phút/buổi)',
        'Phát hiện bẫy tâm lý & tư vấn chọn nguyện vọng trường',
        'Cam kết hoàn 100% học phí nếu không cải thiện điểm (Theo chính sách)'
      ],
      cta: 'Đặt lịch & Thanh toán Mentor'
    }
  ];

  const filteredPlans = activeLevelFilter === 'all' 
    ? plans 
    : plans.filter(p => p.level === activeLevelFilter);

  const handleOpenPayment = (plan: PlanItem) => {
    setSelectedPlan(plan);
    setIsSuccess(false);
    setIsCopied(false);
  };

  const handleCopySyntax = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleConfirmPaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800" id="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-3.5 py-1.5 rounded-full border border-rose-500/20">
            Hệ Thống Gói Học Sangsang V-ACT
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Bảng Giá Minh Bạch — Học Đúng Trọng Tâm
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Không học dàn trải. Lựa chọn gói học phù hợp nhất với mục tiêu điểm số và lộ trình cá nhân hóa của bạn.
          </p>

          {/* Level Filter Controls (From iStudent/Buivancong feature) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-rose-400" /> Lọc theo mục tiêu:
            </span>
            {[
              { id: 'all', label: 'Tất cả các gói' },
              { id: 'foundation', label: 'Nền tảng 500+' },
              { id: 'intensive', label: 'Chuyên đề 750+' },
              { id: 'advanced', label: 'Về đích 850+' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveLevelFilter(f.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeLevelFilter === f.id
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Video Lecture Preview Banner */}
        <div className="mb-12 bg-slate-800/80 rounded-3xl p-6 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
              <PlayCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">Trải nghiệm bài giảng thử</div>
              <h4 className="text-sm sm:text-base font-bold text-white">Xem video chiến thuật giải Logic 45 giây của Thầy Bùi Văn Công</h4>
            </div>
          </div>

          <button
            onClick={() => {
              setDemoVideoInfo({ title: 'Chiến thuật giải ma trận Logic 45 giây', teacher: 'Thạc sĩ Bùi Văn Công', subject: 'Logic' });
              setIsVideoModalOpen(true);
            }}
            className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow-md transition-colors shrink-0 flex items-center gap-2"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Học thử Video (Có ghi chú)</span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-slate-800/90 rounded-3xl p-6 sm:p-8 border transition-all flex flex-col justify-between ${
                plan.recommended
                  ? 'border-rose-500 ring-2 ring-rose-500/50 shadow-2xl shadow-rose-950 scale-[1.02]'
                  : 'border-slate-700/80 hover:border-slate-600'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-amber-200" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-700 text-slate-300">
                    {plan.levelLabel}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[36px]">{plan.tagline}</p>
                </div>

                <div className="border-y border-slate-700/80 py-4">
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">
                    {plan.priceFormatted}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">{plan.period}</div>
                </div>

                <ul className="space-y-3 text-xs text-slate-300">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleOpenPayment(plan)}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 ${
                    plan.recommended
                      ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/30'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Payment Popup Modal */}
      {selectedPlan && (
        <Modal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          title={`Thanh Toán: ${selectedPlan.name}`}
          maxWidth="max-w-xl"
        >
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Đăng Ký & Thanh Toán Thành Công!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Hệ thống Sangsang đã xác nhận đơn hàng của bạn cho gói <strong>{selectedPlan.name}</strong> ({selectedPlan.priceFormatted}). Mã kích hoạt và tài liệu đã được gửi về email của bạn.
              </p>
              <button
                onClick={() => setSelectedPlan(null)}
                className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs rounded-xl shadow transition-colors"
              >
                Hoàn tất & Bắt đầu học
              </button>
            </div>
          ) : (
            <form onSubmit={handleConfirmPaymentSubmit} className="space-y-6 text-slate-900">
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Gói đã chọn</div>
                  <div className="font-bold text-sm text-slate-900">{selectedPlan.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-medium">Tổng tiền</div>
                  <div className="font-black text-rose-600 text-base">{selectedPlan.priceFormatted}</div>
                </div>
              </div>

              {/* Contact Info Inputs */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">1. Thông tin người học</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên học sinh *"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-rose-500 outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại / Zalo *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-rose-500 outline-none"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">2. Phương thức thanh toán</div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'qr', label: 'VietQR / MB Bank', icon: QrCode },
                    { id: 'momo', label: 'Ví MoMo', icon: Wallet },
                    { id: 'card', label: 'Thẻ ATM / Banking', icon: CreditCard }
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-3 rounded-xl border text-center space-y-1 transition-all ${
                        paymentMethod === m.id
                          ? 'border-rose-500 bg-rose-50/60 text-rose-700 font-bold'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <m.icon className="w-5 h-5 mx-auto text-rose-500" />
                      <div className="text-[11px] leading-tight">{m.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bank Transfer Details Simulation */}
              {paymentMethod === 'qr' && (
                <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3 border border-slate-800">
                  <div className="flex items-center gap-4">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=MBBANK-0111238632-${selectedPlan.priceRaw}-SSVACT`}
                      alt="VietQR MB Bank"
                      className="w-24 h-24 rounded-xl bg-white p-1 shrink-0"
                    />
                    <div className="space-y-1 text-xs">
                      <div className="text-slate-400">Ngân hàng: <strong className="text-white">MB BANK</strong></div>
                      <div className="text-slate-400">Số tài khoản: <strong className="text-amber-300 font-mono">0111238632</strong></div>
                      <div className="text-slate-400">Chủ tài khoản: <strong className="text-white">CONG TY CO PHAN MHNG</strong></div>
                      <div className="text-slate-400">Cú pháp chuyển khoản:</div>
                      <div className="flex items-center gap-2">
                        <code className="bg-slate-800 text-rose-300 px-2 py-1 rounded font-mono text-[11px] font-bold">
                          SSVACT {phone || '090xxxx'}
                        </code>
                        <button
                          type="button"
                          onClick={() => handleCopySyntax(`SSVACT ${phone || '090xxxx'}`)}
                          className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        {isCopied && <span className="text-[10px] text-emerald-400 font-bold">Đã chép!</span>}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs rounded-xl shadow-lg transition-colors"
              >
                Xác nhận đã thanh toán ({selectedPlan.priceFormatted})
              </button>

            </form>
          )}
        </Modal>
      )}

      {/* Interactive Video Player Modal */}
      <InteractiveVideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoTitle={demoVideoInfo.title}
        teacherName={demoVideoInfo.teacher}
        subject={demoVideoInfo.subject}
      />

    </section>
  );
};
