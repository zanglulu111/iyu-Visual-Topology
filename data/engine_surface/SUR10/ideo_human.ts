import { LibraryCategoryDef } from '../../../types';
import { beliefPresetItem } from './_shared';

export const IDEO_HUMAN: LibraryCategoryDef = {
  id: "ideo_human",
  name: "6. 人本与关怀 (Humanism & Care)",
  nameEn: "Humanism & Care",
  desc: "关于人、自然、选择、自制、情感、万物相连、非暴力和互助的开场信念。只给关怀话语。",
  descEn: "Opening beliefs about people, nature, choice, self-restraint, emotion, interconnection, nonviolence, and mutual aid. Provides care language only.",
  items: [
    beliefPresetItem("sur10_humanism", "人本主义", "Humanism", "相信人的尊严、姓名、处境和基本权利应优先于抽象系统。", "Belief that human dignity, names, situations, and basic rights should outrank abstract systems.", "人道主义叙事", "Humanitarian stories"),
    beliefPresetItem("sur10_deep_ecology", "深层生态", "Deep Ecology", "相信森林、河流、动物、土地和气候并非单纯资源，而是共同生活条件。", "Belief that forests, rivers, animals, land, and climate are not mere resources but shared living conditions.", "生态叙事", "Ecological stories"),
    beliefPresetItem("sur10_choice_ethics", "选择伦理", "Choice Ethics", "相信人不能只归因于环境或标签，而应为当下选择承担说明责任。", "Belief that people cannot be reduced to environment or labels, and should account for present choices.", "法庭与成长叙事", "Courtroom and coming-of-age stories"),
    beliefPresetItem("sur10_stoicism", "斯多葛主义", "Stoicism", "相信先区分可控与不可控，再用训练、节制和耐心维持判断。", "Belief in first separating the controllable from the uncontrollable, then maintaining judgment through training, restraint, and patience.", "武士与军旅叙事", "Samurai and military stories"),
    beliefPresetItem("sur10_romanticism", "浪漫主义", "Romanticism", "相信激情、直觉、自然景观、个人誓言和审美强度高于冷静计算。", "Belief that passion, intuition, natural landscape, personal vows, and aesthetic intensity outrank cold calculation.", "爱情与艺术家叙事", "Romance and artist stories"),
    beliefPresetItem("sur10_animism", "泛灵信念", "Animism", "相信山川、器物、机器、房屋和旧物都能被当作有回应的伙伴。", "Belief that mountains, objects, machines, houses, and old things can be treated as responsive companions.", "民俗与动画叙事", "Folklore and animation stories"),
    beliefPresetItem("sur10_pacifism", "和平主义", "Pacifism", "相信非暴力、撤离、谈判、见证和照护比报复性攻击更值得坚持。", "Belief that nonviolence, evacuation, negotiation, witness, and care are more worth holding than retaliatory attack.", "反战叙事", "Anti-war stories"),
    beliefPresetItem("sur10_altruism", "利他主义", "Altruism", "相信帮助陌生人、分享资源、承担照护和降低他人风险本身值得做。", "Belief that helping strangers, sharing resources, taking care duties, and reducing others' risk are worth doing in themselves.", "灾难与社区叙事", "Disaster and community stories")
  ]
};
