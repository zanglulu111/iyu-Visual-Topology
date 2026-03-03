
import { LibraryCategoryDef } from '../types';

export const ANIMATION_GENRE_CATEGORIES: LibraryCategoryDef[] = [
  // =================================================================
  // 1. 日式机甲与钢铁 (Mecha & Steel)
  // =================================================================
  {
    id: "anim_mecha",
    name: "01. 机甲与钢铁 (Mecha & Steel)",
    desc: "钢铁的浪漫。人类意志与机械躯壳的融合、对抗与哲学思辨。",
    items: [
        { id: "mecha_real", name: "真实系机甲 (Real Robot)", def: "高达0079/08MS小队。重工业感，战争耗材，政治地缘，量产机。", core: "逻辑：战争是残酷的资源博弈。机甲只是工具，不仅会坏，还需要维修补给。" },
        { id: "mecha_super", name: "超级系机甲 (Super Robot)", def: "天元突破/盖塔。热血，吼叫，唯心主义物理学，钻头突破天际。", core: "逻辑：气势决定物理法则。只要意志力够强，就能打破因果律。合体即正义。" },
        { id: "mecha_eva", name: "福音战士系 (Evangelion)", def: "生物机械，插入栓，AT力场。弗洛伊德式的驾驶舱，母亲的隐喻。", core: "逻辑：刺猬困境。机甲是保护壳，也是拒绝他人的绝对领域（心灵壁垒）。" },
        { id: "mecha_patlabor", name: "机动警察 (Patlabor)", def: "押井守式。日常职场，官僚主义，城市风景，写实警匪。", core: "逻辑：由于这是工作。在巨大的机械背景下探讨平凡的社会问题。" },
        { id: "mecha_macross", name: "超时空要塞 (Macross)", def: "可变战机，偶像歌姬，三角恋。导弹齐射（板野马戏团）。", core: "逻辑：文化胜利。战争不仅靠枪炮，更靠歌声（文化）来感化异种。" },
        { id: "mecha_code_geass", name: "鲁路修 (Code Geass)", def: "瘦长机体，智斗，校园与帝国的双重生活，CLAMP人设。", core: "逻辑：舞台剧式的复仇。机甲是智谋的延伸，注重华丽的战术表演。" },
        { id: "mecha_five_star", name: "五星物语 (Five Star)", def: "永野护。极致繁复的机械设定，半透明装甲，骑士精神，神话史诗。", core: "逻辑：机械的贵族化。机甲是神像，战斗是仪式。" },
        { id: "mecha_gridman", name: "特摄动画化 (Gridman)", def: "扳机社。怪兽，城市破坏，变身英雄，特摄镜头的动画复刻。", core: "逻辑：虚拟世界的实体化。对特摄黄金时代的解构与重组。" },
        { id: "mecha_knights_magic", name: "异界机甲 (Magic Mecha)", def: "魔法驱动的巨大机器人。程序员转生，工程学与魔法的结合。", core: "逻辑：技术宅的狂欢。用现代逻辑优化古代兵器。" },
        { id: "mecha_blue_gender", name: "虫族战争 (Blue Gender)", def: "人类vs巨大昆虫。机甲是对抗自然恐怖的最后防线。绝望生存。", core: "逻辑：物种战争。钢铁在有机生物面前的脆弱性。" }
    ]
  },
  // =================================================================
  // 2. 魔法与变身 (Magic & Transformation)
  // =================================================================
  {
    id: "anim_maho_shoujo",
    name: "02. 魔法与变身 (Magic & Transformation)",
    desc: "少女的力量，变身仪式，爱与奇迹的代价。",
    items: [
        { id: "mg_classic", name: "传统魔女 (Classic Magical Girl)", def: "美少女战士/小樱。华丽的变身动画，爱与正义，收集卡牌/道具。", core: "逻辑：纯真的力量。相信美好可以战胜邪恶，仪式感是力量的来源。" },
        { id: "mg_dark", name: "黑深残魔女 (Dark Magical Girl)", def: "小圆/结城友奈。变身是诅咒，愿望的代价，熵增，绝望。", core: "逻辑：等价交换。奇迹不是免费的，希望越在大，绝望越深。" },
        { id: "mg_battle", name: "武斗派魔女 (Battle Maho)", def: "奈叶/光之美少女。物理攻击，光束炮，肉搏，热血战斗。", core: "逻辑：以暴制暴。用巨大的火力来以此贯彻“交朋友”的意志。" },
        { id: "mg_idol", name: "偶像魔女 (Idol Magic)", def: "LoveLive/偶活。舞台即战场，歌声即魔法，荧光棒海洋。", core: "逻辑：集体狂热。通过“被观看”和“被喜爱”获得能量。" },
        { id: "mg_witch_academy", name: "魔女学院 (Witch Academy)", def: "小魔女学园。校园生活，扫帚飞行，成长的烦恼，相信的心。", core: "逻辑：梦想的坚持。魔法已经过时，如何在这个时代重燃信仰。" },
        { id: "mg_reverse", name: "反派魔女 (Villainess)", def: "转生成恶役千金。利用游戏知识，反套路，经营领地。", core: "逻辑：命运的改写。打破剧本的既定路线。" },
        { id: "mg_utena", name: "革命少女 (Utena)", def: "几原邦彦。超现实，象征主义，拔剑仪式，打破世界的壳。", core: "逻辑：性别政治的寓言。为了革命世界，必须先革命自己。" },
        { id: "mg_princess_tutu", name: "芭蕾魔女 (Princess Tutu)", def: "故事中的故事，芭蕾舞叙事，对抗作者的命运。", core: "逻辑：元叙事抗争。角色试图跳出既定的悲剧剧本。" },
        { id: "mg_symphogear", name: "战姬绝唱 (Symphogear)", def: "边唱边打，装甲变身，歌词即招式，极度热血。", core: "逻辑：声音的物理化。情绪越高昂，战斗力越强。" },
        { id: "mg_shugo_chara", name: "守护甜心 (Shugo Chara)", def: "理想中的自己具象化，心灵之蛋，变身。", core: "逻辑：可能性的探索。每个孩子都拥有成为理想自我的潜力。" }
    ]
  },
  // =================================================================
  // 3. 热血与战斗 (Shonen & Battle)
  // =================================================================
  {
    id: "anim_shonen",
    name: "03. 热血与战斗 (Shonen & Battle)",
    desc: "友情、努力、胜利。能力的系统化与战力的通胀。",
    items: [
        { id: "shonen_ki", name: "气/波纹 (Ki/Aura Battle)", def: "龙珠/幽游白书。光波对轰，变身，战斗力数值，星球毁灭。", core: "逻辑：能级无限通胀。通过吼叫和愤怒突破极限。" },
        { id: "shonen_system", name: "智斗/能力系 (Ability System)", def: "JOJO/猎人。复杂的规则，替身，念能力，解谜式战斗。", core: "逻辑：规则的博弈。没有最强的能力，只有最强的用法。利用情报差获胜。" },
        { id: "shonen_ninja", name: "忍术/结印 (Ninja Arts)", def: "火影/甲贺忍法帖。结印，查克拉，替身术，血继限界。", core: "逻辑：宿命与羁绊。战斗是对话的延续，痛苦是成长的养料。" },
        { id: "shonen_sword", name: "剑戟片 (Sword Battle)", def: "死神/鬼灭/浪客剑心。呼吸法，卍解，拔刀术，斩击特效。", core: "逻辑：信念的具象化。刀的形状代表了灵魂的形状。" },
        { id: "shonen_sports", name: "超能力运动 (Super Sports)", def: "网王/黑篮/足球小将。杀人网球，进入“Zone”，必杀技。", core: "逻辑：运动场即战场。物理法则服从于戏剧张力。" },
        { id: "shonen_delinquent", name: "不良少年 (Delinquent)", def: "东京复仇者/灌篮高手。飞机头，特攻服，暴走族，义气。", core: "逻辑：街头的荣誉。用拳头守护同伴和地盘。" },
        { id: "shonen_cooking", name: "爆衣料理 (Cooking Battle)", def: "食戟之灵/中华小当家。发光的料理，吃了会爆衣/看到幻觉。", core: "逻辑：通感夸张。味觉的极致体验转化为视觉奇观。" },
        { id: "shonen_cards", name: "卡牌对决 (Card Battle)", def: "游戏王。抽卡，召唤怪兽，黑暗游戏，口胡规则。", core: "逻辑：相信卡组的羁绊。用打牌来决定世界的命运。" },
        { id: "shonen_tournament", name: "锦标赛篇章 (Tournament Arc)", def: "武道会，中忍考试。阶梯式对战，观众解说，宿敌对决。", core: "逻辑：实力的量化排名。展示训练成果的舞台。" },
        { id: "shonen_nakama", name: "伙伴航海 (Adventure Party)", def: "海贼王。寻找宝藏，各司其职的伙伴，岛屿冒险。", core: "逻辑：浪漫的自由。为了梦想可以挑战世界政府。" }
    ]
  },
  // =================================================================
  // 4. 青年与暗黑 (Seinen & Dark)
  // =================================================================
  {
    id: "anim_seinen",
    name: "04. 青年与暗黑 (Seinen & Dark)",
    desc: "面向成人的复杂叙事。灰暗的世界观，人性拷问，社会写实。",
    items: [
        { id: "seinen_berserk", name: "剑风传奇 (Berserk Style)", def: "三浦建太郎。巨剑，蚀之刻，极度精细的线条，命运的抗争。", core: "逻辑：挣扎者。在绝对的绝望和因果律中，依然挥剑反抗。" },
        { id: "seinen_urasawa", name: "浦泽悬疑 (Urasawa Mystery)", def: "怪物/20世纪少年。无名反派，阴谋论，普通人的追查，面部表情特写。", core: "逻辑：平庸之恶。恶魔就隐藏在日常的微笑中。" },
        { id: "seinen_fujimoto_chaos", name: "藤本树：B级混沌 (Fujimoto Chaos)", def: "电锯人。B级片趣味，突然的死亡，荒诞的对话，电影感分镜。", core: "逻辑：混乱的活力。痛苦和搞笑同时发生，没有所谓的“神圣”。" },
        { id: "seinen_fujimoto_meta", name: "藤本树：元叙事 (Fujimoto Meta)", def: "再见绘梨/蓦然回首。电影中的电影，创作者的孤独，镜头语言。", core: "逻辑：虚构的救赎。通过创作（谎言）来消化现实的丧失。" },
        { id: "seinen_cyberpunk", name: "攻壳机动队 (Ghost in Shell)", def: "士郎正宗/押井守。光学迷彩，义体，哲学独白，城市空镜。", core: "逻辑：灵肉二元论。当身体完全机械化，灵魂（Ghost）何在？" },
        { id: "seinen_dystopia", name: "反乌托邦 (Psycho-Pass)", def: "虚渊玄。数值化社会，犯罪指数，系统统治，理念碰撞。", core: "逻辑：系统的悖论。完美的社会建立在某种巨大的谎言之上。" },
        { id: "seinen_gambling", name: "赌博默示录 (Gambling)", def: "福本伸行。极度夸张的画风（尖下巴），心理博弈，拟声词。", core: "逻辑：绝境求生。在规则的边缘试探人性底线。" },
        { id: "seinen_junji_ito", name: "伊藤润二 (Junji Ito)", def: "漩涡/富江。密集的线条，人体异化，不可名状的执念。", core: "逻辑：日常的异变。恐怖源于对某种图形或概念的强迫性迷恋。" },
        { id: "seinen_historical", name: "浪客行/冰海战记 (Historical)", def: "井上雄彦/幸村诚。水墨笔触，农耕，赎罪，寻找没有战争的世界。", core: "逻辑：从杀戮到救赎。真正的强大是温柔。" },
        { id: "seinen_weird", name: "异兽魔都 (Dorohedoro)", def: "林田球。肮脏的废土，蘑菇，魔法师，黑色幽默，混乱善良。", core: "逻辑：混沌的秩序。在极度混乱的世界中，依然有某种温馨的日常。" },
        { id: "seinen_gantz", name: "杀戮都市 (Gantz)", def: "黑色紧身衣，外星人，残酷游戏，3D背景转描。", core: "逻辑：虚无主义。生命是廉价的，死亡是随机的。" },
        { id: "seinen_made_in_abyss", name: "来自深渊 (Abyss)", def: "可爱的画风，残酷的剧情，上升负荷，深渊的诱惑。", core: "逻辑：探求的代价。对未知的渴望压倒了对生存的渴望。" }
    ]
  },
  // =================================================================
  // 5. 唯美与日常 (Aesthetic & Slice of Life)
  // =================================================================
  {
    id: "anim_aesthetic",
    name: "05. 唯美与日常 (Aesthetic & Slice of Life)",
    desc: "对氛围、光影、情感的极致追求。空气系，治愈系。",
    items: [
        { id: "aes_shinkai", name: "新海诚 (Shinkai)", def: "高饱和度风景，镜头光晕，积雨云，电车，距离感。", core: "逻辑：世界的宏大 vs 个人的渺小。每一帧都是壁纸。" },
        { id: "aes_kyoto", name: "京阿尼 (KyoAni)", def: "紫罗兰/冰菓。极致的作画细节（眼睛/头发），柔光，液态感。", core: "逻辑：日常的神性。在微小的动作中捕捉情感的波动。" },
        { id: "aes_ghibli", name: "吉卜力 (Ghibli)", def: "宫崎骏。水彩背景，飞行器，自然主义，美食，液体动态。", core: "逻辑：万物有灵。对飞行的渴望，对自然的敬畏，劳动的快乐。" },
        { id: "aes_iyashikei", name: "空气系 (Iyashikei)", def: "轻音/摇曳露营。无主线，喝茶，闲聊，静止帧。", core: "逻辑：时间的延宕。没有冲突，只有流动的当下。" },
        { id: "aes_hosoda", name: "细田守 (Hosoda)", def: "无影作画，积雨云，网络世界(OZ)，奔跑的少年。", core: "逻辑：夏日的活力。家庭纽带与成长的汗水。" },
        { id: "aes_pa_works", name: "PA职场 (Working)", def: "白箱/花开伊吕波。写实的工作流程，职业成长的辛酸。", core: "逻辑：工作的尊严。平凡人的梦想与坚持。" },
        { id: "aes_shaft", name: "新房昭之 (Shaft)", def: "物语系。45度回头，文字闪屏，实景拼贴，极简几何背景。", core: "逻辑：对话的视觉化。用前卫的演出掩盖对话的冗长。" },
        { id: "aes_cloverworks", name: "更衣人偶 (Glossy)", def: "高光皮肤，精细的服饰纹理，微表情，恋爱感。", core: "逻辑：视线的诱惑。强调角色的魅力和互动。" },
        { id: "aes_color_code", name: "绘本风 (Picture Book)", def: "国王排名/辉夜姬。水彩，蜡笔触感，去轮廓线。", core: "逻辑：返璞归真。用童书的质感讲述深刻的故事。" },
        { id: "aes_mono_no_aware", name: "物哀 (Mono no Aware)", def: "虫师/夏目。淡淡的忧伤，与非人生物的共存，山林。", core: "逻辑：生死循环。对万物变迁的静默接受。" }
    ]
  },
  // =================================================================
  // 6. 欧美商业 (Western Commercial)
  // =================================================================
  {
    id: "anim_western_comm",
    name: "06. 欧美商业 (Western Commercial)",
    desc: "迪士尼、皮克斯、梦工厂。全年龄，3D技术，英雄之旅。",
    items: [
        { id: "west_disney_2d", name: "迪士尼2D (Disney Renaissance)", def: "狮子王/泰山。流畅的线条，歌舞剧，百老汇式构图。", core: "逻辑：魔法与愿望。通过歌唱表达内心的渴望 (I Want Song)。" },
        { id: "west_pixar", name: "皮克斯3D (Pixar Style)", def: "玩具总动员。夸张的比例，极度写实的材质，情感核心。", core: "逻辑：万物有情。假如玩具/汽车/情绪有感情会怎样？" },
        { id: "west_spiderverse", name: "蜘蛛宇宙 (Spider-Verse)", def: "抽帧，半调网点，漫画拟声词，色差故障 (RGB Shift)。", core: "逻辑：漫画动起来。打破3D动画的顺滑感，拥抱故障艺术。" },
        { id: "west_dreamworks", name: "梦工厂 (Dreamworks)", def: "史莱克/功夫熊猫。恶搞，歪嘴笑，动作场面，流行文化梗。", core: "逻辑：解构童话。反套路，快节奏，成人笑话。" },
        { id: "west_illumination", name: "照明娱乐 (Illumination)", def: "小黄人。极简设计，夸张变形，闹剧 (Slapstick)，高饱和度。", core: "逻辑：纯粹娱乐。视觉上的滑稽与混乱。" },
        { id: "west_laika", name: "莱卡定格 (Laika Stop-Mo)", def: "鬼妈妈。3D打印面部，黑暗童话，触感，诡异的流畅。", core: "逻辑：手作的温度。在完美中保留一丝不完美的恐怖谷感。" },
        { id: "west_arcane", name: "双城之战 (Arcane)", def: "Fortiche。手绘贴图，2D特效与3D模型结合，油画质感。", core: "逻辑：痛苦的艺术。用极具风格化的笔触描绘成人世界的残酷。" },
        { id: "west_cartoon_network", name: "CN风格 (CalArts)", def: "探险活宝/史蒂芬宇宙。豆豆眼，面条臂，圆润线条，极简。", core: "逻辑：无限想象。规则随意的奇幻世界，深藏的黑暗设定。" },
        { id: "west_clone_wars", name: "克隆人战争 (Clone Wars)", def: "木偶质感，笔触纹理，硬朗的几何切面，光剑光效。", core: "逻辑：战争史诗。在卡通外表下的严肃军事与政治。" },
        { id: "west_rubber_hose", name: "橡胶管 (Rubber Hose)", def: "茶杯头/早期米奇。没有关节，随音乐律动，黑白，颗粒。", core: "逻辑：无视物理。万物皆可变形，纯粹的节奏狂欢。" }
    ]
  },
  // =================================================================
  // 7. 欧美成人 (Western Adult)
  // =================================================================
  {
    id: "anim_western_adult",
    name: "07. 欧美成人 (Western Adult)",
    desc: "辛辣讽刺，粗糙画风，虚无主义，对话驱动。",
    items: [
        { id: "adult_rick_morty", name: "瑞克和莫蒂 (Rick & Morty)", def: "瞳孔涂鸦，口水，随意的科幻设定，存在主义危机。", core: "逻辑：宇宙虚无主义。没什么是有意义的，所以看电视吧。" },
        { id: "adult_south_park", name: "南方公园 (South Park)", def: "剪纸风，粗糙的移动，极简五官，极度冒犯。", core: "逻辑：激进的中间派。嘲笑一切极端，解构一切神圣。" },
        { id: "adult_bojack", name: "马男波杰克 (BoJack)", def: "动物拟人，水彩背景，致郁金句，毒舌。", core: "逻辑：好莱坞讽刺。无法逃脱的原生家庭与性格缺陷。" },
        { id: "adult_simpsons", name: "辛普森 (The Simpsons)", def: "黄皮肤，大眼睛，家庭情景剧，社会讽刺。", core: "逻辑：永恒的现状。无论发生什么，最后一切都会恢复原状。" },
        { id: "adult_midnight_gospel", name: "午夜福音 (Midnight Gospel)", def: "迷幻色彩，不断变化的背景，播客对话录音。", core: "逻辑：灵性探讨。视觉上的Trip与听觉上的哲思分离。" },
        { id: "adult_primal", name: "原始战记 (Primal)", def: "无对白，粗线条，极度暴力，恐龙与穴居人。", core: "逻辑：生存本能。剥离语言，回归最原始的杀戮与温情。" },
        { id: "adult_love_death", name: "爱死机 (Love, Death & Robots)", def: "风格合集。赛博朋克，超写实CGI，实验性2D。", core: "逻辑：科幻短篇。对技术、暴力与性的各种可能性的探索。" },
        { id: "adult_invincible", name: "无敌少侠 (Invincible)", def: "美漫风格，极度血腥，超人暴走，战损。", core: "逻辑：真实的物理伤害。如果超级英雄打架，现实会变得多惨烈。" },
        { id: "adult_hazbin", name: "地狱客栈 (Hazbin Hotel)", def: "细长肢体，尖牙，红黑色调，百老汇歌舞。", core: "逻辑：地狱狂欢。酷儿文化，过度设计，混乱邪恶。" },
        { id: "adult_archer", name: "间谍亚契 (Archer)", def: "粗轮廓线，矢量风格，复古间谍，职场喜剧。", core: "逻辑：职场有毒。虽然是间谍，但其实是无能的自恋狂。" }
    ]
  },
  // =================================================================
  // 8. 港漫硬派 (Hong Kong Manhua)
  // =================================================================
  {
    id: "anim_hk_manhua",
    name: "08. 港漫硬派 (Hong Kong Manhua)",
    desc: "充满力量感的肌肉线条，电影感分镜，武侠与玄幻的结合。",
    items: [
        { id: "hk_ma_wing_shing", name: "马荣成 (Ma Wing-shing)", def: "风云/中华英雄。写实画风，极为细致的背景，以气御剑。", core: "逻辑：宿命论。命犯天煞孤星，英雄注定孤独。武功是天灾。" },
        { id: "hk_wong_yuk_long", name: "黄玉郎 (Wong Yuk-long)", def: "龙虎门/天子传奇。肌肉虬结，色彩鲜艳，拟声词巨大，拳拳到肉。", core: "逻辑：强者生存。正邪不重要，力量（功力）决定一切。" },
        { id: "hk_sea_tiger", name: "海虎/温日良 (Sea Tiger)", def: "磁场转动，癫狂的台词（口也！），极度暴力，强者语境。", core: "逻辑：绝对意志。为了‘爱’可以杀尽天下，极端的个人主义。" },
        { id: "hk_ceng_jiang", name: "郑问 (Chen Uen)", def: "刺客列传/阿鼻剑。水墨与写实的结合，极具张力的构图，毛笔触感。", core: "逻辑：历史的写意。英雄的瞬间与虚无。" },
        { id: "hk_kho_ping", name: "许景琛 (Kho Ping)", def: "街霸。气功波，速度线，夸张的透视，游戏改编。", core: "逻辑：必杀技。将瞬间的招式无限放大。" },
        { id: "hk_weapons", name: "神兵玄奇 (Divine Weapons)", def: "兵器设定极其详尽，水晶透明质感，神魔对立。", core: "逻辑：器物崇拜。人是兵器的载体，兵器拥有灵魂。" },
        { id: "hk_old_master", name: "老夫子 (Old Master Q)", def: "四格漫画，简洁线条，耐人寻味，市井幽默。", core: "逻辑：小人物的荒诞。由于社会变迁产生的滑稽感。" },
        { id: "hk_mc_mull", name: "麦兜 (McDull)", def: "粉色小猪，蜡笔画风，香港本土情怀，茶餐厅。", core: "逻辑：失败者的温情。世界很硬，麦兜很软。" },
        { id: "hk_ravages_time", name: "火凤燎原 (Ravages of Time)", def: "陈某。黑白高对比，复杂的计谋图解，非传统三国。", core: "逻辑：智力博弈。武力只是辅助，计谋才是真正的杀人技。" },
        { id: "hk_teddy_boy", name: "古惑仔 (Teddy Boy)", def: "牛佬。街头黑帮，纹身，刀光剑影，江湖义气。", core: "逻辑：社团秩序。在无序的街头建立的暴力秩序。" }
    ]
  },
  // =================================================================
  // 9. 国漫新潮 (Chinese Donghua)
  // =================================================================
  {
    id: "anim_cn_donghua",
    name: "09. 国漫新潮 (Chinese Donghua)",
    desc: "从水墨传统到3D修仙，独特的中国美学叙事。",
    items: [
        { id: "cn_ink_wash", name: "水墨动画 (Ink Wash)", def: "小蝌蚪找妈妈/山水情。没有轮廓线，墨韵晕染，留白。", core: "逻辑：意境。似与不似之间，重神韵轻形似。" },
        { id: "cn_shanghai_art", name: "美影厂 (Shanghai Art)", def: "大闹天宫/哪吒闹海。京剧脸谱，身段，传统打击乐，色彩鲜艳。", core: "逻辑：戏曲化。角色的动作和神态源于舞台表演。" },
        { id: "cn_cultivation_3d", name: "3D修仙 (3D Cultivation)", def: "凡人修仙/斗罗。华丽的法宝特效，升级流，网文改，粒子效果。", core: "逻辑：阶级跨越。通过资源积累（修炼）实现生命层次的跃迁。" },
        { id: "cn_fog_hill", name: "雾山五行 (Fog Hill)", def: "林魂。粗线条水墨，极高帧率打斗，毛笔质感，颜料飞溅。", core: "逻辑：写意武侠。将水墨的静态美转化为极致的动态暴力。" },
        { id: "cn_light_chaser", name: "追光系 (Light Chaser)", def: "白蛇/新神榜。精美CG，赛博朋克+传统神话，废土东方。", core: "逻辑：神话重构。在现代或未来语境下解构传统神仙。" },
        { id: "cn_link_click", name: "时光代理人 (Link Click)", def: "现实主义画风，照片穿越，悬疑，现代都市。", core: "逻辑：情感羁绊。无论如何改变过去，都无法改变注定的死亡（或者试图改变）。" },
        { id: "cn_scissor_seven", name: "刺客伍六七 (Scissor Seven)", def: "简笔画风，广式幽默，无厘头，突然的热血。", core: "逻辑：草根逆袭。在市井生活中隐藏的绝世高手。" },
        { id: "cn_bad_person", name: "画江湖 (Bad Person)", def: "武侠，群像，复杂的江湖势力，便当（死亡）率高。", core: "逻辑：乱世生存。没有绝对的正义，只有立场。" },
        { id: "cn_ling_long", name: "灵笼 (Incarnation)", def: "末世废土，宗教隐喻，重立体机甲，克苏鲁怪兽。", core: "逻辑：生存哲学。在极端环境下对人性的拷问。" },
        { id: "cn_yao_guai", name: "中国奇谭 (Yao-Guai)", def: "小妖怪的夏天。多风格实验，寓言性质，打工人的隐喻。", core: "逻辑：底层视角。神话背景下的现代职场困境。" }
    ]
  },
  // =================================================================
  // 10. 实验与独立 (Indie & Experimental)
  // =================================================================
  {
    id: "anim_indie",
    name: "10. 实验与独立 (Indie & Experimental)",
    desc: "Webcore, Glitch, 个人创作者，打破常规。",
    items: [
        { id: "indie_pilotredsun", name: "PilotRedSun", def: "粗糙的早期CG，不安的音乐，梦核，烧灼感。", core: "逻辑：数字噩梦。通过廉价的数码技术营造深层的不安。" },
        { id: "indie_ena", name: "ENA (Joel G)", def: "复古多边形，毕加索式脸，超现实逻辑，Web 1.0美学。", core: "逻辑：情绪分裂。在破碎的数字世界中寻找逻辑。" },
        { id: "indie_digital_circus", name: "数字马戏团 (TADC)", def: "90年代教育软件画风，鲜艳色彩，存在主义危机，故障。", core: "逻辑：被困在极其幼稚外表下的成人地狱。" },
        { id: "indie_salad_fingers", name: "Salad Fingers", def: "Flash动画，生锈的质感，寂静，病态的恋物。", core: "逻辑：触觉的渴望。在一个荒芜的世界里寻找某种质感。" },
        { id: "indie_don_hertzfeldt", name: "Don Hertzfeldt", def: "火柴人，手绘颤抖线条，深刻的哲学探讨，宇宙尽头。", core: "逻辑：极简的深刻。用最简单的画面讲述最宏大的悲剧。" },
        { id: "indie_cyriak", name: "Cyriak", def: "分形循环，怪诞的拼贴，无限增殖的牛/羊，电子乐。", core: "逻辑：数学的疯狂。递归产生的视觉恐怖。" },
        { id: "indie_jack_stauber", name: "Jack Stauber", def: "VHS滤镜，粘土与实拍结合，故障音乐，怪诞可爱。", core: "逻辑：错误的怀旧。通过扭曲的复古感表达现代焦虑。" },
        { id: "indie_meatcanyon", name: "MeatCanyon", def: "对流行角色的丑化重构，肉体恐怖，夸张的细节。", core: "逻辑：偶像的堕落。揭示流行文化背后的贪婪与空洞。" },
        { id: "indie_umaru", name: "干物妹 (Himouto)", def: "二头身切换，Q版，不仅是可爱，是生活状态的切换。", core: "逻辑：双重生活。在外光鲜亮丽，在家彻底废柴。" },
        { id: "indie_stick_figure", name: "火柴人打斗 (Stick Fight)", def: "Alan Becker。流畅的动作，无视背景，纯粹的物理交互。", core: "逻辑：动能的纯粹。剥离一切装饰，只保留动作本身。" }
    ]
  },
  // =================================================================
  // 11. 恐怖与怪诞 (Horror & Grotesque)
  // =================================================================
  {
    id: "anim_horror",
    name: "11. 恐怖与怪诞 (Horror & Grotesque)",
    desc: "探索动画媒介特有的恐怖感，身体变形与精神污染。",
    items: [
        { id: "horror_svankmajer", name: "史云梅耶 (Svankmajer)", def: "肉块，食物，定格动画，触觉的不适感，超现实。", core: "逻辑：物质的叛变。无生命物体突然拥有了恶意的生命。" },
        { id: "horror_midori", name: "地下幻灯剧画 (Midori)", def: "昭和复古，马戏团，极度猎奇，静态画面的冲击。", core: "逻辑：残酷的奇观。将不幸与畸形作为展示品。" },
        { id: "horror_yamishibai", name: "暗芝居 (Yamishibai)", def: "纸芝居风格，面具，都市传说，跳吓，粗糙的纸质感。", core: "逻辑：未知的日常。恐怖就隐藏在熟悉的街角。" },
        { id: "horror_perfect_blue", name: "未麻的部屋 (Perfect Blue)", def: "今敏。精神分裂，镜子，舞台灯光，偶像的崩坏。", core: "逻辑：身份的迷失。现实与幻觉的界限被彻底抹除。" },
        { id: "horror_mononoke", name: "怪化猫 (Mononoke)", def: "浮世绘风格，华丽的色彩，封闭空间，心理具象化。", core: "逻辑：形/真/理。斩妖先斩心，恐怖源于人的执念。" },
        { id: "horror_junji_ito_anim", name: "伊藤润二动画 (Junji Ito)", def: "线条阴影，螺旋，身体扭曲，不可理喻的执着。", core: "逻辑：强迫症。对某种图形或概念的病态迷恋导致毁灭。" },
        { id: "horror_happy_tree", name: "快乐树朋友 (HTF)", def: "极度可爱的画风，极度血腥的死亡，反差。", core: "逻辑：可爱的脆弱。生命在暴力的物理法则面前不堪一击。" },
        { id: "horror_coraline", name: "鬼妈妈 (Coraline)", def: "纽扣眼睛，另一个世界，定格动画的诡异感。", core: "逻辑：完美的陷阱。想要的一切都有，代价是眼睛（灵魂）。" },
        { id: "horror_mad_god", name: "疯神 (Mad God)", def: "蒂贝特。各种材质的混合，地狱景观，无对白，纯粹的噩梦。", core: "逻辑：工业地狱。在一个无意义的循环中被生产和毁灭。" },
        { id: "horror_another", name: "Another", def: "玩偶，雨伞，电梯。死者是谁？因果律杀人。", core: "逻辑：不可抗力。死亡像机关一样被触发，无法逃避。" }
    ]
  },
  // =================================================================
  // 12. 运动与竞技 (Sports & Competition)
  // =================================================================
  {
    id: "anim_sports",
    name: "12. 运动与竞技 (Sports & Competition)",
    desc: "将体育运动夸张化、必杀技化，强调心流与突破。",
    items: [
        { id: "sport_slamdunk", name: "灌篮高手 (Slam Dunk)", def: "井上雄彦。写实比例，汗水，最后10秒的漫长内心戏。", core: "逻辑：青春的遗憾。不仅是赢，更是关于失败和成长。" },
        { id: "sport_prince_tennis", name: "网球王子 (Prince Tennis)", def: "杀人网球。恐龙灭绝，黑洞，把对手打飞到看台。", core: "逻辑：战力崩坏。运动只是超能力战斗的载体。" },
        { id: "sport_blue_lock", name: "蓝色监狱 (Blue Lock)", def: "拼图特效，怪兽气场，极端的利己主义，锁链。", core: "逻辑：吞噬。为了成为最强，必须粉碎他人的梦想。" },
        { id: "sport_haikyuu", name: "排球少年 (Haikyuu)", def: "乌鸦，慢动作扣杀，团队配合，视线诱导。", core: "逻辑：才能与努力。天才与凡人的差异，以及团队的化学反应。" },
        { id: "sport_ping_pong", name: "乒乓 (Ping Pong)", def: "汤浅政明。扭曲的透视，手绘线条，英雄的归来。", core: "逻辑：才能的残酷。有人是鸟，有人只是树。" },
        { id: "sport_kuroko", name: "黑子的篮球 (Kuroko)", def: "Zone状态，眼中的光流，隐形人，奇迹的世代。", core: "逻辑：光与影。通过辅助（影）来衬托主攻（光）。" },
        { id: "sport_initial_d", name: "头文字D (Initial D)", def: "Eurobeat音乐，3D赛车，漂移惯性，深夜山路。", core: "逻辑：弯道的艺术。普通车战胜高性能车的技巧胜利。" },
        { id: "sport_yuri_ice", name: "冰上的尤里 (Yuri on Ice)", def: "花样滑冰，细腻的肢体动作，爱 (Eros/Agape)。", core: "逻辑：表现力。技术是基础，情感才是打动裁判的关键。" },
        { id: "sport_megalo_box", name: "机甲拳击 (Megalo Box)", def: "外骨骼，沙漠，粗糙线条，贫民窟的野狗。", core: "逻辑：肉体的证明。在机械强化的时代，追求肉身的真实痛感。" },
        { id: "sport_uma_musume", name: "赛马娘 (Uma Musume)", def: "拟人化，奔跑，演唱会，偶像与竞技的结合。", core: "逻辑：继承之名。背负着现实原型的历史和宿命去奔跑。" }
    ]
  },
  // =================================================================
  // 13. 少女与日常 (Slice of Life & Moe)
  // =================================================================
  {
    id: "anim_slice",
    name: "13. 少女与日常 (Slice of Life & Moe)",
    desc: "空气系、萌系，关注微小的情感波动与日常生活。",
    items: [
        { id: "slice_k_on", name: "轻音少女 (K-On!)", def: "山田尚子腿，下午茶，乐器，毕业的感伤。", core: "逻辑：乌托邦。没有男性的世界，永恒的放课后。" },
        { id: "slice_nichijou", name: "日常 (Nichijou)", def: "极度夸张的反应，核爆，甚至连甚至都显得不正常。", core: "逻辑：日常的奇迹。每一个瞬间都是奇迹的连续。" },
        { id: "slice_bocchi", name: "孤独摇滚 (Bocchi)", def: "实拍融合，社恐的内心崩溃，崩坏的作画，故障艺术。", core: "逻辑：社恐的共鸣。将内心的尖叫具象化为视觉灾难。" },
        { id: "slice_laid_back", name: "摇曳露营 (Yuru Camp)", def: "富士山，美食，篝火，静止的风景，合成器配乐。", core: "逻辑：独处的快乐。享受孤独，也享受偶尔的连接。" },
        { id: "slice_lucky_star", name: "幸运星 (Lucky Star)", def: "宅梗，巧克力螺怎么吃，无限的闲聊。", core: "逻辑：元在场。观众是在观察她们的生活，而不是看故事。" },
        { id: "slice_yuru_yuri", name: "摇曳百合 (Yuru Yuri)", def: "阿卡林（隐形主角），百合妄想，社团活动。", core: "逻辑：存在感的消失。通过“被忽视”来构建笑点。" },
        { id: "slice_non_non", name: "悠哉日常 (Non Non Biyori)", def: "长镜头空镜，乡村，喵帕斯，时间静止感。", core: "逻辑：乡愁。对已经逝去的田园生活的理想化凝视。" },
        { id: "slice_violet", name: "紫罗兰永恒花园 (Violet)", def: "打字机，义肢，书信，极度精细的光影。", core: "逻辑：爱的学习。不懂爱的人偶，通过他人的故事理解爱。" },
        { id: "slice_dragon_maid", name: "龙女仆 (Dragon Maid)", def: "非人生物融入日常，尾巴肉，跨物种的家庭。", core: "逻辑：异类的接纳。强大的龙在人类社会中寻找归属。" },
        { id: "slice_totoro", name: "龙猫 (Totoro)", def: "乡间巴士，橡树果，看不见的生物，童真。", core: "逻辑：只有孩子能看见。相信即存在。" }
    ]
  },
  // =================================================================
  // 14. 赛博与科幻 (Cyber & Sci-Fi)
  // =================================================================
  {
    id: "anim_scifi",
    name: "14. 赛博与科幻 (Cyber & Sci-Fi)",
    desc: "对未来的想象，技术对人的异化，太空歌剧。",
    items: [
        { id: "sci_akira", name: "阿基拉 (Akira)", def: "大友克洋。光流尾灯，肉块膨胀，超能力失控，新东京。", core: "逻辑：力量的代价。无法控制的力量最终会导致自我毁灭。" },
        { id: "sci_gits", name: "攻壳机动队 (GITS)", def: "光学迷彩，电子脑，九龙城寨风格的城市，哲学思辨。", core: "逻辑：灵魂的定义。当记忆和身体都可以伪造，我还是我吗？" },
        { id: "sci_cowboy_bebop", name: "星际牛仔 (Bebop)", def: "爵士乐，功夫，太空飞船，过去的幽灵，我是谁。", core: "逻辑：梦的醒来。生活在过去的人，无法面对未来。" },
        { id: "sci_serial_lain", name: "玲音 (Lain)", def: "电线杆，阴影斑驳，网络与现实的界限模糊，神。", core: "逻辑：连接的异化。网络世界才是真实，肉体只是全息投影。" },
        { id: "sci_cyber_edge", name: "边缘行者 (Edgerunners)", def: "扳机社。霓虹色块，残影，斯安威斯坦，月球单程票。", core: "逻辑：燃烧殆尽。在这个吃人的城市，只有死得轰轰烈烈才算活过。" },
        { id: "sci_psycho_pass", name: "心理测量者 (Psycho-Pass)", def: "支配者手枪，色相浑浊，系统判断，免罪体质。", core: "逻辑：完美的暴政。为了绝对的安全，交出自由意志。" },
        { id: "sci_ergo_proxy", name: "死亡代理人 (Ergo Proxy)", def: "废土，苍白的妆容，哲学引用，寻找造物主。", core: "逻辑：存在的理由。被遗弃的神寻找自己的创造者。" },
        { id: "sci_texhnolyze", name: "机魂末世录 (Texhnolyze)", def: "断肢，地下都市，绝望，无声的暴力，终结。", core: "逻辑：进化的死胡同。人类无论选择肉体还是机械，终局都是灭亡。" },
        { id: "sci_planetes", name: "星空清理者 (Planetes)", def: "太空垃圾，凯斯勒效应，职业病，平凡的宇航员。", core: "逻辑：太空的现实。不是英雄史诗，而是危险的日常工作。" },
        { id: "sci_paprika", name: "红辣椒 (Paprika)", def: "梦境游行，玩偶，色彩爆炸，潜意识入侵现实。", core: "逻辑：狂欢的噩梦。被压抑的欲望在梦境中集结成灾难。" }
    ]
  },
  // =================================================================
  // 15. 奇幻与异世界 (Fantasy & Isekai)
  // =================================================================
  {
    id: "anim_fantasy",
    name: "15. 奇幻与异世界 (Fantasy & Isekai)",
    desc: "架空世界，魔法体系，勇者与魔王，转生。",
    items: [
        { id: "fan_frieren", name: "芙莉莲 (Frieren)", def: "时间流逝，对魔王的追忆，平淡的魔法，寿命论。", core: "逻辑：英雄之后。在漫长的生命中重新理解人类的短暂情感。" },
        { id: "fan_dungeon_meshi", name: "迷宫饭 (Dungeon Meshi)", def: "生态系统，烹饪魔物，复活机制，吃与被吃。", core: "逻辑：生存的闭环。冒险本质上就是进食和防止被进食。" },
        { id: "fan_mushoku", name: "无职转生 (Mushoku)", def: "精细的背景，语言学习，成长的猥琐与救赎，家族。", core: "逻辑：重来一次。带着前世的悔恨，认真地度过第二人生。" },
        { id: "fan_rezero", name: "从零开始 (Re:Zero)", def: "死亡回归，魔女的余香，绝望的循环，颜艺。", core: "逻辑：信息的代价。通过无数次惨死来获取通关的情报。" },
        { id: "fan_konosuba", name: "美好世界 (Konosuba)", def: "崩坏的作画，智障女神，爆裂魔法，反套路。", core: "逻辑：废柴的快乐。在一个充满Bug的异世界里混吃等死。" },
        { id: "fan_overlord", name: "骨王 (Overlord)", def: "满级大号，迪米乌哥斯，反派视角，征服世界。", core: "逻辑：职场的误解。部下以为我在深谋远虑，其实我在空气斗智。" },
        { id: "fan_slime", name: "史莱姆 (Slime)", def: "捕食者，建国，魔王，进化，种田。", core: "逻辑：吞噬进化。通过吃掉强者来获得力量和拟态。" },
        { id: "fan_fate", name: "Fate系列 (Fate)", def: "英灵召唤，令咒，宝具，无限剑制，圣杯战争。", core: "逻辑：理想的碰撞。为了各自的正义互相厮杀。" },
        { id: "fan_rank_kings", name: "国王排名 (Ranking of Kings)", def: "绘本风，哑巴王子，影子，残酷的童话。", core: "逻辑：弱者的力量。即使最弱小，也能通过勇气成为国王。" },
        { id: "fan_ancient_magus", name: "魔法使的新娘 (Magus Bride)", def: "荆棘，骨头头骨，英伦田园，古老的魔法。", core: "逻辑：异类的爱。怪物与祭品之间的互相救赎。" }
    ]
  },
  // =================================================================
  // 16. 复古与邪典 (Retro & Cult)
  // =================================================================
  {
    id: "anim_retro_cult",
    name: "16. 复古与邪典 (Retro & Cult)",
    desc: "80-90年代OVA风格，赛璐璐质感，以及非主流的怪诞作品。",
    items: [
        { id: "retro_vaporwave", name: "蒸汽波动画 (Vaporwave Anime)", def: "美少女战士变身，粉紫色，低保真音乐，城市夜景。", core: "逻辑：失落的未来。对80年代日本泡沫经济时期的虚假怀念。" },
        { id: "retro_ova_gore", name: "OVA暴力美学 (80s Gore)", def: "恶魔人/暴力杰克。夸张的肌肉，触手，断肢，手绘赛璐璐。", core: "逻辑：感官刺激。由于没有电视审查而产生的极端暴力和色情。" },
        { id: "retro_city_hunter", name: "城市猎人 (City Hunter)", def: "西装，左轮，美女，新宿，Get Wild。", core: "逻辑：硬汉与好色。都市游侠的浪漫传说。" },
        { id: "retro_saint_seiya", name: "圣斗士 (Saint Seiya)", def: "圣衣，小宇宙，天马流星拳，希腊神话，燃烧。", core: "逻辑：意志的燃烧。倒下无限次，只要信念在就能站起来。" },
        { id: "cult_lain", name: "玲音 (Lain)", def: "电线杆，阴影，网络之神，存在主义。", core: "逻辑：连接即存在。肉体只是灵魂连接网络的终端。" },
        { id: "cult_utena", name: "少女革命 (Utena)", def: "玫瑰，决斗场，倒置的城堡，王子，影绘。", core: "逻辑：打破蛋壳。为了长大，必须粉碎保护自己的虚假世界。" },
        { id: "cult_flcl", name: "特别的她 (FLCL)", def: "吉他，机器人，漫画分镜，青春期隐喻，枕头。", core: "逻辑：青春的躁动。成长就是脑门上长出机器人。" },
        { id: "cult_mononoke", name: "怪化猫 (Mononoke)", def: "和纸材质，浮世绘，天平，形真理。", core: "逻辑：除魔即解心。妖怪是人类执念的具象化。" },
        { id: "cult_kaiba", name: "海马 (Kaiba)", def: "汤浅政明。手冢治虫画风，记忆芯片，换身体，遗忘。", core: "逻辑：记忆与肉体。如果记忆可以买卖，爱还存在吗？" },
        { id: "cult_mind_game", name: "心理游戏 (Mind Game)", def: "实拍脸，极速剪辑，无限奔跑，逃离鲸鱼。", core: "逻辑：活在当下。人生就是一场没有刹车的狂奔。" }
    ]
  }
];
