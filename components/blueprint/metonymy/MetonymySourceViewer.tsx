
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { FileText, Loader2, Scissors, ListChecks, MousePointer2, Eye, Edit3, CheckSquare, Square, Undo2, Eraser, RefreshCcw, Plus, ChevronDown } from 'lucide-react';
import { BlueprintLanguage, ScreenplaySection } from '../../../types';
import { splitIntoParagraphs, getSceneColor } from '../../../utils/metonymyUtils';
import { ProcessingTimer } from '../../SharedBlueprintComponents';

import { BreakdownConfigModal } from './BreakdownConfigModal';

interface SourceViewerProps {
    text: string;
    onChange: (text: string) => void;
    lang: BlueprintLanguage;
    themeAccent: string;
    themeColorBase: string;
    activeSceneIndex: number;
    activeSceneId: string | null;
    scrollSyncTrigger?: number; // Added to force jump on re-click
    sections: ScreenplaySection[];
    onSendToActive: (targetId: string, indices: number[]) => void;
    onSendToNew: (indices: number[]) => void;
    onAutoBreakdown: (instruction?: string, targetCount?: number) => void;
    isBreakingDown: boolean;
    breakdownStartTime?: number | null;
}

export const SourceViewer: React.FC<SourceViewerProps> = ({
    text, onChange, lang, themeAccent, themeColorBase, activeSceneIndex, activeSceneId, scrollSyncTrigger, sections, onSendToActive, onSendToNew, onAutoBreakdown, isBreakingDown, breakdownStartTime
}) => {
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [selectedIndices, setSelectedIndices] = useState<Set<number>>(new Set());
    const [selectionHistory, setSelectionHistory] = useState<Set<number>[]>([]);
    const [targetSceneId, setTargetSceneId] = useState<string | null>(activeSceneId);
    const [isBreakdownModalOpen, setIsBreakdownModalOpen] = useState(false);

    // Measurement ref for fixing position
    const containerRef = useRef<HTMLDivElement>(null);


    const paragraphs = useMemo(() => {
        // User Request: Always show the original complete story in this module.
        // Do not switch to base script even if a preset is mounted.
        return splitIntoParagraphs(text);
    }, [text]);

    // Map paragraphs to their assigned scenes for visualization
    const paraToSceneMap = useMemo(() => {
        const map = new Map<number, { index: number; color: any; isActive: boolean; sectionId: string }>();
        sections.forEach((s, sIdx) => {
            const isActive = s.id === activeSceneId;
            const color = getSceneColor(sIdx);
            s.sourceIndices?.forEach(pIdx => {
                map.set(pIdx, { index: sIdx, color, isActive, sectionId: s.id });
            });
        });
        return map;
    }, [sections, activeSceneId]);

    // Get indices belonging to the currently active scene (for legacy compatibility/selection mode)
    const activeSceneIndices = useMemo(() => {
        if (!activeSceneId) return new Set<number>();
        const section = sections.find(s => s.id === activeSceneId);
        return new Set(section?.sourceIndices || []);
    }, [activeSceneId, sections]);

    // Update targetSceneId when activeSceneId changes
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (activeSceneId) {
            setTargetSceneId(activeSceneId);

            // Auto-scroll logic
            const activeSection = sections.find(s => s.id === activeSceneId);
            if (activeSection && activeSection.sourceIndices && activeSection.sourceIndices.length > 0) {
                const firstIndex = Math.min(...activeSection.sourceIndices);

                // Clear any existing timeout
                timeoutId = setTimeout(() => {
                    const el = document.getElementById(`source-para-${firstIndex}`);
                    if (el) {
                        // Changed block from 'center' to 'start' per user request ("偏上方")
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [activeSceneId, sections, scrollSyncTrigger]); // Added scrollSyncTrigger to deps

    // Toggle Selection Mode with Pre-fill logic
    const toggleSelectionMode = () => {
        if (!isSelectionMode) {
            // ENTERING selection mode: Pre-fill with current scene indices
            setSelectedIndices(new Set(activeSceneIndices));
        } else {
            // EXITING selection mode: Clear selection
            setSelectedIndices(new Set());
            setSelectionHistory([]);
        }
        setIsSelectionMode(!isSelectionMode);
    };

    const saveHistory = () => {
        setSelectionHistory(prev => [...prev, new Set(selectedIndices)]);
    };

    const handleUndo = () => {
        if (selectionHistory.length === 0) return;
        const previousState = selectionHistory[selectionHistory.length - 1];
        setSelectedIndices(previousState);
        setSelectionHistory(prev => prev.slice(0, -1));
    };

    const clearSelection = () => {
        saveHistory();
        setSelectedIndices(new Set());
    };

    const getSelectionRangeString = () => {
        const indices = Array.from(selectedIndices).sort((a: number, b: number) => a - b);
        if (indices.length === 0) return "";

        // Simple range display logic
        if (indices.length === 1) return `${Number(indices[0]) + 1}`;

        // Check if continuous
        let isContinuous = true;
        for (let i = 0; i < indices.length - 1; i++) {
            if (Number(indices[i + 1]) !== Number(indices[i]) + 1) {
                isContinuous = false;
                break;
            }
        }

        if (isContinuous) {
            return `${Number(indices[0]) + 1} - ${Number(indices[indices.length - 1]) + 1}`;
        } else {
            return `${indices.length} (Discontinuous)`;
        }
    };

    const handleParagraphClick = (index: number, e: React.MouseEvent) => {
        if (!isSelectionMode) return;

        if (e.shiftKey) {
            window.getSelection()?.removeAllRanges();
        }

        saveHistory();

        // Multi-select logic or toggle
        if (selectedIndices.has(index)) {
            const newSet = new Set(selectedIndices);
            newSet.delete(index);
            setSelectedIndices(newSet);
            return;
        }

        const list = Array.from(selectedIndices);
        const sortedIndices = list.sort((a, b) => Number(a) - Number(b));

        if (sortedIndices.length === 0) {
            setSelectedIndices(new Set([index]));
            return;
        }

        // Shift click for range
        if (e.shiftKey) {
            const start = Number(sortedIndices[0]);
            const end = Number(sortedIndices[sortedIndices.length - 1]);
            const newSet = new Set(selectedIndices);

            if (index < start) {
                for (let i = index; i < start; i++) newSet.add(i);
            } else if (index > end) {
                for (let i = end + 1; i <= index; i++) newSet.add(i);
            } else {
                // Middle click range logic? For now, simple toggle is safer if not shift
                // If shift click inside range, fill gaps?
                const minIdx = Math.min(index, start);
                const maxIdx = Math.max(index, end);
                for (let i = minIdx; i <= maxIdx; i++) {
                    newSet.add(i);
                }
            }
            setSelectedIndices(newSet);
            return;
        }

        // Regular click: Toggle
        const newSet = new Set(selectedIndices);
        newSet.add(index);
        setSelectedIndices(newSet);
    };

    const handleAction = (type: 'ASSIGN' | 'NEW') => {
        const indices = (Array.from(selectedIndices) as number[]).sort((a: number, b: number) => a - b);
        if (indices.length === 0) return;

        if (type === 'ASSIGN') {
            if (targetSceneId) {
                onSendToActive(targetSceneId, indices);
                setSelectedIndices(new Set());
                setIsSelectionMode(false);
            }
        } else {
            onSendToNew(indices);
            setSelectedIndices(new Set());
            setIsSelectionMode(false);
        }
    };

    // Removed check for isBreakingDown inside the click handler itself, rely on button disabled state
    const handleAutoBreakdownClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (text.trim().length === 0) return;
        setIsBreakdownModalOpen(true);
        // Task 4: Clicking Smart Breakdown should close selection mode
        setIsSelectionMode(false);
    };

    const handleConfirmBreakdown = (instruction: string, targetCount?: number) => {
        setIsBreakdownModalOpen(false);
        onAutoBreakdown(instruction, targetCount);
    };

    return (
        <div ref={containerRef} className="flex flex-col h-full bg-[#0a0a0a] border-r border-zinc-800 relative group">
            <div className="h-16 border-b border-zinc-800 flex justify-between items-center shrink-0 bg-[#0c0c0c] px-4">
                <div className="flex items-center gap-2 text-zinc-400 font-bold text-xs uppercase tracking-widest">
                    <FileText size={14} className={themeAccent} />
                    {lang === 'EN' ? "Full Story" : "完整故事"}
                    <span className="text-[10px] text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded">{paragraphs.length}</span>
                </div>
                <div className="flex items-center gap-2">
                    {!isEditing && (
                        <>
                            <button
                                onClick={handleAutoBreakdownClick}
                                disabled={isBreakingDown || text.trim().length === 0}
                                className={`h-9 px-4 rounded-lg bg-black border border-${themeColorBase}/50 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest ${themeAccent} hover:bg-${themeColorBase}/10 transition-all active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed`}
                                title={lang === 'EN' ? "Auto Break Down Scenes" : "AI 智能分场"}
                            >
                                {isBreakingDown ? <Loader2 size={12} className="animate-spin" /> : <Scissors size={12} />}
                                {lang === 'EN' ? "Breakdown" : "智能分场"}
                                {isBreakingDown && <ProcessingTimer startTime={breakdownStartTime} />}
                            </button>
                            <button
                                onClick={toggleSelectionMode}
                                className={`h-9 ${lang === 'EN' ? 'w-[124px]' : 'w-[104px]'} justify-center rounded-lg border flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-100 active:scale-95 shadow-sm ${isSelectionMode ? `${themeAccent.replace('text-', 'bg-')} text-black border-transparent` : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500'}`}
                            >
                                {isSelectionMode ? <ListChecks size={12} /> : <MousePointer2 size={12} />}
                                {lang === 'EN' ? (isSelectionMode ? "Mode: ON" : "Manual Mode") : (isSelectionMode ? "选择模式" : "手动分场")}
                            </button>
                        </>
                    )}
                    <button
                        onClick={() => { setIsEditing(!isEditing); setIsSelectionMode(false); }}
                        className={`h-9 ${lang === 'EN' ? 'w-[124px]' : 'w-[104px]'} justify-center rounded-lg bg-zinc-900 border border-zinc-700 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${isEditing ? 'text-white border-zinc-500 bg-zinc-800' : 'text-zinc-400 hover:text-white hover:border-zinc-500'} transition-all active:scale-95 shadow-sm`}
                        title={isEditing ? (lang === 'EN' ? "Preview" : "预览模式") : (lang === 'EN' ? "Edit" : "编辑模式")}
                    >
                        {isEditing ? <Eye size={12} /> : <Edit3 size={12} />}
                        <span className="hidden lg:inline">{isEditing ? (lang === 'EN' ? "PREVIEW" : "预览模式") : (lang === 'EN' ? "EDIT" : "编辑模式")}</span>
                    </button>
                </div>
            </div>

            <div className={`flex-1 overflow-y-auto custom-scrollbar p-0 bg-[#0a0a0a] relative ${isSelectionMode ? 'pb-80' : 'pb-10'}`}>
                {isEditing ? (
                    <textarea
                        value={text}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full h-full bg-transparent border-none resize-none focus:outline-none text-sm font-mono text-zinc-300 placeholder-zinc-700 leading-relaxed custom-scrollbar p-6"
                        placeholder={lang === 'EN' ? "Paste your story here..." : "在此粘贴完整故事..."}
                    />
                ) : (
                    <div className="flex flex-col min-h-full">
                        {paragraphs.map((para, idx) => {
                            const isSelected = selectedIndices.has(idx);
                            
                            // Get scene context for this paragraph
                            const sceneInfo = paraToSceneMap.get(idx);
                            const isInAnyScene = !!sceneInfo;
                            const isInActiveScene = sceneInfo?.isActive || false;
                            
                            // Use the specific scene color, fall back to active theme color
                            const currentSceneColor = sceneInfo?.color || getSceneColor(activeSceneIndex - 1);

                            let bgClass = "";
                            let borderClass = "border-l-2 border-r-2 border-transparent";
                            let borderTopClass = "";
                            let textClass = "text-zinc-400";
                            let sceneLabel = null;
                            let marker = null;

                            if (isSelectionMode) {
                                // Selection Mode Visuals
                                if (isSelected) {
                                    bgClass = "bg-white/10";
                                    // If part of active scene, keep the scene colored border
                                    if (isInActiveScene) {
                                        borderClass = `border-l-2 border-r-2 ${currentSceneColor.border}`;
                                    } else {
                                        borderClass = "border-l-2 border-r-2 border-white";
                                    }
                                    textClass = "text-white";
                                    marker = <CheckSquare size={14} className={isInActiveScene ? currentSceneColor.text : "text-white"} />;
                                } else {
                                    // Not selected but in mode
                                    bgClass = "hover:bg-zinc-900/50";
                                    textClass = "text-zinc-500";
                                    // If part of active scene, show subtle hint
                                    if (isInActiveScene) {
                                        borderClass = `border-l-2 border-r-2 ${themeAccent.replace('text-', 'border-').replace('400', '500')}/20`;
                                    }
                                    marker = <Square size={14} className="text-zinc-700" />;
                                }
                            } else {
                                // View Mode Visuals
                                if (isInAnyScene) {
                                    // Use Scene Block Visuals
                                    bgClass = currentSceneColor.activeBg;
                                    borderClass = `border-l-2 border-r-2 ${currentSceneColor.border}`;
                                    textClass = isInActiveScene ? "text-zinc-100" : "text-zinc-300";

                                    // Block Boundary Check
                                    const isStartOfBlock = idx === 0 || paraToSceneMap.get(idx - 1)?.sectionId !== sceneInfo.sectionId;
                                    if (isStartOfBlock) {
                                        borderTopClass = `border-t-2 ${currentSceneColor.border}`;
                                        if (isInActiveScene) {
                                            sceneLabel = (
                                                <div className="mb-2">
                                                    <span className={`
                                                        text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded
                                                        ${currentSceneColor.label}
                                                    `}>
                                                        {lang === 'EN' ? "ACTIVE SCENE" : "当前场次"}
                                                    </span>
                                                </div>
                                            );
                                        }
                                    }
                                } else {
                                    bgClass = "hover:bg-zinc-900/30";
                                }
                            }

                            // Calculate bottom border (either end of block border or divider)
                            const isEndOfBlock = isInAnyScene && (idx === paragraphs.length - 1 || paraToSceneMap.get(idx + 1)?.sectionId !== sceneInfo.sectionId);
                            let borderBottomClass = 'border-b border-zinc-900/50';
                            
                            if (!isSelectionMode && isInAnyScene) {
                                if (isEndOfBlock) {
                                    borderBottomClass = `border-b-2 ${currentSceneColor.border}`;
                                } else {
                                    borderBottomClass = 'border-b border-transparent';
                                }
                            }

                            return (
                                <div
                                    key={idx}
                                    id={`source-para-${idx}`}
                                    onClick={(e) => handleParagraphClick(idx, e)}
                                    className={`
                                        flex relative transition-all duration-150 group/para
                                        ${isSelectionMode ? 'cursor-pointer select-none' : ''}
                                        ${bgClass}
                                        ${borderClass}
                                        ${borderTopClass}
                                        ${borderBottomClass}
                                    `}
                                >
                                    <div className="w-12 shrink-0 flex flex-col items-center pt-4 relative bg-black/20 border-r border-zinc-800/50">
                                        <span className={`text-[10px] font-mono font-bold mb-2 ${isSelected ? 'text-white' : (isInActiveScene ? themeAccent : 'text-zinc-600')}`}>
                                            {idx + 1}
                                        </span>
                                        {isSelectionMode && (
                                            <div className={`transition-all`}>
                                                {marker}
                                            </div>
                                        )}
                                    </div>

                                    <div className={`flex-1 p-4 pl-5 font-serif text-sm leading-loose whitespace-pre-wrap transition-colors ${textClass}`}>
                                        {sceneLabel}
                                        {para}
                                    </div>
                                </div>
                            );
                        })}
                        {paragraphs.length === 0 && (
                            <div className="text-center text-zinc-600 italic py-10 text-sm">
                                {lang === 'EN' ? "No text available. Paste story in edit mode." : "暂无文本。请在编辑模式下粘贴故事。"}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {isSelectionMode && (
                <div 
                    className="absolute bottom-4 left-0 right-0 z-[500] flex justify-center animate-in slide-in-from-bottom-2 fade-in pointer-events-none"
                >
                    <div className="w-[calc(100%-2rem)] max-w-[420px] bg-zinc-950 border border-zinc-700 p-3 rounded-xl shadow-2xl flex flex-col gap-3 pointer-events-auto">
                        <div className="flex justify-between items-center text-[9px] text-zinc-400 font-bold uppercase tracking-wider border-b border-zinc-800 pb-2">
                            <div className="flex items-center gap-2">
                                <span>{lang === 'EN' ? "Selected Paragraphs" : "已选段落"}: <span className="text-white bg-zinc-800 px-1.5 py-0.5 rounded">{selectedIndices.size}</span></span>
                                <span className="text-zinc-700">|</span>
                                <span>Range: <span className={themeAccent}>{getSelectionRangeString()}</span></span>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={handleUndo} disabled={selectionHistory.length === 0} className={`flex items-center gap-1 transition-colors ${selectionHistory.length === 0 ? 'text-zinc-700' : 'text-zinc-400 hover:text-white'}`}>
                                    <Undo2 size={12} /> {lang === 'EN' ? "Undo" : "撤销"}
                                </button>
                                <button onClick={clearSelection} className="flex items-center gap-1 hover:text-white transition-colors">
                                    <Eraser size={12} /> {lang === 'EN' ? "Clear" : "清空"}
                                </button>
                            </div>
                        </div>

                        {/* Target Scene Selector */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                                <div className="px-2 text-[9px] font-bold text-zinc-400 uppercase tracking-widest shrink-0">
                                    {lang === 'EN' ? "Target Scene:" : "目标场次："}
                                </div>
                                <div className="relative flex-1">
                                    <select
                                        value={targetSceneId || ""}
                                        onChange={(e) => setTargetSceneId(e.target.value)}
                                        className="w-full bg-transparent text-[10px] font-bold text-white focus:outline-none appearance-none py-1.5 pl-2 pr-8 cursor-pointer"
                                    >
                                        <option value="" disabled>{lang === 'EN' ? "Select a Scene..." : "选择目标场次..."}</option>
                                        {sections.map((s, idx) => (
                                            <option key={s.id} value={s.id} className="bg-zinc-900 text-zinc-300">
                                                #{idx + 1} - {s.title}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleAction('ASSIGN')}
                                    disabled={selectedIndices.size === 0 || !targetSceneId}
                                    className={`flex-1 py-2 px-2 bg-${themeColorBase}/10 border border-${themeColorBase}/30 text-${themeColorBase} hover:bg-${themeColorBase}/20 rounded-lg flex items-center justify-center gap-2 transition-all text-[10px] font-bold disabled:opacity-50 disabled:cursor-not-allowed`}
                                    title="Sync selected text to target scene"
                                >
                                    <RefreshCcw size={14} />
                                    {lang === 'EN' ? "Sync to Target" : "同步至目标场次"}
                                </button>
                                <button
                                    onClick={() => handleAction('NEW')}
                                    disabled={selectedIndices.size === 0}
                                    className="flex-1 py-2 px-2 bg-zinc-800 border border-zinc-600 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-lg flex items-center justify-center gap-2 transition-all text-[10px] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                    title="Create new scene from selected text"
                                >
                                    <Plus size={14} /> {lang === 'EN' ? "Create New Scene" : "新建场次"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <BreakdownConfigModal
                isOpen={isBreakdownModalOpen}
                onClose={() => setIsBreakdownModalOpen(false)}
                onConfirm={handleConfirmBreakdown}
                lang={lang === 'EN' ? 'EN' : 'CN'}
                themeAccent={themeAccent}
            />
        </div>
    );
};
