
import React, { useState, useEffect } from 'react';
import { DriverSelector } from './DriverSelector';
import { DriverType, User } from '../types';
import { Globe, Wand2, HelpCircle, History as HistoryIcon, Settings, User as UserIcon, BookOpen, Terminal, Database, ShieldAlert, Cpu, Film, Folder, Aperture, Zap, Sun, Moon } from 'lucide-react';
import { ProductManualModal } from './ProductManualModal';
import { SutureModal } from './SutureModal';
import { HistoryModal } from './HistoryModal';
import { BorromeanRings } from './BorromeanRings';
import { useTheme } from '../contexts/ThemeContext';

const Clock = ({ lang, theme }: { lang: 'CN' | 'EN', theme: 'dark' | 'retro' }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCN = (d: Date) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} 北京时间`;
  };

  const formatEN = (d: Date) => d.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';

  return (
    <div className="h-5 overflow-hidden relative flex items-start">
      <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
        <div className="flex flex-col">
          <div className="h-5 flex items-center shrink-0">
            <span className={`text-[10px] font-mono tracking-widest whitespace-nowrap ${theme === 'retro' ? 'text-black opacity-60' : 'text-white/80'}`}>{formatCN(now)}</span>
          </div>
          <div className="h-5 flex items-center shrink-0">
            <span className={`text-[10px] font-mono tracking-widest whitespace-nowrap ${theme === 'retro' ? 'text-black opacity-60' : 'text-white/80'}`}>{formatEN(now)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  setPage: (page: 0 | 1) => void;
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

  const signalLogs = [
    { id: 1, type: "SYS", time: "09:12:44", msg: "Establishing secure connection to the Real..." },
    { id: 2, type: "WARN", time: "09:15:01", msg: "Symbolic chain unstable. Suture recommended." },
    { id: 3, type: "INTEL", time: "09:42:18", msg: "Aesthetic Core updated: New trauma topologies detected." },
    { id: 4, type: "SYS", time: "10:04:55", msg: "Phenomenological reduction initiated. Purging semantics." },
  ];

  return (
    <div className="fixed inset-0 flex flex-col bg-[var(--bg-main)] selection:bg-[var(--selection-bg)] selection:text-[var(--text-accent)] z-50 overflow-hidden font-sans">

      {/* Global Top Navbar */}
      <header className={`shrink-0 z-50 backdrop-blur-md border-b h-14 flex items-center justify-between px-6 transition-colors duration-500 bg-[var(--bg-header)] ${theme === 'retro' ? 'border-black/40' : 'border-white/15'}`}>
        <div className="flex items-center gap-4">
          <Terminal size={14} className="opacity-70 shrink-0 text-[var(--text-main)]" />
          <AnimatedText
            lang={lang}
            hClass="h-4"
            className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80"
            cn={<span className="whitespace-nowrap text-[var(--text-main)]">主体观测中心 // 序列号: MIST-O-1</span>}
            en={<span className="whitespace-nowrap text-[var(--text-main)]">SUBJECT OBSERVATION CENTER // SEQ: MIST-O-1</span>}
          />
        </div>

        {/* Center: Clock */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <Clock lang={lang} theme={theme} />
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
                <div className={`w-5 h-5 rounded-full ${!currentUser?.avatarUrl && (currentUser?.avatarColor || 'bg-gold-primary')} border border-[var(--border-main)]/30 flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden`}>
                  {currentUser?.avatarUrl ? (
                    <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    currentUser?.username?.substring(0, 1).toUpperCase() || 'U'
                  )}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors ${theme === 'retro' ? 'text-[var(--text-accent)]' : ''}`}>
                  {currentUser?.username || 'GUEST'}
                </span>
              </div>
            </button>

            <div className="flex items-center flex-row-reverse gap-1">
              {/* 2. Language Toggle */}
              <button 
                onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
                className={`text-[10px] font-bold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all duration-300 w-7 h-7 flex items-center justify-center rounded-sm tracking-widest hover:bg-white/5 transition-colors`}
              >
                {lang === 'CN' ? '中' : 'EN'}
              </button>

              {/* 3. Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`flex items-center justify-center w-7 h-7 rounded-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all duration-300 hover:bg-white/5 transition-colors`}
                title={theme === 'dark' ? "Toggle Retro Theme" : "Toggle Dark Theme"}
              >
                {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} className="text-[#8B261D]" />}
              </button>

              {/* 4. Ring Toggle */}
              <button
                onClick={() => setShowRings(!showRings)}
                className={`flex items-center justify-center w-7 h-7 rounded-sm transition-all duration-300 hover:bg-white/5 transition-colors ${showRings ? (theme === 'retro' ? 'text-[#8B261D]' : 'text-rose-400') : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`}
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
        <div className={`absolute inset-0 pointer-events-none transition-shadow duration-1000 opacity-20 shadow-[inset_0_0_150px_rgba(0,0,0,1)] ${getGlowTheme(hoveredDriver)}`}></div>

        {/* Background Rings */}
        {showRings && (
          <div className="absolute inset-0 flex items-center justify-end pr-[5%] opacity-[var(--ring-opacity)] pointer-events-none z-0 select-none overflow-hidden scale-[1.1] transition-opacity duration-1000">
            <div className="w-[1000px] h-[1000px] flex items-center justify-center translate-x-1/4">
              <BorromeanRings centered={true} opacity={1} driverType={hoveredDriver || DriverType.NARRATIVE} />
            </div>
          </div>
        )}

        {/* LEFT SIDEBAR: SIGNAL MONITOR */}
        <div className={`w-80 border-r border-[var(--border-main)] bg-[var(--bg-panel)] backdrop-blur flex flex-col shrink-0 hidden lg:flex z-10 transition-colors duration-500`}>

          {/* Logo Area */}
          <div className={`p-8 border-b ${theme === 'retro' ? 'border-black/5' : 'border-white/5'} shrink-0`}>
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
            <p className={`text-[10px] uppercase tracking-[0.4em] mb-4 transition-colors ${theme === 'retro' ? 'text-black/60' : 'text-white/90'}`}>The Visionary Protocol</p>
            <AnimatedText
              lang={lang}
              hClass="h-[40px]"
              className={`text-xs font-light leading-relaxed transition-colors ${theme === 'retro' ? 'text-black/60' : 'text-white/95'}`}
              cn="爱欲视觉拓扑学：在实在界的荒漠上，确立一种比现实更坚固的虚构。"
              en="Erotic Visual Topology: establishing a fiction more solid than reality."
            />
          </div>

          {/* Quick Access Sidebar */}
          <div className={`border-b ${theme === 'retro' ? 'border-black/5' : 'border-white/15'} shrink-0`}>
            <div className={`p-4 space-y-1 ${theme === 'retro' ? 'bg-black/[0.02]' : ''}`}>
              <div className="px-4 py-2">
                <AnimatedText
                  lang={lang}
                  hClass="h-4"
                  className={`text-[10px] font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} opacity-70 uppercase tracking-widest mb-2`}
                  cn="安全协议 / Protocols"
                  en="SECURITY PROTOCOLS"
                />
              </div>
            {[
              { icon: Aperture, labelCn: '三界拓扑', labelEn: 'RSI TOPOLOGY', onClick: () => { setPage(1); setViewMode('RSI'); }, color: 'text-mist-gold' },
              { icon: Zap, labelCn: '欲望图式', labelEn: 'DESIRE GRAPH', onClick: () => { setPage(1); setViewMode('TOPOLOGY'); }, color: 'text-mist-orange' },
              { icon: Folder, labelCn: '案例档案', labelEn: 'CASE ARCHIVES', onClick: () => { setPage(1); setViewMode('ARCHIVE'); }, color: 'text-mist-red' },
              { icon: Film, labelCn: '影像资料库', labelEn: 'VIDEO ARCHIVE', onClick: () => { setPage(1); setViewMode('VIDEO'); }, color: 'text-mist-cyan' },
              { icon: BookOpen, labelCn: '哲学辞典', labelEn: 'CODEX', onClick: openManual, color: 'text-mist-rose' },
              { icon: HistoryIcon, labelCn: '欲望档案', labelEn: 'ARCHIVES', onClick: openHistory, color: 'text-mist-purple' },
              { icon: Settings, labelCn: '系统配置', labelEn: 'CONFIG', onClick: openSettings, color: 'text-mist-gold' }
            ].map((item: any, idx) => (
              <button
                key={idx}
                onClick={item.onClick}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all group ${theme === 'retro' ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}
              >
                <item.icon size={14} className={`${theme === 'retro' ? 'text-black' : 'text-white'} opacity-70 group-hover:opacity-100 transition-opacity shrink-0`} />
                <AnimatedText
                  lang={lang}
                  hClass="h-4"
                  className={`text-xs font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-black' : 'text-white'} opacity-80 group-hover:opacity-100 transition-opacity`}
                  cn={item.labelCn}
                  en={item.labelEn}
                />
              </button>
            ))}
            </div>
            <div className={`h-px w-full ${theme === 'retro' ? 'bg-black/5' : 'bg-white/15'}`}></div>
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

        {/* RIGHT AREA: CORE ENGINES */}
        <div className="flex-1 overflow-hidden relative z-10 flex flex-col">
          <div className="p-8 md:p-12 lg:p-16 max-w-7xl mx-auto w-full flex-1 flex flex-col">
            <div className={`mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6 shrink-0 transition-colors ${theme === 'retro' ? 'border-black/5' : 'border-white/15'}`}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Zap size={20} className={theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-white/60'} />
                  <AnimatedText
                    lang={lang}
                    hClass="h-8 md:h-10"
                    className={`text-2xl md:text-3xl font-serif font-black tracking-tighter ${theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-white'}`}
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

              {/* Mobile Icons */}
              <div className="flex lg:hidden items-center gap-4 mt-4">
                <button onClick={handleOpenMetonymyPage} className={`p-2 rounded border border-transparent hover:border-white/20 transition-all ${theme === 'retro' ? 'bg-black/5 text-[#8B261D]' : 'bg-white/5 text-amber-500'}`}><Wand2 size={16} /></button>
                <button onClick={() => { setPage(1); setViewMode('VIDEO'); }} className={`p-2 rounded border border-transparent hover:border-white/20 transition-all ${theme === 'retro' ? 'bg-black/5 text-cyan-800' : 'bg-white/5 text-cyan-400'}`}><Film size={16} /></button>
                <button onClick={openManual} className={`p-2 rounded border border-transparent hover:border-white/20 transition-all ${theme === 'retro' ? 'bg-black/5 text-zinc-700' : 'bg-white/5 text-zinc-400'}`}><BookOpen size={16} /></button>
              </div>
            </div>

            {/* Drivers Selector */}
            <div className="w-full shrink-0">
              <DriverSelector selectedDriver={selectedDriver} onSelect={onDriverSelect} lang={lang} hoveredDriver={hoveredDriver} onHover={setHoveredDriver} />
            </div>

            {/* Bottom Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 shrink-0 pb-10">
              {[
                { 
                  icon: BookOpen, 
                  titleCn: '访问辞条数据', 
                  titleEn: 'CODEX DATA', 
                  descCn: '查阅拉康、齐泽克等理论词条，理解底层系统的运转逻辑。', 
                  descEn: 'Theoretical corpus to understand system logic.', 
                  onClick: () => { setPage(1); setViewMode('RSI'); }, 
                  themeColor: 'amber' 
                },
                { 
                  icon: Film, 
                  titleCn: '影像资料库', 
                  titleEn: 'VIDEO ARCHIVE', 
                  descCn: '浏览迷雾学派的影像资料，深入视觉拓扑学的核心脉络。', 
                  descEn: 'Visual data capture of the topology threads.', 
                  onClick: () => { setPage(1); setViewMode('VIDEO'); }, 
                  themeColor: 'cyan' 
                },
                { 
                  icon: HistoryIcon, 
                  titleCn: '检视生成档案', 
                  titleEn: 'REVIEW ARCHIVES', 
                  descCn: '溯源过去的生成记录，恢复或重置失败的镜像拼接尝试。', 
                  descEn: 'Review past session records and attempts.', 
                  onClick: openHistory, 
                  themeColor: 'rose' 
                }
              ].map((card, i) => (
                <div 
                  key={i}
                  onClick={card.onClick}
                  className={`border p-6 rounded cursor-pointer transition-all duration-500 group shadow-lg ${
                    theme === 'retro' 
                      ? 'border-transparent bg-transparent hover:bg-[#F9F7F1] hover:border-black/60 shadow-black/5 backdrop-blur-sm hover:backdrop-blur-none' 
                      : 'border-zinc-900 bg-white/5 hover:bg-zinc-950 hover:border-white/30 backdrop-blur-sm hover:backdrop-blur-none'
                  } group group-hover:shadow-xl`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded border flex items-center justify-center transition-all duration-500 ${
                      theme === 'retro' 
                        ? 'border-transparent bg-transparent group-hover:bg-[#F9F7F1] group-hover:border-black/20' 
                        : 'border-zinc-800 bg-zinc-900 group-hover:bg-zinc-950 group-hover:border-white/20'
                    }`}>
                      <card.icon size={18} className={`${
                        theme === 'retro' 
                          ? 'text-black/70 group-hover:text-black' 
                          : 'text-white/80 group-hover:text-white'
                      } transition-all group-hover:scale-110`} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <AnimatedText
                        lang={lang}
                        hClass="h-4"
                        className={`text-[13px] font-bold tracking-[0.15em] transition-all ${
                          theme === 'retro' 
                            ? 'text-black/70 group-hover:text-black' 
                            : 'text-white/80 group-hover:text-white'
                        }`}
                        cn={card.titleCn}
                        en={card.titleEn}
                      />
                      <AnimatedText
                        lang={lang}
                        hClass="h-8"
                        className={`text-[10px] font-light leading-snug transition-all ${
                          theme === 'retro' 
                            ? 'text-black/50 group-hover:text-black/90' 
                            : 'text-white/70 group-hover:text-white'
                        }`}
                        cn={card.descCn}
                        en={card.descEn}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductManualModal isOpen={isManualOpen} onClose={closeManual} driverType={hoveredDriver} />
      <SutureModal isOpen={isSutureOpen} onClose={closeSuture} onGenerate={onSutureGenerate} isGenerating={isSutureGenerating} lang={lang} driverType={selectedDriver || DriverType.NARRATIVE} />
      {isHistoryOpen && <HistoryModal history={history} onRestore={onHistoryRestore} onClear={onHistoryClear} onClose={closeHistory} lang={lang} />}
    </div>
  );
};
