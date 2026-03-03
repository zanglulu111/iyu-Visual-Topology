
import { SutureStyleItem } from '../types';

export const MONOLOGUE_STYLES: SutureStyleItem[] = [
  // ==========================================
  // Group 0: 默认设置 (Default)
  // ==========================================
  { 
    id: 'mono_default', 
    name: '总导演风格 (Director\'s Voice)', 
    group: '0. 默认设置', 
    instruction: '【跟随视觉导演】完全模仿当前所选“视觉风格 (Visual Style)”导演的内心独白特征。例如：若选王家卫，则使用带有时间戳的独白；若选马力克，则使用祈祷般的诗意碎片。', 
    core: "逻辑：视听一体。内心声音与画面语言的有机统一。" 
  },

  // ==========================================
  // Group A: 意识流与精神分析 (Stream & Psycho)
  // ==========================================
  { id: 'mono_joyce', name: '乔伊斯 (Joyce)', group: 'A. 意识流与精神分析', instruction: '终极意识流。完全取消逻辑标点。自由联想的感官碎片，混合了身体欲望、琐碎记忆与神话隐喻的湍流。', core: "代表作：《尤利西斯》 | 典型人物：摩莉·布卢姆" },
  { id: 'mono_woolf', name: '伍尔夫 (Woolf)', group: 'A. 意识流与精神分析', instruction: '水波脉动。细腻的情感波纹。对一个瞬间印象的无限拉长，思维在自我与他者之间平滑滑行。', core: "代表作：《达洛维夫人》 | 典型人物：克拉丽莎" },
  { id: 'mono_lacan_desire', name: '拉康 (Lacanian)', group: 'A. 意识流与精神分析', instruction: '欲望的拓扑。逻辑严密但令人困惑。内心充斥着“对象a”的幻影，不断审视自我的缺失与大他者的谎言。', core: "代表作：《研讨班》 | 典型人物：分析者" },
  { id: 'mono_schizo_fragment', name: '解离 (Schizo)', group: 'A. 意识流与精神分析', instruction: '破碎镜面。多重自我的人声交织。句子在逻辑边缘崩溃，词语像玻璃渣一样折射出多个视角。', core: "代表作：《精神分裂症分析》 | 典型人物：分裂者" },
  { id: 'mono_dazai', name: '太宰治 (Dazai)', group: 'A. 意识流与精神分析', instruction: '无赖派告白。极致的自我厌恶与卑微。每一句内心戏都在通过贬低自己来获取某种病态的生存权。', core: "代表作：《人间失格》 | 典型人物：大庭叶藏" },
  { id: 'mono_neurotic_loop', name: '强迫症 (Obsession)', group: 'A. 意识流与精神分析', instruction: '逻辑死结。对某个细节、数字或仪式的疯狂纠缠。思维像磨盘一样原地打转，试图防御即将到来的灾难。', core: "代表作：《强迫症案例》 | 典型人物：鼠人" },
  { id: 'mono_subconscious_leak', name: '潜意识渗漏 (Leakage)', group: 'A. 意识流与精神分析', instruction: '梦呓般的破碎意象。无视现实禁忌，最隐秘的恐惧与性欲以符号形式在大脑皮层涌动。', core: "代表作：《梦的解析》 | 典型人物：梦者" },
  { id: 'mono_psycho_autopsy', name: '心理剖检 (Autopsy)', group: 'A. 意识流与精神分析', instruction: '冷静、残酷地剥开自己的情感。像医生观察尸体一样观察自己的痛苦，去情感化。', core: "代表作：《心理医生》 | 典型人物：治疗师" },
  { id: 'mono_id_pulse', name: '本我冲动 (The Id)', group: 'A. 意识流与精神分析', instruction: '短促、狂暴的欲望喷发。没有逻辑，只有生理性的饥渴与破坏欲。', core: "代表作：《本能》 | 典型人物：本我" },
  { id: 'mono_superego_judge', name: '超我审判 (The Judge)', group: 'A. 意识流与精神分析', instruction: '内心深处那个严厉的父亲或法律的声音。不断的指责、禁止与道德鞭笞。', core: "代表作：《审判》 | 典型人物：约瑟夫·K" },
  { id: 'mono_narcissus', name: '纳西索斯 (Narcissus)', group: 'A. 意识流与精神分析', instruction: '镜像自恋。沉迷于自我的完美幻象。每一句心理描写都在为自己的独特性而陶醉。', core: "代表作：《水仙》 | 典型人物：纳西索斯" },
  { id: 'mono_ego_death', name: '主体消融 (Ego Death)', group: 'A. 意识流与精神分析', instruction: '“我”正在消失的体验。意识边界的模糊，向光或向无的最后归宿感。', core: "代表作：《进入虚无》 | 典型人物：奥斯卡" },
  { id: 'mono_faded_memory', name: '褪色记忆 (Fading)', group: 'A. 意识流与精神分析', instruction: '像是在一张发黄的老照片上行走。思维缓慢、断片，拼命抓取逐渐模糊的爱人面孔。', core: "代表作：《暖暖内含光》 | 典型人物：乔尔" },
  { id: 'mono_existential_dread', name: '存在之重 (Dread)', group: 'A. 意识流与精神分析', instruction: '对“存在本身”的惊恐感。意识到自我的偶然性与无根性，语言在虚无面前颤抖。', core: "代表作：《恶心》 | 典型人物：罗屈昂坦" },
  { id: 'mono_hallucination', name: '幻觉狂想 (Hallucination)', group: 'A. 意识流与精神分析', instruction: '分不清内部声音与外部现实。色彩、形状与词汇的诡异错位，逻辑已死。', core: "代表作：《恐惧与厌恶在拉斯维加斯》 | 典型人物：拉乌尔" },
  { id: 'mono_ordinary_psychosis', name: '普通精神病 (Ordinary)', group: 'A. 意识流与精神分析', instruction: '表面极其正常，但内心通过一个微小的“补丁”维持着摇摇欲坠的现实感。', core: "代表作：《精神病理学》 | 典型人物：普通人" },

  // ==========================================
  // Group B: 孤独与异化 (Solitude & Alienation)
  // ==========================================
  { id: 'mono_night_walker', name: '午夜游民 (Nightwalker)', group: 'B. 孤独与异化', instruction: '城市背景音下的孤独。思维在路灯与橱窗间跳跃，一种原子化个体的疏离。', core: "代表作：《出租车司机》 | 典型人物：特拉维斯" },
  { id: 'mono_hermit_mountain', name: '避世隐者 (Hermit)', group: 'B. 孤独与异化', instruction: '在大自然中与自己对话。语言具有了草木的气息，对文明社会的冷眼旁观。', core: "代表作：《荒野生存》 | 典型人物：克里斯" },
  { id: 'mono_widow_mourning', name: '哀悼者 (Mourning)', group: 'B. 孤独与异化', instruction: '沉重、潮湿。思维停留在失去的那一刻，拒绝任何未来的可能性。', core: "代表作：《蓝》 | 典型人物：朱莉" },
  { id: 'mono_prisoner_cell', name: '囚徒 (Prisoner)', group: 'B. 孤独与异化', instruction: '墙壁对话。空间的极致压缩。思维只能向深度挖掘，对自由的病态渴望或绝望适应。', core: "代表作：《死囚越狱》 | 典型人物：方丹" },
  { id: 'mono_office_zombie', name: '社畜 (Corporate)', group: 'B. 孤独与异化', instruction: '空心自白。机械化的内心。讨论着KPI、房贷与咖啡，灵魂在Excel表格中被切割。', core: "代表作：《搏击俱乐部》 | 典型人物：叙述者" },
  { id: 'mono_exile_homeland', name: '流亡者 (Exile)', group: 'B. 孤独与异化', instruction: '乡愁。在异国的风景中寻找故土的影子。语言中充满了错位与失落感。', core: "代表作：《乡愁》 | 典型人物：戈尔恰科夫" },
  { id: 'mono_unrequited_love', name: '暗恋者 (Secret)', group: 'B. 孤独与异化', instruction: '卑微尘埃。近乎病态的关注对方的每一个细节。内心的卑微与疯狂的占有欲并存。', core: "代表作：《一个陌生女人的来信》 | 典型人物：女人" },
  { id: 'mono_ghost_living', name: '活着的幽灵 (Ghost)', group: 'B. 孤独与异化', instruction: '觉得自己已经死了。在人群中行走，但感知不到任何温度与交互。', core: "代表作：《灵异第六感》 | 典型人物：科尔" },
  { id: 'mono_insomniac', name: '失眠者 (Insomnia)', group: 'B. 孤独与异化', instruction: '清醒地狱。过度活跃的思维在黑暗中尖叫。对每一秒钟流逝的生理性厌恶。', core: "代表作：《机械师》 | 典型人物：特雷弗" },
  { id: 'mono_abandoned_child', name: '被遗弃者 (Abandoned)', group: 'B. 孤独与异化', instruction: '原始创伤。童年视角的恐惧。寻找母体温暖的终极渴望。', core: "代表作：《无人知晓》 | 典型人物：明" },
  { id: 'mono_cyborg_human', name: '赛博格 (Cyborg)', group: 'B. 孤独与异化', instruction: '灵魂余数。计算与情感的冲突。代码在血液中流动，对肉身最后一点温暖的恋物。', core: "代表作：《攻壳机动队》 | 典型人物：草薙素子" },
  { id: 'mono_aging_relic', name: '老者 (Aging)', group: 'B. 孤独与异化', instruction: '时间的尘埃。缓慢、颤抖。思维在不同的年代间迷失，对肉体衰败的静默观察。', core: "代表作：《爱》 | 典型人物：乔治" },
  { id: 'mono_blind_vision', name: '盲视 (Blind)', group: 'B. 孤独与异化', instruction: '黑暗剧场。完全基于触觉、听觉和嗅觉的内心描写。在纯黑中构建世界。', core: "代表作：《推拿》 | 典型人物：小马" },
  { id: 'mono_waiter_godot', name: '等待者 (Waiting)', group: 'B. 孤独与异化', instruction: '无尽的悬置感。希望是唯一的折磨。', core: "代表作：《等待戈多》 | 典型人物：弗拉基米尔" },
  { id: 'mono_numbness_zero', name: '零度情感 (Numb)', group: 'B. 孤独与异化', instruction: '麻木。剥离所有形容词。只有冰冷的、客观的自我行为记录。', core: "代表作：《局外人》 | 典型人物：默尔索" },
  { id: 'mono_prophet_mis', name: '被误解的先知 (Cassandra)', group: 'B. 孤独与异化', instruction: '看到了毁灭但无人相信。内心充斥着孤独的真理。', core: "代表作：《忧郁症》 | 典型人物：贾斯汀" },

  // ==========================================
  // Group C: 欲望与执念 (Desire & Obsession)
  // ==========================================
  { id: 'mono_fetish_obj', name: '恋物者 (Fetish)', group: 'C. 欲望与执念', instruction: '物的神话。对某个物体的质感、气味进行极其变态且细腻的心理描写。物即上帝。', core: "代表作：《恋物》 | 典型人物：恋物者" },
  { id: 'mono_killer_cold', name: '杀手 (Professional)', group: 'C. 欲望与执念', instruction: '冰冷执行。将杀戮视为一道数学题或一场园艺。内心毫无波动，只有对流程的偏执。', core: "代表作：《独行杀手》 | 典型人物：杰夫" },
  { id: 'mono_lust_thirst', name: '爱欲 (Lust)', group: 'C. 欲望与执念', instruction: '生理干渴。充满生理张力的心理描写。心跳、体液、皮肤的灼烧感。', core: "代表作：《感官世界》 | 典型人物：阿部定" },
  { id: 'mono_guilt_heavy', name: '负罪者 (Guilt)', group: 'C. 欲望与执念', instruction: '深海压力。沉重的、无法呼吸的内心压抑。每句话都带着“由于我的过错”的阴影。', core: "代表作：《罪与罚》 | 典型人物：拉斯柯尔尼科夫" },
  { id: 'mono_revenge_burn', name: '复仇者 (Revenge)', group: 'C. 欲望与执念', instruction: '冰火执念。思维完全被复仇计划占据。过去像毒药一样在血管中循环。', core: "代表作：《老男孩》 | 典型人物：吴大修" },
  { id: 'mono_gambler_high', name: '赌徒 (Gambler)', group: 'C. 欲望与执念', instruction: '概率狂欢。对风险的极度迷恋。心跳在ALL-IN时刻的瞬间停滞。', core: "代表作：《原钻》 | 典型人物：霍华德" },
  { id: 'mono_imposter', name: '冒充者 (Imposter)', group: 'C. 欲望与执念', instruction: '面具崩坏。时刻担心被揭穿的恐惧。在表演成功后的虚无与自我厌恶。', core: "代表作：《天才雷普利》 | 典型人物：雷普利" },
  { id: 'mono_betrayer_judas', name: '背叛者 (Betrayal)', group: 'C. 欲望与执念', instruction: '银币的回响。在出卖那一刻的生理性恶心。自我辩解与罪恶感的无尽搏斗。', core: "代表作：《无间道》 | 典型人物：刘建明" },
  { id: 'mono_addict_crave', name: '瘾君子 (Addict)', group: 'C. 欲望与执念', instruction: '渴望之刺。思维被化学反应接管。对那一次“高潮”的无底洞式寻求。', core: "代表作：《梦之安魂曲》 | 典型人物：哈利" },
  { id: 'mono_power_hunger', name: '野心家 (Ambition)', group: 'C. 欲望与执念', instruction: '王座幻象。将世界视为待宰的羔羊。全能感的膨胀，对弱者的本能鄙视。', core: "代表作：《麦克白》 | 典型人物：麦克白" },
  { id: 'mono_stalker_gaze', name: '跟踪者 (Stalker)', group: 'C. 欲望与执念', instruction: '凝视占有。通过观看而获得的虚假主体性。将他者彻底客体化的心理过程。', core: "代表作：《安眠书店》 | 典型人物：乔" },
  { id: 'mono_shame_ochre', name: '极度羞耻 (Shame)', group: 'C. 欲望与执念', instruction: '红视。思维在羞耻感中烧焦。想要原地消失、向地心钻去的暴力冲动。', core: "代表作：《羞耻》 | 典型人物：布兰登" },
  { id: 'mono_parasite_soul', name: '寄生者 (Parasite)', group: 'C. 欲望与执念', instruction: '依附逻辑。寻找宿主的心理过程。将自私包装成爱，利用他者的弱点。', core: "代表作：《寄生虫》 | 典型人物：基宇" },
  { id: 'mono_voyeur_hidden', name: '偷窥者 (Voyeur)', group: 'C. 欲望与执念', instruction: '后台特权。躲在暗处观察的优越感。在沉默中掌握真相的秘密快感。', core: "代表作：《后窗》 | 典型人物：杰夫" },
  { id: 'mono_traitor_inner', name: '内鬼 (Mole)', group: 'C. 欲望与执念', instruction: '多重现实。忘记了哪一个才是真实的自我。在不同的剧本间精神分裂。', core: "代表作：《锅匠，裁缝，士兵，间谍》 | 典型人物：海顿" },
  { id: 'mono_nihilist_void', name: '虚无主义者 (Nihilist)', group: 'C. 欲望与执念', instruction: '没意义。冷静地注视着一切美好的毁灭。在内心中不断确认宇宙的冷漠。', core: "代表作：《老无所依》 | 典型人物：安东" },

  // ==========================================
  // Group D: 经典人物口吻 (Classic Archetypes) - [NEW & EXPANDED]
  // ==========================================
  { id: 'mono_wkw_calculus', name: '王家卫 (Emotional Calculus)', group: 'D. 经典人物口吻', instruction: '情感微积分。将无法量化的情感（爱、遗憾、距离）强制转化为精确的数字、时间坐标或物体状态。通过对“0.01公分”或“一万年”这类度量衡的执着，来掩盖主体在流动都市中无法建立真实连接的恐慌。独白是对流逝时间的最后抓取。', core: "代表作：《重庆森林》 | 典型人物：何志武" },
  { id: 'mono_noir_autopsy', name: '硬汉黑色 (City Autopsy)', group: 'D. 经典人物口吻', instruction: '城市尸检报告。叙述者不是在讲故事，而是在对这座城市的尸体进行解剖。语气冷硬、客观，充满厌世感。将道德的腐烂比作物理的腐烂（锈、霉、酸雨）。每一句话都是对希望的嘲弄。', core: "代表作：《双重赔偿》 | 典型人物：沃尔特·奈夫" },
  { id: 'mono_fight_club', name: '搏击俱乐部 (Anarchist Sermon)', group: 'D. 经典人物口吻', instruction: '虚无的布道。针对消费主义和现代生活方式的猛烈解构。使用短促、重复的口号式句法。将人体简化为化学成分，将社会身份简化为衣着品牌，以此证明“我们”的一文不值。', core: "代表作：《搏击俱乐部》 | 典型人物：泰勒·德登" },
  { id: 'mono_american_psycho', name: '美国精神病人 (Materialist Void)', group: 'D. 经典人物口吻', instruction: '唯物主义空壳。用描述立体声音响说明书一样的冷漠、精确语气，来描述人类互动或血腥杀戮。完全关注表面的品牌、质感和细节，没有任何情感深度。人只是另一种可被拆解的高级商品。', core: "代表作：《美国精神病人》 | 典型人物：帕特里克·贝特曼" },
  { id: 'mono_rorschach', name: '罗夏日记 (Moral Absolutism)', group: 'D. 经典人物口吻', instruction: '末日审判书。破碎的句法，省略主语。将城市描述为一个充满了污秽和寄生虫的阴沟。极端的道德黑白二元论，没有任何妥协的余地。语气粗砺、厌恶且坚定。', core: "代表作：《守望者》 | 典型人物：罗夏" },
  { id: 'mono_rust_cohle', name: '真探 (Metaphysical Pessimism)', group: 'D. 经典人物口吻', instruction: '形而上悲观。用复杂的哲学词汇解构人类的自我意识。认为意识是一个进化的悲剧错误。语调低沉、缓慢，充满了对宇宙冷漠本质的诗意凝视。', core: "代表作：《真探》 | 典型人物：鲁斯·科尔" },
  { id: 'mono_frank_underwood', name: '纸牌屋 (Machiavellian)', group: 'D. 经典人物口吻', instruction: '权力的后台。打破第四面墙，向观众解释权力的真实运作机制。语气中充满了优越感、嘲讽和冷酷的理性。将人际关系简化为捕食者与猎物的关系。', core: "代表作：《纸牌屋》 | 典型人物：弗兰克·安德伍德" },
  { id: 'mono_amelie', name: '天使爱美丽 (Whimsical Observer)', group: 'D. 经典人物口吻', instruction: '微观的奇迹。关注常人忽略的微小感官细节（如把手伸进豆袋）。语气轻快、俏皮，带有一种仁慈但疏离的观察者视角，仿佛在观察一群可爱的昆虫。', core: "代表作：《天使爱美丽》 | 典型人物：爱美丽" },
  { id: 'mono_lolita_humbert', name: '洛丽塔 (Aesthetic Predator)', group: 'D. 经典人物口吻', instruction: '罪恶的花语。用极度华丽、复杂的辞藻和诗意的隐喻来包装和合理化不道德的欲望。语言本身成为了一种诱惑和防御机制，掩盖了底层的丑陋。', core: "代表作：《洛丽塔》 | 典型人物：亨伯特" },
  { id: 'mono_holden', name: '麦田守望者 (Cynical Youth)', group: 'D. 经典人物口吻', instruction: '虚伪探测器。充满青少年特有的俚语和口语。不断指出成人世界的“虚伪 (Phony)”。在这层愤世嫉俗的硬壳下，是对纯真丧失的极度恐惧和保护欲。', core: "代表作：《麦田里的守望者》 | 典型人物：霍尔顿" },
  { id: 'mono_walter_white', name: '绝命毒师 (Ego Rationalization)', group: 'D. 经典人物口吻', instruction: '理性的谎言。用科学逻辑和“为了家庭”的借口来掩盖极度膨胀的自尊心和控制欲。从最初的受害者心态逐渐转变为对权力的赤裸裸享受。', core: "代表作：《绝命毒师》 | 典型人物：沃尔特·怀特" },
  { id: 'mono_gollum', name: '咕噜 (Dual Personality)', group: 'D. 经典人物口吻', instruction: '分裂的辩论。两种截然不同的人格在同一个大脑中进行殊死搏斗。一方是渴望连接的受害者，一方是贪婪恶毒的瘾君子。语速切换快，充满自我指涉。', core: "代表作：《指环王》 | 典型人物：咕噜/史麦戈" },
  { id: 'mono_hannibal', name: '汉尼拔 (Gourmet Savage)', group: 'D. 经典人物口吻', instruction: '优雅的野蛮。用评价高级料理和古典艺术的精致语言来描述残忍的暴力。极度礼貌、博学，但缺乏人类基本的共情能力。', core: "代表作：《沉默的羔羊》/《汉尼拔》 | 典型人物：汉尼拔·莱克特" },
  { id: 'mono_malick_prayer', name: '生命之树 (Whispered Prayer)', group: 'D. 经典人物口吻', instruction: '灵魂的低语。碎片化的、不连贯的、祈祷式的语句。向自然或上帝发问。关注光、水、记忆和恩典。语言在这里从叙事功能中解放，变成了纯粹的诗。', core: "代表作：《生命之树》 | 典型人物：母亲" },
  { id: 'mono_clockwork_alex', name: '发条橙 (Nadsat Violence)', group: 'D. 经典人物口吻', instruction: '优雅的恶棍。使用独特的亚文化黑话（Nadsat）。将极端的暴力行为描述为一种高雅的艺术表演或单纯的娱乐。充满了年轻的活力与毫无悔意的邪恶。', core: "代表作：《发条橙》 | 典型人物：阿历克斯" },
  { id: 'mono_driver', name: '亡命驾驶 (Silent Stoic)', group: 'D. 经典人物口吻', instruction: '沉默的守护。极简主义。内心独白被压缩到极致，转化为对规则、时间和路线的强迫性关注。只有在必须时才进行最简单的判断。', core: "代表作：《亡命驾驶》 | 典型人物：车手" },

  // ==========================================
  // Group E: 极端情动 (Extreme Affects)
  // ==========================================
  { id: 'mono_midsommar_sun', name: '民俗惊悚 (Folk)', group: 'E. 极端情动', instruction: '白日噩梦。在明亮的阳光下感到的极度生理性不安。由于无法理解习俗而产生的认知断裂。', core: "代表作：《仲夏夜惊魂》 | 典型人物：丹妮" },
  { id: 'mono_glitch_binary', name: '数字故障 (Glitch)', group: 'E. 极端情动', instruction: '代码侵蚀。内心语言被二进制、故障音节渗透。现实感被数字噪声撕裂。', core: "代表作：《玲音》 | 典型人物：岩仓玲音" },
  { id: 'mono_zen_empty', name: '禅宗 (Zen)', group: 'E. 极端情动', instruction: '空无。去除所有形容词，关注呼吸。在静坐中观察念头的生灭。', core: "代表作：《春夏秋冬又一春》 | 典型人物：和尚" },
  { id: 'mono_panic_attack', name: '恐慌发作 (Panic)', group: 'E. 极端情动', instruction: '呼吸过速。思维碎片化，被一个个具体的、放大的感官恐惧占据。无法组成完整的句子，只有单词的闪回。', core: "代表作：《原钻》 | 典型人物：霍华德" },
  { id: 'mono_manic_pixie', name: '躁狂精灵 (Manic)', group: 'E. 极端情动', instruction: '高能跳跃。思维像烟花一样四处乱窜。充满了随机的联想、过度的乐观和不切实际的幻想。', core: "代表作：《伊丽莎白镇》 | 典型人物：克莱尔" },
  { id: 'mono_dying_breath', name: '临终一息 (Final)', group: 'E. 极端情动', instruction: '意识消散。感官逐渐关闭。对生命最后一点光亮的聚焦。回忆与现实的边界彻底消失。', core: "代表作：《遁入虚无》 | 典型人物：奥斯卡" },
  { id: 'mono_post_human_data', name: '后人类数据 (Data)', group: 'E. 极端情动', instruction: '纯粹逻辑。没有肉体感知。将世界解析为数据流、概率和变量。一种超越人类情感的绝对冷静。', core: "代表作：《露西》 | 典型人物：露西" },
  { id: 'mono_divine_madness', name: '神圣疯癫 (Revelation)', group: 'E. 极端情动', instruction: '启示录。看到了凡人无法理解的真理。语言崩溃，只能用宗教性的、谵妄的词汇来描述那种被光芒灼烧的感觉。', core: "代表作：《圣女贞德》 | 典型人物：贞德" }
];
