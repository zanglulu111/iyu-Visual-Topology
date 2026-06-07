import type { LibraryItemDef } from '../../../types';
import { normalizeConceptAxisTags, type ConceptAxisTags } from './axisTags';
import { TYPE_GRAVITY_RULES } from './typeGravityRules';

export type ConceptKeywordFilterTags = Partial<Record<
  'nativeTags' | 'evidenceTags' | 'primaryGenreTags' | 'genreTags' | 'eraTags' | 'cultureTags' | 'spaceTags' | 'riskTags',
  readonly string[]
>>;

export type ConceptAxisAffinityLevel = 'strong' | 'usable' | 'weak' | 'fusion' | 'low' | 'conflict';

export type ConceptAxisMatchScore = {
  axis: ConceptAxisTags;
  affinityLevel: ConceptAxisAffinityLevel;
  affinityLabel: string;
  score: number;
  nativeScore: number;
  evidenceScore: number;
  genreScore: number;
  compatibleTypeScore: number;
  eraScore: number;
  sceneClassScore: number;
  sceneScore: number;
  commonScore: number;
  gravityScore: number;
  strongPrimaryScore: number;
  riskPenalty: number;
  matchedNative: string[];
  matchedEvidence: string[];
  matchedGenre: string[];
  matchedPrimaryGenre: string[];
  matchedCompatibleGenre: string[];
  matchedGravityType: string[];
  matchedEra: string[];
  matchedSceneClass: string[];
  matchedScene: string[];
  matchedGravityEvidence: string[];
  matchedGravitySceneClass: string[];
  matchedGravityScene: string[];
  riskHits: string[];
  hasTypeGravity: boolean;
  hasPrimaryAxis: boolean;
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

const affinityLabels: Record<ConceptAxisAffinityLevel, string> = {
  strong: '强相关',
  usable: '可用',
  weak: '弱相关',
  fusion: '融合候选',
  low: '低权重',
  conflict: '冲突排除'
};

const weakAffinityEvidenceTags = new Set([
  'symbol',
  'body',
  'institution',
  'ritual',
  'magic',
  'technology',
  'training',
  'combat',
  'weapon',
  'survival',
  'hazard',
  'realistic',
  'social',
  'costume',
  'historical',
  'period',
  'wear',
  'travel',
  'tool',
  'prop',
  'pose',
  'surface',
  'emotion',
  'lab'
]);

const weakAffinitySceneTags = new Set([
  'interior',
  'street',
  'city',
  'landscape',
  'threshold',
  'stage',
  'void',
  'abstract'
]);

const onlyStrongEvidence = (values: readonly string[]) => values.filter(value => !weakAffinityEvidenceTags.has(value.toLowerCase()));
const onlySpecificScene = (values: readonly string[]) => values.filter(value => !weakAffinitySceneTags.has(value.toLowerCase()));

export const scoreConceptAxisMatch = (
  item: LibraryItemDef,
  keywordFilterTags: ConceptKeywordFilterTags,
  options: { strongNativeTags?: readonly string[] } = {}
): ConceptAxisMatchScore => {
  const axis = normalizeConceptAxisTags(item);
  const nativeTags = toList(options.strongNativeTags || keywordFilterTags.nativeTags);
  const evidenceTags = toList(keywordFilterTags.evidenceTags);
  const primaryTypeTags = toList(keywordFilterTags.primaryGenreTags);
  const genreTags = toList(keywordFilterTags.genreTags);
  const eraTags = toList(keywordFilterTags.eraTags);
  const sceneClassTags = toList(keywordFilterTags.cultureTags);
  const sceneTags = toList(keywordFilterTags.spaceTags);
  const riskFilterTags = toList(keywordFilterTags.riskTags);

  const activeTypeTags = uniq([...primaryTypeTags, ...genreTags]);
  const activeRules = activeTypeTags.map(tag => TYPE_GRAVITY_RULES[tag]).filter(Boolean);
  const primaryRules = primaryTypeTags.map(tag => TYPE_GRAVITY_RULES[tag]).filter(Boolean);

  const matchedNative = intersect(axis.evidenceTags, nativeTags);
  const matchedEvidence = intersect(axis.evidenceTags, evidenceTags);
  const matchedGenre = intersect(axis.typeTags, genreTags);
  const matchedPrimaryGenre = intersect(axis.typeTags, primaryTypeTags);
  const matchedCompatibleGenre = intersect(axis.compatibleTypeTags, activeTypeTags);
  const matchedEra = intersect(axis.eraTags, eraTags);
  const matchedSceneClass = intersect(axis.sceneClassTags, sceneClassTags);
  const matchedScene = intersect(axis.sceneTags, sceneTags);
  const matchedGravityType = uniq(activeRules.flatMap(rule => intersect(axis.typeTags, rule.strongTypeTags)));
  const matchedGravityEvidence = uniq(activeRules.flatMap(rule => intersect(axis.evidenceTags, rule.strongEvidenceTags)));
  const matchedGravitySceneClass = uniq(activeRules.flatMap(rule => intersect(axis.sceneClassTags, rule.preferredSceneClassTags)));
  const matchedGravityScene = uniq(activeRules.flatMap(rule => intersect(axis.sceneTags, rule.preferredSceneTags)));
  const matchedPrimaryGravityType = uniq(primaryRules.flatMap(rule => intersect(axis.typeTags, rule.strongTypeTags)));
  const matchedPrimaryGravityEvidence = uniq(primaryRules.flatMap(rule => intersect(axis.evidenceTags, rule.strongEvidenceTags)));
  const matchedPrimaryGravitySceneClass = uniq(primaryRules.flatMap(rule => intersect(axis.sceneClassTags, rule.preferredSceneClassTags)));
  const matchedPrimaryGravityScene = uniq(primaryRules.flatMap(rule => intersect(axis.sceneTags, rule.preferredSceneTags)));
  const strongNativeMatches = onlyStrongEvidence(matchedNative);
  const strongPrimaryGravityEvidenceMatches = onlyStrongEvidence(matchedPrimaryGravityEvidence);
  const strongPrimaryUsableEvidenceMatches = onlyStrongEvidence(matchedPrimaryGravityEvidence);
  const specificSceneMatches = onlySpecificScene(matchedScene);
  const specificPrimaryGravitySceneMatches = onlySpecificScene(matchedPrimaryGravityScene);
  const ruleConflictHits = uniq(activeRules.flatMap(rule => intersect(
    [...axis.conflictTags, ...axis.riskTags, ...axis.evidenceTags, ...axis.typeTags],
    rule.conflictTags
  )));
  const riskHits = uniq([
    ...intersect(axis.riskTags, riskFilterTags),
    ...intersect(axis.conflictTags, riskFilterTags),
    ...ruleConflictHits
  ]);

  const nativeScore = matchedNative.length ? 5 : 0;
  const evidenceScore = matchedEvidence.length ? 2 : 0;
  const broadTypeMatches = matchedGenre.filter(tag => !primaryTypeTags.includes(tag));
  const genreScore = matchedPrimaryGenre.length ? 6 : broadTypeMatches.length ? 4 : matchedGravityType.length ? 3 : 0;
  const compatibleTypeScore = matchedCompatibleGenre.length ? 2 : 0;
  const eraScore = matchedEra.length ? 3 : 0;
  const sceneClassScore = matchedSceneClass.length ? 3 : 0;
  const sceneScore = matchedScene.length ? 3 : 0;
  const gravityScore =
    (matchedGravityEvidence.length ? 5 : 0) +
    (matchedGravitySceneClass.length ? 2 : 0) +
    (matchedGravityScene.length ? 2 : 0);
  const strongPrimaryScore =
    (matchedPrimaryGenre.length ? 6 : 0) +
    (matchedPrimaryGravityType.length ? 3 : 0) +
    (strongNativeMatches.length ? 5 : 0) +
    (strongPrimaryGravityEvidenceMatches.length ? 5 : 0) +
    (matchedPrimaryGravitySceneClass.length ? 2 : 0);
  const commonScore = axis.commonLevel;
  const riskPenalty = riskHits.length * -4;
  const score = nativeScore + evidenceScore + genreScore + compatibleTypeScore + eraScore + sceneClassScore + sceneScore + gravityScore + commonScore + riskPenalty;
  const hasTypeGravity = activeRules.length > 0;
  const hasPrimaryAxis = strongPrimaryScore >= 5;
  const hasDirectTypeMatch = matchedPrimaryGenre.length > 0 || matchedPrimaryGravityType.length > 0;
  const hasStrongEvidenceMatch = strongNativeMatches.length > 0 || strongPrimaryGravityEvidenceMatches.length > 0;
  const hasSceneGravityMatch = matchedGravitySceneClass.length > 0 || matchedGravityScene.length > 0;
  const hasContextMatch = matchedEra.length > 0 || matchedSceneClass.length > 0 || matchedScene.length > 0 || hasSceneGravityMatch;
  const hasFusionTypeMatch = matchedCompatibleGenre.length > 0 || matchedGenre.length > matchedPrimaryGenre.length || matchedGravityType.length > matchedPrimaryGravityType.length;
  const hasUsableEvidence = strongPrimaryUsableEvidenceMatches.length > 0;
  const affinityLevel: ConceptAxisAffinityLevel = riskHits.length
    ? 'conflict'
    : hasDirectTypeMatch
      ? 'strong'
      : hasFusionTypeMatch
        ? 'fusion'
        : hasStrongEvidenceMatch || (score >= 8 && hasContextMatch && hasUsableEvidence)
          ? 'usable'
          : score > 0
            ? 'weak'
            : 'low';

  return {
    axis,
    affinityLevel,
    affinityLabel: affinityLabels[affinityLevel],
    score,
    nativeScore,
    evidenceScore,
    genreScore,
    compatibleTypeScore,
    eraScore,
    sceneClassScore,
    sceneScore,
    commonScore,
    gravityScore,
    strongPrimaryScore,
    riskPenalty,
    matchedNative,
    matchedEvidence,
    matchedGenre,
    matchedPrimaryGenre,
    matchedCompatibleGenre,
    matchedGravityType,
    matchedEra,
    matchedSceneClass,
    matchedScene,
    matchedGravityEvidence,
    matchedGravitySceneClass,
    matchedGravityScene,
    riskHits,
    hasTypeGravity,
    hasPrimaryAxis
  };
};
