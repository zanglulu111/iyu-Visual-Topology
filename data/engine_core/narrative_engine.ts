
import { NarrativeBlockDef, LibraryCategoryDef } from '../../types';
import { ENGINE_SUBJECTS } from './engine_subjects';
import { ENGINE_ENCOUNTERS } from './engine_encounters';
import { ENGINE_FANTASIES } from './engine_fantasies';
import { ENGINE_BIG_OTHER } from './engine_big_other';
import { ENGINE_DRIVES } from './engine_drives';
import { ENGINE_STAKES } from './engine_stakes';
import { ENGINE_RESOLUTIONS } from './engine_resolutions';
import { ENGINE_M0_OS } from './m0';
import { SYNTHESIZER_M2X } from './synthesizer/m2x';
import { SYNTHESIZER_M4X } from './synthesizer/m4x';
import { SYNTHESIZER_M5X } from './synthesizer/m5x';

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
    description: "刺破日常幻象的创伤性事件. 故事从何处开始崩塌？",
    descriptionEn: "A traumatic event that pierces through daily illusions. Where does the story collapse?",
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
  // COEFFICIENTS (X-Factors)
  {
    id: "engine_m2x",
    name: "M2X. 实在界入侵当量",
    enName: "M2X. WORLD COLLAPSE (Coefficient)",
    description: "象征界的崩坏程度，调节世界观破裂的烈度。",
    descriptionEn: "Degree of collapse of the symbolic order.",
    tags: []
  },
  {
    id: "engine_m4x",
    name: "M4X. 外部压迫能级",
    enName: "M4X. BLOCKAGE INTENSITY (Coefficient)",
    description: "大他者施加阻力的形式。从隐性剥削到直接抹杀。",
    descriptionEn: "Form of resistance applied by the Big Other.",
    tags: []
  },
  {
    id: "engine_m5x",
    name: "M5X. 死亡驱力流速",
    enName: "M5X. DRIVE VELOCITY (Coefficient)",
    description: "主体采取行动的破坏性程度。从顺从到自我毁灭。",
    descriptionEn: "Destructiveness of the subject's action.",
    tags: []
  },
  {
    id: "engine_m6",
    name: "M6. 终极代价",
    enName: "M6. THE STAKES",
    description: "面临的符号性死亡或存在主义风险。输了会怎样？",
    descriptionEn: "The risk of symbolic death or existential cost. What happens if they lose?",
    tags: []
  },
  {
    id: "engine_m7",
    name: "M7. 存在落点",
    enName: "M7. THE RESOLUTION",
    description: "故事的哲学结局与命运审判。欲望最终导向何处？",
    descriptionEn: "The philosophical ending and judgment of fate. Where does desire ultimately lead?",
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
    desc: "在拉康精神分析中，“真实界 (The Real)”是那些无法被符号化、无法被语言描述、突然刺破日常幻象的创伤性时刻。它不仅仅是“倒霉的事”，它是世界观崩塌的瞬间。",
    descEn: "In Lacanian psychoanalysis, 'The Real' represents traumatic moments that cannot be symbolized or described by language, suddenly piercing through daily illusions.",
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
    desc: "在拉康精神分析中，“阉割”指“丧失了作为主体的资格”。真正的恐惧在于“比死更可怕的命运”。",
    descEn: "In Lacanian terms, 'Castration' refers to the loss of subjective status. The true fear lies in 'a fate worse than death'.",
    items: ENGINE_STAKES
  },
  {
    id: "engine_m7_lib",
    name: "M7. 存在落点",
    nameEn: "M7. The Resolution",
    desc: "故事的哲学结局与命运审判。欲望最终导向何处？",
    descEn: "The philosophical ending and judgment of fate. Where does desire ultimately lead?",
    items: ENGINE_RESOLUTIONS
  },
  {
    id: "engine_m2x_lib",
    name: "M2X. 实在界入侵当量 (系数)",
    nameEn: "M2X. World Collapse",
    desc: "象征界的崩坏程度，调节世界观破裂的烈度。",
    descEn: "Degree of collapse of the symbolic order.",
    items: SYNTHESIZER_M2X
  },
  {
    id: "engine_m4x_lib",
    name: "M4X. 外部压迫能级 (系数)",
    nameEn: "M4X. Blockage Intensity",
    desc: "大他者施加阻力的形式。从隐性剥削到直接抹杀。",
    descEn: "Form of resistance applied by the Big Other.",
    items: SYNTHESIZER_M4X
  },
  {
    id: "engine_m5x_lib",
    name: "M5X. 死亡驱力流速 (系数)",
    nameEn: "M5X. Drive Velocity",
    desc: "主体采取行动的破坏性程度。从顺从到自我毁灭。",
    descEn: "Destructiveness of the subject's action.",
    items: SYNTHESIZER_M5X
  }
];
