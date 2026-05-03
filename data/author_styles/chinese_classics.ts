import { defineAuthorCategory } from './helpers';

export const CHINESE_CLASSICS = defineAuthorCategory({
  id: 'sector_cn_classic',
  name: 'III. 中文古典与历史·东方根骨 (Chinese Classics)',
  defaults: {
    transform: {
      time: '遵守 SOURCE 因果，但可使用章回、判词、因果回环、草蛇灰线或传奇笔法组织时间。',
      narrator: '叙述者带古典讲述感，可评点、留白或以物喻人，但不得替角色说破 M7A。',
      psychology: '人物心理通过礼法、称谓、器物、服饰、饮食、诗性动作和场面调度显影。',
      conflictRendering: '把原冲突染成礼法、人情、江湖规矩、命数、家族秩序或市井因果的压力。',
      visualAssets: '屏风、庭院、灯影、酒席、古书、器物、衣料、水岸、街市、庙宇和阶序分明的空间。'
    }
  },
  items: [
    {
      id: 'caoxueqin',
      name: '曹雪芹 (Cao Xueqin)',
      description: '红楼梦中人',
      styleTitle: '繁华判词',
      example: '《红楼梦》',
      dna: '半文半白 + 服饰饮食医药细节 + 草蛇灰线 + 繁华背后的虚无 + 判词宿命。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物命运写成繁华器物、礼法关系和早已埋下的判词回声；情感越精致，败落越不可避免。',
      transform: {
        sceneExpansion: '重点扩写衣料、茶饭、药气、房间陈设、眼色和称谓里的阶序。',
        symbolism: '用诗、梦、器物、花木和闲话埋伏后来的命运翻转。'
      }
    },
    {
      id: 'sanguo',
      name: '罗贯中 (Romance of 3 Kingdoms)',
      description: '演义宏大叙事',
      styleTitle: '天下大势演义',
      example: '《三国演义》',
      dna: '忠奸对照 + 计谋对话 + 评书语调 + 宏大局势 + 动作和语言优先。',
      coreRewriteLogic: '保留 SOURCE 骨架，把个人冲突放进势力、谋略、盟约和天下局势中；人物选择像阵前落子，后果必须兑现。',
      transform: {
        conflictRendering: '把阻断显影为军令、盟约、名分、计策、权势平衡或阵营背叛。',
        syntax: '句法可带章回推进感，但不要复古到影响现代可读性。'
      }
    },
    {
      id: 'shinaian',
      name: '施耐庵 (Water Margin)',
      description: '江湖草莽',
      styleTitle: '江湖烈性',
      example: '《水浒传》',
      dna: '粗豪江湖口吻 + 直白暴力 + 大块吃肉 + 强动作动词 + 草莽义气。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突渲染为被逼到江湖规矩和身体行动里的义气、羞辱与反击。',
      transform: {
        psychology: '少写内心解释，多写喝酒、拍案、拔腿、挥拳、停步和眼神里的怒气。',
        visualAssets: '酒肆、泥路、县衙、码头、雨夜、兵器、粗布衣和汗气。'
      }
    },
    {
      id: 'liaozhai',
      name: '蒲松龄 (Strange Tales)',
      description: '文言志怪',
      styleTitle: '志怪照妖镜',
      example: '《聊斋志异》',
      dna: '文言风韵 + 志怪外壳 + 现实暗讽 + 书斋与异类情缘 + 朦胧意境。',
      coreRewriteLogic: '保留 SOURCE 骨架，把现实冲突写成一则精炼志怪；若世界法则写实，则把异怪降维为传闻、骗局、夜色误认、民俗或心理投影。',
      transform: {
        syntax: '语言精炼，有古意但保持简体中文可读。',
        conflictRendering: '用异事照出人情、贪欲、礼法和权力的荒唐。'
      }
    },
    {
      id: 'lingmengchu',
      name: '三言二拍 (Sanyan Erpai)',
      description: '市井警世',
      styleTitle: '市井因果',
      example: '《喻世明言》',
      dna: '市井人物 + 贪嗔痴 + 因果报应 + 世俗欲望 + 讲述者评点。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成一则市井欲望与因果兑现的警世奇案；人物越会算计，越被人情和巧合反算。',
      transform: {
        narrator: '允许带说书式评点，但不能替代场景行动。',
        sceneExpansion: '增加街市、铺面、钱账、婚丧、邻里闲话和小人物交易。'
      }
    },
    {
      id: 'shijing',
      name: '诗经楚辞 (Classic of Poetry)',
      description: '上古歌谣',
      styleTitle: '上古歌谣',
      example: '《离骚》',
      dna: '四言/骚体韵律 + 香草美人 + 反复咏叹 + 质朴情感 + 祭祀般的自然物象。',
      coreRewriteLogic: '保留 SOURCE 骨架，把关键事件压成带咏叹、重复和自然物象的古歌结构；行动清楚，情绪像祭辞一样回环。',
      transform: {
        syntax: '可使用短句、反复、并列和轻微古典虚词，但避免难懂仿古。',
        visualAssets: '河洲、草木、香草、旷野、祭器、风、衣带、星夜。'
      }
    }
  ]
});
