import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_C_1: LibraryCategoryDef = {
  id: 'cat_sv1_circle',
  name: `时空循环与无限流`,
  items: [
    {
      id: `LOOP`,
      name: `宿命轮回 (The Loop)`,
      def: `【首尾相连】结局 M7 必须揭示它就是开头的 M1。主角回到了原点，或者发现自己被困在时间里。`,
      core: `代表作: 《土拨鼠之日》 / 《恐怖游轮》`,
    },

    {
      id: 'SPIRAL',
      name: `螺旋下坠 (The Downward Spiral)`,
      def: `【恶性循环】重复相似的情节单元，但每一次重复，M6 (代价) 都更惨重，直至毁灭。`,
      core: `代表作: 《梦之安魂曲》 / 《被嫌弃的松子的一生》`,
    },

    {
      id: 'PARALLEL_LIVES',
      name: `滑动门/平行线 (Sliding Doors)`,
      def: `【二元分裂】基于 M2 的一个微小选择，分裂出两条完全不同的时间线，交叉叙述。`,
      core: `代表作: 《滑动门》 / 《罗拉快跑》`,
    }
  ]
};

export const SV1_GROUP_C_2: LibraryCategoryDef = {
  id: 'cat_sv1_truth',
  name: `多重主角视角与不可靠叙述`,
  items: [
    {
      id: `RASHOMON`,
      name: `罗生门 (Rashomon)`,
      def: `【主观真实】叙述同一个 M2 (遭遇) 事件三次。分别从 M1 (主角)、M4 (反派) 和旁观者的视角，且细节矛盾。`,
      core: `代表作: 《罗生门》 / 《最后的决斗》`,
    },

    {
      id: 'FRAME',
      name: `套层/戏中戏 (Frame Narrative)`,
      def: `【故事的嵌套】故事开始于某人"讲故事"。核心的 M1-M7 故事是被包裹在另一个叙事框架里的。`,
      core: `代表作: 《布达佩斯大饭店》 / 《一千零一夜》`,
    },

    {
      id: 'META',
      name: `元叙事/打破第四墙 (Meta-Narrative)`,
      def: `【自我指涉】角色意识到自己身处"故事"之中。M1 直接对话观众，或者试图修改剧本。`,
      core: `代表作: 《楚门的世界》 / 《死侍》`,
    },

    {
      id: 'UNRELIABLE',
      name: `不可靠叙述 (Unreliable Narrator)`,
      def: `【认知的欺骗】M1 在撒谎，或者 M1 疯了。结局 M7 揭示之前的所有叙述都是主观臆造的幻觉。`,
      core: `代表作: 《搏击俱乐部》 / 《少年派的奇幻漂流》`,
    },

    {
      id: 'O_HENRY',
      name: `欧亨利式反转 (The O. Henry Twist)`,
      def: `【结局重构】M1-M6 都在进行误导。结局 M7 揭示一个关键信息，彻底推翻之前的假设，产生"情理之中，意料之外"的震撼。`,
      core: `代表作: 《麦琪的礼物》 / 《第六感》 / 短片《调音师》`,
    },

    {
      id: 'MOCKUMENTARY',
      name: `伪纪录/访谈 (Mockumentary)`,
      def: `【第四面墙】角色直视镜头说话，或通过"采访"与"实况"的蒙太奇来制造反差。打破虚构的边界。`,
      core: `代表作: 《办公室》(The Office) / 《吸血鬼生活》 / 《第九区》`,
    }
  ]
};
