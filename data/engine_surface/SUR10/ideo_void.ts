import { LibraryCategoryDef } from '../../../types';

export const IDEO_VOID: LibraryCategoryDef = {
    id: "ideo_void",
    name: "5. 虚无与反叛 (Void & Rebellion)",
    nameEn: "5. Void & Rebellion",
    desc: "关于无意义、混乱、破坏与消极抵抗的信仰。",
    descEn: "Beliefs about meaninglessness, chaos, destruction, and passive resistance.",
    items: [
      {
        id: "nihilism_active",
        name: "积极虚无", nameEn: "Active Nihilism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "深知上帝已死，一切旧有的价值与意义皆为虚妄，因此要在废墟之上以『超人』之姿创造属于自己的新价值。",
        defEn: "Knowing fully that God is dead and all old values and meanings are delusional; therefore, creating one's own new values on the ruins like an 'Übermensch'.",
        core: "毁灭后的极度狂喜与不受限制的创造力。在深渊的边缘一边大笑一边自己封神。",
        coreEn: "Extreme ecstasy after destruction and unrestricted creativity. Laughing at the edge of the abyss while crowning oneself a god.",
        reference: "《查拉图斯特拉如是说》踩着上帝的葬礼在电闪雷鸣中狂笑着宣布要自我立法重估一切价值的狂人；《小丑》在后台抹着鲜血般的口红既然生活毫无逻辑那就让我来给它画上最疯狂的笑脸。",
        referenceEn: "\"Thus Spoke Zarathustra\" laughing over God's grave declaring the revaluation of all things; \"Joker\" smearing blood-lipstick realizing life makes no sense so injecting sheer chaos."
      },
      {
        id: "nihilism_passive",
        name: "消极虚无", nameEn: "Passive Nihilism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "既然一切最终都会归于热寂和虚无，那么任何挣扎、努力和创造都是没有意义的。",
        defEn: "Since everything will ultimately perish in heat death and the void, any struggle, effort, or creation is meaningless.",
        core: "极其平庸的“末人”状态。彻底丧失了欲望，只剩下为了活着而活着的行尸走肉。",
        coreEn: "Extremely mediocre 'Last Man' state. Completely lost desire, reduced to a walking corpse living just for the sake of living.",
        reference: "《猜火车》知道注射海洛因会烂在下水道但既然全世界都是狗屎不如瘫在破长条沙发上发呆沉沦；《马男波杰克》彻底看穿了好莱坞的虚伪后连爬起床的动力都失去只能日复一日灌醉自己等死。",
        referenceEn: "\"Trainspotting\" knowing heroin leads to squalor but choosing to rot on the sofa over life; \"Bojack Horseman\" paralyzing depression after realizing Hollywood's hollow core."
      },
      {
        id: "cynicism",
        name: "犬儒嘲弄", nameEn: "Cynicism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "看穿了一切崇高理想背后的虚伪，不再相信任何实质性的变革。通过辛辣的嘲笑与自我贬低来获取智力优越感。",
        defEn: "Seeing through the hypocrisy behind all noble ideals, no longer believing in any substantive change. Gaining intellectual superiority through biting mockery and self-deprecation.",
        core: "极度清醒的痛苦与同流合污的矛盾。明明知道世界烂透了，但除了扮演刺客或小丑，什么也不做。",
        coreEn: "The contradiction of extremely sober agony and complicity. Knowing the world is rotten to the core, but doing nothing except playing the assassin or the clown.",
        reference: "《瑞克和莫蒂》瑞克对全宇宙的崇高拯救行动都嗤之以鼻用打嗝和最脏的烂话揭穿一切官僚虚伪的绝顶天才；《神探夏洛克》一眼看穿雇主的虚弱软肋用极度刻薄的推理将警局傲慢碾压成碎渣的好戏者。",
        referenceEn: "\"Rick and Morty\" Rick belching past all cosmic idealism with biting mockery of bureaucratic rot; \"Sherlock\" crushing police arrogance to dust with extremely mean hyper-deduction."
      },
      {
        id: "anarchism",
        name: "安那其主义", nameEn: "Anarchism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "极其激烈地反抗一切不合理的权威（国家机器、大卫无形的资本）。追求绝对的去中心化、个体自治与底层互助。",
        defEn: "Extremely intensely defying all unreasonable authorities (state machines, invisible capital). Pursuing absolute decentralization, individual autonomy, and grassroots mutual aid.",
        core: "自由就是不被任何规则异化。为了不被统治，宁愿选择随时会流血的混乱。",
        coreEn: "Freedom is not being alienated by any rule. To avoid being ruled, rather choose chaos that could bleed at any time.",
        reference: "《V字仇杀队》用黑色披风和盖伊面具将炸药塞满整个英国议会大厦彻底炸烂强权极权的浪漫黑客；《搏击俱乐部》将无数高跟鞋和电视机扔出窗外在大楼底下乱战旨在废除所有等级制度的地下室狂徒。",
        referenceEn: "\"V for Vendetta\" blowing up Parliament wearing a Guy Fawkes mask to shatter totalitarianism; \"Fight Club\" basement brawlers tossing TVs out to abolish all financial order."
      },
      {
        id: "antinatalism",
        name: "反出生主义", nameEn: "Antinatalism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "生命本身就是一场被迫签署的残酷契约，充斥着苦难。因此，终止生育，阻断痛苦的传递，才是对未出生者最大的慈悲。",
        defEn: "Life itself is a cruel contract signed by force, full of suffering. Therefore, terminating reproduction and blocking the transmission of pain is the greatest mercy to the unborn.",
        core: "对存在之根本的否定。看着摇篮里的婴儿，想象出的却是他未来一生必然经历的病痛与死亡。",
        coreEn: "Fundamental denial of existence. Looking at a baby in a cradle, but anticipating the inevitable illness and death it will experience throughout its coming life.",
        reference: "《真探》拉斯特在车里冷酷地宣称人类进化出了多余的自我意识最体面的结局就是停止繁衍携手步入灭亡；《进击的巨人》吉克坚决执行安乐死计划剥夺所有艾尔迪亚人的生殖能力认为不出生就是终极救赎。",
        referenceEn: "\"True Detective\" Rust demanding humanity stop breeding and walk hand in hand to extinction; \"Attack on Titan\" Zeke erasing Eldian reproductive capacity as the ultimate mercy."
      },
      {
        id: "absurdism",
        name: "荒诞主义", nameEn: "Absurdism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "世界是无理性的，人类寻找意义的本能与这无意义的世界发生了剧烈碰撞。直面这种荒诞，不自杀，不皈依，反而在反抗中寻找快乐。",
        defEn: "The world is irrational; human instinct to find meaning violently collides with this meaningless world. Face this absurdity—neither commit suicide nor convert—but find joy in the rebellion instead.",
        core: "加缪式的西西弗斯。既然推上去的石头注定会滚下来，那么推石头本身就是对诸神最傲慢的嘲弄。",
        coreEn: "Camus-esque Sisyphus. Since the pushed stone is doomed to roll down, pushing the stone itself is the most arrogant mockery of the gods.",
        reference: "《局外人》默尔索在母亲葬礼上没有哭泣在沙滩上因为阳光太刺眼而莫名其妙开枪杀人的冷漠滑稽；《等待戈多》两个流浪汉在光秃秃的树下日复一日地等待一个永远不会来的救世主期间只剩荒谬的废话。",
        referenceEn: "\"The Stranger\" Meursault shooting a man just because the sun glared in his eyes; \"Waiting for Godot\" tramps talking infinite nonsense under a dead tree waiting for nothing."
      },
      {
        id: "punk_ideology",
        name: "叛逆朋克", nameEn: "Punk",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "DIY精神，反体制，愤怒，破坏。用最粗糙、最脏乱差的方式，去撕退社会精英们虚饰的精致面具。",
        defEn: "DIY spirit, anti-establishment, anger, destruction. Tearing off the hypocritically refined masks of social elites with the roughest, dirtiest methods.",
        core: "极其外放的破坏欲。用噪音掩盖绝望，用丑陋对抗虚荣。“No Future!”",
        coreEn: "Extremely extroverted desire for destruction. Using noise to cover despair, using ugliness to fight vanity. 'No Future!'",
        reference: "《赛博朋克2077》强尼银手拿着吉他和核弹单枪匹马冲进荒坂塔用大火和摇滚将企业帝国化为灰烬的怒吼；《疯狂的麦克斯》用满身铁刺和喷火红吉他车在黄沙上肆意咆哮完全不讲任何文法逻辑的战郎。",
        referenceEn: "\"Cyberpunk 2077\" Johnny Silverhand nuking Arasaka Tower with a guitar and rage; \"Mad Max\" roaring across the sand with flamethrower-guitars rejecting all grammar of peace."
      },
      {
        id: "misanthropy",
        name: "极端厌世", nameEn: "Misanthropy",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "极度讨厌人类这一物种。认为人类是地球的病毒，贪婪且愚蠢，渴望看到人类文明的自我毁灭。",
        defEn: "Extreme hatred toward the human species. Believing humans are an earth virus, greedy and stupid, constantly craving to witness the self-destruction of human civilization.",
        core: "孤独而刻薄的优越感。与其与人类同流合污，不如与野兽或无机物为伴。",
        coreEn: "Lonely and mean-spirited superiority. Rather companion beasts or inorganics than wallow in the mire with humanity.",
        reference: "《黑客帝国》史密斯特工掐着尼奥的脖子厌恶地说人类就像一种会在当地拼命繁殖消耗到底的臭虫恶臭不堪；《七宗罪》老警官看着满街的妓女与毒贩深深叹息这个世界根本不值得拯救只配在雨夜中发臭。",
        referenceEn: "\"The Matrix\" Agent Smith choking Neo declaring humans are a viral stench that must perish; \"Se7en\" Somerset sighing that the rotting city isn't worth saving in the rain."
      },
      {
        id: "fatalism_rebel",
        name: "反抗宿命", nameEn: "Rebelling Fate",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "明知终将失败，明知命运已被写死，但仍要拔剑冲锋。一种极致的、带着血色的悲剧英雄主义。",
        defEn: "Knowing full well failure is inevitable, knowing fate is written in stone, yet still drawing the sword to charge. An absolute, blood-tinged tragic heroism.",
        core: "知其不可而为之。‘哪怕诸神已经判决我死，我也要在死前砸碎他们的王座。’",
        coreEn: "Doing it knowing it's impossible. 'Even if the gods have sentenced me to die, I will smash their thrones before I perish.'",
        reference: "《斯巴达300勇士》列奥尼达面对遮天蔽日的百万波斯大军明知今夜必死还是狂笑着举起长矛刺穿暴君之血；《普罗米修斯》明知深空造物主一门心思要投放黑水灭绝地球也要开着飞船迎面撞成火球的撞击。",
        referenceEn: "\"300\" Leonidas knowing he will die today but laughing as he bleeds a god-king; \"Prometheus\" deliberately ramming the juggernaut ship to burn out the ancient Engineers' doom."
      },
      {
        id: "chaos_magic",
        name: "混沌魔法", nameEn: "Chaos Magic",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "信念即现实。只要我笃信，它就是真的。彻底解构一切科学与宗教法则，用纯粹的主观意志扭曲客观世界。",
        defEn: "Belief is reality. As long as I believe, it is true. Thoroughly deconstructing all scientific and religious laws, warping the objective world with pure subjective will.",
        core: "疯狂的信念力量。世界是一块任由疯狂者随意涂鸦的柔软画布。",
        coreEn: "Insane power of belief. The world is a soft canvas for the mad to scribble on at will.",
        reference: "《奇异博士》法师不再遵循机械物理而是用念力和折叠的维度空间像万花筒一样将高楼大厦任意扭曲拼接；《旺达与幻视》猩红女巫仅仅出于丧夫极痛直接用混沌魔法霸改了整个小镇所有人的前置物理记忆。",
        referenceEn: "\"Doctor Strange\" twisting NYC skyscrapers into kaleidoscope shards defying mechanical physics; \"WandaVision\" rewriting an entire town's memory and physics via sheer chaotic grief."
      },
      {
        id: "solipsism",
        name: "极端唯我", nameEn: "Solipsism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "笃定只有‘我’的意识是唯一的真实存在，宇宙不过是‘我’的一场梦，其他人全都是毫无灵魂的NPC演员。",
        defEn: "Certain that only 'my' consciousness is the sole true existence; the universe is but 'my' dream, and everyone else are soulless NPC actors.",
        core: "绝对的、如宇宙黑洞般的自我封闭与孤独。因为他者不存在，所以对所有人都冷酷得如同对待草芥。",
        coreEn: "Absolute self-closure and isolation like a cosmic black hole. Because others do not exist, treating everyone as coldly as weeds.",
        reference: "《黑客帝国》背叛者塞弗闭着眼睛吃下一大块假牛排坚信只要我的味蕾感到爽那么一切外界死活就都不存在；《楚门的世界》当楚门触摸到画布边缘时突然意识到除了自己全镇人都是安排好的空壳NPC的脊背发凉。",
        referenceEn: "\"The Matrix\" Cypher eating binary steak deciding only his tastebuds exist; \"The Truman Show\" Truman touching the sky-canvas realizing his entire reality is empty NPC shells."
      },
      {
        id: "iconoclasm",
        name: "碎除偶像", nameEn: "Iconoclasm",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "绝对不能容忍任何神圣与权威的象征。暴力地砸碎一切神像、纪念碑与不可侵犯的教条。",
        defEn: "Absolutely intolerant of any symbols of the sacred or authority. Violently smashing all idols, monuments, and inviolable dogmas.",
        core: "对任何试图固化、神圣化权力的极度警惕。一种要把神明从神坛上拖下来踩进泥里的暴烈狂热。",
        coreEn: "Extreme vigilance against any attempt to solidify or sanctify power. A violent fanaticism to drag gods off altars and stomp them into the mud.",
        reference: "《V字仇杀队》在一首宏大的古典交响乐中把象征至高绝对法律的中央老贝利法庭炸成满天缤纷烟花的绝美爆破；《搏击俱乐部》用自制肥皂炸药把所有代表跨国资本的华尔街信用卡光环大厦夷为平地。",
        referenceEn: "\"V for Vendetta\" reducing the Old Bailey to gorgeous fireworks amidst classical symphonies; \"Fight Club\" leveling corporate monoliths with soap-explosives to erase financial idols."
      }
    ]
  };
