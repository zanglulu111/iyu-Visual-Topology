
import React from 'react';
import { ArrowLeft, Settings2, PenTool, Anchor, Undo2, Redo2, User as UserIcon, Ghost, Box, Sparkles, Check, Terminal, Activity, ListTodo, RotateCcw, RotateCw, ChevronRight, Zap, MessageSquare } from 'lucide-react';
import { DriverType, WorldLawConfig } from '../types';
import { FooterActions } from './FooterActions';
import { ProcessingTimer } from './SharedBlueprintComponents';
import { TaskManagerPanel } from './TaskManagerPanel';
import { globalTaskManager } from '../services/taskManager';

interface EngineBottomBarProps {
    lang: 'CN' | 'EN';
    selectedDriver: DriverType | null;
    isSkinOpen: boolean;
    setIsSkinOpen: (v: boolean) => void;
    isVisionOpen: boolean;
    setIsVisionOpen: (v: boolean) => void;
    isAestheticInputOpen?: boolean;
    setIsAestheticInputOpen?: (v: boolean) => void;
    worldLawConfig: WorldLawConfig;
    setIsWorldLawOpen: (v: boolean) => void;
    handleBackStep: () => void;
    handleUndo: () => void;
    handleRedo: () => void;
    pastStatesLength: number;
    futureStatesLength: number;
    subjectType: 'HUMAN' | 'CREATURE';
    setSubjectType: (type: 'HUMAN' | 'CREATURE') => void;
    handleAestheticSmartRandom: () => void;
    handleCopyAestheticPrompt: () => void;
    handleGlobalReset: () => void;
    handleGlobalRandomize: () => void;
    handleRandomizeFormulaOnly: () => void;
    handleResetFormulaOnly: () => void;
    promptCopied: boolean;
    isGenerating: boolean;
    traverseStartTime: number | null;
    handleTraverseFantasy: (force: boolean) => void;
    hasFieldState: boolean;
    onRandomizeBlock?: (blockId: string) => void;
    onClearBlock?: (blockId: string) => void;
}

export const EngineBottomBar: React.FC<EngineBottomBarProps> = ({
    lang,
    selectedDriver,
    isSkinOpen,
    setIsSkinOpen,
    isVisionOpen,
    setIsVisionOpen,
    isAestheticInputOpen,
    setIsAestheticInputOpen,
    worldLawConfig,
    setIsWorldLawOpen,
    handleBackStep,
    handleUndo,
    handleRedo,
    pastStatesLength,
    futureStatesLength,
    subjectType,
    setSubjectType,
    handleAestheticSmartRandom,
    handleCopyAestheticPrompt,
    handleGlobalReset,
    handleGlobalRandomize,
    handleRandomizeFormulaOnly,
    handleResetFormulaOnly,
    promptCopied,
    isGenerating,
    traverseStartTime,
    handleTraverseFantasy,
    hasFieldState,
    onRandomizeBlock,
    onClearBlock
}) => {
    const [isTaskManagerOpen, setIsTaskManagerOpen] = React.useState(false);
    const [activeTaskCount, setActiveTaskCount] = React.useState(0);

    React.useEffect(() => {
        const unsubscribe = globalTaskManager.subscribe(tasks => {
            setActiveTaskCount(tasks.filter(t => t.status === 'generating').length);
        });
        return () => unsubscribe();
    }, []);

    const getFooterThemeColor = () => {
        if (selectedDriver === DriverType.COMMERCIAL) return 'text-cyan-400 hover:text-cyan-300';
        if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-purple-400 hover:text-purple-300';
        if (selectedDriver === DriverType.AESTHETIC) return 'text-rose-400 hover:text-rose-300';
        if (selectedDriver === DriverType.TRAILER) return 'text-orange-400 hover:text-orange-300';
        return 'text-gold-primary hover:text-amber-300';
    };

    const getThemeTextColor = () => {
        if (selectedDriver === DriverType.COMMERCIAL) return 'text-cyan-400';
        if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-purple-400';
        if (selectedDriver === DriverType.AESTHETIC) return 'text-rose-400';
        if (selectedDriver === DriverType.TRAILER) return 'text-orange-400';
        return 'text-gold-primary';
    };

    const getFooterButtonStyle = () => {
        if (selectedDriver === DriverType.COMMERCIAL) return 'bg-cyan-500 hover:bg-cyan-400 border-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.2)]';
        if (selectedDriver === DriverType.EXPERIMENTAL) return 'bg-purple-500 hover:bg-purple-400 border-purple-500 text-black shadow-[0_0_20px_rgba(168,85,247,0.2)]';
        if (selectedDriver === DriverType.AESTHETIC) return 'bg-rose-500 hover:bg-rose-400 border-rose-500 text-black shadow-[0_0_20px_rgba(244,63,94,0.2)]';
        if (selectedDriver === DriverType.TRAILER) return 'bg-orange-500 hover:bg-orange-400 border-orange-500 text-black shadow-[0_0_20px_rgba(251,146,60,0.2)]';
        return 'bg-gold-primary hover:bg-amber-400 border-gold-primary text-black shadow-[0_0_20px_rgba(212,175,55,0.2)]';
    };

    const getTraverseButtonLabel = () => {
        if (selectedDriver === DriverType.COMMERCIAL) return lang === 'EN' ? "SUTURE DESIRE" : "缝合欲望";
        if (selectedDriver === DriverType.EXPERIMENTAL) return lang === 'EN' ? "REDUCTION PHENOMENA" : "现象还原";
        if (selectedDriver === DriverType.AESTHETIC) return lang === 'EN' ? "GENERATE AESTHETIC" : "生成美学";
        if (selectedDriver === DriverType.TRAILER) return lang === 'EN' ? "CUT TRAILER" : "剪辑预告";
        return lang === 'EN' ? "TRAVERSE FANTASY" : "穿越幻想";
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between px-6 md:px-12 z-40">
            <div className="flex items-center gap-4 shrink-0">
                <button onClick={handleBackStep} className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-all duration-100 group min-w-[140px]" >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden md:inline">{lang === 'CN' ? "返回首页" : "Home"}</span>
                </button>
            </div>

            <div className="flex-1 flex justify-center items-center gap-4 md:gap-6 mx-4 overflow-x-auto no-scrollbar">
                {selectedDriver === DriverType.AESTHETIC && setIsAestheticInputOpen && (
                    <button onClick={() => setIsAestheticInputOpen(!isAestheticInputOpen)} className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px]" >
                        <MessageSquare size={18} className={isAestheticInputOpen ? "text-rose-400" : "text-zinc-400"} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isAestheticInputOpen ? "text-rose-400" : "text-zinc-300"}`}>
                            {lang === 'CN' ? "自然输入" : "Input"}
                        </span>
                    </button>
                )}

                {selectedDriver !== DriverType.AESTHETIC && (
                    <button onClick={() => setIsSkinOpen(!isSkinOpen)} className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px]" >
                        <Settings2 size={18} className={isSkinOpen ? getThemeTextColor() : "text-zinc-400"} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isSkinOpen ? getThemeTextColor() : "text-zinc-400"}`}>
                            {lang === 'CN' ? (selectedDriver === DriverType.COMMERCIAL ? "商业执行单" : (selectedDriver === DriverType.EXPERIMENTAL ? "还原协议" : (selectedDriver === DriverType.TRAILER ? "预告片执行单" : "表层设定"))) : (selectedDriver === DriverType.COMMERCIAL ? "Brief" : (selectedDriver === DriverType.EXPERIMENTAL ? "Reduction" : (selectedDriver === DriverType.TRAILER ? "Trailer" : "Skin")))}
                        </span>
                    </button>
                )}
                <button onClick={() => setIsVisionOpen(!isVisionOpen)} className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px]" >
                    <PenTool size={18} className={selectedDriver === DriverType.AESTHETIC ? (isVisionOpen ? "text-rose-400" : "text-zinc-400") : (isVisionOpen ? getThemeTextColor() : "text-zinc-400")} />
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${selectedDriver === DriverType.AESTHETIC ? (isVisionOpen ? "text-rose-400" : "text-zinc-400") : (isVisionOpen ? getThemeTextColor() : "text-zinc-400")}`}>
                        {lang === 'CN' ? (selectedDriver === DriverType.COMMERCIAL ? "欲望输入" : selectedDriver === DriverType.AESTHETIC ? "反推解码" : "植入症候") : (selectedDriver === DriverType.AESTHETIC ? "Decoding" : "Input")}
                    </span>
                </button>

                <button onClick={() => setIsWorldLawOpen(true)} className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px]" >
                    <Anchor size={18} className={worldLawConfig.physics === 'UNBOUND' ? getThemeTextColor() : "text-zinc-400"} />
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${worldLawConfig.physics === 'UNBOUND' ? getThemeTextColor() : "text-zinc-400"}`}>{lang === 'CN' ? "世界法则" : "Law"}</span>
                </button>

                <div className="w-px h-8 bg-zinc-800 shrink-0"></div>
                {selectedDriver === DriverType.AESTHETIC && (
                    <>
                        <div className="flex bg-zinc-900 border border-zinc-700 rounded-lg p-1 shrink-0">
                            <button
                                onClick={handleUndo}
                                disabled={pastStatesLength === 0}
                                className={`p-2 transition-all rounded hover:bg-white/5 ${pastStatesLength === 0 ? 'opacity-30 grayscale cursor-not-allowed' : 'text-white'}`}
                                title={lang === 'CN' ? "撤销" : "Undo"}
                            >
                                <Undo2 size={18} className={pastStatesLength > 0 ? getFooterThemeColor() : 'text-zinc-600'} />
                            </button>
                            <div className="w-px h-4 bg-zinc-700 self-center mx-1"></div>
                            <button
                                onClick={handleRedo}
                                disabled={futureStatesLength === 0}
                                className={`p-2 transition-all rounded hover:bg-white/5 ${futureStatesLength === 0 ? 'opacity-30 grayscale cursor-not-allowed' : 'text-white'}`}
                                title={lang === 'CN' ? "重做" : "Redo"}
                            >
                                <Redo2 size={18} className={futureStatesLength > 0 ? getFooterThemeColor() : 'text-zinc-600'} />
                            </button>
                        </div>
                        <div className="w-px h-8 bg-zinc-800 shrink-0 mx-2"></div>
                        <div className="flex bg-zinc-900 border border-zinc-700 rounded-lg p-1 shrink-0">
                            <button onClick={() => setSubjectType('HUMAN')} className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${subjectType === 'HUMAN' ? 'bg-rose-500 text-black' : 'text-zinc-500 hover:text-white'}`} >
                                <UserIcon size={12} /> {lang === 'CN' ? "人类" : "Human"}
                            </button>
                            <button onClick={() => setSubjectType('CREATURE')} className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${subjectType === 'CREATURE' ? 'bg-rose-500 text-black' : 'text-zinc-500 hover:text-white'}`} >
                                <Ghost size={12} /> {lang === 'CN' ? "异种" : "Creature"}
                            </button>
                        </div>
                        <div className="w-px h-8 bg-zinc-800 shrink-0 mx-2"></div>
                        <button onClick={handleAestheticSmartRandom} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]" >
                            <Sparkles size={18} className="text-rose-400 group-hover:rotate-90 transition-transform" />
                            <span className="text-[9px] font-bold uppercase tracking-wider text-rose-400">{lang === 'CN' ? "灵感涌现" : "Inspiration Surge"}</span>
                        </button>

                        <button
                            onClick={handleCopyAestheticPrompt}
                            className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]"
                        >
                            {promptCopied ? <Check size={18} className="text-green-500" /> : <Terminal size={18} className="text-zinc-400 group-hover:text-rose-400 transition-colors" />}
                            <span className={`text-[9px] font-bold uppercase tracking-wider ${promptCopied ? 'text-green-500' : 'text-zinc-400 group-hover:text-rose-400'}`}>
                                {promptCopied ? (lang === 'CN' ? "已复制" : "Copied") : (lang === 'CN' ? "复制指令" : "Copy Prompt")}
                            </span>
                        </button>

                        <button onClick={handleGlobalReset} className="flex flex-col items-center gap-1.5 group text-zinc-300 hover:text-white transition-all duration-100 shrink-0 min-w-[60px]" >
                            <RotateCcw size={18} className="text-zinc-400 group-hover:text-rose-500 transition-colors" />
                            <span className="font-bold uppercase tracking-wider" style={{ fontSize: '9px' }}>{lang === 'CN' ? "全局重置" : "Reset All"}</span>
                        </button>
                    </>
                )}


                <FooterActions
                    selectedDriver={selectedDriver}
                    lang={lang}
                    handleGlobalRandomize={handleGlobalRandomize}
                    handleGlobalReset={handleGlobalReset}
                    handleRandomizeFormulaOnly={handleRandomizeFormulaOnly}
                    handleResetFormulaOnly={handleResetFormulaOnly}
                    handleUndo={handleUndo}
                    handleRedo={handleRedo}
                    canUndo={pastStatesLength > 0}
                    canRedo={futureStatesLength > 0}
                    getFooterThemeColor={getFooterThemeColor}
                />

                <div className="w-px h-8 bg-zinc-800 shrink-0"></div>

                <button
                    onClick={() => setIsTaskManagerOpen(!isTaskManagerOpen)}
                    className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px]"
                >
                    <div className="relative">
                        <Activity size={18} className={`transition-colors ${isTaskManagerOpen ? getThemeTextColor() : "text-zinc-400 hover:text-white"}`} />
                        {activeTaskCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-500 rounded-full text-[8px] flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                {activeTaskCount}
                            </span>
                        )}
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${isTaskManagerOpen ? getThemeTextColor() : "text-zinc-400 hover:text-white transition-all duration-100"}`}>
                        {lang === 'CN' ? '任务中心' : 'Tasks'}
                    </span>
                </button>
            </div>

            <div className="flex items-center gap-4 shrink-0">

                <button
                    onClick={() => handleTraverseFantasy(false)}
                    disabled={isGenerating || !hasFieldState}
                    className={`flex items-center gap-3 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group min-w-[180px] border ${getFooterButtonStyle()}`}
                >
                    {isGenerating ? <RotateCw size={16} className="animate-spin" /> : <Zap size={16} className="group-hover:scale-110 transition-transform" />}
                    <span className="tabular-nums w-full text-center">
                        {getTraverseButtonLabel()}
                        {isGenerating && <ProcessingTimer startTime={traverseStartTime} />}
                    </span>
                    {!isGenerating && <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                </button>
            </div>

            <TaskManagerPanel
                isOpen={isTaskManagerOpen}
                onClose={() => setIsTaskManagerOpen(false)}
                lang={lang}
            />
        </div>
    );
};

export default EngineBottomBar;
