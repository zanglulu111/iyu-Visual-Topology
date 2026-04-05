
import { LibraryCategoryDef, NarrativeBlockDef, LibraryItemDef } from '../types';
import { GENRE_CATEGORIES } from './genres';
import { WORLD_MOTIF_CATEGORIES } from './world_motifs';
import { NARRATIVE_STRUCTURES } from './narrative_structures';
import { STORY_VOLUMES } from './story_volumes';
import { NARRATIVE_ERA_CATEGORIES } from './narrative_spacetime_anchors'; 
import { LOCATION_CATEGORIES } from './locations'; 
import { SOCIETY_CATEGORIES, IDEOLOGY_CATEGORIES } from './societies_ideologies';
import { PROFESSION_CATEGORIES } from './identities';
import { SYNTHESIZER_SUR4X } from './engine_core/synthesizer/sur4x';
import { SYNTHESIZER_SUR10X } from './engine_core/synthesizer/sur10x';

export const SKIN_BLOCKS: NarrativeBlockDef[] = [
  { 
    id: "skin_era", 
    name: "SUR2.背景场域", 
    enName: "sur2.Background Field", 
    description: "决定叙事发生的时代背景、历史张力或神话坐标。它是社会矛盾与因果逻辑发生的原始“温床”。", 
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

export const SKIN_LIBRARY: LibraryCategoryDef[] = [
    {
        id: "skin_genre_lib",
        name: "叙事动力 (Narrative Drive)",
        desc: "决定能量喷发的物理形式。",
        items: GENRE_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_animation_genre_lib",
        name: "废弃世界模体 (Deprecated)",
        desc: "决定故事的美学风格与感官滤镜。",
        items: WORLD_MOTIF_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_era_lib", 
        name: "背景场域 (Background Field)", 
        desc: "决定叙事发生的生存法则与视觉符号集合。它是社会矛盾发生的原始温床。",
        items: NARRATIVE_ERA_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_society_lib", 
        name: "社会形态 (Social Order)", 
        desc: "谁掌握着秩序？界定压盖在人物头等级的终极法则。",
        items: SOCIETY_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_everything_lib", 
        name: "欲望锚点 (Desire Anchor - Everything)", 
        desc: "这就是无所不包的 Everything。它是卷动命运的风眼。",
        items: [
            { id: "everything_macguffin", name: "麦高芬 (MacGuffin)", group: "欲望对象", def: "一种作为推动力的纯粹目标物。", core: "不具有实质逻辑功能，但所有人都在抢它。", defEn: "Pure driver.", coreEn: "Empty object that drives everything." },
            { id: "everything_relic", name: "秘密代码/秘籍", group: "虚无化物件", def: "承载着某种颠覆性知识的媒介。", core: "一旦显影，必将导致现存秩序的崩解。", defEn: "Subversive knowledge.", coreEn: "Media carrying disruptive data." }
        ]
    },
    {
        id: "skin_location_lib", 
        name: "空间场景 (Scenes)", 
        desc: "提供事件发生的具体物理容器。",
        items: LOCATION_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_gender_lib", 
        name: "主体性别 (Gender)", 
        desc: "Physiological & Visual Presentation",
        items: [
            { id: "gen_m", name: "男性 (Male)", group: "基础性别", def: "生理男性/雄性特征。", core: "生理重力：阳性身体的物质呈现。", defEn: "Biological Male.", coreEn: "Visuals: Masculine resonance." },
            { id: "gen_f", name: "女性 (Female)", group: "基础性别", def: "生理女性/雌性特征。", core: "生理重力：阴性身体的物质呈现。", defEn: "Biological Female.", coreEn: "Visuals: Feminine resonance." },
            { id: "gen_nb", name: "非二元 (Non-Binary)", group: "基础性别", def: "模糊的轮廓、难以被一眼识别的性别信号。", core: "拒绝分类。", defEn: "Outside binary.", coreEn: "Defying classification." }
        ]
    },
    {
        id: "skin_age_lib", 
        name: "主体年龄 (Age)", 
        desc: "Chronological Stage",
        items: [
            { id: "age_child", name: "儿童 (Child / 6-12)", group: "生理阶段", def: "发育前。", core: "低视角、动作的随机性。", defEn: "Pre-puberty.", coreEn: "Low vantage point." },
            { id: "age_teen", name: "少年 (Teen / 13-19)", group: "生理阶段", def: "发育期。", core: "变声期、肢体不协调感。", defEn: "Puberty.", coreEn: "Rapid changes." },
            { id: "age_youth", name: "青年 (Young Adult / 20-35)", group: "生理阶段", def: "鼎盛期。", core: "机能巅峰。", defEn: "Prime.", coreEn: "Peak performance." },
            { id: "age_mid", name: "中年 (Middle Age / 36-55)", group: "生理阶段", def: "稳定期。", core: "重力的下沉。", defEn: "穩定期。", coreEn: "Stability." },
            { id: "age_elder", name: "老年 (Elder / 60+)", group: "生理阶段", def: "衰退期。", core: "时间的地图。", defEn: "Senior.", coreEn: "Physical history." }
        ]
    },
    {
        id: "skin_profession_lib", 
        name: "主体身份与阶层 (Identity & Class)", 
        desc: "Survival Means, Social Mask, Socioeconomic background and birthright.",
        items: PROFESSION_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_ideology_lib", 
        name: "哲学信念 (Philosophy)", 
        desc: "What do they believe to fill the void?",
        items: IDEOLOGY_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },

    {
        id: "skin_structure_lib", 
        name: "叙事结构 (Structure - SV1)", 
        desc: "The architectural framework of the plot.",
        items: FLAT_STRUCTURE_ITEMS
    },
    {
        id: "skin_volume_lib", 
        name: "故事体量 (Volume - SV2)", 
        desc: "Target scope and rhythm density.",
        items: FLAT_VOLUME_ITEMS
    },
    {
        id: "sur4x_lib",
        name: "物理阶层阻力 (Social Resistance)",
        desc: "界定压盖在人物头顶阶层固化的程度。",
        items: SYNTHESIZER_SUR4X.map(item => ({...item, group: "物理阶层阻力"}))
    },
    {
        id: "sur10x_lib",
        name: "象征界缝合度 (Symbolic Suture)",
        desc: "对待信仰的‘当真程度’滑块。",
        items: SYNTHESIZER_SUR10X.map(item => ({...item, group: "象征界缝合度"}))
    }
];
