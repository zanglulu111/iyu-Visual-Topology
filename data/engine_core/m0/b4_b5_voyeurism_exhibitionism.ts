import { LibraryItemDef } from '../../../types';

export const ENGINE_M0_VOYEURISM_EXHIBITIONISM: LibraryItemDef[] = [
  // --- B4. 性倒错-窥淫 (Voyeurism) ---
  { 
    id: "os_voyeuristic_denial", 
    name: "窥视者的拒绝", nameEn: "Voyeuristic Denial", 
    group: "B4. 性倒错-窥淫 (Voyeurism)", groupEn: "B4. Perversion-Voyeurism", 
    def: "喜欢躲在缝隙中看，通过不参与现实来否认缺失。", 
    defEn: "Peering through cracks; denying lack via non-participation.", 
    core: "我是全知的观察者，只要我不入局，你就永远无法夺走我。", 
    coreEn: "I am the omniscient observer; if I don't enter the game, you can't take me.",
    logic: "主体的 M0（存在）被缩减为‘凝视’（SUR5）。通过保持距离（Isolation），主体成功地将 M1（虚无）隔离在视线之外。",
    logicEn: "M0 (Existence) is reduced to 'the gaze' (SUR5). By maintaining distance (Isolation), M1 is kept out of sight.",
    patch: {
      mechanics: "基础窥淫/暴露协议 + [隔离指数 = 最大; 观察者权限 = 激活]",
      mechanicsEn: "Base_VOYEURISM + [Isolation_Index = Max; Observer_Privilege = Active]",
      aesthetic: "聚焦：钥匙孔 + 阴影中的侧影 + 长焦镜头. 文本：充满了关于'看'的动词。 ",
      aestheticEn: "Focus: Keyholes + Side-profiles_in_Shadows + Telephoto_Lenses. Text: Heavy_on_Vision_verbs.",
      runtime: "IF (被被观察者回瞪) THEN (触发：即刻的系统断连)。",
      runtimeEn: "IF (Target_Looks_Back) THEN (Trigger: Instant_System_Disconnect)."
    }
  },
  { 
    id: "os_frozen_gaze", 
    name: "冻结的注视", nameEn: "Frozen Gaze", 
    group: "B4. 性倒错-窥淫 (Voyeurism)", groupEn: "B4. Perversion-Voyeurism", 
    def: "时间停在某个瞬间，只要不流动，缺失就不会发生。", 
    defEn: "Stopping time at a moment; if it doesn't flow, lack never happens.", 
    core: "时钟停了。这才是永恒。", 
    coreEn: "The clock stopped. This is eternity.",
    logic: "时间轴（SUR1/M5 动力）的局部锁定. 主体的 M0（身份）被凝固在那个‘原初恋物’被确立的亚秒级时刻。 ",
    logicEn: "Local locking of the timeline (SUR1/M5). Subject identity (M0) is frozen at the sub-second moment the 'primal fetish' was set.",
    patch: {
      mechanics: "基础窥淫/暴露协议 + [时流系数 = 0.001; 场景锁定 = 激活]",
      mechanicsEn: "Base_VOYEURISM + [Time-flow_Coefficient = 0.001; Scene_Lock = Active]",
      aesthetic: "聚焦：静止的雨筒 + 停滞的钟摆. 文本：带有永恒感的静止性词汇。 ",
      aestheticEn: "Focus: Still_Raindrops + Frozen_Pendulums. Text: Nouns/Adjectives emphasizing stillness.",
      runtime: "IF (时间试图前进) THEN (强制：状态回到帧 0)。",
      runtimeEn: "IF (Time_Moves) THEN (Force: Reset_to_Frame_0)."
    }
  },
  { 
    id: "os_phantom_suture", 
    name: "幻影缝合", nameEn: "Phantom Suture", 
    group: "B4. 性倒错-窥淫 (Voyeurism)", groupEn: "B4. Perversion-Voyeurism", 
    def: "当恋物客体被毁，主体试图在虚空中进行无形的缝合。", 
    defEn: "Invisible suturing in the void when the fetish is destroyed.", 
    core: "没了。但只要我继续做这个手势，它就还在。", 
    coreEn: "Gone. But as long as I keep making this gesture, it stays.",
    logic: "主体的 M0 在客体丧失后进入的‘虚空模拟’状态. M5 继续按原来的轨迹运行，但目标（M3 客体）已经变为空白。 ",
    logicEn: "Void-simulation state of M0 after object loss. M5 continues on the original trajectory, but target (M3 Object) is blank.",
    patch: {
      mechanics: "基础窥淫/暴露协议 + [模拟锚点 = 虚构; 认知惯性 = 最大]",
      mechanicsEn: "Base_VOYEURISM + [Simulated_Anchor = Fictional; Cognitive_Inertia = Max]",
      aesthetic: "聚焦：抓握虚空的手 + 透明的倒影. 文本：关于某种'不存在的存在'的描写。 ",
      aestheticEn: "Focus: Hands_Grasping_Void + Transparent_Reflections. Text: Descriptions of 'Non-existent_Presence'.",
      runtime: "IF (撞击真实) THEN (触发：彻底的、不可挽回的数据清理)。",
      runtimeEn: "IF (Impact_with_Real) THEN (Trigger: Final_Data_Wipe)."
    }
  },
  { 
    id: "os_the_forbidden_archive", 
    name: "禁忌档案馆", nameEn: "The Forbidden Archive", 
    group: "B4. 性倒错-窥淫 (Voyeurism)", groupEn: "B4. Perversion-Voyeurism", 
    def: "将所有的越界快感编码，存入大他者看不见的深渊区域。", 
    defEn: "Encoding transgressive joy into areas hidden from the Other.", 
    core: "法律定义了这里是黑洞，但黑洞里长满了我的花。", 
    coreEn: "Law defines this as a black hole, but it's where my flowers grow.",
    logic: "针对 M4（主权空间）的地下重构逻辑（Sub-narrative）. 主体通过建立独立于公共符号系统的私人符号，来获取绝对主权。 ",
    logicEn: "Underground reconstruction of M4 (Sovereign space). Subject gains absolute sovereignty via private signs independent of public systems.",
    patch: {
      mechanics: "基础窥淫/暴露协议 + [解密权重 = 0; 私人符号完整度 = 最大]",
      mechanicsEn: "Base_VOYEURISM + [Decryption_Weight = 0; Private_Symbol_Integrity = Max]",
      aesthetic: "聚焦：正在燃烧的日记 + 隐形墨水 + 暗室. 文本：充满了加密的隐喻。 ",
      aestheticEn: "Focus: Burning_Diaries + Invisible_Ink + Darkrooms. Text: Encrypted_Metaphors.",
      runtime: "IF (检测到管理员扫描) THEN (执行：自爆/隐藏指令)。",
      runtimeEn: "IF (Admin_Scan_Detected) THEN (Execute: Hide/Self-destruct)."
    }
  },
  // --- B5. 性倒错-暴露 (Exhibitionism) ---
  { 
    id: "os_the_others_gaze_trap", 
    name: "大他者的凝视陷阱", nameEn: "Other's Gaze Trap", 
    group: "B5. 性倒错-暴露 (Exhibitionism)", groupEn: "B5. Perversion-Exhibitionism", 
    def: "设置各种诱饵，强迫大他者不得不‘看’到自己。", 
    defEn: "Setting baits to force the Other's gaze.", 
    core: "看我！即便你因此感到恐惧或厌恶，你也必须一直看着我。", 
    coreEn: "Watch me! Even if you feel fear or disgust, you must keep watching.",
    logic: "主体通过制造过度的、不可忽视的视听事件（M5）来劫持大他者（M4/观众）的凝视点。 ",
    logicEn: "Subject hijacks the Other's (M4/Audience) gaze by creating excessive, unignorable audiovisual events (M5).",
    patch: {
      mechanics: "基础窥淫/暴露协议 + [凝视劫持权重 = 1.0; 挑衅等级 = 最大]",
      mechanicsEn: "Base_VOYEURISM + [Gaze_Hijacking = 1.0; Provocation_Level = Max]",
      aesthetic: "聚焦：聚光灯下的残骸 + 鲜艳的假发. 文本：充满了挑衅的、尖锐的词语。 ",
      aestheticEn: "Focus: Wreckage_under_Spotlights + Bright_Wigs. Text: Provocative, Sharp_Phrasing.",
      runtime: "IF (焦点移开) THEN (触发：更剧烈的爆裂事件)。",
      runtimeEn: "IF (Focus_Shift) THEN (Trigger: Explosive_Event)."
    }
  },
  { 
    id: "os_ritual_scenario", 
    name: "仪式的剧本化", nameEn: "Ritual Scenario", 
    group: "B5. 性倒错-暴露 (Exhibitionism)", groupEn: "B5. Perversion-Exhibitionism", 
    def: "将现实转化为一场严格按照台词执行的戏剧。", 
    defEn: "Turning reality into a strictly scripted drama.", 
    core: "在这个剧本里，我不是受害者，我是编剧和导演。", 
    coreEn: "In this script, I am not the victim; I am the writer and director.",
    logic: "主体的 M5（行动）必须被‘已定剧本’（M4 象征秩序）严格限定. 任何偏离剧本的意外（M2）都会导致系统重启。",
    logicEn: "M5 must be strictly limited by the 'script' (M4 Symbolic Order). Any deviation (M2) leads to a system restart.",
    patch: {
      mechanics: "基础窥淫/暴露协议 + [剧本刚性 = 1.0; 意外容忍度 = 0]",
      mechanicsEn: "Base_VOYEURISM + [Script_Rigidity = 1.0; Accident_Tolerance = 0]",
      aesthetic: "聚焦：剧院幕布 + 聚光灯 + 仪式道具. 文本：说明书式的对话。",
      aestheticEn: "Focus: Curtains + Spotlights + Ritual_Props. Text: Manual-style_Dialogue.",
      runtime: "IF (意外偏移) THEN (强制：重置场景/对话)。",
      runtimeEn: "IF (Deviation_Occurs) THEN (Force: Scene_Reset)."
    }
  },
  { 
    id: "os_the_others_lack_filler", 
    name: "他者缺失的填充者", nameEn: "Other's Lack Filler", 
    group: "B5. 性倒错-暴露 (Exhibitionism)", groupEn: "B5. Perversion-Exhibitionism", 
    def: "自以为是大他者的救世主，主动去缝合那个裂缝。", 
    defEn: "Self-proclaimed savior of the Other; suturing the crack.", 
    core: "别哭，大他者。我知道你想要什么，我会给你的。", 
    coreEn: "Don't cry, Other. I know what you want/lack; I will give it to you.",
    logic: "主体的 M0（身份）被设定为‘补漏者’. 通过消除大他者（M4）的缺失感，主体成功地逃避了自己的 M1（原始缺失）。 ",
    logicEn: "Subject identity (M0) set as 'patcher'. By eliminating the Other's (M4) lack, the subject escapes their own M1 (Primal lack).",
    patch: {
      mechanics: "基础窥淫/暴露协议 + [缝合偏好 = 1.0; 自我逃避权重 = 最大]",
      mechanicsEn: "Base_VOYEURISM + [Suturing_Bias = 1.0; Self-evasion_Weight = Max]",
      aesthetic: "聚焦：缝衣针 + 医用缝合线 + 填平的空地. 文本：充满了安慰性的虚假逻辑。 ",
      aestheticEn: "Focus: Sewing_Needles + Medical_Sutures + Filled_Gaps. Text: Comforting, False_Logics.",
      runtime: "IF (检测到系统漏洞) THEN (执行：立即填充/自我牺牲)。",
      runtimeEn: "IF (System_Vulnerability_Detected) THEN (Execute: Immediate_Fill)."
    }
  }
];
