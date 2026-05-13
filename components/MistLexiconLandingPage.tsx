import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, BookOpen, Users, X, Database, Activity } from 'lucide-react';
import { PhilosophyCodexPage, CodexSection } from './PhilosophyCodexPage';
import { PhilosopherPosterIndexPage } from './PhilosopherPosterIndexPage';
import { User, DriverType, ViewMode } from '../types';

interface MistLexiconLandingPageProps {
    onClose: () => void;
    driverType: DriverType | null;
    lang: 'CN' | 'EN';
    currentUser: User;
    setLang: (lang: 'CN' | 'EN') => void;
    openHistory: () => void;
    openSettings: () => void;
    openAuth: () => void;
    openProfile: () => void;
    showRings: boolean;
    setShowRings: (show: boolean) => void;
    setViewMode: (mode: ViewMode) => void;
    isAdmin: boolean;
    initialDictionary?: string;
    initialSection?: CodexSection;
    initialDetailTab?: 'DEFINITION' | 'ANALOGY' | 'APPLICATION';
    onDictionaryChange?: (dict: string) => void;
    onSectionChange?: (section: CodexSection) => void;
    onDetailTabChange?: (tab: 'DEFINITION' | 'ANALOGY' | 'APPLICATION') => void;
}

export const MistLexiconLandingPage: React.FC<MistLexiconLandingPageProps> = (props) => {
    const { lang, onClose, isAdmin } = props;

    const [activeView, setActiveView] = useState<'LANDING' | 'CODEX' | 'GALLERY'>('LANDING');
    const [transitioning, setTransitioning] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // If initial props are passed that imply codex is deep linked
    useEffect(() => {
        if (props.initialDictionary && props.initialDictionary !== 'MIST') {
            setActiveView('CODEX');
        }
    }, [props.initialDictionary]);

    const handleNavigate = (view: 'CODEX' | 'GALLERY') => {
        setTransitioning(true);
        setTimeout(() => {
            setActiveView(view);
            setTransitioning(false);
        }, 600); // 600ms match css transition
    };

    const handleBackToLanding = () => {
        setTransitioning(true);
        setTimeout(() => {
            setActiveView('LANDING');
            setTransitioning(false);
        }, 600);
    };

    if (activeView === 'CODEX') {
        return (
            <div className={`w-full h-full transition-opacity duration-600 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                <PhilosophyCodexPage
                    {...props}
                    onClose={handleBackToLanding}
                    renderInPlace={true}
                    onOpenPosterWorkspace={() => handleNavigate('GALLERY')}
                />
            </div>
        );
    }

    if (activeView === 'GALLERY') {
        return (
            <div className={`w-full h-full transition-opacity duration-600 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                <PhilosopherPosterIndexPage
                    lang={props.lang}
                    setLang={props.setLang}
                    onClose={handleBackToLanding}
                />
            </div>
        );
    }

    return (
        <div className={`lexicon-landing-container ${transitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'} transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]`}>
            <style>{`
                .lexicon-landing-container {
                    width: 100vw;
                    height: 100vh;
                    background: #030303;
                    color: #fff;
                    overflow: hidden;
                    position: relative;
                }

                /* NOISE OVERLAY */
                .lexicon-noise {
                    position: fixed;
                    inset: -50%;
                    width: 200%;
                    height: 200%;
                    background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
                    opacity: 0.03;
                    mix-blend-mode: overlay;
                    pointer-events: none;
                    animation: noiseShift 8s steps(10) infinite;
                    z-index: 5;
                }
                @keyframes noiseShift {
                    0% { transform: translate(0, 0); }
                    10% { transform: translate(-5%, -5%); }
                    20% { transform: translate(-10%, 5%); }
                    30% { transform: translate(5%, -10%); }
                    40% { transform: translate(-5%, 15%); }
                    50% { transform: translate(-10%, 5%); }
                    60% { transform: translate(15%, 0); }
                    70% { transform: translate(0, 15%); }
                    80% { transform: translate(3%, 35%); }
                    90% { transform: translate(-10%, 10%); }
                    100% { transform: translate(0, 0); }
                }

                .lexicon-grid-bg {
                    position: fixed;
                    inset: 0;
                    background-image:
                        linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
                    background-size: 60px 60px;
                    pointer-events: none;
                    z-index: 1;
                    mask-image: radial-gradient(circle at center, black 20%, transparent 80%);
                }

                .scroll-snapper {
                    height: 100vh;
                    overflow-y: auto;
                    overflow-x: hidden;
                    scroll-snap-type: y mandatory;
                    scroll-behavior: smooth;
                    position: relative;
                    z-index: 10;
                }

                .scroll-snapper::-webkit-scrollbar {
                    display: none;
                }

                .lex-section {
                    height: 100vh;
                    width: 100vw;
                    scroll-snap-align: start;
                    scroll-snap-stop: always;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                /* --- PART 00: HERO PORTALS --- */
                .hero-title-group {
                    position: absolute;
                    top: 15%;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    z-index: 20;
                    pointer-events: none;
                }

                .hero-mist {
                    font-family: "Songti SC", serif;
                    font-size: 1.5rem;
                    letter-spacing: 1.5em;
                    margin-left: 1.5em; /* offset for letter spacing */
                    color: rgba(255,255,255,0.4);
                    margin-bottom: 1rem;
                }

                .hero-lexicon {
                    font-size: 6rem;
                    font-weight: 100;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.2) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    line-height: 1;
                }

                .portals-container {
                    display: flex;
                    gap: 4rem;
                    margin-top: 10vh;
                    width: 80%;
                    max-width: 1200px;
                    height: 50vh;
                    z-index: 20;
                }

                .portal-card {
                    flex: 1;
                    position: relative;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: rgba(10,10,10,0.5);
                    backdrop-filter: blur(10px);
                    cursor: pointer;
                    overflow: hidden;
                    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 3rem;
                    group: portal;
                }

                .portal-card:hover {
                    border-color: rgba(255,255,255,0.3);
                    transform: translateY(-10px);
                    background: rgba(20,20,20,0.8);
                }

                .portal-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
                .portal-card:hover::before { opacity: 1; }

                .portal-bg-image {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.1;
                    transition: opacity 0.7s ease, transform 10s linear;
                    z-index: -1;
                    filter: grayscale(100%);
                }
                .portal-card:hover .portal-bg-image {
                    opacity: 0.4;
                    transform: scale(1.1);
                    filter: grayscale(0%);
                }

                .portal-card .icon-wrapper {
                    position: absolute;
                    top: 3rem;
                    left: 3rem;
                    width: 48px;
                    height: 48px;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255,255,255,0.5);
                    transition: all 0.5s ease;
                }
                .portal-card:hover .icon-wrapper {
                    border-color: #FFD700;
                    color: #FFD700;
                    background: rgba(255,215,0,0.1);
                }

                .portal-title-en {
                    font-size: 0.8rem;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.4);
                    margin-bottom: 0.5rem;
                    transition: color 0.5s ease;
                }
                .portal-title-cn {
                    font-family: "Songti SC", serif;
                    font-size: 2.5rem;
                    color: rgba(255,255,255,0.8);
                    transition: color 0.5s ease;
                }
                .portal-card:hover .portal-title-en { color: #FFD700; }
                .portal-card:hover .portal-title-cn { color: #fff; }

                /* --- SCROLL INDICATOR --- */
                .scroll-hint {
                    position: absolute;
                    bottom: 3rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    opacity: 0.3;
                    animation: pulseHint 3s infinite ease-in-out;
                    pointer-events: none;
                }
                @keyframes pulseHint {
                    0%, 100% { opacity: 0.2; transform: translate(-50%, 0); }
                    50% { opacity: 0.6; transform: translate(-50%, 5px); }
                }

                /* --- PART 01/02 PEEK SECTIONS --- */
                .peek-bg-text {
                    position: absolute;
                    font-size: 20vw;
                    font-weight: 900;
                    color: rgba(255,255,255,0.02);
                    white-space: nowrap;
                    z-index: 0;
                    pointer-events: none;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .peek-content {
                    z-index: 10;
                    max-width: 800px;
                    text-align: center;
                }

                .peek-subtitle {
                    font-size: 0.8rem;
                    letter-spacing: 0.5em;
                    color: #FFD700;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                }

                .peek-title {
                    font-family: "Songti SC", serif;
                    font-size: 3.5rem;
                    color: #fff;
                    margin-bottom: 2rem;
                    line-height: 1.4;
                }

                .peek-desc {
                    font-size: 1rem;
                    color: rgba(255,255,255,0.5);
                    line-height: 1.8;
                    margin-bottom: 4rem;
                }

                .peek-btn {
                    border: 1px solid rgba(255,255,255,0.2);
                    padding: 1rem 3rem;
                    font-size: 0.85rem;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    background: transparent;
                    color: #fff;
                    cursor: pointer;
                    transition: all 0.4s ease;
                }
                .peek-btn:hover {
                    background: #fff;
                    color: #000;
                }
            `}</style>

            <div className="lexicon-noise" />
            <div className="lexicon-grid-bg" />

            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-50 p-2 text-white/50 hover:text-white transition-colors"
            >
                <X size={24} strokeWidth={1} />
            </button>

            <div className="scroll-snapper" ref={scrollContainerRef}>

                {/* PART 00: HERO PORTALS */}
                <section className="lex-section">
                    <div className="hero-title-group">
                        <div className="hero-mist">{lang === 'CN' ? '迷雾辞典' : 'MIST CODEX'}</div>
                        <div className="hero-lexicon">LEXICON</div>
                    </div>

                    <div className="portals-container">
                        {/* THEORETICAL CODEX PORTAL */}
                        <div className="portal-card" onClick={() => handleNavigate('CODEX')}>
                            <div className="portal-bg-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop)' }}></div>
                            <div className="icon-wrapper">
                                <Database size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="portal-title-en">THEORETICAL CODEX</div>
                                <div className="portal-title-cn">{lang === 'CN' ? '理论辞典' : 'THEORY'}</div>
                            </div>
                        </div>

                        {/* PHILOSOPHERS GALLERY PORTAL */}
                        <div className="portal-card" onClick={() => handleNavigate('GALLERY')}>
                            <div className="portal-bg-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578309536894-37b51bc5e3d7?q=80&w=2000&auto=format&fit=crop)' }}></div>
                            <div className="icon-wrapper">
                                <Users size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="portal-title-en">PHILOSOPHERS GALLERY</div>
                                <div className="portal-title-cn">{lang === 'CN' ? '哲学家图鉴' : 'GALLERY'}</div>
                                {!isAdmin && (
                                    <div className="text-[10px] text-mist-active/50 uppercase tracking-widest mt-2 font-mono">
                                        ADMIN PREVIEW
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="scroll-hint">
                        <span className="text-[10px] uppercase tracking-[0.3em]">SCROLL</span>
                        <ChevronDown size={16} strokeWidth={1} />
                    </div>
                </section>

                {/* PART 01: THEORY PEEK */}
                <section className="lex-section bg-black/40 backdrop-blur-sm border-y border-white/5">
                    <div className="peek-bg-text">MATRIX</div>
                    <div className="peek-content">
                        <div className="peek-subtitle">01 / Theoretical Codex</div>
                        <div className="peek-title">
                            {lang === 'CN' ? '结构主义与精神分析的\n绝对拓扑场域' : 'The Absolute Topological Field of\nStructuralism & Psychoanalysis'}
                        </div>
                        <div className="peek-desc">
                            {lang === 'CN' ? '进入深层代码层。解析拉康、齐泽克与德勒兹的概念母体，重构被异化的欲望客体。在符号界的边缘，重新编译实在界的缝隙。' : 'Enter the deep code layer. Parse the conceptual matrix of Lacan, Žižek, and Deleuze. Recompile the gaps of the Real at the edge of the Symbolic.'}
                        </div>
                        <button className="peek-btn" onClick={() => handleNavigate('CODEX')}>
                            {lang === 'CN' ? '接入理论终端' : 'ENTER TERMINAL'}
                        </button>
                    </div>
                </section>

                {/* PART 02: GALLERY PEEK */}
                <section className="lex-section bg-gradient-to-t from-[#0a0505] to-transparent">
                    <div className="peek-bg-text">THINKERS</div>
                    <div className="peek-content">
                        <div className="peek-subtitle">02 / Philosophers Gallery</div>
                        <div className="peek-title">
                            {lang === 'CN' ? '凝视凝视本身' : 'Gaze Upon the Gaze Itself'}
                        </div>
                        <div className="peek-desc">
                            {lang === 'CN' ? '在美术馆的长廊中，与宣告实在界破裂的思想者直面。这不仅是历史的陈列，而是正在进行中的理论剧场。' : 'In the corridors of the gallery, face the thinkers who declare the rupture of the Real. Not a historical display, but an ongoing theoretical theater.'}
                        </div>
                        <button className="peek-btn" onClick={() => handleNavigate('GALLERY')}>
                            {lang === 'CN' ? '进入思想圣殿' : 'ENTER GALLERY'}
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
};
