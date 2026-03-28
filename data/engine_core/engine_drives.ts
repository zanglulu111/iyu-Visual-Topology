import { LibraryItemDef } from '../../types';
import { DRIVES_GROUP_A } from './drives/group_a';
import { DRIVES_GROUP_B } from './drives/group_b';
import { DRIVES_GROUP_C } from './drives/group_c';
import { DRIVES_GROUP_D } from './drives/group_d';

/**
 * 叙事引擎驱力词典 (M3 系统)
 * 包含四种核心驱力倾向：激进对抗、异化抵抗、智力博弈、生存挣扎。
 */
export const ENGINE_DRIVES: LibraryItemDef[] = [
    ...DRIVES_GROUP_A,
    ...DRIVES_GROUP_B,
    ...DRIVES_GROUP_C,
    ...DRIVES_GROUP_D
];

/**
 * 驱力分组信息
 */
export const DRIVE_GROUPS = [
    { id: "group_a", name: "A. 激进的对抗", nameEn: "Confrontation" },
    { id: "group_b", name: "B. 异化的抵抗", nameEn: "Alienated" },
    { id: "group_c", name: "C. 智力的博弈", nameEn: "Intellectual" },
    { id: "group_d", name: "D. 生存的挣扎", nameEn: "Survival" }
];

export default ENGINE_DRIVES;
