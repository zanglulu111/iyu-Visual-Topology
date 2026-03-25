import React, { useState, useEffect, useCallback } from 'react';
import { ARCHIVE_CASES } from './archiveCasesData';
import { ArchiveDetailModal } from './ArchiveDetailModal';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Globe, Instagram, Twitter, Mail } from 'lucide-react';
import { soundManager } from '../utils/soundManager';

interface ArchiveDirectoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    isFullScreen?: boolean;
}

export const ArchiveDirectoryModal: React.FC<ArchiveDirectoryModalProps> = ({ 
    isOpen, 
    onClose, 
    lang
}) => {
    const { theme } = useTheme();
    const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
    const [hasEntered, setHasEntered] = useState(false);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const lastScrollPos = React.useRef(0);
    const activityRef = React.useRef(0);
    const [openingId, setOpeningId] = useState<string | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const targetScrollRef = React.useRef(0);
    // Audio Refs
    const lastTickIndex = React.useRef(-1);
    const scrollPlayingRef = React.useRef(false);
    const cardsRef = React.useRef<HTMLElement[]>([]);
    const viewportWidthRef = React.useRef(0);
    const lastInternalScrollPos = React.useRef(0);

    const items = ARCHIVE_CASES;
    const cardWidth = 110;
    const winWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const centerPadding = winWidth / 2 - cardWidth / 2;

    // Initial entrance effect - Staggered
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setHasEntered(true);
            }, 100);
            return () => clearTimeout(timer);
        } else {
            setHasEntered(false);
        }
    }, [isOpen]);

    // Dismiss expanded card on scroll/swipe
    const handleScrollDismiss = useCallback((e: WheelEvent) => {
        if (openingId && (Math.abs(e.deltaX) > 10 || Math.abs(e.deltaY) > 10)) {
            setOpeningId(null);
            setIsTransitioning(false);
        }
    }, [openingId]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const updateViewport = () => {
            viewportWidthRef.current = container.offsetWidth;
        };
        updateViewport();
        window.addEventListener('resize', updateViewport);

        // Remove scroll event listener as we'll handle sync in the animation loop
        // to avoid conflicts with our custom momentum logic.
        
        const handleWheel = (e: WheelEvent) => {
            // Prevent interference if user is reading a selected case
            if (selectedCaseId) return;

            if (openingId) {
                if (Math.abs(e.deltaX) > 10 || Math.abs(e.deltaY) > 10) {
                    setOpeningId(null);
                    setIsTransitioning(false);
                }
                return;
            }

            // Determine the dominant scroll direction (some users scroll vertically, trackpads horizontally)
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
            
            // Apply delta directly to targetScrollRef for consistent momentum,
            // regardless of whether it's a discrete mouse wheel or continuous trackpad
            targetScrollRef.current += delta;
            e.preventDefault();
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (openingId) {
                if (e.key === 'Escape') {
                    setOpeningId(null);
                    setIsTransitioning(false);
                }
                return;
            }

            if (e.key === 'ArrowRight') {
                targetScrollRef.current += 400;
            } else if (e.key === 'ArrowLeft') {
                targetScrollRef.current -= 400;
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('resize', updateViewport);
            container.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [openingId, handleScrollDismiss]);

    // Initialize Sounds
    // Preload Sounds on Mount
    useEffect(() => {
        if (isOpen) {
            soundManager.preload('archiveScroll', '/audio/archive-scroll.mp3');
            soundManager.preload('archiveTick', '/audio/archive-tick1.mp3');
            soundManager.preload('archiveHover', '/audio/archive-hover.mp3');
            soundManager.preload('confirm', '/audio/confirm-05.mp3');
        }
        return () => {
            soundManager.stop('archiveScroll');
            scrollPlayingRef.current = false;
        };
    }, [isOpen]);

    // Wave Effect Logic
    useEffect(() => {
        if (!isOpen || !scrollContainerRef.current) return;

        let rafId: number;
        const container = scrollContainerRef.current;
        
        const updateWave = () => {
            if (!container) return;

            // 1. Smooth Scroll Interpolation (Momentum)
            const maxScroll = container.scrollWidth - container.offsetWidth;
            targetScrollRef.current = Math.max(0, Math.min(maxScroll, targetScrollRef.current));
            
            const scrollDiff = targetScrollRef.current - container.scrollLeft;
            if (Math.abs(scrollDiff) > 0.05 && !openingId) {
                container.scrollLeft += scrollDiff * 0.18; // Smoother but faster target following
                lastInternalScrollPos.current = container.scrollLeft;
            } else if (Math.abs(scrollDiff) <= 0.05 && !openingId) {
                container.scrollLeft = targetScrollRef.current;
                lastInternalScrollPos.current = container.scrollLeft;
            }
            
            if (openingId) {
                activityRef.current *= 0.8; 
            } else {
                const currentScroll = container.scrollLeft;
                const diff = Math.abs(currentScroll - lastScrollPos.current);
                lastScrollPos.current = currentScroll;
                
                // Sensitivity: faster reaction to movement
                const targetActivity = Math.min(1.8, diff * 0.2); 
                activityRef.current = activityRef.current * 0.8 + targetActivity * 0.2;
            }

            if (activityRef.current < 0.001) activityRef.current = 0;

            // --- Stable Scroll Audio Control ---
            if (!openingId) {
                if (!scrollPlayingRef.current) {
                    const played = soundManager.play('archiveScroll', { loop: true, volume: 0, stopExisting: true });
                    if (played) {
                        scrollPlayingRef.current = true;
                    }
                }
                
                // Sensitivity: modulate volume based on activity
                const volThreshold = 0.002; 
                if (scrollPlayingRef.current) {
                    // Reduce pitch modulation range to avoid deformation
                    // Volume: 0 to 0.65 based on movement
                    // Rate: 0.95 (slowest) to 1.10 (fastest) for subtler feel
                    const targetVolume = activityRef.current > volThreshold ? Math.min(0.65, activityRef.current * 0.6) : 0;
                    const targetRate = 0.95 + Math.min(0.15, activityRef.current * 0.1); 
                    
                    soundManager.setVolume('archiveScroll', targetVolume, true); 
                    soundManager.setPlaybackRate('archiveScroll', targetRate, true);
                }
            } else if (scrollPlayingRef.current) {
                // Fade out and stop when card is opened
                soundManager.setVolume('archiveScroll', 0, true);
                soundManager.stop('archiveScroll', true);
                scrollPlayingRef.current = false;
            }

            const viewportCenter = viewportWidthRef.current / 2;
            const scrollLeft = container.scrollLeft;
            
            // --- Center Alignment Detection for Tick Sound ---
            let closestIndex = -1;
            let minDistance = 9999;
            const tickSenseRadius = 60; // Larger sense area for robust detection

            // Re-cache cards if needed (rare)
            if (cardsRef.current.length === 0) {
                cardsRef.current = Array.from(container.querySelectorAll('.archive-card-wrapper'));
            }
            
            cardsRef.current.forEach((card: any, i: number) => {
                const cardId = card.getAttribute('data-id');
                if (cardId === openingId) return;

                const cardWidth = 110;
                const gap = 24; 
                const cardPosInContent = centerPadding + i * (cardWidth + gap) + cardWidth / 2;
                const cardCenter = cardPosInContent - scrollLeft;
                
                const distFromCenter = Math.abs(cardCenter - viewportCenter);
                
                const horizon = 700; 
                const proximity = Math.pow(Math.max(0, 1 - distFromCenter / horizon), 1.3); 
                const intensity = proximity * activityRef.current;
                
                const zTranslate = intensity * 480; 
                const scale = 1 + (intensity * 0.18); 
                const rotateY = (cardCenter - viewportCenter) * -0.15 * intensity; 
                
                const inner = card.querySelector('.archive-card-inner');
                if (inner) {
                    inner.style.transition = activityRef.current > 0.01 ? 'none' : 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                    inner.style.transform = `translate3d(0, 0, ${zTranslate}px) scale(${scale}) rotateY(${rotateY}deg)`;
                    
                    const img = inner.querySelector('img');
                    if (img) {
                        const activeFactor = Math.min(1.0, activityRef.current * 4.0); 
                        const colorIntensity = Math.pow(proximity, 1.5) * activeFactor;
                        
                        const grayscale = Math.max(0, 100 - (colorIntensity * 105));
                        const brightness = 35 + (colorIntensity * 65);
                        
                        img.style.filter = `grayscale(${grayscale}%) brightness(${brightness}%) contrast(105%)`;
                    }
                }
            });

            rafId = requestAnimationFrame(updateWave);
        };

        rafId = requestAnimationFrame(updateWave);
        return () => cancelAnimationFrame(rafId);
    }, [isOpen, openingId]);

    const handleCardClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if (openingId) return;

        // Play confirmation sound
        soundManager.play('confirm', { volume: 0.5 });

        setOpeningId(id);
        setIsTransitioning(true);
    };

    const handleExplore = (id: string) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedCaseId(id);
            setIsTransitioning(false);
            setOpeningId(null);
        }, 800);
    };

    if (!isOpen) return null;

    const selectedCase = items.find(item => item.id === (openingId || selectedCaseId));

    return (
        <div 
            onClick={() => {
                if (openingId) {
                    setOpeningId(null);
                    setIsTransitioning(false);
                }
            }}
            className={`relative w-full h-full font-sans overflow-hidden ${theme === 'retro' ? 'bg-[#EFE9E0] text-[#2D2D2D]' : 'bg-black text-white'} perspective-2000 transition-colors duration-1000 ${openingId ? 'cursor-zoom-out' : ''}`}>
            
            {theme === 'retro' && (
                <div className="absolute inset-0 pointer-events-none opacity-20 texture-paper animate-in fade-in duration-1000 z-0"></div>
            )}

            {/* Cinematic Background Typography (Split Letters) */}
            {(openingId || selectedCaseId) && selectedCase && (
                <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 transition-all duration-1000 ease-out ${openingId ? 'opacity-30 scale-100' : 'opacity-5 scale-95 blur-md'}`}>
                   <h1 className={`text-[35vw] font-black uppercase tracking-[-0.08em] mountain-title flex select-none ${theme === 'retro' ? 'text-[#8B261D]' : ''}`}>
                        {selectedCase.titleEn.split(' ')[0].split('').map((char, i) => (
                            <span 
                                key={i} 
                                className="inline-block transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)"
                                style={{ 
                                    transform: openingId ? 'translateZ(0) scale(1.1)' : 'translateZ(-500px) scale(0.5)',
                                    opacity: openingId ? 0.3 : 0,
                                    transitionDelay: `${i * 60}ms`
                                }}
                            >
                                {char}
                            </span>
                        ))}
                   </h1>
                </div>
            )}

            {/* Top-left Title Overlay (Restored Version) */}
            <div className={`absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start pointer-events-none z-50 ${theme === 'retro' ? 'text-[#8B261D]' : 'mix-blend-difference text-white'} transition-opacity duration-700 ${openingId ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none m-0.5">
                        {lang === 'CN' ? '主体观测档案' : 'SUBJECT ARCHIVE'}
                    </h1>
                    <div className="font-mono text-xs uppercase tracking-[0.3em] ml-1 mt-2 font-bold opacity-50">
                        VOL.001 / DECLASSIFIED
                    </div>
                </div>
            </div>


            {/* Main Scene: Native scroll with wave listener */}
            <div 
                ref={scrollContainerRef}
                className={`absolute inset-0 flex items-center overflow-x-auto overflow-y-hidden scrollbar-hide overscroll-contain perspective-2000 transition-opacity duration-1000 ${selectedCaseId ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                style={{ 
                    scrollPaddingLeft: `${centerPadding}px`,
                }}
            >
                <div 
                    ref={contentRef}
                    className="flex items-center gap-6 h-[500px] preserve-3d"
                    style={{
                        paddingLeft: `${centerPadding}px`,
                        paddingRight: `${centerPadding}px`,
                    }}
                >
                    {items.map((item, i) => {
                        const isOpening = openingId === item.id;
                        const isOtherOpening = openingId && !isOpening;

                        return (
                            <div
                                key={`${item.id}-${i}`}
                                data-id={item.id}
                                className={`archive-card-wrapper relative shrink-0 preserve-3d transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                    isOpening 
                                        ? 'z-[1000] w-[80vw] max-w-[800px] h-[45vw] max-h-[450px]' 
                                        : (isOtherOpening ? 'opacity-0 scale-75 blur-md w-[0px] h-[480px] gap-0 mx-[-20px]' : 'z-10 w-[110px] h-[480px]')
                                }`}
                                style={{
                                    transform: isOpening 
                                        ? `translate3d(18vw, -60px, 200px)` 
                                        : (hasEntered ? 'translate3d(0, 0, 0)' : `translate3d(${1000 + i * 200}px, 0, 0)`),
                                    transitionDelay: isOpening ? '0s' : (hasEntered ? '0s' : `${0.2 + i * 0.05}s`)
                                }}
                            >
                                     <div 
                                        className={`archive-card-inner w-full h-full relative cursor-pointer group preserve-3d transition-all duration-300 will-change-transform active:scale-95 ${isOpening ? 'cursor-default' : ''}`}
                                        onClick={(e) => handleCardClick(e, item.id)}
                                        onMouseEnter={() => {
                                            if (!openingId) {
                                                soundManager.play('archiveHover', { volume: 0.25, stopExisting: true });
                                            }
                                        }}
                                    >
                                        <style>{`
                                            @keyframes scanline {
                                                0% { transform: translateY(-100%); }
                                                100% { transform: translateY(100%); }
                                            }
                                            @keyframes crtFlicker {
                                                0% { opacity: 0.01; }
                                                5% { opacity: 0.05; }
                                                10% { opacity: 0.02; }
                                                15% { opacity: 0.06; }
                                                20% { opacity: 0.01; }
                                                100% { opacity: 0.02; }
                                            }
                                            .crt-overlay::before {
                                                content: "";
                                                position: absolute;
                                                inset: 0;
                                                background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                                                background-size: 100% 4px, 3px 100%;
                                                z-index: 20;
                                                pointer-events: none;
                                            }
                                            .scanline-beam {
                                                position: absolute;
                                                top: 0;
                                                left: 0;
                                                width: 100%;
                                                height: 100px;
                                                background: linear-gradient(to bottom, transparent, rgba(34, 211, 238, 0.15), transparent);
                                                z-index: 21;
                                                animation: scanline 4s linear infinite;
                                                pointer-events: none;
                                            }
                                            /* Mouse Hover Colorization */
                                            .archive-card-inner:hover img {
                                                filter: grayscale(0%) brightness(100%) !important;
                                                transition: filter 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
                                            }
                                        `}</style>
                                        
                                        {/* Image Container */}
                                        <div className={`w-full h-full relative overflow-hidden border ${theme === 'retro' ? 'border-[#8B261D]/10 bg-[#D8D2C5]/30' : 'border-white/5 bg-zinc-900'} shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backface-hidden transition-all duration-1000 ${isOpening ? 'rounded-lg' : 'rounded-sm'}`}>
                                            <div className="absolute inset-0 z-0">
                                                <img
                                                    src={item.imageUrl}
                                                    className={`w-full h-full object-cover transition-all duration-1000 ${isOpening ? 'scale-100 !grayscale-0 !brightness-100' : 'grayscale'}`}
                                                    style={{ filter: isOpening ? 'none' : 'grayscale(100%) brightness(35%) contrast(110%)' }}
                                                    alt={item.titleEn}
                                                />
                                            </div>

                                            {/* CRT & Scanner Effects - Only when opening/opened */}
                                            {isOpening && (
                                                <>
                                                    <div className={`absolute inset-0 z-[15] crt-overlay ${theme === 'retro' ? 'opacity-20 mix-blend-multiply' : 'opacity-40'}`}></div>
                                                    <div className={`absolute inset-0 z-[16] ${theme === 'retro' ? 'bg-[#8B261D]/10' : 'bg-black'} animate-[crtFlicker_0.15s_infinite] pointer-events-none`}></div>
                                                    <div className={`scanline-beam ${theme === 'retro' ? 'opacity-50' : 'opacity-100'}`}></div>
                                                    {/* Vignette */}
                                                    <div className={`absolute inset-x-0 inset-y-0 z-[22] pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.8)] ${theme === 'retro' ? 'opacity-0' : 'opacity-100'}`}></div>
                                                </>
                                            )}

                                            <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'retro' ? 'from-[#EFE9E0]/90 via-transparent' : 'from-black/80 via-transparent'} to-transparent z-10 pointer-events-none transition-opacity duration-1000 ${isOpening ? 'opacity-20' : 'opacity-100'}`}></div>

                                            {/* Card Info - Hidden when expanded */}
                                            <div className={`absolute inset-0 p-4 flex flex-col justify-between z-20 pointer-events-none ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'} transition-opacity duration-500 ${isOpening ? 'opacity-0' : 'opacity-100'}`}>
                                                <div className="text-[8px] font-mono tracking-[0.2em] font-bold opacity-30">
                                                    SERIAL_{1001 + i}
                                                </div>
                                                <div>
                                                    <h2 className="text-xs font-black uppercase tracking-tight leading-tight [writing-mode:vertical-lr] mb-2 group-hover:tracking-widest transition-all duration-500">
                                                        {lang === 'CN' ? item.titleCn : item.titleEn}
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Manual Navigation Arrows (For mouse users) */}
            {!openingId && !selectedCaseId && (
                <>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            targetScrollRef.current = Math.max(0, targetScrollRef.current - 600);
                        }}
                        className={`absolute left-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 backdrop-blur-md group pointer-events-auto ${theme === 'retro' ? 'border-[#8B261D]/20 bg-white/40 text-[#8B261D]/40 hover:bg-white/80 hover:text-[#8B261D]' : 'border-white/10 bg-black/40 text-white/40 hover:bg-white/10 hover:text-white'}`}
                        title="Scroll Left"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            const container = scrollContainerRef.current;
                            const maxScroll = container ? container.scrollWidth - container.offsetWidth : 9999;
                            targetScrollRef.current = Math.min(maxScroll, targetScrollRef.current + 600);
                        }}
                        className={`absolute right-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 backdrop-blur-sm group pointer-events-auto ${theme === 'retro' ? 'border-[#8B261D]/20 bg-white/40 text-[#8B261D]/40 hover:bg-white/80 hover:text-[#8B261D]' : 'border-white/10 bg-black/40 text-white/40 hover:bg-white/10 hover:text-white'}`}
                        title="Scroll Right"
                    >
                        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </>
            )}


            {/* Bottom UI - Expanded State Only */}
            {openingId && selectedCase && (
                <div className="absolute bottom-0 left-0 w-full p-10 md:p-14 flex items-end justify-between z-[2000] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className={`flex gap-16 text-[10px] font-bold uppercase tracking-[0.3em] ${theme === 'retro' ? 'text-[#8B261D]/50' : 'text-white/40'}`}>
                        <div className="flex flex-col gap-2">
                            <span className={`${theme === 'retro' ? 'text-[#8B261D]/30' : 'text-white/20'}`}>A — COMPLETED</span>
                            <span className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>{selectedCase.date}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className={`${theme === 'retro' ? 'text-[#8B261D]/30' : 'text-white/20'}`}>B — TYPE</span>
                            <span className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>{selectedCase.category}</span>
                        </div>
                        <div className="flex flex-col gap-2 hidden lg:flex">
                            <span className={`${theme === 'retro' ? 'text-[#8B261D]/30' : 'text-white/20'}`}>C — ROLE</span>
                            <span className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>SUBJECT OBSERVER</span>
                        </div>
                        <div className="flex flex-col gap-2 hidden lg:flex">
                            <span className={`${theme === 'retro' ? 'text-[#8B261D]/30' : 'text-white/20'}`}>D — CLIENT</span>
                            <span className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>ARCHIVE BUREAU</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                handleExplore(selectedCase.id);
                            }}
                            className={`group relative px-12 py-4 flex items-center gap-3 overflow-hidden ${theme === 'retro' ? 'bg-[#8B261D] text-[#EFE9E0] hover:bg-[#A83226]' : 'bg-white text-black'} font-black uppercase tracking-[0.4em] text-xs hover:px-14 transition-all duration-500`}
                        >
                            <span>Explore</span>
                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className={`text-[9px] font-mono tracking-widest ${theme === 'retro' ? 'text-[#8B261D]/30' : 'text-white/20'} uppercase`}>
                            Swipe to return
                        </div>
                    </div>

                    <div className={`hidden xl:flex gap-8 ${theme === 'retro' ? 'text-[#8B261D]/40' : 'text-white/30'}`}>
                        <Twitter size={16} className={`cursor-pointer transition-colors ${theme === 'retro' ? 'hover:text-[#8B261D]' : 'hover:text-white'}`} />
                        <Instagram size={16} className={`cursor-pointer transition-colors ${theme === 'retro' ? 'hover:text-[#8B261D]' : 'hover:text-white'}`} />
                        <Mail size={16} className={`cursor-pointer transition-colors ${theme === 'retro' ? 'hover:text-[#8B261D]' : 'hover:text-white'}`} />
                    </div>
                </div>
            )}

            {/* Archive Detail Modal */}
            {selectedCaseId && (
                <ArchiveDetailModal
                    isOpen={!!selectedCaseId}
                    onClose={() => setSelectedCaseId(null)}
                    caseData={ARCHIVE_CASES.find(c => c.id === selectedCaseId) || null}
                    lang={lang}
                    renderInPlace={true}
                />
            )}
        </div>
    );
};


