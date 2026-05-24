
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { CreativeTreatment, StyleConfig, LibraryCategoryDef, BlueprintLanguage, DriverType, CreativeBlueprint, NarrativeFieldState, WorldLawConfig, PromptFocusState, MAxisMixerState, M7BResidueIntensity } from '../types';
import { STYLE_MATRIX } from '../data/narrative/style_matrix';
import { DIRECTOR_STYLES } from '../data/narrative/director_styles';
import { SV1_DATA } from '../data/engine_sv/SV1';
import { SV2_DATA } from '../data/engine_sv/SV2';
import { Sparkles, Film, Zap, BrainCircuit, BookOpen, ArrowRight, RotateCw, Check, Palette, Settings2, ArrowLeft, Copy, Layers, History as HistoryIcon, GitFork, Gem, Anchor, Wind, Globe, User, List, X, Database, Terminal, Activity, Brain, ChevronRight, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { BiblePromptInspectorModal } from './BiblePromptInspectorModal';
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
    overviewFieldState?: NarrativeFieldState;
    visionInput?: string;
    visionAnalysis?: string;
    visionImage?: string | null;
    thinkingXml?: string;
    worldLawConfig?: WorldLawConfig;
    overviewWorldLawConfig?: WorldLawConfig;
    focusState?: PromptFocusState;
    mAxisMixer?: MAxisMixerState;
    m7bIntensity?: M7BResidueIntensity;
    onToggleTag?: (blockId: string, tag: string) => void;
    onSetTags?: (blockId: string, tags: string[]) => void;
    onClearBlock?: (blockId: string) => void;
    onAddCustomDef?: (name: string, def: string, core: string) => void;
    isAdmin?: boolean;
    isTaskManagerOpen?: boolean;
    setIsTaskManagerOpen?: (open: boolean) => void;
}

const countNarrativeUnits = (text: string): number => {
    const clean = text
        .replace(/<[^>]+>/g, ' ')
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/[_*#>`{}[\]"]/g, ' ');
    const cjkVisibleCount = clean.match(/[\u3400-\u9fff\uf900-\ufaff\u3000-\u303f\uff00-\uffef·—…]/g)?.length || 0;
    const latinCount = clean
        .replace(/[\u3400-\u9fff\uf900-\ufaff\u3000-\u303f\uff00-\uffef·—…]/g, ' ')
        .match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g)?.length || 0;
    return cjkVisibleCount + latinCount;
};

const stripNarrativeCountingScaffold = (text: string): string => {
    const structuralLabelPattern = /^(?:content|pitch|story|synopsis|description|正文|内容|方案|故事|梗概|叙事|开端|起势|起|承|转|合|发展|高潮|结局|余痕|收束|inciting|rising|climax|resolution|carrier|field|pressure|sensory|residue|plot|form|atmosphere|structure|visual|tagline|logline)(?:$|\s|[（(])/i;

    return text
        .replace(/:: VISIONARY DIRECTIVE ::/g, ' ')
        .split('\n')
        .map(line => {
            const trimmed = line.trim();
            if (!trimmed) return '';

            const unbulleted = trimmed.replace(/^[-*•\d.)、\s]+/, '').trim();
            const labelMatch = unbulleted.match(/^([^:：]{1,48})[:：]\s*(.+)$/);
            if (!labelMatch) return unbulleted;

            const [, label, body] = labelMatch;
            const normalizedLabel = label.trim().replace(/[_\-\s]+/g, ' ');
            if (label.includes('_') || structuralLabelPattern.test(normalizedLabel)) {
                return body.trim();
            }

            return unbulleted;
        })
        .join('\n');
};

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
    overviewFieldState,
    visionInput,
    visionAnalysis,
    visionImage,
    thinkingXml,
    worldLawConfig,
    overviewWorldLawConfig,
    focusState,
    mAxisMixer,
    m7bIntensity,
    onToggleTag,
    onSetTags,
    onClearBlock,
    onAddCustomDef,
    isAdmin = false,
    isTaskManagerOpen,
    setIsTaskManagerOpen
}) => {
    const { theme } = useTheme();
    const [selectedPathId, setSelectedPathId] = useState<string | null>(null);
    const [isThinkingPanelOpen, setIsThinkingPanelOpen] = useState(false);
    const [styleConfig, setStyleConfig] = useState<StyleConfig>({
        styleId: null,
        perspectiveId: null,
        sensoryId: null
    });
    const [isStyleModalOpen, setIsStyleModalOpen] = useState(false);
    const [isVolumeModalOpen, setIsVolumeModalOpen] = useState(false);
    const [isStructureModalOpen, setIsStructureModalOpen] = useState(false);
    const [isParamsPanelOpen, setIsParamsPanelOpen] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [copiedAll, setCopiedAll] = useState(false);
    const [activeTaskCount, setActiveTaskCount] = useState(0);
    const [isBibleInspectorOpen, setIsBibleInspectorOpen] = useState(false);

    const [promptLang, setPromptLang] = useState<'CN' | 'EN' | 'UVD'>('CN');
    const [customStyleItems, setCustomStyleItems] = useState<any[]>([]);
    const customStyleDraftsRef = useRef<Record<string, { def: string; core: string }>>({});

    const closeParamsPanelImmediately = () => {
        flushSync(() => {
            setIsParamsPanelOpen(false);
        });
    };

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
    const isDesignAudit = Boolean(thinkingXml?.includes('<design_audit'));

    const getIconForType = (type: string) => {
        switch (type) {
            // Aesthetic New Types
            case 'DIRECTOR_VISION': return <Film size={16} />;
            case 'SUBJECT_PORTRAIT': return <User size={16} />;
            case 'SCENE_RELATION': return <Globe size={16} />;
            case 'PLOT': return <Film size={16} />;
            case 'FORM': return <Layers size={16} />;
            case 'CHARACTER': return <User size={16} />;

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
            case 'PLOT': return lang === 'EN' ? 'EVENT CHAIN' : '事件链';
            case 'FORM': return lang === 'EN' ? 'CARRIER FOCUS' : '载体焦点';
            case 'CHARACTER': return lang === 'EN' ? 'CHARACTER DRIVEN' : '人物驱动';

            // Legacy / Other
            case 'STRUCTURALIST':
                if (isAestheticResults) return lang === 'EN' ? 'FULL DNA SYNTHESIS' : '全基因结晶 (Synthesis)';
                if (isExperimentalResults) return lang === 'EN' ? 'STRUCTURAL DECONSTRUCTION' : '符号解构 (Structuralist)';
                return lang === 'EN' ? 'PLOT DRIVEN' : '情节驱动';
            case 'POST_STRUCTURALIST':
                if (isAestheticResults) return lang === 'EN' ? 'SUBJECT SOUL FOCUS' : '主体之魂聚焦 (Subject)';
                return lang === 'EN' ? 'SUBJECT DRIVEN' : '主体驱动';
            case 'THE_REAL':
                if (isAestheticResults) return lang === 'EN' ? 'ATMOSPHERIC REALM' : '场域意境聚焦 (Vibe)';
                return lang === 'EN' ? 'WORLD DRIVEN' : '世界驱动';
            case 'CLASSIC': return lang === 'EN' ? 'EVENT DRIVEN' : '事件驱动 (Event Driven)';
            case 'STYLIZED': return lang === 'EN' ? 'PSYCH PORTRAIT' : '心理肖像 (Psych Portrait)';
            case 'SUBVERSIVE': return lang === 'EN' ? 'CONCEPTUAL' : '概念结构 (Conceptual)';
            case 'REAL': return lang === 'EN' ? 'THE REAL (PAIN)' : '实在界 (痛点狙击)';
            case 'IMAGINARY': return lang === 'EN' ? 'THE IMAGINARY (DREAM)' : '想象界 (美学造梦)';
            case 'SYMBOLIC': return lang === 'EN' ? 'THE SYMBOLIC (STATUS)' : '符号界 (阶级神话)';
            case 'PHENOMENOLOGICAL': return lang === 'EN' ? 'METONYMIC SCRIPT' : '换喻脚本';
            case 'THE SPECTACLE': return lang === 'EN' ? 'THE SPECTACLE' : '异界奇观';
            case 'VISUAL_POETRY': return lang === 'EN' ? 'VISUAL POETRY' : '视觉诗 (Visual Poetry)';
            case 'ONTOLOGY': return lang === 'EN' ? 'ONTOLOGY' : '本体论 (Ontology)';
            case 'ATMOSPHERE': return lang === 'EN' ? 'FIELD PRESSURE' : '场域压力';
            case 'THE_TEASE': return lang === 'EN' ? 'THE TEASE' : '极简悬疑 (Tease)';
            case 'THE_PULSE': return lang === 'EN' ? 'THE PULSE' : '节奏剪辑 (Pulse)';
            case 'THE_GLITCH': return lang === 'EN' ? 'THE GLITCH' : '意识流 (Glitch)';
            default: return type;
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
            if (customStyleItems.length > 0) {
                grouped.custom_author_style = {
                    id: 'custom_author_style',
                    name: lang === 'EN' ? 'Custom' : '自定义',
                    desc: 'Custom Director Style',
                    items: customStyleItems
                };
            }
            return Object.values(grouped);
        } else {
            const styleGroups = STYLE_MATRIX.map(cat => ({
                id: cat.id,
                name: cat.name,
                desc: "Select an authorial renderer for narrative writing.",
                items: cat.items.map(item => ({
                    id: item.id,
                    name: item.name,
                    def: item.coreRewriteLogic || item.dna,
                    core: `${item.styleTitle || item.description}${item.example ? ` | 代表作: ${item.example}` : ''}`,
                    group: cat.name
                }))
            }));
            if (customStyleItems.length > 0) {
                styleGroups.push({
                    id: 'custom_author_style',
                    name: lang === 'EN' ? 'Custom' : '自定义',
                    desc: 'Custom author renderer.',
                    items: customStyleItems
                });
            }
            return styleGroups;
        }
    }, [customStyleItems, isCommercialResults, lang]);

    const currentStyleName = isCommercialResults
        ? DIRECTOR_STYLES.find(i => i.id === styleConfig.styleId)?.name || customStyleItems.find(i => i.id === styleConfig.styleId)?.name || styleConfig.customStyleName || null
        : STYLE_MATRIX.flatMap(c => c.items).find(i => i.id === styleConfig.styleId)?.name || customStyleItems.find(i => i.id === styleConfig.styleId)?.name || styleConfig.customStyleName || null;

    const handleStyleToggle = (tagName: string) => {
        let allStyles: any[] = [];
        if (isCommercialResults) {
            allStyles = [...DIRECTOR_STYLES, ...customStyleItems];
        } else {
            allStyles = [...STYLE_MATRIX.flatMap(c => c.items), ...customStyleItems];
        }

        const selectedStyle = allStyles.find(s => s.name === tagName);
        if (selectedStyle) {
            if (styleConfig.styleId === selectedStyle.id) {
                setStyleConfig(prev => ({ ...prev, styleId: null, customStyleName: null, customStyleDef: null, customStyleCore: null }));
            } else {
                setStyleConfig(prev => ({
                    ...prev,
                    styleId: selectedStyle.id,
                    customStyleName: selectedStyle.isCustom ? selectedStyle.name : null,
                    customStyleDef: selectedStyle.isCustom ? selectedStyle.def : null,
                    customStyleCore: selectedStyle.isCustom ? selectedStyle.core : null
                }));
            }
        }
    };

    const handleSetStyleTags = (tags: string[]) => {
        const tagName = tags[0];
        if (!tagName) {
            setStyleConfig(prev => ({ ...prev, styleId: null, customStyleName: null, customStyleDef: null, customStyleCore: null }));
            return;
        }

        const allStyles = isCommercialResults
            ? [...DIRECTOR_STYLES, ...customStyleItems]
            : [...STYLE_MATRIX.flatMap(c => c.items), ...customStyleItems];
        const selectedStyle = allStyles.find(s => s.name === tagName);
        if (!selectedStyle) return;
        setStyleConfig(prev => ({
            ...prev,
            styleId: selectedStyle.id,
            customStyleName: selectedStyle.isCustom ? selectedStyle.name : null,
            customStyleDef: selectedStyle.isCustom ? selectedStyle.def : null,
            customStyleCore: selectedStyle.isCustom ? selectedStyle.core : null
        }));
    };

    const handleAddCustomStyle = (name: string, def: string, core: string) => {
        const trimmedName = name.trim();
        if (!trimmedName) return;
        const existing = customStyleDraftsRef.current[trimmedName];
        const finalDef = def || existing?.def || '';
        const finalCore = core || existing?.core || '';
        const id = `custom_style_${trimmedName.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '_')}`;
        const nextItem = {
            id,
            name: trimmedName,
            def: finalDef,
            core: finalCore,
            group: lang === 'EN' ? 'Custom' : '自定义',
            isCustom: true
        };
        setCustomStyleItems(prev => [nextItem, ...prev.filter(item => item.name !== trimmedName)]);
        setStyleConfig(prev => ({
            ...prev,
            styleId: id,
            customStyleName: trimmedName,
            customStyleDef: finalDef,
            customStyleCore: finalCore
        }));
        customStyleDraftsRef.current = {};
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

    const getPrimaryTag = (state: NarrativeFieldState | undefined, id: string) => {
        const tags = state?.[id];
        return Array.isArray(tags) && tags.length > 0 ? tags[0] : null;
    };

    const hasBibleConfigChanged = useMemo(() => {
        if (!selectedPathId) return false;
        const cached = cachedBlueprints[selectedPathId];
        if (!cached) return false;
        const generatedState = cached.generationFieldState || {};
        return getPrimaryTag(generatedState, 'skin_volume') !== currentVolumeName
            || getPrimaryTag(generatedState, 'skin_structure') !== currentStructureName;
    }, [cachedBlueprints, currentStructureName, currentVolumeName, selectedPathId]);

    const handleGenerate = () => {
        const treatment = treatments.find(t => t.id === selectedPathId);
        if (treatment) {
            // Force regeneration when the divergence-page structure/volume differs from the cached Bible.
            const force = !!styleConfig.styleId || hasBibleConfigChanged;
            onSelect(treatment, styleConfig, force);
        }
    };

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
        return 'bg-[rgba(var(--mist-active-accent-rgb),0.2)]';
    }

    const getEmptyStateIconColor = () => {
        if (isCommercialResults) return 'text-mist-cyan/30';
        return theme === 'retro' ? 'text-[#8B261D]/30' : 'text-[rgba(var(--mist-active-accent-rgb),0.32)]';
    }

    const getGenerateButtonClass = (hasExisting: boolean) => {
        if (isCommercialResults) {
            return `bg-mist-cyan/20 hover:bg-mist-cyan/30 text-white border-mist-cyan/55`;
        }
        if (hasExisting) {
            return `bg-[rgba(var(--mist-active-accent-rgb),0.2)] hover:bg-[rgba(var(--mist-active-accent-rgb),0.28)] text-white border-[rgba(var(--mist-active-accent-rgb),0.55)]`;
        }
        if (theme === 'retro') return 'bg-[#8B261D] hover:bg-[#6D1E16] text-white border-[#8B261D]';
        return 'bg-[rgba(var(--mist-active-accent-rgb),0.2)] hover:bg-[rgba(var(--mist-active-accent-rgb),0.28)] text-white border-[rgba(var(--mist-active-accent-rgb),0.55)]';
    }

    const getMatrixLabel = () => {
        if (isCommercialResults) return lang === 'EN' ? "Auteur & Aesthetics" : "导演与美学矩阵";
        if (isAestheticResults) return lang === 'EN' ? "Aesthetic Matrix" : "美学矩阵";
        if (isTrailerResults) return lang === 'EN' ? "Editing Matrix" : "剪辑风格矩阵";
        return lang === 'EN' ? "Render Filters" : "渲染滤镜 (Filters)";
    }

    const hasExistingBlueprint = selectedPathId ? !!cachedBlueprints[selectedPathId] : false;
    const readOnlyOverviewFieldState = overviewFieldState || fieldState;
    const readOnlyOverviewWorldLaw = overviewWorldLawConfig || worldLawConfig;

    const getGenerateButtonLabel = () => {
        if (styleConfig.styleId) {
            return lang === 'EN' ? "Author Style Rewrite" : "作者风格重写";
        }
        if (hasExistingBlueprint && hasBibleConfigChanged) {
            return lang === 'EN' ? "Regenerate with New Structure" : "按新结构生成";
        }
        if (hasExistingBlueprint) {
            return lang === 'EN' ? "View Narrative" : "回看叙事创作";
        }
        if (isCommercialResults) return lang === 'EN' ? "Generate Commercial Project" : "生成商业演示工程";
        if (isAestheticResults) return lang === 'EN' ? "Generate Aesthetic Project" : "生成美学工程";
        if (isTrailerResults) return lang === 'EN' ? "Generate Trailer Brief" : "生成预告片执行单";
        return lang === 'EN' ? "Generate Narrative" : "生成叙事创作";
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
        const matchedItem = SV2_DATA.flatMap(cat => cat.items).find((item: any) =>
            item.name === name
            || item.aliases?.includes(name)
            || item.aliasesEn?.includes(name)
        );
        if (matchedItem) {
            return lang === 'EN'
                ? (matchedItem.nameEn || matchedItem.name).toUpperCase()
                : matchedItem.name;
        }
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
    const controlClass = `mist-archive-button mist-divergence-filter-control flex items-center px-3 py-1.5 bg-transparent border-transparent shadow-none ${themeTextColor} transition-all w-44`;

    return (
        <div className={`mist-archive-workbench mist-divergence-view w-full h-full flex flex-col relative overflow-hidden ${theme === 'retro' ? 'bg-[var(--bg-main)]' : 'bg-[#0a0a0a]'}`}>
            <div className={`mist-archive-toolbar mist-divergence-filter-toolbar shrink-0 h-14 ${theme === 'retro' ? 'bg-[var(--bg-header)] border-[var(--border-main)] shadow-none' : 'bg-[#0a0a0a] border-zinc-800 shadow-[0_15px_45px_rgba(0,0,0,1)]'} border-b grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-6 z-20`}>
                <div className="flex items-center gap-4 min-w-0 justify-self-start">
                    <div className={`flex items-center gap-2 ${getThemeColor()}`}>
                        <Settings2 size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">{getMatrixLabel()}</span>
                    </div>

                    {isAestheticResults && (
                        <div className={`mist-archive-panel flex border p-1 ml-4 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)] shadow-none' : 'bg-zinc-900 border-zinc-700'}`}>
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

                <div className="mist-divergence-filter-controls flex flex-wrap gap-4 items-center justify-center justify-self-center">
                    {/* Story Volume Button */}
                    <button
                        onClick={() => setIsVolumeModalOpen(true)}
                        className={`${controlClass} ${currentVolumeName ? 'is-selected' : 'is-empty'} text-left gap-2`}
                        title={lang === 'EN' ? "Select Story Volume" : "选择故事体量"}
                    >
                        <Database size={14} className="shrink-0" />
                        <span className="text-xs font-bold truncate">
                            {currentVolumeName
                                ? formatVolumeName(currentVolumeName)
                                : (lang === 'EN' ? "STORY VOLUME" : "故事体量")}
                        </span>
                    </button>

                    {/* Narrative Structure Button */}
                    <button
                        onClick={() => setIsStructureModalOpen(true)}
                        className={`${controlClass} ${currentStructureName ? 'is-selected' : 'is-empty'} text-left gap-2`}
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
                            className={`${controlClass} ${currentStyleName ? 'is-selected' : 'is-empty'} text-left gap-2`}
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

                </div>
                <div className="min-w-0 justify-self-end" aria-hidden="true"></div>
            </div>

            <div className="flex-1 w-full relative overflow-hidden flex mb-14 min-h-0">
                <div className={`
                    absolute top-0 bottom-0 left-0 z-20
                    w-full max-w-lg
                    mist-archive-panel mist-engine-params-panel ${isParamsPanelOpen ? 'is-open' : 'is-closed'}
                    ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[#8B261D]/20' : 'bg-[#0c0c0c]/95 border-zinc-800'} border-r backdrop-blur-md
                    transition-transform ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isParamsPanelOpen ? 'translate-x-0 duration-500' : '-translate-x-full duration-0'}
                    flex flex-col ${theme === 'retro' ? '' : 'shadow-[10px_0_30px_rgba(0,0,0,0.3)]'}
                `}>
                    {/* Sidebar Content */}
                    <div className={`mist-archive-toolbar relative p-6 pr-16 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[var(--bg-header)]' : 'border-zinc-800 bg-[#0a0a0a]'} flex justify-between items-center`}>
                        <div className="flex items-center gap-3">
                            <Database className={getThemeColor()} size={20} />
                            <span className={`text-base font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'} uppercase tracking-widest`}>
                                {lang === 'EN' ? "Engine Parameters" : "引擎参数概览"}
                            </span>
                        </div>
                        <span className={`text-xs ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-500'} font-mono`}>
                            {readOnlyOverviewFieldState ? Object.keys(readOnlyOverviewFieldState).length : 0} {lang === 'EN' ? "ACTIVE" : "项激活"}
                        </span>
                        <button
                            type="button"
                            onPointerDown={closeParamsPanelImmediately}
                            onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                            }}
                            className={`mist-engine-params-close-button absolute right-5 top-1/2 -translate-y-1/2 z-[80] p-2 rounded-md transition-colors ${theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-accent)]' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                            aria-label={lang === 'EN' ? 'Close engine parameters' : '关闭引擎参数概览'}
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
                        <EngineParamsOverview
                            fieldState={readOnlyOverviewFieldState}
                            language={lang}
                            theme={theme}
                            accentClass={getThemeColor()}
                            visionInput={visionInput}
                            visionAnalysis={visionAnalysis}
                            worldLawConfig={readOnlyOverviewWorldLaw}
                        />
                    </div>
                </div>

                {/* CARDS CONTAINER */}
                <div className="flex-1 w-full h-full p-4 md:px-8 md:pt-8 md:pb-3 overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col min-h-0">
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
                                        ? "Please go back to the Narrative Engine and click 'Generate Divergences' to generate narrative paths."
                                        : "请返回叙事引擎，配置参数并点击“生成分歧点”来生成三条叙事路径。"}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0 pb-3">
                            {treatments.map((item, index) => {
                                const isSelected = selectedPathId === item.id;
                                const isCached = !!cachedBlueprints[item.id];

                                let accentColor = isCommercialResults ? 'bg-mist-cyan/40' : 'bg-[rgba(var(--mist-active-accent-rgb),0.38)]';
                                let borderColor = isCommercialResults ? 'border-mist-cyan/60' : 'border-[rgba(var(--mist-active-accent-rgb),0.58)]';
                                let textColor = isCommercialResults ? 'text-mist-cyan' : 'text-[var(--mist-archive-red)]';
                                let lightBg = isCommercialResults ? 'bg-mist-cyan/10' : 'bg-[rgba(var(--mist-active-accent-rgb),0.08)]';

                                let rawContent = isAestheticResults
                                    ? (promptLang === 'CN' ? (item.pitchCn || item.pitch) : (promptLang === 'EN' ? (item.pitchEn || item.pitch) : (item.universalPrompt || "")))
                                    : item.pitch;

                                // Remove the specific header if present to clean up copy/paste and display
                                const contentToDisplay = rawContent?.replace(/:: VISIONARY DIRECTIVE ::/g, '').trim() || "";
                                const narrativeUnitCount = countNarrativeUnits(stripNarrativeCountingScaffold(contentToDisplay));

                                return (
                                    <article
                                        key={item.id || index}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => setSelectedPathId(item.id)}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter' || event.key === ' ') {
                                                event.preventDefault();
                                                setSelectedPathId(item.id);
                                            }
                                        }}
                                        className={`
                                            mist-divergence-card mist-archive-panel group relative flex flex-col overflow-hidden text-left transition-all duration-300 border h-[400px] lg:h-full lg:max-h-none min-h-0 cursor-pointer
                                            ${isSelected
                                                ? (theme === 'retro' ? 'is-selected bg-[var(--bg-card)] border-[var(--border-main)] shadow-[0_10px_30px_rgba(92,65,38,0.08)] scale-[1.01] z-10' : `is-selected bg-zinc-900/80 ${borderColor} shadow-[0_0_50px_rgba(0,0,0,0.5)] scale-[1.01] z-10`)
                                                : (theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)] hover:border-[var(--border-strong)] hover:-translate-y-1' : 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-600 hover:-translate-y-1 opacity-90 hover:opacity-100')
                                            }
                                        `}
                                        style={{ ['--divergence-card-index' as any]: `"PATH ${String(index + 1).padStart(2, '0')}"` }}
                                    >
                                        <div className={`mist-divergence-card-accent h-1 w-full ${accentColor} opacity-50 group-hover:opacity-100 transition-opacity shrink-0`}></div>

                                        <div className="p-5 xl:p-6 flex flex-col h-full overflow-hidden w-full relative">
                                            <div className="mist-divergence-card-header flex items-start justify-between gap-4 mb-4 shrink-0 w-full">
                                                <div className="mist-divergence-card-left flex items-center gap-2 min-w-0">
                                                    <div className={`mist-divergence-card-type mist-archive-button flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] py-1.5 px-3 border ${theme === 'retro' ? 'border-[var(--border-main)]' : 'border-white/10'} ${lightBg} ${textColor}`}>
                                                        {getIconForType(item.type)}
                                                        <span className="truncate">{getLabelForType(item.type)}</span>
                                                    </div>
                                                    {isCached && (
                                                        <div className={`mist-divergence-card-generated inline-flex items-center gap-1.5 border ${theme === 'retro' ? 'bg-[var(--bg-card)] border-[var(--border-main)] text-[var(--text-accent)]' : 'bg-black/35'} ${isCommercialResults ? 'border-mist-cyan/35 text-mist-cyan' : 'border-[rgba(var(--mist-active-accent-rgb),0.28)] text-[var(--mist-archive-red)]'} px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em]`}>
                                                            <Check size={10} />
                                                            <span>{lang === 'EN' ? "GENERATED" : "已生成"}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mist-divergence-card-actions flex items-center gap-2 shrink-0">
                                                    <div className={`mist-divergence-card-count shrink-0 border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)] text-[var(--text-muted)]' : 'bg-black/30 text-zinc-400'}`}>
                                                        {lang === 'EN' ? `Body ${narrativeUnitCount}` : `正文 ${narrativeUnitCount} 字`}
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={(e) => handleCopy(e, contentToDisplay, item.id)}
                                                        className={`mist-divergence-card-copy shrink-0 inline-flex items-center justify-center w-7 h-7 border transition-colors ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)] text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-main)]' : 'bg-black/30 border-white/10 text-zinc-500 hover:text-white hover:border-white/20 hover:bg-white/[0.06]'}`}
                                                        title={lang === 'EN' ? 'Copy this path' : '复制这张卡片'}
                                                        aria-label={lang === 'EN' ? 'Copy this path' : '复制这张卡片'}
                                                    >
                                                        {copiedId === item.id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                                    </button>
                                                </div>
                                            </div>

                                            {(item.title) && (
                                                <h3 className={`mist-divergence-card-title ${isAestheticResults ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-serif mb-3 leading-tight transition-colors shrink-0 ${isSelected ? (theme === 'retro' ? 'text-[var(--text-accent)]' : textColor) : (theme === 'retro' ? 'text-[var(--text-main)]' : 'text-white group-hover:text-zinc-200')}`}>
                                                    {item.title}
                                                </h3>
                                            )}

                                            {!isAestheticResults && (
                                                <div className={`mist-divergence-card-logline mb-4 pl-4 border-l-2 ${theme === 'retro' ? 'border-[var(--border-main)]' : 'border-zinc-800'} group-hover:border-white/20 transition-colors shrink-0`}>
                                                    <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{isCommercialResults ? 'SLOGAN' : 'LOGLINE'}</div>
                                                    <p className={`text-sm ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-200'} italic font-serif leading-relaxed`}>
                                                        "{item.tagline}"
                                                    </p>
                                                </div>
                                            )}

                                            {(!isAestheticResults && item.visualKey) && (
                                                <div className={`mb-4 p-3 rounded border shrink-0 ${theme === 'retro' ? 'bg-[var(--bg-card)] border-[var(--border-main)]' : 'bg-black/40 border-zinc-800/50'}`}>
                                                    <div className={`text-[9px] font-bold uppercase tracking-widest mb-1 ${textColor}`}>{lang === 'EN' ? "VISUAL KEY" : "视觉锤"}</div>
                                                    <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                                                        {item.visualKey}
                                                    </p>
                                                </div>
                                            )}

                                            <div className={`mist-divergence-card-body flex-1 overflow-y-auto custom-scrollbar pr-2 pb-5 mb-1 border-t ${theme === 'retro' ? 'border-[var(--border-main)]' : 'border-zinc-900'} pt-4 w-full text-left`}>
                                                {isAestheticResults && promptLang === 'UVD' ? (
                                                    <HighlightedUVD text={contentToDisplay} />
                                                ) : (
                                                    <div className={`leading-loose whitespace-pre-wrap ${isAestheticResults ? 'font-mono text-zinc-600 text-sm md:text-base' : `font-light ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-300'} text-sm`}`}>
                                                        {contentToDisplay}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            <div className={`mist-app-footer fixed bottom-0 left-0 right-0 h-14 bg-[var(--bg-header)] backdrop-blur-md border-t ${theme === 'retro' ? 'border-[var(--border-main)]' : 'border-zinc-800'} flex items-center justify-between px-6 md:px-12 z-40 transition-colors duration-500`}>
                <div className="flex items-center gap-4 shrink-0 w-[180px] md:w-[240px]">
                    <button onClick={onBack} className={`mist-app-archive-button mist-footer-return-button flex items-center gap-3 h-[42px] px-4 rounded-[8px] bg-[var(--bg-panel)]/50 hover:bg-[var(--bg-panel)] border border-[var(--border-main)] text-[12px] font-bold uppercase tracking-[0.12em] transition-all duration-300 group min-w-[140px] hover:scale-105 active:scale-95 ${theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'text-zinc-400 hover:text-white'}`}>
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>{lang === 'CN' ? "返回引擎" : "Home"}</span>
                    </button>
                </div>

                <div className="flex-1 flex justify-center items-center gap-6 mx-4 overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setIsParamsPanelOpen(!isParamsPanelOpen)}
                        className={`mist-app-footer-control ${isParamsPanelOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]`}
                    >
                        <List size={18} className={`transition-colors ${isParamsPanelOpen ? getThemeColor() : (theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white')}`} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isParamsPanelOpen ? getThemeColor() : (theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white')}`}>
                            {lang === 'EN' ? "Params" : "参数"}
                        </span>
                    </button>

                    <div className={`w-px h-8 ${theme === 'retro' ? 'bg-[var(--border-main)]' : 'bg-zinc-800'} shrink-0`}></div>

                    <button
                        onClick={onOpenHistory}
                        className="mist-app-footer-control flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]"
                    >
                        <HistoryIcon size={18} className={`transition-colors ${theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white'}`} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white'}`}>
                            {lang === 'EN' ? "History" : "历史"}
                        </span>
                    </button>

                    <div className={`w-px h-8 ${theme === 'retro' ? 'bg-[var(--border-main)]' : 'bg-zinc-800'} shrink-0`}></div>

                    {treatments.length > 0 && (
                        <>
                            <button onClick={handleCopyAll} className="mist-app-footer-control flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]">
                                {copiedAll ? <Check size={18} className="text-green-500" /> : <Copy size={18} className={`transition-colors ${theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white'}`} />}
                                <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white'}`}>
                                    {copiedAll ? (lang === 'EN' ? "Copied" : "已复制") : (lang === 'EN' ? "Copy" : "复制")}
                                </span>
                            </button>
                            <div className={`w-px h-8 ${theme === 'retro' ? 'bg-[var(--border-main)]' : 'bg-zinc-800'} shrink-0`}></div>
                        </>
                    )}

                    {thinkingXml && (
                        <>
                            <button
                                onClick={() => setIsThinkingPanelOpen(!isThinkingPanelOpen)}
                                className={`mist-app-footer-control ${isThinkingPanelOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]`}
                            >
                                <Brain size={18} className={`transition-colors ${isThinkingPanelOpen ? getThemeColor() : (theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white')}`} />
                                <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${isThinkingPanelOpen ? getThemeColor() : (theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white')}`}>
                                    {isDesignAudit ? (lang === 'EN' ? "Audit" : "结构审查") : (lang === 'EN' ? "Thinking" : "思考过程")}
                                </span>
                            </button>
                            <div className={`w-px h-8 ${theme === 'retro' ? 'bg-[var(--border-main)]' : 'bg-zinc-800'} shrink-0`}></div>
                        </>
                    )}

                    <button
                        className={`mist-app-footer-control ${isTaskManagerOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] relative`}
                        onClick={() => setIsTaskManagerOpen?.(!isTaskManagerOpen)}
                    >
                        <div className="relative">
                            {/* Breathing Light */}
                            {activeTaskCount > 0 && (
                                <div className={`absolute inset-0 flex items-center justify-center`}>
                                    <div className={`w-6 h-6 rounded-full ${getThemeBg()} opacity-30 animate-pulse blur-md`}></div>
                                    <div className={`w-4 h-4 rounded-full ${getThemeBg()} opacity-50 animate-pulse blur-sm`}></div>
                                </div>
                            )}
                            <Activity size={18} className={`relative z-10 transition-colors ${isTaskManagerOpen ? getThemeColor() : (theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white')}`} />
                            {activeTaskCount > 0 && (
                                <span className={`mist-task-count-badge absolute -top-1 -right-1 w-4 h-4 bg-[var(--bg-panel)] border border-[var(--border-main)] ${getThemeColor()} rounded-full text-[9px] flex items-center justify-center font-bold shadow-none z-20 leading-none`}>
                                    {activeTaskCount}
                                </span>
                            )}
                        </div>
                        <span className={`text-[9px] font-bold uppercase tracking-wider relative z-10 transition-colors ${isTaskManagerOpen ? getThemeColor() : (theme === 'retro' ? 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]' : 'text-zinc-400 group-hover:text-white')}`}>
                            {lang === 'EN' ? "Tasks" : "任务中心"}
                        </span>
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    {isAdmin && (
                        <button
                            onClick={() => setIsBibleInspectorOpen(true)}
                            className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all
                            ${theme === 'retro' ? 'border-[var(--border-main)] text-[var(--text-muted)] hover:text-[var(--text-accent)] hover:bg-[var(--surface-hover)]' : 'border-zinc-800 text-zinc-500 hover:text-gold-primary hover:border-zinc-600 hover:bg-zinc-900'}`}
                            title={lang === 'CN' ? 'X-RAY 叙事创作指令透视' : 'Narrative Prompt Inspector'}
                        >
                            <Terminal size={16} />
                        </button>
                    )}
                    <button
                        onClick={handleGenerate}
                        disabled={isProcessing || !selectedPathId || treatments.length === 0}
                        className={`mist-traverse-action mist-app-primary-action ${hasExistingBlueprint && !hasBibleConfigChanged ? 'is-returning-to-narrative' : ''} flex items-center justify-center gap-3 px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group min-w-[220px] border
                ${selectedPathId
                            ? (theme === 'retro' ? 'bg-[var(--mist-active-accent)] hover:bg-[#631B15] border-[var(--mist-active-accent)] text-white shadow-none' : getGenerateButtonClass(hasExistingBlueprint))
                            : (theme === 'retro' ? 'bg-[var(--bg-card)] border-[var(--border-main)] text-[var(--text-muted)]' : 'bg-zinc-900 text-zinc-600 border-zinc-800') + ' cursor-not-allowed'
                        }
              `}
                        style={{ boxShadow: 'none' }}
                    >
                        {isProcessing ? (
                            <>
                                <RotateCw size={16} className="animate-spin" />
                                <span className="tabular-nums w-full text-center">
                                    {lang === 'EN' ? "Building" : "构建中"}
                                    <ProcessingTimer startTime={bibleStartTime} />
                                </span>
                            </>
                        ) : (
                            <>
                                {hasExistingBlueprint ? <BookOpen size={16} className="group-hover:scale-110 transition-transform" /> : <Zap size={16} className="group-hover:scale-110 transition-transform" />}
                                <span className="tabular-nums w-full text-center">{getGenerateButtonLabel()}</span>
                                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
                onSetTags={handleSetStyleTags}
                onClear={() => setStyleConfig(prev => ({ ...prev, styleId: null, customStyleName: null, customStyleDef: null, customStyleCore: null }))}
                customLibraryData={styleLibraryData}
                lang={lang}
                driverType={currentDriverType}
                onAddCustomDef={(name, def, core) => {
                    customStyleDraftsRef.current[name] = { def, core };
                    onAddCustomDef?.(name, def, core);
                    handleAddCustomStyle(name, def, core);
                }}
            />

            <NarrativeLibraryModal
                isOpen={isVolumeModalOpen}
                onClose={() => setIsVolumeModalOpen(false)}
                blockId="skin_volume"
                blockName={lang === 'EN' ? "STORY VOLUME" : "故事体量"}
                selectedTags={currentVolumeName ? [currentVolumeName] : []}
                onToggleTag={handleVolumeToggle}
                onSetTags={(tags) => onSetTags?.('skin_volume', tags)}
                onClear={() => onClearBlock?.('skin_volume')}
                customLibraryData={volumeLibraryData}
                lang={lang}
                driverType={currentDriverType}
                onAddCustomDef={onAddCustomDef}
            />

            <NarrativeLibraryModal
                isOpen={isStructureModalOpen}
                onClose={() => setIsStructureModalOpen(false)}
                blockId="skin_structure"
                blockName={lang === 'EN' ? "NARRATIVE STRUCTURE" : "叙事结构"}
                selectedTags={currentStructureName ? [currentStructureName] : []}
                onToggleTag={handleStructureToggle}
                onSetTags={(tags) => onSetTags?.('skin_structure', tags)}
                onClear={() => onClearBlock?.('skin_structure')}
                customLibraryData={structureLibraryData}
                lang={lang}
                driverType={currentDriverType}
                onAddCustomDef={onAddCustomDef}
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
                visionImage={visionImage}
                worldLawConfig={worldLawConfig}
                driverType={currentDriverType}
                focusState={focusState}
                mAxisMixer={mAxisMixer}
                m7bIntensity={m7bIntensity}
            />

            {isThinkingPanelOpen && thinkingXml && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setIsThinkingPanelOpen(false)}>
                    <div
                        className={`relative w-[90vw] max-w-3xl max-h-[80vh] rounded-xl border overflow-hidden flex flex-col ${theme === 'retro' ? 'bg-[var(--bg-card)] border-[var(--border-main)]' : 'bg-[#0a0a0a] border-zinc-800'}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${theme === 'retro' ? 'border-[var(--border-main)] bg-[var(--bg-header)]' : 'border-zinc-800 bg-zinc-900/50'}`}>
                            <div className="flex items-center gap-3">
                                <Brain size={18} className={theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]'} />
                                <span className={`text-sm font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-zinc-300'}`}>
                                    {isDesignAudit ? (lang === 'EN' ? "AI Structure Audit" : "AI 结构审查") : (lang === 'EN' ? "AI Thinking Process" : "AI 思考过程")}
                                </span>
                            </div>
                            <button onClick={() => setIsThinkingPanelOpen(false)} className={`p-2 rounded-lg transition-colors ${theme === 'retro' ? 'hover:bg-[var(--surface-hover)] text-[var(--text-muted)]' : 'hover:bg-zinc-800 text-zinc-400 hover:text-white'}`}>
                                <X size={18} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6">
                            <pre className={`text-xs leading-relaxed whitespace-pre-wrap font-mono ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-400'}`}>
                                {thinkingXml}
                            </pre>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
