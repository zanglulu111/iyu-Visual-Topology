
import { NarrativeBlockDef, LibraryCategoryDef } from '../types';

export const POETIC_ENGINE_BLOCKS: NarrativeBlockDef[] = [
  { id: "poe_p0", name: "S. 观察主体", enName: "S. The Subject", description: "执行观察的行为主体。", tags: [] },
  { id: "poe_p1", name: "C. 存在语境", enName: "C. The Context", description: "观察发生的本体论背景。", tags: [] },
  { id: "poe_p2", name: "V. 交互动作", enName: "V. Interaction", description: "主体对客体执行的非功利性动作。", tags: [] },
  { id: "poe_p3", name: "O. 凝视客体", enName: "O. The Object", description: "被观察、被异化的核心客体。", tags: [] },
  { id: "poe_p4", name: "R. 哲学真理", enName: "R. The Revelation", description: "本质直观后揭示的真理。", tags: [] }
];

export const POETIC_ENGINE_LIBRARY: LibraryCategoryDef[] = [
  {
    id: "exp_skin_context_lib",
    name: "还原语境 (Context)",
    desc: "实验的背景环境。",
    items: [
      { id: "esc_1", name: "绝对真空 (Absolute Vacuum)", def: "没有重力，没有空气，只有纯粹的空间。", core: "语境：隔离所有干扰。" },
      { id: "esc_2", name: "记忆废墟 (Memory Ruin)", def: "由破碎的日常物件构成的迷宫。", core: "语境：潜意识的物质化。" }
    ]
  }
];
