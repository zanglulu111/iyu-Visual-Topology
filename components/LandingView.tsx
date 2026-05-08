import React from 'react';
import { DriverSelector } from './DriverSelector';
import { DriverType, User } from '../types';
import { ProductManualModal } from './ProductManualModal';
import { SutureModal } from './SutureModal';
import { HistoryModal } from './HistoryModal';
import { AppHeader } from './AppHeader';

interface LandingViewProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1 | 2) => void;
  setViewMode: (mode: any) => void;
  onReturnToPortal: () => void;
  selectedDriver: DriverType | null;
  onDriverSelect: (id: DriverType) => void;
  hoveredDriver: DriverType | null;
  setHoveredDriver: (id: DriverType | null) => void;
  handleOpenMetonymyPage: () => void;
  openManual: () => void;
  initialProtocol?: string;
  isManualOpen: boolean;
  closeManual: () => void;
  openHistory: () => void;
  isHistoryOpen: boolean;
  closeHistory: () => void;
  isSutureOpen: boolean;
  closeSuture: () => void;
  onSutureGenerate: any;
  isSutureGenerating: boolean;
  isAdmin?: boolean;
  history: any[];
  onHistoryRestore: any;
  onHistoryClear: any;
  openSettings: () => void;
  openAuth: () => void;
  openProfile: () => void;
  onLogout: () => void;
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
  isAdmin,
  history,
  onHistoryRestore,
  onHistoryClear,
  openAuth,
  currentUser,
  openProfile,
  onLogout,
  openSettings,
  showRings,
  setShowRings,
  onReturnToPortal,
}) => {
  const [isLeavingToPortal, setIsLeavingToPortal] = React.useState(false);
  const [isEntering, setIsEntering] = React.useState(true);

  React.useEffect(() => {
    setIsLeavingToPortal(false);
    setIsEntering(true);
    const frame = window.requestAnimationFrame(() => setIsEntering(false));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isLeavingToPortal || isManualOpen || isHistoryOpen || isSutureOpen) return;
    if (event.deltaY >= 0) return;
    event.preventDefault();
    setIsLeavingToPortal(true);
    window.setTimeout(() => {
      onReturnToPortal();
    }, 320);
  };

  return (
    <div
      className={`desire-archive-root fixed inset-0 z-50 overflow-hidden bg-black text-[#fff8ee] selection:bg-white/20 selection:text-white ${isEntering ? 'is-entering' : ''} ${isLeavingToPortal ? 'is-leaving-portal' : ''}`}
      onWheel={handleWheel}
    >
      <style>{`
        .desire-archive-root {
          --desire-serif: "Songti SC", "Noto Serif SC", "Source Han Serif SC", STSong, SimSun, serif;
          --desire-mono: "Avenir Next", Inter, "Noto Sans SC", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          --desire-paper: #fff8ee;
          --desire-paper-2: #ffffff;
          --desire-line: rgba(255, 255, 255, 0.18);
          --desire-topbar-height: 3.5rem;
          font-family: var(--desire-mono);
          background:
            radial-gradient(circle at 70% 22%, rgba(255,79,63,0.07), transparent 29%),
            radial-gradient(circle at 18% 24%, rgba(255,248,238,0.022), transparent 33%),
            linear-gradient(180deg, #000 0%, #000 100%);
          transform: translate3d(0, 0, 0);
          opacity: 1;
          transition: transform 920ms cubic-bezier(0.16, 1, 0.3, 1), opacity 920ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .desire-archive-root.is-entering {
          transform: translate3d(0, 100vh, 0);
          opacity: 0;
        }

        .desire-archive-root.is-leaving-portal {
          transform: translate3d(0, 100vh, 0);
          opacity: 0;
          pointer-events: none;
        }

        .desire-archive-root.is-leaving-portal .desire-topbar,
        .desire-archive-root.is-leaving-portal .desire-stage,
        .desire-archive-root.is-leaving-portal .desire-footer {
          transform: translate3d(0, 2.2vh, 0) scale(0.985);
          opacity: 0;
          filter: blur(3px) brightness(0.8);
          transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1), opacity 320ms ease, filter 320ms ease;
        }

        .desire-archive-root::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.08;
          background-image:
            linear-gradient(rgba(255,255,255,0.042) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px);
          background-size: 100% 22vh, 16.66% 100%;
          mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
        }

        .desire-archive-root::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.034;
          mix-blend-mode: screen;
          background-image:
            radial-gradient(circle at 12% 18%, rgba(255,255,255,0.36) 0 1px, transparent 1.6px),
            radial-gradient(circle at 72% 46%, rgba(255,255,255,0.24) 0 1px, transparent 1.5px);
          background-size: 180px 140px, 260px 190px;
        }

        .desire-archive-film-grain {
          position: absolute;
          inset: -18%;
          pointer-events: none;
          opacity: 0.03;
          background:
            repeating-radial-gradient(circle at 30% 50%, rgba(255,255,255,0.42) 0 0.55px, transparent 0.65px 2px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 4px);
          filter: blur(0.25px);
          animation: desireArchiveGrain 9s steps(3) infinite;
        }

        @keyframes desireArchiveGrain {
          0% { transform: translate3d(-1.5%, -1%, 0); }
          33% { transform: translate3d(1.2%, 0.8%, 0); }
          66% { transform: translate3d(-0.8%, 1.4%, 0); }
          100% { transform: translate3d(1%, -1.2%, 0); }
        }

        .desire-topbar {
          position: relative;
          z-index: 20;
          height: var(--desire-topbar-height);
          display: grid;
          grid-template-columns: minmax(11rem, 17.5rem) 1fr minmax(11rem, 18rem);
          align-items: center;
          gap: clamp(0.65rem, 1.35vw, 2rem);
          padding: 0 clamp(1rem, 2.25vw, 2.7rem);
          border-bottom: 1px solid var(--desire-line);
          background: linear-gradient(180deg, rgba(0,0,0,0.97), rgba(0,0,0,0.76));
          backdrop-filter: blur(10px);
        }

        .desire-brand {
          display: flex;
          align-items: center;
          gap: 0.52rem;
          min-width: 0;
          color: white;
        }

        .desire-brand-mark {
          position: relative;
          width: 1.58rem;
          height: 1.05rem;
          flex: 0 0 auto;
        }

        .desire-brand-mark::before,
        .desire-brand-mark::after {
          content: "";
          position: absolute;
          top: 0;
          width: 1.05rem;
          height: 1.05rem;
          border: 1px solid rgba(255,255,255,0.86);
          border-radius: 999px;
          box-shadow: inset 0 0 18px rgba(255,255,255,0.06), 0 0 12px rgba(255,255,255,0.08);
        }

        .desire-brand-mark::before { left: 0; }
        .desire-brand-mark::after { right: 0; }

        .desire-brand-title {
          font-family: var(--desire-serif);
          font-size: clamp(0.76rem, 0.9vw, 1.08rem);
          font-weight: 700;
          letter-spacing: 0.11em;
          white-space: nowrap;
          line-height: 1;
        }

        .desire-brand-en {
          margin-left: 0.3rem;
          color: rgba(255,255,255,0.74);
          font-size: clamp(0.34rem, 0.42vw, 0.5rem);
          letter-spacing: 0.24em;
          white-space: nowrap;
        }

        .desire-brand-divider {
          height: 1.45rem;
          width: 1px;
          margin-left: auto;
          background: rgba(255,255,255,0.22);
        }

        .desire-nav {
          display: grid;
          grid-template-columns: repeat(5, minmax(3.2rem, 1fr));
          align-items: center;
          gap: clamp(0.6rem, 1.4vw, 2.2rem);
          justify-self: center;
          width: min(31rem, 100%);
        }

        .desire-nav button {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.12rem;
          color: rgba(255,255,255,0.72);
          text-align: left;
          transition: color 260ms ease, transform 260ms ease;
        }

        .desire-nav button:hover {
          color: #fff;
          transform: translateY(-1px);
        }

        .desire-nav-cn {
          font-family: var(--desire-serif);
          font-size: clamp(0.46rem, 0.56vw, 0.64rem);
          letter-spacing: 0.18em;
        }

        .desire-nav-en {
          font-size: clamp(0.3rem, 0.36vw, 0.42rem);
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.52);
        }

        .desire-toolbar {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(0.42rem, 0.75vw, 0.8rem);
          color: rgba(255,255,255,0.78);
        }

        .desire-search {
          display: flex;
          align-items: center;
          gap: 0.34rem;
          min-width: 0;
          font-size: clamp(0.34rem, 0.42vw, 0.5rem);
          letter-spacing: 0.16em;
          white-space: nowrap;
          transition: color 260ms ease, opacity 260ms ease;
        }

        .desire-search svg {
          width: 0.78rem;
          height: 0.78rem;
        }

        .desire-search:hover { color: white; }

        .desire-profile {
          width: 1.38rem;
          height: 1.38rem;
          border: 1px solid rgba(255,255,255,0.72);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: transform 260ms ease, border-color 260ms ease, background 260ms ease;
        }

        .desire-profile:hover {
          transform: scale(1.04);
          border-color: white;
          background: rgba(255,255,255,0.08);
        }

        .desire-stage {
          position: relative;
          z-index: 5;
          height: calc(100vh - var(--desire-topbar-height));
          height: calc(100dvh - var(--desire-topbar-height));
          display: grid;
          grid-template-rows: clamp(13.5rem, 34dvh, 25.5rem) minmax(0, 1fr) clamp(2.6rem, 5.2dvh, 3.8rem);
          padding: clamp(0.48rem, 0.95dvh, 0.85rem) clamp(1rem, 2.1vw, 2.5rem) clamp(0.35rem, 0.7dvh, 0.65rem);
        }

        .desire-hero {
          position: relative;
          display: grid;
          grid-template-columns: minmax(20rem, 41%) 1fr;
          align-items: flex-start;
          min-height: 0;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }

        .desire-hero::before,
        .desire-hero::after {
          content: "";
          position: absolute;
          width: 1.05rem;
          height: 1.05rem;
          pointer-events: none;
          opacity: 0.88;
        }

        .desire-hero::before {
          left: 0.2rem;
          top: 0.15rem;
          border-left: 1px solid white;
          border-top: 1px solid white;
        }

        .desire-hero::after {
          right: 0.2rem;
          bottom: clamp(1.5rem, 4vh, 3rem);
          border-right: 1px solid white;
          border-bottom: 1px solid white;
        }

        .desire-hero-copy {
          position: relative;
          z-index: 5;
          padding-left: clamp(1.15rem, 2.5vw, 2.8rem);
          transform: translateY(clamp(1.35rem, 4.1dvh, 3.15rem));
        }

        .desire-kicker-line {
          display: flex;
          gap: 0.35rem;
          margin-bottom: clamp(0.26rem, 0.65dvh, 0.55rem);
        }

        .desire-kicker-line span {
          width: 1.12rem;
          height: 2px;
          display: block;
        }

        .desire-title {
          font-family: var(--desire-serif);
          font-size: clamp(2.6rem, 4.35vw, 5.45rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: 0.08em;
          color: #fff;
          text-shadow: 0 0 34px rgba(255,255,255,0.1), 0 14px 42px rgba(0,0,0,0.78);
        }

        .desire-subtitle {
          margin-top: clamp(0.78rem, 1.35dvh, 1.12rem);
          font-size: clamp(0.66rem, 0.98vw, 1.16rem);
          letter-spacing: 0.4em;
          line-height: 1;
          color: rgba(255,255,255,0.9);
        }

        .desire-cn-tagline {
          margin-top: clamp(1.1rem, 2.1dvh, 1.75rem);
          font-family: var(--desire-serif);
          font-size: clamp(0.68rem, 0.95vw, 1.12rem);
          line-height: 1.15;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.86);
        }

        .desire-en-tagline {
          margin-top: clamp(0.42rem, 0.85dvh, 0.68rem);
          font-size: clamp(0.44rem, 0.6vw, 0.72rem);
          line-height: 1.1;
          letter-spacing: 0.28em;
          color: rgba(255,255,255,0.58);
        }

        .desire-projector-area {
          position: absolute;
          inset: -6% -1.5% -10% 0;
          overflow: hidden;
          pointer-events: none;
        }

        .desire-projector-bg {
          position: absolute;
          inset: 0;
          opacity: 1;
          background-image:
            linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.12) 20%, rgba(0,0,0,0.02) 54%, rgba(0,0,0,0.14) 100%),
            linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 48%, rgba(0,0,0,0.28) 100%),
            url('/portal-assets/desire-projector-hero-135.webp');
          background-size: cover;
          background-position: center 48%;
          filter: grayscale(0) saturate(1.12) contrast(1.18) brightness(1.05);
          transform: none;
          -webkit-mask-image: radial-gradient(ellipse 94% 80% at 56% 50%, #000 0%, #000 58%, rgba(0,0,0,0.78) 74%, transparent 100%);
          mask-image: radial-gradient(ellipse 94% 80% at 56% 50%, #000 0%, #000 58%, rgba(0,0,0,0.78) 74%, transparent 100%);
        }

        .desire-projector-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.62;
          background:
            radial-gradient(ellipse at 55% 42%, transparent 0%, transparent 46%, rgba(0,0,0,0.16) 72%, rgba(0,0,0,0.58) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.04) 0%, transparent 34%, rgba(0,0,0,0.36) 100%),
            linear-gradient(90deg, rgba(255,79,63,0.045), transparent 18%, transparent 84%, rgba(0,0,0,0.24));
          mix-blend-mode: multiply;
        }

        .desire-projector-beam {
          display: none;
        }

        .desire-projector-machine {
          display: none;
        }

        .desire-projector-body {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 70%;
          height: 62%;
          border-radius: 0.2rem;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.16), rgba(255,255,255,0.035) 32%, rgba(0,0,0,0.86) 70%),
            #0b0b0b;
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow: inset 0 0 28px rgba(255,255,255,0.08);
        }

        .desire-projector-lens {
          position: absolute;
          left: 22%;
          top: 50%;
          width: clamp(2.6rem, 3vw, 3.45rem);
          height: clamp(2.6rem, 3vw, 3.45rem);
          transform: translateY(-22%);
          border-radius: 999px;
          background: radial-gradient(circle, #fff 0 24%, #cfcfcf 28%, #4a4a4a 42%, #0b0b0b 64%);
          box-shadow: 0 0 34px rgba(255,255,255,0.8), inset 0 0 16px rgba(0,0,0,0.72);
        }

        .desire-reel {
          position: absolute;
          top: 0;
          width: clamp(4.8rem, 5.6vw, 6.35rem);
          height: clamp(4.8rem, 5.6vw, 6.35rem);
          border-radius: 999px;
          border: 2px solid rgba(255,255,255,0.55);
          background:
            radial-gradient(circle, transparent 0 18%, rgba(255,255,255,0.7) 19% 21%, transparent 22%),
            conic-gradient(from 0deg, rgba(255,255,255,0.48) 0 8deg, transparent 8deg 45deg, rgba(255,255,255,0.38) 45deg 54deg, transparent 54deg 90deg);
          box-shadow: inset 0 0 20px rgba(255,255,255,0.15), 0 0 18px rgba(255,255,255,0.08);
        }

        .desire-reel-one { left: 8%; }
        .desire-reel-two { left: 40%; transform: scale(0.62); opacity: 0.62; }

        .desire-system-readout {
          position: absolute;
          right: 4%;
          top: 43%;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 0.46rem;
          color: rgba(255,255,255,0.72);
          font-size: clamp(0.38rem, 0.46vw, 0.56rem);
          letter-spacing: 0.16em;
          white-space: nowrap;
        }

        .desire-system-readout b {
          color: rgba(255,255,255,0.86);
          font-weight: 500;
        }

        .desire-system-readout span span {
          color: #ff6256;
        }

        .desire-cards-shell {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 0;
          padding: clamp(0.75rem, 1.55dvh, 1.25rem) clamp(0.55rem, 1vw, 1.1rem) clamp(0.7rem, 1.35dvh, 1.1rem);
          border-bottom: 0;
        }

        .desire-cards-shell::before,
        .desire-cards-shell::after {
          content: none;
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255,255,255,0.2);
        }

        .desire-cards-shell::before { top: clamp(0.75rem, 1.55dvh, 1.25rem); }
        .desire-cards-shell::after { bottom: clamp(0.7rem, 1.35dvh, 1.1rem); }

        .desire-archive-card-row {
          position: relative;
          z-index: 4;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(0.7rem, 1.05vw, 1.35rem);
          width: min(100%, clamp(64rem, 82vw, 104rem));
          height: min(100%, clamp(21.5rem, 49dvh, 31.2rem));
          padding: 0;
        }

        .desire-archive-card {
          position: relative;
          height: 100%;
          min-height: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(16,16,15,0.42);
          border-radius: 0.38rem;
          padding: clamp(0.6rem, 0.72vw, 0.84rem) clamp(0.62rem, 0.72vw, 0.86rem);
          color: #171717;
          text-align: left;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.62), rgba(255,255,255,0.1) 42%, rgba(0,0,0,0.035)),
            radial-gradient(circle at 24% 7%, rgba(255,255,255,0.84), transparent 34%),
            var(--desire-paper);
          box-shadow:
            inset 0 0 0 0.18rem rgba(255,255,255,0.64),
            inset 0 0 0 0.25rem rgba(0,0,0,0.14),
            0 1.2rem 2.4rem rgba(0,0,0,0.44);
          transform: translate3d(0, 0, 0) scale(1);
          transform-origin: center center;
          will-change: transform, filter, box-shadow;
          transition:
            transform 760ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 760ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 620ms ease,
            filter 760ms ease;
        }

        .desire-archive-card.is-active {
          z-index: 8;
          transform: translate3d(0, -0.42rem, 0) scale(1.035);
          filter: brightness(1.045);
          border-color: color-mix(in srgb, var(--desire-card-accent, #c93a34) 48%, rgba(16,16,15,0.42));
          box-shadow:
            inset 0 0 0 0.18rem rgba(255,255,255,0.74),
            inset 0 0 0 0.25rem rgba(0,0,0,0.18),
            0 1.6rem 4.2rem rgba(0,0,0,0.56),
            1px 0 0 color-mix(in srgb, var(--desire-card-accent, #c93a34) 45%, transparent);
        }

        .desire-archive-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.105;
          background:
            repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0 1px, transparent 1px 3px),
            radial-gradient(circle at 18% 22%, rgba(255,255,255,0.8), transparent 26%);
          mix-blend-mode: multiply;
        }

        .desire-card-corner {
          position: absolute;
          z-index: 3;
          width: 0.78rem;
          height: 0.78rem;
          opacity: 0.4;
          border-color: rgba(0,0,0,0.44);
          transition: opacity 620ms ease, border-color 620ms ease, transform 760ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .desire-card-corner-tl { left: 0.68rem; top: 0.68rem; border-left: 1px solid; border-top: 1px solid; }
        .desire-card-corner-tr { right: 0.68rem; top: 0.68rem; border-right: 1px solid; border-top: 1px solid; }
        .desire-card-corner-bl { left: 0.68rem; bottom: 0.68rem; border-left: 1px solid; border-bottom: 1px solid; }
        .desire-card-corner-br { right: 0.68rem; bottom: 0.68rem; border-right: 1px solid; border-bottom: 1px solid; }

        .desire-archive-card.is-active .desire-card-corner {
          opacity: 0.95;
          border-color: var(--desire-card-accent, #c93a34);
        }

        .desire-card-meta-row {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: clamp(1.55rem, 2.75dvh, 2.15rem);
          padding: 0.05rem clamp(0.26rem, 0.32vw, 0.42rem) 0;
          color: rgba(0,0,0,0.74);
          font-family: var(--desire-mono);
          font-size: clamp(0.54rem, 0.62vw, 0.74rem);
          letter-spacing: 0.12em;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          transition: color 620ms ease, border-color 620ms ease;
        }

        .desire-archive-card.is-active .desire-card-meta-row {
          color: var(--desire-card-accent, #c93a34);
          border-bottom-color: color-mix(in srgb, var(--desire-card-accent, #c93a34) 36%, rgba(0,0,0,0.2));
        }

        .desire-card-title-row {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          justify-items: start;
          min-height: clamp(4.25rem, 7.8dvh, 6.1rem);
          padding: clamp(0.45rem, 0.8dvh, 0.72rem) clamp(0.26rem, 0.32vw, 0.42rem) 0;
          text-align: left;
        }

        .desire-card-title-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-right: 0;
          color: #10100f;
          transition: color 620ms ease, transform 760ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .desire-card-title-cn {
          font-family: var(--desire-serif);
          font-size: clamp(1.18rem, 1.45vw, 1.9rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: 0.13em;
          white-space: nowrap;
        }

        .desire-card-title-en {
          margin-top: 0.5rem;
          font-size: clamp(0.48rem, 0.62vw, 0.76rem);
          line-height: 1;
          letter-spacing: 0.18em;
          color: rgba(0,0,0,0.84);
          transition: color 620ms ease;
        }

        .desire-archive-card.is-active .desire-card-title-en {
          color: var(--desire-card-accent, #c93a34);
        }

        .desire-archive-card.is-commercial .desire-card-title-cn {
          display: inline-flex;
          align-items: center;
          color: #fff;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03)),
            color-mix(in srgb, var(--desire-card-accent, #5ecfdc) 78%, #050505);
          padding: 0.12rem 0.42rem 0.18rem;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.2),
            0 0 16px color-mix(in srgb, var(--desire-card-accent, #5ecfdc) 22%, transparent);
          text-shadow: 0 1px 8px rgba(0,0,0,0.42);
        }

        .desire-card-image-frame {
          position: relative;
          z-index: 5;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          margin-top: clamp(0.18rem, 0.42dvh, 0.42rem);
          border: 1px solid rgba(0,0,0,0.22);
          background: #111;
        }

        .desire-card-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.18) saturate(1.04) contrast(1.2) brightness(0.94);
          transform: scale(1.02);
          transition: transform 920ms cubic-bezier(0.16, 1, 0.3, 1), filter 920ms ease;
        }

        .desire-archive-card.is-active .desire-card-image-frame img {
          transform: scale(1.045);
          filter: grayscale(0.06) saturate(1.08) contrast(1.28) brightness(1.02);
        }

        .desire-card-topology {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: clamp(0.46rem, 0.75dvh, 0.7rem);
          padding-bottom: 0.42rem;
          border-bottom: 1px solid rgba(0,0,0,0.28);
          color: rgba(0,0,0,0.86);
          font-family: var(--desire-serif);
          font-size: clamp(0.56rem, 0.7vw, 0.86rem);
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        .desire-card-topology span:first-child {
          font-family: var(--desire-mono);
          font-weight: 600;
          letter-spacing: 0.13em;
        }

        .desire-card-description {
          position: relative;
          z-index: 5;
          margin: clamp(0.42rem, 0.75dvh, 0.72rem) 0 0;
          font-family: var(--desire-serif);
          font-size: clamp(0.62rem, 0.78vw, 0.96rem);
          line-height: 1.62;
          letter-spacing: 0.055em;
          color: rgba(0,0,0,0.76);
        }

        .desire-card-signal {
          position: relative;
          z-index: 5;
          margin-top: auto;
          padding: clamp(0.45rem, 0.85dvh, 0.75rem) clamp(0.28rem, 0.36vw, 0.48rem) clamp(0.22rem, 0.4dvh, 0.36rem);
          color: rgba(0,0,0,0.34);
        }

        .desire-card-signal svg {
          display: block;
          width: 100%;
          height: clamp(1.05rem, 2.1dvh, 1.6rem);
          overflow: visible;
        }

        .desire-card-signal path {
          fill: none;
          stroke: currentColor;
          stroke-width: 0.9;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 620ms ease, stroke-width 620ms ease;
        }

        .desire-archive-card.is-active .desire-card-signal {
          color: var(--desire-card-accent, #c93a34);
        }

        .desire-card-arrow {
          position: relative;
          z-index: 5;
          margin-top: 0;
          display: flex;
          justify-content: flex-end;
          padding-top: clamp(0.35rem, 0.72dvh, 0.72rem);
          color: #111;
          transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .desire-card-arrow svg {
          width: clamp(1.25rem, 1.35vw, 1.7rem);
          height: clamp(1.25rem, 1.35vw, 1.7rem);
        }

        .desire-archive-card.is-active .desire-card-arrow {
          transform: translateX(0.24rem);
          color: var(--desire-card-accent, #c93a34);
        }

        .desire-card-bottom-line {
          position: absolute;
          z-index: 5;
          left: clamp(0.68rem, 0.78vw, 0.94rem);
          right: clamp(0.68rem, 0.78vw, 0.94rem);
          bottom: clamp(0.48rem, 0.7dvh, 0.7rem);
          height: 1px;
          background: rgba(0,0,0,0.2);
        }

        .desire-footer {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: minmax(12rem, 1fr) minmax(20rem, 1fr) minmax(14rem, 1fr);
          align-items: center;
          gap: 1.3rem;
          padding: 0 clamp(1rem, 2.1vw, 2.5rem);
          color: rgba(255,255,255,0.66);
          font-size: clamp(0.38rem, 0.48vw, 0.56rem);
          letter-spacing: 0.2em;
        }

        .desire-footer-left {
          display: flex;
          align-items: center;
          gap: 0.72rem;
        }

        .desire-footer-dot {
          width: 1.45rem;
          height: 1.45rem;
          border: 1px solid rgba(255,255,255,0.72);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .desire-footer-dot::after {
          content: "";
          width: 0.34rem;
          height: 0.34rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.72);
        }

        .desire-footer-center {
          justify-self: center;
          text-align: center;
          word-spacing: 1.1rem;
        }

        .desire-footer-right {
          justify-self: end;
          text-align: right;
        }

        @media (max-width: 1280px) {
          .desire-topbar {
            grid-template-columns: minmax(10.5rem, 15rem) 1fr minmax(10rem, 14rem);
          }

          .desire-nav {
            gap: 0.72rem;
          }

          .desire-stage {
          grid-template-rows: clamp(11.5rem, 31dvh, 19rem) minmax(0, 1fr) clamp(2.45rem, 5dvh, 3.35rem);
          }

          .desire-archive-card-row {
            gap: 0.82rem;
          }

          .desire-archive-card {
            min-height: 0;
          }
        }

        @media (max-width: 980px) {
          .desire-topbar {
            grid-template-columns: 1fr auto;
            height: 4.4rem;
          }

          .desire-nav {
            display: none;
          }

          .desire-brand-divider,
          .desire-brand-en,
          .desire-search span {
            display: none;
          }

          .desire-stage {
            height: calc(100vh - 4.4rem);
            overflow-y: auto;
            grid-template-rows: auto auto auto;
            padding: 1.2rem;
          }

          .desire-hero {
            min-height: 19rem;
            grid-template-columns: 1fr;
          }

          .desire-projector-area {
            inset: 0;
            opacity: 0.68;
          }

          .desire-system-readout {
            display: none;
          }

          .desire-archive-card-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 0;
          }

          .desire-archive-card {
            min-height: 23rem;
          }

          .desire-footer {
            grid-template-columns: 1fr;
            gap: 0.7rem;
            padding: 1rem 0 0;
            text-align: left;
          }

          .desire-footer-center,
          .desire-footer-right {
            justify-self: start;
            text-align: left;
          }
        }

        @media (max-width: 640px) {
          .desire-archive-card-row {
            grid-template-columns: 1fr;
          }

          .desire-title {
            font-size: 3.5rem;
          }

          .desire-cn-tagline,
          .desire-subtitle {
            letter-spacing: 0.18em;
          }
        }
      `}</style>

      <div className="desire-archive-film-grain pointer-events-none absolute inset-[-18%] z-0" aria-hidden="true" />

      <AppHeader
        page={0}
        lang={lang}
        setLang={setLang}
        setPage={setPage}
        selectedDriver={selectedDriver}
        driverName={lang === 'CN' ? '迷雾学派：欲望再生产' : 'MIST: DESIRE REPRODUCTION'}
        viewMode="ARCHIVE"
        setViewMode={setViewMode}
        handleOpenMetonymyPage={handleOpenMetonymyPage}
        openManual={openManual}
        isManualOpen={isManualOpen}
        openHistory={openHistory}
        isHistoryOpen={isHistoryOpen}
        openSettings={openSettings}
        openAuth={openAuth}
        openProfile={openProfile}
        onLogout={onLogout}
        currentUser={currentUser}
        showRings={showRings}
        setShowRings={setShowRings}
      />

      <main className="desire-stage relative z-10">
        <section className="desire-hero">
          <div className="desire-projector-area" aria-hidden="true">
            <div className="desire-projector-bg" />
            <div className="desire-projector-beam" />
            <div className="desire-projector-machine">
              <div className="desire-reel desire-reel-one" />
              <div className="desire-reel desire-reel-two" />
              <div className="desire-projector-body" />
              <div className="desire-projector-lens" />
            </div>
            <div className="desire-system-readout">
              <b>ARCHIVE SYSTEM</b>
              <span>STATUS: <span>ONLINE</span></span>
              <span>NODE: <span>CENTRAL</span></span>
              <span>VER: 2.1.0</span>
            </div>
          </div>

          <div className="desire-hero-copy">
            <h1 className="desire-title">欲望再生产</h1>
            <div className="desire-subtitle">DESIRE REPRODUCTION</div>
            <div className="desire-kicker-line" aria-hidden="true">
              <span style={{ background: '#b63c36' }} />
              <span style={{ background: '#ff6256' }} />
            </div>
            <div className="desire-cn-tagline">精神分析电影研究与欲望机制档案库</div>
            <div className="desire-en-tagline">A PSYCHOANALYTIC CINEMA PORTAL</div>
          </div>
        </section>

        <section className="desire-cards-shell" aria-label="Desire engine choices">
          <DriverSelector
            selectedDriver={selectedDriver}
            onSelect={onDriverSelect}
            lang={lang}
            hoveredDriver={hoveredDriver}
            onHover={setHoveredDriver}
          />
        </section>

        <footer className="desire-footer">
          <div className="desire-footer-left">
            <span className="desire-footer-dot" aria-hidden="true" />
            <div>
              <div>PSYCHOANALYTIC CINEMA ARCHIVE</div>
              <div className="mt-2">EST. 2024</div>
            </div>
          </div>
          <div className="desire-footer-center">
            LACAN · ŽIŽEK · MULVEY · BAUDRILLARD · DELEUZE
          </div>
          <div className="desire-footer-right">
            KEEP FILMING THE UNCONSCIOUS.
          </div>
        </footer>
      </main>

      <ProductManualModal isOpen={isManualOpen} onClose={closeManual} driverType={hoveredDriver} />
      <SutureModal
        isOpen={isSutureOpen}
        onClose={closeSuture}
        onGenerate={onSutureGenerate}
        isGenerating={isSutureGenerating}
        lang={lang}
        driverType={selectedDriver || DriverType.NARRATIVE}
        isAdmin={isAdmin}
      />
      {isHistoryOpen && (
        <HistoryModal
          history={history}
          onRestore={onHistoryRestore}
          onClear={onHistoryClear}
          onClose={closeHistory}
          lang={lang}
        />
      )}
    </div>
  );
};
