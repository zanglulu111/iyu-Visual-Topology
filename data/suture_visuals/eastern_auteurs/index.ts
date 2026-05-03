import type { SutureStyleItem } from '../../suture_styles';
import { EASTERN_AUTEUR_GROUP_A_STYLES } from './group_a';
import { EASTERN_AUTEUR_GROUP_B_STYLES } from './group_b';
import { EASTERN_AUTEUR_GROUP_C_STYLES } from './group_c';
import { EASTERN_AUTEUR_GROUP_D_STYLES } from './group_d';

export const EASTERN_AUTEURS: SutureStyleItem[] = [
  ...EASTERN_AUTEUR_GROUP_A_STYLES,
  ...EASTERN_AUTEUR_GROUP_B_STYLES,
  ...EASTERN_AUTEUR_GROUP_C_STYLES,
  ...EASTERN_AUTEUR_GROUP_D_STYLES
];
