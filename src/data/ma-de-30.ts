import { DiagnosticQuestion } from '../types';

export const MA_DE_30_QUESTIONS: DiagnosticQuestion[] = [
  // ==========================================
  // PHẦN 1: NGÔN NGỮ (TIẾNG VIỆT 20 CÂU, TIẾNG ANH 20 CÂU)
  // ==========================================
  
  // --- TIẾNG VIỆT (CÂU 1 - 20) ---
  {
    id: 'md30-01',
    domain: 'tieng_viet',
    domainName: 'Tiếng Việt (Từ vựng & Chính tả)',
    questionText: 'Cái kết trong các tác phẩm truyện cổ tích thần kỳ truyền thống Việt Nam thường mang đặc điểm nào dưới đây?',
    options: [
      { id: 'A', text: 'Cái kết có hậu (Người hiền gặp lành, kẻ ác bị trừng phạt)' },
      { id: 'B', text: 'Cái kết bi kịch hoàn toàn' },
      { id: 'C', text: 'Cái kết bỏ lửng gây tò mò' },
      { id: 'D', text: 'Cái kết ngẫu nhiên không có tính giáo huấn' }
    ],
    correctOptionId: 'A',
    explanation: 'Truyện cổ tích thần kỳ phản ánh ước mơ công lý của nhân dân lao động: cái thiện luôn chiến thắng cái ác, người ở hiền gặp lành.',
    whyWrong: {
      'A': 'Chính xác theo đặc trưng thể loại cổ tích.',
      'B': 'Bi kịch là đặc trưng của kịch thần thoại Hy Lạp hoặc truyền thuyết bi thương.',
      'C': 'Kết bỏ lửng thuộc phong cách hiện đại.',
      'D': 'Truyện cổ tích luôn mang tính giáo huấn sâu sắc.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 30
  },
  {
    id: 'md30-02',
    domain: 'tieng_viet',
    domainName: 'Tiếng Việt (Văn học trung đại)',
    passageText: 'Đọc các đoạn thơ:\n1. "Vô vi trên điện các / Chốn chốn dứt đao binh" (Pháp Thuận)\n2. "Thái bình nên gắng sức / Non nước ấy ngàn thu" (Trần Quang Khải)\n3. "Xưa nay nhân giả là vô địch / Lọ phải khư khư thích chiến tranh" (Nguyễn Bỉnh Khiêm)',
    questionText: 'Khát vọng bao trùm của người xưa được thể hiện qua cả 3 đoạn thơ trên là gì?',
    options: [
      { id: 'A', text: 'Mơ ước vinh hoa phú quý' },
      { id: 'B', text: 'Khát vọng hòa bình, nhân nghĩa và đất nước thái bình' },
      { id: 'C', text: 'Ý chí bành trướng lãnh thổ' },
      { id: 'D', text: 'Tư tưởng ở ẩn lánh đời' }
    ],
    correctOptionId: 'B',
    explanation: 'Cả 3 đoạn thơ đều chứa các từ khóa biểu thị khát vọng hòa bình: "dứt đao binh", "thái bình ngàn thu", "không thích chiến tranh".',
    whyWrong: {
      'A': 'Không đề cập đến của cải hay phú quý.',
      'B': 'Chính xác.',
      'C': 'Ngược lại với tinh thần chống chiến tranh bành trướng.',
      'D': 'Đoạn thơ thể hiện trách nhiệm với giang sơn, không phải ở ẩn.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 45
  },
  {
    id: 'md30-03',
    domain: 'tieng_viet',
    domainName: 'Tiếng Việt (Biện pháp tu từ)',
    passageText: 'Đọc đoạn thơ trong bài Đàn ghi-ta của Lorca (Thanh Thảo):\n"tiếng ghi-ta nâu / bầu trời cô gái ấy / tiếng ghi-ta xanh biết mấy / tiếng ghi-ta tròn bọt nước vỡ tan / tiếng ghi-ta ròng ròng máu chảy"',
    questionText: 'Tác giả đã sử dụng sự kết hợp của những biện pháp tu từ nghệ thuật nào trong đoạn thơ trên?',
    options: [
      { id: 'A', text: 'Điệp ngữ, Ẩn dụ chuyển đổi cảm giác, Nhân hóa' },
      { id: 'B', text: 'So sánh, Nói quá, Liệt kê' },
      { id: 'C', text: 'Hoán dụ, Nói giảm nói tránh, Điệp từ' },
      { id: 'D', text: 'Câu hỏi tự vấn, Chơi chữ, Đối lập' }
    ],
    correctOptionId: 'A',
    explanation: 'Điệp cụm từ "tiếng ghi-ta"; Ẩn dụ chuyển đổi cảm giác ("tiếng ghi-ta nâu", "xanh", "tròn"); Nhân hóa ("tiếng ghi-ta ròng ròng máu chảy").',
    whyWrong: {
      'A': 'Chính xác các biện pháp tu từ xuất hiện.',
      'B': 'Không có phép so sánh trực tiếp "như".',
      'C': 'Không có nói giảm nói tránh.',
      'D': 'Không có chơi chữ.'
    },
    difficulty: 'phuc_tap',
    estimatedTimeSeconds: 50
  },
  {
    id: 'md30-04',
    domain: 'tieng_viet',
    domainName: 'Tiếng Việt (Thể loại văn học)',
    passageText: 'Đọc đoạn thơ trong Mây đầu ô (Quang Dũng):\n"Mây ở đầu ô mây lang thang / Ôi! Chật làm sao / Góc phố phường / Mây ở đầu ô / Hẹn những chân trời xa lạ / Qua một ngọn cột đèn / Chiều tối lại bừng con mắt đỏ / Cành bàng mái cũ khẳng khiu / Vườn đẹp khi mùa rụng lá / Cành bàng lại mở tàn xanh / Mùa hạ về theo chim sẻ / Nhưng ta có gì / Tự thấy những ngày không tẻ?"',
    questionText: 'Văn bản trên thuộc thể thơ nào?',
    options: [
      { id: 'A', text: 'Thơ năm chữ' },
      { id: 'B', text: 'Thơ tự do' },
      { id: 'C', text: 'Thơ bảy chữ' },
      { id: 'D', text: 'Thơ lục bát' }
    ],
    correctOptionId: 'B',
    explanation: 'Số chữ trong các dòng thơ không bằng nhau (từ 3 chữ đến 8 chữ), nhịp điệu linh hoạt tự do.',
    whyWrong: {
      'A': 'Số chữ không cố định 5 chữ.',
      'B': 'Chính xác thể thơ tự do.',
      'C': 'Số chữ không cố định 7 chữ.',
      'D': 'Không có cấu trúc lục - bát.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 30
  },
  {
    id: 'md30-05',
    domain: 'tieng_viet',
    domainName: 'Tiếng Việt (Đọc hiểu thần thoại)',
    passageText: 'Đọc đoạn trích Thần thoại H’mông (Chử Lầu):\n"Con người lúc đó sống đến 900 tuổi, đến hạn cũng chết, nhưng được vào vườn Din-giang-ca của Chử Lầu. Ở đó trong 12 ngày tự nhiên lột da, sống và trẻ lại rồi trở về nhà cũ. Nhưng có một nhà nọ, nàng dâu xích mích với mẹ chồng, thường hắt hủi xỉ vả nên mẹ chồng giận, quyết ở luôn tại vườn Din-giang-ca không về. Ở đây bà ta ăn quả đào trắng, uống nước suối, phạm vào lệnh cấm của Chử Lầu, làm cho Chử Lầu giận, bèn cấm loài người không được đến vườn của mình nữa. Từ đó, loài người hễ chết là chết luôn."',
    questionText: 'Nội dung cốt lõi của đoạn thần thoại trên giải thích cho hiện tượng nào?',
    options: [
      { id: 'A', text: 'Nguồn gốc sự hình thành của các loài động vật' },
      { id: 'B', text: 'Nguồn gốc cái chết vĩnh viễn của con người trong quan niệm dân gian' },
      { id: 'C', text: 'Sự ra đời của nghề làm ruộng' },
      { id: 'D', text: 'Sự xuất hiện của hiện tượng ngày và đêm' }
    ],
    correctOptionId: 'B',
    explanation: 'Đoạn trích giải thích lý do con người không còn được cải lão hoàn đồng mà "hễ chết là chết luôn" do vi phạm cấm lệnh của Chử Lầu.',
    whyWrong: {
      'A': 'Không nói về động vật.',
      'B': 'Chính xác lý giải nguồn gốc cái chết.',
      'C': 'Không có chi tiết nông nghiệp.',
      'D': 'Không đề cập ngày đêm.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 40
  },

  // --- TIẾNG ANH (CÂU 21 - 40) ---
  {
    id: 'md30-21',
    domain: 'tieng_anh',
    domainName: 'Tiếng Anh (Vocabulary)',
    questionText: 'Choose the word that is CLOSEST in meaning to the underlined word: "The company plans to IMPLEMENT a comprehensive AI-driven assessment system next year."',
    options: [
      { id: 'A', text: 'execute (thực thi)' },
      { id: 'B', text: 'delay (trì hoãn)' },
      { id: 'C', text: 'reject (từ chối)' },
      { id: 'D', text: 'abandon (từ bỏ)' }
    ],
    correctOptionId: 'A',
    explanation: '"Implement" means to put a decision or plan into effect, which is closest in meaning to "execute".',
    whyWrong: {
      'A': 'Correct synonym.',
      'B': 'Delay is the opposite of prompt execution.',
      'C': 'Reject means refuse.',
      'D': 'Abandon means give up.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 30
  },
  {
    id: 'md30-22',
    domain: 'tieng_anh',
    domainName: 'Tiếng Anh (Grammar & Sentence Structures)',
    questionText: 'Complete the sentence: "Had the students reviewed the logic reasoning patterns thoroughly, they ______ such careless errors in the mock exam."',
    options: [
      { id: 'A', text: 'would not have made' },
      { id: 'B', text: 'will not make' },
      { id: 'C', text: 'did not make' },
      { id: 'D', text: 'would not make' }
    ],
    correctOptionId: 'A',
    explanation: 'This is an inverted Third Conditional sentence: "Had + S + V3/ed, S + would/could + have + V3/ed".',
    whyWrong: {
      'A': 'Correct form for past unreal conditional.',
      'B': 'Will not make is for future conditional.',
      'C': 'Did not make lacks conditional modal verb.',
      'D': 'Would not make is Second Conditional.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 45
  },

  // ==========================================
  // PHẦN 2: TOÁN HỌC, LOGIC & PHÂN TÍCH SỐ LIỆU (40 CÂU)
  // ==========================================

  // --- TOÁN HỌC (CÂU 41 - 60) ---
  {
    id: 'md30-41',
    domain: 'toan_hoc',
    domainName: 'Toán học (Cực trị hàm số)',
    questionText: 'Tìm điểm cực đại của đồ thị hàm số y = x³ - 3x² + 2.',
    options: [
      { id: 'A', text: 'x = 0' },
      { id: 'B', text: 'x = 2' },
      { id: 'C', text: 'x = 1' },
      { id: 'D', text: 'x = -1' }
    ],
    correctOptionId: 'A',
    explanation: 'Ta có y\' = 3x² - 6x = 0 <=> x = 0 hoặc x = 2. Tính y\'\' = 6x - 6. Tại x = 0 thì y\'\'(0) = -6 < 0 => x = 0 là điểm cực đại.',
    whyWrong: {
      'A': 'Chính xác.',
      'B': 'x = 2 là điểm cực tiểu.',
      'C': 'x = 1 là điểm uốn.',
      'D': 'x = -1 không phải nghiệm của y\' = 0.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 40
  },
  {
    id: 'md30-42',
    domain: 'toan_hoc',
    domainName: 'Toán học (Ứng dụng Đạo hàm Tối ưu)',
    passageText: 'Một doanh nghiệp sản xuất x sản phẩm với hàm tổng chi phí C(x) = 500 + 20x + 0.1x² (nghìn đồng). Biết giá bán mỗi sản phẩm là 60 nghìn đồng.',
    questionText: 'Để lợi nhuận thu được đạt giá trị lớn nhất, doanh nghiệp cần sản xuất bao nhiêu sản phẩm?',
    options: [
      { id: 'A', text: '200 sản phẩm' },
      { id: 'B', text: '150 sản phẩm' },
      { id: 'C', text: '300 sản phẩm' },
      { id: 'D', text: '100 sản phẩm' }
    ],
    correctOptionId: 'A',
    explanation: 'Lợi nhuận P(x) = 60x - (500 + 20x + 0.1x²) = -0.1x² + 40x - 500. P\'(x) = -0.2x + 40 = 0 <=> x = 200.',
    whyWrong: {
      'A': 'Chính xác 200 sản phẩm.',
      'B': '150 chưa đạt lợi nhuận cực đại.',
      'C': '300 làm gia tăng chi phí quá mức.',
      'D': '100 sản phẩm quá ít.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 50
  },

  // --- TƯ DUY LOGIC (CÂU 61 - 70) ---
  {
    id: 'md30-61',
    domain: 'logic',
    domainName: 'Tư duy Logic (Mệnh đề kéo theo)',
    questionText: 'Cho mệnh đề: "Nếu một số tự nhiên n chia hết cho 6 thì n chia hết cho 3". Mệnh đề đảo của mệnh đề trên là gì và tính đúng sai của nó?',
    options: [
      { id: 'A', text: 'Nếu n chia hết cho 3 thì n chia hết cho 6 (Mệnh đề Sai, VD: n = 9)' },
      { id: 'B', text: 'Nếu n không chia hết cho 6 thì n không chia hết cho 3 (Mệnh đề Đúng)' },
      { id: 'C', text: 'Nếu n chia hết cho 3 thì n chia hết cho 6 (Mệnh đề Đúng)' },
      { id: 'D', text: 'Nếu n không chia hết cho 3 thì n không chia hết cho 6 (Mệnh đề Sai)' }
    ],
    correctOptionId: 'A',
    explanation: 'Mệnh đề đảo của P => Q là Q => P: "Nếu n chia hết cho 3 thì n chia hết cho 6". Phản ví dụ: n = 9 chia hết cho 3 nhưng không chia hết cho 6 => Mệnh đề đảo SAI.',
    whyWrong: {
      'A': 'Chính xác dạng mệnh đề đảo và phản ví dụ.',
      'B': 'Đây là mệnh đề phản đảo, không phải mệnh đề đảo.',
      'C': 'Xác định sai tính đúng sai.',
      'D': 'Sai công thức mệnh đề đảo.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 35
  },
  {
    id: 'md30-62',
    domain: 'logic',
    domainName: 'Tư duy Logic (Sắp xếp vị trí)',
    passageText: 'Có 5 học sinh A, B, C, D, E xếp thành một hàng ngang chụp ảnh theo các điều kiện:\n1. A luôn đứng ở đầu hàng bên trái.\n2. B và C luôn đứng cạnh nhau.\n3. D không đứng cạnh E.',
    questionText: 'Có bao nhiêu cách xếp hàng thỏa mãn tất cả các điều kiện trên?',
    options: [
      { id: 'A', text: '12 cách' },
      { id: 'B', text: '8 cách' },
      { id: 'C', text: '16 cách' },
      { id: 'D', text: '24 cách' }
    ],
    correctOptionId: 'A',
    explanation: 'A cố định ở vị trí 1. Còn lại 4 vị trí (2,3,4,5) cho {B,C,D,E}. Coi (BC) là khối X (2 cách xếp B,C). Chọn vị trí cho X và D,E sao cho D không kề E => Tổng cộng có 12 cách hợp lệ.',
    whyWrong: {
      'A': 'Chính xác 12 cách.',
      'B': 'Đếm thiếu trường hợp.',
      'C': 'Đếm thừa trường hợp D kề E.',
      'D': 'Chưa trừ trường hợp vi phạm.'
    },
    difficulty: 'phuc_tap',
    estimatedTimeSeconds: 60
  },

  // --- PHÂN TÍCH SỐ LIỆU (CÂU 71 - 80) ---
  {
    id: 'md30-71',
    domain: 'so_lieu',
    domainName: 'Phân tích số liệu (Biểu đồ Tỷ trọng)',
    passageText: 'Cho bảng số liệu cơ cấu GDP Việt Nam năm 2025: Nông - Lâm - Thủy sản chiếm 12%, Công nghiệp & Xây dựng chiếm 38%, Dịch vụ chiếm 42%, Thuế sản phẩm trừ trợ cấp sản phẩm chiếm 8%.',
    questionText: 'Nếu tổng GDP Việt Nam đạt 450 tỷ USD, thì giá trị đóng góp của ngành Dịch vụ cao hơn ngành Nông - Lâm - Thủy sản bao nhiêu tỷ USD?',
    options: [
      { id: 'A', text: '135 tỷ USD' },
      { id: 'B', text: '189 tỷ USD' },
      { id: 'C', text: '54 tỷ USD' },
      { id: 'D', text: '171 tỷ USD' }
    ],
    correctOptionId: 'A',
    explanation: 'Chênh lệch tỷ trọng = 42% - 12% = 30%. Giá trị chênh lệch = 450 x 30% = 135 tỷ USD.',
    whyWrong: {
      'A': 'Chính xác 135 tỷ USD.',
      'B': '189 tỷ USD là đóng góp của riêng ngành Dịch vụ (450 x 42%).',
      'C': '54 tỷ USD là đóng góp của Nông nghiệp (450 x 12%).',
      'D': 'Tính toán sai tỷ lệ.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 40
  },

  // ==========================================
  // PHẦN 3: SUY LUẬN KHOA HỌC (40 CÂU)
  // ==========================================

  // --- VẬT LÝ ---
  {
    id: 'md30-81',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Vật lý - Động học phân tử)',
    passageText: 'Trong thí nghiệm quan sát hạt phấn hoa lơ lửng trong nước dưới kính hiển vi (chuyển động Brown), người ta thấy các hạt phấn hoa chuyển động hỗn độn không ngừng.',
    questionText: 'Nguyên nhân cốt lõi gây ra chuyển động Brown là gì?',
    options: [
      { id: 'A', text: 'Do các phân tử nước chuyển động nhiệt không ngừng, va chạm không đối xứng vào hạt phấn hoa' },
      { id: 'B', text: 'Do hạt phấn hoa là tế bào sống tự di chuyển' },
      { id: 'C', text: 'Do tác dụng của lực hấp dẫn Trái Đất' },
      { id: 'D', text: 'Do dòng đối lưu nhiệt trong cốc nước' }
    ],
    correctOptionId: 'A',
    explanation: 'Chuyển động Brown minh chứng cho thuyết động học phân tử: các phân tử chất lỏng chuyển động nhiệt hỗn độn và va chạm vào hạt phấn hoa.',
    whyWrong: {
      'A': 'Chính xác theo nguyên lý Vật lý nhiệt.',
      'B': 'Hạt phấn hoa không tự di chuyển.',
      'C': 'Lực hấp dẫn kéo xuống chứ không làm chuyển động hỗn độn.',
      'D': 'Đã khống chế nhiệt độ không có dòng đối lưu.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 35
  },

  // --- HÓA HỌC ---
  {
    id: 'md30-91',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Hóa học - Cân bằng hóa học)',
    passageText: 'Cho phản ứng tỏa nhiệt ở thể khí: N₂ (k) + 3H₂ (k) ⇄ 2NH₃ (k) (ΔH < 0).',
    questionText: 'Để cân bằng chuyển dịch theo chiều thuận (tăng hiệu suất tạo NH₃), cần áp dụng biện pháp nào?',
    options: [
      { id: 'A', text: 'Tăng áp suất chung và giảm nhiệt độ hệ phản ứng' },
      { id: 'B', text: 'Giảm áp suất chung và tăng nhiệt độ hệ phản ứng' },
      { id: 'C', text: 'Tăng nhiệt độ và giảm nồng độ N₂' },
      { id: 'D', text: 'Dùng chất xúc tác Fe' }
    ],
    correctOptionId: 'A',
    explanation: 'Theo nguyên lý Le Chatelier: Phản ứng thuận làm giảm số mol khí (4 mol -> 2 mol) nên tăng áp suất cân bằng chuyển dịch theo chiều thuận. Phản ứng tỏa nhiệt (ΔH < 0) nên giảm nhiệt độ cân bằng chuyển dịch theo chiều tỏa nhiệt (chiều thuận).',
    whyWrong: {
      'A': 'Chính xác nguyên lý Le Chatelier.',
      'B': 'Làm cân bằng chuyển dịch chiều nghịch.',
      'C': 'Giảm nồng độ chất tham gia làm chuyển dịch chiều nghịch.',
      'D': 'Chất xúc tác chỉ tăng tốc độ phản ứng, không chuyển dịch cân bằng.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 45
  },

  // --- SINH HỌC ---
  {
    id: 'md30-101',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Sinh học - Di truyền học)',
    passageText: 'Ở một loài thực vật, alen A quy định thân cao trội hoàn toàn so với alen a quy định thân thấp. Phép lai giữa hai cây dị hợp Aa x Aa thu được thế hệ F1.',
    questionText: 'Trong số các cây thân cao ở thế hệ F1, xác suất chọn được cây có kiểu gen thuần chủng (AA) là bao nhiêu?',
    options: [
      { id: 'A', text: '1/3' },
      { id: 'B', text: '1/4' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '3/4' }
    ],
    correctOptionId: 'A',
    explanation: 'F1 có tỉ lệ kiểu gen: 1AA : 2Aa : 1aa. Số cây thân cao gồm (1AA + 2Aa = 3 phần). Vậy tỉ lệ cây thuần chủng AA trong số cây thân cao = 1/3.',
    whyWrong: {
      'A': 'Chính xác xác suất có điều kiện.',
      'B': '1/4 là trên toàn bộ F1 bao gồm cả cây thân thấp aa.',
      'C': '1/2 là tỉ lệ cây Aa trong toàn bộ F1.',
      'D': '3/4 là tỉ lệ cây thân cao tổng số.'
    },
    difficulty: 'trung_binh',
    estimatedTimeSeconds: 45
  },

  // --- LỊCH SỬ ---
  {
    id: 'md30-111',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Lịch sử thế giới)',
    passageText: 'Tháng 2-1945, Hội nghị I-an-ta (Yalta) được tổ chức với sự tham gia của nguyên thủ 3 cường quốc (Liên Xô, Mỹ, Anh) nhằm thỏa thuận việc kết thúc Chiến tranh thế giới thứ hai và phân chia khu vực ảnh hưởng.',
    questionText: 'Quyết định quan trọng nhất của Hội nghị I-an-ta nhằm duy trì hòa bình và an ninh thế giới sau chiến tranh là?',
    options: [
      { id: 'A', text: 'Thành lập tổ chức Liên hợp quốc (UN)' },
      { id: 'B', text: 'Thành lập Tổ chức Thương mại Thế giới (WTO)' },
      { id: 'C', text: 'Ký Hiệp ước Phòng thủ Bắc Đại Tây Dương (NATO)' },
      { id: 'D', text: 'Giải tán hoàn toàn quân đội các nước thắng trận' }
    ],
    correctOptionId: 'A',
    explanation: 'Hội nghị I-an-ta quyết định thành lập tổ chức Liên hợp quốc (UN) nhằm duy trì hòa bình và an ninh thế giới.',
    whyWrong: {
      'A': 'Chính xác kiến thức Lịch sử 12.',
      'B': 'WTO thành lập năm 1995.',
      'C': 'NATO thành lập năm 1949.',
      'D': 'Không giải tán quân đội các nước thắng trận.'
    },
    difficulty: 'de',
    estimatedTimeSeconds: 35
  },

  // --- ĐỊA LÝ ---
  {
    id: 'md30-115',
    domain: 'khoa_hoc',
    domainName: 'Suy luận Khoa học (Địa lý Việt Nam)',
    passageText: 'Vùng Duyên hải Nam Trung Bộ có đặc điểm địa hình hẹp ngang, nhiều sông ngắn và dốc. Mùa mưa ở đây thường đến muộn hơn so với cả nước (tập trung từ tháng 9 đến tháng 11).',
    questionText: 'Nguyên nhân chính khiến mùa mưa ở Duyên hải Nam Trung Bộ đến muộn và tập trung vào thu đông là do?',
    options: [
      { id: 'A', text: 'Tác động của Gió mùa Đông Bắc qua biển kết hợp địa hình chắn gió Trường Sơn Nam và bão từ Biển Đông' },
      { id: 'B', text: 'Ảnh hưởng của gió mùa Tây Nam thổi từ Ấn Độ Dương' },
      { id: 'C', text: 'Tín phong bán cầu Bắc thổi liên tục quanh năm' },
      { id: 'D', text: 'Dòng biển lạnh chạy dọc bờ biển' }
    ],
    correctOptionId: 'A',
    explanation: 'Vào mùa thu đông, gió hướng đông bắc qua biển đem ẩm gặp địa hình chắn gió dãy Trường Sơn Nam tạo nên mưa lớn tập trung tháng 9-11.',
    whyWrong: {
      'A': 'Chính xác đặc điểm khí hậu Nam Trung Bộ.',
      'B': 'Gió Tây Nam gây hiệu ứng phơn khô nóng vào giữa hè.',
      'C': 'Tín phong không giải thích được đỉnh mưa thu đông.',
      'D': 'Dòng biển không phải nguyên nhân tạo mưa.'
    },
    difficulty: 'phuc_tap',
    estimatedTimeSeconds: 50
  }
];
