import { LibraryItemDef } from '../../types';
import { M4_OPPRESSION } from './m4/index';

/**
 * 叙事引擎大他者词典 (M4 系统)
 */
export const ENGINE_BIG_OTHER: LibraryItemDef[] = M4_OPPRESSION;

export const BIG_OTHER_GROUPS = [
    { id: "group_a", name: "A. 绝对主宰", nameEn: "Sovereign/Boss" },
    { id: "group_b", name: "B. 镜像宿敌", nameEn: "Rival" },
    { id: "group_c", name: "C. 异化体制", nameEn: "Bureaucracy" },
    { id: "group_d", name: "D. 沉默群氓", nameEn: "Crowd" },
    { id: "group_e", name: "E. 构造极限", nameEn: "Limits" },
    { id: "group_f", name: "F. 缺席他者", nameEn: "Absent Other" }
];

export default ENGINE_BIG_OTHER;
