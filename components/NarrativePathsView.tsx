
import React, { useState, useMemo, useEffect } from 'react';
import { CreativeTreatment, StyleConfig, LibraryCategoryDef, BlueprintLanguage, DriverType, CreativeBlueprint, NarrativeFieldState } from '../types';
import { STYLE_MATRIX, PERSPECTIVES, SENSORY_MODES } from '../data/style_matrix';
import { DIRECTOR_STYLES } from '../data/director_styles';
import { VISUAL_TONES } from '../data/visual_tones';
import { Sparkles, Film, Zap, BrainCircuit, BookOpen, ArrowRight, RotateCw, Check, Palette, Settings2, ArrowLeft, Copy, Layers, History as HistoryIcon, ClipboardList, GitFork, Gem, Eye, Anchor, Flower, Music, Wind, Globe, Lightbulb, Ghost, User, Fingerprint, List, X, ChevronUp, Database, FileText, ScanLine, Terminal, Activity } from 'lucide-react';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { TaskManagerPanel } from './TaskManagerPanel';
import { globalTaskManager } from '../services/taskManager';
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
import { ProcessingTimer } from './SharedBlueprintComponents';

interface NarrativePathsViewProps {
    treatments: CreativeTreatment[];
    onSelect: (treatment: CreativeTreatment, styleConfig: StyleConfig, force?: boolean) => void;
    isProcessing: boolean;
    bibleStartTime: number | null;
    isHistoryMode?: boolean;
    onRegenerate?: () => void;
    onBack?: () => void;
    onOpenHistory?: () => void;
    lang?: BlueprintLanguage;
    activeDriver?: DriverType;
    cachedBlueprints?: Record<string, CreativeBlueprint>;
    fieldState?: NarrativeFieldState;
    visionInput?: string;
    visionAnalysis?: string;
}

export const NarrativePathsView: React.FC<NarrativePathsViewProps> = ({
    treatments,
    onSelect,
    isProcessing,
    bibleStartTime,
    isHistoryMode = false,
    onRegenerate,
    onBack,
    onOpenHistory,
    lang = 'CN',
    activeDriver,
    cachedBlueprints = {},
    fieldState,
    visionInput,
    visionAnalysis
}) => {
    const [selectedPathId, setSelectedPathId] = useState<string | null>(null);
    const [styleConfig, setStyleConfig] = useState<StyleConfig>({
        styleId: null,
        perspectiveId: 'SCREENPLAY',
        sensoryId: 'VISUAL'
    });
    const [isStyleModalOpen, setIsStyleModalOpen] = useState(false);
    const [isParamsPanelOpen, setIsParamsPanelOpen] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [copiedAll, setCopiedAll] = useState(false);
    const [isTaskManagerOpen, setIsTaskManagerOpen] = useState(false);
    const [activeTaskCount, setActiveTaskCount] = useState(0);

    const [promptLang, setPromptLang] = useState<'CN' | 'EN' | 'UVD'>('CN');

    useEffect(() => {
        const unsubscribe = globalTaskManager.subscribe(tasks => {
            setActiveTaskCount(tasks.filter(t => t.status === 'generating').length);
        });
        return () => unsubscribe();
    }, []);

    const currentDriverType = activeDriver || DriverType.NARRATIVE;
    const isCommercialResults = currentDriverType === DriverType.COMMERCIAL;
    const isExperimentalResults = currentDriverType === DriverType.EXPERIMENTAL;
    const isAestheticResults = currentDriverType === DriverType.AESTHETIC;
    const isTrailerResults = currentDriverType === DriverType.TRAILER;

    const getIconForType = (type: string) => {
        switch (type) {
            // Aesthetic New Types
            case 'DIRECTOR_VISION': return <Film size={16} />;
            case 'SUBJECT_PORTRAIT': return <User size={16} />;
            case 'SCENE_RELATION': return <Globe size={16} />;

            // Legacy / Other
            case 'STRUCTURALIST': return isAestheticResults ? <Layers size={16} /> : <Film size={16} />;
            case 'POST_STRUCTURALIST': return isAestheticResults ? <User size={16} /> : <User size={16} />;
            case 'THE_REAL': return isAestheticResults ? <Globe size={16} /> : <Globe size={16} />;
            case 'CLASSIC': return <Film size={16} />;
            case 'STYLIZED': return <Zap size={16} />;
            case 'SUBVERSIVE': return <BrainCircuit size={16} />;
            case 'REAL': return <Anchor size={16} />;
            case 'IMAGINARY': return <Eye size={16} />;
            case 'SYMBOLIC': return <Gem size={16} />;
            case 'PHENOMENOLOGICAL': return <Eye size={16} />;
            case 'THE SPECTACLE': return <BrainCircuit size={16} />;
            case 'ONTOLOGY': return <User size={16} />;
            case 'ATMOSPHERE': return <Wind size={16} />;
            case 'VISUAL_POETRY': return <Palette size={16} />;
            case 'THE_TEASE': return <Eye size={16} />;
            case 'THE_PULSE': return <Zap size={16} />;
            case 'THE_GLITCH': return <BrainCircuit size={16} />;
            default: return <Sparkles size={16} />;
        }
    };

    const getLabelForType = (type: string) => {
        switch (type) {
            // Aesthetic New Labels
            case 'DIRECTOR_VISION': return lang === 'EN' ? 'DIRECTOR VISION (Masterpiece)' : '导演风格 (Masterpiece)';
            case 'SUBJECT_PORTRAIT': return lang === 'EN' ? 'SUBJECT FOCUS (Portrait)' : '人物特写 (Portrait)';
            case 'SCENE_RELATION': return lang === 'EN' ? 'SCENE CONTEXT (Environment)' : '人景关系 (Context)';

            // Legacy / Other
            case 'STRUCTURALIST':
                if (isAestheticResults) return lang === 'EN' ? 'FULL DNA SYNTHESIS' : '全基因结晶 (Synthesis)';
                if (isExperimentalResults) return lang === 'EN' ? 'STRUCTURAL DECONSTRUCTION' : '符号解构 (Structuralist)';
                return lang === 'EN' ? 'PLOT DRIVEN (Events)' : '情节驱动 (故事性)';
            case 'POST_STRUCTURALIST':
                if (isAestheticResults) return lang === 'EN' ? 'SUBJECT SOUL FOCUS' : '主体之魂聚焦 (Subject)';
                return lang === 'EN' ? 'SUBJECT DRIVEN (Emotion)' : '主体驱动 (感受与情感)';
            case 'THE_REAL':
                if (isAestheticResults) return lang === 'EN' ? 'ATMOSPHERIC REALM' : '场域意境聚焦 (Vibe)';
                return lang === 'EN' ? 'WORLD DRIVEN (Structure)' : '世界驱动 (宏观结构)';
            case 'CLASSIC': return lang === 'EN' ? 'EVENT DRIVEN' : '事件驱动 (Event Driven)';
            case 'STYLIZED': return lang === 'EN' ? 'PSYCH PORTRAIT' : '心理肖像 (Psych Portrait)';
            case 'SUBVERSIVE': return lang === 'EN' ? 'CONCEPTUAL' : '概念结构 (Conceptual)';
            case 'REAL': return lang === 'EN' ? 'THE REAL (PAIN)' : '实在界 (痛点狙击)';
            case 'IMAGINARY': return lang === 'EN' ? 'THE IMAGINARY (DREAM)' : '想象界 (美学造梦)';
            case 'SYMBOLIC': return lang === 'EN' ? 'THE SYMBOLIC (STATUS)' : '符号界 (阶级神话)';
            case 'PHENOMENOLOGICAL': return lang === 'EN' ? 'PHENOMENOLOGICAL' : '现象学还原';
            case 'THE SPECTACLE': return lang === 'EN' ? 'THE SPECTACLE' : '异界奇观';
            case 'VISUAL_POETRY': return lang === 'EN' ? 'VISUAL POETRY' : '视觉诗 (Visual Poetry)';
            case 'ONTOLOGY': return lang === 'EN' ? 'ONTOLOGY' : '本体论 (Ontology)';
            case 'ATMOSPHERE': return lang === 'EN' ? 'ATMOSPHERE' : '氛围感 (Atmosphere)';
            case 'THE_TEASE': return lang === 'EN' ? 'THE TEASE' : '极简悬疑 (Tease)';
            case 'THE_PULSE': return lang === 'EN' ? 'THE PULSE' : '节奏剪辑 (Pulse)';
            case 'THE_GLITCH': return lang === 'EN' ? 'THE GLITCH' : '意识流 (Glitch)';
            default: return type;
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
        if (block) return lang === 'EN' ? block.enName : block.name;
        if (id === 'skin_genre') return lang === 'EN' ? "GENRE" : "类型基因";
        if (id === 'skin_animation_genre') return lang === 'EN' ? "ANIMATION GENRE" : "动画基因";
        if (id === 'skin_year_exact') return lang === 'EN' ? "YEAR" : "年代";
        if (id === 'skin_country_exact') return lang === 'EN' ? "COUNTRY" : "国家";
        return id;
    };

    const handleGenerate = () => {
        const treatment = treatments.find(t => t.id === selectedPathId);
        if (treatment) {
            // If style is selected, force regeneration (Replacement)
            const force = !!styleConfig.styleId;
            onSelect(treatment, styleConfig, force);
        }
    };

    const handleCopy = (e: React.MouseEvent, text: string, id: string) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleCopyAll = () => {
        const allContent = treatments.map((t, idx) => {
            if (isAestheticResults) {
                let content = "";
                if (promptLang === 'CN') content = t.pitchCn || t.pitch;
                else if (promptLang === 'EN') content = t.pitchEn || t.pitch;
                else content = t.universalPrompt || "";

                // Clean up header for UVD mode
                if (promptLang === 'UVD') {
                    content = content.replace(/:: VISIONARY DIRECTIVE ::/g, '').trim();
                }

                return `[OPTION ${idx + 1}: ${t.type}]\nTITLE: ${t.title}\n${content}\n-------------------\n`;
            }
            return `[OPTION ${idx + 1}: ${t.type}]\nTITLE: ${t.title}\n${isCommercialResults ? 'SLOGAN' : 'TAGLINE'}: ${t.tagline}\nVISUAL KEY: ${t.visualKey}\nCONTENT: ${t.pitch}\n\n-------------------\n`;
        }).join("\n");

        navigator.clipboard.writeText(allContent);
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2000);
    };

    const styleLibraryData: LibraryCategoryDef[] = useMemo(() => {
        if (isCommercialResults) {
            const grouped: Record<string, LibraryCategoryDef> = {};
            DIRECTOR_STYLES.forEach(item => {
                const groupName = item.group || "General";
                if (!grouped[groupName]) {
                    grouped[groupName] = { id: groupName, name: groupName, desc: "Director Style", items: [] };
                }
                grouped[groupName].items.push(item);
            });
            return Object.values(grouped);
        } else {
            return STYLE_MATRIX.map(cat => ({
                id: cat.id,
                name: cat.name,
                desc: "Select a narrative style tone for the Creative Bible.",
                items: cat.items.map(item => ({
                    id: item.id,
                    name: item.name,
                    def: item.dna,
                    core: `${item.description}${item.example ? ` | 代表作: ${item.example}` : ''}`,
                    group: cat.name
                }))
            }));
        }
    }, [isCommercialResults]);

    const currentStyleName = isCommercialResults
        ? DIRECTOR_STYLES.find(i => i.id === styleConfig.styleId)?.name || null
        : STYLE_MATRIX.flatMap(c => c.items).find(i => i.id === styleConfig.styleId)?.name || null;

    const handleStyleToggle = (tagName: string) => {
        let allStyles: any[] = [];
        if (isCommercialResults) {
            allStyles = DIRECTOR_STYLES;
        } else {
            allStyles = STYLE_MATRIX.flatMap(c => c.items);
        }

        const selectedStyle = allStyles.find(s => s.name === tagName);
        if (selectedStyle) {
            if (styleConfig.styleId === selectedStyle.id) {
                setStyleConfig(prev => ({ ...prev, styleId: null }));
            } else {
                setStyleConfig(prev => ({ ...prev, styleId: selectedStyle.id }));
            }
        }
    };

    const getThemeColor = () => {
        if (isCommercialResults) return 'text-cyan-400';
        if (isExperimentalResults) return 'text-purple-400';
        if (isAestheticResults) return 'text-rose-400';
        if (isTrailerResults) return 'text-orange-400';
        return 'text-gold-primary';
    }

    const getThemeBg = () => {
        if (isCommercialResults) return 'bg-cyan-400';
        if (isExperimentalResults) return 'bg-purple-400';
        if (isAestheticResults) return 'bg-rose-400';
        if (isTrailerResults) return 'bg-orange-400';
        return 'bg-gold-primary';
    }

    const getEmptyStateIconColor = () => {
        if (isCommercialResults) return 'text-cyan-600/30';
        if (isExperimentalResults) return 'text-purple-600/30';
        if (isAestheticResults) return 'text-rose-600/30';
        if (isTrailerResults) return 'text-orange-600/30';
        return 'text-zinc-700/50';
    }

    const getGenerateButtonClass = (hasExisting: boolean) => {
        if (hasExisting) {
            return 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500';
        }
        if (isCommercialResults) return 'bg-cyan-500 hover:bg-cyan-400 text-black border-cyan-500';
        if (isExperimentalResults) return 'bg-purple-500 hover:bg-purple-400 text-black border-purple-500';
        if (isAestheticResults) return 'bg-rose-500 hover:bg-rose-400 text-black border-rose-500';
        if (isTrailerResults) return 'bg-orange-500 hover:bg-orange-400 text-black border-orange-500';
        return 'bg-gold-primary hover:bg-amber-400 text-black border-gold-primary';
    }

    const getMatrixLabel = () => {
        if (isCommercialResults) return lang === 'EN' ? "Auteur & Aesthetics" : "导演与美学矩阵";
        if (isAestheticResults) return lang === 'EN' ? "Aesthetic Matrix" : "美学矩阵";
        if (isTrailerResults) return lang === 'EN' ? "Editing Matrix" : "剪辑风格矩阵";
        return lang === 'EN' ? "Render Filters" : "渲染滤镜 (Filters)";
    }

    const hasExistingBlueprint = selectedPathId ? !!cachedBlueprints[selectedPathId] : false;

    const getGenerateButtonLabel = () => {
        if (styleConfig.styleId) {
            return lang === 'EN' ? "Visual Style Replacement" : "视觉风格置换";
        }
        if (hasExistingBlueprint) {
            return lang === 'EN' ? "View Creative Bible" : "回看创意圣经";
        }
        if (isCommercialResults) return lang === 'EN' ? "Generate Commercial Bible" : "生成商业演示圣经";
        if (isAestheticResults) return lang === 'EN' ? "Generate Aesthetic Bible" : "生成美学创意圣经";
        if (isTrailerResults) return lang === 'EN' ? "Generate Trailer Brief" : "生成预告片执行单";
        return lang === 'EN' ? "Generate Narrative Bible" : "生成创意圣经";
    }

    const formatName = (name: string) => {
        if (!name) return "";
        if (lang === 'CN') {
            return name.split('(')[0].trim();
        } else {
            const match = name.match(/\((.*?)\)/);
            return match ? match[1].toUpperCase() : name.toUpperCase();
        }
    };

    const HighlightedUVD = ({ text }: { text: string }) => {
        if (!text) return null;

        const lines = text.split('\n');
        return (
            <div className="font-mono text-xs md:text-sm text-zinc-300 leading-relaxed space-y-1">
                {lines.map((line, i) => {
                    const trimmed = line.trim();
                    if (trimmed.startsWith('::')) return <div key={i} className="text-rose-400 font-bold border-b border-rose-900/50 pb-1 mb-2 mt-4">{trimmed}</div>;
                    if (trimmed.startsWith('[')) return <div key={i} className="text-zinc-500 font-bold mt-3 mb-1 uppercase tracking-wider">{trimmed}</div>;
                    if (trimmed.startsWith('>')) {
                        // Vision line
                        return <div key={i} className="text-rose-200 italic pl-2 border-l-2 border-rose-500/50 my-2 py-1">{trimmed}</div>;
                    }
                    if (trimmed.includes(':')) {
                        const parts = trimmed.split(':');
                        const key = parts[0];
                        const val = parts.slice(1).join(':');
                        return (
                            <div key={i} className="pl-2 flex gap-2">
                                <span className="text-rose-400/80 font-bold shrink-0">{key}:</span>
                                <span className="text-zinc-300">{val}</span>
                            </div>
                        );
                    }
                    return <div key={i}>{line}</div>;
                })}
            </div>
        );
    };

    // Use dynamic theme color for the control class
    const themeTextColor = getThemeColor();
    const controlClass = `flex items-center px-3 py-2 rounded-lg bg-zinc-900 border border-white/20 ${themeTextColor} hover:border-white/50 transition-all w-48`;

    return (
        <div className="w-full h-full flex flex-col relative animate-fade-in overflow-hidden">
            <div className="shrink-0 p-4 bg-[#0a0a0a] border-b border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl z-20">
                <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 ${getThemeColor()}`}>
                        <Settings2 size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">{getMatrixLabel()}</span>
                    </div>

                    {isAestheticResults && (
                        <div className="flex bg-zinc-900 border border-zinc-700 rounded-lg p-1 ml-4">
                            <button
                                onClick={() => setPromptLang('CN')}
                                className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${promptLang === 'CN' ? 'bg-rose-500 text-black' : 'text-zinc-500 hover:text-white'}`}
                            >
                                {lang === 'EN' ? "Concept" : "视觉概念"}
                            </button>
                            <button
                                onClick={() => setPromptLang('EN')}
                                className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${promptLang === 'EN' ? 'bg-rose-500 text-black' : 'text-zinc-500 hover:text-white'}`}
                            >
                                {lang === 'EN' ? "Prompt" : "MJ 指令"}
                            </button>
                            <button
                                onClick={() => setPromptLang('UVD')}
                                className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${promptLang === 'UVD' ? 'bg-rose-500 text-black' : 'text-zinc-500 hover:text-white'}`}
                            >
                                {lang === 'EN' ? "Universal" : "通用指令"}
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-center flex-1">
                    {/* Visual Tone Button */}
                    <button
                        onClick={() => setIsStyleModalOpen(true)}
                        className={`${controlClass} text-left gap-2`}
                        title={lang === 'EN' ? "Select Visual Tone" : "选择视觉调性"}
                    >
                        <Palette size={14} className="shrink-0" />
                        <span className="text-xs font-bold truncate">
                            {currentStyleName
                                ? formatName(currentStyleName)
                                : (lang === 'EN' ? "VISUAL TONE" : "视觉调性")}
                        </span>
                    </button>

                    {(!isCommercialResults && !isExperimentalResults && !isAestheticResults && !isTrailerResults) && (
                        <>
                            {/* Narrative Perspective */}
                            <div className={`${controlClass} gap-2 relative`} title={lang === 'EN' ? "Narrative Perspective" : "叙事视点：决定故事的讲述角度"}>
                                <Eye size={14} className="shrink-0" />
                                <select
                                    value={styleConfig.perspectiveId || ""}
                                    onChange={(e) => setStyleConfig({ ...styleConfig, perspectiveId: e.target.value })}
                                    className={`bg-transparent border-none text-xs font-bold ${themeTextColor} focus:ring-0 cursor-pointer w-full uppercase tracking-wider outline-none p-0`}
                                >
                                    <option value="" disabled className="bg-zinc-900">{lang === 'EN' ? "POV..." : "叙事视点..."}</option>
                                    {PERSPECTIVES.map(p => (
                                        <option key={p.id} value={p.id} className="bg-zinc-900">{formatName(p.name)}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sensory Priority */}
                            <div className={`${controlClass} gap-2 relative`} title={lang === 'EN' ? "Sensory Priority" : "感官优先：决定描写的侧重点"}>
                                <Fingerprint size={14} className="shrink-0" />
                                <select
                                    value={styleConfig.sensoryId || ""}
                                    onChange={(e) => setStyleConfig({ ...styleConfig, sensoryId: e.target.value })}
                                    className={`bg-transparent border-none text-xs font-bold ${themeTextColor} focus:ring-0 cursor-pointer w-full uppercase tracking-wider outline-none p-0`}
                                >
                                    <option value="" disabled className="bg-zinc-900">{lang === 'EN' ? "SENSE..." : "感官侧重..."}</option>
                                    {SENSORY_MODES.map(s => (
                                        <option key={s.id} value={s.id} className="bg-zinc-900">{formatName(s.name)}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    )}

                    <div className="w-px h-8 bg-zinc-800 mx-2 hidden lg:block"></div>

                    <button
                        onClick={onRegenerate}
                        disabled={isProcessing}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-white text-zinc-400 hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
                        title={lang === 'EN' ? "Generate New Paths" : "重新生成路径"}
                    >
                        <RotateCw size={14} className={isProcessing ? "animate-spin" : ""} />
                        <span>{lang === 'EN' ? "Regenerate" : "重刷"}</span>
                    </button>

                </div>
            </div>

            <div className="flex-1 w-full relative overflow-hidden flex">
                {/* PARAMETERS SIDEBAR */}
                <div className={`
            absolute top-0 bottom-0 left-0 z-20
            w-[420px]
            bg-[#0c0c0c]/95 backdrop-blur-md border-r border-zinc-800
            transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
            ${isParamsPanelOpen ? 'translate-x-0' : '-translate-x-full'}
            flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.3)]
        `}>
                    {/* Sidebar Content */}
                    <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-[#0a0a0a]">
                        <div className="flex items-center gap-3">
                            <Database className={getThemeColor().replace('text-', 'text-')} size={20} />
                            <span className="text-base font-bold text-white uppercase tracking-widest">
                                {lang === 'EN' ? "Engine Parameters" : "引擎参数概览"}
                            </span>
                        </div>
                        <span className="text-xs text-zinc-500 font-mono">
                            {fieldState ? Object.keys(fieldState).length : 0} {lang === 'EN' ? "ACTIVE" : "项激活"}
                        </span>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
                        {(visionInput || visionAnalysis) && (
                            <div className="flex flex-col gap-4 border-b border-zinc-800 pb-6 mb-6">
                                {visionInput && (
                                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-zinc-900/30 border border-dashed border-zinc-700/50">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                            <Lightbulb size={12} className={getThemeColor()} />
                                            {lang === 'EN' ? "Input Concept" : "创意输入"}
                                        </span>
                                        <p className="text-sm text-zinc-300 font-serif leading-relaxed whitespace-pre-wrap">{visionInput}</p>
                                    </div>
                                )}
                                {visionAnalysis && (
                                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-zinc-900/30 border border-dashed border-zinc-700/50">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                            <ScanLine size={12} className={getThemeColor()} />
                                            {lang === 'EN' ? "Visual Decoding" : "视觉解码结果"}
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
                                        <div key={key} className="flex flex-col gap-2 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                                            <span className={`text-xs font-bold uppercase tracking-widest ${getThemeColor()} opacity-70 truncate`}>
                                                {getBlockName(key)}
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {safeValues.map((v, i) => (
                                                    <span key={i} className="text-sm text-zinc-200 font-serif leading-tight break-words border-b border-white/10 pb-0.5">
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

                {/* CARDS CONTAINER */}
                <div className="flex-1 w-full h-full overflow-hidden p-4 md:p-8 overflow-y-auto custom-scrollbar">
                    {treatments.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-zinc-600 gap-6">
                            <div className="p-6 bg-zinc-900/30 rounded-full border border-zinc-800">
                                <GitFork size={48} className={getEmptyStateIconColor()} />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-500 mb-2">
                                    {lang === 'EN' ? "The Divergence is Empty" : "分歧点尚未生成"}
                                </h3>
                                <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                                    {lang === 'EN'
                                        ? "Please go back to the Narrative Engine and click 'Traverse Fantasy' to generate narrative paths."
                                        : "请返回叙事引擎，配置参数并点击“穿越幻想”来生成三条叙事路径。"}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-20">
                            {treatments.map((item, index) => {
                                const isSelected = selectedPathId === item.id;
                                const isCached = !!cachedBlueprints[item.id];

                                let accentColor = 'bg-gold-primary';
                                let borderColor = 'border-gold-primary';
                                let textColor = 'text-gold-primary';
                                let lightBg = 'bg-amber-900/10';

                                if (isAestheticResults) {
                                    accentColor = 'bg-rose-500';
                                    borderColor = 'border-rose-500';
                                    textColor = 'text-rose-400';
                                    lightBg = 'bg-rose-900/10';
                                } else if (isTrailerResults) {
                                    accentColor = 'bg-orange-500'; borderColor = 'border-orange-500'; textColor = 'text-orange-400'; lightBg = 'bg-orange-900/10';
                                } else if (isCommercialResults) {
                                    accentColor = 'bg-cyan-500'; borderColor = 'border-cyan-500'; textColor = 'text-cyan-400'; lightBg = 'bg-cyan-900/10';
                                } else if (isExperimentalResults) {
                                    accentColor = 'bg-purple-500'; borderColor = 'border-purple-500'; textColor = 'text-purple-400'; lightBg = 'bg-purple-900/10';
                                }

                                let rawContent = isAestheticResults
                                    ? (promptLang === 'CN' ? (item.pitchCn || item.pitch) : (promptLang === 'EN' ? (item.pitchEn || item.pitch) : (item.universalPrompt || "")))
                                    : item.pitch;

                                // Remove the specific header if present to clean up copy/paste and display
                                const contentToDisplay = rawContent?.replace(/:: VISIONARY DIRECTIVE ::/g, '').trim() || "";

                                return (
                                    <button
                                        key={item.id || index}
                                        onClick={() => setSelectedPathId(item.id)}
                                        className={`
                                group relative flex flex-col rounded-xl overflow-hidden text-left h-full transition-all duration-300 border min-h-[500px]
                                ${isSelected
                                                ? `bg-zinc-900/80 ${borderColor} shadow-[0_0_50px_rgba(0,0,0,0.5)] scale-[1.01] z-10`
                                                : 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-600 hover:-translate-y-1 opacity-90 hover:opacity-100'
                                            }
                            `}
                                    >
                                        <div className={`h-1 w-full ${accentColor} opacity-50 group-hover:opacity-100 transition-opacity shrink-0`}></div>

                                        {isCached && (
                                            <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-emerald-900/80 border border-emerald-500/50 text-emerald-400 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider">
                                                <Check size={10} />
                                                {lang === 'EN' ? "GENERATED" : "已生成"}
                                            </div>
                                        )}

                                        <div
                                            onClick={(e) => handleCopy(e, contentToDisplay, item.id)}
                                            className="absolute bottom-4 right-4 z-30 p-2 bg-black/60 hover:bg-zinc-700 border border-zinc-700 rounded-full text-zinc-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            {copiedId === item.id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                        </div>

                                        <div className="p-6 flex flex-col h-full overflow-hidden w-full relative">
                                            <div className="flex items-center justify-between mb-4 shrink-0 w-full pr-16">
                                                <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] py-1 px-3 rounded border border-white/10 ${lightBg} ${textColor}`}>
                                                    {getIconForType(item.type)}
                                                    {getLabelForType(item.type)}
                                                </div>
                                            </div>

                                            {(item.title) && (
                                                <h3 className={`${isAestheticResults ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-serif mb-3 leading-tight transition-colors shrink-0 ${isSelected ? textColor : 'text-white group-hover:text-zinc-200'}`}>
                                                    {item.title}
                                                </h3>
                                            )}

                                            {!isAestheticResults && (
                                                <div className="mb-4 pl-4 border-l-2 border-zinc-800 group-hover:border-white/20 transition-colors shrink-0">
                                                    <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{isCommercialResults ? 'SLOGAN' : 'LOGLINE'}</div>
                                                    <p className="text-sm text-zinc-200 italic font-serif leading-relaxed">
                                                        "{item.tagline}"
                                                    </p>
                                                </div>
                                            )}

                                            {(!isAestheticResults && item.visualKey) && (
                                                <div className="mb-4 bg-black/40 p-3 rounded border border-zinc-800/50 shrink-0">
                                                    <div className={`text-[9px] font-bold uppercase tracking-widest mb-1 ${textColor}`}>{lang === 'EN' ? "VISUAL KEY" : "视觉锤"}</div>
                                                    <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                                                        {item.visualKey}
                                                    </p>
                                                </div>
                                            )}

                                            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 mb-2 border-t border-zinc-900 pt-4 w-full text-left">
                                                {isAestheticResults && promptLang === 'UVD' ? (
                                                    <HighlightedUVD text={contentToDisplay} />
                                                ) : (
                                                    <div className={`leading-loose whitespace-pre-wrap ${isAestheticResults ? 'font-mono text-zinc-300 text-sm md:text-base' : 'font-light text-zinc-300 text-sm'}`}>
                                                        {contentToDisplay}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            <div className="shrink-0 h-20 bg-black/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between px-6 md:px-12 z-40">
                <div className="flex gap-4">
                    <button onClick={onBack} className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all group min-w-[140px]">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>{lang === 'CN' ? "返回引擎" : "Home"}</span>
                    </button>
                </div>

                <div className="flex-1 flex justify-center items-center gap-6 mx-4 overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setIsParamsPanelOpen(!isParamsPanelOpen)}
                        className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]"
                    >
                        <List size={18} className={`transition-colors ${isParamsPanelOpen ? getThemeColor() : "text-zinc-400 group-hover:text-white"}`} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isParamsPanelOpen ? getThemeColor() : "text-zinc-400 group-hover:text-white"}`}>
                            {lang === 'EN' ? "Params" : "参数"}
                        </span>
                    </button>

                    <div className="w-px h-8 bg-zinc-800 shrink-0"></div>

                    <button
                        onClick={onOpenHistory}
                        className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]"
                    >
                        <HistoryIcon size={18} className="transition-colors text-zinc-400 group-hover:text-white" />
                        <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white">
                            {lang === 'EN' ? "History" : "历史"}
                        </span>
                    </button>

                    <div className="w-px h-8 bg-zinc-800 shrink-0"></div>

                    {treatments.length > 0 && (
                        <>
                            <button onClick={handleCopyAll} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]">
                                {copiedAll ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-zinc-400 group-hover:text-white" />}
                                <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white">
                                    {copiedAll ? (lang === 'EN' ? "Copied" : "已复制") : (lang === 'EN' ? "Copy" : "复制")}
                                </span>
                            </button>
                            <div className="w-px h-8 bg-zinc-800 shrink-0"></div>
                        </>
                    )}

                    <button
                        onClick={() => setIsTaskManagerOpen(!isTaskManagerOpen)}
                        className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] relative"
                    >
                        <div className="relative">
                            {/* Breathing Light */}
                            {activeTaskCount > 0 && (
                                <div className={`absolute inset-0 flex items-center justify-center`}>
                                    <div className={`w-6 h-6 rounded-full ${getThemeBg()} opacity-30 animate-pulse blur-md`}></div>
                                    <div className={`w-4 h-4 rounded-full ${getThemeBg()} opacity-50 animate-pulse blur-sm`}></div>
                                </div>
                            )}
                            <Activity size={18} className={`relative z-10 transition-colors ${isTaskManagerOpen ? getThemeColor() : "text-zinc-400 hover:text-white"}`} />
                            {activeTaskCount > 0 && (
                                <span className={`absolute -top-1 -right-1 w-4 h-4 bg-[#050505] border border-white/10 ${getThemeColor()} rounded-full text-[9px] flex items-center justify-center font-bold shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-20 leading-none`}>
                                    {activeTaskCount}
                                </span>
                            )}
                        </div>
                        <span className={`text-[9px] font-bold uppercase tracking-wider relative z-10 ${isTaskManagerOpen ? getThemeColor() : "text-zinc-400 hover:text-white"}`}>
                            {lang === 'EN' ? "Tasks" : "任务中心"}
                        </span>
                    </button>
                </div>
                <button
                    onClick={handleGenerate}
                    disabled={isProcessing || !selectedPathId || treatments.length === 0}
                    className={`flex items-center justify-center gap-3 px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group min-w-[180px] border 
                ${selectedPathId
                            ? getGenerateButtonClass(hasExistingBlueprint)
                            : 'bg-zinc-900 text-zinc-600 border-zinc-800 cursor-not-allowed'
                        }
             `}
                >
                    {isProcessing ? (
                        <>
                            <RotateCw size={16} className="animate-spin" />
                            <span className="tabular-nums">
                                {lang === 'EN' ? "Building" : "构建中"}
                                <ProcessingTimer startTime={bibleStartTime} />
                            </span>
                        </>
                    ) : (
                        <>
                            {hasExistingBlueprint ? <BookOpen size={16} /> : <Sparkles size={16} />}
                            <span>{getGenerateButtonLabel()}</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>

            <NarrativeLibraryModal
                isOpen={isStyleModalOpen}
                onClose={() => setIsStyleModalOpen(false)}
                blockId="style_matrix"
                blockName={lang === 'EN' ? (isCommercialResults ? "DIRECTOR STYLES" : (isAestheticResults ? "AESTHETIC STYLES" : (isTrailerResults ? "EDITING STYLES" : "VISUAL TONE"))) : (isCommercialResults ? "导演风格" : (isAestheticResults ? "美学风格" : (isTrailerResults ? "剪辑风格" : "视觉调性")))}
                selectedTags={currentStyleName ? [currentStyleName] : []}
                onToggleTag={handleStyleToggle}
                customLibraryData={styleLibraryData}
                lang={lang}
                driverType={currentDriverType}
            />

            <TaskManagerPanel
                isOpen={isTaskManagerOpen}
                onClose={() => setIsTaskManagerOpen(false)}
                lang={lang}
            />
        </div>
    );
};
