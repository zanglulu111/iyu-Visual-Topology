import { LibraryItemDef } from '../../types';
import { SYNTHESIZER_SUR4X } from './synthesizer/sur4x';
import { SYNTHESIZER_SUR10X } from './synthesizer/sur10x';

/**
 * 叙事调音台 - 刻度词库总入口
 * v3.0: M4X/M5X 已移除（正交性优化——M4/M5 词库本身已含强度谱系）
 * 仅保留 SUR 层推子：表层阶层阻力 + 象征界缝合度
 */
export const SYNTHESIZER_LIBRARY: LibraryItemDef[] = [
    ...SYNTHESIZER_SUR4X,
    ...SYNTHESIZER_SUR10X
];

export const SYNTHESIZER_GROUPS = [
    { id: "sur4x", name: "SUR4X. 物理阶层阻力 (社会形态粘滞度)", nameEn: "Social Resistance" },
    { id: "sur10x", name: "SUR10X. 象征界缝合度 (认同模式)", nameEn: "Symbolic Suture" }
];

export default SYNTHESIZER_LIBRARY;
