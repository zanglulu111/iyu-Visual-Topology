import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NarrativeFieldState, BlueprintLanguage, DriverType, NarrativeBlockDef, PromptFocusState } from '../types';
import { DRIVERS } from '../constants';
import { buildTermFocusPatch, getAllSelectedTags, getFocusLimitReason, getFocusUnitKey, getSelectedFocusBlockMap, getSelectedFocusUnitMap, isFocusableBlock, MAX_FOCUS_TERMS } from '../utils/focusTerms';

import { useTheme } from '../contexts/ThemeContext';
import { Lock, Unlock, Shuffle, Trash2, Edit2, X, Check, Dice5, RotateCcw, Star } from 'lucide-react';

interface ProphecySlotProps {
    blockId: string;
    placeholderCN: string;
    placeholderEN: string;
    prefixCN?: string;
    prefixEN?: string;
    suffixCN?: string;
    suffixEN?: string;
    fieldState: NarrativeFieldState;
    lang: BlueprintLanguage;
    driverType: DriverType;
    onOpenLibrary(blockId: string, scrollToTag?: string): void;
    onRemoveTag(blockId: string, tag: string): void;
    onClearBlock: (blockId: string) => void;
    getItemDetails(tagName: string, blockId?: string): any;
    getBilingualText(text: string): string;
    ENGINE_BLOCKS: NarrativeBlockDef[];
    isSmall?: boolean;
    isTiny?: boolean;
    onRandomizeBlock: (blockId: string) => void;
    onToggleLockBlock: (blockId: string) => void;
    isBlockLocked: boolean;
    lockedTags?: Record<string, string[]>;
    onToggleTagLock?: (blockId: string, tag: string) => void;
    onRandomizeTag?: (blockId: string, tag: string) => void;
    getLibraryCount: (blockId: string) => number;
    onEditCustomDef?: (oldName: string, newName: string, def: string, core: string) => void;
    onAddCustomDef?: (name: string, def: string, core: string) => void;
    onManualUpdate?: (blockId: string, tags: string[]) => void;
    focusState?: PromptFocusState;
    onFocusStateChange?: (locks: PromptFocusState) => void;
    showLevelToggle?: boolean;
    hideAffixes?: boolean;
    tooltipPlacement?: 'auto' | 'above';
}

export const ProphecySlot: React.FC<ProphecySlotProps> = ({
    blockId, placeholderCN, placeholderEN, prefixCN = "", prefixEN = "", suffixCN = "", suffixEN = "",
    fieldState, lang, driverType, onOpenLibrary, onRemoveTag, onClearBlock, getItemDetails, getBilingualText, ENGINE_BLOCKS, isSmall = false, isTiny = false,
    onRandomizeBlock, onToggleLockBlock, isBlockLocked,
    lockedTags, onToggleTagLock, onRandomizeTag, getLibraryCount, onEditCustomDef, onAddCustomDef, onManualUpdate,
    focusState = {}, onFocusStateChange,
    showLevelToggle = false,
    hideAffixes = false,
    tooltipPlacement = 'auto'
}) => {
    const { theme } = useTheme();
    const isRetro = theme === 'retro';
    const isCommercial = driverType === DriverType.COMMERCIAL;
    const rawTags = fieldState[blockId];
    const tags = Array.isArray(rawTags) ? rawTags : (rawTags ? [String(rawTags)] : []);
    const blockDef = ENGINE_BLOCKS?.find(b => b.id === blockId);
    const libCount = getLibraryCount(blockId);
    const canFocusTerms = isFocusableBlock(blockId);
    const selectedFocusTags = getAllSelectedTags(fieldState);
    const focusUnitMap = getSelectedFocusUnitMap(fieldState);
    const focusBlockMap = getSelectedFocusBlockMap(fieldState);

    const [hoveredPortal, setHoveredPortal] = useState<{
        pos: { top: number; left: number };
        details: any;
        showAbove?: boolean;
    } | null>(null);

    const handleMouseEnter = (e: React.MouseEvent, details: any) => {
        if (!details) return;
        const rect = e.currentTarget.getBoundingClientRect();

        // Better positioning: if it's in the lower half of the screen, show above.
        // If it's in the upper half, show below.
        const showAbove = tooltipPlacement === 'above' ? true : rect.top > window.innerHeight / 2;

        setHoveredPortal({
            pos: {
                top: showAbove ? rect.top - 8 : rect.bottom + 8,
                left: Math.max(16, Math.min(rect.left, window.innerWidth - 360))
            },
            details,
            showAbove
        });
    };

    const handleMouseLeave = () => {
        setHoveredPortal(null);
    };

    const displayPlaceholder = lang === 'EN' ? placeholderEN : placeholderCN;
    const prefix = hideAffixes ? "" : (lang === 'EN' ? prefixEN : prefixCN);
    const suffix = hideAffixes ? "" : (lang === 'EN' ? suffixEN : suffixCN);

    let accentColor = 'text-[var(--text-header)] border-white/70';
    let labelColor = 'text-[var(--text-header)]';
    let containerClass = `inline-flex flex-wrap items-baseline gap-1.5 md:gap-2 mx-1.5 md:mx-2 relative group/slot align-middle ${isCommercial ? 'mist-commercial-prophecy-slot' : ''}`;
    let editAccent = 'text-[var(--text-main)] border-[var(--border-main)] focus:border-[var(--mist-active-accent)]';

    const driverDef = DRIVERS.find(d => d.id === driverType);
    const activeRetroAccent = driverDef?.retroAccent || 'var(--mist-active-accent)';

    if (theme === 'retro') {
        accentColor = 'text-[var(--mist-active-accent)] border-[var(--mist-active-accent)]';
        labelColor = 'text-[var(--mist-active-accent)]';
        editAccent = 'text-[var(--text-main)] border-[var(--border-main)] focus:border-[var(--mist-active-accent)]';
    }


    const textSize = isTiny ? 'text-xs' : (isSmall ? 'text-sm md:text-base' : 'text-xl md:text-3xl');
    const prefixSize = isTiny ? 'text-[10px]' : (isSmall ? 'text-sm md:text-base' : 'text-lg md:text-2xl');

    const [editingTag, setEditingTag] = useState<string | null>(null);
    const [isCreatingNew, setIsCreatingNew] = useState(false);
    const [editName, setEditName] = useState("");
    const [editDef, setEditDef] = useState("");
    const [editCore, setEditCore] = useState("");

    const handleEditClick = (tag: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const details = getItemDetails(tag, blockId);
        setEditingTag(tag);
        setIsCreatingNew(false);
        setEditName(tag);
        setEditDef(details?.def || "");
        setEditCore(details?.core || "");
    };

    const handleCreateClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setEditingTag(null);
        setIsCreatingNew(true);
        setEditName("");
        setEditDef("");
        setEditCore("");
    };

    const handleResetEdit = () => {
        setEditName("");
        setEditDef("");
        setEditCore("");
    };

    const handleCloseEdit = () => {
        setEditingTag(null);
        setIsCreatingNew(false);
        setEditName("");
        setEditDef("");
        setEditCore("");
    };

    const handleSaveEdit = () => {
        if (!editName.trim()) return;
        if (isCreatingNew) {
            if (onAddCustomDef && onManualUpdate) {
                onAddCustomDef(editName, editDef, editCore);
                onManualUpdate(blockId, [editName]);
            }
        } else if (editingTag && onEditCustomDef) {
            onEditCustomDef(editingTag, editName, editDef, editCore);
        }
        handleCloseEdit();
    };

    const toggleFocusTag = (tag: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const patch = buildTermFocusPatch(focusState, blockId, tags, tag, !focusState[tag], selectedFocusTags, focusUnitMap, focusBlockMap);
        if (patch) onFocusStateChange?.(patch);
    };

    return (
        <div className={containerClass}>
            {prefix && <span className={`font-serif ${prefixSize} font-light select-none whitespace-nowrap self-start mt-0.5 text-[var(--text-main)]`}>{prefix}</span>}

            {tags.length > 0 ? (
                tags.map((tag, idx) => {
                    const details = getItemDetails(tag, blockId) as { nameEn?: string; def?: string; core?: string; defEn?: string; coreEn?: string } | null;
                    const displayTag = lang === 'EN' && details?.nameEn ? details.nameEn : getBilingualText(tag);
                    const isTagLocked = lockedTags?.[blockId]?.includes(tag) || isBlockLocked;
                    const isFocusedTag = Boolean(focusState[tag]);
                    const focusLimitReason = getFocusLimitReason(focusState, blockId, tag, selectedFocusTags, focusUnitMap, focusBlockMap);
                    const isFocusDisabled = !isFocusedTag && Boolean(focusLimitReason);
                    const focusLimitTitle = focusLimitReason === 'm'
                        ? (lang === 'EN' ? 'Focus limit: max 2 M-axis terms' : 'M层重点最多2个')
                        : focusLimitReason === 'surface'
                            ? (lang === 'EN' ? 'Focus limit: max 2 SUR/SV focus groups' : 'SUR/SV重点最多2组')
                            : (lang === 'EN' ? `Focus limit: max ${MAX_FOCUS_TERMS} focus groups` : `重点最多 ${MAX_FOCUS_TERMS} 组`);
                    const activeAccent = isTagLocked
                        ? (theme === 'retro'
                            ? `mist-prophecy-slot-active mist-token-locked text-white border-[var(--mist-active-accent)] border bg-[var(--mist-active-accent)]/10 px-2`
                            : 'mist-prophecy-slot-active mist-token-locked border border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]/15 px-2')
                        : (isTiny
                            ? `mist-prophecy-slot-active border ${accentColor} ${isRetro ? 'bg-[var(--bg-card)]' : 'bg-zinc-900/70'} px-2 py-0.5 shadow-sm ${theme === 'retro' ? '' : 'hover:bg-zinc-800'}`
                            : `mist-prophecy-slot-active border-b ${accentColor} px-0.5 ${theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-white/10'}`);

                    return (
                        <div
                            key={tag}
                            className="flex flex-col items-start relative group/item align-top"
                            onMouseEnter={(e) => details && handleMouseEnter(e, details)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center whitespace-nowrap">
                                <span
                                    className={`mist-labyrinth-hover-token transition-all duration-300 hover:z-50 align-top ${activeAccent} ${isFocusedTag ? 'mist-token-focused' : ''} ${textSize} font-serif font-bold ${isTagLocked ? 'cursor-not-allowed' : (isRetro ? 'cursor-pointer text-black' : 'cursor-pointer text-white')} tracking-wide whitespace-nowrap inline-block`}
                                    onClick={() => !isTagLocked && onOpenLibrary(blockId, tag)}
                                >
                                    {displayTag}
                                </span>
                                {isFocusedTag && (
                                    <span className="mist-token-focus-badge" title={lang === 'EN' ? 'Focused term' : '重点词条'}>
                                        <Star size={11} className="fill-current" />
                                    </span>
                                )}
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); onRemoveTag(blockId, tag); }}
                                    disabled={isTagLocked}
                                    title={lang === 'EN' ? 'Remove' : '删除'}
                                    aria-label={lang === 'EN' ? `Remove ${tag}` : `删除 ${tag}`}
                                    className={`ml-1 inline-flex h-5 w-5 items-center justify-center opacity-0 group-hover/item:opacity-100 transition-colors duration-200 ${isRetro ? 'text-[var(--text-muted)] hover:text-red-700' : 'text-zinc-500 hover:text-red-400'} ${isTagLocked ? 'opacity-20 cursor-not-allowed group-hover/item:opacity-20' : ''}`}
                                >
                                    <X size={16} strokeWidth={2.6} />
                                </button>
                                {idx < tags.length - 1 && <span className="text-zinc-600 font-serif text-sm ml-0.5 mr-1 select-none font-bold">,</span>}
                            </div>

                            {!isTiny && (
                                <div className={`absolute top-[calc(100%+3px)] left-0 flex items-center gap-1 z-10 opacity-0 group-hover/item:opacity-100 transition-all duration-300 ${isRetro ? 'bg-[var(--bg-panel)]/80 backdrop-blur' : 'bg-black/80 backdrop-blur'} rounded p-1 border shadow-md ${isRetro ? 'border-[var(--border-main)]/40' : 'border-zinc-800'}`}>
                                    <button onClick={(e) => { e.stopPropagation(); onRandomizeTag?.(blockId, tag); }} disabled={isTagLocked} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`}>
                                        <Dice5 size={10} />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); if (isBlockLocked) onToggleLockBlock(blockId); else onToggleTagLock?.(blockId, tag); }} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? (isRetro ? 'border-[var(--text-accent)] text-white bg-[var(--text-accent)]/10' : 'border-[var(--mist-active-accent)] text-white bg-[var(--mist-active-accent)]/20') : ''}`}>
                                        {isTagLocked ? <Lock size={10} /> : <Unlock size={10} />}
                                    </button>
                                    {canFocusTerms && (
                                        <button
                                            onClick={(e) => toggleFocusTag(tag, e)}
                                            disabled={isFocusDisabled}
                                            title={isFocusDisabled ? focusLimitTitle : (lang === 'EN' ? 'Focus this term' : '重点')}
                                            className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-[var(--mist-active-accent)] hover:bg-[rgba(var(--mist-active-accent-rgb),0.10)] hover:text-[var(--mist-active-accent)]'} border rounded transition-colors ${isFocusedTag ? (isRetro ? 'border-[var(--mist-active-accent)] text-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]/10' : 'border-[var(--mist-active-accent)] text-[var(--mist-active-accent)] bg-[rgba(var(--mist-active-accent-rgb),0.10)]') : ''} ${isFocusDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            <Star size={10} className={isFocusedTag ? 'fill-current' : ''} />
                                        </button>
                                    )}
                                </div>
                            )}

                            {isTiny && (
                                <div className="absolute top-full left-0 z-50 flex gap-1 mt-1 opacity-0 group-hover/item:opacity-100 transition-opacity bg-black border border-zinc-800 p-0.5 rounded shadow-lg">
                                    <button onClick={(e) => { e.stopPropagation(); onRandomizeTag?.(blockId, tag); }} disabled={isTagLocked} className={`p-1 hover:text-white text-zinc-400 ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Dice5 size={10} /></button>
                                    <button onClick={(e) => { e.stopPropagation(); if (isBlockLocked) onToggleLockBlock(blockId); else onToggleTagLock?.(blockId, tag); }} className={`p-1 hover:text-white text-zinc-400 ${isTagLocked ? 'text-white' : ''}`}>{isTagLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>
                                    {canFocusTerms && (
                                        <button onClick={(e) => toggleFocusTag(tag, e)} disabled={isFocusDisabled} className={`p-1 ${isFocusedTag ? 'text-[var(--mist-active-accent)]' : 'text-zinc-400 hover:text-[var(--mist-active-accent)]'} ${isFocusDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}><Star size={10} className={isFocusedTag ? 'fill-current' : ''} /></button>
                                    )}
                                </div>
                            )}

                        </div>
                    );
                })
            ) : (
                <div
                    className={`flex flex-col items-start group/item relative cursor-pointer align-top ${isBlockLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onMouseEnter={(e) => blockDef && handleMouseEnter(e, {
                        def: blockDef.description,
                        defEn: blockDef.descriptionEn,
                        core: "",
                        coreEn: ""
                    })}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        onClick={() => !isBlockLocked && onOpenLibrary(blockId)}
                        className="flex items-center"
                    >
                        <span className={`mist-labyrinth-hover-token mist-prophecy-slot-empty ${textSize} font-serif font-bold px-0.5 tracking-wide whitespace-nowrap transition-all duration-300 hover:z-50 inline-block ${theme === 'retro' ? 'text-zinc-500 hover:text-black' : 'text-zinc-500 hover:text-white'} ${isTiny ? 'border border-dashed border-zinc-700 px-2 py-0.5 hover:border-zinc-500' : 'border-b border-zinc-800 hover:border-zinc-600'} transition-all`}>
                            {isTiny ? displayPlaceholder : (isSmall ? `[${displayPlaceholder}]` : `[ ${displayPlaceholder} ]`)}
                        </span>
                    </div>
                    <div className={`absolute top-[calc(100%+3px)] left-0 flex items-center gap-1 z-10 opacity-0 group-hover/item:opacity-100 transition-all duration-300 ${isRetro ? 'bg-[var(--bg-panel)]/80 backdrop-blur' : 'bg-black/80 backdrop-blur'} rounded p-1 border shadow-md ${isRetro ? 'border-[var(--border-main)]/40' : 'border-zinc-800'}`}>
                        <button onClick={(e) => { e.stopPropagation(); onRandomizeBlock(blockId); }} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors`}>
                            <Dice5 size={10} />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); onToggleLockBlock(blockId); }} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isBlockLocked ? (isRetro ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'text-white border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]/20') : ''}`}>
                            {isBlockLocked ? <Lock size={10} /> : <Unlock size={10} />}
                        </button>
                        <button onClick={handleCreateClick} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isBlockLocked ? 'opacity-30 cursor-not-allowed' : ''}`}>
                            <Edit2 size={10} />
                        </button>
                    </div>

                </div>
            )}

            {(editingTag || isCreatingNew) && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={(e) => { e.stopPropagation(); handleCloseEdit(); }}>
                    <div className="bg-[var(--bg-card)] border border-[var(--border-main)] p-6 rounded-xl shadow-2xl w-80 relative transition-colors duration-500" onClick={(e) => e.stopPropagation()}>
                        <button onClick={handleCloseEdit} className="absolute top-4 right-4 text-zinc-400 hover:text-white"><X size={16} /></button>
                        <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${labelColor}`}>{isCreatingNew ? (lang === 'EN' ? "Create Custom Item" : "创建自定义词条") : (lang === 'EN' ? "Customize Item" : "自定义词条")}</h3>
                        <div className="space-y-3">
                            <div>
                                <label className={`text-[10px] ${isRetro ? 'text-[var(--text-muted)]' : 'text-zinc-400'} uppercase font-bold block mb-1`}>{lang === 'EN' ? "Name" : "名称"}</label>
                                <input
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    className={`w-full ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)] text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-white'} rounded px-2 py-1.5 text-xs focus:outline-none ${editAccent}`}
                                    placeholder={lang === 'EN' ? "Enter Tag Name" : "输入词条名称"}
                                />
                            </div>
                            <div>
                                <label className={`text-[10px] ${isRetro ? 'text-[var(--text-muted)]' : 'text-zinc-400'} uppercase font-bold block mb-1`}>{lang === 'EN' ? "Core Logic" : "核心逻辑"}</label>
                                <input
                                    value={editCore}
                                    onChange={(e) => setEditCore(e.target.value)}
                                    className={`w-full ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)] text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-300'} rounded px-2 py-1.5 text-xs focus:outline-none ${editAccent}`}
                                    placeholder={lang === 'EN' ? "Optional logic..." : "可选核心逻辑..."}
                                />
                            </div>
                            <div>
                                <label className={`text-[10px] ${isRetro ? 'text-[var(--text-muted)]' : 'text-zinc-400'} uppercase font-bold block mb-1`}>{lang === 'EN' ? "Definition" : "详细定义"}</label>
                                <textarea
                                    value={editDef}
                                    onChange={(e) => setEditDef(e.target.value)}
                                    className={`w-full ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)] text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-300'} rounded px-2 py-1.5 text-xs focus:outline-none resize-none h-20 ${editAccent}`}
                                    placeholder={lang === 'EN' ? "Detailed definition..." : "详细定义描述..."}
                                />
                            </div>
                            <div className="flex justify-between pt-2">
                                <button onClick={handleResetEdit} className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider ${isRetro ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] border-[var(--border-main)] hover:text-red-700' : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:text-red-400 hover:border-red-500/50'} border transition-colors flex items-center gap-2`} title={lang === 'EN' ? "Clear Inputs" : "清空输入"}><RotateCcw size={12} /> {lang === 'EN' ? "Reset" : "重置"}</button>
                                <button onClick={handleSaveEdit} className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider ${isRetro ? 'bg-[var(--text-accent)] text-white hover:bg-opacity-90' : 'bg-white text-black hover:bg-zinc-200'} transition-colors flex items-center gap-2`}><Check size={12} /> {lang === 'EN' ? "Save" : "保存"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {suffix && <span className={`font-serif ${prefixSize} font-light select-none whitespace-nowrap self-start mt-0.5 text-[var(--text-main)]`}>{suffix}</span>}
            {showLevelToggle && (
                <button
                    onClick={(e) => { e.stopPropagation(); onOpenLibrary(blockId); }}
                    className={`w-10 h-10 flex items-center justify-center border font-mono text-sm font-bold transition-all self-center shrink-0 ml-1 ${isRetro ? 'border-[var(--mist-active-accent)] text-[var(--mist-active-accent)] bg-[#F9F7F1] hover:bg-[var(--mist-active-accent)] hover:text-white' : 'border-zinc-700 text-zinc-400 bg-zinc-900/20 hover:border-zinc-500 hover:text-white'} rounded active:scale-90`}
                >
                    {(() => {
                        const currentTag = tags[0] || "";
                        const match = currentTag.match(/^L([1-5])/);
                        return match ? `L${match[1]}` : "L3";
                    })()}
                </button>
            )}
            {hoveredPortal && !editingTag && !isCreatingNew && createPortal(
                <div
                    className={`mist-labyrinth-tooltip fixed z-[9999] pointer-events-none ${hoveredPortal.showAbove ? '-translate-y-full' : ''}`}
                    style={{
                        top: hoveredPortal.pos.top,
                        left: hoveredPortal.pos.left
                    }}
                >
                    <div className="mist-labyrinth-tooltip-header">
                        <span>
                            {lang === 'EN' && blockDef?.enName ? blockDef.enName : blockDef?.name}
                            {libCount > 0 && <b>({libCount})</b>}
                        </span>
                    </div>
                    <div className="mist-labyrinth-tooltip-def">
                        {lang === 'EN' && hoveredPortal.details.defEn ? hoveredPortal.details.defEn : hoveredPortal.details.def}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};
