import { NarrativeFieldState, PromptFocusState } from '../types';

export const MAX_FOCUS_TERMS = 3;
export const MAX_M_FOCUS_UNITS = 2;
export const MAX_SURFACE_FOCUS_UNITS = 2;

const FOCUSABLE_BLOCK_IDS = new Set([
  'engine_m0',
  'engine_m1',
  'engine_m2',
  'engine_m3',
  'engine_m4',
  'engine_m5',
  'engine_m6',
  'engine_m7a',
  'engine_m7b',
  'skin_genre',
  'skin_era',
  'skin_society',
  'skin_everything',
  'skin_location',
  'skin_profession',
  'skin_ideology',
  'sur10x',
  'skin_ending',
]);

export const isFocusableBlock = (blockId?: string): boolean =>
  Boolean(blockId && FOCUSABLE_BLOCK_IDS.has(blockId));

export const isLegacyBlockFocusKey = (key: string): boolean =>
  /^(engine|skin|aes|comm|exp|trailer)_/.test(key) || key === 'sur10x';

export const getAllSelectedTags = (fieldState: NarrativeFieldState): string[] =>
  Object.values(fieldState || {}).flatMap(tags => Array.isArray(tags) ? tags : (tags ? [String(tags)] : []));

const FOCUS_UNIT_GROUPS: Array<{ unit: string; blocks: string[] }> = [];

const M_FOCUS_BLOCK_IDS = new Set([
  'engine_m0',
  'engine_m1',
  'engine_m2',
  'engine_m3',
  'engine_m4',
  'engine_m5',
  'engine_m6',
  'engine_m7a',
  'engine_m7b',
]);

export type FocusUnitCategory = 'm' | 'surface';

export const getFocusUnitCategory = (blockId?: string): FocusUnitCategory =>
  blockId && M_FOCUS_BLOCK_IDS.has(blockId) ? 'm' : 'surface';

export const getFocusUnitKey = (blockId: string | undefined, tag: string): string => {
  const group = FOCUS_UNIT_GROUPS.find(item => blockId && item.blocks.includes(blockId));
  return group ? group.unit : tag;
};

export const getSelectedFocusUnitMap = (fieldState: NarrativeFieldState): Record<string, string> =>
  Object.entries(fieldState || {}).reduce<Record<string, string>>((acc, [blockId, rawTags]) => {
    const tags = Array.isArray(rawTags) ? rawTags : (rawTags ? [String(rawTags)] : []);
    tags.forEach(tag => {
      acc[tag] = getFocusUnitKey(blockId, tag);
    });
    return acc;
  }, {});

export const getSelectedFocusBlockMap = (fieldState: NarrativeFieldState): Record<string, string> =>
  Object.entries(fieldState || {}).reduce<Record<string, string>>((acc, [blockId, rawTags]) => {
    const tags = Array.isArray(rawTags) ? rawTags : (rawTags ? [String(rawTags)] : []);
    tags.forEach(tag => {
      acc[tag] = blockId;
    });
    return acc;
  }, {});

export const getActiveFocusTermKeys = (
  focusState?: PromptFocusState,
  selectedTags?: string[],
  focusBlockMap: Record<string, string> = {}
): string[] => {
  const selectedSet = selectedTags ? new Set(selectedTags) : null;
  return Object.keys(focusState || {}).filter(key =>
    Boolean(focusState?.[key])
    && !isLegacyBlockFocusKey(key)
    && (!focusBlockMap[key] || isFocusableBlock(focusBlockMap[key]))
    && (!selectedSet || selectedSet.has(key))
  );
};

export const getActiveFocusUnitKeys = (
  focusState?: PromptFocusState,
  selectedTags?: string[],
  focusUnitMap: Record<string, string> = {},
  focusBlockMap: Record<string, string> = {}
): string[] => {
  const units = new Set<string>();
  getActiveFocusTermKeys(focusState, selectedTags, focusBlockMap).forEach(key => {
    units.add(focusUnitMap[key] || key);
  });
  return Array.from(units);
};

export const getActiveFocusUnitCategories = (
  focusState?: PromptFocusState,
  selectedTags?: string[],
  focusUnitMap: Record<string, string> = {},
  focusBlockMap: Record<string, string> = {}
): Record<string, FocusUnitCategory> => {
  const selectedSet = selectedTags ? new Set(selectedTags) : null;
  return Object.keys(focusState || {}).reduce<Record<string, FocusUnitCategory>>((acc, key) => {
    const blockId = focusBlockMap[key];
    if (
      !focusState?.[key]
      || isLegacyBlockFocusKey(key)
      || (selectedSet && !selectedSet.has(key))
      || (blockId && !isFocusableBlock(blockId))
    ) return acc;
    const unit = focusUnitMap[key] || key;
    acc[unit] = getFocusUnitCategory(blockId);
    return acc;
  }, {});
};

export type FocusLimitReason = 'total' | 'm' | 'surface';

export const getFocusLimitReason = (
  focusState: PromptFocusState | undefined,
  blockId: string,
  tag: string,
  selectedTagsForLimit?: string[],
  focusUnitMap: Record<string, string> = {},
  focusBlockMap: Record<string, string> = {}
): FocusLimitReason | null => {
  if (!isFocusableBlock(blockId) || !tag || focusState?.[tag]) return null;
  const nextUnit = focusUnitMap[tag] || getFocusUnitKey(blockId, tag);
  const activeUnits = getActiveFocusUnitKeys(focusState, selectedTagsForLimit, focusUnitMap, focusBlockMap)
    .filter(unit => unit !== nextUnit);
  if (activeUnits.length >= MAX_FOCUS_TERMS) return 'total';

  const activeCategories = getActiveFocusUnitCategories(focusState, selectedTagsForLimit, focusUnitMap, focusBlockMap);
  const nextCategory = getFocusUnitCategory(blockId);
  const activeCategoryCount = activeUnits.filter(unit => activeCategories[unit] === nextCategory).length;
  const categoryLimit = nextCategory === 'm' ? MAX_M_FOCUS_UNITS : MAX_SURFACE_FOCUS_UNITS;
  if (activeCategoryCount >= categoryLimit) return nextCategory;

  return null;
};

export const buildVisibleFocusPatch = (
  focusState: PromptFocusState | undefined,
  selectedTags: string[],
  focusBlockMap: Record<string, string> = {}
): PromptFocusState => {
  const selectedSet = new Set(selectedTags);
  return Object.keys(focusState || {}).reduce<PromptFocusState>((acc, key) => {
    const blockId = focusBlockMap[key];
    if (
      focusState?.[key]
      && !isLegacyBlockFocusKey(key)
      && (!selectedSet.has(key) || (blockId && !isFocusableBlock(blockId)))
    ) {
      acc[key] = false;
    }
    return acc;
  }, {});
};

export const getSelectedTags = (fieldState: NarrativeFieldState, blockId: string): string[] => {
  const raw = fieldState[blockId];
  return Array.isArray(raw) ? raw : (raw ? [String(raw)] : []);
};

export const buildTermFocusPatch = (
  focusState: PromptFocusState | undefined,
  blockId: string,
  _slotTags: string[],
  tag: string,
  nextFocused: boolean,
  selectedTagsForLimit?: string[],
  focusUnitMap: Record<string, string> = {},
  focusBlockMap: Record<string, string> = {}
): PromptFocusState | null => {
  if (!isFocusableBlock(blockId) || !tag) return null;

  if (!nextFocused) {
    return { [tag]: false, [blockId]: false };
  }

  const currentFocus = focusState || {};
  const nextUnit = focusUnitMap[tag] || getFocusUnitKey(blockId, tag);
  const activeUnits = getActiveFocusUnitKeys(currentFocus, selectedTagsForLimit, focusUnitMap, focusBlockMap)
    .filter(unit => unit !== nextUnit);
  const activeCount = activeUnits.length;
  const activeCategories = getActiveFocusUnitCategories(currentFocus, selectedTagsForLimit, focusUnitMap, focusBlockMap);
  const nextCategory = getFocusUnitCategory(blockId);
  const activeCategoryCount = activeUnits.filter(unit => activeCategories[unit] === nextCategory).length;
  const categoryLimit = nextCategory === 'm' ? MAX_M_FOCUS_UNITS : MAX_SURFACE_FOCUS_UNITS;

  if (!currentFocus[tag] && activeCount >= MAX_FOCUS_TERMS) return null;
  if (!currentFocus[tag] && activeCategoryCount >= categoryLimit) return null;
  return { [blockId]: false, [tag]: true };
};

export const clearFocusForTagsPatch = (blockId: string, tags: string[]): PromptFocusState =>
  tags.reduce<PromptFocusState>((acc, tag) => {
    acc[tag] = false;
    return acc;
  }, { [blockId]: false });
