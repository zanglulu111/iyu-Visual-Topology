import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { BorromeanRings } from './BorromeanRings';
import { User as UserIcon } from 'lucide-react';

type ViewMode = 'ENGINE' | 'DIVERGENCE' | 'BIBLE' | 'METONYMY' | 'TOPOLOGY' | 'RSI' | 'ARCHIVE' | 'VIDEO';

interface UniversePortalProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1) => void;
  setViewMode: (mode: ViewMode) => void;
  currentUser: User;
  openAuth: () => void;
  openProfile: () => void;
}

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
];

const QUOTES = [
  { cn: '被压抑的梦比现实更真实', en: 'The repressed dream is more real than reality' },
  { cn: '欲望是大他者的欲望', en: 'Desire is the desire of the Other' },
  { cn: '无意识像语言一样结构', en: 'The unconscious is structured like a language' },
  { cn: '爱，是给予你没有的东西', en: 'Love is giving what you don\'t have' },
  { cn: '在你不存在的地方，思考', en: 'I think where I am not' },
  { cn: '真理有虚构的结构', en: 'Truth has the structure of fiction' },
];

export const UniversePortal: React.FC<UniversePortalProps> = ({
  lang, setLang, setPage, setViewMode, currentUser, openAuth, openProfile
}) => {
  const [hoveredRealm, setHoveredRealm] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [exitTarget, setExitTarget] = useState<string | null>(null);
  const [quoteIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleRealmClick = (realm: RealmDef) => {
    if (isExiting) return;
    setIsExiting(true);
    setExitTarget(realm.id);
    setTimeout(() => {
      if (realm.target.viewMode) setViewMode(realm.target.viewMode);
      setPage(realm.target.page);
    }, 800);
  };

  const quote = QUOTES[quoteIndex];

  return (
    <div className={`fixed inset-0 overflow-hidden transition-opacity duration-700 ease-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
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
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.9; }
        }
        @keyframes vignettePulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        .portal-realm-card {
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .portal-realm-card:hover {
          transform: translateY(-8px);
        }
      `}</style>

      {/* Layer 0: Void background */}
      <div className="absolute inset-0 bg-[#020205]" />

      {/* Layer 0.5: Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 30%, rgba(0,0,0,0.7) 100%)',
          animation: 'vignettePulse 12s ease-in-out infinite',
        }}
      />

      {/* Layer 1: Fog layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(212,175,55,0.04), transparent 70%)',
          animation: 'mistDrift1 30s ease-in-out infinite',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 70% 60%, rgba(34,211,238,0.03), transparent 60%)',
          animation: 'mistDrift2 40s ease-in-out infinite',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(251,113,133,0.05), transparent 50%)',
          animation: 'portalPulse 8s ease-in-out infinite',
          filter: 'blur(60px)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Layer 2: BorromeanRings gateway */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]"
        style={{
          animation: mounted ? 'fadeIn 2s ease-out both' : 'none',
          animationDelay: '0.3s',
          opacity: 0,
        }}
      >
        <div
          className="w-[50vh] h-[50vh] max-w-[500px] max-h-[500px] -translate-y-[5vh]"
          style={{ animation: 'portalPulse 8s ease-in-out infinite' }}
        >
          <BorromeanRings centered={true} opacity={0.2} lang={lang === 'CN' ? 'CN' : 'EN'} />
        </div>
      </div>

      {/* Layer 3: Title treatment */}
      <div
        className="absolute top-[10vh] md:top-[12vh] left-0 right-0 text-center z-[10] px-4"
        style={{
          animation: mounted ? 'fadeInUp 2s ease-out both' : 'none',
          opacity: 0,
        }}
      >
        <h1
          className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-white/70 leading-none"
          style={{
            fontFamily: "'Noto Serif SC', 'Playfair Display', serif",
            textShadow: '0 0 120px rgba(212,175,55,0.06), 0 2px 40px rgba(0,0,0,0.5)',
          }}
        >
          {lang === 'CN' ? '迷雾学派' : 'MIST SCHOOL'}
        </h1>

        <p
          className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-white/15 font-mono mt-3 sm:mt-4"
          style={{
            animation: mounted ? 'fadeIn 2s ease-out both' : 'none',
            animationDelay: '0.6s',
            opacity: 0,
          }}
        >
          {lang === 'CN' ? '爱欲视觉拓扑学 // EROTIC VISUAL TOPOLOGY' : 'EROTIC VISUAL TOPOLOGY // MIST OBSERVATORY'}
        </p>

        <p
          className="text-xs sm:text-sm md:text-base font-serif italic text-white/[0.12] mt-5 sm:mt-6 max-w-md mx-auto"
          style={{
            fontFamily: lang === 'CN' ? "'Noto Serif SC', serif" : "'Playfair Display', 'EB Garamond', serif",
            animation: mounted ? 'fadeInUp 2.5s ease-out both' : 'none',
            animationDelay: '1s',
            opacity: 0,
          }}
        >
          &ldquo;{lang === 'CN' ? quote.cn : quote.en}&rdquo;
        </p>
      </div>

      {/* Layer 4: Three realm portals */}
      <div className="absolute bottom-[6vh] sm:bottom-[8vh] md:bottom-[10vh] left-0 right-0 flex flex-col sm:flex-row justify-center items-center sm:items-end gap-4 sm:gap-6 md:gap-10 lg:gap-12 px-4 sm:px-6 z-[10]">
        {REALMS.map((realm, i) => (
          <button
            key={realm.id}
            onClick={() => handleRealmClick(realm)}
            onMouseEnter={() => setHoveredRealm(realm.id)}
            onMouseLeave={() => setHoveredRealm(null)}
            className={`portal-realm-card relative w-full sm:w-[220px] md:w-[260px] lg:w-[280px] h-[140px] sm:h-[160px] md:h-[190px] lg:h-[210px] rounded-sm border backdrop-blur-sm
              flex flex-col items-center justify-center gap-2 sm:gap-3 text-center cursor-pointer group
              ${hoveredRealm === realm.id
                ? 'border-white/20 bg-white/[0.03]'
                : 'border-white/[0.06] bg-white/[0.015]'
              }
              ${isExiting && exitTarget === realm.id ? '!scale-105 !brightness-150 !border-white/30' : ''}
              ${isExiting && exitTarget !== realm.id ? '!opacity-0 !translate-y-8 pointer-events-none' : ''}
            `}
            style={{
              animation: mounted ? `fadeInUp 0.8s ease-out both` : 'none',
              animationDelay: `${1.2 + i * 0.15}s`,
              opacity: 0,
              boxShadow: hoveredRealm === realm.id ? `0 0 80px -15px ${realm.glowRgba}, inset 0 0 60px -30px ${realm.glowRgba}` : 'none',
              transition: isExiting ? 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : undefined,
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-3 right-3 sm:left-4 sm:right-4 h-px transition-all duration-700"
              style={{
                backgroundColor: realm.color,
                opacity: hoveredRealm === realm.id ? 0.8 : 0.2,
                animation: hoveredRealm === realm.id ? 'glowLine 3s ease-in-out infinite' : 'none',
                boxShadow: hoveredRealm === realm.id ? `0 0 12px ${realm.glowRgba}` : 'none',
              }}
            />

            {/* Icon */}
            <span
              className="text-xl sm:text-2xl transition-all duration-700"
              style={{
                color: hoveredRealm === realm.id ? realm.color : 'rgba(255,255,255,0.25)',
                animation: 'breathe 4s ease-in-out infinite',
                transform: hoveredRealm === realm.id ? 'scale(1.15)' : 'scale(1)',
                filter: hoveredRealm === realm.id ? `drop-shadow(0 0 8px ${realm.glowRgba})` : 'none',
              }}
            >
              {realm.iconSymbol}
            </span>

            {/* Title */}
            <h3
              className="text-base sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] font-bold transition-colors duration-700"
              style={{
                fontFamily: lang === 'CN' ? "'Noto Serif SC', serif" : "'Playfair Display', serif",
                color: hoveredRealm === realm.id ? realm.color : 'rgba(255,255,255,0.55)',
                textShadow: hoveredRealm === realm.id ? `0 0 20px ${realm.glowRgba}` : 'none',
              }}
            >
              {lang === 'CN' ? realm.titleCn : realm.titleEn}
            </h3>

            {/* Subtitle */}
            <p className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/20 transition-colors duration-700">
              {lang === 'CN' ? realm.subtitleCn : realm.subtitleEn}
            </p>

            {/* Description (hover reveal) */}
            <p className={`text-[10px] sm:text-[11px] font-light text-white/25 max-w-[220px] leading-relaxed transition-all duration-700 px-3 ${
              hoveredRealm === realm.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {lang === 'CN' ? realm.descCn : realm.descEn}
            </p>

            {/* Enter indicator (hover reveal) */}
            <div className={`absolute bottom-2 sm:bottom-3 left-3 right-3 sm:left-4 sm:right-4 flex items-center justify-center gap-2 transition-all duration-700 ${
              hoveredRealm === realm.id ? 'opacity-50' : 'opacity-0'
            }`}>
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[7px] sm:text-[8px] font-mono tracking-[0.3em] text-white/40 uppercase">
                {lang === 'CN' ? '进入' : 'ENTER'}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Bottom accent line (mirror of top, subtle) */}
            <div
              className="absolute bottom-0 left-3 right-3 sm:left-4 sm:right-4 h-px transition-all duration-700"
              style={{
                backgroundColor: realm.color,
                opacity: hoveredRealm === realm.id ? 0.3 : 0.05,
              }}
            />
          </button>
        ))}
      </div>

      {/* Layer 5: Top-right minimal UI */}
      <div
        className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-3 sm:gap-4 z-[20]"
        style={{
          animation: mounted ? 'fadeIn 1.5s ease-out both' : 'none',
          animationDelay: '0.5s',
          opacity: 0,
        }}
      >
        <button
          onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
          className="text-[10px] font-mono tracking-[0.2em] text-white/25 hover:text-white/70 transition-colors duration-300"
          title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
        >
          {lang === 'CN' ? 'EN' : '中'}
        </button>
        <div className="w-px h-3 bg-white/10" />
        <button
          onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
          className="text-[10px] font-mono tracking-[0.15em] text-white/25 hover:text-white/70 transition-colors duration-300 flex items-center gap-1.5"
        >
          <UserIcon size={11} />
          <span className="hidden sm:inline">
            {currentUser.id !== 'guest_user' ? currentUser.username : (lang === 'CN' ? '访客' : 'GUEST')}
          </span>
        </button>
      </div>

      {/* Layer 6: Bottom system designation */}
      <div
        className="absolute bottom-2 left-0 right-0 text-center z-[10] pointer-events-none"
        style={{
          animation: mounted ? 'fadeIn 2s ease-out both' : 'none',
          animationDelay: '1.5s',
          opacity: 0,
        }}
      >
        <p className="text-[7px] sm:text-[8px] font-mono tracking-[0.4em] sm:tracking-[0.5em] text-white/[0.07] uppercase">
          MIST OBSERVATORY // BORROMEAN GATEWAY v2.24 // {new Date().toISOString().substring(0, 10).replace(/-/g, '.')}
        </p>
      </div>
    </div>
  );
};
