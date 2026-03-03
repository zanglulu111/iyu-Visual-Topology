
import { NarrativeBlockDef, LibraryCategoryDef } from '../types';
import { ENGINE_SUBJECTS } from './engine_subjects';
import { ENGINE_ENCOUNTERS } from './engine_encounters';
import { ENGINE_FANTASIES } from './engine_fantasies';
import { ENGINE_BIG_OTHER } from './engine_big_other';
import { ENGINE_DRIVES } from './engine_drives';
import { ENGINE_STAKES } from './engine_stakes';
import { ENGINE_RESOLUTIONS } from './engine_resolutions';

export const NARRATIVE_ENGINE_BLOCKS: NarrativeBlockDef[] = [
  // MODULE 0: GLOBAL CONTROLLER
  {
    id: "engine_m0",
    name: "M0. 精神底色",
    enName: "M0. PSYCHIC OS (Structure)",
    description: "【底层操作系统】决定主角对待规则/大他者的根本态度（神经症/性倒错/精神病）。",
    descriptionEn: "The underlying Operating System. Determines how the subject relates to the Law/Big Other (Neurosis/Perversion/Psychosis).",
    tags: []
  },
  // LINEAR FLOW 1-7
  {
    id: "engine_m1",
    name: "M1. 缺失主体",
    enName: "M1. THE SUBJECT ($)",
    description: "【社会身份与裂痕】主角的具体身份及该身份带来的核心匮乏。谁在痛？缺什么？",
    descriptionEn: "The specific social avatar and its inherent lack. The identity that suffers the alienation (e.g. The Cog, The Stranger).",
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
    enName: "M5. THE DRIVE",
    description: "主角采取的具体抵抗姿态或生存手段。如何面对阻碍？",
    descriptionEn: "The specific stance of resistance or survival method adopted by the protagonist. How to face the obstacle?",
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
    name: "M0. 精神底色 (Psychic OS)",
    desc: "主角的精神结构与病理系统。这是故事的'滤镜'。",
    items: [
        // 第一类：神经症结构 (Neurosis) - 机制：压抑 (Repression)
        { 
            id: "hysteria", 
            name: "癔症 (Hysteria)", 
            group: "第一类：神经症结构 (Neurosis)",
            def: "通过‘质疑’来维持欲望。总是问大他者：‘我是谁？你想要我做什么？’",
            core: "核心逻辑：永远不满足。只要一得到满足，欲望就消失了，所以必须制造‘缺失’。反抗主人，但又通过反抗来确认主人的存在。",
            defEn: "Maintains desire through 'questioning'. Asking the Big Other: 'Who am I? What do you want?'",
            coreEn: "Logic: Unsatisfied desire. Creates 'lack' to keep desire alive. Challenges the Master to confirm the Master's existence."
        },
        { 
            id: "obsession", 
            name: "强迫症 (Obsession)", 
            group: "第一类：神经症结构 (Neurosis)",
            def: "通过‘控制’和‘思考’来回避存在焦虑。试图消灭大他者的欲望，把它变成死的规则。",
            core: "核心逻辑：只要我不停地做这件事（洗手/数数/工作），可怕的事情（阉割/死亡）就不会发生。拖延行动，活在准备中。",
            defEn: "Avoids existential anxiety through 'control' and 'thinking'. Converting the Other's desire into dead rules.",
            coreEn: "Logic: Rituals to ward off castration/death. Procrastinating the act, living in preparation."
        },
        { 
            id: "phobia", 
            name: "恐惧症 (Phobia)", 
            group: "第一类：神经症结构 (Neurosis)",
            def: "将弥散的焦虑锁定在一个具体的替代性对象（能指）上。",
            core: "核心逻辑：我怕‘蜘蛛’，其实是为了避免面对更可怕的‘父亲/阉割’。只要我不碰蜘蛛，我就安全了。建立安全边界。",
            defEn: "Locks diffuse anxiety onto a specific substitute object (signifier).",
            coreEn: "Logic: Fear of the object is a shield against a deeper castration anxiety. Establishing a safe boundary."
        },

        // 第二类：性倒错结构 (Perversion) - 机制：否认 (Disavowal)
        { 
            id: "fetishism", 
            name: "恋物癖 (Fetishism)", 
            group: "第二类：性倒错结构 (Perversion)",
            def: "‘我完全知道（缺失存在），但是（我依然相信这个物体能填补它）’。用物体缝合裂痕。",
            core: "核心逻辑：拒绝接受阉割。把某个特定的物品（高跟鞋/钱/权杖）升格为神圣的菲勒斯。只要有它，我就是完整的。",
            defEn: "'I know very well, but nevertheless...' Using an object to suture the lack.",
            coreEn: "Logic: Refusal of castration. Elevating an object (shoe/money) to the status of the Phallus. Wholeness through the object."
        },
        { 
            id: "sadomasochism", 
            name: "施虐/受虐 (Sadomasochism)", 
            group: "第二类：性倒错结构 (Perversion)",
            def: "将自己或他人变成大他者享乐的‘工具 (Instrument)’。痛苦是契约。",
            core: "核心逻辑：我不为自己享乐，我是在‘执行’大他者的法律。通过制造痛苦来焦虑大他者，或者填补大他者的空虚。",
            defEn: "Making oneself or others an 'Instrument' for the Big Other's enjoyment.",
            coreEn: "Logic: Acting as the executioner of the Law. Creating pain to anxiety the Other or fill its void."
        },
        { 
            id: "scopophilia", 
            name: "窥淫/暴露 (Scopophilia)", 
            group: "第二类：性倒错结构 (Perversion)",
            def: "视觉冲动的主导。通过‘看’或‘被看’来控制对象。",
            core: "核心逻辑：凝视即权力。通过把对方变成客体（Objectify）来回避主体间性的风险。",
            defEn: "Dominance of the visual drive. Controlling the object via 'seeing' or 'being seen'.",
            coreEn: "Logic: Gaze as power. Objectifying the other to avoid inter-subjective risks."
        },

        // 第三类：精神病结构 (Psychosis) - 机制：排除 (Foreclosure)
        { 
            id: "paranoia", 
            name: "偏执狂/妄想 (Paranoia)", 
            group: "第三类：精神病结构 (Psychosis)",
            def: "父之名被排除，大他者变成了恶意的迫害者。意义过剩。",
            core: "核心逻辑：‘他们都在针对我’。所有的巧合都有意义。试图构建一个完美的妄想系统来解释世界的混乱。",
            defEn: "Name-of-the-Father excluded. The Big Other becomes a malicious persecutor. Meaning overload.",
            coreEn: "Logic: 'They are out to get me.' All coincidences are meaningful. Building a delusion to explain chaos."
        },
        { 
            id: "schizophrenia", 
            name: "精神分裂 (Schizophrenia)", 
            group: "第三类：精神病结构 (Psychosis)",
            def: "语言与身体的解体。能指链断裂，只有碎片，没有意义。",
            core: "核心逻辑：身体不再属于自己，变成了碎片。词语失去了象征意义，变成了纯粹的声音或物体。无法形成统一叙事。",
            defEn: "Fragmentation of language and body. The signifier chain breaks.",
            coreEn: "Logic: Body in pieces. Words lose symbolic meaning, becoming pure sound/things. No unified narrative."
        },
        { 
            id: "melancholia", 
            name: "忧郁症 (Melancholia)", 
            group: "第三类：精神病结构 (Psychosis)",
            def: "精神病性的抑郁。主体将自己认同为那个‘丢失的垃圾 (Waste)’。",
            core: "核心逻辑：不是‘我失去了一个客体’，而是‘我就是那个失去的客体’。彻底的自我废弃，不仅是悲伤，是存在的否定。",
            defEn: "Psychotic depression. Identifying oneself as the 'lost object' (waste).",
            coreEn: "Logic: Not 'I lost something', but 'I AM the lost thing'. Radical self-discarding."
        },
        { 
            id: "ordinary_psychosis", 
            name: "普通精神病 (Ordinary Psychosis)", 
            group: "第三类：精神病结构 (Psychosis)",
            def: "没有明显的疯癫（幻觉/妄想），靠‘补偿性结构（补丁）’维持着岌岌可危的正常。",
            core: "核心逻辑：只要那个‘补丁’（比如一份工作、一个爱好、一种瘾）还在，他就是正常的。补丁一旦脱落，立刻精神崩溃。",
            defEn: "No obvious madness. Maintaining precarious normality via a 'compensatory structure' (patch/sinthome).",
            coreEn: "Logic: As long as the 'patch' (job/hobby/addiction) holds, they are stable. If the patch fails, collapse follows."
        },

        // 第四类：特殊运作模式
        { 
            id: "autism", 
            name: "孤独症 (Autism)", 
            group: "第四类：特殊运作模式",
            def: "拒绝进入语言的交换。建立坚硬的防御壳，以抵御大他者声音的入侵。",
            core: "核心逻辑：这是一个没有‘大他者’的世界。主体生活在自己的边缘，通过机械的秩序来获得安宁。拒绝被象征化。",
            defEn: "Refusal to enter language exchange. A hard shell against the voice of the Big Other.",
            coreEn: "Logic: A world without the Big Other. Living on the edge, maintaining peace through mechanical order."
        }
    ]
  },
  {
    id: "engine_m1_lib",
    name: "M1. 缺失主体 (The Subject)",
    desc: "定义主角的社会身份与异化状态。谁在痛？缺什么？",
    items: ENGINE_SUBJECTS
  },
  {
    id: "engine_m2_lib",
    name: "M2. 真实遭遇 (The Encounter)",
    desc: "在拉康精神分析中，“真实界 (The Real)”是那些无法被符号化、无法被语言描述、突然刺破日常幻象的创伤性时刻。它不仅仅是“倒霉的事”，它是世界观崩塌的瞬间。",
    items: ENGINE_ENCOUNTERS
  },
  {
    id: "engine_m3_lib",
    name: "M3. 欲望幻想 (The Fantasy)",
    desc: "在拉康的语境中，欲望（Desire）不是一种生理需求，而是一种幻想（Fantasy）。主体构建了一个幻想场景：“只要我拥有了那个东西（对象 a），我就能填补我内心的空洞，我就完整了。” 这个模块定义了主角追逐的诱饵。",
    items: ENGINE_FANTASIES
  },
  {
    id: "engine_m4_lib",
    name: "M4. 大他者/镜像 (The Obstacle)",
    desc: "阻挡主体获得欲望的结构性力量。它可以是垂直的【体制/法则】(A)，也可以是水平的【宿敌/竞争者】(i(a))，后者通过竞争来确认大他者的存在。",
    items: ENGINE_BIG_OTHER
  },
  {
    id: "engine_m5_lib",
    name: "M5. 行动驱力 (The Drive)",
    desc: "主角采取的具体抵抗姿态或生存手段。如何面对阻碍？",
    items: ENGINE_DRIVES
  },
  {
    id: "engine_m6_lib",
    name: "M6. 终极代价 (The Stakes)",
    desc: "在拉康精神分析中，“阉割”指“丧失了作为主体的资格”。真正的恐惧在于“比死更可怕的命运”。",
    items: ENGINE_STAKES
  },
  {
    id: "engine_m7_lib",
    name: "M7. 存在落点 (The Resolution)",
    desc: "故事的哲学结局与命运审判。欲望最终导向何处？",
    items: ENGINE_RESOLUTIONS
  }
];
