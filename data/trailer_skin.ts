
import { NarrativeBlockDef, LibraryCategoryDef } from '../types';

export const TRAILER_SKIN_BLOCKS: NarrativeBlockDef[] = [
  { id: "trl_skin_genre", name: "类型外壳", enName: "Genre Shell", description: "预告片的包装类型。", tags: [] },
  { id: "trl_skin_rhythm", name: "剪辑节奏", enName: "Rhythm", description: "剪辑的速率与逻辑。", tags: [] },
  { id: "trl_skin_hook", name: "听觉钩子", enName: "Audio Hook", description: "核心音效或配乐特色。", tags: [] }
];

export const TRAILER_SKIN_LIBRARY: LibraryCategoryDef[] = [
  {
    id: "trl_skin_genre_lib",
    name: "类型外壳 (Genre Shell)",
    desc: "预告片的商业包装。",
    items: [
      { id: "tsg_1", name: "恐怖惊悚 (Horror Thrill)", def: "低音轰鸣，大量心跳声，快速剪辑。", core: "调性：生理性压迫。" },
      { id: "tsg_2", name: "科幻史诗 (Sci-Fi Epic)", def: "管弦乐，广角镜头，巨物压迫感。", core: "调性：宏大感。" }
    ]
  },
  {
    id: "trl_skin_rhythm_lib",
    name: "剪辑节奏 (Rhythm)",
    desc: "预告片的动力学。",
    items: [
      { id: "tsr_1", name: "快节奏闪烁 (Rapid Blink)", def: "单帧剪辑，视觉轰炸。", core: "节奏：高压。" },
      { id: "tsr_2", name: "慢速拉伸 (Slow Burn)", def: "长镜头搭配重音，制造悬念。", core: "节奏：沉稳。" }
    ]
  },
  {
    id: "trl_skin_hook_lib",
    name: "听觉钩子 (Audio Hook)",
    desc: "耳朵的诱饵。",
    items: [
      { id: "tsh_1", name: "心脏跳动 (Heartbeat)", def: "由慢变快，直到消失。", core: "声音：紧迫感。" },
      { id: "tsh_2", name: "玻璃碎裂 (Glass Shatter)", def: "高频噪音瞬间爆发。", core: "声音：断裂感。" }
    ]
  }
];
