import React, { startTransition, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Check,
  Copy,
  Box,
  BookOpen,
  Camera,
  Cpu,
  Dice5,
  Eye,
  Fingerprint,
  FileText,
  Ghost,
  ImagePlus,
  Layers3,
  Lightbulb,
  Lock,
  Paintbrush,
  PanelRight,
  Plus,
  RefreshCcw,
  Shirt,
  SlidersHorizontal,
  Table2,
  Sparkles,
  Target,
  Clapperboard,
  ChevronDown,
  Trash2,
  Upload,
  Unlock,
  UserRound,
  Wand2,
  X
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ConceptDesignRuntimeState, ConceptDesignWorkspacePage, DriverType, LibraryCategoryDef, LibraryItemDef, NarrativeBlockDef, NarrativeFieldState, type CreatureTaxonomyTag } from '../types';
import { CONCEPT_ENGINE_BLOCKS, CONCEPT_ENGINE_LIBRARY } from '../data/concept_design/core';
import { ACTION_MOTIF_PROTOCOL } from '../data/concept_design/human/base/actions';
import { NarrativeEngineFieldProps } from './NarrativeEngineField';
import { ProphecySlot } from './ProphecySlot';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { buildSur3CoordinatePreset, SUR3_COORDINATE_PRESETS, SUR3_SPACE_ANCHOR_PRESETS, SUR3_SPACE_ANCHORS, getRandomSur3CoordinatePreset, sur3EraSetsIntersect } from '../data/engine_surface/SUR3';
import { CONCEPT_DESIGN_BLOCK_LIMITS } from '../data/concept_design/conceptDesignLimits';
import { SUR3_ERAS } from '../data/engine_surface/SUR3';
import { AES_COLOR_PRESETS } from '../data/aesthetic_libraries/color_presets';
import { clearFocusForTagsPatch, getAllSelectedTags, getSelectedFocusUnitMap } from '../utils/focusTerms';
import { generatePromptSkillVariables, LocalizedPromptSkillVariables } from '../services/promptSkillService';
import { runWithTask } from '../services/taskManager';
import {
  buildCharacterIdentityBoardMaterialPacket,
  buildCharacterIdentityBoardMaterialTranslationGuide,
  buildCharacterIdentityBoardPromptFromLayers,
  buildCharacterIdentityBoardPromptSectionsFromLayers,
  type CharacterIdentityBoardPromptSection,
  CharacterIdentityBoardMaterialPacket
} from '../data/concept_design/templates/characterIdentityBoard';
import {
  VIDEO_STORYBOARD_BLUEPRINT,
  VIDEO_STORYBOARD_COMPOSER_MODULES,
  VIDEO_STORYBOARD_EMPTY_COMPOSER_VALUES,
  VIDEO_STORYBOARD_REFERENCE_SAMPLES,
  type VideoStoryboardComposerValues,
  type VideoStoryboardReferenceSample
} from '../data/concept_design/targets';
import { VISUAL_STYLE_RANDOM_PRESETS, type VisualStyleRandomPreset } from '../data/concept_design/visualStyleRandomPresets';
import { getVisualStyleProfileMatchWeight } from '../data/concept_design/visualStyleProfiles';
import { FRAMING_RANDOM_PRESETS, type FramingRandomPreset } from '../data/concept_design/framingRandomPresets';
import {
  CONCEPT_LINKED_RANDOM_PRESETS,
  type ConceptLinkedRandomConflictPolicy,
  type ConceptLinkedRandomDensity,
  type ConceptLinkedGenreFusionMode,
  type ConceptLinkedRandomPreset
} from '../data/concept_design/linkedRandomPresets';
import { CONCEPT_TAG_LABELS, normalizeConceptTagId, uniqueConceptTagIds } from '../data/concept_design/tagDictionary';
import { CONCEPT_CATEGORY_AXIS } from '../data/concept_design/filter/categoryAxis';
import { CONCEPT_ERA_AXIS } from '../data/concept_design/filter/eraAxis';
import { blockUsesSimpleHardAxis, CONCEPT_REALITY_AXIS, getConceptSimpleAxisMatch, type ConceptCategoryFitLevel, type ConceptCreatureTaxonomyFitLevel } from '../data/concept_design/filter/simpleAxisFilter';

type SkillLanguage = 'CN' | 'EN';
type SourceMode = 'PRESET' | 'IDEA' | 'ARTICLE' | 'IMAGE';
type PhysicalMediumCategory = 'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'TANGIBLE' | 'ALL';
type BodyFormMode = 'HUMANOID_DISGUISE' | 'VISIBLE_HYBRID' | 'BEAST_BODY' | 'XENO_BODY';
type SubjectMode = 'HUMAN' | 'CREATURE';
type BoardFormat = '16:9' | '9:16' | '4:3' | '3:4' | '3:2' | '2:3' | '21:9' | '1:1';
type ObjectRouteId = 'HUMAN' | 'CREATURE';
type HumanRegisterId = 'REALISTIC' | 'HISTORICAL' | 'PROFESSIONAL' | 'FASHION' | 'COMBAT' | 'RITUAL' | 'SOCIAL' | 'SCIFI' | 'FANTASY' | 'WASTELAND';
type RegisterRandomMode = 'LAW_L1' | 'LAW_L2' | 'LAW_L3' | 'LAW_L4' | 'LAW_L5';
type ParamPanelExpandMode = 'COLLAPSED' | 'PRESET' | 'ALL';
type VisualStyleRandomPresetRoute = 'FOLLOW_MEDIUM' | 'ALL_PRESETS' | 'GLOBAL_FUSION' | string;

type VisualStyleRandomSafety = {
  allowVintage: boolean;
  allowGlitch: boolean;
  allowPollution: boolean;
  allowHighSaturation: boolean;
};
type VisualStyleRandomDensity = 'FULL' | 'BALANCED' | 'LIGHT';
type VisualStyleSoulBlendMode = 'PURE' | 'POLYPHONIC';
type FramingRandomPresetRoute = 'ALL_PRESETS' | string;
type EraCompatibility = 'match' | 'neutral' | 'soft_mismatch' | 'hard_mismatch';
type GenreCompatibility = 'match' | 'neutral' | 'soft_mismatch' | 'hard_mismatch';
type CultureCompatibility = 'match' | 'neutral' | 'soft_mismatch' | 'hard_mismatch';
type FramingRandomSafety = {
  keepReadableSubject: boolean;
  avoidExtremeDistortion: boolean;
  avoidMultiSubject: boolean;
  allowOpticalFx: boolean;
};
type FramingRandomDensity = 'FULL' | 'BALANCED' | 'LIGHT';
type ContentIntentRandomDensity = 'RANGE_1_8' | 'RANGE_9_16' | 'RANGE_17_23' | 'RANGE_24_30' | 'RANGE_31_38' | 'FULL';
type SpacetimeFieldRandomRoute = 'ALL_PRESETS' | 'EXACT_COORDINATE' | 'REAL_SCENE' | 'SURREAL_SCENE' | 'ABSTRACT_SCENE' | 'ENVIRONMENT_STATE';
type SpacetimeFieldRandomDensity = 'LIGHT' | 'BALANCED' | 'FULL';
type LightingAtmosphereRandomRoute = 'ALL_PRESETS' | 'PRESET_PACKAGE' | 'DETAIL_LIGHTING';
type LightingAtmosphereRandomDensity = 'LIGHT' | 'BALANCED' | 'FULL';
type LinkedRandomPresetRoute = 'ALL_PRESETS' | string;
type LinkedRandomFocus = 'GLOBAL' | 'SUBJECT' | 'FIELD' | 'LIGHT';
type ContentIntentRoute = 'AUTO' | string;
type ThemeAxisPickerMode = 'TYPE' | 'SPECIES' | 'TIME' | 'REALITY';
type LexiconCategoryFilterLevel = Exclude<ConceptCategoryFitLevel, 'neutral'>;
type LexiconCreatureTaxonomyFilterLevel = Exclude<ConceptCreatureTaxonomyFitLevel, 'neutral'>;
type LexiconEraFilterLevel = 'hit' | 'universal' | 'miss';
type LexiconRealityFilterLevel = 'hit' | 'allowed' | 'miss';
type LexiconAxisFilterMode = 'INTERSECTION' | 'UNION' | 'LAYERED' | 'SOFT_SORT';
type LexiconAxisKey = 'species' | 'category' | 'era' | 'reality';
type LexiconUniversalPolicy = 'INCLUDE' | 'SORT_ONLY' | 'EXCLUDE';
type LexiconAxisFilterState = {
  mode: LexiconAxisFilterMode;
  order: LexiconAxisKey[];
  creatureTaxonomyLevels: LexiconCreatureTaxonomyFilterLevel[];
  categoryLevels: LexiconCategoryFilterLevel[];
  eraLevels: LexiconEraFilterLevel[];
  realityLevels: LexiconRealityFilterLevel[];
  universalPolicy: LexiconUniversalPolicy;
};
type KeywordFilterCategory =
  | 'eraTags'
  | 'realityTags';
type ConceptWorldAxisState = {
  primaryGenre: string;
  secondaryGenres: string[];
  genreFusionMode: ConceptLinkedGenreFusionMode;
  creatureTaxonomyAllow: CreatureTaxonomyTag[];
  genreAllow: string[];
  eraAllow: string[];
  realityAllow: string[];
};
const DEFAULT_CONCEPT_WORLD_AXIS_STATE: ConceptWorldAxisState = {
  primaryGenre: '',
  secondaryGenres: [],
  genreFusionMode: 'ACCENT',
  creatureTaxonomyAllow: [],
  genreAllow: [],
  eraAllow: [],
  realityAllow: []
};
const DEFAULT_LEXICON_AXIS_FILTER_STATE: LexiconAxisFilterState = {
  mode: 'INTERSECTION',
  order: ['species', 'category', 'era', 'reality'],
  creatureTaxonomyLevels: ['strong', 'usable'],
  categoryLevels: ['strong', 'usable', 'fusion'],
  eraLevels: ['hit', 'universal'],
  realityLevels: ['hit', 'allowed'],
  universalPolicy: 'INCLUDE'
};
const LEXICON_AXIS_FILTER_ENABLED_BLOCK_IDS = new Set([
  'cd_spacetime_coordinate',
  'cd_field_preset',
  'cd_persona',
  'cd_style_protocol_primary',
  'cd_style_protocol_secondary',
  'cd_age',
  'cd_gender',
  'cd_body_type',
  'cd_occupation',
  'cd_emotional_core',
  'cd_hair_color',
  'cd_hair_style_f',
  'cd_hair_style_m',
  'cd_beard_style',
  'cd_eye_color',
  'cd_eye_shape',
  'cd_eye_fx',
  'cd_face_features',
  'cd_makeup_style',
  'cd_expression',
  'cd_skin_texture',
  'cd_surface_state',
  'cd_body_features',
  'cd_body_markings',
  'cd_body_damage',
  'cd_body_modification',
  'cd_costume_logic',
  'cd_prop_anchor',
  'cd_symbol_system',
  'cd_static_pose',
  'cd_dynamic_action',
  'cd_human_behavior',
  'cd_creature_preset',
  'cd_creature_size',
  'cd_creature_class',
  'cd_creature_element',
  'cd_creature_head',
  'cd_creature_body',
  'cd_creature_mood',
  'cd_creature_action',
  'cd_creature_texture',
  'cd_scene_real',
  'cd_scene_surreal',
  'cd_scene_abstract',
  'cd_atmosphere',
  'cd_particles',
  'cd_light_preset',
  'cd_light_mood',
  'cd_light_type',
  'cd_light_direction',
  'cd_light_shape',
  'cd_light_air',
  'cd_light_color_temp'
]);
const LEXICON_FILTER_AUDIT_PINNED_BLOCK_IDS = [
  'cd_scene_real',
  'cd_scene_surreal',
  'cd_scene_abstract'
];
const LEXICON_UNIVERSAL_FILTER_BLOCK_IDS = new Set([
  'cd_age',
  'cd_gender',
  'cd_body_type',
  'cd_emotional_core',
  'cd_hair_color',
  'cd_hair_style_f',
  'cd_hair_style_m',
  'cd_beard_style',
  'cd_eye_color',
  'cd_eye_shape',
  'cd_face_features',
  'cd_makeup_style',
  'cd_expression',
  'cd_skin_texture',
  'cd_surface_state',
  'cd_body_damage',
  'cd_static_pose',
  'cd_dynamic_action',
  'cd_human_behavior',
  'cd_atmosphere',
  'cd_particles',
  'cd_light_preset',
  'cd_light_mood',
  'cd_light_type',
  'cd_light_direction',
  'cd_light_shape',
  'cd_light_air',
  'cd_light_color_temp'
]);
const CREATURE_TAXONOMY_FILTER_BLOCK_IDS = new Set([
  'cd_creature_preset',
  'cd_creature_size',
  'cd_creature_class',
  'cd_creature_element',
  'cd_creature_head',
  'cd_creature_body',
  'cd_creature_mood',
  'cd_creature_action',
  'cd_creature_texture'
]);
const blockUsesCreatureTaxonomyFilter = (blockId: string) => CREATURE_TAXONOMY_FILTER_BLOCK_IDS.has(blockId);
const CREATURE_TAXONOMY_AXIS: Array<{ id: CreatureTaxonomyTag; label: string; labelEn: string }> = [
  { id: 'mammal', label: '哺乳', labelEn: 'Mammal' },
  { id: 'avian', label: '鸟类', labelEn: 'Avian' },
  { id: 'reptilian', label: '爬行', labelEn: 'Reptilian' },
  { id: 'aquatic', label: '水生', labelEn: 'Aquatic' },
  { id: 'insectoid', label: '昆虫', labelEn: 'Insectoid' },
  { id: 'soft_body', label: '软体', labelEn: 'Soft Body' },
  { id: 'draconic', label: '龙类', labelEn: 'Draconic' },
  { id: 'demonic', label: '恶魔', labelEn: 'Demonic' },
  { id: 'divine_spirit', label: '神性', labelEn: 'Divine Spirit' },
  { id: 'undead', label: '亡灵', labelEn: 'Undead' },
  { id: 'eldritch', label: '深渊', labelEn: 'Eldritch' },
  { id: 'plant_fungal', label: '植物菌丝', labelEn: 'Plant / Fungal' },
  { id: 'mineral_elemental', label: '矿物元素', labelEn: 'Mineral / Elemental' },
  { id: 'energy_void', label: '能量虚空', labelEn: 'Energy / Void' },
  { id: 'machine', label: '机械', labelEn: 'Machine' },
  { id: 'synthetic', label: '合成', labelEn: 'Synthetic' },
  { id: 'swarm_parasitic', label: '虫群寄生', labelEn: 'Swarm / Parasitic' },
  { id: 'chimera', label: '嵌合', labelEn: 'Chimera' }
];
type LinkedGenderSignal = 'FEMININE' | 'MASCULINE' | 'ANDROGYNOUS' | 'OPEN';
type LinkedSubjectProfile = {
  ageBands: string[];
  ageWear: string[];
  bodyFunctions: string[];
  evidenceTags: string[];
  ontologyMax: number;
};
type PromptTemplateMode =
  | 'CHARACTER_BOARD'
  | 'THREE_VIEW'
  | 'PORTRAIT_HALF'
  | 'FILM_STILL'
  | 'AD_POSTER'
  | 'FASHION_COVER'
  | 'PRODUCT_OBJECT'
  | 'SCENE_LANDSCAPE'
  | 'CREATURE_BODY'
  | 'ABSTRACT_ART'
  | 'GRID_BOARD'
  | 'PERFORMANCE_STORYBOARD'
  | 'VIDEO_STORYBOARD'
  | 'CHARACTER_BOARD_BACKUP'
  | 'CUSTOM';
type TemplateWorkspaceView = 'PARAMS' | 'COMPILE' | 'VARIABLES' | 'PROMPT';

type SkillVariables = {
  characterSeed: string;
  ageBodyType: string;
  timeSpaceScene: string;
  actionMoment: string;
  visualMedium: string;
  style: string;
  paletteStrategy: string;
  compositionScene: string;
  lightingAtmosphere: string;
  otherDetails: string;
};

type VariableSlotMeta = {
  key: keyof SkillVariables;
  label: string;
  labelEn: string;
  hint: string;
  hintEn: string;
};

type LocalizedSkillVariables = Record<SkillLanguage, SkillVariables>;

type LocalizedVideoStoryboardComposerValues = Record<SkillLanguage, VideoStoryboardComposerValues>;

type IdentityBoardOptions = {
  originality: boolean;
  format: BoardFormat;
  mediumCategory: PhysicalMediumCategory;
  primaryStyleReference?: string;
  targetMode?: PromptTemplateMode;
  gridLayout: string;
  gridVariationAxis: string;
  gridContentObject: string;
  gridNumbering: boolean;
  gridTitleMode: 'NONE' | 'PLAIN' | 'ARTISTIC';
  gridBorderMode: boolean;
  bodyFormMode: BodyFormMode;
  backgroundMode: 'OFF_WHITE' | 'PURE_WHITE' | 'BLACK' | 'GREEN_SCREEN' | 'TRANSPARENT';
  qualityLevel: 'STANDARD' | 'HIGH' | 'ULTRA';
};

type SourceInputs = {
  ideaText: string;
  articleText: string;
  targetCharacter: string;
  imageDataUrl: string;
  imageName: string;
  imageGuidance: string;
};

const t = (lang: SkillLanguage, cn: string, en: string) => (lang === 'CN' ? cn : en);

const createEmptyVariables = (): SkillVariables => ({
  characterSeed: '',
  ageBodyType: '',
  timeSpaceScene: '',
  actionMoment: '',
  visualMedium: '',
  style: '',
  paletteStrategy: '',
  compositionScene: '',
  lightingAtmosphere: '',
  otherDetails: ''
});

const createEmptyLocalizedVariables = (): LocalizedSkillVariables => ({
  CN: createEmptyVariables(),
  EN: createEmptyVariables()
});

const createEmptyLocalizedVideoStoryboardValues = (): LocalizedVideoStoryboardComposerValues => ({
  CN: { ...VIDEO_STORYBOARD_EMPTY_COMPOSER_VALUES },
  EN: { ...VIDEO_STORYBOARD_EMPTY_COMPOSER_VALUES }
});

const buildLocalizedVideoStoryboardValuesFromSample = (
  sample: VideoStoryboardReferenceSample
): LocalizedVideoStoryboardComposerValues => ({
  CN: { ...sample.values.CN },
  EN: { ...sample.values.EN }
});

const sourceModes: Array<{
  id: SourceMode;
  icon: React.ElementType;
  label: string;
  labelEn: string;
  desc: string;
  descEn: string;
}> = [
  {
    id: 'PRESET',
    icon: Wand2,
    label: '创意预设',
    labelEn: 'Creative Preset',
    desc: '',
    descEn: ''
  },
  {
    id: 'IDEA',
    icon: Lightbulb,
    label: '灵感元素',
    labelEn: 'Idea',
    desc: '把零散元素压缩成 C01-C10 内容主体变量。',
    descEn: 'Compress loose ideas into C01-C10 content-core variables.'
  },
  {
    id: 'ARTICLE',
    icon: FileText,
    label: '文章抽取',
    labelEn: 'Article',
    desc: '从故事或设定文本中抽取角色设计方向。',
    descEn: 'Extract a character design direction from a text.'
  },
  {
    id: 'IMAGE',
    icon: ImagePlus,
    label: '图片反馈',
    labelEn: 'Image',
    desc: '根据参考图和人工反馈整理身份板变量。',
    descEn: 'Turn a reference image and feedback into board variables.'
  }
];

const promptTemplateCards: Array<{
  id: PromptTemplateMode;
  icon: React.ElementType;
  label: string;
  labelEn: string;
  desc: string;
  descEn: string;
  badge: string;
  badgeEn: string;
  preview: 'board' | 'threeView' | 'storyboard' | 'custom';
}> = [
  {
    id: 'CHARACTER_BOARD',
    icon: PanelRight,
    label: 'T01 角色身份板',
    labelEn: 'T01 Character Board',
    desc: '多视图、表情格、细节 close-up、色条和身份备注。',
    descEn: 'Multi-view sheet, expression cells, detail close-ups, palette strip, and identity notes.',
    badge: '角色',
    badgeEn: 'Character',
    preview: 'board'
  },
  {
    id: 'THREE_VIEW',
    icon: Layers3,
    label: 'T02 三视图设定',
    labelEn: 'T02 Three-View Sheet',
    desc: '正面、侧面、背面，用于确认造型、比例、服装结构和本体轮廓。',
    descEn: 'Front, side, and back views for form, proportion, outfit structure, and ontology silhouette.',
    badge: '设定',
    badgeEn: 'Sheet',
    preview: 'threeView'
  },
  {
    id: 'PORTRAIT_HALF',
    icon: UserRound,
    label: 'T03 头像 / 半身肖像',
    labelEn: 'T03 Portrait / Bust',
    desc: '聚焦脸、妆发、气质、眼神、上半身服装和身份记忆点。',
    descEn: 'Focus on face, hair/makeup, presence, gaze, upper outfit, and identity memory points.',
    badge: '肖像',
    badgeEn: 'Portrait',
    preview: 'board'
  },
  {
    id: 'FILM_STILL',
    icon: Clapperboard,
    label: 'T04 电影静帧',
    labelEn: 'T04 Film Still',
    desc: '像电影中的一帧，强调事件、场域、取景、光影和观看关系。',
    descEn: 'A frame-like image emphasizing event, field, framing, lighting, and viewing relation.',
    badge: '电影',
    badgeEn: 'Cinema',
    preview: 'storyboard'
  },
  {
    id: 'AD_POSTER',
    icon: ImagePlus,
    label: 'T05 广告海报',
    labelEn: 'T05 Advertising Poster',
    desc: '单图传播、强主视觉、标语空间、产品或人物的高识别冲击力。',
    descEn: 'Single-image communication, strong key visual, copy space, and high-recognition impact.',
    badge: '海报',
    badgeEn: 'Poster',
    preview: 'custom'
  },
  {
    id: 'FASHION_COVER',
    icon: Shirt,
    label: 'T06 时尚封面',
    labelEn: 'T06 Fashion Cover',
    desc: '人物时装、身体姿态、封面观看关系、杂志式留白和高识别造型。',
    descEn: 'Fashion styling, body pose, cover-facing relation, magazine whitespace, and iconic look.',
    badge: '封面',
    badgeEn: 'Cover',
    preview: 'board'
  },
  {
    id: 'PRODUCT_OBJECT',
    icon: Box,
    label: 'T07 产品物件图',
    labelEn: 'T07 Product / Object',
    desc: '产品、道具、器物、装备或标志性物件的材质、轮廓和展示图。',
    descEn: 'Material, silhouette, and display image for products, props, artifacts, gear, or signature objects.',
    badge: '物件',
    badgeEn: 'Object',
    preview: 'custom'
  },
  {
    id: 'SCENE_LANDSCAPE',
    icon: Ghost,
    label: 'T08 场景 / 风景图',
    labelEn: 'T08 Scene / Landscape',
    desc: '环境、建筑、地域、时代气氛、空间压力和场域叙事。',
    descEn: 'Environment, architecture, region, era mood, spatial pressure, and field narrative.',
    badge: '场景',
    badgeEn: 'Scene',
    preview: 'custom'
  },
  {
    id: 'CREATURE_BODY',
    icon: Layers3,
    label: 'T09 异种本体设定',
    labelEn: 'T09 Creature Ontology',
    desc: '怪物、生物、非人 anatomy、身体功能、表皮材料和行为证据。',
    descEn: 'Creature anatomy, body function, surface material, and behavioral evidence.',
    badge: '异种',
    badgeEn: 'Creature',
    preview: 'threeView'
  },
  {
    id: 'ABSTRACT_ART',
    icon: Sparkles,
    label: 'T10 艺术抽象图',
    labelEn: 'T10 Abstract Art',
    desc: '情绪、概念、材质、形式、色彩和非叙事视觉实验。',
    descEn: 'Emotion, concept, material, form, color, and non-narrative visual experiment.',
    badge: '抽象',
    badgeEn: 'Abstract',
    preview: 'custom'
  },
  {
    id: 'GRID_BOARD',
    icon: PanelRight,
    label: 'T11 宫格',
    labelEn: 'T11 Grid Board',
    desc: '默认 12 宫格，用于同一主题下的多方案探索、变体比较和方向筛选。',
    descEn: 'Defaults to a 12-cell grid for variants, comparison, and direction exploration under one theme.',
    badge: '12宫格',
    badgeEn: '12 Grid',
    preview: 'storyboard'
  },
  {
    id: 'CHARACTER_BOARD_BACKUP',
    icon: Copy,
    label: '角色身份板备份',
    labelEn: 'Character Board Backup',
    desc: '当前完整角色身份板结构的冻结副本，保留魂、质、眼、场、影、法、统摄模块和本体细节。',
    descEn: 'Frozen copy of the current full character-board structure, preserving Soul, Quality, Eye, Stage, Vibe, Law, Governance, and Ontology Detail.',
    badge: '备份',
    badgeEn: 'Backup',
    preview: 'board'
  },
  {
    id: 'PERFORMANCE_STORYBOARD',
    icon: Clapperboard,
    label: 'T12 分镜表 / 动作序列',
    labelEn: 'T12 Storyboard / Action Sequence',
    desc: '12 格电影分镜范本：画面规格、角色引用、动作词库、摄影语言、环境限制和导演标注系统。',
    descEn: 'A 12-panel cinematic storyboard template with format, reference character, movement bank, camera language, environment locks, and director annotations.',
    badge: '分镜',
    badgeEn: 'Storyboard',
    preview: 'storyboard'
  },
  {
    id: 'VIDEO_STORYBOARD',
    icon: Clapperboard,
    label: 'T13 视频指令 / 故事版',
    labelEn: 'T13 Video Directive / Storyboard',
    desc: '视频素材、分镜图、镜头表和动作序列的目标图纸；核心是素材对象、运动事件和时间结构。',
    descEn: 'Target blueprint for video assets, storyboard sheets, shot lists, and action sequences: footage asset, motion event, and time structure.',
    badge: '视频',
    badgeEn: 'Video',
    preview: 'storyboard'
  },
  {
    id: 'CUSTOM',
    icon: Plus,
    label: '自定义模版',
    labelEn: 'Custom Template',
    desc: '从模块库自由添加、组合和排序律令模块。',
    descEn: 'Freely add, combine, and order edict modules from the module library.',
    badge: '模块',
    badgeEn: 'Module',
    preview: 'custom'
  }
];

const boardFormatOptions: BoardFormat[] = ['16:9', '9:16', '4:3', '3:4', '3:2', '2:3', '21:9', '1:1'];
const gridLayoutOptions = ['2x2', '2x3', '3x2', '3x3', '3x4', '4x3', '2x7', '4x4', '3x6', '4x5', '4x6', '5x5', '6x6'];
const gridContentObjectOptions: Array<{ value: string; label: string; labelEn: string }> = [
  { value: '角色 / 主体', label: '角色', labelEn: 'Character' },
  { value: '头像 / 面部', label: '头像', labelEn: 'Portrait' },
  { value: '表情', label: '表情', labelEn: 'Expression' },
  { value: '服装 / 造型', label: '服装', labelEn: 'Outfit' },
  { value: '物品 / 道具', label: '物件', labelEn: 'Object' },
  { value: '场景 / 环境', label: '场景', labelEn: 'Scene' },
  { value: '异种 / 生物本体', label: '异种', labelEn: 'Creature' },
  { value: '抽象概念', label: '抽象', labelEn: 'Abstract' }
];
const gridVariationAxisOptions: Array<{ value: string; label: string; labelEn: string }> = [
  { value: '概念变体', label: '概念', labelEn: 'Concept' },
  { value: '表情变化', label: '表情', labelEn: 'Expression' },
  { value: '情绪强度变化', label: '情绪', labelEn: 'Emotion' },
  { value: '发型变化', label: '发型', labelEn: 'Hair' },
  { value: '服装变化', label: '服装', labelEn: 'Outfit' },
  { value: '姿态变化', label: '姿态', labelEn: 'Pose' },
  { value: '配色变化', label: '配色', labelEn: 'Palette' },
  { value: '材质变化', label: '材质', labelEn: 'Material' },
  { value: '场景变化', label: '场景', labelEn: 'Scene' },
  { value: '风格变化', label: '风格', labelEn: 'Style' }
];
const backgroundModeOptions: Array<{ value: IdentityBoardOptions['backgroundMode']; label: string; labelEn: string }> = [
  { value: 'OFF_WHITE', label: '柔白', labelEn: 'Off White' },
  { value: 'PURE_WHITE', label: '纯白', labelEn: 'Pure White' },
  { value: 'BLACK', label: '黑底', labelEn: 'Black' },
  { value: 'GREEN_SCREEN', label: '绿幕', labelEn: 'Green Screen' },
  { value: 'TRANSPARENT', label: '透明', labelEn: 'Transparent' }
];
const qualityLevelOptions: Array<{ value: IdentityBoardOptions['qualityLevel']; label: string; labelEn: string }> = [
  { value: 'STANDARD', label: '标准', labelEn: 'Standard' },
  { value: 'HIGH', label: '高质', labelEn: 'High' },
  { value: 'ULTRA', label: '超清', labelEn: 'Ultra' }
];
const getGridCellCount = (layout: string) => layout
  .split('x')
  .map(part => Number(part.trim()))
  .filter(Number.isFinite)
  .reduce((total, value) => total * value, 1);
const getGridLayoutLabel = (layout: string, lang: SkillLanguage) => {
  const count = getGridCellCount(layout);
  return lang === 'CN' ? `${count}宫格` : `${count} Grid`;
};
const bodyFormModeOptions: Array<{
  id: BodyFormMode;
  label: string;
  labelEn: string;
  shortLabel: string;
  shortLabelEn: string;
  desc: string;
  descEn: string;
}> = [
  {
    id: 'HUMANOID_DISGUISE',
    label: '人形伪装',
    labelEn: 'Humanoid Disguise',
    shortLabel: '人形',
    shortLabelEn: 'Human',
    desc: '硬锁第一识别人形；妖怪、狼人、美杜莎等只能以耳影、尾影、牙齿、瞳孔、发冠、妆容、服装、道具或姿态暗示。',
    descEn: 'Hard-lock the primary read as humanoid; mythic, beast, or alien identity remains only as local hints.'
  },
  {
    id: 'VISIBLE_HYBRID',
    label: '显性半兽',
    labelEn: 'Visible Hybrid',
    shortLabel: '半兽',
    shortLabelEn: 'Hybrid',
    desc: '硬锁为人形与非人之间的混合身体；保留人形站立结构和脸部可读性，同时必须出现明确耳、角、尾、爪、鳞片、蛇发局部、兽化手脚等本体证据。',
    descEn: 'Hard-lock a hybrid body between humanoid and non-human; keep humanoid readability while requiring explicit local non-human body evidence.'
  },
  {
    id: 'BEAST_BODY',
    label: '兽化本体',
    labelEn: 'Beast Body',
    shortLabel: '兽体',
    shortLabelEn: 'Beast',
    desc: '硬锁为兽化/妖怪本体；身体底座必须是妖兽 anatomy，不是人类身体外挂耳尾爪。若词条写“暗示/耳影/尾影/藏匿”，必须升级为兽面、毛发覆盖、兽爪、非人腿部、兽尾、蛇发、鳞片或非人下身。',
    descEn: 'Hard-lock a beast / mythic body. The body base must be beast anatomy, not a human body with ears / tail / claws attached.'
  },
  {
    id: 'XENO_BODY',
    label: '异种本体',
    labelEn: 'Xeno Body',
    shortLabel: '异种',
    shortLabelEn: 'Xeno',
    desc: '硬锁为非人本体；第一识别不必保持人类比例，必须以非人 anatomy、异种、机械生命、神性实体、寄生结构或超现实身体成立。',
    descEn: 'Hard-lock a non-human body; human proportions are not required, and the subject must resolve as non-human anatomy or surreal embodiment.'
  }
];
const edictSectionCategoryColors = {
  target: '#F97316',
  object: '#38BDF8',
  source: '#A78BFA',
  protocol: '#22C55E',
  output: '#EAB308',
  attention: '#F43F5E'
};

const mediumCategoryMeta: Array<{
  id: PhysicalMediumCategory;
  icon: React.ElementType;
  shortLabel: string;
  shortLabelEn: string;
  label: string;
  labelEn: string;
  desc: string;
  descEn: string;
}> = [
  {
    id: 'PAINTING',
    icon: Paintbrush,
    shortLabel: '绘画',
    shortLabelEn: 'Paint',
    label: '绘画/艺术媒介',
    labelEn: 'Painting / Art',
    desc: '设定图、数字绘画、原画、插画材质。',
    descEn: 'Concept art, digital painting, illustration.'
  },
  {
    id: 'CGI',
    icon: Cpu,
    shortLabel: 'CGI',
    shortLabelEn: 'CGI',
    label: '计算生成/数字建模',
    labelEn: 'CGI / Digital Model',
    desc: '3D 资产、游戏模型、UE/Unity 渲染。',
    descEn: '3D assets, game models, engine rendering.'
  },
  {
    id: 'PHOTOGRAPHY',
    icon: Camera,
    shortLabel: '摄影',
    shortLabelEn: 'Photo',
    label: '镜头捕捉/写实摄影',
    labelEn: 'Photography',
    desc: '真实演员照片、电影剧照、cosplay 摄影。',
    descEn: 'Actor photos, film stills, cosplay photography.'
  },
  {
    id: 'TANGIBLE',
    icon: Box,
    shortLabel: '实体',
    shortLabelEn: 'Craft',
    label: '实体手作/定格媒介',
    labelEn: 'Tangible / Craft',
    desc: '雕塑、微缩模型、黏土、实体手作。',
    descEn: 'Sculpture, miniature, clay, handmade craft.'
  },
  {
    id: 'ALL',
    icon: Sparkles,
    shortLabel: '融合',
    shortLabelEn: 'Fusion',
    label: '融合媒介/取消分流',
    labelEn: 'Fusion / No Split',
    desc: '四大风格预设交叉使用，用于风格碰撞。',
    descEn: 'Cross-use all four style routes for style collision.'
  }
];

const objectRouteMeta: Array<{
  id: ObjectRouteId;
  mode: SubjectMode;
  icon: React.ElementType;
  label: string;
  labelEn: string;
  desc: string;
  descEn: string;
  subtypes: string[];
  subtypesEn: string[];
}> = [
  {
    id: 'HUMAN',
    mode: 'HUMAN',
    icon: UserRound,
    label: '人形',
    labelEn: 'Humanoid Form',
    desc: '第一识别是人形主体：现实人类、职业人物、科幻人类、奇幻人类、神化人、半异化人或机械化人形。',
    descEn: 'Primary recognition is a humanoid subject: real humans, professions, sci-fi humans, fantasy humans, deified humans, altered humans, or mechanical humanoids.',
    subtypes: ['现实人类', '职业人物', '科幻人类', '奇幻人类', '神化/妖怪化', '机械化/异化'],
    subtypesEn: ['Real Human', 'Profession', 'Sci-Fi Human', 'Fantasy Human', 'Deified / Yokai', 'Mechanical / Altered']
  },
  {
    id: 'CREATURE',
    mode: 'CREATURE',
    icon: Wand2,
    label: '异种',
    labelEn: 'Xeno / Creature',
    desc: '第一识别不是人形主体：生物、异种、外星生命、神性实体、机械生命、群体生命或物件生命化。',
    descEn: 'Primary recognition is not humanoid: creatures, xeno life, alien life, divine entities, machine life, collective life, or living objects.',
    subtypes: ['现实/幻想生物', '外星/维度生命', '神性实体', '机械生命', '群体生命', '物件生命化'],
    subtypesEn: ['Real / Fantasy Creature', 'Alien / Dimensional', 'Divine Entity', 'Machine Life', 'Collective Life', 'Living Object']
  }
];

const humanRegisterMeta: Array<{
  id: HumanRegisterId;
  label: string;
  labelEn: string;
  desc: string;
  descEn: string;
}> = [
  { id: 'REALISTIC', label: '现实', labelEn: 'Real', desc: '当代现实、可信社会身份、日常材料证据。', descEn: 'Contemporary realism, credible social identity, everyday material evidence.' },
  { id: 'HISTORICAL', label: '历史', labelEn: 'History', desc: '时代服制、阶层符号、工艺材料和身份礼法。', descEn: 'Period costume, class signs, craft materials, and social codes.' },
  { id: 'PROFESSIONAL', label: '职业', labelEn: 'Work', desc: '制度职业、工具痕迹、岗位装备和劳动证据。', descEn: 'Institutional profession, tool traces, work gear, and labor evidence.' },
  { id: 'FASHION', label: '时尚', labelEn: 'Fashion', desc: '亚文化、秀场、街头与身体呈现方式。', descEn: 'Subculture, runway, street style, and body presentation.' },
  { id: 'COMBAT', label: '战斗', labelEn: 'Combat', desc: '武装身份、训练姿态、战损和等级系统。', descEn: 'Armed identity, trained posture, battle wear, and rank systems.' },
  { id: 'RITUAL', label: '仪式', labelEn: 'Ritual', desc: '宗教秩序、仪式服饰、封印和神圣道具。', descEn: 'Religious order, ritual garments, seals, and sacred props.' },
  { id: 'SOCIAL', label: '社会', labelEn: 'Social', desc: '阶级、边缘身份、服务劳动和上流伪装。', descEn: 'Class, marginal identity, service labor, and elite performance.' },
  { id: 'SCIFI', label: '科幻', labelEn: 'Sci-Fi', desc: '未来制度、技术装备、殖民地和生物科技。', descEn: 'Future systems, tech gear, colonies, and biotech society.' },
  { id: 'FANTASY', label: '奇幻', labelEn: 'Fantasy', desc: '王国、行会、魔法学校、遗迹与神话职业。', descEn: 'Kingdoms, guilds, magic schools, ruins, and mythic professions.' },
  { id: 'WASTELAND', label: '末世', labelEn: 'Wasteland', desc: '废土、生存工具、拼接材料和秩序崩坏。', descEn: 'Wasteland survival, salvaged tools, patched materials, and collapsed order.' },
];

const fashionCoreGroupPrefixes = ['A. 高定', 'B. 街头', 'C. 编辑', 'D. 奢侈', 'E. 反时尚', 'F. 职业时尚', 'G. 日常时装化'];

const humanRegisterRules: Record<HumanRegisterId, {
  worldIds: string[];
  identityIds: string[];
  translationIds: string[];
  translationGroups?: string[];
  costumeIds: string[];
  costumeSystemGroups: string[];
  materialEvidenceGroups: string[];
  propAnchorGroups: string[];
  symbolSystemGroups: string[];
  wearTraceGroups: string[];
  bodyFeatureGroups: string[];
  surfaceGroups: string[];
  surfaceIds?: string[];
  occupationGroups?: string[];
  occupationIds?: string[];
  personaGroups?: string[];
  personaIds?: string[];
}> = {
  REALISTIC: {
    worldIds: ['cd_world_realist'],
    identityIds: ['cd_id_experiment', 'cd_id_deep_miner'],
    translationIds: ['cd_trans_uniform_code', 'cd_trans_tool_language', 'cd_trans_material_evidence', 'cd_trans_silhouette_rule', 'cd_trans_prop_anchor', 'cd_trans_wear_damage', 'cd_trans_status_contrast', 'cd_trans_no_body_mutation'],
    costumeIds: ['cd_costume_uniform', 'cd_costume_binding', 'cd_costume_nomad', 'cd_costume_weapon'],
    costumeSystemGroups: ['A.'],
    materialEvidenceGroups: ['A.'],
    propAnchorGroups: ['A.'],
    symbolSystemGroups: ['A.'],
    wearTraceGroups: ['A.'],
    bodyFeatureGroups: ['A.', 'B.'],
    surfaceGroups: ['A.', 'C.'],
    occupationGroups: ['A.', 'C.', 'E.', 'F.'],
    personaGroups: ['A.', 'B.', 'D.', 'F.']
  },
  HISTORICAL: {
    worldIds: ['cd_world_historical', 'cd_world_court'],
    identityIds: ['cd_id_relic_guardian', 'cd_id_exiled_priest', 'cd_id_court_assassin', 'cd_id_fallen_heir'],
    translationIds: ['cd_trans_uniform_code', 'cd_trans_material_evidence', 'cd_trans_pattern_symbol', 'cd_trans_silhouette_rule', 'cd_trans_prop_anchor', 'cd_trans_wear_damage', 'cd_trans_status_contrast', 'cd_trans_ritual_accessory', 'cd_trans_no_body_mutation'],
    costumeIds: ['cd_costume_uniform', 'cd_costume_ritual', 'cd_costume_weapon', 'cd_costume_nomad'],
    costumeSystemGroups: ['B.', 'D.'],
    materialEvidenceGroups: ['B.', 'C.'],
    propAnchorGroups: ['B.', 'D.'],
    symbolSystemGroups: ['B.', 'D.'],
    wearTraceGroups: ['B.', 'D.'],
    bodyFeatureGroups: ['A.', 'B.'],
    surfaceGroups: ['A.', 'C.'],
    surfaceIds: ['tx_mat_porcelain', 'tx_mat_gold', 'tx_mat_marble', 'tx_mat_jade', 'tx_mat_wood', 'tx_mat_stone', 'tx_mat_pearl'],
    occupationGroups: ['A.', 'D.', 'F.'],
    occupationIds: ['char_job_priest', 'char_sf_wizard', 'char_sf_witch'],
    personaGroups: ['B.', 'E.', 'F.'],
    personaIds: ['per_dark_aca', 'per_light_aca', 'per_wuxia', 'per_shanghai_lady']
  },
  PROFESSIONAL: {
    worldIds: ['cd_world_professional', 'cd_world_realist'],
    identityIds: ['cd_id_experiment', 'cd_id_deep_miner'],
    translationIds: ['cd_trans_uniform_code', 'cd_trans_tool_language', 'cd_trans_material_evidence', 'cd_trans_silhouette_rule', 'cd_trans_prop_anchor', 'cd_trans_wear_damage', 'cd_trans_no_body_mutation'],
    costumeIds: ['cd_costume_uniform', 'cd_costume_binding', 'cd_costume_nomad'],
    costumeSystemGroups: ['A.'],
    materialEvidenceGroups: ['A.'],
    propAnchorGroups: ['A.'],
    symbolSystemGroups: ['A.'],
    wearTraceGroups: ['A.'],
    bodyFeatureGroups: ['A.', 'B.'],
    surfaceGroups: ['A.', 'C.'],
    occupationGroups: ['C.', 'F.'],
    personaGroups: ['A.', 'D.', 'F.'],
    personaIds: ['per_gallery', 'per_tech_ceo', 'per_ol']
  },
  FASHION: {
    worldIds: [],
    identityIds: [],
    translationIds: ['cd_trans_no_body_mutation'],
    translationGroups: fashionCoreGroupPrefixes,
    costumeIds: ['cd_costume_uniform', 'cd_costume_binding', 'cd_costume_nomad', 'cd_costume_weapon'],
    costumeSystemGroups: fashionCoreGroupPrefixes,
    materialEvidenceGroups: fashionCoreGroupPrefixes,
    propAnchorGroups: fashionCoreGroupPrefixes,
    symbolSystemGroups: fashionCoreGroupPrefixes,
    wearTraceGroups: fashionCoreGroupPrefixes,
    bodyFeatureGroups: [],
    surfaceGroups: ['A.', 'C.'],
    surfaceIds: ['tx_mat_gold', 'tx_mat_chrome', 'tx_mat_plastic', 'tx_mat_rubber', 'tx_mat_pearl', 'tx_mat_oil', 'tx_mat_fabric'],
    occupationGroups: ['D.', 'E.'],
    occupationIds: ['char_job_artist', 'char_job_musician'],
    personaGroups: ['A.', 'B.', 'D.', 'E.', 'F.']
  },
  COMBAT: {
    worldIds: ['cd_world_military', 'cd_world_historical', 'cd_world_wasteland'],
    identityIds: ['cd_id_court_assassin', 'cd_id_relic_guardian', 'cd_id_fallen_heir'],
    translationIds: ['cd_trans_uniform_code', 'cd_trans_tool_language', 'cd_trans_material_evidence', 'cd_trans_silhouette_rule', 'cd_trans_prop_anchor', 'cd_trans_wear_damage', 'cd_trans_status_contrast', 'cd_trans_no_body_mutation'],
    costumeIds: ['cd_costume_uniform', 'cd_costume_binding', 'cd_costume_nomad', 'cd_costume_weapon'],
    costumeSystemGroups: ['C.', 'G.'],
    materialEvidenceGroups: ['D.', 'G.'],
    propAnchorGroups: ['C.', 'G.'],
    symbolSystemGroups: ['C.', 'G.'],
    wearTraceGroups: ['C.', 'G.'],
    bodyFeatureGroups: ['A.', 'B.'],
    surfaceGroups: ['A.', 'C.'],
    occupationGroups: ['A.', 'D.', 'F.'],
    occupationIds: ['char_sf_post_apoc'],
    personaGroups: ['D.', 'F.'],
    personaIds: ['per_sukeban', 'per_biker', 'per_punk_s', 'per_tech_ninja']
  },
  RITUAL: {
    worldIds: ['cd_world_ritual', 'cd_world_fantasy', 'cd_world_court'],
    identityIds: ['cd_id_exiled_priest', 'cd_id_relic_guardian', 'cd_id_fallen_heir'],
    translationIds: ['cd_trans_uniform_code', 'cd_trans_material_evidence', 'cd_trans_pattern_symbol', 'cd_trans_silhouette_rule', 'cd_trans_prop_anchor', 'cd_trans_wear_damage', 'cd_trans_status_contrast', 'cd_trans_ritual_accessory', 'cd_trans_no_body_mutation'],
    costumeIds: ['cd_costume_ritual', 'cd_costume_binding', 'cd_costume_uniform', 'cd_costume_weapon'],
    costumeSystemGroups: ['D.', 'B.'],
    materialEvidenceGroups: ['C.', 'B.'],
    propAnchorGroups: ['D.', 'B.'],
    symbolSystemGroups: ['D.', 'B.'],
    wearTraceGroups: ['D.', 'B.'],
    bodyFeatureGroups: ['A.', 'B.'],
    surfaceGroups: ['A.', 'C.'],
    surfaceIds: ['tx_mat_porcelain', 'tx_mat_gold', 'tx_mat_jade', 'tx_mat_marble', 'tx_mat_paper', 'tx_mat_ink', 'tx_mat_pearl'],
    occupationIds: ['char_job_priest', 'char_high_bishop', 'char_high_cult_leader', 'char_high_pharaoh', 'char_sf_wizard', 'char_sf_witch', 'char_law_executioner'],
    personaIds: ['per_wellness', 'per_dark_aca', 'per_light_aca', 'per_fortune', 'per_nun_acg', 'per_witch_acg', 'per_vamp_acg', 'per_dg']
  },
  SOCIAL: {
    worldIds: ['cd_world_realist', 'cd_world_professional', 'cd_world_fashion', 'cd_world_court'],
    identityIds: ['cd_id_deep_miner', 'cd_id_fallen_heir', 'cd_id_court_assassin', 'cd_id_experiment'],
    translationIds: ['cd_trans_uniform_code', 'cd_trans_tool_language', 'cd_trans_material_evidence', 'cd_trans_silhouette_rule', 'cd_trans_prop_anchor', 'cd_trans_wear_damage', 'cd_trans_status_contrast', 'cd_trans_no_body_mutation'],
    costumeIds: ['cd_costume_uniform', 'cd_costume_binding', 'cd_costume_nomad', 'cd_costume_weapon'],
    costumeSystemGroups: ['A.', 'B.', 'E.'],
    materialEvidenceGroups: ['A.', 'B.', 'E.'],
    propAnchorGroups: ['A.', 'B.', 'E.'],
    symbolSystemGroups: ['A.', 'B.', 'E.'],
    wearTraceGroups: ['A.', 'B.', 'E.'],
    bodyFeatureGroups: ['A.', 'B.'],
    surfaceGroups: ['A.', 'C.'],
    occupationGroups: ['C.', 'D.', 'E.', 'F.'],
    personaGroups: ['A.', 'B.', 'D.', 'E.', 'F.']
  },
  SCIFI: {
    worldIds: ['cd_world_cyberpunk', 'cd_world_space_colony', 'cd_world_biotech'],
    identityIds: ['cd_id_experiment', 'cd_id_deep_miner'],
    translationIds: ['cd_trans_uniform_code', 'cd_trans_tool_language', 'cd_trans_material_evidence', 'cd_trans_silhouette_rule', 'cd_trans_prop_anchor', 'cd_trans_wear_damage', 'cd_trans_tech_wearable', 'cd_trans_no_body_mutation'],
    costumeIds: ['cd_costume_uniform', 'cd_costume_binding', 'cd_costume_nomad', 'cd_costume_weapon'],
    costumeSystemGroups: ['F.', 'A.'],
    materialEvidenceGroups: ['F.', 'A.'],
    propAnchorGroups: ['F.', 'A.'],
    symbolSystemGroups: ['F.', 'A.'],
    wearTraceGroups: ['F.', 'A.'],
    bodyFeatureGroups: ['A.', 'B.', 'C.'],
    surfaceGroups: ['A.', 'C.'],
    surfaceIds: ['tx_mat_chrome', 'tx_mat_carbon', 'tx_mat_plastic', 'tx_mat_rubber', 'tx_mat_hologram', 'tx_mat_glitch', 'tx_mat_circuit', 'tx_mat_neon', 'cd_mat_bio_mech'],
    occupationGroups: ['B.', 'C.'],
    occupationIds: ['char_law_bounty'],
    personaGroups: ['B.', 'C.', 'D.', 'E.', 'F.'],
    personaIds: ['per_tech_ceo', 'per_tech_ninja', 'per_cyber_goth', 'per_glitch', 'per_cyber_star']
  },
  FANTASY: {
    worldIds: ['cd_world_fantasy', 'cd_world_ritual', 'cd_world_court'],
    identityIds: ['cd_id_relic_guardian', 'cd_id_exiled_priest', 'cd_id_court_assassin', 'cd_id_fallen_heir'],
    translationIds: ['cd_trans_uniform_code', 'cd_trans_material_evidence', 'cd_trans_pattern_symbol', 'cd_trans_silhouette_rule', 'cd_trans_prop_anchor', 'cd_trans_wear_damage', 'cd_trans_status_contrast', 'cd_trans_ritual_accessory', 'cd_trans_no_body_mutation'],
    costumeIds: ['cd_costume_uniform', 'cd_costume_ritual', 'cd_costume_weapon', 'cd_costume_nomad'],
    costumeSystemGroups: ['B.', 'D.'],
    materialEvidenceGroups: ['B.', 'C.'],
    propAnchorGroups: ['B.', 'D.'],
    symbolSystemGroups: ['B.', 'D.'],
    wearTraceGroups: ['B.', 'D.'],
    bodyFeatureGroups: ['A.', 'B.'],
    surfaceGroups: ['A.', 'C.'],
    surfaceIds: ['tx_mat_porcelain', 'tx_mat_gold', 'tx_mat_marble', 'tx_mat_jade', 'tx_mat_paper', 'tx_mat_wood', 'tx_mat_stone', 'tx_mat_ink', 'tx_mat_pearl'],
    occupationGroups: ['A.', 'B.', 'D.'],
    occupationIds: ['char_job_priest'],
    personaGroups: ['B.', 'C.', 'E.', 'F.'],
    personaIds: ['per_witch_acg', 'per_wuxia', 'per_hanfu', 'per_lolita_cn']
  },
  WASTELAND: {
    worldIds: ['cd_world_wasteland'],
    identityIds: ['cd_id_deep_miner', 'cd_id_experiment', 'cd_id_fallen_heir'],
    translationIds: ['cd_trans_uniform_code', 'cd_trans_tool_language', 'cd_trans_material_evidence', 'cd_trans_silhouette_rule', 'cd_trans_prop_anchor', 'cd_trans_wear_damage', 'cd_trans_status_contrast', 'cd_trans_no_body_mutation'],
    costumeIds: ['cd_costume_uniform', 'cd_costume_binding', 'cd_costume_nomad', 'cd_costume_weapon'],
    costumeSystemGroups: ['G.', 'C.'],
    materialEvidenceGroups: ['G.', 'D.'],
    propAnchorGroups: ['G.', 'C.'],
    symbolSystemGroups: ['G.', 'C.'],
    wearTraceGroups: ['G.', 'C.'],
    bodyFeatureGroups: ['A.', 'B.'],
    surfaceGroups: ['A.', 'C.'],
    occupationIds: ['char_sf_post_apoc', 'char_out_survivor', 'char_out_hobo', 'char_out_hiker', 'char_ser_miner', 'char_ser_mechanic', 'char_ser_soldier_grunt', 'char_ser_trucker', 'char_ser_fisherman', 'char_law_bounty', 'char_law_soldier'],
    personaGroups: ['B.', 'D.', 'E.'],
    personaIds: ['per_acubi', 'per_diesel', 'per_gorpcore', 'per_tech_ninja']
  }
};

const humanRegisterLayouts: Record<HumanRegisterId, {
  emphasis: string[];
  optional: string[];
  axisLabel: string;
  axisLabelEn: string;
  axisHint: string;
  axisHintEn: string;
}> = {
  REALISTIC: {
    emphasis: ['cd_world_register', 'cd_occupation', 'cd_persona', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'],
    optional: ['cd_age', 'cd_gender', 'cd_body_type', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_static_pose', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_skin_texture', 'cd_body_features', 'cd_design_sheet'],
    axisLabel: '现实可信度',
    axisLabelEn: 'Real-World Credibility',
    axisHint: '职业、材料、社会功能必须像真实世界里能成立。',
    axisHintEn: 'Profession, materials, and social function must feel plausible in the real world.'
  },
  HISTORICAL: {
    emphasis: ['cd_world_register', 'cd_identity_seed', 'cd_occupation', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'],
    optional: ['cd_age', 'cd_gender', 'cd_body_type', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_static_pose', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_skin_texture', 'cd_body_features', 'cd_design_sheet'],
    axisLabel: '时代一致性',
    axisLabelEn: 'Period Consistency',
    axisHint: '服制、阶级、工艺和道具应来自同一时代逻辑。',
    axisHintEn: 'Costume, class, craft, and props should belong to one period logic.'
  },
  PROFESSIONAL: {
    emphasis: ['cd_world_register', 'cd_occupation', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace', 'cd_static_pose'],
    optional: ['cd_identity_seed', 'cd_persona', 'cd_emotional_core', 'cd_age', 'cd_gender', 'cd_body_type', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_skin_texture', 'cd_body_features', 'cd_design_sheet'],
    axisLabel: '岗位证据',
    axisLabelEn: 'Occupational Evidence',
    axisHint: '工具、制服、污损、姿态和小道具优先证明职业。',
    axisHintEn: 'Tools, uniform, wear, posture, and small props should prove the profession first.'
  },
  FASHION: {
    emphasis: ['cd_world_register', 'cd_persona', 'cd_body_type', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'],
    optional: ['cd_identity_seed', 'cd_occupation', 'cd_emotional_core', 'cd_age', 'cd_gender', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_static_pose', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_body_features', 'cd_design_translation', 'cd_design_sheet'],
    axisLabel: '造型语法',
    axisLabelEn: 'Styling Grammar',
    axisHint: '剪影、材质、发型、配色和亚文化符号比剧情更重要。',
    axisHintEn: 'Silhouette, materials, hair, palette, and subculture codes matter more than plot.'
  },
  COMBAT: {
    emphasis: ['cd_world_register', 'cd_occupation', 'cd_body_type', 'cd_static_pose', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'],
    optional: ['cd_identity_seed', 'cd_persona', 'cd_emotional_core', 'cd_age', 'cd_gender', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_skin_texture', 'cd_body_features', 'cd_costume_logic', 'cd_surface_material', 'cd_design_translation', 'cd_design_sheet'],
    axisLabel: '战斗功能',
    axisLabelEn: 'Combat Function',
    axisHint: '装备、伤痕、等级、负重和站姿必须能解释战斗身份。',
    axisHintEn: 'Gear, scars, rank, loadout, and stance must explain the combat identity.'
  },
  RITUAL: {
    emphasis: ['cd_world_register', 'cd_identity_seed', 'cd_emotional_core', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'],
    optional: ['cd_occupation', 'cd_persona', 'cd_age', 'cd_gender', 'cd_body_type', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_static_pose', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_skin_texture', 'cd_body_features', 'cd_design_sheet'],
    axisLabel: '仪式秩序',
    axisLabelEn: 'Ritual Order',
    axisHint: '符号、封印、圣物、禁忌和姿态要服务于同一套信仰制度。',
    axisHintEn: 'Symbols, seals, relics, taboos, and posture should serve one belief system.'
  },
  SOCIAL: {
    emphasis: ['cd_world_register', 'cd_identity_seed', 'cd_occupation', 'cd_persona', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'],
    optional: ['cd_emotional_core', 'cd_age', 'cd_gender', 'cd_body_type', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_static_pose', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_skin_texture', 'cd_body_features', 'cd_costume_logic', 'cd_surface_material', 'cd_design_translation', 'cd_design_sheet'],
    axisLabel: '社会位置',
    axisLabelEn: 'Social Position',
    axisHint: '阶级、职业、边缘身份和伪装关系要能互相解释。',
    axisHintEn: 'Class, profession, marginal status, and performance should explain each other.'
  },
  SCIFI: {
    emphasis: ['cd_world_register', 'cd_identity_seed', 'cd_occupation', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'],
    optional: ['cd_persona', 'cd_emotional_core', 'cd_age', 'cd_gender', 'cd_body_type', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_static_pose', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_skin_texture', 'cd_body_features', 'cd_design_sheet'],
    axisLabel: '技术制度',
    axisLabelEn: 'Tech System',
    axisHint: '未来感必须落在可穿戴、编号、制服、工具和材料系统上。',
    axisHintEn: 'Futurism should land in wearables, serials, uniforms, tools, and material systems.'
  },
  FANTASY: {
    emphasis: ['cd_world_register', 'cd_identity_seed', 'cd_occupation', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'],
    optional: ['cd_persona', 'cd_emotional_core', 'cd_age', 'cd_gender', 'cd_body_type', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_static_pose', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_skin_texture', 'cd_body_features', 'cd_design_sheet'],
    axisLabel: '奇幻制度',
    axisLabelEn: 'Fantasy Institution',
    axisHint: '魔法、行会、王国、遗迹和身份符号必须是制度化的。',
    axisHintEn: 'Magic, guilds, kingdoms, ruins, and identity symbols should feel institutional.'
  },
  WASTELAND: {
    emphasis: ['cd_world_register', 'cd_occupation', 'cd_body_type', 'cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'],
    optional: ['cd_identity_seed', 'cd_persona', 'cd_emotional_core', 'cd_age', 'cd_gender', 'cd_ethnicity', 'cd_social_aesthetic', 'cd_face_features', 'cd_expression', 'cd_static_pose', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_skin_texture', 'cd_body_features', 'cd_design_sheet'],
    axisLabel: '生存证据',
    axisLabelEn: 'Survival Evidence',
    axisHint: '拼接、修补、稀缺、负重和材料来源要一眼能读出来。',
    axisHintEn: 'Salvage, repair, scarcity, carried weight, and material origin should read instantly.'
  }
};

const registerRandomModes: Array<{
  id: RegisterRandomMode;
  label: string;
  labelEn: string;
  desc: string;
  descEn: string;
}> = [
  {
    id: 'LAW_L1',
    label: '写实锁定',
    labelEn: 'L1 Real',
    desc: '时空坐标锁死现实边界，冲突风格只能变成当前坐标真实可发生的服制、工具和材料。',
    descEn: 'The coordinate locks reality; conflicting style pressure must become plausible costume, tools, and materials.'
  },
  {
    id: 'LAW_L2',
    label: '同构折译',
    labelEn: 'L2 Translate',
    desc: '默认推荐。保留时空骨架，把冲突风格折成同构功能：纹样、机关、道具、工艺或制度标记。',
    descEn: 'Recommended default. Keep the coordinate skeleton and translate conflicts into equivalent motifs, mechanisms, props, craft, or institutional marks.'
  },
  {
    id: 'LAW_L3',
    label: '局部缝合',
    labelEn: 'L3 Seam',
    desc: '现实坐标仍是底座，但允许一个局部异常、暧昧残片或无法完全解释的设计证据出现。',
    descEn: 'The coordinate remains the base, while one local anomaly, ambiguous remnant, or not-fully-explained design evidence may appear.'
  },
  {
    id: 'LAW_L4',
    label: '本体成立',
    labelEn: 'L4 Surreal',
    desc: '科幻、魔法、异种、义体或超现实材料可以成为世界事实，并进入身体、制度、装备和公共秩序。',
    descEn: 'Sci-fi, magic, creature, prosthetic, or surreal materials may become world facts in the body, institution, gear, and public order.'
  },
  {
    id: 'LAW_L5',
    label: '狂想接管',
    labelEn: 'L5 Rhapsody',
    desc: '跨时代拼贴、梦幻和象征可以接管设计规则，但身份骨架、剪影和设计证据必须清楚。',
    descEn: 'Cross-era collage, dream, and symbol may govern the design rules, while identity skeleton, silhouette, and design evidence stay clear.'
  }
];

const designEvidenceBlockIds = ['cd_costume_system', 'cd_material_evidence', 'cd_prop_anchor', 'cd_symbol_system', 'cd_wear_trace'];
const fashionContextualBlockIds = [
  'cd_world_register',
  'cd_identity_seed',
  'cd_emotional_core',
  'cd_design_translation',
  'cd_occupation',
  'cd_persona',
  'cd_body_type',
  'cd_hair_color',
  'cd_hair_style_f',
  'cd_hair_style_m',
  'cd_eye_shape',
  'cd_face_features',
  'cd_expression',
  'cd_body_features',
  'cd_static_pose',
  ...designEvidenceBlockIds
];

const contextualDesignEvidenceGroups: Partial<Record<HumanRegisterId, Record<string, Record<string, { group: string; groupEn: string }>>>> = {
  SCIFI: {
    cd_costume_system: {
      'A.': { group: 'A. 现实功能底座', groupEn: 'A. Real-World Utility Base' },
      'F.': { group: 'F. 科幻制度', groupEn: 'F. Sci-Fi System' }
    },
    cd_material_evidence: {
      'A.': { group: 'A. 现实材料底座', groupEn: 'A. Real Material Base' },
      'F.': { group: 'F. 科幻材料', groupEn: 'F. Sci-Fi Materials' }
    },
    cd_prop_anchor: {
      'A.': { group: 'A. 基础工具锚点', groupEn: 'A. Basic Tool Anchors' },
      'F.': { group: 'F. 科幻道具', groupEn: 'F. Sci-Fi Props' }
    },
    cd_symbol_system: {
      'A.': { group: 'A. 机构文字底座', groupEn: 'A. Institutional Text Base' },
      'F.': { group: 'F. 科幻符号', groupEn: 'F. Sci-Fi Codes' }
    },
    cd_wear_trace: {
      'A.': { group: 'A. 现实使用痕迹', groupEn: 'A. Real Use Traces' },
      'F.': { group: 'F. 科幻维护痕迹', groupEn: 'F. Sci-Fi Maintenance Traces' }
    }
  },
  SOCIAL: {
    cd_costume_system: {
      'A.': { group: 'A. 日常阶层服制', groupEn: 'A. Everyday Class Dress' },
      'B.': { group: 'B. 继承礼制残留', groupEn: 'B. Inherited Period Remnants' },
      'E.': { group: 'E. 身份表演穿搭', groupEn: 'E. Status Performance Styling' }
    },
    cd_material_evidence: {
      'A.': { group: 'A. 生活阶层材料', groupEn: 'A. Social Class Materials' },
      'B.': { group: 'B. 旧制度工艺', groupEn: 'B. Old-Order Craft' },
      'E.': { group: 'E. 消费身份材料', groupEn: 'E. Consumption-Status Materials' }
    },
    cd_prop_anchor: {
      'A.': { group: 'A. 社会功能物', groupEn: 'A. Social Function Objects' },
      'B.': { group: 'B. 家族继承物', groupEn: 'B. Inherited Objects' },
      'E.': { group: 'E. 身份表演配件', groupEn: 'E. Status Performance Accessories' }
    },
    cd_symbol_system: {
      'A.': { group: 'A. 机构标签', groupEn: 'A. Institutional Labels' },
      'B.': { group: 'B. 旧阶层符号', groupEn: 'B. Old-Class Signs' },
      'E.': { group: 'E. 品味身份符号', groupEn: 'E. Taste and Status Codes' }
    },
    cd_wear_trace: {
      'A.': { group: 'A. 生活磨损', groupEn: 'A. Life Wear' },
      'B.': { group: 'B. 继承旧化', groupEn: 'B. Inherited Aging' },
      'E.': { group: 'E. 阶层保养痕迹', groupEn: 'E. Status Maintenance Traces' }
    }
  },
  COMBAT: {
    cd_costume_system: {
      'C.': { group: 'C. 武装制度', groupEn: 'C. Armed System' },
      'G.': { group: 'G. 战场生存装束', groupEn: 'G. Battlefield Survival Dress' }
    },
    cd_material_evidence: {
      'D.': { group: 'D. 武装材料', groupEn: 'D. Combat Materials' },
      'G.': { group: 'G. 战场环境材料', groupEn: 'G. Battlefield Exposure Materials' }
    },
    cd_prop_anchor: {
      'C.': { group: 'C. 战斗道具', groupEn: 'C. Combat Props' },
      'G.': { group: 'G. 生存任务物', groupEn: 'G. Survival Mission Objects' }
    },
    cd_symbol_system: {
      'C.': { group: 'C. 战斗符号', groupEn: 'C. Combat Codes' },
      'G.': { group: 'G. 生存群体记号', groupEn: 'G. Survival Group Marks' }
    },
    cd_wear_trace: {
      'C.': { group: 'C. 战斗痕迹', groupEn: 'C. Combat Wear' },
      'G.': { group: 'G. 战场风化痕迹', groupEn: 'G. Battlefield Weathering' }
    }
  },
  RITUAL: {
    cd_costume_system: {
      'B.': { group: 'B. 历史礼制根系', groupEn: 'B. Historical Ritual Roots' },
      'D.': { group: 'D. 仪式制度', groupEn: 'D. Ritual System' }
    },
    cd_material_evidence: {
      'B.': { group: 'B. 礼制工艺根系', groupEn: 'B. Ceremonial Craft Roots' },
      'C.': { group: 'C. 仪式材料', groupEn: 'C. Ritual Materials' }
    },
    cd_prop_anchor: {
      'B.': { group: 'B. 传承礼器', groupEn: 'B. Inherited Ceremonial Objects' },
      'D.': { group: 'D. 仪式道具', groupEn: 'D. Ritual Props' }
    },
    cd_symbol_system: {
      'B.': { group: 'B. 传统纹章', groupEn: 'B. Traditional Heraldry' },
      'D.': { group: 'D. 仪式符号', groupEn: 'D. Ritual Signs' }
    },
    cd_wear_trace: {
      'B.': { group: 'B. 礼制保存痕迹', groupEn: 'B. Ceremonial Preservation' },
      'D.': { group: 'D. 仪式痕迹', groupEn: 'D. Ritual Wear' }
    }
  }
};

const borrowedDesignEvidenceGroup = {
  group: 'X. 跨语域借用',
  groupEn: 'X. Cross-Register Borrowing'
};

const legacyConceptBlockIdMap: Record<string, string> = {
  aes_director_style: 'cd_director_style',
  aes_photo_style: 'cd_photo_style',
  aes_art_style: 'cd_art_style',
  aes_anim_director: 'cd_anim_director',
  aes_art_movement: 'cd_art_movement',
  aes_camera_system: 'cd_camera_system',
  aes_lens_series: 'cd_lens_series',
  aes_optical_format: 'cd_optical_format',
  aes_texture_render: 'cd_texture_render',
  aes_physical_grain: 'cd_physical_grain',
  aes_base_tone: 'cd_base_tone',
  aes_color_science: 'cd_color_science',
  aes_art_medium: 'cd_art_medium',
  aes_line_quality: 'cd_line_quality',
  aes_canvas_texture: 'cd_canvas_texture',
  aes_image_focus: 'cd_framing_focus',
  aes_shot_size: 'cd_framing_shot_size',
  aes_visual_balance: 'cd_framing_balance',
  aes_perspective: 'cd_framing_perspective',
  aes_angle: 'cd_framing_angle',
  aes_focal_length: 'cd_framing_focal_length',
  aes_depth: 'cd_framing_depth',
  aes_shutter: 'cd_framing_shutter',
  aes_lens_fx: 'cd_framing_lens_fx',
  aes_scene_real: 'cd_scene_real',
  aes_scene_surreal: 'cd_scene_surreal',
  aes_scene_abstract: 'cd_scene_abstract',
  aes_atmosphere: 'cd_atmosphere',
  aes_particles: 'cd_particles',
  aes_light_mood: 'cd_light_mood',
  aes_light_type: 'cd_light_type',
  aes_light_direction: 'cd_light_direction',
  aes_light_shape: 'cd_light_shape',
  aes_color_palette: 'cd_color_palette',
  aes_render_real: 'cd_render_real',
  aes_render_art: 'cd_render_art',
  aes_creature_size: 'cd_creature_size',
  aes_creature_class: 'cd_creature_class',
  aes_creature_element: 'cd_creature_element',
  aes_creature_head: 'cd_creature_head',
  aes_creature_body: 'cd_creature_body',
  aes_creature_mood: 'cd_creature_mood',
  aes_creature_action: 'cd_creature_action',
  aes_creature_texture: 'cd_creature_texture'
};

const styleBlocksByMedium: Record<PhysicalMediumCategory, string[]> = {
  PAINTING: ['cd_media_paint_soul', 'cd_media_paint_quality', 'cd_media_paint_eye', 'cd_media_paint_craft', 'cd_media_paint_format'],
  CGI: ['cd_media_cgi_soul'],
  PHOTOGRAPHY: ['cd_media_photo_soul', 'cd_media_photo_quality', 'cd_media_photo_eye', 'cd_media_photo_craft', 'cd_media_photo_format'],
  TANGIBLE: ['cd_media_tangible_soul'],
  ALL: ['cd_media_paint_soul', 'cd_media_paint_quality', 'cd_media_paint_eye', 'cd_media_paint_craft', 'cd_media_paint_format', 'cd_media_cgi_soul', 'cd_media_photo_soul', 'cd_media_photo_quality', 'cd_media_photo_eye', 'cd_media_photo_craft', 'cd_media_photo_format', 'cd_media_tangible_soul']
};
const allStyleBlocks = Array.from(new Set(Object.values(styleBlocksByMedium).flat()));
const aestheticSoulAuditBlocks = [
  'cd_director_style',
  'cd_photo_style',
  'cd_art_style',
  'cd_anim_director',
  'cd_art_movement'
];
const aestheticQualityAuditBlocks = [
  'cd_camera_system',
  'cd_lens_series',
  'cd_optical_format',
  'cd_texture_render',
  'cd_physical_grain',
  'cd_base_tone',
  'cd_color_science',
  'cd_art_medium',
  'cd_line_quality',
  'cd_canvas_texture'
];
const aestheticEyeAuditBlocks = [
  'cd_framing_focus',
  'cd_framing_shot_size',
  'cd_framing_balance',
  'cd_framing_perspective',
  'cd_framing_angle',
  'cd_framing_focal_length',
  'cd_framing_depth',
  'cd_framing_shutter',
  'cd_framing_lens_fx'
];
const shotPresetBlocks = ['cd_shot_preset'];
const mediaSoulBlocksByCategory: Record<PhysicalMediumCategory, string[]> = {
  PHOTOGRAPHY: ['cd_director_style', 'cd_photo_style'],
  PAINTING: ['cd_anim_director', 'cd_art_movement', 'cd_art_style'],
  CGI: ['cd_media_cgi_soul'],
  TANGIBLE: ['cd_media_tangible_soul'],
  ALL: ['cd_director_style', 'cd_photo_style', 'cd_anim_director', 'cd_art_movement', 'cd_art_style', 'cd_media_cgi_soul', 'cd_media_tangible_soul']
};
const mediaQualityBlocksByCategory: Record<PhysicalMediumCategory, string[]> = {
  PHOTOGRAPHY: ['cd_camera_system', 'cd_lens_series', 'cd_optical_format', 'cd_texture_render', 'cd_physical_grain', 'cd_base_tone', 'cd_color_science'],
  PAINTING: ['cd_art_medium', 'cd_line_quality', 'cd_canvas_texture'],
  CGI: [],
  TANGIBLE: [],
  ALL: ['cd_camera_system', 'cd_lens_series', 'cd_optical_format', 'cd_texture_render', 'cd_physical_grain', 'cd_base_tone', 'cd_color_science', 'cd_art_medium', 'cd_line_quality', 'cd_canvas_texture']
};
const mediaEyeBlocks = shotPresetBlocks;
const getMediaSoulBlocks = (category: PhysicalMediumCategory) => mediaSoulBlocksByCategory[category];
const getMediaQualityBlocks = (category: PhysicalMediumCategory) => mediaQualityBlocksByCategory[category];
const getMediaEyeBlocks = () => mediaEyeBlocks;
const fieldSpaceTypeBlocks = ['cd_scene_real', 'cd_scene_surreal', 'cd_scene_abstract'];
const fieldEnvironmentStateBlocks = ['cd_atmosphere', 'cd_particles'];
const fieldDetailBlocks = [...fieldSpaceTypeBlocks, ...fieldEnvironmentStateBlocks];
const lightPresetBlocks = ['cd_light_preset'];
const lightDetailBlocks = ['cd_light_mood', 'cd_light_type', 'cd_light_direction', 'cd_light_air', 'cd_light_color_temp', 'cd_light_shape'];
const aestheticLightAuditBlocks = [...lightPresetBlocks, ...lightDetailBlocks];
const lightingAtmosphereRouteMeta: Record<LightingAtmosphereRandomRoute, { label: string; labelEn: string; brief: string; briefEn: string; blocks: string[] }> = {
  ALL_PRESETS: {
    label: '全部预设随机',
    labelEn: 'All Presets',
    brief: '随机选择光影预设包或布光细项路线。',
    briefEn: 'Randomly choose either a lighting preset package or lighting details route.',
    blocks: aestheticLightAuditBlocks
  },
  PRESET_PACKAGE: {
    label: '光影预设包',
    labelEn: 'Lighting Preset Pack',
    brief: '只抽主光影方案；不再叠加下方布光细项。',
    briefEn: 'Only sample the main lighting package; do not stack lower lighting details.',
    blocks: lightPresetBlocks
  },
  DETAIL_LIGHTING: {
    label: '布光细项',
    labelEn: 'Lighting Details',
    brief: '只抽明暗、光源、方向、空气、色温和投影等细项。',
    briefEn: 'Only sample mood, source, direction, air, color temperature, and shadow details.',
    blocks: lightDetailBlocks
  }
};
const aestheticRenderAuditBlocks = ['cd_render_real', 'cd_render_art'];
const aestheticStyleSoulBlocks = ['cd_director_style', 'cd_photo_style', 'cd_anim_director', 'cd_art_movement', 'cd_art_style', 'cd_media_cgi_soul', 'cd_media_tangible_soul'];
const aestheticAuditBlocks = [
  ...aestheticSoulAuditBlocks,
  ...aestheticQualityAuditBlocks,
  ...aestheticEyeAuditBlocks,
  ...fieldDetailBlocks,
  ...aestheticLightAuditBlocks,
  ...aestheticRenderAuditBlocks
];
const paletteBlocks = ['cd_color_palette'];
const fieldBlocks = [
  'cd_spacetime_coordinate',
  'cd_space_anchor_exact',
  'cd_time_anchor_exact',
  'cd_field_preset',
  'cd_style_protocol_primary',
  'cd_style_protocol_secondary',
  'cd_fusion_rule',
  'cd_field_register',
  'cd_field_style_primary',
  'cd_field_style_secondary'
];
const governanceBlocks = ['cd_spacetime_coordinate', 'cd_field_preset'];
const spacetimeStateBlocks = ['cd_spacetime_coordinate', 'cd_space_anchor_exact', 'cd_time_anchor_exact'];
const styleProtocolBlocks = ['cd_style_protocol_primary', 'cd_style_protocol_secondary'];
const semanticFieldAxisBlocks = ['cd_spacetime_coordinate', 'cd_field_preset'];
const semanticSubjectAxisBlocks = ['cd_persona', 'cd_occupation'];
const semanticStyleAxisBlocks = ['cd_style_protocol_primary', 'cd_style_protocol_secondary'];
const fieldRegisterBlock = 'cd_field_register';
const fieldStyleBlocks = ['cd_field_style_primary', 'cd_field_style_secondary'];
const spacetimeFieldUiBlocks = ['cd_spacetime_coordinate', 'cd_field_preset', ...fieldDetailBlocks];
const spacetimeFieldRouteMeta: Record<SpacetimeFieldRandomRoute, { label: string; labelEn: string; brief: string; briefEn: string; blocks: string[] }> = {
  ALL_PRESETS: {
    label: '全部预设随机',
    labelEn: 'All Presets',
    brief: '从时空坐标、场域预设、空间类型和环境状态中综合抽取。',
    briefEn: 'Sample across coordinates, field presets, space types, and environment states.',
    blocks: spacetimeFieldUiBlocks
  },
  EXACT_COORDINATE: {
    label: '精确坐标优先',
    labelEn: 'Exact Coordinate First',
    brief: '只固定精确时空坐标，可少量补环境状态，不同时抽场域预设。',
    briefEn: 'Lock only an exact time-space coordinate; optionally add environment state, never field presets.',
    blocks: ['cd_spacetime_coordinate']
  },
  REAL_SCENE: {
    label: '现实场景',
    labelEn: 'Real Scene',
    brief: '以现实空间类型为主，辅以天气和粒子。',
    briefEn: 'Prioritize realistic space types with atmosphere and particles.',
    blocks: ['cd_field_preset', 'cd_scene_real', ...fieldEnvironmentStateBlocks]
  },
  SURREAL_SCENE: {
    label: '超现实场景',
    labelEn: 'Surreal Scene',
    brief: '以超现实空间为主，允许现实锚点作为落地接口。',
    briefEn: 'Prioritize surreal spaces, with realistic anchors as grounding interfaces.',
    blocks: ['cd_field_preset', 'cd_scene_surreal', 'cd_scene_real', ...fieldEnvironmentStateBlocks]
  },
  ABSTRACT_SCENE: {
    label: '抽象场景',
    labelEn: 'Abstract Scene',
    brief: '以抽象空间和象征场为主，减少现实细节。',
    briefEn: 'Prioritize abstract spaces and symbolic fields with fewer realistic details.',
    blocks: ['cd_field_preset', 'cd_scene_abstract', 'cd_scene_surreal', ...fieldEnvironmentStateBlocks]
  },
  ENVIRONMENT_STATE: {
    label: '环境状态',
    labelEn: 'Environment State',
    brief: '只强化天气、大气和粒子，不改主体时空方向。',
    briefEn: 'Strengthen weather, atmosphere, and particles without changing the main field direction.',
    blocks: fieldEnvironmentStateBlocks
  }
};
const ontologyIdentityBlocks = ['cd_age', 'cd_gender', 'cd_occupation', 'cd_persona', 'cd_emotional_core', 'cd_ethnicity', 'cd_social_aesthetic'];
const ontologyFaceBlocks = ['cd_face_features', 'cd_makeup_style', 'cd_expression', 'cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_eye_fx'];
const ontologyBodyBlocks = ['cd_body_type', 'cd_skin_texture', 'cd_surface_state', 'cd_body_features', 'cd_body_markings', 'cd_body_damage', 'cd_body_modification'];
const ontologyCostumeBlocks = ['cd_costume_system', 'cd_costume_logic', 'cd_material_evidence', 'cd_surface_material', 'cd_wear_trace'];
const ontologyPropBlocks = ['cd_prop_anchor', 'cd_symbol_system', 'cd_design_translation'];
const ontologyActionBlocks = ['cd_static_pose', 'cd_dynamic_action', 'cd_human_behavior'];
const humanSentenceBlocks = [
  'cd_age',
  'cd_gender',
  'cd_body_type',
  'cd_ethnicity',
  'cd_social_aesthetic',
  'cd_occupation',
  'cd_persona',
  'cd_emotional_core',
  'cd_hair_color',
  'cd_hair_style_f',
  'cd_hair_style_m',
  'cd_beard_style',
  'cd_eye_color',
  'cd_eye_shape',
  'cd_eye_fx',
  'cd_face_features',
  'cd_makeup_style',
  'cd_expression',
  'cd_skin_texture',
  'cd_surface_state',
  'cd_body_features',
  'cd_body_markings',
  'cd_body_damage',
  'cd_body_modification',
  'cd_costume_logic',
  'cd_prop_anchor',
  'cd_symbol_system',
  ...ontologyActionBlocks
];
const humanSubjectBlocks = [
  ...humanSentenceBlocks,
  ...styleProtocolBlocks
];
const hiddenHumanSubjectUiBlocks = ['cd_ethnicity', 'cd_social_aesthetic'];
const humanSubjectUiBlocks = humanSubjectBlocks.filter(blockId => !hiddenHumanSubjectUiBlocks.includes(blockId));
const humanSubjectExclusiveSeedBlocks = ['cd_persona', 'cd_occupation'];
const humanSubjectStyleProtocolBlocks = ['cd_style_protocol_primary', 'cd_style_protocol_secondary'];
const humanSubjectActionStateBlocks = ['cd_static_pose', 'cd_dynamic_action', 'cd_human_behavior'];
const humanSubjectHairStyleBlocks = ['cd_hair_style_f', 'cd_hair_style_m'];
const humanSubjectAlwaysSingleBlocks = [
  'cd_age',
  'cd_gender',
  'cd_body_type',
  'cd_emotional_core',
  'cd_hair_color',
  'cd_eye_color',
  'cd_eye_shape',
  'cd_eye_fx',
  'cd_makeup_style',
  'cd_expression',
  'cd_beard_style',
  ...humanSubjectExclusiveSeedBlocks,
  ...humanSubjectStyleProtocolBlocks,
  ...humanSubjectActionStateBlocks,
  ...humanSubjectHairStyleBlocks
];
const humanSubjectMultiSelectBlocks = [
  'cd_face_features',
  'cd_skin_texture',
  'cd_surface_state',
  'cd_body_features',
  'cd_body_markings',
  'cd_body_damage',
  'cd_body_modification',
  'cd_costume_logic',
  'cd_prop_anchor',
  'cd_symbol_system'
];
const humanSubjectOptionalFineBlocks = [
  'cd_age',
  'cd_body_type',
  'cd_emotional_core',
  'cd_hair_color',
  'cd_eye_color',
  'cd_eye_shape',
  'cd_eye_fx',
  'cd_face_features',
  'cd_makeup_style',
  'cd_expression',
  'cd_skin_texture',
  'cd_surface_state',
  'cd_body_features',
  'cd_body_markings',
  'cd_body_damage',
  'cd_body_modification',
  'cd_costume_logic',
  'cd_prop_anchor',
  'cd_symbol_system'
];
const contentIntentDensityRanges: Record<ContentIntentRandomDensity, [number, number]> = {
  RANGE_1_8: [1, 8],
  RANGE_9_16: [9, 16],
  RANGE_17_23: [17, 23],
  RANGE_24_30: [24, 30],
  RANGE_31_38: [31, 38],
  FULL: [39, 44]
};
const creatureContentIntentDensityRanges: Record<ContentIntentRandomDensity, [number, number]> = {
  RANGE_1_8: [2, 3],
  RANGE_9_16: [4, 5],
  RANGE_17_23: [6, 8],
  RANGE_24_30: [9, 11],
  RANGE_31_38: [12, 14],
  FULL: [15, 16]
};
const creatureSubjectBlocks = [
  'cd_creature_preset',
  'cd_creature_size',
  'cd_creature_class',
  'cd_creature_element',
  'cd_creature_head',
  'cd_creature_body',
  'cd_creature_mood',
  'cd_creature_action',
  'cd_creature_texture'
];
const creatureArchetypeBlocks = ['cd_creature_preset', 'cd_creature_class'];
const creatureStructureBlocks = ['cd_creature_head', 'cd_creature_body', 'cd_creature_texture'];
const creatureBehaviorBlocks = ['cd_creature_mood', 'cd_creature_action'];
const creaturePrimaryHeadRoles = new Set<NonNullable<LibraryItemDef['creaturePartRole']>>([
  'primary_head',
  'cranial_structure',
  'eldritch_head',
  'elemental_head'
]);

const contentIntentPresets = [
  {
    id: 'real_worksite',
    label: '现实职业',
    labelEn: 'Real Worksite',
    subjectMode: 'HUMAN' as SubjectMode,
    subjectPrimary: ['cd_occupation', 'cd_costume_logic', 'cd_prop_anchor', 'cd_static_pose', 'cd_human_behavior'],
    subjectSupport: ['cd_age', 'cd_gender', 'cd_expression', 'cd_face_features', 'cd_surface_state', 'cd_symbol_system'],
    subjectLow: ['cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_makeup_style', 'cd_body_damage'],
    fieldPrimary: ['cd_spacetime_coordinate', 'cd_field_preset', 'cd_scene_real'],
    fieldSupport: ['cd_atmosphere'],
    lightPrimary: ['cd_light_preset', 'cd_light_type'],
    lightSupport: ['cd_light_mood', 'cd_light_direction', 'cd_light_air', 'cd_light_color_temp'],
    keys: ['professional', 'work', 'office', 'factory', 'hospital', 'street', 'city', '职业', '工装', '现实', '制度', '工具']
  },
  {
    id: 'combat_action',
    label: '战斗行动',
    labelEn: 'Combat Action',
    subjectMode: 'HUMAN' as SubjectMode,
    subjectPrimary: ['cd_dynamic_action', 'cd_static_pose', 'cd_body_damage', 'cd_prop_anchor', 'cd_costume_logic'],
    subjectSupport: ['cd_occupation', 'cd_persona', 'cd_expression', 'cd_surface_state', 'cd_wear_trace', 'cd_symbol_system'],
    subjectLow: ['cd_makeup_style', 'cd_hair_color', 'cd_face_features'],
    fieldPrimary: ['cd_field_preset', 'cd_scene_real'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_direction'],
    lightSupport: ['cd_light_type', 'cd_light_air', 'cd_light_shape'],
    keys: ['combat', 'battle', 'weapon', 'tactical', 'war', 'fighter', '战斗', '武器', '战术', '伤', '冲突']
  },
  {
    id: 'ritual_scene',
    label: '仪式场面',
    labelEn: 'Ritual Scene',
    subjectMode: 'HUMAN' as SubjectMode,
    subjectPrimary: ['cd_symbol_system', 'cd_costume_logic', 'cd_body_markings', 'cd_prop_anchor', 'cd_static_pose'],
    subjectSupport: ['cd_persona', 'cd_expression', 'cd_makeup_style', 'cd_eye_color', 'cd_eye_fx'],
    subjectLow: ['cd_body_damage', 'cd_surface_state'],
    fieldPrimary: ['cd_field_preset', 'cd_scene_real', 'cd_scene_surreal'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_type', 'cd_light_mood'],
    lightSupport: ['cd_light_direction', 'cd_light_air', 'cd_light_shape'],
    keys: ['ritual', 'temple', 'altar', 'sacred', 'ceremony', 'religious', '仪式', '祭祀', '神殿', '圣物', '符号']
  },
  {
    id: 'fashion_portrait',
    label: '时装肖像',
    labelEn: 'Fashion Portrait',
    subjectMode: 'HUMAN' as SubjectMode,
    subjectPrimary: ['cd_costume_logic', 'cd_body_type', 'cd_hair_color', 'cd_makeup_style', 'cd_expression'],
    subjectSupport: ['cd_gender', 'cd_face_features', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_prop_anchor', 'cd_symbol_system'],
    subjectLow: ['cd_body_damage', 'cd_surface_state', 'cd_body_markings'],
    fieldPrimary: ['cd_field_preset', 'cd_scene_real'],
    fieldSupport: ['cd_scene_abstract', 'cd_atmosphere'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_type'],
    lightSupport: ['cd_light_direction', 'cd_light_color_temp', 'cd_light_shape'],
    keys: ['fashion', 'portrait', 'editorial', 'couture', 'studio', 'runway', '时装', '肖像', '妆容', '发型', '高定']
  },
  {
    id: 'wasteland_survival',
    label: '废土生存',
    labelEn: 'Wasteland Survival',
    subjectMode: 'HUMAN' as SubjectMode,
    subjectPrimary: ['cd_surface_state', 'cd_wear_trace', 'cd_body_damage', 'cd_costume_logic', 'cd_prop_anchor'],
    subjectSupport: ['cd_age', 'cd_expression', 'cd_body_type', 'cd_body_markings', 'cd_material_evidence'],
    subjectLow: ['cd_makeup_style', 'cd_hair_color'],
    fieldPrimary: ['cd_field_preset', 'cd_scene_real'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_air'],
    lightSupport: ['cd_light_type', 'cd_light_direction', 'cd_light_color_temp'],
    keys: ['wasteland', 'survival', 'dust', 'ruin', 'salvage', 'scarcity', '废土', '末世', '拾荒', '尘土', '修补']
  },
  {
    id: 'scifi_experiment',
    label: '科幻实验',
    labelEn: 'Sci-Fi Experiment',
    subjectMode: 'HUMAN' as SubjectMode,
    subjectPrimary: ['cd_body_modification', 'cd_occupation', 'cd_prop_anchor', 'cd_symbol_system', 'cd_costume_logic'],
    subjectSupport: ['cd_eye_fx', 'cd_surface_state', 'cd_body_markings', 'cd_expression', 'cd_body_type'],
    subjectLow: ['cd_makeup_style', 'cd_hair_color'],
    fieldPrimary: ['cd_field_preset', 'cd_scene_real', 'cd_scene_surreal'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_type', 'cd_light_color_temp'],
    lightSupport: ['cd_light_mood', 'cd_light_direction', 'cd_light_shape'],
    keys: ['scifi', 'cyber', 'lab', 'android', 'biotech', 'interface', '科幻', '赛博', '实验', '义体', '编号']
  },
  {
    id: 'fantasy_epiphany',
    label: '奇幻显圣',
    labelEn: 'Fantasy Epiphany',
    subjectMode: 'HUMAN' as SubjectMode,
    subjectPrimary: ['cd_persona', 'cd_eye_fx', 'cd_body_markings', 'cd_symbol_system', 'cd_costume_logic'],
    subjectSupport: ['cd_hair_color', 'cd_expression', 'cd_prop_anchor', 'cd_body_features', 'cd_makeup_style'],
    subjectLow: ['cd_body_damage', 'cd_surface_state'],
    fieldPrimary: ['cd_field_preset', 'cd_scene_surreal', 'cd_scene_real'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_type'],
    lightSupport: ['cd_light_direction', 'cd_light_air', 'cd_light_shape'],
    keys: ['fantasy', 'mythic', 'magic', 'divine', 'xianxia', 'wuxia', '奇幻', '仙侠', '神话', '显圣', '魔法']
  },
  {
    id: 'creature_ontology',
    label: '异种本体',
    labelEn: 'Creature Ontology',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_class', 'cd_creature_head', 'cd_creature_body', 'cd_creature_texture'],
    subjectSupport: ['cd_creature_size', 'cd_creature_element', 'cd_creature_mood', 'cd_creature_action'],
    subjectLow: [],
    fieldPrimary: ['cd_field_preset', 'cd_scene_surreal', 'cd_scene_real'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_air'],
    lightSupport: ['cd_light_type', 'cd_light_direction', 'cd_light_shape'],
    keys: ['creature', 'monster', 'alien', 'beast', 'xeno', '异种', '怪物', '生物', '兽', '外星']
  },
  {
    id: 'creature_wild_ecology',
    label: '野性生态',
    labelEn: 'Wild Ecology',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_class', 'cd_creature_body', 'cd_creature_texture'],
    subjectSupport: ['cd_creature_size', 'cd_creature_head', 'cd_creature_mood', 'cd_creature_action'],
    subjectLow: ['cd_creature_element'],
    fieldPrimary: ['cd_field_preset', 'cd_scene_real'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_air', 'cd_light_mood'],
    lightSupport: ['cd_light_type', 'cd_light_direction'],
    keys: ['wild', 'ecology', 'beast', 'predator', 'forest', 'swamp', '野性', '生态', '捕食', '兽', '巢穴']
  },
  {
    id: 'creature_mythic_ritual',
    label: '神话仪式',
    labelEn: 'Mythic Ritual',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_class', 'cd_creature_element', 'cd_creature_head', 'cd_creature_texture'],
    subjectSupport: ['cd_creature_size', 'cd_creature_body', 'cd_creature_mood', 'cd_creature_action'],
    subjectLow: [],
    fieldPrimary: ['cd_field_preset', 'cd_scene_surreal', 'cd_scene_real'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_type'],
    lightSupport: ['cd_light_direction', 'cd_light_air', 'cd_light_shape'],
    keys: ['myth', 'ritual', 'divine', 'demon', 'altar', 'sacred', '神话', '仪式', '神兽', '恶魔', '祭坛']
  },
  {
    id: 'creature_synthetic_life',
    label: '人工生命',
    labelEn: 'Synthetic Life',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_class', 'cd_creature_texture', 'cd_creature_head', 'cd_creature_body'],
    subjectSupport: ['cd_creature_size', 'cd_creature_element', 'cd_creature_mood', 'cd_creature_action'],
    subjectLow: [],
    fieldPrimary: ['cd_field_preset', 'cd_scene_real', 'cd_scene_surreal'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_type', 'cd_light_color_temp'],
    lightSupport: ['cd_light_mood', 'cd_light_direction', 'cd_light_shape'],
    keys: ['synthetic', 'machine', 'android', 'lab', 'interface', '人工', '机械', '合成', '实验室', '接口']
  },
  {
    id: 'creature_cosmic_alien',
    label: '宇宙异星',
    labelEn: 'Cosmic Alien',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_class', 'cd_creature_head', 'cd_creature_body', 'cd_creature_texture'],
    subjectSupport: ['cd_creature_size', 'cd_creature_element', 'cd_creature_mood', 'cd_creature_action'],
    subjectLow: [],
    fieldPrimary: ['cd_field_preset', 'cd_scene_surreal', 'cd_scene_abstract'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_air'],
    lightSupport: ['cd_light_type', 'cd_light_direction', 'cd_light_shape'],
    keys: ['alien', 'cosmic', 'star', 'void', 'nebula', '外星', '宇宙', '星体', '虚空', '深空']
  },
  {
    id: 'creature_undead_corruption',
    label: '幽冥腐化',
    labelEn: 'Undead Corruption',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_class', 'cd_creature_texture', 'cd_creature_head', 'cd_creature_body'],
    subjectSupport: ['cd_creature_size', 'cd_creature_mood', 'cd_creature_action', 'cd_creature_element'],
    subjectLow: [],
    fieldPrimary: ['cd_field_preset', 'cd_scene_surreal', 'cd_scene_real'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_air'],
    lightSupport: ['cd_light_type', 'cd_light_direction', 'cd_light_shape'],
    keys: ['undead', 'decay', 'ghost', 'bone', 'rot', '幽冥', '亡灵', '腐化', '白骨', '尸']
  },
  {
    id: 'creature_elemental_disaster',
    label: '元素灾变',
    labelEn: 'Elemental Disaster',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_element', 'cd_creature_body', 'cd_creature_texture'],
    subjectSupport: ['cd_creature_size', 'cd_creature_class', 'cd_creature_head', 'cd_creature_mood', 'cd_creature_action'],
    subjectLow: [],
    fieldPrimary: ['cd_field_preset', 'cd_scene_surreal', 'cd_scene_abstract'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_air'],
    lightSupport: ['cd_light_type', 'cd_light_direction', 'cd_light_shape'],
    keys: ['elemental', 'fire', 'ice', 'storm', 'disaster', '元素', '火', '冰', '风暴', '灾变']
  },
  {
    id: 'creature_plant_fungal',
    label: '植物菌丝',
    labelEn: 'Plant Fungal',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_class', 'cd_creature_texture', 'cd_creature_body'],
    subjectSupport: ['cd_creature_size', 'cd_creature_head', 'cd_creature_mood', 'cd_creature_action', 'cd_creature_element'],
    subjectLow: [],
    fieldPrimary: ['cd_field_preset', 'cd_scene_real', 'cd_scene_surreal'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_air', 'cd_light_mood'],
    lightSupport: ['cd_light_type', 'cd_light_direction'],
    keys: ['plant', 'fungal', 'spore', 'root', 'forest', '植物', '菌丝', '孢子', '根系', '森林']
  },
  {
    id: 'creature_dream_psychic',
    label: '梦境精神',
    labelEn: 'Dream Psychic',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_head', 'cd_creature_texture', 'cd_creature_mood'],
    subjectSupport: ['cd_creature_size', 'cd_creature_class', 'cd_creature_body', 'cd_creature_action', 'cd_creature_element'],
    subjectLow: [],
    fieldPrimary: ['cd_scene_abstract', 'cd_scene_surreal', 'cd_field_preset'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_shape'],
    lightSupport: ['cd_light_type', 'cd_light_air', 'cd_light_direction'],
    keys: ['dream', 'psychic', 'surreal', 'mind', 'illusion', '梦境', '精神', '超现实', '幻觉', '意识']
  },
  {
    id: 'creature_institutional',
    label: '社会制度',
    labelEn: 'Institutional Creature',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_class', 'cd_creature_texture', 'cd_creature_mood'],
    subjectSupport: ['cd_creature_size', 'cd_creature_head', 'cd_creature_body', 'cd_creature_action', 'cd_creature_element'],
    subjectLow: [],
    fieldPrimary: ['cd_field_preset', 'cd_scene_real', 'cd_scene_surreal'],
    fieldSupport: ['cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_type', 'cd_light_mood'],
    lightSupport: ['cd_light_direction', 'cd_light_air'],
    keys: ['institution', 'hive', 'factory', 'office', 'bureaucracy', '制度', '蜂巢', '工厂', '办公室', '官僚']
  },
  {
    id: 'creature_paradox_terminal',
    label: '悖论终界',
    labelEn: 'Paradox Terminal',
    subjectMode: 'CREATURE' as SubjectMode,
    subjectPrimary: ['cd_creature_preset', 'cd_creature_head', 'cd_creature_body', 'cd_creature_texture', 'cd_creature_element'],
    subjectSupport: ['cd_creature_size', 'cd_creature_class', 'cd_creature_mood', 'cd_creature_action'],
    subjectLow: [],
    fieldPrimary: ['cd_scene_abstract', 'cd_scene_surreal'],
    fieldSupport: ['cd_field_preset', 'cd_atmosphere', 'cd_particles'],
    lightPrimary: ['cd_light_preset', 'cd_light_mood', 'cd_light_shape'],
    lightSupport: ['cd_light_type', 'cd_light_air', 'cd_light_direction'],
    keys: ['paradox', 'terminal', 'void', 'abstract', 'end', '悖论', '终界', '虚空', '抽象', '终末']
  }
] as const;
type ContentIntentPreset = typeof contentIntentPresets[number];
const creatureIntentTaxonomyPrefer: Record<string, CreatureTaxonomyTag[]> = {
  creature_ontology: ['chimera', 'eldritch', 'draconic', 'mammal', 'reptilian', 'insectoid'],
  creature_wild_ecology: ['mammal', 'avian', 'reptilian', 'aquatic', 'insectoid', 'soft_body'],
  creature_mythic_ritual: ['draconic', 'demonic', 'divine_spirit', 'undead', 'chimera'],
  creature_synthetic_life: ['machine', 'synthetic', 'energy_void', 'chimera'],
  creature_cosmic_alien: ['eldritch', 'energy_void', 'soft_body', 'aquatic', 'chimera'],
  creature_undead_corruption: ['undead', 'demonic', 'eldritch', 'swarm_parasitic'],
  creature_elemental_disaster: ['mineral_elemental', 'energy_void', 'draconic', 'divine_spirit', 'demonic'],
  creature_plant_fungal: ['plant_fungal', 'swarm_parasitic', 'soft_body', 'chimera'],
  creature_dream_psychic: ['eldritch', 'energy_void', 'divine_spirit', 'synthetic', 'chimera'],
  creature_institutional: ['swarm_parasitic', 'machine', 'synthetic', 'chimera', 'mammal'],
  creature_paradox_terminal: ['eldritch', 'energy_void', 'synthetic', 'divine_spirit', 'chimera']
};

const allBlocks: NarrativeBlockDef[] = CONCEPT_ENGINE_BLOCKS;
const allLibraries = CONCEPT_ENGINE_LIBRARY;
const CONCEPT_COMPILE_EVENT = 'mist-concept-design-compile';

const CONCEPT_GENERATION_INSTRUCTION_EVENT = 'mist-concept-design-generation-instruction';
const TIMELINE_YEAR_MIN = -2000;
const TIMELINE_YEAR_MAX = 3000;
const TIMELINE_YEAR_NOW = 2026;

const colorCompileInstructionSections = (
  sections: Array<Omit<CharacterIdentityBoardPromptSection, 'color'>>
): CharacterIdentityBoardPromptSection[] => sections.map((section) => ({
  ...section,
  color:
    section.id === 'compile_task'
      ? edictSectionCategoryColors.target
      : section.id === 'compile_variable_definition'
        ? edictSectionCategoryColors.object
        : section.id.startsWith('compile_input_')
          ? edictSectionCategoryColors.source
          : section.id === 'compile_output_schema'
            ? edictSectionCategoryColors.output
            : section.id.includes('attention')
              ? edictSectionCategoryColors.attention
              : edictSectionCategoryColors.protocol
}));

const getMediumCategoryContract = (category: PhysicalMediumCategory, lang: SkillLanguage) => {
  const contracts: Record<PhysicalMediumCategory, Record<SkillLanguage, string>> = {
    PAINTING: {
      CN: `视觉媒介编译规则：
- 生成 visualMedium 时，必须锁定为绘画 / 二维艺术媒介。
- visualMedium 必须写出具体绘画媒介，例如 digital painting、oil painting、ink illustration、watercolor、graphic novel art、anime cel painting。
- “写实”只能表示绘画写实、自然主义绘画或写实主义插画，不得写成真实相机照片。
- 不要把 visualMedium 写成真实摄影、真人剧照、3D/CGI 渲染、实体黏土或手作模型摄影，除非用户明确要求 mixed media。`,
      EN: `Visual-medium compile rule:
- When generating visualMedium, lock it to painting / 2D art.
- visualMedium must name a concrete painting medium, such as digital painting, oil painting, ink illustration, watercolor, graphic novel art, or anime cel painting.
- "Realistic" only means painterly realism, naturalist painting, or realistic illustration here, never a real camera photograph.
- Do not write visualMedium as live-action photography, film stills, 3D / CGI rendering, clay, or handmade model photography unless the user explicitly asks for mixed media.`
    },
    CGI: {
      CN: `视觉媒介编译规则：
- 生成 visualMedium 时，必须锁定为 CGI / 数字建模 / 3D 渲染。
- visualMedium 必须写出具体 3D/CGI 管线，例如 Unreal Engine cinematic character render、PBR 3D character model、stylized 3D animation asset、Octane render。
- “写实”只能表示 3D photoreal render 或 cinematic CGI realism，不得写成真人摄影或绘画写实。
- 不要把 visualMedium 写成笔触、插画、concept art painting、真实演员照片、cosplay 摄影、黏土或手作实体模型，除非用户明确要求 mixed media。`,
      EN: `Visual-medium compile rule:
- When generating visualMedium, lock it to CGI / digital modeling / 3D rendering.
- visualMedium must name a concrete 3D / CGI pipeline, such as Unreal Engine cinematic character render, PBR 3D character model, stylized 3D animation asset, or Octane render.
- "Realistic" only means 3D photoreal render or cinematic CGI realism here, never live-action photography or painterly realism.
- Do not write visualMedium as brushwork, illustration, concept art painting, real actor photography, cosplay photography, clay, or handmade model texture unless the user explicitly asks for mixed media.`
    },
    PHOTOGRAPHY: {
      CN: `视觉媒介编译规则：
- 生成 visualMedium 时，必须锁定为真实相机摄影 / 真人实拍。
- visualMedium 必须写出具体摄影媒介，例如 live-action character photography、cinematic actor costume test、studio portrait photography、film still contact sheet。
- 如果角色是人形主体，visualMedium 应指向真实演员/模特、真实服装、真实化妆、真实道具和真实灯光下的摄影。
- “写实”只能表示 photographic realism / real camera capture，不得写成写实绘画。
- 不要把 visualMedium 写成 painterly、illustration、concept art、digital painting、anime drawing、3D render、game engine、plastic CGI、clay puppet 或手作模型感。`,
      EN: `Visual-medium compile rule:
- When generating visualMedium, lock it to real-camera photography / live-action capture.
- visualMedium must name a concrete photographic medium, such as live-action character photography, cinematic actor costume test, studio portrait photography, or film still contact sheet.
- If the subject is human or humanoid, visualMedium should point to a real actor / model photographed with real costume, makeup, props, and lighting.
- "Realistic" only means photographic realism / real camera capture here, never realistic painting.
- Do not write visualMedium as painterly rendering, illustration, concept art, digital painting, anime drawing, 3D render, game engine, plastic CGI, clay puppet, or handmade model aesthetics.`
    },
    TANGIBLE: {
      CN: `视觉媒介编译规则：
- 生成 visualMedium 时，必须锁定为实体手作对象的真实相机拍摄。
- visualMedium 必须写出具体实体媒介，例如 clay stop-motion puppet、felt handmade doll、resin maquette photography、miniature practical model、paper craft character。
- “写实”只能表示真实拍摄的实体材料与微缩物理存在感，不得写成真人摄影、CGI photoreal 或绘画写实。
- visualMedium 应包含材料纤维、指痕、雕塑边缘、胶水/缝线/漆面、微距景深、比例尺度等实体证据。
- 不要把 visualMedium 写成数字绘画、插画、concept art、纯 CGI 渲染或真实人类演员照片，除非用户明确要求 mixed media。`,
      EN: `Visual-medium compile rule:
- When generating visualMedium, lock it to real-camera photography of a tangible handmade object.
- visualMedium must name a concrete physical medium, such as clay stop-motion puppet, felt handmade doll, resin maquette photography, miniature practical model, or paper craft character.
- "Realistic" only means real photographed materiality and miniature physical presence here, never live-action human photography, CGI photorealism, or painterly realism.
- visualMedium should include material fibers, fingerprints, sculpted edges, glue / stitching / paint finish, macro depth of field, scale, and other physical-construction evidence.
- Do not write visualMedium as digital painting, illustration, concept art, pure CGI rendering, or real human actor photography unless the user explicitly asks for mixed media.`
    },
    ALL: {
      CN: `视觉媒介编译规则：
- 当前为融合媒介 / 取消分流：摄影、绘画、CGI、实体手作的风格预设可以交叉使用。
- visualMedium 仍必须写成一个清楚可执行的主媒介或混合媒介方案，例如 mixed-media digital painting with photographic lighting、CGI render with oil-paint surface treatment、live-action photography with art-history color grading、tangible maquette photography with painterly compositing。
- 风格碰撞只能进入媒介质感、笔触、构图、光色、材料和观看关系；不得把主体身份、时空、事件或设计证据改写成风格词自带的题材。
- 如果用户文字已经指定单一媒介，以用户文字为准；否则从已选词中选择最能承载主体的一条主媒介，再吸收其他风格作为局部视觉语言。`,
      EN: `Visual-medium compile rule:
- Current route is fusion / no split: photography, painting, CGI, and tangible-craft style presets may be cross-used.
- visualMedium must still name one executable primary medium or mixed-media plan, such as mixed-media digital painting with photographic lighting, CGI render with oil-paint surface treatment, live-action photography with art-history color grading, or tangible maquette photography with painterly compositing.
- Style collision may affect medium texture, brushwork, composition, color-light, material, and viewing relation only; it must not rewrite subject identity, time-space, event, or design evidence into topics carried by the style words.
- If user text specifies one medium, obey it; otherwise choose the primary medium that best carries the subject, then absorb other styles as local visual language.`
    }
  };
  return contracts[category][lang];
};

const getPhotographyBodyFormContract = (mode: BodyFormMode, lang: SkillLanguage) => {
  const cn: Partial<Record<BodyFormMode, string>> = {
    VISIBLE_HYBRID: '- 本体形态选择显性半兽，应写成真实相机拍摄的特效化妆、prosthetic creature suit、animatronic / practical creature effects、真实毛发/鳞片/尾巴/爪/蛇发道具与现场灯光。',
    BEAST_BODY: '- 本体形态选择兽化本体，应写成真实相机拍摄的完整兽化特效化妆、prosthetic creature suit、animatronic / practical creature effects、真实毛发/鳞片/尾巴/爪/蛇发道具与现场灯光。',
    XENO_BODY: '- 本体形态选择异种本体，应写成真实相机拍摄的异种特效化妆、prosthetic creature suit、animatronic / practical creature effects、非人 anatomy 道具、真实表皮/触肢/外骨骼/机械生命结构与现场灯光。'
  };
  const en: Partial<Record<BodyFormMode, string>> = {
    VISIBLE_HYBRID: '- Body form is visible hybrid: write it as real-camera photography of special makeup, prosthetic creature suit, animatronic / practical creature effects, real fur / scales / tail / claws / snake-hair props, and on-set lighting.',
    BEAST_BODY: '- Body form is beast body: write it as real-camera photography of full beast-body special makeup, prosthetic creature suit, animatronic / practical creature effects, real fur / scales / tail / claws / snake-hair props, and on-set lighting.',
    XENO_BODY: '- Body form is xeno body: write it as real-camera photography of alien special makeup, prosthetic creature suit, animatronic / practical creature effects, non-human anatomy props, real skin / tendrils / exoskeleton / mechanical-life structures, and on-set lighting.'
  };
  return (lang === 'CN' ? cn[mode] : en[mode]) || '';
};

const getMediumComponentContract = (category: PhysicalMediumCategory, lang: SkillLanguage, bodyFormMode: BodyFormMode = 'HUMANOID_DISGUISE') => {
  const base = getMediumCategoryContract(category, lang);
  const bodyFormContract = category === 'PHOTOGRAPHY' ? getPhotographyBodyFormContract(bodyFormMode, lang) : '';
  return [base, bodyFormContract].filter(Boolean).join('\n');
};

const getTextInputPriorityContract = (lang: SkillLanguage) => {
  return lang === 'CN'
    ? `文字输入优先级：
1. 用户文字中的明确艺术需求必须被满足，尤其是用户写出的真人摄影、3D 虚幻引擎、绘画、雕塑、黏土、定格等物理媒介要求。
2. 如果用户文字已经明确指定具体物理媒介，以用户文字为绝对标准；不要因为默认选项改写它。
3. 如果用户文字没有明确指定物理媒介，则使用“视觉风格底线”元件作为 visualMedium 的最低底线和反跑偏锁。
4. 单一媒介分流下不要混合互相冲突的媒介；融合分流下允许 mixed media，但必须写出清楚的主媒介和吸收方式。`
    : `Text-input priority:
1. Explicit art-direction requirements in the user's text must be satisfied, especially physical-medium requests such as live-action photography, Unreal / 3D, painting, sculpture, clay, or stop-motion.
2. If the user's text explicitly names a concrete physical medium, treat that text as the absolute standard; do not rewrite it because of a default selector.
3. If the user's text does not clearly specify a physical medium, use the Medium Lock component as the minimum floor and anti-drift lock for visualMedium.
4. Under a single-medium route, do not blend conflicting media; under the fusion route, mixed media is allowed, but visualMedium must name a clear primary medium and absorption method.`;
};

const getWorldLawCompileRule = (mode: RegisterRandomMode, lang: SkillLanguage) => {
  const meta = registerRandomModes.find(item => item.id === mode) || registerRandomModes[1];
  const cnRules: Record<RegisterRandomMode, string> = {
    LAW_L1: '只允许写实和现实可解释内容字面成立。超出现实的词条必须降级为妆容、服装结构、道具、材料暗示、光影、姿态或制度标记。',
    LAW_L2: '允许非现实词条通过同构折译成立。超出现实时，把它转成同功能的时代材料、工艺、服装结构、工具、纹样、职业证据或场域制度。',
    LAW_L3: '允许一个主异常作为局部缝合证据。其余高风险或超现实词条必须吸收到服装、道具、材料、符号或姿态中，避免全身平均异化。',
    LAW_L4: '允许非现实材料、身体结构或技术/神秘事实字面成立，但必须有清楚接口、功能、材料来源和身份逻辑；不得平均堆叠多个本体通道。',
    LAW_L5: '允许狂想化显性拼贴，但仍必须保留第一识别身份、主体轴线、脸部可读性和单张完整画面的主次秩序。'
  };
  const enRules: Record<RegisterRandomMode, string> = {
    LAW_L1: 'Only realistic and materially explainable content may remain literal. Beyond-realist terms must be downgraded into makeup, costume structure, props, material hints, lighting, pose, or institutional marks.',
    LAW_L2: 'Non-realist terms may survive through equivalent translation. When beyond realism, convert them into same-function period material, craft, clothing structure, tool, pattern, occupational evidence, or field institution.',
    LAW_L3: 'Allow one primary anomaly as local seam evidence. Other high-risk or surreal terms must be absorbed into costume, prop, material, symbol, or pose to avoid evenly mutating the whole body.',
    LAW_L4: 'Non-realist material, body structure, technology, or mystic fact may remain literal, but it needs clear interface, function, material source, and identity logic; do not stack multiple ontology channels evenly.',
    LAW_L5: 'Explicit rhapsodic collage is allowed, while preserving primary identity, body axis, readable face, and the hierarchy of one complete image.'
  };

  return lang === 'CN'
    ? `当前世界法则：${meta.label} / ${meta.labelEn}
作用：世界法则只负责决定词条的现实成立程度和冲突降级方式，不负责替代输入来源、视觉媒介或内容主体 C01-C10 职责。
执行规则：${cnRules[mode]}`
    : `Current world law: ${meta.labelEn} / ${meta.label}
Role: world law only decides literalness, realism level, and downgrade behavior. It must not replace source input, visual medium, or Content Core C01-C10 responsibilities.
Execution rule: ${enRules[mode]}`;
};

const getBodyFormCompileRule = (mode: BodyFormMode, lang: SkillLanguage) => {
  const meta = bodyFormModeOptions.find(item => item.id === mode) || bodyFormModeOptions[0];
  const cnRules: Record<BodyFormMode, string> = {
    HUMANOID_DISGUISE: '硬锁第一识别为人形。妖怪、狼人、美杜莎、神怪或异种标签只能通过耳影、尾影、牙齿、瞳孔、发冠、妆容、服装结构、道具、姿态或局部材料暗示；不得生成完整兽体或怪物身体。',
    VISIBLE_HYBRID: '硬锁为人形与非人之间的混合身体。必须保留人形站立结构、脸部可读性和单张画面的主体清晰度，同时必须出现明确耳、角、尾、爪、鳞片、蛇发局部、兽化手脚、异色皮肤或局部非人器官作为本体证据。',
    BEAST_BODY: '硬锁为兽化 / 妖怪本体。狼人、狐妖、美杜莎、兽化人设等必须按字面身体成立；必须把“耳影、尾影、藏匿、暗示、民俗异征”等保守写法升级为可见兽耳、兽尾、毛发、爪、兽面、蛇发、鳞片或非人下身。仍需保持单一主体、身份可读和完整角色画面结构清楚。',
    XENO_BODY: '硬锁为非人本体。第一识别不必保持人类比例；必须以非人 anatomy、异种、机械生命、神性实体、寄生结构或超现实身体成立，并给出清楚轮廓、功能逻辑、材料证据和人格线索。'
  };
  const enRules: Record<BodyFormMode, string> = {
    HUMANOID_DISGUISE: 'Hard-lock the primary read as humanoid. Mythic, beast, Medusa, or alien labels may appear only through local hints such as ears, tail, teeth, pupils, costume structure, props, pose, or material evidence; do not generate a full beast or monster body.',
    VISIBLE_HYBRID: 'Hard-lock a hybrid body between humanoid and non-human. Keep humanoid standing structure, readable face, and clear single-image subject readability, while requiring explicit local non-human evidence such as ears, horns, tail, claws, scales, partial snake hair, beast hands/feet, unusual skin, or local non-human organs.',
    BEAST_BODY: 'Hard-lock a beast / mythic body. Werewolf, fox spirit, Medusa, beast-human, and similar identities must become literal body forms; conservative language such as hints, ear shadows, tail shadows, hidden traits, or folklore traces must be upgraded into visible ears, tail, fur, claws, beast face, snake hair, scales, or non-human lower body. Preserve one subject, readable identity, and a clear complete-character-image structure.',
    XENO_BODY: 'Hard-lock a non-human body. The primary read does not need human proportions; non-human anatomy, alien, mechanical life, divine entity, parasitic structure, or surreal body must exist literally with clear silhouette, function logic, material evidence, and personality cues.'
  };
  return lang === 'CN'
    ? `当前本体形态：${meta.label} / ${meta.labelEn}
作用：人设符号负责身份、气质、社会图像和造型方向；本体形态只负责身体显性到什么程度。
硬控制：本体形态是用户当前选择的身体显性等级，必须覆盖人设词条 def 中关于“隐藏、暗示、耳影、尾影、局部异征”的保守写法。
执行规则：${cnRules[mode]}
与对象路由关系：对象路由“人形”只表示主体入口仍以单一可读角色为中心，不等于必须保持普通人类身体，也不要求身份板结构。
世界法则关系：L1/L2 时才降级为暗示或局部证据；当前若为 L4/L5，必须让本体形态按字面成立。`
    : `Current body form: ${meta.labelEn} / ${meta.label}
Role: persona tags control identity, mood, social image, and styling direction; body form only controls how literally the body manifests.
Hard control: body form is the user's selected embodiment level and must override conservative wording in persona definitions such as hidden traits, hints, ear shadows, tail shadows, or local folklore traces.
Execution rule: ${enRules[mode]}
Relation to subject route: the humanoid route only means the image still centers on one readable character; it does not force an ordinary human body or an identity-board structure.
World-law relation: only L1/L2 downgrade to hints or local evidence; under L4/L5, the selected body form must become literal.`;
};

const getBodyFormBrief = (mode: BodyFormMode, lang: SkillLanguage) => {
  const meta = bodyFormModeOptions.find(item => item.id === mode) || bodyFormModeOptions[0];
  return lang === 'CN'
    ? `${meta.label}：${meta.desc}`
    : `${meta.labelEn}: ${meta.descEn}`;
};

const getCompileTaskContract = (mode: SourceMode, lang: SkillLanguage) => {
  if (mode === 'ARTICLE') {
    return lang === 'CN'
      ? `你是图像内容主体提示词编辑。请从文章 / 故事中只提取用户指定的人物或异种，并编译成下方定义的“内容主体 / Content Core Pack”变量槽。

目标：把文本原料整理成一组清楚、可执行、互相一致、版权安全的画面内容变量，而不是把原文片段或词条列表直接拼接成提示词。`
      : `You are an image content-core prompt editor. Extract only the user-specified character or creature from the article/story and compile it into the Content Core Pack variable slots defined below.

Goal: turn the text material into a clear, executable, internally consistent, copyright-safe set of image-content variables, not a direct concatenation of source excerpts or term lists.`;
  }
  if (mode === 'IMAGE') {
    return lang === 'CN'
      ? `你是图像内容主体反推编辑。请根据上传参考图和人工纠偏，反推出下方定义的“内容主体 / Content Core Pack”变量槽。

目标：保留参考图中真实可见的主体、媒介、风格和细节，并整理成清楚、可执行、互相一致的画面内容变量；不要擅自增加图中没有的武器、配饰、logo 或道具。`
      : `You are an image content-core reverse-analysis editor. Infer the Content Core Pack variable slots defined below from the uploaded reference image and manual correction.

Goal: preserve the visible subject, medium, style, and details from the reference image and organize them into clear, executable, internally consistent image-content variables; do not invent weapons, accessories, logos, or props not shown.`;
  }
  return lang === 'CN'
    ? `你是图像内容主体提示词编辑。请根据用户输入、词库原料和人工补充，生成下方定义的“内容主体 / Content Core Pack”变量槽。

目标：把松散灵感、词条和定义整理成一组清楚、可执行、互相一致的画面内容变量，而不是把词条列表直接拼接成提示词。`
    : `You are an image content-core prompt editor. Generate the Content Core Pack variable slots defined below from the user's input, selected lexicon material, and manual supplements.

Goal: turn loose ideas, terms, and definitions into a clear, executable, internally consistent set of image-content variables, not a direct concatenation of term lists.`;
};

const variableDefinitionTextByKey: Record<keyof SkillVariables, { cn: string; en: string }> = {
  characterSeed: {
    cn: '任务：锁定主体是谁，处在什么社会 / 叙事位置。\n要素：身份类型、职业 / 阶层、角色气质、关系位置。\n边界：不写身体结构，不写服装细节，不替 C02 / C10 做事。\n目标：让 AI 一眼知道“这个角色是什么人”。',
    en: 'Task: lock who the subject is and what social / narrative position it occupies.\nElements: identity type, profession / class, character temperament, relationship position.\nBoundary: do not write body structure, costume detail, or do the work of C02 / C10.\nGoal: let the AI immediately understand what kind of character this is.'
  },
  ageBodyType: {
    cn: '任务：锁定主体的身体形态、本体结构和身体特征。\n要素：人形 / 异种、年龄质感、性别气质、体态、身体结构、身体异常。\n边界：不写社会身份，不写场景，不写镜头。\n目标：让角色的身体成立。',
    en: 'Task: lock the subject’s body form, ontology, and physical traits.\nElements: humanoid / creature form, age texture, gender aura, physique, body structure, body anomaly.\nBoundary: do not write social identity, scene, or camera language.\nGoal: make the character’s body feel established.'
  },
  timeSpaceScene: {
    cn: '任务：锁定角色属于什么时代、空间和世界状态。\n要素：时代锚点、空间类型、现实 / 超现实等级、场域秩序。\n边界：不写具体动作，不写镜头构图，不写视觉风格。\n目标：让角色不悬空，知道他 / 它来自哪里。',
    en: 'Task: lock the era, space, and world condition the character belongs to.\nElements: era anchor, spatial type, realism / surrealism level, field order.\nBoundary: do not write concrete action, composition, or visual style.\nGoal: keep the character from floating without context.'
  },
  actionMoment: {
    cn: '任务：锁定角色此刻正在做什么，身体处于什么状态。\n要素：姿态、动作、行为目的、运动强度、瞬间状态。\n边界：不写剧情长线，不写复杂故事，不替输出模板安排分镜。\n目标：让角色不是静态词条，而是正在发生。',
    en: 'Task: lock what the character is doing now and what state the body is in.\nElements: pose, action, behavioral purpose, motion intensity, instant state.\nBoundary: do not write long plot, complex story, or storyboard layout for the output template.\nGoal: make the character feel actively present, not like a static term.'
  },
  visualMedium: {
    cn: '任务：锁定图像以什么成像媒介呈现。\n要素：摄影、绘画、CGI、动画、实体模型、混合媒介。\n边界：不写导演风格，不写色彩方案，不写光影细节。\n目标：决定画面“像什么媒介做出来”。',
    en: 'Task: lock the imaging medium used to present the image.\nElements: photography, painting, CGI, animation, tangible model, mixed media.\nBoundary: do not write director style, color plan, or lighting detail.\nGoal: decide what medium the image appears to be made from.'
  },
  style: {
    cn: '任务：锁定画面的审美来源、风格体系和艺术气质。\n要素：风格流派、导演感、美术系统、文化审美、形式倾向。\n边界：不重复媒介，不替 C07 / C09 写颜色和光。\n目标：决定画面“像哪种审美系统”。',
    en: 'Task: lock the image’s aesthetic source, style system, and artistic temperament.\nElements: style school, auteur feeling, art-direction system, cultural aesthetic, formal tendency.\nBoundary: do not repeat medium or write color and light for C07 / C09.\nGoal: decide what aesthetic system the image belongs to.'
  },
  paletteStrategy: {
    cn: '任务：锁定画面的颜色关系和主色逻辑。\n要素：主色、辅色、对比关系、饱和度、色彩情绪。\n边界：不写光源，不写阴影，不写材质反光。\n目标：让画面色彩有明确方向，而不是随机漂亮。',
    en: 'Task: lock the image’s color relationship and main color logic.\nElements: main color, secondary color, contrast relation, saturation, color mood.\nBoundary: do not write light source, shadow, or material reflection.\nGoal: give the image a clear color direction instead of random prettiness.'
  },
  compositionScene: {
    cn: '任务：锁定观看关系和画面组织方式。\n要素：景别、视角、主体占比、画面重心、空间层次、运动方向。\n边界：不写身份板 / 三视图 / 宫格排版，那属于终稿层。\n目标：决定观众如何看见这个角色。',
    en: 'Task: lock the viewing relationship and image organization.\nElements: shot size, angle, subject ratio, visual center, spatial layers, motion direction.\nBoundary: do not write identity-board, turnaround, or grid layout; that belongs to the final-output layer.\nGoal: decide how the viewer sees the character.'
  },
  lightingAtmosphere: {
    cn: '任务：锁定光从哪里来，如何塑造角色和空间气氛。\n要素：光源、明暗、方向、阴影、空气介质、色温。\n边界：不重复色彩策略，不替 C06 写风格名。\n目标：让角色被某种光影逻辑包住。',
    en: 'Task: lock where light comes from and how it shapes the character and space.\nElements: light source, contrast, direction, shadow, air medium, color temperature.\nBoundary: do not repeat palette strategy or write style names for C06.\nGoal: wrap the character in a clear lighting logic.'
  },
  otherDetails: {
    cn: '任务：锁定哪些可见细节证明前面设定成立。\n要素：服装、道具、符号、磨损、标记、材料、接口、局部证据。\n边界：不重新讲身份，不堆装饰词，只保留能被看见的证据。\n目标：防止角色空泛、漂移、只剩概念。',
    en: 'Task: lock which visible details prove the previous settings.\nElements: outfit, props, symbols, wear, marks, materials, interfaces, local evidence.\nBoundary: do not retell identity or pile decorative words; keep only visible evidence.\nGoal: prevent the character from becoming vague, drifting, or purely conceptual.'
  }
};

const getFiveVariableDefinitionContract = (lang: SkillLanguage, slots: VariableSlotMeta[] = variableMeta) => {
  const safeSlots = slots;
  const intro = lang === 'CN'
    ? `内容变量任务定义 / Content Core Pack：
请把输入内容整理成下面这些 C 槽。每个 C 槽都说明了它负责什么、必须收束什么、不能写什么；只写本节列出的 C 槽，不要额外发明新槽位。`
    : `Content Variable Task Definitions / Content Core Pack:
Organize the input material into the C slots below. Each C slot defines what it is responsible for, what it must tighten, and what it must not write; write only the C slots listed in this section and do not invent extra slots.`;
  const body = safeSlots.map((slot, index) => {
    const text = variableDefinitionTextByKey[slot.key][lang === 'CN' ? 'cn' : 'en'];
    const label = lang === 'CN' ? `${slot.key} / ${slot.label}` : `${slot.key} / ${slot.labelEn}`;
    return `${index + 1}. ${label}\n${text}`;
  }).join('\n\n');
  return `${intro}\n\n${body}`;
};

const getCompileInputRouterSections = (
  lang: SkillLanguage,
  mode: SourceMode,
  rawSourceText: string,
  textInputContract: string,
  imageReferenceNote: string,
  mediumInstruction: string,
  styleCostumeConflictProtocol: string,
  actionMotifProtocol: string,
  stripRuleHeading: (body: string) => string,
  strictInputFidelity = false
) => {
  const sourceModeLabel = lang === 'CN'
    ? (mode === 'ARTICLE' ? '文章/故事提取' : mode === 'IMAGE' ? '参考图反推' : mode === 'PRESET' ? '词库预设汇总' : '用户自由输入')
    : (mode === 'ARTICLE' ? 'article/story extraction' : mode === 'IMAGE' ? 'reference-image reverse analysis' : mode === 'PRESET' ? 'lexicon preset synthesis' : 'free user input');
  const sourceBlock = rawSourceText.trim() || (lang === 'CN' ? '等待输入来源。' : 'Waiting for source input.');
  const priorityRule = stripRuleHeading(textInputContract);
  const mediumRule = stripRuleHeading(mediumInstruction);
  const formRule = stripRuleHeading(styleCostumeConflictProtocol);
  const actionRule = actionMotifProtocol ? stripRuleHeading(actionMotifProtocol) : '';
  const strictContentFidelityRule = lang === 'CN'
    ? `\n- 严格保真开启：输入中的具体名词、可见物件、身体特征、服装结构、道具、标记、损耗和材料不得被抽象形容词吞掉；必须进入最合适的 C 槽。需要压缩时只能合并同类项，不能无声删除关键视觉证据。\n- C10 过满时，按面部、发肤、服装、道具、标记 / 材料 / 损耗分组压缩，不要概括成“细节丰富”。`
    : `\n- Strict fidelity is on: concrete nouns, visible objects, body traits, garment structures, props, marks, wear, and materials from the input must not be swallowed by abstract adjectives; place them into the most suitable C slot. When compression is needed, merge similar items instead of silently deleting key visual evidence.\n- If C10 becomes crowded, compress by face, hair/skin, costume, props, and marks / materials / wear; do not summarize it as "rich details".`;

  return lang === 'CN'
    ? [
      {
        id: 'compile_input_steering',
        title: 'M01.1 统摄模块',
        titleEn: 'M01.1 Global Steering Input',
        text: `输入来源路由总则：
所有输入来源必须先分类、再编译。不要把统摄目标、主体信息、风格参数、参考图证据、用户纠偏和细节材料平铺混合成一段提示词。

来源：M00 律令目标、当前输入模式、输出格式、世界法则、本体形态和目标协议。
当前输入模式：${sourceModeLabel}
协议：统摄模块只决定本次编译方向、裁决标准和禁止项；它不直接替代 C01-C10 的具体内容。本次目标是单张完整角色画面，不是身份板、多视图设定页或词条清单。`
      },
      {
        id: 'compile_input_subject',
        title: 'M01.2 主体模块',
        titleEn: 'M01.2 Subject Input',
        text: `来源：用户文字需求、文章/故事、参考图中的可见主体、主体词库、人工纠偏。
作用：主要进入 C01 主体身份、C02 本体身体、C03 时空场域、C04 行动事件、C10 设计证据。
协议：主体模块负责“画面里是谁 / 是什么 / 在哪里 / 正在发生什么”，不得被风格词覆盖。面对大量随机或性别冲突词时，先选择一个主体主轴，再把次要词转译为局部证据、反差、损耗痕迹、服装接口或环境压力，不要平均罗列。

【当前主体输入】
${sourceBlock}`
      },
      {
        id: 'compile_input_style',
        title: 'M01.3 风格模块',
        titleEn: 'M01.3 Style Input',
        text: `来源：媒介底座、造型协议、摄影/绘画/设计风格、色彩策略、构图和光影参数。
作用：主要进入 C05 视觉媒介、C06 审美风格、C07 色彩策略、C08 取景构图、C09 光影氛围。
协议：风格模块负责“如何观看和生成这张图”，不得改写主体身份、身体本体和事件逻辑。风格词只能进入媒介、审美、色彩、构图和光影，不得把画面改成身份板、设定页、海报或多格展示。

【媒介底座协议】
${mediumRule}

【主体造型裁决】
${formRule}
${actionRule ? `\n\n【动作母题裁决】\n${actionRule}` : ''}`
      },
      {
        id: 'compile_input_priority',
        title: 'M01.4 重点模块',
        titleEn: 'M01.4 Priority Input',
        text: `来源：用户明确强调的关键词、锁定模块、人工纠偏、参考图必须保留项。
作用：决定哪些信息必须优先保留，哪些信息需要降级、转译或删除。
协议：明确指定 > 目标协议 > 参考图可见证据 > 词库联想 > 模型自由补全。

【输入优先级协议】
${priorityRule}
${imageReferenceNote ? `\n\n【参考图规则】\n${imageReferenceNote}` : ''}`
      },
      {
        id: 'compile_input_detail',
        title: 'M01.5 细节模块',
        titleEn: 'M01.5 Detail Evidence Input',
        text: `来源：服装、道具、材料、伤痕、符号、表情、局部特征、环境物证、身份备注。
作用：主要进入 C10 设计证据，也可以反向补强 C01-C09。
协议：细节必须服务主体、事件和场域，不得堆砌成无主列表；每个保留细节都要能解释为身体证据、服装结构、道具关系、身份制度、材料痕迹或环境物证；色彩细节必须服从 C07；光影细节必须服从 C09。`
      },
      {
        id: 'compile_execution_protocol',
        title: 'M02 编译执行协议',
        titleEn: 'M02 Compile Execution Protocol',
        text: `- 不要平铺拼接输入来源；先判断每条信息属于哪个模块，再写入对应 C 槽。
- 不要把来源顺序当成画面顺序；画面顺序由 C01-C10 的职责决定。
- 冲突时按重点模块优先级裁决，并把弱化信息转译为痕迹、材质、背景压力、服装接口、道具关系或局部证据。
- 缺失内容可以留空或保持克制，不要为了填满槽位而硬编。`
      },
      {
        id: 'compile_content_protocol',
        title: 'M04 内容约束协议',
        titleEn: 'M04 Content Constraint Protocol',
        text: `当前保真模式：${strictInputFidelity ? '严格保真，具体可见词条必须归位。' : '宽松编译，允许合并、概括和清理重复信息。'}
- 每个 C 槽必须形成清楚的画面判断，不输出词条清单。
- 优先使用可见、可画、可验证的细节，少用抽象形容词。
- 不要让风格覆盖主体；不要让细节覆盖统摄目标；不要让媒介底座替代具体内容。
- C01-C10 之间不得互相打架；重复内容只保留在最合适的槽位。
- 输出必须像一张已经完成整合的角色画面 brief，而不是随机词条审计表。${strictInputFidelity ? strictContentFidelityRule : ''}`
      }
    ]
    : [
      {
        id: 'compile_input_steering',
        title: 'M01.1 统摄模块',
        titleEn: 'M01.1 Global Steering Input',
        text: `Input source router rule:
All input sources must be classified before compilation. Do not flatten steering goals, subject information, style parameters, reference-image evidence, user correction, and detail materials into one mixed prompt paragraph.

Sources: M00 Edict Target, current input mode, output schema, world law, body form, and target protocol.
Current input mode: ${sourceModeLabel}
Protocol: the steering layer only decides compilation direction, judgment standards, and forbidden items; it must not directly replace concrete C01-C10 content. The target is one complete character image, not an identity board, multi-view sheet, or term list.`
      },
      {
        id: 'compile_input_subject',
        title: 'M01.2 主体模块',
        titleEn: 'M01.2 Subject Input',
        text: `Sources: user text, article/story, visible subject in the reference image, subject lexicon, and manual correction.
Role: mainly feeds C01 Subject Identity, C02 Body Ontology, C03 Time-Space Field, C04 Action Moment, and C10 Design Evidence.
Protocol: the subject layer defines who/what is in the image, where it exists, and what is happening; it must not be overwritten by style words. When many random or gender-conflicting terms are present, choose one subject axis first, then translate secondary terms into local evidence, contrast, wear traces, garment interfaces, or environmental pressure instead of listing everything evenly.

[Current Subject Input]
${sourceBlock}`
      },
      {
        id: 'compile_input_style',
        title: 'M01.3 风格模块',
        titleEn: 'M01.3 Style Input',
        text: `Sources: medium base, form protocol, photography/painting/design style, palette strategy, composition, and lighting parameters.
Role: mainly feeds C05 Visual Medium, C06 Aesthetic Style, C07 Palette Strategy, C08 Framing & Composition, and C09 Lighting Atmosphere.
Protocol: the style layer defines how the image is viewed and generated; it must not rewrite subject identity, body ontology, or event logic. Style terms may enter medium, aesthetic, color, composition, and lighting only; they must not turn the image into an identity board, design sheet, poster, or multi-panel display.

[Medium Base Protocol]
${mediumRule}

[Subject Form Judgement]
${formRule}
${actionRule ? `\n\n[Action Motif Judgement]\n${actionRule}` : ''}`
      },
      {
        id: 'compile_input_priority',
        title: 'M01.4 重点模块',
        titleEn: 'M01.4 Priority Input',
        text: `Sources: explicitly emphasized user keywords, locked modules, manual correction, and reference-image must-keep evidence.
Role: decides what must be preserved first, and what should be downgraded, translated, or removed.
Protocol: explicit user instruction > target protocol > visible reference evidence > lexicon association > free model completion.

[Input Priority Protocol]
${priorityRule}
${imageReferenceNote ? `\n\n[Reference Image Rule]\n${imageReferenceNote}` : ''}`
      },
      {
        id: 'compile_input_detail',
        title: 'M01.5 细节模块',
        titleEn: 'M01.5 Detail Evidence Input',
        text: `Sources: outfit, props, materials, scars, symbols, expression, local features, environmental evidence, and identity notes.
Role: mainly feeds C10 Design Evidence, and may reinforce C01-C09.
Protocol: details must serve the subject, event, and field; do not pile them into an ownerless list. Every retained detail must work as body evidence, garment structure, prop relation, identity institution, material trace, or environmental evidence. Color details must obey C07; lighting details must obey C09.`
      },
      {
        id: 'compile_execution_protocol',
        title: 'M02 编译执行协议',
        titleEn: 'M02 Compile Execution Protocol',
        text: `- Do not concatenate input sources. First classify each piece of information, then write it into the matching C slot.
- Do not treat source order as image order; image order is decided by C01-C10 responsibilities.
- When inputs conflict, judge by the priority layer and translate weaker inputs into traces, materials, background pressure, garment interfaces, prop relations, or local evidence.
- Missing content may stay empty or restrained; do not invent material just to fill a slot.`
      },
      {
        id: 'compile_content_protocol',
        title: 'M04 内容约束协议',
        titleEn: 'M04 Content Constraint Protocol',
        text: `Current fidelity mode: ${strictInputFidelity ? 'strict fidelity; concrete visible terms must be placed.' : 'loose compilation; merging, summarizing, and cleaning repeated information are allowed.'}
- Each C slot must form a clear image judgement, not a term list.
- Prefer visible, drawable, verifiable details over abstract adjectives.
- Do not let style override subject; do not let details override the steering goal; do not let medium base replace concrete content.
- C01-C10 must not contradict each other; repeated content should remain only in the most suitable slot.
- The output must read like an integrated character-image brief, not a random-term audit table.${strictInputFidelity ? strictContentFidelityRule : ''}`
      }
    ];
};

const getConceptStyleCostumeConflictProtocol = (lang: SkillLanguage) => lang === 'CN'
  ? `角色 / 主体造型协议与服装系统裁决：
- 造型协议是角色 / 主体概念设计的全局统帅层，决定所有细节如何被造型化、折译和吸收。
- 服装系统与服装执行逻辑只是服装子系统的落点，负责让身份、时代、职业、危险和造型协议具体穿在身体上；它不得推翻主造型协议。
- 当造型协议与服装系统冲突时：保留造型协议的设计语法，把服装系统转译成该造型系统内部可成立的穿戴结构。
- 例：静奢日常 + 战术装具 => 隐藏式功能口袋、低调防护层、精密扣件，而不是全套佣兵装。
- 例：废土拾荒 + 宫廷礼服 => 礼服残片、破损拖尾、修补锦缎、旧阶层遗物，而不是干净宫廷公主。
- 例：高定结构 + 制度制服 => 制服等级、胸牌和岗位色被高定化为结构肩线、硬挺廓形和精确配饰位置。
- 服装相关词条必须影响剪影、衣层、开合方式、负载、口袋/挂点、材料连接、姿态和身体边界；不要只把词条标题拼进提示词。`
  : `Character / subject form protocol and costume-system judgement:
- The form protocol is the global governing layer for character / subject concept design; it decides how all details are formed, translated, and absorbed.
- The costume system and costume execution logic are only the clothing subsystem: they make identity, era, profession, danger, and the form protocol wearable on the body; they must not override the primary form protocol.
- If the form protocol conflicts with the costume system, preserve the design grammar of the form protocol and translate the costume system into a wearable structure that can exist inside that form system.
- Example: quiet luxury + tactical gear => hidden utility pockets, subtle protective layers, precise fasteners, not a full mercenary outfit.
- Example: wasteland salvage + court attire => formalwear remnants, damaged train, repaired brocade, old-class relics, not a clean court princess.
- Example: couture structure + institutional uniform => rank, badge, and workplace color become structured shoulders, crisp silhouette, and precise accessory placement.
- Costume terms must affect silhouette, layering, closure, load-bearing, pockets / mounts, material junctions, posture, and body boundary; do not paste term titles into the prompt.`;

const getConceptActionMotifProtocol = (lang: SkillLanguage) => ACTION_MOTIF_PROTOCOL[lang];

const variableOutputPlaceholderByKey: Record<keyof SkillVariables, { cn: string; en: string }> = {
  characterSeed: {
    cn: '中文，角色核心概念',
    en: 'English, core character idea'
  },
  ageBodyType: {
    cn: '中文，年龄感、身体类型、姿态、身体存在感',
    en: 'English, age impression, body type, posture, physical presence'
  },
  timeSpaceScene: {
    cn: '中文，时代、地理、空间类型、制度、技术边界和场域压力',
    en: 'English, era, geography, spatial type, institution, technology boundary, field pressure'
  },
  actionMoment: {
    cn: '中文，角色正在做什么、冲突瞬间、情绪动作和关系',
    en: 'English, what the character is doing, conflict beat, emotional action, relation'
  },
  visualMedium: {
    cn: '中文为主，可保留 English 专业词；具体视觉媒介，不要只写大类',
    en: 'English, specific rendering medium, not just a broad category'
  },
  style: {
    cn: '中文为主，可保留 English 专业词；审美风格，只写风格参考、观看关系、材料气质和整体情绪',
    en: 'English, aesthetic style: style reference, viewing relation, material mood, overall emotion'
  },
  paletteStrategy: {
    cn: '中文，主色、辅色、点缀色、背景色倾向、材质色、肤色/物体色关系、光色冷暖和禁用色；必须和其他变量一致',
    en: 'English, main color, secondary color, accent color, background tendency, material color, skin/object color relation, light color temperature, forbidden colors; must stay consistent with other variables'
  },
  compositionScene: {
    cn: '中文，景别、角度、取景、主体位置、背景占比和画面组织',
    en: 'English, shot size, angle, framing, subject placement, background ratio, image organization'
  },
  lightingAtmosphere: {
    cn: '中文，光源、明暗关系、空气感、天气、时间感和情绪压强',
    en: 'English, light source, contrast, air quality, weather, time feeling, mood pressure'
  },
  otherDetails: {
    cn: '中文，设计证据：关键道具、服装、妆发、材料、面部特征、身体标记、限制、身份备注和环境物证',
    en: 'English, design evidence: key props, outfit, makeup/hair, materials, facial features, body marks, constraints, identity notes, and environmental evidence'
  }
};

const getVariableOutputSchema = (promptLang: SkillLanguage, slots: VariableSlotMeta[] = variableMeta) => {
  const safeSlots = slots;
  const cnFields = safeSlots
    .map(slot => `    "${slot.key}": "${variableOutputPlaceholderByKey[slot.key].cn}"`)
    .join(',\n');
  const enFields = safeSlots
    .map(slot => `    "${slot.key}": "${variableOutputPlaceholderByKey[slot.key].en}"`)
    .join(',\n');
  return promptLang === 'CN'
    ? `必须只输出能被 JSON.parse 直接解析的合法 JSON，不要 markdown，不要解释。
硬性格式规则：CN 对象结束后必须用英文逗号再写 EN；所有字符串内部的英文双引号必须写成 \\"；不要尾随逗号；不要在 JSON 外输出任何文字。
长度规则：每个字段只写 1 句；中文每个字段不超过 120 个汉字，英文每个字段不超过 90 个单词；不要解释推理过程。
内容规则：字段必须严格对应上方“内容变量任务定义 / Content Core Pack”列出的 C 槽；不要新增字段，不要遗漏本格式中的字段。
每一次都同时填写中文 CN 和英文 EN 两套变量：
{
  "CN": {
${cnFields}
  },
  "EN": {
${enFields}
  }
}`
    : `Output only valid JSON that JSON.parse can parse directly. No markdown, no explanation.
Hard format rules: after the CN object, write an English comma before EN; escape every double quote inside string values as \\"; no trailing commas; no text outside JSON.
Length rules: each field must be exactly one sentence; each Chinese field must be under 120 Chinese characters, each English field under 90 words; do not explain reasoning.
Content rules: fields must strictly match the C slots listed above in "Content Variable Task Definitions / Content Core Pack"; do not add fields and do not omit fields shown in this schema.
Always fill both CN and EN variable sets:
{
  "CN": {
${cnFields}
  },
  "EN": {
${enFields}
  }
}`;
};

const getMediumFallbackVisual = (
  category: PhysicalMediumCategory,
  subjectMode: SubjectMode,
  promptLang: SkillLanguage,
  bodyFormMode: BodyFormMode = 'HUMANOID_DISGUISE'
) => {
  const creature = subjectMode === 'CREATURE';
  const photoFallback: Record<BodyFormMode, Record<SkillLanguage, string>> = {
    HUMANOID_DISGUISE: {
      CN: creature ? '真实相机拍摄的异种特效角色画面 / live-action creature costume-test photography，单一主体、真实现场光与可读环境关系。' : '真人摄影角色画面 / live-action studio character photography，单一主体、真实现场光与完整角色状态。',
      EN: creature ? 'Live-action creature costume-test photography / real-camera creature image with one subject, on-set lighting, and readable environment relation.' : 'Live-action studio character photography / actor costume-test image with one subject, on-set lighting, and a complete character state.'
    },
    VISIBLE_HYBRID: {
      CN: '真实相机拍摄的显性半兽特效角色画面 / live-action hybrid creature costume-test photography，包含真实化妆、局部 prosthetics、毛发/鳞片/尾巴/爪等道具，并保持单张画面可读。',
      EN: 'Live-action visible-hybrid creature costume-test photography with real makeup, local prosthetics, fur / scales / tail / claw props, readable as one complete image.'
    },
    BEAST_BODY: {
      CN: '真实相机拍摄的兽化本体特效角色画面 / live-action beast-body creature suit photography，包含完整 prosthetic creature suit、真实毛发/尾巴/爪/兽面或蛇发道具，并保持单张画面可读。',
      EN: 'Live-action beast-body creature-suit photography with full prosthetic creature suit, real fur / tail / claws / beast face or snake-hair props, readable as one complete image.'
    },
    XENO_BODY: {
      CN: '真实相机拍摄的异种本体特效角色画面 / live-action xeno creature practical-effects photography，包含非人 anatomy 道具、真实表皮/触肢/外骨骼/机械生命结构，并保持单张画面可读。',
      EN: 'Live-action xeno creature practical-effects photography with non-human anatomy props, real skin / tendrils / exoskeleton / mechanical-life structures, readable as one complete image.'
    }
  };
  const fallback: Record<PhysicalMediumCategory, Record<SkillLanguage, string>> = {
    PAINTING: {
      CN: creature ? '异种角色数字绘画 / digital painting creature character art，清晰二维绘画媒介，单张完整画面。' : '人物角色数字绘画 / digital painting character art，清晰二维绘画媒介，单张完整画面。',
      EN: creature ? 'Digital painting creature character art, clear 2D painting medium, one complete image.' : 'Digital painting character art, clear 2D painting medium, one complete image.'
    },
    CGI: {
      CN: creature ? 'PBR 3D 异种角色画面渲染 / CGI creature character render，单张完整画面。' : 'PBR 3D 人物角色画面渲染 / CGI character render，单张完整画面。',
      EN: creature ? 'PBR 3D creature character render / CGI creature image, one complete image.' : 'PBR 3D human character render / CGI character image, one complete image.'
    },
    PHOTOGRAPHY: {
      CN: photoFallback[bodyFormMode].CN,
      EN: photoFallback[bodyFormMode].EN
    },
    TANGIBLE: {
      CN: creature ? '实体手作异种模型摄影 / clay stop-motion creature puppet photography，单张完整画面。' : '实体手作角色模型摄影 / clay stop-motion puppet photography，单张完整画面。',
      EN: creature ? 'Clay stop-motion creature puppet photography / tangible creature maquette, one complete image.' : 'Clay stop-motion puppet photography / tangible character maquette, one complete image.'
    },
    ALL: {
      CN: creature ? '融合媒介异种角色画面 / mixed-media creature character image，以一条清楚主媒介承载主体，并吸收摄影、绘画、CGI 或实体手作的局部视觉语言。' : '融合媒介人物角色画面 / mixed-media character image，以一条清楚主媒介承载主体，并吸收摄影、绘画、CGI 或实体手作的局部视觉语言。',
      EN: creature ? 'Mixed-media creature character image, with one clear primary medium carrying the subject while absorbing local visual language from photography, painting, CGI, or tangible craft.' : 'Mixed-media character image, with one clear primary medium carrying the subject while absorbing local visual language from photography, painting, CGI, or tangible craft.'
    }
  };
  return fallback[category][promptLang];
};

const variableMeta: Array<{
  key: keyof SkillVariables;
  label: string;
  labelEn: string;
  hint: string;
  hintEn: string;
}> = [
  {
    key: 'characterSeed',
    label: 'C01 主体身份',
    labelEn: 'C01 Subject Identity',
    hint: '主体是谁/是什么，核心身份、功能、第一识别矛盾。',
    hintEn: 'Who/what the subject is: core identity, function, primary contradiction.'
  },
  {
    key: 'ageBodyType',
    label: 'C02 本体身体',
    labelEn: 'C02 Body Ontology',
    hint: '年龄感、比例、体态、姿态；异种可写 anatomy。',
    hintEn: 'Age impression, proportions, body type, posture, or creature anatomy.'
  },
  {
    key: 'timeSpaceScene',
    label: 'C03 时空场域',
    labelEn: 'C03 Time-Space Field',
    hint: '时代、地理、空间、制度、技术边界和场域压力。',
    hintEn: 'Era, geography, space, institution, technology boundary, and field pressure.'
  },
  {
    key: 'actionMoment',
    label: 'C04 行动事件',
    labelEn: 'C04 Action Moment',
    hint: '主体正在做什么，冲突瞬间、情绪动作和关系。',
    hintEn: 'What is happening: action, conflict beat, emotion, and relation.'
  },
  {
    key: 'visualMedium',
    label: 'C05 视觉媒介',
    labelEn: 'C05 Visual Medium',
    hint: '具体媒介与渲染语言，不写摄影和光影。',
    hintEn: 'Concrete medium and rendering language, without camera or lighting.'
  },
  {
    key: 'style',
    label: 'C06 审美风格',
    labelEn: 'C06 Aesthetic Style',
    hint: '风格参考、观看关系、材料气质和整体情绪。',
    hintEn: 'Style reference, viewing relation, material mood, and overall emotion.'
  },
  {
    key: 'paletteStrategy',
    label: 'C07 色彩策略',
    labelEn: 'C07 Palette Strategy',
    hint: '主色、辅色、点缀色、背景倾向、材质色和光色冷暖。',
    hintEn: 'Main, secondary, accent, background, material color, and light color temperature.'
  },
  {
    key: 'compositionScene',
    label: 'C08 取景构图',
    labelEn: 'C08 Framing & Composition',
    hint: '景别、角度、取景、主体位置和画面组织。',
    hintEn: 'Shot size, angle, framing, subject placement, and image organization.'
  },
  {
    key: 'lightingAtmosphere',
    label: 'C09 光影氛围',
    labelEn: 'C09 Lighting Atmosphere',
    hint: '光源、明暗、空气感、天气、时间感和情绪压强。',
    hintEn: 'Light source, contrast, air, weather, time feeling, and mood pressure.'
  },
  {
    key: 'otherDetails',
    label: 'C10 设计证据',
    labelEn: 'C10 Design Evidence',
    hint: '服装、道具、妆发、材料、身体标记、限制和身份备注。',
    hintEn: 'Outfit, props, makeup/hair, materials, body marks, constraints, and identity notes.'
  }
];

const variableSectionIdByKey: Record<keyof SkillVariables, string> = {
  characterSeed: 'object_character_seed',
  ageBodyType: 'object_age_body_type',
  timeSpaceScene: 'object_time_space_scene',
  actionMoment: 'object_action_moment',
  visualMedium: 'object_visual_medium',
  style: 'object_style',
  paletteStrategy: 'object_palette_strategy',
  compositionScene: 'object_composition_scene',
  lightingAtmosphere: 'object_lighting_atmosphere',
  otherDetails: 'object_other_details'
};

const buildCharacterIdentityBoardPrompt = (
  values: SkillVariables,
  promptLang: SkillLanguage,
  options: IdentityBoardOptions,
  materialPacket?: CharacterIdentityBoardMaterialPacket,
  worldLawMode?: RegisterRandomMode,
  enabledSectionIds?: string[]
) => {
  const styleCostumeConflictProtocol = getConceptStyleCostumeConflictProtocol(promptLang);
  const actionMotifProtocol = getConceptActionMotifProtocol(promptLang);
  return buildCharacterIdentityBoardPromptFromLayers({
    values,
    lang: promptLang,
    options: { ...options, worldLawMode },
    materialPacket,
    enabledSectionIds,
    protocols: {
      styleCostumeConflict: styleCostumeConflictProtocol,
      actionMotif: actionMotifProtocol
    }
  });
};

const performanceStoryboardSampleVariables: LocalizedSkillVariables = {
  CN: {
    characterSeed: '孤独女性表演者；使用参考图保持角色身份、脸部、发型、身体比例和服装连续性。她必须在全部 12 格中持续歌唱，口型、胸腔、喉部张力和呼吸压力可见。',
    ageBodyType: '成年女性身体；身体语言以高强度当代舞为核心，强调极端重心转移、扭曲雕塑姿态、塌陷后的恢复、颤抖手部、甩发和强剪影可读性。',
    timeSpaceScene: '巨大、空旷、冷硬的粗野主义大厅；只允许混凝土尺度、极端负空间、烟雾、布料运动、湿地反射和硬光束。不要加入家具、观众、复杂道具或装饰。',
    actionMoment: '12 格电影分镜表，动作持续升级：快速旋转、地面滑行、爬行转场、身体隔离、失衡、弓步、跳跃、崩塌、甩发、扭曲姿态。每格都必须有可见运动和身体动量，避免静态站姿。',
    visualMedium: '16:9 分镜表，12 个电影分镜面板；实际分镜绘画只能黑白：粗糙铅笔线、极少细节、快速动态速写、简单人体结构线、早期舞蹈预演草图质感。',
    style: '原始当代舞表演分镜；轻量、动态、未完成、粗粝；介于仪式、耗尽和情绪释放之间。画面不要精修，不要彩色插画，不要海报化。',
    paletteStrategy: '分镜主体绘画必须黑白；只有导演标注系统允许使用红、蓝、绿、橙、紫等功能色。色彩只服务动作、镜头、构图、光线和情绪标记，不参与角色或环境上色。',
    compositionScene: '电影作者式镜头语言：手持能量、甩镜、环绕运动、俯拍、侧面剪影、侵略性特写、长焦压缩、极端负空间；每格附短镜头标签。',
    lightingAtmosphere: '刺眼孤立聚光灯、斜向硬光束、烟雾里的切割光、湿地反射；最终格必须在单一刺眼聚光灯下形成压倒性的终极动作姿态。',
    otherDetails: '标注系统：红色箭头=身体运动，蓝色箭头=摄影机运动，绿色标记=构图/框选，橙色标记=光线方向，紫色标记=歌声/情绪强调，黑色文字=短镜头说明和面板标签。无时间戳。'
  },
  EN: {
    characterSeed: 'A solitary female performer; use the reference image to preserve character identity, face, hair, body proportions, and costume continuity. She must sing continuously across all 12 panels, with visible mouth shape, chest pressure, throat tension, and breath.',
    ageBodyType: 'Adult female body language driven by high-intensity contemporary dance: extreme balance shifts, distorted sculptural poses, collapse-and-recovery, trembling hands, hair whips, and strong silhouette readability.',
    timeSpaceScene: 'A massive empty brutalist hall; only concrete scale, extreme negative space, smoke, fabric motion, wet floor reflections, and harsh light beams. Do not add furniture, audience, complex props, or decoration.',
    actionMoment: 'A 12-panel cinematic storyboard sheet with constantly escalating movement: rapid turns, floor slides, crawling transitions, sharp body isolations, imbalance, lunges, jumps, collapses, hair whips, and distorted poses. Every panel must show visible motion and strong body momentum; avoid static standing poses.',
    visualMedium: '16:9 storyboard sheet, 12 cinematic panels. The actual storyboard drawings must be black and white only: rough pencil lines, minimal detail, fast gesture drawing, simple anatomy construction, unfinished early choreography previs.',
    style: 'Raw contemporary dance performance storyboard; lightweight, dynamic, unfinished, rough; caught between ritual, exhaustion, and emotional release. Do not make polished illustration, color artwork, or poster composition.',
    paletteStrategy: 'The storyboard drawings must remain black and white; only the director annotation system may use functional colors such as red, blue, green, orange, and purple. Color only marks body motion, camera movement, framing, lighting, and emotional emphasis, not character or environment rendering.',
    compositionScene: 'Cinematic arthouse camerawork: handheld energy, whip pans, orbit movement, overhead shots, side silhouettes, aggressive close-ups, long lens compression, and extreme negative space; each panel includes short lens notes.',
    lightingAtmosphere: 'Harsh isolated spotlight, angled hard light beams, cut light through smoke, wet floor reflections; the final panel must form an overwhelming final movement pose beneath one severe spotlight.',
    otherDetails: 'Annotation system: red arrows = body movement; blue arrows = camera movement; green marks = framing / composition notes; orange marks = lighting direction; purple marks = vocal / emotional emphasis; black text = short lens notes and panel labels. No timestamps.'
  }
};

const storyboardVariableMeta: typeof variableMeta = [
  {
    key: 'characterSeed',
    label: '角色引用',
    labelEn: 'Character Reference',
    hint: '参考图继承、人物连续性、歌唱状态。',
    hintEn: 'Reference-image continuity, identity, and live singing state.'
  },
  {
    key: 'ageBodyType',
    label: '身体语法',
    labelEn: 'Body Grammar',
    hint: '身体类型、重心、姿态、剪影与动势。',
    hintEn: 'Body type, balance, pose, silhouette, and momentum.'
  },
  {
    key: 'timeSpaceScene',
    label: '空间限制',
    labelEn: 'Space Lock',
    hint: '空间、环境元素、允许/禁止内容。',
    hintEn: 'Location, environment elements, allowed and forbidden content.'
  },
  {
    key: 'actionMoment',
    label: '动作词库',
    labelEn: 'Movement Bank',
    hint: '12 格动作进程与每格动量规则。',
    hintEn: '12-panel movement sequence and per-panel momentum rule.'
  },
  {
    key: 'visualMedium',
    label: '输出规格',
    labelEn: 'Output Format',
    hint: '比例、格数、绘制媒介与黑白限制。',
    hintEn: 'Ratio, panel count, drawing medium, and black-white lock.'
  },
  {
    key: 'style',
    label: '风格气质',
    labelEn: 'Style Mood',
    hint: '粗粝程度、完成度、情绪轴。',
    hintEn: 'Roughness, finish level, and emotional axis.'
  },
  {
    key: 'paletteStrategy',
    label: '色彩/标注策略',
    labelEn: 'Palette / Annotation Color',
    hint: '黑白分镜主体与彩色导演标注的边界。',
    hintEn: 'Boundary between black-white drawing and colored director notes.'
  },
  {
    key: 'compositionScene',
    label: '摄影构图',
    labelEn: 'Camera / Framing',
    hint: '镜头语言、景别、构图和镜头标注。',
    hintEn: 'Camera language, shot scale, framing, and lens notes.'
  },
  {
    key: 'lightingAtmosphere',
    label: '光影终点',
    labelEn: 'Lighting / Ending',
    hint: '光线系统、气氛和最终姿态要求。',
    hintEn: 'Lighting system, atmosphere, and final pose requirement.'
  },
  {
    key: 'otherDetails',
    label: '标注系统',
    labelEn: 'Annotation System',
    hint: '彩色导演标注、文字规则和禁用时间戳。',
    hintEn: 'Colored director notes, text rules, and no timestamps.'
  }
];

const getActiveVariableMeta = (mode: PromptTemplateMode) => (
  mode === 'PERFORMANCE_STORYBOARD' ? storyboardVariableMeta : variableMeta
);

const buildPerformanceStoryboardPromptSections = (
  values: SkillVariables,
  promptLang: SkillLanguage
): CharacterIdentityBoardPromptSection[] => colorCompileInstructionSections([
  {
    id: 'storyboard_goal',
    title: '任务核心',
    titleEn: 'Project Goal',
    text: promptLang === 'CN'
      ? `创建一张原始当代舞表演分镜，核心是强烈身体运动与现场歌唱。\n\n角色引用：${values.characterSeed || performanceStoryboardSampleVariables.CN.characterSeed}`
      : `Create a raw contemporary dance performance storyboard focused on intense physical movement and live singing.\n\nCharacter reference: ${values.characterSeed || performanceStoryboardSampleVariables.EN.characterSeed}`
  },
  {
    id: 'storyboard_format',
    title: '输出规格',
    titleEn: 'Output Format',
    text: values.visualMedium || performanceStoryboardSampleVariables[promptLang].visualMedium
  },
  {
    id: 'storyboard_body',
    title: '身体语法',
    titleEn: 'Body Grammar',
    text: values.ageBodyType || performanceStoryboardSampleVariables[promptLang].ageBodyType
  },
  {
    id: 'storyboard_movement',
    title: '动作词库',
    titleEn: 'Movement Bank',
    text: values.actionMoment || performanceStoryboardSampleVariables[promptLang].actionMoment
  },
  {
    id: 'storyboard_space',
    title: '空间限制',
    titleEn: 'Space Lock',
    text: values.timeSpaceScene || performanceStoryboardSampleVariables[promptLang].timeSpaceScene
  },
  {
    id: 'storyboard_style',
    title: '绘画风格',
    titleEn: 'Drawing Style',
    text: values.style || performanceStoryboardSampleVariables[promptLang].style
  },
  {
    id: 'storyboard_palette',
    title: '色彩/标注策略',
    titleEn: 'Palette / Annotation Color',
    text: values.paletteStrategy || performanceStoryboardSampleVariables[promptLang].paletteStrategy
  },
  {
    id: 'storyboard_camera',
    title: '摄影构图',
    titleEn: 'Camera / Framing',
    text: values.compositionScene || performanceStoryboardSampleVariables[promptLang].compositionScene
  },
  {
    id: 'storyboard_light',
    title: '光影终点',
    titleEn: 'Lighting / Ending',
    text: values.lightingAtmosphere || performanceStoryboardSampleVariables[promptLang].lightingAtmosphere
  },
  {
    id: 'storyboard_annotation',
    title: '导演标注',
    titleEn: 'Director Annotation',
    text: values.otherDetails || performanceStoryboardSampleVariables[promptLang].otherDetails
  },
  {
    id: 'storyboard_hard_locks',
    title: '硬性锁定',
    titleEn: 'Hard Locks',
    text: promptLang === 'CN'
      ? '实际分镜绘画只能黑白；彩色只允许用于指定导演标注。每一格都必须有可见运动和强身体动量。避免静态站姿。不要时间戳。'
      : 'The storyboard drawings are black and white only; annotation marks may use the specified colors. Every panel must contain visible motion and strong body momentum. Avoid static standing poses. No timestamps.'
  }
]);

const buildPerformanceStoryboardPrompt = (
  values: SkillVariables,
  promptLang: SkillLanguage,
  enabledSectionIds?: string[]
) => {
  const sections = buildPerformanceStoryboardPromptSections(values, promptLang);
  const enabled = enabledSectionIds || sections.map(section => section.id);
  return sections
    .filter(section => enabled.includes(section.id))
    .map(section => section.text)
    .filter(Boolean)
    .join('\n\n');
};

const buildVideoStoryboardPromptSections = (
  values: VideoStoryboardComposerValues,
  promptLang: SkillLanguage
): CharacterIdentityBoardPromptSection[] => {
  const slot = (key: keyof VideoStoryboardComposerValues, fallbackCn: string, fallbackEn: string) => (
    values[key].trim() || t(promptLang, fallbackCn, fallbackEn)
  );
  const sectionText = (key: keyof VideoStoryboardComposerValues) => {
    switch (key) {
      case 'targetStatement':
        return slot(
          key,
          '创建一张原始电影感动作 / 表演分镜图，核心是强烈身体运动、清楚动作推进和可读素材对象。使用参考图作为角色或素材依据。',
          'Create a raw cinematic action / performance storyboard focused on strong physical motion, clear action progression, and readable asset identity. Use reference image for the character or asset.'
        );
      case 'formatProtocol':
        return slot(
          key,
          '16:9 分镜图，12 个电影感 panel。实际分镜绘画必须只使用黑白：粗略铅笔线、最低限度细节、快速手势线能量、简单结构和强剪影可读性。保持画面轻量、动态、未完成，像早期动作 / 表演预演分镜。',
          '16:9 storyboard sheet, 12 cinematic panels. The actual storyboard drawings must be black and white only: rough pencil lines, minimal detail, fast gesture drawing energy, simple construction, and strong silhouette readability. Keep the artwork lightweight, dynamic, and unfinished like early action / performance previs.'
        );
      case 'subjectAsset':
        return promptLang === 'CN'
          ? `素材对象：\n${slot(key, '一个单一、清楚可读的核心主体。主体身份、服装 / 材料、参考图继承关系和场景归属由编译结果确定。', 'A single readable core subject. Identity, outfit / material, reference inheritance, and scene belonging are decided by the compile result.')}`
          : `Subject asset:\n${slot(key, '一个单一、清楚可读的核心主体。主体身份、服装 / 材料、参考图继承关系和场景归属由编译结果确定。', 'A single readable core subject. Identity, outfit / material, reference inheritance, and scene belonging are decided by the compile result.')}`;
      case 'motionEvent':
        return promptLang === 'CN'
          ? `运动事件：\n${slot(key, '主体正在执行一条持续升级的主动作链；动作必须从已经发生的瞬间开始，而不是从静态准备姿势开始。', 'The subject performs one continuously escalating primary action chain; the sequence starts already in action, not in a static preparation pose.')}`
          : `Motion event:\n${slot(key, '主体正在执行一条持续升级的主动作链；动作必须从已经发生的瞬间开始，而不是从静态准备姿势开始。', 'The subject performs one continuously escalating primary action chain; the sequence starts already in action, not in a static preparation pose.')}`;
      case 'actionRules':
        return slot(
          key,
          '直接从动作中开始。不要以平静站姿、准备镜头或缓慢引入开始。\n\n每个 panel 都必须包含可见运动和强身体动量。避免静态站姿。主体应当始终处在可读的力量、方向、节奏和状态变化中。',
          'Start directly in action. Do not begin with a calm stance, preparation shot, or slow introduction.\n\nEvery panel must contain visible motion and strong body momentum. Avoid static standing poses. The subject must always carry readable force, direction, rhythm, and state change.'
        );
      case 'panelProgression':
        return promptLang === 'CN'
          ? `逐格分镜：\n${slot(key, '按 1-12 列出每个 panel 的动作、镜头和推进。每一格都应该是同一条动作链上的不同节拍，而不是十二张互不相关的图。', 'List the action, camera, and progression for panels 1-12. Every panel should be a different beat in the same action chain, not twelve unrelated images.')}`
          : `Panel progression:\n${slot(key, '按 1-12 列出每个 panel 的动作、镜头和推进。每一格都应该是同一条动作链上的不同节拍，而不是十二张互不相关的图。', 'List the action, camera, and progression for panels 1-12. Every panel should be a different beat in the same action chain, not twelve unrelated images.')}`;
      case 'effectSystem':
        return promptLang === 'CN'
          ? `效果系统：\n${slot(key, '根据动作需要加入选择性的 VFX / 材料 / 情绪 / 声音强调。效果必须服务动作方向和画面读法，不要变成无关装饰。', 'Add selective VFX / material / emotional / vocal accents according to the action. Effects must support motion direction and image readability, not become unrelated decoration.')}`
          : `Effect system:\n${slot(key, '根据动作需要加入选择性的 VFX / 材料 / 情绪 / 声音强调。效果必须服务动作方向和画面读法，不要变成无关装饰。', 'Add selective VFX / material / emotional / vocal accents according to the action. Effects must support motion direction and image readability, not become unrelated decoration.')}`;
      case 'effectProgression':
        return slot(
          key,
          '效果推进：\n早期 panel 保持微妙；中段 panel 加强材料、空气、冲击或情绪证据；后段 panel 形成清楚升级；最终 panel 给出最强但仍可读的效果峰值。',
          'Effect progression:\nEarly panels stay subtle; middle panels strengthen material, air, impact, or emotional evidence; late panels create clear escalation; the final panel delivers the strongest readable effect peak.'
        );
      case 'cameraSystem':
        return promptLang === 'CN'
          ? `镜头系统：\n${slot(key, '使用电影作者式动作摄影：手持能量、甩镜感、环绕运动、俯拍、侧面剪影、侵略性近景、长焦压缩、极低角度、负空间和强视差。', 'Use cinematic arthouse action camerawork: handheld energy, whip-pan feeling, orbiting moves, overhead shots, side silhouettes, aggressive close-ups, long-lens compression, extreme low angles, negative space, and strong parallax.')}`
          : `Camera system:\n${slot(key, '使用电影作者式动作摄影：手持能量、甩镜感、环绕运动、俯拍、侧面剪影、侵略性近景、长焦压缩、极低角度、负空间和强视差。', 'Use cinematic arthouse action camerawork: handheld energy, whip-pan feeling, orbiting moves, overhead shots, side silhouettes, aggressive close-ups, long-lens compression, extreme low angles, negative space, and strong parallax.')}`;
      case 'environmentControl':
        return promptLang === 'CN'
          ? `环境控制：\n${slot(key, '环境保持极简且有氛围，只保留能支持动作读法、空间方向和情绪压力的背景元素。不要让画面过度拥挤。', 'Keep the environment minimal and atmospheric, preserving only background elements that support action readability, spatial direction, and mood pressure. Do not overcrowd the frames.')}`
          : `Environment control:\n${slot(key, '环境保持极简且有氛围，只保留能支持动作读法、空间方向和情绪压力的背景元素。不要让画面过度拥挤。', 'Keep the environment minimal and atmospheric, preserving only background elements that support action readability, spatial direction, and mood pressure. Do not overcrowd the frames.')}`;
      case 'annotationSystem':
        return slot(
          key,
          '标注颜色系统：\n红色箭头 = 身体 / 主体运动\n蓝色箭头 = 镜头运动\n绿色标记 = 取景 / 构图备注\n橙色标记 = 光线方向\n黄色或紫色标记 = VFX / 情绪 / 声音强调\n黑色文字 = 简短镜头备注和 panel 标签',
          'Annotation color system:\nred arrows = body / subject movement\nblue arrows = camera movement\ngreen marks = framing / composition notes\norange marks = lighting direction\nyellow or purple marks = VFX / emotional / vocal emphasis\nblack text = short lens notes and panel labels'
        );
      case 'negativeRules':
        return slot(
          key,
          '无时间码。无无关对白。无额外角色。无无关敌人。无 logo。无水印。无 UI。不要把 panel 画成完成插画；保持分镜草图和动作预演感。',
          'No timestamps. No unrelated dialogue. No extra characters. No unrelated enemies. No logos. No watermark. No UI. Do not turn the panels into finished illustrations; keep the storyboard sketch and action-previs feeling.'
        );
      default:
        return values[key];
    }
  };
  return colorCompileInstructionSections(
    VIDEO_STORYBOARD_COMPOSER_MODULES.map(module => ({
      id: `video_${module.id}`,
      title: module.name,
      titleEn: module.nameEn,
      text: sectionText(module.id)
    }))
  );
};

const buildVideoStoryboardPrompt = (
  values: VideoStoryboardComposerValues,
  promptLang: SkillLanguage,
  enabledSectionIds?: string[]
) => {
  const sections = buildVideoStoryboardPromptSections(values, promptLang);
  const enabled = enabledSectionIds || sections.map(section => section.id);
  return sections
    .filter(section => enabled.includes(section.id))
    .map(section => section.text)
    .filter(Boolean)
    .join('\n\n');
};

const buildPerformanceStoryboardCompileSections = (promptLang: SkillLanguage): CharacterIdentityBoardPromptSection[] => colorCompileInstructionSections([
  {
    id: 'compile_storyboard_role',
    title: '编译身份',
    titleEn: 'Compiler Role',
    text: promptLang === 'CN'
      ? '你是表演分镜提示词架构师。任务是把一个表演/舞蹈/动作分镜范本拆成内容主体变量槽，并保持“模块层 -> 变量层 -> 终稿律令”的映射关系。'
      : 'You are a performance-storyboard prompt architect. Turn a performance / dance / action storyboard sample into content-core variable slots while preserving the mapping: module layer -> variable layer -> final edict.'
  },
  {
    id: 'compile_storyboard_variables',
    title: '内容主体 C01-C10 映射',
    titleEn: 'Content Core Mapping',
    text: promptLang === 'CN'
      ? storyboardVariableMeta.map((meta, index) => `${index + 1}. ${meta.key} = ${meta.label}：${meta.hint}`).join('\n')
      : storyboardVariableMeta.map((meta, index) => `${index + 1}. ${meta.key} = ${meta.labelEn}: ${meta.hintEn}`).join('\n')
  },
  {
    id: 'compile_storyboard_sample',
    title: '范本变量',
    titleEn: 'Sample Variables',
    text: Object.entries(performanceStoryboardSampleVariables[promptLang])
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n\n')
  },
  {
    id: 'compile_storyboard_output',
    title: '输出规则',
    titleEn: 'Output Rules',
    text: promptLang === 'CN'
      ? '使用这些变量拼装一条 16:9、12 格电影分镜提示词。必须保留黑白绘画限制、每格可见运动、彩色标注图例、无时间戳，以及最终刺眼聚光灯下的压倒性姿态。'
      : 'Use these variables to assemble a 16:9, 12-panel cinematic storyboard prompt. Preserve black-and-white drawing constraints, visible motion in every panel, colored annotation legend, no timestamps, and the overwhelming final spotlight pose.'
  }
]);

const buildVideoStoryboardCompileSections = (promptLang: SkillLanguage): CharacterIdentityBoardPromptSection[] => {
  const generatedModules = VIDEO_STORYBOARD_COMPOSER_MODULES.filter(module => module.role === 'generated' || module.role === 'sequence');
  return colorCompileInstructionSections([
    {
      id: 'compile_video_role',
      title: '编译身份',
      titleEn: 'Compiler Role',
      text: promptLang === 'CN'
        ? '你是视频分镜提示词编译器。任务是把用户输入、词库选择、参考图和风格要求，编译成一组可放入分镜终稿的“编译结果模块”。不要输出完整终稿；只生成需要加工的内容。'
        : 'You are a video-storyboard prompt compiler. Turn user input, lexicon selections, reference images, and style requirements into compile-result modules that can be assembled into the final storyboard prompt. Do not output the full final prompt; generate only the content that needs processing.'
    },
    {
      id: 'compile_video_target',
      title: '基础目标',
      titleEn: 'Base Target',
      text: promptLang === 'CN'
        ? '基础目标是一张 16:9、12 格电影感分镜图。终稿结构包含目标声明、格式参数、素材对象、运动事件、动作规则、逐格分镜、效果系统、效果推进、镜头系统、环境控制、标注系统和禁止项。'
        : 'The base target is a 16:9, 12-panel cinematic storyboard sheet. The final structure contains target statement, format protocol, subject asset, motion event, action rules, panel progression, effect system, effect progression, camera system, environment control, annotation system, and negative rules.'
    },
    {
      id: 'compile_video_generated_modules',
      title: '需要生成的模块',
      titleEn: 'Generated Modules',
      text: generatedModules.map((module, index) => (
        promptLang === 'CN'
          ? `${index + 1}. ${module.name}：${module.description}`
          : `${index + 1}. ${module.nameEn}: ${module.descriptionEn}`
      )).join('\n')
    },
    {
      id: 'compile_video_rules',
      title: '生成规则',
      titleEn: 'Generation Rules',
      text: promptLang === 'CN'
        ? [
            '只生成上述模块的内容，不要生成终稿里那些固定协议模块。',
            '素材对象要说明谁 / 什么在画面中，必要时吸收参考图。',
            '运动事件要写一条清楚的主动作链，不要写静态设定。',
            '逐格分镜如果启用，必须按 panel 编号列出动作、镜头和推进。',
            '效果系统只写真正可见的 VFX、情绪、声音或材料强调。',
            '镜头系统写景别、角度、运动、压缩、负空间和观看关系。',
            '环境控制写空间材料和背景元素，同时保持画面不要拥挤。',
            '输出语言必须跟随当前模式：中文模式输出中文，英文模式输出英文。'
          ].join('\n')
        : [
            'Generate only the modules listed above; do not generate fixed protocol modules from the final prompt.',
            'Subject asset states who / what appears in the image and may absorb reference images when needed.',
            'Motion event must describe one clear primary action chain, not a static setup.',
            'If panel progression is enabled, list action, camera, and escalation by panel number.',
            'Effect system should contain only visible VFX, emotional, vocal, or material accents.',
            'Camera system covers shot size, angle, movement, compression, negative space, and viewing relation.',
            'Environment control covers spatial materials and background elements while keeping the frames uncluttered.',
            'Output language must follow the current mode: Chinese mode outputs Chinese, English mode outputs English.'
          ].join('\n')
    },
    {
      id: 'compile_video_output',
      title: '输出格式',
      titleEn: 'Output Format',
      text: promptLang === 'CN'
        ? `只输出 JSON，不要 markdown，不要解释。字段如下：\n{\n${generatedModules.map(module => `  "${module.id}": "${module.name}内容"`).join(',\n')}\n}`
        : `Output JSON only. No markdown, no explanation. Use these fields:\n{\n${generatedModules.map(module => `  "${module.id}": "${module.nameEn} content"`).join(',\n')}\n}`
    }
  ]);
};

const buildConceptGenerationInstruction = (
  mode: SourceMode,
  sourceInputs: SourceInputs,
  promptLang: SkillLanguage,
  options: IdentityBoardOptions,
  _sourceLabel: string,
  _sourceLabelEn: string,
  includeActionMotif = false,
  variableSlots: VariableSlotMeta[] = variableMeta
) => {
  const emptyIdea = promptLang === 'CN' ? '等待输入灵感元素。' : 'Waiting for idea elements.';
  const emptyArticle = promptLang === 'CN' ? '等待粘贴文章、故事或设定文本。' : 'Waiting for article, story, or setting text.';
  const emptyImage = promptLang === 'CN' ? '等待上传参考图或填写图片反馈。' : 'Waiting for a reference image or image feedback.';
  const textInputContract = getTextInputPriorityContract(promptLang);
  const outputSchema = getVariableOutputSchema(promptLang, variableSlots);
  const mediumInstruction = getMediumComponentContract(options.mediumCategory, promptLang, options.bodyFormMode);
  const bodyFormInstruction = getBodyFormCompileRule(options.bodyFormMode, promptLang);
  const styleCostumeConflictProtocol = getConceptStyleCostumeConflictProtocol(promptLang);
  const actionMotifProtocol = includeActionMotif ? getConceptActionMotifProtocol(promptLang) : '';
  const hasManualGuidance = sourceInputs.imageGuidance.trim().length > 0;
  const manualGuidanceBlock = hasManualGuidance
    ? (promptLang === 'CN'
      ? `用户人工引导与纠偏：\n${sourceInputs.imageGuidance.trim()}`
      : `User manual guidance:\n${sourceInputs.imageGuidance.trim()}`)
    : '';
  const imageReferenceNote = sourceInputs.imageDataUrl
    ? (promptLang === 'CN'
      ? `参考图：${sourceInputs.imageName || '未命名参考图'} 将作为 inlineData / image part 附加。不要擅自增加参考图中没有的道具、配饰或细节。`
      : `Reference image: ${sourceInputs.imageName || 'untitled reference image'} is attached as inlineData / image part. Do not invent props, accessories, or details that are not in the reference.`)
    : '';

  if (mode === 'PRESET') {
    return promptLang === 'CN'
      ? `你是完整角色画面提示词编辑。请根据用户的灵感、元素和需求，生成“内容主体 / Content Core Pack”的十个变量槽。
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

用户需求：
（等待从左侧词库选择中汇总灵感）

规则：
- 读取“视觉风格 / 配色方案 / 统摄模块 / 本体论细节”的词库选择，把它们压缩成清楚、可执行的单张角色画面方向。
- characterSeed 写角色核心概念，不要写长故事。
- ageBodyType 写年龄感、体型、姿态和身体存在感。
- timeSpaceScene 写时代、地理、空间类型、社会制度、技术边界、文化接口和场域压力。
- actionMoment 写角色正在做什么、冲突瞬间、情绪动作、人物/环境关系；即使动作很轻，也必须是单张画面中的真实状态。
- visualMedium 写具体物理媒介与成像方式；必须锁定摄影 / 绘画 / CGI / 实体之一。
- style 只写审美风格：风格参考、观看关系、材料气质和整体情绪；不要塞入构图、光影或完整配色表。
- paletteStrategy 写整张图的色彩秩序：主色、辅色、点缀色、背景色倾向、材质色、肤色/物体色关系、光色冷暖和禁用色；必须与时空场域、视觉媒介、审美风格和光影氛围一致。
- compositionScene 写景别、角度、镜头距离、取景、主体位置、背景占比、空间层次和画面组织。
- lightingAtmosphere 写光源、明暗关系、空气感、天气、时间感和情绪压强；光影必须服务主体、事件和场域。
- otherDetails 写设计证据：服装、道具、妆发、材料、面部特征、身体标记、身份备注、限制和环境物证；其中的颜色证据必须服从 paletteStrategy。
- 不要复制任何现有 IP、名人或品牌角色。

${outputSchema}`
      : `You are a complete character-image prompt editor. Based on the user's idea, elements, and needs, generate the ten Content Core Pack variable slots.
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

User request:
(waiting for selected lexicon terms from the left panel)

Rules:
- Read the selected terms from Visual Style / Palette / Governance and Ontology Detail, then compress them into a clear, executable direction for one complete character image.
- characterSeed is the core concept, not a long story.
- ageBodyType covers age impression, body type, posture, and physical presence.
- timeSpaceScene covers era, geography, spatial type, social system, technology boundary, cultural interface, and field pressure.
- actionMoment covers what the character is doing, conflict beat, emotional action, and character/environment relation; even a subtle action must be a real state inside one image.
- visualMedium names the concrete physical medium and image-making method; it must lock to photography / painting / CGI / tangible craft.
- style is only aesthetic style: style reference, viewing relation, material mood, and overall emotion; do not put composition, lighting, or a full color plan here.
- paletteStrategy defines the whole image color order: main color, secondary color, accent color, background tendency, material color, skin/object color relation, light color temperature, and forbidden colors; it must stay consistent with time-space field, visual medium, aesthetic style, and lighting atmosphere.
- compositionScene covers shot size, angle, lens distance, framing, subject placement, background ratio, spatial depth, and image organization.
- lightingAtmosphere covers light source, contrast, air quality, weather, time feeling, and emotional pressure; lighting must serve subject, event, and field.
- otherDetails covers design evidence: outfit, props, makeup/hair, materials, facial features, body marks, identity notes, constraints, and environmental evidence; color evidence must obey paletteStrategy.
- Do not copy any existing IP, celebrity, or brand character.

${outputSchema}`;
  }

  if (mode === 'ARTICLE') {
    const target = sourceInputs.targetCharacter.trim() || (promptLang === 'CN' ? '文本中的核心角色 / 异种' : 'the core character / creature in the text');
    const article = sourceInputs.articleText.trim() || emptyArticle;
    return promptLang === 'CN'
      ? `你是完整角色画面提示词编辑。请从下面文章/故事中，只提取用户指定的人物或异种，并生成“内容主体 / Content Core Pack”的十个变量槽。
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

目标人物 / 异种：
${target}

规则：
- 只基于文章明示内容和合理视觉推断。
- 不要生成整篇故事的所有人物，只处理目标人物 / 异种。
- 如果文章没写清外貌，写成“可推断但需设计锁定”的具体视觉方向。
- timeSpaceScene 写文章中明示或可推断的时代、地点、空间、制度和场域压力。
- actionMoment 写目标人物正在做什么、处于什么冲突或情绪瞬间。
- visualMedium 是最终要给图像模型使用的具体媒介描述，不是用户选择的大类；必须体现文章/人工引导中的明确媒介需求，并在未指定时服从上面的视觉风格底线。
- style 只写审美风格，不写构图、光影或完整配色表。
- paletteStrategy 写文章中明示或可推断的整体配色秩序；如果文章未提供，必须从时空、媒介、风格和光影中保守推导。
- compositionScene 写画面如何观看主体。
- lightingAtmosphere 写光影氛围；文章未提供时保持克制推断。
- otherDetails 写文章中可见或可推断的服装、道具、妆发、材料、面部特征、身体标记、身份备注和限制；颜色证据必须服从 paletteStrategy。
- 不要复制任何现有 IP、名人或品牌角色。

${manualGuidanceBlock}

文章/故事：
${article}

${outputSchema}`
      : `You are a complete character-image prompt editor. From the article/story below, extract only the user-specified character or creature and generate the ten Content Core Pack variable slots.
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

Target character / creature:
${target}

Rules:
- Use only explicit story facts and reasonable visual inference.
- Do not extract every character; process only the target character / creature.
- If appearance is underspecified, write a concrete visual direction that still needs design lock.
- timeSpaceScene captures explicit or inferable era, location, space, institution, and field pressure from the article.
- actionMoment captures what the target character is doing, what conflict or emotional moment they are in.
- visualMedium must be a specific rendering medium for image generation, not a broad category; it must satisfy explicit medium requirements from the story / manual guidance and obey the Visual Style Lock only when the source text does not specify a clearer medium.
- style is only aesthetic style, not composition, lighting, or a full color plan.
- paletteStrategy captures explicit or inferable color order from the article; if the article does not provide it, infer conservatively from time-space, medium, style, and lighting.
- compositionScene defines how the image views the subject.
- lightingAtmosphere defines light and atmosphere; infer conservatively when the article does not specify it.
- otherDetails captures visible or reasonably inferred outfit, props, makeup/hair, materials, facial features, body marks, identity notes, and constraints; color evidence must obey paletteStrategy.
- Do not copy any existing IP, celebrity, or brand character.

${manualGuidanceBlock}

Article / story:
${article}

${outputSchema}`;
  }

  if (mode === 'IMAGE') {
    const imageName = sourceInputs.imageName || (promptLang === 'CN' ? '未命名参考图' : 'untitled reference image');
    const guidance = sourceInputs.imageGuidance.trim() || emptyImage;
    return promptLang === 'CN'
      ? `你是完整角色画面反推编辑。请根据上传的参考图片，反推出“内容主体 / Content Core Pack”的十个变量槽。
重要：运行时图片会作为 inlineData / image part 附加。这里的文本只负责告诉模型如何分析图片。

${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${actionMotifProtocol ? `\n${actionMotifProtocol}` : ''}

参考图：
${imageName}

人工引导与纠偏：
${guidance}

规则：
- 严格忠实于主图中的人物 / 异种，不要增加图片没有的武器、配饰、logo 或不存在的道具。
- timeSpaceScene 根据图片和人工引导推断时代、空间、制度或场域；没有证据时保持简洁。
- actionMoment 写主图正在发生的动作、情绪瞬间或主体与环境的关系。
- visualMedium 必须根据主图可见证据写成具体媒介，不要只写“写实”“高级”“电影感”。
- style 只写参考图可见的审美风格；人工引导只用于补充或纠偏，不在 style 里写完整配色表。
- paletteStrategy 从参考图可见色彩中提取整体色彩秩序：主色、辅色、点缀色、背景倾向、材质色和光色冷暖；人工引导可补充或纠偏。
- compositionScene 写主图的景别、角度、取景和主体位置。
- lightingAtmosphere 写主图的光源、明暗、空气感和情绪压力。
- 如果图片是半身照，可合理推断全身，但必须保持同一风格与身体逻辑。
- otherDetails 要写清可见服装、道具、材质、面部/身体证据和不可擅自添加的限制；颜色证据必须服从 paletteStrategy。

${outputSchema}`
      : `You are a senior complete character-image reverse-analysis editor. Use the uploaded reference image to infer the ten Content Core Pack variable slots.
Important: at runtime the image is attached as inlineData / image part. This text only instructs the model how to analyze it.

${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${actionMotifProtocol ? `\n${actionMotifProtocol}` : ''}

Reference image:
${imageName}

Manual guidance:
${guidance}

Rules:
- Stay faithful to the main image's character / creature. Do not add weapons, accessories, logos, or props that are not in the image.
- timeSpaceScene infers era, space, institution, or field from the image and manual guidance; keep it concise when evidence is limited.
- actionMoment captures the visible action, emotional moment, or subject-environment relation in the main image.
- visualMedium must be a concrete medium inferred from visible evidence in the main image; do not write only "realistic", "premium", or "cinematic".
- style only summarizes the visible aesthetic style; manual guidance only supplements or corrects it, and style must not contain a full color plan.
- paletteStrategy extracts the visible color order from the reference: main color, secondary color, accent color, background tendency, material color, and light color temperature; manual guidance may supplement or correct it.
- compositionScene captures shot size, angle, framing, and subject placement.
- lightingAtmosphere captures light source, contrast, air quality, and mood pressure.
- If the reference is half-body, infer full-body cautiously while preserving style and body logic.
- otherDetails must capture visible outfit, props, materials, facial/body evidence, and constraints against invented additions; color evidence must obey paletteStrategy.

${outputSchema}`;
  }

  const idea = sourceInputs.ideaText.trim() || emptyIdea;
  return promptLang === 'CN'
    ? `你是资深完整角色画面提示词编辑。请根据用户的灵感、元素和需求，先完成一次真正的角色画面综合，再生成“内容主体 / Content Core Pack”的十个变量槽。
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

用户需求：
${idea}

规则：
- 把松散灵感整理成清楚、可执行的单张角色画面方向；如果输入来自词库，词条标题只是索引，必须优先吸收词条定义里的设计含义。
- 禁止把词条标题原样串成 characterSeed、ageBodyType、style、paletteStrategy 或 otherDetails。
- 必须发明一个新的角色身份、社会功能、造型逻辑、材料组合、面部记忆点和可识别剪影；输出应该像“已经设计过的角色 brief”，不是“所选词条列表”。
- 可以保留少量必要专业词，但不要大面积复述括号里的英文标题。
- 如果词条之间冲突，选择一条主轴，把其他词条转译成细节、反差或损耗痕迹，不要平均罗列。
- 先判断这些元素更适合“人形主体”还是“异种主体”，但不要在输出中写分析过程。
- characterSeed 写一个新的角色核心概念：包含身份、职责/处境、主要视觉矛盾和一句设计抓手；不要写长故事。
- ageBodyType 写年龄感、体型、姿态和身体存在感；要把姿态和身体如何服务身份说清楚，而不是列词。
- timeSpaceScene 写时代、地点、空间、制度、技术边界和场域压力。
- actionMoment 写角色正在做什么、冲突瞬间、情绪动作和人物/环境关系。
- visualMedium 写具体物理媒介与渲染语言，例如“live-action studio portrait photography”“Unreal Engine 5 cinematic character render”“digital oil painting”“clay stop-motion puppet photography”；不要只写“写实”“好看”“电影感”。
- style 只写审美风格：风格参考、观看关系、材料气质和整体情绪；不要把服装、道具、妆发、构图、光影或完整配色表塞进 style。
- paletteStrategy 写完整色彩策略：主色、辅色、点缀色、背景色倾向、材质色、肤色/物体色关系、光色冷暖和禁用色；必须与时空场域、视觉媒介、审美风格和光影氛围一致。
- compositionScene 写景别、角度、取景、主体位置、背景占比、空间层次和画面组织。
- lightingAtmosphere 写光源、明暗关系、空气感、天气、时间感和情绪压强。
- otherDetails 写具体设计证据：服装、道具、妆发、材料、限制、身份备注、面部细节、身体标记、服装结构、磨损痕迹和环境物证；如有人工引导，必须吸收其中的具体要求；颜色证据必须服从 paletteStrategy。
- 不要复制任何现有 IP、名人或品牌角色。

${manualGuidanceBlock}

${outputSchema}`
    : `You are a senior complete character-image prompt editor. Based on the user's idea, elements, and needs, first synthesize a real character-image direction, then generate the ten Content Core Pack variable slots.
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

User request:
${idea}

Rules:
- Turn loose inspiration into a clear, executable direction for one complete character image. If the input comes from lexicon terms, term titles are only indexes; prioritize the design meaning in their definitions.
- Do not concatenate term titles into characterSeed, ageBodyType, style, paletteStrategy, or otherDetails.
- Invent a new character identity, social function, styling logic, material combination, facial memory point, and recognizable silhouette. The output should read like a designed character brief, not a selected-term list.
- You may keep a few necessary professional terms, but do not broadly repeat the English titles inside parentheses.
- If terms conflict, choose one main axis and translate the others into details, contrast, or wear traces rather than listing everything evenly.
- First decide whether the elements fit a human / humanoid character or a creature / biological subject better, but do not show the analysis.
- characterSeed is a new core character concept: include identity, role/situation, main visual contradiction, and one design hook; not a long story.
- ageBodyType covers age impression, body type, posture, and physical presence; explain how the body and pose serve identity rather than listing terms.
- timeSpaceScene covers era, location, space, institution, technology boundary, and field pressure.
- actionMoment covers what the character is doing, conflict beat, emotional action, and character/environment relation.
- visualMedium must name a concrete physical medium and rendering language, such as live-action studio portrait photography, Unreal Engine 5 cinematic character render, digital oil painting, or clay stop-motion puppet photography; do not write only "realistic", "beautiful", or "cinematic".
- style is only aesthetic style: style reference, viewing relation, material mood, and overall emotion. Do not put outfit, props, makeup/hair, composition, lighting, or a full color plan into style.
- paletteStrategy writes the complete color strategy: main color, secondary color, accent color, background tendency, material color, skin/object color relation, light color temperature, and forbidden colors; it must stay consistent with time-space field, visual medium, aesthetic style, and lighting atmosphere.
- compositionScene covers shot size, angle, framing, subject placement, background ratio, spatial depth, and image organization.
- lightingAtmosphere covers light source, contrast, air quality, weather, time feeling, and emotional pressure.
- otherDetails covers concrete design evidence: outfit, props, makeup/hair, materials, constraints, identity notes, facial details, body marks, garment construction, wear traces, and environmental evidence. If manual guidance is provided, absorb its concrete requirements; color evidence must obey paletteStrategy.
- Do not copy any existing IP, celebrity, or brand character.

${manualGuidanceBlock}

${outputSchema}`;
};

const buildConceptGenerationInstructionSections = (
  mode: SourceMode,
  sourceInputs: SourceInputs,
  promptLang: SkillLanguage,
  options: IdentityBoardOptions,
  _sourceLabel: string,
  _sourceLabelEn: string,
  sourceIdeaOverride?: string,
  includeActionMotif = false,
  worldLawMode: RegisterRandomMode = 'LAW_L2',
  variableSlots: VariableSlotMeta[] = variableMeta,
  strictInputFidelity = false
): CharacterIdentityBoardPromptSection[] => {
  const emptyIdea = promptLang === 'CN' ? '等待输入灵感元素。' : 'Waiting for idea elements.';
  const emptyArticle = promptLang === 'CN' ? '等待粘贴文章、故事或设定文本。' : 'Waiting for article, story, or setting text.';
  const emptyImage = promptLang === 'CN' ? '等待上传参考图或填写图片反馈。' : 'Waiting for a reference image or image feedback.';
  const textInputContract = getTextInputPriorityContract(promptLang);
  const outputSchema = getVariableOutputSchema(promptLang, variableSlots);
  const mediumInstruction = getMediumComponentContract(options.mediumCategory, promptLang, options.bodyFormMode);
  const taskContract = getCompileTaskContract(mode, promptLang);
  const variableDefinitionContract = getFiveVariableDefinitionContract(promptLang, variableSlots);
  const worldLawContract = getWorldLawCompileRule(worldLawMode, promptLang);
  const bodyFormContract = getBodyFormCompileRule(options.bodyFormMode, promptLang);
  const styleCostumeConflictProtocol = getConceptStyleCostumeConflictProtocol(promptLang);
  const actionMotifProtocol = includeActionMotif ? getConceptActionMotifProtocol(promptLang) : '';
  const stripRuleHeading = (body: string) => {
    return body
      .replace(/^(视觉媒介编译规则|文字输入优先级|角色 \/ 主体造型协议与服装系统裁决|动作母题裁决)：\n/, '')
      .replace(/^(Visual-medium compile rule|Text-input priority|Character \/ subject form protocol and costume-system judgement|Action motif judgement):\n/, '')
      .trim();
  };
  const hasManualGuidance = sourceInputs.imageGuidance.trim().length > 0;
  const imageReferenceNote = sourceInputs.imageDataUrl
    ? (promptLang === 'CN'
      ? `参考图：${sourceInputs.imageName || '未命名参考图'} 将作为 inlineData / image part 附加。不要擅自增加参考图中没有的道具、配饰或细节。`
      : `Reference image: ${sourceInputs.imageName || 'untitled reference image'} is attached as inlineData / image part. Do not invent props, accessories, or details that are not in the reference.`)
    : '';
  let rawSourceText = '';
  if (mode === 'ARTICLE') {
    const target = sourceInputs.targetCharacter.trim() || (promptLang === 'CN' ? '文本中的核心角色 / 异种' : 'the core character / creature in the text');
    const article = sourceInputs.articleText.trim() || emptyArticle;
    rawSourceText = [
      promptLang === 'CN' ? `目标人物 / 异种：\n${target}` : `Target character / creature:\n${target}`,
      hasManualGuidance ? (promptLang === 'CN' ? `用户人工引导与纠偏：\n${sourceInputs.imageGuidance}` : `User manual guidance:\n${sourceInputs.imageGuidance}`) : '',
      promptLang === 'CN' ? `文章/故事：\n${article}` : `Article / story:\n${article}`
    ].filter(Boolean).join('\n\n');
  } else if (mode === 'IMAGE') {
    const imageName = sourceInputs.imageName || (promptLang === 'CN' ? '未命名参考图' : 'untitled reference image');
    const guidance = sourceInputs.imageGuidance.trim() || emptyImage;
    rawSourceText = promptLang === 'CN'
      ? `参考图：
${imageName}

人工引导与纠偏：
${guidance}`
      : `Reference image:
${imageName}

Manual guidance:
${guidance}`;
  } else {
    const idea = mode === 'PRESET'
      ? (sourceIdeaOverride || (promptLang === 'CN' ? '（等待从左侧词库选择中汇总灵感）' : '(waiting for selected lexicon terms from the left panel)'))
      : (sourceInputs.ideaText.trim() || emptyIdea);
    rawSourceText = [
      promptLang === 'CN' ? `用户需求：\n${idea}` : `User request:\n${idea}`,
      hasManualGuidance && mode !== 'PRESET'
        ? (promptLang === 'CN' ? `用户人工引导与纠偏：\n${sourceInputs.imageGuidance}` : `User manual guidance:\n${sourceInputs.imageGuidance}`)
        : ''
    ].filter(Boolean).join('\n\n');
  }
  const inputRouterSections = getCompileInputRouterSections(
    promptLang,
    mode,
    rawSourceText,
    textInputContract,
    imageReferenceNote,
    mediumInstruction,
    styleCostumeConflictProtocol,
    actionMotifProtocol,
    stripRuleHeading,
    strictInputFidelity
  );

  const sections: Array<Omit<CharacterIdentityBoardPromptSection, 'color'>> = [
    {
      id: 'compile_task',
      title: 'M00 律令目标',
      titleEn: 'M00 Edict Target',
      text: taskContract
    },
    {
      id: 'compile_variable_definition',
      title: 'M10 内容主体 C01-C10 定义',
      titleEn: 'M10 Variable Definitions',
      text: variableDefinitionContract
    },
    ...inputRouterSections,
    {
      id: 'compile_world_law',
      title: 'M03 世界法则',
      titleEn: 'M03 World Law',
      text: worldLawContract
    },
    {
      id: 'compile_body_form',
      title: 'M08 本体形态',
      titleEn: 'M08 Body Form',
      text: bodyFormContract
    }
  ];

  sections.push(
    {
      id: 'compile_output_schema',
      title: 'M90 输出格式',
      titleEn: 'M90 Output Schema',
      text: outputSchema
    }
  );

  return colorCompileInstructionSections(sections);
};

export const ConceptDesignEngineField: React.FC<NarrativeEngineFieldProps> = ({
  fieldState,
  onChange,
  lang,
  lockedModules,
  onToggleLock,
  lockedTags,
  onToggleTagLock,
  onRandomizeTag,
  colorPalette = [],
  onPaletteChange,
  focusState = {},
  onFocusStateChange,
  onConceptRuntimeChange,
  onConceptGlobalRandomizeReady,
  conceptWorkspacePage = 'ENGINE',
  onConceptWorkspacePageChange,
  isAdmin = false,
  onAddCustomDef,
}) => {
  const { theme } = useTheme();
  const isRetro = theme === 'retro';
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [promptLang, setPromptLang] = useState<SkillLanguage>(lang === 'EN' ? 'EN' : 'CN');
  const [sourceMode, setSourceMode] = useState<SourceMode>('PRESET');
  const [promptTemplateMode, setPromptTemplateMode] = useState<PromptTemplateMode>('CHARACTER_BOARD');
  const [isPromptTemplateLibraryOpen, setIsPromptTemplateLibraryOpen] = useState(false);
  const [strictInputFidelity, setStrictInputFidelity] = useState(false);
  const [objectRoute, setObjectRoute] = useState<ObjectRouteId>('HUMAN');
  const [humanRegister, setHumanRegister] = useState<HumanRegisterId>('REALISTIC');
  const [registerRandomMode, setRegisterRandomMode] = useState<RegisterRandomMode>('LAW_L2');
  const [subjectMode, setSubjectMode] = useState<SubjectMode>('HUMAN');
  const [localizedVariables, setLocalizedVariables] = useState<LocalizedSkillVariables>(() => createEmptyLocalizedVariables());
  const [localizedVideoStoryboardValues, setLocalizedVideoStoryboardValues] = useState<LocalizedVideoStoryboardComposerValues>(() => createEmptyLocalizedVideoStoryboardValues());
  const [identityOptions, setIdentityOptions] = useState<IdentityBoardOptions>({
    originality: true,
    format: '16:9',
    mediumCategory: 'PAINTING',
    gridLayout: '3x4',
    gridVariationAxis: '概念变体',
    gridContentObject: '角色 / 主体',
    gridNumbering: true,
    gridTitleMode: 'NONE',
    gridBorderMode: true,
    bodyFormMode: 'HUMANOID_DISGUISE',
    backgroundMode: 'OFF_WHITE',
    qualityLevel: 'HIGH'
  });
  const [sourceInputs, setSourceInputs] = useState<SourceInputs>({
    ideaText: '',
    articleText: '',
    targetCharacter: '',
    imageDataUrl: '',
    imageName: '',
    imageGuidance: ''
  });
  const [copied, setCopied] = useState(false);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);
  const [activeActionMotion, setActiveActionMotion] = useState<string | null>(null);
  const [isCompilingConcept, setIsCompilingConcept] = useState(false);
  const [isSpacetimeModalOpen, setIsSpacetimeModalOpen] = useState(false);
  const [spacetimeYearInputDraft, setSpacetimeYearInputDraft] = useState<string | null>(null);
  const [spacetimeYearInputInvalid, setSpacetimeYearInputInvalid] = useState(false);
  const [disabledPromptModuleIds, setDisabledPromptModuleIds] = useState<string[]>([]);
  const [activePromptSectionId, setActivePromptSectionId] = useState<string | null>(null);
  const [conceptCustomItemsByBlock, setConceptCustomItemsByBlock] = useState<Record<string, LibraryItemDef[]>>({});
  const [paramPanelExpandMode, setParamPanelExpandMode] = useState<ParamPanelExpandMode>('COLLAPSED');
  const [expandedParamModuleIds, setExpandedParamModuleIds] = useState<string[]>([]);
  const [lastVisualStylePreset, setLastVisualStylePreset] = useState<VisualStyleRandomPreset | null>(null);
  const [visualStyleRandomPresetRoute, setVisualStyleRandomPresetRoute] = useState<VisualStyleRandomPresetRoute>('FOLLOW_MEDIUM');
  const [isVisualStylePresetPanelOpen, setIsVisualStylePresetPanelOpen] = useState(false);
  const [visualStyleRandomSafety, setVisualStyleRandomSafety] = useState<VisualStyleRandomSafety>({
    allowVintage: true,
    allowGlitch: false,
    allowPollution: false,
    allowHighSaturation: true
  });
  const [visualStyleRandomDensity, setVisualStyleRandomDensity] = useState<VisualStyleRandomDensity>('BALANCED');
  const [visualStyleSoulBlendMode, setVisualStyleSoulBlendMode] = useState<VisualStyleSoulBlendMode>('PURE');
  const [lastFramingPreset, setLastFramingPreset] = useState<FramingRandomPreset | null>(null);
  const [framingRandomPresetRoute, setFramingRandomPresetRoute] = useState<FramingRandomPresetRoute>('ALL_PRESETS');
  const [isFramingPresetPanelOpen, setIsFramingPresetPanelOpen] = useState(false);
  const [framingRandomSafety, setFramingRandomSafety] = useState<FramingRandomSafety>({
    keepReadableSubject: true,
    avoidExtremeDistortion: true,
    avoidMultiSubject: true,
    allowOpticalFx: true
  });
  const [framingRandomDensity, setFramingRandomDensity] = useState<FramingRandomDensity>('BALANCED');
  const [activeThemeAxisPicker, setActiveThemeAxisPicker] = useState<ThemeAxisPickerMode | null>(null);
  const [worldAxisState, setWorldAxisState] = useState<ConceptWorldAxisState>(DEFAULT_CONCEPT_WORLD_AXIS_STATE);
  const [draftWorldAxisState, setDraftWorldAxisState] = useState<ConceptWorldAxisState | null>(null);
  const [isThemeCoreExpanded, setIsThemeCoreExpanded] = useState(false);
  const [lexiconAxisFilterState, setLexiconAxisFilterState] = useState<LexiconAxisFilterState>(DEFAULT_LEXICON_AXIS_FILTER_STATE);
  const [isLexiconFilterExpanded, setIsLexiconFilterExpanded] = useState(false);
  const [isLexiconFilterAuditOpen, setIsLexiconFilterAuditOpen] = useState(false);
  const [keywordFilterExpanded, setKeywordFilterExpanded] = useState(false);
  const [removedKeywordTags, setRemovedKeywordTags] = useState<Record<KeywordFilterCategory, string[]>>({
    eraTags: [],
    realityTags: []
  });
  const [addedKeywordTags, setAddedKeywordTags] = useState<Record<KeywordFilterCategory, string[]>>({
    eraTags: [],
    realityTags: []
  });
  const [linkedRandomPresetRoute, setLinkedRandomPresetRoute] = useState<LinkedRandomPresetRoute>('controlled_fusion');
  const [linkedRandomDensity, setLinkedRandomDensity] = useState<ConceptLinkedRandomDensity>('BALANCED');
  const [contentIntentRandomDensity, setContentIntentRandomDensity] = useState<ContentIntentRandomDensity>('RANGE_17_23');
  const [linkedRandomConflictPolicy, setLinkedRandomConflictPolicy] = useState<ConceptLinkedRandomConflictPolicy>('TRANSLATE');
  const [lastLinkedRandomPreset, setLastLinkedRandomPreset] = useState<ConceptLinkedRandomPreset | null>(null);
  const [contentIntentRoute, setContentIntentRoute] = useState<ContentIntentRoute>('AUTO');
  const [lastContentIntentPreset, setLastContentIntentPreset] = useState<ContentIntentPreset | null>(null);
  const [isContentIntentPanelOpen, setIsContentIntentPanelOpen] = useState(false);
  const [spacetimeFieldRandomRoute, setSpacetimeFieldRandomRoute] = useState<SpacetimeFieldRandomRoute>('ALL_PRESETS');
  const [spacetimeFieldRandomDensity, setSpacetimeFieldRandomDensity] = useState<SpacetimeFieldRandomDensity>('BALANCED');
  const [lastSpacetimeFieldRoute, setLastSpacetimeFieldRoute] = useState<SpacetimeFieldRandomRoute | null>(null);
  const [isSpacetimeFieldRandomPanelOpen, setIsSpacetimeFieldRandomPanelOpen] = useState(false);
  const [lightingAtmosphereRandomRoute, setLightingAtmosphereRandomRoute] = useState<LightingAtmosphereRandomRoute>('ALL_PRESETS');
  const [lightingAtmosphereRandomDensity, setLightingAtmosphereRandomDensity] = useState<LightingAtmosphereRandomDensity>('BALANCED');
  const [lastLightingAtmosphereRoute, setLastLightingAtmosphereRoute] = useState<LightingAtmosphereRandomRoute | null>(null);
  const [isLightingAtmosphereRandomPanelOpen, setIsLightingAtmosphereRandomPanelOpen] = useState(false);

  useEffect(() => {
    const patch: NarrativeFieldState = {};
    Object.entries(legacyConceptBlockIdMap).forEach(([legacyBlockId, conceptBlockId]) => {
      const legacyValues = fieldState[legacyBlockId] || [];
      const conceptValues = fieldState[conceptBlockId] || [];
      if (legacyValues.length > 0 && conceptValues.length === 0) {
        patch[conceptBlockId] = legacyValues;
      }
    });
    if (Object.keys(patch).length > 0) {
      onChange({ ...fieldState, ...patch });
    }
  }, [fieldState, onChange]);

  const promptSectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const templateWorkspaceBodyRef = useRef<HTMLDivElement | null>(null);
  const visualStylePresetButtonRef = useRef<HTMLButtonElement | null>(null);
  const variables = localizedVariables[promptLang];
  const videoStoryboardValues = localizedVideoStoryboardValues[promptLang];
  const isPerformanceStoryboardTemplate = promptTemplateMode === 'PERFORMANCE_STORYBOARD';
  const isVideoStoryboardTemplate = promptTemplateMode === 'VIDEO_STORYBOARD';
  const activeObjectRoute = objectRouteMeta.find(item => item.id === objectRoute) || objectRouteMeta[0];
  const activeHumanRegister = humanRegisterMeta.find(item => item.id === humanRegister) || humanRegisterMeta[0];

  const blockDef = (blockId: string) => allBlocks.find(block => block.id === blockId);
  const isValueLocked = (blockId: string, value: string) => Boolean(value && lockedTags[blockId]?.includes(value));
  const selectedSpaceAnchor = fieldState['cd_space_anchor_exact']?.[0] || '';
  const selectedTimeAnchor = fieldState['cd_time_anchor_exact']?.[0]?.trim() || '';
  const selectedTimelineYear = /^-?\d+$/.test(selectedTimeAnchor) ? Number(selectedTimeAnchor) : null;
  const selectedTimeIsYear = selectedTimelineYear !== null;
  const isSpaceAnchorLocked = Boolean(lockedModules['STYLE'] || lockedModules['cd_space_anchor_exact'] || lockedModules['cd_spacetime_coordinate']);
  const isTimeAnchorLocked = Boolean(lockedModules['STYLE'] || lockedModules['cd_time_anchor_exact'] || lockedModules['cd_spacetime_coordinate']);
  const isSpaceAnchorValueLocked = isSpaceAnchorLocked || isValueLocked('cd_space_anchor_exact', selectedSpaceAnchor);
  const isTimeAnchorValueLocked = isTimeAnchorLocked || isValueLocked('cd_time_anchor_exact', selectedTimeAnchor);
  const activeSourceMode = sourceModes.find(item => item.id === sourceMode) || sourceModes[0];
  const hasSelectedActionTerms = ontologyActionBlocks.some(blockId => (fieldState[blockId] || []).length > 0);
  const allVariableMeta = getActiveVariableMeta(promptTemplateMode);
  const activeVariableMeta = useMemo(
    () => allVariableMeta.filter(meta => !disabledPromptModuleIds.includes(variableSectionIdByKey[meta.key])),
    [allVariableMeta, disabledPromptModuleIds]
  );
  const contentCoreSlotEnabledCount = activeVariableMeta.length;
  const generationInstruction = useMemo(
    () => buildConceptGenerationInstruction(
      sourceMode,
      sourceInputs,
      promptLang,
      identityOptions,
      activeSourceMode.label,
      activeSourceMode.labelEn,
      hasSelectedActionTerms,
      activeVariableMeta
    ),
    [activeSourceMode.label, activeSourceMode.labelEn, activeVariableMeta, hasSelectedActionTerms, identityOptions, promptLang, sourceInputs, sourceMode]
  );
  const usesFullIdentityBoardBackup = promptTemplateMode === 'CHARACTER_BOARD_BACKUP';
  const activeMediaSoulBlocks = getMediaSoulBlocks(identityOptions.mediumCategory);
  const activeMediaQualityBlocks = getMediaQualityBlocks(identityOptions.mediumCategory);
  const activeMediaEyeBlocks = getMediaEyeBlocks();
  const activeVisualStyleBlocks = [
    ...activeMediaSoulBlocks,
    ...activeMediaQualityBlocks
  ];
  const activeVisualStylePanelBlocks = [
    ...activeVisualStyleBlocks,
    ...paletteBlocks
  ];
  const activeEyeSourceBlocks = [
    ...activeMediaEyeBlocks,
    ...aestheticEyeAuditBlocks
  ];
  const activeStyleSourceBlocks = [
    ...activeVisualStyleBlocks,
    ...activeEyeSourceBlocks
  ];
  const primaryStyleReference = activeMediaSoulBlocks.flatMap(blockId => fieldState[blockId] || [])[0] || '';
  const activeSubjectBlocks = subjectMode === 'HUMAN' ? humanSubjectBlocks : creatureSubjectBlocks;
  const activeSubjectUiBlocks = subjectMode === 'HUMAN' ? humanSubjectUiBlocks : creatureSubjectBlocks;
  const paramModuleIds = [
    'visual_style_panel',
    'framing_protocol',
    'subject_ontology',
    'time_space_field',
    'lighting_atmosphere'
  ];
  const scopedLibraries = useMemo(() => {
    const customEntries = Object.entries(conceptCustomItemsByBlock).filter(([, items]) => items.length > 0);
    if (customEntries.length === 0) return allLibraries;
    return allLibraries.map(category => {
      const blockId = category.id.endsWith('_lib') ? category.id.slice(0, -4) : category.id;
      const customItems = conceptCustomItemsByBlock[blockId] || [];
      if (customItems.length === 0) return category;
      const existingNames = new Set(category.items.map(item => item.name));
      const existingIds = new Set(category.items.map(item => item.id));
      return {
        ...category,
        items: [
          ...customItems.filter(item => !existingNames.has(item.name) && !existingIds.has(item.id)),
          ...category.items
        ]
      };
    });
  }, [conceptCustomItemsByBlock]);
  const scopedLibraryMap = useMemo(() => {
    const map = new Map<string, LibraryCategoryDef>();
    scopedLibraries.forEach(category => {
      const blockId = category.id.endsWith('_lib') ? category.id.slice(0, -4) : category.id;
      map.set(blockId, category);
    });
    return map;
  }, [scopedLibraries]);
  const materialPacket = useMemo(
    () => buildCharacterIdentityBoardMaterialPacket({
      fieldState,
      blocks: allBlocks,
      libraries: scopedLibraries,
      subjectMode,
      objectRoute: {
        id: activeObjectRoute.id,
        name: activeObjectRoute.label,
        nameEn: activeObjectRoute.labelEn
      },
      blockGroups: {
        governance: governanceBlocks,
        style: activeStyleSourceBlocks,
        palette: paletteBlocks,
        subject: activeSubjectBlocks
      }
    }),
    [activeObjectRoute.id, activeObjectRoute.label, activeObjectRoute.labelEn, activeStyleSourceBlocks, activeSubjectBlocks, fieldState, scopedLibraries, subjectMode]
  );
  const promptSections = useMemo(
    () => isVideoStoryboardTemplate
      ? buildVideoStoryboardPromptSections(videoStoryboardValues, promptLang)
      : isPerformanceStoryboardTemplate
      ? buildPerformanceStoryboardPromptSections(variables, promptLang)
      : buildCharacterIdentityBoardPromptSectionsFromLayers({
          values: variables,
          lang: promptLang,
          options: { ...identityOptions, targetMode: promptTemplateMode, worldLawMode: registerRandomMode, primaryStyleReference },
          materialPacket,
          protocols: {
            styleCostumeConflict: getConceptStyleCostumeConflictProtocol(promptLang),
            actionMotif: getConceptActionMotifProtocol(promptLang)
          }
        }),
    [identityOptions, isPerformanceStoryboardTemplate, isVideoStoryboardTemplate, materialPacket, primaryStyleReference, promptLang, promptTemplateMode, registerRandomMode, variables, videoStoryboardValues]
  );
  const enabledPromptSectionIds = useMemo(
    () => promptSections
      .map(section => section.id)
      .filter(id => !disabledPromptModuleIds.includes(id)),
    [disabledPromptModuleIds, promptSections]
  );
  const output = useMemo(
    () => isVideoStoryboardTemplate
      ? buildVideoStoryboardPrompt(videoStoryboardValues, promptLang, enabledPromptSectionIds)
      : isPerformanceStoryboardTemplate
      ? buildPerformanceStoryboardPrompt(variables, promptLang, enabledPromptSectionIds)
      : buildCharacterIdentityBoardPrompt(variables, promptLang, { ...identityOptions, targetMode: promptTemplateMode, primaryStyleReference }, materialPacket, registerRandomMode, enabledPromptSectionIds),
    [enabledPromptSectionIds, identityOptions, isPerformanceStoryboardTemplate, isVideoStoryboardTemplate, materialPacket, primaryStyleReference, promptLang, promptTemplateMode, registerRandomMode, variables, videoStoryboardValues]
  );
  const getLibraryItemsForBlockEarly = (blockId: string) => (
    scopedLibraryMap.get(blockId)?.items || []
  );
  const visiblePromptSections = promptSections.filter(section => enabledPromptSectionIds.includes(section.id));
  const activePromptSection = promptSections.find(section => section.id === activePromptSectionId) || promptSections[0] || null;
  const compileResultOutput = useMemo(() => {
    if (isVideoStoryboardTemplate) {
      return VIDEO_STORYBOARD_COMPOSER_MODULES
        .filter(module => module.role === 'generated' || module.role === 'sequence')
        .map(module => `${promptLang === 'CN' ? module.name : module.nameEn}:\n${videoStoryboardValues[module.id].trim()}`)
        .filter(block => block.trim())
        .join('\n\n');
    }
    return activeVariableMeta
      .map(meta => `${promptLang === 'CN' ? meta.label : meta.labelEn}:\n${variables[meta.key].trim()}`)
      .filter(block => block.trim())
      .join('\n\n');
  }, [activeVariableMeta, isVideoStoryboardTemplate, promptLang, variables, videoStoryboardValues]);
  const cinematicStillPromptOutput = useMemo(() => {
    const variableBlocks = activeVariableMeta
      .map(meta => `${promptLang === 'CN' ? meta.label : meta.labelEn}:\n${variables[meta.key].trim()}`)
      .filter(block => block.trim())
      .join('\n\n');
    if (promptLang === 'CN') {
      return [
        '创建一张单帧电影画面 / cinematic film still。',
        '',
        '目标要求：这必须是一张电影中的一个瞬间，不是角色身份板、设定图、海报、杂志封面、多视图、分镜表或宣传排版。画面应像从一部真实电影里截取出来的一帧，具有明确主体、场域、事件、镜头、光影和情绪压力。',
        '',
        variableBlocks,
        '',
        '电影感加强：优先强化 C04 行动事件、C08 取景构图、C09 光影氛围和 C03 场域压力；保持 C05 视觉媒介不可被改写。画面必须有电影镜头的空间层次、可读的主体动作、真实的环境关系、轻微空气颗粒和叙事未完成感。',
        '',
        '曝光控制：允许低调电影光和强明暗对照，但禁止欠曝、黑位压死或主体细节被黑暗吞没。脸、躯干、手、武器和主要服装必须保留清楚可读的中间调；环境可以进入阴影，但主体轮廓和关键动作必须清楚。',
        '',
        '线条与边缘质量：保持清楚的焦点边缘、可读剪影、受控笔触质感，以及脸、手、武器和身体主轮廓上的锐利细节。避免泥状笔触、脏噪点、过度涂抹、碎裂线条、低清晰度边缘和失控厚涂。',
        '',
        '媒介补充：如果 C05 是数字绘画、插画或绘画媒介，则把本图理解为 cinematic keyframe illustration / 电影关键帧插画；保留电影构图和光影，但不要生成摄影噪点、低曝光截图感或脏污暗部。',
        '',
        '禁止：不要身份板结构，不要多视图，不要文字说明，不要标题，不要 logo，不要水印，不要 UI，不要拼贴式设定页，不要把主体孤立成棚拍展示。'
      ].join('\n');
    }
    return [
      'Create a single-frame cinematic film still.',
      '',
      'Target requirement: this must be one moment from a film, not a character identity board, design sheet, poster, magazine cover, multi-view sheet, storyboard sheet, or promotional layout. The image should feel like a frame captured from a real movie, with clear subject, field, event, camera, lighting, and emotional pressure.',
      '',
      variableBlocks,
      '',
      'Cinematic emphasis: prioritize C04 action moment, C08 framing and composition, C09 lighting atmosphere, and C03 field pressure; keep C05 visual medium non-rewritable. The image must have cinematic spatial depth, readable subject action, real environment relation, subtle atmospheric grain, and a sense of narrative incompletion.',
      '',
      'Exposure control: low-key cinematic lighting and strong chiaroscuro are allowed, but the image must not be underexposed, crush the blacks, or let darkness swallow the subject details. Preserve readable midtones in the face, torso, hands, weapon, and main costume. The environment may fall into shadow, but the subject silhouette and key action must remain clear.',
      '',
      'Line and edge quality: keep clean focal edges, readable silhouette, controlled brush texture, and sharp detail around the face, hands, weapon, and main body contour. Avoid muddy strokes, dirty noise, over-smudged paint, broken linework, low-clarity edges, and uncontrolled impasto.',
      '',
      'Medium supplement: if C05 is digital painting, illustration, or any painting medium, treat this image as a cinematic keyframe illustration. Preserve cinematic framing and lighting, but do not generate photographic noise, low-exposure screenshot feeling, or dirty crushed shadows.',
      '',
      'Negative rules: no identity-board structure, no multi-view sheet, no explanatory text, no title, no logo, no watermark, no UI, no collage-like design page, and do not isolate the subject into studio display.'
    ].join('\n');
  }, [activeVariableMeta, promptLang, variables]);
  const activeTemplateCard = promptTemplateCards.find(card => card.id === promptTemplateMode) || promptTemplateCards[0];
  const activeTemplateWorkspaceView: TemplateWorkspaceView = conceptWorkspacePage === 'COMPILE'
    ? 'COMPILE'
    : conceptWorkspacePage === 'RESULT'
      ? 'VARIABLES'
      : conceptWorkspacePage === 'FINAL'
        ? 'PROMPT'
        : 'PARAMS';
  const togglePromptModule = useCallback((id: string) => {
    setDisabledPromptModuleIds(prev => (
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    ));
  }, []);
  const setAllVariableSlotsEnabled = useCallback((enabled: boolean) => {
    const variableSectionIds = getActiveVariableMeta(promptTemplateMode).map(meta => variableSectionIdByKey[meta.key]);
    setDisabledPromptModuleIds(prev => {
      if (enabled) return prev.filter(id => !variableSectionIds.includes(id));
      return Array.from(new Set([...prev, ...variableSectionIds]));
    });
  }, [promptTemplateMode]);
  const toggleVariableSlot = useCallback((key: keyof SkillVariables) => {
    togglePromptModule(variableSectionIdByKey[key]);
  }, [togglePromptModule]);
  useEffect(() => {
    if (!activePromptSectionId && promptSections[0]) {
      setActivePromptSectionId(promptSections[0].id);
      return;
    }
    if (activePromptSectionId && !promptSections.some(section => section.id === activePromptSectionId)) {
      setActivePromptSectionId(promptSections[0]?.id || null);
    }
  }, [activePromptSectionId, promptSections]);
  const visibleColorPalette = colorPalette.length > 0 ? colorPalette : Array(7).fill("");

  const panelClass = isRetro
    ? 'border-[#85411B]/22 bg-[#EFE9E0]/82 text-[#24170f]'
    : 'border-white/[0.07] bg-black text-zinc-200';
  const softPanelClass = isRetro
    ? 'border-[#85411B]/14 bg-white/32'
    : 'border-white/[0.075] bg-black';
  const mutedText = isRetro ? 'text-[#85411B]/70' : 'text-zinc-500';
  const strongText = isRetro ? 'text-[#4b2b14]' : 'text-orange-100';
  const accentText = isRetro ? 'text-[#85411B]' : 'text-orange-300';
  const inputClass = isRetro
    ? 'border-[#85411B]/22 bg-white/55 text-[#24170f] placeholder:text-[#85411B]/38 focus:border-[#85411B]/55'
    : 'border-orange-500/18 bg-black text-zinc-100 placeholder:text-zinc-650 focus:border-orange-500/55';
  const promptSectionSubtleBorderColor = isRetro
    ? 'rgba(133, 65, 27, 0.14)'
    : 'rgba(255, 255, 255, 0.055)';
  const miniSwitchClass = isRetro
    ? 'border-[#85411B]/18 bg-transparent'
    : 'border-white/[0.075] bg-black';
  const topActionButtonClass = `mist-concept-top-action-button flex h-10 shrink-0 items-center gap-2 rounded-md border bg-transparent px-3.5 text-[12px] font-black uppercase tracking-[0.08em] transition-all ${
    isRetro
      ? 'border-[#85411B]/22 text-[#85411B] hover:border-[#85411B]/48 hover:bg-[#85411B]/8'
      : 'border-white/[0.09] text-zinc-500 hover:border-orange-500/34 hover:bg-orange-500/8 hover:text-orange-100'
  }`;
  const compactTopActionButtonClass = `mist-concept-top-action-button flex h-8 shrink-0 items-center gap-1.5 rounded-md border bg-transparent px-2 text-[10px] font-black uppercase tracking-[0.06em] transition-all ${
    isRetro
      ? 'border-[#85411B]/22 text-[#85411B] hover:border-[#85411B]/48 hover:bg-[#85411B]/8'
      : 'border-white/[0.09] text-zinc-500 hover:border-orange-500/34 hover:bg-orange-500/8 hover:text-orange-100'
  }`;
  const renderPromptLangToggleButton = () => (
    <button
      type="button"
      onClick={() => {
        setPromptLang(prev => (prev === 'CN' ? 'EN' : 'CN'));
        setCopied(false);
      }}
      className={`${compactTopActionButtonClass} justify-center`}
      title={t(lang, '切换终稿语言', 'Switch prompt language')}
    >
      <span>{promptLang === 'CN' ? '中' : 'E'}</span>
    </button>
  );
  const renderPromptCopyButton = (onCopy: () => void) => (
    <button
      type="button"
      onClick={onCopy}
      className={`${compactTopActionButtonClass} justify-center`}
      title={t(lang, '复制当前内容', 'Copy current content')}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      <span>{t(lang, '复制', 'Copy')}</span>
    </button>
  );
  const variableSlotSwitchButtonClass = (enabled: boolean) => `flex min-h-[36px] min-w-0 items-center gap-2 rounded-md border px-2 text-left text-[10px] font-black uppercase tracking-[0.05em] transition-transform duration-150 ease-out hover:scale-[1.015] active:scale-[0.985] ${
    enabled
      ? isRetro
        ? 'border-[#85411B]/55 bg-[#85411B]/14 text-[#4b2b14] shadow-[inset_0_0_0_1px_rgba(133,65,27,0.12)]'
        : 'border-sky-300/70 bg-sky-400/16 text-sky-50 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.14)]'
      : isRetro
        ? 'border-[#85411B]/14 bg-white/10 text-[#85411B]/42 opacity-70'
        : 'border-white/[0.055] bg-black/28 text-zinc-650 opacity-70'
  }`;
  const activeVariableSlotMiniButtonClass = `flex h-7 shrink-0 items-center gap-1.5 rounded-md border px-2 font-mono text-[9px] font-black uppercase tracking-[0.08em] transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.97] ${
    isRetro
      ? 'border-[#85411B]/45 bg-[#85411B]/12 text-[#4b2b14]'
      : 'border-sky-300/60 bg-sky-400/14 text-sky-100'
  }`;
  const renderVariableSlotSwitches = (caption?: string) => (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className={`rounded border px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${accentText}`}>
          {contentCoreSlotEnabledCount}/{allVariableMeta.length} {t(lang, '开启', 'On')}
        </span>
        <div className="flex shrink-0 gap-1.5">
          <button
            type="button"
            onClick={() => setAllVariableSlotsEnabled(true)}
            className={`${compactTopActionButtonClass} h-7 justify-center px-2`}
          >
            {t(lang, '全开', 'All On')}
          </button>
          <button
            type="button"
            onClick={() => setAllVariableSlotsEnabled(false)}
            className={`${compactTopActionButtonClass} h-7 justify-center px-2`}
          >
            {t(lang, '全关', 'All Off')}
          </button>
        </div>
      </div>
      {caption && (
        <p className={`text-[11px] leading-5 ${mutedText}`}>{caption}</p>
      )}
      <div className="grid grid-cols-2 gap-1.5">
        {allVariableMeta.map(meta => {
          const enabled = !disabledPromptModuleIds.includes(variableSectionIdByKey[meta.key]);
          return (
            <button
              key={meta.key}
              type="button"
              onClick={() => toggleVariableSlot(meta.key)}
              className={variableSlotSwitchButtonClass(enabled)}
              title={t(lang, meta.hint, meta.hintEn)}
            >
              <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
                enabled
                  ? isRetro
                    ? 'border-[#85411B]/45 bg-[#85411B]/18'
                    : 'border-sky-200/55 bg-sky-300/20'
                  : isRetro
                    ? 'border-[#85411B]/16 bg-transparent'
                    : 'border-white/[0.08] bg-transparent'
              }`}>
                {enabled ? <Check size={10} /> : <Lock size={9} />}
              </span>
              <span className="min-w-0 truncate">{t(lang, meta.label, meta.labelEn)}</span>
              <span className={`ml-auto shrink-0 rounded px-1.5 py-0.5 font-mono text-[8px] ${
                enabled
                  ? isRetro
                    ? 'bg-[#85411B]/12 text-[#4b2b14]'
                    : 'bg-sky-300/16 text-sky-100'
                  : isRetro
                    ? 'bg-[#85411B]/6 text-[#85411B]/45'
                    : 'bg-white/[0.035] text-zinc-650'
              }`}>
                {enabled ? 'ON' : 'OFF'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
  const paramsModuleTitleClass = `flex min-w-0 items-center gap-2.5 text-[16px] font-black uppercase tracking-[0.09em] ${strongText}`;
  const sidebarModuleTitleClass = `flex min-w-0 items-center gap-2 text-[14px] font-black uppercase tracking-[0.1em] ${strongText}`;
  const paramsModuleMetaClass = `truncate text-[13px] font-black uppercase tracking-[0.08em] ${mutedText}`;
  const paramsModuleCountClass = `mist-concept-param-module-count shrink-0 rounded border px-2.5 py-1 text-[11px] tracking-[0.08em] ${miniSwitchClass} ${mutedText}`;
  const paramsRowLabelWrapClass = 'flex w-36 shrink-0 items-center justify-between gap-2';
  const paramsRowTitleClass = `truncate text-[13px] font-black uppercase tracking-[0.08em] ${strongText}`;
  const paramsRowCountClass = `shrink-0 rounded border px-2 py-0.5 font-mono text-[11px] font-black ${miniSwitchClass} ${mutedText}`;
  const paramsSubcardTitleClass = `text-[14px] font-black uppercase tracking-[0.1em] ${strongText}`;
  const paramsSubcardMetaClass = `text-[12px] leading-5 ${mutedText}`;
  const randomPanelTopButtonClass = `flex h-7 shrink-0 items-center justify-center gap-1 rounded border px-2 text-[11px] font-black tracking-[0.04em] transition-all ${isRetro ? 'border-[#85411B]/18 text-[#85411B]/70 hover:bg-[#85411B]/8 hover:text-[#85411B]' : 'border-zinc-700 bg-transparent text-zinc-500 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-200'}`;
  const randomPanelTopIconButtonClass = `flex h-7 w-7 shrink-0 items-center justify-center rounded border transition-all ${isRetro ? 'border-[#85411B]/18 text-[#85411B]/70 hover:bg-[#85411B]/8 hover:text-[#85411B]' : 'border-zinc-700 bg-transparent text-zinc-500 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-200'}`;
  const renderRandomPanelSectionTitle = (title: string, titleEn: string, meta: string, metaEn: string) => (
    <div className={`flex items-center justify-between gap-3 text-[12px] font-black tracking-[0.04em] ${strongText}`}>
      <span>{t(lang, title, titleEn)}</span>
      <span className={`text-[10px] uppercase tracking-[0.12em] ${mutedText}`}>{t(lang, meta, metaEn)}</span>
    </div>
  );
  const renderRandomPanelSection = (
    title: string,
    titleEn: string,
    meta: string,
    metaEn: string,
    children: React.ReactNode,
    contentClassName = 'mt-2'
  ) => (
    <section className={`rounded-md border p-2.5 ${isRetro ? 'border-[#85411B]/12 bg-white/22' : 'border-white/[0.06] bg-zinc-950/55'}`}>
      {renderRandomPanelSectionTitle(title, titleEn, meta, metaEn)}
      <div className={contentClassName}>{children}</div>
    </section>
  );
  const renderRandomConfigPanel = (
    title: string,
    titleEn: string,
    description: string,
    descriptionEn: string,
    onRandom: () => void,
    onClose: () => void,
    randomTitle: string,
    children: React.ReactNode
  ) => {
    const panelStyle = {
      borderColor: isRetro ? 'rgba(133, 65, 27, 0.18)' : 'rgba(249, 115, 22, 0.26)',
      backgroundColor: isRetro ? '#F8F1E7' : 'rgba(9, 9, 11, 0.96)'
    };
    return (
      <div className="fixed inset-0 z-[90]">
        <div
          className={`fixed right-4 top-4 flex max-h-[calc(100vh-2rem)] w-[min(46rem,calc(100vw-2rem))] flex-col rounded-lg border p-3 shadow-2xl ${isRetro ? 'border-[#85411B]/18 bg-[#F8F1E7] shadow-[#2A1208]/10' : 'border-orange-500/24 bg-zinc-950/95 shadow-black/40'}`}
          style={panelStyle}
          onMouseDown={event => event.stopPropagation()}
        >
          <div className={`mb-3 flex shrink-0 items-center justify-between gap-3 border-b pb-2 ${isRetro ? 'border-[#85411B]/12' : 'border-white/[0.06]'}`}>
            <div className="min-w-0">
              <div className={`truncate text-[14px] font-black ${strongText}`}>{t(lang, title, titleEn)}</div>
              <div className={`mt-0.5 text-[11px] font-medium ${mutedText}`}>
                {t(lang, description, descriptionEn)}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={onRandom}
                className={randomPanelTopButtonClass}
                title={randomTitle}
              >
                <Dice5 size={12} />
                <span>{t(lang, '随机', 'Random')}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className={randomPanelTopButtonClass}
                title={t(lang, '确认并关闭', 'Confirm and close')}
              >
                <Check size={12} />
                <span>{t(lang, '确认', 'Confirm')}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className={randomPanelTopIconButtonClass}
                title={t(lang, '关闭', 'Close')}
              >
                <X size={14} />
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 custom-scrollbar">
            {children}
          </div>
        </div>
      </div>
    );
  };
  const renderInlineSwitch = <T extends string>(
    value: T,
    setValue: (value: T) => void,
    options: Array<{ value: T; label: string; labelEn: string }>,
    disabled = false
  ) => (
    <div className={`mist-concept-inline-switch ml-auto flex h-8 shrink-0 overflow-hidden rounded-md border p-0.5 ${miniSwitchClass}`}>
      {options.map(option => (
        <button
          key={option.value}
          type="button"
          disabled={disabled}
          onClick={() => setValue(option.value)}
          className={`flex items-center gap-1.5 rounded px-3 text-[11px] font-black uppercase tracking-[0.08em] transition-all ${
            value === option.value
              ? 'is-active'
              : ''
          }`}
        >
          {option.value === 'REALISM' && <UserRound size={12} />}
          {option.value === 'STYLIZED' && <Paintbrush size={12} />}
          {option.value === 'HUMAN' && <UserRound size={12} />}
          {option.value === 'CREATURE' && <Layers3 size={12} />}
          {t(lang, option.label, option.labelEn)}
        </button>
      ))}
    </div>
  );

  const renderSourceModeSwitch = () => (
    <div className="mist-concept-source-mode-toggle grid grid-cols-4 gap-1 rounded-md border p-0.5">
      {sourceModes.map(mode => {
        const Icon = mode.icon;
        const selected = sourceMode === mode.id;
        return (
          <button
            key={mode.id}
            type="button"
            onClick={() => setSourceMode(mode.id)}
            className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center gap-2 rounded border px-2 text-[12px] font-black uppercase tracking-[0.06em] transition-all ${selected ? 'is-active' : ''}`}
          >
            <Icon size={14} className="shrink-0" />
            <span className="min-w-0 truncate">{t(lang, mode.label, mode.labelEn)}</span>
          </button>
        );
      })}
    </div>
  );

  const renderHumanRegisterSwitch = () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className={paramsSubcardTitleClass}>
            {t(lang, '人物语域', 'Human Register')}
          </h3>
          <p className={`mt-1 ${paramsSubcardMetaClass}`}>
            {t(lang, activeHumanRegister.desc, activeHumanRegister.descEn)}
          </p>
        </div>
        <span className={`shrink-0 rounded border px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${accentText}`}>
          {t(lang, '二级分流', 'L2 Route')}
        </span>
      </div>
      <div className="grid gap-2 xl:grid-cols-[minmax(0,1fr)_auto]">
        <div className="mist-concept-human-register-grid grid grid-cols-5 gap-1.5">
          {humanRegisterMeta.map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => changeHumanRegister(item.id)}
              className={`mist-concept-source-mode-button flex h-8 items-center justify-center rounded border px-2.5 text-[11px] font-black uppercase tracking-[0.06em] transition-all ${humanRegister === item.id ? 'is-active' : ''}`}
              title={t(lang, item.desc, item.descEn)}
            >
              {t(lang, item.label, item.labelEn)}
            </button>
          ))}
        </div>
        <div className="mist-concept-source-mode-toggle flex h-8 shrink-0 items-center gap-1 rounded-md border p-0.5">
          {registerRandomModes.map(mode => (
            <button
              key={mode.id}
              type="button"
              onClick={() => changeFusionMode(mode.id)}
              className={`mist-concept-source-mode-button flex h-6 items-center rounded border px-2.5 text-[10px] font-black uppercase tracking-[0.06em] transition-all ${registerRandomMode === mode.id ? 'is-active' : ''}`}
              title={t(lang, mode.desc, mode.descEn)}
            >
              {t(lang, mode.label, mode.labelEn)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderObjectRouteGrid = () => (
    <div className="mist-concept-source-mode-toggle flex h-10 min-w-0 items-center gap-1 overflow-x-auto rounded-md border p-0.5 custom-scrollbar">
      {objectRouteMeta.map(route => {
        const Icon = route.icon;
        const selected = objectRoute === route.id;
        return (
          <button
            key={route.id}
            type="button"
            onClick={() => {
              setObjectRoute(route.id);
              setSubjectMode(route.mode);
            }}
            className={`mist-concept-source-mode-button flex h-8 shrink-0 items-center gap-1.5 rounded border px-3 text-[11px] font-black uppercase tracking-[0.06em] transition-all ${selected ? 'is-active' : ''}`}
            title={(lang === 'EN' ? route.subtypesEn : route.subtypes).join(' / ')}
          >
            <Icon size={14} className="shrink-0" />
            <span className="whitespace-nowrap">{t(lang, route.label, route.labelEn)}</span>
          </button>
        );
      })}
    </div>
  );

  const renderMediumCategorySwitch = () => (
    <div className="mist-concept-source-mode-toggle grid grid-cols-5 gap-0.5 rounded-md border p-0.5">
      {mediumCategoryMeta.map(item => {
        const Icon = item.icon;
        const selected = identityOptions.mediumCategory === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setIdentityOptions(prev => ({ ...prev, mediumCategory: item.id }))}
            className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center gap-1 rounded border px-1.5 text-[11px] font-black uppercase tracking-[0.04em] transition-all ${selected ? 'is-active' : ''}`}
            title={t(lang, `${item.label}：${item.desc}`, `${item.labelEn}: ${item.descEn}`)}
          >
            <Icon size={14} className="shrink-0" />
            <span className="min-w-0 truncate">{t(lang, item.shortLabel, item.shortLabelEn)}</span>
          </button>
        );
      })}
    </div>
  );

  const renderPhysicalMediumPanel = () => (
    <section className={`rounded-lg border p-3 ${softPanelClass}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className={sidebarModuleTitleClass}>
          <Paintbrush size={16} className={accentText} />
          <span>{t(lang, '媒介底座', 'Medium Base')}</span>
        </div>
        <span className={paramsModuleMetaClass}>
          {t(lang, activeMediumMeta.shortLabel, activeMediumMeta.shortLabelEn)}
        </span>
      </div>
      {renderMediumCategorySwitch()}
    </section>
  );

  const renderBodyFormPanel = () => (
    <section className={`rounded-lg border p-3 ${softPanelClass}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className={sidebarModuleTitleClass}>
          <UserRound size={16} className={accentText} />
          <span>{t(lang, '本体形态', 'Body Form')}</span>
        </div>
        <span className={paramsModuleMetaClass}>
          {t(lang, activeBodyFormMeta.shortLabel, activeBodyFormMeta.shortLabelEn)}
        </span>
      </div>
      <div className="mist-concept-source-mode-toggle grid grid-cols-4 gap-1 rounded-md border p-0.5">
        {bodyFormModeOptions.map(item => {
          const selected = identityOptions.bodyFormMode === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setIdentityOptions(prev => ({ ...prev, bodyFormMode: item.id }))}
              className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[12px] font-black uppercase tracking-[0.06em] transition-all ${selected ? 'is-active' : ''}`}
              title={t(lang, `${item.label}：${item.desc}`, `${item.labelEn}: ${item.descEn}`)}
            >
              <span className="min-w-0 truncate">{t(lang, item.shortLabel, item.shortLabelEn)}</span>
            </button>
          );
        })}
      </div>
    </section>
  );

  const visualStylePresetRouteLabel = () => {
    if (visualStyleRandomPresetRoute === 'FOLLOW_MEDIUM') return t(lang, '跟随媒介随机', 'Follow Medium');
    if (visualStyleRandomPresetRoute === 'ALL_PRESETS') return t(lang, '全部预设随机', 'All Presets');
    if (visualStyleRandomPresetRoute === 'GLOBAL_FUSION') return t(lang, '全局融合随机', 'Global Fusion');
    const preset = VISUAL_STYLE_RANDOM_PRESETS.find(item => item.id === visualStyleRandomPresetRoute);
    return preset ? t(lang, '固定预设随机', 'Fixed Preset Random') : t(lang, '跟随媒介随机', 'Follow Medium');
  };

  const selectVisualStylePresetRoute = (route: VisualStyleRandomPresetRoute) => {
    setVisualStyleRandomPresetRoute(route);
  };

  const renderVisualStylePresetRouteButton = (
    route: VisualStyleRandomPresetRoute,
    label: string,
    brief: string,
    options?: {
      disabled?: boolean;
      disabledReason?: string;
      compact?: boolean;
    }
  ) => {
    const selected = visualStyleRandomPresetRoute === route;
    const disabled = Boolean(options?.disabled);
    const disabledReason = options?.disabledReason || t(lang, '当前路线不可用', 'Current route unavailable');
    const routeButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.55)' : 'rgba(249, 115, 22, 0.62)'
        : disabled
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(113, 113, 122, 0.20)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.20)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : disabled
        ? isRetro ? 'rgba(133, 65, 27, 0.035)' : 'rgba(24, 24, 27, 0.56)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.82)'
    };
    return (
      <button
        key={route}
        type="button"
        disabled={disabled}
        onClick={() => selectVisualStylePresetRoute(route)}
        className={`relative rounded border px-2.5 text-left transition-all ${options?.compact ? 'py-1.5' : 'py-2'} ${disabled ? (isRetro ? 'cursor-not-allowed text-[#6F4A2D]/35' : 'cursor-not-allowed text-zinc-600') : selected ? (isRetro ? 'border-[#85411B]/55 bg-[#85411B]/10 text-[#85411B]' : 'border-[var(--mist-active-accent)]/60 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]') : (isRetro ? 'border-[#85411B]/16 bg-transparent text-[#6F4A2D]/82 hover:bg-[#85411B]/6' : 'border-orange-500/18 bg-zinc-950/80 text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
        style={routeButtonStyle}
        title={disabled ? disabledReason : brief}
      >
        <span className="flex items-center justify-between gap-2">
          <span className="block min-w-0 truncate text-[12px] font-black leading-5">{label}</span>
          {disabled ? (
            <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.08em] ${isRetro ? 'bg-[#85411B]/8 text-[#6F4A2D]/45' : 'bg-zinc-800 text-zinc-500'}`}>
              {t(lang, '禁用', 'Off')}
            </span>
          ) : null}
        </span>
        <span className={`mt-0.5 block line-clamp-2 text-[11px] font-medium leading-4 ${disabled ? '' : selected ? '' : mutedText}`}>{disabled ? disabledReason : brief}</span>
      </button>
    );
  };

  const renderVisualStylePresetGroup = (
    title: string,
    titleEn: string,
    presets: VisualStyleRandomPreset[]
  ) => {
    if (presets.length === 0) return null;
    return (
      <div className="space-y-1.5">
        <div className={`flex items-center justify-between text-[11px] font-black uppercase tracking-[0.12em] ${mutedText}`}>
          <span>{t(lang, title, titleEn)}</span>
          <span>{presets.length}</span>
        </div>
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {presets.map(preset => renderVisualStylePresetRouteButton(
            preset.id,
            t(lang, preset.label, preset.labelEn),
            t(lang, preset.brief, preset.briefEn),
            { compact: true }
          ))}
        </div>
      </div>
    );
  };

  const renderVisualStyleSafetyToggle = (
    key: keyof VisualStyleRandomSafety,
    label: string,
    labelEn: string
  ) => {
    const enabled = visualStyleRandomSafety[key];
    const safetyButtonStyle = {
      borderColor: enabled
        ? isRetro ? 'rgba(133, 65, 27, 0.50)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.12)' : 'rgba(113, 113, 122, 0.22)',
      backgroundColor: enabled
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'rgba(255, 255, 255, 0.20)' : 'rgba(24, 24, 27, 0.72)'
    };
    return (
      <button
        key={key}
        type="button"
        onClick={() => setVisualStyleRandomSafety(prev => ({ ...prev, [key]: !prev[key] }))}
        className={`flex h-9 items-center justify-between gap-2 rounded border px-2.5 text-[12px] font-black tracking-[0.03em] transition-all ${enabled ? (isRetro ? 'border-[#85411B]/50 bg-[#85411B]/10 text-[#85411B]' : 'border-[var(--mist-active-accent)]/60 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]') : (isRetro ? 'border-[#85411B]/12 bg-white/20 text-[#6F4A2D]/58 hover:bg-[#85411B]/6' : 'border-zinc-700/60 bg-zinc-900/70 text-zinc-500 hover:bg-zinc-900')}`}
        style={safetyButtonStyle}
      >
        <span className="truncate">{t(lang, label, labelEn)}</span>
        <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.08em] ${enabled ? (isRetro ? 'bg-[#85411B]/12 text-[#85411B]' : 'bg-orange-500/16 text-orange-200') : (isRetro ? 'bg-[#85411B]/6 text-[#6F4A2D]/45' : 'bg-zinc-800 text-zinc-500')}`}>
          {enabled ? 'ON' : 'OFF'}
        </span>
      </button>
    );
  };

  const renderVisualStyleDensityButton = (
    value: VisualStyleRandomDensity,
    label: string,
    labelEn: string,
    brief: string,
    briefEn: string
  ) => {
    const selected = visualStyleRandomDensity === value;
    const densityButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.52)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.18)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.70)'
    };
    return (
      <button
        key={value}
        type="button"
        onClick={() => setVisualStyleRandomDensity(value)}
        className={`rounded border px-2.5 py-2 text-left transition-all ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/70' : 'text-zinc-500')}`}
        style={densityButtonStyle}
      >
        <span className="block text-[12px] font-black leading-5">{t(lang, label, labelEn)}</span>
        <span className={`mt-0.5 block text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{t(lang, brief, briefEn)}</span>
      </button>
    );
  };

  const renderVisualStyleSoulBlendButton = (
    value: VisualStyleSoulBlendMode,
    label: string,
    labelEn: string,
    brief: string,
    briefEn: string
  ) => {
    const selected = visualStyleSoulBlendMode === value;
    const blendButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.52)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.18)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.70)'
    };
    return (
      <button
        key={value}
        type="button"
        onClick={() => setVisualStyleSoulBlendMode(value)}
        className={`rounded border px-2.5 py-2 text-left transition-all ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/70' : 'text-zinc-500')}`}
        style={blendButtonStyle}
      >
        <span className="block text-[12px] font-black leading-5">{t(lang, label, labelEn)}</span>
        <span className={`mt-0.5 block text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{t(lang, brief, briefEn)}</span>
      </button>
    );
  };

  const renderVisualStylePresetPanel = () => {
    const photoPresets = VISUAL_STYLE_RANDOM_PRESETS.filter(preset => preset.mediumCategory === 'PHOTOGRAPHY');
    const paintingPresets = VISUAL_STYLE_RANDOM_PRESETS.filter(preset => preset.mediumCategory === 'PAINTING');
    const cgiPresets = VISUAL_STYLE_RANDOM_PRESETS.filter(preset => preset.mediumCategory === 'CGI');
    const tangiblePresets = VISUAL_STYLE_RANDOM_PRESETS.filter(preset => preset.mediumCategory === 'TANGIBLE');
    const fusionPresets = VISUAL_STYLE_RANDOM_PRESETS.filter(preset => preset.mediumCategory === 'ALL');
    return renderRandomConfigPanel(
      '视觉风格随机逻辑',
      'Visual Style Random Logic',
      '先选随机路线，再用安全阀、参数量和审美来源控制抽取。',
      'Choose a route, then control sampling through safety, density, and style source.',
      () => {
        randomizeVisualStylePreset();
        triggerActionMotion('STYLE:random');
      },
      () => setIsVisualStylePresetPanelOpen(false),
      t(lang, '按当前规则随机一次', 'Randomize once with current rules'),
      <>
          {renderRandomPanelSection(
            '随机路线',
            'Random Route',
            '先决定从哪里抽',
            'Choose the source pool',
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3">
              {renderVisualStylePresetRouteButton('FOLLOW_MEDIUM', t(lang, '跟随媒介随机', 'Follow Medium'), t(lang, '只在当前媒介分流内随机。', 'Randomize only within the current medium route.'))}
              {renderVisualStylePresetRouteButton('ALL_PRESETS', t(lang, '全部预设随机', 'All Presets'), t(lang, '从全部视觉预设中随机，会被安全阀过滤。', 'Randomize across all visual presets, filtered by safety switches.'))}
              {renderVisualStylePresetRouteButton('GLOBAL_FUSION', t(lang, '全局融合随机', 'Global Fusion'), t(lang, '只调用跨媒介实验预设。', 'Use only cross-media experimental presets.'))}
            </div>
          )}

          {renderRandomPanelSection(
            '安全阀',
            'Safety Switches',
            '硬过滤随机池',
            'Hard filters',
            <div className="grid grid-cols-2 gap-1.5">
              {renderVisualStyleSafetyToggle('allowVintage', '复古', 'Vintage')}
              {renderVisualStyleSafetyToggle('allowGlitch', '故障', 'Glitch')}
              {renderVisualStyleSafetyToggle('allowPollution', '污染', 'Pollution')}
              {renderVisualStyleSafetyToggle('allowHighSaturation', '高饱和', 'High Sat')}
            </div>
          )}

          {renderRandomPanelSection(
            '参数量',
            'Density',
            '控制选中字段数量',
            'Controls selected fields',
            <div className="grid grid-cols-3 gap-1.5">
              {renderVisualStyleDensityButton('LIGHT', '轻量', 'Light', '按媒介少量抽取', 'Sparse by medium')}
              {renderVisualStyleDensityButton('BALANCED', '均衡', 'Balanced', '按媒介中量抽取', 'Balanced by medium')}
              {renderVisualStyleDensityButton('FULL', '全量', 'Full', '当前预设细项全开', 'All preset fields')}
            </div>
          )}

          {renderRandomPanelSection(
            '审美来源',
            'Style Source',
            '控制风格叠加',
            'Controls style stacking',
            <div className="grid grid-cols-2 gap-1.5">
              {renderVisualStyleSoulBlendButton('PURE', '单源', 'Single Source', '只保留一个审美来源', 'Keep one style source')}
              {renderVisualStyleSoulBlendButton('POLYPHONIC', '复调', 'Polyphonic', '允许两个风格来源叠加', 'Allow two style sources')}
            </div>
          )}

          {renderRandomPanelSection(
            '具体预设',
            'Preset Lock',
            '点选后固定该预设',
            'Click to lock one preset',
            <div className="space-y-3.5">
              {renderVisualStylePresetGroup('摄影预设', 'Photography Presets', photoPresets)}
              {renderVisualStylePresetGroup('绘画预设', 'Painting Presets', paintingPresets)}
              {renderVisualStylePresetGroup('CGI 预设', 'CGI Presets', cgiPresets)}
              {renderVisualStylePresetGroup('实体预设', 'Tangible Presets', tangiblePresets)}
              {renderVisualStylePresetGroup('融合预设', 'Fusion Presets', fusionPresets)}
            </div>
          )}
      </>
    );
  };

  const contentIntentRouteLabel = () => {
    if (contentIntentRoute === 'AUTO') {
      return t(lang, '全部预设随机', 'All Presets');
    }
    const preset = contentIntentPresets.find(item => item.id === contentIntentRoute);
    return preset?.subjectMode === subjectMode ? t(lang, '固定预设随机', 'Fixed Preset Random') : t(lang, '全部预设随机', 'All Presets');
  };
  const contentIntentRouteModeLabel = () => subjectMode === 'CREATURE'
    ? t(lang, '异种主体随机逻辑', 'Creature Subject Random Logic')
    : t(lang, '人形主体随机逻辑', 'Human Subject Random Logic');

  const renderContentIntentRouteButton = (
    route: ContentIntentRoute,
    label: string,
    brief: string,
    compact = false
  ) => {
    const selected = contentIntentRoute === route;
    const routeButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.55)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.20)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.82)'
    };
    return (
      <button
        key={route}
        type="button"
        onClick={() => setContentIntentRoute(route)}
        className={`rounded border px-2.5 text-left transition-all ${compact ? 'py-1.5' : 'py-2'} ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/82 hover:bg-[#85411B]/6' : 'text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
        style={routeButtonStyle}
        title={brief}
      >
        <span className="block min-w-0 truncate text-[12px] font-black leading-5">{label}</span>
        <span className={`mt-0.5 block line-clamp-2 text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{brief}</span>
      </button>
    );
  };

  const renderContentIntentDensityButton = (
    value: ContentIntentRandomDensity,
    label: string,
    labelEn: string,
    brief: string,
    briefEn: string
  ) => {
    const selected = contentIntentRandomDensity === value;
    const densityButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.52)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.18)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.70)'
    };
    return (
      <button
        key={value}
        type="button"
        onClick={() => setContentIntentRandomDensity(value)}
        className={`rounded border px-2.5 py-2 text-left transition-all ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/70' : 'text-zinc-500')}`}
        style={densityButtonStyle}
      >
        <span className="block text-[12px] font-black leading-5">{t(lang, label, labelEn)}</span>
        <span className={`mt-0.5 block text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{t(lang, brief, briefEn)}</span>
      </button>
    );
  };

  const renderContentIntentConflictButton = (
    value: ConceptLinkedRandomConflictPolicy,
    label: string,
    labelEn: string,
    brief: string,
    briefEn: string
  ) => {
    const selected = linkedRandomConflictPolicy === value;
    const conflictButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.52)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.18)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.70)'
    };
    return (
      <button
        key={value}
        type="button"
        onClick={() => setLinkedRandomConflictPolicy(value)}
        className={`rounded border px-2.5 py-2 text-left transition-all ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/70' : 'text-zinc-500')}`}
        style={conflictButtonStyle}
      >
        <span className="block text-[12px] font-black leading-5">{t(lang, label, labelEn)}</span>
        <span className={`mt-0.5 block text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{t(lang, brief, briefEn)}</span>
      </button>
    );
  };

  const renderContentIntentRandomPanel = () => {
    const activeModePresets = contentIntentPresets.filter(preset => preset.subjectMode === subjectMode);
    const isCreaturePanel = subjectMode === 'CREATURE';
    return renderRandomConfigPanel(
      isCreaturePanel ? '异种主体随机逻辑' : '人形主体随机逻辑',
      isCreaturePanel ? 'Creature Subject Random Logic' : 'Human Subject Random Logic',
      isCreaturePanel ? '先选异种原型路线，再用槽位量控制本体、纲目、结构、材质和行为。' : '先选人形内容意图，再用词量和融合规则协调身份、造型、动作和身体证据。',
      isCreaturePanel ? 'Choose a creature archetype route, then control ontology, taxonomy, structure, texture, and behavior by slot density.' : 'Choose a human content intent, then coordinate identity, styling, action, and body evidence through term density and fusion rules.',
      () => {
        randomizeIndependentCoreModules();
        triggerActionMotion('CORE:random');
      },
      () => setIsContentIntentPanelOpen(false),
      isCreaturePanel ? t(lang, '按当前异种规则随机一次', 'Randomize once with current creature rules') : t(lang, '按当前人形规则随机一次', 'Randomize once with current human rules'),
      <>
            {renderRandomPanelSection(
              '随机路线',
              'Random Route',
              isCreaturePanel ? '先决定异种原型来源' : '先决定人形意图来源',
              isCreaturePanel ? 'Choose the creature archetype source' : 'Choose the human intent source',
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {renderContentIntentRouteButton('AUTO', t(lang, '全部预设随机', 'All Presets'), isCreaturePanel
                  ? t(lang, '只从异种主体预设中随机，会读取物种、类别、时间和现实筛选。', 'Randomize only across creature subject presets, reading species, category, era, and reality filters.')
                  : t(lang, '只从人形主体预设中随机，会读取核心主题和当前词条。', 'Randomize only across human subject presets, reading core theme and selected terms.'))}
              </div>
            )}

            {renderRandomPanelSection(
              isCreaturePanel ? '槽位量' : '词量',
              isCreaturePanel ? 'Slot Density' : 'Term Density',
              isCreaturePanel ? '控制异种本体证据量' : '按词量目标控制人形主体',
              isCreaturePanel ? 'Controls creature evidence slots' : 'Controls human subject by term count target',
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                {isCreaturePanel ? (
                  <>
                    {renderContentIntentDensityButton('RANGE_1_8', '极简', 'Minimal', '2-3 个证据槽', '2-3 evidence slots')}
                    {renderContentIntentDensityButton('RANGE_9_16', '轻量', 'Light', '4-5 个证据槽', '4-5 evidence slots')}
                    {renderContentIntentDensityButton('RANGE_17_23', '中档', 'Medium', '6-8 个证据槽', '6-8 evidence slots')}
                    {renderContentIntentDensityButton('RANGE_24_30', '丰富', 'Rich', '9-11 个证据槽', '9-11 evidence slots')}
                    {renderContentIntentDensityButton('RANGE_31_38', '高密', 'Dense', '12-14 个证据槽', '12-14 evidence slots')}
                    {renderContentIntentDensityButton('FULL', '全量', 'Full', '15-16 个证据槽', '15-16 evidence slots')}
                  </>
                ) : (
                  <>
                    {renderContentIntentDensityButton('RANGE_1_8', '极简', 'Minimal', '1-8 个词', '1-8 terms')}
                    {renderContentIntentDensityButton('RANGE_9_16', '轻量', 'Light', '9-16 个词', '9-16 terms')}
                    {renderContentIntentDensityButton('RANGE_17_23', '中档', 'Medium', '17-23 个词', '17-23 terms')}
                    {renderContentIntentDensityButton('RANGE_24_30', '丰富', 'Rich', '24-30 个词', '24-30 terms')}
                    {renderContentIntentDensityButton('RANGE_31_38', '高密', 'Dense', '31-38 个词', '31-38 terms')}
                    {renderContentIntentDensityButton('FULL', '全量', 'Full', '所有可用槽位', 'All eligible slots')}
                  </>
                )}
              </div>
            )}

            {renderRandomPanelSection(
              '融合 / 跨界',
              'Fusion / Crossover',
              '控制偏离和异常空间',
              'Controls drift and anomaly space',
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                {renderContentIntentConflictButton('DELETE', '纯化', 'Pure', '不合适就不选', 'Drop mismatches')}
                {renderContentIntentConflictButton('TRANSLATE', '折译', 'Translate', '转译为当前世界证据', 'Translate into local evidence')}
                {renderContentIntentConflictButton('ANOMALY', '异常', 'Anomaly', '允许局部异常', 'Allow local anomaly')}
                {renderContentIntentConflictButton('MANIFEST', '显化', 'Manifest', '高本体可成立', 'High ontology may manifest')}
              </div>
            )}

            {renderRandomPanelSection(
              isCreaturePanel ? '异种预设' : '人形预设',
              'Preset Lock',
              isCreaturePanel ? '点选后固定异种原型路线' : '点选后固定人形内容意图',
              isCreaturePanel ? 'Click to lock one creature archetype route' : 'Click to lock one human content intent',
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {activeModePresets.map(preset => renderContentIntentRouteButton(
                  preset.id,
                  t(lang, preset.label, preset.labelEn),
                  isCreaturePanel
                    ? t(lang, `${preset.label}：控制异种原型、结构和行为。`, `${preset.labelEn}: controls creature archetype, structure, and behavior.`)
                    : t(lang, `${preset.label}：协调主体、场域和光影。`, `${preset.labelEn}: coordinates subject, field, and lighting.`),
                  true
                ))}
              </div>
            )}
      </>
    );
  };

  const framingPresetRouteLabel = () => {
    if (framingRandomPresetRoute === 'ALL_PRESETS') return t(lang, '全部预设随机', 'All Presets');
    const preset = FRAMING_RANDOM_PRESETS.find(item => item.id === framingRandomPresetRoute);
    return preset ? t(lang, '固定预设随机', 'Fixed Preset Random') : t(lang, '全部预设随机', 'All Presets');
  };

  const selectFramingPresetRoute = (route: FramingRandomPresetRoute) => {
    setFramingRandomPresetRoute(route);
  };

	  const renderFramingPresetRouteButton = (
    route: FramingRandomPresetRoute,
    label: string,
    brief: string,
    compact = false
	  ) => {
	    const selected = framingRandomPresetRoute === route;
	    const routeButtonStyle = {
	      borderColor: selected
	        ? isRetro ? 'rgba(133, 65, 27, 0.55)' : 'rgba(249, 115, 22, 0.62)'
	        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(255, 255, 255, 0.06)',
	      backgroundColor: selected
	        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
	        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.82)'
	    };
    return (
      <button
        key={route}
        type="button"
        onClick={() => selectFramingPresetRoute(route)}
	        className={`rounded border px-2.5 text-left transition-all ${compact ? 'py-1.5' : 'py-2'} ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/82 hover:bg-[#85411B]/6' : 'text-zinc-300 hover:border-white/[0.12] hover:bg-white/[0.035]')}`}
        style={routeButtonStyle}
        title={brief}
      >
        <span className="block min-w-0 truncate text-[12px] font-black leading-5">{label}</span>
        <span className={`mt-0.5 block line-clamp-2 text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{brief}</span>
      </button>
    );
  };

  const renderFramingSafetyToggle = (
    key: keyof FramingRandomSafety,
    label: string,
    labelEn: string
  ) => {
    const enabled = framingRandomSafety[key];
	    const safetyButtonStyle = {
	      borderColor: enabled
	        ? isRetro ? 'rgba(133, 65, 27, 0.50)' : 'rgba(249, 115, 22, 0.62)'
	        : isRetro ? 'rgba(133, 65, 27, 0.12)' : 'rgba(255, 255, 255, 0.06)',
	      backgroundColor: enabled
	        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
	        : isRetro ? 'rgba(255, 255, 255, 0.20)' : 'rgba(24, 24, 27, 0.72)'
    };
    return (
      <button
        key={key}
        type="button"
        onClick={() => setFramingRandomSafety(prev => ({ ...prev, [key]: !prev[key] }))}
	        className={`flex h-9 items-center justify-between gap-2 rounded border px-2.5 text-[12px] font-black tracking-[0.03em] transition-all ${enabled ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/58 hover:bg-[#85411B]/6' : 'text-zinc-500 hover:border-white/[0.12] hover:bg-white/[0.035]')}`}
        style={safetyButtonStyle}
      >
        <span className="truncate">{t(lang, label, labelEn)}</span>
        <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.08em] ${enabled ? (isRetro ? 'bg-[#85411B]/12 text-[#85411B]' : 'bg-orange-500/16 text-orange-200') : (isRetro ? 'bg-[#85411B]/6 text-[#6F4A2D]/45' : 'bg-zinc-800 text-zinc-500')}`}>
          {enabled ? 'ON' : 'OFF'}
        </span>
      </button>
    );
  };

  const renderFramingDensityButton = (
    value: FramingRandomDensity,
    label: string,
    labelEn: string,
    brief: string,
    briefEn: string
  ) => {
    const selected = framingRandomDensity === value;
	    const densityButtonStyle = {
	      borderColor: selected
	        ? isRetro ? 'rgba(133, 65, 27, 0.52)' : 'rgba(249, 115, 22, 0.62)'
	        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(255, 255, 255, 0.06)',
	      backgroundColor: selected
	        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
	        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.70)'
    };
    return (
      <button
        key={value}
        type="button"
        onClick={() => setFramingRandomDensity(value)}
	        className={`rounded border px-2.5 py-2 text-left transition-all ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/70 hover:bg-[#85411B]/6' : 'text-zinc-500 hover:border-white/[0.12] hover:bg-white/[0.035]')}`}
        style={densityButtonStyle}
      >
        <span className="block text-[12px] font-black leading-5">{t(lang, label, labelEn)}</span>
        <span className={`mt-0.5 block text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{t(lang, brief, briefEn)}</span>
      </button>
    );
  };

  const renderFramingPresetPanel = () => {
    return renderRandomConfigPanel(
      '取景随机逻辑',
      'Framing Random Logic',
      '先选取景目标，再按安全阀和参数量抽取取景细项。',
      'Choose a framing goal first, then sample details through safety switches and density.',
      () => {
        randomizeFramingPreset();
        triggerActionMotion('FRAMING:random');
      },
      () => setIsFramingPresetPanelOpen(false),
      t(lang, '按当前规则随机一次', 'Randomize once with current rules'),
      <>
            {renderRandomPanelSection(
              '随机路线',
              'Random Route',
              '先决定取景目标来源',
              'Choose the framing source',
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {renderFramingPresetRouteButton('ALL_PRESETS', t(lang, '全部预设随机', 'All Presets'), t(lang, '从全部取景目标中随机，会被安全阀过滤。', 'Randomize across framing goals, filtered by safety switches.'))}
              </div>
            )}

            {renderRandomPanelSection(
              '安全阀',
              'Safety Switches',
              '硬过滤取景组合',
              'Hard filters',
              <div className="grid grid-cols-2 gap-1.5">
                {renderFramingSafetyToggle('keepReadableSubject', '主体可读', 'Readable Subject')}
                {renderFramingSafetyToggle('avoidExtremeDistortion', '禁极端畸变', 'No Extreme Distortion')}
                {renderFramingSafetyToggle('avoidMultiSubject', '禁多主体', 'No Multi-Subject')}
                {renderFramingSafetyToggle('allowOpticalFx', '允许光学', 'Optical FX')}
              </div>
            )}

            {renderRandomPanelSection(
              '参数量',
              'Density',
              '控制取景细项数量',
              'Controls selected fields',
              <div className="grid grid-cols-3 gap-1.5">
                {renderFramingDensityButton('LIGHT', '轻量', 'Light', '约 1-3 个字段', '1-3 fields')}
                {renderFramingDensityButton('BALANCED', '均衡', 'Balanced', '约 3-5 个字段', '3-5 fields')}
                {renderFramingDensityButton('FULL', '全量', 'Full', '细项全开', 'Full details')}
              </div>
            )}

            {renderRandomPanelSection(
              '具体预设',
              'Preset Lock',
              '点选后固定取景目标',
              'Click to lock framing goal',
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {FRAMING_RANDOM_PRESETS.map(preset => renderFramingPresetRouteButton(
                  preset.id,
                  t(lang, preset.label, preset.labelEn),
                  t(lang, preset.brief, preset.briefEn),
                  true
                ))}
              </div>
            )}
      </>
    );
  };

  const renderFramingPresetControl = () => (
    <button
      type="button"
      disabled={isSectionLocked('STYLE')}
      onClick={() => setIsFramingPresetPanelOpen(prev => !prev)}
	      className={`flex h-6 max-w-[10rem] items-center gap-1 rounded border px-1.5 text-[10px] font-black tracking-[0.02em] transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isFramingPresetPanelOpen ? (isRetro ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]' : 'border-[var(--mist-active-accent)]/55 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]') : (isRetro ? 'border-[#85411B]/18 bg-transparent text-[#85411B]/75 hover:bg-[#85411B]/8' : 'border-orange-500/18 bg-zinc-950/70 text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
      title={t(lang, '选择取景随机预设', 'Choose framing random preset')}
    >
      <SlidersHorizontal size={11} className="shrink-0" />
      <span className="min-w-0 truncate">{framingPresetRouteLabel()}</span>
    </button>
  );

  const renderContentIntentPresetControl = () => (
    <button
      type="button"
      disabled={isSectionLocked('SUBJECT')}
      onClick={() => setIsContentIntentPanelOpen(prev => !prev)}
      className={`flex h-6 max-w-[10rem] items-center gap-1 rounded border px-1.5 text-[10px] font-black tracking-[0.02em] transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isContentIntentPanelOpen ? (isRetro ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]' : 'border-[var(--mist-active-accent)]/55 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]') : (isRetro ? 'border-[#85411B]/18 bg-transparent text-[#85411B]/75 hover:bg-[#85411B]/8' : 'border-orange-500/18 bg-zinc-950/70 text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
      title={t(lang, '选择内容意图随机预设', 'Choose content intent random preset')}
    >
      <SlidersHorizontal size={11} className="shrink-0" />
      <span className="min-w-0 truncate">{contentIntentRouteLabel()}</span>
    </button>
  );

  const spacetimeFieldRouteLabel = () => {
    const meta = spacetimeFieldRouteMeta[spacetimeFieldRandomRoute] || spacetimeFieldRouteMeta.ALL_PRESETS;
    return t(lang, meta.label, meta.labelEn);
  };

  const renderSpacetimeFieldRouteButton = (route: SpacetimeFieldRandomRoute, compact = false) => {
    const selected = spacetimeFieldRandomRoute === route;
    const meta = spacetimeFieldRouteMeta[route];
    const routeButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.55)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.20)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.82)'
    };
    return (
      <button
        key={route}
        type="button"
        onClick={() => setSpacetimeFieldRandomRoute(route)}
        className={`rounded border px-2.5 text-left transition-all ${compact ? 'py-1.5' : 'py-2'} ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/82 hover:bg-[#85411B]/6' : 'text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
        style={routeButtonStyle}
        title={t(lang, meta.brief, meta.briefEn)}
      >
        <span className="block min-w-0 truncate text-[12px] font-black leading-5">{t(lang, meta.label, meta.labelEn)}</span>
        <span className={`mt-0.5 block line-clamp-2 text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{t(lang, meta.brief, meta.briefEn)}</span>
      </button>
    );
  };

  const renderSpacetimeFieldDensityButton = (
    value: SpacetimeFieldRandomDensity,
    label: string,
    labelEn: string,
    brief: string,
    briefEn: string
  ) => {
    const selected = spacetimeFieldRandomDensity === value;
    const densityButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.52)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.18)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.70)'
    };
    return (
      <button
        key={value}
        type="button"
        onClick={() => setSpacetimeFieldRandomDensity(value)}
        className={`rounded border px-2.5 py-2 text-left transition-all ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/70' : 'text-zinc-500')}`}
        style={densityButtonStyle}
      >
        <span className="block text-[12px] font-black leading-5">{t(lang, label, labelEn)}</span>
        <span className={`mt-0.5 block text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{t(lang, brief, briefEn)}</span>
      </button>
    );
  };

  const renderSpacetimeFieldRandomPanel = () => renderRandomConfigPanel(
    '时空场域随机逻辑',
    'Time-Space Field Random Logic',
    '先选场域路线，再用参数量决定精确坐标、空间类型和环境状态的抽取强度。',
    'Choose a field route first, then control coordinates, space types, and environment state through density.',
    () => {
      randomizeSpacetimeFieldModule();
      triggerActionMotion('FIELD:random');
    },
    () => setIsSpacetimeFieldRandomPanelOpen(false),
    t(lang, '按当前场域规则随机一次', 'Randomize once with current field rules'),
    <>
      {renderRandomPanelSection(
        '随机路线',
        'Random Route',
        '决定场域从哪里开始',
        'Choose the field source',
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {renderSpacetimeFieldRouteButton('ALL_PRESETS')}
          {renderSpacetimeFieldRouteButton('EXACT_COORDINATE')}
          {renderSpacetimeFieldRouteButton('REAL_SCENE', true)}
          {renderSpacetimeFieldRouteButton('SURREAL_SCENE', true)}
          {renderSpacetimeFieldRouteButton('ABSTRACT_SCENE', true)}
          {renderSpacetimeFieldRouteButton('ENVIRONMENT_STATE', true)}
        </div>
      )}

      {renderRandomPanelSection(
        '参数量',
        'Density',
        '控制场域细项数量',
        'Controls field detail count',
        <div className="grid grid-cols-3 gap-1.5">
          {renderSpacetimeFieldDensityButton('LIGHT', '轻量', 'Light', '锚点 + 1 个细项', 'Anchor + 1 detail')}
          {renderSpacetimeFieldDensityButton('BALANCED', '均衡', 'Balanced', '锚点 + 2-3 个细项', 'Anchor + 2-3 details')}
          {renderSpacetimeFieldDensityButton('FULL', '全量', 'Full', '场域细项全开', 'All field details')}
        </div>
      )}
    </>
  );

  const renderSpacetimeFieldRandomControl = () => (
    <button
      type="button"
      disabled={isSectionLocked('STYLE')}
      onClick={() => setIsSpacetimeFieldRandomPanelOpen(prev => !prev)}
      className={`flex h-6 max-w-[10rem] items-center gap-1 rounded border px-1.5 text-[10px] font-black tracking-[0.02em] transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isSpacetimeFieldRandomPanelOpen ? (isRetro ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]' : 'border-[var(--mist-active-accent)]/55 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]') : (isRetro ? 'border-[#85411B]/18 bg-transparent text-[#85411B]/75 hover:bg-[#85411B]/8' : 'border-orange-500/18 bg-zinc-950/70 text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
      title={t(lang, '选择时空场域随机规则', 'Choose time-space field random rules')}
    >
      <SlidersHorizontal size={11} className="shrink-0" />
      <span className="min-w-0 truncate">{spacetimeFieldRouteLabel()}</span>
    </button>
  );

  const lightingAtmosphereRouteLabel = () => {
    const meta = lightingAtmosphereRouteMeta[lightingAtmosphereRandomRoute] || lightingAtmosphereRouteMeta.ALL_PRESETS;
    return t(lang, meta.label, meta.labelEn);
  };

  const renderLightingAtmosphereRouteButton = (route: LightingAtmosphereRandomRoute) => {
    const selected = lightingAtmosphereRandomRoute === route;
    const meta = lightingAtmosphereRouteMeta[route];
    const routeButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.55)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.20)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.82)'
    };
    return (
      <button
        key={route}
        type="button"
        onClick={() => setLightingAtmosphereRandomRoute(route)}
        className={`rounded border px-2.5 py-2 text-left transition-all ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/82 hover:bg-[#85411B]/6' : 'text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
        style={routeButtonStyle}
        title={t(lang, meta.brief, meta.briefEn)}
      >
        <span className="block min-w-0 truncate text-[12px] font-black leading-5">{t(lang, meta.label, meta.labelEn)}</span>
        <span className={`mt-0.5 block line-clamp-2 text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{t(lang, meta.brief, meta.briefEn)}</span>
      </button>
    );
  };

  const renderLightingAtmosphereDensityButton = (
    value: LightingAtmosphereRandomDensity,
    label: string,
    labelEn: string,
    brief: string,
    briefEn: string
  ) => {
    const selected = lightingAtmosphereRandomDensity === value;
    const densityButtonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.52)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.18)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.70)'
    };
    return (
      <button
        key={value}
        type="button"
        onClick={() => setLightingAtmosphereRandomDensity(value)}
        className={`rounded border px-2.5 py-2 text-left transition-all ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/70' : 'text-zinc-500')}`}
        style={densityButtonStyle}
      >
        <span className="block text-[12px] font-black leading-5">{t(lang, label, labelEn)}</span>
        <span className={`mt-0.5 block text-[11px] font-medium leading-4 ${selected ? '' : mutedText}`}>{t(lang, brief, briefEn)}</span>
      </button>
    );
  };

  const renderLightingAtmosphereRandomPanel = () => renderRandomConfigPanel(
    '光影氛围随机逻辑',
    'Lighting Atmosphere Random Logic',
    '光影预设包和布光细项互斥：预设包负责整体布光意图，细项负责手工拆分控制。',
    'Lighting preset packs and detail controls are exclusive: packs define the whole intent, details provide manual control.',
    () => {
      randomizeLightingAtmosphereModule();
      triggerActionMotion('LIGHT:random');
    },
    () => setIsLightingAtmosphereRandomPanelOpen(false),
    t(lang, '按当前光影规则随机一次', 'Randomize once with current lighting rules'),
    <>
      {renderRandomPanelSection(
        '随机路线',
        'Random Route',
        '决定抽整体预设还是布光细项',
        'Choose package or detail route',
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3">
          {renderLightingAtmosphereRouteButton('ALL_PRESETS')}
          {renderLightingAtmosphereRouteButton('PRESET_PACKAGE')}
          {renderLightingAtmosphereRouteButton('DETAIL_LIGHTING')}
        </div>
      )}

      {renderRandomPanelSection(
        '参数量',
        'Density',
        '只在布光细项路线中生效',
        'Only affects lighting details route',
        <div className="grid grid-cols-3 gap-1.5">
          {renderLightingAtmosphereDensityButton('LIGHT', '轻量', 'Light', '1-2 个布光细项', '1-2 lighting details')}
          {renderLightingAtmosphereDensityButton('BALANCED', '均衡', 'Balanced', '3-4 个布光细项', '3-4 lighting details')}
          {renderLightingAtmosphereDensityButton('FULL', '全量', 'Full', '布光细项全开', 'All lighting details')}
        </div>
      )}
    </>
  );

  const renderLightingAtmosphereRandomControl = () => (
    <button
      type="button"
      disabled={isSectionLocked('STYLE')}
      onClick={() => setIsLightingAtmosphereRandomPanelOpen(prev => !prev)}
      className={`flex h-6 max-w-[10rem] items-center gap-1 rounded border px-1.5 text-[10px] font-black tracking-[0.02em] transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isLightingAtmosphereRandomPanelOpen ? (isRetro ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]' : 'border-[var(--mist-active-accent)]/55 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]') : (isRetro ? 'border-[#85411B]/18 bg-transparent text-[#85411B]/75 hover:bg-[#85411B]/8' : 'border-orange-500/18 bg-zinc-950/70 text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
      title={t(lang, '选择光影氛围随机规则', 'Choose lighting atmosphere random rules')}
    >
      <SlidersHorizontal size={11} className="shrink-0" />
      <span className="min-w-0 truncate">{lightingAtmosphereRouteLabel()}</span>
    </button>
  );

  const linkedDensityOptions: Array<{ id: ConceptLinkedRandomDensity; label: string; labelEn: string; desc: string; descEn: string }> = [
    { id: 'LIGHT', label: '轻量', labelEn: 'Light', desc: '少量主体、1-2 个场域/光影', descEn: 'Few subject terms, 1-2 field/lighting terms' },
    { id: 'BALANCED', label: '标准', labelEn: 'Standard', desc: '主轴清楚，细节适中', descEn: 'Clear axis with moderate details' },
    { id: 'FULL', label: '全量', labelEn: 'Full', desc: '更多主体与环境证据', descEn: 'More subject and environmental evidence' }
  ];

  const linkedConflictOptions: Array<{ id: ConceptLinkedRandomConflictPolicy; label: string; labelEn: string; desc: string; descEn: string }> = [
    { id: 'DELETE', label: '删除', labelEn: 'Delete', desc: '不合法就不选', descEn: 'Drop illegal terms' },
    { id: 'TRANSLATE', label: '折译', labelEn: 'Translate', desc: '改成当前世界可成立的痕迹', descEn: 'Translate into valid local evidence' },
    { id: 'ANOMALY', label: '异常', labelEn: 'Anomaly', desc: '允许一个局部异常', descEn: 'Allow one local anomaly' },
    { id: 'MANIFEST', label: '成立', labelEn: 'Manifest', desc: '高本体可字面成立', descEn: 'High ontology may manifest literally' }
  ];

  const selectLinkedPresetRoute = (route: LinkedRandomPresetRoute) => {
    setLinkedRandomPresetRoute(route);
    if (route === 'ALL_PRESETS') return;
    const preset = CONCEPT_LINKED_RANDOM_PRESETS.find(item => item.id === route);
    if (!preset) return;
    setLinkedRandomDensity(preset.density);
    setLinkedRandomConflictPolicy(preset.conflictPolicy);
    setRegisterRandomMode(preset.worldLaw);
    setSubjectMode(preset.subjectMode);
    if (preset.subjectMode === 'HUMAN' && preset.humanRegister) setHumanRegister(preset.humanRegister);
  };

  const linkedRealityLevelByTag: Record<string, 1 | 2 | 3 | 4 | 5> = {
    realistic: 1,
    stylized: 2,
    semi_surreal: 3,
    nonreal: 4,
    abstract: 5
  };
  const clampLinkedSurrealLevel = (level: number): 1 | 2 | 3 | 4 | 5 => {
    if (level >= 5) return 5;
    if (level >= 4) return 4;
    if (level >= 3) return 3;
    if (level >= 2) return 2;
    return 1;
  };
  const getRuntimeRealityMax = () => clampLinkedSurrealLevel(
    Math.max(1, ...effectiveKeywordTags.realityTags.map(tag => linkedRealityLevelByTag[tag] || 1))
  );
  const applyLinkedRuntimeControlsToPreset = (preset: ConceptLinkedRandomPreset): ConceptLinkedRandomPreset => {
    const policy = linkedRandomConflictPolicy;
    const runtimeSurrealMax = clampLinkedSurrealLevel(Math.max(preset.surrealMax, getRuntimeRealityMax()));
    return {
      ...preset,
      density: linkedRandomDensity,
      conflictPolicy: policy,
      surrealMax: runtimeSurrealMax,
      allowSecondaryAxis: policy === 'ANOMALY' || policy === 'MANIFEST',
      allowHighRisk: policy === 'MANIFEST'
    };
  };

  const getThemeGovernedLinkedPreset = (basePreset: ConceptLinkedRandomPreset): ConceptLinkedRandomPreset => {
    return applyLinkedRuntimeControlsToPreset({
      ...basePreset,
      primaryGenre: worldAxisState.primaryGenre,
      secondaryGenres: worldAxisState.secondaryGenres,
      genreFusionMode: worldAxisState.genreFusionMode,
      genreAllow: worldAxisState.genreAllow,
      eraAllow: effectiveKeywordTags.eraTags,
      realityAllow: effectiveKeywordTags.realityTags
    });
  };

  const themeAxisValueLabels: Record<string, { label: string; labelEn: string }> = {
    abstract: { label: '抽象', labelEn: 'abstract' },
    adventure: { label: '冒险', labelEn: 'adventure' },
    alien_ecology: { label: '异星生态', labelEn: 'alien ecology' },
    alien_planet: { label: '异星', labelEn: 'alien planet' },
    alley: { label: '巷道', labelEn: 'alley' },
    altar: { label: '祭坛', labelEn: 'altar' },
    apartment: { label: '公寓', labelEn: 'apartment' },
    archive: { label: '档案室', labelEn: 'archive' },
    bar: { label: '酒吧', labelEn: 'bar' },
    biotech_lab: { label: '生物实验室', labelEn: 'biotech lab' },
    biopunk: { label: '生物朋克', labelEn: 'biopunk' },
    body_horror: { label: '身体恐怖', labelEn: 'body horror' },
    boudoir_aesthetic: { label: '私房美学', labelEn: 'boudoir aesthetic' },
    cave: { label: '洞穴', labelEn: 'cave' },
    chinese_jianghu: { label: '中国江湖', labelEn: 'Chinese jianghu' },
    city: { label: '城市', labelEn: 'city' },
    club: { label: '夜场', labelEn: 'club' },
    colony: { label: '殖民地', labelEn: 'colony' },
    contemporary: { label: '当代', labelEn: 'contemporary' },
    contemporary_urban: { label: '当代都市', labelEn: 'contemporary urban' },
    containment: { label: '收容区', labelEn: 'containment' },
    corporate_tower: { label: '企业塔楼', labelEn: 'corporate tower' },
    cosmic: { label: '宇宙尺度', labelEn: 'cosmic' },
    cosmic_horror: { label: '宇宙恐怖', labelEn: 'cosmic horror' },
    court: { label: '宫廷', labelEn: 'court' },
    courtyard: { label: '庭院', labelEn: 'courtyard' },
    creature: { label: '异种', labelEn: 'creature' },
    crypt: { label: '墓室', labelEn: 'crypt' },
    cyber_megacity: { label: '赛博巨城', labelEn: 'cyber megacity' },
    cyberpunk: { label: '赛博朋克', labelEn: 'cyberpunk' },
    dark_fantasy: { label: '黑暗奇幻', labelEn: 'dark fantasy' },
    desert: { label: '荒漠', labelEn: 'desert' },
    dream: { label: '梦境', labelEn: 'dream' },
    dream_psychic: { label: '梦境心理场', labelEn: 'dream psychic field' },
    early_modern: { label: '近世早期', labelEn: 'early modern' },
    east_asian_historical: { label: '东亚古典', labelEn: 'East Asian historical' },
    east_asian_modern: { label: '东亚现代', labelEn: 'East Asian modern' },
    east_asian_mythic: { label: '东亚神话', labelEn: 'East Asian mythic' },
    east_asian_ritual: { label: '东亚仪式', labelEn: 'East Asian ritual' },
    ecological: { label: '生态', labelEn: 'ecological' },
    ecological_wild: { label: '野性生态', labelEn: 'ecological wild' },
    factory: { label: '工厂', labelEn: 'factory' },
    fantasy: { label: '奇幻', labelEn: 'fantasy' },
    far_future: { label: '远未来', labelEn: 'far future' },
    fashion_idol: { label: '时尚偶像', labelEn: 'fashion idol' },
    feudal: { label: '封建时代', labelEn: 'feudal' },
    forbidden_temple: { label: '禁忌神殿', labelEn: 'forbidden temple' },
    forest: { label: '森林', labelEn: 'forest' },
    fortress: { label: '堡垒', labelEn: 'fortress' },
    frontier_survival: { label: '边境生存', labelEn: 'frontier survival' },
    frontier_town: { label: '边镇', labelEn: 'frontier town' },
    future: { label: '未来', labelEn: 'future' },
    global_corporate: { label: '全球企业', labelEn: 'global corporate' },
    gothic_ecclesial: { label: '哥特教会', labelEn: 'gothic ecclesial' },
    greenhouse: { label: '温室', labelEn: 'greenhouse' },
    historical: { label: '历史', labelEn: 'historical' },
    historical_court: { label: '历史宫廷', labelEn: 'historical court' },
    horror: { label: '恐怖', labelEn: 'horror' },
    hospital: { label: '医院', labelEn: 'hospital' },
    imperial_bureaucracy: { label: '帝国官僚', labelEn: 'imperial bureaucracy' },
    industrial: { label: '工业', labelEn: 'industrial' },
    industrial_ruin: { label: '工业废墟', labelEn: 'industrial ruin' },
    institutional: { label: '制度机构', labelEn: 'institutional' },
    institutional_modern: { label: '现代机构', labelEn: 'modern institution' },
    interior: { label: '室内', labelEn: 'interior' },
    japanese_urban: { label: '日本都市', labelEn: 'Japanese urban' },
    kingdom: { label: '王国', labelEn: 'kingdom' },
    lab: { label: '实验室', labelEn: 'lab' },
    landscape: { label: '风景场', labelEn: 'landscape' },
    liminal: { label: '阈限空间', labelEn: 'liminal' },
    liminal_modern: { label: '现代阈限', labelEn: 'modern liminal' },
    market: { label: '市集', labelEn: 'market' },
    martial_arts: { label: '武术', labelEn: 'martial arts' },
    medical: { label: '医疗', labelEn: 'medical' },
    medical_institution: { label: '医疗机构', labelEn: 'medical institution' },
    military_remnant: { label: '军事残部', labelEn: 'military remnant' },
    mirror_room: { label: '镜室', labelEn: 'mirror room' },
    modern: { label: '现代', labelEn: 'modern' },
    mountain: { label: '山地', labelEn: 'mountain' },
    mountain_monastery: { label: '山中宗门', labelEn: 'mountain monastery' },
    mythic: { label: '神话时代', labelEn: 'mythic' },
    mythic_cult: { label: '神话秘教', labelEn: 'mythic cult' },
    mythic_epic: { label: '神话史诗', labelEn: 'mythic epic' },
    mythic_kingdom: { label: '神话王国', labelEn: 'mythic kingdom' },
    near_future: { label: '近未来', labelEn: 'near future' },
    noir_crime: { label: '黑色犯罪', labelEn: 'noir crime' },
    nomadic_steppe: { label: '游牧草原', labelEn: 'nomadic steppe' },
    occult: { label: '秘仪', labelEn: 'occult' },
    office: { label: '办公室', labelEn: 'office' },
    palace: { label: '宫殿', labelEn: 'palace' },
    post_apocalyptic: { label: '后末日', labelEn: 'post-apocalyptic' },
    postapocalyptic_wasteland: { label: '末日废土', labelEn: 'post-apocalyptic wasteland' },
    posthuman: { label: '后人类', labelEn: 'posthuman' },
    posthuman_city: { label: '后人类城市', labelEn: 'posthuman city' },
    posthuman_civilization: { label: '后人类文明', labelEn: 'posthuman civilization' },
    posthuman_research: { label: '后人类研究', labelEn: 'posthuman research' },
    primitive: { label: '原始时代', labelEn: 'primitive' },
    psychological: { label: '心理', labelEn: 'psychological' },
    real_professional: { label: '现实职业', labelEn: 'real profession' },
    religious_order: { label: '宗教秩序', labelEn: 'religious order' },
    religious_ritual: { label: '宗教仪式', labelEn: 'religious ritual' },
    river: { label: '河流', labelEn: 'river' },
    road: { label: '道路', labelEn: 'road' },
    romance: { label: '爱情', labelEn: 'romance' },
    room: { label: '房间', labelEn: 'room' },
    ruin: { label: '遗迹', labelEn: 'ruin' },
    science_fiction: { label: '科幻', labelEn: 'science fiction' },
    scrapyard: { label: '废料场', labelEn: 'scrapyard' },
    sect_order: { label: '门派秩序', labelEn: 'sect order' },
    server_room: { label: '服务器室', labelEn: 'server room' },
    shelter: { label: '庇护所', labelEn: 'shelter' },
    slave: { label: '古典奴隶制', labelEn: 'classical slave era' },
    space_colony: { label: '太空殖民', labelEn: 'space colony' },
    space_opera: { label: '太空史诗', labelEn: 'space opera' },
    space_station: { label: '空间站', labelEn: 'space station' },
    spaceship: { label: '飞船', labelEn: 'spaceship' },
    stage: { label: '舞台', labelEn: 'stage' },
    street: { label: '街道', labelEn: 'street' },
    studio: { label: '摄影棚', labelEn: 'studio' },
    subway: { label: '地铁', labelEn: 'subway' },
    surreal: { label: '超现实', labelEn: 'surreal' },
    survival: { label: '生存', labelEn: 'survival' },
    symbolic_stage: { label: '象征舞台', labelEn: 'symbolic stage' },
    temple: { label: '神殿/寺庙', labelEn: 'temple' },
    threshold: { label: '阈限', labelEn: 'threshold' },
    timeless: { label: '不限时代', labelEn: 'era-universal' },
    tomb: { label: '墓穴', labelEn: 'tomb' },
    training_ground: { label: '训练场', labelEn: 'training ground' },
    underground: { label: '地下', labelEn: 'underground' },
    urban_life: { label: '都市生活', labelEn: 'urban life' },
    void: { label: '虚空', labelEn: 'void' },
    war_military: { label: '战争军事', labelEn: 'war / military' },
    wasteland: { label: '废土', labelEn: 'wasteland' },
    western_court: { label: '西式宫廷', labelEn: 'western court' },
    western_modern: { label: '西方现代', labelEn: 'western modern' },
    wetland: { label: '湿地', labelEn: 'wetland' },
    workplace: { label: '职场', labelEn: 'workplace' },
    wuxia: { label: '武侠', labelEn: 'wuxia' },
    xianxia: { label: '仙侠', labelEn: 'xianxia' }
  };

  const themeAxisLabel = (value: string) => {
    const creatureTaxonomyLabel = CREATURE_TAXONOMY_AXIS.find(item => item.id === value);
    if (creatureTaxonomyLabel) return t(lang, creatureTaxonomyLabel.label, creatureTaxonomyLabel.labelEn);
    const axisLabel = realityAxisLabels[value] || CONCEPT_TAG_LABELS[normalizeConceptTagId(value)] || themeAxisValueLabels[value];
    return axisLabel ? t(lang, axisLabel.label, axisLabel.labelEn) : value.replace(/_/g, ' ');
  };

  const keywordTagLabel = (value: string) => {
    const tagLabel = CONCEPT_TAG_LABELS[normalizeConceptTagId(value)];
    return tagLabel ? t(lang, tagLabel.label, tagLabel.labelEn) : themeAxisLabel(value);
  };

  const keywordTagLabelKey = (value: string) => keywordTagLabel(value).trim().toLocaleLowerCase();

  const uniqueKeywordValues = (values: readonly string[]) => {
    const seen = new Set<string>();
    return uniqueConceptTagIds(values).filter(value => {
      const key = keywordTagLabelKey(value);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  const axisCoversAll = (values: readonly string[], allValues?: readonly string[]) => {
    if (!allValues || allValues.length === 0) return false;
    const selected = new Set(values);
    return allValues.every(value => selected.has(value));
  };

  const axisSummaryText = (values: readonly string[], max = 3, allValues?: readonly string[]) => {
    if (axisCoversAll(values, allValues)) return t(lang, '全选', 'All');
    const visible = values.slice(0, max).map(themeAxisLabel).join(' / ');
    return visible;
  };

  const axisSlotText = (values: readonly string[], allValues?: readonly string[]) => (
    axisCoversAll(values, allValues) ? t(lang, '全选', 'All') : values.map(themeAxisLabel).join(' / ')
  );

  const visibleCategoryAxis = CONCEPT_CATEGORY_AXIS.filter(item => isAdmin || !item.adminOnly);
  const themeAxisOptions = {
    species: CREATURE_TAXONOMY_AXIS.map(item => item.id),
    genres: visibleCategoryAxis.map(item => item.id),
    eras: CONCEPT_ERA_AXIS.map(item => item.id),
    realities: CONCEPT_REALITY_AXIS.map(item => item.id)
  };

  const pickAdjacentAxisRange = (items: readonly string[], options?: { includeAll?: boolean; allItems?: readonly string[] }) => {
    if (items.length === 0) return [];
    if (options?.includeAll && Math.random() < 0.22) return [...(options.allItems || items)];
    const count = Math.min(items.length, Math.floor(Math.random() * 3) + 1);
    const start = Math.floor(Math.random() * (items.length - count + 1));
    return items.slice(start, start + count);
  };

  const resetKeywordTagEdits = () => {
    setRemovedKeywordTags({
      eraTags: [],
      realityTags: []
    });
    setAddedKeywordTags({
      eraTags: [],
      realityTags: []
    });
  };

  const randomThemeAxis = () => {
    resetKeywordTagEdits();
    const genrePool = [...themeAxisOptions.genres].sort(() => Math.random() - 0.5);
    const genreCount = Math.random() < 0.28 ? 2 : 1;
    const genreAllow = genrePool.slice(0, genreCount);
    const speciesPool = [...themeAxisOptions.species].sort(() => Math.random() - 0.5);
    const creatureTaxonomyAllow = subjectMode === 'CREATURE' ? speciesPool.slice(0, Math.random() < 0.26 ? 2 : 1) : [];
    const adjacentEraPool = themeAxisOptions.eras.filter(value => value !== 'timeless');
    const eraAllow = pickAdjacentAxisRange(adjacentEraPool, { includeAll: true, allItems: themeAxisOptions.eras });
    const realityAllow = pickAdjacentAxisRange(themeAxisOptions.realities, { includeAll: true, allItems: themeAxisOptions.realities });
    setWorldAxisState(prev => ({
      ...prev,
      primaryGenre: genreAllow[0] || '',
      secondaryGenres: genreAllow.slice(1, 2),
      creatureTaxonomyAllow,
      genreAllow,
      eraAllow,
      realityAllow
    }));
  };

  const resetThemeAxis = () => {
    resetKeywordTagEdits();
    setWorldAxisState(prev => ({
      ...prev,
      primaryGenre: '',
      secondaryGenres: [],
      creatureTaxonomyAllow: [],
      genreAllow: [],
      eraAllow: [],
      realityAllow: []
    }));
  };

  const realityAxisLabels = CONCEPT_REALITY_AXIS.reduce<Record<string, { label: string; labelEn: string }>>((acc, item) => {
    acc[item.id] = { label: item.label, labelEn: item.labelEn };
    return acc;
  }, {});

  const openThemeAxisPicker = (mode: ThemeAxisPickerMode) => {
    setDraftWorldAxisState(worldAxisState);
    setActiveThemeAxisPicker(mode);
  };

  const closeThemeAxisPicker = () => {
    setActiveThemeAxisPicker(null);
    setDraftWorldAxisState(null);
  };

  const commitThemeAxisPicker = () => {
    if (draftWorldAxisState) {
      resetKeywordTagEdits();
      setWorldAxisState(draftWorldAxisState);
    }
    setActiveThemeAxisPicker(null);
    setDraftWorldAxisState(null);
  };

  const setDraftWorldAxisList = (key: 'creatureTaxonomyAllow' | 'genreAllow' | 'eraAllow' | 'realityAllow', value: string) => {
    setDraftWorldAxisState(prevDraft => {
      const prev = prevDraft || worldAxisState;
      if (key === 'creatureTaxonomyAllow') {
        const current = prev.creatureTaxonomyAllow;
        const taxonomyValue = value as CreatureTaxonomyTag;
        const next = current.includes(taxonomyValue)
          ? current.filter(item => item !== taxonomyValue)
          : [...current, taxonomyValue].slice(-2);
        return { ...prev, creatureTaxonomyAllow: next };
      }
      if (key === 'genreAllow') {
        const current = prev.genreAllow;
        const nextGenres = current.includes(value)
          ? current.filter(item => item !== value)
          : [...current, value].slice(-2);
        return {
          ...prev,
          primaryGenre: nextGenres[0] || '',
          genreAllow: nextGenres,
          secondaryGenres: nextGenres.slice(1, 2)
        };
      }
      const current = key === 'eraAllow' ? prev.eraAllow : prev.realityAllow;
      const maxCount = key === 'eraAllow'
        ? CONCEPT_ERA_AXIS.length
        : key === 'realityAllow'
          ? CONCEPT_REALITY_AXIS.length
          : 2;
      const next = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value].slice(-maxCount);
      return { ...prev, [key]: next };
    });
  };

  const renderThemeAxisSlot = (mode: ThemeAxisPickerMode, label: string, labelEn: string, placeholder: string, placeholderEn: string, values: readonly string[]) => {
    const hasValue = values.length > 0;
    const allValues = mode === 'TIME'
      ? themeAxisOptions.eras
      : mode === 'REALITY'
        ? themeAxisOptions.realities
        : undefined;
    const displayValue = axisSlotText(values, allValues);
    return (
      <span className="inline-flex min-w-0 flex-1 items-center relative">
        <span className="group/tag relative inline-flex min-w-0 max-w-full items-center align-middle">
          <span
            onClick={() => openThemeAxisPicker(mode)}
            className={`mist-labyrinth-hover-token ${hasValue ? 'is-filled' : 'is-empty'} min-w-0 max-w-full cursor-pointer truncate font-serif leading-[22px] transition-all duration-300 hover:z-50 inline-block rounded-sm ${hasValue
              ? `font-bold border-b-2 px-0.5 text-[17px] tracking-tight ${isRetro ? 'text-black hover:bg-black/5 border-[#85411B]' : 'text-white hover:bg-white/10 border-[var(--mist-active-accent)]'}`
              : `font-medium border-b border-dashed text-[15px] ${isRetro ? 'border-[var(--text-main)] text-zinc-500 hover:text-black' : 'border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-500'}`
            }`}
            title={t(lang, '选择' + label, 'Choose ' + labelEn)}
          >
            {hasValue ? displayValue : `${lang === 'EN' ? '[' : '【'}${t(lang, placeholder, placeholderEn)}${lang === 'EN' ? ']' : '】'}`}
          </span>
        </span>
      </span>
    );
  };

  const renderThemeAxisRow = (mode: ThemeAxisPickerMode, label: string, labelEn: string, value: string) => (
    <button
      type="button"
      onClick={() => openThemeAxisPicker(mode)}
      className={`group flex min-h-11 w-full items-center justify-between gap-3 rounded-md px-2 py-1.5 text-left transition-all active:scale-[0.99] ${isRetro ? 'hover:bg-[#85411B]/7' : 'hover:bg-orange-500/8'}`}
      title={t(lang, '选择' + label, 'Choose ' + labelEn)}
    >
      <span className={`shrink-0 text-[11px] font-black uppercase tracking-[0.08em] ${isRetro ? 'text-[#85411B]/72' : 'text-orange-200/62'}`}>{t(lang, label, labelEn)}</span>
      <span className={`min-w-0 flex-1 truncate text-right text-[17px] font-black leading-6 transition-colors ${strongText} ${isRetro ? 'group-hover:text-[#85411B]' : 'group-hover:text-orange-100'}`}>{value}</span>
    </button>
  );

  const renderAxisPickerOption = (selected: boolean, label: string, onClick: () => void) => (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-[3.35rem] items-center justify-between gap-3 rounded-md border px-4 py-3 text-left text-[16px] font-black leading-6 transition-all hover:-translate-y-0.5 active:scale-[0.985] ${selected
        ? (isRetro ? 'border-[#85411B]/58 bg-[#85411B]/14 text-[#5A2B10] shadow-[0_10px_26px_rgba(133,65,27,0.16)]' : 'border-orange-500/55 bg-[#2A1208] text-orange-50 shadow-[0_0_22px_rgba(249,115,22,0.14)]')
        : (isRetro ? 'border-[#85411B]/12 bg-white/36 text-[#6F4A2D]/72 hover:border-[#85411B]/28 hover:bg-[#85411B]/7 hover:text-[#51351F]' : 'border-orange-500/10 bg-[#090807] text-zinc-400 hover:border-orange-500/28 hover:bg-[#15100C] hover:text-zinc-200')
      }`}
      title={label}
    >
      <span className="min-w-0 truncate">{label}</span>
      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all ${selected
        ? (isRetro ? 'bg-[#85411B] text-[#FFF8EC]' : 'bg-orange-500 text-black')
        : (isRetro ? 'bg-[#85411B]/8 text-transparent group-hover:text-[#85411B]/34' : 'bg-orange-500/7 text-transparent group-hover:text-orange-500/35')
      }`}>
        <Check size={12} strokeWidth={3} />
      </span>
    </button>
  );

  const cleanKeywordValues = (values: readonly string[]) => uniqueKeywordValues(values);
  const baseKeywordFilters: Record<KeywordFilterCategory, string[]> = {
    eraTags: cleanKeywordValues(worldAxisState.eraAllow),
    realityTags: cleanKeywordValues(worldAxisState.realityAllow)
  };

  const effectiveKeywordTags: Record<KeywordFilterCategory, string[]> = {
    eraTags: cleanKeywordValues([
      ...baseKeywordFilters.eraTags.filter(value => !removedKeywordTags.eraTags.includes(value)),
      ...addedKeywordTags.eraTags
    ]),
    realityTags: cleanKeywordValues([
      ...baseKeywordFilters.realityTags.filter(value => !removedKeywordTags.realityTags.includes(value)),
      ...addedKeywordTags.realityTags
    ])
  };

  const keywordFilterMeta: Array<{ key: KeywordFilterCategory; label: string; labelEn: string }> = [
    { key: 'eraTags', label: '时间轴', labelEn: 'Era Axis' },
    { key: 'realityTags', label: '现实轴', labelEn: 'Reality Axis' }
  ];

  const selectedKeywordSummary = cleanKeywordValues(
    keywordFilterMeta
      .flatMap(item => effectiveKeywordTags[item.key])
  );

  const toggleKeywordTag = (category: KeywordFilterCategory, value: string) => {
    if (baseKeywordFilters[category].includes(value)) {
      setRemovedKeywordTags(prev => ({
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter(item => item !== value)
          : [...prev[category], value]
      }));
      return;
    }
    setAddedKeywordTags(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const renderKeywordChip = (category: KeywordFilterCategory, value: string) => {
    const isBase = baseKeywordFilters[category].includes(value);
    const removed = removedKeywordTags[category].includes(value);
    const added = addedKeywordTags[category].includes(value);
    const selected = (isBase && !removed) || added;
    return (
      <button
        key={`${category}:${value}`}
        type="button"
        onClick={() => toggleKeywordTag(category, value)}
        className={`rounded-md px-2.5 py-1.5 text-[11px] font-black transition-all ${selected
          ? isBase
            ? (isRetro ? 'bg-[#85411B]/14 text-[#85411B] ring-1 ring-[#85411B]/20' : 'bg-orange-500/13 text-orange-100 ring-1 ring-orange-500/24')
            : (isRetro ? 'bg-[#5A2B10] text-[#FFF8EC]' : 'bg-[#2A1208] text-orange-100 ring-1 ring-orange-500/35')
          : (isRetro ? 'bg-[#85411B]/5 text-[#6F4A2D]/42 hover:bg-[#85411B]/9 hover:text-[#51351F]' : 'bg-zinc-950/42 text-zinc-600 hover:bg-orange-500/8 hover:text-zinc-300')
        }`}
        title={selected ? t(lang, '点击移除筛选标签', 'Remove filter tag') : t(lang, '点击加入筛选标签', 'Add filter tag')}
      >
        {keywordTagLabel(value)}
      </button>
    );
  };

  const renderKeywordFilterPanel = () => {
    const selectedCount = keywordFilterMeta.reduce((sum, item) => (
      sum + effectiveKeywordTags[item.key].length
    ), 0);
    return (
      <section className={`rounded-lg border ${isRetro ? 'border-[#85411B]/14 bg-white/24' : 'border-orange-500/10 bg-zinc-950/56'}`}>
        <button
          type="button"
          onClick={() => setKeywordFilterExpanded(prev => !prev)}
          className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition-colors ${isRetro ? 'hover:bg-[#85411B]/5' : 'hover:bg-orange-500/6'}`}
        >
          <div className="min-w-0">
            <div className={`flex items-center gap-2 text-[13px] font-black uppercase tracking-[0.08em] ${strongText}`}>
              <SlidersHorizontal size={14} className={accentText} />
              <span>{t(lang, '硬筛选器', 'Hard Filter')}</span>
              <span className={`rounded px-1.5 py-0.5 text-[10px] ${isRetro ? 'bg-[#85411B]/9 text-[#85411B]' : 'bg-orange-500/10 text-orange-200/78'}`}>{selectedCount}</span>
            </div>
          </div>
          <Plus size={15} className={`shrink-0 transition-transform ${keywordFilterExpanded ? 'rotate-45' : ''} ${accentText}`} />
        </button>
        <div className="px-3 pb-3">
          <div className={`space-y-1.5 rounded-md px-2.5 py-2 text-[12px] font-black leading-5 ${isRetro ? 'bg-[#85411B]/6 text-[#51351F]' : 'bg-black/28 text-zinc-200'}`}>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className={accentText}>{t(lang, '标签', 'Tags')}:</span>
              {selectedKeywordSummary.length > 0 ? (
                selectedKeywordSummary.slice(0, 24).map(value => (
                  <span key={`${value}:summary`} className={`${isRetro ? 'text-[#5A2B10]/82' : 'text-zinc-200/88'}`}>
                    {keywordTagLabel(value)}
                  </span>
                ))
              ) : (
                <span className={mutedText}>{t(lang, '无', 'None')}</span>
              )}
              {selectedKeywordSummary.length > 24 ? (
                <span className={mutedText}>+{selectedKeywordSummary.length - 24}</span>
              ) : null}
            </div>
          </div>
          {keywordFilterExpanded ? (
            <div className="mt-3 grid gap-3">
              {keywordFilterMeta.map(item => {
                const base = baseKeywordFilters[item.key];
                const added = addedKeywordTags[item.key];
                return (
                  <div key={item.key}>
                    <div className={`mb-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${mutedText}`}>{t(lang, item.label, item.labelEn)}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {base.map(value => renderKeywordChip(item.key, value))}
                      {added.map(value => renderKeywordChip(item.key, value))}
                      {base.length === 0 && added.length === 0 ? (
                        <span className={`px-1 py-1.5 text-[11px] font-bold ${mutedText}`}>
                          {t(lang, '无已选标签', 'No selected tags')}
                        </span>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </section>
    );
  };

  const renderThemeAxisPickerPanel = () => {
    if (!activeThemeAxisPicker) return null;
    const pickerDraft = draftWorldAxisState || worldAxisState;
    const pickerConfig = {
      TYPE: {
        title: t(lang, '选择主题', 'Choose Theme'),
        hint: t(lang, '主题只决定画面方向和编译口吻，不直接硬筛词库；最多选 2 个，第 1 个为主，第 2 个为次。', 'Theme only guides image direction and compile tone; it does not hard-filter the lexicon. Choose up to two, #1 primary and #2 secondary.'),
        content: (
          <div>
            <div className={`mb-2 text-[13px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '主题（最多 2 个）', 'Theme')}</div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {themeAxisOptions.genres.map(value => {
                const order = pickerDraft.genreAllow.indexOf(value) + 1;
                return renderAxisPickerOption(
                  order > 0,
                  order > 0 ? `${themeAxisLabel(value)}  ${order}` : themeAxisLabel(value),
                  () => setDraftWorldAxisList('genreAllow', value)
                );
              })}
            </div>
          </div>
        )
      },
      TIME: {
        title: t(lang, '选择时间', 'Choose Time'),
        hint: t(lang, '时间轴决定词库的时代合法性。', 'The time axis controls era legality for the pool.'),
        content: (
          <div>
            <div className={`mb-2 text-[13px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '时间轴（可多选）', 'Time Axis')}</div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {themeAxisOptions.eras.map(value => renderAxisPickerOption(
              pickerDraft.eraAllow.includes(value),
              themeAxisLabel(value),
              () => setDraftWorldAxisList('eraAllow', value)
            ))}
            </div>
          </div>
        )
      },
      REALITY: {
        title: t(lang, '选择现实轴', 'Choose Reality Axis'),
        hint: t(lang, '现实轴控制词库是写实、轻度异常，还是允许强超现实。', 'The reality axis controls whether the pool stays realist, mildly anomalous, or strongly surreal.'),
        content: (
          <div>
            <div className={`mb-2 text-[13px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '现实轴（可多选）', 'Reality Axis')}</div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {themeAxisOptions.realities.map(value => renderAxisPickerOption(
              pickerDraft.realityAllow.includes(value),
              themeAxisLabel(value),
              () => setDraftWorldAxisList('realityAllow', value)
            ))}
            </div>
          </div>
        )
      },
      SPECIES: {
        title: t(lang, '选择物种', 'Choose Species'),
        hint: t(lang, '物种轴只作用于异种词库，用来筛出哺乳、龙类、昆虫、机械、深渊等异种结构方向。', 'The species axis only affects creature lexicons, filtering mammal, draconic, insectoid, machine, eldritch, and other creature directions.'),
        content: (
          <div>
            <div className={`mb-2 text-[13px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '物种轴（最多 2 个）', 'Species Axis')}</div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {themeAxisOptions.species.map(value => {
                const order = pickerDraft.creatureTaxonomyAllow.indexOf(value as CreatureTaxonomyTag) + 1;
                return renderAxisPickerOption(
                  order > 0,
                  order > 0 ? `${themeAxisLabel(value)}  ${order}` : themeAxisLabel(value),
                  () => setDraftWorldAxisList('creatureTaxonomyAllow', value)
                );
              })}
            </div>
          </div>
        )
      }
    }[activeThemeAxisPicker];

    return (
      <div className="fixed inset-0 z-[220] bg-black/75 backdrop-blur-[4px]" onMouseDown={closeThemeAxisPicker}>
        <div
          className={`fixed left-1/2 top-1/2 isolate flex max-h-[min(40rem,calc(100vh-2rem))] w-[min(42rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl shadow-2xl ${isRetro ? 'bg-[#F8F1E7] shadow-[#2A1208]/18 ring-1 ring-[#85411B]/24' : 'bg-[#050505] shadow-black/70 ring-1 ring-orange-500/24'}`}
          onMouseDown={event => event.stopPropagation()}
        >
          <div className={`shrink-0 px-5 py-4 ${isRetro ? 'bg-[#F8F1E7]' : 'bg-[#080604]'}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className={`flex items-center gap-2 text-[19px] font-black ${strongText}`}>
                  <Fingerprint size={16} className={accentText} />
                  <span>{pickerConfig.title}</span>
                </div>
                <div className={`mt-1.5 text-[13px] font-semibold leading-5 ${isRetro ? 'text-[#6F4A2D]/72' : 'text-zinc-400'}`}>
                  {pickerConfig.hint}
                </div>
              </div>
              <button
                type="button"
                onClick={closeThemeAxisPicker}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-all ${isRetro ? 'text-[#85411B]/70 hover:bg-[#85411B]/8' : 'text-orange-200/60 hover:bg-orange-500/10 hover:text-orange-200'}`}
                title={t(lang, '关闭', 'Close')}
              >
                <X size={14} />
              </button>
            </div>
          </div>
          <div className={`min-h-0 flex-1 overflow-y-auto px-5 pb-5 custom-scrollbar ${isRetro ? 'bg-[#F6EDE1]' : 'bg-[#050505]'}`}>
            {pickerConfig.content}
          </div>
          <div className={`shrink-0 px-5 py-4 ${isRetro ? 'bg-[#F8F1E7]' : 'bg-[#080604]'}`}>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={commitThemeAxisPicker}
                className={`flex h-9 shrink-0 items-center gap-1.5 rounded-md px-4 text-[12px] font-black transition-all hover:scale-[1.015] ${isRetro ? 'bg-[#85411B]/10 text-[#85411B] hover:bg-[#85411B]/14' : 'bg-orange-500/14 text-orange-100 hover:bg-orange-500/20'}`}
                title={t(lang, '完成选择', 'Done')}
              >
                <Check size={14} />
                <span>{t(lang, '完成', 'Done')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderThemeCorePanel = () => {
    const actionButtonBase = 'group flex h-6 w-6 items-center justify-center rounded border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40';
    const actionButtonIdle = isRetro
      ? 'border-transparent bg-transparent text-[#85411B]/58 hover:border-[#85411B]/36 hover:bg-[#85411B]/8 hover:text-[#85411B]'
      : 'border-transparent bg-zinc-900/45 text-zinc-500 hover:border-[var(--mist-active-accent)]/45 hover:bg-[var(--mist-active-accent)]/10 hover:text-[var(--mist-active-accent)]';
    const actionButtonLocked = isRetro
      ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]'
      : 'border-orange-400/55 bg-orange-400/10 text-orange-300';
    const themeLocked = isSectionLocked('THEME');
    const themeExpanded = isThemeCoreExpanded;
    const themeAxisCount = worldAxisState.creatureTaxonomyAllow.length + worldAxisState.genreAllow.length + effectiveKeywordTags.eraTags.length + effectiveKeywordTags.realityTags.length;
    const themeFilterSummary = [
      subjectMode === 'CREATURE' && worldAxisState.creatureTaxonomyAllow.length > 0 ? `${t(lang, '物种', 'Species')} ${axisSummaryText(worldAxisState.creatureTaxonomyAllow, 2)}` : '',
      worldAxisState.genreAllow.length > 0 ? `${t(lang, '类别', 'Category')} ${axisSummaryText(worldAxisState.genreAllow, 2)}` : '',
      effectiveKeywordTags.eraTags.length > 0 ? `${t(lang, '时间', 'Time')} ${axisSummaryText(effectiveKeywordTags.eraTags, 2, themeAxisOptions.eras)}` : '',
      effectiveKeywordTags.realityTags.length > 0 ? `${t(lang, '现实', 'Reality')} ${axisSummaryText(effectiveKeywordTags.realityTags, 1, themeAxisOptions.realities)}` : ''
    ].filter(Boolean);
    const renderThemeAxisCompactPicker = (mode: ThemeAxisPickerMode, label: string, labelEn: string, values: readonly string[]) => {
      const hasValue = values.length > 0;
      const allValues = mode === 'SPECIES'
        ? themeAxisOptions.species
        : mode === 'TIME'
        ? themeAxisOptions.eras
        : mode === 'REALITY'
          ? themeAxisOptions.realities
          : undefined;
      const axisButtonStyle = {
        borderColor: hasValue
          ? isRetro ? 'rgba(133, 65, 27, 0.55)' : 'rgba(249, 115, 22, 0.62)'
          : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(255, 255, 255, 0.06)',
        backgroundColor: hasValue
          ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
          : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.82)'
      };
      return (
        <button
          type="button"
          disabled={themeLocked}
          onClick={() => openThemeAxisPicker(mode)}
          className={`min-w-0 rounded border px-2.5 py-1.5 text-left transition-all active:scale-[0.985] ${hasValue ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/82 hover:bg-[#85411B]/6' : 'text-zinc-300 hover:border-white/[0.12] hover:bg-white/[0.035]')} disabled:cursor-not-allowed disabled:opacity-55`}
          style={axisButtonStyle}
          title={t(lang, '选择' + label, 'Choose ' + labelEn)}
        >
          <span className="block min-w-0 truncate text-[12px] font-black leading-5">{t(lang, label, labelEn)}</span>
          <span className={`mt-0.5 block min-w-0 truncate text-[11px] font-medium leading-4 ${hasValue ? '' : mutedText}`}>
            {hasValue ? axisSlotText(values, allValues) : t(lang, '未选', 'None')}
          </span>
        </button>
      );
    };
    return (
      <section className={`mist-aesthetic-module mist-concept-source-module rounded-lg border shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 ${softPanelClass}`}>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsThemeCoreExpanded(prev => !prev)}
          onKeyDown={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setIsThemeCoreExpanded(prev => !prev);
            }
          }}
          className={`mist-aesthetic-module-header grid min-h-[2.45rem] cursor-pointer grid-cols-[minmax(0,1fr)_minmax(220px,auto)_auto] items-center gap-3 border-b px-3 py-2 ${isRetro ? 'border-[#85411B]/12' : 'border-white/[0.06]'}`}
        >
          <div className={`${paramsModuleTitleClass} min-w-0`}>
            <Target size={16} className={accentText} />
            <span className="truncate">{t(lang, '核心主题', 'Core Theme')}</span>
            <span className={paramsModuleCountClass}>
              {themeAxisCount}
            </span>
          </div>
          <div className="flex min-w-0 items-center justify-end gap-1.5" onClick={event => event.stopPropagation()}>
            <div className="mist-aesthetic-action-buttons flex items-center gap-1 rounded-md border p-0.5">
              <button
                type="button"
                disabled={themeLocked}
                onClick={() => openThemeAxisPicker('TYPE')}
                className={`flex h-6 max-w-[9rem] items-center gap-1 rounded border px-1.5 text-[10px] font-black tracking-[0.02em] transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isRetro ? 'border-[#85411B]/18 bg-transparent text-[#85411B]/75 hover:bg-[#85411B]/8' : 'border-orange-500/18 bg-zinc-950/70 text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8'}`}
                title={t(lang, '选择核心主题', 'Choose core theme')}
              >
                <SlidersHorizontal size={11} className="shrink-0" />
                <span className="min-w-0 truncate">{worldAxisState.genreAllow.length > 0 ? axisSummaryText(worldAxisState.genreAllow, 1) : t(lang, '选择', 'Choose')}</span>
              </button>
              <button
                type="button"
                disabled={themeLocked}
                onClick={() => {
                  triggerActionMotion('THEME:random');
                  startTransition(randomThemeAxis);
                }}
                className={`mist-concept-action-random ${activeActionMotion === 'THEME:random' ? 'is-motioning' : ''} ${actionButtonBase} ${actionButtonIdle}`}
                title={t(lang, '随机画面主题', 'Randomize Image Theme')}
              >
                <Dice5 size={12} className="transition-transform duration-500 group-hover:rotate-90" />
              </button>
              <button
                type="button"
                disabled={themeLocked}
                onClick={() => {
                  resetThemeAxis();
                  triggerActionMotion('THEME:clear');
                }}
                className={`mist-concept-action-clear ${activeActionMotion === 'THEME:clear' ? 'is-motioning' : ''} ${actionButtonBase} ${actionButtonIdle}`}
                title={t(lang, '重置画面主题', 'Reset Image Theme')}
              >
                <RefreshCcw size={12} className="transition-transform duration-500 group-hover:-rotate-90" />
              </button>
              <button
                type="button"
                onClick={() => onToggleLock('THEME')}
                className={`mist-concept-action-lock ${actionButtonBase} ${themeLocked ? actionButtonLocked : actionButtonIdle}`}
                title={themeLocked ? t(lang, '解锁核心主题', 'Unlock Core Theme') : t(lang, '锁定核心主题', 'Lock Core Theme')}
              >
                {themeLocked ? <Lock size={12} /> : <Unlock size={12} />}
              </button>
              <button
                type="button"
                onClick={async () => {
                  const summary = themeFilterSummary.length > 0 ? themeFilterSummary.join(' / ') : t(lang, '未启用', 'Off');
                  try {
                    await navigator.clipboard.writeText(`${t(lang, '核心主题', 'Core Theme')}: ${summary}`);
                    setCopiedSectionId('THEME');
                    window.setTimeout(() => setCopiedSectionId(null), 1600);
                  } catch {
                    setCopiedSectionId(null);
                  }
                }}
                className={`mist-concept-action-copy ${actionButtonBase} ${copiedSectionId === 'THEME' ? actionButtonLocked : actionButtonIdle}`}
                title={t(lang, '复制核心主题', 'Copy Core Theme')}
              >
                {copiedSectionId === 'THEME' ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
          </div>
          <div onClick={event => event.stopPropagation()}>
            {renderParamExpandButton(
              themeExpanded,
              () => setIsThemeCoreExpanded(prev => !prev),
              t(lang, '收起', 'Collapse'),
              t(lang, '展开', 'Expand')
            )}
          </div>
        </div>
        <div className="space-y-2 p-3">
          <div className={`grid grid-cols-1 gap-1.5 ${subjectMode === 'CREATURE' ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
            {subjectMode === 'CREATURE' ? renderThemeAxisCompactPicker('SPECIES', '物种', 'Species', worldAxisState.creatureTaxonomyAllow) : null}
            {renderThemeAxisCompactPicker('TYPE', '类别', 'Category', worldAxisState.genreAllow)}
            {renderThemeAxisCompactPicker('TIME', '时代', 'Era', worldAxisState.eraAllow)}
            {renderThemeAxisCompactPicker('REALITY', '现实', 'Reality', worldAxisState.realityAllow)}
          </div>
          {themeExpanded ? (
            <div className={`rounded-md px-2.5 py-2 text-[11px] font-black leading-5 ${isRetro ? 'bg-[#85411B]/6 text-[#6F4A2D]/78' : 'bg-black/24 text-zinc-400'}`}>
              <span className={accentText}>{t(lang, '词库筛选', 'Lexicon Filter')}:</span>{' '}
              {themeFilterSummary.length > 0 ? (
                <span className={strongText}>{themeFilterSummary.join(' / ')}</span>
              ) : (
                <span className={mutedText}>{t(lang, '未启用', 'Off')}</span>
              )}
            </div>
          ) : null}
        </div>
      </section>
    );
  };

  const renderFieldPresetAxisPreviewPanel = () => {
    const fieldPresetCategory = scopedLibraryMap.get('cd_field_preset');
    const items = (fieldPresetCategory?.items || []).filter(isLibraryItemVisible);
    const activeCategoryTags = uniqueConceptTagIds(worldAxisState.genreAllow);
    const activeEraTags = effectiveKeywordTags.eraTags;
    const activeRealityTags = effectiveKeywordTags.realityTags;
    const filterActive = activeCategoryTags.length > 0 || activeEraTags.length > 0 || activeRealityTags.length > 0;
    const matchRows = items.map(item => ({
      item,
      match: getConceptSimpleAxisMatch(item, {
        categoryTags: activeCategoryTags,
        eraTags: activeEraTags,
        realityTags: activeRealityTags
      })
    }));
    const categoryStrongRows = matchRows.filter(row => row.match.categoryFitLevel === 'strong');
    const categoryUsableRows = matchRows.filter(row => row.match.categoryFitLevel === 'usable');
    const categoryFusionRows = matchRows.filter(row => row.match.categoryFitLevel === 'fusion');
    const categoryWeakRows = matchRows.filter(row => row.match.categoryFitLevel === 'weak');
    const categoryExcludeRows = matchRows.filter(row => row.match.categoryFitLevel === 'exclude');
    const eraHitRows = activeEraTags.length > 0
      ? matchRows.filter(row => row.match.matchedEra.length > 0)
      : [];
    const eraUniversalRows = activeEraTags.length > 0
      ? matchRows.filter(row => (row.item as any).eraMode === 'universal' || row.match.itemEraTags.length === 0)
      : [];
    const eraMissRows = activeEraTags.length > 0
      ? matchRows.filter(row => row.match.matchedEra.length === 0 && (row.item as any).eraMode !== 'universal' && row.match.itemEraTags.length > 0)
      : [];
    const realityHitRows = activeRealityTags.length > 0
      ? matchRows.filter(row => row.match.matchedReality.length > 0)
      : [];
    const realitySafeRows = activeRealityTags.length > 0
      ? matchRows.filter(row => row.match.matchedReality.length === 0 && row.match.realityScore >= 0)
      : [];
    const realityMissRows = activeRealityTags.length > 0
      ? matchRows.filter(row => row.match.realityScore < 0)
      : [];
    const poolRows = matchRows.filter(row => row.match.affinityLevel === 'strong' || row.match.affinityLevel === 'usable' || row.match.affinityLevel === 'neutral');
    const blockedRows = matchRows.filter(row => row.match.affinityLevel === 'conflict');
    const recommendedRows = matchRows
      .filter(row => row.match.categoryFitLevel === 'strong' || row.match.categoryFitLevel === 'usable')
      .sort((a, b) => b.match.score - a.match.score)
      .slice(0, 8);
    const fusionRows = matchRows
      .filter(row => row.match.categoryFitLevel === 'fusion')
      .sort((a, b) => b.match.score - a.match.score)
      .slice(0, 6);
    const renderCount = (label: string, value: number, tone: 'strong' | 'usable' | 'neutral' | 'weak' | 'conflict') => {
      const toneClass = {
        strong: isRetro ? 'text-[#85411B] bg-[#85411B]/10' : 'text-orange-100 bg-orange-500/14',
        usable: isRetro ? 'text-[#5A2B10] bg-[#85411B]/7' : 'text-zinc-100 bg-white/[0.055]',
        neutral: isRetro ? 'text-[#6F4A2D]/70 bg-[#85411B]/5' : 'text-zinc-400 bg-white/[0.03]',
        weak: isRetro ? 'text-[#8A6A4A]/62 bg-[#85411B]/4' : 'text-zinc-500 bg-zinc-950/45',
        conflict: isRetro ? 'text-red-800/70 bg-red-950/5' : 'text-red-300/70 bg-red-950/18'
      }[tone];
      return (
        <div className={`rounded-md px-2 py-1.5 ${toneClass}`}>
          <div className="text-[15px] font-black leading-5">{value}</div>
          <div className="text-[10px] font-black uppercase tracking-[0.08em] opacity-70">{label}</div>
        </div>
      );
    };
    const renderAxisIdle = () => (
      <div className={`rounded-md px-2 py-2 text-[12px] font-black leading-5 ${isRetro ? 'bg-[#85411B]/5 text-[#6F4A2D]/58' : 'bg-white/[0.025] text-zinc-500'}`}>
        {t(lang, '未启用，选择左侧对应轴后显示命中 / 通用 / 不符。', 'Off. Choose the matching left axis to show hit / universal / miss.')}
      </div>
    );
    const renderAxisLine = (label: string, children: React.ReactNode) => (
      <div className={`rounded-md px-2.5 py-2 ${isRetro ? 'bg-[#85411B]/5' : 'bg-black/22'}`}>
        <div className={`mb-1 text-[10px] font-black uppercase tracking-[0.12em] ${mutedText}`}>{label}</div>
        {children}
      </div>
    );
    const renderActiveAxis = (label: string, values: readonly string[], allValues?: readonly string[]) => (
      <span className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 ${isRetro ? 'bg-[#85411B]/7 text-[#5A2B10]' : 'bg-orange-500/9 text-orange-100/80'}`}>
        <span className={mutedText}>{label}</span>
        <span>{values.length > 0 ? axisSummaryText(values, 2, allValues) : t(lang, '未选', 'None')}</span>
      </span>
    );
    const renderMiniRow = (row: typeof matchRows[number]) => {
      const fitLabel = row.match.categoryFitLevel === 'strong'
        ? t(lang, '强', 'Strong')
        : row.match.categoryFitLevel === 'usable'
          ? t(lang, '可用', 'Usable')
          : row.match.categoryFitLevel === 'fusion'
            ? t(lang, '融合', 'Fusion')
            : row.match.categoryFitLevel === 'weak'
              ? t(lang, '弱', 'Weak')
              : row.match.categoryFitLevel === 'exclude'
                ? t(lang, '排除', 'Exclude')
                : t(lang, '通用', 'Universal');
      return (
        <div key={row.item.id} className={`flex items-center justify-between gap-2 rounded px-2 py-1.5 ${isRetro ? 'bg-[#85411B]/5' : 'bg-black/24'}`}>
          <span className={`min-w-0 truncate text-[12px] font-black ${strongText}`}>{row.item.name}</span>
          <span className={`shrink-0 rounded px-2 py-0.5 text-[10px] font-black ${isRetro ? 'bg-[#85411B]/8 text-[#85411B]' : 'bg-orange-500/10 text-orange-200/80'}`}>
            {t(lang, '类型', 'Type')}: {fitLabel} / {t(lang, '分', 'Score')}: {row.match.score}
          </span>
        </div>
      );
    };
    return (
      <section className={`rounded-lg border p-3 ${isRetro ? 'border-[#85411B]/14 bg-white/24' : 'border-orange-500/10 bg-zinc-950/58'}`}>
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className={`flex min-w-0 items-center gap-2 text-[13px] font-black uppercase tracking-[0.08em] ${strongText}`}>
            <Layers3 size={14} className={accentText} />
            <span className="truncate">{t(lang, '场域预设三轴', 'Field Preset Axes')}</span>
          </div>
          <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-black ${isRetro ? 'bg-[#85411B]/8 text-[#85411B]' : 'bg-orange-500/10 text-orange-200/78'}`}>
            {items.length}
          </span>
        </div>
        <div className={`mb-2 flex flex-wrap gap-1.5 text-[10px] font-black leading-4 ${isRetro ? 'text-[#6F4A2D]/78' : 'text-zinc-400'}`}>
          {renderActiveAxis(t(lang, '类型', 'Type'), activeCategoryTags)}
          {renderActiveAxis(t(lang, '时间', 'Era'), activeEraTags, themeAxisOptions.eras)}
          {renderActiveAxis(t(lang, '现实', 'Reality'), activeRealityTags, themeAxisOptions.realities)}
        </div>
        <div className="grid gap-1.5">
          {renderAxisLine(t(lang, '类型 categoryFit', 'Type categoryFit'), (
            <div className="grid grid-cols-5 gap-1.5">
              {renderCount(t(lang, '强', 'Strong'), categoryStrongRows.length, 'strong')}
              {renderCount(t(lang, '可用', 'Usable'), categoryUsableRows.length, 'usable')}
              {renderCount(t(lang, '融合', 'Fusion'), categoryFusionRows.length, 'neutral')}
              {renderCount(t(lang, '弱', 'Weak'), categoryWeakRows.length, 'weak')}
              {renderCount(t(lang, '排除', 'Exclude'), categoryExcludeRows.length, 'conflict')}
            </div>
          ))}
          {renderAxisLine(t(lang, '时间 eras', 'Era eras'), (
            activeEraTags.length > 0 ? (
              <div className="grid grid-cols-3 gap-1.5">
                {renderCount(t(lang, '命中', 'Hit'), eraHitRows.length, 'strong')}
                {renderCount(t(lang, '通用', 'Universal'), eraUniversalRows.length, 'usable')}
                {renderCount(t(lang, '不符', 'Miss'), eraMissRows.length, 'weak')}
              </div>
            ) : renderAxisIdle()
          ))}
          {renderAxisLine(t(lang, '现实 realityTags', 'Reality realityTags'), (
            activeRealityTags.length > 0 ? (
              <div className="grid grid-cols-3 gap-1.5">
                {renderCount(t(lang, '命中', 'Hit'), realityHitRows.length, 'strong')}
                {renderCount(t(lang, '可容纳', 'Allowed'), realitySafeRows.length, 'usable')}
                {renderCount(t(lang, '不符', 'Miss'), realityMissRows.length, 'conflict')}
              </div>
            ) : renderAxisIdle()
          ))}
        </div>
        <div className={`mt-2 grid grid-cols-3 gap-1.5 rounded-md p-1.5 ${isRetro ? 'bg-[#85411B]/5' : 'bg-black/20'}`}>
          {renderCount(t(lang, '入池', 'Pool'), poolRows.length, 'strong')}
          {renderCount(t(lang, '候选', 'Candidate'), Math.max(0, matchRows.length - blockedRows.length), 'usable')}
          {renderCount(t(lang, '排除', 'Blocked'), blockedRows.length, 'conflict')}
        </div>
        <div className={`mt-2 rounded-md px-2 py-1.5 text-[11px] font-bold leading-4 ${isRetro ? 'bg-[#85411B]/5 text-[#6F4A2D]/76' : 'bg-black/20 text-zinc-400'}`}>
          {filterActive
            ? t(lang, '上方数字实时读取左侧三轴；类型只看 categoryFit，时间只看 eras，现实只看 realityTags/ontologyLevel。', 'Numbers read the left axes live: type uses categoryFit, era uses eras, reality uses realityTags/ontologyLevel.')
            : t(lang, '未选择三轴。先点上方类型、时间或现实，就能看到场域预设如何变化。', 'No axes selected. Choose type, era, or reality above to see field preset changes.')}
        </div>
        {recommendedRows.length > 0 ? (
          <div className="mt-2 space-y-1">
            <div className={`text-[10px] font-black uppercase tracking-[0.12em] ${mutedText}`}>{t(lang, '推荐样例', 'Recommended')}</div>
            {recommendedRows.map(renderMiniRow)}
          </div>
        ) : null}
        {fusionRows.length > 0 ? (
          <div className="mt-2 space-y-1">
            <div className={`text-[10px] font-black uppercase tracking-[0.12em] ${mutedText}`}>{t(lang, '融合候选', 'Fusion')}</div>
            {fusionRows.map(renderMiniRow)}
          </div>
        ) : null}
      </section>
    );
  };

  const toggleLexiconAxisFilterLevel = <T extends keyof LexiconAxisFilterState>(key: T, value: LexiconAxisFilterState[T][number]) => {
    setLexiconAxisFilterState(prev => {
      const current = prev[key] as string[];
      const next = current.includes(String(value))
        ? current.filter(item => item !== String(value))
        : [...current, String(value)];
      return { ...prev, [key]: next } as LexiconAxisFilterState;
    });
  };

  const resetLexiconAxisFilter = () => {
    resetThemeAxis();
    setLexiconAxisFilterState(DEFAULT_LEXICON_AXIS_FILTER_STATE);
  };

  const setLexiconAxisFilterMode = (mode: LexiconAxisFilterMode) => {
    setLexiconAxisFilterState(prev => ({ ...prev, mode }));
  };

  const setLexiconUniversalPolicy = (universalPolicy: LexiconUniversalPolicy) => {
    setLexiconAxisFilterState(prev => ({ ...prev, universalPolicy }));
  };

  const moveLexiconAxisOrder = (axisKey: LexiconAxisKey, direction: -1 | 1) => {
    setLexiconAxisFilterState(prev => {
      const order = [...prev.order];
      const index = order.indexOf(axisKey);
      const nextIndex = index + direction;
      if (index < 0 || nextIndex < 0 || nextIndex >= order.length) return prev;
      [order[index], order[nextIndex]] = [order[nextIndex], order[index]];
      return { ...prev, order };
    });
  };

  const lexiconAxisKeyLabel = (axisKey: LexiconAxisKey) => ({
    species: t(lang, '物种', 'Species'),
    category: t(lang, '类别', 'Category'),
    era: t(lang, '时间', 'Era'),
    reality: t(lang, '现实', 'Reality')
  }[axisKey]);

  const lexiconFilterModes: Array<{ id: LexiconAxisFilterMode; label: string; labelEn: string; desc: string; descEn: string }> = [
    { id: 'INTERSECTION', label: '严格交集', labelEn: 'Strict', desc: '全部启用轴都符合', descEn: 'All active axes must pass' },
    { id: 'UNION', label: '并联扩展', labelEn: 'Union', desc: '任意一轴符合即进入', descEn: 'Any active axis can pass' },
    { id: 'LAYERED', label: '层级筛选', labelEn: 'Layered', desc: '按顺序逐层收窄', descEn: 'Narrow by ordered layers' },
    { id: 'SOFT_SORT', label: '软排序', labelEn: 'Soft Sort', desc: '不隐藏，只排序', descEn: 'Sort only, do not hide' }
  ];

  const renderLexiconFilterChoice = <T extends keyof LexiconAxisFilterState>(
    key: T,
    value: LexiconAxisFilterState[T][number],
    label: string,
    labelEn: string,
    desc: string,
    descEn: string
  ) => {
    const selected = (lexiconAxisFilterState[key] as string[]).includes(String(value));
    return (
      <button
        type="button"
        onClick={() => toggleLexiconAxisFilterLevel(key, value)}
        className={`mist-concept-source-mode-button flex h-8 shrink-0 items-center rounded border px-3 text-[11px] font-black uppercase tracking-[0.06em] transition-all ${selected ? 'is-active' : ''}`}
        title={t(lang, desc, descEn)}
      >
        {t(lang, label, labelEn)}
      </button>
    );
  };

  const renderLexiconCompactModeButton = (mode: typeof lexiconFilterModes[number]) => {
    const selected = lexiconAxisFilterState.mode === mode.id;
    return (
      <button
        key={mode.id}
        type="button"
        onClick={() => setLexiconAxisFilterMode(mode.id)}
        className={`mist-concept-source-mode-button flex h-8 shrink-0 items-center rounded border px-3 text-[11px] font-black uppercase tracking-[0.06em] transition-all ${selected ? 'is-active' : ''}`}
        title={t(lang, mode.desc, mode.descEn)}
      >
        {t(lang, mode.label, mode.labelEn)}
      </button>
    );
  };

  const renderLexiconUniversalChoice = (
    value: LexiconUniversalPolicy,
    label: string,
    labelEn: string,
    desc: string,
    descEn: string
  ) => {
    const selected = lexiconAxisFilterState.universalPolicy === value;
    return (
      <button
        type="button"
        onClick={() => setLexiconUniversalPolicy(value)}
        className={`mist-concept-source-mode-button flex h-8 shrink-0 items-center rounded border px-3 text-[11px] font-black uppercase tracking-[0.06em] transition-all ${selected ? 'is-active' : ''}`}
        title={t(lang, desc, descEn)}
      >
        {t(lang, label, labelEn)}
      </button>
    );
  };

  const renderLexiconAxisFilterPanel = (options?: { hideAuditButton?: boolean }) => {
    const actionButtonBase = 'group flex h-6 w-6 items-center justify-center rounded border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40';
    const actionButtonIdle = isRetro
      ? 'border-[#85411B]/16 bg-transparent text-[#85411B]/62 hover:border-[#85411B]/34 hover:bg-[#85411B]/8 hover:text-[#85411B]'
      : 'border-white/[0.06] bg-zinc-950/55 text-zinc-500 hover:border-orange-500/28 hover:bg-orange-500/8 hover:text-orange-200/86';
    const actionButtonActive = isRetro
      ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]'
      : 'border-[var(--mist-active-accent)]/55 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]';
    const rowLabelClass = `text-[11px] font-black uppercase tracking-[0.12em] ${isRetro ? 'text-[#6F4A2D]/78' : 'text-zinc-400'} mb-1.5`;
    const isCreatureThemePage = subjectMode === 'CREATURE';
    const lexiconAxisCount = (isCreatureThemePage ? worldAxisState.creatureTaxonomyAllow.length : 0) + worldAxisState.genreAllow.length + effectiveKeywordTags.eraTags.length + effectiveKeywordTags.realityTags.length;
    const visibleLexiconAxisOrder = lexiconAxisFilterState.order.filter(axisKey => isCreatureThemePage || axisKey !== 'species');
    const renderRuleLine = (label: string, labelEn: string, controls: React.ReactNode) => (
      <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className={`shrink-0 text-[13px] font-black uppercase tracking-[0.08em] ${isRetro ? 'text-[#6F4A2D]/86' : 'text-zinc-300'}`}>{t(lang, label, labelEn)}</span>
        <div className="mist-concept-source-mode-toggle flex min-w-0 flex-wrap items-center gap-1 rounded-md border p-0.5">
          {controls}
        </div>
      </div>
    );
    const renderCoreThemeAxisSlot = (
      mode: ThemeAxisPickerMode,
      label: string,
      labelEn: string,
      placeholder: string,
      placeholderEn: string,
      values: readonly string[]
    ) => {
      const hasValue = values.length > 0;
      const allValues = mode === 'SPECIES'
        ? themeAxisOptions.species
        : mode === 'TIME'
        ? themeAxisOptions.eras
        : mode === 'REALITY'
          ? themeAxisOptions.realities
          : undefined;
      return (
        <button
          type="button"
          onClick={() => openThemeAxisPicker(mode)}
          className={`group min-w-0 text-left transition-all duration-200 active:scale-[0.985] ${isRetro ? 'hover:bg-[#85411B]/5' : 'hover:bg-orange-500/7'} rounded-sm px-1.5 py-1`}
          title={t(lang, '选择' + label, 'Choose ' + labelEn)}
        >
          <span className={`mb-1 block text-[10px] font-black uppercase tracking-[0.14em] transition-colors ${hasValue ? accentText : mutedText}`}>
            {t(lang, label, labelEn)}
          </span>
          <span
            className={`inline-block max-w-full truncate border-b-2 pb-1 font-serif text-[20px] font-black leading-7 transition-all duration-200 md:text-[22px] ${
              hasValue
                ? isRetro
                  ? 'border-[#85411B]/72 text-[#1A120A] group-hover:border-[#85411B] group-hover:text-[#85411B]'
                  : 'border-white/55 text-zinc-50 group-hover:border-orange-400 group-hover:text-orange-100'
                : isRetro
                  ? 'border-[#85411B]/22 text-[#6F4A2D]/42 group-hover:border-[#85411B]/48 group-hover:text-[#6F4A2D]/76'
                  : 'border-white/18 text-zinc-600 group-hover:border-orange-500/45 group-hover:text-zinc-300'
            }`}
          >
            {hasValue ? axisSlotText(values, allValues) : t(lang, placeholder, placeholderEn)}
          </span>
        </button>
      );
    };

    return (
      <section className={`mist-aesthetic-module mist-concept-source-module rounded-lg border transition-all duration-300 ${softPanelClass}`}>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsLexiconFilterExpanded(prev => !prev)}
          onKeyDown={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setIsLexiconFilterExpanded(prev => !prev);
            }
          }}
          className={`mist-aesthetic-module-header grid min-h-[2.45rem] cursor-pointer grid-cols-[minmax(0,1fr)_minmax(220px,auto)_auto] items-center gap-3 border-b px-3 py-2 ${isRetro ? 'border-[#85411B]/12' : 'border-white/[0.06]'}`}
        >
          <div className={`${paramsModuleTitleClass} min-w-0`}>
              <Target size={16} className={accentText} />
              <span className="truncate">{t(lang, '核心主题', 'Core Theme')}</span>
              <span className={paramsModuleCountClass}>
                {lexiconAxisCount}
              </span>
          </div>

          <div className="flex min-w-0 items-center justify-end gap-1.5" onClick={event => event.stopPropagation()}>
            <div className="mist-aesthetic-action-buttons flex items-center gap-1 rounded-md border p-0.5">
              {!options?.hideAuditButton ? (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setIsLexiconFilterAuditOpen(true); }}
                  className={`${actionButtonBase} ${actionButtonIdle}`}
                  title={t(lang, '打开词库筛选总表', 'Open Lexicon Filter Table')}
                >
                  <Table2 size={12} />
                </button>
              ) : null}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  triggerActionMotion('LEXICON_FILTER:random');
                  startTransition(() => {
                    randomThemeAxis();
                    setLexiconAxisFilterState(DEFAULT_LEXICON_AXIS_FILTER_STATE);
                  });
                }}
                className={`mist-concept-action-random ${activeActionMotion === 'LEXICON_FILTER:random' ? 'is-motioning' : ''} ${actionButtonBase} ${actionButtonIdle}`}
                title={t(lang, '随机', 'Random')}
              >
                <Dice5 size={12} className="transition-transform duration-500 group-hover:rotate-90" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  resetLexiconAxisFilter();
                  triggerActionMotion('LEXICON_FILTER:clear');
                }}
                className={`mist-concept-action-clear ${activeActionMotion === 'LEXICON_FILTER:clear' ? 'is-motioning' : ''} ${actionButtonBase} ${actionButtonIdle}`}
                title={t(lang, '清空', 'Clear')}
              >
                <RefreshCcw size={12} className="transition-transform duration-500 group-hover:-rotate-90" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleLock('LEXICON');
                }}
                className={`mist-concept-action-lock ${actionButtonBase} ${isSectionLocked('LEXICON') ? actionButtonActive : actionButtonIdle}`}
                title={isSectionLocked('LEXICON') ? t(lang, '解锁', 'Unlock') : t(lang, '锁定', 'Lock')}
              >
                {isSectionLocked('LEXICON') ? <Lock size={12} /> : <Unlock size={12} />}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCopiedSectionId('LEXICON');
                  setTimeout(() => setCopiedSectionId(null), 1500);
                }}
                className={`mist-concept-action-copy ${actionButtonBase} ${copiedSectionId === 'LEXICON' ? actionButtonActive : actionButtonIdle}`}
                title={t(lang, '复制', 'Copy')}
              >
                {copiedSectionId === 'LEXICON' ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
          </div>
          <div onClick={event => event.stopPropagation()}>
            {renderParamExpandButton(
              isLexiconFilterExpanded,
              () => setIsLexiconFilterExpanded(prev => !prev),
              t(lang, '收起', 'Collapse'),
              t(lang, '展开', 'Expand')
            )}
          </div>
        </div>

        <div className={`px-4 py-3 ${isRetro ? 'bg-[#85411B]/[0.015]' : 'bg-black/12'}`}>
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className={`flex min-w-0 items-center gap-1 rounded-md border p-0.5 ${isRetro ? 'border-[#85411B]/12 bg-[#85411B]/4' : 'border-white/[0.06] bg-black/20'}`}>
              {([
                { id: 'HUMAN' as SubjectMode, label: '人形', labelEn: 'Human' },
                { id: 'CREATURE' as SubjectMode, label: '异种', labelEn: 'Creature' }
              ]).map(item => {
                const selected = subjectMode === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSubjectMode(item.id);
                      setObjectRoute(item.id === 'CREATURE' ? 'CREATURE' : 'HUMAN');
                    }}
                    className={`h-7 rounded px-3 text-[11px] font-black transition-all ${selected
                      ? isRetro ? 'bg-[#85411B]/14 text-[#85411B]' : 'bg-orange-500/12 text-orange-100'
                      : isRetro ? 'text-[#6F4A2D]/55 hover:bg-[#85411B]/7 hover:text-[#85411B]' : 'text-zinc-500 hover:bg-white/[0.045] hover:text-zinc-300'
                    }`}
                  >
                    {t(lang, item.label, item.labelEn)}
                  </button>
                );
              })}
            </div>
            <span className={`hidden text-[10px] font-black uppercase tracking-[0.16em] sm:inline ${mutedText}`}>
              {isCreatureThemePage ? t(lang, '异种筛选面板', 'Creature Filter') : t(lang, '人形筛选面板', 'Human Filter')}
            </span>
          </div>
          <div className={`grid grid-cols-1 gap-x-8 gap-y-3 ${isCreatureThemePage ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
            {isCreatureThemePage ? renderCoreThemeAxisSlot('SPECIES', '物种', 'Species', '选择物种', 'Choose Species', worldAxisState.creatureTaxonomyAllow) : null}
            {renderCoreThemeAxisSlot('TYPE', '类别', 'Category', '选择类别', 'Choose Category', worldAxisState.genreAllow)}
            {renderCoreThemeAxisSlot('TIME', '时间', 'Time', '选择时间', 'Choose Time', worldAxisState.eraAllow)}
            {renderCoreThemeAxisSlot('REALITY', '现实', 'Reality', '选择现实', 'Choose Reality', worldAxisState.realityAllow)}
          </div>
        </div>

        {isLexiconFilterExpanded && (
          <div className={`border-t ${isRetro ? 'border-[#85411B]/10' : 'border-white/[0.06]'} animate-in fade-in slide-in-from-top-1 duration-200`}>
            <div className={`grid gap-x-6 gap-y-2 px-4 py-2.5 xl:grid-cols-2 ${isRetro ? 'bg-[#85411B]/[0.02]' : 'bg-black/12'}`}>
              {renderRuleLine(
                '筛选模式',
                'Filter Mode',
                <>
                  {lexiconFilterModes.map(renderLexiconCompactModeButton)}
                </>
              )}
              {renderRuleLine(
                '通用词策略',
                'Universal Policy',
                <>
                  {renderLexiconUniversalChoice('INCLUDE', '放行', 'Include', '通用词会直接进入符合池。', 'Universal terms can directly enter the matched pool.')}
                  {renderLexiconUniversalChoice('SORT_ONLY', '仅软排', 'Sort Only', '通用词不硬放行，只参与排序。', 'Universal terms affect sorting only, not hard filtering.')}
                  {renderLexiconUniversalChoice('EXCLUDE', '排除', 'Exclude', '通用词不自动进入符合池。', 'Universal terms do not automatically enter the matched pool.')}
                </>
              )}
            </div>

            <div className={`grid gap-x-6 gap-y-2 border-t px-4 py-2.5 ${isCreatureThemePage ? 'xl:grid-cols-4' : 'xl:grid-cols-3'} ${isRetro ? 'border-[#85411B]/10 bg-[#85411B]/[0.015]' : 'border-white/[0.06] bg-black/10'}`}>
              {isCreatureThemePage ? renderRuleLine(
                '物种',
                'Species',
                <>
                  {renderLexiconFilterChoice('creatureTaxonomyLevels', 'strong', '强', 'Strong', '只放入与当前物种强相关的异种词条。', 'Only include creature terms strongly related to the selected species.')}
                  {renderLexiconFilterChoice('creatureTaxonomyLevels', 'usable', '可用', 'Usable', '放入当前物种可自然使用的异种词条。', 'Include creature terms naturally usable for the selected species.')}
                  {renderLexiconFilterChoice('creatureTaxonomyLevels', 'fusion', '融合', 'Fusion', '放入可做物种融合的异种词条。', 'Include creature terms suited for taxonomy fusion.')}
                  {renderLexiconFilterChoice('creatureTaxonomyLevels', 'weak', '弱', 'Weak', '放入关系较远但可审查的异种词条。', 'Include distant creature terms for audit or testing.')}
                  {renderLexiconFilterChoice('creatureTaxonomyLevels', 'exclude', '排除', 'Exclude', '放入物种冲突词，通常只用于审查。', 'Include taxonomy conflicts, usually for audit only.')}
                </>
              ) : null}
              {renderRuleLine(
                '类别',
                'Category',
                <>
                  {renderLexiconFilterChoice('categoryLevels', 'strong', '强', 'Strong', '只放入与当前类别强相关的词条。', 'Only include terms strongly related to the current category.')}
                  {renderLexiconFilterChoice('categoryLevels', 'usable', '可用', 'Usable', '放入当前类别可自然使用的词条。', 'Include terms naturally usable for the current category.')}
                  {renderLexiconFilterChoice('categoryLevels', 'fusion', '融合', 'Fusion', '放入可跨界融合、能制造混搭效果的词条。', 'Include cross-category terms for fusion and hybrid effects.')}
                  {renderLexiconFilterChoice('categoryLevels', 'weak', '弱', 'Weak', '放入关系较远但仍可尝试的词条。', 'Include distant but still testable terms.')}
                  {renderLexiconFilterChoice('categoryLevels', 'exclude', '排除', 'Exclude', '放入被标记为冲突或排除的词条，通常只用于审查。', 'Include conflicting or excluded terms, usually for audit only.')}
                </>
              )}
              {renderRuleLine(
                '时间',
                'Era',
                <>
                  {renderLexiconFilterChoice('eraLevels', 'hit', '命中', 'Hit', '词条时间锚与当前时间轴匹配。', 'The term era anchor matches the selected era.')}
                  {renderLexiconFilterChoice('eraLevels', 'universal', '通用', 'Universal', '词条不限时代，或可被当前时间轴容纳。', 'The term is era-universal or can fit the selected era.')}
                  {renderLexiconFilterChoice('eraLevels', 'miss', '不符', 'Miss', '词条时间锚与当前时间轴不匹配，通常用于审查。', 'The term era anchor does not match, usually for audit.')}
                </>
              )}
              {renderRuleLine(
                '现实',
                'Reality',
                <>
                  {renderLexiconFilterChoice('realityLevels', 'hit', '命中', 'Hit', '词条现实锚与当前现实轴直接匹配。', 'The term reality anchor directly matches the selected reality axis.')}
                  {renderLexiconFilterChoice('realityLevels', 'allowed', '可容纳', 'Allowed', '词条不完全命中，但能被当前现实轴容纳。', 'The term is not a direct hit but can fit the selected reality axis.')}
                  {renderLexiconFilterChoice('realityLevels', 'miss', '不符', 'Miss', '词条现实锚与当前现实轴不匹配，通常用于审查。', 'The term reality anchor does not match, usually for audit.')}
                </>
              )}
            </div>

            {lexiconAxisFilterState.mode === 'LAYERED' && (
              <div className={`border-t px-4 py-3 ${isRetro ? 'border-[#85411B]/10 bg-[#85411B]/[0.03]' : 'border-white/[0.06] bg-black/20'}`}>
                <div className={rowLabelClass}>{t(lang, '层级顺序 Layer Order', 'Layer Order')}</div>
                <div className={`grid gap-2 ${isCreatureThemePage ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
                  {visibleLexiconAxisOrder.map((axisKey, index) => (
                    <div key={axisKey} className={`flex items-center justify-between gap-2 rounded-md border px-3 py-2 ${isRetro ? 'border-[#85411B]/14 bg-white/40 text-[#5A2B10]' : 'border-white/[0.08] bg-zinc-900/40 text-zinc-200'}`}>
                      <div className="min-w-0">
                        <div className={`text-[10px] font-black uppercase tracking-[0.12em] ${mutedText}`}>{t(lang, `第${index + 1}层`, `Layer ${index + 1}`)}</div>
                        <div className="truncate text-[12px] font-black">{lexiconAxisKeyLabel(axisKey)}</div>
                      </div>
                      <div className="flex shrink-0 items-center gap-1">
                        <button type="button" onClick={() => moveLexiconAxisOrder(axisKey, -1)} disabled={index === 0} className={`flex h-6 w-6 items-center justify-center rounded transition-all disabled:opacity-25 ${isRetro ? 'hover:bg-[#85411B]/10' : 'hover:bg-white/10'}`}><ChevronDown size={12} className="rotate-180" /></button>
                        <button type="button" onClick={() => moveLexiconAxisOrder(axisKey, 1)} disabled={index === visibleLexiconAxisOrder.length - 1} className={`flex h-6 w-6 items-center justify-center rounded transition-all disabled:opacity-25 ${isRetro ? 'hover:bg-[#85411B]/10' : 'hover:bg-white/10'}`}><ChevronDown size={12} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <p className={`border-t px-4 py-2.5 text-[10px] font-bold leading-4 ${mutedText} ${isRetro ? 'border-[#85411B]/10 bg-white/12' : 'border-white/[0.06] bg-black/16'}`}>
              {t(lang, '未选择某个基准时，该维度不参与筛选。', 'If a baseline is empty, that axis is ignored.')}
            </p>
          </div>
        )}
      </section>
    );
  };

  const getLexiconFilterAuditRows = () => scopedLibraries
    .map(category => {
      const blockId = category.id.endsWith('_lib') ? category.id.slice(0, -4) : category.id;
      const visibleItems = (category.items || []).filter(isLibraryItemVisible);
      const total = visibleItems.length;
      const participates = blockIsLexiconAxisFilterEnabled(blockId);
      const axisCounts = { species: total, category: total, era: total, reality: total };
      let matched = total;

      if (participates) {
        axisCounts.species = 0;
        axisCounts.category = 0;
        axisCounts.era = 0;
        axisCounts.reality = 0;

        if (lexiconAxisFilterState.mode === 'LAYERED') {
          matched = filterItemsByLayeredLexiconAxis(blockId, visibleItems).length;
        } else if (lexiconAxisFilterState.mode === 'SOFT_SORT') {
          matched = total;
        } else {
          matched = 0;
        }

        visibleItems.forEach(item => {
          const passMap = getLexiconAxisPassMapForItem(item, blockId);
          const activeChecks = (Object.keys(passMap) as LexiconAxisKey[]).filter(key => passMap[key].active);

          if (!passMap.species.active || passMap.species.pass) axisCounts.species += 1;
          if (!passMap.category.active || passMap.category.pass) axisCounts.category += 1;
          if (!passMap.era.active || passMap.era.pass) axisCounts.era += 1;
          if (!passMap.reality.active || passMap.reality.pass) axisCounts.reality += 1;

          if (lexiconAxisFilterState.mode === 'INTERSECTION') {
            if (activeChecks.length === 0 || activeChecks.every(key => passMap[key].pass)) matched += 1;
          } else if (lexiconAxisFilterState.mode === 'UNION') {
            if (activeChecks.length === 0 || activeChecks.some(key => passMap[key].pass)) matched += 1;
          }
        });
      }

      const removed = Math.max(0, total - matched);
      const ratio = total > 0 ? matched / total : 0;
      return {
        blockId,
        name: category.name,
        nameEn: category.nameEn,
        total,
        matched,
        removed,
        ratio,
        axisCounts,
        participates
      };
    })
    .filter(row => row.total > 0)
    .sort((a, b) => {
      const pinnedA = LEXICON_FILTER_AUDIT_PINNED_BLOCK_IDS.indexOf(a.blockId);
      const pinnedB = LEXICON_FILTER_AUDIT_PINNED_BLOCK_IDS.indexOf(b.blockId);
      if (pinnedA >= 0 || pinnedB >= 0) {
        if (pinnedA < 0) return 1;
        if (pinnedB < 0) return -1;
        return pinnedA - pinnedB;
      }
      if (a.participates !== b.participates) return a.participates ? -1 : 1;
      if (b.removed !== a.removed) return b.removed - a.removed;
      return b.total - a.total;
    });

  const renderLexiconFilterAuditModal = () => {
    const rows = getLexiconFilterAuditRows();
    const participatingRows = rows.filter(row => row.participates);
    const totalCount = participatingRows.reduce((sum, row) => sum + row.total, 0);
    const matchedCount = participatingRows.reduce((sum, row) => sum + row.matched, 0);
    const removedCount = Math.max(0, totalCount - matchedCount);
    const modeLabel = lexiconFilterModes.find(item => item.id === lexiconAxisFilterState.mode);
    const renderStat = (label: string, value: string | number, tone: 'accent' | 'muted' | 'danger' = 'muted') => {
      const toneClass = tone === 'accent'
        ? (isRetro ? 'text-[#85411B] bg-[#85411B]/10' : 'text-orange-100 bg-orange-500/12')
        : tone === 'danger'
          ? (isRetro ? 'text-red-800/72 bg-red-950/5' : 'text-red-300/74 bg-red-950/18')
          : (isRetro ? 'text-[#6F4A2D]/78 bg-[#85411B]/5' : 'text-zinc-300 bg-white/[0.04]');
      return (
        <div className={`rounded-md px-3 py-2 ${toneClass}`}>
          <div className="text-[18px] font-black leading-6">{value}</div>
          <div className="text-[10px] font-black uppercase tracking-[0.12em] opacity-70">{label}</div>
        </div>
      );
    };
    return (
      <div className="fixed inset-0 z-[230] bg-black/80 backdrop-blur-[5px]" onMouseDown={() => setIsLexiconFilterAuditOpen(false)}>
        <div
          className={`fixed inset-4 isolate flex flex-col overflow-hidden rounded-xl shadow-2xl ${isRetro ? 'bg-[#F7EFE3] shadow-[#2A1208]/20 ring-1 ring-[#85411B]/22' : 'bg-[#050505] shadow-black/70 ring-1 ring-orange-500/20'}`}
          onMouseDown={event => event.stopPropagation()}
        >
          <div className={`shrink-0 border-b px-5 py-4 ${isRetro ? 'border-[#85411B]/12 bg-[#F8F1E7]' : 'border-white/[0.07] bg-[#080604]'}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className={`flex items-center gap-2 text-[20px] font-black ${strongText}`}>
                  <Table2 size={18} className={accentText} />
                  <span>{t(lang, '词库筛选总表', 'Lexicon Filter Table')}</span>
                </div>
                <div className={`mt-1.5 text-[12px] font-bold leading-5 ${mutedText}`}>
                  {t(lang, '用于审查当前筛选条件对所有词库入库数量的影响。', 'Audit how the current filter changes matched counts across all lexicons.')}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsLexiconFilterAuditOpen(false)}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-all ${isRetro ? 'text-[#85411B]/70 hover:bg-[#85411B]/8' : 'text-orange-200/60 hover:bg-orange-500/10 hover:text-orange-200'}`}
                title={t(lang, '关闭', 'Close')}
              >
                <X size={16} />
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto custom-scrollbar">
            <div className="space-y-4 p-5">
              {renderLexiconAxisFilterPanel({ hideAuditButton: true })}
              <section className={`overflow-hidden rounded-lg border ${softPanelClass}`}>
                <div className={`grid gap-2 border-b p-3 sm:grid-cols-4 ${isRetro ? 'border-[#85411B]/10' : 'border-white/[0.06]'}`}>
                  {renderStat(t(lang, '模式', 'Mode'), t(lang, modeLabel?.label || '严格交集', modeLabel?.labelEn || 'Strict'), 'accent')}
                  {renderStat(t(lang, '参与词库', 'Active Libs'), participatingRows.length)}
                  {renderStat(t(lang, '符合词条', 'Matched'), matchedCount, 'accent')}
                  {renderStat(t(lang, '被筛掉', 'Removed'), removedCount, removedCount > 0 ? 'danger' : 'muted')}
                </div>
                <div className={`border-b px-3 py-2 text-[11px] font-bold leading-5 ${isRetro ? 'border-[#85411B]/10 text-[#6F4A2D]/76' : 'border-white/[0.06] text-zinc-400'}`}>
                  {t(lang, '分项列显示每个词库分别通过物种、类别、时间、现实的人数；非异种词库不受物种轴影响。', 'Axis columns show how many items pass species, category, era, and reality. Non-creature lexicons ignore the species axis.')}
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead className={`${isRetro ? 'bg-[#85411B]/7 text-[#6F4A2D]' : 'bg-black/32 text-zinc-400'}`}>
                      <tr className="text-[10px] font-black uppercase tracking-[0.14em]">
                        <th className="px-3 py-2">{t(lang, '词库', 'Lexicon')}</th>
                        <th className="px-3 py-2">{t(lang, '模块', 'Block')}</th>
                        <th className="px-3 py-2 text-right">{t(lang, '原始', 'Total')}</th>
                        <th className="px-3 py-2 text-right">{t(lang, '符合', 'Matched')}</th>
                        <th className="px-3 py-2 text-right">{t(lang, '物种', 'Species')}</th>
                        <th className="px-3 py-2 text-right">{t(lang, '类别', 'Category')}</th>
                        <th className="px-3 py-2 text-right">{t(lang, '时间', 'Era')}</th>
                        <th className="px-3 py-2 text-right">{t(lang, '现实', 'Reality')}</th>
                        <th className="px-3 py-2 text-right">{t(lang, '筛掉', 'Removed')}</th>
                        <th className="px-3 py-2 text-right">{t(lang, '比例', 'Ratio')}</th>
                        <th className="px-3 py-2">{t(lang, '状态', 'Status')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map(row => {
                        const ratioText = `${Math.round(row.ratio * 100)}%`;
                        return (
                          <tr key={row.blockId} className={`border-t text-[12px] font-bold ${isRetro ? 'border-[#85411B]/8 text-[#2B1B10]' : 'border-white/[0.055] text-zinc-300'}`}>
                            <td className="max-w-[18rem] px-3 py-2">
                              <div className="truncate text-[13px] font-black">{t(lang, row.name, row.nameEn || row.name)}</div>
                            </td>
                            <td className={`px-3 py-2 font-mono text-[10px] ${mutedText}`}>{row.blockId}</td>
                            <td className="px-3 py-2 text-right">{row.total}</td>
                            <td className={`px-3 py-2 text-right font-black ${row.participates ? accentText : mutedText}`}>{row.matched}</td>
                            <td className={`px-3 py-2 text-right ${row.axisCounts.species === 0 ? (isRetro ? 'text-red-800/72' : 'text-red-300/72') : ''}`}>{row.axisCounts.species}</td>
                            <td className={`px-3 py-2 text-right ${row.axisCounts.category === 0 ? (isRetro ? 'text-red-800/72' : 'text-red-300/72') : ''}`}>{row.axisCounts.category}</td>
                            <td className={`px-3 py-2 text-right ${row.axisCounts.era === 0 ? (isRetro ? 'text-red-800/72' : 'text-red-300/72') : ''}`}>{row.axisCounts.era}</td>
                            <td className={`px-3 py-2 text-right ${row.axisCounts.reality === 0 ? (isRetro ? 'text-red-800/72' : 'text-red-300/72') : ''}`}>{row.axisCounts.reality}</td>
                            <td className={`px-3 py-2 text-right ${row.removed > 0 ? (isRetro ? 'text-red-800/72' : 'text-red-300/72') : mutedText}`}>{row.removed}</td>
                            <td className="px-3 py-2 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <div className={`h-1.5 w-20 overflow-hidden rounded-full ${isRetro ? 'bg-[#85411B]/10' : 'bg-white/[0.07]'}`}>
                                  <div className={`${isRetro ? 'bg-[#85411B]' : 'bg-orange-500'} h-full rounded-full`} style={{ width: ratioText }} />
                                </div>
                                <span className="w-9 text-right">{ratioText}</span>
                              </div>
                            </td>
                            <td className="px-3 py-2">
                              <span className={`rounded px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${row.participates ? (isRetro ? 'bg-[#85411B]/9 text-[#85411B]' : 'bg-orange-500/10 text-orange-200/78') : (isRetro ? 'bg-[#85411B]/4 text-[#6F4A2D]/45' : 'bg-white/[0.035] text-zinc-600')}`}>
                                {row.participates ? t(lang, '参与', 'Active') : t(lang, '不参与', 'Bypass')}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLinkedChoiceButton = (
    selected: boolean,
    onClick: () => void,
    label: string,
    desc?: string,
    disabled = false
  ) => {
    const buttonStyle = {
      borderColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.55)' : 'rgba(249, 115, 22, 0.62)'
        : isRetro ? 'rgba(133, 65, 27, 0.16)' : 'rgba(249, 115, 22, 0.20)',
      backgroundColor: selected
        ? isRetro ? 'rgba(133, 65, 27, 0.10)' : 'rgba(249, 115, 22, 0.10)'
        : isRetro ? 'transparent' : 'rgba(9, 9, 11, 0.72)'
    };
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={`rounded border px-2.5 py-1.5 text-left transition-all disabled:cursor-not-allowed disabled:opacity-45 ${selected ? (isRetro ? 'text-[#85411B]' : 'text-[var(--mist-active-accent)]') : (isRetro ? 'text-[#6F4A2D]/78 hover:bg-[#85411B]/6' : 'text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
        style={buttonStyle}
        title={desc || label}
      >
        <span className="block min-w-0 truncate text-[11px] font-black leading-4">{label}</span>
        {desc ? <span className={`mt-0.5 block line-clamp-1 text-[10px] font-medium leading-3 ${selected ? '' : mutedText}`}>{desc}</span> : null}
      </button>
    );
  };

  const renderRandomSystemPanel = () => {
    const preset = getThemeGovernedLinkedPreset(activeLinkedRandomPreset);
    const lawLabel = registerRandomModes.find(mode => mode.id === preset.worldLaw)?.label || '同构折译';
    const lawLabelEn = registerRandomModes.find(mode => mode.id === preset.worldLaw)?.labelEn || 'L2 Translate';
    const densityLabel = linkedDensityOptions.find(item => item.id === linkedRandomDensity)?.label || '标准';
    const densityLabelEn = linkedDensityOptions.find(item => item.id === linkedRandomDensity)?.labelEn || 'Standard';
    const conflictLabel = linkedConflictOptions.find(item => item.id === linkedRandomConflictPolicy)?.label || '折译';
    const conflictLabelEn = linkedConflictOptions.find(item => item.id === linkedRandomConflictPolicy)?.labelEn || 'Translate';
    const subjectModeLabel = (mode: ConceptLinkedRandomPreset['subjectMode']) => ({
      HUMAN: t(lang, '人类主体', 'Human Subject'),
      CREATURE: t(lang, '异类主体', 'Creature Subject')
    }[mode] || mode);
    const humanRegisterLabel = (register?: ConceptLinkedRandomPreset['humanRegister']) => {
      if (!register) return '';
      return t(lang, humanRegisterMeta.find(item => item.id === register)?.label || register, humanRegisterMeta.find(item => item.id === register)?.labelEn || register);
    };
    const eraLabel = (era: string) => ({
      primitive: t(lang, '原始时代', 'Primitive'),
      slave: t(lang, '古典奴隶制', 'Classical Slave Era'),
      feudal: t(lang, '封建古代', 'Feudal'),
      early_modern: t(lang, '近世早期', 'Early Modern'),
      modern: t(lang, '现代', 'Modern'),
      contemporary: t(lang, '当代', 'Contemporary'),
      near_future: t(lang, '近未来', 'Near Future'),
      far_future: t(lang, '远未来', 'Far Future'),
      future: t(lang, '未来', 'Future'),
      mythic: t(lang, '神话时代', 'Mythic'),
      timeless: t(lang, '不限时代', 'Era-Universal')
    }[era] || era);
    const subjectSummary = [subjectModeLabel(preset.subjectMode), humanRegisterLabel(preset.humanRegister)].filter(Boolean).join(' / ');
    const eraSummary = preset.eraAllow.slice(0, 5).map(eraLabel).join(' / ');
    const hardFilterSummary = [
      axisSummaryText(worldAxisState.genreAllow, 2),
      axisSummaryText(effectiveKeywordTags.eraTags, 2, themeAxisOptions.eras),
      axisSummaryText(effectiveKeywordTags.realityTags, 1, themeAxisOptions.realities)
    ].filter(Boolean).join(' / ');
    const renderChildRandomCard = (
      icon: React.ReactNode,
      title: string,
      titleEn: string,
      value: string,
      detail: string,
      detailEn: string,
      openPanel: () => void,
      runRandom: () => void,
      disabled = false
    ) => (
      <div className={`rounded-lg border p-2.5 ${isRetro ? 'border-[#85411B]/12 bg-white/24' : 'border-orange-500/10 bg-zinc-950/45'}`}>
        <div className="mb-2 flex items-start gap-2">
          <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${isRetro ? 'border-[#85411B]/16 bg-[#85411B]/7 text-[#85411B]' : 'border-orange-500/18 bg-orange-500/8 text-orange-200'}`}>
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className={`truncate text-[12px] font-black ${strongText}`}>{t(lang, title, titleEn)}</div>
            <div className={`mt-0.5 truncate text-[11px] font-medium ${mutedText}`}>{value}</div>
          </div>
        </div>
        <div className={`mb-2 line-clamp-2 text-[10px] font-medium leading-4 ${mutedText}`}>{t(lang, detail, detailEn)}</div>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            type="button"
            disabled={disabled}
            onClick={openPanel}
            className={`flex h-7 items-center justify-center gap-1 rounded-md border px-2 text-[10px] font-black transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isRetro ? 'border-[#85411B]/18 text-[#85411B]/72 hover:bg-[#85411B]/7' : 'border-orange-500/14 text-orange-200/62 hover:border-orange-500/30 hover:bg-orange-500/8'}`}
          >
            <SlidersHorizontal size={11} />
            <span>{t(lang, '设置', 'Setup')}</span>
          </button>
          <button
            type="button"
            disabled={disabled}
            onClick={runRandom}
            className={`mist-concept-action-random flex h-7 items-center justify-center gap-1 rounded-md border px-2 text-[10px] font-black transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isRetro ? 'border-[#85411B]/24 bg-[#85411B]/8 text-[#85411B] hover:bg-[#85411B]/12' : 'border-orange-500/28 bg-orange-500/9 text-orange-200 hover:bg-orange-500/13'}`}
          >
            <Dice5 size={11} />
            <span>{t(lang, '随机', 'Random')}</span>
          </button>
        </div>
      </div>
    );
    return (
      <section className={`rounded-xl border p-3 ${isRetro ? 'border-[#85411B]/14 bg-white/28' : 'border-orange-500/10 bg-zinc-950/72'}`}>
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className={sidebarModuleTitleClass}>
              <Wand2 size={16} className={accentText} />
              <span>{t(lang, '随机系统', 'Random System')}</span>
              <span className={`ml-1 max-w-[10rem] truncate rounded px-1.5 py-0.5 text-[10px] font-black ${isRetro ? 'bg-[#85411B]/8 text-[#85411B]' : 'bg-orange-500/8 text-orange-200/75'}`}>
                {hardFilterSummary}
              </span>
            </div>
            <p className={`mt-1 text-[11px] font-medium leading-4 ${mutedText}`}>
              {t(lang, '词库推荐会读取类型、时间和现实三条线：类型对应 categoryFit，时间对应 eras，现实对应 realityTags。这里控制参数量、融合尺度，以及视觉风格和取景协议的子随机。', 'Lexicon matching reads type, era, and reality: type maps to categoryFit, era maps to eras, and reality maps to realityTags. This controls density, fusion scale, plus child random systems for style and framing.')}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
	              type="button"
	              disabled={isSectionLocked('SUBJECT') && isSectionLocked('STYLE')}
	              onClick={() => {
	                randomizeIndependentCoreModules();
	              }}
	              className={`mist-concept-action-random flex h-8 items-center gap-1.5 rounded border px-3 text-[11px] font-black transition-all disabled:cursor-not-allowed disabled:opacity-45 ${activeActionMotion === 'CORE:random' ? 'is-motioning' : ''} ${isRetro ? 'border-[#85411B]/30 bg-[#85411B]/10 text-[#85411B] hover:bg-[#85411B]/14' : 'border-[var(--mist-active-accent)]/45 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)] hover:bg-[var(--mist-active-accent)]/15'}`}
	              title={t(lang, '依次随机主体、时空、光影', 'Randomize subject, field, and lighting in sequence')}
	            >
	              <Sparkles size={13} />
	              <span>{t(lang, '核心随机', 'Core Random')}</span>
	            </button>
          </div>
        </div>

        <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.76fr)]">
          <div className="space-y-3 min-w-0">
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <div className={`mb-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${mutedText}`}>{t(lang, '参数量', 'Density')}</div>
                <div className="grid grid-cols-3 gap-1.5">
                  {linkedDensityOptions.map(item => renderLinkedChoiceButton(
                    linkedRandomDensity === item.id,
                    () => setLinkedRandomDensity(item.id),
                    t(lang, item.label, item.labelEn),
                    t(lang, item.desc, item.descEn)
                  ))}
                </div>
              </div>
              <div>
                <div className={`mb-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${mutedText}`}>{t(lang, '融合 / 跨界', 'Fusion / Crossover')}</div>
                <div className="grid grid-cols-4 gap-1.5">
                  {linkedConflictOptions.map(item => renderLinkedChoiceButton(
                    linkedRandomConflictPolicy === item.id,
                    () => setLinkedRandomConflictPolicy(item.id),
                    t(lang, item.label, item.labelEn),
                    t(lang, item.desc, item.descEn)
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className={`mb-1.5 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.12em] ${mutedText}`}>
                <span>{t(lang, '子随机系统', 'Child Random Systems')}</span>
                <span>{t(lang, '视觉 + 取景', 'Style + Framing')}</span>
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                {renderChildRandomCard(
                  <Paintbrush size={13} />,
                  '视觉风格随机',
                  'Visual Style Random',
                  visualStylePresetRouteLabel(),
                  '控制媒介、导演/流派风格、质感与色彩的随机方式。',
                  'Controls medium, director/school style, texture, and color randomization.',
                  () => setIsVisualStylePresetPanelOpen(true),
                  () => {
                    setIsVisualStylePresetPanelOpen(false);
                    randomizeVisualStylePreset();
                    triggerActionMotion('STYLE:random');
                  },
                  isSectionLocked('STYLE')
                )}
                {renderChildRandomCard(
                  <Camera size={13} />,
                  '取景协议随机',
                  'Framing Protocol Random',
                  framingPresetRouteLabel(),
                  '控制拍摄协议预设、镜头、构图、视角与景别细项。',
                  'Controls shooting preset, lens, composition, angle, and shot details.',
                  () => setIsFramingPresetPanelOpen(true),
                  () => {
                    setIsFramingPresetPanelOpen(false);
                    randomizeFramingPreset();
                    triggerActionMotion('FRAMING:random');
                  },
                  isSectionLocked('STYLE')
                )}
              </div>
            </div>
          </div>

          <aside className={`rounded-lg border p-2.5 ${isRetro ? 'border-[#85411B]/12 bg-white/22' : 'border-orange-500/10 bg-zinc-950/50'}`}>
            <div className={`mb-2 flex items-center justify-between gap-2 text-[11px] font-black uppercase tracking-[0.12em] ${accentText}`}>
              <span>{t(lang, '主题内设规则', 'Theme Internal Rule')}</span>
              <span className={`rounded px-1.5 py-0.5 text-[9px] ${isRetro ? 'bg-[#85411B]/8' : 'bg-orange-500/10'}`}>{t(lang, '只读', 'Read Only')}</span>
            </div>
            <div className="space-y-1.5 text-[11px] font-medium leading-4">
              <div className={strongText}>{t(lang, preset.label, preset.labelEn)}</div>
              <div className={mutedText}>{t(lang, preset.brief, preset.briefEn)}</div>
              <div className={mutedText}>{t(lang, '世界法则', 'World Law')}: {t(lang, lawLabel, lawLabelEn)}</div>
              <div className={mutedText}>{t(lang, '主体', 'Subject')}: {subjectSummary}</div>
              <div className={mutedText}>{t(lang, '超现实上限', 'Surreal Max')}: L{preset.surrealMax}</div>
              <div className={mutedText}>{t(lang, '执行设置', 'Runtime')}: {t(lang, densityLabel, densityLabelEn)} · {t(lang, '跨界', 'Crossover')}: {t(lang, conflictLabel, conflictLabelEn)}</div>
              <div className={`pt-1 text-[10px] leading-4 ${mutedText}`}>
                {t(lang, `允许时代：${eraSummary}${preset.eraAllow.length > 5 ? ' ...' : ''}`, `Eras: ${preset.eraAllow.slice(0, 5).join(' / ')}${preset.eraAllow.length > 5 ? ' ...' : ''}`)}
              </div>
            </div>
          </aside>
        </div>
      </section>
    );
  };

  const renderVisualStylePanel = () => (
    (() => {
      const moduleId = 'visual_style_panel';
      const expanded = isParamModuleExpanded(moduleId);
      const presetVisible = isParamModulePresetVisible(moduleId);
      return (
	    <section className={`mist-aesthetic-module mist-concept-source-module rounded-lg border transition-all duration-300 ${softPanelClass}`}>
	      <div
	        role="button"
	        tabIndex={0}
	        onClick={() => toggleParamModuleExpanded(moduleId)}
	        onKeyDown={event => {
	          if (event.key === 'Enter' || event.key === ' ') {
	            event.preventDefault();
	            toggleParamModuleExpanded(moduleId);
	          }
	        }}
	        className={`mist-aesthetic-module-header grid min-h-[2.45rem] cursor-pointer grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-3 border-b px-3 py-2 ${isRetro ? 'border-[#85411B]/12' : 'border-white/[0.06]'}`}
	      >
	        <div className={`${paramsModuleTitleClass} min-w-0`}>
	          <Paintbrush size={16} className={accentText} />
	          <span className="truncate">{t(lang, '视觉风格', 'Visual Style')}</span>
	          <span className={paramsModuleCountClass}>
	            {selectedCount(activeVisualStylePanelBlocks)}
	          </span>
	          <div className="ml-1 w-[330px] min-w-0 shrink-0" onClick={event => event.stopPropagation()}>
	            {renderMediumCategorySwitch()}
	          </div>
	        </div>
	        <div className="flex min-w-0 items-center justify-end gap-1.5" onClick={event => event.stopPropagation()}>
	          {lastVisualStylePreset ? (
	            <span className={`hidden h-6 max-w-[8rem] items-center truncate rounded px-1.5 text-[10px] font-black leading-none tracking-[0.03em] sm:inline-flex ${isRetro ? 'bg-[#85411B]/10 text-[#85411B]' : 'bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]'}`}>
	              {t(lang, lastVisualStylePreset.label, lastVisualStylePreset.labelEn)}
	            </span>
	          ) : null}
	        </div>
	        <div className="mist-aesthetic-action-buttons relative flex shrink-0 items-center justify-end gap-1 rounded-md border p-0.5" onClick={event => event.stopPropagation()}>
	          <button
	            ref={visualStylePresetButtonRef}
	            type="button"
            disabled={isSectionLocked('STYLE')}
            onClick={() => {
              setIsVisualStylePresetPanelOpen(prev => !prev);
            }}
            className={`flex h-6 max-w-[10rem] items-center gap-1 rounded border px-1.5 text-[10px] font-black tracking-[0.02em] transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isVisualStylePresetPanelOpen ? (isRetro ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]' : 'border-[var(--mist-active-accent)]/55 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]') : (isRetro ? 'border-[#85411B]/18 bg-transparent text-[#85411B]/75 hover:bg-[#85411B]/8' : 'border-orange-500/18 bg-zinc-950/70 text-zinc-300 hover:border-orange-400/35 hover:bg-orange-500/8')}`}
            title={t(lang, '选择视觉风格随机预设', 'Choose visual style random preset')}
          >
            <SlidersHorizontal size={11} className="shrink-0" />
            <span className="min-w-0 truncate">{visualStylePresetRouteLabel()}</span>
          </button>
          <button
            type="button"
            disabled={isSectionLocked('STYLE')}
            onClick={() => {
              setIsVisualStylePresetPanelOpen(false);
              randomizeVisualStylePreset();
              triggerActionMotion('STYLE:random');
            }}
            className={`mist-concept-action-random group flex h-6 w-6 items-center justify-center rounded border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${activeActionMotion === 'STYLE:random' ? 'is-motioning' : ''} ${isRetro ? 'border-transparent bg-transparent text-[#85411B]/58 hover:border-[#85411B]/36 hover:bg-[#85411B]/8 hover:text-[#85411B]' : 'border-transparent bg-zinc-900/45 text-zinc-500 hover:border-[var(--mist-active-accent)]/45 hover:bg-[var(--mist-active-accent)]/10 hover:text-[var(--mist-active-accent)]'}`}
            title={t(lang, '按随机预设生成视觉风格', 'Randomize Visual Style by Preset')}
          >
            <Dice5 size={12} className={!isSectionLocked('STYLE') ? 'transition-transform duration-500 group-hover:rotate-90' : ''} />
          </button>
          <button
            type="button"
            disabled={isSectionLocked('STYLE')}
            onClick={() => {
              clearBlocks(activeVisualStylePanelBlocks);
              triggerActionMotion('STYLE:clear');
            }}
            className={`mist-concept-action-clear group flex h-6 w-6 items-center justify-center rounded border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${activeActionMotion === 'STYLE:clear' ? 'is-motioning' : ''} ${isRetro ? 'border-transparent bg-transparent text-[#85411B]/58 hover:border-[#85411B]/36 hover:bg-[#85411B]/8 hover:text-[#85411B]' : 'border-transparent bg-zinc-900/45 text-zinc-500 hover:border-[var(--mist-active-accent)]/45 hover:bg-[var(--mist-active-accent)]/10 hover:text-[var(--mist-active-accent)]'}`}
            title={t(lang, '清空本组', 'Clear Section')}
          >
            <RefreshCcw size={12} className={!isSectionLocked('STYLE') ? 'transition-transform duration-500 group-hover:-rotate-90' : ''} />
          </button>
          <button
            type="button"
            onClick={() => onToggleLock('STYLE')}
            className={`mist-concept-action-lock flex h-6 w-6 items-center justify-center rounded border transition-all duration-200 ${isSectionLocked('STYLE') ? (isRetro ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]' : 'border-[var(--mist-active-accent)]/55 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]') : (isRetro ? 'border-transparent bg-transparent text-[#85411B]/58 hover:border-[#85411B]/36 hover:bg-[#85411B]/8 hover:text-[#85411B]' : 'border-transparent bg-zinc-900/45 text-zinc-500 hover:border-[var(--mist-active-accent)]/45 hover:bg-[var(--mist-active-accent)]/10 hover:text-[var(--mist-active-accent)]')}`}
            title={isSectionLocked('STYLE') ? t(lang, '解锁本组', 'Unlock Section') : t(lang, '锁定本组', 'Lock Section')}
	          >
	            {isSectionLocked('STYLE') ? <Lock size={12} /> : <Unlock size={12} />}
	          </button>
	          <button
	            type="button"
	            onClick={() => copySection('STYLE', '视觉风格', 'Visual Style', activeVisualStylePanelBlocks)}
	            className={`mist-concept-action-copy flex h-6 w-6 items-center justify-center rounded border transition-all duration-200 ${copiedSectionId === 'STYLE' ? (isRetro ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]' : 'border-[var(--mist-active-accent)]/55 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]') : (isRetro ? 'border-transparent bg-transparent text-[#85411B]/58 hover:border-[#85411B]/36 hover:bg-[#85411B]/8 hover:text-[#85411B]' : 'border-transparent bg-zinc-900/45 text-zinc-500 hover:border-[var(--mist-active-accent)]/45 hover:bg-[var(--mist-active-accent)]/10 hover:text-[var(--mist-active-accent)]')}`}
	            title={t(lang, '复制本组', 'Copy Section')}
	          >
	            {copiedSectionId === 'STYLE' ? <Check size={12} /> : <Copy size={12} />}
	          </button>
	        </div>
	        <div onClick={event => event.stopPropagation()}>
	          {renderParamExpandButton(
	            expanded,
	            () => toggleParamModuleExpanded(moduleId),
	            t(lang, '收起', 'Collapse'),
	            t(lang, '展开完整句式', 'Expand Sentence')
	          )}
	        </div>
	      </div>
      {expanded ? (
        <div className="space-y-3 p-3 text-xs font-serif">
          {renderParamSlotGroup('审美风格', 'Aesthetic Style', activeMediaSoulBlocks, true)}
          {activeMediaQualityBlocks.length > 0 && (
            <section>
              <div className={`mb-2 text-[11px] font-black uppercase tracking-[0.14em] ${mutedText}`}>
                {t(lang, '质感', 'Texture')}
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                {activeMediaQualityBlocks.map(slot)}
              </div>
            </section>
          )}
          <section>
            <div className={`mb-2 text-[11px] font-black uppercase tracking-[0.14em] ${mutedText}`}>
              {t(lang, '色彩协议', 'Color Protocol')}
            </div>
            {renderPaletteSlots()}
          </section>
        </div>
      ) : presetVisible ? (
        <div className="space-y-3 p-3 text-xs font-serif">
          {renderParamSlotGroup('审美风格', 'Aesthetic Style', activeMediaSoulBlocks, true)}
        </div>
      ) : (
        <div className="p-3">
          {renderSelectedSlotSummary(activeVisualStylePanelBlocks)}
        </div>
      )}
    </section>
      );
    })()
  );

  const renderInstructionComponentControls = (section: CharacterIdentityBoardPromptSection) => {
    const chipClass = (active: boolean) => `rounded-md border px-3 py-2 text-[12px] font-black uppercase tracking-[0.05em] transition-colors ${
      active
        ? isRetro
          ? 'border-[#85411B]/45 bg-[#85411B]/10 text-[#4b2b14]'
          : 'border-orange-400/45 bg-orange-400/12 text-orange-100'
        : isRetro
          ? 'border-[#85411B]/14 text-[#85411B]/60 hover:border-[#85411B]/28'
          : 'border-white/[0.08] text-zinc-500 hover:border-white/[0.16] hover:text-zinc-300'
    }`;
    if (promptTemplateMode === 'GRID_BOARD' && (section.id === 'assembly_boardContent' || section.id === 'assembly_layout')) {
      return (
        <div className="space-y-3">
          <div>
            <p className={`mb-2 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '布局', 'Layout')}</p>
            <div className="flex flex-wrap gap-2">
              {gridLayoutOptions.map(layout => (
                <button key={layout} type="button" onClick={() => setIdentityOptions(prev => ({ ...prev, gridLayout: layout }))} className={chipClass(identityOptions.gridLayout === layout)}>
                  {layout}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className={`mb-2 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '内容对象', 'Content Object')}</p>
            <div className="flex flex-wrap gap-2">
              {gridContentObjectOptions.map(option => (
                <button key={option.value} type="button" onClick={() => setIdentityOptions(prev => ({ ...prev, gridContentObject: option.value }))} className={chipClass(identityOptions.gridContentObject === option.value)}>
                  {t(lang, option.label, option.labelEn)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className={`mb-2 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '变化轴', 'Variation Axis')}</p>
            <div className="flex flex-wrap gap-2">
              {gridVariationAxisOptions.map(option => (
                <button key={option.value} type="button" onClick={() => setIdentityOptions(prev => ({ ...prev, gridVariationAxis: option.value }))} className={chipClass(identityOptions.gridVariationAxis === option.value)}>
                  {t(lang, option.label, option.labelEn)}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (section.id === 'assembly_formatSpec') {
      return (
        <div className="space-y-2">
          <div>
            <p className={`mb-2 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '画幅', 'Aspect')}</p>
            <div className="flex flex-wrap gap-2">
              {boardFormatOptions.map(format => (
                <button key={format} type="button" onClick={() => setIdentityOptions(prev => ({ ...prev, format }))} className={chipClass(identityOptions.format === format)}>
                  {format}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className={`mb-2 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '质量', 'Quality')}</p>
            <div className="flex flex-wrap gap-2">
              {qualityLevelOptions.map(option => (
                <button key={option.value} type="button" onClick={() => setIdentityOptions(prev => ({ ...prev, qualityLevel: option.value }))} className={chipClass(identityOptions.qualityLevel === option.value)}>
                  {t(lang, option.label, option.labelEn)}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (section.id === 'assembly_background') {
      return (
        <div>
          <p className={`mb-2 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '背景', 'Background')}</p>
          <div className="flex flex-wrap gap-2">
            {backgroundModeOptions.map(option => (
              <button key={option.value} type="button" onClick={() => setIdentityOptions(prev => ({ ...prev, backgroundMode: option.value }))} className={chipClass(identityOptions.backgroundMode === option.value)}>
                {t(lang, option.label, option.labelEn)}
              </button>
            ))}
          </div>
        </div>
      );
    }
    if (section.id === 'objective') {
      return (
        <div className="space-y-3">
          <div>
            <p className={`mb-2 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '原创', 'Originality')}</p>
            <div className="flex flex-wrap gap-2">
              {[
                { value: true, label: '原创开', labelEn: 'Original On' },
                { value: false, label: '参考边界', labelEn: 'Reference Boundary' }
              ].map(option => (
                <button key={String(option.value)} type="button" onClick={() => setIdentityOptions(prev => ({ ...prev, originality: option.value }))} className={chipClass(identityOptions.originality === option.value)}>
                  {t(lang, option.label, option.labelEn)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className={`mb-2 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '媒介底座', 'Medium Base')}</p>
            {renderMediumCategorySwitch()}
          </div>
          <div>
            <p className={`mb-1 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>{t(lang, '主风格关键词', 'Primary Style')}</p>
            <div className={`rounded border px-2.5 py-2 text-[12px] font-black ${miniSwitchClass} ${primaryStyleReference ? strongText : mutedText}`}>
              {primaryStyleReference || t(lang, '未选择', 'None')}
            </div>
            <p className={`mt-1.5 text-[11px] leading-5 ${mutedText}`}>
              {t(lang, '来自当前视觉风格里的首个风格词；它只进入目标标题，不替代视觉媒介。', 'Uses the first selected style term from Visual Style; it enters the target line but does not replace the visual medium.')}
            </p>
          </div>
        </div>
      );
    }
    if (section.id === 'compile_medium_rule' || section.id === 'translation_mediumControl') {
      return renderMediumCategorySwitch();
    }
    if (section.id === 'compile_body_form' || section.id === 'translation_bodyFormControl') {
      return (
        <div className="grid grid-cols-2 gap-1.5">
          {bodyFormModeOptions.map(option => (
            <button
              key={option.id}
              type="button"
              onClick={() => setIdentityOptions(prev => ({ ...prev, bodyFormMode: option.id }))}
              className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[10px] font-black uppercase tracking-[0.04em] transition-all ${identityOptions.bodyFormMode === option.id ? 'is-active' : ''}`}
              title={t(lang, option.desc, option.descEn)}
            >
              <span className="truncate">{t(lang, option.shortLabel, option.shortLabelEn)}</span>
            </button>
          ))}
        </div>
      );
    }
    if (section.id === 'compile_world_law') {
      return (
        <div className="grid grid-cols-5 gap-1.5">
          {registerRandomModes.map(mode => (
            <button
              key={mode.id}
              type="button"
              onClick={() => changeFusionMode(mode.id)}
              className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[10px] font-black uppercase tracking-[0.04em] transition-all ${registerRandomMode === mode.id ? 'is-active' : ''}`}
              title={t(lang, mode.desc, mode.descEn)}
            >
              <span className="truncate">{t(lang, mode.label, mode.labelEn)}</span>
            </button>
          ))}
        </div>
      );
    }
    if (section.id === 'compile_variable_definition') {
      return renderVariableSlotSwitches(t(
        lang,
        '这里控制 C01-C10 哪些槽参与对象包；关闭后右侧对象槽与终稿对象模块同步移除。',
        'Controls which C01-C10 slots participate in the content pack; disabled slots are removed from the object result and final object modules.'
      ));
    }
    if (section.id === 'compile_content_protocol') {
      return (
        <button
          type="button"
          onClick={() => setStrictInputFidelity(prev => !prev)}
          className={`w-full rounded-md border px-3 py-2 text-left text-[12px] font-black uppercase tracking-[0.06em] transition-colors ${
            strictInputFidelity
              ? isRetro
                ? 'border-[#85411B]/45 bg-[#85411B]/10 text-[#4b2b14]'
                : 'border-orange-400/45 bg-orange-400/12 text-orange-100'
              : isRetro
                ? 'border-[#85411B]/14 text-[#85411B]/60 hover:border-[#85411B]/28'
                : 'border-white/[0.08] text-zinc-500 hover:border-white/[0.16] hover:text-zinc-300'
          }`}
          title={t(lang, '开启后，输入里的具体可见词条必须进入最合适的 C 槽；关闭时保留宽松编译。', 'When enabled, concrete visible input terms must enter the most suitable C slot; when disabled, loose compilation is kept.')}
        >
          {strictInputFidelity
            ? t(lang, '严格保真：开', 'Strict Fidelity: On')
            : t(lang, '严格保真：关', 'Strict Fidelity: Off')}
        </button>
      );
    }
    if (section.id.startsWith('compile_input_')) {
      if (section.id !== 'compile_input_subject') return null;
      return (
        <div className="mist-concept-instruction-source-grid grid grid-cols-2 gap-2">
          {sourceModes.map(mode => {
            const Icon = mode.icon;
            const selected = sourceMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setSourceMode(mode.id)}
                className={`mist-concept-source-mode-button flex h-10 min-w-0 items-center justify-center gap-2 rounded border px-2.5 text-[12px] font-black uppercase tracking-[0.04em] transition-all ${selected ? 'is-active' : ''}`}
                title={t(lang, mode.label, mode.labelEn)}
              >
                <Icon size={14} className="shrink-0" />
                <span className="min-w-0 truncate">{t(lang, mode.label, mode.labelEn)}</span>
              </button>
            );
          })}
        </div>
      );
    }
    return null;
  };

  const renderTemplatePreview = (preview: 'board' | 'threeView' | 'storyboard' | 'custom', selected: boolean) => {
    const lineClass = isRetro ? 'bg-[#85411B]/70' : 'bg-orange-300/85';
    const panelPreviewClass = isRetro
      ? 'border-[#85411B]/16 bg-[#F6F0E8]'
      : 'border-white/[0.12] bg-[#101010]';
    if (preview === 'board') {
      return (
        <div className={`grid h-full grid-cols-[1.2fr_0.72fr] gap-1.5 rounded-md border p-2 ${panelPreviewClass}`}>
          <div className={`rounded border ${isRetro ? 'border-[#85411B]/24 bg-white/78' : 'border-white/[0.12] bg-white/[0.07]'}`}>
            <div className={`mx-auto mt-3 h-[52%] w-[36%] rounded-full border-2 ${selected ? 'border-orange-400/80' : isRetro ? 'border-[#85411B]/42' : 'border-white/28'}`} />
            <div className={`mx-auto mt-1.5 h-[24%] w-[68%] rounded-sm ${lineClass} opacity-45`} />
          </div>
          <div className="grid grid-rows-3 gap-1.5">
            <div className={`rounded border ${isRetro ? 'border-[#85411B]/18 bg-white/68' : 'border-white/[0.11] bg-white/[0.055]'}`} />
            <div className={`grid grid-cols-2 gap-1 rounded border p-1 ${isRetro ? 'border-[#85411B]/18 bg-white/68' : 'border-white/[0.11] bg-white/[0.055]'}`}>
              <span className={`rounded-full ${lineClass} opacity-75`} />
              <span className={`rounded-full ${lineClass} opacity-42`} />
            </div>
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={`rounded-sm ${lineClass}`} style={{ opacity: 0.32 + index * 0.11 }} />
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (preview === 'threeView') {
      return (
        <div className={`grid h-full grid-cols-3 gap-1.5 rounded-md border p-2 ${panelPreviewClass}`}>
          {['F', 'S', 'B'].map((label, index) => (
            <div key={label} className={`relative rounded border ${isRetro ? 'border-[#85411B]/20 bg-white/72' : 'border-white/[0.12] bg-white/[0.06]'}`}>
              <span className={`absolute left-2 top-1.5 font-mono text-[9px] font-black ${mutedText}`}>{label}</span>
              <div className={`mx-auto mt-7 rounded-full border-2 ${selected ? 'border-orange-400/75' : isRetro ? 'border-[#85411B]/36' : 'border-white/24'} ${index === 1 ? 'h-[48%] w-[30%]' : 'h-[48%] w-[42%]'}`} />
              <div className={`mx-auto mt-1.5 h-[18%] rounded-sm ${lineClass} opacity-38 ${index === 1 ? 'w-[34%]' : 'w-[58%]'}`} />
            </div>
          ))}
        </div>
      );
    }
    if (preview === 'storyboard') {
      return (
        <div className={`grid h-full grid-cols-4 gap-1 rounded-md border p-2 ${panelPreviewClass}`}>
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className={`relative overflow-hidden rounded border ${isRetro ? 'border-[#85411B]/18 bg-white/72' : 'border-white/[0.11] bg-white/[0.055]'}`}>
              <span className={`absolute left-1 top-1 font-mono text-[7px] font-black ${mutedText}`}>{index + 1}</span>
              <span
                className={`absolute h-5 w-3 rounded-full border ${selected ? 'border-orange-400/75' : isRetro ? 'border-[#85411B]/36' : 'border-white/24'}`}
                style={{
                  left: `${28 + (index % 3) * 8}%`,
                  top: `${24 + (index % 4) * 8}%`,
                  transform: `rotate(${-28 + index * 9}deg)`
                }}
              />
              <span
                className={`absolute h-0.5 rounded ${lineClass}`}
                style={{
                  left: `${38 + (index % 2) * 12}%`,
                  top: `${54 + (index % 3) * 7}%`,
                  width: `${24 + (index % 4) * 5}%`,
                  opacity: 0.35 + (index % 4) * 0.1,
                  transform: `rotate(${-18 + index * 6}deg)`
                }}
              />
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className={`grid h-full grid-cols-2 gap-1.5 rounded-md border p-2 ${panelPreviewClass}`}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={`rounded border p-2 ${isRetro ? 'border-[#85411B]/18 bg-white/68' : 'border-white/[0.11] bg-white/[0.055]'}`}>
            <span className={`block h-2 rounded ${lineClass}`} style={{ opacity: 0.4 + (index % 3) * 0.16 }} />
            <span className={`mt-2 block h-1.5 rounded ${lineClass}`} style={{ opacity: 0.26 + (index % 2) * 0.14, width: `${46 + index * 7}%` }} />
          </div>
        ))}
      </div>
    );
  };

  const renderPromptTemplateCard = (card: typeof promptTemplateCards[number], compact = false) => {
    const Icon = card.icon;
    const selected = promptTemplateMode === card.id;
    return (
      <button
        key={card.id}
        type="button"
        onClick={() => {
          setPromptTemplateMode(card.id);
          setIsPromptTemplateLibraryOpen(false);
        }}
        className={`mist-concept-template-card rounded-lg border p-3 text-left transition-all active:scale-[0.99] ${
          selected
            ? isRetro
              ? 'border-[#85411B]/60 bg-white/78'
              : 'border-orange-400/70 bg-[#25150A]'
            : isRetro
              ? 'border-[#85411B]/24 bg-white/62 hover:border-[#85411B]/45'
              : 'border-white/[0.12] bg-[#111111] hover:border-orange-400/45 hover:bg-[#17120F]'
        }`}
      >
        <div className={`grid gap-4 ${compact ? 'grid-cols-[112px_minmax(0,1fr)]' : 'grid-cols-[minmax(150px,0.45fr)_minmax(0,0.55fr)]'}`}>
          <div className={compact ? 'h-[104px] min-w-0' : 'h-[154px] min-w-0'}>
            {renderTemplatePreview(card.preview, selected)}
          </div>
          <div className="min-w-0 py-1">
            <div className="flex items-center gap-2">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border ${selected ? 'border-orange-400/70 bg-orange-400/20 text-orange-100' : isRetro ? 'border-[#85411B]/24 text-[#85411B]/80' : 'border-white/[0.12] text-zinc-400'}`}>
                <Icon size={16} />
              </span>
              <span className={`min-w-0 flex-1 truncate text-[15px] font-black tracking-[0.06em] ${strongText}`}>
                {t(lang, card.label, card.labelEn)}
              </span>
              <span className={`shrink-0 rounded border px-2 py-1 text-[9px] font-black uppercase tracking-[0.1em] ${selected ? accentText : mutedText} ${miniSwitchClass}`}>
                {t(lang, card.badge, card.badgeEn)}
              </span>
            </div>
            <p className={`mt-3 line-clamp-4 text-[12px] leading-5 ${mutedText}`}>
              {t(lang, card.desc, card.descEn)}
            </p>
          </div>
        </div>
      </button>
    );
  };

  const renderPromptTemplatePanel = () => {
    const cleanTemplateLabel = (label: string) => label.replace(/^T\d+\s*/, '');
    return (
    <section className={`mist-concept-template-panel rounded-lg border px-3 py-2.5 ${isRetro ? 'border-[#85411B]/16 bg-white/22' : 'border-orange-500/14 bg-black/20'}`}>
      <div className="flex items-center gap-2">
        <div className={`flex min-w-0 items-center gap-2 text-[14px] font-black uppercase tracking-[0.1em] ${strongText}`}>
          <PanelRight size={16} className={accentText} />
          <span>{t(lang, '律令目标', 'Edict Target')}</span>
        </div>
        <button
          type="button"
          onClick={() => setIsPromptTemplateLibraryOpen(true)}
          className={`group min-w-0 flex-1 rounded-md px-2 py-1 text-left transition-all active:scale-[0.99] ${isRetro ? 'hover:bg-[#85411B]/7' : 'hover:bg-orange-500/8'}`}
          title={t(lang, '进入律令目标页', 'Open Edict Target Library')}
        >
          <div className="flex min-w-0 items-center gap-2">
            <span className={`min-w-0 flex-1 truncate text-[16px] font-black leading-6 transition-colors ${strongText} ${isRetro ? 'group-hover:text-[#85411B]' : 'group-hover:text-orange-100'}`}>
              {t(lang, cleanTemplateLabel(activeTemplateCard.label), cleanTemplateLabel(activeTemplateCard.labelEn))}
            </span>
          </div>
        </button>
      </div>
      {promptTemplateMode === 'CUSTOM' && (
        <div className={`mt-2 rounded-md border px-3 py-2 text-[12px] leading-5 ${softPanelClass} ${mutedText}`}>
          {t(lang, '下一步这里会列出全部可添加律令模块。', 'Next, all addable edict modules will be listed here.')}
        </div>
      )}
      {promptTemplateMode === 'CHARACTER_BOARD_BACKUP' && (
        <div className={`mt-2 rounded-md border px-3 py-2 text-[12px] leading-5 ${softPanelClass} ${mutedText}`}>
          {t(lang, '这是删除/精简前的完整角色身份板副本；当前仍使用完整组件结构。', 'This is the full character-board backup before deletion / simplification; it still uses the complete component structure.')}
        </div>
      )}
      {promptTemplateMode === 'PERFORMANCE_STORYBOARD' && (
        <div className={`mt-2 rounded-md border px-3 py-2 text-[12px] leading-5 ${softPanelClass} ${mutedText}`}>
          {t(lang, '该模板把内容主体 C01-C10 改写为分镜模块：角色引用、身体语法、空间限制、动作词库、输出规格、风格气质、摄影构图、光影终点和标注系统。', 'This template remaps the ten content-core slots into storyboard modules: reference, body grammar, space lock, movement bank, format, mood, camera, lighting ending, and annotation system.')}
        </div>
      )}
    </section>
    );
  };

  const renderInstructionSectionsPanel = (
    title: string,
    titleEn: string,
    description: string,
    descriptionEn: string,
    sections: CharacterIdentityBoardPromptSection[],
    copyText: string,
    activeId?: string | null,
    onSectionClick?: (id: string) => void,
    registerRef?: (id: string, node: HTMLElement | null) => void,
    actions?: React.ReactNode
  ) => (
    <section className={`rounded-lg border p-4 ${softPanelClass}`}>
      <div className="mb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className={`text-2xl font-black uppercase tracking-[0.04em] ${strongText}`}>
              {t(lang, title, titleEn)}
            </h3>
          </div>
          {actions ? (
            <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
              {actions}
            </div>
          ) : null}
        </div>
        <p className={`mt-2 text-[13px] leading-6 ${mutedText}`}>
          {t(lang, description, descriptionEn)}
        </p>
      </div>
      <div className="space-y-3">
        {sections.map((section, index) => {
          const originalIndex = promptSections.findIndex(item => item.id === section.id);
          const displayIndex = originalIndex >= 0 ? originalIndex : index;
          const active = activeId === section.id;
          const controls = renderInstructionComponentControls(section);
          return (
            <article
              key={section.id}
              ref={(node) => registerRef?.(section.id, node)}
              className={`mist-template-prompt-section overflow-hidden rounded-lg border ${
                active
                  ? isRetro
                    ? 'bg-white/58'
                    : 'bg-white/[0.035]'
                  : isRetro
                    ? 'bg-white/50'
                    : 'bg-black/24'
              }`}
              style={{
                borderColor: promptSectionSubtleBorderColor,
                borderLeftColor: section.color,
                borderLeftWidth: 5
              }}
              onClick={() => onSectionClick?.(section.id)}
            >
              <div className={`flex items-center gap-2.5 border-b px-3.5 py-2.5 ${isRetro ? 'border-[#85411B]/10' : 'border-white/[0.06]'}`}>
                <span
                  className="flex h-7 w-9 shrink-0 items-center justify-center rounded-md font-mono text-[11px] font-black text-white shadow-sm"
                  style={{ backgroundColor: section.color }}
                >
                  {String(displayIndex + 1).padStart(2, '0')}
                </span>
                <h4 className={`min-w-0 flex-1 truncate text-[13px] font-black uppercase tracking-[0.1em] ${strongText}`}>
                  {t(lang, section.title, section.titleEn)}
                </h4>
              </div>
              <div className={`grid gap-0 ${controls ? 'xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]' : ''}`}>
                {controls ? (
                  <div className={`border-b px-3.5 py-3.5 xl:border-b-0 xl:border-r ${isRetro ? 'border-[#85411B]/10 bg-white/20' : 'border-white/[0.055] bg-black/18'}`}>
                    {controls}
                  </div>
                ) : null}
                <pre className={`whitespace-pre-wrap px-3 py-3 font-mono text-[13px] leading-7 ${isRetro ? 'text-[#24170f]' : 'text-orange-50'}`}>
                  {section.text}
                </pre>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );

  const renderCompileInstructionPreviewPanel = () => renderInstructionSectionsPanel(
    '编译律令',
    'Compile Edict',
    '内容主体 C01-C10 生成前的真实编译律令，按任务、媒介、裁决、输入来源和输出格式拆成模块。',
    'The actual edict before Content Core C01-C10 generation, split by task, medium, judgment, source input, and output schema.',
    compileInstructionSections,
    compileInstructionOutput,
    undefined,
    undefined,
    undefined,
    <>
      {renderPromptLangToggleButton()}
      {renderPromptCopyButton(copyCompileInstructionOutput)}
    </>
  );

  const renderCinematicStillPromptPanel = () => {
    if (isVideoStoryboardTemplate || isPerformanceStoryboardTemplate) return null;
    return (
      <section className={`mt-3 overflow-hidden rounded-lg border ${softPanelClass}`}>
        <div className={`flex flex-wrap items-center justify-between gap-3 border-b px-3.5 py-2.5 ${isRetro ? 'border-[#85411B]/10' : 'border-white/[0.06]'}`}>
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-9 shrink-0 items-center justify-center rounded-md font-mono text-[11px] font-black text-white shadow-sm" style={{ backgroundColor: edictSectionCategoryColors.output }}>
                FX
              </span>
              <h4 className={`min-w-0 truncate text-[13px] font-black uppercase tracking-[0.1em] ${strongText}`}>
                {t(lang, '电影画面提示词组装', 'Cinematic Still Prompt Assembly')}
              </h4>
            </div>
            <p className={`mt-1.5 text-[11px] leading-5 ${mutedText}`}>
              {t(lang, '轻量调用 C01-C10，不重新编译内容；只把当前对象包包装成单帧电影画面。', 'Lightly calls C01-C10 without recompiling content; wraps the current content pack into a single-frame film still.')}
            </p>
          </div>
          <button
            type="button"
            onClick={copyCinematicStillPromptOutput}
            className={`${compactTopActionButtonClass} justify-center`}
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span>{t(lang, '复制', 'Copy')}</span>
          </button>
        </div>
        <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className={`border-b px-3.5 py-3.5 xl:border-b-0 xl:border-r ${isRetro ? 'border-[#85411B]/10 bg-white/20' : 'border-white/[0.055] bg-black/18'}`}>
            <div className="space-y-2">
              <span className={`inline-flex rounded border px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${accentText}`}>
                {t(lang, '终稿快捷包装', 'Final Wrapper')}
              </span>
              <p className={`text-[12px] leading-6 ${mutedText}`}>
                {t(lang, '适合直接测试电影静帧画面。它会提高行动事件、取景构图、光影氛围和场域压力的权重，并禁止身份板、海报和多视图结构。', 'Useful for quickly testing a cinematic still. It raises action, framing, lighting, and field pressure while banning board, poster, and multi-view structures.')}
              </p>
            </div>
          </div>
          <pre className={`max-h-[520px] overflow-y-auto whitespace-pre-wrap px-3 py-3 font-mono text-[13px] leading-7 custom-scrollbar ${isRetro ? 'text-[#24170f]' : 'text-orange-50'}`}>
            {cinematicStillPromptOutput}
          </pre>
        </div>
      </section>
    );
  };

  const renderModulePromptPreviewPanel = () => renderInstructionSectionsPanel(
    '终稿指令',
    'Final Instruction',
    '当前模板的最终拼装律令，按模块编号与颜色显示。',
    'Final assembled edict for the current template, shown by module number and color.',
    visiblePromptSections,
    output,
    activePromptSection?.id,
    setActivePromptSectionId,
    (id, node) => { promptSectionRefs.current[id] = node; },
    <>
      {renderPromptLangToggleButton()}
      {renderPromptCopyButton(copyOutput)}
    </>
  );

  const renderVideoStoryboardBlueprintPanel = () => {
    if (promptTemplateMode !== 'VIDEO_STORYBOARD') {
      const filledCount = activeVariableMeta.filter(meta => variables[meta.key].trim()).length;
      return (
        <section className={`rounded-lg border p-4 ${softPanelClass}`}>
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className={`font-mono text-[10px] font-black uppercase tracking-[0.3em] ${mutedText}`}>
                Compile Result
              </p>
              <h3 className={`mt-2 text-2xl font-black uppercase tracking-[0.04em] ${strongText}`}>
                {t(lang, '对象编译结果', 'Object Compile Result')}
              </h3>
              <p className={`mt-2 max-w-4xl text-[13px] leading-6 ${mutedText}`}>
                {t(lang, '这里显示当前开启的内容主体 C01-C10 结果槽；左侧开关关闭的槽不会进入对象编译结果和终稿对象模块。', 'This page shows the currently enabled Content Core C01-C10 result slots; disabled slots do not enter the object result or final object modules.')}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setLocalizedVariables(createEmptyLocalizedVariables());
                setCopied(false);
              }}
              className={`${compactTopActionButtonClass} justify-center`}
            >
              <Trash2 size={13} />
              <span>{t(lang, '清空', 'Clear')}</span>
            </button>
          </div>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className={`rounded border px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${accentText}`}>
              {t(lang, '对象 / 内容主体 C01-C10', 'Object / Content Core C01-C10')}
            </span>
            <span className={`rounded border px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${mutedText}`}>
              {filledCount}/{activeVariableMeta.length} objects
            </span>
          </div>
          <div className={`mb-3 rounded-lg border p-3 ${softPanelClass}`}>
            {renderVariableSlotSwitches(t(
              lang,
              '当前对象结果只显示开启的 C 槽；被关闭的槽保留文本但暂不参与输出。',
              'The object result only shows enabled C slots; disabled slots keep their text but are excluded from output.'
            ))}
          </div>
          <div className="grid gap-3 xl:grid-cols-2">
            {activeVariableMeta.map((meta, index) => {
              const value = variables[meta.key];
              return (
                <article key={meta.key} className={`rounded-lg border p-3 ${softPanelClass}`}>
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="flex h-6 w-8 shrink-0 items-center justify-center rounded-md bg-[#38BDF8] font-mono text-[10px] font-black text-white shadow-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className={`rounded border px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${accentText}`}>
                          OBJECT
                        </span>
                      </div>
                      <h4 className={`mt-2 text-[15px] font-black uppercase tracking-[0.08em] ${strongText}`}>
                        {t(lang, `对象 / ${meta.label}`, `Object / ${meta.labelEn}`)}
                      </h4>
                      <p className={`mt-1 text-[12px] leading-5 ${mutedText}`}>
                        {t(lang, meta.hint, meta.hintEn)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleVariableSlot(meta.key)}
                      className={activeVariableSlotMiniButtonClass}
                      title={t(lang, '关闭这个 C 槽', 'Disable this C slot')}
                    >
                      <Check size={11} />
                      <span>ON</span>
                      <span className={isRetro ? 'text-[#85411B]/55' : 'text-sky-100/55'}>{value.trim() ? 'FILLED' : 'EMPTY'}</span>
                    </button>
                  </div>
                  <textarea
                    value={value}
                    onChange={(event) => updateVariable(meta.key, event.target.value)}
                    placeholder={t(lang, '等待编译生成，或手动填写这个对象槽。', 'Waiting for compile output, or manually fill this object slot.')}
                    className={`min-h-[150px] w-full resize-y rounded-md border px-3 py-3 font-mono text-[12px] leading-6 outline-none ${inputClass}`}
                  />
                </article>
              );
            })}
          </div>
        </section>
      );
    }

    const generatedModules = VIDEO_STORYBOARD_COMPOSER_MODULES.filter(item => item.role === 'generated' || item.role === 'sequence');
    const filledCount = generatedModules.filter(item => videoStoryboardValues[item.id].trim()).length;
    return (
      <section className={`rounded-lg border p-4 ${softPanelClass}`}>
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className={`font-mono text-[10px] font-black uppercase tracking-[0.3em] ${mutedText}`}>
              Compile Result
            </p>
            <h3 className={`mt-2 text-2xl font-black uppercase tracking-[0.04em] ${strongText}`}>
              {t(lang, `${VIDEO_STORYBOARD_BLUEPRINT.targetCode} 分镜编译结果`, `${VIDEO_STORYBOARD_BLUEPRINT.targetCode} Storyboard Compile Result`)}
            </h3>
            <p className={`mt-2 max-w-4xl text-[13px] leading-6 ${mutedText}`}>
              {t(lang, '这里只查看编译页需要生成的结果模块：素材、动作、逐格分镜、效果、镜头和环境。终稿页才负责完整 12 模块拼装与开关。', 'This page only reviews modules that the compile layer needs to generate: asset, motion, panel progression, effects, camera, and environment. The final page handles full 12-module assembly and toggles.')}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-end gap-2">
            {VIDEO_STORYBOARD_REFERENCE_SAMPLES.map(sample => (
              <button
                key={sample.id}
                type="button"
                onClick={() => applyVideoStoryboardReferenceSample(sample)}
                className={`${compactTopActionButtonClass} justify-center`}
                title={t(lang, sample.description, sample.descriptionEn)}
              >
                <BookOpen size={13} />
                <span>{t(lang, sample.name, sample.nameEn)}</span>
              </button>
            ))}
            <button
              type="button"
              onClick={clearVideoStoryboardValues}
              className={`${compactTopActionButtonClass} justify-center`}
            >
              <Trash2 size={13} />
              <span>{t(lang, '清空', 'Clear')}</span>
            </button>
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          <span className={`rounded border px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${accentText}`}>
            {t(lang, VIDEO_STORYBOARD_BLUEPRINT.processingObject, VIDEO_STORYBOARD_BLUEPRINT.processingObjectEn)}
          </span>
          <span className={`rounded border px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${mutedText}`}>
            {filledCount}/{generatedModules.length} generated
          </span>
        </div>

        <div className="grid gap-3 xl:grid-cols-2">
          {generatedModules.map((module, index) => {
            const value = videoStoryboardValues[module.id];
            return (
              <article key={module.id} className={`rounded-lg border p-3 ${softPanelClass}`}>
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex h-6 w-8 shrink-0 items-center justify-center rounded-md font-mono text-[10px] font-black text-white shadow-sm" style={{ backgroundColor: edictSectionCategoryColors.object }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`rounded border px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${accentText}`}>
                        {module.role}
                      </span>
                    </div>
                    <h4 className={`mt-2 text-[15px] font-black uppercase tracking-[0.08em] ${strongText}`}>
                      {t(lang, module.name, module.nameEn)}
                    </h4>
                    <p className={`mt-1 text-[12px] leading-5 ${mutedText}`}>
                      {t(lang, module.description, module.descriptionEn)}
                    </p>
                  </div>
                  <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] font-black ${miniSwitchClass} ${value.trim() ? accentText : mutedText}`}>
                    {value.trim() ? 'FILLED' : 'EMPTY'}
                  </span>
                </div>
                <textarea
                  value={value}
                  onChange={(event) => updateVideoStoryboardValue(module.id, event.target.value)}
                  placeholder={t(lang, '等待编译生成，或从参考模块填入。', 'Waiting for compile output, or fill from a reference module.')}
                  className={`min-h-[150px] w-full resize-y rounded-md border px-3 py-3 font-mono text-[12px] leading-6 outline-none ${inputClass}`}
                />
              </article>
            );
          })}
        </div>
      </section>
    );
  };

  const renderSourceModePanel = () => (
    <section className={`rounded-lg border p-3 ${softPanelClass}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className={sidebarModuleTitleClass}>
          <FileText size={16} className={accentText} />
          <span>{t(lang, '输入来源', 'Input Source')}</span>
        </div>
        <span className={paramsModuleMetaClass}>
          {t(lang, activeSourceMode.label, activeSourceMode.labelEn)}
        </span>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        {renderSourceModeSwitch()}
      </div>
    </section>
  );

  const renderContentIntentPanel = () => {
    const activeIntent = contentIntentRoute === 'AUTO'
      ? lastContentIntentPreset
      : contentIntentPresets.find(preset => preset.id === contentIntentRoute);
    return (
      <section className={`rounded-lg border p-3 ${softPanelClass}`}>
        <div className="mb-2 flex items-center justify-between gap-3">
          <div className={sidebarModuleTitleClass}>
            <Wand2 size={16} className={accentText} />
            <span>{t(lang, '内容意图', 'Content Intent')}</span>
          </div>
          <span className={paramsModuleMetaClass}>
            {contentIntentRouteLabel()}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsContentIntentPanelOpen(true)}
          className={`mist-concept-source-mode-button flex h-9 w-full min-w-0 items-center justify-between gap-2 rounded border px-3 text-left text-[11px] font-black uppercase tracking-[0.04em] transition-all ${isContentIntentPanelOpen ? 'is-active' : ''}`}
          title={t(lang, '打开内容意图随机逻辑', 'Open content intent random logic')}
        >
          <span className="min-w-0 truncate">{contentIntentRouteLabel()}</span>
          <SlidersHorizontal size={13} className="shrink-0" />
        </button>
        {activeIntent ? (
          <p className={`mt-2 line-clamp-2 text-[11px] font-medium leading-4 ${mutedText}`}>
            {t(lang, `${activeIntent.label}会协调主体、场域和光影。`, `${activeIntent.labelEn} coordinates subject, field, and lighting.`)}
          </p>
        ) : null}
      </section>
    );
  };

  const renderTemplateQuickControlsPanel = () => (
    <section className={`rounded-lg border p-3 ${softPanelClass}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className={sidebarModuleTitleClass}>
          <SlidersHorizontal size={16} className={accentText} />
          <span>{t(lang, '终稿协议', 'Final Protocol')}</span>
        </div>
        <span className={paramsModuleMetaClass}>
          {promptTemplateMode === 'GRID_BOARD' ? getGridLayoutLabel(identityOptions.gridLayout, lang) : identityOptions.format}
        </span>
      </div>
      {promptTemplateMode === 'GRID_BOARD' && (
        <div className="mb-2 space-y-2">
          <div>
            <p className={`mb-1.5 text-[10px] font-black uppercase tracking-[0.14em] ${mutedText}`}>
              {t(lang, '宫格布局', 'Grid Layout')}
            </p>
            <div className="grid grid-cols-4 gap-1">
              {gridLayoutOptions.map(layout => (
                <button
                  key={layout}
                  type="button"
                  onClick={() => setIdentityOptions(prev => ({ ...prev, gridLayout: layout }))}
                  className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-1.5 text-[10px] font-black uppercase tracking-[0.03em] transition-all ${identityOptions.gridLayout === layout ? 'is-active' : ''}`}
                  title={getGridLayoutLabel(layout, lang)}
                >
                  <span className="truncate">{layout}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className={`mb-1.5 text-[10px] font-black uppercase tracking-[0.14em] ${mutedText}`}>
              {t(lang, '内容对象', 'Content Object')}
            </p>
            <div className="grid grid-cols-4 gap-1">
              {gridContentObjectOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setIdentityOptions(prev => ({ ...prev, gridContentObject: option.value }))}
                  className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-1.5 text-[10px] font-black uppercase tracking-[0.03em] transition-all ${identityOptions.gridContentObject === option.value ? 'is-active' : ''}`}
                >
                  <span className="truncate">{t(lang, option.label, option.labelEn)}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className={`mb-1.5 text-[10px] font-black uppercase tracking-[0.14em] ${mutedText}`}>
              {t(lang, '变化轴', 'Variation Axis')}
            </p>
            <div className="grid grid-cols-5 gap-1">
              {gridVariationAxisOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setIdentityOptions(prev => ({ ...prev, gridVariationAxis: option.value }))}
                  className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-1.5 text-[10px] font-black uppercase tracking-[0.03em] transition-all ${identityOptions.gridVariationAxis === option.value ? 'is-active' : ''}`}
                >
                  <span className="truncate">{t(lang, option.label, option.labelEn)}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <button
              type="button"
              onClick={() => setIdentityOptions(prev => ({ ...prev, gridNumbering: !prev.gridNumbering }))}
              className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[10px] font-black uppercase tracking-[0.04em] transition-all ${identityOptions.gridNumbering ? 'is-active' : ''}`}
            >
              <span className="truncate">{identityOptions.gridNumbering ? t(lang, '编号开', 'Number On') : t(lang, '编号关', 'Number Off')}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                const modes: IdentityBoardOptions['gridTitleMode'][] = ['NONE', 'PLAIN', 'ARTISTIC'];
                const next = modes[(modes.indexOf(identityOptions.gridTitleMode) + 1) % modes.length];
                setIdentityOptions(prev => ({ ...prev, gridTitleMode: next }));
              }}
              className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[10px] font-black uppercase tracking-[0.04em] transition-all ${identityOptions.gridTitleMode !== 'NONE' ? 'is-active' : ''}`}
            >
              <span className="truncate">
                {identityOptions.gridTitleMode === 'ARTISTIC' ? t(lang, '艺术标题', 'Art Title') : identityOptions.gridTitleMode === 'PLAIN' ? t(lang, '普通标题', 'Plain Title') : t(lang, '无标题', 'No Title')}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIdentityOptions(prev => ({ ...prev, gridBorderMode: !prev.gridBorderMode }))}
              className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[10px] font-black uppercase tracking-[0.04em] transition-all ${identityOptions.gridBorderMode ? 'is-active' : ''}`}
            >
              <span className="truncate">{identityOptions.gridBorderMode ? t(lang, '边框开', 'Border On') : t(lang, '边框关', 'Border Off')}</span>
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-1">
        <button
          type="button"
          onClick={() => {
            const index = boardFormatOptions.indexOf(identityOptions.format);
            const next = boardFormatOptions[(index + 1) % boardFormatOptions.length];
            setIdentityOptions(prev => ({ ...prev, format: next }));
          }}
          className="mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[12px] font-black uppercase tracking-[0.06em] transition-all is-active"
        >
            <span className="truncate">
              {promptTemplateMode === 'GRID_BOARD' ? getGridLayoutLabel(identityOptions.gridLayout, lang) : identityOptions.format}
            </span>
        </button>
        <button
          type="button"
          onClick={() => {
            const index = backgroundModeOptions.findIndex(option => option.value === identityOptions.backgroundMode);
            const next = backgroundModeOptions[(index + 1) % backgroundModeOptions.length]?.value || 'OFF_WHITE';
            setIdentityOptions(prev => ({ ...prev, backgroundMode: next }));
          }}
          className="mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[12px] font-black uppercase tracking-[0.06em] transition-all is-active"
        >
          <span className="truncate">
            {t(lang, backgroundModeOptions.find(option => option.value === identityOptions.backgroundMode)?.label || '柔白', backgroundModeOptions.find(option => option.value === identityOptions.backgroundMode)?.labelEn || 'Off White')}
          </span>
        </button>
      </div>
      <button
        type="button"
        onClick={applyPerformanceStoryboardSample}
        className={`mt-2 flex h-9 w-full min-w-0 items-center justify-center gap-2 rounded border px-3 text-[12px] font-black uppercase tracking-[0.06em] transition-all active:scale-[0.99] ${
          isPerformanceStoryboardTemplate
            ? isRetro
              ? 'border-[#85411B]/48 bg-[#85411B]/8 text-[#85411B]'
              : 'border-orange-400/60 bg-orange-500/12 text-orange-100'
            : isRetro
              ? 'border-[#85411B]/22 text-[#85411B] hover:bg-[#85411B]/8'
              : 'border-orange-500/22 text-zinc-500 hover:border-orange-500/60 hover:bg-orange-500/10 hover:text-orange-100'
        }`}
      >
        <Clapperboard size={14} />
        <span className="truncate">{t(lang, '应用当代舞分镜范本', 'Apply Dance Storyboard Sample')}</span>
      </button>
    </section>
  );

  const renderPromptTemplateLibraryModal = () => (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/86 px-5 py-6 backdrop-blur-md">
      <div className={`flex h-[88vh] w-full max-w-7xl flex-col overflow-hidden rounded-xl border shadow-2xl ${
        isRetro
          ? 'border-[#85411B]/28 bg-[#EFE9E0] text-[#24170f]'
          : 'border-orange-400/24 bg-[#080705] text-zinc-100 shadow-[0_28px_90px_rgba(0,0,0,0.74)]'
      }`}>
        <div className={`flex shrink-0 items-start justify-between gap-4 border-b px-7 py-6 ${isRetro ? 'border-[#85411B]/18 bg-[#F8F1E8]' : 'border-orange-400/12 bg-[#0E0B08]'}`}>
          <div>
            <p className={`font-mono text-[10px] font-black uppercase tracking-[0.36em] ${mutedText}`}>
              Edict Library
            </p>
            <h2 className={`mt-2 font-serif text-4xl font-black tracking-[0.04em] ${strongText}`}>
              {t(lang, '选择律令目标', 'Choose Edict Target')}
            </h2>
            <p className={`mt-2 max-w-3xl text-[13px] leading-6 ${mutedText}`}>
              {t(
                lang,
                '这里以后会承载上百到上千个律令目标；左侧只保留当前入口，具体选择进入这里完成。',
                'This library will later hold hundreds or thousands of edict targets; the sidebar only keeps the current entry point.'
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsPromptTemplateLibraryOpen(false)}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md border transition-colors ${isRetro ? 'border-[#85411B]/24 text-[#85411B] hover:bg-[#85411B]/8' : 'border-white/[0.14] bg-black/40 text-zinc-300 hover:border-orange-400/50 hover:text-orange-100'}`}
            aria-label={t(lang, '关闭模版选择', 'Close template library')}
          >
            <X size={20} />
          </button>
        </div>
        <div className={`shrink-0 border-b px-7 py-4 ${isRetro ? 'border-[#85411B]/14 bg-[#F4EDE4]' : 'border-white/[0.08] bg-[#0A0908]'}`}>
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
            <div className={`rounded-md border px-4 py-3 text-[13px] ${inputClass}`}>
              {t(lang, '搜索 / 分类 / 标签筛选占位', 'Search / category / tag filters placeholder')}
            </div>
            <div className="flex gap-2 overflow-x-auto custom-scrollbar">
              {[t(lang, '全部', 'All'), t(lang, '角色', 'Character'), t(lang, '图像', 'Image'), t(lang, '自定义', 'Custom')].map((label, index) => (
                <button
                  key={label}
                  type="button"
                  className={`h-11 shrink-0 rounded-md border px-4 text-[11px] font-black uppercase tracking-[0.12em] transition-colors ${
                    index === 0
                      ? 'border-orange-400/70 bg-orange-400/18 text-orange-100'
                      : isRetro
                        ? 'border-[#85411B]/24 text-[#85411B]/76 hover:bg-[#85411B]/8'
                        : 'border-white/[0.12] bg-[#121212] text-zinc-300 hover:border-orange-400/45 hover:text-orange-100'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-7 custom-scrollbar">
          <div className="grid gap-5 xl:grid-cols-2 2xl:grid-cols-3">
            {promptTemplateCards.map(card => renderPromptTemplateCard(card, false))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderWorldLawPanel = () => (
    <section className={`mist-concept-world-law-panel rounded-lg border p-3 ${softPanelClass}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className={sidebarModuleTitleClass}>
          <Fingerprint size={16} className={accentText} />
          <span>{t(lang, '世界法则', 'World Law')}</span>
        </div>
        <span className={paramsModuleMetaClass}>
          {t(
            lang,
            registerRandomModes.find(mode => mode.id === registerRandomMode)?.label || '同构折译',
            registerRandomModes.find(mode => mode.id === registerRandomMode)?.labelEn || 'L2 Translate'
          )}
        </span>
      </div>
      <div className="grid grid-cols-5 gap-1">
        {registerRandomModes.map(mode => (
          <button
            key={mode.id}
            type="button"
            onClick={() => changeFusionMode(mode.id)}
            className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-1.5 text-[10px] font-black uppercase tracking-[0.03em] transition-all ${registerRandomMode === mode.id ? 'is-active' : ''}`}
            title={t(lang, mode.desc, mode.descEn)}
          >
            <span className="truncate">{t(lang, mode.label, mode.labelEn)}</span>
          </button>
        ))}
      </div>
    </section>
  );

  const updateState = useCallback((nextState: NarrativeFieldState) => {
    startTransition(() => {
      onChange(nextState);
    });
  }, [onChange]);

  const formatYear = (year: number, useSuffix = false) => {
    if (year < 0) return lang === 'EN' ? `${Math.abs(year)} BC` : `公元前${Math.abs(year)}${useSuffix ? '年' : ''}`;
    return lang === 'EN' ? `${year}` : `公元${year}${useSuffix ? '年' : ''}`;
  };

  const formatTimeAnchor = (value: string, useSuffix = false) => {
    if (!value) return '';
    const trimmed = value.trim();
    if (/^-?\d+$/.test(trimmed)) return formatYear(Number(trimmed), useSuffix);
    return value;
  };

  const clampTimelineYear = (year: number) => (
    Math.min(TIMELINE_YEAR_MAX, Math.max(TIMELINE_YEAR_MIN, Math.trunc(year)))
  );
  const selectableSur3Eras = SUR3_ERAS.filter(era => era.id !== 'future');

  const normalizeTimeAnchorLabel = (value: string): string => (
    value.trim().replace(/\s+/g, '').replace(/[_-]+/g, '').replace(/年$/, '').toLowerCase()
  );

  const isSelectedSur3Era = (era: typeof SUR3_ERAS[number]) => {
    if (!selectedTimeAnchor) return false;
    const normalized = normalizeTimeAnchorLabel(selectedTimeAnchor);
    return [era.id, era.name, era.nameEn].some(label => normalizeTimeAnchorLabel(label) === normalized);
  };

  const parseTimelineTimeAnchorInput = (value: string): number | string | null => {
    const compact = value.trim().replace(/\s+/g, '').replace(/年$/, '');
    if (!compact) return null;

    const normalized = normalizeTimeAnchorLabel(value);
    const matchedEra = SUR3_ERAS.find(era => (
      [era.id, era.name, era.nameEn].some(label => normalizeTimeAnchorLabel(label) === normalized)
    ));
    if (matchedEra) return lang === 'EN' ? matchedEra.nameEn : matchedEra.name;

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

  const getPresetText = (value: string, presets: Array<{ cn: string; en: string }>) => {
    const preset = presets.find(item => item.cn === value || item.en === value);
    if (!preset) return value;
    return lang === 'EN' ? preset.en : preset.cn;
  };

  const getCoordinateLibraryItem = (tag: string) => (
    getLibraryCategory('cd_spacetime_coordinate')?.items.find(item => item.name === tag || item.nameEn === tag || item.id === tag)
  );

  const applySpacetimeCoordinateItemToState = (nextState: NarrativeFieldState, tag: string) => {
    const item = getCoordinateLibraryItem(tag);
    const coordinateItem = item as (LibraryItemDef & {
      coordinateSpaceCn?: string;
      coordinateSpaceEn?: string;
      coordinateTime?: string | null;
      coordinateYear?: number | null;
      coordinateTimeMode?: 'year' | 'era' | 'auto';
    }) | undefined;
    if (!coordinateItem) return false;

    if (!isSpaceAnchorValueLocked) {
      const space = lang === 'EN'
        ? coordinateItem.coordinateSpaceEn
        : coordinateItem.coordinateSpaceCn;
      nextState['cd_space_anchor_exact'] = space ? [space] : [];
    }

    if (!isTimeAnchorValueLocked) {
      if (coordinateItem.coordinateTimeMode === 'year' && typeof coordinateItem.coordinateYear === 'number') {
        nextState['cd_time_anchor_exact'] = [String(clampTimelineYear(coordinateItem.coordinateYear))];
      } else if (coordinateItem.coordinateTime) {
        nextState['cd_time_anchor_exact'] = [coordinateItem.coordinateTime];
      } else {
        nextState['cd_time_anchor_exact'] = [];
      }
      setSpacetimeYearInputDraft(null);
      setSpacetimeYearInputInvalid(false);
    }

    updateSpacetimeCoordinateDisplay(nextState);
    return true;
  };

  const getSpacetimeDisplay = (space = selectedSpaceAnchor, time = selectedTimeAnchor) => {
    const spaceDisplay = space ? getPresetText(space, SUR3_SPACE_ANCHOR_PRESETS) : '';
    if (time) {
      return lang === 'EN'
        ? `${formatTimeAnchor(time)}${spaceDisplay ? ` ${spaceDisplay}` : ''}`
        : `${formatTimeAnchor(time, true)}${spaceDisplay}`;
    }
    if (spaceDisplay) return `${spaceDisplay} (AUTO)`;
    return '';
  };

  const updateSpacetimeCoordinateDisplay = (
    nextState: NarrativeFieldState,
    space = nextState['cd_space_anchor_exact']?.[0] || '',
    time = nextState['cd_time_anchor_exact']?.[0]?.trim() || ''
  ) => {
    const display = getSpacetimeDisplay(space, time);
    nextState['cd_spacetime_coordinate'] = display ? [display] : [];
  };

  const updateSpacetimeCoordinate = (space?: string | null, time?: number | string | null) => {
    const nextState = { ...fieldState };
    let changed = false;

    if (space !== undefined && !isSpaceAnchorValueLocked) {
      nextState['cd_space_anchor_exact'] = space ? [space] : [];
      changed = true;
    }

    if (time !== undefined && !isTimeAnchorValueLocked) {
      nextState['cd_time_anchor_exact'] = time === null
        ? []
        : typeof time === 'number'
          ? [String(clampTimelineYear(time))]
          : [time];
      setSpacetimeYearInputDraft(null);
      setSpacetimeYearInputInvalid(false);
      changed = true;
    }

    if (!changed) return;
    updateSpacetimeCoordinateDisplay(nextState);
    updateState(nextState);
  };

  const commitSpacetimeYearInput = (value: string) => {
    if (isTimeAnchorValueLocked) return;
    const parsedTimeAnchor = parseTimelineTimeAnchorInput(value);
    if (parsedTimeAnchor === null) {
      if (!value.trim()) {
        updateSpacetimeCoordinate(undefined, null);
        setSpacetimeYearInputDraft(null);
        setSpacetimeYearInputInvalid(false);
      } else {
        setSpacetimeYearInputInvalid(true);
      }
      return;
    }

    updateSpacetimeCoordinate(
      undefined,
      typeof parsedTimeAnchor === 'number' ? clampTimelineYear(parsedTimeAnchor) : parsedTimeAnchor
    );
    setSpacetimeYearInputDraft(null);
    setSpacetimeYearInputInvalid(false);
  };

  const handleSpacetimeRandomSpace = () => {
    if (isSpaceAnchorValueLocked) return;
    const preset = SUR3_SPACE_ANCHOR_PRESETS[Math.floor(Math.random() * SUR3_SPACE_ANCHOR_PRESETS.length)];
    updateSpacetimeCoordinate(lang === 'EN' ? preset.en : preset.cn, undefined);
  };

  const handleSpacetimeRandomTime = () => {
    if (isTimeAnchorValueLocked) return;
    const preset = getRandomSur3CoordinatePreset(lang === 'EN' ? 'EN' : 'CN');
    updateSpacetimeCoordinate(undefined, preset.timeMode === 'era' ? (preset.time || null) : preset.year);
    setSpacetimeYearInputDraft(null);
    setSpacetimeYearInputInvalid(false);
  };

  const handleSpacetimeRandomAll = () => {
    const preset = getRandomSur3CoordinatePreset(lang === 'EN' ? 'EN' : 'CN');
    updateSpacetimeCoordinate(
      isSpaceAnchorValueLocked ? undefined : (lang === 'EN' ? preset.spaceEn : preset.spaceCn),
      isTimeAnchorValueLocked ? undefined : (preset.timeMode === 'era' ? (preset.time || null) : preset.year)
    );
    if (!isTimeAnchorValueLocked) {
      setSpacetimeYearInputDraft(null);
      setSpacetimeYearInputInvalid(false);
    }
  };

  const handleSpacetimeReset = () => {
    updateSpacetimeCoordinate(isSpaceAnchorValueLocked ? undefined : null, isTimeAnchorValueLocked ? undefined : null);
    if (!isTimeAnchorValueLocked) {
      setSpacetimeYearInputDraft(null);
      setSpacetimeYearInputInvalid(false);
    }
  };

  const handleSpacetimeYearInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      commitSpacetimeYearInput(event.currentTarget.value);
      event.currentTarget.blur();
    }
    if (event.key === 'Escape') {
      setSpacetimeYearInputDraft(null);
      setSpacetimeYearInputInvalid(false);
      event.currentTarget.blur();
    }
  };

  const closeSpacetimeModal = () => {
    setSpacetimeYearInputDraft(null);
    setSpacetimeYearInputInvalid(false);
    setIsSpacetimeModalOpen(false);
  };

  const handleSpacetimeToggleLock = () => {
    const targets = [
      ['cd_space_anchor_exact', selectedSpaceAnchor, isSpaceAnchorValueLocked],
      ['cd_time_anchor_exact', selectedTimeAnchor, isTimeAnchorValueLocked],
    ] as const;
    const selectedTargets = targets.filter(([, value]) => value);
    if (!selectedTargets.length) {
      onToggleLock('cd_spacetime_coordinate');
      return;
    }
    const shouldUnlock = selectedTargets.every(([, , locked]) => locked);
    selectedTargets.forEach(([blockId, value, locked]) => {
      if (shouldUnlock === locked) onToggleTagLock(blockId, value);
    });
  };

  const getBilingualText = (text: string) => {
    const match = text.match(/\((.*?)\)/);
    return lang === 'EN' && match ? match[1].trim() : text.split('(')[0].trim();
  };

  const syncPaletteHex = (tag?: string) => {
    if (!tag) {
      onPaletteChange?.(Array(7).fill(""));
      return;
    }
    const preset = AES_COLOR_PRESETS.find(item => item.name === tag || item.id === tag);
    if (!preset) return;
    const next = [...preset.colors];
    while (next.length < 7) next.push("");
    onPaletteChange?.(next.slice(0, 7));
  };

  const getItemDetails = (tagName: string, blockId?: string) => {
    if (blockId === 'cd_color_palette') {
      return AES_COLOR_PRESETS.find(item => item.name === tagName || item.id === tagName) || null;
    }
    if (blockId && conceptCustomItemsByBlock[blockId]) {
      const customItem = conceptCustomItemsByBlock[blockId].find(item => item.name === tagName || item.id === tagName || item.nameEn === tagName);
      if (customItem) return customItem;
    }
    const simpleTag = tagName.split('(')[0].trim();
    const matchItem = (item: LibraryItemDef) => (
      item.name === tagName ||
      item.id === tagName ||
      item.nameEn === tagName ||
      item.name.split('(')[0].trim() === simpleTag
    );
    if (blockId) {
      const category = scopedLibraryMap.get(blockId);
      const scopedMatch = category?.items.find(matchItem);
      if (scopedMatch) return scopedMatch;
    }
    return scopedLibraries.flatMap(category => category.items).find(matchItem) || null;
  };
  const getLibraryCategory = (blockId: string) => scopedLibraryMap.get(blockId);
  const matchesGroupPrefix = (item: LibraryItemDef, groupPrefixes?: string[]) => {
    if (!groupPrefixes || groupPrefixes.length === 0) return false;
    const group = item.group || '';
    return groupPrefixes.some(prefix => group.startsWith(prefix));
  };
  const isFashionCoreItem = (item: LibraryItemDef) => item.id.startsWith('cd_fashion_') || matchesGroupPrefix(item, fashionCoreGroupPrefixes);
  const allowedByIdsOrGroups = (item: LibraryItemDef, ids?: string[], groupPrefixes?: string[]) => (
    Boolean(ids?.includes(item.id)) || matchesGroupPrefix(item, groupPrefixes)
  );
  const withContextualHumanRegisterGroup = (blockId: string, item: LibraryItemDef): LibraryItemDef => {
    if (!isHumanRegisterFilteringActive) return item;
    if (humanRegister === 'FASHION') {
      if (!fashionContextualBlockIds.includes(blockId)) return item;
      return isItemAllowedForHumanRegister(blockId, item)
        ? item
        : { ...item, group: borrowedDesignEvidenceGroup.group, groupEn: borrowedDesignEvidenceGroup.groupEn };
    }
    if (!designEvidenceBlockIds.includes(blockId)) return item;
    const registerMap = contextualDesignEvidenceGroups[humanRegister]?.[blockId];
    if (!registerMap) return item;
    const matchedPrefix = Object.keys(registerMap).find(prefix => (item.group || '').startsWith(prefix));
    if (!matchedPrefix) return item;
    const nextGroup = registerMap[matchedPrefix];
    return {
      ...item,
      group: nextGroup.group,
      groupEn: nextGroup.groupEn
    };
  };
  const isHumanRegisterFilteringActive = false;
  const isHumanRegisterWeightedRandomActive = isHumanRegisterFilteringActive;
  const isItemAllowedForHumanRegister = (blockId: string, item: LibraryItemDef) => {
    if (!isHumanRegisterFilteringActive) return true;
    const rules = humanRegisterRules[humanRegister];
    if (humanRegister === 'FASHION' && fashionContextualBlockIds.includes(blockId)) {
      return isFashionCoreItem(item) || allowedByIdsOrGroups(item, rules.translationIds, rules.translationGroups);
    }
    if (blockId === 'cd_world_register') return rules.worldIds.includes(item.id);
    if (blockId === 'cd_identity_seed') return rules.identityIds.includes(item.id);
    if (blockId === 'cd_design_translation') return allowedByIdsOrGroups(item, rules.translationIds, rules.translationGroups);
    if (blockId === 'cd_costume_logic') return rules.costumeIds.includes(item.id);
    if (blockId === 'cd_costume_system') return matchesGroupPrefix(item, rules.costumeSystemGroups);
    if (blockId === 'cd_material_evidence') return matchesGroupPrefix(item, rules.materialEvidenceGroups);
    if (blockId === 'cd_prop_anchor') return matchesGroupPrefix(item, rules.propAnchorGroups);
    if (blockId === 'cd_symbol_system') return matchesGroupPrefix(item, rules.symbolSystemGroups);
    if (blockId === 'cd_wear_trace') return matchesGroupPrefix(item, rules.wearTraceGroups);
    if (blockId === 'cd_body_features') return matchesGroupPrefix(item, rules.bodyFeatureGroups);
    if (blockId === 'cd_surface_material') {
      return matchesGroupPrefix(item, rules.surfaceGroups) || Boolean(rules.surfaceIds?.includes(item.id));
    }
    if (blockId === 'cd_occupation') return allowedByIdsOrGroups(item, rules.occupationIds, rules.occupationGroups);
    if (blockId === 'cd_persona') return allowedByIdsOrGroups(item, rules.personaIds, rules.personaGroups);
    return true;
  };
  const isItemVisibleForObjectRoute = (item: LibraryItemDef) => {
    void item;
    return true;
  };
  const isLibraryItemVisible = (item: LibraryItemDef) => (
    (isAdmin || !(item as any).adminOnly) && isItemVisibleForObjectRoute(item)
  );
  const lexiconAxisFilterTags = {
    ...effectiveKeywordTags,
    categoryTags: worldAxisState.genreAllow,
    creatureTaxonomyTags: worldAxisState.creatureTaxonomyAllow
  };
  const getLexiconAxisFilterTagsForBlock = (blockId?: string) => (
    blockId && blockUsesCreatureTaxonomyFilter(blockId)
      ? lexiconAxisFilterTags
      : { ...lexiconAxisFilterTags, creatureTaxonomyTags: [] }
  );
  const blockIsLexiconAxisFilterEnabled = (blockId: string) => LEXICON_AXIS_FILTER_ENABLED_BLOCK_IDS.has(blockId);
  const blockUsesUniversalLexiconPolicy = (blockId: string) => LEXICON_UNIVERSAL_FILTER_BLOCK_IDS.has(blockId);
  const lexiconAxisFilterActiveForBlock = (blockId: string) => (
    blockIsLexiconAxisFilterEnabled(blockId) &&
    (
      Boolean(lexiconAxisFilterTags.categoryTags?.length) ||
      Boolean(lexiconAxisFilterTags.eraTags?.length) ||
      Boolean(lexiconAxisFilterTags.realityTags?.length) ||
      (blockUsesCreatureTaxonomyFilter(blockId) && Boolean(lexiconAxisFilterTags.creatureTaxonomyTags?.length))
    )
  );
  const selectedRealityMaxForLexicon = clampLinkedSurrealLevel(
    Math.max(1, ...effectiveKeywordTags.realityTags.map(tag => linkedRealityLevelByTag[tag] || 1))
  );
  const getSelectedRealityMax = () => selectedRealityMaxForLexicon;
  const getItemOntologyLevel = (item: LibraryItemDef) => clampLinkedSurrealLevel(Number(item.ontologyLevel || (item as any).surrealLevel || 1));
  const lexiconAxisLevelsRenderCache = new Map<string, WeakMap<LibraryItemDef, {
    match: ReturnType<typeof getConceptSimpleAxisMatch>;
    creatureTaxonomyLevel: LexiconCreatureTaxonomyFilterLevel | 'neutral';
    eraLevel: LexiconEraFilterLevel;
    realityLevel: LexiconRealityFilterLevel;
  }>>();
  const lexiconAxisPassMapRenderCache = new Map<string, WeakMap<LibraryItemDef, Record<LexiconAxisKey, { active: boolean; pass: boolean }>>>();
  const getLexiconCacheKey = (blockId?: string) => blockId || '__global__';
  const computeLexiconAxisLevelsForItem = (item: LibraryItemDef, blockId?: string) => {
    const match = getConceptSimpleAxisMatch(item, getLexiconAxisFilterTagsForBlock(blockId));
    const creatureTaxonomyLevel = blockId && blockUsesCreatureTaxonomyFilter(blockId)
      ? match.creatureTaxonomyFitLevel
      : 'neutral';
    const eraLevel: LexiconEraFilterLevel = match.matchedEra.length > 0
      ? 'hit'
      : ((item as any).eraMode === 'universal' || match.itemEraTags.length === 0)
        ? 'universal'
        : 'miss';
    const universalRealityAllowed = Boolean(
      blockId &&
      blockUsesUniversalLexiconPolicy(blockId) &&
      lexiconAxisFilterState.universalPolicy === 'INCLUDE' &&
      effectiveKeywordTags.realityTags.length > 0 &&
      getItemOntologyLevel(item) <= selectedRealityMaxForLexicon
    );
    const realityLevel: LexiconRealityFilterLevel = match.matchedReality.length > 0
      ? 'hit'
      : (universalRealityAllowed || match.realityScore >= 0)
        ? 'allowed'
        : 'miss';
    return { match, creatureTaxonomyLevel, eraLevel, realityLevel };
  };
  const getLexiconAxisLevelsForItem = (item: LibraryItemDef, blockId?: string) => {
    const cacheKey = getLexiconCacheKey(blockId);
    let blockCache = lexiconAxisLevelsRenderCache.get(cacheKey);
    if (!blockCache) {
      blockCache = new WeakMap();
      lexiconAxisLevelsRenderCache.set(cacheKey, blockCache);
    }
    const cached = blockCache.get(item);
    if (cached) return cached;
    const levels = computeLexiconAxisLevelsForItem(item, blockId);
    blockCache.set(item, levels);
    return levels;
  };
  const computeLexiconAxisPassMapForItem = (item: LibraryItemDef, blockId?: string) => {
    const { match, creatureTaxonomyLevel, eraLevel, realityLevel } = getLexiconAxisLevelsForItem(item, blockId);
    const speciesActive = Boolean(blockId && blockUsesCreatureTaxonomyFilter(blockId) && lexiconAxisFilterTags.creatureTaxonomyTags?.length);
    const categoryActive = Boolean(lexiconAxisFilterTags.categoryTags?.length);
    const eraActive = Boolean(lexiconAxisFilterTags.eraTags?.length);
    const realityActive = Boolean(lexiconAxisFilterTags.realityTags?.length);
    const speciesPass = !speciesActive || lexiconAxisFilterState.creatureTaxonomyLevels.includes(creatureTaxonomyLevel as LexiconCreatureTaxonomyFilterLevel);
    const categoryPass = !categoryActive || lexiconAxisFilterState.categoryLevels.includes(match.categoryFitLevel as LexiconCategoryFilterLevel);
    const universalCategoryAllowed = Boolean(
      blockId &&
      blockUsesUniversalLexiconPolicy(blockId) &&
      lexiconAxisFilterState.universalPolicy === 'INCLUDE' &&
      categoryActive &&
      match.categoryFitLevel === 'neutral'
    );
    return {
      species: {
        active: speciesActive,
        pass: speciesPass
      },
      category: {
        active: categoryActive,
        pass: categoryPass || universalCategoryAllowed
      },
      era: {
        active: eraActive,
        pass: !eraActive || lexiconAxisFilterState.eraLevels.includes(eraLevel)
      },
      reality: {
        active: realityActive,
        pass: !realityActive || lexiconAxisFilterState.realityLevels.includes(realityLevel)
      }
    } satisfies Record<LexiconAxisKey, { active: boolean; pass: boolean }>;
  };
  const getLexiconAxisPassMapForItem = (item: LibraryItemDef, blockId?: string) => {
    const cacheKey = getLexiconCacheKey(blockId);
    let blockCache = lexiconAxisPassMapRenderCache.get(cacheKey);
    if (!blockCache) {
      blockCache = new WeakMap();
      lexiconAxisPassMapRenderCache.set(cacheKey, blockCache);
    }
    const cached = blockCache.get(item);
    if (cached) return cached;
    const passMap = computeLexiconAxisPassMapForItem(item, blockId);
    blockCache.set(item, passMap);
    return passMap;
  };
  const itemMatchesLexiconAxisFilter = (blockId: string, item: LibraryItemDef) => {
    if (!lexiconAxisFilterActiveForBlock(blockId)) return true;
    if (lexiconAxisFilterState.mode === 'SOFT_SORT') return true;
    const passMap = getLexiconAxisPassMapForItem(item, blockId);
    const activeChecks = (Object.keys(passMap) as LexiconAxisKey[]).filter(key => passMap[key].active);
    if (activeChecks.length === 0) return true;
    if (lexiconAxisFilterState.mode === 'UNION') return activeChecks.some(key => passMap[key].pass);
    return activeChecks.every(key => passMap[key].pass);
  };
  const filterItemsByLayeredLexiconAxis = (blockId: string, items: LibraryItemDef[]) => {
    let current = items;
    lexiconAxisFilterState.order.forEach(axisKey => {
      const next = current.filter(item => {
        const axis = getLexiconAxisPassMapForItem(item, blockId)[axisKey];
        return !axis.active || axis.pass;
      });
      if (next.length > 0) current = next;
    });
    return current;
  };
  const getLexiconAxisSortScore = (blockId: string, item: LibraryItemDef) => {
    const { match } = getLexiconAxisLevelsForItem(item, blockId);
    const passMap = getLexiconAxisPassMapForItem(item, blockId);
    const passBonus = (Object.keys(passMap) as LexiconAxisKey[])
      .reduce((sum, key) => sum + (passMap[key].active && passMap[key].pass ? 100 : 0), 0);
    const orderBonus = lexiconAxisFilterState.order
      .reduce((sum, key, index) => sum + (passMap[key].active && passMap[key].pass ? (4 - index) * 12 : 0), 0);
    return passBonus + orderBonus + match.score;
  };
  const orderItemsByLexiconAxis = (blockId: string, items: LibraryItemDef[]) => {
    if (!lexiconAxisFilterActiveForBlock(blockId)) return items;
    return [...items].sort((a, b) => getLexiconAxisSortScore(blockId, b) - getLexiconAxisSortScore(blockId, a));
  };
  const filterItemsByLexiconAxis = (blockId: string, items: LibraryItemDef[]) => (
    lexiconAxisFilterActiveForBlock(blockId)
      ? orderItemsByLexiconAxis(
        blockId,
        lexiconAxisFilterState.mode === 'LAYERED'
          ? filterItemsByLayeredLexiconAxis(blockId, items)
          : items.filter(item => itemMatchesLexiconAxisFilter(blockId, item))
      )
      : items
  );
  const filterItemsByLexiconAxisForRandom = (blockId: string, items: LibraryItemDef[]) => {
    if (!lexiconAxisFilterActiveForBlock(blockId) || lexiconAxisFilterState.mode === 'SOFT_SORT') return items;
    if (lexiconAxisFilterState.mode === 'LAYERED') return filterItemsByLayeredLexiconAxis(blockId, items);
    return items.filter(item => itemMatchesLexiconAxisFilter(blockId, item));
  };
  const getFilteredItemsForBlock = (blockId: string) => {
    const cached = filteredItemsForBlockRenderCache.get(blockId);
    if (cached) return cached;
    const category = getLibraryCategory(blockId);
    if (!category) {
      filteredItemsForBlockRenderCache.set(blockId, []);
      return [];
    }
    const visibleItems = category.items.filter(isLibraryItemVisible);
    const items = filterItemsByLexiconAxis(blockId, visibleItems);
    filteredItemsForBlockRenderCache.set(blockId, items);
    return items;
  };
  const getFilteredLibraryDataForBlock = (blockId: string): LibraryCategoryDef[] | undefined => {
    if (filteredLibraryDataForBlockRenderCache.has(blockId)) {
      return filteredLibraryDataForBlockRenderCache.get(blockId);
    }
    if (blockId === 'cd_space_anchor_exact') return undefined;
    const category = getLibraryCategory(blockId);
    if (!category) {
      filteredLibraryDataForBlockRenderCache.set(blockId, undefined);
      return undefined;
    }
    if (fieldStyleBlocks.includes(blockId)) {
      const registerTags = fieldState[fieldRegisterBlock] || [];
      const styleIndex = fieldStyleBlocks.indexOf(blockId);
      const registerTag = registerTags[styleIndex];
      const registerItem = getLibraryCategory(fieldRegisterBlock)?.items.find(item => item.name === registerTag || item.id === registerTag);
      const registerName = registerItem?.name.split('(')[0].trim();
      if (!registerName) {
        const emptyData = [{ ...category, items: [] }];
        filteredLibraryDataForBlockRenderCache.set(blockId, emptyData);
        return emptyData;
      }
      const filteredItems = category.items
        .filter(isLibraryItemVisible)
        .filter(item => (item.group || '').startsWith(registerName));
      const axisFilteredItems = filterItemsByLexiconAxis(blockId, filteredItems);
      const data = [{ ...category, items: axisFilteredItems }];
      filteredLibraryDataForBlockRenderCache.set(blockId, data);
      return data;
    }
    const visibleItems = filterItemsByLexiconAxis(blockId, category.items.filter(isLibraryItemVisible));
    const contextualItems = visibleItems.map(item => withContextualHumanRegisterGroup(blockId, item));
    const data = !lexiconAxisFilterActiveForBlock(blockId) && contextualItems.length === category.items.length && contextualItems.every((item, index) => item === category.items[index])
      ? undefined
      : [{ ...category, items: contextualItems }];
    filteredLibraryDataForBlockRenderCache.set(blockId, data);
    return data;
  };
  const getUnfilteredLibraryDataForBlock = (blockId: string): LibraryCategoryDef[] | undefined => {
    if (blockId === 'cd_space_anchor_exact') return undefined;
    const category = getLibraryCategory(blockId);
    if (!category) return undefined;
    if (fieldStyleBlocks.includes(blockId)) {
      const registerTags = fieldState[fieldRegisterBlock] || [];
      const styleIndex = fieldStyleBlocks.indexOf(blockId);
      const registerTag = registerTags[styleIndex];
      const registerItem = getLibraryCategory(fieldRegisterBlock)?.items.find(item => item.name === registerTag || item.id === registerTag);
      const registerName = registerItem?.name.split('(')[0].trim();
      if (!registerName) return [{ ...category, items: [] }];
      const filteredItems = category.items
        .filter(isLibraryItemVisible)
        .filter(item => (item.group || '').startsWith(registerName));
      return [{ ...category, items: filteredItems }];
    }
    const visibleItems = category.items.filter(isLibraryItemVisible);
    const contextualItems = visibleItems.map(item => withContextualHumanRegisterGroup(blockId, item));
    if (contextualItems.length === category.items.length && contextualItems.every((item, index) => item === category.items[index])) return undefined;
    return [{ ...category, items: contextualItems }];
  };
  const changeHumanRegister = (nextRegister: HumanRegisterId) => {
    setHumanRegister(nextRegister);
  };
  const syncFusionRuleFromMode = (mode: RegisterRandomMode) => {
    const category = getLibraryCategory('cd_fusion_rule');
    const fusionId = `cd_world_law_${mode.toLowerCase().replace('law_', '')}`;
    const item = category?.items.find(candidate => candidate.id === fusionId);
    if (!item) return;
    if (isBlockLocked('cd_fusion_rule')) return;
    updateState({ ...fieldState, cd_fusion_rule: [item.name] });
  };
  const changeFusionMode = (mode: RegisterRandomMode) => {
    setRegisterRandomMode(mode);
    syncFusionRuleFromMode(mode);
  };
  const getBlockSectionId = (blockId: string) => {
    if (paletteBlocks.includes(blockId)) return 'PALETTE';
    if (styleProtocolBlocks.includes(blockId)) return 'SUBJECT';
    if (spacetimeFieldUiBlocks.includes(blockId) || aestheticLightAuditBlocks.includes(blockId)) return null;
    if (allStyleBlocks.includes(blockId) || aestheticAuditBlocks.includes(blockId)) return 'STYLE';
    if (fieldBlocks.includes(blockId)) return 'STYLE';
    if (humanSubjectBlocks.includes(blockId) || creatureSubjectBlocks.includes(blockId)) return 'SUBJECT';
    return null;
  };
  const isBlockLocked = (blockId: string) => {
    if (blockId === 'cd_space_anchor_exact' || blockId === 'cd_time_anchor_exact') {
      return Boolean(lockedModules[blockId]);
    }
    const sectionId = getBlockSectionId(blockId);
    return Boolean(lockedModules[blockId] || (sectionId && lockedModules[sectionId]));
  };
  const isSectionLocked = (sectionId: string) => Boolean(lockedModules[sectionId]);

  const handleAddConceptCustomItem = (name: string, def: string, core: string, item?: LibraryItemDef, blockId?: string) => {
    const targetBlockId = blockId || activeBlockId;
    if (!targetBlockId) return;
    const nextItem: LibraryItemDef = item || {
      id: `custom_${targetBlockId}_${Date.now()}`,
      name,
      def,
      core,
      group: '自定义',
      groupEn: 'Custom',
      tags: ['custom', targetBlockId],
      ontologyLevel: 1,
      risk: 'clean'
    };
    setConceptCustomItemsByBlock(prev => {
      const existing = prev[targetBlockId] || [];
      const filtered = existing.filter(candidate => candidate.id !== nextItem.id && candidate.name !== nextItem.name);
      return {
        ...prev,
        [targetBlockId]: [nextItem, ...filtered]
      };
    });
    onAddCustomDef?.(name, def, core, nextItem, targetBlockId);
  };

  const filteredItemsForBlockRenderCache = new Map<string, LibraryItemDef[]>();
  const filteredLibraryDataForBlockRenderCache = new Map<string, LibraryCategoryDef[] | undefined>();
  const randomizableItemsForBlockRenderCache = new Map<string, LibraryItemDef[]>();

  const getFilteredItemCountForBlock = (blockId: string) => {
    const category = getLibraryCategory(blockId);
    if (!category) return 0;
    const visibleItems = category.items.filter(isLibraryItemVisible);
    if (!lexiconAxisFilterActiveForBlock(blockId) || lexiconAxisFilterState.mode === 'SOFT_SORT') return visibleItems.length;
    if (lexiconAxisFilterState.mode === 'LAYERED') return filterItemsByLayeredLexiconAxis(blockId, visibleItems).length;
    return visibleItems.reduce((count, item) => count + (itemMatchesLexiconAxisFilter(blockId, item) ? 1 : 0), 0);
  };

  const getLibraryCount = (blockId: string) => {
    if (blockId === 'cd_space_anchor_exact') return SUR3_SPACE_ANCHOR_PRESETS.length;
    if (blockId === 'cd_time_anchor_exact') return SUR3_COORDINATE_PRESETS.length;
    return getFilteredItemCountForBlock(blockId);
  };

  const getRandomizableItemsForBlock = (blockId: string) => {
    const cached = randomizableItemsForBlockRenderCache.get(blockId);
    if (cached) return cached;
    const category = getLibraryCategory(blockId);
    if (!category) return [];
    const visibleItems = category.items.filter(isLibraryItemVisible);
    if (fieldStyleBlocks.includes(blockId)) {
      const items = getFilteredLibraryDataForBlock(blockId)?.[0]?.items || [];
      randomizableItemsForBlockRenderCache.set(blockId, items);
      return items;
    }
    const axisFilteredItems = filterItemsByLexiconAxisForRandom(blockId, visibleItems);
    if (!isHumanRegisterWeightedRandomActive) {
      randomizableItemsForBlockRenderCache.set(blockId, axisFilteredItems);
      return axisFilteredItems;
    }
    if (registerRandomMode === 'LAW_L1') {
      const pureItems = axisFilteredItems.filter(item => isItemAllowedForHumanRegister(blockId, item));
      const items = pureItems.length > 0 ? pureItems : axisFilteredItems;
      randomizableItemsForBlockRenderCache.set(blockId, items);
      return items;
    }
    randomizableItemsForBlockRenderCache.set(blockId, axisFilteredItems);
    return axisFilteredItems;
  };

  const getRandomWeightForItem = (blockId: string, item: LibraryItemDef) => {
    if (!isHumanRegisterWeightedRandomActive) return 1;
    const isPrimaryRegisterItem = isItemAllowedForHumanRegister(blockId, item);
    if (registerRandomMode === 'LAW_L1') return isPrimaryRegisterItem ? 1 : 0;
    if (registerRandomMode === 'LAW_L2') return isPrimaryRegisterItem ? 8 : 1;
    if (registerRandomMode === 'LAW_L3') return isPrimaryRegisterItem ? 5 : 2;
    if (registerRandomMode === 'LAW_L4') return isPrimaryRegisterItem ? 3 : 2;
    return isPrimaryRegisterItem ? 2 : 3;
  };

  const pickWeightedUniqueItems = (blockId: string, items: LibraryItemDef[], count: number) => {
    if (!isHumanRegisterWeightedRandomActive) {
      const pool = [...items];
      const selected: LibraryItemDef[] = [];
      while (pool.length > 0 && selected.length < count) {
        const index = Math.floor(Math.random() * pool.length);
        selected.push(pool[index]);
        pool.splice(index, 1);
      }
      return selected;
    }
    const pool = [...items];
    const selected: LibraryItemDef[] = [];
    while (pool.length > 0 && selected.length < count) {
      const weighted = pool.map(item => ({ item, weight: Math.max(0, getRandomWeightForItem(blockId, item)) }));
      const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);
      if (totalWeight <= 0) break;
      let cursor = Math.random() * totalWeight;
      const pickedIndex = weighted.findIndex(entry => {
        cursor -= entry.weight;
        return cursor <= 0;
      });
      const index = pickedIndex >= 0 ? pickedIndex : weighted.length - 1;
      selected.push(weighted[index].item);
      pool.splice(index, 1);
    }
    return selected;
  };
  const presetItemSearchTextCacheRef = useRef<WeakMap<LibraryItemDef, string>>(new WeakMap());
  const presetKeyCacheRef = useRef<WeakMap<readonly string[], string[]>>(new WeakMap());
  const getNormalizedPresetKeys = (keys: readonly string[]) => {
    const cached = presetKeyCacheRef.current.get(keys);
    if (cached) return cached;
    const normalizedKeys = keys.map(key => key.toLowerCase());
    presetKeyCacheRef.current.set(keys, normalizedKeys);
    return normalizedKeys;
  };
  const getPresetItemSearchText = (item: LibraryItemDef) => {
    const cached = presetItemSearchTextCacheRef.current.get(item);
    if (cached) return cached;
    const searchText = [
      item.id,
      item.name,
      item.nameEn,
      item.group,
      item.groupEn,
      item.reference,
      item.referenceEn,
      item.core,
      item.coreEn,
      item.def,
      item.defEn,
      ...(item.aliases || []),
      ...(item.aliasesEn || []),
      ...(item.tags || [])
    ].filter(Boolean).join(' ').toLowerCase();
    presetItemSearchTextCacheRef.current.set(item, searchText);
    return searchText;
  };
  const itemMatchesPresetKeys = (item: LibraryItemDef, keys: readonly string[]) => {
    if (keys.length === 0) return false;
    const searchText = getPresetItemSearchText(item);
    return getNormalizedPresetKeys(keys).some(key => searchText.includes(key));
  };
  const presetMatchesAnyText = (preset: VisualStyleRandomPreset, keys: string[]) => {
    if (keys.length === 0) return false;
    const searchText = [
      preset.id,
      preset.label,
      preset.labelEn,
      preset.brief,
      preset.briefEn,
      ...(preset.paletteKeys || []),
      ...Object.values(preset.prefer).flat()
    ].join(' ').toLowerCase();
    return keys.some(key => searchText.includes(key.toLowerCase()));
  };
  const filterVisualStylePresetPoolBySafety = (presets: VisualStyleRandomPreset[]) => {
    const filtered = presets.filter(preset => {
      if (!visualStyleRandomSafety.allowVintage && preset.profileTarget?.era?.includes('vintage')) return false;
      if (!visualStyleRandomSafety.allowGlitch) {
        const isGlitch = preset.profileTarget?.distortion?.includes('glitch')
          || preset.profileTarget?.noise?.includes('glitch')
          || presetMatchesAnyText(preset, ['glitch', '故障', '像素损坏', '压缩块']);
        if (isGlitch) return false;
      }
      if (!visualStyleRandomSafety.allowPollution) {
        const isPolluted = preset.profileTarget?.cleanliness?.some(value => value === 'dirty' || value === 'damaged' || value === 'experimental')
          || presetMatchesAnyText(preset, ['污染', 'dirty', 'damaged', 'experimental', 'distressed', 'lofi', '低保真']);
        if (isPolluted) return false;
      }
      if (!visualStyleRandomSafety.allowHighSaturation && preset.profileTarget?.saturation?.some(value => value === 'high' || value === 'shifted')) return false;
      return true;
    });
    return filtered;
  };
  const pickPresetWeightedUniqueItems = (blockId: string, items: LibraryItemDef[], count: number, preset: VisualStyleRandomPreset) => {
    const preferKeys = blockId === 'cd_color_palette'
      ? (preset.paletteKeys || [])
      : (preset.prefer[blockId] || []);
    const hasPreferredPool = preferKeys.length > 0 && items.some(item => itemMatchesPresetKeys(item, preferKeys));
    const pool = [...items];
    const selected: LibraryItemDef[] = [];
    while (pool.length > 0 && selected.length < count) {
      const weighted = pool.map(item => {
        const baseWeight = Math.max(0, getRandomWeightForItem(blockId, item));
        const preferred = itemMatchesPresetKeys(item, preferKeys);
        const profileWeight = getVisualStyleProfileMatchWeight(item.id, preset.profileTarget, preset.mode);
        const presetWeight = preferred
          ? (preset.mode === 'DRIFT' ? 8 : 12)
          : (preset.mode === 'STRICT' && hasPreferredPool ? 0 : 1);
        return { item, weight: baseWeight * presetWeight * profileWeight };
      });
      const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);
      if (totalWeight <= 0) break;
      let cursor = Math.random() * totalWeight;
      const pickedIndex = weighted.findIndex(entry => {
        cursor -= entry.weight;
        return cursor <= 0;
      });
      const index = pickedIndex >= 0 ? pickedIndex : weighted.length - 1;
      selected.push(weighted[index].item);
      pool.splice(index, 1);
    }
    return selected.length > 0 ? selected : pickWeightedUniqueItems(blockId, items, count);
  };
  const shuffleVisualPresetBlocks = (blocks: string[]) => [...blocks].sort(() => Math.random() - 0.5);
  const getVisualStylePaletteProbability = () => {
    if (visualStyleRandomDensity === 'FULL') return 1;
    if (visualStyleRandomDensity === 'BALANCED') return 0.8;
    return 0.5;
  };
  const shouldIncludeVisualStylePalette = () => Math.random() < getVisualStylePaletteProbability();
  const getVisualStyleDensityRange = (mediumCategory: PhysicalMediumCategory): [number, number] => {
    if (visualStyleRandomDensity === 'LIGHT') {
      if (mediumCategory === 'PHOTOGRAPHY') return [3, 4];
      if (mediumCategory === 'PAINTING') return [2, 3];
      if (mediumCategory === 'CGI' || mediumCategory === 'TANGIBLE') return [1, 1];
      return [2, 3];
    }
    if (visualStyleRandomDensity === 'BALANCED') {
      if (mediumCategory === 'PHOTOGRAPHY') return [5, 7];
      if (mediumCategory === 'PAINTING') return [4, 5];
      if (mediumCategory === 'CGI' || mediumCategory === 'TANGIBLE') return [1, 2];
      return [4, 6];
    }
    return [0, 0];
  };
  const getVisualStyleDensityBlockTarget = (availableCount: number, mediumCategory: PhysicalMediumCategory, requiredCount: number) => {
    if (visualStyleRandomDensity === 'FULL') return availableCount;
    const [rangeMin, rangeMax] = getVisualStyleDensityRange(mediumCategory);
    const min = Math.min(availableCount, Math.max(requiredCount, rangeMin));
    const max = Math.min(availableCount, Math.max(min, rangeMax));
    return min + Math.floor(Math.random() * (max - min + 1));
  };
  const getVisualStyleSourceLimit = () => visualStyleSoulBlendMode === 'POLYPHONIC' ? 2 : 1;
  const getVisualStyleRandomizedBlocksForDensity = (preset: VisualStyleRandomPreset) => {
    const soulBlocks = Array.from(new Set(preset.soulBlocks));
    const aestheticSoulBlocks = soulBlocks.filter(blockId => aestheticStyleSoulBlocks.includes(blockId));
    const otherSoulBlocks = soulBlocks.filter(blockId => !aestheticStyleSoulBlocks.includes(blockId));
    const optionalAestheticSoulBlocks = shuffleVisualPresetBlocks(aestheticSoulBlocks).slice(0, Math.min(getVisualStyleSourceLimit(), aestheticSoulBlocks.length));
    const requiredBlocks = Array.from(new Set([
      ...otherSoulBlocks,
      ...(shouldIncludeVisualStylePalette() ? paletteBlocks : [])
    ]));
    const optionalBlocks = Array.from(new Set([
      ...optionalAestheticSoulBlocks,
      ...preset.qualityBlocks,
      ...(preset.allowBlocks || [])
    ])).filter(blockId => !requiredBlocks.includes(blockId));
    const availableBlocks = Array.from(new Set([...requiredBlocks, ...optionalBlocks]));
    if (visualStyleRandomDensity === 'FULL') return availableBlocks;
    const targetCount = getVisualStyleDensityBlockTarget(availableBlocks.length, preset.mediumCategory, requiredBlocks.length);
    const optionalCount = Math.max(0, targetCount - requiredBlocks.length);
    return Array.from(new Set([
      ...requiredBlocks,
      ...shuffleVisualPresetBlocks(optionalBlocks).slice(0, optionalCount)
    ]));
  };
  const getVisualStyleRandomCountForBlock = (blockId: string, presetBlocks: readonly string[]) => {
    const limit = CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1;
    if (limit <= 1) return 1;
    if (aestheticStyleSoulBlocks.includes(blockId)) {
      if (visualStyleSoulBlendMode !== 'POLYPHONIC') return 1;
      const activeSourceBlocks = presetBlocks.filter(activeBlockId => aestheticStyleSoulBlocks.includes(activeBlockId));
      if (activeSourceBlocks.length <= 1 && visualStyleRandomDensity !== 'LIGHT') {
        return Math.random() < 0.55 ? Math.min(limit, 2) : 1;
      }
      return 1;
    }
    if (visualStyleRandomDensity === 'FULL') return Math.min(limit, 2);
    return 1;
  };
	  const getVisualStyleRandomPresetPool = () => {
	    if (visualStyleRandomPresetRoute === 'ALL_PRESETS') {
	      const safePool = filterVisualStylePresetPoolBySafety(VISUAL_STYLE_RANDOM_PRESETS);
	      return safePool.length > 0 ? safePool : VISUAL_STYLE_RANDOM_PRESETS;
	    }
	    if (visualStyleRandomPresetRoute === 'GLOBAL_FUSION') {
	      const fusionPresets = VISUAL_STYLE_RANDOM_PRESETS.filter(preset => preset.mediumCategory === 'ALL');
	      const basePool = fusionPresets.length > 0 ? fusionPresets : VISUAL_STYLE_RANDOM_PRESETS;
	      const safePool = filterVisualStylePresetPoolBySafety(basePool);
	      return safePool.length > 0 ? safePool : basePool;
	    }
	    if (visualStyleRandomPresetRoute === 'FOLLOW_MEDIUM') {
	      const mediumPresets = VISUAL_STYLE_RANDOM_PRESETS.filter(preset => preset.mediumCategory === identityOptions.mediumCategory);
	      if (mediumPresets.length === 0) {
	        const safePool = filterVisualStylePresetPoolBySafety(VISUAL_STYLE_RANDOM_PRESETS);
	        return safePool.length > 0 ? safePool : VISUAL_STYLE_RANDOM_PRESETS;
	      }
	      const safePool = filterVisualStylePresetPoolBySafety(mediumPresets);
	      return safePool.length > 0 ? safePool : mediumPresets;
	    }
	    const selectedPreset = VISUAL_STYLE_RANDOM_PRESETS.find(preset => preset.id === visualStyleRandomPresetRoute);
	    return selectedPreset ? [selectedPreset] : filterVisualStylePresetPoolBySafety(VISUAL_STYLE_RANDOM_PRESETS);
	  };
  const applyVisualStylePresetRandom = (nextState: NarrativeFieldState) => {
    if (isSectionLocked('STYLE')) return;
    const presetPool = getVisualStyleRandomPresetPool();
    const preset = presetPool[Math.floor(Math.random() * presetPool.length)];
    if (!preset) return;
    setLastVisualStylePreset(preset);
    setIdentityOptions(prev => ({ ...prev, mediumCategory: preset.mediumCategory as PhysicalMediumCategory }));

    const presetBlocks = getVisualStyleRandomizedBlocksForDensity(preset);

    presetBlocks.forEach(blockId => {
      if (isBlockLocked(blockId)) return;
      const items = getRandomizableItemsForBlock(blockId);
      if (items.length === 0) return;
      const count = getVisualStyleRandomCountForBlock(blockId, presetBlocks);
      const selected = pickPresetWeightedUniqueItems(blockId, items, count, preset).map(item => item.name);
      if (blockId === 'cd_color_palette') {
        const tag = selected[0];
        syncPaletteHex(tag);
        nextState[blockId] = tag ? [tag] : [];
        return;
      }
      nextState[blockId] = selected;
    });

    const inactiveMediaBlocks = [
      ...Object.values(mediaSoulBlocksByCategory).flat(),
      ...Object.values(mediaQualityBlocksByCategory).flat(),
      ...paletteBlocks
    ].filter(blockId => !presetBlocks.includes(blockId));
    inactiveMediaBlocks.forEach(blockId => {
      if (!isBlockLocked(blockId)) nextState[blockId] = [];
    });
  };

  const randomizeVisualStylePreset = () => {
    const nextState = { ...fieldState };
    applyVisualStylePresetRandom(nextState);
    updateState(nextState);
  };
  const framingRequiredSafeBlockItems: Record<string, string[]> = {
    cd_framing_focus: ['focus_full_body', 'focus_upper_body', 'focus_environmental', 'focus_face'],
    cd_framing_shot_size: ['shot_mcu', 'shot_ms', 'shot_cowboy', 'shot_fs'],
    cd_framing_angle: ['ang_eye', 'ang_slight_high', 'ang_low', 'ang_clean_single'],
    cd_framing_depth: ['dof_medium', 'dof_shallow', 'dof_deep'],
    cd_framing_focal_length: ['fl_35mm', 'fl_50mm', 'fl_85mm']
  };
  const filterFramingItemsBySafety = (blockId: string, items: LibraryItemDef[], preset: FramingRandomPreset) => items.filter(item => {
    const profile = item.framingProfile;
    if (!framingRandomSafety.allowOpticalFx && blockId === 'cd_framing_lens_fx') return false;
    if (framingRandomSafety.avoidExtremeDistortion && !preset.allowExtreme && profile && (profile.distortion === 'strong' || profile.distortion === 'extreme')) return false;
    if (framingRandomSafety.avoidMultiSubject && !preset.allowMultiSubject && profile?.multiSubject) return false;
    if (framingRandomSafety.keepReadableSubject && !preset.allowExtreme && profile?.subjectReadability === 'low') return false;
    if (framingRandomSafety.keepReadableSubject && !preset.allowExtreme && profile?.opticalRisk === 'high') return false;
    return true;
  });
  const pickFramingPresetWeightedUniqueItems = (blockId: string, items: LibraryItemDef[], count: number, preset: FramingRandomPreset) => {
    const preferKeys = preset.prefer[blockId] || [];
    const safeItems = filterFramingItemsBySafety(blockId, items, preset);
    const pool = (safeItems.length > 0 ? safeItems : items).slice();
    const selected: LibraryItemDef[] = [];
    while (pool.length > 0 && selected.length < count) {
      const weighted = pool.map(item => {
        const baseWeight = Math.max(0, getRandomWeightForItem(blockId, item));
        const preferred = itemMatchesPresetKeys(item, preferKeys);
        const safeFallback = (framingRequiredSafeBlockItems[blockId] || []).includes(item.id);
        const presetWeight = preferred ? 14 : safeFallback ? 4 : preferKeys.length > 0 ? 0.35 : 1;
        return { item, weight: baseWeight * presetWeight };
      });
      const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);
      if (totalWeight <= 0) break;
      let cursor = Math.random() * totalWeight;
      const pickedIndex = weighted.findIndex(entry => {
        cursor -= entry.weight;
        return cursor <= 0;
      });
      const index = pickedIndex >= 0 ? pickedIndex : weighted.length - 1;
      selected.push(weighted[index].item);
      pool.splice(index, 1);
    }
    return selected.length > 0 ? selected : pickWeightedUniqueItems(blockId, items, count);
  };
  const getFramingRandomPresetPool = () => {
    if (framingRandomPresetRoute === 'ALL_PRESETS') {
      const safePool = FRAMING_RANDOM_PRESETS.filter(preset => {
        if (framingRandomSafety.avoidExtremeDistortion && preset.allowExtreme) return false;
        if (framingRandomSafety.avoidMultiSubject && preset.allowMultiSubject && preset.category !== 'EXPERIMENT') return false;
        return true;
      });
      return safePool.length > 0 ? safePool : FRAMING_RANDOM_PRESETS;
    }
    const selectedPreset = FRAMING_RANDOM_PRESETS.find(preset => preset.id === framingRandomPresetRoute);
    return selectedPreset ? [selectedPreset] : FRAMING_RANDOM_PRESETS;
  };
  const getFramingDensityBlockTarget = (availableCount: number) => {
    if (framingRandomDensity === 'FULL') return availableCount;
    if (framingRandomDensity === 'LIGHT') return Math.min(availableCount, 1 + Math.floor(Math.random() * Math.min(3, availableCount)));
    const min = Math.min(3, availableCount);
    const max = Math.min(5, availableCount);
    return min + Math.floor(Math.random() * (max - min + 1));
  };
  const getFramingRandomizedBlocksForDensity = (preset: FramingRandomPreset) => {
    const requiredBlocks = Array.from(new Set(preset.requiredBlocks));
    const optionalBlocks = Array.from(new Set(preset.optionalBlocks)).filter(blockId => !requiredBlocks.includes(blockId));
    const availableBlocks = Array.from(new Set([
      ...requiredBlocks,
      ...optionalBlocks
    ])).filter(blockId => framingRandomSafety.allowOpticalFx || blockId !== 'cd_framing_lens_fx');
    if (framingRandomDensity === 'FULL') return availableBlocks;
    const targetCount = Math.max(requiredBlocks.length, getFramingDensityBlockTarget(availableBlocks.length));
    const optionalCount = Math.max(0, targetCount - requiredBlocks.length);
    return Array.from(new Set([
      ...requiredBlocks,
      ...shuffleVisualPresetBlocks(optionalBlocks).slice(0, optionalCount)
    ])).filter(blockId => framingRandomSafety.allowOpticalFx || blockId !== 'cd_framing_lens_fx');
  };
  const applyFramingPresetRandom = (nextState: NarrativeFieldState) => {
    if (isSectionLocked('STYLE')) return;
    const presetPool = getFramingRandomPresetPool();
    const preset = presetPool[Math.floor(Math.random() * presetPool.length)];
    if (!preset) return;
    setLastFramingPreset(preset);

    const presetBlocks = getFramingRandomizedBlocksForDensity(preset);
    presetBlocks.forEach(blockId => {
      if (isBlockLocked(blockId)) return;
      const items = getRandomizableItemsForBlock(blockId);
      if (items.length === 0) return;
      const selected = pickFramingPresetWeightedUniqueItems(blockId, items, 1, preset).map(item => item.name);
      nextState[blockId] = selected;
    });

    aestheticEyeAuditBlocks
      .filter(blockId => !presetBlocks.includes(blockId))
      .forEach(blockId => {
        if (!isBlockLocked(blockId)) nextState[blockId] = [];
      });
  };

  const randomizeFramingPreset = () => {
    const nextState = { ...fieldState };
    applyFramingPresetRandom(nextState);
    updateState(nextState);
  };
  const withoutOccupationPersonaConflict = (blockIds: string[]) => {
    if (!blockIds.includes('cd_occupation') || !blockIds.includes('cd_persona')) return blockIds;
    const keepOccupation = Math.random() < 0.5;
    return blockIds.filter(blockId => keepOccupation ? blockId !== 'cd_persona' : blockId !== 'cd_occupation');
  };
  const randomizeConceptPreset = () => {
    const subjectDetailBlocks = subjectMode === 'HUMAN'
      ? activeSubjectBlocks.filter(blockId => blockId !== 'cd_occupation' && blockId !== 'cd_persona')
      : activeSubjectBlocks;
    const nextBlocks = [
      ...activeStyleSourceBlocks,
      ...paletteBlocks,
      ...subjectDetailBlocks
    ];

    if (subjectMode === 'HUMAN') {
      const usePersonaMode = Math.random() < 0.5;
      if (usePersonaMode) {
        const axes = [
          semanticFieldAxisBlocks,
          semanticSubjectAxisBlocks,
          semanticStyleAxisBlocks,
          ['cd_persona']
        ].sort(() => Math.random() - 0.5).slice(0, 2);
        nextBlocks.push(...axes.flat());
      } else {
        nextBlocks.push(...semanticFieldAxisBlocks, ...semanticStyleAxisBlocks, 'cd_persona', 'cd_occupation');
      }
    } else {
      nextBlocks.push(...governanceBlocks);
    }

    randomizeBlocks(Array.from(new Set(nextBlocks)));
  };

  const activeLinkedRandomPreset = (
    linkedRandomPresetRoute === 'ALL_PRESETS'
      ? null
      : CONCEPT_LINKED_RANDOM_PRESETS.find(preset => preset.id === linkedRandomPresetRoute)
  ) || lastLinkedRandomPreset || CONCEPT_LINKED_RANDOM_PRESETS[0];

  const itemSearchText = (item: LibraryItemDef) => getPresetItemSearchText(item);
  const itemHasAnyKey = (item: LibraryItemDef, keys: readonly string[]) => {
    if (keys.length === 0) return false;
    const search = itemSearchText(item);
    return getNormalizedPresetKeys(keys).some(key => search.includes(key));
  };
  const getContentIntentPool = () => {
    const subjectModePresets = contentIntentPresets.filter(preset => preset.subjectMode === subjectMode);
    if (contentIntentRoute !== 'AUTO') {
      const selected = contentIntentPresets.find(preset => preset.id === contentIntentRoute);
      if (selected?.subjectMode === subjectMode) return [selected];
      return subjectModePresets.length > 0 ? subjectModePresets : [...contentIntentPresets];
    }
    const activeTags = [
      ...worldAxisState.genreAllow,
      ...effectiveKeywordTags.eraTags,
      ...effectiveKeywordTags.realityTags,
      ...(fieldState.cd_persona || []),
      ...(fieldState.cd_occupation || []),
      ...(fieldState.cd_field_preset || [])
    ].join(' ').toLowerCase();
    const scored = contentIntentPresets.map(preset => {
      const keyScore = preset.keys.reduce((sum, key) => sum + (activeTags.includes(key.toLowerCase()) ? 1 : 0), 0);
      const routeScore = preset.subjectMode === subjectMode ? 0.5 : 0;
      return { preset, score: keyScore + routeScore };
    });
    const maxScore = Math.max(...scored.map(entry => entry.score));
    if (maxScore <= 0.5) return subjectModePresets.length > 0 ? subjectModePresets : [...contentIntentPresets];
    return scored.filter(entry => entry.score === maxScore).map(entry => entry.preset);
  };
  const chooseContentIntentPreset = () => {
    const pool = getContentIntentPool();
    return pool[Math.floor(Math.random() * pool.length)] || contentIntentPresets[0];
  };
  const contentIntentDensityTarget = (module: LinkedRandomFocus, preset: ContentIntentPreset) => {
    const densityRank: Record<ContentIntentRandomDensity, number> = {
      RANGE_1_8: 1,
      RANGE_9_16: 2,
      RANGE_17_23: 3,
      RANGE_24_30: 4,
      RANGE_31_38: 5,
      FULL: 6
    };
    const rank = densityRank[contentIntentRandomDensity] || 3;
    if (module === 'SUBJECT') {
      if (preset.subjectMode === 'CREATURE') return Math.min(8, Math.max(3, rank + 2));
      return getContentIntentDensityTargetCount();
    }
    if (module === 'FIELD') return Math.min(fieldDetailBlocks.length + 2, Math.max(1, rank));
    if (module === 'LIGHT') return Math.min(aestheticLightAuditBlocks.length, Math.max(1, rank + (rank >= 4 ? 1 : 0)));
    return 0;
  };
  const pickContentIntentBlocks = (
    primary: readonly string[],
    support: readonly string[],
    low: readonly string[],
    target: number
  ) => {
    const required = shuffleVisualPresetBlocks([...primary]).slice(0, Math.min(primary.length, Math.max(1, Math.ceil(target * 0.55))));
    const remaining = Math.max(0, target - required.length);
    const supportCount = Math.min(support.length, Math.ceil(remaining * 0.75));
    const lowCount = Math.max(0, remaining - supportCount);
    return Array.from(new Set([
      ...required,
      ...shuffleVisualPresetBlocks([...support]).slice(0, supportCount),
      ...shuffleVisualPresetBlocks([...low]).slice(0, lowCount)
    ]));
  };
  const getContentIntentBlocksForFocus = (preset: ContentIntentPreset, focus: LinkedRandomFocus) => {
    if (focus === 'SUBJECT') {
      const target = contentIntentDensityTarget('SUBJECT', preset);
      return pickContentIntentBlocks(preset.subjectPrimary, preset.subjectSupport, preset.subjectLow, target);
    }
    if (focus === 'FIELD') {
      const target = contentIntentDensityTarget('FIELD', preset);
      return pickContentIntentBlocks(preset.fieldPrimary, preset.fieldSupport, [], target);
    }
    if (focus === 'LIGHT') {
      const target = contentIntentDensityTarget('LIGHT', preset);
      return pickContentIntentBlocks(preset.lightPrimary, preset.lightSupport, [], target);
    }
    return Array.from(new Set([
      ...getContentIntentBlocksForFocus(preset, 'SUBJECT'),
      ...getContentIntentBlocksForFocus(preset, 'FIELD'),
      ...getContentIntentBlocksForFocus(preset, 'LIGHT')
    ]));
  };
  const getContentIntentManagedBlocks = (preset: ContentIntentPreset, focus: LinkedRandomFocus) => {
    if (focus === 'SUBJECT') return Array.from(new Set([...humanSubjectUiBlocks, ...creatureSubjectBlocks]));
    if (focus === 'FIELD') return spacetimeFieldUiBlocks;
    if (focus === 'LIGHT') return aestheticLightAuditBlocks;
    return Array.from(new Set([...humanSubjectUiBlocks, ...creatureSubjectBlocks, ...spacetimeFieldUiBlocks, ...aestheticLightAuditBlocks]));
  };
  const pickContentIntentItems = (blockId: string, items: LibraryItemDef[], count: number, keys: readonly string[]) => {
    const pool = [...items];
    const selected: LibraryItemDef[] = [];
    while (pool.length > 0 && selected.length < count) {
      const weighted = pool.map(item => {
        const baseWeight = Math.max(0, getRandomWeightForItem(blockId, item));
        const preferred = itemHasAnyKey(item, keys);
        return { item, weight: baseWeight * (preferred ? 8 : 1) };
      });
      const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);
      if (totalWeight <= 0) break;
      let cursor = Math.random() * totalWeight;
      const pickedIndex = weighted.findIndex(entry => {
        cursor -= entry.weight;
        return cursor <= 0;
      });
      const index = pickedIndex >= 0 ? pickedIndex : weighted.length - 1;
      selected.push(weighted[index].item);
      pool.splice(index, 1);
    }
    return selected.length > 0 ? selected : pickWeightedUniqueItems(blockId, items, count);
  };
  const randomIntegerInRange = ([min, max]: [number, number]) => min + Math.floor(Math.random() * (Math.max(min, max) - min + 1));
  const getContentIntentDensityTargetCount = () => {
    const range = contentIntentDensityRanges[contentIntentRandomDensity] || contentIntentDensityRanges.RANGE_17_23;
    return randomIntegerInRange(range);
  };
  const getCreatureContentIntentDensityTargetCount = () => {
    const range = creatureContentIntentDensityRanges[contentIntentRandomDensity] || creatureContentIntentDensityRanges.RANGE_17_23;
    return randomIntegerInRange(range);
  };
  const getContentIntentItemsForBlock = (blockId: string, cache?: Map<string, LibraryItemDef[]>) => {
    const cached = cache?.get(blockId);
    if (cached) return cached;
    const items = (fieldStyleBlocks.includes(blockId) || styleProtocolBlocks.includes(blockId))
      ? (getFilteredLibraryDataForBlock(blockId)?.[0]?.items || [])
      : getRandomizableItemsForBlock(blockId);
    cache?.set(blockId, items);
    return items;
  };
  const pickContentIntentBlockValues = (
    blockId: string,
    preset: ContentIntentPreset,
    count: number,
    genderSignal: LinkedGenderSignal = 'OPEN',
    cache?: Map<string, LibraryItemDef[]>
  ) => {
    if (isBlockLocked(blockId) || count <= 0) return [];
    const items = getContentIntentItemsForBlock(blockId, cache)
      .filter(item => itemAllowedByLinkedGender(blockId, item, genderSignal, activeLinkedRandomPreset));
    if (items.length === 0) return [];
    return pickContentIntentItems(blockId, items, Math.min(items.length, count), preset.keys).map(item => item.name);
  };
  const contentIntentBlockCapacity = (blockId: string) => {
    if (humanSubjectAlwaysSingleBlocks.includes(blockId)) return 1;
    if (humanSubjectMultiSelectBlocks.includes(blockId)) return Math.max(1, CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1);
    return Math.max(1, CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1);
  };
  const contentIntentPresetBlockList = (
    preset: ContentIntentPreset,
    key: 'subjectPrimary' | 'subjectSupport' | 'subjectLow' | 'fieldPrimary' | 'fieldSupport' | 'lightPrimary' | 'lightSupport'
  ): readonly string[] => preset[key] as readonly string[];
  const contentIntentDensityRank = () => {
    const densityRank: Record<ContentIntentRandomDensity, number> = {
      RANGE_1_8: 1,
      RANGE_9_16: 2,
      RANGE_17_23: 3,
      RANGE_24_30: 4,
      RANGE_31_38: 5,
      FULL: 6
    };
    return densityRank[contentIntentRandomDensity] || 3;
  };
  const getCreatureIntentTaxonomyPrefer = (preset: ContentIntentPreset): CreatureTaxonomyTag[] => {
    const explicit = worldAxisState.creatureTaxonomyAllow;
    if (explicit.length > 0) return Array.from(new Set(explicit));
    const presetPrefer = creatureIntentTaxonomyPrefer[preset.id] || [];
    return Array.from(new Set(presetPrefer));
  };
  const creatureTaxonomyLevelWeight = (level: NonNullable<LibraryItemDef['creatureTaxonomyFit']>['unlisted']) => {
    if (level === 'usable') return 4;
    if (level === 'fusion') return 2.2;
    if (level === 'weak') return 0.45;
    if (level === 'exclude') return 0;
    return 1;
  };
  const getCreatureTaxonomyIntentWeight = (item: LibraryItemDef, taxonomyPrefer: CreatureTaxonomyTag[]) => {
    if (taxonomyPrefer.length === 0) return 1;
    const fit = item.creatureTaxonomyFit;
    if (!fit) return 1;
    let weight = creatureTaxonomyLevelWeight(fit.unlisted);
    taxonomyPrefer.forEach(tag => {
      if (fit.exclude?.includes(tag)) weight = Math.max(weight, 0);
      else if (fit.strong?.includes(tag)) weight = Math.max(weight, 14);
      else if (fit.usable?.includes(tag)) weight = Math.max(weight, 7);
      else if (fit.fusion?.includes(tag)) weight = Math.max(weight, 3);
      else if (fit.weak?.includes(tag)) weight = Math.max(weight, 0.75);
    });
    return weight;
  };
  const creatureItemExplicitlyMatchesTaxonomy = (item: LibraryItemDef, taxonomyPrefer: CreatureTaxonomyTag[]) => {
    if (taxonomyPrefer.length === 0) return true;
    const fit = item.creatureTaxonomyFit;
    if (!fit) return false;
    return taxonomyPrefer.some(tag => fit.strong?.includes(tag) || fit.usable?.includes(tag));
  };
  const creatureBlockRequiresExplicitTaxonomy = (blockId: string) => (
    worldAxisState.creatureTaxonomyAllow.length > 0 &&
    (blockId === 'cd_creature_preset' || blockId === 'cd_creature_class')
  );
  const creaturePartConflictsWithSelection = (
    item: LibraryItemDef,
    selectedFamilies: Set<string>,
    selectedRoles: Set<NonNullable<LibraryItemDef['creaturePartRole']>>
  ) => {
    if (item.creatureFamilyBlock?.some(tag => selectedFamilies.has(tag))) return true;
    const role = item.creaturePartRole;
    if (!role) return false;
    if (creaturePrimaryHeadRoles.has(role) && Array.from(selectedRoles).some(selectedRole => creaturePrimaryHeadRoles.has(selectedRole))) {
      return true;
    }
    if ((role === 'torso' || role === 'lower_body') && item.creaturePartMode === 'replace' && selectedRoles.has(role)) {
      return true;
    }
    return false;
  };
  const rememberCreaturePartSelection = (
    item: LibraryItemDef,
    selectedFamilies: Set<string>,
    selectedRoles: Set<NonNullable<LibraryItemDef['creaturePartRole']>>
  ) => {
    if (item.creatureFamily) selectedFamilies.add(item.creatureFamily);
    item.creatureFamilyAllow?.forEach(tag => selectedFamilies.add(tag));
    if (item.creaturePartRole) selectedRoles.add(item.creaturePartRole);
  };
  const pickCreatureIntentItems = (
    blockId: string,
    items: LibraryItemDef[],
    count: number,
    preset: ContentIntentPreset,
    taxonomyPrefer: CreatureTaxonomyTag[],
    selectedFamilies: Set<string>,
    selectedRoles: Set<NonNullable<LibraryItemDef['creaturePartRole']>>
  ) => {
    const pool = [...items];
    const selected: LibraryItemDef[] = [];
    while (pool.length > 0 && selected.length < count) {
      const candidates = pool
        .map((item, index) => {
          if (creatureBlockRequiresExplicitTaxonomy(blockId) && !creatureItemExplicitlyMatchesTaxonomy(item, taxonomyPrefer)) {
            return { item, index, weight: 0 };
          }
          if ((blockId === 'cd_creature_head' || blockId === 'cd_creature_body') && creaturePartConflictsWithSelection(item, selectedFamilies, selectedRoles)) {
            return { item, index, weight: 0 };
          }
          const baseWeight = Math.max(0, getRandomWeightForItem(blockId, item));
          const keyWeight = itemHasAnyKey(item, preset.keys) ? 8 : 1;
          const taxonomyWeight = getCreatureTaxonomyIntentWeight(item, taxonomyPrefer);
          return { item, index, weight: baseWeight * keyWeight * taxonomyWeight };
        })
        .filter(entry => entry.weight > 0);
      if (candidates.length === 0) break;
      const totalWeight = candidates.reduce((sum, entry) => sum + entry.weight, 0);
      let cursor = Math.random() * totalWeight;
      const picked = candidates.find(entry => {
        cursor -= entry.weight;
        return cursor <= 0;
      }) || candidates[candidates.length - 1];
      selected.push(picked.item);
      rememberCreaturePartSelection(picked.item, selectedFamilies, selectedRoles);
      pool.splice(picked.index, 1);
    }
    return selected;
  };
  const applyContentIntentCreatureSubjectRandom = (
    nextState: NarrativeFieldState,
    preset: ContentIntentPreset,
    managedBlocks: string[]
  ) => {
    const contentIntentItemCache = new Map<string, LibraryItemDef[]>();
    const selectedFamilies = new Set<string>();
    const selectedRoles = new Set<NonNullable<LibraryItemDef['creaturePartRole']>>();
    const taxonomyPrefer = getCreatureIntentTaxonomyPrefer(preset);
    const rank = contentIntentDensityRank();
    const targetTerms = getCreatureContentIntentDensityTargetCount();
    let usedTerms = 0;

    managedBlocks.forEach(blockId => {
      if (!isBlockLocked(blockId)) nextState[blockId] = [];
    });

    const addCreatureBlock = (blockId: string, requestedCount = 1) => {
      if (usedTerms >= targetTerms || isBlockLocked(blockId)) return;
      const items = getContentIntentItemsForBlock(blockId, contentIntentItemCache);
      if (items.length === 0) return;
      const capacity = Math.max(1, CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1);
      const count = Math.min(capacity, requestedCount, Math.max(0, targetTerms - usedTerms));
      const selected = pickCreatureIntentItems(blockId, items, count, preset, taxonomyPrefer, selectedFamilies, selectedRoles).map(item => item.name);
      if (selected.length === 0) return;
      nextState[blockId] = selected;
      usedTerms += selected.length;
    };

    const allowDoubleArchetype = rank >= 5 ? Math.random() < 0.4 : rank >= 4 ? Math.random() < 0.18 : false;
    const presetSubjectPrimary = contentIntentPresetBlockList(preset, 'subjectPrimary');
    const presetSubjectSupport = contentIntentPresetBlockList(preset, 'subjectSupport');
    const preferredArchetypeBlocks = shuffleVisualPresetBlocks(
      creatureArchetypeBlocks.filter(blockId => presetSubjectPrimary.includes(blockId) || presetSubjectSupport.includes(blockId))
    );
    const archetypeSeed = preferredArchetypeBlocks[0] || (Math.random() < 0.62 ? 'cd_creature_preset' : 'cd_creature_class');
    addCreatureBlock(archetypeSeed, archetypeSeed === 'cd_creature_class' && rank >= 5 ? 2 : 1);
    if (allowDoubleArchetype) {
      creatureArchetypeBlocks.filter(blockId => blockId !== archetypeSeed).slice(0, 1).forEach(blockId => addCreatureBlock(blockId, 1));
    }

    if (rank >= 2 || Math.random() < 0.7) addCreatureBlock('cd_creature_size', 1);
    const structurePlan = shuffleVisualPresetBlocks([
      ...creatureStructureBlocks.filter(blockId => presetSubjectPrimary.includes(blockId)),
      ...creatureStructureBlocks.filter(blockId => presetSubjectSupport.includes(blockId))
    ]);
    structurePlan.forEach(blockId => {
      if (usedTerms >= targetTerms) return;
      const capacity = Math.max(1, CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1);
      const desired = blockId === 'cd_creature_texture'
        ? Math.min(capacity, rank >= 5 ? 3 : rank >= 3 ? 2 : 1)
        : Math.min(capacity, rank >= 5 ? 2 : 1);
      addCreatureBlock(blockId, desired);
    });

    const behaviorSeed = shuffleVisualPresetBlocks(creatureBehaviorBlocks)[0] || 'cd_creature_mood';
    addCreatureBlock(behaviorSeed, 1);
    if (rank >= 4) {
      creatureBehaviorBlocks.filter(blockId => blockId !== behaviorSeed).forEach(blockId => addCreatureBlock(blockId, 1));
    }
    if (presetSubjectPrimary.includes('cd_creature_element') || rank >= 4 || Math.random() < 0.38) {
      addCreatureBlock('cd_creature_element', 1);
    }

    if (usedTerms < targetTerms) {
      const fillerBlocks = Array.from(new Set([
        ...presetSubjectPrimary,
        ...presetSubjectSupport,
        ...creatureSubjectBlocks
      ])).filter(blockId => !creatureArchetypeBlocks.includes(blockId));
      shuffleVisualPresetBlocks(fillerBlocks).forEach(blockId => {
        if (usedTerms >= targetTerms) return;
        const existing = nextState[blockId] || [];
        const capacity = Math.max(1, CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1);
        if (existing.length >= capacity) return;
        const items = getContentIntentItemsForBlock(blockId, contentIntentItemCache)
          .filter(item => !existing.includes(item.name));
        const selected = pickCreatureIntentItems(
          blockId,
          items,
          Math.min(capacity - existing.length, targetTerms - usedTerms),
          preset,
          taxonomyPrefer,
          selectedFamilies,
          selectedRoles
        ).map(item => item.name);
        if (selected.length === 0) return;
        nextState[blockId] = [...existing, ...selected];
        usedTerms += selected.length;
      });
    }
  };
  const applyContentIntentHumanSubjectRandom = (
    nextState: NarrativeFieldState,
    preset: ContentIntentPreset,
    managedBlocks: string[]
  ) => {
    const contentIntentItemCache = new Map<string, LibraryItemDef[]>();
    managedBlocks.forEach(blockId => {
      if (!isBlockLocked(blockId)) nextState[blockId] = [];
    });
    const targetTerms = getContentIntentDensityTargetCount();
    let usedTerms = 0;
    const selectedBlocks = new Set<string>();
    const addBlock = (blockId: string, requestedCount = 1, genderSignal: LinkedGenderSignal = deriveLinkedGenderSignalFromState(nextState)) => {
      if (usedTerms >= targetTerms || selectedBlocks.has(blockId) || isBlockLocked(blockId)) return;
      const capacity = contentIntentBlockCapacity(blockId);
      const remaining = Math.max(0, targetTerms - usedTerms);
      const count = Math.min(capacity, requestedCount, remaining);
      const values = pickContentIntentBlockValues(blockId, preset, count, genderSignal, contentIntentItemCache);
      if (values.length === 0) return;
      nextState[blockId] = values;
      selectedBlocks.add(blockId);
      usedTerms += values.length;
    };

    addBlock('cd_gender');
    let genderSignal = deriveLinkedGenderSignalFromState(nextState);
    const seedBlock = shuffleVisualPresetBlocks([...humanSubjectExclusiveSeedBlocks])[0] || 'cd_persona';
    addBlock(seedBlock, 1, genderSignal);
    const styleCount = Math.random() < 0.56 || targetTerms >= 24 ? 2 : 1;
    shuffleVisualPresetBlocks([...humanSubjectStyleProtocolBlocks]).slice(0, styleCount).forEach(blockId => addBlock(blockId, 1, genderSignal));
    const hairBlock = linkedHairStyleBlocksForGender(genderSignal, activeLinkedRandomPreset)[0] || 'cd_hair_style_f';
    addBlock(hairBlock, 1, genderSignal);
    genderSignal = deriveLinkedGenderSignalFromState(nextState);
    if (blockAllowedByLinkedGender('cd_beard_style', genderSignal, activeLinkedRandomPreset) && (genderSignal === 'MASCULINE' || targetTerms >= 24 || Math.random() < 0.24)) {
      addBlock('cd_beard_style', 1, genderSignal);
    }
    addBlock(shuffleVisualPresetBlocks([...humanSubjectActionStateBlocks])[0] || 'cd_static_pose', 1, genderSignal);

    const presetPriorityBlocks = [...preset.subjectPrimary, ...preset.subjectSupport, ...preset.subjectLow]
      .filter(blockId => humanSubjectOptionalFineBlocks.includes(blockId) || humanSubjectMultiSelectBlocks.includes(blockId));
    const fillerBlocks = Array.from(new Set([...presetPriorityBlocks, ...humanSubjectOptionalFineBlocks]))
      .filter(blockId => !humanSubjectExclusiveSeedBlocks.includes(blockId))
      .filter(blockId => !humanSubjectStyleProtocolBlocks.includes(blockId))
      .filter(blockId => !humanSubjectActionStateBlocks.includes(blockId))
      .filter(blockId => !humanSubjectHairStyleBlocks.includes(blockId))
      .filter(blockId => blockId !== 'cd_beard_style' && blockId !== 'cd_gender');

    shuffleVisualPresetBlocks(fillerBlocks).forEach(blockId => {
      if (usedTerms >= targetTerms) return;
      const capacity = contentIntentBlockCapacity(blockId);
      const desired = humanSubjectMultiSelectBlocks.includes(blockId)
        ? Math.min(capacity, targetTerms >= 31 ? 3 : targetTerms >= 17 ? 2 : 1)
        : 1;
      addBlock(blockId, desired, genderSignal);
    });

    if (usedTerms < targetTerms) {
      shuffleVisualPresetBlocks(humanSubjectMultiSelectBlocks).forEach(blockId => {
        if (usedTerms >= targetTerms || isBlockLocked(blockId)) return;
        const existing = nextState[blockId] || [];
        const capacity = contentIntentBlockCapacity(blockId);
        if (existing.length >= capacity) return;
        const values = pickContentIntentBlockValues(blockId, preset, capacity, genderSignal, contentIntentItemCache)
          .filter(value => !existing.includes(value));
        const needed = Math.min(values.length, capacity - existing.length, targetTerms - usedTerms);
        if (needed <= 0) return;
        nextState[blockId] = [...existing, ...values.slice(0, needed)];
        usedTerms += needed;
      });
    }

    enforceLinkedGenderOnState(nextState, activeLinkedRandomPreset, genderSignal);
  };
  const applyContentIntentRandom = (nextState: NarrativeFieldState, focus: LinkedRandomFocus = 'GLOBAL', forcedPreset?: ContentIntentPreset) => {
    const preset = forcedPreset || chooseContentIntentPreset();
    setLastContentIntentPreset(preset);
    if (focus === 'GLOBAL' || focus === 'SUBJECT') {
      setSubjectMode(preset.subjectMode);
      setObjectRoute(preset.subjectMode === 'CREATURE' ? 'CREATURE' : 'HUMAN');
    }
    const managedBlocks = getContentIntentManagedBlocks(preset, focus);
    if ((focus === 'GLOBAL' || focus === 'SUBJECT') && preset.subjectMode === 'HUMAN') {
      applyContentIntentHumanSubjectRandom(nextState, preset, managedBlocks.filter(blockId => [...humanSubjectBlocks, ...styleProtocolBlocks].includes(blockId)));
      if (focus === 'SUBJECT') return;
    }
    if ((focus === 'GLOBAL' || focus === 'SUBJECT') && preset.subjectMode === 'CREATURE') {
      applyContentIntentCreatureSubjectRandom(nextState, preset, managedBlocks.filter(blockId => creatureSubjectBlocks.includes(blockId)));
      if (focus === 'SUBJECT') return;
    }
    const targetBlocks = getContentIntentBlocksForFocus(preset, focus).filter(blockId => managedBlocks.includes(blockId));
    managedBlocks.forEach(blockId => {
      if (!isBlockLocked(blockId) && !targetBlocks.includes(blockId)) nextState[blockId] = [];
    });
    targetBlocks.forEach(blockId => {
      if (isBlockLocked(blockId)) return;
      if (blockId === 'cd_spacetime_coordinate') {
        const coordinate = getRandomSur3CoordinatePreset(lang === 'EN' ? 'EN' : 'CN');
        if (!isSpaceAnchorValueLocked) nextState['cd_space_anchor_exact'] = [lang === 'EN' ? coordinate.spaceEn : coordinate.spaceCn];
        if (!isTimeAnchorValueLocked) {
          nextState['cd_time_anchor_exact'] = coordinate.timeMode === 'era'
            ? (coordinate.time ? [coordinate.time] : [])
            : (coordinate.year === null ? [] : [String(clampTimelineYear(coordinate.year))]);
        }
        updateSpacetimeCoordinateDisplay(nextState);
        return;
      }
      if (blockId === 'cd_space_anchor_exact' || blockId === 'cd_time_anchor_exact') return;
      const items = (fieldStyleBlocks.includes(blockId) || styleProtocolBlocks.includes(blockId))
        ? (getFilteredLibraryDataForBlock(blockId)?.[0]?.items || [])
        : getRandomizableItemsForBlock(blockId);
      if (items.length === 0) return;
      const limit = CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1;
      const count = Math.min(limit, contentIntentRandomDensity === 'FULL' && limit > 1 ? 2 : 1);
      const keys = focus === 'FIELD'
        ? preset.keys
        : focus === 'LIGHT'
          ? preset.keys
          : preset.keys;
      const selected = pickContentIntentItems(blockId, items, count, keys).map(item => item.name);
      nextState[blockId] = selected;
    });
  };
  const itemMetaList = (item: LibraryItemDef, key: string): string[] => {
    const value = (item as any)[key];
    if (Array.isArray(value)) return value.map(String);
    if (typeof value === 'string') return [value];
    return [];
  };
  const itemMetaValue = (item: LibraryItemDef, key: string): string => {
    const value = (item as any)[key];
    return typeof value === 'string' ? value : '';
  };
  const intersects = (left: readonly string[], right: readonly string[]) => {
    if (left.length === 0 || right.length === 0) return false;
    return left.some(value => right.includes(value));
  };
  const linkedAppearanceBlocks = ['cd_hair_color', 'cd_eye_color', 'cd_eye_shape', 'cd_eye_fx', 'cd_face_features', 'cd_expression', 'cd_makeup_style', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style'];
  const linkedStrongMakeupRegisters = ['EDITORIAL', 'STAGE', 'RITUAL', 'TECH', 'BOUNDARY'];
  const genderSignalSearchText = (item?: LibraryItemDef | null) => item ? itemSearchText(item) : '';
  const deriveLinkedGenderSignalFromItem = (item?: LibraryItemDef | null): LinkedGenderSignal => {
    const metaSignal = itemMetaValue(item || ({} as LibraryItemDef), 'genderSignal');
    if (metaSignal === 'FEMININE' || metaSignal === 'MASCULINE' || metaSignal === 'ANDROGYNOUS') return metaSignal;
    const search = genderSignalSearchText(item);
    if (!search) return 'OPEN';
    if (search.includes('androgynous') || search.includes('中性') || search.includes('混合') || search.includes('流动') || search.includes('boyish') || search.includes('gamine') || search.includes('少年感')) return 'ANDROGYNOUS';
    if (search.includes('feminine') || search.includes('女性')) return 'FEMININE';
    if (search.includes('masculine') || search.includes('男性')) return 'MASCULINE';
    return 'OPEN';
  };
  const getSelectedLibraryItems = (blockId: string, state: NarrativeFieldState = fieldState) => {
    const tags = state[blockId] || [];
    return tags
      .map(tag => getItemDetails(tag, blockId))
      .filter((item): item is LibraryItemDef => Boolean(item));
  };
  const deriveLinkedGenderSignalFromState = (state: NarrativeFieldState = fieldState): LinkedGenderSignal => {
    const selectedGenderItem = getSelectedLibraryItems('cd_gender', state)[0];
    return deriveLinkedGenderSignalFromItem(selectedGenderItem);
  };
  const presetAllowsGenderContrast = (preset: ConceptLinkedRandomPreset) => preset.genderPolicy === 'FUSION' || preset.genderPolicy === 'TRANSGRESSIVE';
  const presetAllowsStrongGenderContrast = (preset: ConceptLinkedRandomPreset) => preset.genderPolicy === 'TRANSGRESSIVE';
  const linkedMakeupIsRestrained = (item: LibraryItemDef) => {
    const register = itemMetaValue(item, 'makeupRegister');
    const intensity = itemMetaValue(item, 'groomingIntensity');
    if (register) return register === 'RESTRAINED' || intensity === 'LIGHT';
    const search = itemSearchText(item);
    return search.includes('no_makeup') || search.includes('clean_base') || search.includes('matte_makeup') || search.includes('nude_lip') || search.includes('伪素颜') || search.includes('干净底妆') || search.includes('哑光') || search.includes('裸色');
  };
  const linkedMakeupIsStrong = (item: LibraryItemDef) => {
    const register = itemMetaValue(item, 'makeupRegister');
    const intensity = itemMetaValue(item, 'groomingIntensity');
    return linkedStrongMakeupRegisters.includes(register) || intensity === 'STRONG' || intensity === 'EXTREME';
  };
  const linkedBeardIsLight = (item: LibraryItemDef) => {
    const register = itemMetaValue(item, 'beardRegister');
    const intensity = itemMetaValue(item, 'groomingIntensity');
    if (register) return register === 'NONE' || register === 'LIGHT' || intensity === 'LIGHT' || intensity === 'NONE';
    const search = itemSearchText(item);
    return search.includes('clean_shaven') || search.includes('light_stubble') || search.includes('designer_stubble') || search.includes('干净无须') || search.includes('浅胡茬') || search.includes('修饰胡茬');
  };
  const blockAllowedByLinkedGender = (blockId: string, genderSignal: LinkedGenderSignal, preset: ConceptLinkedRandomPreset) => {
    if (genderSignal === 'OPEN') return true;
    const allowContrast = presetAllowsGenderContrast(preset);
    if (blockId === 'cd_hair_style_f') return genderSignal !== 'MASCULINE' || allowContrast;
    if (blockId === 'cd_hair_style_m') return genderSignal !== 'FEMININE' || allowContrast;
    if (blockId === 'cd_beard_style') return genderSignal === 'MASCULINE' || genderSignal === 'ANDROGYNOUS' || presetAllowsStrongGenderContrast(preset);
    return true;
  };
  const itemAllowedByLinkedGender = (blockId: string, item: LibraryItemDef, genderSignal: LinkedGenderSignal, preset: ConceptLinkedRandomPreset) => {
    if (!blockAllowedByLinkedGender(blockId, genderSignal, preset)) return false;
    if (genderSignal === 'OPEN') return true;
    const itemGenderCoding = itemMetaValue(item, 'genderCoding');
    const allowContrast = presetAllowsGenderContrast(preset);
    const allowStrongContrast = presetAllowsStrongGenderContrast(preset);
    if (itemGenderCoding === 'FEMININE' && genderSignal === 'MASCULINE' && !allowContrast) return false;
    if (itemGenderCoding === 'MASCULINE' && genderSignal === 'FEMININE' && !allowContrast) return false;
    if (blockId === 'cd_beard_style') {
      if (genderSignal === 'MASCULINE') return true;
      if (genderSignal === 'ANDROGYNOUS') return linkedBeardIsLight(item) || allowStrongContrast;
      return allowStrongContrast && linkedBeardIsLight(item);
    }
    if (blockId === 'cd_makeup_style') {
      if (genderSignal === 'FEMININE') return true;
      if (genderSignal === 'ANDROGYNOUS') return preset.genderPolicy === 'STRICT' ? !linkedMakeupIsStrong(item) : true;
      return linkedMakeupIsRestrained(item) || (allowContrast && !linkedMakeupIsStrong(item)) || allowStrongContrast;
    }
    return true;
  };
  const enforceLinkedGenderOnState = (state: NarrativeFieldState, preset: ConceptLinkedRandomPreset, genderSignal: LinkedGenderSignal) => {
    if (genderSignal === 'OPEN') return;
    linkedAppearanceBlocks.forEach(blockId => {
      if (isBlockLocked(blockId)) return;
      const tags = state[blockId] || [];
      if (tags.length === 0) return;
      if (!blockAllowedByLinkedGender(blockId, genderSignal, preset)) {
        state[blockId] = [];
        return;
      }
      const filteredTags = tags.filter(tag => {
        const item = getItemDetails(tag, blockId);
        return item ? itemAllowedByLinkedGender(blockId, item, genderSignal, preset) : true;
      });
      if (filteredTags.length !== tags.length) state[blockId] = filteredTags;
    });
  };
  const buildLinkedSubjectProfile = (state: NarrativeFieldState, preset: ConceptLinkedRandomPreset): LinkedSubjectProfile => {
    const profileItems = ['cd_age', 'cd_body_type', 'cd_occupation', 'cd_persona']
      .flatMap(blockId => getSelectedLibraryItems(blockId, state));
    const metaFromItems = (key: string) => profileItems.flatMap(item => itemMetaList(item, key));
    const evidenceTags = new Set<string>([
      ...preset.subjectPrefer.map(String),
      ...worldAxisState.genreAllow.map(String),
      ...profileItems.flatMap(item => item.affects || []),
      ...metaFromItems('evidenceTags')
    ].map(value => value.toLowerCase()));
    return {
      ageBands: metaFromItems('ageBand'),
      ageWear: metaFromItems('ageWear'),
      bodyFunctions: metaFromItems('bodyFunction'),
      evidenceTags: Array.from(evidenceTags),
      ontologyMax: Math.max(1, ...profileItems.map(item => item.ontologyLevel || 1))
    };
  };
  const itemMatchesSubjectEvidence = (item: LibraryItemDef, profile: LinkedSubjectProfile) => {
    const itemTags = [
      ...(item.affects || []),
      ...itemMetaList(item, 'evidenceTags'),
      ...itemMetaList(item, 'controls'),
      ...itemMetaList(item, 'tags')
    ].map(value => value.toLowerCase());
    return intersects(itemTags, profile.evidenceTags);
  };
  const itemAllowedByLinkedSubjectProfile = (blockId: string, item: LibraryItemDef, profile: LinkedSubjectProfile, preset: ConceptLinkedRandomPreset) => {
    const ontologyLevel = item.ontologyLevel || (item as any).surrealLevel || 1;
    if (['cd_eye_fx', 'cd_skin_texture', 'cd_body_features', 'cd_body_modification', 'cd_body_damage'].includes(blockId)) {
      const allowedLevel = Math.max(preset.surrealMax, profile.ontologyMax);
      if (ontologyLevel > allowedLevel) return false;
    }
    if (blockId === 'cd_beard_style' && profile.ageBands.includes('LATE_TEEN')) {
      return linkedBeardIsLight(item);
    }
    if (['cd_skin_texture', 'cd_surface_state', 'cd_body_damage'].includes(blockId)) {
      const ageWear = itemMetaValue(item, 'ageWear');
      if (ageWear && profile.ageWear.length > 0 && !profile.ageWear.includes(ageWear) && preset.genderPolicy === 'STRICT') return false;
    }
    return true;
  };
  const getItemEraCompatibility = (item: LibraryItemDef, preset: ConceptLinkedRandomPreset): EraCompatibility => {
    const eras = item.eras || [];
    if (eras.length === 0) return 'neutral';
    if (sur3EraSetsIntersect(eras, preset.eraAllow)) return 'match';
    const eraStrictness = item.eraStrictness || 'soft';
    if (eraStrictness === 'none') return 'neutral';
    if (eraStrictness === 'hard') return 'hard_mismatch';
    const anachronismRisk = item.anachronismRisk || (item.risk === 'high' ? 'high' : item.risk === 'medium' ? 'medium' : 'low');
    if (anachronismRisk === 'high' && !preset.allowHighRisk && linkedRandomConflictPolicy !== 'MANIFEST') return 'hard_mismatch';
    if (linkedRandomConflictPolicy === 'DELETE') return 'hard_mismatch';
    return 'soft_mismatch';
  };

  const itemPassesEraCompatibility = (item: LibraryItemDef, preset: ConceptLinkedRandomPreset) => {
    const compatibility = getItemEraCompatibility(item, preset);
    if (compatibility !== 'hard_mismatch') return true;
    return false;
  };

  const blockParticipatesInGenreAxis = (blockId: string) => blockUsesSimpleHardAxis(blockId);

  const getItemGenreCompatibility = (blockId: string, item: LibraryItemDef, preset: ConceptLinkedRandomPreset): GenreCompatibility => {
    if (!blockParticipatesInGenreAxis(blockId)) return 'neutral';
    const activeGenrePool = uniqueConceptTagIds([preset.primaryGenre, ...(preset.secondaryGenres || []), ...(preset.genreAllow || [])].filter(Boolean));
    if (activeGenrePool.length === 0) return 'neutral';
    const match = getConceptSimpleAxisMatch(item, { categoryTags: activeGenrePool });
    if (match.categoryFitLevel === 'exclude') return 'hard_mismatch';
    if (match.categoryFitLevel === 'strong' || match.categoryFitLevel === 'usable') return 'match';
    if (match.categoryFitLevel === 'fusion') return 'soft_mismatch';
    if (match.categoryFitLevel === 'weak' || match.categoryFitLevel === 'neutral') return 'hard_mismatch';
    const genreTags = item.genreTags || [];
    if (genreTags.length > 0 && intersects(genreTags, activeGenrePool)) return 'match';
    return 'hard_mismatch';
  };

  const itemPassesGenreCompatibility = (blockId: string, item: LibraryItemDef, preset: ConceptLinkedRandomPreset) => {
    const compatibility = getItemGenreCompatibility(blockId, item, preset);
    if (compatibility !== 'hard_mismatch') return true;
    return false;
  };

  const getItemCultureCompatibility = (blockId: string, item: LibraryItemDef, preset: ConceptLinkedRandomPreset): CultureCompatibility => {
    if (!blockParticipatesInGenreAxis(blockId)) return 'neutral';
    const cultureTags = item.cultureTags || [];
    const spaceTags = item.spaceTags || [];
    const cultureMatched = cultureTags.length > 0 && intersects(cultureTags, preset.cultureAllow || []);
    const spaceMatched = spaceTags.length > 0 && intersects(spaceTags, preset.spaceAllow || []);
    if (cultureMatched || spaceMatched) return 'match';
    if (cultureTags.length === 0 && spaceTags.length === 0) return 'neutral';
    const cultureStrictness = item.cultureStrictness || 'soft';
    if (cultureStrictness === 'none') return 'neutral';
    if (cultureStrictness === 'hard' && linkedRandomConflictPolicy === 'DELETE') return 'hard_mismatch';
    if (cultureStrictness === 'hard' && !preset.allowSecondaryAxis && linkedRandomConflictPolicy === 'TRANSLATE') return 'hard_mismatch';
    return 'soft_mismatch';
  };

  const itemPassesCultureCompatibility = (blockId: string, item: LibraryItemDef, preset: ConceptLinkedRandomPreset) => {
    const compatibility = getItemCultureCompatibility(blockId, item, preset);
    if (compatibility !== 'hard_mismatch') return true;
    return false;
  };

  const itemPassesLinkedPreset = (blockId: string, item: LibraryItemDef, preset: ConceptLinkedRandomPreset) => {
    const ontologyLevel = item.ontologyLevel || (item as any).surrealLevel || 1;
    if (ontologyLevel > preset.surrealMax) return false;
    if (!preset.allowHighRisk && (item.risk === 'high' || (item as any).risk === 'high')) return false;

    if (!itemPassesEraCompatibility(item, preset)) return false;
    if (!itemPassesGenreCompatibility(blockId, item, preset)) return false;
    if (!itemPassesCultureCompatibility(blockId, item, preset)) return false;

    const conflictTags = itemMetaList(item, 'conflictTags');
    if (intersects(conflictTags, ['primitive_only', 'pre_electric_only']) && preset.eraAllow.some(era => ['near_future', 'far_future', 'future'].includes(era))) return false;
    if (intersects(conflictTags, ['strict_historical_realism', 'strict_medieval_realism']) && preset.eraAllow.some(era => ['primitive', 'slave', 'feudal', 'early_modern'].includes(era))) return false;

    const realityTags = [...(item.realityTags || []), ...itemMetaList(item, 'realityAnchor')];
    const spacetimeAnchor = itemMetaValue(item, 'spacetimeAnchor') || itemMetaValue(item, 'spacetimeSystem');
    const lightAnchor = itemMetaValue(item, 'lightAnchor');

    if (spacetimeFieldUiBlocks.includes(blockId)) {
      const fieldTextMatch = itemHasAnyKey(item, preset.fieldPrefer);
      const realityMatch = intersects(realityTags, preset.realityAllow);
      const spacetimeMatch = Boolean(spacetimeAnchor && preset.spacetimeAnchorAllow.some(key => spacetimeAnchor.includes(key) || key.includes(spacetimeAnchor)));
      if (['cd_field_preset', 'cd_scene_real', 'cd_scene_surreal', 'cd_scene_abstract', 'cd_atmosphere', 'cd_particles'].includes(blockId)) {
        return fieldTextMatch || realityMatch || spacetimeMatch || preset.allowSecondaryAxis;
      }
    }

    if (aestheticLightAuditBlocks.includes(blockId)) {
      const lightTextMatch = itemHasAnyKey(item, preset.lightPrefer);
      const lightMatch = Boolean(lightAnchor && preset.lightAnchorAllow.some(key => lightAnchor.includes(key) || key.includes(lightAnchor)));
      const realityMatch = intersects(realityTags, preset.realityAllow);
      return lightTextMatch || lightMatch || realityMatch || ['cd_light_preset', 'cd_light_mood', 'cd_light_direction', 'cd_light_shape', 'cd_light_air', 'cd_light_color_temp'].includes(blockId);
    }

    if ([...humanSubjectBlocks, ...creatureSubjectBlocks].includes(blockId)) {
      const subjectTextMatch = itemHasAnyKey(item, preset.subjectPrefer);
      const realityMatch = intersects(realityTags, preset.realityAllow);
      return subjectTextMatch || realityMatch || preset.allowSecondaryAxis || blockId === 'cd_age' || blockId === 'cd_gender';
    }

    return true;
  };

  const getLinkedRandomPool = (blockId: string, preset: ConceptLinkedRandomPreset, genderSignal: LinkedGenderSignal = 'OPEN', subjectProfile?: LinkedSubjectProfile) => {
    const items = getRandomizableItemsForBlock(blockId);
    if (items.length === 0) return [];
    const genderAllowedItems = items.filter(item => itemAllowedByLinkedGender(blockId, item, genderSignal, preset));
    if (genderAllowedItems.length === 0) return [];
    const profileAllowedItems = subjectProfile
      ? genderAllowedItems.filter(item => itemAllowedByLinkedSubjectProfile(blockId, item, subjectProfile, preset))
      : genderAllowedItems;
    const candidateItems = profileAllowedItems.length > 0 ? profileAllowedItems : genderAllowedItems;
    const filtered = candidateItems.filter(item => itemPassesLinkedPreset(blockId, item, preset));
    if (filtered.length > 0) return filtered;
    const softFiltered = candidateItems.filter(item => {
      const ontologyLevel = item.ontologyLevel || (item as any).surrealLevel || 1;
      if (ontologyLevel > preset.surrealMax) return false;
      if (!preset.allowHighRisk && item.risk === 'high') return false;
      return true;
    });
    return softFiltered.length > 0 ? softFiltered : candidateItems;
  };

  const pickLinkedItems = (
    blockId: string,
    items: LibraryItemDef[],
    count: number,
    preset: ConceptLinkedRandomPreset,
    preferKeys: readonly string[],
    subjectProfile?: LinkedSubjectProfile
  ) => {
    const pool = [...items];
    const selected: LibraryItemDef[] = [];
    while (pool.length > 0 && selected.length < count) {
      const weighted = pool.map(item => {
        const baseWeight = Math.max(0, getRandomWeightForItem(blockId, item));
        const preferred = itemHasAnyKey(item, preferKeys);
        const eraCompatibility = getItemEraCompatibility(item, preset);
        const eraWeight = eraCompatibility === 'match'
          ? 1.4
          : eraCompatibility === 'neutral'
            ? 1
            : eraCompatibility === 'soft_mismatch'
              ? (linkedRandomConflictPolicy === 'TRANSLATE' ? 0.42 : linkedRandomConflictPolicy === 'ANOMALY' ? 0.62 : 0.82)
              : 0;
        const genreCompatibility = getItemGenreCompatibility(blockId, item, preset);
        const categoryFitLevel = getConceptSimpleAxisMatch(item, { categoryTags: preset.genreAllow || [] }).categoryFitLevel;
        const genreWeight = genreCompatibility === 'match'
          ? (categoryFitLevel === 'strong' ? 2.1 : 1.6)
          : genreCompatibility === 'soft_mismatch'
            ? (categoryFitLevel === 'fusion' ? 0.95 : 0.58)
            : genreCompatibility === 'hard_mismatch'
              ? 0
              : 1;
        const cultureWeight = 1;
        const ontologyLevel = item.ontologyLevel || (item as any).surrealLevel || 1;
        const riskPenalty = item.risk === 'medium' ? 0.75 : item.risk === 'high' ? 0.35 : 1;
        const levelPenalty = ontologyLevel > preset.surrealMax ? 0 : 1;
        const evidenceBoost = subjectProfile && ['cd_costume_logic', 'cd_costume_system', 'cd_prop_anchor', 'cd_symbol_system', 'cd_surface_state', 'cd_body_damage', 'cd_static_pose', 'cd_dynamic_action'].includes(blockId) && itemMatchesSubjectEvidence(item, subjectProfile) ? 5 : 1;
        return { item, weight: baseWeight * (preferred ? 10 : 1) * evidenceBoost * eraWeight * genreWeight * cultureWeight * riskPenalty * levelPenalty };
      });
      const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);
      if (totalWeight <= 0) break;
      let cursor = Math.random() * totalWeight;
      const pickedIndex = weighted.findIndex(entry => {
        cursor -= entry.weight;
        return cursor <= 0;
      });
      const index = pickedIndex >= 0 ? pickedIndex : weighted.length - 1;
      selected.push(weighted[index].item);
      pool.splice(index, 1);
    }
    return selected.length > 0 ? selected : pickWeightedUniqueItems(blockId, items, count);
  };

  const linkedCountForBlock = (blockId: string, preset: ConceptLinkedRandomPreset) => {
    const density = linkedRandomDensity || preset.density;
    const limit = CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1;
    if (limit <= 1) return 1;
    if (['cd_field_preset', 'cd_scene_real', 'cd_scene_surreal', 'cd_scene_abstract', 'cd_light_preset', 'cd_light_mood', 'cd_light_type', 'cd_light_direction', 'cd_light_shape', 'cd_light_air', 'cd_light_color_temp'].includes(blockId)) return 1;
    if (density === 'LIGHT') return 1;
    if (density === 'FULL') return Math.min(limit, 2);
    return Math.min(limit, Math.random() < 0.35 ? 2 : 1);
  };

  const linkedHairStyleBlocksForGender = (genderSignal: LinkedGenderSignal, preset: ConceptLinkedRandomPreset) => {
    if (genderSignal === 'FEMININE') return presetAllowsGenderContrast(preset) && Math.random() < 0.18 ? ['cd_hair_style_m'] : ['cd_hair_style_f'];
    if (genderSignal === 'MASCULINE') return presetAllowsGenderContrast(preset) && Math.random() < 0.18 ? ['cd_hair_style_f'] : ['cd_hair_style_m'];
    if (genderSignal === 'ANDROGYNOUS') return [Math.random() < 0.5 ? 'cd_hair_style_f' : 'cd_hair_style_m'];
    return [Math.random() < 0.5 ? 'cd_hair_style_f' : 'cd_hair_style_m'];
  };

  const linkedAppearanceBlocksForDensity = (preset: ConceptLinkedRandomPreset, genderSignal: LinkedGenderSignal) => {
    if (preset.subjectMode !== 'HUMAN') return [];
    const density = linkedRandomDensity || preset.density;
    const hairStyleBlocks = linkedHairStyleBlocksForGender(genderSignal, preset);
    const baseAppearance = ['cd_hair_color', ...hairStyleBlocks, 'cd_eye_color', 'cd_eye_shape'];
    const optionalAppearance = [
      'cd_face_features',
      'cd_expression',
      'cd_makeup_style',
      'cd_eye_fx',
      ...(blockAllowedByLinkedGender('cd_beard_style', genderSignal, preset) ? ['cd_beard_style'] : [])
    ];
    const optionalTarget = density === 'LIGHT' ? 1 : density === 'FULL' ? optionalAppearance.length : 3;
    return Array.from(new Set([
      ...baseAppearance,
      ...shuffleVisualPresetBlocks(optionalAppearance).slice(0, optionalTarget)
    ]));
  };

  const linkedLightBlocksForDensity = (preset: ConceptLinkedRandomPreset, focus: LinkedRandomFocus = 'GLOBAL') => {
    const density = linkedRandomDensity || preset.density;
    const lightDetails = ['cd_light_mood', 'cd_light_type', 'cd_light_direction', 'cd_light_air', 'cd_light_color_temp', 'cd_light_shape'];
    const balancedLightDetail = shuffleVisualPresetBlocks(lightDetails)[0] || 'cd_light_mood';
    if (density === 'FULL') return ['cd_light_preset', ...lightDetails];
    if (density === 'BALANCED') return ['cd_light_preset', balancedLightDetail];
    if (focus === 'LIGHT') return [Math.random() < 0.75 ? 'cd_light_preset' : balancedLightDetail];
    return Math.random() < 0.5 ? [Math.random() < 0.7 ? 'cd_light_preset' : balancedLightDetail] : [];
  };

  const linkedBlocksForDensity = (preset: ConceptLinkedRandomPreset, genderSignal: LinkedGenderSignal = 'OPEN', focus: LinkedRandomFocus = 'GLOBAL') => {
    const density = linkedRandomDensity || preset.density;
    const subjectBlocks = preset.subjectMode === 'HUMAN'
      ? ['cd_age', 'cd_occupation', 'cd_persona', 'cd_emotional_core', 'cd_body_type', 'cd_skin_texture', 'cd_surface_state', 'cd_body_damage', 'cd_body_modification', 'cd_costume_logic', 'cd_prop_anchor', 'cd_symbol_system', 'cd_static_pose', 'cd_dynamic_action']
      : ['cd_creature_preset', 'cd_creature_size', 'cd_creature_class', 'cd_creature_element', 'cd_creature_head', 'cd_creature_body', 'cd_creature_mood', 'cd_creature_action', 'cd_creature_texture'];
    const appearanceBlocks = linkedAppearanceBlocksForDensity(preset, genderSignal);
    const subjectTarget = density === 'LIGHT' ? 4 : density === 'FULL' ? 10 : 6;
    const selectedSubjectBlocks = focus === 'SUBJECT' && preset.subjectMode === 'HUMAN'
      ? Array.from(new Set(['cd_persona', ...shuffleVisualPresetBlocks(subjectBlocks).slice(0, subjectTarget)]))
      : shuffleVisualPresetBlocks(subjectBlocks).slice(0, subjectTarget);
    const required = ['cd_spacetime_coordinate', 'cd_field_preset'];
    const fieldOptional = density === 'LIGHT'
      ? ['cd_scene_real']
      : density === 'FULL'
        ? ['cd_scene_real', 'cd_scene_surreal', 'cd_scene_abstract', 'cd_atmosphere', 'cd_particles']
        : ['cd_scene_real', Math.random() < 0.5 ? 'cd_atmosphere' : 'cd_particles'];
    const lightOptional = linkedLightBlocksForDensity(preset, focus);
    const allBlocks = Array.from(new Set([...required, 'cd_gender', ...selectedSubjectBlocks, ...appearanceBlocks, ...fieldOptional, ...lightOptional, ...styleProtocolBlocks]));
    if (focus === 'SUBJECT') return allBlocks.filter(blockId => [...humanSubjectBlocks, ...creatureSubjectBlocks, ...styleProtocolBlocks].includes(blockId));
    if (focus === 'FIELD') return allBlocks.filter(blockId => spacetimeFieldUiBlocks.includes(blockId));
    if (focus === 'LIGHT') return allBlocks.filter(blockId => aestheticLightAuditBlocks.includes(blockId));
    return allBlocks;
  };

  const chooseLinkedPreset = () => {
    let basePreset: ConceptLinkedRandomPreset;
    if (linkedRandomPresetRoute !== 'ALL_PRESETS') {
      basePreset = CONCEPT_LINKED_RANDOM_PRESETS.find(preset => preset.id === linkedRandomPresetRoute) || CONCEPT_LINKED_RANDOM_PRESETS[0];
    } else {
      const pool = CONCEPT_LINKED_RANDOM_PRESETS.filter(preset => linkedRandomConflictPolicy === 'MANIFEST' || preset.conflictPolicy !== 'MANIFEST' || preset.allowHighRisk);
      basePreset = pool[Math.floor(Math.random() * pool.length)] || CONCEPT_LINKED_RANDOM_PRESETS[0];
    }
    return getThemeGovernedLinkedPreset(basePreset);
  };

  const applyLinkedSpacetimePreset = (nextState: NarrativeFieldState, preset: ConceptLinkedRandomPreset) => {
    if (isBlockLocked('cd_spacetime_coordinate')) return;
    const anchorPool = SUR3_SPACE_ANCHORS.filter(anchor => {
      const eraMatch = sur3EraSetsIntersect(anchor.allowedEras, preset.eraAllow);
      const text = [anchor.id, anchor.name, anchor.nameEn, anchor.domain, anchor.scale].filter(Boolean).join(' ').toLowerCase();
      const anchorMatch = preset.fieldPrefer.some(key => text.includes(key.toLowerCase()))
        || preset.spacetimeAnchorAllow.some(key => text.includes(key.toLowerCase()));
      return eraMatch && (anchorMatch || preset.allowSecondaryAxis);
    });
    const fallbackPool = SUR3_SPACE_ANCHORS.filter(anchor => sur3EraSetsIntersect(anchor.allowedEras, preset.eraAllow));
    const pool = anchorPool.length > 0 ? anchorPool : fallbackPool.length > 0 ? fallbackPool : SUR3_SPACE_ANCHORS;
    const anchor = pool[Math.floor(Math.random() * pool.length)];
    if (!anchor) return;
    const coordinate = buildSur3CoordinatePreset(anchor, lang === 'EN' ? 'EN' : 'CN');
    if (!isSpaceAnchorValueLocked) nextState['cd_space_anchor_exact'] = [lang === 'EN' ? coordinate.spaceEn : coordinate.spaceCn];
    if (!isTimeAnchorValueLocked) {
      nextState['cd_time_anchor_exact'] = coordinate.timeMode === 'era'
        ? (coordinate.time ? [coordinate.time] : [])
        : (coordinate.year === null ? [] : [String(clampTimelineYear(coordinate.year))]);
    }
    updateSpacetimeCoordinateDisplay(nextState);
  };
  const applyLinkedAnchorBlock = (nextState: NarrativeFieldState, blockId: string, preset: ConceptLinkedRandomPreset, genderSignal: LinkedGenderSignal, subjectProfile?: LinkedSubjectProfile) => {
    if (isBlockLocked(blockId)) return;
    const pool = getLinkedRandomPool(blockId, preset, genderSignal, subjectProfile);
    if (pool.length === 0) return;
    const selectedItem = pickLinkedItems(blockId, pool, linkedCountForBlock(blockId, preset), preset, preset.subjectPrefer, subjectProfile)[0];
    if (selectedItem) nextState[blockId] = [selectedItem.name];
  };
  const getLinkedRandomManagedBlocks = (preset: ConceptLinkedRandomPreset, focus: LinkedRandomFocus = 'GLOBAL') => {
    if (focus === 'SUBJECT') return preset.subjectMode === 'HUMAN'
      ? [...humanSubjectBlocks, ...styleProtocolBlocks]
      : [...creatureSubjectBlocks, ...styleProtocolBlocks];
    if (focus === 'FIELD') return spacetimeFieldUiBlocks;
    if (focus === 'LIGHT') return aestheticLightAuditBlocks;
    return Array.from(new Set([
      ...humanSubjectBlocks,
      ...creatureSubjectBlocks,
      ...spacetimeFieldUiBlocks,
      ...aestheticLightAuditBlocks,
      'cd_fusion_rule'
    ]));
  };

  const clearLinkedRandomManagedBlocks = (nextState: NarrativeFieldState, preset: ConceptLinkedRandomPreset, focus: LinkedRandomFocus = 'GLOBAL') => {
    const managedBlocks = getLinkedRandomManagedBlocks(preset, focus);
    managedBlocks.forEach(blockId => {
      if (isBlockLocked(blockId)) return;
      nextState[blockId] = [];
    });
  };

  const applyLinkedWorldSubjectLightingRandom = (nextState: NarrativeFieldState, focus: LinkedRandomFocus = 'GLOBAL') => {
    const preset = chooseLinkedPreset();
    const linkedManagedBlocks = getLinkedRandomManagedBlocks(preset, focus);
    if (linkedManagedBlocks.every(blockId => isBlockLocked(blockId))) return;
    clearLinkedRandomManagedBlocks(nextState, preset, focus);
    setLastLinkedRandomPreset(preset);
    setRegisterRandomMode(preset.worldLaw);
    setLinkedRandomDensity(prev => prev || preset.density);
    setLinkedRandomConflictPolicy(prev => prev || preset.conflictPolicy);
    if (focus === 'GLOBAL' || focus === 'SUBJECT') {
      setSubjectMode(preset.subjectMode);
      if (preset.subjectMode === 'HUMAN' && preset.humanRegister) setHumanRegister(preset.humanRegister);
    }

    const fusionCategory = getLibraryCategory('cd_fusion_rule');
    const fusionItem = fusionCategory?.items.find(candidate => candidate.id === `cd_world_law_${preset.worldLaw.toLowerCase().replace('law_', '')}`);
    if (focus === 'GLOBAL' && fusionItem && !isBlockLocked('cd_fusion_rule')) nextState.cd_fusion_rule = [fusionItem.name];
    if (focus === 'GLOBAL' || focus === 'FIELD') applyLinkedSpacetimePreset(nextState, preset);

    let genderSignal = preset.subjectMode === 'HUMAN' ? deriveLinkedGenderSignalFromState(nextState) : 'OPEN';
    if ((focus === 'GLOBAL' || focus === 'SUBJECT') && preset.subjectMode === 'HUMAN' && !isBlockLocked('cd_gender')) {
      const genderPool = getLinkedRandomPool('cd_gender', preset, 'OPEN');
      const selectedGenderItem = pickLinkedItems('cd_gender', genderPool, 1, preset, preset.subjectPrefer)[0];
      if (selectedGenderItem) {
        nextState.cd_gender = [selectedGenderItem.name];
        genderSignal = deriveLinkedGenderSignalFromItem(selectedGenderItem);
      }
    }

    if ((focus === 'GLOBAL' || focus === 'SUBJECT') && preset.subjectMode === 'HUMAN') {
      applyLinkedAnchorBlock(nextState, 'cd_age', preset, genderSignal);
      applyLinkedAnchorBlock(nextState, 'cd_occupation', preset, genderSignal);
      applyLinkedAnchorBlock(nextState, 'cd_body_type', preset, genderSignal);
    }

    if (focus === 'GLOBAL' || focus === 'SUBJECT') enforceLinkedGenderOnState(nextState, preset, genderSignal);
    const subjectProfile = buildLinkedSubjectProfile(nextState, preset);

    linkedBlocksForDensity(preset, genderSignal, focus).forEach(blockId => {
      if (isBlockLocked(blockId) || blockId === 'cd_spacetime_coordinate' || blockId === 'cd_space_anchor_exact' || blockId === 'cd_time_anchor_exact') return;
      if (['cd_gender', 'cd_age', 'cd_occupation', 'cd_body_type'].includes(blockId)) return;
      const pool = getLinkedRandomPool(blockId, preset, genderSignal, subjectProfile);
      if (pool.length === 0) return;
      const preferKeys = aestheticLightAuditBlocks.includes(blockId)
        ? preset.lightPrefer
        : spacetimeFieldUiBlocks.includes(blockId)
          ? preset.fieldPrefer
          : preset.subjectPrefer;
      const selected = pickLinkedItems(blockId, pool, linkedCountForBlock(blockId, preset), preset, preferKeys, subjectProfile).map(item => item.name);
      nextState[blockId] = selected;
    });

    if ((focus === 'GLOBAL' || focus === 'FIELD') && !preset.allowSecondaryAxis) {
      ['cd_scene_surreal', 'cd_scene_abstract'].forEach(blockId => {
        if (!isBlockLocked(blockId)) nextState[blockId] = [];
      });
    }
  };

  const randomizeLinkedWorldSubjectLighting = (focus: LinkedRandomFocus = 'GLOBAL') => {
    const nextState = { ...fieldState };
    applyLinkedWorldSubjectLightingRandom(nextState, focus);
    updateState(nextState);
  };

  const applyIndependentCoreModuleRandoms = (nextState: NarrativeFieldState) => {
    const preset = chooseContentIntentPreset();
    applyContentIntentRandom(nextState, 'SUBJECT', preset);
    applySpacetimeFieldRandom(nextState);
    applyLightingAtmosphereRandom(nextState);
  };

  const randomizeIndependentCoreModules = () => {
    const nextState = { ...fieldState };
    applyIndependentCoreModuleRandoms(nextState);
    updateState(nextState);
    window.requestAnimationFrame(() => triggerActionMotion('CORE:random'));
  };

  const randomizeConceptGlobalEmergence = () => {
    const nextState = { ...fieldState };
    applyVisualStylePresetRandom(nextState);
    applyFramingPresetRandom(nextState);
    applyIndependentCoreModuleRandoms(nextState);
    updateState(nextState);
    triggerActionMotion('GLOBAL:random');
  };

  useEffect(() => {
    onConceptGlobalRandomizeReady?.(randomizeConceptGlobalEmergence);
    return () => onConceptGlobalRandomizeReady?.(null);
  });

  const openLibrary = (blockId: string) => {
    if (isBlockLocked(blockId)) return;
    setActiveBlockId(blockId);
    setLibraryOpen(true);
  };

  const setBlockTags = (blockId: string, tags: string[]) => {
    if (isBlockLocked(blockId)) return;
    if (blockId === 'cd_spacetime_coordinate') {
      const next = tags.slice(0, 1);
      const nextState = { ...fieldState, [blockId]: next };
      if (next[0]) applySpacetimeCoordinateItemToState(nextState, next[0]);
      else updateSpacetimeCoordinateDisplay(nextState);
      updateState(nextState);
      setLibraryOpen(false);
      return;
    }
    if (blockId === 'cd_space_anchor_exact' || blockId === 'cd_time_anchor_exact') {
      const nextState = { ...fieldState, [blockId]: tags.slice(0, 1) };
      updateSpacetimeCoordinateDisplay(nextState);
      updateState(nextState);
      setLibraryOpen(false);
      return;
    }
    if (blockId === 'cd_color_palette') {
      const tag = tags[0];
      syncPaletteHex(tag);
      updateState({ ...fieldState, [blockId]: tag ? [tag] : [] });
      setLibraryOpen(false);
      return;
    }
    updateState({ ...fieldState, [blockId]: tags });
  };

  const clearBlock = (blockId: string) => {
    if (isBlockLocked(blockId)) return;
    const removed = fieldState[blockId] || [];
    if (spacetimeStateBlocks.includes(blockId)) {
      const nextState = { ...fieldState };
      if (blockId === 'cd_spacetime_coordinate') {
        nextState['cd_space_anchor_exact'] = [];
        nextState['cd_time_anchor_exact'] = [];
      }
      nextState[blockId] = [];
      updateSpacetimeCoordinateDisplay(nextState);
      updateState(nextState);
      const allRemoved = [
        ...removed,
        ...(blockId === 'cd_spacetime_coordinate' ? [
          ...(fieldState['cd_space_anchor_exact'] || []),
          ...(fieldState['cd_time_anchor_exact'] || [])
        ] : [])
      ];
      if (allRemoved.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, allRemoved));
      return;
    }
    if (blockId === 'cd_color_palette') {
      onPaletteChange?.(Array(7).fill(""));
    }
    updateState({ ...fieldState, [blockId]: [] });
    if (removed.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, removed));
  };

  const toggleTag = (blockId: string, tag: string) => {
    if (isBlockLocked(blockId)) return;
    const current = fieldState[blockId] || [];
    if (blockId === 'cd_spacetime_coordinate') {
      const next = current.includes(tag) ? [] : [tag];
      const nextState = { ...fieldState, [blockId]: next };
      if (next[0]) applySpacetimeCoordinateItemToState(nextState, next[0]);
      else {
        nextState['cd_space_anchor_exact'] = [];
        nextState['cd_time_anchor_exact'] = [];
        updateSpacetimeCoordinateDisplay(nextState);
      }
      const removed = current.filter(item => !next.includes(item));
      updateState(nextState);
      if (removed.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, removed));
      setLibraryOpen(false);
      return;
    }
    if (blockId === 'cd_space_anchor_exact' || blockId === 'cd_time_anchor_exact') {
      const next = current.includes(tag) ? [] : [tag];
      const nextState = { ...fieldState, [blockId]: next };
      updateSpacetimeCoordinateDisplay(nextState);
      const removed = current.filter(item => !next.includes(item));
      updateState(nextState);
      if (removed.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, removed));
      setLibraryOpen(false);
      return;
    }
    if (blockId === 'cd_color_palette') {
      const next = current.includes(tag) ? [] : [tag];
      syncPaletteHex(next[0]);
      updateState({ ...fieldState, [blockId]: next });
      if (current.length > 0 && next.length === 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, current));
      setLibraryOpen(false);
      return;
    }
    const limit = CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1;
    const next = current.includes(tag)
      ? current.filter(item => item !== tag)
      : (limit === 1 ? [tag] : [...current, tag].slice(-limit));
    const removed = current.filter(item => !next.includes(item));
    updateState({ ...fieldState, [blockId]: next });
    if (removed.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, removed));
  };

  const randomizeBlock = (blockId: string) => {
    if (isBlockLocked(blockId)) return;
    if (blockId === 'cd_spacetime_coordinate') {
      handleSpacetimeRandomAll();
      return;
    }
    if (blockId === 'cd_space_anchor_exact') {
      handleSpacetimeRandomSpace();
      return;
    }
    if (blockId === 'cd_time_anchor_exact') {
      handleSpacetimeRandomTime();
      return;
    }
    if (fieldStyleBlocks.includes(blockId) || styleProtocolBlocks.includes(blockId)) {
      const scopedCategory = getFilteredLibraryDataForBlock(blockId)?.[0];
      if (!scopedCategory || scopedCategory.items.length === 0) return;
      const limit = CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1;
      const count = Math.min(limit, limit > 1 ? 2 : 1);
      const selected = pickWeightedUniqueItems(blockId, scopedCategory.items, count).map(item => item.name);
      updateState({ ...fieldState, [blockId]: selected });
      return;
    }
    const items = getRandomizableItemsForBlock(blockId);
    if (items.length === 0) return;
    const limit = CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1;
    const count = Math.min(limit, limit > 1 ? 2 : 1);
    const selected = pickWeightedUniqueItems(blockId, items, count).map(item => item.name);
    if (blockId === 'cd_color_palette') {
      const tag = selected[0];
      syncPaletteHex(tag);
      updateState({ ...fieldState, [blockId]: tag ? [tag] : [] });
      return;
    }
    updateState({ ...fieldState, [blockId]: selected });
  };

  const applyRandomBlocksToState = (nextState: NarrativeFieldState, blockIds: string[]) => {
    withoutOccupationPersonaConflict(blockIds).forEach(blockId => {
      if (isBlockLocked(blockId)) return;
      if (blockId === 'cd_spacetime_coordinate') {
        const preset = getRandomSur3CoordinatePreset(lang === 'EN' ? 'EN' : 'CN');
        if (!isSpaceAnchorValueLocked) nextState['cd_space_anchor_exact'] = [lang === 'EN' ? preset.spaceEn : preset.spaceCn];
        if (!isTimeAnchorValueLocked) {
          nextState['cd_time_anchor_exact'] = preset.timeMode === 'era'
            ? (preset.time ? [preset.time] : [])
            : (preset.year === null ? [] : [String(clampTimelineYear(preset.year))]);
        }
        updateSpacetimeCoordinateDisplay(nextState);
        return;
      }
      if (blockId === 'cd_space_anchor_exact' || blockId === 'cd_time_anchor_exact') return;
      const items = (fieldStyleBlocks.includes(blockId) || styleProtocolBlocks.includes(blockId))
        ? (getFilteredLibraryDataForBlock(blockId)?.[0]?.items || [])
        : getRandomizableItemsForBlock(blockId);
      if (items.length === 0) return;
      const limit = CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1;
      const count = Math.min(limit, limit > 1 ? 2 : 1);
      const selected = pickWeightedUniqueItems(blockId, items, count).map(item => item.name);
      if (blockId === 'cd_color_palette') {
        const tag = selected[0];
        syncPaletteHex(tag);
        nextState[blockId] = tag ? [tag] : [];
        return;
      }
      nextState[blockId] = selected;
    });
  };

  const randomizeBlocks = (blockIds: string[]) => {
    const nextState = { ...fieldState };
    applyRandomBlocksToState(nextState, blockIds);
    updateState(nextState);
  };

  const resolveSpacetimeFieldRandomRoute = (): Exclude<SpacetimeFieldRandomRoute, 'ALL_PRESETS'> => {
    if (spacetimeFieldRandomRoute !== 'ALL_PRESETS') return spacetimeFieldRandomRoute;
    const routes: Array<Exclude<SpacetimeFieldRandomRoute, 'ALL_PRESETS'>> = [
      'EXACT_COORDINATE',
      'REAL_SCENE',
      'SURREAL_SCENE',
      'ABSTRACT_SCENE',
      'ENVIRONMENT_STATE'
    ];
    return routes[Math.floor(Math.random() * routes.length)] || 'REAL_SCENE';
  };

  const getSpacetimeFieldRandomBlocksForDensity = (route: Exclude<SpacetimeFieldRandomRoute, 'ALL_PRESETS'>): string[] => {
    const pickOne = (blocks: string[]) => shuffleVisualPresetBlocks(blocks).slice(0, 1);
    if (route === 'ENVIRONMENT_STATE') {
      if (spacetimeFieldRandomDensity === 'LIGHT') return pickOne(fieldEnvironmentStateBlocks);
      return [...fieldEnvironmentStateBlocks];
    }

    if (route === 'EXACT_COORDINATE') {
      if (spacetimeFieldRandomDensity === 'LIGHT') return ['cd_spacetime_coordinate'];
      if (spacetimeFieldRandomDensity === 'FULL') return ['cd_spacetime_coordinate', ...fieldEnvironmentStateBlocks];
      return ['cd_spacetime_coordinate', ...pickOne(fieldEnvironmentStateBlocks)];
    }

    if (route === 'REAL_SCENE') {
      if (spacetimeFieldRandomDensity === 'LIGHT') return ['cd_field_preset', 'cd_scene_real'];
      if (spacetimeFieldRandomDensity === 'FULL') return spacetimeFieldRouteMeta.REAL_SCENE.blocks;
      return ['cd_field_preset', 'cd_scene_real', ...pickOne(fieldEnvironmentStateBlocks)];
    }

    if (route === 'SURREAL_SCENE') {
      if (spacetimeFieldRandomDensity === 'LIGHT') return ['cd_field_preset', 'cd_scene_surreal'];
      if (spacetimeFieldRandomDensity === 'FULL') return spacetimeFieldRouteMeta.SURREAL_SCENE.blocks;
      return ['cd_field_preset', 'cd_scene_surreal', ...pickOne(['cd_scene_real', ...fieldEnvironmentStateBlocks])];
    }

    if (route === 'ABSTRACT_SCENE') {
      if (spacetimeFieldRandomDensity === 'LIGHT') return ['cd_field_preset', 'cd_scene_abstract'];
      if (spacetimeFieldRandomDensity === 'FULL') return spacetimeFieldRouteMeta.ABSTRACT_SCENE.blocks;
      return ['cd_field_preset', 'cd_scene_abstract', ...pickOne(['cd_scene_surreal', ...fieldEnvironmentStateBlocks])];
    }

    return [];
  };

  const clearSpacetimeCoordinateState = (nextState: NarrativeFieldState) => {
    if (isBlockLocked('cd_spacetime_coordinate')) return;
    nextState['cd_spacetime_coordinate'] = [];
    if (!isSpaceAnchorValueLocked) nextState['cd_space_anchor_exact'] = [];
    if (!isTimeAnchorValueLocked) {
      nextState['cd_time_anchor_exact'] = [];
      setSpacetimeYearInputDraft(null);
      setSpacetimeYearInputInvalid(false);
    }
  };

  const applyRandomSpacetimeCoordinateToState = (nextState: NarrativeFieldState) => {
    if (isBlockLocked('cd_spacetime_coordinate')) return;
    const coordinate = getRandomSur3CoordinatePreset(lang === 'EN' ? 'EN' : 'CN');
    if (!isSpaceAnchorValueLocked) nextState['cd_space_anchor_exact'] = [lang === 'EN' ? coordinate.spaceEn : coordinate.spaceCn];
    if (!isTimeAnchorValueLocked) {
      nextState['cd_time_anchor_exact'] = coordinate.timeMode === 'era'
        ? (coordinate.time ? [coordinate.time] : [])
        : (coordinate.year === null ? [] : [String(clampTimelineYear(coordinate.year))]);
      setSpacetimeYearInputDraft(null);
      setSpacetimeYearInputInvalid(false);
    }
    updateSpacetimeCoordinateDisplay(nextState);
  };

  const spacetimeFieldCountForBlock = (blockId: string) => {
    const limit = CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1;
    if (limit <= 1) return 1;
    if (['cd_field_preset', 'cd_scene_real', 'cd_scene_surreal', 'cd_scene_abstract'].includes(blockId)) return 1;
    if (spacetimeFieldRandomDensity === 'FULL') return Math.min(limit, 2);
    return 1;
  };

  const applySpacetimeFieldRandom = (nextState: NarrativeFieldState) => {
    const route = resolveSpacetimeFieldRandomRoute();
    const targetBlocks: string[] = Array.from(new Set<string>(getSpacetimeFieldRandomBlocksForDensity(route)));
    setLastSpacetimeFieldRoute(route);

    if (route !== 'ENVIRONMENT_STATE') {
      spacetimeFieldUiBlocks.forEach(blockId => {
        if (targetBlocks.includes(blockId) || isBlockLocked(blockId)) return;
        if (blockId === 'cd_spacetime_coordinate') {
          clearSpacetimeCoordinateState(nextState);
          return;
        }
        nextState[blockId] = [];
      });
    } else {
      fieldEnvironmentStateBlocks.forEach(blockId => {
        if (!targetBlocks.includes(blockId) && !isBlockLocked(blockId)) nextState[blockId] = [];
      });
    }

    targetBlocks.forEach(blockId => {
      if (isBlockLocked(blockId)) return;
      if (blockId === 'cd_spacetime_coordinate') {
        applyRandomSpacetimeCoordinateToState(nextState);
        return;
      }
      const items = getRandomizableItemsForBlock(blockId);
      if (items.length === 0) return;
      const selected = pickWeightedUniqueItems(blockId, items, spacetimeFieldCountForBlock(blockId)).map(item => item.name);
      nextState[blockId] = selected;
    });
  };

  const randomizeSpacetimeFieldModule = () => {
    const nextState = { ...fieldState };
    applySpacetimeFieldRandom(nextState);
    updateState(nextState);
  };

  const resolveLightingAtmosphereRandomRoute = (): Exclude<LightingAtmosphereRandomRoute, 'ALL_PRESETS'> => {
    if (lightingAtmosphereRandomRoute !== 'ALL_PRESETS') return lightingAtmosphereRandomRoute;
    return Math.random() < 0.56 ? 'PRESET_PACKAGE' : 'DETAIL_LIGHTING';
  };

  const getLightingAtmosphereRandomBlocksForDensity = (route: Exclude<LightingAtmosphereRandomRoute, 'ALL_PRESETS'>): string[] => {
    if (route === 'PRESET_PACKAGE') return [...lightPresetBlocks];
    if (lightingAtmosphereRandomDensity === 'FULL') return [...lightDetailBlocks];
    const max = lightingAtmosphereRandomDensity === 'LIGHT' ? 2 : 4;
    const min = lightingAtmosphereRandomDensity === 'LIGHT' ? 1 : 3;
    const count = Math.min(lightDetailBlocks.length, min + Math.floor(Math.random() * (max - min + 1)));
    return shuffleVisualPresetBlocks(lightDetailBlocks).slice(0, count);
  };

  const lightingAtmosphereCountForBlock = (blockId: string) => {
    const limit = CONCEPT_DESIGN_BLOCK_LIMITS[blockId] || 1;
    if (limit <= 1) return 1;
    return lightingAtmosphereRandomDensity === 'FULL' ? Math.min(limit, 2) : 1;
  };

  const applyLightingAtmosphereRandom = (nextState: NarrativeFieldState) => {
    if (isSectionLocked('STYLE')) return;
    const route = resolveLightingAtmosphereRandomRoute();
    const targetBlocks = Array.from(new Set<string>(getLightingAtmosphereRandomBlocksForDensity(route)));
    setLastLightingAtmosphereRoute(route);

    aestheticLightAuditBlocks.forEach(blockId => {
      if (targetBlocks.includes(blockId) || isBlockLocked(blockId)) return;
      nextState[blockId] = [];
    });

    targetBlocks.forEach(blockId => {
      if (isBlockLocked(blockId)) return;
      const items = getRandomizableItemsForBlock(blockId);
      if (items.length === 0) return;
      const selected = pickWeightedUniqueItems(blockId, items, lightingAtmosphereCountForBlock(blockId)).map(item => item.name);
      nextState[blockId] = selected;
    });
  };

  const randomizeLightingAtmosphereModule = () => {
    const nextState = { ...fieldState };
    applyLightingAtmosphereRandom(nextState);
    updateState(nextState);
  };

  const randomizeContentIntentModule = (focus: LinkedRandomFocus) => {
    const nextState = { ...fieldState };
    applyContentIntentRandom(nextState, focus);
    updateState(nextState);
  };

  const clearBlocks = (blockIds: string[]) => {
    const nextState = { ...fieldState };
    const patch: Record<string, null> = {};
    blockIds.forEach(blockId => {
      if (isBlockLocked(blockId)) return;
      if (blockId === 'cd_spacetime_coordinate') {
        ['cd_spacetime_coordinate', 'cd_space_anchor_exact', 'cd_time_anchor_exact'].forEach(targetBlockId => {
          const removed = nextState[targetBlockId] || [];
          nextState[targetBlockId] = [];
          if (removed.length > 0) Object.assign(patch, clearFocusForTagsPatch(targetBlockId, removed));
        });
        return;
      }
      if (blockId === 'cd_space_anchor_exact' || blockId === 'cd_time_anchor_exact') {
        const removed = nextState[blockId] || [];
        nextState[blockId] = [];
        updateSpacetimeCoordinateDisplay(nextState);
        if (removed.length > 0) Object.assign(patch, clearFocusForTagsPatch(blockId, removed));
        return;
      }
      const removed = nextState[blockId] || [];
      nextState[blockId] = [];
      if (blockId === 'cd_color_palette') {
        onPaletteChange?.(Array(7).fill(""));
      }
      if (removed.length > 0) Object.assign(patch, clearFocusForTagsPatch(blockId, removed));
    });
    updateState(nextState);
    if (Object.keys(patch).length > 0) onFocusStateChange?.(patch);
  };

  const copySection = async (sectionId: string, title: string, titleEn: string, blockIds: string[]) => {
    const parts = blockIds.flatMap(blockId => {
      const tags = fieldState[blockId] || [];
      if (tags.length === 0) return [];
      const label = lang === 'EN'
        ? (blockDef(blockId)?.enName || blockId)
        : (blockDef(blockId)?.name || blockId);
      return [`[${label}] ${tags.join('，')}`];
    });
    if (parts.length === 0) return;
    try {
      await navigator.clipboard.writeText(`${t(lang, title, titleEn)}: ${parts.join('；')}`);
      setCopiedSectionId(sectionId);
      window.setTimeout(() => setCopiedSectionId(null), 1600);
    } catch {
      setCopiedSectionId(null);
    }
  };

  const triggerActionMotion = (motionId: string) => {
    setActiveActionMotion(motionId);
    window.setTimeout(() => {
      setActiveActionMotion(current => (current === motionId ? null : current));
    }, 560);
  };

  const updateVariable = (key: keyof SkillVariables, value: string) => {
    setLocalizedVariables(prev => ({
      ...prev,
      [promptLang]: {
        ...prev[promptLang],
        [key]: value
      }
    }));
    setCopied(false);
  };

  const updateVideoStoryboardValue = (key: keyof VideoStoryboardComposerValues, value: string) => {
    setLocalizedVideoStoryboardValues(prev => ({
      ...prev,
      [promptLang]: {
        ...prev[promptLang],
        [key]: value
      }
    }));
    setCopied(false);
  };

  const applyVideoStoryboardReferenceSample = (sample: VideoStoryboardReferenceSample) => {
    setPromptTemplateMode('VIDEO_STORYBOARD');
    setLocalizedVideoStoryboardValues(buildLocalizedVideoStoryboardValuesFromSample(sample));
    setDisabledPromptModuleIds([]);
    onConceptWorkspacePageChange?.('RESULT');
    setCopied(false);
  };

  const clearVideoStoryboardValues = () => {
    setLocalizedVideoStoryboardValues(createEmptyLocalizedVideoStoryboardValues());
    setDisabledPromptModuleIds([]);
    setCopied(false);
  };

  const updateSourceInput = <K extends keyof SourceInputs>(key: K, value: SourceInputs[K]) => {
    setSourceInputs(prev => ({ ...prev, [key]: value }));
    setCopied(false);
  };

  const toggleFieldRegister = (tag: string) => {
    if (isBlockLocked(fieldRegisterBlock)) return;
    const current = fieldState[fieldRegisterBlock] || [];
    const currentCount = current.filter(item => item === tag).length;
    let next = [...current];
    if (currentCount >= 2) {
      next = next.filter(item => item !== tag);
    } else if (current.length < 2) {
      next.push(tag);
    } else {
      next = [current[1], tag];
    }
    const nextState: NarrativeFieldState = { ...fieldState, [fieldRegisterBlock]: next };
    if (next.length < 2) nextState.cd_field_style_secondary = [];
    if (next.length < 1) nextState.cd_field_style_primary = [];
    updateState(nextState);
  };

  const selectedText = (blockIds: string[]) => blockIds.flatMap(blockId => fieldState[blockId] || []);
  const selectedLine = (blockIds: string[], fallback: string) => selectedText(blockIds).join('，') || fallback;
  const selectedGroupedLine = (blockIds: string[], fallback: string) => {
    const lines = blockIds.flatMap(blockId => {
      const tags = fieldState[blockId] || [];
      if (tags.length === 0) return [];
      const label = lang === 'EN'
        ? (blockDef(blockId)?.enName || blockId)
        : (blockDef(blockId)?.name || blockId);
      return [`${label}：${tags.join('，')}`];
    });
    return lines.join('\n') || fallback;
  };
  const selectedRegisterLine = (blockIds: string[]) => selectedText(blockIds).join('，') || t(promptLang, '未选择', 'not selected');
  const selectedLabelLine = (blockIds: string[], fallback: string) => {
    const labels = selectedText(blockIds).map(tag => tag.replace(/\s*\([^)]*\)\s*/g, '').trim()).filter(Boolean);
    return labels.join(' / ') || fallback;
  };
  const getSelectedItemsForBlock = (blockId: string) => {
    const tags = fieldState[blockId] || [];
    if (blockId === 'cd_spacetime_coordinate') {
      return tags.map(tag => ({
        tag,
        item: {
          id: 'cd_spacetime_coordinate_exact',
          name: tag,
          def: `精确时空坐标：${tag}。由 SUR3 空间锚点和时间锚点组成，用来固定现实域、时间轴、空间锚、技术边界和文化接口，不直接替代主体协议。`,
          defEn: `Precise time-space coordinate: ${tag}. Built from a SUR3 space anchor and time anchor; it fixes reality domain, timeline, spatial anchor, technology boundary, and cultural interface without replacing the identity anchor.`
        } as LibraryItemDef
      }));
    }
    const category = getLibraryCategory(blockId);
    return tags.map(tag => ({
      tag,
      item: category?.items.find(candidate => candidate.name === tag || candidate.id === tag)
    }));
  };
  const selectedDefinitionLine = (blockIds: string[], fallback: string) => {
    const lines = blockIds.flatMap(blockId => {
      const label = `${blockDef(blockId)?.name || blockId} / ${blockDef(blockId)?.enName || blockId}`;
      return getSelectedItemsForBlock(blockId).map(({ tag, item }) => {
        const def = item?.def || '';
        const defEn = item?.defEn || '';
        const detail = [def ? `CN: ${def}` : '', defEn ? `EN: ${defEn}` : ''].filter(Boolean).join(' | ');
        return detail ? `[${label}] ${tag}\n  ${detail}` : `[${label}] ${tag}`;
      });
    });
    return lines.length > 0 ? lines.join('\n') : fallback;
  };
  const sanitizeContentCoreSourceText = (text: string) => text
    .replace(/单人身份板里的行为证据/g, '单张完整角色画面里的行为证据')
    .replace(/身份板里的行为证据/g, '完整角色画面里的行为证据')
    .replace(/角色身份板结构/g, '完整角色画面结构')
    .replace(/角色身份板/g, '完整角色画面')
    .replace(/身份板/g, '完整角色画面')
    .replace(/identity-board-readable/gi, 'single-image-readable')
    .replace(/identity-board presentation/gi, 'complete-image presentation')
    .replace(/identity-board structure/gi, 'complete-image structure')
    .replace(/identity board/gi, 'complete character image')
    .replace(/character-board structure/gi, 'complete-character-image structure')
    .replace(/character board/gi, 'complete character image')
    .replace(/design-sheet structure/gi, 'single-image structure')
    .replace(/design sheet/gi, 'single image')
    .replace(/多视图/g, '单张画面')
    .replace(/色条/g, '色彩证据')
    .replace(/版式偏好/g, '环境物证');
  const selectedDesignBrief = (blockIds: string[], fallback: string) => {
    const lines = blockIds.flatMap(blockId => {
      const label = `${blockDef(blockId)?.name || blockId} / ${blockDef(blockId)?.enName || blockId}`;
      return getSelectedItemsForBlock(blockId).map(({ tag, item }) => {
        const title = tag.replace(/\s*\([^)]*\)\s*/g, '').trim() || tag;
        const meaning = promptLang === 'CN'
          ? (item?.def || item?.defEn || '')
          : (item?.defEn || item?.def || '');
        const detail = sanitizeContentCoreSourceText(meaning);
        return detail ? `- ${label}: ${title} => ${detail}` : `- ${label}: ${title}`;
      });
    });
    return lines.length > 0 ? lines.join('\n') : fallback;
  };
  const buildPresetSourceIdea = () => {
    const optionalDesignBrief = (blockIds: string[]) => selectedDesignBrief(blockIds, '');
    const optionalSourceSection = (title: string, body: string) => {
      const content = body.trim();
      return content ? `${title}\n${content}` : '';
    };
    const bodyFormBrief = getBodyFormBrief(identityOptions.bodyFormMode, promptLang);
    const bodyFormOverride = identityOptions.bodyFormMode === 'HUMANOID_DISGUISE'
      ? (promptLang === 'CN'
        ? '本体形态硬控制 / Body Form Hard Control:\n第一识别必须保持人形。若人设词条包含狼人、狐妖、美杜莎、神怪或异种，只能转成耳影、尾影、瞳孔、服装、道具、姿态或局部材料暗示。'
        : 'Body Form Hard Control:\nThe primary read must remain humanoid. If persona terms include werewolf, fox spirit, Medusa, mythic, or alien identity, translate them only into local hints such as ear / tail hints, pupils, costume, props, pose, or material evidence.')
      : (promptLang === 'CN'
        ? `本体形态硬控制 / Body Form Hard Control:\n${bodyFormBrief}\n如果所选人设词条 def 写了“藏匿、暗示、耳影、尾影、局部异征、民俗痕迹”，这些只是该词条默认保守写法；当前本体形态选择必须覆盖它们，把暗示升级为可见身体结构。`
        : `Body Form Hard Control:\n${bodyFormBrief}\nIf selected persona definitions say hidden traits, hints, ear shadows, tail shadows, local anomalies, or folklore traces, treat that as the term's default conservative wording; the selected body form must override it and upgrade hints into visible body structure.`);
    const styleLine = optionalDesignBrief(activeStyleSourceBlocks);
    const paletteLine = optionalDesignBrief(paletteBlocks);
    const subjectLine = subjectMode === 'HUMAN'
      ? [
          optionalSourceSection('身份设定 / Identity:', optionalDesignBrief(ontologyIdentityBlocks)),
          optionalSourceSection('头发胡子眼睛 / Hair, Beard & Eyes:', optionalDesignBrief(['cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_eye_fx'])),
          optionalSourceSection('脸部妆容表情 / Face, Makeup & Expression:', optionalDesignBrief(['cd_face_features', 'cd_makeup_style', 'cd_expression'])),
          optionalSourceSection('皮肤附着身体 / Skin, Surface & Body:', optionalDesignBrief(ontologyBodyBlocks)),
          optionalSourceSection('服装材料痕迹 / Costume, Material & Wear:', optionalDesignBrief(['cd_costume_system', 'cd_costume_logic', 'cd_material_evidence', 'cd_surface_material', 'cd_wear_trace'])),
          optionalSourceSection('道具符号动作 / Props, Signs & Action:', optionalDesignBrief(['cd_prop_anchor', 'cd_symbol_system', ...ontologyActionBlocks]))
        ].filter(Boolean).join('\n')
      : optionalDesignBrief(activeSubjectBlocks);
    return [
      bodyFormOverride,
      optionalSourceSection('M07 场域时空 / Field Time-Space:', optionalDesignBrief(governanceBlocks)),
      optionalSourceSection('M04 视觉风格 / Visual Style:', styleLine),
      optionalSourceSection('M09 色彩协议 / Color Protocol:', paletteLine),
      optionalSourceSection('M08 主体本体 / Subject Ontology:', subjectLine),
      `M08 本体形态 / Body Form: ${bodyFormBrief}`,
      `M08 对象路由 / Subject Route: ${t('CN', activeObjectRoute.label, activeObjectRoute.labelEn)} / ${activeObjectRoute.labelEn}`
    ].filter(Boolean).join('\n');
  };
  const compileInstructionSections = useMemo(
    () => isVideoStoryboardTemplate
      ? buildVideoStoryboardCompileSections(promptLang)
      : isPerformanceStoryboardTemplate
      ? buildPerformanceStoryboardCompileSections(promptLang)
      : buildConceptGenerationInstructionSections(
          sourceMode,
          sourceInputs,
          promptLang,
          identityOptions,
          activeSourceMode.label,
          activeSourceMode.labelEn,
          sourceMode === 'PRESET' ? buildPresetSourceIdea() : undefined,
          hasSelectedActionTerms,
          registerRandomMode,
          activeVariableMeta,
          strictInputFidelity
        ),
    [
      activeVariableMeta,
      activeObjectRoute.label,
      activeObjectRoute.labelEn,
      activeSourceMode.label,
      activeSourceMode.labelEn,
      activeStyleSourceBlocks,
      activeSubjectBlocks,
      fieldState,
      governanceBlocks,
      hasSelectedActionTerms,
      identityOptions,
      isPerformanceStoryboardTemplate,
      isVideoStoryboardTemplate,
      materialPacket,
      paletteBlocks,
      promptLang,
      registerRandomMode,
      sourceInputs,
      sourceMode,
      strictInputFidelity,
      subjectMode
    ]
  );
  const compileInstructionOutput = useMemo(
    () => compileInstructionSections.map(section => section.text).filter(Boolean).join('\n\n'),
    [compileInstructionSections]
  );
  const mediumFallback = () => getMediumFallbackVisual(identityOptions.mediumCategory, subjectMode, promptLang, identityOptions.bodyFormMode);
  const selectedCount = (blockIds: string[]) => selectedText(blockIds).length;
  const totalSelectedTerms = selectedCount(activeStyleSourceBlocks) + selectedCount(paletteBlocks) + selectedCount(governanceBlocks) + selectedCount(activeSubjectBlocks);
  const activeMediumMeta = mediumCategoryMeta.find(item => item.id === identityOptions.mediumCategory) || mediumCategoryMeta[0];
  const activeBodyFormMeta = bodyFormModeOptions.find(item => item.id === identityOptions.bodyFormMode) || bodyFormModeOptions[0];
  const sourceInputReady =
    sourceMode === 'PRESET'
      ? totalSelectedTerms > 0
      : sourceMode === 'IDEA'
        ? sourceInputs.ideaText.trim().length > 0
        : sourceMode === 'ARTICLE'
          ? sourceInputs.articleText.trim().length > 0
          : Boolean(sourceInputs.imageDataUrl || sourceInputs.imageGuidance.trim());

  const buildPresetVariables = (): SkillVariables => {
    const styleLine = selectedLine(activeStyleSourceBlocks, promptLang === 'CN' ? '清晰的角色概念设计风格' : 'clear character concept design style');
    const paletteLine = selectedLine(paletteBlocks, promptLang === 'CN' ? '克制、可读的角色配色' : 'restrained readable character palette');
    const governanceLine = selectedLine(governanceBlocks, promptLang === 'CN' ? '未指定统摄协议' : 'unspecified governance protocol');
    const governanceLabelLine = selectedLabelLine(governanceBlocks, promptLang === 'CN' ? '未指定统摄协议' : 'unspecified governance protocol');
    const identityLine = selectedLine(['cd_occupation', 'cd_persona', 'cd_emotional_core'], promptLang === 'CN' ? '原创主体协议' : 'original subject protocol');
    const identityLabelLine = selectedLabelLine(['cd_occupation', 'cd_persona', 'cd_emotional_core'], promptLang === 'CN' ? '原创主体协议' : 'original subject protocol');
    const bodyFormBrief = getBodyFormBrief(identityOptions.bodyFormMode, promptLang);
    const detailLine = [
      `${promptLang === 'CN' ? '统摄模块' : 'Governance Layer'}: ${governanceLine}`,
      `${promptLang === 'CN' ? '本体形态' : 'Body Form'}: ${bodyFormBrief}`,
      `${promptLang === 'CN' ? '主体协议' : 'Subject Protocol'}: ${identityLine}`,
      `${promptLang === 'CN' ? '头发胡子眼睛' : 'Hair / Beard / Eyes'}: ${selectedRegisterLine(['cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_eye_fx'])}`,
      `${promptLang === 'CN' ? '脸部妆容表情' : 'Face / Makeup / Expression'}: ${selectedRegisterLine(['cd_face_features', 'cd_makeup_style', 'cd_expression'])}`,
      `${promptLang === 'CN' ? '皮肤附着身体' : 'Skin / Surface / Body'}: ${selectedRegisterLine(ontologyBodyBlocks)}`,
      `${promptLang === 'CN' ? '服装材料痕迹' : 'Costume / Material / Wear'}: ${selectedRegisterLine(['cd_costume_system', 'cd_costume_logic', 'cd_material_evidence', 'cd_surface_material', 'cd_wear_trace'])}`,
      `${promptLang === 'CN' ? '道具符号动作' : 'Props / Signs / Action'}: ${selectedRegisterLine(['cd_prop_anchor', 'cd_symbol_system', ...ontologyActionBlocks])}`
    ].join('；');

    if (subjectMode === 'CREATURE') {
      const seed = selectedLine(['cd_creature_preset', 'cd_creature_class', 'cd_creature_element', 'cd_creature_mood'], promptLang === 'CN' ? '原创异种生物概念' : 'original creature concept');
      return {
        characterSeed: promptLang === 'CN'
          ? `一个以“${seed}”为核心的原创异种概念，设计重点是可读 anatomy、非通用剪影和清楚的生物职能。`
          : `An original creature concept built around "${seed}", focused on readable anatomy, a non-generic silhouette, and a clear biological function.`,
        ageBodyType: promptLang === 'CN'
          ? `${selectedLine(['cd_creature_size', 'cd_creature_head', 'cd_creature_body', 'cd_creature_texture', 'cd_creature_action'], '异种体型、头部结构、身体结构、材质生理和行为姿态需要保持功能性。')} 本体形态：${bodyFormBrief}。`
          : `${selectedLine(['cd_creature_size', 'cd_creature_head', 'cd_creature_body', 'cd_creature_texture', 'cd_creature_action'], 'Creature scale, head structure, body structure, material physiology, and behavior posture should remain functional.')} Body form: ${bodyFormBrief}.`,
        timeSpaceScene: governanceLine,
        actionMoment: promptLang === 'CN'
          ? selectedLine(['cd_creature_action'], '单张完整画面中的行为状态，强调可读 anatomy、行为线索和环境关系。')
          : selectedLine(['cd_creature_action'], 'Behavior state inside one complete image, emphasizing readable anatomy, behavior cues, and environment relation.'),
        visualMedium: `${mediumFallback()} ${styleLine}`,
        style: styleLine,
        paletteStrategy: promptLang === 'CN'
          ? `${paletteLine}。色彩必须服务异种 anatomy、表皮材料、场域压力和所选媒介，不生成与背景或光影脱节的色板。`
          : `${paletteLine}. The palette must support creature anatomy, surface material, field pressure, and the selected medium; do not create a palette detached from background or lighting.`,
        compositionScene: promptLang === 'CN'
          ? '单张完整角色画面构图，主体清楚，环境关系、轮廓、道具和关键材质证据可读。'
          : 'One complete character-image composition with a clear subject, readable environment relation, silhouette, props, and key material evidence.',
        lightingAtmosphere: promptLang === 'CN'
          ? '克制、清楚、服务材质、轮廓、行动和场域压力的光影。'
          : 'Restrained lighting that clarifies material, silhouette, action, and field pressure.',
        otherDetails: promptLang === 'CN'
          ? `${detailLine}。强调原创 anatomy、表皮材质、行为线索、道具关系、环境物证和身份备注；禁止多主体混乱、海报化口号和多格设定页。`
          : `${detailLine}. Emphasize original anatomy, surface texture, behavior cues, prop relation, environmental evidence, and identity notes; avoid multiple competing subjects, poster slogans, and multi-panel design sheets.`
      };
    }

    const seed = selectedLine(['cd_occupation', 'cd_persona', 'cd_emotional_core'], promptLang === 'CN' ? '原创人物概念' : 'original human character concept');
    const objectLine = `${activeObjectRoute.label} / ${activeObjectRoute.labelEn}`;
    return {
      characterSeed: promptLang === 'CN'
        ? `一个以“${identityLabelLine}”为核心、受“${governanceLabelLine}”统摄的原创${activeObjectRoute.label}概念。时空坐标、场域预设、主体协议与造型协议共同解释细节，但不把词条标题机械拼接成身份。`
        : `An original ${activeObjectRoute.labelEn} concept centered on "${identityLabelLine}" and governed by "${governanceLabelLine}". Time-space, field presets, subject protocols, and form protocols jointly interpret details without mechanically stitching term titles into the identity.`,
      ageBodyType: promptLang === 'CN'
        ? `${selectedLine(['cd_age', 'cd_gender', 'cd_body_type', 'cd_static_pose', 'cd_dynamic_action', 'cd_human_behavior'], '成年人，体态、年龄感和动作由身份自然推导。')} 本体形态：${bodyFormBrief}。`
        : `${selectedLine(['cd_age', 'cd_gender', 'cd_body_type', 'cd_static_pose', 'cd_dynamic_action', 'cd_human_behavior'], 'Adult, with age impression, body type, and action naturally derived from the identity.')} Body form: ${bodyFormBrief}.`,
      timeSpaceScene: governanceLine,
      actionMoment: selectedLine(['cd_static_pose', 'cd_dynamic_action', 'cd_human_behavior'], promptLang === 'CN' ? '单张完整画面中的行为状态，姿态清楚，并服务身份、情绪和环境关系。' : 'Behavior state inside one complete image, with a clear pose serving identity, emotion, and environment relation.'),
      visualMedium: `${mediumFallback()} ${styleLine}`,
      style: styleLine,
      paletteStrategy: promptLang === 'CN'
        ? `${paletteLine}。色彩必须统一主体、服装材料、背景倾向和光影冷暖；具体颜色证据进入设计证据时必须服从此策略。`
        : `${paletteLine}. The palette must unify subject, garment materials, background tendency, and light color temperature; concrete color evidence in design details must obey this strategy.`,
      compositionScene: promptLang === 'CN'
        ? '单张完整角色画面构图，主体位置、景别、背景占比、空间层次、姿态和关键道具关系清楚。'
        : 'One complete character-image composition with clear subject placement, shot size, background ratio, spatial depth, pose, and key prop relation.',
      lightingAtmosphere: promptLang === 'CN'
        ? '克制、清楚、服务面部、服装结构、材质证据、行动状态和场域压力的光影。'
        : 'Restrained lighting that clarifies face, garment structure, material evidence, action state, and field pressure.',
      otherDetails: promptLang === 'CN'
        ? `${detailLine}。对象本体：${objectLine}。强调时空坐标、主体协议、造型协议、情绪核、面部识别点、皮肤身体特征、服装系统、材料证据、道具符号、姿态动作和环境物证。造型协议是全局统帅；服装系统只是服装执行层，必须把冲突的服装/装备词条转译成当前主造型内部可成立的剪影、衣层、开合、负载、挂点和材料连接。材料证据、表面材质与损耗痕迹不要机械罗列，必须从主体协议、时空坐标和造型协议中自然推导。冲突元素必须按世界法则 L1-L5 裁决：写实锁定则服从坐标，同构折译则转成可信功能，局部缝合则只允许一个异常证据，本体成立则让非现实材料成为世界事实，狂想接管则显性拼贴但保留身份骨架；禁止多主体混乱、海报化口号和多格设定页。`
        : `${detailLine}. Object ontology: ${objectLine}. Emphasize time-space coordinate, subject protocol, form protocol, emotional core, facial recognition points, skin/body features, costume system, material evidence, props/signs, pose/action, and environmental evidence. The form protocol is the global governing layer; the costume system is only the costume execution layer, and must translate conflicting clothing/gear terms into silhouette, layering, closures, load-bearing, mounts, and material junctions that can exist inside the primary form system. Material evidence, surface materials, and wear traces must not be listed mechanically; they must be naturally derived from the subject protocol, time-space coordinate, and form protocol. Conflicting elements must follow World Law L1-L5: realist lock obeys the coordinate, equivalent translation turns conflict into plausible function, local seam allows only one anomaly, ontology manifests lets non-realist material become a world fact, rhapsody takeover allows explicit collage while preserving the identity skeleton; avoid multiple competing subjects, poster slogans, and multi-panel design sheets.`
    };
  };

  const applyCurrentLanguageVariables = (next: SkillVariables) => {
    setLocalizedVariables(prev => ({
      ...prev,
      [promptLang]: next
    }));
    setCopied(false);
  };

  const applyPerformanceStoryboardSample = () => {
    setPromptTemplateMode('PERFORMANCE_STORYBOARD');
    setIdentityOptions(prev => ({ ...prev, format: '16:9', mediumCategory: 'PAINTING' }));
    setLocalizedVariables({
      CN: { ...performanceStoryboardSampleVariables.CN },
      EN: { ...performanceStoryboardSampleVariables.EN }
    });
    setDisabledPromptModuleIds([]);
    onConceptWorkspacePageChange?.('FINAL');
    setCopied(false);
  };

  const applyGeneratedVariables = (generated: LocalizedPromptSkillVariables) => {
    setLocalizedVariables({
      CN: { ...localizedVariables.CN, ...generated.CN },
      EN: { ...localizedVariables.EN, ...generated.EN }
    });
    setCopied(false);
  };

  const translateSourceToVariables = () => {
    if (sourceMode === 'PRESET') {
      applyCurrentLanguageVariables(buildPresetVariables());
      return;
    }

    if (sourceMode === 'ARTICLE') {
      const target = sourceInputs.targetCharacter.trim() || (promptLang === 'CN' ? '文本中的核心角色' : 'the core character in the text');
      const text = sourceInputs.articleText.trim() || (promptLang === 'CN' ? '等待粘贴文章文本。' : 'waiting for article text.');
      applyCurrentLanguageVariables({
        characterSeed: promptLang === 'CN' ? `从文章中抽取“${target}”作为单张完整角色画面的主体。` : `Extract "${target}" from the article as the subject of one complete character image.`,
        ageBodyType: promptLang === 'CN' ? '根据文章中的年龄感、体态、姿势和身体存在感进行整理；缺失处保持可信原创。' : 'Organize age impression, body type, posture, and physical presence from the article; invent missing parts believably.',
        timeSpaceScene: promptLang === 'CN' ? '根据文章中的时代、地点、空间、社会制度和场域压力进行整理；缺失处保持可信原创。' : 'Organize era, location, space, social system, and field pressure from the article; invent missing parts believably.',
        actionMoment: promptLang === 'CN' ? '根据文章中的行为、冲突或情绪瞬间整理画面事件；缺失处保持单张画面的真实状态。' : 'Organize the action moment from behavior, conflict, or emotional beat in the article; keep a real single-image state when missing.',
        visualMedium: mediumFallback(),
        style: promptLang === 'CN' ? '从文本语气、时代感、材料暗示和情绪压力中提炼审美方向。' : 'Derive the aesthetic direction from text tone, era cues, material hints, and emotional pressure.',
        paletteStrategy: promptLang === 'CN' ? '从文本中的色彩、时代、材料和光影暗示中提炼统一配色；缺失处保持可信、克制并与媒介一致。' : 'Derive a unified palette from textual color, era, material, and lighting cues; keep missing parts believable, restrained, and medium-consistent.',
        compositionScene: promptLang === 'CN' ? '根据完整角色画面需要，组织清晰景别、主体位置、背景占比和空间层次。' : 'Use complete-character-image needs to organize shot scale, subject placement, background ratio, and spatial depth.',
        lightingAtmosphere: promptLang === 'CN' ? '根据文本情绪推导光影氛围；没有依据时保持干净克制。' : 'Derive lighting atmosphere from textual emotion; keep it clean and restrained when unsupported.',
        otherDetails: promptLang === 'CN' ? `原文素材：${text.slice(0, 900)}` : `Source text: ${text.slice(0, 900)}`
      });
      return;
    }

    if (sourceMode === 'IMAGE') {
      const guidance = sourceInputs.imageGuidance.trim() || (promptLang === 'CN' ? '根据参考图保留主体特征，并把混乱内容整理为单张完整角色画面。' : 'Keep the subject features from the reference image and organize them into one complete character image.');
      applyCurrentLanguageVariables({
        characterSeed: promptLang === 'CN' ? `基于参考图“${sourceInputs.imageName || '未命名图片'}”反推一个原创角色 / 异种设定。` : `Reverse-engineer an original character or creature concept from reference image "${sourceInputs.imageName || 'untitled image'}".`,
        ageBodyType: promptLang === 'CN' ? '从参考图提取年龄感、体型、比例、姿态或 anatomy，并整理为单张画面可读的身体逻辑。' : 'Extract age impression, body type, proportions, posture, or anatomy from the reference and organize it into readable single-image body logic.',
        timeSpaceScene: promptLang === 'CN' ? '从参考图和人工引导中推断时空、空间与场域压力；证据不足时保持简洁。' : 'Infer time-space, setting, and field pressure from the reference and manual guidance; keep concise when evidence is limited.',
        actionMoment: promptLang === 'CN' ? '提取参考图中的动作、情绪瞬间或主体与环境关系，并整理为单张画面事件。' : 'Extract the action, emotional moment, or subject-environment relation from the reference and organize it into a single-image event.',
        visualMedium: mediumFallback(),
        style: promptLang === 'CN' ? '以参考图的造型语言、色彩和材料气质为基础，去除噪声并统一风格。' : 'Base the style on the reference image shape language, color, and material mood, removing noise and unifying the direction.',
        paletteStrategy: promptLang === 'CN' ? '从参考图提取主色、辅色、点缀色、背景倾向、材质色和光色冷暖；人工引导可纠偏，但不得制造脱节色板。' : 'Extract main, secondary, accent, background tendency, material color, and light color temperature from the reference; manual guidance may correct it, but must not create a detached palette.',
        compositionScene: promptLang === 'CN' ? '从参考图提取景别、角度、取景和主体位置，并修正为清晰单张画面构图。' : 'Extract shot size, angle, framing, and subject placement from the reference and correct them into a clear single-image composition.',
        lightingAtmosphere: promptLang === 'CN' ? '从参考图提取光源、明暗、空气感和情绪压力。' : 'Extract light source, contrast, air quality, and mood pressure from the reference.',
        otherDetails: guidance
      });
      return;
    }

    const idea = sourceInputs.ideaText.trim() || (promptLang === 'CN' ? '等待输入灵感元素。' : 'waiting for idea elements.');
    applyCurrentLanguageVariables({
      characterSeed: promptLang === 'CN' ? `根据灵感元素创建一个原创人物 / 异种身份：${idea}` : `Create an original human or creature identity from these idea elements: ${idea}`,
      ageBodyType: promptLang === 'CN' ? '从灵感中推导年龄感、体型、比例、姿态和身体存在感；缺失处保持设计可读。' : 'Derive age impression, body type, proportions, posture, and physical presence from the idea; keep missing parts readable.',
      timeSpaceScene: promptLang === 'CN' ? '从灵感中推导时代、地点、空间、制度和场域压力；缺失处保持可信原创。' : 'Derive era, location, space, institution, and field pressure from the idea; invent missing parts believably.',
      actionMoment: promptLang === 'CN' ? '把灵感整理成一个清楚的画面事件、情绪瞬间或主体与环境关系。' : 'Turn the idea into a clear image event, emotional moment, or subject-environment relation.',
      visualMedium: mediumFallback(),
      style: promptLang === 'CN' ? '将灵感元素转译为统一的审美方向、观看关系和材料语言。' : 'Translate the idea elements into a unified aesthetic direction, viewing relation, and material language.',
      paletteStrategy: promptLang === 'CN' ? '从灵感元素推导主色、辅色、点缀色、背景倾向、材质色和光色冷暖，并保持全图一致。' : 'Derive main, secondary, accent, background tendency, material color, and light color temperature from the idea, keeping the whole image consistent.',
      compositionScene: promptLang === 'CN' ? '组织清晰景别、取景、主体位置、背景占比和空间层次。' : 'Organize clear shot scale, framing, subject placement, background ratio, and spatial depth.',
      lightingAtmosphere: promptLang === 'CN' ? '使用克制、清楚、服务主体可读性的光影氛围。' : 'Use restrained, clear lighting atmosphere that supports subject readability.',
      otherDetails: promptLang === 'CN' ? '优先保证单一主体、清晰轮廓、可读材料证据、原创身份和环境物证。' : 'Prioritize one subject, clear silhouette, readable material evidence, original identity, and environmental evidence.'
    });
  };

  const getVariableGenerationPrompt = () => compileInstructionOutput;
  const buildRuntimeState = (
    nextVariables: SkillVariables = variables,
    nextInstruction: string = getVariableGenerationPrompt()
  ): ConceptDesignRuntimeState => ({
    sourceMode,
    sourceLabel: activeSourceMode.label,
    sourceLabelEn: activeSourceMode.labelEn,
    generationInstruction: nextInstruction,
    finalPrompt: isVideoStoryboardTemplate
      ? buildVideoStoryboardPrompt(videoStoryboardValues, promptLang, enabledPromptSectionIds)
      : isPerformanceStoryboardTemplate
      ? buildPerformanceStoryboardPrompt(nextVariables, promptLang, enabledPromptSectionIds)
      : buildCharacterIdentityBoardPrompt(nextVariables, promptLang, { ...identityOptions, targetMode: promptTemplateMode, primaryStyleReference }, materialPacket, registerRandomMode, enabledPromptSectionIds),
    variables: nextVariables,
    sourceInputs,
    promptLang,
    originality: identityOptions.originality,
    format: identityOptions.format,
    mediumCategory: identityOptions.mediumCategory,
    bodyFormMode: identityOptions.bodyFormMode,
    bodyFormLabel: activeBodyFormMeta.label,
    bodyFormLabelEn: activeBodyFormMeta.labelEn,
    humanRegister,
    humanRegisterLabel: activeHumanRegister.label,
    humanRegisterLabelEn: activeHumanRegister.labelEn,
    randomMode: registerRandomMode,
    randomModeLabel: registerRandomModes.find(mode => mode.id === registerRandomMode)?.label,
    randomModeLabelEn: registerRandomModes.find(mode => mode.id === registerRandomMode)?.labelEn
  });

  const compileConceptVariables = async () => {
    if (isCompilingConcept) return;
    if (isVideoStoryboardTemplate) {
      onConceptWorkspacePageChange?.('RESULT');
      onConceptRuntimeChange?.(buildRuntimeState(variables), true);
      return;
    }
    if (isPerformanceStoryboardTemplate) {
      applyPerformanceStoryboardSample();
      return;
    }
    if (sourceMode === 'IMAGE' && !sourceInputs.imageDataUrl) {
      translateSourceToVariables();
      return;
    }
    setIsCompilingConcept(true);
    setCopied(false);
    try {
      const imageParts = sourceMode === 'IMAGE' && sourceInputs.imageDataUrl ? [sourceInputs.imageDataUrl] : [];
      const generated = await runWithTask(
        t(lang, '内容主体 C01-C10 变量生成', 'Content Core C01-C10 Variables'),
        async () => generatePromptSkillVariables(getVariableGenerationPrompt(), imageParts)
      );
      if (generated) {
        applyGeneratedVariables(generated);
        onConceptWorkspacePageChange?.('RESULT');
        onConceptRuntimeChange?.(buildRuntimeState(generated[promptLang]), true);
      } else {
        alert(t(lang, '变量生成失败：模型返回了不完整或非法的内容主体 C01-C10 JSON，系统已尝试修复但仍失败。请重试，或切换更稳定的核心文本模型。', 'Variable generation failed: the model returned incomplete or invalid Content Core C01-C10 JSON, and automatic repair still failed. Please retry or switch to a more stable core text model.'));
      }
    } catch (error: any) {
      if (error?.message !== 'AbortError') {
        console.error(error);
        alert(error?.message || t(lang, '变量生成失败：没有覆盖当前内容主体 C01-C10。', 'Variable generation failed: current variables were not overwritten.'));
      }
    } finally {
      setIsCompilingConcept(false);
    }
  };

  React.useEffect(() => {
    const handleCompile = () => compileConceptVariables();
    window.addEventListener(CONCEPT_COMPILE_EVENT, handleCompile);
    return () => window.removeEventListener(CONCEPT_COMPILE_EVENT, handleCompile);
  });

  React.useEffect(() => {
    const runtimeState = buildRuntimeState(variables);
    onConceptRuntimeChange?.(runtimeState);
    window.dispatchEvent(new CustomEvent(CONCEPT_GENERATION_INSTRUCTION_EVENT, { detail: runtimeState }));
  }, [
    activeSourceMode.label,
    activeSourceMode.labelEn,
    fieldState,
    generationInstruction,
    humanRegister,
    activeHumanRegister.label,
    activeHumanRegister.labelEn,
    identityOptions.format,
    identityOptions.mediumCategory,
    identityOptions.originality,
    onConceptRuntimeChange,
    output,
    promptLang,
    promptTemplateMode,
    registerRandomMode,
    sourceInputs,
    sourceMode,
    variables
  ]);

  const handleReferenceImage = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateSourceInput('imageDataUrl', String(reader.result || ''));
      updateSourceInput('imageName', file.name);
    };
    reader.readAsDataURL(file);
  };

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const copyCompileInstructionOutput = async () => {
    try {
      await navigator.clipboard.writeText(compileInstructionOutput);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const copyCompileResultOutput = async () => {
    try {
      await navigator.clipboard.writeText(compileResultOutput);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const copyCinematicStillPromptOutput = async () => {
    try {
      await navigator.clipboard.writeText(cinematicStillPromptOutput);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const slot = (blockId: string) => (
    <ProphecySlot
      key={blockId}
      blockId={blockId}
      placeholderCN={blockDef(blockId)?.name || blockId}
      placeholderEN={blockDef(blockId)?.enName || blockId}
      fieldState={fieldState}
      lang={lang}
      driverType={DriverType.CONCEPT_DESIGN}
      onOpenLibrary={openLibrary}
      onRemoveTag={(bid, tag) => toggleTag(bid, tag)}
      onClearBlock={clearBlock}
      getItemDetails={getItemDetails}
      getBilingualText={getBilingualText}
      ENGINE_BLOCKS={allBlocks}
      isSmall
      onRandomizeBlock={randomizeBlock}
      onToggleLockBlock={onToggleLock}
      isBlockLocked={isBlockLocked(blockId)}
      lockedTags={lockedTags}
      onToggleTagLock={onToggleTagLock}
      onRandomizeTag={onRandomizeTag}
      getLibraryCount={getLibraryCount}
      focusState={focusState}
      onFocusStateChange={onFocusStateChange}
    />
  );

  const paramSlot = (blockId: string) => (
    blockId === 'cd_spacetime_coordinate'
      ? <React.Fragment key={blockId}>{renderSpacetimeCoordinateSlot(true)}</React.Fragment>
      : slot(blockId)
  );

  const isParamModuleExpanded = (moduleId: string) => paramPanelExpandMode === 'ALL' || expandedParamModuleIds.includes(moduleId);
  const isParamModulePresetVisible = (moduleId: string) => paramPanelExpandMode === 'PRESET' && paramModuleIds.includes(moduleId) && !expandedParamModuleIds.includes(moduleId);
  const globalParamExpandLabel = paramPanelExpandMode === 'COLLAPSED'
    ? t(lang, '展开重点行', 'Expand Preset Rows')
    : paramPanelExpandMode === 'PRESET'
      ? t(lang, '展开全部', 'Expand All')
      : t(lang, '折叠全部', 'Collapse All');
  const toggleParamModuleExpanded = (moduleId: string) => {
    setParamPanelExpandMode('COLLAPSED');
    setExpandedParamModuleIds(prev => prev.includes(moduleId)
      ? prev.filter(item => item !== moduleId)
      : [...prev, moduleId]
    );
  };
  const toggleAllParamModulesExpanded = () => {
    if (paramPanelExpandMode === 'COLLAPSED') {
      setExpandedParamModuleIds([]);
      setParamPanelExpandMode('PRESET');
      return;
    }
    if (paramPanelExpandMode === 'PRESET') {
      setExpandedParamModuleIds(paramModuleIds);
      setParamPanelExpandMode('ALL');
      return;
    }
    setExpandedParamModuleIds([]);
    setParamPanelExpandMode('COLLAPSED');
  };
  const renderParamExpandButton = (
    expanded: boolean,
    onClick: () => void,
    expandedLabel: string,
    collapsedLabel: string,
    large = false,
    iconOverride?: 'plus' | 'x'
  ) => (
    <button
      type="button"
      onClick={onClick}
      className={`group/btn relative flex shrink-0 items-center justify-center rounded border transition-all duration-150 active:scale-95 ${large ? 'h-9 w-9' : 'h-6 w-6'} ${
        expanded
          ? isRetro
            ? 'border-[#85411B]/34 bg-black/5 text-[#85411B] shadow-sm'
            : 'border-orange-400/35 bg-zinc-800 text-orange-300 shadow-sm'
          : isRetro
            ? 'border-transparent text-[#85411B]/58 hover:bg-black/5 hover:text-[#85411B]'
            : 'border-transparent text-zinc-500 hover:bg-white/5 hover:text-white'
      }`}
      title={expanded ? expandedLabel : collapsedLabel}
    >
      {iconOverride === 'plus'
        ? <Plus size={large ? 14 : 12} />
        : iconOverride === 'x'
          ? <X size={large ? 14 : 12} />
          : expanded
            ? <X size={large ? 14 : 12} />
            : <Plus size={large ? 14 : 12} />}
      <span className={`pointer-events-none absolute right-0 top-full z-[100] mt-1 whitespace-nowrap rounded border px-2 py-1 text-[10px] font-normal opacity-0 shadow-md transition-opacity duration-150 group-hover/btn:opacity-100 ${
        isRetro
          ? 'border-[var(--border-main)]/50 bg-[#1A1814] text-[var(--text-main)]'
          : 'border-zinc-700 bg-zinc-800 text-zinc-300'
      }`}>
        {expanded ? expandedLabel : collapsedLabel}
      </span>
    </button>
  );
  const selectedBlockIds = (blockIds: string[]) => blockIds.filter(blockId => (fieldState[blockId] || []).length > 0);
  const getBlockLabel = (blockId: string) => lang === 'EN'
    ? (blockDef(blockId)?.enName || blockId)
    : (blockDef(blockId)?.name || blockId);
  const renderParamModuleEmptyHint = () => (
    <div className={`rounded-md border px-3 py-3 text-[12px] font-black leading-5 ${miniSwitchClass} ${mutedText}`}>
      {t(lang, '点击 + 展开可选预设关键词。', 'Click + to expand optional preset keywords.')}
    </div>
  );
  const renderSelectedSlotSummary = (blockIds: string[], emptyContent?: React.ReactNode) => {
    const selectedIds = selectedBlockIds(blockIds);
    if (selectedIds.length === 0) return emptyContent || renderParamModuleEmptyHint();
    return (
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-xs font-serif">
        {selectedIds.map(paramSlot)}
      </div>
    );
  };
  const renderSelectedBlockLabelSummary = (blockIds: string[]) => {
    const selectedIds = selectedBlockIds(blockIds);
    if (selectedIds.length === 0) return renderParamModuleEmptyHint();
    return (
      <div className={`rounded-md border px-4 py-4 ${miniSwitchClass}`}>
        <div className="grid gap-x-8 gap-y-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {selectedIds.map(blockId => (
            <div key={blockId} className="min-w-0 text-[15px] leading-7">
              <span className={`font-black ${mutedText}`}>{getBlockLabel(blockId)}：</span>
              <span className={`font-serif font-medium ${strongText}`}>{(fieldState[blockId] || []).join('，')}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const renderParamSlotGroup = (
    title: string,
    titleEn: string,
    blockIds: string[],
    prominent = false
  ) => (
    <section>
      <div className={`mb-2 text-[11px] font-black uppercase tracking-[0.14em] ${prominent ? accentText : mutedText}`}>
        {t(lang, title, titleEn)}
      </div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-xs font-serif">
        {blockIds.map(paramSlot)}
      </div>
    </section>
  );

  const renderHumanSlotGroup = (
    title: string,
    titleEn: string,
    desc: string,
    descEn: string,
    blockIds: string[],
    compact = false
  ) => {
    const visibleBlocks = blockIds.filter(blockId => activeSubjectUiBlocks.includes(blockId));
    if (visibleBlocks.length === 0) return null;
    return (
      <section className={`rounded-md border ${compact ? 'p-2.5' : 'p-3'} ${isRetro ? 'border-[#85411B]/12 bg-white/22' : 'border-white/[0.065] bg-black/18'}`}>
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h4 className={paramsSubcardTitleClass}>
              {t(lang, title, titleEn)}
            </h4>
            <p className={`mt-1 ${paramsSubcardMetaClass}`}>
              {t(lang, desc, descEn)}
            </p>
          </div>
          <span className={paramsRowCountClass}>
            {visibleBlocks.reduce((sum, blockId) => sum + (fieldState[blockId] || []).length, 0)}
          </span>
        </div>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-2 text-xs font-serif">
          {visibleBlocks.map(slot)}
        </div>
      </section>
    );
  };

  const renderSubjectSlots = () => {
    if (subjectMode === 'CREATURE') {
      return (
        <div className="space-y-3 p-3">
          {renderParamSlotGroup('生物原型', 'Biological Prototype', ['cd_creature_preset', 'cd_creature_class'], true)}
          <div className="grid gap-3 lg:grid-cols-2">
            {renderHumanSlotGroup(
              '体量与属性',
              'Scale & Traits',
              '异种的基本体量、异常属性和行为意图。',
              'Base scale, abnormal trait, and behavioral intent.',
              ['cd_creature_size', 'cd_creature_element', 'cd_creature_mood']
            )}
            {renderHumanSlotGroup(
              '头部与身体',
              'Head & Body',
              '头部特征、身体结构、非人 anatomy 和轮廓。',
              'Head traits, body structure, non-human anatomy, and silhouette.',
              ['cd_creature_head', 'cd_creature_body']
            )}
            {renderHumanSlotGroup(
              '材质与行动',
              'Texture & Action',
              '材质生理与行动姿态。',
              'Material physiology and action posture.',
              ['cd_creature_texture', 'cd_creature_action']
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-3 p-3">
        {renderParamSlotGroup('主体预设', 'Subject Presets', ['cd_persona', ...styleProtocolBlocks], true)}
        <div className="grid gap-3 lg:grid-cols-2">
          {renderHumanSlotGroup(
            '身份主轴',
            'Identity Axis',
            '年龄、性别气质、轮廓体态、职业身份和核心情绪。',
            'Age, gender presence, silhouette/body type, occupation, and emotional core.',
            ['cd_age', 'cd_gender', 'cd_body_type', 'cd_occupation', 'cd_emotional_core']
          )}
          {renderHumanSlotGroup(
            '头发胡子眼睛',
            'Hair, Beard & Eyes',
            '发色、发型、胡须、眼色、眼型和眼部异象。',
            'Hair color, hairstyle, beard, eye color, eye shape, and eye effects.',
            ['cd_hair_color', 'cd_hair_style_f', 'cd_hair_style_m', 'cd_beard_style', 'cd_eye_color', 'cd_eye_shape', 'cd_eye_fx']
          )}
          {renderHumanSlotGroup(
            '面部表情',
            'Face & Expression',
            '面部特征、妆容修饰和表情状态。',
            'Facial features, makeup/adornment, and expression state.',
            ['cd_face_features', 'cd_makeup_style', 'cd_expression']
          )}
          {renderHumanSlotGroup(
            '皮肤与身体证据',
            'Skin & Body Evidence',
            '皮肤质地、表面附着、异形结构、标记、损伤和改造。',
            'Skin texture, surface state, anomalous structure, markings, damage, and modification.',
            ['cd_skin_texture', 'cd_surface_state', 'cd_body_features', 'cd_body_markings', 'cd_body_damage', 'cd_body_modification']
          )}
          {renderHumanSlotGroup(
            '服装道具符号',
            'Costume, Props & Symbols',
            '服装逻辑、携带物和符号系统。',
            'Costume logic, carried prop, and symbol system.',
            ['cd_costume_logic', 'cd_prop_anchor', 'cd_symbol_system']
          )}
          {renderHumanSlotGroup(
            '姿态行动',
            'Pose & Action',
            '静态姿态、动态动作和具体行为。',
            'Static pose, dynamic action, and concrete behavior.',
            ontologyActionBlocks
          )}
        </div>
      </div>
    );
  };

  const renderSubjectCollapsedSummary = () => {
    if (subjectMode === 'CREATURE') {
      return renderSelectedBlockLabelSummary(creatureSubjectBlocks);
    }
    return renderSelectedBlockLabelSummary(humanSubjectUiBlocks);
  };

  const renderPaletteSlots = () => {
    const isPaletteBound = (fieldState['cd_color_palette'] || []).length > 0;
    return (
      <div className="flex min-h-[2.3rem] flex-row items-center gap-3">
        <div className="flex min-w-0 items-center">
          {slot('cd_color_palette')}
        </div>
        <div className="group/hex relative flex min-w-[220px] flex-1 items-center gap-1">
          {visibleColorPalette.slice(0, 7).map((color, idx) => (
            <div
              key={idx}
              className={`group/color relative min-w-[18px] max-w-[26px] flex-1 aspect-square overflow-hidden rounded border shadow-sm ${
                isPaletteBound
                  ? (isRetro ? 'cursor-not-allowed border-[#85411B]/14 opacity-55' : 'cursor-not-allowed border-white/[0.08] opacity-55')
                  : (isRetro ? 'cursor-pointer border-[#85411B]/22 hover:border-[#85411B]/55' : 'cursor-pointer border-white/[0.12] hover:border-orange-400/45')
              }`}
              style={{ backgroundColor: color || (isRetro ? '#EFE9E0' : '#111111') }}
              title={color || t(lang, '选择色值', 'Pick color')}
            >
              <input
                type="color"
                value={color || '#000000'}
                disabled={isPaletteBound}
                onChange={(event) => {
                  const next = [...visibleColorPalette].slice(0, 7);
                  next[idx] = event.target.value;
                  onPaletteChange?.(next);
                }}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
              />
              {!color && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25">
                  <Plus size={10} className={isRetro ? 'text-[#85411B]' : 'text-white'} />
                </div>
              )}
              {isPaletteBound && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/36 opacity-0 transition-opacity group-hover/color:opacity-100">
                  <Lock size={10} className="text-white" />
                </div>
              )}
            </div>
          ))}
          <button
            type="button"
            disabled={isPaletteBound}
            onClick={() => onPaletteChange?.(Array(7).fill(""))}
            className={`mist-concept-hex-clear ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded border transition-all disabled:cursor-not-allowed disabled:opacity-35 ${
              isRetro
                ? 'border-transparent text-[#85411B]/55 hover:border-[#85411B]/32 hover:bg-[#85411B]/8 hover:text-[#85411B]'
                : 'border-transparent text-zinc-500 hover:border-orange-400/35 hover:bg-orange-400/8 hover:text-orange-200'
            }`}
            title={t(lang, '清空色值', 'Clear Hex Codes')}
          >
            <RefreshCcw size={12} />
          </button>
        </div>
      </div>
    );
  };

  const renderSpacetimeCoordinateSlot = (compact = false) => {
    const hasValue = Boolean(selectedSpaceAnchor || selectedTimeAnchor);
    const displayText = getSpacetimeDisplay() || t(lang, '精确坐标', 'Precise Coordinate');
    const currentLocked = Boolean(isSpaceAnchorValueLocked || isTimeAnchorValueLocked || lockedModules['cd_spacetime_coordinate']);
    if (compact) {
      return (
        <span className="mist-concept-spacetime-slot mist-concept-prophecy-slot inline-flex flex-wrap items-baseline gap-x-1 mx-1.5 md:mx-2 relative group/slot align-middle">
          <span className="group/tag relative inline-flex flex-col items-start align-top">
            <span className="mist-concept-slot-row inline-flex items-center">
              <span
                onClick={() => !lockedModules['cd_spacetime_coordinate'] && setIsSpacetimeModalOpen(true)}
                className={`mist-labyrinth-hover-token ${hasValue ? 'mist-prophecy-slot-active is-filled' : 'mist-prophecy-slot-empty is-empty'} ${currentLocked ? 'mist-token-locked is-locked' : ''} cursor-pointer font-serif font-bold transition-all duration-300 hover:z-50 align-top inline-block text-sm md:text-base tracking-wide whitespace-nowrap ${
                  currentLocked
                    ? 'border border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]/15 px-2'
                    : hasValue
                      ? `border-b px-0.5 ${isRetro ? 'hover:bg-transparent' : 'hover:bg-white/10'}`
                      : (isRetro ? 'border-b border-[#85411B]/28 px-0.5 text-zinc-500 hover:text-black hover:border-[#85411B]/48' : 'border-b border-zinc-800 px-0.5 text-zinc-500 hover:text-white hover:border-zinc-600')
                }`}
              >
                {hasValue ? displayText : `[${displayText}]`}
              </span>
              {hasValue && (
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); handleSpacetimeReset(); }}
                  disabled={currentLocked}
                  title={t(lang, '删除', 'Remove')}
                  className={`ml-1 inline-flex h-5 w-5 items-center justify-center opacity-0 group-hover/tag:opacity-100 transition-colors duration-200 text-zinc-500 hover:text-red-400 ${currentLocked ? 'opacity-20 cursor-not-allowed group-hover/tag:opacity-20' : ''}`}
                >
                  <X size={16} strokeWidth={2.6} />
                </button>
              )}
            </span>
          </span>
        </span>
      );
    }
    return (
      <section className={`mist-concept-field-row flex min-h-[2.9rem] items-center gap-3 rounded-md border px-3 py-2 transition-all ${isRetro ? 'border-[#85411B]/12 bg-white/18 hover:border-[#85411B]/26' : 'border-white/[0.065] bg-black/14 hover:border-orange-400/22'}`}>
        <div className={compact ? paramsRowLabelWrapClass : 'flex w-24 shrink-0 items-center justify-between gap-2'}>
          <h4 className={compact ? paramsRowTitleClass : `truncate text-[10px] font-black uppercase tracking-[0.14em] ${strongText}`}>
            {t(lang, '时空坐标', 'Time-Space')}
          </h4>
          <span className={compact ? paramsRowCountClass : `shrink-0 rounded border px-1 py-0.5 font-mono text-[9px] font-black ${miniSwitchClass} ${mutedText}`}>
            {hasValue ? 1 : 0}
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-1 text-xs font-serif">
          <span className="mist-concept-spacetime-slot mist-concept-prophecy-slot inline-flex flex-wrap items-baseline gap-x-1 mx-1.5 md:mx-2 relative group/slot align-middle">
            <span className="group/tag relative inline-flex flex-col items-start align-top">
              <span className="mist-concept-slot-row inline-flex items-center">
                <span
                  onClick={() => !lockedModules['cd_spacetime_coordinate'] && setIsSpacetimeModalOpen(true)}
                  className={`mist-labyrinth-hover-token ${hasValue ? 'mist-prophecy-slot-active is-filled' : 'mist-prophecy-slot-empty is-empty'} ${currentLocked ? 'mist-token-locked is-locked' : ''} cursor-pointer font-serif font-bold transition-all duration-300 hover:z-50 align-top inline-block text-sm md:text-base tracking-wide whitespace-nowrap ${
                    currentLocked
                      ? 'border border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]/15 px-2'
                      : hasValue
                        ? `border-b px-0.5 ${isRetro ? 'hover:bg-transparent' : 'hover:bg-white/10'}`
                        : (isRetro ? 'border-b border-[#85411B]/28 px-0.5 text-zinc-500 hover:text-black hover:border-[#85411B]/48' : 'border-b border-zinc-800 px-0.5 text-zinc-500 hover:text-white hover:border-zinc-600')
                  }`}
                >
                  {hasValue ? displayText : `[${displayText}]`}
                </span>
                {hasValue && (
                  <button
                    type="button"
                    onClick={(event) => { event.stopPropagation(); handleSpacetimeReset(); }}
                    disabled={currentLocked}
                    title={t(lang, '删除', 'Remove')}
                    className={`ml-1 inline-flex h-5 w-5 items-center justify-center opacity-0 group-hover/tag:opacity-100 transition-colors duration-200 text-zinc-500 hover:text-red-400 ${currentLocked ? 'opacity-20 cursor-not-allowed group-hover/tag:opacity-20' : ''}`}
                  >
                    <X size={16} strokeWidth={2.6} />
                  </button>
                )}
              </span>
              <div className={`mist-labyrinth-inline-control-actions absolute left-0 top-[calc(100%+3px)] z-50 flex items-center gap-1 rounded border p-1 opacity-0 shadow-md transition-opacity duration-300 group-hover/tag:opacity-100 ${
                isRetro ? 'border-[var(--border-main)]/40 bg-[var(--bg-panel)]/80 backdrop-blur' : 'border-zinc-800 bg-black/80 backdrop-blur'
              }`}>
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); handleSpacetimeRandomAll(); }}
                  disabled={currentLocked}
                  className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white rounded transition-colors ${currentLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                  <Dice5 size={10} />
                </button>
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); handleSpacetimeToggleLock(); }}
                  className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white rounded transition-colors ${currentLocked ? 'border-[var(--mist-active-accent)] text-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]/20' : ''}`}
                >
                  {currentLocked ? <Lock size={10} /> : <Unlock size={10} />}
                </button>
                {!hasValue && (
                  <button
                    type="button"
                    onClick={(event) => { event.stopPropagation(); setIsSpacetimeModalOpen(true); }}
                    disabled={currentLocked}
                    className={`flex items-center justify-center p-0.5 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white rounded transition-colors ${currentLocked ? 'opacity-30 cursor-not-allowed' : ''}`}
                  >
                    <Sparkles size={10} />
                  </button>
                )}
              </div>
            </span>
          </span>
        </div>
      </section>
    );
  };

  const renderSpacetimeModal = () => {
    const currentYear = selectedTimelineYear === null ? TIMELINE_YEAR_NOW : clampTimelineYear(selectedTimelineYear);
    const yearInputValue = spacetimeYearInputDraft ?? selectedTimeAnchor;
    const spaceAnchorDisplay = selectedSpaceAnchor ? getPresetText(selectedSpaceAnchor, SUR3_SPACE_ANCHOR_PRESETS) : '';
    return (
      <div className="mist-labyrinth-identity-modal mist-concept-spacetime-modal">
        <div className="mist-labyrinth-identity-panel mist-labyrinth-time-panel">
          <button
            type="button"
            className="mist-labyrinth-identity-close"
            onClick={closeSpacetimeModal}
            aria-label={t(lang, '关闭时空面板', 'Close spacetime panel')}
          >
            <X size={18} />
          </button>
          <div className="mist-labyrinth-identity-head">
            <Ghost size={19} />
            <h3>{t(lang, '精确坐标', 'Precise Coordinate')}</h3>
          </div>
          <div className="mist-labyrinth-identity-body">
            <section className="mist-labyrinth-identity-section">
              <div className="mist-labyrinth-identity-section-head">
                <span>{t(lang, '空间锚点', 'Space Anchor')}</span>
                <div className="mist-labyrinth-identity-tools">
                  <button type="button" onClick={handleSpacetimeRandomSpace} disabled={isSpaceAnchorLocked}><Dice5 size={12} /></button>
                  <button type="button" onClick={() => onToggleLock('cd_space_anchor_exact')} className={isSpaceAnchorLocked ? 'is-locked' : ''}>{isSpaceAnchorLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
                  <button type="button" onClick={() => updateSpacetimeCoordinate(null, undefined)} disabled={isSpaceAnchorLocked}><Trash2 size={12} /></button>
                </div>
              </div>
              <div className="mist-labyrinth-coordinate-token-row">
                <button
                  type="button"
                  onClick={() => {
                    if (isSpaceAnchorLocked) return;
                    setActiveBlockId('cd_space_anchor_exact');
                    setLibraryOpen(true);
                  }}
                  disabled={isSpaceAnchorLocked}
                  className={`mist-concept-coordinate-open ${selectedSpaceAnchor ? 'is-filled' : 'is-empty'}`}
                >
                  {selectedSpaceAnchor ? spaceAnchorDisplay || selectedSpaceAnchor : t(lang, '空间锚', 'Space Anchor')}
                </button>
              </div>
            </section>

            <section className="mist-labyrinth-identity-section">
              <div className="mist-labyrinth-identity-section-head">
                <span>{t(lang, '时间锚点', 'Time Anchor')}</span>
                <div className="mist-labyrinth-identity-tools">
                  <button type="button" onClick={handleSpacetimeRandomTime} disabled={isTimeAnchorLocked}><Dice5 size={12} /></button>
                  <button type="button" onClick={() => onToggleLock('cd_time_anchor_exact')} className={isTimeAnchorLocked ? 'is-locked' : ''}>{isTimeAnchorLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
                  <button type="button" onClick={() => updateSpacetimeCoordinate(undefined, null)} disabled={isTimeAnchorLocked}><Trash2 size={12} /></button>
                </div>
              </div>
              <div className="mist-labyrinth-year-readout">
                <span className="mist-labyrinth-year-readout-value">
                  {selectedTimeAnchor ? formatTimeAnchor(selectedTimeAnchor, true) : t(lang, '自动', 'AUTO')}
                </span>
                <input
                  type="text"
                  inputMode="text"
                  value={yearInputValue}
                  disabled={isTimeAnchorLocked}
                  placeholder={t(lang, '1840 / -221 / 未来', '1840 / -221 / Future')}
                  aria-label={t(lang, '手动输入年份或时代', 'Manual time anchor input')}
                  aria-invalid={spacetimeYearInputInvalid}
                  className={`mist-labyrinth-year-manual-input ${spacetimeYearInputInvalid ? 'is-invalid' : ''}`}
                  onFocus={() => {
                    setSpacetimeYearInputDraft(selectedTimeAnchor);
                    setSpacetimeYearInputInvalid(false);
                  }}
                  onChange={(event) => {
                    setSpacetimeYearInputDraft(event.target.value);
                    setSpacetimeYearInputInvalid(false);
                  }}
                  onBlur={(event) => commitSpacetimeYearInput(event.currentTarget.value)}
                  onKeyDown={handleSpacetimeYearInputKeyDown}
                />
              </div>
              <div className="mist-labyrinth-era-token-row">
                {selectableSur3Eras.map(era => {
                  const label = lang === 'EN' ? era.nameEn : era.name;
                  return (
                    <button
                      type="button"
                      key={era.id}
                      disabled={isTimeAnchorLocked}
                      className={isSelectedSur3Era(era) ? 'is-active' : ''}
                      onClick={() => updateSpacetimeCoordinate(undefined, label)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              <input
                type="range"
                min={TIMELINE_YEAR_MIN}
                max={TIMELINE_YEAR_MAX}
                step="1"
                value={currentYear}
                disabled={isTimeAnchorLocked || Boolean(selectedTimeAnchor && !selectedTimeIsYear)}
                onChange={(event) => updateSpacetimeCoordinate(undefined, Number(event.target.value))}
                className="mist-labyrinth-year-slider"
              />
              <div className="mist-labyrinth-year-tools">
                <span>-2000</span>
                <div>
                  <button type="button" onClick={() => updateSpacetimeCoordinate(undefined, currentYear - 10)}>-10</button>
                  <button type="button" onClick={() => updateSpacetimeCoordinate(undefined, currentYear - 1)}>-1</button>
                  <button type="button" onClick={() => updateSpacetimeCoordinate(undefined, TIMELINE_YEAR_NOW)}>Now</button>
                  <button type="button" onClick={() => updateSpacetimeCoordinate(undefined, currentYear + 1)}>+1</button>
                  <button type="button" onClick={() => updateSpacetimeCoordinate(undefined, currentYear + 10)}>+10</button>
                </div>
                <span>3000</span>
              </div>
            </section>
          </div>
          <div className="mist-labyrinth-identity-foot">
            <div className="mist-labyrinth-identity-foot-tools">
              <button type="button" onClick={handleSpacetimeRandomAll}><Dice5 size={14} /><span>{t(lang, '全随机', 'Random')}</span></button>
              <button type="button" onClick={handleSpacetimeToggleLock} className={isSpaceAnchorLocked && isTimeAnchorLocked ? 'is-locked' : ''}>{isSpaceAnchorLocked && isTimeAnchorLocked ? <Lock size={14} /> : <Unlock size={14} />}</button>
              <button type="button" onClick={handleSpacetimeReset}><Trash2 size={14} /></button>
            </div>
            <button
              type="button"
              className="mist-labyrinth-identity-confirm"
              onClick={closeSpacetimeModal}
            >
              <Check size={14} />
              {t(lang, '确认设定', 'CONFIRM')}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderFieldCell = (
    title: string,
    titleEn: string,
    count: number,
    children: React.ReactNode
  ) => (
    <section className={`mist-concept-field-cell min-w-0 rounded-md border p-2 transition-all ${isRetro ? 'border-[#85411B]/12 bg-white/18 hover:border-[#85411B]/26' : 'border-white/[0.065] bg-black/14 hover:border-orange-400/22'}`}>
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <h4 className={paramsSubcardTitleClass}>
          {t(lang, title, titleEn)}
        </h4>
        <span className={paramsRowCountClass}>
          {count}
        </span>
      </div>
      <div className="space-y-1.5">
        {children}
      </div>
    </section>
  );

  const renderGovernanceController = () => {
    const slash = <span className={`font-mono text-[11px] ${mutedText}`}>/</span>;
    return (
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 p-3 text-xs font-serif">
        {renderSpacetimeCoordinateSlot(true)}
        {slash}
        {slot('cd_field_preset')}
        {slot('cd_persona')}
        {slot('cd_occupation')}
        {slot('cd_style_protocol_primary')}
        {slot('cd_style_protocol_secondary')}
      </div>
    );
  };

  const renderEngineSummaryPanel = () => (
    <aside className={`mist-concept-summary-panel rounded-lg border p-4 ${panelClass}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`font-mono text-[9px] font-black uppercase tracking-[0.28em] ${mutedText}`}>
            Compile Preview
          </p>
          <h3 className={`mt-2 font-serif text-xl font-black tracking-[0.05em] ${strongText}`}>
            {t(lang, '概念编译状态', 'Concept Compile State')}
          </h3>
        </div>
        <button
          type="button"
          onClick={compileConceptVariables}
          disabled={isCompilingConcept}
          className={topActionButtonClass}
        >
          {isCompilingConcept ? <RefreshCcw size={13} className="animate-spin" /> : <Wand2 size={13} />}
          {t(lang, '编译律令', 'Compile')}
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {(isPerformanceStoryboardTemplate
          ? [
              { label: '模板', labelEn: 'Template', value: t(lang, '表演分镜', 'Storyboard') },
              { label: '格式', labelEn: 'Format', value: '16:9 / 12 Panels' },
              { label: '绘制', labelEn: 'Drawing', value: 'B/W Pencil' },
              { label: '标注', labelEn: 'Notes', value: 'Color Marks' }
            ]
          : [
              { label: '模式', labelEn: 'Mode', value: t(lang, activeSourceMode.label, activeSourceMode.labelEn) },
              { label: '媒介', labelEn: 'Medium', value: t(lang, activeMediumMeta.shortLabel, activeMediumMeta.shortLabelEn) },
              { label: '对象', labelEn: 'Object', value: t(lang, activeObjectRoute.label, activeObjectRoute.labelEn) },
              { label: '法则', labelEn: 'Law', value: t(lang, registerRandomModes.find(mode => mode.id === registerRandomMode)?.label || '同构折译', registerRandomModes.find(mode => mode.id === registerRandomMode)?.labelEn || 'L2 Translate') }
            ]).map(item => (
          <div key={item.label} className={`rounded-md border px-3 py-2 ${softPanelClass}`}>
            <p className={`font-mono text-[8px] font-black uppercase tracking-[0.2em] ${mutedText}`}>
              {t(lang, item.label, item.labelEn)}
            </p>
            <p className={`mt-1 truncate text-[11px] font-black uppercase tracking-[0.12em] ${strongText}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className={`mt-3 rounded-lg border p-3 ${softPanelClass}`}>
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[10px] font-black uppercase tracking-[0.16em] ${strongText}`}>
            {t(lang, '基础输出合同', 'Output Contract')}
          </span>
          <span className={`rounded border px-2 py-1 font-mono text-[9px] font-black ${sourceInputReady ? accentText : mutedText}`}>
            {sourceInputReady ? t(lang, '可编译', 'READY') : t(lang, '待输入', 'WAITING')}
          </span>
        </div>
        <p className={`mt-2 text-[11px] leading-5 ${mutedText}`}>
          {isPerformanceStoryboardTemplate
            ? t(
                lang,
                '当前将范本变量映射到分镜模块，再由终稿律令本地拼装为完整 12 格分镜提示词。',
                'The sample variables are mapped into storyboard modules, then locally assembled into the complete 12-panel storyboard prompt.'
              )
            : t(
                lang,
                `当前将以“${activeMediumMeta.label}”为视觉风格底线，编译为内容主体 C01-C10 拼装台内容，再由最终成型律令本地拼装。`,
                `The current route uses "${activeMediumMeta.labelEn}" as the physical-medium floor, compiles the Content Core C01-C10 slots, then locally assembles the final prompt.`
              )}
        </p>
      </div>

      <div className={`mt-3 rounded-lg border p-3 ${softPanelClass}`}>
        <p className={`text-[10px] font-black uppercase tracking-[0.16em] ${strongText}`}>
          {t(lang, '当前素材摘要', 'Current Material')}
        </p>
        <p className={`mt-2 line-clamp-6 whitespace-pre-wrap text-[11px] leading-5 ${mutedText}`}>
          {sourceMode === 'PRESET'
            ? [
                `${t(lang, '视觉风格', 'Visual Style')}: ${selectedLine(activeStyleSourceBlocks, t(lang, '未选择', 'None'))}`,
                `${t(lang, '色彩协议', 'Color Protocol')}: ${selectedLine(paletteBlocks, t(lang, '未选择', 'None'))}`,
                `${t(lang, '时空场域', 'Time-Space Field')}: ${selectedLine(governanceBlocks, t(lang, '未选择', 'None'))}`,
                `${t(lang, '主体本体', 'Subject Ontology')}: ${selectedLine(activeSubjectBlocks, t(lang, '未选择', 'None'))}`
              ].join('\n')
            : sourceMode === 'ARTICLE'
              ? (sourceInputs.articleText.trim() || t(lang, '等待粘贴文本。', 'Waiting for pasted text.'))
              : sourceMode === 'IMAGE'
                ? (sourceInputs.imageName || sourceInputs.imageGuidance.trim() || t(lang, '等待参考图或反馈。', 'Waiting for reference image or feedback.'))
                : (sourceInputs.ideaText.trim() || t(lang, '等待灵感元素。', 'Waiting for idea elements.'))}
        </p>
      </div>
    </aside>
  );

  const renderSlotSection = (
    title: string,
    titleEn: string,
    sectionId: 'STYLE' | 'PALETTE' | 'SUBJECT',
    blockIds: string[],
    icon: React.ElementType,
    extra?: React.ReactNode,
    customContent?: React.ReactNode,
    options?: {
      moduleId?: string;
      collapsedContent?: React.ReactNode;
      previewContent?: React.ReactNode;
      expandedContent?: React.ReactNode;
      randomizeHandler?: () => void;
      randomizeTitle?: string;
      titleExtra?: React.ReactNode;
      actionExtra?: React.ReactNode;
    }
  ) => {
    const Icon = icon;
    const sectionLocked = isSectionLocked(sectionId);
    const actionButtonBase = 'flex h-6 w-6 items-center justify-center rounded border transition-all duration-200 group disabled:cursor-not-allowed disabled:opacity-40';
    const actionButtonIdle = isRetro
      ? 'border-transparent bg-transparent text-[#85411B]/58 hover:border-[#85411B]/36 hover:bg-[#85411B]/8 hover:text-[#85411B]'
      : 'border-transparent bg-zinc-900/45 text-zinc-500 hover:border-[var(--mist-active-accent)]/45 hover:bg-[var(--mist-active-accent)]/10 hover:text-[var(--mist-active-accent)]';
    const actionButtonLocked = isRetro
      ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]'
      : 'border-orange-400/55 bg-orange-400/10 text-orange-300';
    const randomMotionId = `${sectionId}:random`;
    const clearMotionId = `${sectionId}:clear`;
    const moduleId = options?.moduleId || titleEn;
    const expanded = isParamModuleExpanded(moduleId);
    const presetVisible = isParamModulePresetVisible(moduleId);
    const count = selectedCount(blockIds);
    const defaultExpandedContent = customContent || (
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 p-3 text-xs font-serif">
        {blockIds.map(slot)}
      </div>
    );
    const collapsedContent = options?.collapsedContent || (
      <div className="p-3">
        {renderSelectedSlotSummary(blockIds)}
      </div>
    );
    const previewContent = options?.previewContent || collapsedContent;
    const expandedContent = options?.expandedContent || defaultExpandedContent;
	    return (
	      <section className={`mist-aesthetic-module mist-concept-source-module rounded-lg border transition-all duration-300 ${sectionLocked ? 'is-locked opacity-80' : ''} ${softPanelClass}`}>
	        <div
	          role="button"
	          tabIndex={0}
	          onClick={() => toggleParamModuleExpanded(moduleId)}
	          onKeyDown={event => {
	            if (event.key === 'Enter' || event.key === ' ') {
	              event.preventDefault();
	              toggleParamModuleExpanded(moduleId);
	            }
	          }}
	          className={`mist-aesthetic-module-header grid min-h-[2.45rem] cursor-pointer grid-cols-[minmax(0,1fr)_minmax(220px,auto)_auto] items-center gap-3 border-b px-3 py-2 ${isRetro ? 'border-[#85411B]/12' : 'border-white/[0.06]'}`}
	        >
	          <div className={`${paramsModuleTitleClass} min-w-0`}>
	            <Icon size={16} className={accentText} />
	            <span className="truncate">{t(lang, title, titleEn)}</span>
	            <span className={paramsModuleCountClass}>
	              {count}
	            </span>
	            {options?.titleExtra ? (
	              <div className="ml-1 min-w-0 shrink-0" onClick={event => event.stopPropagation()}>
	                {options.titleExtra}
	              </div>
	            ) : null}
	          </div>
	          <div className="flex min-w-0 items-center justify-end gap-1.5" onClick={event => event.stopPropagation()}>
	            {extra}
	            <div className="mist-aesthetic-action-buttons flex items-center gap-1 rounded-md border p-0.5">
	              {options?.actionExtra}
	              <button
	                type="button"
	                disabled={sectionLocked}
                onClick={() => {
                  if (options?.randomizeHandler) {
                    options.randomizeHandler();
                  } else {
                    randomizeBlocks(blockIds);
                  }
                  triggerActionMotion(randomMotionId);
                }}
                className={`mist-concept-action-random ${activeActionMotion === randomMotionId ? 'is-motioning' : ''} ${actionButtonBase} ${actionButtonIdle}`}
                title={options?.randomizeTitle || t(lang, '随机本组', 'Randomize Section')}
              >
                <Dice5 size={12} className={!sectionLocked ? 'transition-transform duration-500 group-hover:rotate-90' : ''} />
              </button>
              <button
                type="button"
                disabled={sectionLocked}
                onClick={() => {
                  clearBlocks(blockIds);
                  triggerActionMotion(clearMotionId);
                }}
                className={`mist-concept-action-clear ${activeActionMotion === clearMotionId ? 'is-motioning' : ''} ${actionButtonBase} ${actionButtonIdle}`}
                title={t(lang, '清空本组', 'Clear Section')}
              >
                <RefreshCcw size={12} className={!sectionLocked ? 'transition-transform duration-500 group-hover:-rotate-90' : ''} />
              </button>
              <button
                type="button"
                onClick={() => onToggleLock(sectionId)}
                className={`mist-concept-action-lock ${actionButtonBase} ${sectionLocked ? actionButtonLocked : actionButtonIdle}`}
                title={sectionLocked ? t(lang, '解锁本组', 'Unlock Section') : t(lang, '锁定本组', 'Lock Section')}
	              >
	                {sectionLocked ? <Lock size={12} /> : <Unlock size={12} />}
	              </button>
	              <button
	                type="button"
	                onClick={() => copySection(sectionId, title, titleEn, blockIds)}
	                className={`mist-concept-action-copy ${actionButtonBase} ${copiedSectionId === sectionId ? actionButtonLocked : actionButtonIdle}`}
	                title={t(lang, '复制本组', 'Copy Section')}
	              >
	                {copiedSectionId === sectionId ? <Check size={12} /> : <Copy size={12} />}
	              </button>
	            </div>
	          </div>
	          <div onClick={event => event.stopPropagation()}>
	            {renderParamExpandButton(
	              expanded,
	              () => toggleParamModuleExpanded(moduleId),
	              t(lang, '收起', 'Collapse'),
	              t(lang, '展开完整句式', 'Expand Sentence')
	            )}
	          </div>
	        </div>
	        {expanded ? expandedContent : presetVisible ? previewContent : collapsedContent}
	      </section>
    );
  };

  return (
    <div className="mist-aesthetic-engine mist-concept-design-engine relative flex h-full w-full flex-col overflow-hidden bg-black">
      <div className="relative z-10 h-full overflow-y-auto custom-scrollbar xl:overflow-hidden">
        <div className="mx-auto flex min-h-full w-full max-w-[1880px] flex-col gap-4 px-4 py-4 pb-24 xl:h-full xl:min-h-0 xl:px-5 xl:pb-20">
          {(['ENGINE', 'COMPILE', 'RESULT', 'FINAL'] as ConceptDesignWorkspacePage[]).includes(conceptWorkspacePage) && (
          <div className="mist-concept-workbench min-h-0 xl:flex-1 xl:overflow-hidden">
            <div className="grid min-h-0 gap-3 xl:h-full xl:grid-cols-[minmax(420px,0.34fr)_minmax(0,1fr)]">
              <aside className="flex min-h-0 flex-col gap-3 xl:h-full xl:overflow-y-auto xl:pr-1 custom-scrollbar">
                <section className={`shrink-0 rounded-lg border p-3 ${panelClass}`}>
                  <p className={`font-mono text-[11px] uppercase tracking-[0.24em] ${mutedText}`}>Mist Edict</p>
                  <h1 className={`mt-1.5 font-serif text-2xl font-black tracking-[0.04em] ${strongText}`}>
                    {t(lang, '迷雾律令', 'Mist Edict')}
                  </h1>
                </section>
                <div className="shrink-0">
                  {renderPromptTemplatePanel()}
                </div>
                <div className="shrink-0 space-y-3">
                  {renderSourceModePanel()}
                  {renderPhysicalMediumPanel()}
                  {renderWorldLawPanel()}
                  {renderBodyFormPanel()}
                  {renderContentIntentPanel()}
                  {renderTemplateQuickControlsPanel()}
                </div>
              </aside>

              <main className="min-h-0 xl:flex xl:flex-col xl:overflow-hidden">
                {activeTemplateWorkspaceView === 'PARAMS' ? (
                  <div className="shrink-0 pb-3">
                    {renderLexiconAxisFilterPanel()}
                  </div>
                ) : null}
	                    <div ref={templateWorkspaceBodyRef} className="mist-template-workspace-body min-h-0 xl:flex-1 xl:overflow-y-auto xl:pr-1 custom-scrollbar">
	                    <div className={`mist-template-workspace-view mist-template-params-view ${activeTemplateWorkspaceView === 'PARAMS' ? 'space-y-3' : 'hidden'}`}>
                    {renderVisualStylePanel()}

                    {renderSlotSection(
                      '取景协议',
                      'Framing Protocol',
                      'STYLE',
                      activeEyeSourceBlocks,
                      Camera,
                      (
                        <div className="flex items-center gap-1.5">
                          {lastFramingPreset ? (
	                            <span className={`hidden h-6 max-w-[7rem] items-center truncate rounded px-1.5 text-[10px] font-black leading-none tracking-[0.03em] sm:inline-flex ${isRetro ? 'bg-[#85411B]/10 text-[#85411B]' : 'bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]'}`}>
                              {t(lang, lastFramingPreset.label, lastFramingPreset.labelEn)}
                            </span>
                          ) : null}
                        </div>
                      ),
                      undefined,
                      {
                        moduleId: 'framing_protocol',
                        actionExtra: renderFramingPresetControl(),
                        randomizeHandler: () => {
                          setIsFramingPresetPanelOpen(false);
                          randomizeFramingPreset();
                        },
                        randomizeTitle: t(lang, '按取景目标随机细项', 'Randomize framing details by goal'),
                        collapsedContent: <div className="p-3">{renderSelectedSlotSummary([...activeMediaEyeBlocks, ...aestheticEyeAuditBlocks])}</div>,
                        previewContent: (
                          <div className="space-y-3 p-3">
                            {renderParamSlotGroup('拍摄协议预设', 'Shooting Protocol Preset', activeMediaEyeBlocks, true)}
                          </div>
                        ),
                        expandedContent: (
                          <div className="space-y-3 p-3">
                            {renderParamSlotGroup('拍摄协议预设', 'Shooting Protocol Preset', activeMediaEyeBlocks, true)}
                            {renderParamSlotGroup('取景细项', 'Framing Details', aestheticEyeAuditBlocks)}
                          </div>
                        )
                      }
                    )}

	                    {renderSlotSection(
	                      '主体本体',
	                      'Subject Ontology',
	                      'SUBJECT',
	                      activeSubjectUiBlocks,
	                      subjectMode === 'HUMAN' ? UserRound : Layers3,
	                      (
	                        <div className="flex items-center gap-1.5">
	                          {lastContentIntentPreset ? (
	                            <span className={`hidden h-6 max-w-[7rem] items-center truncate rounded px-1.5 text-[10px] font-black leading-none tracking-[0.03em] sm:inline-flex ${isRetro ? 'bg-[#85411B]/10 text-[#85411B]' : 'bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]'}`}>
	                              {t(lang, lastContentIntentPreset.label, lastContentIntentPreset.labelEn)}
	                            </span>
	                          ) : null}
	                        </div>
	                      ),
	                      undefined,
	                      {
	                        moduleId: 'subject_ontology',
	                        titleExtra: renderObjectRouteGrid(),
	                        actionExtra: renderContentIntentPresetControl(),
	                        randomizeHandler: () => randomizeContentIntentModule('SUBJECT'),
	                        randomizeTitle: t(lang, '随机主体本体', 'Randomize Subject Ontology'),
	                        collapsedContent: <div className="p-3">{renderSubjectCollapsedSummary()}</div>,
                        previewContent: (
                          <div className="space-y-3 p-3">
                            {subjectMode === 'CREATURE'
	                              ? renderParamSlotGroup('生物原型', 'Biological Prototype', ['cd_creature_preset', 'cd_creature_class'], true)
	                              : renderParamSlotGroup('主体预设', 'Subject Presets', ['cd_persona', ...styleProtocolBlocks], true)}
	                          </div>
	                        ),
	                        expandedContent: renderSubjectSlots()
	                      }
	                    )}
                    {renderSlotSection(
                      '时空场域',
                      'Time-Space Field',
                      'STYLE',
                      spacetimeFieldUiBlocks,
                      Box,
                      (
                        <div className="flex items-center gap-1.5">
                          {lastSpacetimeFieldRoute ? (
                            <span className={`hidden h-6 max-w-[7rem] items-center truncate rounded px-1.5 text-[10px] font-black leading-none tracking-[0.03em] sm:inline-flex ${isRetro ? 'bg-[#85411B]/10 text-[#85411B]' : 'bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]'}`}>
                              {t(lang, spacetimeFieldRouteMeta[lastSpacetimeFieldRoute].label, spacetimeFieldRouteMeta[lastSpacetimeFieldRoute].labelEn)}
                            </span>
                          ) : null}
                        </div>
                      ),
                      undefined,
                      {
                        moduleId: 'time_space_field',
                        actionExtra: renderSpacetimeFieldRandomControl(),
                        randomizeHandler: () => randomizeSpacetimeFieldModule(),
                        randomizeTitle: t(lang, '随机时空场域', 'Randomize Time-Space Field'),
                        previewContent: (
                          <div className="space-y-3 p-3">
                            {renderParamSlotGroup('场域锚点预设', 'Field Anchor Presets', ['cd_spacetime_coordinate', 'cd_field_preset'], true)}
                          </div>
                        ),
                        expandedContent: (
                          <div className="space-y-3 p-3">
                            {renderParamSlotGroup('场域锚点预设', 'Field Anchor Presets', ['cd_spacetime_coordinate', 'cd_field_preset'], true)}
                            {renderParamSlotGroup('空间类型', 'Space Types', fieldSpaceTypeBlocks)}
                            {renderParamSlotGroup('环境状态', 'Environment State', fieldEnvironmentStateBlocks)}
                          </div>
                        )
                      }
                    )}
                    {renderSlotSection(
                      '光影氛围',
                      'Lighting Atmosphere',
                      'STYLE',
                      aestheticLightAuditBlocks,
                      Lightbulb,
                      (
                        <div className="flex items-center gap-1.5">
                          {lastLightingAtmosphereRoute ? (
                            <span className={`hidden h-6 max-w-[7rem] items-center truncate rounded px-1.5 text-[10px] font-black leading-none tracking-[0.03em] sm:inline-flex ${isRetro ? 'bg-[#85411B]/10 text-[#85411B]' : 'bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]'}`}>
                              {t(lang, lightingAtmosphereRouteMeta[lastLightingAtmosphereRoute].label, lightingAtmosphereRouteMeta[lastLightingAtmosphereRoute].labelEn)}
                            </span>
                          ) : null}
                        </div>
                      ),
                      undefined,
                      {
                        moduleId: 'lighting_atmosphere',
                        actionExtra: renderLightingAtmosphereRandomControl(),
                        randomizeHandler: () => randomizeLightingAtmosphereModule(),
                        randomizeTitle: t(lang, '随机光影氛围', 'Randomize Lighting Atmosphere'),
                        previewContent: (
                          <div className="space-y-3 p-3">
                            {renderParamSlotGroup('光影预设包', 'Lighting Preset Pack', lightPresetBlocks, true)}
                          </div>
                        ),
                        expandedContent: (
                          <div className="space-y-3 p-3">
                            {renderParamSlotGroup('光影预设包', 'Lighting Preset Pack', lightPresetBlocks, true)}
                            {renderParamSlotGroup('布光细项', 'Lighting Details', lightDetailBlocks)}
                          </div>
                        )
                      }
                    )}

                    {sourceMode !== 'PRESET' && (
                      <div className="grid gap-3 2xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.38fr)]">
                        <section className={`rounded-lg border p-4 ${softPanelClass}`}>
                        {sourceMode === 'IDEA' && (
                          <>
                            <p className={`font-mono text-[9px] font-black uppercase tracking-[0.26em] ${mutedText}`}>Idea Input</p>
                            <textarea
                              value={sourceInputs.ideaText}
                              onChange={(event) => updateSourceInput('ideaText', event.target.value)}
                              placeholder={t(lang, '输入人物/异种灵感、元素、禁忌、材料、情绪或身份悖论。', 'Enter human / creature ideas, elements, constraints, materials, emotions, or identity contradictions.')}
                              className={`mt-3 min-h-[220px] w-full resize-none rounded-md border px-3 py-3 text-xs leading-6 outline-none ${inputClass}`}
                            />
                          </>
                        )}
                        {sourceMode === 'ARTICLE' && (
                          <div className="space-y-3">
                            <p className={`font-mono text-[9px] font-black uppercase tracking-[0.26em] ${mutedText}`}>Article Extraction</p>
                            <input
                              value={sourceInputs.targetCharacter}
                              onChange={(event) => updateSourceInput('targetCharacter', event.target.value)}
                              placeholder={t(lang, '要抽取的角色，例如：女档案员 / 地底神像', 'Target character, e.g. archivist / underground idol')}
                              className={`w-full rounded-md border px-3 py-2 text-xs outline-none ${inputClass}`}
                            />
                            <textarea
                              value={sourceInputs.articleText}
                              onChange={(event) => updateSourceInput('articleText', event.target.value)}
                              placeholder={t(lang, '粘贴文章、故事或设定文本。', 'Paste article, story, or setting text.')}
                              className={`min-h-[220px] w-full resize-none rounded-md border px-3 py-3 text-xs leading-6 outline-none ${inputClass}`}
                            />
                          </div>
                        )}
                        {sourceMode === 'IMAGE' && (
                          <div className="space-y-3">
                            <p className={`font-mono text-[9px] font-black uppercase tracking-[0.26em] ${mutedText}`}>Image Feedback</p>
                            <label className={`flex cursor-pointer items-center justify-between gap-3 rounded-md border px-3 py-3 transition-colors ${isRetro ? 'border-[#85411B]/18 hover:bg-white/42' : 'border-white/[0.1] hover:border-white/[0.18]'}`}>
                              <span className={`flex min-w-0 items-center gap-2 text-xs font-bold ${strongText}`}>
                                <Upload size={14} className={accentText} />
                                <span className="truncate">{sourceInputs.imageName || t(lang, '上传参考图', 'Upload reference image')}</span>
                              </span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(event) => handleReferenceImage(event.target.files?.[0])}
                              />
                            </label>
                            {sourceInputs.imageDataUrl && (
                              <div className={`overflow-hidden rounded-md border ${isRetro ? 'border-[#85411B]/18 bg-white/40' : 'border-white/[0.1] bg-black/30'}`}>
                                <img src={sourceInputs.imageDataUrl} alt={sourceInputs.imageName || 'reference'} className="max-h-56 w-full object-contain" />
                              </div>
                            )}
                            <textarea
                              value={sourceInputs.imageGuidance}
                              onChange={(event) => updateSourceInput('imageGuidance', event.target.value)}
                              placeholder={t(lang, '写下你对参考图的反馈：保留什么、去掉什么、要转成什么身份。', 'Write feedback for the reference: what to keep, remove, and translate into what identity.')}
                              className={`min-h-[180px] w-full resize-none rounded-md border px-3 py-3 text-xs leading-6 outline-none ${inputClass}`}
                            />
                          </div>
                        )}
                        </section>
                        {renderEngineSummaryPanel()}
                      </div>
                    )}
                  </div>
                  <div className={`mist-template-workspace-view mist-template-prompt-view ${activeTemplateWorkspaceView === 'PROMPT' ? 'block' : 'hidden'}`}>
                    {renderModulePromptPreviewPanel()}
                  </div>
                  <div className={`mist-template-workspace-view mist-template-variables-view ${activeTemplateWorkspaceView === 'VARIABLES' ? 'block' : 'hidden'}`}>
                    {renderVideoStoryboardBlueprintPanel()}
                  </div>
                  <div className={`mist-template-workspace-view mist-template-compile-view ${activeTemplateWorkspaceView === 'COMPILE' ? 'block' : 'hidden'}`}>
                    {renderCompileInstructionPreviewPanel()}
                    {renderCinematicStillPromptPanel()}
                  </div>
                </div>
              </main>
            </div>
          </div>
          )}

        </div>
      </div>

      {libraryOpen && activeBlockId && (
        <NarrativeLibraryModal
          isOpen={libraryOpen}
          onClose={() => setLibraryOpen(false)}
          blockId={activeBlockId}
          blockName={blockDef(activeBlockId)?.name || activeBlockId}
          selectedTags={fieldState[activeBlockId] || []}
          onToggleTag={(tag) => toggleTag(activeBlockId, tag)}
          onSetTags={(tags) => setBlockTags(activeBlockId, tags)}
          onClear={() => clearBlock(activeBlockId)}
          lang={lang}
          driverType={DriverType.CONCEPT_DESIGN}
          initialFocusState={focusState}
          onFocusStateChange={onFocusStateChange}
          allSelectedTags={getAllSelectedTags(fieldState)}
          allSelectedFocusUnitMap={getSelectedFocusUnitMap(fieldState)}
          customLibraryData={getUnfilteredLibraryDataForBlock(activeBlockId)}
          isAdmin={isAdmin}
          keywordFilterTags={getLexiconAxisFilterTagsForBlock(activeBlockId)}
          keywordFilterEnabled={blockIsLexiconAxisFilterEnabled(activeBlockId)}
          keywordAxisLevelFilter={lexiconAxisFilterState}
          onAddCustomDef={handleAddConceptCustomItem}
        />
      )}
      {isSpacetimeModalOpen && createPortal(renderSpacetimeModal(), document.body)}
      {isPromptTemplateLibraryOpen && createPortal(renderPromptTemplateLibraryModal(), document.body)}
      {activeThemeAxisPicker && createPortal(renderThemeAxisPickerPanel(), document.body)}
      {isLexiconFilterAuditOpen && createPortal(renderLexiconFilterAuditModal(), document.body)}
      {isContentIntentPanelOpen && createPortal(renderContentIntentRandomPanel(), document.body)}
      {isSpacetimeFieldRandomPanelOpen && createPortal(renderSpacetimeFieldRandomPanel(), document.body)}
      {isLightingAtmosphereRandomPanelOpen && createPortal(renderLightingAtmosphereRandomPanel(), document.body)}
      {isVisualStylePresetPanelOpen && createPortal(renderVisualStylePresetPanel(), document.body)}
      {isFramingPresetPanelOpen && createPortal(renderFramingPresetPanel(), document.body)}
    </div>
  );
};
