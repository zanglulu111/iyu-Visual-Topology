import { LibraryCategoryDef } from '../../../types';

export const SUR1_GROUP_A: LibraryCategoryDef = {
  id: "type_a",
  name: "动作与冒险 (Action & Adventure)",
  desc: "肾上腺素驱动，强调身体对抗、速度与外部冲突。",
  items: [
    { 
      id: "gun_fu", 
      name: "枪战/暴力美学", nameEn: "Gun Fu / Heroic Bloodshed",
      def: "吴宇森式双枪、慢动作、鲜血与西装、浪漫化的杀戮。", 
      defEn: "John Woo style dual-wielding, slow-mo, blood and suits, romanticized killing.",
      core: "优雅的职业信条 vs 混乱的杀戮现实。 | 换喻 ($): 秩序 (Order)",
      coreEn: "Elegant professional creed vs chaotic reality of killing. | Metonymy ($): Order",
      logic: "【杀戮舞步】：M5（行动）被极致的风格化接管，死亡的重量被审美化剥离。M4（大他者阻断）转译为无穷无尽的面目模糊的耗材（敌群）。",
      logicEn: "[Dance of Death]: M5 is fully stylized, stripping the weight of death. M4 translates to infinite faceless fodder.",
      patch: {
        mechanics: "基础动作协议 + [风格化指数 = 1.0; 创伤反馈 = 延迟]",
        mechanicsEn: "Base_ACTION + [Stylization_Index = 1.0; Trauma_Feedback = Delayed]",
        aesthetic: "聚焦：教堂烛光 + 飞舞的白鸽 + 双枪。文本：浪漫化高对比的暴力调度。",
        aestheticEn: "Focus: Church_Candles + Doves + Dual_Guns. Text: Romanticized_High_Contrast_Violence.",
        runtime: "IF (信念受到挑战) THEN (触发：舞蹈式杀戮宣泄)。严禁暴力的极度丑陋与写实化。",
        runtimeEn: "IF (Credo_Challenged) THEN (Trigger: Choreographed_Killing). FORBID_Ugly_Realistic_Violence."
      }
    },
    { 
      id: "tactical", 
      name: "特工/战术", nameEn: "Tactical / Agent",
      def: "现代军事战术、CQB、高科技装备、全球任务。", 
      defEn: "Modern military tactics, CQB, high-tech gear, global missions.",
      core: "严密的计划 vs 不可控的意外（墨菲定律）。 | 换喻 ($): 掌控 (Control)",
      coreEn: "Rigorous planning vs uncontrollable anomaly. | Metonymy ($): Control",
      logic: "【理性压制】：M1（主体）被降维为无情的专业工具，M3（欲望）就是“任务目标”。M4（阻断）表现为战术迷雾与环境的混沌。",
      logicEn: "[Rational Override]: M1 is reduced to a professional tool; M3 is 'The Objective'. M4 manifests as tactical fog and chaos.",
      patch: {
        mechanics: "基础动作协议 + [系统算力 = 高; 情感波动 = 强制抑制]",
        mechanicsEn: "Base_ACTION + [Computational_Power = High; Emotional_Fluctuation = Suppressed]",
        aesthetic: "聚焦：夜视仪绿光 + 全息HUD + 战术手势。文本：极简的无线电指令与冷酷的执行力。",
        aestheticEn: "Focus: NVG_Green_Light + Holographic_HUD + Tactical_Signs. Text: Minimalist_Comms_and_Cold_Execution.",
        runtime: "IF (计划发生偏差) THEN (触发：即兴的战术再校准)。严禁任务中途的情绪崩溃。",
        runtimeEn: "IF (Plan_Deviates) THEN (Trigger: Improvised_Tactical_Recalibration). FORBID_Mid_Mission_Breakdowns."
      }
    },
    { 
      id: "western", 
      name: "西部/边境", nameEn: "Western / Frontier",
      def: "左轮手枪、荒野、赏金猎人、法外正义、牛仔精神。", 
      defEn: "Revolvers, wilderness, bounty hunters, outlaw justice, cowboy spirit.",
      core: "入侵的文明秩序 vs 逐渐消亡的原始野性。 | 换喻 ($): 边界 (Boundary)",
      coreEn: "Invading civilized order vs fading primal wildness. | Metonymy ($): Boundary",
      logic: "【秩序剥落】：M4（大他者规则/文明法制）正在侵蚀边缘，主体M1代表着即将被淘汰的自由意志。一切冲突最终在法外之地（拔枪对决）进行结算。",
      logicEn: "[Order Intrusion]: M4 (Civilization/Law) erodes the edges; M1 represents fading free will. Conflicts resolve via extralegal duel.",
      patch: {
        mechanics: "基础动作协议 + [法外宽容度 = 高; 道德模糊性 = 1.0]",
        mechanicsEn: "Base_ACTION + [Extralegal_Tolerance = High; Moral_Ambiguity = 1.0]",
        aesthetic: "聚焦：风滚草 + 烈日特写 + 生锈铁轨。文本：烈日烘烤下的粗粝与干燥感。",
        aestheticEn: "Focus: Tumbleweeds + Blazing_Sun_Closeups + Rusted_Rails. Text: Gritty_Dryness_Under_Scorching_Sun.",
        runtime: "IF (遭遇现代工业/法律强加) THEN (触发：拔枪反抗或无奈的退场)。",
        runtimeEn: "IF (Imposition_of_Modern_Law) THEN (Trigger: Draw_Weapon_or_Fade_Away)."
      }
    },
    { 
      id: "vehicle", 
      name: "赛车/载具", nameEn: "Vehicle / Chase",
      def: "速度与激情、改装车、极限追捕、人车合一。", 
      defEn: "Fast & Furious, tuned cars, extreme chases, man-machine unity.",
      core: "人与机器的极限融合。生死只在毫秒之间。 | 换喻 ($): 逃逸速度 (Escape Velocity)",
      coreEn: "Limit fusion of man and machine. Life or death in milliseconds. | Metonymy ($): Escape Velocity",
      logic: "【动量压制】：M5（动量/速度）完全主导叙事频率，静止即意味着被 M4（大他者追捕者/时间）绞杀。",
      logicEn: "[Momentum Override]: M5 dictates narrative frequency; stopping means being crushed by M4 (Pursuer/Time).",
      patch: {
        mechanics: "基础动作协议 + [位移速度 = 极限; 环境感知视野 = 狭窄]",
        mechanicsEn: "Base_ACTION + [Velocity = Extreme; Peripheral_Vision = Narrow]",
        aesthetic: "聚焦：仪表盘红线 + 动态模糊 + 燃烧的橡胶。文本：肾上腺素飙升与引擎轰鸣。",
        aestheticEn: "Focus: Redline_Dashboards + Motion_Blur + Burning_Rubber. Text: Adrenaline_Spike_and_Engine_Roars.",
        runtime: "IF (失去速度) THEN (立即触发：物理与社会层面的抓捕/死亡)。",
        runtimeEn: "IF (Velocity_Lost) THEN (Trigger_Instantly: Physical_or_Social_Capture/Death)."
      }
    },
    { 
      id: "disaster", 
      name: "灾难/求生", nameEn: "Disaster / Survival",
      def: "地震海啸、极限环境求生、人定胜天、人性考验。", 
      defEn: "Earthquakes, tsunamis, extreme survival, testing of humanity.",
      core: "人类渺小的意志 vs 大自然冷漠的毁灭力量。 | 换喻 ($): 稳定态 (Homeostasis)",
      coreEn: "Puny human will vs nature's indifferent destruction. | Metonymy ($): Homeostasis",
      logic: "【秩序清零】：M4（自然灾害/绝对毁灭力量）强势碾压一切原有社会属性，主体的 M3 被极端降维至单一的“生存”或“拯救”。",
      logicEn: "[Order Reset]: M4 (Disaster) crushes all social attributes; M3 is reduced purely to 'Survival' or 'Rescue'.",
      patch: {
        mechanics: "基础环境协议 + [不可抗力参数 = MAX; 社会地位权重 = 0]",
        mechanicsEn: "Base_ENVIRONMENT + [Force_Majeure = MAX; Social_Status_Weight = 0]",
        aesthetic: "聚焦：上帝俯视的毁灭 + 废墟中的幸存者特写。文本：宏然的崩塌与微弱挣扎的对比。",
        aestheticEn: "Focus: God's-eye_Destruction + Survivor_Closeups_in_Ruins. Text: Massive_Collapse_vs_Feeble_Struggle.",
        runtime: "IF (试图维持旧有阶级秩序) THEN (触发：道德惩罚与灾难性灭亡)。",
        runtimeEn: "IF (Attempt_To_Maintain_Old_Order) THEN (Trigger: Moral_Punishment_and_Catastrophic_Death)."
      }
    },
    { 
      id: "kaiju", 
      name: "怪兽/巨物", nameEn: "Kaiju / Monster",
      def: "人类对抗巨型生物、破坏力、深海恐惧、兵器崇拜。", 
      defEn: "Humans vs giant creatures, sheer destruction, thalassophobia, weapon worship.",
      core: "人类中心主义的傲慢 vs 远古/宇宙尺度的恐怖。 | 换喻 ($): 尺度 (Scale)",
      coreEn: "Anthropocentric hubris vs ancient/cosmic terror. | Metonymy ($): Scale",
      logic: "【巨物崇高化】：M4（巨兽）被赋予了超出理解范围的物理压迫感。主体的 M5（行动）往往依赖于极端的科技（机甲）来达成体量的对等。",
      logicEn: "[Sublime Titan]: M4 is imbued with incomprehensible physical weight. M5 often relies on extreme tech (Mecha) to equal the scale.",
      patch: {
        mechanics: "基础恐怖协议 + [体量对比倍率 = x1000; 认知过载 = 高]",
        mechanicsEn: "Base_HORROR + [Scale_Ratio = x1000; Cognitive_Overload = High]",
        aesthetic: "聚焦：仰视巨构 + 暴雨/迷雾中的闪电轮廓。文本：强调震动、沉闷的巨响与不可名状的压迫。",
        aestheticEn: "Focus: Low_Angle_Titans + Lightning_Silhouettes_in_Rain/Fog. Text: Tremors_Heavy_Thuds_and_Unnamable_Pressure.",
        runtime: "IF (发生近距离对视) THEN (强制触发：由于体量悬殊导致的深层存在恐惧)。",
        runtimeEn: "IF (Close_Proximity_Eye_Contact) THEN (Force_Trigger: Existential_Dread_Due_to_Scale)."
      }
    },
    { 
      id: "war", 
      name: "战争/史诗", nameEn: "War Epic",
      def: "宏大战场、战壕、兄弟连、残酷现实或英雄主义。", 
      defEn: "Grand battlefields, trenches, band of brothers, brutal reality.",
      core: "脆弱的个体肉身 vs 巨大的历史绞肉机。 | 换喻 ($): 人性 (Humanity)",
      coreEn: "Fragile bodies vs the massive historical meat grinder. | Metonymy ($): Humanity",
      logic: "【集体绞灭】：M1（个体）的主体性被 M4（历史进程/国家机器）系统性抹除。M6（死亡）变得毫无预兆且具有去个人化的随机性。",
      logicEn: "[Collective Grinding]: M1's subjectivity is systematically erased by M4 (History/State). M6 (Death) is sudden and deeply impersonal.",
      patch: {
        mechanics: "基础历史协议 + [生命随机损耗率 = 高; 个体命运权重 = 最低]",
        mechanicsEn: "Base_HISTORY + [Random_Fatality_Rate = High; Individual_Destiny_Weight = Lowest]",
        aesthetic: "聚焦：泥泞的堑壕 + 褪色的胶片颗粒感。文本：血肉模糊、机械无情及断肢的冰冷纪实。",
        aestheticEn: "Focus: Muddy_Trenches + Faded_Film_Grain. Text: Gory_Flesh_Relentless_Machines_Cold_Docu_Style.",
        runtime: "IF (展现英雄主义浪漫化幻想) THEN (随时可能被流弹直接截断)。",
        runtimeEn: "IF (Romantic_Heroic_Delusions_Shown) THEN (May_Be_Instantly_Truncated_By_Stray_Bullet)."
      }
    },
    { 
      id: "superhero", 
      name: "超级英雄", nameEn: "Superhero",
      def: "超能力、正邪对抗、起源故事、宇宙危机、蒙面义警。", 
      defEn: "Superpowers, good vs evil, origin stories, cosmic crisis.",
      core: "神性（无限力量）与人性（凡人弱点）的拉扯。 | 换喻 ($): 责任 (Responsibility)",
      coreEn: "The tug-of-war between Divinity (power) and Humanity (flaws). | Metonymy ($): Responsibility",
      logic: "【镜像映射】：主体的 M1（内在裂痕）被外化为他所拥有的超能力/弱点；M4（反派）本质上是主角未被驯化的阴暗面或被压抑的欲望投射。",
      logicEn: "[Mirror Projection]: M1 (Internal Flaw) is externalized as power/weakness; M4 (Villain) is essentially the hero's untamed shadow.",
      patch: {
        mechanics: "基础神话协议 + [战力阈值 = 破格; 道德锚点 = 强制存在]",
        mechanicsEn: "Base_MYTH + [Power_Cap = Broken; Moral_Anchor = Mandatory]",
        aesthetic: "聚焦：高饱和能量光效 + 违背重力的滞空。文本：极具雕塑感的肢体与史诗隐喻。",
        aestheticEn: "Focus: High-Sat_Energy_VFX + Anti-Gravity_Hangtime. Text: Sculptural_Bodies_and_Mythic_Metaphors.",
        runtime: "IF (超能力失控) THEN (触发：对周遭社会的抵制与内心创伤的二次爆发)。",
        runtimeEn: "IF (Powers_Lose_Control) THEN (Trigger: Social_Backlash_and_Secondary_Trauma_Eruption)."
      }
    },
    { 
      id: "prison", 
      name: "越狱/逃亡", nameEn: "Prison Break / Fugitive",
      def: "禁锢与自由、高智商脱逃、洗清冤屈、环境解构。", 
      defEn: "Confinement and freedom, high-IQ escape, clearing names, environmental deconstruction.",
      core: "对自由的绝对渴望 vs 极致严密的物理禁锢。 | 换喻 ($): 越界 (Transgression)",
      coreEn: "Absolute desire for freedom vs extreme physical confinement. | Metonymy ($): Transgression",
      logic: "【全景监狱分解】：M4（象征界/监狱系统）是无处不在的监视者。M5（行动）的重点在于对日常规则的颠覆（勺子变为武器，管道变为通道）。",
      logicEn: "[Panopticon Decomposition]: M4 (System/Prison) is the omnipresent watcher. M5 is all about subverting mundane rules (spoon into weapon).",
      patch: {
        mechanics: "基础空间协议 + [监控密度 = 满级; 物资效能转换 = 高]",
        mechanicsEn: "Base_SPACE + [Surveillance_Density = MAX; Resource_Conversion = High]",
        aesthetic: "聚焦：铁网阴影 + 探照灯扫射 + 混凝土墙壁。文本：压抑幽闭下的极度冷静。",
        aestheticEn: "Focus: Barbed_Wire_Shadows + Searchlights + Concrete_Walls. Text: Extreme_Calm_Under_Claustrophobia.",
        runtime: "IF (越狱进度达90%) THEN (强制触发：突发的系统检查或同伴背叛)。",
        runtimeEn: "IF (Escape_Progress_At_90%) THEN (Force_Trigger: Sudden_System_Check_or_Betrayal)."
      }
    },
    { 
      id: "treasure", 
      name: "寻宝/探险", nameEn: "Treasure Hunt / Adventure",
      def: "古迹探秘、解谜、绝地求生、机关陷阱、异域风情", 
      defEn: "Ancient ruins, puzzles, traps, exotic archeology.",
      core: "对未知的贪婪好奇 vs 守护秘密的古老法则。 | 换喻 ($): 禁忌财富 (Forbidden Wealth)",
      coreEn: "Greed/curiosity for the unknown vs ancient laws guarding secrets. | Metonymy ($): Forbidden Wealth",
      logic: "【禁忌回溯】：M3（欲望对象:宝藏）牵引着主角穿越地理屏障；而 M4 具象化为古代设下的物理机关或敌对阵营，惩罚冒进者。",
      logicEn: "[Taboo Retrospection]: M3 (Treasure) drags hero across barriers; M4 manifests as ancient traps/rivals punishing the hubris.",
      patch: {
        mechanics: "基础叙事协议 + [谜题解密 = 长链条; 场景致死率 = 突然极高]",
        mechanicsEn: "Base_NARRATIVE + [Puzzle_Chain = Long; Scene_Lethality = Sudden_High]",
        aesthetic: "聚焦：火炬照亮的黄金 + 扬尘与古老图腾。文本：惊奇感、历史厚重与突然的机关响动。",
        aestheticEn: "Focus: Torch-lit_Gold + Dust_and_Ancient_Totems. Text: Wonder_Historical_Weight_and_Sudden_Mechanism_Clicks.",
        runtime: "IF (触碰核心文物) THEN (必然触发：环境崩塌或古老诅咒的复苏)。",
        runtimeEn: "IF (Core_Artifact_Touched) THEN (Must_Trigger: Environment_Collapse_or_Curse_Awakening)."
      }
    },
    { 
      id: "sports", 
      name: "体育/竞技", nameEn: "Sports / Competition",
      def: "训练蒙太奇、弱者逆袭、团队羁绊、最后时刻绝杀。", 
      defEn: "Training montages, underdog comebacks, team bonds, buzzer-beaters.",
      core: "肉体极限的痛苦 vs 精神超越的意志。 | 换喻 ($): 胜利 (Victory / Self-Actualization)",
      coreEn: "Physical limit agony vs will to transcend. | Metonymy ($): Victory / Self-Actualization",
      logic: "【规则内升华】：在 M4（比赛规则）提供的绝对透明结界内，M5（行动）的终极对手实则是 M1 自身的缺陷（恐惧、自私）。对手只是自我的投影。",
      logicEn: "[Sublimation in Rules]: Within M4 (Rules), the ultimate foe of M5 is M1's own internal flaws. Opponents are just projections.",
      patch: {
        mechanics: "基础情感协议 + [体力衰减 = 强; 精神共振 = 满级]",
        mechanicsEn: "Base_EMOTION + [Stamina_Decay = Strong; Mental_Resonance = MAX]",
        aesthetic: "聚焦：汗滴的慢动作特写 + 记分牌红灯 + 喘息声。文本：节奏强烈的肌肉记忆书写。",
        aestheticEn: "Focus: Slow-mo_Sweat_Drops + Scoreboard_Red_Lights + Panting. Text: Heavy_Rhythmic_Muscle_Memory_Writing.",
        runtime: "IF (比分落后到达绝境) THEN (必须触发：内心创伤的和解与终极“心流”的爆发)。",
        runtimeEn: "IF (Point_Deficit_Reaches_Despair) THEN (Must_Trigger: Internal_Reconciliation_and_Ultimate_Flow_State)."
      }
    },
    { 
      id: "revenge", 
      name: "复仇", nameEn: "Revenge",
      def: "个人恩怨、以暴制暴、情绪宣泄、代价极大的清算。", 
      defEn: "Vendettas, eye for an eye, catharsis, costly reckoning.",
      core: "过去创伤对现在的吞噬；为了平息幽灵不惜毁灭未来。 | 换喻 ($): 血债 (Blood Debt)",
      coreEn: "Past trauma swallowing the present; destroying the future to appease ghosts. | Metonymy ($): Blood Debt",
      logic: "【燃尽闭环】：M2（创伤）彻底占据了 M3（欲望），M1将自身化为执行复仇的工具，并在达到顶峰后走向 M6（不可逆的自毁或空虚）。",
      logicEn: "[Burn-out Loop]: M2 (Trauma) fully consumes M3 (Desire), reducing M1 to a tool. Peaks and ends in M6 (Self-destruction/Emptiness).",
      patch: {
        mechanics: "基础动作协议 + [仇恨驱动倍率 = 极限; 自我保护意识 = 趋近于0]",
        mechanicsEn: "Base_ACTION + [Hate_Drive_Multiplier = Extreme; Self_Preservation = Near_0]",
        aesthetic: "聚焦：雨夜 + 染血的双手 + 冷酷特写。文本：冷色调的压抑与极爆烈的断行。",
        aestheticEn: "Focus: Rainy_Nights + Blood-stained_Hands + Cold_Closeups. Text: Cold_Repression_and_Explosive_Line_Breaks.",
        runtime: "IF (大仇得报) THEN (必须触发：极度的空虚感，严禁胜利的喜悦)。",
        runtimeEn: "IF (Revenge_Accomplished) THEN (Must_Trigger: Extreme_Emptiness._FORBID_Joy_of_Victory)."
      }
    }
  ]
};
