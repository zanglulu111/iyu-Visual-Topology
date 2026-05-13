import React, { useState, useEffect, useRef } from 'react';
import { DriverType, User, ViewMode } from '../types';
import { BorromeanRings } from './BorromeanRings';
import { Globe, Volume2, VolumeX, Cloud, CloudOff, User as UserIcon, Moon, Sun, ChevronRight, Archive, Sparkles, BookText, Brain, Play, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ShaderBackground } from './ShaderBackground';
import { ECGCircuitTimeline } from './ECGCircuitTimeline';


interface UniversePortalProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1 | 2) => void;
  setViewMode: (mode: ViewMode) => void;
  setInitialProtocol?: (protocol: string) => void;
  currentUser: User;
  openAuth: () => void;
  openSettings: () => void;
  openProfile: () => void;
  openManual: () => void;
  entryMode?: 'intro' | 'return';
  onOpenCoreDrivers?: () => void;
}

const AnimatedText = ({ cn, en, lang, className = "", hClass = "h-5", style = {} }: { cn: React.ReactNode, en: React.ReactNode, lang: 'CN' | 'EN', className?: string, hClass?: string, style?: React.CSSProperties }) => {
  const isEn = lang === 'EN';
  return (
    <div className={`overflow-hidden relative ${hClass} ${className}`} style={style}>
      <div 
        className="w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col"
        style={{ 
          transform: isEn ? 'translateY(-50%)' : 'translateY(0)' 
        }}
      >
        <div className={`flex items-center justify-center shrink-0 w-full ${hClass}`}>
          {cn}
        </div>
        <div className={`flex items-center justify-center shrink-0 w-full ${hClass}`}>
          {en}
        </div>
      </div>
    </div>
  );
};

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
  target: { page: -1 | 0 | 1; viewMode?: ViewMode; initialProtocol?: string };
}

const REALMS: RealmDef[] = [
  {
    id: 'mist',
    titleCn: '爱欲迷宫',
    titleEn: 'EROS\nLABYRINTH',
    subtitleCn: '视觉拓扑 // 核心场域',
    subtitleEn: 'VISUAL TOPOLOGY // CORE REALM',
    descCn: '在被压抑之物回归的迷雾中，阅读与漫游。每一个档案都是某人被遗忘的梦。',
    descEn: 'Wander through the fog where the repressed returns. Every file is a forgotten dream.',
    color: '#FFD700',
    glowRgba: 'rgba(255, 215, 0, 0.2)',
    iconSymbol: '🌀',
    target: { page: 1, viewMode: 'ARCHIVE' },
  },
  {
    id: 'video',
    titleCn: '欲望缝合',
    titleEn: 'DESIRE\nSUTURE',
    subtitleCn: '影像衔接 // 欲望流动',
    subtitleEn: 'IMAGE SUTURE // DESIRE FLOW',
    descCn: '在光影的缝隙中，直面实在界的闪烁。解析欲望在影像中的流动。',
    descEn: 'In the cracks of light and shadow, confront the flicker of the Real. Parse the flow of desire in images.',
    color: '#22D3EE',
    glowRgba: 'rgba(34, 211, 238, 0.2)',
    iconSymbol: '🧵',
    target: { page: 1, viewMode: 'VIDEO' },
  },
  {
    id: 'engine',
    titleCn: '核心驱动器',
    titleEn: 'CORE DRIVERS',
    subtitleCn: '创作引擎 // 符号链条',
    subtitleEn: 'CREATIVE ENGINE // SYMBOLIC CHAIN',
    descCn: '启动欲望再生产，进入视觉生产的符号链。构建你自己的迷雾。',
    descEn: 'Activate the core driver. Enter the symbolic chain of visual production.',
    color: '#EF4444',
    glowRgba: 'rgba(239, 68, 68, 0.2)',
    iconSymbol: '🎭',
    target: { page: 0 },
  },
  {
    id: 'dictionary',
    titleCn: '迷雾辞典',
    titleEn: 'MIST\nDICTIONARY',
    subtitleCn: '理论词条 // 自他者性',
    subtitleEn: 'THEORETICAL CODEX // ALTERITY',
    descCn: '进入迷雾学派理论词条、拓扑结构与主体分析。',
    descEn: 'Enter the Mist School codex, topology, and subject analysis.',
    color: '#A855F7',
    glowRgba: 'rgba(168, 85, 247, 0.2)',
    iconSymbol: '👁️',
    target: { page: 1, viewMode: 'DICTIONARY' },
  },
  {
    id: 'canvas',
    titleCn: '迷雾画布',
    titleEn: 'MIST\nCANVAS',
    subtitleCn: '视觉生产 // 资产迭代',
    subtitleEn: 'VISUAL PRODUCTION // ASSETS',
    descCn: '连接 Lovart 生图与资产切割。构建可迭代的视觉工作台。',
    descEn: 'Connect Lovart generation and asset slicing. Build an iterative visual workstation.',
    color: '#F97316',
    glowRgba: 'rgba(249, 115, 22, 0.2)',
    iconSymbol: '🎨',
    target: { page: 1, viewMode: 'CANVAS' },
  },
];

const LACANIAN_QUOTES = [
  { cn: '“欲望是大他者的欲望”', en: '“Man\'s desire is the desire of the Other”' },
  { cn: '“在你不存在的地方思考”', en: '“I think where I am not, therefore I am where I do not think”' },
  { cn: '“实在界是无法被符号化的”', en: '“The Real is that which resists symbolization absolutely”' },
  { cn: '“爱就是把你并没有的东西献给并不想要它的人”', en: '“To love is to give what one does not have to someone who does not want it”' },
  { cn: '“无意识像语言一样结构”', en: '“The unconscious is structured like a language”' },
  { cn: '“真理有虚构的结构”', en: '“Truth has the structure of fiction”' },
  { cn: '“记住我们曾经也活过、爱过、笑过”', en: '“Remember us for we too have lived, loved and laughed”' },
];

let hasVisitedPortalSession = false;

export const UniversePortal: React.FC<UniversePortalProps> = ({
  lang, setLang, setPage, setViewMode, setInitialProtocol, currentUser, openAuth,
  openSettings,
  openProfile,
  openManual,
  entryMode = 'intro',
  onOpenCoreDrivers
}) => {
  const { theme, toggleTheme } = useTheme();
  const isRetro = theme === 'retro';
  const [hoveredRealm, setHoveredRealm] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [exitTarget, setExitTarget] = useState<string | null>(null);
  const [lacanianQuoteIndex, setLacanianQuoteIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mistEnabled, setMistEnabled] = useState(true);
  const isReturningRef = useRef(hasVisitedPortalSession);
  const isReturning = isReturningRef.current;
  const [mounted, setMounted] = useState(isReturning);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const glitchAudioRef = useRef<HTMLAudioElement | null>(null);
  const quoteHoverAudioRef = useRef<HTMLAudioElement | null>(null);

  // Real-time glitch states for individual realms
  const [glitchActive, setGlitchActive] = useState<boolean[]>([false, false, false, false, false]);
  const glitchTimers = useRef<(ReturnType<typeof setTimeout> | null)[]>([null, null, null, null, null]);
  const realmAudioRefs = useRef<(HTMLAudioElement | null)[]>([null, null, null, null, null]);
  const confirmAudioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  // Parallax & Cursor tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const toggleQuote = () => {
    setLacanianQuoteIndex((prev) => (prev + 1) % LACANIAN_QUOTES.length);
  };

  useEffect(() => {
    setMounted(true);
    hasVisitedPortalSession = true;

    // Auto-change quotes every 12 seconds
    const quoteInterval = setInterval(() => {
      toggleQuote();
    }, 8000);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
      setCursorPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsHoveringClickable(!!target.closest('button, a, [role="button"], .pointer-events-auto, .group\\/quote'));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(quoteInterval);
    };
  }, []);

  useEffect(() => {
    // ── BACKGROUND MUSIC LOGIC ──
    const musicPlayed = sessionStorage.getItem('mist_portal_music_played');
    const isFirstVisit = !musicPlayed;

    // Initialize audio object once
    const audio = new Audio('/audio/portal-bgm.mp3');
    audio.loop = true;
    audio.volume = 0.15; // Set base volume immediately
    audioRef.current = audio;

    // Initialize glitch sound effect
    const glitchAudio = new Audio('/audio/glitch.mp3');
    glitchAudio.volume = 0.8; // Increased volume as requested
    glitchAudio.loop = true; // Loop while hovered as requested
    glitchAudioRef.current = glitchAudio;

    // Initialize unique quote hover sound
    const quoteHoverAudio = new Audio('/audio/glitch.mp3'); // Using glitch.mp3 as base, can be swapped for a unique file
    quoteHoverAudio.volume = 0.6;
    quoteHoverAudio.playbackRate = 1.2; // Slightly higher pitch for "unique" feel
    quoteHoverAudio.loop = true;
    quoteHoverAudioRef.current = quoteHoverAudio;

    // Initialize realm-specific glitch sounds
    [1, 2, 3, 4, 5].forEach((num, i) => {
      const audio = new Audio(`/audio/realm-0${num}.mp3`);
      audio.volume = 0.6;
      realmAudioRefs.current[i] = audio;
    });

    // Initialize per-realm confirm sounds (user to provide files confirm-01 to confirm-05)
    [1, 2, 3, 4, 5].forEach((num, i) => {
      const audio = new Audio(`/audio/confirm-0${num}.mp3`);
      audio.volume = 0.8;
      confirmAudioRefs.current[i] = audio;
    });

    if (isFirstVisit) {
      // Logic for first visit: Attempt autoplay (with user gesture fallback)
      const attemptPlay = () => {
        audio.play().then(() => {
          setIsPlaying(true);
          sessionStorage.setItem('mist_portal_music_played', 'true');
        }).catch(() => {
          // Autoplay blocked: wait for first interaction
          const startOnInteraction = () => {
            audio.play().then(() => {
              setIsPlaying(true);
              sessionStorage.setItem('mist_portal_music_played', 'true');
            }).catch(() => {});
            window.removeEventListener('click', startOnInteraction);
          };
          window.addEventListener('click', startOnInteraction);
        });
      };
      
      // Small delay to ensure browser readiness
      setTimeout(attemptPlay, 1000);
    } else {
      // Subsequent visits: Keep it paused, but ready for manual click
      setIsPlaying(false);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Clear source to stop buffering
      }
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

  const playGlitchSound = () => {
    if (glitchAudioRef.current) {
      glitchAudioRef.current.currentTime = 0;
      glitchAudioRef.current.play().catch(() => {});
    }
  };

  const stopGlitchSound = () => {
    if (glitchAudioRef.current) {
      glitchAudioRef.current.pause();
      glitchAudioRef.current.currentTime = 0;
    }
  };

  const playQuoteHoverSound = () => {
    if (quoteHoverAudioRef.current) {
      quoteHoverAudioRef.current.currentTime = 0;
      quoteHoverAudioRef.current.play().catch(() => {});
    }
  };

  const stopQuoteHoverSound = () => {
    if (quoteHoverAudioRef.current) {
      quoteHoverAudioRef.current.pause();
      quoteHoverAudioRef.current.currentTime = 0;
    }
  };

  const playConfirmSound = (index: number) => {
    if (confirmAudioRefs.current[index]) {
      confirmAudioRefs.current[index]!.currentTime = 0;
      confirmAudioRefs.current[index]!.play().catch(() => {});
    }
  };

  const handleRealmHover = (index: number) => {
    // Start visual glitch
    const nextGlitch = [...glitchActive];
    nextGlitch[index] = true;
    setGlitchActive(nextGlitch);

    // Play sound
    if (realmAudioRefs.current[index]) {
      realmAudioRefs.current[index]!.currentTime = 0;
      realmAudioRefs.current[index]!.play().catch(() => {});
    }

    // Set 3s timer to stop visual
    if (glitchTimers.current[index]) clearTimeout(glitchTimers.current[index]!);
    glitchTimers.current[index] = setTimeout(() => {
      setGlitchActive(prev => {
        const next = [...prev];
        next[index] = false;
        return next;
      });
    }, 1000);
  };

  const handleRealmLeave = (index: number) => {
    // Stop visual glitch immediately on leave
    setGlitchActive(prev => {
      const next = [...prev];
      next[index] = false;
      return next;
    });

    // Clear 3s timer
    if (glitchTimers.current[index]) {
      clearTimeout(glitchTimers.current[index]!);
      glitchTimers.current[index] = null;
    }

    // Stop sound
    if (realmAudioRefs.current[index]) {
      realmAudioRefs.current[index]!.pause();
      realmAudioRefs.current[index]!.currentTime = 0;
    }
  };

  const handleRealmClick = (realm: RealmDef, index: number) => {
    if (isExiting) return;
    
    // De-couple path: If it's dictionary, we open the manual (codex) directly
    if (realm.id === 'dictionary') {
      setIsExiting(true);
      setExitTarget(realm.id);
      playConfirmSound(index);
      setTimeout(() => {
        setPage(1);
        setViewMode('DICTIONARY');
      }, 350);
      return;
    }

    setIsExiting(true);
    setExitTarget(realm.id);
    playConfirmSound(index);
    setTimeout(() => {
      if (realm.target.viewMode) setViewMode(realm.target.viewMode);
      if (setInitialProtocol) {
        setInitialProtocol(realm.target.initialProtocol);
      }
      setPage(realm.target.page);
    }, 350);
  };

  const quote = LACANIAN_QUOTES[lacanianQuoteIndex];

  return (
    <div className={`universe-portal-wrapper fixed inset-0 overflow-hidden transition-opacity duration-300 ease-in cursor-none ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animations */}
      <style>{`
        .universe-portal-wrapper, .universe-portal-wrapper * {
          cursor: none !important;
        }
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
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portal-realm-card:hover {
          /* no layout-affecting transforms */
        }
        /* Smooth SVG theme transitions */
        svg circle, svg path, svg text, svg stop {
          transition: stroke 1.0s ease-in-out, fill 1.0s ease-in-out, stroke-opacity 1.0s ease-in-out, stop-color 1.0s ease-in-out, stop-opacity 1.0s ease-in-out;
        }



        @keyframes retro-dusty-flicker {
          0%, 100% { opacity: 1; filter: brightness(1); }
          5% { opacity: 0.85; filter: brightness(1.1); }
          15% { opacity: 0.95; filter: brightness(0.95); }
          25% { opacity: 0.80; filter: brightness(1.2); }
          30% { opacity: 1; filter: brightness(1); }
          45% { opacity: 0.90; filter: brightness(0.9); }
          55% { opacity: 1; filter: brightness(1.15); }
          75% { opacity: 0.85; filter: brightness(0.95); }
          85% { opacity: 0.95; filter: brightness(1); }
        }

        @keyframes rgb-portal-glitch {
          0%, 100% { text-shadow: -2px -0.5px 0.5px rgba(255, 0, 255, 0.6), 2px 0.5px 0.5px rgba(0, 255, 255, 0.6); transform: translate(0, 0); clip-path: none; }
          25% { text-shadow: -4.5px 1.2px 1px rgba(255, 0, 255, 0.75), 4.5px -1.2px 1px rgba(0, 255, 255, 0.75); transform: translate(-1.5px, 0.8px) skewX(2deg); clip-path: inset(30% 0 65% 0); }
          50% { text-shadow: 3.5px -2.5px 1.5px rgba(255, 0, 255, 0.65), -3.5px 2.5px 1.5px rgba(0, 255, 255, 0.65); transform: translate(1px, -1.2px); clip-path: none; }
          75% { text-shadow: -4px 2px 1px rgba(255, 0, 255, 0.75), 4px -2px 1px rgba(0, 255, 255, 0.75); transform: translate(-1px, 1.5px) skewX(-2deg); clip-path: inset(70% 0 25% 0); }
        }

        @keyframes rgb-pure-flow {
          0%, 100% { text-shadow: -2px -0.5px 0.5px rgba(255, 0, 255, 0.6), 2px 0.5px 0.5px rgba(0, 255, 255, 0.6); }
          25% { text-shadow: -4.5px 1.2px 1px rgba(255, 0, 255, 0.75), 4.5px -1.2px 1px rgba(0, 255, 255, 0.75); }
          50% { text-shadow: 4px -2.5px 1.5px rgba(255, 0, 255, 0.65), -4px 2.5px 1.5px rgba(0, 255, 255, 0.65); }
          75% { text-shadow: -4px 2px 1.2px rgba(255, 0, 255, 0.75), 4px -2px 1.2px rgba(0, 255, 255, 0.75); }
        }

        @keyframes retro-portal-glitch {
          0%, 100% { text-shadow: -1px -0.5px 0.5px rgba(139,38,29, 0.3), 1px 0.5px 0.5px rgba(139,38,29, 0.3); transform: translate(0, 0); clip-path: none; filter: brightness(1); }
          25% { text-shadow: -3px 0.8px 1px rgba(139,38,29, 0.5), 3px -0.8px 1px rgba(139,38,29, 0.5); transform: translate(-1.5px, 0.8px) skewX(1deg); clip-path: inset(30% 0 65% 0); filter: brightness(1.2); }
          50% { text-shadow: 2px -2px 1.5px rgba(139,38,29, 0.4), -2px 2px 1.5px rgba(139,38,29, 0.4); transform: translate(1px, -1.2px); clip-path: none; filter: brightness(0.9); }
          75% { text-shadow: -3px 2px 1px rgba(139,38,29, 0.5), 3px -2px 1px rgba(139,38,29, 0.5); transform: translate(-1px, 1.5px) skewX(-1deg); clip-path: inset(70% 0 25% 0); filter: brightness(1.1); }
        }

        @keyframes retro-subtle-flow {
          0%, 100% { text-shadow: -1.5px -0.5px 0.5px rgba(139,38,29, 0.3), 1.5px 0.5px 0.5px rgba(139,38,29, 0.3); opacity: 0.9; }
          50% { text-shadow: 2px 1px 1.5px rgba(139,38,29, 0.5), -2px -1px 1.5px rgba(139,38,29, 0.5); opacity: 1; }
        }

        .rgb-split-hover:hover, .rgb-split-active {
          animation: rgb-portal-glitch 0.45s ease-in-out infinite;
          color: #fff;
          opacity: 1;
        }

        .rgb-subtle-hover:hover, .rgb-subtle-active {
          animation: rgb-pure-flow 2.2s ease-in-out infinite;
          color: #fff;
          opacity: 1;
        }

        .retro-flicker-hover:hover, .retro-flicker-active {
          animation: retro-portal-glitch 0.45s ease-in-out infinite;
          color: #8B261D;
        }

        .retro-subtle-active {
          animation: retro-subtle-flow 2.2s ease-in-out infinite;
          color: #8B261D;
        }
        @keyframes quoteFadeSeamless {
          0% { opacity: 0; transform: translateY(2px); }
          15% { opacity: 1; transform: translateY(0); }
          95% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-2px); }
        }
        @keyframes text-jitter-dispersion {
          /* Burst 1 */
          0%, 12% { transform: translate(-1.5px, 0.5px); text-shadow: -2px -0.5px 0.5px rgba(255,0,255,0.6), 2px 0.5px 0.5px rgba(0,255,255,0.6); }
          4%, 8% { transform: translate(2px, -1px) skewX(1deg); text-shadow: -4px 1px 1px rgba(255,0,255,0.8), 4px -1px 1px rgba(0,255,255,0.8); }
          13%, 32% { transform: translate(0,0); text-shadow: -1.5px -0.5px 0.5px rgba(255,0,255,0.5), 1.5px 0.5px 0.5px rgba(0,255,255,0.5); }
          /* Burst 2 */
          33%, 45% { transform: translate(2px, -1px); text-shadow: -3px 0.8px 1px rgba(255,0,255,0.7), 3px -0.8px 1px rgba(0,255,255,0.7); }
          37%, 41% { transform: translate(-2px, 1px); text-shadow: 2.5px -1.5px 1.5px rgba(255,0,255,0.6), -2.5px 1.5px 1.5px rgba(0,255,255,0.6); }
          46%, 65% { transform: translate(0,0); text-shadow: -1.5px -0.5px 0.5px rgba(255,0,255,0.5), 1.5px 0.5px 0.5px rgba(0,255,255,0.5); }
          /* Burst 3 */
          66%, 78% { transform: translate(-1.5px, 0.8px); text-shadow: -4px 1.2px 1px rgba(255,0,255,0.8), 4px -1.2px 1px rgba(0,255,255,0.8); }
          70%, 74% { transform: translate(1.5px, -0.8px); text-shadow: 2px -1.5px 2px rgba(255,0,255,0.7), -2px 1.5px 2px rgba(0,255,255,0.7); }
          79%, 100% { transform: translate(0,0); text-shadow: -1.5px -0.5px 0.5px rgba(255,0,255,0.6), 1.5px 0.5px 0.5px rgba(0,255,255,0.6); }
        }
        @keyframes retro-jitter-dispersion {
          /* Burst 1 */
          0%, 12% { transform: translate(-1px, 0.5px); filter: brightness(1.3); text-shadow: 1px 0px 0px rgba(139,38,29,0.4); }
          13%, 32% { transform: translate(0,0); filter: brightness(1.1); text-shadow: 1px 0px 0px rgba(139,38,29,0.3); }
          /* Burst 2 */
          33%, 45% { transform: translate(1.5px, -1px); filter: brightness(0.85); text-shadow: -1.5px 0.5px 0px rgba(139,38,29,0.4); }
          46%, 65% { transform: translate(0,0); filter: brightness(1.1); text-shadow: 1px 0px 0px rgba(139,38,29,0.3); }
          /* Burst 3 */
          66%, 78% { transform: translate(-1px, 1px); filter: brightness(1.4); text-shadow: 1.5px -1px 0px rgba(139,38,29,0.5); }
          79%, 100% { transform: translate(0,0); filter: brightness(1.1); text-shadow: 1px 0px 0px rgba(139,38,29,0.3); }
        }
        .rgb-jitter-active {
          animation: text-jitter-dispersion 1s linear 1 forwards !important;
          color: #fff !important;
          opacity: 1 !important;
        }
        .retro-jitter-active {
          animation: retro-jitter-dispersion 1s linear 1 forwards !important;
          color: #8B261D !important;
          opacity: 1 !important;
        }
        .quote-container {
          animation: quoteFadeSeamless 8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* Layer 0: Deep Background */}
      <div className={`absolute inset-0 transition-colors duration-[1200ms] ${isRetro ? 'bg-[var(--bg-main)]' : 'bg-[#020202]'} pointer-events-none`} />
      
      {/* Decorative Radial Ambient Light */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-[1]" 
           style={{ background: isRetro ? 'none' : 'radial-gradient(circle at center, #0a0a10 0%, transparent 80%)' }} />
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Layer 1: Transparent Shader background (Mist) - Moved to higher Z to stay above paper base */}
      <div 
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{ transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0)` }}
      >
        <div 
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ 
              opacity: mistEnabled ? 1 : 0,
              visibility: mistEnabled ? 'visible' : 'hidden'
          }}
        >
          <ShaderBackground theme={isRetro ? 'retro' : 'dark'} />
        </div>
      </div>

      {/* Layer 1.5: Retro Paper Overlay - Now acts as the base paper texture */}
      {isRetro && (
        <div 
          className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-[1200ms] ease-in-out"
          style={{ 
            backgroundColor: 'rgba(235, 230, 215, 0.45)',
            mixBlendMode: 'normal'
          }}
        />
      )}


      {/* Layer 2: BorromeanRings gateway - THE MIDGROUND (Strengthened) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]"
        style={{
          animation: (!isReturning && mounted) ? 'fadeIn 1.2s ease-out both' : 'none',
          animationDelay: !isReturning ? '0.3s' : '0s',
          opacity: (!isReturning && !mounted) ? 0 : 1,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: `translate3d(${mousePos.x * 5}px, ${mousePos.y * 5}px, 0)` }}>
          {/* Subtle Depth Blur - Reduced to keep rings sharp */}
          <div className="absolute inset-x-0 h-[40vh] flex items-center justify-center pointer-events-none">
            <div className="w-full h-full bg-transparent backdrop-blur-[1px] opacity-20"
                style={{ maskImage: 'radial-gradient(circle at center, black 20%, transparent 60%)', WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 60%)' }} />
          </div>
          
          <div 
              className="w-[110vh] h-[110vh] max-w-[1300px] max-h-[1300px] overflow-visible"
              style={{ 
                transition: 'opacity 1200ms ease-in-out, filter 1200ms ease-in-out',
                opacity: isRetro ? (hoveredRealm ? 0.2 : 0.95) : (hoveredRealm ? 0.25 : 1.0),
                filter: hoveredRealm ? 'blur(15px)' : 'blur(0px)',
                transform: 'scale(1) translateZ(0)',
                willChange: 'opacity, filter'
              }}
            >
              <BorromeanRings
                centered={true}
                opacity={1}
                lang={lang === 'CN' ? 'CN' : 'EN'}
                driverType={
                  hoveredRealm === 'mist' ? DriverType.NARRATIVE :
                  hoveredRealm === 'video' ? DriverType.COMMERCIAL :
                  hoveredRealm === 'engine' ? DriverType.AESTHETIC :
                  hoveredRealm === 'dictionary' ? DriverType.EXPERIMENTAL :
                  hoveredRealm === 'canvas' ? DriverType.TRAILER :
                  undefined
                }
                isHomepage={true}
              />
            </div>
        </div>
      </div>

      {/* Layer 3: Central Content (Focus point) */}
      <div 
        className={`absolute top-[8vh] md:top-[10.5vh] left-0 right-0 text-center z-[30] px-4 select-none transition-all duration-700 ${(!isReturning && !mounted) ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}
        style={{
          animation: (!isReturning && mounted) ? 'fadeInUp 1.2s ease-out both' : 'none',
        }}
      >
        <div 
          style={{ transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)` }}
          className="pointer-events-auto inline-block"
        >
          <div
            onMouseEnter={() => {
              setIsTitleHovered(true);
              playGlitchSound();
            }}
            onMouseLeave={() => {
              setIsTitleHovered(false);
              stopGlitchSound();
            }}
            className="inline-block"
          >
            <AnimatedText
              lang={lang}
              hClass="h-[80px] sm:h-[96px] md:h-[110px] lg:h-[130px]"
              className={`text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-black tracking-[0.15em] sm:tracking-[0.2em] leading-none transition-all duration-700 animate-portal-breathing whitespace-nowrap ${isRetro ? 'text-[#8B261D]' : 'text-white/90'} ${isRetro ? 'retro-flicker-hover' : 'rgb-split-hover'}`}
              style={{
                fontFamily: "'Noto Serif SC', 'Playfair Display', serif",
                textShadow: isRetro ? '0 1px 1px rgba(255, 255, 255, 0.7)' : '0 1px 4px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.5)',
              }}
              cn="迷雾学派"
              en="MIST SCHOOL"
            />
          </div>

          <div className="mt-1 sm:mt-2 scale-90 sm:scale-100 opacity-60">
            <AnimatedText
              lang={lang}
              hClass="h-4"
              className={`text-[9px] sm:text-[10px] uppercase tracking-[0.6em] sm:tracking-[0.8em] font-light transition-all duration-1000 ${isRetro ? 'text-[#8B261D]/50' : 'text-white/40'}`}
              cn="爱欲视觉拓扑学 // EROTIC VISUAL TOPOLOGY"
              en="EROTIC VISUAL TOPOLOGY // MIST OBSERVATORY"
            />
          </div>

          <div 
            key={`${lacanianQuoteIndex}`}
            className="mt-4 sm:mt-6 quote-container"
          >
            <div 
              className="group/quote relative inline-block cursor-pointer pointer-events-auto transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
              style={{ 
                transform: isQuoteHovered ? 'scale(1.15)' : 'scale(1)',
                filter: isQuoteHovered ? 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' : 'none'
              }}
              onMouseEnter={() => {
                setIsQuoteHovered(true);
                playQuoteHoverSound();
              }}
              onMouseLeave={() => {
                setIsQuoteHovered(false);
                stopQuoteHoverSound();
              }}
              onClick={(e) => { e.stopPropagation(); toggleQuote(); }}
            >
              <AnimatedText
                lang={lang}
                hClass="h-6"
                className={`text-[13px] sm:text-[15px] md:text-[17px] tracking-[0.3em] font-light italic transition-colors duration-700 ${isRetro ? 'text-[#8B261D]/70 hover:text-[#8B261D]' : 'text-white/60 hover:text-white/95'} ${(isTitleHovered || isQuoteHovered) ? (isRetro ? 'retro-subtle-active' : 'rgb-subtle-active text-white/95') : ''}`}
                style={{ fontFamily: "'Noto Serif SC', 'Playfair Display', serif" }}
                cn={LACANIAN_QUOTES[lacanianQuoteIndex].cn}
                en={LACANIAN_QUOTES[lacanianQuoteIndex].en}
              />
              <div className={`mt-2 w-0 group-hover/quote:w-12 h-px mx-auto transition-all duration-500 opacity-40 ${isRetro ? 'bg-[#8B261D]' : 'bg-white'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Layer 4: Realm portals (Academic Navigation) - Centered Alignment */}
      <div className="absolute inset-0 pointer-events-none z-[10] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center" style={{ transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)` }}>
          {/* ECG Circuit Timeline - Passing through the core (Strengthened) */}
          <div className="relative w-full max-w-[1240px] mx-auto opacity-80 sm:opacity-70 transition-opacity duration-700 hover:opacity-100">
            <ECGCircuitTimeline 
              hoveredIndex={hoveredRealm ? REALMS.findIndex(r => r.id === hoveredRealm) : -1} 
              isRetro={isRetro} 
              isTitleHovered={isTitleHovered || isQuoteHovered}
              glitchActiveSegments={glitchActive}
            />
          </div>

          {/* Navigation Group - Aligned with the centered timeline */}
          <div className="relative w-full max-w-[1240px] mx-auto mt-0 sm:mt-0 flex flex-row justify-between items-center px-12 md:px-20 h-0 overflow-visible">
            {REALMS.map((realm, i) => {
              const isHovered = hoveredRealm === realm.id;
              const isOtherHovered = hoveredRealm !== null && hoveredRealm !== realm.id;
              return (
                <button
                  key={realm.id}
                  onClick={() => handleRealmClick(realm, i)}
                  onMouseEnter={() => {
                    setHoveredRealm(realm.id);
                    handleRealmHover(i);
                  }}
                  onMouseLeave={() => {
                    setHoveredRealm(null);
                    handleRealmLeave(i);
                  }}
                  className={`relative group flex flex-col items-center text-center pointer-events-auto flex-shrink-0 transition-all duration-[600ms] ease-out
                    ${isExiting && exitTarget === realm.id ? '!brightness-125' : ''}
                    ${isExiting && exitTarget !== realm.id ? '!opacity-0 pointer-events-none' : ''}
                    ${isOtherHovered ? 'blur-sm opacity-40 scale-95' : ''}
                    ${isHovered ? 'z-20 scale-105' : 'z-10 scale-100'}
                  `}
                style={{
                  animation: (!isReturning && mounted) ? `fadeInUp 0.6s ease-out both` : 'none',
                  animationDelay: !isReturning ? `${0.8 + Math.floor(i / 2) * 0.15}s` : '0s', // Grouped in pairs
                  width: '140px',
                  minWidth: '140px',
                  opacity: (!isReturning && !mounted) ? 0 : 1,
                  transform: (!isReturning && !mounted) ? 'translateY(20px)' : 'translateY(0)',
                }}
              >
                {/* Tech Code Marker - Shifted up */}
                <div className="mb-[60px] sm:mb-[80px] flex justify-center overflow-visible">
                  <AnimatedText
                    lang={lang}
                    hClass="h-10 w-40"
                    className={`text-[9px] font-mono uppercase tracking-[0.3em] text-center
                      ${isHovered ? (isRetro ? 'text-[#8B261D]' : 'text-white') : (isRetro ? 'text-[#8B261D]/60' : 'text-white/45')}
                      ${isTitleHovered ? (isRetro ? 'retro-subtle-active' : 'rgb-subtle-active text-white') : ''}
                      ${(!isTitleHovered && glitchActive[i]) ? (isRetro ? 'retro-jitter-active text-[#8B261D]' : 'rgb-jitter-active text-white') : ''}
                    `}
                    style={{
                      textShadow: isRetro ? 'none' : '0 2px 8px rgba(0,0,0,0.8)',
                      transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                      transition: 'transform 1.2s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.2s ease',
                      transformOrigin: 'center',
                      animationDelay: (isTitleHovered || glitchActive[i]) && !isRetro ? `${[0.3, 0.7, 0.2, 0.8, 0.4][i]}s` : '0s'
                    }}
                    cn={`MOD // 0${i + 1}`}
                    en={`MOD // 0${i + 1}`}
                  />
                </div>

                {/* Main Menu Label */}
                <div className="mt-[20px] sm:mt-[30px] flex flex-col items-center">
                  <AnimatedText
                    lang={lang}
                    hClass="h-16"
                    className={`text-[14px] sm:text-[16px] tracking-[0.3em] font-medium uppercase leading-relaxed
                      ${isHovered ? (isRetro ? 'text-[#8B261D]' : 'text-white') : (isRetro ? 'text-[#8B261D]/90' : 'text-white/80')}
                      ${isTitleHovered ? (isRetro ? 'retro-subtle-active' : 'rgb-subtle-active text-white') : ''}
                      ${(!isTitleHovered && glitchActive[i]) ? (isRetro ? 'retro-jitter-active text-[#8B261D]' : 'rgb-jitter-active text-white') : ''}
                    `}
                    style={{
                      fontFamily: "'Noto Serif SC', 'Playfair Display', serif",
                      fontWeight: isHovered ? (isRetro ? 700 : 500) : (isRetro ? 500 : 300),
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 1.2s cubic-bezier(0.19, 1, 0.22, 1), color 1.2s ease, opacity 1.2s ease',
                      willChange: 'transform',
                      textShadow: isRetro ? '0.5px 0.5px 0.5px rgba(255,255,255,0.8)' : 'none',
                      animationDelay: (isTitleHovered || glitchActive[i]) && !isRetro ? `${[0.2, 0.8, 0.2, 0.8, 1.4][i]}s` : '0s'
                    }}
                    cn={realm.titleCn}
                    en={
                      <div className="flex flex-col items-center">
                        {realm.titleEn.split('\n').map((line, idx) => (
                          <span key={idx}>{line}</span>
                        ))}
                      </div>
                    }
                  />

                  {/* Technical Sub-description (Reveal on hover) */}
                  <div 
                    className={`mt-6 absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-[1200ms] cubic-bezier(0.19, 1, 0.22, 1) pointer-events-none
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                    `}
                  >
                    <div className={`w-16 h-px mb-4 transition-all duration-1000 ${isHovered ? 'scale-x-100' : 'scale-x-0'} ${isRetro ? 'bg-white/60 shadow-[0_0.5px_0_rgba(139,38,29,0.3)]' : 'bg-white/20'}`} />
                    <AnimatedText
                      lang={lang}
                      hClass="h-[100px] sm:h-[80px]"
                      className={`text-[13px] sm:text-[14px] font-medium tracking-[0.1em] w-[240px] sm:w-[280px] leading-relaxed text-center
                        ${isRetro ? 'text-[#8B261D]' : 'text-white/80'}
                      `}
                      cn={realm.descCn}
                      en={realm.descEn}
                    />
                    {/* Decorative Corner Brackets on Hover */}
                    <div className={`absolute -inset-x-4 -inset-y-2 border-x border-current transition-all duration-1000 ${isHovered ? 'opacity-20 scale-100' : 'opacity-0 scale-95'} ${isRetro ? 'text-[#8B261D]' : 'text-white'}`} style={{ borderImage: 'linear-gradient(to bottom, currentColor 10%, transparent 10%, transparent 90%, currentColor 90%) 1' }} />
                    
                    {/* Click Guidance Indicator */}
                    <div className={`mt-8 text-[9px] font-mono tracking-[0.3em] flex items-center justify-center gap-2 transition-all duration-500 absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap
                      ${isHovered ? 'opacity-100 translate-y-4' : 'opacity-0 translate-y-0'}
                      ${isRetro ? 'text-[#8B261D]' : 'text-[#22d3ee]'}
                    `}>
                      <span className="animate-bounce inline-block">▼</span> [ SYS.ACTIVATE ]
                    </div>
                  </div>
                </div>
              </button>


            );
          })}
        </div>
        </div>
      </div>

      <div
        className={`absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-1 z-[100] p-1 rounded-full transition-all duration-500 border border-transparent backdrop-blur-sm hover:backdrop-blur-md pointer-events-auto
          ${isRetro ? 'bg-[var(--bg-main)]/50 hover:bg-[#FDFCF8]/90 hover:border-[#8B261D]/15' 
                    : 'bg-transparent hover:bg-black/30 hover:border-white/5'}`}
        style={{
          animation: mounted ? 'fadeIn 1.5s ease-out both' : 'none',
          animationDelay: '0.5s',
          opacity: 0,
        }}
      >
        <button
          onClick={() => setPage(2)}
          className={`h-8 px-3 rounded-full transition-all duration-300 flex items-center gap-1.5 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95
            ${isRetro ? 'text-black/40 hover:text-black/80 hover:border-black/5' : 'text-white/25 hover:text-white/70'}`}
          title={lang === 'CN' ? '回到全局主页' : 'Global Home'}
        >
          <Globe size={13} />
          <div className="hidden sm:block">
            <AnimatedText
              lang={lang}
              hClass="h-4"
              className="text-[10px] font-mono font-bold tracking-[0.15em]"
              cn="全局主页"
              en="GLOBAL HOME"
            />
          </div>
        </button>

        <button
          onClick={() => setMistEnabled(!mistEnabled)}
          className={`w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90
            ${isRetro ? 'hover:border-black/5' : ''}`}
          title={mistEnabled ? (lang === 'CN' ? '关闭迷雾' : 'Disable Mist') : (lang === 'CN' ? '开启迷雾' : 'Enable Mist')}
        >
          <div className="relative flex items-center justify-center">
            <Cloud size={13} strokeWidth={2} className={`transition-all duration-300 ${mistEnabled ? (isRetro ? 'text-black/60 shadow-[0_0_8px_rgba(0,0,0,0.1)]' : 'text-white/80 shadow-[0_0_8px_rgba(255,255,255,0.2)]') : (isRetro ? 'text-black/20' : 'text-white/20')}`} />
            {mistEnabled && (
                <div className={`absolute -inset-1 rounded-full animate-pulse opacity-10 ${isRetro ? 'bg-black' : 'bg-white'}`} style={{ animationDuration: '4s' }} />
            )}
          </div>
        </button>

        <button
          onClick={toggleMusic}
          className={`w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90
            ${isRetro ? 'hover:border-black/5' : ''}`}
          title={isPlaying ? (lang === 'CN' ? '关闭背景音乐' : 'Mute Music') : (lang === 'CN' ? '开启背景音乐' : 'Unmute Music')}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Volume2 size={13} strokeWidth={2} className={`transition-colors duration-300 ${isRetro ? 'text-black/40 hover:text-black/80' : 'text-white/30 hover:text-white/80'}`} />
              <div className={`absolute -inset-1 rounded-full animate-ping opacity-20 ${isRetro ? 'bg-black' : 'bg-white'}`} style={{ animationDuration: '3s' }} />
            </div>
          ) : (
            <VolumeX size={13} strokeWidth={2} className={`transition-colors duration-300 ${isRetro ? 'text-black/40 hover:text-black/80' : 'text-white/30 hover:text-white/80'}`} />
          )}
        </button>
        
        <button
          onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
          className={`w-8 h-8 rounded-full flex flex-col items-center justify-center transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90
            ${isRetro ? 'hover:border-black/5' : ''}`}
          title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
        >
          <div className="h-4 overflow-hidden group/lang">
            <div 
              className="transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: lang === 'CN' ? 'translateY(0)' : 'translateY(-50%)' }}
            >
              <span className={`block text-[10px] font-mono font-bold tracking-[0.2em] leading-4 transition-colors duration-300 ${isRetro ? 'text-black/40 group-hover/lang:text-black/80' : 'text-white/30 group-hover/lang:text-white/80'}`}>中</span>
              <span className={`block text-[10px] font-mono font-bold tracking-[0.2em] leading-4 transition-colors duration-300 ${isRetro ? 'text-black/40 group-hover/lang:text-black/80' : 'text-white/30 group-hover/lang:text-white/80'}`}>EN</span>
            </div>
          </div>
        </button>

        <button
          onClick={toggleTheme}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90
            ${isRetro ? 'text-black/40 hover:text-black/80 hover:border-black/5' : 'text-white/30 hover:text-white/80'}`}
          title={theme === 'dark' ? (lang === 'CN' ? "切换为复古主题" : "Switch to Retro") : (lang === 'CN' ? "切换为暗黑主题" : "Switch to Dark")}
        >
          {theme === 'dark' ? <Moon size={12} strokeWidth={2.5} /> : <Sun size={12} strokeWidth={2.5} className="text-[#8B261D]/60 hover:text-[#8B261D]" />}
        </button>

        <button
          onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
          className={`h-8 px-3 rounded-full transition-all duration-300 flex items-center gap-1.5 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95
            ${isRetro ? 'text-black/40 hover:text-black/80 hover:border-black/5' : 'text-white/25 hover:text-white/70'}`}
        >
          <UserIcon size={12} />
          <div className="hidden sm:block">
            <AnimatedText
              lang={lang}
              hClass="h-4"
              className="text-[10px] font-mono font-bold tracking-[0.15em]"
              cn={currentUser.id !== 'guest_user' ? currentUser.username : '访客'}
              en={currentUser.id !== 'guest_user' ? currentUser.username : 'GUEST'}
            />
          </div>
        </button>
      </div>

      <div
        className={`absolute bottom-4 left-0 right-0 text-center z-[10] pointer-events-none ${isRetro ? 'retro-flicker-hover' : 'rgb-split-hover'}`}
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

      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-[9999] hidden lg:flex flex-col items-center justify-center transition-opacity duration-200 ease-out"
        style={{ left: cursorPos.x, top: cursorPos.y, transform: 'translate(-50%, -50%)', opacity: cursorPos.x < 0 ? 0 : 1 }}
      >
        <div className={`relative transition-all duration-500 flex items-center justify-center backdrop-invert backdrop-hue-rotate-180
          ${isRetro ? 'bg-[#8B261D]/5' : 'bg-white/5 mix-blend-difference'}
          ${isHoveringClickable ? 'w-12 h-12 scale-100' : 'w-3 h-3 border border-opacity-40 rounded-full'}
          ${!isHoveringClickable && (isRetro ? 'border-[#8B261D]/50' : 'border-white')}
        `}>
            {/* Non-hover Center Dot */}
            <div className={`w-1 h-1 transition-all duration-300 ${isRetro ? 'bg-[#8B261D]' : 'bg-white'} ${isHoveringClickable ? 'opacity-0 scale-50' : 'opacity-100 scale-100 rounded-full'}`} />
            
            {/* Hover Viewfinder Corners */}
            <div className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] transition-all duration-300 ${isHoveringClickable ? 'opacity-100 -translate-x-1 -translate-y-1' : 'opacity-0 translate-x-1 translate-y-1'} ${isRetro ? 'border-[#8B261D]' : 'border-white'}`} />
            <div className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] transition-all duration-300 ${isHoveringClickable ? 'opacity-100 translate-x-1 -translate-y-1' : 'opacity-0 -translate-x-1 translate-y-1'} ${isRetro ? 'border-[#8B261D]' : 'border-white'}`} />
            <div className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] transition-all duration-300 ${isHoveringClickable ? 'opacity-100 -translate-x-1 translate-y-1' : 'opacity-0 translate-x-1 -translate-y-1'} ${isRetro ? 'border-[#8B261D]' : 'border-white'}`} />
            <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] transition-all duration-300 ${isHoveringClickable ? 'opacity-100 translate-x-1 translate-y-1' : 'opacity-0 -translate-x-1 -translate-y-1'} ${isRetro ? 'border-[#8B261D]' : 'border-white'}`} />
            
            {/* Hover Center Crosshair */}
            <div className={`absolute w-[1px] h-3 transition-opacity duration-300 ${isHoveringClickable ? 'opacity-60' : 'opacity-0'} ${isRetro ? 'bg-[#8B261D]' : 'bg-white'}`} />
            <div className={`absolute w-3 h-[1px] transition-opacity duration-300 ${isHoveringClickable ? 'opacity-60' : 'opacity-0'} ${isRetro ? 'bg-[#8B261D]' : 'bg-white'}`} />
        </div>
        <div className={`absolute top-full mt-3 font-mono transition-all duration-300 whitespace-nowrap mix-blend-difference
          ${isHoveringClickable ? 'text-[9px] opacity-100 tracking-widest' : 'text-[8px] opacity-40'}
          ${isRetro ? 'text-[#8B261D]' : 'text-white'}
        `}>
          [X:{Math.max(0, cursorPos.x).toFixed(0)} Y:{Math.max(0, cursorPos.y).toFixed(0)}]
        </div>
      </div>
    </div>
  );
};
