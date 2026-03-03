
import { AestheticPreset } from '../types';
import { MASTER_PRESETS_REALISM } from './master_presets_realism';
import { MASTER_PRESETS_STYLIZED } from './master_presets_stylized';

export { MASTER_PRESETS_REALISM } from './master_presets_realism';
export { MASTER_PRESETS_STYLIZED } from './master_presets_stylized';

export const MASTER_PRESETS: AestheticPreset[] = [
    ...MASTER_PRESETS_REALISM,
    ...MASTER_PRESETS_STYLIZED
];
