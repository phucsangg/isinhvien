import React, { useState } from 'react';
import { ARTICLES_DATA } from '../../data/articles-data';
import { BookOpen, Calendar, UserCheck, ArrowRight, Clock, Search, Eye, Sparkles, Filter, ShieldCheck, Flame } from 'lucide-react';

interface KnowledgeHubSectionProps {
  setActiveTab: (tab: string) => void;
  setSelectedArticleId: (id: string) => void;
}

export const KnowledgeHubSection: React.FC<KnowledgeHubSectionProps> = ({
  setActiveTab,
  setSelectedArticleId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Tất cả',
    'Cấu trúc V-ACT',
    'Chiến thuật',
    'Tiếng Việt & Anh',
    'Toán & Logic',
    'Suy luận Khoa học',
  ];

  // Filtered Articles based on Category & Search Query
  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchesCategory = selectedCategory === 'Tất cả' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES_DATA[2]; // Bí Quyết Trọn Điểm Phần Phân Tích Số Liệu & Tư Duy Logic

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Title Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Cẩm Nang & Kinh Nghiệm Thi V-ACT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Góc Kiến Thức & Chiến Thuật V-ACT
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-medium">
              Kho bài viết kinh nghiệm, phân tích ma trận đề thi và thủ thuật bấm máy tính Casio giải nhanh được kiểm duyệt chuyên môn bởi Thạc sĩ Bùi Văn Công và Ban Chuyên môn Sangsang.
            </p>
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm chiến thuật, cấu trúc..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                    : 'bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Hero Featured Article Card (Displayed when no active search/category filter) */}
        {selectedCategory === 'Tất cả' && !searchQuery && featuredArticle && (
          <div
            onClick={() => {
              setSelectedArticleId(featuredArticle.id);
              setActiveTab('article-detail');
            }}
            className="relative bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-6 sm:p-10 border border-rose-500/30 text-white shadow-2xl cursor-pointer overflow-hidden group hover:border-rose-400 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-rose-500 text-white font-extrabold text-xs uppercase tracking-wider shadow">
                    🔥 Bài Viết Nổi Bật Nhat
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{featuredArticle.views.toLocaleString()} lượt xem</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white group-hover:text-rose-300 transition-colors leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base font-medium line-clamp-2 leading-relaxed">
                  {featuredArticle.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Tác giả: {featuredArticle.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{featuredArticle.readTimeMinutes} phút đọc</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredArticle.publishedDate}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button className="px-6 py-3.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-sm shadow-xl shadow-rose-500/30 transition-all flex items-center gap-2 group-hover:translate-x-1">
                  <span>Đọc Chi Tiết Ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Hiển thị {filteredArticles.length} bài viết hướng dẫn</span>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-rose-600 hover:underline">
                Xóa bộ lọc tìm kiếm
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => {
                  setSelectedArticleId(art.id);
                  setActiveTab('article-detail');
                }}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-rose-400 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill & Read Time */}
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-extrabold bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1 rounded-xl">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{art.readTimeMinutes} phút</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors mb-2.5 leading-snug line-clamp-2">
                    {art.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6 line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                {/* Footer Meta Details */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{art.publishedDate}</span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-400 font-medium">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{art.views.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px]">
                    <span className="font-bold text-slate-700">Tác giả: {art.author}</span>
                    <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Duyệt: {art.reviewer}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Banner Callout */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Sẵn sàng thử sức với Ma Trận Đề Thi Thử V-ACT 2026?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Trải nghiệm bài test chẩn đoán 20 phút miễn phí để nhận phân tích Radar Map năng lực cá nhân.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('diagnostic-room')}
            className="px-6 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-rose-500/30 transition-all shrink-0 active:scale-95"
          >
            Làm Bài Test Chẩn Đoán Ngay
          </button>
        </div>

      </div>
    </section>
  );
};
