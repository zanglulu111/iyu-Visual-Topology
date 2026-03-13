import React, { useState, useEffect } from 'react';
import { Folder, Eye, ShieldAlert, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARCHIVE_CASES, ArchiveCategory } from './archiveCasesData';
import { ArchiveDetailModal } from './ArchiveDetailModal';
import { useTheme } from '../contexts/ThemeContext';

interface ArchiveContentProps {
    lang: 'CN' | 'EN';
    isDark: boolean;
}

const ITEMS_PER_PAGE = 12;

const AnimatedText = ({ cn, en, lang, className = "", hClass = "h-5" }: { cn: React.ReactNode, en: React.ReactNode, lang: 'CN' | 'EN', className?: string, hClass?: string }) => (
  <div className={`overflow-hidden relative flex items-start ${hClass}`}>
    <div className={`transition-all duration-[1500ms] w-full ease-[cubic-bezier(0.16,1,0.3,1)] ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
      <div className="flex flex-col w-full">
        <div className={`${hClass} flex items-center shrink-0 w-full ${className}`}>
          {cn}
        </div>
        <div className={`${hClass} flex items-center shrink-0 w-full ${className}`}>
          {en}
        </div>
      </div>
    </div>
  </div>
);

export const ArchiveContent: React.FC<ArchiveContentProps> = ({ lang }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [selectedCategory, setSelectedCategory] = useState<ArchiveCategory>('ALL');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

    // Reset pagination when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    // Theme variables for consistency mapping
    const t = {
        textTitle: isDark ? 'text-zinc-50' : 'text-[#8B261D]',
        textAccent: isDark ? 'text-zinc-400' : 'text-[#8B261D]',
        textTitleAccent: isDark ? 'text-amber-500' : 'text-[#8B261D]',
        textNormal: isDark ? 'text-zinc-200' : (theme === 'retro' ? 'text-black/95' : 'text-[#2B2824]'),
        textMuted: isDark ? 'text-zinc-400' : (theme === 'retro' ? 'text-black/60' : 'text-[#6A665A]'),
        textCode: isDark ? 'text-zinc-300' : 'text-[#3A352F]',
        btnHover: isDark ? 'hover:bg-zinc-800' : 'hover:bg-white',
        btnDisabled: isDark ? 'opacity-30 cursor-not-allowed' : 'opacity-30 cursor-not-allowed grayscale',
        cardBg: isDark ? 'bg-[#111113]' : (theme === 'retro' ? 'bg-[#F3EFE7]' : 'bg-transparent backdrop-blur-sm'),
        cardBorder: isDark ? 'border-zinc-800 border-2' : (theme === 'retro' ? 'border-[#3A352F]/20 border-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]' : 'border-transparent'),
        cardHoverBorder: isDark ? 'hover:border-zinc-500' : (theme === 'retro' ? 'hover:border-[#8B261D]/40' : 'hover:border-[#8B261D]/40 hover:bg-[#F9F7F1] hover:backdrop-blur-none'),
        cardShadow: isDark ? 'hover:shadow-black hover:shadow-xl shadow-sm' : (theme === 'retro' ? 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]' : 'hover:shadow-[0_45px_100px_rgba(139,38,29,0.1)] shadow-none'),
        cardImageBg: isDark ? 'bg-zinc-900' : (theme === 'retro' ? 'bg-black/5' : 'bg-transparent'),
        imageEffects: isDark ? 'grayscale-[0.3] group-hover:grayscale-0' : (theme === 'retro' ? 'grayscale-[0.6] sepia-[0.3] contrast-125 group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700' : 'grayscale group-hover:grayscale-[0.5] contrast-110 sepia-[0.1]'),
        cardTitleHover: isDark ? 'group-hover:text-amber-400' : 'group-hover:text-[#8B261D]',
        borderHeader: isDark ? 'border-zinc-900 border-b-2 border-dashed' : 'border-[#8B261D]/10 border-b-2 border-dashed',
        tagBorder: isDark ? 'border-zinc-800 bg-zinc-900' : (theme === 'retro' ? 'border-black/20 bg-white' : 'border-[#8B261D]/20 bg-white/60 backdrop-blur-sm'),
        dateBorder: isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-500' : (theme === 'retro' ? 'border-black/10 bg-black/5 text-black/60 shadow-inner' : 'border-[#6A665A]/20 bg-[#F9F7F1] text-[#6A665A]'),
        paperClipColor: isDark ? 'bg-white/10 border-white/5' : (theme === 'retro' ? 'bg-white border-black/10 shadow-sm' : 'bg-white border-black/10'),
        paginationBg: isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-300' : 'bg-white border-[#3A352F] text-[#3A352F]',
        emptyIconOpacity: isDark ? 'opacity-20' : 'opacity-50',
        emptyMessageBorder: isDark ? 'border-zinc-700 text-zinc-500' : 'border-[#8B261D] text-[#8B261D]',
    };

    const categories: { id: ArchiveCategory; labelCn: string; labelEn: string; color: string; darkColor: string }[] = [
        { id: 'ALL', labelCn: '全部案例', labelEn: 'All', color: 'text-[#8B261D] bg-[#8B261D]/5', darkColor: 'text-zinc-300 bg-zinc-800' },
        { id: 'NEUROSIS', labelCn: '神经症', labelEn: 'Neurosis', color: 'text-[#304B35] bg-[#304B35]/5', darkColor: 'text-green-400 bg-green-500/10' },
        { id: 'PSYCHOSIS', labelCn: '精神病', labelEn: 'Psychosis', color: 'text-[#702424] bg-[#702424]/5', darkColor: 'text-red-400 bg-red-500/10' },
        { id: 'PERVERSION', labelCn: '倒错', labelEn: 'Perversion', color: 'text-[#3B2C4F] bg-[#3B2C4F]/5', darkColor: 'text-purple-400 bg-purple-500/10' },
        { id: 'AUTISM', labelCn: '孤独症', labelEn: 'Autism', color: 'text-[#263E5A] bg-[#263E5A]/5', darkColor: 'text-blue-400 bg-blue-500/10' }
    ];

    const getCategoryStyles = (catId: ArchiveCategory) => {
        const cat = categories.find(c => c.id === catId);
        if (!cat) return '';
        return isDark ? cat.darkColor : cat.color;
    };

    const getCategoryTagStyles = (catId: ArchiveCategory) => {
        return `px-2 py-1 text-[9px] font-mono uppercase tracking-widest border-2 shadow-sm font-bold rounded-sm ${getCategoryStyles(catId)} ${t.tagBorder}`;
    };

    const filteredCases = selectedCategory === 'ALL' 
        ? ARCHIVE_CASES 
        : ARCHIVE_CASES.filter(c => c.category === selectedCategory);

    const totalPages = Math.ceil(filteredCases.length / ITEMS_PER_PAGE);
    const currentCases = filteredCases.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const selectedCaseData = ARCHIVE_CASES.find(c => c.id === selectedCaseId) || null;

    return (
        <div className="flex-1 flex flex-col overflow-hidden relative">
            {!selectedCaseId ? (
                <div className="h-full overflow-y-auto custom-scrollbar">
                    {/* Background Texture Overlay - Handled via global CSS classes */}
                    
                    <div className="pt-20 pb-40 px-10 md:px-16 lg:px-24 flex flex-col min-h-0 relative z-10 scroll-mt-20">
                        {/* Title Section */}
                        <div className={`shrink-0 mb-12 border-l-4 pl-6 py-2 ${isDark ? 'border-zinc-700' : 'border-[#8B261D]'}`}>
                            <div className="flex items-center gap-2 mb-3">
                                <ShieldAlert size={14} className={t.textTitleAccent} />
                                <span className={`text-[11px] font-mono tracking-[0.2em] uppercase font-bold ${t.textTitleAccent}`}>
                                    Archive Directory . TOP SECRET
                                </span>
                            </div>
                            <AnimatedText
                                lang={lang}
                                hClass="h-14 lg:h-16"
                                className={`text-4xl lg:text-5xl font-serif mb-4 tracking-[0.1em] font-bold uppercase ${t.textTitle}`}
                                cn="主体观测与临床报告"
                                en="Subject Observation & Clinical Reports"
                            />
                            <AnimatedText
                                lang={lang}
                                hClass="h-28 md:h-32"
                                className={`text-[11px] font-bold max-w-2xl leading-relaxed uppercase tracking-[0.2em] font-mono ${t.textNormal}`}
                                cn="[ 文件来源 ]: 迷雾学派 . [ 目的 ]: 检视短篇研究报告，探索隐秘在字里行间的结构缺陷。在这里，每一次访谈都是一次针对实在界的解码。"
                                en="[ SOURCE ]: MIST SCHOOL . [ OBJECTIVE ]: Review short research reports, exploring structural flaws hidden between lines. Every interview is a decoding of the Real."
                            />
                        </div>

                        {/* Filters */}
                        <div className={`shrink-0 flex flex-wrap items-center gap-3 mb-10 px-8 py-5 border-b border-dashed transition-colors ${theme === 'retro' ? 'bg-transparent border-[#8B261D]/20' : t.borderHeader}`}>
                            {categories.map(cat => {
                                const isSelected = selectedCategory === cat.id;
                                let btnClasses = '';
                                
                                if (isDark) {
                                    btnClasses = isSelected 
                                        ? (cat.id === 'ALL' ? 'bg-zinc-700 text-zinc-100 border-zinc-600' : `${cat.darkColor} border-zinc-600`)
                                        : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 bg-zinc-900/30 hover:bg-zinc-800';
                                } else {
                                    btnClasses = isSelected
                                        ? (cat.id === 'ALL' ? 'bg-[#3A352F] text-[#EBE7DF] border-[#3A352F]' : `${cat.color} bg-white border-[#3A352F] text-[#3A352F]`)
                                        : theme === 'retro' ? `border-[#CFCBBF] text-[#6A665A] hover:text-[#3A352F] bg-[var(--bg-header)] hover:bg-white` : 'border-[#CFCBBF] text-[#6A665A] hover:text-[#3A352F] bg-[#F5F2EA] hover:bg-white';
                                }

                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm border-2 shadow-sm font-mono ${btnClasses}`}
                                    >
                                        {lang === 'CN' ? cat.labelCn : cat.labelEn}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Grid */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentCases.map((c, i) => (
                                    <div 
                                        key={c.id} 
                                        onClick={() => setSelectedCaseId(c.id)}
                                        className={`group flex flex-col aspect-[3/4] ${t.cardBg} ${t.cardBorder} rounded-sm overflow-hidden cursor-pointer ${t.cardHoverBorder} ${t.cardShadow} transition-all duration-500 relative
                                            ${isDark || theme === 'retro' ? 'grayscale-[0.8] opacity-90 hover:grayscale-0 hover:opacity-100 hover:-translate-y-2' : ''}`}
                                    >
                                        <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-3 shadow-sm border z-30 transform -rotate-2 mix-blend-multiply ${t.paperClipColor}`}></div>

                                        <div className={`aspect-video relative overflow-hidden p-4 pb-0 ${t.cardImageBg}`}>
                                            {!isDark && <div className="absolute inset-0 bg-transparent transition-colors z-10 mix-blend-multiply opacity-20 texture-paper"></div>}
                                            {isDark && <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>}
                                            
                                            <img 
                                                src={c.imageUrl} 
                                                alt={lang === 'CN' ? c.titleCn : c.titleEn} 
                                                className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out border border-black/5 ${t.imageEffects}`}
                                                loading="lazy"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600";
                                                }}
                                            />
                                            
                                            <div className="absolute top-4 right-4 z-20">
                                                <div className={getCategoryTagStyles(c.category)}>
                                                    [ {c.category} ]
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`p-5 flex flex-col flex-1 relative texture-dust`}>
                                            <div className={`flex items-center justify-between mb-3 border-b border-dashed pb-2 ${isDark ? 'border-zinc-800' : 'border-[#CFCBBF]'}`}>
                                                <span className={`text-[9px] font-mono tracking-widest uppercase border px-1 transition-all duration-500 ${t.dateBorder} ${isDark || theme === 'retro' ? 'opacity-40 group-hover:opacity-80' : ''}`}>
                                                    NO. {((currentPage - 1) * ITEMS_PER_PAGE) + 1000 + i}-{c.id.toUpperCase()}
                                                </span>
                                                <Eye size={12} className={`opacity-0 group-hover:opacity-100 transition-opacity ${t.textTitleAccent}`} />
                                            </div>
                                            
                                            <AnimatedText
                                                lang={lang}
                                                hClass="h-16 lg:h-20"
                                                className={`text-xl lg:text-2xl font-serif mb-3 transition-all duration-500 font-bold uppercase tracking-[0.05em] leading-tight ${t.textTitle} ${t.cardTitleHover} ${isDark || theme === 'retro' ? 'opacity-75 group-hover:opacity-100' : ''}`}
                                                cn={c.titleCn}
                                                en={c.titleEn}
                                            />
                                            
                                            <AnimatedText
                                                lang={lang}
                                                hClass="h-24 lg:h-28"
                                                className={`text-[15px] leading-[1.8] flex-1 line-clamp-4 transition-all duration-500 font-serif tracking-normal ${t.textNormal} opacity-40 group-hover:opacity-100`}
                                                cn={c.summaryCn}
                                                en={c.summaryEn}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-6 mt-16 pb-8 relative z-20">
                                <button 
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className={`flex items-center gap-1 p-2 rounded-sm border-2 shadow-sm uppercase font-mono text-[10px] font-bold tracking-widest transition-all
                                    ${currentPage === 1 ? t.btnDisabled : `hover:shadow-md ${t.btnHover}`} ${t.paginationBg}`}
                                >
                                    <ChevronLeft size={14} />
                                    {lang === 'CN' ? '上一页' : 'PREV'}
                                </button>
                                
                                <div className={`font-mono text-xs tracking-widest font-bold ${t.textTitle}`}>
                                    [ {currentPage} / {totalPages} ]
                                </div>
                                
                                <button 
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className={`flex items-center gap-1 p-2 rounded-sm border-2 shadow-sm uppercase font-mono text-[10px] font-bold tracking-widest transition-all
                                    ${currentPage === totalPages ? t.btnDisabled : `hover:shadow-md ${t.btnHover}`} ${t.paginationBg}`}
                                >
                                    {lang === 'CN' ? '下一页' : 'NEXT'}
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <ArchiveDetailModal 
                    isOpen={!!selectedCaseId} 
                    onClose={() => setSelectedCaseId(null)}
                    caseData={selectedCaseData}
                    lang={lang}
                    isDark={isDark}
                    renderInPlace={true}
                />
            )}
        </div>
    );
};
