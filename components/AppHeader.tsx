import React, { useState } from 'react';
import { Globe, Wand2, History as HistoryIcon, Cpu, GitFork, BookOpen, Settings, User as UserIcon, Aperture, Sun, Moon, FolderOpen, FileText, ListChecks, TerminalSquare } from 'lucide-react';
import { ConceptDesignWorkspacePage, DriverType, User, ViewMode } from '../types';
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
  conceptWorkspacePage?: ConceptDesignWorkspacePage;
  setConceptWorkspacePage?: (page: ConceptDesignWorkspacePage) => void;
  handleOpenMetonymyPage: () => void;
  openManual: () => void;
  isManualOpen: boolean;
  openHistory: () => void;
  isHistoryOpen: boolean;
  openProjects?: () => void;
  isProjectsOpen?: boolean;
  activeProjectTitle?: string;
  openSettings: () => void;
  openAuth: () => void;
  openProfile: () => void;
  onLogout: () => void;
  currentUser: User;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
  setInitialProtocol?: (p: string | undefined) => void;
  onPreloadView?: (mode: ViewMode) => void;
  onReturnToPortal?: () => void;
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
  conceptWorkspacePage = 'ENGINE',
  setConceptWorkspacePage,
  handleOpenMetonymyPage,
  openManual,
  isManualOpen,
  openHistory,
  isHistoryOpen,
  openProjects,
  isProjectsOpen = false,
  activeProjectTitle,
  openSettings,
  openAuth,
  openProfile,
  currentUser,
  onLogout,
  showRings,
  setShowRings,
  setInitialProtocol,
  onPreloadView,
  onReturnToPortal,
  children,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [ringSpinKey, setRingSpinKey] = useState(0);

  // --- Helper Functions ---
  const isPortalChrome = viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'RORSCHACH' || viewMode === 'DICTIONARY' || viewMode === 'SKILLS';

  const getHeaderTitleColor = () => !isPortalChrome && selectedDriver
    ? (theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]')
    : (theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--text-header)]');

  const getThemeTextColor = () => theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--text-header)]';

  const getThemeBorderColor = () => {
    if (theme === 'retro') return 'border-[var(--border-main)]';
    return 'border-[var(--border-main)]';
  };

  const getBorderAccentColor = () => {
    if (theme === 'retro') return 'rgba(139, 38, 29, 0.18)';
    if (isPortalChrome) return 'rgba(255,255,255,0.18)';
    return selectedDriver ? 'var(--mist-active-accent)' : 'rgba(166, 64, 56, 0.22)';
  };

  const getLineGlow = () => {
    if (theme === 'retro') return '';
    if (isPortalChrome) return '';
    return selectedDriver ? '0 0 12px var(--mist-active-accent)' : '0 0 12px rgba(166,64,56,0.24)';
  };

  const headerTitleStyle: React.CSSProperties = theme === 'retro'
    ? { color: 'var(--text-accent)', textShadow: 'none' }
    : (!isPortalChrome && selectedDriver
      ? { color: 'var(--mist-active-accent)', textShadow: 'none' }
      : { color: 'var(--mist-active-accent, var(--text-header))', textShadow: 'none' });

  const getNarrativeEngineLabel = () => {
    if (selectedDriver === DriverType.COMMERCIAL) return lang === 'EN' ? "SUTURE ENGINE" : "欲望缝合";
    if (selectedDriver === DriverType.EXPERIMENTAL) return lang === 'EN' ? "METONYMIC SCRIPT" : "换喻脚本";
    if (selectedDriver === DriverType.AESTHETIC) return lang === 'EN' ? "AESTHETIC" : "情绪美学";
    if (selectedDriver === DriverType.CONCEPT_DESIGN) return lang === 'EN' ? "MIST EDICT" : "迷雾律令";
    if (selectedDriver === DriverType.TRAILER) return lang === 'EN' ? "CANVAS ENGINE" : "迷雾画布";
    return lang === 'EN' ? "NARRATIVE ENGINE" : "爱欲迷宫";
  };

  const mutedControlClass = theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white';
  const inactiveControlClass = theme === 'retro' ? 'text-zinc-600 hover:text-black hover:border-black/5' : 'text-zinc-400 hover:text-white';
  const inactiveIconClass = theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white';
  const getActiveNavClass = (isActive: boolean) => isActive ? `is-active ${getHeaderTitleColor()}` : `${mutedControlClass} font-sans`;
  const headerSeparatorClass = `select-none text-[10px] font-mono font-bold leading-none ${theme === 'retro' ? 'text-zinc-600' : 'text-white/70'}`;
  const renderHeaderSeparator = () => (
    <span className={headerSeparatorClass} aria-hidden="true">-</span>
  );
  const conceptWorkspaceNavItems: Array<{
    id: ConceptDesignWorkspacePage;
    icon: React.ElementType;
    labelCn: string;
    labelEn: string;
  }> = [
    { id: 'ENGINE', icon: Cpu, labelCn: '律令引擎', labelEn: 'EDICT ENGINE' },
    { id: 'COMPILE', icon: FileText, labelCn: '编译页', labelEn: 'COMPILE' },
    { id: 'RESULT', icon: ListChecks, labelCn: '编译结果', labelEn: 'RESULT' },
    { id: 'FINAL', icon: TerminalSquare, labelCn: '终稿指令', labelEn: 'FINAL INSTRUCTION' }
  ];

  return (
    <header className={`mist-app-header h-14 bg-[var(--bg-header)] backdrop-blur-md border-b ${getThemeBorderColor()} flex items-center justify-between px-4 md:px-5 z-50 sticky top-0 shrink-0 transition-all duration-500 animate-page-dissolve`}>
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
        {(viewMode === 'RORSCHACH' || viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'DICTIONARY' || viewMode === 'SKILLS') ? (
          <button
            onClick={() => onReturnToPortal ? onReturnToPortal() : setPage(-1)}
            className={`mist-app-archive-button text-[9px] font-mono tracking-[0.15em] transition-all duration-300 hover:scale-105 active:scale-95 px-2 py-1 rounded-sm border w-[72px] flex items-center justify-center ${
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
            className="mist-app-top-nav-button flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:scale-105 active:scale-95"
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
          !(viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'TOPOLOGY' || viewMode === 'RSI' || viewMode === 'RORSCHACH' || viewMode === 'ANALYSIS' || viewMode === 'DICTIONARY' || viewMode === 'SKILLS' || viewMode === 'CANVAS') && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
            {selectedDriver === DriverType.CONCEPT_DESIGN ? (
              <>
                {conceptWorkspaceNavItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = viewMode === 'ENGINE' && conceptWorkspacePage === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      {index > 0 && renderHeaderSeparator()}
                      <button
                        onMouseEnter={() => onPreloadView?.('ENGINE')}
                        onFocus={() => onPreloadView?.('ENGINE')}
                        onClick={() => {
                          setViewMode('ENGINE');
                          setConceptWorkspacePage?.(item.id);
                        }}
                        className={`mist-app-top-nav-button flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${getActiveNavClass(isActive)}`}
                      >
                        <Icon size={14} className="shrink-0 text-current" />
                        {lang === 'CN' ? item.labelCn : item.labelEn}
                      </button>
                    </React.Fragment>
                  );
                })}
              </>
            ) : (
              <>
            {selectedDriver !== DriverType.EXPERIMENTAL && (
              <>
                <button
                  onMouseEnter={() => onPreloadView?.('ENGINE')}
                  onFocus={() => onPreloadView?.('ENGINE')}
                  onClick={() => setViewMode('ENGINE')}
                  className={`mist-app-top-nav-button flex items-center gap-2 font-serif font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${getActiveNavClass(viewMode === 'ENGINE')}`}
                >
                  <Cpu size={14} className="shrink-0 text-current" />
                  {lang === 'CN' ? "核心引擎" : "CORE ENGINE"}
                </button>
                {renderHeaderSeparator()}
                <button
                  onMouseEnter={() => onPreloadView?.('DIVERGENCE')}
                  onFocus={() => onPreloadView?.('DIVERGENCE')}
                  onClick={() => setViewMode('DIVERGENCE')}
                  className={`mist-app-top-nav-button flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${getActiveNavClass(viewMode === 'DIVERGENCE')}`}
                >
                  <GitFork size={14} className="shrink-0 text-current" />
                  {lang === 'CN' ? "分歧点" : "THE DIVERGENCE"}
                </button>
              </>
            )}
            {selectedDriver !== DriverType.AESTHETIC && (
              <>
                {selectedDriver !== DriverType.EXPERIMENTAL && renderHeaderSeparator()}
                <button
                  onMouseEnter={() => onPreloadView?.('BIBLE')}
                  onFocus={() => onPreloadView?.('BIBLE')}
                  onClick={() => setViewMode('BIBLE')}
                  className={`mist-app-top-nav-button flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${getActiveNavClass(viewMode === 'BIBLE')}`}
                >
                  <BookOpen size={14} className="shrink-0 text-current" />
                  {lang === 'CN' ? "叙事创作" : "NARRATIVE WRITING"}
                </button>
                {renderHeaderSeparator()}
                <button
                  onMouseEnter={() => onPreloadView?.('METONYMY')}
                  onFocus={() => onPreloadView?.('METONYMY')}
                  onClick={handleOpenMetonymyPage}
                  className={`mist-app-top-nav-button flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${getActiveNavClass(viewMode === 'METONYMY')}`}
                >
                  <Wand2 size={14} className="shrink-0 text-current" />
                  {lang === 'CN' ? "换喻脚本" : "METONYMY SCRIPT"}
                </button>
              </>
            )}
              </>
            )}
          </div>
        )
      )}

      {!children && selectedDriver === DriverType.CONCEPT_DESIGN && viewMode === 'ENGINE' && (
        <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-md border border-[var(--border-main)] bg-[var(--bg-header)]/80 p-0.5 backdrop-blur md:hidden">
          {conceptWorkspaceNavItems.map(item => {
            const Icon = item.icon;
            const isActive = conceptWorkspacePage === item.id;
            return (
              <button
                key={item.id}
                onMouseEnter={() => onPreloadView?.('ENGINE')}
                onFocus={() => onPreloadView?.('ENGINE')}
                onClick={() => {
                  setViewMode('ENGINE');
                  setConceptWorkspacePage?.(item.id);
                }}
                className={`flex h-8 min-w-10 items-center justify-center rounded px-2 transition-all ${
                  isActive
                    ? `${getHeaderTitleColor()} bg-[var(--surface-hover)]`
                    : mutedControlClass
                }`}
                title={lang === 'CN' ? item.labelCn : item.labelEn}
                aria-label={lang === 'CN' ? item.labelCn : item.labelEn}
              >
                <Icon size={15} className="shrink-0" />
              </button>
            );
          })}
        </div>
      )}

      <div className="flex items-center justify-end gap-2 ml-auto">
        {viewMode === 'SKILLS' && (
          <div className={`flex items-center p-1 rounded-full transition-all duration-300 border border-transparent bg-transparent ${
            theme === 'retro' ? '' : 'hover:bg-black/30'
          }`}>
            <button
              onClick={openSettings}
              className={`flex items-center gap-1.5 transition-all duration-300 group px-3 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95 ${inactiveControlClass}`}
              title={lang === 'CN' ? '系统配置' : 'System Config'}
            >
              <Settings size={13} className={`shrink-0 transition-all duration-100 ${inactiveIconClass}`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${inactiveIconClass}`}>
                {lang === 'CN' ? '配置' : 'CONFIG'}
              </span>
            </button>
          </div>
        )}

        {/* Navigation Links — ARCHIVE ONLY */}
        {!(viewMode === 'ARCHIVE' || viewMode === 'VIDEO' || viewMode === 'DICTIONARY' || viewMode === 'SKILLS' || viewMode === 'RORSCHACH' || viewMode === 'ANALYSIS') && (
          <div className={`flex items-center p-1 rounded-full transition-all duration-300 border border-transparent bg-transparent ${
            theme === 'retro' ? '' : 'hover:bg-black/30'
          }`}>
            {[
              ...(openProjects ? [{ icon: FolderOpen, label: lang === 'CN' ? '项目' : 'PROJECT', labelCn: '项目', labelEn: 'PROJECT', onClick: openProjects, isActive: isProjectsOpen }] : []),
              { icon: Settings, label: lang === 'CN' ? '配置' : 'CONFIG', labelCn: '配置', labelEn: 'CONFIG', onClick: openSettings, isActive: false },
              { icon: HistoryIcon, label: lang === 'CN' ? '历史' : 'HISTORY', labelCn: '历史', labelEn: 'HISTORY', onClick: openHistory, isActive: isHistoryOpen },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={item.onClick}
                className={`flex items-center gap-1.5 transition-all duration-300 group px-3 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95 ${item.isActive ? getThemeTextColor() : inactiveControlClass}`}
              >
                <item.icon size={13} className={`shrink-0 transition-all duration-100 ${item.isActive ? 'text-current' : inactiveIconClass}`} />
                <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${item.isActive ? 'text-current' : inactiveIconClass}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Rightmost Toolbar Group */}
        <div className={`flex items-center gap-1 px-1 py-1 rounded-full transition-all duration-500 border border-transparent bg-transparent ${
          theme === 'retro' ? '' : 'hover:bg-black/30'
        }`}>

          {/* 1. Ring Toggle */}
          <button
            onClick={() => {
              setRingSpinKey(prev => prev + 1);
              setShowRings(!showRings);
            }}
            className={`mist-ring-toggle-button flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 focus:outline-none ${
              showRings
                ? 'is-active ' + (theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]')
                : inactiveControlClass
            }`}
            title={lang === 'CN' ? "背景圆环开关" : "Background Rings Toggle"}
          >
            <Aperture
              key={ringSpinKey}
              size={13}
              className={`mist-ring-toggle-icon ${ringSpinKey > 0 ? 'is-click-spinning' : ''} shrink-0 ${showRings ? (theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]') : ''}`}
            />
          </button>

          {/* 2. Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-8 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 transition-all duration-300 ${inactiveControlClass}`}
            title={theme === 'dark' ? (lang === 'CN' ? "切换为复古主题" : "Switch to Retro") : (lang === 'CN' ? "切换为暗黑主题" : "Switch to Dark")}
          >
            {theme === 'dark' ? <Moon size={13} strokeWidth={2} /> : <Sun size={13} strokeWidth={2} className="text-[var(--text-accent)]" />}
          </button>

          {/* 3. Language Toggle */}
          <button
            onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
            className={`w-8 h-8 flex items-center justify-center rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 transition-all duration-300 ${inactiveControlClass}`}
            title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'CN' ? '中' : 'EN'}</span>
          </button>

          {/* 4. Profile / User */}
          <button
            onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
            className="flex items-center gap-2 group transition-all duration-300 px-2 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95"
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
