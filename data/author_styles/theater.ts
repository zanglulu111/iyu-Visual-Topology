import { defineAuthorCategory } from './helpers';

export const THEATER = defineAuthorCategory({
  id: 'sector_theater',
  name: 'VIII. 戏剧与独白 (Theater)',
  defaults: {
    transform: {
      time: '保持 SOURCE 事件因果，可用幕间推进、等待循环、对白攻防、独白或间离段落改变节奏。',
      narrator: '叙述像舞台调度，重视入场、退场、站位、灯光、道具和话语权。',
      psychology: '人物心理通过独白、潜台词、停顿、重复动作、华丽修辞或突然的舞台姿态显影。',
      conflictRendering: '把原冲突染成命运剧、等待剧、社交喜剧、商业攻防或政治寓言。',
      visualAssets: '舞台、灯光、幕布、空椅、门、餐桌、办公室、讲台、标语、站位和可见观演距离。'
    }
  },
  items: [
    {
      id: 'shakespeare',
      name: '莎士比亚 (Shakespeare)',
      description: '命运的音韵',
      styleTitle: '命运独白',
      example: '《哈姆雷特》',
      dna: '宏大自然隐喻 + 哲理独白 + 命运与性格悲剧 + 华丽骂人话 + 宫廷/家族冲突。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物选择写成性格缺陷与命运压力共同制造的悲剧场；关键时刻用独白、误认和权力语言放大冲突。',
      transform: {
        dialogue: '对白可华丽、机锋、带隐喻，但必须推动行动。',
        symbolism: '用自然、血、冠冕、影子、梦和舞台物件回环主题。'
      }
    },
    {
      id: 'beckett',
      name: '贝克特 (Samuel Beckett)',
      description: '荒诞等待',
      styleTitle: '等待循环',
      example: '《等待戈多》',
      dna: '循环对话 + 极简词汇 + 无聊和虚无 + 滑稽重复动作 + 不抵达的承诺。',
      coreRewriteLogic: '保留 SOURCE 骨架，把行动压成等待、重复、失败尝试和无法抵达的承诺；故事仍发生，但像一直没有开始。',
      transform: {
        time: '让等待和重复成为主要压力，事件以微小差异推进。',
        dialogue: '对白短、重复、答非所问，滑稽和绝望同时存在。'
      }
    },
    {
      id: 'wilde',
      name: '王尔德 (Oscar Wilde)',
      description: '唯美毒舌',
      styleTitle: '悖论沙龙',
      example: '《道林格雷的画像》',
      dna: '华丽辞藻 + 悖论格言 + 鄙视庸俗 + 唯美主义 + 社交锋芒。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成美、名声、欲望和社交面具之间的悖论游戏；每句漂亮话都要藏着腐烂。',
      transform: {
        dialogue: '对白精致、尖刻、悖论化，人物用机智遮盖恐惧。',
        sceneExpansion: '增加沙龙、镜子、花、画像、香水、晚宴和社交站位。'
      }
    },
    {
      id: 'mamet',
      name: '大卫·马泰 (David Mamet)',
      description: '马泰式粗口',
      styleTitle: '潜台词搏斗',
      example: '《格伦加里·格伦·罗斯》',
      dna: '破碎句子 + 攻击性粗口 + 商业权力斗争 + 潜台词大于实话。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成销售、权力、恐惧和谎言的语言搏斗；人物说的不是意思，而是地位。',
      transform: {
        dialogue: '句子破碎、互相打断、带攻击性，避免完整解释。',
        conflictRendering: '把阻断显影为业绩、合同、资格、谈判桌、办公室等级和话语压迫。'
      }
    },
    {
      id: 'brecht',
      name: '布莱希特 (Bertolt Brecht)',
      description: '间离效果',
      styleTitle: '间离寓言',
      example: '《四川好人》',
      dna: '间离效果 + 社会问题分析 + 歌唱式说教 + 切断共情 + 政治寓言。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件处理为社会机制的可见演示；可以让形式提醒人这是结构性问题，但不得直接讲出 M 轴术语。',
      transform: {
        narrator: '允许短促评注、标语化场景标题或歌谣感插入，但必须服务剧情。',
        conflictRendering: '把阻断显影为经济关系、制度角色、阶级交换和被迫表演的善。'
      }
    }
  ]
});
