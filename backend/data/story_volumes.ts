
import { StoryVolume } from '../types';

export const STORY_VOLUMES: StoryVolume[] = [
  // === TIER 1: INSTANT (15s - 60s) ===
  {
    id: 'VOL_15S',
    name: '15秒 (15s)',
    duration_label: '15s Bumper',
    description: '【瞬间强刺激】无铺垫，直接高潮。像是一个视觉的耳光。',
    structure_density: 'PROTOCOL: [15s BUMPER]. NO PLOT SETUP. Jump directly to the visual punchline. Pure sensory impact. Structure: Hook -> Climax (Immediate).',
    lacanian_focus: 'The Gaze (凝视)。实在界的瞬间闪现，无逻辑的冲击。',
    word_count: '600'
  },
  {
    id: 'VOL_30S',
    name: '30秒 (30s)',
    duration_label: '30s Spot',
    description: '【单点反转】标准的广告/短视频逻辑。铺垫-反转-落版。',
    structure_density: 'PROTOCOL: [30s SPOT]. Single concept structure. 1. The Setup (Status Quo) -> 2. The Disruption (The Twist). Focus on a single clever idea.',
    lacanian_focus: 'Object a (对象a)。快速展示欲望的诱饵。',
    word_count: '700'
  },
  {
    id: 'VOL_60S',
    name: '60秒 (60s)',
    duration_label: '1 Min Short',
    description: '【完整微故事】极度紧凑的起承转合。麻雀虽小，五脏俱全。',
    structure_density: 'PROTOCOL: [1 MINUTE MICRO-NARRATIVE]. CRITICAL: This must be a COMPLETE STORY with Beginning, Middle, and End. Do not just describe a scene. Structure: Inciting Incident (0-10s) -> Conflict (10-40s) -> Resolution (40-60s).',
    lacanian_focus: 'The Cut (切分)。在极短时间内完成一次主体的缝合。',
    word_count: '800'
  },
  
  // === TIER 2: EXTENDED MICRO (90s) ===
  {
    id: 'VOL_90S',
    name: '90秒 (90s)',
    duration_label: '90s Narrative',
    description: '【情绪延展】在完整叙事的基础上，增加一个具体的“情绪渲染点”。',
    structure_density: 'PROTOCOL: [90s NARRATIVE]. A complete story that allows for ONE moment of atmospheric breathing or character depth. Structure: Setup -> Complication -> The "Vibe" Moment -> Resolution.',
    lacanian_focus: 'The Imaginary (想象界)。在叙事中构建一个短暂的完美镜像。',
    word_count: '1000'
  },

  // === TIER 3: SHORT (3m - 5m) ===
  {
    id: 'VOL_3M',
    name: '3分钟 (3 Min)',
    duration_label: '3 Min Concept',
    description: '【MV/概念片】标准的音乐短片体量。可以承载复杂的视听结构和非线性剪辑。',
    structure_density: 'PROTOCOL: [3 MINUTE CONCEPT]. Focus on RHYTHM and VISUAL FLOW. Can be non-linear. Needs a strong high-concept core. Equivalent to a music video structure.',
    lacanian_focus: 'The Drive (驱力)。围绕核心冲动的反复循环与爆发。',
    word_count: '1200'
  },
  {
    id: 'VOL_5M',
    name: '5分钟 (5 Min)',
    duration_label: '5 Min Short',
    description: '【电影节短片】单一场景的极致挖掘，或两个场景的精彩对切。深度人物互动。',
    structure_density: 'PROTOCOL: [5 MINUTE FILM]. Focus on a SINGLE SCENE extended to its limit, or a tight two-scene structure. Deep character interaction. Show, don\'t tell.',
    lacanian_focus: 'Inter-subjectivity (主体间性)。两个主体之间的高强度博弈。',
    word_count: '1500'
  },

  // === TIER 4: NARRATIVE SHORT (5-15m) ===
  {
    id: 'VOL_15M',
    name: '5-15分钟 (5-15m)',
    duration_label: '15 Min Drama',
    description: '【三幕剧短片】完整的人物弧光。包含困境、试炼、高潮与改变。',
    structure_density: 'PROTOCOL: [NARRATIVE SHORT FILM]. Full 3-Act Structure adapted for short film. The protagonist MUST undergo a psychological change. Detailed world building allowed.',
    lacanian_focus: 'Fantasy Traversal (穿越幻想)。主体直面创伤并发生改变。',
    word_count: '1800'
  },

  // === TIER 5: LONG FORM (20m - 90m) ===
  {
    id: 'VOL_45M',
    name: '20-45分钟 (20-45m)',
    duration_label: 'TV Episode',
    description: '【剧集/中篇】多线索叙事。可以包含B故事（副线）和更复杂的社会背景。',
    structure_density: 'PROTOCOL: [TV EPISODE]. Complex structure with A-Plot and B-Plot. Develop supporting characters and cliffhangers. Dialogues should be rich and subtextual.',
    lacanian_focus: 'Symbolic Order (符号界)。展示社会网络对个体的编织。',
    word_count: '2500'
  },
  {
    id: 'VOL_90M',
    name: '90分钟 (90m)',
    duration_label: 'Feature Film',
    description: '【电影长片】宏大的英雄之旅。彻底的命运流转与世界观构建。',
    structure_density: 'PROTOCOL: [FEATURE FILM TREATMENT]. A sweeping narrative structure. 1. The Ordinary World -> 2. The Call -> 3. The Ordeal -> 4. The Return. Deep philosophical themes.',
    lacanian_focus: 'The Big Other (大他者)。总体化的意义系统与最终的真理/幻灭。',
    word_count: '3000'
  }
];
