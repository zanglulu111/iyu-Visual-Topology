import { LibraryCategoryDef } from '../../../types';

export const IDEO_DESIRE: LibraryCategoryDef = {
    id: "ideo_desire",
    name: "1. 欲望与消费 (Desire & Consumption)",
    nameEn: "1. Desire & Consumption",
    desc: "关于快乐、物质与注意力的信仰。",
    descEn: "Beliefs about pleasure, materiality, and attention.",
    items: [
      {
        id: "consumerism",
        name: "消费主义", nameEn: "Consumerism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "我买故我在。通过购买商品来构建身份，商品具有图腾般的魔力。",
        defEn: "I buy, therefore I am. Constructing identity through purchasing goods; commodities have totem-like magic.",
        core: "将符号消费视为填补存在主义空洞（M1）的唯一手段。",
        coreEn: "Treating symbolic consumption as the only means to fill the existential void (M1).",
        reference: "《搏击俱乐部》被宜家家具塞满公寓却填不满内心不得不靠打拳确诊存在的打工人；《美国精神病人》靠炫耀顶级名片和昂贵护肤品维系自我的华尔街精英。",
        referenceEn: "\"Fight Club\" IKEA-stuffed apartments failing to fill internal voids; \"American Psycho\" elites maintaining identity via business cards and skincare."
      },
      {
        id: "hedonism",
        name: "享乐主义", nameEn: "Hedonism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "多巴胺至上。避苦求乐是唯一道德。身体是用来挥霍的。",
        defEn: "Dopamine supreme. Avoiding pain and seeking pleasure is the only morality. The body is meant to be squandered.",
        core: "为了维持快感阈值而不断升级刺激，最终面临感官的彻底过载。",
        coreEn: "Constantly escalating stimulation to maintain pleasure thresholds, ultimately facing complete sensory overload.",
        reference: "《华尔街之狼》无休止的吸毒滥交与金钱狂欢最终导致神经衰弱的证券狂徒；《堕落街》在柏林地下迪厅抛弃所有底线只为今朝有酒的颓废青年。",
        referenceEn: "\"The Wolf of Wall Street\" endless drugs and sex leading to burnout; \"Christiane F.\" Berlin youth abandoning bottom lines for tonight's high."
      },
      {
        id: "attention_worship",
        name: "流量拜物教", nameEn: "Attention Fetishism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "生活是一场表演，数据（点赞/关注）是衡量价值的唯一标准。",
        defEn: "Life is a performance; data (likes/follows) is the only measure of value.",
        core: "真实的自我在完美的线上人设前彻底溶解。掉粉等同于生物学死亡。",
        coreEn: "The authentic self dissolves completely before the perfect online persona. Losing followers equals biological death.",
        reference: "《黑镜：急转直下》只要评分掉到特定数值连买咖啡资格都会被剥夺的点赞社会；《楚门的世界》为了保持收视率不惜强行剥夺一个人全部真实人生的娱乐至死。",
        referenceEn: "\"Black Mirror: Nosedive\" a society where low ratings revoke coffee rights; \"The Truman Show\" stripping reality for peak broadcast ratings."
      },
      {
        id: "libertarianism_radical",
        name: "极端自由意志", nameEn: "Radical Libertarianism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "私有财产神圣不可侵犯，拒斥任何集体约束，金钱万能。",
        defEn: "Private property is sacred and inviolable, rejecting any collective constraint, money is omnipotent.",
        core: "自私被美化为神圣的独立。以孤岛心态面对世界崩塌。",
        coreEn: "Selfishness is beautifully framed as sacred independence. Facing global collapse with an island mentality.",
        reference: "《生化奇兵》不设任何法律只认绝对私产与竞争最终毁于一旦的极渊海底城；《疯狂的麦克斯》谁掌握了资源的私有权谁就能随意决定他人生死废土法则。",
        referenceEn: "\"BioShock\" Rapture falling to ruin by rejecting law for absolute private property; \"Mad Max\" wasteland rules where owning resources means dictating lives."
      },
      {
        id: "commodity_fetishism",
        name: "商品拜物教", nameEn: "Commodity Fetishism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "相信物理物品有灵魂或神力。通过拥有特定物品来补全人格的主体性。",
        defEn: "Believing physical objects have souls/divine power. Completing personality subjectivity by possessing specific objects.",
        core: "对无生命物体的病态迷恋。将人的权力出让给物的超载寄生。",
        coreEn: "Pathological obsession with inanimate objects. Yielding human power to the overloaded parasitism of objects.",
        reference: "《指环王》把一枚金戒指奉为比生命还重要的宝贝（My Precious）彻底迷失自我的咕噜；《欲望都市》将特定名牌高跟鞋视作自己全部女性魅力灵魂的夸张崇拜。",
        referenceEn: "\"Lord of the Rings\" Gollum treating a gold ring as dearer than life; \"Sex and the City\" extreme worship of designer shoes as the female soul."
      },
      {
        id: "aestheticism",
        name: "唯美主义", nameEn: "Aestheticism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "为了艺术而艺术。美高于道德和生命，生命自身就是用来创作最后一件艺术品的耗材。",
        defEn: "Art for art's sake. Beauty is above morality and life; life itself is consumable material to create the final artwork.",
        core: "极致的美绝不仅是皮相，往往伴随着对人体与伦理的极致残忍切割。",
        coreEn: "Extreme beauty is never just skin-deep; it often involves extreme cruel severances of body and ethics.",
        reference: "《香水》为了寻找到世界上最极致的芳香不惜连环谋杀美丽少女提取体香的狂人；《霓虹恶魔》在洛杉矶模特圈为了追求极致的视觉美感不惜吃人的可怕血腥秀。",
        referenceEn: "\"Perfume\" a madman murdering girls to extract the ultimate scent; \"The Neon Demon\" LA models cannibalizing for extreme visual aesthetics."
      },
      {
        id: "carnivalism",
        name: "狂欢主义", nameEn: "Carnivalism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "巴赫金式的疯狂节庆。颠覆现有等级制度，通过集体的混乱与僭越来获得短暂重生。",
        defEn: "Bakhtinian crazy festival. Subverting existing hierarchies, gaining brief rebirth through collective chaos and transgression.",
        core: "充满面具与火把的短暂释放，旨在遮罩那无法打破的永恒制裁压抑。",
        coreEn: "Brief release filled with masks and torches, aiming to mask the unbreakable eternal sanctioning repression.",
        reference: "《人类清除计划》每年有一天法律无效全民戴上面具持枪上街狂欢杀戮的泄压阀；《小丑》在游行抗议中化好浓妆掀起整个高谭市病态暴乱盛宴的反派。",
        referenceEn: "\"The Purge\" a yearly 12-hour lawless carnival releasing societal pressure; \"Joker\" sparking a chaotic parade feeding Gotham's sick riotous feast."
      },
      {
        id: "minimalism_cult",
        name: "极简邪教", nameEn: "Cult of Minimalism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "少即是多。通过不断地丢弃物品与关系，抵达对“空无”环境的偏执狂热和神圣化。",
        defEn: "Less is more. Reaching paranoid fanaticism and sanctification of 'emptiness' by constantly discarding items and relationships.",
        core: "将整个生活剥离到只剩惨白的骨架，上演一场充满控制欲的高级禁欲秀。",
        coreEn: "Stripping life down to pale bare bones, staging a high-level ascetic show filled with control freaks.",
        reference: "《极简主义者》拼命扔光所有家具甚至切断社交认为空无一物才能直达神性的偏执狂；《断舍离》发展到后期连回忆和情感都要强行打扫一空的洁癖生活法。",
        referenceEn: "\"Minimalism\" discarding all furniture and ties believing emptiness equals divinity; \"Danshari\" extreme habits forcing out memories and emotions alike."
      },
      {
        id: "dataism",
        name: "数据主义", nameEn: "Dataism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "坚信万物本质皆为算法计算。数据处理与流转是宇宙最高价值，碳基人类不过是算法的临时算力载体。",
        defEn: "Convinced all things are algorithms. Data processing is the highest universal value; carbon-based humans are temporary carriers.",
        core: "所有的主观情感必须被贬低、量化并拆解为生化电子算法。追求无视伦理的极致效率优化。",
        coreEn: "All subjective emotions must be devalued, quantified, and dismantled into biochemical algorithms. Pursuing extreme efficiency overriding ethics.",
        reference: "《黑客帝国》认为人类不过是一节干电池而机器算法才是宇宙真善美的主宰者；《西部世界》母公司通过头盔扫描收集人类所有行为数据彻底算出人性底牌的妄念。",
        referenceEn: "\"The Matrix\" seeing humans as batteries while code reigns supreme; \"Westworld\" corporations harvesting biometric data to entirely map human nature."
      },
      {
        id: "accelerationism_desire",
        name: "欲望加速主义", nameEn: "Libidinal Accelerationism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "与其去抵抗资本主义，不如猛烈加大油门，将系统的所有欲望阈值推向极致，直至崩溃或奇异飞升。",
        defEn: "Instead of resisting capitalism, violently floor the gas pedal, pushing all system desire thresholds to the extreme until collapse.",
        core: "一场关于疯狂过剩数字洪流的死磕。对速度、故障与异化的狂热哲学性赞颂。",
        coreEn: "A death-match with insane overflowing digital torrents. Fanatical philosophical praise for speed, glitches, and alienation.",
        reference: "《赛博朋克2077》明知义体化会带来赛博精神病也要向脑子里死命塞入神经芯片的疯子；《裸体午餐》在毒品致幻中不停推高剂量直到世界彻底崩溃解体的瘾君子。",
        referenceEn: "\"Cyberpunk 2077\" jamming chips into brains despite cyberpsychosis; \"Naked Lunch\" junkies pushing doses until reality fully disintegrates."
      },
      {
        id: "gamification",
        name: "游戏化", nameEn: "Gamification",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "人生皆是电子练级域。将生命体征和人际关系极度量化为经验值XP与成就徽章，以追求高频的正反馈循环。",
        defEn: "Life is an electronic leveling zone. Extremely quantifying vitals and relations into XP and badges, seeking high-frequency loops.",
        core: "将最为严肃的流血与生离死别，降维转化为轻浮的屏幕读条。极度渴望读档重来的幻象。",
        coreEn: "Reducing solemn blood and death into frivolous screen loading bars. Extremely craving the illusion of a respawn load trigger.",
        reference: "《头号玩家》把所有真实资本和尊严全部换成绿洲积分连打工都像做日常任务的平民；《黑镜》踩脚踏车获取里程点数只为在选秀节目上前进一步的荒诞社会。",
        referenceEn: "\"Ready Player One\" converting life dignity into OASIS coins treating work as daily quests; \"Black Mirror\" bicycling for credits to enter talent shows."
      },
      {
        id: "epicureanism",
        name: "伊壁鸠鲁主义", nameEn: "Epicureanism",
        group: "1. 欲望与消费", groupEn: "1. Desire & Consumption",
        def: "理性的保守主义享乐。通过压抑无限膨胀的欲望，追求绝对的宁静，极度规避一切可能引发痛苦和恐惧的世俗纠葛。",
        defEn: "Rational conservative hedonism. Pursuing absolute tranquility by repressing swelling desires, avoiding secular entanglements that bring pain.",
        core: "物理避世与乱世干涉之间的抗争。建立在城邦废墟之外的理想哲学花园。",
        coreEn: "The struggle between physical retreat and worldly interference. The ideal philosopher's garden built outside the ruins of the polis.",
        reference: "《瓦尔登湖》远离喧嚣在森林里建立简朴而自足的避世隐居小木屋以逃避工业痛苦；《死亡诗社》教导学生抓住当下只去吸吮人生最隐秘精髓但绝不沾染功名的避风港。",
        referenceEn: "\"Walden\" retreating into woods to build austere cabins dodging industrial pain; \"Dead Poets Society\" seizing the day to suck life's marrow, avoiding fame."
      }
    ]
  };
