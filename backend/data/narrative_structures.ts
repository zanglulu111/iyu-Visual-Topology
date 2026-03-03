

export interface NarrativeStructureItem {
  id: string;
  name: string;
  enName: string;
  family: string;
  description: string;
  lacanian: string;
  masterpiece: string;
}

export const NARRATIVE_STRUCTURES: NarrativeStructureItem[] = [
  // === FAMILY 0: 好莱坞经典 (HOLLYWOOD FORMULA) ===
  {
    id: 'HERO_JOURNEY',
    name: '英雄之旅',
    enName: "The Hero's Journey",
    family: '好莱坞 (Hollywood)',
    description: '【坎贝尔单神话】12步经典模型：1.平凡世界 2.冒险召唤 3.拒绝召唤 4.遇上导师 5.跨越门槛 6.试炼盟友敌人 7.接近洞穴 8.严峻考验 9.奖赏 10.归路 11.复活 12.满载而归。',
    lacanian: '【主体的重构】主体离开想象界（舒适区），进入象征界遭遇阉割（磨难），最终带着剩余享乐（万能药）归来，完成主体的缝合。',
    masterpiece: '《星球大战》 / 《黑客帝国》 / 《狮子王》'
  },
  {
    id: 'SAVE_THE_CAT',
    name: '救猫咪节拍',
    enName: "Save the Cat (15 Beats)",
    family: '好莱坞 (Hollywood)',
    description: '【工业标准】15个精确节拍：开场画面、主题呈现、铺垫、催化剂、争执、第二幕、副线、游戏时间、中点、坏蛋逼近、一无所有、灵魂黑夜、第三幕、结局、终场画面。',
    lacanian: '【欲望的节律】通过精确控制焦虑与满足的节奏（Pacing），让观众的欲望与大他者（剧本结构）完美同步。',
    masterpiece: '《疯狂动物城》 / 漫威电影宇宙'
  },
  {
    id: 'STORY_CIRCLE',
    name: '哈蒙故事环',
    enName: "Harmon's Story Circle",
    family: '好莱坞 (Hollywood)',
    description: '【8步循环】1.角色在舒适区 2.但是他们想要什么 3.他们进入不熟悉的领域 4.适应它 5.得到想要的 6.付出沉重代价 7.回归舒适区 8.发生改变。',
    lacanian: '【欲望的代价】主体为了填补匮乏(Want)进入异界，虽然得到了对象a，但必须支付“代价”（丧失一部分自我），最终带着症状回归。',
    masterpiece: '《瑞克和莫蒂》 / 《社区》'
  },
  {
    id: 'THREE_ACT',
    name: '经典三幕剧',
    enName: "Three-Act Paradigm",
    family: '好莱坞 (Hollywood)',
    description: '【菲尔德范式】建置(1/4) -> 对抗(2/4) -> 结局(1/4)。依靠两个强有力的“情节点”(Plot Points) 驱动幕间转换，中间不仅是“对抗”更是“挤压”。',
    lacanian: '【俄狄浦斯结构】第一幕：父法确立；第二幕：弑父/对抗；第三幕：认同/和解。象征秩序的稳固-动摇-重构。',
    masterpiece: '《教父》 / 《泰坦尼克号》'
  },
  {
    id: 'SEQUENCE_8',
    name: '八序列法',
    enName: "The Sequence Approach",
    family: '好莱坞 (Hollywood)',
    description: '【长片切分】将电影划分为8个10-15分钟的独立短片（Reels）。每个序列都有独立的悬念（Hook）、张力（Tension）和高潮（Climax）。',
    lacanian: '【能指链的切分】为了防止欲望在长叙事中滑落，必须设置连续的“纽扣点”（Points de Capiton）来固定意义。',
    masterpiece: '《夺宝奇兵》 / 希区柯克电影'
  },
  {
    id: 'TRUBY_22',
    name: '特鲁比22步',
    enName: "Truby's 22 Steps",
    family: '好莱坞 (Hollywood)',
    description: '【有机叙事】以“道德前提”为核心。从“弱点/需求”出发，经历“假盟友”、“对手”、“启示”，最终达成“新的平衡”。比三幕剧更注重人物内部逻辑。',
    lacanian: '【伦理的辩证法】故事是关于“真理”的争夺。主角必须面对自己的“根本性谎言”（The Lie），并在实在界的冲击下通过“真实”重塑自我。',
    masterpiece: '《教父》 / 《卡萨布兰卡》'
  },
  {
    id: 'VIRGIN_PROMISE',
    name: '处女承诺/内省之旅',
    enName: "The Virgin's Promise",
    family: '好莱坞 (Hollywood)',
    description: '【女性/内向弧光】与英雄之旅对应。1.依赖的世界 2.秘密的代价 3.闪耀 4.被捕获 5.混乱 6.流浪 7.最终选择。关注自我实现、觉醒与反抗家庭/社会束缚。',
    lacanian: '【女性享乐 (Feminine Jouissance)】不是去占有菲勒斯（权杖/宝剑），而是成为自己。从“被看”的客体转变为“存在”的主体。',
    masterpiece: '《冰雪奇缘》 / 《黑天鹅》 / 《芭比》'
  },

  // === FAMILY 1: 时间的扭曲 (TEMPORAL MANIPULATIONS) ===
  {
    id: 'LINEAR',
    name: '经典线性',
    enName: 'Classic Linear',
    family: '时间 (Time)',
    description: '【因果链】严格按照时间顺序：M1(日常) -> M2(遭遇) -> M3(目标) -> M4(阻碍) -> M5(行动) -> M6(代价) -> M7(结局)。',
    lacanian: '【象征秩序的胜利】强调因果律。每一个动作（Action）必须导致下一个反应（Reaction）。构建一个连贯的主体神话。',
    masterpiece: '《肖申克的救赎》 / 《阿甘正传》'
  },
  {
    id: 'IN_MEDIA_RES',
    name: '开场即高潮',
    enName: 'In Media Res',
    family: '时间 (Time)',
    description: '【悬崖开场】故事必须从 M6 (终极代价/高潮) 的悬崖边开始。先展示毁灭，再闪回解释原因。',
    lacanian: '【实在界的入侵】跳过前戏，让观众直接面对创伤的核心。强调紧迫感和不可逆性。',
    masterpiece: '《绝命毒师》S1E1 / 《碟中谍》'
  },
  {
    id: 'REVERSE',
    name: '逆向回溯',
    enName: 'Reverse Chronology',
    family: '时间 (Time)',
    description: '【果在因前】从 M7 (结局) 开始写，逐场倒推，最后结束于 M2 (最初的遭遇)。',
    lacanian: '【精神分析的过程】当前的“症状”（结局）是已知的，我们回溯是为了寻找被压抑的原始“创伤”能指。',
    masterpiece: '《记忆碎片》(Memento) / 《不可撤销》'
  },
  {
    id: 'REAL_TIME',
    name: '实时/一镜到底',
    enName: 'Real Time',
    family: '时间 (Time)',
    description: '【零省略】文本时间 = 故事时间。无省略，无跳跃。详细描写每一秒的物理动作和环境噪音。',
    lacanian: '【凝视的在场】迫使观众与主体一同承受每一秒的焦虑。消除“剪辑”带来的安全感。',
    masterpiece: '《1917》 / 《正午》'
  },
  {
    id: 'TIME_DILATION',
    name: '时间膨胀',
    enName: 'Time Dilation',
    family: '时间 (Time)',
    description: '【微观史诗】将极短的一瞬间（如车祸发生的3秒，或一次对视）无限拉长，在这一瞬间内插入一生的回忆。',
    lacanian: '【闪回的永恒】在实在界爆发的那一毫秒，象征界的时间停止了。潜意识涌出填满瞬间。',
    masterpiece: '《走马灯株式会社》 / 《黑客帝国》子弹时间'
  },
  {
    id: 'SNOWBALL',
    name: '雪球/升级',
    enName: 'The Escalation',
    family: '时间 (Time)',
    description: '【失控】一个微小的 M2 (起因) 引发一系列连锁反应。节奏越来越快，赌注越来越大，直至荒谬的毁灭 (M7)。',
    lacanian: '【驱力的失控】冲动突破了快乐原则的限制，滑向死亡驱力的狂欢。熵增的过程不可逆转。',
    masterpiece: '《荒蛮故事》 / 《疯狂的石头》'
  },
  {
    id: 'COUNTDOWN',
    name: '实时倒数',
    enName: 'The Countdown',
    family: '时间 (Time)',
    description: '【绝对时限】一个明确的死亡时限 (M6) 悬在头顶。故事的每一秒都在逼近终点。强调时间的物理流逝感与焦虑。',
    lacanian: '【向死而生】死亡不再是抽象概念，而是精确的数学倒数。焦虑（Anxiety）成为驱动一切行动的燃料。',
    masterpiece: '《罗拉快跑》 / 《24小时》'
  },
  {
    id: 'MONTAGE',
    name: '蒙太奇/一生',
    enName: 'The Montage',
    family: '时间 (Time)',
    description: '【时间压缩】极少对白，由音乐驱动。快速掠过漫长的时间跨度（如一生），展现命运的变迁与情感的积累。',
    lacanian: '【能指的滑行】通过影像的并置产生新的意义。强调生命的稍纵即逝与情感结构的永恒性。',
    masterpiece: '《飞屋环游记》(开头) / 《爱乐之城》(结尾)'
  },

  // === FAMILY 2: 闭环与重复 (CIRCULAR & REPETITION) ===
  {
    id: 'LOOP',
    name: '宿命轮回',
    enName: 'The Loop',
    family: '闭环 (Circle)',
    description: '【首尾相连】结局 M7 必须揭示它就是开头的 M1。主角回到了原点，或者发现自己被困在时间里。',
    lacanian: '【驱力的死循环】主体围绕客体打转，看似运动，实则静止。强调“强迫性重复”。',
    masterpiece: '《土拨鼠之日》 / 《恐怖游轮》'
  },
  {
    id: 'SPIRAL',
    name: '螺旋下坠',
    enName: 'The Downward Spiral',
    family: '闭环 (Circle)',
    description: '【恶性循环】重复相似的情节单元，但每一次重复，M6 (代价) 都更惨重，直至毁灭。',
    lacanian: '【死亡驱力的加速度】一种自我毁灭的狂欢与过剩 (Surplus Jouissance)。从坏，到更坏。',
    masterpiece: '《梦之安魂曲》 / 《被嫌弃的松子的一生》'
  },
  {
    id: 'PARALLEL_LIVES',
    name: '滑动门/平行线',
    enName: 'Sliding Doors',
    family: '闭环 (Circle)',
    description: '【二元分裂】基于 M2 的一个微小选择，分裂出两条完全不同的时间线，交叉叙述。',
    lacanian: '【存在的匮乏】无论选哪条路，主体都是残缺的。展示“未被选择的人生”的幽灵。',
    masterpiece: '《滑动门》 / 《罗拉快跑》'
  },

  // === FAMILY 3: 视角与真相 (PERSPECTIVE & TRUTH) ===
  {
    id: 'RASHOMON',
    name: '罗生门',
    enName: 'Rashomon',
    family: '真相 (Truth)',
    description: '【主观真实】叙述同一个 M2 (遭遇) 事件三次。分别从 M1 (主角)、M4 (反派) 和旁观者的视角，且细节矛盾。',
    lacanian: '【真理的非全 (Not-All)】每个人都只能看到大他者的一部分。没有上帝视角，只有破碎的主观真实。',
    masterpiece: '《罗生门》 / 《最后的决斗》'
  },
  {
    id: 'FRAME',
    name: '套层/戏中戏',
    enName: 'Frame Narrative',
    family: '真相 (Truth)',
    description: '【故事的嵌套】故事开始于某人“讲故事”。核心的 M1-M7 故事是被包裹在另一个叙事框架里的。',
    lacanian: '【幻想的框架】通过“讲故事”构建防御机制。核心的创伤被包裹在最里面，以此保持安全距离。',
    masterpiece: '《布达佩斯大饭店》 / 《一千零一夜》'
  },
  {
    id: 'META',
    name: '元叙事/打破第四墙',
    enName: 'Meta-Narrative',
    family: '真相 (Truth)',
    description: '【自我指涉】角色意识到自己身处“故事”之中。M1 直接对话观众，或者试图修改剧本。',
    lacanian: '【穿越幻想】主体看穿了“大他者”（剧本/导演）的虚构性，并试图篡改能指链。',
    masterpiece: '《楚门的世界》 / 《死侍》'
  },
  {
    id: 'UNRELIABLE',
    name: '不可靠叙述',
    enName: 'Unreliable Narrator',
    family: '真相 (Truth)',
    description: '【认知的欺骗】M1 在撒谎，或者 M1 疯了。结局 M7 揭示之前的所有叙述都是主观臆造的幻觉。',
    lacanian: '【精神病的结构】排除了父法（现实原则）。整个故事是主体构建的妄想世界。',
    masterpiece: '《搏击俱乐部》 / 《少年派的奇幻漂流》'
  },
  {
    id: 'O_HENRY',
    name: '欧亨利式反转',
    enName: 'The O. Henry Twist',
    family: '真相 (Truth)',
    description: '【结局重构】M1-M6 都在进行误导。结局 M7 揭示一个关键信息，彻底推翻之前的假设，产生“情理之中，意料之外”的震撼。',
    lacanian: '【回溯性建构】结局的能指（Master Signifier）修改了整个能指链的意义。真理在最后时刻才降临，重新定义了主体的欲望。',
    masterpiece: '《麦琪的礼物》 / 《第六感》 / 短片《调音师》'
  },
  {
    id: 'MOCKUMENTARY',
    name: '伪纪录/访谈',
    enName: 'Mockumentary',
    family: '真相 (Truth)',
    description: '【第四面墙】角色直视镜头说话，或通过“采访”与“实况”的蒙太奇来制造反差。打破虚构的边界。',
    lacanian: '【言说的分裂】主体在镜头前构建“理想自我”(Ideal Ego)，而镜头捕捉到了背后的“滑稽/症状”。',
    masterpiece: '《办公室》(The Office) / 《吸血鬼生活》 / 《第九区》'
  },
  {
    id: 'OBJECT_POV',
    name: '物之视角',
    enName: 'Object Perspective',
    family: '视角 (Perspective)',
    description: '【非人称】摄影机绑定在一个物体（如一枚硬币、一把枪）上。通过“物”的流转来串联不同人物的命运片段。',
    lacanian: '【对象的凝视】物不再是被动的客体，物在“看”人。展示人类在欲望对象面前的异化与贪婪。',
    masterpiece: '《战争之王》(子弹视角) / 《橡皮轮胎杀手》'
  },

  // === FAMILY 4: 空间与拓扑 (SPATIAL & TOPOLOGY) ===
  {
    id: 'RHIZOME',
    name: '根茎/网状',
    enName: 'Rhizomatic',
    family: '空间 (Spatial)',
    description: '【去中心化】没有明确的开头和结尾。故事是多个节点（人物/地点）之间的随机连接，像互联网一样。任意两点皆可相连。',
    lacanian: '【精神分裂的流变】能指链断裂。没有“主人能指”来固定意义，只有无限的滑动和连接。',
    masterpiece: '《云图》 / 《通天塔》 / 德勒兹哲学'
  },
  {
    id: 'DATABASE',
    name: '数据库/列表',
    enName: 'Database Narrative',
    family: '空间 (Spatial)',
    description: '【非叙事】故事不是线性发展的，而是像百科全书或游戏属性面板一样呈现。通过罗列“物品”、“设定”或“状态”来构建世界。',
    lacanian: '【大他者的档案】剥离了主体的欲望，只展示象征界的库存。世界是碎片的集合。',
    masterpiece: '《法兰西特派》 / 游戏《艾尔登法环》的碎片叙事'
  },
  {
    id: 'FRACTAL',
    name: '分形/俄罗斯套娃',
    enName: 'Fractal Structure',
    family: '空间 (Spatial)',
    description: '【自相似性】微观的 M1-M7 结构在宏观层面重复。个人的命运与宇宙的命运是同构的。',
    lacanian: '【拓扑同构】无意识是像语言一样被结构的。微观的口误包含着宏观的命运。',
    masterpiece: '《盗梦空间》 / 《锡尔斯玛利亚的云》'
  },
  {
    id: 'POLYPHONIC',
    name: '复调/赋格',
    enName: 'Polyphonic / Fugue',
    family: '空间 (Spatial)',
    description: '【多声部对位】不是多线叙事，而是“对位法”。几个声音同时说话，互不干扰但形成和声或不协和音。',
    lacanian: '【分裂的主体】主体内部嘈杂的声音外化为不同的角色。没有统一的自我。',
    masterpiece: '陀思妥耶夫斯基小说 / 《纳什维尔》'
  },
  {
    id: 'CHAMBER',
    name: '密室/高压锅',
    enName: 'The Chamber',
    family: '空间 (Spatial)',
    description: '【幽闭】故事发生在一个封闭空间（电梯/车内）。通过物理空间的挤压来迫使 M1 与 M4 (阻碍) 发生高强度的化学反应。',
    lacanian: '【被迫的主体间性】他人即地狱。在没有逃生出口的情况下，社会面具被迫脱落，露出实在界的丑陋与真实。',
    masterpiece: '《十二怒汉》 / 《活埋》 / 《电锯惊魂》'
  },

  // === FAMILY 5: 虚无与反结构 (VOID & ANTI-STRUCTURE) ===
  {
    id: 'STATIC',
    name: '静态/等待',
    enName: 'Static / Waiting',
    family: '虚无 (Void)',
    description: '【零动作】只有时间在流逝，什么都没有发生。主角在等待一个永远不会来的 M2 (遭遇)。强调无聊和空虚。',
    lacanian: '【欲望的延宕】等待戈多。主体停滞在“想要欲望”的状态，拒绝获得满足。',
    masterpiece: '《等待戈多》 / 《都灵之马》'
  },
  {
    id: 'ONEIROLOGIC',
    name: '梦逻辑/联想',
    enName: 'Oneirologic / Dream',
    family: '虚无 (Void)',
    description: '【反因果】场景A转换到场景B不是因为逻辑，而是因为视觉相似性或自由联想。像做梦一样流动。',
    lacanian: '【无意识的语法】隐喻（Metaphor）与换喻（Metonymy）的直接运作。实在界的直接涌现。',
    masterpiece: '《穆赫兰道》 / 《8½》'
  },
  {
    id: 'ALLEGORY',
    name: '高概念寓言',
    enName: 'The Allegory',
    family: '虚无 (Void)',
    description: '【抽象化】人物没有名字，代表某种概念（如“贪婪”、“阶级”）。环境是心理的外化（如垂直的监狱、无尽的洞穴）。',
    lacanian: '【纯粹的符号剧】剥离了现实主义的血肉，只剩下精神结构的骨架。实在界的直接展演。',
    masterpiece: '《饥饿站台》 / 《第七封印》 / 动画《短缺》'
  },

  // === FAMILY 6: 东方与留白 (EASTERN & ZEN) ===
  {
    id: 'KISHOTENKETSU',
    name: '起承转合',
    enName: 'Kishotenketsu',
    family: '东方 (Eastern)',
    description: '【无冲突】起(M1) -> 承(深化) -> 转(意外但无直接对抗) -> 合(M7)。避免西方戏剧的直接冲突 (Conflict)。',
    lacanian: '【意境与留白】侧重于“状态”的流变，而非“欲望”的满足与冲突。去中心化。',
    masterpiece: '《龙猫》 / 村上春树'
  },
  {
    id: 'SLICE_OF_LIFE',
    name: '生活流/散点',
    enName: 'Slice of Life',
    family: '东方 (Eastern)',
    description: '【去戏剧化】弱化 M3 (目标) 和 M4 (阻碍)。聚焦于 M1 (日常状态) 的微小波动。没有明确的开始和结束。',
    lacanian: '【存在的无意义性】剥离戏剧化的幻想，直面生活的平庸与真实 (The Real)。',
    masterpiece: '《步履不停》 / 《一一》'
  },
  {
    id: 'SHANSHUI',
    name: '散点透视/游观',
    enName: 'Shanshui / Wandering',
    family: '东方 (Eastern)',
    description: '【移步换景】没有固定的焦点主角。视点随着环境流动，像展开一幅长卷轴画。关注环境大于人物。',
    lacanian: '【主体的消融】主体不再是世界的中心，而是风景的一部分。天人合一。',
    masterpiece: '《清明上河图》式叙事 / 《路边野餐》'
  },
  {
    id: 'KOAN',
    name: '公案/顿悟',
    enName: 'Koan / Epiphany',
    family: '东方 (Eastern)',
    description: '【非理性跳跃】看似无关的对话或棒喝，突然导致 M7 (觉醒)。不讲逻辑，讲悟性。',
    lacanian: '【打断能指链】通过无意义的语言（禅机）切断符号系统的运作，瞬间触碰实在界。',
    masterpiece: '禅宗公案 / 《春去春又来》'
  },

  // === FAMILY 7: 短片 (SHORT FILM) - NEW ADDITION ===
  {
    id: 'SHORT_SETUP_PAYOFF',
    name: '铺垫-反转 (The Joke)',
    enName: 'The Setup-Payoff',
    family: '短片 (Short)',
    description: '【段子结构】前80%是正常的铺垫 (Setup)，最后20%是一个推翻前提的包袱 (Punchline)。',
    lacanian: '【能指的滑落】结尾的能指 (S2) 重新定义了开头能指 (S1) 的意义，产生回溯性效果。',
    masterpiece: '《黑洞》 (The Black Hole)'
  },
  {
    id: 'SHORT_LOOP',
    name: '莫比乌斯环 (The Loop)',
    enName: 'The Loop',
    family: '短片 (Short)',
    description: '【首尾相连】影片结束的画面正是影片开始的画面。主角被困在时间或逻辑的死循环中。',
    lacanian: '【强迫性重复】主体围绕着创伤核心不断打转，无法穿越幻想。',
    masterpiece: '《两辆车一夜》 (Two Cars, One Night)'
  },
  {
    id: 'SHORT_ESCALATION',
    name: '熵增雪球 (The Escalation)',
    enName: 'The Escalation',
    family: '短片 (Short)',
    description: '【失控】一个小谎言或小错误，迅速演变成无法收拾的巨大灾难。节奏极快。',
    lacanian: '【冲动的释放】压抑被移除后，死亡驱力 (Thanatos) 的加速运动。',
    masterpiece: '《母亲》 (Mother!)'
  },
  {
    id: 'SHORT_INVERSION',
    name: '身份置换 (The Inversion)',
    enName: 'The Inversion',
    family: '短片 (Short)',
    description: '【角色互换】猎人变成猎物，受害者变成施暴者。通过视角的反转揭示真相。',
    lacanian: '【镜像阶段】通过占据“他者”的位置，主体看到了自己的真实面目。',
    masterpiece: '《午餐》 (Lunch Date)'
  },
  {
    id: 'SHORT_DISCOVERY',
    name: '发现异物 (The Discovery)',
    enName: 'The Discovery',
    family: '短片 (Short)',
    description: '【单一事件】主角在平凡环境中发现了一个不该存在的东西（尸体/外星人/黑洞）。',
    lacanian: '【实在界入侵】符号秩序（日常）被一个无法解释的客体（对象a）刺破。',
    masterpiece: '《调音师》 (The Piano Tuner)'
  },
  {
    id: 'SHORT_SLICE',
    name: '生活切片 (The Vignette)',
    enName: 'The Slice of Life',
    family: '短片 (Short)',
    description: '【无头无尾】截取生活中的一段对话或状态。没有强烈的戏剧冲突，只有氛围。',
    lacanian: '【存在的在场】拒绝意义的缝合，仅仅展示“存在”本身的质感。',
    masterpiece: '《雪国列车前传》'
  },
  {
    id: 'SHORT_MEETING',
    name: '遭遇战 (The Meeting)',
    enName: 'The Meeting',
    family: '短片 (Short)',
    description: '【双人博弈】两个陌生人在特定空间（电梯/车站）相遇，通过对话改变彼此。',
    lacanian: '【主体间性】通过与“大他者”的对视，确立或瓦解自我认同。',
    masterpiece: '《信号》 (Signs)'
  },
  {
    id: 'SHORT_GOODBYE',
    name: '漫长的告别 (The Goodbye)',
    enName: 'The Goodbye',
    family: '短片 (Short)',
    description: '【分离时刻】聚焦于两个人分开前的最后几分钟。充满潜台词和未尽之言。',
    lacanian: '【阉割与丧失】面对即将到来的“缺失”，主体试图用语言进行最后的缝合。',
    masterpiece: '《父与女》 (Father and Daughter)'
  },
  {
    id: 'SHORT_CHASE',
    name: '猫鼠游戏 (The Chase)',
    enName: 'The Chase',
    family: '短片 (Short)',
    description: '【纯动能】A追B。几乎没有对白，完全靠动作和剪辑驱动叙事。',
    lacanian: '【驱动力】主体对客体（对象a）的无休止追逐，或逃离超我的惩罚。',
    masterpiece: '《便衣》 (The French Connection Chase)'
  },
  {
    id: 'SHORT_TRAP',
    name: '瓮中之鳖 (The Trap)',
    enName: 'The Trap',
    family: '短片 (Short)',
    description: '【幽闭空间】主角被困在一个地方（陷阱/房间/身体），必须想办法逃脱。',
    lacanian: '【无路可逃】主体直面实在界的压迫，符号系统的失效。',
    masterpiece: '《127小时》 (短片版)'
  },
  {
    id: 'SHORT_KULESHOV',
    name: '库里肖夫 (The Kuleshov)',
    enName: 'The Kuleshov Effect',
    family: '短片 (Short)',
    description: '【联想蒙太奇】通过画面的并置产生意义。A画面 + B画面 = C概念。',
    lacanian: '【隐喻的运作】意义不在画面本身，而在于能指之间的滑动和碰撞。',
    masterpiece: '《堤》 (La Jetée)'
  },
  {
    id: 'SHORT_MACGUFFIN',
    name: '麦高芬追逐 (The MacGuffin)',
    enName: 'The MacGuffin',
    family: '短片 (Short)',
    description: '【物品驱动】所有人都在抢一个包/信/箱子。箱子里是什么不重要。',
    lacanian: '【欲望的对象a】那个东西本身是空的，但它驱动了整个欲望机器的运转。',
    masterpiece: '《雇佣人生》 (El Empleo)'
  },
  {
    id: 'SHORT_CONCEPT',
    name: '高概念设定 (High Concept)',
    enName: 'The Concept',
    family: '短片 (Short)',
    description: '【假如...】改变世界的一条物理规则（如：重力反转/人无法撒谎）。',
    lacanian: '【改变符号坐标】重写大他者的律法，观察主体如何适应新的精神病结构。',
    masterpiece: '《谎言的诞生》'
  },
  {
    id: 'SHORT_SILENT',
    name: '默片复兴 (The Silent)',
    enName: 'The Silent Narrative',
    family: '短片 (Short)',
    description: '【纯视觉】完全没有对白。依靠肢体语言、音效和构图讲故事。',
    lacanian: '【前语言状态】回归到镜像阶段之前的直接感知，绕过符号界的审查。',
    masterpiece: '《纸人》 (Paperman)'
  },
  {
    id: 'SHORT_MONOLOGUE',
    name: '内心独白 (The Monologue)',
    enName: 'The Monologue',
    family: '短片 (Short)',
    description: '【意识流】画面是状态，声音是角色的内心自白。主观性极强。',
    lacanian: '【能指链的独舞】主体在语言中构建自我，试图向大他者解释自己的存在。',
    masterpiece: '《出租车司机》 (镜子独白)'
  },
  {
    id: 'SHORT_INTERVIEW',
    name: '伪访谈 (The Interview)',
    enName: 'The Interview',
    family: '短片 (Short)',
    description: '【打破第四墙】角色面对镜头说话。纪录片风格。真实与虚构的模糊。',
    lacanian: '【向大他者供述】主体试图通过“坦白”来获得大他者的认可或赦免。',
    masterpiece: '《生物》 (Creature Comforts)'
  },
  {
    id: 'SHORT_TIME_COMP',
    name: '时间压缩 (Time Compression)',
    enName: 'The Montage',
    family: '短片 (Short)',
    description: '【一生一瞬】在几分钟内展示一个人的一生或一段关系的兴衰。',
    lacanian: '【生命的速朽】强调时间的熵增属性，主体在时间洪流中的无力感。',
    masterpiece: '《飞屋环游记》 (前10分钟)'
  },
  {
    id: 'SHORT_PARALLEL',
    name: '平行剪辑 (The Parallel)',
    enName: 'Parallel Editing',
    family: '短片 (Short)',
    description: '【双线叙事】同时展示两个不同时空或人物的行动，最终汇聚。',
    lacanian: '【共时性】不同的主体在同一符号网络中被编织，命运的交叉点。',
    masterpiece: '《权力的游戏》 (片头)'
  },
  {
    id: 'SHORT_CIRCULAR',
    name: '首尾呼应 (The Circular)',
    enName: 'The Circular',
    family: '短片 (Short)',
    description: '【结构闭环】结尾的台词或动作与开头完全一致，但意义已变。',
    lacanian: '【差异与重复】同样的能指在经历了一圈后，获得了新的所指（Sinthome）。',
    masterpiece: '《降临》'
  },
  {
    id: 'SHORT_ABSURD',
    name: '卡夫卡式 (The Absurdist)',
    enName: 'The Absurdist',
    family: '短片 (Short)',
    description: '【荒谬逻辑】世界运行规则毫无逻辑，但角色严肃对待。黑色幽默。',
    lacanian: '【大他者的疯癫】揭示社会规则本身的无意义和精神病特质。',
    masterpiece: '《锡鼓》 (部分片段)'
  },
  {
    id: 'SHORT_JUMP_SCARE',
    name: '恐怖刺点 (The Sting)',
    enName: 'The Horror Sting',
    family: '短片 (Short)',
    description: '【惊悚构建】长时间的静默与压抑，铺垫最后的一秒惊吓。',
    lacanian: '【实在界的突袭】焦虑是面对“对象a”时的反应，惊吓是幻象破裂的瞬间。',
    masterpiece: '《关灯后》 (Lights Out)'
  },
  {
    id: 'SHORT_MEET_CUTE',
    name: '浪漫邂逅 (The Meet Cute)',
    enName: 'The Meet Cute',
    family: '短片 (Short)',
    description: '【相遇瞬间】两个人如何相遇。充满巧合、尴尬与火花。',
    lacanian: '【幻想的投射】在对方身上看到了“理想自我”或“对象a”的幻影。',
    masterpiece: '《爱在黎明破晓前》'
  },
  {
    id: 'SHORT_FALLOUT',
    name: '灾难之后 (The Fallout)',
    enName: 'The Fallout',
    family: '短片 (Short)',
    description: '【余波】不展示灾难本身，只展示灾难发生后的废墟和人的反应。',
    lacanian: '【创伤的延迟】事件已经发生，主体在废墟中试图重建符号秩序。',
    masterpiece: '《下一层》 (Next Floor)'
  },
  {
    id: 'SHORT_JOURNEY',
    name: '公路微缩 (The Journey)',
    enName: 'The Journey',
    family: '短片 (Short)',
    description: '【A点到B点】角色必须从一个地方移动到另一个地方，路途即成长。',
    lacanian: '【驱力的轨迹】欲望不是为了到达目标，而是为了在路径上持续运动。',
    masterpiece: '《小满》'
  },
  {
    id: 'SHORT_WAITING',
    name: '等待戈多 (The Waiting)',
    enName: 'The Waiting',
    family: '短片 (Short)',
    description: '【静态张力】角色在等待某事发生。强调无聊、焦虑和微小的互动。',
    lacanian: '【欲望的延宕】主体停留在“准备”阶段，以此回避与实在界的直接接触。',
    masterpiece: '《加油站》'
  },
  {
    id: 'SHORT_OBJECT_GAZE',
    name: '物之凝视 (Object Gaze)',
    enName: 'The Object Gaze',
    family: '短片 (Short)',
    description: '【非人视角】从物体（如冰箱、硬币）的视角讲述故事。',
    lacanian: '【对象的反视】不仅是我在看物，物也在看我。视角的颠倒。',
    masterpiece: '《塑料袋》 (Plastic Bag)'
  },
  {
    id: 'SHORT_FLASHBACK',
    name: '记忆碎片 (The Flashback)',
    enName: 'The Flashback',
    family: '短片 (Short)',
    description: '【非线性】现在与过去交织。通过物品触发回忆。',
    lacanian: '【历史的重写】记忆不是事实，是主体对过去的回溯性建构。',
    masterpiece: '《回忆积木屋》'
  },
  {
    id: 'SHORT_DREAM',
    name: '梦境逻辑 (The Dream)',
    enName: 'The Dream',
    family: '短片 (Short)',
    description: '【超现实】物体变形，空间错乱。遵循潜意识的关联而非物理法则。',
    lacanian: '【无意识的真理】梦是通往实在界的皇家大道。隐喻与换喻的自由流动。',
    masterpiece: '《安达鲁之犬》'
  },
  {
    id: 'SHORT_DILEMMA',
    name: '电车难题 (The Dilemma)',
    enName: 'The Dilemma',
    family: '短片 (Short)',
    description: '【道德困境】主角必须在两个糟糕的选项中做出选择。没有赢家。',
    lacanian: '【强制选择】你的钱还是你的命？无论选哪个，主体都会遭受阉割。',
    masterpiece: '《平衡》 (Balance)'
  },
  {
    id: 'SHORT_ARGUMENT',
    name: '语言博弈 (The Argument)',
    enName: 'The Argument',
    family: '短片 (Short)',
    description: '【纯对话】两个人在一个房间里争吵。语言作为武器。权力的反转。',
    lacanian: '【话语的战争】通过语言试图控制对方的欲望，确立主奴关系。',
    masterpiece: '《杀戮》 (Carnage)'
  },
  {
    id: 'SHORT_TWIST',
    name: '欧亨利式 (The Twist)',
    enName: 'The O. Henry Twist',
    family: '短片 (Short)',
    description: '【情理之中】结局的一个信息彻底改变了之前所有情节的含义。',
    lacanian: '【真理的降临】最后一块拼图（主人能指）落下，固定了漂浮的意义。',
    masterpiece: '《宵禁》 (Curfew)'
  },
  {
    id: 'SHORT_AMBIGUITY',
    name: '开放结局 (The Ambiguity)',
    enName: 'The Open Ending',
    family: '短片 (Short)',
    description: '【悬置】故事在最高潮处戛然而止。没有答案。陀螺还在转吗？',
    lacanian: '【缺失的保留】拒绝给观众提供一个完整的幻象，迫使观众面对阉割。',
    masterpiece: '《盗梦空间》结尾'
  }
];
