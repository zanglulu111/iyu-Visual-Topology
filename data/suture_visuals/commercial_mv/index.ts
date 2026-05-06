import type { SutureStyleItem } from '../../suture/styles';
import { COMMERCIAL_MV_GROUP_A_STYLES } from './group_a';
import { COMMERCIAL_MV_GROUP_B_STYLES } from './group_b';
import { COMMERCIAL_MV_GROUP_C_STYLES } from './group_c';
import { COMMERCIAL_MV_GROUP_D_STYLES } from './group_d';

export const COMMERCIAL_MV_STYLES: SutureStyleItem[] = [
  ...COMMERCIAL_MV_GROUP_A_STYLES,
  ...COMMERCIAL_MV_GROUP_B_STYLES,
  ...COMMERCIAL_MV_GROUP_C_STYLES,
  ...COMMERCIAL_MV_GROUP_D_STYLES
];
