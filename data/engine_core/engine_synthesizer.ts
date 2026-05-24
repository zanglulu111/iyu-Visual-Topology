import { LibraryItemDef } from '../../types';
import { SYNTHESIZER_SUR10X } from './synthesizer/sur10x';

/**
 * 信念裂度词库总入口
 * v3.0: M4X/M5X 已移除
 * v3.1: SUR4X 已移除（与 SUR4 语义冗余）
 * SUR10X 当前作为表层词条使用，不归入 M 轴调音台。
 */
export const SYNTHESIZER_LIBRARY: LibraryItemDef[] = [
    ...SYNTHESIZER_SUR10X
];

export const SYNTHESIZER_GROUPS = [
    { id: "sur10x", name: "SUR10X. 信念裂度 (认同强度)", nameEn: "Belief Fracture" }
];

export default SYNTHESIZER_LIBRARY;
