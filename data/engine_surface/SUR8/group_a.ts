import { LibraryCategoryDef } from '../../../types';

/**
 * SUR8. 主体年龄 (Subject Age)
 * 
 * 纯物理选角层面——生理年龄与身体机能阶段。
 * 不携带社会属性评论（那部分由 M 层负责）。
 * 与 SUR3（时空坐标）同级：轻量标签，无 def/core。
 * 
 * v3.1: 减重——移除 def/core/换喻，仅保留选角标签
 */
export const SUR8_GROUP_A: LibraryCategoryDef = {
  id: "age_base",
  name: "主体年龄 (Age)",
  nameEn: "Subject Age",
  desc: "主体的生理年龄与身体机能阶段（纯粹选角层面）。",
  items: [
    {
      id: "age_child",
      name: "儿童 (6-12岁)",
      nameEn: "Child (6-12)",
    },
    {
      id: "age_teen",
      name: "少年 (13-19岁)",
      nameEn: "Teen (13-19)",
    },
    {
      id: "age_youth",
      name: "青年 (20-35岁)",
      nameEn: "Young Adult (20-35)",
    },
    {
      id: "age_mid",
      name: "中年 (36-55岁)",
      nameEn: "Middle Age (36-55)",
    },
    {
      id: "age_elder",
      name: "老年 (60岁以上)",
      nameEn: "Elder (60+)",
    }
  ]
};
