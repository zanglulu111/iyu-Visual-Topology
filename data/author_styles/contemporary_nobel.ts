import { defineAuthorCategory } from './helpers';

export const CONTEMPORARY_NOBEL = defineAuthorCategory({
  id: 'sector_nobel_recent',
  name: 'XII. 近年诺奖文学·创伤与见证 (Recent Nobel Literature)',
  defaults: {
    transform: {
      time: '保留 SOURCE 事件骨架，以记忆、见证、漫长句法、极简停顿、殖民流亡或历史创伤重组叙述压力。',
      narrator: '叙述者具有当代文学的自我约束：不靠情节奇观夺权，而让语言形式承担伤口。',
      psychology: '人物心理通过身体脆弱、记忆裂缝、沉默、见证姿态、失语、迁徙、档案或艺术残响显影。',
      conflictRendering: '把原冲突染成历史创伤、流亡身份、社会规训、末日感、私人记忆与公共暴力之间的压力。',
      visualAssets: '档案、空房间、白色物件、海岸、移民行李、医院、雪、废村、剧场空台、旧照片、手稿和历史遗址。'
    },
    avoid: [
      '不要把诺奖动机写成正文台词；只能把它转译为叙事机制。',
      '不要把见证文学写成新闻摘要，必须保留小说场景和人物行动。'
    ]
  },
  items: [
    {
      id: 'krasznahorkai',
      name: '拉斯洛·克拉斯诺霍尔卡伊 (László Krasznahorkai)',
      description: '末日长句',
      styleTitle: '撒旦探戈式末日长句',
      example: '《撒旦探戈》《反抗的忧郁》',
      dna: '中欧荒诞与怪诞 + 末日恐惧 + 绵延长句 + 贫败村镇 + 欺骗性救世主 + 艺术余烬。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事染成一个正在腐烂的共同体里等待末日和假救世的长句；事件不变，但每个动作都像被泥、雨、谣言和不可停止的语言拖向灾变。',
      transform: {
        time: '时间像坏掉的探戈步伐：前进、倒退、重复、绕回，但关键事件顺序仍可复原。',
        narrator: '叙述者用长而卷曲的句子包围人物，像无法停下的思想、风声和集体谣言。',
        psychology: '人物心理通过等待、猜疑、疲惫、群体妄想、卑微希望和突然的黑色幽默显影。',
        sceneExpansion: '增加雨、泥、废村、酒馆、钟声、破窗、牲畜气味、公共农场、空旷广场和拖长的行走。',
        conflictRendering: '把阻断显影为腐败共同体、假先知、制度余烬、无法逃离的地理和集体自欺。',
        syntax: '长句为主，逗号推进，允许一口气拖过多个动作、传闻和心理拐弯；避免不可读。',
        visualAssets: '黑白雨幕、废弃村镇、酒馆、泥路、长镜头感、腐烂木门、阴云、集体等待。'
      },
      mAxisLens: {
        M1: '保留已选 M1 的缺失本质，只把主体显影为在腐败共同体中等待某个不存在救赎的人。',
        M2: '保留已选 M2 的真实穿刺，只把遭遇染成末日预兆、归来者、谣言、钟声、动物异常或共同体秩序的腐烂显形。',
        M4: '保留已选 M4 的阻断逻辑，只把阻断显影为贫败村镇、制度废墟、集体骗局或无法离开的地理。',
        M5: '保留已选 M5 的行动驱力，只把行动姿态染成等待、徘徊、跟随、盲信、绕圈和被雨水拖慢的移动。',
        M7B: '保留已选 M7B 的身体余痕，只让余痕带有雨水、泥、钟声、疲惫脚步和末日未至的残响。'
      }
    },
    {
      id: 'hankang',
      name: '韩江 (Han Kang)',
      description: '创伤诗性',
      styleTitle: '白色创伤诗学',
      example: '《素食者》《少年们来了》《不做告别》',
      dna: '强烈诗性散文 + 历史创伤 + 身体脆弱 + 生者与死者的连接 + 温柔与残酷并置。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成身体、历史暴力和沉默记忆之间的互相穿透；人物的伤口不是情节装饰，而是世界触碰身体的方式。',
      transform: {
        sceneExpansion: '增加白色物件、雪、病房、手、皮肤、植物、食物拒绝、尸体记忆和静物般的房间。',
        syntax: '句子克制、诗性、锋利，避免大声控诉。'
      }
    },
    {
      id: 'jonfosse',
      name: '约恩·福瑟 (Jon Fosse)',
      description: '不可说之声',
      styleTitle: '北海静默回声',
      example: '《有人将至》《七部曲》',
      dna: '重复句式 + 极简对白 + 宗教性静默 + 海岸光线 + 说不出口的内在运动。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件写成重复、停顿、微弱变化和不可说之物的回声；真正的冲突在话语无法抵达的地方持续。',
      transform: {
        dialogue: '对白极简、重复、迟疑，人物说出的少，说不出的多。',
        sceneExpansion: '增加海、黑夜、窗、船、空屋、灯、雪光、缓慢脚步。'
      }
    },
    {
      id: 'ernaux',
      name: '安妮·埃尔诺 (Annie Ernaux)',
      description: '临床记忆',
      styleTitle: '社会记忆解剖',
      example: '《悠悠岁月》《一个女人》',
      dna: '临床般清醒 + 私人记忆的阶级根系 + 羞耻、性别与社会规训 + 自传材料的冷处理。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物事件写成私人记忆如何被阶级、性别、教育、消费和时代话语塑形的冷静解剖。',
      transform: {
        narrator: '叙述者像在整理自己的证词，准确、克制、不美化。',
        sceneExpansion: '增加超市、学校、家庭照片、账本、旧衣物、公共语言、电视和消费物件。'
      }
    },
    {
      id: 'gurnah',
      name: '阿卜杜勒拉扎克·古尔纳 (Abdulrazak Gurnah)',
      description: '殖民流亡',
      styleTitle: '海岸流亡叙事',
      example: '《天堂》《来世》',
      dna: '殖民阴影 + 难民命运 + 跨文化缝隙 + 海岸贸易 + 温和但不妥协的见证。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物困境写成殖民历史、迁徙、语言差异和寄居身份在日常关系中的长期回声。',
      transform: {
        sceneExpansion: '增加港口、海岸、寄居房间、商铺、旧信、语言误差、行李和餐桌礼节。',
        conflictRendering: '把阻断显影为殖民遗产、护照、口音、家族债务、寄居资格和文化夹缝。'
      }
    },
    {
      id: 'gluck',
      name: '露易丝·格丽克 (Louise Glück)',
      description: '冷白诗声',
      styleTitle: '冷白神话独语',
      example: '《野鸢尾》《阿弗尔诺》',
      dna: '朴素而锋利的诗声 + 神话转写 + 家庭伤口 + austere beauty + 个体存在普遍化。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件压成冷白、简洁、近似神话独语的存在场；人物的私人痛苦像被冬光照亮。',
      transform: {
        syntax: '短句、留白、冷静，像诗但必须保留小说行动。',
        symbolism: '用花、雪、土、神话残片、母女/亲密关系和空院子回环。'
      }
    },
    {
      id: 'handke',
      name: '彼得·汉德克 (Peter Handke)',
      description: '感知漫游',
      styleTitle: '感知异乡步行',
      example: '《守门员面对罚点球时的焦虑》',
      dna: '感知细节 + 步行叙事 + 语言不信任 + 疏离观察 + 日常动作的陌生化。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成一个人在步行、观察、误听和语言失效中逐渐与世界脱节。',
      transform: {
        narrator: '叙述者贴近感知表面，少解释动机。',
        sceneExpansion: '增加车站、街道、球场、旅馆、路标、声音误认、玻璃反光和步行路线。'
      }
    },
    {
      id: 'tokarczuk',
      name: '奥尔加·托卡尔丘克 (Olga Tokarczuk)',
      description: '星群叙事',
      styleTitle: '星图式游牧叙事',
      example: '《云游》《雅各布之书》',
      dna: '碎片星群 + 游牧视角 + 神话/科学/历史互文 + 边境身份 + 温柔百科。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事拆成彼此照亮的碎片、地图、身体知识和历史边境；每个小片段都指向同一精神弧线。',
      transform: {
        time: '允许碎片化章节、跨时空联想和地图式并置，但不改变 SOURCE 的主事件。',
        sceneExpansion: '增加边境、地图、旅馆、动物、标本、身体器官、旧书和路线图。'
      }
    },
    {
      id: 'ishiguro',
      name: '石黑一雄 (Kazuo Ishiguro)',
      description: '记忆误认',
      styleTitle: '克制记忆背叛',
      example: '《长日将尽》《别让我走》',
      dna: '克制第一人称 + 记忆不可靠 + 礼貌语言 + 迟来的情感真相 + 自我欺骗。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物写成用体面、职责和礼貌叙述掩盖真相的人；结尾不是反转事实，而是让早已存在的事实终于伤人。',
      transform: {
        narrator: '叙述者克制、礼貌、回避关键痛点，可靠性逐渐松动。',
        psychology: '通过职责、服务、日程、旧照片、回忆修正和轻描淡写显影自欺。'
      }
    },
    {
      id: 'bobdylan',
      name: '鲍勃·迪伦 (Bob Dylan)',
      description: '民谣歌诗',
      styleTitle: '公路民谣寓言',
      example: '《Blowin’ in the Wind》《Highway 61 Revisited》',
      dna: '美国民谣传统 + 圣经/布鲁斯意象 + 公路、流浪者、抗议和谜语式歌词 + 口语预言。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件染成一首公路民谣式寓言；人物像在尘土、车站、酒吧和预言碎句之间寻找一个不肯回答的问题。',
      transform: {
        syntax: '句子可带歌谣反复、口语、问句和预言碎片，但不要输出歌词。',
        sceneExpansion: '增加公路、火车、旧吉他、酒吧、广播、尘土、路牌、抗议标语和夜车灯。'
      }
    },
    {
      id: 'alexievich',
      name: '斯韦特兰娜·阿列克谢耶维奇 (Svetlana Alexievich)',
      description: '复调见证',
      styleTitle: '众声证词纪念碑',
      example: '《切尔诺贝利的悲鸣》《锌皮娃娃兵》',
      dna: '口述史 + 多声部证词 + 苦难与勇气 + 普通人的历史碎片 + 纪录性复调。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成多名普通人的证词互相拼合；主角行动不变，但意义从众声的重复、矛盾和沉默里浮出。',
      transform: {
        narrator: '叙述者退后，让证词、录音、访谈和碎片场景承担压力。',
        sceneExpansion: '增加录音机、厨房访谈、旧制服、纪念碑、医院、档案盒、照片和停顿。'
      }
    },
    {
      id: 'modiano',
      name: '帕特里克·莫迪亚诺 (Patrick Modiano)',
      description: '占领记忆',
      styleTitle: '雾中身份追索',
      example: '《暗店街》《多拉·布吕代》',
      dna: '记忆追索 + 巴黎街名 + 身份档案 + 占领时期阴影 + 模糊命运。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成对一个名字、一张旧照片、一段失踪历史的追索；真相总在街道、档案和记忆雾气里后退。',
      transform: {
        sceneExpansion: '增加街名、旅馆登记簿、旧照片、电话簿、档案卡、门牌、冬天巴黎和失踪路线。',
        conflictRendering: '把阻断显影为身份缺口、历史占领阴影、档案缺页、无人认领的名字和城市记忆。'
      }
    },
    {
      id: 'alicemunro',
      name: '艾丽丝·门罗 (Alice Munro)',
      description: '短篇时间暗河',
      styleTitle: '小镇人生暗河',
      example: '《亲爱的生活》《逃离》',
      dna: '小镇生活 + 女性命运 + 时间跳跃 + 平静叙述下的巨大转折 + 短篇结构精密。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成小镇、家庭、女性选择和多年后回望之间的暗河；关键事件可能很小，但会改变一生的解释。',
      transform: {
        time: '允许跨年跳切和回望，让一个微小场景在多年后改变意义。',
        sceneExpansion: '增加小镇街道、厨房、学校、公共汽车、信、农场、公寓、旧衣服和安静会面。'
      }
    }
  ]
});
