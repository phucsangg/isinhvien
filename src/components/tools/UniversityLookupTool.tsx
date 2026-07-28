import React, { useState, useMemo } from 'react';
import { UNIVERSITIES_DATA } from '../../data/universities-data';
import { UniversityCutoff } from '../../types';
import { 
  Search, Filter, ArrowUpDown, Bookmark, CheckCircle2, 
  Sparkles, School, TrendingUp, TrendingDown, Minus, MapPin, 
  Award, X, Layers, Plus, ExternalLink, RefreshCw, Calculator, HelpCircle
} from 'lucide-react';

export const UniversityLookupTool: React.FC = () => {
  const [userScore, setUserScore] = useState<number>(850);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedSafety, setSelectedSafety] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'score2025-desc' | 'score2025-asc' | 'code-asc' | 'trend'>('score2025-desc');
  const [savedIds, setSavedIds] = useState<string[]>(['hcmus-cs-advanced', 'uit-ai', 'sgu-se']);
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);

  // Comparison State (Up to 3 items)
  const [compareIds, setCompareIds] = useState<string[]>(['hcmus-cs-advanced', 'uit-ai']);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);

  // Quick Score Presets
  const scorePresets = [600, 700, 750, 800, 850, 900, 950, 1000];

  const groups = [
    { id: 'all', label: 'Tất cả nhóm ngành' },
    { id: 'Kỹ thuật & Công nghệ', label: '💻 Kỹ thuật & Công nghệ' },
    { id: 'Kinh tế & Quản trị', label: '📊 Kinh tế & Quản trị' },
    { id: 'Xã hội & Nhân văn', label: '📖 Xã hội & Nhân văn' },
    { id: 'Y Dược & Sinh học', label: '⚕️ Y Dược & Sinh học' }
  ];

  const locations = [
    { id: 'all', label: 'Tất cả khu vực' },
    { id: 'TP. Hồ Chí Minh', label: '📍 TP. Hồ Chí Minh' },
    { id: 'Bình Dương / TP.HCM', label: '📍 Bình Dương' },
    { id: 'Hà Nội', label: '📍 Hà Nội' }
  ];

  const safetyFilters = [
    { id: 'all', label: 'Tất cả mức độ cơ hội' },
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

  const toggleCompare = (id: string) => {
    setCompareIds(prev => {
      if (prev.includes(id)) return prev.filter(item => item !== id);
      if (prev.length >= 3) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const compareItems = useMemo(() => {
    return UNIVERSITIES_DATA.filter(u => compareIds.includes(u.id));
  }, [compareIds]);

  return (
    <div className="py-10 bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-rose-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title Header Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Dữ liệu Điểm chuẩn Thực tế 100% (2022 - 2024 & Dự báo 2025/2026)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200 tracking-tight leading-tight">
            Tra Cứu Điểm Chuẩn Trường & Ngành V-ACT 2026
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Bảng đối soát điểm trúng tuyển chính thức của tất cả các trường Đại học tại TP.HCM qua các năm. Nhập điểm V-ACT của bạn để nhận dự báo mức độ cơ hội đỗ thực tế!
          </p>
        </div>

        {/* Verified Data Banner */}
        <div className="bg-slate-900/90 border border-emerald-500/40 rounded-3xl p-4 sm:p-5 flex items-start sm:items-center gap-3.5 text-xs sm:text-sm text-slate-200 shadow-xl backdrop-blur-md">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="leading-relaxed">
            <strong className="text-emerald-300 font-bold">Cam kết Dữ liệu Thực tế 100%:</strong> Số liệu điểm chuẩn (2022, 2023, 2024) được trích xuất từ quyết định tuyển sinh chính thức do các trường công bố (đối soát qua *Tuổi Trẻ, VnExpress, Báo Lao Động*). Các ngành đặc thù (ĐH Bách Khoa xét tổng hợp, Y Dược xét THPT) được chú thích phương thức rõ ràng.
          </div>
        </div>

        {/* Score Assessment Interactive Control Box */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-850 rounded-3xl p-6 border border-slate-750 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Input Score & Presets */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
                <span className="flex items-center gap-1.5 text-rose-400">
                  <Calculator className="w-4 h-4 text-rose-400" />
                  Nhập Điểm V-ACT Của Bạn:
                </span>
                <span className="text-amber-300 font-mono text-base font-black bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">
                  {userScore} / 1.200 đ
                </span>
              </div>

              {/* Number Input */}
              <div className="relative">
                <input
                  type="number"
                  min={300}
                  max={1200}
                  step={5}
                  value={userScore}
                  onChange={(e) => setUserScore(Math.min(1200, Math.max(300, Number(e.target.value))))}
                  className="w-full p-4 bg-slate-950 border-2 border-rose-500/40 rounded-2xl text-2xl font-black text-rose-400 focus:border-rose-500 outline-none font-mono shadow-inner tracking-wide"
                />
                <div className="absolute right-4 top-4 flex items-center gap-2 text-xs text-slate-400 font-extrabold">
                  <span>ĐIỂM THI V-ACT</span>
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
                className="w-full accent-rose-500 bg-slate-800 h-2.5 rounded-lg cursor-pointer"
              />

              {/* Quick Score Preset Chips */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Chọn nhanh điểm thi mẫu:</div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {scorePresets.map((score) => (
                    <button
                      key={score}
                      onClick={() => setUserScore(score)}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all border ${
                        userScore === score
                          ? 'bg-rose-500 text-white border-rose-400 shadow-md font-black scale-105'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {score}đ
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Assessment Progress Gauge */}
            <div className="md:col-span-6 space-y-4 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 shadow-inner">
              <div className="flex justify-between items-center text-xs font-black text-slate-200">
                <span>CƠ HỘI TRÚNG TUYỂN ({stats.total} NGÀNH ĐANG CHỌN)</span>
                <span className="text-rose-400 font-mono text-sm">{userScore} Điểm</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden flex shadow-inner border border-slate-700">
                <div 
                  style={{ width: `${stats.total > 0 ? (stats.safeCount / stats.total) * 100 : 0}%` }}
                  className="bg-emerald-500 h-full transition-all duration-300 shadow-lg shadow-emerald-500/50" 
                  title={`An toàn: ${stats.safeCount} ngành`}
                />
                <div 
                  style={{ width: `${stats.total > 0 ? (stats.compCount / stats.total) * 100 : 0}%` }}
                  className="bg-amber-400 h-full transition-all duration-300 shadow-lg shadow-amber-400/50" 
                  title={`Cạnh tranh: ${stats.compCount} ngành`}
                />
                <div 
                  style={{ width: `${stats.total > 0 ? (stats.hardCount / stats.total) * 100 : 0}%` }}
                  className="bg-rose-500 h-full transition-all duration-300 shadow-lg shadow-rose-500/50" 
                  title={`Cần cố gắng: ${stats.hardCount} ngành`}
                />
              </div>

              {/* Badges Count */}
              <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-bold pt-1">
                <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 p-2.5 rounded-xl flex flex-col justify-center">
                  <span className="text-[10px] text-emerald-400/80 uppercase font-black">🟢 An toàn</span>
                  <strong className="text-white text-base font-black font-mono">{stats.safeCount} <span className="text-xs font-normal text-emerald-300">ngành</span></strong>
                </div>
                <div className="bg-amber-500/15 border border-amber-500/30 text-amber-300 p-2.5 rounded-xl flex flex-col justify-center">
                  <span className="text-[10px] text-amber-400/80 uppercase font-black">🟡 Cạnh tranh</span>
                  <strong className="text-white text-base font-black font-mono">{stats.compCount} <span className="text-xs font-normal text-amber-300">ngành</span></strong>
                </div>
                <div className="bg-rose-500/15 border border-rose-500/30 text-rose-300 p-2.5 rounded-xl flex flex-col justify-center">
                  <span className="text-[10px] text-rose-400/80 uppercase font-black">🔴 Thách thức</span>
                  <strong className="text-white text-base font-black font-mono">{stats.hardCount} <span className="text-xs font-normal text-rose-300">ngành</span></strong>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Multi-criteria Filter Controls Bar */}
        <div className="bg-slate-900/90 rounded-3xl p-5 border border-slate-800 shadow-xl space-y-4 backdrop-blur-md">
          
          {/* Quick Preset Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800">
            <span className="text-xs font-extrabold text-amber-400 mr-1 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Lọc nhanh theo nhóm:</span>
            </span>

            <button
              onClick={() => {
                setSelectedLocation('TP. Hồ Chí Minh');
                setSearchQuery('');
                setSelectedGroup('all');
                setSelectedSafety('all');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all border flex items-center gap-1.5 ${
                selectedLocation === 'TP. Hồ Chí Minh' && !searchQuery && selectedGroup === 'all'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white border-amber-400 shadow-md shadow-rose-500/30 scale-105'
                  : 'bg-slate-950 text-slate-200 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>🔥 Tất cả trường TP.HCM</span>
            </button>

            <button
              onClick={() => {
                setSearchQuery('ĐHQG TP.HCM');
                setSelectedLocation('all');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                searchQuery === 'ĐHQG TP.HCM'
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md font-black'
                  : 'bg-slate-950 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
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
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                searchQuery === 'IUH'
                  ? 'bg-rose-600 text-white border-rose-400 shadow-md font-black'
                  : 'bg-slate-950 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>🏢 ĐH Công Nghiệp (IUH)</span>
            </button>

            <button
              onClick={() => {
                setSelectedGroup('Y Dược & Sinh học');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                selectedGroup === 'Y Dược & Sinh học'
                  ? 'bg-purple-600 text-white border-purple-400 shadow-md font-black'
                  : 'bg-slate-950 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>⚕️ Khối Y Dược Sức Khỏe</span>
            </button>

            <button
              onClick={() => {
                setSelectedGroup('Kỹ thuật & Công nghệ');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                selectedGroup === 'Kỹ thuật & Công nghệ'
                  ? 'bg-sky-600 text-white border-sky-400 shadow-md font-black'
                  : 'bg-slate-950 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>💻 Khối Kỹ Thuật Công Nghệ</span>
            </button>

            <button
              onClick={() => {
                setSelectedGroup('Kinh tế & Quản trị');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                selectedGroup === 'Kinh tế & Quản trị'
                  ? 'bg-amber-600 text-white border-amber-400 shadow-md font-black'
                  : 'bg-slate-950 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>📊 Khối Kinh Tế Quản Trị</span>
            </button>
          </div>
          
          {/* Row 1: Search + Sorting + Saved Filter + Comparison Trigger */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tên trường, ngành hoặc mã (QSB, QSC, SGU, UEH...)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-750 rounded-2xl text-xs font-bold text-white focus:border-rose-500 outline-none shadow-sm placeholder:text-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector & Saved & Compare Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
                <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
                <span>Sắp xếp:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-950 border border-slate-750 text-slate-100 rounded-xl text-xs font-extrabold px-3 py-2 outline-none focus:border-rose-500 cursor-pointer"
                >
                  <option value="score2025-desc">Điểm 2025 (Cao xuống Thấp)</option>
                  <option value="score2025-asc">Điểm 2025 (Thấp lên Cao)</option>
                  <option value="trend">Mức độ tăng điểm (2022-2025)</option>
                  <option value="code-asc">Mã trường (A - Z)</option>
                </select>
              </div>

              {/* Compare Button */}
              {compareIds.length > 0 && (
                <button
                  onClick={() => setIsCompareOpen(true)}
                  className="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-sky-500 text-slate-950 border border-sky-400 flex items-center gap-1.5 shadow-md hover:bg-sky-400 transition-all"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>So sánh ({compareIds.length}/3)</span>
                </button>
              )}

              {/* Saved Wishlist Toggle */}
              <button
                onClick={() => setShowSavedOnly(!showSavedOnly)}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all flex items-center gap-1.5 ${
                  showSavedOnly
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-black shadow-md'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white'
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
                    : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Row 3: Location & Opportunity Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-bold text-slate-400">Khu vực:</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-slate-950 border border-slate-750 text-slate-200 text-xs font-extrabold rounded-xl px-3 py-1.5 outline-none cursor-pointer"
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
                className="bg-slate-950 border border-slate-750 text-slate-200 text-xs font-extrabold rounded-xl px-3 py-1.5 outline-none cursor-pointer"
              >
                {safetyFilters.map(sf => (
                  <option key={sf.id} value={sf.id}>{sf.label}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Data Table */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-5">Mã & Trường Đại Học</th>
                  <th className="py-4 px-5">Ngành Đào Tạo & Ghi Chú</th>
                  <th className="py-4 px-4 text-center">2022</th>
                  <th className="py-4 px-4 text-center">2023</th>
                  <th className="py-4 px-4 text-center text-sky-400">2024 (Thực tế)</th>
                  <th className="py-4 px-4 text-center text-amber-300">2025 (Dự báo)</th>
                  <th className="py-4 px-4 text-center">Xu hướng</th>
                  <th className="py-4 px-5 text-center">Đánh giá cơ hội</th>
                  <th className="py-4 px-5 text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs">
                {filteredUnis.length > 0 ? (
                  filteredUnis.map((uni) => {
                    const isSaved = savedIds.includes(uni.id);
                    const isCompared = compareIds.includes(uni.id);
                    const diff2025 = userScore - uni.score2025;
                    const scoreOldest = uni.score2022 || uni.score2023;
                    const totalDiff4Years = Number((uni.score2025 - scoreOldest).toFixed(1));

                    let statusBadge = (
                      <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-black px-3 py-1.5 rounded-xl text-[11px] inline-block shadow-sm">
                        🟢 An toàn (+{diff2025 > 0 ? diff2025.toFixed(0) : diff2025}đ)
                      </span>
                    );
                    if (diff2025 < -30) {
                      statusBadge = (
                        <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 font-black px-3 py-1.5 rounded-xl text-[11px] inline-block shadow-sm">
                          🔴 Thách thức ({diff2025.toFixed(0)}đ)
                        </span>
                      );
                    } else if (diff2025 <= 15) {
                      statusBadge = (
                        <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 font-black px-3 py-1.5 rounded-xl text-[11px] inline-block shadow-sm">
                          🟡 Cạnh tranh ({diff2025 >= 0 ? `+${diff2025.toFixed(0)}` : diff2025.toFixed(0)}đ)
                        </span>
                      );
                    }

                    return (
                      <tr key={uni.id} className="hover:bg-slate-800/70 transition-colors">
                        
                        {/* School Name & Code */}
                        <td className="py-4 px-5 font-bold text-white max-w-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-rose-400 font-mono font-black text-xs px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 rounded-md">
                              {uni.code}
                            </span>
                            <span className="text-[10px] text-slate-400 font-semibold">{uni.location}</span>
                          </div>
                          <div className="font-black text-sm text-slate-100 mt-1 leading-snug">{uni.name}</div>
                          {uni.admissionMethod && (
                            <div className="text-[10px] text-emerald-400 font-bold mt-1 inline-flex items-center gap-1">
                              <span>✓</span>
                              <span>{uni.admissionMethod}</span>
                            </div>
                          )}
                        </td>

                        {/* Major Name & Notes */}
                        <td className="py-4 px-5 max-w-sm">
                          <div className="font-black text-xs text-amber-300 leading-snug">{uni.major}</div>
                          <div className="text-[11px] text-slate-400 font-normal mt-1 leading-relaxed">{uni.notes}</div>
                        </td>

                        {/* Benchmark Scores for 4 Years */}
                        <td className="py-4 px-4 text-center font-mono font-bold text-slate-400">
                          {uni.score2022 ? uni.score2022 : '—'}
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-slate-300">
                          {uni.score2023}
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-extrabold text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded-xl">
                          {uni.score2024}
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-black text-amber-300 text-sm bg-amber-500/15 border border-amber-500/30 rounded-xl shadow-inner">
                          {uni.score2025}
                        </td>

                        {/* Score Trend */}
                        <td className="py-4 px-4 text-center font-mono text-[11px]">
                          {totalDiff4Years > 0 ? (
                            <span className="text-rose-400 font-bold flex items-center justify-center gap-0.5" title={`Tăng ${totalDiff4Years} điểm`}>
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
                        <td className="py-4 px-5 text-center">
                          {statusBadge}
                        </td>

                        {/* Actions: Compare & Save */}
                        <td className="py-4 px-5 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {/* Compare Toggle */}
                            <button
                              onClick={() => toggleCompare(uni.id)}
                              className={`p-2 rounded-xl border transition-all text-xs font-bold ${
                                isCompared
                                  ? 'bg-sky-500/30 border-sky-400 text-sky-300'
                                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                              title={isCompared ? 'Bỏ so sánh' : 'Thêm vào bảng so sánh'}
                            >
                              <Layers className="w-3.5 h-3.5" />
                            </button>

                            {/* Save Toggle */}
                            <button
                              onClick={() => toggleSave(uni.id)}
                              className={`p-2 rounded-xl border transition-all ${
                                isSaved
                                  ? 'bg-amber-500/30 border-amber-400 text-amber-300'
                                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                              title={isSaved ? 'Đã lưu' : 'Lưu ngành này'}
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-400 text-amber-400' : ''}`} />
                            </button>
                          </div>
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

        {/* Side-by-Side Major Comparison Modal */}
        {isCompareOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-slate-900 border border-slate-750 rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-sky-400" />
                  <h3 className="text-lg font-black text-white">So Sánh Trực Diện Ngành Mục Tiêu</h3>
                </div>
                <button
                  onClick={() => setIsCompareOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Comparison Table */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {compareItems.map(item => {
                  const diff = userScore - item.score2025;
                  return (
                    <div key={item.id} className="bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-4">
                      <div className="space-y-1">
                        <span className="text-rose-400 font-mono text-xs font-black px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 rounded">
                          {item.code}
                        </span>
                        <h4 className="font-black text-sm text-white">{item.name}</h4>
                        <div className="text-xs text-amber-300 font-bold">{item.major}</div>
                      </div>

                      <div className="space-y-2 border-t border-slate-800 pt-3 text-xs">
                        <div className="flex justify-between text-slate-300">
                          <span>Điểm chuẩn 2024 (Thực tế):</span>
                          <strong className="text-sky-300 font-mono font-bold">{item.score2024}</strong>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Điểm dự báo 2025:</span>
                          <strong className="text-amber-300 font-mono font-black">{item.score2025}</strong>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Khoảng cách với điểm bạn:</span>
                          <strong className={`font-mono font-bold ${diff >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {diff >= 0 ? `+${diff.toFixed(0)}đ` : `${diff.toFixed(0)}đ`}
                          </strong>
                        </div>
                      </div>

                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
                        <div className="font-bold text-slate-300">Ghi chú & Phương thức:</div>
                        <div>{item.notes}</div>
                      </div>

                      <button
                        onClick={() => toggleCompare(item.id)}
                        className="w-full py-2 bg-slate-800 hover:bg-rose-500/20 hover:text-rose-300 text-slate-300 text-xs font-bold rounded-xl border border-slate-700 transition-all"
                      >
                        Bỏ khỏi bảng so sánh
                      </button>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
