import React, { useState, useEffect } from 'react';
import { NarrativeFieldState, BlueprintLanguage, DriverType, NarrativeBlockDef } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { Lock, Unlock, Shuffle, Trash2, Edit2, X, Check, Dice5, RotateCcw } from 'lucide-react';

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
    onOpenLibrary(blockId: string): void;
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
}

export const ProphecySlot: React.FC<ProphecySlotProps> = ({
    blockId, placeholderCN, placeholderEN, prefixCN = "", prefixEN = "", suffixCN = "", suffixEN = "",
    fieldState, lang, driverType, onOpenLibrary, onRemoveTag, onClearBlock, getItemDetails, getBilingualText, ENGINE_BLOCKS, isSmall = false, isTiny = false,
    onRandomizeBlock, onToggleLockBlock, isBlockLocked,
    lockedTags, onToggleTagLock, onRandomizeTag, getLibraryCount, onEditCustomDef, onAddCustomDef, onManualUpdate
}) => {
    const { theme } = useTheme();
    const isRetro = theme === 'retro';
    const rawTags = fieldState[blockId];
    const tags = Array.isArray(rawTags) ? rawTags : (rawTags ? [String(rawTags)] : []);
    const blockDef = ENGINE_BLOCKS?.find(b => b.id === blockId);
    const libCount = getLibraryCount(blockId);

    const displayPlaceholder = lang === 'EN' ? placeholderEN : placeholderCN;
    const prefix = lang === 'EN' ? prefixEN : prefixCN;
    const suffix = lang === 'EN' ? suffixEN : suffixCN;

    const isAesthetic = driverType === DriverType.AESTHETIC;
    const isCommercial = driverType === DriverType.COMMERCIAL;
    const isExperimental = driverType === DriverType.EXPERIMENTAL;
    const isTrailer = driverType === DriverType.TRAILER;

    let accentColor = 'text-gold-primary border-gold-primary';
    let labelColor = 'text-gold-primary';
    let labelBorder = 'border-gold-primary/40';
    let containerClass = "inline-flex flex-wrap items-baseline gap-1.5 md:gap-2 mx-1.5 md:mx-2 relative group/slot align-middle";
    let editAccent = 'text-gold-primary border-gold-primary focus:border-gold-primary';

    if (isCommercial) {
        accentColor = 'text-mist-cyan border-mist-cyan';
        labelColor = 'text-mist-cyan';
        labelBorder = 'border-mist-cyan/40';
        editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-mist-cyan' : 'text-cyan-400 border-cyan-400 focus:border-cyan-400';
    } else if (isExperimental) {
        accentColor = 'text-mist-purple border-mist-purple';
        labelColor = 'text-mist-purple';
        labelBorder = 'border-mist-purple/40';
        editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-mist-purple' : 'text-purple-400 border-purple-400 focus:border-purple-400';
    } else if (isAesthetic) {
        accentColor = 'text-mist-rose border-mist-rose';
        labelColor = 'text-mist-rose';
        labelBorder = 'border-mist-rose/40';
        editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-mist-rose' : 'text-rose-400 border-rose-400 focus:border-rose-400';
    } else if (isTrailer) {
        accentColor = 'text-mist-orange border-mist-orange';
        labelColor = 'text-mist-orange';
        labelBorder = 'border-mist-orange/40';
        editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-mist-orange' : 'text-orange-400 border-orange-400 focus:border-orange-400';
    } else {
        // Labyrinth of Eros (Default)
        accentColor = 'text-gold-primary border-gold-primary';
        labelColor = 'text-gold-primary';
        labelBorder = 'border-gold-primary/40';
        editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-gold-primary' : 'text-gold-primary border-gold-primary focus:border-gold-primary';
    }

    const textSize = isTiny ? 'text-xs' : (isSmall ? 'text-sm md:text-base' : 'text-xl md:text-3xl');
    const prefixSize = isTiny ? 'text-[10px]' : (isSmall ? 'text-sm md:text-base' : 'text-lg md:text-2xl');

    // Edit state
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
            // Create New
            if (onAddCustomDef && onManualUpdate) {
                onAddCustomDef(editName, editDef, editCore);
                // Assuming single selection logic for simplicity in direct edit, 
                // or just append if multi-select? 
                // Given the UI often implies replacing the placeholder, let's set it as the single tag for now 
                // or add to list if that's the expected behavior. 
                // Based on "Rapidly write custom tag on panel", usually means setting the value.
                onManualUpdate(blockId, [editName]);
            }
        } else if (editingTag && onEditCustomDef) {
            // Edit Existing
            onEditCustomDef(editingTag, editName, editDef, editCore);
        }

        handleCloseEdit();
    };

    return (
        <div className={containerClass}>
            {prefix && <span className={`font-serif ${prefixSize} font-light select-none whitespace-nowrap self-start mt-0.5 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>{prefix}</span>}

            {tags.length > 0 ? (
                tags.map((tag, idx) => {
                    const details = getItemDetails(tag, blockId) as { def?: string; core?: string; defEn?: string; coreEn?: string } | null;
                    const isTagLocked = lockedTags?.[blockId]?.includes(tag) || isBlockLocked;

                    const activeAccent = isTagLocked
                        ? (theme === 'retro' ? `text-black border-[var(--text-accent)] border bg-[var(--text-accent)]/10 rounded px-1` : (isCommercial ? 'text-cyan-400 border-cyan-400 border bg-cyan-900/20 rounded px-1' : (isExperimental ? 'text-purple-400 border-purple-400 border bg-purple-900/20 rounded px-1' : (isAesthetic ? 'text-rose-400 border-rose-400 border bg-rose-900/20 rounded px-1' : (isTrailer ? 'text-orange-400 border-orange-400 border bg-orange-900/20 rounded px-1' : 'text-gold-primary border-gold-primary border bg-amber-900/20 rounded px-1')))))
                        : (isTiny ? `border ${accentColor} ${isRetro ? 'bg-[var(--bg-card)]' : 'bg-zinc-900'} px-2 py-0.5 rounded shadow-sm hover:bg-zinc-800` : `border-b-2 ${accentColor} px-0.5 ${theme === 'retro' ? 'hover:bg-black/5' : 'hover:bg-white/10'} transition-colors`);

                    return (
                        <div key={tag} className="flex flex-col items-center relative group/item align-top">
                            <div className="flex items-center">
                                <div
                                    className={`flex items-center cursor-pointer ${activeAccent}`}
                                    onClick={() => !isTagLocked && onOpenLibrary(blockId)}
                                >
                                    <span className={`${textSize} font-serif font-bold ${isRetro ? 'text-black' : 'text-white'} tracking-wide whitespace-nowrap transition-all duration-300 hover:scale-110 hover:z-50 inline-block`}>
                                        {getBilingualText(tag)}
                                    </span>
                                </div>
                                {idx < tags.length - 1 && <span className="text-zinc-600 font-serif text-sm ml-0.5 mr-1 select-none font-bold">,</span>}
                            </div>

                            {!isTiny && (
                                <div className={`flex items-center gap-1 mt-1 z-10 ${isRetro ? 'bg-[var(--bg-panel)]' : 'bg-black/80'} rounded p-1 shadow-md border ${isRetro ? 'border-[var(--border-main)]/40' : 'border-zinc-800'}`}>
                                    <button onClick={(e) => { e.stopPropagation(); onRandomizeTag?.(blockId, tag); }} disabled={isTagLocked} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`} title="Randomize This Item"><Shuffle size={10} /></button>
                                    <button onClick={(e) => { e.stopPropagation(); onToggleTagLock?.(blockId, tag); }} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? (isRetro ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-rose-500/50 text-rose-500 bg-rose-900/20') : ''}`} title={isTagLocked ? "Unlock Item" : "Lock Item"}>{isTagLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>

                                    {/* Edit Button - Always visible in group hover */}
                                    <button
                                        onClick={(e) => handleEditClick(tag, e)}
                                        disabled={isTagLocked}
                                        className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        title={lang === 'EN' ? "Customize" : "自定义"}
                                    >
                                        <Edit2 size={10} />
                                    </button>

                                    <button onClick={(e) => { e.stopPropagation(); onRemoveTag(blockId, tag); }} disabled={isTagLocked} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400'} border rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`} title="Delete This Item"><Trash2 size={10} /></button>
                                </div>
                            )}

                            {isTiny && (
                                <div className="absolute top-full left-0 z-50 flex gap-1 mt-1 opacity-0 group-hover/item:opacity-100 transition-opacity bg-black border border-zinc-800 p-0.5 rounded shadow-lg">
                                    <button onClick={(e) => handleEditClick(tag, e)} className="p-1 hover:text-white text-zinc-400"><Edit2 size={10} /></button>
                                    <button onClick={(e) => { e.stopPropagation(); onRemoveTag(blockId, tag); }} className="p-1 hover:text-red-400 text-zinc-400"><Trash2 size={10} /></button>
                                </div>
                            )}

                            {/* HOVER TOOLTIP */}
                            {!editingTag && !isCreatingNew && details && (
                                <div className={`absolute left-0 z-[60] w-max max-w-[340px] text-left bg-zinc-950/95 backdrop-blur-xl border border-zinc-700/80 p-5 rounded-xl shadow-2xl opacity-0 group-hover/item:opacity-100 transition-all duration-100 pointer-events-none ${isAesthetic ? 'top-[calc(100%+0.5rem)]' : 'bottom-full mb-2'}`}>
                                    <div className="text-sm font-black text-zinc-400 uppercase tracking-[0.15em] mb-2 border-b border-white/10 pb-2 flex items-center gap-2">
                                        <span className={labelColor}>{lang === 'EN' && blockDef?.enName ? blockDef.enName : blockDef?.name}</span>
                                        {libCount > 0 && <span className="text-white ml-1">({libCount})</span>}
                                    </div>
                                    <div className="text-xs md:text-sm text-zinc-100 font-bold mb-3 leading-relaxed whitespace-pre-line">
                                        {lang === 'EN' && details.defEn ? details.defEn : details.def}
                                        <span className={`block text-[10px] italic mt-1 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>{lang === 'EN' && details.coreEn ? details.coreEn : details.core}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })
            ) : (
                <div className={`flex flex-col items-center group/item relative cursor-pointer align-top ${isBlockLocked ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <div onClick={() => !isBlockLocked && onOpenLibrary(blockId)} className="flex items-center">
                        <span className={`${textSize} font-serif font-bold px-0.5 tracking-wide whitespace-nowrap transition-all duration-300 hover:scale-110 hover:z-50 inline-block ${theme === 'retro' ? 'text-zinc-500 hover:text-black' : 'text-zinc-500 hover:text-white'} ${isTiny ? 'border border-dashed border-zinc-700 rounded px-2 py-0.5 hover:border-zinc-500' : 'border-b border-zinc-800 hover:border-zinc-600'} transition-all`}>
                            {isTiny ? displayPlaceholder : (isSmall ? `[${displayPlaceholder}]` : `[ ${displayPlaceholder} ]`)}
                        </span>
                    </div>
                    <div className={`flex items-center gap-1 mt-1 z-10 ${isRetro ? 'bg-[var(--bg-panel)]' : 'bg-black/80'} rounded p-1 border ${isRetro ? 'border-[var(--border-main)]/40' : 'border-zinc-800'} shadow-md`}>
                        <button onClick={(e) => { e.stopPropagation(); onRandomizeBlock(blockId); }} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors`}><Dice5 size={10} /></button>
                        <button onClick={(e) => { e.stopPropagation(); onToggleLockBlock(blockId); }} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isBlockLocked ? (isRetro ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : (isCommercial ? 'text-cyan-400 border-cyan-400' : isExperimental ? 'text-purple-400 border-purple-400' : isAesthetic ? 'text-rose-400 border-rose-400' : isTrailer ? 'text-orange-400 border-orange-400' : 'text-gold-primary border-gold-primary')) : ''}`}>{isBlockLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>

                        <button
                            onClick={handleCreateClick}
                            disabled={isBlockLocked}
                            className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isBlockLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                            title={lang === 'EN' ? "Create Custom Item" : "创建自定义词条"}
                        >
                            <Edit2 size={10} />
                        </button>

                        <button onClick={(e) => { e.stopPropagation(); onClearBlock(blockId); }} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${isRetro ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400'} border rounded transition-colors`}><Trash2 size={10} /></button>
                    </div>

                    {!isBlockLocked && !isCreatingNew && <span className={`absolute left-1/2 -translate-x-1/2 -top-6 px-2 py-0.5 rounded border text-[9px] font-mono font-black tracking-[0.1em] opacity-0 group-hover/item:opacity-100 transition-all duration-100 whitespace-nowrap z-50 pointer-events-none shadow-xl bg-black/95 ${labelColor} ${labelBorder}`}>
                        {lang === 'EN' && blockDef?.enName ? blockDef.enName : blockDef?.name} {libCount > 0 ? <span className="text-white ml-1">({libCount})</span> : ''}
                    </span>}
                </div>
            )}

            {/* COMMON EDIT MODAL */}
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
                                <button
                                    onClick={handleResetEdit}
                                    className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider ${isRetro ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] border-[var(--border-main)] hover:text-red-700' : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:text-red-400 hover:border-red-500/50'} border transition-colors flex items-center gap-2`}
                                    title={lang === 'EN' ? "Clear Inputs" : "清空输入"}
                                >
                                    <RotateCcw size={12} /> {lang === 'EN' ? "Reset" : "重置"}
                                </button>
                                <button
                                    onClick={handleSaveEdit}
                                    className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider ${isRetro ? 'bg-[var(--text-accent)] text-white hover:bg-opacity-90' : 'bg-white text-black hover:bg-zinc-200'} transition-colors flex items-center gap-2`}
                                >
                                    <Check size={12} /> {lang === 'EN' ? "Save" : "保存"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {suffix && <span className={`font-serif ${prefixSize} font-light select-none whitespace-nowrap self-start mt-0.5 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>{suffix}</span>}
        </div>
    );
};
