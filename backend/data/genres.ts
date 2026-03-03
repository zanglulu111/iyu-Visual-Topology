

import { LibraryCategoryDef } from '../types';

export const GENRE_CATEGORIES: LibraryCategoryDef[] = [
  {
    id: "type_a",
    name: "动作与冒险 (Action & Adventure)",
    desc: "肾上腺素驱动，强调身体对抗、速度与外部冲突。",
    items: [
      { 
        id: "gun_fu", 
        name: "枪战/暴力美学 (Gun Fu)", 
        def: "吴宇森式双枪、慢动作、鲜血与西装、浪漫化的杀戮。", 
        core: "叙事张力：优雅的职业信条 vs 混乱的杀戮现实。主角往往是在混乱中试图维持最后秩序的孤独骑士。 | 视觉参考：吴宇森式的慢动作、飞舞的白鸽、双持手枪、教堂烛光、黑西装与鲜红血液的高对比度。",
        topology: "Weights: M5 (Style/Choreography) > M1 (Internal Monologue). Logic: Death is a dance. M4 (Enemy Horde) is infinite faceless fodder for the Hero's performance."
      },
      { 
        id: "tactical", 
        name: "特工/战术 (Tactical / Agent)", 
        def: "现代军事战术、CQB、高科技装备、全球任务。", 
        core: "叙事张力：严密的计划 vs 不可控的意外（墨菲定律）。强调专业性、配合与在极限压力下的冷静执行。 | 视觉参考：夜视仪绿光、战术手势、破门炸药、全息地图 HUD、冷峻的混凝土建筑与金属质感。",
        topology: "Weights: M5 (Competence) vs M4 (Complexity). Logic: Order vs Chaos. M1 is a professional tool. M3 is 'The Objective'. The thrill is in the precision."
      },
      { 
        id: "western", 
        name: "西部/边境 (Western)", 
        def: "左轮手枪、荒野、赏金猎人、法外正义、牛仔精神。", 
        core: "叙事张力：正在入侵的文明秩序（铁路/法律）与逐渐消亡的原始野性（荒野/左轮）之间的不可调和。 | 视觉参考：莱昂内式的眼部特写、风滚草、烈日下的干渴感、生锈的铁轨、小酒馆的摇摆门、夕阳剪影。",
        topology: "Weights: M4 (Civilization/Law) vs M1 (Individual Freedom). Logic: The Frontier is closing. The hero is obsolete. M7 is often death or riding into the sunset."
      },
      { 
        id: "vehicle", 
        name: "赛车/载具 (Vehicle / Chase)", 
        def: "速度与激情、改装车、极限追捕、人车合一。", 
        core: "叙事张力：人与机器的极限融合。通过速度来逃避现实或追逐自由，生死只在毫秒之间。 | 视觉参考：动态模糊、柏油路面的热浪、燃烧的橡胶、铬金属反光、低角度的贴地镜头、仪表盘的红线。",
        topology: "Weights: M5 (Velocity) >>> M1 (Subject). Logic: 'If you stop, you die.' The narrative is defined by momentum. M4 is a relentless pursuer or Time."
      },
      { 
        id: "disaster", 
        name: "灾难/求生 (Disaster / Survival)", 
        def: "地震海啸、极限环境求生、人定胜天、人性考验。", 
        core: "叙事张力：人类渺小的意志 vs 大自然宏大且冷漠的毁灭力量。社会秩序剥落后的人性裸露。 | 视觉参考：上帝视角的城市毁灭、巨大的海浪/裂缝、灰头土脸的幸存者、废墟中的标志性建筑残骸。",
        topology: "Weights: M4 (Nature/Catastrophe) >>> M1 (Subject). Logic: Humans are insignificant. M4 is a non-negotiable force. M3 is purely 'Survival'. Social status dissolves."
      },
      { 
        id: "kaiju", 
        name: "怪兽/巨物 (Kaiju / Monster)", 
        def: "人类对抗巨型生物、破坏力、B级片趣味、深海恐惧。", 
        core: "叙事张力：人类中心主义的傲慢 vs 远古/宇宙尺度的恐怖。人类只是脚下的蚂蚁。 | 视觉参考：仰视镜头强调巨物感、暴雨中的怪兽轮廓、被摧毁的城市天际线、人类惊恐的特写、生物冷光。",
        topology: "Weights: M4 (The Titan) >>> M1 (Humanity). Logic: The sublime terror of scale. M5 is often technological hubris (Mecha) vs natural wrath."
      },
      { 
        id: "war", 
        name: "战争/史诗 (War Epic)", 
        def: "宏大战场、战壕、兄弟连、残酷现实或英雄主义。", 
        core: "叙事张力：个体的脆弱肉体 vs 巨大的历史绞肉机。在非人的环境下试图保持人性。 | 视觉参考：泥泞的战壕、褪色的胶片质感、手持摄影的晃动、硝烟、鲜血与泥土混合的肮脏感。",
        topology: "Weights: M4 (History/Fate) >>> M1 (Soldier). Logic: The individual is erased by the collective. M3 (Victory) is abstract; M6 (Death) is concrete and immediate."
      },
      { 
        id: "superhero", 
        name: "超级英雄 (Superhero)", 
        def: "漫改、超能力、正邪对抗、起源故事、宇宙危机。", 
        core: "叙事张力：神性（无限力量）与人性（凡人弱点）的拉扯。能力越大，责任（或异化）越大。 | 视觉参考：紧身衣的纹理、高饱和度的能量光效、违背重力的动作设计、史诗般的英雄落地姿态。",
        topology: "Weights: M1 (Power) vs M1 (Responsibility). Logic: The internal struggle mirrors the external villain. M4 is the hero's shadow self."
      },
      { 
        id: "prison", 
        name: "越狱/逃亡 (Prison Break / Fugitive)", 
        def: "禁锢与自由、高智商脱逃、洗清冤屈、猫鼠游戏。", 
        core: "叙事张力：对自由的极度渴望 vs 严密的物理禁锢。智力与意志力的极限博弈。 | 视觉参考：铁栏杆的阴影、冷色调的混凝土、探照灯、隧道、倒计时、压抑的封闭空间构图。",
        topology: "Weights: M4 (The Panopticon) vs M5 (Ingenuity). Logic: The system is designed to crush M1. M3 (Freedom) is absolute. Every detail is a tool."
      },
      { 
        id: "treasure", 
        name: "寻宝/探险 (Treasure Hunt)", 
        def: "古迹探秘、解谜、机关陷阱、异域风情考古。", 
        core: "叙事张力：对未知的贪婪/好奇 vs 古老的诅咒/机关。历史的尘封秘密被现代人闯入。 | 视觉参考：火把照亮的黄金、尘埃颗粒、复杂的齿轮机关、古老地图、异域丛林或沙漠神庙。",
        topology: "Weights: M3 (The Artifact) drives M5 (Adventure). Logic: A linear quest through M4 (Traps/Rivals). History is the playground."
      },
      { 
        id: "sports", 
        name: "体育/竞技 (Sports)", 
        def: "训练蒙太奇、逆袭、团队精神、最后三秒绝杀。", 
        core: "叙事张力：肉体的极限痛苦 vs 精神的超越意志。在规则框架内对胜利的原始渴望。 | 视觉参考：汗水飞溅的特写、肌肉的紧绷、记分牌的红灯、慢动作的击球瞬间、观众席的虚焦背景。",
        topology: "Weights: M5 (Will/Training) vs M1 (Body Limits). Logic: The enemy is the self. M4 is the opponent, but the real battle is internal."
      },
      { 
        id: "revenge", 
        name: "复仇 (Revenge)", 
        def: "个人恩怨、以暴制暴、情绪宣泄、血债血偿的快感。", 
        core: "叙事张力：过去（创伤）对现在（生活）的吞噬。为了平息过去的幽灵，不惜毁灭未来。 | 视觉参考：雨夜、孤独的背影、染血的凶器、冷酷的眼神特写、黑白或高对比度的回忆闪回。",
        topology: "Weights: M2 (The Trauma) drives M5 (Violence) > M6 (Survival). Logic: M1 burns the world to fix the past. M7 is often emptiness after success."
      }
    ]
  },
  {
    id: "type_b",
    name: "科幻与未来 (Sci-Fi & Future)",
    desc: "基于科学技术或未来设定的幻想，探讨“如果...会怎样”。",
    items: [
      { 
        id: "hard_scifi", 
        name: "硬科幻 (Hard Sci-Fi)", 
        def: "严谨物理法则、宇航细节、科学推演、不违反现有理论。", 
        core: "叙事张力：人类渺小的理性 vs 宇宙宏大且冷酷的物理法则。技术是生存的唯一依靠。 | 视觉参考：真实的飞船内构、无声的真空环境、旋转的重力环、繁复的仪表盘、冷峻的星空。",
        topology: "Weights: M4 (Physics/Reality) is Absolute. Logic: Competence porn. M1 survives by understanding the rules of M4. Emotion is secondary to logic."
      },
      { 
        id: "cyberpunk", 
        name: "赛博朋克 (Cyberpunk)", 
        def: "高科技低生活、义体改造、黑客、企业极权、霓虹雨夜。", 
        core: "叙事张力：肉体的异化 vs 灵魂（Ghost）的存续。底层个体在庞大企业系统前的无力挣扎。 | 视觉参考：永恒的雨夜、高饱和度的霓虹灯（粉/紫/青）、全息广告巨幕、肮脏的街道与拉面摊、义肢接口。",
        topology: "Weights: M4 (Corporation/System) >>> M1 (Subject). Logic: The body is commodified. M3 is usually escape or connection, which is impossible. 'High Tech, Low Life'."
      },
      { 
        id: "space_opera", 
        name: "太空歌剧 (Space Opera)", 
        def: "星际帝国、宏大战争、外星种族、非硬核的冒险史诗。", 
        core: "叙事张力：古典的帝国兴衰史在星际尺度的重演。正义与邪恶的二元对立，宿命与血统。 | 视觉参考：激光剑、巨大的星际战舰、异星集市、光速跃迁的拉丝效果、宏伟的星球景观。",
        topology: "Weights: M6 (Fate of the Universe) > M1 (Individual). Logic: Classic tragedy/romance on a cosmic scale. M4 is a tyrannical regime or ancient evil."
      },
      { 
        id: "time_travel", 
        name: "时间旅行 (Time Travel)", 
        def: "循环、祖父悖论、蝴蝶效应、改变过去与未来。", 
        core: "叙事张力：改变命运的渴望 vs 因果律的惩罚。对“遗憾”的执念导致了更大的混乱。 | 视觉参考：时钟、重影、褪色的照片、莫比乌斯环式的视觉结构、既视感（Déjà vu）的镜头语言。",
        topology: "Weights: M4 (Time/Fate) vs M5 (Free Will). Logic: The protagonist tries to change M2 (Past), but M4 (Time) corrects itself. Nonlinear narrative."
      },
      { 
        id: "ai", 
        name: "人工智能 (AI / Android)", 
        def: "机器人觉醒、图灵测试、人机伦理、数字永生。", 
        core: "叙事张力：造物主（人类）与被造物（AI）的俄狄浦斯冲突。什么是“灵魂”的定义？ | 视觉参考：瞳孔中的数据流、恐怖谷效应的完美皮肤、服务器机房的冷蓝光、极简主义的白色房间。",
        topology: "Weights: M1 (Artificial Subject) vs M4 (Human Creator). Logic: Pinocchio complex. The tool demands a soul. M3 is 'To become Real'."
      },
      { 
        id: "post_apocalyptic", 
        name: "废土/末世 (Post-Apocalyptic)", 
        def: "文明毁灭后、资源争夺、辐射变异、生存法则。", 
        core: "叙事张力：文明的道德 vs 生存的本能。在秩序崩塌后重新定义“人性”。 | 视觉参考：被植被覆盖的废墟、生锈的汽车残骸、风沙、防毒面具、拼凑的武器与护甲。",
        topology: "Weights: M0 (Scarcity) is Absolute. Logic: Civilization is gone. M4 is nature or other survivors. M3 is basic needs (Water/Fuel) elevated to holy relics."
      },
      { 
        id: "alien", 
        name: "外星接触 (Alien Contact)", 
        def: "第五类接触、语言解码、入侵或和平、宇宙社会学。", 
        core: "叙事张力：对未知的绝对恐惧 vs 沟通的渴望。人类面对“完全他者”时的认知崩溃。 | 视觉参考：粘液与生物质感、迷雾、无法理解的几何体、强光、深邃的黑色眼眸。",
        topology: "Weights: M4 (The Other) is Unknowable. Logic: Communication breakdown. M1 confronts the limits of human understanding. Terror or Awe."
      },
      { 
        id: "steampunk", 
        name: "蒸汽朋克 (Steampunk)", 
        def: "维多利亚美学、齿轮机械、飞艇、复古未来主义。", 
        core: "叙事张力：工业革命的乐观主义 vs 维多利亚时代的阶级僵化。机械作为一种浪漫的魔法。 | 视觉参考：黄铜齿轮、蒸汽烟雾、护目镜、巨大的飞艇、维多利亚式礼服、发条装置。",
        topology: "Weights: M5 (Invention) > M4 (Tradition). Logic: The romance of the machine. Technology is visible, tactile, and wondrous."
      },
      { 
        id: "biopunk", 
        name: "生化/变异 (Biopunk)", 
        def: "基因工程、病毒泄漏、肉体恐怖、怪兽进化、克隆人。", 
        core: "叙事张力：自然进化的神圣性 vs 人工干预的亵渎。肉体不再是容器，而是可编辑的代码。 | 视觉参考：培养皿、变异的肢体、肉色的生物建筑、荧光液体、显微镜下的细胞分裂。",
        topology: "Weights: M1 (The Flesh) is Unstable. Logic: Body horror. Biology is technology. Identity dissolves into meat."
      },
      { 
        id: "soft_scifi", 
        name: "软科幻 (Soft Sci-Fi)", 
        def: "借科幻外壳探讨社会学、心理学或哲学，弱化技术细节。", 
        core: "叙事张力：一个微小的科幻设定（如“记忆可以删除”）引发的人际关系与社会伦理的异变。 | 视觉参考：近未来的日常感、冷淡的色调、微妙的不协调感、注重人物面部表情而非特效。",
        topology: "Weights: M0 (Concept) alters M1 (Psychology). Logic: A single 'What If' changes human relationships. Technology is just a catalyst for drama."
      },
      { 
        id: "multiverse", 
        name: "平行宇宙 (Multiverse)", 
        def: "多重现实、量子力学、不同版本的自我、维度跳跃。", 
        core: "叙事张力：无限的可能性 vs 唯一的当下选择。虚无主义（什么都不重要）与存在主义的对抗。 | 视觉参考：像碎玻璃一样的画面分割、万花筒效果、不同画风的快速切换、故障艺术（Glitch Art）。",
        topology: "Weights: M0 (Chaos) vs M1 (Meaning). Logic: Nothing matters because everything is possible. M1 must choose one reality to give it meaning."
      },
      { 
        id: "retro_futurism", 
        name: "复古未来 (Retro-Futurism)", 
        def: "过去想象中的未来、真空管美学、原子时代风格。", 
        core: "叙事张力：旧时代的乐观憧憬 vs 现实的讽刺。一种“未曾发生的未来”的怀旧感。 | 视觉参考：流线型设计、镀铬材质、真空管屏幕、原子时代的圆形建筑、50年代海报配色。",
        topology: "Weights: M3 (Nostalgia) > M2 (Reality). Logic: A future that never happened. Optimism driven by atomic energy, hiding a dark satire."
      }
    ]
  },
  {
    id: "type_c",
    name: "奇幻与神话 (Fantasy & Mythology)",
    desc: "超自然力量、魔法体系与非现实生物（侧重西方与现代）。",
    items: [
      { 
        id: "high_fantasy", 
        name: "史诗奇幻 (High Fantasy)", 
        def: "完整架空世界、精灵矮人、魔法战争、英雄征途。", 
        core: "叙事张力：光与暗的永恒战争。小人物（霍比特人）背负沉重宿命改变世界。 | 视觉参考：宏伟的城堡、巨龙的阴影、发光的魔法粒子、史诗般的山川航拍、古老的地图。",
        topology: "Weights: M6 (Fate of World) > M1 (Hero). Logic: The Hero's Journey. Good vs Evil is absolute. M4 is the Dark Lord."
      },
      { 
        id: "magical_realism", 
        name: "魔幻现实 (Magical Realism)", 
        def: "现实中融入魔幻、不解释魔法来源、隐喻现实。", 
        core: "叙事张力：荒诞的超自然现象 vs 沉重苦难的现实历史。魔法是现实的隐喻或逃避。 | 视觉参考：日常场景中的奇异元素（如飞在空中的祖母）、浓郁的热带色彩、梦境般的逻辑、尘土与光晕。",
        topology: "Weights: M0 (Dream Logic) coexists with M4 (Harsh Reality). Logic: The supernatural is mundane. Metaphor becomes literal."
      },
      { 
        id: "dark_fantasy", 
        name: "暗黑奇幻 (Dark Fantasy)", 
        def: "克苏鲁元素、残酷、成人向、反英雄、绝望的世界观。", 
        core: "叙事张力：人类的微弱希望 vs 充满恶意的世界意志。不存在救赎，只有生存与牺牲。 | 视觉参考：哥特式板甲、泥泞与鲜血、扭曲的枯树、迷雾、克苏鲁式的触手与眼球、低饱和度冷色。",
        topology: "Weights: M4 (Malicious World) >>> M1 (Struggle). Logic: No happy endings. The world itself wants to kill you. Survival is the only victory."
      },
      { 
        id: "urban_fantasy", 
        name: "都市奇幻 (Urban Fantasy)", 
        def: "现代城市里的魔法、吸血鬼猎人、隐藏的地下世界。", 
        core: "叙事张力：枯燥的现代生活 vs 隐藏在面纱下的魔法世界。双重身份的伪装与识破。 | 视觉参考：下水道的秘密入口、涂鸦墙上的符文、风衣下的长剑、夜店灯光下的吸血鬼、现代与古老的拼贴。",
        topology: "Weights: M1 (Dual Identity) vs M4 (The Masquerade). Logic: Magic hidden in plain sight. The mundane world covers a secret war."
      },
      { 
        id: "fairy_tale", 
        name: "童话/寓言 (Fairy Tale)", 
        def: "民间传说重构、暗黑童话、寓教于乐、公主与女巫。", 
        core: "叙事张力：纯真的丧失 vs 成长的残酷。用简单的原型故事隐喻复杂的心理创伤。 | 视觉参考：魔法森林、巨大的蘑菇、糖果屋、过度饱和的色彩、超现实的比例、绘本质感。",
        topology: "Weights: M3 (Wish) vs M4 (Curse). Logic: Moral lessons through surreal metaphors. Innocence meets the grotesque."
      },
      { 
        id: "mythological", 
        name: "神话重述 (Mythological)", 
        def: "希腊/北欧/埃及神话的现代演绎、半神英雄、宿命。", 
        core: "叙事张力：凡人的自由意志 vs 众神（命运）的残酷操控。弑神或成为神。 | 视觉参考：巨大的神像、闪电与雷霆、奥林匹斯山的云端、金色的血液（Ichor）、古希腊式构图。",
        topology: "Weights: M4 (The Gods/Fate) >>> M1 (Hero). Logic: Hubris triggers Nemesis. The struggle against a predetermined destiny."
      },
      { 
        id: "gothic", 
        name: "哥特/吸血鬼 (Gothic / Vampire)", 
        def: "古堡、优雅的怪物、永生与诅咒、浪漫恐怖。", 
        core: "叙事张力：爱与死（Eros & Thanatos）的纠缠。永生的诅咒与对鲜血（生命力）的渴望。 | 视觉参考：苍白的皮肤、鲜红的嘴唇/血液、天鹅绒、烛台、阴森的古堡、满月、蜘蛛网。",
        topology: "Weights: M3 (Eternal Love) vs M6 (The Curse). Logic: Immortality is a burden. Beauty is linked to death and decay."
      },
      { 
        id: "isekai", 
        name: "异世界/穿越 (Isekai / Portal)", 
        def: "穿越到魔法世界、系统流、爱丽丝梦游仙境模式。", 
        core: "叙事张力：现代知识/逻辑 vs 异世界的魔法规则。从现实的失败者到异界的英雄（或反之）。 | 视觉参考：游戏化的UI界面、魔法阵、奇异的生物坐骑、中世纪集市与现代服饰的违和感。",
        topology: "Weights: M1 (Modern Mind) vs M4 (Fantasy World). Logic: Power fantasy or fish-out-of-water. M0 includes game mechanics."
      },
      { 
        id: "sword_sorcery", 
        name: "剑与魔法 (Sword & Sorcery)", 
        def: "个人冒险、地牢探险、野蛮人、DND跑团风格。", 
        core: "叙事张力：野蛮的肉体力量 vs 邪恶的巫术诡计。不关注世界存亡，只关注个人的财宝与生存。 | 视觉参考：肌肉线条、涂油的皮肤、缠腰布、古代遗迹、冒着绿烟的药水、骷髅与宝箱。",
        topology: "Weights: M5 (Action) > M3 (Gold/Glory). Logic: Conan the Barbarian style. Might makes right. Magic is dangerous and corrupting."
      },
      { 
        id: "gaslamp", 
        name: "蒸汽奇幻 (Gaslamp Fantasy)", 
        def: "魔法与早期工业结合、维多利亚风格的魔法世界。", 
        core: "叙事张力：理性科学的启蒙 vs 古老魔法的复苏。在煤气灯的阴影中进行神秘仪式。 | 视觉参考：雾都伦敦的街道、煤气灯的昏黄光晕、绅士手杖、炼金术阵列、复杂的钟表机械。",
        topology: "Weights: M5 (Science) vs M4 (Magic). Logic: The Industrial Revolution meets the Arcane. Mystery in the fog."
      },
      { 
        id: "new_weird", 
        name: "怪谈/新怪谭 (New Weird)", 
        def: "难以名状的怪诞、混合流派、现代诡异、不可知论。", 
        core: "叙事张力：人类理性逻辑在不可名状的现实面前的崩塌。世界本身是疯的。 | 视觉参考：真菌覆盖的城市、长着眼睛的书本、非欧几里得几何结构、肉体与机械或植物的恶心融合。",
        topology: "Weights: M0 (Weird Physics) > M1 (Logic). Logic: The world is fundamentally wrong. Categories break down. Body horror meets fantasy."
      },
      { 
        id: "supernatural", 
        name: "超能/异能 (Supernatural Power)", 
        def: "现代背景下的超能力者、X战警模式、变种人社会。", 
        core: "叙事张力：作为“异类”的孤独感 vs 拥有力量的失控感。想做普通人而不得。 | 视觉参考：念力导致物体的悬浮/破碎、流鼻血、发光的双手、日常环境中的破坏痕迹。",
        topology: "Weights: M1 (The Mutant) vs M4 (Society). Logic: Power is a curse. M3 is 'Normalcy' or 'Acceptance'."
      }
    ]
  },
  {
    id: "type_d",
    name: "武侠与古装 (Wuxia & Period)",
    desc: "东方的浪漫主义，江湖与庙堂，历史的厚重感。",
    items: [
      { 
        id: "classic_wuxia", 
        name: "传统武侠 (Classic Wuxia)", 
        def: "金庸式。家国情怀、名门正派、江湖规矩、成长史诗。", 
        core: "叙事张力：个人恩怨 vs 家国大义。在江湖规矩与自由天性之间的道德抉择。 | 视觉参考：竹林、轻功飞跃、白衣飘飘、客栈、酒坛、剑气的具象化、水墨留白。",
        topology: "Weights: M6 (Honor/Xia) > M3 (Love). Logic: The Jianghu Code. M1 must sacrifice personal desire for righteousness."
      },
      { 
        id: "ronin", 
        name: "浪子/新派武侠 (Ronin / New Wave)", 
        def: "古龙/徐克式。极简主义、孤独、快意恩仇、视觉风格化。", 
        core: "叙事张力：绝对的孤独与虚无。出刀只在一瞬间，生与死的界限极度模糊。 | 视觉参考：残阳、断刀、极度特写的眼神、快速剪辑、甚至漫画感的定格、风沙与破庙。",
        topology: "Weights: M5 (Style) > M1 (Life). Logic: One strike, one death. Existential loneliness. M4 is the past."
      },
      { 
        id: "xianxia", 
        name: "仙侠/修真 (Xianxia / Cultivation)", 
        def: "气与道、三界六道、飞升渡劫、宿命轮回、神仙打架。", 
        core: "叙事张力：逆天改命的意志 vs 天道宿命的压制。凡人试图通过修炼跨越物种层级。 | 视觉参考：御剑飞行、浮空岛、发光的法阵、巨大的神兽、飘逸的丝绸、云雾缭绕。",
        topology: "Weights: M1 (Ascension) vs M4 (Heaven's Will). Logic: Defying the heavens. Power scaling. M6 is eternal damnation or godhood."
      },
      { 
        id: "court", 
        name: "宫廷/权谋 (Court Politics)", 
        def: "庙堂之高、夺嫡、后宫争斗、朝堂博弈、帝王心术。", 
        core: "叙事张力：极度压抑的礼教 vs 极度膨胀的权力欲望。在密闭空间内的生死语言博弈。 | 视觉参考：宏大的宫殿、对称构图、深红与金色的配色、屏风后的阴影、华丽的服饰与冰冷的眼神。",
        topology: "Weights: M4 (The Court/Emperor) > M1 (Subject). Logic: The Cage. Words are weapons. M5 is manipulation and betrayal."
      },
      { 
        id: "historical", 
        name: "历史/演义 (Historical Epic)", 
        def: "基于真实历史的戏剧化演绎、战争史诗、帝王将相。", 
        core: "叙事张力：英雄人物在滚滚历史车轮前的挣扎与抉择。天下大势分久必合。 | 视觉参考：千军万马的阵列、旌旗蔽日、古代攻城器械、地图推演、厚重的青铜器质感。",
        topology: "Weights: M4 (History's Wheel) > M1 (Hero). Logic: Great Man Theory vs Historical Materialism. M6 is legacy."
      },
      { 
        id: "period_mystery", 
        name: "古装探案/公案 (Period Mystery)", 
        def: "古代背景下的悬疑推理、神探、悬冤昭雪。", 
        core: "叙事张力：理性逻辑 vs 封建迷信/官场潜规则。在没有现代刑侦技术下对真相的挖掘。 | 视觉参考：灯笼光影、验尸银针、古卷档案、夜雨中的衙门、神秘的图腾。",
        topology: "Weights: M5 (Logic) vs M4 (Superstition/Corruption). Logic: Sherlock Holmes in robes. M2 is a bizarre crime."
      },
      { 
        id: "shenmo", 
        name: "志怪/神魔 (Shenmo / Mythic)", 
        def: "聊斋式、妖魔鬼怪、民间传说、人妖之恋、因果报应。", 
        core: "叙事张力：人与异类（妖/鬼）的情感纠葛。礼教对跨界之爱的审判。 | 视觉参考：荒山古寺、画皮、狐火、纸人、阴森的绿色调、凄美的书生与女鬼。",
        topology: "Weights: M3 (Forbidden Love) vs M4 (Taboo). Logic: The human and the supernatural coexist. Desire crosses species boundaries."
      },
      { 
        id: "alt_history", 
        name: "穿越/架空 (Time Travel / Alt-History)", 
        def: "现代人回古代、系统流、利用现代知识降维打击。", 
        core: "叙事张力：现代思维 vs 古代制度。降维打击的爽感与无法改变历史的无力感。 | 视觉参考：古代场景中出现的现代物品（如玻璃、火枪）、格格不入的行为举止、古今重叠的蒙太奇。",
        topology: "Weights: M1 (Modern Mind) vs M4 (Ancient Rules). Logic: Knowledge imbalance. M1 tries to 'hack' history."
      },
      { 
        id: "republic", 
        name: "民国/传奇 (Republic Era)", 
        def: "军阀混战、十里洋场、家族兴衰、乱世佳人、谍战风云。", 
        core: "叙事张力：新旧时代的剧烈碰撞。东方的传统与西方的摩登在乱世中交织。 | 视觉参考：旗袍、爵士乐厅、黄包车、阴雨绵绵的上海滩、霓虹灯与旧广告牌、手枪与鸦片。",
        topology: "Weights: M4 (Chaos/War) vs M3 (Romance/Ideal). Logic: Love in a fallen city. Elegance amidst decay."
      },
      { 
        id: "manor", 
        name: "种田/宅斗 (Manor Drama)", 
        def: "古代庶民生活、家族内部矛盾、经商致富、家长里短。", 
        core: "叙事张力：家族内部的等级秩序 vs 个人的生存空间。螺蛳壳里做道场，细节中的权力斗争。 | 视觉参考：精致的庭院、四季流转、食物制作特写、刺绣、屏风隔断的狭小空间。",
        topology: "Weights: M4 (Family Hierarchy) > M1 (Individual). Logic: Micro-politics. Survival within a closed domestic system."
      },
      { 
        id: "kungfu", 
        name: "功夫/技击 (Kung Fu)", 
        def: "强调身体格斗技巧、擂台比武、门派传承、民族气节。", 
        core: "叙事张力：肉体的极限 vs 精神的尊严。止戈为武，通过拳脚来证明某种哲学或气节。 | 视觉参考：肌肉的震颤、木人桩、武馆牌匾、拳脚相交的特写、击打出的灰尘、眼神对峙。",
        topology: "Weights: M5 (Technique/Body) > M4 (Opponent). Logic: Physical mastery leads to spiritual enlightenment. The duel is a dialogue."
      },
      { 
        id: "unofficial", 
        name: "戏说/野史 (Unofficial History)", 
        def: "借古讽今、轻松解构、不拘泥于史实的民间趣味。", 
        core: "叙事张力：严肃的历史人物被解构为世俗的喜剧角色。权力的荒诞化。 | 视觉参考：夸张的戏曲化表演、色彩鲜艳的服饰、打破第四面墙的对话、市井闹剧风格。",
        topology: "Weights: M4 (History) is Elastic. Logic: Satire. Modern values projected onto the past for humor."
      }
    ]
  },
  {
    id: "type_e",
    name: "惊悚与恐怖 (Horror & Terror)",
    desc: "针对生理本能的恐惧，惊吓与不适，强调直观的冲击。",
    items: [
      { 
        id: "slasher", 
        name: "砍杀/血浆 (Slasher)", 
        def: "面具怪人、连环杀戮、青少年受害、B级趣味、断肢。", 
        core: "叙事张力：脆弱的肉体 vs 坚不可摧的杀戮机器。性（青春）往往伴随着死。 | 视觉参考：标志性的面具、沾血的刀具特写、第一人称视角（杀手视角）、在树林中的奔跑、尖叫声。",
        topology: "Weights: M4 (The Killer) > M1 (Victim). Logic: The Meat Grinder. The body is fragile. The Killer is an unstoppable force."
      },
      { 
        id: "supernatural_horror", 
        name: "超自然/灵异 (Supernatural Horror)", 
        def: "鬼魂、恶魔附身、驱魔、看不见的恐惧、跳吓。", 
        core: "叙事张力：不可见的恶意入侵安全的家。理性的科学无法解释的超自然现象。 | 视觉参考：突然移动的家具、镜子里的倒影、阴影中的轮廓、驱魔仪式、冷色调滤镜。",
        topology: "Weights: M4 (The Unknown) invades M1 (Home). Logic: The Haunting. The safe space becomes dangerous. Reality breaks down."
      },
      { 
        id: "zombie", 
        name: "丧尸/感染 (Zombie)", 
        def: "活死人潮、围城、人性崩坏、生存恐惧、病毒爆发。", 
        core: "叙事张力：文明秩序的崩塌 vs 原始生存本能。最可怕的不是死人，是活人。 | 视觉参考：腐烂的皮肤质感、成群结队的尸潮、封死的窗户、空荡荡的超市、血迹斑斑的幸存者。",
        topology: "Weights: M4 (The Horde) vs M1 (The Group). Logic: The Siege. Claustrophobia. The erosion of humanity under pressure."
      },
      { 
        id: "body_horror", 
        name: "身体恐怖 (Body Horror)", 
        def: "肉体变形、寄生、残毁、生理不适感、异化。", 
        core: "叙事张力：自我意志 vs 失控的肉体。对自身生物性的厌恶与恐惧。 | 视觉参考：撕裂的皮肤、从体内钻出的异物、粘液、畸变的器官、手术台、令人作呕的音效。",
        topology: "Weights: M1 (The Self) is betrayed by M1 (The Body). Logic: Visceral transformation. Disgust and fascination combined."
      },
      { 
        id: "folk_horror", 
        name: "民俗/邪教 (Folk Horror)", 
        def: "偏远村落、古老仪式、白日恐怖、异教崇拜、排外。", 
        core: "叙事张力：现代文明人 vs 原始古老的集体信仰。在光天化日之下发生的野蛮献祭。 | 视觉参考：鲜花编织的头冠、诡异的图腾符号、白天的强光、圆圈舞、古老的农具、封闭村落。",
        topology: "Weights: M4 (The Cult/Tradition) > M1 (Outsider). Logic: Isolation. The old ways are stronger than modern logic."
      },
      { 
        id: "found_footage", 
        name: "伪纪录片 (Found Footage)", 
        def: "手持摄像机、录像带遗失、真实感恐怖、第一人称。", 
        core: "叙事张力：目击者的在场感 vs 正在发生的恐怖。摄像机是最后一道防线，也是死亡的记录者。 | 视觉参考：晃动的镜头、夜视模式的绿光、画面噪点/故障、急促的呼吸声、掉在地上的摄像机视角。",
        topology: "Weights: M5 (The Camera) limits M1 (Perception). Logic: What you can't see is scarier. Reality TV gone wrong."
      },
      { 
        id: "giallo", 
        name: "铅黄/美学恐怖 (Giallo)", 
        def: "鲜艳色彩、神秘黑手套、风格化谋杀、视听艺术。", 
        core: "叙事张力：死亡被仪式化、审美化。逻辑让位于噩梦般的视觉风格。 | 视觉参考：黑色皮手套、剃刀、鲜红的血、极度饱和的红/黄/蓝灯光、巴洛克式的构图、迷幻配乐。",
        topology: "Weights: M5 (Style) > M7 (Plot). Logic: Murder as art. Dreamlike, erotic, and violent. Narrative logic is secondary to atmosphere."
      },
      { 
        id: "home_invasion", 
        name: "家庭入侵 (Home Invasion)", 
        def: "安全空间被打破、陌生人闯入、无处可逃、幽闭恐惧。", 
        core: "叙事张力：最安全的避风港（家）变成了最危险的牢笼。猎人与猎物在狭小空间内的周旋。 | 视觉参考：窗外的黑影、破碎的玻璃、床底下的视角、面具人、被切断的电话线。",
        topology: "Weights: M4 (Intruder) vs M1 (Victim). Logic: Violation of safety. Cat and mouse in a confined space."
      },
      { 
        id: "lovecraftian", 
        name: "克苏鲁 (Lovecraftian)", 
        def: "不可名状、古神、疯狂、深海恐惧、人类渺小。", 
        core: "叙事张力：人类理性的脆弱 vs 宇宙古老且冷漠的真相。知道得越多，疯得越快。 | 视觉参考：触手、非欧几里得几何建筑、深海、迷雾、古旧发黄的书籍、黏滑的生物质感。",
        topology: "Weights: M4 (The Unknown) >>>>>> M1 (Subject). Logic: Cosmic Indifference. Knowledge leads to madness. There is no victory, only delay."
      },
      { 
        id: "psychological_horror", 
        name: "心理/精神恐怖 (Psychological Horror)", 
        def: "疯人院、幻觉、无法区分现实、压抑、精神崩溃。", 
        core: "叙事张力：最大的恐怖来自内部。无法信任自己的感官和记忆，自我的解体。 | 视觉参考：多重镜面反射、扭曲的走廊、重复的意象、叠化剪辑、特写的神经质表情。",
        topology: "Weights: M0 (Psychosis) distorts M2 (Reality). Logic: The Unreliable Narrator. The monster is inside. Reality is fluid."
      },
      { 
        id: "tech_horror", 
        name: "科技恐怖 (Tech Horror)", 
        def: "杀人机器、诅咒录像带/网站、科技反噬、屏幕生活。", 
        core: "叙事张力：人类对连接的渴望 vs 技术的异化与吞噬。屏幕变成了通往地狱的窗口。 | 视觉参考：雪花屏、故障像素 (Glitch)、摄像头的红灯、冰冷的服务器机房、贞子爬出屏幕。",
        topology: "Weights: M4 (Technology) > M1 (User). Logic: The Ghost in the Machine. Technology turns against its creator."
      },
      { 
        id: "horror_comedy", 
        name: "喜剧恐怖 (Horror Comedy)", 
        def: "吓人但好笑、解构恐怖片套路、荒诞血腥。", 
        core: "叙事张力：对恐怖套路的自我解构。在面对死亡时的荒诞反应，用笑声消解恐惧。 | 视觉参考：夸张的血浆喷射、不合时宜的武器（如唱片）、滑稽的死法、打破第四面墙。",
        topology: "Weights: M4 (Horror) is subverted by M5 (Absurdity). Logic: Laughing at death. The rules of horror are acknowledged and broken."
      }
    ]
  },
  {
    id: "type_f",
    name: "悬疑与推理 (Suspense & Mystery)",
    desc: "智力的迷宫，真相的剥离，强调“解谜”与“紧张感”。",
    items: [
      { 
        id: "whodunit", 
        name: "本格推理 (Whodunit)", 
        def: "逻辑至上、解谜游戏、侦探vs凶手、给观众公平线索。", 
        core: "叙事张力：混乱的犯罪现场 vs 侦探的绝对理性。智力拼图，还原唯一的真相。 | 视觉参考：放大镜、线索特写、嫌疑人一字排开、封闭的豪宅图纸、复杂的机械装置。",
        topology: "Weights: M5 (Intellect) vs M4 (Deception). Logic: The Puzzle Box. Order (Detective) must be restored from Chaos (Murder). M7 is the revelation."
      },
      { 
        id: "social_mystery", 
        name: "社会派推理 (Social Mystery)", 
        def: "借案件剖析人性与社会问题、动机大于诡计、现实主义。", 
        core: "叙事张力：个体罪行 vs 社会体制的结构性压迫。凶手也是受害者，真相往往令人心碎。 | 视觉参考：阴暗的街道、底层生活的细节、疲惫的警探、灰暗的色调、档案袋与报纸剪报。",
        topology: "Weights: M4 (Society/System) > M2 (Crime). Logic: The crime is a symptom of a larger social disease. M6 is moral ambiguity."
      },
      { 
        id: "noir", 
        name: "硬汉/黑色 (Hardboiled / Noir)", 
        def: "孤独的侦探、道德模糊的城市、烟酒与宿命、蛇蝎美人。", 
        core: "叙事张力：道德沦丧的城市 vs 坚守底线的孤独侦探。不仅是查案，是查人性。 | 视觉参考：百叶窗的条纹阴影、缭绕的烟雾、雨夜、霓虹灯倒影、风衣与软呢帽、黑白高对比度。",
        topology: "Weights: M4 (Corruption) > M3 (Truth). Logic: The City of Shadows. The protagonist is cynical and doomed. M3 (Femme Fatale) is a trap."
      },
      { 
        id: "locked_room", 
        name: "密室/暴风雪山庄 (Locked Room)", 
        def: "封闭空间、全员嫌疑人、不可能犯罪、孤岛模式。", 
        core: "叙事张力：物理上的封闭 vs 心理上的猜忌。每个人都有秘密，死神在倒计时。 | 视觉参考：上锁的门、窗外的暴风雪/孤岛、烛光、复杂的门锁结构、幸存者惊恐的眼神。",
        topology: "Weights: M4 (Confinement) vs M1 (Paranoia). Logic: The Pressure Cooker. Trust is impossible. The threat is inside."
      },
      { 
        id: "police", 
        name: "警察程序 (Police Procedural)", 
        def: "真实的破案流程、取证、法医、体制内部协作、连环案。", 
        core: "叙事张力：繁琐的程序正义 vs 狡猾的罪犯。体制内的官僚主义也是阻力之一。 | 视觉参考：警戒线、尸检台、证物袋、审讯室的单向玻璃、白板上的线索连线、咖啡与甜甜圈。",
        topology: "Weights: M5 (Procedure) vs M4 (Chaos). Logic: The System at work. Details matter. Teamwork over individual heroism."
      },
      { 
        id: "psychological_thriller", 
        name: "心理惊悚 (Psychological Thriller)", 
        def: "精神操控、不可靠叙述、记忆碎片、反转再反转。", 
        core: "叙事张力：叙述者自己的认知 vs 客观现实。观众被误导，直到最后一刻的反转。 | 视觉参考：破碎的镜子、模糊的主观镜头、闪回片段、日记本、药物、幻觉与现实的无缝切换。",
        topology: "Weights: M0 (Perception) vs M2 (Reality). Logic: Gaslighting. What is real? M1 cannot trust their own mind."
      },
      { 
        id: "serial_killer", 
        name: "连环杀手 (Serial Killer)", 
        def: "侧写、猫鼠游戏、变态心理学、猎捕怪物。", 
        core: "叙事张力：探员为了抓住怪物，必须理解怪物的思维，甚至凝视深渊。 | 视觉参考：受害者的照片墙、杀手的仪式性摆放、阴暗的地下室、犯罪侧写录音、特写眼睛。",
        topology: "Weights: M4 (The Monster) vs M5 (The Profiler). Logic: To catch a monster, you must think like one. M6 is losing one's humanity."
      },
      { 
        id: "espionage", 
        name: "间谍/谍战 (Espionage)", 
        def: "身份伪装、双重间谍、情报窃取、国家安全、暗战。", 
        core: "叙事张力：信任的缺失。每个人都戴着面具，爱人可能是敌人。国家利益高于个人情感。 | 视觉参考：微型相机、窃听器、摩斯电码、冷战时期的检查站、阴影中的交接、消音手枪。",
        topology: "Weights: M4 (The Agency/State) vs M1 (The Agent). Logic: The Double Cross. Trust is impossible. Identity is a mask."
      },
      { 
        id: "legal", 
        name: "法庭/律政 (Legal Thriller)", 
        def: "控辩博弈、证据反转、程序正义、语言的战斗。", 
        core: "叙事张力：法律事实 vs 客观真相。语言和逻辑成为武器，法庭是战场。 | 视觉参考：法槌、堆积如山的卷宗、证人席的特写、律师的激辩手势、肃穆的法庭全景。",
        topology: "Weights: M5 (Rhetoric) vs M4 (The Law). Logic: The Theater of Law. Truth is secondary to persuasion. Words are weapons."
      },
      { 
        id: "heist", 
        name: "高智商犯罪/侠盗 (Heist / Caper)", 
        def: "精密计划的抢劫或骗局、团队合作、炫技、反套路。", 
        core: "叙事张力：完美的计划 vs 突发的变数。团队配合的节奏感，盗亦有道的浪漫。 | 视觉参考：建筑蓝图、秒表倒计时、激光阵列、金库大门、变装道具、分屏镜头。",
        topology: "Weights: M5 (The Plan) vs M4 (The System). Logic: The Clockwork. A battle of intellects. M5 involves assembly, timing, and execution."
      },
      { 
        id: "techno", 
        name: "科技/网络悬疑 (Techno-Thriller)", 
        def: "黑客攻击、暗网、监控、高科技犯罪、信息战。", 
        core: "叙事张力：隐形的网络幽灵 vs 现实世界的破坏。由于看不见敌人而产生的技术恐慌。 | 视觉参考：滚动的代码屏幕、监控摄像头画面、IP地址追踪、服务器机房、暗网界面。",
        topology: "Weights: M5 (Code/Hacking) vs M4 (Surveillance). Logic: Invisible Warfare. The battlefield is digital, but the consequences are real."
      },
      { 
        id: "hitchcockian", 
        name: "希区柯克式 (Hitchcockian)", 
        def: "悬念大于惊吓、麦高芬(MacGuffin)、偷窥、无辜者蒙冤。", 
        core: "叙事张力：观众知道炸弹在哪但角色不知道（悬念）。普通人卷入巨大的阴谋。 | 视觉参考：麦高芬（手提箱/钥匙）、螺旋楼梯、眩晕推拉镜头（Dolly Zoom）、金发女郎、阴影轮廓。",
        topology: "Weights: M4 (Suspense) > M1 (Innocence). Logic: The Wrong Man. An ordinary person trapped in an extraordinary plot. Tension is key."
      }
    ]
  },
  {
    id: "type_g",
    name: "剧情与情感 (Drama & Emotion)",
    desc: "以人物关系、情感冲突和现实生活为核心的纯粹叙事。",
    items: [
      { 
        id: "family_drama", 
        name: "家庭伦理 (Family Drama)", 
        def: "代沟、婚姻危机、破碎家庭、和解、原生家庭。", 
        core: "叙事张力：血缘的羁绊 vs 个体的独立。爱与恨在同一个屋檐下交织，最亲密的人伤害最深。 | 视觉参考：餐桌上的沉默、摔碎的盘子、老照片、拥挤或空荡的客厅、特写面部微表情。",
        topology: "Weights: M4 (The Father/Tradition) vs M1 (The Child). Logic: The Oedipal Knot. The struggle for identity within the crushing weight of blood relations."
      },
      { 
        id: "coming_of_age", 
        name: "青春成长 (Coming-of-Age)", 
        def: "少年烦恼、初恋、叛逆、失去童真、成人礼。", 
        core: "叙事张力：理想化的童真 vs 残酷的成人世界。成长的阵痛，第一次发现世界的谎言。 | 视觉参考：夏日阳光、自行车、校服、奔跑、秘密基地、夕阳下的剪影、胶片质感。",
        topology: "Weights: M1 (Child) -> Transformation -> M1 (Adult). Logic: The Rite of Passage. The loss of innocence. M2 is the realization that the world is broken."
      },
      { 
        id: "medical", 
        name: "医疗/职业 (Medical / Occupational)", 
        def: "医院生死、职场斗争、专业领域的细节、行业百态。", 
        core: "叙事张力：职业道德 vs 个人情感。在生死攸关的高压环境下，人性的闪光与黑暗。 | 视觉参考：无影灯、手术刀、白大褂、心电图的跳动、消毒水的冷色调、忙碌的走廊。",
        topology: "Weights: M6 (Life/Death) vs M5 (Professionalism). Logic: High stakes workplace. M1 must detach emotions to function."
      },
      { 
        id: "tragedy", 
        name: "悲剧/虐心 (Tragedy / Melodrama)", 
        def: "催泪、命运捉弄、无法挽回的失去、情绪宣泄。", 
        core: "叙事张力：美好的事物 vs 必然的毁灭。通过毁灭美好来唤起观众的痛感与怜悯。 | 视觉参考：葬礼、雨水、空椅子、信物、绝症诊断书、孤独的背影、冷暖色调的强烈对比。",
        topology: "Weights: M6 (Loss) is Inevitable. Logic: Catharsis. The audience knows M1 is doomed, but watches the struggle anyway."
      },
      { 
        id: "ensemble", 
        name: "群像剧 (Ensemble)", 
        def: "多线叙事、多主角、命运交织、众生相。", 
        core: "叙事张力：看似无关的个体 vs 命运的蝴蝶效应。所有孤岛最终连成大陆，强调巧合与宿命。 | 视觉参考：多线剪辑、城市全景、不同角色的视线交汇、象征性的连接物（如钱/枪）。",
        topology: "Weights: M4 (Fate/Coincidence) connects multiple M1s. Logic: The Butterfly Effect. Separate lives intersect to create meaning."
      },
      { 
        id: "romance_pure", 
        name: "情感/纯爱 (Pure Romance)", 
        def: "专注于两人关系的建立与破裂、细腻情感、遗憾。", 
        core: "叙事张力：两个孤独灵魂的相互吸引 vs 现实的阻碍。爱是唯一的救赎，也是最大的软肋。 | 视觉参考：柔光、对视的特写、牵手、信件、唯美的风景、慢节奏的呼吸感。",
        topology: "Weights: M3 (The Other) is the Focus. Logic: The Missing Half. M1 is incomplete without M3. M4 is the obstacle preventing union."
      },
      { 
        id: "corporate", 
        name: "职场/商战 (Corporate Drama)", 
        def: "办公室政治、商业博弈、创业艰辛、利益交换。", 
        core: "叙事张力：野心 vs 道德。为了成功可以牺牲多少人性？现代丛林法则。 | 视觉参考：玻璃幕墙、西装、高层俯瞰视角、会议桌的对峙、签署文件、深夜的办公室灯光。",
        topology: "Weights: M5 (Ambition) vs M4 (Ethics). Logic: The Concrete Jungle. Success requires a sacrifice of the soul."
      },
      { 
        id: "period_drama", 
        name: "年代/史诗 (Period Drama)", 
        def: "个人命运在时代洪流中的起伏、怀旧感、大时代。", 
        core: "叙事张力：个体的渺小 vs 时代的宏大。大历史背景下小人物的悲欢离合，时代的挽歌。 | 视觉参考：考究的时代服饰、旧报纸、标志性历史事件的重现、泛黄的色调、宏大的历史场景。",
        topology: "Weights: M4 (History/Time) >>> M1 (Individual). Logic: The individual is swept away by the currents of time. Nostalgia and loss."
      },
      { 
        id: "road_drama", 
        name: "公路剧情 (Road Drama)", 
        def: "旅途中的治愈、陌生人的相遇、寻找自我。", 
        core: "叙事张力：物理的位移 vs 心理的转变。把过去抛在脑后，在路上寻找答案。 | 视觉参考：车窗外的风景后退、笔直的公路、汽车旅馆、地图、驾驶室内的双人镜头。",
        topology: "Weights: M1 (Journey) > M3 (Destination). Logic: The Mobile Confessional. The vehicle is a pressure cooker for transformation."
      },
      { 
        id: "educational", 
        name: "教育/校园 (Educational)", 
        def: "师生关系、应试压力、启蒙与感化、校园霸凌。", 
        core: "叙事张力：体制化的规训 vs 个性的觉醒。一个灵魂唤醒另一个灵魂，或被集体压垮。 | 视觉参考：黑板粉笔字、课桌椅的排列、操场、试卷、讲台的仰视/俯视、校园的围墙。",
        topology: "Weights: M4 (Institution/School) vs M1 (Student). Logic: Discipline vs Growth. The classroom as a microcosm of society."
      },
      { 
        id: "erotic", 
        name: "情色/欲望 (Erotic / Sensual)", 
        def: "身体探索、禁忌关系、欲望与压抑、成人议题。", 
        core: "叙事张力：社会禁忌 vs 原始本能。通过身体的纠缠来探索心理的边界与权力的关系。 | 视觉参考：皮肤的纹理、汗水、暧昧的光影、局部的特写、丝绸与肌肤、窥视的视角。",
        topology: "Weights: M5 (Desire/Libido) > M4 (Taboo). Logic: The body speaks what words cannot. Intimacy as a battlefield."
      },
      { 
        id: "slice_of_life", 
        name: "治愈/生活流 (Slice of Life)", 
        def: "日常琐碎、美食、小确幸、无冲突叙事。", 
        core: "叙事张力：生活的平庸 vs 瞬间的神性。在无聊的日常中发现美与秩序，对抗虚无。 | 视觉参考：做饭的过程特写、自然光、植物、猫、环境音（白噪音）、固定长镜头。",
        topology: "Weights: M1 (Being) > M5 (Doing). Logic: Anti-drama. Finding meaning in the mundane. Zen and the art of maintenance."
      }
    ]
  },
  {
    id: "type_h",
    name: "社会与哲学 (Society & Philosophy)",
    desc: "思想的深度，现实的切片，探讨“人之所以为人”与社会结构。",
    items: [
      { 
        id: "social_realism", 
        name: "社会现实主义 (Social Realism)", 
        def: "关注底层、边缘人群、贫富差距、赤裸的生活真相。", 
        core: "叙事张力：生存的重压 vs 人的尊严。赤裸裸地展示被主流社会忽视的苦难与不公。 | 视觉参考：手持摄影的粗糙感、拥挤的群租房、肮脏的街道、自然光、素人演员的质感。",
        topology: "Weights: M4 (System/Poverty) >>> M1 (Subject). Logic: The Trap. M1 is crushed by structural forces beyond their control."
      },
      { 
        id: "existentialism", 
        name: "存在主义 (Existentialism)", 
        def: "生命的意义、荒诞感、孤独、选择的焦虑、死亡哲学。", 
        core: "叙事张力：人类寻找意义的渴望 vs 宇宙冷漠的无意义。在荒谬的世界中如何自由地活？ | 视觉参考：空旷的风景、孤独的人物剪影、长久的沉默、镜子、时钟、黑白色调。",
        topology: "Weights: M1 (Existence) vs M0 (The Absurd). Logic: Life has no inherent meaning; M1 must create it through action (M5)."
      },
      { 
        id: "biopic", 
        name: "传记/人物 (Biopic)", 
        def: "历史人物的真实一生、人性的复杂面、时代的缩影。", 
        core: "叙事张力：公众形象 vs 私人真实。一个伟人背后的弱点、挣扎与不为人知的代价。 | 视觉参考：特定年代的妆造、历史资料片段、标志性的演讲/时刻、老年妆的细节。",
        topology: "Weights: M1 (The Icon) vs M4 (The Era). Logic: The Great Man Theory. A singular will shaping history vs the toll it takes."
      },
      { 
        id: "dystopian", 
        name: "反乌托邦 (Dystopian Social)", 
        def: "极权社会、人性异化、对完美社会的批判、制度反思。", 
        core: "叙事张力：完美的集体秩序 vs 残缺的个体自由。为了乌托邦，我们牺牲了什么？ | 视觉参考：统一的制服、巨大的领袖画像、水泥建筑、监控屏幕、灰暗压抑的色调、列队的人群。",
        topology: "Weights: M4 (The Regime) vs M1 (The Rebel). Logic: Order is the enemy of humanity. The perfect society is a prison."
      },
      { 
        id: "feminist", 
        name: "女性主义 (Feminist)", 
        def: "女性视角、性别困境、觉醒与反抗、母女关系。", 
        core: "叙事张力：男权凝视 vs 女性主体性。打破刻板印象，寻找属于女性的语言和力量。 | 视觉参考：女性视角的特写（非色情）、镜子中的自我审视、束缚物（如紧身胸衣）的解除、姐妹情谊。",
        topology: "Weights: M1 (Female Subject) vs M4 (Patriarchy). Logic: Reclaiming the Gaze. The struggle for autonomy and voice."
      },
      { 
        id: "religious", 
        name: "宗教与信仰 (Religious / Spiritual)", 
        def: "信仰危机、救赎、神性与人性的冲突、苦修。", 
        core: "叙事张力：沉默的上帝 vs 痛苦的信徒。信仰是在绝望中依然选择相信，还是虚妄的安慰？ | 视觉参考：圣像、烛光、祈祷的手、受难的肉体、光束（丁达尔效应）、寺庙或教堂的空灵感。",
        topology: "Weights: M1 (Believer) vs M4 (Silence of God). Logic: The Crisis of Faith. M3 is Salvation, but M6 is doubt."
      },
      { 
        id: "ethical", 
        name: "伦理道德 (Ethical Drama)", 
        def: "电车难题、道德困境、没有绝对的对错、良知审判。", 
        core: "叙事张力：两个“对”的价值观之间的冲突。无论怎么选都是错的，道德的两难困境。 | 视觉参考：面部特写强调犹豫和痛苦、天平、审判席、对称构图暗示对立、冷峻的色调。",
        topology: "Weights: M5 (Choice) vs M6 (Consequence). Logic: The Dilemma. There is no right answer, only the burden of choosing."
      },
      { 
        id: "satire", 
        name: "政治讽刺 (Political Satire)", 
        def: "黑色幽默、解构权力、荒诞的官僚主义、选举闹剧。", 
        core: "叙事张力：严肃的权力仪式 vs 荒诞的内在逻辑。通过夸张和嘲笑来揭示权力的虚伪。 | 视觉参考：夸张的肢体语言、滑稽的制服、荒谬的巨大的道具、小丑式的人物、电视新闻边框。",
        topology: "Weights: M4 (Power) is Absurd. Logic: The Emperor has no clothes. Humor exposes the hollowness of authority."
      },
      { 
        id: "anti_war", 
        name: "战争反思 (Anti-War)", 
        def: "战争创伤（PTSD）、人性的泯灭、非英雄主义叙事、反战。", 
        core: "叙事张力：宏大的战争宣传 vs 个体的惨痛牺牲。战争中没有赢家，只有受害者。 | 视觉参考：断肢、惊恐的眼神、废墟中的童真物品（如玩具）、无声的呐喊、褪色的家书。",
        topology: "Weights: M6 (Trauma) > M5 (Action). Logic: De-glamorization of violence. The focus is on the cost, not the victory."
      },
      { 
        id: "identity", 
        name: "身份认同 (Identity)", 
        def: "移民、种族、性少数、我是谁、文化冲突。", 
        core: "叙事张力：社会标签 vs 真实自我。在两种文化或身份之间撕裂，寻找归属感。 | 视觉参考：镜子里的多重影像、面具、不同文化的符号并置、护照/证件、边界线。",
        topology: "Weights: M1 (Self) vs M4 (Label). Logic: The struggle to define oneself against external definitions. Who am I?"
      },
      { 
        id: "psychoanalytic", 
        name: "心理分析 (Psychoanalytic)", 
        def: "潜意识、梦境解析、童年创伤、弗洛伊德式隐喻。", 
        core: "叙事张力：显意识的伪装 vs 潜意识的欲望。过去的幽灵如何操控现在的行为。 | 视觉参考：超现实的梦境意象、螺旋楼梯、钥匙孔、迷宫、重复的符号、童年闪回。",
        topology: "Weights: M0 (Unconscious) rules M1 (Conscious). Logic: The Return of the Repressed. Symbols are more real than reality."
      },
      { 
        id: "utopian", 
        name: "乌托邦/寓言 (Utopian / Fable)", 
        def: "理想国、虚构的封闭社会、人类学实验、社会寓言。", 
        core: "叙事张力：人造的天堂 vs 人性的缺陷。一个完美的社会实验是如何因为人性而必然崩塌的。 | 视觉参考：极简主义的白色建筑、人工控制的天气、统一的服装、舞台剧式的布景、完美的对称。",
        topology: "Weights: M4 (Ideal System) fails due to M1 (Human Flaw). Logic: The fragility of perfection. Utopia always becomes Dystopia."
      }
    ]
  },
  {
    id: "type_i",
    name: "喜剧与幽默 (Comedy & Humor)",
    desc: "以笑声解构现实，节奏与反差的艺术。",
    items: [
      { 
        id: "absurdist", 
        name: "荒诞/无厘头 (Absurdist)", 
        def: "逻辑崩坏、周星驰式、夸张表演、拼贴、后现代。", 
        core: "叙事张力：严肃的语境 vs 毫无逻辑的行为。彻底解构因果律，一切皆可嘲笑。 | 视觉参考：不合时宜的道具、夸张的表情特写、打破物理规律的动作、拼贴画风、快节奏剪辑。",
        topology: "Weights: M4 (Reality) is Elastic. Logic: The Absurd. Pain is funny. Logic is inverted. The protagonist fails upwards."
      },
      { 
        id: "black_comedy", 
        name: "黑色幽默 (Black Comedy)", 
        def: "死亡/犯罪的滑稽化、盖·里奇式、多线巧合、命运玩笑。", 
        core: "叙事张力：悲惨的命运 vs 滑稽的巧合。在面对死亡和犯罪时表现出的冷漠与荒谬。 | 视觉参考：多线叙事的平行剪辑、尸体旁的冷笑话、意外的暴力、冷峻的色调中突然的亮色。",
        topology: "Weights: M6 (Death/Tragedy) is treated as M5 (Joke). Logic: Irony. Laughing at the darkness to survive it."
      },
      { 
        id: "rom_com", 
        name: "浪漫喜剧 (Rom-Com)", 
        def: "欢喜冤家、误会、甜蜜结局、约会场景、轻松治愈。", 
        core: "叙事张力：性格反差 vs 命中注定。一系列误会和巧合最终导向大团圆。 | 视觉参考：分屏电话场景、明亮温馨的色调、雨中奔跑、花束、精心设计的邂逅场景。",
        topology: "Weights: M4 (Misunderstanding) vs M3 (Love). Logic: The Meet Cute. Conflict leads to connection. Happy ending is mandatory."
      },
      { 
        id: "parody", 
        name: "讽刺/戏仿 (Satire / Parody)", 
        def: "模仿经典、嘲讽社会现象、解构流行文化、恶搞。", 
        core: "叙事张力：经典文本的崇高 vs 拙劣模仿的滑稽。通过解构经典来嘲讽当下的流行文化。 | 视觉参考：对经典电影场景的一比一复刻（但换成滑稽版）、打破第四面墙、夸张的致敬。",
        topology: "Weights: M4 (Genre Tropes) are Exaggerated. Logic: Subversion. The story exists to mock other stories."
      },
      { 
        id: "cringe", 
        name: "尴尬喜剧 (Cringe Comedy)", 
        def: "社交灾难、沉默、极其真实的尴尬感、伪纪录风。", 
        core: "叙事张力：想要维持体面 vs 不断露怯的现实。观众替角色感到尴尬，笑中带痛。 | 视觉参考：长时间的尴尬沉默镜头、推拉镜头捕捉微表情、打破第四面墙的眼神交流（The Office式）。",
        topology: "Weights: M4 (Social Norms) vs M1 (Awkwardness). Logic: The Pain of Being Seen. Humor comes from discomfort."
      },
      { 
        id: "action_comedy", 
        name: "动作喜剧 (Action Comedy)", 
        def: "打斗与笑料结合、成龙式杂耍、不严肃的危机。", 
        core: "叙事张力：致命的危险 vs 游戏般的心态。把暴力转化为杂耍，利用环境道具进行搞笑打斗。 | 视觉参考：利用身边物品（梯子/椅子）打斗、夸张的摔倒反应、节奏感极强的动作剪辑。",
        topology: "Weights: M5 (Action) is Playful. Logic: Jackie Chan style. Violence is a dance, not a tragedy. Props are key."
      },
      { 
        id: "slapstick", 
        name: "滑稽/闹剧 (Slapstick)", 
        def: "肢体搞笑、摔倒、纯物理幽默、默片遗风。", 
        core: "叙事张力：身体 vs 物理法则。人类像卡通人物一样耐打，纯粹的肢体奇观。 | 视觉参考：香蕉皮、砸脸的蛋糕、夸张的肢体变形、加速播放、默片式的字幕卡。",
        topology: "Weights: M1 (Body) vs M4 (Physics). Logic: Cartoon Physics. Pain is temporary and funny. Physical comedy."
      },
      { 
        id: "buddy", 
        name: "伙伴/公路 (Buddy Comedy)", 
        def: "性格迥异的两个人被迫同行、反差萌、旅途囧事。", 
        core: "叙事张力：两个截然不同的人（高/矮，黑/白，严肃/活泼）被迫捆绑。冲突带来友谊。 | 视觉参考：双人同框的中景镜头、车内对话、旅途风景的变换、并不默契的配合。",
        topology: "Weights: M1 (Relation) > M3 (Destination). Logic: The Odd Couple. Friction between characters creates the spark."
      },
      { 
        id: "teen", 
        name: "校园/青春 (Teen Comedy)", 
        def: "荷尔蒙、毕业舞会、恶作剧、成长的烦恼、性启蒙。", 
        core: "叙事张力：想要融入集体 vs 想要与众不同。对性的渴望与尴尬，友谊的背叛与和解。 | 视觉参考：高中走廊、储物柜、派对红杯子、毕业舞会灯光、色彩鲜艳的服装。",
        topology: "Weights: M4 (Social Hierarchy) vs M1 (Belonging). Logic: High School is a battlefield. Hormones drive M5."
      },
      { 
        id: "sitcom", 
        name: "家庭情景 (Sitcom / Family)", 
        def: "琐事、亲戚关系、节日聚会、温情与吵闹。", 
        core: "叙事张力：家庭成员间的小摩擦 vs 永恒的亲情纽带。一切问题都能在30分钟内解决。 | 视觉参考：固定的客厅布景、明亮的高调布光、沙发上的群像、标志性的笑声（罐头笑声）。",
        topology: "Weights: M4 (Domestic Chaos) vs M1 (Family Bond). Logic: The Status Quo is always restored. Comfort viewing."
      },
      { 
        id: "workplace", 
        name: "职场喜剧 (Workplace)", 
        def: "办公室政治幽默化、老板与员工、社畜共鸣。", 
        core: "叙事张力：荒谬的工作要求 vs 摸鱼的生存智慧。把无聊的职场异化为滑稽的战场。 | 视觉参考：格子间、打印机、茶水间八卦、尴尬的团建、老板的空洞演讲。",
        topology: "Weights: M4 (The Boss/Bureaucracy) is Ridiculed. Logic: Dilbert principle. Surviving the absurdity of work."
      },
      { 
        id: "dramedy", 
        name: "悲喜剧 (Dramedy)", 
        def: "笑中带泪、苦涩的幽默、生活流、真实人生的荒诞。", 
        core: "叙事张力：生活的悲剧底色 vs 幽默的应对方式。在葬礼上笑场，在婚礼上哭泣。 | 视觉参考：自然光、生活化的场景、既不夸张也不严肃的表演、苦乐参半的结尾。",
        topology: "Weights: M1 (Emotion) is Complex. Logic: Life is messy. Humor is a defense mechanism against sadness."
      }
    ]
  },
  {
    id: "type_j",
    name: "爱情与罗曼史 (Romance & Intimacy)",
    desc: "为了满足“极致细分”，专注于亲密关系的建立与拉扯。",
    items: [
      { 
        id: "first_love", 
        name: "初恋/纯爱 (First Love)", 
        def: "校园、青涩、暗恋、无疾而终、白色系。", 
        core: "叙事张力：第一次心动 vs 不敢触碰的羞涩。纯洁无暇但往往以遗憾告终。 | 视觉参考：逆光、白色窗帘、图书馆、单车后座、手写的信、干净的校服。",
        topology: "Weights: M5 (Timidity) vs M3 (Desire). Logic: Innocence. The hesitation is more important than the consummation."
      },
      { 
        id: "tragic", 
        name: "虐恋/绝恋 (Tragic Romance)", 
        def: "绝症、阶级阻碍、生离死别、催泪弹。", 
        core: "叙事张力：至死不渝的爱 vs 无法抗拒的命运（死亡/阶级）。爱得越深，痛得越切。 | 视觉参考：病房、墓碑、大雨中的离别、信物特写、冷色调的孤独感、眼泪。",
        topology: "Weights: M3 (Love) vs M4 (Fate/Death). Logic: Romeo & Juliet. Love is intensified by the impossibility of M4."
      },
      { 
        id: "adult", 
        name: "成熟/成人爱情 (Adult Romance)", 
        def: "中年危机、出轨、复杂的伴侣关系、现实主义。", 
        core: "叙事张力：激情消退后的倦怠 vs 寻找新的刺激。爱包含着责任、欺骗与妥协。 | 视觉参考：卧室的台灯、烟灰缸、深夜的酒杯、疲惫的眼神、背对背的睡眠。",
        topology: "Weights: M1 (Reality) vs M3 (Passion). Logic: Love is work. Disillusionment and compromise."
      },
      { 
        id: "fantasy_romance", 
        name: "奇幻/跨物种 (Fantasy Romance)", 
        def: "人鬼恋、人兽恋、吸血鬼恋、跨越时空的爱。", 
        core: "叙事张力：两个不同物种/世界间的吸引力 vs 物理法则的阻隔。爱超越肉体形态。 | 视觉参考：发光的魔法生物、悬浮、半透明的幽灵、野兽的皮毛与人类皮肤的对比、月光。",
        topology: "Weights: M3 (The Other) vs M4 (Nature/World). Logic: Love transcends biology and physics. The Shape of Water."
      },
      { 
        id: "enemies_to_lovers", 
        name: "欢喜冤家 (Enemies to Lovers)", 
        def: "从互相讨厌到相爱、吵架公鸡模式、傲慢与偏见。", 
        core: "叙事张力：表面的敌意 vs 潜意识的吸引。通过争吵来确认对方是唯一的对手/伴侣。 | 视觉参考：激烈的争吵特写、被困在狭小空间、眼神的突然软化、雨中的拥吻。",
        topology: "Weights: M4 (Conflict) transforms into M3 (Love). Logic: Passion and Hate are two sides of the same coin."
      },
      { 
        id: "taboo", 
        name: "禁忌之爱 (Taboo)", 
        def: "师生、乱伦边缘、不被社会接受的爱、背德感。", 
        core: "叙事张力：强烈的原始欲望 vs 严厉的社会道德（大他者）。在毁灭边缘试探的快感。 | 视觉参考：门缝视点、百叶窗阴影、偷情的紧张感、禁忌的符号（如教鞭/十字架）、私密空间。",
        topology: "Weights: M5 (Desire) vs M4 (Social Law). Logic: Transgression. The forbidden fruit is sweetest."
      },
      { 
        id: "period_romance", 
        name: "历史/古典爱情 (Period Romance)", 
        def: "古典礼仪、信物、宫廷或庄园背景、含蓄。", 
        core: "叙事张力：压抑的礼教 vs 汹涌的内心。爱意只能通过眼神和微小的动作传达。 | 视觉参考：扇子遮面、触碰指尖、舞会上的眼神交汇、精致的蕾丝与丝绸、书信、油画质感。",
        topology: "Weights: M4 (Etiquette) represses M3 (Passion). Logic: Pride and Prejudice. Restraint creates tension."
      },
      { 
        id: "queer", 
        name: "同志/LGBTQ+ (Queer Romance)", 
        def: "同性觉醒、社会压力、自我认同、彩虹电影。", 
        core: "叙事张力：真实的自我欲望 vs 异性恋霸权的压迫。自我发现与身份认同的旅程。 | 视觉参考：隐秘的眼神、更衣室/浴室场景、镜子、彩虹旗、边缘空间的聚会、细腻的肢体接触。",
        topology: "Weights: M1 (Identity) vs M4 (Norms). Logic: Coming out. Discovery of self through the Other."
      },
      { 
        id: "holiday", 
        name: "假日/邂逅 (Holiday / Encounter)", 
        def: "旅途中的短暂爱情、圣诞特供、异国情调。", 
        core: "叙事张力：有限的时间（假期） vs 无限的浪漫。注定结束的恋情，像梦一样美好。 | 视觉参考：异国街头、雪景、圣诞树、火炉、倒计时、车站的告别。",
        topology: "Weights: M4 (Time Limit) creates urgency for M3 (Love). Logic: Before Sunrise. A brief, perfect dream."
      },
      { 
        id: "triangle", 
        name: "三角/多角关系 (Love Triangle)", 
        def: "选择的困境、嫉妒、修罗场、红玫瑰与白玫瑰。", 
        core: "叙事张力：欲望的竞争性。我爱他，他爱她。嫉妒与占有欲的博弈。 | 视觉参考：三人同框的构图、视线的交错、镜子里的第三人、焦点的转移、修罗场。",
        topology: "Weights: M3 (Choice) is Impossible. Logic: Mimetic Desire. We want what others want. Jealousy drives the plot."
      },
      { 
        id: "soulmates", 
        name: "灵魂伴侣 (Soulmates)", 
        def: "精神契合、命中注定、超越肉体、柏拉图。", 
        core: "叙事张力：两个半圆终于拼成一个圆。超越言语的默契，一种宿命般的归属感。 | 视觉参考：并没有身体接触但感觉亲密的画面、同步的动作、温暖的光线、精神世界的具象化。",
        topology: "Weights: M1 and M3 are One. Logic: Spiritual Union. The search for the missing piece of the self."
      },
      { 
        id: "fake_dating", 
        name: "契约/假戏真做 (Fake Dating)", 
        def: "先婚后爱、为了利益假装情侣、偶像剧模式。", 
        core: "叙事张力：虚假的契约 vs 真实的情感滋生。谎言变成了真理，表演变成了现实。 | 视觉参考：合同文书、在公众面前的假笑、私下里的尴尬、意外的亲密瞬间。",
        topology: "Weights: M4 (The Lie) becomes M3 (True Love). Logic: Performance creates reality. Fake it until you make it."
      }
    ]
  },
  {
    id: "type_k",
    name: "艺术与先锋 (Art House & Avant-Garde)",
    desc: "打破常规叙事，强调导演个人风格与视听实验。",
    items: [
      { 
        id: "surrealism", 
        name: "超现实主义 (Surrealism)", 
        def: "梦境逻辑、潜意识、达利式意象、非理性。", 
        core: "叙事张力：梦境逻辑 vs 物理现实。潜意识的欲望直接具象化为视觉奇观，无因果律。 | 视觉参考：融化的钟表、长腿大象、眼球被切割、漂浮的人体、不可能的几何空间、达利式荒原。",
        topology: "Weights: M0 (Unconscious) overrides Physics. Logic: Dream Logic. No cause and effect. M3 (Desire) manifests directly as reality. Metaphor becomes literal."
      },
      { 
        id: "experimental", 
        name: "实验影像 (Experimental)", 
        def: "无叙事、胶片划痕、纯视觉、装置艺术、概念大于内容。", 
        core: "叙事张力：形式本身即内容。挑战观众的观看习惯，探索影像的边界。 | 视觉参考：胶片划痕与噪点、纯色块闪烁、重复的机械动作、无意义的符号堆砌、无声或噪音配乐。",
        topology: "Weights: M5 (Form/Texture) > M7 (Meaning). Logic: Pure sensation. Rejection of narrative structure."
      },
      { 
        id: "new_wave", 
        name: "新浪潮 (New Wave)", 
        def: "跳接、即兴表演、打破规则、自由风格、作者电影。", 
        core: "叙事张力：即兴的自由 vs 剧本的束缚。打破第四面墙，强调“这是在拍电影”。 | 视觉参考：跳接 (Jump Cut)、手持摄影、街头实景、演员直视镜头、随意的自然光、爵士乐。",
        topology: "Weights: M5 (Style/Attitude) > M7 (Plot). Logic: The Jump Cut. Rejection of traditional narrative. Focus on the moment, the mood, and the rebellion against structure."
      },
      { 
        id: "cult", 
        name: "邪典/CULT (Cult)", 
        def: "小众狂热、怪诞审美、B级片趣味、Camp风格。", 
        core: "叙事张力：糟糕的品味 vs 极致的狂欢。故意挑战主流审美，拥抱怪诞与恶趣味。 | 视觉参考：廉价的特效、夸张的妆容、异装癖、极其鲜艳的色彩、宗教般的狂热仪式。",
        topology: "Weights: M5 (Camp/Excess) > M1 (Logic). Logic: So bad it's good. Celebration of the weird and the fringe."
      },
      { 
        id: "minimalism", 
        name: "极简主义 (Minimalism)", 
        def: "少对白、固定长镜头、生活流、留白。", 
        core: "叙事张力：极少的动作 vs 丰富的情感潜流。此时无声胜有声，剥离一切多余修饰。 | 视觉参考：固定长镜头、空镜、极简的室内陈设、人物长时间的沉默、环境音。",
        topology: "Weights: M1 (Silence) > M5 (Action). Logic: Less is More. Focus on the microscopic shifts in emotion and time."
      },
      { 
        id: "stream", 
        name: "意识流 (Stream of Consciousness)", 
        def: "思维的具象化，时空破碎、梦与现实交织。", 
        core: "叙事张力：主观意识的流动 vs 客观时间的线性。过去、现在、未来在脑海中并置。 | 视觉参考：快速的联想剪辑、多重曝光、声音与画面的错位、梦呓般的旁白、水流意象。",
        topology: "Weights: M1 (Mind) is the World. Logic: Internal Monologue visualised. Time is fluid."
      },
      { 
        id: "dogme95", 
        name: "道格玛95 (Dogme 95)", 
        def: "手持、自然光、无配乐、追求极致真实、去人工化。", 
        core: "叙事张力：绝对的真实 vs 电影的虚构本质。拒绝一切技术修饰，迫使观众直面赤裸的表演。 | 视觉参考：低画质手持DV风、无后期配乐、现场收音、跳跃的剪辑、没有布光的自然环境。",
        topology: "Weights: M4 (Constraint) forces M1 (Truth). Logic: Vow of Chastity. No artificial props or lighting. Raw emotion."
      },
      { 
        id: "grindhouse", 
        name: "磨坊/剥削 (Grindhouse / Exploitation)", 
        def: "暴力、色情、胶片颗粒、低成本美学、复古垃圾片。", 
        core: "叙事张力：感官刺激的剥削 vs 道德底线的挑战。纯粹为了快感而存在的暴力与色情。 | 视觉参考：明显的胶片划痕与断片、褪色的复古色调、夸张的血浆、断肢、大字标题卡。",
        topology: "Weights: M5 (Sensation) > M1 (Character). Logic: Exploitation. Visceral thrills, shock value, and intentional roughness."
      },
      { 
        id: "poetic", 
        name: "诗意电影 (Poetic Cinema)", 
        def: "塔可夫斯基式，雕刻时光，精神性、自然元素。", 
        core: "叙事张力：时间的流逝本身就是主角。在凝视中寻找精神性的超越。 | 视觉参考：极慢的推拉镜头、水中的倒影、火、马、雾气、废墟中的自然、油画般的质感。",
        topology: "Weights: M4 (Time/Nature) > M1 (Ego). Logic: Sculpting in Time. Visual poetry over narrative prose. Spiritual contemplation."
      },
      { 
        id: "silent", 
        name: "默片/新默片 (Silent)", 
        def: "无声胜有声，肢体与配乐驱动、复古致敬。", 
        core: "叙事张力：纯视觉叙事。剥离语言后，肢体语言和表情成为唯一的信息载体。 | 视觉参考：黑白画面、字幕卡 (Intertitles)、夸张的默片式表演、圈入圈出转场、钢琴配乐。",
        topology: "Weights: M5 (Visuals) > M5 (Dialogue). Logic: Pure Cinema. Storytelling through movement and expression only."
      },
      { 
        id: "psychedelic", 
        name: "迷幻 (Psychedelic)", 
        def: "视觉致幻、色彩爆炸、感官过载、药物体验。", 
        core: "叙事张力：理性的丧失 vs 感官的狂欢。模拟药物致幻体验，进入万花筒般的世界。 | 视觉参考：高饱和度色彩流动、万花筒滤镜、频闪、分形几何图形、液态光影。",
        topology: "Weights: M0 (Altered State) dissolves M2 (Reality). Logic: Sensory Overload. Logic melts into colors and shapes."
      },
      { 
        id: "slow", 
        name: "慢电影 (Slow Cinema)", 
        def: "极慢节奏、长镜头凝视、冥想感、时间的重量。", 
        core: "叙事张力：对观众耐心的挑战 vs 沉浸式的体验。让观众感受到时间的物理重量。 | 视觉参考：长达数分钟的固定镜头、几乎静止的人物、自然界的风吹草动、极度写实的声场。",
        topology: "Weights: M4 (Duration) is the Protagonist. Logic: Boredom as a gateway to transcendence. Nothing happens, yet everything happens."
      }
    ]
  },
  {
    id: "type_l",
    name: "音乐与舞台 (Music & Performance)",
    desc: "以听觉节奏、舞台表演或音乐为核心驱动力的类型。",
    items: [
      { 
        id: "musical", 
        name: "百老汇/歌舞片 (Broadway / Musical)", 
        def: "唱跳叙事、华丽舞台、群舞、经典改编。", 
        core: "叙事张力：现实的压抑 vs 歌舞的释放。当语言无法表达情感时，角色开始唱歌。 | 视觉参考：整齐划一的群舞、聚光灯、舞台布景般的街道、鲜艳的色彩、突然响起的BGM。",
        topology: "Weights: M5 (Song/Dance) > M1 (Reality). Logic: The world is a stage. Emotions are externalized into spectacle."
      },
      { 
        id: "music_biopic", 
        name: "音乐传记 (Music Biopic)", 
        def: "传奇歌手生平、成名与堕落、演唱会重现。", 
        core: "叙事张力：凡人的脆弱 vs 舞台上的神性。成名带来的毁灭与孤独。 | 视觉参考：麦克风特写、后台的镜子、药物、闪光灯、演唱会现场的烟雾与激光、传记式蒙太奇。",
        topology: "Weights: M1 (The Star) vs M4 (Fame/Addiction). Logic: The price of genius. Rise, fall, and redemption."
      },
      { 
        id: "dance", 
        name: "舞蹈电影 (Dance)", 
        def: "街舞、芭蕾、肢体表达、斗舞竞技。", 
        core: "叙事张力：肉体的极限 vs 灵魂的自由。通过舞蹈动作来完成对话和战斗。 | 视觉参考：肌肉线条、慢动作跳跃、旋转的镜头、脚部特写、汗水、舞池的灯光。",
        topology: "Weights: M5 (Movement) is Language. Logic: The body speaks. Conflict is resolved through dance."
      },
      { 
        id: "animated_musical", 
        name: "迪士尼/动画歌舞 (Animated Musical)", 
        def: "公主电影、主题曲驱动、合家欢。", 
        core: "叙事张力：纯真的愿望 vs 魔法的阻碍。通过歌曲表达“我想要 (I Want Song)”。 | 视觉参考：会唱歌的动物、魔法粒子、夸张的表情、色彩斑斓的世界、完美的对口型。",
        topology: "Weights: M3 (Wish) > M4 (Villain). Logic: The 'I Want' song drives the plot. Magic and music solve problems."
      },
      { 
        id: "concert", 
        name: "演唱会电影 (Concert Film)", 
        def: "纯粹的舞台记录、现场感、粉丝向。", 
        core: "叙事张力：偶像与粉丝的能量交换。纯粹的现场氛围记录，去叙事化。 | 视觉参考：多机位舞台拍摄、观众席的荧光棒海洋、巨大的LED屏幕、乐器特写、现场收音。",
        topology: "Weights: M5 (Performance) is Absolute. Logic: Documentation of energy. The connection between artist and crowd."
      },
      { 
        id: "opera", 
        name: "古典/歌剧 (Opera / Classical)", 
        def: "严肃音乐、宏大叙事、高雅艺术、悲剧色彩。", 
        core: "叙事张力：极端的情感（爱/死） vs 极致的形式美。宏大的悲剧宿命感。 | 视觉参考：巴洛克式舞台、厚重的戏服、面具、聚光灯下的独唱、宏大的合唱团阵列。",
        topology: "Weights: M1 (Passion) > M6 (Death). Logic: Grand Tragedy. Emotions are operatic and larger than life."
      },
      { 
        id: "hiphop", 
        name: "嘻哈/街头 (Hip Hop / Street)", 
        def: "说唱文化、地下斗争、真实街头、节奏感。", 
        core: "叙事张力：街头的残酷 vs 麦克风前的尊严。用韵脚作为武器进行战斗。 | 视觉参考：涂鸦墙、低底盘车、金链子、连帽衫、手持摄影的粗砺感、鱼眼镜头。",
        topology: "Weights: M1 (Respect) vs M4 (The Streets). Logic: Verbal combat. Authenticity is the currency."
      },
      { 
        id: "rock", 
        name: "摇滚/金属 (Rock / Metal)", 
        def: "叛逆、乐队生活、公路巡演、躁动。", 
        core: "叙事张力：对体制的愤怒 vs 自我毁灭的倾向。性、毒品与摇滚乐。 | 视觉参考：砸碎的吉他、长发、皮衣、烟雾缭绕的Livehouse、巡演大巴、失真音效。",
        topology: "Weights: M5 (Rebellion) vs M4 (The System). Logic: Turn it up to 11. Chaos, noise, and energy."
      },
      { 
        id: "bollywood", 
        name: "宝莱坞 (Bollywood)", 
        def: "印度歌舞、色彩斑斓、超长篇幅、悲喜交加。", 
        core: "叙事张力：极度的通俗娱乐。爱情、动作、喜剧、悲剧的无缝（生硬）切换。 | 视觉参考：数百人的群舞、鲜艳的纱丽、风吹起的长发、慢动作回眸、壮丽的宫殿或自然风光。",
        topology: "Weights: M5 (Spectacle) > M7 (Logic). Logic: Masala. A mix of everything. Emotion over realism."
      },
      { 
        id: "mv_style", 
        name: "MV风格/视觉专辑 (Music Video Style)", 
        def: "碎片化、强视觉、音乐驱动画面、概念片。", 
        core: "叙事张力：视觉服务于听觉节奏。非线性的概念展示，强调氛围而非逻辑。 | 视觉参考：快节奏剪辑、意识流画面、对口型表演、强烈的色彩滤镜、符号化意象。",
        topology: "Weights: M5 (Visuals) match M0 (BPM). Logic: Concept over plot. Style is substance."
      },
      { 
        id: "backstage", 
        name: "后台/演艺圈 (Backstage Drama)", 
        def: "舞台背后的勾心斗角、成名的代价、台上一分钟。", 
        core: "叙事张力：台前的光鲜 vs 台后的肮脏。表演者的人格分裂。 | 视觉参考：化妆镜灯、狭窄的走廊、杂乱的道具间、从幕布后偷窥舞台的视角。",
        topology: "Weights: M1 (The Person) vs M1 (The Persona). Logic: The Mask. The difference between who they are and who they play."
      },
      { 
        id: "audiovisual", 
        name: "实验声画 (Audio-Visual Experimental)", 
        def: "纯音乐与抽象画面的结合、通感体验。", 
        core: "叙事张力：联觉 (Synesthesia)。声音直接转化为视觉，视觉直接转化为情绪。 | 视觉参考：示波器图形、分形动画、随音乐律动的光影、抽象几何体、无具象人物。",
        topology: "Weights: M0 (Sound) creates M2 (Image). Logic: Synesthesia. Seeing sound, hearing color."
      }
    ]
  }
];
