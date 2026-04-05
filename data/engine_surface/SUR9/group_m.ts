import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_M: LibraryCategoryDef = {
  id: "orig_outcast",
  name: "5. 边缘与弃民 (Outcast & Pariah)",
  desc: "被主流社会排斥、遗忘或主动放逐的人。",
  items: [
    { id: "homeless", name: "流浪汉 (Homeless)", def: "没有家，睡在街头。", core: "张力：被社会抛弃的透明人。一无所有也无所畏惧。 | 视觉：购物车、纸板箱、多层衣服、胡须、桥洞。" },
    { id: "refugee", name: "难民 (Refugee)", def: "因战争或灾难逃离家园。", core: "张力：失去一切，只求生存。边界的阻隔。 | 视觉：铁丝网、帐篷营地、救生衣、惊恐的眼睛、联合国标志。" },
    { id: "untouchable", name: "贱民/不可接触者 (Untouchable)", def: "种姓制度或社会偏见的最底层。", core: "张力：生来有罪。被视为污秽。 | 视觉：垃圾场、隔离区、低头、肮脏的水、清理厕所。" },
    { id: "hermit_exile", name: "隐士 (Hermit)", def: "主动选择远离人群，离群索居。", core: "张力：孤独的修行。对文明的厌恶。 | 视觉：山洞、木屋、长发、自然、沉默。" },
    { id: "cult_member", name: "邪教徒 (Cultist)", def: "被洗脑，生活在封闭的社群中。", core: "张力：虚假的归属感。与现实世界的脱节。 | 视觉：统一白袍、疯狂的眼神、图腾、仪式、围墙。" },
    { id: "leper", name: "麻风病人/感染者 (The Infected)", def: "因病被隔离，被视为怪物。", core: "张力：对传染的恐惧导致的人性丧失。 | 视觉：绷带、隔离岛、铃铛、溃烂的皮肤、面罩。" },
    { id: "madman_prophet", name: "疯子/先知 (Madman)", def: "精神失常，看到常人看不到的东西。", core: "张力：被医学定义的疯狂 vs 被神选中的启示。 | 视觉：拘束衣、胡言乱语、涂鸦、幻觉、狂笑。" },
    { id: "orphan_street", name: "流浪儿 (Street Urchin)", def: "没有父母，在街头野蛮生长。", core: "张力：过早的成熟。像野狗一样生存。 | 视觉：脏脸、偷窃、大码衣服、废墟、眼神。" },
    { id: "scavenger_waste", name: "拾荒者 (Scavenger)", def: "在垃圾堆里寻找生活。", core: "张力：变废为宝。处于物质循环的末端。 | 视觉：巨大的垃圾山、钩子、麻袋、苍蝇、旧物。" },
    { id: "nomad_gypsy", name: "吉普赛人/游牧者 (Nomad)", def: "没有国籍，大篷车生活。", core: "张力：自由的诅咒。永远是外人。 | 视觉：大篷车、水晶球、篝火、鲜艳的裙子、乐器。" },
    { id: "escaped_convict", name: "逃犯 (Escaped Convict)", def: "越狱或在逃，没有身份。", core: "张力：时刻的警惕。无法在阳光下行走。 | 视觉：通缉令、伪装、小旅馆、警笛声、阴影。" },
    { id: "disgraced_hero", name: "蒙羞英雄 (Disgraced Hero)", def: "曾经的英雄，因丑闻身败名裂。", core: "张力：昔日的荣耀 vs 今日的唾弃。赎罪。 | 视觉：勋章、酒瓶、旧报纸、落魄的背影、嘲笑。" },
    { id: "digital_ghost", name: "数字难民 (Digital Refugee)", def: "没有数字身份/被系统删除的人。", core: "张力：在这个数字化世界里，没有账号等于不存在。 | 视觉：现金、黑市SIM卡、无法通过的闸机、屏蔽信号。" },
    { id: "mutant_outcast", name: "变种人 (Mutant)", def: "基因变异，外表异于常人。", core: "张力：因为不同而被恐惧。在下水道建立社群。 | 视觉：斗篷遮脸、畸形、下水道、特殊的标记、仇恨的目光。" },
    { id: "feral_child", name: "狼孩 (Feral Child)", def: "被动物抚养长大，不懂人类语言。", core: "张力：人性与兽性的边界。被文明社会视为异类。 | 视觉：四肢着地、咆哮、森林、笼子、恐惧文明。" }
  ]
};
