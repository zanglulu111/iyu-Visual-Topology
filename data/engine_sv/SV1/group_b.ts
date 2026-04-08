import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_B: LibraryCategoryDef = {
  id: 'cat_sv1_time',
  name: `非线性时间叙事`,
  items: [
    {
      id: `LINEAR`,
      name: `经典线性 (Classic Linear)`,
      def: `【因果链】严格按照时间顺序：M1(日常) -> M2(遭遇) -> M3(目标) -> M4(阻碍) -> M5(行动) -> M6(代价) -> M7(结局)。`,
      core: `代表作: 《肖申克的救赎》 / 《阿甘正传》`,
    },

    {
      id: 'IN_MEDIA_RES',
      name: `开场即高潮 (In Media Res)`,
      def: `【悬崖开场】故事必须从 M6 (终极代价/高潮) 的悬崖边开始。先展示毁灭，再闪回解释原因。`,
      core: `代表作: 《绝命毒师》S1E1 / 《碟中谍》`,
    },

    {
      id: 'REVERSE',
      name: `逆向回溯 (Reverse Chronology)`,
      def: `【果在因前】从 M7 (结局) 开始写，逐场倒推，最后结束于 M2 (最初的遭遇)。`,
      core: `代表作: 《记忆碎片》(Memento) / 《不可撤销》`,
    },

    {
      id: 'REAL_TIME',
      name: `实时/一镜到底 (Real Time)`,
      def: `【零省略】文本时间 = 故事时间。无省略，无跳跃。详细描写每一秒的物理动作和环境噪音。`,
      core: `代表作: 《1917》 / 《正午》`,
    },

    {
      id: 'TIME_DILATION',
      name: `时间膨胀 (Time Dilation)`,
      def: `【微观史诗】将极短的一瞬间（如车祸发生的3秒，或一次对视）无限拉长，在这一瞬间内插入一生的回忆。`,
      core: `代表作: 《走马灯株式会社》 / 《黑客帝国》子弹时间`,
    },

    {
      id: 'SNOWBALL',
      name: `雪球/升级 (The Escalation)`,
      def: `【失控】一个微小的 M2 (起因) 引发一系列连锁反应。节奏越来越快，赌注越来越大，直至荒谬的毁灭 (M7)。`,
      core: `代表作: 《荒蛮故事》 / 《疯狂的石头》`,
    },

    {
      id: 'COUNTDOWN',
      name: `实时倒数 (The Countdown)`,
      def: `【绝对时限】一个明确的死亡时限 (M6) 悬在头顶。故事的每一秒都在逼近终点。强调时间的物理流逝感与焦虑。`,
      core: `代表作: 《罗拉快跑》 / 《24小时》`,
    },

    {
      id: 'MONTAGE',
      name: `蒙太奇/一生 (The Montage)`,
      def: `【时间压缩】极少对白，由音乐驱动。快速掠过漫长的时间跨度（如一生），展现命运的变迁与情感的积累。`,
      core: `代表作: 《飞屋环游记》(开头) / 《爱乐之城》(结尾)`,
    }
  ]
};
