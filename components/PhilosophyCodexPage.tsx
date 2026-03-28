import React, { useState, useMemo, useRef, useCallback } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Dices,
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
  X
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { DriverType, User } from '../types';
import { PhilosophyTimeline } from './PhilosophyTimeline';
import { MIST_INDEX, HEGEL_INDEX, MARX_INDEX, LACAN_INDEX, ZIZEK_INDEX, LacanConcept, LacanCategory } from '../data/codex/philosophy_refined';

// import { ANALYSIS_LIBRARY } from '../data/codex/analysis_data';
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
  initialDetailTab?: 'DEFINITION' | 'ANALOGY' | 'APPLICATION';
  onDetailTabChange?: (tab: 'DEFINITION' | 'ANALOGY' | 'APPLICATION') => void;
}

const ConceptCard = React.memo(({ concept, onClick, activeDictionary, theme, themeColors }: any) => {
  const isSelected = activeDictionary === concept.id;
  
  return (
    <button
      onClick={() => onClick(concept)}
      className={`group relative p-6 rounded-2xl cursor-pointer transition-[transform,background-color,border-color,box-shadow] duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:-translate-y-1.5 overflow-hidden border ${theme === 'retro'
          ? 'bg-white/0 border-transparent hover:border-[#8B261D]/40 hover:bg-white shadow-none hover:shadow-[0_45px_100px_rgba(139,38,29,0.15)]'
          : 'bg-black/20 border-transparent hover:border-[#FFD700]/80 hover:bg-black/40 hover:shadow-[0_0_25px_rgba(255,215,0,0.2)]'
        }`}
      style={{ 
        boxShadow: (theme !== 'retro' && isSelected) ? '0 0 40px var(--philosopher-glow)' : undefined,
        backdropFilter: theme === 'retro' ? 'none' : 'blur(10px)'
      }}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--philosopher-accent)] to-transparent opacity-0 group-hover:opacity-[0.25] transition-all duration-700 blur-sm`}></div>
      <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[var(--philosopher-accent)] to-transparent opacity-0 group-hover:opacity-[0.15] transition-all duration-700 blur-sm`}></div>
      <h4 className={`text-xl font-serif mb-1 tracking-wide transition-colors duration-500 ${theme === 'retro' ? 'text-black font-extrabold group-hover:text-[var(--text-accent)]' : 'text-white group-hover:text-[#FFD700]'}`}>{concept.name}</h4>
      <p className={`text-[10px] font-mono mb-5 uppercase tracking-[0.2em] font-black ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'}`}>{concept.enName}</p>
      <p className={`text-[13px] leading-relaxed line-clamp-4 font-light tracking-wide ${theme === 'retro' ? 'text-black/80 font-medium' : 'text-zinc-400'}`}>{concept.shortDef}</p>
      <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <span className={`text-[9px] font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}>Access Link</span>
        <ChevronRight size={14} className={themeColors.accent} />
      </div>
    </button>
  );
});

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

const CIPHER_CHARS = "ψφΔσηλξθΠΣΩαβγδεζηθικλμνξοπρστυφχψω";

type CodexSection = 'CONCEPTS' | 'PERSONNEL' | 'RESEARCH' | 'TIMELINE';

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
  setShowRings,
  setViewMode,
  renderInPlace = false,
  onToggleExpand,
  isExpanded = false,
  initialDictionary,
  initialSection,
  onDictionaryChange,
  onSectionChange,
  initialDetailTab,
  onDetailTabChange
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<CodexSection>(initialSection || 'CONCEPTS');
  const [activeDictionary, setActiveDictionary] = useState<string>(initialDictionary || 'MIST');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [detailActiveTab, setDetailActiveTab] = useState<'DEFINITION' | 'ANALOGY' | 'APPLICATION'>(initialDetailTab || 'DEFINITION');

  // Audio System for Book Flipping Sounds
  const flipAudioRefs = useRef<HTMLAudioElement[]>([]);
  const lastFlipIndex = useRef<number>(-1);

  React.useEffect(() => {
    // Initialize 5 flipping sounds - expected to be uploaded to /public/audio/
    const audios = [1, 2, 3, 4, 5].map(num => {
      const audio = new Audio(`/audio/book-flip-${num}.mp3`);
      audio.volume = 0.5;
      audio.preload = 'auto';
      return audio;
    });
    flipAudioRefs.current = audios;
    
    return () => {
      // Cleanup
      flipAudioRefs.current.forEach(audio => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  const playFlipSound = React.useCallback(() => {
    if (flipAudioRefs.current.length === 0) return;
    
    let randomIndex;
    // Ensure the next sound is different from the last one to avoid repetition
    do {
      randomIndex = Math.floor(Math.random() * flipAudioRefs.current.length);
    } while (randomIndex === lastFlipIndex.current && flipAudioRefs.current.length > 1);
    
    lastFlipIndex.current = randomIndex;
    const audio = flipAudioRefs.current[randomIndex];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(err => {
        // Silently catch errors (e.g. user hasn't interacted with page yet)
        console.warn('Audio play failed:', err);
      });
    }
  }, []);

  // Play sound whenever selectedItem changes (opens or navigates between entries)
  // or when switching between Detail view tabs (Definition, Analogy, Application)
  React.useEffect(() => {
    if (selectedItem) {
      playFlipSound();
    }
  }, [selectedItem, detailActiveTab, playFlipSound]); 

  React.useEffect(() => {
    if (onDetailTabChange) onDetailTabChange(detailActiveTab);
  }, [detailActiveTab, onDetailTabChange]);

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
  const isMainPhilosopher = ['MIST', 'HEGEL', 'MARX', 'LACAN', 'ZIZEK'].includes(activeDictionary);

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
    return 'text-[var(--philosopher-accent)]';
  };

  const getThemeTextColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    return 'text-[var(--philosopher-accent)]';
  };

  const getThemeBorderColor = () => {
    if (theme === 'retro') return 'border-[#8B261D]/20';
    return ''; // We will use inline styles for dynamic theme borders
  };

  // --- Theme Utility for UI Elements ---
  const themeColors = {
    accent: getThemeTextColor(),
    border: getThemeBorderColor(),
    bg: (theme === 'retro') ? 'bg-[#8B261D]' : (activeDictionary === 'MIST' ? 'bg-[#9CA3AF]' : activeDictionary === 'MARX' ? 'bg-[#FF7675]' : activeDictionary === 'HEGEL' ? 'bg-[#D4AF37]' : activeDictionary === 'LACAN' ? 'bg-[#22D3EE]' : activeDictionary === 'ZIZEK' ? 'bg-[#C084FC]' : 'bg-white'),
  };
  const dictionaries = {
    MIST: { name: '迷雾学派 (Mist)', data: MIST_INDEX, icon: <Sparkles size={16} /> },
    HEGEL: { name: '黑格尔 (Hegel)', data: HEGEL_INDEX, icon: <Aperture size={16} /> },
    MARX: { name: '马克思 (Marx)', data: MARX_INDEX, icon: <Sun size={16} /> },
    LACAN: { name: '拉康 (Lacan)', data: LACAN_INDEX, icon: <Moon size={16} /> },
    ZIZEK: { name: '齐泽克 (Žižek)', data: ZIZEK_INDEX, icon: <Zap size={16} /> },
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
  <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-700 ease-in-out ${renderInPlace
      ? 'bg-white/0'
      : (theme === 'retro' ? 'bg-[var(--bg-main)]' : 'bg-white/[0.015] backdrop-blur-2xl rounded-xl border-transparent')
    }`}
    style={{ backdropFilter: theme === 'retro' ? 'none' : 'blur(16px)' }}
    >
    <div className={`h-14 flex items-center gap-2 px-6 border-b border-transparent overflow-x-auto no-scrollbar shrink-0 transition-all duration-500`}>
      {Object.entries(dictionaries).map(([id, info]) => (
        <button
          key={id}
          onClick={() => setActiveDictionary(id)}
          className={`flex items-center gap-2 px-5 py-2 rounded-sm text-[10px] font-extrabold uppercase tracking-widest transition-all whitespace-nowrap border ${activeDictionary === id
              ? (theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D] shadow-sm border-[#8B261D]/30' : 'bg-[var(--philosopher-accent)]/10 text-[var(--philosopher-accent)] border-[var(--philosopher-accent)] shadow-[0_0_15px_var(--philosopher-accent)]/30')
              : (theme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/5 border-transparent' : 'text-zinc-500 hover:text-white/80 border-transparent')
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
                <div className={`w-8 h-[2px] rounded-full ${theme === 'retro' ? 'bg-[var(--text-accent)]' : 'bg-white/20'}`}></div>
                <h3 className={`text-2xl font-serif tracking-widest leading-none ${theme === 'retro' ? 'text-[var(--text-accent)] font-black' : 'text-[#FFD700]'}`}>
                  {lang === 'CN' ? category.name : category.enName}
                </h3>
              </div>
            )}

            {category.desc && (
              <div className="flex items-baseline gap-3 mb-6 ml-2">
                <div className={`w-1.5 h-1.5 rounded-full ${theme === 'retro' ? 'bg-[var(--text-accent)]' : 'bg-[var(--accent-color)]/40'}`}></div>
                <h4 className={`text-base font-serif tracking-wide opacity-80 ${theme === 'retro' ? 'text-black font-bold' : 'text-zinc-400'}`}>
                  {category.desc}
                </h4>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.concepts.map((concept: LacanConcept) => (
                <ConceptCard
                  key={concept.id}
                  concept={concept}
                  theme={theme}
                  activeDictionary={activeDictionary}
                  themeColors={themeColors}
                  onClick={(concept: any) => {
                    if (concept.id === 'rsi-topology-card' && setViewMode) {
                      setViewMode('RSI');
                    } else if (concept.id === 'desire-graph-card' && setViewMode) {
                      setViewMode('TOPOLOGY');
                    } else {
                      setSelectedItem({ type: 'CONCEPT', data: concept });
                    }
                  }}
                />
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
        className={`group relative transition-all duration-700 cursor-pointer flex flex-col md:flex-row h-full md:h-72 rounded-2xl overflow-hidden border-transparent ${theme === 'retro'
            ? 'bg-white/[0.01] hover:border-[var(--border-accent)] hover:bg-white shadow-none hover:shadow-[0_45px_100px_rgba(139,38,29,0.1)] hover:-translate-y-1.5'
            : 'bg-white/[0.015] backdrop-blur-2xl hover:bg-[#0c0d10] hover:backdrop-blur-none shadow-none hover:shadow-[0_45px_100px_var(--philosopher-accent)]/10 hover:-translate-y-1.5'
          }`}
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
            <AnimatedText
              lang={lang}
              hClass="h-8"
              className={`text-2xl font-serif mb-1 group-hover:text-gold-primary transition-colors ${theme === 'retro' ? 'text-black font-extrabold' : 'text-zinc-100'}`}
              cn={person.name}
              en={person.title}
            />
            <AnimatedText
              lang={lang}
              hClass="h-4"
              className={`text-[10px] font-bold uppercase tracking-widest ${person.color} mb-4`}
              cn={person.role}
              en={person.role === '迷雾学派奠基人 / 精神分析学家' ? 'MIST FOUNDER / PSYCHOANALYST' : person.role} // Simple mapping or just use original if no EN
            />
            <AnimatedText
              lang={lang}
              hClass="h-10"
              className={`text-sm leading-relaxed line-clamp-2 ${theme === 'retro' ? 'text-black/80 font-medium' : 'text-zinc-400'}`}
              cn={person.summary}
              en={person.summary} // If no separate summaryEn provided, we can keep it same or wrap it
            />
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
        className={`group transition-all duration-700 cursor-pointer relative rounded-2xl overflow-hidden border-transparent ${theme === 'retro'
            ? 'bg-white/[0.01] hover:border-[var(--border-accent)] hover:bg-white shadow-none hover:shadow-[0_45px_100px_rgba(139,38,29,0.1)] hover:-translate-y-1.5'
            : 'bg-white/[0.01] backdrop-blur-2xl hover:bg-[#0c0d10] hover:backdrop-blur-none shadow-none hover:shadow-[0_45px_100px_var(--philosopher-accent)]/10 hover:-translate-y-1.5'
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
            className={`text-xs leading-relaxed line-clamp-3 italic mb-6 ${theme === 'retro' ? 'text-black/60' : 'text-zinc-400'}`}
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
    <p className="text-sm text-zinc-400 max-w-md leading-relaxed font-light mb-8 italic">
      "The collective subconscious is currently in a state of high entropy. Meaning strings are being decrypted and re-synthesized."
    </p>
    <div className="flex flex-col gap-3 w-full max-w-md">
      {[
        { user: 'ARCHIVIST-01', text: 'Does the Real exist outside of the gaze?', time: '2m ago' },
        { user: 'VOID-WALKER', text: 'Repression is the only form of truth left.', time: '15m ago' },
        { user: 'ECHO-9', text: 'The labyrinth is simply a mirror in three dimensions.', time: '1h ago' }
      ].map((msg, i) => (
        <div key={i} className="text-left bg-zinc-900/60 p-4 rounded-xl transition-all border border-transparent hover:border-[var(--philosopher-accent)]/20">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-mono text-gold-primary/70">{msg.user}</span>
            <span className="text-[9px] font-mono text-zinc-600">{msg.time}</span>
          </div>
          <p className="text-xs text-zinc-300">{msg.text}</p>
        </div>
      ))}
    </div>
    <button className="mt-8 px-8 py-2 rounded-full border border-white/10 hover:border-white/30 text-[10px] font-bold uppercase tracking-widest text-zinc-500 transition-all hover:text-white">
      Join Resonance
    </button>
  </div>
);

// --- Simple Markdown Processor ---
const renderMarkdown = (text: string = "") => {
  if (!text) return null;

  const isRetro = theme === 'retro';
  const headerColor = isRetro ? 'text-[#8B261D]' : 'text-[var(--philosopher-accent)]';

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
            <span>{codeLang || 'CODE'}</span>
            <span className="opacity-50">SCANNED_SOURCE</span>
          </div>
          <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto custom-scrollbar">
            <code className={isRetro ? 'text-black' : 'text-zinc-300'}>
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

  const processInline = (str: string, offset: number): React.ReactNode[] => {
    if (!str) return [];
    const regex = /(\$\$.*?\$\$)|(\$(?:\\\$|[^\$])*?\$)|(\*\*.*?\*\*)|(\*[^\*].*?\*)|(_.*?_)|(`.*?`)/;
    const match = str.match(regex);

    if (!match) return [str];

    const tag = match[0];
    const start = match.index!;
    const before = str.slice(0, start);
    const after = str.slice(start + tag.length);
    const absoluteStart = offset + start;

    const renderToken = () => {
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

      if (tag.startsWith('**')) {
        return <strong className={`font-bold ${isRetro ? 'text-black' : 'text-[var(--philosopher-accent)]'}`}>{processInline(tag.slice(2, -2), absoluteStart + 2)}</strong>;
      }

      if (tag.startsWith('*') || tag.startsWith('_')) {
        return <em className="italic opacity-90">{processInline(tag.slice(1, -1), absoluteStart + 1)}</em>;
      }

      if (tag.startsWith('`')) {
        return <code className={`px-1.5 py-0.5 rounded font-mono text-xs ${isRetro ? 'bg-black/5 text-[#8B261D]' : 'bg-white/10 text-amber-500'}`}>{tag.slice(1, -1)}</code>;
      }
      return tag;
    };

    return [
      ...processInline(before, offset),
      <React.Fragment key={absoluteStart}>{renderToken()}</React.Fragment>,
      ...processInline(after, absoluteStart + tag.length)
    ];
  };

  let firstHeaderFound = false;

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('```')) {
      if (isCodeBlock) flushCode();
      else { flushList(); isCodeBlock = true; codeLang = trimmedLine.slice(3); }
      return;
    }
    if (isCodeBlock) { codeBlock.push(line); return; }

    if (trimmedLine === '---') return;

    if (line.startsWith('# ')) {
      if (!firstHeaderFound) {
        firstHeaderFound = true;
        if (line.includes('【定义】')) return;
      }
      flushList();
      elements.push(<h1 key={index} className={`text-3xl font-serif mt-12 mb-8 font-black tracking-widest ${headerColor}`}>{processInline(line.slice(2), index * 1000)}</h1>);
      return;
    }

    if (trimmedLine.match(/^\$\$(.*)\$\$$/)) {
      flushList();
      const formula = trimmedLine.match(/^\$\$(.*)\$\$$/)![1];
      if (typeof (window as any).katex !== 'undefined') {
        const html = (window as any).katex.renderToString(formula, { displayMode: true, throwOnError: false });
        elements.push(<div key={index} className="my-8 py-4 overflow-x-auto text-center" dangerouslySetInnerHTML={{ __html: html }} />);
      }
      return;
    }

    if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={index} className={`text-2xl font-serif mt-12 mb-6 font-extrabold tracking-widest ${headerColor}`}>{processInline(line.slice(3), index * 1000)}</h2>);
    }
    else if (line.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={index} className={`text-xl font-serif mt-10 mb-6 font-bold tracking-wider ${headerColor}`}>{processInline(line.slice(4), index * 1000)}</h3>);
    }
    else if (line.startsWith('#### ')) {
      flushList();
      elements.push(<h4 key={index} className={`text-lg font-serif mt-8 mb-4 font-bold tracking-wider ${isRetro ? 'text-[#8B261D]/80' : 'text-white/80'}`}>{processInline(line.slice(5), index * 1000)}</h4>);
    }
    else if (trimmedLine.startsWith('> ')) {
      flushList();
      elements.push(
        <blockquote key={index} className={`border-l-4 pl-6 py-2 my-8 italic font-light tracking-widest leading-relaxed ${isRetro ? 'border-[#8B261D]/30 text-black/70' : 'border-[var(--philosopher-accent)]/30 text-white/70'}`}>
          {processInline(trimmedLine.slice(2), index * 1000)}
        </blockquote>
      );
    }
    else if (/^\d+\.\s/.test(trimmedLine)) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(<li key={index}>{processInline(trimmedLine.replace(/^\d+\.\s/, ''), index * 1000)}</li>);
    }
    else if (/^[\*\-]\s/.test(trimmedLine)) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(<li key={index}>{processInline(trimmedLine.slice(2), index * 1000)}</li>);
    }
    else if (trimmedLine === '') {
      flushList();
      elements.push(<div key={index} className="h-4"></div>);
    }
    else {
      flushList();
      elements.push(
        <div key={index} className="leading-[1.8] mb-6 tracking-wide font-normal">
          {processInline(line, index * 1000)}
        </div>
      );
    }
  });

  flushList();
  if (isCodeBlock) flushCode();
  return elements;
};

  // --- Detail Section Logic ---
  // Renders the actual content tabs (Definition, Analogy, Application)
  // Incorporates the "Cipher Decoder" skeleton screen for the loading state.
  const renderDetailContent = (content: string | undefined, type: 'def' | 'analogy' | 'app') => {
    const isSkeleton = content === "LOADING_STATE";

    if (isSkeleton) {
      const loaderColor = theme === 'retro' ? '#8B261D' : 'var(--philosopher-accent)';
      
      return (
        <div key="cipher-loader" className="animate-pulse space-y-8 opacity-90 px-1 py-4 font-mono select-none pointer-events-none">
          {/* Option C: Cipher Decoder / Symbolic Bitstream */}
          <div className="space-y-6">
            {/* Refined Data Stream Header instead of gray bar */}
            <div className="flex items-center gap-4 mb-10 opacity-60">
              <div 
                className={`text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-0.5 border rounded-sm`} 
                style={{ 
                  color: loaderColor,
                  borderColor: theme === 'retro' ? 'rgba(139, 38, 29, 0.4)' : 'rgba(255, 255, 255, 0.2)'
                }}
              >
                {lang === 'CN' ? '概念解构' : 'SEGMENT_DECO'}
              </div>
              <div className="flex-1 h-[1px] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--philosopher-accent)]/40 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"
                  style={{ 
                    background: theme === 'retro' 
                      ? 'linear-gradient(to right, transparent, rgba(139, 38, 29, 0.4), transparent)' 
                      : undefined 
                  }}
                ></div>
                <div 
                  className="w-full h-full opacity-20"
                  style={{ backgroundColor: loaderColor }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[0, 1, 2, 3].map(row => (
                <div 
                  key={row} 
                  className="flex flex-wrap gap-x-2.5 gap-y-1.5 overflow-hidden h-10 border-l-2 pl-4 py-1"
                  style={{ borderColor: theme === 'retro' ? 'rgba(139, 38, 29, 0.3)' : undefined }}
                >
                  {Array.from({ length: row === 3 ? 15 : 30 }).map((_, i) => (
                    <span 
                      key={i} 
                      className="text-[12px] font-bold transition-all duration-300 cipher-char-flicker"
                      style={{ 
                        color: loaderColor,
                        opacity: 0.35 + ((i + row) % 5) * 0.15,
                        animationDelay: `${(i + row) * 50}ms`
                      }}
                    >
                      {CIPHER_CHARS[(i + row * 7) % CIPHER_CHARS.length]}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div 
            className="pt-12 flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase font-bold"
            style={{ color: loaderColor }}
          >
            <div 
              className="w-4 h-[1px] animate-ping"
              style={{ backgroundColor: loaderColor }}
            ></div>
            {lang === 'CN' ? '能指序列解构中...' : 'DECODING_CONCEPT_SIGNIFIERS...'}
          </div>
        </div>
      );
    }

    if (!content) {
      return (
        <div className="py-20 text-center opacity-40 font-mono text-[10px] uppercase tracking-[0.5em] animate-pageEntrance">
          {lang === 'CN' ? '*( 档案库空虚 )*' : '*( REPOSITORY_EMPTY )*'}
        </div>
      );
    }

    return (
      <div className="animate-pageEntrance">
        {renderMarkdown(content)}
      </div>
    );
  };


const renderDetailView = () => {
  if (!selectedItem) return null;

  // Hybrid Data Logic: Prioritize static content in the TS file, fallback to fetched JSON
  const conceptData = selectedItem.data;
  const isConcept = selectedItem.type === 'CONCEPT';
  const isPersonnel = selectedItem.type === 'PERSONNEL';
  const isResearch = selectedItem.type === 'RESEARCH';

  // 确定数据加载状态：检查 selectedDetail 是否包含有效内容（definition 字段且长度 > 20）
  // 本地 JSON 文件没有 id 字段，所以不能用 id 匹配来判断数据是否加载完成
  // 同时过滤掉 Firebase 中的占位符数据（如仅包含 '#' 的词条）
  const actualDetail = (selectedDetail && (selectedDetail as any).definition && (selectedDetail as any).definition.length > 20) ? (selectedDetail as any) : null;
  const isFetchingActualContent = isLoadingDetail && !conceptData.detailed && !actualDetail;

  const displayData = {
    ...conceptData,
    detailed: {
      definition: isFetchingActualContent ? "LOADING_STATE" : (actualDetail?.definition || conceptData.detailed?.definition || conceptData.shortDef || ""),
      analogy: isFetchingActualContent ? "LOADING_STATE" : (actualDetail?.analogy || conceptData.detailed?.analogy || ""),
      application: isFetchingActualContent ? "LOADING_STATE" : (actualDetail?.application || conceptData.detailed?.application || "")
    }
  };

  const data = displayData;

  // ... Consolidated with renderDetailContent above ...


  // Theme values for the detail view
  const dt = {
    overlayBg: theme === 'retro' ? 'bg-[#EFE9E0]' : 'bg-[#000000]',
    headerBg: 'bg-[var(--bg-header)] backdrop-blur-md',
    textColor: theme === 'retro' ? 'text-black/80' : 'text-white/90',
    titleColor: theme === 'retro' ? 'text-[#8B261D]' : 'text-white',
    accentColor: theme === 'retro' ? 'text-[#8B261D]' : themeColors.accent,
    cardBg: theme === 'retro' ? 'bg-white/40 border border-[#8B261D]/20 shadow-[0_4px_20px_rgba(139,38,29,0.08)]' : 'bg-[#000000] border border-transparent',
  };

  return (
    <div className={`fixed inset-0 z-[100] ${dt.overlayBg} flex flex-col animate-in fade-in duration-500 overflow-hidden`}>
      {/* Uniform Header Section */}
      <header className={`h-14 ${dt.headerBg} flex items-center justify-between px-6 md:px-12 z-50 sticky top-0 shrink-0 transition-all duration-500 animate-page-dissolve relative`}>
        {/* Theme Divider Line - Global Consistency Accent */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500 z-10" 
          style={{ 
            backgroundColor: theme === 'retro' ? '#8B261D' : 'var(--philosopher-accent)',
            opacity: theme === 'retro' ? 0.2 : 0.15,
            boxShadow: theme === 'retro' ? 'none' : '0 0 15px var(--philosopher-accent)'
          }} 
        />
        <div className="flex items-center gap-5">
          <button
            onClick={() => setSelectedItem(null)}
            className={`text-[9px] font-mono tracking-[0.15em] transition-all duration-300 hover:scale-105 active:scale-95 px-2 py-1 rounded-sm border w-[72px] flex items-center justify-center ${theme === 'retro'
                ? 'text-[var(--text-accent)] border-[var(--border-main)] hover:border-[var(--border-accent)]'
                : 'text-zinc-500 hover:text-white/80 border-zinc-800 hover:border-zinc-600'
              }`}
            title={lang === 'CN' ? '返回列表' : 'Back to list'}
          >
            <div className="overflow-hidden relative h-4 w-full">
              <div className={`transition-all duration-[1500ms] w-full ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                <div className="h-4 flex items-center shrink-0 w-full leading-none justify-center">← 返回</div>
                <div className="h-4 flex items-center shrink-0 w-full leading-none justify-center">← BACK</div>
              </div>
            </div>
          </button>
          <span 
            className={`${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest transition-colors duration-500`}
            style={theme === 'retro' ? { color: '#8B261D' } : {}}
          >
            {lang === 'CN' ? `迷雾学派：${data.name}` : `MIST: ${data.enName}`}
          </span>
        </div>

        <div className="flex items-center flex-row-reverse gap-4">
          {/* Rightmost Toolbar Group */}
          <div className={`flex items-center gap-1 px-1 py-1 rounded-full transition-all duration-500 border border-transparent hover:border-white/5 backdrop-blur-sm hover:backdrop-blur-md 
            ${theme === 'retro' ? 'hover:bg-[#FDFCF8]/90 hover:border-[#8B261D]/15' : 'hover:bg-black/30'}`}>
            
            {/* 1. Ring Toggle */}
            <button
              onClick={() => setShowRings(!showRings)}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 focus:outline-none ${
                showRings 
                  ? (theme === 'retro' ? 'text-[#8B261D]' : getThemeTextColor()) 
                  : (theme === 'retro' ? 'text-zinc-600 hover:text-black hover:border-black/5' : 'text-zinc-400 hover:text-white')
              }`}
              title={lang === 'CN' ? "背景圆环开关" : "Background Rings Toggle"}
            >
              <Aperture size={14} className={`shrink-0 transition-all duration-300 ${showRings ? 'rotate-180' : ''}`} />
            </button>

            {/* 2. Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-8 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 hover:text-black hover:border-black/5' : 'text-zinc-400 hover:text-white'}`}
              title={theme === 'dark' ? (lang === 'CN' ? "切换为复古主题" : "Switch to Retro") : (lang === 'CN' ? "切换为暗黑主题" : "Switch to Dark")}
            >
              {theme === 'dark' ? <Moon size={14} strokeWidth={2} /> : <Sun size={14} strokeWidth={2} className="text-[#8B261D]" />}
            </button>

            {/* 3. Language Toggle */}
            <button
              onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
              className={`w-8 h-8 flex items-center justify-center rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 hover:text-black hover:border-black/5' : 'text-zinc-400 hover:text-white'}`}
              title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'CN' ? '中' : 'EN'}</span>
            </button>

            {/* 4. Profile / User */}
            <button
              onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
              className={`flex items-center gap-2 group transition-all duration-300 px-2 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95`}
            >
              <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-gold-primary')} border border-[var(--border-main)]/30 flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden group-hover:scale-110 transition-transform`}>
                {currentUser.avatarUrl ? (
                  <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  currentUser.id === 'guest_user' ? <UserIcon size={12} /> : currentUser.username.substring(0, 1).toUpperCase()
                )}
              </div>
              <div className="hidden sm:flex items-center h-4">
                <AnimatedText
                  lang={lang}
                  hClass="h-4"
                  className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}
                  cn={currentUser?.id === 'guest_user' ? '访客' : currentUser.username}
                  en={currentUser?.id === 'guest_user' ? 'GUEST' : currentUser.username}
                />
              </div>
            </button>
          </div>

          {/* Navigation area kept for spacing if needed, but button removed */}
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
                <div className="md:w-80 flex flex-col shrink-0 h-full overflow-hidden">
                  {/* Scrollable Upper Area - Info Card */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-6 space-y-6">
                    <div className={`p-6 rounded-2xl border ${theme === 'retro' ? 'bg-[#EFE9E0]/80 border-[#8B261D]/20 shadow-[0_4px_20px_rgba(139,38,29,0.08)]' : 'bg-[#000000] border-zinc-700/80 shadow-none'} backdrop-blur-xl relative overflow-hidden transition-all duration-500`}>
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-current to-transparent opacity-5 pointer-events-none ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}></div>
                      <div className={`text-[9px] font-mono tracking-[0.2em] uppercase mb-4 flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'}`}>
                        <Database size={12} />
                        <span>CONCEPT DATA CARD</span>
                      </div>
                      <h2 className={`text-3xl font-serif font-black mb-1 leading-tight ${theme === 'retro' ? 'text-black' : 'text-[var(--philosopher-accent)]'}`}>
                        {data.name}
                      </h2>
                      <h3 className={`text-xs font-mono tracking-[0.15em] uppercase mb-6 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--philosopher-accent)] opacity-60'}`}>
                        {data.enName}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex flex-col gap-1">
                          <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}>AUTHOR / SCHOLAR</span>
                          <span className={`text-sm font-serif ${theme === 'retro' ? 'text-black/80 font-bold' : 'text-[var(--philosopher-accent)]/80 font-medium'}`}>
                            {data.author || (activeDictionary === 'MIST' ? '迷雾学派 (Mist School)' : activeDictionary === 'HEGEL' ? 'G.W.F. Hegel' : activeDictionary === 'MARX' ? 'Karl Marx' : activeDictionary === 'LACAN' ? 'Jacques Lacan' : activeDictionary === 'ZIZEK' ? 'Slavoj Žižek' : 'Unknown')}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}>SOURCE TEXT / ORIGIN</span>
                          <span className={`text-xs font-serif italic ${theme === 'retro' ? 'text-black/70' : 'text-zinc-400'}`}>
                            {data.source || (activeDictionary === 'MIST' ? '《迷雾学派辞典》(Mist School Lexicon)' : activeDictionary === 'HEGEL' ? '《精神现象学》(Phenomenology of Spirit)' : 'Archived Text')}
                          </span>
                        </div>
                        {/* Related Concepts */}
                        <div className={`flex flex-col gap-2 pt-4 mt-2 border-t ${theme === 'retro' ? 'border-black/10' : 'border-white/10'}`}>
                          <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}>RELATED NODES</span>
                          <div className="flex flex-wrap gap-3">
                            {(data.related || ['主体 (Subject)', '他者 (The Other)']).map((rel: string, i: number) => (
                              <span key={i} className={`text-xs font-serif underline decoration-dashed underline-offset-4 cursor-pointer transition-colors ${theme === 'retro' ? 'text-[#8B261D]/80 hover:text-black font-medium' : 'text-zinc-400 hover:text-white'}`}>
                                {rel}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fixed Lower Area - Tabs & Navigation */}
                  <div className="mt-auto pt-4 flex flex-col gap-3 shrink-0 bg-transparent z-10">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setDetailActiveTab('DEFINITION')}
                        className={`px-5 py-3.5 rounded-xl border flex items-center gap-3 transition-all duration-300 text-left ${detailActiveTab === 'DEFINITION'
                            ? (theme === 'retro' ? 'bg-[#8B261D] text-white border-transparent shadow-lg' : 'bg-[var(--philosopher-accent)] text-black border-transparent shadow-[0_0_20px_var(--philosopher-glow)]')
                            : (theme === 'retro' ? 'bg-white/40 border-black/10 text-black/60 hover:bg-white/80' : 'bg-transparent border-zinc-700/80 text-zinc-400 hover:bg-white/[0.03]')
                          }`}
                      >
                        <Fingerprint size={16} className={detailActiveTab === 'DEFINITION' ? (theme === 'retro' ? 'text-white' : 'text-black') : dt.accentColor} />
                        <div>
                          <div className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5 ${detailActiveTab === 'DEFINITION' ? (theme === 'retro' ? 'text-white/80' : 'text-black/60') : 'opacity-60'}`}>Part. 1</div>
                          <h3 className={`font-serif tracking-widest text-sm ${detailActiveTab === 'DEFINITION' ? 'font-bold' : ''}`}>{lang === 'CN' ? '核心定义' : 'CORE DEFINITION'}</h3>
                        </div>
                      </button>

                      <button
                        onClick={() => setDetailActiveTab('ANALOGY')}
                        className={`px-5 py-3.5 rounded-xl border flex items-center gap-3 transition-all duration-300 text-left ${detailActiveTab === 'ANALOGY'
                            ? (theme === 'retro' ? 'bg-[#8B261D] text-white border-transparent shadow-lg' : 'bg-[var(--philosopher-accent)] text-black border-transparent shadow-[0_0_20px_var(--philosopher-glow)]')
                            : (theme === 'retro' ? 'bg-white/40 border-black/10 text-black/60 hover:bg-white/80' : 'bg-transparent border-zinc-700/80 text-zinc-400 hover:bg-white/[0.03]')
                          }`}
                      >
                        <Layers size={16} className={detailActiveTab === 'ANALOGY' ? (theme === 'retro' ? 'text-white' : 'text-black') : dt.accentColor} />
                        <div>
                          <div className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5 ${detailActiveTab === 'ANALOGY' ? (theme === 'retro' ? 'text-white/80' : 'text-black/60') : 'opacity-60'}`}>Part. 2</div>
                          <h3 className={`font-serif tracking-widest text-sm ${detailActiveTab === 'ANALOGY' ? 'font-bold' : ''}`}>{lang === 'CN' ? '拓扑类比与案例' : 'TOPOLOGICAL ANALOGY'}</h3>
                        </div>
                      </button>

                      <button
                        onClick={() => setDetailActiveTab('APPLICATION')}
                        className={`px-5 py-3.5 rounded-xl border flex items-center gap-3 transition-all duration-300 text-left ${detailActiveTab === 'APPLICATION'
                            ? (theme === 'retro' ? 'bg-[#8B261D] text-white border-transparent shadow-lg' : 'bg-[var(--philosopher-accent)] text-black border-transparent shadow-[0_0_20px_var(--philosopher-glow)]')
                            : (theme === 'retro' ? 'bg-white/40 border-black/10 text-black/60 hover:bg-white/80' : 'bg-transparent border-zinc-700/80 text-zinc-400 hover:bg-white/[0.03]')
                          }`}
                      >
                        <Zap size={16} className={detailActiveTab === 'APPLICATION' ? (theme === 'retro' ? 'text-white' : 'text-black') : dt.accentColor} />
                        <div>
                          <div className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5 ${detailActiveTab === 'APPLICATION' ? (theme === 'retro' ? 'text-white/80' : 'text-black/60') : 'opacity-60'}`}>Part. 3</div>
                          <h3 className={`font-serif tracking-widest text-sm ${detailActiveTab === 'APPLICATION' ? 'font-bold' : ''}`}>{lang === 'CN' ? '叙事引擎部署' : 'ENGINE COUPLING'}</h3>
                        </div>
                      </button>

                      {/* LEXICON NAV */}
                      <div className={`p-4 rounded-xl border mt-1 ${theme === 'retro' ? 'bg-[#DCD5C5]/30 border-black/5' : 'bg-black/20 border-zinc-700/80'}`}>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            onClick={handlePrevious}
                            className={`p-2 rounded-lg border flex items-center justify-center transition-all ${theme === 'retro' ? 'bg-white/40 border-black/10 hover:bg-white text-black/60' : 'bg-transparent border-zinc-700/80 hover:bg-white/[0.05] text-zinc-500'}`}
                            title={lang === 'CN' ? '上一个' : 'Previous Concept'}
                          >
                            <ChevronLeft size={16} />
                          </button>
                          
                          <button
                            onClick={handleRandom}
                            className={`p-2 rounded-lg border flex items-center justify-center transition-all ${theme === 'retro' ? 'bg-white/40 border-black/10 hover:bg-white text-black/60' : 'bg-transparent border-zinc-700/80 hover:bg-white/[0.05] text-zinc-500'}`}
                            title={lang === 'CN' ? '随机挑选' : 'Random Concept'}
                          >
                            <Dices size={16} />
                          </button>

                          <button
                            onClick={handleNext}
                            className={`p-2 rounded-lg border flex items-center justify-center transition-all ${theme === 'retro' ? 'bg-white/40 border-black/10 hover:bg-white text-black/60' : 'bg-transparent border-zinc-700/80 hover:bg-white/[0.05] text-zinc-500'}`}
                            title={lang === 'CN' ? '下一个' : 'Next Concept'}
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Content Area */}
                <div className={`flex-1 flex flex-col rounded-2xl ${dt.cardBg} overflow-hidden border border-white/5 transition-opacity duration-300`}>
                  {/* Definition Tab Container */}
                  <div 
                    key="tab-container-definition"
                    className={`flex-1 overflow-y-auto p-8 custom-scrollbar ${detailActiveTab === 'DEFINITION' ? 'block animate-in fade-in duration-300' : 'hidden'}`}
                    style={{ transform: 'translateZ(0)' }}
                  >
                    <div className={`text-sm md:text-base ${dt.textColor} font-serif leading-relaxed tracking-wide`}>
                      {renderDetailContent(data.detailed?.definition || "", 'def')}
                    </div>
                  </div>

                  {/* Analogy Tab Container */}
                  <div 
                    key="tab-container-analogy"
                    className={`flex-1 overflow-y-auto p-8 custom-scrollbar ${detailActiveTab === 'ANALOGY' ? 'block animate-in fade-in duration-300' : 'hidden'}`}
                    style={{ transform: 'translateZ(0)' }}
                  >
                    <div className={`text-sm md:text-base ${dt.textColor} font-serif leading-relaxed tracking-wide`}>
                      {renderDetailContent(data.detailed?.analogy || "", 'analogy')}
                    </div>
                  </div>

                  {/* Application Tab Container */}
                  <div 
                    key="tab-container-application"
                    className={`flex-1 overflow-y-auto p-8 custom-scrollbar ${detailActiveTab === 'APPLICATION' ? 'block animate-in fade-in duration-300' : 'hidden'}`}
                    style={{ transform: 'translateZ(0)' }}
                  >
                    <div className={`text-sm md:text-base ${dt.textColor} font-serif leading-relaxed tracking-wide`}>
                      {renderDetailContent(data.detailed?.application || "", 'app')}
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

  const getSectionTheme = () => {
    switch (activeSection) {
      case 'TIMELINE': return 'marx'; // Red (Timeline)
      default: return 'hegel';
    }
  };

  const getSectionColor = (sectionId: string) => {
    switch (sectionId) {
      case 'TIMELINE': return '#ff8a80';
      default: return '#FFD700';
    }
  };

  return (
    <div className={`theme-${getSectionTheme()} ${renderInPlace ? 'relative w-full h-full p-0 flex flex-col' : 'fixed inset-0 z-[100] flex flex-col'} ${theme === 'retro' ? 'bg-[var(--bg-main)]' : (renderInPlace ? 'bg-black/40' : 'bg-[var(--bg-header)]')
      } overflow-hidden transition-all duration-700 ease-in-out`}>
    
    {/* TEXTURE OVERLAY - Smoother than global body::before alone */}
    {theme === 'retro' && (
      <div className="absolute inset-0 pointer-events-none opacity-20 texture-paper animate-in fade-in duration-1000"></div>
    )}
    {!renderInPlace && (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[var(--ring-opacity)]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-[var(--philosopher-accent)]/5 blur-[120px] rounded-full transition-all duration-1000"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-[var(--philosopher-accent)]/3 blur-[120px] rounded-full transition-all duration-1000"></div>
      </div>
    )}

    {/* Background Rings Integration */}
    {!renderInPlace && (
      <div className={`absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none z-0 select-none overflow-hidden transition-all duration-[1500ms] ease-in-out ${showRings
          ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <BorromeanRings centered={false} opacity={0.4} driverType={activeSection as any} vivid={true} />
      </div>
    )}

    {/* HEADER - Matching AppHeader Style */}
    <header className={`h-14 bg-[var(--bg-header)] backdrop-blur-md border-b ${theme === 'retro' ? 'border-[var(--border-main)]' : 'border-white/[0.06]'} flex items-center justify-between px-4 md:px-5 z-50 sticky top-0 shrink-0 transition-all duration-500 animate-page-dissolve relative`}>
      {/* Theme Accent Bottom Line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px z-10 transition-all duration-500" 
        style={{ 
           backgroundColor: theme === 'retro' ? '#8B261D' : 'rgba(212, 175, 55, 0.15)', 
           opacity: theme === 'retro' ? 0.2 : 0.15, 
           boxShadow: theme === 'retro' ? 'none' : '0 0 10px rgba(212,175,55,0.1)' 
        }} 
      />

      {/* Left Section */}
      <div className="flex items-center gap-5">
        <button
          onClick={onClose}
          className={`text-[9px] font-mono tracking-[0.15em] transition-all duration-300 hover:scale-105 active:scale-95 px-2 py-1 rounded-sm border w-[72px] flex items-center justify-center ${theme === 'retro'
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
        <span 
          className={`${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest transition-colors duration-500`}
          style={theme === 'retro' ? { color: '#8B261D' } : {}}
        >
          {lang === 'CN' ? '迷雾学派：迷雾辞典' : 'MIST: DICTIONARY'}
        </span>
      </div>

        {/* Center Section - Search Bar */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center transition-all duration-300">
          <div className="relative group/search">
            <div className={`relative flex items-center ${theme === 'retro' ? 'bg-white/40 border-black/20 group-hover/search:border-black/40 hover:bg-white/60' : 'bg-black/20 border-white/10 hover:bg-black/40'} border rounded-full px-4 py-1.5 transition-all duration-500 w-64 group/input`}>
              <Search size={12} className={`mr-2 shrink-0 transition-colors duration-300 ${theme === 'retro' ? 'text-black/40' : 'text-zinc-500'}`} />
              {!searchQuery && (
                <div className="absolute left-9 right-4 flex items-center pointer-events-none overflow-hidden h-full">
                  <AnimatedText lang={lang} hClass="h-4"
                    className={`text-[10px] uppercase font-bold tracking-[0.1em] transition-all duration-300 ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'} opacity-60`}
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
        <div className="flex items-center justify-end gap-2 ml-auto z-20">
          {/* Rightmost Toolbar Group */}
          <div className={`flex items-center gap-1 px-1 py-1 rounded-full transition-all duration-500 border border-transparent hover:border-white/5 backdrop-blur-sm hover:backdrop-blur-md 
            ${theme === 'retro' ? 'hover:bg-[#FDFCF8]/90 hover:border-[#8B261D]/15' : 'hover:bg-black/30'}`}>
            
            {/* 1. Ring Toggle */}
            <button
              onClick={() => setShowRings(!showRings)}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 focus:outline-none ${
                showRings 
                  ? (theme === 'retro' ? 'text-[#8B261D]' : getThemeTextColor()) 
                  : (theme === 'retro' ? 'text-zinc-600 hover:text-black hover:border-black/5' : 'text-zinc-400 hover:text-white')
              }`}
              title={lang === 'CN' ? "背景圆环开关" : "Background Rings Toggle"}
            >
              <Aperture size={13} className={`shrink-0 transition-all duration-300 ${showRings ? 'rotate-180' : ''}`} />
            </button>

            {/* 2. Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 focus:outline-none ${theme === 'retro' ? 'text-zinc-600 hover:text-black hover:border-black/5' : 'text-zinc-400 hover:text-white'}`}
              title={lang === 'CN' ? '切换主题' : 'Toggle Theme'}
            >
              {theme === 'dark' ? (
                <Moon size={13} strokeWidth={2} className="transition-all duration-300" />
              ) : (
                <Sun size={13} strokeWidth={2} className={`transition-all duration-300 ${theme === 'retro' ? 'text-[#8B261D]' : ''}`} />
              )}
            </button>

            {/* 3. Language Toggle */}
            <button
              onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
              className={`w-8 h-8 flex items-center justify-center rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 hover:text-black hover:border-black/5' : 'text-zinc-400 hover:text-white'}`}
              title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'CN' ? '中' : 'EN'}</span>
            </button>

            {/* 4. Profile / User */}
            <button
              onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
              className={`flex items-center gap-2 group transition-all duration-300 px-2 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95`}
            >
              <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-gold-primary')} border border-[var(--border-main)]/30 flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden group-hover:scale-110 transition-transform`}>
                {currentUser.avatarUrl ? (
                  <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  currentUser.id === 'guest_user' ? <UserIcon size={12} /> : currentUser.username.substring(0, 1).toUpperCase()
                )}
              </div>
              <div className="hidden sm:flex items-center h-4">
                <AnimatedText
                  lang={lang}
                  hClass="h-4"
                  className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}
                  cn={currentUser?.id === 'guest_user' ? '访客' : currentUser.username}
                  en={currentUser?.id === 'guest_user' ? 'GUEST' : currentUser.username}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

    {/* SUBNAV */}
    <nav 
      className={`h-14 border-b border-transparent flex items-center justify-between px-10 shrink-0 relative z-20 transition-all duration-500 ${renderInPlace ? (theme === 'retro' ? 'bg-transparent' : 'bg-black/20') : ''}`}
    >
      <div className="flex items-center gap-10 overflow-x-auto no-scrollbar">
        {[
          { id: 'CONCEPTS', label: lang === 'CN' ? '辞条检索' : 'CONCEPTS', en: 'CONCEPTS', icon: <Search size={16} /> },
          { id: 'PERSONNEL', label: lang === 'CN' ? '人员档案' : 'PERSONNEL', en: 'PERSONNEL', icon: <UserIcon size={16} /> },
          { id: 'RESEARCH', label: lang === 'CN' ? '研究报告' : 'RESEARCH', en: 'RESEARCH', icon: <FileText size={16} /> },
          { id: 'TIMELINE', label: lang === 'CN' ? '哲学时间轴' : 'TIMELINE', en: 'TIMELINE', icon: <Clock size={16} /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveSection(tab.id as CodexSection); setSelectedItem(null); }}
            className={`flex items-center gap-3 transition-all duration-300 relative px-6 py-2 h-10 group/tab rounded-md border-b border-transparent ${activeSection === tab.id
                ? (theme === 'retro' ? 'text-[#8B261D]' : '')
                : (theme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/5' : 'text-zinc-500 hover:text-white')
              }`}
            style={theme !== 'retro' ? {
              backgroundColor: activeSection === tab.id ? `color-mix(in srgb, ${getSectionColor(tab.id)}, transparent 95%)` : 'transparent',
              borderBottom: activeSection === tab.id ? `1px solid color-mix(in srgb, ${getSectionColor(tab.id)}, transparent 60%)` : '1px solid transparent',
              boxShadow: activeSection === tab.id ? `0 0 25px color-mix(in srgb, ${getSectionColor(tab.id)}, transparent 80%)` : '0 0 0px transparent',
              color: activeSection === tab.id ? getSectionColor(tab.id) : undefined
            } : {}}
          >
            <span 
              className={`transition-all duration-500 ${activeSection === tab.id ? 'scale-110' : "group-hover/tab:scale-110"}`}
              style={activeSection === tab.id && theme !== 'retro' ? { color: getSectionColor(tab.id) } : {}}
            >
              {tab.icon}
            </span>
            <div className="flex flex-col items-start justify-center">
              <span 
                className={`text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 ${activeSection === tab.id ? '' : 'text-zinc-500 group-hover/tab:text-zinc-300'}`}
                style={activeSection === tab.id && theme !== 'retro' ? { color: getSectionColor(tab.id) } : {}}
              >
                {lang === 'CN' ? tab.label : tab.en}
              </span>
            </div>

            {theme !== 'retro' && (
              <div 
                className={`absolute inset-x-4 bottom-0.5 h-[1.5px] blur-[1.5px] z-10 rounded-full transition-all duration-500 ${activeSection === tab.id ? 'opacity-50 scale-100' : 'opacity-0 scale-50'}`}
                style={{ backgroundColor: getSectionColor(tab.id) }}
              ></div>
            )}
            {activeSection === tab.id && theme === 'retro' && (
              <div className={`absolute bottom-[-1px] left-0 right-0 h-px bg-[#8B261D]`}></div>
            )}
          </button>
        ))}
      </div>

      {renderInPlace && onToggleExpand && (
        <button
          onClick={onToggleExpand}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all duration-300 group shrink-0 ${theme === 'retro'
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
      {activeSection === 'TIMELINE' && <PhilosophyTimeline lang={lang} />}
    </main>

    {/* DETAIL MODAL OVERLAY */}
    {renderDetailView()}

    {/* SCANLINE EFFECT */}
    <div className="absolute inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

    {/* FOOTER BAR */}
    {!renderInPlace && (
      <footer className={`h-10 border-t border-transparent bg-[var(--bg-panel)]/40 flex items-center justify-between px-8 shrink-0 text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em] relative z-20`}>
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
