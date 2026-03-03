
import { LibraryCategoryDef } from '../types';

// =============================================================================
// PART 1: 职业 (PROFESSION) - Social Role & Survival Means
// =============================================================================
export const PROFESSION_CATEGORIES: LibraryCategoryDef[] = [
  {
    id: "prof_violence",
    name: "1. 暴力与执法 (Violence & Enforcer)",
    desc: "拥有合法或非法使用暴力的权利。身体即武器。",
    items: [
      { id: "detective_noir", name: "私家侦探 (Private Eye)", def: "游走在法律边缘，用相机和拳头寻找真相。", core: "张力：犬儒主义 vs 仅存的道德底线。 | 视觉：风衣、百叶窗阴影、烟雾、威士忌。" },
      { id: "homicide_cop", name: "重案刑警 (Homicide Detective)", def: "每天面对尸体和罪恶，体制内的疲惫齿轮。", core: "张力：程序正义 vs 无法伸张的冤屈。 | 视觉：警徽、满是咖啡渍的文件、审讯室灯光。" },
      { id: "sniper", name: "狙击手 (Sniper)", def: "远程死神，极度的耐心与控制。", core: "张力：上帝视角的掌控感 vs 无法触碰目标的疏离感。 | 视觉：瞄准镜十字、呼吸的停顿、伪装网。" },
      { id: "riot_police", name: "防暴警察 (Riot Control)", def: "体制的盾牌，面对群体的愤怒。", core: "张力：作为人的同情 vs 作为工具的服从。 | 视觉：黑色盔甲、盾牌阵列、催泪瓦斯、面罩后的眼睛。" },
      { id: "mercenary", name: "雇佣兵 (Mercenary)", def: "为钱而战，没有立场的战争机器。", core: "张力：职业信条 vs 战争的残酷无序。 | 视觉：战术背心、多国护照、未标记的武器、伤疤。" },
      { id: "hitman", name: "职业杀手 (Hitman)", def: "冷酷的清除者，将谋杀变成一门艺术或生意。", core: "张力：日常生活的平庸 vs 杀戮时刻的精准。 | 视觉：消音器、皮手套、乐谱、完美的西装。" },
      { id: "bounty_hunter", name: "赏金猎人 (Bounty Hunter)", def: "为了悬赏追捕逃犯，独狼。", core: "张力：猎人与猎物的心理博弈。 | 视觉：通缉令、手铐、荒野、改装车辆。" },
      { id: "bodyguard", name: "保镖 (Bodyguard)", def: "替他人挡子弹的肉盾。", core: "张力：被保护者的傲慢 vs 保护者的牺牲。 | 视觉：耳麦、墨镜、时刻紧绷的肌肉、挡枪的动作。" },
      { id: "interrogator", name: "审讯官 (Interrogator)", def: "攻破心理防线，榨取情报。", core: "张力：语言作为暴力。精神层面的强奸。 | 视觉：单向玻璃、刺眼的台灯、录音机、刑具。" },
      { id: "prison_guard", name: "狱卒 (Prison Guard)", def: "看守笼子的人，同时也生活在笼子里。", core: "张力：权力的滥用 vs 被囚禁的恐惧。 | 视觉：钥匙串的声音、铁栏杆、警棍、监视器。" },
      { id: "samurai_ronin", name: "浪人武士 (Ronin)", def: "失去主人的剑客，遵循个人的道。", core: "张力：荣誉 vs 饥饿。 | 视觉：武士刀、斗笠、破旧的道服、残阳。" },
      { id: "knight", name: "骑士 (Knight)", def: "誓言、盔甲与封建义务。", core: "张力：浪漫的骑士精神 vs 肮脏的中世纪战争。 | 视觉：闪亮的板甲、纹章、战马、长矛。" },
      { id: "executioner", name: "刽子手 (Executioner)", def: "合法的杀人者，背负死亡的业障。", core: "张力：职责 vs 罪恶感。被社会排斥的必要之恶。 | 视觉：面罩、巨斧/电椅、圣经、最后的晚餐。" },
      { id: "gladiator", name: "角斗士 (Gladiator)", def: "为了娱乐大众而搏命的奴隶。", core: "张力：作为偶像的荣耀 vs 作为牲口的地位。 | 视觉：沙场、鲜血、观众的拇指、铁链。" },
      { id: "secret_agent", name: "特工 (Secret Agent)", def: "拥有杀人执照，没有名字，服务于国家利益。", core: "张力：拯救世界 vs 失去自我。 | 视觉：晚礼服、微型相机、马丁尼、隐形墨水。" }
    ]
  },
  {
    id: "prof_crime",
    name: "2. 罪恶与地下 (Crime & Underground)",
    desc: "在法律之外生存，建立灰色秩序。",
    items: [
      { id: "thief_master", name: "大盗/怪盗 (Master Thief)", def: "高智商，技术流，为了挑战不可能而偷窃。", core: "张力：优雅的犯罪 vs 狼狈的逃亡。 | 视觉：激光阵列、金库蓝图、白手套、抓钩。" },
      { id: "drug_lord", name: "毒枭 (Drug Lord)", def: "控制成瘾物质的皇帝，残暴而富有。", core: "张力：巨大的财富 vs 随时被杀的恐惧。 | 视觉：成堆的现金、热带豪宅、金手枪、实验室。" },
      { id: "hacker_black", name: "黑客 (Black Hat)", def: "在网络空间窃取数据，破坏系统。", core: "张力：肉体的虚弱 vs 网络上的神力。 | 视觉：绿色代码雨、能量饮料、黑暗的房间、多屏显示。" },
      { id: "smuggler", name: "走私贩 (Smuggler)", def: "穿越边界，运输禁运品（人/货）。", core: "张力：对边界的突破。在这个世界与那个世界之间穿梭。 | 视觉：集装箱、快艇、假护照、暗格。" },
      { id: "con_artist", name: "欺诈师 (Con Artist)", def: "利用人性的弱点（贪婪/爱）行骗。", core: "张力：完美的谎言 vs 真心的瞬间。 | 视觉：迷人的微笑、多套身份证、昂贵的行头、扑克牌。" },
      { id: "gang_leader", name: "帮派头目 (Gang Leader)", def: "街头秩序的维护者，依靠暴力和义气。", core: "张力：兄弟情义 vs 利益背叛。 | 视觉：纹身、皮夹克、摩托车、街头涂鸦、棒球棍。" },
      { id: "forger", name: "伪造者 (Forger)", def: "制造假钞、假画、假证件的工匠。", core: "张力：赝品比真品更完美。对细节的偏执。 | 视觉：放大镜、刻刀、墨水、紫外线灯。" },
      { id: "fence", name: "销赃人 (The Fence)", def: "地下经济的枢纽，什么都收，什么都卖。", core: "张力：掌握所有人的秘密。 | 视觉：当铺、堆满杂物的后屋、账本、称重器。" },
      { id: "getaway_driver", name: "车手 (Getaway Driver)", def: "负责逃离现场，只关心时间和路线。", core: "张力：绝对的冷静 vs 极速的危险。 | 视觉：皮手套、仪表盘、后视镜里的警灯、引擎轰鸣。" },
      { id: "pimp", name: "皮条客 (Pimp)", def: "贩卖肉体，控制性工作者。", core: "张力：剥削者与保护者的双重面孔。 | 视觉：浮夸的皮草、金牙、霓虹灯下的阴影、豪车。" },
      { id: "gambler", name: "职业赌徒 (Pro Gambler)", def: "靠计算概率和心理博弈为生。", core: "张力：运气的无常 vs 技术的确定。 | 视觉：筹码、甚至能听到心跳的寂静、冷汗、底牌。" },
      { id: "bookie", name: "博彩经纪 (Bookie)", def: "经营地下赌局，追债。", core: "张力：数字代表着断指和鲜血。 | 视觉：记分牌、电话、烟雾缭绕的房间、棒球棍。" },
      { id: "cleaner_crime", name: "清道夫 (The Cleaner)", def: "专门处理犯罪现场，消除痕迹。", core: "张力：将死亡还原为“无”。 | 视觉：漂白水、黑色塑料袋、防护服、溶尸液。" },
      { id: "info_broker", name: "情报贩子 (Info Broker)", def: "贩卖秘密，没有立场，只认钱。", core: "张力：知道得太多往往死得快。 | 视觉：服务器机房、加密硬盘、暗网界面、无数的手机。" },
      { id: "grave_robber", name: "盗墓贼 (Tomb Raider)", def: "侵扰死者的安宁，寻找陪葬品。", core: "张力：对财富的贪婪 vs 对鬼神的恐惧。 | 视觉：洛阳铲、蜡烛、棺椁、发霉的空气、尸骨。" }
    ]
  },
  {
    id: "prof_knowledge",
    name: "3. 知识与技术 (Knowledge & Tech)",
    desc: "掌握真理、技术或治愈能力。理性的代表。",
    items: [
      { id: "scientist_mad", name: "疯狂科学家 (Mad Scientist)", def: "为了真理不惜打破伦理边界。", core: "张力：天才 vs 疯子。扮演上帝的代价。 | 视觉：冒泡的试管、特斯拉线圈、护目镜、凌乱的白发。" },
      { id: "surgeon", name: "外科医生 (Surgeon)", def: "在活人身上动刀，掌握生死。", core: "张力：神之手 vs 人的肉体凡胎。极度的冷静。 | 视觉：无影灯、手术刀、血手套、心电图声。" },
      { id: "architect", name: "建筑师 (Architect)", def: "设计空间，构建秩序。", core: "张力：完美的蓝图 vs 混乱的现实生活。 | 视觉：蓝图、模型、钢笔、俯瞰城市的视角。" },
      { id: "professor", name: "教授 (Professor)", def: "守护知识，传道授业，象牙塔。", core: "张力：理论的完美 vs 现实的无力。 | 视觉：满墙的书籍、黑板、眼镜、讲台、粉笔灰。" },
      { id: "engineer", name: "工程师 (Engineer)", def: "解决实际问题，相信机器优于人。", core: "张力：对效率的追求 vs 人的不确定性。 | 视觉：扳手、油污、复杂的图纸、机械臂、安全帽。" },
      { id: "archaeologist", name: "考古学家 (Archaeologist)", def: "挖掘过去，解读历史的碎片。", core: "张力：尘封的真相 vs 现代的误读。 | 视觉：刷子、探坑、古文字、尘土、遗骨。" },
      { id: "psychiatrist", name: "精神科医生 (Psychiatrist)", def: "探索心灵的迷宫，治疗疯狂。", core: "张力：治疗者本身可能比病人更疯。 | 视觉：躺椅、记事本、罗夏墨迹图、药片、催眠怀表。" },
      { id: "pathologist", name: "法医 (Pathologist)", def: "让尸体说话，寻找死因。", core: "张力：面对死亡的职业化冷漠。 | 视觉：解剖台、冷柜、显微镜、福尔马林罐子。" },
      { id: "programmer", name: "程序员/码农 (Coder)", def: "构建虚拟世界，逻辑的编织者。", core: "张力：代码的逻辑 vs 现实的Bug。 | 视觉：黑底绿字的屏幕、键盘敲击声、咖啡、深夜的工位。" },
      { id: "alchemist", name: "炼金术士 (Alchemist)", def: "追求点石成金，探索物质的灵性。", core: "张力：科学的前身，物质与魔法的边界。 | 视觉：蒸馏瓶、贤者之石、符号阵列、炉火。" },
      { id: "librarian", name: "图书管理员 (Librarian)", def: "知识的守门人，在寂静中生活。", core: "张力：无限的知识 vs 有限的生命。 | 视觉：高耸的书架、尘埃、梯子、静默的手势、印章。" },
      { id: "navigator", name: "领航员 (Navigator)", def: "在茫茫大海或星海中指引方向。", core: "张力：对未知的恐惧 vs 对星辰的信任。 | 视觉：六分仪、星图、罗盘、海图、仪表盘。" },
      { id: "botanist", name: "植物学家 (Botanist)", def: "与植物打交道，理解自然的语言。", core: "张力：植物的静默生命力 vs 人类的喧嚣。 | 视觉：温室、标本夹、泥土、放大镜、奇异的花朵。" },
      { id: "inventor", name: "发明家 (Inventor)", def: "创造不存在的东西，从无到有。", core: "张力：失败的挫折 vs 灵感的狂喜。 | 视觉：充满废铜烂铁的车间、草图、爆炸、护目镜。" },
      { id: "astronomer", name: "天文学家 (Astronomer)", def: "仰望星空，寻找宇宙的答案。", core: "张力：宇宙的浩瀚 vs 个体的孤独。 | 视觉：巨大的望远镜、星空穹顶、长曝光照片、寒冷的观测站。" }
    ]
  },
  {
    id: "prof_power",
    name: "4. 权力与行政 (Power & Admin)",
    desc: "处于社会金字塔顶端或管理层，通过指令运作。",
    items: [
      { id: "ceo", name: "首席执行官 (CEO)", def: "掌握巨型企业的航向，对股东负责。", core: "张力：权力的孤独。人变成了资产负债表上的数字。 | 视觉：顶层办公室、落地窗、直升机、签字笔、高尔夫。" },
      { id: "politician", name: "政客 (Politician)", def: "依靠选票或权术生存，擅长妥协与表演。", core: "张力：公开的承诺 vs 私下的交易。 | 视觉：讲台、麦克风、握手、假笑、竞选海报。" },
      { id: "judge_law", name: "法官 (Judge)", def: "法律的化身，裁决他人的命运。", core: "张力：人性的复杂 vs 法律的刚性。 | 视觉：法槌、黑袍、高高在上的法官席、天平。" },
      { id: "diplomat", name: "外交官 (Diplomat)", def: "在国家之间周旋，语言是武器。", core: "张力：和平的维护 vs 间谍活动的掩护。 | 视觉：宴会厅、香槟、翻译耳机、国旗、护照。" },
      { id: "bureaucrat", name: "官僚 (Bureaucrat)", def: "体制的螺丝钉，执行规则。", core: "张力：平庸之恶。通过程序消解责任。 | 视觉：印章、文件堆、格子间、制服、排号机。" },
      { id: "monarch", name: "君主/皇帝 (Monarch)", def: "权力的象征，身不由己的统治者。", core: "张力：拥有天下却失去自由。欲戴皇冠必承其重。 | 视觉：皇冠、宝座、权杖、跪拜的人群、孤独的背影。" },
      { id: "general", name: "将军 (General)", def: "指挥千军万马，决定战役胜负。", core: "张力：地图上的博弈 vs 战场上的流血。 | 视觉：作战地图、勋章、望远镜、指挥刀、沙盘。" },
      { id: "headmaster", name: "校长 (Headmaster)", def: "学校的统治者，教育理念的执行者。", core: "张力：育人 vs 规训。 | 视觉：办公室、广播系统、教鞭、校训墙、奖杯。" },
      { id: "editor_chief", name: "总编 (Editor-in-Chief)", def: "决定什么能被大众看到，舆论操盘手。", core: "张力：真相 vs 流量/审查。 | 视觉：红笔、排版样张、电话、充满焦虑的编辑部。" },
      { id: "art_curator", name: "策展人 (Curator)", def: "定义什么是艺术，掌握话语权。", core: "张力：艺术的神圣 vs 市场的铜臭。 | 视觉：画廊白墙、香槟、名片、射灯、拍卖槌。" },
      { id: "union_leader", name: "工会领袖 (Union Leader)", def: "代表劳工与资本博弈，组织罢工。", core: "张力：理想主义 vs 权力腐蚀。 | 视觉：扩音器、横幅、工厂大门、握拳的手、谈判桌。" },
      { id: "mob_boss", name: "教父 (Mob Boss)", def: "地下世界的皇帝，依靠家族和恐惧统治。", core: "张力：残酷的暴力 vs 温情的家庭。 | 视觉：戒指、猫、亲吻手背、昏暗的书房、玫瑰。" },
      { id: "ship_captain", name: "船长 (Ship Captain)", def: "海上的绝对权威，掌握全船生死。", core: "张力：面对风暴的冷静与责任。船在人在。 | 视觉：舵轮、航海日志、烟斗、大浪、制服。" },
      { id: "director", name: "导演 (Film Director)", def: "造梦者，剧组的独裁者。", core: "张力：脑中的完美画面 vs 现实的预算限制。 | 视觉：取景框、监视器、扩音筒、帆布椅、片场混乱。" },
      { id: "landlord", name: "地主/房东 (Landlord)", def: "拥有土地或房产，依靠租金生活。", core: "张力：不劳而获的安逸 vs 对佃户的剥削。 | 视觉：钥匙串、收租账本、算盘、大宅门、围墙。" }
    ]
  },
  {
    id: "prof_art",
    name: "5. 艺术与表演 (Art & Performance)",
    desc: "出卖才华、情感或身体，依靠被凝视而生存。",
    items: [
      { id: "actor_star", name: "电影明星 (Movie Star)", def: "活在聚光灯下，大众的欲望投射。", core: "张力：光鲜的皮囊 vs 空虚的内在。面具长在脸上了。 | 视觉：闪光灯、红毯、镜子里的脸、化妆间。" },
      { id: "painter", name: "画家 (Painter)", def: "捕捉光影与灵魂，孤独的创造者。", core: "张力：眼中的世界 vs 画布上的世界。贫穷与天才。 | 视觉：调色盘、沾满颜料的手、画布、松节油味、阁楼。" },
      { id: "writer", name: "作家 (Writer)", def: "编织谎言（故事）来揭示真理。", core: "张力：上帝般的创造感 vs 面对白纸的恐惧（Writer's Block）。 | 视觉：打字机、烟灰缸、废纸团、钢笔、咖啡。" },
      { id: "musician_rock", name: "摇滚乐手 (Rock Star)", def: "用噪音和愤怒表达反叛，燃烧生命。", core: "张力：舞台上的狂热 vs 台下的寂寞。性、毒品、摇滚乐。 | 视觉：吉他、纹身、皮衣、破碎的酒店房间、舞台灯光。" },
      { id: "diva_opera", name: "歌剧名伶 (Opera Diva)", def: "拥有神赐的声音，高傲，戏剧化。", core: "张力：艺术的完美 vs 生活的歇斯底里。 | 视觉：华丽的戏服、舞台妆、鲜花、剧院包厢、高音。" },
      { id: "dancer", name: "舞者 (Dancer)", def: "用身体表达情感，对抗重力。", core: "张力：肉体的极度痛苦 vs 动作的极度优雅。 | 视觉：磨破的脚尖、练功房镜子、把杆、汗水、飞跃。" },
      { id: "photographer", name: "摄影师 (Photographer)", def: "捕捉瞬间的猎人，偷窥者。", core: "张力：旁观者的冷漠 vs 参与者的冲动。 | 视觉：镜头反光、暗房红灯、胶卷、快门声、取景器。" },
      { id: "magician", name: "魔术师 (Magician)", def: "制造惊奇和幻觉，欺骗大师。", core: "张力：想要被揭穿又害怕被揭穿的矛盾。 | 视觉：扑克牌、鸽子、黑箱、礼帽、烟雾、后台机关。" },
      { id: "circus_freak", name: "马戏团畸形秀 (Circus Freak)", def: "展示身体的异样来娱乐大众。", core: "张力：被凝视的屈辱 vs 唯一的生存方式。怪胎之家。 | 视觉：笼子、条纹帐篷、怪异的身体特征、悲伤的眼神。" },
      { id: "courtesan_geisha", name: "名妓/艺伎 (Courtesan/Geisha)", def: "贩卖才艺与幻觉，取悦权贵。", core: "张力：极致的风情 vs 奴隶的本质。爱是禁忌。 | 视觉：和服/丝绸、胭脂、琵琶/三味线、屏风、扇子。" },
      { id: "clown", name: "小丑 (Clown)", def: "涂着油彩，用滑稽掩盖悲伤。", core: "张力：强颜欢笑。小丑面具下的眼泪。 | 视觉：红鼻子、夸张的嘴、五彩斑斓的衣服、气球、跌倒。" },
      { id: "architect_dream", name: "造梦师 (Dream Architect)", def: "设计梦境或虚拟世界（盗梦空间）。", core: "张力：沉溺于完美的虚构 vs 无法面对的现实。 | 视觉：陀螺、不可能的几何结构、镜子迷宫、城市折叠。" },
      { id: "tattoo_artist", name: "纹身师 (Tattoo Artist)", def: "在皮肤上刻画信仰与记忆。", core: "张力：痛苦与永恒。每一针都是一个故事。 | 视觉：纹身机嗡嗡声、墨水、皮肤红肿、图腾、消毒水。" },
      { id: "fashion_designer", name: "时装设计师 (Fashion Designer)", def: "裁剪布料，定义美与潮流。", core: "张力：表面的浮华 vs 幕后的残酷竞争。 | 视觉：剪刀、人台、布料堆、T台灯光、卷尺。" },
      { id: "chef", name: "主厨 (Chef)", def: "味觉的独裁者，厨房里的暴君。", core: "张力：对完美的偏执 vs 高压的工作环境。 | 视觉：火光、刀工、摆盘、汗水、不锈钢厨具。" }
    ]
  },
  {
    id: "prof_labor",
    name: "6. 劳工与服务 (Labor & Service)",
    desc: "社会的基石，靠出卖体力或时间生存，往往被忽视。",
    items: [
      { id: "miner", name: "矿工 (Miner)", def: "深入地底，挖掘资源，与黑暗为伴。", core: "张力：拿命换钱。幽闭恐惧与窒息的危险。 | 视觉：头灯光束、煤灰脸、升降机、金丝雀、镐。" },
      { id: "factory_worker", name: "流水线工人 (Factory Worker)", def: "机械化生产的一部分，重复单一动作。", core: "张力：人的异化。变成了机器的零件。 | 视觉：传送带、机械臂、工服、打卡机、噪音。" },
      { id: "taxi_driver", name: "出租车司机 (Taxi Driver)", def: "城市的观察者，游荡在街头。", core: "张力：目睹一切罪恶与悲欢，但无法介入。孤独。 | 视觉：后视镜、计价器、雨夜街道、车内狭小空间。" },
      { id: "waiter", name: "服务员 (Waiter)", def: "贩卖情绪价值，忍受羞辱。", core: "张力：职业假笑 vs 内心厌恶。隐形人。 | 视觉：托盘、围裙、账单、肮脏的后厨、客人的后脑勺。" },
      { id: "maid", name: "女佣/保姆 (Maid)", def: "进入雇主的私密空间，打理一切。", core: "张力：最亲密的外人。看到了光鲜家庭背后的肮脏。 | 视觉：拖把、雇主的秘密、婴儿、制服、角落。" },
      { id: "delivery_courier", name: "外卖员/信使 (Courier)", def: "与时间赛跑，连接城市的血管。", core: "张力：算法的奴役 vs 身体的极限。 | 视觉：电动车、保温箱、手机导航、倒计时、楼梯。" },
      { id: "farmer", name: "农民 (Farmer)", def: "靠天吃饭，与土地紧密相连。", core: "张力：自然的馈赠 vs 自然的残酷（旱涝）。 | 视觉：粗糙的手、麦浪、泥土、镰刀、烈日。" },
      { id: "fisherman", name: "渔民 (Fisherman)", def: "漂泊在海上，与风浪搏斗。", core: "张力：大海的浩瀚 vs 孤舟的渺小。 | 视觉：渔网、风暴、鱼腥味、日出、甲板。" },
      { id: "truck_driver", name: "卡车司机 (Truck Driver)", def: "长途跋涉，以车为家。", core: "张力：公路的自由 vs 生活的漂泊。疲劳驾驶。 | 视觉：巨大的方向盘、公路尽头、对讲机、快餐、驾驶室。" },
      { id: "construction_worker", name: "建筑工 (Construction Worker)", def: "建造城市，却住不起城市。", core: "张力：高空的危险 vs 地面的卑微。 | 视觉：脚手架、安全帽、水泥、高空俯瞰、简易工棚。" },
      { id: "janitor", name: "清洁工 (Janitor)", def: "在别人休息时清理污秽。", core: "张力：最脏的工作 vs 最干净的环境。拥有所有钥匙但没有权力。 | 视觉：拖把桶、垃圾袋、深夜的空走廊、钥匙串。" },
      { id: "sex_worker", name: "性工作者 (Sex Worker)", def: "出卖身体，处于道德边缘。", core: "张力：肉体的亲密 vs 情感的剥离。 | 视觉：红灯、廉价香水、床单、现金、丝袜。" },
      { id: "butcher", name: "屠夫 (Butcher)", def: "肢解动物，与血肉打交道。", core: "张力：暴力的日常化。掌握刀的权力。 | 视觉：剁肉刀、围裙上的血、挂钩上的肉、案板。" },
      { id: "undertaker", name: "殡葬师 (Undertaker)", def: "送别死者，整理遗容。", core: "张力：生与死的摆渡人。对尸体的尊重与恐惧。 | 视觉：化妆刷、棺材、黑西装、静谧的告别室。" },
      { id: "repairman", name: "维修工 (Mechanic)", def: "修补破损的机器，满身油污。", core: "张力：对机械的理解胜过对人的理解。 | 视觉：扳手、机油、底盘下、火花、旧零件。" }
    ]
  },
  {
    id: "prof_faith",
    name: "7. 信仰与神秘 (Faith & Occult)",
    desc: "沟通人与神、生与死、已知与未知的中介。",
    items: [
      { id: "priest", name: "牧师/神父 (Priest)", def: "神的代言人，聆听忏悔。", core: "张力：神圣的职责 vs 个人的欲望/怀疑。背负他人的罪恶。 | 视觉：告解室隔网、圣经、十字架、长袍、烛光。" },
      { id: "monk", name: "僧侣/苦行僧 (Monk)", def: "避世修行，追求精神超脱。", core: "张力：肉体的欲望 vs 精神的戒律。 | 视觉：寺庙、光头、念珠、打坐、山林。" },
      { id: "cult_leader", name: "邪教教主 (Cult Leader)", def: "通过洗脑和魅力控制信徒。", core: "张力：自封的神。绝对的权力导致绝对的腐败。 | 视觉：白衣、狂热的眼神、讲台、信徒的眼泪、仪式。" },
      { id: "exorcist", name: "驱魔人 (Exorcist)", def: "与恶魔搏斗，净化灵魂。", core: "张力：信仰的力量 vs 恶魔的诱惑。直面纯粹的邪恶。 | 视觉：圣水、拉丁文经文、被附身者的扭曲、阴影、十字架。" },
      { id: "medium", name: "灵媒/通灵者 (Medium)", def: "能看到死者，沟通阴阳。", core: "张力：天赋也是诅咒。分不清现实与灵界。 | 视觉：水晶球、翻白眼、降神会、蜡烛熄灭、鬼魂。" },
      { id: "fortune_teller", name: "占卜师 (Fortune Teller)", def: "窥探命运，塔罗牌或星象。", core: "张力：宿命论。知道未来却无法改变的痛苦。 | 视觉：塔罗牌、星盘、帐篷、神秘的饰品、面纱。" },
      { id: "witch", name: "女巫 (Witch)", def: "掌握自然魔法，被社会排斥。", core: "张力：女性力量的觉醒 vs 父权社会的猎杀。 | 视觉：草药、坩埚、黑猫、森林小屋、符咒。" },
      { id: "shaman", name: "萨满 (Shaman)", def: "部落的医者和智者，通过致幻剂通灵。", core: "张力：疯癫与神圣的一线之隔。 | 视觉：面具、鼓声、火堆、图腾、致幻蘑菇。" },
      { id: "crusader", name: "圣骑士/十字军 (Crusader)", def: "为信仰而战的武士。", core: "张力：神圣的目标 vs 血腥的手段。狂热。 | 视觉：红十字战袍、剑、沙漠、祈祷、鲜血。" },
      { id: "inquisitor", name: "审判官 (Inquisitor)", def: "猎杀异端，维护教义纯洁。", core: "张力：以神的名义施加酷刑。冷酷的教条主义。 | 视觉：刑具、火刑柱、红色长袍、审判书、铁烙。" },
      { id: "funeral_director", name: "入殓师 (Funeral Director)", def: "给予死者最后的尊严。", core: "张力：对尸体的温柔。看透生死的淡然。 | 视觉：化妆箱、棺材、菊花、安静的手、遗像。" },
      { id: "grave_keeper", name: "守墓人 (Grave Keeper)", def: "守护死者的安宁，离群索居。", core: "张力：与死人为伴比与活人为伴更轻松。 | 视觉：墓碑阵列、铲子、乌鸦、枯树、守夜小屋。" },
      { id: "plague_doctor", name: "鸟嘴医生 (Plague Doctor)", def: "中世纪瘟疫医师，死亡的象征。", core: "张力：无用的治疗 vs 死亡的必然。恐怖的形象。 | 视觉：鸟嘴面具、黑长袍、手杖、香料、尸体堆。" },
      { id: "taoist", name: "道士 (Taoist)", def: "画符捉鬼，追求长生。", core: "张力：入世降妖 vs 出世修道。 | 视觉：桃木剑、黄纸符、八卦镜、炼丹炉、僵尸。" },
      { id: "missionary", name: "传教士 (Missionary)", def: "深入异域传播信仰。", core: "张力：文明的傲慢 vs 信仰的考验。殉道。 | 视觉：圣经、丛林/荒漠、土著、简陋的教堂、十字架。" }
    ]
  },
  {
    id: "prof_edge",
    name: "8. 探索与边缘 (Exploration & Edge)",
    desc: "在文明的边界、未知的领域或社会的缝隙中生存。",
    items: [
      { id: "astronaut", name: "宇航员 (Astronaut)", def: "前往太空，探索人类的疆界。", core: "张力：极致的科技 vs 极致的脆弱。在真空中的孤独。 | 视觉：头盔反光、失重、地球边缘、呼吸声、仪表盘。" },
      { id: "detective_occult", name: "神秘学侦探 (Occult Detective)", def: "专门调查超自然案件（康斯坦丁）。", core: "张力：不仅要对抗罪犯，还要对抗恶魔。灵魂处于危险中。 | 视觉：魔法阵、风衣、香烟、阴阳眼、封印物。" },
      { id: "scavenger", name: "拾荒者 (Scavenger)", def: "在废土或垃圾堆中寻找价值。", core: "张力：垃圾是宝藏。生存本能。 | 视觉：巨大的垃圾山、防毒面具、生锈的金属、探测器、旧时代遗物。" },
      { id: "explorer", name: "探险家 (Explorer)", def: "深入丛林、极地或遗迹。", core: "张力：对征服未知的渴望 vs 大自然的致命陷阱。 | 视觉：地图、罗盘、帐篷、火把、未知的生物。" },
      { id: "ranger", name: "游骑兵/巡林客 (Ranger)", def: "守护荒野边界，熟悉自然。", core: "张力：文明与野蛮的中间人。孤独的守望者。 | 视觉：斗篷、弓箭/猎枪、篝火、狼、边境线。" },
      { id: "hacker_cypher", name: "赛博行者 (Netrunner)", def: "将意识潜入网络空间。", core: "张力：肉体的束缚 vs 意识的无限自由。脑后插管。 | 视觉：VR眼镜、数据流、冰浴缸、义体接口、虚拟形象。" },
      { id: "time_traveler", name: "时间旅行者 (Time Traveler)", def: "穿梭于过去未来，修正或破坏。", core: "张力：全知者的孤独。无法改变宿命的无力感。 | 视觉：怀表/时光机、不同时代的服饰混搭、重影、记事本。" },
      { id: "postman_apoc", name: "末世邮差 (Post-Apoc Courier)", def: "在废土连接孤岛（死亡搁浅）。", core: "张力：连接的使命 vs 荒野的孤独。 | 视觉：巨大的背包、外骨骼、荒凉风景、全息投影、脚印。" },
      { id: "monster_hunter", name: "猎魔人 (Monster Hunter)", def: "以猎杀怪物为生，变异人。", core: "张力：保护人类，却被人类视为怪物。 | 视觉：银剑、药水、伤疤、猫眼、怪物的头颅。" },
      { id: "pirate", name: "海盗 (Pirate)", def: "海上的法外之徒，追求自由。", core: "张力：自由 vs 绞刑架。民主与暴力的混合体。 | 视觉：骷髅旗、眼罩、朗姆酒、弯刀、帆船。" },
      { id: "cowboy", name: "牛仔 (Cowboy)", def: "西部荒野的骑手，个人主义。", core: "张力：文明扩张（铁路）带来的生存空间挤压。 | 视觉：左轮手枪、马、牛仔帽、夕阳、荒漠。" },
      { id: "hermit", name: "隐士 (Hermit)", def: "主动切断社会联系，隐居山林。", core: "张力：内心的丰富 vs 物质的极简。避世。 | 视觉：木屋、长须、书籍、自然光、茶。" },
      { id: "nomad", name: "游牧民 (Nomad)", def: "没有固定的家，逐水草而居。", core: "张力：无根的漂泊。家在路上。 | 视觉：房车/帐篷、篝火、星空、公路/草原、乐器。" },
      { id: "diver", name: "深潜者 (Deep Diver)", def: "进入深海或高压环境工作。", core: "张力：深海幽闭恐惧。异界的压迫感。 | 视觉：重型潜水服、气泡、头灯光束、沉船、海底生物。" },
      { id: "vigilante", name: "义警 (Vigilante)", def: "在法律之外执行正义（蝙蝠侠/罗夏）。", core: "张力：谁来监督守望者？私刑的道德困境。 | 视觉：面具、黑夜、屋顶、雨、受伤的拳头。" }
    ]
  }
];

// =============================================================================
// PART 2: 阶级与出身 (CLASS / ORIGIN) - Birthright & Burden
// =============================================================================
export const ORIGIN_CATEGORIES: LibraryCategoryDef[] = [
  {
    id: "orig_nobility",
    name: "1. 权贵与血统 (Nobility & Bloodline)",
    desc: "拥有古老的姓氏、土地和特权。背负家族的荣耀与诅咒。",
    items: [
      { id: "monarch_heir", name: "王储/皇族 (The Heir)", def: "皇位继承人，生而为王。", core: "张力：欲戴皇冠必承其重。个人自由 vs 国家责任。 | 视觉：权杖、城堡、复杂的礼仪、刺杀。" },
      { id: "fallen_aristocrat", name: "没落贵族 (Fallen Aristocrat)", def: "空有头衔没有钱，守着旧日的荣光。", core: "张力：虚荣 vs 现实的窘迫。变卖祖产的痛苦。 | 视觉：剥落的壁画、发黄的礼服、漏雨的庄园、银餐具。" },
      { id: "feudal_lord", name: "封建领主 (Feudal Lord)", def: "拥有土地和私兵，一方霸主。", core: "张力：对领地的绝对控制权。为了家族利益不择手段。 | 视觉：纹章、高塔、猎犬、宴会、家谱。" },
      { id: "courtier", name: "宫廷权臣 (Courtier)", def: "依附于皇权，精通权术。", core: "张力：伴君如伴虎。在微笑中杀人。 | 视觉：丝绸、折扇、密信、走廊的阴影、耳语。" },
      { id: "old_money", name: "老钱家族 (Old Money)", def: "几代人的财富积累，低调、排外、优雅。", core: "张力：不仅有钱，还有品味和关系网。看不见的阶级壁垒。 | 视觉：私人俱乐部、赛马、古董、管家、常春藤。" },
      { id: "bastard", name: "私生子 (The Bastard)", def: "有高贵血统但不被承认，处于边缘。", core: "张力：渴望被父亲承认 vs 对家族的恨。琼恩·雪诺式命运。 | 视觉：墙外的世界、阴影、证明身份的信物、野心。" },
      { id: "religious_leader", name: "圣职世家 (Religious Scion)", def: "出生在宗教核心家庭，背负神圣使命。", core: "张力：神性 vs 人性。从小被洗脑或寄予厚望。 | 视觉：法衣、圣坛、经书、禁欲、仪式。" },
      { id: "warlord_clan", name: "军阀后代 (Warlord Clan)", def: "出生在战火与暴力统治的家族。", core: "张力：暴力是唯一的语言。继承父亲的枪还是反抗？ | 视觉：军装、吉普车、武器库、保镖、血缘。" },
      { id: "political_dynasty", name: "政治门阀 (Political Dynasty)", def: "肯尼迪式家族，世代从政。", core: "张力：公众形象的完美 vs 私下的丑闻。权力交易。 | 视觉：讲台、镁光灯、高尔夫球场、虚假的家庭合照。" },
      { id: "vampire_elder", name: "吸血鬼长老 (Vampire Elder)", def: "活了几个世纪的贵族，永生不死。", core: "张力：永恒的无聊 vs 对鲜血的渴望。看透历史的冷漠。 | 视觉：天鹅绒、苍白皮肤、古堡、红酒杯（血）、画像。" },
      { id: "exiled_royal", name: "流亡皇室 (Exiled Royal)", def: "国家已亡，带着印章流浪。", core: "张力：无国之君。复国的梦想与现实的落魄。 | 视觉：旧护照、藏在箱底的王冠、小旅馆、秘密会议。" },
      { id: "secret_heir", name: "秘密继承人 (Secret Heir)", def: "不知道自己身世的王子/公主（灰姑娘模式）。", core: "张力：身份的错位。一旦觉醒将面临巨大危险。 | 视觉：胎记、信物、普通的乡村生活、突然出现的杀手。" },
      { id: "tribal_chief", name: "部落酋长 (Tribal Chief)", def: "原始部落的领袖，拥有古老的权威。", core: "张力：传统 vs 现代文明的入侵。守护最后的土地。 | 视觉：羽冠、图腾柱、丛林、火堆、圣地。" },
      { id: "oligarch_scion", name: "寡头之子 (Oligarch Scion)", def: "掌握国家命脉的资源巨头后代。", core: "张力：金钱就是法律。在保镖的簇拥下孤独长大。 | 视觉：防弹车、私人岛屿、石油管道、巨大的游艇。" },
      { id: "cult_messiah", name: "邪教弥赛亚 (Cult Messiah)", def: "被信徒视为神降生的孩子。", core: "张力：被神话的肉体。没有自由，只能成为符号。 | 视觉：鲜花、跪拜的人群、金色的笼子、无邪的眼神。" }
    ]
  },
  {
    id: "orig_elite",
    name: "2. 财富与新贵 (Wealth & Elite)",
    desc: "掌握资本、技术或资源。向上爬升的野心。",
    items: [
      { id: "tech_mogul", name: "科技新贵 (Tech Mogul)", def: "硅谷精英，相信技术能解决一切。", core: "张力：理性的傲慢。用代码重塑世界，忽视人性。 | 视觉：高领毛衣、极简办公室、发布会、私人飞机。" },
      { id: "nouveau_riche", name: "暴发户 (Nouveau Riche)", def: "突然致富，品味浮夸，渴望被接纳。", core: "张力：金钱掩盖不了自卑。被老钱鄙视。 | 视觉：巨大的Logo、金链子、跑车、香槟塔、大理石。" },
      { id: "corporate_exec", name: "企业高管 (Corporate Exec)", def: "在大公司爬到顶层，职业经理人。", core: "张力：绩效的奴隶。为了KPI可以牺牲一切道德。 | 视觉：西装、玻璃幕墙、会议室、PPT、失眠。" },
      { id: "influencer_star", name: "网红顶流 (Top Influencer)", def: "靠流量和关注度获得地位。", core: "张力：活在滤镜里。对过气和被遗忘的极度恐惧。 | 视觉：环形灯、手机屏幕、粉丝数、虚假的笑容、直播间。" },
      { id: "investor", name: "金融大鳄 (Financier)", def: "华尔街之狼，玩弄数字游戏。", core: "张力：贪婪。将世界视为一场赌博。 | 视觉：多屏交易终端、红酒、游艇、K线图、电话。" },
      { id: "celebrity_child", name: "星二代 (Nepo Baby)", def: "生在聚光灯下，拥有特权但没有隐私。", core: "张力：活在父母阴影下。才华配不上名声的焦虑。 | 视觉：狗仔队、墨镜、豪宅、派对、药物。" },
      { id: "genius_scholar", name: "天才学者 (Genius Scholar)", def: "智力超群，学术界的精英。", core: "张力：智商高情商低。在象牙塔里的孤独。 | 视觉：黑板公式、图书馆、奖章、咖啡、乱糟糟的头发。" },
      { id: "merchant_prince", name: "商业巨子 (Merchant Prince)", def: "掌握贸易命脉的家族继承人。", core: "张力：家族生意的重担。利益至上。 | 视觉：港口、货船、账本、丝绸、谈判桌。" },
      { id: "art_patron", name: "艺术赞助人 (Art Patron)", def: "拥有巨大财富，资助艺术家。", core: "张力：用金钱购买品味。收藏癖。 | 视觉：画廊、拍卖会、雕塑、酒会、名片。" },
      { id: "secret_society_member", name: "共济会成员 (Secret Elite)", def: "属于某个控制世界的秘密组织。", core: "张力：掌握不为人知的秘密。幕后操盘手。 | 视觉：戒指、面具、密室、暗号、长桌。" },
      { id: "crypto_king", name: "加密货币大亨 (Crypto King)", def: "靠虚拟货币一夜暴富，去中心化信仰。", core: "张力：数字财富的虚幻感。对旧金融体系的蔑视。 | 视觉：冷钱包、代码屏幕、兰博基尼、海景房、焦虑。" },
      { id: "prodigy", name: "神童 (Prodigy)", def: "年少成名，在某个领域有惊人天赋。", core: "张力：失去童年。被成人世界当做展示品。 | 视觉：奖杯、钢琴/棋盘、大人的注视、孤独的背影。" },
      { id: "media_mogul", name: "传媒大亨 (Media Mogul)", def: "控制舆论，制造真相。", core: "张力：话语权。把世界变成自己的剧本。 | 视觉：报纸头条、演播室、卫星天线、雪茄、控制台。" },
      { id: "fashion_icon", name: "时尚教主 (Fashion Icon)", def: "定义美与潮流，处于名利场中心。", core: "张力：外表的完美 vs 内心的空洞。对衰老的恐惧。 | 视觉：T台、闪光灯、高定礼服、化妆镜、药片。" },
      { id: "explorer_wealthy", name: "富豪探险家 (Wealthy Explorer)", def: "有钱有闲，追求极致体验（登山/深潜）。", core: "张力：用金钱挑战自然。寻找活着的实感。 | 视觉：专业装备、雪山/深海、私人直升机、日记本。" }
    ]
  },
  {
    id: "orig_middle",
    name: "3. 中产与市民 (Middle Class & Civil)",
    desc: "追求稳定、秩序和体面。社会的夹心层。",
    items: [
      { id: "suburban_family", name: "郊区中产 (Suburbanite)", def: "有房有车有狗，看似完美的生活。", core: "张力：平静表面下的绝望（美国丽人）。对混乱的恐惧。 | 视觉：修剪整齐的草坪、栅栏、SUV、烧烤架、抗抑郁药。" },
      { id: "civil_servant", name: "公务员 (Civil Servant)", def: "体制内人员，生活规律，厌恶风险。", core: "张力：平庸之恶或平庸之善。在规章制度中消磨生命。 | 视觉：办公桌、印章、制服、保温杯、档案袋。" },
      { id: "small_business", name: "小店主 (Shopkeeper)", def: "经营一家店，勤勤恳恳。", core: "张力：面对大资本挤压的生存挣扎。社区的守望者。 | 视觉：收银机、招牌、账单、卷帘门、老顾客。" },
      { id: "salaryman", name: "社畜/工薪族 (Salaryman)", def: "大公司的螺丝钉，996，过劳。", core: "张力：为了房贷出卖灵魂。下班后的居酒屋是唯一避难所。 | 视觉：地铁、西装、领带、便当、深夜的路灯。" },
      { id: "academic", name: "教师/知识分子 (Teacher)", def: "教书育人，清贫但有理想。", core: "张力：理想主义 vs 现实的铜臭。看着学生离开。 | 视觉：讲台、粉笔灰、书本、自行车、眼镜。" },
      { id: "doctor_lawyer", name: "专业人士 (Professional)", def: "医生律师工程师，靠技能换取高薪。", core: "张力：职业道德 vs 利益诱惑。高压工作。 | 视觉：执照、白大褂/西装、电脑、咖啡、加班。" },
      { id: "housewife", name: "家庭主妇 (Housewife)", def: "负责家务育儿，经济依赖丈夫。", core: "张力：被忽视的劳动。绝望主妇式的压抑与爆发。 | 视觉：厨房、吸尘器、购物袋、电视剧、窗户。" },
      { id: "student", name: "学生 (Student)", def: "尚未进入社会，处于象牙塔。", core: "张力：成长的烦恼。对未来的迷茫与憧憬。 | 视觉：校服、书包、操场、试卷、耳机。" },
      { id: "artist_struggling", name: "落魄艺术家 (Starving Artist)", def: "有才华但没钱，住在阁楼。", core: "张力：面包 vs 梦想。波西米亚式的生活。 | 视觉：画架、颜料、泡面、凌乱的房间、烟。" },
      { id: "journalist", name: "记者 (Journalist)", def: "记录真相，揭露黑暗。", core: "张力：真相 vs 强权的压制。无冕之王。 | 视觉：相机、录音笔、记事本、印刷机、雨夜。" },
      { id: "start_up_founder", name: "创业者 (Start-up Founder)", def: "从车库起家，充满激情但前途未卜。", core: "张力：改变世界的野心 vs 资金链断裂的焦虑。 | 视觉：白板、披萨盒、睡袋、代码屏幕、路演PPT。" },
      { id: "middle_manager", name: "中层管理 (Middle Manager)", def: "夹心饼干，上传下达。", core: "张力：两头受气。权力的幻觉与实际的无力。 | 视觉：会议室、报表、假笑、脱发、通勤车。" },
      { id: "social_worker", name: "社工 (Social Worker)", def: "帮助弱势群体，接触社会阴暗面。", core: "张力：善意 vs 制度的冷漠。情绪耗竭 (Burnout)。 | 视觉：社区表格、破旧的公寓、电话、疲惫的眼神。" },
      { id: "nurse", name: "护士 (Nurse)", def: "在生死一线工作，但常被忽视。", core: "张力：生命的脆弱。高强度的劳动与关怀。 | 视觉：输液架、白色制服、夜班、走廊、呼叫铃。" },
      { id: "coach", name: "教练 (Coach)", def: "训练他人，追求胜利。", core: "张力：胜负心。将自己的梦想寄托在学员身上。 | 视觉：哨子、运动场、汗水、战术板、更衣室。" }
    ]
  },
  {
    id: "orig_labor",
    name: "4. 劳工与底层 (Working Class & Poor)",
    desc: "出卖体力，处于生存线边缘。粗砺的生命力。",
    items: [
      { id: "factory_hand", name: "蓝领工人 (Blue Collar)", def: "流水线上的操作工，依靠体力。", core: "张力：身体的磨损。阶级兄弟的情义。 | 视觉：工装、安全帽、油污、机器轰鸣、午餐盒。" },
      { id: "farmer_peasant", name: "农民 (Peasant)", def: "依附于土地，看天吃饭。", core: "张力：质朴 vs 愚昧。对土地的深情与被束缚。 | 视觉：泥土、老茧、农具、汗水、丰收/饥荒。" },
      { id: "miner_deep", name: "深井矿工 (Miner)", def: "在黑暗和危险中工作。", core: "张力：随时可能塌方的恐惧。地下的团结。 | 视觉：头灯、煤黑、升降机、金丝雀、肺病。" },
      { id: "service_staff", name: "服务员 (Service Staff)", def: "餐厅、酒店的底层服务人员。", core: "张力：被当作隐形人。忍气吞声。 | 视觉：制服、托盘、后厨、小费、疲惫的脚。" },
      { id: "driver", name: "司机/运输工 (Driver)", def: "卡车或出租车司机，永远在路上。", core: "张力：流动的家。孤独的旅程。 | 视觉：方向盘、公路、香烟、对讲机、汽车旅馆。" },
      { id: "migrant_worker", name: "外来务工/民工 (Migrant Worker)", def: "离开家乡进城打工，没有户口。", core: "张力：城市的建设者却不属于城市。漂泊感。 | 视觉：编织袋、工地、大通铺、春运火车、泡面。" },
      { id: "street_vendor", name: "街头小贩 (Street Vendor)", def: "摆摊维持生计，躲避城管。", core: "张力：底层的生存智慧。烟火气。 | 视觉：推车、吆喝、城管、零钱、夜市灯光。" },
      { id: "cleaner_janitor", name: "清洁工 (Janitor)", def: "清理城市的垃圾。", core: "张力：接触最脏的东西，却有最干净的心（或相反）。 | 视觉：扫帚、橙色马甲、垃圾车、凌晨的街道。" },
      { id: "sex_worker_street", name: "街头性工作者 (Streetwalker)", def: "出卖身体换取生存。", core: "张力：尊严的剥离。在危险中求生。 | 视觉：浓妆、高跟鞋、街角阴影、廉价旅馆、药。" },
      { id: "soldier_grunt", name: "大兵/炮灰 (Grunt)", def: "军队的最底层，执行命令。", core: "张力：成为消耗品。战友如兄弟。 | 视觉：狗牌、泥泞战壕、步枪、家书、恐惧。" },
      { id: "fisher_folk", name: "渔民 (Fisher Folk)", def: "靠海吃海，漂泊不定。", core: "张力：大海的无情。与风浪搏斗的宿命。 | 视觉：渔网、船舱、鱼腥味、风暴、妈祖像。" },
      { id: "lumberjack", name: "伐木工 (Lumberjack)", def: "在深山老林工作，与世隔绝。", core: "张力：原始的力量。孤独与危险。 | 视觉：电锯、巨木、木屑、法兰绒衬衫、森林。" },
      { id: "docker", name: "码头工人 (Docker)", def: "在港口搬运货物，工会力量。", core: "张力：繁重的体力劳动。连接世界的节点。 | 视觉：集装箱、起重机、汗水、工号牌、海风。" },
      { id: "maid_servant", name: "家仆/佣人 (Servant)", def: "依附于主人家，没有私人空间。", core: "张力：窥探主人的秘密。地位的卑微。 | 视觉：围裙、后楼梯、铃铛、角落、主人的背影。" },
      { id: "apprentice", name: "学徒 (Apprentice)", def: "跟着师傅学手艺，地位低下。", core: "张力：成长的渴望 vs 师傅的压制。传承。 | 视觉：工具、杂活、挨骂、偷师、出师酒。" }
    ]
  },
  {
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
  },
  {
    id: "orig_artificial",
    name: "6. 特殊与人造 (Artificial & Special)",
    desc: "非自然出生，或者是被制造/改造的存在。",
    items: [
      { id: "clone", name: "克隆人 (Clone)", def: "基因复制品，没有父母，有编号。", core: "张力：我是否拥有灵魂？作为备用零件的命运。 | 视觉：培养罐、条形码、一模一样的脸、白色制服。" },
      { id: "android", name: "仿生人 (Android)", def: "人造机器，拥有人工智能。", core: "张力：比人类更像人。造物主与被造物的冲突。 | 视觉：蓝血、机械骨骼、完美的皮肤、接口、数据流。" },
      { id: "cyborg", name: "半机械人 (Cyborg)", def: "人类身体经过机械改造。", core: "张力：肉体与金属的融合。忒修斯之船。 | 视觉：机械臂、电子眼、电线、焊接痕迹、HUD界面。" },
      { id: "mutant_lab", name: "实验体/变种人 (Lab Subject)", def: "实验室制造的怪物或超能者。", core: "张力：作为小白鼠的痛苦。拥有力量却被囚禁。 | 视觉：拘束衣、玻璃房、针管、编号纹身、异能爆发。" },
      { id: "uplifted_animal", name: "提升生物 (Uplifted Animal)", def: "被赋予智慧的动物（猩球崛起）。", core: "张力：兽性与人性的撕扯。跨物种的孤独。 | 视觉：会说话的猩猩/狗、人类衣服、笼子、森林、悲伤的眼睛。" },
      { id: "ghost_ai", name: "数字幽灵 (Digital Ghost)", def: "意识上传后的存在，没有实体。", core: "张力：永生但没有触觉。存在于网络中。 | 视觉：全息投影、代码、屏幕、故障闪烁、服务器。" },
      { id: "homunculus", name: "人造人/炼金生物 (Homunculus)", def: "瓶中人，魔法制造的生命。", core: "张力：不完美的生命。对创造者的爱与恨。 | 视觉：玻璃瓶、粘液、畸形、炼金阵、小人。" },
      { id: "chosen_one", name: "天选之子 (The Chosen One)", def: "预言中的救世主，拥有特殊宿命。", core: "张力：无法摆脱的命运重担。所有人都在看着你。 | 视觉：额头伤疤、光环、预言书、孤独的背影、神迹。" },
      { id: "cursed_one", name: "被诅咒者 (Cursed One)", def: "生来带有厄运或恶魔印记。", core: "张力：无论走到哪里都带来灾难。自我厌恶。 | 视觉：黑色印记、乌鸦、阴影、枯萎的花、恐惧的人群。" },
      { id: "immortal", name: "永生者 (The Immortal)", def: "活了太久，无法死去。", core: "张力：看着爱人一个个死去。时间的无意义。 | 视觉：古老的眼睛、不同时代的照片、伤痕愈合、尘埃。" },
      { id: "vessel", name: "容器 (The Vessel)", def: "被制造出来用于承载灵魂或神力。", core: "张力：没有自我，只是一个壳。随时准备被牺牲。 | 视觉：空洞的眼神、仪式纹身、祭坛、沉睡、傀儡线。" },
      { id: "hive_drone", name: "蜂巢工蜂 (Hive Drone)", def: "集体意识的一部分，没有个性。", core: "张力：断开连接后的恐惧与自由。 | 视觉：同步的动作、无表情、六边形结构、脑后接口、嗡嗡声。" },
      { id: "glitch_entity", name: "故障体 (Glitch)", def: "系统错误产生的意外存在。", core: "张力：我不该存在。我是世界的Bug。 | 视觉：像素撕裂、乱码、闪烁、穿模、不稳定的形态。" },
      { id: "reincarnated", name: "转生者 (Reincarnated)", def: "带着前世记忆出生。", core: "张力：两个灵魂在同一个身体里打架。老成的儿童。 | 视觉：成人的眼神、旧物、梦境闪回、既视感、错乱。" },
      { id: "cyborg_native", name: "赛博格原生代 (Cyborg Native)", def: "生来就是人机结合体。", core: "张力：不知肉体为何物。技术是第二天性。 | 视觉：出生自带的接口、金属皮肤、从小连接网络、对自然的陌生。" }
    ]
  },
  {
    id: "orig_crime_fam",
    name: "7. 罪恶世家 (Criminal Family)",
    desc: "生在犯罪家族，血液里流淌着罪恶。",
    items: [
      { id: "mafia_prince", name: "黑帮继承人 (Mafia Prince)", def: "教父的儿子，不想接班但被迫接班。", core: "张力：想要洗白 vs 家族责任。血浓于水。 | 视觉：西装、葬礼、枪、家族聚餐、吻手礼。" },
      { id: "yakuza_daughter", name: "极道之女 (Yakuza Daughter)", def: "黑帮老大的女儿，纹身，带刀。", core: "张力：女性在暴力世界中的生存。 | 视觉：和服、断指、武士刀、樱花、背后的纹身。" },
      { id: "cartel_kid", name: "毒枭之子 (Cartel Scion)", def: "在金钱和血腥中长大，无法无天。", core: "张力：极度的奢侈 vs 极度的残忍。没有道德观念。 | 视觉：老虎宠物、黄金AK47、丛林豪宅、粉末、尸体。" },
      { id: "thief_guild", name: "盗贼公会成员 (Thief Guild)", def: "从小被训练偷窃，孤儿。", core: "张力：除了偷窃什么都不会。公会是唯一的家。 | 视觉：屋顶、开锁工具、面罩、硬币、下水道。" },
      { id: "assassin_clan", name: "刺客世家 (Assassin Clan)", def: "家族生意是杀人，从小接受训练。", core: "张力：没有童年。杀人是工作。 | 视觉：训练场、毒药、名单、冷漠的眼神、黑衣。" },
      { id: "pirate_born", name: "海盗之子 (Pirate Born)", def: "生在船上，没上过岸。", core: "张力：大海是唯一的故乡。无法适应陆地法律。 | 视觉：摇晃的甲板、罗盘、弯刀、鹦鹉、朗姆酒。" },
      { id: "arms_dealer_fam", name: "军火商家族 (Arms Dealer)", def: "战争之王，贩卖死亡。", core: "张力：手不沾血但导致千万人死亡。伪善的优雅。 | 视觉：集装箱、子弹、战乱区、香槟、护照。" },
      { id: "cult_child", name: "邪教之子 (Cult Child)", def: "在邪教内部出生长大，没见过外面的世界。", core: "张力：世界观的彻底扭曲。发现真相后的崩塌。 | 视觉：白色长袍、围墙、圣书、仪式、恐惧。" },
      { id: "prisoner_born", name: "狱中出生 (Prison Born)", def: "母亲是犯人，生在监狱里。", core: "张力：生来就不自由。铁窗是世界的边界。 | 视觉：栏杆、狱警、通铺、水泥地、探视窗。" },
      { id: "spy_kid", name: "间谍子女 (Spy Kid)", def: "父母是间谍，从小学会伪装和撒谎。", core: "张力：没有真实的身份。随时准备搬家。 | 视觉：多本护照、密码本、窃听器、假发、机场。" },
      { id: "con_artist_fam", name: "骗子世家 (Grifter Family)", def: "全家都是骗子，生活就是一场戏。", core: "张力：不知道什么是真话。家庭内部也在互相欺骗。 | 视觉：假身份、剧本、眼神交流、快钱、逃跑。" },
      { id: "bootlegger_heir", name: "私酒贩后代 (Bootlegger)", def: "禁酒令时期的地下生意。", core: "张力：对抗法律的传统。暴利与风险。 | 视觉：地下室、酒桶、汤姆逊冲锋枪、福特汽车、夜路。" },
      { id: "warlord_child", name: "军阀童兵 (Warlord Child)", def: "在战乱区的武装割据势力中长大。", core: "张力：把枪当玩具。对生命的漠视。 | 视觉：迷彩服、吉普车、废墟、AK47、不仅是孩子也是杀手。" },
      { id: "poacher_clan", name: "盗猎家族 (Poacher)", def: "靠猎杀珍稀动物为生。", core: "张力：与自然为敌。在荒野中的残酷生存。 | 视觉：捕兽夹、象牙/皮毛、猎枪、血迹、深夜的森林。" },
      { id: "grave_robber_fam", name: "盗墓世家 (Tomb Raider Family)", def: "世代以盗墓为生，掌握风水秘术。", core: "张力：发死人财的诅咒。地下的秘密。 | 视觉：洛阳铲、古董、阴气沉沉的老宅、罗盘、护身符。" }
    ]
  },
  {
    id: "orig_exile",
    name: "8. 异乡与流亡 (Exile & Foreigner)",
    desc: "身体在此时此地，灵魂在别处。",
    items: [
      { id: "political_exile", name: "政治流亡者 (Political Exile)", def: "因政见不同被迫离开祖国。", core: "张力：回不去的故乡。在异国他乡的失落感。 | 视觉：旧报纸、收音机、行李箱、孤独的公寓、信件。" },
      { id: "immigrant_first", name: "一代移民 (First Gen Immigrant)", def: "为了生存来到新大陆，语言不通。", core: "张力：为了下一代牺牲自己。文化冲突的阵痛。 | 视觉：中餐馆/洗衣店、字典、汗水、唐人街、电话卡。" },
      { id: "expat", name: "外派人员 (Expat)", def: "在异国工作，生活在泡泡里。", core: "张力：优越感 vs 孤独感。始终是局外人。 | 视觉：酒吧、护照、酒店房间、翻译、飞机。" },
      { id: "war_refugee", name: "战争难民 (War Refugee)", def: "家园被毁，一无所有地逃亡。", core: "张力：生存的尊严。对和平的渴望。 | 视觉：废墟回忆、难民船、救济粮、铁丝网、丢失的鞋子。" },
      { id: "time_traveler_stuck", name: "滞留的时间旅行者 (Stuck Traveler)", def: "回不去自己的时代，被困在过去/未来。", core: "张力：卡珊德拉式的痛苦（预知未来但无人信）。孤独。 | 视觉：不属于这个时代的物品、日记、怀表、格格不入。" },
      { id: "alien_stranding", name: "滞留外星人 (Stranded Alien)", def: "飞船坏了，伪装成人类生活。", core: "张力：伪装的疲惫。对母星的思念（E.T.）。 | 视觉：仰望星空、人类皮囊、奇怪的食物、发光的手指。" },
      { id: "fallen_angel", name: "堕落天使 (Fallen Angel)", def: "被逐出天堂，在人间流浪。", core: "张力：神性的丧失。体验人类的痛苦与快感。 | 视觉：背上的伤痕（翅膀）、雨中、教堂顶、悲悯的眼神。" },
      { id: "last_of_kind", name: "遗族 (Last of Kind)", def: "族人都死光了，唯一的幸存者。", core: "张力：背负着整个种族的记忆。绝对的孤独。 | 视觉：灭绝动物、废墟、纪念碑、古老语言、遗物。" },
      { id: "defector", name: "叛逃者 (Defector)", def: "背叛了自己的阵营，投奔敌国。", core: "张力：永远的怀疑对象。两边都不是人。 | 视觉：审讯室、安全屋、百叶窗、恐惧的眼神、背叛。" },
      { id: "colonial_officer", name: "殖民官员 (Colonial Officer)", def: "在殖民地代表帝国，被当地人仇视。", core: "张力：权力的傲慢 vs 内心的腐烂（黑暗之心）。 | 视觉：白色西装、扇子、丛林、疟疾、威士忌。" },
      { id: "space_castaway", name: "太空漂流者 (Space Castaway)", def: "飞船失事，幸存者。", core: "张力：在无尽虚空中的绝望。氧气倒计时。 | 视觉：救生舱、星空、信号枪、压缩食品、孤独。" },
      { id: "banished_noble", name: "被流放的贵族 (Banished Noble)", def: "犯错被贬到边疆。", core: "张力：身份的落差。在荒蛮之地的生存。 | 视觉：破旧的华服、边关风雪、诗集、粗糙的食物、回忆。" },
      { id: "witness_protection", name: "证人保护 (Witness Protection)", def: "为了活命隐姓埋名，搬到陌生小镇。", core: "张力：不仅要躲杀手，还要躲过去。 | 视觉：假名字、陌生的邻居、警车、恐惧、平凡的伪装。" },
      { id: "prodigal_son", name: "浪子 (Prodigal Son)", def: "离家多年，试图回归。", core: "张力：近乡情更怯。家已经不是原来的家了。 | 视觉：车站、旧钥匙、变化的街道、尴尬的重逢、行囊。" },
      { id: "dimension_hopper", name: "维度跳跃者 (Dimension Hopper)", def: "迷失在平行宇宙，找不到回原本世界的路。", core: "张力：这个世界很像家，但不是家。细微的恐怖差别。 | 视觉：错误的招牌、不认识的家人、重力异常、眩晕、镜子。" }
    ]
  }
];
