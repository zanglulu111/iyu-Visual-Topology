import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Activity, ArrowUpRight, ChevronLeft, ChevronRight, Eye, FileSearch } from 'lucide-react';
import { ARCHIVE_CASES, ArchiveCategory, CaseStudy } from './archiveCasesData';
import { ArchiveDetailModal } from './ArchiveDetailModal';
import { useTheme } from '../contexts/ThemeContext';
import { soundManager } from '../utils/soundManager';
import { persistence } from '../services/persistence';
import { splitTextToParagraphs } from '../services/desireArchiveService';
import * as geminiService from '../services/geminiService';
import type { SubjectDossier } from '../types';

interface ArchiveDirectoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    isFullScreen?: boolean;
}

const MIN_WHEEL_SIDE_PADDING = 28;
const WHEEL_GESTURE_IDLE_MS = 260;
const WHEEL_AXIS_SWITCH_RATIO = 2.35;
const WHEEL_SCROLL_MULTIPLIER = 1.18;
const WHEEL_SMALL_GESTURE_HOLD_MS = 260;
const ARCHIVE_FALLBACK_IMAGE = '/portal-assets/subject-archive-lower-1777901002241-light.webp';

const categoryMeta: Record<ArchiveCategory, {
    labelCn: string;
    labelEn: string;
    code: string;
    accent: string;
}> = {
    ALL: {
        labelCn: '全部',
        labelEn: 'All',
        code: 'ALL',
        accent: '#f2f2ec'
    },
    NEUROSIS: {
        labelCn: '神经症',
        labelEn: 'Neurosis',
        code: 'NEU',
        accent: '#b73a36'
    },
    PSYCHOSIS: {
        labelCn: '精神病',
        labelEn: 'Psychosis',
        code: 'PSY',
        accent: '#8f2e2d'
    },
    PERVERSION: {
        labelCn: '倒错',
        labelEn: 'Perversion',
        code: 'PER',
        accent: '#d8d4cc'
    },
    AUTISM: {
        labelCn: '孤独症',
        labelEn: 'Autism',
        code: 'AUT',
        accent: '#a9a9a2'
    },
    UNCLASSIFIED: {
        labelCn: '未定型',
        labelEn: 'Unclassified',
        code: 'UNC',
        accent: '#6f6b62'
    }
};

const categories: ArchiveCategory[] = ['ALL', 'NEUROSIS', 'PSYCHOSIS', 'PERVERSION', 'AUTISM', 'UNCLASSIFIED'];

export const ArchiveDirectoryModal: React.FC<ArchiveDirectoryModalProps> = ({
    isOpen,
    lang
}) => {
    const { theme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState<ArchiveCategory>('ALL');
    const [activeCaseId, setActiveCaseId] = useState<string | null>(null);
    const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
    const [hoverArmed, setHoverArmed] = useState(false);
    const [hasEntered, setHasEntered] = useState(false);
    const [trackEntered, setTrackEntered] = useState(false);
    const [centerIndex, setCenterIndex] = useState(0);
    const [centerPadding, setCenterPadding] = useState(MIN_WHEEL_SIDE_PADDING);
    const [subjectDossiers, setSubjectDossiers] = useState<SubjectDossier[]>([]);
    const [generatingAnalysisId, setGeneratingAnalysisId] = useState<string | null>(null);

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const archiveRootRef = useRef<HTMLDivElement>(null);
    const targetScrollRef = useRef(0);
    const lastScrollPos = useRef(0);
    const activityRef = useRef(0);
    const visualActivityRef = useRef(0);
    const viewportWidthRef = useRef(0);
    const cardsRef = useRef<HTMLElement[]>([]);
    const lastTickIndex = useRef(-1);
    const activeCaseIdRef = useRef<string | null>(null);
    const scrollPlayingRef = useRef(false);
    const wheelGestureRef = useRef<{ axis: 'x' | 'y' | null; lastAt: number }>({ axis: null, lastAt: 0 });
    const lastWheelInputAtRef = useRef(0);

    useEffect(() => {
        if (!isOpen) return;

        let cancelled = false;
        const loadSubjectDossiers = async () => {
            try {
                const dossiers = await persistence.getSubjectDossiers();
                if (!cancelled) setSubjectDossiers(dossiers);
            } catch (error) {
                console.error('Failed to load subject dossiers', error);
            }
        };

        loadSubjectDossiers();
        return () => {
            cancelled = true;
        };
    }, [isOpen]);

    const dossierCases = useMemo<CaseStudy[]>(() => {
        return subjectDossiers.map((dossier) => {
            const story = splitTextToParagraphs(dossier.story.content);
            const screenplay = splitTextToParagraphs(dossier.screenplay.content);

            return {
                id: dossier.id,
                titleCn: dossier.title,
                titleEn: dossier.titleEn || dossier.title,
                category: dossier.category,
                summaryCn: dossier.summary,
                summaryEn: dossier.summaryEn || dossier.summary,
                imageUrl: dossier.imageUrl || ARCHIVE_FALLBACK_IMAGE,
                date: (dossier.publishedAt || dossier.updatedAt || dossier.createdAt).slice(0, 10),
                sourceDossier: dossier,
                content: {
                    dna: {
                        parameters: [
                            `SOURCE: ${dossier.sourceProjectId || 'manual'}`,
                            `STATUS: ${dossier.status}`,
                            `CATEGORY: ${dossier.category}`,
                            `ASSETS: ${dossier.assets.characters.length} characters / ${dossier.assets.props.length} props / ${dossier.assets.scenes.length} scenes`
                        ],
                        authorStyle: '迷雾学派主体档案',
                        coreHook: dossier.summary
                    },
                    story: story.length > 0 ? story : [dossier.story.content || '故事正文待补全。'],
                    report: {
                        language: '简体中文',
                        diagnosis: dossier.category,
                        analyst: 'Visionary / Admin',
                        subjectState: dossier.status,
                        sections: [{
                            title: dossier.psychoanalysis.title,
                            body: dossier.psychoanalysis.content || '精神分析档案待补全。'
                        }],
                        conclusion: dossier.adminNotes || '该主体档案由欲望存档推送生成。',
                        verdict: dossier.status === 'published' ? '病历归档：[已发布]' : '病历归档：[草稿]'
                    },
                    assetGroups: dossier.assets,
                    screenplay: screenplay.length > 0 ? screenplay : [dossier.screenplay.content || '电影脚本待补全。']
                }
            };
        });
    }, [subjectDossiers]);

    const allCases = useMemo(() => [...dossierCases, ...ARCHIVE_CASES], [dossierCases]);

    const filteredCases = useMemo(() => {
        return selectedCategory === 'ALL'
            ? allCases
            : allCases.filter(item => item.category === selectedCategory);
    }, [allCases, selectedCategory]);

    const previewCase = filteredCases.find(item => item.id === activeCaseId) || filteredCases[centerIndex] || filteredCases[0];
    const selectedCase = allCases.find(item => item.id === selectedCaseId) || null;

    useEffect(() => {
        activeCaseIdRef.current = activeCaseId;
    }, [activeCaseId]);

    function getCardStep() {
        const cards = cardsRef.current;
        if (cards.length >= 2) {
            return Math.max(240, cards[1].offsetLeft - cards[0].offsetLeft);
        }

        const firstCard = scrollContainerRef.current?.querySelector('.subject-wheel-item') as HTMLElement | null;
        return firstCard ? firstCard.offsetWidth + 24 : 340;
    }

    useEffect(() => {
        if (!isOpen) return;

        soundManager.preload('archiveScroll', '/audio/archive-scroll.mp3');
        soundManager.preload('archiveHover', '/audio/archive-hover.mp3');
        const enterSoundReady = soundManager.preload('archiveEnter', '/audio/confirm-01.mp3');

        setTrackEntered(false);
        let cancelled = false;
        const entranceTimer = window.setTimeout(() => {
            setHasEntered(true);
            setTrackEntered(true);
            enterSoundReady.then(() => {
                if (!cancelled) {
                    soundManager.play('archiveEnter', { volume: 0.34, stopExisting: true });
                }
            });
        }, 160);

        return () => {
            cancelled = true;
            window.clearTimeout(entranceTimer);
            soundManager.stop('archiveScroll', true);
            soundManager.stop('archiveEnter', true);
            scrollPlayingRef.current = false;
            setHasEntered(false);
            setTrackEntered(false);
        };
    }, [isOpen]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        cardsRef.current = [];
        targetScrollRef.current = 0;
        lastScrollPos.current = 0;
        activityRef.current = 0;
        visualActivityRef.current = 0;
        lastWheelInputAtRef.current = 0;
        lastTickIndex.current = -1;
        wheelGestureRef.current = { axis: null, lastAt: 0 };
        setCenterIndex(0);
        setActiveCaseId(null);
        setHoverArmed(false);
        container.scrollLeft = 0;

        const updateSizing = () => {
            viewportWidthRef.current = container.offsetWidth;
            const firstCard = container.querySelector('.subject-wheel-item') as HTMLElement | null;
            const cardWidth = firstCard?.offsetWidth || 280;
            setCenterPadding(Math.max(MIN_WHEEL_SIDE_PADDING, (container.offsetWidth - cardWidth) / 2));
        };

        updateSizing();
        window.addEventListener('resize', updateSizing);
        return () => window.removeEventListener('resize', updateSizing);
    }, [filteredCases.length, selectedCategory]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!isOpen || !container || selectedCaseId) return;

        const handleWheel = (event: WheelEvent) => {
            const root = archiveRootRef.current;
            if (!root || !(event.target instanceof Node) || !root.contains(event.target)) {
                return;
            }

            const deltaUnit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? container.offsetWidth : 1;
            const deltaX = event.deltaX * deltaUnit;
            const deltaY = event.deltaY * deltaUnit;
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            const now = performance.now();
            const gesture = wheelGestureRef.current;

            if (now - gesture.lastAt > WHEEL_GESTURE_IDLE_MS) {
                gesture.axis = null;
            }

            if (!gesture.axis) {
                gesture.axis = absX > absY ? 'x' : 'y';
            } else {
                const currentAbs = gesture.axis === 'x' ? absX : absY;
                const otherAbs = gesture.axis === 'x' ? absY : absX;
                if (otherAbs > currentAbs * WHEEL_AXIS_SWITCH_RATIO) {
                    gesture.axis = gesture.axis === 'x' ? 'y' : 'x';
                }
            }

            gesture.lastAt = now;

            const rawDelta = gesture.axis === 'x' ? deltaX : deltaY;
            if (Math.abs(rawDelta) < 0.5) {
                event.preventDefault();
                return;
            }

            const maxScroll = Math.max(0, container.scrollWidth - container.offsetWidth);
            const edgeEpsilon = 2;
            const currentTarget = Math.max(0, Math.min(maxScroll, targetScrollRef.current));
            const atStart = currentTarget <= edgeEpsilon && container.scrollLeft <= edgeEpsilon;
            const atEnd = currentTarget >= maxScroll - edgeEpsilon && container.scrollLeft >= maxScroll - edgeEpsilon;
            const pushingPastStart = rawDelta < 0 && atStart;
            const pushingPastEnd = rawDelta > 0 && atEnd;

            if (pushingPastStart || pushingPastEnd) {
                targetScrollRef.current = pushingPastStart ? 0 : maxScroll;
                event.preventDefault();
                return;
            }

            const perEventLimit = Math.max(420, Math.min(960, getCardStep() * 1.42));
            const normalizedDelta = Math.max(-perEventLimit, Math.min(perEventLimit, rawDelta));
            targetScrollRef.current = Math.max(0, Math.min(maxScroll, currentTarget + normalizedDelta * WHEEL_SCROLL_MULTIPLIER));
            lastWheelInputAtRef.current = now;
            event.preventDefault();
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                targetScrollRef.current += getCardStep() * 2;
            } else if (event.key === 'ArrowLeft') {
                targetScrollRef.current -= getCardStep() * 2;
            }
        };

        let rafId = 0;

        const updateWheel = () => {
            const maxScroll = Math.max(0, container.scrollWidth - container.offsetWidth);
            targetScrollRef.current = Math.max(0, Math.min(maxScroll, targetScrollRef.current));

            const scrollDiff = targetScrollRef.current - container.scrollLeft;
            if (Math.abs(scrollDiff) > 0.05) {
                container.scrollLeft += scrollDiff * 0.18;
            } else {
                container.scrollLeft = targetScrollRef.current;
            }

            const currentScroll = container.scrollLeft;
            const diff = Math.abs(currentScroll - lastScrollPos.current);
            lastScrollPos.current = currentScroll;

            const now = performance.now();
            const recentSmallGesture = now - lastWheelInputAtRef.current < WHEEL_SMALL_GESTURE_HOLD_MS && activityRef.current < 0.34;
            const targetActivity = Math.max(recentSmallGesture ? 0.095 : 0, Math.min(1.65, diff * 0.18));
            const activityBlend = targetActivity > activityRef.current ? 0.24 : activityRef.current < 0.34 ? 0.09 : 0.22;
            activityRef.current = activityRef.current * (1 - activityBlend) + targetActivity * activityBlend;
            if (activityRef.current < 0.001) activityRef.current = 0;

            const visualTarget = Math.min(0.86, activityRef.current * 2.18);
            const visualBlend = visualTarget > visualActivityRef.current ? 0.16 : 0.07;
            visualActivityRef.current = visualActivityRef.current * (1 - visualBlend) + visualTarget * visualBlend;
            if (visualActivityRef.current < 0.0004) visualActivityRef.current = 0;

            const targetVolume = activityRef.current > 0.003 ? Math.min(0.42, activityRef.current * 0.42) : 0;
            if (targetVolume > 0) {
                if (!scrollPlayingRef.current) {
                    const played = soundManager.play('archiveScroll', { loop: true, volume: 0, stopExisting: true });
                    if (played) scrollPlayingRef.current = true;
                }

                if (scrollPlayingRef.current) {
                    const targetRate = 0.95 + Math.min(0.14, activityRef.current * 0.1);
                    soundManager.setVolume('archiveScroll', targetVolume, true);
                    soundManager.setPlaybackRate('archiveScroll', targetRate, true);
                }
            } else if (scrollPlayingRef.current) {
                soundManager.stop('archiveScroll', true);
                scrollPlayingRef.current = false;
            }

            const viewportCenter = viewportWidthRef.current / 2 || container.offsetWidth / 2;
            let closestIndex = 0;
            let minDistance = Number.POSITIVE_INFINITY;

            if (cardsRef.current.length !== filteredCases.length) {
                cardsRef.current = Array.from(container.querySelectorAll('.subject-wheel-item'));
            }

            cardsRef.current.forEach((card, index) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2 - currentScroll;
                const distance = Math.abs(cardCenter - viewportCenter);
                const signedOffset = (cardCenter - viewportCenter) / Math.max(420, viewportWidthRef.current * 0.34);
                const proximity = Math.pow(Math.max(0, 1 - distance / Math.max(610, viewportWidthRef.current * 0.38)), 1.08);
                const scrollVisual = visualActivityRef.current * (2 - visualActivityRef.current);
                const zTranslate = proximity * 164 * scrollVisual;
                const scale = 1 + proximity * 0.055 * scrollVisual;
                const lift = proximity * -12 * scrollVisual;
                const swayX = Math.max(-18, Math.min(18, signedOffset * -14 * proximity * scrollVisual));
                const rotateY = Math.max(-10, Math.min(10, signedOffset * -9.2 * proximity * scrollVisual));
                const opacity = 0.86 + (proximity * 0.14 * scrollVisual);
                const scrollBrightness = 0.88 + (proximity * 0.075 * Math.min(1, scrollVisual));
                const isHovered = activeCaseIdRef.current === filteredCases[index]?.id;
                const brightness = isHovered ? 1.16 : scrollBrightness;

                card.style.transition = 'none';
                card.style.transform = `translate3d(${swayX}px, ${lift}px, ${zTranslate}px) scale(${scale}) rotateY(${rotateY}deg)`;
                card.style.opacity = String(opacity);
                card.style.filter = `brightness(${brightness})`;
                card.style.zIndex = String(10 + Math.round(proximity * 80));

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (lastTickIndex.current !== closestIndex) {
                lastTickIndex.current = closestIndex;
                setCenterIndex(closestIndex);
            }

            rafId = requestAnimationFrame(updateWheel);
        };

        window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
        window.addEventListener('keydown', handleKeyDown);
        rafId = requestAnimationFrame(updateWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel, true);
            window.removeEventListener('keydown', handleKeyDown);
            cancelAnimationFrame(rafId);
            soundManager.stop('archiveScroll', true);
            scrollPlayingRef.current = false;
        };
    }, [filteredCases, isOpen, selectedCaseId]);

    if (!isOpen) return null;

    const handleCategoryChange = (category: ArchiveCategory) => {
        setSelectedCategory(category);
        setActiveCaseId(null);
        setHoverArmed(false);
    };

    const nudgeWheel = (direction: -1 | 1) => {
        const container = scrollContainerRef.current;
        const maxScroll = container ? Math.max(0, container.scrollWidth - container.offsetWidth) : 0;
        targetScrollRef.current = Math.max(0, Math.min(maxScroll, targetScrollRef.current + direction * getCardStep() * 2));
        setActiveCaseId(null);
        setHoverArmed(false);
    };

    const openCase = (caseId: string) => {
        const caseItem = allCases.find(item => item.id === caseId);
        if (!caseItem?.content) {
            setActiveCaseId(caseId);
            return;
        }
        if (archiveRootRef.current) {
            archiveRootRef.current.scrollLeft = 0;
            archiveRootRef.current.scrollTop = 0;
        }
        setSelectedCaseId(caseId);
    };

    const handleGeneratePsychoanalysis = async (caseItem: CaseStudy) => {
        const dossier = caseItem.sourceDossier;
        if (!dossier || generatingAnalysisId) return;

        setGeneratingAnalysisId(dossier.id);
        try {
            const sourceBlueprint = dossier.sourceBlueprint;
            const fieldState = sourceBlueprint?.generationFieldState || {};
            const synopsis = dossier.story.content || dossier.summary;
            const analysis = await geminiService.analyzePsychoStructure(fieldState, synopsis);
            if (!analysis) return;

            const nextDossier: SubjectDossier = {
                ...dossier,
                updatedAt: new Date().toISOString(),
                psychoanalysis: {
                    ...dossier.psychoanalysis,
                    title: dossier.psychoanalysis.title || '精神分析档案',
                    content: analysis
                }
            };
            await persistence.saveSubjectDossier(nextDossier);
            setSubjectDossiers(prev => prev.map(item => item.id === nextDossier.id ? nextDossier : item));
        } catch (error) {
            console.error('Failed to generate subject dossier psychoanalysis', error);
        } finally {
            setGeneratingAnalysisId(null);
        }
    };

    const activateCase = (caseId: string) => {
        if (!hoverArmed) {
            setHoverArmed(true);
        }

        if (activeCaseId !== caseId) {
            setActiveCaseId(caseId);
            soundManager.play('archiveHover', { volume: 0.18, stopExisting: true });
        }
    };

    return (
        <div ref={archiveRootRef} className={`subject-archive-root ${theme === 'retro' ? 'is-retro' : ''}`}>
            <style>{`
                .subject-archive-root {
                    --subject-serif: "Songti SC", "Noto Serif SC", "Source Han Serif SC", STSong, SimSun, serif;
                    --subject-mono: "Avenir Next", Inter, "Noto Sans SC", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    --subject-paper: #fff8ee;
                    --subject-paper-bright: #ffffff;
                    --subject-ink: #080808;
                    --subject-line: rgba(255,255,255,0.22);
                    --subject-red: #ff4f3f;
                    --subject-red-dark: #9e261f;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    min-height: 0;
                    overflow: hidden;
                    overscroll-behavior: none;
                    color: #fff8ee;
                    font-family: var(--subject-mono);
                    background:
                        radial-gradient(circle at 72% 18%, rgba(255,79,63,0.08), transparent 28%),
                        radial-gradient(circle at 74% 58%, rgba(255,248,238,0.024), transparent 34%),
                        radial-gradient(circle at 26% 44%, rgba(255,248,238,0.018), transparent 30%),
                        linear-gradient(180deg, #000 0%, #000 100%);
                    isolation: isolate;
                }

                .subject-archive-root::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    opacity: 0.09;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px);
                    background-size: 100% 25%, 12.5% 100%;
                    mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
                }

                .subject-archive-root::after {
                    content: "";
                    position: absolute;
                    inset: -16%;
                    pointer-events: none;
                    opacity: 0.028;
                    background:
                        repeating-radial-gradient(circle at 24% 42%, rgba(255,255,255,0.42) 0 0.55px, transparent 0.7px 2.2px),
                        repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 4px);
                    filter: blur(0.22px);
                    animation: subjectArchiveGrain 9s steps(3) infinite;
                }

                .subject-archive-lower-bg {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                    height: min(70dvh, 46rem);
                    pointer-events: none;
                    background:
                        radial-gradient(circle at 32% 42%, rgba(255,79,63,0.035), transparent 31%),
                        linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.03) 18%, rgba(0,0,0,0.04) 58%, rgba(0,0,0,0.5) 100%),
                        linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 40%, rgba(0,0,0,0.72) 100%);
                    opacity: 0.94;
                }

                .subject-archive-lower-bg::before,
                .subject-archive-lower-bg::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .subject-archive-lower-bg::before {
                    z-index: 0;
                    inset: -8% -16% -4% -8%;
                    opacity: 0.94;
                    background: url('/portal-assets/subject-archive-lower-1777901002241-light.webp') left bottom / min(78vw, 80rem) auto no-repeat;
                    filter: saturate(1.04) contrast(1.08) brightness(0.98);
                    -webkit-mask-image: radial-gradient(ellipse 68% 58% at 27% 86%, #000 0%, #000 36%, rgba(0,0,0,0.74) 50%, rgba(0,0,0,0.24) 66%, transparent 88%);
                    mask-image: radial-gradient(ellipse 68% 58% at 27% 86%, #000 0%, #000 36%, rgba(0,0,0,0.74) 50%, rgba(0,0,0,0.24) 66%, transparent 88%);
                }

                .subject-archive-lower-bg::after {
                    z-index: 2;
                    background:
                        radial-gradient(circle at 28% 42%, rgba(255,248,238,0.04), transparent 34%),
                        radial-gradient(circle at 42% 52%, rgba(255,79,63,0.035), transparent 36%),
                        linear-gradient(180deg, #000 0%, rgba(0,0,0,0.86) 8%, rgba(0,0,0,0.42) 24%, transparent 52%, rgba(0,0,0,0.45) 100%),
                        linear-gradient(90deg, rgba(0,0,0,0.34), transparent 18%, transparent 58%, rgba(0,0,0,0.58) 78%, #000 100%);
                }

                @keyframes subjectArchiveGrain {
                    0% { transform: translate3d(-1.2%, -0.8%, 0); }
                    33% { transform: translate3d(1%, 1.1%, 0); }
                    66% { transform: translate3d(-0.6%, 1.3%, 0); }
                    100% { transform: translate3d(0.9%, -1%, 0); }
                }

                .subject-archive-shell {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                    min-height: 0;
                    display: grid;
                    grid-template-rows: minmax(8.1rem, 0.52fr) minmax(23.1rem, 1.48fr) auto;
                    gap: clamp(0.62rem, 1.1dvh, 1.02rem);
                    padding: clamp(0.7rem, 1.38dvh, 1.14rem) clamp(1.25rem, 3vw, 4rem) clamp(0.58rem, 1.15dvh, 0.96rem);
                }

                .subject-archive-hero {
                    min-height: 0;
                    display: grid;
                    grid-template-columns: minmax(25rem, 1.05fr) minmax(18rem, 0.78fr);
                    gap: clamp(0.9rem, 1.75vw, 2.1rem);
                    align-items: end;
                }

                .subject-kicker {
                    display: flex;
                    align-items: center;
                    gap: 0.55rem;
                    color: rgba(255,255,255,0.62);
                    font-size: clamp(0.48rem, 0.52vw, 0.64rem);
                    letter-spacing: 0.24em;
                    text-transform: uppercase;
                    line-height: 1;
                }

                .subject-kicker-line {
                    width: clamp(2.6rem, 5vw, 5.8rem);
                    height: 1px;
                    background: linear-gradient(90deg, rgba(255,255,255,0.78), transparent);
                }

                .subject-title {
                    margin: clamp(0.44rem, 0.82dvh, 0.76rem) 0 0;
                    font-family: var(--subject-serif);
                    font-size: clamp(2.6rem, 4.35vw, 5.45rem);
                    font-weight: 900;
                    line-height: 0.95;
                    letter-spacing: 0.08em;
                    color: #f4f4ef;
                    text-shadow: 0 0 34px rgba(255,255,255,0.1), 0 14px 42px rgba(0,0,0,0.78);
                }

                .subject-subtitle {
                    display: grid;
                    gap: clamp(0.18rem, 0.36dvh, 0.32rem);
                    margin-top: clamp(0.78rem, 1.35dvh, 1.12rem);
                    max-width: min(52rem, 80vw);
                    color: rgba(255,255,255,0.76);
                }

                .subject-subtitle-cn {
                    font-family: var(--subject-serif);
                    font-size: clamp(0.68rem, 0.95vw, 1.12rem);
                    line-height: 1.15;
                    letter-spacing: 0.3em;
                }

                .subject-subtitle-en {
                    margin-top: clamp(0.42rem, 0.85dvh, 0.68rem);
                    color: rgba(255,255,255,0.58);
                    font-size: clamp(0.44rem, 0.6vw, 0.72rem);
                    line-height: 1.1;
                    letter-spacing: 0.28em;
                    text-transform: uppercase;
                }

                .subject-filter-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.48rem;
                    margin-top: clamp(0.52rem, 1dvh, 0.9rem);
                }

                .subject-filter {
                    position: relative;
                    height: clamp(1.66rem, 2.7dvh, 2.05rem);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.48rem;
                    padding: 0 0.8rem;
                    border: 1px solid rgba(255,255,255,0.18);
                    border-radius: 999px;
                    color: rgba(255,255,255,0.52);
                    background: rgba(255,255,255,0.035);
                    font-size: clamp(0.48rem, 0.55vw, 0.64rem);
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    transition: color 420ms ease, background 420ms ease, border-color 420ms ease, transform 420ms cubic-bezier(0.16, 1, 0.3, 1);
                }

                .subject-filter:hover,
                .subject-filter.is-selected {
                    transform: translateY(-1px);
                    color: #fff;
                    border-color: color-mix(in srgb, var(--filter-accent, #fff) 48%, rgba(255,255,255,0.54));
                    background:
                        linear-gradient(90deg, color-mix(in srgb, var(--filter-accent, #fff) 16%, transparent), rgba(255,255,255,0.08));
                }

                .subject-filter-dot {
                    width: 0.36rem;
                    height: 0.36rem;
                    border-radius: 999px;
                    background: var(--filter-accent, #fff);
                    box-shadow: 0 0 14px color-mix(in srgb, var(--filter-accent, #fff) 60%, transparent);
                }

                .subject-overview-panel {
                    min-height: 0;
                    align-self: stretch;
                    display: grid;
                    grid-template-rows: auto 1fr auto;
                    border: 1px solid rgba(255,255,255,0.18);
                    background:
                        linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.025)),
                        rgba(0,0,0,0.3);
                    backdrop-filter: blur(10px);
                    padding: clamp(0.68rem, 1.08vw, 1.05rem);
                    overflow: hidden;
                }

                .subject-overview-head,
                .subject-overview-foot {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    color: rgba(255,255,255,0.54);
                    font-size: clamp(0.48rem, 0.55vw, 0.64rem);
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                }

                .subject-preview-title {
                    margin: clamp(0.8rem, 1.4dvh, 1.2rem) 0 0;
                    font-family: var(--subject-serif);
                    font-size: clamp(1.08rem, 1.55vw, 2.05rem);
                    line-height: 1.18;
                    letter-spacing: 0.08em;
                    color: #fff;
                }

                .subject-preview-summary {
                    margin: clamp(0.58rem, 1dvh, 0.9rem) 0 0;
                    max-width: 34rem;
                    color: rgba(255,255,255,0.54);
                    font-family: var(--subject-serif);
                    font-size: clamp(0.68rem, 0.82vw, 0.98rem);
                    line-height: 1.7;
                    letter-spacing: 0.07em;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .subject-preview-meta {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 0.65rem;
                    margin-top: clamp(0.76rem, 1.35dvh, 1.1rem);
                }

                .subject-preview-meta div {
                    min-width: 0;
                    border-top: 1px solid rgba(255,255,255,0.16);
                    padding-top: 0.55rem;
                }

                .subject-preview-meta span {
                    display: block;
                    color: rgba(255,255,255,0.36);
                    font-size: clamp(0.42rem, 0.5vw, 0.58rem);
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                }

                .subject-preview-meta b {
                    display: block;
                    margin-top: 0.3rem;
                    color: rgba(255,255,255,0.84);
                    font-size: clamp(0.52rem, 0.62vw, 0.74rem);
                    letter-spacing: 0.08em;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .subject-card-section {
                    min-height: 0;
                    display: grid;
                    grid-template-rows: auto 1fr;
                    gap: clamp(0.42rem, 0.8dvh, 0.74rem);
                    transform: translateY(1.28rem);
                }

                .subject-section-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    color: rgba(255,255,255,0.48);
                    font-size: clamp(0.48rem, 0.54vw, 0.64rem);
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                }

                .subject-section-top-left {
                    display: flex;
                    align-items: center;
                    gap: 0.72rem;
                    min-width: 0;
                }

                .subject-section-top-left::after {
                    content: "";
                    width: clamp(4rem, 11vw, 13rem);
                    height: 1px;
                    background: linear-gradient(90deg, rgba(255,255,255,0.5), transparent);
                }

                .subject-pager {
                    display: flex;
                    align-items: center;
                    gap: 0.55rem;
                }

                .subject-pager button {
                    width: clamp(1.95rem, 2.45vw, 2.45rem);
                    height: clamp(1.95rem, 2.45vw, 2.45rem);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255,255,255,0.18);
                    border-radius: 999px;
                    color: rgba(255,255,255,0.62);
                    background: rgba(255,255,255,0.04);
                    transition: color 350ms ease, border-color 350ms ease, background 350ms ease, transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
                }

                .subject-pager button:hover:not(:disabled) {
                    color: #fff;
                    border-color: rgba(255,255,255,0.58);
                    background: rgba(255,255,255,0.1);
                    transform: translateY(-1px);
                }

                .subject-pager button:disabled {
                    opacity: 0.25;
                    cursor: not-allowed;
                }

                .subject-wheel-stage {
                    position: relative;
                    min-height: 0;
                    height: 100%;
                    overflow: visible;
                }

                .subject-wheel-viewport {
                    position: absolute;
                    inset: 0;
                    overflow-x: hidden;
                    overflow-y: hidden;
                    overscroll-behavior: none;
                    perspective: 2000px;
                    transform-style: preserve-3d;
                    scrollbar-width: none;
                }

                .subject-wheel-viewport::-webkit-scrollbar {
                    display: none;
                }

                .subject-case-track {
                    height: 100%;
                    min-height: 0;
                    display: flex;
                    align-items: center;
                    gap: clamp(0.88rem, 1.28vw, 1.5rem);
                    transform-style: preserve-3d;
                    padding-top: 0.24rem;
                    padding-bottom: 0.42rem;
                    opacity: 0;
                    transform: translate3d(42vw, 0, 0) scale(0.985);
                    will-change: transform, opacity;
                    transition:
                        transform 1450ms cubic-bezier(0.16, 1, 0.3, 1),
                        opacity 820ms ease;
                }

                .subject-case-track.has-entered {
                    opacity: 1;
                    transform: translate3d(0, 0, 0) scale(1);
                }

                .subject-wheel-item {
                    position: relative;
                    flex: 0 0 clamp(14.8rem, 16.4vw, 19.8rem);
                    width: clamp(14.8rem, 16.4vw, 19.8rem);
                    height: min(100%, clamp(23rem, 49dvh, 30.5rem));
                    min-height: 0;
                    transform-style: preserve-3d;
                    opacity: 0;
                    will-change: transform, opacity, filter;
                }

                .subject-wheel-item.has-entered {
                    opacity: 0.72;
                }

                .subject-wheel-nav {
                    position: absolute;
                    top: 50%;
                    z-index: 120;
                    width: clamp(2.2rem, 3vw, 3.05rem);
                    height: clamp(2.2rem, 3vw, 3.05rem);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255,255,255,0.17);
                    border-radius: 999px;
                    color: rgba(255,255,255,0.62);
                    background: rgba(0,0,0,0.38);
                    backdrop-filter: blur(10px);
                    transform: translateY(-50%);
                    transition: color 360ms ease, border-color 360ms ease, background 360ms ease, transform 360ms cubic-bezier(0.16, 1, 0.3, 1);
                }

                .subject-wheel-nav:hover {
                    color: #fff;
                    border-color: rgba(255,255,255,0.58);
                    background: rgba(255,255,255,0.1);
                    transform: translateY(-50%) scale(1.04);
                }

                .subject-wheel-nav-left {
                    left: clamp(0.2rem, 0.8vw, 0.9rem);
                }

                .subject-wheel-nav-right {
                    right: clamp(0.2rem, 0.8vw, 0.9rem);
                }

                .subject-case-card {
                    --case-accent: #f2f2ec;
                    position: relative;
                    min-width: 0;
                    min-height: 0;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    border: 1px solid rgba(14,14,13,0.48);
                    border-radius: 0.32rem;
                    padding: clamp(0.58rem, 0.72vw, 0.86rem);
                    color: var(--subject-ink);
                    background:
                        linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.16) 44%, rgba(0,0,0,0.035)),
                        radial-gradient(circle at 22% 8%, rgba(255,255,255,0.88), transparent 28%),
                        var(--subject-paper);
                    box-shadow:
                        inset 0 0 0 0.17rem rgba(255,255,255,0.66),
                        inset 0 0 0 0.25rem rgba(0,0,0,0.14),
                        0 1.4rem 3rem rgba(0,0,0,0.46);
                    transform: translate3d(0, 0, 0) scale(1);
                    transform-origin: center center;
                    will-change: transform, filter, box-shadow;
                    transition:
                        transform 1080ms cubic-bezier(0.16, 1, 0.3, 1),
                        box-shadow 1080ms cubic-bezier(0.16, 1, 0.3, 1),
                        filter 920ms ease,
                        border-color 760ms ease;
                }

                .subject-case-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    opacity: 0.11;
                    background:
                        repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0 1px, transparent 1px 3px),
                        radial-gradient(circle at 16% 20%, rgba(255,255,255,0.8), transparent 27%);
                    mix-blend-mode: multiply;
                }

                .subject-case-card.is-active {
                    z-index: 5;
                    transform: translate3d(0, -0.62rem, 68px) scale(1.065);
                    filter: brightness(1.045);
                    border-color: color-mix(in srgb, var(--case-accent) 50%, rgba(14,14,13,0.44));
                    box-shadow:
                        inset 0 0 0 0.17rem rgba(255,255,255,0.78),
                        inset 0 0 0 0.25rem rgba(0,0,0,0.18),
                        0 2.35rem 6.5rem rgba(0,0,0,0.68),
                        0 0 0 1px rgba(255,255,255,0.22),
                        -1px 0 0 rgba(183,58,54,0.28),
                        1px 0 0 rgba(255,255,255,0.18);
                }

                .subject-card-corner {
                    position: absolute;
                    z-index: 4;
                    width: 0.78rem;
                    height: 0.78rem;
                    opacity: 0.38;
                    border-color: rgba(0,0,0,0.45);
                    transition: opacity 520ms ease, border-color 520ms ease, transform 760ms cubic-bezier(0.16, 1, 0.3, 1);
                }

                .subject-card-corner-tl { left: 0.68rem; top: 0.68rem; border-left: 1px solid; border-top: 1px solid; }
                .subject-card-corner-tr { right: 0.68rem; top: 0.68rem; border-right: 1px solid; border-top: 1px solid; }
                .subject-card-corner-bl { left: 0.68rem; bottom: 0.68rem; border-left: 1px solid; border-bottom: 1px solid; }
                .subject-card-corner-br { right: 0.68rem; bottom: 0.68rem; border-right: 1px solid; border-bottom: 1px solid; }

                .subject-case-card.is-active .subject-card-corner {
                    opacity: 0.92;
                    border-color: color-mix(in srgb, var(--case-accent) 64%, #000);
                }

                .subject-card-meta {
                    position: relative;
                    z-index: 3;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.7rem;
                    min-height: clamp(1.45rem, 2.45dvh, 2.05rem);
                    padding: 0 0.3rem;
                    border-bottom: 1px solid rgba(0,0,0,0.2);
                    color: rgba(0,0,0,0.68);
                    font-size: clamp(0.48rem, 0.56vw, 0.66rem);
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    transition: color 520ms ease, border-color 520ms ease;
                }

                .subject-case-card.is-active .subject-card-meta {
                    color: color-mix(in srgb, var(--case-accent) 36%, #050505);
                    border-bottom-color: color-mix(in srgb, var(--case-accent) 42%, rgba(0,0,0,0.22));
                }

                .subject-card-image {
                    position: relative;
                    z-index: 3;
                    aspect-ratio: 16 / 9;
                    overflow: hidden;
                    margin-top: clamp(0.56rem, 0.9dvh, 0.78rem);
                    border: 1px solid rgba(0,0,0,0.22);
                    background: #0d0d0d;
                }

                .subject-card-image img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    filter: grayscale(0.22) saturate(1.04) contrast(1.22) brightness(0.92);
                    transform: scale(1.02);
                    transition: transform 980ms cubic-bezier(0.16, 1, 0.3, 1), filter 980ms ease;
                }

                .subject-case-card.is-active .subject-card-image img {
                    transform: scale(1.055);
                    filter: grayscale(0.04) saturate(1.12) contrast(1.22) brightness(1.09);
                }

                .subject-card-image::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    background:
                        linear-gradient(90deg, rgba(255,79,63,0.13), transparent 14%, transparent 86%, rgba(255,248,238,0.06)),
                        linear-gradient(180deg, transparent, rgba(0,0,0,0.2));
                    opacity: 0;
                    transition: opacity 520ms ease;
                    mix-blend-mode: screen;
                }

                .subject-case-card.is-active .subject-card-image::after {
                    opacity: 0.7;
                }

                .subject-card-body {
                    position: relative;
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    min-height: 0;
                    flex: 1;
                    padding: clamp(0.65rem, 1dvh, 0.95rem) 0.28rem 0;
                }

                .subject-card-title-cn {
                    font-family: var(--subject-serif);
                    font-size: clamp(1rem, 1.16vw, 1.45rem);
                    font-weight: 700;
                    line-height: 1.12;
                    letter-spacing: 0.11em;
                    color: #10100f;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    transition: font-size 860ms cubic-bezier(0.16, 1, 0.3, 1), line-height 860ms cubic-bezier(0.16, 1, 0.3, 1);
                }

                .subject-card-title-en {
                    margin-top: 0.44rem;
                    color: rgba(0,0,0,0.58);
                    font-size: clamp(0.46rem, 0.55vw, 0.66rem);
                    line-height: 1.2;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    transition: color 760ms ease, font-size 860ms cubic-bezier(0.16, 1, 0.3, 1), line-height 860ms cubic-bezier(0.16, 1, 0.3, 1);
                }

                .subject-case-card.is-active .subject-card-title-cn {
                    display: block;
                    overflow: visible;
                    -webkit-line-clamp: unset;
                    font-size: clamp(1.02rem, 1.2vw, 1.5rem);
                    line-height: 1.18;
                }

                .subject-case-card.is-active .subject-card-title-en {
                    display: block;
                    overflow: visible;
                    -webkit-line-clamp: unset;
                    line-height: 1.28;
                    color: color-mix(in srgb, var(--case-accent) 36%, #050505);
                }

                .subject-card-summary {
                    margin: clamp(0.56rem, 0.9dvh, 0.8rem) 0 0;
                    color: rgba(0,0,0,0.62);
                    font-family: var(--subject-serif);
                    font-size: clamp(0.63rem, 0.74vw, 0.9rem);
                    line-height: 1.62;
                    letter-spacing: 0.045em;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    transition: opacity 760ms ease, -webkit-line-clamp 760ms ease;
                }

                .subject-case-card.is-active .subject-card-summary {
                    -webkit-line-clamp: 2;
                    opacity: 0.78;
                }

                .subject-card-signal {
                    position: relative;
                    z-index: 3;
                    margin-top: auto;
                    padding: clamp(0.5rem, 0.8dvh, 0.72rem) 0.28rem 0.1rem;
                    color: rgba(0,0,0,0.34);
                    transition: color 520ms ease;
                }

                .subject-card-signal svg {
                    display: block;
                    width: 100%;
                    height: clamp(1.05rem, 2.05dvh, 1.55rem);
                    overflow: visible;
                }

                .subject-card-signal path {
                    fill: none;
                    stroke: currentColor;
                    stroke-width: 0.9;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-dasharray: 100;
                    stroke-dashoffset: 62;
                    transition: stroke 520ms ease;
                }

                .subject-case-card.is-active .subject-card-signal {
                    color: color-mix(in srgb, var(--case-accent) 34%, #050505);
                }

                .subject-case-card.is-active .subject-card-signal path {
                    animation: subjectArchiveSignal 1120ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                @keyframes subjectArchiveSignal {
                    to { stroke-dashoffset: 0; }
                }

                .subject-card-open {
                    position: relative;
                    z-index: 3;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.8rem;
                    margin-top: clamp(0.45rem, 0.72dvh, 0.66rem);
                    padding-top: clamp(0.42rem, 0.72dvh, 0.62rem);
                    border-top: 1px solid rgba(0,0,0,0.18);
                    color: rgba(0,0,0,0.68);
                    font-size: clamp(0.48rem, 0.56vw, 0.66rem);
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    transition: color 520ms ease, border-color 520ms ease;
                }

                .subject-case-card.is-active .subject-card-open {
                    color: #080808;
                    border-top-color: rgba(0,0,0,0.32);
                }

                .subject-card-open svg {
                    transition: transform 420ms cubic-bezier(0.16, 1, 0.3, 1);
                }

                .subject-case-card.is-active .subject-card-open svg {
                    transform: translate3d(0.16rem, -0.16rem, 0);
                }

                .subject-archive-footer {
                    display: grid;
                    grid-template-columns: minmax(14rem, 1fr) minmax(14rem, 0.72fr) minmax(14rem, 1fr);
                    align-items: center;
                    gap: 1rem;
                    color: rgba(255,255,255,0.52);
                    font-size: clamp(0.46rem, 0.54vw, 0.64rem);
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                }

                .subject-footer-center {
                    justify-self: center;
                    display: flex;
                    align-items: center;
                    gap: 0.72rem;
                    white-space: nowrap;
                }

                .subject-footer-center::before,
                .subject-footer-center::after {
                    content: "";
                    width: clamp(1.8rem, 4vw, 4.8rem);
                    height: 1px;
                    background: rgba(255,255,255,0.24);
                }

                .subject-footer-right {
                    justify-self: end;
                    color: rgba(255,255,255,0.35);
                }

                .subject-detail-layer {
                    position: absolute;
                    inset: 0;
                    z-index: 50;
                    background: #000;
                    animation: subjectArchiveDetailIn 620ms cubic-bezier(0.16, 1, 0.3, 1) both;
                }

                @keyframes subjectArchiveDetailIn {
                    from { opacity: 0; transform: translate3d(3rem, 0, 0); }
                    to { opacity: 1; transform: translate3d(0, 0, 0); }
                }

                .subject-archive-root.is-retro {
                    --subject-red: #8B261D;
                    --subject-red-dark: #6D1E16;
                    --subject-line: rgba(139,38,29,0.16);
                    background: #f2f0ea;
                    color: #161512;
                }

                .subject-archive-root.is-retro::before,
                .subject-archive-root.is-retro::after {
                    opacity: 0.08;
                }

                .subject-archive-root.is-retro .subject-title,
                .subject-archive-root.is-retro .subject-preview-title {
                    color: #14120f;
                    text-shadow: none;
                }

                .subject-archive-root.is-retro .subject-kicker,
                .subject-archive-root.is-retro .subject-subtitle,
                .subject-archive-root.is-retro .subject-subtitle-en,
                .subject-archive-root.is-retro .subject-overview-head,
                .subject-archive-root.is-retro .subject-overview-foot,
                .subject-archive-root.is-retro .subject-section-top,
                .subject-archive-root.is-retro .subject-archive-footer {
                    color: rgba(20,18,15,0.62);
                }

                .subject-archive-root.is-retro .subject-subtitle-cn,
                .subject-archive-root.is-retro .subject-preview-summary {
                    color: rgba(20,18,15,0.68);
                }

                .subject-archive-root.is-retro .subject-overview-panel {
                    border-color: rgba(20,18,15,0.16);
                    background: rgba(255,255,255,0.44);
                }

                .subject-archive-root.is-retro .subject-archive-lower-bg {
                    opacity: 0.58;
                    background:
                        radial-gradient(circle at 32% 42%, rgba(139,38,29,0.034), transparent 31%),
                        linear-gradient(180deg, rgba(255,252,246,0) 0%, rgba(255,252,246,0.06) 22%, rgba(239,233,223,0.26) 62%, rgba(239,233,223,0.58) 100%),
                        linear-gradient(90deg, rgba(239,233,223,0.12) 0%, rgba(239,233,223,0.03) 40%, rgba(139,38,29,0.08) 100%);
                }

                .subject-archive-root.is-retro .subject-archive-lower-bg::before {
                    opacity: 0.28;
                    filter: grayscale(0.9) sepia(0.18) saturate(0.76) contrast(0.82) brightness(1.18);
                    -webkit-mask-image: radial-gradient(ellipse 68% 58% at 27% 86%, #000 0%, #000 32%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.14) 66%, transparent 88%);
                    mask-image: radial-gradient(ellipse 68% 58% at 27% 86%, #000 0%, #000 32%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.14) 66%, transparent 88%);
                }

                .subject-archive-root.is-retro .subject-archive-lower-bg::after {
                    background:
                        radial-gradient(circle at 28% 42%, rgba(255,252,246,0.22), transparent 34%),
                        radial-gradient(circle at 42% 52%, rgba(139,38,29,0.028), transparent 36%),
                        linear-gradient(180deg, rgba(255,252,246,0) 0%, rgba(239,233,223,0.1) 18%, rgba(239,233,223,0.24) 52%, rgba(239,233,223,0.48) 100%),
                        linear-gradient(90deg, rgba(239,233,223,0.3), transparent 18%, transparent 60%, rgba(139,38,29,0.065) 78%, rgba(239,233,223,0.42) 100%);
                }

                .subject-archive-root.is-retro .subject-kicker-line,
                .subject-archive-root.is-retro .subject-section-top-left::after,
                .subject-archive-root.is-retro .subject-footer-center::before,
                .subject-archive-root.is-retro .subject-footer-center::after {
                    background: linear-gradient(90deg, rgba(139,38,29,0.34), transparent);
                }

                .subject-archive-root.is-retro .subject-filter {
                    color: rgba(54,32,25,0.66);
                    border-color: rgba(139,38,29,0.16);
                    background: rgba(255,252,246,0.58);
                    box-shadow: 0 8px 18px rgba(92,65,38,0.05);
                }

                .subject-archive-root.is-retro .subject-filter:hover,
                .subject-archive-root.is-retro .subject-filter.is-selected {
                    color: #251916;
                    border-color: rgba(139,38,29,0.36);
                    background:
                        linear-gradient(180deg, rgba(255,252,246,0.96), rgba(246,240,231,0.84));
                }

                .subject-archive-root.is-retro .subject-filter-dot {
                    box-shadow: none;
                }

                .subject-archive-root.is-retro .subject-pager button,
                .subject-archive-root.is-retro .subject-wheel-nav {
                    color: #251916;
                    border-color: rgba(139,38,29,0.16);
                    background: rgba(255,252,246,0.82);
                    box-shadow: 0 8px 20px rgba(92,65,38,0.08);
                    backdrop-filter: none;
                }

                .subject-archive-root.is-retro .subject-pager button:hover:not(:disabled),
                .subject-archive-root.is-retro .subject-wheel-nav:hover {
                    color: #8B261D;
                    border-color: rgba(139,38,29,0.34);
                    background: rgba(255,252,246,0.96);
                }

                .subject-archive-root.is-retro .subject-case-card {
                    border-color: rgba(37,25,22,0.18);
                    background:
                        linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,255,255,0.3) 44%, rgba(139,38,29,0.02)),
                        radial-gradient(circle at 22% 8%, rgba(255,255,255,0.92), transparent 28%),
                        var(--subject-paper);
                    box-shadow:
                        inset 0 0 0 0.17rem rgba(255,255,255,0.72),
                        inset 0 0 0 0.25rem rgba(139,38,29,0.09),
                        0 1.1rem 2.4rem rgba(92,65,38,0.14);
                }

                .subject-archive-root.is-retro .subject-case-card::before {
                    opacity: 0.06;
                }

                .subject-archive-root.is-retro .subject-case-card.is-active {
                    filter: brightness(1.01);
                    border-color: rgba(139,38,29,0.36);
                    box-shadow:
                        inset 0 0 0 0.17rem rgba(255,255,255,0.78),
                        inset 0 0 0 0.25rem rgba(139,38,29,0.12),
                        0 1.55rem 3.2rem rgba(92,65,38,0.18),
                        0 0 0 1px rgba(139,38,29,0.1);
                }

                .subject-archive-root.is-retro .subject-card-corner {
                    border-color: rgba(37,25,22,0.22);
                }

                .subject-archive-root.is-retro .subject-case-card.is-active .subject-card-corner {
                    border-color: rgba(139,38,29,0.46);
                }

                .subject-archive-root.is-retro .subject-card-image {
                    background: rgba(255,252,246,0.56);
                    border-color: rgba(139,38,29,0.16);
                }

                .subject-archive-root.is-retro .subject-card-image img {
                    filter: grayscale(0.34) sepia(0.14) saturate(0.86) contrast(1.02) brightness(1.04);
                }

                .subject-archive-root.is-retro .subject-case-card.is-active .subject-card-image img {
                    filter: grayscale(0.18) sepia(0.12) saturate(0.92) contrast(1.04) brightness(1.08);
                }

                .subject-archive-root.is-retro .subject-card-image::after {
                    background:
                        linear-gradient(90deg, rgba(139,38,29,0.09), transparent 14%, transparent 86%, rgba(255,252,246,0.12)),
                        linear-gradient(180deg, transparent, rgba(37,25,22,0.06));
                    mix-blend-mode: multiply;
                }

                .subject-archive-root.is-retro .subject-card-meta,
                .subject-archive-root.is-retro .subject-card-open {
                    border-color: rgba(139,38,29,0.16);
                    color: rgba(37,25,22,0.66);
                }

                .subject-archive-root.is-retro .subject-case-card.is-active .subject-card-meta,
                .subject-archive-root.is-retro .subject-case-card.is-active .subject-card-open,
                .subject-archive-root.is-retro .subject-case-card.is-active .subject-card-signal {
                    color: #8B261D;
                    border-color: rgba(139,38,29,0.24);
                }

                .subject-archive-root.is-retro .subject-detail-layer {
                    background: rgba(239,233,223,0.96);
                }

                @media (max-height: 860px) {
                    .subject-archive-shell {
                        grid-template-rows: minmax(6rem, 0.36fr) minmax(22rem, 1.58fr) auto;
                        gap: 0.48rem;
                        padding-top: 0.54rem;
                        padding-bottom: 0.54rem;
                    }

                    .subject-title {
                        font-size: clamp(2.2rem, 4vw, 4.9rem);
                    }

                    .subject-subtitle {
                        gap: 0.18rem;
                        margin-top: 0.52rem;
                    }

                    .subject-filter-row {
                        margin-top: 0.54rem;
                    }

                    .subject-preview-summary {
                        -webkit-line-clamp: 2;
                    }

                    .subject-card-summary {
                        -webkit-line-clamp: 2;
                    }

                    .subject-wheel-item {
                        flex-basis: clamp(13.8rem, 15.6vw, 18.4rem);
                        width: clamp(13.8rem, 15.6vw, 18.4rem);
                        height: min(100%, clamp(20.8rem, 48dvh, 26.8rem));
                    }
                }

                @media (max-width: 1180px) {
                    .subject-archive-hero {
                        grid-template-columns: 1fr;
                    }

                    .subject-overview-panel {
                        display: none;
                    }

                    .subject-wheel-item {
                        flex-basis: clamp(14.2rem, 28vw, 18rem);
                        width: clamp(14.2rem, 28vw, 18rem);
                    }
                }
            `}</style>

            <div className="subject-archive-lower-bg" aria-hidden="true" />

            <main className="subject-archive-shell">
                <section className="subject-archive-hero">
                    <div>
                        <div className="subject-kicker">
                            <FileSearch size={14} />
                            <span>VOL.001 / DECLASSIFIED</span>
                            <span className="subject-kicker-line" />
                        </div>
                        <h1 className="subject-title">
                            {lang === 'CN' ? '主体观测档案' : 'Subject Archive'}
                        </h1>
                        <div className="subject-subtitle">
                            <div className="subject-subtitle-cn">
                                {lang === 'CN'
                                    ? '把人物、症状与影像裂缝重新归档：每一份档案都不是角色介绍，而是一种主体结构的显影。'
                                    : 'A cinematic index of subjects, symptoms, and the fissures through which images begin to name us.'}
                            </div>
                            <div className="subject-subtitle-en">
                                {lang === 'CN'
                                    ? 'Subject files are not biographies. They are clinical cuts where desire, language and cinema expose a structure.'
                                    : 'Not biographies, but clinical cuts where desire, language, and cinema expose a structure.'}
                            </div>
                        </div>

                        <div className="subject-filter-row" aria-label={lang === 'CN' ? '档案分类' : 'Archive categories'}>
                            {categories.map(category => {
                                const meta = categoryMeta[category];
                                const count = category === 'ALL'
                                    ? allCases.length
                                    : allCases.filter(item => item.category === category).length;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => handleCategoryChange(category)}
                                        className={`subject-filter ${selectedCategory === category ? 'is-selected' : ''}`}
                                        style={{ '--filter-accent': meta.accent } as React.CSSProperties}
                                    >
                                        <span className="subject-filter-dot" />
                                        <span>{lang === 'CN' ? meta.labelCn : meta.labelEn}</span>
                                        <span>{String(count).padStart(2, '0')}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {previewCase && (
                        <aside className="subject-overview-panel" aria-label={lang === 'CN' ? '当前档案预览' : 'Current archive preview'}>
                            <div className="subject-overview-head">
                                <span>Observation preview</span>
                                <Eye size={14} />
                            </div>
                            <div>
                                <h2 className="subject-preview-title">
                                    {lang === 'CN' ? previewCase.titleCn : previewCase.titleEn}
                                </h2>
                                <p className="subject-preview-summary">
                                    {lang === 'CN' ? previewCase.summaryCn : previewCase.summaryEn}
                                </p>
                                <div className="subject-preview-meta">
                                    <div>
                                        <span>Serial</span>
                                        <b>{previewCase.id.toUpperCase()}</b>
                                    </div>
                                    <div>
                                        <span>Type</span>
                                        <b>{categoryMeta[previewCase.category].code}</b>
                                    </div>
                                    <div>
                                        <span>Date</span>
                                        <b>{previewCase.date}</b>
                                    </div>
                                </div>
                            </div>
                            <div className="subject-overview-foot">
                                <span>Hover to inspect / click to open</span>
                                <Activity size={14} />
                            </div>
                        </aside>
                    )}
                </section>

                <section className="subject-card-section">
                    <div className="subject-section-top">
                        <div className="subject-section-top-left">
                            <span>{lang === 'CN' ? '临床索引' : 'Clinical index'}</span>
                            <span>{String(centerIndex + 1).padStart(2, '0')} / {String(filteredCases.length).padStart(2, '0')}</span>
                        </div>
                        <div className="subject-pager">
                            <span>{lang === 'CN' ? '滚轮浏览' : 'Wheel scan'}</span>
                            <button
                                type="button"
                                onClick={() => nudgeWheel(-1)}
                                aria-label={lang === 'CN' ? '上一组档案' : 'Previous archive set'}
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <button
                                type="button"
                                onClick={() => nudgeWheel(1)}
                                aria-label={lang === 'CN' ? '下一组档案' : 'Next archive set'}
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="subject-wheel-stage">
                        <button
                            type="button"
                            className="subject-wheel-nav subject-wheel-nav-left"
                            onClick={() => nudgeWheel(-1)}
                            aria-label={lang === 'CN' ? '向左滑动档案' : 'Scroll archive left'}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div
                            ref={scrollContainerRef}
                            className="subject-wheel-viewport"
                            onMouseLeave={() => setActiveCaseId(null)}
                        >
                            <div
                                className={`subject-case-track ${trackEntered ? 'has-entered' : ''}`}
                                style={{
                                    paddingLeft: `${centerPadding}px`,
                                    paddingRight: `${centerPadding}px`
                                }}
                            >
                                {filteredCases.map((item, index) => {
                                    const meta = categoryMeta[item.category];
                                    return (
                                        <div
                                            key={item.id}
                                            data-id={item.id}
                                            className={`subject-wheel-item ${hasEntered ? 'has-entered' : ''}`}
                                        >
                                            <button
                                                type="button"
                                                className={`subject-case-card ${hoverArmed && activeCaseId === item.id ? 'is-active' : ''}`}
                                                style={{ '--case-accent': meta.accent } as React.CSSProperties}
                                                onMouseEnter={() => {
                                                    if (hoverArmed) {
                                                        activateCase(item.id);
                                                    }
                                                }}
                                                onMouseMove={() => activateCase(item.id)}
                                                onClick={() => openCase(item.id)}
                                            >
                                                <span className="subject-card-corner subject-card-corner-tl" />
                                                <span className="subject-card-corner subject-card-corner-tr" />
                                                <span className="subject-card-corner subject-card-corner-bl" />
                                                <span className="subject-card-corner subject-card-corner-br" />

                                                <div className="subject-card-meta">
                                                    <span>SERIAL_{String(index + 1001).padStart(4, '0')}</span>
                                                    <span>{meta.code}</span>
                                                </div>

                                                <div className="subject-card-image">
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={lang === 'CN' ? item.titleCn : item.titleEn}
                                                        loading={index < 6 ? 'eager' : 'lazy'}
                                                        onError={(event) => {
                                                            (event.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900';
                                                        }}
                                                    />
                                                </div>

                                                <div className="subject-card-body">
                                                    <div className="subject-card-title-cn">
                                                        {lang === 'CN' ? item.titleCn : item.titleEn}
                                                    </div>
                                                    <div className="subject-card-title-en">
                                                        {lang === 'CN' ? item.titleEn : item.titleCn}
                                                    </div>
                                                    <p className="subject-card-summary">
                                                        {lang === 'CN' ? item.summaryCn : item.summaryEn}
                                                    </p>
                                                    <div className="subject-card-signal" aria-hidden="true">
                                                        <svg viewBox="0 0 120 24" preserveAspectRatio="none">
                                                            <path pathLength="100" d="M0 13 H22 L26 13 L29 7 L33 18 L37 13 H56 L60 13 L64 4 L68 20 L72 13 H92 L96 13 L99 9 L103 16 L107 13 H120" />
                                                        </svg>
                                                    </div>
                                                    <div className="subject-card-open">
                                                        <span>{item.content ? (lang === 'CN' ? '打开档案' : 'Open file') : (lang === 'CN' ? '解封中' : 'Pending')}</span>
                                                        <ArrowUpRight size={15} />
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="subject-wheel-nav subject-wheel-nav-right"
                            onClick={() => nudgeWheel(1)}
                            aria-label={lang === 'CN' ? '向右滑动档案' : 'Scroll archive right'}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </section>

                <footer className="subject-archive-footer">
                    <div>{lang === 'CN' ? '主体不是被观看的人，而是观看关系留下的切口。' : 'The subject is the cut left by the act of looking.'}</div>
                    <div className="subject-footer-center">MIST SCHOOL ARCHIVE</div>
                    <div className="subject-footer-right">TOTAL FILES / {String(filteredCases.length).padStart(2, '0')}</div>
                </footer>
            </main>

            {selectedCaseId && (
                <div className="subject-detail-layer">
                    <ArchiveDetailModal
                        isOpen={!!selectedCaseId}
                        onClose={() => setSelectedCaseId(null)}
                        caseData={selectedCase}
                        lang={lang}
                        renderInPlace={true}
                        onGeneratePsychoanalysis={handleGeneratePsychoanalysis}
                        isGeneratingPsychoanalysis={!!selectedCase?.sourceDossier && generatingAnalysisId === selectedCase.sourceDossier.id}
                    />
                </div>
            )}
        </div>
    );
};
