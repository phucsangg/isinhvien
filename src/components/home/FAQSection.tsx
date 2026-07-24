import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Kỳ thi V-ACT ĐHQG TP.HCM là gì?',
      a: 'V-ACT là tên gọi tắt của Kỳ thi Đánh giá Năng lực do Đại học Quốc gia TP.HCM tổ chức. Bài thi gồm 120 câu hỏi trắc nghiệm trong 150 phút, sử dụng kết quả để xét tuyển vào hơn 100 trường đại học, cao đẳng miền Nam.'
    },
    {
      q: 'Website V-ACT Mind có phải là trang chính thức của ĐHQG-HCM không?',
      a: 'Không. V-ACT Mind là nền tảng công nghệ giáo dục độc lập chuyên cung cấp giải pháp chẩn đoán, lập lộ trình cá nhân hóa và luyện đề. Chúng tôi không phải và không mạo danh nhận diện chính thức của ĐHQG-HCM.'
    },
    {
      q: 'Bài kiểm tra chẩn đoán trên V-ACT Mind có thực sự miễn phí không?',
      a: 'Hoàn toàn miễn phí 100%. Bạn có thể làm bài chẩn đoán 20 phút và xem bản báo cáo tổng quan năng lực cùng điểm dự báo mà không cần nhập thẻ thanh toán.'
    },
    {
      q: 'Điểm số dự báo có phải kết quả chính thức không?',
      a: 'Không. Điểm dự báo trên hệ thống là chỉ số ước tính thống kê dựa trên độ khó câu hỏi và tỷ lệ làm đúng của bạn. Điểm thi thật phụ thuộc vào nhiều yếu tố trong phòng thi.'
    },
    {
      q: 'Nên bắt đầu ôn luyện V-ACT từ lớp mấy?',
      a: 'Thời điểm lý tưởng nhất là từ học kỳ 2 lớp 11 hoặc đầu lớp 12. Việc làm bài chẩn đoán sớm giúp bạn xác định lỗ hổng kiến thức để phân bổ thời gian hợp lý.'
    },
    {
      q: 'Tôi có thể làm bài luyện tập trên điện thoại thông minh không?',
      a: 'Có. Giao diện V-ACT Mind được thiết kế tối ưu mobile-first, mượt mà trên mọi thiết bị di động iOS/Android từ 360px.'
    },
    {
      q: 'Phụ huynh có thể theo dõi tiến độ học của con như thế nào?',
      a: 'Hệ thống cung cấp Dashboard Phụ huynh riêng biệt, cập nhật tỷ lệ hoàn thành nhiệm vụ hàng ngày, chuỗi ngày học và báo cáo điểm số tăng trưởng hàng tuần.'
    },
    {
      q: 'Dữ liệu cá nhân của tôi được bảo mật ra sao?',
      a: 'V-ACT Mind cam kết bảo mật tuyệt đối thông tin cá nhân. Chúng tôi không chia sẻ hoặc bán dữ liệu học sinh cho bên thứ ba và tuân thủ các quy định bảo mật hiện hành.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Hỏi đáp thắc mắc</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
