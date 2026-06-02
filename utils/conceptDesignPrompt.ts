import { LibraryItemDef, NarrativeFieldState } from '../types';
import { CONCEPT_ENGINE_LIBRARY } from '../data/concept_design/core';
import { findItemFull } from '../services/dataRegistry';

const getEnglishName = (tag: string) => {
  const match = tag.match(/\((.*?)\)/);
  return match ? match[1].trim() : tag.trim();
};

const getCnName = (tag: string) => tag.split('(')[0].trim();

const getItem = (tag: string, blockId: string): LibraryItemDef | null =>
  findItemFull(tag, blockId) as LibraryItemDef | null;

const mediaStyleBlocks = [
  'cd_media_photo_soul',
  'cd_media_photo_quality',
  'cd_media_photo_eye',
  'cd_media_photo_craft',
  'cd_media_photo_format',
  'cd_media_paint_soul',
  'cd_media_paint_quality',
  'cd_media_paint_eye',
  'cd_media_paint_craft',
  'cd_media_paint_format',
  'cd_media_cgi_soul',
  'cd_media_cgi_quality',
  'cd_media_cgi_eye',
  'cd_media_cgi_craft',
  'cd_media_cgi_format',
  'cd_media_tangible_soul',
  'cd_media_tangible_quality',
  'cd_media_tangible_eye',
  'cd_media_tangible_craft',
  'cd_media_tangible_format'
];

export const getConceptLibraryCount = (blockId: string): number => {
  const category = CONCEPT_ENGINE_LIBRARY.find(item => item.id === `${blockId}_lib`);
  return category?.items.length || 0;
};

export const generateConceptDesignPrompt = (
  fieldState: NarrativeFieldState,
  lang: 'CN' | 'EN' = 'EN'
): string => {
  const tagLabel = (tag: string) => lang === 'EN' ? getEnglishName(tag) : getCnName(tag);
  const tags = (blockId: string) => {
    const raw = fieldState[blockId] || [];
    return raw.filter(Boolean).map(tag => {
      const item = getItem(tag, blockId);
      const label = tagLabel(tag);
      const def = lang === 'EN'
        ? ((item as any)?.defEn || item?.def || '')
        : (item?.def || (item as any)?.defEn || '');
      return def ? `${label} (${def})` : label;
    });
  };
  const join = (blockId: string) => tags(blockId).join(', ');
  const section = (title: string, value: string) => value ? `${title}: ${value}` : '';

  const identity = [
    join('cd_subject_kind'),
    join('cd_identity_seed'),
    join('cd_age'),
    join('cd_ethnicity'),
    join('cd_social_aesthetic'),
    join('cd_gender'),
    join('cd_species'),
    join('cd_occupation'),
    join('cd_persona'),
  ].filter(Boolean).join(', ');

  const anatomy = [
    join('cd_body_type'),
    join('cd_hair_color'),
    join('cd_hair_style_f'),
    join('cd_hair_style_m'),
    join('cd_eye_color'),
    join('cd_eye_shape'),
    join('cd_eye_fx'),
    join('cd_face_features'),
    join('cd_makeup_style'),
    join('cd_expression'),
    join('cd_skin_texture'),
    join('cd_surface_state'),
    join('cd_body_features'),
    join('cd_body_markings'),
    join('cd_body_damage'),
    join('cd_body_modification'),
    join('cd_costume_logic'),
    join('cd_prop_anchor'),
    join('cd_symbol_system'),
    join('cd_static_pose'),
    join('cd_dynamic_action'),
    join('cd_human_behavior'),
  ].filter(Boolean).join(', ');

  const creature = [
    join('cd_creature_size'),
    join('cd_creature_class'),
    join('cd_creature_element'),
    join('cd_creature_head'),
    join('cd_creature_body'),
    join('cd_creature_mood'),
    join('cd_creature_action'),
    join('cd_creature_texture'),
  ].filter(Boolean).join(', ');

  const material = [
    join('cd_surface_material'),
    join('cd_palette'),
  ].filter(Boolean).join(', ');

  const style = [
    join('cd_design_sheet'),
    ...mediaStyleBlocks.map(join),
  ].filter(Boolean).join(', ');

  const customSeed = (fieldState.cd_custom_seed || []).filter(Boolean).join('\n');
  const negative = join('cd_negative_rules');

  if (lang === 'CN') {
    return [
      '生成一张干净、可读、用于生产的【人物/异种概念设计图】，不要生成电影剧照。',
      section('身份核心', identity),
      section('情绪核', join('cd_emotional_core')),
      section('异化逻辑', join('cd_negation_logic')),
      section('人物解剖与轮廓', anatomy),
      section('异种解剖与行为', creature),
      section('服装/材质/配色', material),
      section('图版与渲染', style),
      section('自定义种子', customSeed),
      section('负面约束', negative),
      '最终必须保持单一主体、清晰轮廓、可辨识材质、设计板排版、干净中性背景。'
    ].filter(Boolean).join('\n');
  }

  return [
    'Create a clean, production-ready character / creature concept design sheet, not a cinematic still.',
    section('Identity core', identity),
    section('Emotional core', join('cd_emotional_core')),
    section('Mutation / negation logic', join('cd_negation_logic')),
    section('Human anatomy and silhouette', anatomy),
    section('Creature anatomy and behavior', creature),
    section('Costume, material, and palette', material),
    section('Sheet format and render style', style),
    section('Custom seed', customSeed),
    section('Negative constraints', negative),
    'Final image must use a single primary subject, readable silhouette, clear material callouts, concept sheet layout, clean neutral background.'
  ].filter(Boolean).join('\n');
};
