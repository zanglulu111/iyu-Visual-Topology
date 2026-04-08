import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_F: LibraryCategoryDef = {
  id: 'cat_sv1_short',
  name: `短片高爆发型叙事模型`,
  items: [
    {
      id: `SHORT_SETUP_PAYOFF`,
      name: `铺垫-反转 (The Joke) (The Setup-Payoff)`,
      def: `【段子结构】前80%是正常的铺垫 (Setup)，最后20%是一个推翻前提的包袱 (Punchline)。`,
      core: `代表作: 《黑洞》 (The Black Hole)`,
    },

    {
      id: 'SHORT_LOOP',
      name: `莫比乌斯环 (The Loop) (The Loop)`,
      def: `【首尾相连】影片结束的画面正是影片开始的画面。主角被困在时间或逻辑的死循环中。`,
      core: `代表作: 《两辆车一夜》 (Two Cars, One Night)`,
    },

    {
      id: 'SHORT_ESCALATION',
      name: `熵增雪球 (The Escalation) (The Escalation)`,
      def: `【失控】一个小谎言或小错误，迅速演变成无法收拾的巨大灾难。节奏极快。`,
      core: `代表作: 《母亲》 (Mother!)`,
    },

    {
      id: 'SHORT_INVERSION',
      name: `身份置换 (The Inversion) (The Inversion)`,
      def: `【角色互换】猎人变成猎物，受害者变成施暴者。通过视角的反转揭示真相。`,
      core: `代表作: 《午餐》 (Lunch Date)`,
    },

    {
      id: 'SHORT_DISCOVERY',
      name: `发现异物 (The Discovery) (The Discovery)`,
      def: `【单一事件】主角在平凡环境中发现了一个不该存在的东西（尸体/外星人/黑洞）。`,
      core: `代表作: 《调音师》 (The Piano Tuner)`,
    },

    {
      id: 'SHORT_SLICE',
      name: `生活切片 (The Vignette) (The Slice of Life)`,
      def: `【无头无尾】截取生活中的一段对话或状态。没有强烈的戏剧冲突，只有氛围。`,
      core: `代表作: 《雪国列车前传》`,
    },

    {
      id: 'SHORT_MEETING',
      name: `遭遇战 (The Meeting) (The Meeting)`,
      def: `【双人博弈】两个陌生人在特定空间（电梯/车站）相遇，通过对话改变彼此。`,
      core: `代表作: 《信号》 (Signs)`,
    },

    {
      id: 'SHORT_GOODBYE',
      name: `漫长的告别 (The Goodbye) (The Goodbye)`,
      def: `【分离时刻】聚焦于两个人分开前的最后几分钟。充满潜台词和未尽之言。`,
      core: `代表作: 《父与女》 (Father and Daughter)`,
    },

    {
      id: 'SHORT_CHASE',
      name: `猫鼠游戏 (The Chase) (The Chase)`,
      def: `【纯动能】A追B。几乎没有对白，完全靠动作和剪辑驱动叙事。`,
      core: `代表作: 《便衣》 (The French Connection Chase)`,
    },

    {
      id: 'SHORT_TRAP',
      name: `瓮中之鳖 (The Trap) (The Trap)`,
      def: `【幽闭空间】主角被困在一个地方（陷阱/房间/身体），必须想办法逃脱。`,
      core: `代表作: 《127小时》 (短片版)`,
    },

    {
      id: 'SHORT_KULESHOV',
      name: `库里肖夫 (The Kuleshov) (The Kuleshov Effect)`,
      def: `【联想蒙太奇】通过画面的并置产生意义。A画面 + B画面 = C概念。`,
      core: `代表作: 《堤》 (La Jetée)`,
    },

    {
      id: 'SHORT_MACGUFFIN',
      name: `麦高芬追逐 (The MacGuffin) (The MacGuffin)`,
      def: `【物品驱动】所有人都在抢一个包/信/箱子。箱子里是什么不重要。`,
      core: `代表作: 《雇佣人生》 (El Empleo)`,
    },

    {
      id: 'SHORT_CONCEPT',
      name: `高概念设定 (High Concept) (The Concept)`,
      def: `【假如...】改变世界的一条物理规则（如：重力反转/人无法撒谎）。`,
      core: `代表作: 《谎言的诞生》`,
    },

    {
      id: 'SHORT_SILENT',
      name: `默片复兴 (The Silent) (The Silent Narrative)`,
      def: `【纯视觉】完全没有对白。依靠肢体语言、音效和构图讲故事。`,
      core: `代表作: 《纸人》 (Paperman)`,
    },

    {
      id: 'SHORT_MONOLOGUE',
      name: `内心独白 (The Monologue) (The Monologue)`,
      def: `【意识流】画面是状态，声音是角色的内心自白。主观性极强。`,
      core: `代表作: 《出租车司机》 (镜子独白)`,
    },

    {
      id: 'SHORT_INTERVIEW',
      name: `伪访谈 (The Interview) (The Interview)`,
      def: `【打破第四墙】角色面对镜头说话。纪录片风格。真实与虚构的模糊。`,
      core: `代表作: 《生物》 (Creature Comforts)`,
    },

    {
      id: 'SHORT_TIME_COMP',
      name: `时间压缩 (Time Compression) (The Montage)`,
      def: `【一生一瞬】在几分钟内展示一个人的一生或一段关系的兴衰。`,
      core: `代表作: 《飞屋环游记》 (前10分钟)`,
    },

    {
      id: 'SHORT_PARALLEL',
      name: `平行剪辑 (The Parallel) (Parallel Editing)`,
      def: `【双线叙事】同时展示两个不同时空或人物的行动，最终汇聚。`,
      core: `代表作: 《权力的游戏》 (片头)`,
    },

    {
      id: 'SHORT_CIRCULAR',
      name: `首尾呼应 (The Circular) (The Circular)`,
      def: `【结构闭环】结尾的台词或动作与开头完全一致，但意义已变。`,
      core: `代表作: 《降临》`,
    },

    {
      id: 'SHORT_ABSURD',
      name: `卡夫卡式 (The Absurdist) (The Absurdist)`,
      def: `【荒谬逻辑】世界运行规则毫无逻辑，但角色严肃对待。黑色幽默。`,
      core: `代表作: 《锡鼓》 (部分片段)`,
    },

    {
      id: 'SHORT_JUMP_SCARE',
      name: `恐怖刺点 (The Sting) (The Horror Sting)`,
      def: `【惊悚构建】长时间的静默与压抑，铺垫最后的一秒惊吓。`,
      core: `代表作: 《关灯后》 (Lights Out)`,
    },

    {
      id: 'SHORT_MEET_CUTE',
      name: `浪漫邂逅 (The Meet Cute) (The Meet Cute)`,
      def: `【相遇瞬间】两个人如何相遇。充满巧合、尴尬与火花。`,
      core: `代表作: 《爱在黎明破晓前》`,
    },

    {
      id: 'SHORT_FALLOUT',
      name: `灾难之后 (The Fallout) (The Fallout)`,
      def: `【余波】不展示灾难本身，只展示灾难发生后的废墟和人的反应。`,
      core: `代表作: 《下一层》 (Next Floor)`,
    },

    {
      id: 'SHORT_JOURNEY',
      name: `公路微缩 (The Journey) (The Journey)`,
      def: `【A点到B点】角色必须从一个地方移动到另一个地方，路途即成长。`,
      core: `代表作: 《小满》`,
    },

    {
      id: 'SHORT_WAITING',
      name: `等待戈多 (The Waiting) (The Waiting)`,
      def: `【静态张力】角色在等待某事发生。强调无聊、焦虑和微小的互动。`,
      core: `代表作: 《加油站》`,
    },

    {
      id: 'SHORT_OBJECT_GAZE',
      name: `物之凝视 (Object Gaze) (The Object Gaze)`,
      def: `【非人视角】从物体（如冰箱、硬币）的视角讲述故事。`,
      core: `代表作: 《塑料袋》 (Plastic Bag)`,
    },

    {
      id: 'SHORT_FLASHBACK',
      name: `记忆碎片 (The Flashback) (The Flashback)`,
      def: `【非线性】现在与过去交织。通过物品触发回忆。`,
      core: `代表作: 《回忆积木屋》`,
    },

    {
      id: 'SHORT_DREAM',
      name: `梦境逻辑 (The Dream) (The Dream)`,
      def: `【超现实】物体变形，空间错乱。遵循潜意识的关联而非物理法则。`,
      core: `代表作: 《安达鲁之犬》`,
    },

    {
      id: 'SHORT_DILEMMA',
      name: `电车难题 (The Dilemma) (The Dilemma)`,
      def: `【道德困境】主角必须在两个糟糕的选项中做出选择。没有赢家。`,
      core: `代表作: 《平衡》 (Balance)`,
    },

    {
      id: 'SHORT_ARGUMENT',
      name: `语言博弈 (The Argument) (The Argument)`,
      def: `【纯对话】两个人在一个房间里争吵。语言作为武器。权力的反转。`,
      core: `代表作: 《杀戮》 (Carnage)`,
    },

    {
      id: 'SHORT_TWIST',
      name: `欧亨利式 (The Twist) (The O. Henry Twist)`,
      def: `【情理之中】结局的一个信息彻底改变了之前所有情节的含义。`,
      core: `代表作: 《宵禁》 (Curfew)`,
    },

    {
      id: 'SHORT_AMBIGUITY',
      name: `开放结局 (The Ambiguity) (The Open Ending)`,
      def: `【悬置】故事在最高潮处戛然而止。没有答案。陀螺还在转吗？`,
      core: `代表作: 《盗梦空间》结尾`,
    }
  ]
};
