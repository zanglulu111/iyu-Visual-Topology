
import { NarrativeBlockDef, LibraryCategoryDef } from '../../types';
import { ENGINE_SUBJECTS } from './engine_subjects';
import { ENGINE_ENCOUNTERS } from './engine_encounters';
import { ENGINE_FANTASIES } from './engine_fantasies';
import { ENGINE_BIG_OTHER } from './engine_big_other';
import { ENGINE_DRIVES } from './engine_drives';
import { ENGINE_STAKES } from './engine_stakes';
import { ENGINE_RESOLUTIONS } from './engine_resolutions';
import { M7A_VERDICTS } from './m7a/index';
import { ENGINE_M0_OS } from './m0';
// M4X/M5X synthesizer imports removed (v3.0 正交性优化)

export const NARRATIVE_ENGINE_BLOCKS: NarrativeBlockDef[] = [
  // MODULE 0: GLOBAL CONTROLLER
  {
    id: "engine_m0",
    name: "M0. 精神拓扑",
    enName: "M0. PSYCHIC TOPOLOGY",
    description: "【底层操作系统】包裹叙事公式的逻辑闭包。决定主角处理“缺失”时的绝对肯定性（折叠/超导/零度）。",
    descriptionEn: "The underlying Operating System wrapping the narrative formula. Dictates the subject's absolute positivity when facing lack (Folding/Superconduct/Zero-Degree).",
    tags: []
  },
  // LINEAR FLOW 1-7
  {
    id: "engine_m1",
    name: "M1. 缺失主体",
    enName: "M1. THE SUBJECT ($)",
    description: "【本体论误认】主体进入语言界被切割后剩下的空虚容器，以及它为了掩盖虚无而认领的面具。谁在痛？",
    descriptionEn: "The ontological misrecognition. The specific mask claimed to hide the void left after castration.",
    tags: []
  },
  {
    id: "engine_m2",
    name: "M2. 真实遭遇",
    enName: "M2. THE ENCOUNTER (REAL)",
    description: "穿刺象征秩序的实在界事件 (Tuche)。五维穿刺拓扑: 秩序/认知/肉身/关系/边界。100条。",
    descriptionEn: "Real encounter that punctures the symbolic order (Tuche). 5-dim puncture topology. 100 entries.",
    tags: []
  },
  {
    id: "engine_m3",
    name: "M3. 欲望幻想",
    enName: "M3. THE FANTASY (a)",
    description: "主角试图寻找的目标或客体。他以为什么是解药？",
    descriptionEn: "The target or object the protagonist tries to find. What do they think is the cure?",
    tags: []
  },
  {
    id: "engine_m4",
    name: "M4. 大他者/镜像",
    enName: "M4. THE OBSTACLE (A / i(a))",
    description: "核心冲突。可以是【不可见的体制 (A)】，【代理人 (Agent)】，或是【镜像宿敌 (i(a))】。",
    descriptionEn: "The core conflict. Can be the Invisible System (A), the Agent, or the Mirror Rival (i(a)) who validates the system through competition.",
    tags: []
  },
  {
    id: "engine_m5",
    name: "M5. 行动驱力",
    enName: "M5. THE DRIVE (Act)",
    description: "对抗或者顺应冲突。主体采取的破坏性存续手段。",
    descriptionEn: "The specific stance of resistance or survival method adopted by the protagonist.",
    tags: []
  },
  // COEFFICIENTS removed in v3.0 (M4X/M5X — 正交性优化：M4/M5词库本身已含强度谱系)
  {
    id: "engine_m6",
    name: "M6. 终极代价",
    enName: "M6. THE STAKES",
    description: "面临的符号性死亡或存在主义风险。输了会怎样？",
    descriptionEn: "The risk of symbolic death or existential cost. What happens if they lose?",
    tags: []
  },
  {
    id: "engine_m7a",
    name: "M7A. 象征裁决",
    enName: "M7A. THE VERDICT",
    description: "【回溯性缝合】对整个叙事轨迹的最终定性与审判。决定了欲望的结构性终点。",
    descriptionEn: "The Retroactive Quilting Point. The final qualitative judgment and verdict on the entire narrative trajectory.",
    tags: []
  },
  {
    id: "engine_m7b",
    name: "M7. 实在余痕",
    enName: "M7. THE RESIDUE",
    description: "故事的哲学结局与命运审判之余响。欲望最终导向何处？",
    descriptionEn: "The philosophical remains and ripples of the fate's judgment. Where does desire ultimately lead?",
    tags: []
  }
];

export const NARRATIVE_ENGINE_LIBRARY: LibraryCategoryDef[] = [
  {
    id: "engine_m0_lib",
    name: "M0. 精神拓扑",
    nameEn: "M0. Psychic Topology",
    desc: "包裹叙事的逻辑骨架与防溢出机制，在面临实在界崩塌时产生“漏电与火花”。这是主角的宿命式底层编译器。",
    descEn: "The underlying compiler of fate. Functions as a logical framework and safety mechanism that generates 'leakage and sparks' during the collapse of the Real.",
    items: ENGINE_M0_OS
  },
  {
    id: "engine_m1_lib",
    name: "M1. 缺失主体",
    nameEn: "M1. The Subject",
    desc: "叙事能量的真空泵与注模器。主体不是缺了什么，而是一种由于结构性坍塌而产生的绝对否定性。",
    descEn: "Vacuum pump and molder of narrative energy. The subject is not someone missing something, but an absolute negativity emerging from structural collapse.",
    items: ENGINE_SUBJECTS
  },
  {
    id: "engine_m2_lib",
    name: "M2. 真实遭遇",
    nameEn: "M2. The Encounter",
    desc: "穿刺: 实在界对象征秩序的五维撕裂。A面(解放)/B面(创伤)/关键张力/实在界穿刺($)。",
    descEn: "Puncture: the Real's 5-dim tearing of the symbolic order. A-side/B-side/Key Tension/Real Punctured ($).",
    items: ENGINE_ENCOUNTERS
  },
  {
    id: "engine_m3_lib",
    name: "M3. 欲望幻想",
    nameEn: "M3. The Fantasy",
    desc: "在拉康的语境中，欲望（Desire）不是一种生理需求，而是一种幻想（Fantasy）。主体构建了一个幻想场景：“只要我拥有了那个东西（对象 a），我就能填补我内心的空洞，我就完整了。” 这个模块定义了主角追逐的诱饵。",
    descEn: "In Lacanian context, desire is not a biological need but a fantasy. The subject constructs a scenario: 'If I have that (object a), I will be whole.' This module defines the bait.",
    items: ENGINE_FANTASIES
  },
  {
    id: "engine_m4_lib",
    name: "M4. 大他者/镜像",
    nameEn: "M4. The Obstacle",
    desc: "阻挡主体获得欲望的结构性力量。它可以是垂直的【体制/法则】(A)，也可以是水平的【宿敌/竞争者】(i(a))，后者通过竞争来确认大他者的存在。",
    descEn: "Structural forces blocking the subject's desire. Can be Vertical (System/Law A) or Horizontal (Rival i(a)), where the latter validates the Big Other through competition.",
    items: ENGINE_BIG_OTHER
  },
  {
    id: "engine_m5_lib",
    name: "M5. 行动驱力",
    nameEn: "M5. The Drive",
    desc: "主角采取的具体抵抗姿态或生存手段。如何面对阻碍？",
    descEn: "The specific stance of resistance or survival method adopted by the protagonist. How to face the obstacle?",
    items: ENGINE_DRIVES
  },
  {
    id: "engine_m6_lib",
    name: "M6. 终极代价",
    nameEn: "M6. The Stakes",
    desc: "在拉康精神分析中，“阑割”指“丧失了作为主体的资格”。真正的恐惧在于“比死更可怕的命运”。",
    descEn: "In Lacanian terms, 'Castration' refers to the loss of subjective status. The true fear lies in 'a fate worse than death'.",
    items: ENGINE_STAKES
  },
  {
    id: "engine_m7a_lib",
    name: "M7A. 象征裁决",
    nameEn: "M7A. The Verdict",
    desc: "叙事意义的回溯性缝合点。在裁决下达的瞬间，之前发生的一切（遭遇、幻想、牺牲）都被赋予了最终的逻辑定性。",
    descEn: "Retroactive quilting point of narrative meaning. The moment the verdict is delivered, everything prior (encounter, fantasy, sacrifice) is given its final logical characterization.",
    items: M7A_VERDICTS
  },
  {
    id: "engine_m7b_lib",
    name: "M7. 实在余痕",
    nameEn: "M7. The Residue",
    desc: "故事的哲学结局与命运审判。欲望最终导向何处？",
    descEn: "The philosophical ending and judgment of fate. Where does desire ultimately lead?",
    items: ENGINE_RESOLUTIONS
  },
  // M4X/M5X library entries removed in v3.0
];
