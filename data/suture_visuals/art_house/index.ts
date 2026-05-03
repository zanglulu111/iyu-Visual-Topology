import type { SutureStyleItem } from '../../suture_styles';
import { ART_HOUSE_GROUP_A_STYLES } from './group_a';
import { ART_HOUSE_GROUP_B_STYLES } from './group_b';
import { ART_HOUSE_GROUP_C_STYLES } from './group_c';
import { ART_HOUSE_GROUP_D_STYLES } from './group_d';

export const ART_HOUSE_STYLES: SutureStyleItem[] = [
  ...ART_HOUSE_GROUP_A_STYLES,
  ...ART_HOUSE_GROUP_B_STYLES,
  ...ART_HOUSE_GROUP_C_STYLES,
  ...ART_HOUSE_GROUP_D_STYLES
];
