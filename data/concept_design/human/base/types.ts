import { LibraryItemDef } from '../../../../types';

export type ConceptSubjectScope = 'UNIVERSAL' | 'HUMAN' | 'HUMANOID';
export type ConceptGenderSignal = 'FEMININE' | 'MASCULINE' | 'ANDROGYNOUS';
export type ConceptGenderCoding = 'FEMININE' | 'MASCULINE' | 'ANDROGYNOUS' | 'UNIVERSAL';
export type ConceptMakeupRegister = 'RESTRAINED' | 'BEAUTY' | 'EDITORIAL' | 'STAGE' | 'RITUAL' | 'TECH' | 'BOUNDARY';
export type ConceptBeardRegister = 'NONE' | 'LIGHT' | 'MATURE' | 'HISTORICAL' | 'FASHION' | 'SURREAL';
export type ConceptGroomingIntensity = 'NONE' | 'LIGHT' | 'MEDIUM' | 'STRONG' | 'EXTREME';
export type ConceptAgeBand = 'LATE_TEEN' | 'YOUNG_ADULT' | 'MATURE_ADULT' | 'MIDDLE_AGED' | 'ELDER' | 'TIMELESS_ADULT';
export type ConceptAgeWear = 'FRESH' | 'LIVED_IN' | 'WEATHERED' | 'WELL_KEPT' | 'SLEEPLESS' | 'DISCIPLINED' | 'PREMATURELY_WORN' | 'NEUTRAL';
export type ConceptBodyFunction = 'ELEGANT' | 'CURVE' | 'GLAMOUR' | 'ATHLETIC' | 'LABOR' | 'COMBAT' | 'POWER' | 'SMALL_FRAME' | 'LARGE_FRAME' | 'BOUNDARY';
export type ConceptEra =
  | 'primitive'
  | 'slave'
  | 'feudal'
  | 'early_modern'
  | 'industrial'
  | 'modern'
  | 'contemporary'
  | 'near_future'
  | 'far_future'
  | 'timeless'
  | 'mythic';

export type ConceptBaseItem = LibraryItemDef & {
  subjectScope?: readonly ConceptSubjectScope[];
  ontologyLevel?: 1 | 2 | 3 | 4 | 5;
  eras?: readonly ConceptEra[];
  affects?: readonly string[];
  risk?: 'clean' | 'medium' | 'high';
  genderSignal?: ConceptGenderSignal;
  genderCoding?: ConceptGenderCoding;
  makeupRegister?: ConceptMakeupRegister;
  beardRegister?: ConceptBeardRegister;
  groomingIntensity?: ConceptGroomingIntensity;
  ageBand?: ConceptAgeBand;
  ageWear?: ConceptAgeWear;
  bodyFunction?: ConceptBodyFunction;
  evidenceTags?: readonly string[];
};

export const UNIVERSAL_HUMAN_SCOPE: ConceptSubjectScope[] = ['UNIVERSAL', 'HUMAN', 'HUMANOID'];
export const HUMAN_REAL_SCOPE: ConceptSubjectScope[] = ['HUMAN', 'HUMANOID'];
export const HUMANOID_SCOPE: ConceptSubjectScope[] = ['HUMANOID'];
export const ALL_REAL_ERAS: ConceptEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
export const MODERN_ERAS: ConceptEra[] = ['modern', 'contemporary', 'near_future', 'timeless'];
