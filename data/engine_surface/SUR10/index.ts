import { LibraryCategoryDef } from '../../../types';
import { IDEO_DESIRE } from './ideo_desire';
import { IDEO_COMPETITION } from './ideo_competition';
import { IDEO_ORDER } from './ideo_order';
import { IDEO_TECH } from './ideo_tech';
import { IDEO_VOID } from './ideo_void';
import { IDEO_HUMAN } from './ideo_human';

export const IDEOLOGY_CATEGORIES: LibraryCategoryDef[] = [
  IDEO_DESIRE,
  IDEO_COMPETITION,
  IDEO_ORDER,
  IDEO_TECH,
  IDEO_VOID,
  IDEO_HUMAN
];

// SUR10 is the surface belief preset layer: opening explanatory language only.
export const SUR10_DATA = IDEOLOGY_CATEGORIES;
export const SUR_BELIEF_DATA = IDEOLOGY_CATEGORIES;

export default IDEOLOGY_CATEGORIES;
