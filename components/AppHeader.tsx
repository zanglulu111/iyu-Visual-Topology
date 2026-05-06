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
  const isPortalChrome = viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'RORSCHACH' || viewMode === 'DICTIONARY';

  const getHeaderTitleColor = () => !isPortalChrome && selectedDriver === DriverType.COMMERCIAL
    ? 'text-[var(--text-accent)]'
    : 'text-[var(--text-header)]';

  const getThemeTextColor = () => 'text-[var(--text-header)]';

  const getThemeBorderColor = () => {
    if (theme === 'retro') return 'border-[var(--border-main)]';
    return 'border-[var(--border-main)]';
  };

  const getBorderAccentColor = () => {
    if (theme === 'retro') return 'rgba(139, 38, 29, 0.18)';
    if (isPortalChrome) return 'rgba(255,255,255,0.18)';
    return selectedDriver === DriverType.COMMERCIAL ? 'var(--mist-archive-signal-wash)' : 'rgba(166, 64, 56, 0.22)';
  };

  const getLineGlow = () => {
    if (theme === 'retro') return '';
    if (isPortalChrome) return '';
    return selectedDriver === DriverType.COMMERCIAL ? '0 0 12px var(--mist-archive-signal-glow)' : '0 0 12px rgba(166,64,56,0.24)';
  };

  const headerTitleStyle: React.CSSProperties = theme === 'retro'
    ? { color: 'var(--text-accent)', textShadow: 'none' }
    : (!isPortalChrome && selectedDriver === DriverType.COMMERCIAL
      ? { color: 'var(--text-accent)', textShadow: 'none' }
      : { color: 'var(--mist-archive-ink)', textShadow: 'none' });

  const getNarrativeEngineLabel = () => {
    if (selectedDriver === DriverType.COMMERCIAL) return lang === 'EN' ? "SUTURE ENGINE" : "欲望缝合";
    if (selectedDriver === DriverType.EXPERIMENTAL) return lang === 'EN' ? "REDUCTION ENGINE" : "现象学还原";
    if (selectedDriver === DriverType.AESTHETIC) return lang === 'EN' ? "AESTHETIC" : "情绪美学";
    if (selectedDriver === DriverType.TRAILER) return lang === 'EN' ? "CANVAS ENGINE" : "迷雾画布";
    return lang === 'EN' ? "NARRATIVE ENGINE" : "爱欲迷宫";
  };

  const mutedControlClass = 'text-[var(--text-muted)] hover:text-[var(--text-header)]';
  const toolbarShellClass = 'mist-app-toolbar-shell';
  const toolbarButtonClass = 'mist-app-nav-button border border-transparent hover:border-transparent hover:bg-transparent';

  return (
    <header className={`mist-app-header bg-[var(--bg-header)] backdrop-blur-md border-b ${getThemeBorderColor()} flex items-center justify-between px-4 md:px-5 z-50 sticky top-0 shrink-0 transition-all duration-500 animate-page-dissolve relative`}>
      {/* Theme Divider Line - Global Consistency Accent */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500 z-10" 
        style={{ 
          backgroundColor: theme === 'retro' ? 'var(--border-accent)' : getBorderAccentColor(),
          opacity: theme === 'retro' ? 0.2 : 0.15,
          boxShadow: theme === 'retro' ? 'none' : (getLineGlow() ? getLineGlow() : '0 0 15px var(--philosopher-accent)')
        }} 
      />
      <div className="flex items-center gap-5">
        {/* Portal-origin pages: ← 入口 button, returns to UniversePortal */}
        {(viewMode === 'RORSCHACH' || viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'DICTIONARY') ? (
          <button
            onClick={() => setPage(-1)}
            className={`mist-app-archive-button text-[9px] font-mono tracking-[0.15em] transition-all duration-300 active:scale-95 px-2 py-1 border w-[72px] flex items-center justify-center ${
              theme === 'retro'
                ? 'text-[var(--text-accent)] border-[var(--border-main)] hover:border-[var(--border-accent)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-header)] border-[var(--border-glass)] hover:border-[var(--border-strong)]'
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
            className={`mist-app-archive-button flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 bg-transparent active:scale-95`}
          >
            <Globe size={14} className={`shrink-0 transition-all duration-100 ${mutedControlClass}`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${mutedControlClass}`}>
              {lang === 'CN' ? "返回全局" : "GLOBAL"}
            </span>
          </button>
        )}
        <span 
          className={`mist-app-header-title ${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest`}
          style={headerTitleStyle}
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
        !(viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'TOPOLOGY' || viewMode === 'RSI' || viewMode === 'RORSCHACH' || viewMode === 'ANALYSIS' || viewMode === 'DICTIONARY' || viewMode === 'CANVAS') && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
            <button
              onClick={() => setViewMode('ENGINE')}
              className={`mist-app-nav-button ${viewMode === 'ENGINE' ? 'is-active' : ''} flex items-center gap-2 font-serif font-bold transition-all duration-300 active:scale-95 ${viewMode === 'ENGINE' ? getHeaderTitleColor() : `${mutedControlClass} font-sans`}`}
            >
              <Cpu size={14} className={viewMode === 'ENGINE' ? `${getThemeTextColor()} fill-none` : ""} />
              {lang === 'CN' ? "核心引擎" : "CORE ENGINE"}
            </button>
            <div className="w-4 h-px bg-[var(--border-glass)]"></div>
            <button
              onClick={() => setViewMode('DIVERGENCE')}
                  className={`mist-app-nav-button ${viewMode === 'DIVERGENCE' ? 'is-active' : ''} flex items-center gap-2 transition-all duration-300 active:scale-95 ${viewMode === 'DIVERGENCE' ? getHeaderTitleColor() : `${mutedControlClass} font-sans`}`}
            >
              <GitFork size={14} />
              {lang === 'CN' ? "分歧点" : "THE DIVERGENCE"}
            </button>
            {selectedDriver !== DriverType.AESTHETIC && (
              <>
                <div className="w-4 h-px bg-[var(--border-glass)]"></div>
                <button
                  onClick={() => setViewMode('BIBLE')}
                  className={`mist-app-nav-button ${viewMode === 'BIBLE' ? 'is-active' : ''} flex items-center gap-2 transition-all duration-300 active:scale-95 ${viewMode === 'BIBLE' ? getHeaderTitleColor() : `${mutedControlClass} font-sans`}`}
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
          <div className={`flex items-center p-1 transition-all duration-300 border border-transparent ${toolbarShellClass}`}>
            {[
              { icon: Settings, label: lang === 'CN' ? '系统配置' : 'SETTINGS', labelCn: '系统配置', labelEn: 'SETTINGS', onClick: openSettings, isActive: false },
              { icon: HistoryIcon, label: lang === 'CN' ? '欲望档案' : 'ARCHIVE', labelCn: '欲望档案', labelEn: 'ARCHIVE', onClick: openHistory, isActive: isHistoryOpen },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={item.onClick}
                className={`flex items-center gap-1.5 transition-all duration-300 group px-3 h-8 ${toolbarButtonClass} active:scale-95 ${item.isActive ? 'is-active ' + getThemeTextColor() : mutedControlClass}`}
              >
                <item.icon size={13} className={`shrink-0 transition-all duration-100 ${item.isActive ? 'text-current' : mutedControlClass}`} />
                <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${item.isActive ? 'text-current' : mutedControlClass}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Rightmost Toolbar Group */}
        <div className={`flex items-center gap-1 px-1 py-1 transition-all duration-500 border border-transparent backdrop-blur-sm hover:backdrop-blur-md ${toolbarShellClass}`}>
          
          {/* 1. Ring Toggle */}
          <button
            onClick={() => setShowRings(!showRings)}
            className={`flex items-center justify-center w-8 h-8 transition-all duration-300 ${toolbarButtonClass} active:scale-90 focus:outline-none ${
              showRings 
                ? 'is-active ' + getThemeTextColor()
                : mutedControlClass
            }`}
            title={lang === 'CN' ? "背景圆环开关" : "Background Rings Toggle"}
          >
            <Aperture size={13} className={`shrink-0 transition-all duration-300 ${showRings ? 'rotate-180' : ''}`} />
          </button>

          {/* 2. Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-8 h-8 ${toolbarButtonClass} active:scale-90 transition-all duration-300 ${mutedControlClass}`}
            title={theme === 'dark' ? (lang === 'CN' ? "切换为复古主题" : "Switch to Retro") : (lang === 'CN' ? "切换为暗黑主题" : "Switch to Dark")}
          >
            {theme === 'dark' ? <Moon size={13} strokeWidth={2} /> : <Sun size={13} strokeWidth={2} className="text-[var(--text-accent)]" />}
          </button>

          {/* 3. Language Toggle */}
          <button
            onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
            className={`w-8 h-8 flex items-center justify-center ${toolbarButtonClass} active:scale-90 transition-all duration-300 ${mutedControlClass}`}
            title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'CN' ? '中' : 'EN'}</span>
          </button>

          {/* 4. Profile / User */}
          <button
            onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
            className={`flex items-center gap-2 group transition-all duration-300 px-2 h-8 ${toolbarButtonClass} active:scale-95`}
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
                className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${mutedControlClass}`}
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
