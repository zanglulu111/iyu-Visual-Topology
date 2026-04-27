import { LibraryCategoryDef } from '../../../types';
import { SUR11_GROUP_A } from './group_a';
import { SUR11_GROUP_B } from './group_b';
import { SUR11_GROUP_C } from './group_c';
import { SUR11_GROUP_D } from './group_d';
import { SUR11_GROUP_E } from './group_e';
import { SUR11_GROUP_F } from './group_f';
import { SUR11_GROUP_G } from './group_g';
import { SUR11_GROUP_H } from './group_h';

/**
 * SUR-END 显性收场库。
 *
 * `SUR11_DATA` 是旧路径/旧导出兼容名。当前语义只允许描述最后可见事件
 * 与画面停点，不承担任何终端解释、后效记录或核心引擎职能。
 */
export const SUR11_DATA: LibraryCategoryDef[] = [
  SUR11_GROUP_A,
  SUR11_GROUP_B,
  SUR11_GROUP_C,
  SUR11_GROUP_D,
  SUR11_GROUP_E,
  SUR11_GROUP_F,
  SUR11_GROUP_G,
  SUR11_GROUP_H
];

export const SUR_END_DATA: LibraryCategoryDef[] = SUR11_DATA;

export default SUR_END_DATA;
