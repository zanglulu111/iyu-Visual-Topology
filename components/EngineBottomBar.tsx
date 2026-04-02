
import React from 'react';
import { ArrowLeft, Settings2, PenTool, Anchor, Scale, Undo2, Redo2, User as UserIcon, Ghost, Box, Sparkles, Check, Terminal, Activity, ListTodo, RotateCcw, RotateCw, ChevronRight, Zap, MessageSquare } from 'lucide-react';
import { DriverType, WorldLawConfig } from '../types';
import { FooterActions } from './FooterActions';
import { ProcessingTimer } from './SharedBlueprintComponents';
import { useTheme } from '../contexts/ThemeContext';
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
    isTaskManagerOpen: boolean;
    setIsTaskManagerOpen: (v: boolean) => void;
    isWorldLawOpen: boolean;
    setWorldLawConfig: (config: WorldLawConfig) => void;
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
    isWorldLawOpen,
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
    onClearBlock,
    isTaskManagerOpen,
    setIsTaskManagerOpen,
    setWorldLawConfig
}) => {
    const { theme } = useTheme();
    const [activeTaskCount, setActiveTaskCount] = React.useState(0);
    const [hoveredGravity, setHoveredGravity] = React.useState<number | null>(null);

    React.useEffect(() => {
        const unsubscribe = globalTaskManager.subscribe(tasks => {
            setActiveTaskCount(tasks.filter(t => t.status === 'generating').length);
        });
        return () => unsubscribe();
    }, []);

    const getFooterThemeColor = () => {
        if (theme === 'retro') return 'text-[#8B261D] hover:text-[#631B15]';
        if (selectedDriver === DriverType.COMMERCIAL) return 'text-cyan-400 hover:text-cyan-300';
        if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-purple-400 hover:text-purple-300';
        if (selectedDriver === DriverType.AESTHETIC) return 'text-rose-400 hover:text-rose-300';
        if (selectedDriver === DriverType.TRAILER) return 'text-orange-400 hover:text-orange-300';
        return 'text-gold-primary hover:text-amber-300';
    };

    const getThemeTextColor = () => {
        if (theme === 'retro') return 'text-[#8B261D]';
        if (selectedDriver === DriverType.COMMERCIAL) return 'text-cyan-400';
        if (selectedDriver === DriverType.EXPERIMENTAL) return 'text-purple-400';
        if (selectedDriver === DriverType.AESTHETIC) return 'text-rose-400';
        if (selectedDriver === DriverType.TRAILER) return 'text-orange-400';
        return 'text-gold-primary';
    };

    const getFooterButtonStyle = () => {
        if (theme === 'retro') return 'bg-[#8B261D] hover:bg-[#631B15] border-[#8B261D] text-white shadow-none';
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
        <div className="fixed bottom-0 left-0 right-0 h-14 bg-[var(--bg-header)] backdrop-blur-md border-t border-[var(--border-main)] flex items-center justify-between px-6 md:px-12 z-40 transition-colors duration-500 animate-page-dissolve">
            <div className="flex items-center gap-4 shrink-0 w-[180px] md:w-[240px]">
                <button onClick={handleBackStep} className={`flex items-center gap-3 px-6 py-3 bg-[var(--bg-panel)]/50 hover:bg-[var(--bg-panel)] border border-[var(--border-main)] rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 group min-w-[140px] hover:scale-105 active:scale-95 ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`} >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden md:inline">{lang === 'CN' ? "返回首页" : "Home"}</span>
                </button>
            </div>
            <div className="flex-1 flex justify-center items-center gap-4 md:gap-6 mx-4">

                {selectedDriver !== DriverType.AESTHETIC && (
                    <button onClick={() => setIsSkinOpen(!isSkinOpen)} className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] group transition-all duration-300 hover:scale-105 active:scale-95" >
                        <Settings2 size={18} className={isSkinOpen ? getThemeTextColor() : (theme === 'retro' ? "text-zinc-600 group-hover:text-black transition-colors" : "text-zinc-400 group-hover:text-white transition-colors")} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${isSkinOpen ? getThemeTextColor() : (theme === 'retro' ? "text-zinc-600 group-hover:text-black" : "text-zinc-400 group-hover:text-white")}`}>
                            {lang === 'CN' ? (selectedDriver === DriverType.COMMERCIAL ? "商业执行单" : (selectedDriver === DriverType.EXPERIMENTAL ? "还原协议" : (selectedDriver === DriverType.TRAILER ? "预告片执行单" : "表层设定"))) : (selectedDriver === DriverType.COMMERCIAL ? "Brief" : (selectedDriver === DriverType.EXPERIMENTAL ? "Reduction" : (selectedDriver === DriverType.TRAILER ? "Trailer" : "Skin")))}
                        </span>
                    </button>
                )}
                <button onClick={() => setIsVisionOpen(!isVisionOpen)} className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] group transition-all duration-300 hover:scale-105 active:scale-95" >
                    <PenTool size={18} className={selectedDriver === DriverType.AESTHETIC ? (isVisionOpen ? (theme === 'retro' ? "text-[#8B261D]" : "text-rose-400") : (theme === 'retro' ? "text-zinc-600 group-hover:text-black transition-colors" : "text-zinc-400 group-hover:text-white transition-colors")) : (isVisionOpen ? getThemeTextColor() : (theme === 'retro' ? "text-zinc-600 group-hover:text-black transition-colors" : "text-zinc-400 group-hover:text-white transition-colors"))} />
                    <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${selectedDriver === DriverType.AESTHETIC ? (isVisionOpen ? (theme === 'retro' ? "text-[#8B261D]" : "text-rose-400") : (theme === 'retro' ? "text-zinc-600 group-hover:text-black" : "text-zinc-400 group-hover:text-white")) : (isVisionOpen ? getThemeTextColor() : (theme === 'retro' ? "text-zinc-600 group-hover:text-black" : "text-zinc-400 group-hover:text-white"))}`}>
                        {lang === 'CN' ? (selectedDriver === DriverType.COMMERCIAL ? "欲望输入" : selectedDriver === DriverType.AESTHETIC ? "反推解码" : "植入症候") : (selectedDriver === DriverType.AESTHETIC ? "Decoding" : "Input")}
                    </span>
                </button>

                <div className="relative flex flex-col items-center">
                    {/* Inline Expander - Horizontal Row above */}
                    {isWorldLawOpen && (
                        <div className="absolute bottom-[calc(100%+16px)] flex flex-col items-center gap-2 animate-in slide-in-from-bottom-4 fade-in duration-300 z-[100]">
                            {/* Description Box - Matched with NarrativeEngineField Tooltip style */}
                            <div className={`p-5 rounded-xl min-w-[300px] max-w-[320px] text-left shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-xl border
                                ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#1A1814]' : 'bg-[#0a0a0a]/95 border-zinc-800'}`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                                {(() => {
                                    const levels = [
                                        { val: 1, cn: '写实', desc: '物理重力闭锁。严禁任何违法时代背景的物理常数。没有任何奇迹，死亡是绝对的，重力是必然的。' },
                                        { val: 2, cn: '合理', desc: '逻辑补完路径。超现实元素必须被赋予一个“科学或机械”的合理解释。' },
                                        { val: 3, cn: '缝合', desc: '魔幻现实主义。以现实为底，允许局部“缝合”超现实能指（即症状）。' },
                                        { val: 4, cn: '奇观', desc: '高概念幻想。科幻/魔幻逻辑公开运行，但需要基本的内部一致性。' },
                                        { val: 5, cn: '狂想', desc: '绝对无重力。允许所有标签无视物理常数进行疯狂拼贴、大杂烩。' }
                                    ];
                                    const activeVal = hoveredGravity || worldLawConfig.gravity;
                                    const current = levels.find(l => l.val === activeVal);
                                    return (
                                        <div className="flex flex-col relative z-10">
                                            <div className={`text-sm font-black uppercase tracking-[0.2em] mb-2 border-b pb-2 ${theme === 'retro' ? 'text-zinc-500 border-black/10' : 'text-zinc-500 border-white/10'}`}>
                                                <span className={theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'}>
                                                    LV.{current?.val} {current?.cn}
                                                </span>
                                            </div>
                                            <div className={`text-[13px] font-bold leading-relaxed ${theme === 'retro' ? 'text-black' : 'text-zinc-100'}`}>
                                                {current?.desc}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>

                            {/* 5-Button Row */}
                            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 shadow-2xl">
                                {[1, 2, 3, 4, 5].map((val) => {
                                    const level = [
                                        { val: 1, cn: '写实' },
                                        { val: 2, cn: '合理' },
                                        { val: 3, cn: '缝合' },
                                        { val: 4, cn: '奇观' },
                                        { val: 5, cn: '狂想' }
                                    ].find(l => l.val === val);
                                    
                                    return (
                                        <button
                                            key={val}
                                            onMouseEnter={() => setHoveredGravity(val)}
                                            onMouseLeave={() => setHoveredGravity(null)}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setWorldLawConfig({ gravity: val as any });
                                                setIsWorldLawOpen(false);
                                            }}
                                            className={`w-12 h-12 rounded-full text-[10px] font-black transition-all flex flex-col items-center justify-center border-2 ${
                                                worldLawConfig.gravity === val 
                                                    ? (theme === 'retro' ? 'bg-[#8B261D] border-[#8B261D] text-white scale-110 shadow-[0_0_15px_rgba(139,38,29,0.5)]' : 'bg-gold-primary border-gold-primary text-black scale-110 shadow-[0_0_15px_rgba(212,175,55,0.5)]') 
                                                    : 'bg-white/5 border-white/10 text-zinc-500 hover:text-white hover:border-white/30 hover:bg-white/10'
                                            }`}
                                        >
                                            <span className="opacity-50 text-[8px] mb-0.5">LV{val}</span>
                                            <span>{level?.cn}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsWorldLawOpen(!isWorldLawOpen);
                        }} 
                        className="flex flex-col items-center gap-1.5 shrink-0 min-w-[70px] group transition-all duration-300 hover:scale-105 active:scale-95" 
                    >
                        <Scale size={18} className={getThemeTextColor()} />
                        <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${getThemeTextColor()}`}>
                            {(() => {
                                const level = [
                                    { val: 1, cn: '写实' },
                                    { val: 2, cn: '合理' },
                                    { val: 3, cn: '缝合' },
                                    { val: 4, cn: '奇观' },
                                    { val: 5, cn: '狂想' }
                                ].find(l => l.val === worldLawConfig.gravity);
                                return level?.cn || (lang === 'CN' ? "世界法则" : "LAW");
                            })()}
                        </span>
                    </button>
                </div>

                <div className="w-px h-8 bg-[var(--border-main)] shrink-0"></div>
                {selectedDriver === DriverType.AESTHETIC && (
                    <>
                        <div className={`flex ${theme === 'retro' ? 'bg-[#F5F2E8]/80 border-black/10 shadow-sm' : 'bg-zinc-900/50 border-zinc-800'} border rounded-lg p-1 shrink-0 transition-all duration-300 hover:scale-105`}>
                            <button
                                onClick={handleUndo}
                                disabled={pastStatesLength === 0}
                                className={`p-2 transition-all rounded ${theme === 'retro' ? 'hover:bg-black/5' : 'hover:bg-white/5'} ${pastStatesLength === 0 ? 'opacity-30 grayscale cursor-not-allowed' : (theme === 'retro' ? 'text-black' : 'text-white')}`}
                                title={lang === 'CN' ? "撤销" : "Undo"}
                            >
                                <Undo2 size={18} className={pastStatesLength > 0 ? (theme === 'retro' ? 'text-zinc-700 group-hover:text-[#8B261D]' : (theme === 'dark' ? 'text-zinc-400 group-hover:text-white' : getFooterThemeColor())) : (theme === 'retro' ? 'text-zinc-300' : 'text-zinc-600')} />
                            </button>
                            <div className={`w-px h-4 ${theme === 'retro' ? 'bg-black/10' : 'bg-zinc-800'} self-center mx-1`}></div>
                            <button
                                onClick={handleRedo}
                                disabled={futureStatesLength === 0}
                                className={`p-2 transition-all rounded ${theme === 'retro' ? 'hover:bg-black/5' : 'hover:bg-white/5'} ${futureStatesLength === 0 ? 'opacity-30 grayscale cursor-not-allowed' : (theme === 'retro' ? 'text-black' : 'text-white')}`}
                                title={lang === 'CN' ? "重做" : "Redo"}
                            >
                                <Redo2 size={18} className={futureStatesLength > 0 ? (theme === 'retro' ? 'text-zinc-700 group-hover:text-[#8B261D]' : (theme === 'dark' ? 'text-zinc-400 group-hover:text-white' : getFooterThemeColor())) : (theme === 'retro' ? 'text-zinc-300' : 'text-zinc-600')} />
                            </button>
                        </div>
                        <div className="w-px h-8 bg-zinc-800 shrink-0 mx-2"></div>
                        <div className={`flex border rounded-lg p-1 shrink-0 transition-all duration-300 hover:scale-105 ${theme === 'retro' ? 'bg-[#F5F2E8]/80 border-black/10 shadow-sm' : 'bg-zinc-900 border-zinc-700'}`}>
                            <button onClick={() => setSubjectType('HUMAN')} className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${subjectType === 'HUMAN' ? (theme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-rose-500 text-black') : (theme === 'retro' ? 'text-zinc-500 hover:text-black hover:bg-black/5' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]')}`} >
                                <UserIcon size={12} /> {lang === 'CN' ? "人类" : "Human"}
                            </button>
                            <button onClick={() => setSubjectType('CREATURE')} className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${subjectType === 'CREATURE' ? (theme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-rose-500 text-black') : (theme === 'retro' ? 'text-zinc-500 hover:text-black hover:bg-black/5' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]')}`} >
                                <Ghost size={12} /> {lang === 'CN' ? "异种" : "Creature"}
                            </button>
                        </div>
                        <div className="w-px h-8 bg-zinc-800 shrink-0 mx-2"></div>
                        <button onClick={handleAestheticSmartRandom} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]" >
                            <Sparkles size={18} className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-rose-400'} group-hover:rotate-90 transition-transform`} />
                            <span className={`text-[9px] font-bold uppercase tracking-wider ${theme === 'retro' ? 'text-[#8B261D]' : 'text-rose-400'}`}>{lang === 'CN' ? "灵感涌现" : "Inspiration Surge"}</span>
                        </button>

                        <button
                            onClick={handleCopyAestheticPrompt}
                            className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]"
                        >
                            {promptCopied ? <Check size={18} className="text-green-500" /> : <Terminal size={18} className={`transition-colors ${theme === 'retro' ? 'text-zinc-400 group-hover:text-[#8B261D]' : 'text-zinc-400 group-hover:text-rose-400'}`} />}
                            <span className={`text-[9px] font-bold uppercase tracking-wider ${promptCopied ? 'text-green-500' : (theme === 'retro' ? 'text-zinc-400 group-hover:text-[#8B261D]' : 'text-zinc-400 group-hover:text-rose-400')}`}>
                                {promptCopied ? (lang === 'CN' ? "已复制" : "Copied") : (lang === 'CN' ? "复制指令" : "Copy Prompt")}
                            </span>
                        </button>

                        <button onClick={handleGlobalReset} className={`flex flex-col items-center gap-1.5 group transition-all duration-100 shrink-0 min-w-[60px] ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-300'}`} >
                            <RotateCcw size={18} className={`transition-colors ${theme === 'retro' ? 'text-zinc-500 group-hover:text-[#8B261D]' : 'text-zinc-400 group-hover:text-rose-500'}`} />
                            <span className={`font-bold uppercase tracking-wider ${theme === 'retro' ? 'group-hover:text-[#8B261D]' : 'group-hover:text-white'}`} style={{ fontSize: '9px' }}>{lang === 'CN' ? "全局重置" : "Reset All"}</span>
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
                    theme={useTheme().theme}
                />

                <div className="w-px h-8 bg-zinc-800 shrink-0"></div>

                <button
                    onClick={() => setIsTaskManagerOpen(!isTaskManagerOpen)}
                    className="flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] group transition-all duration-300 hover:scale-105 active:scale-95"
                >
                    <div className="relative">
                        <Activity size={18} className={`transition-colors ${isTaskManagerOpen ? getThemeTextColor() : (theme === 'retro' ? "text-zinc-600 group-hover:text-black" : "text-zinc-400 group-hover:text-white")}`} />
                        {activeTaskCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-500 rounded-full text-[8px] flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                {activeTaskCount}
                            </span>
                        )}
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${isTaskManagerOpen ? getThemeTextColor() : (theme === 'retro' ? "text-zinc-600 group-hover:text-black" : "text-zinc-400 group-hover:text-white")}`}>
                        {lang === 'CN' ? '任务中心' : 'Tasks'}
                    </span>
                </button>
            </div>

            <div className="flex items-center gap-4 shrink-0 w-[180px] md:w-[240px] justify-end">

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
        </div>
    );
};

export default EngineBottomBar;
