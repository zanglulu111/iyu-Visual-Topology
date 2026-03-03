
import { LibraryCategoryDef, NarrativeBlockDef, LibraryItemDef } from '../types';
import { GENRE_CATEGORIES } from './genres';
import { ANIMATION_GENRE_CATEGORIES } from './animation_genres';
import { NARRATIVE_STRUCTURES } from './narrative_structures';
import { STORY_VOLUMES } from './story_volumes';
import { NARRATIVE_ERA_CATEGORIES } from './narrative_spacetime_anchors'; 
import { LOCATION_CATEGORIES } from './locations'; 
import { SOCIETY_CATEGORIES, IDEOLOGY_CATEGORIES } from './societies_ideologies';
import { PROFESSION_CATEGORIES, ORIGIN_CATEGORIES } from './identities';

export const SKIN_BLOCKS: NarrativeBlockDef[] = [
  { 
    id: "skin_era", 
    name: "时空锚点", 
    enName: "Spacetime Anchor", 
    description: "决定叙事发生的时代背景、历史张力或神话坐标。它是社会矛盾与因果逻辑发生的原始“温床”。", 
    descriptionEn: "Determines the historical tension, mythic coordinates, or temporal setting where social conflicts and causal logic brew.", 
    tags: [] 
  },
  { 
    id: "skin_location", 
    name: "空间", 
    enName: "Location", 
    description: "故事发生的物理空间。", 
    descriptionEn: "The physical space where events occur.", 
    tags: [] 
  },
  { 
    id: "skin_society", 
    name: "社会形态", 
    enName: "Society", 
    description: "政治与社会阶级结构。", 
    descriptionEn: "The political and social hierarchy.", 
    tags: [] 
  },
  { 
    id: "skin_ideology", 
    name: "意识形态", 
    enName: "Ideology", 
    description: "世界的主导哲学或“思想软件”。", 
    descriptionEn: "The dominant philosophy or 'software' of the world.", 
    tags: [] 
  },
  { 
    id: "skin_gender", 
    name: "性别", 
    enName: "Gender", 
    description: "角色的生理性别或外观呈现（纯粹选角层面）。", 
    descriptionEn: "Biological sex or visual presentation (Pure Casting Level).", 
    tags: [] 
  },
  { 
    id: "skin_age", 
    name: "年龄", 
    enName: "Age", 
    description: "角色的生理年龄与身体机能。", 
    descriptionEn: "Chronological age and physiological function.", 
    tags: [] 
  },
  { 
    id: "skin_profession", 
    name: "职业", 
    enName: "Profession", 
    description: "社会角色或生存手段。", 
    descriptionEn: "The social role or survival means.", 
    tags: [] 
  },
  { 
    id: "skin_origin", 
    name: "阶级", 
    enName: "Class / Origin", 
    description: "社会经济背景与出身权利。", 
    descriptionEn: "The socioeconomic background and birthright.", 
    tags: [] 
  },
  { 
    id: "skin_structure", 
    name: "叙事结构", 
    enName: "Structure", 
    description: "情节的建筑框架。", 
    descriptionEn: "The architectural framework of the plot.", 
    tags: [] 
  },
  { 
    id: "skin_volume", 
    name: "故事体量", 
    enName: "Volume", 
    description: "故事的结构密度与时长约束。", 
    descriptionEn: "The structural density and duration constraint of the story.", 
    tags: [] 
  },
];

export const ALL_SKIN_BLOCKS = [
    { 
      id: "skin_genre", 
      name: "类型基因", 
      enName: "GENRE (LIVE ACTION)", 
      description: "决定故事骨架与皮相的类型（真人）。", 
      descriptionEn: "Primary Bone & Secondary Skin (Live Action).", 
      tags: [] 
    },
    { 
      id: "skin_animation_genre", 
      name: "动画基因", 
      enName: "ANIMATION GENRE", 
      description: "决定故事的动画风格与表现逻辑（动画）。", 
      descriptionEn: "Animation style and expressive logic.", 
      tags: [] 
    },
    ...SKIN_BLOCKS
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
        id: "skin_animation_genre_lib",
        name: "动画基因 (Animation Genre)",
        desc: "决定故事的动画风格与表现逻辑。动画赋予了叙事超越物理法则的自由。",
        items: ANIMATION_GENRE_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_era_lib", 
        name: "时空锚点 (Spacetime Anchor)", 
        desc: "决定叙事发生的时代背景、历史张力或神话坐标。它是社会矛盾与因果逻辑发生的原始‘温床’。",
        items: NARRATIVE_ERA_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_location_lib", 
        name: "空间 (Location)", 
        desc: "The physical space where events occur.",
        items: LOCATION_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_society_lib", 
        name: "社会形态 (Society)", 
        desc: "Who rules? The structure of power and relation.",
        items: SOCIETY_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_ideology_lib", 
        name: "意识形态 (Ideology)", 
        desc: "Dominant philosophy or 'software' of the world. What do they believe?",
        items: IDEOLOGY_CATEGORIES.flatMap(cat => cat.items.map(item => ({
            ...item,
            group: cat.name
        })))
    },
    {
        id: "skin_gender_lib", 
        name: "性别 (Gender)", 
        desc: "Physiological & Visual Presentation (Zero Degree)",
        items: [
            { id: "gen_m", name: "男性 (Male)", group: "基础性别 (Base Gender)", def: "生理男性/雄性特征。", core: "视觉特征：骨骼结构、肌肉张力、低频声线。作为物质的阳性身体。", defEn: "Biological Male.", coreEn: "Visuals: Bone structure, muscle tension, vocal resonance." },
            { id: "gen_f", name: "女性 (Female)", group: "基础性别 (Base Gender)", def: "生理女性/雌性特征。", core: "视觉特征：身体曲线、脂肪分布、高频声线。作为物质的阴性身体。", defEn: "Biological Female.", coreEn: "Visuals: Silhouette, gesture dynamics, vocal tone." },
            { id: "gen_nb", name: "非二元 (Non-Binary)", group: "基础性别 (Base Gender)", def: "拒绝传统的男/女外观分类。", core: "视觉特征：混合的性征、模糊的轮廓、难以被一眼识别的性别信号。", defEn: "Outside binary.", coreEn: "Visuals: Ambiguity, blending of traits, defying classification." },
            { id: "gen_androgynous", name: "中性/双性化 (Androgynous)", group: "基础性别 (Base Gender)", def: "同时具有显著的男性和女性美学特征。", core: "视觉特征：这种身体本身就是一个谜题，具有奇异的吸引力。", defEn: "Androgynous.", coreEn: "Visuals: Mixing distinct male and female aesthetics." },
            { id: "gen_construct", name: "义体/无性 (Construct/Null)", group: "基础性别 (Base Gender)", def: "机器人、玩偶或去性化的身体。", core: "视觉特征：光滑、无生殖特征、纯粹的功能性或装饰性。", defEn: "Construct/Null.", coreEn: "Visuals: Smoothness, absence of sexual characteristics." }
        ]
    },
    {
        id: "skin_age_lib", 
        name: "年龄 (Age)", 
        desc: "Chronological & Physiological Stage",
        items: [
            { id: "age_child", name: "儿童 (Child / 6-12)", group: "生理年龄 (Age)", def: "发育前。身体未成熟。", core: "生理特征：低视角、动作的随机性、充沛但不可控的能量。", defEn: "Pre-puberty.", coreEn: "Physiology: Low vantage point, unrefined motor skills." },
            { id: "age_teen", name: "少年 (Teen / 13-19)", group: "生理年龄 (Age)", def: "发育期。第二性征出现。", core: "生理特征：肢体的不协调感（抽条）、变声期、皮肤的质感变化（青春痘/汗水）。", defEn: "Puberty.", coreEn: "Physiology: Rapid changes, breaking voice, awkward limbs." },
            { id: "age_youth", name: "青年 (Young Adult / 20-35)", group: "生理年龄 (Age)", def: "全盛期。身体机能的巅峰。", core: "生理特征：力量、速度、生殖能力的完备。代谢最旺盛的时刻。", defEn: "Prime.", coreEn: "Physiology: Peak physical performance, reproductive maturity." },
            { id: "age_mid", name: "中年 (Middle Age / 36-55)", group: "生理年龄 (Age)", def: "稳定期。衰老的最初迹象。", core: "生理特征：重力的影响（下垂）、体重的增加、动作变得沉稳或迟缓。", defEn: "Middle Age.", coreEn: "Physiology: Weight of gravity, slower metabolism, stability." },
            { id: "age_elder", name: "老年 (Elder / 60+)", group: "生理年龄 (Age)", def: "衰退期。机能的丧失。", core: "生理特征：皱纹（时间的地图）、骨骼的萎缩、震颤、浑浊的眼睛。", defEn: "Senior.", coreEn: "Physiology: Wrinkles, frailty, physical history on the face." },
            { id: "age_ancient", name: "极高龄 (Ancient / 100+)", group: "生理年龄 (Age)", def: "枯竭期。接近无机物。", core: "生理特征：像干尸或古树一样的质感。极度缓慢，仿佛时间停止。", defEn: "Ancient.", coreEn: "Physiology: Withered texture, near-inorganic stillness." }
        ]
    },
  {
    id: "skin_profession_lib", 
    name: "职业 (Profession)", 
    desc: "Class Role / Occupation",
    items: PROFESSION_CATEGORIES.flatMap(cat => cat.items.map(item => ({
      ...item,
      group: cat.name
    })))
  },
  {
    id: "skin_origin_lib", 
    name: "阶级 (Class/Origin)", 
    desc: "Socioeconomic background and birthright.",
    items: ORIGIN_CATEGORIES.flatMap(cat => cat.items.map(item => ({
      ...item,
      group: cat.name
    })))
  },
  {
    id: "skin_structure_lib", 
    name: "叙事结构 (Structure)", 
    desc: "The architectural framework of the plot.",
    items: FLAT_STRUCTURE_ITEMS
  },
  {
    id: "skin_volume_lib", 
    name: "故事体量 (Volume)", 
    desc: "The structural density and duration constraint.",
    items: FLAT_VOLUME_ITEMS
  },
];
