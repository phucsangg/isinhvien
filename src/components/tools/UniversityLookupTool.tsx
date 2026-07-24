import React, { useState } from 'react';
import { UNIVERSITIES_DATA } from '../../data/universities-data';
import { Search, Filter, AlertCircle, ArrowUpDown, Bookmark, CheckCircle, Info } from 'lucide-react';

export const UniversityLookupTool: React.FC = () => {
  const [userScore, setUserScore] = useState<number>(780);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [savedIds, setSavedIds] = useState<string[]>(['hcmut-cs']);

  const groups = [
    { id: 'all', label: 'Tất cả nhóm ngành' },
    { id: 'Kỹ thuật & Công nghệ', label: 'Kỹ thuật & Công nghệ' },
    { id: 'Kinh tế & Quản trị', label: 'Kinh tế & Quản trị' },
    { id: 'Xã hội & Nhân văn', label: 'Xã hội & Nhân văn' },
    { id: 'Y Dược & Sinh học', label: 'Y Dược & Sinh học' }
  ];

  const filteredUnis = UNIVERSITIES_DATA.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          uni.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          uni.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGroup = selectedGroup === 'all' || uni.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  const toggleSave = (id: string) => {
    setSavedIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            Dữ liệu tra cứu V-ACT 2023 – 2025
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tra Cứu Điểm Chuẩn Trường & Ngành Xét Tuyển V-ACT
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Nhập điểm dự báo hoặc điểm thi của bạn để so sánh khoảng điểm trúng tuyển tham khảo của các trường ĐHQG TP.HCM.
          </p>
        </div>

        {/* Mandatory Transparency Box */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm text-amber-900 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <strong>Thông tin dữ liệu:</strong> Dữ liệu điểm chuẩn được tổng hợp từ cổng thông tin tuyển sinh các năm 2023, 2024 và 2025. Cập nhật ngày 15/01/2026. Điểm chuẩn có thể thay đổi tùy thuộc vào chỉ tiêu và số lượng thí sinh đăng ký từng năm. Hệ thống không đưa ra tuyên bố chắc chắn đỗ hoặc rớt.
          </div>
        </div>

        {/* Score Calculator Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
          <div className="sm:col-span-4">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Nhập điểm V-ACT của bạn
            </label>
            <div className="relative">
              <input
                type="number"
                min={300}
                max={1200}
                value={userScore}
                onChange={(e) => setUserScore(Number(e.target.value))}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-lg font-black text-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <span className="absolute right-3 top-3.5 text-xs text-slate-400 font-bold">/ 1.200</span>
            </div>
          </div>

          <div className="sm:col-span-8 space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Đánh giá mức độ an toàn so với điểm chuẩn 2025</span>
              <span className="text-blue-600">{userScore} Điểm</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden flex">
              <div className="bg-rose-400 h-full w-[60%]" title="Rủi ro (< 700)"></div>
              <div className="bg-amber-400 h-full w-[20%]" title="Cạnh tranh (700 - 850)"></div>
              <div className="bg-emerald-500 h-full w-[20%]" title="An toàn (> 850)"></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
              <span>&lt; 650: Nguy cơ</span>
              <span>750 - 850: Cạnh tranh</span>
              <span>&gt; 880: An toàn cao</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên trường, ngành hoặc mã..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
            />
          </div>

          {/* Group Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {groups.map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedGroup(g.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedGroup === g.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table View */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Mã & Trường Đại Học</th>
                  <th className="py-4 px-6">Ngành Đào Tạo</th>
                  <th className="py-4 px-6 text-center">Điểm 2023</th>
                  <th className="py-4 px-6 text-center">Điểm 2024</th>
                  <th className="py-4 px-6 text-center">Điểm 2025</th>
                  <th className="py-4 px-6 text-center">Đánh giá khả năng</th>
                  <th className="py-4 px-6 text-center">Lưu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredUnis.map((uni) => {
                  const isSaved = savedIds.includes(uni.id);
                  const diff2025 = userScore - uni.score2025;

                  let statusBadge = (
                    <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full text-[11px]">
                      An toàn (+{diff2025})
                    </span>
                  );
                  if (diff2025 < -30) {
                    statusBadge = (
                      <span className="bg-rose-100 text-rose-800 font-bold px-2.5 py-1 rounded-full text-[11px]">
                        Cần cố gắng ({diff2025})
                      </span>
                    );
                  } else if (diff2025 < 0) {
                    statusBadge = (
                      <span className="bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full text-[11px]">
                        Cạnh tranh ({diff2025})
                      </span>
                    );
                  }

                  return (
                    <tr key={uni.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900">
                        <div className="text-blue-600 font-extrabold text-[11px]">{uni.code}</div>
                        <div>{uni.name}</div>
                        <div className="text-[10px] text-slate-400 font-normal">{uni.location}</div>
                      </td>

                      <td className="py-4 px-6 font-semibold text-slate-800">
                        <div>{uni.major}</div>
                        <div className="text-[10px] text-slate-400 font-normal">{uni.notes}</div>
                      </td>

                      <td className="py-4 px-6 text-center font-semibold text-slate-600">{uni.score2023}</td>
                      <td className="py-4 px-6 text-center font-semibold text-slate-600">{uni.score2024}</td>
                      <td className="py-4 px-6 text-center font-bold text-slate-900 text-sm">{uni.score2025}</td>

                      <td className="py-4 px-6 text-center">{statusBadge}</td>

                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => toggleSave(uni.id)}
                          className={`p-2 rounded-xl border transition-all ${
                            isSaved
                              ? 'bg-amber-50 border-amber-300 text-amber-600'
                              : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
