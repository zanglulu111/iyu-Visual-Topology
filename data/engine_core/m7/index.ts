import { LibraryItemDef } from '../../../types';
import { OUTCOMES_GROUP_A } from './group_a_new';
import { OUTCOMES_GROUP_B } from './group_b_new';
import { OUTCOMES_GROUP_C } from './group_c_new';
import { OUTCOMES_GROUP_D } from './group_d_new';
import { OUTCOMES_GROUP_E } from './group_e_new';

/**
 * M7B 实在余痕词典。
 *
 * `M7_OUTCOMES` 是历史导出名，用于兼容旧调用；理论语义上它不再代表
 * “结局裁决”，而代表象征裁决之后仍不能被意义消化的 residual outcomes。
 */
export const M7_OUTCOMES: LibraryItemDef[] = [
    ...OUTCOMES_GROUP_A,
    ...OUTCOMES_GROUP_B,
    ...OUTCOMES_GROUP_C,
    ...OUTCOMES_GROUP_D,
    ...OUTCOMES_GROUP_E
];

export const M7B_RESIDUES: LibraryItemDef[] = M7_OUTCOMES;

export default M7B_RESIDUES;
