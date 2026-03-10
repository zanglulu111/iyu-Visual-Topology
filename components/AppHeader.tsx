import React from 'react';
import { Globe, Wand2, HelpCircle, History as HistoryIcon, Cpu, GitFork, BookOpen, Settings, User as UserIcon, LogOut, Aperture, Sun, Moon } from 'lucide-react';
import { DriverType, User } from '../types';
import { useTheme } from '../contexts/ThemeContext';

type ViewMode = 'ENGINE' | 'DIVERGENCE' | 'BIBLE' | 'METONYMY' | 'TOPOLOGY' | 'RSI' | 'ARCHIVE' | 'VIDEO';

interface AppHeaderProps {
  page: number;
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: 0 | 1) => void;
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
}) => {
  const { theme, toggleTheme } = useTheme();

  // --- Helper Functions ---

  const getHeaderTitleColor = () => {
    if (theme === 'retro') return 'text-[#8B261D]';
    if (selectedDriver === DriverType.COMMERCIAL) return 'text-mist-cyan';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-mist-purple';
    if (selectedDriver === DriverType.AESTHETIC) return 'text-mist-rose';
    if (selectedDriver === DriverType.TRAILER) return 'text-mist-orange';
    return 'text-gold-primary';
  };

  const getHeaderIconFill = () => {
    if (theme === 'retro') return 'fill-[#8B261D]/20';
    if (selectedDriver === DriverType.COMMERCIAL) return 'fill-cyan-400/20';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'fill-purple-400/20';
    if (selectedDriver === DriverType.AESTHETIC) return 'fill-rose-400/20';
    if (selectedDriver === DriverType.TRAILER) return 'fill-orange-400/20';
    return 'fill-gold-primary/20';
  };

  const getThemeTextColor = () => {
    if (selectedDriver === DriverType.COMMERCIAL) return 'text-mist-cyan';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-mist-purple';
    if (selectedDriver === DriverType.AESTHETIC) return 'text-mist-rose';
    if (selectedDriver === DriverType.TRAILER) return 'text-mist-orange';
    return 'text-gold-primary';
  };

  const getThemeBorderColor = () => {
    if (theme === 'retro') return 'border-[var(--border-main)]';
    if (selectedDriver === DriverType.COMMERCIAL) return 'border-cyan-400/15';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'border-purple-400/15';
    if (selectedDriver === DriverType.AESTHETIC) return 'border-rose-400/15';
    if (selectedDriver === DriverType.TRAILER) return 'border-orange-400/15';
    return 'border-[#D4AF37]/15';
  };

  const getNarrativeEngineLabel = () => {
    if (selectedDriver === DriverType.COMMERCIAL) return lang === 'EN' ? "SUTURE ENGINE" : "欲望缝合";
    if (selectedDriver === DriverType.EXPERIMENTAL) return lang === 'EN' ? "REDUCTION ENGINE" : "现象学还原";
    if (selectedDriver === DriverType.AESTHETIC) return lang === 'EN' ? "AESTHETIC" : "情绪美学";
    if (selectedDriver === DriverType.TRAILER) return lang === 'EN' ? "TRAILER ENGINE" : "虚拟幻象";
    return lang === 'EN' ? "NARRATIVE ENGINE" : "爱欲迷宫";
  };

  return (
    <header className={`h-14 bg-[var(--bg-header)] backdrop-blur-md border-b ${getThemeBorderColor()} flex items-center justify-between px-6 z-50 sticky top-0 shrink-0 transition-colors duration-500`}>
      <div className="flex items-center gap-5">
        <button
          onClick={() => setPage(0)}
          className={`flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:bg-white/5 hover:scale-105 active:scale-95`}
        >
          <Globe size={14} className={`shrink-0 transition-all duration-100 ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />
          <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}>
            {lang === 'CN' ? "返回全局" : "GLOBAL"}
          </span>
        </button>
        <span className={`${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest`}>
          {lang === 'CN' ? '迷雾学派: ' : 'MIST: '}{driverName}
        </span>
      </div>

      {!(viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'TOPOLOGY' || viewMode === 'RSI') && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
          <button
            onClick={() => setViewMode('ENGINE')}
            className={`flex items-center gap-2 font-serif font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${viewMode === 'ENGINE' ? getHeaderTitleColor() : (theme === 'retro' ? "text-zinc-600 hover:text-black font-sans" : "text-zinc-400 hover:text-white font-sans")}`}
          >
            <Cpu size={14} className={viewMode === 'ENGINE' ? getHeaderIconFill() : ""} />
            {lang === 'CN' ? "核心引擎" : "CORE ENGINE"}
          </button>
          <div className={`w-4 h-px ${theme === 'retro' ? 'bg-black' : 'bg-zinc-800'}`}></div>
          <button
            onClick={() => setViewMode('DIVERGENCE')}
            className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${viewMode === 'DIVERGENCE' ? getHeaderTitleColor() : (theme === 'retro' ? "text-zinc-600 hover:text-black font-sans" : "text-zinc-400 hover:text-white font-sans")}`}
          >
            <GitFork size={14} />
            {lang === 'CN' ? "分歧点" : "THE DIVERGENCE"}
          </button>
          <div className={`w-4 h-px ${theme === 'retro' ? 'bg-black' : 'bg-zinc-800'}`}></div>
          <button
            onClick={() => setViewMode('BIBLE')}
            className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${viewMode === 'BIBLE' ? getHeaderTitleColor() : (theme === 'retro' ? "text-zinc-600 hover:text-black font-sans" : "text-zinc-400 hover:text-white font-sans")}`}
          >
            <BookOpen size={14} />
            {lang === 'CN' ? "创意圣经" : "CREATIVE BIBLE"}
          </button>
        </div>
      )}

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
                  <img 
                    src={currentUser.avatarUrl} 
                    alt="avatar" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      // Prevent infinite error loop and traffic
                      (e.target as HTMLImageElement).style.display = 'none';
                      // Optionally we could notify the parent to clear the URL, 
                      // but styling it out is the safest immediate fix.
                    }}
                  />
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
            { icon: HelpCircle, label: lang === 'CN' ? '哲学辞典' : 'CODEX', labelCn: '哲学辞典', labelEn: 'CODEX', onClick: openManual, isActive: isManualOpen },
            { icon: HistoryIcon, label: lang === 'CN' ? '欲望档案' : 'ARCHIVE', labelCn: '欲望档案', labelEn: 'ARCHIVE', onClick: openHistory, isActive: isHistoryOpen },
            { icon: Settings, label: lang === 'CN' ? '系统配置' : 'SYSTEM CONFIG', labelCn: '系统配置', labelEn: 'SYSTEM CONFIG', onClick: openSettings, isActive: false }
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
  );
};