import { NarrativeFieldState } from '../../types';

export const DEFAULT_SV1_STRUCTURE_ID = 'STANDARD_CAUSAL_ARC';
export const DEFAULT_SV1_STRUCTURE_NAME = '标准因果弧';
export const DEFAULT_SV2_VOLUME_ID = 'vol_standard_5m';
export const DEFAULT_SV2_VOLUME_NAME = '5分钟 · 标准短故事容量';

export const SV_DEFAULT_BLOCKS = ['skin_structure', 'skin_volume'] as const;

const isEmptySelection = (values: unknown): boolean => (
  !Array.isArray(values) || values.filter(Boolean).length === 0
);

export const withDefaultSvSelections = (
  fieldState: NarrativeFieldState | null | undefined
): NarrativeFieldState => {
  const next: NarrativeFieldState = { ...(fieldState || {}) };

  if (isEmptySelection(next.skin_structure)) {
    next.skin_structure = [DEFAULT_SV1_STRUCTURE_NAME];
  }

  if (isEmptySelection(next.skin_volume)) {
    next.skin_volume = [DEFAULT_SV2_VOLUME_NAME];
  }

  return next;
};
