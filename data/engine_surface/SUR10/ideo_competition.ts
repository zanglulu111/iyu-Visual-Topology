import { LibraryCategoryDef } from '../../../types';
import { beliefPresetItem } from './_shared';

export const IDEO_COMPETITION: LibraryCategoryDef = {
  id: "ideo_competition",
  name: "2. 竞争与生存 (Competition & Survival)",
  nameEn: "Competition & Survival",
  desc: "关于强弱、胜负、效率、家族利益和资源争夺的开场信念。只给竞争话语。",
  descEn: "Opening beliefs about strength, victory, efficiency, family interest, and resource contest. Provides competitive language only.",
  items: [
    beliefPresetItem("sur10_social_darwinism", "社会达尔文主义", "Social Darwinism", "相信社会竞争天然筛选强者，弱者被淘汰是秩序的一部分。", "Belief that social competition naturally selects the strong, and elimination of the weak is part of order.", "《美国精神病人》", "American Psycho"),
    beliefPresetItem("sur10_meritocracy", "绩效主义", "Meritocracy", "相信成绩、排名、履历和可量化成果足以证明一个人的位置。", "Belief that scores, rankings, resumes, and measurable output are enough to prove one's place.", "考试与职场叙事", "Exam and workplace stories"),
    beliefPresetItem("sur10_elitism", "精英主义", "Elitism", "相信少数高能力者有资格制定标准、分配资源和代表未来方向。", "Belief that a capable minority is entitled to set standards, allocate resources, and represent the future.", "《社交网络》", "The Social Network"),
    beliefPresetItem("sur10_zero_sum", "零和信念", "Zero-Sum Belief", "相信任何收益都必然来自他人的损失，合作只是延迟竞争的形式。", "Belief that every gain must come from another's loss, and cooperation only delays competition.", "金融惊悚片", "Finance thrillers"),
    beliefPresetItem("sur10_survivalism", "生存优先主义", "Survivalism", "相信保命、储备、躲避风险和维持最低资源优先于一切规则。", "Belief that staying alive, stockpiling, avoiding risk, and maintaining minimum resources outrank all rules.", "末日生存片", "Survival films"),
    beliefPresetItem("sur10_machiavellianism", "马基雅维利主义", "Machiavellianism", "相信权术、联盟、背书、威慑和时机比道德表态更有效。", "Belief that tactics, alliances, endorsements, deterrence, and timing work better than moral display.", "《纸牌屋》", "House of Cards"),
    beliefPresetItem("sur10_nepotism", "家族优先", "Family Advancement", "相信亲族、门第、继承和内部保护比公开规则更可靠。", "Belief that kinship, lineage, inheritance, and internal protection are more reliable than public rules.", "家族剧", "Family drama"),
    beliefPresetItem("sur10_pragmatism_hard", "硬实用主义", "Hard Pragmatism", "相信可执行、可计算、可交付的方案优先于原则宣言和情感表态。", "Belief that executable, calculable, deliverable solutions outrank principles and emotional declarations.", "政治惊悚片", "Political thrillers")
  ]
};
