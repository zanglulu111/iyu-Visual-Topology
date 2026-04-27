import { VERDICTS_GROUP_A } from './group_a';
import { VERDICTS_GROUP_B } from './group_b';
import { VERDICTS_GROUP_C } from './group_c';
import { VERDICTS_GROUP_D } from './group_d';

/**
 * M7A 象征裁决词典。
 *
 * 负责回溯性判定 M1-M6 “最终成为了什么故事”，不得承担 M7B 的身体余痕
 * 或 SUR-END 的可见收场职责。
 */
export const M7A_VERDICTS = [
    ...VERDICTS_GROUP_A,
    ...VERDICTS_GROUP_B,
    ...VERDICTS_GROUP_C,
    ...VERDICTS_GROUP_D
];

export default M7A_VERDICTS;
