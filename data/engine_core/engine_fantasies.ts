import { LibraryItemDef } from '../../types';
import { FANTASIES_GROUP_A } from './m3/group_a';
import { FANTASIES_GROUP_B } from './m3/group_b';
import { FANTASIES_GROUP_C } from './m3/group_c';
import { FANTASIES_GROUP_D } from './m3/group_d';

/**
 * 叙事逻辑引擎：M3 幻象 (The Fantasy)
 * 核心逻辑：主体应对缺失 ($) 的防御机制，试图填补那个不可填补的空洞。
 * 公式：$ \diamond a (主体与小客体的关系)
 */
export const ENGINE_FANTASIES: LibraryItemDef[] = [
    ...FANTASIES_GROUP_A,
    ...FANTASIES_GROUP_B,
    ...FANTASIES_GROUP_C,
    ...FANTASIES_GROUP_D
];

/**
 * 幻象分组信息
 */
export const FANTASY_GROUPS = [
    { id: "group_a", name: "A. 修复与回归", nameEn: "Restoration" },
    { id: "group_b", name: "B. 权力与超越", nameEn: "Power" },
    { id: "group_c", name: "C. 连接与融合", nameEn: "Connection" },
    { id: "group_d", name: "D. 逃逸与虚无", nameEn: "Escape" }
];

export default ENGINE_FANTASIES;
