import { LibraryItemDef } from '../../types';
import { M5_DRIVES } from './m5/index';

/**
 * 叙事引擎驱力词典 (M5 系统)
 */
export const ENGINE_DRIVES: LibraryItemDef[] = M5_DRIVES;

/**
 * 驱力分组信息
 */
export const DRIVE_GROUPS = [
    { id: "group_a", name: "A. 激进的对抗", nameEn: "Confrontation" },
    { id: "group_b", name: "B. 异化的抵抗", nameEn: "Alienated" },
    { id: "group_c", name: "C. 智力的博弈", nameEn: "Intellectual" },
    { id: "group_d", name: "D. 生存的挣扎", nameEn: "Survival" },
    { id: "group_e", name: "E. 妥协与共谋", nameEn: "Complicity" }
];

export default ENGINE_DRIVES;
