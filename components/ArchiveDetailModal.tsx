import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowLeft,
    BookOpen,
    Crosshair,
    Database,
    FileText,
    Fingerprint,
    ScanLine,
    X,
    Activity,
    ChevronDown
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { CaseStudy } from './archiveCasesData';

interface ArchiveDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseData: CaseStudy | null;
    lang: 'CN' | 'EN';
    renderInPlace?: boolean;
    onGeneratePsychoanalysis?: (caseData: CaseStudy) => Promise<void>;
    isGeneratingPsychoanalysis?: boolean;
}

function splitParameter(parameter: string) {
    const [code, ...rest] = parameter.split(':');
    return {
        code: code.trim(),
        detail: rest.join(':').trim()
    };
}

export const ArchiveDetailModal: React.FC<ArchiveDetailModalProps> = ({
    isOpen,
    onClose,
    caseData,
    lang,
    renderInPlace,
    onGeneratePsychoanalysis,
    isGeneratingPsychoanalysis = false
}) => {
    const { theme } = useTheme();
    const isRetro = theme === 'retro';
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>('story');

    // Intersection Observer to update active nav link based on scroll position
    useEffect(() => {
        if (!isOpen) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id.replace('section-', '');
                        setActiveSection(id);
                    }
                });
            },
            {
                root: scrollContainerRef.current,
                rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top
                threshold: 0
            }
        );

        const sections = document.querySelectorAll('.landing-section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [isOpen]);

    if (!isOpen || !caseData || !caseData.content) return null;

    const { content } = caseData;
    const title = lang === 'CN' ? caseData.titleCn : caseData.titleEn;
    const secondaryTitle = lang === 'CN' ? caseData.titleEn : caseData.titleCn;
    const summary = lang === 'CN' ? caseData.summaryCn : caseData.summaryEn;
    const leadReport = content.report.sections[0];

    const storyChapters = [
        {
            id: 'chapter-01',
            label: 'Chapter 01',
            meta: lang === 'CN' ? '第14区 / 主体进入' : 'Zone 14 / Subject entry',
            title: lang === 'CN' ? '没有天空的长廊' : 'The corridor without sky',
            paragraphs: content.story.slice(0, 2),
            image: '/portal-assets/subject-archive-lower-1777901002241-light.webp',
            caption: lang === 'CN' ? '插图 / 第14区环境建立' : 'Illustration / Zone 14 environment'
        },
        {
            id: 'chapter-02',
            label: 'Chapter 02',
            meta: lang === 'CN' ? '异常光源 / 中央逻辑库' : 'Luminous anomaly / Central logic archive',
            title: lang === 'CN' ? '一排整齐亮起的日光灯' : 'A row of aligned fluorescent lights',
            paragraphs: content.story.slice(2, 4),
            quote: lang === 'CN' ? '秩序不再是希望，而是一种发亮的病变。' : 'Order is no longer hope, but a luminous lesion.'
        },
        {
            id: 'chapter-03',
            label: 'Chapter 03',
            meta: lang === 'CN' ? '宣讲 / 听觉拒绝' : 'Sermon / Refusal of hearing',
            title: lang === 'CN' ? '总工程师的宣讲' : 'The chief engineer sermon',
            paragraphs: content.story.slice(4, 6),
            image: '/c2-mirror.png',
            caption: lang === 'CN' ? '插图 / 主体裂缝与反透视' : 'Illustration / Subject fissure and counter-perspective'
        },
        {
            id: 'chapter-04',
            label: 'Chapter 04',
            meta: lang === 'CN' ? '强酸池 / 无尽水平线' : 'Acid pool / Endless horizon',
            title: lang === 'CN' ? '芯片落入强酸池' : 'The chip falls into acid',
            paragraphs: content.story.slice(6),
            image: '/portal-reference-56-light.webp',
            caption: lang === 'CN' ? '插图 / 黑暗与水平线转场' : 'Illustration / Darkness and horizon transition'
        }
    ].filter(chapter => chapter.paragraphs.length > 0);

    const staticAssetItems = [
        {
            title: lang === 'CN' ? '第14区 / 混凝土迷宫' : 'Zone 14 / Concrete maze',
            label: 'Environment',
            image: '/portal-assets/subject-archive-lower-1777901002241-light.webp',
            text: lang === 'CN' ? '故事主空间。黑箱、楼板、投影与失效的监控感。' : 'Primary story space: black box, concrete slabs, projection, failed surveillance.'
        },
        {
            title: lang === 'CN' ? 'K / 清道夫' : 'K / The scavenger',
            label: 'Character',
            image: caseData.imageUrl,
            text: lang === 'CN' ? '不是英雄，而是断开装置；他的运动负责清除旧秩序的复辟。' : 'Not a hero but a disconnecting device, clearing the return of old order.'
        },
        {
            title: lang === 'CN' ? '破碎镜面' : 'Broken mirror',
            label: 'Symptom',
            image: '/c2-mirror.png',
            text: lang === 'CN' ? '可用于拉康拓扑学与主体裂缝段落。' : 'Useful for Lacanian topology and subject-fissure sections.'
        },
        {
            title: lang === 'CN' ? '分镜卡片' : 'Storyboard cards',
            label: 'Media',
            image: '/portal-assets/card-03-91-light.jpg',
            text: lang === 'CN' ? '后续分镜、漫画、道具图、海报都归入资产页。' : 'Storyboards, comics, props, and posters live on the assets page.'
        }
    ];

    const dossierAssetItems = content.assetGroups
        ? [
            ...content.assetGroups.characters.map(item => ({ title: item.name, label: 'Character', image: item.imageUrl || caseData.imageUrl, text: item.description || item.anchors })),
            ...content.assetGroups.props.map(item => ({ title: item.name, label: 'Prop', image: item.imageUrl || caseData.imageUrl, text: item.description || item.anchors })),
            ...content.assetGroups.scenes.map(item => ({ title: item.name, label: 'Scene', image: item.imageUrl || caseData.imageUrl, text: item.description || item.anchors }))
        ]
        : [];
    const assetItems = dossierAssetItems.length > 0 ? dossierAssetItems : staticAssetItems;
    const screenplayBlocks = content.screenplay || [];

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id.replace('section-', ''));
        }
    };

    const tabs = [
        { id: 'story', icon: BookOpen, label: lang === 'CN' ? 'P.01 主体观测记录' : 'P.01 OBSERVATION' },
        { id: 'assets', icon: Database, label: lang === 'CN' ? 'P.02 视觉资产清单' : 'P.02 ASSETS' },
        { id: 'screenplay', icon: FileText, label: lang === 'CN' ? 'P.03 原始提取脚本' : 'P.03 SCRIPT' },
        { id: 'structure', icon: Activity, label: lang === 'CN' ? 'P.04 底层结构分析' : 'P.04 STRUCTURE' },
        { id: 'report', icon: Fingerprint, label: lang === 'CN' ? 'P.05 精神分析报告' : 'P.05 REPORT' }
    ] as const;

    const page = (
        <div className={`landing-dossier ${isRetro ? 'is-retro' : ''} ${renderInPlace ? 'is-in-place' : 'is-modal'}`} ref={scrollContainerRef}>
            <style>{`
                .landing-dossier {
                    --d-bg: #030303;
                    --d-panel: #0a0a0a;
                    --d-border: rgba(255, 255, 255, 0.1);
                    --d-border-strong: rgba(255, 255, 255, 0.2);
                    --d-text: #eaeaea;
                    --d-text-muted: rgba(255, 255, 255, 0.5);
                    --d-accent: var(--mist-active-accent, #ff4f3f);
                    --d-accent-soft: color-mix(in srgb, var(--d-accent) 20%, transparent);
                    --d-serif: "Songti SC", "Noto Serif SC", STSong, SimSun, serif;
                    --d-mono: "JetBrains Mono", "SF Mono", Consolas, monospace;

                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: var(--d-bg);
                    color: var(--d-text);
                    font-family: var(--d-mono);
                    overflow-x: hidden;
                    overflow-y: auto;
                    scroll-behavior: smooth;
                    scroll-snap-type: y mandatory;
                }
                .landing-dossier::-webkit-scrollbar { width: 8px; }
                .landing-dossier::-webkit-scrollbar-track { background: var(--d-bg); }
                .landing-dossier::-webkit-scrollbar-thumb { background: var(--d-border-strong); }

                .landing-dossier.is-retro {
                    --d-bg: #EAE6DB;
                    --d-panel: #F4F1E8;
                    --d-border: rgba(0, 0, 0, 0.15);
                    --d-border-strong: rgba(0, 0, 0, 0.3);
                    --d-text: #2A2824;
                    --d-text-muted: rgba(0, 0, 0, 0.5);
                    --d-accent: var(--mist-active-accent, #8B261D);
                }

                /* Grid background overlay */
                .landing-dossier::before {
                    content: '';
                    position: fixed;
                    inset: 0;
                    background-image:
                        linear-gradient(var(--d-border) 1px, transparent 1px),
                        linear-gradient(90deg, var(--d-border) 1px, transparent 1px);
                    background-size: 60px 60px;
                    opacity: 0.2;
                    pointer-events: none;
                    z-index: 0;
                }

                /* Top Navigation / Controls */
                .landing-topbar {
                    position: fixed;
                    top: 0; left: 0; right: 0;
                    height: 64px;
                    padding: 0 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    z-index: 100;
                    background: linear-gradient(to bottom, color-mix(in srgb, var(--d-bg) 80%, transparent), transparent);
                    pointer-events: none;
                }
                .landing-topbar > * { pointer-events: auto; }
                .landing-top-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--d-text);
                    background: color-mix(in srgb, var(--d-bg) 60%, transparent);
                    backdrop-filter: blur(10px);
                    padding: 10px 16px;
                    border: 1px solid var(--d-border);
                    transition: all 0.3s;
                }
                .landing-top-btn:hover {
                    color: var(--d-accent);
                    border-color: var(--d-accent);
                }

                /* Cinematic Hero Section */
                .landing-hero {
                    position: relative;
                    height: 100vh;
                    min-height: 600px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 10%;
                    overflow: hidden;
                    z-index: 1;
                    scroll-snap-align: start;
                }

                .landing-hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }
                .landing-hero-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(0.6) contrast(1.2) brightness(0.8);
                    transform: scale(1.02);
                    animation: subtleZoom 20s ease-out forwards;
                }
                @keyframes subtleZoom {
                    from { transform: scale(1.02); }
                    to { transform: scale(1.08); }
                }

                .landing-hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg,
                        color-mix(in srgb, var(--d-bg) 90%, transparent) 0%,
                        color-mix(in srgb, var(--d-bg) 40%, transparent) 50%,
                        var(--d-bg) 100%);
                }

                .landing-hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                    margin-top: 10vh;
                }

                .landing-hero-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 24px;
                    font-size: 11px;
                    letter-spacing: 0.3em;
                    color: var(--d-accent);
                    text-transform: uppercase;
                    margin-bottom: 24px;
                }
                .landing-hero-meta span {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .landing-hero-meta span::before {
                    content: '';
                    display: block;
                    width: 12px; height: 1px;
                    background: var(--d-accent);
                }

                .landing-hero-title {
                    font-family: var(--d-serif);
                    font-size: clamp(48px, 6vw, 96px);
                    line-height: 1.05;
                    font-weight: bold;
                    color: var(--d-text);
                    margin: 0 0 24px 0;
                    text-wrap: balance;
                    text-shadow: 0 20px 40px rgba(0,0,0,0.5);
                }

                .landing-hero-summary {
                    font-family: var(--d-serif);
                    font-size: clamp(16px, 1.5vw, 22px);
                    line-height: 1.8;
                    color: color-mix(in srgb, var(--d-text) 85%, transparent);
                    max-width: 700px;
                    text-wrap: pretty;
                }

                /* Scroll Down Indicator */
                .landing-scroll-indicator {
                    position: absolute;
                    bottom: 40px;
                    left: 10%;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 16px;
                    color: var(--d-text-muted);
                    font-size: 10px;
                    letter-spacing: 0.3em;
                    cursor: pointer;
                    transition: color 0.3s;
                }
                .landing-scroll-indicator:hover {
                    color: var(--d-accent);
                }
                .scroll-line {
                    width: 1px;
                    height: 60px;
                    background: linear-gradient(to bottom, var(--d-accent) 0%, transparent 100%);
                    animation: slideDown 2s infinite ease-in-out;
                    transform-origin: top;
                }
                @keyframes slideDown {
                    0% { transform: scaleY(0); opacity: 0; }
                    50% { transform: scaleY(1); opacity: 1; }
                    100% { transform: translateY(20px) scaleY(0); opacity: 0; }
                }

                /* Sticky Navigation */
                .landing-nav {
                    position: sticky;
                    top: 0;
                    z-index: 90;
                    background: color-mix(in srgb, var(--d-bg) 85%, transparent);
                    backdrop-filter: blur(16px);
                    border-bottom: 1px solid var(--d-border);
                    padding: 0 10%;
                    display: flex;
                    align-items: center;
                    height: 64px;
                    gap: 32px;
                    overflow-x: auto;
                }
                .landing-nav::-webkit-scrollbar { display: none; }

                .landing-nav-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 11px;
                    letter-spacing: 0.2em;
                    color: var(--d-text-muted);
                    text-transform: uppercase;
                    cursor: pointer;
                    padding: 22px 0;
                    position: relative;
                    transition: color 0.3s;
                    white-space: nowrap;
                }
                .landing-nav-item::after {
                    content: '';
                    position: absolute;
                    bottom: -1px; left: 0; right: 0;
                    height: 2px;
                    background: var(--d-accent);
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }
                .landing-nav-item:hover { color: var(--d-text); }
                .landing-nav-item.active { color: var(--d-text); }
                .landing-nav-item.active::after { transform: scaleX(1); }

                /* Main Body Layout */
                .landing-body {
                    display: grid;
                    grid-template-columns: 1fr 340px;
                    gap: 60px;
                    padding: 60px 10%;
                    max-width: 1800px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                @media (max-width: 1100px) {
                    .landing-body {
                        display: flex;
                        flex-direction: column;
                    }
                    .landing-hero {
                        padding: 0 5%;
                    }
                    .landing-nav {
                        padding: 0 5%;
                    }
                }

                /* Content Sections */
                .landing-main {
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                }

                .landing-section {
                    scroll-margin-top: 80px;
                    scroll-snap-align: start;
                    min-height: 100vh;
                    padding-bottom: 120px;
                    position: relative;
                }

                /* Massive Cinematic Section Divider */
                .landing-section-divider {
                    padding: 60px 0;
                    margin: 0 0 60px 0;
                    border-top: 1px solid var(--d-border-strong);
                    border-bottom: 1px solid var(--d-border-strong);
                    background: linear-gradient(90deg, color-mix(in srgb, var(--d-bg) 50%, var(--d-panel)) 0%, transparent 100%);
                    position: relative;
                }

                .landing-section-divider::before {
                    content: '';
                    position: absolute;
                    top: 0; right: 0; bottom: 0; width: 100%;
                    background: repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 4px,
                      color-mix(in srgb, var(--d-border) 40%, transparent) 4px,
                      color-mix(in srgb, var(--d-border) 40%, transparent) 5px
                    );
                    opacity: 0.3;
                    pointer-events: none;
                }

                .landing-section-divider .part-num {
                    font-size: 14px;
                    color: var(--d-accent);
                    letter-spacing: 0.4em;
                    font-weight: bold;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .landing-section-divider h2 {
                    font-family: var(--d-serif);
                    font-size: clamp(32px, 4vw, 56px);
                    line-height: 1.1;
                    color: var(--d-text);
                    margin: 0;
                    text-transform: uppercase;
                }

                /* Typography inside content */
                .l-article { margin-bottom: 60px; }
                .l-article-meta {
                    font-size: 11px;
                    color: var(--d-text-muted);
                    letter-spacing: 0.1em;
                    margin-bottom: 16px;
                    text-transform: uppercase;
                }
                .l-article-meta b { color: var(--d-accent); margin-right: 8px; }
                .l-article h3 {
                    font-family: var(--d-serif);
                    font-size: 36px;
                    margin-bottom: 32px;
                    line-height: 1.2;
                }
                .l-article p {
                    font-family: var(--d-serif);
                    font-size: 17px;
                    line-height: 2.1;
                    margin-bottom: 24px;
                    color: color-mix(in srgb, var(--d-text) 85%, transparent);
                    text-align: justify;
                }

                .l-pullquote {
                    padding: 32px 0;
                    margin: 48px 0;
                    border-top: 1px solid var(--d-accent-soft);
                    border-bottom: 1px solid var(--d-accent-soft);
                    font-family: var(--d-serif);
                    font-size: 28px;
                    color: var(--d-accent);
                    text-align: center;
                    line-height: 1.4;
                }

                .l-figure {
                    margin: 48px 0;
                    border: 1px solid var(--d-border);
                    padding: 12px;
                    background: var(--d-panel);
                }
                .l-figure img {
                    width: 100%;
                    height: auto;
                    filter: grayscale(0.2) contrast(1.1);
                }
                .l-figure figcaption {
                    margin-top: 16px;
                    font-size: 11px;
                    color: var(--d-text-muted);
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }

                /* Assets Grid */
                .l-assets-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 32px;
                }
                .l-asset-card {
                    border: 1px solid var(--d-border);
                    background: var(--d-panel);
                    transition: all 0.3s;
                }
                .l-asset-card:hover {
                    border-color: var(--d-accent);
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .l-asset-card img {
                    width: 100%;
                    aspect-ratio: 16/10;
                    object-fit: cover;
                    border-bottom: 1px solid var(--d-border);
                }
                .l-asset-info { padding: 24px; }
                .l-asset-label {
                    font-size: 10px;
                    color: var(--d-accent);
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                }
                .l-asset-info h4 {
                    font-family: var(--d-serif);
                    font-size: 20px;
                    margin: 12px 0;
                }
                .l-asset-info p {
                    font-size: 13px;
                    color: var(--d-text-muted);
                    line-height: 1.7;
                }

                /* DNA & Analysis */
                .l-dna-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                    gap: 20px;
                    margin-bottom: 60px;
                }
                .l-dna-card {
                    padding: 20px;
                    border: 1px solid var(--d-border);
                    background: color-mix(in srgb, var(--d-panel) 50%, transparent);
                }
                .l-dna-code {
                    font-size: 13px;
                    color: var(--d-accent);
                    font-weight: bold;
                    margin-bottom: 12px;
                }
                .l-dna-detail {
                    font-size: 13px;
                    color: var(--d-text-muted);
                    line-height: 1.6;
                }

                .l-report-card {
                    padding: 32px;
                    border: 1px solid var(--d-border);
                    background: var(--d-panel);
                    margin-bottom: 24px;
                }
                .l-report-card h4 {
                    font-family: var(--d-serif);
                    font-size: 24px;
                    margin-bottom: 24px;
                }
                .l-report-card div {
                    font-family: var(--d-serif);
                    font-size: 16px;
                    line-height: 1.9;
                    color: color-mix(in srgb, var(--d-text) 85%, transparent);
                    white-space: pre-wrap;
                }

                /* Right Sidebar */
                .landing-sidebar {
                    position: sticky;
                    top: 80px; /* Below nav */
                    align-self: start;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    max-height: calc(100vh - 100px);
                    overflow-y: auto;
                    padding-right: 12px;
                }

                .landing-sidebar::-webkit-scrollbar { width: 4px; }
                .landing-sidebar::-webkit-scrollbar-track { background: transparent; }
                .landing-sidebar::-webkit-scrollbar-thumb { background: var(--d-border-strong); }

                .l-right-image {
                    width: 100%;
                    aspect-ratio: 3/4;
                    object-fit: cover;
                    border: 1px solid var(--d-border);
                    filter: grayscale(0.2) contrast(1.2);
                }

                .l-verdict-box {
                    padding: 24px;
                    background: var(--d-panel);
                    border: 1px solid var(--d-border);
                }
                .l-verdict-box h4 {
                    font-size: 11px;
                    color: var(--d-accent);
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .l-verdict-box p {
                    font-family: var(--d-serif);
                    font-size: 15px;
                    line-height: 1.7;
                    color: var(--d-text);
                }

                .l-kv { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
                .l-k { font-size: 10px; color: var(--d-text-muted); text-transform: uppercase; letter-spacing: 0.1em; }
                .l-v { font-family: var(--d-serif); font-size: 16px; color: var(--d-text); line-height: 1.5; }
            `}</style>

            {/* TOP BAR */}
            <div className="landing-topbar">
                <button className="landing-top-btn" onClick={onClose}>
                    <ArrowLeft size={14} />
                    {lang === 'CN' ? '返回索引' : 'BACK'}
                </button>
                {!renderInPlace && (
                    <button className="landing-top-btn" onClick={onClose}>
                        <X size={14} />
                        {lang === 'CN' ? '关闭' : 'CLOSE'}
                    </button>
                )}
            </div>

            {/* HERO SECTION */}
            <section className="landing-hero">
                <div className="landing-hero-bg">
                    <img src={caseData.imageUrl} alt={title} onError={e => e.currentTarget.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600'} />
                    <div className="landing-hero-overlay" />
                </div>
                <div className="landing-hero-content">
                    <div className="landing-hero-meta">
                        <span><ScanLine size={14}/> CLASSIFICATION: {caseData.category}</span>
                        <span>DATE: {caseData.date}</span>
                        <span>ID: {caseData.id.toUpperCase()}</span>
                    </div>
                    <h1 className="landing-hero-title">{title}</h1>
                    <p className="landing-hero-summary">{summary}</p>
                </div>

                <div className="landing-scroll-indicator" onClick={() => scrollTo('section-story')}>
                    <div className="scroll-line" />
                    {lang === 'CN' ? '滚动解密档案' : 'SCROLL TO DECRYPT'}
                </div>
            </section>

            {/* STICKY NAVIGATION */}
            <nav className="landing-nav" id="dossier-nav">
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className={`landing-nav-item ${activeSection === tab.id ? 'active' : ''}`}
                        onClick={() => scrollTo(`section-${tab.id}`)}
                    >
                        <tab.icon size={14} />
                        {tab.label}
                    </div>
                ))}
            </nav>

            {/* MAIN CONTENT AREA */}
            <div className="landing-body">
                <main className="landing-main">

                    {/* CINEMATIC POSTER PAGE */}
                    <div className="landing-poster-page" style={{ scrollSnapAlign: 'start', scrollMarginTop: '80px', marginBottom: '80px' }}>
                        <img
                            src={caseData.imageUrl}
                            alt={title}
                            style={{ width: '100%', height: 'calc(100vh - 120px)', objectFit: 'cover', filter: 'grayscale(0.3) contrast(1.1)', border: '1px solid var(--d-border)' }}
                            onError={e => e.currentTarget.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600'}
                        />
                    </div>

                    {/* STORY SECTION */}
                    <section id="section-story" className="landing-section">
                        <div className="landing-section-divider">
                            <div className="part-num"><BookOpen size={16} /> PART 01</div>
                            <h2>{lang === 'CN' ? '主体观测记录' : 'SUBJECT OBSERVATION LOG'}</h2>
                        </div>

                        {storyChapters.map(chapter => (
                            <article key={chapter.id} className="l-article">
                                <div className="l-article-meta">
                                    <b>{chapter.label}</b> | {chapter.meta}
                                </div>
                                <h3>{chapter.title}</h3>
                                {chapter.paragraphs.map(p => <p key={p}>{p}</p>)}
                                {chapter.quote && <div className="l-pullquote">"{chapter.quote}"</div>}
                                {chapter.image && (
                                    <figure className="l-figure">
                                        <img src={chapter.image} alt={chapter.title} />
                                        <figcaption>{chapter.caption}</figcaption>
                                    </figure>
                                )}
                            </article>
                        ))}
                    </section>

                    {/* ASSETS SECTION */}
                    <section id="section-assets" className="landing-section">
                        <div className="landing-section-divider">
                            <div className="part-num"><Database size={16} /> PART 02</div>
                            <h2>{lang === 'CN' ? '视觉资产清单' : 'VISUAL ASSET INVENTORY'}</h2>
                        </div>
                        <div className="l-assets-grid">
                            {assetItems.map(item => (
                                <div key={item.title} className="l-asset-card">
                                    <img src={item.image} alt={item.title} onError={e => e.currentTarget.src = '/portal-assets/subject-archive-lower-1777901002241-light.webp'} />
                                    <div className="l-asset-info">
                                        <div className="l-asset-label">{item.label}</div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SCREENPLAY SECTION */}
                    <section id="section-screenplay" className="landing-section">
                        <div className="landing-section-divider">
                            <div className="part-num"><FileText size={16} /> PART 03</div>
                            <h2>{lang === 'CN' ? '原始提取脚本' : 'RAW EXTRACTED SCREENPLAY'}</h2>
                        </div>
                        {screenplayBlocks.length > 0 ? screenplayBlocks.map((block, i) => (
                            <div key={i} className="l-report-card">
                                <h4>{lang === 'CN' ? `序列 ${String(i + 1).padStart(2, '0')}` : `SEQUENCE ${String(i + 1).padStart(2, '0')}`}</h4>
                                <div>{block}</div>
                            </div>
                        )) : (
                            <div className="l-report-card">
                                <h4>{lang === 'CN' ? '脚本未归档' : 'UNARCHIVED SCREENPLAY'}</h4>
                                <div>{lang === 'CN' ? '当前档案暂无脚本数据。' : 'No screenplay data available.'}</div>
                            </div>
                        )}
                    </section>

                    {/* STRUCTURE SECTION */}
                    <section id="section-structure" className="landing-section">
                        <div className="landing-section-divider">
                            <div className="part-num"><Activity size={16} /> PART 04</div>
                            <h2>{lang === 'CN' ? '底层结构分析' : 'DEEP STRUCTURE ANALYSIS'}</h2>
                        </div>

                        <div className="l-dna-grid">
                            {content.dna.parameters.map(param => {
                                const p = splitParameter(param);
                                return (
                                    <div key={param} className="l-dna-card">
                                        <div className="l-dna-code">{p.code}</div>
                                        <div className="l-dna-detail">{p.detail}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    {/* REPORT SECTION */}
                    <section id="section-report" className="landing-section">
                        <div className="landing-section-divider">
                            <div className="part-num"><Fingerprint size={16} /> PART 05</div>
                            <h2>{lang === 'CN' ? '精神分析报告' : 'PSYCHOANALYSIS REPORT'}</h2>
                        </div>

                        {content.report.sections.map(section => (
                            <div key={section.title} className="l-report-card">
                                <h4>{section.title}</h4>
                                <div>{section.body}</div>
                            </div>
                        ))}
                    </section>

                    {/* Padding at bottom to allow scrolling past the last section */}
                    <div style={{height: '20vh'}}></div>
                </main>

                {/* RIGHT SIDEBAR: VISUALS & SUMMARY */}
                <aside className="landing-sidebar">
                    <img src={caseData.imageUrl} alt={title} className="l-right-image" onError={e => e.currentTarget.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900'} />

                    <div className="l-verdict-box">
                        <div className="l-kv">
                            <span className="l-k">DIAGNOSTIC PROFILE</span>
                            <span className="l-v">{content.report.diagnosis}</span>
                        </div>
                        <div className="l-kv">
                            <span className="l-k">CORE HOOK</span>
                            <span className="l-v">{content.dna.coreHook}</span>
                        </div>

                        <h4 className="mt-8 pt-6 border-t border-[var(--d-border)]"><Crosshair size={12} /> {lang === 'CN' ? '最终判词' : 'FINAL VERDICT'}</h4>
                        <p>{content.report.conclusion}</p>
                        <p className="mt-4 opacity-70 font-mono text-[10px] uppercase tracking-widest">{content.report.verdict}</p>

                        {caseData.sourceDossier && onGeneratePsychoanalysis && (
                            <button
                                className="mt-6 w-full p-3 border border-[var(--d-accent)] bg-[var(--d-accent-soft)] text-[var(--d-accent)] text-[11px] tracking-widest uppercase font-bold hover:bg-[var(--d-accent)] hover:text-[var(--d-bg)] transition-colors cursor-pointer"
                                onClick={() => onGeneratePsychoanalysis(caseData)}
                                disabled={isGeneratingPsychoanalysis}
                            >
                                {isGeneratingPsychoanalysis
                                    ? (lang === 'CN' ? '正在推演...' : 'COMPUTING...')
                                    : (lang === 'CN' ? '生成精神分析' : 'GENERATE ANALYSIS')}
                            </button>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );

    if (renderInPlace) return page;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center animate-in fade-in duration-500 bg-black">
            {page}
        </div>
    );
};
