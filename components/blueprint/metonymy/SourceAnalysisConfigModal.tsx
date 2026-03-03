
import React, { useState } from 'react';
import { X, Globe, MessageSquare, Sparkles } from 'lucide-react';
import { VisualBibleAnalysisHints } from '../../../services/visualBibleGenerator';

interface SourceAnalysisConfigModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (hints: VisualBibleAnalysisHints) => void;
    lang: 'CN' | 'EN';
    themeAccent: string;
}

export const SourceAnalysisConfigModal: React.FC<SourceAnalysisConfigModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    lang,
    themeAccent
}) => {
    const [dialogue, setDialogue] = useState('');

    if (!isOpen) return null;

    // Extract color base from themeAccent (e.g., "text-purple-400" -> "purple-400")
    const colorBase = themeAccent.replace('text-', '');

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-xl bg-[#0c0c0c] border border-zinc-800 rounded-xl shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900 shrink-0">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold text-white tracking-wider flex items-center gap-2">
                            <Globe size={18} className={themeAccent} />
                            {lang === 'CN' ? "全局原文反推" : "Global Source Analysis"}
                        </h2>
                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">
                            {lang === 'CN' ? "深度解析文本以构建统一的视觉圣经" : "Deeply analyze text to build consistent visual bible"}
                        </span>
                    </div>
                    <button onClick={onClose} className="p-1 text-zinc-500 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar max-h-[70vh]">
                    {/* Section 1: Description */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1 flex items-center gap-2">
                            <Globe size={12} />
                            {lang === 'CN' ? "1. 全局原文反推说明" : "1. GLOBAL SOURCE ANALYSIS GUIDE"}
                        </label>
                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 relative overflow-hidden group">
                            <div className={`absolute top-0 left-0 w-1 h-full bg-${colorBase}/50`} />
                            <p className="text-xs text-zinc-300 leading-relaxed">
                                {lang === 'CN'
                                    ? "AI 将智能解析全篇故事文本，自动提取核心角色形象、关键场景氛围、核心道具特征。同时为您推导最契合原著视觉调性的导演风格、色彩构成与镜头美学。这为您构建统一的视觉圣经打下基础。"
                                    : "AI will intelligently analyze the entire story text, automatically extracting core character images, key scene atmospheres, and essential prop features. It will also derive director styles, color compositions, and lens aesthetics that best fit the original visual tone, laying the foundation for a unified visual bible."
                                }
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Analysis Requirements */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1 flex items-center gap-2">
                            <MessageSquare size={12} />
                            {lang === 'CN' ? "2. 反推要求 (可选)" : "2. ANALYSIS REQUIREMENTS (OPTIONAL)"}
                        </label>
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
                            <textarea
                                value={dialogue}
                                onChange={(e) => setDialogue(e.target.value)}
                                placeholder={lang === 'CN' ? "例如：“某角色虽然原文没写形象，但我希望他更显老一点”、“色调要极度压抑”..." : "e.g. 'Character X should look older though not specified', 'The tone should be extremely oppressive'..."}
                                className="w-full h-24 bg-transparent border-none text-zinc-200 text-xs focus:ring-0 focus:outline-none focus:ring-offset-0 resize-none custom-scrollbar"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-zinc-900 flex justify-end gap-3 bg-black/20">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-xs font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
                    >
                        {lang === 'CN' ? "取消" : "CANCEL"}
                    </button>
                    <button
                        onClick={() => onConfirm({ dialogue })}
                        className={`px-6 py-2 bg-${colorBase}/10 hover:bg-${colorBase}/20 text-${colorBase} border border-${colorBase}/30 font-bold text-xs rounded transition-all flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.3)]`}
                    >
                        <Sparkles size={14} />
                        {lang === 'CN' ? "开始全局原文反推" : "START GLOBAL ANALYSIS"}
                    </button>
                </div>
            </div>
        </div>
    );
};
