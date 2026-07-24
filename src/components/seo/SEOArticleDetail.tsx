import React, { useState } from 'react';
import { ARTICLES_DATA } from '../../data/articles-data';
import { Calendar, UserCheck, Clock, ArrowLeft, Share2, BookOpen, ChevronRight, Eye, Sparkles, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Toast } from '../common/Toast';

interface SEOArticleDetailProps {
  articleId: string;
  onBack: () => void;
  onSelectArticle: (id: string) => void;
}

export const SEOArticleDetail: React.FC<SEOArticleDetailProps> = ({ articleId, onBack, onSelectArticle }) => {
  const article = ARTICLES_DATA.find(a => a.id === articleId) || ARTICLES_DATA[0];
  const [showToast, setShowToast] = useState(false);

  const relatedArticles = ARTICLES_DATA.filter(a => a.id !== article.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  // Enhanced Rich Markdown Renderer for Articles
  const renderRichMarkdown = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      // Markdown Table Handling
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
        tableRows.push(cells);
        return;
      } else if (inTable) {
        // Render accumulated table
        if (tableRows.length >= 2) {
          const hasSeparator = tableRows.length > 1 && tableRows[1].every(cell => /^[-:]+$/.test(cell));
          const header = tableRows[0];
          const rows = hasSeparator ? tableRows.slice(2) : tableRows.slice(1);

          elements.push(
            <div key={`table-${idx}`} className="overflow-x-auto my-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold">
                    {header.map((col, cIdx) => (
                      <th key={cIdx} className="px-4 py-3 border-r border-slate-800 last:border-r-0 uppercase tracking-wider">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {rows.map((r, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                      {r.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 border-r border-slate-100 last:border-r-0 font-medium">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        inTable = false;
        tableRows = [];
      }

      if (!trimmed) return;

      // Headers
      if (trimmed.startsWith('## ')) {
        elements.push(
          <h2 key={idx} className="text-xl sm:text-2xl font-black text-slate-900 pt-6 pb-2 border-b border-slate-200 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-500 shrink-0" />
            <span>{trimmed.replace('## ', '')}</span>
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={idx} className="text-lg font-bold text-slate-800 pt-4 pb-1">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        // Bullet list
        elements.push(
          <div key={idx} className="flex items-start gap-2 text-slate-700 pl-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
            <span className="leading-relaxed">{trimmed.replace(/^[*|-]\s*/, '')}</span>
          </div>
        );
      } else if (trimmed.startsWith('> ')) {
        // Blockquote callout
        elements.push(
          <blockquote key={idx} className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl italic text-amber-950 my-4 font-medium">
            {trimmed.replace('> ', '')}
          </blockquote>
        );
      } else {
        // Paragraph
        elements.push(
          <p key={idx} className="leading-relaxed text-slate-700 text-sm sm:text-base">
            {trimmed}
          </p>
        );
      }
    });

    return elements;
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.summary,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sangsang V-ACT",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sangsang.edu.vn/logo.png"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-20"
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {showToast && (
        <Toast
          id="toast-share-article"
          type="success"
          message="Đã sao chép đường dẫn bài viết vào bộ nhớ tạm!"
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <button onClick={onBack} className="flex items-center gap-1.5 font-bold text-slate-700 hover:text-rose-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Góc Kiến thức V-ACT</span>
          </button>
          <div className="flex items-center gap-1">
            <span>Trang chủ</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span>Kiến thức</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800 truncate max-w-[150px]">{article.category}</span>
          </div>
        </div>

        {/* Main Article Content Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1 rounded-xl">
                {article.category}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-xs font-bold text-slate-600 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Chia sẻ bài viết</span>
              </button>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {article.title}
            </h1>

            <div className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed bg-amber-50/60 p-5 rounded-2xl border-l-4 border-amber-500 shadow-inner">
              {article.summary}
            </div>

            {/* Author & Audit Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Tác giả: {article.author}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{article.readTimeMinutes} phút đọc</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.publishedDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-xl">
                <span>Duyệt chuyên môn: {article.reviewer}</span>
              </div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            {renderRichMarkdown(article.contentMarkdown)}
          </div>

          {/* Expert Author Bio Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center gap-5 shadow-xl">
            <img
              src="/images/teachers/thay_bui_van_cong.png"
              alt="Thầy Bùi Văn Công"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-rose-500 shrink-0"
            />
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">Hội đồng Kiểm duyệt Chuyên môn Sangsang</div>
              <h4 className="text-lg font-bold text-white">Thạc sĩ Bùi Văn Công</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                15+ năm kinh nghiệm giảng dạy & chuyên sâu thi ĐGNL V-ACT ĐHQG TP.HCM. Tác giả ma trận giải nhanh Logic & Phân tích số liệu.
              </p>
            </div>
          </div>

        </article>

        {/* Related Articles Carousel/Grid */}
        <div className="space-y-4">
          <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-rose-500" />
            <span>Bài Viết Liên Quan Khuyên Đọc</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel.id)}
                className="bg-white p-5 rounded-3xl border border-slate-200 hover:border-rose-400 shadow-sm hover:shadow-md transition-all cursor-pointer space-y-3 group"
              >
                <span className="text-[11px] font-bold bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-lg inline-block">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <div className="text-[11px] text-slate-400 flex items-center gap-2">
                  <Clock className="w-3 h-3 text-amber-500" />
                  <span>{rel.readTimeMinutes} phút đọc</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
