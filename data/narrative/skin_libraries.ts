
import { LibraryCategoryDef, NarrativeBlockDef, LibraryItemDef } from '../../types';

// ============================================================
// NEW ENGINE SURFACE IMPORTS (SUR1-SUR10)
// 全部替换为 engine_surface/ 下的新版 patch 数据源
// ============================================================
import { SUR1_DATA } from '../engine_surface/SUR1';
import { SUR2_DATA } from '../engine_surface/SUR2';
import { SUR4_DATA } from '../engine_surface/SUR4';
import { SUR5_DATA } from '../engine_surface/SUR5';
import { SUR6_DATA } from '../engine_surface/SUR6';
import { SUR7_DATA } from '../engine_surface/SUR7';
import { SUR8_DATA } from '../engine_surface/SUR8';
import { SUR9_DATA } from '../engine_surface/SUR9';
import { IDEOLOGY_CATEGORIES as SUR10_DATA } from '../engine_surface/SUR10';
import { SUR11_DATA } from '../engine_surface/SUR11';

import { SV1_DATA } from '../engine_sv/SV1';
import { SV2_DATA } from '../engine_sv/SV2';

// Synthesizer 调音台参数 (SUR4X removed in v3.1)
import { SYNTHESIZER_SUR10X } from '../engine_core/synthesizer/sur10x';

// ============================================================
// BLOCK DEFINITIONS (UI 侧边栏区块定义)
// ============================================================
export const SKIN_BLOCKS: NarrativeBlockDef[] = [
  {
    id: "skin_era",
    name: "SUR2.背景场域",
    enName: "sur2.Background Field",
    description: "决定叙事发生的时代背景、历史张力或神话坐标。它是社会矛盾与因果逻辑发生的原始'温床'。",
    descriptionEn: "Determines the historical tension, mythic coordinates, or temporal setting where social conflicts and causal logic brew.",
    tags: []
  },
  {
    id: "skin_society",
    name: "SUR4.社会形态",
    enName: "sur4.Social Order",
    description: "界定压盖在人物头顶的终极秩序，如：算法统治、黑暗神权、宗法礼教、寡头垄断。",
    descriptionEn: "Defines the ultimate order that dominates the characters, such as algorithmic rule, dark autocracy, or clan laws.",
    tags: []
  },
  {
    id: "skin_everything",
    name: "SUR5.对象预设",
    enName: "sur5.Object Anchor",
    description: "表层对象预设。它可以是麦高芬、凭证、信物、黑箱、钥匙或装置，只回答故事追逐什么物。",
    descriptionEn: "Surface object preset. A MacGuffin, token, keepsake, black box, key, or device that answers what object the story pursues.",
    tags: []
  },
  {
    id: "skin_location",
    name: "SUR6.空间容器",
    enName: "sur6.Space Container",
    description: "表层空间预设。只回答事件发生在什么可见空间里。",
    descriptionEn: "Surface space preset. Answers only what visible space the event occurs in.",
    tags: []
  },
  {
    id: "skin_gender",
    name: "SUR7.选角呈现",
    enName: "sur7.Casting Presentation",
    description: "人物在画面、称谓和互动中采用的性别呈现标签；只给选角层。",
    descriptionEn: "Gender presentation labels used in image, address, and interaction; casting layer only.",
    tags: []
  },
  {
    id: "skin_age",
    name: "SUR8.年龄阶段",
    enName: "sur8.Age Stage",
    description: "人物进入故事时的可见年岁区间与行动条件；只给年龄层。",
    descriptionEn: "The visible age band and action conditions at story entry; age layer only.",
    tags: []
  },
  {
    id: "skin_profession",
    name: "SUR9.职业身份",
    enName: "sur9.Role Preset",
    description: "表层身份预设。只回答人物以什么社会身份、职业岗位或登记状态进入故事世界。",
    descriptionEn: "Surface role preset. Answers only what social identity, occupation, or registered status the character enters the story world with.",
    tags: []
  },
  {
    id: "skin_ideology",
    name: "SUR10.信念预设",
    enName: "sur10.Belief Preset",
    description: "人物开场时用于解释世界的表层信念语言；不解释人物成因，不规定终点。",
    descriptionEn: "Surface belief language used by the character at the start to explain the world; it does not explain origins or fix endpoints.",
    tags: []
  },
  {
    id: "skin_ending",
    name: "SUR-END.显性收场",
    enName: "sur-end.Visible Ending",
    description: "故事表层最后可见的收场画面，只描述事件终端与画面停点，不裁决意义。",
    descriptionEn: "The final visible closure on the surface layer: terminal event and last frame, without deciding meaning.",
    tags: []
  },

  {
    id: "skin_structure",
    name: "SV1.叙事结构",
    enName: "sv1.Narrative Structure",
    description: "负责故事本身的骨架排布模板（不仅是风格，更是工程学图纸）。",
    descriptionEn: "The structural template for the plot (Engineering blueprints).",
    tags: []
  },
  {
    id: "skin_volume",
    name: "SV2.故事体量",
    enName: "sv2.Story Volume",
    description: "负责数值化输出的范围：时间跨度、节奏密度与总长。",
    descriptionEn: "The numerical output scope: temporal span, density, and duration.",
    tags: []
  },
];

export const ALL_SKIN_BLOCKS = [
    {
      id: "skin_genre",
      name: "SUR1.叙事动力",
      enName: "sur1.Drive",
      description: "决定能量喷发的物理形式，如：爱情、复仇、寻宝、逃杀。",
      descriptionEn: "The physical form of energy eruption (e.g., Revenge).",
      tags: []
    },
    ...SKIN_BLOCKS,
    {
      id: "sur10x",
      name: "SUR10X.信念裂度",
      enName: "sur10x.Belief Fracture",
      description: "主体对自己所持信仰的当真程度——从虔信到决裂的连续谱。",
      descriptionEn: "The degree to which the subject takes their own belief seriously — a spectrum from devotion to rupture.",
      tags: []
    }
];

// ============================================================
// SV1/SV2 FLAT MAPPINGS (结构与体量保留旧逻辑)
// ============================================================
const FLAT_STRUCTURE_ITEMS: LibraryItemDef[] = SV1_DATA.flatMap(cat => cat.items.map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })));

// ============================================================
// SKIN_LIBRARY: 全量词库（新版 engine_surface 数据源）
// ============================================================
export const SKIN_LIBRARY: LibraryCategoryDef[] = [
    // SUR1: 叙事动力 — 从 engine_surface/SUR1 加载 (也供其他调用后备)
    {
        id: "skin_genre_lib",
        name: "叙事动力",
        nameEn: "Drive",
        desc: "决定能量喷发的物理形式",
        items: SUR1_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR2: 背景场域 — 从 engine_surface/SUR2 加载 (也供其他调用后备)
    {
        id: "skin_era_lib",
        name: "背景场域/废弃世界",
        nameEn: "Field / Motif",
        desc: "决定叙事发生的时代背景",
        items: SUR2_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR4: 社会形态 — 从 engine_surface/SUR4 加载
    {
        id: "skin_society_lib",
        name: "社会形态",
        nameEn: "Social Order",
        desc: "界定压盖在人物头顶的终极秩序",
        items: SUR4_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR5: 对象预设 — 从 engine_surface/SUR5 加载
    {
        id: "skin_everything_lib",
        name: "对象预设",
        nameEn: "Object Anchor",
        desc: "只提供可被追寻、争夺、交换或保护的表层对象",
        items: SUR5_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR6: 空间容器 — 从 engine_surface/SUR6 加载
    {
        id: "skin_location_lib",
        name: "空间容器",
        nameEn: "Space Container",
        desc: "只提供事件可发生的可见空间容器",
        items: SUR6_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR7: 选角呈现 — 从 engine_surface/SUR7 加载
    {
        id: "skin_gender_lib",
        name: "选角呈现",
        nameEn: "Casting Presentation",
        desc: "人物在画面、称谓和互动中采用的性别呈现标签",
        items: SUR7_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR8: 年龄阶段 — 从 engine_surface/SUR8 加载
    {
        id: "skin_age_lib",
        name: "年龄阶段",
        nameEn: "Age Stage",
        desc: "人物进入故事时的可见年岁区间与行动条件",
        items: SUR8_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR9: 职业身份 — 从 engine_surface/SUR9 加载
    {
        id: "skin_profession_lib",
        name: "职业身份",
        nameEn: "Role Preset",
        desc: "只提供人物可识别的社会身份、职业岗位或登记状态",
        items: SUR9_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR10: 信念预设 — 从 engine_surface/SUR10 加载
    {
        id: "skin_ideology_lib",
        name: "信念预设",
        nameEn: "Belief Preset",
        desc: "人物开场时用于解释世界的表层信念语言",
        items: SUR10_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR-END: 显性收场 — 兼容旧 engine_surface/SUR11 数据路径
    {
        id: "skin_ending_lib",
        name: "显性收场",
        nameEn: "Visible Ending",
        desc: "只规定故事表层最后可见的事件和画面停点；意义裁决交给 M7A，身体余味交给 M7B",
        items: SUR11_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SV1: 叙事结构
    {
        id: "skin_structure_lib",
        name: "叙事结构",
        nameEn: "Narrative Structure",
        desc: "The architectural framework of the plot.",
        items: FLAT_STRUCTURE_ITEMS
    },
    // SV2: 故事体量
    {
        id: "skin_volume_lib",
        name: "故事体量",
        nameEn: "Story Volume",
        desc: "Target scope and rhythm density.",
        items: SV2_DATA.flatMap(cat => cat.items.map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },
    // Synthesizer 调音台 (SUR4X removed in v3.1)
    {
        id: "sur10x_lib",
        name: "信念裂度",
        nameEn: "Belief Fracture",
        desc: "对信仰的'当真程度'滑块——从虔信到决裂。",
        items: SYNTHESIZER_SUR10X.map(item => ({...item, group: "信念裂度", groupEn: "Belief Fracture"}))
    }
];
