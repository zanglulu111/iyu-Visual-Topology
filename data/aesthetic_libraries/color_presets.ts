
import { LibraryItemDef } from '../../types';
import { MASTER_PRESETS } from '../master_presets';

export interface ColorPreset extends LibraryItemDef {
    colors: string[];
}

// 核心逻辑：直接映射 60 组大师预设，提取其颜色信息作为色板库
// This ensures the "Classic Color Palette Library" is perfectly synced with the "Master Presets"
export const AES_COLOR_PRESETS: ColorPreset[] = MASTER_PRESETS.map(preset => ({
    id: `cp_${preset.id}`, // Add prefix to avoid ID collision in keys if necessary
    name: preset.name,
    nameEn: preset.nameEn,
    group: preset.group || "大师配色 (Master Palette)", // Inherit the group from Master Presets
    def: preset.def,
    // Display the hex codes in the 'core' field for quick reference in the UI
    core: `Palette: ${preset.colors.slice(0, 4).join(', ')}...`, 
    colors: preset.colors
}));
