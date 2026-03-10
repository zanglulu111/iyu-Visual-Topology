import React, { useState, useMemo } from 'react';
import { 
  Globe, 
  HelpCircle, 
  History as HistoryIcon, 
  Settings, 
  User as UserIcon, 
  Aperture, 
  Sun, 
  Moon,
  Search,
  ChevronRight,
  FileText,
  Users,
  MessageSquare,
  ArrowLeft,
  Shield,
  Database,
  Lock,
  Eye,
  Activity,
  Zap,
  Fingerprint,
  Microscope,
  Brain,
  Layers,
  Sparkles,
  Command,
  Hash
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { DriverType, User } from '../types';
import { LACAN_DICTIONARY, LacanConcept } from '../data/lacan_dictionary';
import { ZIZEK_DICTIONARY } from '../data/philosophy_zizek';
import { MARX_DICTIONARY } from '../data/philosophy_marx';
import { HEGEL_DICTIONARY } from '../data/philosophy_hegel';
import { OTHER_DICTIONARY } from '../data/philosophy_other';
import { ANALYSIS_LIBRARY } from '../data/analysis_data';
import { ARCHIVE_CASES, CaseStudy } from './archiveCasesData';
import { BorromeanRings } from './BorromeanRings';

interface PhilosophyCodexPageProps {
  onClose: () => void;
  driverType: DriverType | null;
  lang: 'CN' | 'EN';
  currentUser: User;
  setLang: (lang: 'CN' | 'EN') => void;
  openHistory: () => void;
  openSettings: () => void;
  openAuth: () => void;
  openProfile: () => void;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
}

type CodexSection = 'CONCEPTS' | 'PERSONNEL' | 'RESEARCH' | 'COLLECTIVE';

export const PhilosophyCodexPage: React.FC<PhilosophyCodexPageProps> = ({ 
  onClose, 
  driverType, 
  lang,
  currentUser,
  setLang,
  openHistory,
  openSettings,
  openAuth,
  openProfile,
  showRings,
  setShowRings
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<CodexSection>('CONCEPTS');
  const [activeDictionary, setActiveDictionary] = useState<string>('LACAN');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // --- Helper Functions (Identical to AppHeader) ---

  const getHeaderTitleColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    if (driverType === DriverType.COMMERCIAL) return 'text-mist-cyan';
    if (driverType === DriverType.EXPERIMENTAL) return 'text-mist-purple';
    if (driverType === DriverType.AESTHETIC) return 'text-mist-rose';
    if (driverType === DriverType.TRAILER) return 'text-mist-orange';
    return 'text-gold-primary';
  };

  const getThemeTextColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    if (driverType === DriverType.COMMERCIAL) return 'text-mist-cyan';
    if (driverType === DriverType.EXPERIMENTAL) return 'text-mist-purple';
    if (driverType === DriverType.AESTHETIC) return 'text-mist-rose';
    if (driverType === DriverType.TRAILER) return 'text-mist-orange';
    return 'text-gold-primary';
  };

  const getThemeBorderColor = () => {
    if (theme === 'retro') return 'border-[var(--border-main)]';
    if (driverType === DriverType.COMMERCIAL) return 'border-cyan-400/15';
    if (driverType === DriverType.EXPERIMENTAL) return 'border-purple-400/15';
    if (driverType === DriverType.AESTHETIC) return 'border-rose-400/15';
    if (driverType === DriverType.TRAILER) return 'border-orange-400/15';
    return 'border-gold-primary/15';
  };

  // --- Theme Utility for UI Elements ---
  const themeColors = {
    accent: getThemeTextColor(),
    border: getThemeBorderColor(),
    bg: (theme === 'retro') ? 'bg-[#8B261D]' : (
          driverType === DriverType.COMMERCIAL ? 'bg-mist-cyan' :
          driverType === DriverType.EXPERIMENTAL ? 'bg-mist-purple' :
          driverType === DriverType.AESTHETIC ? 'bg-mist-rose' :
          driverType === DriverType.TRAILER ? 'bg-mist-orange' : 'bg-gold-primary'
        ),
  };

  const dictionaries = {
    LACAN: { name: '拉康 (Lacan)', data: LACAN_DICTIONARY, icon: <Fingerprint size={16} /> },
    ZIZEK: { name: '齐泽克 (Zizek)', data: ZIZEK_DICTIONARY, icon: <Zap size={16} /> },
    MARX: { name: '马克思 (Marx)', data: MARX_DICTIONARY, icon: <Activity size={16} /> },
    HEGEL: { name: '黑格尔 (Hegel)', data: HEGEL_DICTIONARY, icon: <Layers size={16} /> },
    OTHER: { name: '其他 (Other)', data: OTHER_DICTIONARY, icon: <Microscope size={16} /> },
    ANALYSIS: { name: '分析 (Analysis)', data: ANALYSIS_LIBRARY, icon: <Brain size={16} /> },
  };

  const personnelData = [
    { id: 'lac', name: '雅克·拉康', title: 'Jacques Lacan', role: '迷雾学派奠基人 / 精神分析学家', status: 'DECEASED / ARCHIVED', fileId: 'SUB-1901', summary: '拓扑学与精神分析的缝合者。提出了“想象界、象征界、实在界”的三位一体结构。', color: 'text-mist-cyan' },
    { id: 'ziz', name: '斯拉沃热·齐泽克', title: 'Slavoj Žižek', role: '潜意识观测员 / 哲学家', status: 'ACTIVE', fileId: 'SUB-1949', summary: '意识形态缝隙的捕捉者。擅长通过通俗文化揭示欲望的悖论。', color: 'text-mist-purple' },
    { id: 'del', name: '吉尔·德勒兹', title: 'Gilles Deleuze', role: '生成之主体 / 块茎研究者', status: 'DECEASED', fileId: 'SUB-1925', summary: '拒绝中心化的树状逻辑，提倡平滑空间与生成-动物。', color: 'text-mist-rose' },
    { id: 'fouc', name: '米歇尔·福柯', title: 'Michel Foucault', role: '话语档案员 / 考古学家', status: 'DECEASED', fileId: 'SUB-1926', summary: '权力的解剖者。揭示了知识、权力与主体性之间的复杂结缔。', color: 'text-mist-orange' },
  ];

  const filteredConcepts = useMemo(() => {
    const dict = dictionaries[activeDictionary as keyof typeof dictionaries]?.data || [];
    if (!searchQuery) return dict;
    return dict.map(cat => ({
      ...cat,
      concepts: cat.concepts.filter((c: any) => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.enName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.shortDef && c.shortDef.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    })).filter(cat => cat.concepts.length > 0);
  }, [activeDictionary, searchQuery]);

  // --- Rendering Functions ---

  const renderConcepts = () => (
    <div className="flex-1 flex flex-col overflow-hidden bg-black/40 backdrop-blur-sm rounded-2xl border border-zinc-800/50 shadow-2xl">
      <div className="h-14 flex items-center gap-2 px-4 border-b border-zinc-800 overflow-x-auto no-scrollbar shrink-0">
        {Object.entries(dictionaries).map(([id, info]) => (
          <button
            key={id}
            onClick={() => setActiveDictionary(id)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
              activeDictionary === id 
                ? `${themeColors.bg} text-white shadow-[0_0_15px_rgba(0,0,0,0.2)]` 
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
            }`}
          >
            {info.icon}
            {info.name}
          </button>
        ))}
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {filteredConcepts.map((category: any) => (
          <div key={category.id} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-8 h-px ${themeColors.bg}`}></div>
              <h3 className="text-xl font-serif text-white">{category.name}</h3>
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">{category.enName}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.concepts.map((concept: LacanConcept) => (
                <button
                  key={concept.id}
                  onClick={() => setSelectedItem({ type: 'CONCEPT', data: concept })}
                  className="group relative bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl text-left hover:border-zinc-600 transition-all hover:translate-y-[-2px] shadow-lg overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <h4 className="text-lg font-serif text-zinc-100 group-hover:text-white mb-1">{concept.name}</h4>
                  <p className="text-[10px] font-mono text-zinc-600 mb-4 uppercase tracking-wider">{concept.enName}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3 font-light">{concept.shortDef}</p>
                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Access Link</span>
                    <ChevronRight size={14} className={themeColors.accent} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPersonnel = () => (
    <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6 overflow-y-auto p-6 custom-scrollbar">
      {personnelData.map(person => (
        <div 
          key={person.id}
          onClick={() => setSelectedItem({ type: 'PERSONNEL', data: person })}
          className="group relative bg-[#080808] border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all cursor-pointer shadow-2xl flex flex-col md:flex-row h-full md:h-72"
        >
          <div className="w-full md:w-48 bg-zinc-900 shrink-0 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <Users size={64} className="text-zinc-800 group-hover:text-zinc-700 transition-colors" />
             <div className={`absolute bottom-0 left-0 right-0 h-1 ${person.color.replace('text', 'bg')}`}></div>
          </div>
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-zinc-600 tracking-[0.3em] font-bold">{person.fileId}</span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded border border-zinc-800/50 bg-black/50 ${person.status === 'ACTIVE' ? 'text-green-500 border-green-500/20' : 'text-zinc-500'}`}>{person.status}</span>
              </div>
              <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-gold-primary transition-colors">{person.name}</h3>
              <p className="text-xs font-serif text-zinc-400 italic mb-4">{person.title}</p>
              <div className={`text-[10px] font-bold uppercase tracking-widest ${person.color} mb-4`}>{person.role}</div>
              <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">{person.summary}</p>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50 mt-4 overflow-hidden">
               {['Structure', 'Real', 'Mirror', 'Logic'].map(tag => (
                 <span key={tag} className="text-[9px] font-mono text-zinc-700 uppercase">{tag}</span>
               ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderResearch = () => (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto p-6 custom-scrollbar">
       {ARCHIVE_CASES.map((caseStudy: CaseStudy) => (
         <div 
          key={caseStudy.id} 
          onClick={() => setSelectedItem({ type: 'RESEARCH', data: caseStudy })}
          className="group bg-[#080808] border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all cursor-pointer shadow-xl relative"
         >
           <div className="h-48 bg-zinc-900 relative">
             <img src={caseStudy.imageUrl} alt={caseStudy.titleCn} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity grayscale hover:grayscale-0 duration-700" />
             <div className="absolute top-4 left-4">
                <span className={`text-[9px] font-bold px-2 py-1 rounded bg-black/80 border border-zinc-700 text-zinc-300 uppercase tracking-widest`}>{caseStudy.category}</span>
             </div>
           </div>
           <div className="p-6">
             <div className="text-[10px] font-mono text-zinc-600 mb-2">{caseStudy.date}</div>
             <h3 className="text-xl font-serif text-zinc-100 mb-3 group-hover:text-white transition-colors">{caseStudy.titleCn}</h3>
             <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3 italic mb-6">"{caseStudy.summaryCn}"</p>
             <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-700 group-hover:text-zinc-500 transition-colors">
               <span>Read File</span>
               <ArrowLeft size={14} className="rotate-180" />
             </div>
           </div>
         </div>
       ))}
    </div>
  );

  const renderCollective = () => (
    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
       <div className="w-24 h-24 rounded-full border border-dashed border-zinc-800 flex items-center justify-center mb-6 animate-pulse">
          <MessageSquare size={32} className="text-zinc-700" />
       </div>
       <h3 className="text-2xl font-serif text-zinc-200 mb-4 tracking-wider">Collective Subconscious Simulation</h3>
       <p className="text-sm text-zinc-500 max-w-md leading-relaxed font-light mb-8 italic">
         "The collective subconscious is currently in a state of high entropy. Meaning strings are being decrypted and re-synthesized."
       </p>
       <div className="flex flex-col gap-3 w-full max-w-md">
          {[
            { user: 'ARCHIVIST-01', text: 'Does the Real exist outside of the gaze?', time: '2m ago' },
            { user: 'VOID-WALKER', text: 'Repression is the only form of truth left.', time: '15m ago' },
            { user: 'ECHO-9', text: 'The labyrinth is simply a mirror in three dimensions.', time: '1h ago' }
          ].map((msg, i) => (
            <div key={i} className="text-left bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl">
               <div className="flex items-center justify-between mb-1">
                 <span className="text-[9px] font-mono text-gold-primary/70">{msg.user}</span>
                 <span className="text-[9px] font-mono text-zinc-700">{msg.time}</span>
               </div>
               <p className="text-xs text-zinc-400">{msg.text}</p>
            </div>
          ))}
       </div>
       <button className="mt-8 px-8 py-2 rounded-full border border-zinc-800 hover:border-zinc-600 text-[10px] font-bold uppercase tracking-widest text-zinc-500 transition-all hover:text-white">
          Join Resonance
       </button>
    </div>
  );

  const renderDetailView = () => {
    if (!selectedItem) return null;
    
    return (
      <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col animate-in fade-in zoom-in-95 duration-300">
        <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-8">
          <button 
            onClick={() => setSelectedItem(null)}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Return to Index</span>
          </button>
          
          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-600">
             <span className="flex items-center gap-1"><Shield size={12} /> ENCRYPTED CONNECTION</span>
             <span className="flex items-center gap-1"><Database size={12} /> HOST: MIST_ARCHIVE_v3</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {selectedItem.type === 'CONCEPT' && (
            <div className="max-w-5xl mx-auto py-16 px-8">
               <div className="mb-12">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block ${themeColors.accent}`}>{selectedItem.data.category}</span>
                  <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-tight">{selectedItem.data.name}</h1>
                  <p className="text-xl font-mono text-zinc-500 uppercase tracking-widest">{selectedItem.data.enName}</p>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-8 space-y-12">
                     <div className="relative">
                        <div className={`absolute -left-6 top-0 bottom-0 w-1 ${themeColors.bg}/20`}></div>
                        <p className="text-2xl md:text-3xl text-zinc-200 font-serif leading-relaxed italic font-light">
                           {selectedItem.data.detailed?.definition || selectedItem.data.shortDef}
                        </p>
                     </div>
                     
                     <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 border-b border-zinc-800 pb-2 flex items-center gap-2">
                           <Layers size={16} /> Conceptual Archetype
                        </h3>
                        <div className="text-lg text-zinc-400 leading-loose font-light whitespace-pre-wrap">
                           {selectedItem.data.detailed?.analogy}
                        </div>
                     </div>
                  </div>
                  
                  <div className="lg:col-span-4 space-y-6">
                     <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
                           <Activity size={14} /> Subject Parameters
                        </h4>
                        <div className="space-y-4">
                           {['Eros', 'Totem', 'Mask', 'Void'].map(param => (
                             <div key={param} className="flex items-center justify-between">
                                <span className="text-[10px] font-mono text-zinc-600">{param}</span>
                                <div className="w-24 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                   <div className={`h-full ${themeColors.bg}`} style={{width: `${Math.random() * 60 + 20}%`}}></div>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                     
                     <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                           <Zap size={14} /> Engine Application
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed italic">
                           "Deploy this concept within the Lacanian Suture Engine to destabilize the Mirror Stage of the target narrative."
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col bg-[var(--bg-main)] overflow-hidden transition-colors duration-500`}>
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[var(--ring-opacity)]">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
         <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[var(--accent-color)]/5 blur-[120px] rounded-full"></div>
         <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Background Rings Integration */}
      {showRings && (
        <div className="absolute inset-0 flex items-center justify-end pr-[5%] opacity-[var(--ring-opacity)] pointer-events-none z-0 select-none overflow-hidden scale-[1.1] transition-opacity duration-1000">
           <div className="w-[1000px] h-[1000px] flex items-center justify-center translate-x-1/4">
              <BorromeanRings centered={true} opacity={1} driverType={driverType || undefined} />
           </div>
        </div>
      )}

      {/* HEADER - Replicating AppHeader Style EXACTLY */}
      <header className={`h-14 bg-[var(--bg-header)] backdrop-blur-md border-b ${getThemeBorderColor()} flex items-center justify-between px-6 z-50 sticky top-0 shrink-0 transition-colors duration-500`}>
        {/* Left Section */}
        <div className="flex items-center gap-5">
          <button
            onClick={onClose}
            className={`flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:bg-white/5 hover:scale-105 active:scale-95`}
          >
            <Globe size={14} className={`shrink-0 transition-all duration-100 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}>
              {lang === 'CN' ? "返回全局" : "GLOBAL"}
            </span>
          </button>
          <span className={`${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest`}>
            {lang === 'CN' ? '迷雾学派: ' : 'MIST: '}哲学辞典
          </span>
        </div>

        {/* Center Section - Integrated Search (Styled like Engine Nav) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center">
          <div className="relative group">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500 group-focus-within:text-[var(--text-accent)]'}`} size={14} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={lang === 'CN' ? "搜索哲学档案..." : "Search codex..."} 
              className={`w-64 bg-[var(--bg-panel)]/50 border ${getThemeBorderColor()} rounded-full py-1.5 pl-9 pr-4 text-[10px] focus:outline-none focus:border-[var(--text-accent)] transition-all text-[var(--text-main)] placeholder-zinc-600 font-sans shadow-inner tracking-widest`} 
            />
          </div>
        </div>

        {/* Right Section - Identical to AppHeader using flex-row-reverse */}
        <div className="flex items-center flex-row-reverse gap-4">
          {/* 1. Profile */}
          <button
            onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
            className="flex items-center gap-2 group transition-all duration-100 hover:scale-105"
          >
            {currentUser.id !== 'guest_user' ? (
              <div className="flex items-center flex-row-reverse gap-2">
                <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-gold-primary')} border border-[var(--border-main)]/30 flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden group-hover:scale-110 transition-transform`}>
                  {currentUser.avatarUrl ? (
                    <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    currentUser.username.substring(0, 1).toUpperCase()
                  )}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}>
                  {currentUser.username}
                </span>
              </div>
            ) : (
              <div className="flex items-center flex-row-reverse gap-2">
                <div className="w-5 h-5 rounded-full border border-[var(--border-main)]/30 flex items-center justify-center bg-[var(--bg-panel)]/40 text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-all duration-300 group-hover:scale-110">
                   <UserIcon size={14} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}>
                  {lang === 'CN' ? '未登录' : 'GUEST'}
                </span>
              </div>
            )}
          </button>

          <div className="flex items-center flex-row-reverse gap-1">
            {/* 2. Language Toggle */}
            <button
              onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
              className={`text-[10px] font-bold ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'} transition-all duration-300 w-7 h-7 flex items-center justify-center rounded-sm tracking-widest hover:bg-white/5 hover:scale-110 active:scale-90`}
              title="Toggle Language"
            >
              {lang === 'CN' ? '中' : 'EN'}
            </button>

            {/* 3. Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-7 h-7 rounded-sm ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'} transition-all duration-300 hover:bg-white/5 hover:scale-110 active:scale-90`}
              title={theme === 'dark' ? "切换为复古主题" : "切换为暗黑主题"}
            >
              {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} className="text-[#8B261D]" />}
            </button>

            {/* 4. Ring Toggle */}
            <button
              onClick={() => setShowRings(!showRings)}
              className={`flex items-center justify-center w-7 h-7 rounded-sm transition-all duration-300 hover:bg-white/5 hover:scale-110 active:scale-90 focus:outline-none ${
                showRings 
                  ? (theme === 'retro' ? 'text-[#8B261D]' : getThemeTextColor()) 
                  : (theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white')
              }`}
              title={lang === 'CN' ? "背景圆环开关" : "Background Rings Toggle"}
            >
              <Aperture size={14} className={`shrink-0 transition-all duration-300 ${showRings ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 mr-4">
            {[
              { icon: HelpCircle, label: lang === 'CN' ? '哲学辞典' : 'CODEX', onClick: () => {}, isActive: true },
              { icon: HistoryIcon, label: lang === 'CN' ? '欲望档案' : 'ARCHIVE', onClick: () => { onClose(); openHistory(); }, isActive: false },
              { icon: Settings, label: lang === 'CN' ? '系统配置' : 'SYSTEM CONFIG', onClick: () => { onClose(); openSettings(); }, isActive: false }
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={item.onClick}
                className={`flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:bg-white/5 hover:scale-105 active:scale-95 ${item.isActive ? getThemeTextColor() : (theme === 'retro' ? "text-zinc-600 hover:text-black" : "text-zinc-400 hover:text-white")}`}
              >
                <item.icon size={14} className={`shrink-0 transition-all duration-100 ${item.isActive ? 'text-current' : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`} />
                <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${item.isActive ? 'text-current' : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* SUBNAV */}
      <nav className={`h-16 border-b ${getThemeBorderColor()} flex items-center px-8 gap-10 shrink-0 overflow-x-auto no-scrollbar relative z-20 transition-colors duration-500`}>
         {[
           { id: 'CONCEPTS', label: lang === 'CN' ? '拓扑辞典' : 'LEXICON', en: 'LEXICON', icon: <Hash size={16} /> },
           { id: 'PERSONNEL', label: lang === 'CN' ? '人物档案' : 'SUBJECTS', en: 'SUBJECTS', icon: <Users size={16} /> },
           { id: 'RESEARCH', label: lang === 'CN' ? '研究报告' : 'RESEARCH', en: 'RESEARCH', icon: <FileText size={16} /> },
           { id: 'COLLECTIVE', label: lang === 'CN' ? '共鸣场' : 'RESONANCE', en: 'RESONANCE', icon: <Sparkles size={16} /> },
         ].map(tab => (
           <button
             key={tab.id}
             onClick={() => { setActiveSection(tab.id as CodexSection); setSelectedItem(null); }}
             className={`flex items-center gap-3 transition-all relative py-2 ${
               activeSection === tab.id ? (theme === 'retro' ? 'text-black' : 'text-white') : 'text-zinc-500 hover:text-zinc-300'
             }`}
           >
             <span className={activeSection === tab.id ? themeColors.accent : ""}>{tab.icon}</span>
             <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold tracking-wider">{tab.label}</span>
                <span className="text-[8px] font-mono opacity-40">{tab.en}</span>
             </div>
             {activeSection === tab.id && (
               <div className={`absolute bottom-[-16.5px] left-0 right-0 h-0.5 ${themeColors.bg}`}></div>
             )}
           </button>
         ))}
      </nav>

      {/* CONTENT AREA */}
      <main className="flex-1 overflow-hidden flex flex-col relative z-10 p-6 md:p-8">
         {activeSection === 'CONCEPTS' && renderConcepts()}
         {activeSection === 'PERSONNEL' && renderPersonnel()}
         {activeSection === 'RESEARCH' && renderResearch()}
         {activeSection === 'COLLECTIVE' && renderCollective()}
      </main>

      {/* DETAIL MODAL OVERLAY */}
      {renderDetailView()}

      {/* SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      
      {/* FOOTER BAR */}
      <footer className={`h-10 border-t ${getThemeBorderColor()} bg-[var(--bg-panel)]/40 flex items-center justify-between px-8 shrink-0 text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em] relative z-20`}>
         <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Eye size={10} /> 4,102 ACTIVE OBSERVERS</span>
            <span className="flex items-center gap-1.5"><Command size={10} /> SYSTEM: MIST_v4</span>
         </div>
         <div className="flex items-center gap-6 text-right">
            <span>© 2026 MIST SCHOOL ARCHIVE</span>
            <span className={`${getThemeTextColor()} opacity-50`}>{lang === 'CN' ? '"在幻象中寻找真实"' : '"Finding the truth within the illusion"'}</span>
         </div>
      </footer>
    </div>
  );
};
