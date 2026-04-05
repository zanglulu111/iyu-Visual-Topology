
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

// SV1/SV2 (Structural/Volume - 保留旧源，非 patch 数据)
import { NARRATIVE_STRUCTURES } from './narrative_structures';
import { STORY_VOLUMES } from './story_volumes';

// Synthesizer 调音台参数
import { SYNTHESIZER_SUR4X } from './engine_core/synthesizer/sur4x';
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
      id: "sur4x", 
      name: "SUR4X.物理阶层阻力", 
      enName: "sur4x.Social Resistance", 
      description: "社会形态的粘滞度，影响角色在阶层间移动的难度。", 
      descriptionEn: "Viscosity of social order affecting class mobility.", 
      tags: [] 
    },
    { 
      id: "sur10x", 
      name: "SUR10X.象征界缝合度", 
      enName: "sur10x.Symbolic Suture", 
      description: "主体对于外在秩序的认同与屈从深度。", 
      descriptionEn: "Subject's depth of submission to the Symbolic Order.", 
      tags: [] 
    }
];

// ============================================================
// SV1/SV2 FLAT MAPPINGS (结构与体量保留旧逻辑)
// ============================================================
const FLAT_STRUCTURE_ITEMS: LibraryItemDef[] = NARRATIVE_STRUCTURES.map(item => ({
    id: item.id,
    name: `${item.name} (${item.enName})`,
    def: item.description,
    core: `${item.lacanian} | Masterpiece: ${item.masterpiece}`,
    group: item.family
}));

const FLAT_VOLUME_ITEMS: LibraryItemDef[] = STORY_VOLUMES.map(item => ({
    id: item.id,
    name: item.name,
    def: `【${item.duration_label}】 ${item.description}`,
    core: `目标字数: ~${item.word_count}字 | 结构: ${item.structure_density.split('.')[0]}`,
}));

// ============================================================
// SKIN_LIBRARY: 全量词库（新版 engine_surface 数据源）
// ============================================================
export const SKIN_LIBRARY: LibraryCategoryDef[] = [
    // SUR1: 叙事动力 — 从 engine_surface/SUR1 加载
    ...SUR1_DATA,

    // SUR2: 背景场域 — 从 engine_surface/SUR2 加载
    ...SUR2_DATA,

    // SUR4: 社会形态 — 从 engine_surface/SUR4 加载
    ...SUR4_DATA,

    // SUR5: 欲望锚点 — 从 engine_surface/SUR5 加载
    ...SUR5_DATA,

    // SUR6: 空间场景 — 从 engine_surface/SUR6 加载
    ...SUR6_DATA,

    // SUR7: 主体性别 — 从 engine_surface/SUR7 加载
    ...SUR7_DATA,

    // SUR8: 主体年龄 — 从 engine_surface/SUR8 加载
    ...SUR8_DATA,

    // SUR9: 职业身份 — 从 engine_surface/SUR9 加载
    ...SUR9_DATA,

    // SUR10: 哲学信念 — 从 engine_surface/SUR10 加载
    ...SUR10_DATA,

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
        items: FLAT_VOLUME_ITEMS
    },
    // Synthesizer 调音台
    {
        id: "sur4x_lib",
        name: "物理阶层阻力 (Social Resistance)",
        desc: "界定压盖在人物头顶阶层固化的程度。",
        items: SYNTHESIZER_SUR4X.map(item => ({...item, group: "物理阶层阻力"}))
    },
    {
        id: "sur10x_lib",
        name: "象征界缝合度 (Symbolic Suture)",
        desc: "对待信仰的'当真程度'滑块。",
        items: SYNTHESIZER_SUR10X.map(item => ({...item, group: "象征界缝合度"}))
    }
];
