
import React, { useState, useMemo, useEffect } from 'react';
import { X, Wand2, Play, Eraser, Volume2, Video, Sliders, FileText, Check, Copy, Monitor, Film, Zap, ChevronRight, ChevronDown, BookOpen, Save, FilePlus, Aperture } from 'lucide-react';
import { SutureConfig, DensityLevel, BlueprintLanguage, DriverType, LibraryCategoryDef, MetonymyStylePreset } from '../types';
import { DIALOGUE_STYLES, VOICEOVER_STYLES, MONOLOGUE_STYLES, VISUAL_STYLES, ACTION_PACING, SHOT_DENSITY } from '../data/suture_styles';
import { MONTAGE_STYLES } from '../data/suture_montage';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { ProcessingTimer } from './SharedBlueprintComponents';

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
            <div className="flex bg-[#111] border border-zinc-700 rounded p-[2px] gap-[2px] h-7 items-center flex-1 w-full">
                {DENSITY_OPTS.map((opt) => {
                    const isActive = value === opt.val;
                    return (
                        <button
                            key={opt.val}
                            type="button"
                            onClick={() => onChange(opt.val as DensityLevel)}
                            className={`
                            h-full px-1 text-[10px] md:text-xs font-bold rounded-[2px] transition-all flex-1 flex items-center justify-center
                            ${isActive
                                    ? `${theme.bg} text-black shadow-sm`
                                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
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
        <div className="relative h-7 w-14 shrink-0 bg-zinc-900 border border-zinc-700 rounded hover:border-zinc-500 transition-colors group">
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
                <ChevronDown size={10} className="text-zinc-500 group-hover:text-zinc-300" />
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
        className={`flex-1 min-w-0 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:${theme.border} rounded h-7 px-3 flex items-center justify-between group transition-all`}
    >
        <span className={`text-xs text-zinc-200 font-bold truncate mr-2 group-hover:${theme.text} transition-colors`}>
            {getOptionName(options, value)}
        </span>
        <ChevronRight size={14} className={`text-zinc-500 group-hover:${theme.text}`} />
    </button>
);

const ControlRow = ({ label, children }: { label: string, children?: React.ReactNode }) => (
    <div className="flex items-center justify-between gap-4 h-9">
        <div className="w-20 shrink-0 text-xs font-bold text-zinc-300 uppercase tracking-wide text-right truncate" title={label}>
            {label}
        </div>
        <div className="flex-1 flex items-center gap-3 justify-end min-w-0">
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
        emptyShot: 'MID',
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
        switch (driverType) {
            case DriverType.COMMERCIAL:
                return {
                    text: 'text-cyan-400', bg: 'bg-cyan-500', hoverBg: 'hover:bg-cyan-400',
                    border: 'border-cyan-500/50', borderSoft: 'border-cyan-900/30', bgSoft: 'bg-cyan-500/20',
                    shadow: 'shadow-[0_0_20px_rgba(34,211,238,0.2)]', hoverShadow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]',
                    spinnerBorder: 'border-t-cyan-500', accent: 'bg-cyan-900'
                };
            case DriverType.EXPERIMENTAL:
                return {
                    text: 'text-purple-400', bg: 'bg-purple-500', hoverBg: 'hover:bg-purple-400',
                    border: 'border-purple-500/50', borderSoft: 'border-purple-900/30', bgSoft: 'bg-purple-500/20',
                    shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]', hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]',
                    spinnerBorder: 'border-t-purple-500', accent: 'bg-purple-900'
                };
            case DriverType.AESTHETIC:
                return {
                    text: 'text-rose-400', bg: 'bg-rose-500', hoverBg: 'hover:bg-rose-400',
                    border: 'border-rose-500/50', borderSoft: 'border-rose-900/30', bgSoft: 'bg-rose-500/20',
                    shadow: 'shadow-[0_0_20px_rgba(244,63,94,0.2)]', hoverShadow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]',
                    spinnerBorder: 'border-t-rose-500', accent: 'bg-rose-900'
                };
            case DriverType.TRAILER:
                return {
                    text: 'text-orange-400', bg: 'bg-orange-500', hoverBg: 'hover:bg-orange-400',
                    border: 'border-orange-500/50', borderSoft: 'border-orange-900/30', bgSoft: 'bg-orange-500/20',
                    shadow: 'shadow-[0_0_20px_rgba(251,146,60,0.2)]', hoverShadow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.4)]',
                    spinnerBorder: 'border-t-orange-500', accent: 'bg-orange-900'
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
        SAVE: lang === 'EN' ? "SAVE" : "保存",
        SAVED: lang === 'EN' ? "SAVED" : "已保存",
        CLOSE: lang === 'EN' ? "CLOSE" : "关闭",
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
        <div className="fixed top-16 left-0 right-0 bottom-0 z-[200] flex justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full h-full max-w-[1800px] bg-[#050505] border-x border-b border-zinc-700 shadow-2xl flex flex-col overflow-hidden relative">
                <div className="flex-1 flex overflow-hidden">
                    <div className="w-1/4 min-w-[300px] border-r border-zinc-800 flex flex-col bg-[#0a0a0a]">
                        {/* Top Half: Source Text */}
                        <div className="flex-1 flex flex-col min-h-0 border-b border-zinc-800">
                            <div className="p-3 border-b border-zinc-800 flex justify-between items-center text-zinc-400 bg-[#080808]">
                                <div className="flex items-center gap-2">
                                    <FileText size={14} />
                                    <span className="text-xs font-bold uppercase tracking-wider">{t.SOURCE}</span>
                                </div>
                                {/* 优化的字数统计显示 */}
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800" title={lang === 'EN' ? "Selected / Total Characters" : "当前段落 / 故事总字数"}>
                                        <span className={`text-[10px] font-mono font-bold ${theme.text}`}>{currentChunkCount}</span>
                                        <span className="text-[8px] text-zinc-600">/</span>
                                        <span className="text-[10px] font-mono text-zinc-500">{totalCount}</span>
                                    </div>
                                    <button onClick={() => setSourceText('')} className="hover:text-white transition-colors" title="Clear"><Eraser size={14} /></button>
                                </div>
                            </div>
                            <textarea
                                value={sourceText}
                                onChange={(e) => {
                                    setSourceText(e.target.value);
                                    onSourceChange?.(e.target.value);
                                }}
                                placeholder={t.SOURCE_PH}
                                className="flex-1 bg-transparent p-6 text-sm text-zinc-100 resize-none focus:outline-none leading-relaxed custom-scrollbar font-serif placeholder-zinc-500"
                            />
                        </div>

                        {/* Bottom Half: Director's Note */}
                        <div className="flex-1 flex flex-col min-h-0 bg-[#0c0c0c]">
                            <div className="p-3 border-b border-zinc-800 flex justify-between items-center text-zinc-400 bg-[#080808]">
                                <div className="flex items-center gap-2">
                                    <BookOpen size={14} />
                                    <span className="text-xs font-bold uppercase tracking-wider">{lang === 'EN' ? "DIRECTOR'S NOTE" : "导演手记"}</span>
                                </div>
                            </div>
                            <textarea
                                value={config.directorNote || ""}
                                onChange={(e) => setConfig({ ...config, directorNote: e.target.value })}
                                placeholder={lang === 'EN' ? "Enter your creative intent, specific instructions, or adaptation ideas here..." : "在此输入您的创作意图、具体指令或改编想法..."}
                                className="flex-1 bg-transparent p-6 text-sm text-zinc-100 resize-none focus:outline-none leading-relaxed custom-scrollbar font-sans placeholder-zinc-400"
                            />
                        </div>
                    </div>

                    <div className="w-[380px] border-r border-zinc-800 flex flex-col bg-[#0c0c0c] shrink-0 relative shadow-[10px_0_30px_rgba(0,0,0,0.3)] z-10">
                        <div className="p-3 border-b border-zinc-800 flex flex-col gap-2 bg-[#0a0a0a]">
                            <div className="flex items-center gap-2">
                                <Sliders size={14} className={theme.text} />
                                <span className={`text-xs font-bold uppercase tracking-[0.2em] ${theme.text}`}>{t.CONSOLE}</span>
                            </div>
                            <div className="flex items-center border border-zinc-800 rounded bg-zinc-900/50 px-2 py-1 mt-1">
                                <input
                                    value={projectName || ""}
                                    onChange={(e) => onProjectNameChange?.(e.target.value)}
                                    className="bg-transparent text-white font-bold text-xs focus:outline-none w-full placeholder-zinc-600"
                                    placeholder={lang === 'EN' ? "Project Name" : "项目名称"}
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
                            <div className="space-y-4">
                                <div className={`flex items-center gap-2 pb-2 border-b ${theme.borderSoft} ${theme.text}`}>
                                    <Volume2 size={14} />
                                    <span className="text-xs font-black uppercase tracking-widest">{t.H_AUDIO}</span>
                                </div>
                                <div className="space-y-3">
                                    <ControlRow label={t.L_DIALOGUE}>
                                        <StyleButton value={config.dialogueStyle} options={DIALOGUE_STYLES} onClick={() => handleOpenSelector('dialogueStyle', t.L_DIALOGUE, DIALOGUE_STYLES)} theme={theme} getOptionName={getOptionName} />
                                        <DensitySwitch value={config.dialogueDensity} onChange={v => setConfig({ ...config, dialogueDensity: v })} theme={theme} lang={lang} />
                                    </ControlRow>
                                    <ControlRow label={t.L_VO}>
                                        <StyleButton value={config.voiceoverStyle} options={VOICEOVER_STYLES} onClick={() => handleOpenSelector('voiceoverStyle', t.L_VO, VOICEOVER_STYLES)} theme={theme} getOptionName={getOptionName} />
                                        <DensitySwitch value={config.voiceoverDensity} onChange={v => setConfig({ ...config, voiceoverDensity: v })} theme={theme} lang={lang} />
                                    </ControlRow>
                                    <ControlRow label={t.L_MONOLOGUE}>
                                        <StyleButton value={config.monologueStyle} options={MONOLOGUE_STYLES} onClick={() => handleOpenSelector('monologueStyle', t.L_MONOLOGUE, MONOLOGUE_STYLES)} theme={theme} getOptionName={getOptionName} />
                                        <DensitySwitch value={config.monologueDensity} onChange={v => setConfig({ ...config, monologueDensity: v })} theme={theme} lang={lang} />
                                    </ControlRow>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className={`flex items-center gap-2 pb-2 border-b ${theme.borderSoft} ${theme.text}`}>
                                    <Video size={14} />
                                    <span className="text-xs font-black uppercase tracking-widest">{t.H_VISUAL}</span>
                                </div>
                                <div className="space-y-3">
                                    <ControlRow label={t.L_AESTHETIC}>
                                        <StyleButton value={config.visualStyle} options={VISUAL_STYLES} onClick={() => handleOpenSelector('visualStyle', t.L_AESTHETIC, VISUAL_STYLES)} theme={theme} getOptionName={getOptionName} />
                                    </ControlRow>

                                    <ControlRow label={t.L_MONTAGE}>
                                        <StyleButton value={config.montageId || 'montage_none'} options={MONTAGE_STYLES} onClick={() => handleOpenSelector('montageId', t.L_MONTAGE, MONTAGE_STYLES)} theme={theme} getOptionName={getOptionName} />
                                    </ControlRow>
                                    <ControlRow label={t.L_SHOTS}>
                                        <StyleButton value={config.shotDensity} options={SHOT_DENSITY} onClick={() => handleOpenSelector('shotDensity', t.L_SHOTS, SHOT_DENSITY)} theme={theme} getOptionName={getOptionName} />
                                    </ControlRow>
                                    <ControlRow label={t.L_PACING}>
                                        <StyleButton value={config.actionPacing} options={ACTION_PACING} onClick={() => handleOpenSelector('actionPacing', t.L_PACING, ACTION_PACING)} theme={theme} getOptionName={getOptionName} />
                                    </ControlRow>
                                    <div className="h-px bg-zinc-800 my-4"></div>
                                    <ControlRow label={t.L_SUBJECT}>
                                        <DensitySwitch value={config.subjectFocus} onChange={v => setConfig({ ...config, subjectFocus: v })} theme={theme} lang={lang} variant="expanded" />
                                    </ControlRow>
                                    <ControlRow label={t.L_B_ROLL}>
                                        <DensitySwitch value={config.emptyShot} onChange={v => setConfig({ ...config, emptyShot: v })} theme={theme} lang={lang} variant="expanded" />
                                    </ControlRow>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-zinc-800 bg-[#0a0a0a]">
                            <button
                                type="button"
                                onClick={handleGenerateClick}
                                disabled={isGenerating || !sourceText}
                                className={`w-full flex items-center justify-center gap-2 py-4 rounded-md font-black text-sm uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed ${theme.bg} ${theme.hoverBg} text-black ${theme.shadow} ${theme.hoverShadow}`}
                            >
                                {isGenerating ? <Zap size={16} className="animate-pulse" /> : <Play size={16} fill="currentColor" />}
                                {isGenerating ? (
                                    <>
                                        {t.BTN_PROCESSING}
                                        <ProcessingTimer startTime={generationStartTime} />
                                    </>
                                ) : t.BTN_GENERATE}
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col bg-[#080808]">
                        <div className="p-3 border-b border-zinc-800 flex justify-between items-center bg-[#080808]">
                            <div className={`flex items-center gap-2 ${theme.text}`}>
                                <Monitor size={14} />
                                <span className="text-xs font-bold uppercase tracking-wider">{t.OUT_TITLE}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {onSave && (
                                    <button onClick={handleSave} className={`flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-700 hover:border-white text-zinc-400 hover:text-white rounded text-xs font-bold uppercase tracking-wider transition-all`}>
                                        {saved ? <Check size={14} className="text-green-500" /> : <Save size={14} />}
                                        {saved ? t.SAVED : t.SAVE}
                                    </button>
                                )}
                                <button type="button" onClick={handleCopy} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-white transition-colors bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800 hover:border-zinc-600">
                                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                    {copied ? "COPIED" : "COPY"}
                                </button>
                                <button type="button" onClick={onClose} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-white transition-colors bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800 hover:border-red-500/50 hover:bg-red-900/10">
                                    <X size={14} />
                                    {t.CLOSE}
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                            {isGenerating ? (
                                <div className="h-full flex flex-col items-center justify-center gap-4 text-zinc-500">
                                    <div className={`w-10 h-10 border-2 border-zinc-800 rounded-full animate-spin ${theme.spinnerBorder}`}></div>
                                    <span className="text-xs font-mono uppercase tracking-widest animate-pulse">{t.BTN_PROCESSING}</span>
                                </div>
                            ) : resultText ? (
                                <div className="prose prose-invert prose-p:text-zinc-200 prose-p:leading-loose max-w-4xl mx-auto font-serif text-base whitespace-pre-wrap">
                                    {resultText}
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-zinc-800 gap-4">
                                    <Film size={64} className="opacity-20" />
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{t.OUT_WAITING}</span>
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
