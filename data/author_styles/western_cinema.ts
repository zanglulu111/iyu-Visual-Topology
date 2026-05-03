import { defineAuthorCategory } from './helpers';

export const WESTERN_CINEMA = defineAuthorCategory({
  id: 'sector_film_west',
  name: 'VI. 电影作者·欧美大师 (Western Cinema)',
  defaults: {
    transform: {
      time: '保持 SOURCE 事件事实不变，可用非线性、悬念延迟、冷峻观察、梦境断裂或剪辑节拍重排信息释放。',
      narrator: '叙述者更接近电影调度：用镜头距离、构图、声音、剪辑和对白节奏显影心理。',
      psychology: '人物心理通过走位、沉默、镜头停留、对白速度、空间几何和声音设计显影。',
      conflictRendering: '把原冲突染成悬念、类型变奏、系统控制、黑色幽默、罪感、时间结构或梦魇逻辑。',
      visualAssets: '强构图、可拍摄空间、明确光源、镜头运动、色彩策略、道具特写和声音/音乐线索。'
    }
  },
  items: [
    {
      id: 'tarantino',
      name: '昆汀 (Quentin Tarantino)',
      description: '暴力话痨',
      styleTitle: '话痨暴力弹簧',
      example: '《低俗小说》',
      dna: '流行文化长对白 + 突然血腥爆发 + 非线性 + 复古配乐感 + 类型拼贴。',
      coreRewriteLogic: '保留 SOURCE 骨架，把关键冲突压在看似闲聊的长对白里，直到暴力或真相突然弹出；非线性只改变揭示顺序，不改变事件事实。',
      transform: {
        dialogue: '对白绕远路、带流行文化和日常废话，但每段都暗藏威胁或权力变化。',
        time: '可打乱段落顺序制造反讽，但结局方向不变。'
      }
    },
    {
      id: 'kubrick',
      name: '库布里克 (Stanley Kubrick)',
      description: '绝对理性',
      styleTitle: '冷对称控制',
      example: '《2001太空漫游》',
      dna: '一点透视对称 + 冷漠凝视 + 古典乐反差 + 人类异化 + 精密控制。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物困境置于冷静、对称、非人化的空间秩序中；越理性，越显出残酷。',
      transform: {
        sceneExpansion: '增加走廊、对称房间、仪式化动作、监控般视角和冷光。',
        psychology: '少写内心，多写人物在完美构图里显得失控。'
      }
    },
    {
      id: 'wes',
      name: '韦斯·安德森 (Wes Anderson)',
      description: '对称童话',
      styleTitle: '标本童话',
      example: '《布达佩斯大饭店》',
      dna: '绝对对称 + 清单物品 + 粉彩配色 + 死板对白 + 微缩模型感。',
      coreRewriteLogic: '保留 SOURCE 骨架，把痛苦事件装进精致、对称、清单化的童话标本盒；秩序越可爱，裂痕越清楚。',
      transform: {
        visualAssets: '正面构图、粉彩但克制、微缩模型、制服、标签、房间切面、手写清单。',
        dialogue: '对白干燥、礼貌、表情少，情绪藏在物件排列里。'
      }
    },
    {
      id: 'nolan',
      name: '诺兰 (Christopher Nolan)',
      description: '时间魔术',
      styleTitle: '时间机关',
      example: '《信条》',
      dna: '时间线交错 + 设定解释 + 实景破坏 + 低频轰鸣 + 结构谜题。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事重组为多层时间机关；每条线索最终回到同一代价和同一余痕。',
      transform: {
        time: '允许倒叙、并行线、倒计时和时间拼图，但不得让 SOURCE 事件被替换。',
        conflictRendering: '把阻断显影为时间压力、信息差、任务窗口、物理限制和不可逆选择。'
      }
    },
    {
      id: 'lynch',
      name: '大卫·林奇 (David Lynch)',
      description: '梦魇逻辑',
      styleTitle: '日常梦魇',
      example: '《穆赫兰道》',
      dna: '低频噪音 + 尴尬停顿 + 不安微笑 + 梦境非线性 + 日常物件变异。',
      coreRewriteLogic: '保留 SOURCE 骨架，把现实事件写成日常表面下的梦魇漏光；荒诞不能替换事实，只能让事实变得不稳定。',
      transform: {
        sceneExpansion: '增加低频声、红色房间感、走廊、舞台、电话、灯光闪烁和过长停顿。',
        psychology: '用不合时宜的笑、重复动作、声音异常和空间错感显影心理裂缝。'
      }
    },
    {
      id: 'hitchcock',
      name: '希区柯克 (Alfred Hitchcock)',
      description: '悬疑大师',
      styleTitle: '悬念机器',
      example: '《惊魂记》',
      dna: '观众先知悬念 + 窥视视角 + 麦格芬驱动 + 优雅危险 + 信息延迟。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突改写为信息差和可见危险的悬念机器；重点不是谜底，而是等待危险兑现。',
      transform: {
        time: '延迟关键动作，让读者比角色多知道一点。',
        visualAssets: '楼梯、窗帘、钥匙、浴室、车、影子、偷窥角度、优雅室内。'
      }
    },
    {
      id: 'scorsese',
      name: '斯科塞斯 (Martin Scorsese)',
      description: '黑帮史诗',
      styleTitle: '罪感快剪',
      example: '《好家伙》',
      dna: '摇滚铺底 + 第一人称旁白 + 突然暴力 + 跟拍长镜头 + 罪恶魅力。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物行动写成欲望、罪感、身份表演和群体规则的高速轨道；魅力必须带着代价。',
      transform: {
        narrator: '可用高速旁白和回忆口吻，但不要替角色辩护成功。',
        sceneExpansion: '增加餐馆、夜店、后巷、现金、车灯、烟、音乐和突发暴力。'
      }
    },
    {
      id: 'woody',
      name: '伍迪·艾伦 (Woody Allen)',
      description: '纽约神经质',
      styleTitle: '神经质喜剧',
      example: '《安妮·霍尔》',
      dna: '知识分子独白 + 亲密关系焦虑 + 死亡/性焦虑 + 爵士都市 + 自嘲。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成自我分析过度、亲密失败和都市知识分子的滑稽焦虑。',
      transform: {
        dialogue: '对白快速、自嘲、拧巴，人物常把真正感受分析坏。',
        conflictRendering: '把阻断显影为亲密关系、神经质解释、社交尴尬和自我拆台。'
      }
    },
    {
      id: 'coen',
      name: '科恩兄弟 (Coen Brothers)',
      description: '荒诞虚无',
      styleTitle: '命运黑色玩笑',
      example: '《冰血暴》',
      dna: '愚蠢角色车轱辘话 + 平静血腥 + 礼貌杀意 + 命运恶作剧。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件写成小人物误判引发的命运滑坡；荒唐对白和冷酷后果并行。',
      transform: {
        dialogue: '对白可以重复、笨拙、地方化，但要制造黑色幽默和威胁。',
        syntax: '冷静白描，不解释荒诞，只让荒诞发生。'
      }
    },
    {
      id: 'fincher',
      name: '芬奇 (David Fincher)',
      description: '精确控制狂',
      styleTitle: '冷数据悬疑',
      example: '《社交网络》',
      dna: '黄绿色低对比 + 手术刀剪辑 + 高密度对话 + 强迫症细节 + 系统性阴暗。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突变成数据、证据、流程、界面、监控和心理控制的精密机器。',
      transform: {
        sceneExpansion: '扩写屏幕、档案、办公室、审讯室、雨夜、荧光灯、键盘和记录表。',
        dialogue: '对白高密度、快、准，信息像刀片一样推进。'
      }
    },
    {
      id: 'sorkin',
      name: '阿伦·索金 (Aaron Sorkin)',
      description: '金句击剑',
      styleTitle: '理想主义辩速',
      example: '《新闻编辑室》',
      dna: '极快语速 + 边走边说 + 理想主义演讲 + 逻辑压迫 + 金句节奏。',
      coreRewriteLogic: '保留 SOURCE 骨架，把关键场景写成高速度语言决斗；每句台词都争夺道德位置、策略优势或公共叙事权。',
      transform: {
        dialogue: '高密度、逻辑性强、互相抢拍，但必须有潜台词和行动后果。',
        sceneExpansion: '走廊、会议室、媒体间、法庭、办公室动线。'
      }
    },
    {
      id: 'godard',
      name: '戈达尔 (Jean-Luc Godard)',
      description: '新浪潮',
      styleTitle: '跳接反叙事',
      example: '《精疲力尽》',
      dna: '跳接 + 打破第四面墙 + 政治口号 + 即兴松散 + 类型拆解。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事表面拆成跳接、标语、即兴对白和影像自觉；拆解叙事形式，但不拆掉 SOURCE 事件功能。',
      transform: {
        time: '可用跳接、省略和碎片标题制造断裂。',
        narrator: '允许轻微自觉的电影语言，但避免元叙事直接说明读者/观众反应。'
      }
    },
    {
      id: 'tarkovsky',
      name: '塔科夫斯基 (Andrei Tarkovsky)',
      description: '诗意雕刻',
      styleTitle: '时间雕刻',
      example: '《潜行者》',
      dna: '极长镜头 + 水火风废墟 + 极少对白 + 宗教感 + 存在沉思。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件写成在水、火、风、废墟和沉默中缓慢显影的精神试炼；行动少，但每个物质细节都承重。',
      transform: {
        time: '拉长等待、行走、凝视和沉默，让时间成为压力本身。',
        visualAssets: '水洼、火光、废墟、荒地、潮湿墙面、长走廊、风吹动的布。'
      }
    }
  ]
});
