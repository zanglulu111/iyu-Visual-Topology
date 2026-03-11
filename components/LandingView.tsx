
import React, { useState, useEffect } from 'react';
import { DriverSelector } from './DriverSelector';
import { DriverType, User } from '../types';
import { Globe, Wand2, HelpCircle, History as HistoryIcon, Settings, User as UserIcon, BookOpen, Terminal, Database, ShieldAlert, Cpu, Film, Folder, Aperture, Zap, Sun, Moon } from 'lucide-react';
import { ProductManualModal } from './ProductManualModal';
import { SutureModal } from './SutureModal';
import { HistoryModal } from './HistoryModal';
import { BorromeanRings } from './BorromeanRings';
import { ArchiveContent } from './ArchiveContent';
import { PhilosophyCodexPage } from './PhilosophyCodexPage';
import { useTheme } from '../contexts/ThemeContext';



const AnimatedText = ({ cn, en, lang, className = "", hClass = "h-5" }: { cn: React.ReactNode, en: React.ReactNode, lang: 'CN' | 'EN', className?: string, hClass?: string }) => (
  <div className={`overflow-hidden relative flex items-start ${hClass}`}>
    <div className={`transition-all duration-700 w-full cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
      <div className="flex flex-col w-full">
        <div className={`${hClass} flex items-center shrink-0 w-full ${className}`}>
          {cn}
        </div>
        <div className={`${hClass} flex items-center shrink-0 w-full ${className}`}>
          {en}
        </div>
      </div>
    </div>
  </div>
);

interface LandingViewProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1) => void;
  setViewMode: (mode: any) => void;
  selectedDriver: DriverType | null;
  onDriverSelect: (id: DriverType) => void;
  hoveredDriver: DriverType | null;
  setHoveredDriver: (id: DriverType | null) => void;
  handleOpenMetonymyPage: () => void;
  openManual: () => void;
  isManualOpen: boolean;
  closeManual: () => void;
  openHistory: () => void;
  isHistoryOpen: boolean;
  closeHistory: () => void;
  isSutureOpen: boolean;
  closeSuture: () => void;
  onSutureGenerate: any;
  isSutureGenerating: boolean;
  history: any[];
  onHistoryRestore: any;
  onHistoryClear: any;
  openSettings: () => void;
  openAuth: () => void;
  openProfile: () => void;
  currentUser: User;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
}

enum ProtocolType {
  CORE_DRIVERS = 'CORE_DRIVERS',
  UTILITIES = 'UTILITIES',
  CONFIDENTIAL = 'CONFIDENTIAL',
  DICTIONARY = 'DICTIONARY',
  RSI = 'RSI',
  TOPOLOGY = 'TOPOLOGY'
}

export const LandingView: React.FC<LandingViewProps> = ({
  lang,
  setLang,
  setPage,
  setViewMode,
  selectedDriver,
  onDriverSelect,
  hoveredDriver,
  setHoveredDriver,
  handleOpenMetonymyPage,
  openManual,
  isManualOpen,
  closeManual,
  openHistory,
  isHistoryOpen,
  closeHistory,
  isSutureOpen,
  closeSuture,
  onSutureGenerate,
  isSutureGenerating,
  history,
  onHistoryRestore,
  onHistoryClear,
  openSettings,
  openAuth,
  currentUser,
  openProfile,
  showRings,
  setShowRings,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [selectedProtocol, setSelectedProtocol] = useState<ProtocolType>(ProtocolType.CORE_DRIVERS);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const getGlowTheme = (driverId: DriverType | null) => {
    if (theme === 'retro') return 'shadow-none';
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'shadow-cyan-500/10';
      case DriverType.NARRATIVE: return 'shadow-yellow-500/10';
      case DriverType.AESTHETIC: return 'shadow-rose-500/10';
      case DriverType.EXPERIMENTAL: return 'shadow-purple-500/10';
      case DriverType.TRAILER: return 'shadow-orange-500/10';
      default: return 'shadow-zinc-500/5';
    }
  };

  const getAccentColor = (driverId: DriverType | null) => {
    if (theme === 'retro') return 'text-black';
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'text-mist-cyan';
      case DriverType.NARRATIVE: return 'text-mist-gold';
      case DriverType.AESTHETIC: return 'text-mist-rose';
      case DriverType.EXPERIMENTAL: return 'text-mist-purple';
      case DriverType.TRAILER: return 'text-mist-orange';
      default: return 'text-white/80';
    }
  };

  const getBorderAccentColor = (driverId: DriverType | null) => {
    if (theme === 'retro') return 'border-black/60';
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'border-mist-cyan';
      case DriverType.NARRATIVE: return 'border-mist-gold';
      case DriverType.AESTHETIC: return 'border-mist-rose';
      case DriverType.EXPERIMENTAL: return 'border-mist-purple';
      case DriverType.TRAILER: return 'border-mist-orange';
      default: return 'border-zinc-800';
    }
  };

  const getLineGlow = (driverId: DriverType | null) => {
    if (theme === 'retro' || !driverId) return '';
    switch (driverId) {
      case DriverType.COMMERCIAL: return '0 0 10px rgba(34,211,238,0.3)';
      case DriverType.NARRATIVE: return '0 0 10px rgba(212,175,55,0.3)';
      case DriverType.AESTHETIC: return '0 0 10px rgba(251,113,133,0.3)';
      case DriverType.EXPERIMENTAL: return '0 0 10px rgba(192,132,252,0.3)';
      case DriverType.TRAILER: return '0 0 10px rgba(251,146,60,0.3)';
      default: return '';
    }
  };

  const getHeaderShadow = (driverId: DriverType | null) => {
    if (theme === 'retro' || !driverId) return '';
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'shadow-[0_8px_30px_-5px_rgba(34,211,238,0.25)]';
      case DriverType.NARRATIVE: return 'shadow-[0_8px_30px_-5px_rgba(212,175,55,0.25)]';
      case DriverType.AESTHETIC: return 'shadow-[0_8px_30px_-5px_rgba(251,113,133,0.25)]';
      case DriverType.EXPERIMENTAL: return 'shadow-[0_8px_30px_-5px_rgba(192,132,252,0.25)]';
      case DriverType.TRAILER: return 'shadow-[0_8px_30px_-5px_rgba(251,146,60,0.25)]';
      default: return '';
    }
  };


  const signalLogs = [
    { id: 1, type: "SYS", time: "09:12:44", msg: "Establishing secure connection to the Real..." },
    { id: 2, type: "WARN", time: "09:15:01", msg: "Symbolic chain unstable. Suture recommended." },
    { id: 3, type: "INTEL", time: "09:42:18", msg: "Aesthetic Core updated: New trauma topologies detected." },
    { id: 4, type: "SYS", time: "10:04:55", msg: "Phenomenological reduction initiated. Purging semantics." },
  ];

  return (
    <div 
      className="fixed inset-0 flex flex-col bg-[var(--bg-main)] selection:bg-[var(--selection-bg)] selection:text-[var(--text-accent)] z-50 overflow-hidden font-sans transition-colors duration-500"
      style={theme === 'retro' ? { backgroundImage: 'var(--pattern-aged)', backgroundBlendMode: 'multiply' } : {}}
    >

      {/* Global Top Navbar */}
      <header className={`shrink-0 z-50 backdrop-blur-md h-14 flex items-center justify-between px-6 transition-all duration-500 ${theme === 'retro' ? 'bg-transparent' : 'bg-[var(--bg-header)]'} ${
        theme === 'dark' ? 'border-b border-white/10' : (theme === 'retro' ? 'border-b border-[var(--border-main)]' : '')
      } ${getHeaderShadow(hoveredDriver)} relative`}>
        {/* Theme Divider Line - Accent Line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500 z-10" 
          style={{ 
            backgroundColor: getBorderAccentColor(hoveredDriver) as string,
            boxShadow: getLineGlow(hoveredDriver)
          }} 
        />
        <div className="flex items-center gap-4">
          <button
            onClick={() => setPage(-1)}
            className={`text-[9px] font-mono tracking-[0.15em] transition-all duration-300 hover:scale-105 active:scale-95 px-2 py-1 rounded-sm border ${
              theme === 'retro'
                ? 'text-[var(--text-muted)] hover:text-[var(--text-accent)] border-[var(--border-main)] hover:border-[var(--border-accent)]'
                : 'text-zinc-500 hover:text-white/80 border-zinc-800 hover:border-zinc-600'
            }`}
            title={lang === 'CN' ? '返回迷雾学派入口' : 'Return to Mist Portal'}
          >
            ← {lang === 'CN' ? '入口' : 'PORTAL'}
          </button>
          <Terminal size={14} className={`shrink-0 transition-colors duration-500 ${hoveredDriver ? getAccentColor(hoveredDriver) : 'text-[var(--text-main)] opacity-70'}`} />
          <AnimatedText
            lang={lang}
            hClass="h-4"
            className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 ${hoveredDriver ? '' : 'opacity-80'}`}
            cn={<span className={`whitespace-nowrap transition-colors duration-500 ${hoveredDriver ? getAccentColor(hoveredDriver) : 'text-[var(--text-main)]'}`}>主体观测中心 // 序列号: MIST-O-1</span>}
            en={<span className={`whitespace-nowrap transition-colors duration-500 ${hoveredDriver ? getAccentColor(hoveredDriver) : 'text-[var(--text-main)]'}`}>SUBJECT OBSERVATION CENTER // SEQ: MIST-O-1</span>}
          />
        </div>

        {/* Center: Search Bar */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3">
          <div className="relative group/search">
            <div className={`relative flex items-center ${theme === 'retro' ? 'bg-white/40 border-black/20 group-hover/search:border-black/40 hover:bg-white/60' : 'bg-black/20 border-white/10 hover:bg-black/40'} border ${hoveredDriver && theme !== 'retro' ? getBorderAccentColor(hoveredDriver) : ''} rounded-full px-4 py-1.5 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-lg w-64 md:w-80 group/input`}>
              <Terminal size={12} className={`mr-2 transition-colors duration-500 ${hoveredDriver && theme !== 'retro' ? getAccentColor(hoveredDriver) : (theme === 'retro' ? 'text-black/40' : 'text-zinc-500')} group-hover/input:scale-110 transition-transform duration-300`} />
              <input 
                type="text" 
                placeholder={lang === 'CN' ? '搜索协议、档案或理论词条...' : 'Search protocols, archives or codex...'}
                className={`bg-transparent border-none outline-none text-[10px] uppercase font-bold tracking-[0.1em] text-[var(--text-main)] ${theme === 'retro' ? 'placeholder:text-black/40' : 'placeholder:text-zinc-400'} w-full transition-all duration-300 focus:tracking-[0.15em]`}
              />
              <div className="ml-2 flex items-center gap-1 opacity-40 group-hover/input:opacity-80 transition-opacity">
                <span className={`text-[8px] font-mono border ${theme === 'retro' ? 'border-black/20' : 'border-white/20'} px-1 rounded`}>⌘</span>
                <span className={`text-[8px] font-mono border ${theme === 'retro' ? 'border-black/20' : 'border-white/20'} px-1 rounded`}>K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Area: From Right to Left: Profile, Lang, Theme, Rings */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center flex-row-reverse gap-4">
            {/* 1. Profile (Avatar + Name) */}
            <button
              onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
              className="flex items-center gap-2 group transition-all duration-100 hover:scale-105"
            >
              <div className="flex items-center flex-row-reverse gap-2">
                <div className={`w-5 h-5 rounded-full ${!currentUser?.avatarUrl && (currentUser?.avatarColor || 'bg-gold-primary')} border shadow-sm overflow-hidden transition-all duration-500 ${theme === 'dark' ? (hoveredDriver ? getBorderAccentColor(hoveredDriver) : 'border-black') : 'border-[var(--border-main)]/30'} flex items-center justify-center text-[10px] font-bold text-white`}>
                  {currentUser?.avatarUrl ? (
                    <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <UserIcon size={12} className={`transition-colors duration-500 ${hoveredDriver && theme === 'dark' ? getAccentColor(hoveredDriver) : 'text-[var(--text-accent)]'}`} />
                  )}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${hoveredDriver && theme === 'dark' ? getAccentColor(hoveredDriver) : (theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--text-muted)]')} group-hover:text-[var(--text-main)]`}>
                  {currentUser?.username || 'GUEST'}
                </span>
              </div>
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
                    ? (theme === 'retro' ? 'text-[#8B261D]' : (hoveredDriver ? getAccentColor(hoveredDriver) : 'text-white')) 
                    : (theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white')
                }`}
                title={lang === 'CN' ? "背景圆环开关" : "Background Rings Toggle"}
              >
                <Aperture size={14} className={`shrink-0 transition-all duration-300 ${showRings ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Ambient Glow */}
        {theme !== 'retro' && (
          <div className={`absolute inset-0 pointer-events-none transition-shadow duration-1000 opacity-20 shadow-[inset_0_0_150px_rgba(0,0,0,1)] ${getGlowTheme(hoveredDriver)}`}></div>
        )}

        {/* Background Rings */}
        <div className={`absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none z-0 select-none overflow-hidden transition-all duration-[1500ms] ease-in-out ${
          showRings 
            ? 'opacity-[var(--ring-opacity)] scale-[1.1] translate-y-0 rotate-0' 
            : 'opacity-0 scale-[1.3] translate-y-20 rotate-12'
        }`}>
          <div className="w-[1000px] h-[1000px] flex items-center justify-center translate-x-1/4">
            <BorromeanRings centered={true} opacity={1} driverType={hoveredDriver || undefined} />
          </div>
        </div>

        {/* LEFT SIDEBAR: SIGNAL MONITOR */}
        <div className={`${isSidebarCollapsed ? 'w-0 opacity-0 -translate-x-full pointer-events-none' : 'w-80 opacity-100 translate-x-0'} border-r border-[var(--border-main)] ${theme === 'retro' ? 'bg-transparent' : 'bg-[var(--bg-panel)]'} flex flex-col shrink-0 hidden lg:flex z-10 transition-all duration-700 ease-in-out`}>

          {/* Logo Area */}
          <div className={`p-8 border-b border-[var(--border-main)] shrink-0`}>
            <div className="relative overflow-hidden h-[80px] cursor-default mb-2">
              <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                <div className="flex flex-col">
                  <div className="h-[80px] flex items-center shrink-0">
                    <h1 className={`text-4xl md:text-5xl font-serif font-bold ${theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--text-main)]'} tracking-widest leading-none`}>迷雾学派</h1>
                  </div>
                  <div className="h-[80px] flex items-center shrink-0">
                    <h1 className={`text-3xl md:text-4xl font-serif font-bold ${theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--text-main)]'} tracking-widest uppercase leading-none`}>MIST</h1>
                  </div>
                </div>
              </div>
            </div>
            <p className={`text-[10px] uppercase tracking-[0.4em] mb-4 transition-colors ${theme === 'retro' ? 'text-black/40' : 'text-white/90'}`}>The Visionary Protocol</p>
            <AnimatedText
              lang={lang}
              hClass="h-[40px]"
              className={`text-xs font-light leading-relaxed transition-colors ${theme === 'retro' ? 'text-black/50' : 'text-white/95'}`}
              cn="爱欲视觉拓扑学：在实在界的荒漠上，确立一种比现实更坚固的虚构。"
              en="Erotic Visual Topology: establishing a fiction more solid than reality."
            />
          </div>

          {/* Quick Access Sidebar */}
          <div className={`border-b border-[var(--border-main)] shrink-0`}>
            <div className={`p-4 space-y-1`}>
              <div className="px-4 py-2">
                <AnimatedText
                  lang={lang}
                  hClass="h-4"
                  className={`text-[10px] font-bold ${theme === 'retro' ? 'text-black/50' : 'text-white/70'} uppercase tracking-widest mb-2`}
                  cn="安全协议 // Protocols"
                  en="SECURITY PROTOCOLS"
                />
              </div>
            {[
              { id: ProtocolType.CORE_DRIVERS, icon: Cpu, labelCn: '核心驱动器', labelEn: 'CORE DRIVERS' },
              { id: ProtocolType.CONFIDENTIAL, icon: ShieldAlert, labelCn: '机密文档', labelEn: 'CONFIDENTIAL' },
              { id: ProtocolType.DICTIONARY, icon: BookOpen, labelCn: '迷雾辞典', labelEn: 'DICTIONARY' },
              { id: ProtocolType.UTILITIES, icon: Zap, labelCn: '实用工具', labelEn: 'UTILITIES' },
              { id: ProtocolType.RSI, icon: Aperture, labelCn: '三界拓扑', labelEn: 'RSI TOPOLOGY' },
              { id: ProtocolType.TOPOLOGY, icon: Zap, labelCn: '欲望图式', labelEn: 'DESIRE GRAPH' },
            ].map((item: any, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (item.id === ProtocolType.RSI) {
                    setPage(1); setViewMode('RSI');
                  } else if (item.id === ProtocolType.TOPOLOGY) {
                    setPage(1); setViewMode('TOPOLOGY');
                  } else {
                    setSelectedProtocol(item.id);
                  }
                }}
                className={`w-full text-left px-5 py-3 rounded-lg flex items-center gap-3 transition-all group relative ${
                  selectedProtocol === item.id 
                    ? (theme === 'retro' ? 'opacity-100' : 'bg-white/10 opacity-100') 
                    : (theme === 'retro' ? 'hover:bg-black/5' : 'hover:bg-white/5')
                }`}
              >
                {theme === 'retro' && selectedProtocol === item.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-[var(--text-accent)] rounded-r-full"></div>
                )}
                <item.icon size={14} className={`${selectedProtocol === item.id ? (theme === 'retro' ? 'text-[var(--text-accent)] scale-110' : 'text-white opacity-100') : (theme === 'retro' ? 'text-black/40' : 'text-white opacity-70')} group-hover:opacity-100 transition-all shrink-0`} />
                <AnimatedText
                  lang={lang}
                  hClass="h-4"
                  className={`text-xs font-bold uppercase tracking-widest transition-all ${
                    selectedProtocol === item.id 
                      ? (theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-white opacity-100') 
                      : (theme === 'retro' ? 'text-black/60' : 'text-white opacity-80')
                  } group-hover:opacity-100`}
                  cn={item.labelCn}
                  en={item.labelEn}
                />
              </button>
            ))}
            </div>
          </div>

          {/* Signal Stream */}
          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col">
            <div className="mb-4 flex items-center gap-2">
              <ShieldAlert size={12} className="text-[var(--text-muted)] shrink-0" />
              <AnimatedText
                lang={lang}
                hClass="h-4"
                className={`text-[10px] font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} tracking-[0.2em] uppercase`}
                cn="观测站信号流"
                en="SIGNAL STREAM"
              />
            </div>

            <div className="space-y-4 flex-1">
              {signalLogs.map(log => (
                <div key={log.id} className="border-l border-[var(--border-main)] pl-3 py-1 relative">
                  <div className="absolute -left-[2px] top-2 w-[3px] h-[3px] bg-[var(--text-muted)]"></div>
                  <div className="flex gap-2 text-[9px] font-mono uppercase tracking-wider mb-1">
                    <span className={log.type === 'WARN' ? (theme === 'retro' ? 'text-[#8B261D] font-bold' : 'text-amber-500 font-bold') : 'text-[var(--text-muted)]'}>[{log.type}]</span>
                    <span className="text-[var(--text-muted)] opacity-60">{log.time}</span>
                  </div>
                  <p className={`text-xs font-mono leading-relaxed ${log.type === 'WARN' ? 'text-[var(--text-main)] font-semibold' : 'text-[var(--text-muted)]'}`}>
                    {log.msg}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT AREA: CONTENT DYNAMICALLY CHANGED */}
        <div className={`flex-1 overflow-hidden relative z-10 flex flex-col h-full transition-all duration-700 ease-in-out`}>
          <div className={`${(selectedProtocol === ProtocolType.CONFIDENTIAL || selectedProtocol === ProtocolType.DICTIONARY) ? 'p-0 w-full max-w-none' : 'p-8 md:p-12 lg:p-16 max-w-7xl mx-auto w-full'} ${(selectedProtocol === ProtocolType.CONFIDENTIAL || selectedProtocol === ProtocolType.DICTIONARY) ? 'backdrop-blur-sm' : ''} flex-1 flex flex-col min-h-0 h-full`}>
            
            {/* 1. CORE DRIVERS VIEW */}
            {selectedProtocol === ProtocolType.CORE_DRIVERS && (
              <div className="flex-1 flex flex-col animate-in fade-in duration-500">
                <div className={`mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 shrink-0 transition-colors ${theme === 'retro' ? 'border-black/5' : 'border-white/15'}`}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <Zap size={20} className={`transition-colors duration-500 ${theme === 'retro' ? 'text-[var(--text-accent)]' : (hoveredDriver ? getAccentColor(hoveredDriver) : 'text-white/60')}`} />
                      <AnimatedText
                        lang={lang}
                        hClass="h-8 md:h-10"
                        className={`text-2xl md:text-3xl font-serif font-black tracking-[0.15em] ${theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-white'}`}
                        cn="核心驱动器"
                        en="CORE DRIVERS"
                      />
                    </div>
                    <AnimatedText
                      lang={lang}
                      hClass="h-4"
                      className={`text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase transition-colors ${theme === 'retro' ? 'text-black/70' : 'text-white/95'}`}
                      cn="请选择一种欲望结构进入生产..."
                      en="SELECT DESIRE STRUCTURE TO INITIATE..."
                    />
                  </div>
                </div>

                <div className="w-full shrink-0">
                  <DriverSelector selectedDriver={selectedProtocol === ProtocolType.CORE_DRIVERS ? selectedDriver : null} onSelect={onDriverSelect} lang={lang} hoveredDriver={hoveredDriver} onHover={setHoveredDriver} />
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 shrink-0 pb-10">
                  {[
                    { icon: BookOpen, titleCn: '访问辞条数据', titleEn: 'CODEX DATA', descCn: '查阅拉康、齐泽克等理论词条，理解底层系统的运转逻辑。', descEn: 'Theoretical corpus to understand system logic.', onClick: () => { setPage(1); setViewMode('RSI'); } },
                    { icon: Film, titleCn: '影像资料库', titleEn: 'VIDEO ARCHIVE', descCn: '浏览迷雾学派的影像资料，深入视觉拓扑学的核心脉络。', descEn: 'Visual data capture of the topology threads.', onClick: () => { setPage(1); setViewMode('VIDEO'); } },
                    { icon: HistoryIcon, titleCn: '检视生成档案', titleEn: 'REVIEW ARCHIVES', descCn: '溯源过去的生成记录，恢复或重置失败的镜像拼接尝试。', descEn: 'Review past session records and attempts.', onClick: openHistory }
                  ].map((card, i) => (
                    <div
                      key={i}
                      onClick={card.onClick}
                      className={`p-5 rounded-sm cursor-pointer transition-all duration-700 group hover:-translate-y-1.5 border ${
                        theme === 'retro'
                          ? 'border-transparent bg-transparent hover:bg-[#F9F7F1] hover:border-[var(--border-accent)] hover:shadow-xl'
                          : 'border-zinc-900 bg-white/5 hover:bg-zinc-950 hover:border-white/20 backdrop-blur-sm shadow-lg hover:shadow-[0_45px_100px_rgba(0,0,0,0.6)]'
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded border flex items-center justify-center transition-all duration-500 ${
                          theme === 'retro' 
                            ? 'border-transparent bg-transparent group-hover:border-[var(--border-main)] group-hover:bg-transparent' 
                            : 'border-zinc-800 bg-zinc-900 group-hover:border-white/20'
                        }`}>
                          <card.icon size={20} className={`transition-colors duration-500 ${theme === 'retro' ? 'text-black group-hover:text-black' : 'text-white/80 group-hover:text-white'}`} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <AnimatedText lang={lang} hClass="h-5" className={`text-sm font-bold tracking-[0.1em] transition-colors ${theme === 'retro' ? 'text-black group-hover:text-black' : 'text-white/90 group-hover:text-white'}`} cn={card.titleCn} en={card.titleEn} />
                          <AnimatedText lang={lang} hClass="h-8" className={`text-[12px] font-medium leading-[1.6] transition-colors ${theme === 'retro' ? 'text-black/60 group-hover:text-black' : 'text-zinc-500 group-hover:text-zinc-300'}`} cn={card.descCn} en={card.descEn} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. CONFIDENTIAL DOCUMENTS VIEW */}
            {selectedProtocol === ProtocolType.CONFIDENTIAL && (
              <ArchiveContent lang={lang} isDark={theme === 'dark'} />
            )}

            {/* 3. DICTIONARY VIEW (Philosophy Codex) */}
            {selectedProtocol === ProtocolType.DICTIONARY && (
              <div className="flex-1 flex flex-col min-h-0 h-full animate-in fade-in duration-500">
                <PhilosophyCodexPage 
                  onClose={() => setSelectedProtocol(ProtocolType.CORE_DRIVERS)} 
                  driverType={hoveredDriver || selectedDriver}
                  lang={lang}
                  currentUser={currentUser}
                  setLang={setLang}
                  openHistory={openHistory}
                  openSettings={openSettings}
                  openAuth={openAuth}
                  openProfile={openProfile}
                  showRings={showRings}
                  setShowRings={setShowRings}
                  renderInPlace={true}
                  onToggleExpand={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                  isExpanded={isSidebarCollapsed}
                />
              </div>
            )}

            {/* 4. UTILITIES VIEW (Placeholder) */}
            {selectedProtocol === ProtocolType.UTILITIES && (
              <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in duration-500">
                <Zap size={48} className="text-amber-500 mb-8 opacity-50 animate-pulse" />
                <h2 className="text-2xl font-serif tracking-[0.3em] uppercase opacity-60">实用工具正在初始化...</h2>
                <div className="mt-4 flex gap-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-1 bg-amber-500/20" />)}
                </div>
                <p className="text-[10px] font-mono mt-6 tracking-[0.2em] opacity-40 uppercase">INITIALIZING SYSTEM MODULES // UTILITIES_CORE_V1.0</p>
              </div>
            )}

          </div>
        </div>
      </div>

      <ProductManualModal isOpen={isManualOpen} onClose={closeManual} driverType={hoveredDriver} />
      <SutureModal isOpen={isSutureOpen} onClose={closeSuture} onGenerate={onSutureGenerate} isGenerating={isSutureGenerating} lang={lang} driverType={selectedDriver || DriverType.NARRATIVE} />
      {isHistoryOpen && <HistoryModal history={history} onRestore={onHistoryRestore} onClear={onHistoryClear} onClose={closeHistory} lang={lang} />}
    </div>
  );
};
