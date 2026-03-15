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
  X
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { DriverType, User } from '../types';
import { PhilosophyTimeline } from './PhilosophyTimeline';
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
  renderInPlace?: boolean;
  onToggleExpand?: () => void;
  isExpanded?: boolean;
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
  showRings,
  setShowRings,
  renderInPlace = false,
  onToggleExpand,
  isExpanded = false
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<CodexSection>('CONCEPTS');
  const [activeDictionary, setActiveDictionary] = useState<string>('LACAN');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

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
    return 'border-white/10';
  };

  // --- Theme Utility for UI Elements ---
  const themeColors = {
    accent: getThemeTextColor(),
    border: getThemeBorderColor(),
    bg: (theme === 'retro') ? 'bg-[#8B261D]' : 'bg-white',
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
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-500 ${
      renderInPlace 
        ? 'bg-transparent' 
        : (theme === 'retro' ? 'bg-transparent' : 'bg-black/40 backdrop-blur-sm rounded-xl border border-zinc-800/50 shadow-2xl')
    }`}>
      <div className={`h-14 flex items-center gap-2 px-6 border-b ${theme === 'retro' ? 'border-[var(--border-main)] bg-transparent' : 'border-white/10'} overflow-x-auto no-scrollbar shrink-0 transition-all duration-500`}>
        {Object.entries(dictionaries).map(([id, info]) => (
          <button
            key={id}
            onClick={() => setActiveDictionary(id)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-all whitespace-nowrap border ${
              activeDictionary === id 
                ? (theme === 'retro' ? 'bg-[var(--text-accent)] text-white shadow-md border-transparent' : 'bg-black text-white border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]')
                : (theme === 'retro' ? 'text-[#8B261D] hover:bg-black/5 border-transparent' : 'text-white hover:bg-white/5 border-transparent')
            }`}
          >
            {info.icon}
            {info.name}
          </button>
        ))}
      </div>
      
      <div className={`flex-1 overflow-y-auto ${renderInPlace ? 'p-8 pt-10' : 'p-6'} custom-scrollbar`}>
        {filteredConcepts.map((category: any) => (
          <div key={category.id} className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-10 h-px ${theme === 'retro' ? 'bg-[var(--border-main)]' : 'bg-white/10'}`}></div>
              <h3 className={`text-2xl font-serif tracking-widest leading-none ${theme === 'retro' ? 'text-[var(--text-accent)] font-black' : 'text-white'}`}>
                {lang === 'CN' ? category.name : category.enName}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.concepts.map((concept: LacanConcept) => (
                <button
                  key={concept.id}
                  onClick={() => setSelectedItem({ type: 'CONCEPT', data: concept })}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-700 hover:-translate-y-1.5 overflow-hidden border ${
                    theme === 'retro'
                      ? 'bg-white/[0.01] border-transparent backdrop-blur-2xl hover:border-[var(--border-accent)] hover:bg-white hover:backdrop-blur-none shadow-none hover:shadow-[0_45px_100px_rgba(139,38,29,0.1)]'
                      : 'bg-white/[0.01] border-transparent backdrop-blur-2xl hover:bg-black hover:border-white/20 hover:backdrop-blur-none shadow-none hover:shadow-[0_45px_100px_rgba(0,0,0,0.6)]'
                  }`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-current to-transparent opacity-0 group-hover:opacity-[0.03] transition-opacity ${theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-white'}`}></div>
                  <h4 className={`text-xl font-serif mb-1 tracking-wide ${theme === 'retro' ? 'text-black font-extrabold group-hover:text-[var(--text-accent)]' : 'text-white'}`}>{concept.name}</h4>
                  <p className={`text-[10px] font-mono mb-5 uppercase tracking-[0.2em] font-black ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'}`}>{concept.enName}</p>
                  <p className={`text-[13px] leading-relaxed line-clamp-4 font-light tracking-wide ${theme === 'retro' ? 'text-black/80 font-medium' : 'text-zinc-300'}`}>{concept.shortDef}</p>
                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}>Access Link</span>
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
          className={`group relative transition-all duration-700 cursor-pointer flex flex-col md:flex-row h-full md:h-72 rounded-2xl overflow-hidden border ${
            theme === 'retro' 
              ? 'bg-white/[0.01] border-transparent backdrop-blur-2xl hover:border-[var(--border-accent)] hover:bg-white hover:backdrop-blur-none shadow-none hover:shadow-[0_45px_100px_rgba(139,38,29,0.1)] hover:-translate-y-1.5'
              : 'bg-white/[0.01] border-transparent backdrop-blur-2xl hover:bg-black hover:border-white/20 hover:backdrop-blur-none shadow-none hover:shadow-[0_45px_100px_rgba(0,0,0,0.6)] hover:-translate-y-1.5'
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
                className={`text-2xl font-serif mb-1 group-hover:text-gold-primary transition-colors ${theme === 'retro' ? 'text-black font-extrabold' : 'text-white'}`}
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
                className={`text-sm leading-relaxed line-clamp-2 ${theme === 'retro' ? 'text-black/80 font-medium' : 'text-zinc-500'}`}
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
    
    // Split into lines to process block elements
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    
    let listItems: React.ReactNode[] = [];
    let listType: 'ul' | 'ol' | null = null;

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

    lines.forEach((line, index) => {
      // Process bold, italic, and inline code with regex
      const processInline = (str: string) => {
        let parts: (string | React.ReactNode)[] = [str];
        
        // Bold: **text**
        parts = parts.flatMap(part => {
          if (typeof part !== 'string') return [part];
          const split = part.split(/(\*\*.*?\*\*)/);
          return split.map(p => {
            if (p.startsWith('**') && p.endsWith('**')) {
              return <strong key={Math.random()} className={`font-bold ${theme === 'retro' ? 'text-black' : 'text-white'}`}>{p.slice(2, -2)}</strong>;
            }
            return p;
          });
        });

        // Italic: *text* (avoiding double stars)
        parts = parts.flatMap(part => {
          if (typeof part !== 'string') return [part];
          const split = part.split(/(\*[^\*].*?\*)/);
          return split.map(p => {
            if (p.startsWith('*') && p.endsWith('*') && !p.startsWith('**')) {
              return <em key={Math.random()} className="italic opacity-90">{p.slice(1, -1)}</em>;
            }
            return p;
          });
        });

        // Inline Code: `text`
        parts = parts.flatMap(part => {
          if (typeof part !== 'string') return [part];
          const split = part.split(/(`.*?`)/);
          return split.map(p => {
            if (p.startsWith('`') && p.endsWith('`')) {
              return <code key={Math.random()} className={`px-1.5 py-0.5 rounded font-mono text-xs ${theme === 'retro' ? 'bg-black/5 text-[#8B261D]' : 'bg-white/10 text-amber-500'}`}>{p.slice(1, -1)}</code>;
            }
            return p;
          });
        });

        return parts;
      };

      // Header: ### text
      if (line.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={index} className={`text-xl font-serif mt-10 mb-6 font-bold tracking-wider ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>{processInline(line.slice(4))}</h3>);
      }
      // Ordered list: 1. text
      else if (/^\d+\.\s/.test(line)) {
        if (listType !== 'ol') flushList();
        listType = 'ol';
        listItems.push(<li key={index} className="leading-relaxed">{processInline(line.replace(/^\d+\.\s/, ''))}</li>);
      }
      // Unordered list: * text or - text
      else if (/^[\*\-]\s/.test(line)) {
        if (listType !== 'ul') flushList();
        listType = 'ul';
        listItems.push(<li key={index} className="leading-relaxed">{processInline(line.slice(2))}</li>);
      }
      // Empty line
      else if (line.trim() === '') {
        flushList();
        elements.push(<div key={index} className="h-4"></div>);
      }
      // Normal paragraph
      else {
        if (listType) {
          listType = null;
          flushList();
        }
        elements.push(<p key={index} className="leading-[1.8] mb-6 tracking-wide font-light">{processInline(line)}</p>);
      }
    });

    flushList();
    return elements;
  };

  const renderDetailView = () => {
    if (!selectedItem) return null;
    
    const isConcept = selectedItem.type === 'CONCEPT';
    const isPersonnel = selectedItem.type === 'PERSONNEL';
    const isResearch = selectedItem.type === 'RESEARCH';
    const data = selectedItem.data;

    // Theme values for the detail view
    const dt = {
      overlayBg: theme === 'retro' ? 'bg-[#EFE9E0]/90 backdrop-blur-md' : 'bg-[#050505]/95 backdrop-blur-2xl',
      headerBg: theme === 'retro' ? 'bg-transparent border-black/10' : 'bg-black/20 border-white/5',
      textColor: theme === 'retro' ? 'text-black/80' : 'text-zinc-300',
      titleColor: theme === 'retro' ? 'text-[#8B261D]' : 'text-white',
      accentColor: theme === 'retro' ? 'text-[#8B261D]' : themeColors.accent,
      cardBg: theme === 'retro' ? 'bg-white/40 border-black/5 shadow-sm' : 'bg-white/[0.02] border-white/5 shadow-2xl',
      sidebarBg: theme === 'retro' ? 'bg-[#8B261D]/5 border-black/5' : 'bg-white/[0.03] border-white/5',
    };

    return (
      <div className={`fixed inset-0 z-[100] ${dt.overlayBg} flex flex-col animate-in fade-in zoom-in-95 duration-500 overflow-hidden`}>
        {/* Detail Header */}
        <div className={`h-16 border-b ${dt.headerBg} flex items-center justify-between px-8 relative z-20`}>
          <button 
            onClick={() => setSelectedItem(null)}
            className={`flex items-center gap-3 transition-all group ${theme === 'retro' ? 'text-black/60 hover:text-black' : 'text-zinc-500 hover:text-white'}`}
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">
              {lang === 'CN' ? '返回索引' : 'BACK TO INDEX'}
            </span>
          </button>
          
          <div className={`flex items-center gap-6 text-[9px] font-mono font-bold tracking-widest ${theme === 'retro' ? 'text-black/20' : 'text-zinc-600'}`}>
             <span className="flex items-center gap-2">
                <div className={`w-1 h-1 rounded-full ${theme === 'retro' ? 'bg-[#8B261D]' : 'bg-green-500'} animate-pulse`}></div> 
                {lang === 'CN' ? '双向加密通路' : 'ENCRYPTED DUPLEX'}
             </span>
             <span className="hidden md:flex items-center gap-2 underline decoration-current/30 decoration-dotted underline-offset-4">HOST: MIST_TOPOLOGY_v2.4.0</span>
          </div>

          <button 
            onClick={() => setSelectedItem(null)}
            className={`p-2 rounded-full transition-all ${theme === 'retro' ? 'hover:bg-black/5 text-black/40' : 'hover:bg-white/5 text-white/40 hover:text-white'}`}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
          {/* Background Decorative Rings (Very faint) */}
          <div className="absolute inset-x-0 top-0 h-[800px] pointer-events-none opacity-[0.05] z-0 flex items-center justify-center overflow-hidden">
             <BorromeanRings centered={true} opacity={1} driverType={driverType || undefined} vivid={true} />
          </div>

          <div className="max-w-6xl mx-auto py-12 md:py-20 px-8 relative z-10">
            {isConcept && (
               <div className="animate-in slide-in-from-bottom-8 duration-700">
                  <div className="mb-16 text-center md:text-left">
                     <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                        <div className={`w-12 h-px ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-white/10'}`}></div>
                        <span className={`text-xs font-bold uppercase tracking-[0.5em] py-1 px-3 rounded-full border ${theme === 'retro' ? 'border-[#8B261D]/20 text-[#8B261D]' : 'border-white/10 text-[var(--accent-color)] bg-white/5'}`}>
                           {data.category}
                        </span>
                     </div>
                     <h1 className={`text-5xl md:text-8xl font-serif ${dt.titleColor} mb-6 tracking-tighter leading-none`}>
                        {data.name}
                     </h1>
                     <div className={`text-sm md:text-lg font-mono uppercase tracking-[0.4em] mb-12 opacity-50 ${dt.textColor}`}>
                        {data.enName}
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
                     {/* Main Content Column */}
                     <div className="lg:col-span-8 space-y-16">
                        {/* 1. Definition Section */}
                        <section className="relative">
                           <div className={`absolute -left-8 top-0 bottom-0 w-[2px] ${theme === 'retro' ? 'bg-[#8B261D]/10' : 'bg-white/5'}`}></div>
                           <h2 className={`text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-3 ${dt.accentColor}`}>
                              <Fingerprint size={16} /> {lang === 'CN' ? '核心定义' : 'CORE DEFINITION'}
                           </h2>
                           <div className={`text-xl md:text-2xl ${dt.textColor} font-serif leading-relaxed italic opacity-95`}>
                              {renderMarkdown(data.detailed?.definition || data.shortDef)}
                           </div>
                        </section>
                        
                        {/* 2. Analogy Section */}
                        <section>
                           <h2 className={`text-xs font-bold uppercase tracking-[0.3em] mb-8 border-b ${theme === 'retro' ? 'border-black/5' : 'border-white/5'} pb-4 flex items-center gap-3 ${dt.accentColor}`}>
                              <Layers size={16} /> {lang === 'CN' ? '拓扑类比与案例' : 'TOPOLOGICAL ANALOGY'}
                           </h2>
                           <div className={`text-base md:text-lg ${dt.textColor} leading-loose space-y-4`}>
                              {renderMarkdown(data.detailed?.analogy)}
                           </div>
                        </section>

                        {/* 3. Engine Application Section */}
                        <section className={`p-8 md:p-12 rounded-3xl ${dt.cardBg}`}>
                           <h2 className={`text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-3 ${dt.accentColor}`}>
                              <Zap size={16} /> {lang === 'CN' ? '叙事引擎部署指示' : 'ENGINE COUPLING'}
                           </h2>
                           <div className={`text-sm md:text-base ${dt.textColor} leading-relaxed opacity-80`}>
                              {renderMarkdown(data.detailed?.application)}
                           </div>
                        </section>
                     </div>
                     
                     {/* Sidebar Info Column */}
                     <div className="lg:col-span-4 space-y-8">
                        {/* Parameters Component */}
                        <div className={`p-8 rounded-3xl border ${dt.sidebarBg}`}>
                           <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3 ${theme === 'retro' ? 'text-black/40' : 'text-zinc-500'}`}>
                              <Activity size={14} /> {lang === 'CN' ? '主体拓扑参数' : 'TOPOLOGY METRICS'}
                           </h4>
                           <div className="space-y-6">
                              {[
                                 { label: 'Eros Intensity', val: 78 },
                                 { label: 'Symbolic Load', val: 42 },
                                 { label: 'Real Encroachment', val: 15 },
                                 { label: 'Graph Complexity', val: 64 }
                              ].map(param => (
                                <div key={param.label} className="space-y-2">
                                   <div className="flex items-center justify-between px-1">
                                      <span className={`text-[9px] font-mono tracking-widest uppercase ${theme === 'retro' ? 'text-black/50' : 'text-zinc-600'}`}>{param.label}</span>
                                      <span className={`text-[9px] font-mono font-bold ${theme === 'retro' ? 'text-black' : 'text-zinc-400'}`}>{param.val}%</span>
                                   </div>
                                   <div className={`h-1.5 w-full rounded-full overflow-hidden ${theme === 'retro' ? 'bg-black/[0.03]' : 'bg-white/[0.03]'}`}>
                                      <div 
                                         className={`h-full transition-all duration-[2s] ${theme === 'retro' ? 'bg-[#8B261D]' : themeColors.bg}`} 
                                         style={{width: `${param.val}%`}}
                                      ></div>
                                   </div>
                                </div>
                              ))}
                           </div>
                        </div>
                        
                        {/* Note Component */}
                        <div className={`p-8 rounded-3xl border border-dashed ${theme === 'retro' ? 'border-black/10 bg-transparent' : 'border-white/10 bg-transparent'}`}>
                           <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-3 ${theme === 'retro' ? 'text-black/40' : 'text-zinc-500'}`}>
                              <Eye size={14} /> {lang === 'CN' ? '观测记录' : 'OBSERVATION NOTES'}
                           </h4>
                           <p className={`text-[11px] font-light leading-relaxed italic ${dt.textColor} opacity-60`}>
                              "Subjective stabilization requires the persistent use of the symbolic net. Failure to suture these concepts in a coherent chain may lead to total Imaginary collapse."
                           </p>
                        </div>

                        {/* Share/Actions */}
                        <div className="flex flex-col gap-3">
                           <button className={`w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
                              theme === 'retro' 
                                ? 'border-[#8B261D] text-[#8B261D] hover:bg-[#8B261D] hover:text-white' 
                                : 'border-white/10 text-white hover:bg-white/5 active:scale-95'
                           }`}>
                              {lang === 'CN' ? '导出档案副本' : 'EXPORT DATA COPY'}
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
            
            {/* Personnel & Research could have similar refined templates here if needed */}
            {!isConcept && (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                <Database size={48} className="text-zinc-700 animate-pulse" />
                <h2 className="text-2xl font-serif text-zinc-400">DATA UNDER RECONSTRUCTION</h2>
                <p className="text-sm text-zinc-600 font-mono">ENCRYPTED_OFFSET_ERROR: Please retry access from Global Index.</p>
                <button onClick={() => setSelectedItem(null)} className="px-10 py-2 border border-zinc-700 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-200 hover:border-zinc-200 transition-all">CLOSE_CONNECTION</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${renderInPlace ? 'relative w-full h-full p-0 flex flex-col' : 'fixed inset-0 z-[100] flex flex-col'} ${
      theme === 'retro' ? 'bg-transparent' : (renderInPlace ? 'bg-black/40' : 'bg-[var(--bg-main)]')
    } overflow-hidden transition-all duration-500`}>
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

      {/* HEADER - Replicating AppHeader Style EXACTLY */}
      {!renderInPlace && (
        <header className={`h-14 bg-[var(--bg-header)] backdrop-blur-md border-b ${getThemeBorderColor()} flex items-center justify-between px-6 z-50 sticky top-0 shrink-0 transition-all duration-500`}>
          {/* Left Section */}
          <div className="flex items-center gap-5">
            <button
              onClick={onClose}
              className={`flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:bg-white/5 hover:scale-105 active:scale-95 w-[72px] justify-start`}
            >
              <Globe size={14} className={`shrink-0 transition-all duration-100 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />
              <div className="hidden md:block w-full">
                <AnimatedText
                  lang={lang}
                  hClass="h-4"
                  className="w-full"
                  cn={<div className="w-full">返回全局</div>}
                  en={<div className="w-full">GLOBAL</div>}
                />
              </div>
            </button>
            <AnimatedText
              lang={lang}
              hClass="h-4"
              className={`${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest`}
              cn="迷雾学派：迷雾辞典"
              en="MIST: DICTIONARY"
            />
          </div>

          {/* Center Section - Integrated Search */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center">
            <div className="relative group">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 z-20 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500 group-focus-within:text-[var(--text-accent)]'}`} size={14} />
              <div className="absolute inset-0 left-9 right-4 flex items-center pointer-events-none z-10 overflow-hidden">
                {!searchQuery && (
                   <AnimatedText
                     lang={lang}
                     hClass="h-4"
                     className={`text-[10px] uppercase font-bold tracking-[0.1em] ${theme === 'retro' ? 'text-black/40' : 'text-zinc-600'}`}
                     cn="搜索哲学档案..."
                     en="Search codex..."
                   />
                )}
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={`w-64 bg-[var(--bg-panel)]/50 border ${getThemeBorderColor()} rounded-full py-1.5 pl-9 pr-4 text-[10px] focus:outline-none focus:border-[var(--text-accent)] transition-all text-[var(--text-main)] placeholder-transparent font-sans shadow-inner tracking-widest relative z-20`} 
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center flex-row-reverse gap-4">
            {/* Rightmost 4 Buttons Group */}
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

              {/* 2. Language Toggle */}
              <button
                onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
                className={`text-[10px] font-bold ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'} transition-all duration-300 w-7 h-7 flex items-center justify-center rounded-sm tracking-widest hover:bg-white/5 hover:scale-110 active:scale-90`}
                title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
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
            <div className="flex items-center gap-2 mr-4 text-zinc-400">
              {[
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
           { id: 'TIMELINE', label: lang === 'CN' ? '哲学时间轴' : 'TIMELINE', en: 'TIMELINE', icon: <Clock size={16} /> },
         ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveSection(tab.id as CodexSection); setSelectedItem(null); }}
              className={`flex items-center gap-3 transition-all relative px-6 py-2 h-10 group/tab rounded-md border ${
                activeSection === tab.id 
                  ? (theme === 'retro' ? 'text-[#8B261D] border-transparent' : 'text-white bg-black shadow-[0_0_20px_rgba(0,0,0,0.8)] border-white/10') 
                  : (theme === 'retro' ? 'text-[#8B261D] hover:text-[#8B261D] border-transparent' : 'text-white hover:text-white border-transparent')
              }`}
            >
              <span className={`transition-all duration-500 ${activeSection === tab.id ? (theme === 'retro' ? 'text-[#8B261D]' : 'text-white') + ' scale-110' : "group-hover/tab:scale-110"}`}>{tab.icon}</span>
              <div className="flex flex-col items-start justify-center">
                 <span className={`text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 opacity-100 group-hover/tab:opacity-100`}>
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
