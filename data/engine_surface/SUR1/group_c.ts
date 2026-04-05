import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_C: LibraryCategoryDef = {
  id: "type_c",
  name: "奇幻与神话 (Fantasy & Mythology)",
  desc: "超自然力量、魔法体系与非现实生物（侧重西方与现代）。",
  items: [
    { 
      id: "high_fantasy", 
      name: "史诗奇幻", nameEn: "High Fantasy",
      def: "完整架空世界、精灵矮人、魔法战争、英雄征途。", 
      defEn: "Complete secondary world, elves/dwarves, magic wars, hero's journey.",
      core: "光与暗的永恒战争。小人物背负沉重宿命。 | 换喻 ($): 命运指环 (Ring of Fate)",
      coreEn: "Eternal war between light and dark. A nobody burdened with heavy destiny. | Metonymy ($): Ring of Fate",
      logic: "【宿命征途】：M6（拯救世界/对抗黑魔王）是绝对强制的叙事重力。M1（平民英雄）在 M4（伙伴与法则）的辅助下，完成牺牲与升华。",
      logicEn: "[Destinal Journey]: M6 (Save World/Dark Lord) is absolute narrative gravity. M1 (Hero) completes sacrifice and sublimation guided by M4 (Fellowship/Rules).",
      patch: {
        mechanics: "基础奇幻协议 + [善恶二元性 = 绝对; 旅程史诗感 = 满级]",
        mechanicsEn: "Base_FANTASY + [Good_vs_Evil_Binary = Absolute; Journey_Epicness = MAX]",
        aesthetic: "聚焦：崇高远景 + 发光的魔法粒子 + 庞大阵列。文本：古典的英雄赞歌与壮丽的牺牲赋。",
        aestheticEn: "Focus: Sublime_Vistas + Glowing_Magic_Particles + Massive_Arrays. Text: Classic_Hero_Eulogy_and_Magnificent_Sacrifice.",
        runtime: "IF (世界濒临不可逆转的毁灭) THEN (必须触发：微小个体带来的奇迹反转)。",
        runtimeEn: "IF (World_On_Brink_of_Irreversible_Doom) THEN (Must_Trigger: Miracle_Reversal_by_Tiny_Individuals)."
      }
    },
    { 
      id: "magical_realism", 
      name: "魔幻现实", nameEn: "Magical Realism",
      def: "现实中融入魔幻、不解释魔法来源、隐喻沉重记忆。", 
      defEn: "Magic ingrained in reality with no explanation, metaphor for heavy memory.",
      core: "荒诞的超自然现象 vs 沉重苦难的现实历史。 | 换喻 ($): 飞翔的祖母 (Levitating Grandmother)",
      coreEn: "Absurd supernatural phenomena vs heavy suffering of real history. | Metonymy ($): Levitating Grandmother",
      logic: "【现实内爆】：M0（梦境/魔幻法则）被当成日常现实一样无缝嵌入。M4（历史/政治压迫）过于沉重，致使 M1 只能通过 M5（超自然显化）进行代偿表达。",
      logicEn: "[Reality Implosion]: M0 (Dream/Magic) is seamlessly embedded as mundane. M4 (History/Oppression) is so heavy that M1 expresses trauma via M5 (Supernatural manifestation).",
      patch: {
        mechanics: "基础诗学协议 + [惊奇感 = 日常化; 隐喻深层绑定 = 真实创伤]",
        mechanicsEn: "Base_POETICS + [Sense_of_Wonder = Mundane; Metaphor_Binding = Real_Trauma]",
        aesthetic: "聚焦：日常物品的奇异特征 + 浓郁热带色块 + 漫长的静止镜头。文本：像流水账一样平铺直叙神迹。",
        aestheticEn: "Focus: Weird_Mundane_Objects + Saturated_Tropical_Colors + Long_Static_Shots. Text: Narrating_Miracles_Like_Boring_Chores.",
        runtime: "IF (天降黄花雨或死者复生) THEN (角色必须表现得习以为常甚至感到厌烦)。",
        runtimeEn: "IF (Yellow_Flowers_Rain_Or_Dead_Revive) THEN (Characters_Must_Act_Bored_Or_Accustomed)."
      }
    },
    { 
      id: "dark_fantasy", 
      name: "暗黑奇幻", nameEn: "Dark Fantasy",
      def: "残酷、成人向、反英雄、绝望的世界观，包含洛夫克拉夫特元素。", 
      defEn: "Cruel, mature, anti-hero, despairing worldview, Lovecraftian elements.",
      core: "人类微茫的火光 vs 充满恶意的世界意志。 | 换喻 ($): 熄灭的营火 (Extinguished Bonfire)",
      coreEn: "Tiny spark of humanity vs the malicious will of the world. | Metonymy ($): Extinguished Bonfire",
      logic: "【泥沼求生】：没有 M3（救赎），M4（世界本身）处于绝对的敌对面且极其残忍。M1（残缺的主角）的每一次 M5（抗争）都会导致不可逆的 M2（身心双重创伤）。",
      logicEn: "[Swamp Survival]: No M3 (Salvation). M4 (The World) is absolutely hostile. Every M5 (Struggle) by M1 causes irreversible M2 (Mind/Body Trauma).",
      patch: {
        mechanics: "基础受苦协议 + [世界恶意值 = 满级; 好人存活率 = 趋近于零]",
        mechanicsEn: "Base_SUFFER + [World_Malice = MAX; Good_Person_Survival_Rate = Near_Zero]",
        aesthetic: "聚焦：破败板甲纹理 + 扭曲生物 + 冷调的泥泞与血污。文本：沉闷、绝望、伴随着内脏与腐烂的气味。",
        aestheticEn: "Focus: Broken_Plate_Armor + Twisted_Creatures + Cold_Mud_and_Blood. Text: Heavy_Despair_with_the_Smell_of_Rot.",
        runtime: "IF (主角获得短暂的胜利) THEN (必然揭示出一个更为绝望的宏大悲剧收尾)。",
        runtimeEn: "IF (Hero_Gains_Fleeting_Victory) THEN (Must_Reveal_A_Grander_Despairing_Tragedy)."
      }
    },
    { 
      id: "urban_fantasy", 
      name: "都市奇幻", nameEn: "Urban Fantasy",
      def: "现代城市里的魔法、吸血鬼猎人、隐藏的地下非人社会。", 
      defEn: "Magic in modern cities, vampire hunters, hidden non-human societies.",
      core: "枯燥的现代日常 vs 隐藏在帷幕下的神秘战线。 | 换喻 ($): 帷幕 (The Masquerade / The Veil)",
      coreEn: "Boring modern mundane vs mysterious battlefront behind the veil. | Metonymy ($): The Veil",
      logic: "【双重身份边界】：M1在 M4（凡人社会法则）和 M0（魔法隐秘社会）的夹缝中游走。M5（战斗）核心在于“不被发现（维持帷幕）”的伪装张力。",
      logicEn: "[Dual Identity Boundary]: M1 walks between M4 (Mortal Law) and M0 (Hidden Magic Society). M5 (Combat) tension lies in 'not breaking the veil'.",
      patch: {
        mechanics: "基础折叠协议 + [世界重影度 = 高; 日常与异常反差 = 极强]",
        mechanicsEn: "Base_FOLD + [World_Ghosting = High; Mundane_Anomaly_Contrast = Extreme]",
        aesthetic: "聚焦：霓虹灯下的恶魔角 + 藏在风衣下的附魔冷兵器。文本：冷硬派侦探（Hardboiled）语调与暗巷咒语的交织。",
        aestheticEn: "Focus: Demon_Horns_Under_Neon + Enchanted_Blades_Under_Trenchcoats. Text: Hardboiled_Detective_Slang_Mixed_With_Dark_Alley_Spells.",
        runtime: "IF (凡人即将目击魔法) THEN (触发：记忆消除或伪装术的被动防御)。",
        runtimeEn: "IF (Mortal_About_To_Witness_Magic) THEN (Trigger: Memory_Wipe_or_Passive_Camouflage)."
      }
    },
    { 
      id: "fairy_tale", 
      name: "童话/寓言", nameEn: "Fairy Tale",
      def: "民间传说重构、暗黑童话、心理原型、夸张的善恶惩罚。", 
      defEn: "Folklore reconstruction, dark fairy tales, psychological archetypes.",
      core: "纯真的丧失 vs 成长的残酷。简易涂鸦背后的心理阴影。 | 换喻 ($): 毒苹果 (Poison Apple)",
      coreEn: "Loss of innocence vs cruelty of growing up. Psychological shadows behind simple doodles. | Metonymy ($): Poison Apple",
      logic: "【原型投射】：M4（森林/女巫）是社会禁忌与无意识恐惧的绝对具象化。M1（孩童/无知者）的 M5（试错）必将遭到象征性的残缺或洗礼。",
      logicEn: "[Archetype Projection]: M4 (Forest/Witch) is absolute embodiment of taboo and unconscious fear. M1's (Child) trial (M5) always brings symbolic mutilation/baptism.",
      patch: {
        mechanics: "基础原型协议 + [隐喻直白度 = 1.0; 惩罚尺度 = 原教旨主义般残暴]",
        mechanicsEn: "Base_ARCHETYPE + [Metaphor_Directness = 1.0; Punishment_Scale = Fundamentalist_Brutality]",
        aesthetic: "聚焦：高饱和原色 + 超现实的巨大比例（如蘑菇的压迫感） + 糖果屋。文本：像儿歌一样轻快，但包含着吃人的内核。",
        aestheticEn: "Focus: High_Sat_Primary_Colors + Surreal_Proportions + Candy_Houses. Text: Light_Like_Nursery_Rhymes_But_Cannibalistic.",
        runtime: "IF (违背了某个简单的警告, 如'不要回头') THEN (立即遭到不可逆的变形或吞噬)。",
        runtimeEn: "IF (Violates_A_Simple_Warning) THEN (Instantly_Suffer_Irreversible_Transmutation_or_Devouring)."
      }
    },
    { 
      id: "mythological", 
      name: "神话重述", nameEn: "Mythological",
      def: "古老神话的现代演绎、半神英雄的宿命、神圣干预。", 
      defEn: "Modern retelling of ancient myths, demigod destiny, divine intervention.",
      core: "凡人的自由意志狂妄 vs 众神（命运）的残酷操控。 | 换喻 ($): 金线 (The Golden Thread of Fate)",
      coreEn: "Arrogance of mortal free will vs cruel manipulation of Gods (Fate). | Metonymy ($): The Golden Thread",
      logic: "【命运闭环】：M1的抗争（Hubris，狂傲）总是成为促成 M4（Nemesis，神罚/命运）实现的最后一环。越是挣脱，越是深陷。",
      logicEn: "[Fate Loop]: M1's struggle (Hubris) always becomes the final piece bringing about M4 (Nemesis). To struggle is to entangle.",
      patch: {
        mechanics: "基础宿命协议 + [神性注视感 = 强烈; 悲剧不可逆性 = 绝对]",
        mechanicsEn: "Base_FATE + [Divine_Gaze = Intense; Tragedy_Irreversibility = Absolute]",
        aesthetic: "聚焦：云端的巨大盲目双眼 + 大理石质感的崩塌 + 浓重的戏剧打光。文本：充满预言、神谕谜语与血腥乱伦的神圣感。",
        aestheticEn: "Focus: Blind_Gigantic_Eyes_In_Clouds + Collapsing_Marble + Heavy_Theatrical_Lighting. Text: Prophecy_Riddles_and_Bloody_Divine_Incest.",
        runtime: "IF (做出自以为逆天改命的选择) THEN (剧情揭示：这正是神谕预言其走向灭亡的方式)。",
        runtimeEn: "IF (Makes_A_Choice_Deemed_Defying_Fate) THEN (Reveal: This_Is_Exactly_How_The_Oracle_Prophesied_Doom)."
      }
    },
    { 
      id: "gothic", 
      name: "哥特/吸血鬼", nameEn: "Gothic / Vampire",
      def: "古堡、优雅怪物、永生绝望、性魅惑与浪漫恐怖。", 
      defEn: "Old castles, elegant monsters, immortality despair, eroticism and horror.",
      core: "爱欲（Eros）与死亡（Thanatos）的高度黏合纠缠。 | 换喻 ($): 滴血天鹅绒 (Bleeding Velvet)",
      coreEn: "High entanglement of Eros (Love) and Thanatos (Death). | Metonymy ($): Bleeding Velvet",
      logic: "【永生之腐】：M3（对血液/生命的欲望）被延长至无限，导致 M1 在无尽的时间（M4）中彻底腐败。美变成了尸僵与诅咒（M6）。",
      logicEn: "[Rot of Immortality]: M3 (Desire for Blood/Life) is extended to infinity, causing M1 to rot in endless time (M4). Beauty becomes rigor mortis and curse (M6).",
      patch: {
        mechanics: "基础浪漫协议 + [性压抑转化率 = 高; 死亡向往度 = 1.0]",
        mechanicsEn: "Base_ROMANCE + [Sexual_Repression_Conversion = High; Death_Drive = 1.0]",
        aesthetic: "聚焦：苍白尖牙的吻 + 摇曳的大烛台影 + 蕾丝与蛛网。文本：极其华丽、忧郁、充满神经质的古典咏叹。",
        aestheticEn: "Focus: Pale_Fanged_Kiss + Flickering_Candelabra_Shadows + Lace_and_Cobwebs. Text: Ornate_Melancholic_Neurotic_Classical_Arias.",
        runtime: "IF (产生真正的爱意) THEN (不可避免地转化为吸血或毁灭对方的冲动)。",
        runtimeEn: "IF (True_Love_Generated) THEN (Inevitably_Transforms_Into_Urge_To_Drain_Or_Destroy)."
      }
    },
    { 
      id: "isekai", 
      name: "异世界/穿越", nameEn: "Isekai / Portal",
      def: "现代人跌入魔法世界，系统加持，逆袭或开局无敌。", 
      defEn: "Modern person falls into magic world, system UI, zero to hero or OP.",
      core: "逃避现实的极致爽文投射，降维打击的权力幻梦。 | 换喻 ($): 金手指 (The Cheat Code)",
      coreEn: "Extreme escapist power fantasy, low-dimensionality strike. | Metonymy ($): The Cheat Code",
      logic: "【权限凌驾】：M1（现代意识）持有 M0（外挂/系统规则），对 M4（异世界土著法则）形成降维打击。M5（挑战）被彻底游戏化与轻度化。",
      logicEn: "[Privilege Override]: M1 (Modern mind) holds M0 (Cheat/System), executing a low-dimensional strike on M4 (Native World Limits). M5 becomes fully gamified.",
      patch: {
        mechanics: "基础游戏化协议 + [主角光环装甲 = 不可击穿; 升级正反馈 = 极快]",
        mechanicsEn: "Base_GAMIFY + [Plot_Armor = Impenetrable; Level-Up_Feedback = Extremely_Fast]",
        aesthetic: "聚焦：半透明的游戏UI面板闪烁 + 秒杀时的夸张特效 + 违和的日式/现代轻松氛围。文本：带有轻小说特质的数值播报与吐槽。",
        aestheticEn: "Focus: Translucent_UI_Panels + Overkill_VFX + Dissonant_Modern_Relaxed_Vibe. Text: Light-Novel_Stat_Broadcasting_and_Tsukkomi.",
        runtime: "IF (遭遇原本世界观里的顶级绝境) THEN (触发：系统UI提示音与轻描淡写的秒杀)。",
        runtimeEn: "IF (Encounters_Ultimate_World_Threat) THEN (Trigger: System_Ding_and_Casual_One-Shot)."
      }
    },
    { 
      id: "sword_sorcery", 
      name: "剑与魔法", nameEn: "Sword & Sorcery",
      def: "野蛮冒险、地牢探险、雇佣兵、DND跑团血腥风。", 
      defEn: "Barbarian adventure, dungeon crawling, mercenaries, DND bloody style.",
      core: "野蛮的肉体力量绝对凌驾于堕落文明与邪恶巫术之上。 | 换喻 ($): 染血大剑 (Bloodied Greatsword)",
      coreEn: "Barbarian physical might dominating over corrupt civilization and evil sorcery. | Metonymy ($): Bloodied Greatsword",
      logic: "【肉体崇拜】：M1的 M5（纯粹肌肉与钢铁的暴力）是唯一的真理。M4（复杂的魔法与庞大文明）皆被视为懦弱与腐败的象征，必将被M1粉碎。",
      logicEn: "[Flesh Worship]: M1's M5 (Pure muscle/steel violence) is the only truth. M4 (Complex magic/civ) is deemed cowardly and corrupt, to be crushed.",
      patch: {
        mechanics: "基础动作协议 + [魔法不可靠度 = 高; 肌肉斩杀收益 = 满级]",
        mechanicsEn: "Base_ACTION + [Magic_Unreliability = High; Muscle_Execute_Reward = MAX]",
        aesthetic: "聚焦：油腻的肌肉反光 + 飞溅的内脏 + 巫师惊恐扭曲的脸。文本：不加掩饰的暴力狂欢与对智力/魔法的蔑视。",
        aestheticEn: "Focus: Oiled_Muscle_Gleam + Splattering_Gore + Scared_Wizard_Faces. Text: Unapologetic_Violence_and_Contempt_for_Intellect.",
        runtime: "IF (遭遇极其复杂的魔法解谜) THEN (最优解通常是一剑把祭坛或陷阱核心劈碎)。",
        runtimeEn: "IF (Encounters_Complex_Magic_Puzzle) THEN (Optimal_Solve_Is_Usually_Smashing_The_Altar_With_Sword)."
      }
    },
    { 
      id: "gaslamp", 
      name: "蒸汽奇幻", nameEn: "Gaslamp Fantasy",
      def: "早期工业革命与神秘学的杂交、煤气灯下潜行的怪物。", 
      defEn: "Early industrial revolution mixed with occultism, monsters stalking under gaslamps.",
      core: "理性启蒙的傲慢光晕 vs 古老神秘学在阴影中的反噬。 | 换喻 ($): 齿轮与触手 (Gear and Tentacle)",
      coreEn: "Arrogant halo of rational enlightenment vs ancient occult backlash in the shadows. | Metonymy ($): Gear and Tentacle",
      logic: "【认知裂缝】：M4（科学文明/大英帝国式自信）看似主导白天，但 M2（古老的魔法与诅咒）在夜晚的阴暗面形成剥削性的共生。M1 是在两边走钢丝的调查员。",
      logicEn: "[Cognitive Rift]: M4 (Science/Empire) controls day, but M2 (Ancient Magic) forms exploitative symbiosis in nighttime shadows. M1 walks the tightrope.",
      patch: {
        mechanics: "基础侦探协议 + [超自然感染度 = 渐进; 工业污染滤镜 = 常驻]",
        mechanicsEn: "Base_DETECTIVE + [Supernatural_Infection = Gradual; Industrial_Pollution_Filter = Constant]",
        aesthetic: "聚焦：昏黄氤氲的煤气灯雾 + 精密黄铜仪器的转动声 + 炼金试管的沸腾。文本：带有维多利亚时期拘谨优雅的怪奇记录。",
        aestheticEn: "Focus: Dim_Gaslight_Fog + Precision_Brass_Whirring + Alchemy_Boiling. Text: Victorian_Stiff_Elegance_Mixed_With_Eldritch_Logs.",
        runtime: "IF (试图用纯科学解释异常事件) THEN (触发：理智值(SAN)的滑坡与机械运转的肉体化异变)。",
        runtimeEn: "IF (Attempt_To_Explain_Anomaly_Via_Pure_Science) THEN (Trigger: SAN_Drop_and_Machines_Sprouting_Flesh)."
      }
    },
    { 
      id: "new_weird", 
      name: "怪谈/新怪谭", nameEn: "New Weird",
      def: "现代城市空间的诡异症候、规则类怪谈、不可名状逻辑。", 
      defEn: "Eerie syndromes of modern urban space, rule-based horror, unspeakable logic.",
      core: "人类理性建构在本质荒谬的世界面前的彻底破产。 | 换喻 ($): 微笑的门把手 (The Smiling Doorknob)",
      coreEn: "Total bankruptcy of human rationality facing an essentially absurd world. | Metonymy ($): The Smiling Doorknob",
      logic: "【逻辑癌变】：M4（世界法则）彻底畸形且拒不解释。M1只能通过绝对服从一套“毫无意义的规则”（不看猫的眼睛/只能走盲道）来勉强存活（M6暂缓）。",
      logicEn: "[Logic Carcinoma]: M4 (World Rules) is totally deformed and unexplained. M1 survives only by blindly obeying 'meaningless rules' to delay M6.",
      patch: {
        mechanics: "基础怪奇协议 + [规则不可解度 = MAX; 日常物体的敌意 = 普遍]",
        mechanicsEn: "Base_WEIRD + [Rule_Incomprehensibility = MAX; Hostility_of_Mundane_Objects = Ubiquitous]",
        aesthetic: "聚焦：极其普通的日常角落 + 稍微错位的物理拼接（如墙壁渗出头发）+ 白炽灯频闪。文本：冷静且去人化的规则播报腔调。",
        aestheticEn: "Focus: Utterly_Mundane_Corners + Slight_Physics_Clips_Like_Hair_From_Walls + Fluorescent_Flicker. Text: Cold_Dehumanized_Rule_Broadcasting.",
        runtime: "IF (追问“为什么会这样”) THEN (被系统直接判定为重度违规并被异常环境同化)。",
        runtimeEn: "IF (Asks_'Why_is_this_happening?') THEN (System_Flags_As_Violation_and_Assimilates_Subject)."
      }
    },
    { 
      id: "supernatural", 
      name: "超能/异能", nameEn: "Supernatural Power",
      def: "现代背景的异能变种人、校园异能战、隐藏能力、控制灾害。", 
      defEn: "Modern mutants, school battle, hidden powers, disaster control.",
      core: "渴望融入群体的普通人心愿 vs 拥有特权力量的异化诅咒。 | 换喻 ($): 抑制环 (The Suppressor Collar)",
      coreEn: "Desire to fit in vs the alienating curse of privileged power. | Metonymy ($): The Suppressor Collar",
      logic: "【异化焦虑】：M5（使用超能力）必然引发现实 M4（常人社会的排斥法则）的应激反弹。力量不带来救赎，只带来隔离。",
      logicEn: "[Alienation Anxiety]: M5 (Using power) inevitably triggers backlash from M4 (Normal society's rejection). Power brings isolation, not salvation.",
      patch: {
        mechanics: "基础剧情协议 + [力量副作用 = 极强; 社会排他指数 = 苛刻]",
        mechanicsEn: "Base_DRAMA + [Power_Side_Effects = Extreme; Social_Exclusion_Index = Harsh]",
        aesthetic: "聚焦：流血的鼻孔（过度用脑） + 失重飘浮的铅笔 + 突然爆裂的玻璃窗。文本：用青春期成长的迷惘语调包装的超自然破坏。",
        aestheticEn: "Focus: Bleeding_Nostrils + Defying_Gravity_Pencils + Shattering_Windows. Text: Teen_Angst_Voice_Wrapped_Around_Supernatural_Destruction.",
        runtime: "IF (在众目睽睽之下释放力量拯救了他人) THEN (迎来的必定不是感激，而是深刻的恐惧与疏远)。",
        runtimeEn: "IF (Power_Released_Publicly_To_Save_Someone) THEN (Result_Must_Be_Fear_and_Alienation_Not_Gratitude)."
      }
    }
  ]
};
