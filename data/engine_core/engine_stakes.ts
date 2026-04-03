import { LibraryItemDef } from '../../types';
import { M6_STAKES } from './m6/index';

/**
 * 叙事引擎终极代价词典 (M6 系统)
 */
export const ENGINE_STAKES: LibraryItemDef[] = M6_STAKES;

export const STAKE_GROUPS = [
    { id: "group_a", name: "A. 符号性死亡", nameEn: "Symbolic" },
    { id: "group_b", name: "B. 本体论崩塌", nameEn: "Ontological" },
    { id: "group_c", name: "C. 道德的堕落", nameEn: "Moral" },
    { id: "group_d", name: "D. 物理的毁灭", nameEn: "Ruin" }
];

export default ENGINE_STAKES;
