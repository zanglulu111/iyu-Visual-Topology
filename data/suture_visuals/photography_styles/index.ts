import type { SutureStyleItem } from '../../suture_styles';
import { PHOTOGRAPHY_GROUP_A_STYLES } from './group_a';
import { PHOTOGRAPHY_GROUP_B_STYLES } from './group_b';
import { PHOTOGRAPHY_GROUP_C_STYLES } from './group_c';
import { PHOTOGRAPHY_GROUP_D_STYLES } from './group_d';

export const PHOTOGRAPHY_STYLES: SutureStyleItem[] = [
  ...PHOTOGRAPHY_GROUP_A_STYLES,
  ...PHOTOGRAPHY_GROUP_B_STYLES,
  ...PHOTOGRAPHY_GROUP_C_STYLES,
  ...PHOTOGRAPHY_GROUP_D_STYLES
];
