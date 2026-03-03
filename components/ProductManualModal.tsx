import React, { useState } from 'react';
/* Added ArrowLeft to lucide-react imports */
import { X, BookOpen, ChevronRight, Quote, ArrowRight, ArrowLeft, Lightbulb, GraduationCap, Microscope, Cpu, Layers, Scale, Fingerprint, Zap, Ghost, BrainCircuit, ScanEye, ScanLine } from 'lucide-react';
import { LACAN_DICTIONARY, LacanConcept } from '../data/lacan_dictionary';
import { ZIZEK_DICTIONARY } from '../data/philosophy_zizek';
import { MARX_DICTIONARY } from '../data/philosophy_marx';
import { HEGEL_DICTIONARY } from '../data/philosophy_hegel';
import { OTHER_DICTIONARY } from '../data/philosophy_other';
import { ANALYSIS_LIBRARY } from '../data/analysis_data';
import { WHITEPAPER_DATA, WhitepaperSection } from '../data/whitepaper_data';
import { DriverType } from '../types';

interface ProductManualModalProps {
  isOpen: boolean;
  onClose: () => void;
  driverType: DriverType | null;
}

const HighlightText = ({ text, themeClass }: { text: string, themeClass: string }) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <span key={i} className={`${themeClass} font-bold bg-white/5 px-1 rounded`}>
              {part.slice(2, -2)}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

export const ProductManualModal: React.FC<ProductManualModalProps> = ({ isOpen, onClose, driverType }) => {
  const [activeSection, setActiveSection] = useState('GUIDE_WHITEPAPER'); 
  const [selectedConcept, setSelectedConcept] = useState<LacanConcept | null>(null);
  const [selectedWhitepaper, setSelectedWhitepaper] = useState<WhitepaperSection | null>(null);

  const theme = {
      text: driverType === DriverType.COMMERCIAL ? 'text-cyan-400' : 
            driverType === DriverType.EXPERIMENTAL ? 'text-purple-400' :
            driverType === DriverType.AESTHETIC ? 'text-rose-400' :
            driverType === DriverType.TRAILER ? 'text-orange-400' : 'text-gold-primary',
      border: driverType === DriverType.COMMERCIAL ? 'border-cyan-500' : 
              driverType === DriverType.EXPERIMENTAL ? 'border-purple-500' :
              driverType === DriverType.AESTHETIC ? 'border-rose-500' :
              driverType === DriverType.TRAILER ? 'border-orange-500' : 'border-gold-primary',
      bg: driverType === DriverType.COMMERCIAL ? 'bg-cyan-500' : 
          driverType === DriverType.EXPERIMENTAL ? 'bg-purple-500' :
          driverType === DriverType.AESTHETIC ? 'bg-rose-500' :
          driverType === DriverType.TRAILER ? 'bg-orange-500' : 'bg-gold-primary',
      hoverBorder: driverType === DriverType.COMMERCIAL ? 'hover:border-cyan-500/50' : 
                   driverType === DriverType.EXPERIMENTAL ? 'hover:border-purple-500/50' :
                   driverType === DriverType.AESTHETIC ? 'hover:border-rose-500/50' :
                   driverType === DriverType.TRAILER ? 'hover:border-orange-500/50' : 'hover:border-gold-primary/50',
      groupHoverText: driverType === DriverType.COMMERCIAL ? 'group-hover:text-cyan-400' : 
                      driverType === DriverType.EXPERIMENTAL ? 'group-hover:text-purple-400' :
                      driverType === DriverType.AESTHETIC ? 'group-hover:text-rose-400' :
                      driverType === DriverType.TRAILER ? 'group-hover:text-orange-400' : 'group-hover:text-gold-primary',
  };

  const getCount = (dict: any[]) => {
      return dict.reduce((acc, cat) => acc + (cat.concepts?.length || 0), 0);
  };

  const counts = {
      lacan: getCount(LACAN_DICTIONARY),
      zizek: getCount(ZIZEK_DICTIONARY),
      marx: getCount(MARX_DICTIONARY),
      hegel: getCount(HEGEL_DICTIONARY),
      other: getCount(OTHER_DICTIONARY),
      analysis: getCount(ANALYSIS_LIBRARY),
  };

  if (!isOpen) return null;

  const handleSectionChange = (section: string) => {
      setActiveSection(section);
      setSelectedConcept(null); 
      setSelectedWhitepaper(null);
  };

  const renderDictionarySection = (dict: any[]) => {
     return (
          <div className="space-y-12 animate-in fade-in duration-500 pb-20 w-full">
              {dict.map(category => (
                  <div key={category.id} className="space-y-6">
                      <div className="border-b border-zinc-800 pb-4 flex flex-col md:flex-row md:items-end gap-2 md:gap-4">
                          <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                              <span className={theme.text}>#</span> {category.name}
                          </h3>
                          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">{category.enName}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                          {category.concepts.map((concept: LacanConcept) => (
                              <button 
                                  key={concept.id} 
                                  onClick={() => setSelectedConcept(concept)}
                                  className={`flex flex-col text-left h-full bg-zinc-900/20 border border-zinc-800 rounded-xl p-6 ${theme.hoverBorder} hover:bg-zinc-900/50 transition-all group relative overflow-hidden shadow-lg`}
                              >
                                  <div className="mb-auto">
                                      <h4 className={`text-lg font-bold text-zinc-200 ${theme.groupHoverText} transition-colors leading-tight mb-2`}>
                                          {concept.name}
                                      </h4>
                                      <span className="text-[10px] font-mono text-zinc-600 block mb-4 truncate">{concept.enName}</span>
                                      <p className="text-xs text-zinc-500 font-medium leading-relaxed line-clamp-4">
                                          {concept.shortDef}
                                      </p>
                                  </div>
                                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Open Codex</span>
                                      <ChevronRight size={14} className={theme.text} />
                                  </div>
                              </button>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      );
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl animate-in fade-in duration-300 p-0 md:p-4">
      <div className="w-full h-full max-w-[1600px] bg-[#0c0c0c] border border-zinc-800 md:rounded-2xl shadow-2xl flex overflow-hidden relative">
        
        {/* SIDEBAR */}
        <div className="w-80 border-r border-zinc-800 flex flex-col bg-[#080808] shrink-0 hidden md:flex">
            <div className="h-24 flex flex-col justify-center px-8 border-b border-zinc-800 shrink-0">
                <h2 className="text-2xl font-serif text-white tracking-wider mb-1">迷雾辞典</h2>
                <p className={`text-[10px] font-bold ${theme.text} uppercase tracking-[0.2em] whitespace-nowrap`}>Conceptual Database</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                <div className="space-y-1">
                    <div className="px-4 py-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Protocol</div>
                    <button 
                        onClick={() => handleSectionChange('GUIDE_WHITEPAPER')}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-3 ${activeSection === 'GUIDE_WHITEPAPER' ? `bg-zinc-900 text-white border-l-2 ${theme.border}` : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'}`}
                    >
                       <BookOpen size={16} /> MIST核心哲学
                    </button>
                </div>

                <div className="space-y-1">
                    <div className="px-4 py-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Dictionary</div>
                    {[
                        { id: 'THEORY_LACAN', label: '1. 拉康辞典', icon: <Fingerprint size={16} />, count: counts.lacan },
                        { id: 'THEORY_ZIZEK', label: '2. 齐泽克辞典', icon: <Zap size={16} />, count: counts.zizek },
                        { id: 'THEORY_MARX', label: '3. 马克思辞典', icon: <Scale size={16} />, count: counts.marx },
                        { id: 'THEORY_HEGEL', label: '4. 黑格尔辞典', icon: <Layers size={16} />, count: counts.hegel },
                        { id: 'THEORY_OTHER', label: '5. 其他哲学', icon: <Microscope size={16} />, count: counts.other },
                        { id: 'THEORY_ANALYSIS', label: '6. 理论分析', icon: <Quote size={16} />, count: counts.analysis },
                    ].map(item => (
                        <button 
                            key={item.id}
                            onClick={() => handleSectionChange(item.id)} 
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-between group ${activeSection === item.id ? `bg-zinc-900 text-white border-l-2 ${theme.border}` : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'}`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`text-zinc-500 ${theme.groupHoverText} transition-colors`}>{item.icon}</span>
                                {item.label}
                            </div>
                            <span className="text-[10px] font-mono text-zinc-700 bg-black/20 px-1.5 py-0.5 rounded">{item.count}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col bg-[#0c0c0c] relative min-w-0">
            <div className="h-24 border-b border-zinc-800 flex items-center justify-between px-8 shrink-0 bg-[#0c0c0c]">
                 {selectedConcept ? (
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={() => setSelectedConcept(null)}
                            className="p-2 -ml-2 text-zinc-500 hover:text-white transition-colors hover:bg-zinc-800 rounded-full"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <div>
                            <h2 className="text-3xl font-serif text-white mb-1">{selectedConcept.name}</h2>
                            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                <span>{selectedConcept.enName}</span>
                                <span className="text-zinc-700">•</span>
                                <span>{selectedConcept.category}</span>
                            </div>
                        </div>
                    </div>
                 ) : selectedWhitepaper ? (
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={() => setSelectedWhitepaper(null)}
                            className="p-2 -ml-2 text-zinc-500 hover:text-white transition-colors hover:bg-zinc-800 rounded-full"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <div>
                            <h2 className="text-3xl font-serif text-white mb-1">{selectedWhitepaper.title}</h2>
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                {selectedWhitepaper.enTitle}
                            </div>
                        </div>
                    </div>
                 ) : (
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-1">
                            {activeSection === 'GUIDE_WHITEPAPER' ? 'MIST核心哲学' : '哲学概念库'}
                        </h2>
                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                            {activeSection === 'GUIDE_WHITEPAPER' ? 'THE VISIONARY PROTOCOL' : 'PHILOSOPHICAL DATABASE'}
                        </div>
                    </div>
                 )}
                <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-full text-zinc-500 hover:text-white transition-colors">
                    <X size={24} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {selectedConcept ? (
                    <div className="p-8 md:p-16 w-full space-y-12 animate-in fade-in duration-200 pb-40">
                        <div className="relative">
                            <div className={`absolute -left-6 top-0 bottom-0 w-1 ${theme.bg}/30`}></div>
                            <p className="text-2xl md:text-4xl text-zinc-100 font-serif leading-relaxed italic">
                                <HighlightText text={selectedConcept.shortDef} themeClass={theme.text} />
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-12">
                            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-10 space-y-4 shadow-xl">
                                <div className={`flex items-center gap-3 ${theme.text} border-b border-zinc-800 pb-6 mb-6`}>
                                    <GraduationCap size={24} />
                                    <h4 className="text-base font-black uppercase tracking-widest">哲学原理深度解析 (Philosophical Depth)</h4>
                                </div>
                                <div className="text-zinc-300 leading-loose text-lg md:text-xl whitespace-pre-wrap font-light">
                                    <HighlightText text={selectedConcept.detailed?.definition || "暂无深度解析内容。"} themeClass={theme.text} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                                <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-10 space-y-4 shadow-xl">
                                    <div className="flex items-center gap-3 text-blue-400 border-b border-zinc-800 pb-6 mb-6">
                                        <Lightbulb size={24} />
                                        <h4 className="text-base font-black uppercase tracking-widest">具象比喻 (Conceptual Anchor)</h4>
                                    </div>
                                    <div className="text-zinc-400 leading-relaxed text-base md:text-lg italic whitespace-pre-wrap">
                                        <HighlightText text={selectedConcept.detailed?.analogy || "暂无比喻内容。"} themeClass="text-blue-400" />
                                    </div>
                                </div>
                                <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-10 space-y-4 shadow-xl">
                                    <div className="flex items-center gap-3 text-purple-400 border-b border-zinc-800 pb-6 mb-6">
                                        <Cpu size={24} />
                                        <h4 className="text-base font-black uppercase tracking-widest">引擎应用 (Engine Mechanics)</h4>
                                    </div>
                                    <div className="text-zinc-400 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
                                        <HighlightText text={selectedConcept.detailed?.application || "暂无应用指导内容。"} themeClass="text-purple-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : selectedWhitepaper ? (
                    <div className="p-8 md:p-16 w-full space-y-12 animate-in fade-in duration-200 pb-40">
                         <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-12 space-y-8 shadow-2xl">
                            <div className={`flex items-center gap-6 ${theme.text} border-b border-zinc-800 pb-8 mb-4`}>
                                <selectedWhitepaper.icon size={48} className={selectedWhitepaper.color} />
                                <div>
                                    <h3 className="text-4xl font-serif text-white uppercase tracking-wider mb-2">{selectedWhitepaper.title}</h3>
                                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{selectedWhitepaper.enTitle}</p>
                                </div>
                            </div>
                            <div className="text-zinc-300 leading-loose text-xl whitespace-pre-wrap font-light">
                                <HighlightText text={selectedWhitepaper.content} themeClass={theme.text} />
                            </div>
                        </div>
                    </div>
                ) : (
                   <div className="p-8 md:p-12 w-full">
                       {activeSection === 'GUIDE_WHITEPAPER' && (
                            <div className="w-full max-w-4xl mx-auto py-8 animate-in fade-in duration-500 pb-40 space-y-12">
                                <div className={`bg-black border border-zinc-800 p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-center border-l-8 ${theme.border} shadow-2xl`}>
                                    <div className={`p-6 bg-zinc-900 rounded-full ${theme.text} border ${theme.border}/20 shrink-0`}>
                                        <BookOpen size={40} />
                                    </div>
                                    <div>
                                        <h2 className="text-4xl font-serif text-white mb-2 tracking-tight">MIST核心哲学</h2>
                                        <p className="text-zinc-400 text-lg leading-relaxed font-light uppercase tracking-widest">The Visionary Protocol v3.0</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {WHITEPAPER_DATA.map(section => (
                                        <button 
                                            key={section.id}
                                            onClick={() => setSelectedWhitepaper(section)}
                                            className={`flex flex-col md:flex-row items-center gap-8 text-left bg-zinc-900/20 border border-zinc-800 rounded-2xl p-8 ${theme.hoverBorder} hover:bg-zinc-900/50 transition-all group relative overflow-hidden shadow-lg w-full`}
                                        >
                                            <div className={`p-4 bg-black/40 rounded-2xl border border-white/5 shrink-0 ${section.color} group-hover:scale-110 transition-transform`}>
                                                <section.icon size={32} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-2xl font-serif text-white mb-1 ${theme.groupHoverText} transition-colors`}>{section.title}</h3>
                                                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">{section.enTitle}</p>
                                                <p className="text-sm text-zinc-400 leading-loose">
                                                    {section.content.split('\n')[0]}
                                                </p>
                                            </div>
                                            <div className="shrink-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowRight size={24} className={theme.text} />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                       )}

                       {activeSection === 'THEORY_LACAN' && renderDictionarySection(LACAN_DICTIONARY)}
                       {activeSection === 'THEORY_ZIZEK' && renderDictionarySection(ZIZEK_DICTIONARY)}
                       {activeSection === 'THEORY_MARX' && renderDictionarySection(MARX_DICTIONARY)}
                       {activeSection === 'THEORY_HEGEL' && renderDictionarySection(HEGEL_DICTIONARY)}
                       {activeSection === 'THEORY_OTHER' && renderDictionarySection(OTHER_DICTIONARY)}
                       {activeSection === 'THEORY_ANALYSIS' && renderDictionarySection(ANALYSIS_LIBRARY)}
                   </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};