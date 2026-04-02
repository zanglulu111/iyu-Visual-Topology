import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../contexts/ThemeContext';
import { NarrativeFieldState, BlueprintLanguage, DriverType, NarrativeBlockDef, LibraryCategoryDef, SubjectType, AestheticMode, AestheticPreset } from '../types';
import { Ghost, ScanEye, BrainCircuit, Zap, ChevronRight } from 'lucide-react';
import { ProphecySlot } from './ProphecySlot';
import { BorromeanRings } from './BorromeanRings';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { AestheticEngineField } from './AestheticEngineField';
import {
    NARRATIVE_ENGINE_BLOCKS,
    COMMERCIAL_ENGINE_BLOCKS,
    EXPERIMENTAL_ENGINE_BLOCKS,
    AESTHETIC_ENGINE_BLOCKS,
    TRAILER_ENGINE_BLOCKS,
    SKIN_LIBRARY,
    COMM_SKIN_LIBRARY,
    EXPERIMENTAL_SKIN_LIBRARY,
    TRAILER_SKIN_LIBRARY,
    BLOCK_LIMITS,
    NARRATIVE_ENGINE_LIBRARY,
    COMMERCIAL_ENGINE_LIBRARY,
    EXPERIMENTAL_ENGINE_LIBRARY,
    TRAILER_ENGINE_LIBRARY,
    GENRE_CATEGORIES
} from '../constants';
import { getArchetypeFromEra, filterItemsByArchetype } from '../services/randomizer';
import { findItemFull } from '../services/dataRegistry';
import { getBlockName } from '../utils/blockUtils';
import { MASTER_PRESETS } from '../data/master_presets';
import { AES_COLOR_PRESETS } from '../data/aesthetic_libraries/color_presets';

export interface NarrativeEngineFieldProps {
    fieldState: NarrativeFieldState;
    onChange: (newState: NarrativeFieldState) => void;
    onAutoFill: () => void;
    isAutoFilling: boolean;
    lang: BlueprintLanguage;
    isSkinOpen: boolean;
    onToggleSkin: () => void;
    driverType: DriverType;
    onRandomizeFormula: () => void;
    onResetFormula: () => void;
    subjectType: SubjectType;
    lockedModules: Record<string, boolean>;
    onToggleLock: (id: string) => void;
    lockedTags: Record<string, string[]>;
    onToggleTagLock: (blockId: string, tag: string) => void;
    onRandomizeTag: (blockId: string, tag: string) => void;
    isHistoryMode: boolean;
    customLibraryDefs?: Record<string, { def: string; core: string }>;
    onAddCustomDef?: (name: string, def: string, core: string) => void;
    onEditCustomDef?: (oldName: string, newName: string, def: string, core: string) => void;
    aestheticMode?: AestheticMode;
    onAestheticModeChange?: (mode: AestheticMode) => void;
    colorPalette?: string[];
    onPaletteChange?: (colors: string[]) => void;
    onApplyPreset?: (preset: AestheticPreset) => void;
    showRings?: boolean;
}

export const NarrativeEngineField: React.FC<NarrativeEngineFieldProps> = (props) => {
    const { theme } = useTheme();
    if (props.driverType === DriverType.AESTHETIC) {
        return <AestheticEngineField {...props} aestheticMode={props.aestheticMode || 'REALISM'} onAestheticModeChange={props.onAestheticModeChange || (() => { })} showRings={props.showRings} />;
    }

    const {
        fieldState, onChange, lang, driverType,
        lockedModules, onToggleLock, lockedTags, onToggleTagLock, onRandomizeTag,
        customLibraryDefs, onAddCustomDef, onEditCustomDef, showRings = true
    } = props;

    const [libraryModalOpen, setLibraryModalOpen] = useState(false);
    const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

    const isCommercial = driverType === DriverType.COMMERCIAL;
    const isExperimental = driverType === DriverType.EXPERIMENTAL;
    const isTrailer = driverType === DriverType.TRAILER;

    let ENGINE_BLOCKS: NarrativeBlockDef[] = [];
    let ENGINE_LIBRARY: LibraryCategoryDef[] = [];

    if (isCommercial) {
        ENGINE_BLOCKS = COMMERCIAL_ENGINE_BLOCKS;
        ENGINE_LIBRARY = [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY];
    } else if (isExperimental) {
        ENGINE_BLOCKS = EXPERIMENTAL_ENGINE_BLOCKS;
        ENGINE_LIBRARY = [...EXPERIMENTAL_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY];
    } else if (isTrailer) {
        ENGINE_BLOCKS = TRAILER_ENGINE_BLOCKS;
        ENGINE_LIBRARY = [...TRAILER_ENGINE_LIBRARY, ...TRAILER_SKIN_LIBRARY];
    } else {
        ENGINE_BLOCKS = NARRATIVE_ENGINE_BLOCKS;
        ENGINE_LIBRARY = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY];
    }

    const getItemDetails = useCallback((tagName: string, targetBlockId?: string) => {
        if (customLibraryDefs && customLibraryDefs[tagName]) {
            return { name: tagName, def: customLibraryDefs[tagName].def, core: customLibraryDefs[tagName].core };
        }
        return findItemFull(tagName, targetBlockId);
    }, [customLibraryDefs]);

    const getBilingualText = (text: string) => {
        if (!text) return "";
        const englishMatch = text.match(/\((.*?)\)/);
        const chinesePart = text.split('(')[0].trim();
        const englishPartInString = englishMatch ? englishMatch[1].trim() : "";
        if (lang === 'EN') {
            if (englishPartInString) return englishPartInString;
            const details = getItemDetails(text) as any;
            if (details && details.nameEn) return details.nameEn;
            return chinesePart;
        }
        return chinesePart;
    };

    const getEngineTitle = () => {
        if (isCommercial) return lang === 'EN' ? "THE SUTURE" : "欲望缝合";
        if (isExperimental) return lang === 'EN' ? "PHENOMENOLOGY" : "现象学还原";
        if (isTrailer) return lang === 'EN' ? "VIRTUAL ILLUSION" : "虚拟幻象";
        return lang === 'EN' ? "AUTONOMOUS CORE: NARRATIVE DYNAMICS" : "自治核心：欲望动力学";
    };

    const getEngineSubtitle = () => {
        if (isCommercial) return lang === 'EN' ? "Quilting the sliding signifier of desire onto the product." : "将滑动的欲望能指，强行锚定在具体的产品图腾之上。";
        if (isExperimental) return lang === 'EN' ? "Reducing the narrative to its pure phenomenological essence." : "剥离叙事的表象，提炼出最核心的观念结晶。";
        if (isTrailer) return lang === 'EN' ? "Constructing the hook to induce infinite anticipation." : "构建视听钩子，制造无法被满足的期待与悬念。";
        return lang === 'EN' ? "Mapping the trajectory of desire and destiny around the Subject ($)." : "绘制主体($)围绕对象(a)的欲望轨迹与命运结构。";
    };

    const currentOSKey = isCommercial ? 'comm_c0' : (isExperimental ? 'exp_e0' : (isTrailer ? 'trl_t0' : 'engine_m0'));
    const currentPsychicOS = fieldState[currentOSKey]?.[0];
    const osDetails = currentPsychicOS ? getItemDetails(currentPsychicOS, currentOSKey) as any : null;

    const getOSPlaceholder = () => {
        if (isCommercial) return lang === 'EN' ? "ANCHOR DESIRE" : "锚定欲望";
        if (isExperimental) return lang === 'EN' ? "DISTILL CONCEPT" : "提纯观念";
        if (isTrailer) return lang === 'EN' ? "SET HOOK" : "设置钩子";
        return lang === 'EN' ? "SUBJECT STRUCTURE" : "主体结构";
    };

    const osDisplay = currentPsychicOS ? getBilingualText(currentPsychicOS) : getOSPlaceholder();

    let osTheme = {
        accent: theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary',
        hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-amber-900/10',
        label: theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary',
        icon: <Ghost size={24} className={theme === 'retro' ? "text-[#8B261D]" : "text-gold-primary"} />
    };
    let osLabel = "结构基底/STRUCTURAL BASE";

    if (isCommercial) {
        osTheme = { 
            accent: theme === 'retro' ? 'text-[#8B261D]' : 'text-mist-cyan', 
            hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-cyan-900/10', 
            label: theme === 'retro' ? 'text-[#8B261D]' : 'text-mist-cyan', 
            icon: <ScanEye size={24} className={theme === 'retro' ? "text-[#8B261D]" : "text-mist-cyan"} /> 
        };
        osLabel = "欲望锚点/DESIRE ANCHOR";
    } else if (isExperimental) {
        osTheme = { 
            accent: theme === 'retro' ? 'text-[#8B261D]' : 'text-mist-purple', 
            hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-purple-900/10', 
            label: theme === 'retro' ? 'text-[#8B261D]' : 'text-mist-purple', 
            icon: <BrainCircuit size={24} className={theme === 'retro' ? "text-[#8B261D]" : "text-mist-purple"} /> 
        };
        osLabel = "核心观念/CORE CONCEPT";
    } else if (isTrailer) {
        osTheme = { 
            accent: theme === 'retro' ? 'text-[#8B261D]' : 'text-mist-orange', 
            hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-orange-900/10', 
            label: theme === 'retro' ? 'text-[#8B261D]' : 'text-mist-orange', 
            icon: <Zap size={24} className={theme === 'retro' ? "text-[#8B261D]" : "text-mist-orange"} /> 
        };
        osLabel = "诱饵钩子/THE LURE";
    }

    const getLibraryCount = useCallback((blockId: string): number => {
        let libId = `${blockId}_lib`;
        if (blockId === 'skin_era') libId = 'skin_era_lib';
        let cat = ENGINE_LIBRARY.find(c => c.id === libId);
        if (cat) return cat.items.length;
        cat = SKIN_LIBRARY.find(c => c.id === libId);
        if (cat) return cat.items.length;
        cat = COMM_SKIN_LIBRARY.find(c => c.id === libId);
        if (cat) return cat.items.length;
        cat = EXPERIMENTAL_SKIN_LIBRARY.find(c => c.id === libId);
        if (cat) return cat.items.length;
        cat = TRAILER_SKIN_LIBRARY.find(c => c.id === libId);
        if (cat) return cat.items.length;
        if (blockId === 'skin_genre') return GENRE_CATEGORIES.reduce((acc, c) => acc + c.items.length, 0);
        return 0;
    }, [ENGINE_LIBRARY]);

    const toggleTag = (blockId: string, tag: string) => {
        if (lockedModules[blockId]) return;
        const rawCurrent = fieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        const limit = BLOCK_LIMITS[blockId] || 1;
        let newState = { ...fieldState };
        if (limit === 1) {
            newState[blockId] = current.includes(tag) ? [] : [tag];
            onChange(newState);
            return;
        }
        if (current.includes(tag)) {
            newState[blockId] = current.filter(t => t !== tag);
        } else {
            if (current.length >= limit) {
                alert(lang === 'EN' ? `Max ${limit} items for this module.` : `该模块最多选择 ${limit} 个。`);
                return;
            }
            newState[blockId] = [...current, tag];
        }
        onChange(newState);
    };

    const handleManualUpdate = (blockId: string, tags: string[]) => {
        onChange({ ...fieldState, [blockId]: tags });
    };

    const clearBlock = (blockId: string) => { if (lockedModules[blockId]) return; onChange({ ...fieldState, [blockId]: [] }); }
    const removeTag = (blockId: string, tag: string) => { if (lockedModules[blockId]) return; const rawCurrent = fieldState[blockId]; const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []); onChange({ ...fieldState, [blockId]: current.filter(t => t !== tag) }); }
    const openLibrary = (blockId: string) => { if (lockedModules[blockId]) return; setActiveBlockId(blockId); setLibraryModalOpen(true); };

    const [hoveredPortal, setHoveredPortal] = useState<{
        pos: { top: number; left: number };
        details: any;
        header?: string;
        count?: number;
        showAbove?: boolean;
    } | null>(null);

    const handleMouseEnter = (e: React.MouseEvent, details: any, header?: string, count?: number) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const showAbove = rect.bottom > window.innerHeight * 0.65;
        setHoveredPortal({
            pos: {
                top: showAbove ? rect.top - 8 : rect.bottom + 8,
                left: Math.min(rect.left, window.innerWidth - 320)
            },
            details,
            header,
            count,
            showAbove
        });
    };

    const handleMouseLeave = () => {
        setHoveredPortal(null);
    };

    const renderLevelButton = (baseBlockId: string) => {
        const xBlockId = baseBlockId + 'x';
        const rawTags = fieldState[xBlockId];
        const tags = Array.isArray(rawTags) ? rawTags : (rawTags ? [String(rawTags)] : []);
        const currentTag = tags[0] || "";
        const match = currentTag.match(/^L(\d)/);
        const levelText = match ? `L${match[1]}` : "L-";

        // Find current tag info for detailed tooltip
        const libId = `${xBlockId}_lib`;
        const category = NARRATIVE_ENGINE_LIBRARY.find(c => c.id === libId);
        const currentItem = category?.items.find(i => i.name === currentTag);
        
        let displayTitle = category ? (lang === 'EN' ? category.nameEn : category.name) : baseBlockId.toUpperCase();
        displayTitle = displayTitle.replace(/\s*\(.*?\)/, "");

        // Determine tooltop content: selected item or category default
        const tooltipHeader = currentItem 
            ? (lang === 'EN' ? currentItem.nameEn : currentItem.name) 
            : displayTitle;
            
        const tooltipDetails = {
            def: lang === 'EN' 
                ? (currentItem?.defEn || category?.descEn || "Narrative Coefficient")
                : (currentItem?.def || category?.desc || "叙事系数控制指标。"),
            core: lang === 'EN'
                ? (currentItem?.coreEn || category?.descEn || "Drive/Intrusion power adjustment.")
                : (currentItem?.core || category?.desc || "调节该模块的叙事当量与强度阈值。"),
        };

        return (
            <button
                onClick={(e) => { e.stopPropagation(); openLibrary(xBlockId); }}
                onMouseEnter={(e) => {
                    const count = getLibraryCount(xBlockId);
                    handleMouseEnter(e, tooltipDetails, tooltipHeader, count);
                }}
                onMouseLeave={handleMouseLeave}
                className={`w-10 h-10 flex items-center justify-center border font-mono text-sm font-bold transition-all self-center shrink-0 mx-1 ${theme === 'retro' ? 'border-[#8B261D] text-[#8B261D] bg-[#F9F7F1]/50 hover:bg-[#8B261D] hover:text-white' : 'border-zinc-700 text-zinc-400 bg-zinc-900/20 hover:border-zinc-500 hover:text-white'} rounded active:scale-90 shadow-sm`}
            >
                {levelText}
            </button>
        );
    };

    const handleRandomizeSingleBlock = (blockId: string) => {
        if (lockedModules[blockId]) return;
        const newState = { ...fieldState };
        const libId = blockId === 'skin_era' ? 'skin_era_lib' : `${blockId}_lib`;
        const category = ENGINE_LIBRARY.find(c => c.id === libId) || SKIN_LIBRARY.find(c => c.id === libId) || COMM_SKIN_LIBRARY.find(c => c.id === libId) || EXPERIMENTAL_SKIN_LIBRARY.find(c => c.id === libId) || TRAILER_SKIN_LIBRARY.find(c => c.id === libId);

        const currentEraTags = fieldState['skin_era'] || [];
        const currentEra = currentEraTags.length > 0 ? currentEraTags[0] : "";
        const archetype = getArchetypeFromEra(currentEra);

        if (category && category.items.length > 0) {
            const limit = BLOCK_LIMITS[blockId] || 1;
            const locks = lockedTags[blockId] || [];
            const keptTags = (fieldState[blockId] || []).filter(t => locks.includes(t));
            let count = 1;
            if (limit > 1) {
                count = Math.random() < 0.5 ? 1 : (Math.random() < 0.8 ? 2 : Math.min(limit, 3));
            }
            if (keptTags.length >= count) {
                newState[blockId] = keptTags.slice(0, count);
            } else {
                const needed = count - keptTags.length;
                const selected: string[] = [...keptTags];
                let availableItems = category.items;
                if (blockId === 'skin_location' || blockId === 'skin_profession' || blockId === 'skin_society' || blockId === 'skin_ideology' || blockId === 'comm_skin_scenario' || blockId === 'engine_m1' || blockId === 'skin_origin') {
                    availableItems = filterItemsByArchetype(category.items, archetype, blockId);
                    if (availableItems.length === 0) availableItems = category.items;
                }
                const available = availableItems.filter(i => !keptTags.includes(i.name));
                for (let i = 0; i < needed; i++) {
                    if (available.length === 0) break;
                    const idx = Math.floor(Math.random() * available.length);
                    selected.push(available[idx].name);
                    available.splice(idx, 1);
                }
                newState[blockId] = selected;
            }
        }
        onChange(newState);
    };

    const renderProphecySlot = (props: any) => (
        <ProphecySlot
            {...props}
            fieldState={fieldState}
            lang={lang}
            driverType={driverType}
            onOpenLibrary={openLibrary}
            onRemoveTag={removeTag}
            onClearBlock={clearBlock}
            getItemDetails={getItemDetails}
            getBilingualText={getBilingualText}
            ENGINE_BLOCKS={ENGINE_BLOCKS || []}
            onRandomizeBlock={handleRandomizeSingleBlock}
            onToggleLockBlock={onToggleLock}
            isBlockLocked={lockedModules[props.blockId]}
            lockedTags={lockedTags}
            onToggleTagLock={onToggleTagLock}
            onRandomizeTag={onRandomizeTag}
            getLibraryCount={getLibraryCount}
            onEditCustomDef={onEditCustomDef}
            onAddCustomDef={onAddCustomDef}
            onManualUpdate={handleManualUpdate}
        />
    );

    return (
        <div className="w-full h-full flex flex-col relative bg-[var(--bg-main)] overflow-hidden transition-colors duration-500">
            {theme === 'retro' && <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" style={{ backgroundImage: 'var(--pattern-aged)' }}></div>}

            {showRings && (
                <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-1000" style={{ filter: 'blur(1px)' }}>
                    <BorromeanRings 
                        fieldState={fieldState} 
                        lang={lang} 
                        driverType={driverType} 
                        opacity={0.8} 
                        centered={true}
                        vivid={true}
                    />
                </div>
            )}

            <div className={`flex-shrink-0 px-6 pt-6 pb-2 flex items-center justify-center z-20 bg-transparent relative`}>
                <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center relative">
                    <div className="flex-1 flex flex-col items-center justify-center pointer-events-none">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-[0.05em] -mr-[0.05em] text-center mb-4 transition-all duration-300">
                            <span className={theme === 'retro' ? 'text-[#8B261D]' : osTheme.accent}>
                                {getEngineTitle()}
                            </span>
                        </h2>
                        <p className={`text-[10px] md:text-base font-medium md:font-light uppercase tracking-[0.2em] -mr-[0.2em] text-center w-full whitespace-nowrap overflow-hidden text-ellipsis ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>{getEngineSubtitle()}</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative z-10 transition-all duration-300">
                <div className="flex-shrink-0 py-0 px-4 flex justify-center z-10">
                    <div className="relative w-full max-w-5xl">
                        <div className={`relative flex flex-col items-center justify-center w-full p-6 transition-colors duration-300 rounded-xl ${osTheme.hover}`}>
                            <div className="flex items-center gap-3 mb-4">{osTheme.icon}<span className={`text-base uppercase tracking-[0.3em] font-black text-zinc-400 transition-colors ${osTheme.label}`}>{lang === 'EN' ? osLabel.split('/')[1] : osLabel.split('/')[0]}</span></div>
                            <div onClick={() => openLibrary(currentOSKey)} className={`text-3xl md:text-6xl font-serif font-bold tracking-[0.1em] mb-3 transition duration-300 cursor-pointer hover:scale-110 hover:z-50 inline-block ${currentPsychicOS ? (theme === 'retro' ? 'text-black' : 'text-white') : (theme === 'retro' ? 'text-zinc-500 hover:text-black' : 'text-zinc-500 hover:text-white')}`}>{osDisplay}</div>
                            {osDetails && (
                                <div className={`text-sm md:text-lg font-normal w-full px-4 text-center leading-relaxed whitespace-pre-line ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                                    {lang === 'EN' && osDetails.defEn ? osDetails.defEn : osDetails.def}
                                    <span className={`block text-xs md:text-sm italic mt-1 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>{lang === 'EN' && osDetails.coreEn ? osDetails.coreEn : osDetails.core}</span>
                                </div>
                            )}
                            <div className={`absolute right-4 top-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity ${osTheme.accent}`}><ChevronRight size={24} /></div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="min-h-full flex flex-col items-center justify-start p-4 md:px-8 pt-0 md:pt-2 md:pb-60 space-y-24 md:space-y-36">
                    {isCommercial ? (
                        <div className="flex flex-col gap-8 md:gap-12 min-w-0">
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                {renderProphecySlot({ prefixCN: "一个处于", prefixEN: "A", blockId: "comm_c0", placeholderCN: "C0. 底层欲望", placeholderEN: "C0. Core Desire" })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">的</span>
                                {renderProphecySlot({ blockId: "comm_c1", placeholderCN: "C1. 缺失主体", placeholderEN: "C1. Subject", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">在</span>
                                {renderProphecySlot({ blockId: "comm_c2", placeholderCN: "C2. 痛点场景", placeholderEN: "C2. Pain Scenario", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">中，</span>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">由于恐惧</span>
                                {renderProphecySlot({ blockId: "comm_c6", placeholderCN: "C6. 潜在威胁", placeholderEN: "C6. Threat", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">，渴望获得作为救赎的</span>
                                {renderProphecySlot({ blockId: "comm_c3", placeholderCN: "C3. 产品图腾", placeholderEN: "C3. Product", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">；</span>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">在得到</span>
                                {renderProphecySlot({ blockId: "comm_c4", placeholderCN: "C4. 信任背书", placeholderEN: "C4. Endorsement", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">提供的权威背书后，他通过</span>
                                {renderProphecySlot({ blockId: "comm_c5", placeholderCN: "C5. 转化仪式", placeholderEN: "C5. Ritual", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">完成转化，最终抵达了</span>
                                {renderProphecySlot({ blockId: "comm_c7", placeholderCN: "C7. 承诺幻象", placeholderEN: "C7. Promise", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">。</span>
                            </div>
                        </div>
                    ) : isExperimental ? (
                        <div className="flex flex-col gap-8 md:gap-12 min-w-0">
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">作为</span>
                                {renderProphecySlot({ blockId: "poe_p0", placeholderCN: "S. 观察主体", placeholderEN: "S. The Subject", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">在</span>
                                {renderProphecySlot({ blockId: "poe_p1", placeholderCN: "C. 存在语境", placeholderEN: "C. The Context", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">中</span>
                                {renderProphecySlot({ blockId: "poe_p2", placeholderCN: "V. Interaction", placeholderEN: "V. Interaction", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">那个</span>
                                {renderProphecySlot({ blockId: "poe_p3", placeholderCN: "O. 凝视客体", placeholderEN: "O. The Object", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">，从而揭示了</span>
                                {renderProphecySlot({ blockId: "poe_p4", placeholderCN: "R. 哲学真理", placeholderEN: "R. The Revelation", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">。</span>
                            </div>
                        </div>
                    ) : isTrailer ? (
                        <div className="flex flex-col gap-8 md:gap-12 min-w-0">
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">以一个</span>
                                {renderProphecySlot({ blockId: "trl_t0", placeholderCN: "T0. 核心钩子", placeholderEN: "T0. The Hook", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">开场，通过</span>
                                {renderProphecySlot({ blockId: "trl_t1", placeholderCN: "T1. 节奏断裂", placeholderEN: "T1. The Break", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">打破平衡；抛出大量</span>
                                {renderProphecySlot({ blockId: "trl_t2", placeholderCN: "T2. 诱导能指", placeholderEN: "T2. The Tease", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">并伴随着不断攀升的</span>
                                {renderProphecySlot({ blockId: "trl_t3", placeholderCN: "T3. 情绪高压", placeholderEN: "T3. The Rise", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">，</span>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">借由一句</span>
                                {renderProphecySlot({ blockId: "trl_t4", placeholderCN: "T4. 关键台词", placeholderEN: "T4. The Line", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">展示</span>
                                {renderProphecySlot({ blockId: "trl_t5", placeholderCN: "T5. 视觉奇观", placeholderEN: "T5. The Spectacle", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">；在混淆了</span>
                                {renderProphecySlot({ blockId: "trl_t6", placeholderCN: "T6. 身份混淆", placeholderEN: "T6. The Identity", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">后，最终导向了</span>
                                {renderProphecySlot({ blockId: "trl_t7", placeholderCN: "T7. 终极悬停", placeholderEN: "T7. The Cliffhanger", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">。</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6 md:gap-14 min-w-0">
                            {/* 第一行：主体定位 */}
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "A" : "一个处于"}
                                </span>
                                {renderProphecySlot({ blockId: "engine_m0", placeholderCN: "M0. 精神拓扑", placeholderEN: "M0. Psychic Topology", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "" : "的"}
                                </span>
                                {renderProphecySlot({ blockId: "engine_m1", placeholderCN: "M1. 缺失主体", placeholderEN: "M1. Subject", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "." : "。"}
                                </span>
                            </div>

                            {/* 第二行：遭遇与幻想 */}
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "Experience" : "在遭遇了"}
                                </span>
                                {renderLevelButton("engine_m2")}
                                {renderProphecySlot({ blockId: "engine_m2", placeholderCN: "M2. 真实遭遇", placeholderEN: "M2. Encounter", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? ", he seeks" : "后，试图寻找"}
                                </span>
                                {renderProphecySlot({ blockId: "engine_m3", placeholderCN: "M3. 欲望幻想", placeholderEN: "M3. Fantasy", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "." : "。"}
                                </span>
                            </div>

                            {/* 第三行：阻断与张力 */}
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "But blocked by" : "却遭到"}
                                </span>
                                {renderLevelButton("engine_m4")}
                                {renderProphecySlot({ blockId: "engine_m4", placeholderCN: "M4. 大他者阻断", placeholderEN: "M4. The Other", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? ", he must pay" : "的重重阻击，面临"}
                                </span>
                                {renderProphecySlot({ blockId: "engine_m6", placeholderCN: "M6. 终极代价", placeholderEN: "M6. Stakes", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "." : "。"}
                                </span>
                            </div>

                            {/* 第四行：行动与终局 */}
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "He chooses" : "他决定通过"}
                                </span>
                                {renderLevelButton("engine_m5")}
                                {renderProphecySlot({ blockId: "engine_m5", placeholderCN: "M5. 行动驱力", placeholderEN: "M5. Drive", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "to struggle, leading to" : "抵抗，最终导向"}
                                </span>
                                {renderProphecySlot({ blockId: "engine_m7", placeholderCN: "M7. 存在落点", placeholderEN: "M7. Resolution", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "." : "。"}
                                </span>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
            {activeBlockId && (
                <NarrativeLibraryModal
                    isOpen={libraryModalOpen}
                    onClose={() => setLibraryModalOpen(false)}
                    blockId={activeBlockId}
                    blockName={getBlockName(activeBlockId, lang)}
                    selectedTags={fieldState[activeBlockId] || []}
                    onToggleTag={(tag) => toggleTag(activeBlockId, tag)}
                    onClear={() => clearBlock(activeBlockId)}
                    lang={lang}
                    driverType={driverType}
                    onAddCustomDef={onAddCustomDef}
                    customLibraryData={
                        activeBlockId === 'aes_palette_preset'
                            ? [{ id: 'lib_master', name: '视觉大师预设 (Master Presets)', desc: 'Pre-configured Cinematic Styles', items: MASTER_PRESETS }]
                            : (activeBlockId === 'aes_color_palette'
                                ? [{ id: 'lib_color', name: '经典色板库 (Color Palettes)', desc: 'Classic Color Schemes', items: AES_COLOR_PRESETS }]
                                : undefined)
                    }
                />
            )}

            {/* PORTAL TOOLTIP FOR COEFFICIENTS */}
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
                        <span className={theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'}>
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