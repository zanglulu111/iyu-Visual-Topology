import type { LibraryItemDef } from '../../../types';
import { normalizeConceptAxisTags } from './axisTags';
import { CONCEPT_CATEGORY_AXIS_IDS } from './categoryAxis';

export type ConceptSimpleAxisFilterTags = Partial<Record<'eraTags' | 'realityTags' | 'categoryTags', readonly string[]>>;

export type ConceptSimpleAxisAffinity = 'strong' | 'usable' | 'neutral' | 'weak' | 'conflict';
export type ConceptCategoryFitLevel = 'strong' | 'usable' | 'fusion' | 'weak' | 'neutral' | 'exclude';
type ConceptUnlistedFitLevel = 'none' | 'usable' | 'weak' | 'exclude';

export type ConceptSimpleAxisMatch = {
  affinityLevel: ConceptSimpleAxisAffinity;
  score: number;
  eraScore: number;
  realityScore: number;
  categoryScore: number;
  categoryFilterActive: boolean;
  categoryFitLevel: ConceptCategoryFitLevel;
  matchedEra: string[];
  matchedReality: string[];
  matchedCategory: string[];
  itemEraTags: string[];
  itemRealityTags: string[];
  itemRealityLevel: 1 | 2 | 3 | 4 | 5;
};

const toList = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String).map(item => item.trim()).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const uniq = (values: readonly string[]): string[] => {
  const seen = new Set<string>();
  return values.filter(value => {
    const key = value.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const intersect = (a: readonly string[] = [], b: readonly string[] = []) => {
  if (!a.length || !b.length) return [];
  const set = new Set(a.map(value => value.toLowerCase()));
  return b.filter(value => set.has(value.toLowerCase()));
};

const clampRealityLevel = (value: unknown): 1 | 2 | 3 | 4 | 5 => {
  const level = Number(value || 1);
  if (level >= 5) return 5;
  if (level >= 4) return 4;
  if (level >= 3) return 3;
  if (level >= 2) return 2;
  return 1;
};

const eraAliases: Record<string, string[]> = {
  feudal: ['feudal'],
  early_modern: ['early_modern'],
  industrial: ['industrial'],
  modern: ['modern'],
  contemporary: ['contemporary'],
  near_future: ['near_future', 'future'],
  far_future: ['far_future', 'future'],
  origin: ['primitive'],
  ancient: ['slave', 'feudal'],
  classical: ['slave'],
  medieval: ['feudal'],
  pre_modern: ['slave', 'feudal', 'early_modern'],
  pre_modern_to_modern: ['feudal', 'early_modern', 'industrial', 'modern'],
  renaissance: ['early_modern'],
  twentieth_century: ['modern'],
  modern_digital: ['modern', 'contemporary', 'near_future'],
  industrial_or_modern: ['industrial', 'modern', 'contemporary'],
  future: ['near_future', 'far_future'],
  digital: ['near_future', 'far_future'],
  timeless: ['timeless'],
  all_eras: ['timeless'],
  open_time: ['timeless'],
  mythic_or_dream: ['mythic', 'timeless'],
  mythic_or_surreal_light: ['mythic', 'timeless'],
  future_or_abstract: ['near_future', 'far_future', 'timeless']
};

const normalizeEraTag = (value: string) => value.trim().toLowerCase();
const normalizeCategoryTag = (value: string) => value.trim().toLowerCase();

const normalizeCategoryTags = (values: readonly string[]) => uniq(values
  .map(normalizeCategoryTag)
  .filter(value => CONCEPT_CATEGORY_AXIS_IDS.has(value as any)));

const normalizeCategoryFit = (item: LibraryItemDef): Record<ConceptCategoryFitLevel, string[]> => {
  const merged = {
    strong: normalizeCategoryTags(toList(item.categoryFit?.strong)),
    usable: normalizeCategoryTags(toList(item.categoryFit?.usable)),
    fusion: normalizeCategoryTags(toList(item.categoryFit?.fusion)),
    weak: normalizeCategoryTags(toList(item.categoryFit?.weak)),
    exclude: normalizeCategoryTags(toList(item.categoryFit?.exclude)),
    neutral: []
  };
  const excludeSet = new Set(merged.exclude);
  const strongSet = new Set(merged.strong.filter(tag => !excludeSet.has(tag)));
  const usableSet = new Set(merged.usable.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag)));
  const fusionSet = new Set(merged.fusion.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag) && !usableSet.has(tag)));
  const weakSet = new Set(merged.weak.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag) && !usableSet.has(tag) && !fusionSet.has(tag)));
  return {
    strong: Array.from(strongSet),
    usable: Array.from(usableSet),
    fusion: Array.from(fusionSet),
    weak: Array.from(weakSet),
    exclude: merged.exclude,
    neutral: []
  };
};

const normalizeUnlistedFit = (value: unknown): ConceptUnlistedFitLevel => {
  if (value === 'usable' || value === 'weak' || value === 'exclude') return value;
  return 'none';
};

const getCategoryFitMatch = (item: LibraryItemDef, activeCategoryTags: readonly string[]) => {
  const empty = { level: 'neutral' as ConceptCategoryFitLevel, score: 0, matched: [] as string[] };
  if (!activeCategoryTags.length) return empty;
  const fit = normalizeCategoryFit(item);
  const excluded = intersect(fit.exclude, activeCategoryTags);
  if (excluded.length) return { level: 'exclude' as ConceptCategoryFitLevel, score: -24, matched: excluded };
  const strong = intersect(fit.strong, activeCategoryTags);
  if (strong.length) return { level: 'strong' as ConceptCategoryFitLevel, score: 18, matched: strong };
  const usable = intersect(fit.usable, activeCategoryTags);
  if (usable.length) return { level: 'usable' as ConceptCategoryFitLevel, score: 12, matched: usable };
  const fusion = intersect(fit.fusion, activeCategoryTags);
  if (fusion.length) return { level: 'fusion' as ConceptCategoryFitLevel, score: 7, matched: fusion };
  const weak = intersect(fit.weak, activeCategoryTags);
  if (weak.length) return { level: 'weak' as ConceptCategoryFitLevel, score: -2, matched: weak };
  const unlisted = normalizeUnlistedFit(item.categoryFit?.unlisted);
  if (unlisted === 'usable') return { level: 'usable' as ConceptCategoryFitLevel, score: 5, matched: ['unlisted'] };
  if (unlisted === 'weak') return { level: 'weak' as ConceptCategoryFitLevel, score: -2, matched: ['unlisted'] };
  if (unlisted === 'exclude') return { level: 'exclude' as ConceptCategoryFitLevel, score: -24, matched: ['unlisted'] };
  return empty;
};

const expandEraTags = (values: readonly string[]) => uniq(values.flatMap(value => {
  const tag = normalizeEraTag(value);
  return eraAliases[tag] || [tag];
}));

const realityTierTags: Record<string, string[]> = {
  realistic: ['realistic', 'physical', 'social', 'naturalistic', 'historical', 'institutional', 'physical_light', 'practical_source'],
  stylized: ['realistic', 'physical', 'stylized', 'semi_real', 'uncanny', 'religious', 'ritual'],
  semi_surreal: ['stylized', 'semi_real', 'semi_surreal', 'uncanny', 'magical', 'mythic', 'speculative', 'technological'],
  nonreal: ['non_realist', 'mythic', 'magical', 'dream', 'cosmic', 'alien', 'digital', 'abstract', 'surreal', 'symbolic'],
  abstract: ['abstract', 'surreal', 'symbolic', 'dream', 'non_realist', 'materialized']
};

const realityTierMaxLevel: Record<string, 1 | 2 | 3 | 4 | 5> = {
  realistic: 1,
  stylized: 2,
  semi_surreal: 3,
  nonreal: 4,
  abstract: 5
};

const normalizeRealityFilters = (values: readonly string[]) => uniq(values.flatMap(value => {
  const tag = value.trim().toLowerCase();
  return realityTierTags[tag] || [tag];
}));

export const CONCEPT_REALITY_AXIS = [
  { id: 'realistic', label: '现实', labelEn: 'Realistic' },
  { id: 'stylized', label: '风格化现实', labelEn: 'Stylized Real' },
  { id: 'semi_surreal', label: '轻度超现实', labelEn: 'Semi-Surreal' },
  { id: 'nonreal', label: '非现实本体', labelEn: 'Non-Real Ontology' },
  { id: 'abstract', label: '抽象强超现实', labelEn: 'Abstract Surreal' }
] as const;

export const VISUAL_STYLE_AXIS_FREE_BLOCK_IDS = new Set([
  'cd_fusion_rule',
  'cd_field_register',
  'cd_field_style_primary',
  'cd_field_style_secondary',
  'cd_subject_kind',
  'cd_world_register',
  'cd_identity_seed',
  'cd_negation_logic',
  'cd_design_translation',
  'cd_design_sheet',
  'cd_palette',
  'cd_color_palette',
  'cd_render_real',
  'cd_render_art',
  'cd_negative_rules',
  'cd_director_style',
  'cd_photo_style',
  'cd_art_style',
  'cd_anim_director',
  'cd_art_movement',
  'cd_camera_system',
  'cd_lens_series',
  'cd_optical_format',
  'cd_texture_render',
  'cd_physical_grain',
  'cd_base_tone',
  'cd_color_science',
  'cd_art_medium',
  'cd_line_quality',
  'cd_canvas_texture',
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
  'cd_media_tangible_soul',
  'cd_shot_preset',
  'cd_framing_focus',
  'cd_framing_shot_size',
  'cd_framing_balance',
  'cd_framing_perspective',
  'cd_framing_angle',
  'cd_framing_focal_length',
  'cd_framing_depth',
  'cd_framing_shutter',
  'cd_framing_lens_fx'
]);

export const blockUsesSimpleHardAxis = (blockId: string) => !VISUAL_STYLE_AXIS_FREE_BLOCK_IDS.has(blockId);

export const getConceptSimpleAxisMatch = (
  item: LibraryItemDef,
  filters: ConceptSimpleAxisFilterTags
): ConceptSimpleAxisMatch => {
  const axis = normalizeConceptAxisTags(item);
  const activeEraTags = expandEraTags(toList(filters.eraTags));
  const activeRealityTags = normalizeRealityFilters(toList(filters.realityTags));
  const activeCategoryTags = normalizeCategoryTags(toList(filters.categoryTags));
  const categoryFilterActive = activeCategoryTags.length > 0;
  const itemEraTags = expandEraTags([
    ...toList(item.eraTags),
    ...toList(item.eras)
  ]);
  const itemRealityTags = normalizeRealityFilters([
    ...toList(item.realityTags),
    ...toList((item as any).realityAnchor)
  ]);
  const itemRealityLevel = clampRealityLevel(item.ontologyLevel || (item as any).surrealLevel);
  const activeRealityMax = Math.max(1, ...toList(filters.realityTags).map(tag => realityTierMaxLevel[tag] || 1)) as 1 | 2 | 3 | 4 | 5;

  const matchedEra = intersect(itemEraTags, activeEraTags);
  const eraUniversal = (item as any).eraMode === 'universal' || itemEraTags.length === 0;
  const eraScore = activeEraTags.length === 0 || eraUniversal
    ? 2
    : matchedEra.length > 0
      ? 8
      : (item.eraStrictness === 'hard' ? -12 : -4);

  const matchedReality = intersect(itemRealityTags, activeRealityTags);
  const realityNeutral = itemRealityTags.includes('reality_neutral') || itemRealityTags.includes('universal_reality');
  const realityTagsEmpty = itemRealityTags.length === 0 || activeRealityTags.length === 0;
  const realityLevelOk = itemRealityLevel <= activeRealityMax;
  const realityScore = realityNeutral
    ? 2
    : realityTagsEmpty
    ? (realityLevelOk ? 2 : -8)
    : matchedReality.length > 0
      ? (realityLevelOk ? 8 : 2)
      : (realityLevelOk ? -2 : -10);
  const categoryMatch = getCategoryFitMatch(item, activeCategoryTags);
  const categoryScore = categoryMatch.score;

  const score = eraScore + realityScore + categoryScore;
  const affinityLevel: ConceptSimpleAxisAffinity = categoryFilterActive && (categoryMatch.level === 'neutral' || categoryMatch.level === 'weak')
    ? 'weak'
    : categoryMatch.level === 'exclude' || score < -6
    ? 'conflict'
    : score >= 18
      ? 'strong'
      : score >= 8
        ? 'usable'
      : score >= 2
        ? 'neutral'
          : 'weak';

  return {
    affinityLevel,
    score,
    eraScore,
    realityScore,
    categoryScore,
    categoryFilterActive,
    categoryFitLevel: categoryMatch.level,
    matchedEra,
    matchedReality,
    matchedCategory: categoryMatch.matched,
    itemEraTags,
    itemRealityTags,
    itemRealityLevel
  };
};

export const simpleAxisSortScore = (match: ConceptSimpleAxisMatch) => {
  const rank: Record<ConceptSimpleAxisAffinity, number> = {
    strong: 500,
    usable: 360,
    neutral: 200,
    weak: 80,
    conflict: -500
  };
  return rank[match.affinityLevel] + match.score;
};

export const simpleAxisRecommended = (match: ConceptSimpleAxisMatch) => (
  match.categoryFilterActive
    ? match.categoryFitLevel === 'strong' || match.categoryFitLevel === 'usable' || match.categoryFitLevel === 'fusion'
    : match.affinityLevel === 'strong' || match.affinityLevel === 'usable' || match.affinityLevel === 'neutral'
);
