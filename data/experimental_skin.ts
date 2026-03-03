
import { NarrativeBlockDef, LibraryCategoryDef } from '../types';

export const EXPERIMENTAL_SKIN_BLOCKS: NarrativeBlockDef[] = [
  { id: "exp_skin_context", name: "还原语境", enName: "Context", description: "实验发生的本体论环境。", tags: [] },
  { id: "exp_skin_method", name: "还原方法", enName: "Method", description: "使用的介入手段。", tags: [] },
  { id: "exp_skin_object", name: "意向对象", enName: "Object", description: "凝视的核心目标。", tags: [] }
];

export const EXPERIMENTAL_SKIN_LIBRARY: LibraryCategoryDef[] = [
  {
    id: "exp_skin_context_lib",
    name: "还原语境 (Context)",
    desc: "实验的背景环境。",
    items: [
      { id: "esc_1", name: "绝对真空 (Absolute Vacuum)", def: "没有重力，没有空气，只有纯粹的空间。", core: "语境：隔离所有干扰。" },
      { id: "esc_2", name: "记忆废墟 (Memory Ruin)", def: "由破碎的日常物件构成的迷宫。", core: "语境：潜意识的物质化。" }
    ]
  },
  {
    id: "exp_skin_method_lib",
    name: "还原方法 (Method)",
    desc: "实验的介入手段。",
    items: [
      { id: "esm_1", name: "显微凝视 (Micro Gaze)", def: "极度放大局部，直到失去原有意义。", core: "方法：去语义化。" },
      { id: "esm_2", name: "多重曝光 (Double Exposure)", def: "两个层级的现实重叠，制造虚幻感。", core: "方法：影像拼贴。" }
    ]
  },
  {
    id: "exp_skin_object_lib",
    name: "意向对象 (Object)",
    desc: "凝视的目标。",
    items: [
      { id: "eso_1", name: "腐烂的红苹果 (Rotten Apple)", def: "展示有机物在时间中的败坏。", core: "对象：熵的具象。" },
      { id: "eso_2", name: "生锈的义肢 (Rusted Limb)", def: "人类对不朽追求的残骸。", core: "对象：技术的悲剧。" }
    ]
  }
];
