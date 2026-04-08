import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_E: LibraryCategoryDef = {
  id: 'cat_sv1_eastern',
  name: `东方生活流与散文叙事`,
  items: [
    {
      id: `KISHOTENKETSU`,
      name: `起承转合 (Kishotenketsu)`,
      def: `【无冲突】起(M1) -> 承(深化) -> 转(意外但无直接对抗) -> 合(M7)。避免西方戏剧的直接冲突 (Conflict)。`,
      core: `代表作: 《龙猫》 / 村上春树`,
    },

    {
      id: 'SLICE_OF_LIFE',
      name: `生活流/散点 (Slice of Life)`,
      def: `【去戏剧化】弱化 M3 (目标) 和 M4 (阻碍)。聚焦于 M1 (日常状态) 的微小波动。没有明确的开始和结束。`,
      core: `代表作: 《步履不停》 / 《一一》`,
    },

    {
      id: 'SHANSHUI',
      name: `散点透视/游观 (Shanshui / Wandering)`,
      def: `【移步换景】没有固定的焦点主角。视点随着环境流动，像展开一幅长卷轴画。关注环境大于人物。`,
      core: `代表作: 《清明上河图》式叙事 / 《路边野餐》`,
    },

    {
      id: 'KOAN',
      name: `公案/顿悟 (Koan / Epiphany)`,
      def: `【非理性跳跃】看似无关的对话或棒喝，突然导致 M7 (觉醒)。不讲逻辑，讲悟性。`,
      core: `代表作: 禅宗公案 / 《春去春又来》`,
    }
  ]
};
