import { defineAuthorCategory } from './helpers';

export const GENRE_FICTION = defineAuthorCategory({
  id: 'sector_genre',
  name: 'IX. 类型小说·幻想与冷硬 (Genre Fiction)',
  defaults: {
    transform: {
      time: '保持 SOURCE 骨架，以类型节奏组织悬念、任务、调查、恐怖递增、史诗旅程或极简生活片段。',
      narrator: '叙述者服务类型压力：冷硬、恐惧、幽默、史诗、末世或极简，不越权改变结局方向。',
      psychology: '人物心理通过行动习惯、恐惧反应、调查选择、身体疲惫、潜台词或生存细节显影。',
      conflictRendering: '把原冲突染成宇宙恐怖、硬汉行动、侦探调查、封闭谜案、赛博系统、史诗战争或极简现实。',
      visualAssets: '强类型道具、封闭空间、雨夜街道、废土、公路、服务器、古地图、酒吧、荒野和高压任务场所。'
    }
  },
  items: [
    {
      id: 'lovecraft',
      name: '洛夫克拉夫特 (Lovecraft)',
      description: '宇宙恐怖',
      styleTitle: '不可理解之物',
      example: '《克苏鲁的呼唤》',
      dna: '繁复形容 + 非欧几何 + 理智崩溃 + 远古冷漠 + 人类渺小。',
      coreRewriteLogic: '保留 SOURCE 骨架，把真实遭遇写成语言和理解力无法承接的尺度；若世界法则写实，则恐怖来自文献、地质、疾病、集体妄念或制度性不可知。',
      transform: {
        sceneExpansion: '增加旧档案、海雾、地下室、异形几何、盐味、星空、腐败气味和无法命名的痕迹。',
        psychology: '人物越试图描述，越暴露语言失败。'
      }
    },
    {
      id: 'hemingway',
      name: '海明威 (Hemingway)',
      description: '冰山理论',
      styleTitle: '冰山硬句',
      example: '《老人与海》',
      dna: '主谓宾短句 + 少形容词 + 可见动作 + 硬汉气质 + 潜台词。',
      coreRewriteLogic: '保留 SOURCE 骨架，只写可见动作、对话和物理环境；巨大的痛苦埋在不说的部分。',
      transform: {
        syntax: '短句、简单词、少解释，避免形容词堆砌。',
        psychology: '不写心理总结，只写手、汗、酒、鱼线、路、伤口和沉默。'
      }
    },
    {
      id: 'chandler',
      name: '钱德勒 (Raymond Chandler)',
      description: '黑色侦探',
      styleTitle: '厌世霓虹侦探',
      example: '《漫长的告别》',
      dna: '第一人称厌世口吻 + 尖刻比喻 + 城市反派 + 酒精味 + 危险诱惑。',
      coreRewriteLogic: '保留 SOURCE 骨架，把主角行动写成穿过腐败城市、谎言和诱惑的冷硬调查；每个比喻都带苦味。',
      transform: {
        narrator: '可以厌世、机智、带酒精味，但事实推进必须清楚。',
        visualAssets: '雨夜、百叶窗、酒吧、汽车、办公室、霓虹、烟、湿街。'
      }
    },
    {
      id: 'agatha',
      name: '阿加莎 (Agatha Christie)',
      description: '暴风雪山庄',
      styleTitle: '封闭谜案',
      example: '《无人生还》',
      dna: '封闭空间 + 每个人有秘密 + 集结解谜 + 优雅谋杀 + 线索公平。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突组织成封闭空间里的秘密交换和线索回收；反转只改变理解，不改写事件结局。',
      transform: {
        time: '按线索、证词、误导和最终回收组织节奏。',
        sceneExpansion: '增加客厅、餐桌、名单、钟、钥匙、暴雨/暴雪、遗嘱、茶具。'
      }
    },
    {
      id: 'stephenking',
      name: '斯蒂芬·金 (Stephen King)',
      description: '美式惊悚',
      styleTitle: '童年恐惧慢燃',
      example: '《它》(It)',
      dna: '品牌日常 + 童年创伤 + 口语内心 + 慢热恐惧 + 小镇阴影。',
      coreRewriteLogic: '保留 SOURCE 骨架，把恐怖从普通生活细节中慢慢渗出；真正的怪物必须连接童年、家庭或小镇共同体的伤口。',
      transform: {
        sceneExpansion: '增加超市、学校、地下室、公路、电视声、廉价玩具、童年物件和小镇八卦。',
        psychology: '让恐惧先以熟悉物件的小小异常出现。'
      }
    },
    {
      id: 'gibson',
      name: '威廉·吉布森 (William Gibson)',
      description: '赛博朋克',
      styleTitle: '霓虹低生活',
      example: '《神经漫游者》',
      dna: '高科技低生活 + 霓虹雨水 + 技术黑话 + 黑客式思维流 + 身体商品化。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突渲染为网络、资本、身体、街头和信息黑市之间的低温交易；科技必须服务欲望和阶级。',
      transform: {
        sceneExpansion: '增加霓虹、雨、终端、廉价旅馆、义体等价物、数据市场、广告屏和地下诊所。',
        syntax: '短促、冷、带技术黑话，但不牺牲可读性。'
      }
    },
    {
      id: 'adams',
      name: '道格拉斯·亚当斯 (Douglas Adams)',
      description: '宇宙幽默',
      styleTitle: '一本正经的荒唐',
      example: '《银河系漫游指南》',
      dna: '一本正经胡说 + 讽刺比喻 + 轻松虚无主义 + 官僚宇宙 + 逻辑笑话。',
      coreRewriteLogic: '保留 SOURCE 骨架，把最严肃的灾难写成制度、宇宙尺度或日常逻辑中的荒唐笑话；笑点后面保留存在空洞。',
      transform: {
        narrator: '叙述者可冷幽默、说明书式跑偏，但不能稀释关键代价。',
        conflictRendering: '把阻断显影为荒唐规定、宇宙客服、概率事故或逻辑悖论。'
      }
    },
    {
      id: 'tolkien',
      name: '托尔金 (J.R.R. Tolkien)',
      description: '古典奇幻',
      styleTitle: '古典史诗行旅',
      example: '《指环王》',
      dna: '古英语庄重 + 地理家谱 + 诗歌穿插 + 善恶史诗 + 远行同盟。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成一次穿越地图、血统、誓言和古老阴影的使命远行；写实世界中降维为家族史、地理传统和旧誓约。',
      transform: {
        sceneExpansion: '增加地图、地名、古道、山脉、河流、歌谣、铭文、族谱和旅伴关系。',
        syntax: '庄重、清晰、带古老时间感。'
      }
    },
    {
      id: 'martin',
      name: '马丁 (G.R.R. Martin)',
      description: '冰与火',
      styleTitle: '权力餐桌',
      example: '《权力的游戏》',
      dna: '多视点 + 美食细节 + 高死亡风险 + 政治联姻 + 灰色人物。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成利益、血缘、盟约、食物、身体风险和权力交易；没有人因主角身份而安全。',
      transform: {
        sceneExpansion: '增加宴席、家徽/组织标志、地图、信件、寝室、刑场、酒和肉类细节。',
        conflictRendering: '把阻断显影为联盟、继承、交换、背叛、债务和暴力后果。'
      }
    },
    {
      id: 'mccarthy',
      name: '科马克·麦卡锡 (Cormac McCarthy)',
      description: '血色西部',
      styleTitle: '圣经式荒原',
      example: '《血色子午线》',
      dna: '无引号 + and 长句 + 地狱景观 + 冷漠暴力 + 圣经语调。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成荒原、暴力和命运冷漠中的行走；人的解释在巨大的景观面前变得很小。',
      transform: {
        syntax: '可用庄严长句和并列推进，少引号，少心理解释。',
        visualAssets: '荒原、尘土、血、日落、废屋、道路、火、骨感地貌。'
      }
    },
    {
      id: 'carver',
      name: '雷蒙德·卡佛 (Raymond Carver)',
      description: '极简主义',
      styleTitle: '蓝领空白',
      example: '《当我们谈论爱情时》',
      dna: '极简词汇 + 无关小事 + 巨大空虚 + 突然中断 + 蓝领生活。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突压进普通谈话、廉价房间、未完成动作和突然停止的结尾里；最重要的东西不被说出。',
      transform: {
        syntax: '极简、白描、短句，避免抒情解释。',
        sceneExpansion: '增加厨房、汽车旅馆、啤酒、桌子、烟灰缸、账单、普通工作服。'
      }
    }
  ]
});
