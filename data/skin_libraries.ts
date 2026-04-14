
import { LibraryCategoryDef, NarrativeBlockDef, LibraryItemDef } from '../types';

// ============================================================
// NEW ENGINE SURFACE IMPORTS (SUR1-SUR10)
// 全部替换为 engine_surface/ 下的新版 patch 数据源
// ============================================================
import { SUR1_DATA } from './engine_surface/SUR1';
import { SUR2_DATA } from './engine_surface/SUR2';
import { SUR4_DATA } from './engine_surface/SUR4';
import { SUR5_DATA } from './engine_surface/SUR5';
import { SUR6_DATA } from './engine_surface/SUR6';
import { SUR7_DATA } from './engine_surface/SUR7';
import { SUR8_DATA } from './engine_surface/SUR8';
import { SUR9_DATA } from './engine_surface/SUR9';
import { IDEOLOGY_CATEGORIES as SUR10_DATA } from './engine_surface/SUR10';
import { SUR11_DATA } from './engine_surface/SUR11';

import { SV1_DATA } from './engine_sv/SV1';
import { SV2_DATA } from './engine_sv/SV2';

// Synthesizer 调音台参数 (SUR4X removed in v3.1)
import { SYNTHESIZER_SUR10X } from './engine_core/synthesizer/sur10x';

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
    name: "SUR5.欲望锚点 (Everything)", 
    enName: "sur5.Desire Anchor / Everything", 
    description: "这就是无所不包的 Everything。它可以是一个麦高芬、一段代码、一本绝世秘籍，是卷动命运的风眼。", 
    descriptionEn: "The all-encompassing Everything object. A MacGuffin, a piece of code, a secret manual—the eye of the storm.", 
    tags: [] 
  },
  { 
    id: "skin_location", 
    name: "SUR6.空间场景", 
    enName: "sur6.Scenes", 
    description: "提供事件发生的具体物理容器。包含特定场景与通用场景库。", 
    descriptionEn: "Provides the physical container for events, including specific and generic scene libraries.", 
    tags: [] 
  },
  { 
    id: "skin_gender", 
    name: "SUR7.主体性别", 
    enName: "sur7.Subject Gender", 
    description: "主体的生理性别或外观呈现（纯粹选角层面）。", 
    descriptionEn: "The subject's biological sex or visual presentation (Casting level).", 
    tags: [] 
  },
  { 
    id: "skin_age", 
    name: "SUR8.主体年龄", 
    enName: "sur8.Subject Age", 
    description: "主体的生理年龄与身体机能，定义机体的基础磨损度。", 
    descriptionEn: "Standardized biological age and physiological state.", 
    tags: [] 
  },
  { 
    id: "skin_profession", 
    name: "SUR9.职业身份", 
    enName: "sur9.Subject Identity/Class", 
    description: "主体的社会角色、生存手段、社会经济背景与出身权利。定义角色在权力结构中的位置。", 
    descriptionEn: "The subject's social role, means of survival, socioeconomic background and birthright.", 
    tags: [] 
  },
  { 
    id: "skin_ideology", 
    name: "SUR10.哲学信念", 
    enName: "sur10.Philosophy / Ism", 
    description: "主体自认为用以填补内心缺失的意识形态（如：虚无主义、英雄主义）。", 
    descriptionEn: "The ideology used to fill the subject's inner void (e.g., Nihilism).", 
    tags: [] 
  },
  { 
    id: "skin_ending", 
    name: "SUR11.显性大结局", 
    enName: "sur11.Explicit Ending", 
    description: "好莱坞式、商业化且具有极高视觉张力的结局模板。", 
    descriptionEn: "Hollywood-style commercial ending templates with high visual tension.", 
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
    { 
      id: "skin_animation_genre", 
      name: "SURx.废弃世界模体", 
      enName: "surx.Deprecated Motif", 
      description: "提供世界的视觉与感官滤镜，如：赛博、武侠、废土等。", 
      descriptionEn: "Visual and sensory filter for the world (e.g., Cyberpunk).", 
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
const FLAT_STRUCTURE_ITEMS: LibraryItemDef[] = SV1_DATA.flatMap(cat => cat.items.map(item => ({ ...item, group: cat.name })));

// ============================================================
// SKIN_LIBRARY: 全量词库（新版 engine_surface 数据源）
// ============================================================
export const SKIN_LIBRARY: LibraryCategoryDef[] = [
    // SUR1: 叙事动力 — 从 engine_surface/SUR1 加载 (也供其他调用后备)
    {
        id: "skin_genre_lib",
        name: "叙事动力 (Drive - SUR1)",
        desc: "决定能量喷发的物理形式",
        items: SUR1_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR2: 背景场域 — 从 engine_surface/SUR2 加载 (也供其他调用后备)
    {
        id: "skin_era_lib",
        name: "背景场域/废弃世界 (Field/Motif - SUR2/SURx)",
        desc: "决定叙事发生的时代背景",
        items: SUR2_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR4: 社会形态 — 从 engine_surface/SUR4 加载
    {
        id: "skin_society_lib",
        name: "社会形态 (Society - SUR4)",
        desc: "界定压盖在人物头顶的终极秩序",
        items: SUR4_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR5: 欲望锚点 — 从 engine_surface/SUR5 加载
    {
        id: "skin_everything_lib",
        name: "欲望锚点 (Everything - SUR5)",
        desc: "这就是无所不包的 Everything",
        items: SUR5_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR6: 空间场景 — 从 engine_surface/SUR6 加载
    {
        id: "skin_location_lib",
        name: "空间场景 (Location - SUR6)",
        desc: "提供事件发生的具体物理容器",
        items: SUR6_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR7: 主体性别 — 从 engine_surface/SUR7 加载
    {
        id: "skin_gender_lib",
        name: "主体性别 (Gender - SUR7)",
        desc: "主体的生理性别或外观呈现",
        items: SUR7_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR8: 主体年龄 — 从 engine_surface/SUR8 加载
    {
        id: "skin_age_lib",
        name: "主体年龄 (Age - SUR8)",
        desc: "主体的生理年龄与身体机能",
        items: SUR8_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR9: 职业身份 — 从 engine_surface/SUR9 加载
    {
        id: "skin_profession_lib",
        name: "职业身份 (Profession - SUR9)",
        desc: "主体的社会角色与生存手段",
        items: SUR9_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR10: 哲学信念 — 从 engine_surface/SUR10 加载
    {
        id: "skin_ideology_lib",
        name: "哲学信念 (Ideology - SUR10)",
        desc: "主体自认为用以填补内心缺失的意识形态",
        items: SUR10_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SUR11: 显性大结局 — 从 engine_surface/SUR11 加载
    {
        id: "skin_ending_lib",
        name: "显性大结局 (Ending - SUR11)",
        desc: "好莱坞式、商业化且具有极高视觉张力的结局模板",
        items: SUR11_DATA.flatMap(cat => (cat.items || []).map(item => ({ ...item, group: cat.name, groupEn: cat.nameEn })))
    },

    // SV1: 叙事结构
    {
        id: "skin_structure_lib", 
        name: "叙事结构 (Structure - SV1)", 
        desc: "The architectural framework of the plot.",
        items: FLAT_STRUCTURE_ITEMS
    },
    // SV2: 故事体量
    {
        id: "skin_volume_lib", 
        name: "故事体量 (Volume - SV2)", 
        desc: "Target scope and rhythm density.",
        items: SV2_DATA.flatMap(cat => cat.items.map(item => ({ ...item, group: cat.name })))
    },
    // Synthesizer 调音台 (SUR4X removed in v3.1)
    {
        id: "sur10x_lib",
        name: "信念裂度 (Belief Fracture)",
        desc: "对信仰的'当真程度'滑块——从虔信到决裂。",
        items: SYNTHESIZER_SUR10X.map(item => ({...item, group: "信念裂度"}))
    }
];
