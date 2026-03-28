import { LibraryItemDef } from '../../types';
import { ENCOUNTERS_GROUP_A } from './m2/group_a';
import { ENCOUNTERS_GROUP_B } from './m2/group_b';
import { ENCOUNTERS_GROUP_C } from './m2/group_c';
import { ENCOUNTERS_GROUP_D } from './m2/group_d';

/**
 * 叙事逻辑引擎：M2 真实遭遇 (The Encounter)
 * 核心逻辑：刺破日常幻象的创伤性事件 (Tuchē)，强制主体进入实在界。
 */
export const ENGINE_ENCOUNTERS: LibraryItemDef[] = [
    ...ENCOUNTERS_GROUP_A,
    ...ENCOUNTERS_GROUP_B,
    ...ENCOUNTERS_GROUP_C,
    ...ENCOUNTERS_GROUP_D
];

/**
 * 遭遇分组信息 (用于 UI 渲染与分类检索)
 */
export const ENCOUNTER_GROUPS = [
    { id: "group_a", name: "A. 系统的崩塌", nameEn: "Systemic" },
    { id: "group_b", name: "B. 认知的裂痕", nameEn: "Cognitive" },
    { id: "group_c", name: "C. 肉体的背叛", nameEn: "Corporeal" },
    { id: "group_d", name: "D. 系统的边疆", nameEn: "Frontier" }
];

export default ENGINE_ENCOUNTERS;
