/**
 * 迷雾引擎 v2 — 强类型定义
 * Mist Engine v2 — Core Type System
 * 纯增量，不修改 types.ts 中的任何现有接口。
 */

// ============================================
// 1. 词条增强属性
// ============================================

export interface MistItemPhysics {
  gravity: number;
  priceFloor: number;
  exclusions?: string[];
  directive?: string;
}

// ============================================
// 2. 引擎计算输入（已移至 mist_calculator.ts 中定义）
// ============================================

// ============================================
// 3. 引擎计算输出
// ============================================

export interface TensionReport {
  numerator: number;
  denominator: number;
  ratio: number;
  finalTension: number;
  worldEntropy: number;
  narrativeArc: 'BREAKTHROUGH' | 'DEADLOCK' | 'TRAGEDY' | 'ANNIHILATION';
}

export interface RedlineViolation {
  code: string;
  severity: 'ERROR' | 'WARNING';
  message: string;
  messageCn: string;
}

export interface PriceVerdict {
  requiredLevel: number;
  actualLevel: number;
  isBalanced: boolean;
  suggestion?: string;
  suggestionCn?: string;
}

export interface ForceDirective {
  target: string;
  command: string;
  commandCn: string;
  priority: 'CRITICAL' | 'HIGH' | 'NORMAL';
}

export interface MistEngineOutput {
  tension: TensionReport;
  redlines: RedlineViolation[];
  priceVerdict: PriceVerdict;
  directives: ForceDirective[];
  compiledPayload: string;
}
