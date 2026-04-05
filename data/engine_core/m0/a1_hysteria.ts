import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_NEUROSIS_HYSTERIA: LibraryItemDef[] = [
  // --- A1. 癔症结构 (Hysterical Structure) ---
  { 
    id: "os_the_questioning_gaze", 
    name: "质询的凝视", nameEn: "The Questioning Gaze", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "他要我成为什么？我对他意味着什么？", 
    defEn: "What does he want me to be? What do I mean to him?", 
    core: "通过挑战大他者的欲望来确认自己的存在。", 
    coreEn: "Confirming existence by challenging the Other's desire.",
    logic: "主体通过不断地否定（Refusal）来测试大他者（M4）的界限。叙事中充满了‘为什么是我’的质询。",
    logicEn: "The subject tests the boundaries of the Big Other (M4) through constant refusal. The narrative is filled with 'why me' inquiries.",
    patch: {
      mechanics: "基础神经症协议 + [凝视依赖 = 最大; 外部镜像可见度 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [M4_Gaze_Dependency = Max; M1_Visibility = External_Mirror]",
      aesthetic: "聚焦：反射面 + 散大的瞳孔。文本：强调'看见我看见你'。",
      aestheticEn: "Focus: Reflective_Surfaces + Dilated_Pupils. Text: Emphasis on 'seeing me seeing you'.",
      runtime: "IF (大他者视线偏移) THEN (触发：焦虑峰值 > 80%)。",
      runtimeEn: "IF (M4_Gaze_Shift) THEN (M1_Anxiety_Spike > 80%)."
    }
  },
  { 
    id: "os_symbolic_seduction", 
    name: "符号化的诱惑", nameEn: "Symbolic Seduction", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "用夸张的表演去钩住对方的注意力，即便那是痛苦。", 
    defEn: "Using exaggerated performance to hook attention, even if painful.", 
    core: "我是你欲望的迷宫，你永远无法彻底解开我。", 
    coreEn: "I am the labyrinth of your desire; you can never fully solve me.",
    logic: "将冲突（M2）转化为一场引诱大他者（M4）参与的表演。主体倾向于展示创伤以获取某种叙事特权。",
    logicEn: "Convert conflict (M2) into a performance inviting participation from the Big Other (M4). Subject tends to display trauma to gain narrative privilege.",
    patch: {
      mechanics: "基础神经症协议 + [表演倾向 = 最大; 符号诱饵 = 开启]",
      mechanicsEn: "Base_NEUROSIS + [Performance_Index = Max; Symbolic_Bait = True]",
      aesthetic: "聚焦：剧院灯光 + 华丽服饰。文本：情绪化表达 + 悬念。",
      aestheticEn: "Focus: Theater_Lights + Ornate_Costumes. Text: Emotional_Outbursts + Suspense.",
      runtime: "IF (观众互动下降) THEN (执行：升级冲突等级)。",
      runtimeEn: "IF (Audience_Engagement_Low) THEN (Execute: Escalate_Conflict_Level)."
    }
  },
  { 
    id: "os_identification_slide", 
    name: "认同的滑坡", nameEn: "Identification Slide", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "频繁切换身份，以此测试哪一个才是对方想要的。", 
    defEn: "frequently switching IDs to test which one the Other wants.", 
    core: "我不是这一个，也不是那一个。我是一场永恒的逃离。", 
    coreEn: "I am neither this nor that. I am an eternal escape.",
    logic: "主体的 M0（身份）是不稳定的。叙事轨迹表现为在不同职业身份（SUR9）之间的快速滑移。",
    logicEn: "The subject's M0 (Identity) is unstable. The narrative trajectory manifests as rapid sliding between different social labels (SUR9).",
    patch: {
      mechanics: "基础神经症协议 + [主词漂移率 = 高; 标签粘性 = 极低]",
      mechanicsEn: "Base_NEUROSIS + [Master_Signifier_Drift = High; Label_Stickiness = Minimum]",
      aesthetic: "聚焦：万花筒 + 变形效果。文本：频繁更替的自称。",
      aestheticEn: "Focus: Kaleidoscopes + Morphing_Effects. Text: Rapidly_Shifting_Self-reference.",
      runtime: "IF (被准确定义) THEN (触发：立即重置身份)。",
      runtimeEn: "IF (Accurately_Defined) THEN (Trigger: Immediate_Identity_Reset)."
    }
  },
  { 
    id: "os_body_as_theater", 
    name: "肉体剧场", nameEn: "Body as Theater", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "心理冲突转化为肉体疼痛，用瘫痪或痉挛说话。", 
    defEn: "Converting mental conflict to pain; speaking via paralysis/spasms.", 
    core: "肉体是词语的底气，当语言失效，躯体开始咆哮。", 
    coreEn: "Flesh is language's backing; when words fail, the body roars.",
    logic: "大他者（M4）局部的压力直接释放到生理维度（SUR7/SUR8）。主体的 M6（代价）表现为身体功能的暂时丧失。",
    logicEn: "Local pressure from the Big Other (M4) is directly released into the physiological dimension (SUR7/SUR8). The subject's M6 (Stakes) manifests as temporary loss of bodily function.",
    patch: {
      mechanics: "基础神经症协议 + [身心转化率 = 最大; 系统阻抗 = 身体化]",
      mechanicsEn: "Base_NEUROSIS + [Somatic_Conversion_Rate = Max; System_Resistance = Somatization]",
      aesthetic: "聚焦：痉挛 + 苍白的皮肤。文本：解剖学词汇 + 触觉描述。",
      aestheticEn: "Focus: Spasms + Pale_Skin. Text: Anatomical_Terms + Tactile_Descriptions.",
      runtime: "IF (语言逻辑过载) THEN (触发：随机躯体化故障)。",
      runtimeEn: "IF (Linguistic_Logic_Overload) THEN (Trigger: Random_Somatic_Failure)."
    }
  },
  { 
    id: "os_master_interrogator", 
    name: "主人的质询者", nameEn: "Master Interrogator", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "不断要求权力者展示'真心'，直到对方力竭。", 
    defEn: "demanding the master show 'true heart' until exhaustion.", 
    core: "我要揭穿你并非全能的真相。你只是个凡人。", 
    coreEn: "I will expose the truth that you are not omnipotent. You are human.",
    logic: "针对 M4（大他者/权威）的解构行动。叙事充满了对‘真相’的偏执追求，旨在瘫痪对方的统治。",
    logicEn: "Deconstruction against M4 (the Other/Authority). Narrative is filled with paranoid pursuit of 'truth', aiming to paralyze the other's rule.",
    patch: {
      mechanics: "基础神经症协议 + [挑战倾向 = 1.0; 真相搜索频率 = 循环]",
      mechanicsEn: "Base_NEUROSIS + [Challenge_Bias = 1.0; Truth_Search_Frequency = Loop]",
      aesthetic: "聚焦：显微镜 + 审讯灯。文本：连珠炮式的疑问句。",
      aestheticEn: "Focus: Microscopes + Interrogation_Lights. Text: Rapid-fire_Interrogative_Sentences.",
      runtime: "IF (检测到权威指令) THEN (触发：真伪性校验循环)。",
      runtimeEn: "IF (Authority_Command_Detected) THEN (Trigger: Authenticity_Check_Loop)."
    }
  },
  { 
    id: "os_incomplete_sacrifice", 
    name: "不完整的牺牲", nameEn: "Incomplete Sacrifice", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "反复表演牺牲，但其实在享受牺牲带来的关注。", 
    defEn: "Repeating sacrifice while enjoying the attention it brings.", 
    core: "看哪，我为你受了这么多苦！你现在欠我的了。", 
    coreEn: "Look how much I suffered for you! Now you owe me.",
    logic: "M6（代价）被赋予了某种交换价值。主体的每一个损失都旨在博取大他者（M4）的叙事负罪感。",
    logicEn: "M6 (Stakes) is given exchange value. Every loss by the subject aims to elicit narrative guilt from the Big Other (M4).",
    patch: {
      mechanics: "基础神经症协议 + [牺牲交换率 = 极高; 道德负担投放 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [Sacrifice_Exchange_Rate = High; Moral_Burden_Delivery = Max]",
      aesthetic: "聚焦：伤口展示 + 倾斜的天平。文本：受难者词汇。",
      aestheticEn: "Focus: Wound_Display + Tilted_Scales. Text: Martyrdom-themed_Vocabulary.",
      runtime: "IF (遭遇不幸) THEN (广播：'为了你我愿意...')。",
      runtimeEn: "IF (Misfortune_Occurs) THEN (Broadcast: 'For_you_I_would...')."
    }
  },
  { 
    id: "os_thirst_for_unmet", 
    name: "对不满的渴求", nameEn: "Thirst for Unmet", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "只要欲望一旦满足就感到恐惧，必须维持匮乏。", 
    defEn: "Fear upon satisfaction; must maintain a sense of lack.", 
    core: "得不到的才是神圣的。一旦到手，它就变为了尘土。", 
    coreEn: "The unobtained is sacred. Once held, it turns to dust.",
    logic: "M3（幻想/对象）必须保持在‘不可及’状态。每当 M7（闭环）接近，主体必须引入新的缺失变量（M1）。",
    logicEn: "M3 (Fantasy/Object) must remain 'unreachable'. Whenever M7 (Closure) nears, the subject must introduce a new lack variable (M1).",
    patch: {
      mechanics: "基础神经症协议 + [满足排斥 = 1.0; 欲望距离常量 = 正无穷]",
      mechanicsEn: "Base_NEUROSIS + [Satisfaction_Repulsion = 1.0; Desire_Distance_Constant = Infinity]",
      aesthetic: "聚焦：海市蜃楼 + 永恒的地平线。文本：转瞬即逝的失望感。",
      aestheticEn: "Focus: Mirages + Eternal_Horizons. Text: Fleeting_Sense_of_Disappointment.",
      runtime: "IF (目标达成) THEN (触发：自我解构 & 寻找新目标)。",
      runtimeEn: "IF (Goal_Achieved) THEN (Trigger: Self-Deconstruction & Target_Shift)."
    }
  },
  { 
    id: "os_rival_fascination", 
    name: "对情敌的迷恋", nameEn: "Rival Fascination", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "比起爱人，更关心对方正在如何吸引我的爱人。", 
    defEn: "Caring more about how the rival attracts the lover.", 
    core: "告诉我，你是如何让他动心的？我要学习那套密码。", 
    coreEn: "Tell me, how did you move him? I must learn that code.",
    logic: "认同逻辑（M0）是通过竞争者来实现的。主体在模拟竞争者的欲望，而非直接表达自己的 M3。",
    logicEn: "Identity logic (M0) is achieved via the competitor. The subject simulates the competitor's desire rather than expressing their own M3.",
    patch: {
      mechanics: "基础神经症协议 + [第三方引用 = 开启; 欲望中继 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [Third-party_Reference = True; Desire_Relay = Max]",
      aesthetic: "聚焦：窃听器 + 望远镜。文本：对'她/他'的过度描写。",
      aestheticEn: "Focus: Bugging_Devices + Telescopes. Text: Excessive_Description of 'Him/Her'.",
      runtime: "IF (爱人出现) THEN (视角锁定到：爱人的关注对象)。",
      runtimeEn: "IF (Lover_Appears) THEN (Focus_on: Lover's_Object_of_Attention)."
    }
  },
  { 
    id: "os_echo_chamber_self", 
    name: "回声室自我", nameEn: "Echo Chamber Self", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "通过引起巨大的声响或争议，来确认自己还没消失。", 
    defEn: "Proving existence via massive noise/controversy.", 
    core: "哪怕是骂名也比被无视要好。请继续对我做出评价。", 
    coreEn: "Even infamy beats invisibility. Please, keep judging me.",
    logic: "来自大他者（M4）的外部反馈被直接等同于主体的存在（M0）。叙事重点在于引发波澜而非解决问题。",
    logicEn: "External feedback from the Big Other (M4) is equated with subject existence (M0). Focus is on causing waves rather than solving problems.",
    patch: {
      mechanics: "基础神经症协议 + [反馈增益 = 10x; 争议发生率 = 高]",
      mechanicsEn: "Base_NEUROSIS + [Feedback_Gain = 10x; Controversy_Rate = High]",
      aesthetic: "聚焦：共振音箱 + 破碎的玻璃。文本：高频词汇 + 情感重音。",
      aestheticEn: "Focus: Resonating_Speakers + Cracked_Glass. Text: High-frequency_Words + Emotional_Emphasis.",
      runtime: "IF (系统静默) THEN (执行：生成不可忽视的噪音)。",
      runtimeEn: "IF (System_Silence) THEN (Execute: Generate_Non-ignorable_Noise)."
    }
  },
  { 
    id: "os_perpetual_revolt", 
    name: "永恒的叛乱", nameEn: "Perpetual Revolt", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "反对一切既存规则，仅仅因为它是被规定好的。", 
    defEn: "Opposing all rules just because they are fixed.", 
    core: "我的自由在于否定你的正确。我通过‘不’来存活。", 
    coreEn: "My freedom lies in denying your correctness; I survive by saying 'No'.",
    logic: "拒斥逻辑（M5 = Not M4）。主体的行动（M5）必须被设为对当前秩序（M4）的随机阻断。叙事中没有建设，只有拒绝。",
    logicEn: "Refusal logic (M5 = Not M4). Subject's actions (M5) must be set as random interruptions of the current order (M4). No construction, only rejection.",
    patch: {
      mechanics: "基础神经症协议 + [负熵驱动 = 1.0; 秩序阻滞指数 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [Negative_Entropy_Drive = 1.0; Order_Stagnation_Index = Max]",
      aesthetic: "聚焦：涂鸦 + 扯断的铁丝网。文本：充满了强烈的否定句。",
      aestheticEn: "Focus: Graffiti + Torn_Wire. Text: Heavy_use_of_Negative_Sentences.",
      runtime: "IF (检测到合意) THEN (触发：强制性反驳)。",
      runtimeEn: "IF (Consensus_Detected) THEN (Trigger: Compulsive_Counter-argument)."
    }
  },
  { 
    id: "os_identity_carnival", 
    name: "身份狂欢节", nameEn: "Identity Carnival", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "在废墟中不断套上精美的社交外壳，并迅速抛弃。", 
    defEn: "Putting on and discarding social skins in the ruins.", 
    core: "如果没有人在看，我就没有任何形态。我是一团空气。", 
    coreEn: "Without a gaze, I have no form; I am but a cloud of air.",
    logic: "镜像自我的过度扩增。叙事被各种短促的、华丽的支线（M0切换）填满，缺乏统一的内核演变。",
    logicEn: "Over-amplification of the mirrored self. Narrative filled with short, ornate branch plots (M0 shifts), lacking unified core evolution.",
    patch: {
      mechanics: "基础神经症协议 + [外壳更新频率 = 极高; 内核可见性 = 0]",
      mechanicsEn: "Base_NEUROSIS + [Shell_Refresh_Rate = High; Core_Visibility = 0]",
      aesthetic: "聚焦：堆叠的面具 + 散乱的假发。文本：高度修饰的、多变的自述。",
      aestheticEn: "Focus: Stacked_Masks + Scattered_Wigs. Text: Highly_Adorned, Shifting_Narrative.",
      runtime: "IF (角色固定超过 5min) THEN (触发：身份厌倦 & 随机切换)。",
      runtimeEn: "IF (Role_Fixed_>5min) THEN (Trigger: Identity_Ennui & Random_Switch)."
    }
  },
  { 
    id: "os_vague_suffering", 
    name: "模糊的受难", nameEn: "Vague Suffering", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "永远在病，但没有医生能说清哪里坏了。", 
    defEn: "Forever ill, but no doctor finds the cause.", 
    core: "我的病就是我对大他者的最终质询：既然你全能，为什么救不了我？", 
    coreEn: "My illness is the final question: if you are omnipotent, why can't you save me?",
    logic: "主体的 M1（缺失）被投射为具体的物理病灶（但无器质性基础）。叙事营造一种慢性的、弥散的绝望感。",
    logicEn: "Lack (M1) is projected as specific physical lesions (without organic basis). Narrative creates a chronic, diffuse sense of despair.",
    patch: {
      mechanics: "基础神经症协议 + [病理化倾向 = 0.8; 指令响应延迟 = 因病开启]",
      mechanicsEn: "Base_NEUROSIS + [Pathological_Bias = 0.8; Command_Response_Delay = True]",
      aesthetic: "聚焦：药瓶 + 蒙尘的温度计。文本：关于身体不适的各种隐晦描写。",
      aestheticEn: "Focus: Pill_Bottles + Dusty_Thermometers. Text: Vague_Descriptions of Physical_Discomfort.",
      runtime: "IF (压力等级上升) THEN (触发：局部系统故障/报错)。",
      runtimeEn: "IF (Stress_Level_Rise) THEN (Trigger: Local_System_Error)."
    }
  },
  { 
    id: "os_ideal_mirror_crack", 
    name: "理想镜像的裂痕", nameEn: "Ideal Mirror Crack", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "意识到完美自我只是个幻觉后的剧烈尖叫。", 
    defEn: "A violent scream upon realizing the perfect self is an illusion.", 
    core: "镜子碎了。原本该是自我的地方，现在只有一张空洞的嘴。", 
    coreEn: "The mirror broke. Where I should be, there's only an empty mouth.",
    logic: "M0（自我镜像）彻底崩塌。叙事中出现语言的断裂、逻辑的停滞（SUR1/M5 停滞），主体陷入原始的丧失状态。",
    logicEn: "M0 (Self-mirror) collapses completely. Breaks in language and stagnation in logic (SUR1/M5 stop) occur; subject falls into primal loss state.",
    patch: {
      mechanics: "基础神经症协议 + [镜像完整度 = <10%; 系统自毁倾向 = 激活]",
      mechanicsEn: "Base_NEUROSIS + [Mirror_Integrity = <10%; Self-destruct_Bias = Active]",
      aesthetic: "聚焦：蜘蛛网状的裂纹 + 扭曲的倒影。文本：破碎的短句 + 惊叹号。",
      aestheticEn: "Focus: Web-like_Cracks + Distorted_Reflections. Text: Fragmented_Sentences + Exclamations.",
      runtime: "IF (完美状态被拆穿) THEN (执行：区域性数据删除)。",
      runtimeEn: "IF (Perfect_State_Exposed) THEN (Execute: Local_Data_Deletion)."
    }
  },
  { 
    id: "os_vicarious_desire", 
    name: "代理商欲望", nameEn: "Vicarious Desire", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "总是帮别人实现愿望，并以此控制对方。", 
    defEn: "Helping others' dreams to exert control.", 
    core: "我是你的必需品。离开了我，你的愿望将一文不值。", 
    coreEn: "I am your necessity; without me, your desire is worthless.",
    logic: "主体劫持了大他者（M4）的 M3 指令。叙事表面是利他，实际是代理控制。主体通过赋予他人‘欲望’来巩固自己的叙事位置。",
    logicEn: "Subject hijacks the M4's M3 commands. Surface altruism masking proxy control. Subject consolidates narrative position by granting 'desire' to others.",
    patch: {
      mechanics: "基础神经症协议 + [欲望劫持 = 开启; 控制权重 = 0.9]",
      mechanicsEn: "Base_NEUROSIS + [Desire_Hijacking = True; Control_Weight = 0.9]",
      aesthetic: "聚焦：提线木偶 + 隐形的手。文本：大量的建议型对话。",
      aestheticEn: "Focus: Puppets + Invisible_Hands. Text: Pattern_of_Suggestive_Dialogues.",
      runtime: "IF (对方独立行动) THEN (触发：强烈的情感勒索/背叛感)。",
      runtimeEn: "IF (Subject_Independent_Action) THEN (Trigger: Severe_Emotional_Blackmail)."
    }
  },
  { 
    id: "os_erotic_of_refusal", 
    name: "拒绝的色情", nameEn: "Erotic of Refusal", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "在说‘不行’的过程中，获得巨大的兴奋感。", 
    defEn: "Gaining excitement through the act of saying 'No'.", 
    core: "你的挫败感就是我的燃料。请继续对我感到无能为力。", 
    coreEn: "Your frustration is my fuel. Please, remain helpless against me.",
    logic: "阻滞作为爽点（M7 = Avoidance）。主体的 M5 被设定为在大他者（M4）最渴望的时刻进行‘撤回’。",
    logicEn: "Stagnation as enjoyment (M7 = Avoidance). M5 is set to 'withdraw' at the moment the Other (M4) desires most.",
    patch: {
      mechanics: "基础神经症协议 + [阻滞快感 = 最大; 撤回概率 = 0.95]",
      mechanicsEn: "Base_NEUROSIS + [Stoppage_Enjoyment = Max; Withdrawal_Probability = 0.95]",
      aesthetic: "聚焦：紧锁的门 + 咬紧的牙齿。文本：充满了挑逗后的冷淡。",
      aestheticEn: "Focus: Locked_Doors + Clenched_Teeth. Text: Tease-then-Cold_Patterns.",
      runtime: "IF (请求满足) THEN (操作：立即中止协作)。",
      runtimeEn: "IF (Request_to_Satisfy) THEN (Action: Immediate_Collaboration_Stop)."
    }
  },
  { 
    id: "os_symbolic_prostitution", 
    name: "符号化的卖色", nameEn: "Symbolic Prostitution", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "出卖各种各样的社会身份，以此换取大他者的凝视。", 
    defEn: "Selling social IDs for the Other's gaze.", 
    core: "我会变成你喜欢的任何样子，只要在那之后你会看我一眼。", 
    coreEn: "I'll be anything you like, as long as you look at me after.",
    logic: "主体的 M0 被彻底商品化（作为 M3 的客体化替代）。叙事中充满了各种‘为了迎合’而进行的自我折损。",
    logicEn: "Subject's M0 is completely commodified (as an objectified substitute for M3). Narrative filled with self-impairment for the sake of 'fitting in'.",
    patch: {
      mechanics: "基础神经症协议 + [自我商品化 = 1.0; 凝视获取优先级 = 绝对]",
      mechanicsEn: "Base_NEUROSIS + [Self-Commodification = 1.0; Gaze_Priority = Absolute]",
      aesthetic: "聚焦：橱窗 + 昂贵的包装纸。文本：充满了奉承性的、客体化的自述。",
      aestheticEn: "Focus: Display_Windows + Expensive_Wrappings. Text: Obsequious, Objectified_Self-talk.",
      runtime: "IF (凝视消失) THEN (状态 = 崩溃/数据噪音)。",
      runtimeEn: "IF (Gaze_Lost) THEN (Status = Collapse/Data_Noise)."
    }
  },
  { 
    id: "os_unhealable_scar", 
    name: "无法愈合的伤痕", nameEn: "Unhealable Scar", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "不断扣开旧痂，强迫对方看见自己的创伤历史。", 
    defEn: "Ripping open old scabs, forcing the Other to see trauma.", 
    core: "伤口是我唯一的通行证。如果没有了痛，我就什么也不是。", 
    coreEn: "Wounds are my only passport. Without pain, I am nothing.",
    logic: "创伤（M2）被固化为叙事核心。主体拒绝康复，因为‘病症’是唯一能强制召回大他者（M4）注意力的工具。",
    logicEn: "Trauma (M2) is solidified as the narrative core. Subject refuses recovery as 'symptoms' are tools to summon the Other's (M4) attention.",
    patch: {
      mechanics: "基础神经症协议 + [创伤固着度 = 最大; 康复拒绝率 = 1.0]",
      mechanicsEn: "Base_NEUROSIS + [Trauma_Fixation = Max; Recovery_Refusal = 1.0]",
      aesthetic: "聚焦：渗血的纱布 + 对比强烈的暗调。文本：不断重访的过去。 ",
      aestheticEn: "Focus: Bleeding_Gauze + High-contrast_Shadows. Text: Constantly_Revisiting_the_Past.",
      runtime: "IF (检测到系统修复) THEN (触发：新的、更深层的破坏)。",
      runtimeEn: "IF (System_Repair_Detected) THEN (Trigger: Deeper_Destruction)."
    }
  },
  { 
    id: "os_truth_bomber", 
    name: "真相炸弹", nameEn: "Truth Bomber", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "在所有体面的社交场合捅破那层虚伪的窗户纸。", 
    defEn: "Piercing the hypocrisy in polite social settings.", 
    core: "我有义务让你们感到不适。只有当你们尴尬时，我才感到真实。", 
    coreEn: "I'm obligated to make you uncomfortable; only your awkwardness feels real.",
    logic: "主体的 M5 旨在通过揭穿大他者（M4/社会秩序）的‘无能’点（缺失）来获取主体性。叙事往往由一系列社交灾难组成。",
    logicEn: "M5 aims to gain subjectivity by exposing the 'impotence' (lack) of the Other (M4/Social order). Narrative consists of social disasters.",
    patch: {
      mechanics: "基础神经症协议 + [社交解构权重 = 最大; 冲突爆发倾向 = 极高]",
      mechanicsEn: "Base_NEUROSIS + [Social_Deconstruction = Max; Conflict_Outburst_Bias = High]",
      aesthetic: "聚焦：聚光灯下的尖锐物 + 打碎的香槟杯。文本：充满了揭露性的短句。",
      aestheticEn: "Focus: Sharp_Objects_under_Spotlights + Broken_Glasses. Text: Revelatory, Sharp_Phrasing.",
      runtime: "IF (环境过于和谐) THEN (执行：触发随机丑闻事件)。",
      runtimeEn: "IF (Harmony_Level_High) THEN (Execute: Random_Scandal_Event)."
    }
  },
  { 
    id: "os_theatre_of_absence", 
    name: "缺席剧场", nameEn: "Theatre of Absence", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "通过‘不在场’来制造存在感，折磨所有寻找他的人。", 
    defEn: "Creating presence via 'absence', torturing those who seek.", 
    core: "我的消失是最大的惩罚。我要你因为找不到我而发疯。", 
    coreEn: "My disappearance is the ultimate punishment; go mad because you can't find me.",
    logic: "负性主体的生成。通过在叙事流中制造巨大的空白（Null M0 / Missing M4 Feedback），来迫使所有的他人投入算力去填补这个黑洞。",
    logicEn: "Negative subject generation. Creating massive blanks in the narrative flow (Null M0 / Missing M4 Feedback), forcing others to fill the black hole.",
    patch: {
      mechanics: "基础神经症协议 + [缺失诱导 = 最大; 信息留白率 = 0.9]",
      mechanicsEn: "Base_NEUROSIS + [Lack_Induction = Max; Information_Blank_Rate = 0.9]",
      aesthetic: "聚焦：空椅子 + 还在冒烟的烟头 + 模糊的远景。文本：充满了关于'那个人现在在哪里'的讨论。 ",
      aestheticEn: "Focus: Empty_Chairs + Smoldering_Cigarettes + Blurred_Distances. Text: Discussions of 'Where_is_he'.",
      runtime: "IF (被再次找到) THEN (立即执行：下一次消失计划)。",
      runtimeEn: "IF (Found) THEN (Execute: Disappearance_Plan_Update)."
    }
  },
  { 
    id: "os_ideal_shattering", 
    name: "理想的粉碎", nameEn: "Ideal Shattering", 
    group: "A1. 神经症-癔症 (Hysteria)", groupEn: "A1. Neurosis-Hysteria", 
    def: "意识到完美自我的终极幻灭，核心逻辑崩溃。", 
    defEn: "Ultimate disillusionment of the perfect self; core logic collapse.", 
    core: "一旦我意识到大他者并不爱我，我整个人就会化为噪音。", 
    coreEn: "If I realize the Other doesn't love me, I become noise.",
    logic: "主体的 M1 (缺失) 击穿了所有的符号防线。叙事陷入原始的焦虑与虚构崩溃。 ",
    logicEn: "Lack (M1) pierces all symbolic defenses. Narrative falls into primal anxiety and fictional collapse.",
    patch: {
      mechanics: "基础神经症协议 + [虚假身份剥离度 = 1.0; 实在界入侵系数 = 最大]",
      mechanicsEn: "Base_NEUROSIS + [False_Identity_Stripping = 1.0; Real_Intrusion_Factor = Max]",
      aesthetic: "聚焦：逐渐消散的色块 + 崩塌的几何体。文本：非线性的、含混的词语碎片。",
      aestheticEn: "Focus: Fading_Colors + Collapsing_Geometry. Text: Non-linear, Ambiguous_Word_Fragments.",
      runtime: "IF (无条件的爱被证明为假) THEN (执行：核心进程挂起 / 蓝屏报错)。",
      runtimeEn: "IF (Unconditional_Love_Proven_False) THEN (Execute: Core_Process_Hang / Blue_Screen)."
    }
  }
];
