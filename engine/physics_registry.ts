/**
 * 迷雾引擎 v3.0 — 物理属性注册表 (Physics Registry)
 * 
 * 全参数覆盖：M0-M7
 * 
 * 注册策略分层：
 *   Layer 0: M0 精神拓扑 — 全域操作系统，定义公式的"空间曲率"
 *   Layer 1: M1-M5 — 基于 group 分组推导重力系数
 *   Layer 2: M6 — 基于 group/关键词推导代价等级
 *   Layer 3: M7 — 基于 group 推导叙事终局权重
 *   [REMOVED] M4X/M5X — v3.0 正交性优化已移除
 */

import { MistItemPhysics } from './mist_types';

// ================================================================
//  M0 精神拓扑 — 操作系统注册表
//  M0 不参与 gravity 数值计算，它修改的是公式本身的运算规则。
//  理论依据：3_04_1 §1.2
//    "M0 是计算发生的空间曲率。它决定了括号内一切运算的法则。"
// ================================================================

/**
 * M0 拓扑结构对公式的修饰效果
 * 
 * curvature:      空间曲率系数 (0-1)，影响整体张力的非线性偏移
 * baseProtocol:   基类协议 KEY，用于提取 00_base_protocols.ts 中的基础指令
 * formulaMods:    对公式各模块的修饰系数
 *   m4Divisor:    M4 分母缩放 (>1 = 除法被放大, <1 = 除法被削弱/缺如)
 *   m5Multiplier: M5 乘子缩放 (>1 = 驱力被放大)
 *   m3Opacity:    M3 幻象的可见度/毒性 (0=彻底掩盖, 1=完全暴露)
 *   entropyRate:  叙事熵增速率 (基准=1.0)
 * runtimeOverride: 全局运行时覆写指令（注入 Prompt 的硬性修饰语）
 */
export interface M0TopologyProfile {
  curvature: number;
  baseProtocol: 'NEUROSIS' | 'PERVERSION' | 'PSYCHOSIS' | 'AUTISM';
  formulaMods: {
    m4Divisor: number;
    m5Multiplier: number;
    m3Opacity: number;
    entropyRate: number;
  };
  runtimeOverride: string;
  runtimeOverrideEn: string;
}

/**
 * M0 全部 13 种 group 的拓扑注册
 * 
 * 设计原理：
 * - 神经症(A): 承认阉割，M4有效但被延宕/稀释 → m4Divisor=1.0-1.2
 * - 倒错(B): 否认阉割，劫持驱力 → m5Multiplier>1, m3Opacity高
 * - 精神病(C): M4缺如/坍塌 → m4Divisor<1 (除法失效)
 * - 自闭(D): 符号系统关闭 → 全面衰减
 */
const M0_TOPOLOGY: Record<string, M0TopologyProfile> = {
  // ========== A. 神经症 (Neurosis) ==========
  'A1': {
    curvature: 0.4,
    baseProtocol: 'NEUROSIS',
    formulaMods: { m4Divisor: 1.0, m5Multiplier: 0.8, m3Opacity: 0.7, entropyRate: 0.9 },
    runtimeOverride: '【M0-癔症覆写】叙事必须围绕"大他者到底想要我什么"展开。主体的M5动作必须表现为向大他者的质询、挑衅和症状展示。文本中必须包含大量的反问句和未完成句。身体症状(转换)是核心叙事手段。',
    runtimeOverrideEn: '[M0-HYSTERIA] Narrative MUST center on "What does the Other want from me?". M5 actions manifest as provocations and symptom-displays toward M4. Text requires abundant rhetorical questions and incomplete sentences. Bodily conversion is a core narrative device.'
  },
  'A2': {
    curvature: 0.35,
    baseProtocol: 'NEUROSIS',
    formulaMods: { m4Divisor: 1.2, m5Multiplier: 0.6, m3Opacity: 0.5, entropyRate: 0.7 },
    runtimeOverride: '【M0-强迫症覆写】叙事动力(M5)必须被消耗在循环和仪式中。主体用逻辑/规则构建防线来延宕M2的到来。文本充满"但是/然而"的振荡。禁止直接的情感爆发——所有情感必须被理性标注、归档后再呈现。',
    runtimeOverrideEn: '[M0-OBSESSION] Narrative drive (M5) MUST be consumed in loops and rituals. Subject uses logic/rules to delay M2 arrival. Text oscillates with "but/however". Direct emotional outbursts FORBIDDEN—all affect must be rationally labeled and filed before presentation.'
  },
  'A3': {
    curvature: 0.45,
    baseProtocol: 'NEUROSIS',
    formulaMods: { m4Divisor: 1.0, m5Multiplier: 0.5, m3Opacity: 0.6, entropyRate: 0.8 },
    runtimeOverride: '【M0-恐惧症覆写】主体的M5行动完全被一个特定的恐惧客体所锁定。叙事空间被分为"安全区"和"恐惧区"。越过边界的尝试必须伴随剧烈的身体反应(心跳/冷汗/瘫痪)。M2只能通过恐惧客体的隐喻形式出场。',
    runtimeOverrideEn: '[M0-PHOBIA] Subject\'s M5 is entirely locked by a specific phobic object. Narrative space divides into "safe zone" and "fear zone". Border-crossing attempts MUST trigger somatic responses (heartbeat/sweat/paralysis). M2 can only appear through metaphoric forms of the phobic object.'
  },
  // ========== B. 性倒错 (Perversion) ==========
  'B1': {
    curvature: 0.6,
    baseProtocol: 'PERVERSION',
    formulaMods: { m4Divisor: 0.8, m5Multiplier: 1.3, m3Opacity: 0.9, entropyRate: 1.1 },
    runtimeOverride: '【M0-恋物覆写】主体的全部驱力(M5)被锁定在一个替代客体上。M1→M5的转化效率=1.0（仅针对恋物对象）。叙事必须展示主体对恋物的绝对精确描写（触觉/质感/仪式），同时对其他人类关系表现出功能性冷漠。同理心=已禁用。',
    runtimeOverrideEn: '[M0-FETISHISM] All drive (M5) locked onto a substitute object. M1→M5 conversion = 1.0 (on fetish only). Narrative MUST show absolute precision in describing the fetish (tactile/texture/ritual), with functional indifference to human relations. Empathy = DISABLED.'
  },
  'B2': {
    curvature: 0.7,
    baseProtocol: 'PERVERSION',
    formulaMods: { m4Divisor: 0.7, m5Multiplier: 1.5, m3Opacity: 0.95, entropyRate: 1.3 },
    runtimeOverride: '【M0-施虐覆写】主体占据大他者的位置，用绝对控制来否认自身阉割。M5必须表现为精密的、仪式化的支配行为。叙事聚焦于他者的痛苦反应作为主体存在证明。被支配者的崩溃=主体的享乐峰值。所有暴力必须是有组织的、冷静的。',
    runtimeOverrideEn: '[M0-SADISM] Subject occupies Big Other\'s position, using absolute control to disavow castration. M5 MUST manifest as precise, ritualized domination. Focus on Other\'s pain-response as proof of subject\'s existence. Victim collapse = subject jouissance peak. All violence MUST be organized and cold.'
  },
  'B3': {
    curvature: 0.65,
    baseProtocol: 'PERVERSION',
    formulaMods: { m4Divisor: 0.75, m5Multiplier: 1.4, m3Opacity: 0.9, entropyRate: 1.2 },
    runtimeOverride: '【M0-受虐覆写】主体主动邀请大他者的惩罚，以此来确认法的存在。M5的全部动能指向"让自己被击碎"。叙事必须展示主体精心设计自己的受难场景。疼痛不是惩罚，是享乐。受苦越精确，快感越明确。',
    runtimeOverrideEn: '[M0-MASOCHISM] Subject actively invites Big Other\'s punishment to confirm Law exists. All M5 energy directed toward "being destroyed". Narrative MUST show subject meticulously designing their own suffering scene. Pain is not punishment—it is jouissance. The more precise the suffering, the clearer the pleasure.'
  },
  'B4': {
    curvature: 0.55,
    baseProtocol: 'PERVERSION',
    formulaMods: { m4Divisor: 0.85, m5Multiplier: 1.2, m3Opacity: 0.85, entropyRate: 1.0 },
    runtimeOverride: '【M0-窥淫覆写】主体的M5全部转化为"观看"本身。叙事视角必须是偷窥式的——通过缝隙、窗口、监控器。主体决不介入场景，只消费其景象。被观看者的不知情是享乐的前提条件。一旦对方回视，系统崩溃。',
    runtimeOverrideEn: '[M0-VOYEURISM] All M5 converts to "watching" itself. Narrative POV MUST be peep-style—through cracks, windows, monitors. Subject never enters the scene, only consumes its spectacle. The viewed person\'s unawareness is prerequisite for jouissance. Reciprocal gaze = system crash.'
  },
  'B5': {
    curvature: 0.55,
    baseProtocol: 'PERVERSION',
    formulaMods: { m4Divisor: 0.85, m5Multiplier: 1.2, m3Opacity: 0.85, entropyRate: 1.0 },
    runtimeOverride: '【M0-暴露覆写】主体的M5全部转化为"展示/震惊"行为。核心驱动力=他者的震惊反应。叙事必须包含突然暴露的"禁忌之物"——不一定是身体，可以是秘密、身份、真相。暴露的目的不是交流，是强迫他者承认实在界的存在。',
    runtimeOverrideEn: '[M0-EXHIBITIONISM] All M5 converts to "displaying/shocking" behavior. Core drive = Other\'s shock response. Narrative MUST include sudden exposure of "the forbidden"—not necessarily body, but secrets, identity, truth. Exposure aims not at communication but forcing Other to acknowledge the Real.'
  },
  // ========== C. 精神病 (Psychosis) ==========
  'C1': {
    curvature: 0.8,
    baseProtocol: 'PSYCHOSIS',
    formulaMods: { m4Divisor: 0.3, m5Multiplier: 1.6, m3Opacity: 1.0, entropyRate: 1.5 },
    runtimeOverride: '【M0-偏执覆写】M4（大他者）在主体外部化为全知全能的迫害者。公式中的除法被替换为乘法——大他者不再阻断欲望，而是主动追杀主体。现实中没有巧合，所有事件都指向一个精密的阴谋网络。噪音过滤=关闭。所有信号=100%意向性。能指密度=饱和。',
    runtimeOverrideEn: '[M0-PARANOIA] M4 (Big Other) externalizes as an omniscient persecutor. Division in formula replaced by multiplication—Big Other no longer blocks desire but actively hunts the subject. NO coincidences. All events point to a precise conspiracy network. Noise filter = OFF. All signals = 100% intentional. Signifier density = SATURATED.'
  },
  'C2': {
    curvature: 0.9,
    baseProtocol: 'PSYCHOSIS',
    formulaMods: { m4Divisor: 0.1, m5Multiplier: 0.4, m3Opacity: 1.0, entropyRate: 2.0 },
    runtimeOverride: '【M0-分裂覆写】M4彻底缺如。符号秩序全面崩塌。公式的除法操作无效——分母趋近于0，导致分子能量无限发散。叙事中语言开始断裂(碎片句/新造词/逻辑跳跃)。现实与幻觉之间没有分界线。身体感受被解体(器官无体/肢体异化)。',
    runtimeOverrideEn: '[M0-SCHIZOPHRENIA] M4 totally absent. Symbolic order collapses entirely. Division operation INVALID—denominator approaches zero, numerator energy infinitely disperses. Language begins fragmenting (broken sentences/neologisms/logic jumps). NO boundary between reality and hallucination. Body sensation disintegrates (organless body/limb alienation).'
  },
  'C3': {
    curvature: 0.75,
    baseProtocol: 'PSYCHOSIS',
    formulaMods: { m4Divisor: 0.5, m5Multiplier: 0.3, m3Opacity: 0.1, entropyRate: 1.8 },
    runtimeOverride: '【M0-忧郁覆写】主体拒绝哀悼，将失去的客体吞噬为自身的一部分。M3(幻象)接近零——不是因为被压抑，而是因为主体认为"我就是那个垃圾/废物"。M5(驱力)被严重压制,表现为语速减慢、身体沉重、时间凝滞。叙事的熵急剧升高——文本变得沉滞、重复、凝固。',
    runtimeOverrideEn: '[M0-MELANCHOLIA] Subject refuses mourning, incorporates lost object as part of self. M3 (fantasy) approaches zero—not due to repression but because subject believes "I AM the garbage/waste". M5 (drive) severely suppressed, manifesting as slowed speech, heavy body, frozen time. Narrative entropy spikes—text becomes viscous, repetitive, congealed.'
  },
  'C4': {
    curvature: 0.6,
    baseProtocol: 'PSYCHOSIS',
    formulaMods: { m4Divisor: 0.6, m5Multiplier: 0.7, m3Opacity: 0.4, entropyRate: 1.3 },
    runtimeOverride: '【M0-普通精神病覆写】M4没有彻底缺如，但其"权威性"是伪造的——主体自己缝合了一个替代性的社会功能(假性适应)来填补父名的空洞。叙事在大部分时间看似正常，但在特定的应激时刻(工作丧失/关系断裂/身份质疑)，整个伪装体系将突然脱落，暴露出底层的符号荒漠。',
    runtimeOverrideEn: '[M0-ORDINARY PSYCHOSIS] M4 not entirely absent but its "authority" is fabricated—subject self-sutured a substitute social function (pseudo-adaptation) to fill the void of the Name-of-the-Father. Narrative appears normal most of the time, but at specific stress moments (job loss/relationship break/identity challenge), the entire disguise system suddenly detaches, exposing the symbolic desert beneath.'
  },
  // ========== D. 孤立 (Autism) ==========
  'D1': {
    curvature: 0.3,
    baseProtocol: 'AUTISM',
    formulaMods: { m4Divisor: 0.9, m5Multiplier: 0.4, m3Opacity: 0.2, entropyRate: 0.5 },
    runtimeOverride: '【M0-自闭覆写】符号系统的接入端口关闭。M1的缺失不产生欲望链条——而是形成"边缘物"的存储体系。M5(驱力)表现为高度重复的自体刺激行为。叙事必须展示主体与符号世界之间的"防火墙"——外部信号在触达主体前被系统性过滤/归档/无害化。社交场景必须以"协议翻译"而非"情感共鸣"为基调。',
    runtimeOverrideEn: '[M0-AUTISM] Symbolic system access ports CLOSED. M1 lack does not generate desire chain—forms "edge-object" storage system instead. M5 (drive) manifests as highly repetitive self-stimulation. Narrative MUST show a "firewall" between subject and symbolic world—external signals systematically filtered/filed/neutralized before reaching subject. Social scenes MUST be "protocol translation" not "emotional resonance".'
  }
};

// ============================================
// M0 查询接口
// ============================================

/** 从 M0 group 字符串中提取拓扑 profile */
export function getM0Topology(groupStr: string | undefined): M0TopologyProfile | undefined {
  if (!groupStr) return undefined;
  
  // 精确匹配 group 前缀（如 "A2. 神经症-强迫症 (Obsession)" → 查 "A2"）
  const prefix = groupStr.match(/^([A-D]\d)/)?.[1];
  if (prefix && M0_TOPOLOGY[prefix]) return M0_TOPOLOGY[prefix];
  
  // 首字母匹配（fallback 到大类）
  const firstChar = groupStr.charAt(0).toUpperCase();
  const fallbackMap: Record<string, string> = {
    'A': 'A2', // 默认神经症 → 强迫症
    'B': 'B1', // 默认倒错 → 恋物
    'C': 'C1', // 默认精神病 → 偏执
    'D': 'D1', // 默认自闭 → 孤独
  };
  const fallbackKey = fallbackMap[firstChar];
  if (fallbackKey) return M0_TOPOLOGY[fallbackKey];
  
  return undefined;
}

/** 获取 M0 基类协议名称 */
export function getM0BaseProtocolKey(groupStr: string | undefined): string | undefined {
  const topo = getM0Topology(groupStr);
  return topo?.baseProtocol;
}




// M4X/M5X physics blocks removed in v3.0 (正交性优化)

// ============================================
// M1 缺失主体 — 按 group 推导重力
// ============================================
const M1_GROUP_GRAVITY: Record<string, number> = {
  "A": 0.35, "A. 结构性异化": 0.35,
  "B": 0.45, "B. 无限欲望者": 0.45,
  "C": 0.55, "C. 认同分裂者": 0.55,
  "D": 0.65, "D. 精神性内陷": 0.65,
  "E": 0.70, "E. 时间性断裂": 0.70,
  "F": 0.75, "F. 感官性脱落": 0.75,
};

// ============================================
// M2 真实遭遇 — 按 group 推导重力
// ============================================
const M2_GROUP_GRAVITY: Record<string, number> = {
  "A": 0.50, "A. 系统的崩塌": 0.50,
  "B": 0.40, "B. 认知的裂痕": 0.40,
  "C": 0.70, "C. 肉体的背叛": 0.70,
  "D": 0.60, "D. 系统的边疆": 0.60,
};

// ============================================
// M3 幻象 — 按 group 推导重力
// ============================================
const M3_GROUP_GRAVITY: Record<string, number> = {
  "A": 0.30, "A. 修复与回归": 0.30,
  "B": 0.60, "B. 权力与超越": 0.60,
  "C": 0.40, "C. 连接与融合": 0.40,
  "D": 0.70, "D. 逃逸与虚无": 0.70,
};

// ============================================
// M4 大他者 — 按 group 推导压制力
// ============================================
const M4_GROUP_GRAVITY: Record<string, number> = {
  "A": 0.80, "A. 纯粹的大他者": 0.80,
  "B": 0.50, "B. 大他者的代理人": 0.50,
  "C": 0.35, "C. 镜像小他者": 0.35,
};

// ============================================
// M5 行动驱力 — 按 group 推导动力
// ============================================
const M5_GROUP_GRAVITY: Record<string, number> = {
  "A": 0.80, "A. 激进的对抗": 0.80,
  "B": 0.50, "B. 异化的抵抗": 0.50,
  "C": 0.45, "C. 智力的博弈": 0.45,
  "D": 0.65, "D. 生存的挣扎": 0.65,
};

// ============================================
// M6 代价 — 按 group 推导代价等级
// ============================================
const M6_GROUP_PRICE: Record<string, number> = {
  "A": 2, "A. 符号性死亡": 2, "Symbolic": 2,
  "B": 3, "B. 本体论崩塌": 3, "Ontological": 3,
  "C": 2, "C. 道德的堕落": 2, "Moral": 2,
  "D": 4, "D. 物理毁灭": 4,   "Ruin": 4,
};

// ============================================
// M7 存在落点 — 按 group 推导叙事终局权重
// ============================================
const M7_GROUP_GRAVITY: Record<string, number> = {
  "A": 0.20, "A. 幻灭与虚无": 0.20, "Void": 0.20,
  "B": 0.30, "B. 异化与同化": 0.30, "Assimilation": 0.30,
  "C": 0.70, "C. 超越与升华": 0.70, "Transcendence": 0.70,
  "D": 0.90, "D. 毁灭与崩塌": 0.90, "Ruin": 0.90,
};

// ============================================
// 查询辅助函数
// ============================================

/** 从 group 字符串中匹配 gravity */
function matchGroupGravity(
  groupStr: string | undefined,
  table: Record<string, number>,
  fallback: number
): number {
  if (!groupStr) return fallback;
  // 精确匹配
  if (table[groupStr] !== undefined) return table[groupStr];
  // 模糊匹配（取首字母）
  const firstChar = groupStr.charAt(0).toUpperCase();
  if (table[firstChar] !== undefined) return table[firstChar];
  return fallback;
}

// ============================================
// M6 代价：从 ID/标签/group 推导代价等级
// ============================================

const M6_KEYWORD_PRICE: Array<{ pattern: RegExp; price: number }> = [
  { pattern: /死亡|death|灭绝|extinction|末日|apocalypse|折磨|torture|脑叶|lobotomy/i, price: 5 },
  { pattern: /流放|exile|永失|非人|dehuman|疯|madness|永恒|eternal|消解|dissolution/i, price: 4 },
  { pattern: /背叛|betrayal|断裂|sever|怪物|monster|同化|assimilation|变异|mutation/i, price: 3 },
  { pattern: /失去|loss|丧失|抹杀|erasure|放逐|stigma|污名/i, price: 2 },
];

function getM6PriceFromTag(tag: string): number {
  for (const rule of M6_KEYWORD_PRICE) {
    if (rule.pattern.test(tag)) return rule.price;
  }
  return 3; // 默认中间值
}

// ============================================
// 统一查询接口
// ============================================

/** 获取物理属性 (v3.0: M4X/M5X 已移除, 此函数仅作兼容性保留) */
export function getItemPhysics(itemId: string): MistItemPhysics {
  return { gravity: 0.5, priceFloor: 2 };
}

/**
 * 从词库数据的 group 字段推导 gravity
 * @param moduleKey - 'M1'|'M2'|'M3'|'M4'|'M5'|'M7'
 * @param groupStr  - 词条的 group 字段值，如 "A. 结构性异化"
 */
export function getGroupGravity(moduleKey: string, groupStr: string | undefined): number {
  const tables: Record<string, Record<string, number>> = {
    'M1': M1_GROUP_GRAVITY,
    'M2': M2_GROUP_GRAVITY,
    'M3': M3_GROUP_GRAVITY,
    'M4': M4_GROUP_GRAVITY,
    'M5': M5_GROUP_GRAVITY,
    'M7': M7_GROUP_GRAVITY,
  };
  const table = tables[moduleKey];
  if (!table) return 0.5;
  return matchGroupGravity(groupStr, table, 0.5);
}

/** 从 M6 标签获取 group 代价等级 */
export function getM6GroupPrice(groupStr: string | undefined): number {
  if (!groupStr) return 3;
  return matchGroupGravity(groupStr, M6_GROUP_PRICE, 3);
}

/** 从 M6 标签列表获取实际代价等级（取最高） */
export function getM6Price(tags: string[]): number {
  if (!tags || tags.length === 0) return 3;
  return Math.max(...tags.map(t => getM6PriceFromTag(t)));
}

// M4X_PHYSICS, M5X_PHYSICS exports removed in v3.0
