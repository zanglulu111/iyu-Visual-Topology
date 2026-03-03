
import { DIALOGUE_STYLES } from './suture_dialogue';
import { MONOLOGUE_STYLES } from './suture_monologue';
import { VOICEOVER_STYLES } from './suture_voiceover';
import { SUTURE_VISUAL_STYLES } from './suture_visual_styles';

export { DIALOGUE_STYLES, MONOLOGUE_STYLES, VOICEOVER_STYLES };

export interface SutureStyleItem {
  id: string;
  name: string;
  group?: string;
  instruction: string;
  core?: string;
}

// =============================================================================
// 2. 视觉风格 (VISUAL STYLE) - 出口
// =============================================================================
export const VISUAL_STYLES = SUTURE_VISUAL_STYLES;

// Re-export simplified technical settings
export const ACTION_PACING = [
  { id: 'SLOW', name: '慢 (Slow Burn)' },
  { id: 'NORMAL', name: '中 (Standard)' },
  { id: 'FAST', name: '快 (Rapid Fire)' },
  { id: 'CHAOTIC', name: '混乱 (Chaotic)' },
];

export const SHOT_DENSITY = [
  { id: 'SHOTS_4', name: '4个关键帧 (4 Keyframes)' },
  { id: 'SHOTS_9', name: '9个关键帧 (9 Keyframes)' },
  { id: 'SHOTS_12', name: '12个关键帧 (12 Keyframes)' },
  { id: 'SHOTS_16', name: '16个关键帧 (16 Keyframes)' },
  { id: 'SHOTS_25', name: '25个关键帧 (25 Keyframes)' },
];
