
import { LibraryCategoryDef, LibraryItemDef } from '../types';

// 核心叙事数据
import { NARRATIVE_ENGINE_LIBRARY } from '../data/engine_core/narrative_engine';


// 皮肤词库 (已升级为 engine_surface 新版 patch 数据源)
import { SKIN_LIBRARY } from '../data/narrative/skin_libraries';

// 保留旧版独立引用以兼容 GENRE/MOTIF 的 blockId 特殊处理
import { SUR1_DATA } from '../data/engine_surface/SUR1';

// Commercial
import { COMM_SKIN_LIBRARY } from '../data/aesthetic/commercial_skin';
import { COMMERCIAL_ENGINE_LIBRARY } from '../data/aesthetic/commercial_data';

// Experimental & Poetic
import { EXPERIMENTAL_SKIN_LIBRARY } from '../data/aesthetic/experimental_skin';
import { POETIC_ENGINE_LIBRARY } from '../data/aesthetic/poetic_data';

// Trailer
import { TRAILER_ENGINE_LIBRARY } from '../data/aesthetic/trailer_data';
import { TRAILER_SKIN_LIBRARY } from '../data/aesthetic/trailer_skin';

// Aesthetic Main
import { AESTHETIC_ENGINE_LIBRARY } from '../data/aesthetic/core';
import { CONCEPT_ENGINE_LIBRARY } from '../data/concept_design/core';

// 1. Master Collection of ALL Libraries
// This allows us to search by Library ID globally
const ALL_LIBRARIES_COLLECTION: LibraryCategoryDef[][] = [
    NARRATIVE_ENGINE_LIBRARY,
    SKIN_LIBRARY,
    COMMERCIAL_ENGINE_LIBRARY,
    COMM_SKIN_LIBRARY,
    EXPERIMENTAL_SKIN_LIBRARY,
    POETIC_ENGINE_LIBRARY,
    TRAILER_ENGINE_LIBRARY,
    TRAILER_SKIN_LIBRARY,
    AESTHETIC_ENGINE_LIBRARY,
    CONCEPT_ENGINE_LIBRARY
];

// Cache for quick BlockID -> Library Items lookup
let _specificLibCache: Record<string, LibraryItemDef[]> = {};

const getItemsForBlockId = (blockId: string): LibraryItemDef[] | null => {
    if (_specificLibCache[blockId]) return _specificLibCache[blockId];

    // Standard Naming Convention: blockId "aes_age" -> libId "aes_age_lib"
    let targetLibId = `${blockId}_lib`;
    
    // Handle Known Exceptions/Aliases
    if (blockId === 'skin_era') targetLibId = 'skin_era_lib';
    
    // Special Case: Genre (SUR1) — now loaded from engine_surface
    if (blockId === 'skin_genre') {
        const items = SUR1_DATA.flatMap(c => c.items);
        _specificLibCache[blockId] = items;
        return items;
    }
    if (blockId === 'skin_animation_genre') {
        // Deprecated motif block — fallback to SUR1 data as well
        const items = SUR1_DATA.flatMap(c => c.items);
        _specificLibCache[blockId] = items;
        return items;
    }

    // Search for the specific library ID in all collections
    for (const collection of ALL_LIBRARIES_COLLECTION) {
        const category = collection.find(c => c.id === targetLibId);
        if (category) {
            _specificLibCache[blockId] = category.items;
            return category.items;
        }
    }

    // If exact library not found, return null (fallback to broader search later)
    return null;
};

// Fallback: Driver-based broad search (Legacy support)
let _libMap: Record<string, LibraryCategoryDef[]> | null = null;
const buildLibMap = () => {
    if (_libMap) return _libMap;
    _libMap = {
        'NARRATIVE': [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY],
        'COMMERCIAL': [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY],
        'EXPERIMENTAL': [...POETIC_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY],
        'TRAILER': [...TRAILER_ENGINE_LIBRARY, ...TRAILER_SKIN_LIBRARY],
        'AESTHETIC': [...AESTHETIC_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...COMMERCIAL_ENGINE_LIBRARY],
        'CONCEPT_DESIGN': [...CONCEPT_ENGINE_LIBRARY]
    };
    return _libMap;
};

// Global Cache for Last Resort
let _allItemsCache: any[] | null = null;
const getAllItems = () => {
    if (_allItemsCache) return _allItemsCache;
    _allItemsCache = ALL_LIBRARIES_COLLECTION.flat().flatMap(c => c.items);
    return _allItemsCache;
};

export const findItemDetails = (tagName: string, blockId?: string): string => {
    const item = findItemFull(tagName, blockId);
    if (item) {
        let details = `Definition: ${item.def}`;
        if (item.directive) {
            if (typeof item.directive === 'string') {
                details += ` | ${item.directive}`;
            } else {
                details += ` | ${item.directive.tension}`;
            }
        } else if (item.core) {
            details += ` | Core: ${item.core}`;
        }
        if (item.flaw) details += ` | Symptom: ${item.flaw}`;
        if (item.logic) details += ` | Logical Constraint: ${item.logic}`;
        // ★ PATCH 注入：将指令性补丁信息注入上下文
        if (item.patch) {
            if (item.patch.mechanics) details += ` | ⚙️ Mechanics: ${item.patch.mechanics}`;
            if (item.patch.aesthetic) details += ` | 🎨 Aesthetic: ${item.patch.aesthetic}`;
            if (item.patch.runtime) details += ` | 🔴 Runtime: ${item.patch.runtime}`;
        }
        return details;
    }
    return "";
};

/**
 * 提取指定词条的 patch.runtime 硬约束指令。
 * 供 narrativeGenerator 注入到 System Prompt 中作为 AI 必须遵守的红线。
 */
export const extractPatchConstraints = (tagName: string, blockId?: string): {
    mechanics: string | null;
    aesthetic: string | null;
    runtime: string | null;
} => {
    const item = findItemFull(tagName, blockId);
    if (item?.patch) {
        return {
            mechanics: item.patch.mechanics || null,
            aesthetic: item.patch.aesthetic || null,
            runtime: item.patch.runtime || null
        };
    }
    return { mechanics: null, aesthetic: null, runtime: null };
};

/**
 * 提取词条的导演笔记（directive 优先，回退到 def）。
 * 供 V3 prompt builder 使用——以导演语言注入 AI，而非理论语言。
 *
 * 支持三面 directive：{ bright, dark, tension }。
 * 当 face 参数指定时，返回 topology + 对应面的 directive。
 * 未指定 face 时，返回 topology + tension 面（默认）。
 * 旧版 string 格式的 directive 不受影响。
 */
export const getDirective = (tagName: string, blockId?: string, face?: 'bright' | 'dark' | 'tension'): {
    name: string;
    def: string;
    directive: string | null;
    topology: string | null;
    core: string | null;
} | null => {
    const item = findItemFull(tagName, blockId);
    if (!item) return null;

    let directiveText: string | null = null;
    const topology = item.topology || null;

    if (item.directive) {
        if (typeof item.directive === 'string') {
            // 旧版 string 格式：直接返回
            directiveText = item.directive;
        } else {
            // 新版三面格式：返回指定面（默认 tension）
            const selectedFace = face || 'tension';
            directiveText = item.directive[selectedFace] || null;
        }
    }

    return {
        name: item.name,
        def: item.def || '',
        directive: directiveText,
        topology,
        core: item.core || null,
    };
};

export const findItemFull = (tagName: string, blockId?: string) => {
    if (!tagName) return null;
    
    // Strategy 1: Ultra-Strict Block ID Locking (Highest Precision)
    // If we know the blockId, we ONLY search inside that specific library.
    if (blockId) {
        const specificItems = getItemsForBlockId(blockId);
        if (specificItems && specificItems.length > 0) {
             // 1. Exact Full Name Match
             let found = specificItems.find(i => i.name === tagName || i.id === tagName);
             
             // 2. Exact Chinese Name Match (Handle "Name (En)" format)
             if (!found) {
                 const simpleTag = tagName.split('(')[0].trim();
                 found = specificItems.find(i => i.name.split('(')[0].trim() === simpleTag);
             }
             
             // If we found the library but not the item, IT DOES NOT EXIST there.
             // We do NOT fallback to global search to avoid cross-contamination (e.g. matching "Execution" in Narrative when looking for "Execution" in Aesthetic).
             if (found) return found;
             
             // NOTE: If specificItems existed but item wasn't found, we return null immediately.
             // This prevents "Executing" (Aesthetic) from matching "Public Execution" (Narrative) just because they share a word.
             // However, to be safe against user-typed inputs that might be slightly off, we allow a very strict fallback below only if we are desperate.
             // But for UI selection, this should be enough.
        }
    }

    // Strategy 2: Driver-Based Scope (Medium Precision)
    // Used when blockId doesn't map to a specific single library (e.g. some mixed blocks) or lookup failed.
    if (blockId) {
        const libMap = buildLibMap();
        let targetLibs: LibraryCategoryDef[] = [];
        
        if (blockId.startsWith('comm_')) targetLibs = libMap['COMMERCIAL'];
        else if (blockId.startsWith('exp_') || blockId.startsWith('poe_')) targetLibs = libMap['EXPERIMENTAL'];
        else if (blockId.startsWith('trl_')) targetLibs = libMap['TRAILER'];
        else if (blockId.startsWith('aes_')) targetLibs = libMap['AESTHETIC'];
        else if (blockId.startsWith('cd_')) targetLibs = libMap['CONCEPT_DESIGN'];
        else if (blockId.startsWith('skin_') || blockId.startsWith('engine_')) targetLibs = libMap['NARRATIVE'];
        
        if (targetLibs.length > 0) {
             const allTargetItems = targetLibs.flatMap(c => c.items);
             let found = allTargetItems.find(i => i.name === tagName || i.id === tagName);
             if (!found) {
                 const simpleTag = tagName.split('(')[0].trim();
                 found = allTargetItems.find(i => i.name.split('(')[0].trim() === simpleTag);
             }
             if (found) return found;
        }
    }

    // Strategy 3: Global Search (Low Precision - Last Resort)
    // Only used if blockId is missing or everything else failed.
    const allItems = getAllItems();
    let found = allItems.find(i => i.name === tagName || i.id === tagName);
    if (!found) {
        const simpleTag = tagName.split('(')[0].trim();
        found = allItems.find(i => i.name.split('(')[0].trim() === simpleTag);
    }
    
    return found;
};
