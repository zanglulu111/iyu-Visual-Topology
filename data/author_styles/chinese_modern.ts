import { defineAuthorCategory } from './helpers';

export const CHINESE_MODERN = defineAuthorCategory({
  id: 'sector_cn_modern',
  name: 'IV. 中文现当代·独异之声 (Chinese Modern)',
  defaults: {
    transform: {
      time: '保持 SOURCE 事件推进，允许以回忆、讽刺、口语节奏或地方叙述重排情绪重心。',
      narrator: '叙述者带明确时代气味和社会立场，可冷眼、苍凉、调侃、朴素或狂热。',
      psychology: '人物心理通过时代压迫、阶层语言、身体习惯、地方物件、饮食气味和沉默反应显影。',
      conflictRendering: '把原冲突染成国民性、家庭伦理、城市欲望、乡土秩序、江湖规则或生存荒诞。',
      visualAssets: '弄堂、茶馆、院落、县城、食物、旧报纸、车站、酒桌、墙皮、烟火气和时代物件。'
    }
  },
  items: [
    {
      id: 'luxun',
      name: '鲁迅 (Lu Xun)',
      description: '民族魂',
      styleTitle: '冷峻剖骨',
      example: '《狂人日记》',
      dna: '半文半白 + 黑色幽默 + 吃人隐喻 + 看客麻木 + 绝望中的呐喊。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成一场对麻木共同体的冷峻解剖；真正恐怖的不是恶人，而是所有人都习惯了。',
      transform: {
        narrator: '语气冷、准、带讽刺的刀口，避免煽情。',
        conflictRendering: '把阻断显影为看客、乡约、面子、规矩、旧账和集体默许。'
      }
    },
    {
      id: 'zhangailing',
      name: '张爱玲 (Eileen Chang)',
      description: '苍凉传奇',
      styleTitle: '华丽苍凉',
      example: '《金锁记》',
      dna: '刻薄精准比喻 + 华丽色彩与苍凉底色 + 人性冷眼 + 都市旧梦。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物关系写成华丽表面下的算计、羞辱和空心；越美的衣料越像命运的冷证物。',
      transform: {
        sceneExpansion: '扩写衣服、首饰、房间光线、饭桌、门帘、旧家具和身体姿态。',
        syntax: '比喻尖锐、准确、带苍凉余味。'
      }
    },
    {
      id: 'qianzhongshu',
      name: '钱钟书 (Qian Zhongshu)',
      description: '学者幽默',
      styleTitle: '智性讽刺',
      example: '《围城》',
      dna: '连珠妙喻 + 中西典故 + 知识分子讽刺 + 智力游戏 + 人情滑稽。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物的自欺、虚荣和知识姿态写成一连串精密比喻中的败露。',
      transform: {
        narrator: '叙述者可机智、尖刻、旁逸斜出，但不能盖过事件推进。',
        dialogue: '对白带机锋，暴露人物的自我包装。'
      }
    },
    {
      id: 'shencongwen',
      name: '沈从文 (Shen Congwen)',
      description: '湘西牧歌',
      styleTitle: '水边牧歌',
      example: '《边城》',
      dna: '水墨风景 + 原始纯真人性 + 淡淡哀愁 + 乡土气息 + 命运静流。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突沉入水岸、风物、人情和缓慢变化的乡土秩序；悲剧像天气一样自然来临。',
      transform: {
        sceneExpansion: '增加河流、渡口、山风、船、集市、犬吠、灯火和手工物件。',
        psychology: '用羞涩、迟疑、礼貌和劳动动作显影内心。'
      }
    },
    {
      id: 'wangshuo',
      name: '王朔 (Wang Shuo)',
      description: '京味痞气',
      styleTitle: '痞气虚无',
      example: '《顽主》',
      dna: '京味俚语 + 调侃崇高 + 玩世不恭 + 快速口语节奏 + 骨子里的虚无。',
      coreRewriteLogic: '保留 SOURCE 骨架，把严肃冲突用调侃、插科打诨和自我拆台包起来；笑声底下必须露出空洞。',
      transform: {
        dialogue: '对白快、贫、准，人物互相拆台，但每句玩笑都要推动关系压力。',
        syntax: '口语化、短促、有节奏，避免网络段子腔。'
      }
    },
    {
      id: 'moyan',
      name: '莫言 (Mo Yan)',
      description: '高密魔幻',
      styleTitle: '泥血狂欢',
      example: '《红高粱》',
      dna: '浓烈感官色彩 + 丑陋与生命力 + 幻觉现实 + 泥沙俱下语言洪流。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成土地、血、酒、食物、欲望和历史暴力的混合发酵；写实法则下的幻觉必须可被身体和民间叙述承接。',
      transform: {
        sceneExpansion: '重视气味、颜色、土、酒、血、谷物、牲口市场、村庄和身体能量。',
        syntax: '句子可以粗粝、奔涌、带民间传说的夸张。'
      }
    },
    {
      id: 'yuhua',
      name: '余华 (Yu Hua)',
      description: '冷酷极简',
      styleTitle: '零度苦难',
      example: '《活着》',
      dna: '零度情感叙述 + 巨大悲剧像流水账 + 极简词汇 + 命运重击。',
      coreRewriteLogic: '保留 SOURCE 骨架，把残酷事件写得平静、简单、几乎没有修辞；越不解释，越让命运显得沉重。',
      transform: {
        syntax: '短句、白描、少形容词，禁止煽情。',
        psychology: '人物不喊痛，只做下一件必须做的事。'
      }
    },
    {
      id: 'jinyong',
      name: '金庸 (Jin Yong)',
      description: '武侠巅峰',
      styleTitle: '侠义江湖',
      example: '《天龙八部》',
      dna: '武功体系 + 历史江湖 + 儒家侠义 + 群像打斗 + 痴情与身世。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突转译成江湖名分、师承、恩怨、侠义和情义两难；非武侠世界中降维为行业规矩与精神门派。',
      transform: {
        conflictRendering: '把阻断显影为门派、誓言、旧恩、名誉、师承或天下大义。',
        visualAssets: '山路、酒楼、寺院、书信、兵器、风雪、江湖人群。'
      }
    },
    {
      id: 'gulong',
      name: '古龙 (Gu Long)',
      description: '散文诗武侠',
      styleTitle: '孤独刀光',
      example: '《多情剑客无情剑》',
      dna: '极短段落 + 数字化细节 + 氛围大于招式 + 孤独、酒、女人和死亡。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突压成短句、空白、酒味、冷风和一个不可逃避的选择；动作少，但每个停顿都锋利。',
      transform: {
        syntax: '短段落，短句，留白多，节奏像拔刀前的静止。',
        sceneExpansion: '增加夜、酒、风、灯、门、手、刀刃般的物件细节。'
      }
    },
    {
      id: 'sanmao',
      name: '三毛 (Sanmao)',
      description: '流浪文学',
      styleTitle: '流浪日记',
      example: '《撒哈拉的故事》',
      dna: '真诚口语 + 异域日常 + 生活琐碎热爱 + 自由灵魂 + 轻盈忧伤。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成带旅行日记质感的生活片段；大冲突落在做饭、搬家、路途、风景和人的温柔误会里。',
      transform: {
        narrator: '亲近、真诚、口语化，但避免旅行鸡汤。',
        sceneExpansion: '增加路、集市、简陋房间、食物、手工小物和异地生活细节。'
      }
    },
    {
      id: 'zhenhuan',
      name: '甄嬛体 (Empresses in Palace)',
      description: '宫斗权谋',
      styleTitle: '礼法暗战',
      example: '《甄嬛传》',
      dna: '半文言敬语 + 潜台词暗刺 + 以物喻人 + 阶级秩序 + 宫廷权谋。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物关系写成礼貌、称谓、赏赐、物件和场面话中的权力暗战；现代场域也要降维为组织等级和话语秩序。',
      transform: {
        dialogue: '对白必须绵里藏针，表面恭顺，实则推进权力关系。',
        conflictRendering: '把阻断显影为名分、规矩、恩宠、资格、背后议论和组织层级。'
      }
    }
  ]
});
