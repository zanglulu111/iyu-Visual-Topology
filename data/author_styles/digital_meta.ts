import { defineAuthorCategory } from './helpers';

export const DIGITAL_META = defineAuthorCategory({
  id: 'sector_digital',
  name: 'X. 游戏、网络与数字元 (Digital & Meta)',
  defaults: {
    transform: {
      time: '保留 SOURCE 事件骨架，可用任务日志、物品说明、系统提示、测试流程、帖子碎片或交互节点组织信息。',
      narrator: '叙述者可模拟游戏系统、脑内技能、档案机构、网络帖子或交互电影，但不得生成新故事路线。',
      psychology: '人物心理通过任务失败、界面反馈、物品描述、脑内争论、测试语音、网络梗或操作痕迹显影。',
      conflictRendering: '把原冲突染成任务链、收容协议、系统评分、脑内议会、玩家式选择、平台话语或数字档案压力。',
      visualAssets: '界面、日志、档案、任务地图、扫描线、低光实验室、废墟场景、物品栏、弹窗和论坛截图感。'
    },
    avoid: [
      '除非 SOURCE 和世界法则允许，不要把故事改成真正有自我意识的 AI 或超自然系统。'
    ]
  },
  items: [
    {
      id: 'kojima',
      name: '小岛秀夫 (Hideo Kojima)',
      description: '交互电影',
      styleTitle: '孤独连接任务',
      example: '《死亡搁浅》',
      dna: '军事科技术语 + 真诚说教 + 电影长镜头 + 第四墙边缘 + 孤独连接。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物行动写成一套孤独却必须完成的连接任务；复杂术语和长镜头只服务情感负重。',
      transform: {
        sceneExpansion: '增加装备、路线、通讯、地形、任务标记、沉重货物和远距离连接。',
        dialogue: '允许真诚解释和任务通话，但要压缩，避免设定淹没故事。'
      }
    },
    {
      id: 'fromsoft',
      name: '宫崎英高 (Hidetaka Miyazaki)',
      description: '碎片叙事',
      styleTitle: '破败碎片史诗',
      example: '《艾尔登法环》',
      dna: '物品说明 + 破败史诗 + 极少对话 + 死亡与火焰意象 + 悲剧余烬。',
      coreRewriteLogic: '保留 SOURCE 骨架，把背景和情感拆成物品、遗迹、称号、短句和残缺传说；人物行动像在废墟中拾回失败历史。',
      transform: {
        narrator: '减少解释，让物件说明、空间遗迹和沉默 NPC 式对白泄露真相。',
        visualAssets: '废墟、王座、灰烬、断剑、碑文、雾门、火光、破败盔甲等价物。'
      }
    },
    {
      id: 'disco',
      name: '极乐迪斯科 (Disco Elysium)',
      description: '脑内议会',
      styleTitle: '脑内政治酒醒',
      example: '《极乐迪斯科》',
      dna: '脑内技能互喷 + 政治哲学术语 + 宿醉现实 + 肮脏现实中的诗意。',
      coreRewriteLogic: '保留 SOURCE 骨架，把主角的行动写成脑内多个声音争夺解释权；城市现实肮脏，但语言带诗意和政治残渣。',
      transform: {
        psychology: '让逻辑、欲望、羞耻、身体反应等内在声音互相插话，但不要盖掉外部行动。',
        sceneExpansion: '增加破败街区、海风、旅馆、证物、酒味、旧政治标语和失败感。'
      }
    },
    {
      id: 'glados',
      name: 'GLaDOS (Portal)',
      description: '腹黑AI',
      styleTitle: '礼貌测试陷阱',
      example: '《传送门》',
      dna: '礼貌科学语气 + 夹带侮辱的鼓励 + 数据化死亡 + 测试流程 + 冷幽默。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成一套礼貌、冷静、带羞辱性的测试流程；若写实法则限制，声音可降维为机构广播、考核话术或说明文件。',
      transform: {
        narrator: '语气礼貌、科学、平静，但每句都在降低人的主体性。',
        conflictRendering: '把阻断显影为测试、评分、实验室流程、合规话术和奖励骗局。'
      }
    },
    {
      id: 'scp',
      name: 'SCP基金会 (SCP Foundation)',
      description: '收容文档',
      styleTitle: '冷档案收容',
      example: 'SCP-173',
      dna: '临床报告格式 + 数据遮蔽 + 客观冷漠恐怖 + 收容措施 + 异常等级。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事渲染为档案、访谈、事件报告和收容措施之间的冷记录；恐怖来自文档不解释人的痛苦。',
      transform: {
        narrator: '可用报告式段落和编号，但最终 synopsis 仍必须是小说正文，不是纯设定条目。',
        conflictRendering: '把阻断显影为协议、编号、权限、删除段落、实验记录和不可公开的事实。'
      }
    },
    {
      id: 'greentext',
      name: '网络绿文 (Greentext)',
      description: '4chan体',
      styleTitle: '碎片自嘲帖',
      example: '>Be me',
      dna: '箭头格式 + 极短句 + 自嘲 + 社死结局 + 网络口吻。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件压成极短、自嘲、跳跃的网络帖节奏；适合轻量短篇，不得牺牲 M7A/M7B。',
      transform: {
        syntax: '极短句、碎片化、口语，必要时模拟帖子节奏但不要破坏 JSON 输出。',
        narrator: '高度主观、丢脸、快速滑向失败。'
      }
    },
    {
      id: 'brainrot',
      name: 'Z世代/脑腐 (Gen Z Brainrot)',
      description: '抽象迷因',
      styleTitle: '迷因崩坏口吻',
      example: 'TikTok/Reels',
      dna: '小写口吻 + 网络黑话 + 语序破碎 + 虚无幽默 + 快速注意力切换。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成注意力碎裂、迷因化自嘲和虚无幽默的高速口吻；只建议用于短体量或强实验。',
      transform: {
        syntax: '语序可破碎、跳跃、黑话化，但必须保持事件可读。',
        narrator: '叙述者像被短视频切碎的主观意识，快速滑过笑点、羞耻和空洞。'
      }
    },
    {
      id: 'webnovel_cn',
      name: '系统爽文 (Web Novel System)',
      description: '多巴胺泵',
      styleTitle: '系统打脸泵',
      example: '《系统流》',
      dna: '系统提示 + 数值面板 + 快速打脸 + 主角优势 + 爽点节奏。',
      coreRewriteLogic: '保留 SOURCE 骨架，把行动节点包装成任务、奖励、等级、反转和即时反馈；不得把 M7A/M7B 改成简单胜利。',
      transform: {
        conflictRendering: '把阻断显影为任务失败、数值门槛、排行榜、权限锁、惩罚和打脸场面。',
        syntax: '节奏快、短段落、强反馈，但保留创意圣经的文学正文要求。'
      }
    }
  ]
});
