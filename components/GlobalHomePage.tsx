import React, { useState, useEffect } from 'react';
import { User, DriverType } from '../types';
import {
  Settings, Globe, User as UserIcon, Moon, Sun, 
  Search, ScrollText, History, LayoutGrid, ArrowRight
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { BorromeanRings } from './BorromeanRings';

type ViewMode = 'ENGINE' | 'DIVERGENCE' | 'BIBLE' | 'METONYMY' | 'TOPOLOGY' | 'RSI' | 'ARCHIVE' | 'VIDEO' | 'RORSCHACH' | 'ANALYSIS';

interface GlobalHomePageProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1 | 2) => void;
  setViewMode: (mode: ViewMode) => void;
  setInitialProtocol?: (protocol: string) => void;
  onDriverSelect?: (id: DriverType) => void;
  currentUser: User;
  openAuth: () => void;
  openProfile: () => void;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
  openManual?: () => void;
  openHistory?: () => void;
  openSettings?: () => void;
}

const AnimatedText = ({
  cn, en, lang, className = '', hClass = 'h-5'
}: {
  cn: React.ReactNode;
  en: React.ReactNode;
  lang: 'CN' | 'EN';
  className?: string;
  hClass?: string;
}) => (
  <div className={`overflow-hidden relative ${hClass} ${className}`}>
    <div
      className="transition-all duration-[1200ms] w-full ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col"
      style={{ transform: lang === 'EN' ? 'translateY(-50%)' : 'translateY(0)' }}
    >
      <div className={`flex items-center shrink-0 w-full ${hClass}`}>{cn}</div>
      <div className={`flex items-center shrink-0 w-full ${hClass}`}>{en}</div>
    </div>
  </div>
);

interface ActionCard {
  id: DriverType;
  title: string;
  subtitle: string;
  desc: string;
  color: string;
  borderColor: string;
  tag: string;
}

export const GlobalHomePage: React.FC<GlobalHomePageProps> = ({
  lang, setLang, setPage, setViewMode, setInitialProtocol, onDriverSelect,
  currentUser, openAuth, openProfile, showRings, setShowRings,
  openManual, openHistory, openSettings
}) => {
  const { theme, toggleTheme } = useTheme();
  const isRetro = theme === 'retro';
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<DriverType | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const engineCards: ActionCard[] = [
    {
      id: DriverType.NARRATIVE,
      title: '爱欲迷宫',
      subtitle: '象证界',
      tag: 'SYMBOLIC',
      desc: '【能指与链条】在符号界中编织命运。通过“父之名”与语言的律法，将混沌的生命转化为叙事的秩序。',
      color: '#D4AF37',
      borderColor: 'rgba(212, 175, 55, 0.4)',
    },
    {
      id: DriverType.AESTHETIC,
      title: '欲望缝合',
      subtitle: '想象界',
      tag: 'IMAGINARY',
      desc: '【镜像与误认】商品拜物教的仪式。利用“理想自我”的幻象来缝合主体的匮乏，构建完美的视觉统一。',
      color: '#22d3ee',
      borderColor: 'rgba(34, 211, 238, 0.4)',
    },
    {
      id: DriverType.EXPERIMENTAL,
      title: '情绪美学',
      subtitle: '实在界',
      tag: 'THE REAL',
      desc: '【创伤与崇高】直抵实在界的荒漠。剥离符号的防御，通过纯粹的视听强度触碰不可言说的欲望核心。',
      color: '#fb7185',
      borderColor: 'rgba(251, 113, 133, 0.4)',
    },
    {
      id: DriverType.COMMERCIAL,
      title: '现象学还原',
      subtitle: '显象',
      tag: 'APPEARANCE',
      desc: '【解构与还原】执行现象学还原。剥离一切叙事意义，将影像还原为纯粹的物质性感知片段。',
      color: '#a855f7',
      borderColor: 'rgba(168, 85, 247, 0.4)',
    },
    {
      id: DriverType.TRAILER,
      title: '虚拟幻象',
      subtitle: '延异',
      tag: 'DIFFERANCE',
      desc: '【诱惑与推迟】预告片美学。通过语义的碎片化与不断推迟，创造一种永恒的、尚未到来的诱惑感。',
      color: '#4ade80',
      borderColor: 'rgba(74, 222, 128, 0.4)',
    },
  ];

  const handleSelect = (id: DriverType) => {
    if (onDriverSelect) onDriverSelect(id);
    setViewMode('ENGINE');
    setPage(1);
  };

  return (
    <div
      className={`fixed inset-0 flex flex-col overflow-hidden transition-colors duration-1000 ${
        isRetro ? 'bg-[var(--bg-main)]' : 'bg-[#050508]'
      }`}
      style={isRetro ? { backgroundImage: 'var(--pattern-aged)', backgroundBlendMode: 'multiply' } : {}}
    >
      {/* ── 顶部栏：对标 AppHeader ── */}
      <header className={`h-14 flex items-center justify-between px-6 z-30 border-b ${
        isRetro ? 'bg-white/40 border-black/10' : 'bg-black/40 border-white/5'
      } backdrop-blur-md`}>
        <div className="flex items-center gap-4">
          <div className={`text-sm font-bold tracking-[0.2em] flex items-center gap-2 ${isRetro ? 'text-[#8B261D]' : 'text-white'}`}>
            <span>迷雾学派·VISIONARY</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => setPage(1)} className={`flex items-center gap-1.5 text-[10px] font-medium tracking-widest transition-all hover:scale-105 ${isRetro ? 'text-black/60 hover:text-black' : 'text-white/40 hover:text-white'}`}>
              <LayoutGrid size={12} />
              <span>{lang === 'CN' ? '换喻' : 'METONYMY'}</span>
            </button>
            <button onClick={() => { if(setInitialProtocol) setInitialProtocol('DICTIONARY'); setPage(0); }} className={`flex items-center gap-1.5 text-[10px] font-medium tracking-widest transition-all hover:scale-105 ${isRetro ? 'text-black/60 hover:text-black' : 'text-white/40 hover:text-white'}`}>
              <ScrollText size={12} />
              <span>{lang === 'CN' ? '哲学辞典' : 'DICTIONARY'}</span>
            </button>
            <button onClick={() => { setViewMode('ARCHIVE'); setPage(1); }} className={`flex items-center gap-1.5 text-[10px] font-medium tracking-widest transition-all hover:scale-105 ${isRetro ? 'text-black/60 hover:text-black' : 'text-white/40 hover:text-white'}`}>
              <History size={12} />
              <span>{lang === 'CN' ? '欲望档案' : 'ARCHIVE'}</span>
            </button>
            <button onClick={openSettings} className={`flex items-center gap-1.5 text-[10px] font-medium tracking-widest transition-all hover:scale-105 ${isRetro ? 'text-black/60 hover:text-black' : 'text-white/40 hover:text-white'}`}>
              <Settings size={12} />
              <span>{lang === 'CN' ? '配置' : 'CONFIG'}</span>
            </button>
          </nav>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6 ml-2">
            <button
              onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
              className={`text-[10px] font-bold tracking-widest transition-opacity hover:opacity-70 ${isRetro ? 'text-black/60' : 'text-white/40'}`}
            >
              {lang === 'CN' ? 'CN / EN' : 'EN / CN'}
            </button>
            <button
              onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all ${
                isRetro ? 'border-black/10 text-black/60 hover:border-black/30' : 'border-white/10 text-white/40 hover:border-white/20'
              }`}
            >
              <UserIcon size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* ── 背景装饰 ── */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${mounted ? 'opacity-30' : 'opacity-0'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]">
          <BorromeanRings centered={true} opacity={0.4} />
        </div>
      </div>

      {/* ── 主体内容 ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        
        {/* 标题 */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className={`text-[10px] uppercase tracking-[0.8em] font-mono mb-6 ${isRetro ? 'text-black/40' : 'text-white/30'}`}>
            迷 雾 学 派
          </p>
          <h1 className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <span className={`text-4xl md:text-5xl lg:text-5xl font-serif font-black tracking-[0.1em] ${isRetro ? 'text-black/80' : 'text-white'}`}>
              从欲望到
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-black tracking-[0.15em] text-[#C9A15B] drop-shadow-[0_0_30px_rgba(201,161,91,0.3)]">
              CINEMATIC
            </span>
          </h1>
          <p className={`text-[10px] md:text-xs font-light tracking-[0.3em] max-w-2xl mx-auto leading-loose ${isRetro ? 'text-black/50' : 'text-white/30'}`}>
            {lang === 'CN' 
              ? '爱欲视觉拓扑学：在实在界的荒漠上，确立一种比现实更坚固的虚构。'
              : 'Erotic Visual Topology: Establishing a fiction more solid than reality in the desert of the Real.'}
          </p>
        </div>

        {/* 引擎卡片容器 */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {engineCards.map((card, i) => {
            const isHovered = hoveredCard === card.id;
            return (
              <button
                key={card.id}
                onClick={() => handleSelect(card.id)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`w-64 h-[420px] relative rounded-sm p-8 flex flex-col text-left transition-all duration-700 bg-white/[0.02] backdrop-blur-xl border flex-shrink-0 group overflow-hidden ${
                  isHovered 
                    ? 'scale-[1.02] -translate-y-2' 
                    : 'translate-y-0 opacity-60'
                }`}
                style={{
                  borderColor: isHovered ? card.color : (isRetro ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'),
                  boxShadow: isHovered ? `0 40px 100px -20px ${card.borderColor}` : 'none',
                }}
              >
                {/* 顶部指示灯 */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                   <div 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isHovered ? 'shadow-[0_0_10px]' : 'opacity-20'}`}
                    style={{ 
                      backgroundColor: card.color,
                      boxShadow: isHovered ? `0 0 8px ${card.color}` : 'none' 
                    }}
                  />
                </div>

                {/* 标题与副标题 */}
                <div className="mb-10">
                  <h2 className={`text-2xl font-bold tracking-[0.1em] mb-1 transition-colors duration-500 ${isRetro ? 'text-black/90' : 'text-white'}`}>
                    {card.title}
                  </h2>
                  <p className="text-[10px] font-serif italic tracking-[0.2em]" style={{ color: card.color }}>
                    {card.subtitle}
                  </p>
                </div>

                {/* 描述文案 */}
                <div className="flex-1">
                  <p className={`text-[11px] leading-loose font-light tracking-widest text-justify line-clamp-6 transition-colors duration-500 ${
                    isRetro ? 'text-black/50' : 'text-white/40'
                  }`}>
                    {card.desc}
                  </p>
                </div>

                {/* 底部动作 */}
                <div className={`flex items-center justify-between mt-auto transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-30'}`}>
                  <span className={`text-[9px] font-mono tracking-[0.4em] uppercase ${isRetro ? 'text-black' : 'text-white'}`}>
                    {lang === 'CN' ? '进入' : 'ENTER'}
                  </span>
                  <ArrowRight size={14} style={{ color: card.color }} className={`transition-transform duration-500 ${isHovered ? 'translate-x-1' : ''}`} />
                </div>

                {/* 背景渐变遮罩 */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-32 pointer-events-none opacity-20"
                  style={{ background: `linear-gradient(to top, ${card.color}, transparent)` }}
                />
              </button>
            );
          })}
        </div>

        {/* 底部装饰按钮 */}
        <button 
          onClick={() => setPage(-1)}
          className={`mt-20 group relative px-12 py-3 rounded-full border transition-all duration-700 hover:scale-105 active:scale-95 ${
            isRetro ? 'border-black/10 bg-black/5' : 'border-white/5 bg-white/2'
          }`}
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-full transition-opacity" />
          <span className={`text-[9px] font-mono tracking-[0.8em] uppercase ${isRetro ? 'text-black/60' : 'text-white/30'}`}>
             EXIT PORTAL // RETURN 
          </span>
        </button>
      </main>

      <footer className="absolute bottom-6 left-10 pointer-events-none z-20">
        <div className={`text-[8px] font-mono tracking-[0.6em] transition-opacity duration-[1500ms] ${mounted ? 'opacity-40' : 'opacity-0'}`}>
           VISIONARY TOPOLOGY // {mounted ? 'FIELD ACTIVATED' : 'STANDBY'}
        </div>
      </footer>
    </div>
  );
};
