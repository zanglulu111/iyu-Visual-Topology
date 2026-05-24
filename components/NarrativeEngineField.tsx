import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../contexts/ThemeContext';
import { NarrativeFieldState, BlueprintLanguage, DriverType, NarrativeBlockDef, LibraryCategoryDef, SubjectType, AestheticMode, AestheticPreset, WorldLawConfig, PromptFocusState, M7BResidueIntensity, MAxisMixerState, MAxisMixerSlot, MAxisMixerLevel, VisionImageUseMode } from '../types';
import { ArrowRight, Check, Copy, Dice5, Edit2, Eye, FileText, Ghost, Image as ImageIcon, Loader2, Lock, Plus, Power, RotateCcw, RotateCw, ScanEye, BrainCircuit, Shuffle, Trash2, Unlock, Upload, User, X, Zap, ChevronRight, Star, SlidersHorizontal } from 'lucide-react';
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
    getWorldLawDisplay,
    patchWorldLawConfig,
    WORLD_LAW_LEVEL_OPTIONS
} from '../services/worldLaw';
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
    SUR3_COORDINATE_PRESETS,
    SUR3_SPACE_ANCHOR_PRESETS,
    GENRE_CATEGORIES
} from '../constants';
import { getArchetypeFromEra, filterItemsByArchetype, getRandomCount, randomizeMAxisMixerState, randomizeM7BResidueIntensity, randomizePromptFocusState, randomizeWorldLawConfig, weightedSurfaceFilter } from '../services/randomizer';
import { findItemFull } from '../services/dataRegistry';
import { getBlockName } from '../utils/blockUtils';
import { buildTermFocusPatch, clearFocusForTagsPatch, FocusLimitReason, getAllSelectedTags, getFocusLimitReason, getSelectedFocusBlockMap, getSelectedFocusUnitMap, isFocusableBlock, MAX_FOCUS_TERMS } from '../utils/focusTerms';
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
    focusState?: PromptFocusState;
    onFocusStateChange?: (locks: PromptFocusState) => void;
    mAxisMixer?: MAxisMixerState;
    onMAxisMixerChange?: (mixer: MAxisMixerState) => void;
    m7bIntensity?: M7BResidueIntensity;
    onM7BIntensityChange?: (intensity: M7BResidueIntensity) => void;
    customTextSeed?: string;
    onCustomTextSeedChange?: (value: string) => void;
    onRandomizeSummaryGroup?: () => void;
    visionImage?: string | null;
    onVisionImageChange?: (value: string | null) => void;
    visionImageNote?: string;
    onVisionImageNoteChange?: (value: string) => void;
    visionAnalysis?: string;
    onVisionAnalysisChange?: (value: string) => void;
    visionImplantEnabled?: boolean;
    onVisionImplantEnabledChange?: (enabled: boolean) => void;
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

type LabyrinthEnglishFontScheme = 'editorial' | 'modern' | 'cinematic' | 'compact' | 'humanist' | 'gothic' | 'narrow' | 'ritual';
type LabyrinthVisionModuleKey = 'description' | 'usage' | 'facts' | 'tension' | 'crossSection' | 'story';
type LabyrinthVisionResultMode = 'preview' | 'edit';
type LabyrinthVisionCopyTarget = LabyrinthVisionModuleKey | 'all';

const LABYRINTH_VISION_MODULES: Array<{ key: LabyrinthVisionModuleKey; cn: string; en: string; aliases: string[] }> = [
    { key: 'description', cn: '画面硬事实', en: 'Hard Visual Facts', aliases: ['画面硬事实', '硬事实', '完整画面描述', '图片反推内容', '图像反推内容', '画面反推内容', 'hard visual facts', 'full image description', 'image reverse content'] },
    { key: 'usage', cn: '本体倾向', en: 'Ontology Tendency', aliases: ['本体倾向', '世界倾向', '图片用途与世界判定', '图片用途判定', '图像用途判定', '用途判定', '用途裁决', '世界判定', 'ontology tendency', 'image use decision', 'use & world decision'] },
    { key: 'facts', cn: '行动张力', en: 'Action Tension', aliases: ['行动张力', '叙事张力', '事实锁定清单', '锁定事实', '事实锁定', 'action tension', 'locked facts', 'locked fact list'] },
    { key: 'tension', cn: '故事横截面', en: 'Story Cross-Section', aliases: ['故事横截面', '核心戏剧动作', '戏剧动作横截面', 'story cross-section', 'core dramatic action'] },
    { key: 'crossSection', cn: '外部故事发动机', en: 'External Story Engine', aliases: ['外部故事发动机', '故事发动机', '外部发动机', 'external story engine', 'story engine'] },
    { key: 'story', cn: '禁止边界', en: 'Forbidden Boundaries', aliases: ['禁止边界', '禁写边界', '禁止补写', '故事雏形', '故事原型', '故事前提', '微型故事前提', 'forbidden boundaries', 'story seed', 'story premise'] },
];

const LABYRINTH_CORE_FORMULA_BLOCK_IDS = new Set([
    'engine_m0',
    'engine_m1',
    'engine_m2',
    'engine_m3',
    'engine_m4',
    'engine_m5',
    'engine_m6',
    'engine_m7a',
    'engine_m7b',
]);

const LABYRINTH_REQUIRED_CORE_FORMULA_BLOCK_IDS = new Set([
    'engine_m0',
    'engine_m1',
    'engine_m2',
    'engine_m3',
    'engine_m4',
    'engine_m5',
    'engine_m6',
    'engine_m7a',
]);

const LABYRINTH_CORE_FORMULA_RANDOM_MAX_TERMS = 11;
const LABYRINTH_M7B_RANDOM_EMPTY_PROBABILITY = 0.4;
const LABYRINTH_INDEPENDENT_SURFACE_RANDOM_BLOCKS = new Set(['skin_age', 'skin_structure', 'skin_volume']);

const shuffleLabyrinthList = <T,>(items: T[]): T[] => {
    const next = [...items];
    for (let index = next.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
    }
    return next;
};

const countLabyrinthStateTerms = (state: NarrativeFieldState): number =>
    Object.values(state).reduce((sum, tags) => sum + tags.length, 0);

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
        focusState = {}, onFocusStateChange,
        mAxisMixer = {}, onMAxisMixerChange,
        m7bIntensity = 'light', onM7BIntensityChange,
        customTextSeed = '', onCustomTextSeedChange,
        onRandomizeSummaryGroup,
        visionImage = null, onVisionImageChange,
        visionImageNote = '', onVisionImageNoteChange,
        visionAnalysis = '', onVisionAnalysisChange,
        visionImplantEnabled = true, onVisionImplantEnabledChange,
        isAnalyzingImage = false,
        onVisionAutoFill, isVisionAutoFilling = false,
        visionCandidateState = {}, onApplyVisionCandidateState, onClearVisionCandidateState,
        worldLawConfig = { gravity: 2 }, setWorldLawConfig,
        onApplyPreset, onPaletteChange,
        isAdmin = false
    } = props;

    const labyrinthImageInputRef = useRef<HTMLInputElement>(null);
    const [libraryModalOpen, setLibraryModalOpen] = useState(false);
    const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
    const [scrollToTag, setScrollToTag] = useState<string | undefined>(undefined);
    const [labyrinthPanelMode, setLabyrinthPanelMode] = useState<'formula' | 'desire' | 'mixer'>('formula');
    const [labyrinthSummaryMode, setLabyrinthSummaryMode] = useState<'module' | 'sentence'>('module');
    const [labyrinthSummaryExpanded, setLabyrinthSummaryExpanded] = useState(false);
    const [labyrinthImplantPage, setLabyrinthImplantPage] = useState<'image' | 'mapping'>('image');
    const [isLabyrinthImageUploading, setIsLabyrinthImageUploading] = useState(false);
    const [isLabyrinthVisionResultOpen, setIsLabyrinthVisionResultOpen] = useState(false);
    const [labyrinthVisionResultMode, setLabyrinthVisionResultMode] = useState<LabyrinthVisionResultMode>('preview');
    const [labyrinthVisionCopiedTarget, setLabyrinthVisionCopiedTarget] = useState<LabyrinthVisionCopyTarget | null>(null);
    const [isLabyrinthIdentityModalOpen, setIsLabyrinthIdentityModalOpen] = useState(false);
    const [isLabyrinthTimeModalOpen, setIsLabyrinthTimeModalOpen] = useState(false);
    const [isLabyrinthWorldLawExpanded, setIsLabyrinthWorldLawExpanded] = useState(false);
    const [isLabyrinthWorldLawClosing, setIsLabyrinthWorldLawClosing] = useState(false);
    const labyrinthWorldLawCloseTimer = useRef<number | null>(null);
    const driverRingsExitTimer = useRef<number | null>(null);
    const labyrinthVisionCopyTimer = useRef<number | null>(null);
    const labyrinthVisionActionTimer = useRef<number | null>(null);
    const labyrinthVisionTextareaRefs = useRef<Partial<Record<LabyrinthVisionModuleKey, HTMLTextAreaElement | null>>>({});
    const [shouldRenderDriverRings, setShouldRenderDriverRings] = useState(showRings);
    const [isDriverRingsExiting, setIsDriverRingsExiting] = useState(false);
    const [labyrinthWorldLawPreview, setLabyrinthWorldLawPreview] = useState<number | null>(null);
    const [customGenderInput, setCustomGenderInput] = useState('');
    const [customAgeInput, setCustomAgeInput] = useState('');
    const [labyrinthEnglishFontScheme, setLabyrinthEnglishFontScheme] = useState<LabyrinthEnglishFontScheme>('humanist');
    const [labyrinthYearInputDraft, setLabyrinthYearInputDraft] = useState<string | null>(null);
    const [labyrinthYearInputInvalid, setLabyrinthYearInputInvalid] = useState(false);
    const [selectedLabyrinthVisionCandidates, setSelectedLabyrinthVisionCandidates] = useState<NarrativeFieldState>({});
    const [labyrinthVisionActionFlash, setLabyrinthVisionActionFlash] = useState<'preset' | 'apply-selected' | 'clear-selected' | null>(null);

    useEffect(() => () => {
        if (labyrinthWorldLawCloseTimer.current !== null) {
            window.clearTimeout(labyrinthWorldLawCloseTimer.current);
        }
        if (driverRingsExitTimer.current !== null) {
            window.clearTimeout(driverRingsExitTimer.current);
        }
        if (labyrinthVisionCopyTimer.current !== null) {
            window.clearTimeout(labyrinthVisionCopyTimer.current);
        }
        if (labyrinthVisionActionTimer.current !== null) {
            window.clearTimeout(labyrinthVisionActionTimer.current);
        }
    }, []);

    useEffect(() => {
        if (!isLabyrinthVisionResultOpen) return;
        setLabyrinthVisionResultMode('preview');
        setLabyrinthVisionCopiedTarget(null);
    }, [isLabyrinthVisionResultOpen]);

    useEffect(() => {
        setSelectedLabyrinthVisionCandidates({});
    }, [visionCandidateState]);

    useEffect(() => {
        if (driverRingsExitTimer.current !== null) {
            window.clearTimeout(driverRingsExitTimer.current);
            driverRingsExitTimer.current = null;
        }

        if (showRings) {
            setShouldRenderDriverRings(true);
            setIsDriverRingsExiting(false);
            return;
        }

        if (!shouldRenderDriverRings) {
            setIsDriverRingsExiting(false);
            return;
        }

        setIsDriverRingsExiting(true);
        driverRingsExitTimer.current = window.setTimeout(() => {
            setShouldRenderDriverRings(false);
            setIsDriverRingsExiting(false);
            driverRingsExitTimer.current = null;
        }, 2350);
    }, [showRings, shouldRenderDriverRings]);

    const flashLabyrinthVisionAction = (action: 'preset' | 'apply-selected' | 'clear-selected') => {
        setLabyrinthVisionActionFlash(action);
        if (labyrinthVisionActionTimer.current !== null) {
            window.clearTimeout(labyrinthVisionActionTimer.current);
        }
        labyrinthVisionActionTimer.current = window.setTimeout(() => {
            setLabyrinthVisionActionFlash(null);
            labyrinthVisionActionTimer.current = null;
        }, 180);
    };

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
    const LABYRINTH_ENGLISH_FONT_OPTIONS: Array<{ id: LabyrinthEnglishFontScheme; label: string; title: string }> = [
        { id: 'editorial', label: 'A', title: 'Editorial Serif' },
        { id: 'modern', label: 'B', title: 'Modern Serif' },
        { id: 'cinematic', label: 'C', title: 'Cinematic Contrast' },
        { id: 'compact', label: 'D', title: 'Compact UI' },
        { id: 'humanist', label: 'E', title: 'Humanist Sans' },
        { id: 'gothic', label: 'F', title: 'Neo Gothic' },
        { id: 'narrow', label: 'G', title: 'Condensed Display' },
        { id: 'ritual', label: 'H', title: 'Ritual Serif' },
    ];
    const M7B_INTENSITY_OPTIONS: Array<{
        id: M7BResidueIntensity;
        cn: string;
        en: string;
        descCN: string;
        descEN: string;
    }> = [
            { id: 'off', cn: '关闭', en: 'Off', descCN: '不强制余痕', descEN: 'No forced residue' },
            { id: 'light', cn: '轻触', en: 'Light', descCN: '默认1-2句', descEN: 'Default 1-2 lines' },
            { id: 'strong', cn: '强显影', en: 'Strong', descCN: '最后核心画面', descEN: 'Final core image' },
            { id: 'epilogue', cn: '后日谈', en: 'Epilogue', descCN: '极短尾声余痕', descEN: 'Brief epilogue residue' },
        ];

    const M_AXIS_MIXER_LEVELS: Array<{
        id: MAxisMixerLevel;
        cn: string;
        en: string;
        descCN: string;
        descEN: string;
    }> = [
            { id: 'muted', cn: '退隐', en: 'Hidden', descCN: '结构仍有效，但退入选择偏移、动作余波或场域压力。', descEN: 'Still active, but carried by choice drift, action residue, or field pressure.' },
            { id: 'balanced', cn: '标准', en: 'Standard', descCN: '按该位格默认职责参与故事，由外部情节决定戏份。', descEN: 'Uses the default role; plot mechanics decide how much appears.' },
            { id: 'amplified', cn: '显影', en: 'Reveal', descCN: '该位格必须落成关键触发、选择、阻断、行动、代价或结尾回咬。', descEN: 'Must become a key trigger, choice, block, action, cost, or ending reversal.' },
        ];

    const M_AXIS_MIXER_SLOTS: Array<{
        id: MAxisMixerSlot;
        cn: string;
        en: string;
        descCN: string;
        descEN: string;
    }> = [
            { id: 'engine_m0', cn: 'M0 精神拓扑', en: 'M0 Topology', descCN: '主角进入事件的方式', descEN: 'How the subject enters action' },
            { id: 'engine_m1', cn: 'M1 缺失主体', en: 'M1 Lack', descCN: '欲望发动机的可见度', descEN: 'Visibility of lack' },
            { id: 'engine_m2', cn: 'M2 真实遭遇', en: 'M2 Encounter', descCN: '击穿事件的冲击度', descEN: 'Impact of the rupture' },
            { id: 'engine_m3', cn: 'M3 欲望幻想', en: 'M3 Fantasy', descCN: '虚假解药的诱惑度', descEN: 'Temptation of the false cure' },
            { id: 'engine_m4', cn: 'M4 阻断', en: 'M4 Block', descCN: '制度阻断的外部压力', descEN: 'External pressure of order' },
            { id: 'engine_m5', cn: 'M5 行动驱力', en: 'M5 Drive', descCN: '重复行动的节律', descEN: 'Rhythm of repeated action' },
            { id: 'engine_m6', cn: 'M6 终极代价', en: 'M6 Cost', descCN: '代价兑现的硬度', descEN: 'Hardness of the cost' },
            { id: 'engine_m7a', cn: 'M7A 裁决', en: 'M7A Verdict', descCN: '回头改写的强度', descEN: 'Strength of the retroactive turn' },
        ];

    const M_AXIS_MIXER_SLOT_LEVELS: Record<MAxisMixerSlot, Record<MAxisMixerLevel, { cn: string; en: string }>> = {
        engine_m0: {
            muted: { cn: '只改写感知、因果判断和物件关系，不独立解释世界法则。', en: 'Only shifts perception, causality, and object relations; no standalone world-law explanation.' },
            balanced: { cn: '所有 M 位格都经 M0 转译，但不抢外部故事机关。', en: 'All M positions pass through M0, without stealing the external story mechanism.' },
            amplified: { cn: '世界稳定方式成为具体故事机关，直接改变选择和后果。', en: 'The world-stabilizing mode becomes a concrete story mechanism that changes choices and consequences.' },
        },
        engine_m1: {
            muted: { cn: '缺失只进入迟疑、语气、误认和关系姿态，不写成性格标签。', en: 'Lack appears through hesitation, tone, misrecognition, and relational posture, not a trait label.' },
            balanced: { cn: '解释主角为何追逐 M3、被 M2 击穿、无法正常生活。', en: 'Explains why the subject pursues M3, is pierced by M2, and cannot live normally.' },
            amplified: { cn: '每个重大选择都被这个缺口施压，欲望发动机清晰可见。', en: 'Every major choice is pressured by this lack; the desire engine is plainly visible.' },
        },
        engine_m2: {
            muted: { cn: '以一句话、一个物件或一次小错位制造裂口，不扩大为大场面。', en: 'A sentence, object, or small displacement opens the crack, without becoming a big scene.' },
            balanced: { cn: '作为明确触发事件，迫使主角进入行动链。', en: 'Acts as a clear triggering encounter that pushes the subject into action.' },
            amplified: { cn: '真实遭遇反复回声，持续改变后续判断和关系。', en: 'The encounter keeps echoing and reshapes later judgment and relationships.' },
        },
        engine_m3: {
            muted: { cn: '幻想只表现为目标或解法上的轻微误认。', en: 'Fantasy appears as a light misrecognition of the goal or solution.' },
            balanced: { cn: '主角追逐一个清晰的虚假解药、对象、身份或方案。', en: 'The subject pursues a clear false cure, object, identity, or plan.' },
            amplified: { cn: 'M3 成为主要诱惑和误导，持续牵引主角选择。', en: 'M3 becomes the main temptation and misdirection that steers choices.' },
        },
        engine_m4: {
            muted: { cn: '阻断环境化：规则、手续、空间、沉默或旁观压力。', en: 'The block is environmental: rule, procedure, space, silence, or bystander pressure.' },
            balanced: { cn: '形成明确外部阻力，推动故事对抗。', en: 'Forms a clear external obstacle that drives conflict.' },
            amplified: { cn: '大他者成为主要压力结构，但不得变成单薄反派。', en: 'The Other becomes the main pressure structure, but not a flat villain.' },
        },
        engine_m5: {
            muted: { cn: '行动驱力只作为习惯、小动作或微弱坚持出现。', en: 'Drive appears as habit, micro-action, or quiet insistence.' },
            balanced: { cn: '形成主角可见的行动策略和重复方式。', en: 'Forms the subject’s visible action strategy and pattern of repetition.' },
            amplified: { cn: '故事节奏被 M5 驱动，重复行动必须升级并造成后果。', en: 'Story rhythm is driven by M5; repeated action escalates and produces consequences.' },
        },
        engine_m6: {
            muted: { cn: '代价局部显影为关系裂缝、身体疲惫或小型不可逆损失。', en: 'Cost appears locally as relational fracture, bodily fatigue, or a small irreversible loss.' },
            balanced: { cn: '高潮选择必须付出清晰且不可逆的代价。', en: 'The climactic choice requires a clear irreversible cost.' },
            amplified: { cn: '代价成为高潮核心压力，但不得写成惩罚段或苦难展示。', en: 'Cost becomes the core pressure of the climax, not a punishment or suffering display.' },
        },
        engine_m7a: {
            muted: { cn: '只让最后选择轻微反向解释前文，不写总结判词。', en: 'The final choice lightly reinterprets the story, without a verdict speech.' },
            balanced: { cn: '结尾回头改写主角一路行动的意义。', en: 'The ending retroactively rewrites the meaning of the subject’s actions.' },
            amplified: { cn: '发生清晰象征裁决，前文被回头改写，但不许作者解释。', en: 'A clear symbolic verdict rewrites what came before, without authorial explanation.' },
        },
    };

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
        if (isExperimental) return lang === 'EN' ? "METONYMIC SCRIPT" : "换喻脚本";
        if (isTrailer) return lang === 'EN' ? "VIRTUAL ILLUSION" : "虚拟幻象";
        return lang === 'EN' ? "EROS LABYRINTH" : "爱欲迷宫";
    };

    const getEngineSubtitle = () => {
        if (isCommercial) return lang === 'EN' ? "Quilting the sliding signifier of desire onto the product." : "将滑动的欲望能指，强行锚定在具体的产品图腾之上。";
        if (isExperimental) return lang === 'EN' ? "Pasting a complete story and translating it into screenplay structure." : "粘贴完整故事，并转译为可生产的电影脚本结构。";
        if (isTrailer) return lang === 'EN' ? "Constructing the hook to induce infinite anticipation." : "构建视听钩子，制造无法被满足的期待与悬念。";
        return lang === 'EN' ? "A closed loop of desire, action, verdict, and residue" : "欲望、行动、裁决与余痕构成的闭环";
    };

    const currentOSKey = isCommercial ? 'comm_c0' : (isExperimental ? 'exp_e0' : (isTrailer ? 'trl_t0' : 'engine_m0'));
    const currentPsychicOS = fieldState[currentOSKey]?.[0];
    const osDetails = currentPsychicOS ? getItemDetails(currentPsychicOS, currentOSKey) as any : null;

    const getOSPlaceholder = () => {
        if (isCommercial) return lang === 'EN' ? "ANCHOR DESIRE" : "锚定欲望";
        if (isExperimental) return lang === 'EN' ? "PASTE STORY" : "粘贴故事";
        if (isTrailer) return lang === 'EN' ? "SET HOOK" : "设置钩子";
        return lang === 'EN' ? "SUBJECT STRUCTURE" : "主体结构";
    };

    const osDisplay = currentPsychicOS ? getBilingualText(currentPsychicOS) : getOSPlaceholder();

    let osTheme = {
        accent: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]',
        hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-[var(--mist-active-accent)]/10',
        label: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]',
        icon: <Ghost size={24} className={theme === 'retro' ? "text-[var(--text-accent)]" : "text-[var(--mist-active-accent)]"} />
    };
    let osLabel = "结构基底/STRUCTURAL BASE";

    if (isCommercial) {
        osTheme = {
            accent: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]',
            hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-[var(--mist-active-accent)]/10',
            label: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]',
            icon: <ScanEye size={24} className={theme === 'retro' ? "text-[var(--text-accent)]" : "text-[var(--mist-active-accent)]"} />
        };
        osLabel = "对象预设/OBJECT ANCHOR";
    } else if (isExperimental) {
        osTheme = {
            accent: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]',
            hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-[var(--mist-active-accent)]/10',
            label: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]',
            icon: <BrainCircuit size={24} className={theme === 'retro' ? "text-[var(--text-accent)]" : "text-[var(--mist-active-accent)]"} />
        };
        osLabel = "核心观念/CORE CONCEPT";
    } else if (isTrailer) {
        osTheme = {
            accent: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]',
            hover: theme === 'retro' ? 'hover:bg-transparent' : 'hover:bg-[var(--mist-active-accent)]/10',
            label: theme === 'retro' ? 'text-[var(--text-accent)]' : 'text-[var(--mist-active-accent)]',
            icon: <Zap size={24} className={theme === 'retro' ? "text-[var(--text-accent)]" : "text-[var(--mist-active-accent)]"} />
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
            const removedTags = current.filter(currentTag => !(newState[blockId] || []).includes(currentTag));
            if (removedTags.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, removedTags));
            onChange(newState);
            return;
        }
        if (current.includes(tag)) {
            newState[blockId] = current.filter(t => t !== tag);
            onFocusStateChange?.(clearFocusForTagsPatch(blockId, [tag]));
        } else {
            if (current.length >= limit) {
                alert(lang === 'EN' ? `Max ${limit} items for this module.` : `该预设最多选择 ${limit} 个。`);
                return;
            }
            newState[blockId] = [...current, tag];
        }
        onChange(newState);
    };

    const setBlockTags = (blockId: string, tags: string[]) => {
        if (lockedModules[blockId]) return;

        if (blockId === 'aes_palette_preset') {
            const tag = tags[0];
            const preset = MASTER_PRESETS.find(p => p.name === tag || p.id === tag);
            if (preset) onApplyPreset?.(preset);
            else onChange({ ...fieldState, [blockId]: tag ? [tag] : [] });
            setLibraryModalOpen(false);
            return;
        }

        if (blockId === 'aes_color_palette') {
            const tag = tags[0];
            const preset = AES_COLOR_PRESETS.find(p => p.name === tag || p.id === tag);
            if (preset && onPaletteChange) {
                const nextPalette = [...preset.colors];
                while (nextPalette.length < 7) nextPalette.push("");
                onPaletteChange(nextPalette.slice(0, 7));
            }
            onChange({ ...fieldState, [blockId]: tag ? [tag] : [] });
            setLibraryModalOpen(false);
            return;
        }

        const rawCurrent = fieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        const visibleLocks = (lockedTags[blockId] || []).filter(tag => current.includes(tag));
        const limit = BLOCK_LIMITS[blockId] || 1;
        const seen = new Set<string>();
        const nextTags = [...visibleLocks, ...tags]
            .filter(Boolean)
            .filter(tag => {
                if (seen.has(tag)) return false;
                seen.add(tag);
                return true;
            })
            .slice(0, limit);
        const removedTags = current.filter(tag => !nextTags.includes(tag));
        if (removedTags.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, removedTags));
        onChange({ ...fieldState, [blockId]: nextTags });
    };

    const handleManualUpdate = (blockId: string, tags: string[]) => {
        const rawCurrent = fieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        const removedTags = current.filter(tag => !tags.includes(tag));
        if (removedTags.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, removedTags));
        onChange({ ...fieldState, [blockId]: tags });
    };

    const clearBlock = (blockId: string) => {
        if (lockedModules[blockId]) return;
        const current = fieldState[blockId] || [];
        if (current.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, current));
        onChange({ ...fieldState, [blockId]: [] });
    }
    const removeTag = (blockId: string, tag: string) => {
        if (lockedModules[blockId]) return;
        const rawCurrent = fieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        onFocusStateChange?.(clearFocusForTagsPatch(blockId, [tag]));
        onChange({ ...fieldState, [blockId]: current.filter(t => t !== tag) });
    }
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
    const storySummaryBlocks = ['skin_genre', 'skin_era', 'skin_year_exact', 'skin_country_exact', 'skin_society', 'skin_age', 'skin_gender', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending'];
    const isValueLocked = (blockId: string, value: string) => Boolean(value && lockedTags[blockId]?.includes(value));
    const isGenderValueLocked = isGenderLocked || isValueLocked('skin_gender', selectedGender);
    const isAgeValueLocked = isAgeLocked || isValueLocked('skin_age', selectedAge);
    const isCountryValueLocked = isCountryLocked || isValueLocked('skin_country_exact', selectedCountry);
    const isYearValueLocked = isYearLocked || isValueLocked('skin_year_exact', selectedYearTag);
    const selectedFocusTags = getAllSelectedTags(fieldState);
    const focusUnitMap = getSelectedFocusUnitMap(fieldState);
    const focusBlockMap = getSelectedFocusBlockMap(fieldState);
    const getSelectedTagsForBlock = (blockId: string) => {
        const rawTags = fieldState[blockId];
        return Array.isArray(rawTags) ? rawTags : (rawTags ? [String(rawTags)] : []);
    };
    const getSelectionStats = (blockIds: string[]) => {
        const focusedUnits = new Set<string>();
        const selectedCount = blockIds.reduce((count, blockId) => {
            const tags = getSelectedTagsForBlock(blockId);
            tags.forEach(tag => {
                if (focusState[tag] && isFocusableBlock(blockId)) focusedUnits.add(focusUnitMap[tag] || tag);
            });
            return count + tags.length;
        }, 0);
        return { selected: selectedCount, focused: focusedUnits.size };
    };
    const renderSelectionStats = (stats: { selected: number; focused: number }, className = '') => (
        <div className={`mist-labyrinth-selection-stats ${className}`}>
            <span><b>{stats.selected}</b>{lang === 'EN' ? 'terms' : '词'}</span>
            <span><b>{stats.focused}</b>{lang === 'EN' ? 'focus' : '重点'}</span>
        </div>
    );
    const getLabyrinthVisionCandidateEntries = useCallback(() => (
        Object.entries(visionCandidateState).filter(([, tags]) => Array.isArray(tags) && tags.length > 0)
    ), [visionCandidateState]);
    const getLabyrinthVisionCandidateGroups = useCallback(() => {
        const engine: Array<[string, string[]]> = [];
        const surface: Array<[string, string[]]> = [];
        getLabyrinthVisionCandidateEntries().forEach(([candidateBlockId, tags]) => {
            if (candidateBlockId.startsWith('skin_') || candidateBlockId.startsWith('sur')) surface.push([candidateBlockId, tags]);
            else engine.push([candidateBlockId, tags]);
        });
        return { engine, surface };
    }, [getLabyrinthVisionCandidateEntries]);
    const getLabyrinthSelectedVisionCandidateSubset = useCallback((scope: 'engine' | 'surface' | 'all') => {
        const groups = getLabyrinthVisionCandidateGroups();
        const entries = scope === 'engine' ? groups.engine : scope === 'surface' ? groups.surface : [...groups.engine, ...groups.surface];
        const allowedBlockIds = new Set(entries.map(([candidateBlockId]) => candidateBlockId));
        return Object.entries(selectedLabyrinthVisionCandidates).reduce<NarrativeFieldState>((acc, [candidateBlockId, tags]) => {
            if (!allowedBlockIds.has(candidateBlockId) || tags.length === 0) return acc;
            acc[candidateBlockId] = tags;
            return acc;
        }, {});
    }, [getLabyrinthVisionCandidateGroups, selectedLabyrinthVisionCandidates]);
    const applyLabyrinthVisionCandidateState = useCallback((candidateState: NarrativeFieldState) => {
        if (Object.keys(candidateState).length === 0) return;
        const nextFocusState = randomizePromptFocusState(candidateState, 'global');
        const resetFocusPatch = Object.keys(focusState || {}).reduce<PromptFocusState>((acc, key) => {
            if (focusState[key]) acc[key] = false;
            return acc;
        }, {});
        onFocusStateChange?.({ ...resetFocusPatch, ...nextFocusState });
        onMAxisMixerChange?.(randomizeMAxisMixerState(candidateState, nextFocusState));
        onM7BIntensityChange?.(randomizeM7BResidueIntensity(candidateState));
        onApplyVisionCandidateState?.(candidateState);
    }, [focusState, onApplyVisionCandidateState, onFocusStateChange, onMAxisMixerChange, onM7BIntensityChange]);
    const handleLabyrinthApplySelectedVisionCandidates = useCallback((scope: 'engine' | 'surface' | 'all') => {
        const subset = getLabyrinthSelectedVisionCandidateSubset(scope);
        if (Object.keys(subset).length === 0) return;
        flashLabyrinthVisionAction('apply-selected');
        applyLabyrinthVisionCandidateState(subset);
    }, [applyLabyrinthVisionCandidateState, flashLabyrinthVisionAction, getLabyrinthSelectedVisionCandidateSubset]);
    const handleLabyrinthClearSelectedVisionCandidates = useCallback(() => {
        if (countLabyrinthStateTerms(selectedLabyrinthVisionCandidates) === 0) return;
        flashLabyrinthVisionAction('clear-selected');
        setSelectedLabyrinthVisionCandidates({});
    }, [flashLabyrinthVisionAction, selectedLabyrinthVisionCandidates]);
    const handleLabyrinthToggleVisionCandidate = useCallback((blockId: string, tag: string) => {
        if (!tag || !(visionCandidateState[blockId] || []).includes(tag)) return;
        setSelectedLabyrinthVisionCandidates(prev => {
            const currentTags = prev[blockId] || [];
            const nextTags = currentTags.includes(tag)
                ? currentTags.filter(item => item !== tag)
                : [...currentTags, tag];
            const next = { ...prev };
            if (nextTags.length > 0) next[blockId] = nextTags;
            else delete next[blockId];
            return next;
        });
    }, [visionCandidateState]);
    const buildLabyrinthVisionRandomPresetState = useCallback((): NarrativeFieldState => {
        const candidateEntries = getLabyrinthVisionCandidateEntries()
            .map(([blockId, tags]) => [blockId, tags.filter(Boolean)] as [string, string[]])
            .filter(([, tags]) => tags.length > 0);
        const candidateMap = new Map(candidateEntries);
        const orderedBlockIds = Array.from(new Set([
            ...ENGINE_BLOCKS.map(block => block.id),
            ...ALL_SKIN_BLOCKS.map(block => block.id),
            ...candidateEntries.map(([blockId]) => blockId),
        ]));
        const nextState: NarrativeFieldState = {};
        let coreTermCount = 0;
        const coreExtraPool: Array<[string, string]> = [];

        const addTag = (blockId: string, tag: string) => {
            if (!tag) return;
            const currentTags = nextState[blockId] || [];
            if (currentTags.includes(tag)) return;
            nextState[blockId] = [...currentTags, tag];
            if (LABYRINTH_CORE_FORMULA_BLOCK_IDS.has(blockId)) coreTermCount += 1;
        };

        orderedBlockIds.forEach(blockId => {
            if (lockedModules[blockId] || !LABYRINTH_REQUIRED_CORE_FORMULA_BLOCK_IDS.has(blockId)) return;
            const tags = shuffleLabyrinthList(candidateMap.get(blockId) || []);
            if (tags.length === 0) return;
            addTag(blockId, tags[0]);
            const targetCount = Math.min(getRandomCount(blockId), tags.length);
            tags.slice(1, targetCount).forEach(tag => coreExtraPool.push([blockId, tag]));
        });

        if (!lockedModules.engine_m7b) {
            const m7bTags = shuffleLabyrinthList(candidateMap.get('engine_m7b') || []);
            if (m7bTags.length > 0 && Math.random() >= LABYRINTH_M7B_RANDOM_EMPTY_PROBABILITY) {
                m7bTags.slice(0, Math.min(getRandomCount('engine_m7b'), m7bTags.length))
                    .forEach(tag => coreExtraPool.push(['engine_m7b', tag]));
            }
        }

        shuffleLabyrinthList(coreExtraPool).forEach(([blockId, tag]) => {
            if (coreTermCount < LABYRINTH_CORE_FORMULA_RANDOM_MAX_TERMS) addTag(blockId, tag);
        });

        const surfaceParticipants = weightedSurfaceFilter(lockedModules, Boolean(lockedModules.NARR_SKIN));
        orderedBlockIds.forEach(blockId => {
            if (lockedModules[blockId] || LABYRINTH_CORE_FORMULA_BLOCK_IDS.has(blockId)) return;
            const tags = shuffleLabyrinthList(candidateMap.get(blockId) || []);
            if (tags.length === 0) return;
            const isSurfaceCandidate = blockId.startsWith('skin_') || blockId.startsWith('sur');
            const participates = !isSurfaceCandidate
                || surfaceParticipants.has(blockId)
                || (LABYRINTH_INDEPENDENT_SURFACE_RANDOM_BLOCKS.has(blockId) && Math.random() < 0.5)
                || (!surfaceParticipants.has(blockId) && !LABYRINTH_INDEPENDENT_SURFACE_RANDOM_BLOCKS.has(blockId) && Math.random() < 0.3);
            if (!participates) return;
            const targetCount = Math.min(getRandomCount(blockId), tags.length);
            tags.slice(0, targetCount).forEach(tag => addTag(blockId, tag));
        });

        if (countLabyrinthStateTerms(nextState) === 0 && candidateEntries.length > 0) {
            const [fallbackBlockId, fallbackTags] = shuffleLabyrinthList(candidateEntries)[0];
            const fallbackTag = shuffleLabyrinthList(fallbackTags)[0];
            if (fallbackTag) addTag(fallbackBlockId, fallbackTag);
        }

        return nextState;
    }, [ENGINE_BLOCKS, getLabyrinthVisionCandidateEntries, lockedModules]);
    const handleLabyrinthVisionRandomPreset = useCallback(() => {
        const randomPresetState = buildLabyrinthVisionRandomPresetState();
        if (countLabyrinthStateTerms(randomPresetState) === 0) return;
        setSelectedLabyrinthVisionCandidates(randomPresetState);
        flashLabyrinthVisionAction('preset');
    }, [
        buildLabyrinthVisionRandomPresetState,
        flashLabyrinthVisionAction,
    ]);
    const parseLabyrinthVisionModules = useCallback((text: string) => {
        const normalized = text.trim();
        const sections = LABYRINTH_VISION_MODULES.map(module => ({ ...module, content: '' }));
        if (!normalized) return sections;

        const lines = normalized.split(/\r?\n/);
        const buckets: Partial<Record<LabyrinthVisionModuleKey, string[]>> = {};
        let activeKey: LabyrinthVisionModuleKey | 'preamble' | 'ignored' = 'preamble';
        const preamble: string[] = [];
        const ignoredHeadingAliases = [
            '图片反推提示词',
            '图像反推提示词',
            '画面反推提示词',
            '参数候选建议',
            '候选参数建议',
            '参数建议',
            '冲突处理建议',
            '冲突处理',
            'reverse prompt',
            'parameter candidates',
            'conflict handling',
        ];

        const normalizeHeading = (value: string) => value
            .replace(/^#{1,6}\s*/, '')
            .replace(/^(?:模块|module)?\s*0?\d+\s*[\.\、\):：-]\s*/i, '')
            .replace(/\*\*/g, '')
            .replace(/[（(].*?[）)]/g, '')
            .replace(/\s*[:：]\s*$/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();

        const findKey = (title: string): LabyrinthVisionModuleKey | 'ignored' | null => {
            const lowerTitle = normalizeHeading(title);
            if (!lowerTitle) return null;
            const module = LABYRINTH_VISION_MODULES.find(item => item.aliases.some(alias => {
                const lowerAlias = normalizeHeading(alias);
                return lowerTitle === lowerAlias || lowerTitle.includes(lowerAlias);
            }));
            if (module) return module.key;
            const ignored = ignoredHeadingAliases.some(alias => {
                const lowerAlias = normalizeHeading(alias);
                return lowerTitle === lowerAlias || lowerTitle.includes(lowerAlias);
            });
            if (ignored) return 'ignored';
            return null;
        };

        const readHeadingKey = (line: string): LabyrinthVisionModuleKey | 'ignored' | null => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return null;
            const hasHeadingMarker = /^#{1,6}\s*/.test(trimmedLine) || /^(?:模块|module)?\s*0?\d+\s*[\.\、\):：-]\s*/i.test(trimmedLine);
            const canBeBareHeading = trimmedLine.length <= 36 && !/^[-*+]\s/.test(trimmedLine);
            if (!hasHeadingMarker && !canBeBareHeading) return null;
            return findKey(trimmedLine);
        };

        lines.forEach(line => {
            const nextKey = readHeadingKey(line);
            if (nextKey) {
                activeKey = nextKey;
                if (activeKey !== 'ignored' && !buckets[activeKey]) buckets[activeKey] = [];
                return;
            }
            if (activeKey === 'preamble') preamble.push(line);
            else if (activeKey !== 'ignored') buckets[activeKey]?.push(line);
        });

        return sections.map((section, index) => {
            const rawLines = buckets[section.key] || [];
            const content = rawLines.join('\n').trim();
            if (!content && index === 0 && preamble.join('').trim()) {
                return { ...section, content: preamble.join('\n').trim() };
            }
            return { ...section, content };
        });
    }, []);
    const labyrinthVisionModules = useMemo(
        () => parseLabyrinthVisionModules(visionAnalysis || ''),
        [parseLabyrinthVisionModules, visionAnalysis]
    );

    useEffect(() => {
        if (labyrinthVisionResultMode !== 'edit') return;
        labyrinthVisionModules.forEach(section => {
            const textarea = labyrinthVisionTextareaRefs.current[section.key];
            if (!textarea) return;
            textarea.style.height = '0px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        });
    }, [labyrinthVisionModules, labyrinthVisionResultMode]);

    const buildLabyrinthVisionAnalysisText = useCallback((sections: Array<{ key: LabyrinthVisionModuleKey; cn: string; en: string; content: string }>) => (
        sections
            .map(section => {
                const title = lang === 'EN' ? section.en : section.cn;
                const index = LABYRINTH_VISION_MODULES.findIndex(item => item.key === section.key) + 1;
                return `### ${index}. ${title}\n${section.content.trimEnd()}`;
            })
            .join('\n\n')
    ), [lang]);
    const buildLabyrinthVisionModuleCopyText = useCallback((section: { key: LabyrinthVisionModuleKey; cn: string; en: string; content: string }) => (
        buildLabyrinthVisionAnalysisText([section])
    ), [buildLabyrinthVisionAnalysisText]);
    const handleLabyrinthVisionCopy = useCallback(async (text: string, target: LabyrinthVisionCopyTarget) => {
        const trimmed = text.trim();
        if (!trimmed) return;

        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(trimmed);
            } else {
                const copyBox = document.createElement('textarea');
                copyBox.value = trimmed;
                copyBox.setAttribute('readonly', '');
                copyBox.style.position = 'fixed';
                copyBox.style.opacity = '0';
                document.body.appendChild(copyBox);
                copyBox.select();
                document.execCommand('copy');
                document.body.removeChild(copyBox);
            }
            setLabyrinthVisionCopiedTarget(target);
            if (labyrinthVisionCopyTimer.current !== null) {
                window.clearTimeout(labyrinthVisionCopyTimer.current);
            }
            labyrinthVisionCopyTimer.current = window.setTimeout(() => {
                setLabyrinthVisionCopiedTarget(null);
                labyrinthVisionCopyTimer.current = null;
            }, 1300);
        } catch (err) {
            console.warn('Copy image analysis failed:', err);
        }
    }, []);
    const renderLabyrinthVisionPreview = (content: string, emptyLabel: string) => {
        const lines = content
            .split(/\r?\n/)
            .map(line => line
                .replace(/^#{1,6}\s*/, '')
                .replace(/^[-*+]\s*/, '')
                .replace(/^\d+[\.\、]\s*/, '')
                .replace(/\*\*/g, '')
                .trim()
            )
            .filter(Boolean);

        if (lines.length === 0) {
            return (
                <div className="mist-labyrinth-vision-module-preview is-empty">
                    <span>{lang === 'EN' ? `No ${emptyLabel.toLowerCase()} yet.` : `暂无「${emptyLabel}」内容。`}</span>
                </div>
            );
        }

        return (
            <div className="mist-labyrinth-vision-module-preview">
                {lines.map((line, index) => {
                    const labelMatch = line.match(/^([^：:]{2,28})[：:]\s*(.*)$/);
                    const label = labelMatch?.[1]?.trim();
                    const value = labelMatch?.[2]?.trim();
                    const hasStructuredLabel = Boolean(label && !/[，。！？；,.!?;]/.test(label.slice(-1)));

                    if (hasStructuredLabel) {
                        return (
                            <div key={`${line}-${index}`} className="mist-labyrinth-vision-preview-row">
                                <b>{label}</b>
                                <span className={!value ? 'is-missing' : ''}>{value || (lang === 'EN' ? 'Pending' : '待填写')}</span>
                            </div>
                        );
                    }

                    return (
                        <p key={`${line}-${index}`} className="mist-labyrinth-vision-preview-paragraph">
                            {line}
                        </p>
                    );
                })}
            </div>
        );
    };
    const updateLabyrinthVisionModule = (key: LabyrinthVisionModuleKey, value: string) => {
        const nextText = buildLabyrinthVisionAnalysisText(
            labyrinthVisionModules.map(section => section.key === key ? { ...section, content: value } : section)
        );
        onVisionAnalysisChange?.(nextText);
        onClearVisionCandidateState?.();
    };
    const getFocusGroupLimitReason = (entries: Array<[string, string]>): FocusLimitReason | null => {
        const activeEntries = entries.filter(([, tag]) => tag);
        if (!activeEntries.length) return null;
        if (!activeEntries.some(([, tag]) => !focusState[tag])) return null;
        return activeEntries.reduce<FocusLimitReason | null>((reason, [entryBlockId, tag]) => {
            if (reason || focusState[tag]) return reason;
            return getFocusLimitReason(focusState, entryBlockId, tag, selectedFocusTags, focusUnitMap, focusBlockMap);
        }, null);
    };

    const getFocusLimitTitle = (reason: FocusLimitReason) => {
        if (reason === 'm') return lang === 'EN' ? 'Focus limit: max 2 M-axis terms' : 'M层重点最多2个';
        if (reason === 'surface') return lang === 'EN' ? 'Focus limit: max 2 SUR/SV focus groups' : 'SUR/SV重点最多2组';
        return lang === 'EN' ? `Focus limit: max ${MAX_FOCUS_TERMS} focus groups` : `重点最多 ${MAX_FOCUS_TERMS} 组`;
    };

    const toggleFocusTags = (entries: Array<[string, string]>) => {
        const activeEntries = entries.filter(([, tag]) => tag);
        if (!activeEntries.length) return;
        const shouldFocus = activeEntries.some(([, tag]) => !focusState[tag]);
        const nextPatch = activeEntries.reduce<PromptFocusState>((acc, [entryBlockId, tag]) => {
            const slotTags = fieldState[entryBlockId] || [];
            const patch = buildTermFocusPatch({ ...focusState, ...acc }, entryBlockId, slotTags, tag, shouldFocus, selectedFocusTags, focusUnitMap, focusBlockMap);
            return patch ? { ...acc, ...patch } : acc;
        }, {});
        if (Object.keys(nextPatch).length > 0) onFocusStateChange?.(nextPatch);
    };

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

    const normalizeAgeValue = (value: string) => value
        .replace(/[（(].*?[）)]/g, '')
        .replace(/\b(age|years?)\b/gi, '')
        .replace(/岁/g, '')
        .trim();

    const findAgePreset = (value: string) => {
        if (!value) return undefined;
        const normalized = normalizeAgeValue(value);
        const normalizedLower = normalized.toLowerCase();
        return AGE_PRESETS.find(item => {
            const rangeCN = `${item.cn}（${item.range}岁）`;
            const rangeCNHalf = `${item.cn}(${item.range}岁)`;
            const rangeEN = `${item.en} (${item.range})`;
            return item.cn === value
                || item.en === value
                || rangeCN === value
                || rangeCNHalf === value
                || rangeEN === value
                || item.range === normalized
                || item.cn === normalized
                || item.en.toLowerCase() === normalizedLower;
        });
    };

    const getAgeDisplay = (value: string, includeRange = true) => {
        if (!value) return '';
        const preset = findAgePreset(value);
        if (!preset) return lang === 'EN' || !includeRange || /岁|age|years?/i.test(value) ? value : `${value}岁`;
        if (lang === 'EN') return preset.en;
        return includeRange ? `${preset.cn}（${preset.range}岁）` : preset.cn;
    };

    const updateLabyrinthIdentity = (gender?: string | null, age?: string | null) => {
        const nextState = { ...fieldState };
        let changed = false;

        if (gender !== undefined && !isGenderValueLocked) {
            nextState['skin_gender'] = gender ? [gender] : [];
            changed = true;
        }

        if (age !== undefined && !isAgeValueLocked) {
            nextState['skin_age'] = age ? [age] : [];
            changed = true;
        }

        if (changed) onChange(nextState);
    };

    const handleLabyrinthRandomGender = () => {
        if (isGenderValueLocked) return;
        const availablePresets = GENDER_PRESETS.filter(item => item.cn !== selectedGender && item.en !== selectedGender);
        const pool = availablePresets.length > 0 ? availablePresets : GENDER_PRESETS;
        const preset = pool[Math.floor(Math.random() * pool.length)];
        updateLabyrinthIdentity(lang === 'EN' ? preset.en : preset.cn, undefined);
    };

    const handleLabyrinthRandomAge = () => {
        if (isAgeValueLocked) return;
        const preset = AGE_PRESETS[Math.floor(Math.random() * AGE_PRESETS.length)];
        updateLabyrinthIdentity(undefined, lang === 'EN' ? preset.en : preset.cn);
    };

    const handleLabyrinthRandomIdentity = () => {
        const nextGender = GENDER_PRESETS[Math.floor(Math.random() * GENDER_PRESETS.length)];
        const nextAge = AGE_PRESETS[Math.floor(Math.random() * AGE_PRESETS.length)];
        updateLabyrinthIdentity(
            isGenderValueLocked ? undefined : (lang === 'EN' ? nextGender.en : nextGender.cn),
            isAgeValueLocked ? undefined : (lang === 'EN' ? nextAge.en : nextAge.cn)
        );
    };

    const handleLabyrinthResetIdentity = () => {
        updateLabyrinthIdentity(isGenderValueLocked ? undefined : null, isAgeValueLocked ? undefined : null);
        setCustomGenderInput('');
        setCustomAgeInput('');
    };

    const handleLabyrinthToggleIdentityLock = () => {
        const selected = [
            ['skin_gender', selectedGender, isGenderValueLocked],
            ['skin_age', selectedAge, isAgeValueLocked],
        ] as const;
        const targets = selected.filter(([, value]) => value);
        if (!targets.length) return;
        const shouldUnlock = targets.every(([, , locked]) => locked);
        targets.forEach(([blockId, value, locked]) => {
            if (shouldUnlock === locked) onToggleTagLock(blockId, value);
        });
    };

    const formatYear = (year: number, useSuffix = false) => {
        if (year < 0) return lang === 'EN' ? `${Math.abs(year)} BC` : `公元前${Math.abs(year)}${useSuffix ? '年' : ''}`;
        return lang === 'EN' ? `${year}` : `公元${year}${useSuffix ? '年' : ''}`;
    };

    const TIMELINE_YEAR_MIN = -2000;
    const TIMELINE_YEAR_MAX = 2300;
    const TIMELINE_YEAR_NOW = 2026;

    const clampTimelineYear = (year: number) => (
        Math.min(TIMELINE_YEAR_MAX, Math.max(TIMELINE_YEAR_MIN, Math.trunc(year)))
    );

    const parseTimelineYearInput = (value: string): number | null => {
        const compact = value.trim().replace(/\s+/g, '').replace(/年$/, '');
        if (!compact) return null;

        const chineseBC = compact.match(/^公元前(\d{1,5})$/);
        if (chineseBC) return -Number(chineseBC[1]);

        const chineseAD = compact.match(/^公元(-?\d{1,5})$/);
        if (chineseAD) return Number(chineseAD[1]);

        const westernBC = compact.match(/^(\d{1,5})(BC|BCE)$/i);
        if (westernBC) return -Number(westernBC[1]);

        const westernAD = compact.match(/^(AD|CE)?(-?\d{1,5})$/i);
        if (westernAD) return Number(westernAD[2]);

        return null;
    };

    const commitLabyrinthYearInput = (value: string) => {
        if (isYearValueLocked) return;
        const parsedYear = parseTimelineYearInput(value);
        if (parsedYear === null) {
            if (!value.trim()) {
                updateLabyrinthTimeLocation(undefined, null);
                setLabyrinthYearInputDraft(null);
                setLabyrinthYearInputInvalid(false);
            } else {
                setLabyrinthYearInputInvalid(true);
            }
            return;
        }

        updateLabyrinthTimeLocation(undefined, clampTimelineYear(parsedYear));
        setLabyrinthYearInputDraft(null);
        setLabyrinthYearInputInvalid(false);
    };

    const updateLabyrinthTimeLocation = (country?: string | null, year?: number | null) => {
        const nextState = { ...fieldState };
        let changed = false;

        if (country !== undefined && !isCountryValueLocked) {
            nextState['skin_country_exact'] = country ? [country] : [];
            changed = true;
        }

        if (year !== undefined && !isYearValueLocked) {
            nextState['skin_year_exact'] = year === null ? [] : [String(clampTimelineYear(year))];
            setLabyrinthYearInputDraft(null);
            setLabyrinthYearInputInvalid(false);
            changed = true;
        }

        if (changed) onChange(nextState);
    };

    const handleLabyrinthRandomCountry = () => {
        if (isCountryValueLocked) return;
        const preset = SUR3_SPACE_ANCHOR_PRESETS[Math.floor(Math.random() * SUR3_SPACE_ANCHOR_PRESETS.length)];
        updateLabyrinthTimeLocation(lang === 'EN' ? preset.en : preset.cn, undefined);
    };

    const handleLabyrinthRandomYear = () => {
        if (isYearValueLocked) return;
        const randomYear = Math.floor(Math.random() * (TIMELINE_YEAR_MAX - TIMELINE_YEAR_MIN + 1)) + TIMELINE_YEAR_MIN;
        updateLabyrinthTimeLocation(undefined, randomYear);
        setLabyrinthYearInputDraft(null);
        setLabyrinthYearInputInvalid(false);
    };

    const handleLabyrinthRandomTimeLocation = () => {
        const preset = SUR3_COORDINATE_PRESETS[Math.floor(Math.random() * SUR3_COORDINATE_PRESETS.length)];
        updateLabyrinthTimeLocation(
            isCountryValueLocked ? undefined : (lang === 'EN' ? preset.spaceEn : preset.spaceCn),
            isYearValueLocked ? undefined : preset.year
        );
        if (!isYearValueLocked) {
            setLabyrinthYearInputDraft(null);
            setLabyrinthYearInputInvalid(false);
        }
    };

    const handleLabyrinthResetTimeLocation = () => {
        updateLabyrinthTimeLocation(isCountryValueLocked ? undefined : null, isYearValueLocked ? undefined : null);
        if (!isYearValueLocked) {
            setLabyrinthYearInputDraft(null);
            setLabyrinthYearInputInvalid(false);
        }
    };

    const handleLabyrinthYearInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            commitLabyrinthYearInput(event.currentTarget.value);
            event.currentTarget.blur();
        }
        if (event.key === 'Escape') {
            setLabyrinthYearInputDraft(null);
            setLabyrinthYearInputInvalid(false);
            event.currentTarget.blur();
        }
    };

    const closeLabyrinthTimeModal = () => {
        setLabyrinthYearInputDraft(null);
        setLabyrinthYearInputInvalid(false);
        setIsLabyrinthTimeModalOpen(false);
    };

    const handleLabyrinthToggleTimeLocationLock = () => {
        const selected = [
            ['skin_country_exact', selectedCountry, isCountryValueLocked],
            ['skin_year_exact', selectedYearTag, isYearValueLocked],
        ] as const;
        const targets = selected.filter(([, value]) => value);
        if (!targets.length) return;
        const shouldUnlock = targets.every(([, , locked]) => locked);
        targets.forEach(([blockId, value, locked]) => {
            if (shouldUnlock === locked) onToggleTagLock(blockId, value);
        });
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
            focusState={focusState}
            onFocusStateChange={onFocusStateChange}
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

    const getActiveM7BIntensity = (): Exclude<M7BResidueIntensity, 'implicit'> => {
        const rawIntensity = String(m7bIntensity || 'light');
        if (rawIntensity === 'off') return 'off';
        if (rawIntensity === 'strong') return 'strong';
        if (rawIntensity === 'epilogue') return 'epilogue';
        return 'light';
    };
    const shouldShowM7BResidue = getActiveM7BIntensity() !== 'off';
    const labyrinthFormulaStatBlocks = [
        'engine_m0',
        'engine_m1',
        'engine_m2',
        'engine_m3',
        'engine_m4',
        'engine_m5',
        'engine_m6',
        'engine_m7a',
        ...(shouldShowM7BResidue ? ['engine_m7b'] : []),
    ];
    const labyrinthFormulaStats = getSelectionStats(labyrinthFormulaStatBlocks);
    const labyrinthSummaryStats = getSelectionStats(storySummaryBlocks);
    const renderLabyrinthFormulaHeader = (titleCN: string, titleEN: string) => (
        <div className="mist-labyrinth-formula-header">
            <p className="mist-labyrinth-formula-eyebrow">
                {lang === 'EN' ? titleEN : titleCN}
            </p>
            <div className="mist-labyrinth-formula-header-meta">
                {renderSelectionStats(labyrinthFormulaStats)}
                <div className="mist-labyrinth-formula-caption">
                    {lang === 'EN'
                        ? "A closed loop of desire, act, verdict and residue"
                        : "欲望、行动、裁决与余痕构成的闭环"}
                </div>
            </div>
        </div>
    );

    const getMixerAdjustedCount = () => {
        const mAxisCount = M_AXIS_MIXER_SLOTS.filter(slot => (mAxisMixer[slot.id] || 'balanced') !== 'balanced').length;
        const m7bCount = getActiveM7BIntensity() !== 'light' ? 1 : 0;
        return mAxisCount + m7bCount;
    };

    const getMixerSlotLevelDescription = (slotId: MAxisMixerSlot, level: MAxisMixerLevel) => {
        const slotLevel = M_AXIS_MIXER_SLOT_LEVELS[slotId]?.[level];
        const fallback = M_AXIS_MIXER_LEVELS.find(item => item.id === level);
        return lang === 'EN'
            ? (slotLevel?.en || fallback?.descEN || '')
            : (slotLevel?.cn || fallback?.descCN || '');
    };

    const renderM7BMixerRow = () => {
        const activeM7BIntensity = getActiveM7BIntensity();
        const activeOption = M7B_INTENSITY_OPTIONS.find(option => option.id === activeM7BIntensity);
        return (
            <div className={`mist-labyrinth-mixer-row mist-labyrinth-mixer-row-m7b is-${activeM7BIntensity}`}>
                <div className="mist-labyrinth-mixer-slot-label">
                    <b>{lang === 'EN' ? 'M7B Residue Form' : 'M7B 余痕形式'}</b>
                    <span>
                        {lang === 'EN'
                            ? activeOption?.descEN
                            : activeOption?.descCN}
                    </span>
                </div>
                <div className="mist-labyrinth-mixer-segment mist-labyrinth-mixer-segment-m7b" role="group" aria-label={lang === 'EN' ? 'M7B residue form' : 'M7B 余痕形式'}>
                    {M7B_INTENSITY_OPTIONS.map(option => {
                        const active = activeM7BIntensity === option.id;
                        return (
                            <button
                                key={option.id}
                                type="button"
                                className={active ? 'is-active' : ''}
                                onClick={() => onM7BIntensityChange?.(option.id)}
                                title={lang === 'EN' ? option.descEN : option.descCN}
                            >
                                <span>{lang === 'EN' ? option.en : option.cn}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const updateMAxisMixerSlot = (slotId: MAxisMixerSlot, level: MAxisMixerLevel) => {
        const next: MAxisMixerState = { ...mAxisMixer };
        if (level === 'balanced') delete next[slotId];
        else next[slotId] = level;
        onMAxisMixerChange?.(next);
    };

    const resetMAxisMixer = () => {
        onMAxisMixerChange?.({});
        onM7BIntensityChange?.('light');
    };

    const renderLabyrinthMixerPanel = () => {
        return (
            <div className="mist-labyrinth-mixer-panel">
                <div className="mist-labyrinth-mixer-header">
                    <div>
                        <p>{lang === 'EN' ? 'M-AXIS MIXER' : 'M轴调音台'}</p>
                        <h3>{lang === 'EN' ? 'Position mode, not term volume' : '调位格执行，不调词条多寡'}</h3>
                    </div>
                    <button
                        type="button"
                        onClick={resetMAxisMixer}
                        title={lang === 'EN' ? 'Reset mixer' : '重置调音台'}
                    >
                        <RotateCcw size={14} />
                        <span>{lang === 'EN' ? 'Reset' : '重置'}</span>
                    </button>
                </div>
                <div className="mist-labyrinth-mixer-principle">
                    {lang === 'EN'
                        ? 'The attention controller sets focus and same-slot priority. The mixer only decides how each M-position performs: hidden, standard, or revealed.'
                        : '注意力控制器决定重点与同槽主次；调音台只决定位格如何进入故事：退隐、标准、显影。'}
                </div>
                <div className="mist-labyrinth-mixer-rows">
                    {M_AXIS_MIXER_SLOTS.map(slot => {
                        const currentLevel = mAxisMixer[slot.id] || 'balanced';
                        const currentDescription = getMixerSlotLevelDescription(slot.id, currentLevel);
                        return (
                            <div key={slot.id} className={`mist-labyrinth-mixer-row is-${currentLevel}`}>
                                <div className="mist-labyrinth-mixer-slot-label">
                                    <b>{lang === 'EN' ? slot.en : slot.cn}</b>
                                    <span>{currentDescription}</span>
                                </div>
                                <div className="mist-labyrinth-mixer-segment" role="group" aria-label={lang === 'EN' ? slot.en : slot.cn}>
                                    {M_AXIS_MIXER_LEVELS.map(level => (
                                        <button
                                            key={level.id}
                                            type="button"
                                            className={currentLevel === level.id ? 'is-active' : ''}
                                            onClick={() => updateMAxisMixerSlot(slot.id, level.id)}
                                            title={getMixerSlotLevelDescription(slot.id, level.id)}
                                        >
                                            <span>{lang === 'EN' ? level.en : level.cn}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                    {renderM7BMixerRow()}
                </div>
            </div>
        );
    };

    const renderLabyrinthMainFormula = () => (
        <div className="mist-labyrinth-formula">
            {renderLabyrinthFormulaHeader("迷雾公式", "MIST FORMULA")}
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
                    {shouldShowM7BResidue && (
                        <>
                            {renderFormulaText("◇", "◇")}
                            {renderFormulaBlock("engine_m7b", "M7B. 实在余痕", "M7B. Residue")}
                        </>
                    )}
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
            titleCN: shouldShowM7BResidue ? "代价与余痕" : "代价与裁决",
            titleEN: shouldShowM7BResidue ? "STAKES / RESIDUE" : "STAKES / VERDICT",
            noteCN: shouldShowM7BResidue ? "终极代价、象征裁决、实在余痕" : "终极代价、象征裁决",
            noteEN: shouldShowM7BResidue ? "Stakes, verdict, residue" : "Stakes and verdict",
            blocks: [
                { id: "engine_m6", placeholderCN: "M6. 终极代价", placeholderEN: "M6. Stakes" },
                { id: "engine_m7a", placeholderCN: "M7A. 象征裁决", placeholderEN: "M7A. Verdict" },
                ...(shouldShowM7BResidue ? [{ id: "engine_m7b", placeholderCN: "M7B. 实在余痕", placeholderEN: "M7B. Residue" }] : []),
            ]
        }
    ];

    const labyrinthSurfaceGroups = [
        {
            index: "01",
            titleCN: "故事摘要",
            titleEN: "STORY SUMMARY",
            noteCN: "故事类型与表层世界",
            noteEN: "Genre and surface world",
            blocks: [
                { id: "skin_genre", placeholderCN: "SUR1. 故事类型", placeholderEN: "SUR1. Genre" },
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
            {renderLabyrinthFormulaHeader("欲望预设", "DESIRE PRESET")}
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
                    {shouldShowM7BResidue && (
                        <>
                            <span>{lang === 'EN' ? ", leaving in the final frame" : "，并在最后一帧留下"}</span>
                            {renderDesireSentenceSlot("engine_m7b", "M7B. 实在余痕", "M7B. Residue")}
                        </>
                    )}
                    <span>{lang === 'EN' ? "." : "。"}</span>
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
            focusState={focusState}
            onFocusStateChange={onFocusStateChange}
            isSmall={true}
            isTiny={isTiny}
            hideAffixes={true}
        />
    );

    const labyrinthSkinSlotProps = {
        fieldState,
        accentColor: 'border-[var(--mist-active-accent)]',
        onOpen: openLibrary,
        onRemove: removeTag,
        lang,
        lockedTags,
        onToggleTagLock,
        onRandomizeTag,
        getItemDetails,
        accentTextColor: 'text-[var(--mist-active-accent)]',
        driverType,
        onRandomizeBlock: handleRandomizeSingleBlock,
        onClearBlock: clearBlock,
        onToggleLockBlock: onToggleLock,
        onAddCustomDef,
        onEditCustomDef,
        onManualUpdate: handleManualUpdate,
        focusState,
        onFocusStateChange,
        hideTooltipCore: true
    };

    const renderLabyrinthSkinSlot = (blockId: string, placeholderCN: string, placeholderEN: string, alignStart = false) => (
        <SkinSlot
            blockId={blockId}
            placeholder={lang === 'EN' ? placeholderEN : placeholderCN}
            isBlockLocked={lockedModules[blockId]}
            alignStart={alignStart}
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
        const currentDisplay = getWorldLawDisplay(worldLawConfig, lang);
        const previewOption = WORLD_LAW_LEVEL_OPTIONS.find(option => option.id === labyrinthWorldLawPreview) || null;
        const showWorldLawPopover = isLabyrinthWorldLawExpanded || isLabyrinthWorldLawClosing;
        const previewLabel = previewOption
            ? (lang === 'EN' ? previewOption.en : previewOption.cn)
            : (lang === 'EN' ? currentDisplay.en : currentDisplay.cn);
        const previewDescription = previewOption
            ? (lang === 'EN' ? previewOption.descEN : previewOption.descCN)
            : (lang === 'EN' ? currentDisplay.descEN : currentDisplay.descCN);

        const setLabyrinthWorldLaw = (value: number) => {
            setWorldLawConfig?.(patchWorldLawConfig(worldLawConfig, value));
            setLabyrinthWorldLawPreview(null);
        };

        const randomizeLabyrinthWorldLaw = (event: React.MouseEvent) => {
            event.stopPropagation();
            if (!setWorldLawConfig) return;
            setWorldLawConfig(randomizeWorldLawConfig(worldLawConfig));
            setLabyrinthWorldLawPreview(null);
        };

        const toggleLabyrinthWorldLaw = () => {
            if (labyrinthWorldLawCloseTimer.current !== null) {
                window.clearTimeout(labyrinthWorldLawCloseTimer.current);
                labyrinthWorldLawCloseTimer.current = null;
            }

            if (isLabyrinthWorldLawExpanded) {
                setIsLabyrinthWorldLawExpanded(false);
                setIsLabyrinthWorldLawClosing(true);
                labyrinthWorldLawCloseTimer.current = window.setTimeout(() => {
                    setIsLabyrinthWorldLawClosing(false);
                    setLabyrinthWorldLawPreview(null);
                    labyrinthWorldLawCloseTimer.current = null;
                }, 520);
                return;
            }

            setIsLabyrinthWorldLawClosing(false);
            setIsLabyrinthWorldLawExpanded(true);
        };

        return (
            <div className={`mist-labyrinth-surface-block mist-labyrinth-foundation-block mist-labyrinth-world-law-block is-level-${currentDisplay.gravity} ${showWorldLawPopover ? 'is-expanded' : ''}`}>
                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "World Law" : "世界法则"}</span>
                <div className="mist-labyrinth-world-law-inline">
                    <button
                        type="button"
                        className="mist-labyrinth-world-law-main-button"
                        onClick={toggleLabyrinthWorldLaw}
                        aria-expanded={isLabyrinthWorldLawExpanded}
                        aria-label={lang === 'EN' ? 'Toggle world law options' : '展开或收起世界法则选项'}
                    >
                        <b className="mist-labyrinth-world-law-token">{lang === 'EN' ? currentDisplay.en : currentDisplay.cn}</b>
                    </button>
                    <button
                        type="button"
                        className="mist-labyrinth-world-law-random"
                        onClick={randomizeLabyrinthWorldLaw}
                        disabled={!setWorldLawConfig}
                        title={lang === 'EN' ? 'Randomize world law' : '随机世界法则'}
                        aria-label={lang === 'EN' ? 'Randomize world law' : '随机世界法则'}
                    >
                        <Dice5 size={16} />
                    </button>
                </div>

                {showWorldLawPopover && (
                    <div className={`mist-labyrinth-world-law-popover ${isLabyrinthWorldLawClosing ? 'is-closing' : ''}`}>
                        <div className="mist-labyrinth-world-law-preview">
                            <div className="mist-labyrinth-world-law-preview-title">
                                <span>{lang === 'EN' ? 'Level' : '等级'}</span>
                                <b>{previewLabel}</b>
                            </div>
                            <p>{previewDescription}</p>
                        </div>
                        <div className="mist-labyrinth-world-law-options">
                            <div className="mist-labyrinth-world-law-axis-row">
                                <div
                                    className="mist-labyrinth-world-law-axis-buttons"
                                    onMouseLeave={() => setLabyrinthWorldLawPreview(null)}
                                >
                                    {WORLD_LAW_LEVEL_OPTIONS.map(option => {
                                        const isActive = option.id === currentDisplay.level;
                                        const label = lang === 'EN' ? option.en : option.cn;

                                        return (
                                            <button
                                                type="button"
                                                key={option.id}
                                                className={isActive ? 'is-active' : ''}
                                                onMouseEnter={() => setLabyrinthWorldLawPreview(option.id)}
                                                onClick={() => setLabyrinthWorldLaw(option.id)}
                                                disabled={!setWorldLawConfig}
                                                aria-pressed={isActive}
                                            >
                                                <b>{label}</b>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
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
                {lang === 'EN' ? "PRESET" : "预设"}
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
        const selectedPairs = blocks.flatMap(blockId => (fieldState[blockId] || []).map(tag => ({ blockId, tag })));
        const isPairLocked = ({ blockId, tag }: { blockId: string; tag: string }) => Boolean(lockedModules[blockId] || lockedTags[blockId]?.includes(tag));
        const isGroupLocked = selectedPairs.length > 0 && selectedPairs.every(isPairLocked);

        const clearGroup = () => {
            const nextState = { ...fieldState };
            blocks.forEach(blockId => {
                const locks = lockedTags[blockId] || [];
                const current = nextState[blockId] || [];
                nextState[blockId] = current.filter(tag => lockedModules[blockId] || locks.includes(tag));
                const removedTags = current.filter(tag => !(nextState[blockId] || []).includes(tag));
                if (removedTags.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, removedTags));
            });
            onChange(nextState);
            if (blocks.includes('skin_gender')) setCustomGenderInput('');
            if (blocks.includes('skin_age')) setCustomAgeInput('');
        };

        const toggleCurrentGroupLocks = () => {
            if (!selectedPairs.length) return;
            const shouldUnlock = selectedPairs.every(isPairLocked);
            blocks.forEach(blockId => {
                if (lockedModules[blockId]) onToggleLock(blockId);
            });
            selectedPairs.forEach(({ blockId, tag }) => {
                const isLocked = Boolean(lockedTags[blockId]?.includes(tag));
                if (shouldUnlock ? isLocked : !isLocked) onToggleTagLock(blockId, tag);
            });
        };

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
                    onClick={toggleCurrentGroupLocks}
                    aria-label={isGroupLocked
                        ? (lang === 'EN' ? "Unlock group" : "解锁本组")
                        : (lang === 'EN' ? "Lock group" : "锁定本组")}
                >
                    {isGroupLocked ? <Lock size={11} /> : <Unlock size={11} />}
                </button>
                <button
                    type="button"
                    onClick={clearGroup}
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
        labels: { random: string; lock: string; unlock: string; clear: string }
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
        </div>
    );

    const renderLabyrinthGenderSlot = () => {
        const genderText = getPresetText(selectedGender, GENDER_PRESETS);
        const hasGender = Boolean(genderText);
        const displayText = hasGender
            ? genderText
            : (lang === 'EN' ? "SUR7. Subject Gender" : "SUR7. 主体性别");

        return renderLabyrinthInlineControlSlot(
            displayText,
            hasGender,
            isGenderValueLocked,
            () => setIsLabyrinthIdentityModalOpen(true),
            handleLabyrinthRandomGender,
            () => selectedGender && onToggleTagLock('skin_gender', selectedGender),
            () => updateLabyrinthIdentity(null, undefined),
            {
                ...buildControlDetails(
                    'skin_gender',
                    lang === 'EN' ? 'Subject gender presentation preset.' : '主体性别与表层呈现预设。',
                    lang === 'EN' ? '[Config] Click to open gender and age panel.' : '【配置协议】点击进入性别与年龄面板。'
                )
            },
            lang === 'EN' ? 'SUR7. Subject Gender' : 'SUR7.主体性别',
            undefined,
            selectedGender ? [['skin_gender', selectedGender]] : []
        );
    };

    const renderLabyrinthAgeSlot = () => {
        const ageText = getAgeDisplay(selectedAge);
        const hasAge = Boolean(ageText);
        const displayText = hasAge
            ? ageText
            : (lang === 'EN' ? "SUR8. Subject Age" : "SUR8. 主体年龄");

        return renderLabyrinthInlineControlSlot(
            displayText,
            hasAge,
            isAgeValueLocked,
            () => setIsLabyrinthIdentityModalOpen(true),
            handleLabyrinthRandomAge,
            () => selectedAge && onToggleTagLock('skin_age', selectedAge),
            () => updateLabyrinthIdentity(undefined, null),
            {
                ...buildControlDetails(
                    'skin_age',
                    lang === 'EN' ? 'Subject age-stage preset.' : '主体年龄阶段预设。',
                    lang === 'EN' ? '[Config] Click to open gender and age panel.' : '【配置协议】点击进入性别与年龄面板。'
                )
            },
            lang === 'EN' ? 'SUR8. Subject Age' : 'SUR8.主体年龄',
            undefined,
            selectedAge ? [['skin_age', selectedAge]] : []
        );
    };

    const renderLabyrinthTimeLocationSlot = () => {
        const hasTimeOrLocation = selectedYear !== null || selectedCountry !== '';
        const countryDisplay = selectedCountry ? getPresetText(selectedCountry, SUR3_SPACE_ANCHOR_PRESETS) : '';
        const displayText = selectedYear !== null
            ? (lang === 'EN'
                ? `${formatYear(selectedYear)}${countryDisplay ? ` ${countryDisplay}` : ''}`
                : `${formatYear(selectedYear, true)}${countryDisplay}`)
            : (selectedCountry
                ? `${countryDisplay} (AUTO)`
                : (lang === 'EN' ? "SUR3. Precise Coordinate" : "SUR3. 精确坐标"));
        const isLocked = [selectedCountry && isCountryValueLocked, selectedYearTag && isYearValueLocked].filter(Boolean).length > 0;

        return renderLabyrinthInlineControlSlot(
            displayText,
            hasTimeOrLocation,
            isLocked,
            () => setIsLabyrinthTimeModalOpen(true),
            handleLabyrinthRandomTimeLocation,
            handleLabyrinthToggleTimeLocationLock,
            handleLabyrinthResetTimeLocation,
            {
                ...buildControlDetails(
                    'skin_era',
                    lang === 'EN' ? 'Precise coordinate calibrator: time anchor, space anchor, reality domain, and scale boundary.' : '精确坐标校准器：时间锚、空间锚、现实域与尺度边界。',
                    lang === 'EN' ? '[Config] Click to open precise coordinate panel.' : '【配置协议】点击进入精确坐标面板。'
                ),
                count: SUR3_COORDINATE_PRESETS.length
            },
            lang === 'EN' ? 'SUR3. Precise Coordinate' : 'SUR3.精确坐标',
            SUR3_COORDINATE_PRESETS.length,
            [
                selectedCountry ? ['skin_country_exact', selectedCountry] : null,
                selectedYearTag ? ['skin_year_exact', selectedYearTag] : null,
            ].filter(Boolean) as Array<[string, string]>
        );
    };

    const stripInlinePlaceholderBrackets = (value: string) =>
        value.trim().replace(/^[\[\［]\s*/, '').replace(/\s*[\]\］]$/, '');

    const formatInlinePlaceholder = (value: string) => {
        const cleanValue = stripInlinePlaceholderBrackets(value);
        return lang === 'EN' ? `[${cleanValue}]` : `【${cleanValue}】`;
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
        count?: number,
        focusEntries: Array<[string, string]> = []
    ) => {
        const focusableEntries = focusEntries.filter(([entryBlockId, tag]) => tag && isFocusableBlock(entryBlockId));
        const hasFocusedEntry = focusableEntries.some(([, tag]) => focusState[tag]);
        const focusLimitReason = getFocusGroupLimitReason(focusableEntries);
        return (
        <span className="mist-labyrinth-inline-control-slot inline-flex flex-wrap items-baseline gap-x-1 mx-1 relative">
            <span
                className="group/tag relative inline-flex flex-col items-start align-top"
                onMouseEnter={(e) => handleMouseEnter(e, details, header, count)}
                onMouseLeave={handleMouseLeave}
            >
                <span className="inline-flex items-baseline">
                <span
                    onClick={onOpen}
                    className={`mist-labyrinth-hover-token ${isFilled ? 'is-filled' : 'is-empty'} ${isLocked ? 'is-locked' : ''} ${hasFocusedEntry ? 'mist-token-focused' : ''} cursor-pointer font-serif font-bold transition-all duration-300 hover:z-50 inline-block ${isLocked
                        ? 'mist-token-locked border border-[var(--mist-active-accent)] text-white bg-[var(--mist-active-accent)]/20 px-2 rounded text-lg md:text-xl tracking-tight'
                        : (isFilled
                            ? 'text-white border-b-2 border-[var(--mist-active-accent)] hover:bg-white/10 px-0.5 rounded-sm text-lg md:text-xl tracking-tight'
                            : 'font-medium border-b border-dashed border-zinc-800 text-zinc-500 hover:text-white hover:bg-white/10 hover:border-zinc-500 text-base')
                        }`}
                >
                    {isFilled ? displayText : formatInlinePlaceholder(displayText)}
                </span>
                {hasFocusedEntry && (
                    <span className="mist-token-focus-badge" title={lang === 'EN' ? 'Focused term' : '重点词条'}>
                        <Star size={11} className="fill-current" />
                    </span>
                )}
                {isFilled && (
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onClear(); }}
                        disabled={isLocked}
                        title={lang === 'EN' ? 'Remove' : '删除'}
                        aria-label={lang === 'EN' ? `Remove ${displayText}` : `删除 ${displayText}`}
                        className={`ml-1 inline-flex h-5 w-5 items-center justify-center opacity-0 group-hover/tag:opacity-100 transition-colors duration-200 text-zinc-500 hover:text-red-400 ${isLocked ? 'opacity-20 cursor-not-allowed group-hover/tag:opacity-20' : ''}`}
                    >
                        <X size={16} strokeWidth={2.6} />
                    </button>
                )}
                </span>
                <div className="mist-labyrinth-inline-control-actions flex items-center gap-1 mt-1 z-10 bg-black/80 rounded p-1 border border-zinc-800 shadow-md opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300">
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
                        className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white rounded transition-colors ${isLocked ? 'border-[var(--mist-active-accent)] text-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]/20' : ''}`}
                    >
                        {isLocked ? <Lock size={10} /> : <Unlock size={10} />}
                    </button>
                    {!isFilled && (
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); onOpen(); }}
                            disabled={isLocked}
                            className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white rounded transition-colors ${isLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                        >
                            <Edit2 size={10} />
                        </button>
                    )}
                    {focusableEntries.length > 0 && (
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); toggleFocusTags(focusableEntries); }}
                            disabled={Boolean(focusLimitReason)}
                            title={focusLimitReason ? getFocusLimitTitle(focusLimitReason) : (lang === 'EN' ? 'Focus' : '重点')}
                            className={`flex items-center justify-center p-0.5 bg-zinc-900 border rounded transition-colors ${hasFocusedEntry ? 'border-[var(--mist-active-accent)] text-[var(--mist-active-accent)] bg-[rgba(var(--mist-active-accent-rgb),0.10)]' : 'border-zinc-700 text-zinc-400 hover:border-[var(--mist-active-accent)] hover:bg-[rgba(var(--mist-active-accent-rgb),0.10)] hover:text-[var(--mist-active-accent)]'} ${focusLimitReason ? 'opacity-30 cursor-not-allowed' : ''}`}
                        >
                            <Star size={10} className={hasFocusedEntry ? 'fill-current' : ''} />
                        </button>
                    )}
                </div>
            </span>
        </span>
    );
    };

    const renderLabyrinthSummaryTimeSlot = () => {
        const hasTimeOrLocation = selectedYear !== null || selectedCountry !== '';
        const countryDisplay = selectedCountry ? getPresetText(selectedCountry, SUR3_SPACE_ANCHOR_PRESETS) : '';
        const displayText = selectedYear !== null
            ? (lang === 'EN'
                ? `${formatYear(selectedYear)}${countryDisplay ? ` ${countryDisplay}` : ''}`
                : `${formatYear(selectedYear, true)}${countryDisplay}`)
            : (selectedCountry
                ? `${countryDisplay} (AUTO)`
                : (lang === 'EN' ? "Precise Coordinate" : "精确坐标"));

        return renderLabyrinthInlineControlSlot(
            displayText,
            hasTimeOrLocation,
            [selectedCountry && isCountryValueLocked, selectedYearTag && isYearValueLocked].filter(Boolean).length > 0,
            () => setIsLabyrinthTimeModalOpen(true),
            handleLabyrinthRandomTimeLocation,
            handleLabyrinthToggleTimeLocationLock,
            handleLabyrinthResetTimeLocation,
            {
                ...buildControlDetails(
                    'skin_era',
                    lang === 'EN' ? 'Precise coordinate calibrator: time anchor, space anchor, reality domain, and scale boundary.' : '精确坐标校准器：时间锚、空间锚、现实域与尺度边界。',
                    lang === 'EN' ? '[Config] Click to open precise coordinate panel.' : '【配置协议】点击进入精确坐标面板。'
                )
            },
            lang === 'EN' ? 'SUR3. Precise Coordinate' : 'SUR3.精确坐标',
            SUR3_COORDINATE_PRESETS.length,
            [
                selectedCountry ? ['skin_country_exact', selectedCountry] : null,
                selectedYearTag ? ['skin_year_exact', selectedYearTag] : null,
            ].filter(Boolean) as Array<[string, string]>
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
            [selectedGender && isGenderValueLocked, selectedAge && isAgeValueLocked].filter(Boolean).length > 0,
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
            lang === 'EN' ? 'SUR7/8. Gender & Age' : 'SUR7/8.性别与年龄',
            undefined,
            [
                selectedGender ? ['skin_gender', selectedGender] : null,
                selectedAge ? ['skin_age', selectedAge] : null,
            ].filter(Boolean) as Array<[string, string]>
        );
    };

    const hasBlockValue = (ids: string[]) => ids.some(id => (fieldState[id] || []).length > 0);

    const renderLabyrinthSummarySentence = () => {
        const hasGenre = hasBlockValue(['skin_genre']);
        const hasFrame = hasGenre;
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
                        {(showExpanded || hasGenre) && renderLabyrinthSkinSlot("skin_genre", "故事类型", "Genre", true)}
                        <span>{lang === 'EN' ? ", " : "为表层类型，"}</span>
                    </div>
                )}

                {((showExpanded || hasTime || hasEra) || (showExpanded || hasSociety)) && (
                    <div className="mist-labyrinth-summary-line">
                        {(showExpanded || hasTime || hasEra) && (
                            <>
                                <span>{lang === 'EN' ? "In " : "在"}</span>
                                {(showExpanded || hasTime) && renderLabyrinthSummaryTimeSlot()}
                                {(showExpanded || hasTime) && (showExpanded || hasEra) && <span>{lang === 'EN' ? " of " : "的"}</span>}
                                {(showExpanded || hasEra) && renderLabyrinthSkinSlot("skin_era", "背景场域", "Background", true)}
                                {(showExpanded || hasEra) && lastVisibleFragment !== 'A' && <span>{lang === 'EN' ? " world, " : "世界中，"}</span>}
                                {(showExpanded || hasEra) && lastVisibleFragment === 'A' && <span>{lang === 'EN' ? " world" : "世界中"}</span>}
                                {!(showExpanded || hasEra) && lastVisibleFragment !== 'A' && <span>，</span>}
                            </>
                        )}
                        {(showExpanded || hasSociety) && (
                            <>
                                <span>{lang === 'EN' ? "society under " : "运行于"}</span>
                                {renderLabyrinthSkinSlot("skin_society", "社会形态", "Social Order", true)}
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
                                {(showExpanded || hasProfession) && renderLabyrinthSkinSlot("skin_profession", "职业身份", "Role Preset", true)}
                                {lastVisibleFragment !== 'C' && <span>，</span>}
                            </>
                        )}
                        {(showExpanded || hasFracture || hasBelief) && (
                            <>
                                <span>{lang === 'EN' ? "with " : "带着"}</span>
                                {(showExpanded || hasFracture) && renderLabyrinthSkinSlot("sur10x", "信念裂度", "Fracture", true)}
                                {(showExpanded || hasFracture) && (showExpanded || hasBelief) && <span>{lang === 'EN' ? " towards " : "的"}</span>}
                                {(showExpanded || hasBelief) && renderLabyrinthSkinSlot("skin_ideology", "信念预设", "Belief Preset", true)}
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
                                {renderLabyrinthSkinSlot("skin_everything", "对象预设", "Object Anchor", true)}
                                <span>{lastVisibleFragment === 'E' ? (lang === 'EN' ? "" : "展开") : (lang === 'EN' ? ", " : "展开，")}</span>
                            </>
                        )}
                        {(showExpanded || hasSpace) && (
                            <>
                        <span>{lang === 'EN' ? "set in " : "事件发生于"}</span>
                                {renderLabyrinthSkinSlot("skin_location", "空间容器", "Space Container", true)}
                                <span>{lastVisibleFragment === 'F' ? "" : (lang === 'EN' ? ", " : "，")}</span>
                            </>
                        )}
                        {(showExpanded || hasEnding) && (
                            <>
                        <span>{lang === 'EN' ? "culminating in " : "最终走向"}</span>
                                {renderLabyrinthSkinSlot("skin_ending", "显性收场", "Visible Ending", true)}
                            </>
                        )}
                        {(showExpanded || hasAnyFragment) && <span>{lang === 'EN' ? " story." : "的故事。"}</span>}
                    </div>
                )}

                {!showExpanded && !hasAnyFragment && (
                    <span className="mist-labyrinth-surface-sentence-empty">
                        {lang === 'EN' ? 'Click + to expand preset keywords.' : '点击 + 展开可选预设关键词'}
                    </span>
                )}
            </div>
        );
    };

    const renderLabyrinthTimeModal = () => {
        const currentYear = selectedYear === null ? TIMELINE_YEAR_NOW : clampTimelineYear(selectedYear);
        const yearInputValue = labyrinthYearInputDraft ?? (selectedYear === null ? '' : String(selectedYear));
        return (
            <div className="mist-labyrinth-identity-modal">
                <div className="mist-labyrinth-identity-panel mist-labyrinth-time-panel">
                    <button
                        type="button"
                        className="mist-labyrinth-identity-close"
                        onClick={closeLabyrinthTimeModal}
                        aria-label={lang === 'EN' ? "Close spacetime panel" : "关闭时空面板"}
                    >
                        <X size={18} />
                    </button>
                    <div className="mist-labyrinth-identity-head">
                        <Ghost size={19} />
                        <h3>{lang === 'EN' ? "SUR3. Precise Coordinate" : "SUR3.精确坐标"}</h3>
                    </div>
                    <div className="mist-labyrinth-identity-body">
                        <section className="mist-labyrinth-identity-section">
                            <div className="mist-labyrinth-identity-section-head">
                                <span>{lang === 'EN' ? "Space Anchor" : "空间锚点"}</span>
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
                                    placeholder={lang === 'EN' ? "Region / planet / dimension / scale" : "地域 / 星球 / 维度 / 尺度"}
                                    onChange={(event) => updateLabyrinthTimeLocation(event.target.value, undefined)}
                                />
                            </div>
                            <div className="mist-labyrinth-country-list">
                                {SUR3_SPACE_ANCHOR_PRESETS.map(country => {
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
                                <span>{lang === 'EN' ? "Time Anchor" : "时间锚点"}</span>
                                <div className="mist-labyrinth-identity-tools">
                                    <button type="button" onClick={handleLabyrinthRandomYear} disabled={isYearLocked}><Dice5 size={12} /></button>
                                    <button type="button" onClick={() => onToggleLock('skin_year_exact')} className={isYearLocked ? 'is-locked' : ''}>{isYearLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, null)} disabled={isYearLocked}><Trash2 size={12} /></button>
                                </div>
                            </div>
                            <div className="mist-labyrinth-year-readout">
                                <span className="mist-labyrinth-year-readout-value">
                                    {selectedYear === null ? (lang === 'EN' ? "AUTO" : "自动") : formatYear(selectedYear, true)}
                                </span>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={yearInputValue}
                                    disabled={isYearLocked}
                                    placeholder="1840 / -221"
                                    aria-label={lang === 'EN' ? "Manual year input" : "手动输入年份"}
                                    aria-invalid={labyrinthYearInputInvalid}
                                    className={`mist-labyrinth-year-manual-input ${labyrinthYearInputInvalid ? 'is-invalid' : ''}`}
                                    onFocus={() => {
                                        setLabyrinthYearInputDraft(selectedYear === null ? '' : String(selectedYear));
                                        setLabyrinthYearInputInvalid(false);
                                    }}
                                    onChange={(event) => {
                                        setLabyrinthYearInputDraft(event.target.value);
                                        setLabyrinthYearInputInvalid(false);
                                    }}
                                    onBlur={(event) => commitLabyrinthYearInput(event.currentTarget.value)}
                                    onKeyDown={handleLabyrinthYearInputKeyDown}
                                />
                            </div>
                            <input
                                type="range"
                                min={TIMELINE_YEAR_MIN}
                                max={TIMELINE_YEAR_MAX}
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
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, TIMELINE_YEAR_NOW)}>Now</button>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, currentYear + 1)}>+1</button>
                                    <button type="button" onClick={() => updateLabyrinthTimeLocation(undefined, currentYear + 10)}>+10</button>
                                </div>
                                <span>2300</span>
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
                            onClick={closeLabyrinthTimeModal}
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
        const isAgeCustom = Boolean(selectedAge) && !findAgePreset(selectedAge);

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
                                    const isActive = findAgePreset(selectedAge)?.id === item.id;
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

    const labyrinthVisionCandidateGroups = getLabyrinthVisionCandidateGroups();
    const hasLabyrinthVisionCandidates = labyrinthVisionCandidateGroups.engine.length > 0 || labyrinthVisionCandidateGroups.surface.length > 0;

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

    const handleLabyrinthVisionAutoFill = async () => {
        if (!visionImplantEnabled || !onVisionAutoFill) return;
        await onVisionAutoFill();
        setIsLabyrinthVisionResultOpen(true);
    };

    const handleLabyrinthAnalyzeAndMap = async () => {
        if (!visionImplantEnabled || !onVisionAutoFill) return;
        await handleLabyrinthVisionAutoFill();
    };

    const getLabyrinthVisionTextContext = () => {
        const parts: string[] = [];
        if (customTextSeed.trim()) parts.push(`【最高优先级：创意灵感 / 用户补充】\n${customTextSeed.trim()}`);
        if (visionImage) {
            parts.push(`【图像通用反推】\n请根据用户文字与图像本身，自行判断哪些是必须保留的图像事实，哪些只是氛围/构图/材质参考，哪些可以被用户文字替换。用户文字最高优先。`);
        }
        if (visionImageNote.trim()) parts.push(`【图片解析提示】\n${visionImageNote.trim()}`);
        return parts.join('\n\n');
    };

    const getLabyrinthImageAnalysisPromptPayload = () => buildNarrativeDiagnosisPrompt(getLabyrinthVisionTextContext(), Boolean(visionImage));

    const getLabyrinthVisionMappingPromptPayload = () => buildAutoFillPrompt(driverType, getLabyrinthVisionTextContext(), Boolean(visionImage), visionAnalysis);

    const renderLabyrinthVisionResultModal = () => {
        const totalCandidateCount = getLabyrinthVisionCandidateEntries().reduce((sum, [, tags]) => sum + tags.length, 0);
        const selectedCandidateCount = countLabyrinthStateTerms(selectedLabyrinthVisionCandidates);
        const hasSelectedCandidates = selectedCandidateCount > 0;
        const renderCandidateColumn = (title: string, entries: Array<[string, string[]]>) => {
            return (
            <div className="mist-labyrinth-vision-candidate-column">
                <div className="mist-labyrinth-vision-candidate-column-head">
                    <span>{title}</span>
                </div>
                <div className="mist-labyrinth-vision-candidate-list">
                    {entries.length === 0 ? (
                        <p>{lang === 'EN' ? 'No candidates yet.' : '暂无候选。'}</p>
                    ) : entries.map(([candidateBlockId, tags]) => (
                        <div key={candidateBlockId} className="mist-labyrinth-vision-candidate-block">
                            <b>{getBlockName(candidateBlockId, lang)}</b>
                            <div>
                                {tags.map(tag => {
                                    const isSelected = Boolean(selectedLabyrinthVisionCandidates[candidateBlockId]?.includes(tag));
                                    return (
                                        <button
                                            key={`${candidateBlockId}-${tag}`}
                                            type="button"
                                            className={`mist-labyrinth-vision-candidate-token ${isSelected ? 'is-selected' : ''}`}
                                            aria-pressed={isSelected}
                                            onClick={() => handleLabyrinthToggleVisionCandidate(candidateBlockId, tag)}
                                        >
                                            <span>{tag}</span>
                                            {isSelected && <Check size={11} />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            );
        };
        const isVisionPreviewMode = labyrinthVisionResultMode === 'preview';
        const labyrinthVisionAnalysisText = buildLabyrinthVisionAnalysisText(labyrinthVisionModules);
        const hasLabyrinthVisionAnalysisContent = labyrinthVisionModules.some(section => section.content.trim());

        return createPortal(
        <div className="mist-labyrinth-vision-result-modal" role="dialog" aria-modal="true" aria-label={lang === 'EN' ? "Image analysis result" : "图像解析返回"}>
            <div className="mist-labyrinth-vision-result-panel mist-labyrinth-vision-result-panel-wide">
                <button
                    type="button"
                    className="mist-labyrinth-vision-result-close"
                    onClick={() => setIsLabyrinthVisionResultOpen(false)}
                    aria-label={lang === 'EN' ? "Close" : "关闭"}
                >
                    <X size={18} />
                </button>
                <div className="mist-labyrinth-vision-result-head">
                    <div className="mist-labyrinth-vision-result-title">
                        <span>{lang === 'EN' ? "IMAGE DIAGNOSIS PIPELINE" : "图像解析工作流"}</span>
                        <h3>{lang === 'EN' ? "Review, Edit, Then Map Parameters" : "先确认解析，再反推映射参数"}</h3>
                        <p>{lang === 'EN'
                            ? 'The image analysis opens as a clean preview. Switch to edit only when you need to revise the confirmed source text.'
                            : '默认以预览模式查看解析结果；需要修订时再切换编辑，反推/映射引擎会以这份确认后的文本为源头。'}</p>
                    </div>
                    <div className="mist-labyrinth-vision-result-tools">
                        <div className="mist-labyrinth-vision-mode-toggle" role="group" aria-label={lang === 'EN' ? 'Result mode' : '查看模式'}>
                            <AdminXRayButton
                                isAdmin={isAdmin}
                                lang={lang === 'EN' ? 'EN' : 'CN'}
                                title={lang === 'EN' ? 'X-Ray Mapping Prompt' : 'X-Ray 映射指令'}
                                getPayload={getLabyrinthVisionMappingPromptPayload}
                                disabled={!visionImplantEnabled || (!visionAnalysis?.trim() && !visionImage)}
                                buttonClassName="mist-labyrinth-vision-mode-xray-button"
                                iconSize={13}
                            />
                            <button
                                type="button"
                                className={isVisionPreviewMode ? 'is-active' : ''}
                                onClick={() => setLabyrinthVisionResultMode('preview')}
                            >
                                <Eye size={13} />
                                {lang === 'EN' ? 'Preview' : '预览'}
                            </button>
                            <button
                                type="button"
                                className={!isVisionPreviewMode ? 'is-active' : ''}
                                onClick={() => setLabyrinthVisionResultMode('edit')}
                            >
                                <Edit2 size={13} />
                                {lang === 'EN' ? 'Edit' : '编辑'}
                            </button>
                        </div>
                        <button
                            type="button"
                            className={`mist-labyrinth-vision-copy-button ${labyrinthVisionCopiedTarget === 'all' ? 'is-copied' : ''}`}
                            disabled={!hasLabyrinthVisionAnalysisContent}
                            onClick={() => handleLabyrinthVisionCopy(labyrinthVisionAnalysisText, 'all')}
                        >
                            {labyrinthVisionCopiedTarget === 'all' ? <Check size={13} /> : <Copy size={13} />}
                            {labyrinthVisionCopiedTarget === 'all'
                                ? (lang === 'EN' ? 'Copied' : '已复制')
                                : (lang === 'EN' ? 'Copy All' : '复制全部')}
                        </button>
                        {hasLabyrinthVisionCandidates && (
                            <button
                                type="button"
                                className={`mist-labyrinth-vision-apply-button ${labyrinthVisionActionFlash === 'apply-selected' ? 'is-flashing' : ''}`}
                                disabled={!hasSelectedCandidates}
                                title={lang === 'EN' ? 'Apply selected parameters to the engine' : '把当前已选参数写入引擎'}
                                onClick={() => handleLabyrinthApplySelectedVisionCandidates('all')}
                            >
                                <Check size={13} />
                                {lang === 'EN' ? 'Apply Params' : '应用参数'}
                            </button>
                        )}
                    </div>
                </div>
                <div className="mist-labyrinth-vision-result-body">
                    <div className="mist-labyrinth-vision-workbench">
                        <aside className={`mist-labyrinth-vision-reference ${visionImage ? 'has-image' : 'is-empty'}`}>
                            <div className="mist-labyrinth-vision-reference-head">
                                <span>{lang === 'EN' ? 'REFERENCE IMAGE' : '视觉参考图'}</span>
                                <b>{lang === 'EN' ? 'Source locked before mapping' : '先锁定母图，再反推映射'}</b>
                            </div>
                            <div className="mist-labyrinth-vision-reference-frame">
                                {visionImage ? (
                                    <img src={visionImage} alt={lang === 'EN' ? 'Uploaded visual reference' : '上传的视觉参考图'} />
                                ) : (
                                    <div className="mist-labyrinth-vision-reference-placeholder">
                                        <ImageIcon size={22} />
                                        <span>{lang === 'EN' ? 'No image uploaded' : '尚未上传图片'}</span>
                                    </div>
                                )}
                            </div>
                            <div className="mist-labyrinth-vision-reference-note">
                                <span>{lang === 'EN' ? 'IMAGE NOTE' : '图片解析提示'}</span>
                                <p>{visionImageNote.trim() || (lang === 'EN' ? 'No extra note.' : '暂无额外提示。')}</p>
                            </div>
                        </aside>
                        <section className="mist-labyrinth-vision-analysis-pane">
                            {isAnalyzingImage && !visionAnalysis?.trim() ? (
                                <div className="mist-labyrinth-vision-empty-state">
                                    <RotateCw size={18} className="animate-spin" />
                                    <span>{lang === 'EN' ? "Decoding image..." : "正在解析图像..."}</span>
                                </div>
                            ) : (
                                <>
                                    <div className="mist-labyrinth-vision-module-grid">
                                        {labyrinthVisionModules.map((section, index) => (
                                            <article
                                                key={section.key}
                                                className={`mist-labyrinth-vision-module-card is-${section.key}`}
                                            >
                                                <div className="mist-labyrinth-vision-module-head">
                                                    <span>
                                                        <b>{String(index + 1).padStart(2, '0')}</b>
                                                        {lang === 'EN' ? section.en : section.cn}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className={labyrinthVisionCopiedTarget === section.key ? 'is-copied' : ''}
                                                        disabled={!section.content.trim()}
                                                        onClick={() => handleLabyrinthVisionCopy(buildLabyrinthVisionModuleCopyText(section), section.key)}
                                                    >
                                                        {labyrinthVisionCopiedTarget === section.key ? <Check size={12} /> : <Copy size={12} />}
                                                        {labyrinthVisionCopiedTarget === section.key
                                                            ? (lang === 'EN' ? 'Copied' : '已复制')
                                                            : (lang === 'EN' ? 'Copy' : '复制')}
                                                    </button>
                                                </div>
                                                {isVisionPreviewMode ? (
                                                    renderLabyrinthVisionPreview(section.content, lang === 'EN' ? section.en : section.cn)
                                                ) : (
                                                    <textarea
                                                        ref={(node) => { labyrinthVisionTextareaRefs.current[section.key] = node; }}
                                                        rows={1}
                                                        value={section.content}
                                                        aria-label={lang === 'EN' ? section.en : section.cn}
                                                        onChange={(event) => updateLabyrinthVisionModule(section.key, event.target.value)}
                                                        placeholder={lang === 'EN'
                                                            ? `Edit ${section.en.toLowerCase()} here...`
                                                            : `在这里填写/修改「${section.cn}」...`}
                                                    />
                                                )}
                                            </article>
                                        ))}
                                    </div>
                                    {hasLabyrinthVisionCandidates && (
                                        <div className="mist-labyrinth-vision-candidates-panel">
                                            <div className="mist-labyrinth-vision-candidates-head">
                                                <div>
                                                    <span>{lang === 'EN' ? 'MAPPED PARAMETER CANDIDATES' : '已反推的参数候选'}</span>
                                                    <b>{lang === 'EN' ? `${totalCandidateCount} candidates · ${selectedCandidateCount} selected` : `基于确认解析生成 ${totalCandidateCount} 个候选 · 已选 ${selectedCandidateCount}`}</b>
                                                </div>
                                                <div className="mist-labyrinth-vision-candidates-actions">
                                                    <div className="mist-labyrinth-vision-candidates-action-group">
                                                        <span>{lang === 'EN' ? 'Preselect' : '预选'}</span>
                                                        <button
                                                            type="button"
                                                            className={labyrinthVisionActionFlash === 'preset' ? 'is-flashing' : ''}
                                                            title={lang === 'EN' ? 'Randomly preselect candidates without applying them' : '在候选池里随机预选，不直接写入主参数'}
                                                            onClick={handleLabyrinthVisionRandomPreset}
                                                        >
                                                            <Shuffle size={12} />
                                                            {lang === 'EN' ? 'Random Select' : '随机预选'}
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={labyrinthVisionActionFlash === 'clear-selected' ? 'is-flashing' : ''}
                                                            disabled={!hasSelectedCandidates}
                                                            title={lang === 'EN' ? 'Clear only the current selection' : '只清空当前勾选，不删除候选'}
                                                            onClick={handleLabyrinthClearSelectedVisionCandidates}
                                                        >
                                                            <Trash2 size={12} />
                                                            {lang === 'EN' ? 'Clear Selected' : '清空所选'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mist-labyrinth-vision-candidate-grid">
                                                {renderCandidateColumn(lang === 'EN' ? 'Deep Story Engine' : '深层叙事参数', labyrinthVisionCandidateGroups.engine)}
                                                {renderCandidateColumn(lang === 'EN' ? 'Surface / SV' : '表层 / SV', labyrinthVisionCandidateGroups.surface)}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>,
        document.body
        );
    };

    const renderLabyrinthImageImplant = () => (
        <article className={`mist-labyrinth-surface-card mist-labyrinth-implant-card ${visionImplantEnabled ? 'is-implant-enabled' : 'is-implant-disabled'}`}>
            <div className="mist-labyrinth-surface-card-header mist-labyrinth-implant-header">
                <div className="mist-labyrinth-implant-title">
                    <div className="mist-labyrinth-implant-title-row">
                        <h4>{lang === 'EN' ? "Implant Symptoms" : "植入症候"}</h4>
                        <button
                            type="button"
                            className={`mist-labyrinth-implant-icon-button mist-labyrinth-implant-toggle-button ${visionImplantEnabled ? 'is-on' : 'is-off'}`}
                            onClick={() => onVisionImplantEnabledChange?.(!visionImplantEnabled)}
                            aria-pressed={visionImplantEnabled}
                            aria-label={visionImplantEnabled
                                ? (lang === 'EN' ? 'Disable implant' : '关闭植入症候')
                                : (lang === 'EN' ? 'Enable implant' : '开启植入症候')}
                            title={lang === 'EN' ? (visionImplantEnabled ? "ON" : "OFF") : (visionImplantEnabled ? "开启" : "关闭")}
                        >
                            <Power size={13} />
                            <span className="mist-sr-only">{lang === 'EN' ? (visionImplantEnabled ? "OFF" : "ON") : (visionImplantEnabled ? "关闭" : "开启")}</span>
                        </button>
                        <button
                            type="button"
                            className={`mist-labyrinth-implant-icon-button mist-labyrinth-implant-result-button ${visionAnalysis?.trim() ? 'is-ready' : ''}`}
                            onClick={() => setIsLabyrinthVisionResultOpen(true)}
                            aria-label={lang === 'EN' ? "View result" : "查看返回"}
                            title={lang === 'EN' ? "View result" : "查看返回"}
                        >
                            <Eye size={13} />
                            <span className="mist-sr-only">{lang === 'EN' ? "RESULT" : "查看返回"}</span>
                        </button>
                    </div>
                </div>
                <div className="mist-labyrinth-surface-header-tools mist-labyrinth-implant-header-actions">
                    <AdminXRayButton
                        isAdmin={isAdmin}
                        lang={lang === 'EN' ? 'EN' : 'CN'}
                        title={lang === 'EN' ? 'X-Ray Image Analysis Prompt' : 'X-Ray 图像解析指令'}
                        getPayload={getLabyrinthImageAnalysisPromptPayload}
                        disabled={!visionImplantEnabled || !visionImage}
                        buttonClassName="mist-labyrinth-implant-xray-button mist-labyrinth-image-action-button"
                        iconSize={13}
                    />
                    <button
                        type="button"
                        className="mist-labyrinth-implant-analyze-button mist-traverse-action flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed group border mist-app-primary-action"
                        style={{ boxShadow: 'none', height: '1.45rem' }}
                        disabled={!visionImplantEnabled || !onVisionAutoFill || isAnalyzingImage || isVisionAutoFilling || !visionImage}
                        onClick={handleLabyrinthAnalyzeAndMap}
                        title={lang === 'EN' ? "Analyze" : "解析"}
                    >
                        {(isAnalyzingImage || isVisionAutoFilling) ? <RotateCw size={10} className="animate-spin" /> : <Zap size={10} className="group-hover:scale-110 transition-transform" />}
                        <span className="tabular-nums w-full text-center tracking-[0.1em]">
                            {lang === 'EN' ? "Analyze" : "解析"}
                        </span>
                        {!(isAnalyzingImage || isVisionAutoFilling) && <ChevronRight size={9} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                </div>
            </div>

            <div className="mist-labyrinth-image-implant">
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
                                <div className="mist-labyrinth-image-corner-actions">
                                    <button
                                        className="mist-labyrinth-image-icon-button"
                                        type="button"
                                        onClick={() => labyrinthImageInputRef.current?.click()}
                                        title={lang === 'EN' ? "Replace image" : "替换图片"}
                                        aria-label={lang === 'EN' ? "Replace image" : "替换图片"}
                                    >
                                        <Upload size={14} />
                                    </button>
                                    <button
                                        type="button"
                                        className="mist-labyrinth-image-icon-button is-danger"
                                        onClick={() => {
                                            onVisionImageChange?.(null);
                                            onVisionAnalysisChange?.('');
                                            onClearVisionCandidateState?.();
                                        }}
                                        title={lang === 'EN' ? "Remove image" : "移除图片"}
                                        aria-label={lang === 'EN' ? "Remove image" : "移除图片"}
                                    >
                                        <Trash2 size={14} />
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
            </div>
        </article>
    );

    const renderLabyrinthFoundationCard = () => (
        <article className="mist-labyrinth-surface-card mist-labyrinth-foundation-card">
            <div className="mist-labyrinth-surface-card-header">
                <h4>{lang === 'EN' ? "Story Foundation" : "故事基底"}</h4>
            </div>
            <div className="mist-labyrinth-foundation-body">
                <div className="mist-labyrinth-surface-blocks mist-labyrinth-surface-summary-slots mist-labyrinth-foundation-slots">
                    {isLabyrinth && renderLabyrinthWorldLawModule()}
                    <div className="mist-labyrinth-surface-block mist-labyrinth-foundation-block">
                        <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Structure" : "故事结构"}</span>
                        {renderLabyrinthSkinSlot("skin_structure", "SV1. 叙事结构", "SV1. Structure")}
                    </div>
                    <div className="mist-labyrinth-surface-block mist-labyrinth-surface-volume-block mist-labyrinth-foundation-block">
                        <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Runtime" : "故事体量"}</span>
                        {renderLabyrinthSkinSlot("skin_volume", "SV2. 时长/容量", "SV2. Runtime")}
                    </div>
                    <label className="mist-labyrinth-surface-block mist-labyrinth-foundation-block mist-labyrinth-foundation-creative-block">
                        <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Inspiration" : "创意灵感"}</span>
                        {renderLabyrinthSurfaceTextSeed()}
                    </label>
                </div>
            </div>
        </article>
    );

    const renderLabyrinthSurfaceDeck = () => (
        <div className="mist-labyrinth-surface-grid">
            {renderLabyrinthFoundationCard()}

            <article className="mist-labyrinth-surface-card mist-labyrinth-surface-summary-card">
                <div className="mist-labyrinth-surface-card-header">
                    <h4>{lang === 'EN' ? "Story Summary" : "故事摘要"}</h4>
                    <div className="mist-labyrinth-surface-header-tools">
                        {renderSelectionStats(labyrinthSummaryStats, 'is-compact')}
                        {renderSurfaceModeToggle(labyrinthSummaryMode, setLabyrinthSummaryMode)}
                        <div className="mist-labyrinth-surface-actions">
                            <button
                                type="button"
                                className={labyrinthSummaryExpanded ? 'is-locked' : ''}
                                onClick={() => setLabyrinthSummaryExpanded(!labyrinthSummaryExpanded)}
                                aria-label={labyrinthSummaryExpanded
                                    ? (lang === 'EN' ? "Collapse summary" : "折叠摘要")
                                    : (lang === 'EN' ? "Expand summary" : "展开摘要")}
                            >
                                {labyrinthSummaryExpanded ? <X size={11} /> : <Plus size={11} />}
                            </button>
                        </div>
                        {renderSurfaceGroupActions(storySummaryBlocks, onRandomizeSummaryGroup)}
                    </div>
                </div>
                <div className="mist-labyrinth-surface-summary-body">
                    {labyrinthSummaryMode === 'module' ? (
                        !labyrinthSummaryExpanded && !hasBlockValue(['skin_genre', 'skin_era', 'skin_society', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending']) &&
                        selectedYear === null && selectedCountry === '' && selectedGender === '' && selectedAge === '' ? (
                            <div className="mist-labyrinth-surface-sentence mist-labyrinth-summary-sentence is-collapsed">
                                <span className="mist-labyrinth-surface-sentence-empty">
                                    {lang === 'EN' ? 'Click + to expand preset keywords.' : '点击 + 展开可选预设关键词'}
                                </span>
                            </div>
                        ) : (
                            <div className="mist-labyrinth-surface-blocks mist-labyrinth-surface-summary-slots">
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_genre'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Genre" : "故事类型"}</span>
                                {renderLabyrinthSkinSlot("skin_genre", "SUR1. 故事类型", "SUR1. Genre")}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_era'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Field" : "背景场域"}</span>
                                {renderLabyrinthSkinSlot("skin_era", "SUR2. 背景场域", "SUR2. Field")}
                            </div>}
                            {(labyrinthSummaryExpanded || selectedYear !== null || selectedCountry !== '') && <div className="mist-labyrinth-surface-block mist-labyrinth-surface-static-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Coordinate" : "精确坐标"}</span>
                                {renderLabyrinthTimeLocationSlot()}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_society'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Order" : "社会形态"}</span>
                                {renderLabyrinthSkinSlot("skin_society", "SUR4. 社会形态", "SUR4. Order")}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_everything'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Object" : "对象预设"}</span>
                                {renderLabyrinthSkinSlot("skin_everything", "SUR5. 对象预设", "SUR5. Object")}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_location'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Space" : "空间容器"}</span>
                                {renderLabyrinthSkinSlot("skin_location", "SUR6. 空间容器", "SUR6. Space")}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_gender'])) && <div className="mist-labyrinth-surface-block mist-labyrinth-surface-identity-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Gender" : "主体性别"}</span>
                                {renderLabyrinthGenderSlot()}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_age'])) && <div className="mist-labyrinth-surface-block mist-labyrinth-surface-identity-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Age" : "主体年龄"}</span>
                                {renderLabyrinthAgeSlot()}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_profession'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Role" : "职业身份"}</span>
                                {renderLabyrinthSkinSlot("skin_profession", "SUR9. 职业身份", "SUR9. Role")}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_ideology'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Belief" : "信念预设"}</span>
                                {renderLabyrinthSkinSlot("skin_ideology", "SUR10. 信念预设", "SUR10. Belief")}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['sur10x'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Fracture" : "信念裂度"}</span>
                                {renderLabyrinthSkinSlot("sur10x", "SUR10X. 信念裂度", "SUR10X. Fracture")}
                            </div>}
                            {(labyrinthSummaryExpanded || hasBlockValue(['skin_ending'])) && <div className="mist-labyrinth-surface-block">
                                <span className="mist-labyrinth-surface-label">{lang === 'EN' ? "Ending" : "显性收场"}</span>
                                {renderLabyrinthSkinSlot("skin_ending", "SUR-END. 显性收场", "SUR-END. Ending")}
                            </div>}
                        </div>
                    )
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
                        <div
                            key={`labyrinth-rings-${showRings ? 'active' : 'exit'}`}
                            className={`mist-labyrinth-rings ${showRings ? 'is-active' : 'is-exiting'}`}
                            aria-hidden="true"
                        >
                            <BorromeanRings
                                fieldState={fieldState}
                                lang={lang}
                                driverType={driverType}
                                opacity={theme === 'retro' ? 0.3 : 0.7}
                                centered={true}
                                vivid={true}
                            />
                        </div>
                        <div className="mist-labyrinth-screen-grid" aria-hidden="true" />
                        <div className="mist-labyrinth-title-block">
                            <h2 className="mist-labyrinth-title mist-engine-title mist-title-shadow" data-title={getEngineTitle()}>
                                {getEngineTitle()}
                            </h2>
                            <p className="mist-labyrinth-subtitle">{getEngineSubtitle()}</p>
                            {lang === 'EN' && (
                                <div className="mist-labyrinth-en-font-toggle" aria-label="English font scheme">
                                    <span>FONT</span>
                                    {LABYRINTH_ENGLISH_FONT_OPTIONS.map(option => (
                                        <button
                                            type="button"
                                            key={option.id}
                                            className={labyrinthEnglishFontScheme === option.id ? 'is-active' : ''}
                                            aria-pressed={labyrinthEnglishFontScheme === option.id}
                                            title={option.title}
                                            onClick={() => setLabyrinthEnglishFontScheme(option.id)}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
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
                                {lang === 'EN' ? "PRESETS" : "欲望预设"}
                            </button>
                            <button
                                type="button"
                                className={labyrinthPanelMode === 'mixer' ? 'is-active' : ''}
                                onClick={() => setLabyrinthPanelMode('mixer')}
                                title={lang === 'EN' ? 'Open M-axis mixer' : '打开 M轴调音台'}
                            >
                                <SlidersHorizontal size={13} />
                                <span>{lang === 'EN' ? "MIXER" : "调音台"}</span>
                                {getMixerAdjustedCount() > 0 && <b>{getMixerAdjustedCount()}</b>}
                            </button>
                        </div>
                        <div key={labyrinthPanelMode} className={`mist-labyrinth-panel-stage is-${labyrinthPanelMode}`}>
                            {labyrinthPanelMode === 'formula'
                                ? renderLabyrinthMainFormula()
                                : labyrinthPanelMode === 'desire'
                                    ? renderLabyrinthDesirePanel()
                                    : renderLabyrinthMixerPanel()}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mist-labyrinth-control-deck" aria-label={lang === 'EN' ? "Parameter deck" : "参数控制区"}>
                {renderLabyrinthSurfaceDeck()}
            </section>
        </div>
    );

    const labyrinthLocaleClass = isLabyrinth
        ? (lang === 'EN' ? `is-lang-en is-en-font-${labyrinthEnglishFontScheme}` : 'is-lang-cn')
        : '';

    return (
        <div className={`mist-engine-field ${isCommercial ? 'mist-commercial-engine' : ''} ${isLabyrinth ? 'mist-labyrinth-engine' : ''} ${labyrinthLocaleClass} w-full h-full flex flex-col relative bg-[var(--bg-main)] overflow-hidden transition-colors duration-500`}>
            {theme === 'retro' && <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" style={{ backgroundImage: 'var(--pattern-aged)' }}></div>}
            {theme !== 'retro' && !isLabyrinth && (
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        background: 'radial-gradient(circle at 56% 42%, rgba(255,255,255,0.045), transparent 36%), radial-gradient(circle at 76% 62%, rgba(255,255,255,0.025), transparent 34%)'
                    }}
                />
            )}

            {!isLabyrinth && shouldRenderDriverRings && (
                <div className={`${
                    isCommercial ? 'mist-rings-suture' :
                    isExperimental ? 'mist-rings-experimental' :
                    isTrailer ? 'mist-rings-trailer' : ''
                } ${showRings && !isDriverRingsExiting ? 'is-active' : 'is-exiting'}`} aria-hidden="true">
                    <BorromeanRings
                        fieldState={fieldState}
                        lang={lang}
                        driverType={driverType}
                        opacity={theme === 'retro' ? 0.3 : 0.7}
                        centered={true}
                        vivid={true}
                        animated={showRings && !isDriverRingsExiting}
                    />
                </div>
            )}

            {!isLabyrinth && <div className={`flex-shrink-0 px-6 pt-6 pb-2 flex items-center justify-center z-20 bg-transparent relative ${isCommercial ? 'mist-commercial-title-zone' : ''}`}>
                <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center relative">
                    <div className="flex-1 flex flex-col items-center justify-center pointer-events-none">
                        <h2 className={`mist-engine-title text-4xl md:text-5xl font-serif font-bold tracking-[0.05em] -mr-[0.05em] text-center mb-4 ${isCommercial ? 'mist-commercial-engine-title' : 'transition-all duration-300'}`}>
                            <span className={theme === 'retro' ? 'text-[#8B261D]' : osTheme.accent}>
                                {getEngineTitle()}
                            </span>
                        </h2>
                        <p className={`mist-engine-subtitle text-[10px] md:text-base font-medium md:font-light uppercase tracking-[0.2em] -mr-[0.2em] text-center w-full whitespace-nowrap overflow-hidden text-ellipsis ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                            {getEngineSubtitle()}
                        </p>
                    </div>
                </div>
            </div>}

            <div className="mist-engine-canvas flex-1 flex flex-col overflow-y-auto custom-scrollbar relative z-10 transition-all duration-300">
                {!isLabyrinth && (
                    <div className="flex-shrink-0 py-0 px-4 flex justify-center z-10">
                        <div className="relative w-full max-w-5xl">
                            <div className={`relative flex flex-col items-center justify-center w-full p-6 transition-colors duration-300 rounded-xl ${osTheme.hover}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    {osTheme.icon}
                                    <span className={`text-base uppercase tracking-[0.3em] font-black text-zinc-400 transition-colors ${osTheme.label}`}>
                                        {lang === 'EN' ? osLabel.split('/')[1] : osLabel.split('/')[0]}
                                    </span>
                                </div>
                                <div
                                    onClick={() => openLibrary(currentOSKey)}
                                    className={`text-3xl md:text-6xl font-serif font-bold tracking-[0.1em] mb-3 transition duration-300 cursor-pointer hover:scale-110 hover:z-50 inline-block ${currentPsychicOS ? (theme === 'retro' ? 'text-black' : 'text-white') : (theme === 'retro' ? 'text-zinc-500 hover:text-black' : 'text-zinc-500 hover:text-white')}`}
                                >
                                    {osDisplay}
                                </div>
                                {osDetails && (
                                    <div className={`text-sm md:text-lg font-normal w-full px-4 text-center leading-relaxed whitespace-pre-line ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                                        {lang === 'EN' && osDetails.defEn ? osDetails.defEn : osDetails.def}
                                        <span className={`block text-xs md:text-sm italic mt-1 ${theme === 'retro' ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                                            {lang === 'EN' && osDetails.coreEn ? osDetails.coreEn : osDetails.core}
                                        </span>
                                    </div>
                                )}
                                <div className={`absolute right-4 top-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity ${osTheme.accent}`}>
                                    <ChevronRight size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {isLabyrinth ? (
                        renderLabyrinthConsole()
                    ) : (
                    <div className="min-h-full flex flex-col items-center justify-start p-4 md:px-8 pt-0 md:pt-2 md:pb-60 space-y-24 md:space-y-36">
                    {isCommercial ? (
                        <div className="mist-commercial-formula-module flex flex-col gap-8 md:gap-12 min-w-0">
                            <div className="mist-commercial-formula-line flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                {renderProphecySlot({ prefixCN: "一个处于", prefixEN: "A", blockId: "comm_c0", placeholderCN: "C0. 底层欲望", placeholderEN: "C0. Core Desire" })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">的</span>
                                {renderProphecySlot({ blockId: "comm_c1", placeholderCN: "C1. 缺失主体", placeholderEN: "C1. Subject", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">在</span>
                                {renderProphecySlot({ blockId: "comm_c2", placeholderCN: "C2. 痛点场景", placeholderEN: "C2. Pain Scenario", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">中，</span>
                            </div>
                            <div className="mist-commercial-formula-line flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">由于恐惧</span>
                                {renderProphecySlot({ blockId: "comm_c6", placeholderCN: "C6. 潜在威胁", placeholderEN: "C6. Threat", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">，渴望获得作为救赎的</span>
                                {renderProphecySlot({ blockId: "comm_c3", placeholderCN: "C3. 产品图腾", placeholderEN: "C3. Product", hideAffixes: true })}
                                <span className="font-serif text-xl md:text-3xl font-light text-[var(--text-main)]">；</span>
                            </div>
                            <div className="mist-commercial-formula-line flex flex-wrap justify-center items-center gap-x-2 gap-y-4 w-full">
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
                                {shouldShowM7BResidue && (
                                    <>
                                        <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                            {lang === 'EN' ? ", leaving in the final frame" : "，并在最后一帧留下"}
                                        </span>
                                        {renderProphecySlot({ blockId: "engine_m7b", placeholderCN: "M7B. 实在余痕", placeholderEN: "M7B. Residue", hideAffixes: true })}
                                    </>
                                )}
                                <span className="font-serif text-xl md:text-3xl font-light select-none text-[var(--text-main)]">
                                    {lang === 'EN' ? "." : "。"}
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
                    onSetTags={(tags) => setBlockTags(activeBlockId, tags)}
                    onClear={() => clearBlock(activeBlockId)}
                    lang={lang}
                    driverType={driverType}
                    onAddCustomDef={onAddCustomDef}
                    scrollToTag={scrollToTag}
                    onTempLockChange={(locks) => {
                        onFaceStateChange?.(locks);
                    }}
                    onFocusStateChange={(locks) => {
                        onFocusStateChange?.(locks);
                    }}
                    initialFaceState={faceState}
                    initialFocusState={focusState}
                    allSelectedTags={selectedFocusTags}
                    allSelectedFocusUnitMap={focusUnitMap}
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
