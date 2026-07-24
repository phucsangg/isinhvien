import { DiagnosticQuestion } from '../types';

export const DIAGNOSTIC_QUESTION_BANK: DiagnosticQuestion[] = [
  // --- TIẾNG VIỆT ---
  {
    id: 'tv-01',
    domain: 'tieng_viet',
    domainName: 'Tiếng Việt',
    questionText: 'Trong các từ sau, từ nào dùng sai chính tả chuẩn tiếng Việt hiện hành?',
    options: [
      { id: 'A', text: 'Chẩn đoán' },
      { id: 'B', text: 'Xuề xòa' },
      { id: 'C', text: 'Giành giật' },
      { id: 'D', text: 'Chuẩn đoán' }
    ],
    correctOptionId: 'D',
    explanation: 'Từ đúng là "Chẩn đoán" (chẩn: xem xét, đoán: nhận định). "Chuẩn đoán" là cách viết sai chính tả phổ biến do phát âm lầm lẫn.',
    whyWrong: {
      'A': '"Chẩn đoán" là từ Hán-Việt hoàn toàn chính xác.',
      'B': '"Xuề xòa" viết đúng với âm x.',
      'C': '"Giành giật" viết đúng với âm gi.',
      'D': 'Lỗi sai chính tả chính xác cần chọn.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 30
  },
  {
    id: 'tv-02',
    domain: 'tieng_viet',
    domainName: 'Tiếng Việt',
    passageText: 'Đọc đoạn trích: "Thơ Nguyễn Trãi không chỉ là tiếng lòng của một cá nhân mà còn là âm hưởng của cả một thời đại đầy biến động. Ông dùng ngôn từ tự nhiên, không chau chuốt cầu kỳ nhưng xoáy sâu vào tâm khảm người đọc."',
    questionText: 'Thành phần "không chau chuốt cầu kỳ" có thể thay thế bằng cụm từ nào dưới đây mà không làm thay đổi nét nghĩa mộc mạc, tự nhiên?',
    options: [
      { id: 'A', text: 'Gọt đẽo hoa mỹ' },
      { id: 'B', text: 'Rườm rà phức tạp' },
      { id: 'C', text: 'Hoa mỹ trau chuốt' },
      { id: 'D', text: 'Thô ráp mộc mạc' }
    ],
    correctOptionId: 'A',
    explanation: '"Chau chuốt cầu kỳ" có nghĩa tương đương với "gọt đẽo hoa mỹ" trong ngữ cảnh đánh giá văn phong nghệ thuật.',
    whyWrong: {
      'A': 'Chính xác. Phản ánh đúng sắc thái câu văn.',
      'B': '"Rườm rà" mang sắc thái tiêu cực quá mức.',
      'C': '"Hoa mỹ trau chuốt" bị lặp từ trùng lắp.',
      'D': '"Thô ráp" sai lệch nghĩa.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 45
  },
  {
    id: 'tv-03',
    domain: 'tieng_viet',
    domainName: 'Tiếng Việt',
    questionText: 'Trong câu văn "Mặc dù trời mưa rất to nhưng Nam vẫn cố gắng đến trường đúng giờ", thành phần "Mặc dù... nhưng..." thể hiện quan hệ nghĩa gì giữa hai vế câu?',
    options: [
      { id: 'A', text: 'Quan hệ Tương phản / Nhượng bộ' },
      { id: 'B', text: 'Quan hệ Nguyên nhân - Kết quả' },
      { id: 'C', text: 'Quan hệ Tăng tiến' },
      { id: 'D', text: 'Quan hệ Mục đích' }
    ],
    correctOptionId: 'A',
    explanation: 'Cặp từ nối "Mặc dù... nhưng..." biểu thị mối quan hệ nhượng bộ - tương phản giữa hai hành động.',
    whyWrong: {
      'A': 'Chính xác theo ngữ pháp Tiếng Việt.',
      'B': 'Nguyên nhân - kết quả dùng cặp "Vì... nên...".',
      'C': 'Tăng tiến dùng cặp "Không những... mà còn...".',
      'D': 'Mục đích dùng "Để...".'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 30
  },
  {
    id: 'tv-04',
    domain: 'tieng_viet',
    domainName: 'Tiếng Việt',
    questionText: 'Từ nào dưới đây là từ Hán-Việt có nghĩa là "người đi trước, thế hệ trước"?',
    options: [
      { id: 'A', text: 'Tiền bối' },
      { id: 'B', text: 'Hậu bối' },
      { id: 'C', text: 'Đồng bối' },
      { id: 'D', text: 'Tiền đề' }
    ],
    correctOptionId: 'A',
    explanation: '"Tiền bối" (tiền: trước, bối: hàng/hạng người) chỉ thế hệ đi trước.',
    whyWrong: {
      'A': 'Chính xác.',
      'B': 'Hậu bối chỉ thế hệ đi sau.',
      'C': 'Đồng bối chỉ người cùng thế hệ.',
      'D': 'Tiền đề chỉ điều kiện giả định trước.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 25
  },

  // --- TIẾNG ANH ---
  {
    id: 'ta-01',
    domain: 'tieng_anh',
    domainName: 'Tiếng Anh',
    questionText: 'Choose the sentence that best completes the logical context: "Despite having spent months preparing for the V-ACT exam, Nam still felt ______ right before entering the test room."',
    options: [
      { id: 'A', text: 'apprehensive' },
      { id: 'B', text: 'indifferent' },
      { id: 'C', text: 'arrogant' },
      { id: 'D', text: 'lethargic' }
    ],
    correctOptionId: 'A',
    explanation: '"Apprehensive" means anxious or fearful about something in the future, which fits the contrasting "Despite preparing..." context.',
    whyWrong: {
      'A': 'Correct vocabulary for feeling nervous despite preparation.',
      'B': 'Indifferent means not caring.',
      'C': 'Arrogant means overly proud.',
      'D': 'Lethargic means lacking energy.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 40
  },
  {
    id: 'ta-02',
    domain: 'tieng_anh',
    domainName: 'Tiếng Anh',
    passageText: 'Read the paragraph: "Artificial Intelligence has transitioned from a theoretical concept into an omnipresent driving force across global industries. However, ethical concerns regarding data privacy and algorithmic bias remain largely unaddressed by fast-paced tech developers."',
    questionText: 'What is the main concern expressed by the author regarding AI advancement?',
    options: [
      { id: 'A', text: 'Tech developers are moving too slowly in AI deployment.' },
      { id: 'B', text: 'Speed of development outpaces ethical regulations and bias prevention.' },
      { id: 'C', text: 'AI is no longer useful for global industries.' },
      { id: 'D', text: 'Data privacy has been completely solved by modern tech firms.' }
    ],
    correctOptionId: 'B',
    explanation: 'The passage explicitly states "ethical concerns... remain largely unaddressed by fast-paced tech developers".',
    whyWrong: {
      'A': 'Passage states developers are fast-paced, not slow.',
      'B': 'Accurate synthesis of the author\'s main warning.',
      'C': 'Contradicts "omnipresent driving force".',
      'D': 'Passage states privacy remains unaddressed.'
    },
    difficulty: 'phuc_tap',
    estimatedTimeSeconds: 50
  },
  {
    id: 'ta-03',
    domain: 'tieng_anh',
    domainName: 'Tiếng Anh',
    questionText: 'Find the word CLOSEST in meaning to the underlined word: "The university decided to IMPLEMET a new blended learning model starting next semester."',
    options: [
      { id: 'A', text: 'Execute' },
      { id: 'B', text: 'Postpone' },
      { id: 'C', text: 'Abandon' },
      { id: 'D', text: 'Evaluate' }
    ],
    correctOptionId: 'A',
    explanation: '"Implement" means to put a decision/plan into action (Execute).',
    whyWrong: {
      'A': 'Correct synonym.',
      'B': 'Postpone means delay.',
      'C': 'Abandon means drop.',
      'D': 'Evaluate means assess.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 30
  },

  // --- TOÁN HỌC ---
  {
    id: 'th-01',
    domain: 'toan_hoc',
    domainName: 'Toán học',
    questionText: 'Hàm số y = x³ - 3x² + 2 đạt cực đại tại điểm nào?',
    options: [
      { id: 'A', text: 'x = 0' },
      { id: 'B', text: 'x = 2' },
      { id: 'C', text: 'x = 1' },
      { id: 'D', text: 'x = -1' }
    ],
    correctOptionId: 'A',
    explanation: 'y\' = 3x² - 6x. y\' = 0 <=> x = 0 hoặc x = 2. y\'\' = 6x - 6. Tại x = 0 thì y\'\' = -6 < 0 => x = 0 là điểm cực đại.',
    whyWrong: {
      'A': 'Chính xác.',
      'B': 'x = 2 là điểm cực tiểu vì y\'\'(2) = 6 > 0.',
      'C': 'x = 1 là điểm uốn.',
      'D': 'x = -1 không phải nghiệm của y\' = 0.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 45
  },
  {
    id: 'th-02',
    domain: 'toan_hoc',
    domainName: 'Toán học',
    passageText: 'Một mô hình bài toán ứng dụng thực tế: Chi phí sản xuất x đơn vị sản phẩm được cho bởi hàm C(x) = 500 + 20x + 0.1x² (nghìn đồng). Giá bán mỗi sản phẩm trên thị trường là 60 nghìn đồng.',
    questionText: 'Để lợi nhuận thu được đạt giá trị lớn nhất, doanh nghiệp cần sản xuất và bán ra bao nhiêu sản phẩm?',
    options: [
      { id: 'A', text: '200 sản phẩm' },
      { id: 'B', text: '150 sản phẩm' },
      { id: 'C', text: '300 sản phẩm' },
      { id: 'D', text: '100 sản phẩm' }
    ],
    correctOptionId: 'A',
    explanation: 'Doanh thu R(x) = 60x. Lợi nhuận P(x) = R(x) - C(x) = 60x - (500 + 20x + 0.1x²) = -0.1x² + 40x - 500. P\'(x) = -0.2x + 40 = 0 <=> x = 200.',
    whyWrong: {
      'A': 'Tính đúng đỉnh parabol lợi nhuận.',
      'B': 'Tính sai đạo hàm.',
      'C': 'Nhầm chi phí biên.',
      'D': 'Tính sai nghiệm.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 70
  },
  {
    id: 'th-03',
    domain: 'toan_hoc',
    domainName: 'Toán học',
    questionText: 'Tích phân I = ∫[0 đến 1] (2x + 1) dx có giá trị bằng bao nhiêu?',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '1' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctOptionId: 'A',
    explanation: 'Nguyên hàm của (2x + 1) là F(x) = x² + x. Thế cận: F(1) - F(0) = (1 + 1) - 0 = 2.',
    whyWrong: {
      'A': 'Chính xác.',
      'B': 'Quên cộng hệ số x.',
      'C': 'Tính sai.',
      'D': 'Nhầm công thức tích phân.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 30
  },

  // --- TƯ DUY LOGIC ---
  {
    id: 'lg-01',
    domain: 'logic',
    domainName: 'Tư duy Logic',
    passageText: 'Trong một cuộc họp ban cố vấn gồm 4 người A, B, C, D. Biết rằng: (1) Nếu A tham dự thì B cũng tham dự. (2) Nếu B tham dự thì C không tham dự. (3) D chỉ tham dự khi C tham dự.',
    questionText: 'Nếu biết chắc chắn D đã tham dự cuộc họp, khẳng định nào sau đây LÀ ĐÚNG?',
    options: [
      { id: 'A', text: 'A và B đều không tham dự cuộc họp.' },
      { id: 'B', text: 'A tham dự cuộc họp.' },
      { id: 'C', text: 'B tham dự cuộc họp.' },
      { id: 'D', text: 'C không tham dự cuộc họp.' }
    ],
    correctOptionId: 'A',
    explanation: 'D tham dự => C tham dự (theo 3). C tham dự => B không tham dự (phản đảo của 2). B không tham dự => A không tham dự (phản đảo của 1). Vậy cả A và B đều không tham dự.',
    whyWrong: {
      'A': 'Suy luận đúng quy tắc phản đảo mệnh đề kéo theo.',
      'B': 'Sai. A không tham dự.',
      'C': 'Sai. B không tham dự.',
      'D': 'Sai. C bắt buộc phải tham dự thì D mới được tham dự.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 60
  },
  {
    id: 'lg-02',
    domain: 'logic',
    domainName: 'Tư duy Logic',
    passageText: 'Cho 5 bạn sinh viên P, Q, R, S, T xếp hàng ngang chụp ảnh kỷ yếu: (1) P không đứng ở hai đầu hàng. (2) Q đứng ngay bên trái của R. (3) T đứng ở vị trí thứ 3 từ trái sang.',
    questionText: 'Nếu S đứng ở vị trí ngoài cùng bên trái (vị trí 1), thì P phải đứng ở vị trí nào?',
    options: [
      { id: 'A', text: 'Vị trí 2' },
      { id: 'B', text: 'Vị trí 4' },
      { id: 'C', text: 'Vị trí 5' },
      { id: 'D', text: 'Không xác định' }
    ],
    correctOptionId: 'A',
    explanation: 'Vị trí 1: S, vị trí 3: T. Q và R đứng liền nhau (Q ngay bên trái R). Q và R phải chiếm vị trí (4, 5). Vậy vị trí còn trống duy nhất 2 phải là P.',
    whyWrong: {
      'A': 'Chính xác theo suy luận vị trí liên tiếp.',
      'B': 'Vị trí 4 thuộc về Q.',
      'C': 'Vị trí 5 thuộc về R.',
      'D': 'Suy luận hoàn toàn xác định.'
    },
    difficulty: 'phuc_tap',
    estimatedTimeSeconds: 75
  },

  // --- PHÂN TÍCH SỐ LIỆU ---
  {
    id: 'sl-01',
    domain: 'so_lieu',
    domainName: 'Phân tích số liệu',
    passageText: 'Cho bảng số liệu doanh thu 4 quý năm 2025 của Công ty X (Đơn vị: Tỷ đồng):\n• Quý 1: 120 tỷ\n• Quý 2: 150 tỷ\n• Quý 3: 180 tỷ\n• Quý 4: 210 tỷ',
    questionText: 'Tốc độ tăng trưởng doanh thu của Quý 3 so với Quý 2 là bao nhiêu phần trăm?',
    options: [
      { id: 'A', text: '20,0%' },
      { id: 'B', text: '25,0%' },
      { id: 'C', text: '15,0%' },
      { id: 'D', text: '30,0%' }
    ],
    correctOptionId: 'A',
    explanation: 'Tỷ lệ tăng = (180 - 150) / 150 = 30 / 150 = 0.20 = 20%.',
    whyWrong: {
      'A': 'Tính chính xác.',
      'B': 'Nhầm mẫu số thành 120.',
      'C': 'Tính sai.',
      'D': 'Lấy số chênh lệch 30 làm phần trăm.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 40
  },
  {
    id: 'sl-02',
    domain: 'so_lieu',
    domainName: 'Phân tích số liệu',
    passageText: 'Một khảo sát 500 học sinh chọn môn thi ĐGNL 2026: 300 em chọn Toán, 250 em chọn Tiếng Anh, trong đó có 100 em chọn CẢ HAI môn Toán và Tiếng Anh.',
    questionText: 'Hỏi có bao nhiêu học sinh KHÔNG chọn cả hai môn Toán lẫn Tiếng Anh?',
    options: [
      { id: 'A', text: '50 học sinh' },
      { id: 'B', text: '100 học sinh' },
      { id: 'C', text: '150 học sinh' },
      { id: 'D', text: '200 học sinh' }
    ],
    correctOptionId: 'A',
    explanation: 'Số học sinh chọn ít nhất 1 môn = 300 + 250 - 100 = 450. Số học sinh không chọn môn nào = 500 - 450 = 50.',
    whyWrong: {
      'A': 'Tính đúng theo biểu đồ Venn.',
      'B': 'Nhầm số chọn cả hai môn.',
      'C': 'Lấy 500 - 350.',
      'D': 'Quên trừ bớt phần giao.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 50
  },

  // --- SUY LUẬN KHOA HỌC (AUTHENTIC QUESTIONS FROM TOMYRESE/BUIVANCONG SRC) ---
  {
    id: 'kh-01',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Vật lý)',
    passageText: 'Trong thí nghiệm về hiện tượng cảm ứng điện từ: Cho một nam thanh kim loại rơi tự do qua một ống dây dẫn kín đặt thẳng đứng.',
    questionText: 'Khi nam thanh kim loại đi vào và đi ra khỏi ống dây, dòng điện cảm ứng xuất hiện có chiều như thế nào?',
    options: [
      { id: 'A', text: 'Có chiều sao cho từ trường cảm ứng luôn chống lại sự chuyển động rơi của thanh nam châm.' },
      { id: 'B', text: 'Cùng chiều với gia tốc trọng trường g.' },
      { id: 'C', text: 'Không xuất hiện dòng điện cảm ứng vì nam châm rơi tự do.' },
      { id: 'D', text: 'Luôn giữ cố định 1 chiều từ trên xuống dưới.' }
    ],
    correctOptionId: 'A',
    explanation: 'Theo định luật Lenz, dòng điện cảm ứng xuất hiện luôn có chiều sao cho từ trường do nó sinh ra chống lại nguyên nhân sinh ra nó (ở đây là sự rơi của nam châm).',
    whyWrong: {
      'A': 'Chính xác định luật Lenz.',
      'B': 'Gia tốc trọng trường không quyết định chiều dòng điện.',
      'C': 'Có biến thiên từ thông nên bắt buộc có dòng điện cảm ứng.',
      'D': 'Chiều dòng điện đảo ngược khi nam châm đi ra.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 60
  },
  {
    id: 'kh-02',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Hóa học)',
    passageText: 'Dung dịch X chứa hỗn hợp gồm NaHCO3 và Na2CO3. Khi nhỏ từ từ dung dịch HCl vào dung dịch X, hiện tượng sủi bọt khí CO2 bắt đầu xuất hiện khi nào?',
    questionText: 'Thứ tự phản ứng xảy ra trong dung dịch X là gì?',
    options: [
      { id: 'A', text: 'HCl phản ứng với Na2CO3 tạo NaHCO3 trước, sau đó mới giải phóng khí CO2.' },
      { id: 'B', text: 'Khí CO2 thoát ra ngay lập tức từ giọt HCl đầu tiên.' },
      { id: 'C', text: 'HCl chỉ phản ứng với NaHCO3, giữ nguyên Na2CO3.' },
      { id: 'D', text: 'Không có khí thoát ra trong mọi trường hợp.' }
    ],
    correctOptionId: 'A',
    explanation: 'H+ sẽ phản ứng ưu tiên với CO3(2-) trước để tạo HCO3(-). Khi hết CO3(2-) thì H+ mới phản ứng tiếp với HCO3(-) tạo khí CO2.',
    whyWrong: {
      'A': 'Chính xác cơ chế nhỏ từ từ axit.',
      'B': 'Chỉ đúng nếu đổ nhanh HCl.',
      'C': 'Sai thứ tự phản ứng.',
      'D': 'Khí chắc chắn thoát ra khi dư axit.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 65
  },
  {
    id: 'kh-03',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Sinh học)',
    passageText: 'Ở một loài thực vật, alen A quy định thân cao trội hoàn toàn so với alen a quy định thân thấp. Phép lai giữa hai cây dị hợp Aa x Aa thu được thế hệ F1.',
    questionText: 'Trong số các cây thân cao ở F1, xác suất thu được cây có kiểu gen thuần chủng (AA) là bao nhiêu?',
    options: [
      { id: 'A', text: '1/3' },
      { id: 'B', text: '1/4' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '2/3' }
    ],
    correctOptionId: 'A',
    explanation: 'F1 gồm 1AA : 2Aa : 1aa. Trong số cây thân cao (1AA + 2Aa = 3 phần), cây AA chiếm 1 phần -> Xác suất = 1/3.',
    whyWrong: {
      'A': 'Chính xác theo xác suất có điều kiện.',
      'B': '1/4 là trên toàn bộ F1.',
      'C': 'Tính sai.',
      'D': '2/3 là tỷ lệ cây dị hợp Aa trong số thân cao.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 55
  },
  {
    id: 'kh-04',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Địa lý)',
    passageText: 'Vùng Duyên hải Nam Trung Bộ có đặc điểm địa hình hẹp ngang, nhiều sông ngắn và dốc. Mùa mưa ở đây thường đến muộn hơn so với cả nước (tháng 9, 10, 11).',
    questionText: 'Nguyên nhân chính khiến mùa mưa ở Duyên hải Nam Trung Bộ đến muộn và tập trung vào thu đông là do tác động của?',
    options: [
      { id: 'A', text: 'Gió mùa Đông Bắc kết hợp với địa hình chắn gió của dãy Trường Sơn Nam và bão từ Biển Đông.' },
      { id: 'B', text: 'Gió mùa Tây Nam hoạt động mạnh gây mưa lớn.' },
      { id: 'C', text: 'Hiện tượng Tín phong bán cầu Bắc thổi liên tục suốt năm.' },
      { id: 'D', text: 'Ảnh hưởng của dòng biển lạnh dọc bờ biển.' }
    ],
    correctOptionId: 'A',
    explanation: 'Vào thu đông, gió đông bắc đi qua biển đem ẩm, kết hợp địa hình chắn gió Trường Sơn Nam và dải hội tụ nhiệt đới làm mưa tập trung tháng 9-11.',
    whyWrong: {
      'A': 'Chính xác.',
      'B': 'Gió Tây Nam gây hiệu ứng Fơn khô nóng mùa hè.',
      'C': 'Không giải thích được mưa tháng 9-11.',
      'D': 'Dòng biển không phải nguyên nhân chính.'
    },
    difficulty: 'phuc_tap',
    estimatedTimeSeconds: 60
  },
  {
    id: 'kh-05',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Vật lý - Nhiệt)',
    passageText: 'Trong thí nghiệm của Robert Brown (1827), ông quan sát các hạt phấn hoa mịn lơ lửng trong nước dưới kính hiển vi và nhận thấy chúng chuyển động hỗn độn không ngừng.',
    questionText: 'Nguyên nhân cốt lõi gây ra chuyển động hỗn độn của các hạt phấn hoa là do?',
    options: [
      { id: 'A', text: 'Các phân tử nước chuyển động nhiệt không ngừng, va chạm không đối xứng vào hạt phấn hoa từ mọi phía.' },
      { id: 'B', text: 'Bản thân hạt phấn hoa là sinh vật sống đang tự di chuyển.' },
      { id: 'C', text: 'Tác dụng của lực hấp dẫn Trái Đất lên hạt phấn hoa.' },
      { id: 'D', text: 'Dòng đối lưu nhiệt trong cốc nước làm hạt phấn hoa trôi nổi.' }
    ],
    correctOptionId: 'A',
    explanation: 'Thí nghiệm Brown là minh chứng thực nghiệm quan trọng cho mô hình động học phân tử: phân tử nước chuyển động nhiệt liên tục và va chạm vào hạt phấn hoa.',
    whyWrong: {
      'A': 'Chính xác nguyên lý động học phân tử.',
      'B': 'Hạt phấn hoa đã ngâm nước không tự di chuyển sinh học.',
      'C': 'Lực hấp dẫn chỉ kéo hạt đi xuống, không tạo chuyển động hỗn độn.',
      'D': 'Đã khống chế nhiệt độ phòng ổn định không có dòng đối lưu.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 45
  },
  {
    id: 'kh-06',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Lịch sử V-ACT)',
    passageText: 'Tháng 2-1945, Hội nghị I-an-ta (Yalta) được tổ chức với sự tham dự của nguyên thủ 3 cường quốc (Liên Xô, Mỹ, Anh) nhằm thỏa thuận việc kết thúc Chiến tranh thế giới thứ hai và phân chia khu vực ảnh hưởng.',
    questionText: 'Một trong những quyết định quan trọng nhất của Hội nghị I-an-ta nhằm duy trì hòa bình và an ninh thế giới sau chiến tranh là?',
    options: [
      { id: 'A', text: 'Thành lập tổ chức Liên hợp quốc (UN).' },
      { id: 'B', text: 'Thành lập Tổ chức Thương mại Thế giới (WTO).' },
      { id: 'C', text: 'Ký Hiệp ước Phòng thủ Bắc Đại Tây Dương (NATO).' },
      { id: 'D', text: 'Giải tán hoàn toàn quân đội các nước thắng trận.' }
    ],
    correctOptionId: 'A',
    explanation: 'Hội nghị I-an-ta quyết định thành lập Liên hợp quốc để duy trì hòa bình và an ninh thế giới.',
    whyWrong: {
      'A': 'Chính xác theo lịch sử thế giới hiện đại.',
      'B': 'WTO thành lập muộn hơn nhiều (1995).',
      'C': 'NATO thành lập năm 1949 trong Chiến tranh Lạnh.',
      'D': 'Không giải tán quân đội thắng trận.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 40
  }
];

export function getRandomDiagnosticQuestions(count: number = 20): DiagnosticQuestion[] {
  const shuffled = [...DIAGNOSTIC_QUESTION_BANK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export const DIAGNOSTIC_QUESTIONS = DIAGNOSTIC_QUESTION_BANK;
