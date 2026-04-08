import { LibraryItemDef } from '../../types';
import { M1_ALL_SUBJECTS } from './m1';

/**
 * 叙事引擎主体词库 (M1 系统 - 缺失主体 96 项周期表)
 */
export const ENGINE_SUBJECTS: LibraryItemDef[] = [
    ...M1_ALL_SUBJECTS
];

/**
 * 主体分组信息 (用于 UI 渲染)
 */
export const SUBJECT_GROUPS = [
    { id: "group_a", name: "A. 结构性异化", nameEn: "Structural Alienation" },
    { id: "group_b", name: "B. 无限欲望者", nameEn: "Infinite Desire" },
    { id: "group_c", name: "C. 本体论排除", nameEn: "Ontological Exclusion" },
    { id: "group_d", name: "D. 精神性内陷", nameEn: "Psychic Implosion" },
    { id: "group_e", name: "E. 时间性断裂", nameEn: "Temporal Rupture" },
    { id: "group_f", name: "F. 感官性脱落", nameEn: "Sensory Decoupling" }
];

export default ENGINE_SUBJECTS;
