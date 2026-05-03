import { defineAuthorCategory } from './helpers';

export const PHILOSOPHY = defineAuthorCategory({
  id: 'sector_philo',
  name: 'XI. 哲学与非虚构 (Philosophy)',
  defaults: {
    transform: {
      time: '保持 SOURCE 事件骨架，以思想姿态、案例、格言、权术推演或主观报道重排叙述重心。',
      narrator: '叙述者可以带强烈思想腔调，但必须把抽象命题落回人物行动和场景。',
      psychology: '人物心理通过信念、欲望、症状、权力算计、身体反应或主观观察的偏执显影。',
      conflictRendering: '把原冲突染成价值重估、临床案例、权力技术、主观报道或思想现场。',
      visualAssets: '讲坛、诊室、书桌、街头采访、权力办公室、手稿、酒吧、集会、档案和过度主观的现场细节。'
    },
    avoid: [
      '不要把小说正文写成哲学论文；抽象观点必须转译为场景、动作、对白和物件。'
    ]
  },
  items: [
    {
      id: 'nietzsche',
      name: '尼采 (Nietzsche)',
      description: '查拉图斯特拉',
      styleTitle: '雷霆格言',
      example: '《查拉图斯特拉如是说》',
      dna: '格言式语气 + 雷霆宣告 + 鄙视末人 + 权力意志隐喻 + 孤独先知感。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物选择写成一次价值重估；主角不是获得安慰，而是在孤独中被迫承认自己的欲望形状。',
      transform: {
        syntax: '句子可格言化、宣告式、带山巅和雷电般的节奏，但要控制密度。',
        conflictRendering: '把阻断显影为庸众、怯懦、旧道德、舒适生活和自我超克的失败。'
      }
    },
    {
      id: 'freud',
      name: '弗洛伊德 (Sigmund Freud)',
      description: '精神分析',
      styleTitle: '临床梦案',
      example: '《梦的解析》',
      dna: '童年与欲望解释 + 梦的符号 + 临床案例冷静 + 家庭结构 + 症状阅读。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件写成一宗临床案例般的症状展开；人物说的理由和真正驱动他的东西保持裂缝。',
      transform: {
        narrator: '可带案例记录感，但不得出现被禁哲学/精神分析术语。',
        sceneExpansion: '增加梦、诊室、家庭物件、口误、童年照片、床边物品和重复症状。'
      }
    },
    {
      id: 'machiavelli',
      name: '马基雅维利 (Machiavelli)',
      description: '君主权术',
      styleTitle: '冷权术手册',
      example: '《君主论》',
      dna: '现实主义权术 + 狮子与狐狸 + 目的优先 + 冷酷政治算计 + 稳定统治。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物行动写成权力、声望、恐惧和利益交换的冷计算；温情必须接受策略检验。',
      transform: {
        narrator: '冷静、策略化、短促，像在分析胜负条件。',
        conflictRendering: '把阻断显影为联盟、背叛、威慑、名声、资源和统治合法性。'
      }
    },
    {
      id: 'gonzo',
      name: '亨特·汤普森 (Gonzo)',
      description: '刚左新闻',
      styleTitle: '主观狂躁报道',
      example: '《恐惧与厌恶在拉斯维加斯》',
      dna: '极主观第一人称 + 幻觉感 + 政治咆哮 + 混乱能量 + 现场报道失控。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件写成叙述者卷入现场、失去客观距离的狂躁报道；真相从偏执、噪声和身体过载里露出。',
      transform: {
        narrator: '第一人称可极主观、偏执、躁动，但事实节点必须仍可辨认。',
        sceneExpansion: '增加公路、旅馆、采访现场、录音机、药味、广告灯、汗和政治噪声。'
      }
    }
  ]
});
