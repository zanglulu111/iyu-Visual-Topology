
import { NarrativeBlockDef, LibraryCategoryDef } from '../types';

export const TRAILER_ENGINE_BLOCKS: NarrativeBlockDef[] = [
  { id: "trl_t0", name: "T0. 核心钩子", enName: "T0. The Hook", description: "前3秒的视觉冲击点。", tags: [] },
  { id: "trl_t1", name: "T1. 节奏断裂", enName: "T1. The Break", description: "打破日常平衡的瞬间。", tags: [] },
  { id: "trl_t2", name: "T2. 诱导能指", enName: "T2. The Tease", description: "只展示局部，不展示全局的诱导元素。", tags: [] },
  { id: "trl_t3", name: "T3. 情绪高压", enName: "T3. The Rise", description: "不断攀升的紧张感。", tags: [] },
  { id: "trl_t4", name: "T4. 关键台词", enName: "T4. The Line", description: "定调的一句话。", tags: [] },
  { id: "trl_t5", name: "T5. 视觉奇观", enName: "T5. The Spectacle", description: "昂贵的视觉展示。", tags: [] },
  { id: "trl_t6", name: "T6. 身份混淆", enName: "T6. The Identity", description: "制造角色身份的反转感。", tags: [] },
  { id: "trl_t7", name: "T7. 终极悬停", enName: "T7. The Cliffhanger", description: "戛然而止的黑屏。", tags: [] }
];

export const TRAILER_ENGINE_LIBRARY: LibraryCategoryDef[] = [
  {
    id: "trl_t0_lib",
    name: "核心钩子 (The Hook)",
    desc: "预告片的视觉抓手。",
    items: [
      { id: "t0_1", name: "无声的爆炸 (Silent Blast)", def: "巨大的爆炸却没有任何声音。", core: "钩子：视听错位。" },
      { id: "t0_2", name: "特写血滴 (Dripping Blood)", def: "红色的血滴入白色的牛奶中。", core: "钩子：色彩冲击。" }
    ]
  },
  {
    id: "trl_t7_lib",
    name: "终极悬停 (The Cliffhanger)",
    desc: "预告片的结尾方式。",
    items: [
      { id: "t7_1", name: "坠落的一瞬 (The Fall)", def: "在角色落地前黑屏。", core: "效果：诱导期待。" },
      { id: "t7_2", name: "睁开双眼 (The Awakening)", def: "死者在棺材中睁开眼，黑屏。", core: "效果：惊悚反转。" }
    ]
  }
];
