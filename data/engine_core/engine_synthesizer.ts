import { LibraryItemDef } from '../../types';
import { SYNTHESIZER_M2X } from './synthesizer/m2x';
import { SYNTHESIZER_M4X } from './synthesizer/m4x';
import { SYNTHESIZER_M5X } from './synthesizer/m5x';
import { SYNTHESIZER_SUR4X } from './synthesizer/sur4x';
import { SYNTHESIZER_SUR10X } from './synthesizer/sur10x';

/**
 * 叙事调音台 - 刻度词库总入口
 * 包含 5 个核心推子的 25 个层级定义
 */
export const SYNTHESIZER_LIBRARY: LibraryItemDef[] = [
    ...SYNTHESIZER_M2X,
    ...SYNTHESIZER_M4X,
    ...SYNTHESIZER_M5X,
    ...SYNTHESIZER_SUR4X,
    ...SYNTHESIZER_SUR10X
];

export const SYNTHESIZER_GROUPS = [
    { id: "m2x", name: "M2X. 实在界入侵当量 (世界崩坏程度)", nameEn: "World Collapse" },
    { id: "m4x", name: "M4X. 外部压迫能级 (大他者阻断烈度)", nameEn: "Blockage Intensity" },
    { id: "m5x", name: "M5X. 死亡驱力流速 (主体行动烈度)", nameEn: "Drive Velocity" },
    { id: "sur4x", name: "SUR4X. 物理阶层阻力 (社会形态粘滞度)", nameEn: "Social Resistance" },
    { id: "sur10x", name: "SUR10X. 象征界缝合度 (认同模式)", nameEn: "Symbolic Suture" }
];

export default SYNTHESIZER_LIBRARY;
