import React from 'react';
import { Globe, Wand2, HelpCircle, History as HistoryIcon, Cpu, GitFork, BookOpen, Settings, User as UserIcon, LogOut, Aperture, Sun, Moon } from 'lucide-react';
import { DriverType, User, ViewMode } from '../types';
import { useTheme } from '../contexts/ThemeContext';


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

interface AppHeaderProps {
  page: number;
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1 | 2) => void;
  selectedDriver: DriverType | null;
  driverName: string;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  handleOpenMetonymyPage: () => void;
  openManual: () => void;
  isManualOpen: boolean;
  openHistory: () => void;
  isHistoryOpen: boolean;
  openSettings: () => void;
  openAuth: () => void;
  openProfile: () => void;
  onLogout: () => void;
  currentUser: User;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
  setInitialProtocol?: (p: string | undefined) => void;
  children?: React.ReactNode;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  page,
  lang,
  setLang,
  setPage,
  selectedDriver,
  driverName,
  viewMode,
  setViewMode,
  handleOpenMetonymyPage,
  openManual,
  isManualOpen,
  openHistory,
  isHistoryOpen,
  openSettings,
  openAuth,
  openProfile,
  currentUser,
  onLogout,
  showRings,
  setShowRings,
  setInitialProtocol,
  children,
}) => {
  const { theme, toggleTheme } = useTheme();

  // --- Helper Functions ---

  const getHeaderTitleColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    
    // Decouple specific portal pages from engine colors
    if (viewMode === 'RORSCHACH' || viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'ANALYSIS') return 'text-white';
    if (viewMode === 'DICTIONARY') return 'text-[var(--philosopher-accent)]';
    
    // Engine specific colors
    if (selectedDriver === DriverType.NARRATIVE) return 'text-gold-primary';
    if (selectedDriver === DriverType.COMMERCIAL) return 'text-mist-cyan';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-mist-purple';
    if (selectedDriver === DriverType.AESTHETIC) return 'text-mist-rose';
    if (selectedDriver === DriverType.TRAILER) return 'text-mist-orange';
    
    return 'text-[var(--philosopher-accent)]';
  };

  const getHeaderIconFill = () => {
    if (theme === 'retro') return 'fill-[#8B261D]/20';
    if (viewMode === 'RORSCHACH' || viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'ANALYSIS') return 'fill-white/20';
    if (selectedDriver === DriverType.COMMERCIAL) return 'fill-cyan-400/20';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'fill-purple-400/20';
    if (selectedDriver === DriverType.AESTHETIC) return 'fill-rose-400/20';
    if (selectedDriver === DriverType.TRAILER) return 'fill-orange-400/20';
    return 'fill-gold-primary/20';
  };

  const getThemeTextColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    
    if (viewMode === 'RORSCHACH' || viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'ANALYSIS') return 'text-white';
    if (viewMode === 'DICTIONARY') return 'text-[var(--philosopher-accent)]';
    
    if (selectedDriver === DriverType.NARRATIVE) return 'text-gold-primary';
    if (selectedDriver === DriverType.COMMERCIAL) return 'text-mist-cyan';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-mist-purple';
    if (selectedDriver === DriverType.AESTHETIC) return 'text-mist-rose';
    if (selectedDriver === DriverType.TRAILER) return 'text-mist-orange';
    return 'text-gold-primary';
  };

  const getThemeBorderColor = () => {
    if (theme === 'retro') return 'border-[var(--border-main)]';
    return 'border-white/[0.06]';
  };

  const getBorderAccentColor = () => {
    if (theme === 'retro') return 'transparent';
    
    // Decouple certain pages from engines: Archive and Video always white/transparent
    if (viewMode === 'RORSCHACH' || viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'ANALYSIS' || viewMode === 'DICTIONARY') return 'transparent';

    // Engine specific accent colors
    if (selectedDriver === DriverType.COMMERCIAL) return 'rgba(34, 211, 238, 0.15)';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'rgba(192, 132, 252, 0.15)';
    if (selectedDriver === DriverType.AESTHETIC) return 'rgba(251, 113, 133, 0.15)';
    if (selectedDriver === DriverType.TRAILER) return 'rgba(251, 146, 60, 0.15)';
    if (selectedDriver === DriverType.NARRATIVE) return 'rgba(212, 175, 55, 0.15)';

    return 'rgba(212, 175, 55, 0.15)';
  };

  const getLineGlow = () => {
    if (theme === 'retro') return '';
    
    if (viewMode === 'RORSCHACH' || viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'ANALYSIS' || viewMode === 'DICTIONARY') return '';
    
    // Decouple engines: Engine colors take precedence
    if (selectedDriver === DriverType.COMMERCIAL) return '0 0 10px rgba(34,211,238,0.1)';
    if (selectedDriver === DriverType.EXPERIMENTAL) return '0 0 10px rgba(192,132,252,0.1)';
    if (selectedDriver === DriverType.AESTHETIC) return '0 0 10px rgba(251,113,133,0.1)';
    if (selectedDriver === DriverType.TRAILER) return '0 0 10px rgba(251,146,60,0.1)';
    if (selectedDriver === DriverType.NARRATIVE) return '0 0 10px rgba(212,175,55,0.1)';

    return '0 0 10px rgba(212,175,55,0.1)';
  };

  const getNarrativeEngineLabel = () => {
    if (selectedDriver === DriverType.COMMERCIAL) return lang === 'EN' ? "SUTURE ENGINE" : "欲望缝合";
    if (selectedDriver === DriverType.EXPERIMENTAL) return lang === 'EN' ? "REDUCTION ENGINE" : "现象学还原";
    if (selectedDriver === DriverType.AESTHETIC) return lang === 'EN' ? "AESTHETIC" : "情绪美学";
    if (selectedDriver === DriverType.TRAILER) return lang === 'EN' ? "TRAILER ENGINE" : "虚拟幻象";
    return lang === 'EN' ? "NARRATIVE ENGINE" : "爱欲迷宫";
  };

  return (
    <header className={`h-14 bg-[var(--bg-header)] backdrop-blur-md border-b ${getThemeBorderColor()} flex items-center justify-between px-4 md:px-5 z-50 sticky top-0 shrink-0 transition-all duration-500 animate-page-dissolve relative`}>
      {/* Theme Divider Line - Global Consistency Accent */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500 z-10" 
        style={{ 
          backgroundColor: theme === 'retro' ? '#8B261D' : (getBorderAccentColor() !== 'transparent' ? getBorderAccentColor() : 'var(--philosopher-accent)'),
          opacity: theme === 'retro' ? 0.2 : 0.15,
          boxShadow: theme === 'retro' ? 'none' : (getLineGlow() ? getLineGlow() : '0 0 15px var(--philosopher-accent)')
        }} 
      />
      <div className="flex items-center gap-5">
        {/* Portal-origin pages: ← 入口 button, returns to UniversePortal */}
        {(viewMode === 'RORSCHACH' || viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'DICTIONARY') ? (
          <button
            onClick={() => setPage(-1)}
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
        ) : (
          /* Tool-layer pages: 返回全局 Globe button, returns to LandingView (page 0) */
          <button
            onClick={() => {
              if (setInitialProtocol) setInitialProtocol(undefined);
              setPage(0);
            }}
            className={`flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:bg-white/5 hover:scale-105 active:scale-95`}
          >
            <Globe size={14} className={`shrink-0 transition-all duration-100 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}>
              {lang === 'CN' ? "返回全局" : "GLOBAL"}
            </span>
          </button>
        )}
        <span 
          className={`${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest`}
          style={theme === 'retro' ? { color: '#8B261D' } : {}}
        >
          {lang === 'CN' 
            ? (driverName && driverName.startsWith('迷雾学派') ? driverName : `迷雾学派：${driverName}`)
            : (driverName && driverName.startsWith('Mist School') ? driverName : `Mist School: ${driverName}`)}
        </span>
      </div>

      {children ? (
        <div className="flex-1 max-w-xl mx-auto px-4 flex items-center justify-center h-full relative z-20">
          {children}
        </div>
      ) : (
        !(viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'TOPOLOGY' || viewMode === 'RSI' || viewMode === 'RORSCHACH' || viewMode === 'ANALYSIS' || viewMode === 'DICTIONARY') && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
            <button
              onClick={() => setViewMode('ENGINE')}
              className={`flex items-center gap-2 font-serif font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${viewMode === 'ENGINE' ? getHeaderTitleColor() : (theme === 'retro' ? "text-zinc-600 hover:text-black font-sans" : "text-zinc-400 hover:text-white font-sans")}`}
            >
              <Cpu size={14} className={viewMode === 'ENGINE' ? getHeaderIconFill() : ""} />
              {lang === 'CN' ? "核心引擎" : "CORE ENGINE"}
            </button>
            <div className={`w-4 h-px ${theme === 'retro' ? 'bg-black/20' : 'bg-white/[0.04]'}`}></div>
            <button
              onClick={() => setViewMode('DIVERGENCE')}
              className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${viewMode === 'DIVERGENCE' ? getHeaderTitleColor() : (theme === 'retro' ? "text-zinc-600 hover:text-black font-sans" : "text-zinc-400 hover:text-white font-sans")}`}
            >
              <GitFork size={14} />
              {lang === 'CN' ? "分歧点" : "THE DIVERGENCE"}
            </button>
            {selectedDriver !== DriverType.AESTHETIC && (
              <>
                <div className={`w-4 h-px ${theme === 'retro' ? 'bg-black/20' : 'bg-white/[0.04]'}`}></div>
                <button
                  onClick={() => setViewMode('BIBLE')}
                  className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${viewMode === 'BIBLE' ? getHeaderTitleColor() : (theme === 'retro' ? "text-zinc-600 hover:text-black font-sans" : "text-zinc-400 hover:text-white font-sans")}`}
                >
                  <BookOpen size={14} />
                  {lang === 'CN' ? "创意圣经" : "CREATIVE BIBLE"}
                </button>
              </>
            )}
          </div>
        )
      )}

      <div className="flex items-center justify-end gap-2 ml-auto">
        {/* Navigation Links — ARCHIVE ONLY */}
        {!(viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'DICTIONARY' || viewMode === 'RORSCHACH' || viewMode === 'ANALYSIS') && (
          <div className={`flex items-center p-1 rounded-full transition-all duration-300 border border-transparent hover:border-white/5
            ${theme === 'retro' ? 'hover:bg-[#FDFCF8]/90 hover:border-[#8B261D]/15' : 'hover:bg-black/30'}`}>
            {[
              { icon: Settings, label: lang === 'CN' ? '系统配置' : 'SETTINGS', labelCn: '系统配置', labelEn: 'SETTINGS', onClick: openSettings, isActive: false },
              { icon: HistoryIcon, label: lang === 'CN' ? '欲望档案' : 'ARCHIVE', labelCn: '欲望档案', labelEn: 'ARCHIVE', onClick: openHistory, isActive: isHistoryOpen },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={item.onClick}
                className={`flex items-center gap-1.5 transition-all duration-300 group px-3 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95 ${item.isActive ? getThemeTextColor() : (theme === 'retro' ? "text-zinc-600 hover:text-black hover:border-black/5" : "text-zinc-400 hover:text-white")}`}
              >
                <item.icon size={13} className={`shrink-0 transition-all duration-100 ${item.isActive ? 'text-current' : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`} />
                <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${item.isActive ? 'text-current' : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}

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
            className={`flex items-center justify-center w-8 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 transition-all duration-300 ${theme === 'retro' ? 'text-zinc-600 hover:text-black hover:border-black/5' : 'text-zinc-400 hover:text-white'}`}
            title={theme === 'dark' ? (lang === 'CN' ? "切换为复古主题" : "Switch to Retro") : (lang === 'CN' ? "切换为暗黑主题" : "Switch to Dark")}
          >
            {theme === 'dark' ? <Moon size={13} strokeWidth={2} /> : <Sun size={13} strokeWidth={2} className="text-[#8B261D]" />}
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
  );
};