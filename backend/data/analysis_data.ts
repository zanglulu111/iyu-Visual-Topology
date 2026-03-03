
import { LacanCategory } from './lacan_dictionary';

export const ANALYSIS_LIBRARY: LacanCategory[] = [
  {
    id: "analysis_methods",
    name: "分析方法论",
    enName: "Methodology",
    desc: "如何拆解文本。",
    concepts: [
      {
        id: "actant_model", name: "行动元模型", enName: "Actantial Model", category: "Greimas",
        shortDef: "主体、客体、发送者、接收者、帮手、对手。",
        detailed: {
            definition: "所有故事都可以简化为这六个功能的互动。",
            analogy: "国王（发送者）派骑士（主体）去救公主（客体/接收者），神剑是帮手，龙是对手。",
            application: "角色功能分配。"
        }
      },
      {
        id: "campbell_journey", name: "英雄之旅", enName: "Hero's Journey", category: "Myth",
        shortDef: "启程、启蒙、归来。",
        detailed: {
            definition: "单一神话结构。",
            analogy: "星球大战，黑客帝国。",
            application: "标准商业片结构。"
        }
      }
    ]
  }
];
