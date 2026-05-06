import React from 'react';
import {
    ArrowLeft,
    BookOpen,
    Crosshair,
    Database,
    FileText,
    Fingerprint,
    ScanLine,
    X
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { CaseStudy } from './archiveCasesData';

interface ArchiveDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseData: CaseStudy | null;
    lang: 'CN' | 'EN';
    renderInPlace?: boolean;
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
    renderInPlace
}) => {
    const { theme } = useTheme();
    const [activePage, setActivePage] = React.useState<'story' | 'assets' | 'analysis'>('story');
    const isRetro = theme === 'retro';
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
            image: '/portal-assets/subject-archive-lower-1777901002241.png',
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
            image: '/portal-reference-56.png',
            caption: lang === 'CN' ? '插图 / 黑暗与水平线转场' : 'Illustration / Darkness and horizon transition'
        }
    ].filter(chapter => chapter.paragraphs.length > 0);
    const assetItems = [
        {
            title: lang === 'CN' ? '第14区 / 混凝土迷宫' : 'Zone 14 / Concrete maze',
            label: 'Environment',
            image: '/portal-assets/subject-archive-lower-1777901002241.png',
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
            image: '/portal-assets/card-03-91.png',
            text: lang === 'CN' ? '后续分镜、漫画、道具图、海报都归入资产页。' : 'Storyboards, comics, props, and posters live on the assets page.'
        }
    ];
    const pageLabel = activePage === 'story'
        ? (lang === 'CN' ? '故事页' : 'Story')
        : activePage === 'assets'
            ? (lang === 'CN' ? '资产页' : 'Assets')
            : (lang === 'CN' ? '精神分析页' : 'Psychoanalysis');

    const page = (
        <div
            className={`subject-story-page ${isRetro ? 'is-retro' : ''} ${renderInPlace ? 'is-in-place' : 'is-modal'}`}
        >
            <style>{`
                .subject-story-page {
                    --story-serif: "Songti SC", "Noto Serif SC", "Source Han Serif SC", STSong, SimSun, Georgia, serif;
                    --story-mono: "Avenir Next", "Noto Sans SC", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                    --story-bg: #000000;
                    --story-panel: rgba(0,0,0,0.88);
                    --story-panel-soft: rgba(255,255,255,0.025);
                    --story-ink: #fff8ee;
                    --story-muted: rgba(255,248,238,0.74);
                    --story-faint: rgba(255,248,238,0.46);
                    --story-line: rgba(255,248,238,0.17);
                    --story-line-strong: rgba(255,248,238,0.32);
                    --story-red: var(--mist-archive-red, #ff4f3f);
                    --story-red-soft: var(--mist-archive-red-soft, rgba(255,79,63,0.72));
                    --story-red-faint: var(--mist-archive-red-faint, rgba(255,79,63,0.11));
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    isolation: isolate;
                    color: var(--story-ink);
                    font-family: var(--story-mono);
                    background:
                        radial-gradient(circle at 74% 16%, rgba(255,79,63,0.07), transparent 30%),
                        radial-gradient(circle at 14% 46%, rgba(255,248,238,0.02), transparent 33%),
                        linear-gradient(180deg, rgba(255,255,255,0.006), rgba(0,0,0,0.18)),
                        var(--story-bg);
                }

                .subject-story-page::before,
                .subject-story-page::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 0;
                }

                .subject-story-page::before {
                    opacity: 0.075;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.038) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px),
                        linear-gradient(90deg, transparent 0 14%, rgba(255,79,63,0.09) 14.06% 14.13%, transparent 14.25% 86%, rgba(255,248,238,0.06) 86.06% 86.13%, transparent 86.25% 100%);
                    background-size: 100% 22vh, 10% 100%, 100% 100%;
                    mask-image: linear-gradient(to bottom, transparent 0%, black 7%, black 94%, transparent 100%);
                }

                .subject-story-page::after {
                    inset: -18%;
                    opacity: 0.024;
                    background:
                        repeating-radial-gradient(circle at 30% 50%, rgba(255,255,255,0.42) 0 0.5px, transparent 0.65px 2px),
                        repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 4px);
                    filter: blur(0.25px);
                    animation: subjectStoryGrain 10s steps(3) infinite;
                }

                @keyframes subjectStoryGrain {
                    0% { transform: translate3d(-1.1%, -0.8%, 0); }
                    33% { transform: translate3d(0.8%, 0.7%, 0); }
                    66% { transform: translate3d(-0.5%, 1%, 0); }
                    100% { transform: translate3d(0.7%, -0.9%, 0); }
                }

                .subject-story-page > * {
                    position: relative;
                    z-index: 1;
                }

                .subject-story-chrome {
                    height: 3.55rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 0 clamp(1.1rem, 2.4vw, 2.8rem);
                    border-bottom: 1px solid var(--story-line);
                    background:
                        repeating-linear-gradient(90deg, rgba(255,255,255,0.014) 0 1px, transparent 1px 8px),
                        linear-gradient(180deg, rgba(0,0,0,0.98), rgba(0,0,0,0.78));
                    box-shadow: 0 16px 42px rgba(0,0,0,0.36), inset 0 -1px 0 rgba(255,255,255,0.035);
                }

                .subject-story-chrome-title,
                .subject-story-eyebrow,
                .subject-story-label,
                .subject-story-side-title,
                .subject-story-nav a,
                .subject-story-close,
                .subject-story-return {
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                }

                .subject-story-chrome-title {
                    display: flex;
                    align-items: center;
                    gap: 0.7rem;
                    min-width: 0;
                    color: var(--story-muted);
                    font-size: 0.68rem;
                    font-weight: 800;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .subject-story-close,
                .subject-story-return {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.55rem;
                    min-height: 2rem;
                    border: 1px solid var(--story-line);
                    background: linear-gradient(180deg, rgba(255,255,255,0.038), rgba(255,255,255,0.01)), rgba(0,0,0,0.88);
                    color: var(--story-muted);
                    font-size: 0.62rem;
                    font-weight: 900;
                    transition: color 260ms ease, border-color 260ms ease, background 260ms ease;
                }

                .subject-story-return {
                    padding: 0 0.85rem;
                }

                .subject-story-close {
                    width: 2rem;
                }

                .subject-story-close:hover,
                .subject-story-return:hover {
                    color: var(--story-ink);
                    border-color: var(--story-red-soft);
                    background: linear-gradient(180deg, rgba(255,255,255,0.07), var(--story-red-faint)), #020202;
                }

                .subject-story-scroll {
                    height: calc(100% - 3.55rem);
                    overflow-y: auto;
                    overflow-x: hidden;
                    scroll-behavior: smooth;
                    background:
                        linear-gradient(90deg, rgba(255,255,255,0.035) 0 1px, transparent 1px calc(100% - 1px), rgba(255,255,255,0.035) calc(100% - 1px) 100%),
                        radial-gradient(ellipse at 52% 0%, rgba(243,240,234,0.065), transparent 34%);
                }

                .subject-story-grid {
                    min-height: 100%;
                    display: grid;
                    grid-template-columns: minmax(13.2rem, 0.64fr) minmax(34rem, 1.36fr) minmax(17rem, 0.74fr);
                    gap: clamp(1.4rem, 2.5vw, 3.6rem);
                    align-items: start;
                    padding: clamp(1.55rem, 3.2vw, 3.2rem) clamp(1.35rem, 3.4vw, 4.4rem) clamp(4rem, 7vw, 6.5rem);
                }

                .subject-story-left,
                .subject-story-right {
                    position: sticky;
                    top: clamp(1.3rem, 2.4vw, 2.4rem);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .subject-story-left {
                    min-width: 0;
                }

                .subject-story-spine {
                    min-height: 24rem;
                    border: 1px solid var(--story-line);
                    background:
                        linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.014)),
                        rgba(0,0,0,0.28);
                    padding: 1rem;
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.045), 0 22px 54px rgba(0,0,0,0.28);
                }

                .subject-story-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 0.52rem;
                    color: var(--story-red);
                    font-size: 0.62rem;
                    font-weight: 900;
                    text-shadow: 0 0 12px var(--mist-archive-signal-shadow, rgba(255,98,86,0.16));
                }

                .subject-story-marker {
                    display: block;
                    width: 0.48rem;
                    height: 0.48rem;
                    background: var(--story-red);
                    box-shadow: 0 0 12px var(--mist-archive-signal-glow, rgba(255,98,86,0.45));
                }

                .subject-story-case-code {
                    margin-top: 1.4rem;
                    font-size: 4.8rem;
                    line-height: 0.82;
                    letter-spacing: 0;
                    font-weight: 950;
                    color: rgba(243,240,234,0.95);
                    text-shadow: 1.1px 0 0 var(--story-red-soft), 0 18px 48px rgba(0,0,0,0.7);
                }

                .subject-story-meta-list {
                    margin-top: 1.35rem;
                    display: grid;
                    gap: 0.78rem;
                    padding-top: 1rem;
                    border-top: 1px solid var(--story-line);
                }

                .subject-story-meta-item {
                    min-width: 0;
                }

                .subject-story-label {
                    display: block;
                    color: var(--story-faint);
                    font-size: 0.56rem;
                    font-weight: 900;
                }

                .subject-story-value {
                    display: block;
                    margin-top: 0.28rem;
                    color: rgba(243,240,234,0.78);
                    font-size: 0.72rem;
                    line-height: 1.45;
                    letter-spacing: 0.08em;
                }

                .subject-story-nav {
                    display: grid;
                    gap: 0.45rem;
                }

                .subject-story-nav a,
                .subject-story-nav button {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.7rem;
                    width: 100%;
                    min-height: 2.35rem;
                    padding: 0 0.74rem;
                    border: 1px solid var(--story-line);
                    color: var(--story-muted);
                    background: rgba(255,255,255,0.026);
                    font-size: 0.58rem;
                    font-weight: 900;
                    text-decoration: none;
                    transition: color 250ms ease, border-color 250ms ease, background 250ms ease;
                }

                .subject-story-nav a:hover,
                .subject-story-nav button:hover,
                .subject-story-nav button.is-active {
                    color: var(--story-ink);
                    border-color: var(--story-red-soft);
                    background: var(--story-red-faint);
                }

                .subject-story-main {
                    min-width: 0;
                }

                .subject-story-hero {
                    position: relative;
                    min-height: min(48rem, calc(100vh - 9.5rem));
                    display: grid;
                    align-content: end;
                    padding: clamp(2.1rem, 4vw, 4.4rem) 0 clamp(2.3rem, 4.2vw, 4.8rem);
                    border-bottom: 1px solid var(--story-line);
                }

                .subject-story-hero::before {
                    content: "";
                    position: absolute;
                    left: -2.2rem;
                    top: 12%;
                    bottom: 10%;
                    width: 1px;
                    background: linear-gradient(to bottom, transparent, var(--story-red-soft), rgba(243,240,234,0.14), transparent);
                    opacity: 0.7;
                }

                .subject-story-title {
                    margin: 1.1rem 0 0;
                    font-family: var(--story-serif);
                    font-size: 6.4rem;
                    font-weight: 950;
                    line-height: 0.94;
                    letter-spacing: 0.035em;
                    color: var(--story-ink);
                    text-wrap: balance;
                    text-shadow:
                        1.15px 0 0 var(--story-red-soft),
                        -0.7px 0 0 rgba(255,255,255,0.2),
                        0 24px 64px rgba(0,0,0,0.82);
                }

                .subject-story-subtitle {
                    margin-top: 1rem;
                    max-width: 42rem;
                    color: var(--story-muted);
                    font-size: 0.74rem;
                    line-height: 1.8;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    text-wrap: pretty;
                }

                .subject-story-summary {
                    margin: clamp(2rem, 3vw, 3rem) 0 0;
                    max-width: 44rem;
                    color: rgba(243,240,234,0.82);
                    font-family: var(--story-serif);
                    font-size: 1.24rem;
                    line-height: 1.9;
                    letter-spacing: 0.08em;
                    text-wrap: pretty;
                }

                .subject-story-hero-foot {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 0.85rem;
                    margin-top: clamp(2rem, 3vw, 2.9rem);
                    max-width: 40rem;
                }

                .subject-story-chip {
                    min-width: 0;
                    border-top: 1px solid var(--story-line-strong);
                    padding-top: 0.62rem;
                }

                .subject-story-section {
                    scroll-margin-top: 1.5rem;
                    padding-top: clamp(2.3rem, 4.4vw, 4.6rem);
                }

                .subject-story-section-head {
                    display: flex;
                    align-items: center;
                    gap: 0.62rem;
                    margin-bottom: 1.25rem;
                    color: var(--story-red);
                    font-size: 0.72rem;
                    font-weight: 950;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                }

                .subject-story-section-head::after {
                    content: "";
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(90deg, var(--story-red-soft), transparent);
                }

                .subject-story-dna-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 0.72rem;
                }

                .subject-story-dna-card,
                .subject-story-report-card,
                .subject-story-verdict,
                .subject-story-analyst {
                    position: relative;
                    overflow: hidden;
                    border: 1px solid var(--story-line);
                    background:
                        linear-gradient(180deg, rgba(255,255,255,0.052), rgba(255,255,255,0.014)),
                        rgba(0,0,0,0.34);
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.045);
                }

                .subject-story-dna-card {
                    min-height: 7rem;
                    padding: 0.85rem;
                }

                .subject-story-dna-code {
                    color: var(--story-red);
                    font-size: 0.72rem;
                    font-weight: 950;
                    letter-spacing: 0.18em;
                }

                .subject-story-dna-detail {
                    margin-top: 0.62rem;
                    color: rgba(243,240,234,0.7);
                    font-size: 0.74rem;
                    line-height: 1.72;
                    letter-spacing: 0.05em;
                    text-wrap: pretty;
                }

                .subject-story-hook {
                    display: grid;
                    grid-template-columns: minmax(0, 0.6fr) minmax(0, 1.4fr);
                    gap: 0.75rem;
                    margin-top: 0.85rem;
                }

                .subject-story-hook > div {
                    border: 1px solid var(--story-line);
                    padding: 0.9rem;
                    background: rgba(255,255,255,0.026);
                }

                .subject-story-prose {
                    counter-reset: story-paragraph;
                    display: grid;
                    gap: clamp(1.2rem, 2vw, 1.9rem);
                    max-width: 46rem;
                    padding-bottom: clamp(1.2rem, 2vw, 2rem);
                }

                .subject-story-paragraph {
                    counter-increment: story-paragraph;
                    position: relative;
                    margin: 0;
                    padding-left: clamp(2.8rem, 4vw, 4.1rem);
                    color: rgba(243,240,234,0.86);
                    font-family: var(--story-serif);
                    font-size: 1.12rem;
                    line-height: 2.18;
                    letter-spacing: 0.055em;
                    text-align: justify;
                    text-wrap: pretty;
                    text-shadow: 0 12px 32px rgba(0,0,0,0.42);
                }

                .subject-story-paragraph::before {
                    content: counter(story-paragraph, decimal-leading-zero);
                    position: absolute;
                    left: 0;
                    top: 0.42rem;
                    color: var(--story-red);
                    font-family: var(--story-mono);
                    font-size: 0.66rem;
                    font-weight: 950;
                    letter-spacing: 0.16em;
                }

                .subject-story-paragraph:first-child::first-letter {
                    float: left;
                    margin: 0.12em 0.18em 0 0;
                    color: var(--story-ink);
                    font-size: 4.4em;
                    line-height: 0.78;
                    text-shadow: 1px 0 0 var(--story-red-soft);
                }

                .subject-story-chapter {
                    display: grid;
                    grid-template-columns: minmax(7rem, 0.25fr) minmax(0, 1fr);
                    gap: clamp(1.1rem, 2vw, 2rem);
                    padding: clamp(2.25rem, 4vw, 4.35rem) 0;
                    border-bottom: 1px solid var(--story-line);
                }

                .subject-story-chapter-meta {
                    position: sticky;
                    top: 1.2rem;
                    color: var(--story-faint);
                    font-size: 0.62rem;
                    font-weight: 900;
                    letter-spacing: 0.16em;
                    line-height: 1.75;
                    text-transform: uppercase;
                }

                .subject-story-chapter-meta b {
                    display: block;
                    margin-bottom: 0.55rem;
                    color: var(--story-red);
                }

                .subject-story-chapter-body h2 {
                    margin: 0 0 1.35rem;
                    font-family: var(--story-serif);
                    color: var(--story-ink);
                    font-size: clamp(2.2rem, 5vw, 4.8rem);
                    line-height: 0.98;
                    letter-spacing: 0.06em;
                    text-wrap: balance;
                }

                .subject-story-chapter-body p {
                    margin: 0 0 1.35rem;
                    color: rgba(243,240,234,0.84);
                    font-family: var(--story-serif);
                    font-size: clamp(1.06rem, 1.45vw, 1.35rem);
                    line-height: 2.08;
                    letter-spacing: 0.055em;
                    text-align: justify;
                    text-wrap: pretty;
                }

                .subject-story-chapter-body p:first-of-type::first-letter {
                    float: left;
                    margin: 0.11em 0.18em 0 0;
                    color: var(--story-ink);
                    font-size: 4.25em;
                    line-height: 0.78;
                    text-shadow: 1px 0 0 var(--story-red-soft);
                }

                .subject-story-illustration {
                    position: relative;
                    min-height: min(28rem, 45vw);
                    margin: clamp(1.6rem, 3vw, 2.5rem) 0;
                    overflow: hidden;
                    border: 1px solid var(--story-line);
                    background: #070707;
                }

                .subject-story-illustration img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(0.18) saturate(1.05) contrast(1.24) brightness(0.96);
                }

                .subject-story-illustration::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    background:
                        linear-gradient(180deg, transparent 28%, rgba(0,0,0,0.78)),
                        linear-gradient(90deg, var(--story-red-faint), transparent 42%);
                }

                .subject-story-illustration figcaption {
                    position: absolute;
                    left: 1rem;
                    right: 1rem;
                    bottom: 0.9rem;
                    z-index: 1;
                    color: var(--story-muted);
                    font-size: 0.62rem;
                    font-weight: 900;
                    letter-spacing: 0.16em;
                    line-height: 1.55;
                    text-transform: uppercase;
                }

                .subject-story-pullquote {
                    margin: clamp(1.6rem, 3vw, 2.6rem) 0;
                    border-top: 1px solid var(--story-red-soft);
                    border-bottom: 1px solid var(--story-red-soft);
                    padding: clamp(1.15rem, 2vw, 1.65rem) 0;
                    color: var(--story-ink);
                    font-family: var(--story-serif);
                    font-size: clamp(1.65rem, 3.3vw, 3.3rem);
                    line-height: 1.15;
                    letter-spacing: 0.07em;
                }

                .subject-story-end-panel {
                    margin-top: clamp(2rem, 4vw, 4rem);
                    border: 1px solid var(--story-red-soft);
                    background:
                        radial-gradient(ellipse at 44% 0%, var(--story-red-faint), transparent 48%),
                        rgba(0,0,0,0.34);
                    padding: clamp(1.3rem, 2.6vw, 2.4rem);
                }

                .subject-story-end-panel p {
                    margin: 0;
                    font-family: var(--story-serif);
                    font-size: clamp(1.25rem, 2vw, 1.9rem);
                    line-height: 1.7;
                    letter-spacing: 0.06em;
                }

                .subject-story-page-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.65rem;
                    margin-top: 1.35rem;
                }

                .subject-story-page-actions button {
                    border: 1px solid var(--story-line);
                    background: rgba(255,255,255,0.026);
                    color: var(--story-muted);
                    padding: 0.7rem 0.9rem;
                    font-size: 0.62rem;
                    font-weight: 900;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                }

                .subject-story-page-actions button:hover {
                    color: var(--story-ink);
                    border-color: var(--story-red-soft);
                    background: var(--story-red-faint);
                }

                .subject-story-assets-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 0.95rem;
                }

                .subject-story-asset-card {
                    overflow: hidden;
                    border: 1px solid var(--story-line);
                    background: rgba(255,255,255,0.026);
                }

                .subject-story-asset-card img {
                    width: 100%;
                    aspect-ratio: 16 / 10;
                    object-fit: cover;
                    filter: grayscale(0.14) saturate(1.06) contrast(1.22) brightness(0.95);
                }

                .subject-story-asset-copy {
                    padding: 0.95rem;
                }

                .subject-story-asset-copy h3 {
                    margin: 0.35rem 0 0.55rem;
                    color: var(--story-ink);
                    font-family: var(--story-serif);
                    font-size: 1.2rem;
                    line-height: 1.25;
                }

                .subject-story-asset-copy p {
                    margin: 0;
                    color: rgba(243,240,234,0.68);
                    font-size: 0.72rem;
                    line-height: 1.7;
                    letter-spacing: 0.05em;
                }

                .subject-story-report-stack {
                    display: grid;
                    gap: 0.95rem;
                }

                .subject-story-report-card {
                    padding: clamp(1.05rem, 1.7vw, 1.45rem);
                }

                .subject-story-report-card h3 {
                    margin: 0;
                    color: var(--story-ink);
                    font-family: var(--story-serif);
                    font-size: 1.32rem;
                    line-height: 1.35;
                    letter-spacing: 0.09em;
                    text-wrap: pretty;
                }

                .subject-story-report-card div {
                    margin-top: 0.9rem;
                    color: rgba(243,240,234,0.76);
                    font-family: var(--story-serif);
                    font-size: 0.94rem;
                    line-height: 1.95;
                    letter-spacing: 0.045em;
                    white-space: pre-wrap;
                    text-wrap: pretty;
                }

                .subject-story-verdict {
                    padding: clamp(1.15rem, 1.8vw, 1.55rem);
                    border-color: var(--story-red-soft);
                    background:
                        linear-gradient(90deg, var(--story-red-faint), rgba(255,255,255,0.026)),
                        rgba(0,0,0,0.42);
                }

                .subject-story-verdict p {
                    margin: 0.82rem 0 0;
                    color: rgba(243,240,234,0.78);
                    font-family: var(--story-serif);
                    font-size: 0.95rem;
                    line-height: 1.9;
                    letter-spacing: 0.045em;
                    white-space: pre-wrap;
                    text-wrap: pretty;
                }

                .subject-story-right {
                    gap: 0.75rem;
                }

                .subject-story-image {
                    position: relative;
                    aspect-ratio: 4 / 5;
                    overflow: hidden;
                    border: 1px solid var(--story-line);
                    background: #090909;
                }

                .subject-story-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(0.18) saturate(1.05) contrast(1.24) brightness(0.94);
                    transform: scale(1.04);
                }

                .subject-story-image::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(180deg, transparent 32%, rgba(0,0,0,0.78)),
                        linear-gradient(90deg, var(--story-red-faint), transparent 34%);
                    pointer-events: none;
                }

                .subject-story-image-caption {
                    position: absolute;
                    left: 0.9rem;
                    right: 0.9rem;
                    bottom: 0.85rem;
                    z-index: 1;
                    color: rgba(243,240,234,0.76);
                    font-size: 0.58rem;
                    font-weight: 900;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                }

                .subject-story-analyst {
                    padding: 1rem;
                }

                .subject-story-side-title {
                    display: flex;
                    align-items: center;
                    gap: 0.55rem;
                    color: var(--story-red);
                    font-size: 0.62rem;
                    font-weight: 950;
                }

                .subject-story-analyst h3 {
                    margin: 0.85rem 0 0;
                    color: var(--story-ink);
                    font-family: var(--story-serif);
                    font-size: 1.26rem;
                    line-height: 1.28;
                    letter-spacing: 0.08em;
                }

                .subject-story-analyst p {
                    margin: 0.75rem 0 0;
                    color: var(--story-muted);
                    font-size: 0.74rem;
                    line-height: 1.72;
                    letter-spacing: 0.06em;
                    text-wrap: pretty;
                }

                .subject-story-report-mini {
                    display: grid;
                    gap: 0.55rem;
                    border-top: 1px solid var(--story-line);
                    margin-top: 0.9rem;
                    padding-top: 0.85rem;
                }

                .subject-story-report-mini div {
                    display: grid;
                    gap: 0.22rem;
                }

                .subject-story-report-mini b {
                    color: rgba(243,240,234,0.75);
                    font-size: 0.68rem;
                    letter-spacing: 0.1em;
                    line-height: 1.45;
                }

                .subject-story-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    margin-top: clamp(3rem, 5vw, 5rem);
                    padding-top: 1.35rem;
                    border-top: 1px solid var(--story-line);
                    color: var(--story-faint);
                    font-size: 0.58rem;
                    font-weight: 900;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                }

                .subject-story-page.is-retro {
                    --story-bg: #efe9e0;
                    --story-panel: rgba(139,38,29,0.055);
                    --story-panel-soft: rgba(255,255,255,0.36);
                    --story-ink: #211b17;
                    --story-muted: rgba(33,27,23,0.62);
                    --story-faint: rgba(33,27,23,0.38);
                    --story-line: rgba(139,38,29,0.18);
                    --story-line-strong: rgba(139,38,29,0.34);
                    --story-red: #8B261D;
                    --story-red-soft: rgba(139,38,29,0.48);
                    --story-red-faint: rgba(139,38,29,0.09);
                    background:
                        radial-gradient(circle at 72% 12%, rgba(139,38,29,0.06), transparent 31%),
                        linear-gradient(180deg, rgba(255,255,255,0.4), rgba(139,38,29,0.03)),
                        var(--story-bg);
                }

                .subject-story-page.is-retro .subject-story-chrome,
                .subject-story-page.is-retro .subject-story-close,
                .subject-story-page.is-retro .subject-story-return,
                .subject-story-page.is-retro .subject-story-spine,
                .subject-story-page.is-retro .subject-story-dna-card,
                .subject-story-page.is-retro .subject-story-report-card,
                .subject-story-page.is-retro .subject-story-verdict,
                .subject-story-page.is-retro .subject-story-analyst,
                .subject-story-page.is-retro .subject-story-nav a,
                .subject-story-page.is-retro .subject-story-nav button,
                .subject-story-page.is-retro .subject-story-asset-card {
                    background: rgba(255,255,255,0.44);
                    box-shadow: none;
                }

                .subject-story-page.is-retro .subject-story-scroll {
                    background:
                        linear-gradient(90deg, rgba(139,38,29,0.11) 0 1px, transparent 1px calc(100% - 1px), rgba(139,38,29,0.11) calc(100% - 1px) 100%),
                        radial-gradient(ellipse at 52% 0%, rgba(139,38,29,0.055), transparent 34%);
                }

                .subject-story-page.is-retro .subject-story-image img {
                    filter: grayscale(0.7) sepia(0.22) contrast(1.08) brightness(0.92);
                }

                @media (max-width: 1280px) {
                    .subject-story-grid {
                        grid-template-columns: minmax(11.5rem, 0.54fr) minmax(31rem, 1.34fr);
                    }

                    .subject-story-right {
                        position: static;
                        grid-column: 2;
                    }

                    .subject-story-image {
                        aspect-ratio: 16 / 7;
                    }
                }

                @media (max-width: 900px) {
                    .subject-story-scroll {
                        height: calc(100% - 3.55rem);
                    }

                    .subject-story-grid {
                        display: flex;
                        flex-direction: column;
                        padding: 1.1rem 1.1rem 4rem;
                    }

                    .subject-story-left,
                    .subject-story-right {
                        position: static;
                    }

                    .subject-story-left {
                        order: 2;
                        margin-bottom: 1rem;
                    }

                    .subject-story-main {
                        order: 1;
                    }

                    .subject-story-right {
                        order: 3;
                    }

                    .subject-story-spine {
                        min-height: auto;
                    }

                    .subject-story-case-code {
                        font-size: 3.2rem;
                    }

                    .subject-story-hero {
                        min-height: auto;
                        padding: 2.6rem 0 3rem;
                    }

                    .subject-story-title {
                        font-size: 3.2rem;
                    }

                    .subject-story-hero-foot,
                    .subject-story-dna-grid,
                    .subject-story-hook {
                        grid-template-columns: 1fr;
                    }

                    .subject-story-paragraph {
                        padding-left: 2.15rem;
                        font-size: 1rem;
                        line-height: 2.05;
                    }

                    .subject-story-chapter,
                    .subject-story-assets-grid {
                        grid-template-columns: 1fr;
                    }

                    .subject-story-chapter-meta {
                        position: static;
                    }

                    .subject-story-chapter-body p:first-of-type::first-letter {
                        float: none;
                        margin: 0;
                        font-size: inherit;
                        line-height: inherit;
                    }

                    .subject-story-right {
                        margin-top: 1.4rem;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .subject-story-page::after {
                        animation: none;
                    }

                    .subject-story-scroll {
                        scroll-behavior: auto;
                    }
                }
            `}</style>

            <div className="subject-story-chrome">
                <button type="button" onClick={onClose} className="subject-story-return">
                    <ArrowLeft size={14} />
                    {lang === 'CN' ? '回到索引库' : 'Back to index'}
                </button>
                <div className="subject-story-chrome-title">
                    <FileText size={15} />
                    <span>{lang === 'CN' ? `解密档案 / ${caseData.id.toUpperCase()} / ${pageLabel}` : `Declassified file / ${caseData.id.toUpperCase()} / ${pageLabel}`}</span>
                </div>
                {!renderInPlace && (
                    <button type="button" onClick={onClose} className="subject-story-close" aria-label={lang === 'CN' ? '关闭' : 'Close'}>
                        <X size={15} />
                    </button>
                )}
            </div>

            <div className="subject-story-scroll custom-scrollbar">
                <div className="subject-story-grid">
                    <aside className="subject-story-left" aria-label={lang === 'CN' ? '档案信息' : 'Case information'}>
                        <div className="subject-story-spine">
                            <div className="subject-story-eyebrow">
                                <span className="subject-story-marker" />
                                <span>Record initialized</span>
                            </div>
                            <div className="subject-story-case-code">
                                {caseData.id.toUpperCase()}
                            </div>
                            <div className="subject-story-meta-list">
                                <div className="subject-story-meta-item">
                                    <span className="subject-story-label">Classification</span>
                                    <span className="subject-story-value">{caseData.category}</span>
                                </div>
                                <div className="subject-story-meta-item">
                                    <span className="subject-story-label">Date</span>
                                    <span className="subject-story-value">{caseData.date}</span>
                                </div>
                                <div className="subject-story-meta-item">
                                    <span className="subject-story-label">Analyst</span>
                                    <span className="subject-story-value">{content.report.analyst}</span>
                                </div>
                            </div>
                        </div>

                        <nav className="subject-story-nav" aria-label={lang === 'CN' ? '档案页面' : 'Archive pages'}>
                            <button type="button" className={activePage === 'story' ? 'is-active' : ''} onClick={() => setActivePage('story')}>
                                <span>{lang === 'CN' ? '故事页' : 'Story page'}</span>
                                <BookOpen size={13} />
                            </button>
                            <button type="button" className={activePage === 'assets' ? 'is-active' : ''} onClick={() => setActivePage('assets')}>
                                <span>{lang === 'CN' ? '资产页' : 'Assets page'}</span>
                                <Database size={13} />
                            </button>
                            <button type="button" className={activePage === 'analysis' ? 'is-active' : ''} onClick={() => setActivePage('analysis')}>
                                <span>{lang === 'CN' ? '精神分析页' : 'Analysis page'}</span>
                                <Fingerprint size={13} />
                            </button>
                        </nav>
                    </aside>

                    <main className="subject-story-main">
                        <section className="subject-story-hero">
                            <div className="subject-story-eyebrow">
                                <ScanLine size={15} />
                                <span>[ PART 00 ] / {content.report.subjectState}</span>
                            </div>
                            <h1 className="subject-story-title">{title}</h1>
                            <div className="subject-story-subtitle">{secondaryTitle}</div>
                            <p className="subject-story-summary">{summary}</p>
                            <div className="subject-story-hero-foot">
                                <div className="subject-story-chip">
                                    <span className="subject-story-label">Diagnosis</span>
                                    <span className="subject-story-value">{content.report.diagnosis}</span>
                                </div>
                                <div className="subject-story-chip">
                                    <span className="subject-story-label">Author style</span>
                                    <span className="subject-story-value">{content.dna.authorStyle}</span>
                                </div>
                                <div className="subject-story-chip">
                                    <span className="subject-story-label">Language</span>
                                    <span className="subject-story-value">{content.report.language}</span>
                                </div>
                            </div>
                        </section>

                        {activePage === 'story' && (
                            <section id="story-log" className="subject-story-section">
                                <div className="subject-story-section-head">
                                    <BookOpen size={15} />
                                    <span>{lang === 'CN' ? '故事正文 / Story Reader' : 'Story Reader'}</span>
                                </div>
                                {storyChapters.map((chapter) => (
                                    <article key={chapter.id} className="subject-story-chapter">
                                        <div className="subject-story-chapter-meta">
                                            <b>{chapter.label}</b>
                                            {chapter.meta}
                                        </div>
                                        <div className="subject-story-chapter-body">
                                            <h2>{chapter.title}</h2>
                                            {chapter.paragraphs.map((paragraph) => (
                                                <p key={paragraph}>{paragraph}</p>
                                            ))}
                                            {chapter.quote && (
                                                <div className="subject-story-pullquote">{chapter.quote}</div>
                                            )}
                                            {chapter.image && (
                                                <figure className="subject-story-illustration">
                                                    <img src={chapter.image} alt={chapter.title} />
                                                    <figcaption>{chapter.caption}</figcaption>
                                                </figure>
                                            )}
                                        </div>
                                    </article>
                                ))}
                                <div className="subject-story-end-panel">
                                    <p>{lang === 'CN' ? '黑暗本身，就是一种仁慈。' : 'Darkness itself is a form of mercy.'}</p>
                                    <div className="subject-story-page-actions">
                                        <button type="button" onClick={() => setActivePage('assets')}>
                                            {lang === 'CN' ? '查看资产页' : 'View assets'}
                                        </button>
                                        <button type="button" onClick={() => setActivePage('analysis')}>
                                            {lang === 'CN' ? '查看精神分析页' : 'View analysis'}
                                        </button>
                                    </div>
                                </div>
                            </section>
                        )}

                        {activePage === 'assets' && (
                            <section id="asset-atlas" className="subject-story-section">
                                <div className="subject-story-section-head">
                                    <Database size={15} />
                                    <span>{lang === 'CN' ? '资产页 / Asset Atlas' : 'Asset Atlas'}</span>
                                </div>
                                <div className="subject-story-assets-grid">
                                    {assetItems.map((item) => (
                                        <article key={item.title} className="subject-story-asset-card">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                onError={(event) => {
                                                    event.currentTarget.src = '/portal-assets/subject-archive-lower-1777901002241.png';
                                                }}
                                            />
                                            <div className="subject-story-asset-copy">
                                                <span className="subject-story-label">{item.label}</span>
                                                <h3>{item.title}</h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        )}

                        {activePage === 'analysis' && (
                            <>
                                <section id="dna-stack" className="subject-story-section">
                                    <div className="subject-story-section-head">
                                        <Database size={15} />
                                        <span>{lang === 'CN' ? '底层引擎参数 / DNA Stack' : 'DNA Stack'}</span>
                                    </div>
                                    <div className="subject-story-dna-grid">
                                        {content.dna.parameters.map((parameter) => {
                                            const parsed = splitParameter(parameter);
                                            return (
                                                <div key={parameter} className="subject-story-dna-card">
                                                    <div className="subject-story-dna-code">{parsed.code}</div>
                                                    <div className="subject-story-dna-detail">{parsed.detail}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="subject-story-hook">
                                        <div>
                                            <span className="subject-story-label">Author Style</span>
                                            <span className="subject-story-value">{content.dna.authorStyle}</span>
                                        </div>
                                        <div>
                                            <span className="subject-story-label">Core Hook</span>
                                            <span className="subject-story-value">{content.dna.coreHook}</span>
                                        </div>
                                    </div>
                                </section>

                                <section id="analysis-report" className="subject-story-section">
                                    <div className="subject-story-section-head">
                                        <Fingerprint size={15} />
                                        <span>{lang === 'CN' ? '精神分析报告 / Psychoanalysis Report' : 'Psychoanalysis Report'}</span>
                                    </div>
                                    <div className="subject-story-report-stack">
                                        {content.report.sections.map((section) => (
                                            <article key={section.title} className="subject-story-report-card">
                                                <h3>{section.title}</h3>
                                                <div>{section.body}</div>
                                            </article>
                                        ))}
                                        <div className="subject-story-verdict">
                                            <div className="subject-story-side-title">
                                                <Crosshair size={14} />
                                                <span>{lang === 'CN' ? '最终判词' : 'Final verdict'}</span>
                                            </div>
                                            <p>{content.report.conclusion}</p>
                                            <p>{content.report.verdict}</p>
                                        </div>
                                    </div>
                                </section>
                            </>
                        )}

                        <footer className="subject-story-footer">
                            <span>End of document</span>
                            <span>{caseData.id.toUpperCase()} / EOF</span>
                        </footer>
                    </main>

                    <aside className="subject-story-right" aria-label={lang === 'CN' ? '视觉与诊断摘要' : 'Visual and diagnostic summary'}>
                        <div className="subject-story-image">
                            <img
                                src={caseData.imageUrl}
                                alt={title}
                                onError={(event) => {
                                    event.currentTarget.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900';
                                }}
                            />
                            <div className="subject-story-image-caption">{caseData.category} / {caseData.date}</div>
                        </div>

                        <div className="subject-story-analyst">
                            <div className="subject-story-side-title">
                                <Fingerprint size={14} />
                                <span>{lang === 'CN' ? '诊断侧写' : 'Diagnostic profile'}</span>
                            </div>
                            <h3>{content.report.diagnosis}</h3>
                            <p>{content.report.subjectState}</p>
                            <div className="subject-story-report-mini">
                                <div>
                                    <span className="subject-story-label">Core Hook</span>
                                    <b>{content.dna.coreHook}</b>
                                </div>
                                {leadReport && (
                                    <div>
                                        <span className="subject-story-label">First Cut</span>
                                        <b>{leadReport.title}</b>
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );

    if (renderInPlace) return page;

    return (
        <div className="mist-archive-overlay fixed inset-0 backdrop-blur-md z-[110] flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="h-[94vh] w-full max-w-[min(1680px,96vw)] overflow-hidden border border-white/15 shadow-2xl">
                {page}
            </div>
        </div>
    );
};
