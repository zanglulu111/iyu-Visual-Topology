import { LibraryCategoryDef } from '../../../types';

/**
 * SUR7. 主体性别 (Subject Gender)
 * 
 * 纯物理选角层面——生理性别或外观呈现。
 * 不携带社会属性评论（那部分由 M 层负责）。
 * 与 SUR3（时空坐标）同级：轻量标签，无 def/core。
 * 
 * v3.1: 减重——移除 def/core/换喻，仅保留选角标签
 */
export const SUR7_GROUP_A: LibraryCategoryDef = {
  id: "gender_base",
  name: "主体性别 (Gender)",
  nameEn: "Subject Gender",
  desc: "主体的生理性别或外观呈现（纯粹选角层面）。",
  items: [
    {
      id: "gen_m",
      name: "男性",
      nameEn: "Male",
    },
    {
      id: "gen_f",
      name: "女性",
      nameEn: "Female",
    },
    {
      id: "gen_nb",
      name: "非二元 / 雌雄同体",
      nameEn: "Non-Binary / Androgynous",
    }
  ]
};
