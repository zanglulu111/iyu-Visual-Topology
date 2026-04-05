
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NarrativeFieldState, BlueprintLanguage, DriverType } from '../types';
import {
  Settings2, X, Lock, Unlock, RotateCcw, Shuffle, Trash2,
  Anchor, Palette, Box, Info, TestTube, Zap, Dice5, Calendar, MapPin, Globe, Check, Edit2
} from 'lucide-react';
import {
  COMM_SKIN_LIBRARY,
  COMM_SKIN_BLOCKS,
  EXPERIMENTAL_SKIN_BLOCKS,
  EXPERIMENTAL_SKIN_LIBRARY,
  TRAILER_SKIN_BLOCKS,
  TRAILER_SKIN_LIBRARY,
  COUNTRY_PRESETS
} from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import { SKIN_LIBRARY, ALL_SKIN_BLOCKS } from '../data/skin_libraries';
import { GENRE_CATEGORIES } from '../data/genres';
import { WORLD_MOTIF_CATEGORIES } from '../data/world_motifs';
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
      if (driverType === DriverType.COMMERCIAL) return theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-cyan-400 text-cyan-400 bg-cyan-900/20';
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
      editAccent = 'text-cyan-400 border-cyan-400 focus:border-cyan-400';
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
                    title="Randomize"
                  >
                    <Shuffle size={10} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleTagLock?.(blockId, tag); }}
                    className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? (theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : lockedClass) : ''}`}
                    title={isTagLocked ? "Unlock" : "Lock"}
                  >
                    {isTagLocked ? <Lock size={10} /> : <Unlock size={10} />}
                  </button>

                  <button
                    onClick={(e) => handleEditClick(tag, e)}
                    disabled={isTagLocked}
                    className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                    title={lang === 'EN' ? "Customize" : "自定义"}
                  >
                    <Edit2 size={10} />
                  </button>

                  <button
                    onClick={(e) => { e.stopPropagation(); onRemove(blockId, tag); }}
                    disabled={isTagLocked}
                    className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400'} border rounded transition-colors ${isTagLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                    title="Delete"
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
              <button onClick={(e) => { e.stopPropagation(); onRandomizeBlock?.(blockId); }} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-white' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white'} border rounded transition-colors`}><Dice5 size={10} /></button>
              <button onClick={(e) => { e.stopPropagation(); onToggleLockBlock?.(blockId); }} className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-white' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white'} border rounded transition-colors ${isBlockLocked ? lockedClass : ''}`}>{isBlockLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>
              <button onClick={handleCreateClick} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-white' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white'} border rounded transition-colors`}><Edit2 size={10} /></button>
              <button onClick={(e) => { e.stopPropagation(); onClearBlock?.(blockId); }} disabled={isBlockLocked} className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-red-400'} border rounded transition-colors`}><Trash2 size={10} /></button>
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
              <span className={`block text-[10px] italic mt-2 ${theme === 'retro' ? 'text-[#8B261D]/80' : 'text-zinc-400'}`}>
                {lang === 'EN' && hoveredPortal.details.coreEn ? hoveredPortal.details.coreEn : hoveredPortal.details.core}
              </span>
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
  zIndex = 40
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
  const [selectedYear, setSelectedYear] = useState<number | null>(2026);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [contextData, setContextData] = useState<any>(null);

  // New state for modal in Narrative mode
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);

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

  // Sync state with fieldState on mount or change
  useEffect(() => {
    const yearTag = fieldState['skin_year_exact']?.[0];
    const countryTag = fieldState['skin_country_exact']?.[0];

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
          if (onUpdateState) {
            const newState = { ...fieldState, 'skin_country_exact': [targetVal] };
            onUpdateState(newState);
          }
        }
      }
    }
  }, [lang, selectedCountry]);

  // Update context when year changes
  useEffect(() => {
    const displayYear = selectedYear ?? 2026;
    const ctx = getHistoricalContext(displayYear);
    setContextData(ctx);

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

        if (fieldState['skin_country_exact']?.[0] !== selectedCountry) {
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
  }, [selectedYear, selectedCountry, fieldState, onUpdateState]);

  if (isAesthetic) return null;

  let accentBorder = 'border-gold-primary';
  let iconColor = 'text-gold-primary';
  let lockKey = 'NARR_SKIN';

  if (theme === 'retro') {
    accentBorder = 'border-[#8B261D]';
    iconColor = 'text-[#8B261D]';
  } else if (isCommercial) {
    accentBorder = 'border-cyan-400';
    iconColor = 'text-cyan-400';
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
    // SUR3 XOR Logic: If randomizing coordinates (Dice), clear era
    if (!lockedModules?.['skin_era'] && (fieldState['skin_era'] || []).length > 0) {
      onUpdateState({ ...fieldState, skin_era: [] });
    }
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

  // Specialized Renderer for Time/Location Slot in Sidebar
  const renderTimeLocationSlot = () => {
    const hasTimeOrLoc = selectedYear !== null || selectedCountry !== "";
    const displayText = selectedYear !== null
      ? (lang === 'EN'
        ? `${selectedYear}${selectedCountry ? ' ' + selectedCountry : ''}`
        : `${selectedYear}年${selectedCountry}`)
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
              title="Randomize"
            >
              <Dice5 size={10} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleGlobalToggleLockCoordinates(); }}
              className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isLocked ? (theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-gold-primary text-gold-primary bg-amber-900/20') : ''}`}
              title={isLocked ? "Unlock" : "Lock"}
            >
              {isLocked ? <Lock size={10} /> : <Unlock size={10} />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setIsTimeModalOpen(true); }}
              disabled={isLocked}
              className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
              title={lang === 'EN' ? "Settings" : "设置"}
            >
              <Edit2 size={10} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleGlobalResetCoordinates(); }}
              disabled={isLocked}
              className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400'} border rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
              title="Reset"
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
                  {selectedYear === null ? (lang === 'EN' ? "AUTO" : "自动") : selectedYear}
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

      {/* SECTION 2: Spacetime Field (SUR3B) */}
      <section>
        <div className={`flex items-center gap-2 mb-4 pb-2 border-b ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-700'}`}>
          <Anchor size={14} className={theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-400'} />
          <span className={`text-xs font-black uppercase tracking-widest ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
            {lang === 'EN' ? "Spacetime Field (SUR3B)" : "时空场域 (SUR3B)"}
          </span>
        </div>
        <div className={`p-4 rounded-lg border flex items-center justify-center font-serif text-lg ${theme === 'retro' ? 'border-[var(--border-main)]/30 bg-[var(--bg-panel)]' : 'border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900'} transition-all min-h-[80px]`}>
           <SkinSlot blockId="skin_era" placeholder={lang === 'EN' ? "Attach Field (Preset)" : "接入宏观时空场域"} isBlockLocked={lockedModules["skin_era"]} alwaysShowButtons={true} {...slotProps} />
        </div>
        <div className={`text-[10px] mt-4 text-left leading-relaxed ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-400'}`}>
          {lang === 'EN' ? "Note: Specific coordinates and presets operate independently for precision control." : "注：微观坐标与宏观场域各自独立，双选时共同定义表层。全局随机时仅保留一项。"}
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
              className={`p-1.5 rounded hover:bg-white/5 text-zinc-500 hover:${iconColor} transition-all`}
              title={lang === 'EN' ? "Smart Randomize (Coherent)" : "智能级联随机"}
            >
              <Shuffle size={14} />
            </button>
            <button
              onClick={onReset}
              className="p-1.5 rounded hover:bg-white/5 text-zinc-500 hover:text-red-400 transition-all"
              title={lang === 'EN' ? "Reset" : "重置"}
            >
              <RotateCcw size={14} />
            </button>
            <button
              onClick={() => onToggleLock?.(lockKey)}
              className={`p-1.5 rounded transition-all ${isAllLocked ? (theme === 'retro' ? 'bg-black/5 text-[var(--text-accent)] border border-[var(--text-accent)]/30' : 'bg-zinc-800 text-amber-500 border border-amber-500/30') : 'hover:bg-white/5 text-zinc-500 hover:text-white'}`}
              title={isAllLocked ? (lang === 'EN' ? "Unlock" : "解锁") : (lang === 'EN' ? "Lock" : "锁定")}
            >
              {isAllLocked ? <Lock size={14} /> : <Unlock size={14} />}
            </button>
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 ${theme === 'retro' ? 'hover:bg-black/5 text-black/40' : 'hover:bg-zinc-800 text-zinc-600'} hover:text-white transition-all rounded-full`}
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Short Divider */}
        <div className={`absolute bottom-0 left-4 right-4 h-[1px] ${theme === 'retro' ? 'bg-black/60' : 'bg-zinc-800'}`} />
      </div>

      <div className={`flex-1 overflow-y-auto custom-scrollbar ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-[#050505]'}`}>
        <div className="min-h-full flex flex-col justify-start px-4 pt-12 pb-0 space-y-4">

        {isCommercial ? (
          <div className="space-y-8">
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
          <div className="space-y-8">
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
          <div className="space-y-8">
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
          <div className="space-y-6">
            <section className="group">
              <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-500 group-hover:text-zinc-300'} transition-colors`}>
                <Globe size={12} className={iconColor} /> {lang === 'EN' ? "NARRATIVE PANORAMA" : "叙事全景摘要"}
              </div>
              <div className={`leading-loose font-serif text-[15px] ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-400'}`}>
                <span>{lang === 'EN' ? "“In the " : "“在 "}</span>
                
                {renderTimeLocationSlot()}

                <span>{lang === 'EN' ? " world of " : " 的 "}</span>
                <SkinSlot blockId="skin_era" placeholder={lang === 'EN' ? "Background Field" : "背景场域"} isBlockLocked={lockedModules["skin_era"]} {...slotProps} />
                <span>{lang === 'EN' ? " world, operating under " : " 世界中，运行于"}</span>
                <SkinSlot blockId="sur4x" placeholder={lang === 'EN' ? "Resistance" : "物理阶层阻力"} isBlockLocked={lockedModules["sur4x"]} {...slotProps} />
                <span>{lang === 'EN' ? " within a " : "下的"}</span>
                <SkinSlot blockId="skin_society" placeholder={lang === 'EN' ? "Social Order" : "社会形态"} isBlockLocked={lockedModules["skin_society"]} {...slotProps} />
                <span>{lang === 'EN' ? " society. A " : "之下 。 一个 "}</span>
                <SkinSlot blockId="skin_age" placeholder={lang === 'EN' ? "Age" : "主体年龄"} isBlockLocked={lockedModules["skin_age"]} {...slotProps} />
                <span>{lang === 'EN' ? " " : " 的 "}</span>
                <SkinSlot blockId="skin_gender" placeholder={lang === 'EN' ? "Gender" : "主体性别"} isBlockLocked={lockedModules["skin_gender"]} {...slotProps} />
                <SkinSlot blockId="skin_profession" placeholder={lang === 'EN' ? "Profession" : "职业身份"} isBlockLocked={lockedModules["skin_profession"]} {...slotProps} />
                <span>{lang === 'EN' ? ", holding a " : "，抱着"}</span>
                <SkinSlot blockId="sur10x" placeholder={lang === 'EN' ? "Suture" : "象征界缝合度"} isBlockLocked={lockedModules["sur10x"]} {...slotProps} />
                <span>{lang === 'EN' ? " stance towards " : "的 "}</span>
                <SkinSlot blockId="skin_ideology" placeholder={lang === 'EN' ? "Philosophy" : "哲学信念"} isBlockLocked={lockedModules["skin_ideology"]} {...slotProps} />
                <span>{lang === 'EN' ? " ideas, and entangled with " : " 想法，并在与 "}</span>
                <SkinSlot blockId="skin_everything" placeholder={lang === 'EN' ? "Anchor" : "欲望锚点"} isBlockLocked={lockedModules["skin_everything"]} {...slotProps} />
                <span>{lang === 'EN' ? ", erupts into this " : " 的纠缠中，于 "}</span>
                <SkinSlot blockId="skin_location" placeholder={lang === 'EN' ? "Scenes" : "空间场景"} isBlockLocked={lockedModules["skin_location"]} {...slotProps} />
                <span>{lang === 'EN' ? " " : " 爆发了这场 "}</span>
                <SkinSlot blockId="skin_genre" placeholder={lang === 'EN' ? "Drive" : "叙事动力"} isBlockLocked={lockedModules["skin_genre"]} {...slotProps} />
                <span>{lang === 'EN' ? " story.”" : " 故事。”"}</span>
              </div>
            </section>

            <section className="group">
              <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-500 group-hover:text-zinc-300'} transition-colors`}>
                <Settings2 size={12} className={iconColor} /> {lang === 'EN' ? "NARRATIVE BOUNDARIES" : "叙事物理边界"}
              </div>
              <div className={`leading-loose font-serif text-[15px] ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-400'}`}>
                <div className="mb-3 text-xs italic opacity-70">
                  {lang === 'EN' ? "This section defines the spacetime physics boundaries of the narrative:" : "此部分定义叙事的时空物理边界："}
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <span>{lang === 'EN' ? "Story Volume: " : "故事长度："}</span>
                    <SkinSlot blockId="skin_volume" placeholder={lang === 'EN' ? "Volume" : "故事体量"} isBlockLocked={lockedModules["skin_volume"]} {...slotProps} />
                  </div>
                  <div>
                    <span>{lang === 'EN' ? "Narrative Structure: " : "叙事结构："}</span>
                    <SkinSlot blockId="skin_structure" placeholder={lang === 'EN' ? "Structure" : "叙事结构"} isBlockLocked={lockedModules["skin_structure"]} {...slotProps} />
                  </div>
                </div>
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
