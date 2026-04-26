import { LibraryItemDef } from '../../../types';
import { ENGINE_M0_NEUROSIS_OBSESSION } from './a2_obsession';
import { ENGINE_M0_NEUROSIS_HYSTERIA } from './a1_hysteria';
import { ENGINE_M0_NEUROSIS_PHOBIA } from './a3_phobia';

/**
 * 神经症结构 (Folding Protocol) —— 共 52 位点
 * 核心机理: 承认缺失，但通过无限延宕、质询或退缩来处理虚无感。
 */
export const ENGINE_M0_NEUROSIS: LibraryItemDef[] = [
  ...ENGINE_M0_NEUROSIS_OBSESSION,
  ...ENGINE_M0_NEUROSIS_HYSTERIA,
  ...ENGINE_M0_NEUROSIS_PHOBIA
];
