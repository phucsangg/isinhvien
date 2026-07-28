import React, { useState, useMemo } from 'react';
import { UNIVERSITIES_DATA } from '../../data/universities-data';
import { UniversityCutoff } from '../../types';
import { 
  Search, Filter, ArrowUpDown, Bookmark, CheckCircle2, 
  Sparkles, School, TrendingUp, TrendingDown, Minus, MapPin, 
  Award, X, Layers, Plus, ExternalLink, RefreshCw, Calculator, HelpCircle, ArrowRight, Trash2, Check, LayoutGrid, ListFilter
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

  // Comparison State (Up to 10 items)
  const [compareIds, setCompareIds] = useState<string[]>(['hcmus-cs-advanced', 'uit-ai', 'sgu-se', 'uel-ecom', 'iuh-ib']);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [compareViewMode, setCompareViewMode] = useState<'rows' | 'matrix'>('rows');

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
      if (prev.length >= 10) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const compareItems = useMemo(() => {
    return UNIVERSITIES_DATA.filter(u => compareIds.includes(u.id));
  }, [compareIds]);

  return (
    <div className="py-10 bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title Header Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 border border-emerald-300 px-4 py-1.5 rounded-full shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Dữ liệu Điểm chuẩn Thực tế 100% (2022 - 2024 & Dự báo 2025/2026)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Tra Cứu Điểm Chuẩn Thực Tế V-ACT 2026
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Bảng đối soát điểm trúng tuyển chính thức của tất cả các trường Đại học tại TP.HCM qua các năm. Nhập điểm V-ACT của bạn để nhận dự báo mức độ cơ hội đỗ thực tế!
          </p>
        </div>

        {/* Verified Data Banner */}
        <div className="bg-white border border-emerald-200 rounded-3xl p-4 sm:p-5 flex items-start sm:items-center gap-3.5 text-xs sm:text-sm text-slate-800 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
          <div className="leading-relaxed">
            <strong className="text-emerald-800 font-black">Cam kết Dữ liệu Thực tế 100%:</strong> Số liệu điểm chuẩn (2022, 2023, 2024) được trích xuất từ quyết định tuyển sinh chính thức do các trường công bố (đối soát qua *Tuổi Trẻ, VnExpress, Báo Lao Động*). Các ngành đặc thù (ĐH Bách Khoa xét tổng hợp, Y Dược xét THPT) được chú thích phương thức rõ ràng.
          </div>
        </div>

        {/* Score Assessment Interactive Control Box */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Input Score & Presets */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex justify-between items-center text-xs font-black uppercase tracking-wider text-slate-700">
                <span className="flex items-center gap-1.5 text-rose-600">
                  <Calculator className="w-4 h-4 text-rose-600" />
                  Nhập Điểm V-ACT Của Bạn:
                </span>
                <span className="text-rose-600 font-mono text-base font-black bg-rose-50 px-3 py-1 rounded-xl border border-rose-200">
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
                  className="w-full p-4 bg-slate-50 border-2 border-rose-400 rounded-2xl text-2xl font-black text-rose-600 focus:border-rose-600 focus:bg-white outline-none font-mono shadow-inner tracking-wide"
                />
                <div className="absolute right-4 top-4 flex items-center gap-2 text-xs text-slate-500 font-black">
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
                className="w-full accent-rose-600 bg-slate-200 h-2.5 rounded-lg cursor-pointer"
              />

              {/* Quick Score Preset Chips */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-black text-slate-500 uppercase tracking-wider">Chọn nhanh điểm thi mẫu:</div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {scorePresets.map((score) => (
                    <button
                      key={score}
                      onClick={() => setUserScore(score)}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all border ${
                        userScore === score
                          ? 'bg-rose-600 text-white border-rose-600 shadow-md font-black scale-105'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {score}đ
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Assessment Progress Gauge */}
            <div className="md:col-span-6 space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-inner">
              <div className="flex justify-between items-center text-xs font-black text-slate-800">
                <span>CƠ HỘI TRÚNG TUYỂN ({stats.total} NGÀNH ĐANG CHỌN)</span>
                <span className="text-rose-600 font-mono text-sm font-black">{userScore} Điểm</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden flex shadow-inner border border-slate-300">
                <div 
                  style={{ width: `${stats.total > 0 ? (stats.safeCount / stats.total) * 100 : 0}%` }}
                  className="bg-emerald-500 h-full transition-all duration-300 shadow-sm" 
                  title={`An toàn: ${stats.safeCount} ngành`}
                />
                <div 
                  style={{ width: `${stats.total > 0 ? (stats.compCount / stats.total) * 100 : 0}%` }}
                  className="bg-amber-400 h-full transition-all duration-300 shadow-sm" 
                  title={`Cạnh tranh: ${stats.compCount} ngành`}
                />
                <div 
                  style={{ width: `${stats.total > 0 ? (stats.hardCount / stats.total) * 100 : 0}%` }}
                  className="bg-rose-500 h-full transition-all duration-300 shadow-sm" 
                  title={`Cần cố gắng: ${stats.hardCount} ngành`}
                />
              </div>

              {/* Badges Count */}
              <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-bold pt-1">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-2.5 rounded-xl flex flex-col justify-center shadow-sm">
                  <span className="text-[10px] text-emerald-700 uppercase font-black">🟢 An toàn</span>
                  <strong className="text-slate-900 text-base font-black font-mono">{stats.safeCount} <span className="text-xs font-normal text-slate-600">ngành</span></strong>
                </div>
                <div className="bg-amber-50 border border-amber-200 text-amber-900 p-2.5 rounded-xl flex flex-col justify-center shadow-sm">
                  <span className="text-[10px] text-amber-800 uppercase font-black">🟡 Cạnh tranh</span>
                  <strong className="text-slate-900 text-base font-black font-mono">{stats.compCount} <span className="text-xs font-normal text-slate-600">ngành</span></strong>
                </div>
                <div className="bg-rose-50 border border-rose-200 text-rose-800 p-2.5 rounded-xl flex flex-col justify-center shadow-sm">
                  <span className="text-[10px] text-rose-700 uppercase font-black">🔴 Thách thức</span>
                  <strong className="text-slate-900 text-base font-black font-mono">{stats.hardCount} <span className="text-xs font-normal text-slate-600">ngành</span></strong>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Multi-criteria Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-md space-y-4">
          
          {/* Quick Preset Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-100">
            <span className="text-xs font-black text-rose-600 mr-1 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-rose-600 animate-pulse" />
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
                  ? 'bg-rose-600 text-white border-rose-600 shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <span>🔥 Tất cả trường TP.HCM</span>
            </button>

            <button
              onClick={() => {
                setSearchQuery('ĐHQG TP.HCM');
                setSelectedLocation('all');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all border ${
                searchQuery === 'ĐHQG TP.HCM'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-200 hover:bg-slate-200'
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
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all border ${
                searchQuery === 'IUH'
                  ? 'bg-rose-600 text-white border-rose-600 shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <span>🏢 ĐH Công Nghiệp (IUH)</span>
            </button>

            <button
              onClick={() => {
                setSelectedGroup('Y Dược & Sinh học');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all border ${
                selectedGroup === 'Y Dược & Sinh học'
                  ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                  : 'bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100'
              }`}
            >
              <span>⚕️ Khối Y Dược Sức Khỏe</span>
            </button>

            <button
              onClick={() => {
                setSelectedGroup('Kỹ thuật & Công nghệ');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all border ${
                selectedGroup === 'Kỹ thuật & Công nghệ'
                  ? 'bg-sky-600 text-white border-sky-600 shadow-md'
                  : 'bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100'
              }`}
            >
              <span>💻 Khối Kỹ Thuật Công Nghệ</span>
            </button>

            <button
              onClick={() => {
                setSelectedGroup('Kinh tế & Quản trị');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all border ${
                selectedGroup === 'Kinh tế & Quản trị'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                  : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
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
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-2xl text-xs font-bold text-slate-900 focus:border-rose-500 focus:bg-white outline-none shadow-sm placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector & Saved & Compare Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                <ArrowUpDown className="w-3.5 h-3.5 text-rose-600" />
                <span>Sắp xếp:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-300 text-slate-800 rounded-xl text-xs font-black px-3 py-2 outline-none focus:border-rose-600 cursor-pointer"
                >
                  <option value="score2025-desc">Điểm 2025 (Cao xuống Thấp)</option>
                  <option value="score2025-asc">Điểm 2025 (Thấp lên Cao)</option>
                  <option value="trend">Mức độ tăng điểm (2022-2025)</option>
                  <option value="code-asc">Mã trường (A - Z)</option>
                </select>
              </div>

              {/* Compare Button */}
              <button
                onClick={() => setIsCompareOpen(true)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black border flex items-center gap-1.5 transition-all ${
                  compareIds.length > 0
                    ? 'bg-rose-600 text-white border-rose-600 shadow-md font-black'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Bảng So Sánh Ngang ({compareIds.length})</span>
              </button>

              {/* Saved Wishlist Toggle */}
              <button
                onClick={() => setShowSavedOnly(!showSavedOnly)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black border transition-all flex items-center gap-1.5 ${
                  showSavedOnly
                    ? 'bg-amber-400 text-slate-900 border-amber-400 shadow-md'
                    : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${showSavedOnly ? 'fill-slate-900' : ''}`} />
                <span>Đã lưu ({savedIds.length})</span>
              </button>
            </div>

          </div>

          {/* Row 2: Group Category Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-rose-600" />
              <span>Khối ngành:</span>
            </span>
            {groups.map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedGroup(g.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedGroup === g.id
                    ? 'bg-rose-600 text-white shadow-md font-black'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Row 3: Location & Opportunity Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold text-slate-600">Khu vực:</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold rounded-xl px-3 py-1.5 outline-none cursor-pointer"
              >
                {locations.map(loc => (
                  <option key={loc.id} value={loc.id}>{loc.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-bold text-slate-600">Mức cơ hội:</span>
              <select
                value={selectedSafety}
                onChange={(e) => setSelectedSafety(e.target.value)}
                className="bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold rounded-xl px-3 py-1.5 outline-none cursor-pointer"
              >
                {safetyFilters.map(sf => (
                  <option key={sf.id} value={sf.id}>{sf.label}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-[11px] font-black text-slate-700 uppercase tracking-wider">
                  <th className="py-4 px-5">Mã & Trường Đại Học</th>
                  <th className="py-4 px-5">Ngành Đào Tạo & Ghi Chú</th>
                  <th className="py-4 px-4 text-center">2022</th>
                  <th className="py-4 px-4 text-center">2023</th>
                  <th className="py-4 px-4 text-center text-sky-700">2024 (Thực tế)</th>
                  <th className="py-4 px-4 text-center text-amber-700">2025 (Dự báo)</th>
                  <th className="py-4 px-4 text-center">Xu hướng</th>
                  <th className="py-4 px-5 text-center">Đánh giá cơ hội</th>
                  <th className="py-4 px-5 text-center">Thao tác so sánh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredUnis.length > 0 ? (
                  filteredUnis.map((uni) => {
                    const isSaved = savedIds.includes(uni.id);
                    const isCompared = compareIds.includes(uni.id);
                    const diff2025 = userScore - uni.score2025;
                    const scoreOldest = uni.score2022 || uni.score2023;
                    const totalDiff4Years = Number((uni.score2025 - scoreOldest).toFixed(1));

                    let statusBadge = (
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-300 font-black px-3 py-1.5 rounded-xl text-[11px] inline-block shadow-sm">
                        🟢 An toàn (+{diff2025 > 0 ? diff2025.toFixed(0) : diff2025}đ)
                      </span>
                    );
                    if (diff2025 < -30) {
                      statusBadge = (
                        <span className="bg-rose-50 text-rose-800 border border-rose-300 font-black px-3 py-1.5 rounded-xl text-[11px] inline-block shadow-sm">
                          🔴 Thách thức ({diff2025.toFixed(0)}đ)
                        </span>
                      );
                    } else if (diff2025 <= 15) {
                      statusBadge = (
                        <span className="bg-amber-50 text-amber-900 border border-amber-300 font-black px-3 py-1.5 rounded-xl text-[11px] inline-block shadow-sm">
                          🟡 Cạnh tranh ({diff2025 >= 0 ? `+${diff2025.toFixed(0)}` : diff2025.toFixed(0)}đ)
                        </span>
                      );
                    }

                    return (
                      <tr key={uni.id} className={`transition-colors hover:bg-slate-50 ${isCompared ? 'bg-rose-50/40' : ''}`}>
                        
                        {/* School Name & Code */}
                        <td className="py-4 px-5 font-bold text-slate-900 max-w-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-rose-600 font-mono font-black text-xs px-2 py-0.5 bg-rose-50 border border-rose-200 rounded-md">
                              {uni.code}
                            </span>
                            <span className="text-[10px] text-slate-500 font-semibold">{uni.location}</span>
                          </div>
                          <div className="font-black text-sm text-slate-900 mt-1 leading-snug">{uni.name}</div>
                          {uni.admissionMethod && (
                            <div className="text-[10px] text-emerald-700 font-bold mt-1 inline-flex items-center gap-1">
                              <span>✓</span>
                              <span>{uni.admissionMethod}</span>
                            </div>
                          )}
                        </td>

                        {/* Major Name & Notes */}
                        <td className="py-4 px-5 max-w-sm">
                          <div className="font-black text-xs text-rose-600 leading-snug">{uni.major}</div>
                          <div className="text-[11px] text-slate-500 font-normal mt-1 leading-relaxed">{uni.notes}</div>
                        </td>

                        {/* Benchmark Scores for 4 Years */}
                        <td className="py-4 px-4 text-center font-mono font-bold text-slate-500">
                          {uni.score2022 ? uni.score2022 : '—'}
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-slate-600">
                          {uni.score2023}
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-black text-sky-900 bg-sky-50 border border-sky-200 rounded-xl">
                          {uni.score2024}
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-black text-amber-900 text-sm bg-amber-50 border border-amber-300 rounded-xl shadow-sm">
                          {uni.score2025}
                        </td>

                        {/* Score Trend */}
                        <td className="py-4 px-4 text-center font-mono text-[11px]">
                          {totalDiff4Years > 0 ? (
                            <span className="text-rose-600 font-bold flex items-center justify-center gap-0.5" title={`Tăng ${totalDiff4Years} điểm`}>
                              <TrendingUp className="w-3.5 h-3.5" />
                              <span>+{totalDiff4Years}đ</span>
                            </span>
                          ) : totalDiff4Years < 0 ? (
                            <span className="text-emerald-600 font-bold flex items-center justify-center gap-0.5" title={`Giảm ${Math.abs(totalDiff4Years)} điểm`}>
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
                            {/* Compare Toggle Button */}
                            <button
                              onClick={() => toggleCompare(uni.id)}
                              className={`px-3 py-1.5 rounded-xl border transition-all text-xs font-bold flex items-center gap-1 ${
                                isCompared
                                  ? 'bg-rose-600 text-white border-rose-600 shadow-sm font-black'
                                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                              }`}
                              title={isCompared ? 'Bỏ so sánh' : 'Thêm vào bảng so sánh'}
                            >
                              <Layers className="w-3.5 h-3.5" />
                              <span>{isCompared ? '✓ Đang so sánh' : '+ So sánh'}</span>
                            </button>

                            {/* Save Toggle Button */}
                            <button
                              onClick={() => toggleSave(uni.id)}
                              className={`p-2 rounded-xl border transition-all ${
                                isSaved
                                  ? 'bg-amber-100 border-amber-300 text-amber-800'
                                  : 'bg-slate-100 border-slate-300 text-slate-500 hover:text-slate-800 hover:bg-slate-200'
                              }`}
                              title={isSaved ? 'Đã lưu' : 'Lưu ngành này'}
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
                            </button>
                          </div>
                        </td>

                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-slate-500 font-semibold space-y-2">
                      <div className="text-base font-bold text-slate-800">Không tìm thấy trường/ngành phù hợp với bộ lọc</div>
                      <p className="text-xs">Vui lòng thử xóa từ khóa tìm kiếm hoặc điều chỉnh lại bộ lọc mức cơ hội/khối ngành.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sticky Comparison Bar at Bottom of Screen when items are selected */}
        {compareIds.length > 0 && !isCompareOpen && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white border border-slate-700 px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-4 animate-bounce-short">
            <div className="flex items-center gap-2 text-xs font-bold">
              <Layers className="w-4 h-4 text-rose-400" />
              <span>Đang so sánh <strong className="text-rose-300 text-sm font-mono font-black">{compareIds.length}</strong> ngành đã chọn</span>
            </div>
            <button
              onClick={() => setIsCompareOpen(true)}
              className="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-black text-xs flex items-center gap-1.5 transition-all shadow-md"
            >
              <span>Xem Bảng So Sánh Ngang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* POP-UP HORIZONTAL COMPARISON MODAL (SO SÁNH NGANG RỘNG RÃI - KHÔNG GIỚI HẠN SỐ LƯỢNG TRƯỜNG!) */}
        {isCompareOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 pt-14 pb-6 bg-slate-950/75 backdrop-blur-md animate-fade-in overflow-y-auto">
            <div className="bg-white border border-slate-300 rounded-3xl p-6 sm:p-7 max-w-7xl w-full max-h-[88vh] overflow-y-auto space-y-6 shadow-2xl my-auto">
              
              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-rose-100 border border-rose-200 rounded-2xl text-rose-600 shadow-sm">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                      <span>Bảng So Sánh Ngang Nhiều Trường</span>
                      <span className="text-xs font-mono font-black text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                        {compareIds.length} ngành đang chọn
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 font-bold mt-0.5">
                      Đối chiếu song song điểm thi của bạn (<span className="text-rose-600 font-mono font-black">{userScore} điểm</span>) trực tiếp với điểm chuẩn 2022, 2023, 2024 & 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Mode Switcher */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
                    <button
                      onClick={() => setCompareViewMode('rows')}
                      className={`px-3 py-1.5 rounded-lg font-black transition-all flex items-center gap-1 ${
                        compareViewMode === 'rows'
                          ? 'bg-rose-600 text-white shadow-sm'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <ListFilter className="w-3.5 h-3.5" />
                      <span>📋 Bảng Ngang (Nhiều trường)</span>
                    </button>

                    <button
                      onClick={() => setCompareViewMode('matrix')}
                      className={`px-3 py-1.5 rounded-lg font-black transition-all flex items-center gap-1 ${
                        compareViewMode === 'matrix'
                          ? 'bg-rose-600 text-white shadow-sm'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>📊 Ma Trận Cột</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setIsCompareOpen(false)}
                    className="p-2.5 text-slate-500 hover:text-slate-900 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
                    title="Đóng bảng so sánh"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* MODE 1: BẢNG NGANG TẤT CẢ NGÀNH (So sánh không giới hạn số lượng trường) */}
              {compareViewMode === 'rows' && compareItems.length > 0 && (
                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-md">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-[11px] font-black text-slate-700 uppercase tracking-wider">
                        <th className="py-4 px-5">STT & Trường</th>
                        <th className="py-4 px-5">Ngành Đào Tạo</th>
                        <th className="py-4 px-4 text-center">2022</th>
                        <th className="py-4 px-4 text-center">2023</th>
                        <th className="py-4 px-4 text-center text-sky-700">2024 (Thực tế)</th>
                        <th className="py-4 px-4 text-center text-amber-700">2025 (Dự báo)</th>
                        <th className="py-4 px-5 text-center">Điểm Thi Bạn ({userScore}đ)</th>
                        <th className="py-4 px-5 text-center">Chênh lệch & Cơ hội</th>
                        <th className="py-4 px-5">Phương Thức & Chú Thích</th>
                        <th className="py-4 px-4 text-center">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {compareItems.map((item, idx) => {
                        const diff = userScore - item.score2025;
                        return (
                          <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                            
                            {/* School Code & Name */}
                            <td className="py-4 px-5 font-bold text-slate-900 max-w-xs">
                              <div className="flex items-center gap-2">
                                <span className="text-slate-400 font-mono text-xs">{idx + 1}.</span>
                                <span className="text-rose-600 font-mono font-black text-xs px-2 py-0.5 bg-rose-50 border border-rose-200 rounded">
                                  {item.code}
                                </span>
                                <span className="text-[10px] text-slate-500 font-semibold">{item.location}</span>
                              </div>
                              <div className="font-black text-sm text-slate-900 mt-1 leading-snug">{item.name}</div>
                            </td>

                            {/* Major Name */}
                            <td className="py-4 px-5 max-w-xs">
                              <div className="font-black text-xs text-rose-600 leading-snug">{item.major}</div>
                              <div className="text-[10px] text-slate-400 mt-0.5">{item.group}</div>
                            </td>

                            {/* 2022 & 2023 */}
                            <td className="py-4 px-4 text-center font-mono font-bold text-slate-500">
                              {item.score2022 || '—'}
                            </td>
                            <td className="py-4 px-4 text-center font-mono font-bold text-slate-600">
                              {item.score2023}
                            </td>

                            {/* 2024 Actual */}
                            <td className="py-4 px-4 text-center font-mono font-black text-sky-900 bg-sky-50 border border-sky-200 rounded-xl">
                              {item.score2024}
                            </td>

                            {/* 2025 Projected */}
                            <td className="py-4 px-4 text-center font-mono font-black text-amber-900 text-sm bg-amber-50 border border-amber-300 rounded-xl shadow-sm">
                              {item.score2025}
                            </td>

                            {/* Your Score */}
                            <td className="py-4 px-5 text-center font-mono font-black text-slate-900 text-sm">
                              {userScore}đ
                            </td>

                            {/* Opportunity Badge */}
                            <td className="py-4 px-5 text-center">
                              <span className={`inline-block font-mono font-black text-xs px-3 py-1.5 rounded-xl border shadow-sm ${
                                diff > 15 
                                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300' 
                                  : diff >= -30 
                                  ? 'bg-amber-100 text-amber-900 border-amber-300' 
                                  : 'bg-rose-100 text-rose-900 border-rose-300'
                              }`}>
                                {diff >= 0 ? `🟢 +${diff.toFixed(0)}đ (An toàn)` : `🔴 ${diff.toFixed(0)}đ (Cần tăng)`}
                              </span>
                            </td>

                            {/* Method & Notes */}
                            <td className="py-4 px-5 max-w-xs text-slate-600">
                              <div className="font-bold text-emerald-700 text-xs">✓ {item.admissionMethod}</div>
                              <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.notes}</div>
                            </td>

                            {/* Remove Action */}
                            <td className="py-4 px-4 text-center">
                              <button
                                onClick={() => toggleCompare(item.id)}
                                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                                title="Bỏ ngành này khỏi so sánh"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </td>

                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* MODE 2: MA TRẬN CỘT CUỘN NGANG (Cuộn ngang 5+ cột) */}
              {compareViewMode === 'matrix' && compareItems.length > 0 && (
                <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-md">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-xs font-black text-slate-700">
                        <th className="py-4 px-5 w-56 bg-slate-200/80 text-slate-900 uppercase tracking-wider text-[11px] sticky left-0 z-10 shadow-sm">
                          Tiêu Chí Đối Chiếu
                        </th>
                        {compareItems.map(item => (
                          <th key={item.id} className="py-4 px-5 border-l border-slate-200 min-w-[240px]">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-rose-600 font-mono text-xs font-black px-2 py-0.5 bg-rose-50 border border-rose-200 rounded">
                                {item.code}
                              </span>
                              <button
                                onClick={() => toggleCompare(item.id)}
                                className="text-slate-400 hover:text-rose-600 p-1"
                                title="Bỏ ngành này"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="font-black text-sm text-slate-900 leading-snug">{item.name}</div>
                            <div className="text-xs text-rose-600 font-black mt-1">{item.major}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs font-medium">
                      
                      {/* Row 1: Your Score */}
                      <tr className="bg-white">
                        <td className="py-3.5 px-5 font-black text-slate-900 bg-slate-100/80 sticky left-0 z-10">
                          🎯 Điểm thi của bạn
                        </td>
                        {compareItems.map(item => (
                          <td key={item.id} className="py-3.5 px-5 border-l border-slate-200 font-mono font-black text-rose-600 text-sm">
                            {userScore} / 1.200 đ
                          </td>
                        ))}
                      </tr>

                      {/* Row 2: Score 2024 (Actual) */}
                      <tr className="bg-slate-50/60">
                        <td className="py-3.5 px-5 font-black text-slate-900 bg-slate-100/80 sticky left-0 z-10">
                          📊 Điểm chuẩn 2024 (Thực tế)
                        </td>
                        {compareItems.map(item => (
                          <td key={item.id} className="py-3.5 px-5 border-l border-slate-200 font-mono font-black text-sky-800 text-sm">
                            <span className="bg-sky-100 px-2.5 py-1 rounded-lg border border-sky-300">
                              {item.score2024} điểm
                            </span>
                          </td>
                        ))}
                      </tr>

                      {/* Row 3: Score 2025 (Projected) */}
                      <tr className="bg-white">
                        <td className="py-3.5 px-5 font-black text-slate-900 bg-slate-100/80 sticky left-0 z-10">
                          🔮 Điểm chuẩn 2025 (Dự báo)
                        </td>
                        {compareItems.map(item => (
                          <td key={item.id} className="py-3.5 px-5 border-l border-slate-200 font-mono font-black text-amber-900 text-sm">
                            <span className="bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
                              {item.score2025} điểm
                            </span>
                          </td>
                        ))}
                      </tr>

                      {/* Row 4: Score Difference & Assessment */}
                      <tr className="bg-slate-50/60">
                        <td className="py-3.5 px-5 font-black text-slate-900 bg-slate-100/80 sticky left-0 z-10">
                          ⚖️ Chênh lệch & Cơ hội
                        </td>
                        {compareItems.map(item => {
                          const diff = userScore - item.score2025;
                          return (
                            <td key={item.id} className="py-3.5 px-5 border-l border-slate-200">
                              <span className={`inline-block font-mono font-black text-xs px-3 py-1.5 rounded-xl border shadow-sm ${
                                diff > 15 
                                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300' 
                                  : diff >= -30 
                                  ? 'bg-amber-100 text-amber-900 border-amber-300' 
                                  : 'bg-rose-100 text-rose-900 border-rose-300'
                              }`}>
                                {diff >= 0 ? `🟢 +${diff.toFixed(0)}đ (An toàn)` : `🔴 ${diff.toFixed(0)}đ (Cần tăng)`}
                              </span>
                            </td>
                          );
                        })}
                      </tr>

                      {/* Row 5: Admission Method */}
                      <tr className="bg-white">
                        <td className="py-3.5 px-5 font-black text-slate-900 bg-slate-100/80 sticky left-0 z-10">
                          📝 Phương thức tuyển sinh
                        </td>
                        {compareItems.map(item => (
                          <td key={item.id} className="py-3.5 px-5 border-l border-slate-200 font-bold text-emerald-800 text-xs">
                            ✓ {item.admissionMethod || 'Xét tuyển V-ACT trực tiếp'}
                          </td>
                        ))}
                      </tr>

                      {/* Row 6: Notes */}
                      <tr className="bg-slate-50/60">
                        <td className="py-3.5 px-5 font-black text-slate-900 bg-slate-100/80 sticky left-0 z-10">
                          💡 Đặc điểm & Chú thích
                        </td>
                        {compareItems.map(item => (
                          <td key={item.id} className="py-3.5 px-5 border-l border-slate-200 text-slate-600 text-xs leading-relaxed">
                            {item.notes}
                          </td>
                        ))}
                      </tr>

                    </tbody>
                  </table>
                </div>
              )}

              {/* Modal Footer */}
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <button
                  onClick={() => setCompareIds([])}
                  className="px-4 py-2 text-slate-500 hover:text-rose-600 text-xs font-bold rounded-xl bg-slate-100 hover:bg-rose-50 border border-slate-200 flex items-center gap-1 transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa tất cả so sánh</span>
                </button>
                <button
                  onClick={() => setIsCompareOpen(false)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black rounded-xl transition-all shadow-md"
                >
                  Đóng Bảng So Sánh Ngang
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
