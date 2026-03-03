
import { LacanCategory } from './lacan_dictionary';

export const MARX_DICTIONARY: LacanCategory[] = [
  {
    id: "marx_capital",
    name: "资本与异化 (Capital & Alienation)",
    enName: "Capital",
    desc: "关于商品、劳动与人的物化。",
    concepts: [
      {
        id: "commodity_fetishism", name: "商品拜物教", enName: "Commodity Fetishism", category: "Economy",
        shortDef: "商品被赋予了神秘的生命，而人际关系被简化为物与物的关系。",
        detailed: {
            definition: "在资本主义中，桌子不仅仅是木头，它会“跳舞”。我们崇拜商品，仿佛它们有灵魂，而劳动者的血汗被隐去了。",
            analogy: "看着iPhone，你看到的是科技与美学，看不到富士康工人的劳动。",
            application: "M3 (欲望)：物品控制了人。角色为了一个包或一块表出卖灵魂。"
        }
      },
      {
        id: "alienation", name: "异化", enName: "Alienation", category: "Labor",
        shortDef: "劳动者与他的劳动产品、劳动过程、类本质以及他人相分离。",
        detailed: {
            definition: "工作不再是创造，而是折磨。人变成了机器的零件。",
            analogy: "卓别林的《摩登时代》，人变成拧螺丝的机器。",
            application: "M1 (主体)：将主角设定为典型的异化劳动者（如外卖员、大厂螺丝钉）。"
        }
      }
    ]
  }
];
