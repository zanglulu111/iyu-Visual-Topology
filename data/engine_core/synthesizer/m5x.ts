import { LibraryItemDef } from '../../../types';

export const SYNTHESIZER_M5X: LibraryItemDef[] = [
    {
        id: "m5x_level_1",
        name: "L1.幻象维系",
        nameEn: "Fantasy Maintenance",
        group: "M5X. 死亡驱力流速",
        def: "主体通过不断重复结构性日常幻象（M3）来回避那个不可名状的真实。虽然底色始终笼罩着隐隐的痛苦，但主体仍拼命选择在虚假轨道上装睡。",
        defEn: "The subject evades the unnamable truth by continuously repeating structural daily fantasies (M3). Though a faint pain constantly shrouds the undertone, the subject acts desperately to fake sleep on the false track.",
        core: "系统分配的流速近乎停滞。死亡驱力被精致完美的幻象假体死死包裹。主体活成了最平庸、也对世界最安全的电池螺丝钉。",
        coreEn: "System-assigned flow rate nears stagnation. The death drive is tightly wrapped by delicate, perfect fantasy prosthetics. The subject lives as the most mediocre, and materially safest, battery screw for the world.",
        patch: {
            mechanics: "玩家兴高采烈地深陷于收集、打杂与资源制作此类“毫无灵魂但极度安全可控”的核心游玩循环逻辑里不可自拔。",
            mechanicsEn: "Players joyfully sink deep into 'soulless but highly safe and controllable' core gameplay loops like collecting, fetch quests, and crafting, unable to extract themselves.",
            aesthetic: "超高饱和度带来温暖明媚的“岁月静好”感调色。极度规整有序如同塑料玩具般的室外环境，以及极为柔顺安详的UI反馈音效集。",
            aestheticEn: "Ultra-high saturation providing a warm, bright 'peaceful years' grading. Extremely neat, orderly plastic-toy-like outdoor environments, alongside highly smooth and serene UI feedback soundsets.",
            runtime: "IF (玩家深陷于收集打杂与资源制作等毫无灵魂但极度安全可控的核心游玩循环) THEN (将后台关于生存危险与精神耗损的Drive_Entropy浮点数硬编码锁死在0的刻度，将事件流全部囚禁于一个完全与死亡绝缘的温室白名单阵列中)。",
            runtimeEn: "IF (Players_Joyfully_Sink_Into_Soulless_But_Safe_Core_Gameplay_Loops_Collecting_Crafting) THEN (Hardcode background Drive_Entropy float regarding existential peril to 0, imprisoning all event streams within a wholly death-insulated greenhouse whitelist array)."
        }
    },
    {
        id: "m5x_level_2",
        name: "L2.抑郁挣扎",
        nameEn: "Depressive Struggle",
        group: "M5X. 死亡驱力流速",
        def: "主体开始敏锐感知到幻象皮囊上的裂痕。精神出现动力不足、虚无坠落感。绝望感如同潮水，令主体在‘立刻反抗’与‘缴械投降’间来回被拉扯。",
        defEn: "The subject begins acutely sensing cracks on the fantasy skin. The spirit exhibits drive shortages, feelings of nihilistic falling. Despair behaves like a tide, pulling the subject back and forth between 'immediate rebellion' and 'surrender'.",
        core: "死亡驱力开始产生微小的化学渗漏。本用于维持幻象的能量从裂缝中被黑洞般抽离流失，主体感到从灵魂深处泛起的致命疲惫（Lethargy）。",
        coreEn: "The death drive begins to produce tiny chemical leaks. Energy meant to sustain the fantasy is siphoned off through the cracks like a black hole; the subject feels a fatal lethargy rising from the depth of the soul.",
        patch: {
            mechanics: "所有的反馈动作输入都似乎沾上了一种极具粘滞感的按键延迟；操作主角有时会在纯待机状态下，不受控地发出极度沉闷的叹息和摇晃。",
            mechanicsEn: "All feedback action inputs seem coated in a highly viscous input delay; the protagonist sometimes uncontrollably emits extremely dull sighs and wavers while in pure idle states.",
            aesthetic: "抽干色阶向饱和度告别，代之一种永恒下雨或是如同浓雾遮蔽般的阴郁厚涂视效。编曲刻意放缓，节奏呈现出重度呼吸衰竭感的慢拖拍。",
            aestheticEn: "Draining color scales bidding farewell to saturation, replacing it with an eternally rainy or dense-fog obscured gloomy thick-impasto visual. Arrangements are deliberately slowed, tempo exhibiting heavy dragged beats of respiratory failure.",
            runtime: "IF (所有反馈动作输入沿上粘滞感的按键延迟，主角在待机状态下不受控地发出沉闷叹息和摇晃) THEN (将一种病态的人工Input Lag输入延迟修饰器绑架进角色控制器Controller中，强行利用拖治的插值曲线拉长反馈响应周期)。",
            runtimeEn: "IF (All_Feedback_Action_Inputs_Coated_In_Viscous_Input_Delay_Protagonist_Uncontrollably_Sighs_In_Idle) THEN (Kidnap a morbid artificial Input Lag modifier into Character Controller, forcibly using dragged interpolation curves to elongate feedback response cycle)."
        }
    },
    {
        id: "m5x_level_3",
        name: "L3.越界渴望",
        nameEn: "Transgressive Desire",
        group: "M5X. 死亡驱力流速",
        def: "即使明知前方是粉身碎骨的绝崖，主体仍由于深信那是“唯一的真实物（对象a）”而强效推拉着冲向禁忌。为了触碰它，主体开始主动拆毁自身的安全隔板。",
        defEn: "Even knowing a bone-shattering cliff lies ahead, the subject is forcefully pulled toward the taboo, deeply believing it is the 'sole Real thing (Object a)'. To touch it, the subject actively dismantles their own safety bulkheads.",
        core: "死亡驱力提升至中高危流速状态。驱力不再蛰伏，而是化作一种“绝不回头、不可抑制的疯狂渴望”，并在其内部释放出具备极高破坏性的变态创造热量。",
        coreEn: "Death drive escalates to mid-high peril flow rate. The drive no longer nestles; it transmutes into a 'no-looking-back, uncontrollable manic desire', releasing a highly destructive, perverse creative heat within.",
        patch: {
            mechanics: "系统在数据上极为露骨地引诱和嘉奖这种高风险、高收益的狂派行为机制，逼迫主角甘愿步入写着最高死命警报的“极黑禁区（Dark Zones）”。",
            mechanicsEn: "The system data-wise highly explicitly seduces and rewards this high-risk, high-yield manic behavior mechanism, forcing the protagonist to willing step into 'Dark Zones' bearing supreme death-warning alarms.",
            aesthetic: "大开大合的高对比度霓虹用色与化不开的幽深浓黑阴影激烈交锋混溶。一种令人血脉喷张、BPM直逼心脏骤停界限的急促重拍脉冲幻音。",
            aestheticEn: "Violently expansive high-contrast neon shades fiercely clashing and melting with un-dissolvable deep pitch-black shadows. An intoxicating, rushed heavy-beat pulse hallucination tracking BPM up to cardiac arrest thresholds.",
            runtime: "IF (系统在数据上极为露骨地引诱和嘉奖高风险高收益的狂派行为，主角甘愿步入极黑禁区) THEN (在系统的战利品表库里泵入极度膨胀的Risk_Reward_Multipliers爆率激素，同时把充满野兽攻击性的移速加成钩子锁死在残血濒死状态逻辑分支上)。",
            runtimeEn: "IF (System_Explicitly_Seduces_Rewards_High_Risk_High_Yield_Manic_Behavior_Protagonist_Enters_Dark_Zones) THEN (Pump hugely inflated Risk_Reward_Multipliers drop-rate hormones into system loot tables, lock beast-like aggressive movement-speed buff hooks onto near-death HP logic branch)."
        }
    },
    {
        id: "m5x_level_4",
        name: "L4.爆发/行动",
        nameEn: "Outburst / Act Out",
        group: "M5X. 死亡驱力流速",
        def: "主体将维护自身在符号界内存续的“体面保护壳”彻底砸烂。不再需要语言，不再谋求共识；为了探寻那仅存的真相尊严，主体将一切社会身份与安全网亲手化为灰烬。",
        defEn: "The subject completely smashes the 'decent protective shell' maintaining their existence in the Symbolic. No longer needing language or consensus; to seek that singular truth's dignity, the subject personally burns all social identities and safety nets to ash.",
        core: "濒临临界的极高流速。死亡驱力如同破膛而出的异形喷涌爆发。主角完全从卑微的“愿望”转化为了暴政式的“绝对意志”，直接显化为对环境与自我的双重绞杀剧变。",
        coreEn: "Borderline critical super-high flow rate. The death drive erupts like a chestburster xenomorph. The protagonist entirely shifts from humble 'wish' to a tyrannical 'Absolute Will', directly manifesting as an external and self-directed dual strangulation upheaval.",
        patch: {
            mechanics: "系统赐予主角极端恐怖的基础杀伤增益倍率，但代偿条件是永不停歇且不可逆的巨量生命值流失。潜行、谈判全部失效；只剩下如疯狗般把眼前生灵撕裂成块。",
            mechanicsEn: "The system grants the protagonist terrifying baseline lethal damage multipliers, but the cost is an unceasing, irreversible massive HP drain. Stealth and negotiations fully disabled; leaving only tearing beings into pieces like a mad dog.",
            aesthetic: "永远擦拭不去的视网膜边缘血渍糊片，配合主角由于面部过度用力而扭曲成怪物的狞笑大特写。音效设计强行逼向失真爆音（Clipping）的极限疯狂混音边缘。",
            aestheticEn: "Un-wipeable blood smears smeared on the retina edges, coupled with extreme close-ups of the protagonist's face warped into a monstrous sinister grin from excessive strain. Audio design forcibly pushed to the brink of clipping frantic overdrive mix limits.",
            runtime: "IF (系统赐予主角极端恐怖的基础杀伤增益倍率，但代偿条件是永不停歇且不可逆的巨量生命值流失) THEN (强行挂载一块底层暴走的Berserk State标识芯片，利用指针直接向生命值回溯运算中强注极高的负数自残值，同时呈几何倍数扩大物理碰撞向量的伤害外溢)。",
            runtimeEn: "IF (System_Grants_Terrifying_Baseline_Lethal_Damage_Multipliers_Cost_Is_Unceasing_Irreversible_HP_Drain) THEN (Forcibly mount baseload runaway Berserk State flag chip, inject ultra-high negative self-mutilation value via pointers into HP trace-back computation, geometrically multiply damage overflow of physical collision vectors)."
        }
    },
    {
        id: "m5x_level_5",
        name: "L5.纯粹驱力",
        nameEn: "Pure Drive",
        group: "M5X. 死亡驱力流速",
        def: "构成世俗主体的“我（Ego）”由于被彻底燃烧而蒸发殆尽，骨架上仅残留着一股超越人类伦理属性的纯粹毁灭/创造势能。从此刻起，他（它）只是驱动这宇宙向终点坠落的一个物理矢量法则。",
        defEn: "The 'Ego' constructing the secular subject entirely evaporates due to being thoroughly burned out, leaving the skeleton with only a pure destructive/creative potential transcending human ethical attributes. Henceforth, it is merely a physical vector law driving the universe toward ground zero.",
        core: "超频至无穷大的最大流速标尺。齐泽克口中跨越“两次死亡”的绝对存在境地。他在象征法度的登记册上早已是一具尸骸，但如今，他正是以这尸骸身份作为了最纯粹的实在界大恶魔代理人而降临。",
        coreEn: "Overclocked to infinite maximum flow rate scale. Zizek's realm of absolute existence crossing 'the two deaths'. He is already a corpse in the registry of symbolic law, but now, he descends strictly carrying this corpse logic as the purest arch-demon proxy of the Real.",
        patch: {
            mechanics: "不再有生与死、攻与防的数值纠葛。人物模型的每一次简单位移，如同摧枯拉朽的超维度引力波风暴一般，所靠近的任何存在之物（包括地形障碍物与剧情不可杀友军）将在接触瞬间被无因物理抹除。",
            mechanicsEn: "No more numerical entanglements of life/death or ATK/DEF. Every simple displacement of the character model is like an overwhelming hyperdimensional gravitational wave storm; any existing thing nearby (including terrain obstacles or plot unkillable allies) is causally erased at contact.",
            aesthetic: "完全超越人类理解认知的极高概念抽象派极燃轨迹刻痕尾影。当主角无悲无喜地踏步时，周围空间的空间坐标网格本身就被这无明业火瞬间蒸馏至玻璃碎末状态。",
            aestheticEn: "Extremely燃 conceptual abstract blazing trajectory trails totally transcending human cognitive bounds. As the protagonist steps emotionlessly, the surrounding spatial coordinate grid itself is instantly distilled into glass shards by this ignorant karmic fire.",
            runtime: "IF (人物模型的每一次简单位移如同超维度引力波风暴，所靠近的任何存在之物在接触瞬间被无因物理抹除) THEN (剥夺该实体所有的神经元判定层，退行为仅带有一枚纯粹碰撞抹杀域包裹层的骨架核心Raw Entity，帧与帧之间通过直调最底层的ComputeShaders向空间内肆无忌惮地释放不可抵抗的绝对毁灭计算矩阵)。",
            runtimeEn: "IF (Every_Simple_Displacement_Of_Character_Model_Like_Hyperdimensional_Gravitational_Wave_Storm_All_Nearby_Things_Causally_Erased_At_Contact) THEN (Strip entity of all neural evaluation layers, regress to Raw Entity with pure Collision Erasure Domain, frame to frame directly call base-level ComputeShaders to recklessly emit irresistible absolute destruction calculation matrices into space)."
        }
    }
];
