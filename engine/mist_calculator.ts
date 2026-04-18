/**
 * 迷雾引擎 v2.1 — 核心计算器 (MistCalculator)
 * 
 * 核心升级：M0 精神拓扑作为"全域操作系统"正式接入公式
 * 
 * 职责：
 * 1. 执行公式 Story = M0 { [(M1→M2→M3)/M4] × M5 } ⇒ (M6, M7)
 *    其中 M0 作为全域修饰器，改变括号内运算的规则本身
 * 2. M0 拓扑修饰（曲率偏移 + 公式形变）
 * 3. 红线互斥检测（含 M0 相关红线）
 * 4. 代价守恒校验（缺失质量守恒定律）
 * 5. M7 叙事走向反馈
 * 6. 生成 ForceDirective 硬指令列表（含 M0 运行时覆写）
 * 7. 词条级 logic/patch 指令提取
 * 8. 编译 Prompt payload
 */

import {
  MistEngineOutput,
  TensionReport,
  RedlineViolation,
  PriceVerdict,
  ForceDirective
} from './mist_types';

import {
  getItemPhysics,
  getGroupGravity,
  getM6Price,
  getM6GroupPrice,
  getM0Topology,
  getM0BaseProtocolKey,
  type M0TopologyProfile
} from './physics_registry';

import type { NarrativeFieldState, LibraryItemDef, WorldLawConfig } from '../types';

// ============================================
// 0. 词库查找器（运行时 load）
//    加载 M0-M7 引擎词条 + SUR1-SUR10 皮层词条
// ============================================

import { NARRATIVE_ENGINE_LIBRARY } from '../data/engine_core/narrative_engine';
import { SKIN_LIBRARY } from '../data/skin_libraries';

let _libraryCache: Record<string, LibraryItemDef> | null = null;

function getLibraryCache(): Record<string, LibraryItemDef> {
  if (_libraryCache) return _libraryCache;
  try {
    const cache: Record<string, LibraryItemDef> = {};

    for (const category of NARRATIVE_ENGINE_LIBRARY) {
      if (category.items) {
        for (const item of category.items) {
          cache[item.id] = item;
        }
      }
    }

    for (const category of SKIN_LIBRARY) {
      if (category.items) {
        for (const item of category.items) {
          cache[item.id] = item;
        }
      }
    }

    _libraryCache = cache;
    return cache;
  } catch (err) {
    console.error("Failed to load library cache", err);
    return {};
  }
}

/** 从词库中查找词条 */
function lookupItem(id: string): LibraryItemDef | undefined {
  return getLibraryCache()[id];
}

/** Name to ID */
function nameToId(nameOrId: string | undefined): string | undefined {
  if (!nameOrId) return undefined;
  const cache = getLibraryCache();
  if (cache[nameOrId]) return nameOrId;
  for (const key in cache) {
    if (cache[key].name === nameOrId || cache[key].nameEn === nameOrId) {
      return key;
    }
  }
  return nameOrId;
}

/** 从 fieldState 中提取第一个有效标签 */
function extractFirst(fieldState: NarrativeFieldState, key: string): string | undefined {
  const tags = fieldState[key];
  if (!tags || tags.length === 0) return undefined;
  return tags[0];
}

/** 从 fieldState 中提取所有有效标签（用于多值字段如 skin_location） */
function extractAll(fieldState: NarrativeFieldState, key: string): string[] {
  const tags = fieldState[key];
  if (!tags || tags.length === 0) return [];
  return tags;
}

// ============================================
// 1. 结构化输入提取
//    骨层 (M0-M7) + 皮层 (SUR1-SUR10) + 工程轴 (SV1-SV2)
// ============================================

export interface MistEngineInput {
  // === 骨层：M0-M7 ===
  m0?: string;
  m1?: string;
  m2?: string;
  m3?: string;
  m4?: string;
  m5?: string;
  m6?: string;
  m7a?: string;
  m7b?: string;
  // m4x/m5x removed in v3.0 (正交性优化)

  // === 皮层：SUR1-SUR10 ===
  sur1?: string;       // 叙事动力 (Genre)
  sur2?: string;       // 世界模体 (World Motif)
  sur3?: string;       // 时空场域 (Spacetime Field)
  sur4?: string;       // 社会形态 (Social Order)
  sur5?: string;       // 欲望锚点 (Everything)
  sur6?: string[];     // 空间场景 (Scenes) — 可多选
  sur7?: string;       // 主体性别 (Gender)
  sur8?: string;       // 主体年龄 (Age)
  sur9?: string;       // 主体职业 (Occupation)

  sur10?: string;      // 哲学信念 (Philosophy)

  // === 皮层旋钮：X参数 ===
  // sur4x removed in v3.1 (与 SUR4 语义冗余)
  sur10x?: string;     // 信念裂度

  // === 工程轴：SV1-SV2 ===
  sv1?: string;        // 叙事结构
  sv2?: string;        // 故事体量

  // === 世界法则 ===
  worldLawGravity?: 1 | 2 | 3 | 4 | 5;
}

export function extractEngineInput(fieldState: NarrativeFieldState): MistEngineInput {
  return {
    // 骨层
    m0: nameToId(extractFirst(fieldState, 'engine_m0')),
    m1: nameToId(extractFirst(fieldState, 'engine_m1')),
    m2: nameToId(extractFirst(fieldState, 'engine_m2')),
    m3: nameToId(extractFirst(fieldState, 'engine_m3')),
    m4: nameToId(extractFirst(fieldState, 'engine_m4')),
    m5: nameToId(extractFirst(fieldState, 'engine_m5')),
    m6: nameToId(extractFirst(fieldState, 'engine_m6')),
    m7a: nameToId(extractFirst(fieldState, 'engine_m7a')),
    m7b: nameToId(extractFirst(fieldState, 'engine_m7b')),
    // m4x/m5x removed in v3.0

    // 皮层 SUR1-SUR10
    sur1: nameToId(extractFirst(fieldState, 'skin_genre')),
    sur2: nameToId(extractFirst(fieldState, 'skin_animation_genre')),
    sur3: nameToId(extractFirst(fieldState, 'skin_era')),
    sur4: nameToId(extractFirst(fieldState, 'skin_society')),
    sur5: nameToId(extractFirst(fieldState, 'skin_everything')),
    sur6: extractAll(fieldState, 'skin_location').map(t => nameToId(t) || t),
    sur7: nameToId(extractFirst(fieldState, 'skin_gender')),
    sur8: nameToId(extractFirst(fieldState, 'skin_age')),
    sur9: nameToId(extractFirst(fieldState, 'skin_profession')),

    sur10: nameToId(extractFirst(fieldState, 'skin_ideology')),

    // 皮层旋钮 (sur4x removed in v3.1)
    sur10x: nameToId(extractFirst(fieldState, 'sur10x')),

    // 工程轴
    sv1: nameToId(extractFirst(fieldState, 'skin_structure')),
    sv2: nameToId(extractFirst(fieldState, 'skin_volume')),
  };
}

// ============================================
// 2. M0 拓扑解析器 — 确定"操作系统"
// ============================================

/**
 * 从 M0 词条 ID 解析出其拓扑 profile
 * M0 的角色不是参数，而是"定义域"——它决定公式内运算的法则
 */
function resolveM0Topology(m0Id?: string): M0TopologyProfile | undefined {
  if (!m0Id) return undefined;
  const item = lookupItem(m0Id);
  if (!item) return undefined;
  return getM0Topology(item.group);
}

// ============================================
// 3. 张力计算 (Tension Calculation)
//    完整公式（v2.2 含 SUR 皮层注入）：
//    分子 = (G_M1 + G_M2 + G_M3 × m3Opacity × sur10xFactor)
//    分母 = G_M4 × m4Divisor × (1 + G_M4X)
//    张力比 = 分子 / max(分母, 0.1)
//    最终张力 = 张力比 × G_M5 × m5Multiplier × (1 + G_M5X)
// ============================================

function resolveGravity(moduleKey: string, itemId?: string): number {
  if (!itemId) return 0.5;
  const item = lookupItem(itemId);
  return getGroupGravity(moduleKey, item?.group);
}

// SUR4X factor function removed in v3.1 (与 SUR4 语义冗余)

/**
 * SUR10X 信念裂度 → M3 幻象粘度系数
 * L1=1.3(虔信→信念极度坚固), L2=1.15, L3=1.0, L4=0.7, L5=0.4
 * 理论依据：越虔诚，主体越"当真"自己的幻象，M3势能越高
 *          越决裂，主体越看穿幻象，M3势能越低
 */
function resolveSUR10XFactor(sur10xId?: string): number {
  if (!sur10xId) return 1.0;
  const map: Record<string, number> = {
    'sur10x_level_1': 1.3,  // 虔信 → 信念完全坚固
    'sur10x_level_2': 1.15, // 微裂 → 信念略有松动
    'sur10x_level_3': 1.0,  // 反讽 → 中性（看穿但在演）
    'sur10x_level_4': 0.7,  // 脱落 → 信念大幅弱化
    'sur10x_level_5': 0.4,  // 决裂 → 信念几乎无效
  };
  return map[sur10xId] ?? 1.0;
}

function calculateTension(input: MistEngineInput, m0Topo: M0TopologyProfile | undefined): TensionReport {
  const g_m1 = resolveGravity('M1', input.m1);
  const g_m2 = resolveGravity('M2', input.m2);
  const g_m3 = resolveGravity('M3', input.m3);
  const g_m4 = resolveGravity('M4', input.m4);
  const g_m5 = resolveGravity('M5', input.m5);

  // M4X/M5X amplifiers removed in v3.0 — neutral defaults
  const m4x_gravity = 0.5;
  const m5x_gravity = 0.5;

  // M0 修饰系数（无 M0 时全部为 1.0）
  const mods = m0Topo?.formulaMods ?? {
    m4Divisor: 1.0,
    m5Multiplier: 1.0,
    m3Opacity: 1.0,
    entropyRate: 1.0
  };

  // SUR 皮层修饰系数 (sur4x removed in v3.1)
  const sur10xFactor = resolveSUR10XFactor(input.sur10x);

  // ====== 分子：欲望势能 ======
  // M3 的重力受三重调制：
  //   1. M0.m3Opacity（精神拓扑：忧郁=0.1）
  //   2. SUR10X（信念裂度：虔信=1.3 → 幻象更"真"）
  const effective_m3 = g_m3 * mods.m3Opacity * sur10xFactor;
  const numerator = g_m1 + g_m2 + effective_m3;

  // ====== 分母：大他者阻断 ======
  // M4 受三重调制：
  //   1. M0.m4Divisor（精神拓扑：精神病=0.1）
  const effective_m4 = g_m4 * mods.m4Divisor;
  const m4_amplifier = 1.0 + m4x_gravity;
  
  // 【算法修正】由于分子是 M1+M2+M3 的加和（均值约1.5），分母仅有 M4（均值约0.75）。
  // 为了让平均对峙状态的张力比回归到 1.0 (DEADLOCK)，在此赋予大他者 2.0 的“固有镇压权值”。
  const m4_base_weight = 2.0; 
  const denominator = Math.max(effective_m4 * m4_amplifier * m4_base_weight, 0.1);
  const ratio = numerator / denominator;

  // ====== 乘子：驱力 ======
  const effective_m5 = g_m5 * mods.m5Multiplier;
  const m5_amplifier = 1.0 + m5x_gravity;
  const finalTension = ratio * (effective_m5 * m5_amplifier);

  // ====== 世界熵 ======
  const worldEntropy = mods.entropyRate;

  // M8/M7 终局重力 → 叙事走向判定 (M8 裁决为主，M7 余痕为辅)
  const m8Gravity = resolveGravity('M8', input.m7a);
  const m7Gravity = resolveGravity('M7', input.m7b);
  const adjustedRatio = ratio * (1 + (m8Gravity - 0.5) * 0.4) * (1 + (m7Gravity - 0.5) * 0.2);

  // 走向判定（M0 曲率偏移）
  const curvatureShift = m0Topo ? (m0Topo.curvature - 0.5) * 0.4 : 0;

  let narrativeArc: TensionReport['narrativeArc'];
  if (adjustedRatio > 1.25 + curvatureShift) {
    narrativeArc = 'BREAKTHROUGH';
  } else if (adjustedRatio > 0.85 + curvatureShift * 0.5) {
    narrativeArc = 'DEADLOCK';
  } else if (adjustedRatio > 0.55 + curvatureShift * 0.3) {
    narrativeArc = 'TRAGEDY';
  } else {
    narrativeArc = 'ANNIHILATION';
  }

  return { numerator, denominator, ratio, finalTension, worldEntropy, narrativeArc };
}

// ============================================
// 4. 红线检测（含 M0 相关红线）
// ============================================

function detectRedlines(input: MistEngineInput, m0Topo: M0TopologyProfile | undefined): RedlineViolation[] {
  const violations: RedlineViolation[] = [];

  // ---- M0 专属红线 ----

  // M4X/M5X redline checks removed in v3.0

  return violations;
}

// ============================================
// 5. 代价配平 (缺失质量守恒定律)
// ============================================

function verifyPriceBalance(
  input: MistEngineInput,
  tension: TensionReport,
  fieldState: NarrativeFieldState
): PriceVerdict {
  const floors = [
    // priceFloor from M4X/M5X removed in v3.0
    1,
    1,
  ];
  
  const tensionBonus = tension.finalTension > 2.0 ? 1 : 0;
  const requiredLevel = Math.min(Math.max(...floors) + tensionBonus, 5);

  const m6Tags = fieldState['engine_m6'] || [];
  let actualLevel = getM6Price(m6Tags);
  if (input.m6) {
    const m6Item = lookupItem(input.m6);
    const groupLevel = getM6GroupPrice(m6Item?.group);
    actualLevel = Math.max(actualLevel, groupLevel);
  }

  const isBalanced = actualLevel >= requiredLevel;

  let suggestion: string | undefined;
  let suggestionCn: string | undefined;
  if (!isBalanced) {
    suggestion = `Tension demands M6 >= Level ${requiredLevel}, but current M6 is Level ${actualLevel}. Increase stakes.`;
    suggestionCn = `⚠️ 张力失衡：当前参数组合要求代价 ≥ ${requiredLevel} 级，但 M6 仅为 ${actualLevel} 级。叙事不守恒——代价太轻，请选择更沉重的代价。`;
  }

  return { requiredLevel, actualLevel, isBalanced, suggestion, suggestionCn };
}

// ============================================
// 6. 指令编译 (Directive Compilation)
//    升级：M0 作为最高优先级覆写指令注入
// ============================================

function compileDirectives(
  input: MistEngineInput,
  tension: TensionReport,
  m0Topo: M0TopologyProfile | undefined
): ForceDirective[] {
  const directives: ForceDirective[] = [];

  // ====== M0 全局覆写指令 (HIGHEST PRIORITY) ======
  if (m0Topo) {
    directives.push({
      target: 'M0_PSYCHIC_TOPOLOGY',
      command: m0Topo.runtimeOverrideEn,
      commandCn: m0Topo.runtimeOverride,
      priority: 'CRITICAL'
    });
  }

  // M0 词条自身的 logic 和 patch.runtime
  if (input.m0) {
    const m0Item = lookupItem(input.m0);
    if (m0Item) {
      if (m0Item.logic) {
        directives.push({
          target: 'M0_ITEM_LOGIC',
          command: m0Item.logicEn || m0Item.logic,
          commandCn: m0Item.logic,
          priority: 'CRITICAL'
        });
      }
      if (m0Item.patch?.runtime) {
        directives.push({
          target: 'M0_ITEM_RUNTIME',
          command: m0Item.patch.runtimeEn || m0Item.patch.runtime,
          commandCn: m0Item.patch.runtime,
          priority: 'CRITICAL'
        });
      }
      // M0 的 patch.aesthetic → 美学硬指令
      if (m0Item.patch?.aesthetic) {
        directives.push({
          target: 'M0_AESTHETIC',
          command: m0Item.patch.aestheticEn || m0Item.patch.aesthetic,
          commandCn: m0Item.patch.aesthetic,
          priority: 'HIGH'
        });
      }
    }
  }

  // ====== 叙事走向硬指令 ======
  const arcDirectives: Record<TensionReport['narrativeArc'], { cmd: string; cmdCn: string }> = {
    'BREAKTHROUGH': {
      cmd: 'Subject MUST overcome through sacrifice, not friendship/luck. Victory must carry irreversible cost.',
      cmdCn: '主体必须通过献祭突破障碍。突破必须伴随不可逆代价。禁止：友情/运气。'
    },
    'DEADLOCK': {
      cmd: 'Maintain maximum dramatic tension. No resolution until final act. Both sides bleed equally.',
      cmdCn: '保持最大戏剧张力。终幕前不得解决冲突。双方必须承受对等损耗。'
    },
    'TRAGEDY': {
      cmd: 'Subject MUST fail in Act 2. Any partial victory must be Pyrrhic. Forbidden: deus ex machina.',
      cmdCn: '主体必须在第二幕物理性失败。任何局部胜利必须是皮洛斯式的。绝对禁止：机械降神。'
    },
    'ANNIHILATION': {
      cmd: 'Subject is destroyed. No redemption arc. System wins. Text becomes cold, mechanical, inhuman.',
      cmdCn: '主体被彻底摧毁。禁止救赎弧线。体制完胜。文本变为冰冷、机械、非人的。'
    }
  };

  const arc = arcDirectives[tension.narrativeArc];
  directives.push({
    target: 'NARRATIVE_ARC',
    command: arc.cmd,
    commandCn: arc.cmdCn,
    priority: 'CRITICAL'
  });

  // ====== M1-M5 词条级指令提取 ======
  const moduleItems: Array<{ target: string; id?: string; moduleKey: string }> = [
    { target: 'M1_SUBJECT', id: input.m1, moduleKey: 'M1' },
    { target: 'M2_ENCOUNTER', id: input.m2, moduleKey: 'M2' },
    { target: 'M3_FANTASY', id: input.m3, moduleKey: 'M3' },
    { target: 'M4_BIG_OTHER', id: input.m4, moduleKey: 'M4' },
    { target: 'M5_DRIVE', id: input.m5, moduleKey: 'M5' },
    { target: 'M6_PRICE', id: input.m6, moduleKey: 'M6' },
    { target: 'M8_VERDICT', id: input.m7a, moduleKey: 'M8' },
    { target: 'M7_RESIDUAL', id: input.m7b, moduleKey: 'M7' },
  ];

  for (const mod of moduleItems) {
    if (!mod.id) continue;
    const item = lookupItem(mod.id);
    if (!item) continue;

    // patch.runtime → 硬指令
    if (item.patch?.runtime) {
      directives.push({
        target: mod.target,
        command: item.patch.runtimeEn || item.patch.runtime,
        commandCn: item.patch.runtime,
        priority: 'HIGH'
      });
    }

    // logic → 逻辑指令
    if (item.logic) {
      directives.push({
        target: `${mod.target}_LOGIC`,
        command: item.logicEn || item.logic,
        commandCn: item.logic,
        priority: 'HIGH'
      });
    }

    // patch.aesthetic → 美学指令（如有）
    if (item.patch?.aesthetic) {
      directives.push({
        target: `${mod.target}_AESTHETIC`,
        command: item.patch.aestheticEn || item.patch.aesthetic,
        commandCn: item.patch.aesthetic,
        priority: 'NORMAL'
      });
    }
  }

  // M4X/M5X directive compilation removed in v3.0

  // ====== SUR10X 皮层指令 (SUR4X removed in v3.1) ======
  const surItems: Array<{ target: string; id?: string }> = [
    { target: 'SUR10X_SYMBOLIC_SUTURE', id: input.sur10x },
  ];
  for (const sur of surItems) {
    if (!sur.id) continue;
    const item = lookupItem(sur.id);
    if (!item) continue;

    // logic → 叙事逻辑指令
    if (item.logic) {
      directives.push({
        target: sur.target,
        command: item.logicEn || item.logic,
        commandCn: item.logic,
        priority: 'HIGH'
      });
    }

    // patch.runtime → 运行时禁令
    if (item.patch?.runtime) {
      directives.push({
        target: `${sur.target}_RUNTIME`,
        command: item.patch.runtimeEn || item.patch.runtime,
        commandCn: item.patch.runtime,
        priority: 'HIGH'
      });
    }

    // patch.aesthetic → 感官质地
    if (item.patch?.aesthetic) {
      directives.push({
        target: `${sur.target}_AESTHETIC`,
        command: item.patch.aestheticEn || item.patch.aesthetic,
        commandCn: item.patch.aesthetic,
        priority: 'NORMAL'
      });
    }
  }

  // ====== SUR1-SUR10 皮层语义指令 ======
  // 这些不参与公式计算，但要告诉 AI "穿什么皮"
  const skinSlots: Array<{ target: string; id?: string; label: string }> = [
    { target: 'SUR1_GENRE', id: input.sur1, label: '叙事动力' },
    { target: 'SUR2_MOTIF', id: input.sur2, label: '世界模体' },
    { target: 'SUR3_SPACETIME', id: input.sur3, label: '时空场域' },
    { target: 'SUR4_SOCIETY', id: input.sur4, label: '社会形态' },
    { target: 'SUR5_EVERYTHING', id: input.sur5, label: '欲望锚点' },
    { target: 'SUR7_GENDER', id: input.sur7, label: '主体性别' },
    { target: 'SUR8_AGE', id: input.sur8, label: '主体年龄' },
    { target: 'SUR9_PROFESSION', id: input.sur9, label: '职业身份' },

    { target: 'SUR10_PHILOSOPHY', id: input.sur10, label: '哲学信念' },
  ];

  for (const slot of skinSlots) {
    if (!slot.id) continue;
    const item = lookupItem(slot.id);
    if (!item) continue;

    // def + core → 基础语义注入（NORMAL优先级）
    const semantic = [item.def, item.core].filter(Boolean).join(' | ');
    if (semantic) {
      directives.push({
        target: slot.target,
        command: [item.defEn, item.coreEn].filter(Boolean).join(' | ') || semantic,
        commandCn: semantic,
        priority: 'NORMAL'
      });
    }

    // logic → 叙事逻辑指令（HIGH优先级）
    if (item.logic) {
      directives.push({
        target: `${slot.target}_LOGIC`,
        command: item.logicEn || item.logic,
        commandCn: item.logic,
        priority: 'HIGH'
      });
    }

    // patch.runtime → 运行时禁令（HIGH优先级）
    if (item.patch?.runtime) {
      directives.push({
        target: `${slot.target}_RUNTIME`,
        command: item.patch.runtimeEn || item.patch.runtime,
        commandCn: item.patch.runtime,
        priority: 'HIGH'
      });
    }

    // patch.aesthetic → 美学质感（NORMAL优先级）
    if (item.patch?.aesthetic) {
      directives.push({
        target: `${slot.target}_AESTHETIC`,
        command: item.patch.aestheticEn || item.patch.aesthetic,
        commandCn: item.patch.aesthetic,
        priority: 'NORMAL'
      });
    }
  }

  // SUR6 空间场景（多值）
  if (input.sur6 && input.sur6.length > 0) {
    for (const locId of input.sur6) {
      const item = lookupItem(locId);
      if (!item) continue;
      const semantic = [item.def, item.core].filter(Boolean).join(' | ');
      if (semantic) {
        directives.push({
          target: 'SUR6_SCENE',
          command: [item.defEn, item.coreEn].filter(Boolean).join(' | ') || semantic,
          commandCn: semantic,
          priority: 'NORMAL'
        });
      }
    }
  }

  // ====== SV1/SV2 工程轴指令 ======
  const svItems: Array<{ target: string; id?: string }> = [
    { target: 'SV1_STRUCTURE', id: input.sv1 },
    { target: 'SV2_VOLUME', id: input.sv2 },
  ];
  for (const sv of svItems) {
    if (!sv.id) continue;
    const svItem = lookupItem(sv.id);
    if (!svItem) continue;

    // 基础语义指令
    directives.push({
      target: sv.target,
      command: [svItem.defEn, svItem.coreEn].filter(Boolean).join(' | ') || [svItem.def, svItem.core].filter(Boolean).join(' | '),
      commandCn: [svItem.def, svItem.core].filter(Boolean).join(' | '),
      priority: 'HIGH'
    });

    // 叙事运行机制指令
    if (svItem.patch?.mechanics) {
      directives.push({
        target: `${sv.target}_MECHANICS`,
        command: svItem.patch.mechanicsEn || svItem.patch.mechanics,
        commandCn: svItem.patch.mechanics,
        priority: 'HIGH'
      });
    }

    // 运行时红线指令
    if (svItem.patch?.runtime) {
      directives.push({
        target: `${sv.target}_RUNTIME`,
        command: svItem.patch.runtimeEn || svItem.patch.runtime,
        commandCn: svItem.patch.runtime,
        priority: 'CRITICAL'
      });
    }

    // 美学质感指令
    if (svItem.patch?.aesthetic) {
      directives.push({
        target: `${sv.target}_AESTHETIC`,
        command: svItem.patch.aestheticEn || svItem.patch.aesthetic,
        commandCn: svItem.patch.aesthetic,
        priority: 'NORMAL'
      });
    }
  }

  // ====== 世界法则指令 (World Law Protocol) ======
  if (input.worldLawGravity) {
    const worldLawMap: Record<number, { name: string; nameCn: string; cmd: string; cmdCn: string }> = {
      1: {
        name: 'REALISM', nameCn: '写实',
        cmd: 'ABSOLUTE PHYSICS LOCK. Gravity, entropy, biological limits are inviolable. NO miracles, NO supernatural. Death is physical and final.',
        cmdCn: '绝对物理锁死。重力、熵增、生物学极限不可逾越。严禁奇迹/超自然。死亡是物理性的绝对终结。'
      },
      2: {
        name: 'RATIONAL', nameCn: '合理',
        cmd: 'LOGICAL COMPLETION. Spectacles allowed but MUST have scientific/mechanical explanation. Big Other is tight logical grid. Exploit rules, never ignore them.',
        cmdCn: '逻辑补完。允许奇观但必须赋予科学/机械的合理解释。大他者表现为严密逻辑网格。可利用漏洞，不可无视规则。'
      },
      3: {
        name: 'SUTURE', nameCn: '缝合',
        cmd: 'MAGICAL REALISM. Reality is solid base, LOCAL supernatural sutures allowed as trauma symptoms. Normal and absurd coexist via parallax. Surreal carries massive cost.',
        cmdCn: '魔幻现实主义。现实为底板，局部允许缝合超现实能指（症状=创伤）。正常与荒诞共生。超现实部分伴随巨大代价。'
      },
      4: {
        name: 'SPECTACLE', nameCn: '奇观',
        cmd: 'HIGH-CONCEPT FANTASY. Supernatural protocols run openly. Magic/superpowers are daily life. BUT internal logic MUST be consistent. Rules can be absurd, execution is iron law.',
        cmdCn: '高概念幻想。超自然协议公开运行。但内部逻辑必须一致——规则可荒谬，执行必须是铁律。'
      },
      5: {
        name: 'RHAPSODY', nameCn: '狂想',
        cmd: 'ZERO-GRAVITY COLLAGE. ALL constraints cancelled. Different planes/eras/logics collide freely. Physics rewritten per frame. Pure desire laboratory.',
        cmdCn: '绝对无重力拼贴。取消所有恒定约束。不同位面/时代/逻辑自由碰撞。纯粹欲望试验场。'
      }
    };
    const wl = worldLawMap[input.worldLawGravity];
    if (wl) {
      directives.push({
        target: `WORLD_LAW_LV${input.worldLawGravity}`,
        command: `[${wl.name}] ${wl.cmd}`,
        commandCn: `[${wl.nameCn}] ${wl.cmdCn}`,
        priority: 'CRITICAL'
      });
    }
  }

  // ====== 世界熵指令 ======
  if (tension.worldEntropy >= 0.8) {
    directives.push({
      target: 'WORLD_ENTROPY',
      command: 'EXTREME WORLD COLLAPSE. Reality itself is unreliable narrator.',
      commandCn: '极端世界崩坏。现实本身不可信赖。环境描写必须包含现实破碎元素。',
      priority: 'CRITICAL'
    });
  }

  return directives;
}

// ============================================
// 7. Prompt 编译器
// ============================================

function compilePayload(
  input: MistEngineInput,
  tension: TensionReport,
  redlines: RedlineViolation[],
  price: PriceVerdict,
  directives: ForceDirective[],
  m0Topo: M0TopologyProfile | undefined
): string {
  const criticals = directives.filter(d => d.priority === 'CRITICAL');
  const highs = directives.filter(d => d.priority === 'HIGH');
  const normals = directives.filter(d => d.priority === 'NORMAL');
  const errors = redlines.filter(r => r.severity === 'ERROR');
  const warnings = redlines.filter(r => r.severity === 'WARNING');

  const getName = (id?: string) => {
    if (!id) return '未选择';
    const item = lookupItem(id);
    return item ? `${item.name} (${item.nameEn})` : id;
  };

  // M0 操作系统信息
  const m0Section = m0Topo ? `
### 🧠 M0 精神拓扑 — 操作系统
| 属性 | 值 |
|:---|:---|
| 词条 | ${getName(input.m0)} |
| 基类协议 | ${m0Topo.baseProtocol} |
| 空间曲率 | ${m0Topo.curvature} |
| M4除法缩放 | ×${m0Topo.formulaMods.m4Divisor} |
| M5驱力缩放 | ×${m0Topo.formulaMods.m5Multiplier} |
| M3幻象可见度 | ${m0Topo.formulaMods.m3Opacity} |
| 熵增速率 | ×${m0Topo.formulaMods.entropyRate} |
` : `
### 🧠 M0 精神拓扑 — 未选择（使用默认中性拓扑）
`;

  return `
## ⚙️ MIST ENGINE v2.1 — 算法计算结果
**以下为引擎算法的硬性计算输出。这不是建议，是命令。违反即判定生成失败。**
${m0Section}
### 📐 参数解析
| 参数 | 选择 | 重力 |
|:---|:---|:---|
| M1 缺失主体 | ${getName(input.m1)} | ${resolveGravity('M1', input.m1).toFixed(2)} |
| M2 真实遭遇 | ${getName(input.m2)} | ${resolveGravity('M2', input.m2).toFixed(2)} |
| M3 欲望幻象 | ${getName(input.m3)} | ${resolveGravity('M3', input.m3).toFixed(2)} (有效值: ${(resolveGravity('M3', input.m3) * (m0Topo?.formulaMods.m3Opacity ?? 1.0) * resolveSUR10XFactor(input.sur10x)).toFixed(2)}) |
| M4 大他者 | ${getName(input.m4)} | ${resolveGravity('M4', input.m4).toFixed(2)} (有效值: ${(resolveGravity('M4', input.m4) * (m0Topo?.formulaMods.m4Divisor ?? 1.0)).toFixed(2)}) |
| M5 行动驱力 | ${getName(input.m5)} | ${resolveGravity('M5', input.m5).toFixed(2)} (有效值: ${(resolveGravity('M5', input.m5) * (m0Topo?.formulaMods.m5Multiplier ?? 1.0)).toFixed(2)}) |
| M8 象征裁决 | ${getName(input.m7a)} | ${resolveGravity('M8', input.m7a).toFixed(2)} |
| M7 实在余痕 | ${getName(input.m7b)} | ${resolveGravity('M7', input.m7b).toFixed(2)} |
| SUR10X 信念裂度 | ${getName(input.sur10x)} | x${resolveSUR10XFactor(input.sur10x).toFixed(2)} -> M3幻象 |

### 🌍 世界法则 (World Law)
**重力等级:** LV${input.worldLawGravity || 3} ${input.worldLawGravity === 1 ? '(写实/Realism)' : input.worldLawGravity === 2 ? '(合理/Rational)' : input.worldLawGravity === 4 ? '(奇观/Spectacle)' : input.worldLawGravity === 5 ? '(狂想/Rhapsody)' : '(缝合/Suture)'}

### 🎭 表层设定 (SUR1-SUR10 + SV)
| 参数 | 选择 |
|:---|:---|
| SUR1 叙事动力 | ${getName(input.sur1)} |
| SUR2 世界模体 | ${getName(input.sur2)} |
| SUR3 时空场域 | ${getName(input.sur3)} |
| SUR4 社会形态 | ${getName(input.sur4)} |
| SUR5 欲望锚点 | ${getName(input.sur5)} |
| SUR6 空间场景 | ${input.sur6 && input.sur6.length > 0 ? input.sur6.map(id => getName(id)).join(' + ') : '未选择'} |
| SUR7 主体性别 | ${getName(input.sur7)} |
| SUR8 主体年龄 | ${getName(input.sur8)} |
| SUR9 职业身份 | ${getName(input.sur9)} |

| SUR10 哲学信念 | ${getName(input.sur10)} |
| SV1 叙事结构 | ${getName(input.sv1)} |
| SV2 故事体量 | ${getName(input.sv2)} |

### 📊 张力报告
- **分子势能** (M1+M2+M3×opacity×sur10x): ${tension.numerator.toFixed(2)}
- **分母压强** (M4×m4Div): ${tension.denominator.toFixed(2)}
- **张力比**: ${tension.ratio.toFixed(2)}
- **最终张力**: ${tension.finalTension.toFixed(2)}
- **世界熵值** (entropyRate): ${tension.worldEntropy.toFixed(2)}
- **叙事走向判定**: \`[${tension.narrativeArc}]\`

### 🚨 CRITICAL — 强制执行（违反即判定失败）
${criticals.map((d, i) => `${i + 1}. **[${d.target}]** ${d.commandCn}`).join('\n')}

${highs.length > 0 ? `### ⚠️ HIGH — 高优先级指令
${highs.map((d, i) => `${i + 1}. [${d.target}] ${d.commandCn}`).join('\n')}` : ''}

${normals.length > 0 ? `### 📝 NORMAL — 美学建议
${normals.map((d, i) => `${i + 1}. [${d.target}] ${d.commandCn}`).join('\n')}` : ''}

${!price.isBalanced ? `### ❌ 代价失衡
${price.suggestionCn}` : `### ✅ 代价配平通过 (M6=${price.actualLevel} ≥ 要求=${price.requiredLevel})`}

${errors.length > 0 ? `### 🔴 红线违规
${errors.map(r => `- ${r.messageCn}`).join('\n')}` : ''}

${warnings.length > 0 ? `### 🟡 警告
${warnings.map(r => `- ${r.messageCn}`).join('\n')}` : ''}
`;
}

// ============================================
// 8. 主入口
// ============================================

export function runMistEngine(fieldState: NarrativeFieldState, worldLaw?: WorldLawConfig): MistEngineOutput {
  const input = extractEngineInput(fieldState);

  // 注入世界法则
  if (worldLaw) {
    input.worldLawGravity = worldLaw.gravity as 1 | 2 | 3 | 4 | 5;
  }
  
  // 解析 M0 拓扑 — 确定"操作系统"
  const m0Topo = resolveM0Topology(input.m0);
  
  // 公式计算（M0 参与修饰）
  const tension = calculateTension(input, m0Topo);
  
  // 红线检测（含 M0 专属红线）
  const redlines = detectRedlines(input, m0Topo);
  
  // 代价配平
  const priceVerdict = verifyPriceBalance(input, tension, fieldState);
  
  // 指令编译（M0 作为最高优先级覆写）
  const directives = compileDirectives(input, tension, m0Topo);
  
  // Prompt 编译
  const compiledPayload = compilePayload(input, tension, redlines, priceVerdict, directives, m0Topo);

  return { tension, redlines, priceVerdict, directives, compiledPayload };
}

// Re-export resolveGravity for external use
function resolveGravityExport(moduleKey: string, itemId?: string): number {
  return resolveGravity(moduleKey, itemId);
}
export { resolveGravityExport as resolveGravity };
