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
        borderHeader: theme === 'retro' ? 'border-[var(--border-main)]/20 border-b flex-shrink-0' : (isDark ? 'border-zinc-900 border-b-2 border-dashed' : 'border-[#8B261D]/10 border-b-2 border-dashed'),
        textTitle: theme === 'retro' ? 'text-[var(--text-accent)]' : (isDark ? 'text-zinc-100' : 'text-[#8B261D]'),
        textAccent: theme === 'retro' ? 'text-[var(--text-accent)]' : (isDark ? 'text-zinc-400' : 'text-[#8B261D]'),
        textTitleAccent: theme === 'retro' ? 'text-[var(--text-accent)]' : (isDark ? 'text-amber-500' : 'text-[#8B261D]'),
        textNormal: theme === 'retro' ? 'text-black/80' : (isDark ? 'text-zinc-400' : 'text-[#2B2824]'),
        textMuted: theme === 'retro' ? 'text-black/40' : (isDark ? 'text-zinc-500' : 'text-[#6A665A]'),
        textCode: theme === 'retro' ? 'text-[var(--text-accent)]' : (isDark ? 'text-zinc-300' : 'text-[#3A352F]'),
        btnBg: theme === 'retro' ? 'bg-[var(--bg-main)]' : (isDark ? 'bg-zinc-900' : 'bg-[#F9F7F1]'),
        btnHover: theme === 'retro' ? 'hover:bg-[var(--text-accent)] hover:text-[var(--bg-main)]' : (isDark ? 'hover:bg-zinc-800' : 'hover:bg-white'),
        btnBorder: theme === 'retro' ? 'border-[var(--border-main)]/20' : (isDark ? 'border-zinc-700' : 'border-[#8B261D]/20'),
        btnTextHover: theme === 'retro' ? 'text-[var(--text-accent)] hover:text-[var(--bg-main)]' : (isDark ? 'hover:text-amber-500 text-zinc-400' : 'hover:text-[#8B261D] text-[#3A352F]'),
        btnDisabled: isDark ? 'opacity-30 cursor-not-allowed' : 'opacity-30 cursor-not-allowed grayscale',
        cardBg: theme === 'retro' ? 'bg-[var(--bg-main)] shadow-sm' : (isDark ? 'bg-[#111113]' : 'bg-[#EBE7DF]/40'),
        cardBorder: theme === 'retro' ? 'border-[var(--border-main)]/20 hover:border-[var(--border-accent)]' : (isDark ? 'border-zinc-800 border-2' : 'border-[#8B261D]/5 border-2'),
        cardHoverBorder: theme === 'retro' ? 'hover:border-[var(--border-main)]' : (isDark ? 'hover:border-zinc-500' : 'hover:border-[#8B261D]/40'),
        cardShadow: theme === 'retro' ? 'hover:shadow-[0_8px_30px_rgba(139,38,29,0.15)] shadow-sm' : (isDark ? 'hover:shadow-black hover:shadow-xl shadow-sm' : 'hover:shadow-lg shadow-sm'),
        cardImageBg: theme === 'retro' ? 'bg-[var(--bg-main)]' : (isDark ? 'bg-zinc-900' : 'bg-[#DCD8CF]'),
        imageEffects: theme === 'retro' ? 'grayscale-[0.3] contrast-[1.1] group-hover:grayscale-0' : (isDark ? 'grayscale-[0.5] group-hover:grayscale-0' : 'grayscale group-hover:grayscale-[0.5] contrast-110 sepia-[0.1]'),
        cardTitleHover: theme === 'retro' ? 'group-hover:text-[var(--text-accent)]' : (isDark ? 'group-hover:text-amber-400' : 'group-hover:text-[#8B261D]'),
        texturePattern: isDark ? '' : "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
        dustPattern: isDark ? '' : "url('https://www.transparenttextures.com/patterns/dust.png')",
        paperClipColor: theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50' : (isDark ? 'bg-white/10 border-white/5' : 'bg-white border-black/10'),
        tagBorder: theme === 'retro' ? 'border-[var(--border-main)]/20 bg-[var(--bg-main)]' : (isDark ? 'border-zinc-800 bg-zinc-900' : 'border-[#8B261D]/20 bg-white'),
        dateBorder: theme === 'retro' ? 'border-[var(--border-main)]/30 bg-[var(--bg-main)] text-[var(--text-accent)]/80' : (isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-500' : 'border-[#6A665A]/20 bg-[#F9F7F1] text-[#6A665A]'),
        emptyIconOpacity: isDark ? 'opacity-20' : 'opacity-50',
        emptyMessageBorder: theme === 'retro' ? 'border-[var(--border-main)] text-[var(--text-accent)]' : (isDark ? 'border-zinc-700 text-zinc-500' : 'border-[#8B261D] text-[#8B261D]'),
        paginationBg: theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/30 text-[var(--text-accent)]' : (isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-300' : 'bg-white border-[#3A352F] text-[#3A352F]')
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

    // Pagination Logic
    const totalPages = Math.ceil(filteredCases.length / ITEMS_PER_PAGE);
    const currentCases = filteredCases.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleCaseClick = (id: string) => {
        setSelectedCaseId(id);
    };

    const selectedCaseData = ARCHIVE_CASES.find(c => c.id === selectedCaseId) || null;

    return (
        <>
            <div className={isFullScreen ? "w-full h-full animate-fadeIn" : `fixed inset-0 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fadeIn ${theme === 'retro' ? 'bg-transparent' : (isDark ? 'bg-black/90' : 'bg-black/80')}`}>
                {/* Main Container */}
                <div className={`${t.bgContainer} ${isFullScreen ? 'w-full h-full' : `${t.borderContainer} rounded-lg w-full max-w-6xl h-[90vh] shadow-2xl`} flex flex-col overflow-hidden relative transition-colors duration-500`} style={(isDark || theme === 'retro') ? {} : { backgroundImage: t.texturePattern }}>
                    
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

                    {/* Background Texture Overlay (Disabled in Retro to avoid color shift) */}
                    {(!isDark && theme !== 'retro') && (
                        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none grayscale contrast-150" style={{ backgroundImage: t.texturePattern }}></div>
                    )}

                    <div className="flex-1 flex flex-row overflow-hidden relative z-10 h-full">
                        {/* Left Navigation Sidebar */}
                        <div className={`w-64 md:w-80 border-r-2 border-dashed flex flex-col pt-6 md:pt-10 opacity-100 shrink-0 ${theme === 'retro' ? 'border-[#8B261D]/10 bg-transparent' : (isDark ? 'border-zinc-900 bg-[#0A0A0B]/80' : 'border-[#89817a]/10 bg-[#EBE7DF] shadow-inner')}`}>
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
                                                    ? (isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-100 shadow-lg' : 'bg-white border-[#8B261D] text-[#8B261D] shadow-md -translate-y-0.5')
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

                        {/* Content Grid Area */}
                        <div className={`flex-1 overflow-y-auto px-6 md:px-12 pt-6 md:pt-10 pb-20 custom-scrollbar relative ${theme === 'retro' ? 'bg-transparent' : (isDark ? 'bg-[#0A0A0B]' : 'bg-white')}`}>
                            <div className="p-8 lg:p-12 max-w-6xl mx-auto flex flex-col min-h-full">
                            
                            {/* Title Section */}
                            <div className={`shrink-0 mb-12 border-l-4 pl-6 py-2 ${isDark ? 'border-zinc-700' : 'border-[#8B261D]'}`}>
                                <div className="flex items-center gap-2 mb-4">
                                    <ShieldAlert size={14} className={t.textTitleAccent} />
                                    <span className={`text-[12px] font-mono tracking-[0.2em] uppercase font-bold ${t.textTitleAccent}`}>
                                        Archive Directory . TOP SECRET
                                    </span>
                                </div>
                                <h1 className={`text-4xl lg:text-5xl font-serif mb-4 tracking-wide font-normal ${t.textTitle}`}>
                                    {localLang === 'CN' ? '主体观测与临床报告' : 'Subject Observation & Clinical Reports'}
                                </h1>
                                <p className={`text-xs max-w-2xl leading-relaxed uppercase tracking-widest font-mono ${t.textNormal}`}>
                                    {localLang === 'CN' 
                                        ? '[ 文件来源 ]: 迷雾学派 . [ 目的 ]: 检视短篇研究报告，探索隐秘在字里行间的结构缺陷。在这里，每一次访谈都是一次针对实在界的解码。'
                                        : '[ SOURCE ]: MIST SCHOOL . [ OBJECTIVE ]: Review short research reports of the Mist School, exploring structural flaws hidden between lines. Every interview is a decoding of the Real.'}
                                </p>
                            </div>

                            {/* Filters */}
                            <div className={`shrink-0 flex flex-wrap items-center gap-3 mb-10 pb-6 ${t.borderHeader}`}>
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
                                            : 'border-[#CFCBBF] text-[#6A665A] hover:text-[#3A352F] bg-[#F5F2EA] hover:bg-white';
                                    }

                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm border-2 shadow-sm font-mono ${btnClasses}`}
                                        >
                                            {localLang === 'CN' ? cat.labelCn : cat.labelEn}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Grid (Flex-1 allows pagination to be pushed to bottom if grid is small) */}
                            <div className="flex-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {currentCases.map((c, i) => (
                                        <div 
                                            key={c.id} 
                                            onClick={() => handleCaseClick(c.id)}
                                            className={`group flex flex-col ${t.cardBg} ${t.cardBorder} rounded-sm overflow-hidden cursor-pointer ${t.cardHoverBorder} ${t.cardShadow} transition-all relative`}
                                        >
                                            
                                            {/* Paper Clip / Tape Effect Top Center */}
                                            <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-3 shadow-sm border z-30 transform -rotate-2 mix-blend-multiply ${t.paperClipColor}`}></div>

                                            {/* Image */}
                                            <div className={`h-48 relative overflow-hidden p-4 pb-0 ${t.cardImageBg}`}>
                                                
                                                {!isDark && <div className="absolute inset-0 bg-transparent transition-colors z-10 mix-blend-multiply opacity-20" style={{ backgroundImage: t.texturePattern }}></div>}
                                                {isDark && <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>}
                                                
                                                <img 
                                                    src={c.imageUrl} 
                                                    alt={localLang === 'CN' ? c.titleCn : c.titleEn} 
                                                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${t.imageEffects}`}
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600";
                                                        (e.target as HTMLImageElement).onerror = null;
                                                    }}
                                                />
                                                
                                                <div className="absolute top-6 right-6 z-20">
                                                    <div className={getCategoryTagStyles(c.category)}>
                                                        [ {c.category} ]
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className={`p-6 flex flex-col flex-1 relative`} style={isDark ? {} : { backgroundImage: t.dustPattern }}>
                                                {/* File ID/Date */}
                                                <div className={`flex items-center justify-between mb-4 border-b border-dashed pb-2 ${isDark ? 'border-zinc-800' : 'border-[#CFCBBF]'}`}>
                                                    <span className={`text-[10px] font-mono tracking-widest uppercase border px-1 ${t.dateBorder}`}>
                                                        NO. {((currentPage - 1) * ITEMS_PER_PAGE) + 1000 + i}-{c.id.toUpperCase()} // {c.date}
                                                    </span>
                                                    <Eye size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${t.textTitleAccent}`} />
                                                </div>
                                                
                                                <h3 className={`text-xl font-serif mb-3 transition-colors font-bold uppercase tracking-wide ${t.textTitle} ${t.cardTitleHover}`}>
                                                    {localLang === 'CN' ? c.titleCn : c.titleEn}
                                                </h3>
                                                
                                                <p className={`text-xs leading-loose flex-1 line-clamp-3 transition-colors font-mono ${t.textNormal}`}>
                                                    {localLang === 'CN' ? c.summaryCn : c.summaryEn}
                                                </p>

                                                {/* Fingerprint decorative */}
                                                <div className={`absolute right-4 bottom-4 pointer-events-none transform -rotate-12 scale-75 blur-[0.5px] ${isDark ? 'opacity-10 grayscale' : 'opacity-5'}`}>
                                                     📁
                                                </div>
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

                            {/* Pagination Controls */}
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
                    </div>
                </div>
            </div>
        </div>

            {/* Render detail modal when a case is selected */}
            <ArchiveDetailModal 
                isOpen={!!selectedCaseId} 
                onClose={() => setSelectedCaseId(null)}
                caseData={selectedCaseData}
                lang={localLang}
            />
        </>
    );
};
