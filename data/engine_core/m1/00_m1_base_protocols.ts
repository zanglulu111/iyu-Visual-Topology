/**
 * M1 缺失主体 (Subject of Lack) - 6大逻辑族群基座协议
 * 定义了各族群在叙事引擎中的通用交互常数 (MAR)。
 */

export const M1_BASE_GROUP_PROTOCOLS = {
  // A. 结构性异化 (Functional Alienation) - 主体简化为功能零件
  GROUP_A: {
    mechanics: "Autonomy = 0.1; Friction = 0.8; Inertia = High; M1->M5 Efficiency = 0.2.",
    aesthetic: "Depth = Shallow; Texture = Metallic; Tone = Bureaucratic.",
    runtime: "IF (Detection(Will)) THEN Trigger(System_Panic); ELSE (Maintain_Stagnation)."
  },

  // B. 符号性错位 (Symbolic Displacement) - 镜像/面具/真伪迷宫
  GROUP_B: {
    mechanics: "Stability = Volatile; Identity_Cost = High; Observation_Delta = Max.",
    aesthetic: "Filter = Mirrored; Rendering = Multi-Layered; Perspective = Parallax.",
    runtime: "IF (Comparison(M1_Actual, M3_Fantasy) < 0.1) THEN Trigger(System_Desync)."
  },

  // C. 本体论排除 (Ontological Exclusion) - 系统的弃民/不可读余数
  GROUP_C: {
    mechanics: "Connectivity = 0; Search_Weight = 0; Pressure_Delta = Max.",
    aesthetic: "Tone = Desolate; Frame = Long_Shot; Grain = Heavy.",
    runtime: "IF (Action attempts M4_Validation) THEN Trigger(Forbidden_Error)."
  },

  // D. 精神性内陷 (Psychic Implosion) - 内部塌缩/黑洞/圣状
  GROUP_D: {
    mechanics: "Internal_Gravity = Infinite; Efficiency = Entropy_Mode; Decay = Active.",
    aesthetic: "Color = Monochromatic; Style = Poetic_Nihilism; Rhythm = Asynergetic.",
    runtime: "IF (ObjectFound) THEN Convert_to(M1_Void)."
  },

  // E. 时间性断裂 (Temporal Rupture) - 历史/维度/连续性缺失
  GROUP_E: {
    mechanics: "Timeline_Continuity = Broken; Drift = High; Sync_Latency = Max.",
    aesthetic: "Visuals = Anachronistic; Frame_Rate = Irregular; Flicker = Yes.",
    runtime: "IF (Detection(History)) THEN Trigger(Amnesia_Reset)."
  },

  // F. 感官性脱落 (Sensory Decoupling) - 肉身/断肢/离线感官
  GROUP_F: {
    mechanics: "Proprioception = 0; Feedback_Loop = Latent; Local_Amplification = High.",
    aesthetic: "Focus = Fragmented; Detail = Hyper-Realistic; Aura = Sterile.",
    runtime: "IF (Total_Body_Check) THEN Trigger(Ghost_Pain)."
  }
};
