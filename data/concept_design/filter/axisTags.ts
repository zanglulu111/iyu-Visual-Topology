import type { LibraryItemDef } from '../../../types';

export type ConceptCommonLevel = 0 | 1 | 2;

export type ConceptAxisTags = {
  typeTags: string[];
  compatibleTypeTags: string[];
  eraTags: string[];
  sceneClassTags: string[];
  sceneTags: string[];
  evidenceTags: string[];
  riskTags: string[];
  conflictTags: string[];
  commonLevel: ConceptCommonLevel;
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

const boundedCommonLevel = (value: unknown): ConceptCommonLevel | null => {
  if (value === 0 || value === 1 || value === 2) return value;
  if (typeof value === 'string') {
    if (value === '0' || value === 'specific') return 0;
    if (value === '1' || value === 'broad') return 1;
    if (value === '2' || value === 'universal') return 2;
  }
  return null;
};

const broadEraIds = new Set([
  'primitive',
  'slave',
  'feudal',
  'early_modern',
  'industrial',
  'modern',
  'contemporary',
  'near_future',
  'far_future',
  'future',
  'mythic',
  'timeless'
]);

const weakEvidenceTags = new Set([
  'realistic',
  'social',
  'body',
  'symbol',
  'technology',
  'historical',
  'urban'
]);

const inferCommonLevel = (item: LibraryItemDef, axis: Omit<ConceptAxisTags, 'commonLevel'>): ConceptCommonLevel => {
  const explicit = boundedCommonLevel(item.commonLevel);
  if (explicit !== null) return explicit;

  const ontology = Number(item.ontologyLevel || 1);
  const risk = item.risk || 'clean';
  const hasRisk = axis.riskTags.length > 0 || axis.conflictTags.length > 0 || risk !== 'clean';
  const allEras = axis.eraTags.length > 0 && axis.eraTags.every(tag => broadEraIds.has(tag));
  const hasSpecificWorld =
    axis.typeTags.length > 2 ||
    axis.compatibleTypeTags.length > 2 ||
    axis.sceneClassTags.length > 0 ||
    axis.sceneTags.length > 0 ||
    axis.evidenceTags.some(tag => !weakEvidenceTags.has(tag.toLowerCase()));

  if (ontology <= 1 && !hasRisk && (allEras || axis.eraTags.length === 0) && !hasSpecificWorld) return 2;
  if (ontology <= 2 && !hasRisk) return 1;
  return 0;
};

export const normalizeConceptAxisTags = (item: LibraryItemDef): ConceptAxisTags => {
  const typeTags = uniq([
    ...toList(item.typeTags),
    ...toList(item.genreTags)
  ]);
  const compatibleTypeTags = uniq([
    ...toList(item.compatibleTypeTags),
    ...toList(item.compatibleGenres)
  ]);
  const eraTags = uniq([
    ...toList(item.eraTags),
    ...toList(item.eras),
    ...toList(item.compatibleEras),
    ...toList(item.timeTags)
  ]);
  const sceneClassTags = uniq([
    ...toList(item.sceneClassTags),
    ...toList(item.cultureTags),
    ...toList(item.compatibleCultures),
    ...toList(item.cultureRole),
    ...toList(item.genreRole)
  ]);
  const sceneTags = uniq([
    ...toList(item.sceneTags),
    ...toList(item.spaceTags),
    ...toList(item.compatibleSpaces)
  ]);
  const evidenceTags = uniq([
    ...toList(item.evidenceTags),
    ...toList(item.publicFilterTags),
    ...toList(item.nativeTags),
    ...toList(item.tags),
    ...toList(item.affects),
    ...toList(item.controls)
  ]);
  const riskTags = uniq([
    ...toList(item.riskTags),
    ...(item.risk && item.risk !== 'clean' ? [item.risk] : [])
  ]);
  const conflictTags = uniq(toList(item.conflictTags));
  const baseAxis = { typeTags, compatibleTypeTags, eraTags, sceneClassTags, sceneTags, evidenceTags, riskTags, conflictTags };

  return {
    ...baseAxis,
    commonLevel: inferCommonLevel(item, baseAxis)
  };
};

export const conceptAxisFieldNames = [
  'typeTags',
  'compatibleTypeTags',
  'eraTags',
  'sceneClassTags',
  'sceneTags',
  'evidenceTags',
  'commonLevel',
  'riskTags',
  'conflictTags'
] as const;
