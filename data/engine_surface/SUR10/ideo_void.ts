import { LibraryCategoryDef } from '../../../types';
import { beliefPresetItem } from './_shared';

export const IDEO_VOID: LibraryCategoryDef = {
  id: "ideo_void",
  name: "5. 怀疑与反秩序 (Skepticism & Anti-Order)",
  nameEn: "Skepticism & Anti-Order",
  desc: "关于怀疑、讽刺、反建制、拒绝和非正规规则的开场信念。只给反秩序话语。",
  descEn: "Opening beliefs about skepticism, satire, anti-establishment attitudes, refusal, and informal rules. Provides anti-order language only.",
  items: [
    beliefPresetItem("sur10_detached_skepticism", "冷淡怀疑", "Detached Skepticism", "相信宏大承诺通常只是包装话术，因此先保持距离再判断。", "Belief that grand promises are usually packaging language, so one should keep distance before judging.", "冷面反英雄叙事", "Detached antihero stories"),
    beliefPresetItem("sur10_cynicism", "犬儒主义", "Cynicism", "相信公共美德、企业口号和亲密誓言背后常有自利计算。", "Belief that public virtue, corporate slogans, and intimate vows often hide self-serving calculation.", "黑色喜剧", "Black comedy"),
    beliefPresetItem("sur10_anarchism", "无政府主义", "Anarchism", "相信国家、机构和等级权威应被拆散为自愿协作的小单元。", "Belief that states, institutions, and hierarchical authority should be broken into small units of voluntary cooperation.", "地下组织叙事", "Underground collective stories"),
    beliefPresetItem("sur10_absurdism", "荒诞主义", "Absurdism", "相信世界不提供统一说明，人仍可以用清醒、幽默和反复劳动回应它。", "Belief that the world offers no unified explanation, yet one can still answer it with lucidity, humor, and repeated labor.", "加缪式叙事", "Camusian stories"),
    beliefPresetItem("sur10_iconoclasm", "破像主义", "Iconoclasm", "相信神圣标志、纪念碑、权威肖像和禁忌文本都可以被重新处理。", "Belief that sacred signs, monuments, authority portraits, and taboo texts can all be reworked.", "反偶像叙事", "Anti-idol stories"),
    beliefPresetItem("sur10_anti_institutionalism", "反制度主义", "Anti-Institutionalism", "相信正式制度倾向于保护自身存续，因此民间办法往往更可信。", "Belief that formal institutions tend to protect their own survival, so informal methods are often more trustworthy.", "街头与社区叙事", "Street and community stories"),
    beliefPresetItem("sur10_black_humor", "黑色幽默立场", "Black Humor Stance", "相信笑话、冷梗、冒犯性比喻和反高潮能拆开过分庄重的场面。", "Belief that jokes, dry punchlines, offensive comparisons, and anti-climax can deflate over-solemn scenes.", "荒诞黑色片", "Absurd dark films"),
    beliefPresetItem("sur10_radical_refusal", "激进拒绝", "Radical Refusal", "相信不参加、不签字、不配合、不解释也可以是一种明确立场。", "Belief that not joining, not signing, not cooperating, and not explaining can also be a clear stance.", "罢工与退场叙事", "Strike and exit stories")
  ]
};
