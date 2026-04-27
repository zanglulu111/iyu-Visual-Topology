import { LibraryCategoryDef } from '../../../types';
import { agePresetItem } from './_shared';

export const SUR8_GROUP_A: LibraryCategoryDef = {
  id: "age_stage",
  name: "年龄阶段 (Age Stage)",
  nameEn: "Age Stage",
  desc: "人物进入故事时的可见年岁区间与行动条件。只给年龄层，不解释人物。",
  descEn: "The visible age band and action conditions at story entry. Age layer only; not character explanation.",
  items: [
    agePresetItem(
      "age_childhood",
      "幼年 (6-12岁)",
      "Childhood (6-12)",
      "儿童阶段，依赖照看、学习和保护机制，行动半径通常较小。",
      "Childhood stage, dependent on care, learning, and protection systems, usually with a smaller action radius."
    ),
    agePresetItem(
      "age_adolescent",
      "少年 (13-17岁)",
      "Adolescent (13-17)",
      "青春期阶段，规则感、同伴关系和自我声明正在快速成形。",
      "Adolescent stage, where rule sense, peer relations, and self-declaration are rapidly forming."
    ),
    agePresetItem(
      "age_youth",
      "青年 (18-24岁)",
      "Youth (18-24)",
      "成年初段，移动性强，身份尚未完全固定，试错空间仍然可见。",
      "Early adulthood, high mobility, not yet fully fixed identity, with visible room for trial and error."
    ),
    agePresetItem(
      "age_prime",
      "盛年 (25-30岁)",
      "Prime (25-30)",
      "能力、欲求、社交扩张和职业上升同时密集出现的阶段。",
      "A stage where capacity, appetite, social expansion, and career ascent appear densely together."
    ),
    agePresetItem(
      "age_vigor",
      "壮年 (31-40岁)",
      "Vigor (31-40)",
      "承担、积累、竞争和家庭/组织责任开始变重的阶段。",
      "A stage where responsibility, accumulation, competition, and family or organizational duties become heavier."
    ),
    agePresetItem(
      "age_middle",
      "中年 (41-50岁)",
      "Middle Age (41-50)",
      "经验、职位、疲劳和沉没成本并置，选择窗口开始收窄。",
      "A stage where experience, position, fatigue, and sunk cost coexist, while choice windows begin to narrow."
    ),
    agePresetItem(
      "age_late_middle",
      "知命 (51-60岁)",
      "Knowing Fate (51-60)",
      "后中年阶段，回望、结算、交接和剩余选择成为可见压力。",
      "Late middle age, where retrospection, accounting, handover, and remaining choices become visible pressure."
    ),
    agePresetItem(
      "age_sexagenarian",
      "花甲 (61-70岁)",
      "Sexagenarian (61-70)",
      "退休边界附近，社会角色开始转场，旧关系和新空档同时出现。",
      "Near retirement boundaries, social roles begin to shift, with old relations and new gaps appearing together."
    ),
    agePresetItem(
      "age_septuagenarian",
      "古稀 (71-80岁)",
      "Septuagenarian (71-80)",
      "高龄阶段，节奏放慢，记忆、照看和日常路径变得更重要。",
      "Advanced age, slower rhythm, with memory, care, and daily routes becoming more important."
    ),
    agePresetItem(
      "age_venerable",
      "耄者 (80-100岁)",
      "Venerable (80-100)",
      "极高龄阶段，行动范围、照看关系和时间感被显著改变。",
      "Very advanced age, where action range, care relations, and time sense are significantly changed."
    ),
    agePresetItem(
      "age_immortal",
      "永生 (∞)",
      "Immortal (∞)",
      "超出普通生命周期的年龄设定，可用于长生、冷冻、义体延续或神话种族。",
      "An age setting beyond ordinary lifespans, usable for longevity, cryostasis, prosthetic continuity, or mythic species."
    )
  ]
};
