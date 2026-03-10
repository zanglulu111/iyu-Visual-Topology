
import React, { useRef, useState, useMemo } from 'react';
import { X, Sparkles, Image as ImageIcon, Upload, Trash2, Zap, Briefcase, Loader2, ScanEye, BrainCircuit, FileText, Cpu, ScanLine, ArrowDown, Palette, Camera, Sun, Layers, Aperture, Layout } from 'lucide-react';
import { BlueprintLanguage, DriverType } from '../types';
import { supabaseDatabase } from '../services/supabaseDatabase';
import { generateAestheticReverse } from '../services/aestheticReverseService';
import { ProcessingTimer } from './SharedBlueprintComponents';
import { useTheme } from '../contexts/ThemeContext';

interface VisionSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    visionInput: string;
    onVisionInputChange: (val: string) => void;
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
    zIndex?: number;
}

export const VisionSidebar: React.FC<VisionSidebarProps> = ({
    isOpen,
    onClose,
    visionInput,
    onVisionInputChange,
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
    zIndex = 60
}) => {
    const { theme: currentTheme } = useTheme();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isCommercial = driverType === DriverType.COMMERCIAL;
    const isAesthetic = driverType === DriverType.AESTHETIC;
    const isExperimental = driverType === DriverType.EXPERIMENTAL;
    const isTrailer = driverType === DriverType.TRAILER;
    const [isGeneratingImg, setIsGeneratingImg] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

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
        return lang === 'EN' ? "Story & Visual Decoding" : "故事与视觉解码";
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
                    text: 'text-cyan-400',
                    bg: 'bg-cyan-500',
                    border: 'border-cyan-500',
                    focusBorder: 'focus:border-cyan-500/50',
                    shadow: 'shadow-[0_0_20px_rgba(6,182,212,0.3)]',
                    uploadHover: 'hover:border-cyan-500/30 hover:bg-cyan-900/10',
                    spinner: 'border-cyan-900 border-t-cyan-200',
                    btn: 'bg-cyan-900/20 text-cyan-400 border-cyan-800 hover:border-cyan-400'
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
            } finally {
                setIsUploading(false);
            }
        }
    };

    const handleGenerateImageClick = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!visionInput.trim()) {
            alert(lang === 'EN' ? "Please enter text description first." : "请先输入文本描述。");
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
            ? "Input the Symptom ($):\n- Product Name & Category\n- Target Audience Anxiety\n- The Ideal Fantasy\n\nExample: 'A high-end anti-aging cream for anxious CEOs who fear irrelevance.'"
            : "在此输入【欲望症候】：\n1. 产品名称与品类\n2. 目标受众的焦虑/痛点\n3. 品牌承诺的理想状态\n\n示例：“一款针对为容貌焦虑的都市女性的高端抗衰精华，承诺冻结时间。”";

        if (isAesthetic) {
            return lang === 'EN'
                ? "Input Visual Seed:\n1. Concept: 'A sad cyberpunk samurai'\n2. Reverse: Upload image to analyze style."
                : "在此输入【视觉种子】：\n1. 灵感模式：输入抽象想法（如“悲伤的赛博武士”）。\n2. 反推模式：上传图片，由引擎自动进行反向解析。";
        }
        if (isTrailer) return lang === 'EN' ? "Enter the High Concept, the Twist, or the Atmosphere..." : "输入核心高概念、反转点或氛围描述...";
        return lang === 'EN' ? "Enter concept, logline, or keywords..." : "在此输入创意种子 (想法/关键词)... 或者直接上传一张图。";
    };

    const isProcessing = isAutoFilling || isAnalyzingImage;

    return (
        <div 
            style={{ zIndex: isOpen ? zIndex : 0 }}
            className={`
                flex flex-col transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
                fixed top-14 right-0 bottom-14 w-[380px] ${currentTheme === 'retro' ? 'bg-[var(--bg-panel)] shadow-none' : `bg-[var(--bg-main)] ${isOpen ? 'shadow-[-20px_0_50px_rgba(0,0,0,0.5)]' : ''}`} ${isOpen ? 'border-l border-[var(--border-main)]' : 'border-none'} overflow-hidden
                ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
            `}
        >
            {/* Header */}
            <div className={`px-6 py-4 flex items-center justify-between relative shrink-0 transition-all duration-300`}>
                <div className="flex items-center gap-3">
                    {currentTheme === 'retro' ? <Sparkles size={20} className={theme.text} /> : (
                        isCommercial ? <ScanEye size={20} className="text-cyan-400" /> :
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

                {/* 1. Text Input */}
                <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                        <label className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${theme.text}`}>
                            <FileText size={14} className={theme.text} />
                            {isCommercial
                                ? (lang === 'EN' ? "1. The Symptom (Text)" : "1. 症候描述")
                                : (lang === 'EN' ? "1. The Seed (Text/Idea)" : "1. 创意种子")}
                            {visionInput && <span className={`w-1.5 h-1.5 rounded-full ${theme.bg} animate-pulse`}></span>}
                        </label>
                        {visionInput && <button onClick={() => onVisionInputChange("")} className={`text-[9px] hover:text-red-400 uppercase ${currentTheme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>{lang === 'EN' ? "Clear" : "清空"}</button>}
                    </div>
                    <div className={`relative group ${isCommercial ? 'p-[1px] bg-gradient-to-br from-cyan-900/50 to-transparent rounded-xl' : ''}`}>
                        <textarea
                            value={visionInput}
                            onChange={(e) => onVisionInputChange(e.target.value)}
                            placeholder={getPlaceholder()}
                            className={`w-full h-32 ${currentTheme === 'retro' ? `bg-[var(--bg-card)] ${theme.border}/20 text-[var(--text-main)] placeholder-black/30 focus:ring-[var(--text-accent)]/30` : `bg-[var(--bg-panel)] ${isCommercial ? 'border-cyan-500/30' : isExperimental ? 'border-purple-500/30' : isAesthetic ? 'border-rose-500/30' : isTrailer ? 'border-orange-500/30' : 'border-[#D4AF37]/40'} text-zinc-200 placeholder-zinc-500`} border-dashed border-2 rounded-xl p-5 text-sm focus:outline-none resize-none font-sans leading-relaxed transition-all ${theme.text} ${theme.focusBorder} ${isCommercial ? 'focus:shadow-[0_0_20px_rgba(6,182,212,0.1)]' : ''}`}
                        />
                        {isCommercial && <div className="absolute bottom-3 right-3 text-[9px] text-cyan-900/40 font-mono pointer-events-none select-none">INPUT_STREAM_ACTIVE</div>}
                    </div>
                </div>

                {/* 2. Image Input */}
                <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                        <label className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${theme.text}`}>
                            <ImageIcon size={14} className={theme.text} />
                            {isCommercial
                                ? (lang === 'EN' ? "2. The Fetish (Ref Image)" : "2. 拜物对象")
                                : (lang === 'EN' ? "2. Visual Story (Image)" : "2. 视觉参考")}
                            {visionImage && <span className={`w-1.5 h-1.5 rounded-full ${theme.bg} animate-pulse`}></span>}
                        </label>
                    </div>

                    {visionImage ? (
                        <div className={`relative w-full aspect-video rounded-xl overflow-hidden border border-dashed border-zinc-700 group shadow-2xl`}>
                            <img src={visionImage} alt="Reference" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                                {onGenerateImage && (
                                    <button
                                        onClick={handleGenerateImageClick}
                                        className="p-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-all transform hover:scale-110 border border-zinc-600"
                                        title={lang === 'EN' ? "Regenerate" : "重新生成"}
                                    >
                                        {isGeneratingImg ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
                                    </button>
                                )}
                                <button onClick={() => onVisionImageChange(null)} className="p-3 bg-zinc-800 text-white rounded-full hover:bg-red-900/80 hover:text-red-200 hover:border-red-500/50 transition-all transform hover:scale-110 border border-zinc-600"><Trash2 size={18} /></button>
                                {onAnalyzeImage && (
                                    <button
                                        onClick={onAnalyzeImage}
                                        className={`p-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-all transform hover:scale-110 border border-zinc-600 ${isAnalyzingImage ? 'opacity-50 cursor-wait' : ''}`}
                                        title={lang === 'EN' ? "Analyze" : "深度解析"}
                                    >
                                        {isAnalyzingImage ? <Loader2 size={18} className="animate-spin" /> : <ScanEye size={18} />}
                                    </button>
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

                {/* 3. Visual Analysis Result */}
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex justify-between items-baseline">
                        <label className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${theme.text}`}>
                            <ScanLine size={16} className={theme.text} />
                            <span>{lang === 'EN' ? "3. Narrative Decoding (Result)" : "3. 视觉叙事解码"}</span>
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
                            placeholder={lang === 'EN' ? "AI decoded story/style/context will appear here..." : "AI 将在此处生成：\n1. 画面反推提示词\n2. 风格与影调分析\n3. 潜在的故事梗概\n4. 人物与事件推演..."}
                            className={`w-full h-40 ${currentTheme === 'retro' ? `bg-[var(--bg-card)] ${theme.border}/20 text-[var(--text-main)] placeholder-black/30 focus:ring-[var(--text-accent)]/30` : `bg-[var(--bg-panel)] ${isCommercial ? 'border-cyan-500/30' : isExperimental ? 'border-purple-500/30' : isAesthetic ? 'border-rose-500/30' : isTrailer ? 'border-orange-500/30' : 'border-[#D4AF37]/40'} text-zinc-300 placeholder-zinc-500 focus:ring-zinc-700/50`} border-dashed border-2 rounded-xl p-5 text-xs focus:outline-none resize-none font-mono leading-relaxed transition-all ${theme.text} ${theme.focusBorder} focus:shadow-[0_0_15px_rgba(255,255,255,0.02)] custom-scrollbar`}
                        />
                        <div className={`absolute bottom-3 right-3 text-[8px] ${currentTheme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600'} font-mono pointer-events-none select-none uppercase tracking-widest`}>
                            {isProcessing ? (lang === 'EN' ? "DECODING..." : "正在解构...") : (lang === 'EN' ? "DECODER_READY" : "解码器就绪")}
                        </div>
                    </div>
                </div>

                {/* 4. Action Button (Engine Mapping) */}
                <div className="mt-8">
                    <button
                        onClick={onAutoFill}
                        disabled={isProcessing || (!visionInput && !visionImage && !visionAnalysis)}
                        className={`w-full py-4 border rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden ${currentTheme === 'retro' ? 'bg-[#8B261D] hover:bg-[#631B15] border-[#8B261D] text-white shadow-none' : (isCommercial ? 'bg-cyan-500 hover:bg-cyan-400 border-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]' : isExperimental ? 'bg-purple-500 hover:bg-purple-400 border-purple-500 text-black shadow-[0_0_20px_rgba(168,85,247,0.3)]' : isAesthetic ? 'bg-rose-500 hover:bg-rose-400 border-rose-500 text-black shadow-[0_0_20px_rgba(244,63,94,0.3)]' : isTrailer ? 'bg-orange-500 hover:bg-orange-400 border-orange-500 text-black shadow-[0_0_20px_rgba(251,146,60,0.3)]' : 'bg-gold-primary hover:bg-amber-400 border-gold-primary text-black shadow-[0_0_20px_rgba(212,175,55,0.2)]')}`}
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
                                    {isCommercial
                                        ? (lang === 'EN' ? "SUTURE DESIRE" : "解构并缝合欲望")
                                        : (lang === 'EN' ? "MATCH ENGINE" : "匹配引擎")
                                    }
                                </span>
                            </>
                        )}
                    </button>
                    <div className="text-[9px] text-zinc-400 text-center mt-3 leading-relaxed font-mono flex items-center justify-center gap-2">
                        {isCommercial && <span className={`w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse`}></span>}
                        {isCommercial
                            ? (lang === 'EN' ? "1. Decodes Image -> 2. Maps Parameters" : "1. 视觉解码 -> 2. 引擎参数映射 (自动串行)")
                            : (lang === 'EN' ? "1. Decodes Image -> 2. Maps Parameters" : "1. 视觉叙事解码 -> 2. 引擎参数映射 (自动串行)")
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};
