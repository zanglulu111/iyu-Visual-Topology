import React from 'react';
import { X, Fingerprint, Database, FileText, Activity, ShieldAlert } from 'lucide-react';
import type { CaseStudy } from './archiveCasesData';

interface ArchiveDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseData: CaseStudy | null;
    lang: 'CN' | 'EN';
    isDark: boolean;
}

export const ArchiveDetailModal: React.FC<ArchiveDetailModalProps> = ({ isOpen, onClose, caseData, lang, isDark }) => {
    if (!isOpen || !caseData || !caseData.content) return null;

    const { content } = caseData;

    // Theme Variables mapped from directory modal logic
    const t = {
        bgContainer: isDark ? 'bg-[#0A0A0B]' : 'bg-white',
        borderContainer: isDark ? 'border-zinc-800 border-4' : 'border-[#3A352F] border-4',
        bgHeader: isDark ? 'bg-[#0A0A0B]/90' : 'bg-white/95',
        borderHeader: isDark ? 'border-zinc-900 border-b-2 border-dashed' : 'border-[#8B261D]/10 border-b-2 border-dashed',
        textTitle: isDark ? 'text-zinc-100' : 'text-[#8B261D]',
        textAccent: isDark ? 'text-zinc-400' : 'text-[#8B261D]',
        textTitleAccent: isDark ? 'text-amber-500' : 'text-[#8B261D]',
        textNormal: isDark ? 'text-zinc-400' : 'text-[#2B2824]',
        textMuted: isDark ? 'text-zinc-500' : 'text-[#6A665A]',
        textCode: isDark ? 'text-zinc-300' : 'text-[#3A352F]',
        btnBg: isDark ? 'bg-zinc-900' : 'bg-[#F9F7F1]',
        btnHover: isDark ? 'hover:bg-zinc-800' : 'hover:bg-white',
        btnBorder: isDark ? 'border-zinc-700' : 'border-[#8B261D]/20',
        texturePattern: isDark ? '' : "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
        dustPattern: isDark ? '' : "url('https://www.transparenttextures.com/patterns/dust.png')",
        // Section specific
        sectionBorder: isDark ? 'border-zinc-800' : 'border-[#8B261D]/10',
        dnaBg: isDark ? 'bg-[#111113]' : 'bg-[#F9F7F1]',
        dnaBorder: isDark ? 'border-zinc-800 border-2' : 'border-[#8B261D]/10 border-2',
        dnaTextAccent: isDark ? 'text-amber-400' : 'text-[#8B261D]',
        reportBg: isDark ? 'bg-zinc-900/30' : 'bg-white',
    };

    return (
        <div className={`fixed inset-0 backdrop-blur-md z-[110] flex items-center justify-center p-4 animate-fadeIn ${isDark ? 'bg-black/90' : 'bg-black/80'}`}>
            <div className={`${t.bgContainer} ${t.borderContainer} rounded-sm w-full max-w-5xl h-[95vh] flex flex-col overflow-hidden relative shadow-2xl transition-colors duration-500`} style={isDark ? {} : { backgroundImage: t.texturePattern }}>
                
                {/* Header */}
                <div className={`shrink-0 ${t.borderHeader} px-6 lg:px-8 py-4 flex items-center justify-between ${t.bgHeader} backdrop-blur relative z-20`}>
                    <div className="flex items-center gap-3">
                        <FileText size={18} className={`${t.textAccent} opacity-80`} />
                        <h2 className={`text-xs font-bold uppercase tracking-[0.2em] font-mono ${t.textCode}`}>
                            {lang === 'CN' ? `档案解密 / DECRYPTING FILE: ${caseData.id.toUpperCase()}` : `DECRYPTING FILE: ${caseData.id.toUpperCase()}`}
                        </h2>
                    </div>
                    
                    <button onClick={onClose} className={`p-1.5 transition-colors rounded-sm border shadow-sm ${t.btnBg} ${t.btnHover} ${t.btnBorder} outline-none ${t.textCode}`}>
                        <X size={16} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10" style={isDark ? {} : { backgroundImage: t.dustPattern }}>
                    
                    {/* Hero Header */}
                    <div className={`border-b-4 ${t.sectionBorder} p-8 lg:p-12 pb-8 relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="flex items-center gap-2 mb-6">
                            <ShieldAlert size={14} className={t.textTitleAccent} />
                            <span className={`text-[12px] font-mono tracking-[0.2em] uppercase font-bold ${t.textTitleAccent}`}>
                                [ PART 00 ] _ RECORD INITIALIZED
                            </span>
                        </div>

                        <h1 className={`text-4xl lg:text-5xl font-serif mb-4 tracking-wide font-bold ${t.textTitle}`}>
                            {lang === 'CN' ? caseData.titleCn : caseData.titleEn}
                        </h1>
                        <div className="flex items-center gap-4 mt-8">
                            <span className={`px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border-2 border-dashed ${t.sectionBorder} ${t.textMuted}`}>
                                TARGET: {caseData.category}
                            </span>
                            <span className={`px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border-2 border-dashed ${t.sectionBorder} ${t.textMuted}`}>
                                LOG DATE: {caseData.date}
                            </span>
                        </div>
                    </div>

                    <div className="p-8 lg:p-12 pt-8 flex flex-col gap-16">
                        
                        {/* Part 1: DNA Parameters */}
                        <section>
                            <div className="flex items-center gap-2 mb-6">
                                <Database size={16} className={t.textTitleAccent} />
                                <h2 className={`text-sm font-bold uppercase tracking-[0.2em] font-mono ${t.textTitleAccent}`}>
                                    Part I. 底层引擎参数 (DNA)
                                </h2>
                            </div>
                            
                            <div className={`${t.dnaBg} ${t.dnaBorder} p-6 relative font-mono text-xs rounded-sm shadow-inner`}>
                                {/* Grid lines decoration */}
                                {!isDark && <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#CFCBBF 1px, transparent 1px), linear-gradient(90deg, #CFCBBF 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>}
                                
                                <div className="relative z-10">
                                    <ul className="space-y-3 mb-8">
                                        {content.dna.parameters.map((param, i) => (
                                            <li key={i} className={`flex tracking-wider leading-relaxed ${t.textCode}`}>
                                                <span className={`${t.dnaTextAccent} font-bold mr-3 opacity-80`}>&gt;</span>
                                                {param}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={`mt-8 pt-4 border-t border-dashed ${t.sectionBorder} grid grid-cols-1 md:grid-cols-2 gap-4`}>
                                        <div>
                                            <span className={`block font-bold mb-1 ${t.dnaTextAccent} opacity-80 uppercase tracking-widest text-[9px]`}>Author Style</span>
                                            <span className={`${t.textCode}`}>{content.dna.authorStyle}</span>
                                        </div>
                                        <div>
                                            <span className={`block font-bold mb-1 ${t.dnaTextAccent} opacity-80 uppercase tracking-widest text-[9px]`}>Core Hook</span>
                                            <span className={`${t.textCode} italic`}>{content.dna.coreHook}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Part 2: The Story */}
                        <section>
                            <div className="flex items-center gap-2 mb-6 border-b border-dashed pb-2 border-zinc-500/30">
                                <Activity size={16} className={t.textTitleAccent} />
                                <h2 className={`text-sm font-bold uppercase tracking-[0.2em] font-mono ${t.textTitleAccent}`}>
                                    Part II. 完整故事 (Story Log)
                                </h2>
                            </div>
                            
                            <div className={`prose prose-sm max-w-none font-serif md:text-base lg:text-lg leading-loose space-y-6 ${t.textTitle}`}>
                                {content.story.map((paragraph, i) => (
                                    <p key={i} className="indent-8 text-justify opacity-90">{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* Part 3: Psychoanalysis Report */}
                        <section>
                            <div className="flex items-center gap-2 mb-6">
                                <Fingerprint size={16} className={t.textTitleAccent} />
                                <h2 className={`text-sm font-bold uppercase tracking-[0.2em] font-mono ${t.textTitleAccent}`}>
                                    Part III. 精神分析报告 (Psychoanalysis Report)
                                </h2>
                            </div>

                            <div className={`${t.reportBg} border-2 ${t.sectionBorder} rounded-sm p-8 relative`}>
                                
                                <div className={`border-b-2 ${t.sectionBorder} pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4`}>
                                    <div>
                                        <h3 className={`text-xl font-bold font-serif mb-2 tracking-widest ${t.textTitle}`}>{content.report.diagnosis}</h3>
                                        <div className={`flex flex-col gap-1 text-xs font-mono uppercase tracking-wider ${t.textMuted}`}>
                                            <span>分析师 / Analyst: {content.report.analyst}</span>
                                            <span>对象状态 / Subject State: {content.report.subjectState}</span>
                                        </div>
                                    </div>
                                    
                                    {!isDark && (
                                        <div className="stamp border-4 border-[#8B261D] text-[#8B261D] text-lg font-bold p-2 transform rotate-3 mix-blend-multiply opacity-70 inline-block font-mono tracking-widest">
                                            CLASSIFIED
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-10">
                                    {content.report.sections.map((sec, i) => (
                                        <div key={i}>
                                            <h4 className={`text-lg font-bold font-serif mb-4 ${t.textTitleAccent}`}>{sec.title}</h4>
                                            <div className={`font-serif leading-relaxed text-sm md:text-base whitespace-pre-wrap ${t.textTitle} opacity-90`}>
                                                {sec.body}
                                            </div>
                                        </div>
                                    ))}

                                    <div className={`mt-10 p-6 border-l-4 ${isDark ? 'border-amber-500 bg-amber-500/5' : 'border-[#3A352F] bg-[#3A352F]/5'}`}>
                                        <h4 className={`text-sm font-bold font-mono uppercase tracking-widest mb-3 ${t.textTitle}`}>最终判词 (Final Verdict)</h4>
                                        <p className={`font-serif leading-relaxed text-sm italic mb-4 ${t.textNormal}`}>
                                            {content.report.conclusion}
                                        </p>
                                        <p className={`font-mono leading-relaxed text-xs whitespace-pre-wrap ${t.textTitle}`}>
                                            {content.report.verdict}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className={`text-center py-10 border-t-2 border-dashed ${t.sectionBorder} mt-8`}>
                            <p className={`text-[10px] font-mono uppercase tracking-[0.3em] ${t.textMuted}`}>
                                End of Document . EOF
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
