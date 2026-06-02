
import { NarrativeFieldState, DriverType, SubjectType, NarrativeBlockDef, LibraryCategoryDef, WorldLawConfig, AestheticMode, PromptFocusState, MAxisMixerState, MAxisMixerSlot, MAxisMixerLevel, M7BResidueIntensity } from '../types';
import {
  NARRATIVE_ENGINE_BLOCKS,
  NARRATIVE_ENGINE_LIBRARY,
  COMMERCIAL_ENGINE_BLOCKS,
  COMMERCIAL_ENGINE_LIBRARY,
  EXPERIMENTAL_ENGINE_BLOCKS,
  EXPERIMENTAL_ENGINE_LIBRARY,
  AESTHETIC_ENGINE_BLOCKS,
  AESTHETIC_ENGINE_LIBRARY,
  CONCEPT_ENGINE_BLOCKS,
  CONCEPT_ENGINE_LIBRARY,
  TRAILER_ENGINE_BLOCKS,
  TRAILER_ENGINE_LIBRARY,
  COMM_SKIN_BLOCKS,
  COMM_SKIN_LIBRARY,
  EXPERIMENTAL_SKIN_BLOCKS,
  EXPERIMENTAL_SKIN_LIBRARY,
  TRAILER_SKIN_BLOCKS,
  TRAILER_SKIN_LIBRARY,
  BLOCK_LIMITS,
  RANDOM_RANGES,
  SINGLE_RANDOM_RANGES,
  SURFACE_WEIGHT_CONFIG,
  AES_COLOR_PRESETS,
  getRandomSur3CoordinatePreset,
  GENRE_CATEGORIES,
  WORLD_MOTIF_CATEGORIES,
  ALL_SKIN_BLOCKS,
  SKIN_LIBRARY,
  MASTER_PRESETS,
  MASTER_PRESETS_REALISM,
  MASTER_PRESETS_STYLIZED
} from '../constants';
import { WORLD_LAW_LEVEL_OPTIONS, patchWorldLawConfig } from './worldLaw';
import { withDefaultSvSelections } from '../data/engine_sv/defaults';
import { getFocusUnitKey, isFocusableBlock } from '../utils/focusTerms';
import { SUR3_ERAS, SUR3_SPACE_ANCHORS } from '../data/engine_surface/SUR3';
import type { Sur3EraId } from '../data/engine_surface/SUR3';
import type { Sur6SpaceContainerItem } from '../data/engine_surface/SUR6';

// Constants for Aesthetic Mode Logic
export const HUMAN_BLOCKS = [
    'aes_age', 'aes_gender', 'aes_body_type', 'aes_ethnicity', 'aes_occupation', 'aes_persona',
    'aes_hair_color', 'aes_hair_style_f', 'aes_hair_style_m', 'aes_eye_color', 'aes_eye_shape', 'aes_eye_fx', 'aes_face_features', 'aes_expression', 'aes_body_features', 'aes_skin_texture',
    // Legacy look/prop blocks are intentionally omitted from the active aesthetic schema.
    'aes_action_static', 'aes_action_dynamic', 'aes_action_complex'
];
export const CREATURE_BLOCKS = ['aes_creature_size', 'aes_creature_class', 'aes_creature_element', 'aes_creature_head', 'aes_creature_body', 'aes_creature_mood', 'aes_creature_action', 'aes_creature_texture'];
export const OBJECT_BLOCKS: string[] = [];

export const AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY: Record<string, string> = {
    'aes_director_style': 'STYLE', 'aes_photo_style': 'STYLE', 'aes_art_style': 'STYLE',
    'aes_anim_director': 'STYLE', 'aes_art_movement': 'STYLE', 'aes_poster_style': 'STYLE', 'aes_color_palette': 'STYLE',
    'aes_palette_preset': 'PRESETS',
    'aes_image_focus': 'L1.2', 'aes_visual_balance': 'L1.2', 'aes_shot_size': 'L1.2', 'aes_angle': 'L1.2', 'aes_focal_length': 'L1.2', 'aes_depth': 'L1.2', 'aes_shutter': 'L1.2', 'aes_lens_fx': 'L1.2', 'aes_perspective': 'L1.2',
    'aes_camera_system': 'L1.1', 'aes_lens_series': 'L1.1', 'aes_optical_format': 'L1.1', 'aes_texture_render': 'L1.1', 'aes_physical_grain': 'L1.1', 'aes_base_tone': 'L1.1', 'aes_color_science': 'L1.1',
    'aes_art_medium': 'L1.1', 'aes_line_quality': 'L1.1', 'aes_canvas_texture': 'L1.1',
    'aes_scene_real': 'STAGE', 'aes_scene_abstract': 'STAGE', 'aes_scene_surreal': 'STAGE', 'skin_era': 'STAGE', 'aes_atmosphere': 'STAGE', 'aes_particles': 'STAGE',
    'aes_l3_custom': 'STAGE', // ADDED: Map L3 Custom text input to STAGE lock
    'aes_l2_custom': 'SUBJECT', // ADDED: Map L2 Custom text input to SUBJECT lock
    'aes_light_mood': 'VIBE', 'aes_light_type': 'VIBE', 'aes_light_direction': 'VIBE', 'aes_light_shape': 'VIBE',
    'aes_render': 'RENDER', 'aes_render_real': 'RENDER', 'aes_render_art': 'RENDER'
};

const getLib = (blockId: string) => {
    let libId = `${blockId}_lib`;
    let cat = AESTHETIC_ENGINE_LIBRARY.find(c => c.id === libId);
    if (!cat) cat = SKIN_LIBRARY.find(c => c.id === libId);
    return cat?.items || [];
};

export type RandomCountMode = 'summary' | 'single';

export const getVisibleLockedTags = (
    fieldState: NarrativeFieldState,
    lockedTags: Record<string, string[]>,
    blockId: string
): string[] => {
    const selected = new Set(fieldState[blockId] || []);
    return (lockedTags[blockId] || []).filter(tag => selected.has(tag));
};

export const getRandomCount = (blockId: string, mode: RandomCountMode = 'summary'): number => {
    const range = mode === 'single' ? (SINGLE_RANDOM_RANGES[blockId] || RANDOM_RANGES[blockId]) : RANDOM_RANGES[blockId];
    if (!range) return 1;
    const [min, max] = range;
    if (min === max) return min;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const pickRandomWithLocks = (
    currentTags: string[],
    lockedTagNames: string[],
    libItems: any[],
    count: number
): string[] => {
    if (!libItems || libItems.length === 0) return [];
    const keptTags = currentTags.filter(t => lockedTagNames.includes(t));
    if (keptTags.length >= count) return keptTags;

    const needed = Math.max(0, count - keptTags.length);
    const available = libItems.filter(i => !keptTags.includes(i.name));
    const shuffled = [...available].sort(() => 0.5 - Math.random());
    return [...keptTags, ...shuffled.slice(0, Math.min(needed, shuffled.length)).map(i => i.name)];
};

const pickUniformItems = <T,>(items: T[], count: number): T[] => {
    const available = [...items];
    const selected: T[] = [];
    for (let i = 0; i < count; i++) {
        if (available.length === 0) break;
        const idx = Math.floor(Math.random() * available.length);
        selected.push(available[idx]);
        available.splice(idx, 1);
    }
    return selected;
};

const pickWeightedItems = <T,>(items: T[], count: number, getWeight: (item: T) => number): T[] => {
    const available = [...items];
    const selected: T[] = [];
    for (let i = 0; i < count; i++) {
        if (available.length === 0) break;
        const weights = available.map(item => Math.max(0.05, getWeight(item)));
        const total = weights.reduce((sum, weight) => sum + weight, 0);
        let roll = Math.random() * total;
        let pickedIndex = 0;
        for (let idx = 0; idx < weights.length; idx++) {
            roll -= weights[idx];
            if (roll <= 0) {
                pickedIndex = idx;
                break;
            }
        }
        selected.push(available[pickedIndex]);
        available.splice(pickedIndex, 1);
    }
    return selected;
};

const getSur3EraIdFromTimeAnchor = (value: string): Sur3EraId | null => {
    const trimmed = value.trim();
    if (!trimmed) return null;

    const normalized = trimmed.replace(/\s+/g, '').replace(/[_-]+/g, '').replace(/年$/, '').toLowerCase();
    const matchedEra = SUR3_ERAS.find(era =>
        [era.id, era.name, era.nameEn].some(label =>
            label.replace(/\s+/g, '').replace(/[_-]+/g, '').replace(/年$/, '').toLowerCase() === normalized
        )
    );
    if (matchedEra) return matchedEra.id;

    if (/^-?\d+$/.test(trimmed)) {
        const year = Number(trimmed);
        return SUR3_ERAS.find(era =>
            (era.yearRanges || []).some(([start, end]) => year >= start && year <= end)
        )?.id || null;
    }

    return null;
};

const getFallbackEraGroupFromArchetype = (archetype: Archetype): Sur3EraId[] => {
    if (archetype === 'ANCIENT') return ['primitive', 'mythic', 'slave', 'feudal'];
    if (archetype === 'FUTURE') return ['near_future', 'future'];
    return ['modern', 'contemporary'];
};

const getSelectedSur3Anchor = (fieldState: NarrativeFieldState) => {
    const value = fieldState['skin_country_exact']?.[0];
    if (!value) return null;
    return SUR3_SPACE_ANCHORS.find(anchor => anchor.name === value || anchor.nameEn === value || anchor.id === value) || null;
};

export const scoreSur6ItemForState = (
    item: any,
    fieldState: NarrativeFieldState,
    archetype: Archetype = getArchetypeFromEra(fieldState['skin_era']?.[0] || '')
): number => {
    const sur6Item = item as Partial<Sur6SpaceContainerItem>;
    if (!sur6Item.spaceClass) return 1;

    let score = sur6Item.weight || 1;
    const selectedEra = getSur3EraIdFromTimeAnchor(fieldState['skin_year_exact']?.[0] || '');

    if (selectedEra) {
        if (sur6Item.preferredEras?.includes(selectedEra)) score += 3.2;
        else if (sur6Item.allowedEras?.includes(selectedEra)) score += 1.2;
        else score -= 2.6;
    } else {
        const fallbackEras = getFallbackEraGroupFromArchetype(archetype);
        const preferredMatch = fallbackEras.some(era => sur6Item.preferredEras?.includes(era));
        const allowedMatch = fallbackEras.some(era => sur6Item.allowedEras?.includes(era));
        if (preferredMatch) score += 1.4;
        else if (allowedMatch) score += 0.4;
        else score -= 0.8;
    }

    const selectedAnchor = getSelectedSur3Anchor(fieldState);
    if (selectedAnchor && sur6Item.compatibleDomains?.length) {
        if (sur6Item.compatibleDomains.includes(selectedAnchor.domain)) score += 2.2;
        else score -= 1.2;
    }

    if (sur6Item.dissonance === 'safe') score += 0.25;
    if (sur6Item.dissonance === 'charged') score -= 0.15;
    if (sur6Item.dissonance === 'wild') score -= 0.55;

    return Math.max(0.05, score);
};

export const pickRandomItemsForBlock = (
    blockId: string,
    items: any[],
    count: number,
    fieldState: NarrativeFieldState,
    excludedTags: string[] = []
): any[] => {
    if (!items || items.length === 0 || count <= 0) return [];
    const excluded = new Set(excludedTags);
    const available = items.filter(item => !excluded.has(item.name));
    if (blockId !== 'skin_location') return pickUniformItems(available, count);
    return pickWeightedItems(available, count, item => scoreSur6ItemForState(item, fieldState));
};

const getGenderKind = (item: any): 'female' | 'male' | 'nonBinary' | null => {
    const id = String(item?.id || '').toLowerCase();
    const name = String(item?.name || item || '');
    const nameEn = String(item?.nameEn || item?.enName || '');
    const text = `${id} ${name} ${nameEn}`.toLowerCase();

    if (id === 'gen_f' || name === '女性' || nameEn.toLowerCase() === 'female') return 'female';
    if (id === 'gen_m' || name === '男性' || nameEn.toLowerCase() === 'male') return 'male';
    if (id === 'gen_nb' || name === '非二元' || text.includes('non-binary') || text.includes('non binary')) return 'nonBinary';
    return null;
};

export const pickBiasedBinaryGenderName = (libItems: any[]): string | null => {
    const femaleItems = libItems.filter(item => getGenderKind(item) === 'female');
    const maleItems = libItems.filter(item => getGenderKind(item) === 'male');
    const preferFemale = Math.random() < 0.70;
    const primaryPool = preferFemale ? femaleItems : maleItems;
    const fallbackPool = preferFemale ? maleItems : femaleItems;
    const pool = primaryPool.length > 0 ? primaryPool : fallbackPool;
    if (pool.length === 0) return null;
    return pool[Math.floor(Math.random() * pool.length)].name;
};

export const pickRemainingGenderName = (libItems: any[], currentTags: string[] = []): string | null => {
    const current = new Set(currentTags);
    const available = libItems.filter(item => !current.has(item.name) && !current.has(item.nameEn));
    const pool = available.length > 0 ? available : libItems;
    if (pool.length === 0) return null;
    return pool[Math.floor(Math.random() * pool.length)].name;
};

export const randomizeWorldLawConfig = (currentWorldLaw?: WorldLawConfig): WorldLawConfig => {
    const currentGravity = currentWorldLaw?.gravity;
    const available = WORLD_LAW_LEVEL_OPTIONS.filter(option => option.id !== currentGravity);
    const pool = available.length > 0 ? available : WORLD_LAW_LEVEL_OPTIONS;
    const picked = pool[Math.floor(Math.random() * pool.length)] || WORLD_LAW_LEVEL_OPTIONS[1];
    return patchWorldLawConfig(currentWorldLaw, picked.id);
};

const pickRandom = (blockId: string, count: number, currentTags: string[], lockedTags: string[], libItems: any[]) => {
    return pickRandomWithLocks(currentTags, lockedTags, libItems, count);
};

const CORE_FORMULA_BLOCK_IDS = [
    'engine_m0',
    'engine_m1',
    'engine_m2',
    'engine_m3',
    'engine_m4',
    'engine_m5',
    'engine_m6',
    'engine_m7a',
    'engine_m7b',
] as const;

const REQUIRED_CORE_FORMULA_BLOCK_IDS = [
    'engine_m0',
    'engine_m1',
    'engine_m2',
    'engine_m3',
    'engine_m4',
    'engine_m5',
    'engine_m6',
    'engine_m7a',
] as const;

const CORE_FORMULA_RANDOM_MAX_TERMS = 11;
const M7B_RANDOM_EMPTY_PROBABILITY = 0.4;

type RandomFocusMode = 'global' | 'formula';
type RandomFocusCategory = 'm' | 'surface';

type RandomFocusCandidate = {
    unit: string;
    category: RandomFocusCategory;
    blockIds: string[];
    tags: string[];
    weight: number;
    isM7B: boolean;
};

const M_AXIS_MIXER_RANDOM_SLOTS: MAxisMixerSlot[] = [
    'engine_m0',
    'engine_m1',
    'engine_m2',
    'engine_m3',
    'engine_m4',
    'engine_m5',
    'engine_m6',
    'engine_m7a',
];

const FOCUS_M_SLOT_WEIGHT: Record<string, number> = {
    engine_m0: 0.72,
    engine_m1: 1,
    engine_m2: 0.95,
    engine_m3: 0.95,
    engine_m4: 1.22,
    engine_m5: 1.12,
    engine_m6: 1.22,
    engine_m7a: 0.72,
    engine_m7b: 0.22,
};

const FOCUS_SURFACE_SLOT_WEIGHT: Record<string, number> = {
    skin_genre: 1.32,
    skin_era: 1.05,
    skin_society: 0.95,
    skin_everything: 1.1,
    skin_location: 1.16,
    skin_profession: 1,
    skin_ideology: 0.92,
    sur10x: 0.86,
    skin_ending: 0.78,
};

const isCoreFormulaBlock = (blockId: string): boolean =>
    (CORE_FORMULA_BLOCK_IDS as readonly string[]).includes(blockId);

const isRequiredCoreFormulaBlock = (blockId: string): boolean =>
    (REQUIRED_CORE_FORMULA_BLOCK_IDS as readonly string[]).includes(blockId);

const countPreservedCoreFormulaTags = (
    fieldState: NarrativeFieldState,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>
): number => CORE_FORMULA_BLOCK_IDS.reduce((total, blockId) => {
    const current = fieldState[blockId] || [];
    if (lockedModules[blockId]) return total + current.length;
    return total + getVisibleLockedTags(fieldState, lockedTags, blockId).length;
}, 0);

const countFutureRequiredCoreDeficit = (
    processedCoreBlocks: Set<string>,
    currentBlockId: string,
    fieldState: NarrativeFieldState,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>
): number => REQUIRED_CORE_FORMULA_BLOCK_IDS.reduce((total, blockId) => {
    if (blockId === currentBlockId || processedCoreBlocks.has(blockId) || lockedModules[blockId]) return total;
    return total + (getVisibleLockedTags(fieldState, lockedTags, blockId).length > 0 ? 0 : 1);
}, 0);

const clampCoreFormulaNeededCount = (
    blockId: string,
    requestedNeeded: number,
    keptCount: number,
    coreFormulaTotal: number,
    processedCoreBlocks: Set<string>,
    fieldState: NarrativeFieldState,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>
): number => {
    if (!isCoreFormulaBlock(blockId)) return requestedNeeded;
    const futureRequiredDeficit = countFutureRequiredCoreDeficit(processedCoreBlocks, blockId, fieldState, lockedModules, lockedTags);
    const maxAdditional = Math.max(0, CORE_FORMULA_RANDOM_MAX_TERMS - coreFormulaTotal - futureRequiredDeficit);
    if (!isRequiredCoreFormulaBlock(blockId)) return Math.min(requestedNeeded, maxAdditional);

    const minRequiredAdditional = Math.max(0, 1 - keptCount);
    return Math.max(minRequiredAdditional, Math.min(requestedNeeded, Math.max(minRequiredAdditional, maxAdditional)));
};

const pickWeightedCandidate = <T extends { weight: number }>(candidates: T[]): T | null => {
    if (candidates.length === 0) return null;
    const total = candidates.reduce((sum, item) => sum + Math.max(0.01, item.weight), 0);
    let cursor = Math.random() * total;
    for (const candidate of candidates) {
        cursor -= Math.max(0.01, candidate.weight);
        if (cursor <= 0) return candidate;
    }
    return candidates[candidates.length - 1] || null;
};

const pickWeightedMany = <T extends { unit: string; weight: number }>(candidates: T[], count: number, excludedUnits: Set<string> = new Set()): T[] => {
    const selected: T[] = [];
    const selectedUnits = new Set(excludedUnits);
    for (let i = 0; i < count; i++) {
        const pool = candidates.filter(candidate => !selectedUnits.has(candidate.unit));
        const picked = pickWeightedCandidate(pool);
        if (!picked) break;
        selected.push(picked);
        selectedUnits.add(picked.unit);
    }
    return selected;
};

const getRandomFocusCandidates = (fieldState: NarrativeFieldState): RandomFocusCandidate[] => {
    const grouped = new Map<string, RandomFocusCandidate>();
    Object.entries(fieldState || {}).forEach(([blockId, rawTags]) => {
        const tags = Array.isArray(rawTags) ? rawTags : (rawTags ? [String(rawTags)] : []);
        if (!isFocusableBlock(blockId)) return;
        tags.forEach(tag => {
            if (!tag) return;
            const unit = getFocusUnitKey(blockId, tag);
            const category: RandomFocusCategory = isCoreFormulaBlock(blockId) ? 'm' : 'surface';
            const slotWeight = category === 'm'
                ? (FOCUS_M_SLOT_WEIGHT[blockId] || 1)
                : (FOCUS_SURFACE_SLOT_WEIGHT[blockId] || 0.9);
            const existing = grouped.get(unit);
            if (existing) {
                if (!existing.tags.includes(tag)) existing.tags.push(tag);
                if (!existing.blockIds.includes(blockId)) existing.blockIds.push(blockId);
                existing.weight = Math.max(existing.weight, slotWeight);
                existing.isM7B = existing.isM7B || blockId === 'engine_m7b';
            } else {
                grouped.set(unit, {
                    unit,
                    category,
                    blockIds: [blockId],
                    tags: [tag],
                    weight: slotWeight,
                    isM7B: blockId === 'engine_m7b',
                });
            }
        });
    });
    return Array.from(grouped.values());
};

const buildFocusStateFromCandidates = (candidates: RandomFocusCandidate[]): PromptFocusState =>
    candidates.reduce<PromptFocusState>((acc, candidate) => {
        candidate.tags.forEach(tag => {
            acc[tag] = true;
        });
        return acc;
    }, {});

const getPreviouslyFocusedSurfaceCandidates = (
    candidates: RandomFocusCandidate[],
    previousFocusState?: PromptFocusState
): RandomFocusCandidate[] => {
    if (!previousFocusState) return [];
    const focusOrder = Object.keys(previousFocusState).filter(tag => previousFocusState[tag]);
    return candidates
        .filter(candidate => candidate.category === 'surface' && candidate.tags.some(tag => previousFocusState[tag]))
        .map(candidate => ({
            candidate,
            order: Math.min(...candidate.tags.map(tag => {
                const idx = focusOrder.indexOf(tag);
                return idx === -1 ? 999 : idx;
            })),
        }))
        .sort((a, b) => a.order - b.order)
        .map(item => item.candidate);
};

export const randomizePromptFocusState = (
    fieldState: NarrativeFieldState,
    mode: RandomFocusMode = 'global',
    previousFocusState?: PromptFocusState
): PromptFocusState => {
    const candidates = getRandomFocusCandidates(fieldState);
    const mCandidates = candidates.filter(candidate => candidate.category === 'm');
    const primaryMCandidates = mCandidates.filter(candidate => !candidate.isM7B);
    const surfaceCandidates = candidates.filter(candidate => candidate.category === 'surface');
    const selected: RandomFocusCandidate[] = [];
    const selectedUnits = new Set<string>();

    const add = (candidate: RandomFocusCandidate | null) => {
        if (!candidate || selectedUnits.has(candidate.unit) || selected.length >= 3) return;
        selected.push(candidate);
        selectedUnits.add(candidate.unit);
    };

    if (mode === 'formula') {
        const preservedSurface = getPreviouslyFocusedSurfaceCandidates(candidates, previousFocusState);
        const availableSurfaceSlots = Math.min(2, preservedSurface.length);
        const targetMCount = Math.min(primaryMCandidates.length, availableSurfaceSlots >= 2 ? 1 : (Math.random() < 0.65 ? 2 : 1));
        pickWeightedMany(primaryMCandidates, Math.max(1, targetMCount), selectedUnits).forEach(add);

        if (selected.length < targetMCount && Math.random() < 0.25) {
            pickWeightedMany(mCandidates.filter(candidate => candidate.isM7B), 1, selectedUnits).forEach(add);
        }

        preservedSurface.slice(0, Math.max(0, 3 - selected.length)).forEach(add);
        return buildFocusStateFromCandidates(selected);
    }

    const roll = Math.random();
    const target = roll < 0.45
        ? { m: 1, surface: 2 }
        : roll < 0.85
            ? { m: 2, surface: 1 }
            : { m: 1, surface: 1 };

    const primaryCategory: RandomFocusCategory =
        primaryMCandidates.length > 0 && (surfaceCandidates.length === 0 || Math.random() < 0.6)
            ? 'm'
            : 'surface';
    add(pickWeightedCandidate(primaryCategory === 'm' ? primaryMCandidates : surfaceCandidates));

    const remainingMTarget = Math.max(0, target.m - selected.filter(candidate => candidate.category === 'm').length);
    pickWeightedMany(primaryMCandidates, remainingMTarget, selectedUnits).forEach(add);

    if (selected.filter(candidate => candidate.category === 'm').length < target.m && Math.random() < 0.25) {
        pickWeightedMany(mCandidates.filter(candidate => candidate.isM7B), 1, selectedUnits).forEach(add);
    }

    const remainingSurfaceTarget = Math.max(0, target.surface - selected.filter(candidate => candidate.category === 'surface').length);
    pickWeightedMany(surfaceCandidates, remainingSurfaceTarget, selectedUnits).forEach(add);

    if (selected.length < Math.min(3, candidates.length)) {
        pickWeightedMany(candidates.filter(candidate => !candidate.isM7B), 3 - selected.length, selectedUnits).forEach(add);
    }

    return buildFocusStateFromCandidates(selected);
};

const getFocusedMAxisSlots = (fieldState: NarrativeFieldState, focusState: PromptFocusState): MAxisMixerSlot[] => {
    const tagToSlot = Object.entries(fieldState || {}).reduce<Record<string, MAxisMixerSlot>>((acc, [blockId, rawTags]) => {
        if (!M_AXIS_MIXER_RANDOM_SLOTS.includes(blockId as MAxisMixerSlot)) return acc;
        const tags = Array.isArray(rawTags) ? rawTags : (rawTags ? [String(rawTags)] : []);
        tags.forEach(tag => {
            acc[tag] = blockId as MAxisMixerSlot;
        });
        return acc;
    }, {});
    const ordered = Object.keys(focusState || {})
        .filter(tag => focusState[tag] && tagToSlot[tag])
        .map(tag => tagToSlot[tag]);
    return Array.from(new Set(ordered));
};

const pickMixerLevel = (slot: MAxisMixerSlot, role: 'main' | 'secondary' | 'background'): MAxisMixerLevel => {
    const isFrameSlot = slot === 'engine_m0' || slot === 'engine_m7a';
    const isExternalPressureSlot = slot === 'engine_m4' || slot === 'engine_m5' || slot === 'engine_m6';
    const weights: Array<{ level: MAxisMixerLevel; weight: number }> = role === 'main'
        ? [
            { level: 'amplified', weight: isFrameSlot ? 0.42 : 0.65 },
            { level: 'balanced', weight: isFrameSlot ? 0.48 : 0.25 },
            { level: 'muted', weight: 0.1 },
        ]
        : role === 'secondary'
            ? [
                { level: 'amplified', weight: isFrameSlot ? 0.28 : 0.45 },
                { level: 'balanced', weight: isFrameSlot ? 0.62 : 0.45 },
                { level: 'muted', weight: 0.1 },
            ]
            : [
                { level: 'amplified', weight: isFrameSlot ? 0.04 : (isExternalPressureSlot ? 0.14 : 0.1) },
                { level: 'balanced', weight: isFrameSlot ? 0.84 : (isExternalPressureSlot ? 0.72 : 0.75) },
                { level: 'muted', weight: isFrameSlot ? 0.12 : 0.15 },
            ];
    return pickWeightedCandidate(weights)?.level || 'balanced';
};

const mixerAmplifiedKeepScore = (slot: MAxisMixerSlot, focusedSlots: MAxisMixerSlot[]): number => {
    const focusIndex = focusedSlots.indexOf(slot);
    const focusScore = focusIndex === 0 ? 4 : focusIndex > 0 ? 2.5 : 0;
    const slotScore = slot === 'engine_m4' || slot === 'engine_m5' || slot === 'engine_m6'
        ? 1.2
        : slot === 'engine_m0' || slot === 'engine_m7a'
            ? -0.8
            : 0;
    return focusScore + slotScore + Math.random() * 0.1;
};

const mixerMutedKeepScore = (slot: MAxisMixerSlot, focusedSlots: MAxisMixerSlot[]): number => {
    const focusIndex = focusedSlots.indexOf(slot);
    const focusPenalty = focusIndex === 0 ? -3 : focusIndex > 0 ? -1.5 : 1;
    const slotScore = slot === 'engine_m1' || slot === 'engine_m2' || slot === 'engine_m3'
        ? 0.8
        : slot === 'engine_m0' || slot === 'engine_m7a'
            ? -0.2
            : 0;
    return focusPenalty + slotScore + Math.random() * 0.1;
};

const pickMixerSlotForAmplified = (
    levels: Record<MAxisMixerSlot, MAxisMixerLevel>,
    focusedSlots: MAxisMixerSlot[]
): MAxisMixerSlot | null => {
    const candidates = M_AXIS_MIXER_RANDOM_SLOTS
        .filter(slot => levels[slot] !== 'amplified')
        .map(slot => ({
            slot,
            weight: (focusedSlots[0] === slot ? 4 : focusedSlots.includes(slot) ? 2.5 : 0.8)
                + (slot === 'engine_m4' || slot === 'engine_m5' || slot === 'engine_m6' ? 1.4 : 0)
                + (slot === 'engine_m0' || slot === 'engine_m7a' ? -0.35 : 0),
        }));
    return pickWeightedCandidate(candidates)?.slot || null;
};

const pickMixerSlotForMuted = (
    levels: Record<MAxisMixerSlot, MAxisMixerLevel>,
    focusedSlots: MAxisMixerSlot[]
): MAxisMixerSlot | null => {
    const candidates = M_AXIS_MIXER_RANDOM_SLOTS
        .filter(slot => levels[slot] !== 'amplified')
        .map(slot => ({
            slot,
            weight: (focusedSlots.includes(slot) ? 0.2 : 1.6)
                + (slot === 'engine_m1' || slot === 'engine_m2' || slot === 'engine_m3' ? 0.6 : 0)
                + (slot === 'engine_m0' || slot === 'engine_m7a' ? -0.2 : 0),
        }));
    return pickWeightedCandidate(candidates)?.slot || null;
};

export const randomizeMAxisMixerState = (
    fieldState: NarrativeFieldState,
    focusState: PromptFocusState = {}
): MAxisMixerState => {
    const focusedSlots = getFocusedMAxisSlots(fieldState, focusState);
    const levels = M_AXIS_MIXER_RANDOM_SLOTS.reduce<Record<MAxisMixerSlot, MAxisMixerLevel>>((acc, slot) => {
        const focusIndex = focusedSlots.indexOf(slot);
        const role = focusIndex === 0 ? 'main' : focusIndex > 0 ? 'secondary' : 'background';
        acc[slot] = pickMixerLevel(slot, role);
        return acc;
    }, {} as Record<MAxisMixerSlot, MAxisMixerLevel>);

    const trimLevel = (
        targetLevel: MAxisMixerLevel,
        maxCount: number,
        getKeepScore: (slot: MAxisMixerSlot, focused: MAxisMixerSlot[]) => number
    ) => {
        const slots = M_AXIS_MIXER_RANDOM_SLOTS.filter(slot => levels[slot] === targetLevel);
        if (slots.length <= maxCount) return;
        slots
            .sort((a, b) => getKeepScore(a, focusedSlots) - getKeepScore(b, focusedSlots))
            .slice(0, slots.length - maxCount)
            .forEach(slot => {
                levels[slot] = 'balanced';
            });
    };

    trimLevel('amplified', 2, mixerAmplifiedKeepScore);
    trimLevel('muted', 3, mixerMutedKeepScore);

    if (!M_AXIS_MIXER_RANDOM_SLOTS.some(slot => levels[slot] === 'amplified')) {
        const slot = pickMixerSlotForAmplified(levels, focusedSlots);
        if (slot) levels[slot] = 'amplified';
    }

    if (!M_AXIS_MIXER_RANDOM_SLOTS.some(slot => levels[slot] === 'muted')) {
        const slot = pickMixerSlotForMuted(levels, focusedSlots);
        if (slot) levels[slot] = 'muted';
    }

    return M_AXIS_MIXER_RANDOM_SLOTS.reduce<MAxisMixerState>((acc, slot) => {
        if (levels[slot] !== 'balanced') acc[slot] = levels[slot];
        return acc;
    }, {});
};

export const randomizeM7BResidueIntensity = (fieldState: NarrativeFieldState): M7BResidueIntensity => {
    const tags = fieldState.engine_m7b || [];
    if (tags.length === 0) return 'off';
    const roll = Math.random();
    if (roll < 0.6) return 'light';
    if (roll < 0.9) return 'strong';
    return 'epilogue';
};

const isBlockLocked = (id: string, lockedModules: Record<string, boolean>) => {
    if (lockedModules[id]) return true;
    const globalCategory = AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY[id];
    if (globalCategory && lockedModules[globalCategory]) return true;
    if (HUMAN_BLOCKS.includes(id) && lockedModules['SUBJECT']) return true;
    if (CREATURE_BLOCKS.includes(id) && lockedModules['SUBJECT']) return true;
    return false;
};

export type Archetype = 'ANCIENT' | 'MODERN' | 'FUTURE';

export const getArchetypeFromEra = (eraTag: string): Archetype => {
    if (!eraTag) return 'MODERN';
    const lower = eraTag.toLowerCase();
    if (lower.includes('future') || lower.includes('cyber') || lower.includes('space') ||
        lower.includes('2050') || lower.includes('post-human') || lower.includes('tech') ||
        lower.includes('star') || lower.includes('galactic') || lower.includes('mars') ||
        lower.includes('solar') || lower.includes('robot') || lower.includes('ai ')) {
        return 'FUTURE';
    }
    if (lower.includes('ancient') || lower.includes('myth') || lower.includes('medieval') ||
        lower.includes('dynasty') || lower.includes('renaissance') || lower.includes('feudal') ||
        lower.includes('classic') || lower.includes('empire') || lower.includes('viking') ||
        lower.includes('qin') || lower.includes('han') || lower.includes('tang') ||
        lower.includes('song') || lower.includes('ming') || lower.includes('greek') ||
        lower.includes('roman') || lower.includes('egypt')) {
        return 'ANCIENT';
    }
    return 'MODERN';
};

export const filterItemsByArchetype = (items: any[], archetype: Archetype, blockId: string) => {
    const sensitiveBlocks = ['skin_location', 'skin_profession', 'skin_society', 'skin_ideology', 'comm_skin_scenario', 'engine_m1', 'skin_origin'];
    if (!sensitiveBlocks.includes(blockId) && !blockId.startsWith('aes_')) return items;
    return items.filter(item => {
        const text = (item.group + ' ' + item.name + ' ' + (item.def || "")).toLowerCase();
        if (archetype === 'ANCIENT') {
            const banned = ['cyber', 'digital', 'robot', 'laser', 'hacker', 'office', 'car', 'gun', 'modern', 'ai ', 'network', 'plastic', 'nylon', 'phone', 'computer', 'virtual', 'neon'];
            if (banned.some(b => text.includes(b))) return false;
        }
        if (archetype === 'MODERN') {
             const banned = ['space ship', 'laser gun', 'magic wand', 'sword', 'knight armor', 'dragon', 'alchemist'];
             if (banned.some(b => text.includes(b))) return false;
        }
        if (archetype === 'FUTURE') {
             const banned = ['peasant', 'carriage'];
             if (banned.some(b => text.includes(b))) return false;
        }
        return true;
    });
};

// ============================================================
// RANDOMIZATION PROTOCOL v2.0 — Core Helpers
// ============================================================

/**
 * Weighted surface filter for the 12-word story summary.
 * Returns a Set of blockIds that should participate in this round of randomization.
 * Implements: weight-based probability → SUR2/SUR3 mutual exclusion → cap at 6.
 */
export const weightedSurfaceFilter = (
    lockedModules: Record<string, boolean>,
    isSkinMasterLocked: boolean
): Set<string> => {
    if (isSkinMasterLocked) return new Set();

    type Slot = { id: string; blockIds: readonly string[]; weight: number };

    // Step 1: Roll each slot against its weight probability
    let candidates: Slot[] = [];
    for (const slot of SURFACE_WEIGHT_CONFIG.slots) {
        // Skip if ALL block IDs in this slot are locked
        const allLocked = slot.blockIds.every(id => lockedModules[id]);
        if (allLocked) continue;

        if (Math.random() < slot.weight) {
            candidates.push(slot as Slot);
        }
    }

    // Step 2: SUR2/SUR3 mutual exclusion — if both selected, keep only one
    const isSUR2Locked = !!lockedModules['skin_era'];
    const isSUR3Locked = !!lockedModules['skin_year_exact'] || !!lockedModules['skin_country_exact'];
    const hasSUR2 = candidates.some(s => s.id === 'SUR2') || isSUR2Locked;
    const hasSUR3 = candidates.some(s => s.id === 'SUR3') || isSUR3Locked;

    if (hasSUR2 && hasSUR3) {
        if (!isSUR2Locked && !isSUR3Locked) {
            const keepSUR2 = Math.random() < 0.5;
            candidates = candidates.filter(s => keepSUR2 ? s.id !== 'SUR3' : s.id !== 'SUR2');
        } else if (isSUR2Locked && !isSUR3Locked) {
            candidates = candidates.filter(s => s.id !== 'SUR3');
        } else if (!isSUR2Locked && isSUR3Locked) {
            candidates = candidates.filter(s => s.id !== 'SUR2');
        }
    }

    // Step 3: Cap at max slots — trim low weight first, randomize within same tier
    if (candidates.length > SURFACE_WEIGHT_CONFIG.cap) {
        candidates.sort((a, b) => {
            const diff = a.weight - b.weight; // lower weight → sorted first (trimmed first)
            return diff !== 0 ? diff : Math.random() - 0.5;
        });
        candidates = candidates.slice(candidates.length - SURFACE_WEIGHT_CONFIG.cap);
    }

    // Build result set of block IDs
    const result = new Set<string>();
    for (const slot of candidates) {
        for (const blockId of slot.blockIds) {
            result.add(blockId);
        }
    }
    return result;
};

export const getSingleRandomTag = (
    blockId: string,
    currentTag: string,
    driverType: DriverType | null,
    fieldState: NarrativeFieldState
): string => {
    // --- SPECIAL HANDLING FOR COLOR PALETTE ---
    if (blockId === 'aes_color_palette') {
        const currentTags = fieldState[blockId] || [];
        // Use AES_COLOR_PRESETS as the source for color palette randomization
        const availablePresets = AES_COLOR_PRESETS.filter(p => !currentTags.includes(p.name));
        if (availablePresets.length > 0) {
            return availablePresets[Math.floor(Math.random() * availablePresets.length)].name;
        }
        // Fallback to random if all used (unlikely for single pick)
        return AES_COLOR_PRESETS[Math.floor(Math.random() * AES_COLOR_PRESETS.length)].name;
    }

    // --- SPECIAL HANDLING FOR MASTER PRESETS ---
    if (blockId === 'aes_palette_preset') {
         // Determine mode roughly by checking other fields or just pick from all
         // Ideally we should know if it's realism or stylized, but for single tag randomizer we can mix
         const allPresets = MASTER_PRESETS;
         const currentTags = fieldState[blockId] || [];
         const available = allPresets.filter(p => !currentTags.includes(p.name));
         if (available.length > 0) return available[Math.floor(Math.random() * available.length)].name;
         return allPresets[Math.floor(Math.random() * allPresets.length)].name;
    }

    let fullLibrary: LibraryCategoryDef[] = [];
    if (driverType === DriverType.COMMERCIAL) {
        fullLibrary = [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY];
    } else if (driverType === DriverType.AESTHETIC) {
        fullLibrary = [...AESTHETIC_ENGINE_LIBRARY, ...SKIN_LIBRARY];
    } else if (driverType === DriverType.CONCEPT_DESIGN) {
        fullLibrary = [...CONCEPT_ENGINE_LIBRARY];
    } else if (driverType === DriverType.EXPERIMENTAL) {
        fullLibrary = [...EXPERIMENTAL_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY];
    } else if (driverType === DriverType.TRAILER) {
        fullLibrary = [...TRAILER_ENGINE_LIBRARY, ...TRAILER_SKIN_LIBRARY];
    } else {
        fullLibrary = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES, ...WORLD_MOTIF_CATEGORIES];
    }

    const libId = blockId === 'skin_era' ? 'skin_era_lib' : `${blockId}_lib`;
    const category = fullLibrary.find(c => c.id === libId);
    const currentTags = fieldState[blockId] || [];
    const otherTags = currentTags.filter(t => t !== currentTag);
    let newTag = currentTag;

    const currentEraTags = fieldState['skin_era'] || [];
    const currentEra = currentEraTags.length > 0 ? currentEraTags[0] : "";
    const archetype = getArchetypeFromEra(currentEra);

    if (!category && blockId === 'skin_genre') {
        const allGenres = GENRE_CATEGORIES.flatMap(c => c.items);
        const available = allGenres.filter(i => i.name !== currentTag && !otherTags.includes(i.name));
        if (available.length > 0) newTag = available[Math.floor(Math.random() * available.length)].name;
    } else if (category && category.items.length > 0) {
        let availableItems = category.items;
        if (blockId === 'skin_location' || blockId === 'skin_profession' || blockId === 'skin_society' || blockId === 'skin_ideology' || blockId === 'comm_skin_scenario' || blockId === 'engine_m1' || blockId === 'skin_origin') {
            availableItems = filterItemsByArchetype(category.items, archetype, blockId);
            if (availableItems.length === 0) availableItems = category.items;
        }
        const available = availableItems.filter(i => !currentTags.includes(i.name));
        const picked = pickRandomItemsForBlock(blockId, available, 1, fieldState, otherTags)[0];
        if (picked) newTag = picked.name;
    }
    return newTag;
};

export const generateAestheticSmartRandom = (
    currentFieldState: NarrativeFieldState,
    subjectType: SubjectType,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>,
    aestheticMode: AestheticMode = 'REALISM'
): NarrativeFieldState => {
    const newState = { ...currentFieldState };
    const checkLock = (id: string) => isBlockLocked(id, lockedModules);
    const presetModifiedKeys = new Set<string>();

    // Determine the active archetype for filtering
    const currentEraTags = newState['skin_era'] || [];
    const currentEra = currentEraTags.length > 0 ? currentEraTags[0] : "";
    const archetype = getArchetypeFromEra(currentEra);

    // --- 1. Master Preset (L0/L1.1) ---
    if (!checkLock('PRESETS') && !checkLock('aes_palette_preset')) {
        const availablePresets = aestheticMode === 'REALISM' ? MASTER_PRESETS_REALISM : MASTER_PRESETS_STYLIZED;
        const randomPreset = availablePresets[Math.floor(Math.random() * availablePresets.length)];
        newState['aes_palette_preset'] = [randomPreset.name];

        ['aes_director_style', 'aes_photo_style', 'aes_art_style', 'aes_anim_director', 'aes_art_movement'].forEach(id => {
            newState[id] = [];
        });

        Object.entries(randomPreset.params).forEach(([key, values]) => {
            if (!checkLock(key)) {
                newState[key] = values;
                presetModifiedKeys.add(key);
            }
        });
    }

    // --- 2. Lens & Composition (L1.2) ---
    // [Rule 3 Prereq] Decide Composition first to know if we can set eyes
    if (!checkLock('aes_image_focus')) {
        newState['aes_image_focus'] = pickRandom('aes_image_focus', 1, currentFieldState['aes_image_focus'] || [], lockedTags['aes_image_focus'] || [], getLib('aes_image_focus'));
    }
    const currentComp = newState['aes_image_focus']?.[0] || "";
    const isPortraitOrMacro = currentComp.includes('Portrait') || currentComp.includes('Macro') || currentComp.includes('肖像') || currentComp.includes('微距');

    const l1_2_Blocks = [
        'aes_shot_size', 'aes_visual_balance', 'aes_perspective',
        'aes_angle', 'aes_focal_length', 'aes_depth', 'aes_shutter', 'aes_lens_fx'
    ];
    l1_2_Blocks.forEach(id => {
        if (!checkLock(id)) {
             const count = (id === 'aes_lens_fx') ? (Math.random() < 0.5 ? 1 : 2) : 1;
             newState[id] = pickRandom(id, count, currentFieldState[id] || [], lockedTags[id] || [], getLib(id));
        }
    });

    // Poster Style
    if (!checkLock('aes_poster_style')) newState['aes_poster_style'] = (lockedTags['aes_poster_style'] || []);

    // --- 3. Subject (L2) - HUMAN ---
    if (subjectType === 'HUMAN') {

        // [Rule 1] Identity Exclusivity: Persona vs Occupation
        const identityOptions = ['aes_persona', 'aes_occupation'];
        let activeIdentityBlock = "";

        const lockedIdentityBlock = identityOptions.find(id => checkLock(id) && (currentFieldState[id]?.length > 0));

        if (lockedIdentityBlock) {
             activeIdentityBlock = lockedIdentityBlock;
        } else {
             activeIdentityBlock = identityOptions[Math.floor(Math.random() * identityOptions.length)];
        }

        identityOptions.forEach(id => {
            if (id === activeIdentityBlock) {
                 if (!checkLock(id)) {
                      const items = filterItemsByArchetype(getLib(id), archetype, id);
                      newState[id] = pickRandom(id, 1, currentFieldState[id]||[], lockedTags[id]||[], items);
                 }
            } else {
                 if (!checkLock(id)) {
                      newState[id] = [];
                 }
            }
        });

        // [Rule 2] If Persona is active, do not randomize Gender
        if (activeIdentityBlock === 'aes_persona') {
             if (!checkLock('aes_gender')) newState['aes_gender'] = [];
        } else {
             // Randomize Gender
             if (!checkLock('aes_gender')) {
                const genderLib = getLib('aes_gender');
                const isFemale = Math.random() < 0.5;
                const genderId = isFemale ? 'gen_female' : 'gen_male';
                const genderItem = genderLib.find(i => i.id === genderId);
                if (genderItem) newState['aes_gender'] = [genderItem.name];
            }
        }

        const currentGenderTag = newState['aes_gender']?.[0] || "";
        const isFemale = currentGenderTag.includes('Female') || currentGenderTag.includes('女性');

        // [Rule 6] Base Attributes (Age, Body, Ethnicity - 1 each)
        if (!checkLock('aes_age')) {
             const ageLib = getLib('aes_age');
             const r = Math.random();
             let targetId = 'age_young_adult';
             if (r < 0.2) targetId = 'age_teen';
             else if (r < 0.8) targetId = 'age_young_adult';
             else targetId = 'age_mid_adult';
             const item = ageLib.find(i => i.id === targetId);
             if (item) newState['aes_age'] = [item.name];
        }
        if (!checkLock('aes_ethnicity')) {
             newState['aes_ethnicity'] = pickRandom('aes_ethnicity', 1, currentFieldState['aes_ethnicity']||[], lockedTags['aes_ethnicity']||[], getLib('aes_ethnicity'));
        }
        if (!checkLock('aes_body_type')) {
             const bodyLib = getLib('aes_body_type');
             let filtered = [];
             if (currentGenderTag.includes('Male') && !isFemale) {
                 filtered = bodyLib.filter(i => i.group.startsWith('C.') || i.group.startsWith('D.'));
             } else {
                 filtered = bodyLib.filter(i => i.group.startsWith('A.') || i.group.startsWith('B.'));
             }
             if (filtered.length > 0) {
                 const chosen = filtered[Math.floor(Math.random() * filtered.length)];
                 newState['aes_body_type'] = [chosen.name];
             }
        }

        // [Rule 5] Actions: Static / Dynamic / Complex - Pick 1
        const actionBlocks = ['aes_action_static', 'aes_action_dynamic', 'aes_action_complex'];
        let activeActionBlock = actionBlocks[Math.floor(Math.random() * actionBlocks.length)];
        const lockedAction = actionBlocks.find(id => checkLock(id) && (currentFieldState[id]?.length > 0));
        if (lockedAction) activeActionBlock = lockedAction;

        actionBlocks.forEach(id => {
            if (id === activeActionBlock) {
                if (!checkLock(id)) {
                    newState[id] = pickRandom(id, 1, currentFieldState[id]||[], lockedTags[id]||[], getLib(id));
                }
            } else {
                if (!checkLock(id)) newState[id] = [];
            }
        });

        // [Rule 4] Details Limit
        let detailPool = [
            'aes_hair_color',
            isFemale ? 'aes_hair_style_f' : 'aes_hair_style_m',
            'aes_face_features', 'aes_expression', 'aes_skin_texture', 'aes_body_features'
        ];

        if (isPortraitOrMacro) {
            detailPool.push('aes_eye_color', 'aes_eye_shape', 'aes_eye_fx');
        } else {
            if (!checkLock('aes_eye_color')) newState['aes_eye_color'] = [];
            if (!checkLock('aes_eye_shape')) newState['aes_eye_shape'] = [];
            if (!checkLock('aes_eye_fx')) newState['aes_eye_fx'] = [];
        }

        const shuffledPool = detailPool.sort(() => 0.5 - Math.random());
        const selectedDetails = shuffledPool.slice(0, 5);
        const ignoredDetails = shuffledPool.slice(5);

        ignoredDetails.forEach(id => {
             if (!checkLock(id)) newState[id] = [];
        });

        selectedDetails.forEach(id => {
            if (!checkLock(id)) {
                 const items = filterItemsByArchetype(getLib(id), archetype, id);
                 const count = (id === 'aes_skin_texture' && Math.random() > 0.5) ? 2 : 1;
                 newState[id] = pickRandom(id, count, currentFieldState[id]||[], lockedTags[id]||[], items);
            }
        });

        if (isFemale && !checkLock('aes_hair_style_m')) newState['aes_hair_style_m'] = [];
        if (!isFemale && !checkLock('aes_hair_style_f')) newState['aes_hair_style_f'] = [];

        if (!checkLock('aes_species')) newState['aes_species'] = [];

    } else if (subjectType === 'CREATURE') {
        const cMulti2 = ['aes_creature_class'];
        const cMulti3 = ['aes_creature_head', 'aes_creature_body', 'aes_creature_texture'];
        const cSingle = ['aes_creature_size', 'aes_creature_element', 'aes_creature_mood', 'aes_creature_action'];
        cMulti2.forEach(id => { if(!checkLock(id)) newState[id] = pickRandom(id, Math.floor(Math.random() * 2) + 1, currentFieldState[id]||[], lockedTags[id]||[], filterItemsByArchetype(getLib(id), archetype, id)); });
        cMulti3.forEach(id => { if(!checkLock(id)) newState[id] = pickRandom(id, Math.floor(Math.random() * 3) + 1, currentFieldState[id]||[], lockedTags[id]||[], filterItemsByArchetype(getLib(id), archetype, id)); });
        cSingle.forEach(id => { if(!checkLock(id)) newState[id] = pickRandom(id, 1, currentFieldState[id]||[], lockedTags[id]||[], filterItemsByArchetype(getLib(id), archetype, id)); });
    }

    // --- 4. Environment & Vibe (L3/L4) ---

    // [Rule 9] Scene Real vs Abstract vs Surreal: Pick 1
    const sceneBlocks = ['aes_scene_real', 'aes_scene_surreal', 'aes_scene_abstract'];
    // Check if any are locked to respect user choice
    const lockedScene = sceneBlocks.find(id => checkLock(id) && (currentFieldState[id]?.length > 0));
    const activeSceneBlock = lockedScene || sceneBlocks[Math.floor(Math.random() * sceneBlocks.length)];

    sceneBlocks.forEach(id => {
        if (id === activeSceneBlock) {
             if (!checkLock(id) && !presetModifiedKeys.has(id)) {
                 const items = filterItemsByArchetype(getLib(id), archetype, id);
                 newState[id] = pickRandom(id, 1, currentFieldState[id]||[], lockedTags[id]||[], items);
             }
        } else {
             if (!checkLock(id)) newState[id] = [];
        }
    });

    // [Rule 8] Era: 0-1
    if (!checkLock('skin_era') && !presetModifiedKeys.has('skin_era')) {
        if (Math.random() > 0.5) {
            const items = filterItemsByArchetype(getLib('skin_era'), archetype, 'skin_era');
             newState['skin_era'] = pickRandom('skin_era', 1, [], [], items);
        } else {
            newState['skin_era'] = [];
        }
    }

    // [Rule 7] Atmosphere/Particles: 0-1 (Separated Logic)
    const atmoTargetBlocks = ['aes_atmosphere', 'aes_particles'];
    atmoTargetBlocks.forEach(id => {
         if (!checkLock(id) && !presetModifiedKeys.has(id)) {
             // 50% chance to pick 1, 50% chance to clear
             const count = Math.random() > 0.5 ? 1 : 0;
             if (count > 0) {
                 newState[id] = pickRandom(id, 1, currentFieldState[id]||[], lockedTags[id]||[], filterItemsByArchetype(getLib(id), archetype, id));
             } else {
                 newState[id] = [];
             }
         }
    });

    // Clear legacy stage blocks if they exist in saved presets.
    ['aes_air_medium', 'aes_a3', 'aes_weather', 'aes_synesthesia'].forEach(id => {
         if (!checkLock(id)) newState[id] = [];
    });

    // [Rule 10] Lighting: 0-1
    const lightBlocks = ['aes_light_mood', 'aes_light_type', 'aes_light_direction', 'aes_light_shape'];
    lightBlocks.forEach(id => {
        if (!checkLock(id) && !presetModifiedKeys.has(id)) {
             const count = Math.random() > 0.5 ? 1 : 0;
             if (count > 0) {
                 newState[id] = pickRandom(id, 1, currentFieldState[id]||[], lockedTags[id]||[], filterItemsByArchetype(getLib(id), archetype, id));
             } else {
                 newState[id] = [];
             }
        }
    });

    // --- 5. Render Quality (L5) ---
    let l5Id = 'aes_render_real';
    let clearL5Id = 'aes_render_art';
    if (aestheticMode === 'STYLIZED') {
        l5Id = 'aes_render_art';
        clearL5Id = 'aes_render_real';
    }

    if (!checkLock(l5Id) && !presetModifiedKeys.has(l5Id)) {
        newState[l5Id] = pickRandom(l5Id, 1, currentFieldState[l5Id]||[], lockedTags[l5Id]||[], getLib(l5Id));
    }
    newState[clearL5Id] = [];

    return newState;
};

export const generateGlobalRandomState = (
    driverType: DriverType,
    currentFieldState: NarrativeFieldState,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>
): NarrativeFieldState => {
    const isAesthetic = driverType === DriverType.AESTHETIC;
    const isConceptDesign = driverType === DriverType.CONCEPT_DESIGN;
    if (isConceptDesign) return randomizeFormulaState(driverType, currentFieldState, lockedModules, lockedTags, 'HUMAN', 'STYLIZED');
    if (isAesthetic) return generateAestheticSmartRandom(currentFieldState, 'HUMAN', lockedModules, lockedTags, 'REALISM');

    const isCommercial = driverType === DriverType.COMMERCIAL;
    const isExperimental = driverType === DriverType.EXPERIMENTAL;
    const isTrailer = driverType === DriverType.TRAILER;
    let skinLockKey = isCommercial ? 'COMM_SKIN' : (isExperimental ? 'EXP_SKIN' : (isTrailer ? 'TRL_SKIN' : 'NARR_SKIN'));
    const isSkinMasterLocked = lockedModules[skinLockKey];

    // ── Step 0: Run weighted surface filter (12-word story summary) ──
    const surfaceParticipants = weightedSurfaceFilter(lockedModules, !!isSkinMasterLocked);
    const getVisibleLocks = (blockId: string) => {
        const selected = new Set(currentFieldState[blockId] || []);
        return (lockedTags[blockId] || []).filter(tag => selected.has(tag));
    };

    // ── Step 1: Era / Archetype determination ──
    let currentArchetype: Archetype = 'MODERN';
    let eraBlockId = 'skin_era';
    const lockedEraTags = getVisibleLocks(eraBlockId);
    const currentEraTags = currentFieldState[eraBlockId] || [];
    let activeEraTag: string | null = null;

    if (lockedEraTags.length > 0) {
        activeEraTag = lockedEraTags[0];
    } else if (lockedModules[eraBlockId] && currentEraTags.length > 0) {
        activeEraTag = currentEraTags[0];
    } else if (surfaceParticipants.has('skin_era') && !isSkinMasterLocked && !isCommercial && !isExperimental && !isTrailer) {
        // SUR2 passed the weighted filter → randomize era
        const allEras = WORLD_MOTIF_CATEGORIES.flatMap(c => c.items);
        if (allEras.length > 0 && !lockedModules[eraBlockId]) {
            const randomEraItem = allEras[Math.floor(Math.random() * allEras.length)];
            activeEraTag = randomEraItem.name;
        }
    } else if (currentEraTags.length > 0) {
        activeEraTag = currentEraTags[0]; // Keep current
    }
    if (activeEraTag) currentArchetype = getArchetypeFromEra(activeEraTag);

    // ── Step 2: Precise Coordinate (SUR3) ──
    const newState = { ...currentFieldState };
    const shouldRandomizeYear = !lockedModules['skin_year_exact'] && surfaceParticipants.has('skin_year_exact');
    const shouldRandomizeSpace = !lockedModules['skin_country_exact'] && surfaceParticipants.has('skin_country_exact');
    const coordinatePreset = (shouldRandomizeYear || shouldRandomizeSpace)
        ? getRandomSur3CoordinatePreset()
        : null;

    if (!lockedModules['skin_year_exact']) {
        const locks = getVisibleLocks('skin_year_exact');
        if (surfaceParticipants.has('skin_year_exact')) {
            if (locks.length > 0) {
                newState['skin_year_exact'] = locks;
            } else {
                newState['skin_year_exact'] = coordinatePreset?.timeMode === 'era'
                    ? [coordinatePreset.time || '']
                    : coordinatePreset?.year === null || coordinatePreset?.year === undefined
                    ? []
                    : [coordinatePreset.year.toString()];
            }
        } else {
            newState['skin_year_exact'] = locks;
        }
    }

    if (!lockedModules['skin_country_exact']) {
        const locks = getVisibleLocks('skin_country_exact');
        if (surfaceParticipants.has('skin_country_exact')) {
            if (locks.length > 0) {
                newState['skin_country_exact'] = locks;
            } else {
                newState['skin_country_exact'] = coordinatePreset ? [coordinatePreset.spaceCn] : [];
            }
        } else {
            newState['skin_country_exact'] = locks;
        }
    }

    // ── Step 3: Block/Library setup ──
    let blocks: NarrativeBlockDef[] = [];
    let library: LibraryCategoryDef[] = [];
    if (isCommercial) {
        blocks = [...COMMERCIAL_ENGINE_BLOCKS, ...COMM_SKIN_BLOCKS];
        library = [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY];
    } else if (isExperimental) {
        blocks = [...EXPERIMENTAL_ENGINE_BLOCKS, ...EXPERIMENTAL_SKIN_BLOCKS];
        library = [...EXPERIMENTAL_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY];
    } else if (isTrailer) {
        blocks = [...TRAILER_ENGINE_BLOCKS, ...TRAILER_SKIN_BLOCKS];
        library = [...TRAILER_ENGINE_LIBRARY, ...TRAILER_SKIN_LIBRARY];
    } else {
        blocks = [...NARRATIVE_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS];
        library = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES, ...WORLD_MOTIF_CATEGORIES];
    }

    // Apply era + coordinates
    if (!lockedModules[eraBlockId] && !isSkinMasterLocked) {
        if (activeEraTag && surfaceParticipants.has('skin_era') && blocks.some(b => b.id === eraBlockId)) {
            newState[eraBlockId] = [activeEraTag];
        } else {
            const locks = getVisibleLocks(eraBlockId);
            newState[eraBlockId] = (currentFieldState[eraBlockId] || []).filter(t => locks.includes(t));
        }
    }

    // ── Step 4: Genre / SUR1 handling ──
    if (!isCommercial && !isExperimental && !isTrailer && !isSkinMasterLocked) {
        const genreId = 'skin_genre';
        if (!lockedModules[genreId] && surfaceParticipants.has(genreId)) {
            const genreLib = GENRE_CATEGORIES.flatMap(c => c.items);
            const lockedGenre = getVisibleLocks(genreId);
            const genreCount = Math.max(getRandomCount(genreId), lockedGenre.length); // 1-2, never drop locked terms
            if (lockedGenre.length < genreCount) {
                const currentGenreTags = new Set(currentFieldState[genreId] || []);
                const available = genreLib.filter(i => !lockedGenre.includes(i.name) && !currentGenreTags.has(i.name));
                const shuffled = [...available].sort(() => 0.5 - Math.random());
                const needed = genreCount - lockedGenre.length;
                let picked = shuffled.slice(0, needed).map(i => i.name);
                if (picked.length < needed) {
                    const fallback = genreLib
                        .filter(i => !lockedGenre.includes(i.name) && !picked.includes(i.name))
                        .sort(() => 0.5 - Math.random())
                        .slice(0, needed - picked.length)
                        .map(i => i.name);
                    picked = [...picked, ...fallback];
                }
                newState[genreId] = [...lockedGenre, ...picked];
            } else {
                newState[genreId] = lockedGenre;
            }
        } else if (!lockedModules[genreId]) {
            const lockedGenre = getVisibleLocks(genreId);
            newState[genreId] = lockedGenre;
        }
    }

    // ── Step 5: Determine surface block IDs for filter check ──
    const surfaceBlockIds = new Set<string>(
        SURFACE_WEIGHT_CONFIG.slots.flatMap(s => [...s.blockIds])
    );
    // Also include non-weighted surface blocks (SUR8, SV1, SV2) — these get independent 50% roll
    const independentSurfaceBlocks = new Set<string>(['skin_age', 'skin_structure', 'skin_volume']);

    // ── Step 6: Main block loop ──
    let coreFormulaRandomTotal = countPreservedCoreFormulaTags(currentFieldState, lockedModules, lockedTags);
    const processedCoreBlocks = new Set<string>();
    blocks.forEach(block => {
        if (lockedModules[block.id]) return;
        let isSkinBlock = isCommercial ? COMM_SKIN_BLOCKS.some(b => b.id === block.id) : (isExperimental ? EXPERIMENTAL_SKIN_BLOCKS.some(b => b.id === block.id) : (isTrailer ? TRAILER_SKIN_BLOCKS.some(b => b.id === block.id) : ALL_SKIN_BLOCKS.some(b => b.id === block.id)));
        if (isSkinBlock && isSkinMasterLocked) return;

        // Skip handled blocks
        if (block.id === eraBlockId) return;
        if (!isCommercial && !isExperimental && !isTrailer && block.id === 'skin_genre') return;

        // Surface block filtering logic
        if (isSkinBlock) {
            let keepOld = true;
            if (surfaceBlockIds.has(block.id)) {
                // 12-word weighted filter: skip if not selected
                if (!surfaceParticipants.has(block.id)) keepOld = false;
            } else if (independentSurfaceBlocks.has(block.id)) {
                // Independent surface blocks: 50% chance to participate
                if (Math.random() >= 0.5) keepOld = false;
            }
            if (!keepOld) {
                const locks = getVisibleLocks(block.id);
                newState[block.id] = (newState[block.id] || []).filter(t => locks.includes(t));
                return;
            }

            // skin_animation_genre: skip (deprecated)
            if (block.id === 'skin_animation_genre') return;
        }

        let libId = `${block.id}_lib`;
        let category = library.find(c => c.id === libId);
        if (category && category.items.length > 0) {
            const locks = getVisibleLocks(block.id);
            const isCoreBlock = isCoreFormulaBlock(block.id);
            if (block.id === 'engine_m7b' && locks.length === 0 && Math.random() < M7B_RANDOM_EMPTY_PROBABILITY) {
                newState[block.id] = [];
                processedCoreBlocks.add(block.id);
                return;
            }

            // Use RANDOM_RANGES for count determination
            const count = getRandomCount(block.id);

            // For 0-count blocks (0-1 range that rolled 0), clear them
            if (count === 0) {
                newState[block.id] = (newState[block.id] || []).filter(t => locks.includes(t));
                if (isCoreBlock) processedCoreBlocks.add(block.id);
                return;
            }

            let availableItems = category.items;
            if (['skin_location', 'skin_profession', 'skin_society', 'skin_ideology', 'comm_skin_scenario', 'engine_m1', 'skin_origin'].includes(block.id)) {
                availableItems = filterItemsByArchetype(category.items, currentArchetype, block.id);
                if (availableItems.length === 0) availableItems = category.items;
            }

            if (block.id === 'skin_gender') {
                const locks = getVisibleLocks(block.id);
                if (locks.length > 0) {
                    newState[block.id] = locks;
                    return;
                }
                const selectedGender = pickBiasedBinaryGenderName(availableItems);
                newState[block.id] = selectedGender ? [selectedGender] : [];
                return;
            }

            const keptTags = (newState[block.id] || []).filter(t => locks.includes(t));
            let needed = Math.max(0, Math.max(count, keptTags.length) - keptTags.length);
            needed = clampCoreFormulaNeededCount(block.id, needed, keptTags.length, coreFormulaRandomTotal, processedCoreBlocks, currentFieldState, lockedModules, lockedTags);
            const available = availableItems.filter(i => !keptTags.includes(i.name));
            const selected = pickRandomItemsForBlock(block.id, available, needed, newState).map(item => item.name);
            newState[block.id] = [...keptTags, ...selected];
            if (isCoreBlock) coreFormulaRandomTotal += selected.length;
            if (isCoreBlock) processedCoreBlocks.add(block.id);
        }
    });
    return driverType === DriverType.NARRATIVE ? withDefaultSvSelections(newState) : newState;
};

export const resetSkinState = (
    driverType: DriverType,
    currentFieldState: NarrativeFieldState,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>
): NarrativeFieldState => {
    let skinBlocks: NarrativeBlockDef[] = [];
    let lockKey = driverType === DriverType.COMMERCIAL ? 'COMM_SKIN' : (driverType === DriverType.EXPERIMENTAL ? 'EXP_SKIN' : (driverType === DriverType.TRAILER ? 'TRL_SKIN' : 'NARR_SKIN'));
    if (driverType === DriverType.COMMERCIAL) skinBlocks = COMM_SKIN_BLOCKS;
    else if (driverType === DriverType.EXPERIMENTAL) skinBlocks = EXPERIMENTAL_SKIN_BLOCKS;
    else if (driverType === DriverType.TRAILER) skinBlocks = TRAILER_SKIN_BLOCKS;
    else skinBlocks = ALL_SKIN_BLOCKS;
    if (lockedModules[lockKey]) return currentFieldState;
    const newState = { ...currentFieldState };

    // Clear Time/Location if not locked, preserving visible locked values
    if (!lockedModules['skin_year_exact']) newState['skin_year_exact'] = getVisibleLockedTags(currentFieldState, lockedTags, 'skin_year_exact');
    if (!lockedModules['skin_country_exact']) newState['skin_country_exact'] = getVisibleLockedTags(currentFieldState, lockedTags, 'skin_country_exact');

    skinBlocks.forEach(block => {
        if (!lockedModules[block.id]) {
            const locks = getVisibleLockedTags(currentFieldState, lockedTags, block.id);
            newState[block.id] = (newState[block.id] || []).filter(t => locks.includes(t));
        }
    });
    return driverType === DriverType.NARRATIVE ? withDefaultSvSelections(newState) : newState;
};

export const resetFormulaState = (
    driverType: DriverType,
    currentFieldState: NarrativeFieldState,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>
): NarrativeFieldState => {
     let engineBlocks: NarrativeBlockDef[] = [];

     if (driverType === DriverType.COMMERCIAL) engineBlocks = COMMERCIAL_ENGINE_BLOCKS;
     else if (driverType === DriverType.EXPERIMENTAL) engineBlocks = EXPERIMENTAL_ENGINE_BLOCKS;
     else if (driverType === DriverType.TRAILER) engineBlocks = TRAILER_ENGINE_BLOCKS;
     else if (driverType === DriverType.AESTHETIC) engineBlocks = AESTHETIC_ENGINE_BLOCKS;
     else if (driverType === DriverType.CONCEPT_DESIGN) engineBlocks = CONCEPT_ENGINE_BLOCKS;
     else engineBlocks = NARRATIVE_ENGINE_BLOCKS;

     const newState = { ...currentFieldState };

     engineBlocks.forEach(block => {
        let isLocked = lockedModules[block.id];

        if (driverType === DriverType.AESTHETIC) {
            const globalCategory = AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY[block.id];
            if (globalCategory && lockedModules[globalCategory]) isLocked = true;
            if (HUMAN_BLOCKS.includes(block.id) && lockedModules['SUBJECT']) isLocked = true;
            if (CREATURE_BLOCKS.includes(block.id) && lockedModules['SUBJECT']) isLocked = true;
        }

        if (!isLocked) {
             const locks = getVisibleLockedTags(currentFieldState, lockedTags, block.id);
             newState[block.id] = (newState[block.id] || []).filter(t => locks.includes(t));
        }
     });

     return newState;
};

export const randomizeSkinState = (
    driverType: DriverType,
    currentFieldState: NarrativeFieldState,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>
): NarrativeFieldState => {
    const globalRandom = generateGlobalRandomState(driverType, currentFieldState, lockedModules, lockedTags);
    let skinBlocks: NarrativeBlockDef[] = [];
    let lockKey = driverType === DriverType.COMMERCIAL ? 'COMM_SKIN' : (driverType === DriverType.EXPERIMENTAL ? 'EXP_SKIN' : (driverType === DriverType.TRAILER ? 'TRL_SKIN' : 'NARR_SKIN'));
    if (driverType === DriverType.COMMERCIAL) skinBlocks = COMM_SKIN_BLOCKS;
    else if (driverType === DriverType.EXPERIMENTAL) skinBlocks = EXPERIMENTAL_SKIN_BLOCKS;
    else if (driverType === DriverType.TRAILER) skinBlocks = TRAILER_SKIN_BLOCKS;
    else skinBlocks = ALL_SKIN_BLOCKS;
    if (lockedModules[lockKey]) return currentFieldState;
    const newState = { ...currentFieldState };

    // Copy Time/Location if not locked
    if (!lockedModules['skin_year_exact']) newState['skin_year_exact'] = globalRandom['skin_year_exact'] || [];
    if (!lockedModules['skin_country_exact']) newState['skin_country_exact'] = globalRandom['skin_country_exact'] || [];

    skinBlocks.forEach(block => {
        if (!lockedModules[block.id]) {
            newState[block.id] = globalRandom[block.id] || [];
        }
    });
    return driverType === DriverType.NARRATIVE ? withDefaultSvSelections(newState) : newState;
};

export const randomizeFormulaState = (
    driverType: DriverType,
    currentFieldState: NarrativeFieldState,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>,
    subjectType: SubjectType,
    aestheticMode: AestheticMode
): NarrativeFieldState => {
     const isAesthetic = driverType === DriverType.AESTHETIC;
     const isConceptDesign = driverType === DriverType.CONCEPT_DESIGN;
     let ENGINE_BLOCKS = isConceptDesign ? CONCEPT_ENGINE_BLOCKS : (isAesthetic ? AESTHETIC_ENGINE_BLOCKS : (driverType === DriverType.COMMERCIAL ? COMMERCIAL_ENGINE_BLOCKS : (driverType === DriverType.EXPERIMENTAL ? EXPERIMENTAL_ENGINE_BLOCKS : (driverType === DriverType.TRAILER ? TRAILER_ENGINE_BLOCKS : NARRATIVE_ENGINE_BLOCKS))));
     let ENGINE_LIBRARY = isConceptDesign ? CONCEPT_ENGINE_LIBRARY : (isAesthetic ? AESTHETIC_ENGINE_LIBRARY : (driverType === DriverType.COMMERCIAL ? COMMERCIAL_ENGINE_LIBRARY : (driverType === DriverType.EXPERIMENTAL ? EXPERIMENTAL_ENGINE_LIBRARY : (driverType === DriverType.TRAILER ? TRAILER_ENGINE_LIBRARY : NARRATIVE_ENGINE_LIBRARY))));

     const newState = { ...currentFieldState };
     const currentEraTags = newState['skin_era'] || [];
     const currentEra = currentEraTags.length > 0 ? currentEraTags[0] : "";
     const archetype = getArchetypeFromEra(currentEra);

     const checkLock = (id: string) => {
        if (lockedModules[id]) return true;
        if (isAesthetic) {
            const globalCategory = AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY[id];
            if (globalCategory && lockedModules[globalCategory]) return true;
            if (HUMAN_BLOCKS.includes(id) && lockedModules['SUBJECT']) return true;
            if (CREATURE_BLOCKS.includes(id) && lockedModules['SUBJECT']) return true;
        }
        return false;
     };
     let coreFormulaRandomTotal = isAesthetic ? 0 : countPreservedCoreFormulaTags(currentFieldState, lockedModules, lockedTags);
     const processedCoreBlocks = new Set<string>();

    if (isAesthetic) {
        if (aestheticMode === 'REALISM') {
             newState['aes_anim_director'] = [];
             newState['aes_art_movement'] = [];
        } else {
             ['aes_director_style', 'aes_photo_style', 'aes_art_style', 'aes_color_palette'].forEach(id => newState[id] = []);
        }
    }

    ENGINE_BLOCKS.forEach(block => {
      if (checkLock(block.id)) return;
      if (isAesthetic) {
          if (block.id === 'aes_eye_fx') return;
          const isSubjHuman = HUMAN_BLOCKS.includes(block.id);
          const isSubjCreature = CREATURE_BLOCKS.includes(block.id);
          if (aestheticMode === 'REALISM') {
              if (['aes_art_medium', 'aes_line_quality', 'aes_canvas_texture', 'aes_render_art'].includes(block.id)) return;
          } else {
              if (['aes_camera_system', 'aes_lens_series', 'aes_texture_render', 'aes_physical_grain', 'aes_base_tone', 'aes_color_science', 'aes_render_real'].includes(block.id)) return;
          }
          const globalCategory = AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY[block.id];
          const isCurrentModeSubject = (subjectType === 'HUMAN' && isSubjHuman) || (subjectType === 'CREATURE' && isSubjCreature);
          if (!globalCategory && !isCurrentModeSubject) return;
      }

      const libId = `${block.id}_lib`;
      const category = ENGINE_LIBRARY.find(c => c.id === libId);

      if (category && category.items.length > 0) {
          const locks = getVisibleLockedTags(newState, lockedTags, block.id);
          const isCoreBlock = !isAesthetic && isCoreFormulaBlock(block.id);
          if (block.id === 'engine_m7b' && locks.length === 0 && Math.random() < M7B_RANDOM_EMPTY_PROBABILITY) {
              newState[block.id] = [];
              processedCoreBlocks.add(block.id);
              return;
          }

          let count = 1;
          if (isConceptDesign) {
              const limit = BLOCK_LIMITS[block.id] || 1;
              if (['cd_identity_seed', 'cd_body_type', 'cd_creature_class', 'cd_costume_logic', 'cd_palette'].includes(block.id)) {
                  count = Math.min(2, limit);
              } else if (['cd_face_features', 'cd_makeup_style', 'cd_skin_texture', 'cd_surface_state', 'cd_body_features', 'cd_body_markings', 'cd_body_damage', 'cd_body_modification', 'cd_creature_head', 'cd_creature_body', 'cd_creature_texture', 'cd_surface_material', 'cd_negative_rules'].includes(block.id)) {
                  count = Math.min(3, limit);
              } else {
                  count = 1;
              }
          } else if (isAesthetic) {
              // Aesthetic mode retains its own count logic
              const limit = BLOCK_LIMITS[block.id] || 1;
              if (block.id === 'aes_skin_texture' || block.id === 'aes_body_features' || block.id === 'aes_face_features') {
                   count = Math.floor(Math.random() * 2) + 1;
              } else if (limit > 1) {
                  if (block.id === 'aes_hair_color') {
                      count = Math.random() < 0.7 ? 1 : 2;
                  } else {
                      count = Math.floor(Math.random() * Math.min(limit, 3)) + 1;
                  }
              }
          } else {
              // Non-aesthetic: use RANDOM_RANGES protocol v2.0
              count = getRandomCount(block.id);
              if (count === 0) {
                  newState[block.id] = (newState[block.id] || []).filter(t => locks.includes(t));
                  if (isCoreBlock) processedCoreBlocks.add(block.id);
                  return;
              }
          }
          let availableItems = category.items;
          if (isAesthetic && block.id === 'aes_eye_shape') availableItems = availableItems.filter(i => i.group === 'A. 美型');
          const currentTags = newState[block.id] || [];
          const keptTags = currentTags.filter(t => locks.includes(t));
          let needed = Math.max(0, Math.max(count, keptTags.length) - keptTags.length);
          needed = clampCoreFormulaNeededCount(block.id, needed, keptTags.length, coreFormulaRandomTotal, processedCoreBlocks, currentFieldState, lockedModules, lockedTags);
          const available = availableItems.filter(i => !currentTags.includes(i.name));
          const selected = pickRandomItemsForBlock(block.id, available, needed, newState).map(item => item.name);
          newState[block.id] = [...keptTags, ...selected];
          if (isCoreBlock) coreFormulaRandomTotal += selected.length;
          if (isCoreBlock) processedCoreBlocks.add(block.id);
      }
    });
    return newState;
};

export const generateGlobalResetState = (
    driverType: DriverType,
    currentFieldState: NarrativeFieldState,
    lockedModules: Record<string, boolean>,
    lockedTags: Record<string, string[]>
): NarrativeFieldState => {
     let engineBlocks: NarrativeBlockDef[] = [];

     if (driverType === DriverType.COMMERCIAL) {
         engineBlocks = [...COMMERCIAL_ENGINE_BLOCKS, ...COMM_SKIN_BLOCKS];
     } else if (driverType === DriverType.EXPERIMENTAL) {
         engineBlocks = [...EXPERIMENTAL_ENGINE_BLOCKS, ...EXPERIMENTAL_SKIN_BLOCKS];
     } else if (driverType === DriverType.TRAILER) {
         engineBlocks = [...TRAILER_ENGINE_BLOCKS, ...TRAILER_SKIN_BLOCKS];
     } else if (driverType === DriverType.AESTHETIC) {
         engineBlocks = [...AESTHETIC_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS];
     } else if (driverType === DriverType.CONCEPT_DESIGN) {
         engineBlocks = [...CONCEPT_ENGINE_BLOCKS];
     } else {
         engineBlocks = [...NARRATIVE_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS];
     }

     const newState = { ...currentFieldState };

     // Explicitly handle aes_palette_preset for Aesthetic Driver
     if (driverType === DriverType.AESTHETIC) {
         const presetId = 'aes_palette_preset';
         // Check lock status
         let isLocked = lockedModules[presetId];
         const globalCategory = AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY[presetId];
         if (globalCategory && lockedModules[globalCategory]) isLocked = true;

         if (!isLocked) {
             const locks = getVisibleLockedTags(currentFieldState, lockedTags, presetId);
             newState[presetId] = (newState[presetId] || []).filter(t => locks.includes(t));
         }
     }

     // Reset Time/Location if not locked, preserving visible locked values
     if (!lockedModules['skin_year_exact']) newState['skin_year_exact'] = getVisibleLockedTags(currentFieldState, lockedTags, 'skin_year_exact');
     if (!lockedModules['skin_country_exact']) newState['skin_country_exact'] = getVisibleLockedTags(currentFieldState, lockedTags, 'skin_country_exact');

     engineBlocks.forEach(block => {
        let isLocked = lockedModules[block.id];

        if (driverType === DriverType.AESTHETIC) {
            const globalCategory = AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY[block.id];
            if (globalCategory && lockedModules[globalCategory]) isLocked = true;
            if (HUMAN_BLOCKS.includes(block.id) && lockedModules['SUBJECT']) isLocked = true;
            if (CREATURE_BLOCKS.includes(block.id) && lockedModules['SUBJECT']) isLocked = true;
        }
        if (driverType === DriverType.CONCEPT_DESIGN) {
            if (block.id.startsWith('cd_') && lockedModules['CORE'] && ['cd_subject_kind', 'cd_identity_seed', 'cd_emotional_core', 'cd_negation_logic', 'cd_design_sheet'].includes(block.id)) isLocked = true;
        }

        if (!isLocked) {
             const locks = getVisibleLockedTags(currentFieldState, lockedTags, block.id);
             newState[block.id] = (newState[block.id] || []).filter(t => locks.includes(t));
        }
     });

     return driverType === DriverType.NARRATIVE ? withDefaultSvSelections(newState) : newState;
};
