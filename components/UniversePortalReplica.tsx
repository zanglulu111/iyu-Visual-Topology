import React, { useEffect, useRef, useState } from 'react';
import { Cloud, Eye, Search } from 'lucide-react';
import { User, ViewMode } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { ShaderBackground } from './ShaderBackground';

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
}

type PortalTone = 'red' | 'cyan';

interface PortalCardDef {
  number: string;
  titleCn: string;
  titleEn: string;
  descCn: string;
  descEn: string;
  imageSrc: string;
  tone: PortalTone;
  onClick: () => void;
}

interface NavItemDef {
  titleCn: string;
  titleEn: string;
  onClick: () => void;
}

const titleChromaticShadow =
  '-1.4px 0 0 rgba(196, 44, 46, 0.72), 1.4px 0 0 rgba(106, 218, 232, 0.58), 0 12px 38px rgba(0, 0, 0, 0.65)';

const textChromaticShadow =
  '-0.7px 0 0 rgba(206, 55, 62, 0.42), 0.7px 0 0 rgba(95, 214, 232, 0.36)';

const toneColor = (tone: PortalTone, isRetro: boolean) => {
  if (tone === 'cyan') return isRetro ? '#63bfc9' : '#66d6e5';
  return isRetro ? '#9a2f27' : '#ba3d38';
};

const PortalNavItem: React.FC<NavItemDef> = ({ titleCn, titleEn, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="group flex w-full flex-col items-center text-center transition-colors duration-300"
  >
    <span className="font-serif text-[11px] leading-none tracking-[0.16em] text-white/80 transition-colors duration-300 group-hover:text-white">
      {titleCn}
    </span>
    <span className="mt-0.5 text-[6.5px] leading-none tracking-[0.11em] text-white/45 transition-colors duration-300 group-hover:text-white/70">
      {titleEn}
    </span>
  </button>
);

const cardEcgPaths = [
  'M 24 24 L 58 24 L 64 23.4 L 70 24 L 102 24 L 108 20 L 112 33 L 117 9 L 123 31 L 128 21 L 134 25 L 140 23.6 L 148 24 L 194 24 L 202 23.2 L 210 24 L 236 24',
  'M 24 24 L 62 24 L 70 23 L 78 24 L 101 24 L 107 11 L 112 36 L 118 7 L 124 32 L 130 18 L 136 26 L 143 23.5 L 151 24 L 197 24 L 204 23.4 L 212 24 L 236 24',
  'M 24 24 L 60 24 L 68 23.4 L 76 24 L 97 24 L 104 16 L 110 9 L 116 29 L 122 6 L 128 36 L 134 20 L 140 26 L 148 24 L 196 24 L 204 23.2 L 212 24 L 236 24',
  'M 24 24 L 58 24 L 66 24.6 L 74 24 L 101 24 L 107 30 L 113 17 L 119 36 L 125 8 L 131 31 L 137 21 L 144 25 L 152 24 L 196 24 L 204 23.3 L 212 24 L 236 24',
  'M 24 24 L 62 24 L 70 23.6 L 78 24 L 99 24 L 105 26 L 111 7 L 117 31 L 123 36 L 129 27 L 135 14 L 141 26 L 149 24 L 198 24 L 205 23.4 L 213 24 L 236 24',
];

const CardECGLine: React.FC<{ index: number }> = ({ index }) => {
  const path = cardEcgPaths[index % cardEcgPaths.length];

  return (
  <svg viewBox="0 0 260 48" preserveAspectRatio="none" className="h-full w-full overflow-visible" aria-hidden="true">
    <path
      d={path}
      fill="none"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="0.35"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className="mist-card-ecg-pulse"
      d={path}
      fill="none"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="0.42"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};

const PortalCard: React.FC<{
  card: PortalCardDef;
  isRetro: boolean;
  index: number;
  onHoverStart: (index: number) => void;
  onHoverEnd: (index: number) => void;
}> = ({ card, isRetro, index, onHoverStart, onHoverEnd }) => {
  const accent = toneColor(card.tone, isRetro);

  return (
    <button
      type="button"
      onClick={card.onClick}
      onMouseEnter={() => onHoverStart(index)}
      onMouseLeave={() => onHoverEnd(index)}
      className="mist-portal-card group relative overflow-hidden bg-black/12 text-left transition-all duration-700 hover:bg-black/58 hover:shadow-[0_0_42px_rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
      style={{ '--portal-card-accent': accent, '--card-index': index } as React.CSSProperties}
    >
      <div className="mist-card-media absolute z-0 overflow-hidden bg-black" aria-hidden="true">
        <img
          src={card.imageSrc}
          alt=""
          className="mist-card-bg h-full w-full scale-[1.01] object-cover opacity-[0.78] grayscale transition-all duration-[980ms] group-hover:scale-[1.035] group-hover:opacity-[0.84]"
          draggable="false"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/40 via-black/18 to-transparent transition-opacity duration-700 group-hover:opacity-95" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_74%_38%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.06),transparent_35%,rgba(0,0,0,0.36))]" />
      <div className="absolute inset-0 z-[3] bg-white/[0.04] opacity-45 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="mist-card-film-base pointer-events-none absolute inset-0 z-[4] transition-all duration-500" aria-hidden="true" />
      <img
        src="/portal-assets/film-card-frame.png"
        alt=""
        aria-hidden="true"
        className="mist-card-film-frame pointer-events-none absolute inset-0 z-[8] h-full w-full object-fill opacity-100 transition-all duration-500"
        draggable="false"
      />

      <div className="mist-card-body relative z-10 h-full px-5 py-6 text-center 2xl:px-8 2xl:py-7">
        <div className="mist-card-hover-field pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[74%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-700 group-hover:opacity-100" aria-hidden="true">
          <div className="mist-card-corner mist-card-corner-tl" />
          <div className="mist-card-corner mist-card-corner-tr" />
          <div className="mist-card-corner mist-card-corner-bl" />
          <div className="mist-card-corner mist-card-corner-br" />
        </div>

        <div
          className="mist-card-title absolute left-1/2 top-1/2 whitespace-nowrap font-serif text-[clamp(1rem,1.08vw,1.24rem)] leading-none tracking-[0.18em] text-white/78 transition-all duration-700 group-hover:text-white"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.82)' }}
        >
          {card.titleCn}
        </div>

        <div className="mist-card-local-ecg pointer-events-none absolute left-1/2 top-1/2 h-12 w-[58%] -translate-x-1/2 -translate-y-1/2 scale-x-75 opacity-0 transition-all duration-700 group-hover:scale-x-100 group-hover:opacity-100">
          <CardECGLine index={index} />
        </div>

        <div className="mist-card-description pointer-events-none absolute inset-x-[10%] top-1/2 opacity-0 transition-all duration-700 group-hover:opacity-100">
          <p className="whitespace-pre-line font-serif text-[clamp(0.6rem,0.68vw,0.78rem)] leading-[1.62] tracking-[0.12em] text-white/84">
            {card.descCn}
          </p>
        </div>
      </div>
    </button>
  );
};

export const UniversePortal: React.FC<UniversePortalProps> = ({
  setPage,
  setViewMode,
  setInitialProtocol,
  openManual,
}) => {
  const { theme } = useTheme();
  const isRetro = theme === 'retro';
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [mistEnabled, setMistEnabled] = useState(true);
  const [isTitleGlitching, setIsTitleGlitching] = useState(false);
  const titleGlitchActiveRef = useRef(false);
  const glitchAudioRef = useRef<HTMLAudioElement | null>(null);
  const cardAudioRefs = useRef<(HTMLAudioElement | null)[]>([null, null, null, null, null]);

  useEffect(() => {
    let animationFrame = 0;
    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setMousePos({
          x: (event.clientX / window.innerWidth - 0.5) * 2,
          y: (event.clientY / window.innerHeight - 0.5) * 2,
        });
        setCursorPos({ x: event.clientX, y: event.clientY });
        const target = event.target as HTMLElement;
        setIsHoveringClickable(!!target.closest('button, a, [role="button"], .pointer-events-auto, .mist-portal-title-wrap'));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const audio = new Audio('/audio/glitch.mp3');
    audio.volume = 0.8;
    audio.loop = true;
    glitchAudioRef.current = audio;

    [1, 2, 3, 4, 5].forEach((num, index) => {
      const cardAudio = new Audio(`/audio/realm-0${num}.mp3`);
      cardAudio.volume = 0.6;
      cardAudio.loop = false;
      cardAudioRefs.current[index] = cardAudio;
    });

    return () => {
      audio.pause();
      audio.src = '';
      glitchAudioRef.current = null;
      cardAudioRefs.current.forEach((cardAudio) => {
        if (!cardAudio) return;
        cardAudio.pause();
        cardAudio.src = '';
      });
    };
  }, []);

  const startTitleGlitch = () => {
    if (titleGlitchActiveRef.current) return;
    titleGlitchActiveRef.current = true;
    cardAudioRefs.current.forEach((cardAudio) => {
      if (!cardAudio) return;
      cardAudio.pause();
      cardAudio.currentTime = 0;
    });
    setIsTitleGlitching(true);
    if (glitchAudioRef.current) {
      if (glitchAudioRef.current.paused) {
        glitchAudioRef.current.currentTime = 0;
        glitchAudioRef.current.play().catch(() => {});
      }
    }
  };

  const stopTitleGlitch = () => {
    titleGlitchActiveRef.current = false;
    setIsTitleGlitching(false);
    if (glitchAudioRef.current) {
      glitchAudioRef.current.pause();
      glitchAudioRef.current.currentTime = 0;
    }
  };

  const startCardHover = (index: number) => {
    if (titleGlitchActiveRef.current) return;

    const cardAudio = cardAudioRefs.current[index];
    if (cardAudio) {
      cardAudio.currentTime = 0;
      cardAudio.play().catch(() => {});
    }
  };

  const stopCardHover = (index: number) => {
    const cardAudio = cardAudioRefs.current[index];
    if (cardAudio) {
      cardAudio.pause();
      cardAudio.currentTime = 0;
    }
  };

  const goDictionary = () => {
    setInitialProtocol?.('DICTIONARY');
    setViewMode('DICTIONARY');
    setPage(1);
  };

  const goEngine = () => {
    setViewMode('ENGINE');
    setPage(0);
  };

  const goArchive = () => {
    setViewMode('ARCHIVE');
    setPage(1);
  };

  const goVideo = () => {
    setViewMode('VIDEO');
    setPage(1);
  };

  const goRorschach = () => {
    setViewMode('RORSCHACH');
    setPage(1);
  };

  const navItems: NavItemDef[] = [
    { titleCn: '关于我们', titleEn: 'About', onClick: () => setPage(2) },
    { titleCn: '研究', titleEn: 'Research', onClick: goEngine },
    { titleCn: '论文', titleEn: 'Essays', onClick: goDictionary },
    { titleCn: '档案', titleEn: 'Archive', onClick: goArchive },
    { titleCn: '活动', titleEn: 'Events', onClick: goVideo },
  ];

  const portalCards: PortalCardDef[] = [
    {
      number: '01',
      titleCn: '主体档案',
      titleEn: 'Subject Archive',
      descCn: '进入梦、档案与主体裂缝',
      descEn: 'The crossroads of psychoanalysis and cinema theory.',
      imageSrc: '/portal-assets/card-01-89.png',
      tone: 'red',
      onClick: goArchive,
    },
    {
      number: '02',
      titleCn: '邪典影像',
      titleEn: 'Cult Video',
      descCn: '进入光影、症候与实在界',
      descEn: 'How cinema renders unconscious structures visible.',
      imageSrc: '/portal-assets/card-02-88.png',
      tone: 'cyan',
      onClick: goVideo,
    },
    {
      number: '03',
      titleCn: '欲望再生产',
      titleEn: 'Desire Reproduction',
      descCn: '启动符号链与创作引擎',
      descEn: 'How images produce subjects and sustain ideology.',
      imageSrc: '/portal-assets/card-03-91.png',
      tone: 'red',
      onClick: goEngine,
    },
    {
      number: '04',
      titleCn: '迷雾辞典',
      titleEn: 'Mist Dictionary',
      descCn: '进入拉康、齐泽克与词条',
      descEn: 'Symptoms as gazes and sounds beyond representation.',
      imageSrc: '/portal-assets/card-04-90.png',
      tone: 'cyan',
      onClick: goDictionary,
    },
    {
      number: '05',
      titleCn: '精神分析',
      titleEn: 'Psychoanalysis',
      descCn: '进入罗夏墨迹与潜意识探测',
      descEn: 'Archive research, image archaeology, and field work.',
      imageSrc: '/portal-assets/card-05-87.png',
      tone: 'red',
      onClick: goRorschach,
    },
  ];

  const portalRootStyle = {
    '--portal-mouse-x': mousePos.x.toFixed(4),
    '--portal-mouse-y': mousePos.y.toFixed(4),
    '--portal-mist-opacity': mistEnabled ? 1 : 0,
  } as React.CSSProperties;

  return (
    <div
      className={`mist-portal-root fixed inset-0 overflow-hidden bg-[#030303] text-white ${isTitleGlitching ? 'mist-portal-text-system-active' : ''}`}
      style={portalRootStyle}
    >
      <style>{`
        .mist-portal-root {
          --mist-serif: "Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "Times New Roman", serif;
          --portal-frame-width: 1840px;
          --portal-pad-x: clamp(2.45rem, 4vw, 5rem);
          --portal-pad-top: clamp(0.38rem, 0.62vw, 0.78rem);
          --portal-pad-bottom: clamp(0.72rem, 1.1vw, 1.25rem);
          --portal-main-gap: clamp(0.36rem, 0.55vh, 0.62rem);
          --portal-main-top: clamp(0.46rem, 0.9vh, 0.78rem);
          --portal-footer-height: clamp(4.2rem, 7.6vh, 5.6rem);
          --portal-hero-gap: clamp(0.45rem, 1.15vw, 1.8rem);
          --portal-left-col: minmax(21.5rem, 0.29fr);
          --portal-stage-col: minmax(54rem, 0.71fr);
          --portal-title-size: clamp(4.05rem, 6.15vw, 7.35rem);
          --portal-left-top: clamp(3.75rem, 7.75vh, 6.55rem);
          --portal-left-shift-x: clamp(1.65rem, 2.85vw, 3.95rem);
          --stage-overlap: clamp(8rem, 17vw, 22rem);
          --portal-card-height: clamp(10rem, min(21.5vh, 10vw), 13.5rem);
          --portal-card-gap: clamp(0.65rem, 0.9vw, 1rem);
          --portal-available-hero: calc(100dvh - var(--portal-pad-top) - var(--portal-pad-bottom) - 34px - var(--portal-main-top) - var(--portal-card-height) - var(--portal-footer-height) - (var(--portal-main-gap) * 2));
          --portal-stage-width-cap: clamp(72vw, calc(var(--portal-available-hero) * 2.357), 100%);
          --portal-stage-height-cap: calc(var(--portal-stage-width-cap) * 0.4242);
          --portal-hero-height: clamp(25rem, var(--portal-available-hero), 43rem);
          --stage-top: 0;
          --stage-bottom-inset: clamp(0.34rem, 0.82vh, 0.68rem);
          --stage-left-clearance: 0px;
          --portal-film-side-width: clamp(1.7rem, 3vw, 3.6rem);
          --portal-film-side-breath: clamp(0.12rem, 0.18vw, 0.24rem);
          perspective: 1600px;
          cursor: none;
        }

        .mist-portal-root button,
        .mist-portal-root a,
        .mist-portal-root [role="button"] {
          cursor: none;
        }

        .mist-portal-root .font-serif {
          font-family: var(--mist-serif);
        }

        @keyframes mistPortalTitleGlitch {
          0%, 100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) skewX(0);
            text-shadow:
              -2px -0.5px 0.5px rgba(0,229,255,0.72),
              2px 0.5px 0.5px rgba(255,43,214,0.72),
              0 0 14px rgba(255,255,255,0.22),
              0 14px 42px rgba(0,0,0,0.72);
            filter: brightness(1.02) contrast(1.04);
          }
          18% {
            transform: translate3d(-1.4px, 0.7px, 0) skewX(1.4deg);
            text-shadow:
              -4.5px 1.2px 1px rgba(0,229,255,0.9),
              4.5px -1.2px 1px rgba(255,45,128,0.86),
              0 0 18px rgba(255,255,255,0.3),
              0 14px 42px rgba(0,0,0,0.72);
          }
          36% {
            transform: translate3d(0.9px, -1px, 0) skewX(-0.8deg);
            text-shadow:
              3.5px -2.5px 1.5px rgba(76,110,255,0.76),
              -3.5px 2.5px 1.5px rgba(255,79,216,0.86),
              0 0 12px rgba(255,255,255,0.25),
              0 14px 42px rgba(0,0,0,0.72);
          }
          58% {
            opacity: 0.96;
            transform: translate3d(-1px, 1.25px, 0) skewX(-1.5deg);
            text-shadow:
              -4px 2px 1px rgba(0,229,255,0.86),
              4px -2px 1px rgba(255,43,214,0.9),
              0 0 20px rgba(255,255,255,0.32),
              0 14px 42px rgba(0,0,0,0.72);
          }
          78% {
            opacity: 1;
            transform: translate3d(0.65px, -0.55px, 0) skewX(0.6deg);
          }
        }

        @keyframes mistPortalTitleScanline {
          0%, 100% {
            opacity: 0;
            transform: translate3d(-7%, -145%, 0) skewX(-8deg);
          }
          9% {
            opacity: 0;
            transform: translate3d(3%, -112%, 0) skewX(-8deg);
          }
          14% {
            opacity: 0.32;
            transform: translate3d(-2%, -74%, 0) skewX(-8deg);
          }
          17% {
            opacity: 0;
            transform: translate3d(4%, -61%, 0) skewX(-8deg);
          }
          43% {
            opacity: 0;
            transform: translate3d(-5%, 18%, 0) skewX(-8deg);
          }
          48% {
            opacity: 0.2;
            transform: translate3d(1%, 36%, 0) skewX(-8deg);
          }
          51% {
            opacity: 0;
            transform: translate3d(-1%, 42%, 0) skewX(-8deg);
          }
          76% {
            opacity: 0;
            transform: translate3d(5%, 93%, 0) skewX(-8deg);
          }
          81% {
            opacity: 0.26;
            transform: translate3d(-3%, 112%, 0) skewX(-8deg);
          }
          84% {
            opacity: 0;
            transform: translate3d(2%, 126%, 0) skewX(-8deg);
          }
        }

        @keyframes mistPortalSmokeDrift {
          0%, 100% { transform: translate3d(-5%, -2%, 0) scale(1.05); opacity: 0.28; }
          35% { transform: translate3d(3%, 1%, 0) scale(1.12); opacity: 0.42; }
          70% { transform: translate3d(6%, -1.5%, 0) scale(1.08); opacity: 0.34; }
        }

        @keyframes mistPortalSmokeDriftReverse {
          0%, 100% { transform: translate3d(4%, 2%, 0) scale(1.1); opacity: 0.24; }
          45% { transform: translate3d(-3%, -1%, 0) scale(1.02); opacity: 0.38; }
          78% { transform: translate3d(-5%, 1.5%, 0) scale(1.14); opacity: 0.3; }
        }

        @keyframes mistCardEcgRise {
          0% {
            transform: translate3d(-50%, calc(-50% + 14px), 36px) scaleX(0.72) scaleY(0.92);
            opacity: 0;
          }
          58% {
            transform: translate3d(-50%, calc(-50% - 2px), 40px) scaleX(1.02) scaleY(1.04);
            opacity: 1;
          }
          100% {
            transform: translate3d(-50%, -50%, 40px) scaleX(1) scaleY(1);
            opacity: 1;
          }
        }

        @keyframes mistCardEcgTraceReveal {
          0% {
            clip-path: inset(0 50% 0 50%);
            opacity: 0.12;
          }
          42% {
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 0.9;
          }
        }

        @keyframes mistCardDescriptionDescend {
          0% {
            transform: translate3d(0, clamp(0.55rem, 1.35vh, 0.82rem), 34px);
            opacity: 0;
          }
          100% {
            transform: translate3d(0, clamp(1rem, 2.45vh, 1.68rem), 34px);
            opacity: 1;
          }
        }

        .mist-portal-title-glitch-active {
          animation: mistPortalTitleGlitch 1.18s ease-in-out infinite;
        }

        .mist-portal-title-wrap {
          position: relative;
          display: inline-block;
        }

        .mist-portal-title-scanline {
          position: absolute;
          left: -5%;
          right: -5%;
          top: 0;
          height: 24%;
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          background:
            linear-gradient(to bottom,
              transparent 0%,
              rgba(255,255,255,0.12) 28%,
              rgba(0,229,255,0.28) 44%,
              rgba(255,43,214,0.24) 56%,
              rgba(255,255,255,0.08) 74%,
              transparent 100%);
          mix-blend-mode: screen;
        }

        .mist-portal-title-wrap.is-glitching .mist-portal-title-scanline {
          animation: mistPortalTitleScanline 3.18s linear infinite;
        }

        .mist-portal-text-system-active .mist-portal-header span,
        .mist-portal-text-system-active .mist-portal-kicker div,
        .mist-portal-text-system-active .mist-portal-subhead p,
        .mist-portal-text-system-active .mist-portal-divider,
        .mist-portal-text-system-active .mist-portal-quote-block p,
        .mist-portal-text-system-active .mist-portal-quote-block footer,
        .mist-portal-text-system-active .mist-card-title,
        .mist-portal-text-system-active .mist-card-description p,
        .mist-portal-text-system-active .mist-portal-footer-text,
        .mist-portal-text-system-active .mist-portal-footer button,
        .mist-portal-text-system-active .mist-portal-footer span,
        .mist-portal-text-system-active .mist-portal-footer-quote-mark,
        .mist-portal-text-system-active .mist-portal-search {
          animation: mistTextChromaticGlitch 1.28s ease-in-out infinite;
        }

        .mist-portal-text-system-active .mist-portal-mist-toggle {
          animation: mistControlChromaticGlitch 1.28s ease-in-out infinite;
        }

        .mist-portal-text-system-active .mist-portal-mist-toggle svg,
        .mist-portal-text-system-active .mist-portal-search svg {
          animation: mistIconChromaticGlitch 1.28s ease-in-out infinite;
        }

        .mist-portal-text-system-active .mist-portal-mist-toggle::after {
          animation: mistControlScanSlice 1.28s steps(2, end) infinite;
        }

        .mist-portal-text-system-active .mist-portal-footer {
          text-shadow: none;
          animation: none;
        }

        .mist-signal-glitch-active {
          animation: mistTextChromaticGlitch 1.75s ease-in-out infinite;
        }

        .mist-card-jitter-active {
          animation: mistCardTextJitter 1s linear 1 forwards;
        }

        @keyframes mistTextChromaticGlitch {
          0%, 100% {
            text-shadow:
              -1px -0.3px 0.5px rgba(0,229,255,0.42),
              1px 0.3px 0.5px rgba(255,43,214,0.42),
              0 0 8px rgba(255,255,255,0.12);
            filter: brightness(1) contrast(1.02);
            opacity: 1;
          }
          11% {
            text-shadow:
              -2.8px 0.7px 0.8px rgba(0,229,255,0.66),
              2.8px -0.7px 0.8px rgba(255,45,128,0.62),
              0 0 11px rgba(255,255,255,0.18);
            filter: brightness(1.16) contrast(1.18);
            opacity: 0.96;
          }
          15% {
            text-shadow:
              0.6px 0 0.4px rgba(255,255,255,0.26),
              -1.6px -0.4px 0.7px rgba(0,229,255,0.48),
              1.6px 0.4px 0.7px rgba(255,43,214,0.48);
            filter: brightness(0.92) contrast(1.06);
            opacity: 0.9;
          }
          32% {
            text-shadow:
              -2.2px 0.4px 0.8px rgba(0,229,255,0.58),
              2.2px -0.4px 0.8px rgba(255,45,128,0.54),
              0 0 11px rgba(255,255,255,0.16);
            filter: brightness(1.08) contrast(1.12);
            opacity: 1;
          }
          47% {
            text-shadow:
              1.9px -1px 1px rgba(76,110,255,0.52),
              -1.9px 1px 1px rgba(255,79,216,0.58),
              0 0 8px rgba(255,255,255,0.12);
            filter: brightness(1.02) contrast(1.16);
            opacity: 0.98;
          }
          71% {
            text-shadow:
              -2.6px 1px 0.8px rgba(0,229,255,0.58),
              2.6px -1px 0.8px rgba(255,43,214,0.62),
              0 0 12px rgba(255,255,255,0.14);
            filter: brightness(1.18) contrast(1.2);
            opacity: 0.94;
          }
          78% {
            text-shadow:
              -0.8px -0.2px 0.4px rgba(0,229,255,0.36),
              0.8px 0.2px 0.4px rgba(255,43,214,0.36),
              0 0 7px rgba(255,255,255,0.1);
            filter: brightness(0.96) contrast(1.05);
            opacity: 1;
          }
        }

        @keyframes mistIconChromaticGlitch {
          0%, 100% {
            filter:
              drop-shadow(-0.8px 0 0 rgba(0,229,255,0.34))
              drop-shadow(0.8px 0 0 rgba(255,43,214,0.32))
              brightness(1);
            opacity: 0.88;
          }
          13% {
            filter:
              drop-shadow(-2.2px 0.6px 0 rgba(0,229,255,0.7))
              drop-shadow(2.2px -0.6px 0 rgba(255,43,214,0.66))
              brightness(1.28)
              contrast(1.18);
            opacity: 1;
          }
          36% {
            filter:
              drop-shadow(1.6px -0.5px 0 rgba(76,110,255,0.56))
              drop-shadow(-1.6px 0.5px 0 rgba(255,79,216,0.62))
              brightness(1.1)
              contrast(1.12);
            opacity: 0.94;
          }
          69% {
            filter:
              drop-shadow(-2px 0.8px 0 rgba(0,229,255,0.62))
              drop-shadow(2px -0.8px 0 rgba(255,45,128,0.62))
              brightness(1.22)
              contrast(1.16);
            opacity: 1;
          }
        }

        @keyframes mistEcgSignalGlitch {
          0%, 100% {
            opacity: 0.86;
            filter:
              drop-shadow(-0.6px 0 0 rgba(0,229,255,0.22))
              drop-shadow(0.6px 0 0 rgba(255,43,214,0.2));
          }
          16% {
            opacity: 1;
            filter:
              drop-shadow(-1.8px 0.5px 0 rgba(0,229,255,0.58))
              drop-shadow(1.8px -0.5px 0 rgba(255,43,214,0.52))
              brightness(1.2);
          }
          39% {
            opacity: 0.78;
            filter:
              drop-shadow(1.1px -0.3px 0 rgba(76,110,255,0.4))
              drop-shadow(-1.1px 0.3px 0 rgba(255,79,216,0.44))
              brightness(0.95);
          }
          73% {
            opacity: 0.94;
            filter:
              drop-shadow(-1.4px 0.4px 0 rgba(0,229,255,0.46))
              drop-shadow(1.4px -0.4px 0 rgba(255,45,128,0.46))
              brightness(1.12);
          }
        }

        @keyframes mistControlChromaticGlitch {
          0%, 100% {
            border-color: rgba(255,255,255,0.36);
            background-color: rgba(255,255,255,0.055);
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.02),
              -1px 0 0 rgba(0,229,255,0.16),
              1px 0 0 rgba(255,43,214,0.14);
          }
          14% {
            border-color: rgba(255,255,255,0.74);
            background-color: rgba(255,255,255,0.105);
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.16),
              -2.5px 0.6px 0 rgba(0,229,255,0.34),
              2.5px -0.6px 0 rgba(255,43,214,0.3),
              0 0 16px rgba(255,255,255,0.08);
          }
          38% {
            border-color: rgba(255,255,255,0.48);
            background-color: rgba(255,255,255,0.07);
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.06),
              1.8px -0.4px 0 rgba(76,110,255,0.24),
              -1.8px 0.4px 0 rgba(255,79,216,0.26);
          }
          72% {
            border-color: rgba(255,255,255,0.66);
            background-color: rgba(255,255,255,0.095);
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.1),
              -2.1px 0.8px 0 rgba(0,229,255,0.3),
              2.1px -0.8px 0 rgba(255,45,128,0.28);
          }
        }

        @keyframes mistControlScanSlice {
          0%, 100% {
            opacity: 0;
            clip-path: inset(0 0 92% 0);
          }
          15% {
            opacity: 0.48;
            clip-path: inset(22% 0 52% 0);
          }
          18% {
            opacity: 0;
            clip-path: inset(52% 0 22% 0);
          }
          52% {
            opacity: 0.26;
            clip-path: inset(66% 0 12% 0);
          }
          55% {
            opacity: 0;
            clip-path: inset(0 0 92% 0);
          }
        }

        @keyframes mistStageChromaticGlitch {
          0%, 100% {
            filter:
              drop-shadow(-1px 0 0 rgba(0,229,255,0.16))
              drop-shadow(1px 0 0 rgba(255,43,214,0.14))
              brightness(1)
              contrast(1);
            transform: translate3d(0, 0, 0) scale(1);
          }
          10% {
            filter:
              drop-shadow(-4px 0.8px 0 rgba(0,229,255,0.36))
              drop-shadow(4px -0.8px 0 rgba(255,43,214,0.34))
              brightness(1.16)
              contrast(1.18);
            transform: translate3d(-0.8px, 0.3px, 0) scale(1.002);
          }
          14% {
            filter:
              drop-shadow(-1.2px 0 0 rgba(0,229,255,0.18))
              drop-shadow(1.2px 0 0 rgba(255,43,214,0.16))
              brightness(0.94)
              contrast(1.05);
            transform: translate3d(0.6px, -0.2px, 0) scale(1);
          }
          37% {
            filter:
              drop-shadow(3px -0.6px 0 rgba(76,110,255,0.28))
              drop-shadow(-3px 0.6px 0 rgba(255,79,216,0.3))
              brightness(1.08)
              contrast(1.14);
            transform: translate3d(0.45px, -0.5px, 0) scale(1.001);
          }
          71% {
            filter:
              drop-shadow(-3.4px 0.7px 0 rgba(0,229,255,0.32))
              drop-shadow(3.4px -0.7px 0 rgba(255,45,128,0.34))
              brightness(1.12)
              contrast(1.16);
            transform: translate3d(-0.55px, 0.45px, 0) scale(1.002);
          }
        }

        @keyframes mistStageScanSlice {
          0%, 100% {
            opacity: 0;
            transform: translate3d(0, 0, 0);
            clip-path: inset(0 0 96% 0);
          }
          11% {
            opacity: 0.34;
            transform: translate3d(-1.2%, 0, 0);
            clip-path: inset(18% 0 68% 0);
          }
          14% {
            opacity: 0;
            transform: translate3d(0.8%, 0, 0);
            clip-path: inset(54% 0 32% 0);
          }
          42% {
            opacity: 0.22;
            transform: translate3d(1.6%, 0, 0);
            clip-path: inset(62% 0 24% 0);
          }
          45% {
            opacity: 0;
            transform: translate3d(0, 0, 0);
            clip-path: inset(0 0 96% 0);
          }
          73% {
            opacity: 0.28;
            transform: translate3d(-1%, 0, 0);
            clip-path: inset(31% 0 55% 0);
          }
          77% {
            opacity: 0;
            transform: translate3d(0, 0, 0);
            clip-path: inset(0 0 96% 0);
          }
        }

        @keyframes mistCardSurfaceGlitch {
          0%, 100% {
            filter:
              grayscale(1)
              drop-shadow(-0.7px 0 0 rgba(0,229,255,0.16))
              drop-shadow(0.7px 0 0 rgba(255,43,214,0.14));
            transform: scale(1.035) translate3d(0, 0, 0);
          }
          13% {
            filter:
              grayscale(1)
              brightness(1.16)
              contrast(1.16)
              drop-shadow(-2.8px 0.5px 0 rgba(0,229,255,0.34))
              drop-shadow(2.8px -0.5px 0 rgba(255,43,214,0.32));
            transform: scale(1.042) translate3d(-0.7px, 0.2px, 0);
          }
          18% {
            filter:
              grayscale(1)
              brightness(0.92)
              contrast(1.06)
              drop-shadow(-1px 0 0 rgba(0,229,255,0.16))
              drop-shadow(1px 0 0 rgba(255,43,214,0.14));
            transform: scale(1.035) translate3d(0.5px, -0.2px, 0);
          }
          46% {
            filter:
              grayscale(1)
              brightness(1.08)
              contrast(1.14)
              drop-shadow(2.1px -0.3px 0 rgba(76,110,255,0.24))
              drop-shadow(-2.1px 0.3px 0 rgba(255,79,216,0.28));
            transform: scale(1.039) translate3d(0.35px, -0.45px, 0);
          }
          74% {
            filter:
              grayscale(1)
              brightness(1.14)
              contrast(1.16)
              drop-shadow(-2.6px 0.5px 0 rgba(0,229,255,0.3))
              drop-shadow(2.6px -0.5px 0 rgba(255,45,128,0.32));
            transform: scale(1.041) translate3d(-0.45px, 0.35px, 0);
          }
        }

        @keyframes mistCardTextJitter {
          0%, 12% {
            transform: translate(-1px, 0.4px);
            text-shadow: -1.8px -0.4px 0.4px rgba(0,229,255,0.58), 1.8px 0.4px 0.4px rgba(255,43,214,0.62);
          }
          4%, 8% {
            transform: translate(1.6px, -0.8px) skewX(0.8deg);
            text-shadow: -3px 0.8px 0.8px rgba(0,229,255,0.76), 3px -0.8px 0.8px rgba(255,45,128,0.74);
          }
          13%, 32% {
            transform: translate(0, 0);
            text-shadow: -1px -0.3px 0.4px rgba(0,229,255,0.42), 1px 0.3px 0.4px rgba(255,43,214,0.46);
          }
          33%, 45% {
            transform: translate(1.2px, -0.6px);
            text-shadow: -2px 0.6px 0.8px rgba(76,110,255,0.62), 2px -0.6px 0.8px rgba(255,79,216,0.66);
          }
          46%, 100% {
            transform: translate(0, 0);
          }
        }

        .mist-portal-title {
          font-size: var(--portal-title-size);
        }

        .mist-portal-fine-grain {
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 160px 160px, 180px 180px;
        }

        .mist-portal-shell {
          max-width: var(--portal-frame-width);
          padding: var(--portal-pad-top) var(--portal-pad-x) var(--portal-pad-bottom);
          transform-style: preserve-3d;
        }

        .mist-portal-atmosphere-smoke {
          opacity: var(--portal-mist-opacity);
          transition: opacity 520ms ease;
          mix-blend-mode: screen;
          overflow: hidden;
        }

        .mist-portal-smoke-shader {
          opacity: 1;
          filter: saturate(0.16) contrast(1.22) blur(0.14px);
          mix-blend-mode: screen;
          mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 68%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 68%, transparent 100%);
          will-change: transform, opacity;
        }

        .mist-portal-smoke-shader canvas {
          opacity: 1;
        }

        .mist-portal-smoke-layer {
          mix-blend-mode: screen;
          opacity: 0.18;
          filter: blur(18px) saturate(0.48);
          background:
            radial-gradient(ellipse at 24% 42%, rgba(235, 238, 238, 0.26), transparent 34%),
            radial-gradient(ellipse at 58% 48%, rgba(154, 172, 178, 0.18), transparent 43%),
            radial-gradient(ellipse at 79% 38%, rgba(255, 255, 255, 0.13), transparent 28%),
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.12) 43%, transparent 78%);
          mask-image: linear-gradient(to bottom, transparent 0%, black 16%, black 72%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 16%, black 72%, transparent 100%);
        }

        .mist-portal-atmosphere-smoke .mist-portal-smoke-layer {
          mask-image: linear-gradient(to bottom, transparent 0%, black 11%, black 64%, transparent 92%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 11%, black 64%, transparent 92%);
        }

        .mist-portal-smoke-layer-a {
          animation: mistPortalSmokeDrift 24s ease-in-out infinite;
        }

        .mist-portal-smoke-layer-b {
          animation: mistPortalSmokeDriftReverse 31s ease-in-out infinite;
          opacity: 0.1;
        }

        .mist-portal-film-side {
          position: absolute;
          top: clamp(0.42rem, 0.82vh, 0.86rem);
          bottom: clamp(0.42rem, 0.82vh, 0.86rem);
          width: var(--portal-film-side-width);
          pointer-events: none;
          z-index: 40;
          overflow: hidden;
          background-color: transparent;
          background-repeat: repeat-y;
          background-size: 100% auto;
          opacity: 1;
          filter: contrast(1.28) brightness(1.08) saturate(0.72);
          box-shadow: none;
        }

        .mist-portal-film-side::before,
        .mist-portal-film-side::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .mist-portal-film-side::before {
          background:
            radial-gradient(ellipse at center, rgba(255,255,255,0.06), transparent 68%),
            linear-gradient(to bottom, rgba(91, 225, 242, 0.06), transparent 24%, transparent 72%, rgba(197, 50, 70, 0.04));
          mix-blend-mode: screen;
          opacity: 0.22;
        }

        .mist-portal-film-side::after {
          display: none;
        }

        .mist-portal-film-side-left {
          left: max(var(--portal-film-side-breath), calc((100vw - var(--portal-frame-width)) / 2 + var(--portal-film-side-breath)));
          background-image: url('/portal-assets/film-side-left.png');
          background-position: left top;
        }

        .mist-portal-film-side-right {
          right: max(var(--portal-film-side-breath), calc((100vw - var(--portal-frame-width)) / 2 + var(--portal-film-side-breath)));
          background-image: url('/portal-assets/film-side-right.png');
          background-position: right top;
        }

        .mist-portal-shell::before {
          content: "";
          position: absolute;
          inset: clamp(0.35rem, 0.7vw, 0.8rem) 0;
          pointer-events: none;
          border-bottom: 1px solid rgba(255,255,255,0.11);
          box-shadow: inset 0 -1px 0 rgba(100,210,220,0.07);
          opacity: 0.58;
        }

        .mist-portal-header {
          grid-template-columns: minmax(10rem, 0.54fr) minmax(19rem, 0.9fr) minmax(40rem, 1.9fr);
          position: relative;
          z-index: 22;
          transform: translate3d(calc(var(--portal-mouse-x) * -3px), calc(var(--portal-mouse-y) * -1.8px), 18px);
          transform-style: preserve-3d;
          transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .mist-portal-brand-mark {
          height: 26px;
          width: 44px;
        }

        .mist-portal-kicker {
          transform: translateX(clamp(-5rem, -3.2vw, -1.9rem));
        }

        .mist-portal-mist-toggle {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          color: rgba(255,255,255,0.36);
          background: rgba(255,255,255,0.015);
          border-color: rgba(255,255,255,0.16);
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.75);
          transition: color 260ms ease, background 260ms ease, border-color 260ms ease, box-shadow 260ms ease, opacity 260ms ease;
        }

        .mist-portal-mist-toggle.is-on {
          color: rgba(255,255,255,0.96);
          background:
            radial-gradient(circle at 50% 42%, rgba(255,255,255,0.2), transparent 58%),
            rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.78);
          box-shadow:
            0 0 16px rgba(255,255,255,0.18),
            0 0 24px rgba(116,218,230,0.12),
            inset 0 0 12px rgba(255,255,255,0.1);
        }

        .mist-portal-mist-toggle.is-off {
          opacity: 0.58;
        }

        .mist-portal-mist-toggle.is-off:hover {
          opacity: 0.88;
          color: rgba(255,255,255,0.62);
          border-color: rgba(255,255,255,0.34);
        }

        .mist-portal-mist-toggle.is-on:hover {
          border-color: rgba(255,255,255,0.94);
          box-shadow:
            0 0 20px rgba(255,255,255,0.24),
            0 0 30px rgba(116,218,230,0.18),
            inset 0 0 14px rgba(255,255,255,0.16);
        }

        .mist-portal-mist-toggle::after {
          content: "";
          position: absolute;
          inset: 1px;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          background:
            linear-gradient(90deg, transparent, rgba(0,229,255,0.28), rgba(255,43,214,0.24), transparent),
            linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.2) 48%, transparent 100%);
          mix-blend-mode: screen;
        }

        .mist-portal-mist-toggle svg {
          position: relative;
          z-index: 1;
        }

        .mist-portal-main {
          gap: var(--portal-main-gap);
          padding-top: var(--portal-main-top);
        }

        .mist-portal-hero {
          gap: var(--portal-hero-gap);
          grid-template-columns: var(--portal-left-col) var(--portal-stage-col);
          flex: 0 0 var(--portal-hero-height);
          height: var(--portal-hero-height);
          min-height: 0;
          overflow: visible;
          align-items: stretch;
          perspective: 1700px;
          transform-style: preserve-3d;
        }

        .mist-portal-left-copy {
          padding-top: var(--portal-left-top);
          position: relative;
          z-index: 6;
          transform: translateX(var(--portal-left-shift-x)) translate3d(calc(var(--portal-mouse-x) * -9px), calc(var(--portal-mouse-y) * -5px), 24px) rotateY(calc(var(--portal-mouse-x) * -0.8deg));
          transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mist-portal-subhead {
          margin-top: clamp(3.25rem, 5.55vh, 4.6rem);
        }

        .mist-portal-stage-wrap {
          display: flex;
          min-width: 0;
          align-items: stretch;
          justify-content: flex-end;
          margin-left: calc(var(--stage-overlap) * -1);
          width: calc(100% + var(--stage-overlap));
          padding-top: var(--stage-top);
          position: relative;
          z-index: 1;
          overflow: visible;
        }

        .mist-portal-stage {
          position: absolute;
          top: var(--stage-top);
          right: 0;
          width: min(100%, var(--portal-stage-width-cap));
          height: auto;
          aspect-ratio: 33 / 14;
          border: 0;
          background: transparent;
          box-shadow: 0 0 42px rgba(0,0,0,0.55);
          transform: perspective(1700px) translate3d(calc(var(--portal-mouse-x) * 14px), calc(var(--portal-mouse-y) * 9px), 0) rotateX(calc(var(--portal-mouse-y) * -2.1deg)) rotateY(calc(var(--portal-mouse-x) * 2.8deg));
          transform-origin: center;
          transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
          isolation: isolate;
        }

        .mist-portal-stage img,
        .mist-portal-stage video {
          object-position: 50% 50%;
        }

        .mist-portal-stage::before,
        .mist-portal-stage::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          z-index: 2;
          mix-blend-mode: screen;
        }

        .mist-portal-stage::before {
          background:
            linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.22) 45%, rgba(255,43,214,0.2) 51%, transparent 100%),
            repeating-linear-gradient(180deg, transparent 0 9px, rgba(255,255,255,0.08) 10px, transparent 12px);
        }

        .mist-portal-stage::after {
          background:
            radial-gradient(ellipse at 44% 46%, rgba(255,255,255,0.16), transparent 34%),
            linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.12) 48%, transparent 100%);
        }

        .mist-portal-text-system-active .mist-portal-stage video {
          animation: mistStageChromaticGlitch 1.36s ease-in-out infinite;
        }

        .mist-portal-text-system-active .mist-portal-stage::before {
          animation: mistStageScanSlice 1.36s steps(2, end) infinite;
        }

        .mist-portal-text-system-active .mist-portal-stage::after {
          animation: mistStageScanSlice 1.72s steps(2, end) 0.16s infinite reverse;
        }

        .mist-portal-card {
          height: var(--portal-card-height);
          border: 0;
          background-color: #020202;
          clip-path: inset(0 round 1px);
          contain: paint;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .mist-portal-cards {
          position: relative;
          z-index: 16;
          transform: translate3d(calc(var(--portal-mouse-x) * 5px), calc(var(--portal-mouse-y) * 3.5px), 0);
          transform-style: preserve-3d;
          transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .mist-portal-card:hover {
          transform: translateZ(64px) scale(1.054) rotateX(0.75deg);
          z-index: 20;
        }

        .mist-card-media {
          inset: clamp(1.08rem, 13.2%, 1.85rem) clamp(0.38rem, 0.62vw, 0.82rem);
          clip-path: inset(0 round 1px);
          transform: translateZ(0);
          backface-visibility: hidden;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.9);
          background: #050505;
        }

        .mist-card-bg {
          transform-origin: center;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }

        .mist-portal-text-system-active .mist-card-bg {
          transform: scale(1.035);
          opacity: 0.84;
          animation: mistCardSurfaceGlitch 1.32s ease-in-out infinite;
        }

        .mist-card-hover-field {
          filter: drop-shadow(0 0 16px rgba(255,255,255,0.08));
        }

        .mist-card-corner {
          position: absolute;
          width: clamp(0.72rem, 0.82vw, 0.95rem);
          height: clamp(0.72rem, 0.82vw, 0.95rem);
          opacity: 0;
          transform: scale(0.72);
          transition: transform 760ms cubic-bezier(0.16, 1, 0.3, 1), opacity 520ms ease;
        }

        .mist-card-corner::before,
        .mist-card-corner::after {
          content: "";
          position: absolute;
          background: rgba(255,255,255,0.34);
          display: block;
        }

        .mist-card-corner::before {
          width: 100%;
          height: 1px;
        }

        .mist-card-corner::after {
          width: 1px;
          height: 100%;
        }

        .mist-card-corner-tl {
          left: 4%;
          top: 9%;
          transform-origin: left top;
        }

        .mist-card-corner-tr {
          right: 4%;
          top: 9%;
          transform-origin: right top;
        }

        .mist-card-corner-bl {
          left: 4%;
          bottom: 9%;
          transform-origin: left bottom;
        }

        .mist-card-corner-br {
          right: 4%;
          bottom: 9%;
          transform-origin: right bottom;
        }

        .mist-card-corner-tl::before,
        .mist-card-corner-tr::before {
          top: 0;
        }

        .mist-card-corner-bl::before,
        .mist-card-corner-br::before {
          bottom: 0;
        }

        .mist-card-corner-tl::after,
        .mist-card-corner-bl::after {
          left: 0;
        }

        .mist-card-corner-tr::after,
        .mist-card-corner-br::after {
          right: 0;
        }

        .mist-card-corner-tl::before,
        .mist-card-corner-bl::before {
          left: 0;
        }

        .mist-card-corner-tr::before,
        .mist-card-corner-br::before {
          right: 0;
        }

        .mist-card-corner-tl::after,
        .mist-card-corner-tr::after {
          top: 0;
        }

        .mist-card-corner-bl::after,
        .mist-card-corner-br::after {
          bottom: 0;
        }

        .mist-portal-card:hover .mist-card-corner,
        .mist-portal-text-system-active .mist-card-corner {
          opacity: 1;
          transform: scale(1);
        }

        .mist-card-local-ecg {
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.72));
          transform: translate3d(-50%, calc(-50% + 14px), 36px) scaleX(0.72) scaleY(0.92);
        }

        .mist-card-ecg-pulse {
          clip-path: inset(0 50% 0 50%);
          opacity: 0.12;
        }

        .mist-portal-card:hover .mist-card-ecg-pulse,
        .mist-portal-text-system-active .mist-card-ecg-pulse {
          animation: mistCardEcgTraceReveal 1080ms cubic-bezier(0.19, 1, 0.22, 1) 120ms both, mistEcgSignalGlitch 1.28s ease-in-out 1.2s infinite;
        }

        .mist-portal-card:hover .mist-card-local-ecg,
        .mist-portal-text-system-active .mist-card-local-ecg {
          animation: mistCardEcgRise 980ms cubic-bezier(0.19, 1, 0.22, 1) both;
        }

        .mist-card-film-frame {
          transform: scaleX(-1) scaleY(-1);
          transform-origin: center;
          transition-duration: 760ms;
          filter:
            contrast(1.42)
            brightness(1.08)
            saturate(0.55)
            drop-shadow(0 0 1px rgba(255,255,255,0.32))
            drop-shadow(0 0 11px rgba(116,211,226,0.12));
        }

        .mist-portal-card:hover .mist-card-film-frame,
        .mist-portal-text-system-active .mist-card-film-frame {
          transform: scaleX(-1) scaleY(-1) scale(1.012);
          filter:
            contrast(1.5)
            brightness(1.14)
            saturate(0.6)
            drop-shadow(0 0 2px rgba(255,255,255,0.38))
            drop-shadow(0 0 14px rgba(116,211,226,0.16));
        }

        .mist-card-film-base {
          transform: scaleX(-1) scaleY(-1);
          transform-origin: center;
          transition-duration: 760ms;
          background:
            linear-gradient(180deg, rgba(112,121,118,0.2), rgba(19,22,22,0.38) 18%, rgba(14,14,14,0.5) 82%, rgba(120,130,126,0.18)),
            linear-gradient(90deg, rgba(245,250,248,0.1), transparent 10%, transparent 90%, rgba(245,250,248,0.08));
          -webkit-mask-image: url('/portal-assets/film-card-frame.png');
          mask-image: url('/portal-assets/film-card-frame.png');
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          opacity: 0.84;
          filter: drop-shadow(0 0 14px rgba(140,196,204,0.08));
        }

        .mist-card-body {
          max-width: 100%;
        }

        .mist-card-title {
          transform: translate3d(-50%, -50%, 28px);
          will-change: transform, opacity;
        }

        .mist-portal-card:hover .mist-card-title,
        .mist-portal-text-system-active .mist-card-title {
          transform: translate3d(-50%, calc(-50% - clamp(1.48rem, 3.15vh, 2.12rem)), 42px);
          text-shadow:
            -1.1px -0.25px 0.5px rgba(0,229,255,0.38),
            1.1px 0.25px 0.5px rgba(255,43,214,0.36),
            0 2px 13px rgba(0,0,0,0.9);
        }

        .mist-card-description {
          will-change: transform, opacity;
          transform: translate3d(0, clamp(0.55rem, 1.35vh, 0.82rem), 34px);
          text-shadow:
            -0.65px -0.2px 0.3px rgba(0,229,255,0.28),
            0.65px 0.2px 0.3px rgba(255,43,214,0.26),
            0 2px 10px rgba(0,0,0,0.82);
        }

        .mist-portal-card:hover .mist-card-description,
        .mist-portal-text-system-active .mist-card-description {
          animation: mistCardDescriptionDescend 720ms cubic-bezier(0.19, 1, 0.22, 1) 110ms both;
        }

        .mist-portal-card:hover .mist-card-film-base,
        .mist-portal-text-system-active .mist-card-film-base {
          transform: scaleX(-1) scaleY(-1) scale(1.012);
          opacity: 0.86;
        }

        .mist-portal-text-system-active .mist-card-hover-field,
        .mist-portal-text-system-active .mist-card-local-ecg,
        .mist-portal-text-system-active .mist-card-description {
          opacity: 1;
        }

        .mist-portal-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transform: translateX(-120%);
          background: linear-gradient(
            90deg,
            transparent 0%,
            color-mix(in srgb, var(--portal-card-accent) 36%, transparent) 48%,
            transparent 100%
          );
          transition: transform 720ms cubic-bezier(0.16, 1, 0.3, 1), opacity 320ms ease;
        }

        .mist-portal-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          border: 1px solid color-mix(in srgb, var(--portal-card-accent) 48%, transparent);
          transition: opacity 360ms ease;
        }

        .mist-portal-card:hover::before,
        .mist-portal-text-system-active .mist-portal-card::before {
          opacity: 0.42;
          transform: translateX(120%);
        }

        .mist-portal-card:hover::after,
        .mist-portal-text-system-active .mist-portal-card::after {
          opacity: 0.7;
        }

        .mist-portal-footer {
          position: relative;
          z-index: 20;
          margin-top: auto;
          min-height: clamp(4.2rem, 7.6vh, 5.6rem);
          padding-top: clamp(1rem, 1.7vh, 1.35rem);
          transform: translate3d(calc(var(--portal-mouse-x) * 3px), calc(var(--portal-mouse-y) * 2px), 14px);
          transform-style: preserve-3d;
          transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .mist-portal-title:hover,
          .mist-portal-card,
          .mist-portal-card::before,
          .mist-portal-card::after {
            animation: none;
            transition-duration: 1ms;
          }

          .mist-portal-smoke-layer-a,
          .mist-portal-smoke-layer-b {
            animation: none;
          }
        }

        @media (min-width: 1800px) {
          .mist-portal-root {
            --portal-frame-width: 1840px;
            --portal-pad-x: clamp(3.45rem, 4vw, 4.8rem);
            --portal-hero-gap: clamp(0.55rem, 1.25vw, 2rem);
            --portal-left-col: minmax(24rem, 0.29fr);
            --portal-stage-col: minmax(61rem, 0.71fr);
            --portal-title-size: clamp(5.8rem, 5.5vw, 7.3rem);
            --portal-left-top: clamp(4.45rem, 8.25vh, 7.3rem);
            --portal-left-shift-x: clamp(2.4rem, 3.4vw, 4.6rem);
            --portal-stage-width-cap: clamp(72vw, calc(var(--portal-available-hero) * 2.357), 100%);
            --portal-stage-height-cap: calc(var(--portal-stage-width-cap) * 0.4242);
            --portal-hero-height: clamp(29rem, var(--portal-available-hero), 44rem);
            --stage-left-clearance: 0px;
            --stage-overlap: clamp(12rem, 17.2vw, 23rem);
            --portal-card-height: clamp(10.35rem, 19.8vh, 13rem);
            --portal-card-gap: clamp(0.72rem, 0.8vw, 0.95rem);
            --portal-film-side-width: clamp(2.4rem, 3.1vw, 3.9rem);
          }
        }

        @media (min-width: 1280px) and (max-width: 1599px) {
          .mist-portal-root {
            --portal-frame-width: 1500px;
            --portal-pad-x: clamp(2rem, 3.2vw, 3.2rem);
            --portal-hero-gap: clamp(0.35rem, 0.95vw, 1.4rem);
            --portal-left-col: minmax(19.2rem, 0.29fr);
            --portal-stage-col: minmax(47rem, 0.71fr);
            --portal-title-size: clamp(4.2rem, 6.05vw, 6.35rem);
            --portal-stage-width-cap: clamp(72vw, calc(var(--portal-available-hero) * 2.357), 100%);
            --portal-stage-height-cap: calc(var(--portal-stage-width-cap) * 0.4242);
            --portal-hero-height: clamp(26rem, var(--portal-available-hero), 37rem);
            --stage-left-clearance: 0px;
            --stage-overlap: clamp(8rem, 19vw, 18rem);
            --portal-left-top: clamp(3.68rem, 7.45vh, 5.85rem);
            --portal-left-shift-x: clamp(1.35rem, 2.55vw, 2.65rem);
            --portal-card-height: clamp(9.7rem, min(20vh, 10.8vw), 12rem);
            --portal-card-gap: clamp(0.5rem, 0.7vw, 0.72rem);
            --portal-film-side-width: clamp(1.55rem, 2.6vw, 2.8rem);
          }

          .mist-portal-header {
            grid-template-columns: minmax(9.4rem, 0.5fr) minmax(17rem, 0.78fr) minmax(35rem, 1.98fr);
          }

          .mist-portal-kicker {
            transform: translateX(clamp(-3rem, -2.15vw, -1.25rem));
          }
        }

        @media (max-width: 1375px) and (min-width: 1280px) {
          .mist-portal-root {
            --portal-pad-x: clamp(1.65rem, 2.7vw, 2.4rem);
            --portal-title-size: clamp(3.95rem, 5.75vw, 5.55rem);
            --portal-stage-width-cap: clamp(72vw, calc(var(--portal-available-hero) * 2.357), 100%);
            --portal-stage-height-cap: calc(var(--portal-stage-width-cap) * 0.4242);
            --portal-hero-height: clamp(24.5rem, var(--portal-available-hero), 34rem);
            --portal-left-col: minmax(18rem, 0.28fr);
            --portal-stage-col: minmax(39.5rem, 0.72fr);
            --stage-overlap: clamp(6rem, 17vw, 14rem);
            --portal-left-top: clamp(3.18rem, 6.85vh, 4.95rem);
            --portal-left-shift-x: clamp(0.85rem, 1.85vw, 1.65rem);
            --portal-card-height: clamp(9.2rem, min(19vh, 10.2vw), 11rem);
          }

          .mist-portal-header {
            grid-template-columns: minmax(9rem, 0.45fr) minmax(16rem, 0.72fr) minmax(32rem, 2fr);
            gap: clamp(0.65rem, 1vw, 1.15rem);
          }

          .mist-portal-search {
            width: clamp(8.75rem, 11vw, 10rem);
          }
        }

        @media (max-height: 820px) and (min-width: 1280px) {
          .mist-portal-root {
            --portal-pad-top: clamp(0.65rem, 0.95vw, 1.05rem);
            --portal-pad-bottom: clamp(0.85rem, 1.35vw, 1.45rem);
            --portal-main-gap: 0.36rem;
            --portal-main-top: clamp(0.35rem, 0.85vh, 0.6rem);
            --portal-left-top: clamp(3rem, 6.45vh, 4.45rem);
            --portal-title-size: clamp(3.8rem, 5.75vw, 6rem);
            --portal-stage-width-cap: clamp(70vw, calc(var(--portal-available-hero) * 2.357), 100%);
            --portal-stage-height-cap: calc(var(--portal-stage-width-cap) * 0.4242);
            --portal-hero-height: clamp(23rem, var(--portal-available-hero), 30rem);
            --stage-top: 0;
            --stage-bottom-inset: clamp(0.26rem, 0.68vh, 0.52rem);
            --portal-card-height: clamp(8.5rem, min(18vh, 9.7vw), 10.6rem);
          }

          .mist-portal-header {
            height: 34px;
          }

          .mist-portal-subhead {
            margin-top: clamp(2.35rem, 4.2vh, 3.15rem);
          }

          .mist-portal-card .mist-card-body {
            padding-top: 1rem;
            padding-bottom: 1.65rem;
          }

          .mist-card-title {
            font-size: clamp(0.76rem, 0.82vw, 0.94rem);
            letter-spacing: 0.15em;
          }

          .mist-card-description p {
            font-size: clamp(0.52rem, 0.58vw, 0.66rem);
            line-height: 1.42;
            letter-spacing: 0.08em;
          }

          .mist-portal-footer {
            min-height: clamp(3.5rem, 6.6vh, 4.45rem);
            padding-top: 0.75rem;
          }
        }

        @media (max-height: 740px) and (min-width: 1280px) {
          .mist-portal-root {
            --portal-main-top: 0.75rem;
            --portal-main-gap: 0.32rem;
            --portal-left-top: 2.78rem;
            --portal-title-size: clamp(3.45rem, 5.25vw, 5.25rem);
            --portal-hero-height: clamp(22rem, var(--portal-available-hero), 27.8rem);
            --portal-card-height: clamp(8.75rem, min(19.6vh, 9.8vw), 10rem);
          }

          .mist-portal-quote-block {
            margin-top: 1rem;
            gap: 0.55rem;
          }

          .mist-portal-divider {
            margin-top: 0.85rem;
          }

          .mist-portal-subhead {
            margin-top: 1.85rem;
          }

          .mist-portal-footer-quote-mark {
            display: none;
          }
        }

        @media (min-width: 1120px) and (max-width: 1279px) {
          .mist-portal-root {
            --portal-frame-width: 1279px;
            --portal-pad-x: clamp(1.4rem, 2.7vw, 2rem);
            --portal-pad-top: clamp(0.5rem, 0.85vw, 0.75rem);
            --portal-pad-bottom: clamp(0.8rem, 1.3vw, 1.2rem);
            --portal-main-top: clamp(0.5rem, 1.1vh, 0.8rem);
            --portal-main-gap: 0.38rem;
            --portal-hero-gap: clamp(0.35rem, 0.9vw, 1.1rem);
            --portal-left-col: minmax(17rem, 0.3fr);
            --portal-stage-col: minmax(33rem, 0.7fr);
            --portal-title-size: clamp(3.4rem, 5.1vw, 5.05rem);
            --portal-stage-width-cap: clamp(70vw, calc(var(--portal-available-hero) * 2.357), 100%);
            --portal-stage-height-cap: calc(var(--portal-stage-width-cap) * 0.4242);
            --portal-hero-height: clamp(22.5rem, var(--portal-available-hero), 31rem);
            --portal-left-top: clamp(2.85rem, 6.15vh, 4.3rem);
            --portal-left-shift-x: clamp(0.7rem, 1.55vw, 1.35rem);
            --stage-top: 0;
            --stage-left-clearance: 0px;
            --stage-overlap: clamp(4rem, 14vw, 10rem);
            --portal-card-height: clamp(8.25rem, min(18.5vh, 10.5vw), 9.5rem);
            --portal-card-gap: clamp(0.45rem, 0.7vw, 0.6rem);
          }

          .mist-portal-header {
            grid-template-columns: minmax(9rem, 0.48fr) minmax(16rem, 0.72fr) minmax(30rem, 2fr);
            height: 38px;
            gap: clamp(0.65rem, 1vw, 1rem);
          }

          .mist-portal-kicker {
            transform: translateX(clamp(-2.15rem, -1.65vw, -0.9rem));
          }

          .mist-portal-search {
            width: clamp(8rem, 10vw, 9.2rem);
          }

          .mist-portal-cards {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }

          .mist-portal-card .mist-card-body {
            padding: 1rem 1rem 1.55rem;
          }

          .mist-card-title {
            font-size: clamp(0.72rem, 0.78vw, 0.88rem);
            letter-spacing: 0.14em;
          }

          .mist-card-description p {
            font-size: clamp(0.49rem, 0.55vw, 0.62rem);
            line-height: 1.34;
            letter-spacing: 0.07em;
          }
        }

        @media (max-width: 1119px) {
          .mist-portal-shell {
            height: 100dvh;
            max-height: none;
            min-height: 100dvh;
            overflow-y: auto;
            padding-inline: clamp(1.2rem, 4vw, 2.5rem);
          }

          .mist-portal-film-side {
            display: none;
          }

          .mist-portal-main {
            flex: none;
            min-height: auto;
            overflow: visible;
          }

          .mist-portal-hero {
            flex: none;
            height: auto;
            min-height: auto;
            grid-template-columns: 1fr;
            row-gap: clamp(1.2rem, 3vw, 2rem);
          }

          .mist-portal-header {
            grid-template-columns: 1fr;
            height: auto;
            row-gap: 1rem;
          }

          .mist-portal-kicker {
            transform: none;
          }

          .mist-portal-stage {
            --stage-left-clearance: 0px;
            position: relative;
            inset: auto;
            height: auto;
            width: 100%;
            aspect-ratio: 33 / 14;
          }

          .mist-portal-card {
            height: clamp(10.5rem, 24vw, 13.5rem);
          }

          .mist-portal-root,
          .mist-portal-root button,
          .mist-portal-root a,
          .mist-portal-root [role="button"] {
            cursor: auto;
          }

          .mist-portal-custom-cursor {
            display: none;
          }
        }

        .mist-portal-root:has(.mist-portal-card:hover) .mist-portal-custom-cursor > div:first-child {
          height: 1.9rem;
          width: 1.9rem;
          opacity: 0.46;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 mist-portal-fine-grain opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black via-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="mist-portal-film-side mist-portal-film-side-left" />
      <div className="mist-portal-film-side mist-portal-film-side-right" />

      <div className="mist-portal-shell relative z-10 mx-auto flex h-dvh max-h-dvh w-full max-w-[1900px] flex-col overflow-hidden">
        <div className="mist-portal-atmosphere-smoke pointer-events-none absolute inset-0 z-[5]">
          <div
            className="mist-portal-smoke-shader absolute inset-[-10%]"
            style={{
              transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0)`,
            }}
          >
            <ShaderBackground theme={isRetro ? 'retro' : 'dark'} />
          </div>
        </div>

        <header className="mist-portal-header grid h-[34px] shrink-0 items-center gap-[clamp(0.8rem,1.3vw,2.2rem)]">
          <button
            type="button"
            onClick={() => setPage(2)}
            className="group flex w-fit items-center gap-2.5 text-left"
            aria-label="School of Mist"
          >
            <span className="flex h-[25px] w-[42px] items-center justify-center border border-white/62 transition-colors duration-300 group-hover:border-white">
              <Eye size={19} strokeWidth={1.15} className="text-white/80 transition-colors duration-300 group-hover:text-white" />
            </span>
            <span className="flex flex-col">
              <span className="font-serif text-[12px] leading-none tracking-[0.1em] text-white/85 transition-colors duration-300 group-hover:text-white">
                迷雾学派
              </span>
              <span className="mt-1 font-serif text-[9px] leading-none tracking-[0.08em] text-white/58 transition-colors duration-300 group-hover:text-white/75">
                School of Mist
              </span>
            </span>
          </button>

          <div className="mist-portal-kicker self-center">
            <div className="font-serif text-[10.5px] leading-none tracking-[0.16em] text-white/78">
              精神分析 × 电影理论 × 意识形态批判
            </div>
            <div className="mt-1 text-[6.5px] leading-none tracking-[0.105em] text-white/46">
              Psychoanalysis × Cinema Theory × Ideology Critique
            </div>
          </div>

          <div className="mist-portal-header-actions flex items-center justify-end gap-[clamp(0.85rem,1.25vw,1.45rem)]">
            <nav className="grid w-[clamp(18.5rem,24vw,28rem)] grid-cols-5 items-start">
              {navItems.map((item) => (
                <PortalNavItem key={item.titleEn} {...item} />
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setMistEnabled((value) => !value)}
              className={`mist-portal-mist-toggle ${mistEnabled ? 'is-on' : 'is-off'} flex h-[27px] w-[32px] shrink-0 items-center justify-center border focus:outline-none focus-visible:border-white/60`}
              title={mistEnabled ? '关闭迷雾' : '开启迷雾'}
              aria-label={mistEnabled ? '关闭迷雾' : '开启迷雾'}
              aria-pressed={mistEnabled}
            >
              <Cloud size={13} strokeWidth={1.45} />
            </button>

            <button
              type="button"
              onClick={openManual}
              className="mist-portal-search flex h-[27px] w-[clamp(132px,11vw,225px)] shrink-0 items-center justify-between border border-white/18 px-3.5 text-left transition-colors duration-300 hover:border-white/45 focus:outline-none focus-visible:border-white/60"
            >
              <span className="whitespace-nowrap font-serif text-[8px] tracking-[0.18em] text-white/45">搜索...</span>
              <Search size={12} strokeWidth={1.4} className="text-white/55" />
            </button>
          </div>
        </header>

        <main className="mist-portal-main flex min-h-0 flex-1 flex-col">
          <section className="mist-portal-hero grid min-h-0 grid-cols-1 xl:grid-cols-[minmax(22rem,0.34fr)_minmax(45rem,0.66fr)]">
            <div className="mist-portal-left-copy flex min-h-0 flex-col justify-start">
              <div
                className={`mist-portal-title-wrap w-fit select-none font-serif font-bold leading-[0.84] tracking-[0.015em] ${isTitleGlitching ? 'is-glitching' : ''}`}
                onMouseEnter={startTitleGlitch}
                onMouseLeave={stopTitleGlitch}
              >
                <h1
                  className={`mist-portal-title text-white ${isTitleGlitching ? 'mist-portal-title-glitch-active' : ''}`}
                  style={{ textShadow: titleChromaticShadow }}
                >
                  迷雾学派
                </h1>
                <span className="mist-portal-title-scanline" aria-hidden="true" />
              </div>

              <div className="mist-portal-subhead space-y-1.5">
                <p className="font-serif text-[clamp(0.72rem,0.84vw,0.94rem)] leading-none tracking-[0.1em] text-[#a64038]">
                  在银幕的迷雾中，重新阅读无意识。
                </p>
                <p className="font-serif text-[clamp(0.58rem,0.68vw,0.76rem)] leading-none tracking-[0.055em] text-white/70">
                  Re-reading the unconscious in the fog of the screen.
                </p>
              </div>

              <div className="mist-portal-divider mt-5 h-px w-14 bg-white/60" />

              <div className="mist-portal-quote-block mt-5 flex max-w-[24rem] flex-col gap-3.5 font-serif">
                <blockquote className="space-y-2">
                  <p className="text-[clamp(0.72rem,0.8vw,0.86rem)] leading-[1.68] tracking-[0.07em] text-white/74">
                    “意识形态不在于遮蔽现实，<br />
                    而在于我们如何享受自己的遮蔽。”
                  </p>
                  <footer className="text-[clamp(0.66rem,0.74vw,0.78rem)] leading-none tracking-[0.07em] text-white/66">
                    —— 齐泽克
                  </footer>
                </blockquote>

                <blockquote className="space-y-2">
                  <p className="text-[clamp(0.62rem,0.7vw,0.74rem)] leading-[1.58] tracking-[0.055em] text-white/58">
                    Ideology does not simply lie to us,<br />
                    it is through our enjoyment that we consent to it.
                  </p>
                  <footer className="text-[clamp(0.58rem,0.66vw,0.68rem)] leading-none tracking-[0.055em] text-white/48">
                    —— Slavoj Žižek
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="mist-portal-stage-wrap overflow-hidden">
              <div className="mist-portal-stage overflow-hidden">
                <video
                  src="/portal-assets/portal-hero-loop.mp4"
                  poster="/portal-assets/portal-hero-86.png"
                  className="h-full w-full object-contain opacity-[0.94]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Lacanian topology stage"
                />
              </div>
            </div>
          </section>

          <section className="mist-portal-cards grid shrink-0 grid-cols-1 gap-[var(--portal-card-gap)] md:grid-cols-2 xl:grid-cols-5">
            {portalCards.map((card, index) => (
              <PortalCard
                key={card.number}
                card={card}
                index={index}
                isRetro={isRetro}
                onHoverStart={startCardHover}
                onHoverEnd={stopCardHover}
              />
            ))}
          </section>

          <footer className="mist-portal-footer grid shrink-0 grid-cols-[minmax(18rem,1fr)_auto] items-end border-t border-white/10 pt-4">
            <div className="flex items-start gap-5">
              <div className="mist-portal-footer-quote-mark font-serif text-[2.3rem] leading-none text-white/24">“</div>
              <div className="font-serif">
                <div className="mist-portal-footer-text text-[12px] leading-none tracking-[0.08em] text-white/68">
                  我们不是在解读电影，而是在电影的裂缝中，阅读我们自己。
                </div>
                <div className="mist-portal-footer-text mt-2 text-[10px] leading-none tracking-[0.06em] text-white/42">
                  We do not interpret films; we read ourselves in the fissures of the screen.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pb-1 font-serif text-[11px] tracking-[0.12em] text-white/55">
              {[
                { title: '加入我们', action: () => setPage(2) },
                { title: '联系我们', action: openManual },
                { title: '隐私政策', action: openManual },
                { title: '版权声明', action: openManual },
              ].map((item, index) => (
                <React.Fragment key={item.title}>
                  {index > 0 && <span className="text-white/22">|</span>}
                  <button
                    type="button"
                    onClick={item.action}
                    className="transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
                  >
                    {item.title}
                  </button>
                </React.Fragment>
              ))}
              <span className="pl-2 text-white/42">© 迷雾学派 School of Mist</span>
            </div>
          </footer>
        </main>
      </div>

      <div
        className="mist-portal-custom-cursor fixed pointer-events-none z-[9999] hidden flex-col items-center justify-center transition-opacity duration-200 ease-out lg:flex"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
          opacity: cursorPos.x < 0 ? 0 : 1,
        }}
      >
        <div
          className={`relative flex items-center justify-center transition-all duration-500 backdrop-invert backdrop-hue-rotate-180 ${
            isRetro ? 'bg-[#8B261D]/5' : 'bg-white/5 mix-blend-difference'
          } ${
            isHoveringClickable ? 'h-12 w-12 scale-100' : 'h-3 w-3 rounded-full border border-opacity-40'
          } ${!isHoveringClickable && (isRetro ? 'border-[#8B261D]/50' : 'border-white')}`}
        >
          <div className={`h-1 w-1 transition-all duration-300 ${isRetro ? 'bg-[#8B261D]' : 'bg-white'} ${isHoveringClickable ? 'scale-50 opacity-0' : 'scale-100 rounded-full opacity-100'}`} />
          <div className={`absolute left-0 top-0 h-2.5 w-2.5 border-l-[1.5px] border-t-[1.5px] transition-all duration-300 ${isHoveringClickable ? '-translate-x-1 -translate-y-1 opacity-100' : 'translate-x-1 translate-y-1 opacity-0'} ${isRetro ? 'border-[#8B261D]' : 'border-white'}`} />
          <div className={`absolute right-0 top-0 h-2.5 w-2.5 border-r-[1.5px] border-t-[1.5px] transition-all duration-300 ${isHoveringClickable ? 'translate-x-1 -translate-y-1 opacity-100' : '-translate-x-1 translate-y-1 opacity-0'} ${isRetro ? 'border-[#8B261D]' : 'border-white'}`} />
          <div className={`absolute bottom-0 left-0 h-2.5 w-2.5 border-b-[1.5px] border-l-[1.5px] transition-all duration-300 ${isHoveringClickable ? '-translate-x-1 translate-y-1 opacity-100' : 'translate-x-1 -translate-y-1 opacity-0'} ${isRetro ? 'border-[#8B261D]' : 'border-white'}`} />
          <div className={`absolute bottom-0 right-0 h-2.5 w-2.5 border-b-[1.5px] border-r-[1.5px] transition-all duration-300 ${isHoveringClickable ? 'translate-x-1 translate-y-1 opacity-100' : '-translate-x-1 -translate-y-1 opacity-0'} ${isRetro ? 'border-[#8B261D]' : 'border-white'}`} />
          <div className={`absolute h-3 w-px transition-opacity duration-300 ${isHoveringClickable ? 'opacity-60' : 'opacity-0'} ${isRetro ? 'bg-[#8B261D]' : 'bg-white'}`} />
          <div className={`absolute h-px w-3 transition-opacity duration-300 ${isHoveringClickable ? 'opacity-60' : 'opacity-0'} ${isRetro ? 'bg-[#8B261D]' : 'bg-white'}`} />
        </div>
        <div
          className={`absolute top-full mt-3 whitespace-nowrap font-mono mix-blend-difference transition-all duration-300 ${
            isHoveringClickable ? 'translate-y-1 text-[9px] tracking-widest opacity-0' : 'text-[8px] opacity-40'
          } ${isRetro ? 'text-[#8B261D]' : 'text-white'}`}
        >
          [X:{Math.max(0, cursorPos.x).toFixed(0)} Y:{Math.max(0, cursorPos.y).toFixed(0)}]
        </div>
      </div>
    </div>
  );
};
