import { LibraryItemDef } from '../../types';
import { M2_ENCOUNTERS } from './m2';

/**
 * 叙事逻辑引擎：M2 真实遭遇 (The Encounter)
 * 核心逻辑：穿刺日常象征秩序的实在界事件 (Tuchē)，五维穿刺拓扑。
 * 词库规模：5 组 x 20 条 = 100 条
 * 核心格式：张力-光谱 (A面/B面/关键张力 | 实在界穿刺$)
 */
export const ENGINE_ENCOUNTERS: LibraryItemDef[] = M2_ENCOUNTERS;

/**
 * 遭遇分组信息 (用于 UI 渲染与分类检索)
 */
export const ENCOUNTER_GROUPS = [
    { id: "group_a", name: "A. 秩序的穿刺", nameEn: "Order Punctured" },
    { id: "group_b", name: "B. 认知的穿刺", nameEn: "Epistemic Punctured" },
    { id: "group_c", name: "C. 肉身的穿刺", nameEn: "Corporeal Punctured" },
    { id: "group_d", name: "D. 关系的穿刺", nameEn: "Relational Punctured" },
    { id: "group_e", name: "E. 边界的穿刺", nameEn: "Liminal Punctured" }
];

export default ENGINE_ENCOUNTERS;
