/**
 * M0 基类协议定义 (Base Protocols)
 * 定义了神经症、性倒错、精神病三套基础动力学设置。
 * 各个子项 (LibraryItem) 通过 Patch 进行增量偏移。
 */

export const M0_BASE_PROTOCOLS = {
  // --- 1. 神经症基类 (Neurosis) ---
  NEUROSIS: {
    name: "神经症基类", nameEn: "Neurosis Base",
    mechanics: "内耗强度 = 高；位移速度 = 慢；动能来源 = 摩擦热。",
    mechanicsEn: "Internal_Friction = High; Displacement = Slow; Kinetic_Energy = Source(Friction).",
    aesthetic: "文本流向 = 摆动式（可是/但是/然而）；纹理 = 粘稠/附着。",
    aestheticEn: "Text_Flow = Oscillating (But/However/Yet); Texture = Sticky/Viscous.",
    runtime: "IF (与实在界碰撞) THEN 触发(仪式性防御) OR 重置(停滞状态)。",
    runtimeEn: "IF (Collision_with_Real) THEN Trigger(Ritual_Defense) OR Reset(Stagnation)."
  },

  // --- 2. 性倒错基类 (Perversion) ---
  PERVERSION: {
    name: "性倒错基类", nameEn: "Perversion Base",
    mechanics: "主体价值 = 0；客体价值 = 最大；M1->M5 转化率 = 1.0（针对恋物）。",
    mechanicsEn: "Subject_Value = 0; Object_Value = Max; M1->M5 Efficiency = 1.0 (on Fetish).",
    aesthetic: "文本语调 = 促动器度量；细节 = 触觉/物理；同理心 = 已禁用。",
    aestheticEn: "Text_Tone = Actuator_Metric; Detail = Tactile/Physical; Empathy = Disabled.",
    runtime: "IF (人类连接 > 阈值) THEN 重置(客体效用)。",
    runtimeEn: "IF (Human_Connection > Threshold) THEN Reset(Object_Utility)."
  },

  // --- 3. 精神病基类 (Psychotic) ---
  PSYCHOSIS: {
    name: "精神病基类", nameEn: "Psychosis Base",
    mechanics: "噪音过滤 = 关闭；信号强度 = 100%；所有事件 = 意向性矩阵。",
    mechanicsEn: "Noise_Filter = Off; Signal = 100%; All_Events = Intentional_Matrix.",
    aesthetic: "能指密度 = 饱和；景深 = 无；文本语调 = 绝对推理。",
    aestheticEn: "Signifier_Density = Saturated; Depth_Field = Null; Text_Tone = Absolute_Reasoning.",
    runtime: "IF (承认巧合) THEN 触发(现实漏洞) OR 重置(系统重缝合)。",
    runtimeEn: "IF (Admit_Coincidence) THEN Trigger(Reality_Glitch) OR Reset(System_Re-Suturing)."
  }
};
