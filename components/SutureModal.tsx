import React, { useState, useMemo, useEffect } from 'react';
import { X, Wand2, Play, Eraser, Volume2, Video, Sliders, FileText, Check, Copy, Monitor, Film, Zap, ChevronRight, ChevronDown, BookOpen, Save, FilePlus, Aperture } from 'lucide-react';
import { SutureConfig, DensityLevel, BlueprintLanguage, DriverType, LibraryCategoryDef, MetonymyStylePreset } from '../types';
import { DIALOGUE_STYLES, VOICEOVER_STYLES, MONOLOGUE_STYLES, VISUAL_STYLES, ACTION_PACING, SHOT_DENSITY } from '../data/suture_styles';
import { MONTAGE_STYLES } from '../data/suture_montage';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { ProcessingTimer } from './SharedBlueprintComponents';
import { useTheme } from '../contexts/ThemeContext';

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
    activePresetId
}) => {
    const { theme: globalTheme } = useTheme();
    const [sourceText, setSourceText] = useState("");
    const [resultText, setResultText] = useState("");
    const [config, setConfig] = useState<SutureConfig>({
        dialogueDensity: 'AUTO',
        dialogueStyle: 'dial_default',
        voiceoverDensity: 'AUTO',
        voiceoverStyle: 'vo_default',
        monologueDensity: 'AUTO',
        monologueStyle: 'mono_default',
        visualStyle: 'vis_wkw',
        actionPacing: 'NORMAL',
        shotDensity: 'SHOTS_25',
        subjectFocus: 'MID',
        emptyShot: 'NONE',
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
                bgSoft: 'bg-[#F4EFE0]',
                shadow: 'shadow-none', 
                hoverShadow: 'hover:shadow-md',
                spinnerBorder: 'border-t-[#8B261D]', 
                accent: 'bg-[#8B261D]'
            };
        }
        switch (driverType) {
            case DriverType.COMMERCIAL:
                return {
                    text: 'text-mist-cyan', bg: 'bg-mist-cyan', hoverBg: 'hover:bg-cyan-400',
                    border: 'border-mist-cyan/50', borderSoft: 'border-cyan-900/30', bgSoft: 'bg-mist-cyan/20',
                    shadow: 'shadow-[0_0_20px_rgba(34,211,238,0.2)]', hoverShadow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]',
                    spinnerBorder: 'border-t-mist-cyan', accent: 'bg-cyan-900'
                };
            case DriverType.EXPERIMENTAL:
                return {
                    text: 'text-mist-purple', bg: 'bg-mist-purple', hoverBg: 'hover:bg-purple-400',
                    border: 'border-mist-purple/50', borderSoft: 'border-purple-900/30', bgSoft: 'bg-mist-purple/20',
                    shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]', hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]',
                    spinnerBorder: 'border-t-mist-purple', accent: 'bg-purple-900'
                };
            case DriverType.AESTHETIC:
                return {
                    text: 'text-mist-rose', bg: 'bg-mist-rose', hoverBg: 'hover:bg-rose-400',
                    border: 'border-mist-rose/50', borderSoft: 'border-rose-900/30', bgSoft: 'bg-mist-rose/20',
                    shadow: 'shadow-[0_0_20px_rgba(244,63,94,0.2)]', hoverShadow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]',
                    spinnerBorder: 'border-t-mist-rose', accent: 'bg-rose-900'
                };
            case DriverType.TRAILER:
                return {
                    text: 'text-mist-orange', bg: 'bg-mist-orange', hoverBg: 'hover:bg-orange-400',
                    border: 'border-mist-orange/50', borderSoft: 'border-orange-900/30', bgSoft: 'bg-mist-orange/20',
                    shadow: 'shadow-[0_0_20px_rgba(251,146,60,0.2)]', hoverShadow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.4)]',
                    spinnerBorder: 'border-t-mist-orange', accent: 'bg-orange-900'
                };
        }
        return {
            text: 'text-gold-primary', bg: 'bg-gold-primary', hoverBg: 'hover:bg-amber-400',
            border: 'border-gold-primary/50', borderSoft: 'border-amber-900/30', bgSoft: 'bg-gold-primary/20',
            shadow: 'shadow-[0_0_20px_rgba(212,175,55,0.2)]', hoverShadow: 'hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]',
            spinnerBorder: 'border-t-gold-primary', accent: 'bg-zinc-900'
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
        L_DIALOGUE: lang === 'EN' ? "DIALOGUE" : "对白",
        L_VO: lang === 'EN' ? "VOICEOVER" : "旁白",
        L_MONOLOGUE: lang === 'EN' ? "MONOLOGUE" : "独白",
        L_AESTHETIC: lang === 'EN' ? "DIRECTOR STYLE" : "导演风格",
        L_PACING: lang === 'EN' ? "PACING" : "节奏",
        L_SHOTS: lang === 'EN' ? "SHOT COUNT" : "分镜数量",
        L_SUBJECT: lang === 'EN' ? "SUBJECT FOCUS" : "主体密度",
        L_B_ROLL: lang === 'EN' ? "EMPTY SHOT" : "空镜留白",
        L_MONTAGE: lang === 'EN' ? "MONTAGE" : "蒙太奇",
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
        let name = opt.name;
        if (lang === 'CN') {
            name = name.split('(')[0];
        } else {
            const match = name.match(/\((.*?)\)/);
            if (match) name = match[1];
        }
        return name;
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
            desc: lang === 'EN' ? "Select a style parameter for the AI engine." : "为AI引擎选择一个风格参数。",
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

    return (
        <div className="fixed inset-0 z-[200] flex flex-col animate-in fade-in duration-200 overflow-hidden">
            <div className={`flex-1 w-full ${globalTheme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#050505]'} flex flex-col overflow-hidden relative`}>
                <div className="flex-1 flex overflow-hidden">
                        {/* Left Pane: Sources */}
                        <div className={`w-[35%] min-w-[380px] border-r ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} flex flex-col ${globalTheme === 'retro' ? 'bg-[#F4EFE0]' : 'bg-[#0a0a0a]'}`}>
                            <div className="flex-1 flex flex-col min-h-0 relative">
                                <div className={`absolute top-0 left-0 right-0 h-12 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30 bg-[#F4EFE0]' : 'border-zinc-700 bg-[#111]'} flex items-center px-6 gap-3 z-10`}>
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

                            <div className={`flex-[0.6] flex flex-col min-h-0 border-t ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} ${globalTheme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]'} relative`}>
                                <div className={`absolute top-0 left-0 right-0 h-12 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30 bg-[#F9F7F1]' : 'border-zinc-700 bg-[#161616]'} flex items-center px-6 gap-2 z-10`}>
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
                        <div className={`w-[420px] border-r ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-700'} flex flex-col ${globalTheme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]'} shrink-0 relative ${globalTheme === 'retro' ? 'shadow-none' : 'shadow-[10px_0_30px_rgba(0,0,0,0.3)]'} z-10`}>
                            <div className="flex-1 flex flex-col px-10 pt-2 pb-32 overflow-hidden">
                                <div className="flex-1 flex flex-col justify-between">
                                {/* Project Info Section integrated into flow */}
                                <div className="space-y-4 pt-6">
                                    <div className={`flex items-center gap-3 pb-2 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-zinc-700'}`}>
                                        <Sliders size={16} className={theme.text} />
                                        <span className={`text-sm font-black uppercase tracking-[0.2em] ${theme.text}`}>{t.CONSOLE}</span>
                                    </div>
                                    <div className={`flex items-center border ${globalTheme === 'retro' ? 'border-[#8B261D]/20 bg-white shadow-sm' : 'border-zinc-800 bg-zinc-900/50'} rounded-lg px-4 py-3`}>
                                        <input
                                            value={projectName || ""}
                                            onChange={(e) => onProjectNameChange?.(e.target.value)}
                                            className={`bg-transparent ${globalTheme === 'retro' ? 'text-black' : 'text-zinc-100'} font-bold text-sm focus:outline-none w-full placeholder-zinc-500`}
                                            placeholder={lang === 'EN' ? "Project Name" : "项目名称"}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 mt-12">
                                    <div className={`flex items-center gap-3 pb-2 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-zinc-700'} ${theme.text}`}>
                                        <Volume2 size={16} />
                                        <span className="text-sm font-black uppercase tracking-widest">{t.H_AUDIO}</span>
                                    </div>
                                    <div className="space-y-3">
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
                                </div>

                                <div className="space-y-4 mt-8">
                                    <div className={`flex items-center gap-3 pb-2 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-zinc-700'} ${theme.text}`}>
                                        <Video size={16} />
                                        <span className="text-sm font-black uppercase tracking-widest">{t.H_VISUAL}</span>
                                    </div>
                                    <div className="space-y-3">
                                        <ControlRow label={t.L_AESTHETIC} theme={theme}>
                                            <StyleButton value={config.visualStyle} options={VISUAL_STYLES} onClick={() => handleOpenSelector('visualStyle', t.L_AESTHETIC, VISUAL_STYLES)} theme={theme} getOptionName={getOptionName} />
                                        </ControlRow>
                                        <ControlRow label={t.L_MONTAGE} theme={theme}>
                                            <StyleButton value={config.montageId || 'montage_none'} options={MONTAGE_STYLES} onClick={() => handleOpenSelector('montageId', t.L_MONTAGE, MONTAGE_STYLES)} theme={theme} getOptionName={getOptionName} />
                                        </ControlRow>
                                        <ControlRow label={t.L_SHOTS} theme={theme}>
                                            <StyleButton value={config.shotDensity} options={SHOT_DENSITY} onClick={() => handleOpenSelector('shotDensity', t.L_SHOTS, SHOT_DENSITY)} theme={theme} getOptionName={getOptionName} />
                                        </ControlRow>
                                        <ControlRow label={t.L_PACING} theme={theme}>
                                            <StyleButton value={config.actionPacing} options={ACTION_PACING} onClick={() => handleOpenSelector('actionPacing', t.L_PACING, ACTION_PACING)} theme={theme} getOptionName={getOptionName} />
                                        </ControlRow>
                                        <div className={`h-px ${globalTheme === 'retro' ? 'bg-[#8B261D]/10' : 'bg-zinc-800'} my-4`}></div>
                                        <ControlRow label={t.L_SUBJECT} theme={theme}>
                                            <DensitySwitch value={config.subjectFocus} onChange={v => setConfig({ ...config, subjectFocus: v })} theme={theme} lang={lang} variant="expanded" />
                                        </ControlRow>
                                        <ControlRow label={t.L_B_ROLL} theme={theme}>
                                            <DensitySwitch value={config.emptyShot} onChange={v => setConfig({ ...config, emptyShot: v })} theme={theme} lang={lang} variant="expanded" />
                                        </ControlRow>
                                    </div>
                                </div>
                                </div>

                                {/* Execute Button integrated into bottom of scroll */}
                                <div className="pt-6 pb-2">
                                    <button
                                        type="button"
                                        onClick={handleGenerateClick}
                                        disabled={isGenerating || !sourceText}
                                        className={`w-full flex items-center justify-center gap-3 py-3 rounded-md font-black text-sm uppercase tracking-widest transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed ${theme.bg} ${theme.hoverBg} ${globalTheme === 'retro' ? 'text-white border border-[#8B261D]' : `text-black border border-white/30`} shadow-lg`}
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
                        <div className={`flex-1 flex flex-col ${globalTheme === 'retro' ? 'bg-white' : 'bg-[#080808]'} relative`}>
                            <div className={`h-12 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/30 bg-[#F4EFE0]' : 'border-zinc-700 bg-[#111]'} flex items-center justify-between px-6 shrink-0`}>
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
                                    <button type="button" onClick={handleCopy} className={`flex items-center gap-2 px-3 py-1.5 border ${globalTheme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D] text-[#8B261D] hover:bg-[#8B261D]/10' : 'bg-transparent border-zinc-600 text-zinc-200 hover:text-white hover:border-zinc-400'} rounded-md text-[11px] font-bold uppercase tracking-wider transition-all`}>
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
                                    <div className={`prose prose-invert ${globalTheme === 'retro' ? 'prose-p:text-black' : 'prose-p:text-zinc-200'} prose-p:leading-loose max-w-4xl mx-auto font-serif text-lg whitespace-pre-wrap animate-in slide-in-from-bottom-4 duration-500`}>
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
