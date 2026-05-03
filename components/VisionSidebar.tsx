
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { X, Sparkles, Image as ImageIcon, Upload, Trash2, Zap, Briefcase, Loader2, ScanEye, BrainCircuit, FileText, Cpu, ScanLine, ArrowDown, Palette, Camera, Sun, Layers, Aperture, Layout } from 'lucide-react';
import { BlueprintLanguage, DriverType, NarrativeBlockDef, NarrativeFieldState } from '../types';
import { supabaseDatabase } from '../services/supabaseDatabase';
import { buildAestheticReversePrompt } from '../services/aestheticReverseService';
import { buildAutoFillPrompt } from '../services/geminiService';
import { buildNarrativeDiagnosisPrompt } from '../services/narrativeDiagnosis';
import { ProcessingTimer } from './SharedBlueprintComponents';
import { useTheme } from '../contexts/ThemeContext';
import { AdminXRayButton } from './XRayInspector';
import {
    AESTHETIC_ENGINE_BLOCKS,
    ALL_SKIN_BLOCKS,
    COMMERCIAL_ENGINE_BLOCKS,
    COMM_SKIN_BLOCKS,
    EXPERIMENTAL_ENGINE_BLOCKS,
    EXPERIMENTAL_SKIN_BLOCKS,
    NARRATIVE_ENGINE_BLOCKS,
    TRAILER_ENGINE_BLOCKS,
    TRAILER_SKIN_BLOCKS
} from '../constants';

interface VisionSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    visionInput: string;
    onVisionInputChange: (val: string) => void;
    analysisTextContext?: string;
    visionImage: string | null;
    onVisionImageChange: (base64: string | null) => void;
    onAutoFill: () => void;
    onGenerateImage?: (prompt: string) => Promise<string | null>;
    isAutoFilling: boolean;
    visionStartTime: number | null;
    lang?: BlueprintLanguage;
    driverType?: DriverType;
    visionAnalysis?: string;
    onVisionAnalysisChange?: (val: string) => void;
    onAnalyzeImage?: () => void;
    isAnalyzingImage?: boolean;
    isAdmin?: boolean;
    zIndex?: number;
    candidateState?: NarrativeFieldState;
    onApplyCandidateState?: (state: NarrativeFieldState) => void;
    onClearCandidateState?: () => void;
}

export const VisionSidebar: React.FC<VisionSidebarProps> = ({
    isOpen,
    onClose,
    visionInput,
    onVisionInputChange,
    analysisTextContext,
    visionImage,
    onVisionImageChange,
    onAutoFill,
    onGenerateImage,
    isAutoFilling,
    visionStartTime,
    lang = 'CN',
    driverType = DriverType.NARRATIVE,
    visionAnalysis,
    onVisionAnalysisChange,
    onAnalyzeImage,
    isAnalyzingImage,
    isAdmin,
    zIndex = 60,
    candidateState = {},
    onApplyCandidateState,
    onClearCandidateState
}) => {
    const { theme: currentTheme } = useTheme();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isCommercial = driverType === DriverType.COMMERCIAL;
    const isAesthetic = driverType === DriverType.AESTHETIC;
    const isExperimental = driverType === DriverType.EXPERIMENTAL;
    const isTrailer = driverType === DriverType.TRAILER;
    const [isGeneratingImg, setIsGeneratingImg] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [selectedCandidateKeys, setSelectedCandidateKeys] = useState<Set<string>>(new Set());
    const [isSeedModeInfoOpen, setIsSeedModeInfoOpen] = useState(false);

    const getSidebarTitle = () => {
        if (isCommercial) return lang === 'EN' ? "DESIRE INPUT" : "欲望输入";
        if (isAesthetic) return lang === 'EN' ? "AESTHETIC REVERSE" : "美学逆向";
        if (isExperimental) return lang === 'EN' ? "THE REAL" : "实在界切片";
        if (isTrailer) return lang === 'EN' ? "HOOK SEED" : "钩子诱饵";
        return lang === 'EN' ? "VISUAL SEED" : "视觉种子";
    }

    const getSidebarSubtitle = () => {
        if (isCommercial) return lang === 'EN' ? "Symptom & Fetish Analysis" : "症候与拜物分析";
        if (isAesthetic) return lang === 'EN' ? "Reverse Engineering" : "美学逆向工程";
        if (isExperimental) return lang === 'EN' ? "Phenomenological Reduction" : "现象学还原";
        if (isTrailer) return lang === 'EN' ? "Hook & Rhythm" : "钩子与节奏";
        return lang === 'EN' ? "Story Completion From Text/Image" : "一句话/一张图补完整故事";
    }

    const getThemeClasses = () => {
        if (currentTheme === 'retro') {
            return {
                text: 'text-[#8B261D]',
                bg: 'bg-[#8B261D]',
                border: 'border-[#8B261D]',
                focusBorder: 'focus:border-[#8B261D]/50',
                shadow: 'shadow-none',
                uploadHover: 'hover:border-[#8B261D]/30 hover:bg-[#8B261D]/5',
                spinner: 'border-zinc-300 border-t-[#8B261D]',
                btn: 'bg-white/50 text-[#8B261D] border-[#8B261D]/30 hover:border-[#8B261D]'
            };
        }
        switch (driverType) {
            case DriverType.COMMERCIAL:
                return {
                    text: 'text-mist-cyan',
                    bg: 'bg-mist-cyan',
                    border: 'border-mist-cyan',
                    focusBorder: 'focus:border-mist-cyan/50',
                    shadow: 'shadow-[0_0_20px_rgba(34,211,238,0.25)]',
                    uploadHover: 'hover:border-mist-cyan/30 hover:bg-mist-cyan/10',
                    spinner: 'border-zinc-800 border-t-mist-cyan',
                    btn: 'bg-mist-cyan/15 text-mist-cyan border-mist-cyan/40 hover:border-mist-cyan'
                };
            case DriverType.EXPERIMENTAL:
                return {
                    text: 'text-purple-400',
                    bg: 'bg-purple-500',
                    border: 'border-purple-500',
                    focusBorder: 'focus:border-purple-500/50',
                    shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]',
                    uploadHover: 'hover:border-purple-500/30 hover:bg-purple-900/10',
                    spinner: 'border-purple-900 border-t-purple-200',
                    btn: 'bg-purple-900/20 text-purple-400 border-purple-800 hover:border-purple-400'
                };
            case DriverType.AESTHETIC:
                return {
                    text: 'text-rose-400',
                    bg: 'bg-rose-500',
                    border: 'border-rose-500',
                    focusBorder: 'focus:border-rose-500/50',
                    shadow: 'shadow-[0_0_20px_rgba(244,63,94,0.3)]',
                    uploadHover: 'hover:border-rose-500/30 hover:bg-rose-900/10',
                    spinner: 'border-rose-900 border-t-rose-200',
                    btn: 'bg-rose-900/20 text-rose-400 border-rose-800 hover:border-rose-400'
                };
            case DriverType.TRAILER:
                return {
                    text: 'text-orange-400',
                    bg: 'bg-orange-500',
                    border: 'border-orange-500',
                    focusBorder: 'focus:border-orange-500/50',
                    shadow: 'shadow-[0_0_20px_rgba(251,146,60,0.3)]',
                    uploadHover: 'hover:border-orange-500/30 hover:bg-orange-900/10',
                    spinner: 'border-orange-900 border-t-orange-200',
                    btn: 'bg-orange-900/20 text-orange-400 border-orange-800 hover:border-orange-400'
                };
            default:
                return {
                    text: 'text-gold-primary',
                    bg: 'bg-gold-primary',
                    border: 'border-gold-primary',
                    focusBorder: 'focus:border-gold-primary/50',
                    shadow: 'shadow-[0_0_20px_rgba(212,175,55,0.3)]',
                    uploadHover: 'hover:border-gold-primary/30 hover:bg-amber-900/10',
                    spinner: 'border-amber-900 border-t-amber-200',
                    btn: 'bg-amber-900/20 text-gold-primary border-amber-800 hover:border-gold-primary'
                };
        }
    };

    const theme = getThemeClasses();
    const effectiveTextContext = analysisTextContext ?? visionInput;
    const hasTextSeed = effectiveTextContext.trim().length > 0;
    const hasImageSeed = Boolean(visionImage);
    const hasDecodedSeed = Boolean(visionAnalysis?.trim());
    const candidateEntries = useMemo(() => Object.entries(candidateState).filter(([, tags]) => tags?.length > 0), [candidateState]);
    const hasCandidates = candidateEntries.length > 0;

    useEffect(() => {
        setSelectedCandidateKeys(new Set());
    }, [candidateState]);

    const seedMode = useMemo(() => {
        if (hasTextSeed && hasImageSeed) {
            return {
                badge: lang === 'EN' ? 'DUAL LOCK' : '图文双锚',
                title: lang === 'EN' ? 'Anchored Completion' : '锚定补完模式',
                desc: lang === 'EN'
                    ? 'Image locks visible physics; text locks meaning, relation, and motivation.'
                    : '图片锁定可见世界的物理事实；文本锁定不可见的意义、关系与动机。'
            };
        }
        if (hasImageSeed) {
            return {
                badge: lang === 'EN' ? 'IMAGE LOCK' : '图像锁定',
                title: lang === 'EN' ? 'Image-Locked Reverse' : '图像锁定反推',
                desc: lang === 'EN'
                    ? 'The uploaded image is the highest visual/physical authority. Surface settings become auxiliary.'
                    : '上传图像拥有最高视觉/物理解释权，表层设定自动降级为辅助预设。'
            };
        }
        if (hasTextSeed) {
            return {
                badge: lang === 'EN' ? 'TEXT LOCK' : '文本锁定',
                title: lang === 'EN' ? 'Text-Locked Completion' : '文本锁定补完',
                desc: lang === 'EN'
                    ? 'Explicit text is preserved as semantic fact and fused with surface settings.'
                    : '你写出的内容会作为最高语义事实保留，并与表层设定融合。'
            };
        }
        return {
            badge: lang === 'EN' ? 'VOID REVERSE' : '空白反推',
            title: lang === 'EN' ? 'Direct Reverse From Blank' : '空白直接反推',
            desc: lang === 'EN'
                ? 'No seed is locked. The engine may infer a complete story from structure and presets.'
                : '未锁定自由种子，引擎将根据 M 层与表层预设直接反推出完整故事。'
        };
    }, [hasTextSeed, hasImageSeed, lang]);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setIsUploading(true);
            try {
                const url = await supabaseDatabase.uploadImage(file);
                if (url) {
                    onVisionImageChange(url);
                }
            } catch (err) {
                console.error("Upload failed:", err);
                const message = err instanceof Error ? err.message : String(err);
                alert(lang === 'EN' ? `Image upload failed: ${message}` : `图片上传失败：${message}`);
            } finally {
                setIsUploading(false);
                if (event.target) event.target.value = "";
            }
        }
    };

    const handleGenerateImageClick = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!visionInput.trim()) {
            alert(lang === 'EN' ? "Please enter an image note first." : "请先输入图片提示。");
            return;
        }
        if (!onGenerateImage) return;

        setIsGeneratingImg(true);
        try {
            const url = await onGenerateImage(visionInput);
            if (url) {
                onVisionImageChange(url);
            } else {
                alert(lang === 'EN' ? "Image generation failed." : "图片生成失败。");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsGeneratingImg(false);
        }
    };

    const getPlaceholder = () => {
        if (isCommercial) return lang === 'EN'
            ? "Only explain how to read this image.\nExample: use this person as the protagonist; ignore the background."
            : "只说明这张图该如何被读取。\n例如：以图中人物作为主角；忽略背景。";

        if (isAesthetic) {
            return lang === 'EN'
                ? "Only explain how to read this image.\nExample: use clothing, weapon, and pose only; do not infer plot."
                : "只说明这张图该如何被读取。\n例如：只参考服装、武器和姿态；不要反推剧情。";
        }
        if (isTrailer) return lang === 'EN' ? "Image reading note: what should the trailer use from this image?" : "图片解析提示：预告片应该从这张图里读取什么？";
        return lang === 'EN'
            ? "Only explain how to read this image:\nUse this person as protagonist; ignore background; keep weapon and costume..."
            : "只说明这张图该如何被读取：\n以图中人物作为主角；忽略背景；保留武器和服装...";
    };

    const isProcessing = isAutoFilling || isAnalyzingImage;

    const getActionLabel = () => {
        if (isCommercial) return lang === 'EN' ? "SUTURE DESIRE" : "解构并缝合欲望";
        if (!hasTextSeed && !hasImageSeed && !hasDecodedSeed) return lang === 'EN' ? "REVERSE FROM BLANK" : "空白反推";
        if (hasTextSeed && hasImageSeed) return lang === 'EN' ? "COMPLETE LOCKED SEED" : "锚定补完";
        if (hasImageSeed) return lang === 'EN' ? "REVERSE IMAGE STORY" : "图像反推";
        if (hasTextSeed) return lang === 'EN' ? "COMPLETE TEXT STORY" : "文本补完";
        return lang === 'EN' ? "MATCH ENGINE" : "匹配引擎";
    };

    const getPipelineHint = () => {
        if (!hasTextSeed && !hasImageSeed && !hasDecodedSeed) {
            return lang === 'EN'
                ? "Blank reverse -> choose structure -> generate coherent seed"
                : "空白反推 -> 选择结构参数 -> 生成自洽故事种子";
        }
        if (hasTextSeed && hasImageSeed) {
            return lang === 'EN'
                ? "Image physics + text meaning -> symptom decoding -> engine mapping"
                : "图像物理事实 + 文本语义事实 -> 症候解码 -> 引擎映射";
        }
        if (hasImageSeed) {
            return lang === 'EN'
                ? "Image facts -> story reverse -> engine mapping"
                : "图像事实锁定 -> 故事反推 -> 引擎映射";
        }
        return lang === 'EN'
            ? "Text facts -> story completion -> engine mapping"
            : "文本事实锁定 -> 故事补完 -> 引擎映射";
    };

    const getImageAnalysisPromptPayload = () => {
        if (isAesthetic) return buildAestheticReversePrompt(effectiveTextContext, visionImage);
        return buildNarrativeDiagnosisPrompt(effectiveTextContext, Boolean(visionImage));
    };

    const getVisionMappingPromptPayload = () => {
        return buildAutoFillPrompt(driverType, effectiveTextContext, Boolean(visionImage), visionAnalysis);
    };

    const isSurfaceBlock = (blockId: string) => {
        return blockId.startsWith('skin_')
            || blockId.startsWith('comm_skin_')
            || blockId.startsWith('exp_skin_')
            || blockId.startsWith('trl_skin_')
            || blockId === 'sur10x'
            || blockId.startsWith('aes_');
    };

    const activeBlocks = useMemo<NarrativeBlockDef[]>(() => {
        switch (driverType) {
            case DriverType.COMMERCIAL:
                return [...COMMERCIAL_ENGINE_BLOCKS, ...COMM_SKIN_BLOCKS];
            case DriverType.AESTHETIC:
                return [...AESTHETIC_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS];
            case DriverType.EXPERIMENTAL:
                return [...EXPERIMENTAL_ENGINE_BLOCKS, ...EXPERIMENTAL_SKIN_BLOCKS];
            case DriverType.TRAILER:
                return [...TRAILER_ENGINE_BLOCKS, ...TRAILER_SKIN_BLOCKS];
            case DriverType.NARRATIVE:
            default:
                return [...NARRATIVE_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS];
        }
    }, [driverType]);

    const blockLabelMap = useMemo(() => {
        const map = new Map<string, string>();
        activeBlocks.forEach(block => {
            map.set(block.id, lang === 'EN' ? (block.enName || block.name) : block.name);
        });
        return map;
    }, [activeBlocks, lang]);

    const makeCandidateKey = (blockId: string, tag: string) => `${blockId}::${tag}`;

    const candidateGroups = useMemo(() => {
        const engine: [string, string[]][] = [];
        const surface: [string, string[]][] = [];
        candidateEntries.forEach(entry => {
            if (isSurfaceBlock(entry[0])) surface.push(entry);
            else engine.push(entry);
        });
        return { engine, surface };
    }, [candidateEntries]);

    const buildCandidateSubset = (scope: 'selected' | 'engine' | 'surface' | 'all'): NarrativeFieldState => {
        const subset: NarrativeFieldState = {};
        candidateEntries.forEach(([blockId, tags]) => {
            const includeBlock = scope === 'all'
                || (scope === 'engine' && !isSurfaceBlock(blockId))
                || (scope === 'surface' && isSurfaceBlock(blockId));

            const selectedTags = tags.filter(tag => {
                if (scope === 'selected') return selectedCandidateKeys.has(makeCandidateKey(blockId, tag));
                return includeBlock;
            });

            if (selectedTags.length > 0) subset[blockId] = selectedTags;
        });
        return subset;
    };

    const applyCandidateScope = (scope: 'selected' | 'engine' | 'surface' | 'all') => {
        const subset = buildCandidateSubset(scope);
        if (Object.keys(subset).length === 0) return;
        onApplyCandidateState?.(subset);
    };

    const toggleCandidate = (blockId: string, tag: string) => {
        const key = makeCandidateKey(blockId, tag);
        setSelectedCandidateKeys(prev => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    };

    const renderCandidateGroup = (title: string, subtitle: string, entries: [string, string[]][], accent: string) => (
        <div className={`rounded-xl border ${currentTheme === 'retro' ? 'bg-[var(--bg-card)] border-[#8B261D]/20' : 'bg-zinc-950/40 border-zinc-800'}`}>
            <div className="flex items-center justify-between p-3 border-b border-zinc-800/70">
                <div>
                    <div className={`text-[11px] font-black tracking-[0.12em] ${accent}`}>{title}</div>
                    <div className="text-[9px] text-zinc-500 mt-1">{subtitle}</div>
                </div>
                <div className={`text-[9px] font-bold px-2 py-1 rounded-full ${currentTheme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-900 text-zinc-400'}`}>
                    {entries.reduce((sum, [, tags]) => sum + tags.length, 0)}
                </div>
            </div>
            <div className="p-3 space-y-3">
                {entries.length === 0 ? (
                    <div className="text-[10px] text-zinc-600 py-2">{lang === 'EN' ? 'No suggestions.' : '暂无候选。'}</div>
                ) : entries.map(([blockId, tags]) => (
                    <div key={blockId} className="space-y-2">
                        <div className="text-[10px] font-bold text-zinc-300">{blockLabelMap.get(blockId) || blockId}</div>
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => {
                                const key = makeCandidateKey(blockId, tag);
                                const checked = selectedCandidateKeys.has(key);
                                return (
                                    <button
                                        type="button"
                                        key={key}
                                        onClick={() => toggleCandidate(blockId, tag)}
                                        className={`px-2.5 py-1.5 rounded-full border text-[10px] font-bold transition-all ${checked
                                            ? `${currentTheme === 'retro' ? 'bg-[#8B261D] border-[#8B261D] text-white' : 'bg-gold-primary border-gold-primary text-black'}`
                                            : `${currentTheme === 'retro' ? 'bg-white/50 border-[#8B261D]/20 text-[#8B261D]' : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500'}`
                                        }`}
                                    >
                                        {checked ? '✓ ' : ''}{tag}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div 
            style={{ zIndex: isOpen ? zIndex : 0 }}
            className={`
                flex flex-col transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
                fixed top-14 right-0 bottom-14 w-[420px] ${currentTheme === 'retro' ? 'bg-[var(--bg-panel)] shadow-none' : `bg-[var(--bg-main)] ${isOpen ? 'shadow-[-20px_0_50px_rgba(0,0,0,0.5)]' : ''}`} ${isOpen ? 'border-l border-[var(--border-main)]' : 'border-none'} overflow-hidden
                ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
            `}
        >
            {/* Header */}
            <div className={`px-6 py-4 flex items-center justify-between relative shrink-0 transition-all duration-300`}>
                <div className="flex items-center gap-3">
                    {currentTheme === 'retro' ? <Sparkles size={20} className={theme.text} /> : (
                        isCommercial ? <ScanEye size={20} className="text-mist-cyan" /> :
                        isExperimental ? <BrainCircuit size={20} className="text-purple-400" /> :
                        <Sparkles size={20} className={theme.text} />
                    )}
                    <span className={`text-sm font-black uppercase tracking-[0.25em] ${theme.text}`}>
                        {getSidebarTitle()}
                    </span>
                </div>
                <button onClick={onClose} className={`p-1.5 transition-colors rounded-full border ${currentTheme === 'retro' ? 'bg-black/5 border-black/10 text-black/40 hover:text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white border-zinc-800 hover:border-zinc-600'}`}>
                    <X size={18} />
                </button>
                
                {/* Short Divider */}
                <div className={`absolute bottom-0 left-6 right-6 h-[1px] ${currentTheme === 'retro' ? 'bg-black/60' : 'bg-zinc-800'}`} />
            </div>

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                <div className="flex flex-col gap-8 pb-10">

                {/* Seed Mode */}
                <button
                    type="button"
                    onClick={() => setIsSeedModeInfoOpen(true)}
                    className={`w-full rounded-xl border px-4 py-3 flex items-center justify-between text-left transition-all ${currentTheme === 'retro' ? 'bg-[var(--bg-card)] border-[#8B261D]/25 hover:bg-[#8B261D]/5' : 'bg-zinc-950/40 border-zinc-800 hover:border-zinc-600'}`}
                >
                    <div className="flex items-center gap-3 min-w-0">
                        <span className={`w-2 h-2 rounded-full ${theme.bg}`} />
                        <span className={`text-sm font-black tracking-[0.12em] ${theme.text}`}>{seedMode.badge}</span>
                    </div>
                    <span className={`text-[10px] font-bold ${currentTheme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'}`}>
                        {lang === 'EN' ? 'View rules' : '查看规则'}
                    </span>
                </button>

                {/* 1. Image Input */}
                <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                        <label className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${theme.text}`}>
                            <ImageIcon size={14} className={theme.text} />
                            {isCommercial
                                ? (lang === 'EN' ? "1. Fetish Image Lock" : "1. 拜物图像锁定")
                                : (lang === 'EN' ? "1. Image Seed / Visual Lock" : "1. 图像种子 / 视觉锁定")}
                            {visionImage && <span className={`w-1.5 h-1.5 rounded-full ${theme.bg} animate-pulse`}></span>}
                        </label>
                    </div>

                    {visionImage ? (
                        <div className={`relative w-full aspect-video rounded-xl overflow-hidden border border-dashed border-zinc-700 group shadow-2xl`}>
                            <img src={visionImage} alt="Reference" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                                {onGenerateImage && (
                                    <>
                                        <button
                                            onClick={handleGenerateImageClick}
                                            className="p-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-all transform hover:scale-110 border border-zinc-600"
                                            title={lang === 'EN' ? "Regenerate" : "重新生成"}
                                        >
                                            {isGeneratingImg ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
                                        </button>
                                        <AdminXRayButton
                                            isAdmin={isAdmin}
                                            lang={lang === 'EN' ? 'EN' : 'CN'}
                                            title={lang === 'EN' ? 'X-Ray Image Generation Prompt' : 'X-Ray 图片生成指令'}
                                            payload={visionInput}
                                            disabled={!visionInput.trim()}
                                            className="p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-600"
                                            iconSize={18}
                                        />
                                    </>
                                )}
                                <button onClick={() => onVisionImageChange(null)} className="p-3 bg-zinc-800 text-white rounded-full hover:bg-red-900/80 hover:text-red-200 hover:border-red-500/50 transition-all transform hover:scale-110 border border-zinc-600"><Trash2 size={18} /></button>
                                {onAnalyzeImage && (
                                    <>
                                        <button
                                            onClick={onAnalyzeImage}
                                            className={`p-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-all transform hover:scale-110 border border-zinc-600 ${isAnalyzingImage ? 'opacity-50 cursor-wait' : ''}`}
                                            title={lang === 'EN' ? "Analyze" : "深度解析"}
                                        >
                                            {isAnalyzingImage ? <Loader2 size={18} className="animate-spin" /> : <ScanEye size={18} />}
                                        </button>
                                        <AdminXRayButton
                                            isAdmin={isAdmin}
                                            lang={lang === 'EN' ? 'EN' : 'CN'}
                                            title={lang === 'EN' ? 'X-Ray Image Analysis Prompt' : 'X-Ray 图像解析指令'}
                                            getPayload={getImageAnalysisPromptPayload}
                                            disabled={!visionImage}
                                            className="p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-600"
                                            iconSize={18}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className={`min-h-[120px] border border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-4 transition-all group relative overflow-hidden ${theme.uploadHover}`}>
                            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />

                            {/* Background grid for aesthetic */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="flex flex-col items-center gap-3 cursor-pointer z-10"
                            >
                                <div className={`p-3 bg-zinc-900 rounded-full text-zinc-400 group-hover:text-white transition-all transform group-hover:scale-110 shadow-lg border border-zinc-800 group-hover:border-zinc-600`}>
                                    <Upload size={20} strokeWidth={1.5} />
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                                    {isUploading ? (lang === 'EN' ? "Uploading..." : "上传中...") : (lang === 'EN' ? "Upload Image" : "上传图片")}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* 2. Image Reading Note */}
                <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                        <label className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${theme.text}`}>
                            <FileText size={14} className={theme.text} />
                            {lang === 'EN' ? "2. Image Reading Note" : "2. 图片解析提示"}
                            {visionInput && <span className={`w-1.5 h-1.5 rounded-full ${theme.bg} animate-pulse`}></span>}
                        </label>
                        {visionInput && <button onClick={() => onVisionInputChange("")} className={`text-[9px] hover:text-red-400 uppercase ${currentTheme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>{lang === 'EN' ? "Clear" : "清空"}</button>}
                    </div>
                    <textarea
                        value={visionInput}
                        onChange={(e) => onVisionInputChange(e.target.value)}
                        placeholder={getPlaceholder()}
                        className={`w-full h-24 ${currentTheme === 'retro' ? `bg-[var(--bg-card)] ${theme.border}/20 text-[var(--text-main)] placeholder-black/30 focus:ring-[var(--text-accent)]/30` : `bg-[var(--bg-panel)] ${isCommercial ? 'border-mist-cyan/30' : isExperimental ? 'border-purple-500/30' : isAesthetic ? 'border-rose-500/30' : isTrailer ? 'border-orange-500/30' : 'border-[#D4AF37]/40'} text-zinc-200 placeholder-zinc-500`} border-dashed border-2 rounded-xl p-4 text-xs focus:outline-none resize-none font-sans leading-relaxed transition-all ${theme.text} ${theme.focusBorder}`}
                    />
                    <div className={`text-[10px] leading-relaxed ${currentTheme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'}`}>
                        {lang === 'EN'
                            ? 'Global text seed lives in the left Surface Settings panel. This note only guides image interpretation.'
                            : '全局文本种子在左侧「表层设定」。这里的文字只用于说明图片该如何被读取。'}
                    </div>
                </div>

                {/* 3. Visual Analysis Result */}
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex justify-between items-baseline">
                        <label className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${theme.text}`}>
                            <ScanLine size={16} className={theme.text} />
                            <span>{lang === 'EN' ? "3. Seed Narrative Decoding" : "3. 种子叙事解码"}</span>
                            {visionAnalysis && <span className={`w-1.5 h-1.5 rounded-full ${theme.bg} animate-pulse`}></span>}
                        </label>
                        <div className="flex gap-2">
                            {visionAnalysis && (
                                <button
                                    onClick={() => onVisionAnalysisChange?.("")}
                                    className="text-[9px] text-zinc-400 hover:text-red-400 uppercase"
                                >
                                    {lang === 'EN' ? "Clear" : "清空"}
                                </button>
                            )}
                        </div>
                    </div>

                    <div className={`relative group`}>
                        <textarea
                            value={visionAnalysis || ""}
                            onChange={(e) => onVisionAnalysisChange?.(e.target.value)}
                            placeholder={lang === 'EN' ? "AI will decode locked facts, style, symptom kernel, story hypothesis, and engine hints..." : "AI 将在此处生成：\n1. 源事实锁定\n2. 画面反推提示词\n3. 风格与影调分析\n4. 症候核\n5. 潜在故事梗概\n6. 人物与事件推演..."}
                            className={`w-full h-40 ${currentTheme === 'retro' ? `bg-[var(--bg-card)] ${theme.border}/20 text-[var(--text-main)] placeholder-black/30 focus:ring-[var(--text-accent)]/30` : `bg-[var(--bg-panel)] ${isCommercial ? 'border-mist-cyan/30' : isExperimental ? 'border-purple-500/30' : isAesthetic ? 'border-rose-500/30' : isTrailer ? 'border-orange-500/30' : 'border-[#D4AF37]/40'} text-zinc-300 placeholder-zinc-500 focus:ring-zinc-700/50`} border-dashed border-2 rounded-xl p-5 text-xs focus:outline-none resize-none font-mono leading-relaxed transition-all ${theme.text} ${theme.focusBorder} focus:shadow-[0_0_15px_rgba(255,255,255,0.02)] custom-scrollbar`}
                        />
                        <div className={`absolute bottom-3 right-3 text-[8px] ${currentTheme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600'} font-mono pointer-events-none select-none uppercase tracking-widest`}>
                            {isProcessing ? (lang === 'EN' ? "DECODING..." : "正在解构...") : (lang === 'EN' ? "DECODER_READY" : "解码器就绪")}
                        </div>
                    </div>
                </div>

                {/* 4. Candidate Parameters */}
                {hasCandidates && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex justify-between items-baseline">
                            <label className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${theme.text}`}>
                                <Layers size={15} className={theme.text} />
                                <span>{lang === 'EN' ? "4. Candidate Parameters" : "4. 可选参数"}</span>
                                <span className={`w-1.5 h-1.5 rounded-full ${theme.bg} animate-pulse`}></span>
                            </label>
                            <button
                                onClick={onClearCandidateState}
                                className="text-[9px] text-zinc-400 hover:text-red-400 uppercase"
                            >
                                {lang === 'EN' ? "Clear" : "清空"}
                            </button>
                        </div>

                        <div className={`rounded-xl border p-3 space-y-2 ${currentTheme === 'retro' ? 'bg-[var(--bg-card)] border-[#8B261D]/20' : 'bg-zinc-950/30 border-zinc-800'}`}>
                            <div className="text-[10px] text-zinc-400 leading-relaxed">
                                {lang === 'EN'
                                    ? 'AI only proposes these parameters. They enter the engine after you apply them.'
                                    : 'AI 只提出候选参数；只有你点击应用后，它们才会进入左侧 M 层 / SUR 层。'}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    type="button"
                                    onClick={() => applyCandidateScope('engine')}
                                    disabled={candidateGroups.engine.length === 0}
                                    className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-[10px] font-bold text-zinc-200 hover:border-gold-primary disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    {lang === 'EN' ? "Apply M Layer" : "应用 M 层参数"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => applyCandidateScope('surface')}
                                    disabled={candidateGroups.surface.length === 0}
                                    className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-[10px] font-bold text-zinc-200 hover:border-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    {lang === 'EN' ? "Apply SUR Layer" : "应用 SUR 层参数"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => applyCandidateScope('selected')}
                                    disabled={selectedCandidateKeys.size === 0}
                                    className="px-3 py-2 rounded-lg bg-gold-primary text-black border border-gold-primary text-[10px] font-black hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    {lang === 'EN' ? `Apply Selected (${selectedCandidateKeys.size})` : `应用已勾选 (${selectedCandidateKeys.size})`}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => applyCandidateScope('all')}
                                    className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-[10px] font-bold text-zinc-200 hover:border-zinc-400"
                                >
                                    {lang === 'EN' ? "Apply All" : "应用全部"}
                                </button>
                            </div>
                        </div>

                        {renderCandidateGroup(
                            lang === 'EN' ? 'M Layer / Engine Candidates' : 'M 层 / 引擎候选',
                            lang === 'EN' ? 'Deep structure, desire, conflict and engine blocks.' : '深层结构、欲望、冲突与引擎参数。',
                            candidateGroups.engine,
                            currentTheme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'
                        )}
                        {renderCandidateGroup(
                            lang === 'EN' ? 'SUR / Surface Candidates' : 'SUR / 表层候选',
                            lang === 'EN' ? 'Skin, world, era, role, visual and style presets.' : '皮肤、世界、年代、身份、视觉与风格预设。',
                            candidateGroups.surface,
                            currentTheme === 'retro' ? 'text-[#8B261D]' : 'text-emerald-400'
                        )}
                    </div>
                )}

                {/* 5. Action Button (Engine Mapping) */}
                <div className="mt-8">
                    <div className="flex items-center gap-2">
                    <button
                        onClick={onAutoFill}
                        disabled={isProcessing}
                        className={`flex-1 py-4 border rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden ${currentTheme === 'retro' ? 'bg-[#8B261D] hover:bg-[#631B15] border-[#8B261D] text-white shadow-none' : (isCommercial ? 'bg-mist-cyan hover:brightness-110 border-mist-cyan text-black shadow-[0_0_20px_rgba(34,211,238,0.25)]' : isExperimental ? 'bg-purple-500 hover:bg-purple-400 border-purple-500 text-black shadow-[0_0_20px_rgba(168,85,247,0.3)]' : isAesthetic ? 'bg-rose-500 hover:bg-rose-400 border-rose-500 text-black shadow-[0_0_20px_rgba(244,63,94,0.3)]' : isTrailer ? 'bg-orange-500 hover:bg-orange-400 border-orange-500 text-black shadow-[0_0_20px_rgba(251,146,60,0.3)]' : 'bg-gold-primary hover:bg-amber-400 border-gold-primary text-black shadow-[0_0_20px_rgba(212,175,55,0.2)]')}`}
                    >
                        {isAutoFilling ? (
                            <>
                                <div className={`w-4 h-4 border-2 border-t-transparent rounded-full animate-spin ${theme.spinner}`}></div>
                                <span className="text-xs font-black uppercase tracking-[0.15em]">
                                    {lang === 'EN' ? "MAPPING ENGINE..." : "正在映射参数..."}
                                    <ProcessingTimer startTime={visionStartTime} />
                                </span>
                            </>
                        ) : (
                            <>
                                {isCommercial ? <ScanEye size={18} /> : <Cpu size={18} />}
                                <span className="text-xs font-black uppercase tracking-[0.15em]">
                                    {getActionLabel()}
                                </span>
                            </>
                        )}
                    </button>
                    <AdminXRayButton
                        isAdmin={isAdmin}
                        lang={lang === 'EN' ? 'EN' : 'CN'}
                        title={lang === 'EN' ? 'X-Ray Vision Mapping Prompt' : 'X-Ray 视觉映射指令'}
                        getPayload={getVisionMappingPromptPayload}
                        disabled={isProcessing}
                        className={`h-14 w-14 shrink-0 ${currentTheme === 'retro' ? 'bg-white border-[#8B261D]/25 text-[#8B261D] hover:bg-[#8B261D]/10' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500'}`}
                        iconSize={18}
                    />
                    </div>
                    <div className="text-[9px] text-zinc-400 text-center mt-3 leading-relaxed font-mono flex items-center justify-center gap-2">
                        {isCommercial && <span className={`w-1.5 h-1.5 rounded-full bg-mist-cyan animate-pulse`}></span>}
                        {getPipelineHint()}
                    </div>
                </div>
            </div>
        </div>

        {isSeedModeInfoOpen && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4" onClick={() => setIsSeedModeInfoOpen(false)}>
                <div
                    className={`w-full max-w-md rounded-xl border p-6 shadow-2xl ${currentTheme === 'retro' ? 'bg-[var(--bg-card)] border-[#8B261D]/30 text-[var(--text-main)]' : 'bg-zinc-950 border-zinc-800 text-zinc-200'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                            <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${theme.text}`}>{seedMode.badge}</div>
                            <h3 className="text-xl font-black tracking-wide">{seedMode.title}</h3>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsSeedModeInfoOpen(false)}
                            className={`p-2 rounded-full border ${currentTheme === 'retro' ? 'border-[#8B261D]/20 text-[#8B261D] hover:bg-[#8B261D]/10' : 'border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500'}`}
                        >
                            <X size={16} />
                        </button>
                    </div>

                    <p className={`text-sm leading-relaxed mb-5 ${currentTheme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-400'}`}>{seedMode.desc}</p>

                    <div className="space-y-3">
                        {[
                            lang === 'EN' ? 'Text > surface presets' : '文本 > 表层预设',
                            lang === 'EN' ? 'Image > visual physics' : '图像 > 视觉物理',
                            lang === 'EN' ? 'SUR = helper presets' : 'SUR = 辅助预设',
                            lang === 'EN' ? 'M = desire structure' : 'M层 = 爱欲结构'
                        ].map(rule => (
                            <div
                                key={rule}
                                className={`rounded-lg border px-4 py-3 text-sm font-bold ${currentTheme === 'retro' ? 'border-[#8B261D]/15 bg-[#8B261D]/5' : 'border-zinc-800 bg-zinc-900/70'}`}
                            >
                                {rule}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </div>
);
};
