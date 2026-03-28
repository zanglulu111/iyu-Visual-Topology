import { LibraryItemDef } from '../../../types';
import { ENGINE_M0_NEUROSIS_HYSTERIA } from './a1_hysteria';
import { ENGINE_M0_NEUROSIS_OBSESSION } from './a2_obsession';
import { ENGINE_M0_NEUROSIS_PHOBIA } from './a3_phobia';
import { ENGINE_M0_FETISHISM } from './b1_fetishism';
import { ENGINE_M0_SADISM_MASOCHISM } from './b2_b3_sadism_masochism';
import { ENGINE_M0_VOYEURISM_EXHIBITIONISM } from './b4_b5_voyeurism_exhibitionism';
import { ENGINE_M0_PARANOIA } from './c1_paranoia';
import { ENGINE_M0_SCHIZOPHRENIA } from './c2_schizophrenia';
import { ENGINE_M0_MELANCHOLIA } from './c3_melancholia';
import { ENGINE_M0_ORDINARY_PSYCHOSIS } from './c4_ordinary_psychosis';
import { ENGINE_M0_AUTISM } from './d1_autism';

/**
 * M0 核心叙事系统全量辞典 (Engine M0 Lexicon)
 * 整合 11 种核心拓扑结构类型。
 * 保持导出名 ENGINE_M0_OS 以维持向下兼容。
 */
export const ENGINE_M0_OS: LibraryItemDef[] = [
  ...ENGINE_M0_NEUROSIS_HYSTERIA,            // A1
  ...ENGINE_M0_NEUROSIS_OBSESSION,           // A2
  ...ENGINE_M0_NEUROSIS_PHOBIA,              // A3
  ...ENGINE_M0_FETISHISM,                    // B1
  ...ENGINE_M0_SADISM_MASOCHISM,             // B2, B3
  ...ENGINE_M0_VOYEURISM_EXHIBITIONISM,      // B4, B5
  ...ENGINE_M0_PARANOIA,                     // C1
  ...ENGINE_M0_SCHIZOPHRENIA,                // C2
  ...ENGINE_M0_MELANCHOLIA,                  // C3
  ...ENGINE_M0_ORDINARY_PSYCHOSIS,           // C4
  ...ENGINE_M0_AUTISM                        // D1
];

// 同时导出 ENGINE_M0_LEXICON 别名供语义调用
export const ENGINE_M0_LEXICON = ENGINE_M0_OS;
