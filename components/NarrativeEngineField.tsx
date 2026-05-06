import React, { useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../contexts/ThemeContext';
import { NarrativeFieldState, BlueprintLanguage, DriverType, NarrativeBlockDef, LibraryCategoryDef, SubjectType, AestheticMode, AestheticPreset, WorldLawConfig } from '../types';
import { ArrowRight, Check, Dice5, Edit2, Eye, FileText, Ghost, Image as ImageIcon, Loader2, Lock, Plus, RotateCcw, Scale, ScanEye, BrainCircuit, Shuffle, Trash2, Unlock, Upload, User, X, Zap } from 'lucide-react';
import { ProphecySlot } from './ProphecySlot';
import { SkinSlot } from './TheSkinSidebar';
import { BorromeanRings } from './BorromeanRings';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { AestheticEngineField } from './AestheticEngineField';
import { AdminXRayButton } from './XRayInspector';
import { supabaseDatabase } from '../services/supabaseDatabase';
import { buildAutoFillPrompt } from '../services/geminiService';
import { buildNarrativeDiagnosisPrompt } from '../services/narrativeDiagnosis';
import {
    NARRATIVE_ENGINE_BLOCKS,
    COMMERCIAL_ENGINE_BLOCKS,
    EXPERIMENTAL_ENGINE_BLOCKS,
    AESTHETIC_ENGINE_BLOCKS,
    TRAILER_ENGINE_BLOCKS,
    ALL_SKIN_BLOCKS,
    SKIN_LIBRARY,
    COMM_SKIN_LIBRARY,
    EXPERIMENTAL_SKIN_LIBRARY,
    TRAILER_SKIN_LIBRARY,
    BLOCK_LIMITS,
    NARRATIVE_ENGINE_LIBRARY,
    COMMERCIAL_ENGINE_LIBRARY,
    EXPERIMENTAL_ENGINE_LIBRARY,
    TRAILER_ENGINE_LIBRARY,
    COUNTRY_PRESETS,
    GENRE_CATEGORIES
} from '../constants';
import { getArchetypeFromEra, filterItemsByArchetype } from '../services/randomizer';
import { findItemFull } from '../services/dataRegistry';
import { getBlockName } from '../utils/blockUtils';
import { MASTER_PRESETS } from '../data/aesthetic/master_presets';
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
    faceState?: Record<string, 'bright' | 'dark' | 'tension'>;
    onFaceStateChange?: (locks: Record<string, 'bright' | 'dark' | 'tension'>) => void;
    customTextSeed?: string;
    onCustomTextSeedChange?: (value: string) => void;
    onRandomizeSummaryGroup?: () => void;
    visionImage?: string | null;
    onVisionImageChange?: (value: string | null) => void;
    visionImageNote?: string;
    onVisionImageNoteChange?: (value: string) => void;
    visionAnalysis?: string;
    onVisionAnalysisChange?: (value: string) => void;
    onAnalyzeImage?: () => void | Promise<void>;
    isAnalyzingImage?: boolean;
    onVisionAutoFill?: () => void | Promise<void>;
    isVisionAutoFilling?: boolean;
    visionCandidateState?: NarrativeFieldState;
    onApplyVisionCandidateState?: (state: NarrativeFieldState) => void;
    onClearVisionCandidateState?: () => void;
    worldLawConfig?: WorldLawConfig;
    setWorldLawConfig?: (config: WorldLawConfig) => void;
    isAdmin?: boolean;
}

export const NarrativeEngineField: React.FC<NarrativeEngineFieldProps> = (props) => {
    const { theme } = useTheme();
    if (props.driverType === DriverType.AESTHETIC) {
        return <AestheticEngineField {...props} aestheticMode={props.aestheticMode || 'REALISM'} onAestheticModeChange={props.onAestheticModeChange || (() => { })} showRings={props.showRings} />;
    }

    const {
        fieldState, onChange, lang, driverType,
        lockedModules, onToggleLock, lockedTags, onToggleTagLock, onRandomizeTag,
        customLibraryDefs, onAddCustomDef, onEditCustomDef, showRings = true,
        faceState, onFaceStateChange,
        customTextSeed = '', onCustomTextSeedChange,
        onRandomizeSummaryGroup,
        visionImage = null, onVisionImageChange,
        visionImageNote = '', onVisionImageNoteChange,
        visionAnalysis = '', onVisionAnalysisChange,
        onAnalyzeImage, isAnalyzingImage = false,
        onVisionAutoFill, isVisionAutoFilling = false,
        visionCandidateState = {}, onApplyVisionCandidateState, onClearVisionCandidateState,
        worldLawConfig = { gravity: 1 }, setWorldLawConfig,
        isAdmin = false
    } = props;

    const labyrinthImageInputRef = useRef<HTMLInputElement>(null);
    const [libraryModalOpen, setLibraryModalOpen] = useState(false);
    const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
    const [scrollToTag, setScrollToTag] = useState<string | undefined>(undefined);
    const [labyrinthPanelMode, setLabyrinthPanelMode] = useState<'formula' | 'desire'>('formula');
    const [labyrinthSummaryMode, setLabyrinthSummaryMode] = useState<'module' | 'sentence'>('module');
    const [labyrinthSummaryExpanded, setLabyrinthSummaryExpanded] = useState(false);
    const [labyrinthSummaryModuleExpanded, setLabyrinthSummaryModuleExpanded] = useState(true);
    const [labyrinthImplantPage, setLabyrinthImplantPage] = useState<'image' | 'mapping'>('image');
    const [isLabyrinthImageUploading, setIsLabyrinthImageUploading] = useState(false);
    const [isLabyrinthVisionResultOpen, setIsLabyrinthVisionResultOpen] = useState(false);
    const [isLabyrinthIdentityModalOpen, setIsLabyrinthIdentityModalOpen] = useState(false);
    const [isLabyrinthTimeModalOpen, setIsLabyrinthTimeModalOpen] = useState(false);
    const [labyrinthWorldLawPreview, setLabyrinthWorldLawPreview] = useState<number | null>(null);
    const [customGenderInput, setCustomGenderInput] = useState('');
    const [customAgeInput, setCustomAgeInput] = useState('');

    const isCommercial = driverType === DriverType.COMMERCIAL;
    const isExperimental = driverType === DriverType.EXPERIMENTAL;
    const isTrailer = driverType === DriverType.TRAILER;
    const isLabyrinth = !isCommercial && !isExperimental && !isTrailer;

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
    const WORLD_LAW_LEVELS = [
        {
            val: 1,
            cn: '写实',
            en: 'Real',
            descCN: '物理重力闭锁。没有奇迹，死亡是绝对的，重力是必然的。',
            descEN: 'Locked physical gravity. No miracles; death is absolute and gravity is binding.'
        },
        {
            val: 2,
            cn: '合理',
            en: 'Plausible',
            descCN: '超现实元素必须被赋予科学、机械或社会逻辑的合理解释。',
            descEN: 'Surreal elements need a scientific, mechanical, or social explanation.'
        },
        {
            val: 3,
            cn: '缝合',
            en: 'Suture',
            descCN: '现实为底，允许局部缝合超现实能指，像症状一样浮出。',
            descEN: 'Reality remains the base, with local surreal signifiers surfacing like symptoms.'
        },
        {
            val: 4,
            cn: '奇观',
            en: 'Spectacle',
            descCN: '科幻或魔幻法则公开运行，但仍维持基本的内部一致性。',
            descEN: 'Sci-fi or fantasy rules are explicit, while keeping basic internal consistency.'
        },
        {
            val: 5,
            cn: '狂想',
            en: 'Frenzy',
            descCN: '绝对无重力。允许能指越界拼贴，幻想系统彻底脱轨。',
            descEN: 'Absolute zero-gravity. Signifiers may collide and the fantasy system can derail.'
        }
    ];

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
        return lang === 'EN' ? "EROS LABYRINTH" : "爱欲迷宫";
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
        accent: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-gold-primary',
        hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-amber-900/10',
        label: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-gold-primary',
        icon: <Ghost size={24} className={theme === 'retro' ? "text-[var(--text-accent)]" : "text-gold-primary"} />
    };
    let osLabel = "结构基底/STRUCTURAL BASE";

    if (isCommercial) {
        osTheme = {
            accent: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-mist-cyan',
            hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-mist-cyan/10',
            label: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-mist-cyan',
            icon: <ScanEye size={24} className={theme === 'retro' ? "text-[var(--text-accent)]" : "text-mist-cyan"} />
        };
        osLabel = "对象预设/OBJECT ANCHOR";
    } else if (isExperimental) {
        osTheme = {
            accent: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-mist-purple',
            hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-purple-900/10',
            label: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-mist-purple',
            icon: <BrainCircuit size={24} className={theme === 'retro' ? "text-[var(--text-accent)]" : "text-mist-purple"} />
        };
        osLabel = "核心观念/CORE CONCEPT";
    } else if (isTrailer) {
        osTheme = {
            accent: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-mist-orange',
            hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-orange-900/10',
            label: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-mist-orange',
            icon: <Zap size={24} className={theme === 'retro' ? "text-[var(--text-accent)]" : "text-mist-orange"} />
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
    const openLibrary = (blockId: string, scrollToTag?: string) => { if (lockedModules[blockId]) return; setActiveBlockId(blockId); setScrollToTag(scrollToTag); setLibraryModalOpen(true); };

    const isGenderLocked = !!lockedModules['skin_gender'];
    const isAgeLocked = !!lockedModules['skin_age'];
    const isCountryLocked = !!lockedModules['skin_country_exact'];
    const isYearLocked = !!lockedModules['skin_year_exact'];
    const selectedGender = fieldState['skin_gender']?.[0] || '';
    const selectedAge = fieldState['skin_age']?.[0] || '';
    const selectedCountry = fieldState['skin_country_exact']?.[0] || '';
    const selectedYearTag = fieldState['skin_year_exact']?.[0] || '';
    const selectedYear = selectedYearTag && Number.isFinite(Number(selectedYearTag)) ? Number(selectedYearTag) : null;

    const getBlockDefinition = (blockId: string) => {
        const block = [...ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS].find(item => item.id === blockId);
        return {
            def: block?.description || '',
            defEn: block?.descriptionEn || '',
        };
    };

    const buildControlDetails = (blockId: string, fallbackDef: string, fallbackCore: string) => {
        const block = getBlockDefinition(blockId);
        return {
            def: block.def || fallbackDef,
            defEn: block.defEn || fallbackDef,
            core: fallbackCore,
            coreEn: fallbackCore,
        };
    };

    const getPresetText = (value: string, presets: Array<{ cn: string; en: string }>) => {
        const preset = presets.find(item => item.cn === value || item.en === value);
        if (!preset) return value;
        return lang === 'EN' ? preset.en : preset.cn;
    };

    const getAgeDisplay = (value: string, includeRange = true) => {
        if (!value) return '';
        const preset = AGE_PRESETS.find(item => item.cn === value || item.en === value);
        if (!preset) return lang === 'EN' || !includeRange || /岁|age|years?/i.test(value) ? value : `${value}岁`;
        if (lang === 'EN') return preset.en;
        return includeRange ? `${preset.cn}（${preset.range}岁）` : preset.cn;
    };

    const updateLabyrinthIdentity = (gender?: string | null, age?: string | null) => {
        const nextState = { ...fieldState };
        let changed = false;

        if (gender !== undefined && !isGenderLocked) {
            nextState['skin_gender'] = gender ? [gender] : [];
            changed = true;
        }

        if (age !== undefined && !isAgeLocked) {
            nextState['skin_age'] = age ? [age] : [];
            changed = true;
        }

        if (changed) onChange(nextState);
    };

    const handleLabyrinthRandomGender = () => {
        if (isGenderLocked) return;
        const preset = GENDER_PRESETS[Math.floor(Math.random() * GENDER_PRESETS.length)];
        updateLabyrinthIdentity(lang === 'EN' ? preset.en : preset.cn, undefined);
    };

    const handleLabyrinthRandomAge = () => {
        if (isAgeLocked) return;
        const preset = AGE_PRESETS[Math.floor(Math.random() * AGE_PRESETS.length)];
        updateLabyrinthIdentity(undefined, lang === 'EN' ? preset.en : preset.cn);
    };

    const handleLabyrinthRandomIdentity = () => {
        const nextGender = GENDER_PRESETS[Math.floor(Math.random() * GENDER_PRESETS.length)];
        const nextAge = AGE_PRESETS[Math.floor(Math.random() * AGE_PRESETS.length)];
        updateLabyrinthIdentity(
            isGenderLocked ? undefined : (lang === 'EN' ? nextGender.en : nextGender.cn),
            isAgeLocked ? undefined : (lang === 'EN' ? nextAge.en : nextAge.cn)
        );
    };

    const handleLabyrinthResetIdentity = () => {
        updateLabyrinthIdentity(isGenderLocked ? undefined : null, isAgeLocked ? undefined : null);
        setCustomGenderInput('');
        setCustomAgeInput('');
    };

    const handleLabyrinthToggleIdentityLock = () => {
        const shouldLock = !isGenderLocked || !isAgeLocked;
        if (isGenderLocked !== shouldLock) onToggleLock('skin_gender');
        if (isAgeLocked !== shouldLock) onToggleLock('skin_age');
    };

    const formatYear = (year: number, useSuffix = false) => {
        if (year < 0) return lang === 'EN' ? `${Math.abs(year)} BC` : `公元前${Math.abs(year)}${useSuffix ? '年' : ''}`;
        return lang === 'EN' ? `${year}` : `公元${year}${useSuffix ? '年' : ''}`;
    };

    const updateLabyrinthTimeLocation = (country?: string | null, year?: number | null) => {
        const nextState = { ...fieldState };
        let changed = false;

        if (country !== undefined && !isCountryLocked) {
            nextState['skin_country_exact'] = country ? [country] : [];
            changed = true;
        }

        if (year !== undefined && !isYearLocked) {
            nextState['skin_year_exact'] = year === null ? [] : [String(year)];
            changed = true;
        }

        if (changed) onChange(nextState);
    };

    const handleLabyrinthRandomCountry = () => {
        if (isCountryLocked) return;
        const preset = COUNTRY_PRESETS[Math.floor(Math.random() * COUNTRY_PRESETS.length)];
        updateLabyrinthTimeLocation(lang === 'EN' ? preset.en : preset.cn, undefined);
    };

    const handleLabyrinthRandomYear = () => {
        if (isYearLocked) return;
        const randomYear = Math.floor(Math.random() * (2050 - (-2000) + 1)) + (-2000);
        updateLabyrinthTimeLocation(undefined, randomYear);
    };

    const handleLabyrinthRandomTimeLocation = () => {
        const preset = COUNTRY_PRESETS[Math.floor(Math.random() * COUNTRY_PRESETS.length)];
        const randomYear = Math.floor(Math.random() * (2050 - (-2000) + 1)) + (-2000);
        updateLabyrinthTimeLocation(
            isCountryLocked ? undefined : (lang === 'EN' ? preset.en : preset.cn),
            isYearLocked ? undefined : randomYear
        );
    };

    const handleLabyrinthResetTimeLocation = () => {
        updateLabyrinthTimeLocation(isCountryLocked ? undefined : null, isYearLocked ? undefined : null);
    };

    const handleLabyrinthToggleTimeLocationLock = () => {
        const shouldLock = !isCountryLocked || !isYearLocked;
        if (isCountryLocked !== shouldLock) onToggleLock('skin_country_exact');
        if (isYearLocked !== shouldLock) onToggleLock('skin_year_exact');
    };

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
            ENGINE_BLOCKS={[...(ENGINE_BLOCKS || []), ...ALL_SKIN_BLOCKS]}
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

    const renderFormulaText = (cn: string, en: string, className = "") => (
        <span className={`mist-labyrinth-formula-text select-none ${className}`}>
            {lang === 'EN' ? en : cn}
        </span>
    );

    const renderFormulaBlock = (blockId: string, placeholderCN: string, placeholderEN: string) => (
        <span className="mist-labyrinth-formula-token">
            {renderProphecySlot({
                blockId,
                placeholderCN,
                placeholderEN,
                hideAffixes: true,
                tooltipPlacement: 'above'
            })}
        </span>
    );

    const renderLabyrinthMainFormula = () => (
        <div className="mist-labyrinth-formula">
            <div className="mist-labyrinth-formula-header">
                <p className="mist-labyrinth-formula-eyebrow">
                    {lang === 'EN' ? "MIST FORMULA" : "迷雾公式"}
                </p>
                <div className="mist-labyrinth-formula-caption">
                    {lang === 'EN'
                        ? "A closed loop of desire, act, verdict and residue."
                        : "欲望、行动、裁决与余痕构成的闭环。"}
                </div>
            </div>
            <div className="mist-labyrinth-canonical-formula">
                <div className="mist-labyrinth-formula-row mist-labyrinth-formula-row-compact">
                    {renderFormulaText("Story =", "Story =", "mist-labyrinth-formula-lead")}
                    {renderFormulaBlock("engine_m0", "M0. 精神拓扑", "M0. Psychic Topology")}
                    {renderFormulaText("{[", "{[")}
                    {renderFormulaBlock("engine_m1", "M1. 缺失主体", "M1. Subject")}
                    {renderFormulaText("↔", "↔")}
                    {renderFormulaBlock("engine_m2", "M2. 真实遭遇", "M2. Encounter")}
                    {renderFormulaText("↔", "↔")}
                    {renderFormulaBlock("engine_m3", "M3. 欲望幻想", "M3. Fantasy")}
                    {renderFormulaText("]/", "]/")}
                    {renderFormulaBlock("engine_m4", "M4. 大他者阻断", "M4. The Other")}
                    {renderFormulaText("]×", "]×")}
                    {renderFormulaBlock("engine_m5", "M5. 行动驱力", "M5. Drive")}
                    {renderFormulaText("}", "}")}
                </div>
                <div className="mist-labyrinth-formula-row mist-labyrinth-formula-row-compact">
                    {renderFormulaText("⇒ Act", "⇒ Act", "mist-labyrinth-formula-lead")}
                    {renderFormulaBlock("engine_m6", "M6. 终极代价", "M6. Stakes")}
                    {renderFormulaText("→", "→")}
                    {renderFormulaText("(", "(")}
                    {renderFormulaBlock("engine_m7a", "M7A. 象征裁决", "M7A. Verdict")}
                    {renderFormulaText("◇", "◇")}
                    {renderFormulaBlock("engine_m7b", "M7B. 实在余痕", "M7B. Residue")}
                    {renderFormulaText(")", ")")}
                    {renderFormulaText("↺ M1'", "↺ M1'")}
                </div>
            </div>
        </div>
    );

    const labyrinthControlGroups = [
        {
            index: "01",
            titleCN: "主体定位",
            titleEN: "SUBJECT COORDINATES",
            noteCN: "精神拓扑与缺失主体",
            noteEN: "Topology and barred subject",
            blocks: [
                { id: "engine_m0", placeholderCN: "M0. 精神拓扑", placeholderEN: "M0. Topology" },
                { id: "engine_m1", placeholderCN: "M1. 缺失主体", placeholderEN: "M1. Subject" },
            ]
        },
        {
            index: "02",
            titleCN: "创伤与幻想",
            titleEN: "TRAUMA / FANTASY",
            noteCN: "真实遭遇与欲望对象",
            noteEN: "Encounter and object a",
            blocks: [
                { id: "engine_m2", placeholderCN: "M2. 真实遭遇", placeholderEN: "M2. Encounter" },
                { id: "engine_m3", placeholderCN: "M3. 欲望幻想", placeholderEN: "M3. Fantasy" },
            ]
        },
        {
            index: "03",
            titleCN: "阻断与行动",
            titleEN: "OBSTACLE / DRIVE",
            noteCN: "大他者阻断与行动驱力",
            noteEN: "The Other and drive",
            blocks: [
                { id: "engine_m4", placeholderCN: "M4. 大他者/镜像", placeholderEN: "M4. The Other" },
                { id: "engine_m5", placeholderCN: "M5. 行动驱力", placeholderEN: "M5. Drive" },
            ]
        },
        {
            index: "04",
            titleCN: "代价与余痕",
            titleEN: "STAKES / RESIDUE",
            noteCN: "终极代价、象征裁决、实在余痕",
            noteEN: "Stakes, verdict, residue",
            blocks: [
                { id: "engine_m6", placeholderCN: "M6. 终极代价", placeholderEN: "M6. Stakes" },
                { id: "engine_m7a", placeholderCN: "M7A. 象征裁决", placeholderEN: "M7A. Verdict" },
                { id: "engine_m7b", placeholderCN: "M7B. 实在余痕", placeholderEN: "M7B. Residue" },
            ]
        }
    ];

    const labyrinthSurfaceGroups = [
        {
            index: "01",
            titleCN: "故事摘要",
            titleEN: "STORY SUMMARY",
            noteCN: "叙事动力、结构、体量与表层世界",
            noteEN: "Drive, structure, volume and surface world",
            blocks: [
                { id: "skin_genre", placeholderCN: "SUR1. 叙事动力", placeholderEN: "SUR1. Drive" },
                { id: "skin_structure", placeholderCN: "SV1. 叙事结构", placeholderEN: "SV1. Structure" },
                { id: "skin_volume", placeholderCN: "SV2. 故事体量", placeholderEN: "SV2. Volume" },
                { id: "skin_era", placeholderCN: "SUR2. 背景场域", placeholderEN: "SUR2. Field" },
                { id: "skin_society", placeholderCN: "SUR4. 社会形态", placeholderEN: "SUR4. Order" },
                { id: "skin_ideology", placeholderCN: "SUR10. 信念预设", placeholderEN: "SUR10. Belief" },
            ]
        },
        {
            index: "02",
            titleCN: "时空秩序",
            titleEN: "FIELD ORDER",
            noteCN: "背景场域、社会形态、信念预设",
            noteEN: "Field, social order, belief",
            blocks: [
                { id: "skin_era", placeholderCN: "SUR2. 背景场域", placeholderEN: "SUR2. Field" },
                { id: "skin_society", placeholderCN: "SUR4. 社会形态", placeholderEN: "SUR4. Order" },
                { id: "skin_ideology", placeholderCN: "SUR10. 信念预设", placeholderEN: "SUR10. Belief" },
            ]
        },
        {
            index: "03",
            titleCN: "角色与对象",
            titleEN: "CAST / OBJECT",
            noteCN: "选角呈现、年龄、职业、对象预设",
            noteEN: "Casting, age, role, object",
            blocks: [
                { id: "skin_gender", placeholderCN: "SUR7. 选角呈现", placeholderEN: "SUR7. Casting" },
                { id: "skin_age", placeholderCN: "SUR8. 年龄阶段", placeholderEN: "SUR8. Age" },
                { id: "skin_profession", placeholderCN: "SUR9. 职业身份", placeholderEN: "SUR9. Role" },
                { id: "skin_everything", placeholderCN: "SUR5. 对象预设", placeholderEN: "SUR5. Object" },
            ]
        },
        {
            index: "04",
            titleCN: "空间与收场",
            titleEN: "SPACE / CLOSURE",
            noteCN: "空间容器、显性收场、信念裂度",
            noteEN: "Space, ending, fracture",
            blocks: [
                { id: "skin_location", placeholderCN: "SUR6. 空间容器", placeholderEN: "SUR6. Space" },
                { id: "skin_ending", placeholderCN: "SUR-END. 显性收场", placeholderEN: "SUR-END. Ending" },
                { id: "sur10x", placeholderCN: "SUR10X. 信念裂度", placeholderEN: "SUR10X. Fracture" },
            ]
        }
    ];

    const renderLabyrinthGroupGrid = (groups: typeof labyrinthControlGroups, variant: 'surface' | 'desire' = 'surface') => (
        <div className={`mist-labyrinth-module-grid ${variant === 'desire' ? 'mist-labyrinth-module-grid-desire' : ''}`}>
            {groups.map(group => (
                <article key={group.index} className="mist-labyrinth-module">
                    <div className="mist-labyrinth-module-top">
                        <span className="mist-labyrinth-module-index">{group.index}</span>
                        <div>
                            <h4>{lang === 'EN' ? group.titleEN : group.titleCN}</h4>
                            <p>{lang === 'EN' ? group.noteEN : group.noteCN}</p>
                        </div>
                    </div>
                    <div className="mist-labyrinth-module-slots">
                        {group.blocks.map(block => (
                            <div key={block.id} className="mist-labyrinth-mini-slot">
                                {renderProphecySlot({
                                    blockId: block.id,
                                    placeholderCN: block.placeholderCN,
                                    placeholderEN: block.placeholderEN,
                                    hideAffixes: true,
                                    isSmall: true,
                                    tooltipPlacement: variant === 'desire' ? 'above' : 'auto'
                                })}
                            </div>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );

    const renderDesireSentenceSlot = (blockId: string, placeholderCN: string, placeholderEN: string) => (
        <span className="mist-labyrinth-desire-sentence-slot">
            {renderProphecySlot({
                blockId,
                placeholderCN,
                placeholderEN,
                hideAffixes: true,
                isSmall: true,
                tooltipPlacement: 'above'
            })}
        </span>
    );

    const renderLabyrinthDesirePanel = () => (
        <div className="mist-labyrinth-desire-panel mist-labyrinth-desire-sentence">
            <div className="mist-labyrinth-desire-sentence-body">
                <div className="mist-labyrinth-desire-sentence-line">
                    <span>{lang === 'EN' ? "A" : "一个处于"}</span>
                    {renderDesireSentenceSlot("engine_m0", "M0. 精神拓扑", "M0. Psychic Topology")}
                    <span>{lang === 'EN' ? "" : "的"}</span>
                    {renderDesireSentenceSlot("engine_m1", "M1. 缺失主体", "M1. Subject")}
                    <span>{lang === 'EN' ? "." : "。"}</span>
                </div>
                <div className="mist-labyrinth-desire-sentence-line">
                    <span>{lang === 'EN' ? "After encountering" : "在遭遇了"}</span>
                    {renderDesireSentenceSlot("engine_m2", "M2. 真实遭遇", "M2. Encounter")}
                    <span>{lang === 'EN' ? ", the subject seeks" : "后，试图寻找"}</span>
                    {renderDesireSentenceSlot("engine_m3", "M3. 欲望幻想", "M3. Fantasy")}
                    <span>{lang === 'EN' ? "." : "。"}</span>
                </div>
                <div className="mist-labyrinth-desire-sentence-line">
                    <span>{lang === 'EN' ? "Yet blocked by" : "却遭到"}</span>
                    {renderDesireSentenceSlot("engine_m4", "M4. 大他者阻断", "M4. The Other")}
                    <span>{lang === 'EN' ? ", facing" : "的重重阻击，面临"}</span>
                    {renderDesireSentenceSlot("engine_m6", "M6. 终极代价", "M6. Stakes")}
                    <span>{lang === 'EN' ? "." : "。"}</span>
                </div>
                <div className="mist-labyrinth-desire-sentence-line">
                    <span>{lang === 'EN' ? "The subject chooses" : "他决定通过"}</span>
                    {renderDesireSentenceSlot("engine_m5", "M5. 行动驱力", "M5. Drive")}
                    <span>{lang === 'EN' ? "to resist," : "抵抗，"}</span>
                </div>
                <div className="mist-labyrinth-desire-sentence-line">
                    <span>{lang === 'EN' ? "ultimately receiving" : "最终迎来了"}</span>
                    {renderDesireSentenceSlot("engine_m7a", "M7A. 象征裁决", "M7A. Verdict")}
                    <span>{lang === 'EN' ? ", and forever living with" : "，并在此后永远带着"}</span>
                    {renderDesireSentenceSlot("engine_m7b", "M7B. 实在余痕", "M7B. Residue")}
                    <span>{lang === 'EN' ? "." : "活下去。"}</span>
                </div>
            </div>
        </div>
    );

    const renderSurfaceProphecySlot = (blockId: string, placeholderCN: string, placeholderEN: string, isTiny = false) => (
        <ProphecySlot
            blockId={blockId}
            placeholderCN={placeholderCN}
            placeholderEN={placeholderEN}
            fieldState={fieldState}
            lang={lang}
            driverType={driverType}
            onOpenLibrary={openLibrary}
            onRemoveTag={removeTag}
            onClearBlock={clearBlock}
            getItemDetails={getItemDetails}
            getBilingualText={getBilingualText}
            ENGINE_BLOCKS={[...(ENGINE_BLOCKS || []), ...ALL_SKIN_BLOCKS]}
            onRandomizeBlock={handleRandomizeSingleBlock}
            onToggleLockBlock={onToggleLock}
            isBlockLocked={lockedModules[blockId]}
            lockedTags={lockedTags}
            onToggleTagLock={onToggleTagLock}
            onRandomizeTag={onRandomizeTag}
            getLibraryCount={getLibraryCount}
            onEditCustomDef={onEditCustomDef}
            onAddCustomDef={onAddCustomDef}
            onManualUpdate={handleManualUpdate}
            isSmall={true}
            isTiny={isTiny}
            hideAffixes={true}
        />
    );

    const renderLabyrinthSentenceSlot = (blockId: string, placeholderCN: string, placeholderEN: string) => (
        <span className="mist-labyrinth-surface-sentence-slot">
            {renderProphecySlot({
                blockId,
                placeholderCN,
                placeholderEN,
                hideAffixes: true,
                isSmall: true
            })}
        </span>
    );

    const labyrinthSkinSlotProps = {
        fieldState,
        accentColor: 'border-gold-primary',
        onOpen: openLibrary,
        onRemove: removeTag,
        lang,
        lockedTags,
        onToggleTagLock,
        onRandomizeTag,
        getItemDetails,
        accentTextColor: 'text-gold-primary',
        driverType,
        onRandomizeBlock: handleRandomizeSingleBlock,
        onClearBlock: clearBlock,
        onToggleLockBlock: onToggleLock,
        onAddCustomDef,
        onEditCustomDef,
        onManualUpdate: handleManualUpdate,
        hideTooltipCore: true
    };

    const renderLabyrinthSkinSlot = (blockId: string, placeholderCN: string, placeholderEN: string) => (
        <SkinSlot
            blockId={blockId}
            placeholder={lang === 'EN' ? placeholderEN : placeholderCN}
            isBlockLocked={lockedModules[blockId]}
            {...labyrinthSkinSlotProps}
        />
    );

    const renderLabyrinthSurfaceTextSeed = () => (
        <textarea
            value={customTextSeed}
            onChange={(e) => onCustomTextSeedChange?.(e.target.value)}
            placeholder={lang === 'EN'
                ? "Write the story core, relation lines, conflict seeds, and custom narrative notes here."
                : "把故事核、人物关系、事件、主题、硬约束、自定义导演需求写在这里。"}
            className="mist-labyrinth-surface-summary-input mist-labyrinth-structure-custom-input"
        />
    );

    const renderLabyrinthWorldLawModule = () => {
        const currentGravity = worldLawConfig.gravity ?? 1;
        const currentIndex = Math.max(0, WORLD_LAW_LEVELS.findIndex(level => level.val === currentGravity));
        const currentLevel = WORLD_LAW_LEVELS[currentIndex] || WORLD_LAW_LEVELS[0];
        const previewLevel = WORLD_LAW_LEVELS.find(level => level.val === labyrinthWorldLawPreview) || currentLevel;
        const currentLabel = lang === 'EN' ? currentLevel.en : currentLevel.cn;
        const previewDesc = lang === 'EN' ? previewLevel.descEN : previewLevel.descCN;

        const setLabyrinthWorldLaw = (gravity: number) => {
            setWorldLawConfig?.({ ...worldLawConfig, gravity });
        };

        const cycleWorldLaw = () => {
            const nextLevel = WORLD_LAW_LEVELS[(currentIndex + 1) % WORLD_LAW_LEVELS.length];
            setLabyrinthWorldLaw(nextLevel.val);
        };

        return (
            <div className={`mist-labyrinth-world-law-module is-level-${currentLevel.val}`}>
                <button
                    type="button"
                    className="mist-labyrinth-world-law-main"
                    onClick={cycleWorldLaw}
                    disabled={!setWorldLawConfig}
                    aria-label={lang === 'EN' ? 'Switch reality mode' : '切换现实法则模式'}
                >
                    <span className="mist-labyrinth-world-law-kicker">
                        <Scale size={12} />
                        {lang === 'EN' ? 'Reality Mode' : '现实法则'}
                    </span>
                    <span className="mist-labyrinth-world-law-current">
                        <b>{currentLabel}</b>
                        <em>LV.{String(currentLevel.val).padStart(2, '0')}</em>
                    </span>
                    <span className="mist-labyrinth-world-law-description">{previewDesc}</span>
                </button>
                <div className="mist-labyrinth-world-law-pips" aria-label={lang === 'EN' ? 'Reality mode levels' : '现实法则等级'}>
                    {WORLD_LAW_LEVELS.map(level => {
                        const isActive = level.val === currentLevel.val;
                        const label = lang === 'EN' ? level.en : level.cn;
                        return (
                            <button
                                type="button"
                                key={level.val}
                                className={isActive ? 'is-active' : ''}
                                onMouseEnter={() => setLabyrinthWorldLawPreview(level.val)}
                                onMouseLeave={() => setLabyrinthWorldLawPreview(null)}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setLabyrinthWorldLaw(level.val);
                                }}
                                disabled={!setWorldLawConfig}
                                aria-pressed={isActive}
                                aria-label={lang === 'EN' ? `Set reality mode to ${level.en}` : `切换为${level.cn}模式`}
                            >
                                <span>{level.val}</span>
                                <b>{label}</b>
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderSurfaceModeToggle = (
        mode: 'module' | 'sentence',
        onModeChange: (mode: 'module' | 'sentence') => void
    ) => (
        <div className="mist-labyrinth-surface-mode-toggle" role="tablist">
            <button
                type="button"
                className={mode === 'module' ? 'is-active' : ''}
                onClick={() => onModeChange('module')}
            >
                {lang === 'EN' ? "MODULE" : "模块"}
            </button>
            <button
                type="button"
                className={mode === 'sentence' ? 'is-active' : ''}
                onClick={() => onModeChange('sentence')}
            >
                {lang === 'EN' ? "SENTENCE" : "句式"}
            </button>
        </div>
    );

    const renderSurfaceGroupActions = (blocks: string[], onRandomize?: () => void) => {
        const isGroupLocked = blocks.every(blockId => lockedModules[blockId]);
        return (
            <div className="mist-labyrinth-surface-actions">
                <button
                    type="button"
                    onClick={() => onRandomize?.()}
                    aria-label={lang === 'EN' ? "Randomize group" : "随机本组"}
                >
                    <Shuffle size={11} />
                </button>
                <button
                    type="button"
                    className={isGroupLocked ? 'is-locked' : ''}
                    onClick={() => {
                        blocks.forEach(blockId => {
                            if (!!lockedModules[blockId] === isGroupLocked) onToggleLock(blockId);
                        });
                    }}
                    aria-label={isGroupLocked
                        ? (lang === 'EN' ? "Unlock group" : "解锁本组")
                        : (lang === 'EN' ? "Lock group" : "锁定本组")}
                >
                    {isGroupLocked ? <Lock size={11} /> : <Unlock size={11} />}
                </button>
                <button
                    type="button"
                    onClick={() => blocks.forEach(clearBlock)}
                    aria-label={lang === 'EN' ? "Clear group" : "清空本组"}
                >
                    <RotateCcw size={11} />
                </button>
            </div>
        );
    };

    const renderLabyrinthIdentitySlot = () => {
        const genderText = getPresetText(selectedGender, GENDER_PRESETS);
        const ageText = getAgeDisplay(selectedAge);
        const hasIdentity = Boolean(genderText || ageText);
        const isLocked = isGenderLocked && isAgeLocked;
        const displayText = hasIdentity
            ? (lang === 'EN'
                ? [ageText, genderText].filter(Boolean).join(' / ')
                : `${ageText}${genderText}`)
            : (lang === 'EN' ? "SUR7/8. Gender & Age" : "SUR7/8. 性别与年龄");

        return (
            <button
                type="button"
                className={`mist-labyrinth-identity-slot ${hasIdentity ? 'is-filled' : ''} ${isLocked ? 'is-locked' : ''}`}
                onClick={() => setIsLabyrinthIdentityModalOpen(true)}
                onMouseEnter={(e) => handleMouseEnter(e, {
                    ...buildControlDetails(
                        'skin_gender',
                        lang === 'EN' ? 'Gender and age-stage presets.' : '性别与年龄阶段预设。',
                        lang === 'EN' ? '[Config] Click to open gender and age panel.' : '【配置协议】点击进入性别与年龄面板。'
                    )
                }, lang === 'EN' ? 'SUR7/8. Gender & Age' : 'SUR7/8.性别与年龄')}
                onMouseLeave={handleMouseLeave}
            >
                <span className="mist-labyrinth-hover-token">{displayText}</span>
            </button>
        );
    };

    const renderLabyrinthModuleIdentityActions = (
        isLocked: boolean,
        onRandomize: () => void,
        onToggleCurrentLock: () => void,
        onClearCurrent: () => void,
        labels: { random: string; lock: string; unlock: string; edit: string; clear: string }
    ) => (
        <div className="mist-labyrinth-module-slot-actions">
            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onRandomize();
                }}
                disabled={isLocked}
                aria-label={labels.random}
            >
                <Dice5 size={10} />
            </button>
            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onToggleCurrentLock();
                }}
                className={isLocked ? 'is-locked' : ''}
                aria-label={isLocked ? labels.unlock : labels.lock}
            >
                {isLocked ? <Lock size={10} /> : <Unlock size={10} />}
            </button>
            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    setIsLabyrinthIdentityModalOpen(true);
                }}
                disabled={isLocked}
                aria-label={labels.edit}
            >
                <Edit2 size={10} />
            </button>
            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onClearCurrent();
                }}
                disabled={isLocked}
                aria-label={labels.clear}
            >
                <Trash2 size={10} />
            </button>
        </div>
    );

    const renderLabyrinthGenderSlot = () => {
        const genderText = getPresetText(selectedGender, GENDER_PRESETS);
        const hasGender = Boolean(genderText);
        const displayText = hasGender
            ? genderText
            : (lang === 'EN' ? "[SUR7. Subject Gender]" : "[SUR7. 主体性别]");
        const tokenClass = hasGender ? 'mist-prophecy-slot-active' : 'mist-prophecy-slot-empty';

        return (
            <div className={`mist-labyrinth-module-identity-control ${hasGender ? 'is-filled' : ''} ${isGenderLocked ? 'is-locked' : ''}`}>
                <button
                    type="button"
                    className={`mist-labyrinth-identity-slot mist-labyrinth-gender-slot ${hasGender ? 'is-filled' : ''} ${isGenderLocked ? 'is-locked' : ''}`}
                    onClick={() => setIsLabyrinthIdentityModalOpen(true)}
                    onMouseEnter={(e) => handleMouseEnter(e, {
                        ...buildControlDetails(
                            'skin_gender',
                            lang === 'EN' ? 'Subject gender presentation preset.' : '主体性别与表层呈现预设。',
                            lang === 'EN' ? '[Config] Click to open gender and age panel.' : '【配置协议】点击进入性别与年龄面板。'
                        )
                    }, lang === 'EN' ? 'SUR7. Subject Gender' : 'SUR7.主体性别')}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className={`mist-labyrinth-hover-token ${tokenClass}`}>{displayText}</span>
                </button>
                {renderLabyrinthModuleIdentityActions(
                    isGenderLocked,
                    handleLabyrinthRandomGender,
                    () => onToggleLock('skin_gender'),
                    () => updateLabyrinthIdentity(null, undefined),
                    {
                        random: lang === 'EN' ? 'Random gender' : '随机主体性别',
                        lock: lang === 'EN' ? 'Lock gender' : '锁定主体性别',
                        unlock: lang === 'EN' ? 'Unlock gender' : '解锁主体性别',
                        edit: lang === 'EN' ? 'Edit gender' : '编辑主体性别',
                        clear: lang === 'EN' ? 'Clear gender' : '清空主体性别'
                    }
                )}
            </div>
        );
    };

    const renderLabyrinthAgeSlot = () => {
        const ageText = getAgeDisplay(selectedAge);
        const hasAge = Boolean(ageText);
        const displayText = hasAge
            ? ageText
            : (lang === 'EN' ? "[SUR8. Subject Age]" : "[SUR8. 主体年龄]");
        const tokenClass = hasAge ? 'mist-prophecy-slot-active' : 'mist-prophecy-slot-empty';

        return (
            <div className={`mist-labyrinth-module-identity-control ${hasAge ? 'is-filled' : ''} ${isAgeLocked ? 'is-locked' : ''}`}>
                <button
                    type="button"
                    className={`mist-labyrinth-identity-slot mist-labyrinth-age-slot ${hasAge ? 'is-filled' : ''} ${isAgeLocked ? 'is-locked' : ''}`}
                    onClick={() => setIsLabyrinthIdentityModalOpen(true)}
                    onMouseEnter={(e) => handleMouseEnter(e, {
                        ...buildControlDetails(
                            'skin_age',
                            lang === 'EN' ? 'Subject age-stage preset.' : '主体年龄阶段预设。',
                            lang === 'EN' ? '[Config] Click to open gender and age panel.' : '【配置协议】点击进入性别与年龄面板。'
                        )
                    }, lang === 'EN' ? 'SUR8. Subject Age' : 'SUR8.主体年龄')}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className={`mist-labyrinth-hover-token ${tokenClass}`}>{displayText}</span>
                </button>
                {renderLabyrinthModuleIdentityActions(
                    isAgeLocked,
                    handleLabyrinthRandomAge,
                    () => onToggleLock('skin_age'),
                    () => updateLabyrinthIdentity(undefined, null),
                    {
                        random: lang === 'EN' ? 'Random age' : '随机主体年龄',
                        lock: lang === 'EN' ? 'Lock age' : '锁定主体年龄',
                        unlock: lang === 'EN' ? 'Unlock age' : '解锁主体年龄',
                        edit: lang === 'EN' ? 'Edit age' : '编辑主体年龄',
                        clear: lang === 'EN' ? 'Clear age' : '清空主体年龄'
                    }
                )}
            </div>
        );
    };

    const renderLabyrinthTimeLocationSlot = () => {
        const hasTimeOrLocation = selectedYear !== null || selectedCountry !== '';
        const displayText = selectedYear !== null
            ? (lang === 'EN'
                ? `${formatYear(selectedYear)}${selectedCountry ? ` ${selectedCountry}` : ''}`
                : `${formatYear(selectedYear, true)}${selectedCountry}`)
            : (selectedCountry
                ? `${selectedCountry} (AUTO)`
                : (lang === 'EN' ? "[SUR3. Spacetime]" : "[SUR3. 时空坐标]"));
        const isLocked = isCountryLocked && isYearLocked;
        const tokenClass = hasTimeOrLocation ? 'mist-prophecy-slot-active' : 'mist-prophecy-slot-empty';

        return (
            <button
                type="button"
                className={`mist-labyrinth-identity-slot mist-labyrinth-time-slot ${hasTimeOrLocation ? 'is-filled' : ''} ${isLocked ? 'is-locked' : ''}`}
                onClick={() => setIsLabyrinthTimeModalOpen(true)}
                onMouseEnter={(e) => handleMouseEnter(e, {
                    ...buildControlDetails(
                        'skin_era',
                        lang === 'EN' ? 'Exact year and country coordinates for the surface narrative.' : '表层叙事的精确年份与国家坐标。',
                        lang === 'EN' ? '[Config] Click to open spacetime coordinate panel.' : '【配置协议】点击进入时空坐标面板。'
                    ),
                    count: COUNTRY_PRESETS.length
                }, lang === 'EN' ? 'SUR3. Spacetime Coordinates' : 'SUR3.时空坐标系')}
                onMouseLeave={handleMouseLeave}
            >
                <span className={`mist-labyrinth-hover-token ${tokenClass}`}>{displayText}</span>
            </button>
        );
    };

    const renderLabyrinthInlineControlSlot = (
        displayText: string,
        isFilled: boolean,
        isLocked: boolean,
        onOpen: () => void,
        onRandomize: () => void,
        onToggleLock: () => void,
        onClear: () => void,
        details: any,
        header: string,
        count?: number
    ) => (
        <span className="mist-labyrinth-inline-control-slot inline-flex flex-wrap items-baseline gap-x-1 mx-1 relative">
            <span className="group/tag relative inline-flex flex-col items-center align-top">
                <span
                    onClick={onOpen}
                    onMouseEnter={(e) => handleMouseEnter(e, details, header, count)}
                    onMouseLeave={handleMouseLeave}
                    className={`mist-labyrinth-hover-token cursor-pointer font-serif transition-all duration-300 hover:z-50 inline-block ${isLocked
                        ? 'border border-gold-primary text-gold-primary bg-amber-900/20 px-2 rounded font-bold text-lg md:text-xl tracking-tight'
                        : (isFilled
                            ? 'font-bold text-white border-b-2 border-gold-primary hover:bg-white/10 px-0.5 rounded-sm text-lg md:text-xl tracking-tight'
                            : 'font-medium border-b border-dashed border-zinc-800 text-zinc-500 hover:text-white hover:bg-white/10 hover:border-zinc-500 text-base')
                        }`}
                >
                    {isFilled ? displayText : (lang === 'EN' ? `[${displayText}]` : `【${displayText}】`)}
                </span>
                <div className="flex items-center gap-1 mt-1 z-10 bg-black/80 rounded p-1 border border-zinc-800 shadow-md opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300">
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onRandomize(); }}
                        disabled={isLocked}
                        className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                    >
                        <Dice5 size={10} />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onToggleLock(); }}
                        className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white rounded transition-colors ${isLocked ? 'border-gold-primary text-gold-primary bg-amber-900/20' : ''}`}
                    >
                        {isLocked ? <Lock size={10} /> : <Unlock size={10} />}
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onOpen(); }}
                        disabled={isLocked}
                        className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                    >
                        <Edit2 size={10} />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onClear(); }}
                        disabled={isLocked}
                        className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400 rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                    >
                        <Trash2 size={10} />
                    </button>
                </div>
            </span>
        </span>
    );

    const renderLabyrinthSummaryTimeSlot = () => {
        const hasTimeOrLocation = selectedYear !== null || selectedCountry !== '';
        const displayText = selectedYear !== null
            ? (lang === 'EN'
                ? `${formatYear(selectedYear)}${selectedCountry ? ` ${selectedCountry}` : ''}`
                : `${formatYear(selectedYear, true)}${selectedCountry}`)
            : (selectedCountry
                ? `${selectedCountry} (AUTO)`
                : (lang === 'EN' ? "Spacetime Coordinates" : "时空坐标"));

        return renderLabyrinthInlineControlSlot(
            displayText,
            hasTimeOrLocation,
            isCountryLocked && isYearLocked,
            () => setIsLabyrinthTimeModalOpen(true),
            handleLabyrinthRandomTimeLocation,
            handleLabyrinthToggleTimeLocationLock,
            handleLabyrinthResetTimeLocation,
            {
                ...buildControlDetails(
                    'skin_era',
                    lang === 'EN' ? 'Exact year and country coordinates for the surface narrative.' : '表层叙事的精确年份与国家坐标。',
                    lang === 'EN' ? '[Config] Click to open spacetime coordinate panel.' : '【配置协议】点击进入时空坐标面板。'
                )
            },
            lang === 'EN' ? 'SUR3. Spacetime Coordinates' : 'SUR3.时空坐标系',
            COUNTRY_PRESETS.length
        );
    };

    const renderLabyrinthSummaryIdentitySlot = () => {
        const genderText = getPresetText(selectedGender, GENDER_PRESETS);
        const ageText = getAgeDisplay(selectedAge);
        const hasIdentity = Boolean(genderText || ageText);
        const displayText = hasIdentity
            ? (lang === 'EN'
                ? [ageText, genderText].filter(Boolean).join(' ')
                : `${ageText}${genderText}`)
            : (lang === 'EN' ? 'Gender & Age' : '年龄性别');

        return renderLabyrinthInlineControlSlot(
            displayText,
            hasIdentity,
            isGenderLocked && isAgeLocked,
            () => setIsLabyrinthIdentityModalOpen(true),
            handleLabyrinthRandomIdentity,
            handleLabyrinthToggleIdentityLock,
            handleLabyrinthResetIdentity,
            {
                ...buildControlDetails(
                    'skin_gender',
                    lang === 'EN' ? 'Gender and age-stage presets.' : '性别与年龄阶段预设。',
                    lang === 'EN' ? '[Config] Click to open gender and age panel.' : '【配置协议】点击进入性别与年龄面板。'
                )
            },
            lang === 'EN' ? 'SUR7/8. Gender & Age' : 'SUR7/8.性别与年龄'
        );
    };

    const renderLabyrinthStructureSentence = () => (
        <div className="mist-labyrinth-surface-sentence mist-labyrinth-structure-sentence">
            <div className="mist-labyrinth-structure-sentence-row">
                <span>{lang === 'EN' ? "Genre: " : "类型："}</span>
                {renderLabyrinthSentenceSlot("skin_genre", "叙事动力", "Genre Drive")}
            </div>
            <div className="mist-labyrinth-structure-sentence-row">
                <span>{lang === 'EN' ? "Structure: " : "结构："}</span>
                {renderLabyrinthSentenceSlot("skin_structure", "叙事结构", "Structure")}
            </div>
            <div className="mist-labyrinth-structure-sentence-row">
                <span>{lang === 'EN' ? "Volume: " : "体量："}</span>
                {renderLabyrinthSentenceSlot("skin_volume", "故事体量", "Volume")}
            </div>
        </div>
    );

    const hasBlockValue = (ids: string[]) => ids.some(id => (fieldState[id] || []).length > 0);

    const renderLabyrinthSummarySentence = () => {
        const hasGenre = hasBlockValue(['skin_genre']);
        const hasStructure = hasBlockValue(['skin_structure']);
        const hasVolume = hasBlockValue(['skin_volume']);
        const hasFrame = hasGenre || hasStructure || hasVolume;
        const hasTime = selectedYear !== null || selectedCountry !== '';
        const hasEra = hasBlockValue(['skin_era']);
        const hasSociety = hasBlockValue(['skin_society']);
        const hasIdentity = selectedGender !== '' || selectedAge !== '';
        const hasProfession = hasBlockValue(['skin_profession']);
        const hasFracture = hasBlockValue(['sur10x']);
        const hasBelief = hasBlockValue(['skin_ideology']);
        const hasObject = hasBlockValue(['skin_everything']);
        const hasSpace = hasBlockValue(['skin_location']);
        const hasEnding = hasBlockValue(['skin_ending']);
        const hasAnyFragment = hasFrame || hasTime || hasEra || hasSociety || hasIdentity || hasProfession || hasFracture || hasBelief || hasObject || hasSpace || hasEnding;
        const visibleFragments = [
            (hasTime || hasEra) ? 'A' : null,
            hasSociety ? 'B' : null,
            (hasIdentity || hasProfession) ? 'C' : null,
            (hasFracture || hasBelief) ? 'D' : null,
            hasObject ? 'E' : null,
            hasSpace ? 'F' : null,
            hasEnding ? 'G' : null
        ].filter(Boolean) as string[];
        const showExpanded = labyrinthSummaryExpanded;
        const lastVisibleFragment = showExpanded ? 'G' : visibleFragments[visibleFragments.length - 1];

        return (
            <div className={`mist-labyrinth-surface-sentence mist-labyrinth-summary-sentence ${showExpanded ? 'is-expanded' : 'is-collapsed'}`}>
                {(showExpanded || hasFrame) && (
                    <div className="mist-labyrinth-summary-line">
                        <span>{lang === 'EN' ? "A story framed by " : "一个以"}</span>
                        {(showExpanded || hasGenre) && renderLabyrinthSkinSlot("skin_genre", "叙事动力", "Genre Drive")}
                        {(showExpanded || hasGenre) && (showExpanded || hasStructure || hasVolume) && <span>{lang === 'EN' ? ", " : "、"}</span>}
                        {(showExpanded || hasStructure) && renderLabyrinthSkinSlot("skin_structure", "叙事结构", "Structure")}
                        {(showExpanded || hasStructure) && (showExpanded || hasVolume) && <span>{lang === 'EN' ? " and " : "与"}</span>}
                        {(showExpanded || hasVolume) && renderLabyrinthSkinSlot("skin_volume", "故事体量", "Volume")}
                        <span>{lang === 'EN' ? ", " : "为骨架，"}</span>
                    </div>
                )}

                {((showExpanded || hasTime || hasEra) || (showExpanded || hasSociety)) && (
                    <div className="mist-labyrinth-summary-line">
                        {(showExpanded || hasTime || hasEra) && (
                            <>
                                <span>{lang === 'EN' ? "In " : "在"}</span>
                                {(showExpanded || hasTime) && renderLabyrinthSummaryTimeSlot()}
                                {(showExpanded || hasTime) && (showExpanded || hasEra) && <span>{lang === 'EN' ? " of " : "的"}</span>}
                                {(showExpanded || hasEra) && renderLabyrinthSkinSlot("skin_era", "背景场域", "Background")}
                                {(showExpanded || hasEra) && lastVisibleFragment !== 'A' && <span>{lang === 'EN' ? " world, " : "世界中，"}</span>}
                                {(showExpanded || hasEra) && lastVisibleFragment === 'A' && <span>{lang === 'EN' ? " world" : "世界中"}</span>}
                                {!(showExpanded || hasEra) && lastVisibleFragment !== 'A' && <span>，</span>}
                            </>
                        )}
                        {(showExpanded || hasSociety) && (
                            <>
                                <span>{lang === 'EN' ? "society under " : "运行于"}</span>
                                {renderLabyrinthSkinSlot("skin_society", "社会形态", "Social Order")}
                                <span>{lastVisibleFragment === 'B' ? (lang === 'EN' ? " " : "社会体系之下") : (lang === 'EN' ? ", " : "社会体系之下，")}</span>
                            </>
                        )}
                    </div>
                )}

                {((showExpanded || hasIdentity || hasProfession) || (showExpanded || hasFracture || hasBelief)) && (
                    <div className="mist-labyrinth-summary-line">
                        {(showExpanded || hasIdentity || hasProfession) && (
                            <>
                                <span>{lang === 'EN' ? "The protagonist is " : "主角是"}</span>
                                {(showExpanded || hasIdentity) && renderLabyrinthSummaryIdentitySlot()}
                                {(showExpanded || hasProfession) && renderLabyrinthSkinSlot("skin_profession", "职业身份", "Role Preset")}
                                {lastVisibleFragment !== 'C' && <span>，</span>}
                            </>
                        )}
                        {(showExpanded || hasFracture || hasBelief) && (
                            <>
                                <span>{lang === 'EN' ? "with " : "带着"}</span>
                                {(showExpanded || hasFracture) && renderLabyrinthSkinSlot("sur10x", "信念裂度", "Fracture")}
                                {(showExpanded || hasFracture) && (showExpanded || hasBelief) && <span>{lang === 'EN' ? " towards " : "的"}</span>}
                                {(showExpanded || hasBelief) && renderLabyrinthSkinSlot("skin_ideology", "信念预设", "Belief Preset")}
                                <span>{lastVisibleFragment === 'D' ? (lang === 'EN' ? " language" : "语言") : (lang === 'EN' ? " language, " : "语言，")}</span>
                            </>
                        )}
                    </div>
                )}

                {((showExpanded || hasObject) || (showExpanded || hasSpace) || (showExpanded || hasEnding) || hasAnyFragment) && (
                    <div className="mist-labyrinth-summary-line">
                        {(showExpanded || hasObject) && (
                            <>
                        <span>{lang === 'EN' ? "around " : "围绕"}</span>
                                {renderLabyrinthSkinSlot("skin_everything", "对象预设", "Object Anchor")}
                                <span>{lastVisibleFragment === 'E' ? (lang === 'EN' ? "" : "展开") : (lang === 'EN' ? ", " : "展开，")}</span>
                            </>
                        )}
                        {(showExpanded || hasSpace) && (
                            <>
                        <span>{lang === 'EN' ? "set in " : "事件发生于"}</span>
                                {renderLabyrinthSkinSlot("skin_location", "空间容器", "Space Container")}
                                <span>{lastVisibleFragment === 'F' ? "" : (lang === 'EN' ? ", " : "，")}</span>
                            </>
                        )}
                        {(showExpanded || hasEnding) && (
                            <>
                        <span>{lang === 'EN' ? "culminating in " : "最终走向"}</span>
                                {renderLabyrinthSkinSlot("skin_ending", "显性收场", "Visible Ending")}
                            </>
                        )}
                        {(showExpanded || hasAnyFragment) && <span>{lang === 'EN' ? " story." : "的故事。"}</span>}
                    </div>
                )}

                {!showExpanded && !hasAnyFragment && (
                    <span className="mist-labyrinth-surface-sentence-empty">
                        {lang === 'EN' ? 'Click + to expand the full story sentence.' : '点击 + 展开完整故事句式。'}
                    </span>
                )}
            </div>
        );
    };

    const renderLabyrinthTimeModal = () => {
        const currentYear = selectedYear ?? 2026;
        return (
            <div className="mist-labyrinth-identity-modal">
                <div className="mist-labyrinth-identity-panel mist-labyrinth-time-panel">
                    <button
                        type="button"
                        className="mist-labyrinth-identity-close"
                        onClick={() => setIsLabyrinthTimeModalOpen(false)}
                        aria-label={lang === 'EN' ? "Close spacetime panel" : "关闭时空面板"}
                    >
                        <X size={18} />
                    </button>
                    <div className="mist-labyrinth-identity-head">
                        <Ghost size={19} />
                        <h3>{lang === 'EN' ? "SUR3. Spacetime Coordinates" : "SUR3.时空坐标系"}</h3>
                    </div>
                    <div className="mist-labyrinth-identity-body">
                        <section className="mist-labyrinth-identity-section">
                            <div className="mist-labyrinth-identity-section-head">
                                <span>{lang === 'EN' ? "Country / Region" : "国家与地区"}</span>
                                <div className="mist-labyrinth-identity-tools">
                                    <button type="button" onClick={handleLabyrinthRandomCountry} disabled={isCountryLocked}><Dice5 size={12} /></button>
                                    <button type="button" onClick={() => onToggleLock('skin_country_exact')} className={isCountryLocked ? 'is-locked' : ''}>{isCountryLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(null, undefined)} disabled={isCountryLocked}><Trash2 size={12} /></button>
                                </div>
                            </div>
                            <div className="mist-labyrinth-country-field">
                                <input
                                    value={selectedCountry}
                                    disabled={isCountryLocked}
                                    placeholder={lang === 'EN' ? "Custom / select" : "自定义 / 选择"}
                                    onChange={(event) => updateLabyrinthTimeLocation(event.target.value, undefined)}
                                />
                            </div>
                            <div className="mist-labyrinth-country-list">
                                {COUNTRY_PRESETS.map(country => {
                                    const label = lang === 'EN' ? country.en : country.cn;
                                    const isActive = selectedCountry === country.cn || selectedCountry === country.en;
                                    return (
                                        <button
                                            type="button"
                                            key={country.cn}
                                            disabled={isCountryLocked}
                                            className={isActive ? 'is-active' : ''}
                                            onClick={() => updateLabyrinthTimeLocation(label, undefined)}
                                        >
                                            {label}
                                        </button>
                                    );
                                })}
                            </div>
                        </section>

                        <section className="mist-labyrinth-identity-section">
                            <div className="mist-labyrinth-identity-section-head">
                                <span>{lang === 'EN' ? "Timeline" : "时间轴"}</span>
                                <div className="mist-labyrinth-identity-tools">
                                    <button type="button" onClick={handleLabyrinthRandomYear} disabled={isYearLocked}><Dice5 size={12} /></button>
                                    <button type="button" onClick={() => onToggleLock('skin_year_exact')} className={isYearLocked ? 'is-locked' : ''}>{isYearLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, null)} disabled={isYearLocked}><Trash2 size={12} /></button>
                                </div>
                            </div>
                            <div className="mist-labyrinth-year-readout">{selectedYear === null ? (lang === 'EN' ? "AUTO" : "自动") : formatYear(selectedYear, true)}</div>
                            <input
                                type="range"
                                min="-2000"
                                max="2050"
                                step="1"
                                value={currentYear}
                                disabled={isYearLocked}
                                onChange={(event) => updateLabyrinthTimeLocation(undefined, Number(event.target.value))}
                                className="mist-labyrinth-year-slider"
                            />
                            <div className="mist-labyrinth-year-tools">
                                <span>-2000</span>
                                <div>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, currentYear - 10)}>-10</button>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, currentYear - 1)}>-1</button>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, 2026)}>Now</button>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, currentYear + 1)}>+1</button>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, currentYear + 10)}>+10</button>
                                </div>
                                <span>2050</span>
                            </div>
                        </section>
                    </div>
                    <div className="mist-labyrinth-identity-foot">
                        <div className="mist-labyrinth-identity-foot-tools">
                            <button type="button" onClick={handleLabyrinthRandomTimeLocation}><Dice5 size={14} /><span>{lang === 'EN' ? "Random" : "全随机"}</span></button>
                            <button type="button" onClick={handleLabyrinthToggleTimeLocationLock} className={isCountryLocked && isYearLocked ? 'is-locked' : ''}>{isCountryLocked && isYearLocked ? <Lock size={14} /> : <Unlock size={14} />}</button>
                            <button type="button" onClick={handleLabyrinthResetTimeLocation}><Trash2 size={14} /></button>
                        </div>
                        <button
                            type="button"
                            className="mist-labyrinth-identity-confirm"
                            onClick={() => setIsLabyrinthTimeModalOpen(false)}
                        >
                            <Check size={14} />
                            {lang === 'EN' ? "CONFIRM" : "确认设定"}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const renderLabyrinthIdentityModal = () => {
        const isGenderCustom = Boolean(selectedGender) && !GENDER_PRESETS.some(item => item.cn === selectedGender || item.en === selectedGender);
        const isAgeCustom = Boolean(selectedAge) && !AGE_PRESETS.some(item => item.cn === selectedAge || item.en === selectedAge);

        return (
            <div className="mist-labyrinth-identity-modal">
                <div className="mist-labyrinth-identity-panel">
                    <button
                        type="button"
                        className="mist-labyrinth-identity-close"
                        onClick={() => setIsLabyrinthIdentityModalOpen(false)}
                        aria-label={lang === 'EN' ? "Close casting panel" : "关闭选角面板"}
                    >
                        <X size={18} />
                    </button>

                    <div className="mist-labyrinth-identity-head">
                        <User size={19} />
                        <h3>{lang === 'EN' ? "SUR7/8. Gender & Age" : "SUR7/8.性别与年龄"}</h3>
                    </div>

                    <div className="mist-labyrinth-identity-body">
                        <section className="mist-labyrinth-identity-section">
                            <div className="mist-labyrinth-identity-section-head">
                                <span>{lang === 'EN' ? "Gender" : "性别"}</span>
                                <div className="mist-labyrinth-identity-tools">
                                    <button type="button" onClick={handleLabyrinthRandomGender} disabled={isGenderLocked}><Dice5 size={12} /></button>
                                    <button type="button" onClick={() => onToggleLock('skin_gender')} className={isGenderLocked ? 'is-locked' : ''}>{isGenderLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
                                    <button type="button" onClick={() => updateLabyrinthIdentity(null, undefined)} disabled={isGenderLocked}><Trash2 size={12} /></button>
                                </div>
                            </div>
                            <div className="mist-labyrinth-identity-gender-grid">
                                <label className={`mist-labyrinth-identity-option mist-labyrinth-identity-custom ${isGenderCustom ? 'is-active' : ''} ${isGenderLocked ? 'is-disabled' : ''}`}>
                                    <input
                                        value={isGenderCustom ? selectedGender : customGenderInput}
                                        disabled={isGenderLocked}
                                        placeholder={lang === 'EN' ? "Custom" : "自定义"}
                                        onChange={(event) => {
                                            setCustomGenderInput(event.target.value);
                                            updateLabyrinthIdentity(event.target.value, undefined);
                                        }}
                                    />
                                </label>
                                {GENDER_PRESETS.map(item => {
                                    const label = lang === 'EN' ? item.en : item.cn;
                                    const isActive = selectedGender === item.cn || selectedGender === item.en;
                                    return (
                                        <button
                                            type="button"
                                            key={item.id}
                                            disabled={isGenderLocked}
                                            className={`mist-labyrinth-identity-option ${isActive ? 'is-active' : ''}`}
                                            onClick={() => {
                                                setCustomGenderInput('');
                                                updateLabyrinthIdentity(isActive ? null : label, undefined);
                                            }}
                                        >
                                            <span>{label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </section>

                        <section className="mist-labyrinth-identity-section">
                            <div className="mist-labyrinth-identity-section-head">
                                <span>{lang === 'EN' ? "Age" : "年龄"}</span>
                                <div className="mist-labyrinth-identity-tools">
                                    <button type="button" onClick={handleLabyrinthRandomAge} disabled={isAgeLocked}><Dice5 size={12} /></button>
                                    <button type="button" onClick={() => onToggleLock('skin_age')} className={isAgeLocked ? 'is-locked' : ''}>{isAgeLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
                                    <button type="button" onClick={() => updateLabyrinthIdentity(undefined, null)} disabled={isAgeLocked}><Trash2 size={12} /></button>
                                </div>
                            </div>
                            <div className="mist-labyrinth-identity-age-grid">
                                <label className={`mist-labyrinth-identity-option mist-labyrinth-identity-custom ${isAgeCustom ? 'is-active' : ''} ${isAgeLocked ? 'is-disabled' : ''}`}>
                                    <input
                                        value={isAgeCustom ? selectedAge : customAgeInput}
                                        disabled={isAgeLocked}
                                        placeholder={lang === 'EN' ? "Custom" : "自定义"}
                                        onChange={(event) => {
                                            setCustomAgeInput(event.target.value);
                                            updateLabyrinthIdentity(undefined, event.target.value);
                                        }}
                                    />
                                </label>
                                {AGE_PRESETS.map(item => {
                                    const label = lang === 'EN' ? item.en : item.cn;
                                    const isActive = selectedAge === item.cn || selectedAge === item.en;
                                    return (
                                        <button
                                            type="button"
                                            key={item.id}
                                            disabled={isAgeLocked}
                                            className={`mist-labyrinth-identity-option ${isActive ? 'is-active' : ''}`}
                                            onClick={() => {
                                                setCustomAgeInput('');
                                                updateLabyrinthIdentity(undefined, isActive ? null : label);
                                            }}
                                        >
                                            <span>{label}</span>
                                            <small>{item.range}</small>
                                        </button>
                                    );
                                })}
                            </div>
                        </section>
                    </div>

                    <div className="mist-labyrinth-identity-foot">
                        <div className="mist-labyrinth-identity-foot-tools">
                            <button type="button" onClick={handleLabyrinthRandomIdentity}><Dice5 size={14} /><span>{lang === 'EN' ? "Random" : "全随机"}</span></button>
                            <button type="button" onClick={handleLabyrinthToggleIdentityLock} className={isGenderLocked && isAgeLocked ? 'is-locked' : ''}>{isGenderLocked && isAgeLocked ? <Lock size={14} /> : <Unlock size={14} />}</button>
                            <button type="button" onClick={handleLabyrinthResetIdentity}><Trash2 size={14} /></button>
                        </div>
                        <button
                            type="button"
                            className="mist-labyrinth-identity-confirm"
                            onClick={() => setIsLabyrinthIdentityModalOpen(false)}
                        >
                            <Check size={14} />
                            {lang === 'EN' ? "CONFIRM" : "确认设定"}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const hasLabyrinthVisionCandidates = Object.values(visionCandidateState).some(tags => Array.isArray(tags) && tags.length > 0);

    const handleLabyrinthImageFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.currentTarget;
        const file = input.files?.[0];
        if (!file) return;

        setIsLabyrinthImageUploading(true);
        try {
            const url = await supabaseDatabase.uploadImage(file);
            if (url) {
                onVisionImageChange?.(url);
                onVisionAnalysisChange?.('');
                onClearVisionCandidateState?.();
            }
        } catch (err) {
            console.error("Upload failed:", err);
            const message = err instanceof Error ? err.message : String(err);
            alert(lang === 'EN' ? `Image upload failed: ${message}` : `图片上传失败：${message}`);
        } finally {
            setIsLabyrinthImageUploading(false);
            input.value = "";
        }
    };

    const handleLabyrinthAnalyzeImage = async () => {
        if (!onAnalyzeImage) return;
        await onAnalyzeImage();
        setIsLabyrinthVisionResultOpen(true);
    };

    const handleLabyrinthVisionAutoFill = async () => {
        if (!onVisionAutoFill) return;
        await onVisionAutoFill();
    };

    const getLabyrinthVisionTextContext = () => {
        const parts: string[] = [];
        if (customTextSeed.trim()) parts.push(`【全局自定义需求 / 文本种子】\n${customTextSeed.trim()}`);
        if (visionImageNote.trim()) parts.push(`【图片解析提示】\n${visionImageNote.trim()}`);
        return parts.join('\n\n');
    };

    const getLabyrinthImageAnalysisPromptPayload = () => buildNarrativeDiagnosisPrompt(getLabyrinthVisionTextContext(), Boolean(visionImage));

    const getLabyrinthVisionMappingPromptPayload = () => buildAutoFillPrompt(driverType, getLabyrinthVisionTextContext(), Boolean(visionImage), visionAnalysis);

    const renderLabyrinthVisionResultModal = () => createPortal(
        <div className="mist-labyrinth-vision-result-modal" role="dialog" aria-modal="true" aria-label={lang === 'EN' ? "Image analysis result" : "图像解析返回"}>
            <div className="mist-labyrinth-vision-result-panel">
                <button
                    type="button"
                    className="mist-labyrinth-vision-result-close"
                    onClick={() => setIsLabyrinthVisionResultOpen(false)}
                    aria-label={lang === 'EN' ? "Close" : "关闭"}
                >
                    <X size={18} />
                </button>
                <div className="mist-labyrinth-vision-result-head">
                    <span>{lang === 'EN' ? "IMAGE DIAGNOSIS" : "图像解析返回"}</span>
                    <h3>{lang === 'EN' ? "Full Returned Content" : "完整返回内容"}</h3>
                </div>
                <div className="mist-labyrinth-vision-result-body">
                    {visionAnalysis?.trim()
                        ? visionAnalysis
                        : (isAnalyzingImage
                            ? (lang === 'EN' ? "Decoding image..." : "正在解析图像...")
                            : (lang === 'EN' ? "No returned content yet." : "暂无返回内容。"))}
                </div>
                <div className="mist-labyrinth-vision-result-foot">
                    <button
                        type="button"
                        className="mist-labyrinth-vision-result-ghost"
                        disabled={!visionAnalysis?.trim()}
                        onClick={() => onVisionAnalysisChange?.('')}
                    >
                        <Trash2 size={13} />
                        {lang === 'EN' ? "Clear" : "清空返回"}
                    </button>
                    <button
                        type="button"
                        className="mist-labyrinth-vision-result-primary"
                        disabled={isVisionAutoFilling || (!visionImage && !visionAnalysis?.trim() && !visionImageNote.trim())}
                        onClick={handleLabyrinthVisionAutoFill}
                    >
                        {isVisionAutoFilling ? <Loader2 size={14} className="animate-spin" /> : <ArrowRight size={14} />}
                        {lang === 'EN' ? "Map Back To Engine" : "反推 / 映射引擎"}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );

    const renderLabyrinthImageImplant = () => (
        <article className="mist-labyrinth-surface-card mist-labyrinth-implant-card">
            <div className="mist-labyrinth-surface-card-header mist-labyrinth-implant-header">
                <h4>{lang === 'EN' ? "Implant Symptoms" : "植入症候"}</h4>
                <div className="mist-labyrinth-surface-header-tools">
                    <div className="mist-labyrinth-implant-tabs" role="tablist" aria-label={lang === 'EN' ? "Implant pages" : "植入症候分页"}>
                        <button
                            type="button"
                            className={labyrinthImplantPage === 'image' ? 'is-active' : ''}
                            onClick={() => setLabyrinthImplantPage('image')}
                        >
                            01
                        </button>
                        <button
                            type="button"
                            className={labyrinthImplantPage === 'mapping' ? 'is-active' : ''}
                            onClick={() => setLabyrinthImplantPage('mapping')}
                        >
                            02
                        </button>
                    </div>
                    <button
                        type="button"
                        className={`mist-labyrinth-implant-result-button ${visionAnalysis?.trim() ? 'is-ready' : ''}`}
                        onClick={() => setIsLabyrinthVisionResultOpen(true)}
                    >
                        <Eye size={12} />
                        <span>{lang === 'EN' ? "RESULT" : "查看返回"}</span>
                    </button>
                </div>
            </div>

            <div className="mist-labyrinth-image-implant">
                {labyrinthImplantPage === 'image' ? (
                    <div className="mist-labyrinth-image-implant-page">
                        <div className={`mist-labyrinth-image-implant-frame ${visionImage ? 'has-image' : ''}`}>
                            <input
                                ref={labyrinthImageInputRef}
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleLabyrinthImageFileChange}
                            />
                            {visionImage ? (
                                <>
                                    <img src={visionImage} alt={lang === 'EN' ? "Reference image" : "参考图像"} />
                                    <div className="mist-labyrinth-image-actions">
                                        <AdminXRayButton
                                            isAdmin={isAdmin}
                                            lang={lang === 'EN' ? 'EN' : 'CN'}
                                            title={lang === 'EN' ? 'X-Ray Image Analysis Prompt' : 'X-Ray 图像解析指令'}
                                            getPayload={getLabyrinthImageAnalysisPromptPayload}
                                            disabled={!visionImage}
                                            buttonClassName="mist-labyrinth-image-action-button"
                                            iconSize={13}
                                        />
                                        <button
                                            type="button"
                                            className="mist-labyrinth-image-action-button"
                                            disabled={!onAnalyzeImage || isAnalyzingImage || !visionImage}
                                            onClick={handleLabyrinthAnalyzeImage}
                                            title={lang === 'EN' ? "Analyze image" : "解析图像"}
                                        >
                                            {isAnalyzingImage ? <Loader2 size={13} className="animate-spin" /> : <ScanEye size={13} />}
                                            <span>{lang === 'EN' ? "Analyze" : "解析"}</span>
                                        </button>
                                        <button className="mist-labyrinth-image-action-button" type="button" onClick={() => labyrinthImageInputRef.current?.click()}>
                                            <Upload size={14} />
                                            <span>{lang === 'EN' ? "Replace" : "替换"}</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="mist-labyrinth-image-action-button"
                                            onClick={() => {
                                                onVisionImageChange?.(null);
                                                onVisionAnalysisChange?.('');
                                                onClearVisionCandidateState?.();
                                            }}
                                        >
                                            <Trash2 size={14} />
                                            <span>{lang === 'EN' ? "Remove" : "移除"}</span>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        className="mist-labyrinth-image-implant-upload"
                                        onClick={() => labyrinthImageInputRef.current?.click()}
                                    >
                                        {isLabyrinthImageUploading ? <Loader2 size={18} className="animate-spin" /> : <ImageIcon size={18} />}
                                        <span>{isLabyrinthImageUploading ? (lang === 'EN' ? "UPLOADING" : "上传中") : (lang === 'EN' ? "INSERT IMAGE" : "插入图片")}</span>
                                        <b>{lang === 'EN' ? "Visual seed slot" : "图像种子槽位"}</b>
                                    </button>
                                    <div className="mist-labyrinth-image-actions">
                                        <AdminXRayButton
                                            isAdmin={isAdmin}
                                            lang={lang === 'EN' ? 'EN' : 'CN'}
                                            title={lang === 'EN' ? 'X-Ray Image Analysis Prompt' : 'X-Ray 图像解析指令'}
                                            getPayload={getLabyrinthImageAnalysisPromptPayload}
                                            disabled={!visionImage}
                                            buttonClassName="mist-labyrinth-image-action-button"
                                            iconSize={13}
                                        />
                                        <button
                                            type="button"
                                            className="mist-labyrinth-image-action-button"
                                            disabled={!onAnalyzeImage || isAnalyzingImage || !visionImage}
                                            onClick={handleLabyrinthAnalyzeImage}
                                            title={lang === 'EN' ? "Analyze image" : "解析图像"}
                                        >
                                            {isAnalyzingImage ? <Loader2 size={13} className="animate-spin" /> : <ScanEye size={13} />}
                                            <span>{lang === 'EN' ? "Analyze" : "解析"}</span>
                                        </button>
                                        <button className="mist-labyrinth-image-action-button" type="button" onClick={() => labyrinthImageInputRef.current?.click()}>
                                            <Upload size={14} />
                                            <span>{lang === 'EN' ? "Upload" : "上传"}</span>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        <label className="mist-labyrinth-image-note">
                            <span>
                                <FileText size={13} />
                                {lang === 'EN' ? "Image Analysis Prompt" : "图片解析提示"}
                            </span>
                            <textarea
                                value={visionImageNote}
                                onChange={(event) => {
                                    onVisionImageNoteChange?.(event.target.value);
                                    onClearVisionCandidateState?.();
                                }}
                                placeholder={lang === 'EN'
                                    ? "Tell the engine how to read this image: protagonist, atmosphere, object, conflict, ignored areas..."
                                    : "说明这张图应该如何被读取：主角、氛围、物件、冲突、需要忽略的部分……"}
                            />
                        </label>

                    </div>
                ) : (
                    <div className="mist-labyrinth-implant-mapping-page">
                        <div>
                            <span>{lang === 'EN' ? "PAGE 02" : "第二页"}</span>
                            <b>{lang === 'EN' ? "Reverse Mapping" : "反推映射"}</b>
                            <p>{lang === 'EN'
                                ? "After reading the returned content, map it back into engine parameters here."
                                : "查看图像解析返回后，再在这里决定是否反推到引擎参数。"}
                            </p>
                        </div>
                        <div className="mist-labyrinth-implant-mapping-actions">
                            <AdminXRayButton
                                isAdmin={isAdmin}
                                lang={lang === 'EN' ? 'EN' : 'CN'}
                                title={lang === 'EN' ? 'X-Ray Visual Mapping Prompt' : 'X-Ray 视觉映射指令'}
                                getPayload={getLabyrinthVisionMappingPromptPayload}
                                disabled={!visionImage && !visionAnalysis?.trim() && !visionImageNote.trim()}
                                buttonClassName="mist-labyrinth-image-action-button"
                                iconSize={13}
                            />
                            <button
                                type="button"
                                disabled={isVisionAutoFilling || (!visionImage && !visionAnalysis?.trim() && !visionImageNote.trim())}
                                onClick={handleLabyrinthVisionAutoFill}
                            >
                                {isVisionAutoFilling ? <Loader2 size={14} className="animate-spin" /> : <BrainCircuit size={14} />}
                                {lang === 'EN' ? "Run Mapping" : "执行反推"}
                            </button>
                        </div>
                        {hasLabyrinthVisionCandidates && (
                            <button
                                type="button"
                                onClick={() => onApplyVisionCandidateState?.(visionCandidateState)}
                            >
                                <Check size={14} />
                                {lang === 'EN' ? "Apply Returned Parameters" : "应用返回参数"}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </article>
    );

    const renderLabyrinthSurfaceDeck = () => (
        <div className="mist-labyrinth-surface-grid">
            <article className="mist-labyrinth-surface-card mist-labyrinth-creative-card">
                <div className="mist-labyrinth-surface-card-header">
                    <h4>{lang === 'EN' ? "Creative Inspiration" : "创意灵感"}</h4>
                </div>
                {renderLabyrinthSurfaceTextSeed()}
                {isLabyrinth && renderLabyrinthWorldLawModule()}
            </article>

            <article className="mist-labyrinth-surface-card mist-labyrinth-surface-summary-card">
                <div className="mist-labyrinth-surface-card-header">
                    <h4>{lang === 'EN' ? "Story Summary" : "故事摘要"}</h4>
                    <div className="mist-labyrinth-surface-header-tools">
                        {renderSurfaceModeToggle(labyrinthSummaryMode, setLabyrinthSummaryMode)}
                        <div className="mist-labyrinth-surface-actions">
                            <button
                                type="button"
                                className={(labyrinthSummaryMode === 'sentence' ? labyrinthSummaryExpanded : labyrinthSummaryModuleExpanded) ? 'is-locked' : ''}
                                onClick={() => {
                                    if (labyrinthSummaryMode === 'sentence') {
                                        setLabyrinthSummaryExpanded(!labyrinthSummaryExpanded);
                                    } else {
                                        setLabyrinthSummaryModuleExpanded(!labyrinthSummaryModuleExpanded);
                                    }
                                }}
                                aria-label={(labyrinthSummaryMode === 'sentence' ? labyrinthSummaryExpanded : labyrinthSummaryModuleExpanded)
                                    ? (lang === 'EN' ? "Collapse summary" : "折叠摘要")
                                    : (lang === 'EN' ? "Expand summary" : "展开摘要")}
                            >
                                {(labyrinthSummaryMode === 'sentence' ? labyrinthSummaryExpanded : labyrinthSummaryModuleExpanded) ? <X size={11} /> : <Plus size={11} />}
                            </button>
                        </div>
                        {renderSurfaceGroupActions(['skin_genre', 'skin_structure', 'skin_volume', 'skin_era', 'skin_society', 'skin_age', 'skin_gender', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending'], onRandomizeSummaryGroup)}
                    </div>
                </div>
                <div className="mist-labyrinth-surface-summary-body">
                    {labyrinthSummaryMode === 'module' ? (
                        <div className="mist-labyrinth-surface-blocks mist-labyrinth-surface-summary-slots">
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_genre'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Drive" : "叙事动力"}</span>
                                {renderSurfaceProphecySlot("skin_genre", "SUR1. 叙事动力", "SUR1. Drive")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_structure'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Structure" : "叙事结构"}</span>
                                {renderSurfaceProphecySlot("skin_structure", "SV1. 叙事结构", "SV1. Structure")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_volume'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Volume" : "故事体量"}</span>
                                {renderSurfaceProphecySlot("skin_volume", "SV2. 故事体量", "SV2. Volume")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_era'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Field" : "背景场域"}</span>
                                {renderSurfaceProphecySlot("skin_era", "SUR2. 背景场域", "SUR2. Field")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || selectedYear !== null || selectedCountry !== '') && <div className="mist-labyrinth-surface-block mist-labyrinth-surface-static-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Spacetime" : "时空坐标"}</span>
                                {renderLabyrinthTimeLocationSlot()}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_society'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Order" : "社会形态"}</span>
                                {renderSurfaceProphecySlot("skin_society", "SUR4. 社会形态", "SUR4. Order")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_everything'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Object" : "对象预设"}</span>
                                {renderSurfaceProphecySlot("skin_everything", "SUR5. 对象预设", "SUR5. Object")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_location'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Space" : "空间容器"}</span>
                                {renderSurfaceProphecySlot("skin_location", "SUR6. 空间容器", "SUR6. Space")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_gender'])) && <div className="mist-labyrinth-surface-block mist-labyrinth-surface-identity-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Gender" : "主体性别"}</span>
                                {renderLabyrinthGenderSlot()}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_age'])) && <div className="mist-labyrinth-surface-block mist-labyrinth-surface-identity-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Age" : "主体年龄"}</span>
                                {renderLabyrinthAgeSlot()}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_profession'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Role" : "职业身份"}</span>
                                {renderSurfaceProphecySlot("skin_profession", "SUR9. 职业身份", "SUR9. Role")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_ideology'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Belief" : "信念预设"}</span>
                                {renderSurfaceProphecySlot("skin_ideology", "SUR10. 信念预设", "SUR10. Belief")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['sur10x'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Fracture" : "信念裂度"}</span>
                                {renderSurfaceProphecySlot("sur10x", "SUR10X. 信念裂度", "SUR10X. Fracture")}
                            </div>}
                            {(labyrinthSummaryModuleExpanded || hasBlockValue(['skin_ending'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Ending" : "显性收场"}</span>
                                {renderSurfaceProphecySlot("skin_ending", "SUR-END. 显性收场", "SUR-END. Ending")}
                            </div>}
                        </div>
                    ) : renderLabyrinthSummarySentence()}
                </div>
            </article>

            {renderLabyrinthImageImplant()}
        </div>
    );

    const renderLabyrinthConsole = () => (
        <div className="mist-labyrinth-console">
            <div className="mist-labyrinth-page-film mist-labyrinth-page-film-left" aria-hidden="true" />
            <div className="mist-labyrinth-page-film mist-labyrinth-page-film-right" aria-hidden="true" />

            <section className="mist-labyrinth-hero" aria-label={lang === 'EN' ? "Labyrinth formula console" : "爱欲迷宫公式控制台"}>
                <div className="mist-labyrinth-film-window">
                    <div className="mist-labyrinth-screen">
                        {showRings && (
                            <div className="mist-labyrinth-rings" aria-hidden="true">
                                <BorromeanRings
                                    fieldState={fieldState}
                                    lang={lang}
                                    driverType={driverType}
                                    opacity={0.34}
                                    centered={true}
                                    vivid={false}
                                />
                            </div>
                        )}
                        <div className="mist-labyrinth-screen-grid" aria-hidden="true" />
                        <div className="mist-labyrinth-title-block">
                            <h2 className="mist-labyrinth-title mist-engine-title mist-title-shadow">
                                {getEngineTitle()}
                            </h2>
                            <p className="mist-labyrinth-subtitle">{getEngineSubtitle()}</p>
                        </div>
                        <div className="mist-labyrinth-mode-toggle" role="tablist" aria-label={lang === 'EN' ? "Formula display mode" : "公式显示模式"}>
                            <button
                                type="button"
                                className={labyrinthPanelMode === 'formula' ? 'is-active' : ''}
                                onClick={() => setLabyrinthPanelMode('formula')}
                            >
                                {lang === 'EN' ? "FORMULA" : "公式"}
                            </button>
                            <button
                                type="button"
                                className={labyrinthPanelMode === 'desire' ? 'is-active' : ''}
                                onClick={() => setLabyrinthPanelMode('desire')}
                            >
                                {lang === 'EN' ? "MODULES" : "欲望模块"}
                            </button>
                        </div>
                        {labyrinthPanelMode === 'formula' ? renderLabyrinthMainFormula() : renderLabyrinthDesirePanel()}
                    </div>
                </div>
            </section>

            <section className="mist-labyrinth-control-deck" aria-label={lang === 'EN' ? "Parameter deck" : "参数控制区"}>
                {renderLabyrinthSurfaceDeck()}
            </section>
        </div>
    );

    return (
        <div className={`mist-engine-field ${isCommercial ? 'mist-commercial-engine' : ''} ${isLabyrinth ? 'mist-labyrinth-engine' : ''} w-full h-full flex flex-col relative bg-[var(--bg-main)] overflow-hidden transition-colors duration-500`}>
            {theme === 'retro' && <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" style={{ backgroundImage: 'var(--pattern-aged)' }}></div>}
            {theme !== 'retro' && (
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        background: 'radial-gradient(circle at 56% 42%, rgba(255,255,255,0.045), transparent 36%), radial-gradient(circle at 76% 62%, rgba(255,255,255,0.025), transparent 34%)'
                    }}
                />
            )}

            {showRings && !isLabyrinth && (
                <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-1000" style={{ filter: 'blur(0.45px)', transform: 'translateY(18px)' }}>
                    <BorromeanRings
                        fieldState={fieldState}
                        lang={lang}
                        driverType={driverType}
                        opacity={theme === 'retro' ? 0.42 : 0.5}
                        centered={true}
                        vivid={false}
                    />
                </div>
            )}

            {!isLabyrinth && <div className={`flex-shrink-0 px-6 pt-20 pb-6 flex items-center justify-center z-20 bg-transparent relative`}>
                <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center relative">
                    <div className="flex-1 flex flex-col items-center justify-center pointer-events-none">
                        <h2 className={`mist-engine-title text-5xl md:text-7xl font-serif font-bold tracking-[0.1em] mb-6 text-center mist-title-shadow ${isCommercial && theme !== 'retro' ? 'mist-commercial-title-pill text-white' : (theme === 'retro' ? 'text-[var(--text-accent)]' : osTheme.accent)}`}>
                            {getEngineTitle()}
                        </h2>
                        <div className={`mist-engine-subtitle text-sm md:text-lg font-normal w-full max-w-xl mx-auto px-4 text-center leading-relaxed whitespace-pre-line ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'}`}>
                            {getEngineSubtitle()}
                        </div>
                    </div>
                </div>
            </div>}

            <div className="mist-engine-canvas flex-1 flex flex-col overflow-y-auto custom-scrollbar relative z-10 transition-all duration-300">
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {isLabyrinth ? (
                        renderLabyrinthConsole()
                    ) : (
                    <div className="min-h-full flex flex-col items-center justify-start p-4 md:px-8 pt-8 md:pb-60 space-y-2 md:space-y-2">
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
                        <div className="flex flex-col space-y-8 min-w-0">
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
                                {renderProphecySlot({ blockId: "engine_m4", placeholderCN: "M4. 大他者阻断", placeholderEN: "M4. The Other", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? ", he must pay" : "的重重阻击，面临"}
                                </span>
                                {renderProphecySlot({ blockId: "engine_m6", placeholderCN: "M6. 终极代价", placeholderEN: "M6. Stakes", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "." : "。"}
                                </span>
                            </div>

                            {/* 第四行：行动 */}
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "He chooses" : "他决定通过"}
                                </span>
                                {renderProphecySlot({ blockId: "engine_m5", placeholderCN: "M5. 行动驱力", placeholderEN: "M5. Drive", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "to struggle," : "抵抗，"}
                                </span>
                            </div>

                            {/* 第五行：裁决与余痕 */}
                            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "ultimately receiving" : "最终迎来了"}
                                </span>
                                {renderProphecySlot({ blockId: "engine_m7a", placeholderCN: "M7A. 象征裁决", placeholderEN: "M7A. Verdict", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? ", and forever lives on with" : "，并在此后永远带着"}
                                </span>
                                {renderProphecySlot({ blockId: "engine_m7b", placeholderCN: "M7B. 实在余痕", placeholderEN: "M7B. Residue", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "." : "活下去。"}
                                </span>
                            </div>
                        </div>
                    )}
                    </div>
                    )}
                </div>
            </div>
            {activeBlockId && (
                <NarrativeLibraryModal
                    isOpen={libraryModalOpen}
                    onClose={() => { setLibraryModalOpen(false); setScrollToTag(undefined); }}
                    blockId={activeBlockId}
                    blockName={getBlockName(activeBlockId, lang)}
                    selectedTags={fieldState[activeBlockId] || []}
                    onToggleTag={(tag) => toggleTag(activeBlockId, tag)}
                    onClear={() => clearBlock(activeBlockId)}
                    lang={lang}
                    driverType={driverType}
                    onAddCustomDef={onAddCustomDef}
                    scrollToTag={scrollToTag}
                    onTempLockChange={(locks) => {
                        onFaceStateChange?.(locks);
                    }}
                    initialFaceState={faceState}
                    customLibraryData={
                        activeBlockId === 'aes_palette_preset'
                            ? [{ id: 'lib_master', name: '视觉大师预设 (Master Presets)', desc: 'Pre-configured Cinematic Styles', items: MASTER_PRESETS }]
                            : (activeBlockId === 'aes_color_palette'
                                ? [{ id: 'lib_color', name: '经典色板库 (Color Palettes)', desc: 'Classic Color Schemes', items: AES_COLOR_PRESETS }]
                                : undefined)
                    }
                />
            )}

            {isLabyrinthIdentityModalOpen && renderLabyrinthIdentityModal()}
            {isLabyrinthTimeModalOpen && renderLabyrinthTimeModal()}
            {isLabyrinthVisionResultOpen && renderLabyrinthVisionResultModal()}

            {/* PORTAL TOOLTIP FOR COEFFICIENTS */}
            {hoveredPortal && createPortal(
                <div
                    className={`mist-labyrinth-tooltip fixed z-[9999] pointer-events-none ${hoveredPortal.showAbove ? '-translate-y-full' : ''}`}
                    style={{
                        top: hoveredPortal.pos.top,
                        left: hoveredPortal.pos.left
                    }}
                >
                    <div className="mist-labyrinth-tooltip-header">
                        <span>
                            {hoveredPortal.header || "DETAILS"}
                            {hoveredPortal.count !== undefined && hoveredPortal.count > 0 && (
                                <b>({hoveredPortal.count})</b>
                            )}
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
