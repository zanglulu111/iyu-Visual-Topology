import React from 'react';
import { Globe, Wand2, HelpCircle, History as HistoryIcon, Cpu, GitFork, BookOpen, Settings, User as UserIcon, LogOut, Aperture } from 'lucide-react';
import { DriverType, User } from '../types';

type ViewMode = 'ENGINE' | 'DIVERGENCE' | 'BIBLE' | 'METONYMY' | 'TOPOLOGY';

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

  // --- Helper Functions Moved from App.tsx ---

  const getHeaderTitleColor = () => {
    if (selectedDriver === DriverType.COMMERCIAL) return 'text-cyan-400';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-purple-400';
    if (selectedDriver === DriverType.AESTHETIC) return 'text-rose-400';
    if (selectedDriver === DriverType.TRAILER) return 'text-orange-400';
    return 'text-gold-primary';
  };

  const getHeaderIconFill = () => {
    if (selectedDriver === DriverType.COMMERCIAL) return 'fill-cyan-400/20';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'fill-purple-400/20';
    if (selectedDriver === DriverType.AESTHETIC) return 'fill-rose-400/20';
    if (selectedDriver === DriverType.TRAILER) return 'fill-orange-400/20';
    return 'fill-gold-primary/20';
  };

  const getThemeTextColor = () => {
    if (selectedDriver === DriverType.COMMERCIAL) return 'text-cyan-400';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-purple-400';
    if (selectedDriver === DriverType.AESTHETIC) return 'text-rose-400';
    if (selectedDriver === DriverType.TRAILER) return 'text-orange-400';
    return 'text-gold-primary';
  };

  const getThemeHoverClass = () => {
    // If on homepage (page 0), hover should be white as per user request
    if (page === 0) return 'group-hover:text-white';

    if (selectedDriver === DriverType.COMMERCIAL) return 'group-hover:text-cyan-400';
    if (selectedDriver === DriverType.EXPERIMENTAL) return 'group-hover:text-purple-400';
    if (selectedDriver === DriverType.AESTHETIC) return 'group-hover:text-rose-400';
    if (selectedDriver === DriverType.TRAILER) return 'group-hover:text-orange-400';
    return 'group-hover:text-gold-primary';
  };

  const getNarrativeEngineLabel = () => {
    if (selectedDriver === DriverType.COMMERCIAL) return lang === 'EN' ? "SUTURE ENGINE" : "欲望缝合";
    if (selectedDriver === DriverType.EXPERIMENTAL) return lang === 'EN' ? "REDUCTION ENGINE" : "现象学还原";
    if (selectedDriver === DriverType.AESTHETIC) return lang === 'EN' ? "AESTHETIC" : "情绪美学";
    if (selectedDriver === DriverType.TRAILER) return lang === 'EN' ? "TRAILER ENGINE" : "虚拟幻象";
    return lang === 'EN' ? "NARRATIVE ENGINE" : "爱欲迷宫";
  };

  return (
    <header className="h-14 bg-[#050505]/95 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 z-50 sticky top-0 shrink-0 transition-colors duration-500">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setPage(0)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] font-bold uppercase tracking-widest text-zinc-300 group transition-all duration-100"
        >
          <Globe size={12} className={`transition-all duration-100 ${getThemeHoverClass()}`} />
          <span className={`transition-all duration-100 ${getThemeHoverClass()}`}>
            {lang === 'CN' ? "返回全局" : "GLOBAL"}
          </span>
        </button>
        <div className="h-6 w-px bg-white/10"></div>
        <span className={`${getHeaderTitleColor()} font-serif font-bold text-xs uppercase tracking-widest`}>
          {lang === 'CN' ? '迷雾学派: ' : 'MIST: '}{driverName}
        </span>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
        <button
          onClick={() => setViewMode('ENGINE')}
          className={`flex items-center gap-2 font-serif font-bold ${viewMode === 'ENGINE' ? getHeaderTitleColor() : "text-zinc-600 hover:text-zinc-400 font-sans"}`}
        >
          <Cpu size={14} className={viewMode === 'ENGINE' ? getHeaderIconFill() : ""} />
          {getNarrativeEngineLabel()}
        </button>
        <div className="w-4 h-px bg-zinc-800"></div>
        <button
          onClick={() => setViewMode('DIVERGENCE')}
          className={`flex items-center gap-2 ${viewMode === 'DIVERGENCE' ? getHeaderTitleColor() : "text-zinc-600 hover:text-zinc-400 font-sans"}`}
        >
          <GitFork size={14} />
          {lang === 'CN' ? "分歧点" : "THE DIVERGENCE"}
        </button>
        <div className="w-4 h-px bg-zinc-800"></div>
        <button
          onClick={() => setViewMode('BIBLE')}
          className={`flex items-center gap-2 ${viewMode === 'BIBLE' ? getHeaderTitleColor() : "text-zinc-600 hover:text-zinc-400 font-sans"}`}
        >
          <BookOpen size={14} />
          {lang === 'CN' ? "创意圣经" : "CREATIVE BIBLE"}
        </button>
      </div>

      <div className="flex items-center gap-4">
        {[
          { icon: HelpCircle, label: lang === 'CN' ? '哲学辞典' : 'CODEX', labelCn: '哲学辞典', labelEn: 'CODEX', onClick: openManual, isActive: isManualOpen },
          { icon: HistoryIcon, label: lang === 'CN' ? '欲望档案' : 'ARCHIVE', labelCn: '欲望档案', labelEn: 'ARCHIVE', onClick: openHistory, isActive: isHistoryOpen },
          { icon: Settings, label: lang === 'CN' ? '系统配置' : 'SYSTEM CONFIG', labelCn: '系统配置', labelEn: 'SYSTEM CONFIG', onClick: openSettings, isActive: false }
        ].map((item, idx) => (
          <button
            key={idx}
            onClick={item.onClick}
            className={`flex items-center gap-2 transition-all duration-100 group ${item.isActive ? getThemeTextColor() : "text-zinc-300"}`}
          >
            <item.icon size={14} className={`shrink-0 transition-all duration-100 ${item.isActive ? 'text-current' : `text-zinc-500 ${getThemeHoverClass()}`}`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-100 hidden md:block ${item.isActive ? 'text-current' : `text-zinc-500 ${getThemeHoverClass()}`}`}>
              {item.label}
            </span>
          </button>
        ))}
        <div className="h-4 w-px bg-zinc-800"></div>
        <button
          onClick={() => setShowRings(!showRings)}
          className={`flex items-center gap-2 transition-all duration-100 group ${showRings ? "text-rose-400" : "text-zinc-500"}`}
          title={lang === 'CN' ? "背景圆环开关" : "Background Rings Toggle"}
        >
          <Aperture size={14} className={`shrink-0 transition-all duration-300 ${showRings ? 'rotate-180 text-rose-400' : 'text-zinc-600'}`} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] hidden xl:block">
            {lang === 'CN' ? (showRings ? "背景开" : "背景关") : (showRings ? "ASTROLABE" : "ASTROLABE OFF")}
          </span>
        </button>
        <button
          onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
          className="flex items-center justify-center w-7 h-7 rounded border border-zinc-800 hover:border-zinc-500 bg-zinc-900/50 text-[10px] font-bold text-zinc-400 hover:text-white transition-all duration-100"
          title="Toggle Language"
        >
          {lang === 'CN' ? '中' : 'EN'}
        </button>
        <div className="h-4 w-px bg-zinc-800"></div>
        <button
          onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
          className="flex items-center gap-2 group transition-all duration-100 hover:scale-105"
        >
          {currentUser.id !== 'guest_user' ? (
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-gold-primary')} border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-white shadow-lg overflow-hidden`}>
                {currentUser.avatarUrl ? (
                  <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  currentUser.username.substring(0, 1).toUpperCase()
                )}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                {currentUser.username}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-800 text-zinc-500 group-hover:text-white transition-colors">
                 <UserIcon size={12} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                {lang === 'CN' ? '未登录' : 'GUEST'}
              </span>
            </div>
          )}
        </button>
      </div>
    </header>
  );
};