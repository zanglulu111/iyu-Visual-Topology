import React, { useState, useEffect } from 'react';
import { X, Folder, Eye, ShieldAlert, Moon, Sun, Languages, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARCHIVE_CASES, ArchiveCategory, CaseStudy } from './archiveCasesData';
import { ArchiveDetailModal } from './ArchiveDetailModal';
import { useTheme } from '../contexts/ThemeContext';
import { getR2PublicUrl } from '../services/r2Storage';

interface ArchiveDirectoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    isFullScreen?: boolean;
}

const ITEMS_PER_PAGE = 15;

export const ArchiveDirectoryModal: React.FC<ArchiveDirectoryModalProps> = ({ isOpen, onClose, lang, isFullScreen = false }) => {
    const { theme, toggleTheme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState<ArchiveCategory>('ALL');
    const [localLang, setLocalLang] = useState<'CN' | 'EN'>(lang);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

    useEffect(() => {
        setLocalLang(lang);
    }, [lang]);

    // Reset pagination when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    if (!isOpen) return null;

    // Theme Configs
    const isDark = theme === 'dark';
    
    // Theme variables for consistency mapping
    const t = {
        bgContainer: theme === 'retro' ? 'bg-[var(--bg-main)]' : (isDark ? 'bg-[#0A0A0B]' : 'bg-white'),
        borderContainer: theme === 'retro' ? 'border-[var(--border-main)] border-2 shadow-[0_0_30px_rgba(139,38,29,0.1)]' : (isDark ? 'border-zinc-800 border-4' : 'border-[#3A352F] border-4'),
        bgHeader: theme === 'retro' ? 'bg-[var(--bg-main)]/95' : (isDark ? 'bg-[#0A0A0B]/90' : 'bg-white/95'),
        borderHeader: theme === 'retro' ? 'border-[var(--border-main)] border-b flex-shrink-0' : (isDark ? 'border-zinc-900 border-b-2 border-dashed' : 'border-[#8B261D]/10 border-b-2 border-dashed'),
        textTitle: theme === 'retro' ? 'text-[var(--text-accent)]' : (isDark ? 'text-zinc-50' : 'text-[#8B261D]'),
        textAccent: theme === 'retro' ? 'text-[var(--text-accent)]' : (isDark ? 'text-zinc-400' : 'text-[#8B261D]'),
        textTitleAccent: theme === 'retro' ? 'text-[var(--text-accent)]' : (isDark ? 'text-amber-500' : 'text-[#8B261D]'),
        textNormal: theme === 'retro' ? 'text-black/95' : (isDark ? 'text-zinc-200' : 'text-[#2B2824]'),
        textMuted: theme === 'retro' ? 'text-black/60' : (isDark ? 'text-zinc-400' : 'text-[#6A665A]'),
        textCode: theme === 'retro' ? 'text-[var(--text-accent)]' : (isDark ? 'text-zinc-300' : 'text-[#3A352F]'),
        btnBg: theme === 'retro' ? 'bg-[var(--bg-main)]' : (isDark ? 'bg-zinc-900' : 'bg-[#F9F7F1]'),
        btnHover: theme === 'retro' ? 'hover:bg-[var(--text-accent)] hover:text-[var(--bg-main)]' : (isDark ? 'hover:bg-zinc-800' : 'hover:bg-white'),
        btnBorder: theme === 'retro' ? 'border-[var(--border-main)]' : (isDark ? 'border-zinc-700' : 'border-[#8B261D]/20'),
        btnTextHover: theme === 'retro' ? 'text-[var(--text-accent)] hover:text-[var(--bg-main)]' : (isDark ? 'hover:text-amber-500 text-zinc-400' : 'hover:text-[#8B261D] text-[#3A352F]'),
        btnDisabled: isDark ? 'opacity-30 cursor-not-allowed' : 'opacity-30 cursor-not-allowed grayscale',
        cardBg: theme === 'retro' ? 'bg-[#F3EFE7]' : (isDark ? 'bg-[#111113]' : 'bg-[#EBE7DF]/40'),
        cardBorder: theme === 'retro' ? 'border-[#3A352F]/20 border-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]' : (isDark ? 'border-zinc-800 border-2' : 'border-[#8B261D]/5 border-2'),
        cardHoverBorder: theme === 'retro' ? 'hover:border-[#8B261D]/40' : (isDark ? 'hover:border-zinc-500' : 'hover:border-[#8B261D]/40'),
        cardShadow: theme === 'retro' ? 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]' : (isDark ? 'hover:shadow-black hover:shadow-xl shadow-sm' : 'hover:shadow-lg shadow-sm'),
        cardImageBg: theme === 'retro' ? 'bg-black/5' : (isDark ? 'bg-zinc-900' : 'bg-[#DCD8CF]'),
        imageEffects: theme === 'retro' ? 'sepia-[0.4] contrast-110 brightness-[0.9] grayscale-[0.1] group-hover:sepia-0 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700' : (isDark ? 'desaturate-[0.5] contrast-125 brightness-75 group-hover:brightness-100 transition-all duration-700' : 'grayscale group-hover:grayscale-[0.5] contrast-110 sepia-[0.1]'),
        cardTitleHover: theme === 'retro' ? 'group-hover:text-[var(--text-accent)]' : (isDark ? 'group-hover:text-amber-400' : 'group-hover:text-[#8B261D]'),
        paperClipColor: theme === 'retro' ? 'bg-white border-black/10 shadow-sm' : (isDark ? 'bg-white/10 border-white/5' : 'bg-white border-black/10'),
        tagBorder: theme === 'retro' ? 'border-black/20 bg-white' : (isDark ? 'border-zinc-800 bg-zinc-900' : 'border-[#8B261D]/20 bg-white'),
        dateBorder: theme === 'retro' ? 'border-black/10 bg-black/5 text-black/60 shadow-inner' : (isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-500' : 'border-[#6A665A]/20 bg-[#F9F7F1] text-[#6A665A]'),
        emptyIconOpacity: isDark ? 'opacity-20' : 'opacity-50',
        emptyMessageBorder: theme === 'retro' ? 'border-[var(--border-main)] text-[var(--text-accent)]' : (isDark ? 'border-zinc-700 text-zinc-500' : 'border-[#8B261D] text-[#8B261D]'),
        paginationBg: theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)] text-[var(--text-accent)]' : (isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-300' : 'bg-white border-[#3A352F] text-[#3A352F]')
    };

    const categories: { id: ArchiveCategory; labelCn: string; labelEn: string; color: string; darkColor: string }[] = [
        { id: 'ALL', labelCn: '全部案例', labelEn: 'All', color: 'text-[#8B261D] bg-[#EBE7DF] border-[#8B261D]', darkColor: 'text-white bg-black/40 border-white shadow-[0_0_10px_rgba(255,255,255,0.2)]' },
        { id: 'NEUROSIS', labelCn: '神经症', labelEn: 'Neurosis', color: 'text-[#304B35] bg-[#EBE7DF] border-[#304B35]/30', darkColor: 'text-[#4ADE80] bg-black/40 border-[#4ADE80] shadow-[0_0_10px_rgba(74,222,128,0.2)]' },
        { id: 'PSYCHOSIS', labelCn: '精神病', labelEn: 'Psychosis', color: 'text-[#702424] bg-[#EBE7DF] border-[#702424]/30', darkColor: 'text-[#F87171] bg-black/40 border-[#F87171] shadow-[0_0_10px_rgba(248,113,113,0.2)]' },
        { id: 'PERVERSION', labelCn: '倒错', labelEn: 'Perversion', color: 'text-[#3B2C4F] bg-[#EBE7DF] border-[#3B2C4F]/30', darkColor: 'text-[#C084FC] bg-black/40 border-[#C084FC] shadow-[0_0_10px_rgba(192,132,252,0.2)]' },
        { id: 'AUTISM', labelCn: '孤独症', labelEn: 'Autism', color: 'text-[#263E5A] bg-[#EBE7DF] border-[#263E5A]/30', darkColor: 'text-[#60A5FA] bg-black/40 border-[#60A5FA] shadow-[0_0_10px_rgba(96,165,250,0.2)]' }
    ];

    const getCategoryStyles = (catId: ArchiveCategory) => {
        const cat = categories.find(c => c.id === catId);
        if (!cat) return '';
        return isDark ? cat.darkColor : cat.color;
    };

    const getCategoryTagStyles = (catId: ArchiveCategory) => {
        return `px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.2em] border shadow-md font-black rounded-sm ${getCategoryStyles(catId)}`;
    };

    const filteredCases = selectedCategory === 'ALL' 
        ? ARCHIVE_CASES 
        : ARCHIVE_CASES.filter(c => c.category === selectedCategory);

    // Pagination Logic
    const totalPages = Math.ceil(filteredCases.length / ITEMS_PER_PAGE);
    const currentCases = filteredCases.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleCaseClick = (id: string) => {
        setSelectedCaseId(id);
    };

    const selectedCaseData = ARCHIVE_CASES.find(c => c.id === selectedCaseId) || null;

    return (
        <>
            <div className={isFullScreen ? "w-full h-full" : `fixed inset-0 backdrop-blur-md z-[100] flex items-center justify-center p-4 ${theme === 'retro' ? 'bg-transparent' : (isDark ? 'bg-black/90' : 'bg-black/80')}`}>
                {/* Main Container */}
                <div className={`${t.bgContainer} ${isFullScreen ? 'w-full h-full' : `${t.borderContainer} rounded-lg w-full max-w-6xl h-[90vh] shadow-2xl`} flex flex-col overflow-hidden relative transition-all duration-500 texture-paper`}>
                    
                    {/* Header - Only show in modal mode */}
                    {!isFullScreen && (
                    <div className={`shrink-0 ${t.borderHeader} px-6 lg:px-8 py-4 flex items-center justify-between ${t.bgHeader} backdrop-blur relative z-20`}>
                        <div className="flex items-center gap-3">
                            <Folder size={18} className={`${t.textAccent} opacity-80`} />
                            <h2 className={`text-xs font-bold uppercase tracking-[0.2em] font-mono ${t.textCode}`}>
                                {localLang === 'CN' ? '机密档案集 / CONFIDENTIAL ARCHIVES' : 'CONFIDENTIAL ARCHIVES'}
                            </h2>
                        </div>
                        
                        {/* Controls */}
                        <div className="flex items-center gap-3">
                            <div className={`flex items-center rounded-sm p-1 border ${isDark ? 'bg-white/5 border-zinc-700/50' : 'bg-black/5 border-black/10'}`}>
                                <button 
                                    onClick={() => setLocalLang(localLang === 'CN' ? 'EN' : 'CN')} 
                                    className={`flex items-center gap-1.5 px-2 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase transition-colors ${t.btnTextHover}`}
                                >
                                    <Languages size={12} />
                                    {localLang}
                                </button>
                                <div className={`w-px h-3 mx-1 ${isDark ? 'bg-zinc-700/50' : 'bg-black/10'}`}></div>
                                <button 
                                    onClick={toggleTheme} 
                                    className={`flex items-center gap-1.5 px-2 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase transition-colors ${t.btnTextHover}`}
                                >
                                    {isDark ? <Sun size={12} /> : <Moon size={12} />}
                                    {isDark ? 'LIGHT' : 'DARK'}
                                </button>
                            </div>

                            <button onClick={onClose} className={`p-1.5 transition-colors rounded-sm border shadow-sm ${t.btnBg} ${t.btnHover} ${t.btnBorder} ${t.btnTextHover} outline-none`}>
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                    )}

                    {/* Main Content Area: Sidebar + Grid/Detail */}
                    <div className="flex-1 flex flex-row overflow-hidden relative z-10 h-full">
                        {/* Left Navigation Sidebar */}
                        <div className={`w-64 md:w-80 border-r-2 border-dashed flex flex-col pt-6 md:pt-10 opacity-100 shrink-0 transition-all duration-500 ${theme === 'retro' ? 'border-[#8B261D]/10 bg-transparent' : (isDark ? 'border-zinc-900 bg-[#0A0A0B]/80' : 'border-[#89817a]/10 bg-[#EBE7DF] shadow-inner')}`}>
                            <div className="px-6 pb-6 border-b border-dashed border-zinc-800/10 mb-6">
                                <h3 className={`text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-4 ${t.textMuted}`}>
                                    {localLang === 'CN' ? '按目录浏览' : 'BROWSE BY CATEGORY'}
                                </h3>
                                
                                <div className="space-y-2">
                                    {categories.map(cat => {
                                        const isSelected = selectedCategory === cat.id;
                                        return (
                                            <button 
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-sm border-2 transition-all duration-300 group
                                                ${isSelected 
                                                    ? (isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-100 shadow-lg' : (theme === 'retro' ? 'bg-[#8B261D]/10 border-[#8B261D] text-[#8B261D] shadow-sm' : 'bg-white border-[#8B261D] text-[#8B261D] shadow-md -translate-y-0.5'))
                                                    : (isDark ? 'bg-zinc-950/40 border-zinc-900/50 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700' : 'bg-[#DCD8CF]/30 border-transparent text-[#6A665A] hover:bg-white hover:border-[#8B261D]/20')}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className={`w-2 h-2 rounded-full ${isSelected ? (isDark ? 'bg-amber-500' : 'bg-[#8B261D]') : 'bg-zinc-700/50'}`}></span>
                                                    <span className="text-xs font-bold font-mono tracking-widest uppercase">{localLang === 'CN' ? cat.labelCn : cat.labelEn}</span>
                                                </div>
                                                <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isSelected ? (isDark ? 'text-amber-500' : 'text-[#8B261D]') : 'text-zinc-600'}`} />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-end opacity-40 grayscale">
                                <div className={`border-2 border-dashed p-4 ${isDark ? 'border-zinc-800 text-zinc-600' : 'border-[#CFCBBF] text-[#6A665A]'}`}>
                                    <ShieldAlert size={24} className="mb-4" />
                                    <p className="text-[10px] leading-relaxed font-mono font-bold italic">
                                        RESTRICTED ACCESS. UNAUTHORIZED DUPLICATION IS A VIOLATION OF APPLICABLE LAWS.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className={`flex-1 overflow-y-auto custom-scrollbar relative transition-all duration-500 ${theme === 'retro' ? 'bg-transparent' : (isDark ? 'bg-[#0A0A0B]' : 'bg-white')}`}>
                            {selectedCaseId ? (
                                <ArchiveDetailModal 
                                    isOpen={true} 
                                    onClose={() => setSelectedCaseId(null)}
                                    caseData={selectedCaseData}
                                    lang={localLang}
                                    renderInPlace={true}
                                />
                            ) : (
                                <div className="p-8 lg:p-12 max-w-6xl mx-auto flex flex-col min-h-full transition-all animate-in fade-in duration-700">
                                    {/* Title Section */}
                                    <div className={`shrink-0 mb-12 border-l-4 pl-6 py-2 ${isDark ? 'border-zinc-700' : 'border-[#8B261D]'}`}>
                                        <div className="flex items-center gap-2 mb-4">
                                            <ShieldAlert size={14} className={t.textTitleAccent} />
                                            <span className={`text-[12px] font-mono tracking-[0.2em] uppercase font-bold ${t.textTitleAccent}`}>
                                                Archive Directory . TOP SECRET
                                            </span>
                                        </div>
                                        <h1 className={`text-4xl lg:text-5xl font-serif mb-4 tracking-[0.1em] font-bold uppercase ${t.textTitle}`}>
                                            {localLang === 'CN' ? '主体观测与临床报告' : 'Subject Observation & Clinical Reports'}
                                        </h1>
                                        <p className={`text-[11px] font-bold max-w-2xl leading-relaxed uppercase tracking-[0.2em] font-mono ${t.textNormal}`}>
                                            {localLang === 'CN' 
                                                ? '[ 文件来源 ]: 迷雾学派 [ 目的 ]: 检视短篇研究报告，探索隐秘在字里行间的结构缺陷。在这里，每一次访谈都是一次针对实在界的解码。'
                                                : '[ SOURCE ]: MIST SCHOOL [ OBJECTIVE ]: Review short research reports of the Mist School, exploring structural flaws hidden between lines. Every interview is a decoding of the Real.'}
                                        </p>
                                    </div>

                                    {/* Grid */}
                                    <div className="flex-1">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {currentCases.map((c, i) => (
                                                <div 
                                                    key={c.id} 
                                                    onClick={() => handleCaseClick(c.id)}
                                                    className={`group flex flex-col aspect-[3/4] ${t.cardBg} ${t.cardBorder} rounded-sm overflow-hidden cursor-pointer ${t.cardHoverBorder} ${t.cardShadow} transition-all duration-500 relative
                                                        ${isDark || theme === 'retro' ? 'grayscale-[0.8] opacity-90 hover:grayscale-0 hover:opacity-100 hover:-translate-y-2' : ''}`}
                                                >
                                                    {/* Paper Clip */}
                                                    <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-3 shadow-sm border z-30 transform -rotate-2 mix-blend-multiply ${t.paperClipColor}`}></div>

                                                    {/* Image */}
                                                    <div className={`aspect-video relative overflow-hidden p-4 pb-0 ${t.cardImageBg}`}>
                                                        {!isDark && <div className="absolute inset-0 bg-transparent transition-colors z-10 mix-blend-multiply opacity-20 texture-paper"></div>}
                                                        {isDark && <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>}
                                                        <img 
                                                            src={c.imageUrl} 
                                                            alt={localLang === 'CN' ? c.titleCn : c.titleEn} 
                                                            className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out border border-black/5 ${t.imageEffects}`}
                                                            loading="lazy"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600";
                                                                (e.target as HTMLImageElement).onerror = null;
                                                            }}
                                                        />
                                                        <div className="absolute top-6 right-6 z-20">
                                                            <div className={getCategoryTagStyles(c.category)}>
                                                                [ {categories.find(cat => cat.id === c.category)?.[localLang === 'CN' ? 'labelCn' : 'labelEn']} ]
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className={`p-6 flex flex-col flex-1 relative texture-dust`}>
                                                        <div className={`flex items-center justify-between mb-4 border-b border-dashed pb-2 ${isDark ? 'border-zinc-800' : 'border-[#CFCBBF]'}`}>
                                                            <span className={`text-[10px] font-mono tracking-widest uppercase border px-1 transition-all duration-500 ${t.dateBorder} ${isDark || theme === 'retro' ? 'opacity-40 group-hover:opacity-80' : ''}`}>
                                                                NO. {((currentPage - 1) * ITEMS_PER_PAGE) + 1000 + i}-{c.id.toUpperCase()} // {c.date}
                                                            </span>
                                                            <Eye size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${t.textTitleAccent}`} />
                                                        </div>
                                                        <h3 className={`text-xl lg:text-2xl font-serif mb-4 transition-all duration-500 font-bold uppercase tracking-[0.05em] leading-tight ${t.textTitle} ${t.cardTitleHover} ${isDark || theme === 'retro' ? 'opacity-70 group-hover:opacity-100' : ''}`}>
                                                            {localLang === 'CN' ? c.titleCn : c.titleEn}
                                                        </h3>
                                                        <p className={`text-[15px] leading-[1.8] flex-1 line-clamp-4 transition-all duration-500 font-serif tracking-normal ${t.textNormal} opacity-40 group-hover:opacity-100`}>
                                                            {localLang === 'CN' ? c.summaryCn : c.summaryEn}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {filteredCases.length === 0 && (
                                            <div className={`py-20 flex flex-col items-center justify-center ${t.textTitleAccent}`}>
                                                <Folder size={48} className={`mb-4 ${t.emptyIconOpacity}`} />
                                                <p className={`text-sm tracking-widest font-mono font-bold border-2 border-dashed p-4 transform -rotate-2 mix-blend-multiply ${t.emptyMessageBorder}`}>
                                                    {localLang === 'CN' ? 'CLASSIFIED / 档案封存中' : 'ARCHIVE CLASSIFIED OR EMPTY'}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Pagination */}
                                    {totalPages > 1 && (
                                        <div className={`shrink-0 flex justify-center items-center gap-6 mt-16 pb-8`}>
                                            <button 
                                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                                disabled={currentPage === 1}
                                                className={`flex items-center gap-1 p-2 rounded-sm border-2 shadow-sm uppercase font-mono text-xs font-bold tracking-widest transition-all
                                                ${currentPage === 1 ? t.btnDisabled : `hover:shadow-md ${t.btnHover}`} ${t.paginationBg}`}
                                            >
                                                <ChevronLeft size={16} />
                                                {localLang === 'CN' ? '上一页' : 'PREV'}
                                            </button>
                                            <div className={`font-mono text-sm tracking-widest font-bold ${t.textTitle}`}>
                                                [ {currentPage} / {totalPages} ]
                                            </div>
                                            <button 
                                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                                disabled={currentPage === totalPages}
                                                className={`flex items-center gap-1 p-2 rounded-sm border-2 shadow-sm uppercase font-mono text-xs font-bold tracking-widest transition-all
                                                ${currentPage === totalPages ? t.btnDisabled : `hover:shadow-md ${t.btnHover}`} ${t.paginationBg}`}
                                            >
                                                {localLang === 'CN' ? '下一页' : 'NEXT'}
                                                <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fallback detail modal - kept for safety but disabled */}
            {false && (
                <ArchiveDetailModal 
                    isOpen={!!selectedCaseId} 
                    onClose={() => setSelectedCaseId(null)}
                    caseData={selectedCaseData}
                    lang={localLang}
                />
            )}
        </>
    );
};
