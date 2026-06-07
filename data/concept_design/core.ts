import { LibraryCategoryDef, LibraryItemDef, NarrativeBlockDef } from '../../types';
import { AES_SKIN_TEXTURE } from '../aesthetic_libraries/subject_skin';
import { AES_SPECIES } from '../aesthetic_libraries/subject_identity';
import {
  AES_CREATURE_ACTION,
  AES_CREATURE_BODY,
  AES_CREATURE_CLASS,
  AES_CREATURE_ELEMENT,
  AES_CREATURE_HEAD,
  AES_CREATURE_MOOD,
  AES_CREATURE_SIZE,
  AES_CREATURE_TEXTURE
} from '../aesthetic_libraries/subject_creature';
import { AES_COLOR_PRESETS } from '../aesthetic_libraries/color_presets';
import {
  AES_ANGLE,
  AES_DEPTH,
  AES_FOCAL_LENGTH,
  AES_IMAGE_FOCUS,
  AES_LENS_FX,
  AES_OPTICAL_FORMAT,
  AES_PERSPECTIVE,
  AES_SHOT_SIZE,
  AES_SHUTTER,
  AES_VISUAL_BALANCE
} from '../aesthetic_libraries/layer1_lens';
import {
  AES_ART_MEDIUM,
  AES_BASE_TONE,
  AES_CAMERA_SYSTEM,
  AES_CANVAS_TEXTURE,
  AES_COLOR_SCIENCE,
  AES_LENS_SERIES,
  AES_LINE_QUALITY,
  AES_PHYSICAL_GRAIN,
  AES_TEXTURE_RENDER
} from '../aesthetic_libraries/layer1_1_fixed';
import { AES_RENDER_ART, AES_RENDER_REAL } from '../aesthetic_libraries/layer5_tech';
import { DIRECTOR_STYLE_ITEMS } from '../aesthetic_libraries/director_styles_split';
import { PHOTO_STYLE_ITEMS } from '../aesthetic_libraries/photography_styles_split';
import { ART_STYLE_ITEMS } from '../aesthetic_libraries/art_styles_split';
import { ANIMATION_DIRECTORS_LIB, ART_MOVEMENTS_LIB } from '../aesthetic_libraries/stylized_references';
import { SUR2_DATA } from '../engine_surface/SUR2';
import { SUR3_COORDINATE_PRESETS, SUR3_SPACE_ANCHORS } from '../engine_surface/SUR3';
import { CONCEPT_MEDIA_STYLE_LIBRARIES } from './mediaStyle';
import { CD_SHOT_PRESETS } from './shotPresets';
import { STYLE_PROTOCOL_ITEMS } from './style_protocols';
import { CD_ATMOSPHERE, CD_PARTICLES } from './field/environment_state';
import { withFieldPresetMeta } from './field/fieldPresetMeta';
import { CD_LIGHT_DIRECTION, CD_LIGHT_MOOD, CD_LIGHT_SHAPE, CD_LIGHT_TYPE } from './field/lighting';
import { withLightingMeta } from './field/lightingMeta';
import { CD_SCENE_ABSTRACT } from './field/space_abstract';
import { CD_SCENE_REAL } from './field/space_real';
import { CD_SCENE_SURREAL } from './field/space_surreal';
import {
  CD_ADULT_GLAMOUR_BODY,
  CD_BEARD_STYLE,
  CD_BODY_DAMAGE,
  CD_BODY_FEATURES,
  CD_BODY_MARKINGS,
  CD_BODY_MODIFICATION,
  CD_COSTUME_EXECUTION,
  CD_DYNAMIC_ACTION,
  CD_PROP_ANCHORS,
  CD_HUMAN_BEHAVIOR,
  CD_SYMBOL_SYSTEMS,
  CD_AGE_TEXTURE,
  CD_BODY_SILHOUETTE,
  CD_EYE_COLOR,
  CD_EYE_MUTATION,
  CD_EYE_SHAPE,
  CD_EMOTIONAL_CORE,
  CD_EXPRESSION,
  CD_FACE_FEATURES,
  CD_GENDER_AURA,
  CD_HAIR_COLOR,
  CD_HAIR_STYLE_FEM,
  CD_HAIR_STYLE_MASC,
  CD_MAKEUP_STYLE,
  CD_OCCUPATION,
  CD_REAL_ETHNICITY,
  CD_SKIN_MATERIAL,
  CD_SOCIAL_AESTHETIC_INTERFACE,
  CD_STATIC_POSE,
  CD_SURFACE_STATE
} from './human/base';
import { CD_PERSONA_LIBRARY } from './human/persona';
import { withFaceAxisMeta } from './human/faceAxisMeta';
import { withFaceExpressionAxisMeta } from './human/faceExpressionAxisMeta';
import { withGroomingAxisMeta } from './human/groomingAxisMeta';
import { withAppearanceThreeAxisMeta } from './human/appearanceThreeAxisMeta';
import { withPersonaAxisMeta } from './human/personaAxisMeta';
import { withSubjectAxisMeta } from './human/subjectAxisMeta';
import { withVisibleBodyCoreAxisMeta } from './human/visibleBodyCoreAxisMeta';
import { withVisibleBodyAxisMeta } from './human/visibleBodyAxisMeta';
import { withActionAxisMeta } from './human/actionAxisMeta';
import { withDesignEvidenceAxisMeta } from './human/designEvidenceAxisMeta';
export { CONCEPT_STYLE_PROTOCOL_LIBRARIES, CONCEPT_STYLE_PROTOCOL_ROUTES } from './style_protocols';
export {
  CONCEPT_ATOM_MODULE_REGISTRY,
  CONCEPT_BACKGROUND_MEDIA_MODULE_REGISTRY,
  CONCEPT_MAPPING_PRESET_REGISTRY,
  CONCEPT_MODULE_REGISTRY,
  FULL_CONCEPT_MODULE_REGISTRY,
  getConceptModuleRegistryByFamily,
  getConceptModuleRegistryByLayer,
  getConceptModuleRegistryEntry
} from './source/moduleRegistry';
export type {
  ConceptCompilePolicy,
  ConceptDataKind,
  ConceptModuleRegistryEntry,
  ConceptRandomPolicy,
  ConceptSourceLayer,
  ConceptTemplateRoute
} from './source/moduleRegistry';

const textFromLibraryText = (value: LibraryItemDef['def'] | LibraryItemDef['directive']): string => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return [value.bright, value.dark, value.tension].filter(Boolean).join(' / ');
};

const genreMatchers: Array<[tag: string, keys: readonly string[]]> = [
  ['real_professional', ['职业', '工牌', '医院', '医生', '护士', '教师', '工程', '维修', 'office', 'doctor', 'nurse', 'engineer', 'worker', 'institutional', 'workflow']],
  ['urban_life', ['都市', '城市', '街头', '夜场', '酒吧', '咖啡', '地铁', '快递', 'street', 'urban', 'city', 'bar', 'cafe', 'subway']],
  ['noir_crime', ['侦探', '黑帮', '警探', '罪案', '走私', '地下', 'assassin', 'detective', 'noir', 'crime', 'mafia', 'smuggler']],
  ['wuxia', ['武侠', '江湖', '门派', '弟子', '剑客', '侠客', '游侠', 'wuxia', 'jianghu', 'sect', 'martial']],
  ['xianxia', ['仙侠', '修仙', '灵根', '符箓', '飞剑', '法器', 'xianxia', 'cultivation', 'immortal', 'talisman']],
  ['fantasy', ['奇幻', '魔法', '王国', '骑士', '龙', '精灵', 'fantasy', 'magic', 'kingdom', 'knight', 'dragon', 'elf']],
  ['dark_fantasy', ['黑暗', '诅咒', '恶魔', '墓穴', '神殿', '禁忌', 'dark fantasy', 'curse', 'demon', 'tomb', 'temple', 'taboo']],
  ['mythic_epic', ['神话', '史诗', '诸神', '圣物', '祭坛', 'mythic', 'epic', 'deity', 'relic', 'altar']],
  ['religious_ritual', ['宗教', '祭司', '修士', '修女', '神圣', '封印', '神殿', '寺庙', '教堂', 'priest', 'monk', 'nun', 'chaplain', 'sacred', 'seal', 'temple', 'church']],
  ['war_military', ['战争', '军队', '士兵', '佣兵', '护甲', '战斗', 'battlefield', 'military', 'soldier', 'mercenary', 'armor', 'combat']],
  ['science_fiction', ['科幻', '实验室', '机器人', '义体', '全息', '未来', 'sci-fi', 'science', 'robot', 'android', 'hologram', 'future']],
  ['cyberpunk', ['赛博', '义体', '接口', '霓虹', '黑客', '数据', 'cyber', 'interface', 'neon', 'hacker', 'data']],
  ['space_opera', ['太空', '宇宙', '星舰', '殖民地', '空间站', '异星', 'outer space', 'cosmic', 'starship', 'colony', 'space station', 'alien planet']],
  ['biopunk', ['生物', '菌丝', '突变', '实验体', '样本', '隔离', 'bio', 'mycelium', 'mutation', 'specimen', 'quarantine']],
  ['wasteland', ['废土', '末世', '拾荒', '污染', '修补', '荒原', 'wasteland', 'post-apocalyptic', 'scavenger', 'pollution', 'survival']],
  ['horror', ['恐怖', '鬼', '尸', '疫病', '噩梦', '惊悚', 'horror', 'ghost', 'undead', 'plague', 'nightmare', 'thriller']],
  ['surreal', ['超现实', '梦境', '阈限', '虚空', '镜像', '抽象', 'surreal', 'dream', 'liminal', 'void', 'mirror', 'abstract']],
  ['fashion_idol', ['时尚', '偶像', '秀场', '模特', '高定', '明星', 'fashion', 'idol', 'runway', 'model', 'couture']],
  ['historical', ['历史', '古代', '宫廷', '帝国', '贵族', '王朝', 'historical', 'ancient', 'court', 'empire', 'aristocracy', 'dynasty']],
  ['romance', ['爱情', '恋人', '亲密', '告白', 'romance', 'lover', 'intimate', 'confession']],
  ['ecological', ['森林', '湿地', '生态', '自然', '植物', '水下', 'forest', 'wetland', 'ecology', 'natural', 'plant', 'underwater']]
];

const cultureMatchers: Array<[tag: string, keys: readonly string[]]> = [
  ['chinese_jianghu', ['江湖', '门派', '锦衣卫', '飞鱼服', '绣春刀', '武侠', 'wuxia', 'sect']],
  ['east_asian_historical', ['东亚', '古风', '衙门', '庙祝', '祠堂', '明朝', '唐代', '宋代', '汉服', 'hanfu']],
  ['east_asian_modern', ['东京', '首尔', '东亚都市', '便利店', '地铁', '霓虹街', 'japanese urban', 'tokyo', 'seoul']],
  ['japanese_urban', ['日本', '东京', '涉谷', '新宿', 'jk', '便利店', 'japanese', 'tokyo', 'shibuya']],
  ['western_court', ['英伦', '欧洲宫廷', '维多利亚', '贵族', '纹章', '骑士', 'western court', 'victorian', 'aristocracy', 'heraldry']],
  ['western_modern', ['欧美', '美式', '英伦现代', 'western', 'american', 'european modern']],
  ['global_corporate', ['企业', '公司', '办公', '工牌', '商务', '全球化', 'corporate', 'office', 'badge', 'business']],
  ['institutional_modern', ['医院', '学校', '法院', '银行', '警局', '档案', 'hospital', 'school', 'court', 'bank', 'police', 'archive']],
  ['imperial_bureaucracy', ['帝国', '官僚', '宫廷', '监察', '衙门', '官服', 'imperial', 'bureaucracy', 'court']],
  ['religious_order', ['宗教', '祭司', '修士', '修女', '神殿', '寺庙', '教堂', 'priest', 'monk', 'nun', 'chaplain', 'temple', 'church', 'shrine']],
  ['mountain_monastery', ['山门', '山寺', '修行', '寺院', '道观', 'monastery', 'mountain temple']],
  ['frontier_town', ['边境', '边陲', '驿站', '荒镇', 'frontier', 'outpost']],
  ['cyber_megacity', ['赛博都市', '巨型城市', '霓虹', '全息广告', 'cyber', 'megacity', 'neon']],
  ['posthuman_city', ['后人类', '义体城市', '数据社会', 'posthuman', 'interface society']],
  ['postapocalyptic_wasteland', ['废土', '末世', '拾荒', '避难所', '荒原', 'wasteland', 'post-apocalyptic', 'shelter']],
  ['industrial_ruin', ['工厂', '工业废墟', '矿井', '船厂', 'factory', 'industrial ruin', 'mine', 'shipyard']],
  ['biotech_lab', ['生物实验室', '培养皿', '样本', '隔离', 'biotech', 'specimen', 'quarantine']],
  ['ecological_wild', ['森林', '湿地', '生态', '洞穴', '雨林', 'forest', 'wetland', 'ecology', 'cave', 'jungle']],
  ['space_colony', ['太空殖民', '空间站', '星舰', '殖民地', 'space colony', 'space station', 'starship']],
  ['alien_ecology', ['异星', '外星生态', 'alien planet', 'alien ecology']],
  ['dream_psychic', ['梦境', '阈限', '心理空间', '镜像', 'dream', 'liminal', 'psychic', 'mirror']],
  ['symbolic_stage', ['舞台', '剧场', '仪式台', '抽象空间', 'stage', 'theater', 'symbolic']]
];

const spaceMatchers: Array<[tag: string, keys: readonly string[]]> = [
  ['interior', ['室内', '房间', '内景', 'interior', 'room']],
  ['street', ['街道', '巷', '路边', '街头', 'street', 'alley', 'roadside']],
  ['city', ['城市', '都市', '城区', 'city', 'urban']],
  ['office', ['办公室', '办公', 'office']],
  ['hospital', ['医院', '病房', '急诊', '手术室', 'hospital', 'ward', 'emergency room']],
  ['lab', ['实验室', '洁净室', '样本室', 'lab', 'laboratory', 'cleanroom']],
  ['factory', ['工厂', '车间', '厂房', 'factory', 'workshop']],
  ['school', ['学校', '教室', '校园', 'school', 'classroom', 'campus']],
  ['palace', ['宫殿', '宫廷', '王宫', 'palace', 'court']],
  ['temple', ['神殿', '寺庙', '祭坛', '道观', 'temple', 'altar', 'shrine']],
  ['archive', ['档案', '书库', '图书馆', 'archive', 'library']],
  ['prison', ['牢狱', '监狱', '囚室', 'prison', 'cell']],
  ['market', ['市场', '集市', '摊位', 'market', 'bazaar']],
  ['bar', ['酒吧', '夜店', 'club', 'bar']],
  ['subway', ['地铁', '地下站', 'subway', 'metro']],
  ['mountain', ['山', '山林', '悬崖', 'mountain', 'cliff']],
  ['forest', ['森林', '林地', 'forest', 'woods']],
  ['wetland', ['湿地', '沼泽', 'wetland', 'swamp']],
  ['desert', ['沙漠', '荒漠', 'desert']],
  ['cave', ['洞穴', '地窟', 'cave', 'cavern']],
  ['ruin', ['废墟', '遗迹', 'ruin', 'relic site']],
  ['battlefield', ['战场', '前线', 'battlefield', 'frontline']],
  ['road', ['公路', '道路', 'road', 'highway']],
  ['space_station', ['空间站', '太空站', 'space station']],
  ['spaceship', ['星舰', '飞船', 'spaceship', 'starship']],
  ['alien_planet', ['异星', '外星地表', 'alien planet']],
  ['cosmic', ['宇宙', '星云', '深空', 'cosmic', 'nebula', 'deep space']],
  ['abstract', ['抽象', '虚空', 'void', 'abstract']],
  ['liminal', ['阈限', '过渡空间', 'liminal', 'threshold']]
];

const genreRoleByBlock: Record<string, string[]> = {
  cd_occupation: ['identity', 'institution'],
  cd_persona: ['identity', 'persona'],
  cd_style_protocol_primary: ['form_protocol'],
  cd_style_protocol_secondary: ['form_protocol'],
  cd_costume_logic: ['costume'],
  cd_costume_system: ['costume'],
  cd_prop_anchor: ['prop'],
  cd_symbol_system: ['symbol', 'institution'],
  cd_body_modification: ['body', 'technology'],
  cd_body_features: ['body', 'ontology'],
  cd_body_markings: ['body', 'symbol'],
  cd_creature_class: ['creature'],
  cd_creature_element: ['creature', 'ontology'],
  cd_creature_head: ['creature', 'body'],
  cd_creature_body: ['creature', 'body'],
  cd_creature_texture: ['creature', 'material'],
  cd_field_preset: ['field'],
  cd_scene_real: ['field', 'scene'],
  cd_scene_surreal: ['field', 'scene'],
  cd_scene_abstract: ['field', 'scene'],
  cd_atmosphere: ['field_detail'],
  cd_particles: ['field_detail'],
  cd_light_type: ['light_source']
};

const cultureRoleByBlock: Record<string, string[]> = {
  cd_occupation: ['institution', 'labor_system'],
  cd_persona: ['identity', 'social_code'],
  cd_style_protocol_primary: ['costume', 'symbol'],
  cd_style_protocol_secondary: ['costume', 'symbol'],
  cd_costume_logic: ['costume'],
  cd_costume_system: ['costume'],
  cd_prop_anchor: ['prop'],
  cd_symbol_system: ['symbol', 'language_sign', 'institution'],
  cd_body_markings: ['body_mark', 'ritual'],
  cd_body_modification: ['technology', 'body_interface'],
  cd_creature_class: ['creature_ecology'],
  cd_creature_element: ['creature_ecology'],
  cd_creature_head: ['creature_ecology'],
  cd_creature_body: ['creature_ecology'],
  cd_creature_texture: ['creature_ecology'],
  cd_spacetime_coordinate: ['coordinate'],
  cd_space_anchor_exact: ['coordinate', 'space'],
  cd_field_preset: ['field', 'institution', 'architecture'],
  cd_scene_real: ['space', 'architecture'],
  cd_scene_surreal: ['space', 'symbolic_field'],
  cd_scene_abstract: ['space', 'symbolic_field'],
  cd_atmosphere: ['environment'],
  cd_particles: ['environment'],
  cd_light_type: ['light_source']
};

const matchSemanticTags = (item: LibraryItemDef, matchers: Array<[string, readonly string[]]>): string[] => {
  const sourceParts = [
    item.name,
    item.nameEn,
    item.group,
    item.groupEn,
    item.def,
    item.defEn,
    item.core,
    item.coreEn
  ].filter(Boolean).map(value => String(value).toLowerCase());
  const text = sourceParts.join(' ');
  const hasKey = (key: string) => {
    const normalizedKey = key.toLowerCase();
    if (/^[a-z0-9][a-z0-9_\s-]*[a-z0-9]$/i.test(normalizedKey)) {
      const escaped = normalizedKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
      return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i').test(text);
    }
    return text.includes(normalizedKey);
  };
  return matchers
    .filter(([, keys]) => keys.some(hasKey))
    .map(([tag]) => tag);
};

const deriveGenreTags = (item: LibraryItemDef): string[] => {
  return matchSemanticTags(item, genreMatchers);
};

const withGenreAxisMeta = (
  blockId: string,
  item: LibraryItemDef,
  fallbackStrictness: LibraryItemDef['genreStrictness'] = 'soft',
  options: { deriveSemanticTags?: boolean } = {}
): LibraryItemDef => {
  const shouldDeriveSemanticTags = options.deriveSemanticTags !== false;
  const excludedGenreTags = new Set((item.excludeGenreTags || []).map(value => value.toLowerCase()));
  const genreTags = [...new Set([...(item.genreTags || []), ...(shouldDeriveSemanticTags ? deriveGenreTags(item) : [])])]
    .filter(value => !excludedGenreTags.has(value.toLowerCase()));
  const genreRole = [...new Set([...(item.genreRole || []), ...(genreRoleByBlock[blockId] || [])])];
  const cultureTags = [...new Set([...(item.cultureTags || []), ...(shouldDeriveSemanticTags ? matchSemanticTags(item, cultureMatchers) : [])])];
  const cultureRole = [...new Set([...(item.cultureRole || []), ...(cultureRoleByBlock[blockId] || [])])];
  const spaceTags = [...new Set([...(item.spaceTags || []), ...(shouldDeriveSemanticTags ? matchSemanticTags(item, spaceMatchers) : [])])];
  if (genreTags.length === 0 && genreRole.length === 0 && cultureTags.length === 0 && cultureRole.length === 0 && spaceTags.length === 0) return item;
  return {
    ...item,
    ...(genreTags.length > 0 ? { genreTags } : {}),
    genreRole,
    ...(item.genreStrictness || genreTags.length > 0 ? { genreStrictness: item.genreStrictness || fallbackStrictness } : {}),
    genreTranslation: item.genreTranslation || '若类型不完全匹配，优先把它折译为身份证据、服装接口、道具功能、局部制度痕迹或场景压力，不强行替换本次画面的主类型。',
    genreTranslationEn: item.genreTranslationEn || 'If the genre does not fully match, translate it first into identity evidence, costume interface, prop function, local institutional trace, or scene pressure instead of replacing the main genre.',
    ...(cultureTags.length > 0 ? { cultureTags } : {}),
    cultureRole,
    ...(item.cultureStrictness || cultureTags.length > 0 ? { cultureStrictness: item.cultureStrictness || fallbackStrictness } : {}),
    cultureTranslation: item.cultureTranslation || '若文化场域不完全匹配，优先保留制度关系、服装轮廓、纹章/文字、礼仪动作、道具功能或建筑材料，不硬搬原文化符号。',
    cultureTranslationEn: item.cultureTranslationEn || 'If the cultural field does not fully match, keep institutional relations, costume silhouette, heraldry/text, ritual gesture, prop function, or architectural material instead of copying the original cultural sign literally.',
    ...(spaceTags.length > 0 ? { spaceTags } : {})
  };
};

const withGenreAxisForBlock = (blockId: string, items: LibraryItemDef[], strictness: LibraryItemDef['genreStrictness'] = 'soft') => (
  items.map(item => withGenreAxisMeta(blockId, item, strictness))
);

const withManualGenreAxisForBlock = (blockId: string, items: LibraryItemDef[], strictness: LibraryItemDef['genreStrictness'] = 'soft') => (
  items.map(item => withGenreAxisMeta(blockId, item, strictness, { deriveSemanticTags: false }))
);

const mergeAxisDefaults = (item: LibraryItemDef, patch: Partial<LibraryItemDef>): LibraryItemDef => ({
  ...item,
  ...patch,
  compatibleEras: [...new Set([...(item.compatibleEras || []), ...(item.eras || []), ...(patch.compatibleEras || [])])],
  realityTags: [...new Set([...(item.realityTags || []), ...(patch.realityTags || [])])],
  tags: [...new Set([...(item.tags || []), ...(patch.tags || [])])]
});

const creatureAxisDefaultsByBlock: Record<string, Partial<LibraryItemDef>> = {
  cd_creature_size: {
    compatibleEras: ['timeless'],
    realityTags: ['creature_scale', 'non_realist'],
    ontologyLevel: 3,
    tags: ['creature_axis']
  },
  cd_creature_class: {
    compatibleEras: ['primitive', 'mythic', 'feudal', 'near_future', 'far_future', 'timeless'],
    realityTags: ['biological', 'creature', 'non_realist'],
    ontologyLevel: 4,
    tags: ['creature_axis']
  },
  cd_creature_element: {
    compatibleEras: ['mythic', 'near_future', 'far_future', 'timeless'],
    realityTags: ['elemental', 'magical', 'speculative', 'non_realist'],
    ontologyLevel: 4,
    tags: ['creature_axis']
  },
  cd_creature_head: {
    compatibleEras: ['mythic', 'near_future', 'far_future', 'timeless'],
    realityTags: ['biological', 'creature', 'body_mutation', 'non_realist'],
    ontologyLevel: 4,
    tags: ['creature_axis']
  },
  cd_creature_body: {
    compatibleEras: ['primitive', 'mythic', 'near_future', 'far_future', 'timeless'],
    realityTags: ['biological', 'creature', 'body_mutation', 'non_realist'],
    ontologyLevel: 4,
    tags: ['creature_axis']
  },
  cd_creature_mood: {
    compatibleEras: ['timeless'],
    realityTags: ['creature_behavior', 'biological'],
    ontologyLevel: 2,
    tags: ['creature_axis']
  },
  cd_creature_action: {
    compatibleEras: ['timeless'],
    realityTags: ['creature_behavior', 'biological'],
    ontologyLevel: 2,
    tags: ['creature_axis']
  },
  cd_creature_texture: {
    compatibleEras: ['primitive', 'mythic', 'near_future', 'far_future', 'timeless'],
    realityTags: ['biological', 'creature_material', 'physical_texture'],
    ontologyLevel: 3,
    tags: ['creature_axis']
  }
};

const withCreatureAxisDefaults = (blockId: string, items: LibraryItemDef[]) => (
  items.map(item => mergeAxisDefaults(item, creatureAxisDefaultsByBlock[blockId] || {}))
);

const universalHumanStateAxis: Partial<LibraryItemDef> = {
  compatibleEras: ['timeless'],
  realityTags: ['reality_neutral'],
  ontologyLevel: 1,
  tags: ['simple_axis_universal']
};

const physicalMaterialAxis: Partial<LibraryItemDef> = {
  compatibleEras: ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  realityTags: ['physical', 'physical_texture'],
  ontologyLevel: 1,
  tags: ['simple_axis_material']
};

const withSimpleAxisDefaults = (items: LibraryItemDef[], patch: Partial<LibraryItemDef>) => (
  items.map(item => mergeAxisDefaults(item, patch))
);

const identityAnchorAxisPatchById: Record<string, Partial<LibraryItemDef>> = {
  cd_anchor_jinyiwei: {
    compatibleEras: ['feudal', 'early_modern'],
    realityTags: ['historical', 'physical', 'imperial_order'],
    ontologyLevel: 1
  },
  cd_anchor_court_assassin: {
    compatibleEras: ['slave', 'feudal', 'early_modern', 'timeless'],
    realityTags: ['historical', 'physical', 'court_order'],
    ontologyLevel: 1
  },
  cd_anchor_fashion_model: {
    compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'social', 'fashion_system'],
    ontologyLevel: 1
  },
  cd_anchor_stylist: {
    compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'social', 'fashion_system', 'professional'],
    ontologyLevel: 1
  },
  cd_anchor_doctor: {
    compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
    realityTags: ['realistic', 'medical_institution', 'professional'],
    ontologyLevel: 1
  },
  cd_anchor_mechanic: {
    compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
    realityTags: ['realistic', 'mechanical', 'professional'],
    ontologyLevel: 1
  },
  cd_anchor_priest: {
    compatibleEras: ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic', 'timeless'],
    realityTags: ['stylized', 'religious', 'ritual_social_order'],
    ontologyLevel: 2
  },
  cd_anchor_mercenary: {
    compatibleEras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
    realityTags: ['realistic', 'military', 'professional'],
    ontologyLevel: 1
  },
  cd_anchor_space_worker: {
    compatibleEras: ['near_future', 'far_future'],
    realityTags: ['speculative', 'technological', 'space_labor'],
    ontologyLevel: 3
  },
  cd_anchor_biotech_subject: {
    compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future'],
    realityTags: ['speculative', 'biological', 'medical_institution'],
    ontologyLevel: 3
  },
  cd_anchor_wuxia_disciple: {
    compatibleEras: ['feudal', 'early_modern', 'mythic'],
    realityTags: ['stylized', 'historical', 'martial_order'],
    ontologyLevel: 2
  },
  cd_anchor_scavenger: {
    compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
    realityTags: ['realistic', 'survival', 'postapocalyptic_material'],
    ontologyLevel: 1
  }
};

const withIdentityAnchorAxis = (items: LibraryItemDef[]) => (
  items.map(item => mergeAxisDefaults(item, identityAnchorAxisPatchById[item.id || ''] || {}))
);

export const CONCEPT_ENGINE_BLOCKS: NarrativeBlockDef[] = [
  { id: 'cd_spacetime_coordinate', name: '时空坐标', enName: 'TIME-SPACE', description: '时间轴、地理/文明坐标、技术边界和物理现实底座。', tags: [] },
  { id: 'cd_space_anchor_exact', name: '空间锚点', enName: 'SPACE ANCHOR', description: 'SUR3 精确坐标里的地理、文明、城市、生态、外太空、虚拟或维度空间锚。', tags: [] },
  { id: 'cd_time_anchor_exact', name: '时间锚点', enName: 'TIME ANCHOR', description: 'SUR3 精确坐标里的精确年份或时代锚。', tags: [] },
  { id: 'cd_field_preset', name: '场域预设', enName: 'FIELD PRESET', description: '从 SUR2 迁移而来的世界母体预设，提供制度、材料、危险和群体秩序。', tags: [] },
  { id: 'cd_style_protocol_primary', name: '主造型协议', enName: 'PRIMARY FORM PROTOCOL', description: '主导所有角色 / 主体细节解释方式的一整套概念造型理念。', tags: [] },
  { id: 'cd_style_protocol_secondary', name: '副造型协议', enName: 'SECONDARY FORM PROTOCOL', description: '用于跨场域融合的第二套角色 / 主体造型理念。', tags: [] },
  { id: 'cd_fusion_rule', name: '世界法则', enName: 'WORLD LAW', description: '裁决时空坐标、造型协议、本体细节之间的本体授权等级。', tags: [] },
  { id: 'cd_field_register', name: '世界场域', enName: 'WORLD FIELD', description: '现实、历史、职业、时尚、战斗、仪式、社会、科幻、奇幻或末世。', tags: [] },
  { id: 'cd_field_style_primary', name: '主场域风格', enName: 'PRIMARY FIELD STYLE', description: '当前世界场域下的具体风格向量，会影响所有可见细节。', tags: [] },
  { id: 'cd_field_style_secondary', name: '副场域风格', enName: 'SECONDARY FIELD STYLE', description: '用于混合或越界的第二场域风格向量。', tags: [] },
  { id: 'cd_subject_kind', name: '生成对象', enName: 'SUBJECT KIND', description: '人物、半异化人物、异种或机械生命。', tags: [] },
  { id: 'cd_identity_anchor', name: '身份锚点', enName: 'IDENTITY ANCHOR', description: '主体最基本的人设、职业、社会功能或神话职能。', tags: [] },
  { id: 'cd_world_register', name: '世界归属', enName: 'WORLD REGISTER', description: '人物所属的现实、历史、科幻、奇幻或社会世界。', tags: [] },
  { id: 'cd_identity_seed', name: '身份核心', enName: 'IDENTITY CORE', description: '主体的社会、神话或功能身份。', tags: [] },
  { id: 'cd_emotional_core', name: '情绪核', enName: 'EMOTIONAL CORE', description: '驱动形体和姿态的内部压力。', tags: [] },
  { id: 'cd_negation_logic', name: '异化逻辑', enName: 'NEGATION LOGIC', description: '主体如何从原型被否定并再生成。', tags: [] },
  { id: 'cd_design_translation', name: '设计转译', enName: 'DESIGN TRANSLATION', description: '把身份概念转译为服装、装备、纹样、剪影、道具和制度标记。', tags: [] },
  { id: 'cd_design_sheet', name: '图版格式', enName: 'SHEET FORMAT', description: '概念设计图的排版和展示方式。', tags: [] },

  { id: 'cd_age', name: '年龄质感', enName: 'AGE', description: '时间痕迹。', tags: [] },
  { id: 'cd_gender', name: '性别气质', enName: 'GENDER', description: '身体与呈现气质。', tags: [] },
  { id: 'cd_ethnicity', name: '现实血统', enName: 'REAL HERITAGE', description: '实在界身体来源：骨相、肤色、发质的大范围参考。', tags: [] },
  { id: 'cd_social_aesthetic', name: '国家/社会审美接口', enName: 'SOCIAL AESTHETIC', description: '意识形态编码：国家、媒体、阶层、妆发、平台和社会自我呈现。', tags: [] },
  { id: 'cd_species', name: '幻想种族', enName: 'SPECIES', description: '非现实种族原型。', tags: [] },
  { id: 'cd_occupation', name: '职业身份', enName: 'OCCUPATION', description: '岗位、劳动流程、机构权限、工具和职业姿态。', tags: [] },
  { id: 'cd_persona', name: '人设符号', enName: 'PERSONA SIGN', description: '亚文化、气质标签和可识别的人物符号。', tags: [] },

  { id: 'cd_body_type', name: '轮廓体态', enName: 'SILHOUETTE', description: '第一眼的形体识别。', tags: [] },
  { id: 'cd_hair_color', name: '发色', enName: 'HAIR COLOR', description: '发色或毛发色彩。', tags: [] },
  { id: 'cd_hair_style_f', name: '发型(女式)', enName: 'HAIRSTYLE FEM', description: '女性化发型语言。', tags: [] },
  { id: 'cd_hair_style_m', name: '发型(男式)', enName: 'HAIRSTYLE MASC', description: '男性化发型语言。', tags: [] },
  { id: 'cd_beard_style', name: '胡子', enName: 'BEARD', description: '胡须、络腮胡、小胡子和超现实面部毛发。', tags: [] },
  { id: 'cd_eye_color', name: '瞳色', enName: 'EYE COLOR', description: '虹膜颜色。', tags: [] },
  { id: 'cd_eye_shape', name: '眼型', enName: 'EYE SHAPE', description: '眼神形态。', tags: [] },
  { id: 'cd_eye_fx', name: '眼部异变', enName: 'EYE MUTATION', description: '特殊瞳孔或异常视觉器官。', tags: [] },
  { id: 'cd_face_features', name: '面部特征', enName: 'FACE FEATURES', description: '面部可识别细节。', tags: [] },
  { id: 'cd_makeup_style', name: '妆容修饰', enName: 'MAKEUP', description: '脸部妆容、彩绘和风格化修饰。', tags: [] },
  { id: 'cd_expression', name: '面部表情', enName: 'EXPRESSION', description: '情绪外化。', tags: [] },
  { id: 'cd_skin_texture', name: '皮肤本体', enName: 'SKIN MATERIAL', description: '皮肤自身的质地、年龄痕迹、色素和越界材质。', tags: [] },
  { id: 'cd_surface_state', name: '表面附着', enName: 'SURFACE STATE', description: '汗水、雨水、泥土、油污、血迹、粉尘等附着状态。', tags: [] },
  { id: 'cd_body_features', name: '异形结构', enName: 'ANOMALOUS STRUCTURE', description: '双头、多臂、非连续身体、异形下身等类人越界骨架。', tags: [] },
  { id: 'cd_body_markings', name: '身体标记', enName: 'BODY MARKINGS', description: '附着在身体上的纹身、烙印、刻印、仪式彩绘和身体身份痕迹。', tags: [] },
  { id: 'cd_body_damage', name: '身体损伤', enName: 'BODY DAMAGE', description: '旧伤、新伤、医疗修复和身体缺损。', tags: [] },
  { id: 'cd_body_modification', name: '身体改造', enName: 'BODY MODIFICATION', description: '义肢、赛博义体、生物越界和共生感染。', tags: [] },
  { id: 'cd_static_pose', name: '姿态语言', enName: 'POSE LANGUAGE', description: '概念展示姿态。', tags: [] },
  { id: 'cd_dynamic_action', name: '动态动作', enName: 'DYNAMIC ACTION', description: '运动、位移、冲击或身体动势。', tags: [] },
  { id: 'cd_human_behavior', name: '人类行为', enName: 'HUMAN BEHAVIOR', description: '经典、可读、低噪声的人类行为动作。', tags: [] },

  { id: 'cd_creature_size', name: '异种量级', enName: 'CREATURE SCALE', description: '生物尺度。', tags: [] },
  { id: 'cd_creature_class', name: '异种纲目', enName: 'CREATURE TAXONOMY', description: '生物分类。', tags: [] },
  { id: 'cd_creature_element', name: '元素属性', enName: 'ELEMENTAL TRAIT', description: '能量或物质属性。', tags: [] },
  { id: 'cd_creature_head', name: '头部结构', enName: 'HEAD STRUCTURE', description: '头部异变。', tags: [] },
  { id: 'cd_creature_body', name: '身体部件', enName: 'BODY PARTS', description: '肢体异变。', tags: [] },
  { id: 'cd_creature_mood', name: '异种情绪', enName: 'CREATURE MOOD', description: '非人情绪状态。', tags: [] },
  { id: 'cd_creature_action', name: '异种行为', enName: 'CREATURE BEHAVIOR', description: '本能动作或展示行为。', tags: [] },
  { id: 'cd_creature_texture', name: '异种材质', enName: 'CREATURE MATERIAL', description: '表皮和触感。', tags: [] },

  { id: 'cd_costume_logic', name: '服装执行逻辑', enName: 'COSTUME EXECUTION', description: '服装作为身体与世界之间的可穿戴接口：制服、束缚、仪式、负载、隐藏武装或活体披挂。', tags: [] },
  { id: 'cd_surface_material', name: '表面材料', enName: 'SURFACE MATERIAL', description: '概念设计里的材料系统。', tags: [] },
  { id: 'cd_costume_system', name: '服装系统', enName: 'COSTUME SYSTEM', description: '服装子系统的组织方式；它不统帅全局，只负责让身份、时代和风格具体穿在身体上。', tags: [] },
  { id: 'cd_material_evidence', name: '材料证据', enName: 'MATERIAL EVIDENCE', description: '材料、工艺、触感和世界规则留下的证据。', tags: [] },
  { id: 'cd_prop_anchor', name: '道具锚点', enName: 'PROP ANCHOR', description: '一个能解释角色功能的关键道具或携带物。', tags: [] },
  { id: 'cd_symbol_system', name: '符号系统', enName: 'SYMBOL SYSTEM', description: '服装、道具、机构、阵营、媒体和世界制度里的外部可读标识。', tags: [] },
  { id: 'cd_wear_trace', name: '损耗痕迹', enName: 'WEAR TRACE', description: '磨损、修补、污渍、战损或维护痕迹。', tags: [] },
  { id: 'cd_palette', name: '配色方案', enName: 'PALETTE', description: '角色资产配色。', tags: [] },

  { id: 'cd_director_style', name: '实拍导演风格', enName: 'DIRECTOR STYLE', description: '实拍影像的作者级观看方式，只作为风格参考，不替代主体内容。', tags: [] },
  { id: 'cd_photo_style', name: '摄影摄像流派', enName: 'PHOTO STYLE', description: '摄影、摄像和纪实观看流派。', tags: [] },
  { id: 'cd_art_style', name: '艺术流派', enName: 'ART STYLE', description: '艺术史、绘画流派和艺术家视觉语言。', tags: [] },
  { id: 'cd_anim_director', name: '动画导演风格', enName: 'ANIMATION DIRECTOR', description: '动画导演、工作室和动画图像语法。', tags: [] },
  { id: 'cd_art_movement', name: '美术插画', enName: 'ILLUSTRATION', description: '插画、漫画、游戏美术、概念美术和商业美术。', tags: [] },
  { id: 'cd_camera_system', name: '摄影机系统', enName: 'CAMERA SYSTEM', description: '摄影媒介下的机身、传感器、动态范围和捕捉方式。', tags: [] },
  { id: 'cd_lens_series', name: '镜头系列', enName: 'LENS SERIES', description: '摄影媒介下的镜头味道、散景、锐度和边缘特性。', tags: [] },
  { id: 'cd_optical_format', name: '光学格式', enName: 'OPTICAL FORMAT', description: '摄影媒介下的画幅、传感器和比例基准。', tags: [] },
  { id: 'cd_texture_render', name: '画面质感', enName: 'VISUAL TEXTURE', description: '影像表面、锐度、扩散、压缩、洁净度和渲染基准。', tags: [] },
  { id: 'cd_physical_grain', name: '物理颗粒', enName: 'PHYSICAL GRAIN', description: '胶片颗粒、数码噪点、录像噪声和材料化影像颗粒。', tags: [] },
  { id: 'cd_base_tone', name: '显影协议', enName: 'COLOR PROFILE', description: '底层反差、饱和度、动态范围和显影倾向。', tags: [] },
  { id: 'cd_color_science', name: '色彩科学', enName: 'COLOR SCIENCE', description: '胶片型号、LUT、Log、HDR 或色彩系统参考。', tags: [] },
  { id: 'cd_art_medium', name: '创作介质', enName: 'ART MEDIUM', description: '绘画媒介、上色方式和图像生成介质。', tags: [] },
  { id: 'cd_line_quality', name: '线条质量', enName: 'LINE QUALITY', description: '线条粗细、边缘、勾线、笔触和漫画化线性特征。', tags: [] },
  { id: 'cd_canvas_texture', name: '画布质感', enName: 'CANVAS TEXTURE', description: '纸面、画布、网点、印刷和底材肌理。', tags: [] },
  { id: 'cd_media_photo_soul', name: '摄影魂', enName: 'PHOTO SOUL', description: '摄影媒介下的作者/流派级视觉协议。', tags: [] },
  { id: 'cd_media_photo_quality', name: '摄影 L1.1 质', enName: 'PHOTO L1.1 QUALITY', description: '摄影捕捉质感、光色和影像材料。', tags: [] },
  { id: 'cd_media_photo_eye', name: '摄影旧眼', enName: 'PHOTO LEGACY EYE', description: '旧摄影观看参数，当前主入口已迁移到“拍摄协议预设”。', tags: [] },
  { id: 'cd_media_photo_craft', name: '摄影工艺', enName: 'PHOTO CRAFT', description: '冲印、扫描、修图和影像制作痕迹。', tags: [] },
  { id: 'cd_media_photo_format', name: '摄影展示格式', enName: 'PHOTO FORMAT', description: '摄影身份板或档案页展示方式。', tags: [] },
  { id: 'cd_media_paint_soul', name: '绘画魂', enName: 'PAINT SOUL', description: '绘画媒介下的作者/流派级视觉协议。', tags: [] },
  { id: 'cd_media_paint_quality', name: '绘画 L1.1 质', enName: 'PAINT L1.1 QUALITY', description: '绘画介质、线条、笔触和上色系统。', tags: [] },
  { id: 'cd_media_paint_eye', name: '绘画旧眼', enName: 'PAINT LEGACY EYE', description: '旧绘画观看参数，当前主入口已迁移到“拍摄协议预设”。', tags: [] },
  { id: 'cd_media_paint_craft', name: '绘画工艺', enName: 'PAINT CRAFT', description: '扫描、印刷、纸面、硬边阴影和笔触工艺。', tags: [] },
  { id: 'cd_media_paint_format', name: '绘画展示格式', enName: 'PAINT FORMAT', description: '绘画概念设计图展示方式。', tags: [] },
  { id: 'cd_media_cgi_soul', name: 'CGI风格', enName: 'CGI STYLE', description: 'CGI 媒介下的通用视觉风格。', tags: [] },
  { id: 'cd_media_tangible_soul', name: '实体风格', enName: 'TANGIBLE STYLE', description: '实体媒介下的通用手作、定格、雕塑、模型和特效风格。', tags: [] },
  { id: 'cd_shot_preset', name: '拍摄协议预设', enName: 'SHOOTING PROTOCOL PRESET', description: '模板式拍摄方案：控制画面如何被观看、主体站在哪里、场景如何接入、姿态和空间如何组织。', tags: [] },
  { id: 'cd_framing_focus', name: '画面焦点', enName: 'IMAGE FOCUS', description: '画面第一阅读重心：脸、身体、动作、环境、物件或形式。', tags: [] },
  { id: 'cd_framing_shot_size', name: '景别', enName: 'SHOT SIZE', description: '主体与观看距离。', tags: [] },
  { id: 'cd_framing_balance', name: '视觉平衡', enName: 'VISUAL BALANCE', description: '重心、对称性、负空间和画面秩序。', tags: [] },
  { id: 'cd_framing_perspective', name: '透视', enName: 'PERSPECTIVE', description: '空间几何、消失点和深度关系。', tags: [] },
  { id: 'cd_framing_angle', name: '拍摄角度', enName: 'CAMERA ANGLE', description: '观看高度、仰俯关系和镜头姿态。', tags: [] },
  { id: 'cd_framing_focal_length', name: '焦段', enName: 'FOCAL LENGTH', description: '视野范围、压缩感和空间畸变。', tags: [] },
  { id: 'cd_framing_depth', name: '景深/焦点', enName: 'DEPTH OF FIELD', description: '焦点范围、背景虚化和空间可读性。', tags: [] },
  { id: 'cd_framing_shutter', name: '快门', enName: 'SHUTTER', description: '动态凝固、拖影和运动模糊。', tags: [] },
  { id: 'cd_framing_lens_fx', name: '光学特效', enName: 'OPTICAL FX', description: '滤镜、眩光、漏光、折射、色散和光学瑕疵。', tags: [] },
  { id: 'cd_scene_real', name: '现实场景', enName: 'REAL SCENE', description: '可信物理场域和现实空间类型。', tags: [] },
  { id: 'cd_scene_surreal', name: '超现实场景', enName: 'SURREAL SCENE', description: '梦、神话、错位和非现实空间。', tags: [] },
  { id: 'cd_scene_abstract', name: '抽象场景', enName: 'ABSTRACT SCENE', description: '心理空间、图形空间和抽象背景。', tags: [] },
  { id: 'cd_atmosphere', name: '天气/大气', enName: 'ATMOSPHERE', description: '空气、天气、湿度、雾、烟、温度和宏观环境质感。', tags: [] },
  { id: 'cd_particles', name: '粒子', enName: 'PARTICLES', description: '尘埃、粉末、火星、雨点、雪粒和悬浮物。', tags: [] },
  { id: 'cd_light_mood', name: '光影基调', enName: 'LIGHTING MOOD', description: '总体明暗、冷暖、压迫感和光影观看关系。', tags: [] },
  { id: 'cd_light_type', name: '光源锚点', enName: 'LIGHT SOURCE ANCHOR', description: '画面主要由什么发光，以及这个发光来源在哪些时空中可以直接成立。', tags: [] },
  { id: 'cd_light_direction', name: '光投射方向', enName: 'LIGHT DIRECTION', description: '光源坐标、方向和投射关系。', tags: [] },
  { id: 'cd_light_shape', name: '光投影形状', enName: 'LIGHT SHAPE', description: '光斑、切光、阴影纹理和投影形态。', tags: [] },
  { id: 'cd_color_palette', name: '美术配色', enName: 'COLOR PALETTE', description: '画面整体配色关系。', tags: [] },
  { id: 'cd_render_real', name: '画质增强(写实)', enName: 'QUALITY REAL', description: '摄影、写实和真实材质的画质增强。', tags: [] },
  { id: 'cd_render_art', name: '画质增强(美术)', enName: 'QUALITY ART', description: '插画、绘画、动画和风格化图像的画质增强。', tags: [] },
  { id: 'cd_negative_rules', name: '禁用项', enName: 'NEGATIVE RULES', description: '防止回到电影镜头和复杂场景。', tags: [] },
  { id: 'cd_custom_seed', name: '自定义种子', enName: 'CUSTOM SEED', description: '追加主体设定。', tags: [] },
];

const subjectKindItems: LibraryItemDef[] = [
  { id: 'cd_kind_human', name: '人物概念设计 (human character concept design)', group: 'A. 人物', def: 'single original human character, design-focused, no scene narrative' },
  { id: 'cd_kind_mutant', name: '半异化人物 (partially mutated humanoid character)', group: 'A. 人物', def: 'human identity remains visible while body is transformed by a clear mutation logic' },
  { id: 'cd_kind_creature', name: '异种生物 (original creature design)', group: 'B. 异种', def: 'non-human creature, readable anatomy, original biological concept' },
  { id: 'cd_kind_deity', name: '神性实体 (numinous entity concept)', group: 'B. 异种', def: 'sacred or cosmic being with ritualized anatomy, not a cinematic god shot' },
  { id: 'cd_kind_machine', name: '机械生命 (synthetic biomechanical lifeform)', group: 'C. 机械', def: 'machine-organic hybrid with functional joints, panels, organs, and silhouette clarity' },
];

const fieldRegisterItems: LibraryItemDef[] = [
  { id: 'cd_field_realistic', name: '现实 (real-world field)', group: 'A. 人物场域', def: '当代现实、可信社会身份、日常材料、职业功能和生活痕迹作为全局约束。', defEn: 'contemporary real-world logic, credible social identity, everyday materials, occupational function, and life traces as global constraints' },
  { id: 'cd_field_historical', name: '历史 (historical field)', group: 'A. 人物场域', def: '时代服制、阶层秩序、工艺材料、礼法和历史工具作为全局约束。', defEn: 'period clothing, class order, craft materials, etiquette, and historical tools as global constraints' },
  { id: 'cd_field_professional', name: '职业 (professional field)', group: 'A. 人物场域', def: '机构、岗位、制服、工具、劳动痕迹和工作姿态作为全局约束。', defEn: 'institution, job role, uniform, tools, labor traces, and work posture as global constraints' },
  { id: 'cd_field_fashion', name: '时尚 (fashion field)', group: 'B. 审美制度', def: '剪影、材质、发型、配色、穿着制度和亚文化符号作为全局塑形力量。', defEn: 'silhouette, material, hair, palette, wearing system, and subculture signs as global shaping force' },
  { id: 'cd_field_combat', name: '战斗 (combat field)', group: 'C. 功能制度', def: '武装功能、等级、训练、负重、战损和安全需求作为全局约束。', defEn: 'combat function, rank, training, loadout, battle wear, and safety needs as global constraints' },
  { id: 'cd_field_ritual', name: '仪式 (ritual field)', group: 'C. 功能制度', def: '信仰秩序、圣物、禁忌、符号、法衣和仪式姿态作为全局约束。', defEn: 'belief order, relics, taboos, symbols, vestments, and ritual posture as global constraints' },
  { id: 'cd_field_social', name: '社会 (social field)', group: 'A. 人物场域', def: '阶级、边缘身份、服务劳动、伪装、礼仪和社会位置作为全局约束。', defEn: 'class, marginal status, service labor, performance, etiquette, and social position as global constraints' },
  { id: 'cd_field_scifi', name: '科幻 (sci-fi field)', group: 'D. 推演世界', def: '技术制度、可穿戴设备、编号、合成材料、未来城市或殖民地规则作为全局约束。', defEn: 'tech systems, wearables, serial codes, synthetic materials, future city or colony rules as global constraints' },
  { id: 'cd_field_fantasy', name: '奇幻 (fantasy field)', group: 'D. 推演世界', def: '王国、行会、魔法、遗迹、神话职业和手工制度作为全局约束。', defEn: 'kingdoms, guilds, magic, ruins, mythic professions, and craft systems as global constraints' },
  { id: 'cd_field_wasteland', name: '末世 (wasteland field)', group: 'D. 推演世界', def: '稀缺、拼接、修补、生存工具、风化材料和崩坏秩序作为全局约束。', defEn: 'scarcity, patchwork, repair, survival tools, weathered material, and collapsed order as global constraints' },
];

const fieldStyleItems: LibraryItemDef[] = [
  { id: 'cd_field_style_fashion_couture_volume', name: '高定夸张衣量 (couture volume)', group: '时尚 / Fashion', def: '把所有细节推向结构肩线、拖尾、层叠体积、昂贵脆弱材料、非日常比例和秀场压迫感。', defEn: 'push all details toward structured shoulders, trains, layered volume, expensive fragile material, non-daily proportions, and runway pressure' },
  { id: 'cd_field_style_fashion_street_uniform', name: '街头亚文化制服 (street subculture uniform)', group: '时尚 / Fashion', def: '把所有细节推向球鞋、夹克、包、贴纸、金属小件、夜间移动和社群穿着规则。', defEn: 'push all details toward sneakers, jackets, bags, stickers, small metal objects, night movement, and crew dressing rules' },
  { id: 'cd_field_style_fashion_editorial_mix', name: '编辑式混搭 (editorial styling mix)', group: '时尚 / Fashion', def: '把所有细节推向可拍摄的造型统一性、材质反差、比例冲突、样衣流程和杂志系统。', defEn: 'push all details toward photographable styling unity, material contrast, proportion conflict, sample workflow, and magazine systems' },
  { id: 'cd_field_style_fashion_quiet_luxury', name: '静奢日常 (quiet luxury daily)', group: '时尚 / Fashion', def: '把所有细节推向无 Logo、低对比、优质面料、保养痕迹、克制姿态和阶层距离感。', defEn: 'push all details toward logo-free restraint, low contrast, premium fabric, maintenance traces, restrained posture, and class distance' },
  { id: 'cd_field_style_fashion_deconstruction', name: '反时尚解构 (anti-fashion deconstruction)', group: '时尚 / Fashion', def: '把所有细节推向反穿、错扣、外露衬里、库存布、毛边、拆线和对商业完整性的抵抗。', defEn: 'push all details toward wrong-wear, misbuttoning, exposed lining, deadstock cloth, fray, unstitching, and resistance to commercial completeness' },
  { id: 'cd_field_style_fashion_backstage_labor', name: '职业时尚后台 (fashion backstage labor)', group: '时尚 / Fashion', def: '把所有细节推向试衣、造型、买手、样衣运输、针线粉笔、黑色工作层和疲惫专注。', defEn: 'push all details toward fitting, styling, buying, sample transport, thread and chalk, black work layers, and tired focus' },
  { id: 'cd_field_style_fashion_normcore_commute', name: '日常时装化 (normcore commute)', group: '时尚 / Fashion', def: '把所有细节推向普通衣物的精确比例、通勤物件、干净生活痕迹和生活方式造型。', defEn: 'push all details toward precise proportions in ordinary clothing, commute objects, clean life traces, and lifestyle styling' },
  { id: 'cd_field_style_scifi_cyberpunk_city', name: '赛博朋克城市 (cyberpunk city)', group: '科幻 / Sci-Fi', def: '把所有细节推向霓虹城市制度、可穿戴界面、防雨合成层、数据标签、维修痕迹和监控社会。', defEn: 'push all details toward neon urban systems, wearable interfaces, rainproof synthetic layers, data tags, service marks, and surveillance society' },
  { id: 'cd_field_style_scifi_biotech_lab', name: '生物科技实验室 (biotech lab)', group: '科幻 / Sci-Fi', def: '把所有细节推向无菌材料、样本编号、医疗接口、传感贴片和实验室管控。', defEn: 'push all details toward sterile material, sample codes, medical interfaces, sensor patches, and lab control' },
  { id: 'cd_field_style_scifi_space_colony', name: '太空殖民地 (space colony)', group: '科幻 / Sci-Fi', def: '把所有细节推向空间站制服、耐压缝线、工具挂载、低重力姿态和殖民地身份码。', defEn: 'push all details toward station uniforms, pressure seams, tool mounts, low-gravity posture, and colony ID codes' },
  { id: 'cd_field_style_fantasy_wuxia_order', name: '武侠门派 (wuxia order)', group: '奇幻 / Fantasy', def: '把所有细节推向门派服制、轻便层次、束带、剑器、师承符号和克制身法。', defEn: 'push all details toward sect clothing, light layers, belts, blades, lineage signs, and restrained martial posture' },
  { id: 'cd_field_style_fantasy_court_magic', name: '宫廷魔法 (court magic)', group: '奇幻 / Fantasy', def: '把所有细节推向礼服制度、纹章、仪式配件、贵族姿态和受控魔法符号。', defEn: 'push all details toward court dress, heraldry, ritual accessories, aristocratic posture, and controlled magic signs' },
  { id: 'cd_field_style_combat_tactical_mercenary', name: '佣兵战术 (tactical mercenary)', group: '战斗 / Combat', def: '把所有细节推向模块装具、快拆扣、护具、任务包、武器锚点、磨损和警觉姿态。', defEn: 'push all details toward modular gear, quick-release buckles, armor, mission packs, weapon anchors, wear, and alert posture' },
  { id: 'cd_field_style_ritual_dark_ceremony', name: '黑暗祭仪 (dark ceremony)', group: '仪式 / Ritual', def: '把所有细节推向法衣、绳结、蜡封、圣物、禁忌符号、烟灰痕迹和仪式静止。', defEn: 'push all details toward vestments, knots, wax seals, relics, taboo signs, ash traces, and ceremonial stillness' },
  { id: 'cd_field_style_wasteland_salvage', name: '废土拾荒 (wasteland salvage)', group: '末世 / Wasteland', def: '把所有细节推向拼接衣层、拾荒工具、尘土、日晒褪色、水袋和反复修补。', defEn: 'push all details toward patched layers, salvage tools, dust, sun fading, water bags, and repeated repairs' },
];

const formatSur3CoordinateTime = (preset: typeof SUR3_COORDINATE_PRESETS[number]): string => {
  if (preset.timeMode === 'year' && typeof preset.year === 'number') {
    return preset.year < 0 ? `公元前${Math.abs(preset.year)}年` : `公元${preset.year}年`;
  }
  return preset.time || '自动时代';
};

const coordinateCategoryFit: NonNullable<LibraryItemDef['categoryFit']> = {
  unlisted: 'usable',
  strong: [],
  usable: [],
  fusion: [],
  weak: [],
  exclude: []
};

const getCoordinateOntologyLevel = (domain: string): 1 | 2 | 3 | 4 | 5 => {
  if (domain === 'extra_dimension') return 5;
  if (domain === 'mythic_cosmos') return 4;
  if (domain === 'outer_space' || domain === 'virtual_data' || domain === 'micro_body' || domain === 'future_megastructure') return 3;
  return 1;
};

const getCoordinateRealityTags = (domain: string, scale: string): string[] => {
  const base = [domain, scale];
  if (domain === 'extra_dimension') return ['abstract', 'nonreal', ...base];
  if (domain === 'mythic_cosmos') return ['nonreal', 'semi_surreal', ...base];
  if (domain === 'virtual_data') return ['semi_surreal', 'stylized', ...base];
  if (domain === 'outer_space' || domain === 'micro_body' || domain === 'future_megastructure') return ['semi_surreal', ...base];
  return ['realistic', ...base];
};

const spacetimeCoordinateItems: LibraryItemDef[] = SUR3_COORDINATE_PRESETS.map((preset, index) => {
  const anchor = preset.anchor;
  const timeLabel = formatSur3CoordinateTime(preset);
  const eras = preset.eraId ? [preset.eraId] : anchor.allowedEras;
  return {
    id: `cd_st_${anchor.id}_${preset.timeMode}_${preset.eraId || preset.year || index}`,
    name: `${timeLabel}${anchor.name}`,
    nameEn: `${preset.timeMode === 'year' && typeof preset.year === 'number' ? preset.year : preset.time || 'Auto Era'} ${anchor.nameEn || anchor.name}`,
    group: anchor.domain,
    def: `SUR3 精确时空坐标。时间：${timeLabel}；空间：${anchor.name}；尺度：${anchor.scale}；时间模式：${anchor.timeMode}；允许时代：${anchor.allowedEras.join(' / ')}。它固定现实域、时间轴、空间锚、技术边界和文化接口，不直接替代主体身份。`,
    defEn: `SUR3 precise time-space coordinate. Time: ${preset.timeMode === 'year' && typeof preset.year === 'number' ? preset.year : preset.time || 'auto era'}; space: ${anchor.nameEn || anchor.name}; scale: ${anchor.scale}; time mode: ${anchor.timeMode}; allowed eras: ${anchor.allowedEras.join(' / ')}. It fixes reality domain, timeline, spatial anchor, technology boundary, and cultural interface without replacing subject identity.`,
    ontologyLevel: getCoordinateOntologyLevel(anchor.domain),
    eraMode: eras.includes('timeless') ? 'universal' : 'specific',
    eras,
    categoryFit: coordinateCategoryFit,
    timeTags: [
      preset.timeMode,
      ...(preset.eraId ? [preset.eraId] : []),
      ...(typeof preset.year === 'number' ? [preset.year < 0 ? 'ancient_year' : preset.year >= 2100 ? 'future_year' : 'historical_or_modern_year'] : [])
    ],
    realityTags: getCoordinateRealityTags(anchor.domain, anchor.scale),
    compatibleEras: anchor.allowedEras,
    controls: ['reality domain', 'timeline', 'space anchor', 'technology boundary', 'cultural interface'],
    forbids: ['replacing subject identity', 'replacing visual style', 'replacing shot protocol'],
    randomAxis: 'spacetime_coordinate',
    randomDominance: 'hard_coordinate',
    coordinateSpaceCn: preset.spaceCn,
    coordinateSpaceEn: preset.spaceEn,
    coordinateTime: preset.time,
    coordinateYear: preset.year,
    coordinateEraId: preset.eraId,
    coordinateTimeMode: preset.timeMode,
    source: 'SUR3'
  } as LibraryItemDef;
});

const spaceAnchorItems: LibraryItemDef[] = SUR3_SPACE_ANCHORS.map(anchor => ({
  id: `cd_space_${anchor.id}`,
  name: `${anchor.name} (${anchor.nameEn || anchor.name})`,
  nameEn: anchor.nameEn || anchor.name,
  group: anchor.domain,
  def: `SUR3 空间锚点。尺度：${anchor.scale}；时间模式：${anchor.timeMode}；允许时代：${anchor.allowedEras.join(' / ')}。它只固定空间与现实域，不直接替代时间锚点、身份锚点或场景预设。`,
  defEn: `SUR3 space anchor. Scale: ${anchor.scale}; time mode: ${anchor.timeMode}; allowed eras: ${anchor.allowedEras.join(' / ')}. It only fixes space and reality domain without replacing time anchor, identity anchor, or scene preset.`,
  eras: anchor.allowedEras,
  realityTags: [anchor.domain, anchor.scale],
  controls: ['space anchor', 'reality domain', 'technology boundary'],
  forbids: ['replacing time anchor', 'replacing subject identity', 'replacing scene preset'],
  randomAxis: 'space_anchor',
  randomDominance: 'hard_coordinate',
  source: 'SUR3'
}));

const fieldPresetItems: LibraryItemDef[] = SUR2_DATA.flatMap(group =>
  group.items.map(item => withFieldPresetMeta({
    ...item,
    id: `cd_fp_${item.id}`,
    group: group.name,
    groupEn: group.nameEn || group.name,
    def: textFromLibraryText(item.def),
    defEn: textFromLibraryText(item.defEn || item.def)
  }, group))
);

const styleProtocolItems: LibraryItemDef[] = STYLE_PROTOCOL_ITEMS;

const lightMoodItems: LibraryItemDef[] = CD_LIGHT_MOOD.map(item => withLightingMeta(item, 'MOOD'));
const lightTypeItems: LibraryItemDef[] = CD_LIGHT_TYPE.map(item => withLightingMeta(item, 'TYPE'));
const lightDirectionItems: LibraryItemDef[] = CD_LIGHT_DIRECTION.map(item => withLightingMeta(item, 'DIRECTION'));
const lightShapeItems: LibraryItemDef[] = CD_LIGHT_SHAPE.map(item => withLightingMeta(item, 'SHAPE'));

const fusionRuleItems: LibraryItemDef[] = [
  { id: 'cd_world_law_l1', name: 'L1 写实锁定 (realist lock)', group: 'A. 世界法则', def: '彻底写实。时空坐标锁死现实边界；造型协议只能保留设计压力、剪影倾向、材料偏好和身份气质，并落成当前坐标真实可发生的服制、工具、工艺、姿态、磨损或社会标记。禁止真实超自然、真实科幻奇观、真实魔法、真实义体、真实外星材料、跨时代技术和无法解释的异常本体。', defEn: 'Fully realist. The time-space coordinate locks the real boundary; form protocols may only keep design pressure, silhouette tendency, material preference, and identity mood, then become plausible clothing, tools, craft, posture, wear, or social marks inside the current coordinate. No literal supernatural, sci-fi spectacle, magic, prosthetic miracles, alien material, cross-era technology, or unexplained ontology.' },
  { id: 'cd_world_law_l2', name: 'L2 同构折译 (equivalent translation)', group: 'A. 世界法则', def: '推荐默认。严守时空坐标，同时不能让造型协议失效。若造型协议、本体细节或身份锚点含当前坐标不支持的科技、魔法、异种、义体、超现实材料，必须折译为当前世界内可成立的同构设计机关：纹样、机关、腰牌、暗器、工具流程、职业装备、材料工艺、制度标记、公共神话、伪装、误读或维护痕迹。', defEn: 'Recommended default. Obey the time-space coordinate while preserving the form protocol. If a form protocol, ontology detail, or identity anchor contains unsupported technology, magic, creature, prosthetic, or surreal material, translate it into an equivalent design mechanism valid in the current world: motif, mechanism, token, concealed tool, work process, occupational gear, craft, institutional mark, public myth, disguise, misreading, or maintenance trace.' },
  { id: 'cd_world_law_l3', name: 'L3 局部缝合 (local seam)', group: 'A. 世界法则', def: '局部异常。时空坐标仍是底座，但允许风格压力以一个局部异常、传闻、禁物、梦痕、仪式残片、不可证实道具、身体小异样或社会症状出现。它可以改变角色设计的意义判断和局部视觉记忆点，但不得扩展成完整新世界体系。', defEn: 'Local anomaly. The coordinate remains the base, but style pressure may appear as one local anomaly, rumor, forbidden object, dream trace, ritual remnant, unverified prop, small bodily irregularity, or social symptom. It may affect meaning and a local visual memory point, but must not expand into a full new world system.' },
  { id: 'cd_world_law_l4', name: 'L4 本体成立 (ontology manifests)', group: 'A. 世界法则', def: '超现实本体成立。科幻、魔法、神话、异种生态、义体、时间异常、维度技术或非现实材料可以真实存在，并成为身体、服装、装备、职业流程、制度、空间、危险或公共秩序的一部分。但主身份不能被奇观抢走；角色仍必须有清楚的人设骨架、功能、剪影和设计证据。', defEn: 'Non-realist ontology manifests. Sci-fi, magic, myth, creature ecology, prosthetics, time anomaly, dimensional technology, or non-realist material may truly exist and become part of body, clothing, gear, work process, institution, space, danger, or public order. Spectacle must not steal the main identity; the character still needs a clear persona skeleton, function, silhouette, and design evidence.' },
  { id: 'cd_world_law_l5', name: 'L5 狂想接管 (rhapsody takeover)', group: 'A. 世界法则', def: '类型狂想曲。梦、神话、象征、跨时代拼贴、MV 逻辑和视觉奇观可以接管设计规则；身体、时间、空间、服装、材料和群体标记都可以按造型协议重排。但不能乱炖：身份锚点、主剪影、身体逻辑、道具功能、材料来源和版式说明必须清楚。', defEn: 'Rhapsody takeover. Dream, myth, symbol, cross-era collage, music-video logic, and visual spectacle may govern the design rules; body, time, space, costume, material, and group marks may be rearranged by the form protocol. But it is not chaos: identity anchor, main silhouette, body logic, prop function, material source, and board notes must remain clear.' },
];

const identityAnchorItems: LibraryItemDef[] = [
  { id: 'cd_anchor_jinyiwei', name: '明朝锦衣卫 (Ming imperial secret guard)', group: '历史 / 权力机构', def: '皇权密探、监察、审讯、档案、腰牌、绣春刀和飞鱼服构成身份骨架。', defEn: 'Imperial secret guard, surveillance, interrogation, archive, waist token, embroidered spring blade, and flying-fish robe form the identity skeleton.' },
  { id: 'cd_anchor_court_assassin', name: '宫廷刺客 (court assassin)', group: '历史 / 权力机构', def: '礼制外观下隐藏武装和威胁，动作克制，危险藏在袖口、腰带和礼仪位置中。', defEn: 'Threat and weapons hidden under ceremonial appearance; controlled movement; danger sits in sleeves, belts, and ritual positions.' },
  { id: 'cd_anchor_fashion_model', name: '秀场模特 (runway model)', group: '时尚 / 表演职业', def: '以走台姿态、身体比例、造型服从、后台痕迹和被观看的职业性构成身份。', defEn: 'Identity formed by runway posture, body proportion, styling obedience, backstage traces, and the profession of being watched.' },
  { id: 'cd_anchor_stylist', name: '造型师 (stylist)', group: '时尚 / 后台职业', def: '工具、别针、衣架标签、黑色工作层、样衣流程和疲惫专注证明职业。', defEn: 'Tools, pins, hanger tags, black work layers, sample workflow, and tired focus prove the profession.' },
  { id: 'cd_anchor_doctor', name: '医生 (doctor)', group: '现实 / 职业', def: '医疗制度、清洁材料、身份牌、手套、口袋工具和被训练过的手部动作。', defEn: 'Medical institution, clean materials, ID badge, gloves, pocket tools, and trained hand movement.' },
  { id: 'cd_anchor_mechanic', name: '机械维修工 (mechanic)', group: '现实 / 职业', def: '油污、工具袋、磨损手套、工作服、零件和蹲站姿态构成职业证据。', defEn: 'Oil stains, tool pouches, worn gloves, workwear, parts, and crouched or standing posture form occupational evidence.' },
  { id: 'cd_anchor_priest', name: '祭司 (ritual priest)', group: '仪式 / 宗教', def: '法衣、圣物、封印、祈祷动作、禁忌标记和等级符号组成身份。', defEn: 'Vestments, relics, seals, prayer gestures, taboo marks, and rank signs form the identity.' },
  { id: 'cd_anchor_mercenary', name: '佣兵 (mercenary)', group: '战斗 / 武装职业', def: '任务装备、武器锚点、伤损、模块装具、警觉姿态和合同身份。', defEn: 'Mission gear, weapon anchor, damage, modular loadout, alert posture, and contract identity.' },
  { id: 'cd_anchor_space_worker', name: '太空工人 (space worker)', group: '科幻 / 劳动职业', def: '殖民地编号、密封工装、工具挂载、维修痕迹和低重力劳动姿态。', defEn: 'Colony ID, sealed workwear, tool mounts, maintenance traces, and low-gravity labor posture.' },
  { id: 'cd_anchor_biotech_subject', name: '生物实验对象 (biotech subject)', group: '科幻 / 实验身份', def: '样本编号、隔离标签、医疗接口、传感贴片和被管理的身体。', defEn: 'Sample code, quarantine tag, medical interface, sensor patch, and a managed body.' },
  { id: 'cd_anchor_wuxia_disciple', name: '门派弟子 (wuxia sect disciple)', group: '奇幻 / 武侠', def: '师承符号、束带、轻便层次、练功痕迹、剑器和克制身法。', defEn: 'Lineage signs, belts, light layers, training traces, blade, and restrained martial posture.' },
  { id: 'cd_anchor_scavenger', name: '废土拾荒者 (wasteland scavenger)', group: '末世 / 生存职业', def: '拾荒工具、水袋、补丁衣层、错配护甲、尘土和物资稀缺证明身份。', defEn: 'Salvage tools, water bag, patched layers, mismatched armor, dust, and scarcity prove identity.' }
];

const worldRegisterItems: LibraryItemDef[] = [
  { id: 'cd_world_realist', name: '现实当代 (contemporary realism)', group: 'A. 现实', def: 'ordinary modern world logic; costume, tools, and materials must remain plausibly real-world' },
  { id: 'cd_world_historical', name: '历史时代 (historical period)', group: 'A. 现实', def: 'specific historical clothing, social rank markers, craft materials, and period-accurate tools' },
  { id: 'cd_world_professional', name: '职业制度世界 (institutional profession)', group: 'A. 现实', def: 'identity is shaped by hospital, school, prison, military, archive, factory, lab, or bureaucracy systems' },
  { id: 'cd_world_fashion', name: '时尚亚文化 (fashion subculture)', group: 'B. 风格社会', def: 'human body remains normal; identity is carried by silhouette, styling, fabric, accessories, and subculture codes' },
  { id: 'cd_world_cyberpunk', name: '赛博都市 (cyberpunk city)', group: 'C. 科幻', def: 'urban tech society; wearable devices, rainproof layers, interface tags, synthetic fabrics, but still human-first' },
  { id: 'cd_world_space_colony', name: '太空殖民地 (space colony)', group: 'C. 科幻', def: 'space labor, station uniforms, low-gravity gear, pressure-safe details, human body remains primary' },
  { id: 'cd_world_biotech', name: '生物科技社会 (biotech society)', group: 'C. 科幻', def: 'medical devices, lab labels, implanted-looking accessories and sterile materials without turning anatomy non-human' },
  { id: 'cd_world_wasteland', name: '废土末世 (post-apocalyptic wasteland)', group: 'D. 崩坏世界', def: 'salvaged clothing, patched armor, survival tools, dust, scarcity, human body still readable' },
  { id: 'cd_world_fantasy', name: '奇幻王国 (fantasy realm)', group: 'E. 奇幻', def: 'court, guild, magic school, knightly or artisan systems expressed through costume, relics, emblems, not body mutation' },
  { id: 'cd_world_ritual', name: '宗教仪式世界 (ritual order)', group: 'E. 奇幻', def: 'sacred garments, seals, cords, veils, reliquaries, rank symbols, and controlled ceremonial posture' },
  { id: 'cd_world_military', name: '军事帝国 (military empire)', group: 'F. 权力系统', def: 'uniform hierarchy, insignia, hard shoulders, rank marks, formal weapons, disciplined posture' },
  { id: 'cd_world_court', name: '宫廷贵族 (court aristocracy)', group: 'F. 权力系统', def: 'formal etiquette, expensive fabric, heraldry, jewelry, controlled decay or prestige markers' },
];

const identitySeedItems: LibraryItemDef[] = [
  { id: 'cd_id_experiment', name: '实验体编号 (classified test subject)', group: 'A. 制度身份', def: 'medical tags, containment marks, utilitarian restraints, body treated as evidence' },
  { id: 'cd_id_relic_guardian', name: '遗迹守卫 (relic guardian)', group: 'A. 制度身份', def: 'ancient duty, worn ceremonial protection, posture of waiting and guarding' },
  { id: 'cd_id_exiled_priest', name: '流放祭司 (exiled priest)', group: 'B. 仪式身份', def: 'broken sacred costume, portable ritual objects, face marked by loss of authority' },
  { id: 'cd_id_court_assassin', name: '宫廷刺客 (court assassin)', group: 'C. 社会身份', def: 'elegant hidden weapons, controlled posture, threat beneath ceremonial beauty' },
  { id: 'cd_id_deep_miner', name: '地底矿工 (deep strata miner)', group: 'C. 社会身份', def: 'compressed workwear, mineral stains, damaged breathing equipment' },
  { id: 'cd_id_fallen_heir', name: '失势继承人 (fallen heir)', group: 'C. 社会身份', def: 'aristocratic remnants, decayed finery, pride under material collapse' },
  { id: 'cd_id_swarm_queen', name: '虫群女王 (swarm queen)', group: 'D. 异种职能', def: 'reproductive authority, hive signals, abdomen or crown-like biological structures' },
  { id: 'cd_id_plague_carrier', name: '疫病携带者 (plague carrier)', group: 'D. 异种职能', def: 'body as vector, visible quarantine signs, diseased beauty without gore spectacle' },
  { id: 'cd_id_false_human', name: '伪装成人者 (thing pretending to be human)', group: 'D. 异种职能', def: 'almost-human proportions with small anatomical betrayals' },
];

const negationLogicItems: LibraryItemDef[] = [
  { id: 'cd_neg_body_as_prison', name: '身体成为牢笼 (body becomes the prison)', def: 'restraints are no longer external objects but integrated into bones, skin, and posture' },
  { id: 'cd_neg_costume_to_organ', name: '服装器官化 (costume becomes organ)', def: 'fabric, armor, or uniform grows into the body as living tissue' },
  { id: 'cd_neg_human_to_icon', name: '人物圣像化 (person becomes icon)', def: 'individual expression is replaced by ritual symmetry, halo-like anatomy, emblematic marks' },
  { id: 'cd_neg_tool_to_body', name: '工具身体化 (tool becomes body)', def: 'occupation tools migrate into limbs, spine, joints, or sensory organs' },
  { id: 'cd_neg_beauty_to_wound', name: '美丽伤口化 (beauty becomes wound)', def: 'ornament and injury become indistinguishable in the design language' },
  { id: 'cd_neg_predator_mask', name: '捕食者伪装 (predator under social mask)', def: 'socially acceptable exterior hides anatomical hunting functions' },
  { id: 'cd_neg_species_memory', name: '物种记忆回潮 (species memory returns)', def: 'ancient animal or alien ancestry reappears through selective body structures' },
  { id: 'cd_neg_death_drive', name: '自毁驱力显形 (self-destruction becomes anatomy)', def: 'the body visually contains mechanisms that harm or consume itself' },
];

const designTranslationItems: LibraryItemDef[] = [
  { id: 'cd_trans_uniform_code', name: '身份制服化 (identity as uniform code)', group: 'A. 制度标记', def: 'translate social role into uniform cut, rank tabs, badges, labels, numbers, seals, and readable hierarchy' },
  { id: 'cd_trans_tool_language', name: '职业工具语言 (profession through tools)', group: 'A. 制度标记', def: 'translate work identity into tools, pouches, gloves, measurement devices, stains, repair marks, and utility layout' },
  { id: 'cd_trans_material_evidence', name: '材料证据化 (material evidence)', group: 'B. 材料转译', def: 'translate identity into fabric weight, scratches, dust, patina, burn marks, mineral powder, sterile plastic, or worn leather' },
  { id: 'cd_trans_pattern_symbol', name: '纹样符号化 (pattern and symbol system)', group: 'B. 材料转译', def: 'use trims, embroidery, printed marks, ritual geometry, hazard labels, institutional codes, or heraldic motifs' },
  { id: 'cd_trans_silhouette_rule', name: '剪影规则化 (silhouette rule)', group: 'C. 轮廓转译', def: 'make the identity readable from far away through shoulder line, coat length, headwear, bag volume, boots, or equipment shape' },
  { id: 'cd_trans_prop_anchor', name: '关键道具锚点 (signature prop anchor)', group: 'C. 轮廓转译', def: 'give one clear prop or carried object that explains the character function without adding extra story clutter' },
  { id: 'cd_trans_wear_damage', name: '磨损叙事化 (wear and damage narrative)', group: 'D. 生活痕迹', def: 'show status through patched seams, old repairs, faded insignia, frayed cuffs, cracked paint, dirt, or careful maintenance' },
  { id: 'cd_trans_status_contrast', name: '身份反差化 (status contrast)', group: 'D. 生活痕迹', def: 'combine high-status and low-status elements through clothing condition, posture, accessories, or material mismatch' },
  { id: 'cd_trans_ritual_accessory', name: '仪式配件化 (ritual accessory system)', group: 'E. 仪式转译', def: 'translate belief or order into cords, veils, charms, reliquaries, prayer tags, wax seals, bells, or ceremonial tools' },
  { id: 'cd_trans_tech_wearable', name: '技术可穿戴化 (technology as wearable gear)', group: 'F. 科幻转译', def: 'translate future world into wrist devices, visor HUDs, utility harnesses, soft exosuit details, cables, tags, and modular panels' },
  { id: 'cd_trans_no_body_mutation', name: '禁止身体异形化 (no body mutation)', group: 'Z. 边界锁', def: 'keep the person primarily human; translate the idea through costume, gear, props, symbols, materials, and posture rather than non-human anatomy' },
];

const designSheetItems: LibraryItemDef[] = [
  { id: 'cd_sheet_identity', name: '角色身份板 (character identity board)', def: 'front-facing concept board, name plate, identity notes, readable full-body design' },
  { id: 'cd_sheet_turnaround', name: '三视图设定 (front side back turnaround)', def: 'orthographic front, side, and back views on a clean neutral background' },
  { id: 'cd_sheet_callout', name: '局部拆解图 (detail callout sheet)', def: 'main full-body figure plus enlarged head, hands, materials, and signature organs' },
  { id: 'cd_sheet_creature', name: '异种生物设定板 (creature design sheet)', def: 'creature profile with anatomy callouts, scale marker, behavior notes, clean design layout' },
  { id: 'cd_sheet_costume', name: '服装装备设定板 (costume and gear sheet)', def: 'full body plus gear breakdown, fabric swatches, accessory notes' },
];

const costumeLogicItems: LibraryItemDef[] = CD_COSTUME_EXECUTION;

const costumeSystemItems: LibraryItemDef[] = [
  { id: 'cd_costsys_daily_layers', name: '日常层次穿搭 (ordinary layered outfit)', group: 'A. 现实日常', def: '由日常衣物、口袋、鞋包与天气逻辑组成，必须像真实生活里能穿出去。', defEn: 'credible layered clothing built from everyday garments, pockets, shoes, bags, and weather logic' },
  { id: 'cd_costsys_work_uniform', name: '岗位制服系统 (work uniform system)', group: 'A. 现实日常', def: '通过制服剪裁、姓名牌、等级条、工具腰带、防护层或岗位色码证明职业。', defEn: 'uniform cut, name tag, rank tab, tool belt, protective layer, or workplace color code' },
  { id: 'cd_costsys_service_apron', name: '服务围裙秩序 (service apron hierarchy)', group: 'A. 现实日常', def: '用围裙、马甲、手套、票据、毛巾和服务小工具标记劳动身份。', defEn: 'apron, vest, gloves, receipts, towel, and small service tools marking labor status' },
  { id: 'cd_costsys_period_layers', name: '时代服制层级 (period garment hierarchy)', group: 'B. 历史服制', def: '符合时代的衣层、系结方式、内衬、头饰与可见阶级规则。', defEn: 'period-accurate layers, fastening methods, underlayers, headwear, and class-visible garment rules' },
  { id: 'cd_costsys_court_attire', name: '宫廷礼服制度 (court ceremonial attire)', group: 'B. 历史服制', def: '以宫廷礼仪控制剪影、袖长、拖尾、珠宝等级和纹章位置。', defEn: 'formal court silhouette, etiquette-controlled sleeves, train length, jewelry rank, and heraldic placement' },
  { id: 'cd_costsys_military_rank', name: '军阶制服结构 (military rank uniform)', group: 'C. 武装制度', def: '用军阶标记、硬肩线、勋章、束带、防护片和纪律化负载体现等级。', defEn: 'rank marks, shoulder structure, medals, straps, protective panels, and disciplined loadout placement' },
  { id: 'cd_costsys_tactical_modular', name: '模块战术装具 (modular tactical gear)', group: 'C. 武装制度', def: '背心、挂具、弹袋、装甲片、快拆扣和可操作武器位置构成实用系统。', defEn: 'vest, harness, pouches, armor panels, quick-release straps, and practical weapon access' },
  { id: 'cd_costsys_ritual_vesture', name: '仪式法衣秩序 (ritual vestment order)', group: 'D. 仪式制度', def: '圣衣层次、面纱、绳结、圣物袋、符号扣件与仪式几何必须统一。', defEn: 'sacred layers, veils, cords, relic pouch, symbolic fasteners, and controlled ceremonial geometry' },
  { id: 'cd_costsys_monastic_plain', name: '禁欲修会服 (austere monastic dress)', group: 'D. 仪式制度', def: '素袍、克制扣合、磨旧布料、低阶圣职纪律和安静等级符号。', defEn: 'plain robe, restrained fastening, hand-worn cloth, low-status sacred discipline, and quiet rank signs' },
  { id: 'cd_costsys_runway_silhouette', name: '秀场剪影系统 (runway silhouette system)', group: 'E. 时尚系统', def: '强剪影、夸张衣量、明确造型规则、配饰节奏和编辑式统一性。', defEn: 'strong runway silhouette, exaggerated garment volume, styling rule, accessory rhythm, and editorial coherence' },
  { id: 'cd_costsys_street_subculture', name: '街头亚文化制服 (street subculture uniform)', group: 'E. 时尚系统', def: '夹克、鞋、包、发型、首饰和重复穿搭规则共同编码亚文化身份。', defEn: 'subculture-coded jacket, shoes, bag, hair, jewelry, and repeated styling rules' },
  { id: 'cd_costsys_space_workwear', name: '太空工装系统 (space workwear system)', group: 'F. 科幻制度', def: '耐压缝线、空间站章、工具挂具、软外骨骼区域和密封材料接口。', defEn: 'pressure-aware seams, station patches, utility harness, soft exosuit zones, and sealed material interfaces' },
  { id: 'cd_costsys_cyber_wearable', name: '城市技术穿戴 (urban tech wearable system)', group: 'F. 科幻制度', def: '面罩、腕部设备、数据标签、合成防雨层、模块面板和安全走线。', defEn: 'visor, wrist device, data tags, synthetic rain layers, modular panels, and cable-safe garment routes' },
  { id: 'cd_costsys_salvage_layers', name: '废土拼接层 (salvaged survival layers)', group: 'G. 崩坏生存', def: '补丁衣层、错配护甲、再利用背包、防晒布、临时扣件和稀缺感。', defEn: 'patched layers, mismatched armor, repurposed bags, sun cloth, improvised fasteners, and visible scarcity' },
  { id: 'cd_costsys_nomad_bundle', name: '迁徙负重装束 (nomadic load-bearing outfit)', group: 'G. 崩坏生存', def: '便携储物、铺盖卷、水环、挡风布、修补背带和均衡负重。', defEn: 'portable storage, bedroll, water loops, weather cloth, repaired straps, and balanced carried weight' },
];

const materialEvidenceItems: LibraryItemDef[] = [
  { id: 'cd_mat_ev_cotton_wool', name: '棉麻羊毛 (cotton, linen, wool)', group: 'A. 现实材料', def: '哑光纤维、柔软边缘、汗渍、洗涤磨损和可信的日常触感。', defEn: 'matte textile fibers, softened edges, sweat, washing wear, and believable everyday touch' },
  { id: 'cd_mat_ev_denim_leather', name: '丹宁皮革 (denim and leather)', group: 'A. 现实材料', def: '褶皱丹宁、磨旧皮革、缝线压力、抛光边缘和劳动生活痕迹。', defEn: 'creased denim, worn leather, seam stress, polished edges, and work-life aging' },
  { id: 'cd_mat_ev_rubber_plastic', name: '橡胶塑料 (rubber and molded plastic)', group: 'A. 现实材料', def: '防护橡胶、廉价注塑塑料、擦痕表面和制度化实用感。', defEn: 'protective rubber, cheap molded plastic, scuffed surfaces, and institutional utility' },
  { id: 'cd_mat_ev_silk_brocade', name: '丝绸锦缎 (silk and brocade)', group: 'B. 历史工艺', def: '织纹、丝线光泽、手工收边、刺绣密度和阶层可见的材料。', defEn: 'woven pattern, thread sheen, hand-finished trim, embroidery density, and social rank material' },
  { id: 'cd_mat_ev_chain_plate', name: '锁甲板甲 (chainmail and plate)', group: 'B. 历史工艺', def: '铆钉、锻打金属、皮带、氧化暗斑、衬垫层和重量证据。', defEn: 'rivets, hammered metal, leather straps, tarnish, padded underlayer, and weight evidence' },
  { id: 'cd_mat_ev_paper_talisman', name: '纸符蜡封 (paper talismans and wax seals)', group: 'C. 仪式材料', def: '纸张纤维、墨迹晕染、折叠符纸、蜡封、绳结和神圣触摸痕迹。', defEn: 'paper fibers, ink bleed, folded charms, wax seals, cord knots, and sacred handling marks' },
  { id: 'cd_mat_ev_bone_wood_stone', name: '骨木石材 (bone, wood, stone)', group: 'C. 仪式材料', def: '雕刻圣物材质、包浆、手部抛光、裂纹、矿尘和仪式触感。', defEn: 'carved relic material, patina, hand polish, cracks, mineral dust, and ritual tactility' },
  { id: 'cd_mat_ev_ballistic_fabric', name: '防弹纤维 (ballistic fabric)', group: 'D. 武装材料', def: '类凯夫拉织纹、护甲缝线、冲击痕、扣具和实用防护区域。', defEn: 'kevlar-like weave, armor stitching, impact marks, buckles, and practical protection zones' },
  { id: 'cd_mat_ev_burnt_metal', name: '烧蚀金属 (burnt metal)', group: 'D. 武装材料', def: '热变色、刮擦镀层、掉漆、锋利磨边和修复过的硬件。', defEn: 'heat discoloration, scraped plating, chipped paint, sharp worn edges, and repaired hardware' },
  { id: 'cd_mat_ev_couture_textile', name: '高定织物 (couture textile)', group: 'E. 时尚材料', def: '结构化面料、实验折叠、反光饰边、高级完成度和刻意材料反差。', defEn: 'structured fabric, experimental folds, reflective trims, high-fashion finish, and intentional material contrast' },
  { id: 'cd_mat_ev_latex_vinyl', name: '乳胶乙烯 (latex and vinyl)', group: 'E. 时尚材料', def: '受控光泽、受力缝线、平滑合成表面和风格化身体轮廓。', defEn: 'controlled gloss, tension seams, smooth synthetic surface, and stylized body contouring' },
  { id: 'cd_mat_ev_smart_fabric', name: '智能织物 (smart fabric)', group: 'F. 科幻材料', def: '嵌入电路、柔性面板、细微 LED、传感贴片和可读的可穿戴技术。', defEn: 'embedded circuits, flexible panels, subtle LEDs, sensor patches, and readable wearable technology' },
  { id: 'cd_mat_ev_pbr_composite', name: '复合装甲材料 (PBR composite material)', group: 'F. 科幻材料', def: '碳纤维纹理、陶瓷板、模块外壳、合成涂层和适合 3D 资产的表面逻辑。', defEn: 'carbon weave, ceramic plate, modular shell, synthetic coating, and 3D asset-friendly surface logic' },
  { id: 'cd_mat_ev_scrap_patchwork', name: '废料拼接 (scrap patchwork)', group: 'G. 废土材料', def: '再利用篷布、轮胎橡胶、金属板、绳索、脏布和临时修补证据。', defEn: 'reused tarp, tire rubber, sheet metal, rope, dirty cloth, and improvised repair evidence' },
  { id: 'cd_mat_ev_dust_salt_rust', name: '尘盐锈蚀 (dust, salt, rust)', group: 'G. 废土材料', def: '干尘、盐壳、锈迹、褪色和严酷环境暴露。', defEn: 'dry dust, salt crust, rust stains, faded color, and harsh environmental exposure' },
];

const propAnchorItems: LibraryItemDef[] = CD_PROP_ANCHORS;

const symbolSystemItems: LibraryItemDef[] = CD_SYMBOL_SYSTEMS;

const wearTraceItems: LibraryItemDef[] = [
  { id: 'cd_wear_clean_maintained', name: '精心维护 (carefully maintained)', group: 'A. 现实痕迹', def: '干净但用过的表面、修过的纽扣、擦亮的鞋和维护过的工具。', defEn: 'clean but used surfaces, repaired buttons, polished shoes, and maintained tools' },
  { id: 'cd_wear_daily_scuff', name: '日常磨损 (daily scuff)', group: 'A. 现实痕迹', def: '小污渍、软化袖口、磨花包角、鞋底磨损和真实生活使用痕迹。', defEn: 'small stains, softened cuffs, rubbed bag corners, shoe wear, and real-life use marks' },
  { id: 'cd_wear_archival_age', name: '档案旧化 (archival age)', group: 'B. 历史痕迹', def: '褪色布料、旧纸、包浆、修补缝线和长期制度保存痕迹。', defEn: 'faded cloth, old paper, patina, repaired seams, and long institutional storage traces' },
  { id: 'cd_wear_ceremonial_preserve', name: '礼制保养 (ceremonial preservation)', group: 'B. 历史痕迹', def: '老化但被小心保存的礼仪物，抛光圣物边缘、受控裂纹和继承修补。', defEn: 'aged ceremonial object kept carefully, polished relic edges, controlled cracks, and inherited repairs' },
  { id: 'cd_wear_battle_damage', name: '战斗损伤 (battle damage)', group: 'C. 战斗痕迹', def: '切口、凹痕、热痕、撕裂带子、刮擦护甲和野外修补。', defEn: 'cuts, dents, heat marks, torn straps, scraped armor, and field repairs' },
  { id: 'cd_wear_training_marks', name: '训练痕迹 (training marks)', group: 'C. 战斗痕迹', def: '反复握持磨损、淤青手套、补过的护膝和纪律化使用痕迹。', defEn: 'repeated grip wear, bruised gloves, patched kneepads, and disciplined use traces' },
  { id: 'cd_wear_ritual_stain', name: '仪式污痕 (ritual stain)', group: 'D. 仪式痕迹', def: '蜡、灰、香烟熏色、颜料、折叠祈祷纸和反复神圣触碰。', defEn: 'wax, ash, incense smoke, pigment, folded prayer paper, and repeated sacred handling' },
  { id: 'cd_wear_penance_repair', name: '苦修修补 (penitential repair)', group: 'D. 仪式痕迹', def: '可见缝补、粗糙线迹、磨旧膝部、绳索压痕和自我克制的材料。', defEn: 'visible mending, rough thread, worn knees, rope marks, and self-denying material restraint' },
  { id: 'cd_wear_editorial_distress', name: '编辑式做旧 (editorial distress)', group: 'E. 时尚痕迹', def: '刻意做旧、设计师毛边、造型皱褶、受控不对称和有意缺陷。', defEn: 'intentional distress, designer fray, styled wrinkles, controlled asymmetry, and deliberate imperfection' },
  { id: 'cd_wear_luxury_preserved', name: '奢侈保养 (luxury preservation)', group: 'E. 时尚痕迹', def: '昂贵材料几乎完好，只有细小划痕、抛光配饰和受控磨损。', defEn: 'expensive materials kept almost perfect, tiny scratches, polished accessories, and controlled wear' },
  { id: 'cd_wear_tech_service', name: '技术维护痕迹 (tech service marks)', group: 'F. 科幻痕迹', def: '可替换面板、维修贴纸、软件标签、线缆磨损和模块维护证据。', defEn: 'replaceable panels, service stickers, software labels, cable wear, and modular maintenance evidence' },
  { id: 'cd_wear_lab_containment', name: '实验封存痕迹 (lab containment marks)', group: 'F. 科幻痕迹', def: '无菌胶带、隔离标签、封闭缝线、传感残留和实验室处理表面。', defEn: 'sterile tape, quarantine label, sealed seams, sensor residue, and lab-handled surface marks' },
  { id: 'cd_wear_salvage_patch', name: '拾荒补丁 (salvage patch)', group: 'G. 废土痕迹', def: '错配补丁、手工缝线、胶带、锈迹转移、尘土和反复生存修补。', defEn: 'mismatched patches, hand stitching, duct tape, rust transfer, dirt, and repeated survival repairs' },
  { id: 'cd_wear_weather_beaten', name: '风化暴晒 (weather-beaten)', group: 'G. 废土痕迹', def: '日晒褪色、尘土、盐分、裂纹、干脆布料、脆化塑料和严酷暴露。', defEn: 'sun fading, dust, salt, cracks, dry fabric, brittle plastic, and harsh exposure' },
];

const surfaceMaterialItems: LibraryItemDef[] = [
  ...AES_SKIN_TEXTURE,
  { id: 'cd_mat_chitin', name: '湿润甲壳 (wet chitin shell)', group: '异种材料', def: 'dark glossy insect armor with fine scratches and organic seams' },
  { id: 'cd_mat_mycology', name: '菌丝皮层 (mycelium skin layer)', group: '异种材料', def: 'threadlike fungal growth integrated into pores, joints, and garment edges' },
  { id: 'cd_mat_ceramic', name: '陶瓷化皮肤 (ceramicized skin)', group: '异种材料', def: 'cracked porcelain surface with warm living tissue beneath' },
  { id: 'cd_mat_mineral', name: '矿物化组织 (mineralized tissue)', group: '异种材料', def: 'stone, crystal, or ore grows through flesh and clothing as structural support' },
  { id: 'cd_mat_bio_mech', name: '生物机械接口 (biomechanical interface)', group: '机械材料', def: 'muscle fibers, cables, panels, and joints obeying functional anatomy' },
];

const negativeRuleItems: LibraryItemDef[] = [
  { id: 'cd_neg_no_scene', name: '禁止复杂电影场景 (no complex cinematic scene)', def: 'plain or minimal background, focus entirely on the single subject design' },
  { id: 'cd_neg_no_camera', name: '禁止摄影镜头语言 (no camera/lens instructions)', def: 'avoid lens, camera angle, depth of field, lighting setup, and shot language' },
  { id: 'cd_neg_no_crowd', name: '禁止多人混乱 (single subject only)', def: 'one primary subject, no crowd, no extra characters competing for attention' },
  { id: 'cd_neg_no_poster', name: '禁止海报化构图 (no poster composition)', def: 'not a movie poster, not a dramatic key art scene, no title typography' },
  { id: 'cd_neg_clean', name: '干净背景展示 (clean neutral presentation)', def: 'design sheet clarity, neutral background, readable silhouette and materials' },
];

export const CONCEPT_ENGINE_LIBRARY: LibraryCategoryDef[] = [
  { id: 'cd_spacetime_coordinate_lib', name: '时空坐标', nameEn: 'TIME-SPACE', desc: 'SUR3 coordinate anchors for era, place, reality domain, and technology boundary.', items: withGenreAxisForBlock('cd_spacetime_coordinate', spacetimeCoordinateItems, 'hard') },
  { id: 'cd_space_anchor_exact_lib', name: '空间锚点', nameEn: 'SPACE ANCHOR', desc: 'SUR3 space anchors for precise coordinate selection.', items: withGenreAxisForBlock('cd_space_anchor_exact', spaceAnchorItems, 'soft') },
  { id: 'cd_field_preset_lib', name: '场域预设', nameEn: 'FIELD PRESET', desc: 'SUR2 world-field presets translated into character-design constraints.', items: fieldPresetItems },
  { id: 'cd_style_protocol_primary_lib', name: '主造型协议', nameEn: 'PRIMARY FORM PROTOCOL', desc: 'Primary character / subject form protocol as a global concept-design system.', items: styleProtocolItems },
  { id: 'cd_style_protocol_secondary_lib', name: '副造型协议', nameEn: 'SECONDARY FORM PROTOCOL', desc: 'Secondary character / subject form protocol for fusion and controlled dissonance.', items: styleProtocolItems },
  { id: 'cd_fusion_rule_lib', name: '世界法则', nameEn: 'WORLD LAW', desc: 'Ontology permission level for conflicts across time-space, form protocol, identity, and visible details.', items: fusionRuleItems },
  { id: 'cd_identity_anchor_lib', name: '身份锚点', nameEn: 'IDENTITY ANCHOR', desc: 'Core persona, occupation, role, or function anchor.', items: withIdentityAnchorAxis(withGenreAxisForBlock('cd_persona', identityAnchorItems, 'hard')) },
  { id: 'cd_field_register_lib', name: '世界场域', nameEn: 'WORLD FIELD', desc: 'Global world/cultural field.', items: withGenreAxisForBlock('cd_field_preset', fieldRegisterItems, 'hard') },
  { id: 'cd_field_style_primary_lib', name: '主场域风格', nameEn: 'PRIMARY FIELD STYLE', desc: 'Primary semantic style vector.', items: fieldStyleItems },
  { id: 'cd_field_style_secondary_lib', name: '副场域风格', nameEn: 'SECONDARY FIELD STYLE', desc: 'Secondary semantic style vector.', items: fieldStyleItems },
  { id: 'cd_subject_kind_lib', name: '生成对象', nameEn: 'SUBJECT KIND', desc: 'Concept target type.', items: subjectKindItems },
  { id: 'cd_world_register_lib', name: '世界归属', nameEn: 'WORLD REGISTER', desc: 'Human world register.', items: withGenreAxisForBlock('cd_field_preset', worldRegisterItems, 'hard') },
  { id: 'cd_identity_seed_lib', name: '身份核心', nameEn: 'IDENTITY CORE', desc: 'Identity and function.', items: withGenreAxisForBlock('cd_persona', identitySeedItems, 'hard') },
  { id: 'cd_emotional_core_lib', name: '情绪核', nameEn: 'EMOTIONAL CORE', desc: 'Internal emotional drive and desire ideology.', items: withAppearanceThreeAxisMeta('cd_emotional_core', CD_EMOTIONAL_CORE) },
  { id: 'cd_negation_logic_lib', name: '异化逻辑', nameEn: 'NEGATION LOGIC', desc: 'Transformation logic.', items: negationLogicItems },
  { id: 'cd_design_translation_lib', name: '设计转译', nameEn: 'DESIGN TRANSLATION', desc: 'Human-first design translation.', items: designTranslationItems },
  { id: 'cd_design_sheet_lib', name: '图版格式', nameEn: 'SHEET FORMAT', desc: 'Design sheet format.', items: designSheetItems },
  { id: 'cd_age_lib', name: '年龄质感', nameEn: 'AGE TEXTURE', desc: 'Clean age texture for human and humanoid concept design.', items: withAppearanceThreeAxisMeta('cd_age', CD_AGE_TEXTURE) },
  { id: 'cd_gender_lib', name: '性别气质', nameEn: 'GENDER AURA', desc: 'Gender presentation as readable design aura, not biography.', items: withAppearanceThreeAxisMeta('cd_gender', CD_GENDER_AURA) },
  { id: 'cd_ethnicity_lib', name: '现实血统', nameEn: 'REAL HERITAGE', desc: 'Real bodily heritage: facial structure, skin range, and hair range, separated from national ideology and aesthetic coding.', items: CD_REAL_ETHNICITY },
  { id: 'cd_social_aesthetic_lib', name: '国家/社会审美接口', nameEn: 'SOCIAL AESTHETIC INTERFACE', desc: 'Ideological and social-aesthetic coding: nation, media, class, grooming, platform, and public self-presentation.', items: CD_SOCIAL_AESTHETIC_INTERFACE },
  { id: 'cd_species_lib', name: '幻想种族', nameEn: 'SPECIES', desc: 'Fantasy species.', items: withSubjectAxisMeta('cd_species', AES_SPECIES) },
  { id: 'cd_occupation_lib', name: '职业身份', nameEn: 'OCCUPATION', desc: 'Clean occupation functions: workflow, institution, tools, labor posture, and access permissions.', items: CD_OCCUPATION },
  { id: 'cd_persona_lib', name: '人设符号', nameEn: 'PERSONA SIGN', desc: 'Compound persona packages with ontology, era, risk, and style tags.', items: withPersonaAxisMeta('cd_persona', withManualGenreAxisForBlock('cd_persona', CD_PERSONA_LIBRARY, 'hard')) },
  { id: 'cd_body_type_lib', name: '轮廓体态', nameEn: 'BODY SILHOUETTE', desc: 'Aesthetic body silhouette and posture logic for concept design.', items: withAppearanceThreeAxisMeta('cd_body_type', [...CD_BODY_SILHOUETTE, ...CD_ADULT_GLAMOUR_BODY]) },
  { id: 'cd_hair_color_lib', name: '发色', nameEn: 'HAIR COLOR', desc: 'Hair color.', items: withGroomingAxisMeta('cd_hair_color', CD_HAIR_COLOR) },
  { id: 'cd_hair_style_f_lib', name: '发型-女式', nameEn: 'HAIRSTYLE FEM', desc: 'Feminine hairstyle.', items: withGroomingAxisMeta('cd_hair_style_f', CD_HAIR_STYLE_FEM) },
  { id: 'cd_hair_style_m_lib', name: '发型-男式', nameEn: 'HAIRSTYLE MASC', desc: 'Masculine hairstyle.', items: withGroomingAxisMeta('cd_hair_style_m', CD_HAIR_STYLE_MASC) },
  { id: 'cd_beard_style_lib', name: '胡子', nameEn: 'BEARD', desc: 'Facial hair and beard style.', items: withAppearanceThreeAxisMeta('cd_beard_style', CD_BEARD_STYLE) },
  { id: 'cd_eye_color_lib', name: '瞳色', nameEn: 'EYE COLOR', desc: 'Eye color.', items: withAppearanceThreeAxisMeta('cd_eye_color', CD_EYE_COLOR) },
  { id: 'cd_eye_shape_lib', name: '眼型', nameEn: 'EYE SHAPE', desc: 'Eye shape.', items: withAppearanceThreeAxisMeta('cd_eye_shape', CD_EYE_SHAPE) },
  { id: 'cd_eye_fx_lib', name: '眼部异变', nameEn: 'EYE MUTATION', desc: 'Eye mutation.', items: withAppearanceThreeAxisMeta('cd_eye_fx', CD_EYE_MUTATION) },
  { id: 'cd_face_features_lib', name: '面部特征', nameEn: 'FACE FEATURES', desc: 'Stable facial recognition structure.', items: withFaceExpressionAxisMeta('FACE_FEATURE', withFaceAxisMeta('cd_face_features', CD_FACE_FEATURES)) },
  { id: 'cd_makeup_style_lib', name: '妆容修饰', nameEn: 'MAKEUP', desc: 'Makeup, face paint, and stylized facial adornment.', items: withFaceExpressionAxisMeta('MAKEUP', withGroomingAxisMeta('cd_makeup_style', CD_MAKEUP_STYLE)) },
  { id: 'cd_expression_lib', name: '面部表情', nameEn: 'EXPRESSION', desc: 'Visible facial expression and desire-coded face state.', items: withFaceExpressionAxisMeta('EXPRESSION', withSimpleAxisDefaults(CD_EXPRESSION, universalHumanStateAxis)) },
  { id: 'cd_skin_texture_lib', name: '皮肤本体', nameEn: 'SKIN MATERIAL', desc: 'Intrinsic skin texture, marks, and boundary material.', items: withVisibleBodyCoreAxisMeta('SKIN', withVisibleBodyAxisMeta('cd_skin_texture', CD_SKIN_MATERIAL)) },
  { id: 'cd_surface_state_lib', name: '表面附着', nameEn: 'SURFACE STATE', desc: 'Sweat, rain, dust, grease, blood, powder, and other temporary coatings.', items: withVisibleBodyCoreAxisMeta('SURFACE', withVisibleBodyAxisMeta('cd_surface_state', CD_SURFACE_STATE)) },
  { id: 'cd_body_features_lib', name: '异形结构', nameEn: 'ANOMALOUS STRUCTURE', desc: 'Extra heads, multiple limbs, discontinuous bodies, anomalous lower bodies, and humanoid boundary skeletons.', items: withVisibleBodyCoreAxisMeta('BODY_FEATURE', withGenreAxisForBlock('cd_body_features', withVisibleBodyAxisMeta('cd_body_features', CD_BODY_FEATURES), 'soft')) },
  { id: 'cd_body_markings_lib', name: '身体标记', nameEn: 'BODY MARKINGS', desc: 'Marks written onto the body: tattoos, brands, scarification, ritual paint, body inscriptions.', items: withVisibleBodyCoreAxisMeta('BODY_MARKING', withGenreAxisForBlock('cd_body_markings', withVisibleBodyAxisMeta('cd_body_markings', CD_BODY_MARKINGS), 'soft')) },
  { id: 'cd_body_damage_lib', name: '身体损伤', nameEn: 'BODY DAMAGE', desc: 'Scars, fresh injury, medical repair, and loss.', items: withVisibleBodyCoreAxisMeta('BODY_DAMAGE', withVisibleBodyAxisMeta('cd_body_damage', CD_BODY_DAMAGE)) },
  { id: 'cd_body_modification_lib', name: '身体改造', nameEn: 'BODY MODIFICATION', desc: 'Prosthetics, cybernetics, biological boundary traits, and symbiosis.', items: withVisibleBodyCoreAxisMeta('BODY_MODIFICATION', withGenreAxisForBlock('cd_body_modification', withVisibleBodyAxisMeta('cd_body_modification', withSubjectAxisMeta('cd_body_modification', CD_BODY_MODIFICATION)), 'soft')) },
  { id: 'cd_static_pose_lib', name: '姿态语言', nameEn: 'POSE LANGUAGE', desc: 'Concept-design-safe static pose motifs with ontology, era, and risk metadata.', items: withActionAxisMeta('STATIC', CD_STATIC_POSE) },
  { id: 'cd_dynamic_action_lib', name: '动态动作', nameEn: 'DYNAMIC ACTION', desc: 'Concept-design-safe dynamic action motifs with ontology, era, and risk metadata.', items: withActionAxisMeta('DYNAMIC', CD_DYNAMIC_ACTION) },
  { id: 'cd_human_behavior_lib', name: '人类行为', nameEn: 'HUMAN BEHAVIOR', desc: 'Cleaned classic image-behavior motifs for original character identity boards.', items: withActionAxisMeta('BEHAVIOR', CD_HUMAN_BEHAVIOR) },
  { id: 'cd_creature_size_lib', name: '异种量级', nameEn: 'CREATURE SCALE', desc: 'Creature scale.', items: withCreatureAxisDefaults('cd_creature_size', AES_CREATURE_SIZE) },
  { id: 'cd_creature_class_lib', name: '异种纲目', nameEn: 'CREATURE TAXONOMY', desc: 'Creature taxonomy.', items: withCreatureAxisDefaults('cd_creature_class', withGenreAxisForBlock('cd_creature_class', AES_CREATURE_CLASS, 'soft')) },
  { id: 'cd_creature_element_lib', name: '元素属性', nameEn: 'ELEMENTAL TRAIT', desc: 'Elemental trait.', items: withCreatureAxisDefaults('cd_creature_element', withGenreAxisForBlock('cd_creature_element', AES_CREATURE_ELEMENT, 'soft')) },
  { id: 'cd_creature_head_lib', name: '头部结构', nameEn: 'HEAD STRUCTURE', desc: 'Head structure.', items: withCreatureAxisDefaults('cd_creature_head', withGenreAxisForBlock('cd_creature_head', AES_CREATURE_HEAD, 'soft')) },
  { id: 'cd_creature_body_lib', name: '身体部件', nameEn: 'BODY PARTS', desc: 'Body parts.', items: withCreatureAxisDefaults('cd_creature_body', withGenreAxisForBlock('cd_creature_body', AES_CREATURE_BODY, 'soft')) },
  { id: 'cd_creature_mood_lib', name: '异种情绪', nameEn: 'CREATURE MOOD', desc: 'Creature mood.', items: withCreatureAxisDefaults('cd_creature_mood', AES_CREATURE_MOOD) },
  { id: 'cd_creature_action_lib', name: '异种行为', nameEn: 'CREATURE BEHAVIOR', desc: 'Creature behavior.', items: withCreatureAxisDefaults('cd_creature_action', AES_CREATURE_ACTION) },
  { id: 'cd_creature_texture_lib', name: '异种材质', nameEn: 'CREATURE MATERIAL', desc: 'Creature material.', items: withCreatureAxisDefaults('cd_creature_texture', withGenreAxisForBlock('cd_creature_texture', AES_CREATURE_TEXTURE, 'soft')) },
  { id: 'cd_costume_logic_lib', name: '服装执行逻辑', nameEn: 'COSTUME EXECUTION', desc: 'Costume as the execution layer: how clothing and wearable gear become the body-world interface under the selected form protocol.', items: withDesignEvidenceAxisMeta('COSTUME', withGenreAxisForBlock('cd_costume_logic', costumeLogicItems, 'soft')) },
  { id: 'cd_surface_material_lib', name: '表面材料', nameEn: 'SURFACE MATERIAL', desc: 'Surface material.', items: withSimpleAxisDefaults(surfaceMaterialItems, physicalMaterialAxis) },
  { id: 'cd_costume_system_lib', name: '服装系统', nameEn: 'COSTUME SYSTEM', desc: 'The costume subsystem: it gives clothing a concrete wearable structure while obeying the global form protocol.', items: withSimpleAxisDefaults(withGenreAxisForBlock('cd_costume_system', costumeSystemItems, 'soft'), physicalMaterialAxis) },
  { id: 'cd_material_evidence_lib', name: '材料证据', nameEn: 'MATERIAL EVIDENCE', desc: 'Material evidence and craft logic.', items: withSimpleAxisDefaults(withGenreAxisForBlock('cd_costume_logic', materialEvidenceItems, 'soft'), physicalMaterialAxis) },
  { id: 'cd_prop_anchor_lib', name: '道具锚点', nameEn: 'PROP ANCHOR', desc: 'One functional prop anchor.', items: withDesignEvidenceAxisMeta('PROP', withGenreAxisForBlock('cd_prop_anchor', propAnchorItems, 'soft')) },
  { id: 'cd_symbol_system_lib', name: '符号系统', nameEn: 'SYMBOL SYSTEM', desc: 'External readable signs on clothing, props, institutions, factions, media, and world systems.', items: withDesignEvidenceAxisMeta('SYMBOL', withGenreAxisForBlock('cd_symbol_system', symbolSystemItems, 'soft')) },
  { id: 'cd_wear_trace_lib', name: '损耗痕迹', nameEn: 'WEAR TRACE', desc: 'Wear, maintenance, repair, and damage traces.', items: withSimpleAxisDefaults(wearTraceItems, physicalMaterialAxis) },
  { id: 'cd_palette_lib', name: '配色方案', nameEn: 'PALETTE', desc: 'Color palette.', items: AES_COLOR_PRESETS },
  { id: 'cd_director_style_lib', name: '实拍导演风格', nameEn: 'DIRECTOR STYLE', desc: 'Live-action director references registered under Concept Design.', items: DIRECTOR_STYLE_ITEMS },
  { id: 'cd_photo_style_lib', name: '摄影摄像流派', nameEn: 'PHOTO STYLE', desc: 'Photography and cinematography styles registered under Concept Design.', items: PHOTO_STYLE_ITEMS },
  { id: 'cd_art_style_lib', name: '艺术流派', nameEn: 'ART STYLE', desc: 'Art history and artist-movement references registered under Concept Design.', items: ART_STYLE_ITEMS },
  { id: 'cd_anim_director_lib', name: '动画导演风格', nameEn: 'ANIMATION DIRECTOR', desc: 'Animation director and studio references registered under Concept Design.', items: ANIMATION_DIRECTORS_LIB },
  { id: 'cd_art_movement_lib', name: '美术插画', nameEn: 'ILLUSTRATION', desc: 'Illustration, manga, game art, concept art, and commercial art references registered under Concept Design.', items: ART_MOVEMENTS_LIB },
  { id: 'cd_camera_system_lib', name: '摄影机系统', nameEn: 'CAMERA SYSTEM', desc: 'Camera sensor and format.', items: AES_CAMERA_SYSTEM },
  { id: 'cd_lens_series_lib', name: '镜头系列', nameEn: 'LENS SERIES', desc: 'Optical characteristics.', items: AES_LENS_SERIES },
  { id: 'cd_optical_format_lib', name: '光学格式', nameEn: 'OPTICAL FORMAT', desc: 'Aspect ratio and capture format.', items: AES_OPTICAL_FORMAT },
  { id: 'cd_texture_render_lib', name: '画面质感', nameEn: 'VISUAL TEXTURE', desc: 'Image surface and render texture.', items: AES_TEXTURE_RENDER },
  { id: 'cd_physical_grain_lib', name: '物理颗粒', nameEn: 'PHYSICAL GRAIN', desc: 'Grain, noise, and capture artifacts.', items: AES_PHYSICAL_GRAIN },
  { id: 'cd_base_tone_lib', name: '显影协议', nameEn: 'COLOR PROFILE', desc: 'Base contrast, saturation, and dynamic range.', items: AES_BASE_TONE },
  { id: 'cd_color_science_lib', name: '色彩科学', nameEn: 'COLOR SCIENCE', desc: 'Film stock, LUT, log, and color system references.', items: AES_COLOR_SCIENCE },
  { id: 'cd_art_medium_lib', name: '创作介质', nameEn: 'ART MEDIUM', desc: 'Art medium and rendering medium.', items: AES_ART_MEDIUM },
  { id: 'cd_line_quality_lib', name: '线条质量', nameEn: 'LINE QUALITY', desc: 'Linework and edge language.', items: AES_LINE_QUALITY },
  { id: 'cd_canvas_texture_lib', name: '画布质感', nameEn: 'CANVAS TEXTURE', desc: 'Canvas, paper, print, and surface texture.', items: AES_CANVAS_TEXTURE },
  { id: 'cd_shot_preset_lib', name: '拍摄协议预设', nameEn: 'SHOOTING PROTOCOL PRESET', desc: 'Template-style shooting protocols for film frames, posters, covers, street shots, social snapshots, object displays, scene setups, and abstract viewing relations.', items: CD_SHOT_PRESETS },
  { id: 'cd_framing_focus_lib', name: '画面焦点', nameEn: 'IMAGE FOCUS', desc: 'Primary reading focus.', items: AES_IMAGE_FOCUS },
  { id: 'cd_framing_shot_size_lib', name: '景别', nameEn: 'SHOT SIZE', desc: 'Camera distance and subject scale.', items: AES_SHOT_SIZE },
  { id: 'cd_framing_balance_lib', name: '视觉平衡', nameEn: 'VISUAL BALANCE', desc: 'Composition weight and balance.', items: AES_VISUAL_BALANCE },
  { id: 'cd_framing_perspective_lib', name: '透视', nameEn: 'PERSPECTIVE', desc: 'Perspective and spatial geometry.', items: AES_PERSPECTIVE },
  { id: 'cd_framing_angle_lib', name: '拍摄角度', nameEn: 'CAMERA ANGLE', desc: 'Camera angle and viewing height.', items: AES_ANGLE },
  { id: 'cd_framing_focal_length_lib', name: '焦段', nameEn: 'FOCAL LENGTH', desc: 'Field of view and compression.', items: AES_FOCAL_LENGTH },
  { id: 'cd_framing_depth_lib', name: '景深/焦点', nameEn: 'DEPTH OF FIELD', desc: 'Focus range and background separation.', items: AES_DEPTH },
  { id: 'cd_framing_shutter_lib', name: '快门', nameEn: 'SHUTTER', desc: 'Motion blur and freeze behavior.', items: AES_SHUTTER },
  { id: 'cd_framing_lens_fx_lib', name: '光学特效', nameEn: 'OPTICAL FX', desc: 'Optical filters, refraction, flares, and lens artifacts.', items: AES_LENS_FX },
  { id: 'cd_scene_real_lib', name: '现实场景', nameEn: 'REAL SCENE', desc: 'Physical and realistic scene presets.', items: withManualGenreAxisForBlock('cd_scene_real', CD_SCENE_REAL, 'hard') },
  { id: 'cd_scene_surreal_lib', name: '超现实场景', nameEn: 'SURREAL SCENE', desc: 'Surreal, dream, myth, and impossible scene presets.', items: withManualGenreAxisForBlock('cd_scene_surreal', CD_SCENE_SURREAL, 'hard') },
  { id: 'cd_scene_abstract_lib', name: '抽象场景', nameEn: 'ABSTRACT SCENE', desc: 'Abstract, psychological, and graphic scene presets.', items: withManualGenreAxisForBlock('cd_scene_abstract', CD_SCENE_ABSTRACT, 'soft') },
  { id: 'cd_atmosphere_lib', name: '天气/大气', nameEn: 'ATMOSPHERE', desc: 'Weather and air medium.', items: withManualGenreAxisForBlock('cd_atmosphere', CD_ATMOSPHERE, 'soft') },
  { id: 'cd_particles_lib', name: '粒子', nameEn: 'PARTICLES', desc: 'Suspended particles and atmospheric detail.', items: withManualGenreAxisForBlock('cd_particles', CD_PARTICLES, 'soft') },
  { id: 'cd_light_mood_lib', name: '光影基调', nameEn: 'LIGHTING MOOD', desc: 'Lighting mood and contrast preset pack.', items: lightMoodItems },
  { id: 'cd_light_type_lib', name: '光源锚点', nameEn: 'LIGHT SOURCE ANCHOR', desc: 'Light source anchors with spacetime legality and reality anchors.', items: withManualGenreAxisForBlock('cd_light_type', lightTypeItems, 'soft') },
  { id: 'cd_light_direction_lib', name: '光投射方向', nameEn: 'LIGHT DIRECTION', desc: 'Light position and direction with random safety metadata.', items: lightDirectionItems },
  { id: 'cd_light_shape_lib', name: '光投影形状', nameEn: 'LIGHT SHAPE', desc: 'Light shape and shadow texture with projection metadata.', items: lightShapeItems },
  { id: 'cd_color_palette_lib', name: '美术配色', nameEn: 'COLOR PALETTE', desc: 'Whole-image color palette.', items: AES_COLOR_PRESETS },
  { id: 'cd_render_real_lib', name: '画质增强(写实)', nameEn: 'QUALITY REAL', desc: 'Quality boosters for photography and realistic rendering.', items: AES_RENDER_REAL },
  { id: 'cd_render_art_lib', name: '画质增强(美术)', nameEn: 'QUALITY ART', desc: 'Quality boosters for illustration, painting, and stylized rendering.', items: AES_RENDER_ART },
  ...CONCEPT_MEDIA_STYLE_LIBRARIES,
  { id: 'cd_negative_rules_lib', name: '禁用项', nameEn: 'NEGATIVE RULES', desc: 'Negative constraints.', items: negativeRuleItems },
];
