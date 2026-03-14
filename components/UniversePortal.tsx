import React, { useState, useEffect, useRef } from 'react';
import { User } from '../types';
import { BorromeanRings } from './BorromeanRings';
import { User as UserIcon, Moon, Sun, Volume2, VolumeX, Cloud } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ShaderBackground } from './ShaderBackground';
import { ECGCircuitTimeline } from './ECGCircuitTimeline';

type ViewMode = 'ENGINE' | 'DIVERGENCE' | 'BIBLE' | 'METONYMY' | 'TOPOLOGY' | 'RSI' | 'ARCHIVE' | 'VIDEO' | 'RORSCHACH';

interface UniversePortalProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1) => void;
  setViewMode: (mode: ViewMode) => void;
  currentUser: User;
  openAuth: () => void;
  openProfile: () => void;
}

const AnimatedText = ({ cn, en, lang, className = "", hClass = "h-5", style = {} }: { cn: React.ReactNode, en: React.ReactNode, lang: 'CN' | 'EN', className?: string, hClass?: string, style?: React.CSSProperties }) => (
  <div className={`overflow-hidden relative ${hClass}`} style={style}>
    <div 
      className="w-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col"
      style={{ 
        transform: lang === 'EN' ? 'translateY(-50%)' : 'translateY(0)' 
      }}
    >
      <div className={`flex items-center justify-center shrink-0 w-full ${hClass} ${className}`}>
        {cn}
      </div>
      <div className={`flex items-center justify-center shrink-0 w-full ${hClass} ${className}`}>
        {en}
      </div>
    </div>
  </div>
);

interface RealmDef {
  id: string;
  titleCn: string;
  titleEn: string;
  subtitleCn: string;
  subtitleEn: string;
  descCn: string;
  descEn: string;
  color: string;
  glowRgba: string;
  iconSymbol: string;
  target: { page: -1 | 0 | 1; viewMode?: ViewMode };
}

const REALMS: RealmDef[] = [
  {
    id: 'mist',
    titleCn: '迷雾层',
    titleEn: 'THE MIST',
    subtitleCn: '沉浸式叙事 // 梦之档案',
    subtitleEn: 'IMMERSIVE NARRATIVE // DREAM ARCHIVE',
    descCn: '在被压抑之物回归的迷雾中，阅读与漫游。每一个档案都是某人被遗忘的梦。',
    descEn: 'Wander through the fog where the repressed returns. Every file is a forgotten dream.',
    color: '#22d3ee',
    glowRgba: 'rgba(34, 211, 238, 0.2)',
    iconSymbol: '☁',
    target: { page: 1, viewMode: 'ARCHIVE' },
  },
  {
    id: 'engine',
    titleCn: '工具层',
    titleEn: 'THE ENGINE',
    subtitleCn: '创作引擎 // 欲望生产',
    subtitleEn: 'CREATIVE ENGINE // DESIRE PRODUCTION',
    descCn: '启动核心驱动器，进入视觉生产的符号链。构建你自己的迷雾。',
    descEn: 'Activate the core driver. Enter the symbolic chain of visual production.',
    color: '#D4AF37',
    glowRgba: 'rgba(212, 175, 55, 0.2)',
    iconSymbol: '⚙',
    target: { page: 0 },
  },
  {
    id: 'clinic',
    titleCn: '分析层',
    titleEn: 'THE CLINIC',
    subtitleCn: '精神分析 // 拓扑学',
    subtitleEn: 'PSYCHOANALYSIS // TOPOLOGY',
    descCn: '在拉康的拓扑空间中，直面实在界的裂缝。解析欲望的结构。',
    descEn: 'In Lacanian topology, confront the crack in the Real. Parse the structure of desire.',
    color: '#fb7185',
    glowRgba: 'rgba(251, 113, 133, 0.2)',
    iconSymbol: 'Ψ',
    target: { page: 1, viewMode: 'RSI' },
  },
  {
    id: 'rorschach',
    titleCn: '潜意识映射',
    titleEn: 'RORSCHACH',
    subtitleCn: '罗夏墨迹 // 潜意识探测',
    subtitleEn: 'INKBLOT // UNCONSCIOUS PROBE',
    descCn: '观察罗夏墨迹的动态演变，直面潜意识的投影与幻象。',
    descEn: 'Observe the dynamic evolution of Rorschach inkblots, confront the projection of the unconscious.',
    color: '#a855f7',
    glowRgba: 'rgba(168, 85, 247, 0.2)',
    iconSymbol: '☤',
    target: { page: 1, viewMode: 'RORSCHACH' },
  },
];

const LACANIAN_QUOTES = [
  { cn: '“欲望是大他者的欲望”', en: '“Man\'s desire is the desire of the Other”' },
  { cn: '“在你不存在的地方思考”', en: '“I think where I am not, therefore I am where I do not think”' },
  { cn: '“实在界是无法被符号化的”', en: '“The Real is that which resists symbolization absolutely”' },
  { cn: '“爱就是把你并没有的东西献给并不想要它的人”', en: '“To love is to give what one does not have to someone who does not want it”' },
  { cn: '“无意识像语言一样结构”', en: '“The unconscious is structured like a language”' },
  { cn: '“真理有虚构的结构”', en: '“Truth has the structure of fiction”' },
];

export const UniversePortal: React.FC<UniversePortalProps> = ({
  lang, setLang, setPage, setViewMode, currentUser, openAuth, openProfile
}) => {
  const { theme, toggleTheme } = useTheme();
  const isRetro = theme === 'retro';
  const [hoveredRealm, setHoveredRealm] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [exitTarget, setExitTarget] = useState<string | null>(null);
  const [lacanianQuoteIndex, setLacanianQuoteIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mistEnabled, setMistEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleQuote = () => {
    setLacanianQuoteIndex((prev) => (prev + 1) % LACANIAN_QUOTES.length);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // ── BACKGROUND MUSIC LOGIC ──
    const audio = new Audio('/audio/portal-bgm.mp3');
    audio.loop = true;
    audio.volume = 0; 
    audioRef.current = audio;

    const playAudio = () => {
      audio.play().catch(() => {
        const startOnInteraction = () => {
          audio.play().catch(() => {});
          window.removeEventListener('click', startOnInteraction);
        };
        window.addEventListener('click', startOnInteraction);
      });
    };

    playAudio();
    setIsPlaying(true);

    // Fade-in volume slowly
    let fadeIn = setInterval(() => {
      if (!audioRef.current) return;
      if (audioRef.current.paused) return; // Wait if paused
      
      if (audioRef.current.volume < 0.35) {
        audioRef.current.volume = Math.min(0.35, audioRef.current.volume + 0.01);
      } else {
        clearInterval(fadeIn);
      }
    }, 150);

    return () => {
      clearInterval(fadeIn);
      // Fade out on unmount
      const audioToFade = audioRef.current;
      if (!audioToFade) return;
      
      let fadeOut = setInterval(() => {
        if (audioToFade.volume > 0.005) {
          audioToFade.volume -= 0.005;
        } else {
          audioToFade.pause();
          clearInterval(fadeOut);
        }
      }, 40); // Total fade-out duration: ~2 seconds
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleRealmClick = (realm: RealmDef) => {
    if (isExiting) return;
    setIsExiting(true);
    setExitTarget(realm.id);
    setTimeout(() => {
      if (realm.target.viewMode) setViewMode(realm.target.viewMode);
      setPage(realm.target.page);
    }, 700);
  };

  const quote = LACANIAN_QUOTES[lacanianQuoteIndex];

  return (
    <div className={`fixed inset-0 overflow-hidden transition-opacity duration-700 ease-in ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animations */}
      <style>{`
        @keyframes mistDrift1 {
          0%, 100% { transform: translateX(-5%) translateY(0%) scale(1); opacity: 0.5; }
          25% { transform: translateX(3%) translateY(-2%) scale(1.05); opacity: 0.7; }
          50% { transform: translateX(5%) translateY(2%) scale(1.1); opacity: 0.4; }
          75% { transform: translateX(-2%) translateY(-1%) scale(1.02); opacity: 0.8; }
        }
        @keyframes mistDrift2 {
          0%, 100% { transform: translateX(3%) translateY(2%) scale(1.1); opacity: 0.5; }
          33% { transform: translateX(-4%) translateY(-3%) scale(1); opacity: 0.7; }
          66% { transform: translateX(2%) translateY(1%) scale(1.15); opacity: 0.3; }
        }
        @keyframes portalPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.75; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes glowLine {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        @keyframes subtleVignette {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.4);
        }
        .retro-text-glow {
          text-shadow: 0 0 15px rgba(235, 230, 215, 0.9), 0 0 30px rgba(235, 230, 215, 0.6);
        }
        .portal-realm-card {
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portal-realm-card:hover {
          transform: translateY(-4px);
        }
        /* Smooth SVG theme transitions */
        svg circle, svg path, svg text, svg stop {
          transition: stroke 1.5s ease-in-out, fill 1.5s ease-in-out, stroke-opacity 1.5s ease-in-out, stop-color 1.5s ease-in-out, stop-opacity 1.5s ease-in-out;
        }
      `}</style>

      {/* Layer 0: Deep Background */}
      <div className={`absolute inset-0 transition-colors duration-[2000ms] ${isRetro ? 'bg-[var(--bg-main)]' : 'bg-[#020202]'} pointer-events-none`} />
      
      {/* Decorative Radial Ambient Light */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-[1]" 
           style={{ background: isRetro ? 'none' : 'radial-gradient(circle at center, #0a0a10 0%, transparent 80%)' }} />
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Layer 1: Transparent Shader background (Mist) */}
      <div 
        className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${isRetro ? 'opacity-80' : 'opacity-100'}`}
        style={{ 
            opacity: mistEnabled ? (isRetro ? 0.8 : 1) : 0,
            visibility: mistEnabled ? 'visible' : 'hidden'
        }}
      >
        <ShaderBackground />
      </div>


      {/* Layer 2: BorromeanRings gateway - THE MIDGROUND (Strengthened) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]"
        style={{
          animation: mounted ? 'fadeIn 3s ease-out both' : 'none',
          animationDelay: '0.6s',
          opacity: 0,
        }}
      >
        {/* Subtle Depth Blur - Reduced to keep rings sharp */}
        <div className="absolute inset-x-0 h-[40vh] flex items-center justify-center pointer-events-none">
          <div className="w-full h-full bg-transparent backdrop-blur-[1px] opacity-20"
               style={{ maskImage: 'radial-gradient(circle at center, black 20%, transparent 60%)', WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 60%)' }} />
        </div>
        
        <div 
            className="w-[55vh] h-[55vh] max-w-[550px] max-h-[550px] overflow-visible transition-all duration-[2000ms] ease-in-out"
            style={{ 
              opacity: isRetro ? 0.7 : 0.8
            }}
          >
            <BorromeanRings centered={true} opacity={1} lang={lang === 'CN' ? 'CN' : 'EN'} driverType={isRetro ? undefined : undefined} isHomepage={true} />
          </div>
      </div>

      {/* Layer 3: Central Content (Focus point) */}
      <div 
        className={`absolute top-[8vh] md:top-[10.5vh] left-0 right-0 text-center z-[20] px-4 select-none transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{
          animation: mounted ? 'fadeInUp 2.5s ease-out both' : 'none',
          opacity: 0,
        }}
      >
        {/* Anti-Clash Mask for Title */}
        <div className="absolute inset-x-0 -top-10 bottom-0 pointer-events-none z-[-1] opacity-60"
             style={{ background: isRetro ? 'none' : 'radial-gradient(ellipse at center, rgba(2,2,5,0.8) 0%, transparent 70%)' }} />
        
        <div className="transition-transform duration-700 ease-out">
          <AnimatedText
            lang={lang}
            hClass="h-[80px] sm:h-[96px] md:h-[110px] lg:h-[130px]"
            className={`text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-black tracking-[0.15em] sm:tracking-[0.2em] leading-none transition-all duration-1000 animate-portal-breathing whitespace-nowrap ${isRetro ? 'text-[var(--text-accent)]' : 'text-white/90'}`}
            style={{
              fontFamily: "'Noto Serif SC', 'Playfair Display', serif",
              textShadow: isRetro ? '0 1px 1px rgba(255, 255, 255, 0.7)' : '0 1px 4px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.5)',
            }}
            cn="迷雾学派"
            en="MIST SCHOOL"
          />

          <div className="mt-4 sm:mt-5 scale-90 sm:scale-100 opacity-60">
            <AnimatedText
              lang={lang}
              hClass="h-4"
              className={`text-[9px] sm:text-[10px] uppercase tracking-[0.6em] sm:tracking-[0.8em] font-light transition-all duration-1000 ${isRetro ? 'text-black/30' : 'text-white/40'}`}
              cn="爱欲视觉拓扑学 // EROTIC VISUAL TOPOLOGY"
              en="EROTIC VISUAL TOPOLOGY // MIST OBSERVATORY"
            />
          </div>

          <div 
            key={lacanianQuoteIndex}
            className="mt-8 sm:mt-12 group/quote relative inline-block cursor-pointer pointer-events-auto"
            onClick={(e) => { e.stopPropagation(); toggleQuote(); }}
            style={{
              animation: 'fadeIn 4.0s cubic-bezier(0.19, 1, 0.22, 1) both'
            }}
          >
            <AnimatedText
              lang={lang}
              hClass="h-6"
              className={`text-[13px] sm:text-[15px] md:text-[17px] tracking-[0.3em] font-light italic transition-colors duration-1000 ${isRetro ? 'text-black/60 hover:text-black/90' : 'text-white/60 hover:text-white/95'}`}
              style={{ fontFamily: "'Noto Serif SC', 'Playfair Display', serif" }}
              cn={LACANIAN_QUOTES[lacanianQuoteIndex].cn}
              en={LACANIAN_QUOTES[lacanianQuoteIndex].en}
            />
            <div className={`mt-2 w-0 group-hover/quote:w-12 h-px mx-auto transition-all duration-700 opacity-40 ${isRetro ? 'bg-black' : 'bg-white'}`} />
          </div>
        </div>
      </div>

      {/* Layer 4: Realm portals (Academic Navigation) - Centered Alignment */}
      <div className="absolute inset-0 pointer-events-none z-[10] flex flex-col justify-center items-center">
        {/* ECG Circuit Timeline - Passing through the core (Strengthened) */}
        <div className="relative w-full max-w-[1240px] mx-auto opacity-80 sm:opacity-70 transition-all duration-1000 hover:opacity-100">
          <ECGCircuitTimeline hoveredIndex={hoveredRealm ? REALMS.findIndex(r => r.id === hoveredRealm) : -1} isRetro={isRetro} />
        </div>

        {/* Navigation Group - Aligned with the centered timeline */}
        <div className="relative w-full max-w-[1240px] mx-auto mt-0 sm:mt-0 flex flex-row justify-between items-center px-12 md:px-20 h-0 overflow-visible">
          {REALMS.map((realm, i) => {
            const isHovered = hoveredRealm === realm.id;
            return (
              <button
                key={realm.id}
                onClick={() => handleRealmClick(realm)}
                onMouseEnter={() => setHoveredRealm(realm.id)}
                onMouseLeave={() => setHoveredRealm(null)}
                className={`relative group flex flex-col items-center text-center pointer-events-auto transition-all duration-1000
                  ${isExiting && exitTarget === realm.id ? '!brightness-125' : ''}
                  ${isExiting && exitTarget !== realm.id ? '!opacity-0 pointer-events-none' : ''}
                `}
                style={{
                  animation: mounted ? `fadeInUp 1.2s ease-out both` : 'none',
                  animationDelay: `${1.8 + i * 0.15}s`,
                }}
              >
                {/* Tech Code Marker - Shifted up (Fixed Clipping via Outer Scale) */}
                <div className="mb-[60px] sm:mb-[80px] flex justify-center overflow-visible">
                  <AnimatedText
                    lang={lang}
                    hClass="h-10 w-40"
                    className={`text-[9px] font-mono tracking-[0.3em] uppercase
                      ${isHovered ? 'opacity-100 brightness-125' : 'opacity-60'} ${isRetro ? 'text-black' : 'text-white'}
                    `}
                    style={{
                      textShadow: isRetro ? 'none' : '0 2px 8px rgba(0,0,0,0.8)',
                      transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                      transition: 'transform 1.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.8s ease',
                      transformOrigin: 'center'
                    }}
                    cn={`MOD // 0${i + 1}`}
                    en={`MOD // 0${i + 1}`}
                  />
                </div>

                {/* Main Menu Label - Shifted down (Enhanced Visibility) */}
                <div className="mt-[20px] sm:mt-[30px]">
                  <AnimatedText
                    lang={lang}
                    hClass="h-8"
                    className={`text-[15px] sm:text-[17px] tracking-[0.4em] uppercase whitespace-nowrap
                      ${isHovered ? (isRetro ? 'text-black' : 'text-white') : (isRetro ? 'text-black/70' : 'text-white/80')}
                    `}
                    style={{
                      fontFamily: "'Noto Serif SC', 'Playfair Display', serif",
                      fontWeight: isHovered ? 500 : 300,
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 1.8s cubic-bezier(0.19, 1, 0.22, 1), color 1.8s ease, opacity 1.8s ease',
                      willChange: 'transform',
                      textShadow: 'none'
                    }}
                    cn={realm.titleCn}
                    en={realm.titleEn}
                  />

                  {/* Technical Sub-description (Reveal on hover) */}
                    <div className={`mt-6 absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-[1800ms] cubic-bezier(0.19, 1, 0.22, 1)
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
                  `}>
                    <div className={`w-16 h-px mb-4 transition-all duration-1000 ${isHovered ? 'scale-x-100' : 'scale-x-0'} ${isRetro ? 'bg-black/20' : 'bg-white/20'}`} />
                    <AnimatedText
                      lang={lang}
                      hClass="h-[100px] sm:h-[80px]"
                      className={`text-[13px] sm:text-[14px] font-normal tracking-[0.1em] w-[240px] sm:w-[280px] leading-relaxed text-center
                        ${isRetro ? 'text-black/80' : 'text-white/80'}
                      `}
                      cn={realm.descCn}
                      en={realm.descEn}
                    />
                    {/* Decorative Corner Brackets on Hover */}
                    <div className={`absolute -inset-x-4 -inset-y-2 border-x border-current opacity-20 transition-all duration-1000 pointer-events-none ${isHovered ? 'opacity-20 scale-100' : 'opacity-0 scale-95'}`} style={{ borderImage: 'linear-gradient(to bottom, currentColor 10%, transparent 10%, transparent 90%, currentColor 90%) 1' }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-3 sm:gap-4 z-[20]"
        style={{
          animation: mounted ? 'fadeIn 1.5s ease-out both' : 'none',
          animationDelay: '0.5s',
          opacity: 0,
        }}
      >
        <button
          onClick={() => setMistEnabled(!mistEnabled)}
          className={`group/mist p-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${isRetro ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}
          title={mistEnabled ? (lang === 'CN' ? '关闭迷雾' : 'Disable Mist') : (lang === 'CN' ? '开启迷雾' : 'Enable Mist')}
        >
          <div className="relative flex items-center justify-center">
            <Cloud size={12} strokeWidth={2} className={`transition-all duration-300 ${mistEnabled ? (isRetro ? 'text-black/60 shadow-[0_0_8px_rgba(0,0,0,0.1)]' : 'text-white/80 shadow-[0_0_8px_rgba(255,255,255,0.2)]') : (isRetro ? 'text-black/20' : 'text-white/20')}`} />
            {mistEnabled && (
                <div className={`absolute -inset-1 rounded-full animate-pulse opacity-10 ${isRetro ? 'bg-black' : 'bg-white'}`} style={{ animationDuration: '4s' }} />
            )}
          </div>
        </button>
        <div className={`w-px h-3 transition-colors duration-700 ${isRetro ? 'bg-black/10' : 'bg-white/10'}`} />

        <button
          onClick={toggleMusic}
          className={`group/music p-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${isRetro ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}
          title={isPlaying ? (lang === 'CN' ? '关闭背景音乐' : 'Mute Music') : (lang === 'CN' ? '开启背景音乐' : 'Unmute Music')}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Volume2 size={12} strokeWidth={2} className={`transition-colors duration-300 ${isRetro ? 'text-black/40 group-hover/music:text-black/80' : 'text-white/30 group-hover/music:text-white/80'}`} />
              <div className={`absolute -inset-1 rounded-full animate-ping opacity-20 ${isRetro ? 'bg-black' : 'bg-white'}`} style={{ animationDuration: '3s' }} />
            </div>
          ) : (
            <VolumeX size={12} strokeWidth={2} className={`transition-colors duration-300 ${isRetro ? 'text-black/40 group-hover/music:text-black/80' : 'text-white/30 group-hover/music:text-white/80'}`} />
          )}
        </button>
        <div className={`w-px h-3 transition-colors duration-700 ${isRetro ? 'bg-black/10' : 'bg-white/10'}`} />
        
        <button
          onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
          className="relative h-4 overflow-hidden group/lang flex flex-col items-center"
          title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
        >
          <div 
            className="transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: lang === 'CN' ? 'translateY(0)' : 'translateY(-50%)' }}
          >
            <span className={`block text-[10px] font-mono tracking-[0.2em] leading-4 transition-colors duration-300 ${isRetro ? 'text-black/40 group-hover/lang:text-black/80' : 'text-white/30 group-hover/lang:text-white/80'}`}>中</span>
            <span className={`block text-[10px] font-mono tracking-[0.2em] leading-4 transition-colors duration-300 ${isRetro ? 'text-black/40 group-hover/lang:text-black/80' : 'text-white/30 group-hover/lang:text-white/80'}`}>EN</span>
          </div>
        </button>
        <div className={`w-px h-3 transition-colors duration-700 ${isRetro ? 'bg-black/10' : 'bg-white/10'}`} />
        <button
          onClick={toggleTheme}
          className={`flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 ${isRetro ? 'text-black/40 hover:text-black/80' : 'text-white/30 hover:text-white/80'}`}
          title={theme === 'dark' ? (lang === 'CN' ? "切换为复古主题" : "Switch to Retro") : (lang === 'CN' ? "切换为暗黑主题" : "Switch to Dark")}
        >
          {theme === 'dark' ? <Moon size={11} strokeWidth={2.5} /> : <Sun size={11} strokeWidth={2.5} className="text-[#8B261D]/60 hover:text-[#8B261D]" />}
        </button>
        <div className={`w-px h-3 transition-colors duration-700 ${isRetro ? 'bg-black/10' : 'bg-white/10'}`} />
        <button
          onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
          className={`text-[10px] font-mono tracking-[0.15em] transition-colors duration-300 flex items-center gap-1.5 ${isRetro ? 'text-black/40 hover:text-black/80' : 'text-white/25 hover:text-white/70'}`}
        >
          <UserIcon size={11} />
          <div className="hidden sm:block">
            <AnimatedText
              lang={lang}
              hClass="h-4"
              className="text-[10px] font-mono tracking-[0.15em]"
              cn={currentUser.id !== 'guest_user' ? currentUser.username : '访客'}
              en={currentUser.id !== 'guest_user' ? currentUser.username : 'GUEST'}
            />
          </div>
        </button>
      </div>

      <div
        className="absolute bottom-4 left-0 right-0 text-center z-[10] pointer-events-none"
        style={{
          animation: mounted ? 'fadeIn 3s ease-out both' : 'none',
          animationDelay: '2.5s',
          opacity: 0,
        }}
      >
        <p 
          className="text-[8px] font-mono tracking-[0.8em] transition-opacity duration-1000 uppercase opacity-30 hover:opacity-60 pointer-events-auto"
          style={{ transitionProperty: 'opacity' }}
        >
          MIST OBSERVATORY // BORROMEAN GATEWAY v2.24 // {new Date().toISOString().substring(0, 10).replace(/-/g, '.')}
        </p>
      </div>
    </div>
  );
};
