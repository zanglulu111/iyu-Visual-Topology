import React, { useState, useMemo, useEffect } from 'react';
import { X, Wand2, Play, Eraser, Volume2, Video, Sliders, FileText, Check, Copy, Monitor, Film, Zap, ChevronRight, ChevronDown, BookOpen, Save, FilePlus, Aperture, Clapperboard, LayoutGrid, Mic2, Crosshair } from 'lucide-react';
import { SutureConfig, SutureControlVersion, DensityLevel, BlueprintLanguage, DriverType, LibraryCategoryDef, MetonymyStylePreset } from '../types';
import { DIALOGUE_STYLES, VOICEOVER_STYLES, MONOLOGUE_STYLES, VISUAL_STYLES, FILM_CASES, SCENE_MODES, SCENE_FUNCTIONS, SHOT_BUDGETS, SOUND_ARCHITECTURES } from '../data/suture/styles';
import { MONTAGE_STYLES } from '../data/suture/montage';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { ProcessingTimer } from './SharedBlueprintComponents';
import { useTheme } from '../contexts/ThemeContext';
import { AdminXRayButton, type XRaySourceGroup } from './XRayInspector';
import { buildSutureStep1Prompt } from '../services/suture_script_prompt';

interface SutureModalProps {
    isOpen: boolean;
    onClose: () => void;
    onGenerate: (text: string, config: SutureConfig) => Promise<string | null>;
    isGenerating: boolean;
    lang?: BlueprintLanguage;
    driverType?: DriverType;
    contextTitle?: string;
    projectName?: string;
    onProjectNameChange?: (name: string) => void;
    onSave?: () => void;
    initialContent?: string;
    onSourceChange?: (text: string) => void;
    totalSourceText?: string; // 全局完整故事文本
    generationStartTime?: number | null;
    presets?: MetonymyStylePreset[];
    activePresetId?: string;
    isAdmin?: boolean;
}

const DENSITY_OPTS = [
    { val: 'AUTO', labelCN: '自', labelEN: 'AI' },
    { val: 'NONE', labelCN: '无', labelEN: 'OFF' },
    { val: 'LOW', labelCN: '疏', labelEN: 'L' },
    { val: 'MID', labelCN: '中', labelEN: 'M' },
    { val: 'HIGH', labelCN: '密', labelEN: 'H' },
];

interface DensitySwitchProps {
    value: DensityLevel;
    onChange: (v: DensityLevel) => void;
    theme: any;
    lang: string;
    variant?: 'dropdown' | 'expanded';
}

const DensitySwitch: React.FC<DensitySwitchProps> = ({ value, onChange, theme, lang, variant = 'dropdown' }) => {
    const currentOpt = DENSITY_OPTS.find(o => o.val === value);

    if (variant === 'expanded') {
        return (
            <div className={`flex ${theme.bgSoft || 'bg-[#111]'} border ${theme.borderSoft || 'border-zinc-700'} rounded p-[2px] gap-[2px] h-7 items-center flex-1 w-full`}>
                {DENSITY_OPTS.map((opt) => {
                    const isActive = value === opt.val;
                    return (
                        <button
                            key={opt.val}
                            type="button"
                            onClick={() => onChange(opt.val as DensityLevel)}
                            className={`
                            h-full px-1 text-xs md:text-sm font-bold rounded-[2px] transition-all flex-1 flex items-center justify-center
                            ${isActive
                                    ? `${theme.bg} text-white shadow-sm`
                                    : `${theme.textSoft || 'text-zinc-300'} hover:text-white hover:bg-black/5`
                                }
                        `}
                        >
                            {lang === 'EN' ? opt.labelEN : opt.labelCN}
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={`relative h-7 w-14 shrink-0 ${theme.bgSoft || 'bg-zinc-900'} border ${theme.borderSoft || 'border-zinc-700'} rounded hover:${theme.border} transition-colors group`}>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as DensityLevel)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            >
                {DENSITY_OPTS.map(opt => (
                    <option key={opt.val} value={opt.val}>
                        {lang === 'EN' ? opt.labelEN : opt.labelCN}
                    </option>
                ))}
            </select>
            <div className="absolute inset-0 flex items-center justify-center gap-1 pointer-events-none">
                <span className={`text-xs font-bold ${theme.text}`}>
                    {currentOpt ? (lang === 'EN' ? currentOpt.labelEN : currentOpt.labelCN) : value}
                </span>
                <ChevronDown size={12} className={`${theme.textSoft || 'text-zinc-300'} group-hover:${theme.text}`} />
            </div>
        </div>
    );
};

interface StyleButtonProps {
    value: string;
    options: any[];
    onClick: () => void;
    theme: any;
    getOptionName: (options: any[], id: string) => string;
}

const StyleButton: React.FC<StyleButtonProps> = ({ value, options, onClick, theme, getOptionName }) => (
    <button
        type="button"
        onClick={onClick}
        className={`flex-1 min-w-0 ${theme.bgSoft || 'bg-zinc-800/50'} hover:${theme.bgSoft} border ${theme.borderSoft || 'border-zinc-700'} hover:border-zinc-500 rounded h-8 px-4 flex items-center justify-between group transition-all`}
    >
        <span className={`text-xs ${theme.textContrast || 'text-zinc-100'} font-bold truncate mr-2 group-hover:${theme.text} transition-colors`}>
            {getOptionName(options, value)}
        </span>
        <ChevronRight size={16} className={`${theme.textSoft || 'text-zinc-300'} group-hover:${theme.text}`} />
    </button>
);

const ControlRow = ({ label, children, theme }: { label: string, children?: React.ReactNode, theme: any }) => (
    <div className="flex items-center justify-between gap-4 h-10">
        <div className={`w-24 shrink-0 text-xs font-bold ${theme.textSecondary || 'text-zinc-200'} uppercase tracking-widest text-right truncate`} title={label}>
            {label}
        </div>
        <div className="flex-1 flex items-center gap-4 justify-end min-w-0">
            {children}
        </div>
    </div>
);

export const SutureModal: React.FC<SutureModalProps> = ({
    isOpen,
    onClose,
    onGenerate,
    isGenerating,
    lang = 'CN',
    driverType = DriverType.NARRATIVE,
    contextTitle,
    projectName,
    onProjectNameChange,
    onSave,
    initialContent,
    onSourceChange,
    totalSourceText = "",
    generationStartTime,
    presets,
    activePresetId,
    isAdmin
}) => {
    const { theme: globalTheme } = useTheme();
    const [sourceText, setSourceText] = useState("");
    const [resultText, setResultText] = useState("");
    const [config, setConfig] = useState<SutureConfig>({
        controlVersion: 'v2',
        sceneMode: 'AUTO',
        sceneFunction: 'AUTO',
        shotBudget: 'AUTO',
        soundArchitecture: 'AUTO',
        dialogueDensity: 'AUTO',
        dialogueStyle: 'dial_default',
        voiceoverDensity: 'AUTO',
        voiceoverStyle: 'vo_default',
        monologueDensity: 'AUTO',
        monologueStyle: 'mono_default',
        visualStyle: 'vis_wkw',
        filmCaseId: 'filmcase_none',
        shotDensity: 'SHOTS_12',
        subjectFocus: 'AUTO',
        emptyShot: 'AUTO',
        montageId: 'montage_none',
        targetPresetId: activePresetId || 'original',
    });

    const [copied, setCopied] = useState(false);
    const [saved, setSaved] = useState(false);

    const [activeSelector, setActiveSelector] = useState<{
        key: keyof SutureConfig;
        title: string;
        options: any[];
    } | null>(null);

    useEffect(() => {
        if (isOpen) {
            setSourceText(initialContent || "");
        }
    }, [isOpen, initialContent]);

    const getTheme = () => {
        if (globalTheme === 'retro') {
            return {
                text: 'text-[#8B261D]',
                textSoft: 'text-[#8B261D]',
                textContrast: 'text-black',
                textSecondary: 'text-[#3D1A16]',
                bg: 'bg-[#8B261D]',
                hoverBg: 'hover:bg-[#6D1E16]',
                border: 'border-[#8B261D]/50',
                borderSoft: 'border-[#8B261D]/20',
                bgSoft: 'bg-[var(--bg-header)]',
                shadow: 'shadow-none',
                hoverShadow: 'hover:shadow-md',
                spinnerBorder: 'border-t-[#8B261D]',
                accent: 'bg-[#8B261D]'
            };
        }

        // Dynamic theme based on --mist-active-accent
        return {
            text: 'text-[var(--mist-active-accent)]',
            bg: 'bg-[var(--mist-active-accent)]',
            hoverBg: 'hover:brightness-110',
            border: 'border-[var(--mist-active-accent)]/50',
            borderSoft: 'border-[var(--mist-active-accent)]/30',
            bgSoft: 'bg-[var(--mist-active-accent)]/10',
            shadow: 'shadow-[0_0_20px_rgba(212,175,55,0.15)]', // Generic soft shadow
            hoverShadow: 'hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]',
            spinnerBorder: 'border-t-[var(--mist-active-accent)]',
            accent: 'bg-zinc-900'
        };
    };

    const theme = getTheme();

    const t = {
        TITLE: lang === 'EN' ? "METONYMY TRANSLATOR" : "换喻转译器",
        SOURCE_PH: lang === 'EN' ? "Paste literary text here..." : "在此粘贴文学文本/小说片段...",
        BTN_GENERATE: lang === 'EN' ? "EXECUTE" : "执行换喻",
        BTN_PROCESSING: lang === 'EN' ? "PROCESSING..." : "转译中...",
        H_AUDIO: lang === 'EN' ? "AUDIO LAYER" : "声音层",
        H_VISUAL: lang === 'EN' ? "VISUAL LAYER" : "画面层",
        H_DIRECTOR_DESK: lang === 'EN' ? "DIRECTOR DESK" : "导演台",
        H_ADVANCED_AUDIO: lang === 'EN' ? "ADVANCED SOUND" : "声音微调",
        L_SCENE_MODE: lang === 'EN' ? "SCENE MODE" : "场景类型",
        L_SCENE_FUNCTION: lang === 'EN' ? "SCENE FUNCTION" : "戏剧功能",
        L_SHOT_BUDGET: lang === 'EN' ? "SHOT BUDGET" : "镜头预算",
        L_SOUND_ARCH: lang === 'EN' ? "SOUND DESIGN" : "声音架构",
        L_DIALOGUE: lang === 'EN' ? "DIALOGUE" : "对白",
        L_VO: lang === 'EN' ? "VOICEOVER" : "旁白",
        L_MONOLOGUE: lang === 'EN' ? "MONOLOGUE" : "独白",
        L_AESTHETIC: lang === 'EN' ? "DIRECTOR GRAMMAR" : "导演语法",
        L_FILM_CASE: lang === 'EN' ? "FILM CASE" : "影片案例",
        L_SUBJECT: lang === 'EN' ? "SUBJECT FOCUS" : "主体密度",
        L_B_ROLL: lang === 'EN' ? "EMPTY SHOT" : "空镜留白",
        L_MONTAGE: lang === 'EN' ? "EDITING STRUCTURE" : "剪辑结构",
        OUT_TITLE: lang === 'EN' ? "SCRIPT OUTPUT" : "转译脚本",
        OUT_WAITING: lang === 'EN' ? "Waiting for source text..." : "等待输入源文本...",
        CONSOLE: lang === 'EN' ? "CONSOLE" : "控制台",
        SOURCE: lang === 'EN' ? "SOURCE" : "源文本",
        SELECT: lang === 'EN' ? "Select" : "选择",
        PROJECT_NAME: lang === 'EN' ? "PROJECT NAME" : "项目名称",
        SAVE: "保存脚本",
        SAVED: "已保存",
        CLOSE: "关闭控制台",
        COPY: "复制文本",
        COPIED: "已复制",
    };

    if (!isOpen) return null;

    const handleGenerateClick = async () => {
        if (!sourceText.trim()) return;
        const result = await onGenerate(sourceText, config);
        if (result) setResultText(result);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(resultText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSave = () => {
        if (onSave) {
            onSave();
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        }
    };

    const handleOpenSelector = (key: keyof SutureConfig, title: string, options: any[]) => {
        setActiveSelector({ key, title, options });
    };

    const handleSelectOptionFromLibrary = (tagName: string) => {
        if (activeSelector) {
            const option = activeSelector.options.find(opt => opt.name === tagName);
            if (option) {
                setConfig({ ...config, [activeSelector.key]: option.id });
            }
            setActiveSelector(null);
        }
    };

    const getOptionName = (options: any[], id: string) => {
        const opt = options.find(o => o.id === id);
        if (!opt) return id;
        if (lang === 'EN') {
            return opt.nameEn || opt.name.match(/\((.*?)\)/)?.[1] || opt.name;
        }
        return opt.name.split('(')[0].trim();
    };

    const getCustomLibraryData = (): LibraryCategoryDef[] | undefined => {
        if (!activeSelector) return undefined;

        if (activeSelector.key === 'targetPresetId') {
            const items = activeSelector.options.map(opt => ({
                id: opt.id,
                name: lang === 'EN' ? (opt.nameEn || opt.name) : opt.name,
                def: opt.toneAnalysis?.style || "No style description",
                core: opt.toneAnalysis?.lighting || "No lighting info",
                group: activeSelector.title
            }));
            return [{
                id: `lib_${activeSelector.key}`,
                name: activeSelector.title,
                desc: lang === 'EN' ? "Select a visual style preset." : "选择一个视觉风格预设。",
                items: items
            }];
        }

        const items = activeSelector.options.map(opt => ({
            id: opt.id,
            name: opt.name,
            def: opt.instruction,
            core: opt.core || "风格核心指令",
            group: opt.group || activeSelector.title
        }));
        return [{
            id: `lib_${activeSelector.key}`,
            name: activeSelector.title,
            desc: activeSelector.key === 'filmCaseId'
                ? (lang === 'EN' ? "Select a film-case mechanism. It will not override director grammar or visual skin." : "选择一个影片案例机制；它不覆盖导演语法，也不进入视觉皮肤。")
                : (lang === 'EN' ? "Select a style parameter for the AI engine." : "为AI引擎选择一个风格参数。"),
            items: items
        }];
    };

    const getCurrentSelectedTags = (): string[] => {
        if (!activeSelector) return [];
        const currentId = config[activeSelector.key] as string;
        const option = activeSelector.options.find(o => o.id === currentId);
        return option ? [option.name] : [];
    };

    // 文字统计逻辑优化
    const currentChunkCount = sourceText.replace(/\s/g, '').length;
    const totalCount = (totalSourceText || "").replace(/\s/g, '').length;
    const currentMontageId = MONTAGE_STYLES.some(opt => opt.id === (config.montageId || 'montage_none'))
        ? (config.montageId || 'montage_none')
        : 'montage_none';

    const toStyleOptions = (options: any[]) => options.map(opt => ({
        value: opt.id,
        label: getOptionName(options, opt.id),
        description: opt.core || opt.instruction || opt.def
    }));

    const densityOptions = DENSITY_OPTS.map(opt => ({
        value: opt.val,
        label: lang === 'EN' ? opt.labelEN : opt.labelCN
    }));

    const sceneModeOptions = SCENE_MODES.map(opt => ({
        value: opt.id,
        label: getOptionName(SCENE_MODES, opt.id),
        description: (opt as any).core || (opt as any).instruction
    }));

    const sceneFunctionOptions = SCENE_FUNCTIONS.map(opt => ({
        value: opt.id,
        label: getOptionName(SCENE_FUNCTIONS, opt.id),
        description: (opt as any).core || (opt as any).instruction
    }));

    const shotBudgetOptions = SHOT_BUDGETS.map(opt => ({
        value: opt.id,
        label: getOptionName(SHOT_BUDGETS, opt.id),
        description: (opt as any).core || (opt as any).instruction
    }));

    const soundArchitectureOptions = SOUND_ARCHITECTURES.map(opt => ({
        value: opt.id,
        label: getOptionName(SOUND_ARCHITECTURES, opt.id),
        description: (opt as any).core || (opt as any).instruction
    }));

    const buildSandboxConfig = (values: Record<string, unknown>): SutureConfig => ({
        ...config,
        controlVersion: (values.controlVersion || config.controlVersion || 'v2') as SutureControlVersion,
        sceneMode: String(values.sceneMode || config.sceneMode || 'AUTO'),
        sceneFunction: String(values.sceneFunction || config.sceneFunction || 'AUTO'),
        shotBudget: String(values.shotBudget || config.shotBudget || 'AUTO'),
        soundArchitecture: String(values.soundArchitecture || config.soundArchitecture || 'AUTO'),
        dialogueDensity: (values.dialogueDensity || config.dialogueDensity) as DensityLevel,
        dialogueStyle: String(values.dialogueStyle || config.dialogueStyle),
        voiceoverDensity: (values.voiceoverDensity || config.voiceoverDensity) as DensityLevel,
        voiceoverStyle: String(values.voiceoverStyle || config.voiceoverStyle),
        monologueDensity: (values.monologueDensity || config.monologueDensity) as DensityLevel,
        monologueStyle: String(values.monologueStyle || config.monologueStyle),
        visualStyle: String(values.visualStyle || config.visualStyle),
        filmCaseId: String(values.filmCaseId || config.filmCaseId || 'filmcase_none'),
        montageId: String(values.montageId || currentMontageId),
        shotDensity: String(values.shotDensity || config.shotDensity),
        subjectFocus: (values.subjectFocus || config.subjectFocus) as DensityLevel,
        emptyShot: (values.emptyShot || config.emptyShot) as DensityLevel,
        directorNote: String(values.directorNote ?? config.directorNote ?? '')
    });

    const getSutureXRaySources = (): XRaySourceGroup[] => [
        {
            id: 'text',
            title: lang === 'EN' ? 'Text Sources' : '文本源',
            tone: 'text',
            items: [
                {
                    id: 'sourceText',
                    label: lang === 'EN' ? 'Current Fragment' : '当前片段',
                    kind: 'textarea',
                    value: sourceText,
                    editable: true,
                    description: `${currentChunkCount} / ${totalCount}`
                },
                {
                    id: 'totalSourceText',
                    label: lang === 'EN' ? 'Full Source Text' : '完整源文本',
                    kind: 'textarea',
                    value: totalSourceText || '',
                    editable: true
                },
                {
                    id: 'directorNote',
                    label: lang === 'EN' ? "Director's Note" : '导演手记',
                    kind: 'textarea',
                    value: config.directorNote || '',
                    editable: true
                }
            ]
        },
        {
            id: 'directorDesk',
            title: lang === 'EN' ? 'Director Desk V2' : '导演台 V2',
            tone: 'director',
            items: [
                { id: 'sceneMode', label: t.L_SCENE_MODE, kind: 'select', value: config.sceneMode || 'AUTO', options: sceneModeOptions, editable: true },
                { id: 'sceneFunction', label: t.L_SCENE_FUNCTION, kind: 'select', value: config.sceneFunction || 'AUTO', options: sceneFunctionOptions, editable: true },
                { id: 'shotBudget', label: t.L_SHOT_BUDGET, kind: 'select', value: config.shotBudget || 'AUTO', options: shotBudgetOptions, editable: true },
                { id: 'soundArchitecture', label: t.L_SOUND_ARCH, kind: 'select', value: config.soundArchitecture || 'AUTO', options: soundArchitectureOptions, editable: true },
                { id: 'visualStyle', label: t.L_AESTHETIC, kind: 'select', value: config.visualStyle, options: toStyleOptions(VISUAL_STYLES), editable: true },
                { id: 'filmCaseId', label: t.L_FILM_CASE, kind: 'select', value: config.filmCaseId || 'filmcase_none', options: toStyleOptions(FILM_CASES), editable: true },
                { id: 'montageId', label: t.L_MONTAGE, kind: 'select', value: currentMontageId, options: toStyleOptions(MONTAGE_STYLES), editable: true }
            ]
        },
        {
            id: 'audio',
            title: lang === 'EN' ? 'Advanced Sound Tuning' : '声音高级微调',
            tone: 'audio',
            items: [
                { id: 'dialogueDensity', label: t.L_DIALOGUE, kind: 'select', value: config.dialogueDensity, options: densityOptions, editable: true },
                { id: 'dialogueStyle', label: `${t.L_DIALOGUE} Style`, kind: 'select', value: config.dialogueStyle, options: toStyleOptions(DIALOGUE_STYLES), editable: true },
                { id: 'voiceoverDensity', label: t.L_VO, kind: 'select', value: config.voiceoverDensity, options: densityOptions, editable: true },
                { id: 'voiceoverStyle', label: `${t.L_VO} Style`, kind: 'select', value: config.voiceoverStyle, options: toStyleOptions(VOICEOVER_STYLES), editable: true },
                { id: 'monologueDensity', label: t.L_MONOLOGUE, kind: 'select', value: config.monologueDensity, options: densityOptions, editable: true },
                { id: 'monologueStyle', label: `${t.L_MONOLOGUE} Style`, kind: 'select', value: config.monologueStyle, options: toStyleOptions(MONOLOGUE_STYLES), editable: true }
            ]
        },
        {
            id: 'visual',
            title: lang === 'EN' ? 'Frame Tuning' : '画格微调',
            tone: 'frame',
            items: [
                { id: 'subjectFocus', label: t.L_SUBJECT, kind: 'select', value: config.subjectFocus, options: densityOptions, editable: true },
                { id: 'emptyShot', label: t.L_B_ROLL, kind: 'select', value: config.emptyShot, options: densityOptions, editable: true }
            ]
        }
    ];

    return (
        <div className="fixed inset-0 z-[200] flex flex-col overflow-hidden animate-page-dissolve">
            <div className={`flex-1 w-full ${globalTheme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-[#050505]'} flex flex-col overflow-hidden relative`}>
                <div className="flex-1 flex overflow-hidden">
                        {/* Left Pane: Sources */}
                        <div className={`w-[35%] min-w-[380px] border-r ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} flex flex-col ${globalTheme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-[#0a0a0a]'}`}>
                            <div className="flex-1 flex flex-col min-h-0 relative">
                                <div className={`absolute top-0 left-0 right-0 h-12 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30 bg-[var(--bg-header)]' : 'border-zinc-700 bg-[#111]'} flex items-center px-6 gap-3 z-10`}>
                                    <FileText size={16} className={theme.text} />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${globalTheme === 'retro' ? 'text-black' : 'text-zinc-100'}`}>{t.SOURCE}</span>
                                    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded border ${globalTheme === 'retro' ? 'border-[#8B261D]/40 text-[#8B261D]' : 'border-zinc-500 text-zinc-300'}`}>
                                        <span className="text-xs font-mono">{currentChunkCount}</span>
                                        <span className="text-[10px] opacity-50">/</span>
                                        <span className="text-xs font-mono">{totalCount}</span>
                                    </div>
                                </div>
                                <textarea
                                    value={sourceText}
                                    onChange={(e) => {
                                        setSourceText(e.target.value);
                                        onSourceChange?.(e.target.value);
                                    }}
                                    placeholder={t.SOURCE_PH}
                                    className={`flex-1 bg-transparent p-10 pt-16 text-base ${globalTheme === 'retro' ? 'text-black' : 'text-zinc-100'} resize-none focus:outline-none leading-relaxed custom-scrollbar font-serif placeholder-zinc-300`}
                                />
                            </div>

                            <div className={`flex-[0.6] flex flex-col min-h-0 border-t ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} ${globalTheme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-[#0c0c0c]'} relative`}>
                                <div className={`absolute top-0 left-0 right-0 h-12 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30 bg-[var(--bg-header)]' : 'border-zinc-700 bg-[#161616]'} flex items-center px-6 gap-2 z-10`}>
                                    <BookOpen size={16} className={theme.text} />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${globalTheme === 'retro' ? 'text-black' : 'text-zinc-100'}`}>{lang === 'EN' ? "DIRECTOR'S NOTE" : "导演手记"}</span>
                                </div>
                                <textarea
                                    value={config.directorNote || ""}
                                    onChange={(e) => setConfig({ ...config, directorNote: e.target.value })}
                                    placeholder={lang === 'EN' ? "Enter your creative intent, specific instructions, or adaptation ideas here..." : "在此输入您的创作意图、具体指令或改编想法..."}
                                    className={`flex-1 bg-transparent p-10 pt-16 text-sm ${globalTheme === 'retro' ? 'text-black' : 'text-zinc-100'} resize-none focus:outline-none leading-relaxed custom-scrollbar font-sans placeholder-zinc-300`}
                                />
                            </div>
                        </div>

                        {/* Middle Pane: Controls */}
                        <div className={`w-[420px] border-r ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-700'} flex flex-col ${globalTheme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-[#0c0c0c]'} shrink-0 relative ${globalTheme === 'retro' ? 'shadow-none' : 'shadow-[10px_0_30px_rgba(0,0,0,0.3)]'} z-10`}>
                            <div className="flex-1 flex flex-col px-8 pt-2 pb-6 overflow-hidden">
                                <div className="flex-1 flex flex-col min-h-0">
                                {/* Project Info Section integrated into flow */}
                                <div className="space-y-4 pt-6">
                                    <div className={`flex items-center gap-3 pb-2 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-zinc-700'}`}>
                                        <Sliders size={16} className={theme.text} />
                                        <span className={`text-sm font-black uppercase tracking-[0.2em] ${theme.text}`}>{t.CONSOLE}</span>
                                    </div>
                                    <div className={`flex items-center border ${globalTheme === 'retro' ? 'border-[#8B261D]/20 bg-[var(--bg-header)] shadow-sm' : 'border-zinc-800 bg-zinc-900/50'} rounded-lg px-4 py-3`}>
                                        <input
                                            value={projectName || ""}
                                            onChange={(e) => onProjectNameChange?.(e.target.value)}
                                            className={`bg-transparent ${globalTheme === 'retro' ? 'text-black' : 'text-zinc-100'} font-bold text-sm focus:outline-none w-full placeholder-zinc-500`}
                                            placeholder={lang === 'EN' ? "Project Name" : "项目名称"}
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-1 space-y-7">
                                    <div className="space-y-4">
                                        <div className={`flex items-center gap-3 pb-2 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-zinc-700'} ${theme.text}`}>
                                            <Clapperboard size={16} />
                                            <span className="text-sm font-black uppercase tracking-widest">{t.H_DIRECTOR_DESK}</span>
                                        </div>
                                        <div className="space-y-3">
                                            <ControlRow label={t.L_SCENE_MODE} theme={theme}>
                                                <StyleButton value={config.sceneMode || 'AUTO'} options={SCENE_MODES} onClick={() => handleOpenSelector('sceneMode', t.L_SCENE_MODE, SCENE_MODES)} theme={theme} getOptionName={getOptionName} />
                                            </ControlRow>
                                            <ControlRow label={t.L_SCENE_FUNCTION} theme={theme}>
                                                <StyleButton value={config.sceneFunction || 'AUTO'} options={SCENE_FUNCTIONS} onClick={() => handleOpenSelector('sceneFunction', t.L_SCENE_FUNCTION, SCENE_FUNCTIONS)} theme={theme} getOptionName={getOptionName} />
                                            </ControlRow>
                                            <ControlRow label={t.L_SHOT_BUDGET} theme={theme}>
                                                <StyleButton value={config.shotBudget || 'AUTO'} options={SHOT_BUDGETS} onClick={() => handleOpenSelector('shotBudget', t.L_SHOT_BUDGET, SHOT_BUDGETS)} theme={theme} getOptionName={getOptionName} />
                                            </ControlRow>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className={`flex items-center gap-3 pb-2 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-zinc-700'} ${theme.text}`}>
                                            <Crosshair size={16} />
                                            <span className="text-sm font-black uppercase tracking-widest">{t.H_VISUAL}</span>
                                        </div>
                                        <div className="space-y-3">
                                            <ControlRow label={t.L_AESTHETIC} theme={theme}>
                                                <StyleButton value={config.visualStyle} options={VISUAL_STYLES} onClick={() => handleOpenSelector('visualStyle', t.L_AESTHETIC, VISUAL_STYLES)} theme={theme} getOptionName={getOptionName} />
                                            </ControlRow>
                                            <ControlRow label={t.L_FILM_CASE} theme={theme}>
                                                <StyleButton value={config.filmCaseId || 'filmcase_none'} options={FILM_CASES} onClick={() => handleOpenSelector('filmCaseId', t.L_FILM_CASE, FILM_CASES)} theme={theme} getOptionName={getOptionName} />
                                            </ControlRow>
                                            <ControlRow label={t.L_MONTAGE} theme={theme}>
                                                <StyleButton value={currentMontageId} options={MONTAGE_STYLES} onClick={() => handleOpenSelector('montageId', t.L_MONTAGE, MONTAGE_STYLES)} theme={theme} getOptionName={getOptionName} />
                                            </ControlRow>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className={`flex items-center gap-3 pb-2 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-zinc-700'} ${theme.text}`}>
                                            <Mic2 size={16} />
                                            <span className="text-sm font-black uppercase tracking-widest">{t.L_SOUND_ARCH}</span>
                                        </div>
                                        <div className="space-y-3">
                                            <ControlRow label={t.L_SOUND_ARCH} theme={theme}>
                                                <StyleButton value={config.soundArchitecture || 'AUTO'} options={SOUND_ARCHITECTURES} onClick={() => handleOpenSelector('soundArchitecture', t.L_SOUND_ARCH, SOUND_ARCHITECTURES)} theme={theme} getOptionName={getOptionName} />
                                            </ControlRow>
                                            <details className={`group rounded-md border ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} ${globalTheme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-black/20'}`}>
                                                <summary className={`flex cursor-pointer list-none items-center justify-between px-3 py-2 text-[11px] font-black uppercase tracking-widest ${theme.textSecondary || 'text-zinc-200'}`}>
                                                    <span>{t.H_ADVANCED_AUDIO}</span>
                                                    <ChevronDown size={14} className="transition-transform group-open:rotate-180" />
                                                </summary>
                                                <div className={`space-y-3 border-t px-3 py-3 ${globalTheme === 'retro' ? 'border-[#8B261D]/15' : 'border-zinc-800'}`}>
                                                    <ControlRow label={t.L_DIALOGUE} theme={theme}>
                                                        <StyleButton value={config.dialogueStyle} options={DIALOGUE_STYLES} onClick={() => handleOpenSelector('dialogueStyle', t.L_DIALOGUE, DIALOGUE_STYLES)} theme={theme} getOptionName={getOptionName} />
                                                        <DensitySwitch value={config.dialogueDensity} onChange={v => setConfig({ ...config, dialogueDensity: v })} theme={theme} lang={lang} />
                                                    </ControlRow>
                                                    <ControlRow label={t.L_VO} theme={theme}>
                                                        <StyleButton value={config.voiceoverStyle} options={VOICEOVER_STYLES} onClick={() => handleOpenSelector('voiceoverStyle', t.L_VO, VOICEOVER_STYLES)} theme={theme} getOptionName={getOptionName} />
                                                        <DensitySwitch value={config.voiceoverDensity} onChange={v => setConfig({ ...config, voiceoverDensity: v })} theme={theme} lang={lang} />
                                                    </ControlRow>
                                                    <ControlRow label={t.L_MONOLOGUE} theme={theme}>
                                                        <StyleButton value={config.monologueStyle} options={MONOLOGUE_STYLES} onClick={() => handleOpenSelector('monologueStyle', t.L_MONOLOGUE, MONOLOGUE_STYLES)} theme={theme} getOptionName={getOptionName} />
                                                        <DensitySwitch value={config.monologueDensity} onChange={v => setConfig({ ...config, monologueDensity: v })} theme={theme} lang={lang} />
                                                    </ControlRow>
                                                </div>
                                            </details>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pb-2">
                                        <div className={`flex items-center gap-3 pb-2 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-zinc-700'} ${theme.text}`}>
                                            <LayoutGrid size={16} />
                                            <span className="text-sm font-black uppercase tracking-widest">{lang === 'EN' ? 'FRAME TUNING' : '画格微调'}</span>
                                        </div>
                                        <div className="space-y-3">
                                            <ControlRow label={t.L_SUBJECT} theme={theme}>
                                                <DensitySwitch value={config.subjectFocus} onChange={v => setConfig({ ...config, subjectFocus: v })} theme={theme} lang={lang} variant="expanded" />
                                            </ControlRow>
                                            <ControlRow label={t.L_B_ROLL} theme={theme}>
                                                <DensitySwitch value={config.emptyShot} onChange={v => setConfig({ ...config, emptyShot: v })} theme={theme} lang={lang} variant="expanded" />
                                            </ControlRow>
                                        </div>
                                    </div>
                                </div>
                                </div>

                                {/* Execute Button integrated into bottom of scroll */}
                                <div className="pt-6 pb-2 flex items-center gap-2">
                                    <AdminXRayButton
                                        isAdmin={isAdmin}
                                        lang={lang === 'EN' ? 'EN' : 'CN'}
                                        title={lang === 'EN' ? 'X-Ray Metonymy Execution Prompt' : 'X-Ray 换喻执行指令'}
                                        sources={getSutureXRaySources}
                                        buildPayload={(values) => buildSutureStep1Prompt(
                                            String(values.sourceText || ''),
                                            buildSandboxConfig(values),
                                            String(values.totalSourceText || ''),
                                            undefined,
                                            1,
                                            ''
                                        )}
                                        disabled={!sourceText}
                                    />
                                    <button
                                        type="button"
                                        onClick={handleGenerateClick}
                                        disabled={isGenerating || !sourceText}
                                        className="mist-traverse-action mist-app-primary-action flex-1 flex items-center justify-center gap-3 py-3 rounded-md font-black text-sm uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border"
                                        style={{ boxShadow: 'none' }}
                                    >
                                        {isGenerating ? <Zap size={18} className="animate-pulse" /> : <Play size={18} fill="currentColor" />}
                                        {isGenerating ? (
                                            <>
                                                {t.BTN_PROCESSING}
                                                <ProcessingTimer startTime={generationStartTime} />
                                            </>
                                        ) : t.BTN_GENERATE}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Pane: Output */}
                        <div className={`flex-1 flex flex-col ${globalTheme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-[#080808]'} relative`}>
                            <div className={`h-12 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30 bg-[var(--bg-header)]' : 'border-zinc-700 bg-[#111]'} flex items-center justify-between px-6 shrink-0`}>
                                <div className="flex items-center gap-3">
                                    <Film size={16} className={theme.text} />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${globalTheme === 'retro' ? 'text-black' : 'text-zinc-100'}`}>{t.OUT_TITLE}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {onSave && (
                                        <button onClick={handleSave} className={`flex items-center gap-2 px-3 py-1.5 border ${globalTheme === 'retro' ? 'bg-[#8B261D] border-[#8B261D] text-white' : 'bg-transparent border-zinc-600 text-zinc-200 hover:text-white hover:border-zinc-400'} rounded-md text-[11px] font-bold uppercase tracking-wider transition-all`}>
                                            {saved ? <Check size={12} className="text-green-400" /> : <Save size={12} />}
                                            {saved ? t.SAVED : t.SAVE}
                                        </button>
                                    )}
                                    <button type="button" onClick={handleCopy} className={`flex items-center gap-2 px-3 py-1.5 border ${globalTheme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D] text-[#8B261D] hover:bg-[#8B261D]/10' : 'bg-transparent border-zinc-600 text-zinc-200 hover:text-white hover:border-zinc-400'} rounded-md text-[11px] font-bold uppercase tracking-wider transition-all`}>
                                        {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                                        {copied ? t.COPIED : t.COPY}
                                    </button>
                                    <div className={`w-px h-4 mx-2 ${globalTheme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'}`}></div>
                                    <button type="button" onClick={onClose} className={`flex items-center gap-2 px-3 py-1.5 border ${globalTheme === 'retro' ? 'bg-[#8B261D] border-[#8B261D] text-white hover:bg-[#6D1E16]' : 'bg-transparent border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500'} rounded-md text-[11px] font-black uppercase tracking-wider transition-all shadow-sm`}>
                                        <X size={14} strokeWidth={3} />
                                        {t.CLOSE}
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto custom-scrollbar p-12 pt-24">
                                {isGenerating ? (
                                    <div className="h-full flex flex-col items-center justify-center gap-6 text-zinc-500">
                                        <div className={`w-12 h-12 border-4 border-zinc-900 rounded-full animate-spin ${theme.spinnerBorder}`}></div>
                                        <span className="text-sm font-mono uppercase tracking-[0.3em] animate-pulse">{t.BTN_PROCESSING}</span>
                                    </div>
                                ) : resultText ? (
                                    <div className={`prose prose-invert ${globalTheme === 'retro' ? 'prose-p:text-black' : 'prose-p:text-zinc-200'} prose-p:leading-loose max-w-4xl mx-auto font-serif text-lg whitespace-pre-wrap`}>
                                        {resultText}
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-zinc-800 gap-6 opacity-20">
                                        <Film size={80} />
                                        <span className="text-sm font-mono uppercase tracking-[0.4em]">{t.OUT_WAITING}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                {activeSelector && (
                    <NarrativeLibraryModal
                        isOpen={!!activeSelector}
                        onClose={() => setActiveSelector(null)}
                        blockId={activeSelector.key}
                        blockName={activeSelector.title}
                        selectedTags={getCurrentSelectedTags()}
                        onToggleTag={handleSelectOptionFromLibrary}
                        customLibraryData={getCustomLibraryData()}
                        lang={lang}
                        driverType={driverType}
                    />
                )}
            </div>
        </div>
    );
};
