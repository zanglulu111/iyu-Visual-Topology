
import React from 'react';
import { ArrowLeft, Settings2, PenTool, Anchor, Scale, Undo2, Redo2, User as UserIcon, Ghost, Box, Sparkles, Check, Terminal, Activity, ListTodo, RotateCcw, RotateCw, ChevronRight, Zap, MessageSquare, Cpu } from 'lucide-react';
import { DriverType, WorldLawConfig, ViewMode } from '../types';
import { FooterActions } from './FooterActions';
import { ProcessingTimer } from './SharedBlueprintComponents';
import { useTheme } from '../contexts/ThemeContext';
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
    isTensionOpen?: boolean;
    setIsTensionOpen?: (v: boolean) => void;
    setIsPromptInspectorOpen?: (v: boolean) => void;
    isAdmin?: boolean;
    hideWorldLawControl?: boolean;
    viewMode?: ViewMode;
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
    setWorldLawConfig,
    isTensionOpen,
    setIsTensionOpen,
    setIsPromptInspectorOpen,
    isAdmin = false,
    hideWorldLawControl = false,
    viewMode
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

    const getFooterThemeColor = () => theme === 'retro'
        ? 'text-[var(--text-accent)] hover:text-[var(--text-accent)]'
        : 'text-[var(--text-header)] hover:text-[var(--text-header)]';

    const getThemeTextColor = () => theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--text-header)]';

    const getFooterButtonStyle = () => {
        if (theme === 'retro') return 'bg-[#8B261D] hover:bg-[#631B15] border-[#8B261D] text-white shadow-none';
        return 'mist-app-primary-action';
    };

    const getFooterAccentValue = () => 'var(--mist-active-accent)';

    const getTraverseButtonLabel = () => {
        if (selectedDriver === DriverType.COMMERCIAL) return lang === 'EN' ? "SUTURE DESIRE" : "缝合欲望";
        if (selectedDriver === DriverType.EXPERIMENTAL) return lang === 'EN' ? "TRANSLATE STORY" : "转译故事";
        if (selectedDriver === DriverType.AESTHETIC) return lang === 'EN' ? "GENERATE AESTHETIC" : "生成美学";
        if (selectedDriver === DriverType.TRAILER) return lang === 'EN' ? "CUT TRAILER" : "剪辑预告";
        return lang === 'EN' ? "GENERATE DIVERGENCES" : "生成分歧点";
    };

    const mutedFooterControlClass = 'text-[var(--text-muted)] group-hover:text-[var(--text-header)] transition-colors';
    const footerPanelClass = theme === 'retro'
        ? 'mist-app-footer-segment mist-world-law-panel bg-[var(--bg-panel)] border border-[var(--border-main)] shadow-none'
        : 'mist-app-footer-segment mist-world-law-panel bg-[#050505] border-2 border-[var(--mist-active-accent)] shadow-[0_0_24px_rgba(var(--mist-active-accent-rgb),0.12)]';
    const footerSegmentClass = 'mist-app-footer-segment';
    const footerActivePillClass = theme === 'retro'
        ? 'border-[var(--border-strong)] text-[var(--text-accent)] scale-105 bg-[var(--bg-card)]'
        : 'border-[var(--mist-active-accent)] text-[var(--text-header)] scale-105 bg-white/[0.06]';
    const footerInactivePillClass = 'bg-transparent border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]';
    const isLabyrinthFooter = selectedDriver === DriverType.NARRATIVE;

    return (
        <div
            className={`mist-app-footer ${selectedDriver === DriverType.AESTHETIC ? 'mist-aesthetic-footer' : ''} fixed bottom-0 left-0 right-0 h-14 bg-[var(--bg-header)] backdrop-blur-md border-t border-[var(--border-main)] flex items-center justify-between px-6 md:px-12 z-40 transition-colors duration-500 animate-page-dissolve`}
            style={{ ['--footer-accent' as any]: getFooterAccentValue() }}
        >
            <div className="flex items-center gap-4 shrink-0 w-[180px] md:w-[240px]">
                <button onClick={handleBackStep} className={`flex items-center gap-3 px-6 py-3 bg-[var(--bg-panel)]/50 hover:bg-[var(--bg-panel)] border border-[var(--border-main)] rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 group min-w-[140px] hover:scale-105 active:scale-95 ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`} >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden md:inline">{lang === 'CN' ? "返回首页" : "Home"}</span>
                </button>
            </div>
            <div className={`flex-1 flex justify-center items-center ${isLabyrinthFooter ? 'gap-3 md:gap-5' : 'gap-4 md:gap-6'} mx-4`}>
                {viewMode !== 'METONYMY' && (
                    <>
                        {selectedDriver !== DriverType.AESTHETIC && !isLabyrinthFooter && (
                            <button onClick={() => setIsSkinOpen(!isSkinOpen)} className={`mist-app-footer-control ${isSkinOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] group transition-all duration-300 hover:scale-105 active:scale-95`} >
                                <Settings2 size={18} className={isSkinOpen ? getThemeTextColor() : mutedFooterControlClass} />
                                <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${isSkinOpen ? getThemeTextColor() : mutedFooterControlClass}`}>
                                    {lang === 'CN' ? (selectedDriver === DriverType.COMMERCIAL ? "商业执行单" : (selectedDriver === DriverType.EXPERIMENTAL ? "脚本协议" : (selectedDriver === DriverType.TRAILER ? "预告片执行单" : "表层设定"))) : (selectedDriver === DriverType.COMMERCIAL ? "Brief" : (selectedDriver === DriverType.EXPERIMENTAL ? "Script" : (selectedDriver === DriverType.TRAILER ? "Trailer" : "Skin")))}
                                </span>
                            </button>
                        )}
                        {!isLabyrinthFooter && (
                            <button onClick={() => setIsVisionOpen(!isVisionOpen)} className={`mist-app-footer-control ${isVisionOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] group transition-all duration-300 hover:scale-105 active:scale-95`} >
                                <PenTool size={18} className={isVisionOpen ? getThemeTextColor() : mutedFooterControlClass} />
                                <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${isVisionOpen ? getThemeTextColor() : mutedFooterControlClass}`}>
                                    {lang === 'CN' ? (selectedDriver === DriverType.COMMERCIAL ? "欲望输入" : selectedDriver === DriverType.AESTHETIC ? "反推解码" : "植入症候") : (selectedDriver === DriverType.AESTHETIC ? "Decoding" : "Input")}
                                </span>
                            </button>
                        )}

                        {!hideWorldLawControl && (
                        <div className="relative flex flex-col items-center">
                            {/* Inline Expander - Horizontal Row above */}
                            {isWorldLawOpen && (
                                <div className="absolute bottom-[calc(100%+16px)] flex flex-col items-center gap-2 animate-in slide-in-from-bottom-4 fade-in duration-300 z-[100]">
                                    {/* Description Box - Matched with NarrativeEngineField Tooltip style */}
                                    <div className={`p-5 min-w-[300px] max-w-[320px] text-left shadow-[0_20px_50px_rgba(0,0,0,0.72)] relative overflow-hidden border ${footerPanelClass}`}>
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
                                                    <div className="text-sm font-black uppercase tracking-[0.2em] mb-2 border-b pb-2 text-[var(--text-muted)] border-[var(--border-main)]">
                                                        <span className="text-[var(--text-accent)]">
                                                            LV.{current?.val} {current?.cn}
                                                        </span>
                                                    </div>
                                                    <div className="text-[13px] font-bold leading-relaxed text-[var(--text-main)]">
                                                        {current?.desc}
                                                    </div>
                                                </div>
                                            );
                                        })()}
                                    </div>

                                    {/* 5-Button Row */}
                                    <div className={`flex items-center gap-2 border px-4 py-3 shadow-2xl ${footerPanelClass}`}>
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
                                                    }}
                                                    className={`w-12 h-12 rounded-full text-[10px] font-black transition-all flex flex-col items-center justify-center border-2 ${
                                                        worldLawConfig.gravity === val
                                                            ? footerActivePillClass
                                                            : footerInactivePillClass
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
                                className={`mist-app-footer-control ${isWorldLawOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 shrink-0 min-w-[70px] group transition-all duration-300 hover:scale-105 active:scale-95`}
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
                        )}

                        {setIsTensionOpen && !isLabyrinthFooter && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsTensionOpen(!isTensionOpen);
                                }}
                                className={`mist-app-footer-control ${isTensionOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 shrink-0 min-w-[70px] group transition-all duration-300 hover:scale-105 active:scale-95`}
                            >
                                <Cpu size={18} className={isTensionOpen ? getThemeTextColor() : mutedFooterControlClass} />
                                <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${isTensionOpen ? getThemeTextColor() : mutedFooterControlClass}`}>
                                    {lang === 'CN' ? "张力诊断" : "DIAGNOSTICS"}
                                </span>
                            </button>
                        )}

                        {!isLabyrinthFooter && <div className="w-px h-8 bg-[var(--border-main)] shrink-0"></div>}
                        {selectedDriver === DriverType.AESTHETIC && (
                            <>
                                <div className={`flex ${footerSegmentClass} border p-1 shrink-0 transition-all duration-300`}>
                                    <button
                                        onClick={handleUndo}
                                        disabled={pastStatesLength === 0}
                                        className={`p-2 transition-all rounded hover:bg-[var(--surface-hover)] ${pastStatesLength === 0 ? 'opacity-30 grayscale cursor-not-allowed' : 'text-[var(--text-main)]'}`}
                                        title={lang === 'CN' ? "撤销" : "Undo"}
                                    >
                                        <Undo2 size={18} className={pastStatesLength > 0 ? 'text-[var(--text-muted)] group-hover:text-[var(--text-accent)]' : 'text-[var(--text-subtle)]'} />
                                    </button>
                                    <div className="w-px h-4 bg-[var(--border-main)] self-center mx-1"></div>
                                    <button
                                        onClick={handleRedo}
                                        disabled={futureStatesLength === 0}
                                        className={`p-2 transition-all rounded hover:bg-[var(--surface-hover)] ${futureStatesLength === 0 ? 'opacity-30 grayscale cursor-not-allowed' : 'text-[var(--text-main)]'}`}
                                        title={lang === 'CN' ? "重做" : "Redo"}
                                    >
                                        <Redo2 size={18} className={futureStatesLength > 0 ? 'text-[var(--text-muted)] group-hover:text-[var(--text-accent)]' : 'text-[var(--text-subtle)]'} />
                                    </button>
                                </div>
                                <div className="w-px h-8 bg-[var(--border-main)] shrink-0 mx-2"></div>
                                <div className={`flex border p-1 shrink-0 transition-all duration-300 ${footerSegmentClass}`}>
                                    <button onClick={() => setSubjectType('HUMAN')} className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${subjectType === 'HUMAN' ? 'text-[var(--text-accent)] bg-[var(--surface-hover)] border-b border-[var(--mist-archive-red)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface-hover)]'}`} >
                                        <UserIcon size={12} /> {lang === 'CN' ? "人类" : "Human"}
                                    </button>
                                    <button onClick={() => setSubjectType('CREATURE')} className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${subjectType === 'CREATURE' ? 'text-[var(--text-accent)] bg-[var(--surface-hover)] border-b border-[var(--mist-archive-red)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface-hover)]'}`} >
                                        <Ghost size={12} /> {lang === 'CN' ? "异种" : "Creature"}
                                    </button>
                                </div>
                                <div className="w-px h-8 bg-[var(--border-main)] shrink-0 mx-2"></div>
                                <button onClick={handleAestheticSmartRandom} className="mist-app-footer-control flex flex-col items-center gap-1.5 group transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 min-w-[60px]" >
                                    <Sparkles size={18} className="text-[var(--text-muted)] group-hover:text-[var(--text-header)] group-hover:rotate-90 transition-transform" />
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text-header)]">{lang === 'CN' ? "灵感涌现" : "Inspiration Surge"}</span>
                                </button>

                                <button
                                    onClick={handleCopyAestheticPrompt}
                                    className={`mist-app-footer-control ${promptCopied ? 'is-active' : ''} flex flex-col items-center gap-1.5 group transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 min-w-[60px]`}
                                >
                                    {promptCopied ? <Check size={18} className="text-[var(--text-header)]" /> : <Terminal size={18} className="transition-colors text-[var(--text-muted)] group-hover:text-[var(--text-header)]" />}
                                    <span className={`text-[9px] font-bold uppercase tracking-wider ${promptCopied ? 'text-[var(--text-header)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-header)]'}`}>
                                        {promptCopied ? (lang === 'CN' ? "已复制" : "Copied") : (lang === 'CN' ? "复制指令" : "Copy Prompt")}
                                    </span>
                                </button>

                                <button onClick={handleGlobalReset} className="mist-app-footer-control flex flex-col items-center gap-1.5 group transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 min-w-[60px] text-[var(--text-muted)]" >
                                    <RotateCcw size={18} className="transition-colors text-[var(--text-muted)] group-hover:text-[var(--text-header)]" />
                                    <span className="font-bold uppercase tracking-wider group-hover:text-[var(--text-header)]" style={{ fontSize: '9px' }}>{lang === 'CN' ? "全局重置" : "Reset All"}</span>
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
                    </>
                )}

                {viewMode !== 'METONYMY' && <div className="w-px h-8 bg-[var(--border-main)] shrink-0"></div>}

                <button
                    onClick={() => setIsTaskManagerOpen(!isTaskManagerOpen)}
                    className={`mist-app-footer-control ${isTaskManagerOpen ? 'is-active' : ''} flex flex-col items-center gap-1.5 shrink-0 min-w-[60px] group transition-all duration-300 hover:scale-105 active:scale-95`}
                >
                    <div className="relative">
                        <Activity size={18} className={`transition-colors ${isTaskManagerOpen ? getThemeTextColor() : mutedFooterControlClass}`} />
                        {activeTaskCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[var(--mist-archive-red)] rounded-full text-[8px] flex items-center justify-center font-bold text-white shadow-[0_0_10px_var(--accent-glow)]">
                                {activeTaskCount}
                            </span>
                        )}
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${isTaskManagerOpen ? getThemeTextColor() : mutedFooterControlClass}`}>
                        {lang === 'CN' ? '任务中心' : 'Tasks'}
                    </span>
                </button>
            </div>

            <div className="flex items-center gap-4 shrink-0 w-[180px] md:w-[240px] justify-end">
                {viewMode !== 'METONYMY' && isAdmin && setIsPromptInspectorOpen && (
                    <button
                        onClick={() => setIsPromptInspectorOpen(true)}
                        className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 group border shrink-0 hover:scale-105 active:scale-95 bg-[var(--bg-panel)]/50 border-[var(--border-main)] hover:bg-[var(--bg-panel)] hover:border-[var(--border-accent)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
                        title={lang === 'CN' ? "X-RAY 指令透视" : "X-RAY Inspector"}
                    >
                        <Terminal size={18} className="group-hover:animate-pulse" />
                    </button>
                )}

                {viewMode !== 'METONYMY' && (
                    <button
                        onClick={() => handleTraverseFantasy(false)}
                        disabled={isGenerating || !hasFieldState}
                        className={`mist-traverse-action flex items-center gap-3 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group min-w-[180px] border hover:scale-105 active:scale-95 ${getFooterButtonStyle()}`}
                        style={{ boxShadow: 'none' }}
                    >
                        {isGenerating ? <RotateCw size={16} className="animate-spin" /> : <Zap size={16} className="group-hover:scale-110 transition-transform" />}
                        <span className="tabular-nums w-full text-center">
                            {getTraverseButtonLabel()}
                            {isGenerating && <ProcessingTimer startTime={traverseStartTime} />}
                        </span>
                        {!isGenerating && <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default EngineBottomBar;
