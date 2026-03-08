
import React, { useState, useEffect } from 'react';
import { DriverSelector } from './DriverSelector';
import { DriverType, User } from '../types';
import { Globe, Wand2, HelpCircle, History as HistoryIcon, Settings, User as UserIcon, BookOpen, Terminal, Database, ShieldAlert, Cpu, Film, Folder, Aperture, Zap } from 'lucide-react';
import { ProductManualModal } from './ProductManualModal';
import { SutureModal } from './SutureModal';
import { HistoryModal } from './HistoryModal';
import { BorromeanRings } from './BorromeanRings';
import { VideoLibrary } from './VideoLibrary';
import { ArchiveDirectoryModal } from './ArchiveDirectoryModal';

const Clock = () => {
  const formatTime = () => new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  const [currentTime, setCurrentTime] = useState<string>(formatTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="text-[10px] font-mono opacity-50 tracking-widest">{currentTime}</span>;
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
}) => {
  const [isVideoLibraryOpen, setIsVideoLibraryOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const isAdmin = currentUser?.membershipTier === 'admin' || (currentUser as any)?.membership_tier === 'admin';

  // Dynamic background glow based on hovered driver
  const getGlowTheme = (driverId: DriverType | null) => {
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'shadow-cyan-500/10';
      case DriverType.NARRATIVE: return 'shadow-yellow-500/10';
      case DriverType.AESTHETIC: return 'shadow-rose-500/10';
      case DriverType.EXPERIMENTAL: return 'shadow-purple-500/10';
      case DriverType.TRAILER: return 'shadow-orange-500/10';
      default: return 'shadow-zinc-500/5';
    }
  };

  const getHeaderTheme = (driverId: DriverType | null) => {
    switch (driverId) {
      case DriverType.COMMERCIAL: return 'border-cyan-500/30 text-cyan-400';
      case DriverType.NARRATIVE: return 'border-yellow-500/30 text-yellow-400';
      case DriverType.AESTHETIC: return 'border-rose-500/30 text-rose-400';
      case DriverType.EXPERIMENTAL: return 'border-purple-500/30 text-purple-400';
      case DriverType.TRAILER: return 'border-orange-500/30 text-orange-400';
      default: return 'border-white/5 text-zinc-300';
    }
  };

  // Fake logs for ARG feel
  const signalLogs = [
    { id: 1, type: "SYS", time: "09:12:44", msg: "Establishing secure connection to the Real..." },
    { id: 2, type: "WARN", time: "09:15:01", msg: "Symbolic chain unstable. Suture recommended." },
    { id: 3, type: "INTEL", time: "09:42:18", msg: "Aesthetic Core updated: New trauma topologies detected." },
    { id: 4, type: "SYS", time: "10:04:55", msg: "Phenomenological reduction initiated. Purging semantics." },
  ];

  return (
    <div className="fixed inset-0 flex flex-col bg-[#050505] selection:bg-gold-primary/30 selection:text-white z-50 overflow-hidden font-sans">

      {/* Global Top Navbar */}
      <header className={`shrink-0 z-50 backdrop-blur-md border-b h-14 flex items-center justify-between px-6 transition-colors duration-500 ${getHeaderTheme(hoveredDriver)} bg-[#050505]/95`}>
        <div className="flex items-center gap-4">
          <Terminal size={14} className="opacity-70 shrink-0" />
          <AnimatedText
            lang={lang}
            hClass="h-4"
            className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80"
            cn={<span className="whitespace-nowrap">主体观测中心 // 序列号: MIST-O-1</span>}
            en={<span className="whitespace-nowrap">SUBJECT OBSERVATION CENTER // SEQ: MIST-O-1</span>}
          />
        </div>

        <div className="flex items-center gap-4 hidden md:flex">
          <Clock />
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')} 
            className="flex items-center justify-center w-7 h-7 rounded border border-zinc-800 hover:border-zinc-500 bg-zinc-900/50 text-[10px] font-bold text-zinc-400 hover:text-white transition-all duration-100"
            title="Toggle Language"
          >
            {lang === 'CN' ? '中' : 'EN'}
          </button>
          <div className="h-4 w-px bg-zinc-800"></div>
          <button onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()} className="flex items-center gap-2 group transition-all duration-100">
            {currentUser.id !== 'guest_user' ? (
              <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-gold-primary')} border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden shadow-lg`}>
                {currentUser.avatarUrl ? <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" /> : currentUser.username.substring(0, 1).toUpperCase()}
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-800 text-zinc-500 group-hover:text-white transition-colors">
                <UserIcon size={12} />
              </div>
            )}
            <div className="flex items-center gap-2">
              <AnimatedText
                lang={lang}
                hClass="h-4"
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors"
                cn={currentUser.id !== 'guest_user' ? currentUser.username : '未登录'}
                en={currentUser.id !== 'guest_user' ? currentUser.username : 'GUEST'}
              />
            </div>
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Ambient Glow */}
        <div className={`absolute inset-0 pointer-events-none transition-shadow duration-1000 opacity-20 shadow-[inset_0_0_150px_rgba(0,0,0,1)] ${getGlowTheme(hoveredDriver)}`}></div>

        {/* Background Rings */}
        <div className="absolute inset-0 flex items-center justify-end pr-[5%] opacity-[0.35] pointer-events-none z-0 select-none overflow-hidden scale-[1.1]">
          <div className="w-[1000px] h-[1000px] flex items-center justify-center translate-x-1/4">
            <BorromeanRings centered={true} opacity={1} />
          </div>
        </div>

        {/* LEFT SIDEBAR: SIGNAL MONITOR */}
        <div className="w-80 border-r border-zinc-900/60 bg-[#080808]/40 backdrop-blur flex flex-col shrink-0 hidden lg:flex z-10">

          {/* Logo / Title Area */}
          <div className="p-8 border-b border-zinc-900/60 shrink-0">
            <div className="relative overflow-hidden h-[60px] cursor-default mb-2">
              <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${lang === 'EN' ? '-translate-y-1/2' : 'translate-y-0'}`}>
                <div className="flex flex-col">
                  <div className="h-[60px] flex items-center shrink-0">
                    <h1 className="text-4xl font-serif font-bold text-white tracking-widest">迷雾学派</h1>
                  </div>
                  <div className="h-[60px] flex items-center shrink-0">
                    <h1 className="text-3xl font-serif font-bold text-white tracking-widest uppercase">MIST</h1>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-4">The Visionary Protocol</p>
            <AnimatedText
              lang={lang}
              hClass="h-[40px]"
              className="text-xs text-zinc-400 font-light leading-relaxed"
              cn="爱欲视觉拓扑学：在实在界的荒漠上，确立一种比现实更坚固的虚构。"
              en="Erotic Visual Topology: establishing a fiction more solid than reality."
            />
          </div>

            {/* Quick Access Menu */}
          <div className="p-4 border-b border-zinc-900/60 shrink-0 space-y-1">
            <div className="px-4 py-2">
              <AnimatedText
                lang={lang}
                hClass="h-4"
                className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest mb-2"
                cn="安全协议 / Protocols"
                en="SECURITY PROTOCOLS"
              />
            </div>
            {[
              { icon: Aperture, labelCn: '三界拓扑', labelEn: 'RSI TOPOLOGY', onClick: () => { setPage(1); setViewMode('RSI'); }, color: 'text-gold-primary' },
              { icon: Zap, labelCn: '欲望图式', labelEn: 'DESIRE GRAPH', onClick: () => { setPage(1); setViewMode('TOPOLOGY'); }, color: 'text-amber-400' },
              { icon: Folder, labelCn: '案例档案', labelEn: 'CASE ARCHIVES', onClick: () => setIsArchiveOpen(true), color: 'text-rose-400' },
              { icon: Film, labelCn: '影像资料库', labelEn: 'VIDEO ARCHIVE', onClick: () => setIsVideoLibraryOpen(true), color: 'text-cyan-300' },
              { icon: BookOpen, labelCn: '哲学辞典', labelEn: 'CODEX', onClick: openManual, color: 'text-zinc-300' },
              { icon: HistoryIcon, labelCn: '欲望档案', labelEn: 'ARCHIVES', onClick: openHistory, color: 'text-zinc-300' },
              { icon: Settings, labelCn: '系统配置', labelEn: 'CONFIG', onClick: openSettings, color: 'text-zinc-300' }
            ].map((item: any, idx) => (
              <button
                key={idx}
                onClick={item.onClick}
                className="w-full text-left px-4 py-3 bg-transparent hover:bg-white/5 rounded-lg flex items-center gap-3 transition-colors group"
              >
                <item.icon size={14} className={`${item.color} opacity-70 group-hover:opacity-100 transition-opacity shrink-0`} />
                <AnimatedText
                  lang={lang}
                  hClass="h-4"
                  className={`text-xs font-bold uppercase tracking-widest ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  cn={item.labelCn}
                  en={item.labelEn}
                />
              </button>
            ))}
          </div>

          {/* Signal Stream */}
          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col">
            <div className="mb-4 flex items-center gap-2">
              <ShieldAlert size={12} className="text-zinc-600 shrink-0" />
              <AnimatedText
                lang={lang}
                hClass="h-4"
                className="text-[10px] font-bold text-zinc-600 tracking-[0.2em] uppercase"
                cn="观测站信号流"
                en="SIGNAL STREAM"
              />
            </div>

            <div className="space-y-4 flex-1">
              {signalLogs.map(log => (
                <div key={log.id} className="border-l border-zinc-800 pl-3 py-1 relative">
                  <div className="absolute -left-[2px] top-2 w-[3px] h-[3px] bg-zinc-600"></div>
                  <div className="flex gap-2 text-[9px] font-mono uppercase tracking-wider mb-1">
                    <span className={log.type === 'WARN' ? 'text-amber-500' : 'text-zinc-500'}>[{log.type}]</span>
                    <span className="text-zinc-600">{log.time}</span>
                  </div>
                  <p className={`text-xs font-mono leading-relaxed ${log.type === 'WARN' ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    {log.msg}
                  </p>
                </div>
              ))}

              <div className="border border-dashed border-zinc-800 rounded bg-zinc-900/20 p-4 mt-6 flex flex-col items-center justify-center text-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <Database size={16} className="text-zinc-500" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Awaiting ARG Input...</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT AREA: CORE ENGINES */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 flex flex-col">
          <div className="p-8 md:p-12 lg:p-16 max-w-7xl mx-auto w-full flex-1 flex flex-col">

            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-900 pb-6 shrink-0">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <Cpu className="text-gold-primary opacity-80 shrink-0" size={24} />
                  <AnimatedText
                    lang={lang}
                    hClass="h-8 md:h-10"
                    className="text-2xl md:text-3xl font-serif font-bold text-white tracking-widest"
                    cn="核心驱动器"
                    en="CORE DRIVERS"
                  />
                </div>
                <AnimatedText
                  lang={lang}
                  hClass="h-4"
                  className="text-xs text-zinc-500 uppercase tracking-[0.3em] font-mono"
                  cn="请选择一种欲望结构进入生产..."
                  en="Select a desire structure to initiate production..."
                />
              </div>

              {/* Mobile/Tablet Menu (Hidden on Desktop) */}
              <div className="flex lg:hidden items-center gap-4 mt-4">
                <button onClick={handleOpenMetonymyPage} className="p-2 border border-zinc-800 rounded hover:bg-white/5 text-amber-500"><Wand2 size={16} /></button>
                <button onClick={() => setIsVideoLibraryOpen(true)} className="p-2 border border-zinc-800 rounded hover:bg-white/5 text-cyan-400"><Film size={16} /></button>
                <button onClick={openManual} className="p-2 border border-zinc-800 rounded hover:bg-white/5 text-zinc-400"><BookOpen size={16} /></button>
                <button onClick={openHistory} className="p-2 border border-zinc-800 rounded hover:bg-white/5 text-zinc-400"><HistoryIcon size={16} /></button>
              </div>
            </div>

            {/* Drivers Grid */}
            <div className="w-full shrink-0">
              <DriverSelector selectedDriver={selectedDriver} onSelect={onDriverSelect} lang={lang} hoveredDriver={hoveredDriver} onHover={setHoveredDriver} />
            </div>
            {/* Additional Info / Footer Widgets */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 shrink-0 pb-16">
              <div onClick={() => { setPage(1); setViewMode('RSI'); }} className="border border-zinc-900/40 bg-[#080808]/20 hover:bg-[#0c0c0c]/40 hover:border-gold-primary/30 backdrop-blur-sm p-6 rounded cursor-pointer transition-all group shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded border border-zinc-900 flex items-center justify-center bg-zinc-900/20 group-hover:border-gold-primary/40 group-hover:bg-gold-primary/5 transition-all">
                    <BookOpen size={18} className="text-zinc-500 group-hover:text-gold-primary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <AnimatedText
                      lang={lang}
                      hClass="h-4"
                      className="text-[13px] font-bold tracking-[0.15em] text-zinc-300 group-hover:text-white transition-colors"
                      cn="访问辞典数据"
                      en="ACCESS CODEX DATA"
                    />
                    <p className="text-[10px] text-zinc-500 opacity-60 font-light group-hover:opacity-100 transition-opacity">查阅拉康、齐泽克等理论词条，理解底层系统的运转逻辑。</p>
                  </div>
                </div>
              </div>

              <div onClick={() => setIsVideoLibraryOpen(true)} className="border border-zinc-900/40 bg-[#080808]/20 hover:bg-[#0c0c0c]/40 hover:border-cyan-500/30 backdrop-blur-sm p-6 rounded cursor-pointer transition-all group shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded border border-zinc-900 flex items-center justify-center bg-zinc-900/20 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/5 transition-all">
                    <Film size={18} className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <AnimatedText
                      lang={lang}
                      hClass="h-4"
                      className="text-[13px] font-bold tracking-[0.15em] text-zinc-300 group-hover:text-white transition-colors"
                      cn="影像资料库"
                      en="VIDEO ARCHIVE"
                    />
                    <p className="text-[10px] text-zinc-500 opacity-60 font-light group-hover:opacity-100 transition-opacity">浏览迷雾学派的影像资料，深入视觉拓扑学的核心脉络。</p>
                  </div>
                </div>
              </div>

              <div onClick={openHistory} className="border border-zinc-900/40 bg-[#080808]/20 hover:bg-[#0c0c0c]/40 hover:border-zinc-700 backdrop-blur-sm p-6 rounded cursor-pointer transition-all group shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded border border-zinc-900 flex items-center justify-center bg-zinc-900/20 group-hover:border-zinc-700 group-hover:bg-zinc-800 transition-all">
                    <HistoryIcon size={18} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <AnimatedText
                      lang={lang}
                      hClass="h-4"
                      className="text-[13px] font-bold tracking-[0.15em] text-zinc-300 group-hover:text-white transition-colors"
                      cn="检视生成档案"
                      en="REVIEW ARCHIVES"
                    />
                    <p className="text-[10px] text-zinc-500 opacity-60 font-light group-hover:opacity-100 transition-opacity">溯源过去的生成记录，恢复或重置失败的镜像拼接尝试。</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <ProductManualModal isOpen={isManualOpen} onClose={closeManual} driverType={hoveredDriver} />
      <SutureModal isOpen={isSutureOpen} onClose={closeSuture} onGenerate={onSutureGenerate} isGenerating={isSutureGenerating} lang={lang} driverType={selectedDriver || DriverType.NARRATIVE} />
      {isHistoryOpen && <HistoryModal history={history} onRestore={onHistoryRestore} onClear={onHistoryClear} onClose={closeHistory} lang={lang} />}
      <VideoLibrary isOpen={isVideoLibraryOpen} onClose={() => setIsVideoLibraryOpen(false)} lang={lang} isAdmin={isAdmin} />
      <ArchiveDirectoryModal isOpen={isArchiveOpen} onClose={() => setIsArchiveOpen(false)} lang={lang} />
    </div >
  );
};
