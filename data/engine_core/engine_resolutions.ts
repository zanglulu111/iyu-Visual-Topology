import { LibraryItemDef } from '../../types';
import { M7_OUTCOMES } from './m7/index';

/**
 * 叙事引擎存在落点词典 (M7 系统)
 */
export const ENGINE_RESOLUTIONS: LibraryItemDef[] = M7_OUTCOMES;

export const RESOLUTION_GROUPS = [
    { id: "group_a", name: "A. 虚无的对峙", nameEn: "The Void" },
    { id: "group_b", name: "B. 绝望的同化", nameEn: "Assimilation" },
    { id: "group_c", name: "C. 圣状的升华", nameEn: "Sinthome" },
    { id: "group_d", name: "D. 绝对的崩塌", nameEn: "Collapse" }
];

export default ENGINE_RESOLUTIONS;
