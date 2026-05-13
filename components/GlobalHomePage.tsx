import React, { useState, useEffect } from 'react';
import { User, ViewMode } from '../types';
import {
  Globe, User as UserIcon, Moon, Sun, Aperture, BookOpen,
  Archive, Film, Cpu, ChevronRight, ArrowLeft
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { BorromeanRings } from './BorromeanRings';

// ─── 类型声明 ───────────────────────────────────────────────

interface GlobalHomePageProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1 | 2) => void;
  setViewMode: (mode: ViewMode) => void;
  setInitialProtocol?: (protocol: string) => void;
  currentUser: User;
  openAuth: () => void;
  openProfile: () => void;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
  onReturnToPortal?: () => void;
}

// ─── 动画文字组件 ───────────────────────────────────────────
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
      className="transition-all duration-[1500ms] w-full ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col"
      style={{ transform: lang === 'EN' ? 'translateY(-50%)' : 'translateY(0)' }}
    >
      <div className={`flex items-center shrink-0 w-full ${hClass}`}>{cn}</div>
      <div className={`flex items-center shrink-0 w-full ${hClass}`}>{en}</div>
    </div>
  </div>
);

// ─── 全局主页入口卡片定义 ───────────────────────────────────
interface NavCard {
  icon: React.ElementType;
  titleCn: string;
  titleEn: string;
  descCn: string;
  descEn: string;
  color: string;
  action: () => void;
}

// ─── 主组件 ────────────────────────────────────────────────
export const GlobalHomePage: React.FC<GlobalHomePageProps> = ({
  lang, setLang, setPage, setViewMode, setInitialProtocol,
  currentUser, openAuth, openProfile, showRings, setShowRings, onReturnToPortal
}) => {
  const { theme, toggleTheme } = useTheme();
  const isRetro = theme === 'retro';
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // 圆环动画：始终挂载元素，用 key 强制重置动画
  const [ringAnimClass, setRingAnimClass] = useState('animate-ring-entrance');
  const [ringAnimKey, setRingAnimKey] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // 圆环开关：showRings 变化时切换动画 class 并递增 key
  useEffect(() => {
    if (!mounted) return;
    if (showRings) {
      setRingAnimClass('animate-ring-entrance');
    } else {
      setRingAnimClass('animate-ring-exit');
    }
    setRingAnimKey(prev => prev + 1);
  }, [showRings, mounted]);

  // 导航卡片定义
  const navCards: NavCard[] = [
    {
      icon: Cpu,
      titleCn: '核心驱动器',
      titleEn: 'CORE DRIVERS',
      descCn: '启动欲望再生产，进入视觉生产的符号链。构建你自己的迷雾。',
      descEn: 'Activate the core driver. Enter the symbolic chain of visual production.',
      color: '#FFD700',
      action: () => setPage(0),
    },
    {
      icon: Archive,
      titleCn: '主体档案',
      titleEn: 'SUBJECT ARCHIVE',
      descCn: '在被压抑之物回归的迷雾中，阅读与漫游。每一个档案都是某人被遗忘的梦。',
      descEn: 'Wander through the fog where the repressed returns. Every file is a forgotten dream.',
      color: '#FFD700',
      action: () => { setViewMode('ARCHIVE'); setPage(1); },
    },
    {
      icon: BookOpen,
      titleCn: '迷雾辞典',
      titleEn: 'MIST DICTIONARY',
      descCn: '在拉康的拓扑空间中，直面实在界的裂缝。解析欲望的结构。',
      descEn: 'In Lacanian topology, confront the crack in the Real. Parse the structure of desire.',
      color: '#fb7185',
      action: () => {
        if (setInitialProtocol) setInitialProtocol('DICTIONARY');
        setPage(0);
      },
    },
    {
      icon: Film,
      titleCn: '精神分析',
      titleEn: 'PSYCHOANALYSIS',
      descCn: '观察罗夏墨迹的动态演变，直面潜意识的投影与幻象。',
      descEn: 'Observe the dynamic evolution of Rorschach inkblots, confront the projection of the unconscious.',
      color: '#a855f7',
      action: () => { setViewMode('RORSCHACH'); setPage(1); },
    },
  ];

  return (
    <div
      className={`fixed inset-0 flex flex-col overflow-hidden transition-colors duration-1000 ${
        isRetro ? 'bg-[var(--bg-main)]' : 'bg-[#050508]'
      }`}
      style={isRetro ? { backgroundImage: 'var(--pattern-aged)', backgroundBlendMode: 'multiply' } : {}}
    >
      {/* ── 顶部导航栏 ── */}
      <header
        className={`shrink-0 h-14 flex items-center justify-between px-6 md:px-12 z-50 backdrop-blur-md transition-all duration-500 bg-[var(--bg-header)] border-b ${
          isRetro ? 'border-[var(--border-main)]' : 'border-white/[0.06]'
        } relative`}
      >
        {/* Theme Divider Line - Global Consistency Accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500 z-10"
          style={{
            backgroundColor: isRetro ? '#8B261D' : 'rgba(255, 215, 0, 0.15)',
            opacity: isRetro ? 0.2 : 0.15,
            boxShadow: isRetro ? 'none' : '0 0 10px rgba(212,175,55,0.1)'
          }}
        />

        {/* 左侧：返回入口 */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => onReturnToPortal ? onReturnToPortal() : setPage(-1)}
            className={`text-[9px] font-mono tracking-[0.15em] transition-all duration-300 hover:scale-105 active:scale-95 px-2 py-1 rounded-sm border flex items-center gap-1.5 ${
              isRetro
                ? 'text-[var(--text-accent)] border-[var(--border-main)] hover:border-[var(--border-accent)]'
                : 'text-zinc-500 hover:text-white/80 border-zinc-800 hover:border-zinc-600'
            }`}
            title={lang === 'CN' ? '返回迷雾学派入口' : 'Return to Mist Portal'}
          >
            <ArrowLeft size={10} />
            <AnimatedText
              lang={lang}
              hClass="h-4"
              className="text-[9px] font-mono tracking-[0.15em]"
              cn="← 入口"
              en="← PORTAL"
            />
          </button>

          <span
            className={`font-serif font-bold text-xs uppercase tracking-widest transition-colors duration-500 ${
              isRetro ? 'text-[#8B261D]' : 'text-white'
            }`}
          >
            {lang === 'CN' ? '迷雾学派：全局主页' : 'MIST: GLOBAL HOME'}
          </span>
        </div>

        {/* 右侧：控制区 - Synchronized with AppHeader */}
        <div className="flex items-center flex-row-reverse gap-4">
          <div className={`flex items-center gap-1 px-1 py-1 rounded-full transition-all duration-500 border border-transparent hover:border-white/5 backdrop-blur-sm hover:backdrop-blur-md
            ${isRetro ? 'hover:bg-[#FDFCF8]/90 hover:border-[#8B261D]/15' : 'hover:bg-black/30'}`}>

            {/* 1. Ring Toggle */}
            <button
              onClick={() => setShowRings(!showRings)}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 focus:outline-none ${
                showRings
                  ? 'text-[var(--mist-active-accent)]'
                  : (isRetro ? 'text-zinc-600 hover:text-black' : 'text-zinc-500 hover:text-white')
              }`}
              title={lang === 'CN' ? '背景圆环开关' : 'Background Rings Toggle'}
            >
              <Aperture
                size={13}
                className={`shrink-0 transition-all duration-700 ${showRings ? 'rotate-[360deg] text-[var(--mist-active-accent)]' : 'rotate-0'} ${showRings ? 'cult-pulse' : ''}`}
              />
            </button>

            {/* 2. Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 ${
                isRetro ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'
              }`}
              title={theme === 'dark' ? (lang === 'CN' ? '切换为复古主题' : 'Switch to Retro') : (lang === 'CN' ? '切换为暗黑主题' : 'Switch to Dark')}
            >
              {theme === 'dark' ? <Moon size={13} strokeWidth={2} /> : <Sun size={13} strokeWidth={2} className="text-[#8B261D]" />}
            </button>

            {/* 3. Language Toggle */}
            <button
              onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90 ${
                isRetro ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'
              }`}
              title={lang === 'CN' ? 'Switch to English' : '切换至中文'}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'CN' ? '中' : 'EN'}</span>
            </button>

            {/* 4. Profile / User */}
            <button
              onClick={() => currentUser.id !== 'guest_user' ? openProfile() : openAuth()}
              className={`flex items-center gap-2 group transition-all duration-300 px-2 h-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-95`}
            >
              <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-zinc-600')} border border-[var(--border-main)]/30 flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden group-hover:scale-110 transition-transform`}>
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
                  className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${isRetro ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}
                  cn={currentUser?.id === 'guest_user' ? '访客' : currentUser.username}
                  en={currentUser?.id === 'guest_user' ? 'GUEST' : currentUser.username}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── 主体内容 ── */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* 背景圆环 - 始终挂载，用 key 强制触发CSS动画 */}
        <div
          key={`rings-anim-${ringAnimKey}`}
          className={`absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none z-0 select-none overflow-hidden ${ringAnimClass}`}
        >
          <div className="w-[900px] h-[900px] flex items-center justify-center translate-x-1/4">
            <BorromeanRings centered={true} opacity={isRetro ? 1.0 : 0.95} isHomepage={true} />
          </div>
        </div>

        {/* 内容区 */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-7xl mx-auto w-full">

          {/* 标题区 */}
          <div
            className="mb-16 transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '0.1s',
            }}
          >
            <p
              className={`text-[10px] uppercase tracking-[0.6em] mb-4 font-mono ${
                isRetro ? 'text-black/50' : 'text-white/30'
              }`}
            >
              MIST OBSERVATORY // GLOBAL HOME
            </p>
            <AnimatedText
              lang={lang}
              hClass="h-16 md:h-20"
              className={`text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-[0.12em] leading-none ${
                isRetro ? 'text-[#8B261D]' : 'text-white'
              }`}
              cn="全局主页"
              en="GLOBAL HOME"
            />
            <div className="mt-4">
              <AnimatedText
                lang={lang}
                hClass="h-5"
                className={`text-sm tracking-[0.2em] font-light ${
                  isRetro ? 'text-black/50' : 'text-white/40'
                }`}
                cn="选择入口，进入迷雾学派"
                en="Select a portal to enter the Mist"
              />
            </div>
          </div>

          {/* 导航卡片网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {navCards.map((card, i) => {
              const Icon = card.icon;
              const isHovered = hoveredCard === i;
              return (
                <button
                  key={i}
                  onClick={card.action}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative group text-left p-6 md:p-8 rounded-sm border transition-all duration-700 hover:-translate-y-2 focus:outline-none ${
                    isRetro
                      ? 'bg-white/[0.01] border-black/10 hover:bg-[#FDFCF8] hover:border-[#8B261D]/30 hover:shadow-xl backdrop-blur-xl hover:backdrop-blur-none'
                      : 'bg-white/[0.02] border-white/8 hover:bg-zinc-950 hover:border-white/20 shadow-none hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:backdrop-blur-none'
                  }`}
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(32px)',
                    transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s, background 0.5s, border 0.5s, box-shadow 0.5s, translate 0.5s`,
                  }}
                >
                  {/* 色彩指示线 */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm transition-all duration-500"
                    style={{
                      backgroundColor: card.color,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  {/* 图标 */}
                  <div
                    className={`w-12 h-12 rounded border flex items-center justify-center mb-5 transition-all duration-500 ${
                      isRetro
                        ? 'border-black/10 bg-transparent group-hover:border-black/20'
                        : 'border-zinc-800 bg-zinc-900/80 group-hover:border-white/20'
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`transition-colors duration-500 ${
                        isRetro ? 'text-black/70 group-hover:text-black' : 'text-white/60 group-hover:text-white'
                      }`}
                      style={{ color: isHovered ? card.color : undefined }}
                    />
                  </div>

                  {/* 序号 */}
                  <p
                    className={`text-[9px] font-mono tracking-[0.4em] mb-2 uppercase transition-colors duration-500 ${
                      isRetro ? 'text-black/30' : 'text-white/20'
                    }`}
                  >
                    MOD // 0{i + 1}
                  </p>

                  {/* 标题 */}
                  <AnimatedText
                    lang={lang}
                    hClass="h-8"
                    className={`text-lg font-bold tracking-[0.2em] uppercase leading-none transition-colors duration-500 ${
                      isRetro
                        ? 'text-black/80 group-hover:text-[#8B261D]'
                        : 'text-white/80 group-hover:text-white'
                    }`}
                    cn={card.titleCn}
                    en={card.titleEn}
                  />

                  {/* 描述 */}
                  <div
                    className={`mt-3 overflow-hidden transition-all duration-700 ${
                      isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <AnimatedText
                      lang={lang}
                      hClass="h-auto"
                      className={`text-xs leading-relaxed ${
                        isRetro ? 'text-black/60' : 'text-zinc-400'
                      }`}
                      cn={card.descCn}
                      en={card.descEn}
                    />
                  </div>

                  {/* 箭头 */}
                  <div
                    className={`absolute bottom-6 right-6 transition-all duration-500 ${
                      isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                  >
                    <ChevronRight
                      size={16}
                      style={{ color: card.color }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* 底部版权信息 */}
          <div
            className="mt-16 transition-all duration-700"
            style={{
              opacity: mounted ? 0.35 : 0,
              transitionDelay: '0.8s',
            }}
          >
            <p
              className={`text-[8px] font-mono tracking-[0.6em] uppercase hover:opacity-60 transition-opacity cursor-default ${
                isRetro ? 'text-black/40' : 'text-white/30'
              }`}
            >
              MIST OBSERVATORY // BORROMEAN GATEWAY v2.24 // GLOBAL HOME
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
