import { defineAuthorCategory } from './helpers';

export const ASIAN_CINEMA = defineAuthorCategory({
  id: 'sector_film_asia',
  name: 'VII. 电影作者·亚洲风暴 (Asian Cinema)',
  defaults: {
    transform: {
      time: '保留 SOURCE 事件事实，可用错过、静止、暴力突发、群像调度、城市冷观察或童话冒险重组情绪。',
      narrator: '叙述更接近亚洲电影作者的镜头意识：克制、留白、类型突变或强烈舞台感。',
      psychology: '人物心理通过空间关系、沉默、身体动作、家庭礼法、城市倒影、食物、天气和突发动作显影。',
      conflictRendering: '把原冲突染成时间错位、阶级空间、礼法压抑、暴力静止、群像秩序或自然/工业世界的裂缝。',
      visualAssets: '雨夜、霓虹、海、城市玻璃、家庭饭桌、楼梯、旧公寓、风、食物、长街、车站和强烈天气。'
    }
  },
  items: [
    {
      id: 'wongkarwai',
      name: '王家卫 (Wong Kar-wai)',
      description: '时间恋物癖',
      styleTitle: '时间余温',
      example: '《重庆森林》',
      dna: '时间戳 + 喃喃自语 + 物品拟人 + 抽帧模糊 + 遗憾与错过。',
      coreRewriteLogic: '保留原故事骨架，弱化直接因果解释，强化错过、延迟、沉默、重复动作、物件记忆和城市空间的余温。',
      preserve: [
        '保留已选草稿的人物关系、核心事件和结局方向。',
        '保留 M7A/M7B 的意义裁决与身体余味。',
        '保留类型动力和世界法则；不把故事改成纯抒情散文。'
      ],
      transform: {
        time: '把关键事件处理为多年后仍在回响的瞬间，可使用时间戳、倒叙、延迟说明。',
        narrator: '主观、低声、带独白质感的叙述者，信息释放像记忆回潮。',
        psychology: '人物不直接说出欲望，通过等待、离开、重复动作、旧物和未说出口的话表达。',
        sceneExpansion: '增加天气、食物、房间、街道、音乐、钟表、玻璃反光、重复路线等情绪媒介。',
        conflictRendering: '把原冲突染成错过、迟到、误会、沉默、无法同步的时间。',
        syntax: '短句与旁白感并存，克制、暧昧、带轻微自嘲和时间残响。',
        visualAssets: '雨夜、窄巷、霓虹、旧房间、反光玻璃、潮湿墙面、慢速运动模糊、私密旧物。'
      },
      mAxisLens: {
        M1: '保留已选 M1 的缺失本质，只把主体显影为被时间滞留、无法准时抵达自身欲望的人。',
        M2: '保留已选 M2 的真实穿刺，只把遭遇染成错过、迟到、未接电话、未说出口的话或时间不同步。',
        M3: '保留已选 M3 的欲望对象，只让它附着在旧物、地点、气味、音乐或重复动作上。',
        M5: '保留已选 M5 的行动驱力，只把行动姿态染成等待、绕路、保存、重复、离开又返回。',
        M7B: '保留已选 M7B 的身体余痕，只让余痕通过物件、味道、声音、天气或旧空间继续回响。'
      },
      avoid: [
        '不要生成新故事方案。',
        '不要丢失原大纲的主要事件。',
        '不要只堆砌怀旧意象。',
        '不要直接复刻具体电影桥段、台词或招牌物件。'
      ]
    },
    {
      id: 'stephenchow',
      name: '周星驰 (Stephen Chow)',
      description: '无厘头',
      styleTitle: '小人物荒诞深情',
      example: '《大话西游》',
      dna: '无厘头逻辑 + 夸张反应 + 小人物辛酸 + 突然深情 + 结构解构。',
      coreRewriteLogic: '保留 SOURCE 骨架，把痛苦事件先推向荒唐、误会和夸张反应，再在关键处突然露出小人物的真心和失败。',
      transform: {
        dialogue: '对白可荒唐、反复、错位，但必须带人物关系压力。',
        conflictRendering: '把阻断显影为底层身份、被嘲笑的尊严、荒唐规则和突然认真的爱。'
      }
    },
    {
      id: 'kitano',
      name: '北野武 (Takeshi Kitano)',
      description: '暴力蓝调',
      styleTitle: '静止暴力蓝',
      example: '《花火》',
      dna: '极简对白 + 长静止镜头 + 突然暴力 + 蓝色大海 + 孩子气死亡。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成长期静止后的突然断裂；人物少说，动作像海面下的暗流。',
      transform: {
        syntax: '短、静、少解释。',
        visualAssets: '海、蓝色、空街、车、血迹、烟、儿童画般的物件、静止构图。'
      }
    },
    {
      id: 'kurosawa',
      name: '黑泽明 (Akira Kurosawa)',
      description: '动态武士',
      styleTitle: '风雨群像',
      example: '《七武士》',
      dna: '暴雨狂风 + 群像调度 + 英雄主义 + 戏剧化表演 + 行动伦理。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件写成风雨、泥地、群体行动和道德选择中的英雄试炼；世界通过天气动起来。',
      transform: {
        sceneExpansion: '增加雨、风、泥、旗帜、人群、奔跑、战术调度和视线交叉。',
        conflictRendering: '把阻断显影为群体危机、荣誉、职责、背叛或行动伦理。'
      }
    },
    {
      id: 'bongjoonho',
      name: '奉俊昊 (Bong Joon-ho)',
      description: '类型杂学家',
      styleTitle: '阶级类型突变',
      example: '《寄生虫》',
      dna: '类型突变 + 阶级隐喻 + 气味/地下空间 + 黑色幽默 + 精密空间调度。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事从喜剧、家庭剧或日常场景突然推入惊悚/悲剧；阶级空间必须成为冲突物理结构。',
      transform: {
        conflictRendering: '把阻断显影为楼层、高低差、气味、地下空间、服务关系和制度笑话。',
        sceneExpansion: '扩写住宅结构、楼梯、地下室、雨、厨房、厕所、公共交通等阶级空间。'
      }
    },
    {
      id: 'edwardyang',
      name: '杨德昌 (Edward Yang)',
      description: '城市手术刀',
      styleTitle: '现代城市剖面',
      example: '《一一》',
      dna: '中景固定镜头 + 城市关系网 + 现代性反思 + 玻璃幕墙倒影 + 家庭冷观察。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物困境放进城市、家庭、公司、学校和玻璃反光构成的关系网里；情绪被现代生活切成冷静剖面。',
      transform: {
        sceneExpansion: '增加会议室、家庭饭桌、学校、街口、玻璃反射、公寓和城市噪声。',
        narrator: '冷静观察，不替人物煽情。'
      }
    },
    {
      id: 'jiangwen',
      name: '姜文 (Jiang Wen)',
      description: '荷尔蒙狂想',
      styleTitle: '历史狂想剧场',
      example: '《让子弹飞》',
      dna: '亢奋节奏 + 隐喻男性对白 + 荒诞历史解读 + 舞台感 + 权力游戏。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突推成高能对白、权力较量和历史寓言的舞台；人物说话像开枪，笑声里带政治算计。',
      transform: {
        dialogue: '对白有劲、密、带隐喻和互相试探。',
        sceneExpansion: '增加广场、酒桌、马车/车辆、枪响、群众、烈日和戏台感空间。'
      }
    },
    {
      id: 'anglee',
      name: '李安 (Ang Lee)',
      description: '压抑的情感',
      styleTitle: '礼法下的暗流',
      example: '《卧虎藏龙》',
      dna: '克制情感 + 东西文化冲突 + 礼教下欲望 + 温柔注视 + 家庭伦理。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物欲望压进礼法、家庭、文化冲突和温柔但不可逾越的凝视里。',
      transform: {
        psychology: '写欲言又止、饭桌礼貌、身体距离、手的停顿和眼神回避。',
        conflictRendering: '把阻断显影为家庭义务、礼仪、身份期待和隐忍欲望。'
      }
    },
    {
      id: 'miyazaki',
      name: '宫崎骏 (Hayao Miyazaki)',
      description: '万物有灵',
      styleTitle: '风之成长寓言',
      example: '《千与千寻》',
      dna: '飞行/风/水 + 工业细节 + 少女成长 + 诱人食物 + 反战与自然。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成成长、劳动、自然与工业秩序之间的冒险寓言；奇观必须服务于人物责任和选择。',
      transform: {
        sceneExpansion: '增加风、水、机器、食物、手工劳动、澡堂/工坊式空间和飞行感。',
        conflictRendering: '把阻断显影为污染、战争阴影、贪婪制度、劳动契约或自然失衡。'
      }
    }
  ]
});
