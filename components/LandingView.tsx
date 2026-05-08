
import React, { useState, useEffect, useRef } from 'react';
import { DriverSelector } from './DriverSelector';
import { DriverType, User } from '../types';
import { Globe, Wand2, HelpCircle, History as HistoryIcon, Settings, User as UserIcon, BookOpen, Terminal, Database, ShieldAlert, Cpu, Film, Folder, Aperture, Zap, Sun, Moon, Search } from 'lucide-react';
import { ProductManualModal } from './ProductManualModal';
import { SutureModal } from './SutureModal';
import { HistoryModal } from './HistoryModal';
import { BorromeanRings } from './BorromeanRings';
import { ArchiveContent } from './ArchiveContent';
import { useTheme } from '../contexts/ThemeContext';



const AnimatedText = ({ cn, en, lang, className = "", hClass = "h-5", leading = "leading-none", style = {} }: { cn: React.ReactNode, en: React.ReactNode, lang: 'CN' | 'EN', className?: string, hClass?: string, leading?: string, style?: React.CSSProperties }) => (
  <div className={`overflow-hidden relative ${hClass} ${className}`} style={style}>
    <div className={`transition-all duration-[1500ms] w-full ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
      <div className={`${hClass} flex items-center shrink-0 w-full ${leading}`}>
        {cn}
      </div>
      <div className={`${hClass} flex items-center shrink-0 w-full ${leading}`}>
        {en}
      </div>
    </div>
  </div>
);

interface LandingViewProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1 | 2) => void;
  setViewMode: (mode: any) => void;
  selectedDriver: DriverType | null;
  onDriverSelect: (id: DriverType) => void;
  hoveredDriver: DriverType | null;
  setHoveredDriver: (id: DriverType | null) => void;
  handleOpenMetonymyPage: () => void;
  openManual: () => void;
  initialProtocol?: string;
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
  onLogout: () => void;
  currentUser: User;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
  isAdmin?: boolean;
  onReturnToPortal?: () => void;
}

enum ProtocolType {
  CORE_DRIVERS = 'CORE_DRIVERS',
  UTILITIES = 'UTILITIES',
  RSI = 'RSI',
  TOPOLOGY = 'TOPOLOGY',
  DICTIONARY = 'DICTIONARY'
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
  onLogout,
  showRings,
  setShowRings,
  initialProtocol,
  isAdmin,
  onReturnToPortal
}) => {
  const [localMounted, setLocalMounted] = useState(false);
  // 圆环动画：始终挂载元素，用 key 强制重置动画
  const [ringAnimClass, setRingAnimClass] = useState('animate-ring-entrance');
  const [ringAnimKey, setRingAnimKey] = useState(0);

  const getThemeTextColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    if (hoveredDriver === 'NARRATIVE') return 'text-gold-primary';
    if (hoveredDriver === 'COMMERCIAL') return 'text-mist-cyan';
    if (hoveredDriver === 'EXPERIMENTAL') return 'text-fuchsia-400';
    if (hoveredDriver === 'AESTHETIC') return 'text-mist-rose';
    if (hoveredDriver === 'TRAILER') return 'text-mist-orange';
    return 'text-white';
  };

  useEffect(() => {
    setLocalMounted(true);
  }, []);

  // 圆环开关：showRings 变化时切换动画 class 并递增 key 强制重新播放
  useEffect(() => {
    if (!localMounted) return;
    if (showRings) {
      setRingAnimClass('animate-ring-entrance');
    } else {
      setRingAnimClass('animate-ring-exit');
    }
    setRingAnimKey(prev => prev + 1);
  }, [showRings, localMounted]);

  const { theme, toggleTheme } = useTheme();
  const [selectedProtocol, setSelectedProtocol] = useState<ProtocolType>(
    (initialProtocol && Object.values(ProtocolType).includes(initialProtocol as any) ? initialProtocol as ProtocolType : ProtocolType.CORE_DRIVERS)
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getGlowTheme = (driverId: DriverType | null) => {
    if (theme === 'retro') return 'shadow-none';
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'shadow-cyan-500/10';
      case DriverType.NARRATIVE: return 'shadow-yellow-500/10';
      case DriverType.AESTHETIC: return 'shadow-rose-500/10';
      case DriverType.EXPERIMENTAL: return 'shadow-fuchsia-500/10';
      case DriverType.TRAILER: return 'shadow-orange-500/10';
      default: return 'shadow-zinc-500/5';
    }
  };

  const getAccentColor = (driverId: DriverType | null) => {
    if (theme === 'retro') return '#2D2D2D';
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'var(--mist-cyan)';
      case DriverType.NARRATIVE: return 'var(--mist-gold)';
      case DriverType.AESTHETIC: return 'var(--mist-rose)';
      case DriverType.EXPERIMENTAL: return '#D946EF';
      case DriverType.TRAILER: return 'var(--mist-orange)';
      default: return 'rgba(255,255,255,0.8)';
    }
  };

  const getBorderAccentColor = (driverId: DriverType | null) => {
    if (theme === 'retro') return '#8B261D';
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'var(--mist-cyan)';
      case DriverType.NARRATIVE: return 'var(--mist-gold)';
      case DriverType.AESTHETIC: return 'var(--mist-rose)';
      case DriverType.EXPERIMENTAL: return '#D946EF';
      case DriverType.TRAILER: return 'var(--mist-orange)';
      default: return 'var(--border-main)';
    }
  };

  const getProtocolTitle = () => {


    if (selectedProtocol === ProtocolType.RSI || selectedProtocol === ProtocolType.TOPOLOGY) {
       return lang === 'CN' ? '迷雾学派：拓扑三界' : 'MIST: TOPOLOGY';
    }
    return lang === 'CN' ? '主体观测中心 // 序列号: MIST-O-1' : 'SUBJECT OBSERVATION CENTER // SEQ: MIST-O-1';
  };

  const getLineGlow = (driverId: DriverType | null) => {
    if (theme === 'retro' || !driverId) return '';
    switch (driverId) {
      case DriverType.COMMERCIAL: return '0 0 10px rgba(34,211,238,0.3)';
      case DriverType.NARRATIVE: return '0 0 10px rgba(212,175,55,0.3)';
      case DriverType.AESTHETIC: return '0 0 10px rgba(251,113,133,0.3)';
      case DriverType.EXPERIMENTAL: return '0 0 10px rgba(217,70,239,0.3)';
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
      case DriverType.EXPERIMENTAL: return 'shadow-[0_8px_30px_-5px_rgba(217,70,239,0.25)]';
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
      style={{ 
        ...(theme === 'retro' ? { backgroundImage: 'var(--pattern-aged)', backgroundBlendMode: 'multiply' } : {})
      }}
    >

      {/* Global Top Navbar */}
      <header className={`shrink-0 z-50 backdrop-blur-md h-14 flex items-center justify-between px-4 md:px-5 transition-all duration-300 bg-[var(--bg-header)] ${
        theme === 'dark' ? 'border-b border-white/10' : (theme === 'retro' ? 'border-b border-[var(--border-main)]' : 'border-b border-[var(--border-main)]')
      } ${getHeaderShadow(hoveredDriver)} relative`}>
        {/* Theme Divider Line - Global Consistency Accent */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500 z-10" 
          style={{ 
            backgroundColor: getBorderAccentColor(hoveredDriver) as string,
            opacity: theme === 'retro' ? 0.2 : 0.15,
            boxShadow: theme === 'retro' ? 'none' : (getLineGlow(hoveredDriver) || '0 0 15px var(--philosopher-accent)')
          }} 
        />
        <div className="flex items-center gap-5">
          <button
            onClick={() => onReturnToPortal ? onReturnToPortal() : setPage(-1)}
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
          <AnimatedText
            lang={lang}
            hClass="h-4"
            className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'} font-serif font-bold text-xs uppercase tracking-widest transition-colors duration-500`}
            cn={<span className="whitespace-nowrap">{getProtocolTitle()}</span>}
            en={<span className="whitespace-nowrap">{getProtocolTitle()}</span>}
          />
        </div>

        {/* Center: Search Bar */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3">
          <div className="relative group/search">
            <div 
              className={`relative flex items-center ${theme === 'retro' ? 'bg-white/40 border-black/20 group-hover/search:border-black/40 hover:bg-white/60' : 'bg-black/20 border-white/10 hover:bg-black/40'} border rounded-full px-4 py-1.5 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-lg w-64 group/input`}
              style={hoveredDriver && theme !== 'retro' ? { borderColor: getBorderAccentColor(hoveredDriver) as string } : {}}
            >
              <Search 
                size={12} 
                className={`mr-2 transition-colors duration-500 z-20 group-hover/input:scale-110 transition-transform duration-300 ${!hoveredDriver || theme === 'retro' ? (theme === 'retro' ? 'text-black/40' : 'text-zinc-500') : ''}`} 
                style={hoveredDriver && theme !== 'retro' ? { color: getAccentColor(hoveredDriver) as string } : {}}
              />
              <div className="absolute inset-0 left-10 right-10 flex items-center pointer-events-none overflow-hidden h-full">
                {!searchQuery && (
                  <AnimatedText
                    lang={lang}
                    hClass="h-4"
                    className={`text-[10px] uppercase font-bold tracking-[0.1em] transition-all duration-500 ${theme === 'retro' ? 'text-black/40' : 'text-zinc-400'} opacity-60`}
                    cn="搜索协议、档案或理论词条..."
                    en="Search protocols, archives or codex..."
                  />
                )}
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`bg-transparent border-none outline-none text-[10px] uppercase font-bold tracking-[0.1em] text-[var(--text-main)] w-full transition-all duration-300 focus:tracking-[0.15em] relative z-20`}
              />
              <div className="ml-2 flex items-center gap-1 opacity-40 group-hover/input:opacity-80 transition-opacity">
                <span className={`text-[8px] font-mono border ${theme === 'retro' ? 'border-black/20' : 'border-white/20'} px-1 rounded`}>⌘</span>
                <span className={`text-[8px] font-mono border ${theme === 'retro' ? 'border-black/20' : 'border-white/20'} px-1 rounded`}>K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end gap-2 ml-auto">
          {/* Navigation Links */}
          <div className={`flex items-center p-1 rounded-full transition-all duration-300 border border-transparent hover:border-white/5
            ${theme === 'retro' ? 'hover:bg-[#FDFCF8]/90 hover:border-[#8B261D]/15' : 'hover:bg-black/30'}`}>
            <button
              onClick={openHistory}
              className={`h-8 px-4 flex items-center gap-2 rounded-full transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 group active:scale-95`}
            >
              <HistoryIcon size={14} className={`transition-colors duration-300 ${theme === 'retro' ? 'text-black/60 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />
              <AnimatedText
                lang={lang}
                hClass="h-4"
                className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${theme === 'retro' ? 'text-black/60 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}
                cn="欲望档案"
                en="ARCHIVES"
              />
            </button>
          </div>

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
              {theme === 'dark' ? <Moon size={13} strokeWidth={2} /> : <Sun size={13} strokeWidth={2} className={`${theme === 'retro' ? 'text-[#8B261D]' : ''}`} />}
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

      <div className="flex-1 flex overflow-hidden relative">
        {/* Ambient Glow */}
        {theme !== 'retro' && (
          <div className={`absolute inset-0 pointer-events-none transition-shadow duration-1000 opacity-20 shadow-[inset_0_0_150px_rgba(0,0,0,1)] ${getGlowTheme(hoveredDriver)}`}></div>
        )}

        {/* Background Rings - 始终挂载，用 key 强制触发CSS动画 */}
        <div
          key={`rings-anim-${ringAnimKey}`}
          className={`absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none z-0 select-none overflow-hidden ${ringAnimClass}`}
        >
          <div className="w-[1000px] h-[1000px] flex items-center justify-center translate-x-1/4">
            <BorromeanRings centered={true} opacity={theme === 'retro' ? 0.85 : 0.95} driverType={hoveredDriver || undefined} vivid={true} />
          </div>
        </div>

        {/* LEFT SIDEBAR: SIGNAL MONITOR */}
        <div className={`${isSidebarCollapsed ? 'w-0 opacity-0 -translate-x-full pointer-events-none' : 'w-80 opacity-100 translate-x-0'} border-r border-[var(--border-main)] ${theme === 'retro' ? 'bg-transparent' : 'bg-[var(--bg-panel)]'} flex flex-col shrink-0 hidden lg:flex z-10 transition-all duration-700 ease-in-out`}>

          {/* Logo Area */}
          <div className={`p-8 border-b border-[var(--border-main)] shrink-0`}>
            <div className="relative overflow-hidden cursor-default mb-2">
              <AnimatedText
                lang={lang}
                hClass="h-[80px]"
                cn={<h1 className={`text-4xl md:text-5xl font-serif font-bold ${theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--text-main)]'} tracking-widest leading-none`}>迷雾学派</h1>}
                en={<h1 className={`text-3xl md:text-4xl font-serif font-bold ${theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--text-main)]'} tracking-widest uppercase leading-none`}>MIST</h1>}
              />
            </div>
            <p className={`text-[10px] uppercase tracking-[0.4em] mb-4 transition-colors ${theme === 'retro' ? 'text-black/60' : 'text-white font-semibold shadow-sm'}`}>The Visionary Protocol</p>
            <AnimatedText
              lang={lang}
              hClass="h-[56px]"
              leading="leading-loose"
              className={`text-xs font-medium transition-colors ${theme === 'retro' ? 'text-black/80' : 'text-white shadow-sm'}`}
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
                { id: ProtocolType.UTILITIES, icon: Zap, labelCn: '实用工具', labelEn: 'UTILITIES' },
            ].map((item: any, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedProtocol(item.id);
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
                <item.icon 
                  size={14} 
                  className={`group-hover:opacity-100 transition-all shrink-0 ${selectedProtocol !== item.id || theme === 'retro' ? (theme === 'retro' ? 'text-black/40' : 'text-white opacity-70') : ''}`} 
                  style={selectedProtocol === item.id && theme !== 'retro' ? { color: 'white', opacity: 1 } : (theme === 'retro' && selectedProtocol === item.id ? { color: 'var(--text-accent)' } : {})}
                />
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
          <div className={`p-8 md:p-12 lg:p-16 max-w-7xl mx-auto w-full flex-1 flex flex-col min-h-0 h-full`}>
            
            {/* 1. CORE DRIVERS VIEW */}
            {selectedProtocol === ProtocolType.CORE_DRIVERS && (
              <div className="flex-1 flex flex-col animate-focus-blur overflow-hidden min-h-0">
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

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 shrink-0 pb-10">
                  {[
                    { icon: Film, titleCn: '影像资料库', titleEn: 'VIDEO ARCHIVE', descCn: '浏览迷雾学派的影像资料，深入视觉拓扑学的核心脉络。', descEn: 'Visual data capture of the topology threads.', onClick: () => { setPage(1); setViewMode('VIDEO'); } },
                    { icon: HistoryIcon, titleCn: '检视生成档案', titleEn: 'REVIEW ARCHIVES', descCn: '溯源过去的生成记录，恢复或重置失败的镜像拼接尝试。', descEn: 'Review past session records and attempts.', onClick: openHistory }
                  ].map((card, i) => (
                    <div
                      key={i}
                      onClick={card.onClick}
                      className={`p-6 rounded-sm cursor-pointer transition-all duration-700 group hover:-translate-y-1.5 border ${
                        theme === 'retro'
                          ? 'bg-white/[0.01] border-transparent hover:bg-[#FDFCF8] hover:border-[var(--border-accent)] hover:shadow-xl backdrop-blur-2xl hover:backdrop-blur-none'
                          : 'bg-white/[0.01] border-transparent hover:bg-zinc-950 hover:border-white/20 shadow-none hover:shadow-[0_45px_100px_rgba(0,0,0,0.6)] backdrop-blur-2xl hover:backdrop-blur-none'
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





            {/* 4. UTILITIES VIEW (Placeholder) */}
            {selectedProtocol === ProtocolType.UTILITIES && (
              <div className="flex-1 flex flex-col items-center justify-center animate-page-dissolve overflow-hidden min-h-0">
                <Zap size={48} className="text-amber-500 mb-8 opacity-50 animate-pulse" />
                <h2 className="text-2xl font-serif tracking-[0.3em] uppercase opacity-60">实用工具正在初始化...</h2>
                <div className="mt-4 flex gap-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-1 bg-amber-500/20" />)}
                </div>
                <p className="text-[10px] font-mono mt-6 tracking-[0.2em] opacity-40 uppercase">INITIALIZING SYSTEM MODULES // UTILITIES_CORE_V1.0</p>
              </div>
            )}

            {/* 5. DICTIONARY / THEORY VIEW */}
            {selectedProtocol === ProtocolType.DICTIONARY && (
                <div className="flex-1 flex flex-col items-center justify-center animate-page-dissolve overflow-hidden min-h-0">
                    <BookOpen size={48} className="text-rose-500 mb-8 opacity-50 animate-pulse" />
                    <h2 className="text-2xl font-serif tracking-[0.3em] uppercase opacity-60">迷雾辞典正在重连...</h2>
                    <button 
                        onClick={() => { setPage(1); setViewMode('DICTIONARY'); }}
                        className="mt-8 px-6 py-2 border border-rose-500/30 text-rose-500/60 hover:bg-rose-500/10 transition-all font-mono text-xs tracking-widest"
                    >
                        GO DIRECTLY TO CODEX
                    </button>
                </div>
            )}

            {/* 6. TOPOLOGY / RSI FALLBACK */}
            {(selectedProtocol === ProtocolType.TOPOLOGY || selectedProtocol === ProtocolType.RSI) && (
              <div className="flex-1 flex flex-col items-center justify-center animate-page-dissolve overflow-hidden min-h-0">
                <Aperture size={48} className="text-zinc-500 mb-8 opacity-30 animate-spin-slow" />
                <h2 className="text-xl font-serif tracking-[0.2em] uppercase opacity-40">此拓扑节点暂未开放</h2>
                <p className="text-[10px] font-mono mt-4 tracking-[0.1em] opacity-30 uppercase">STAY IN THE REAL // AWAITING RSI MAPPING</p>
                <button 
                    onClick={() => setSelectedProtocol(ProtocolType.CORE_DRIVERS)}
                    className="mt-10 text-[10px] font-bold text-zinc-500 hover:text-white underline underline-offset-4 tracking-[0.2em]"
                >
                    RETURN TO CORE
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      <ProductManualModal isOpen={isManualOpen} onClose={closeManual} driverType={hoveredDriver} />
      <SutureModal isOpen={isSutureOpen} onClose={closeSuture} onGenerate={onSutureGenerate} isGenerating={isSutureGenerating} lang={lang} driverType={selectedDriver || DriverType.NARRATIVE} />
      {isHistoryOpen && <HistoryModal history={history} onRestore={onHistoryRestore} onClose={closeHistory} lang={lang} />}
    </div>
  );
};
