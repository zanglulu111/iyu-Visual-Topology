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
  Hash,
  Clock,
  X,
  Shuffle,
  ChevronLeft
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { DriverType, User } from '../types';
import { PhilosophyTimeline } from './PhilosophyTimeline';
import { HEGEL_INDEX, MARX_INDEX, LACAN_INDEX, ZIZEK_INDEX, LacanConcept, LacanCategory } from '../data/codex/philosophy_refined';

import { ANALYSIS_LIBRARY } from '../data/codex/analysis_data';
import { ARCHIVE_CASES, CaseStudy } from './archiveCasesData';
import { BorromeanRings } from './BorromeanRings';
import { usePhilosophyIndex, usePhilosophySummaries, usePhilosophyDetail, usePreloadPopularConcepts } from '../hooks/usePhilosophy';

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
  setViewMode?: (mode: any) => void;
  renderInPlace?: boolean;
  onToggleExpand?: () => void;
  isExpanded?: boolean;
  initialDictionary?: string;
  initialSection?: CodexSection;
  onDictionaryChange?: (dict: string) => void;
  onSectionChange?: (section: CodexSection) => void;
}

const AnimatedText = ({ cn, en, lang, className = "", hClass = "h-5" }: { cn: React.ReactNode, en: React.ReactNode, lang: 'CN' | 'EN', className?: string, hClass?: string }) => (
  <div className={`overflow-hidden relative ${hClass} ${className}`}>
    <div className={`transition-all duration-[1500ms] w-full ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
      <div className={`${hClass} flex items-center shrink-0 w-full leading-none`}>
        {cn}
      </div>
      <div className={`${hClass} flex items-center shrink-0 w-full leading-none`}>
        {en}
      </div>
    </div>
  </div>
);

type CodexSection = 'CONCEPTS' | 'PERSONNEL' | 'RESEARCH' | 'COLLECTIVE' | 'TIMELINE';

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
  setViewMode,
  renderInPlace = false,
  onToggleExpand,
  isExpanded = false,
  initialDictionary,
  initialSection,
  onDictionaryChange,
  onSectionChange
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<CodexSection>(initialSection || 'CONCEPTS');
  const [activeDictionary, setActiveDictionary] = useState<string>(initialDictionary || 'HEGEL');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [detailActiveTab, setDetailActiveTab] = useState<'DEFINITION' | 'ANALOGY' | 'APPLICATION'>('DEFINITION');
  const [atmosphericsEnabled, setAtmosphericsEnabled] = useState(true); // 新：氛围系统开关
  const [showRings, setShowRings] = useState(true); // 新：背景圆环开关

  React.useEffect(() => {
    if (selectedItem) {
      setDetailActiveTab('DEFINITION');
    }
  }, [selectedItem]);

  React.useEffect(() => {
    if (onDictionaryChange) onDictionaryChange(activeDictionary);
  }, [activeDictionary, onDictionaryChange]);

  React.useEffect(() => {
    if (onSectionChange) onSectionChange(activeSection);
  }, [activeSection, onSectionChange]);

  // 使用新的数据加载系统
  // 异步数据加载系统 (用于加载大体积详细内容)
  // 动态选择当前哲学家，并将 ID 转换为路径格式 (小写)
  const currentPhilosopherPath = activeDictionary.toLowerCase();
  const isMainPhilosopher = ['HEGEL', 'MARX', 'LACAN', 'ZIZEK'].includes(activeDictionary);

  const { data: selectedDetail, isLoading: isLoadingDetail } = usePhilosophyDetail(
    currentPhilosopherPath,
    selectedItem?.data?.id || '',
    isMainPhilosopher && !!selectedItem?.data?.id
  );

  // 预加载热门词条
  usePreloadPopularConcepts(currentPhilosopherPath, isMainPhilosopher && activeSection === 'CONCEPTS');

  // --- Helper Functions (Identical to AppHeader) ---

  const getHeaderTitleColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    return 'text-white';
  };

  const getThemeTextColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    return 'text-white';
  };

  const getThemeBorderColor = () => {
    if (theme === 'retro') return 'border-[var(--border-main)]';
    return 'border-[var(--border-main)]';
  };

  // --- Theme Utility for UI Elements ---
  const themeColors = {
    accent: getThemeTextColor(),
    border: getThemeBorderColor(),
    bg: (theme === 'retro') ? 'bg-[#8B261D]' : 'bg-white',
  };



  const dictionaries = {
    HEGEL: { name: '黑格尔 (Hegel)', data: HEGEL_INDEX, icon: <Layers size={16} /> },
    MARX: { name: '马克思 (Marx)', data: MARX_INDEX, icon: <Activity size={16} /> },
    LACAN: { name: '拉康 (Lacan)', data: LACAN_INDEX, icon: <Fingerprint size={16} /> },
    ZIZEK: { name: '齐泽克 (Zizek)', data: ZIZEK_INDEX, icon: <Zap size={16} /> },
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

  const allConcepts = useMemo(() => {
    return filteredConcepts.flatMap((cat: any) => cat.concepts);
  }, [filteredConcepts]);

  const currentIndex = allConcepts.findIndex((c: any) => c.id === (selectedItem?.data?.id || selectedItem?.data?.fileId));

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (allConcepts.length <= 1) return;
    const prevIndex = (currentIndex - 1 + allConcepts.length) % allConcepts.length;
    setSelectedItem({ ...selectedItem, data: allConcepts[prevIndex] });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (allConcepts.length <= 1) return;
    const nextIndex = (currentIndex + 1) % allConcepts.length;
    setSelectedItem({ ...selectedItem, data: allConcepts[nextIndex] });
  };

  const handleRandom = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (allConcepts.length <= 1) return;
    let randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * allConcepts.length);
    }
    setSelectedItem({ ...selectedItem, data: allConcepts[randomIndex] });
  };


  // --- Rendering Functions ---

  const renderConcepts = () => (
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-700 relative ${
      renderInPlace 
        ? 'bg-transparent' 
        : (theme === 'retro' ? 'bg-transparent' : 'bg-transparent rounded-xl shadow-none')
    } theme-${activeDictionary.toLowerCase()}`}>
      
      {/* 氛围背景光 (Atmospheric Glow) */}
      {theme === 'dark' && atmosphericsEnabled && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden animate-mist-glow">
           <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[120px]" style={{ background: 'var(--philosopher-glow)' }}></div>
           <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-10 blur-[100px]" style={{ background: 'var(--philosopher-glow)' }}></div>
        </div>
      )}
      <div className={`h-14 flex items-center gap-2 px-6 border-b ${theme === 'retro' ? 'border-[var(--border-main)] bg-transparent' : 'border-white/10'} overflow-x-auto no-scrollbar shrink-0 transition-all duration-500`}>
        {Object.entries(dictionaries).map(([id, info]) => (
          <button
            key={id}
            onClick={() => setActiveDictionary(id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-sm text-[10px] font-extrabold uppercase tracking-widest transition-all whitespace-nowrap border ${
              activeDictionary === id 
                ? (theme === 'retro' ? 'bg-[#8B261D] text-white shadow-sm border-transparent' : 'bg-[var(--philosopher-accent)]/10 text-[var(--philosopher-accent)] border-[var(--philosopher-accent)] shadow-[0_0_15px_var(--philosopher-accent)]/30')
                : (theme === 'retro' ? 'text-[#8B261D] hover:bg-[#8B261D]/5 border-[#8B261D]/10' : 'text-zinc-500 hover:text-white/80 border-transparent')
            }`}
          >
            <span className={activeDictionary === id ? "animate-pulse" : ""}>{info.icon}</span>
            {info.name}
          </button>
        ))}
      </div>
      
      <div className={`flex-1 overflow-y-auto ${renderInPlace ? 'p-8 pt-10' : 'p-6'} custom-scrollbar`}>
        {filteredConcepts.map((category: any, index: number) => {
          const prevCategory = index > 0 ? filteredConcepts[index - 1] : null;
          const isSameHeader = prevCategory && (lang === 'CN' ? prevCategory.name === category.name : prevCategory.enName === category.enName);
          
          return (
            <div key={category.id} className={isSameHeader ? "mb-10 mt-[-20px]" : "mb-14"}>
              {!isSameHeader && (
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-10 h-px transition-all duration-700 ${theme === 'retro' ? 'bg-[var(--border-main)]' : 'bg-[var(--philosopher-accent)]/30 shadow-[0_0_8px_var(--philosopher-accent)]'}`}></div>
                  <h3 className={`text-2xl font-serif tracking-widest leading-none ${theme === 'retro' ? 'text-[var(--text-accent)] font-black' : 'text-gradient-silver font-bold'}`}>
                    {lang === 'CN' ? category.name : category.enName}
                  </h3>
                </div>
              )}
              
              {category.desc && (
                <div className="flex items-baseline gap-3 mb-6 ml-2">
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${theme === 'retro' ? 'bg-[var(--text-accent)]' : 'bg-[var(--philosopher-accent)]/60 shadow-[0_0_8px_var(--philosopher-accent)]'}`}></div>
                  <h4 className={`text-base font-serif tracking-wide opacity-90 ${theme === 'retro' ? 'text-black font-bold' : 'text-zinc-300'}`}>
                    {category.desc}
                  </h4>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.concepts.map((concept: LacanConcept) => (
                  <button
                    key={concept.id}
                    onClick={() => {
                      if (concept.id === 'rsi-topology-card' && setViewMode) {
                        setViewMode('RSI');
                      } else if (concept.id === 'desire-graph-card' && setViewMode) {
                        setViewMode('TOPOLOGY');
                      } else {
                        setSelectedItem({ type: 'CONCEPT', data: concept });
                      }
                    }}
                    className={`group relative p-6 cursor-pointer transition-all duration-[1300ms] ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden border rounded-none ${
                      theme === 'retro'
                        ? 'bg-transparent border-transparent hover:border-[#8B261D] hover:bg-white hover:shadow-[0_25px_60px_rgba(139,38,29,0.1)] backdrop-blur-[48px] hover:backdrop-blur-none hover:-translate-y-2'
                        : 'premium-card backdrop-blur-[48px] hover:backdrop-blur-none hover:-translate-y-2'
                    }`}
                  >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-current to-transparent opacity-0 group-hover:opacity-[0.05] transition-opacity ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--philosopher-accent)]'}`}></div>
                  
                  {/* Topological Accent Element */}
                  {theme === 'dark' && (
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 bg-[var(--philosopher-accent)]"></div>
                  )}

                  <h4 className={`text-lg font-serif mb-1.5 tracking-wide ${theme === 'retro' ? 'text-black font-extrabold group-hover:text-[var(--text-accent)]' : 'text-gradient-silver font-bold'}`}>{concept.name}</h4>
                  <p className={`text-[9px] font-mono mb-4 uppercase tracking-[0.25em] font-black ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500 group-hover:text-[var(--philosopher-accent)]/80'}`}>{concept.enName}</p>
                  <p className={`text-[12px] leading-relaxed line-clamp-3 font-light tracking-wide ${theme === 'retro' ? 'text-black/80 font-medium' : 'text-zinc-400 group-hover:text-zinc-200'}`}>{concept.shortDef}</p>
                  <div className="mt-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className={`text-[8px] font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-black/40' : 'text-zinc-500'}`}>Access Link</span>
                    <ChevronRight size={12} className={themeColors.accent} />
                  </div>
                </button>
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );

  const renderPersonnel = () => (
    <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6 overflow-y-auto p-6 custom-scrollbar">
      {personnelData.map(person => (
        <div 
          key={person.id}
          onClick={() => setSelectedItem({ type: 'PERSONNEL', data: person })}
          className={`group relative transition-all duration-700 cursor-pointer flex flex-col md:flex-row h-full md:h-72 border ${
            theme === 'retro' 
              ? 'bg-white/[0.01] border-transparent backdrop-blur-2xl hover:border-[var(--border-accent)] hover:bg-white hover:backdrop-blur-none shadow-none hover:shadow-[0_45px_100px_rgba(139,38,29,0.1)] hover:-translate-y-1.5 rounded-2xl'
              : 'premium-card hover:bg-[#1c1f26] border-white/5'
          }`}
        >
          {/* Dossier ID Marker */}
          {theme === 'dark' && <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--philosopher-accent)] to-transparent opacity-40"></div>}
          
          <div className="w-full md:w-52 bg-zinc-950 shrink-0 relative overflow-hidden flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             {/* Scanlines effect */}
             {theme === 'dark' && <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--philosopher-accent)]/5 to-transparent h-4 w-full animate-scanline pointer-events-none opacity-50"></div>}
             <Users size={72} className="text-zinc-800 group-hover:text-zinc-600 transition-colors" />
             <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${person.color.replace('text', 'bg')}`}></div>
          </div>
          <div className="flex-1 p-8 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-mono tracking-[0.35em] font-bold ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-600'}`}>ID_REF: {person.fileId}</span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${person.status === 'ACTIVE' ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-zinc-500 border-zinc-800 bg-zinc-900/50'}`}>{person.status}</span>
              </div>
              <AnimatedText
                lang={lang}
                hClass="h-9"
                className={`text-2xl font-serif mb-2 transition-colors ${theme === 'retro' ? 'text-black font-extrabold' : 'text-gradient-silver font-bold'}`}
                cn={person.name}
                en={person.title}
              />
              <div className={`text-[10px] font-bold uppercase tracking-[0.2em] ${person.color} mb-5 flex items-center gap-2`}>
                <div className={`w-2 h-2 rounded-full ${person.color.replace('text', 'bg')} animate-pulse`}></div>
                {person.role}
              </div>
              <div className={`text-sm leading-[1.7] line-clamp-3 font-light tracking-wide ${theme === 'retro' ? 'text-black/80 font-medium' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                {person.summary}
              </div>
            </div>
            <div className="flex items-center gap-4 pt-5 border-t border-white/5 mt-5">
               {['BIOMETRY', 'EGO_SCAN', 'MIRROR_STG', 'SYN_LOGIC'].map(tag => (
                 <span key={tag} className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">{tag}</span>
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
          className={`group transition-all duration-700 cursor-pointer relative rounded-2xl overflow-hidden border ${
            theme === 'retro' 
              ? 'bg-white/[0.01] border-transparent backdrop-blur-2xl hover:border-[var(--border-accent)] hover:bg-white hover:backdrop-blur-none shadow-none hover:shadow-[0_45px_100px_rgba(139,38,29,0.1)] hover:-translate-y-1.5'
              : 'bg-white/[0.01] border-transparent backdrop-blur-2xl hover:bg-black hover:border-white/20 hover:backdrop-blur-none shadow-none hover:shadow-[0_45px_100px_rgba(0,0,0,0.6)] hover:-translate-y-1.5'
          }`}
         >
           <div className={`h-48 relative overflow-hidden ${theme === 'retro' ? 'bg-black/5' : 'bg-zinc-900'}`}>
              <img src={caseStudy.imageUrl} alt={caseStudy.titleCn} className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity grayscale hover:grayscale-0 duration-700" />
              <div className="absolute top-4 left-4">
                 <span className={`text-[9px] font-bold px-2 py-1 rounded bg-black/80 border border-zinc-700 text-zinc-300 uppercase tracking-widest`}>{caseStudy.category}</span>
              </div>
           </div>
           <div className="p-6">
             <div className="text-[10px] font-mono text-zinc-600 mb-2">{caseStudy.date}</div>
             <AnimatedText
                lang={lang}
                hClass="h-14"
                className={`text-xl font-serif mb-3 group-hover:text-gold-primary transition-colors ${theme === 'retro' ? 'text-black font-extrabold' : 'text-zinc-100'}`}
                cn={caseStudy.titleCn}
                en={caseStudy.titleEn}
              />
              <AnimatedText
                lang={lang}
                hClass="h-16"
                className={`text-xs leading-relaxed line-clamp-3 italic mb-6 ${theme === 'retro' ? 'text-black/60' : 'text-zinc-500'}`}
                cn={`"${caseStudy.summaryCn}"`}
                en={`"${caseStudy.summaryEn}"`}
              />
             <div className={`flex items-center justify-between text-[10px] font-bold uppercase tracking-widest transition-colors ${theme === 'retro' ? 'text-black/40 group-hover:text-black' : 'text-zinc-700 group-hover:text-zinc-500'}`}>
               <span>{lang === 'CN' ? '检阅档案' : 'READ FILE'}</span>
               <ArrowLeft size={14} className="rotate-180 transition-transform group-hover:translate-x-1" />
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

  // --- Simple Markdown Processor ---
  const renderMarkdown = (text: string = "") => {
    if (!text) return null;
    
    // Theme references for nested processing
    const isRetro = theme === 'retro';
    const textColor = isRetro ? 'text-black' : 'text-white';
    const headerColor = isRetro ? 'text-[#8B261D]' : 'text-white';
    
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    
    let listItems: React.ReactNode[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let codeBlock: string[] = [];
    let isCodeBlock = false;
    let codeLang = '';

    const flushList = () => {
      if (listItems.length > 0) {
        if (listType === 'ol') {
          elements.push(<ol key={`ol-${elements.length}`} className="list-decimal pl-6 my-6 space-y-3">{[...listItems]}</ol>);
        } else {
          elements.push(<ul key={`ul-${elements.length}`} className="list-disc pl-6 my-6 space-y-3">{[...listItems]}</ul>);
        }
        listItems = [];
        listType = null;
      }
    };

    const flushCode = () => {
      if (codeBlock.length > 0) {
        elements.push(
          <div key={`code-${elements.length}`} className={`my-6 rounded-xl overflow-hidden border ${isRetro ? 'border-black/10 bg-black/5' : 'border-white/10 bg-black/50'}`}>
            <div className={`px-4 py-2 border-b text-[9px] font-mono tracking-widest uppercase flex justify-between items-center ${isRetro ? 'border-black/5 bg-black/5 text-[#8B261D]/60' : 'border-white/5 bg-white/5 text-zinc-500'}`}>
              <span>{codeLang || 'code'}</span>
              <span className="opacity-50">SCANNED_SOURCE</span>
            </div>
            <pre className="p-6 overflow-x-auto custom-scrollbar">
              <code className={`text-xs font-mono leading-relaxed block ${isRetro ? 'text-black/80' : 'text-amber-200/90'}`}>
                {codeBlock.join('\n')}
              </code>
            </pre>
          </div>
        );
        codeBlock = [];
        isCodeBlock = false;
        codeLang = '';
      }
    };

    // 递归解析多级行内语法
    const processInline = (str: string): React.ReactNode[] => {
      if (!str) return [];
      
      // 正则匹配顺序：$$块 > $行内 > **粗体 > *斜体 > `代码
      const regex = /(\$\$.*?\$\$)|(\$(?:\\\$|[^\$])*?\$)|(\*\*.*?\*\*)|(\*[^\*].*?\*)|(`.*?`)/;
      const match = str.match(regex);
      
      if (!match) return [str];
      
      const tag = match[0];
      const start = match.index!;
      const before = str.slice(0, start);
      const after = str.slice(start + tag.length);

      const renderToken = () => {
        // 1. Block Math: $$...$$
        if (tag.startsWith('$$')) {
          const math = tag.slice(2, -2);
          if (typeof (window as any).katex !== 'undefined') {
            try {
              const html = (window as any).katex.renderToString(math, { throwOnError: false, displayMode: true });
              return <div className="my-6 overflow-x-auto custom-scrollbar" dangerouslySetInnerHTML={{ __html: html }} />;
            } catch (e) { return <code>{tag}</code>; }
          }
          return <code>{tag}</code>;
        }
        
        // 2. Inline Math: $...$
        if (tag.startsWith('$')) {
          const math = tag.slice(1, -1);
          if (typeof (window as any).katex !== 'undefined') {
            try {
              const html = (window as any).katex.renderToString(math, { throwOnError: false, displayMode: false });
              return <span className="mx-0.5 inline-block align-baseline" dangerouslySetInnerHTML={{ __html: html }} />;
            } catch (e) { return <code>{tag}</code>; }
          }
          return <code>{tag}</code>;
        }

        // 3. Bold: **...**
        if (tag.startsWith('**')) {
          return <strong className={`font-bold ${textColor}`}>{processInline(tag.slice(2, -2))}</strong>;
        }

        // 4. Italic: *...*
        if (tag.startsWith('*')) {
          return <em className="italic opacity-90">{processInline(tag.slice(1, -1))}</em>;
        }

        // 5. Code: `...`
        if (tag.startsWith('`')) {
          return <code className={`px-1.5 py-0.5 rounded font-mono text-xs ${isRetro ? 'bg-black/5 text-[#8B261D]' : 'bg-white/10 text-amber-500'}`}>{tag.slice(1, -1)}</code>;
        }

        return tag;
      };

      return [...processInline(before), <React.Fragment key={start}>{renderToken()}</React.Fragment>, ...processInline(after)];
    };

    lines.forEach((line, index) => {
      // Handle Code Block start/end
      if (line.trim().startsWith('```')) {
        if (isCodeBlock) { flushCode(); } 
        else { flushList(); isCodeBlock = true; codeLang = line.trim().slice(3); }
        return;
      }
      if (isCodeBlock) { codeBlock.push(line); return; }

      // Content Headers
      if (line.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={index} className={`text-xl font-serif mt-10 mb-6 font-bold tracking-wider ${headerColor}`}>{processInline(line.slice(4))}</h3>);
      }
      else if (line.startsWith('#### ')) {
        flushList();
        elements.push(<h4 key={index} className={`text-lg font-serif mt-8 mb-4 font-bold tracking-wider ${isRetro ? 'text-[#8B261D]/80' : 'text-white/80'}`}>{processInline(line.slice(5))}</h4>);
      }
      // List parsing
      else if (/^\d+\.\s/.test(line)) {
        if (listType !== 'ol') flushList();
        listType = 'ol';
        listItems.push(<li key={index} className="leading-relaxed">{processInline(line.replace(/^\d+\.\s/, ''))}</li>);
      }
      else if (/^[\*\-]\s/.test(line)) {
        if (listType !== 'ul') flushList();
        listType = 'ul';
        listItems.push(<li key={index} className="leading-relaxed">{processInline(line.slice(2))}</li>);
      }
      else if (line.trim() === '') {
        flushList();
        elements.push(<div key={index} className="h-4"></div>);
      }
      else if (line.trim() === '---') {
        flushList();
        elements.push(<hr key={index} className={`my-12 border-none h-px ${isRetro ? 'bg-black/10' : 'bg-white/10'}`} />);
      }
      // Standard Paragraph
      else {
        if (listType) { listType = null; flushList(); }
        elements.push(<p key={index} className="leading-[1.8] mb-6 tracking-wide font-light">{processInline(line)}</p>);
      }
    });

    flushList();
    if (isCodeBlock) flushCode();
    return elements;
  };

  const renderDetailView = () => {
    if (!selectedItem) return null;

    // Hybrid Data Logic: Prioritize static content in the TS file, fallback to fetched JSON
    const conceptData = selectedItem.data;
    const isConcept = selectedItem.type === 'CONCEPT';
    const isPersonnel = selectedItem.type === 'PERSONNEL';
    const isResearch = selectedItem.type === 'RESEARCH';

    // Get the detailed content (Definition, Analogy, Application)
    // Preference: Static detailed > Fetched detailed > Static shortDef
    const detailed = conceptData.detailed || (selectedDetail as any) || {};
    
    const displayData = {
      ...conceptData,
      detailed: {
        definition: detailed.definition || conceptData.shortDef || "DATA_PENDING",
        analogy: detailed.analogy || "",
        application: detailed.application || ""
      }
    };
    
    // Alias for the rendering section below
    const data = displayData;

    // Theme values for the detail view
    const dt = {
      overlayBg: theme === 'retro' ? 'bg-[#EFE9E0]' : 'bg-[var(--bg-header)]',
      headerBg: 'bg-[var(--bg-header)] backdrop-blur-md',
      textColor: theme === 'retro' ? 'text-black/80' : 'text-zinc-400',
      titleColor: theme === 'retro' ? 'text-[#8B261D]' : 'text-white',
      accentColor: theme === 'retro' ? 'text-[#8B261D]' : themeColors.accent,
      cardBg: theme === 'retro' ? 'bg-white/40 border-black/10' : 'bg-white/[0.03] border-white/10',
    };

    return (
      <div className={`fixed inset-0 z-[100] ${theme === 'retro' ? 'bg-[#EFE9E0]' : 'bg-[var(--bg-main)]'} flex flex-col animate-in fade-in duration-700 overflow-hidden theme-${activeDictionary.toLowerCase()}`}>
        
        {/* Detail Ambient Background (Solid + Atmospheric Pulse) */}
        {!renderInPlace && (
          <div className="absolute inset-0 pointer-events-none z-0">
             {/* Note: NO RINGS in detail view as requested for solid focus */}
             
             {theme === 'dark' && atmosphericsEnabled && (
                <div className="absolute inset-0 opacity-[0.03] animate-mist-glow" style={{ background: 'var(--philosopher-glow)' }}></div>
             )}
          </div>
        )}

        {/* Uniform Header Section */}
        <header className={`h-14 ${dt.headerBg} border-b ${getThemeBorderColor()} flex items-center justify-between px-6 z-50 sticky top-0 shrink-0 relative animate-page-dissolve`}>
          {/* Accent line */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-px z-10" 
            style={{ 
               backgroundColor: theme === 'retro' ? '#8B261D' : 'var(--philosopher-accent)', 
               opacity: theme === 'retro' ? 0.2 : 0.15, 
               boxShadow: theme === 'retro' ? 'none' : '0 0 15px var(--philosopher-accent)' 
            }} 
          />
          {/* Left */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setSelectedItem(null)}
              className={`text-[9px] font-mono tracking-[0.15em] transition-all duration-300 hover:scale-105 active:scale-95 px-2 py-1 rounded-sm border w-[72px] flex items-center justify-center ${
                theme === 'retro'
                  ? 'text-[var(--text-accent)] border-[var(--border-main)] hover:border-[var(--border-accent)]'
                  : 'text-zinc-500 hover:text-white/80 border-zinc-800 hover:border-zinc-600'
              }`}
            >
              <div className="overflow-hidden relative h-4 w-full">
                <div className={`transition-all duration-[1500ms] w-full ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                  <div className="h-4 flex items-center shrink-0 w-full leading-none justify-center">← 返回</div>
                  <div className="h-4 flex items-center shrink-0 w-full leading-none justify-center">← BACK</div>
                </div>
              </div>
            </button>
            <span className={`${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest`}>
              {lang === 'CN' ? `迷雾学派：${data.name}` : `MIST: ${data.enName}`}
            </span>
          </div>
          {/* Right */}
          <div className="flex items-center flex-row-reverse gap-4">
            <div className="flex items-center flex-row-reverse gap-1.5">
              {/* Profile */}
              <button
                onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
                className="flex items-center gap-2 group transition-all duration-100 hover:scale-105"
              >
                <div className="flex items-center flex-row-reverse gap-1">
                  <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-gold-primary')} border border-[var(--border-main)]/30 flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden group-hover:scale-110 transition-transform`}>
                    {currentUser.avatarUrl ? (
                      <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                    ) : (
                      currentUser.id === 'guest_user' ? <UserIcon size={12} /> : currentUser.username.substring(0, 1).toUpperCase()
                    )}
                  </div>
                  <div className="w-12 flex items-center justify-end">
                    <AnimatedText lang={lang} hClass="h-4"
                      className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}
                      cn={currentUser?.id === 'guest_user' ? '访客' : currentUser.username}
                      en={currentUser?.id === 'guest_user' ? 'GUEST' : currentUser.username}
                    />
                  </div>
                </div>
              </button>
              {/* 4. Language Toggle (Ensuring it exists in detail view) */}
              <button onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
                className={`text-[10px] font-bold ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'} transition-all duration-300 w-7 h-7 flex items-center justify-center rounded-sm tracking-widest hover:bg-white/5 hover:scale-110 active:scale-90`}
              >{lang === 'CN' ? '中' : 'EN'}</button>

              {/* 5. Theme Toggle */}
              <button onClick={toggleTheme}
                className={`flex items-center justify-center w-7 h-7 rounded-sm ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'} transition-all duration-300 hover:bg-white/5 hover:scale-110 active:scale-90`}
              >{theme === 'dark' ? <Moon size={14} /> : <Sun size={14} className="text-[#8B261D]" />}</button>
              
              {/* 6. Rings Toggle */}
              <button onClick={() => setShowRings(!showRings)}
                className={`flex items-center justify-center w-7 h-7 rounded-sm transition-all duration-300 hover:bg-white/5 hover:scale-110 active:scale-90 focus:outline-none ${showRings ? (theme === 'retro' ? 'text-[#8B261D]' : getThemeTextColor()) : (theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white')}`}
                title={lang === 'CN' ? '背景圆环开关' : 'Background Rings Toggle'}
              ><Aperture size={14} className={`shrink-0 transition-all duration-300 ${showRings ? 'rotate-180' : ''}`} /></button>
            </div>
            {/* Nav links */}
            <div className="flex items-center gap-2 mr-4">
              {[
                { icon: HistoryIcon, labelCn: '欲望档案', labelEn: 'ARCHIVE', onClick: openHistory },
                { icon: Settings, labelCn: '系统配置', labelEn: 'SYSTEM CONFIG', onClick: openSettings },
              ].map((item, idx) => (
                <button key={idx} onClick={item.onClick}
                  className={`flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:bg-white/5 hover:scale-105 active:scale-95 ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`}
                >
                  <item.icon size={14} className={`shrink-0 transition-all duration-100 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}>
                    {lang === 'CN' ? item.labelCn : item.labelEn}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </header>
        
        <div className="flex-1 relative overflow-hidden flex flex-col">
          {/* Background Decorative Rings */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
             <BorromeanRings centered={true} opacity={1} driverType={driverType || undefined} vivid={true} />
          </div>

          <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full p-6 md:p-10 relative z-10 overflow-hidden">
            {isConcept && (
               <div className="flex-1 flex flex-col gap-8 overflow-hidden animate-in slide-in-from-bottom-4 duration-700">
                  {/* Title Area Removed from right column as it is inside the card */}
                  <div className="shrink-0 hidden">
                     <h1 className={`text-4xl md:text-5xl font-serif ${dt.titleColor} tracking-tighter leading-tight`}>
                        {data.name}
                     </h1>
                  </div>
                  
                  {/* Modular Content Layout: Left Sidebar & Right Content */}
                  <div className="flex-1 flex flex-col md:flex-row gap-8 overflow-hidden min-h-0">
                     
                     {/* LEFT COLUMN: Sidebar Nav */}
                     <div className="md:w-80 flex flex-col gap-6 shrink-0 h-full overflow-y-auto custom-scrollbar pr-2">
                        {/* Concept Info Card (High Transparency) */}
                        <div className={`p-6 rounded-2xl relative overflow-hidden transition-all duration-500`}>
                           <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-current to-transparent opacity-5 pointer-events-none ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}></div>
                           
                           <div className={`text-[9px] font-mono tracking-[0.2em] uppercase mb-4 flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'}`}>
                              <Database size={12} />
                              <span>CONCEPT DATA CARD</span>
                           </div>
                           
                           <h2 className={`text-3xl font-serif font-black mb-1 leading-tight ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                              {data.name}
                           </h2>
                           <h3 className={`text-xs font-mono tracking-[0.15em] uppercase mb-6 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-400'}`}>
                              {data.enName}
                           </h3>

                           <div className="space-y-5">
                              <div className="flex flex-col gap-1.5">
                                 <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}>AUTHOR / SCHOLAR</span>
                                 <span className={`text-sm font-serif ${theme === 'retro' ? 'text-black/80 font-bold' : 'text-zinc-300'}`}>
                                    {data.author || (activeDictionary === 'HEGEL' ? 'G.W.F. Hegel' : activeDictionary === 'MARX' ? 'Karl Marx' : activeDictionary === 'LACAN' ? 'Jacques Lacan' : activeDictionary === 'ZIZEK' ? 'Slavoj Žižek' : 'Unknown')}
                                 </span>
                              </div>
                              
                              <div className="flex flex-col gap-1.5">
                                 <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}>SOURCE TEXT / ORIGIN</span>
                                 <span className={`text-xs font-serif italic ${theme === 'retro' ? 'text-black/70' : 'text-zinc-400'}`}>
                                    {data.source || (activeDictionary === 'HEGEL' ? '《精神现象学》(Phenomenology of Spirit)' : 'Archived Text')}
                                 </span>
                              </div>
                              
                              <div className="flex flex-col gap-3 pt-2">
                                 <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}>INDEX TAGS</span>
                                 <div className="flex flex-wrap gap-2">
                                    {(data.tags || ['PHILOSOPHY', 'THEORY', 'CONCEPT']).map((tag: string, i: number) => (
                                       <span key={i} className={`text-[9px] px-2.5 py-1 rounded-sm border font-mono tracking-widest transition-all duration-300 ${
                                          theme === 'retro' 
                                             ? 'border-[#8B261D]/20 bg-[#8B261D]/5 text-[#8B261D] font-bold' 
                                             : 'border-white/5 bg-white/[0.03] text-zinc-500 hover:text-[var(--philosopher-accent)] hover:border-[var(--philosopher-accent)]/30'
                                       }`}>
                                          {tag}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                              
                              <div className={`flex flex-col gap-3 pt-5 mt-2 border-t ${theme === 'retro' ? 'border-black/10' : 'border-white/5'}`}>
                                 <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}>RELATED NODES</span>
                                 <div className="flex flex-wrap gap-3">
                                    {(data.related || ['主体 (Subject)', '他者 (The Other)']).map((rel: string, i: number) => (
                                       <span key={i} className={`text-xs font-serif underline underline-offset-4 cursor-pointer transition-all hover:translate-x-1 ${theme === 'retro' ? 'text-[#8B261D]/80 hover:text-black font-medium decoration-dashed' : 'text-zinc-400 hover:text-[var(--philosopher-accent)] decoration-white/20'}`}>
                                          {rel}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex flex-col gap-2">
                           <button 
                              onClick={() => setDetailActiveTab('DEFINITION')}
                              className={`px-5 py-3.5 rounded-xl border flex items-center gap-3 transition-all duration-500 text-left relative overflow-hidden group/bt ${
                                 detailActiveTab === 'DEFINITION'
                                    ? (theme === 'retro' ? 'bg-[#8B261D] text-white border-transparent shadow-lg' : 'bg-[var(--philosopher-accent)]/10 text-white border-[var(--philosopher-accent)]/50 shadow-[0_0_20px_var(--philosopher-glow)]')
                                    : (theme === 'retro' ? 'bg-white/40 border-black/10 text-black/60 hover:bg-white/80' : 'bg-white/[0.03] border-white/5 text-zinc-500 hover:bg-white/[0.08] hover:text-zinc-300')
                              }`}
                           >
                              {/* Active Indicator Light */}
                              {detailActiveTab === 'DEFINITION' && theme !== 'retro' && (
                                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-[var(--philosopher-accent)] blur-[1px]"></div>
                              )}

                              <Fingerprint size={16} className={detailActiveTab === 'DEFINITION' ? (theme === 'retro' ? 'text-white' : 'text-[var(--philosopher-accent)]') : 'text-zinc-600 group-hover/bt:text-zinc-400'} />
                              <div>
                                 <div className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5 ${detailActiveTab === 'DEFINITION' ? (theme === 'retro' ? 'text-white/80' : 'text-[var(--philosopher-accent)]/60') : 'text-zinc-700'}`}>Part. 1</div>
                                 <h3 className={`font-serif tracking-widest text-sm ${detailActiveTab === 'DEFINITION' ? 'font-bold' : ''}`}>{lang === 'CN' ? '核心定义' : 'CORE DEFINITION'}</h3>
                              </div>
                           </button>

                           <button 
                              onClick={() => setDetailActiveTab('ANALOGY')}
                              className={`px-5 py-3.5 rounded-xl border flex items-center gap-3 transition-all duration-500 text-left relative overflow-hidden group/bt ${
                                 detailActiveTab === 'ANALOGY'
                                    ? (theme === 'retro' ? 'bg-[#8B261D] text-white border-transparent shadow-lg' : 'bg-[var(--philosopher-accent)]/10 text-white border-[var(--philosopher-accent)]/50 shadow-[0_0_20px_var(--philosopher-glow)]')
                                    : (theme === 'retro' ? 'bg-white/40 border-black/10 text-black/60 hover:bg-white/80' : 'bg-white/[0.03] border-white/5 text-zinc-500 hover:bg-white/[0.08] hover:text-zinc-300')
                              }`}
                           >
                              {detailActiveTab === 'ANALOGY' && theme !== 'retro' && (
                                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-[var(--philosopher-accent)] blur-[1px]"></div>
                              )}
                              <Layers size={16} className={detailActiveTab === 'ANALOGY' ? (theme === 'retro' ? 'text-white' : 'text-[var(--philosopher-accent)]') : 'text-zinc-600 group-hover/bt:text-zinc-400'} />
                              <div>
                                 <div className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5 ${detailActiveTab === 'ANALOGY' ? (theme === 'retro' ? 'text-white/80' : 'text-[var(--philosopher-accent)]/60') : 'text-zinc-700'}`}>Part. 2</div>
                                 <h3 className={`font-serif tracking-widest text-sm ${detailActiveTab === 'ANALOGY' ? 'font-bold' : ''}`}>{lang === 'CN' ? '拓扑类比与案例' : 'ANALOGY & CASE'}</h3>
                              </div>
                           </button>

                           <button 
                              onClick={() => setDetailActiveTab('APPLICATION')}
                              className={`px-5 py-3.5 rounded-xl border flex items-center gap-3 transition-all duration-500 text-left relative overflow-hidden group/bt ${
                                 detailActiveTab === 'APPLICATION'
                                    ? (theme === 'retro' ? 'bg-[#8B261D] text-white border-transparent shadow-lg' : 'bg-[var(--philosopher-accent)]/10 text-white border-[var(--philosopher-accent)]/50 shadow-[0_0_20px_var(--philosopher-glow)]')
                                    : (theme === 'retro' ? 'bg-white/40 border-black/10 text-black/60 hover:bg-white/80' : 'bg-white/[0.03] border-white/5 text-zinc-500 hover:bg-white/[0.08] hover:text-zinc-300')
                              }`}
                           >
                              {detailActiveTab === 'APPLICATION' && theme !== 'retro' && (
                                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-[var(--philosopher-accent)] blur-[1px]"></div>
                              )}
                              <Zap size={16} className={detailActiveTab === 'APPLICATION' ? (theme === 'retro' ? 'text-white' : 'text-[var(--philosopher-accent)]') : 'text-zinc-600 group-hover/bt:text-zinc-400'} />
                              <div>
                                 <div className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5 ${detailActiveTab === 'APPLICATION' ? (theme === 'retro' ? 'text-white/80' : 'text-[var(--philosopher-accent)]/60') : 'text-zinc-700'}`}>Part. 3</div>
                                 <h3 className={`font-serif tracking-widest text-sm ${detailActiveTab === 'APPLICATION' ? 'font-bold' : ''}`}>{lang === 'CN' ? '叙事引擎部署指示' : 'NARRATIVE DEPLOYMENT'}</h3>
                              </div>
                           </button>

                           {/* Concept Navigation Controls */}
                           <div className="mt-8 flex flex-col gap-2 animate-in fade-in slide-in-from-left-4 duration-700">
                              <div className={`text-[9px] font-bold uppercase tracking-[0.3em] mb-1 px-1 ${theme === 'retro' ? 'text-black/40 font-black' : 'text-zinc-600 font-bold'}`}>
                                {lang === 'CN' ? '词条导航' : 'LEXICON NAV'}
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                 <button
                                   onClick={handlePrevious}
                                   title={lang === 'CN' ? '上一个词条' : 'Previous Concept'}
                                   className={`flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl border transition-all duration-300 ${
                                     theme === 'retro' 
                                       ? 'bg-white/40 border-black/10 text-black/60 hover:bg-[#8B261D] hover:text-white shadow-sm' 
                                       : 'bg-white/[0.03] border-white/10 text-zinc-500 hover:bg-white hover:text-black shadow-[0_4px_15px_rgba(0,0,0,0.2)]'
                                   }`}
                                 >
                                   <ChevronLeft size={16} />
                                   <span className="text-[8px] font-bold uppercase tracking-wider">{lang === 'CN' ? '上一个' : 'PREV'}</span>
                                 </button>
                                 
                                 <button
                                   onClick={handleRandom}
                                   title={lang === 'CN' ? '随机切换' : 'Random Shuffle'}
                                   className={`flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl border transition-all duration-300 ${
                                     theme === 'retro' 
                                       ? 'bg-white/40 border-black/10 text-black/60 hover:bg-[#8B261D] hover:text-white shadow-sm' 
                                       : 'bg-white/[0.03] border-white/10 text-zinc-500 hover:bg-white hover:text-black shadow-[0_4px_15px_rgba(0,0,0,0.2)]'
                                   }`}
                                 >
                                   <Shuffle size={16} />
                                   <span className="text-[8px] font-bold uppercase tracking-wider">{lang === 'CN' ? '随机' : 'RAND'}</span>
                                 </button>
                                 
                                 <button
                                   onClick={handleNext}
                                   title={lang === 'CN' ? '下一个词条' : 'Next Concept'}
                                   className={`flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl border transition-all duration-300 ${
                                     theme === 'retro' 
                                       ? 'bg-white/40 border-black/10 text-black/60 hover:bg-[#8B261D] hover:text-white shadow-sm' 
                                       : 'bg-white/[0.03] border-white/10 text-zinc-500 hover:bg-white hover:text-black shadow-[0_4px_15px_rgba(0,0,0,0.2)]'
                                   }`}
                                 >
                                   <ChevronRight size={16} />
                                   <span className="text-[8px] font-bold uppercase tracking-wider">{lang === 'CN' ? '下一个' : 'NEXT'}</span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     
                     {/* RIGHT COLUMN: Content Area (High Transparency) */}
                     <div className={`flex-1 flex flex-col overflow-hidden relative transition-all duration-500`}>
                        {/* Subtle Interior Glow */}
                        {theme === 'dark' && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--philosopher-accent)]/20 to-transparent"></div>}
                        
                        <div className="flex-1 overflow-y-auto p-10 md:p-14 custom-scrollbar">
                           <div className={`text-sm md:text-lg ${theme === 'retro' ? 'text-black/90' : 'text-zinc-300/90'} font-serif leading-[1.85] tracking-wide animate-in fade-in duration-700 max-w-4xl mx-auto detail-markdown-content`}>
                              {detailActiveTab === 'DEFINITION' && renderMarkdown((data.detailed?.definition || data.shortDef).trim().replace(/\n\s*---\s*$/, ''))}
                              {detailActiveTab === 'ANALOGY' && renderMarkdown((data.detailed?.analogy || "*(空)*").trim().replace(/\n\s*---\s*$/, ''))}
                              {detailActiveTab === 'APPLICATION' && renderMarkdown((data.detailed?.application || "*(空)*").trim().replace(/\n\s*---\s*$/, ''))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
            
            {!isConcept && (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                <Database size={40} className="text-zinc-700 animate-pulse" />
                <h2 className="text-xl font-serif text-zinc-400 uppercase tracking-widest">DATA UNDER RECONSTRUCTION</h2>
                <button onClick={() => setSelectedItem(null)} className="px-8 py-2 border border-zinc-700 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-200 hover:border-zinc-200 transition-all">CLOSE_CONNECTION</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${renderInPlace ? 'relative w-full h-full p-0 flex flex-col' : 'fixed inset-0 z-[100] flex flex-col'} ${
      theme === 'retro' ? 'bg-transparent' : (renderInPlace ? 'bg-transparent' : 'bg-transparent')
    } overflow-hidden transition-all duration-500 theme-${activeDictionary.toLowerCase()}`}>
      
      {/* 噪点纹理覆盖 */}
      {theme === 'dark' && atmosphericsEnabled && <div className="mist-grain opacity-[0.03]"></div>}

      {/* BACKGROUND ELEMENTS */}
      {!renderInPlace && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[var(--ring-opacity)]">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
           <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[var(--accent-color)]/5 blur-[120px] rounded-full"></div>
           <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-500/5 blur-[120px] rounded-full"></div>
        </div>
      )}

      {/* Background Rings Integration */}
      {!renderInPlace && (
        <div className={`absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none z-0 select-none overflow-hidden transition-all duration-[1500ms] ease-in-out ${
          showRings 
            ? 'opacity-[var(--ring-opacity)] scale-[1.1] rotate-0' 
            : 'opacity-0 scale-[1.3] translate-y-20 rotate-12'
        }`}>
           <div className="w-[1000px] h-[1000px] flex items-center justify-center translate-x-1/4">
              <BorromeanRings centered={true} opacity={1} driverType={driverType || undefined} vivid={true} />
           </div>
        </div>
      )}

      {/* HEADER - Matching AppHeader Style */}
      {!renderInPlace && (
        <header className={`h-14 bg-[var(--bg-header)] backdrop-blur-md border-b ${getThemeBorderColor()} flex items-center justify-between px-6 z-50 sticky top-0 shrink-0 transition-all duration-500 animate-page-dissolve relative`}>
          {/* Theme Accent Bottom Line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500 z-10"
            style={{ backgroundColor: 'rgba(212,175,55,0.15)', boxShadow: '0 0 10px rgba(212,175,55,0.1)' }}
          />

          {/* Left Section */}
          <div className="flex items-center gap-5">
            <button
              onClick={onClose}
              className={`text-[9px] font-mono tracking-[0.15em] transition-all duration-300 hover:scale-105 active:scale-95 px-2 py-1 rounded-sm border w-[72px] flex items-center justify-center ${
                theme === 'retro'
                  ? 'text-[var(--text-accent)] border-[var(--border-main)] hover:border-[var(--border-accent)]'
                  : 'text-zinc-500 hover:text-white/80 border-zinc-800 hover:border-zinc-600'
              }`}
              title={lang === 'CN' ? '返回迷雾学派入口' : 'Return to Mist Portal'}
            >
              <div className="overflow-hidden relative h-4 w-full">
                <div className={`transition-all duration-[1500ms] w-full ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                  <div className="h-4 flex items-center shrink-0 w-full leading-none justify-center">← 入口</div>
                  <div className="h-4 flex items-center shrink-0 w-full leading-none justify-center">← PORTAL</div>
                </div>
              </div>
            </button>
            <span className={`${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest`}>
              {lang === 'CN' ? '迷雾学派：迷雾辞典' : 'MIST: DICTIONARY'}
            </span>
          </div>

          {/* Center Section - Search Bar */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center">
            <div className="relative group/search">
              <div className={`relative flex items-center ${theme === 'retro' ? 'bg-white/40 border-black/20 group-hover/search:border-black/40 hover:bg-white/60' : 'bg-black/20 border-white/10 hover:bg-black/40'} border rounded-full px-4 py-1.5 transition-all duration-500 w-64 group/input`}>
                <Search size={12} className={`mr-2 shrink-0 transition-colors duration-300 ${theme === 'retro' ? 'text-black/40' : 'text-zinc-500'}`} />
                {!searchQuery && (
                  <div className="absolute left-9 right-4 flex items-center pointer-events-none overflow-hidden h-full">
                    <AnimatedText lang={lang} hClass="h-4"
                      className={`text-[10px] uppercase font-bold tracking-[0.1em] ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}
                      cn="搜索哲学档案..."
                      en="Search codex..."
                    />
                  </div>
                )}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className={`bg-transparent border-none outline-none text-[10px] uppercase font-bold tracking-[0.1em] text-[var(--text-main)] ${theme === 'retro' ? 'placeholder:text-black/40' : 'placeholder:text-zinc-400'} w-full transition-all duration-300`}
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center flex-row-reverse gap-4">
            {/* Rightmost icon group */}
            <div className="flex items-center flex-row-reverse gap-1.5">
              {/* 1. Profile */}
              <button
                onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
                className="flex items-center gap-2 group transition-all duration-100 hover:scale-105"
              >
                <div className="flex items-center flex-row-reverse gap-1">
                  <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-gold-primary')} border border-[var(--border-main)]/30 flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden group-hover:scale-110 transition-transform`}>
                    {currentUser.avatarUrl ? (
                      <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                    ) : (
                      currentUser.id === 'guest_user' ? <UserIcon size={12} /> : currentUser.username.substring(0, 1).toUpperCase()
                    )}
                  </div>
                  <div className="w-12 flex items-center justify-end">
                    <AnimatedText
                      lang={lang}
                      hClass="h-4"
                      className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}
                      cn={currentUser?.id === 'guest_user' ? '访客' : currentUser.username}
                      en={currentUser?.id === 'guest_user' ? 'GUEST' : currentUser.username}
                    />
                  </div>
                </div>
              </button>

<div className="hidden">
               {/* 2. Language Toggle (Hidden from main header to avoid duplication with global AppHeader) */}
               <button
                 onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
                 className={`text-[10px] font-bold ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'} transition-all duration-300 w-7 h-7 flex items-center justify-center rounded-sm tracking-widest hover:bg-white/5 hover:scale-110 active:scale-90`}
                 title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
               >
                 {lang === 'CN' ? '中' : 'EN'}
               </button>
              </div>

              {/* 3. Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`flex items-center justify-center w-7 h-7 rounded-sm ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'} transition-all duration-300 hover:bg-white/5 hover:scale-110 active:scale-90`}
                title={theme === 'dark' ? "切换为复古主题" : "切换为暗黑主题"}
              >
                {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} className="text-[#8B261D]" />}
              </button>

              {/* 5. Rings Toggle */}
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

            {/* Navigation Links — matches AppHeader exactly */}
            <div className="flex items-center gap-2 mr-4">
              {[
                { icon: HistoryIcon, labelCn: '欲望档案', labelEn: 'ARCHIVE', onClick: openHistory, isActive: false },
                { icon: Settings, labelCn: '系统配置', labelEn: 'SYSTEM CONFIG', onClick: openSettings, isActive: false },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.onClick}
                  className={`flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:bg-white/5 hover:scale-105 active:scale-95 ${
                    item.isActive ? getThemeTextColor() : (theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white')
                  }`}
                >
                  <item.icon size={14} className={`shrink-0 transition-all duration-100 ${item.isActive ? 'text-current' : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${item.isActive ? 'text-current' : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 hover:text-white')}`}>
                    {lang === 'CN' ? item.labelCn : item.labelEn}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </header>
      )}

      {/* SUBNAV */}
      <nav className={`h-14 border-b ${getThemeBorderColor()} flex items-center justify-between px-10 shrink-0 relative z-20 transition-all duration-500 ${
        renderInPlace ? (theme === 'retro' ? 'bg-transparent' : 'bg-black/20') : ''
      }`}>
        <div className="flex items-center gap-10 overflow-x-auto no-scrollbar">
         {[
           { id: 'CONCEPTS', label: lang === 'CN' ? '拓扑辞典' : 'LEXICON', en: 'LEXICON', icon: <Hash size={16} /> },
           { id: 'PERSONNEL', label: lang === 'CN' ? '人物档案' : 'SUBJECTS', en: 'SUBJECTS', icon: <Users size={16} /> },
           { id: 'RESEARCH', label: lang === 'CN' ? '研究报告' : 'RESEARCH', en: 'RESEARCH', icon: <FileText size={16} /> },
           { id: 'COLLECTIVE', label: lang === 'CN' ? '共鸣场' : 'RESONANCE', en: 'RESONANCE', icon: <Sparkles size={16} /> },
           { id: 'TIMELINE', label: lang === 'CN' ? '时间轴' : 'TIMELINE', en: 'TIMELINE', icon: <Clock size={16} /> },
         ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveSection(tab.id as CodexSection); setSelectedItem(null); }}
              className={`flex items-center gap-3 transition-all relative px-7 py-3 h-12 group/tab select-none border-b-2 ${
                activeSection === tab.id 
                  ? (theme === 'retro' ? 'text-[#8B261D] border-[#8B261D]' : 'text-[var(--philosopher-accent)] border-[var(--philosopher-accent)] bg-[var(--philosopher-glow)] shadow-[inset_0_-10px_20px_-10px_var(--philosopher-glow)]') 
                  : (theme === 'retro' ? 'text-zinc-500 hover:text-[#8B261D] border-transparent' : 'text-zinc-400 hover:text-white border-transparent hover:bg-white/[0.02]')
              }`}
            >
              <span className={`transition-all duration-500 ${activeSection === tab.id ? 'scale-110 rotate-12' : "group-hover/tab:scale-110 opacity-60 group-hover/tab:opacity-100"}`}>{tab.icon}</span>
              <div className="flex flex-col items-start justify-center">
                 <span className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-300`}>
                   {lang === 'CN' ? tab.label : tab.en}
                 </span>
              </div>
              
              {activeSection === tab.id && theme !== 'retro' && (
                <div className="absolute inset-x-4 bottom-0.5 h-[1.5px] bg-white/40 blur-[1px] z-10 rounded-full"></div>
              )}
              {activeSection === tab.id && theme === 'retro' && (
                <div className={`absolute bottom-[-1px] left-0 right-0 h-px ${themeColors.bg}`}></div>
              )}
            </button>
          ))}
        </div>

        {renderInPlace && onToggleExpand && (
          <button
            onClick={onToggleExpand}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all duration-300 group shrink-0 ${
              theme === 'retro'
                ? 'border-black/10 hover:border-black/30 text-black/60 hover:text-black hover:bg-black/5'
                : 'border-white/10 hover:border-white/30 text-zinc-400 hover:text-white bg-white/5'
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {isExpanded ? (lang === 'CN' ? '收起侧边栏' : 'COLLAPSE') : (lang === 'CN' ? '展开全屏' : 'EXPAND')}
            </span>
            <div className={`transition-transform duration-500 ${isExpanded ? '' : 'rotate-180'}`}>
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        )}
      </nav>

      {/* CONTENT AREA */}
      <main className={`flex-1 overflow-hidden flex flex-col relative z-10 ${renderInPlace ? 'p-0' : 'p-6 md:p-8'} ${theme === 'retro' ? 'bg-transparent' : ''}`}>
         {activeSection === 'CONCEPTS' && renderConcepts()}
         {activeSection === 'PERSONNEL' && renderPersonnel()}
         {activeSection === 'RESEARCH' && renderResearch()}
         {activeSection === 'COLLECTIVE' && renderCollective()}
         {activeSection === 'TIMELINE' && <PhilosophyTimeline lang={lang} />}
      </main>

      {/* DETAIL MODAL OVERLAY */}
      {renderDetailView()}

      {/* SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      
      {/* FOOTER BAR */}
      {!renderInPlace && (
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
      )}
    </div>
  );
};
