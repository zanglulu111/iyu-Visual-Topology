import React, { useState, useMemo } from 'react';
import { 
  Globe, 
  Aperture, 
  Sun, 
  Moon, 
  User as UserIcon, 
  BookOpen, 
  Search, 
  ArrowRight, 
  Maximize2, 
  Link as LinkIcon,
  ChevronRight,
  ChevronDown,
  Info,
  Layers,
  Zap,
  Book,
  Cpu,
  History,
  Settings
} from 'lucide-react';
import { User } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { LACAN_DICTIONARY, LacanConcept } from '../data/lacan_dictionary';

interface LacanTopologyViewProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: 0 | 1) => void;
  currentUser: User;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
}

export const LacanTopologyView: React.FC<LacanTopologyViewProps> = ({
  lang,
  setLang,
  setPage,
  currentUser,
  showRings,
  setShowRings,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'TOPOLOGY' | 'DICTIONARY'>('TOPOLOGY');
  const [selectedConceptId, setSelectedConceptId] = useState<string>('real');
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Flatten dictionary for easy lookup and search
  const allConcepts = useMemo(() => {
    return LACAN_DICTIONARY.flatMap(cat => cat.concepts);
  }, []);

  const selectedConcept = useMemo(() => {
    return allConcepts.find(c => c.id === selectedConceptId) || allConcepts[0];
  }, [selectedConceptId, allConcepts]);

  const filteredConcepts = useMemo(() => {
    if (!searchQuery) return LACAN_DICTIONARY;
    return LACAN_DICTIONARY.map(cat => ({
      ...cat,
      concepts: cat.concepts.filter(c => 
        c.name.includes(searchQuery) || 
        c.enName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(cat => cat.concepts.length > 0);
  }, [searchQuery]);

  const getThemeColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    if (selectedConceptId === 'real') return 'text-mist-rose';
    if (selectedConceptId === 'symbolic') return 'text-mist-cyan';
    if (selectedConceptId === 'imaginary') return 'text-mist-purple';
    return 'text-gold-primary';
  };

  const getThemeBg = () => {
    if (theme === 'retro') return 'bg-[#FAF9F6]';
    if (selectedConceptId === 'real') return 'bg-mist-rose/10';
    if (selectedConceptId === 'symbolic') return 'bg-mist-cyan/10';
    if (selectedConceptId === 'imaginary') return 'bg-mist-purple/10';
    return 'bg-gold-primary/10';
  };

  const getThemeBorder = () => {
    if (theme === 'retro') return 'border-[#8B261D]/20';
    if (selectedConceptId === 'real') return 'border-mist-rose/30';
    if (selectedConceptId === 'symbolic') return 'border-mist-cyan/30';
    if (selectedConceptId === 'imaginary') return 'border-mist-purple/30';
    return 'border-gold-primary/30';
  };

  return (
    <div className={`flex flex-col h-screen overflow-hidden font-sans selection:bg-gold-primary/30 ${theme === 'retro' ? 'bg-[#FAF9F6] text-zinc-900' : 'bg-[var(--bg-main)] text-white'}`}>
      
      {/* Unified Header - Standardized with LandingView */}
      <header className={`h-14 backdrop-blur-md border-b flex items-center justify-between px-6 z-50 sticky top-0 shrink-0 transition-all duration-500 ${theme === 'retro' ? 'bg-[#FAF9F6]/80 border-[#8B261D]/15' : 'bg-[var(--bg-header)] border-[var(--border-main)]/15'}`}>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setPage(0)}
            className="flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:bg-white/5 hover:scale-105 active:scale-95"
          >
            <Globe size={14} className={`${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'} group-hover:text-gold-primary shrink-0 transition-all duration-100`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.1em] hidden md:block ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'} group-hover:text-gold-primary`}>
              {lang === 'CN' ? "返回全局" : "GLOBAL"}
            </span>
          </button>
          <div className={`h-4 w-px hidden md:block ${theme === 'retro' ? 'bg-zinc-300' : 'bg-zinc-800'}`}></div>
          <span className={`font-serif font-bold text-xs uppercase tracking-widest flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'}`}>
            <Aperture size={14} className="animate-spin-slow opacity-80" />
            {lang === 'CN' ? '三界拓扑: 视觉辞典' : 'TOPOLOGY: VISUAL CODEX'}
          </span>
        </div>

        {/* Central Navigation Toggle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-6">
          <button
            onClick={() => setActiveTab('TOPOLOGY')}
            className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 ${activeTab === 'TOPOLOGY' ? 'text-gold-primary' : (theme === 'retro' ? 'text-zinc-500 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-white')}`}
          >
            <Layers size={14} />
            {lang === 'CN' ? "拓扑图式" : "TOPOLOGY MAP"}
          </button>
          <div className={`w-6 h-px ${theme === 'retro' ? 'bg-zinc-300' : 'bg-zinc-800'}`}></div>
          <button
            onClick={() => setActiveTab('DICTIONARY')}
            className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 ${activeTab === 'DICTIONARY' ? 'text-gold-primary' : (theme === 'retro' ? 'text-zinc-500 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-white')}`}
          >
            <Book size={14} />
            {lang === 'CN' ? "概念辞典" : "CONCEPT CODEX"}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className={`flex items-center border-r pr-4 mr-2 ${theme === 'retro' ? 'border-zinc-300' : 'border-zinc-800'}`}>
            <button
              onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
              className={`text-[10px] font-bold transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-sm tracking-widest hover:bg-white/5 ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`}
            >
              {lang === 'CN' ? '中' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-8 h-8 rounded-sm transition-all duration-300 hover:bg-white/5 ${theme === 'retro' ? 'text-zinc-600 hover:text-[#8B261D]' : 'text-zinc-400 hover:text-white'}`}
            >
              {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} className="text-[#8B261D]" />}
            </button>
          </div>
          
          <button className="flex items-center gap-2 group">
             <div className={`w-7 h-7 rounded-sm border flex items-center justify-center text-[10px] font-bold shadow-sm transition-all group-hover:scale-110 ${
                theme === 'retro' ? 'bg-white border-zinc-300 text-zinc-900' : 'bg-zinc-900 border-gold-primary/30 text-gold-primary'
             }`}>
                {currentUser.username.charAt(0).toUpperCase()}
             </div>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">
        
        {/* Left Sidebar: Detailed Dictionary Index */}
        <aside className={`w-80 border-r flex flex-col shrink-0 z-20 backdrop-blur-sm shadow-2xl transition-all duration-500 ${theme === 'retro' ? 'bg-[#FAF9F6] border-zinc-200' : 'bg-[var(--bg-panel)] border-[var(--border-main)]/15'}`}>
          <div className="p-4 border-b border-[var(--border-main)]/10">
            <div className="relative group">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${theme === 'retro' ? 'text-zinc-400' : 'text-zinc-500'} group-focus-within:text-gold-primary`} size={14} />
              <input 
                type="text" 
                placeholder={lang === 'CN' ? "搜索拉康概念..." : "Search Concepts..."}
                className={`w-full border rounded-lg py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/20 transition-all ${
                  theme === 'retro' ? 'bg-white border-zinc-200 text-zinc-900' : 'bg-black/40 border-zinc-800 text-white'
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-6 pb-20">
            {filteredConcepts.map((category) => (
              <div key={category.id} className="space-y-1">
                <h3 className={`px-3 py-2 text-[10px] font-bold uppercase tracking-widest flex items-center justify-between ${theme === 'retro' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {lang === 'CN' ? category.name : category.enName}
                  <div className={`w-1 h-1 rounded-full ${theme === 'retro' ? 'bg-zinc-200' : 'bg-zinc-800'}`}></div>
                </h3>
                <div className="space-y-0.5">
                  {category.concepts.map((concept) => (
                    <button
                      key={concept.id}
                      onClick={() => {
                        setSelectedConceptId(concept.id);
                        if (activeTab === 'TOPOLOGY') setActiveTab('DICTIONARY');
                      }}
                      className={`w-full text-left px-3 py-3 rounded-lg flex items-center justify-between group transition-all duration-300 ${
                        selectedConceptId === concept.id 
                        ? (theme === 'retro' ? 'bg-[#8B261D]/5 border-[#8B261D]/10' : 'bg-gold-primary/10 border-gold-primary/20') + ' scale-[1.02] shadow-sm'
                        : 'hover:bg-zinc-400/5'
                      }`}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className={`text-[13px] font-medium transition-colors ${
                          selectedConceptId === concept.id 
                          ? (theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary')
                          : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-300 group-hover:text-white')
                        }`}>
                          {concept.name}
                        </span>
                        <span className="text-[9px] text-zinc-500 font-serif italic tracking-wider opacity-60">
                          {concept.enName}
                        </span>
                      </div>
                      {selectedConceptId === concept.id && <Zap size={10} className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'} animate-pulse`} />}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Right Section: Content Display */}
        <section className={`flex-1 relative flex flex-col overflow-hidden ${theme === 'retro' ? 'bg-white' : 'bg-black/20'}`}>
          
          {/* Main Visual or Detail Panel */}
          <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
            {activeTab === 'TOPOLOGY' ? (
              <div className="h-full flex flex-col items-center justify-center relative py-12">
                <div className="text-center mb-16 max-w-2xl">
                  <h2 className={`text-5xl font-serif font-bold mb-4 tracking-tighter ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                    {lang === 'CN' ? '博罗米拓扑结构' : 'BORROMEAN TOPOLOGY'}
                  </h2>
                  <p className="text-zinc-500 text-sm tracking-[0.3em] uppercase flex items-center justify-center gap-3">
                    <span className="w-12 h-px bg-zinc-800"></span>
                    Structural Rigor of the Subject
                    <span className="w-12 h-px bg-zinc-800"></span>
                  </p>
                </div>

                {/* Borromean Rings Visualization Placeholder */}
                <div className="relative w-[450px] h-[450px] flex items-center justify-center group">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-72 h-72 rounded-full border-[10px] border-mist-rose mix-blend-screen transform -translate-x-16 cursor-pointer hover:scale-105 transition-all duration-500 hover:z-20 shadow-2xl ${selectedConceptId === 'real' ? 'opacity-100 scale-105' : 'opacity-30'}`} onClick={() => setSelectedConceptId('real')}></div>
                      <div className={`w-72 h-72 rounded-full border-[10px] border-mist-cyan mix-blend-screen transform translate-x-16 cursor-pointer hover:scale-105 transition-all duration-500 hover:z-20 shadow-2xl ${selectedConceptId === 'symbolic' ? 'opacity-100 scale-105' : 'opacity-30'}`} onClick={() => setSelectedConceptId('symbolic')}></div>
                      <div className={`w-72 h-72 rounded-full border-[10px] border-mist-purple mix-blend-screen transform -translate-y-16 cursor-pointer hover:scale-105 transition-all duration-500 hover:z-20 shadow-2xl ${selectedConceptId === 'imaginary' ? 'opacity-100 scale-105' : 'opacity-30'}`} onClick={() => setSelectedConceptId('imaginary')}></div>
                   </div>
                   
                   {/* Center Sinthome */}
                   <div className={`z-10 bg-black/80 backdrop-blur-xl px-6 py-3 rounded-full border flex items-center gap-3 shadow-2xl transform transition-transform group-hover:scale-110 ${theme === 'retro' ? 'border-zinc-300' : 'border-white/10'}`}>
                      <Aperture size={16} className="text-gold-primary animate-spin-slow" />
                      <span className="text-gold-primary font-bold text-xs tracking-[0.2em] uppercase">Sinthome / 圣状</span>
                   </div>

                   {/* Background Gloom */}
                   <div className="absolute inset-0 bg-gold-primary/5 rounded-full blur-[100px] -z-10 opacity-30"></div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                  {[
                    { type: 'REAL', color: 'text-mist-rose', border: 'border-mist-rose/20', bg: 'bg-mist-rose/5', desc: 'The traumatic kernel that resists all meaning.' },
                    { type: 'SYMBOLIC', color: 'text-mist-cyan', border: 'border-mist-cyan/20', bg: 'bg-mist-cyan/5', desc: 'The network of signifiers and universal law.' },
                    { type: 'IMAGINARY', color: 'text-mist-purple', border: 'border-mist-purple/20', bg: 'bg-mist-purple/5', desc: 'The realm of images, self-deception, and ego.' }
                  ].map(item => (
                    <button 
                      key={item.type} 
                      onClick={() => setSelectedConceptId(item.type.toLowerCase())}
                      className={`p-6 border rounded-2xl transition-all duration-500 text-left group hover:scale-105 hover:bg-zinc-800/10 ${item.border} ${theme === 'retro' ? 'bg-zinc-50' : 'bg-zinc-900/40'} border-opacity-30`}
                    >
                      <h4 className={`text-[10px] font-bold mb-3 tracking-[0.3em] uppercase flex items-center justify-between ${item.color}`}>
                        {item.type}
                        <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                      </h4>
                      <p className={`text-xs leading-relaxed ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        {item.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto py-12 space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
                {/* Dictionary Entry Header */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-[0.2em] uppercase border ${getThemeBg()} ${getThemeColor()} ${getThemeBorder()}`}>
                      {selectedConcept.category}
                    </span>
                    <div className="h-px flex-1 bg-zinc-800/50"></div>
                    <span className="text-zinc-500 text-[9px] font-mono tracking-widest opacity-40">SYSTEM_UID: {selectedConcept.id.toUpperCase()}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h1 className={`text-6xl font-serif font-bold flex items-baseline gap-6 ${theme === 'retro' ? 'text-zinc-900' : 'text-white'}`}>
                      {selectedConcept.name}
                      <span className="text-2xl font-light text-zinc-500 italic tracking-tight">{selectedConcept.enName}</span>
                    </h1>
                  </div>

                  {/* High-end Quick Understanding Module */}
                  <div className={`p-8 rounded-3xl border relative overflow-hidden group shadow-2xl transition-all duration-500 ${getThemeBorder()} ${getThemeBg()} ${theme === 'retro' ? 'bg-opacity-50' : 'bg-opacity-10 hover:bg-opacity-20'}`}>
                    <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12 ${getThemeColor()}`}>
                      <Aperture size={120} />
                    </div>
                    <div className="flex items-start gap-8 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 bg-black/40 shadow-inner ${getThemeBorder()}`}>
                        <Zap size={28} className={getThemeColor()} />
                      </div>
                      <div>
                        <h4 className={`text-[10px] font-bold mb-3 uppercase tracking-[0.3em] flex items-center gap-2 ${getThemeColor()}`}>
                          Core Definition / 核心定义
                          <span className="w-8 h-px bg-current opacity-30"></span>
                        </h4>
                        <p className={`text-2xl font-medium leading-[1.45] font-serif ${theme === 'retro' ? 'text-zinc-800' : 'text-white'}`}>
                          "{selectedConcept.shortDef}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wikipedia-style Information Architecture */}
                <div className="space-y-10">
                  <div className="flex items-center justify-between border-b border-zinc-800/50 pb-6">
                    <h3 className={`text-2xl font-serif font-bold flex items-center gap-4 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                      <BookOpen size={24} className="text-gold-primary" />
                      学术解析 & 临床实践
                    </h3>
                    <button 
                      onClick={() => setIsDetailExpanded(!isDetailExpanded)}
                      className={`text-[10px] font-bold flex items-center gap-2 uppercase tracking-[0.3em] transition-all px-4 py-2 rounded-full border border-zinc-800/50 hover:bg-gold-primary hover:text-black hover:border-gold-primary ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-400'}`}
                    >
                      {isDetailExpanded ? "Collapse Content" : "Deep Dive Expansion"}
                      {isDetailExpanded ? <ChevronDown size={14} /> : <ArrowRight size={14} className="group-hover:translate-x-1" />}
                    </button>
                  </div>

                  <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 ${isDetailExpanded ? 'opacity-100 max-h-[5000px]' : 'opacity-40 max-h-[400px] overflow-hidden grayscale-[0.8] blur-[2px] pointer-events-none'}`}>
                    <div className="md:col-span-2 space-y-12">
                      {selectedConcept.detailed ? (
                        <>
                          <section className="space-y-6">
                            <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.4em] flex items-center gap-4">
                              <span className="w-3 h-3 rounded-full border-2 border-gold-primary"></span>
                              Theoretic Analysis / 理论分析
                            </h4>
                            <div className={`leading-relaxed text-[16px] space-y-6 whitespace-pre-wrap font-sans font-light ${theme === 'retro' ? 'text-zinc-700' : 'text-zinc-300'}`}>
                               {selectedConcept.detailed.definition.split('\n').map((para, i) => (
                                 <p key={i} className="first-letter:text-3xl first-letter:font-serif first-letter:mr-1 first-letter:float-left first-letter:text-gold-primary">{para}</p>
                               ))}
                            </div>
                          </section>

                          <section className={`space-y-6 p-10 rounded-3xl border ${theme === 'retro' ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/40 border-zinc-800/50 shadow-inner'}`}>
                            <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.4em] flex items-center gap-3">
                              <Info size={16} className="text-mist-cyan" />
                              Clinical Analogy / 案例与类比
                            </h4>
                            <div className={`leading-[1.8] text-[15px] italic font-serif whitespace-pre-wrap opacity-80 ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-300'}`}>
                              {selectedConcept.detailed.analogy}
                            </div>
                          </section>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center p-32 border border-dashed border-zinc-800 rounded-[40px] opacity-30">
                           <BookOpen size={48} className="text-zinc-700 mb-6" />
                           <p className="text-zinc-600 text-sm tracking-widest font-serif">AWAITING ARCHIVAL SYNCHRONIZATION...</p>
                        </div>
                      )}
                    </div>

                    {/* Sidebar Metadata */}
                    <div className="space-y-8">
                      <div className={`p-8 rounded-[32px] border sticky top-24 space-y-8 shadow-2xl ${theme === 'retro' ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/60 border-gold-primary/20 hover:border-gold-primary/40'} transition-all`}>
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-bold text-gold-primary uppercase tracking-[0.3em] flex items-center gap-3">
                            <Cpu size={16} />
                            Visionary App
                          </h4>
                          <p className={`text-[13px] leading-relaxed font-sans italic opacity-80 ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                            {selectedConcept.detailed?.application || "Synchronizing narrative logic for current topological nodes..."}
                          </p>
                        </div>
                        
                        <div className={`pt-6 border-t space-y-6 ${theme === 'retro' ? 'border-zinc-200' : 'border-white/5'}`}>
                           <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] flex items-center justify-between">
                              Related nodes
                              <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-[8px] text-zinc-500">Auto-Link</span>
                           </h5>
                           <div className="flex flex-wrap gap-2.5">
                              {['objet_a', 'big_other', 'lack', 'drive', 'fantasy'].map(id => (
                                <button 
                                  key={id}
                                  onClick={() => {
                                    setSelectedConceptId(id);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono border transition-all duration-300 ${
                                    theme === 'retro' 
                                    ? 'bg-white border-zinc-200 text-zinc-500 hover:border-[#8B261D] hover:text-[#8B261D]' 
                                    : 'bg-black/40 border-zinc-800 text-zinc-500 hover:border-gold-primary/50 hover:text-gold-primary'
                                  }`}
                                >
                                  @{id.toUpperCase()}
                                </button>
                              ))}
                           </div>
                        </div>

                        <button 
                          onClick={() => setPage(0)}
                          className={`w-full flex items-center justify-between py-4 px-6 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
                            theme === 'retro'
                            ? 'bg-[#8B261D] text-white hover:bg-black'
                            : 'bg-gold-primary text-black hover:bg-white hover:text-black'
                          }`}
                        >
                           Linked Philosophy
                           <ArrowRight size={14} />
                        </button>
                      </div>

                      {/* Backlinks Visualization Placeholder */}
                      <div className={`p-6 rounded-3xl border border-dashed flex flex-col items-center gap-4 ${theme === 'retro' ? 'bg-zinc-50/50 border-zinc-300' : 'bg-black/20 border-zinc-800'}`}>
                         <LinkIcon size={16} className="text-zinc-700" />
                         <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Backlinks Archive</span>
                         <div className="w-full space-y-2">
                            {[1, 2].map(i => (
                              <div key={i} className="h-6 bg-zinc-800/20 rounded-md animate-pulse"></div>
                            ))}
                         </div>
                      </div>
                    </div>
                  </div>

                  {!isDetailExpanded && (
                    <div className="text-center pt-24 relative z-10 pb-20">
                      <button 
                        onClick={() => setIsDetailExpanded(true)}
                        className={`px-12 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all shadow-2xl transform hover:scale-110 active:scale-90 ${
                          theme === 'retro'
                          ? 'bg-[#8B261D] text-white hover:bg-black shadow-[#8B261D]/20'
                          : 'bg-gold-primary text-black hover:bg-white shadow-gold-primary/20'
                        }`}
                      >
                         Initialize Full Transcript
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Institutional Bottom Info Bar */}
          <footer className={`h-12 border-t px-8 flex items-center justify-between text-[10px] tracking-[0.3em] font-mono transition-colors duration-500 ${
            theme === 'retro' ? 'bg-[#FAF9F6] border-zinc-200 text-zinc-500' : 'bg-zinc-950 border-zinc-800 text-zinc-600'
          }`}>
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-gold-primary animate-ping"></div>
                   <span>TOPOLOGY_ACTIVE: NODE_{selectedConceptId.toUpperCase()}</span>
                </div>
                <span className="opacity-20">|</span>
                <span>COORD: 35.412 // 09:21</span>
             </div>
             <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 group cursor-help">
                   <History size={12} className="group-hover:text-gold-primary transition-colors" />
                   <span>REVISION_HISTORY</span>
                </div>
                <div className="flex items-center gap-2">
                   <Settings size={12} />
                   <span className="text-gold-primary/60">© 2024 MIST_VISUAL_TOPOLOGY</span>
                </div>
             </div>
          </footer>
        </section>
      </main>

      {/* Atmospheric Background Layers */}
      {showRings && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-gold-primary/5 rounded-full animate-spin-slow`}></div>
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border-2 border-gold-primary/5 rounded-full animate-reverse-spin`} style={{animationDuration: '25s'}}></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,10,10,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>
      )}
    </div>
  );
};
