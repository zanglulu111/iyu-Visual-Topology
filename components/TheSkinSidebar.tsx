
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NarrativeFieldState, BlueprintLanguage, DriverType } from '../types';
import {
  Settings2, X, Lock, Unlock, RotateCcw, Shuffle, Trash2, Plus,
  Anchor, Palette, Box, Info, TestTube, Zap, Dice5, Calendar, MapPin, Globe, Check, Edit2, User, FileText
} from 'lucide-react';
import {
  COMM_SKIN_LIBRARY,
  COMM_SKIN_BLOCKS,
  EXPERIMENTAL_SKIN_BLOCKS,
  EXPERIMENTAL_SKIN_LIBRARY,
  TRAILER_SKIN_BLOCKS,
  TRAILER_SKIN_LIBRARY,
  COUNTRY_PRESETS,
  SKIN_LIBRARY,
  ALL_SKIN_BLOCKS,
  GENRE_CATEGORIES,
  WORLD_MOTIF_CATEGORIES
} from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import { getHistoricalContext } from '../data/historical_timeline';

interface TheSkinSidebarProps {
  fieldState: NarrativeFieldState;
  onOpenLibrary: (blockId: string) => void;
  onRemoveTag: (blockId: string, tag: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  onRandomize?: () => void;
  onReset?: () => void;
  lang?: BlueprintLanguage;
  driverType?: DriverType;
  lockedModules?: Record<string, boolean>;
  onToggleLock?: (id: string) => void;
  lockedTags?: Record<string, string[]>;
  onToggleTagLock?: (blockId: string, tag: string) => void;
  onRandomizeTag?: (blockId: string, tag: string) => void;
  getItemDetails: (tagName: string, blockId?: string) => any;
  onRandomizeBlock?: (blockId: string) => void;
  onClearBlock?: (blockId: string) => void;
  onUpdateState?: (newState: NarrativeFieldState) => void;
  onAddCustomDef?: (name: string, def: string, core: string) => void;
  onEditCustomDef?: (oldName: string, newName: string, def: string, core: string) => void;
  zIndex?: number;
  onRandomizeSummaryGroup?: () => void;
  onRandomizeStructureGroup?: () => void;
  customTextSeed?: string;
  onCustomTextSeedChange?: (value: string) => void;
}

const getBlockLibInfo = (blockId: string) => {
  let count = 0;
  let name = "";
  let description = "";
  let descriptionEn = "";

  // Combine all potential blocks for lookup
  const allBlocks = [
    ...COMM_SKIN_BLOCKS,
    ...ALL_SKIN_BLOCKS,
    ...EXPERIMENTAL_SKIN_BLOCKS,
    ...TRAILER_SKIN_BLOCKS
  ];

  const blockDef = allBlocks.find(b => b.id === blockId);
  if (blockDef) {
    name = blockDef.name.split('(')[0].trim();
    description = blockDef.description || "";
    descriptionEn = blockDef.descriptionEn || "";
  }

  if (blockId === 'skin_genre') {
    count = GENRE_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  } else if (blockId === 'skin_animation_genre') {
    count = WORLD_MOTIF_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  } else {
    const libId = blockId === 'skin_era' ? 'skin_era_lib' : `${blockId}_lib`;
    // Combine all potential libraries for lookup
    const allLibs = [
      ...COMM_SKIN_LIBRARY,
      ...SKIN_LIBRARY,
      ...EXPERIMENTAL_SKIN_LIBRARY,
      ...TRAILER_SKIN_LIBRARY
    ];
    const cat = allLibs.find(c => c.id === libId);
    if (cat) count = cat.items.length;
  }

  return { name, count, description, descriptionEn };
};

const SkinSlot: React.FC<{
  blockId: string;
  placeholder: string;
  fieldState: NarrativeFieldState;
  accentColor: string;
  onOpen: (id: string) => void;
  onRemove: (id: string, tag: string) => void;
  lang: string;
  lockedTags?: Record<string, string[]>;
  onToggleTagLock?: (blockId: string, tag: string) => void;
  onRandomizeTag?: (blockId: string, tag: string) => void;
  accentTextColor: string;
  driverType: DriverType;
  onRandomizeBlock?: (blockId: string) => void;
  onClearBlock?: (blockId: string) => void;
  isBlockLocked?: boolean;
  onToggleLockBlock?: (blockId: string) => void;
  getItemDetails: (tagName: string, blockId?: string) => any;
  onAddCustomDef?: (name: string, def: string, core: string) => void;
  onEditCustomDef?: (oldName: string, newName: string, def: string, core: string) => void;
  onManualUpdate?: (blockId: string, tags: string[]) => void;
  alwaysShowButtons?: boolean;
  onClickOverride?: () => void;
}> = ({
  blockId, placeholder, fieldState, accentColor, onOpen, onRemove, lang,
  lockedTags, onToggleTagLock, onRandomizeTag, accentTextColor, driverType,
  onRandomizeBlock, onClearBlock, isBlockLocked, onToggleLockBlock, getItemDetails,
  onAddCustomDef, onEditCustomDef, onManualUpdate, alwaysShowButtons, onClickOverride
}) => {
    const { theme } = useTheme();
    const isCommercial = driverType === DriverType.COMMERCIAL;
    const tags = fieldState[blockId] || [];
    const hasTags = tags.length > 0;
    const libInfo = getBlockLibInfo(blockId);

    // PORTAL TOOLTIP STATE
    const [hoveredPortal, setHoveredPortal] = useState<{
      pos: { top: number; left: number };
      details: any;
      header?: string;
      count?: number;
      showAbove?: boolean;
    } | null>(null);

    const handleMouseEnter = (e: React.MouseEvent, details: any, header?: string) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const showAbove = rect.bottom > window.innerHeight * 0.65;
      setHoveredPortal({
        pos: {
          top: showAbove ? rect.top - 8 : rect.bottom + 8,
          left: Math.min(rect.left, window.innerWidth - 320)
        },
        details,
        header,
        count: details?.count || libInfo.count,
        showAbove
      });
    };

    const handleMouseLeave = () => {
      setHoveredPortal(null);
    };

    const getBilingualText = (text: string) => {
      if (!text) return "";
      const englishMatch = text.match(/\((.*?)\)/);
      const chinesePart = text.split('(')[0].trim();
      const englishPart = englishMatch ? englishMatch[1].trim() : "";
      return lang === 'EN' && englishPart ? englishPart : chinesePart;
    };

    const getLockedStyle = () => {
      if (driverType === DriverType.COMMERCIAL) return theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-mist-cyan text-mist-cyan bg-mist-cyan/20';
      if (driverType === DriverType.EXPERIMENTAL) return theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-purple-400 text-purple-400 bg-purple-900/20';
      if (driverType === DriverType.AESTHETIC) return theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-rose-400 text-rose-400 bg-rose-900/20';
      if (driverType === DriverType.TRAILER) return theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-orange-400 text-orange-400 bg-orange-900/20';
      return theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-gold-primary text-gold-primary bg-amber-900/20';
    };

    // Style config for active/edit state
    let labelColor = 'text-gold-primary';
    let editAccent = 'text-gold-primary border-gold-primary focus:border-gold-primary';

    if (theme === 'retro') {
      labelColor = 'text-[#8B261D]';
      editAccent = 'text-[var(--text-main)] border-[var(--border-main)] focus:border-[#8B261D]';
    } else if (driverType === DriverType.COMMERCIAL) {
      labelColor = 'text-mist-cyan';
      editAccent = 'text-mist-cyan border-mist-cyan focus:border-mist-cyan';
    } else if (driverType === DriverType.EXPERIMENTAL) {
      labelColor = 'text-mist-purple';
      editAccent = 'text-purple-400 border-purple-400 focus:border-purple-400';
    } else if (driverType === DriverType.AESTHETIC) {
      labelColor = 'text-mist-rose';
      editAccent = 'text-rose-400 border-rose-400 focus:border-rose-400';
    } else if (driverType === DriverType.TRAILER) {
      labelColor = 'text-mist-orange';
      editAccent = 'text-orange-400 border-orange-400 focus:border-orange-400';
    } else {
      labelColor = 'text-gold-primary';
      editAccent = 'text-gold-primary border-gold-primary focus:border-gold-primary';
    }

    const lockedClass = getLockedStyle();

    // Edit state
    const [editingTag, setEditingTag] = useState<string | null>(null);
    const [isCreatingNew, setIsCreatingNew] = useState(false);
    const [editName, setEditName] = useState("");
    const [editDef, setEditDef] = useState("");
    const [editCore, setEditCore] = useState("");

    const handleEditClick = (tag: string, e: React.MouseEvent) => {
      e.stopPropagation();
      // If details comes as string, normalize
      let details = getItemDetails(tag, blockId);
      if (typeof details === 'string') {
        details = { def: details };
      }
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

    const handleCloseEdit = () => {
      setEditingTag(null);
      setIsCreatingNew(false);
    };

    const handleResetEdit = () => {
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

    return (
      <span className="inline-flex flex-wrap items-baseline gap-x-1 mx-1 relative">
        {hasTags ? (
          tags.map((tag, idx) => {
            const isTagLocked = lockedTags?.[blockId]?.includes(tag);

            let details = getItemDetails(tag, blockId);
            if (typeof details === 'string') {
              details = { def: details };
            }
            const safeDetails = details as { def?: string; core?: string; defEn?: string; coreEn?: string } | null;

            return (
              <span key={`${blockId}-${idx}`} className="inline-flex flex-col items-center group/tag relative align-top">
                <span className="flex items-baseline relative z-10">
                  <span
                    onClick={() => onClickOverride ? onClickOverride() : onOpen(blockId)}
                    onMouseEnter={(e) => safeDetails && handleMouseEnter(e, safeDetails)}
                    onMouseLeave={handleMouseLeave}
                    className={`
                    cursor-pointer font-serif font-bold transition-all duration-300 hover:scale-110 hover:z-50 inline-block
                    ${isTagLocked
                        ? `border ${lockedClass} px-2 rounded`
                        : `${theme === 'retro' ? 'text-black hover:bg-black/5' : 'text-white hover:bg-white/10'} border-b-2 ${accentColor} px-0.5 rounded-sm`
                      }
                    text-lg md:text-xl tracking-tight
                  `}
                  >
                    {getBilingualText(tag)}
                  </span>
                  {idx < tags.length - 1 && <span className={`font-bold mx-0.5 text-lg ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>、</span>}
                </span>

                <div className={`flex items-center gap-1 mt-1 z-10 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-black/80'} rounded p-1 shadow-md border ${theme === 'retro' ? 'border-[var(--border-main)]/40' : 'border-zinc-800'} ${alwaysShowButtons ? 'opacity-100' : 'opacity-0 group-hover/tag:opacity-100'} transition-opacity duration-300`}>
                  <button
                    onClick={(e) => { e.stopPropagation(); onRandomizeTag?.(blockId, tag); }}
                    disabled={isTagLocked}
                    className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                  >
                    <Dice5 size={10} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleTagLock?.(blockId, tag); }}
                    className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? (theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : lockedClass) : ''}`}
                  >
                    {isTagLocked ? <Lock size={10} /> : <Unlock size={10} />}
                  </button>

                  <button
                    onClick={(e) => handleEditClick(tag, e)}
                    disabled={isTagLocked}
                    className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                  >
                    <Edit2 size={10} />
                  </button>

                  <button
                    onClick={(e) => { e.stopPropagation(); onRemove(blockId, tag); }}
                    disabled={isTagLocked}
                    className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400'} border rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                  >
                    <Trash2 size={10} />
                  </button>
                </div>
              </span>
            );
          })
        ) : (
          <span className="group/tag relative inline-flex flex-col items-center align-top">
            <span
              onClick={() => !isBlockLocked && (onClickOverride ? onClickOverride() : onOpen(blockId))}
              onMouseEnter={(e) => handleMouseEnter(e, {
                def: libInfo.description,
                defEn: libInfo.descriptionEn,
                core: lang === 'EN' ? "[Config Protocol] Click to enter the library." : "【配置协议】点击进入库选择具体参数。",
              }, libInfo.name)}
              onMouseLeave={handleMouseLeave}
              className={`cursor-pointer font-serif font-medium border-b border-dashed transition-all duration-300 hover:scale-110 hover:z-50 text-base ${isBlockLocked ? (theme === 'retro' ? 'opacity-50 cursor-not-allowed text-[var(--text-muted)]/50' : 'opacity-50 cursor-not-allowed text-zinc-600') : (theme === 'retro' ? 'border-[var(--text-main)] text-zinc-500 hover:text-black' : 'border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-500')}`}
            >
              {lang === 'EN' ? '[' : '【'}{placeholder}{lang === 'EN' ? ']' : '】'}
            </span>
            <div className={`flex items-center gap-1 mt-1 z-10 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-black/80'} rounded p-1 border ${theme === 'retro' ? 'border-[var(--border-main)]/40' : 'border-zinc-800'} shadow-md ${alwaysShowButtons ? 'opacity-100' : 'opacity-0 group-hover/tag:opacity-100'} transition-opacity duration-300`}>
              <button onClick={(e) => { e.stopPropagation(); onRandomizeBlock?.(blockId); }} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-white' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white'} border rounded transition-colors`}>
                <Dice5 size={10} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); onToggleLockBlock?.(blockId); }} className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-white' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white'} border rounded transition-colors ${isBlockLocked ? lockedClass : ''}`}>
                {isBlockLocked ? <Lock size={10} /> : <Unlock size={10} />}
              </button>
              <button onClick={handleCreateClick} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-white' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white'} border rounded transition-colors`}>
                <Edit2 size={10} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); onClearBlock?.(blockId); }} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-red-400'} border rounded transition-colors`}>
                <Trash2 size={10} />
              </button>
            </div>
          </span>
        )}

        {/* TOOLTIP PORTAL - Moved outside to work for both tags and placeholder */}
        {hoveredPortal && createPortal(
          <div
            className={`fixed z-[9999] w-max max-w-[320px] text-left p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none animate-in fade-in zoom-in-95 duration-100
              ${hoveredPortal.showAbove ? '-translate-y-full' : ''}
              ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#1A1814] border' : 'bg-[#0a0a0a]/95 backdrop-blur-xl border-zinc-800 border'}`}
            style={{
              top: hoveredPortal.pos.top,
              left: hoveredPortal.pos.left
            }}
          >
            <div className={`text-sm font-black uppercase tracking-[0.2em] mb-2 border-b pb-2 flex items-center gap-2 ${theme === 'retro' ? 'text-zinc-500 border-black/10' : 'text-zinc-500 border-white/10'}`}>
              <span className={theme === 'retro' ? 'text-[#8B261D]' : accentTextColor}>
                {hoveredPortal.header || libInfo.name || "DETAILS"}
                {hoveredPortal.count !== undefined && hoveredPortal.count > 0 && (
                  <span className={`ml-2 font-bold ${theme === 'retro' ? 'text-black' : 'text-white'}`}>({hoveredPortal.count})</span>
                )}
              </span>
            </div>
            <div className={`text-xs md:text-sm font-bold mb-3 leading-relaxed whitespace-pre-line ${theme === 'retro' ? 'text-black' : 'text-zinc-100'}`}>
              {lang === 'EN' && hoveredPortal.details.defEn ? hoveredPortal.details.defEn : hoveredPortal.details.def}
              {blockId !== 'skin_structure' && blockId !== 'skin_volume' && (
              <span className={`block text-[10px] italic mt-2 ${theme === 'retro' ? 'text-[#8B261D]/80' : 'text-zinc-400'}`}>
                {lang === 'EN' && hoveredPortal.details.coreEn ? hoveredPortal.details.coreEn : hoveredPortal.details.core}
              </span>
              )}
              {hoveredPortal.details.reference && (
              <span className={`block text-[10px] mt-2 font-mono ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'}`}>
                {lang === 'EN' && hoveredPortal.details.referenceEn ? hoveredPortal.details.referenceEn : hoveredPortal.details.reference}
              </span>
              )}
            </div>
          </div>,
          document.body
        )}

        {/* COMMON EDIT MODAL */}
        {(editingTag || isCreatingNew) && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={(e) => { e.stopPropagation(); handleCloseEdit(); }}>
            <div className={`${theme === 'retro' ? 'bg-[var(--bg-card)] border-[var(--border-main)]' : 'bg-[#0c0c0c] border-zinc-700'} p-6 rounded-xl shadow-2xl w-80 relative transition-colors duration-500`} onClick={(e) => e.stopPropagation()}>
              <button onClick={handleCloseEdit} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"><X size={16} /></button>
              <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${labelColor}`}>{isCreatingNew ? (lang === 'EN' ? "Create Custom Item" : "创建自定义词条") : (lang === 'EN' ? "Customize Item" : "自定义词条")}</h3>

              <div className="grid gap-4">
                <div>
                  <label className={`text-[10px] uppercase font-bold block mb-1 ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'}`}>{lang === 'EN' ? "Name" : "名称"}</label>
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className={`w-full rounded px-2 py-1.5 text-xs focus:outline-none ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)] text-[var(--text-main)] focus:ring-[var(--text-accent)]/30' : 'bg-zinc-900 border-zinc-700 text-white'} ${editAccent}`}
                    placeholder={lang === 'EN' ? "Enter Tag Name" : "输入词条名称"}
                  />
                </div>

                <div>
                  <label className={`text-[10px] uppercase font-bold block mb-1 ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'}`}>{lang === 'EN' ? "Core Logic" : "核心逻辑"}</label>
                  <input
                    value={editCore}
                    onChange={(e) => setEditCore(e.target.value)}
                    className={`w-full rounded px-2 py-1.5 text-xs focus:outline-none ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)] text-[var(--text-main)] focus:ring-[var(--text-accent)]/30' : 'bg-zinc-900 border-zinc-700 text-zinc-300'} ${editAccent}`}
                    placeholder={lang === 'EN' ? "Optional logic..." : "可选核心逻辑..."}
                  />
                </div>

                <div>
                  <label className={`text-[10px] uppercase font-bold block mb-1 ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'}`}>{lang === 'EN' ? "Definition" : "详细定义"}</label>
                  <textarea
                    value={editDef}
                    onChange={(e) => setEditDef(e.target.value)}
                    className={`w-full rounded px-2 py-1.5 text-xs focus:outline-none resize-none h-20 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)] text-[var(--text-main)] focus:ring-[var(--text-accent)]/30' : 'bg-zinc-900 border-zinc-700 text-zinc-300'} ${editAccent}`}
                    placeholder={lang === 'EN' ? "Detailed definition..." : "详细定义描述..."}
                  />
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={handleResetEdit}
                  className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] border-[var(--border-main)] hover:text-red-700' : 'bg-zinc-900 text-zinc-500 border-zinc-700 hover:text-red-400 hover:border-red-500/50'} border transition-colors flex items-center gap-2`}
                  title={lang === 'EN' ? "Clear Inputs" : "清空输入"}
                >
                  <RotateCcw size={12} /> {lang === 'EN' ? "Reset" : "重置"}
                </button>
                <button
                  onClick={handleSaveEdit}
                  className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider ${theme === 'retro' ? 'bg-[var(--text-accent)] text-white hover:bg-opacity-90' : 'bg-white text-black hover:bg-zinc-200'} transition-colors flex items-center gap-2 shadow-lg`}
                >
                  <Check size={12} /> {lang === 'EN' ? "Save" : "保存"}
                </button>
              </div>
            </div>
          </div>
        )}
      </span>
    );
};

export const TheSkinSidebar: React.FC<TheSkinSidebarProps> = ({
  fieldState,
  onOpenLibrary,
  onRemoveTag,
  isOpen = false,
  onClose,
  onRandomize,
  onReset,
  lang = 'CN',
  driverType = DriverType.NARRATIVE,
  lockedModules = {},
  onToggleLock,
  lockedTags = {},
  onToggleTagLock,
  onRandomizeTag,
  onRandomizeBlock,
  onClearBlock,
  getItemDetails,
  onUpdateState,
  onAddCustomDef,
  onEditCustomDef,
  zIndex = 40,
  onRandomizeSummaryGroup,
  onRandomizeStructureGroup,
  customTextSeed = '',
  onCustomTextSeedChange
}) => {
  const { theme } = useTheme();
  const isCommercial = driverType === DriverType.COMMERCIAL;
  const isExperimental = driverType === DriverType.EXPERIMENTAL;
  const isTrailer = driverType === DriverType.TRAILER;
  const isAesthetic = driverType === DriverType.AESTHETIC;
  const isNarrative = driverType === DriverType.NARRATIVE;

  // Manual update wrapper for SkinSlot
  const handleManualUpdate = (blockId: string, tags: string[]) => {
    if (onUpdateState) {
      onUpdateState({ ...fieldState, [blockId]: tags });
    }
  };

  // ... (rest of the component logic for Time/Location state and effects)
  // New State for Timeline
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [contextData, setContextData] = useState<any>(null);

  // New state for modal in Narrative mode
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);

  // ====== SUR7/SUR8 Casting + Age Panel State ======
  const [isIdentityModalOpen, setIsIdentityModalOpen] = useState(false);
  const GENDER_PRESETS = [
    { id: 'gen_m', cn: '男性', en: 'Male' },
    { id: 'gen_f', cn: '女性', en: 'Female' },
    { id: 'gen_nb', cn: '非二元', en: 'Non-Binary' },
  ];
  const AGE_PRESETS = [
    { id: 'age_01', cn: '幼年', en: 'Childhood', range: '6-12' },
    { id: 'age_02', cn: '少年', en: 'Adolescent', range: '13-17' },
    { id: 'age_03', cn: '青年', en: 'Youth', range: '18-24' },
    { id: 'age_04', cn: '盛年', en: 'Prime', range: '25-30' },
    { id: 'age_05', cn: '壮年', en: 'Vigor', range: '31-40' },
    { id: 'age_06', cn: '中年', en: 'Middle Age', range: '41-50' },
    { id: 'age_07', cn: '知命', en: 'Knowing Fate', range: '51-60' },
    { id: 'age_08', cn: '花甲', en: 'Sexagenarian', range: '61-70' },
    { id: 'age_09', cn: '古稀', en: 'Septuagenarian', range: '71-80' },
    { id: 'age_10', cn: '耄者', en: 'Venerable', range: '80-100' },
    { id: 'age_11', cn: '永生', en: 'Immortal', range: '∞' },
  ];
  const [customAgeInput, setCustomAgeInput] = useState('');
  const [customGenderInput, setCustomGenderInput] = useState('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');
  const isGenderLocked = lockedModules?.['skin_gender'] || false;
  const isAgeLocked = lockedModules?.['skin_age'] || false;

  // Sync identity state from fieldState
  useEffect(() => {
    const genderTag = fieldState['skin_gender']?.[0];
    const ageTag = fieldState['skin_age']?.[0];
    if (genderTag !== undefined) setSelectedGender(genderTag || '');
    else setSelectedGender('');
    if (ageTag !== undefined) setSelectedAge(ageTag || '');
    else setSelectedAge('');
  }, [fieldState['skin_gender']?.[0], fieldState['skin_age']?.[0]]);

  // Sync identity state TO fieldState
  useEffect(() => {
    if (!onUpdateState) return;
    const timer = setTimeout(() => {
      const newState: NarrativeFieldState = {};
      let hasChanges = false;
      const currentGender = fieldState['skin_gender']?.[0] || '';
      if (currentGender !== selectedGender) {
        newState['skin_gender'] = selectedGender ? [selectedGender] : [];
        hasChanges = true;
      }
      const currentAge = fieldState['skin_age']?.[0] || '';
      if (currentAge !== selectedAge) {
        newState['skin_age'] = selectedAge ? [selectedAge] : [];
        hasChanges = true;
      }
      if (hasChanges) onUpdateState({...fieldState, ...newState});
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedGender, selectedAge]);

  // Simple expand/collapse for story summary sentence
  const [summaryExpanded, setSummaryExpanded] = useState(false);

  // Helper: check if a block has user-selected values
  const hasBlockValue = (ids: string[]) => ids.some(id => (fieldState[id] || []).length > 0);

  // Pre-compute last visible fragment for sentence closing
  const _fA = summaryExpanded || hasBlockValue(['skin_era']) || selectedYear !== null || selectedCountry !== '';
  const _fB = summaryExpanded || hasBlockValue(['skin_society']);
  const _fC = summaryExpanded || selectedAge !== '' || selectedGender !== '' || hasBlockValue(['skin_profession']);
  const _fD = summaryExpanded || hasBlockValue(['sur10x', 'skin_ideology']);
  const _fE = summaryExpanded || hasBlockValue(['skin_everything']);
  const _fF = summaryExpanded || hasBlockValue(['skin_location']);
  const _fG = summaryExpanded || hasBlockValue(['skin_ending']);
  const lastVisibleFrag = _fG ? 'G' : _fF ? 'F' : _fE ? 'E' : _fD ? 'D' : _fC ? 'C' : _fB ? 'B' : _fA ? 'A' : null;
  const hasAnyFragment = lastVisibleFrag !== null;
  // PORTAL TOOLTIP STATE (for Spacetime Anchor)
  const [hoveredPortal, setHoveredPortal] = useState<{
    pos: { top: number; left: number };
    details: any;
    showAbove?: boolean;
    header?: string;
    count?: number;
  } | null>(null);

  const handleMouseEnter = (e: React.MouseEvent, details: any, header?: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const showAbove = rect.bottom > window.innerHeight * 0.65;
    setHoveredPortal({
      pos: {
        top: showAbove ? rect.top - 8 : rect.bottom + 8,
        left: Math.min(rect.left, window.innerWidth - 320)
      },
      details,
      showAbove,
      header
    });
  };

  const handleMouseLeave = () => {
    setHoveredPortal(null);
  };

  // Use lockedModules prop for checking lock state
  const isCountryLocked = lockedModules?.['skin_country_exact'] || false;
  const isYearLocked = lockedModules?.['skin_year_exact'] || false;

  // Ref to prevent the year/country update effect from calling onUpdateState
  // when the change originates from fieldState sync (e.g. undo/redo)
  const syncingFromPropRef = useRef(false);

  // Sync local state with fieldState on mount or change
  useEffect(() => {
    const yearTag = fieldState['skin_year_exact']?.[0];
    const countryTag = fieldState['skin_country_exact']?.[0];

    // Mark that we're syncing from prop, so the update effect doesn't fire back
    syncingFromPropRef.current = true;

    // Sync Year
    if (yearTag) {
      setSelectedYear(parseInt(yearTag));
    } else {
      if (fieldState['skin_year_exact'] && fieldState['skin_year_exact'].length === 0) {
        setSelectedYear(null);
      }
    }

    // Sync Country
    if (countryTag) setSelectedCountry(countryTag);
    else if (fieldState['skin_country_exact'] && fieldState['skin_country_exact'].length === 0) {
      setSelectedCountry("");
    }

    // Reset the flag after microtask (allows setState to flush first)
    Promise.resolve().then(() => { syncingFromPropRef.current = false; });
  }, [fieldState]);

  // Auto-switch country label based on language if it matches a preset
  useEffect(() => {
    if (selectedCountry) {
      const preset = COUNTRY_PRESETS.find(p => p.cn === selectedCountry || p.en === selectedCountry);
      if (preset) {
        const targetVal = lang === 'EN' ? preset.en : preset.cn;
        if (targetVal !== selectedCountry) {
          setSelectedCountry(targetVal);
          // Also update field state immediately to reflect in UI
          if (onUpdateState && !syncingFromPropRef.current) {
            const newState = { ...fieldState, 'skin_country_exact': [targetVal] };
            onUpdateState(newState);
          }
        }
      }
    }
  }, [lang, selectedCountry]);

  // Update context when year changes (only propagate to parent on user-initiated changes)
  useEffect(() => {
    const ctx = selectedYear !== null ? getHistoricalContext(selectedYear) : null;
    setContextData(ctx);

    // Don't propagate back to parent if this change came from fieldState sync (undo/redo)
    if (syncingFromPropRef.current) return;

    const timer = setTimeout(() => {
      if (onUpdateState) {
        let newState = { ...fieldState };
        let hasChanges = false;

        if (selectedYear === null) {
          if (fieldState['skin_year_exact'] && fieldState['skin_year_exact'].length === 0) {
            // No change needed if already empty
          } else if (fieldState['skin_year_exact'] && fieldState['skin_year_exact'].length > 0) {
            newState['skin_year_exact'] = [];
            hasChanges = true;
          }
        } else {
          if (fieldState['skin_year_exact']?.[0] !== selectedYear.toString()) {
            newState['skin_year_exact'] = [selectedYear.toString()];
            hasChanges = true;
          }
        }

        const currentCountry = fieldState['skin_country_exact']?.[0] || "";
        if (currentCountry !== selectedCountry) {
          if (!selectedCountry) {
            newState['skin_country_exact'] = [];
          } else {
            newState['skin_country_exact'] = [selectedCountry];
          }
          hasChanges = true;
        }

        if (hasChanges) {
          onUpdateState(newState);
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedYear, selectedCountry]);

  if (isAesthetic) return null;

  let accentBorder = 'border-gold-primary';
  let iconColor = 'text-gold-primary';
  let lockKey = 'NARR_SKIN';

  if (theme === 'retro') {
    accentBorder = 'border-[#8B261D]';
    iconColor = 'text-[#8B261D]';
  } else if (isCommercial) {
    accentBorder = 'border-mist-cyan';
    iconColor = 'text-mist-cyan';
    lockKey = 'COMM_SKIN';
  } else if (isExperimental) {
    accentBorder = 'border-purple-400';
    iconColor = 'text-purple-400';
    lockKey = 'EXP_SKIN';
  } else if (isTrailer) {
    accentBorder = 'border-orange-400';
    iconColor = 'text-orange-400';
    lockKey = 'TRL_SKIN';
  }

  const isAllLocked = lockedModules[lockKey];

  const slotProps = {
    fieldState,
    accentColor: accentBorder,
    onOpen: onOpenLibrary,
    onRemove: onRemoveTag,
    lang,
    lockedTags,
    onToggleTagLock,
    onRandomizeTag,
    getItemDetails,
    accentTextColor: iconColor,
    driverType,
    onRandomizeBlock,
    onClearBlock,
    onToggleLockBlock: onToggleLock,
    onAddCustomDef,
    onEditCustomDef,
    onManualUpdate: handleManualUpdate
  };

  // ... (time/location handlers remain the same) ...
  const handleRandomCountry = () => {
    if (isCountryLocked) return;
    const r = COUNTRY_PRESETS[Math.floor(Math.random() * COUNTRY_PRESETS.length)];
    setSelectedCountry(lang === 'EN' ? r.en : r.cn);
  };

  const handleToggleLockCountry = () => {
    if (onToggleLock) onToggleLock('skin_country_exact');
  };

  const handleResetCountry = () => {
    if (isCountryLocked) return;
    setSelectedCountry("");
  };

  const handleRandomYear = () => {
    if (isYearLocked) return;
    const randomYear = Math.floor(Math.random() * (2050 - (-2000) + 1)) + (-2000);
    setSelectedYear(randomYear);
  };

  const handleToggleLockYear = () => {
    if (onToggleLock) onToggleLock('skin_year_exact');
  };

  const handleResetYear = () => {
    if (isYearLocked) return;
    setSelectedYear(null);
  };

  const handleSetNow = () => {
    if (isYearLocked) return;
    setSelectedYear(2026);
  };

  // Global Controls for the Modal
  const handleGlobalRandomizeCoordinates = () => {
    if (!isCountryLocked) handleRandomCountry();
    if (!isYearLocked) handleRandomYear();
  };

  const handleGlobalResetCoordinates = () => {
    if (!isCountryLocked) handleResetCountry();
    if (!isYearLocked) handleResetYear();
  };

  const handleGlobalToggleLockCoordinates = () => {
    const shouldLock = !isCountryLocked || !isYearLocked;
    if (onToggleLock) {
      if (isCountryLocked !== shouldLock) onToggleLock('skin_country_exact');
      if (isYearLocked !== shouldLock) onToggleLock('skin_year_exact');
    }
  };

  // ====== Identity (Gender + Age) Handlers ======
  const handleRandomGender = () => {
    if (isGenderLocked) return;
    const r = GENDER_PRESETS[Math.floor(Math.random() * GENDER_PRESETS.length)];
    setSelectedGender(lang === 'EN' ? r.en : r.cn);
  };
  const handleResetGender = () => { if (!isGenderLocked) setSelectedGender(''); };
  const handleToggleLockGender = () => { if (onToggleLock) onToggleLock('skin_gender'); };
  const handleRandomAge = () => {
    if (isAgeLocked) return;
    const r = AGE_PRESETS[Math.floor(Math.random() * AGE_PRESETS.length)];
    setSelectedAge(lang === 'EN' ? r.en : r.cn);
  };
  const handleResetAge = () => { if (!isAgeLocked) setSelectedAge(''); };
  const handleToggleLockAge = () => { if (onToggleLock) onToggleLock('skin_age'); };
  const handleGlobalRandomizeIdentity = () => {
    if (!isGenderLocked) handleRandomGender();
    if (!isAgeLocked) handleRandomAge();
  };
  const handleGlobalResetIdentity = () => {
    if (!isGenderLocked) handleResetGender();
    if (!isAgeLocked) handleResetAge();
  };
  const handleGlobalToggleLockIdentity = () => {
    const shouldLock = !isGenderLocked || !isAgeLocked;
    if (onToggleLock) {
      if (isGenderLocked !== shouldLock) onToggleLock('skin_gender');
      if (isAgeLocked !== shouldLock) onToggleLock('skin_age');
    }
  };

  // Specialized Renderer for Identity Slot in Sidebar (like Time/Location)
  const renderIdentitySlot = () => {
    const hasIdentity = selectedGender !== '' || selectedAge !== '';
    let displayText = '';

    if (lang === 'EN') {
      displayText = [selectedAge, selectedGender].filter(Boolean).join(' ');
    } else {
      let ageStr = selectedAge;
      if (selectedAge) {
        const preset = AGE_PRESETS.find(a => a.cn === selectedAge);
        if (preset) {
          ageStr = `${preset.cn}（${preset.range}岁）`;
        } else {
          ageStr = `${selectedAge}岁`;
        }
      }
      displayText = `${ageStr}${selectedGender}`;
    }

    if (!displayText) {
      displayText = lang === 'EN' ? 'Casting' : '选角';
    }

    const isLocked = isGenderLocked && isAgeLocked;
    const baseTextClass = 'cursor-pointer transition-transform duration-300';
    const filledTextClass = `font-serif font-bold ${theme === 'retro' ? 'text-black border-b-2 border-[var(--text-accent)] hover:bg-black/5' : 'text-white border-b-2 border-gold-primary hover:bg-white/10'} px-0.5 hover:scale-110 hover:z-50 inline-block text-lg md:text-xl tracking-tight`;
    const emptyTextClass = `font-serif font-medium border-b border-dashed hover:scale-110 hover:z-50 inline-block ${theme === 'retro' ? 'border-[var(--text-muted)] text-zinc-500 hover:text-black hover:bg-black/5' : 'border-zinc-800 text-zinc-500 hover:text-white hover:bg-white/10'} hover:border-zinc-500 text-base`;
    const lockedTextClass = `border ${theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-gold-primary text-gold-primary bg-amber-900/20'} px-2 rounded font-serif font-bold text-lg md:text-xl tracking-tight`;
    return (
      <span className="inline-flex flex-wrap items-baseline gap-x-1 mx-1 relative">
        <span className="group/tag relative inline-flex flex-col items-center align-top">
          <span
            onClick={() => setIsIdentityModalOpen(true)}
            onMouseEnter={(e) => handleMouseEnter(e, {
              def: lang === 'EN' ? 'Surface casting and age-stage presets.' : '表层选角呈现与年龄阶段预设。',
              core: lang === 'EN' ? '[Config] Click to open casting panel.' : '【配置协议】点击进入选角面板。',
            }, lang === 'EN' ? 'Casting / Age' : '选角/年龄')}
            onMouseLeave={handleMouseLeave}
            className={`${baseTextClass} ${isLocked ? lockedTextClass : (hasIdentity ? filledTextClass : emptyTextClass)}`}
          >
            {hasIdentity ? displayText : (lang === 'EN' ? `[${displayText}]` : `【${displayText}】`)}
          </span>
          <div className={`flex items-center gap-1 mt-1 z-10 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-black/80'} rounded p-1 border shadow-md ${theme === 'retro' ? 'border-[var(--border-main)]/40' : 'border-zinc-800'} opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300`}>
            <button onClick={(e) => { e.stopPropagation(); handleGlobalRandomizeIdentity(); }} disabled={isLocked} className={`group/btn relative flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Dice5 size={10} /></button>
            <button onClick={(e) => { e.stopPropagation(); handleGlobalToggleLockIdentity(); }} className={`group/btn relative flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isLocked ? (theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-gold-primary text-gold-primary bg-amber-900/20') : ''}`}>{isLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>
            <button onClick={(e) => { e.stopPropagation(); setIsIdentityModalOpen(true); }} disabled={isLocked} className={`group/btn relative flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Edit2 size={10} /></button>
            <button onClick={(e) => { e.stopPropagation(); handleGlobalResetIdentity(); }} disabled={isLocked} className={`group/btn relative flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400'} border rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Trash2 size={10} /></button>
          </div>
        </span>
      </span>
    );
  };

  const formatYear = (year: number, useSuffix = false) => {
    if (year < 0) return lang === 'EN' ? `${Math.abs(year)} BC` : `公元前${Math.abs(year)}${useSuffix ? '年' : ''}`;
    return lang === 'EN' ? `${year}` : `公元${year}${useSuffix ? '年' : ''}`;
  };

  // Specialized Renderer for Time/Location Slot in Sidebar
  const renderTimeLocationSlot = () => {
    const hasTimeOrLoc = selectedYear !== null || selectedCountry !== "";
    const displayText = selectedYear !== null
      ? (lang === 'EN'
        ? `${formatYear(selectedYear)}${selectedCountry ? ' ' + selectedCountry : ''}`
        : `${formatYear(selectedYear, true)}${selectedCountry}`)
      : (selectedCountry ? `${selectedCountry} (AUTO)` : (lang === 'EN' ? "Spacetime Coordinates" : "时空坐标"));

    const isLocked = isCountryLocked && isYearLocked;

    // BRIGHTER TEXT STYLE FOR PLACEHOLDERS
    const baseTextClass = "cursor-pointer transition-transform duration-300";
    const filledTextClass = `font-serif font-bold ${theme === 'retro' ? 'text-black border-b-2 border-[var(--text-accent)] hover:bg-black/5' : 'text-white border-b-2 border-gold-primary hover:bg-white/10'} px-0.5 hover:scale-110 hover:z-50 inline-block text-lg md:text-xl tracking-tight`;
    const emptyTextClass = `font-serif font-medium border-b border-dashed hover:scale-110 hover:z-50 inline-block ${theme === 'retro' ? 'border-[var(--text-muted)] text-zinc-500 hover:text-black hover:bg-black/5' : 'border-zinc-800 text-zinc-500 hover:text-white hover:bg-white/10'} hover:border-zinc-500 text-base`;
    const lockedTextClass = `border ${theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-gold-primary text-gold-primary bg-amber-900/20'} px-2 rounded font-serif font-bold text-lg md:text-xl tracking-tight`;

    const wrapperAlign = "items-center";

    return (
      <span className="inline-flex flex-wrap items-baseline gap-x-1 mx-1 relative">
        <span className={`group/tag relative inline-flex flex-col ${wrapperAlign} align-top`}>
          <span
            onClick={() => setIsTimeModalOpen(true)}
            onMouseEnter={(e) => {
              const lib = getBlockLibInfo('skin_era');
              handleMouseEnter(e, {
                def: lib.description,
                defEn: lib.descriptionEn,
                core: lang === 'EN' ? "[Config Protocol] Click for spacetime coordinates." : "【配置协议】点击进入时空坐标映射面板。",
                count: lib.count
              }, lang === 'EN' ? "Coordinates" : "国家/年份");
            }}
            onMouseLeave={handleMouseLeave}
            className={`${baseTextClass} ${isLocked ? lockedTextClass : (hasTimeOrLoc ? filledTextClass : emptyTextClass)}`}
          >
            {hasTimeOrLoc ? displayText : (lang === 'EN' ? `[${displayText}]` : `【${displayText}】`)}
          </span>

          <div className={`flex items-center gap-1 mt-1 z-10 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-black/80'} rounded p-1 border shadow-md ${theme === 'retro' ? 'border-[var(--border-main)]/40' : 'border-zinc-800'} opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300`}>
            <button
              onClick={(e) => { e.stopPropagation(); handleGlobalRandomizeCoordinates(); }}
              disabled={isLocked}
              className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              <Dice5 size={10} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleGlobalToggleLockCoordinates(); }}
              className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isLocked ? (theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-gold-primary text-gold-primary bg-amber-900/20') : ''}`}
            >
              {isLocked ? <Lock size={10} /> : <Unlock size={10} />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setIsTimeModalOpen(true); }}
              disabled={isLocked}
              className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              <Edit2 size={10} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleGlobalResetCoordinates(); }}
              disabled={isLocked}
              className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400'} border rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              <Trash2 size={10} />
            </button>
          </div>
        </span>
      </span>
    );
  };

  const renderTimeLocationUI = () => (
    <div className="space-y-8 pb-2">
      {/* SECTION 1: Exact Coordinates */}
      <section>
        <div className={`flex items-center gap-2 mb-4 pb-2 border-b ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-700'}`}>
          <MapPin size={14} className={theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-400'} />
          <span className={`text-xs font-black uppercase tracking-widest ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
            {lang === 'EN' ? "Coordinates" : "国家/年份"}
          </span>
        </div>

        <div className="space-y-6">
          {/* Country Selector */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-400'} font-bold uppercase tracking-wider`}>
                {lang === 'EN' ? "Country / Region" : "国家与地区"}
              </span>
              <div className="flex gap-1">
                <button onClick={handleRandomCountry} disabled={isCountryLocked} className={`p-1 rounded text-zinc-500 hover:text-white transition-all ${isCountryLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Dice5 size={10} /></button>
                <button onClick={handleToggleLockCountry} className={`p-1 rounded transition-all ${isCountryLocked ? (theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-amber-500') : 'text-zinc-500 hover:text-white'}`}>{isCountryLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>
                <button onClick={handleResetCountry} disabled={isCountryLocked} className={`p-1 rounded text-zinc-500 hover:text-red-400 transition-all ${isCountryLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Trash2 size={10} /></button>
              </div>
            </div>

            <div className={`flex flex-row gap-0 rounded-lg border ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-800'} ${isCountryLocked ? 'bg-black/40 grayscale opacity-80' : (theme === 'retro' ? 'bg-[var(--bg-main)]' : 'bg-zinc-900/30')} h-10 overflow-hidden`}>
              {/* Selected Side */}
              <div className={`flex items-center justify-center border-r ${theme === 'retro' ? 'border-[var(--border-main)]/30 bg-[var(--bg-panel)]' : 'border-zinc-800 bg-zinc-900/50'} w-28 shrink-0 ${selectedCountry ? iconColor : (theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600')}`}>
                <input
                  type="text"
                  value={selectedCountry}
                  onChange={(e) => !isCountryLocked && setSelectedCountry(e.target.value)}
                  disabled={isCountryLocked}
                  placeholder={lang === 'EN' ? "SELECT" : "自定义"}
                  className={`w-full bg-transparent text-xs font-bold text-center truncate px-2 focus:outline-none placeholder-${theme === 'retro' ? '[var(--text-muted)]/50' : 'zinc-700'} ${theme === 'retro' ? 'text-[var(--text-main)]' : ''}`}
                />
              </div>

              {/* List Side */}
              <div className="flex-1 overflow-x-auto overflow-y-hidden custom-scrollbar p-1.5 flex items-center gap-1.5">
                {COUNTRY_PRESETS.map(c => (
                  <button
                    key={c.cn}
                    onClick={() => !isCountryLocked && setSelectedCountry(lang === 'EN' ? c.en : c.cn)}
                    className={`shrink-0 px-2 py-1 text-[10px] rounded transition-all ${selectedCountry === (lang === 'EN' ? c.en : c.cn) ? (theme === 'retro' ? 'bg-[var(--text-accent)] text-white' : `bg-white text-black font-bold`) : (theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white')}`}
                  >
                    {lang === 'EN' ? c.en : c.cn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Year Wheel / Slider */}
          <div className={`space-y-4 ${isYearLocked ? 'grayscale opacity-50 pointer-events-none' : ''}`}>
            <div className="flex justify-between items-center">
              <span className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-400'} font-bold uppercase tracking-wider`}>
                {lang === 'EN' ? "Timeline" : "时间轴"}
              </span>

              <div className="flex gap-2 items-center">
                <span className={`text-xl font-serif font-black ${isYearLocked ? (theme === 'retro' ? 'text-[var(--text-muted)]/50' : 'text-zinc-500') : iconColor}`}>
                  {selectedYear === null ? (lang === 'EN' ? "AUTO" : "自动") : formatYear(selectedYear, true)}
                </span>
                <div className="flex gap-1 ml-2">
                  <button onClick={handleRandomYear} disabled={isYearLocked} className={`p-1 rounded text-zinc-500 hover:text-white transition-all ${isYearLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Dice5 size={10} /></button>
                  <button onClick={handleToggleLockYear} className={`p-1 rounded transition-all ${isYearLocked ? (theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-amber-500') : 'text-zinc-500 hover:text-white'}`}>{isYearLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>
                  <button onClick={handleResetYear} disabled={isYearLocked} className={`p-1 rounded text-zinc-500 hover:text-red-400 transition-all ${isYearLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Trash2 size={10} /></button>
                </div>
              </div>
            </div>

            <input
              type="range"
              min="-2000"
              max="2050"
              step="1"
              value={selectedYear ?? 2026}
              disabled={isYearLocked}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className={`w-full h-1.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-zinc-800'} rounded-lg appearance-none cursor-pointer ${isYearLocked ? 'cursor-not-allowed accent-zinc-600' : (theme === 'retro' ? 'accent-[var(--text-accent)] hover:accent-[var(--text-main)]' : 'accent-white hover:accent-gold-primary')}`}
            />

            <div className={`flex justify-between items-center text-[9px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600'} font-mono`}>
              <span>-2000</span>
              <div className="flex gap-1">
                <button onClick={() => !isYearLocked && setSelectedYear((prev) => (prev ?? 2026) - 10)} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'} rounded`}>-10</button>
                <button onClick={() => !isYearLocked && setSelectedYear((prev) => (prev ?? 2026) - 1)} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'} rounded`}>-1</button>
                <button onClick={handleSetNow} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--text-accent)]/10 text-[var(--text-accent)] font-bold' : 'bg-zinc-800 text-gold-primary hover:bg-zinc-700 font-bold'} rounded`}>Now</button>
                <button onClick={() => !isYearLocked && setSelectedYear((prev) => (prev ?? 2026) + 1)} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'} rounded`}>+1</button>
                <button onClick={() => !isYearLocked && setSelectedYear((prev) => (prev ?? 2026) + 10)} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'} rounded`}>+10</button>
              </div>
              <span>2050</span>
            </div>

            {/* Context Display */}
            {contextData ? (
              <div className={`p-3 mt-2 rounded-lg border ${theme === 'retro' ? 'border-[var(--border-main)]/20 bg-[var(--bg-panel)]/50' : 'border-zinc-800/50 bg-zinc-900/30'}`}>
                <div className="text-[10px] leading-relaxed mb-1">
                  <span className={`${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'} font-bold`}>CN: </span>
                  <span className={theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}>{lang === 'EN' ? contextData.cnEn : contextData.cn}</span>
                </div>
                <div className="text-[10px] leading-relaxed">
                  <span className={`${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'} font-bold`}>WORLD: </span>
                  <span className={theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}>{lang === 'EN' ? contextData.worldEn : contextData.world}</span>
                </div>
              </div>
            ) : (
              <div className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600'} italic text-center mt-2 p-3 border border-transparent`}>
                {lang === 'EN' ? "No historical data for this year." : "该年份暂无历史数据。"}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div
      style={{ zIndex: isOpen ? zIndex : 0 }}
      className={`
        flex flex-col transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
        fixed top-14 left-0 bottom-[58px] w-[420px] ${theme === 'retro' ? 'bg-[var(--bg-panel)] shadow-none' : `bg-[var(--bg-main)] ${isOpen ? 'shadow-[20px_0_50px_rgba(0,0,0,0.5)]' : ''}`} ${isOpen ? 'border-r border-[var(--border-main)]' : 'border-none'}
        ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
      `}
    >
      <div className={`px-4 py-4 flex items-center justify-between relative shrink-0 transition-all duration-300`}>
        <div className="flex items-center gap-2">
          <Settings2 size={18} className={iconColor} />
          <span className={`text-sm font-black uppercase tracking-[0.25em] ${iconColor}`}>
            {isCommercial ? (lang === 'EN' ? "EXECUTION BRIEF" : "商业执行单")
              : isExperimental ? (lang === 'EN' ? "REDUCTION PROTOCOL" : "还原协议")
                : isTrailer ? (lang === 'EN' ? "TRAILER BRIEF" : "预告片执行单")
                  : (lang === 'EN' ? "STORY SKIN" : "表层设定")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1.5 pr-3 border-r ${theme === 'retro' ? 'border-black/10' : 'border-zinc-800'}`}>
            <button
              onClick={onRandomize}
              className={`group/btn relative p-1.5 rounded hover:bg-white/5 text-zinc-500 hover:${iconColor} transition-all`}
            >
              <Shuffle size={14} />
              <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                {lang === 'EN' ? "Global Random" : "设定全局随机"}
              </span>
            </button>
            <button
              onClick={onReset}
              className={`group/btn relative p-1.5 rounded hover:bg-white/5 text-zinc-500 hover:text-red-400 transition-all`}
            >
              <RotateCcw size={14} />
              <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                {lang === 'EN' ? "Global Reset" : "设定重置"}
              </span>
            </button>
            <button
              onClick={() => onToggleLock?.(lockKey)}
              className={`group/btn relative p-1.5 rounded transition-all ${isAllLocked ? (theme === 'retro' ? 'bg-black/5 text-[var(--text-accent)] border border-[var(--text-accent)]/30' : 'bg-zinc-800 text-amber-500 border border-amber-500/30') : 'hover:bg-white/5 text-zinc-500 hover:text-white'}`}
            >
              {isAllLocked ? <Lock size={14} /> : <Unlock size={14} />}
              <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                {isAllLocked ? (lang === 'EN' ? "Global Unlock" : "设定解锁") : (lang === 'EN' ? "Global Lock" : "设定锁定")}
              </span>
            </button>
          </div>
          <button
            onClick={onClose}
            className={`group/btn relative p-1.5 ${theme === 'retro' ? 'hover:bg-black/5 text-black/40' : 'hover:bg-zinc-800 text-zinc-600'} hover:text-white transition-all rounded-full`}
          >
            <X size={18} />
            <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
              {lang === 'EN' ? "Close Panel" : "关闭"}
            </span>
          </button>
        </div>

        {/* Short Divider */}
        <div className={`absolute bottom-0 left-4 right-4 h-[1px] ${theme === 'retro' ? 'bg-black/60' : 'bg-zinc-800'}`} />
      </div>

      <div className={`flex-1 overflow-y-auto custom-scrollbar ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-[#050505]'}`}>
        <div className="min-h-full flex flex-col justify-start px-4 pt-4 pb-0 space-y-3">

        <section className={`rounded-xl border p-4 ${theme === 'retro' ? 'bg-[var(--bg-card)] border-[#8B261D]/20' : 'bg-zinc-950/50 border-zinc-800'}`}>
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest ${iconColor}`}>
              <FileText size={13} />
              {lang === 'EN' ? 'Custom Brief / Text Seed' : '自定义需求 / 文本种子'}
            </div>
            {customTextSeed && (
              <button
                type="button"
                onClick={() => onCustomTextSeedChange?.('')}
                className={`text-[9px] uppercase ${theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[#8B261D]' : 'text-zinc-500 hover:text-red-400'}`}
              >
                {lang === 'EN' ? 'Clear' : '清空'}
              </button>
            )}
          </div>
          <textarea
            value={customTextSeed}
            onChange={(e) => onCustomTextSeedChange?.(e.target.value)}
            placeholder={lang === 'EN'
              ? 'Write your actual creative intent here: story core, character relation, event, theme, hard constraints...'
              : '在这里写真正的创作意图：故事核、人物关系、事件、主题、硬约束、自定义导演需求...'}
            className={`w-full h-28 resize-none rounded-lg border px-3 py-3 text-xs leading-relaxed focus:outline-none transition-colors ${theme === 'retro' ? 'bg-white/45 border-[#8B261D]/20 text-[var(--text-main)] placeholder-black/35 focus:border-[#8B261D]/50' : 'bg-black/40 border-zinc-800 text-zinc-300 placeholder-zinc-600 focus:border-zinc-600'}`}
          />
          <div className={`mt-2 text-[10px] leading-relaxed ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'}`}>
            {lang === 'EN'
              ? 'This text is the global semantic anchor. Image notes on the right only guide image reading.'
              : '这里是全局语义锚点。右侧图片下方的文字只用于说明图片该如何被读取。'}
          </div>
        </section>

        {isCommercial ? (
          <div className="space-y-3">
            <section>
              <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <Anchor size={12} className={iconColor} /> {lang === 'EN' ? "STRATEGY BASE" : "策略基石"}
              </div>
              <div className={`leading-relaxed font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Brand Status:" : "品牌现状处于"}</span>
                <SkinSlot blockId="comm_skin_status" placeholder={lang === 'EN' ? "Status" : "现状"} isBlockLocked={lockedModules["comm_skin_status"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Duration:" : "，全片时长为"}</span> <SkinSlot blockId="comm_skin_length" placeholder={lang === 'EN' ? "Length" : "时长"} isBlockLocked={lockedModules["comm_skin_length"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Platform:" : "，针对平台"}</span> <SkinSlot blockId="comm_skin_media" placeholder={lang === 'EN' ? "Platform" : "投放平台"} isBlockLocked={lockedModules["comm_skin_media"]} {...slotProps} />
                <span>{lang === 'EN' ? ". Core Strategy:" : "。核心采用"}</span> <SkinSlot blockId="comm_skin_structure" placeholder={lang === 'EN' ? "Strategy" : "叙事形态"} isBlockLocked={lockedModules["comm_skin_structure"]} {...slotProps} /> <span>{lang === 'EN' ? "." : "策略。"}</span>
              </div>
            </section>

            <section>
              <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <Palette size={12} className={iconColor} /> {lang === 'EN' ? "VISUAL AESTHETICS" : "视觉美学"}
              </div>
              <div className={`leading-relaxed font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Style Ref:" : "参考"}</span> <SkinSlot blockId="comm_skin_auteur" placeholder={lang === 'EN' ? "Director" : "导演风格"} isBlockLocked={lockedModules["comm_skin_auteur"]} {...slotProps} /> <span>{lang === 'EN' ? ", " : "的语言，"}</span>
                <span>{lang === 'EN' ? "Tone:" : "影调倾向"}</span> <SkinSlot blockId="comm_skin_chroma" placeholder={lang === 'EN' ? "Tone" : "色彩影调"} isBlockLocked={lockedModules["comm_skin_chroma"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Emotion:" : "，传递情绪"}</span> <SkinSlot blockId="comm_skin_emotion" placeholder={lang === 'EN' ? "Emotion" : "影片情绪"} isBlockLocked={lockedModules["comm_skin_emotion"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Art Dir:" : "，美术参考"}</span> <SkinSlot blockId="comm_skin_benchmark" placeholder={lang === 'EN' ? "Art Dir" : "美术标杆"} isBlockLocked={lockedModules["comm_skin_benchmark"]} {...slotProps} /><span>{lang === 'EN' ? "." : "。"}</span>
              </div>
            </section>

            <section>
              <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <Box size={12} className={iconColor} /> {lang === 'EN' ? "PRODUCT CONTEXT" : "产品场域"}
              </div>
              <div className={`leading-relaxed font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Anchor:" : "产品锚定为"}</span> <SkinSlot blockId="comm_skin_anchor" placeholder={lang === 'EN' ? "Anchor" : "产品锚点"} isBlockLocked={lockedModules["comm_skin_anchor"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Scenario:" : "，核心场景在"}</span> <SkinSlot blockId="comm_skin_scenario" placeholder={lang === 'EN' ? "Scenario" : "应用场景"} isBlockLocked={lockedModules["comm_skin_scenario"]} {...slotProps} />
                <span>{lang === 'EN' ? ", RTB:" : "，背书逻辑在"}</span> <SkinSlot blockId="comm_skin_endorsement" placeholder={lang === 'EN' ? "Endorsement" : "权威环境"} isBlockLocked={lockedModules["comm_skin_endorsement"]} {...slotProps} /><span>{lang === 'EN' ? "." : "。"}</span>
              </div>
            </section>
          </div>
        ) : isExperimental ? (
          <div className="space-y-3">
            <section>
              <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <TestTube size={12} className={iconColor} /> {lang === 'EN' ? "PHENOMENOLOGICAL REDUCTION" : "现象学还原设定"}
              </div>
              <div className={`leading-relaxed font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "In a state of" : "处于"}</span> <SkinSlot blockId="exp_skin_context" placeholder={lang === 'EN' ? "Context" : "还原语境"} isBlockLocked={lockedModules["exp_skin_context"]} {...slotProps} />
                <span>{lang === 'EN' ? ", gazing at" : "之中，凝视"}</span> <SkinSlot blockId="exp_skin_object" placeholder={lang === 'EN' ? "Object" : "意向对象"} isBlockLocked={lockedModules["exp_skin_object"]} {...slotProps} />
                <span>{lang === 'EN' ? ", filtered through" : "，透过"}</span> <SkinSlot blockId="exp_skin_method" placeholder={lang === 'EN' ? "Method" : "还原方法"} isBlockLocked={lockedModules["exp_skin_method"]} {...slotProps} />
                <span>{lang === 'EN' ? "." : "进行本质直观。"}</span>
              </div>
            </section>
          </div>
        ) : isTrailer ? (
          <div className="space-y-3">
            <section>
              <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <Zap size={12} className={iconColor} /> {lang === 'EN' ? "VIRTUAL FANTASY PROTOCOL" : "虚拟幻象设定"}
              </div>
              <div className={`leading-relaxed font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Based on" : "基于"}</span> <SkinSlot blockId="trl_skin_genre" placeholder={lang === 'EN' ? "Genre" : "类型外壳"} isBlockLocked={lockedModules["trl_skin_genre"]} {...slotProps} />
                <span>{lang === 'EN' ? "logic, using" : "逻辑，采用"}</span> <SkinSlot blockId="trl_skin_rhythm" placeholder={lang === 'EN' ? "Rhythm" : "剪辑节奏"} isBlockLocked={lockedModules["trl_skin_rhythm"]} {...slotProps} />
                <span>{lang === 'EN' ? "pacing, anchored by" : "进行推进，以"}</span> <SkinSlot blockId="trl_skin_hook" placeholder={lang === 'EN' ? "Hook" : "听觉钩子"} isBlockLocked={lockedModules["trl_skin_hook"]} {...slotProps} />
                <span>{lang === 'EN' ? "as the hook." : "作为核心诱饵。"}</span>
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-3">
            {/* ═══ Section 1: 故事结构 (STORY STRUCTURE) ═══ */}
            <section className="group">
              <div className={`flex items-center justify-between text-xs font-black uppercase tracking-widest border-b pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)]/30' : 'text-zinc-500 group-hover:text-zinc-300 border-zinc-800'} transition-colors`}>
                <div className="flex items-center gap-2">
                  <Settings2 size={12} className={iconColor} /> {lang === 'EN' ? "STORY STRUCTURE" : "故事结构"}
                </div>

                <div className="flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onRandomizeStructureGroup?.()}
                    className={`group/btn relative flex items-center justify-center p-1 rounded transition-all ${theme === 'retro' ? 'text-[var(--text-muted)] hover:bg-black/5 hover:text-[var(--text-main)]' : 'text-zinc-500 hover:bg-white/5 hover:text-white'}`}
                  >
                    <Shuffle size={12} />
                    <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                      {lang === 'EN' ? 'Randomize Group' : '展开参数选项'}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      const blocks = ['skin_genre', 'skin_structure', 'skin_volume'];
                      const isAllLocked = blocks.every(b => lockedModules[b]);
                      blocks.forEach(b => {
                        if (!!lockedModules[b] === isAllLocked) onToggleLock?.(b);
                      });
                    }}
                    className={`group/btn relative flex items-center justify-center p-1 rounded transition-all ${['skin_genre', 'skin_structure', 'skin_volume'].every(b => lockedModules[b]) ? (theme === 'retro' ? 'bg-black/5 text-[var(--text-accent)] border border-[var(--text-accent)]/30' : 'bg-zinc-800 text-amber-500 border border-amber-500/30') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:bg-black/5 hover:text-[var(--text-main)] border border-transparent' : 'text-zinc-500 hover:bg-white/5 hover:text-white border border-transparent')}`}
                  >
                    {['skin_genre', 'skin_structure', 'skin_volume'].every(b => lockedModules[b]) ? <Lock size={12} /> : <Unlock size={12} />}
                    <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                      {['skin_genre', 'skin_structure', 'skin_volume'].every(b => lockedModules[b]) ? (lang === 'EN' ? 'Unlock Section' : '解锁本组') : (lang === 'EN' ? 'Lock Section' : '锁定本组')}
                    </span>
                  </button>
                  <button
                    onClick={() => ['skin_genre', 'skin_structure', 'skin_volume'].forEach(b => onClearBlock?.(b))}
                    className={`group/btn relative flex items-center justify-center p-1 rounded transition-all ${theme === 'retro' ? 'text-[var(--text-muted)] hover:bg-black/5 hover:text-red-700' : 'text-zinc-500 hover:bg-white/5 hover:text-red-400'}`}
                  >
                    <RotateCcw size={12} />
                    <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                      {lang === 'EN' ? 'Clear Group' : '清空本组'}
                    </span>
                  </button>
                </div>
              </div>
              <div className={`leading-loose font-serif text-[15px] ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-400'}`}>
                <div>
                  <div>
                    <span>{lang === 'EN' ? "Genre: " : "类型："}</span>
                    <SkinSlot blockId="skin_genre" placeholder={lang === 'EN' ? "Genre Drive" : "叙事动力"} isBlockLocked={lockedModules["skin_genre"]} {...slotProps} />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6">
                    <div>
                      <span>{lang === 'EN' ? "Structure: " : "结构："}</span>
                      <SkinSlot blockId="skin_structure" placeholder={lang === 'EN' ? "Structure" : "叙事结构"} isBlockLocked={lockedModules["skin_structure"]} {...slotProps} />
                    </div>
                    <div>
                      <span>{lang === 'EN' ? "Volume: " : "体量："}</span>
                      <SkinSlot blockId="skin_volume" placeholder={lang === 'EN' ? "Volume" : "故事体量"} isBlockLocked={lockedModules["skin_volume"]} {...slotProps} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ═══ Section 2: 故事摘要 (STORY SUMMARY) ═══ */}
            <section className="group">
              <div className={`flex items-center justify-between text-xs font-black uppercase tracking-widest border-b pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)]/30' : 'text-zinc-500 group-hover:text-zinc-300 border-zinc-800'} transition-colors`}>
                <div className="flex items-center gap-2">
                  <Globe size={12} className={iconColor} /> {lang === 'EN' ? "STORY SUMMARY" : "故事摘要"}
                </div>

                <div className="flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setSummaryExpanded(!summaryExpanded)}
                    className={`group/btn relative flex items-center justify-center p-1 rounded transition-all ${summaryExpanded ? (theme === 'retro' ? 'bg-black/5 text-[var(--text-accent)] border border-[var(--text-accent)]/30' : 'bg-zinc-800 text-gold-primary border border-gold-primary/30') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:bg-black/5 hover:text-[var(--text-main)] border border-transparent' : 'text-zinc-500 hover:bg-white/5 hover:text-white border border-transparent')}`}
                  >
                    {summaryExpanded ? <X size={12} /> : <Plus size={12} />}
                    <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                      {summaryExpanded ? (lang === 'EN' ? 'Collapse' : '收起') : (lang === 'EN' ? 'Expand Sentence' : '展开完整句式')}
                    </span>
                  </button>
                  <button
                    onClick={() => onRandomizeSummaryGroup?.()}
                    className={`group/btn relative flex items-center justify-center p-1 rounded transition-all ${theme === 'retro' ? 'text-[var(--text-muted)] hover:bg-black/5 hover:text-[var(--text-main)]' : 'text-zinc-500 hover:bg-white/5 hover:text-white'}`}
                  >
                    <Shuffle size={12} />
                    <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                      {lang === 'EN' ? 'Randomize Group' : '展开参数选项'}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      const blocks = ['skin_era', 'skin_society', 'skin_age', 'skin_gender', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending'];
                      const isAllLocked = blocks.every(b => lockedModules[b]);
                      blocks.forEach(b => {
                        if (!!lockedModules[b] === isAllLocked) onToggleLock?.(b);
                      });
                    }}
                    className={`group/btn relative flex items-center justify-center p-1 rounded transition-all ${['skin_era', 'skin_society', 'skin_age', 'skin_gender', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending'].every(b => lockedModules[b]) ? (theme === 'retro' ? 'bg-black/5 text-[var(--text-accent)] border border-[var(--text-accent)]/30' : 'bg-zinc-800 text-amber-500 border border-amber-500/30') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:bg-black/5 hover:text-[var(--text-main)] border border-transparent' : 'text-zinc-500 hover:bg-white/5 hover:text-white border border-transparent')}`}
                  >
                    {['skin_era', 'skin_society', 'skin_age', 'skin_gender', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending'].every(b => lockedModules[b]) ? <Lock size={12} /> : <Unlock size={12} />}
                    <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                      {['skin_era', 'skin_society', 'skin_age', 'skin_gender', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending'].every(b => lockedModules[b]) ? (lang === 'EN' ? 'Unlock Section' : '解锁本组') : (lang === 'EN' ? 'Lock Section' : '锁定本组')}
                    </span>
                  </button>
                  <button
                    onClick={() => ['skin_era', 'skin_society', 'skin_age', 'skin_gender', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending'].forEach(b => onClearBlock?.(b))}
                    className={`group/btn relative flex items-center justify-center p-1 rounded transition-all ${theme === 'retro' ? 'text-[var(--text-muted)] hover:bg-black/5 hover:text-red-700' : 'text-zinc-500 hover:bg-white/5 hover:text-red-400'}`}
                  >
                    <RotateCcw size={12} />
                    <span className={`absolute top-full mt-1 right-0 px-2 py-1 text-[10px] font-normal whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 pointer-events-none z-[100] rounded shadow-md ${theme === 'retro' ? 'bg-[#1A1814] text-[var(--text-main)] border border-[var(--border-main)]/50' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
                      {lang === 'EN' ? 'Clear Group' : '清空本组'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Dynamic Sentence Composition */}
              <div className={`leading-loose font-serif text-[15px] ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-400'}`}>

                {/* Fragment A: SUR3+SUR2 — World Setting (smart grammar) */}
                {(() => {
                  const hasTime = selectedYear !== null || selectedCountry !== '';
                  const hasEra = hasBlockValue(['skin_era']);
                  const showFragment = summaryExpanded || hasTime || hasEra;
                  if (!showFragment) return null;
                  const showTime = hasTime || summaryExpanded;
                  const showEra = hasEra || summaryExpanded;
                  const isLast = lastVisibleFrag === 'A';
                  return (
                    <span className="animate-in fade-in duration-300">
                      <span>{lang === 'EN' ? "In " : "在"}</span>
                      {showTime && renderTimeLocationSlot()}
                      {showTime && showEra && <span>{lang === 'EN' ? " " : "的"}</span>}
                      {showEra && <SkinSlot blockId="skin_era" placeholder={lang === 'EN' ? "Background" : "背景场域"} isBlockLocked={lockedModules["skin_era"]} {...slotProps} />}
                      {showEra && !isLast && <span>{lang === 'EN' ? " world, " : "世界中，"}</span>}
                      {showEra && isLast && <span>{lang === 'EN' ? " world" : "世界中"}</span>}
                      {!showEra && !isLast && <span>，</span>}
                    </span>
                  );
                })()}

                {/* Fragment B: SUR4 — Society (SUR4X removed in v3.1) */}
                {(() => {
                  const has4 = hasBlockValue(['skin_society']);
                  const showFragment = summaryExpanded || has4;
                  if (!showFragment) return null;
                  const show4 = has4 || summaryExpanded;
                  const isLast = lastVisibleFrag === 'B';
                  return (
                    <span className="animate-in fade-in duration-300">
                      <span>{lang === 'EN' ? "society under " : "运行于"}</span>
                      {show4 && <SkinSlot blockId="skin_society" placeholder={lang === 'EN' ? "Social Order" : "社会形态"} isBlockLocked={lockedModules["skin_society"]} {...slotProps} />}
                      <span>{isLast ? (lang === 'EN' ? " " : "社会体系之下") : (lang === 'EN' ? ", " : "社会体系之下，")}</span>
                    </span>
                  );
                })()}

                {/* Fragment C: SUR8+SUR7+SUR9 — Character (casting panel + role preset) */}
                {(() => {
                  const hasIdentity = selectedGender !== '' || selectedAge !== '';
                  const hasProf = hasBlockValue(['skin_profession']);
                  const showFragment = summaryExpanded || hasIdentity || hasProf;
                  if (!showFragment) return null;
                  const showIdentity = hasIdentity || summaryExpanded;
                  const showProf = hasProf || summaryExpanded;
                  const isLast = lastVisibleFrag === 'C';
                  return (
                    <span className="animate-in fade-in duration-300">
                      <span>{lang === 'EN' ? "A " : "一个"}</span>
                      {showIdentity && renderIdentitySlot()}
                      {showProf && <SkinSlot blockId="skin_profession" placeholder={lang === 'EN' ? "Role Preset" : "职业身份"} isBlockLocked={lockedModules["skin_profession"]} {...slotProps} />}
                      {!isLast && <span>，</span>}
                    </span>
                  );
                })()}

                {/* Fragment D: SUR10X+SUR10 — Belief preset (smart grammar) */}
                {(() => {
                  const has10x = hasBlockValue(['sur10x']);
                  const has10 = hasBlockValue(['skin_ideology']);
                  const showFragment = summaryExpanded || has10x || has10;
                  if (!showFragment) return null;
                  const show10x = has10x || summaryExpanded;
                  const show10 = has10 || summaryExpanded;
                  const isLast = lastVisibleFrag === 'D';
                  return (
                    <span className="animate-in fade-in duration-300">
                      <span>{lang === 'EN' ? "with " : "带着"}</span>
                      {show10x && <SkinSlot blockId="sur10x" placeholder={lang === 'EN' ? "Fracture" : "信念裂度"} isBlockLocked={lockedModules["sur10x"]} {...slotProps} />}
                      {show10x && show10 && <span>{lang === 'EN' ? " towards " : "的"}</span>}
                      {show10 && <SkinSlot blockId="skin_ideology" placeholder={lang === 'EN' ? "Belief Preset" : "信念预设"} isBlockLocked={lockedModules["skin_ideology"]} {...slotProps} />}
                      <span>{isLast ? (lang === 'EN' ? " language" : "语言") : (lang === 'EN' ? " language, " : "语言，")}</span>
                    </span>
                  );
                })()}

                {/* Fragment E: SUR5 — Object Anchor */}
                {(summaryExpanded || hasBlockValue(['skin_everything'])) && (
                  <span className="animate-in fade-in duration-300">
                    <span>{lang === 'EN' ? "around " : "围绕"}</span>
                    <SkinSlot blockId="skin_everything" placeholder={lang === 'EN' ? "Object Anchor" : "对象预设"} isBlockLocked={lockedModules["skin_everything"]} {...slotProps} />
                    <span>{lastVisibleFrag === 'E' ? (lang === 'EN' ? "" : "展开") : (lang === 'EN' ? ", " : "展开，")}</span>
                  </span>
                )}

                {/* Fragment F: SUR6 — Space Container */}
                {(summaryExpanded || hasBlockValue(['skin_location'])) && (
                  <span className="animate-in fade-in duration-300">
                    <span>{lang === 'EN' ? "set in " : "事件发生于"}</span>
                    <SkinSlot blockId="skin_location" placeholder={lang === 'EN' ? "Space Container" : "空间容器"} isBlockLocked={lockedModules["skin_location"]} {...slotProps} />
                    <span>{lastVisibleFrag === 'F' ? "" : (lang === 'EN' ? ", " : "，")}</span>
                  </span>
                )}

                {/* Fragment G: SUR-END — Visible Ending */}
                {(summaryExpanded || hasBlockValue(['skin_ending'])) && (
                  <span className="animate-in fade-in duration-300">
                    <span>{lang === 'EN' ? "culminating in " : "最终走向"}</span>
                    <SkinSlot blockId="skin_ending" placeholder={lang === 'EN' ? "Visible Ending" : "显性收场"} isBlockLocked={lockedModules["skin_ending"]} {...slotProps} />
                  </span>
                )}

                {/* Sentence closing: always end with "的故事。" */}
                {hasAnyFragment && (
                  <span className={`font-serif ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-400'}`}>
                    {lang === 'EN' ? " story." : "的故事。"}
                  </span>
                )}

                {/* Empty hint when collapsed and nothing selected */}
                {!hasAnyFragment && (
                  <span className={`text-xs italic ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600'}`}>
                    {lang === 'EN' ? 'Click + to expand the full story sentence...' : '点击 + 展开完整故事句式...'}
                  </span>
                )}
              </div>
            </section>

          </div>

        )}

        <div className="h-20"></div>
      </div>
    </div>

      {/* TIME LOCATION MODAL */}
      {isTimeModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-4">
          <div className={`w-full max-w-lg ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-[#0c0c0c]'} border border-[var(--border-main)] rounded-2xl shadow-2xl p-6 relative flex flex-col max-h-[95vh]`}>
            <button onClick={() => setIsTimeModalOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors z-10">
              <X size={20} />
            </button>
            <div className={`flex items-center gap-3 mb-6 border-b ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-800'} pb-4 shrink-0`}>
              <Globe size={20} className={iconColor} />
              <h2 className={`text-lg font-serif font-bold ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-white'} tracking-wider`}>{lang === 'EN' ? "SUR3.Spacetime Coordinate System" : "SUR3.时空坐标系"}</h2>
            </div>

            <div className="overflow-y-auto custom-scrollbar flex-1 pr-1">
              {renderTimeLocationUI()}
            </div>

            <div className={`mt-6 pt-5 border-t flex justify-between shrink-0 ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-800'}`}>
              <div className="flex gap-2 items-center">
                <button
                  onClick={handleGlobalRandomizeCoordinates}
                  className={`px-3 py-2 h-9 rounded flex items-center gap-2 ${theme === 'retro' ? 'bg-[var(--bg-main)] border border-[var(--border-main)]/40 hover:text-[var(--text-main)] text-[var(--text-muted)]' : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-white'} transition-all`}
                  title={lang === 'EN' ? 'Global Randomize' : '全局随机'}
                >
                  <Dice5 size={14} />
                  <span className="text-[10px] font-bold uppercase hidden sm:inline">{lang === 'EN' ? "Random" : "全随机"}</span>
                </button>
                <button
                  onClick={handleGlobalToggleLockCoordinates}
                  className={`px-3 py-2 h-9 rounded flex items-center gap-2 ${theme === 'retro' ? 'bg-[var(--bg-main)] border border-[var(--border-main)]/40' : 'bg-zinc-900 border border-zinc-800'} transition-all ${isCountryLocked && isYearLocked ? (theme === 'retro' ? 'text-[var(--text-accent)] border-[var(--text-accent)]/30' : 'text-amber-500 border-amber-500/30') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'text-zinc-500 hover:text-white hover:border-zinc-600')}`}
                  title={lang === 'EN' ? 'Global Lock' : '全局锁定'}
                >
                  {isCountryLocked && isYearLocked ? <Lock size={14} /> : <Unlock size={14} />}
                </button>
                <button
                  onClick={handleGlobalResetCoordinates}
                  className={`px-3 py-2 h-9 rounded flex items-center gap-2 ${theme === 'retro' ? 'bg-[var(--bg-main)] border border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-500 hover:text-red-400'} transition-all`}
                  title={lang === 'EN' ? 'Global Clear' : '全局清空'}
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <button
                onClick={() => setIsTimeModalOpen(false)}
                className={`px-8 h-9 ${theme === 'retro' ? 'bg-[var(--text-accent)] text-white hover:bg-opacity-90 shadow-[0_0_20px_rgba(139,38,29,0.15)] underline decoration-white/30 underline-offset-4' : 'bg-white hover:bg-zinc-200 text-black shadow-lg shadow-white/5'} font-bold uppercase tracking-widest rounded transition-colors text-xs flex items-center gap-2`}
              >
                <Check size={14} />
                {lang === 'EN' ? "CONFIRM" : "确认设定"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CASTING MODAL (SUR7+SUR8) */}
      {isIdentityModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-4">
          <div className={`w-full max-w-lg ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-[#0c0c0c]'} border border-[var(--border-main)] rounded-2xl shadow-2xl p-6 relative flex flex-col max-h-[95vh]`}>
            <button onClick={() => setIsIdentityModalOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors z-10">
              <X size={20} />
            </button>
            <div className={`flex items-center gap-3 mb-6 border-b ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-800'} pb-4 shrink-0`}>
              <User size={20} className={iconColor} />
              <h2 className={`text-lg font-serif font-bold ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-white'} tracking-wider`}>{lang === 'EN' ? "SUR7/8. Casting & Age" : "SUR7/8.选角与年龄"}</h2>
            </div>

            <div className="overflow-y-auto custom-scrollbar flex-1 pr-1 space-y-6">
              {/* Gender Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-sm font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-400'}`}>
                    {lang === 'EN' ? 'Gender' : '性别'}
                  </h3>
                  <div className="flex items-center gap-1">
                    <button onClick={handleRandomGender} disabled={isGenderLocked} className={`p-1.5 rounded ${theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-main)]/30' : 'text-zinc-600 hover:text-white border border-zinc-800 hover:border-zinc-600'} transition-all ${isGenderLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Dice5 size={12} /></button>
                    <button onClick={handleToggleLockGender} className={`p-1.5 rounded border transition-all ${isGenderLocked ? (theme === 'retro' ? 'text-[var(--text-accent)] border-[var(--text-accent)]/30 bg-[var(--text-accent)]/5' : 'text-amber-500 border-amber-500/30 bg-amber-900/20') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)] border-[var(--border-main)]/30' : 'text-zinc-600 hover:text-white border-zinc-800 hover:border-zinc-600')}`}>{isGenderLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
                    <button onClick={handleResetGender} disabled={isGenderLocked} className={`p-1.5 rounded ${theme === 'retro' ? 'text-[var(--text-muted)] hover:text-red-700 border border-[var(--border-main)]/30' : 'text-zinc-600 hover:text-red-400 border border-zinc-800 hover:border-red-500/50'} transition-all ${isGenderLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Trash2 size={12} /></button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {/* Custom Gender Cell */}
                  <div className={`rounded transition-all flex items-center justify-center h-[52px] border ${
                    selectedGender && !GENDER_PRESETS.some(g => selectedGender === (lang === 'EN' ? g.en : g.cn))
                      ? (theme === 'retro' ? `bg-[var(--text-accent)]/10 border-[var(--text-accent)]/50` : `bg-zinc-800/80 border-zinc-500 shadow-sm shadow-black`)
                      : (theme === 'retro' ? `bg-[var(--bg-panel)] border-[var(--border-main)]/30` : `bg-zinc-900/50 border-zinc-800`)
                  } ${isGenderLocked ? 'opacity-40 cursor-not-allowed' : ''}`}>
                    <input
                      type="text"
                      placeholder={lang === 'EN' ? 'Custom' : '自定义'}
                      value={selectedGender && !GENDER_PRESETS.some(g => selectedGender === (lang === 'EN' ? g.en : g.cn)) ? selectedGender : customGenderInput}
                      onChange={(e) => {
                        if (isGenderLocked) return;
                        setCustomGenderInput(e.target.value);
                        setSelectedGender(e.target.value);
                      }}
                      disabled={isGenderLocked}
                      className={`w-full h-full bg-transparent text-sm font-bold text-center px-1 border-none focus:outline-none ${
                        selectedGender && !GENDER_PRESETS.some(g => selectedGender === (lang === 'EN' ? g.en : g.cn))
                          ? iconColor
                          : (theme === 'retro' ? 'text-[var(--text-main)] placeholder-[var(--text-muted)]/50' : 'text-white placeholder-zinc-700')
                      }`}
                    />
                  </div>
                  {/* Preset Gender Cells */}
                  {GENDER_PRESETS.map(g => {
                    const label = lang === 'EN' ? g.en : g.cn;
                    const isActive = selectedGender === label;
                    return (
                      <button
                        key={g.id}
                        onClick={() => { if (!isGenderLocked) { setSelectedGender(isActive ? '' : label); setCustomGenderInput(''); } }}
                        disabled={isGenderLocked}
                        className={`rounded text-center transition-all border flex flex-col items-center justify-center p-2 min-h-[52px] ${
                          isActive
                            ? (theme === 'retro' ? `bg-[var(--text-accent)]/10 border-[var(--text-accent)]/50 ${iconColor}` : `bg-zinc-800/80 border-zinc-500 shadow-sm shadow-black ${iconColor}`)
                            : (theme === 'retro' ? `bg-[var(--bg-panel)] border-[var(--border-main)]/30 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]/60` : `bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 hover:border-zinc-700`)
                        } ${isGenderLocked ? 'opacity-40 cursor-not-allowed' : ''}`}
                      >
                        <span className="text-sm font-bold leading-tight uppercase tracking-wider">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Age Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-sm font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-400'}`}>
                    {lang === 'EN' ? 'Age' : '年龄'}
                  </h3>
                  <div className="flex items-center gap-1">
                    <button onClick={handleRandomAge} disabled={isAgeLocked} className={`p-1.5 rounded ${theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-main)]/30' : 'text-zinc-600 hover:text-white border border-zinc-800 hover:border-zinc-600'} transition-all ${isAgeLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Dice5 size={12} /></button>
                    <button onClick={handleToggleLockAge} className={`p-1.5 rounded border transition-all ${isAgeLocked ? (theme === 'retro' ? 'text-[var(--text-accent)] border-[var(--text-accent)]/30 bg-[var(--text-accent)]/5' : 'text-amber-500 border-amber-500/30 bg-amber-900/20') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)] border-[var(--border-main)]/30' : 'text-zinc-600 hover:text-white border-zinc-800 hover:border-zinc-600')}`}>{isAgeLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
                    <button onClick={handleResetAge} disabled={isAgeLocked} className={`p-1.5 rounded ${theme === 'retro' ? 'text-[var(--text-muted)] hover:text-red-700 border border-[var(--border-main)]/30' : 'text-zinc-600 hover:text-red-400 border border-zinc-800 hover:border-red-500/50'} transition-all ${isAgeLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Trash2 size={12} /></button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {/* Custom Age Cell */}
                  <div className={`rounded transition-all flex items-center justify-center h-[52px] border ${
                    selectedAge && !AGE_PRESETS.some(a => selectedAge === (lang === 'EN' ? a.en : a.cn))
                      ? (theme === 'retro' ? `bg-[var(--text-accent)]/10 border-[var(--text-accent)]/50` : `bg-zinc-800/80 border-zinc-500 shadow-sm shadow-black`)
                      : (theme === 'retro' ? `bg-[var(--bg-panel)] border-[var(--border-main)]/30` : `bg-zinc-900/50 border-zinc-800`)
                  } ${isAgeLocked ? 'opacity-40 cursor-not-allowed' : ''}`}>
                    <input
                      type="text"
                      placeholder={lang === 'EN' ? 'Custom' : '自定义'}
                      value={selectedAge && !AGE_PRESETS.some(a => selectedAge === (lang === 'EN' ? a.en : a.cn)) ? selectedAge : customAgeInput}
                      onChange={(e) => {
                        if (isAgeLocked) return;
                        setCustomAgeInput(e.target.value);
                        setSelectedAge(e.target.value);
                      }}
                      disabled={isAgeLocked}
                      className={`w-full h-full bg-transparent text-sm font-bold text-center px-1 border-none focus:outline-none ${
                        selectedAge && !AGE_PRESETS.some(a => selectedAge === (lang === 'EN' ? a.en : a.cn))
                          ? iconColor
                          : (theme === 'retro' ? 'text-[var(--text-main)] placeholder-[var(--text-muted)]/50' : 'text-white placeholder-zinc-700')
                      }`}
                    />
                  </div>
                  {/* Preset Age Cells */}
                  {AGE_PRESETS.map(a => {
                    const label = lang === 'EN' ? a.en : a.cn;
                    const isActive = selectedAge === label;
                    return (
                      <button
                        key={a.id}
                        onClick={() => { if (!isAgeLocked) { setSelectedAge(isActive ? '' : label); setCustomAgeInput(''); } }}
                        disabled={isAgeLocked}
                        className={`rounded text-center transition-all border flex flex-col items-center justify-center p-2 min-h-[52px] ${
                          isActive
                            ? (theme === 'retro' ? `bg-[var(--text-accent)]/10 border-[var(--text-accent)]/50 ${iconColor}` : `bg-zinc-800/80 border-zinc-500 shadow-sm shadow-black ${iconColor}`)
                            : (theme === 'retro' ? `bg-[var(--bg-panel)] border-[var(--border-main)]/30 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]/60` : `bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 hover:border-zinc-700`)
                        } ${isAgeLocked ? 'opacity-40 cursor-not-allowed' : ''}`}
                      >
                        <span className="text-sm font-bold leading-tight uppercase tracking-wider">{label}</span>
                        <span className={`text-[10px] mt-0.5 ${isActive ? 'opacity-80' : (theme === 'retro' ? 'text-[var(--text-muted)]/50' : 'text-zinc-600')}`}>{a.range}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={`mt-6 pt-5 border-t flex justify-between shrink-0 ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-800'}`}>
              <div className="flex gap-2 items-center">
                <button
                  onClick={handleGlobalRandomizeIdentity}
                  className={`px-3 py-2 h-9 rounded flex items-center gap-2 ${theme === 'retro' ? 'bg-[var(--bg-main)] border border-[var(--border-main)]/40 hover:text-[var(--text-main)] text-[var(--text-muted)]' : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-white'} transition-all`}
                  title={lang === 'EN' ? 'Global Randomize' : '全局随机'}
                >
                  <Dice5 size={14} />
                  <span className="text-[10px] font-bold uppercase hidden sm:inline">{lang === 'EN' ? "Random" : "全随机"}</span>
                </button>
                <button
                  onClick={handleGlobalToggleLockIdentity}
                  className={`px-3 py-2 h-9 rounded flex items-center gap-2 ${theme === 'retro' ? 'bg-[var(--bg-main)] border border-[var(--border-main)]/40' : 'bg-zinc-900 border border-zinc-800'} transition-all ${isGenderLocked && isAgeLocked ? (theme === 'retro' ? 'text-[var(--text-accent)] border-[var(--text-accent)]/30' : 'text-amber-500 border-amber-500/30') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'text-zinc-500 hover:text-white hover:border-zinc-600')}`}
                  title={lang === 'EN' ? 'Global Lock' : '全局锁定'}
                >
                  {isGenderLocked && isAgeLocked ? <Lock size={14} /> : <Unlock size={14} />}
                </button>
                <button
                  onClick={handleGlobalResetIdentity}
                  className={`px-3 py-2 h-9 rounded flex items-center gap-2 ${theme === 'retro' ? 'bg-[var(--bg-main)] border border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-500 hover:text-red-400'} transition-all`}
                  title={lang === 'EN' ? 'Global Clear' : '全局清空'}
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <button
                onClick={() => setIsIdentityModalOpen(false)}
                className={`px-8 h-9 ${theme === 'retro' ? 'bg-[var(--text-accent)] text-white hover:bg-opacity-90 shadow-[0_0_20px_rgba(139,38,29,0.15)] underline decoration-white/30 underline-offset-4' : 'bg-white hover:bg-zinc-200 text-black shadow-lg shadow-white/5'} font-bold uppercase tracking-widest rounded transition-colors text-xs flex items-center gap-2`}
              >
                <Check size={14} />
                {lang === 'EN' ? "CONFIRM" : "确认设定"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PORTAL TOOLTIP FOR SPACETIME ANCHOR */}
      {hoveredPortal && createPortal(
        <div
          className={`fixed z-[9999] w-max max-w-[320px] text-left p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none animate-in fade-in zoom-in-95 duration-100
            ${hoveredPortal.showAbove ? '-translate-y-full' : ''}
            ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#1A1814] border' : 'bg-[#0a0a0a]/95 backdrop-blur-xl border-zinc-800 border'}`}
          style={{
            top: hoveredPortal.pos.top,
            left: hoveredPortal.pos.left
          }}
        >
          <div className={`text-sm font-black uppercase tracking-[0.2em] mb-2 border-b pb-2 flex items-center gap-2 ${theme === 'retro' ? 'text-zinc-500 border-black/10' : 'text-zinc-500 border-white/10'}`}>
            <span className={theme === 'retro' ? 'text-[#8B261D]' : iconColor}>
              {hoveredPortal.header || "DETAILS"}
              {hoveredPortal.count !== undefined && hoveredPortal.count > 0 && (
                <span className={`ml-2 font-bold ${theme === 'retro' ? 'text-black' : 'text-white'}`}>({hoveredPortal.count})</span>
              )}
            </span>
          </div>
          <div className={`text-xs md:text-sm font-bold mb-3 leading-relaxed whitespace-pre-line ${theme === 'retro' ? 'text-black' : 'text-zinc-100'}`}>
            {lang === 'EN' && hoveredPortal.details.defEn ? hoveredPortal.details.defEn : hoveredPortal.details.def}
            <span className={`block text-[10px] italic mt-2 ${theme === 'retro' ? 'text-[#8B261D]/80' : 'text-zinc-400'}`}>
              {lang === 'EN' && hoveredPortal.details.coreEn ? hoveredPortal.details.coreEn : hoveredPortal.details.core}
            </span>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
