/**
 * M0 精神拓扑 (Psychic Topology) — 四大基类协议定义
 * 
 * 核心公式：Story = M0 { [ (M1 → M2 → M3) / M4 ] × M5 } ⇒ (M6, M7)
 * 
 * M0 是包裹整个公式的 逻辑闭包 { ... }，即"叙事重力"。
 * 它决定了括号内一切运算的法则——同一个事件在不同 M0 下
 * 会产生截然不同的力学反应。
 * 
 * 四大协议：
 *  - NEUROSIS   (神经症/折叠)：承认缺失，承认法律，内耗生热
 *  - PERVERSION (性倒错/翻转)：知道缺失，否认法律，工具化超导
 *  - PSYCHOSIS  (精神病/撕裂)：排除大他者，真实界直涌
 *  - AUTISM     (孤独症/合拢)：拒绝进入语言，自足闭环
 * 
 * 各子项（如 A1.癔症、B1.恋物）仅作为对基类的"增量偏移 (Patch)"。
 */

export const M0_BASE_PROTOCOLS = {

  // ═══ 1. 神经症基类 (Neurosis) —— "否定的肯定" ═══
  // 折叠：主体承认象征秩序的合法性，承认缺失(Lack)。
  // 通过永无止境的质询("你到底想要我怎样？")来定位自己的存在。
  NEUROSIS: {
    name: "神经症基类",
    nameEn: "Neurosis Base Protocol",

    // ── 力学常数：公式内部如何运算 ──
    mechanics: "M4传导 = 内化阻尼(法律转化为内部摩擦力，重力越大自我消失感越强); M1→M5转化率 < 30%(大量能耗用于怀疑、延宕与质询); M2创伤吸收 = 意义回锁(创伤被编译为'我的罪'); 内耗强度 = 高; 位移速度 = 慢; 动能来源 = 摩擦热。",
    mechanicsEn: "M4_Transmission = Internalized_Damping (Law→Internal_Friction; higher_gravity=stronger_self-erasure); M1→M5_Conversion < 30% (energy_consumed_by_doubt_delay_questioning); M2_Absorption = Meaning_Lockback (trauma_compiled_as_'my_guilt'); Internal_Friction = High; Displacement = Slow; Kinetic_Source = Friction_Heat.",

    // ── 美学渲染：叙事的物理质感 ──
    aesthetic: "[GENRE_ADAPTIVE] 叙事节奏 = 震荡延宕，强制包含转折词(即使/万一/可是/难道)；文字充满自我反思的粘稠感；纹理 = 附着/黏滞。",
    aestheticEn: "[GENRE_ADAPTIVE] Narrative_Rhythm = Oscillating_Delay, forced_conjunctions (But/However/Yet/What_If); text_saturated_with_self-reflective_viscosity; Texture = Sticky/Viscous.",

    // ── 运行时判定 ──
    runtime: "IF (主体遭遇实在界碰撞) THEN 触发(仪式性防御) OR 进入(停滞反刍状态)。FORBID：主角获得真正的心理平衡或彻底的自我接纳。",
    runtimeEn: "IF (Subject_Collides_with_Real) THEN Trigger(Ritual_Defense) OR Enter(Stagnation_Rumination). FORBID: Subject achieving genuine psychological equilibrium or total self-acceptance."
  },

  // ═══ 2. 性倒错基类 (Perversion) —— "肯定的否定" ═══
  // 翻转：主体把自己化身为大他者享乐的利刃(Instrument of Jouissance)。
  // 通过比法律更彻底的服从来挑战它，通过将意义坍缩到"物"来否认缺失。
  PERVERSION: {
    name: "性倒错基类",
    nameEn: "Perversion Base Protocol",

    mechanics: "M4传导 = 杠杆效应(法律被视为外部工具，主体寻租); M1→M5转化率 ≈ 100%(主体将自身视为工具，超导转化); M2创伤吸收 = 物理磨损(创伤被视为实现目标的必要成本); 主体价值 = 0; 客体价值 = 最大。",
    mechanicsEn: "M4_Transmission = Leverage (Law_as_external_tool; subject_seeks_rent); M1→M5_Conversion ≈ 100% (subject_as_instrument; superconducting); M2_Absorption = Physical_Wear (trauma=necessary_cost); Subject_Value = 0; Object_Value = Max.",

    aesthetic: "[GENRE_ADAPTIVE] 叙事节奏 = 冷酷、平整、直线推进；启用物理质感词汇(材质/硬度/触感)；禁用情感词汇(怜悯/良心/犹豫)；同理心渲染 = 已禁用。",
    aestheticEn: "[GENRE_ADAPTIVE] Narrative_Rhythm = Cold_Flat_Linear; Enable(Physical_Tactile_Vocabulary: material/rigidity/texture); Disable(Emotional_Vocabulary: mercy/conscience/hesitation); Empathy_Rendering = Disabled.",

    runtime: "IF (主体产生共情或良心震颤) THEN 强制将情感对象物化处理，或转化为享乐工具。FORBID：主体产生真正的共情连接或道德困境反思。",
    runtimeEn: "IF (Subject_Generates_Empathy_or_Conscience) THEN Force(Objectify_Emotional_Target) OR Convert_to(Jouissance_Instrument). FORBID: Genuine empathic connection or moral-dilemma reflection."
  },

  // ═══ 3. 精神病基类 (Psychosis) —— "排除的肯定" ═══
  // 撕裂：大他者被排除(Forclusion)，真实界的岩浆直接喷涌。
  // 系统中不存在有效的除法体系(M4)，妄想或自创逻辑即为现实。
  PSYCHOSIS: {
    name: "精神病基类",
    nameEn: "Psychosis Base Protocol",

    mechanics: "M4传导 = 直通穿透(规则如背景噪音，无约束力；公式分母趋近缺如); M1→M5转化率 = 非线性脉冲(行动与冲动之间缺乏逻辑中介); M2创伤吸收 = 系统蓝屏(创伤直接触发象征界局部解体); 噪音过滤 = 关闭; 信号强度 = 全域100%。",
    mechanicsEn: "M4_Transmission = Direct_Penetration (rules=background_noise; no_binding_force; formula_denominator→absent); M1→M5_Conversion = Nonlinear_Pulse (no_logical_mediation_between_impulse_and_action); M2_Absorption = System_Bluescreen (trauma_triggers_partial_Symbolic_disintegration); Noise_Filter = Off; Signal = 100%_Global.",

    aesthetic: "[GENRE_ADAPTIVE] 叙事节奏 = 跳跃、断裂；景深崩塌(背景物件与主角动作具有同等语义权重)；能指密度 = 饱和(词就是物本身)；文本呈现'过度清晰'的惊悚感。",
    aestheticEn: "[GENRE_ADAPTIVE] Narrative_Rhythm = Leaping_Fractured; Depth_Field_Collapse (background_objects=same_semantic_weight_as_protagonist); Signifier_Density = Saturated (word=thing_itself); text_renders_uncanny_hyper-clarity.",

    runtime: "IF (主体承认'这只是巧合') THEN 强制生成一个现实窟窿(Reality_Glitch)戳破正常幻觉。FORBID：系统允许主角稳定接纳外部常识逻辑作为最终解释。",
    runtimeEn: "IF (Subject_Admits_'Just_Coincidence') THEN Force_Generate(Reality_Glitch) to puncture normal illusion. FORBID: System allowing subject to stably accept external common-sense logic as final explanation."
  },

  // ═══ 4. 孤独症基类 (Autism) —— "拒绝的肯定" ═══
  // 合拢：主体拒绝进入语言的大他者。未完成从"实在"到"符号"的跨越。
  // 通过绝对的物理性节奏(重复动作、触感)防御外界侵入。世界自足且无裂隙。
  AUTISM: {
    name: "孤独症基类",
    nameEn: "Autism Base Protocol",

    mechanics: "M4传导 = 完全绝缘(外部法律无法穿透其外壳，主体不受社会规则驱动); M1→M5转化率 ≈ 0%(对外输出) / 100%(对内循环，零损耗闭环); M2创伤吸收 = 边界崩坏(创伤表现为对边界的触碰，引发极端回避或生理性应激); 外部请求 = null。",
    mechanicsEn: "M4_Transmission = Total_Insulation (external_law_cannot_penetrate_shell; subject_not_driven_by_social_rules); M1→M5_Conversion ≈ 0%_external / 100%_internal (zero-loss_closed_loop); M2_Absorption = Boundary_Collapse (trauma=boundary_contact→extreme_avoidance_or_physiological_stress); External_Request = null.",

    aesthetic: "[GENRE_ADAPTIVE] 叙事节奏 = 静止、循环；极度聚焦于物理细节(温度/质地/频率/声响节奏)；彻底禁绝比喻和象征；文字如解剖报告般精准枯燥；隐喻权重 = 0; 感官权重 = 最大。",
    aestheticEn: "[GENRE_ADAPTIVE] Narrative_Rhythm = Static_Cyclical; hyper-focus_on_physical_detail (temperature/texture/frequency/sonic_rhythm); absolute_prohibition_on_metaphor_and_symbolism; text=autopsy-report_precision; Metaphor_Weight = 0; Sensation_Weight = Max.",

    runtime: "IF (主体为'理想'或'大义'而行动) THEN 强制回归纯粹感官闭环状态(象征秩序入侵检测→漏电修复)。FORBID：主体理解任何'暗示'、'潜台词'或社会性隐喻。",
    runtimeEn: "IF (Subject_Acts_for_'Ideal'_or_'Greater_Good') THEN Force_Return_to_Pure_Sensory_Loop (Symbolic_intrusion_detected→leak_repair). FORBID: Subject understanding any 'hints', 'subtext', or social metaphors."
  }
};
