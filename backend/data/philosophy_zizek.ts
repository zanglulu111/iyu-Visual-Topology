
import { LacanCategory } from './lacan_dictionary';

export const ZIZEK_DICTIONARY: LacanCategory[] = [
  {
    id: "zizek_ideology",
    name: "意识形态 (Ideology)",
    enName: "Ideology",
    desc: "关于意识形态如何通过幻想来结构现实。",
    concepts: [
      {
        id: "sublime_object", 
        name: "崇高客体", 
        enName: "The Sublime Object", 
        category: "Ideology",
        shortDef: "任何日常事物都可以被升华为崇高的意识形态客体，只要它占据了那个结构性的空缺。",
        detailed: {
            definition: "意识形态不是虚假的意识，而是社会现实本身的运作方式。崇高客体（如‘国家’、‘自由’）本身是空的，但它组织了我们的欲望。",
            analogy: "虽然你知道钱只是一张纸，但你依然把它当做神圣的东西来对待。",
            application: "M3 (欲望幻想)：将一个普通的麦高芬升格为神圣不可侵犯的追求目标。"
        }
      }
    ]
  }
];
