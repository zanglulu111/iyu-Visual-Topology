
import { NarrativeFieldState, DriverType, SubjectType, NarrativeBlockDef, LibraryCategoryDef, WorldLawConfig, AestheticMode } from '../types';
import { 
  NARRATIVE_ENGINE_BLOCKS, 
  NARRATIVE_ENGINE_LIBRARY, 
  COMMERCIAL_ENGINE_BLOCKS, 
  COMMERCIAL_ENGINE_LIBRARY, 
  EXPERIMENTAL_ENGINE_BLOCKS, 
  EXPERIMENTAL_ENGINE_LIBRARY, 
  AESTHETIC_ENGINE_BLOCKS, 
  AESTHETIC_ENGINE_LIBRARY, 
  TRAILER_ENGINE_BLOCKS, 
  TRAILER_ENGINE_LIBRARY,
  COMM_SKIN_BLOCKS, 
  COMM_SKIN_LIBRARY,
  EXPERIMENTAL_SKIN_BLOCKS, 
  EXPERIMENTAL_SKIN_LIBRARY,
  TRAILER_SKIN_BLOCKS, 
  TRAILER_SKIN_LIBRARY,
  BLOCK_LIMITS,
  AES_COLOR_PRESETS,
  COUNTRY_PRESETS
} from '../constants';
import { ALL_SKIN_BLOCKS, SKIN_LIBRARY } from '../data/skin_libraries';
import { GENRE_CATEGORIES } from '../data/genres';
import { ANIMATION_GENRE_CATEGORIES } from '../data/animation_genres';
import { MASTER_PRESETS, MASTER_PRESETS_REALISM, MASTER_PRESETS_STYLIZED } from '../data/master_presets';

// Constants for Aesthetic Mode Logic
export const HUMAN_BLOCKS = [
    'aes_age', 'aes_gender', 'aes_body_type', 'aes_ethnicity', 'aes_occupation', 'aes_persona', 
    'aes_hair_color', 'aes_hair_style_f', 'aes_hair_style_m', 'aes_eye_color', 'aes_eye_shape', 'aes_eye_fx', 'aes_face_features', 'aes_expression', 'aes_body_features', 'aes_skin_texture', 
    // REMOVED: 'aes_clothing', 'aes_accessories', 'aes_prop_held',
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
    'aes_scene_real': 'STAGE', 'aes_scene_abstract': 'STAGE', 'aes_scene_surreal': 'STAGE', 'skin_era': 'STAGE', 'aes_air_medium': 'STAGE', 'aes_a3': 'STAGE', 'aes_weather': 'STAGE', 'aes_atmosphere': 'STAGE', 'aes_particles': 'STAGE', 'aes_synesthesia': 'STAGE',
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

const pickRandom = (blockId: string, count: number, currentTags: string[], lockedTags: string[], libItems: any[]) => {
    if (!libItems || libItems.length === 0) return [];
    const keptTags = currentTags.filter(t => lockedTags.includes(t));
    if (keptTags.length >= count) return keptTags.slice(0, count);
    
    const needed = Math.max(0, count - keptTags.length);
    const available = libItems.filter(i => !keptTags.includes(i.name));
    const shuffled = [...available].sort(() => 0.5 - Math.random());
    return [...keptTags, ...shuffled.slice(0, Math.min(needed, shuffled.length)).map(i => i.name)];
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
    } else if (driverType === DriverType.EXPERIMENTAL) {
        fullLibrary = [...EXPERIMENTAL_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY]; 
    } else if (driverType === DriverType.TRAILER) {
        fullLibrary = [...TRAILER_ENGINE_LIBRARY, ...TRAILER_SKIN_LIBRARY];
    } else {
        fullLibrary = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES, ...ANIMATION_GENRE_CATEGORIES]; 
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
        if (available.length > 0) newTag = available[Math.floor(Math.random() * available.length)].name;
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
    
    // Clear legacy blocks if present
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
    if (isAesthetic) return generateAestheticSmartRandom(currentFieldState, 'HUMAN', lockedModules, lockedTags, 'REALISM');

    const isCommercial = driverType === DriverType.COMMERCIAL;
    const isExperimental = driverType === DriverType.EXPERIMENTAL;
    const isTrailer = driverType === DriverType.TRAILER;
    let skinLockKey = isCommercial ? 'COMM_SKIN' : (isExperimental ? 'EXP_SKIN' : (isTrailer ? 'TRL_SKIN' : 'NARR_SKIN'));
    const isSkinMasterLocked = lockedModules[skinLockKey];

    let currentArchetype: Archetype = 'MODERN'; 
    let eraBlockId = 'skin_era'; 
    const lockedEraTags = lockedTags[eraBlockId] || [];
    const currentEraTags = currentFieldState[eraBlockId] || [];
    let activeEraTag = null;
    if (lockedEraTags.length > 0) activeEraTag = lockedEraTags[0];
    else if (lockedModules[eraBlockId] && currentEraTags.length > 0) activeEraTag = currentEraTags[0]; 
    if (!activeEraTag) {
        const eraLib = SKIN_LIBRARY.find(c => c.id === 'skin_era_lib');
        if (eraLib && !lockedModules[eraBlockId] && !isSkinMasterLocked && !isCommercial && !isExperimental && !isTrailer) {
             const randomEraItem = eraLib.items[Math.floor(Math.random() * eraLib.items.length)];
             activeEraTag = randomEraItem.name;
        }
    }
    if (activeEraTag) currentArchetype = getArchetypeFromEra(activeEraTag);

    // --- TIME/LOCATION RANDOMIZATION ---
    // If not locked, generate random coordinates
    let randomYear = currentFieldState['skin_year_exact']?.[0];
    let randomCountry = currentFieldState['skin_country_exact']?.[0];

    if (!lockedModules['skin_year_exact']) {
        // Random year between -2000 and 2050
        const year = Math.floor(Math.random() * (2050 - (-2000) + 1)) + (-2000);
        randomYear = year.toString();
    }
    
    if (!lockedModules['skin_country_exact']) {
        const r = COUNTRY_PRESETS[Math.floor(Math.random() * COUNTRY_PRESETS.length)];
        // Use CN as default for randomizer consistency, UI will auto-flip based on lang
        randomCountry = r.cn;
    }
    // ------------------------------------

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
        library = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES, ...ANIMATION_GENRE_CATEGORIES]; 
    }
    const newState = { ...currentFieldState };
    if (activeEraTag && !lockedModules[eraBlockId] && !isSkinMasterLocked && blocks.some(b => b.id === eraBlockId)) newState[eraBlockId] = [activeEraTag];
    
    // Apply Random Time/Location
    if (randomYear) newState['skin_year_exact'] = [randomYear];
    if (randomCountry) newState['skin_country_exact'] = [randomCountry];

    // --- Genre Mixing Logic for Narrative Driver ---
    if (!isCommercial && !isExperimental && !isTrailer && !isSkinMasterLocked) {
        const genreId = 'skin_genre';
        const animId = 'skin_animation_genre';
        
        if (!lockedModules[genreId] && !lockedModules[animId]) {
            const totalGenreCount = Math.random() < 0.5 ? 1 : 2; 
            
            const genreLib = GENRE_CATEGORIES.flatMap(c => c.items).map(i => ({...i, blockId: genreId}));
            const animLib = ANIMATION_GENRE_CATEGORIES.flatMap(c => c.items).map(i => ({...i, blockId: animId}));
            const combinedPool = [...genreLib, ...animLib];
            
            const lockedGenre = lockedTags[genreId] || [];
            const lockedAnim = lockedTags[animId] || [];
            const lockedItems = [
                ...genreLib.filter(i => lockedGenre.includes(i.name)),
                ...animLib.filter(i => lockedAnim.includes(i.name))
            ];
            
            if (lockedItems.length >= totalGenreCount) {
                newState[genreId] = lockedGenre;
                newState[animId] = lockedAnim;
            } else {
                const needed = totalGenreCount - lockedItems.length;
                const available = combinedPool.filter(i => !lockedGenre.includes(i.name) && !lockedAnim.includes(i.name));
                const shuffled = [...available].sort(() => 0.5 - Math.random());
                const picked = shuffled.slice(0, needed);
                
                const finalGenre = [...lockedGenre, ...picked.filter(i => i.blockId === genreId).map(i => i.name)];
                const finalAnim = [...lockedAnim, ...picked.filter(i => i.blockId === animId).map(i => i.name)];
                
                newState[genreId] = finalGenre;
                newState[animId] = finalAnim;
            }
        }
    }

    blocks.forEach(block => {
        if (lockedModules[block.id]) return;
        let isSkinBlock = isCommercial ? COMM_SKIN_BLOCKS.some(b => b.id === block.id) : (isExperimental ? EXPERIMENTAL_SKIN_BLOCKS.some(b => b.id === block.id) : (isTrailer ? TRAILER_SKIN_BLOCKS.some(b => b.id === block.id) : ALL_SKIN_BLOCKS.some(b => b.id === block.id)));
        if (isSkinBlock && isSkinMasterLocked) return;
        
        if (block.id === eraBlockId) return; 
        
        if (!isCommercial && !isExperimental && !isTrailer && (block.id === 'skin_genre' || block.id === 'skin_animation_genre')) return;

        let libId = `${block.id}_lib`;
        let category = library.find(c => c.id === libId);
        if (category && category.items.length > 0) {
             const limit = BLOCK_LIMITS[block.id] || 1;
             let count = 1;
             if (limit > 1) count = Math.floor(Math.random() * limit) + 1;
             let availableItems = category.items;
             if (block.id === 'skin_location' || block.id === 'skin_profession' || block.id === 'skin_society' || block.id === 'skin_ideology' || block.id === 'comm_skin_scenario' || block.id === 'engine_m1' || block.id === 'skin_origin') {
                 availableItems = filterItemsByArchetype(category.items, currentArchetype, block.id);
                 if (availableItems.length === 0) availableItems = category.items;
             }
             const locks = lockedTags[block.id] || [];
             const keptTags = (newState[block.id] || []).filter(t => locks.includes(t));
             const needed = Math.max(0, count - keptTags.length);
             const available = availableItems.filter(i => !keptTags.includes(i.name));
             const selected: string[] = [];
             for(let i=0; i<needed; i++) {
                 if(available.length === 0) break;
                 const idx = Math.floor(Math.random() * available.length);
                 selected.push(available[idx].name);
                 available.splice(idx, 1);
             }
             newState[block.id] = [...keptTags, ...selected];
        }
    });
    return newState;
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
    
    // Clear Time/Location if not locked
    if (!lockedModules['skin_year_exact']) newState['skin_year_exact'] = [];
    if (!lockedModules['skin_country_exact']) newState['skin_country_exact'] = [];

    skinBlocks.forEach(block => {
        if (!lockedModules[block.id]) {
            const locks = lockedTags[block.id] || [];
            newState[block.id] = (newState[block.id] || []).filter(t => locks.includes(t));
        }
    });
    return newState;
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
             const locks = lockedTags[block.id] || [];
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
    return newState;
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
     let ENGINE_BLOCKS = isAesthetic ? AESTHETIC_ENGINE_BLOCKS : (driverType === DriverType.COMMERCIAL ? COMMERCIAL_ENGINE_BLOCKS : (driverType === DriverType.EXPERIMENTAL ? EXPERIMENTAL_ENGINE_BLOCKS : (driverType === DriverType.TRAILER ? TRAILER_ENGINE_BLOCKS : NARRATIVE_ENGINE_BLOCKS)));
     let ENGINE_LIBRARY = isAesthetic ? AESTHETIC_ENGINE_LIBRARY : (driverType === DriverType.COMMERCIAL ? COMMERCIAL_ENGINE_LIBRARY : (driverType === DriverType.EXPERIMENTAL ? EXPERIMENTAL_ENGINE_LIBRARY : (driverType === DriverType.TRAILER ? TRAILER_ENGINE_LIBRARY : NARRATIVE_ENGINE_LIBRARY)));
     
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
          const limit = BLOCK_LIMITS[block.id] || 1;
          let count = 1;
          if (isAesthetic && (block.id === 'aes_skin_texture' || block.id === 'aes_body_features' || block.id === 'aes_face_features')) {
               count = Math.floor(Math.random() * 2) + 1; 
          } else if (limit > 1) {
              if (block.id === 'aes_hair_color' && isAesthetic) {
                  count = Math.random() < 0.7 ? 1 : 2;
              } else {
                  count = Math.floor(Math.random() * Math.min(limit, 3)) + 1;
              }
          }
          let availableItems = category.items;
          if (isAesthetic && block.id === 'aes_eye_shape') availableItems = availableItems.filter(i => i.group === 'A. 美型');
          const locks = lockedTags[block.id] || [];
          const currentTags = newState[block.id] || [];
          const keptTags = currentTags.filter(t => locks.includes(t));
          const needed = Math.max(0, count - keptTags.length);
          const available = availableItems.filter(i => !currentTags.includes(i.name));
          const selected: string[] = [];
          for (let i = 0; i < needed; i++) {
             if (available.length === 0) break;
             const idx = Math.floor(Math.random() * available.length);
             selected.push(available[idx].name);
             available.splice(idx, 1);
          }
          newState[block.id] = [...keptTags, ...selected];
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
             const locks = lockedTags[presetId] || [];
             newState[presetId] = (newState[presetId] || []).filter(t => locks.includes(t));
         }
     }
     
     // Reset Time/Location if not locked
     if (!lockedModules['skin_year_exact']) newState['skin_year_exact'] = [];
     if (!lockedModules['skin_country_exact']) newState['skin_country_exact'] = [];

     engineBlocks.forEach(block => {
        let isLocked = lockedModules[block.id];
        
        if (driverType === DriverType.AESTHETIC) {
            const globalCategory = AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY[block.id];
            if (globalCategory && lockedModules[globalCategory]) isLocked = true;
            if (HUMAN_BLOCKS.includes(block.id) && lockedModules['SUBJECT']) isLocked = true;
            if (CREATURE_BLOCKS.includes(block.id) && lockedModules['SUBJECT']) isLocked = true;
        }

        if (!isLocked) {
             const locks = lockedTags[block.id] || [];
             newState[block.id] = (newState[block.id] || []).filter(t => locks.includes(t));
        }
     });
     
     return newState;
};