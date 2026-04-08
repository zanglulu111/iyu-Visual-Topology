import { LibraryCategoryDef } from '../../../types';

export const SV1_GROUP_D_1: LibraryCategoryDef = {
  id: 'cat_sv1_spatial',
  name: `多线网状叙事与群像`,
  items: [
    {
      id: `RHIZOME`,
      name: `根茎/网状 (Rhizomatic)`,
      def: `【去中心化】没有明确的开头和结尾。故事是多个节点（人物/地点）之间的随机连接，像互联网一样。任意两点皆可相连。`,
      core: `代表作: 《云图》 / 《通天塔》 / 德勒兹哲学`,
    },

    {
      id: 'DATABASE',
      name: `数据库/列表 (Database Narrative)`,
      def: `【非叙事】故事不是线性发展的，而是像百科全书或游戏属性面板一样呈现。通过罗列"物品"、"设定"或"状态"来构建世界。`,
      core: `代表作: 《法兰西特派》 / 游戏《艾尔登法环》的碎片叙事`,
    },

    {
      id: 'FRACTAL',
      name: `分形/俄罗斯套娃 (Fractal Structure)`,
      def: `【自相似性】微观的 M1-M7 结构在宏观层面重复。个人的命运与宇宙的命运是同构的。`,
      core: `代表作: 《盗梦空间》 / 《锡尔斯玛利亚的云》`,
    },

    {
      id: 'POLYPHONIC',
      name: `复调/赋格 (Polyphonic / Fugue)`,
      def: `【多声部对位】不是多线叙事，而是"对位法"。几个声音同时说话，互不干扰但形成和声或不协和音。`,
      core: `代表作: 陀思妥耶夫斯基小说 / 《纳什维尔》`,
    },

    {
      id: 'CHAMBER',
      name: `密室/高压锅 (The Chamber)`,
      def: `【幽闭】故事发生在一个封闭空间（电梯/车内）。通过物理空间的挤压来迫使 M1 与 M4 (阻碍) 发生高强度的化学反应。`,
      core: `代表作: 《十二怒汉》 / 《活埋》 / 《电锯惊魂》`,
    }
  ]
};

export const SV1_GROUP_D_2: LibraryCategoryDef = {
  id: 'cat_sv1_void',
  name: `先锋实验与高概念`,
  items: [
    {
      id: `STATIC`,
      name: `静态/等待 (Static / Waiting)`,
      def: `【零动作】只有时间在流逝，什么都没有发生。主角在等待一个永远不会来的 M2 (遭遇)。强调无聊和空虚。`,
      core: `代表作: 《等待戈多》 / 《都灵之马》`,
    },

    {
      id: 'ONEIROLOGIC',
      name: `梦逻辑/联想 (Oneirologic / Dream)`,
      def: `【反因果】场景A转换到场景B不是因为逻辑，而是因为视觉相似性或自由联想。像做梦一样流动。`,
      core: `代表作: 《穆赫兰道》 / 《8½》`,
    },

    {
      id: 'ALLEGORY',
      name: `高概念寓言 (The Allegory)`,
      def: `【抽象化】人物没有名字，代表某种概念（如"贪婪"、"阶级"）。环境是心理的外化（如垂直的监狱、无尽的洞穴）。`,
      core: `代表作: 《饥饿站台》 / 《第七封印》 / 动画《短缺》`,
    }
  ]
};
