import { LibraryCategoryDef } from '../../../types';
import { SUR9_GROUP_A } from './group_a';
import { SUR9_GROUP_B } from './group_b';
import { SUR9_GROUP_C } from './group_c';
import { SUR9_GROUP_D } from './group_d';
import { SUR9_GROUP_E } from './group_e';
import { SUR9_GROUP_F } from './group_f';
import { SUR9_GROUP_G } from './group_g';
import { SUR9_GROUP_H } from './group_h';
import { SUR9_GROUP_I } from './group_i';
import { SUR9_GROUP_J } from './group_j';
import { SUR9_GROUP_K } from './group_k';
import { SUR9_GROUP_L } from './group_l';
import { SUR9_GROUP_M } from './group_m';
import { SUR9_GROUP_N } from './group_n';
import { SUR9_GROUP_O } from './group_o';
import { SUR9_GROUP_P } from './group_p';

/**
 * SUR9 / SUR-ROLE 职业身份库。
 *
 * 只回答“人物以什么社会身份或岗位进入故事世界”。
 * 它不解释人物动机，不预写事件链，不替终局追加判词。
 */
export const SUR9_DATA: LibraryCategoryDef[] = [
  SUR9_GROUP_A,
  SUR9_GROUP_B,
  SUR9_GROUP_C,
  SUR9_GROUP_D,
  SUR9_GROUP_E,
  SUR9_GROUP_F,
  SUR9_GROUP_G,
  SUR9_GROUP_H,
  SUR9_GROUP_I,
  SUR9_GROUP_J,
  SUR9_GROUP_K,
  SUR9_GROUP_L,
  SUR9_GROUP_M,
  SUR9_GROUP_N,
  SUR9_GROUP_O,
  SUR9_GROUP_P
];

export const SUR_ROLE_DATA = SUR9_DATA;
export const SUR_IDENTITY_DATA = SUR9_DATA;

export default SUR9_DATA;
