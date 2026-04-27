import { LibraryCategoryDef } from '../../../types';
import { SUR5_POWER_STATUS } from './01_sur5_power_status';
import { SUR5_WEALTH_TREASURES } from './02_sur5_wealth_treasures';
import { SUR5_LOVE_BONDS } from './03_sur5_love_bonds';
import { SUR5_KNOWLEDGE_TRUTH } from './04_sur5_knowledge_truth';
import { SUR5_SURVIVAL_SANCTUARY } from './05_sur5_survival_sanctuary';
import { SUR5_HONOR_VALIDATION } from './06_sur5_honor_validation';
import { SUR5_VENGEANCE_RUIN } from './07_sur5_vengeance_ruin';
import { SUR5_NATURE_UTOPIA } from './08_sur5_nature_utopia';
import { SUR5_MUNDANE_OBSESSIONS } from './09_sur5_mundane_obsessions';
import { SUR5_LIBERATION_BREAKING } from './10_sur5_liberation_breaking';
import { SUR5_DIVINITY_TRANSCENDENCE } from './11_sur5_divinity_transcendence';
import { SUR5_INEFFABLE_VOID } from './12_sur5_ineffable_void';

/**
 * SUR-OBJ 对象预设库。
 *
 * `SUR5_DATA` 是旧槽位/旧导出兼容名。当前语义只允许描述可被追寻、
 * 争夺、交换或保护的表层对象，不承担动机解释、代价设计或终端收场。
 */
export const SUR5_DATA: LibraryCategoryDef[] = [
  SUR5_POWER_STATUS,
  SUR5_WEALTH_TREASURES,
  SUR5_LOVE_BONDS,
  SUR5_KNOWLEDGE_TRUTH,
  SUR5_SURVIVAL_SANCTUARY,
  SUR5_HONOR_VALIDATION,
  SUR5_VENGEANCE_RUIN,
  SUR5_NATURE_UTOPIA,
  SUR5_MUNDANE_OBSESSIONS,
  SUR5_LIBERATION_BREAKING,
  SUR5_DIVINITY_TRANSCENDENCE,
  SUR5_INEFFABLE_VOID
];

export const SUR_OBJECT_DATA: LibraryCategoryDef[] = SUR5_DATA;

export default SUR_OBJECT_DATA;
