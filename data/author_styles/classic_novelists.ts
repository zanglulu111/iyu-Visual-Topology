import { defineAuthorCategory } from './helpers';

export const CLASSIC_NOVELISTS = defineAuthorCategory({
  id: 'sector_classic_novelists',
  name: 'XIII. 经典小说·现代性源流 (Classic Novelists)',
  defaults: {
    transform: {
      time: '保留 SOURCE 事件骨架，以社会全景、心理现实主义、讽刺寓言、存在困境或成长史组织情节压力。',
      narrator: '叙述者具有经典小说的结构耐心：社会观察、心理推进、反讽、寓言或道德困境都必须落在人物行动上。',
      psychology: '人物心理通过社交礼仪、财产关系、城市机制、欲望误认、疾病、羞耻、劳动和公共语言显影。',
      conflictRendering: '把原冲突染成婚恋财产、阶级上升、现代城市、语言规训、存在荒诞、社会伪善或家庭伦理压力。',
      visualAssets: '客厅、信件、舞会、工厂、报纸、法院、医院、咖啡馆、街道、乡村宅邸、办公室和象征性公共空间。'
    }
  },
  items: [
    {
      id: 'austen',
      name: '简·奥斯丁 (Jane Austen)',
      description: '礼貌反讽',
      styleTitle: '婚恋财产反讽',
      example: '《傲慢与偏见》《爱玛》',
      dna: '自由间接引语 + 社交礼仪 + 婚恋财产 + 机智反讽 + 微小误判导致命运偏移。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成礼貌社交、财产制度、误判和自尊之间的精密反讽；人物越得体，欲望越清楚。',
      transform: {
        sceneExpansion: '增加客厅、舞会、来信、拜访、餐桌、闲谈、庄园与礼貌沉默。',
        dialogue: '对白优雅克制，潜台词围绕身份、财产、婚恋和自尊运作。'
      }
    },
    {
      id: 'bronte',
      name: '夏洛蒂·勃朗特 (Charlotte Brontë)',
      description: '哥特自尊',
      styleTitle: '荒原自尊火焰',
      example: '《简·爱》',
      dna: '第一人称自尊 + 哥特宅邸 + 压抑激情 + 道德独立 + 阶级与性别束缚。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物选择写成自尊、欲望、阶级和道德独立之间的火焰；爱不能取消主体尊严。',
      transform: {
        sceneExpansion: '增加荒原、宅邸、阁楼、炉火、学校、病房、书信和暴风雨。',
        psychology: '通过自制、突然爆发、拒绝屈服和身体发冷显影内在火焰。'
      }
    },
    {
      id: 'georgeeliot',
      name: '乔治·艾略特 (George Eliot)',
      description: '道德现实主义',
      styleTitle: '道德网络现实',
      example: '《米德尔马契》',
      dna: '社会网络 + 道德复杂性 + 婚姻与职业理想 + 宽阔同情 + 微小选择的长后果。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物行动放进城镇、婚姻、职业、金钱和名誉构成的道德网络中；没有单纯恶人，只有复杂后果。',
      transform: {
        conflictRendering: '把阻断显影为地方舆论、婚姻契约、职业限制、债务、宗教和医学/知识权威。',
        narrator: '叙述者可有温厚洞察，但不替人物开脱。'
      }
    },
    {
      id: 'flaubert',
      name: '福楼拜 (Gustave Flaubert)',
      description: '冷精确现实主义',
      styleTitle: '庸俗欲望显微镜',
      example: '《包法利夫人》',
      dna: '冷静精确句子 + 对庸俗幻想的解剖 + 商品、浪漫小说、债务 + 反讽距离。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物欲望写成被消费品、俗套浪漫、债务和自我戏剧化制造出来的幻觉。',
      transform: {
        sceneExpansion: '增加布料、账单、药房、客厅、马车、廉价装饰、广告和乡镇公共空间。',
        syntax: '句子准确、冷、少评判，让物件自行暴露庸俗。'
      }
    },
    {
      id: 'balzac',
      name: '巴尔扎克 (Honoré de Balzac)',
      description: '社会野心机器',
      styleTitle: '金钱社会全景',
      example: '《高老头》《欧也妮·葛朗台》',
      dna: '社会全景 + 金钱驱动 + 野心青年 + 详尽室内陈设 + 阶级上升机制。',
      coreRewriteLogic: '保留 SOURCE 骨架，把所有关系写成金钱、地位、继承、债务和社会攀升机器中的位置转换。',
      transform: {
        sceneExpansion: '扩写房间陈设、账目、衣料、门第、街区、饭桌和商业谈判。',
        conflictRendering: '把阻断显影为金钱门槛、继承权、阶层入口、债权和社交资格。'
      }
    },
    {
      id: 'stendhal',
      name: '司汤达 (Stendhal)',
      description: '野心心理学',
      styleTitle: '红与黑野心',
      example: '《红与黑》',
      dna: '心理速度 + 野心上升 + 爱情与政治表演 + 自我观察 + 阶级冒险。',
      coreRewriteLogic: '保留 SOURCE 骨架，把主角写成在爱情、阶级和政治舞台上不断计算又不断失控的人。',
      transform: {
        psychology: '写自我监控、虚荣、野心、羞耻和突然真情的短路。',
        conflictRendering: '把阻断显影为阶级门槛、声誉、教会/官僚机构、情人关系和公共审判。'
      }
    },
    {
      id: 'cervantes',
      name: '塞万提斯 (Miguel de Cervantes)',
      description: '骑士幻觉',
      styleTitle: '反骑士游荡',
      example: '《堂吉诃德》',
      dna: '骑士小说反讽 + 幻想与现实错位 + 旅途插话 + 滑稽与悲悯并存。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物欲望写成被旧叙事毒化的高贵误认；笑料必须带悲悯，现实必须不断撞碎幻想。',
      transform: {
        conflictRendering: '把阻断显影为现实世界对旧英雄叙事的拆穿、误认和荒唐试炼。',
        sceneExpansion: '增加旅店、道路、风车式误认、仆从对话、破旧装备和路边故事。'
      }
    },
    {
      id: 'orwell',
      name: '乔治·奥威尔 (George Orwell)',
      description: '政治寓言',
      styleTitle: '清澈极权寓言',
      example: '《1984》《动物庄园》',
      dna: '清楚平实语言 + 政治控制 + 语言篡改 + 监控 + 寓言化权力结构。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成权力如何通过语言、记录、监控、口号和日常恐惧改写人的现实。',
      transform: {
        sceneExpansion: '增加标语、办公室、广播、监控、档案修改、灰色食堂和公共口号。',
        syntax: '语言清楚、直接、冷静，恐怖来自制度细节。'
      }
    },
    {
      id: 'camus',
      name: '加缪 (Albert Camus)',
      description: '荒诞烈日',
      styleTitle: '烈日荒诞',
      example: '《局外人》《鼠疫》',
      dna: '冷淡第一人称 + 烈日与身体感觉 + 荒诞处境 + 道德审判 + 清明反抗。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物放进没有终极解释的烈日、疾病、审判或城市封锁中；行动的意义不被宣告，只在坚持里出现。',
      transform: {
        psychology: '少写情绪，多写热、光、汗、疲惫、烟、海、身体反应和沉默。',
        conflictRendering: '把阻断显影为法庭、瘟疫、城市封锁、社会期待和荒诞审判。'
      }
    },
    {
      id: 'zola',
      name: '左拉 (Émile Zola)',
      description: '自然主义机器',
      styleTitle: '遗传环境绞盘',
      example: '《萌芽》《娜娜》',
      dna: '自然主义 + 遗传与环境决定 + 工业社会 + 欲望和贫困的物质压力 + 群体场面。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物命运写成遗传、贫困、工厂、城市、欲望和社会环境共同绞动的结果；悲剧来自物质机制，不来自抽象恶意。',
      transform: {
        sceneExpansion: '增加矿井、工厂、楼梯、酒馆、贫民区、污水、机器、拥挤身体和劳动节奏。',
        conflictRendering: '把阻断显影为环境压力、阶级条件、劳动剥削、遗传阴影和群体运动。'
      }
    },
    {
      id: 'defoe',
      name: '笛福 (Daniel Defoe)',
      description: '生存账本',
      styleTitle: '孤岛实录',
      example: '《鲁滨逊漂流记》',
      dna: '实录口吻 + 生存细节 + 账本式劳动 + 殖民视角 + 物资清单。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物困境写成一份关于物资、劳动、风险、信念和孤立环境的生存记录。',
      transform: {
        sceneExpansion: '增加工具、清单、天气、伤口、建造、储藏、地图、日记和劳动流程。',
        narrator: '像幸存者记录事实，情感从物资和劳动里露出。'
      }
    },
    {
      id: 'thomasmann',
      name: '托马斯·曼 (Thomas Mann)',
      description: '市民精神病理',
      styleTitle: '衰败市民史诗',
      example: '《布登勃洛克一家》《魔山》',
      dna: '家族衰败 + 市民阶层病理 + 艺术与疾病 + 讽刺距离 + 思想辩论和长篇结构。',
      coreRewriteLogic: '保留 SOURCE 骨架，把个体危机写成一个阶层、一种家族秩序或一套文明价值的缓慢病变；疾病、艺术和礼仪共同显影衰败。',
      transform: {
        time: '允许长时段回望和病程式推进，让变化像体温一样缓慢上升。',
        sceneExpansion: '增加疗养院、家族餐桌、账簿、音乐、礼服、病床、山地空气和市民室内。'
      }
    }
  ]
});
