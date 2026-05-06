
import React, { useState, useMemo, useEffect } from 'react';
import { CreativeTreatment, StyleConfig, LibraryCategoryDef, BlueprintLanguage, DriverType, CreativeBlueprint, NarrativeFieldState, WorldLawConfig } from '../types';
import { STYLE_MATRIX, PERSPECTIVES, SENSORY_MODES } from '../data/narrative/style_matrix';
import { DIRECTOR_STYLES } from '../data/narrative/director_styles';
import { SV1_DATA } from '../data/engine_sv/SV1';
import { SV2_DATA } from '../data/engine_sv/SV2';
import { Sparkles, Film, Zap, BrainCircuit, BookOpen, ArrowRight, RotateCw, Check, Palette, Settings2, ArrowLeft, Copy, Layers, History as HistoryIcon, GitFork, Gem, Eye, Anchor, Wind, Globe, User, Fingerprint, List, X, Database, Terminal, Activity, Brain } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { TaskManagerPanel } from './TaskManagerPanel';
import { BiblePromptInspectorModal } from './BiblePromptInspectorModal';
import { AdminXRayButton } from './XRayInspector';
import { globalTaskManager } from '../services/taskManager';
import { ProcessingTimer } from './SharedBlueprintComponents';
import { EngineParamsOverview } from './EngineParamsOverview';

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
    thinkingXml?: string;
    worldLawConfig?: WorldLawConfig;
    onToggleTag?: (blockId: string, tag: string) => void;
    isAdmin?: boolean;
}

export const NarrativePathsView: React.FC<NarrativePathsViewProps> = ({
    treatments,
    onSelect,
    isProcessing,
    bibleStartTime,
    isHistoryMode = false,
    onBack,
    onOpenHistory,
    lang = 'CN',
    activeDriver,
    cachedBlueprints = {},
    fieldState,
    visionInput,
    visionAnalysis,
    thinkingXml,
    worldLawConfig,
    onToggleTag,
    isAdmin = false
}) => {
    const { theme } = useTheme();
    const [selectedPathId, setSelectedPathId] = useState<string | null>(null);
    const [isThinkingPanelOpen, setIsThinkingPanelOpen] = useState(false);
    const [styleConfig, setStyleConfig] = useState<StyleConfig>({
        styleId: null,
        perspectiveId: 'SCREENPLAY',
        sensoryId: 'VISUAL'
    });
    const [isStyleModalOpen, setIsStyleModalOpen] = useState(false);
    const [isVolumeModalOpen, setIsVolumeModalOpen] = useState(false);
    const [isStructureModalOpen, setIsStructureModalOpen] = useState(false);
    const [isParamsPanelOpen, setIsParamsPanelOpen] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [copiedAll, setCopiedAll] = useState(false);
    const [isTaskManagerOpen, setIsTaskManagerOpen] = useState(false);
    const [activeTaskCount, setActiveTaskCount] = useState(0);
    const [isBibleInspectorOpen, setIsBibleInspectorOpen] = useState(false);

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
                desc: "Select an authorial renderer for the Creative Bible.",
                items: cat.items.map(item => ({
                    id: item.id,
                    name: item.name,
                    def: item.coreRewriteLogic || item.dna,
                    core: `${item.styleTitle || item.description}${item.example ? ` | 代表作: ${item.example}` : ''}`,
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

    const structureLibraryData: LibraryCategoryDef[] = useMemo(() => {
        return SV1_DATA.map(cat => ({
            id: cat.id,
            name: cat.name,
            desc: cat.desc || '',
            items: cat.items.map(item => ({ ...item, group: cat.name }))
        }));
    }, []);

    const volumeLibraryData: LibraryCategoryDef[] = useMemo(() => {
        return SV2_DATA.map(cat => ({
            id: cat.id,
            name: cat.name,
            desc: cat.desc || '',
            items: cat.items.map(item => ({ ...item, group: cat.name }))
        }));
    }, []);

    const currentVolumeName = useMemo(() => {
        const tags = fieldState?.['skin_volume'];
        return Array.isArray(tags) && tags.length > 0 ? tags[0] : null;
    }, [fieldState]);

    const currentStructureName = useMemo(() => {
        const tags = fieldState?.['skin_structure'];
        return Array.isArray(tags) && tags.length > 0 ? tags[0] : null;
    }, [fieldState]);

    const handleVolumeToggle = (tagName: string) => {
        onToggleTag?.('skin_volume', tagName);
    };

    const handleStructureToggle = (tagName: string) => {
        onToggleTag?.('skin_structure', tagName);
    };

    const getThemeColor = () => {
        if (theme === 'retro') return 'text-[#8B261D]';
        if (isCommercialResults) return 'text-mist-cyan';
        return 'text-[var(--mist-archive-red)]';
    }

    const getThemeBg = () => {
        if (theme === 'retro') return 'bg-[#8B261D]';
        if (isCommercialResults) return 'bg-mist-cyan';
        return 'bg-[rgba(255,98,86,0.2)]';
    }

    const getEmptyStateIconColor = () => {
        if (isCommercialResults) return 'text-mist-cyan/30';
        return theme === 'retro' ? 'text-[#8B261D]/30' : 'text-[rgba(255,98,86,0.32)]';
    }

    const getGenerateButtonClass = (hasExisting: boolean) => {
        if (isCommercialResults) {
            return `bg-mist-cyan/20 hover:bg-mist-cyan/30 text-white border-mist-cyan/55`;
        }
        if (hasExisting) {
            return `bg-[rgba(255,98,86,0.2)] hover:bg-[rgba(255,98,86,0.28)] text-white border-[rgba(255,98,86,0.55)]`;
        }
        if (theme === 'retro') return 'bg-[#8B261D] hover:bg-[#6D1E16] text-white border-[#8B261D]';
        return 'bg-[rgba(255,98,86,0.2)] hover:bg-[rgba(255,98,86,0.28)] text-white border-[rgba(255,98,86,0.55)]';
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
            return lang === 'EN' ? "Author Style Rewrite" : "作者风格重写";
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

    const formatVolumeName = (name: string) => {
        if (!name) return "";
        if (lang === 'EN') return formatName(name);
        const duration = name.match(/\(([^)]*(?:s|m|S|M)[^)]*)\)/)?.[1];
        return duration ? `${name.split('(')[0].trim()}（${duration}）` : formatName(name);
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
    const controlClass = `mist-archive-button flex items-center px-3 py-1.5 ${theme === 'retro' ? 'bg-transparent border-[#8B261D]/20 shadow-none' : 'bg-zinc-900 border-white/20'} ${themeTextColor} hover:border-[#8B261D]/50 transition-all w-44`;

    return (
        <div className={`mist-archive-workbench mist-divergence-view w-full h-full flex flex-col relative overflow-hidden ${theme === 'retro' ? 'bg-[var(--bg-main)]' : 'bg-[#0a0a0a]'}`}>
            <div className={`mist-archive-toolbar shrink-0 h-14 ${theme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]/20 shadow-xl' : 'bg-[#0a0a0a] border-zinc-800 shadow-[0_15px_45px_rgba(0,0,0,1)]'} border-b flex items-center justify-between px-6 z-20`}>
                <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 ${getThemeColor()}`}>
                        <Settings2 size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">{getMatrixLabel()}</span>
                    </div>

                    {isAestheticResults && (
                        <div className={`mist-archive-panel flex border p-1 ml-4 ${theme === 'retro' ? 'bg-[#8B261D]/5 border-[#8B261D]/30 shadow-inner' : 'bg-zinc-900 border-zinc-700'}`}>
                            <button
                                onClick={() => setPromptLang('CN')}
                                className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${promptLang === 'CN' ? (theme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-rose-500 text-black') : (theme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/10' : 'text-zinc-500 hover:text-white')}`}
                            >
                                {lang === 'EN' ? "Concept" : "视觉概念"}
                            </button>
                            <button
                                onClick={() => setPromptLang('EN')}
                                className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${promptLang === 'EN' ? (theme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-rose-500 text-black') : (theme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/10' : 'text-zinc-500 hover:text-white')}`}
                            >
                                {lang === 'EN' ? "Prompt" : "MJ 指令"}
                            </button>
                            <button
                                onClick={() => setPromptLang('UVD')}
                                className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${promptLang === 'UVD' ? (theme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-rose-500 text-black') : (theme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/10' : 'text-zinc-500 hover:text-white')}`}
                            >
                                {lang === 'EN' ? "Universal" : "通用指令"}
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-center flex-1">
                    {/* Story Volume Button */}
                    <button
                        onClick={() => setIsVolumeModalOpen(true)}
                        className={`${controlClass} text-left gap-2`}
                        title={lang === 'EN' ? "Select Story Volume" : "选择故事体量"}
                    >
                        <Database size={14} className="shrink-0" />
                        <span className="text-xs font-bold truncate">
                            {currentVolumeName
                                ? formatVolumeName(currentVolumeName)
                                : (lang === 'EN' ? "VOLUME" : "故事体量")}
                        </span>
                    </button>

                    {/* Narrative Structure Button */}
                    <button
                        onClick={() => setIsStructureModalOpen(true)}
                        className={`${controlClass} text-left gap-2`}
                        title={lang === 'EN' ? "Select Narrative Structure" : "选择叙事结构"}
                    >
                        <Layers size={14} className="shrink-0" />
                        <span className="text-xs font-bold truncate">
                            {currentStructureName
                                ? formatName(currentStructureName)
                                : (lang === 'EN' ? "STRUCTURE" : "叙事结构")}
                        </span>
                    </button>

                    {/* Author Style Button - Hidden for Aesthetic driver */}
                    {!isAestheticResults && (
                        <button
                            onClick={() => setIsStyleModalOpen(true)}
                            className={`${controlClass} text-left gap-2`}
                            title={lang === 'EN' ? "Select Author Style" : "选择作者风格"}
                        >
                            <Palette size={14} className="shrink-0" />
                            <span className="text-xs font-bold truncate">
                                {currentStyleName
                                    ? formatName(currentStyleName)
                                    : (lang === 'EN' ? "AUTHOR STYLE" : "作者风格")}
                            </span>
                        </button>
                    )}

                    {(!styleConfig.styleId && !isCommercialResults && !isExperimentalResults && !isAestheticResults && !isTrailerResults) && (
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

                    <div className={`w-px h-8 ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} mx-2 hidden lg:block`}></div>

                    <div className="flex items-center gap-2">
                        <AdminXRayButton
                            isAdmin={isAdmin}
                            lang={lang === 'EN' ? 'EN' : 'CN'}
                            title={lang === 'EN' ? 'X-Ray Path Regeneration Prompt' : 'X-Ray 路径重刷指令'}
                            payload={{
                                task: 'Regenerate narrative paths',
                                driverType: currentDriverType,
                                fieldState: fieldState || {},
                                visionInput: visionInput || '',
                                visionAnalysis: visionAnalysis || '',
                                worldLawConfig: worldLawConfig || { gravity: 4 }
                            }}
                            disabled={isProcessing}
                            className={theme === 'retro' ? 'h-8 w-8 bg-white border-black/10 text-[#8B261D] hover:bg-[#8B261D]/10' : 'h-8 w-8 bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-gold-primary'}
                        />
                    </div>

                </div>
            </div>

            <div className="flex-1 w-full relative overflow-hidden flex mb-14 min-h-0">
                <div className={`
                    absolute top-0 bottom-0 left-0 z-20
                    w-full max-w-lg
                    ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[#8B261D]/20' : 'bg-[#0c0c0c]/95 border-zinc-800'} border-r backdrop-blur-md
                    transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isParamsPanelOpen ? 'translate-x-0' : '-translate-x-full'}
                    flex flex-col ${theme === 'retro' ? '' : 'shadow-[10px_0_30px_rgba(0,0,0,0.3)]'}
                `}>
                    {/* Sidebar Content */}
                    <div className={`p-6 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[var(--bg-header)]' : 'border-zinc-800 bg-[#0a0a0a]'} flex justify-between items-center`}>
                        <div className="flex items-center gap-3">
                            <Database className={getThemeColor()} size={20} />
                            <span className={`text-base font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'} uppercase tracking-widest`}>
                                {lang === 'EN' ? "Engine Parameters" : "引擎参数概览"}
                            </span>
                        </div>
                        <span className={`text-xs ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-500'} font-mono`}>
                            {fieldState ? Object.keys(fieldState).length : 0} {lang === 'EN' ? "ACTIVE" : "项激活"}
                        </span>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
                        <EngineParamsOverview
                            fieldState={fieldState}
                            language={lang}
                            theme={theme}
                            accentClass={getThemeColor()}
                            visionInput={visionInput}
                            visionAnalysis={visionAnalysis}
                        />
                    </div>
                </div>

                {/* CARDS CONTAINER */}
                <div className="flex-1 w-full h-full p-4 md:p-8 overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col min-h-0">
                    {treatments.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-zinc-600 gap-6">
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
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0 pb-20 lg:pb-0">
                            {treatments.map((item, index) => {
                                const isSelected = selectedPathId === item.id;
                                const isCached = !!cachedBlueprints[item.id];

                                let accentColor = isCommercialResults ? 'bg-mist-cyan/40' : 'bg-[rgba(255,98,86,0.38)]';
                                let borderColor = isCommercialResults ? 'border-mist-cyan/60' : 'border-[rgba(255,98,86,0.58)]';
                                let textColor = isCommercialResults ? 'text-mist-cyan' : 'text-[var(--mist-archive-red)]';
                                let lightBg = isCommercialResults ? 'bg-mist-cyan/10' : 'bg-[rgba(255,98,86,0.08)]';

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
                                            mist-archive-panel group relative flex flex-col overflow-hidden text-left transition-all duration-300 border h-[400px] lg:h-full lg:max-h-none min-h-0
                                            ${isSelected
                                                ? (theme === 'retro' ? 'bg-white border-[#8B261D] shadow-[0_10px_30px_rgba(139,38,29,0.1)] scale-[1.01] z-10' : `bg-zinc-900/80 ${borderColor} shadow-[0_0_50px_rgba(0,0,0,0.5)] scale-[1.01] z-10`)
                                                : (theme === 'retro' ? 'bg-black/[0.03] border-black/5 hover:border-[#8B261D]/30 hover:-translate-y-1' : 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-600 hover:-translate-y-1 opacity-90 hover:opacity-100')
                                            }
                                        `}
                                    >
                                        <div className={`h-1 w-full ${accentColor} opacity-50 group-hover:opacity-100 transition-opacity shrink-0`}></div>

                                        {isCached && (
                                            <div className={`absolute top-4 right-4 z-20 flex items-center gap-1 bg-black/80 border ${isCommercialResults ? 'border-mist-cyan/45 text-mist-cyan' : 'border-[rgba(255,98,86,0.45)] text-[var(--mist-archive-red)]'} px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider`}>
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
                                                <div className={`mist-archive-button flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] py-1 px-3 border border-white/10 ${lightBg} ${textColor}`}>
                                                    {getIconForType(item.type)}
                                                    {getLabelForType(item.type)}
                                                </div>
                                            </div>

                                            {(item.title) && (
                                                <h3 className={`${isAestheticResults ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-serif mb-3 leading-tight transition-colors shrink-0 ${isSelected ? (theme === 'retro' ? 'text-[#8B261D]' : textColor) : (theme === 'retro' ? 'text-black' : 'text-white group-hover:text-zinc-200')}`}>
                                                    {item.title}
                                                </h3>
                                            )}

                                            {!isAestheticResults && (
                                                <div className={`mb-4 pl-4 border-l-2 ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} group-hover:border-white/20 transition-colors shrink-0`}>
                                                    <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{isCommercialResults ? 'SLOGAN' : 'LOGLINE'}</div>
                                                    <p className={`text-sm ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-200'} italic font-serif leading-relaxed`}>
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

                                            <div className={`flex-1 overflow-y-auto custom-scrollbar pr-2 mb-2 border-t ${theme === 'retro' ? 'border-[#8B261D]/5' : 'border-zinc-900'} pt-4 w-full text-left`}>
                                                {isAestheticResults && promptLang === 'UVD' ? (
                                                    <HighlightedUVD text={contentToDisplay} />
                                                ) : (
                                                    <div className={`leading-loose whitespace-pre-wrap ${isAestheticResults ? 'font-mono text-zinc-600 text-sm md:text-base' : `font-light ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-300'} text-sm`}`}>
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

            <div className={`mist-app-footer fixed bottom-0 left-0 right-0 h-14 bg-[var(--bg-header)] backdrop-blur-md border-t ${theme === 'retro' ? 'border-[var(--border-main)]' : 'border-zinc-800'} flex items-center justify-between px-6 md:px-12 z-40 transition-colors duration-500`}>
                <div className="flex items-center gap-4 shrink-0 w-[180px] md:w-[240px]">
                    <button onClick={onBack} className={`mist-app-archive-button flex items-center gap-3 px-6 py-3 bg-[var(--bg-panel)]/50 hover:bg-[var(--bg-panel)] border border-[var(--border-main)] text-xs font-bold uppercase tracking-widest transition-all duration-300 group min-w-[140px] hover:scale-105 active:scale-95 ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`}>
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>{lang === 'CN' ? "返回引擎" : "Home"}</span>
                    </button>
                </div>

                <div className="flex-1 flex justify-center items-center gap-6 mx-4 overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setIsParamsPanelOpen(!isParamsPanelOpen)}
                        className={`mist-app-footer-control ${isParamsPanelOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]`}
                    >
                        <List size={18} className={`transition-colors ${isParamsPanelOpen ? getThemeColor() : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isParamsPanelOpen ? getThemeColor() : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`}>
                            {lang === 'EN' ? "Params" : "参数"}
                        </span>
                    </button>

                    <div className={`w-px h-8 ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} shrink-0`}></div>

                    <button
                        onClick={onOpenHistory}
                        className="mist-app-footer-control flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]"
                    >
                        <HistoryIcon size={18} className={`transition-colors ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}>
                            {lang === 'EN' ? "History" : "历史"}
                        </span>
                    </button>

                    <div className={`w-px h-8 ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} shrink-0`}></div>

                    {treatments.length > 0 && (
                        <>
                            <button onClick={handleCopyAll} className="mist-app-footer-control flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]">
                                {copiedAll ? <Check size={18} className="text-green-500" /> : <Copy size={18} className={`transition-colors ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />}
                                <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`}>
                                    {copiedAll ? (lang === 'EN' ? "Copied" : "已复制") : (lang === 'EN' ? "Copy" : "复制")}
                                </span>
                            </button>
                            <div className={`w-px h-8 ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} shrink-0`}></div>
                        </>
                    )}

                    {thinkingXml && (
                        <>
                            <button
                                onClick={() => setIsThinkingPanelOpen(!isThinkingPanelOpen)}
                                className={`mist-app-footer-control ${isThinkingPanelOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]`}
                            >
                                <Brain size={18} className={`transition-colors ${isThinkingPanelOpen ? getThemeColor() : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`} />
                                <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${isThinkingPanelOpen ? getThemeColor() : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`}>
                                    {lang === 'EN' ? "Thinking" : "思考过程"}
                                </span>
                            </button>
                            <div className={`w-px h-8 ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} shrink-0`}></div>
                        </>
                    )}

                    <button
                        className={`mist-app-footer-control ${isTaskManagerOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] relative`}
                        onClick={() => setIsTaskManagerOpen(!isTaskManagerOpen)}
                    >
                        <div className="relative">
                            {/* Breathing Light */}
                            {activeTaskCount > 0 && (
                                <div className={`absolute inset-0 flex items-center justify-center`}>
                                    <div className={`w-6 h-6 rounded-full ${getThemeBg()} opacity-30 animate-pulse blur-md`}></div>
                                    <div className={`w-4 h-4 rounded-full ${getThemeBg()} opacity-50 animate-pulse blur-sm`}></div>
                                </div>
                            )}
                            <Activity size={18} className={`relative z-10 transition-colors ${isTaskManagerOpen ? getThemeColor() : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`} />
                            {activeTaskCount > 0 && (
                                <span className={`absolute -top-1 -right-1 w-4 h-4 bg-[#050505] border border-white/10 ${getThemeColor()} rounded-full text-[9px] flex items-center justify-center font-bold shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-20 leading-none`}>
                                    {activeTaskCount}
                                </span>
                            )}
                        </div>
                        <span className={`text-[9px] font-bold uppercase tracking-wider relative z-10 transition-colors ${isTaskManagerOpen ? getThemeColor() : (theme === 'retro' ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white')}`}>
                            {lang === 'EN' ? "Tasks" : "任务中心"}
                        </span>
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    {isAdmin && (
                        <button
                            onClick={() => setIsBibleInspectorOpen(true)}
                            className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all
                            ${theme === 'retro' ? 'border-[#8B261D]/20 text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/5' : 'border-zinc-800 text-zinc-500 hover:text-gold-primary hover:border-zinc-600 hover:bg-zinc-900'}`}
                            title={lang === 'CN' ? 'X-RAY 圣经指令透视' : 'Bible Prompt Inspector'}
                        >
                            <Terminal size={16} />
                        </button>
                    )}
                    <button
                        onClick={handleGenerate}
                        disabled={isProcessing || !selectedPathId || treatments.length === 0}
                        className={`mist-app-primary-action flex items-center justify-center gap-3 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group min-w-[200px] border
                ${selectedPathId
                            ? (theme === 'retro' ? 'bg-[#8B261D] hover:bg-[#631B15] border-[#8B261D] text-white shadow-none' : getGenerateButtonClass(hasExistingBlueprint))
                            : (theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-zinc-400' : 'bg-zinc-900 text-zinc-600 border-zinc-800') + ' cursor-not-allowed'
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
            </div>

            <NarrativeLibraryModal
                isOpen={isStyleModalOpen}
                onClose={() => setIsStyleModalOpen(false)}
                blockId="style_matrix"
                blockName={lang === 'EN' ? (isCommercialResults ? "DIRECTOR STYLES" : (isAestheticResults ? "AESTHETIC STYLES" : (isTrailerResults ? "EDITING STYLES" : "AUTHOR STYLE"))) : (isCommercialResults ? "导演风格" : (isAestheticResults ? "美学风格" : (isTrailerResults ? "剪辑风格" : "作者风格")))}
                selectedTags={currentStyleName ? [currentStyleName] : []}
                onToggleTag={handleStyleToggle}
                customLibraryData={styleLibraryData}
                lang={lang}
                driverType={currentDriverType}
            />

            <NarrativeLibraryModal
                isOpen={isVolumeModalOpen}
                onClose={() => setIsVolumeModalOpen(false)}
                blockId="skin_volume"
                blockName={lang === 'EN' ? "STORY VOLUME" : "故事体量"}
                selectedTags={currentVolumeName ? [currentVolumeName] : []}
                onToggleTag={handleVolumeToggle}
                customLibraryData={volumeLibraryData}
                lang={lang}
                driverType={currentDriverType}
            />

            <NarrativeLibraryModal
                isOpen={isStructureModalOpen}
                onClose={() => setIsStructureModalOpen(false)}
                blockId="skin_structure"
                blockName={lang === 'EN' ? "NARRATIVE STRUCTURE" : "叙事结构"}
                selectedTags={currentStructureName ? [currentStructureName] : []}
                onToggleTag={handleStructureToggle}
                customLibraryData={structureLibraryData}
                lang={lang}
                driverType={currentDriverType}
            />

            <TaskManagerPanel
                isOpen={isTaskManagerOpen}
                onClose={() => setIsTaskManagerOpen(false)}
                lang={lang}
            />

            <BiblePromptInspectorModal
                isOpen={isBibleInspectorOpen}
                onClose={() => setIsBibleInspectorOpen(false)}
                lang={lang}
                treatment={selectedPathId ? treatments.find(t => t.id === selectedPathId) || null : null}
                styleConfig={styleConfig}
                fieldState={fieldState}
                visionInput={visionInput}
                visionAnalysis={visionAnalysis}
                worldLawConfig={worldLawConfig}
                driverType={currentDriverType}
            />

            {isThinkingPanelOpen && thinkingXml && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setIsThinkingPanelOpen(false)}>
                    <div
                        className={`relative w-[90vw] max-w-3xl max-h-[80vh] rounded-xl border overflow-hidden flex flex-col ${theme === 'retro' ? 'bg-white border-[#8B261D]/20' : 'bg-[#0a0a0a] border-zinc-800'}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${theme === 'retro' ? 'border-[#8B261D]/10 bg-[#faf5ee]' : 'border-zinc-800 bg-zinc-900/50'}`}>
                            <div className="flex items-center gap-3">
                                <Brain size={18} className={theme === 'retro' ? 'text-[#8B261D]' : 'text-amber-400'} />
                                <span className={`text-sm font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-300'}`}>
                                    {lang === 'EN' ? "AI Thinking Process" : "AI 思考过程"}
                                </span>
                            </div>
                            <button onClick={() => setIsThinkingPanelOpen(false)} className={`p-2 rounded-lg transition-colors ${theme === 'retro' ? 'hover:bg-black/5 text-zinc-500' : 'hover:bg-zinc-800 text-zinc-400 hover:text-white'}`}>
                                <X size={18} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6">
                            <pre className={`text-xs leading-relaxed whitespace-pre-wrap font-mono ${theme === 'retro' ? 'text-zinc-700' : 'text-zinc-400'}`}>
                                {thinkingXml}
                            </pre>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
