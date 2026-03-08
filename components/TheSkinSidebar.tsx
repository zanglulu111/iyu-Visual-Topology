
import React, { useState, useEffect } from 'react';
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
import { ANIMATION_GENRE_CATEGORIES } from '../data/animation_genres';
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

  // Combine all potential blocks for lookup
  const allBlocks = [
    ...COMM_SKIN_BLOCKS,
    ...ALL_SKIN_BLOCKS,
    ...EXPERIMENTAL_SKIN_BLOCKS,
    ...TRAILER_SKIN_BLOCKS
  ];

  const blockDef = allBlocks.find(b => b.id === blockId);
  if (blockDef) {
    name = blockDef.name.replace(/^[0-9A-Z]+\.\s*/, '').split('(')[0].trim();
  }

  if (blockId === 'skin_genre') {
    count = GENRE_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  } else if (blockId === 'skin_animation_genre') {
    count = ANIMATION_GENRE_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
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

  return { name, count };
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
}> = ({
  blockId, placeholder, fieldState, accentColor, onOpen, onRemove, lang,
  lockedTags, onToggleTagLock, onRandomizeTag, accentTextColor, driverType,
  onRandomizeBlock, onClearBlock, isBlockLocked, onToggleLockBlock, getItemDetails,
  onAddCustomDef, onEditCustomDef, onManualUpdate
}) => {
    const { theme } = useTheme();
    const isCommercial = driverType === DriverType.COMMERCIAL;
    const tags = fieldState[blockId] || [];
    const hasTags = tags.length > 0;
    const libInfo = getBlockLibInfo(blockId);

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

    if (driverType === DriverType.COMMERCIAL) {
      labelColor = 'text-mist-cyan';
      editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-mist-cyan' : 'text-cyan-400 border-cyan-400 focus:border-cyan-400';
    } else if (driverType === DriverType.EXPERIMENTAL) {
      labelColor = 'text-mist-purple';
      editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-mist-purple' : 'text-purple-400 border-purple-400 focus:border-purple-400';
    } else if (driverType === DriverType.AESTHETIC) {
      labelColor = 'text-mist-rose';
      editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-mist-rose' : 'text-rose-400 border-rose-400 focus:border-rose-400';
    } else if (driverType === DriverType.TRAILER) {
      labelColor = 'text-mist-orange';
      editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-mist-orange' : 'text-orange-400 border-orange-400 focus:border-orange-400';
    } else {
      labelColor = 'text-gold-primary';
      editAccent = theme === 'retro' ? 'text-[var(--text-main)] border-[var(--border-main)] focus:border-gold-primary' : 'text-gold-primary border-gold-primary focus:border-gold-primary';
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
              <span key={tag} className="inline-flex flex-col items-start group/tag relative align-top">
                <span className="flex items-baseline relative z-10">
                  <span
                    onClick={() => onOpen(blockId)}
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

                <div className={`flex items-center gap-1 mt-1 z-10 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-black/80'} rounded p-1 shadow-md border ${theme === 'retro' ? 'border-[var(--border-main)]/40' : 'border-zinc-800'}`}>
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

                {safeDetails && (safeDetails.def || safeDetails.core) && !editingTag && (
                  <div className="absolute left-0 z-[100] w-max max-w-[300px] text-left bg-zinc-950 border border-zinc-700 p-4 rounded-xl shadow-2xl opacity-0 group-hover/tag:opacity-100 transition-all duration-200 pointer-events-none delay-150 top-[calc(100%+0.5rem)]">
                    <div className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-2 border-b border-white/10 pb-1 flex items-center gap-2">
                      <span className={accentTextColor.replace('text-', 'text-')}>{libInfo.name}</span>
                    </div>
                    <div className="text-xs text-zinc-200 font-medium mb-2 leading-relaxed whitespace-pre-line">
                      {lang === 'EN' && safeDetails.defEn ? safeDetails.defEn : safeDetails.def}
                    </div>
                    {(safeDetails.core || safeDetails.coreEn) && (
                      <div className={`block text-[10px] italic border-t border-white/5 pt-1 mt-1 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                        {lang === 'EN' && safeDetails.coreEn ? safeDetails.coreEn : safeDetails.core}
                      </div>
                    )}
                  </div>
                )}
              </span>
            );
          })
        ) : (
          <span className="group/tag relative inline-flex flex-col items-center align-top">
            <span
              onClick={() => !isBlockLocked && onOpen(blockId)}
              className={`cursor-pointer font-serif font-medium border-b border-dashed transition-all duration-300 hover:scale-110 hover:z-50 text-base ${isBlockLocked ? (theme === 'retro' ? 'opacity-50 cursor-not-allowed text-[var(--text-muted)]/50' : 'opacity-50 cursor-not-allowed text-zinc-600') : (theme === 'retro' ? 'border-[var(--text-main)] text-zinc-500 hover:text-black' : 'border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-500')}`}
            >
              [{placeholder}]
            </span>
            <div className={`flex items-center gap-1 mt-1 z-10 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-black/80'} rounded p-1 border ${theme === 'retro' ? 'border-[var(--border-main)]/40' : 'border-zinc-800'} shadow-md`}>
              <button
                onClick={(e) => { e.stopPropagation(); onRandomizeBlock?.(blockId); }}
                disabled={isBlockLocked}
                className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isBlockLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                <Dice5 size={10} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onToggleLockBlock?.(blockId); }}
                className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isBlockLocked ? (theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : lockedClass) : ''}`}
              >
                {isBlockLocked ? <Lock size={10} /> : <Unlock size={10} />}
              </button>

              {/* Edit Button for Empty State */}
              <button
                onClick={handleCreateClick}
                disabled={isBlockLocked}
                className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'} border rounded transition-colors ${isBlockLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                title={lang === 'EN' ? "Create Custom Item" : "创建自定义词条"}
              >
                <Edit2 size={10} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); onClearBlock?.(blockId); }}
                disabled={isBlockLocked}
                className={`flex items-center justify-center p-0.5 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border-zinc-700 text-zinc-500 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400'} border rounded transition-colors ${isBlockLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                <Trash2 size={10} />
              </button>
            </div>
          </span>
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

  if (isCommercial) {
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
      ? `${selectedCountry ? selectedCountry + " " : ""}(${selectedYear})`
      : (selectedCountry ? `${selectedCountry} (AUTO)` : (lang === 'EN' ? "Country/Year" : "国家/年份"));

    const isLocked = isCountryLocked && isYearLocked;

    // BRIGHTER TEXT STYLE FOR PLACEHOLDERS
    const baseTextClass = "cursor-pointer transition-transform duration-300";
    const filledTextClass = `font-serif font-bold ${theme === 'retro' ? 'text-black border-b-2 border-[var(--text-accent)] hover:bg-black/5' : 'text-white border-b-2 border-gold-primary hover:bg-white/10'} px-0.5 hover:scale-110 hover:z-50 inline-block text-lg md:text-xl tracking-tight`;
    const emptyTextClass = `font-serif font-medium border-b border-dashed hover:scale-110 hover:z-50 inline-block ${theme === 'retro' ? 'border-[var(--text-muted)] text-zinc-500 hover:text-black hover:bg-black/5' : 'border-zinc-800 text-zinc-500 hover:text-white hover:bg-white/10'} hover:border-zinc-500 text-sm`;
    const lockedTextClass = `border ${theme === 'retro' ? 'border-[var(--text-accent)] text-black bg-[var(--text-accent)]/10' : 'border-gold-primary text-gold-primary bg-amber-900/20'} px-2 rounded font-serif font-bold text-lg md:text-xl tracking-tight`;

    const wrapperAlign = hasTimeOrLoc ? "items-start" : "items-center";

    return (
      <span className="inline-flex flex-wrap items-baseline gap-x-1 mx-1 relative">
        <span className={`group/tag relative inline-flex flex-col ${wrapperAlign} align-top`}>
          <span
            onClick={() => setIsTimeModalOpen(true)}
            className={`${baseTextClass} ${isLocked ? lockedTextClass : (hasTimeOrLoc ? filledTextClass : emptyTextClass)}`}
          >
            {hasTimeOrLoc ? displayText : `[${displayText}]`}
          </span>

          <div className={`flex items-center gap-1 mt-1 z-10 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-black/80'} rounded p-1 border shadow-md ${theme === 'retro' ? 'border-[var(--border-main)]/40' : 'border-zinc-800'}`}>
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
    <div className="space-y-6">
      {/* Global Controls */}
      <div className={`flex justify-end gap-2 mb-4 border-b ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-800'} pb-4`}>
        <span className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'} font-bold uppercase tracking-wider mr-auto self-center`}>
          {lang === 'EN' ? "Global Controls" : "全局控制"}
        </span>
        <button onClick={handleGlobalRandomizeCoordinates} className={`p-1.5 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-white'} transition-all`}><Dice5 size={14} /></button>
        <button onClick={handleGlobalToggleLockCoordinates} className={`p-1.5 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50 transition-all ' + (isCountryLocked && isYearLocked ? 'text-[var(--text-accent)] border-[var(--text-accent)]/30' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]') : 'bg-zinc-900 border border-zinc-800 transition-all ' + (isCountryLocked && isYearLocked ? 'text-amber-500 border-amber-500/30' : 'text-zinc-500 hover:text-white hover:border-zinc-600')}`}>{isCountryLocked && isYearLocked ? <Lock size={14} /> : <Unlock size={14} />}</button>
        <button onClick={handleGlobalResetCoordinates} className={`p-1.5 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-500 hover:text-red-400'} transition-all`}><Trash2 size={14} /></button>
      </div>

      {/* Country Selector */}
      <div className="space-y-1">
        <div className="flex justify-between items-center mb-1">
          <label className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'} font-bold uppercase tracking-wider flex items-center gap-2`}>
            <MapPin size={12} /> {lang === 'EN' ? "Country / Region" : "国家/地区"}
          </label>
          <div className="flex gap-1">
            <button onClick={handleRandomCountry} disabled={isCountryLocked} className={`p-1 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50 text-[var(--text-muted)]' : 'bg-zinc-900 border border-zinc-800 text-zinc-500'} hover:${theme === 'retro' ? 'text-[var(--text-main)]' : 'border-zinc-600 text-white'} transition-all ${isCountryLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Dice5 size={10} /></button>
            <button onClick={handleToggleLockCountry} className={`p-1 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50' : 'bg-zinc-900 border border-zinc-800'} ${isCountryLocked ? (theme === 'retro' ? 'text-[var(--text-accent)] border-[var(--text-accent)]/30' : 'text-amber-500 border-amber-500/30') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'text-zinc-500 hover:text-white hover:border-zinc-600')} transition-all`}>{isCountryLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>
            <button onClick={handleResetCountry} disabled={isCountryLocked} className={`p-1 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border border-zinc-800 text-zinc-500 hover:border-red-500/50 hover:text-red-400'} transition-all ${isCountryLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Trash2 size={10} /></button>
          </div>
        </div>

        <div className={`flex flex-row gap-0 rounded-lg border ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-800'} ${isCountryLocked ? 'bg-black/40 grayscale opacity-80' : (theme === 'retro' ? 'bg-[var(--bg-main)]' : 'bg-zinc-900/30')} h-9 overflow-hidden`}>
          {/* Selected Side */}
          <div className={`flex items-center justify-center border-r ${theme === 'retro' ? 'border-[var(--border-main)]/30 bg-[var(--bg-panel)]' : 'border-zinc-800 bg-zinc-900/50'} w-24 shrink-0 ${selectedCountry ? iconColor : (theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600')}`}>
            <input
              type="text"
              value={selectedCountry}
              onChange={(e) => !isCountryLocked && setSelectedCountry(e.target.value)}
              disabled={isCountryLocked}
              placeholder={lang === 'EN' ? "SELECT" : "未选择"}
              className={`w-full bg-transparent text-xs font-bold text-center truncate px-1 focus:outline-none placeholder-${theme === 'retro' ? '[var(--text-muted)]/50' : 'zinc-700'} ${theme === 'retro' ? 'text-[var(--text-main)]' : ''}`}
            />
          </div>

          {/* List Side */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-1">
            <div className="grid grid-cols-4 gap-1">
              {COUNTRY_PRESETS.map(c => (
                <button
                  key={c.cn}
                  onClick={() => !isCountryLocked && setSelectedCountry(lang === 'EN' ? c.en : c.cn)}
                  className={`px-1 py-0.5 text-[10px] rounded text-center truncate transition-all ${selectedCountry === (lang === 'EN' ? c.en : c.cn) ? (theme === 'retro' ? 'bg-[var(--text-accent)] text-white' : `bg-white text-black font-bold`) : (theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white')}`}
                >
                  {lang === 'EN' ? c.en : c.cn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Year Wheel / Slider */}
      <div className={`space-y-4 ${isYearLocked ? 'grayscale opacity-50 pointer-events-none' : ''}`}>
        <div className="flex justify-between items-center">
          <label className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'} font-bold uppercase tracking-wider flex items-center gap-2`}>
            <Calendar size={12} /> {lang === 'EN' ? "Timeline" : "时间轴"}
          </label>

          <div className="flex gap-2 items-center">
            <span className={`text-2xl font-serif font-black ${isYearLocked ? (theme === 'retro' ? 'text-[var(--text-muted)]/50' : 'text-zinc-500') : iconColor}`}>
              {selectedYear === null ? (lang === 'EN' ? "AUTO" : "自动") : selectedYear}
            </span>
            <div className="flex gap-1 ml-2">
              <button onClick={handleRandomYear} disabled={isYearLocked} className={`p-1 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50 text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white'} transition-all ${isYearLocked ? 'opacity-30 cursor-not-allowed' : ''}`}><Dice5 size={10} /></button>
              <button onClick={handleToggleLockYear} className={`p-1 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50' : 'bg-zinc-900 border border-zinc-800'} ${isYearLocked ? (theme === 'retro' ? 'text-[var(--text-accent)] border-[var(--text-accent)]/30' : 'text-amber-500 border-amber-500/30') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-main)]' : 'text-zinc-500 hover:text-white hover:border-zinc-600')} transition-all`}>{isYearLocked ? <Lock size={10} /> : <Unlock size={10} />}</button>
              <button onClick={handleResetYear} disabled={isYearLocked} className={`p-1 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/50 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border border-zinc-800 text-zinc-500 hover:border-red-500/50 hover:text-red-400'} transition-all ${isYearLocked ? 'opacity-30            cursor-not-allowed' : ''}`}><Trash2 size={10} /></button>
            </div>
          </div>
        </div>

        <input
          type="range"
          min="-2000"
          max="2050"
          step="1" // Default step
          value={selectedYear ?? 2026}
          disabled={isYearLocked}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          className={`w-full h-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-zinc-800'} rounded-lg appearance-none cursor-pointer ${isYearLocked ? 'cursor-not-allowed accent-zinc-600' : (theme === 'retro' ? 'accent-[var(--text-accent)] hover:accent-[var(--text-main)]' : 'accent-white hover:accent-gold-primary')}`}
        />

        <div className={`flex justify-between text-[9px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600'} font-mono`}>
          <span>-2000</span>
          <span>0</span>
          <span>2050</span>
        </div>

        {/* Context Display */}
        {contextData ? (
          <div className={`grid grid-cols-1 gap-2 mt-2 pt-2 border-t ${theme === 'retro' ? 'border-[var(--border-main)]/20' : 'border-zinc-800/50'}`}>
            <div className="text-[10px] leading-relaxed">
              <span className={`${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'} font-bold`}>CN: </span>
              <span className={theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}>{lang === 'EN' ? contextData.cnEn : contextData.cn}</span>
            </div>
            <div className="text-[10px] leading-relaxed">
              <span className={`${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-500'} font-bold`}>WORLD: </span>
              <span className={theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}>{lang === 'EN' ? contextData.worldEn : contextData.world}</span>
            </div>
          </div>
        ) : (
          <div className={`text-[10px] ${theme === 'retro' ? 'text-[var(--text-muted)]' : 'text-zinc-600'} italic text-center mt-2`}>
            {lang === 'EN' ? "No historical data for this year." : "该年份暂无历史数据。"}
          </div>
        )}

        <div className={`flex justify-center gap-2 mt-2 ${isYearLocked ? 'opacity-50 pointer-events-none' : ''}`}>
          <button onClick={() => !isYearLocked && setSelectedYear((prev) => (prev ?? 2026) - 10)} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'} rounded text-[9px]`}>-10</button>
          <button onClick={() => !isYearLocked && setSelectedYear((prev) => (prev ?? 2026) - 1)} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'} rounded text-[9px]`}>-1</button>
          <button onClick={handleSetNow} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] hover:bg-[var(--text-accent)]/10 text-[var(--text-accent)]' : 'bg-zinc-800 text-gold-primary hover:bg-zinc-700'} rounded text-[9px]`}>Now</button>
          <button onClick={() => !isYearLocked && setSelectedYear((prev) => (prev ?? 2026) + 1)} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'} rounded text-[9px]`}>+1</button>
          <button onClick={() => !isYearLocked && setSelectedYear((prev) => (prev ?? 2026) + 10)} className={`px-2 py-1 ${theme === 'retro' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'} rounded text-[9px]`}>+10</button>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      style={{ zIndex }}
      className={`
        flex flex-col transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
        fixed top-14 left-0 bottom-14 w-[380px] ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-[var(--bg-main)]'} border-r border-[var(--border-main)]
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className={`px-6 py-4 flex items-center justify-between relative shrink-0 transition-all duration-300`}>
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
        <div className={`absolute bottom-0 left-6 right-6 h-[1px] ${theme === 'retro' ? 'bg-black/60' : 'bg-zinc-800'}`} />
      </div>

      <div className={`flex-1 overflow-y-auto custom-scrollbar p-8 pt-6 space-y-6 ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-[#050505]'}`}>

        {isCommercial ? (
          <div className="space-y-8">
            <section>
              <div className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <Anchor size={10} className={iconColor} /> {lang === 'EN' ? "01. STRATEGY BASE" : "01. 策略基石"}
              </div>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Brand Status:" : "品牌现状处于"}</span>
                <SkinSlot blockId="comm_skin_status" placeholder={lang === 'EN' ? "Status" : "现状"} isBlockLocked={lockedModules["comm_skin_status"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Duration:" : "，全片时长为"}</span> <SkinSlot blockId="comm_skin_length" placeholder={lang === 'EN' ? "Length" : "时长"} isBlockLocked={lockedModules["comm_skin_length"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Platform:" : "，针对平台"}</span> <SkinSlot blockId="comm_skin_media" placeholder={lang === 'EN' ? "Platform" : "投放平台"} isBlockLocked={lockedModules["comm_skin_media"]} {...slotProps} />
                <span>{lang === 'EN' ? ". Core Strategy:" : "。核心采用"}</span> <SkinSlot blockId="comm_skin_structure" placeholder={lang === 'EN' ? "Strategy" : "叙事形态"} isBlockLocked={lockedModules["comm_skin_structure"]} {...slotProps} /> <span>{lang === 'EN' ? "." : "策略。"}</span>
              </div>
            </section>

            <section>
              <div className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <Palette size={10} className={iconColor} /> {lang === 'EN' ? "02. VISUAL AESTHETICS" : "02. 视觉美学"}
              </div>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Style Ref:" : "参考"}</span> <SkinSlot blockId="comm_skin_auteur" placeholder={lang === 'EN' ? "Director" : "导演风格"} isBlockLocked={lockedModules["comm_skin_auteur"]} {...slotProps} /> <span>{lang === 'EN' ? ", " : "的语言，"}</span>
                <span>{lang === 'EN' ? "Tone:" : "影调倾向"}</span> <SkinSlot blockId="comm_skin_chroma" placeholder={lang === 'EN' ? "Tone" : "色彩影调"} isBlockLocked={lockedModules["comm_skin_chroma"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Emotion:" : "，传递情绪"}</span> <SkinSlot blockId="comm_skin_emotion" placeholder={lang === 'EN' ? "Emotion" : "影片情绪"} isBlockLocked={lockedModules["comm_skin_emotion"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Art Dir:" : "，美术参考"}</span> <SkinSlot blockId="comm_skin_benchmark" placeholder={lang === 'EN' ? "Art Dir" : "美术标杆"} isBlockLocked={lockedModules["comm_skin_benchmark"]} {...slotProps} /><span>{lang === 'EN' ? "." : "。"}</span>
              </div>
            </section>

            <section>
              <div className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <Box size={10} className={iconColor} /> {lang === 'EN' ? "03. PRODUCT CONTEXT" : "03. 产品场域"}
              </div>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Anchor:" : "产品锚定为"}</span> <SkinSlot blockId="comm_skin_anchor" placeholder={lang === 'EN' ? "Anchor" : "产品锚点"} isBlockLocked={lockedModules["comm_skin_anchor"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Scenario:" : "，核心场景在"}</span> <SkinSlot blockId="comm_skin_scenario" placeholder={lang === 'EN' ? "Scenario" : "应用场景"} isBlockLocked={lockedModules["comm_skin_scenario"]} {...slotProps} />
                <span>{lang === 'EN' ? ", RTB:" : "，背书逻辑在"}</span> <SkinSlot blockId="comm_skin_endorsement" placeholder={lang === 'EN' ? "Endorsement" : "权威环境"} isBlockLocked={lockedModules["comm_skin_endorsement"]} {...slotProps} /><span>{lang === 'EN' ? "." : "。"}</span>
              </div>
            </section>
          </div>
        ) : isExperimental ? (
          <div className="space-y-8">
            <section>
              <div className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <TestTube size={10} className={iconColor} /> {lang === 'EN' ? "PHENOMENOLOGICAL REDUCTION" : "现象学还原设定"}
              </div>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
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
              <div className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest border-b border-zinc-800 pb-1 mb-3 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <Zap size={10} className={iconColor} /> {lang === 'EN' ? "VIRTUAL FANTASY PROTOCOL" : "虚拟幻象设定"}
              </div>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Based on" : "基于"}</span> <SkinSlot blockId="trl_skin_genre" placeholder={lang === 'EN' ? "Genre" : "类型外壳"} isBlockLocked={lockedModules["trl_skin_genre"]} {...slotProps} />
                <span>{lang === 'EN' ? "logic, using" : "逻辑，采用"}</span> <SkinSlot blockId="trl_skin_rhythm" placeholder={lang === 'EN' ? "Rhythm" : "剪辑节奏"} isBlockLocked={lockedModules["trl_skin_rhythm"]} {...slotProps} />
                <span>{lang === 'EN' ? "pacing, anchored by" : "进行推进，以"}</span> <SkinSlot blockId="trl_skin_hook" placeholder={lang === 'EN' ? "Hook" : "听觉钩子"} isBlockLocked={lockedModules["trl_skin_hook"]} {...slotProps} />
                <span>{lang === 'EN' ? "as the hook." : "作为核心诱饵。"}</span>
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-8">
            <section>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Based on" : "本片以"}</span> <SkinSlot blockId="skin_genre" placeholder={lang === 'EN' ? "Genre" : "类型基因"} isBlockLocked={lockedModules["skin_genre"]} {...slotProps} /> <SkinSlot blockId="skin_animation_genre" placeholder={lang === 'EN' ? "Animation" : "动画基因"} isBlockLocked={lockedModules["skin_animation_genre"]} {...slotProps} /> <span>{lang === 'EN' ? "genre." : "作为叙事底色。"}</span>
              </div>
            </section>

            <section>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "This is a story set in" : "这是一个发生在"}</span>
                {/* Specific UI for Narrative Mode's Time/Country Slot - Now using renderTimeLocationSlot */}
                {renderTimeLocationSlot()}

                <span>{lang === 'EN' ? ", based on" : "，基于"}</span>
                <SkinSlot blockId="skin_era" placeholder={lang === 'EN' ? "Culture/Era" : "文化背景"} isBlockLocked={lockedModules["skin_era"]} {...slotProps} />
                <span>{lang === 'EN' ? "context, taking place in" : "的背景下，主要场景发生于"}</span>
                <SkinSlot blockId="skin_location" placeholder={lang === 'EN' ? "Location" : "空间场景"} isBlockLocked={lockedModules["skin_location"]} {...slotProps} />
                <span>{lang === 'EN' ? "." : "的故事。"}</span>
              </div>
            </section>

            <section>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Society:" : "世界运行于"}</span> <SkinSlot blockId="skin_society" placeholder={lang === 'EN' ? "Society" : "社会形态"} isBlockLocked={lockedModules["skin_society"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Ideology:" : "结构，深受"}</span> <SkinSlot blockId="skin_ideology" placeholder={lang === 'EN' ? "Ideology" : "意识形态"} isBlockLocked={lockedModules["skin_ideology"]} {...slotProps} /> <span>{lang === 'EN' ? "." : "的影响。"}</span>
              </div>
            </section>

            <section>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Protagonist is a" : "主体是一名"}</span> <SkinSlot blockId="skin_gender" placeholder={lang === 'EN' ? "Gender" : "性别"} isBlockLocked={lockedModules["skin_gender"]} {...slotProps} />
                <span>{lang === 'EN' ? "," : "、"}</span> <SkinSlot blockId="skin_age" placeholder={lang === 'EN' ? "Age" : "年龄段"} isBlockLocked={lockedModules["skin_age"]} {...slotProps} />
                <span>{lang === 'EN' ? "" : "的"}</span> <SkinSlot blockId="skin_profession" placeholder={lang === 'EN' ? "Profession" : "职业属性"} isBlockLocked={lockedModules["skin_profession"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Class:" : "，其社会背景源自"}</span> <SkinSlot blockId="skin_origin" placeholder={lang === 'EN' ? "Class" : "阶级出身"} isBlockLocked={lockedModules["skin_origin"]} {...slotProps} /><span>{lang === 'EN' ? "." : "。"}</span>
              </div>
            </section>

            <section>
              <div className={`leading-[2.2] font-serif text-sm md:text-base ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                <span>{lang === 'EN' ? "Structure:" : "整篇采用"}</span> <SkinSlot blockId="skin_structure" placeholder={lang === 'EN' ? "Structure" : "叙事结构"} isBlockLocked={lockedModules["skin_structure"]} {...slotProps} />
                <span>{lang === 'EN' ? ", Volume:" : "逻辑，整体体量设定为"}</span> <SkinSlot blockId="skin_volume" placeholder={lang === 'EN' ? "Volume" : "故事体量"} isBlockLocked={lockedModules["skin_volume"]} {...slotProps} /><span>{lang === 'EN' ? "." : "。"}</span>
              </div>
            </section>
          </div>
        )}

        <div className="h-20"></div>
      </div>

      {/* TIME LOCATION MODAL */}
      {isTimeModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-4">
          <div className={`w-full max-w-lg ${theme === 'retro' ? 'bg-[var(--bg-panel)]' : 'bg-[#0c0c0c]'} border border-[var(--border-main)] rounded-2xl shadow-2xl p-6 relative`}>
            <button onClick={() => setIsTimeModalOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
            <div className={`flex items-center gap-3 mb-6 border-b ${theme === 'retro' ? 'border-[var(--border-main)]/30' : 'border-zinc-800'} pb-4`}>
              <Globe size={20} className="text-gold-primary" />
              <h2 className={`text-lg font-serif font-bold ${theme === 'retro' ? 'text-gold-primary' : 'text-white'} tracking-wider`}>{lang === 'EN' ? "Coordinates" : "时空坐标"}</h2>
            </div>

            {renderTimeLocationUI()}

            <div className="mt-8 flex justify-between">
              <div className="flex gap-2">
                <button onClick={handleGlobalToggleLockCoordinates} className={`px-3 py-2 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/40' : 'bg-zinc-900 border border-zinc-800'} transition-all ${isCountryLocked && isYearLocked ? (theme === 'retro' ? 'text-[var(--text-accent)] border-[var(--text-accent)]/30' : 'text-amber-500 border-amber-500/30') : (theme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-main)]' : 'text-zinc-500 hover:text-white hover:border-zinc-600')}`}>{isCountryLocked && isYearLocked ? <Lock size={14} /> : <Unlock size={14} />}</button>
                <button onClick={handleGlobalResetCoordinates} className={`px-3 py-2 rounded ${theme === 'retro' ? 'bg-[var(--bg-main)] border-[var(--border-main)]/40 text-[var(--text-muted)] hover:text-red-700' : 'bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-zinc-500 hover:text-red-400'} transition-all`}><Trash2 size={14} /></button>
              </div>
              <button
                onClick={() => setIsTimeModalOpen(false)}
                className={`px-8 py-3 ${theme === 'retro' ? 'bg-[var(--text-accent)] text-white hover:bg-opacity-90 shadow-[0_0_20px_rgba(139,38,29,0.15)] underline decoration-white/30 underline-offset-4' : 'bg-white hover:bg-zinc-200 text-black shadow-lg shadow-white/5'} font-bold uppercase tracking-widest rounded transition-colors text-xs flex items-center gap-2`}
              >
                <Check size={14} />
                {lang === 'EN' ? "CONFIRM" : "确认坐标"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
