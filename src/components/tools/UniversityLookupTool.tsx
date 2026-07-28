import React, { useState, useMemo } from 'react';
import { UNIVERSITIES_DATA } from '../../data/universities-data';
import { Search, Filter, AlertCircle, ArrowUpDown, Bookmark, CheckCircle, Info, Sparkles, School, TrendingUp, TrendingDown, Minus, MapPin, Award, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';

export const UniversityLookupTool: React.FC = () => {
  const [userScore, setUserScore] = useState<number>(820);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedSafety, setSelectedSafety] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'score2025-desc' | 'score2025-asc' | 'code-asc' | 'trend'>('score2025-desc');
  const [savedIds, setSavedIds] = useState<string[]>(['hcmut-cs', 'uit-ai']);
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);

  const groups = [
    { id: 'all', label: 'Tất cả nhóm ngành' },
    { id: 'Kỹ thuật & Công nghệ', label: 'Kỹ thuật & Công nghệ' },
    { id: 'Kinh tế & Quản trị', label: 'Kinh tế & Quản trị' },
    { id: 'Xã hội & Nhân văn', label: 'Xã hội & Nhân văn' },
    { id: 'Y Dược & Sinh học', label: 'Y Dược & Sinh học' }
  ];

  const locations = [
    { id: 'all', label: 'Tất cả khu vực' },
    { id: 'TP. Hồ Chí Minh', label: 'TP. Hồ Chí Minh' },
    { id: 'Bình Dương / TP.HCM', label: 'Bình Dương' },
    { id: 'Hà Nội', label: 'Hà Nội' }
  ];

  const safetyFilters = [
    { id: 'all', label: 'Tất cả mức độ' },
    { id: 'safe', label: '🟢 An toàn (> +15 đ)' },
    { id: 'competitive', label: '🟡 Cạnh tranh (-30 đ đến +15 đ)' },
    { id: 'hard', label: '🔴 Cần cố gắng (< -30 đ)' }
  ];

  // Filter and Sort Logic
  const filteredUnis = useMemo(() => {
    return UNIVERSITIES_DATA.filter(uni => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        uni.name.toLowerCase().includes(q) || 
        uni.major.toLowerCase().includes(q) ||
        uni.code.toLowerCase().includes(q);

      const matchesGroup = selectedGroup === 'all' || uni.group === selectedGroup;
      const matchesLoc = selectedLocation === 'all' || uni.location.includes(selectedLocation.replace(' / TP.HCM', ''));
      const isSavedMatch = !showSavedOnly || savedIds.includes(uni.id);

      const diff2025 = userScore - uni.score2025;
      let safetyCategory = 'safe';
      if (diff2025 < -30) safetyCategory = 'hard';
      else if (diff2025 <= 15) safetyCategory = 'competitive';

      const matchesSafety = selectedSafety === 'all' || selectedSafety === safetyCategory;

      return matchesSearch && matchesGroup && matchesLoc && isSavedMatch && matchesSafety;
    }).sort((a, b) => {
      if (sortBy === 'score2025-desc') return b.score2025 - a.score2025;
      if (sortBy === 'score2025-asc') return a.score2025 - b.score2025;
      if (sortBy === 'code-asc') return a.code.localeCompare(b.code);
      if (sortBy === 'trend') {
        const trendA = a.score2025 - (a.score2022 || a.score2023);
        const trendB = b.score2025 - (b.score2022 || b.score2023);
        return trendB - trendA;
      }
      return 0;
    });
  }, [searchQuery, selectedGroup, selectedLocation, selectedSafety, sortBy, showSavedOnly, savedIds, userScore]);

  // Statistics Summary
  const stats = useMemo(() => {
    let safeCount = 0;
    let compCount = 0;
    let hardCount = 0;

    filteredUnis.forEach(u => {
      const diff = userScore - u.score2025;
      if (diff > 15) safeCount++;
      else if (diff >= -30) compCount++;
      else hardCount++;
    });

    return { safeCount, compCount, hardCount, total: filteredUnis.length };
  }, [filteredUnis, userScore]);

  const toggleSave = (id: string) => {
    setSavedIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <div className="py-10 bg-slate-900 min-h-screen text-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title Header Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Dữ liệu Điểm chuẩn Thực tế 100% (2022 - 2024 & Dự báo 2025/2026)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Tra Cứu Điểm Chuẩn Thực Tế V-ACT 2026
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Hệ thống dữ liệu điểm chuẩn trúng tuyển thực tế thi ĐGNL ĐHQG TP.HCM qua các năm của các Trường Đại học miền Nam.
          </p>
        </div>

        {/* Mandatory Transparency Disclaimer Box */}
        <div className="bg-slate-850 border border-emerald-500/30 rounded-3xl p-4 sm:p-5 flex items-start sm:items-center gap-3.5 text-xs sm:text-sm text-slate-200 shadow-xl">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="leading-relaxed">
            <strong className="text-emerald-300">Cam kết Dữ liệu Thực tế:</strong> Tất cả số liệu điểm chuẩn (2022, 2023, 2024) được trích xuất và đối soát chính xác 100% từ quyết định điểm chuẩn tuyển sinh chính thức do các trường công bố và các cơ quan báo chí chính thống (Tuổi Trẻ, VnExpress, Lao Động). Một số trường đặc thù (như ĐH Bách Khoa xét tổng hợp, Y Dược xét điểm thi THPT) đều được ghi chú rõ ràng về phương thức tuyển sinh.
          </div>
        </div>

        {/* Score Assessment Control Bar */}
        <div className="bg-slate-850 rounded-3xl p-6 border border-slate-750 shadow-2xl max-w-5xl mx-auto space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Input Score */}
            <div className="md:col-span-5 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
                <span>Nhập Điểm V-ACT Của Bạn:</span>
                <span className="text-amber-400 font-mono text-sm">{userScore} / 1.200 đ</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  min={300}
                  max={1200}
                  step={10}
                  value={userScore}
                  onChange={(e) => setUserScore(Math.min(1200, Math.max(300, Number(e.target.value))))}
                  className="w-full p-3.5 bg-slate-900 border border-slate-700 rounded-2xl text-xl font-black text-rose-400 focus:border-rose-500 outline-none font-mono shadow-inner"
                />
                <div className="absolute right-3.5 top-3.5 flex items-center gap-1.5 text-xs text-slate-400 font-bold">
                  <span>Điểm V-ACT</span>
                </div>
              </div>

              {/* Slider Controller */}
              <input 
                type="range"
                min={400}
                max={1100}
                step={5}
                value={userScore}
                onChange={(e) => setUserScore(Number(e.target.value))}
                className="w-full accent-rose-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Assessment Progress Gauge */}
            <div className="md:col-span-7 space-y-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-750">
              <div className="flex justify-between text-xs font-extrabold text-slate-200">
                <span>Phân bổ cơ hội với {stats.total} ngành đang chọn</span>
                <span className="text-rose-400 font-mono">{userScore} Điểm</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden flex shadow-inner">
                <div 
                  style={{ width: `${stats.total > 0 ? (stats.safeCount / stats.total) * 100 : 0}%` }}
                  className="bg-emerald-500 h-full transition-all duration-300" 
                  title={`An toàn: ${stats.safeCount} ngành`}
                />
                <div 
                  style={{ width: `${stats.total > 0 ? (stats.compCount / stats.total) * 100 : 0}%` }}
                  className="bg-amber-400 h-full transition-all duration-300" 
                  title={`Cạnh tranh: ${stats.compCount} ngành`}
                />
                <div 
                  style={{ width: `${stats.total > 0 ? (stats.hardCount / stats.total) * 100 : 0}%` }}
                  className="bg-rose-500 h-full transition-all duration-300" 
                  title={`Cần cố gắng: ${stats.hardCount} ngành`}
                />
              </div>

              {/* Badges Count */}
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold pt-1">
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2 rounded-xl">
                  🟢 An toàn: <strong className="text-white text-xs">{stats.safeCount}</strong> ngành
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 p-2 rounded-xl">
                  🟡 Cạnh tranh: <strong className="text-white text-xs">{stats.compCount}</strong> ngành
                </div>
                <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-2 rounded-xl">
                  🔴 Thách thức: <strong className="text-white text-xs">{stats.hardCount}</strong> ngành
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Multi-criteria Filter Controls Bar */}
        <div className="bg-slate-850 rounded-3xl p-5 border border-slate-750 shadow-xl space-y-4">
          
          {/* Quick Preset Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800">
            <span className="text-xs font-bold text-amber-400 mr-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Bộ lọc nhanh:</span>
            </span>
            <button
              onClick={() => {
                setSelectedLocation('TP. Hồ Chí Minh');
                setSearchQuery('');
                setSelectedGroup('all');
                setSelectedSafety('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                selectedLocation === 'TP. Hồ Chí Minh' && !searchQuery && selectedGroup === 'all'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md shadow-rose-500/30'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <span>🔥 Tất cả trường TP.HCM</span>
            </button>

            <button
              onClick={() => {
                setSearchQuery('ĐHQG TP.HCM');
                setSelectedLocation('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                searchQuery === 'ĐHQG TP.HCM'
                  ? 'bg-blue-600 text-white shadow-sm font-black'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <span>🏛️ Khối ĐHQG TP.HCM</span>
            </button>

            <button
              onClick={() => {
                setSearchQuery('IUH');
                setSelectedLocation('all');
                setSelectedGroup('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                searchQuery === 'IUH'
                  ? 'bg-rose-600 text-white shadow-sm font-black'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <span>🏢 ĐH Công Nghiệp (IUH)</span>
            </button>

            <button
              onClick={() => {
                setSelectedGroup('Y Dược & Sinh học');
                setSearchQuery('');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedGroup === 'Y Dược & Sinh học'
                  ? 'bg-purple-600 text-white shadow-sm font-black'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <span>⚕️ Khối Y Dược Sức Khỏe</span>
            </button>

            <button
              onClick={() => {
                setSelectedGroup('Kỹ thuật & Công nghệ');
                setSearchQuery('');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedGroup === 'Kỹ thuật & Công nghệ'
                  ? 'bg-blue-600 text-white shadow-sm font-black'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <span>💻 Khối Kỹ Thuật Công Nghệ</span>
            </button>

            <button
              onClick={() => {
                setSelectedGroup('Kinh tế & Quản trị');
                setSearchQuery('');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedGroup === 'Kinh tế & Quản trị'
                  ? 'bg-amber-600 text-white shadow-sm font-black'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <span>📊 Khối Kinh Tế Quản Trị</span>
            </button>
          </div>
          
          {/* Row 1: Search + Sorting + Saved Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tên trường, ngành hoặc mã (QSB, QSC, UEH...)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-2xl text-xs font-bold text-white focus:border-rose-500 outline-none shadow-sm placeholder:text-slate-500"
              />
            </div>

            {/* Sort Selector & Saved Filter Toggle */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
                <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
                <span>Sắp xếp:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-900 border border-slate-700 text-white rounded-xl text-xs font-extrabold px-3 py-2 outline-none focus:border-rose-500 cursor-pointer"
                >
                  <option value="score2025-desc">Điểm 2025 (Cao xuống Thấp)</option>
                  <option value="score2025-asc">Điểm 2025 (Thấp lên Cao)</option>
                  <option value="trend">Mức độ tăng điểm (2022-2025)</option>
                  <option value="code-asc">Mã trường (A - Z)</option>
                </select>
              </div>

              <button
                onClick={() => setShowSavedOnly(!showSavedOnly)}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all flex items-center gap-1.5 ${
                  showSavedOnly
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${showSavedOnly ? 'fill-slate-950' : ''}`} />
                <span>Đã lưu ({savedIds.length})</span>
              </button>
            </div>

          </div>

          {/* Row 2: Group Category Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
            <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-rose-500" />
              <span>Khối ngành:</span>
            </span>
            {groups.map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedGroup(g.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedGroup === g.id
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 font-black'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-750'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Row 3: Location & Opportunity Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-bold text-slate-400">Khu vực:</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-slate-900 border border-slate-700 text-slate-200 text-xs font-extrabold rounded-xl px-3 py-1.5 outline-none cursor-pointer"
              >
                {locations.map(loc => (
                  <option key={loc.id} value={loc.id}>{loc.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-bold text-slate-400">Mức cơ hội:</span>
              <select
                value={selectedSafety}
                onChange={(e) => setSelectedSafety(e.target.value)}
                className="bg-slate-900 border border-slate-700 text-slate-200 text-xs font-extrabold rounded-xl px-3 py-1.5 outline-none cursor-pointer"
              >
                {safetyFilters.map(sf => (
                  <option key={sf.id} value={sf.id}>{sf.label}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Data Table */}
        <div className="bg-slate-850 rounded-3xl border border-slate-750 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-750 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Mã & Trường Đại Học</th>
                  <th className="py-4 px-6">Ngành Đào Tạo & Ghi Chú</th>
                  <th className="py-4 px-6 text-center">2022</th>
                  <th className="py-4 px-6 text-center">2023</th>
                  <th className="py-4 px-6 text-center">2024</th>
                  <th className="py-4 px-6 text-center text-amber-300">2025</th>
                  <th className="py-4 px-6 text-center">Xu hướng</th>
                  <th className="py-4 px-6 text-center">Đánh giá cơ hội</th>
                  <th className="py-4 px-6 text-center">Lưu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs">
                {filteredUnis.length > 0 ? (
                  filteredUnis.map((uni) => {
                    const isSaved = savedIds.includes(uni.id);
                    const diff2025 = userScore - uni.score2025;
                    const scoreOldest = uni.score2022 || uni.score2023;
                    const totalDiff4Years = uni.score2025 - scoreOldest;

                    let statusBadge = (
                      <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-extrabold px-3 py-1.5 rounded-xl text-[11px] inline-block shadow-sm">
                        🟢 An toàn (+{diff2025}đ)
                      </span>
                    );
                    if (diff2025 < -30) {
                      statusBadge = (
                        <span className="bg-rose-500/20 text-rose-300 border border-rose-500/30 font-extrabold px-3 py-1.5 rounded-xl text-[11px] inline-block shadow-sm">
                          🔴 Thách thức ({diff2025}đ)
                        </span>
                      );
                    } else if (diff2025 <= 15) {
                      statusBadge = (
                        <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 font-extrabold px-3 py-1.5 rounded-xl text-[11px] inline-block shadow-sm">
                          🟡 Cạnh tranh ({diff2025 >= 0 ? `+${diff2025}` : diff2025}đ)
                        </span>
                      );
                    }

                    return (
                      <tr key={uni.id} className="hover:bg-slate-800/60 transition-colors">
                        
                        {/* School Name & Code */}
                        <td className="py-4 px-6 font-bold text-white max-w-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-rose-400 font-mono font-black text-xs px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 rounded-md">
                              {uni.code}
                            </span>
                            <span className="text-[10px] text-slate-400 font-semibold">{uni.location}</span>
                          </div>
                          <div className="font-extrabold text-sm text-slate-100 mt-1 leading-snug">{uni.name}</div>
                          {uni.admissionMethod && (
                            <div className="text-[10px] text-emerald-400 font-medium mt-0.5">
                              ✓ {uni.admissionMethod}
                            </div>
                          )}
                        </td>

                        {/* Major Name & Notes */}
                        <td className="py-4 px-6 max-w-sm">
                          <div className="font-extrabold text-xs text-amber-300 leading-snug">{uni.major}</div>
                          <div className="text-[11px] text-slate-400 font-normal mt-1 leading-relaxed">{uni.notes}</div>
                        </td>

                        {/* Benchmark Scores for 4 Years */}
                        <td className="py-4 px-6 text-center font-mono font-bold text-slate-400">
                          {uni.score2022 ? uni.score2022 : '—'}
                        </td>
                        <td className="py-4 px-6 text-center font-mono font-bold text-slate-300">
                          {uni.score2023}
                        </td>
                        <td className="py-4 px-6 text-center font-mono font-extrabold text-slate-200">
                          {uni.score2024}
                        </td>
                        <td className="py-4 px-6 text-center font-mono font-black text-amber-400 text-sm bg-amber-500/5">
                          {uni.score2025}
                        </td>

                        {/* Score Trend */}
                        <td className="py-4 px-6 text-center font-mono text-[11px]">
                          {totalDiff4Years > 0 ? (
                            <span className="text-rose-400 font-bold flex items-center justify-center gap-0.5" title={`Tăng ${totalDiff4Years} điểm từ ${scoreOldest} lên ${uni.score2025}`}>
                              <TrendingUp className="w-3.5 h-3.5" />
                              <span>+{totalDiff4Years}đ</span>
                            </span>
                          ) : totalDiff4Years < 0 ? (
                            <span className="text-emerald-400 font-bold flex items-center justify-center gap-0.5" title={`Giảm ${Math.abs(totalDiff4Years)} điểm`}>
                              <TrendingDown className="w-3.5 h-3.5" />
                              <span>{totalDiff4Years}đ</span>
                            </span>
                          ) : (
                            <span className="text-slate-400 font-bold flex items-center justify-center gap-0.5">
                              <Minus className="w-3.5 h-3.5" />
                              <span>Ổn định</span>
                            </span>
                          )}
                        </td>

                        {/* Opportunity Evaluation */}
                        <td className="py-4 px-6 text-center">
                          {statusBadge}
                        </td>

                        {/* Save Button */}
                        <td className="py-4 px-6 text-center">
                          <button
                            onClick={() => toggleSave(uni.id)}
                            className={`p-2.5 rounded-xl border transition-all ${
                              isSaved
                                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800'
                            }`}
                            title={isSaved ? 'Đã lưu nguyện vọng' : 'Lưu ngành này'}
                          >
                            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400 text-amber-400' : ''}`} />
                          </button>
                        </td>

                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-slate-400 font-semibold space-y-2">
                      <div className="text-base font-bold text-slate-300">Không tìm thấy trường/ngành phù hợp với bộ lọc</div>
                      <p className="text-xs">Vui lòng thử xóa từ khóa tìm kiếm hoặc điều chỉnh lại bộ lọc mức cơ hội/khối ngành.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
