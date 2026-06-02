import { LibraryItemDef } from '../../../../types';

export type ConceptSubjectScope = 'UNIVERSAL' | 'HUMAN' | 'HUMANOID';
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
};

export const UNIVERSAL_HUMAN_SCOPE: ConceptSubjectScope[] = ['UNIVERSAL', 'HUMAN', 'HUMANOID'];
export const HUMAN_REAL_SCOPE: ConceptSubjectScope[] = ['HUMAN', 'HUMANOID'];
export const HUMANOID_SCOPE: ConceptSubjectScope[] = ['HUMANOID'];
export const ALL_REAL_ERAS: ConceptEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
export const MODERN_ERAS: ConceptEra[] = ['modern', 'contemporary', 'near_future', 'timeless'];
