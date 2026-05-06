import type { SutureStyleItem } from '../../suture/styles';
import { ANIMATION_DIRECTOR_GROUP_A_STYLES } from './group_a';
import { ANIMATION_DIRECTOR_GROUP_B_STYLES } from './group_b';
import { ANIMATION_DIRECTOR_GROUP_C_STYLES } from './group_c';
import { ANIMATION_DIRECTOR_GROUP_D_STYLES } from './group_d';

export const ANIMATION_DIRECTORS: SutureStyleItem[] = [
  ...ANIMATION_DIRECTOR_GROUP_A_STYLES,
  ...ANIMATION_DIRECTOR_GROUP_B_STYLES,
  ...ANIMATION_DIRECTOR_GROUP_C_STYLES,
  ...ANIMATION_DIRECTOR_GROUP_D_STYLES
];
