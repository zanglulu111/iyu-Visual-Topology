import React, { useState, useEffect } from 'react';
import { NarrativeFieldState, BlueprintLanguage, DriverType, NarrativeBlockDef } from '../types';
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
    let containerClass = "inline-flex flex-wrap items-baseline gap-1 mx-1 relative group/slot align-middle";
    let editAccent = 'text-gold-primary border-gold-primary focus:border-gold-primary';

    if (isCommercial) {
        accentColor = 'text-cyan-400 border-cyan-400';
        labelColor = 'text-cyan-400';
        labelBorder = 'border-cyan-500/40';
        editAccent = 'text-cyan-400 border-cyan-400 focus:border-cyan-400';
    } else if (isExperimental) {
        accentColor = 'text-purple-400 border-purple-400';
        labelColor = 'text-purple-400';
        labelBorder = 'border-purple-500/40';
        editAccent = 'text-purple-400 border-purple-400 focus:border-purple-400';
    } else if (isAesthetic) {
        accentColor = 'text-rose-400 border-rose-400';
        labelColor = 'text-rose-400';
        labelBorder = 'border-rose-400/40';
        editAccent = 'text-rose-400 border-rose-400 focus:border-rose-400';
    } else if (isTrailer) {
        accentColor = 'text-orange-400 border-orange-400';
        labelColor = 'text-orange-400';
        labelBorder = 'border-orange-500/40';
        editAccent = 'text-orange-400 border-orange-400 focus:border-orange-400';
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
            {prefix && <span className={`text-zinc-500 font-serif ${prefixSize} font-light select-none whitespace-nowrap self-start mt-0.5`}>{prefix}</span>}

            {tags.length > 0 ? (
                tags.map((tag, idx) => {
                    const details = getItemDetails(tag, blockId) as { def?: string; core?: string; defEn?: string; coreEn?: string } | null;
                    const isTagLocked = lockedTags?.[blockId]?.includes(tag) || isBlockLocked;

                    const activeAccent = isTagLocked
                        ? (isCommercial ? 'text-cyan-400 border-cyan-400 border bg-cyan-900/20 rounded px-1' : (isExperimental ? 'text-purple-400 border-purple-400 border bg-purple-900/20 rounded px-1' : (isAesthetic ? 'text-rose-400 border-rose-400 border bg-rose-900/20 rounded px-1' : (isTrailer ? 'text-orange-400 border-orange-400 border bg-orange-900/20 rounded px-1' : 'text-gold-primary border-gold-primary border bg-amber-900/20 rounded px-1'))))
                        : (isTiny ? `border ${accentColor} bg-zinc-900 px-2 py-0.5 rounded shadow-sm hover:bg-zinc-800` : `border-b ${accentColor} px-0.5`);

                    return (
                        <div key={tag} className="flex flex-col items-center relative group/item align-top">
                            <div className="flex items-center">
                                <div
                                    className={`flex items-center cursor-pointer transition-colors ${activeAccent}`}
                                    onClick={() => !isTagLocked && onOpenLibrary(blockId)}
                                >
                                    <span className={`${textSize} font-serif font-bold text-white whitespace-nowrap`}>
                                        {getBilingualText(tag)}
                                    </span>
                                </div>
                                {idx < tags.length - 1 && <span className="text-zinc-600 font-serif text-sm ml-0.5 mr-1 select-none font-bold">,</span>}
                            </div>

                            {!isTiny && (
                                <div className="flex items-center gap-1 mt-1 z-10 bg-black/80 rounded p-1 shadow-md border border-zinc-800">
                                    <button onClick={(e) => { e.stopPropagation(); onRandomizeTag?.(blockId, tag); }} disabled={isTagLocked} className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : 'hover:border-zinc-500 hover:bg-zinc-800 hover:text-white text-zinc-500'}`} title="Randomize This Item"><Shuffle size={10} /></button>
                                    <button onClick={(e) => { e.stopPropagation(); onToggleTagLock?.(blockId, tag); }} className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 rounded transition-colors ${isTagLocked ? 'border-rose-500/50 text-rose-500 bg-rose-900/20' : 'hover:border-zinc-500 hover:bg-zinc-800 text-zinc-500 hover:text-white'}`} title={isTagLocked ? "Unlock Item" : "Lock Item"}>{isTagLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>

                                    {/* Edit Button - Always visible in group hover */}
                                    <button
                                        onClick={(e) => handleEditClick(tag, e)}
                                        disabled={isTagLocked}
                                        className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : `hover:border-${labelColor.replace('text-', '')} hover:bg-zinc-800 text-zinc-500 hover:text-white`}`}
                                        title={lang === 'EN' ? "Customize" : "自定义"}
                                    >
                                        <Edit2 size={10} />
                                    </button>

                                    <button onClick={(e) => { e.stopPropagation(); onRemoveTag(blockId, tag); }} disabled={isTagLocked} className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : 'hover:border-red-500/50 hover:bg-red-950/20 text-zinc-500 hover:text-red-400'}`} title="Delete This Item"><Trash2 size={10} /></button>
                                </div>
                            )}

                            {isTiny && (
                                <div className="absolute top-full left-0 z-50 flex gap-1 mt-1 opacity-0 group-hover/item:opacity-100 transition-opacity bg-black border border-zinc-800 p-0.5 rounded shadow-lg">
                                    <button onClick={(e) => handleEditClick(tag, e)} className="p-1 hover:text-white text-zinc-500"><Edit2 size={10} /></button>
                                    <button onClick={(e) => { e.stopPropagation(); onRemoveTag(blockId, tag); }} className="p-1 hover:text-red-400 text-zinc-500"><Trash2 size={10} /></button>
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
                                        <span className="block text-[10px] text-zinc-500 italic mt-1">{lang === 'EN' && details.coreEn ? details.coreEn : details.core}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })
            ) : (
                <div className={`flex flex-col items-center group/item relative cursor-pointer align-top ${isBlockLocked ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <div onClick={() => !isBlockLocked && onOpenLibrary(blockId)} className="flex items-center">
                        <span className={`${textSize} font-serif font-bold px-0.5 whitespace-nowrap text-zinc-500 ${isTiny ? 'border border-dashed border-zinc-700 rounded px-2 py-0.5 hover:border-zinc-500 hover:text-zinc-300' : 'border-b border-zinc-800 hover:border-zinc-600 hover:text-zinc-300'} transition-all`}>
                            {isTiny ? displayPlaceholder : (isSmall ? `[${displayPlaceholder}]` : `[ ${displayPlaceholder} ]`)}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 z-10 bg-black/80 rounded p-1 border border-zinc-800 shadow-md">
                        <button onClick={(e) => { e.stopPropagation(); onRandomizeBlock(blockId); }} disabled={isBlockLocked} className="flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 rounded transition-colors hover:border-zinc-500 hover:bg-zinc-800 hover:text-white text-zinc-500"><Dice5 size={10} /></button>
                        <button onClick={(e) => { e.stopPropagation(); onToggleLockBlock(blockId); }} className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 rounded transition-colors ${isBlockLocked ? (isCommercial ? 'text-cyan-400 border-cyan-400' : isExperimental ? 'text-purple-400 border-purple-400' : isAesthetic ? 'text-rose-400 border-rose-400' : isTrailer ? 'text-orange-400 border-orange-400' : 'text-gold-primary border-gold-primary') : 'hover:border-zinc-500 hover:bg-zinc-800 text-zinc-500 hover:text-white'}`}>{isBlockLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>

                        {/* Add Edit Button for Empty State */}
                        <button
                            onClick={handleCreateClick}
                            disabled={isBlockLocked}
                            className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 rounded transition-colors ${isBlockLocked ? 'opacity-30 cursor-not-allowed' : `hover:border-${labelColor.replace('text-', '')} hover:bg-zinc-800 text-zinc-500 hover:text-white`}`}
                            title={lang === 'EN' ? "Create Custom Item" : "创建自定义词条"}
                        >
                            <Edit2 size={10} />
                        </button>

                        <button onClick={(e) => { e.stopPropagation(); onClearBlock(blockId); }} disabled={isBlockLocked} className="flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 rounded transition-colors hover:border-red-500/50 hover:bg-red-950/20 text-zinc-500 hover:text-red-400"><Trash2 size={10} /></button>
                    </div>

                    {!isBlockLocked && !isCreatingNew && <span className={`absolute left-1/2 -translate-x-1/2 -top-6 px-2 py-0.5 rounded border text-[9px] font-mono font-black tracking-[0.1em] opacity-0 group-hover/item:opacity-100 transition-all duration-100 whitespace-nowrap z-50 pointer-events-none shadow-xl bg-black/95 ${labelColor} ${labelBorder}`}>
                        {lang === 'EN' && blockDef?.enName ? blockDef.enName : blockDef?.name} {libCount > 0 ? <span className="text-white ml-1">({libCount})</span> : ''}
                    </span>}
                </div>
            )}

            {/* COMMON EDIT MODAL */}
            {(editingTag || isCreatingNew) && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={(e) => { e.stopPropagation(); handleCloseEdit(); }}>
                    <div className="bg-[#0c0c0c] border border-zinc-700 p-6 rounded-xl shadow-2xl w-80 relative" onClick={(e) => e.stopPropagation()}>
                        <button onClick={handleCloseEdit} className="absolute top-4 right-4 text-zinc-500 hover:text-white"><X size={16} /></button>
                        <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${labelColor}`}>{isCreatingNew ? (lang === 'EN' ? "Create Custom Item" : "创建自定义词条") : (lang === 'EN' ? "Customize Item" : "自定义词条")}</h3>

                        <div className="space-y-3">
                            <div>
                                <label className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">{lang === 'EN' ? "Name" : "名称"}</label>
                                <input
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    className={`w-full bg-zinc-900 border border-zinc-700 rounded px-2 py-1.5 text-xs text-white focus:outline-none ${editAccent}`}
                                    placeholder={lang === 'EN' ? "Enter Tag Name" : "输入词条名称"}
                                />
                            </div>
                            <div>
                                <label className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">{lang === 'EN' ? "Core Logic" : "核心逻辑"}</label>
                                <input
                                    value={editCore}
                                    onChange={(e) => setEditCore(e.target.value)}
                                    className={`w-full bg-zinc-900 border border-zinc-700 rounded px-2 py-1.5 text-xs text-zinc-300 focus:outline-none ${editAccent}`}
                                    placeholder={lang === 'EN' ? "Optional logic..." : "可选核心逻辑..."}
                                />
                            </div>
                            <div>
                                <label className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">{lang === 'EN' ? "Definition" : "详细定义"}</label>
                                <textarea
                                    value={editDef}
                                    onChange={(e) => setEditDef(e.target.value)}
                                    className={`w-full bg-zinc-900 border border-zinc-700 rounded px-2 py-1.5 text-xs text-zinc-300 focus:outline-none resize-none h-20 ${editAccent}`}
                                    placeholder={lang === 'EN' ? "Detailed definition..." : "详细定义描述..."}
                                />
                            </div>
                            <div className="flex justify-between pt-2">
                                <button
                                    onClick={handleResetEdit}
                                    className="px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-zinc-900 text-zinc-500 border border-zinc-700 hover:text-red-400 hover:border-red-500/50 transition-colors flex items-center gap-2"
                                    title={lang === 'EN' ? "Clear Inputs" : "清空输入"}
                                >
                                    <RotateCcw size={12} /> {lang === 'EN' ? "Reset" : "重置"}
                                </button>
                                <button
                                    onClick={handleSaveEdit}
                                    className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors flex items-center gap-2`}
                                >
                                    <Check size={12} /> {lang === 'EN' ? "Save" : "保存"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {suffix && <span className={`text-zinc-500 font-serif ${prefixSize} font-light select-none whitespace-nowrap self-start mt-0.5`}>{suffix}</span>}
        </div>
    );
};
