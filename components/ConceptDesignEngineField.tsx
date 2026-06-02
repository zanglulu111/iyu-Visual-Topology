import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  Sparkles,
  Clapperboard,
  Trash2,
  Upload,
  Unlock,
  UserRound,
  Wand2,
  X
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ConceptDesignRuntimeState, ConceptDesignWorkspacePage, DriverType, LibraryCategoryDef, LibraryItemDef, NarrativeBlockDef, NarrativeFieldState } from '../types';
import { AESTHETIC_ENGINE_BLOCKS, AESTHETIC_ENGINE_LIBRARY } from '../data/aesthetic/core';
import { CONCEPT_ENGINE_BLOCKS, CONCEPT_ENGINE_LIBRARY } from '../data/concept_design/core';
import { ACTION_MOTIF_PROTOCOL } from '../data/concept_design/human/base/actions';
import { NarrativeEngineFieldProps } from './NarrativeEngineField';
import { ProphecySlot } from './ProphecySlot';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { BLOCK_LIMITS, SUR3_COORDINATE_PRESETS, SUR3_SPACE_ANCHOR_PRESETS, getRandomSur3CoordinatePreset } from '../constants';
import { SUR3_ERAS } from '../data/engine_surface/SUR3';
import { AES_COLOR_PRESETS } from '../data/aesthetic_libraries/color_presets';
import { findItemFull } from '../services/dataRegistry';
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

type SkillLanguage = 'CN' | 'EN';
type SourceMode = 'PRESET' | 'IDEA' | 'ARTICLE' | 'IMAGE';
type PhysicalMediumCategory = 'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'TANGIBLE';
type BodyFormMode = 'HUMANOID_DISGUISE' | 'VISIBLE_HYBRID' | 'BEAST_BODY' | 'XENO_BODY';
type SubjectMode = 'HUMAN' | 'CREATURE';
type BoardFormat = '16:9' | '9:16' | '4:3' | '3:4' | '3:2' | '2:3' | '21:9' | '1:1';
type ObjectRouteId = 'HUMAN' | 'CREATURE';
type HumanRegisterId = 'REALISTIC' | 'HISTORICAL' | 'PROFESSIONAL' | 'FASHION' | 'COMBAT' | 'RITUAL' | 'SOCIAL' | 'SCIFI' | 'FANTASY' | 'WASTELAND';
type RegisterRandomMode = 'LAW_L1' | 'LAW_L2' | 'LAW_L3' | 'LAW_L4' | 'LAW_L5';
type PromptTemplateMode = 'CHARACTER_BOARD' | 'CHARACTER_BOARD_BACKUP' | 'PERFORMANCE_STORYBOARD' | 'THREE_VIEW' | 'CUSTOM';
type TemplateWorkspaceView = 'PARAMS' | 'COMPILE' | 'PROMPT';

type SkillVariables = {
  characterSeed: string;
  ageBodyType: string;
  timeSpaceScene: string;
  actionMoment: string;
  visualMedium: string;
  style: string;
  compositionScene: string;
  lightingAtmosphere: string;
  otherDetails: string;
};

type LocalizedSkillVariables = Record<SkillLanguage, SkillVariables>;

type IdentityBoardOptions = {
  originality: boolean;
  format: BoardFormat;
  mediumCategory: PhysicalMediumCategory;
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
  compositionScene: '',
  lightingAtmosphere: '',
  otherDetails: ''
});

const createEmptyLocalizedVariables = (): LocalizedSkillVariables => ({
  CN: createEmptyVariables(),
  EN: createEmptyVariables()
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
    desc: '把零散元素压缩成九个身份板变量。',
    descEn: 'Compress loose ideas into nine board variables.'
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
    label: '角色身份板',
    labelEn: 'Character Board',
    desc: '多视图、表情格、细节 close-up、色条和身份备注。',
    descEn: 'Multi-view sheet, expression cells, detail close-ups, palette strip, and identity notes.',
    badge: '当前',
    badgeEn: 'Active',
    preview: 'board'
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
    label: '表演分镜板',
    labelEn: 'Performance Storyboard',
    desc: '12 格电影分镜范本：画面规格、角色引用、动作词库、摄影语言、环境限制和导演标注系统。',
    descEn: 'A 12-panel cinematic storyboard template with format, reference character, movement bank, camera language, environment locks, and director annotations.',
    badge: '范本',
    badgeEn: 'Sample',
    preview: 'storyboard'
  },
  {
    id: 'THREE_VIEW',
    icon: Layers3,
    label: '三视图',
    labelEn: 'Three-View',
    desc: '正面、侧面、背面，先作为空位模版等待接入。',
    descEn: 'Front, side, and back views. Placeholder template for later wiring.',
    badge: '空位',
    badgeEn: 'Slot',
    preview: 'threeView'
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
const compileInstructionPalette = [
  '#F97316',
  '#22C55E',
  '#38BDF8',
  '#A78BFA',
  '#F43F5E',
  '#EAB308',
  '#14B8A6',
  '#60A5FA'
];

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

const styleBlocksByMedium: Record<PhysicalMediumCategory, string[]> = {
  PAINTING: ['cd_media_paint_soul', 'cd_media_paint_quality', 'cd_media_paint_eye', 'cd_media_paint_craft', 'cd_media_paint_format'],
  CGI: ['cd_media_cgi_soul', 'cd_media_cgi_quality', 'cd_media_cgi_eye', 'cd_media_cgi_craft', 'cd_media_cgi_format'],
  PHOTOGRAPHY: ['cd_media_photo_soul', 'cd_media_photo_quality', 'cd_media_photo_eye', 'cd_media_photo_craft', 'cd_media_photo_format'],
  TANGIBLE: ['cd_media_tangible_soul', 'cd_media_tangible_quality', 'cd_media_tangible_eye', 'cd_media_tangible_craft', 'cd_media_tangible_format']
};
const allStyleBlocks = Array.from(new Set(Object.values(styleBlocksByMedium).flat()));
const aestheticSoulAuditBlocks = [
  'aes_director_style',
  'aes_photo_style',
  'aes_art_style',
  'aes_anim_director',
  'aes_art_movement'
];
const aestheticQualityAuditBlocks = [
  'aes_camera_system',
  'aes_lens_series',
  'aes_optical_format',
  'aes_texture_render',
  'aes_physical_grain',
  'aes_base_tone',
  'aes_color_science',
  'aes_art_medium',
  'aes_line_quality',
  'aes_canvas_texture'
];
const aestheticEyeAuditBlocks = [
  'aes_image_focus',
  'aes_shot_size',
  'aes_visual_balance',
  'aes_perspective',
  'aes_angle',
  'aes_focal_length',
  'aes_depth',
  'aes_shutter',
  'aes_lens_fx'
];
const mediaSoulBlocksByCategory: Record<PhysicalMediumCategory, string[]> = {
  PHOTOGRAPHY: ['aes_director_style', 'aes_photo_style', 'aes_art_style'],
  PAINTING: ['aes_anim_director', 'aes_art_movement'],
  CGI: ['cd_media_cgi_soul'],
  TANGIBLE: ['cd_media_tangible_soul']
};
const mediaQualityBlocksByCategory: Record<PhysicalMediumCategory, string[]> = {
  PHOTOGRAPHY: ['aes_camera_system', 'aes_lens_series', 'aes_optical_format', 'aes_texture_render', 'aes_physical_grain', 'aes_base_tone', 'aes_color_science'],
  PAINTING: ['aes_art_medium', 'aes_line_quality', 'aes_canvas_texture'],
  CGI: [],
  TANGIBLE: []
};
const mediaEyeBlocks = aestheticEyeAuditBlocks;
const getMediaSoulBlocks = (category: PhysicalMediumCategory) => mediaSoulBlocksByCategory[category];
const getMediaQualityBlocks = (category: PhysicalMediumCategory) => mediaQualityBlocksByCategory[category];
const getMediaEyeBlocks = () => mediaEyeBlocks;
const aestheticStageAuditBlocks = ['aes_scene_real', 'aes_scene_surreal', 'aes_scene_abstract', 'aes_atmosphere', 'aes_particles'];
const aestheticLightAuditBlocks = ['aes_light_mood', 'aes_light_type', 'aes_light_direction', 'aes_light_shape'];
const aestheticRenderAuditBlocks = ['aes_render_real', 'aes_render_art'];
const aestheticAuditBlocks = [
  ...aestheticSoulAuditBlocks,
  ...aestheticQualityAuditBlocks,
  ...aestheticEyeAuditBlocks,
  ...aestheticStageAuditBlocks,
  ...aestheticLightAuditBlocks,
  ...aestheticRenderAuditBlocks
];
const paletteBlocks = ['aes_color_palette'];
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
const governanceBlocks = ['cd_spacetime_coordinate', 'cd_field_preset', 'cd_persona', 'cd_occupation', 'cd_style_protocol_primary', 'cd_style_protocol_secondary'];
const spacetimeStateBlocks = ['cd_spacetime_coordinate', 'cd_space_anchor_exact', 'cd_time_anchor_exact'];
const styleProtocolBlocks = ['cd_style_protocol_primary', 'cd_style_protocol_secondary'];
const semanticFieldAxisBlocks = ['cd_spacetime_coordinate', 'cd_field_preset'];
const semanticSubjectAxisBlocks = ['cd_persona', 'cd_occupation'];
const semanticStyleAxisBlocks = ['cd_style_protocol_primary', 'cd_style_protocol_secondary'];
const fieldRegisterBlock = 'cd_field_register';
const fieldStyleBlocks = ['cd_field_style_primary', 'cd_field_style_secondary'];
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
  ...humanSentenceBlocks
];
const creatureSubjectBlocks = [
  'aes_creature_size',
  'aes_creature_class',
  'aes_creature_element',
  'aes_creature_head',
  'aes_creature_body',
  'aes_creature_mood',
  'aes_creature_action',
  'aes_creature_texture'
];

const allBlocks: NarrativeBlockDef[] = [...AESTHETIC_ENGINE_BLOCKS, ...CONCEPT_ENGINE_BLOCKS];
const allLibraries = [...AESTHETIC_ENGINE_LIBRARY, ...CONCEPT_ENGINE_LIBRARY];
const CONCEPT_COMPILE_EVENT = 'mist-concept-design-compile';

const CONCEPT_GENERATION_INSTRUCTION_EVENT = 'mist-concept-design-generation-instruction';
const TIMELINE_YEAR_MIN = -2000;
const TIMELINE_YEAR_MAX = 2300;
const TIMELINE_YEAR_NOW = 2026;

const colorCompileInstructionSections = (
  sections: Array<Omit<CharacterIdentityBoardPromptSection, 'color'>>
): CharacterIdentityBoardPromptSection[] => sections.map((section, index) => ({
  ...section,
  color: compileInstructionPalette[index % compileInstructionPalette.length]
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
4. 不要混合互相冲突的媒介。除非用户明确要求 mixed media，否则 visualMedium 只落在一个清楚的物理媒介系统内。`
    : `Text-input priority:
1. Explicit art-direction requirements in the user's text must be satisfied, especially physical-medium requests such as live-action photography, Unreal / 3D, painting, sculpture, clay, or stop-motion.
2. If the user's text explicitly names a concrete physical medium, treat that text as the absolute standard; do not rewrite it because of a default selector.
3. If the user's text does not clearly specify a physical medium, use the Medium Lock component as the minimum floor and anti-drift lock for visualMedium.
4. Do not blend conflicting media. Unless the user explicitly asks for mixed media, visualMedium must land in one clear physical-medium system.`;
};

const getWorldLawCompileRule = (mode: RegisterRandomMode, lang: SkillLanguage) => {
  const meta = registerRandomModes.find(item => item.id === mode) || registerRandomModes[1];
  const cnRules: Record<RegisterRandomMode, string> = {
    LAW_L1: '只允许写实和现实可解释内容字面成立。超出现实的词条必须降级为妆容、服装结构、道具、材料暗示、光影、姿态或制度标记。',
    LAW_L2: '允许非现实词条通过同构折译成立。超出现实时，把它转成同功能的时代材料、工艺、服装结构、工具、纹样、职业证据或场域制度。',
    LAW_L3: '允许一个主异常作为局部缝合证据。其余高风险或超现实词条必须吸收到服装、道具、材料、符号或姿态中，避免全身平均异化。',
    LAW_L4: '允许非现实材料、身体结构或技术/神秘事实字面成立，但必须有清楚接口、功能、材料来源和身份逻辑；不得平均堆叠多个本体通道。',
    LAW_L5: '允许狂想化显性拼贴，但仍必须保留第一识别身份、主体轴线、脸部可读性和身份板清晰分区。'
  };
  const enRules: Record<RegisterRandomMode, string> = {
    LAW_L1: 'Only realistic and materially explainable content may remain literal. Beyond-realist terms must be downgraded into makeup, costume structure, props, material hints, lighting, pose, or institutional marks.',
    LAW_L2: 'Non-realist terms may survive through equivalent translation. When beyond realism, convert them into same-function period material, craft, clothing structure, tool, pattern, occupational evidence, or field institution.',
    LAW_L3: 'Allow one primary anomaly as local seam evidence. Other high-risk or surreal terms must be absorbed into costume, prop, material, symbol, or pose to avoid evenly mutating the whole body.',
    LAW_L4: 'Non-realist material, body structure, technology, or mystic fact may remain literal, but it needs clear interface, function, material source, and identity logic; do not stack multiple ontology channels evenly.',
    LAW_L5: 'Explicit rhapsodic collage is allowed, while preserving primary identity, body axis, readable face, and clear identity-board sectioning.'
  };

  return lang === 'CN'
    ? `当前世界法则：${meta.label} / ${meta.labelEn}
作用：世界法则只负责决定词条的现实成立程度和冲突降级方式，不负责替代输入来源、视觉媒介或九变量职责。
执行规则：${cnRules[mode]}`
    : `Current world law: ${meta.labelEn} / ${meta.label}
Role: world law only decides literalness, realism level, and downgrade behavior. It must not replace source input, visual medium, or nine-variable responsibilities.
Execution rule: ${enRules[mode]}`;
};

const getBodyFormCompileRule = (mode: BodyFormMode, lang: SkillLanguage) => {
  const meta = bodyFormModeOptions.find(item => item.id === mode) || bodyFormModeOptions[0];
  const cnRules: Record<BodyFormMode, string> = {
    HUMANOID_DISGUISE: '硬锁第一识别为人形。妖怪、狼人、美杜莎、神怪或异种标签只能通过耳影、尾影、牙齿、瞳孔、发冠、妆容、服装结构、道具、姿态或局部材料暗示；不得生成完整兽体或怪物身体。',
    VISIBLE_HYBRID: '硬锁为人形与非人之间的混合身体。必须保留人形站立结构、脸部可读性和身份板清晰度，同时必须出现明确耳、角、尾、爪、鳞片、蛇发局部、兽化手脚、异色皮肤或局部非人器官作为本体证据。',
    BEAST_BODY: '硬锁为兽化 / 妖怪本体。狼人、狐妖、美杜莎、兽化人设等必须按字面身体成立；必须把“耳影、尾影、藏匿、暗示、民俗异征”等保守写法升级为可见兽耳、兽尾、毛发、爪、兽面、蛇发、鳞片或非人下身。仍需保持单一主体、身份可读和角色身份板结构清楚。',
    XENO_BODY: '硬锁为非人本体。第一识别不必保持人类比例；必须以非人 anatomy、异种、机械生命、神性实体、寄生结构或超现实身体成立，并给出清楚轮廓、功能逻辑、材料证据和人格线索。'
  };
  const enRules: Record<BodyFormMode, string> = {
    HUMANOID_DISGUISE: 'Hard-lock the primary read as humanoid. Mythic, beast, Medusa, or alien labels may appear only through local hints such as ears, tail, teeth, pupils, costume structure, props, pose, or material evidence; do not generate a full beast or monster body.',
    VISIBLE_HYBRID: 'Hard-lock a hybrid body between humanoid and non-human. Keep humanoid standing structure, readable face, and clear board readability, while requiring explicit local non-human evidence such as ears, horns, tail, claws, scales, partial snake hair, beast hands/feet, unusual skin, or local non-human organs.',
    BEAST_BODY: 'Hard-lock a beast / mythic body. Werewolf, fox spirit, Medusa, beast-human, and similar identities must become literal body forms; conservative language such as hints, ear shadows, tail shadows, hidden traits, or folklore traces must be upgraded into visible ears, tail, fur, claws, beast face, snake hair, scales, or non-human lower body. Preserve one subject, readable identity, and clear character-board structure.',
    XENO_BODY: 'Hard-lock a non-human body. The primary read does not need human proportions; non-human anatomy, alien, mechanical life, divine entity, parasitic structure, or surreal body must exist literally with clear silhouette, function logic, material evidence, and personality cues.'
  };
  return lang === 'CN'
    ? `当前本体形态：${meta.label} / ${meta.labelEn}
作用：人设标签负责身份、气质、社会图像和造型方向；本体形态只负责身体显性到什么程度。
硬控制：本体形态是用户当前选择的身体显性等级，必须覆盖人设词条 def 中关于“隐藏、暗示、耳影、尾影、局部异征”的保守写法。
执行规则：${cnRules[mode]}
与对象路由关系：对象路由“人形”只表示主体入口和身份板语法仍以单一角色为中心，不等于必须保持普通人类身体。
世界法则关系：L1/L2 时才降级为暗示或局部证据；当前若为 L4/L5，必须让本体形态按字面成立。`
    : `Current body form: ${meta.labelEn} / ${meta.label}
Role: persona tags control identity, mood, social image, and styling direction; body form only controls how literally the body manifests.
Hard control: body form is the user's selected embodiment level and must override conservative wording in persona definitions such as hidden traits, hints, ear shadows, tail shadows, or local folklore traces.
Execution rule: ${enRules[mode]}
Relation to subject route: the humanoid route only means the board still centers on one readable character; it does not force an ordinary human body.
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
      ? `你是角色资产提示词编辑。请从文章/故事中只提取用户指定的人物或异种，并编译成 Character Identity Board 的九个变量槽。

目标：把文本原料整理成清楚、可执行、版权安全的角色资产方向。`
      : `You are a character asset prompt editor. Extract only the user-specified character or creature from the article/story and compile it into nine Character Identity Board variable slots.

Goal: turn the text material into a clear, executable, copyright-safe character asset direction.`;
  }
  if (mode === 'IMAGE') {
    return lang === 'CN'
      ? `你是角色资产反推编辑。请根据上传参考图和人工纠偏，反推出 Character Identity Board 的九个变量槽。

目标：保留参考图中真实可见的主体、媒介、风格和细节，不擅自增加图中没有的武器、配饰、logo 或道具。`
      : `You are a character asset reverse-analysis editor. Infer nine Character Identity Board variable slots from the uploaded reference image and manual correction.

Goal: preserve the visible subject, medium, style, and details from the reference image without inventing weapons, accessories, logos, or props not shown.`;
  }
  return lang === 'CN'
    ? `你是角色资产提示词编辑。请根据用户输入或词库原料，生成 Character Identity Board 的九个变量槽。

目标：把松散灵感、词条和定义整理成一个新的角色设计方向，而不是把词条列表直接拼接成提示词。`
    : `You are a character asset prompt editor. Generate nine Character Identity Board variable slots from the user's input or selected lexicon material.

Goal: turn loose ideas, terms, and definitions into a new character design direction, not a direct concatenation of term lists.`;
};

const getFiveVariableDefinitionContract = (lang: SkillLanguage) => lang === 'CN'
  ? `Character Identity Board 的九个变量槽：

1. characterSeed / 角色种子
目标：确定这个角色是谁。
写角色核心身份、社会位置、文化场域、第一识别矛盾和一句设计抓手；不要写长故事，不要列词条。

2. ageBodyType / 年龄与身体类型
目标：确定身体如何承载身份。
写年龄感、身体类型、比例、姿态、身体存在感；非人主体可写 anatomy。

3. timeSpaceScene / 时空场域
目标：确定角色存在于什么世界。
写时代、地理、空间类型、社会制度、技术边界、文化接口和场域压力；不要替代角色身份。

4. actionMoment / 画面事件
目标：确定这张图正在发生什么。
写角色正在做什么、冲突瞬间、情绪动作、人物/环境关系和画面值得被观看的原因；身份板可写展示动作或第二姿态逻辑。

5. visualMedium / 视觉媒介
目标：确定图像由什么物理媒介、成像系统或制作方式生成。
优先写“质”：摄影系统、胶片/数码、绘画媒介、CGI 管线、实体手作材料；可以带少量成像语法，但不能用导演风格替代媒介底座。

6. style / 审美方向
目标：确定画面的审美气质。
写魂、风格参考、色彩气质、观看关系和整体情绪；不要把具体服装、道具、器官、发型、构图或光影都塞进这里。

7. compositionScene / 构图场景
目标：确定这张图如何观看主体。
写景别、角度、镜头距离、取景、主体位置、背景占比、空间层次和画面组织；不要替代视觉媒介。

8. lightingAtmosphere / 光影氛围
目标：确定光如何塑造画面。
写光源、明暗关系、空气感、天气、时间感和情绪压强；如果当前模板不需要强光影，可保持克制。

9. otherDetails / 补充细节
目标：收纳所有具体设计证据。
写服装、道具、妆发、材料、色彩、面部特征、身体标记、限制和版式偏好。`
  : `The nine Character Identity Board variable slots:

1. characterSeed
Goal: define who this character is.
Write core identity, social position, cultural field, primary recognizable contradiction, and one design hook; do not write a long story or list terms.

2. ageBodyType
Goal: define how the body carries the identity.
Write age impression, body type, proportions, posture, and physical presence; for non-human subjects, write anatomy.

3. timeSpaceScene
Goal: define what world the character exists in.
Write era, geography, spatial type, social system, technology boundary, cultural interface, and field pressure; do not replace character identity.

4. actionMoment
Goal: define what is happening in the image.
Write what the character is doing, conflict beat, emotional action, character/environment relation, and why the image is worth viewing; for identity boards, write display action or secondary-pose logic.

5. visualMedium
Goal: define the physical medium, imaging system, or production method.
Prioritize material/quality: camera system, film/digital capture, painting medium, CGI pipeline, tangible craft material; a little imaging grammar is allowed, but auteur/director style must not replace the medium base.

6. style
Goal: define the image's aesthetic mood.
Write soul, style reference, color mood, viewing relation, and overall emotion; do not stuff concrete clothing, props, organs, hair, composition, or lighting into this slot.

7. compositionScene
Goal: define how the image views the subject.
Write shot size, angle, lens distance, framing, subject placement, background ratio, spatial depth, and image organization; do not replace visual medium.

8. lightingAtmosphere
Goal: define how light shapes the image.
Write light source, contrast, air quality, weather, time feeling, and emotional pressure; keep it restrained if the current template does not need strong lighting.

9. otherDetails
Goal: hold all concrete design evidence.
Write outfit, props, makeup/hair, materials, colors, facial features, body marks, constraints, and layout preference.`;

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

const getVariableOutputSchema = (promptLang: SkillLanguage) => promptLang === 'CN'
  ? `必须只输出 JSON，不要 markdown，不要解释。每一次都同时填写中文 CN 和英文 EN 两套变量：
{
  "CN": {
    "characterSeed": "中文，角色核心概念",
    "ageBodyType": "中文，年龄感、身体类型、姿态、身体存在感",
    "timeSpaceScene": "中文，时代、地理、空间类型、制度、技术边界和场域压力",
    "actionMoment": "中文，角色正在做什么、冲突瞬间、情绪动作和关系",
    "visualMedium": "中文为主，可保留 English 专业词；具体视觉媒介，不要只写大类",
    "style": "中文为主，可保留 English 专业词；审美方向，只写风格参考、色彩气质、观看关系和整体情绪",
    "compositionScene": "中文，景别、角度、取景、主体位置、背景占比和画面组织",
    "lightingAtmosphere": "中文，光源、明暗关系、空气感、天气、时间感和情绪压强",
    "otherDetails": "中文，关键道具、服装、妆发、材料、色彩、限制、身份备注"
  },
  "EN": {
    "characterSeed": "English, core character idea",
    "ageBodyType": "English, age impression, body type, posture, physical presence",
    "timeSpaceScene": "English, era, geography, spatial type, institution, technology boundary, field pressure",
    "actionMoment": "English, what the character is doing, conflict beat, emotional action, relation",
    "visualMedium": "English, specific rendering medium, not just a broad category",
    "style": "English, aesthetic direction: style reference, color mood, viewing relation, overall emotion",
    "compositionScene": "English, shot size, angle, framing, subject placement, background ratio, image organization",
    "lightingAtmosphere": "English, light source, contrast, air quality, weather, time feeling, mood pressure",
    "otherDetails": "English, key props, outfit, makeup/hair, materials, colors, constraints, identity notes"
  }
}`
  : `Output JSON only. No markdown, no explanation. Always fill both CN and EN variable sets:
{
  "CN": {
    "characterSeed": "Chinese, core character idea",
    "ageBodyType": "Chinese, age impression, body type, posture, physical presence",
    "timeSpaceScene": "Chinese, era, geography, spatial type, institution, technology boundary, field pressure",
    "actionMoment": "Chinese, what the character is doing, conflict beat, emotional action, relation",
    "visualMedium": "Chinese, English professional terms allowed; specific rendering medium, not just a broad category",
    "style": "Chinese, English professional terms allowed; aesthetic direction only: style reference, color mood, viewing relation, overall emotion",
    "compositionScene": "Chinese, shot size, angle, framing, subject placement, background ratio, image organization",
    "lightingAtmosphere": "Chinese, light source, contrast, air quality, weather, time feeling, mood pressure",
    "otherDetails": "Chinese, key props, outfit, makeup/hair, materials, colors, constraints, identity notes"
  },
  "EN": {
    "characterSeed": "English, core character idea",
    "ageBodyType": "English, age impression, body type, posture, physical presence",
    "timeSpaceScene": "English, era, geography, spatial type, institution, technology boundary, field pressure",
    "actionMoment": "English, what the character is doing, conflict beat, emotional action, relation",
    "visualMedium": "English, specific rendering medium, not just a broad category",
    "style": "English, aesthetic direction: style reference, color mood, viewing relation, overall emotion",
    "compositionScene": "English, shot size, angle, framing, subject placement, background ratio, image organization",
    "lightingAtmosphere": "English, light source, contrast, air quality, weather, time feeling, mood pressure",
    "otherDetails": "English, key props, outfit, makeup/hair, materials, colors, constraints, identity notes"
  }
}`;

const getMediumFallbackVisual = (
  category: PhysicalMediumCategory,
  subjectMode: SubjectMode,
  promptLang: SkillLanguage,
  bodyFormMode: BodyFormMode = 'HUMANOID_DISGUISE'
) => {
  const creature = subjectMode === 'CREATURE';
  const photoFallback: Record<BodyFormMode, Record<SkillLanguage, string>> = {
    HUMANOID_DISGUISE: {
      CN: creature ? '真实相机拍摄的异种特效定妆参考 / live-action creature costume-test photography，干净身份板展示。' : '真人摄影角色定妆照 / live-action studio character photography，干净身份板展示。',
      EN: creature ? 'Live-action creature costume-test photography / real-camera creature identity board, clean presentation.' : 'Live-action studio character photography / actor costume-test portrait, clean identity-board presentation.'
    },
    VISIBLE_HYBRID: {
      CN: '真实相机拍摄的显性半兽特效定妆照 / live-action hybrid creature costume-test photography，包含真实化妆、局部 prosthetics、毛发/鳞片/尾巴/爪等道具，干净身份板展示。',
      EN: 'Live-action visible-hybrid creature costume-test photography with real makeup, local prosthetics, fur / scales / tail / claw props, clean identity-board presentation.'
    },
    BEAST_BODY: {
      CN: '真实相机拍摄的兽化本体特效定妆照 / live-action beast-body creature suit photography，包含完整 prosthetic creature suit、真实毛发/尾巴/爪/兽面或蛇发道具，干净身份板展示。',
      EN: 'Live-action beast-body creature-suit photography with full prosthetic creature suit, real fur / tail / claws / beast face or snake-hair props, clean identity-board presentation.'
    },
    XENO_BODY: {
      CN: '真实相机拍摄的异种本体特效定妆照 / live-action xeno creature practical-effects photography，包含非人 anatomy 道具、真实表皮/触肢/外骨骼/机械生命结构，干净身份板展示。',
      EN: 'Live-action xeno creature practical-effects photography with non-human anatomy props, real skin / tendrils / exoskeleton / mechanical-life structures, clean identity-board presentation.'
    }
  };
  const fallback: Record<PhysicalMediumCategory, Record<SkillLanguage, string>> = {
    PAINTING: {
      CN: creature ? '异种概念设定图 / digital painting creature concept art，清晰二维绘画媒介，干净身份板展示。' : '人物概念设定图 / digital painting character concept art，清晰二维绘画媒介，干净身份板展示。',
      EN: creature ? 'Creature concept sheet / digital painting creature concept art, clear 2D painting medium, clean identity-board presentation.' : 'Character concept sheet / digital painting character concept art, clear 2D painting medium, clean identity-board presentation.'
    },
    CGI: {
      CN: creature ? 'PBR 3D 异种角色模型渲染 / CGI creature character asset render，干净身份板展示。' : 'PBR 3D 人物角色模型渲染 / CGI character asset render，干净身份板展示。',
      EN: creature ? 'PBR 3D creature character model render / CGI creature asset render, clean identity-board presentation.' : 'PBR 3D human character model render / CGI character asset render, clean identity-board presentation.'
    },
    PHOTOGRAPHY: {
      CN: photoFallback[bodyFormMode].CN,
      EN: photoFallback[bodyFormMode].EN
    },
    TANGIBLE: {
      CN: creature ? '实体手作异种模型摄影 / clay stop-motion creature puppet photography，干净身份板展示。' : '实体手作角色模型摄影 / clay stop-motion puppet photography，干净身份板展示。',
      EN: creature ? 'Clay stop-motion creature puppet photography / tangible creature maquette, clean identity-board presentation.' : 'Clay stop-motion puppet photography / tangible character maquette, clean identity-board presentation.'
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
    label: '角色种子',
    labelEn: 'Character Seed',
    hint: '核心概念、身份功能、人物/异种悖论。',
    hintEn: 'Core concept, identity function, human or creature contradiction.'
  },
  {
    key: 'ageBodyType',
    label: '年龄 / 身体类型',
    labelEn: 'Age / Body Type',
    hint: '年龄感、体态、姿态；异种可写 anatomy。',
    hintEn: 'Age impression, body type, posture, or creature anatomy.'
  },
  {
    key: 'timeSpaceScene',
    label: '时空场域',
    labelEn: 'Time-Space Field',
    hint: '时代、地理、空间、制度、技术边界和场域压力。',
    hintEn: 'Era, geography, space, institution, technology boundary, and field pressure.'
  },
  {
    key: 'actionMoment',
    label: '画面事件',
    labelEn: 'Action Moment',
    hint: '角色正在做什么，冲突瞬间、情绪动作和关系。',
    hintEn: 'What is happening: action, conflict beat, emotion, and relation.'
  },
  {
    key: 'visualMedium',
    label: '视觉媒介',
    labelEn: 'Visual Medium',
    hint: '具体媒介与渲染语言，不写摄影和光影。',
    hintEn: 'Concrete medium and rendering language, without camera or lighting.'
  },
  {
    key: 'style',
    label: '审美方向',
    labelEn: 'Style',
    hint: '风格、配色、材料气质和设计味道。',
    hintEn: 'Style, palette, material mood, and design flavor.'
  },
  {
    key: 'compositionScene',
    label: '构图场景',
    labelEn: 'Composition Scene',
    hint: '景别、角度、取景、主体位置和画面组织。',
    hintEn: 'Shot size, angle, framing, subject placement, and image organization.'
  },
  {
    key: 'lightingAtmosphere',
    label: '光影氛围',
    labelEn: 'Lighting Atmosphere',
    hint: '光源、明暗、空气感、天气、时间感和情绪压强。',
    hintEn: 'Light source, contrast, air, weather, time feeling, and mood pressure.'
  },
  {
    key: 'otherDetails',
    label: '补充细节',
    labelEn: 'Other Details',
    hint: '面部、服装、器官、道具、禁忌和版式偏好。',
    hintEn: 'Face, outfit, organs, props, constraints, and layout preference.'
  }
];

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

const buildPerformanceStoryboardCompileSections = (promptLang: SkillLanguage): CharacterIdentityBoardPromptSection[] => colorCompileInstructionSections([
  {
    id: 'compile_storyboard_role',
    title: '编译身份',
    titleEn: 'Compiler Role',
    text: promptLang === 'CN'
      ? '你是表演分镜提示词架构师。任务是把一个表演/舞蹈/动作分镜范本拆成九个变量槽，并保持“模块层 -> 变量层 -> 终稿律令”的映射关系。'
      : 'You are a performance-storyboard prompt architect. Turn a performance / dance / action storyboard sample into nine variable slots while preserving the mapping: module layer -> variable layer -> final edict.'
  },
  {
    id: 'compile_storyboard_variables',
    title: '九变量映射',
    titleEn: 'Nine-Slot Mapping',
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

const buildConceptGenerationInstruction = (
  mode: SourceMode,
  sourceInputs: SourceInputs,
  promptLang: SkillLanguage,
  options: IdentityBoardOptions,
  _sourceLabel: string,
  _sourceLabelEn: string,
  includeActionMotif = false
) => {
  const emptyIdea = promptLang === 'CN' ? '等待输入灵感元素。' : 'Waiting for idea elements.';
  const emptyArticle = promptLang === 'CN' ? '等待粘贴文章、故事或设定文本。' : 'Waiting for article, story, or setting text.';
  const emptyImage = promptLang === 'CN' ? '等待上传参考图或填写图片反馈。' : 'Waiting for a reference image or image feedback.';
  const textInputContract = getTextInputPriorityContract(promptLang);
  const outputSchema = getVariableOutputSchema(promptLang);
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
      ? `你是角色资产提示词编辑。请根据用户的灵感、元素和需求，生成 Character Identity Board 的九个变量槽。
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

用户需求：
（等待从左侧词库选择中汇总灵感）

规则：
- 读取“视觉风格 / 配色方案 / 统摄模块 / 本体论细节”的词库选择，把它们压缩成清楚、可执行的角色资产方向。
- characterSeed 写角色核心概念，不要写长故事。
- ageBodyType 写年龄感、体型、姿态和身体存在感。
- timeSpaceScene 写时代、地理、空间类型、社会制度、技术边界、文化接口和场域压力。
- actionMoment 写角色正在做什么、冲突瞬间、情绪动作、人物/环境关系；身份板可写展示动作或第二姿态逻辑。
- visualMedium 写具体物理媒介与成像方式；必须锁定摄影 / 绘画 / CGI / 实体之一。
- style 只写审美方向：风格参考、色彩气质、观看关系和整体情绪；不要塞入构图和光影。
- compositionScene 写景别、角度、镜头距离、取景、主体位置、背景占比、空间层次和画面组织。
- lightingAtmosphere 写光源、明暗关系、空气感、天气、时间感和情绪压强；身份板可保持克制。
- otherDetails 写服装、道具、妆发、材料、色彩、身份备注、限制和版式偏好。
- 不要复制任何现有 IP、名人或品牌角色。

${outputSchema}`
      : `You are a character asset prompt editor. Based on the user's idea, elements, and needs, generate the nine Character Identity Board variable slots.
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

User request:
(waiting for selected lexicon terms from the left panel)

Rules:
- Read the selected terms from Visual Style / Palette / Governance and Ontology Detail, then compress them into a clear, executable character asset direction.
- characterSeed is the core concept, not a long story.
- ageBodyType covers age impression, body type, posture, and physical presence.
- timeSpaceScene covers era, geography, spatial type, social system, technology boundary, cultural interface, and field pressure.
- actionMoment covers what the character is doing, conflict beat, emotional action, and character/environment relation; for identity boards, it may describe display action or secondary-pose logic.
- visualMedium names the concrete physical medium and image-making method; it must lock to photography / painting / CGI / tangible craft.
- style is only aesthetic direction: style reference, color mood, viewing relation, and overall emotion; do not put composition or lighting here.
- compositionScene covers shot size, angle, lens distance, framing, subject placement, background ratio, spatial depth, and image organization.
- lightingAtmosphere covers light source, contrast, air quality, weather, time feeling, and emotional pressure; keep it restrained for identity boards when needed.
- otherDetails covers outfit, props, makeup/hair, materials, colors, identity notes, constraints, and layout preferences.
- Do not copy any existing IP, celebrity, or brand character.

${outputSchema}`;
  }

  if (mode === 'ARTICLE') {
    const target = sourceInputs.targetCharacter.trim() || (promptLang === 'CN' ? '文本中的核心角色 / 异种' : 'the core character / creature in the text');
    const article = sourceInputs.articleText.trim() || emptyArticle;
    return promptLang === 'CN'
      ? `你是角色资产设计提示词编辑。请从下面文章/故事中，只提取用户指定的人物或异种，并生成 Character Identity Board 的九个变量槽。
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
- style 只写审美方向，不写构图和光影。
- compositionScene 写画面如何观看主体。
- lightingAtmosphere 写光影氛围；文章未提供时保持克制推断。
- otherDetails 写文章中可见或可推断的服装、道具、妆发、材料、色彩、身份备注和限制。
- 不要复制任何现有 IP、名人或品牌角色。

${manualGuidanceBlock}

文章/故事：
${article}

${outputSchema}`
      : `You are a character asset prompt editor. From the article/story below, extract only the user-specified character or creature and generate the nine Character Identity Board variable slots.
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
- style is only aesthetic direction, not composition or lighting.
- compositionScene defines how the image views the subject.
- lightingAtmosphere defines light and atmosphere; infer conservatively when the article does not specify it.
- otherDetails captures visible or reasonably inferred outfit, props, makeup/hair, materials, colors, identity notes, and constraints.
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
      ? `你是资深角色资产反推编辑。请根据上传的参考图片，反推出 Character Identity Board 的九个变量槽。
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
- actionMoment 写主图正在发生的动作或展示状态。
- visualMedium 必须根据主图可见证据写成具体媒介，不要只写“写实”“高级”“电影感”。
- style 只写参考图可见的审美方向；人工引导只用于补充或纠偏。
- compositionScene 写主图的景别、角度、取景和主体位置。
- lightingAtmosphere 写主图的光源、明暗、空气感和情绪压力。
- 如果图片是半身照，可合理推断全身，但必须保持同一风格与身体逻辑。
- otherDetails 要写清可见服装、道具、材质、色彩和不可擅自添加的限制。

${outputSchema}`
      : `You are a senior character asset reverse-analysis editor. Use the uploaded reference image to infer the nine Character Identity Board variable slots.
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
- actionMoment captures the visible action or display state in the main image.
- visualMedium must be a concrete medium inferred from visible evidence in the main image; do not write only "realistic", "premium", or "cinematic".
- style only summarizes the visible aesthetic direction; manual guidance only supplements or corrects it.
- compositionScene captures shot size, angle, framing, and subject placement.
- lightingAtmosphere captures light source, contrast, air quality, and mood pressure.
- If the reference is half-body, infer full-body cautiously while preserving style and body logic.
- otherDetails must capture visible outfit, props, materials, colors, and constraints against invented additions.

${outputSchema}`;
  }

  const idea = sourceInputs.ideaText.trim() || emptyIdea;
  return promptLang === 'CN'
    ? `你是资深角色概念设计师兼资产提示词编辑。请根据用户的灵感、元素和需求，先完成一次真正的角色设计综合，再生成 Character Identity Board 的九个变量槽。
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

用户需求：
${idea}

规则：
- 把松散灵感整理成清楚、可执行的角色资产方向；如果输入来自词库，词条标题只是索引，必须优先吸收词条定义里的设计含义。
- 禁止把词条标题原样串成 characterSeed、ageBodyType、style 或 otherDetails。
- 必须发明一个新的角色身份、社会功能、造型逻辑、材料组合、面部记忆点和可识别剪影；输出应该像“已经设计过的角色 brief”，不是“所选词条列表”。
- 可以保留少量必要专业词，但不要大面积复述括号里的英文标题。
- 如果词条之间冲突，选择一条主轴，把其他词条转译成细节、反差或损耗痕迹，不要平均罗列。
- 先判断这些元素更适合“人形主体”还是“异种主体”，但不要在输出中写分析过程。
- characterSeed 写一个新的角色核心概念：包含身份、职责/处境、主要视觉矛盾和一句设计抓手；不要写长故事。
- ageBodyType 写年龄感、体型、姿态和身体存在感；要把姿态和身体如何服务身份说清楚，而不是列词。
- timeSpaceScene 写时代、地点、空间、制度、技术边界和场域压力。
- actionMoment 写角色正在做什么、冲突瞬间、情绪动作和人物/环境关系。
- visualMedium 写具体物理媒介与渲染语言，例如“live-action studio portrait photography”“Unreal Engine 5 cinematic character render”“digital oil painting”“clay stop-motion puppet photography”；不要只写“写实”“好看”“电影感”。
- style 只写审美方向：风格参考、色彩气质、观看关系和整体情绪；不要把服装、道具、妆发、构图和光影塞进 style。
- compositionScene 写景别、角度、取景、主体位置、背景占比、空间层次和画面组织。
- lightingAtmosphere 写光源、明暗关系、空气感、天气、时间感和情绪压强。
- otherDetails 写具体服装、道具、妆发、材料、色彩、限制、身份备注、面部细节、服装结构、磨损痕迹和版式偏好；如有人工引导，必须吸收其中的具体要求。
- 不要复制任何现有 IP、名人或品牌角色。

${manualGuidanceBlock}

${outputSchema}`
    : `You are a senior character concept designer and asset prompt editor. Based on the user's idea, elements, and needs, first synthesize a real character design direction, then generate the nine Character Identity Board variable slots.
${mediumInstruction}

${bodyFormInstruction}

${textInputContract}

${styleCostumeConflictProtocol}

${imageReferenceNote}
${actionMotifProtocol ? `\n${actionMotifProtocol}\n` : ''}

User request:
${idea}

Rules:
- Turn loose inspiration into a clear, executable character asset direction. If the input comes from lexicon terms, term titles are only indexes; prioritize the design meaning in their definitions.
- Do not concatenate term titles into characterSeed, ageBodyType, style, or otherDetails.
- Invent a new character identity, social function, styling logic, material combination, facial memory point, and recognizable silhouette. The output should read like a designed character brief, not a selected-term list.
- You may keep a few necessary professional terms, but do not broadly repeat the English titles inside parentheses.
- If terms conflict, choose one main axis and translate the others into details, contrast, or wear traces rather than listing everything evenly.
- First decide whether the elements fit a human / humanoid character or a creature / biological subject better, but do not show the analysis.
- characterSeed is a new core character concept: include identity, role/situation, main visual contradiction, and one design hook; not a long story.
- ageBodyType covers age impression, body type, posture, and physical presence; explain how the body and pose serve identity rather than listing terms.
- timeSpaceScene covers era, location, space, institution, technology boundary, and field pressure.
- actionMoment covers what the character is doing, conflict beat, emotional action, and character/environment relation.
- visualMedium must name a concrete physical medium and rendering language, such as live-action studio portrait photography, Unreal Engine 5 cinematic character render, digital oil painting, or clay stop-motion puppet photography; do not write only "realistic", "beautiful", or "cinematic".
- style is only aesthetic direction: style reference, color mood, viewing relation, and overall emotion. Do not put outfit, props, makeup/hair, composition, or lighting into style.
- compositionScene covers shot size, angle, framing, subject placement, background ratio, spatial depth, and image organization.
- lightingAtmosphere covers light source, contrast, air quality, weather, time feeling, and emotional pressure.
- otherDetails covers specific outfit, props, makeup/hair, materials, colors, constraints, identity notes, facial details, garment construction, wear traces, and layout preferences. If manual guidance is provided, absorb its concrete requirements.
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
  worldLawMode: RegisterRandomMode = 'LAW_L2'
): CharacterIdentityBoardPromptSection[] => {
  const emptyIdea = promptLang === 'CN' ? '等待输入灵感元素。' : 'Waiting for idea elements.';
  const emptyArticle = promptLang === 'CN' ? '等待粘贴文章、故事或设定文本。' : 'Waiting for article, story, or setting text.';
  const emptyImage = promptLang === 'CN' ? '等待上传参考图或填写图片反馈。' : 'Waiting for a reference image or image feedback.';
  const textInputContract = getTextInputPriorityContract(promptLang);
  const outputSchema = getVariableOutputSchema(promptLang);
  const mediumInstruction = getMediumComponentContract(options.mediumCategory, promptLang, options.bodyFormMode);
  const taskContract = getCompileTaskContract(mode, promptLang);
  const variableDefinitionContract = getFiveVariableDefinitionContract(promptLang);
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
  const sourceSections: Array<Omit<CharacterIdentityBoardPromptSection, 'color'>> = [];
  if (mode === 'ARTICLE') {
    const target = sourceInputs.targetCharacter.trim() || (promptLang === 'CN' ? '文本中的核心角色 / 异种' : 'the core character / creature in the text');
    const article = sourceInputs.articleText.trim() || emptyArticle;
    sourceSections.push({
      id: 'compile_source',
      title: '输入来源',
      titleEn: 'Source Input',
      text: [
        promptLang === 'CN' ? `目标人物 / 异种：\n${target}` : `Target character / creature:\n${target}`,
        hasManualGuidance ? (promptLang === 'CN' ? `用户人工引导与纠偏：\n${sourceInputs.imageGuidance}` : `User manual guidance:\n${sourceInputs.imageGuidance}`) : '',
        promptLang === 'CN' ? `文章/故事：\n${article}` : `Article / story:\n${article}`
      ].filter(Boolean).join('\n\n')
    });
  } else if (mode === 'IMAGE') {
    const imageName = sourceInputs.imageName || (promptLang === 'CN' ? '未命名参考图' : 'untitled reference image');
    const guidance = sourceInputs.imageGuidance.trim() || emptyImage;
    sourceSections.push({
      id: 'compile_source',
      title: '输入来源',
      titleEn: 'Source Input',
      text: promptLang === 'CN'
        ? `参考图：
${imageName}

人工引导与纠偏：
${guidance}`
        : `Reference image:
${imageName}

Manual guidance:
${guidance}`
    });
  } else {
    const idea = mode === 'PRESET'
      ? (sourceIdeaOverride || (promptLang === 'CN' ? '（等待从左侧词库选择中汇总灵感）' : '(waiting for selected lexicon terms from the left panel)'))
      : (sourceInputs.ideaText.trim() || emptyIdea);
    sourceSections.push({
      id: 'compile_source',
      title: '输入来源',
      titleEn: 'Source Input',
      text: [
        promptLang === 'CN' ? `用户需求：\n${idea}` : `User request:\n${idea}`,
        hasManualGuidance && mode !== 'PRESET'
          ? (promptLang === 'CN' ? `用户人工引导与纠偏：\n${sourceInputs.imageGuidance}` : `User manual guidance:\n${sourceInputs.imageGuidance}`)
          : ''
      ].filter(Boolean).join('\n\n')
    });
  }

  const sections: Array<Omit<CharacterIdentityBoardPromptSection, 'color'>> = [
    {
      id: 'compile_task',
      title: '任务目标',
      titleEn: 'Task',
      text: taskContract
    },
    {
      id: 'compile_variable_definition',
      title: '九变量定义',
      titleEn: 'Variable Definitions',
      text: variableDefinitionContract
    },
    ...sourceSections,
    {
      id: 'compile_world_law',
      title: '世界法则',
      titleEn: 'World Law',
      text: worldLawContract
    },
    {
      id: 'compile_body_form',
      title: '本体形态',
      titleEn: 'Body Form',
      text: bodyFormContract
    },
    {
      id: 'compile_medium_rule',
      title: '视觉媒介编译规则',
      titleEn: 'Visual Medium Compile Rule',
      text: stripRuleHeading(mediumInstruction)
    },
    {
      id: 'compile_text_priority',
      title: '文字输入优先级',
      titleEn: 'Text Input Priority',
      text: stripRuleHeading(textInputContract)
    },
    {
      id: 'compile_form_costume_rule',
      title: '角色 / 主体造型协议与服装系统裁决',
      titleEn: 'Subject Form Protocol and Costume Judgement',
      text: stripRuleHeading(styleCostumeConflictProtocol)
    }
  ];

  if (mode === 'IMAGE' && imageReferenceNote) {
    sections.push({
      id: 'compile_reference_image_rule',
      title: '参考图规则',
      titleEn: 'Reference Image Rule',
      text: imageReferenceNote
    });
  }
  if (actionMotifProtocol) {
    sections.push({
      id: 'compile_action_motif_rule',
      title: '动作母题裁决',
      titleEn: 'Action Motif Judgement',
      text: stripRuleHeading(actionMotifProtocol)
    });
  }

  sections.push(
    {
      id: 'compile_output_schema',
      title: '输出格式',
      titleEn: 'Output Schema',
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
  conceptWorkspacePage = 'ENGINE',
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
  const [templateWorkspaceView, setTemplateWorkspaceView] = useState<TemplateWorkspaceView>('PARAMS');
  const [isPromptTemplateLibraryOpen, setIsPromptTemplateLibraryOpen] = useState(false);
  const [objectRoute, setObjectRoute] = useState<ObjectRouteId>('HUMAN');
  const [humanRegister, setHumanRegister] = useState<HumanRegisterId>('REALISTIC');
  const [registerRandomMode, setRegisterRandomMode] = useState<RegisterRandomMode>('LAW_L2');
  const [subjectMode, setSubjectMode] = useState<SubjectMode>('HUMAN');
  const [localizedVariables, setLocalizedVariables] = useState<LocalizedSkillVariables>(() => createEmptyLocalizedVariables());
  const [identityOptions, setIdentityOptions] = useState<IdentityBoardOptions>({
    originality: true,
    format: '16:9',
    mediumCategory: 'PAINTING',
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
  const promptSectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const templateWorkspaceBodyRef = useRef<HTMLDivElement | null>(null);
  const variables = localizedVariables[promptLang];
  const isPerformanceStoryboardTemplate = promptTemplateMode === 'PERFORMANCE_STORYBOARD';
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
  const generationInstruction = useMemo(
    () => buildConceptGenerationInstruction(
      sourceMode,
      sourceInputs,
      promptLang,
      identityOptions,
      activeSourceMode.label,
      activeSourceMode.labelEn,
      hasSelectedActionTerms
    ),
    [activeSourceMode.label, activeSourceMode.labelEn, hasSelectedActionTerms, identityOptions, promptLang, sourceInputs, sourceMode]
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
  const activeStyleSourceBlocks = [
    ...activeVisualStyleBlocks,
    ...activeMediaEyeBlocks
  ];
  const activeSubjectBlocks = subjectMode === 'HUMAN' ? humanSubjectBlocks : creatureSubjectBlocks;
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
    () => isPerformanceStoryboardTemplate
      ? buildPerformanceStoryboardPromptSections(variables, promptLang)
      : buildCharacterIdentityBoardPromptSectionsFromLayers({
          values: variables,
          lang: promptLang,
          options: { ...identityOptions, worldLawMode: registerRandomMode },
          materialPacket,
          protocols: {
            styleCostumeConflict: getConceptStyleCostumeConflictProtocol(promptLang),
            actionMotif: getConceptActionMotifProtocol(promptLang)
          }
        }),
    [identityOptions, isPerformanceStoryboardTemplate, materialPacket, promptLang, registerRandomMode, variables]
  );
  const enabledPromptSectionIds = useMemo(
    () => promptSections
      .map(section => section.id)
      .filter(id => !disabledPromptModuleIds.includes(id)),
    [disabledPromptModuleIds, promptSections]
  );
  const output = useMemo(
    () => isPerformanceStoryboardTemplate
      ? buildPerformanceStoryboardPrompt(variables, promptLang, enabledPromptSectionIds)
      : buildCharacterIdentityBoardPrompt(variables, promptLang, identityOptions, materialPacket, registerRandomMode, enabledPromptSectionIds),
    [enabledPromptSectionIds, identityOptions, isPerformanceStoryboardTemplate, materialPacket, promptLang, registerRandomMode, variables]
  );
  const visiblePromptSections = promptSections.filter(section => enabledPromptSectionIds.includes(section.id));
  const activePromptSection = promptSections.find(section => section.id === activePromptSectionId) || promptSections[0] || null;
  const activeVariableMeta = getActiveVariableMeta(promptTemplateMode);
  const activeTemplateWorkspaceTitle = templateWorkspaceView === 'PROMPT'
    ? t(lang, '终稿律令', 'Final Edict')
    : templateWorkspaceView === 'COMPILE'
      ? t(lang, '编译律令', 'Compile Edict')
      : isPerformanceStoryboardTemplate
        ? t(lang, '表演分镜变量', 'Storyboard Variables')
        : t(lang, '角色身份板参数', 'Character Board Parameters');
  const activeTemplateWorkspaceKicker = templateWorkspaceView === 'PROMPT'
    ? 'Final Edict'
    : templateWorkspaceView === 'COMPILE'
      ? 'Variable Translation Edict'
      : 'Template Parameters';
  const togglePromptModule = useCallback((id: string) => {
    setDisabledPromptModuleIds(prev => (
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    ));
  }, []);
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
    : 'border-orange-500/25 bg-black text-zinc-200';
  const softPanelClass = isRetro
    ? 'border-[#85411B]/14 bg-white/32'
    : 'border-orange-500/18 bg-black';
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
    : 'border-orange-500/20 bg-black';
  const topActionButtonClass = `mist-concept-top-action-button flex h-10 shrink-0 items-center gap-2 rounded-md border bg-transparent px-3.5 text-[12px] font-black uppercase tracking-[0.08em] transition-all ${
    isRetro
      ? 'border-[#85411B]/22 text-[#85411B] hover:border-[#85411B]/48 hover:bg-[#85411B]/8'
      : 'border-orange-500/22 text-zinc-500 hover:border-orange-500/60 hover:bg-orange-500/10 hover:text-orange-100'
  }`;
  const compactTopActionButtonClass = `mist-concept-top-action-button flex h-8 shrink-0 items-center gap-1.5 rounded-md border bg-transparent px-2 text-[10px] font-black uppercase tracking-[0.06em] transition-all ${
    isRetro
      ? 'border-[#85411B]/22 text-[#85411B] hover:border-[#85411B]/48 hover:bg-[#85411B]/8'
      : 'border-orange-500/22 text-zinc-500 hover:border-orange-500/60 hover:bg-orange-500/10 hover:text-orange-100'
  }`;
  const paramsModuleTitleClass = `flex min-w-0 items-center gap-2.5 text-[16px] font-black uppercase tracking-[0.09em] ${strongText}`;
  const sidebarModuleTitleClass = `flex min-w-0 items-center gap-2 text-[14px] font-black uppercase tracking-[0.1em] ${strongText}`;
  const paramsModuleMetaClass = `truncate text-[13px] font-black uppercase tracking-[0.08em] ${mutedText}`;
  const paramsModuleCountClass = `shrink-0 rounded border px-2.5 py-1 text-[11px] tracking-[0.08em] ${miniSwitchClass} ${mutedText}`;
  const paramsRowLabelWrapClass = 'flex w-36 shrink-0 items-center justify-between gap-2';
  const paramsRowTitleClass = `truncate text-[13px] font-black uppercase tracking-[0.08em] ${strongText}`;
  const paramsRowCountClass = `shrink-0 rounded border px-2 py-0.5 font-mono text-[11px] font-black ${miniSwitchClass} ${mutedText}`;
  const paramsSubcardTitleClass = `text-[14px] font-black uppercase tracking-[0.1em] ${strongText}`;
  const paramsSubcardMetaClass = `text-[12px] leading-5 ${mutedText}`;
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
            <span className="font-mono text-[10px] opacity-45">
              {route.mode === 'HUMAN' ? 'HUM' : 'XENO'}
            </span>
          </button>
        );
      })}
    </div>
  );

  const renderMediumCategorySwitch = () => (
    <div className="mist-concept-source-mode-toggle grid grid-cols-4 gap-1 rounded-md border p-0.5">
      {mediumCategoryMeta.map(item => {
        const Icon = item.icon;
        const selected = identityOptions.mediumCategory === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setIdentityOptions(prev => ({ ...prev, mediumCategory: item.id }))}
            className={`mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center gap-1.5 rounded border px-2 text-[12px] font-black uppercase tracking-[0.06em] transition-all ${selected ? 'is-active' : ''}`}
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
          <span>{t(lang, '选择物理媒介', 'Physical Medium')}</span>
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

  const renderVisualStylePanel = () => (
    <section className={`mist-aesthetic-module mist-concept-source-module rounded-lg border transition-all duration-300 ${softPanelClass}`}>
      <div className={`mist-aesthetic-module-header grid min-h-[2.45rem] gap-3 border-b px-3 py-2 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] md:items-center ${isRetro ? 'border-[#85411B]/12' : 'border-white/[0.06]'}`}>
        <div className={paramsModuleTitleClass}>
          <Paintbrush size={16} className={accentText} />
          <span className="truncate">{t(lang, '视觉风格', 'Visual Style')}</span>
          <span className={paramsModuleCountClass}>
            {selectedCount(activeVisualStylePanelBlocks)}
          </span>
        </div>
        {renderMediumCategorySwitch()}
      </div>
      <div className="space-y-3 p-3 text-xs font-serif">
        <section>
          <div className={`mb-2 text-[11px] font-black uppercase tracking-[0.14em] ${mutedText}`}>
            {t(lang, '风格', 'Style')}
          </div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            {activeMediaSoulBlocks.map(slot)}
          </div>
        </section>
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
            {t(lang, '配色方案', 'Palette')}
          </div>
          {renderPaletteSlots()}
        </section>
      </div>
    </section>
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
    if (section.id === 'translation_originality') {
      return (
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
    if (section.id === 'compile_source') {
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
    return (
      <p className={`text-[12px] leading-6 ${mutedText}`}>
        {t(lang, '固定元件：当前模板锁定顺序与基础规则。', 'Fixed component: this template locks its order and base rule.')}
      </p>
    );
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
    const activeTemplateCard = promptTemplateCards.find(card => card.id === promptTemplateMode) || promptTemplateCards[0];
    const ActiveIcon = activeTemplateCard.icon;
    return (
    <section className={`mist-concept-template-panel rounded-lg border p-3 ${softPanelClass}`}>
      <div className="flex items-center justify-between gap-3">
        <div className={`flex min-w-0 items-center gap-2 text-[14px] font-black uppercase tracking-[0.1em] ${strongText}`}>
          <PanelRight size={16} className={accentText} />
          <span>{t(lang, '律令模版', 'Edict Template')}</span>
        </div>
        <span className={`shrink-0 rounded border px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.08em] ${miniSwitchClass} ${mutedText}`}>
          {t(lang, '选择 / 自定义', 'Choose / Custom')}
        </span>
      </div>
      <button
        type="button"
        onClick={() => setIsPromptTemplateLibraryOpen(true)}
        className={`mt-3 w-full rounded-lg border p-2 text-left transition-all active:scale-[0.99] ${
          isRetro
            ? 'border-[#85411B]/22 bg-white/30 hover:border-[#85411B]/42'
            : 'border-white/[0.08] bg-white/[0.025] hover:border-orange-400/35'
        }`}
      >
        <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-3">
          <div className="h-[86px] min-w-0">
            {renderTemplatePreview(activeTemplateCard.preview, true)}
          </div>
          <div className="min-w-0 py-0.5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-orange-400/45 bg-orange-400/12 text-orange-200">
                <ActiveIcon size={14} />
              </span>
              <span className={`min-w-0 flex-1 truncate text-[14px] font-black tracking-[0.06em] ${strongText}`}>
                {t(lang, activeTemplateCard.label, activeTemplateCard.labelEn)}
              </span>
              <span className={`shrink-0 rounded border px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${accentText} ${miniSwitchClass}`}>
                {t(lang, '已选', 'Selected')}
              </span>
            </div>
            <p className={`mt-2 line-clamp-2 text-[12px] leading-5 ${mutedText}`}>
              {t(lang, activeTemplateCard.desc, activeTemplateCard.descEn)}
            </p>
            <div className={`mt-2 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.08em] ${accentText}`}>
              <BookOpen size={13} />
              {t(lang, '进入律令模版页', 'Open Edict Library')}
            </div>
          </div>
        </div>
      </button>
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
          {t(lang, '该模板把九变量改写为分镜模块：角色引用、身体语法、空间限制、动作词库、输出规格、风格气质、摄影构图、光影终点和标注系统。', 'This template remaps the nine slots into storyboard modules: reference, body grammar, space lock, movement bank, format, mood, camera, lighting ending, and annotation system.')}
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
    registerRef?: (id: string, node: HTMLElement | null) => void
  ) => (
    <section className={`rounded-lg border p-4 ${softPanelClass}`}>
      <div className="mb-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`text-2xl font-black uppercase tracking-[0.04em] ${strongText}`}>
            {t(lang, title, titleEn)}
          </h3>
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
              <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                <div className={`border-b px-3.5 py-3.5 xl:border-b-0 xl:border-r ${isRetro ? 'border-[#85411B]/10 bg-white/20' : 'border-white/[0.055] bg-black/18'}`}>
                  <p className={`mb-3 text-[12px] font-black uppercase tracking-[0.08em] ${mutedText}`}>
                    {t(lang, '元件控制', 'Component Control')}
                  </p>
                  {renderInstructionComponentControls(section)}
                </div>
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
    '九变量生成前的真实编译律令，按任务、媒介、裁决、输入来源和输出格式拆成模块。',
    'The actual edict before nine-variable generation, split by task, medium, judgment, source input, and output schema.',
    compileInstructionSections,
    compileInstructionOutput
  );

  const renderModulePromptPreviewPanel = () => renderInstructionSectionsPanel(
    '终稿律令',
    'Final Edict',
    '当前模板的最终拼装律令，按模块编号与颜色显示。',
    'Final assembled edict for the current template, shown by module number and color.',
    visiblePromptSections,
    output,
    activePromptSection?.id,
    setActivePromptSectionId,
    (id, node) => { promptSectionRefs.current[id] = node; }
  );

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

  const renderTemplateQuickControlsPanel = () => (
    <section className={`rounded-lg border p-3 ${softPanelClass}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className={sidebarModuleTitleClass}>
          <SlidersHorizontal size={16} className={accentText} />
          <span>{t(lang, '律令规格', 'Edict Spec')}</span>
        </div>
        <span className={paramsModuleMetaClass}>
          {identityOptions.format}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <button
          type="button"
          onClick={() => setIdentityOptions(prev => ({ ...prev, originality: !prev.originality }))}
          className="mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[12px] font-black uppercase tracking-[0.06em] transition-all is-active"
        >
          <span className="truncate">
            {identityOptions.originality ? t(lang, '原创开', 'Original On') : t(lang, '原创关', 'Original Off')}
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            const index = boardFormatOptions.indexOf(identityOptions.format);
            const next = boardFormatOptions[(index + 1) % boardFormatOptions.length];
            setIdentityOptions(prev => ({ ...prev, format: next }));
          }}
          className="mist-concept-source-mode-button flex h-8 min-w-0 items-center justify-center rounded border px-2 text-[12px] font-black uppercase tracking-[0.06em] transition-all is-active"
        >
          <span className="truncate">{identityOptions.format}</span>
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
              {t(lang, '选择律令模版', 'Choose Edict Template')}
            </h2>
            <p className={`mt-2 max-w-3xl text-[13px] leading-6 ${mutedText}`}>
              {t(
                lang,
                '这里以后会承载上百到上千个律令模版；左侧只保留当前入口，具体选择进入这里完成。',
                'This library will later hold hundreds or thousands of edict templates; the sidebar only keeps the current entry point.'
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

  const renderCompactFieldModule = () => (
    <section className={`rounded-lg border ${softPanelClass}`}>
      <div className={`flex items-center justify-between gap-3 border-b px-3 py-2.5 ${isRetro ? 'border-[#85411B]/12' : 'border-white/[0.06]'}`}>
        <div className={paramsModuleTitleClass}>
          <Fingerprint size={16} className={accentText} />
          <span>{t(lang, '统摄模块', 'Governance')}</span>
        </div>
      </div>
      {renderGovernanceController()}
    </section>
  );

  const updateState = useCallback((nextState: NarrativeFieldState) => {
    onChange(nextState);
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
    if (blockId === 'aes_color_palette') {
      return AES_COLOR_PRESETS.find(item => item.name === tagName || item.id === tagName) || findItemFull(tagName, blockId);
    }
    if (blockId && conceptCustomItemsByBlock[blockId]) {
      const customItem = conceptCustomItemsByBlock[blockId].find(item => item.name === tagName || item.id === tagName || item.nameEn === tagName);
      if (customItem) return customItem;
    }
    return findItemFull(tagName, blockId);
  };
  const getLibraryCategory = (blockId: string) => scopedLibraries.find(item => item.id === `${blockId}_lib`);
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
  const getFilteredItemsForBlock = (blockId: string) => {
    const category = getLibraryCategory(blockId);
    if (!category) return [];
    const visibleItems = category.items.filter(isLibraryItemVisible);
    return visibleItems;
  };
  const getFilteredLibraryDataForBlock = (blockId: string): LibraryCategoryDef[] | undefined => {
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

  const getLibraryCount = (blockId: string) => {
    if (blockId === 'cd_space_anchor_exact') return SUR3_SPACE_ANCHOR_PRESETS.length;
    if (blockId === 'cd_time_anchor_exact') return SUR3_COORDINATE_PRESETS.length;
    return getFilteredItemsForBlock(blockId).length;
  };

  const getRandomizableItemsForBlock = (blockId: string) => {
    const category = getLibraryCategory(blockId);
    if (!category) return [];
    const visibleItems = category.items.filter(isLibraryItemVisible);
    if (fieldStyleBlocks.includes(blockId)) return getFilteredLibraryDataForBlock(blockId)?.[0]?.items || [];
    if (!isHumanRegisterWeightedRandomActive) return visibleItems;
    if (registerRandomMode === 'LAW_L1') {
      const pureItems = visibleItems.filter(item => isItemAllowedForHumanRegister(blockId, item));
      return pureItems.length > 0 ? pureItems : visibleItems;
    }
    return visibleItems;
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

  const openLibrary = (blockId: string) => {
    if (isBlockLocked(blockId)) return;
    setActiveBlockId(blockId);
    setLibraryOpen(true);
  };

  const setBlockTags = (blockId: string, tags: string[]) => {
    if (isBlockLocked(blockId)) return;
    if (blockId === 'cd_space_anchor_exact' || blockId === 'cd_time_anchor_exact') {
      const nextState = { ...fieldState, [blockId]: tags.slice(0, 1) };
      updateSpacetimeCoordinateDisplay(nextState);
      updateState(nextState);
      setLibraryOpen(false);
      return;
    }
    if (blockId === 'aes_color_palette') {
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
    if (blockId === 'aes_color_palette') {
      onPaletteChange?.(Array(7).fill(""));
    }
    updateState({ ...fieldState, [blockId]: [] });
    if (removed.length > 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, removed));
  };

  const toggleTag = (blockId: string, tag: string) => {
    if (isBlockLocked(blockId)) return;
    const current = fieldState[blockId] || [];
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
    if (blockId === 'aes_color_palette') {
      const next = current.includes(tag) ? [] : [tag];
      syncPaletteHex(next[0]);
      updateState({ ...fieldState, [blockId]: next });
      if (current.length > 0 && next.length === 0) onFocusStateChange?.(clearFocusForTagsPatch(blockId, current));
      setLibraryOpen(false);
      return;
    }
    const limit = BLOCK_LIMITS[blockId] || 1;
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
      const limit = BLOCK_LIMITS[blockId] || 1;
      const count = Math.min(limit, limit > 1 ? 2 : 1);
      const selected = pickWeightedUniqueItems(blockId, scopedCategory.items, count).map(item => item.name);
      updateState({ ...fieldState, [blockId]: selected });
      return;
    }
    const items = getRandomizableItemsForBlock(blockId);
    if (items.length === 0) return;
    const limit = BLOCK_LIMITS[blockId] || 1;
    const count = Math.min(limit, limit > 1 ? 2 : 1);
    const selected = pickWeightedUniqueItems(blockId, items, count).map(item => item.name);
    if (blockId === 'aes_color_palette') {
      const tag = selected[0];
      syncPaletteHex(tag);
      updateState({ ...fieldState, [blockId]: tag ? [tag] : [] });
      return;
    }
    updateState({ ...fieldState, [blockId]: selected });
  };

  const randomizeBlocks = (blockIds: string[]) => {
    const nextState = { ...fieldState };
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
      const limit = BLOCK_LIMITS[blockId] || 1;
      const count = Math.min(limit, limit > 1 ? 2 : 1);
      const selected = pickWeightedUniqueItems(blockId, items, count).map(item => item.name);
      if (blockId === 'aes_color_palette') {
        const tag = selected[0];
        syncPaletteHex(tag);
        nextState[blockId] = tag ? [tag] : [];
        return;
      }
      nextState[blockId] = selected;
    });
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
      if (blockId === 'aes_color_palette') {
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
  const selectedDesignBrief = (blockIds: string[], fallback: string) => {
    const lines = blockIds.flatMap(blockId => {
      const label = `${blockDef(blockId)?.name || blockId} / ${blockDef(blockId)?.enName || blockId}`;
      return getSelectedItemsForBlock(blockId).map(({ tag, item }) => {
        const title = tag.replace(/\s*\([^)]*\)\s*/g, '').trim() || tag;
        const meaning = promptLang === 'CN'
          ? (item?.def || item?.defEn || '')
          : (item?.defEn || item?.def || '');
        const detail = meaning;
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
      optionalSourceSection('统摄模块 / Governance Layer:', optionalDesignBrief(governanceBlocks)),
      optionalSourceSection('视觉风格 / Visual Style:', styleLine),
      optionalSourceSection('配色方案 / Palette:', paletteLine),
      optionalSourceSection('本体论 / Ontology Detail:', subjectLine),
      `本体形态 / Body Form: ${bodyFormBrief}`,
      `对象路由 / Subject Route: ${t('CN', activeObjectRoute.label, activeObjectRoute.labelEn)} / ${activeObjectRoute.labelEn}`
    ].filter(Boolean).join('\n');
  };
  const compileInstructionSections = useMemo(
    () => isPerformanceStoryboardTemplate
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
          registerRandomMode
        ),
    [
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
      materialPacket,
      paletteBlocks,
      promptLang,
      registerRandomMode,
      sourceInputs,
      sourceMode,
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
      const seed = selectedLine(['aes_creature_class', 'aes_creature_element', 'aes_creature_mood'], promptLang === 'CN' ? '原创异种生物概念' : 'original creature concept');
      return {
        characterSeed: promptLang === 'CN'
          ? `一个以“${seed}”为核心的原创异种概念，设计重点是可读 anatomy、非通用剪影和清楚的生物职能。`
          : `An original creature concept built around "${seed}", focused on readable anatomy, a non-generic silhouette, and a clear biological function.`,
        ageBodyType: promptLang === 'CN'
          ? `${selectedLine(['aes_creature_size', 'aes_creature_head', 'aes_creature_body', 'aes_creature_action'], '异种体型、头部结构、身体部件和行为姿态需要保持功能性。')} 本体形态：${bodyFormBrief}。`
          : `${selectedLine(['aes_creature_size', 'aes_creature_head', 'aes_creature_body', 'aes_creature_action'], 'Creature scale, head structure, body parts, and behavior posture should remain functional.')} Body form: ${bodyFormBrief}.`,
        timeSpaceScene: governanceLine,
        actionMoment: promptLang === 'CN'
          ? selectedLine(['aes_creature_action'], '身份板展示状态，强调可读 anatomy、行为线索和第二姿态。')
          : selectedLine(['aes_creature_action'], 'Identity-board display state, emphasizing readable anatomy, behavior cues, and secondary pose.'),
        visualMedium: `${mediumFallback()} ${styleLine}`,
        style: `${styleLine}；${paletteLine}。`,
        compositionScene: promptLang === 'CN'
          ? '干净角色身份板构图，主视图清晰，局部拆解、轮廓和色条分区可读。'
          : 'Clean character identity-board composition with readable main view, detail callouts, silhouette, and color strip.',
        lightingAtmosphere: promptLang === 'CN'
          ? '克制、清楚、服务材质和轮廓的身份板光影。'
          : 'Restrained identity-board lighting that clarifies material and silhouette.',
        otherDetails: promptLang === 'CN'
          ? `${detailLine}。强调原创 anatomy、表皮材质、行为线索、局部拆解、色条和身份备注；禁止复杂电影场景、海报化构图、多人混乱。`
          : `${detailLine}. Emphasize original anatomy, surface texture, behavior cues, detail callouts, color strip, and identity notes; avoid complex cinematic scenes, poster composition, and multiple competing subjects.`
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
      actionMoment: selectedLine(['cd_static_pose', 'cd_dynamic_action', 'cd_human_behavior'], promptLang === 'CN' ? '身份板展示状态，主视图姿态清楚，第二姿态服务身份。' : 'Identity-board display state, with clear main-view pose and a secondary pose serving the identity.'),
      visualMedium: `${mediumFallback()} ${styleLine}`,
      style: `${styleLine}；${paletteLine}。`,
      compositionScene: promptLang === 'CN'
        ? '干净角色身份板构图，主视图、背面、侧面、表情小格、局部 close-up、剪影和色条清楚分区。'
        : 'Clean character identity-board composition with clear sections for front view, back view, side view, expression studies, detail close-ups, silhouette, and color strip.',
      lightingAtmosphere: promptLang === 'CN'
        ? '克制、清楚、服务面部、服装结构和材质证据的身份板光影。'
        : 'Restrained identity-board lighting that clarifies face, garment structure, and material evidence.',
      otherDetails: promptLang === 'CN'
        ? `${detailLine}。对象本体：${objectLine}。强调时空坐标、主体协议、造型协议、情绪核、面部识别点、皮肤身体特征、服装系统、材料证据、道具符号、姿态动作和色条。造型协议是全局统帅；服装系统只是服装执行层，必须把冲突的服装/装备词条转译成当前主造型内部可成立的剪影、衣层、开合、负载、挂点和材料连接。材料证据、表面材质与损耗痕迹不要机械罗列，必须从主体协议、时空坐标和造型协议中自然推导。冲突元素必须按世界法则 L1-L5 裁决：写实锁定则服从坐标，同构折译则转成可信功能，局部缝合则只允许一个异常证据，本体成立则让非现实材料成为世界事实，狂想接管则显性拼贴但保留身份骨架；禁止复杂电影场景、海报化构图、多人混乱。`
        : `${detailLine}. Object ontology: ${objectLine}. Emphasize time-space coordinate, subject protocol, form protocol, emotional core, facial recognition points, skin/body features, costume system, material evidence, props/signs, pose/action, and color strip. The form protocol is the global governing layer; the costume system is only the costume execution layer, and must translate conflicting clothing/gear terms into silhouette, layering, closures, load-bearing, mounts, and material junctions that can exist inside the primary form system. Material evidence, surface materials, and wear traces must not be listed mechanically; they must be naturally derived from the subject protocol, time-space coordinate, and form protocol. Conflicting elements must follow World Law L1-L5: realist lock obeys the coordinate, equivalent translation turns conflict into plausible function, local seam allows only one anomaly, ontology manifests lets non-realist material become a world fact, rhapsody takeover allows explicit collage while preserving the identity skeleton; avoid complex cinematic scenes, poster composition, and multiple competing subjects.`
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
    setTemplateWorkspaceView('PROMPT');
    setCopied(false);
  };

  const applyGeneratedVariables = (generated: LocalizedPromptSkillVariables) => {
    setLocalizedVariables({
      CN: { ...generated.CN },
      EN: { ...generated.EN }
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
        characterSeed: promptLang === 'CN' ? `从文章中抽取“${target}”作为角色身份板主角。` : `Extract "${target}" from the article as the main identity-board character.`,
        ageBodyType: promptLang === 'CN' ? '根据文章中的年龄感、体态、姿势和身体存在感进行整理；缺失处保持可信原创。' : 'Organize age impression, body type, posture, and physical presence from the article; invent missing parts believably.',
        timeSpaceScene: promptLang === 'CN' ? '根据文章中的时代、地点、空间、社会制度和场域压力进行整理；缺失处保持可信原创。' : 'Organize era, location, space, social system, and field pressure from the article; invent missing parts believably.',
        actionMoment: promptLang === 'CN' ? '根据文章中的行为、冲突或情绪瞬间整理画面事件；缺失处保持身份板展示逻辑。' : 'Organize the action moment from behavior, conflict, or emotional beat in the article; keep identity-board display logic when missing.',
        visualMedium: mediumFallback(),
        style: promptLang === 'CN' ? '从文本语气、时代感、材料暗示和情绪压力中提炼审美方向。' : 'Derive the aesthetic direction from text tone, era cues, material hints, and emotional pressure.',
        compositionScene: promptLang === 'CN' ? '根据角色身份板需要，组织清晰景别、主体位置和局部拆解分区。' : 'Use identity-board needs to organize clear shot scale, subject placement, and detail-callout sections.',
        lightingAtmosphere: promptLang === 'CN' ? '根据文本情绪推导光影氛围；没有依据时保持干净克制。' : 'Derive lighting atmosphere from textual emotion; keep it clean and restrained when unsupported.',
        otherDetails: promptLang === 'CN' ? `原文素材：${text.slice(0, 900)}` : `Source text: ${text.slice(0, 900)}`
      });
      return;
    }

    if (sourceMode === 'IMAGE') {
      const guidance = sourceInputs.imageGuidance.trim() || (promptLang === 'CN' ? '根据参考图保留主体特征，并把混乱内容整理为清晰身份板。' : 'Keep the subject features from the reference image and organize them into a clean identity board.');
      applyCurrentLanguageVariables({
        characterSeed: promptLang === 'CN' ? `基于参考图“${sourceInputs.imageName || '未命名图片'}”反推一个原创角色 / 异种设定。` : `Reverse-engineer an original character or creature concept from reference image "${sourceInputs.imageName || 'untitled image'}".`,
        ageBodyType: promptLang === 'CN' ? '从参考图提取年龄感、体型、比例、姿态或 anatomy，修正为可读设定图结构。' : 'Extract age impression, body type, proportions, posture, or anatomy from the reference and correct it into a readable design-sheet structure.',
        timeSpaceScene: promptLang === 'CN' ? '从参考图和人工引导中推断时空、空间与场域压力；证据不足时保持简洁。' : 'Infer time-space, setting, and field pressure from the reference and manual guidance; keep concise when evidence is limited.',
        actionMoment: promptLang === 'CN' ? '提取参考图中的动作或展示状态，并整理为身份板可读的画面事件。' : 'Extract the action or display state from the reference and organize it into an identity-board-readable image event.',
        visualMedium: mediumFallback(),
        style: promptLang === 'CN' ? '以参考图的造型语言、色彩和材料气质为基础，去除噪声并统一风格。' : 'Base the style on the reference image shape language, color, and material mood, removing noise and unifying the direction.',
        compositionScene: promptLang === 'CN' ? '从参考图提取景别、角度、取景和主体位置，并修正为清晰身份板构图。' : 'Extract shot size, angle, framing, and subject placement from the reference and correct them into a clean identity-board composition.',
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
      actionMoment: promptLang === 'CN' ? '把灵感整理成一个清楚的画面事件或身份板展示动作。' : 'Turn the idea into a clear image event or identity-board display action.',
      visualMedium: mediumFallback(),
      style: promptLang === 'CN' ? '将灵感元素转译为统一的审美方向、材料语言和配色逻辑。' : 'Translate the idea elements into a unified aesthetic direction, material language, and palette logic.',
      compositionScene: promptLang === 'CN' ? '组织清晰景别、取景、主体位置和身份板分区。' : 'Organize clear shot scale, framing, subject placement, and identity-board sections.',
      lightingAtmosphere: promptLang === 'CN' ? '使用克制、清楚、服务主体可读性的光影氛围。' : 'Use restrained, clear lighting atmosphere that supports subject readability.',
      otherDetails: promptLang === 'CN' ? '优先保证单一主体、清晰轮廓、可读局部拆解、原创身份和干净留白。' : 'Prioritize one subject, clear silhouette, readable detail callouts, original identity, and clean negative space.'
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
    finalPrompt: isPerformanceStoryboardTemplate
      ? buildPerformanceStoryboardPrompt(nextVariables, promptLang, enabledPromptSectionIds)
      : buildCharacterIdentityBoardPrompt(nextVariables, promptLang, identityOptions, materialPacket, registerRandomMode, enabledPromptSectionIds),
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
        t(lang, '角色身份板变量生成', 'Character Board Variables'),
        async () => generatePromptSkillVariables(getVariableGenerationPrompt(), imageParts)
      );
      if (generated) {
        applyGeneratedVariables(generated);
        onConceptRuntimeChange?.(buildRuntimeState(generated[promptLang]), true);
      } else {
        alert(t(lang, '变量生成失败：模型没有返回可解析的九变量 JSON。请重试或减少词条数量。', 'Variable generation failed: the model did not return parseable nine-slot JSON. Please retry or reduce selected terms.'));
      }
    } catch (error: any) {
      if (error?.message !== 'AbortError') {
        console.error(error);
        alert(error?.message || t(lang, '变量生成失败：没有覆盖当前九变量。', 'Variable generation failed: current variables were not overwritten.'));
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

  const renderSentenceSlot = (blockId: string) => (
    <span className="mist-concept-sentence-slot inline-flex align-baseline" key={blockId}>
      {slot(blockId)}
    </span>
  );

  const slash = <span className={`mx-0.5 font-mono text-[13px] font-black ${mutedText}`}>/</span>;

  const renderSentenceLine = (children: React.ReactNode, key?: string) => (
    <p key={key} className={`flex flex-wrap items-baseline gap-x-2 gap-y-2 text-[15px] leading-10 md:text-base md:leading-[2.75rem] ${strongText}`}>
      {children}
    </p>
  );

  const renderSubjectSentenceCard = (
    title: string,
    titleEn: string,
    children: React.ReactNode,
    blockIds: string[]
  ) => (
    <section className={`rounded-md border p-4 ${isRetro ? 'border-[#85411B]/12 bg-white/22' : 'border-white/[0.065] bg-black/18'}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className={`flex min-w-0 items-center gap-2 ${paramsSubcardTitleClass}`}>
          <Fingerprint size={13} className={accentText} />
          <span>{t(lang, title, titleEn)}</span>
        </div>
        <span className={paramsRowCountClass}>
          {blockIds.reduce((sum, blockId) => sum + (fieldState[blockId] || []).length, 0)}
        </span>
      </div>
      <div className="space-y-3 font-serif">
        {children}
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
    const visibleBlocks = blockIds.filter(blockId => fieldBlocks.includes(blockId) || activeSubjectBlocks.includes(blockId));
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
      const creatureSentenceBlocks = [
        'aes_creature_size',
        'aes_creature_class',
        'aes_creature_element',
        'aes_creature_mood',
        'aes_creature_head',
        'aes_creature_body',
        'aes_creature_texture',
        'aes_creature_action'
      ];
      return (
        <div className="p-3">
          {renderSubjectSentenceCard(
            '异种句式',
            'Creature Sentence',
            <>
              {renderSentenceLine(<>
                <span>{t(lang, '一个', 'A')}</span>
                {renderSentenceSlot('aes_creature_size')}
                {renderSentenceSlot('aes_creature_class')}
                <span>{t(lang, '，带有', 'with')}</span>
                {renderSentenceSlot('aes_creature_element')}
                <span>{t(lang, '属性，整体情绪是', 'traits, carrying')}</span>
                {renderSentenceSlot('aes_creature_mood')}
                <span>{t(lang, '。', '.')}</span>
              </>)}
              {renderSentenceLine(<>
                <span>{t(lang, '头部呈现', 'Its head shows')}</span>
                {renderSentenceSlot('aes_creature_head')}
                <span>{t(lang, '，身体结构是', ', its body structure is')}</span>
                {renderSentenceSlot('aes_creature_body')}
                <span>{t(lang, '。', '.')}</span>
              </>)}
              {renderSentenceLine(<>
                <span>{t(lang, '表皮/材质是', 'Its surface material is')}</span>
                {renderSentenceSlot('aes_creature_texture')}
                <span>{t(lang, '，行为姿态是', ', and its behavior pose is')}</span>
                {renderSentenceSlot('aes_creature_action')}
                <span>{t(lang, '。', '.')}</span>
              </>)}
            </>,
            creatureSentenceBlocks
          )}
        </div>
      );
    }

    return (
      <div className="p-3">
        {renderSubjectSentenceCard(
          '人物句式',
          'Human Sentence',
          <>
            {renderSentenceLine(<>
              <span>{t(lang, '一个', 'A')}</span>
              {renderSentenceSlot('cd_age')}
              {renderSentenceSlot('cd_gender')}
              {renderSentenceSlot('cd_body_type')}
              {renderSentenceSlot('cd_ethnicity')}
              <span>{t(lang, '，由', ', coded through')}</span>
              {renderSentenceSlot('cd_social_aesthetic')}
              <span>{t(lang, '编码，', ',')}</span>
              {renderSentenceSlot('cd_occupation')}
              <span>{t(lang, '（', '(')}</span>
              {renderSentenceSlot('cd_persona')}
              <span>{t(lang, '），核心情绪是', '), driven by')}</span>
              {renderSentenceSlot('cd_emotional_core')}
              <span>{t(lang, '。', '.')}</span>
            </>)}
            {renderSentenceLine(<>
              <span>{t(lang, '长着', 'With')}</span>
              {renderSentenceSlot('cd_hair_color')}
              {renderSentenceSlot('cd_hair_style_f')}
              {slash}
              {renderSentenceSlot('cd_hair_style_m')}
              {renderSentenceSlot('cd_beard_style')}
              <span>{t(lang, '，', ',')}</span>
              {renderSentenceSlot('cd_eye_color')}
              {renderSentenceSlot('cd_eye_shape')}
              {renderSentenceSlot('cd_eye_fx')}
              <span>{t(lang, '眼睛。', 'eyes.')}</span>
            </>)}
            {renderSentenceLine(<>
              <span>{t(lang, '脸上有', 'The face has')}</span>
              {renderSentenceSlot('cd_face_features')}
              <span>{t(lang, '，妆容/修饰是', ', makeup/adornment is')}</span>
              {renderSentenceSlot('cd_makeup_style')}
              <span>{t(lang, '，一副', ', with')}</span>
              {renderSentenceSlot('cd_expression')}
              <span>{t(lang, '表情。', 'expression.')}</span>
            </>)}
            {renderSentenceLine(<>
              <span>{t(lang, '皮肤本体是', 'The skin itself reads as')}</span>
              {renderSentenceSlot('cd_skin_texture')}
              <span>{t(lang, '，表面附着', ', surface state shows')}</span>
              {renderSentenceSlot('cd_surface_state')}
              <span>{t(lang, '，异形结构为', ', anomalous structure is')}</span>
              {renderSentenceSlot('cd_body_features')}
              <span>{t(lang, '。', '.')}</span>
            </>)}
            {renderSentenceLine(<>
              <span>{t(lang, '身体标记', 'Body markings')}</span>
              {renderSentenceSlot('cd_body_markings')}
              <span>{t(lang, '，身体损伤', ', body damage')}</span>
              {renderSentenceSlot('cd_body_damage')}
              <span>{t(lang, '，身体改造', ', body modification')}</span>
              {renderSentenceSlot('cd_body_modification')}
              <span>{t(lang, '，服装逻辑是', ', with costume logic of')}</span>
              {renderSentenceSlot('cd_costume_logic')}
              <span>{t(lang, '。', '.')}</span>
            </>)}
            {renderSentenceLine(<>
              <span>{t(lang, '携带', 'Carrying')}</span>
              {renderSentenceSlot('cd_prop_anchor')}
              <span>{t(lang, '，身上有', ', marked by')}</span>
              {renderSentenceSlot('cd_symbol_system')}
              <span>{t(lang, '；动作：', '; action:')}</span>
              {renderSentenceSlot('cd_static_pose')}
              {slash}
              {renderSentenceSlot('cd_dynamic_action')}
              {slash}
              {renderSentenceSlot('cd_human_behavior')}
              <span>{t(lang, '。', '.')}</span>
            </>)}
          </>,
          humanSentenceBlocks
        )}
      </div>
    );
  };

  const renderPaletteSlots = () => {
    const isPaletteBound = (fieldState['aes_color_palette'] || []).length > 0;
    return (
      <div className="flex min-h-[3.1rem] flex-row items-stretch gap-3">
        <div className={`flex flex-1 items-center justify-center rounded border px-2 ${isRetro ? 'border-[#85411B]/18 bg-transparent' : 'border-white/[0.08] bg-black/24'}`}>
          {slot('aes_color_palette')}
        </div>
        <div className={`group/hex relative flex flex-1 items-center gap-1 border-l pl-3 ${isRetro ? 'border-[#85411B]/16' : 'border-white/[0.08]'}`}>
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
        <span className="mist-concept-spacetime-slot mist-concept-prophecy-slot inline-flex flex-wrap items-baseline gap-x-1 relative group/slot align-middle">
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
          <span className="mist-concept-spacetime-slot mist-concept-prophecy-slot inline-flex flex-wrap items-baseline gap-x-1 relative group/slot align-middle">
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
                {SUR3_ERAS.map(era => {
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
                <span>2300</span>
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
                '当前将范本变量映射到九个分镜模块，再由终稿律令本地拼装为完整 12 格分镜提示词。',
                'The sample variables are mapped into nine storyboard modules, then locally assembled into the complete 12-panel storyboard prompt.'
              )
            : t(
                lang,
                `当前将以“${activeMediumMeta.label}”为视觉风格底线，编译为九变量拼装台内容，再由最终成型律令本地拼装。`,
                `The current route uses "${activeMediumMeta.labelEn}" as the physical-medium floor, compiles the nine variable slots, then locally assembles the final prompt.`
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
                `${t(lang, '配色', 'Palette')}: ${selectedLine(paletteBlocks, t(lang, '未选择', 'None'))}`,
                `${t(lang, '统摄模块', 'Governance')}: ${selectedLine(governanceBlocks, t(lang, '未选择', 'None'))}`,
                `${t(lang, '本体细节', 'Ontology')}: ${selectedLine(activeSubjectBlocks, t(lang, '未选择', 'None'))}`
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
    customContent?: React.ReactNode
  ) => {
    const Icon = icon;
    const sectionLocked = isSectionLocked(sectionId);
    const actionButtonBase = 'flex h-6 w-6 items-center justify-center rounded border transition-all duration-200 group disabled:cursor-not-allowed disabled:opacity-40';
    const actionButtonIdle = isRetro
      ? 'border-transparent bg-transparent text-[#85411B]/58 hover:border-[#85411B]/36 hover:bg-[#85411B]/8 hover:text-[#85411B]'
      : 'border-transparent bg-zinc-900/45 text-zinc-500 hover:border-[var(--mist-active-accent)]/45 hover:bg-[var(--mist-active-accent)]/10 hover:text-[var(--mist-active-accent)]';
    const actionButtonLocked = isRetro
      ? 'border-[#85411B]/44 bg-[#85411B]/10 text-[#85411B]'
      : 'border-[var(--mist-active-accent)]/55 bg-[var(--mist-active-accent)]/10 text-[var(--mist-active-accent)]';
    const randomMotionId = `${sectionId}:random`;
    const clearMotionId = `${sectionId}:clear`;
    return (
      <section className={`mist-aesthetic-module mist-concept-source-module rounded-lg border transition-all duration-300 ${sectionLocked ? 'is-locked opacity-80' : ''} ${softPanelClass}`}>
        <div className={`mist-aesthetic-module-header flex min-h-[2.45rem] items-center justify-between gap-3 border-b px-3 py-2 ${isRetro ? 'border-[#85411B]/12' : 'border-white/[0.06]'}`}>
          <div className={paramsModuleTitleClass}>
            <Icon size={16} className={accentText} />
          <span className="truncate">{t(lang, title, titleEn)}</span>
          {sectionId === 'STYLE' && (
            <span className={paramsModuleCountClass}>
              {selectedCount(blockIds)}
            </span>
          )}
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            {extra}
            <div className="mist-aesthetic-action-buttons flex items-center gap-1 rounded-md border p-0.5">
              <button
                type="button"
                onClick={() => copySection(sectionId, title, titleEn, blockIds)}
                className={`mist-concept-action-copy ${actionButtonBase} ${copiedSectionId === sectionId ? actionButtonLocked : actionButtonIdle}`}
                title={t(lang, '复制本组', 'Copy Section')}
              >
                {copiedSectionId === sectionId ? <Check size={12} /> : <Copy size={12} />}
              </button>
              <button
                type="button"
                disabled={sectionLocked}
                onClick={() => {
                  randomizeBlocks(blockIds);
                  triggerActionMotion(randomMotionId);
                }}
                className={`mist-concept-action-random ${activeActionMotion === randomMotionId ? 'is-motioning' : ''} ${actionButtonBase} ${actionButtonIdle}`}
                title={t(lang, '随机本组', 'Randomize Section')}
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
            </div>
          </div>
        </div>
        {customContent || (
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 p-3 text-xs font-serif">
            {blockIds.map(slot)}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="mist-aesthetic-engine mist-concept-design-engine relative flex h-full w-full flex-col overflow-hidden bg-black">
      <div className="relative z-10 h-full overflow-y-auto custom-scrollbar xl:overflow-hidden">
        <div className="mx-auto flex min-h-full w-full max-w-[1880px] flex-col gap-4 px-4 py-4 pb-24 xl:h-full xl:min-h-0 xl:px-5 xl:pb-20">
          {conceptWorkspacePage === 'ENGINE' && (
          <div className="mist-concept-workbench min-h-0 xl:flex-1 xl:overflow-hidden">
            <div className="grid min-h-0 gap-3 xl:h-full xl:grid-cols-[minmax(420px,0.34fr)_minmax(0,1fr)]">
              <aside className="flex min-h-0 flex-col gap-3 xl:overflow-hidden">
                <section className={`shrink-0 rounded-lg border p-3 ${panelClass}`}>
                  <p className={`font-mono text-[11px] uppercase tracking-[0.24em] ${mutedText}`}>Mist Edict</p>
                  <h1 className={`mt-1.5 font-serif text-2xl font-black tracking-[0.04em] ${strongText}`}>
                    {t(lang, '迷雾律令', 'Mist Edict')}
                  </h1>
                </section>
                <div className="shrink-0">
                  {renderPromptTemplatePanel()}
                </div>
                <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 custom-scrollbar">
                  {renderSourceModePanel()}
                  {renderPhysicalMediumPanel()}
                  {renderWorldLawPanel()}
                  {renderBodyFormPanel()}
                  {renderTemplateQuickControlsPanel()}
                </div>
              </aside>

              <main className="min-h-0 xl:flex xl:flex-col xl:overflow-hidden">
                <section className={`shrink-0 rounded-lg border p-3 ${panelClass}`}>
                  <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-center">
                    <div className="min-w-0">
                      <p className={`font-mono text-[11px] uppercase tracking-[0.24em] ${mutedText}`}>{activeTemplateWorkspaceKicker}</p>
                      <h2 className={`mt-1.5 font-serif text-xl font-black tracking-[0.04em] ${strongText}`}>
                        {activeTemplateWorkspaceTitle}
                      </h2>
                    </div>
                    <div className="w-full xl:w-[360px]">
                      <div className={`mist-concept-source-mode-toggle mist-template-workspace-switch flex h-10 min-w-0 items-center gap-1 overflow-hidden rounded-md border p-0.5 ${miniSwitchClass}`}>
                        {[
                          { id: 'PARAMS' as TemplateWorkspaceView, label: '具体参数', labelEn: 'Params' },
                          { id: 'COMPILE' as TemplateWorkspaceView, label: '编译律令', labelEn: 'Compile' },
                          { id: 'PROMPT' as TemplateWorkspaceView, label: '终稿律令', labelEn: 'Final' }
                        ].map(item => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setTemplateWorkspaceView(item.id)}
                            className={`mist-concept-source-mode-button mist-template-workspace-switch-button flex h-8 min-w-0 flex-1 items-center justify-center rounded border px-3 text-[12px] font-black uppercase tracking-[0.06em] ${templateWorkspaceView === item.id ? 'is-active' : ''}`}
                          >
                            <span className="truncate">{t(lang, item.label, item.labelEn)}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex min-w-0 justify-start gap-2 xl:justify-end">
                      {templateWorkspaceView !== 'PARAMS' && (
                        <>
                          <button
                            type="button"
                            onClick={() => setPromptLang(prev => prev === 'CN' ? 'EN' : 'CN')}
                            className={`${compactTopActionButtonClass} justify-center`}
                          >
                            {promptLang === 'CN' ? '中文' : 'EN'}
                          </button>
                          <button
                            type="button"
                            onClick={templateWorkspaceView === 'COMPILE' ? copyCompileInstructionOutput : copyOutput}
                            className={`${compactTopActionButtonClass} justify-center`}
                          >
                            {copied ? <Check size={13} /> : <Copy size={13} />}
                            <span>{t(lang, '复制', 'Copy')}</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </section>
                <div ref={templateWorkspaceBodyRef} className="mist-template-workspace-body mt-3 min-h-0 xl:flex-1 xl:overflow-y-auto xl:pr-1 custom-scrollbar">
                  <div className={`mist-template-workspace-view mist-template-params-view ${templateWorkspaceView === 'PARAMS' ? 'space-y-3' : 'hidden'}`}>
                    {renderSlotSection(
                      '统摄模块',
                      'Governance',
                      'STYLE',
                      governanceBlocks,
                      Fingerprint,
                      undefined,
                      renderGovernanceController()
                    )}

                    {renderVisualStylePanel()}

                    {renderSlotSection(
                      '眼',
                      'Eye',
                      'STYLE',
                      activeMediaEyeBlocks,
                      Camera
                    )}

                    {renderSlotSection(
                      '本体细节',
                      'Ontology Detail',
                      'SUBJECT',
                      activeSubjectBlocks,
                      subjectMode === 'HUMAN' ? UserRound : Layers3,
                      renderObjectRouteGrid(),
                      renderSubjectSlots()
                    )}
                    {renderSlotSection(
                      '场',
                      'Stage',
                      'STYLE',
                      aestheticStageAuditBlocks,
                      Box
                    )}
                    {renderSlotSection(
                      '影',
                      'Vibe',
                      'STYLE',
                      aestheticLightAuditBlocks,
                      Lightbulb
                    )}
                    {renderSlotSection(
                      '法',
                      'Tech',
                      'STYLE',
                      aestheticRenderAuditBlocks,
                      Cpu
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
                  <div className={`mist-template-workspace-view mist-template-prompt-view ${templateWorkspaceView === 'PROMPT' ? 'block' : 'hidden'}`}>
                    {renderModulePromptPreviewPanel()}
                  </div>
                  <div className={`mist-template-workspace-view mist-template-compile-view ${templateWorkspaceView === 'COMPILE' ? 'block' : 'hidden'}`}>
                    {renderCompileInstructionPreviewPanel()}
                  </div>
                </div>
              </main>
            </div>
          </div>
          )}

          {(conceptWorkspacePage === 'VARIABLES' || conceptWorkspacePage === 'PROMPT') && (
          <main className={`min-h-0 rounded-lg border p-4 xl:flex xl:flex-1 xl:flex-col xl:overflow-hidden ${panelClass}`}>
            <div className="shrink-0">
              <p className={`font-mono text-[10px] uppercase tracking-[0.34em] ${mutedText}`}>Variable Assembly / Final Edict</p>
              <div className="mt-2 flex items-start justify-between gap-3">
                <div>
                  <h2 className={`font-serif text-2xl font-black tracking-[0.05em] ${strongText}`}>
                    {t(lang, '九变量 / 最终成型律令', 'Nine Variables / Final Edict')}
                  </h2>
                  <p className={`mt-1 text-[10px] leading-4 ${mutedText}`}>
                    {t(lang, '左侧编辑九变量，右侧实时查看本地拼装结果。', 'Edit the nine variables on the left and inspect the locally assembled prompt on the right.')}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPromptLang(prev => prev === 'CN' ? 'EN' : 'CN')}
                    className={topActionButtonClass}
                  >
                    {promptLang === 'CN' ? '中文' : 'EN'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLocalizedVariables(createEmptyLocalizedVariables());
                      setCopied(false);
                    }}
                    className={topActionButtonClass}
                  >
                    <RefreshCcw size={13} />
                    {t(lang, '清空', 'Clear')}
                  </button>
                  <button
                    type="button"
                    onClick={copyOutput}
                    className={topActionButtonClass}
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    <span>{t(lang, '复制', 'Copy')}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 grid min-h-0 flex-1 gap-4 xl:grid-cols-[minmax(260px,1fr)_minmax(0,2fr)]">
              <section className={`min-h-0 rounded-lg border p-3 xl:flex xl:flex-col xl:overflow-hidden ${softPanelClass}`}>
                <div className="mb-3 flex shrink-0 items-start justify-between gap-2">
                  <div>
                    <h3 className={`text-[14px] font-black uppercase tracking-[0.14em] ${strongText}`}>
                      {t(lang, '律令骨架', 'Edict Skeleton')}
                    </h3>
                    <p className={`mt-1.5 text-[11px] leading-5 ${mutedText}`}>
                      {t(lang, '左侧编号对应右侧模块，可临时关闭。', 'Numbers map to the right modules; toggle sections on or off.')}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDisabledPromptModuleIds([])}
                    className={`shrink-0 rounded-md border px-2.5 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] transition-colors ${
                      isRetro
                        ? 'border-[#85411B]/20 text-[#85411B] hover:bg-[#85411B]/8'
                        : 'border-white/[0.1] text-zinc-500 hover:border-orange-400/40 hover:text-orange-200'
                    }`}
                  >
                    {t(lang, '全开', 'All')}
                  </button>
                </div>
                <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1 custom-scrollbar">
                  {promptSections.map((section, index) => {
                    const enabled = enabledPromptSectionIds.includes(section.id);
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => togglePromptModule(section.id)}
                        className={`group w-full rounded-lg border p-2 text-left transition-all ${
                          enabled
                            ? isRetro
                              ? 'border-[#85411B]/22 bg-white/40'
                              : 'border-white/[0.1] bg-white/[0.045]'
                            : isRetro
                              ? 'border-[#85411B]/10 bg-white/16 opacity-55'
                              : 'border-white/[0.06] bg-black/20 opacity-50'
                        }`}
                        style={{
                          borderLeftColor: section.color,
                          borderLeftWidth: 4
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="flex h-6 w-8 shrink-0 items-center justify-center rounded-md font-mono text-[10px] font-black text-white shadow-sm"
                            style={{ backgroundColor: section.color }}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className={`min-w-0 flex-1 truncate text-[12px] font-black tracking-[0.06em] ${strongText}`}>
                            {t(lang, section.title, section.titleEn)}
                          </span>
                          {enabled ? <Unlock size={12} className={accentText} /> : <Lock size={12} className={mutedText} />}
                        </div>
                        <p className={`mt-1.5 line-clamp-2 pl-10 text-[11px] leading-5 ${mutedText}`}>
                          {section.text.replace(/\s+/g, ' ').slice(0, 92)}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section className={`hidden min-h-0 rounded-lg border p-3 xl:flex xl:flex-col xl:overflow-hidden ${softPanelClass}`}>
                  <div className="mb-3 shrink-0">
                  <h3 className={`text-[11px] font-black uppercase tracking-[0.18em] ${strongText}`}>
                    {t(lang, '九变量拼装台', 'Nine-Slot Board')}
                  </h3>
                </div>
                <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 custom-scrollbar">
                  {activeVariableMeta.map(meta => (
                    <section key={meta.key} className={`rounded-lg border p-3 ${softPanelClass}`}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div>
                          <h4 className={`text-[10px] font-black uppercase tracking-[0.18em] ${strongText}`}>
                            {t(lang, meta.label, meta.labelEn)}
                          </h4>
                          <p className={`mt-1 text-[9px] leading-4 ${mutedText}`}>{t(lang, meta.hint, meta.hintEn)}</p>
                        </div>
                        <Lock size={12} className={mutedText} />
                      </div>
                      <textarea
                        value={variables[meta.key]}
                        onChange={(event) => updateVariable(meta.key, event.target.value)}
                        className={`min-h-[88px] w-full resize-none rounded-md border px-3 py-2 text-xs leading-6 outline-none ${inputClass}`}
                      />
                    </section>
                  ))}
                </div>
              </section>

              <section className={`min-h-0 rounded-lg border p-3 xl:flex xl:flex-col xl:overflow-hidden ${softPanelClass}`}>
                <div className="mb-3 flex shrink-0 items-start justify-between gap-3">
                  <div>
                    <h3 className={`text-[11px] font-black uppercase tracking-[0.18em] ${strongText}`}>
                      {t(lang, '模块化最终律令', 'Modular Final Edict')}
                    </h3>
                    <p className={`mt-1 text-[9px] leading-4 ${mutedText}`}>
                      {t(lang, '每块都对应左侧编号，复制时只复制已开启模块。', 'Each block maps to the left list; copy exports enabled modules only.')}
                    </p>
                  </div>
                  <span className={`shrink-0 rounded-md border px-2 py-1 font-mono text-[9px] font-black uppercase tracking-[0.12em] ${
                    isRetro ? 'border-[#85411B]/16 text-[#85411B]/70' : 'border-white/[0.08] text-zinc-500'
                  }`}>
                    {visiblePromptSections.length}/{promptSections.length}
                  </span>
                </div>
                <div className={`min-h-[420px] flex-1 overflow-y-auto rounded-lg border p-3 custom-scrollbar ${isRetro ? 'border-[#85411B]/16 bg-white/34' : 'border-white/[0.08] bg-black/25'}`}>
                  <div className="space-y-3">
                    {visiblePromptSections.map((section, index) => {
                      const originalIndex = promptSections.findIndex(item => item.id === section.id);
                      const active = activePromptSection?.id === section.id;
                      return (
                        <article
                          key={section.id}
                          ref={(node) => { promptSectionRefs.current[section.id] = node; }}
                          className={`mist-template-prompt-section overflow-hidden rounded-lg border ${
                            active
                              ? isRetro
                                ? 'bg-white/58'
                                : 'bg-white/[0.035]'
                              : isRetro
                                ? 'bg-white/50'
                                : 'bg-black/20'
                          }`}
                          style={{
                            borderColor: promptSectionSubtleBorderColor,
                            borderLeftColor: section.color,
                            borderLeftWidth: 5
                          }}
                          onClick={() => setActivePromptSectionId(section.id)}
                        >
                          <div className={`flex items-center gap-2 border-b px-3 py-2 ${
                            isRetro ? 'border-[#85411B]/10' : 'border-white/[0.06]'
                          }`}>
                            <span
                              className="flex h-6 w-8 shrink-0 items-center justify-center rounded-md font-mono text-[10px] font-black text-white shadow-sm"
                              style={{ backgroundColor: section.color }}
                            >
                              {String(originalIndex + 1 || index + 1).padStart(2, '0')}
                            </span>
                            <h4 className={`min-w-0 flex-1 truncate text-[10px] font-black uppercase tracking-[0.14em] ${strongText}`}>
                              {t(lang, section.title, section.titleEn)}
                            </h4>
                          </div>
                          <pre className={`whitespace-pre-wrap px-3 py-3 font-mono text-[13px] leading-7 ${isRetro ? 'text-[#24170f]' : 'text-orange-50'}`}>
                            {section.text}
                          </pre>
                        </article>
                      );
                    })}
                    {visiblePromptSections.length === 0 && (
                      <div className={`flex min-h-[220px] items-center justify-center rounded-lg border border-dashed text-[11px] ${isRetro ? 'border-[#85411B]/20 text-[#85411B]/60' : 'border-white/[0.12] text-zinc-500'}`}>
                        {t(lang, '所有模块都已关闭。', 'All modules are disabled.')}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </main>
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
          customLibraryData={getFilteredLibraryDataForBlock(activeBlockId)}
          isAdmin={isAdmin}
          onAddCustomDef={handleAddConceptCustomItem}
        />
      )}
      {isSpacetimeModalOpen && createPortal(renderSpacetimeModal(), document.body)}
      {isPromptTemplateLibraryOpen && createPortal(renderPromptTemplateLibraryModal(), document.body)}
    </div>
  );
};
