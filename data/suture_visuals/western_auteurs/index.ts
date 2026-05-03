import type { SutureStyleItem } from '../../suture_styles';
import { WESTERN_AUTEUR_GROUP_A_STYLES } from './group_a';
import { WESTERN_AUTEUR_GROUP_B_STYLES } from './group_b';
import { WESTERN_AUTEUR_GROUP_C_STYLES } from './group_c';
import { WESTERN_AUTEUR_GROUP_D_STYLES } from './group_d';
import { WESTERN_AUTEUR_GROUP_E_STYLES } from './group_e';

export const WESTERN_AUTEURS: SutureStyleItem[] = [
  ...WESTERN_AUTEUR_GROUP_A_STYLES,
  ...WESTERN_AUTEUR_GROUP_B_STYLES,
  ...WESTERN_AUTEUR_GROUP_C_STYLES,
  ...WESTERN_AUTEUR_GROUP_D_STYLES,
  ...WESTERN_AUTEUR_GROUP_E_STYLES
];
