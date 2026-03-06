import React, { useState, useEffect } from 'react';
import { X, Folder, Eye, ShieldAlert, Moon, Sun, Languages, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARCHIVE_CASES, ArchiveCategory, CaseStudy } from './archiveCasesData';
import { ArchiveDetailModal } from './ArchiveDetailModal';

interface ArchiveDirectoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
}

const ITEMS_PER_PAGE = 15;

export const ArchiveDirectoryModal: React.FC<ArchiveDirectoryModalProps> = ({ isOpen, onClose, lang }) => {
    const [selectedCategory, setSelectedCategory] = useState<ArchiveCategory>('ALL');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
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
        bgContainer: isDark ? 'bg-[#0A0A0B]' : 'bg-[#EBE7DF]',
        borderContainer: isDark ? 'border-zinc-800 border-4' : 'border-[#3A352F] border-4',
        bgHeader: isDark ? 'bg-[#0A0A0B]/90' : 'bg-[#EBE7DF]/90',
        borderHeader: isDark ? 'border-zinc-900 border-b-2 border-dashed' : 'border-[#CFCBBF] border-b-2 border-dashed',
        textTitle: isDark ? 'text-zinc-100' : 'text-[#2B2824]',
        textAccent: isDark ? 'text-zinc-400' : 'text-[#8B261D]',
        textTitleAccent: isDark ? 'text-amber-500' : 'text-[#8B261D]',
        textNormal: isDark ? 'text-zinc-400' : 'text-[#514F48]',
        textMuted: isDark ? 'text-zinc-500' : 'text-[#6A665A]',
        textCode: isDark ? 'text-zinc-300' : 'text-[#3A352F]',
        btnBg: isDark ? 'bg-zinc-900' : 'bg-[#DCD8CF]',
        btnHover: isDark ? 'hover:bg-zinc-800' : 'hover:bg-[#CFCBBF]',
        btnBorder: isDark ? 'border-zinc-700' : 'border-[#CFCBBF]',
        btnTextHover: isDark ? 'hover:text-amber-500 text-zinc-400' : 'hover:text-[#8B261D] text-[#3A352F]',
        btnDisabled: isDark ? 'opacity-30 cursor-not-allowed' : 'opacity-30 cursor-not-allowed grayscale',
        cardBg: isDark ? 'bg-[#111113]' : 'bg-[#F9F7F1]',
        cardBorder: isDark ? 'border-zinc-800 border-2' : 'border-[#CFCBBF] border-2',
        cardHoverBorder: isDark ? 'hover:border-zinc-500' : 'hover:border-[#8B261D]',
        cardShadow: isDark ? 'hover:shadow-black hover:shadow-xl shadow-sm' : 'hover:shadow-xl shadow-sm',
        cardImageBg: isDark ? 'bg-zinc-900' : 'bg-[#DCD8CF]',
        imageEffects: isDark ? 'grayscale-[0.5] group-hover:grayscale-0' : 'grayscale group-hover:grayscale-[0.5] contrast-125 sepia-[0.3] shadow-inner',
        cardTitleHover: isDark ? 'group-hover:text-amber-400' : 'group-hover:text-[#8B261D]',
        texturePattern: isDark ? '' : "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
        dustPattern: isDark ? '' : "url('https://www.transparenttextures.com/patterns/dust.png')",
        paperClipColor: isDark ? 'bg-white/10 border-white/5' : 'bg-white/40 border-black/5',
        tagBorder: isDark ? 'border-zinc-800 bg-zinc-900' : 'border-[#3A352F] bg-white',
        dateBorder: isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-500' : 'border-[#6A665A] bg-[#EBE7DF] text-[#6A665A]',
        emptyIconOpacity: isDark ? 'opacity-20' : 'opacity-50',
        emptyMessageBorder: isDark ? 'border-zinc-700 text-zinc-500' : 'border-[#8B261D] text-[#8B261D]',
        paginationBg: isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-300' : 'bg-white border-[#3A352F] text-[#3A352F]'
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
            <div className={`fixed inset-0 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fadeIn ${isDark ? 'bg-black/90' : 'bg-black/80'}`}>
                {/* Main Container */}
                <div className={`${t.bgContainer} ${t.borderContainer} rounded-lg w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden relative shadow-2xl transition-colors duration-500`} style={isDark ? {} : { backgroundImage: t.texturePattern }}>
                    
                    {/* Header */}
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
                                    onClick={() => setTheme(isDark ? 'light' : 'dark')} 
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

                    <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10" style={isDark ? {} : { backgroundImage: t.dustPattern }}>
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

            {/* Render detail modal when a case is selected */}
            <ArchiveDetailModal 
                isOpen={!!selectedCaseId} 
                onClose={() => setSelectedCaseId(null)}
                caseData={selectedCaseData}
                lang={localLang}
                isDark={isDark}
            />
        </>
    );
};
