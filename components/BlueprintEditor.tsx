
import React, { useState, useEffect, useRef, useMemo } from 'react';
/* Added SubjectType and AestheticMode to imports */
import { CreativeBlueprint, BlueprintLanguage, NarrativeFieldState, CreativeTreatment, DriverType, CollectionItem, WorldLawConfig, SubjectType, AestheticMode } from '../types';
import {
    X, Wand2, Loader2, ArrowLeft, ArrowRight, History as HistoryIcon,
    Globe, BookOpen, ImageIcon, BrainCircuit, Target, Film, Eye, Box,
    ClipboardCopy, Check, HelpCircle, Home, TestTube, Zap, Palette,
    Settings2, Layers, Terminal, Feather, Bookmark, Star, FilePlus, Download, List, Database, Lightbulb, ScanLine, Heart, Activity, Upload, Flame
} from 'lucide-react';
import * as geminiService from '../services/geminiService';
import { useTheme } from '../contexts/ThemeContext';
import { CommercialView } from './blueprint/CommercialView';
import { NarrativeView } from './blueprint/NarrativeView';
import { AssetsView } from './blueprint/AssetsView';
import { AnalysisView } from './blueprint/AnalysisView';
import { ExperimentalView } from './blueprint/ExperimentalView';
import { AestheticView } from './blueprint/AestheticView';
import { TrailerView } from './blueprint/TrailerView';
import { PoeticView } from './blueprint/PoeticView';
import { MetonymyView } from './blueprint/MetonymyView';
import {
    NARRATIVE_ENGINE_BLOCKS,
    COMMERCIAL_ENGINE_BLOCKS,
    EXPERIMENTAL_ENGINE_BLOCKS,
    AESTHETIC_ENGINE_BLOCKS,
    TRAILER_ENGINE_BLOCKS,
    COMM_SKIN_BLOCKS,
    EXPERIMENTAL_SKIN_BLOCKS,
    TRAILER_SKIN_BLOCKS
} from '../constants';
import { ALL_SKIN_BLOCKS } from '../data/skin_libraries';
import { persistence } from '../services/persistence';
import { TaskManagerPanel } from './TaskManagerPanel';
import { globalTaskManager } from '../services/taskManager';
import { supabaseDatabase } from '../services/supabaseDatabase';
import { supabase } from '../services/supabaseAuth';

interface BlueprintEditorProps {
    blueprint: CreativeBlueprint | null;
    onClose: () => void;
    onGoHome: () => void;
    onSave: (blueprint: CreativeBlueprint) => void;
    language: BlueprintLanguage;
    onToggleLanguage: () => void;
    onUpdateWithAI: any;
    onGenerateAssetPrompt: any;
    onGenerateAssetImage: (prompt: string) => Promise<string | null>;
    onGenerateAssets: any;
    onAnalyzePsycho: (fieldState: NarrativeFieldState, synopsis: string) => Promise<string>;
    fieldState: NarrativeFieldState;
    treatments: CreativeTreatment[];
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    driverName: string;
    isHistoryMode: boolean;
    onOpenHistory: () => void;
    onOpenManual: () => void;
    onOpenSuture: () => void;
    onSaveToHistory: (blueprint: CreativeBlueprint) => void;
    // Fix: Added missing onSaveToCollection property to satisfy App.tsx usage
    onSaveToCollection: (blueprint: CreativeBlueprint) => void;
    onGlobalCopy: () => void;
    selectedDriver: DriverType;
    worldLaw: WorldLawConfig;
    visionInput: string;
    visionAnalysis: string;
    /* Added missing props to fix child component scope issues */
    subjectType: SubjectType;
    aestheticMode: AestheticMode;
    // Added customLibraryDefs to props to propagate to AestheticView
    customLibraryDefs: Record<string, { def: string; core: string }>;
    theme?: string;
    isSutureOpen?: boolean;
    onSutureOpenChange?: (open: boolean) => void;
}

// ... (Create Empty Blueprint Functions remain the same)
const createEmptyCommercial = (lang: BlueprintLanguage): CreativeBlueprint => ({
    treatmentId: `comm_manual_${Date.now()}`,
    driverType: DriverType.COMMERCIAL,
    styleName: lang === 'EN' ? 'Blank Commercial Brief' : '空白商业执行单',
    narrative: {
        title: lang === 'EN' ? 'NEW CAMPAIGN' : '新商业项目',
        logline: lang === 'EN' ? 'Enter brand hook...' : '在此输入品牌核心钩子...',
        synopsis: lang === 'EN' ? 'Define campaign narrative flow...' : '定义营销叙事流向...'
    },
    context: { world: "", tone: "", colorPalette: ['#00FFFF', '#001A1A'], moodboard: { prompt: "", images: [], selectedImageId: null } },
    assets: { characters: [], locations: [], props: [] },
    commercialData: {
        slogan: lang === 'EN' ? "BRAND SLOGAN" : "品牌广告语",
        visualFlow: "",
        copywriting: "",
        strategy: {
            core_desire: "", target_audience: "", pain_point: "", product_role: "",
            endorsement: "", ritual: "", threat: "", brand_promise: ""
        },
        avScript: [], visualNotes: ""
    }
});

const createEmptyExperimental = (lang: BlueprintLanguage): CreativeBlueprint => ({
    treatmentId: `exp_manual_${Date.now()}`,
    driverType: DriverType.EXPERIMENTAL,
    styleName: lang === 'EN' ? 'Blank Reduction Protocol' : '空白还原协议',
    narrative: {
        title: lang === 'EN' ? 'NEW EXPERIMENT' : '新实验项目',
        logline: lang === 'EN' ? 'Enter concept axiom...' : '在此输入核心观念公理...',
        synopsis: lang === 'EN' ? 'Define deconstruction logic...' : '在此定义还原与解构逻辑...'
    },
    context: { world: "", tone: "", colorPalette: ['#A855F7', '#1A0033'], moodboard: { prompt: "", images: [], selectedImageId: null } },
    assets: { characters: [], locations: [], props: [] },
    experimentalData: {
        concept: lang === 'EN' ? "CONCEPT AXIOM" : "核心观念",
        method: "", sensation: "", visualManifesto: "", installationPlan: ""
    }
});

const createEmptyTrailer = (lang: BlueprintLanguage): CreativeBlueprint => ({
    treatmentId: `trl_manual_${Date.now()}`,
    driverType: DriverType.TRAILER,
    styleName: lang === 'EN' ? 'Blank Trailer Cut' : '空白预告片执行单',
    narrative: {
        title: lang === 'EN' ? 'NEW TRAILER' : '新预告片项目',
        logline: lang === 'EN' ? 'Enter trailer hook...' : '在此输入预告片钩子...',
        synopsis: lang === 'EN' ? 'Define the tease and tempo...' : '定义诱饵与节奏布局...'
    },
    context: { world: "", tone: "", colorPalette: ['#FB923C', '#331A00'], moodboard: { prompt: "", images: [], selectedImageId: null } },
    assets: { characters: [], locations: [], props: [] },
    trailerData: {
        hook: lang === 'EN' ? "TRAILER HOOK" : "预告片核心钩子",
        copywriting: ["", "", ""], musicCue: "", beatSheet: []
    }
});

const createEmptyAesthetic = (lang: BlueprintLanguage): CreativeBlueprint => ({
    treatmentId: `aes_manual_${Date.now()}`,
    driverType: DriverType.AESTHETIC,
    styleName: lang === 'EN' ? 'Blank Aesthetic Manifesto' : '空白美学圣经',
    narrative: {
        title: lang === 'EN' ? 'NEW VISUAL' : '新视觉项目',
        logline: lang === 'EN' ? 'Enter visual core...' : '在此输入视觉核心构思...',
        synopsis: lang === 'EN' ? 'Define aesthetic genes...' : '在此定义美学基因表达...'
    },
    context: { world: "", tone: "", colorPalette: ['#F43F5E', '#330000'], moodboard: { prompt: "", images: [], selectedImageId: null } },
    assets: { characters: [], locations: [], props: [] },
    aestheticData: {
        visualConcept: lang === 'EN' ? "VISUAL CORE" : "视觉核心",
        techSpecs: [{ label: "Camera", value: "" }, { label: "Lens", value: "" }, { label: "Lighting", value: "" }, { label: "Render", value: "" }],
        colorLogic: "", promptEngineering: ""
    }
});

const createEmptyNarrative = (lang: BlueprintLanguage): CreativeBlueprint => ({
    treatmentId: `narr_manual_${Date.now()}`,
    driverType: DriverType.NARRATIVE,
    styleName: lang === 'EN' ? 'Blank Story Bible' : '空白故事圣经',
    narrative: {
        title: lang === 'EN' ? 'NEW STORY' : '新故事项目',
        logline: lang === 'EN' ? 'Enter logline...' : '在此输入故事梗概...',
        synopsis: ""
    },
    context: { world: "", tone: "", colorPalette: ['#D4AF37', '#1A1A00'], moodboard: { prompt: "", images: [], selectedImageId: null } },
    assets: { characters: [], locations: [], props: [] },
    metonymyData: {
        screenplay: [],
        staticStoryboard: [],
        dynamicScript: []
    }
});

export const BlueprintEditor: React.FC<BlueprintEditorProps> = ({
    blueprint: initialBlueprint,
    onClose,
    onGoHome,
    onGenerateAssetImage,
    onUpdateWithAI,
    onGenerateAssetPrompt,
    onGenerateAssets,
    onAnalyzePsycho,
    language,
    onToggleLanguage,
    fieldState,
    driverName,
    onOpenHistory,
    onOpenManual,
    onOpenSuture,
    onUpdateBlueprint,
    selectedDriver,
    treatments,
    onSave,
    onGlobalCopy,
    worldLaw,
    visionInput,
    visionAnalysis,
    onSaveToHistory,
    onSaveToCollection,
    subjectType,
    aestheticMode,
    customLibraryDefs,
    isSutureOpen,
    onSutureOpenChange,
    theme
}) => {
    const { theme: contextTheme } = useTheme(); // Renamed to avoid conflict, though `theme` prop will override
    const effectiveTheme = theme || contextTheme;

    const defaultBlueprint = useMemo(() => {
        if (initialBlueprint) return initialBlueprint;
        switch (selectedDriver) {
            case DriverType.COMMERCIAL: return createEmptyCommercial(language);
            case DriverType.EXPERIMENTAL: return createEmptyExperimental(language);
            case DriverType.TRAILER: return createEmptyTrailer(language);
            case DriverType.AESTHETIC: return createEmptyAesthetic(language);
            default: return createEmptyNarrative(language);
        }
    }, [selectedDriver, language]);

    const [timeline, setTimeline] = useState<CreativeBlueprint[]>([defaultBlueprint]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSaved, setIsSaved] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isParamsPanelOpen, setIsParamsPanelOpen] = useState(false);
    const [isTaskManagerOpen, setIsTaskManagerOpen] = useState(false);
    const [activeTaskCount, setActiveTaskCount] = useState(0);
    const [isContinueUploading, setIsContinueUploading] = useState(false);

    useEffect(() => {
        const unsubscribe = globalTaskManager.subscribe(tasks => {
            setActiveTaskCount(tasks.filter(t => t.status === 'generating').length);
        });
        return () => unsubscribe();
    }, []);

    const prevIdRef = useRef<string | null>(null);
    // Loop prevention: store the stringified version of the last blueprint we sent up
    const lastEmittedRef = useRef<string>("");

    useEffect(() => {
        const currentId = initialBlueprint?.treatmentId;
        if (currentId && currentId !== prevIdRef.current) {
            const safeBlueprint = {
                ...initialBlueprint!,
                context: initialBlueprint!.context || { world: "", tone: "", colorPalette: [], moodboard: { prompt: "", images: [], selectedImageId: null } },
                narrative: initialBlueprint!.narrative || { title: "", logline: "", synopsis: "" },
                assets: initialBlueprint!.assets || { characters: [], locations: [], props: [] }
            };
            setTimeline([safeBlueprint]);
            setCurrentIndex(0);
            prevIdRef.current = currentId;
        } else if (!initialBlueprint && prevIdRef.current !== 'default') {
            setTimeline([defaultBlueprint]);
            setCurrentIndex(0);
            prevIdRef.current = 'default';
        }
    }, [initialBlueprint, defaultBlueprint]);

    const currentBlueprint = timeline[currentIndex];
    const effectiveBlueprint = currentBlueprint || defaultBlueprint;
    const effectiveDriverType = effectiveBlueprint.driverType;

    // Fix: Check for changes before calling update to prevent infinite loops
    useEffect(() => {
        if (currentBlueprint) {
            const str = JSON.stringify(currentBlueprint);
            if (str !== lastEmittedRef.current) {
                onUpdateBlueprint(currentBlueprint);
                lastEmittedRef.current = str;
            }
        }
    }, [currentBlueprint, onUpdateBlueprint]);

    const uiConfig = useMemo(() => {
        let themeAccent = 'text-gold-primary';
        let themeBorder = 'border-[#D4AF37]/30';
        let themeText = 'text-gold-primary';
        let themeHoverText = 'group-hover:text-gold-primary';
        let themeBgActive = 'bg-gold-primary/10';
        let themeSidebarBorder = 'border-[#D4AF37]/15';
        let themeActiveBorder = 'border-gold-primary'; // Solid gold for active marker
        let themeSidebarBg = 'bg-[#0a0a0a]'; // Default for non-retro
        let themeEmptyPulse = 'bg-gold-primary/20'; // Default for non-retro
        let menuItems: { id: string, label: string, icon: React.ElementType }[] = [];

        if (effectiveDriverType === DriverType.COMMERCIAL) {
            menuItems = [
                { id: 'STRATEGY', label: language === 'EN' ? "Core Strategy" : "核心策略", icon: Target },
                { id: 'SCRIPT', label: language === 'EN' ? "AV Script" : "声画分镜", icon: Film },
                { id: 'IDENTITY', label: language === 'EN' ? "Visual Identity" : "视觉识别", icon: Eye },
                { id: 'ASSETS', label: language === 'EN' ? "Key Assets" : "关键资产", icon: Box },
                { id: 'METONYMY', label: language === 'EN' ? "Script Metonymy" : "剧本转喻", icon: Wand2 }
            ];
        } else if (effectiveDriverType === DriverType.EXPERIMENTAL) {
            menuItems = [
                { id: 'PHENOMENA', label: language === 'EN' ? "Phenomenology" : "现象学图谱", icon: Eye },
                { id: 'STRUCTURAL', label: language === 'EN' ? "Structural Form" : "结构形式", icon: Layers },
                { id: 'MATERIAL', label: language === 'EN' ? "Material Action" : "物质行动", icon: Terminal },
                { id: 'ALGORITHM', label: language === 'EN' ? "Algorithmic Rules" : "算法规则", icon: Terminal },
                { id: 'METONYMY', label: language === 'EN' ? "Process Logic" : "生成演练", icon: Wand2 }
            ];
        } else if (effectiveDriverType === DriverType.AESTHETIC) {
            menuItems = [
                { id: 'AESTHETIC', label: language === 'EN' ? "Aesthetic Rules" : "美学法则", icon: Palette },
                { id: 'ASSETS', label: language === 'EN' ? "Visual Components" : "组件切片", icon: Box },
                { id: 'POETIC', label: language === 'EN' ? "Aesthetic Prompt" : "美学提示词", icon: Feather }
            ];
        } else if (effectiveDriverType === DriverType.TRAILER) {
            menuItems = [
                { id: 'PREMISE', label: language === 'EN' ? "Core Premise" : "核心动因", icon: Flame },
                { id: 'RHYTHM', label: language === 'EN' ? "Editing Rhythm" : "剪辑律动", icon: Activity },
                { id: 'TRAILER', label: language === 'EN' ? "Trailer Script" : "预告分镜", icon: Film },
                { id: 'ASSETS', label: language === 'EN' ? "Key Assets" : "关键资产", icon: Box },
                { id: 'METONYMY', label: language === 'EN' ? "Script Metonymy" : "剧本转喻", icon: Wand2 }
            ];
        } else { // Default for Narrative
            menuItems = [
                { id: 'NARRATIVE', label: language === 'EN' ? "Core Narrative" : "核心叙事", icon: BookOpen },
                { id: 'ASSETS', label: language === 'EN' ? "Scene & Assets" : "场景资产", icon: ImageIcon },
                { id: 'ANALYSIS', label: language === 'EN' ? "Psycho Analysis" : "心理拓扑", icon: BrainCircuit },
                { id: 'METONYMY', label: language === 'EN' ? "Script Metonymy" : "剧本转喻", icon: Wand2 }
            ];
        }

        if (effectiveTheme === 'retro') {
            themeAccent = 'text-[#8B261D]';
            themeText = 'text-[#8B261D]';
            themeHoverText = 'group-hover:text-[#8B261D]';
            themeBorder = 'border-[#8B261D]/20';
            themeBgActive = 'bg-[#8B261D]/10';
            themeSidebarBg = 'bg-[var(--bg-header)]';
            themeSidebarBorder = 'border-[#8B261D]/20';
            themeActiveBorder = 'border-[#8B261D]';
            themeEmptyPulse = 'bg-[#8B261D]/20';
        } else if (effectiveDriverType === DriverType.COMMERCIAL) {
            themeAccent = 'text-cyan-400';
            themeText = 'text-cyan-400';
            themeHoverText = 'group-hover:text-cyan-400';
            themeBorder = 'border-cyan-500/30';
            themeBgActive = 'bg-cyan-900/20';
            themeSidebarBorder = 'border-cyan-400/15';
            themeActiveBorder = 'border-cyan-400';
        } else if (effectiveDriverType === DriverType.AESTHETIC) {
            themeAccent = 'text-rose-400';
            themeText = 'text-rose-400';
            themeHoverText = 'group-hover:text-rose-400';
            themeBorder = 'border-rose-500/30';
            themeBgActive = 'bg-rose-900/20';
            themeSidebarBorder = 'border-rose-400/15';
            themeActiveBorder = 'border-rose-400';
        } else if (effectiveDriverType === DriverType.EXPERIMENTAL) {
            themeAccent = 'text-purple-400';
            themeText = 'text-purple-400';
            themeHoverText = 'group-hover:text-purple-400';
            themeBorder = 'border-purple-500/30';
            themeBgActive = 'bg-purple-900/20';
            themeSidebarBorder = 'border-purple-400/15';
            themeActiveBorder = 'border-purple-400';
        } else if (effectiveDriverType === DriverType.TRAILER) {
            themeAccent = 'text-orange-400';
            themeText = 'text-orange-400';
            themeHoverText = 'group-hover:text-orange-400';
            themeBorder = 'border-orange-500/30';
            themeBgActive = 'bg-orange-900/20';
            themeSidebarBorder = 'border-orange-400/15';
            themeActiveBorder = 'border-orange-400';
        }

        return { type: effectiveDriverType, themeAccent, themeBorder, themeText, themeHoverText, themeBgActive, themeSidebarBorder, themeActiveBorder, themeSidebarBg, themeEmptyPulse, menuItems };
    }, [effectiveDriverType, language, effectiveTheme]);

    const [activeTab, setActiveTab] = useState<string>(uiConfig.menuItems[0].id);

    useEffect(() => {
        if (!uiConfig.menuItems.some(item => item.id === activeTab)) {
            setActiveTab(uiConfig.menuItems[0].id);
        }
    }, [uiConfig.menuItems, activeTab]);

    const [globalCopied, setGlobalCopied] = useState(false);
    const [isContinueModalOpen, setIsContinueModalOpen] = useState(false);
    const [continueInput, setContinueInput] = useState("");
    const [continueImage, setContinueImage] = useState<string | null>(null);
    const [isContinuing, setIsContinuing] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const handleExportHtml = () => {
        const bp = effectiveBlueprint;
        const assets = bp.assets;

        // Helper for HTML escaping
        const escapeHtml = (unsafe: string) => {
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/"/g, "&#039;")
                .replace(/\n/g, "<br>");
        };

        let assetsHtml = '';
        if (assets.characters.length) {
            assetsHtml += `<h3 class="gold-text">人物 (Characters)</h3><ul>` + assets.characters.map(c => `<li><strong>${escapeHtml(c.name)}</strong>: ${escapeHtml(c.desc)}</li>`).join('') + `</ul>`;
        }
        if (assets.locations.length) {
            assetsHtml += `<h3 class="gold-text">场景 (Locations)</h3><ul>` + assets.locations.map(l => `<li><strong>${escapeHtml(l.name)}</strong>: ${escapeHtml(l.desc)}</li>`).join('') + `</ul>`;
        }
        if (assets.props.length) {
            assetsHtml += `<h3 class="gold-text">道具 (Props)</h3><ul>` + assets.props.map(p => `<li><strong>${escapeHtml(p.name)}</strong>: ${escapeHtml(p.desc)}</li>`).join('') + `</ul>`;
        }

        let psychoHtml = '';
        if (bp.narrative.psychoanalysis) {
            // Convert markdown-ish to basic HTML
            let analysisContent = bp.narrative.psychoanalysis
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/### (.*?)(<br>|$)/g, '<h4 class="gold-text">$1</h4>')
                .replace(/## (.*?)(<br>|$)/g, '<h3 class="gold-text">$1</h3>')
                .replace(/# (.*?)(<br>|$)/g, '<h2 class="gold-text">$1</h2>');

            // Handle formula display in HTML (simplistic replacement)
            analysisContent = analysisContent.replace(/\$\$(.*?)\$\$/g, '<div class="formula">$1</div>');

            psychoHtml = `
        <div class="section">
            <h2 class="gold-text">精神分析诊断报告 (Psychoanalysis)</h2>
            <div class="analysis-content">${analysisContent}</div>
        </div>
        `;
        }

        const htmlContent = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(bp.narrative.title)} - Visionary Bible</title>
<style>
body { font-family: "Microsoft YaHei", sans-serif; background: #050505; color: #ddd; max-width: 900px; margin: 0 auto; padding: 40px; line-height: 1.8; }
h1, h2, h3, h4 { color: #D4AF37 !important; border-bottom: 1px solid #333; padding-bottom: 10px; margin-top: 30px; }
h1 { font-size: 2.5em; text-align: center; border-bottom: 2px solid #D4AF37; padding-bottom: 20px; }
.meta { font-size: 0.9em; color: #888; margin-bottom: 40px; text-align: center; }
.section { background: #111; padding: 30px; margin-bottom: 30px; border-radius: 12px; border: 1px solid #222; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
.logline { font-style: italic; font-size: 1.2em; color: #D4AF37; margin: 10px 0; border-left: 4px solid #D4AF37; padding-left: 15px; }
.formula { background: #222; padding: 15px; border-radius: 5px; text-align: center; font-family: monospace; color: #fff; margin: 20px 0; border: 1px dashed #555; }
strong { color: #fff; }
ul { padding-left: 20px; }
li { margin-bottom: 10px; }
.gold-text { color: #D4AF37; }
</style>
</head>
<body>
<h1>${escapeHtml(bp.narrative.title)}</h1>
<div class="meta">
引擎: ${driverName} | 风格: ${escapeHtml(bp.styleName || 'N/A')} | ID: ${bp.treatmentId}
</div>

<div class="section">
<h2 class="gold-text">一句话梗概 (Logline)</h2>
<p class="logline">${escapeHtml(bp.narrative.logline)}</p>
</div>

<div class="section">
<h2 class="gold-text">故事大纲 (Synopsis)</h2>
<p>${escapeHtml(bp.narrative.synopsis)}</p>
</div>

<div class="section">
<h2 class="gold-text">世界法则 (World Rules)</h2>
<p>${escapeHtml(bp.context.world)}</p>
</div>

<div class="section">
<h2 class="gold-text">影调与视觉 (Tone & Visuals)</h2>
<p>${escapeHtml(bp.context.tone)}</p>
</div>

<div class="section">
<h2 class="gold-text">视觉资产库 (Assets)</h2>
${assetsHtml}
</div>

${psychoHtml}

<div class="section" style="border:none; background:transparent; text-align:center;">
<p style="color: #555; font-size: 0.8em;">Generated by Visionary Engine</p>
</div>

</body>
</html>
    `;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${bp.narrative.title || 'Visionary_Project'}_Bible.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleNewProject = () => {
        if (window.confirm(language === 'EN' ? "Reset project content?" : "是否重置项目内容？")) {
            onSave(effectiveBlueprint);
        }
    };

    const handleSaveToCollection = async () => {
        try {
            const newItem: CollectionItem = {
                id: Date.now().toString(),
                saveDate: new Date().toISOString(),
                blueprint: effectiveBlueprint
            };

            await persistence.saveCollectionItem(newItem);

            // Fix: Call onSaveToCollection prop to update parent state if needed
            // Note: App.tsx doesn't really use this arg but good for consistency
            if (onSaveToCollection) {
                onSaveToCollection(effectiveBlueprint);
            }

            setIsSaved(true);
            setTimeout(() => setIsSaved(false), 3000);
        } catch (e) {
            console.error("Failed to save collection to IndexedDB", e);
            alert(language === 'EN' ? "Failed to save collection." : "保存收藏失败。");
        }
    };

    const updateCurrentBlueprint = (updated: CreativeBlueprint) => {
        const newTimeline = [...timeline];
        newTimeline[currentIndex] = updated;
        setTimeline(newTimeline);
    };

    const handleContinueSubmit = async () => {
        if (!continueInput.trim() && !continueImage) return;
        setIsContinuing(true);
        try {
            const nextBlueprint = await geminiService.generateContinuation(effectiveBlueprint, continueInput, continueImage);
            if (nextBlueprint) {
                const newTimeline = [...timeline, nextBlueprint];
                setTimeline(newTimeline);
                setCurrentIndex(newTimeline.length - 1);
                setIsContinueModalOpen(false);
                setContinueInput("");
                setContinueImage(null);
            }
        } catch (e) {
            console.error(e);
            alert("Continuation failed.");
        } finally {
            setIsContinuing(false);
        }
    };

    const handleGlobalCopyClick = () => {
        if (onGlobalCopy) {
            onGlobalCopy();
            setGlobalCopied(true);
            setTimeout(() => setGlobalCopied(false), 2000);
        }
    };

    const fileInputRef = useRef<HTMLInputElement>(null);
    const continueFileInputRef = useRef<HTMLInputElement>(null);
    const handleContinueImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setIsContinueUploading(true);
            try {
                const url = await supabaseDatabase.uploadImage(file);
                if (url) {
                    setContinueImage(url);
                }
            } catch (err) {
                console.error("Upload failed:", err);
            } finally {
                setIsContinueUploading(false);
            }
        }
    };

    const getBlockName = (id: string) => {
        const allBlocks = [
            ...NARRATIVE_ENGINE_BLOCKS,
            ...COMMERCIAL_ENGINE_BLOCKS,
            ...EXPERIMENTAL_ENGINE_BLOCKS,
            ...AESTHETIC_ENGINE_BLOCKS,
            ...TRAILER_ENGINE_BLOCKS,
            ...ALL_SKIN_BLOCKS,
            ...COMM_SKIN_BLOCKS,
            ...EXPERIMENTAL_SKIN_BLOCKS,
            ...TRAILER_SKIN_BLOCKS
        ];
        const block = allBlocks.find(b => b.id === id);
        if (block) return language === 'EN' ? block.enName : block.name;
        if (id === 'skin_genre') return language === 'EN' ? "GENRE" : "类型基因";
        if (id === 'skin_animation_genre') return language === 'EN' ? "ANIMATION GENRE" : "动画基因";
        if (id === 'skin_year_exact') return language === 'EN' ? "YEAR" : "年代";
        if (id === 'skin_country_exact') return language === 'EN' ? "COUNTRY" : "国家";
        return id;
    };

    const isMetonymyMode = activeTab === 'METONYMY';
    const mainPaddingClass = isMetonymyMode ? 'p-0' : 'p-8 md:p-12';

    const renderContent = () => {
        if (activeTab === 'ASSETS') {
            return (
                <AssetsView
                    blueprint={effectiveBlueprint}
                    language={language}
                    isCommercial={effectiveDriverType === DriverType.COMMERCIAL}
                    isAesthetic={effectiveDriverType === DriverType.AESTHETIC}
                    onUpdateBlueprint={updateCurrentBlueprint}
                    onGenerateAssetImage={onGenerateAssetImage}
                    onZoom={setLightboxImage}
                    themeAccent={uiConfig.themeAccent}
                    themeBorder={uiConfig.themeBorder}
                    theme={effectiveTheme}
                />
            );
        }

        switch (effectiveDriverType) {
            case DriverType.COMMERCIAL:
                if (activeTab === 'METONYMY') {
                    return (
                        <MetonymyView
                            blueprint={effectiveBlueprint}
                            language={language}
                            onUpdateBlueprint={updateCurrentBlueprint}
                            themeAccent={uiConfig.themeAccent}
                            themeBorder={uiConfig.themeBorder}
                            isFullScreen={!isSidebarOpen}
                            onToggleFullScreen={() => setIsSidebarOpen(prev => !prev)}
                            onSutureOpenChange={onSutureOpenChange}
                            fieldState={fieldState}
                            onSaveToHistory={onSaveToHistory}
                            theme={effectiveTheme}
                        />
                    );
                }
                return (
                    <CommercialView
                        blueprint={effectiveBlueprint}
                        activeTab={activeTab as any}
                        language={language}
                        onGenerateAssetImage={onGenerateAssetImage}
                        onZoom={setLightboxImage}
                        onUpdateBlueprint={updateCurrentBlueprint}
                        themeAccent={uiConfig.themeAccent}
                        themeBorder={uiConfig.themeBorder}
                        theme={effectiveTheme}
                    />
                );
            case DriverType.EXPERIMENTAL:
                return (
                    <ExperimentalView
                        blueprint={effectiveBlueprint}
                        activeTab={activeTab as any}
                        language={language}
                        onUpdateBlueprint={updateCurrentBlueprint}
                        themeAccent={uiConfig.themeAccent}
                        themeBorder={uiConfig.themeBorder}
                        theme={effectiveTheme}
                    />
                );
            case DriverType.AESTHETIC:
                return (
                    <AestheticView
                        blueprint={effectiveBlueprint}
                        activeTab={activeTab as any}
                        language={language}
                        onUpdateBlueprint={updateCurrentBlueprint}
                        themeAccent={uiConfig.themeAccent}
                        themeBorder={uiConfig.themeBorder}
                        fieldState={fieldState}
                        /* Fix child scope error by passing props from BlueprintEditor */
                        subjectType={subjectType}
                        aestheticMode={aestheticMode}
                        // Added customLibraryDefs to propagate to AestheticView
                        customLibraryDefs={customLibraryDefs}
                        theme={effectiveTheme}
                    />
                );
            case DriverType.TRAILER:
                if (activeTab === 'METONYMY') {
                    return (
                        <MetonymyView
                            blueprint={effectiveBlueprint}
                            language={language}
                            onUpdateBlueprint={updateCurrentBlueprint}
                            themeAccent={uiConfig.themeAccent}
                            themeBorder={uiConfig.themeBorder}
                            isFullScreen={!isSidebarOpen}
                            onToggleFullScreen={() => setIsSidebarOpen(prev => !prev)}
                            onSutureOpenChange={onSutureOpenChange}
                            fieldState={fieldState}
                            onSaveToHistory={onSaveToHistory}
                            theme={effectiveTheme}
                        />
                    );
                }
                return (
                    <TrailerView
                        blueprint={effectiveBlueprint}
                        activeTab={activeTab as any}
                        language={language}
                        onUpdateBlueprint={updateCurrentBlueprint}
                        themeAccent={uiConfig.themeAccent}
                        themeBorder={uiConfig.themeBorder}
                        theme={effectiveTheme}
                    />
                );
            default: // NARRATIVE
                if (activeTab === 'ANALYSIS') {
                    return (
                        <AnalysisView
                            blueprint={effectiveBlueprint}
                            language={language}
                            isAesthetic={false}
                            onAnalyzePsycho={onAnalyzePsycho}
                            onUpdateBlueprint={updateCurrentBlueprint}
                            fieldState={fieldState}
                            themeAccent={uiConfig.themeAccent}
                            theme={effectiveTheme}
                        />
                    );
                }
                if (activeTab === 'METONYMY') {
                    return (
                        <MetonymyView
                            blueprint={effectiveBlueprint}
                            language={language}
                            onUpdateBlueprint={updateCurrentBlueprint}
                            themeAccent={uiConfig.themeAccent}
                            themeBorder={uiConfig.themeBorder}
                            isFullScreen={!isSidebarOpen}
                            onToggleFullScreen={() => setIsSidebarOpen(prev => !prev)}
                            onSutureOpenChange={onSutureOpenChange}
                            fieldState={fieldState}
                            onSaveToHistory={onSaveToHistory}
                            theme={effectiveTheme}
                        />
                    );
                }

                return (
                    <NarrativeView
                        blueprint={effectiveBlueprint}
                        language={language}
                        isAesthetic={false}
                        themeAccent={uiConfig.themeAccent}
                        themeBorder={uiConfig.themeBorder}
                        themeBgActive={uiConfig.themeBgActive}
                        onUpdateBlueprint={updateCurrentBlueprint}
                        theme={effectiveTheme}
                    />
                );
        }
    };

    return (
        <div className={`absolute inset-0 ${effectiveTheme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-[#080808]'} flex flex-col z-10`}>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden relative z-10">
                {/* PARAMETERS SIDEBAR */}
                <div className={`
                    fixed top-0 bottom-0 left-0 z-50
                    w-full max-w-lg
                    ${effectiveTheme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-[#0a0a0b]/95 backdrop-blur-xl'} border-r ${effectiveTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}
                    transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isParamsPanelOpen ? 'translate-x-0' : '-translate-x-full'}
                    flex flex-col ${effectiveTheme === 'retro' ? '' : 'shadow-[10px_0_30px_rgba(0,0,0,0.3)]'}
                `}>
                    {/* Sidebar Content */}
                    <div className={`p-6 border-b ${effectiveTheme === 'retro' ? 'border-[#8B261D]/10 bg-[var(--bg-header)]' : 'border-zinc-800 bg-[#0a0a0a]'} flex justify-between items-center`}>
                        <div className="flex items-center gap-3">
                            <Database className={uiConfig.themeText.replace('text-', 'text-')} size={20} />
                            <span className={`text-base font-bold ${effectiveTheme === 'retro' ? 'text-black' : 'text-white'} uppercase tracking-widest`}>
                                {language === 'EN' ? "Engine Parameters" : "引擎参数概览"}
                            </span>
                        </div>
                        <span className="text-xs text-zinc-500 font-mono">
                            {fieldState ? Object.keys(fieldState).length : 0} {language === 'EN' ? "ACTIVE" : "项激活"}
                        </span>
                        <button onClick={() => setIsParamsPanelOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
                        {(visionInput || visionAnalysis) && (
                            <div className="flex flex-col gap-4 border-b border-zinc-800 pb-6 mb-6">
                                {visionInput && (
                                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-zinc-900/30 border border-dashed border-zinc-700/50">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                            <Lightbulb size={12} className={uiConfig.themeText.replace('text-', 'text-')} />
                                            {language === 'EN' ? "Input Concept" : "创意输入"}
                                        </span>
                                        <p className="text-sm text-zinc-300 font-serif leading-relaxed whitespace-pre-wrap">{visionInput}</p>
                                    </div>
                                )}
                                {visionAnalysis && (
                                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-zinc-900/30 border border-dashed border-zinc-700/50">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                            <ScanLine size={12} className={uiConfig.themeText.replace('text-', 'text-')} />
                                            {language === 'EN' ? "Visual Decoding" : "视觉解码结果"}
                                        </span>
                                        <p className="text-xs text-zinc-400 font-mono leading-relaxed whitespace-pre-wrap">{visionAnalysis}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {fieldState && Object.keys(fieldState).length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(fieldState).map(([key, values]) => {
                                    const safeValues = values as string[];
                                    if (!safeValues || safeValues.length === 0) return null;
                                    return (
                                        <div key={key} className={`flex flex-col gap-2 p-4 rounded-lg ${effectiveTheme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/10' : 'bg-zinc-900/50 border-zinc-800/50'} border hover:border-zinc-700 transition-colors`}>
                                            <span className={`text-xs font-bold uppercase tracking-widest ${uiConfig.themeText} opacity-70 truncate`}>
                                                {getBlockName(key)}
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {safeValues.map((v, i) => (
                                                    <span key={i} className={`text-sm ${effectiveTheme === 'retro' ? 'text-zinc-800' : 'text-zinc-200'} font-serif leading-tight break-words border-b ${effectiveTheme === 'retro' ? 'border-black/5' : 'border-white/10'} pb-0.5`}>
                                                        {v.split('(')[0]}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-zinc-600 gap-4 opacity-50">
                                <List size={48} />
                                <span className="text-xs uppercase tracking-widest">No parameters active</span>
                            </div>
                        )}
                    </div>
                </div>

                {!isSutureOpen && (
                    <aside className={`${isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full opacity-0 overflow-hidden'} ${uiConfig.themeSidebarBg} border-r ${uiConfig.themeSidebarBorder} flex flex-col shrink-0 transition-all duration-300 ease-in-out`}>
                        <div className="w-64 flex flex-col h-full">
                            <div className="flex-1 flex flex-col py-6">
                                <div className="px-6 mb-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                                    {language === 'EN' ? `${uiConfig.type} BIBLE` : `${driverName} 圣经`}
                                </div>
                                <nav className="flex flex-col gap-1">
                                    {uiConfig.menuItems.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveTab(item.id)}
                                            className={`w-full text-left px-6 py-4 flex items-center gap-3 transition-all border-r-4 ${activeTab === item.id ? (effectiveTheme === 'retro' ? `bg-white text-[#8B261D] border-[#8B261D]` : `bg-zinc-900 text-white ${uiConfig.themeActiveBorder}`) : (effectiveTheme === 'retro' ? 'text-zinc-600 border-transparent hover:bg-white/50 hover:text-black' : 'text-zinc-500 border-transparent hover:bg-zinc-900/50 hover:text-zinc-300')}`}
                                        >
                                            <item.icon size={18} className={activeTab === item.id ? uiConfig.themeText : ''} />
                                            <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>
                )}

                <main className={`flex-1 ${isMetonymyMode ? 'overflow-hidden' : 'overflow-y-auto custom-scrollbar'} bg-[var(--bg-main)] ${mainPaddingClass} relative transition-all duration-300`}>
                    {renderContent()}
                </main>
            </div>

            {/* Footer */}
            {!isSutureOpen && (
                <footer className={`fixed bottom-0 left-0 right-0 h-14 bg-[var(--bg-header)] backdrop-blur-md border-t border-[var(--border-main)] flex items-center justify-between px-6 md:px-12 z-40 transition-colors duration-500`}>
                    <div className="flex gap-4">
                        <button onClick={onGoHome} className={`flex items-center gap-3 px-6 py-3 bg-[var(--bg-panel)]/50 hover:bg-[var(--bg-panel)] border border-[var(--border-main)] rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 group min-w-[140px] hover:scale-105 active:scale-95 ${effectiveTheme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`}>
                            <Home size={16} className="group-hover:scale-110 transition-transform" />
                            <span>{language === 'EN' ? "Back to Engine" : "返回引擎"}</span>
                        </button>
                        <button onClick={onClose} className={`flex items-center gap-3 px-6 py-3 bg-[var(--bg-panel)]/50 hover:bg-[var(--bg-panel)] border ${uiConfig.themeSidebarBorder} rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 group min-w-[140px] hover:scale-105 active:scale-95 ${effectiveTheme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`}>
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            <span>{language === 'EN' ? "Back to Paths" : "返回分支"}</span>
                        </button>
                    </div>
    
                    <div className="flex-1 flex justify-center items-center gap-6 mx-4 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setIsParamsPanelOpen(!isParamsPanelOpen)}
                            className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]"
                        >
                            <List size={18} className={`transition-colors ${isParamsPanelOpen ? (effectiveTheme === 'retro' ? 'text-[#8B261D]' : uiConfig.themeAccent) : (effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`)}`} />
                            <span className={`text-[9px] font-bold uppercase tracking-wider ${isParamsPanelOpen ? (effectiveTheme === 'retro' ? 'text-[#8B261D]' : uiConfig.themeAccent) : (effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`)}`}>
                                {language === 'EN' ? "Params" : "参数"}
                            </span>
                        </button>

                        <div className="w-px h-8 bg-[var(--border-main)] shrink-0"></div>

                        <button onClick={onOpenHistory} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]">
                            <HistoryIcon size={18} className={`transition-colors ${effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`}`} />
                            <span className={`text-[9px] font-bold uppercase tracking-wider ${effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`}`}>
                                {language === 'EN' ? "Archive" : "档案馆"}
                            </span>
                        </button>
                        <div className="w-px h-8 bg-[var(--border-main)] shrink-0"></div>
    
                        <button
                            onClick={handleSaveToCollection}
                            className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]"
                        >
                            <Bookmark
                                size={18}
                                className={`transition-colors ${isSaved ? 'text-red-500 fill-red-500 animate-bounce' : (effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`)}`}
                            />
                            <span className={`text-[9px] font-bold uppercase tracking-wider ${isSaved ? 'text-red-500' : (effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`)}`}>
                                {isSaved ? (language === 'EN' ? "Saved" : "已收藏") : (language === 'EN' ? "Save" : "永久收藏")}
                            </span>
                        </button>
    
                        <div className="w-px h-8 bg-[var(--border-main)] shrink-0"></div>
                        {uiConfig.type !== DriverType.AESTHETIC && (
                            <>
                                <button onClick={() => setIsContinueModalOpen(true)} disabled={isContinuing} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]">
                                    {isContinuing ? <Loader2 size={18} className={`animate-spin ${uiConfig.themeAccent}`} /> : <Wand2 size={18} className={`transition-colors ${effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`}`} />}
                                    <span className={`text-[9px] font-bold uppercase tracking-wider ${effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`}`}>
                                        {language === 'EN' ? "Continue" : "续写"}
                                    </span>
                                </button>
                                <div className={`w-px h-8 ${effectiveTheme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} shrink-0`}></div>
    
                                {/* Continue with Image Upload */}
                                <button
                                    onClick={() => !isContinueUploading && continueFileInputRef.current?.click()}
                                    disabled={isContinueUploading}
                                    className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]"
                                >
                                    {isContinueUploading ? (
                                        <Loader2 size={18} className={`animate-spin ${uiConfig.themeAccent}`} />
                                    ) : (
                                        <Upload size={18} className={`transition-colors ${effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`}`} />
                                    )}
                                    <span className={`text-[9px] font-bold uppercase tracking-wider ${effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`}`}>
                                        {isContinueUploading ? (language === 'EN' ? "Uploading" : "上传中") : (language === 'EN' ? "Image-to-Clip" : "图配文")}
                                    </span>
                                </button>
                                <div className={`w-px h-8 ${effectiveTheme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} shrink-0`}></div>
                            </>
                        )}
    
                        <button onClick={handleGlobalCopyClick} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]">
                            {globalCopied ? <Check size={18} className={effectiveTheme === 'retro' ? 'text-[#8B261D]' : 'text-green-500'} /> : <ClipboardCopy size={18} className={`transition-colors ${effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`}`} />}
                            <span className={`text-[9px] font-bold uppercase tracking-wider ${globalCopied ? (effectiveTheme === 'retro' ? 'text-[#8B261D]' : 'text-green-500') : (effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`)}`}>
                                {language === 'EN' ? "Copy All" : "全局复制"}
                            </span>
                        </button>
    
                                <div className={`w-px h-8 ${effectiveTheme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} shrink-0`}></div>
    
                        <button onClick={handleExportHtml} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]">
                            <Download size={18} className={`transition-colors ${effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`}`} />
                            <span className={`text-[9px] font-bold uppercase tracking-wider ${effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 ${uiConfig.themeHoverText}`}`}>
                                {language === 'EN' ? "Download" : "导出HTML"}
                            </span>
                        </button>
    
                                <div className={`w-px h-8 ${effectiveTheme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} shrink-0`}></div>
    
                        <button
                            onClick={() => setIsTaskManagerOpen(!isTaskManagerOpen)}
                            className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] relative"
                        >
                            <div className="relative">
                                {/* Breathing Light */}
                                {activeTaskCount > 0 && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-6 h-6 rounded-full ${uiConfig.themeEmptyPulse} opacity-30 animate-pulse blur-md`}></div>
                                        <div className={`w-4 h-4 rounded-full ${uiConfig.themeEmptyPulse} opacity-50 animate-pulse blur-sm`}></div>
                                    </div>
                                )}
                                <Activity size={18} className={`relative z-10 transition-colors ${isTaskManagerOpen ? uiConfig.themeText : (effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 hover:text-white`)}`} />
                                {activeTaskCount > 0 && (
                                    <span className={`absolute -top-1 -right-1 w-4 h-4 bg-[#050505] border border-white/10 ${uiConfig.themeText} rounded-full text-[9px] flex items-center justify-center font-bold shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-20 leading-none`}>
                                        {activeTaskCount}
                                    </span>
                                )}
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wider relative z-10 ${isTaskManagerOpen ? uiConfig.themeText : (effectiveTheme === 'retro' ? 'text-zinc-600 group-hover:text-black' : `text-zinc-400 hover:text-white`)}`}>
                                {language === 'EN' ? "Tasks" : "任务中心"}
                            </span>
                        </button>
                    </div>
    
                    <div className="flex items-center gap-4 shrink-0">
                        <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold ${effectiveTheme === 'retro' ? 'text-zinc-400' : 'text-zinc-500'} uppercase tracking-wider mr-2`}>
                                {language === 'EN' ? `VER ${currentIndex + 1} / ${timeline.length}` : `第 ${currentIndex + 1} / ${timeline.length} 版`}
                            </span>
                            <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))} disabled={currentIndex === 0} className={`p-2 ${effectiveTheme === 'retro' ? 'bg-white border-[#8B261D]/10 hover:text-[#8B261D]' : 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-white'} border rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-zinc-400`}>
                                <ArrowLeft size={16} />
                            </button>
                            <button onClick={() => setCurrentIndex(prev => Math.min(timeline.length - 1, prev + 1))} disabled={currentIndex === timeline.length - 1} className={`p-2 ${effectiveTheme === 'retro' ? 'bg-white border-[#8B261D]/10 hover:text-[#8B261D]' : 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-white'} border rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-zinc-400`}>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="absolute left-[50%] -translate-x-[50%] flex items-center h-full">
                        {/* Centered title display if needed */}
                    </div>
                </footer>
            )}

            {isContinueModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className={`w-full max-w-lg ${effectiveTheme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]' : 'bg-[#0c0c0c] border-zinc-800'} border rounded-xl shadow-2xl p-6 relative`}>
                        <button onClick={() => setIsContinueModalOpen(false)} className={`absolute top-4 right-4 ${effectiveTheme === 'retro' ? 'text-[#8B261D] hover:text-[#6D1E16]' : 'text-zinc-500 hover:text-white'}`}><X size={20} /></button>
                        <h3 className={`text-lg font-bold ${effectiveTheme === 'retro' ? 'text-black' : 'text-white'} uppercase tracking-wider mb-4 flex items-center gap-2`}>
                            <Wand2 size={18} className={effectiveTheme === 'retro' ? 'text-[#8B261D]' : uiConfig.themeAccent} /> {language === 'EN' ? "Continue Story" : "续写故事"}
                        </h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className={`text-[10px] font-bold uppercase ${effectiveTheme === 'retro' ? 'text-zinc-600' : 'text-zinc-500'}`}>{language === 'EN' ? "Instructions" : "续写要求"}</label>
                                <textarea 
                                    value={continueInput} 
                                    onChange={(e) => setContinueInput(e.target.value)} 
                                    placeholder={language === 'EN' ? "e.g. Introduce a new villain..." : "例如：引入一个新的反派，或者转向内心的冲突..."} 
                                    className={`w-full h-32 ${effectiveTheme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]/20 text-black placeholder-[#8B261D]/30' : 'bg-black/50 border-zinc-800 text-white placeholder-zinc-700'} border rounded-lg p-3 text-sm focus:outline-none focus:border-[#8B261D]/50 resize-none custom-scrollbar`} 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className={`text-[10px] font-bold uppercase ${effectiveTheme === 'retro' ? 'text-zinc-600' : 'text-zinc-500'}`}>{language === 'EN' ? "Visual Reference (Optional)" : "视觉参考 (可选)"}</label>
                                {continueImage ? (
                                    <div className={`relative w-full h-32 rounded-lg border ${effectiveTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} overflow-hidden group`}>
                                        <img src={continueImage} className="w-full h-full object-cover" alt="Continue" />
                                        <button onClick={() => setContinueImage(null)} className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-full hover:bg-red-600 transition-colors"><X size={14} /></button>
                                    </div>
                                ) : (
                                    <div onClick={() => fileInputRef.current?.click()} className={`w-full h-24 border border-dashed ${effectiveTheme === 'retro' ? 'border-[#8B261D]/20 hover:border-[#8B261D]/40' : 'border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-600'} rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all group`}>
                                        <div className={`p-3 ${effectiveTheme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-900 border-zinc-800 text-zinc-400'} rounded-full group-hover:text-[#8B261D] transition-all transform group-hover:scale-110 shadow-sm border`}>
                                            {isContinueUploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                                        </div>
                                        <span className={`text-[10px] ${effectiveTheme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-600'} uppercase mt-2`}>
                                            {isContinueUploading ? (language === 'EN' ? "Uploading..." : "上传中...") : (language === 'EN' ? "Upload Image" : "上传图片")}
                                        </span>
                                        <input type="file" alt="Continue Image" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleContinueImageUpload} />
                                    </div>
                                )}
                            </div>
                            <button 
                                onClick={handleContinueSubmit} 
                                disabled={!continueInput.trim() && !continueImage} 
                                className={`w-full py-3 ${effectiveTheme === 'retro' ? 'bg-[#8B261D] hover:bg-[#6D1E16] text-white shadow-none' : (uiConfig.type === DriverType.COMMERCIAL ? 'bg-cyan-500 hover:bg-cyan-400' : (uiConfig.type === DriverType.AESTHETIC ? 'bg-rose-500 hover:bg-rose-400' : 'bg-gold-primary hover:bg-amber-400'))} font-bold uppercase tracking-widest rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2`}
                            >
                                {language === 'EN' ? "Generate Next Chapter" : "生成下一章"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {lightboxImage && (
                <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 animate-in fade-in cursor-zoom-out" onClick={() => setLightboxImage(null)}>
                    <button className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2"><X size={24} /></button>
                    <img src={lightboxImage} className="max-w-full max-h-full object-contain" alt="Lightbox" />
                </div>
            )}

            <TaskManagerPanel
                isOpen={isTaskManagerOpen}
                onClose={() => setIsTaskManagerOpen(false)}
                lang={language}
            />
            <input
                type="file"
                ref={continueFileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleContinueImageUpload}
            />
        </div>
    );
};
