import { LibraryCategoryDef } from '../../../types';
import { SUR6_GROUP_A } from './group_a';
import { SUR6_GROUP_B } from './group_b';
import { SUR6_GROUP_C } from './group_c';
import { SUR6_GROUP_D } from './group_d';
import { SUR6_GROUP_E } from './group_e';
import { SUR6_GROUP_F } from './group_f';
import { SUR6_GROUP_G } from './group_g';
import { SUR6_GROUP_H } from './group_h';
import { SUR6_GROUP_I } from './group_i';
import { SUR6_GROUP_J } from './group_j';
import { SUR6_GROUP_K } from './group_k';
import { SUR6_GROUP_L } from './group_l';

/**
 * SUR6 / SUR-LOC 空间容器库。
 *
 * 只回答“事件发生在什么可见空间里”。它不解释人物为什么行动，
 * 不书写代价，不书写终局判词或残留。
 */
export const SUR6_DATA: LibraryCategoryDef[] = [
  SUR6_GROUP_A,
  SUR6_GROUP_B,
  SUR6_GROUP_C,
  SUR6_GROUP_D,
  SUR6_GROUP_E,
  SUR6_GROUP_F,
  SUR6_GROUP_G,
  SUR6_GROUP_H,
  SUR6_GROUP_I,
  SUR6_GROUP_J,
  SUR6_GROUP_K,
  SUR6_GROUP_L,
];

export const SUR_LOCATION_DATA = SUR6_DATA;
export const SUR_SPACE_DATA = SUR6_DATA;

export default SUR6_DATA;
