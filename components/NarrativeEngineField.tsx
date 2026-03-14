import React, { useState, useCallback, useMemo } from 'react';
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
    ALL_SKIN_BLOCKS,
    COMM_SKIN_BLOCKS,
    EXPERIMENTAL_SKIN_BLOCKS,
    TRAILER_SKIN_BLOCKS,
    BLOCK_LIMITS,
    NARRATIVE_ENGINE_LIBRARY,
    SKIN_LIBRARY,
    COMMERCIAL_ENGINE_LIBRARY,
    COMM_SKIN_LIBRARY,
    EXPERIMENTAL_ENGINE_LIBRARY,
    EXPERIMENTAL_SKIN_LIBRARY,
    TRAILER_ENGINE_LIBRARY,
    TRAILER_SKIN_LIBRARY,
    GENRE_CATEGORIES,
    AESTHETIC_ENGINE_LIBRARY
} from '../constants';
import { getArchetypeFromEra, filterItemsByArchetype, getSingleRandomTag } from '../services/randomizer';
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

    // Aesthetic specific
    aestheticMode?: AestheticMode;
    onAestheticModeChange?: (mode: AestheticMode) => void;
    colorPalette?: string[];
    onPaletteChange?: (colors: string[]) => void;
    onApplyPreset?: (preset: AestheticPreset) => void;
    showRings?: boolean;
}

export const NarrativeEngineField: React.FC<NarrativeEngineFieldProps> = (props) => {
    const { theme } = useTheme();
    // If Aesthetic driver, delegate to AestheticEngineField
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
    }, [customLibraryDefs, driverType]);

    const getBilingualText = (text: string) => {
        if (!text) return "";
        const englishMatch = text.match(/\((.*?)\)/);
        const chinesePart = text.split('(')[0].trim();
        const englishPart = englishMatch ? englishMatch[1].trim() : "";
        return lang === 'EN' && englishPart ? englishPart : chinesePart;
    };

    const getEngineTitle = () => {
        if (isCommercial) return lang === 'EN' ? "THE SUTURE" : "欲望缝合";
        if (isExperimental) return lang === 'EN' ? "PHENOMENOLOGY" : "现象学还原";
        if (isTrailer) return lang === 'EN' ? "VIRTUAL ILLUSION" : "虚拟幻象";
        return lang === 'EN' ? "LABYRINTH OF EROS" : "爱欲迷宫";
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

    const handleRandomizeSingleBlock = (blockId: string) => {
        if (lockedModules[blockId]) return;
        const currentTags = fieldState[blockId] || [];
        const currentTag = currentTags.length > 0 ? currentTags[0] : "";

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
            onAddCustomDef={onAddCustomDef} // Pass add handler
            onManualUpdate={handleManualUpdate} // NEW: Pass manual update handler
        />
    );

    return (
        <div className="w-full h-full flex flex-col relative bg-[var(--bg-main)] overflow-hidden transition-colors duration-500">
            {theme === 'retro' && <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" style={{ backgroundImage: 'var(--pattern-aged)' }}></div>}

            {/* Background Borromean Rings - Clear rings with subtle 'frosted' context */}
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

            {/* HEADER: Fully Transparent - Background rings visible through text */}
            <div className={`flex-shrink-0 px-6 pt-12 pb-2 flex items-center justify-center z-20 bg-transparent relative`}>
                {/* Removed darkened overlay to prevent obscuring background */}
                <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center relative">
                    <div className="flex-1 flex flex-col items-center justify-center pointer-events-none">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-[0.05em] -mr-[0.05em] text-center mb-4 transition-all duration-300">
                            <span className={`
                                ${theme === 'retro' ? 'text-[#8B261D]' : osTheme.accent}
                                ${theme === 'retro' && !isCommercial && !isExperimental && !isTrailer ? 'drop-shadow-sm' : ''}
                            `}>
                                {getEngineTitle()}
                            </span>
                        </h2>
                        <p className={`text-[10px] md:text-base font-medium md:font-light uppercase tracking-[0.2em] -mr-[0.2em] text-center w-full whitespace-nowrap overflow-hidden text-ellipsis ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>{getEngineSubtitle()}</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative z-10 mt-4">
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
                <div className="flex flex-col items-center justify-start p-4 md:p-8 pt-12 space-y-6">
                    {isCommercial ? (
                        <div className="flex flex-col gap-10 min-w-0">
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "一个处于", prefixEN: "A", blockId: "comm_c0", placeholderCN: "C0. 底层欲望", placeholderEN: "C0. Core Desire" })}{renderProphecySlot({ prefixCN: "的", blockId: "comm_c1", placeholderCN: "C1. 缺失主体", placeholderEN: "C1. Subject" })}{renderProphecySlot({ prefixCN: "在", prefixEN: "within", blockId: "comm_c2", placeholderCN: "C2. 痛点场景", placeholderEN: "C2. Pain Scenario", suffixCN: "中，" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "由于恐惧", prefixEN: "fearing", blockId: "comm_c6", placeholderCN: "C6. 潜在威胁", placeholderEN: "C6. Threat", suffixCN: "，" })}{renderProphecySlot({ prefixCN: "渴望获得作为救赎的", prefixEN: "seeks salvation via", blockId: "comm_c3", placeholderCN: "C3. 产品图腾", placeholderEN: "C3. Product", suffixCN: "；" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "在得到", prefixEN: "Validated by", blockId: "comm_c4", placeholderCN: "C4. 信任背书", placeholderEN: "C4. Endorsement", suffixCN: "提供的权威背书后，" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "他通过", prefixEN: "through", blockId: "comm_c5", placeholderCN: "C5. 转化仪式", placeholderEN: "C5. Ritual", suffixCN: "完成转化，" })}{renderProphecySlot({ prefixCN: "最终抵达了", prefixEN: "attaining", blockId: "comm_c7", placeholderCN: "C7. 承诺幻象", placeholderEN: "C7. Promise", suffixCN: "。" })}</div>
                        </div>
                    ) : isExperimental ? (
                        <div className="flex flex-col gap-10 min-w-0">
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "作为", prefixEN: "As a", blockId: "poe_p0", placeholderCN: "S. 观察主体", placeholderEN: "S. The Subject" })}{renderProphecySlot({ prefixCN: "在", prefixEN: "in", blockId: "poe_p1", placeholderCN: "C. 存在语境", placeholderEN: "C. The Context" })}{renderProphecySlot({ prefixCN: "中", prefixEN: "", blockId: "poe_p2", placeholderCN: "V. Interaction", placeholderEN: "V. Interaction" })}{renderProphecySlot({ prefixCN: "那个", prefixEN: "the", blockId: "poe_p3", placeholderCN: "O. 凝视客体", placeholderEN: "O. The Object", suffixCN: "，" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "从而揭示了", prefixEN: "revealing", blockId: "poe_p4", placeholderCN: "R. 哲学真理", placeholderEN: "R. The Revelation", suffixCN: "。" })}</div>
                        </div>
                    ) : isTrailer ? (
                        <div className="flex flex-col gap-10 min-w-0">
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "以一个", prefixEN: "Starts with", blockId: "trl_t0", placeholderCN: "T0. 核心钩子", placeholderEN: "T0. The Hook" })}{renderProphecySlot({ prefixCN: "开场，通过", prefixEN: "followed by", blockId: "trl_t1", placeholderCN: "T1. 节奏断裂", placeholderEN: "T1. The Break", suffixCN: "打破平衡；" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "抛出大量", prefixEN: "Teasing with", blockId: "trl_t2", placeholderCN: "T2. 诱导能指", placeholderEN: "T2. The Tease" })}{renderProphecySlot({ prefixCN: "并伴随着不断攀升的", prefixEN: "rising to", blockId: "trl_t3", placeholderCN: "T3. 情绪高压", placeholderEN: "T3. The Rise", suffixCN: "，" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "借由一句", prefixEN: "anchored by", blockId: "trl_t4", placeholderCN: "T4. 关键台词", placeholderEN: "T4. The Line" })}{renderProphecySlot({ prefixCN: "展示", prefixEN: "revealing", blockId: "trl_t5", placeholderCN: "T5. 视觉奇观", placeholderEN: "T5. The Spectacle", suffixCN: "；" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-8 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "在混淆了", prefixEN: "blurring", blockId: "trl_t6", placeholderCN: "T6. 身份混淆", placeholderEN: "T6. The Identity", suffixCN: "后，" })}{renderProphecySlot({ prefixCN: "最终导向了", prefixEN: "ending on", blockId: "trl_t7", placeholderCN: "T7. 终极悬停", placeholderEN: "T7. The Cliffhanger", suffixCN: "。" })}</div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-10 min-w-0">
                            <div className="flex wrap justify-center items-baseline gap-y-2 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "一个处于", prefixEN: "A", blockId: "engine_m0", placeholderCN: "M0. 精神拓扑", placeholderEN: "M0. Psychic Topology" })}{renderProphecySlot({ prefixCN: "的", blockId: "engine_m1", placeholderCN: "M1. 缺失主体", placeholderEN: "M1. Subject" })}{renderProphecySlot({ prefixCN: "在遭遇了", prefixEN: "encounters", blockId: "engine_m2", placeholderCN: "M2. 真实遭遇", placeholderEN: "M2. Encounter", suffixCN: "后，" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-2 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "试图寻找", prefixEN: "seeking", blockId: "engine_m3", placeholderCN: "M3. 欲望幻想", placeholderEN: "M3. Fantasy" })}{renderProphecySlot({ prefixCN: "却遭到", prefixEN: "blocked by", blockId: "engine_m4", placeholderCN: "M4. 大他者阻断", placeholderEN: "M4. The Other", suffixCN: "的重重阻击；" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-2 gap-y-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "哪怕面临", prefixEN: "risking", blockId: "engine_m6", placeholderCN: "M6. 终极代价", placeholderEN: "M6. Stakes", suffixCN: "的巨大代价，" })}</div>
                            <div className="flex wrap justify-center items-baseline gap-y-2 gap-x-4 w-full min-w-0">{renderProphecySlot({ prefixCN: "他决定通过", prefixEN: "he uses", blockId: "engine_m5", placeholderCN: "M5. 行动驱力", placeholderEN: "M5. Drive", suffixCN: "抵抗，" })}{renderProphecySlot({ prefixCN: "最终导向", prefixEN: "leading to", blockId: "engine_m7", placeholderCN: "M7. 存在落点", placeholderEN: "M7. Resolution" })}</div>
                        </div>
                    )}
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
        </div>
    );
};