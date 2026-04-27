import { LibraryCategoryDef } from '../../../types';
import { beliefPresetItem } from './_shared';

export const IDEO_ORDER: LibraryCategoryDef = {
  id: "ideo_order",
  name: "3. 秩序与传统 (Order & Tradition)",
  nameEn: "Order & Tradition",
  desc: "关于纪律、祖制、共同体、等级、纯洁和礼法的开场信念。只给秩序语言。",
  descEn: "Opening beliefs about discipline, custom, community, hierarchy, purity, and protocol. Provides order language only.",
  items: [
    beliefPresetItem("sur10_fundamentalism", "原教旨主义", "Fundamentalism", "相信某部经典、教义、祖训或初始规则应被严格照字面执行。", "Belief that a scripture, doctrine, ancestral rule, or founding code should be followed literally.", "宗教与组织叙事", "Religious and organizational stories"),
    beliefPresetItem("sur10_conservatism", "保守主义", "Conservatism", "相信旧制度、旧礼仪、旧关系和渐进修补比快速改变更可靠。", "Belief that old institutions, rituals, relationships, and gradual repair are more reliable than rapid change.", "政治家庭剧", "Political family drama"),
    beliefPresetItem("sur10_collectivism", "集体主义", "Collectivism", "相信个体应服从队伍、组织、家族、单位或共同目标的安排。", "Belief that individuals should follow the arrangements of team, organization, family, unit, or common aim.", "集体叙事", "Collective stories"),
    beliefPresetItem("sur10_nationalism", "民族主义", "Nationalism", "相信国家、族群、边界、旗帜和共同记忆高于个人利益。", "Belief that nation, people, borders, flags, and shared memory outrank individual interest.", "战争与政治片", "War and political films"),
    beliefPresetItem("sur10_bureaucratism", "程序崇拜", "Bureaucratism", "相信表格、签章、排队、权限和流程可以替代私人判断。", "Belief that forms, stamps, queues, permissions, and procedures can replace private judgment.", "行政讽刺", "Administrative satire"),
    beliefPresetItem("sur10_purity_culture", "纯洁文化", "Purity Culture", "相信干净、血统、名声、亲密边界或道德边界必须被严格维护。", "Belief that cleanliness, lineage, reputation, intimate boundaries, or moral boundaries must be strictly maintained.", "家族与宗教剧", "Family and religious drama"),
    beliefPresetItem("sur10_honor_culture", "荣誉文化", "Honor Culture", "相信名誉、面子、誓言、羞辱和公开回应决定一个人的社会位置。", "Belief that reputation, face, oath, insult, and public response determine social position.", "武侠与黑帮片", "Wuxia and gangster films"),
    beliefPresetItem("sur10_conformism", "从众主义", "Conformism", "相信融入队列、避免显眼、遵守平均标准是最稳妥的生活策略。", "Belief that blending in, avoiding visibility, and following average standards is the safest life strategy.", "校园与职场剧", "School and workplace drama")
  ]
};
