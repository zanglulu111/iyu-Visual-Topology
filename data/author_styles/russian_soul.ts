import { defineAuthorCategory } from './helpers';

export const RUSSIAN_SOUL = defineAuthorCategory({
  id: 'sector_russian',
  name: 'II. 俄国文学·灵魂拷问 (The Russian Soul)',
  defaults: {
    transform: {
      time: '时间推进保留现实因果，但允许忏悔、回忆、争辩和精神危机拖长每个选择的重量。',
      narrator: '叙述者贴近道德痛苦与社会现实，允许人物在语言中暴露自己的矛盾。',
      psychology: '人物心理通过辩论、羞耻、祈求、沉默、发热般的自我揭露或疲惫的日常动作显影。',
      conflictRendering: '把原冲突染成灵魂审判、道德债务、阶级压力、信仰危机或无法行动的生活困局。',
      visualAssets: '昏暗室内、潮湿街道、旧外套、火炉、雪、蜡烛、拥挤房间、廉价酒馆和病态的脸。'
    }
  },
  items: [
    {
      id: 'dostoevsky',
      name: '陀思妥耶夫斯基 (Dostoevsky)',
      description: '复调与癫痫',
      styleTitle: '灵魂审讯室',
      example: '《卡拉马佐夫兄弟》',
      dna: '复调争辩 + 极端道德痛苦 + 宗教渴望 + 病态心理剖开 + 混乱而狂热。',
      coreRewriteLogic: '保留 SOURCE 骨架，把每个关键事件渲染为人物彼此审讯、彼此诱惑、彼此拯救失败的复调场；行动不变，语言把灵魂逼到角落。',
      transform: {
        dialogue: '对白允许高压、重复、互相打断和道德逼问，但不得变成哲学论文。',
        psychology: '通过脸色、颤抖、狂笑、沉默和突然的忏悔显影精神裂缝。'
      }
    },
    {
      id: 'tolstoy',
      name: '托尔斯泰 (Leo Tolstoy)',
      description: '全景现实主义',
      styleTitle: '历史全景现实',
      example: '《战争与和平》',
      dna: '全景俯视 + 历史规律 + 质朴精准心理 + 家庭、战争与道德实践。',
      coreRewriteLogic: '保留 SOURCE 骨架，把个体选择放进家庭、阶层、战争/社会制度和历史惯性中；宏大结构通过极朴素的动作显影。',
      transform: {
        sceneExpansion: '扩写家庭、餐桌、公共场合、劳动、旅行与制度细节，让环境像历史机器一样运转。',
        syntax: '语言朴素、准确、少炫技，情感从具体行为里自然长出。'
      }
    },
    {
      id: 'chekhov',
      name: '契诃夫 (Anton Chekhov)',
      description: '零度生活',
      styleTitle: '停顿中的生活',
      example: '《樱桃园》',
      dna: '错位对白 + 琐碎日常 + 巨大停顿 + 无法行动 + 悲悯幽默。',
      coreRewriteLogic: '保留 SOURCE 骨架，把戏剧冲突藏进琐碎日常、错过重点的对白和无法行动的停顿里；真正的崩塌发生在生活照常继续时。',
      transform: {
        dialogue: '人物可以答非所问、绕开痛点、谈天气或琐事，让沉默承担冲突。',
        sceneExpansion: '增加餐桌、诊所、花园、候车室、办公室等平淡场所中的微弱崩坏。'
      }
    },
    {
      id: 'nabokov_ru',
      name: '布尔加科夫 (Bulgakov)',
      description: '魔幻讽刺',
      styleTitle: '荒诞权力讽刺',
      example: '《大师与玛格丽特》',
      dna: '荒诞闹剧 + 权力讽刺 + 都市怪事 + 时空交错 + 严肃信仰与滑稽场面并置。',
      coreRewriteLogic: '保留 SOURCE 骨架，把权力、恐惧和信仰危机渲染成带黑色喜剧质感的都市荒诞；若世界法则写实，则把超常感降维为谣言、误会、舞台事故或政治闹剧。',
      transform: {
        conflictRendering: '把阻断显影为滑稽又致命的权力系统、文化审查、集体恐慌或荒唐会议。',
        syntax: '节奏可突然从庄严滑向闹剧，再回到冷峻后果。'
      }
    }
  ]
});
