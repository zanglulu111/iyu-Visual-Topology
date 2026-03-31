import React, { useState } from 'react';
import { Brain, Activity, Zap, FileText, ChevronRight, ChevronDown, Lock, Unlock, Sparkles } from 'lucide-react';
import { MarkdownRenderer } from '../../SharedBlueprintComponents';

interface PsychoanalysisModuleProps {
    sceneId: string;
    scriptContent: string;
    themeAccent: string;
    theme: string;
    language: 'CN' | 'EN';
}

export const PsychoanalysisModule: React.FC<PsychoanalysisModuleProps> = ({
    sceneId,
    scriptContent,
    themeAccent,
    theme,
    language
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [analysisResult, setAnalysisResult] = useState<string>("");

    const handleGenerateAnalysis = async () => {
        setIsGenerating(true);
        // Mock generation for now - in real app this calls a psychoanalysis-specialized prompt
        setTimeout(() => {
            const mockAnalysis = language === 'EN' 
                ? "### Lacanian Topology Analysis\n\n**1. Object petty a ($):** The gaze in this scene functions as a void...\n**2. The Big Other:** The structural symbolic order is represented by the recurring architectural motif..."
                : "### 拉康拓扑学分析\n\n**1. 对象a ($):** 本场中的凝视功能表现为一个空洞...\n**2. 大他者:** 结构性的符号秩序由重复出现的建筑母题所代表...";
            setAnalysisResult(mockAnalysis);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className={`mt-4 rounded-xl border transition-all ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F9F7F1]' : 'border-zinc-800 bg-black/40'}`}>
            {/* Header */}
            <div 
                className={`px-4 py-3 flex items-center justify-between cursor-pointer ${isExpanded ? 'border-b border-zinc-800' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-purple-500/10 text-purple-400'}`}>
                        <Brain size={16} />
                    </div>
                    <div>
                        <h5 className={`text-xs font-bold uppercase tracking-wider ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-200'}`}>
                            {language === 'EN' ? "Psychoanalysis Engine" : "精神分析引擎"}
                        </h5>
                        <p className={`text-[9px] uppercase tracking-widest ${theme === 'retro' ? 'text-black/40' : 'text-zinc-500'}`}>
                            {language === 'EN' ? "Lacanian Topology & Desire Mapping" : "拉康拓扑学与欲望映射"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {isGenerating && (
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                            <Sparkles size={10} className="animate-pulse text-purple-400" />
                            <span className="text-[9px] font-bold text-purple-400 animate-pulse uppercase tracking-tighter">Analyzing...</span>
                        </div>
                    )}
                    {isExpanded ? <ChevronDown size={14} className="text-zinc-500" /> : <ChevronRight size={14} className="text-zinc-500" />}
                </div>
            </div>

            {/* Content Area */}
            {isExpanded && (
                <div className="p-4 animate-in slide-in-from-top-2 duration-200">
                    {!analysisResult && !isGenerating && (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="mb-4 opacity-20"><Activity size={40} className={themeAccent} /></div>
                            <p className="text-[10px] text-zinc-500 mb-4 max-w-[200px]">
                                {language === 'EN' ? "No analysis generated for this scene yet." : "本场尚未生成精神分析简报。"}
                            </p>
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleGenerateAnalysis(); }}
                                className={`h-8 px-4 rounded-lg flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 ${theme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]'}`}
                            >
                                <Zap size={12} />
                                {language === 'EN' ? "Engage Analysis" : "启动分析"}
                            </button>
                        </div>
                    )}

                    {analysisResult && (
                        <div className="space-y-4">
                            <div className={`p-4 rounded-lg border ${theme === 'retro' ? 'bg-white border-[#8B261D]/10 text-black' : 'bg-zinc-900 border-zinc-800 text-zinc-300'}`}>
                                <MarkdownRenderer content={analysisResult} theme={theme} themeAccent={themeAccent} />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button className={`p-2 rounded hover:bg-zinc-800 transition-colors ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'}`} title="Copy Analysis">
                                    <FileText size={14} />
                                </button>
                                <button 
                                    onClick={handleGenerateAnalysis}
                                    className={`p-2 rounded hover:bg-zinc-800 transition-colors ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'}`}
                                    title="Regenerate"
                                >
                                    <RotateCcw size={14} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const RotateCcw = ({ size, className }: { size: number, className: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
    </svg>
);
