
import { NarrativeFieldState, SubjectType, AestheticLogicMode, LibraryItemDef } from '../types';
import { AESTHETIC_ENGINE_LIBRARY } from '../data/aesthetic/core';
import { SKIN_LIBRARY } from '../data/narrative/skin_libraries';
import { COMMERCIAL_ENGINE_LIBRARY } from '../data/aesthetic/commercial_data';
import { MASTER_PRESETS } from '../data/aesthetic/master_presets';
import { AES_COLOR_PRESETS } from '../data/aesthetic_libraries/color_presets';
import { findItemFull } from '../services/dataRegistry';

// Updated Helper: Uses the robust findItemFull from dataRegistry which supports cross-library search.
// It also handles special cases like Presets and Palettes internally if needed.
const findAestheticItemFull = (tagName: string, blockId?: string) => {
    if (!tagName) return null;

    // Special handling for specific blocks to ensure correct lookup source
    if (blockId === 'aes_palette_preset') {
        const simpleTag = tagName.split('(')[0].trim();
        const englishPartMatch = tagName.match(/\(([^)]+)\)/);
        const englishPart = englishPartMatch ? englishPartMatch[1].trim() : null;

        return MASTER_PRESETS.find(p => 
            p.id === tagName || 
            p.name === tagName || 
            p.name.split('(')[0].trim() === simpleTag || 
            (englishPart && p.name.includes(`(${englishPart})`))
        );
    }

    if (blockId === 'aes_color_palette') {
        const simpleTag = tagName.split('(')[0].trim();
        const englishPartMatch = tagName.match(/\(([^)]+)\)/);
        const englishPart = englishPartMatch ? englishPartMatch[1].trim() : null;

        return AES_COLOR_PRESETS.find(p => 
            p.id === tagName || 
            p.name === tagName || 
            p.name.split('(')[0].trim() === simpleTag || 
            (englishPart && p.name.includes(`(${englishPart})`))
        );
    }
    
    // Use the central registry for standard items
    return findItemFull(tagName, blockId);
};

export const generateAestheticPrompt = (
    fieldState: NarrativeFieldState,
    subjectType: SubjectType,
    lang: 'CN' | 'EN',
    customLibraryDefs: Record<string, { def: string; core: string }>,
    logicMode: AestheticLogicMode = 'DEFAULT',
    moduleOrder: string[] = ['PRESETS', 'PALETTE', 'STYLE', 'L1.1', 'L1.2', 'SUBJECT', 'STAGE', 'VIBE', 'RENDER'] // Default fallback
): string => {
    const isStylized = (fieldState['aes_stylized'] && fieldState['aes_stylized'].length > 0) || (fieldState['aes_art_medium'] && fieldState['aes_art_medium'].length > 0);

    // Extract English content from parenthesis: "中文 (English)" -> "English"
    const getEnglishName = (tag: string) => {
        const match = tag.match(/\((.*?)\)/);
        return match ? match[1].trim() : tag.trim();
    };

    // Helper to get tags formatted with definitions: "Name (Definition)"
    // logic matches the UI compiler logic
    const getTagsWithDef = (blockId: string): string[] => {
        const tags = fieldState[blockId];
        if (!tags || !Array.isArray(tags) || tags.length === 0) return [];
        
        return tags.map(tag => {
            // Special handling for custom text input fields (no definition lookup needed)
            if (blockId === 'aes_l2_custom' || blockId === 'aes_l3_custom') {
                 return tag;
            }

            const engName = getEnglishName(tag);
            // Try to find definition in custom defs first, then registry
            let def = "";
            if (customLibraryDefs && customLibraryDefs[tag]) {
                def = customLibraryDefs[tag].def;
            } else {
                const item = findAestheticItemFull(tag, blockId);
                if (item) {
                     if (lang === 'EN') {
                         // 1. Try defEn
                         if ((item as any).defEn) {
                             def = (item as any).defEn;
                         } 
                         // 2. If no defEn, check if def is English (does not contain Chinese characters).
                         // This prevents "Narrative" items (which have Chinese 'def') from leaking Chinese into English prompts.
                         // Aesthetic items usually have English 'def', so they will pass.
                         else if (item.def && !/[\u4e00-\u9fa5]/.test(item.def)) {
                             def = item.def;
                         }
                     } else {
                         // CN mode: Use def (usually CN, or EN if that's all there is)
                         def = item.def || "";
                     }
                }
            }
            
            // Clean up definition: Remove trailing punctuation (English . and Chinese 。)
            def = def.trim();
            if (def.endsWith('.') || def.endsWith('。')) {
                def = def.slice(0, -1);
            }

            if (def) {
                // Return "Tag (Def)"
                return `${engName} (${def})`;
            }
            return engName;
        });
    };

    // Helper to join tags with commas
    const join = (arr: string[]) => arr.filter(Boolean).join(", ");

    // --- 1. HARVESTING DATA INTO MODULE BUCKETS ---

    // Define Module Content Map
    const contentMap: Record<string, string> = {
        'PRESETS': "",
        'PALETTE': "",
        'STYLE': "",
        'L1.1': "",
        'L1.2': "",
        'SUBJECT': "",
        'STAGE': "",
        'VIBE': "",
        'RENDER': ""
    };

    // --- MODULE: PALETTE ---
    const palette = getTagsWithDef('aes_color_palette');
    if (palette.length > 0) contentMap['PALETTE'] = `Color Palette: ${join(palette)}`;

    // --- MODULE: STYLE (L0) ---
    const directorStyle = getTagsWithDef('aes_director_style');
    const photoStyle = getTagsWithDef('aes_photo_style');
    const artStyle = getTagsWithDef('aes_art_style');
    const animDirector = getTagsWithDef('aes_anim_director');
    const artMovement = getTagsWithDef('aes_art_movement');
    const posterStyle = getTagsWithDef('aes_poster_style');
    
    const styleParts = [];
    if (directorStyle.length > 0) styleParts.push(`visual style inspired by ${join(directorStyle)}`);
    if (photoStyle.length > 0) styleParts.push(`photography style of ${join(photoStyle)}`);
    if (artStyle.length > 0) styleParts.push(`artistic influence of ${join(artStyle)}`);
    if (animDirector.length > 0) styleParts.push(`influenced by animation director ${join(animDirector)}`);
    if (artMovement.length > 0) styleParts.push(`in the art style of ${join(artMovement)}`);
    if (posterStyle.length > 0) styleParts.push(`with ${join(posterStyle)} aesthetic`);
    
    if (styleParts.length > 0) contentMap['STYLE'] = `Visuals ${styleParts.join(", ")}`;

    // --- MODULE: L1.1 (Tech Base) ---
    const l1_1_Parts = [];
    // Realism
    const camera = getTagsWithDef('aes_camera_system');
    const opticalFormat = getTagsWithDef('aes_optical_format');
    const lens = getTagsWithDef('aes_lens_series');
    const baseTone = getTagsWithDef('aes_base_tone');
    const colorScience = getTagsWithDef('aes_color_science');
    const physicalGrain = getTagsWithDef('aes_physical_grain');
    const textureRender = getTagsWithDef('aes_texture_render');
    
    if (camera.length > 0) l1_1_Parts.push(`Shot on ${join(camera)}`);
    if (opticalFormat.length > 0) l1_1_Parts.push(`format ${join(opticalFormat)}`);
    if (lens.length > 0) l1_1_Parts.push(`using ${join(lens)}`);
    if (baseTone.length > 0) l1_1_Parts.push(`processed with ${join(baseTone)}`);
    if (colorScience.length > 0) l1_1_Parts.push(`color science ${join(colorScience)}`);
    if (physicalGrain.length > 0) l1_1_Parts.push(`grain structure ${join(physicalGrain)}`);
    if (textureRender.length > 0) l1_1_Parts.push(`texture render ${join(textureRender)}`);

    // Stylized
    const artMedium = getTagsWithDef('aes_art_medium');
    const lineQuality = getTagsWithDef('aes_line_quality');
    const canvasTexture = getTagsWithDef('aes_canvas_texture');
    
    if (artMedium.length > 0) l1_1_Parts.push(`created using ${join(artMedium)} medium`);
    if (lineQuality.length > 0) l1_1_Parts.push(`featuring ${join(lineQuality)} lines`);
    if (canvasTexture.length > 0) l1_1_Parts.push(`on ${join(canvasTexture)} texture`);

    contentMap['L1.1'] = l1_1_Parts.join(", ");

    // --- MODULE: L1.2 (Composition & Optics) ---
    const l1_2_Parts = [];
    const shotSize = getTagsWithDef('aes_shot_size'); 
    const angle = getTagsWithDef('aes_angle'); 
    const composition = getTagsWithDef('aes_image_focus');
    const visualBalance = getTagsWithDef('aes_visual_balance'); 
    const perspective = getTagsWithDef('aes_perspective'); 
    const focalLength = getTagsWithDef('aes_focal_length');
    const depth = getTagsWithDef('aes_depth'); 
    const shutter = getTagsWithDef('aes_shutter'); 
    const opticalFX = getTagsWithDef('aes_lens_fx'); 
    
    if (shotSize.length > 0) l1_2_Parts.push(join(shotSize));
    if (angle.length > 0) l1_2_Parts.push(join(angle));
    if (composition.length > 0) l1_2_Parts.push(join(composition));
    if (focalLength.length > 0) l1_2_Parts.push(`focal length ${join(focalLength)}`);
    if (depth.length > 0) l1_2_Parts.push(`depth of field ${join(depth)}`);
    if (shutter.length > 0) l1_2_Parts.push(`shutter ${join(shutter)}`);
    if (perspective.length > 0) l1_2_Parts.push(`perspective ${join(perspective)}`);
    if (visualBalance.length > 0) l1_2_Parts.push(`composition ${join(visualBalance)}`);
    if (opticalFX.length > 0) l1_2_Parts.push(`Optical effects: ${join(opticalFX)}`);

    contentMap['L1.2'] = l1_2_Parts.length > 0 ? `Framed as ${l1_2_Parts.join(", ")}` : "";

    // --- MODULE: SUBJECT (L2) ---
    let chunkSubject = "";
    const detailParts: string[] = [];
    const actionParts: string[] = [];
    
    const subjectCustom = getTagsWithDef('aes_l2_custom');
    
    // Actions common
    const actions = [...getTagsWithDef('aes_action_static'), ...getTagsWithDef('aes_action_dynamic'), ...getTagsWithDef('aes_action_complex')];
    if (actions.length > 0) actionParts.push(join(actions));
    
    if (subjectType === 'HUMAN') {
        const age = getTagsWithDef('aes_age');
        const gender = getTagsWithDef('aes_gender');
        const ethnicity = getTagsWithDef('aes_ethnicity');
        const bodyType = getTagsWithDef('aes_body_type');
        const occupation = getTagsWithDef('aes_occupation');
        const persona = getTagsWithDef('aes_persona');
        
        const hair = [...getTagsWithDef('aes_hair_color'), ...getTagsWithDef('aes_hair_style_f'), ...getTagsWithDef('aes_hair_style_m')];
        const eyes = [...getTagsWithDef('aes_eye_color'), ...getTagsWithDef('aes_eye_shape'), ...getTagsWithDef('aes_eye_fx')];
        const face = [...getTagsWithDef('aes_face_features')];
        const expression = getTagsWithDef('aes_expression');
        const skinBody = [...getTagsWithDef('aes_skin_texture'), ...getTagsWithDef('aes_body_features')];
        
        const subjDesc = [
            join(age),
            join(ethnicity),
            join(gender),
            bodyType.length > 0 ? `with ${join(bodyType)} body` : "",
            join(occupation),
            join(persona)
        ].filter(Boolean).join(" ");
        
        if (subjDesc) {
            chunkSubject = `A ${subjDesc}`;
        }
        
        // Details extraction (Independent of Subject Core existence)
        if (hair.length > 0) detailParts.push(`with ${join(hair)} hair`);
        if (eyes.length > 0) detailParts.push(`${hair.length > 0 ? "and" : "with"} ${join(eyes)} eyes`);
        const faceParts = [];
        if (face.length > 0) faceParts.push(join(face));
        if (expression.length > 0) faceParts.push(`wearing a ${join(expression)} expression`);
        if (faceParts.length > 0) detailParts.push(`featuring ${faceParts.join(", ")} on face`);
        if (skinBody.length > 0) detailParts.push(`showing ${join(skinBody)} texture on skin`);

    } else {
        const creatureSize = getTagsWithDef('aes_creature_size');
        const creatureClass = getTagsWithDef('aes_creature_class');
        const creatureElement = getTagsWithDef('aes_creature_element');
        const creatureHead = getTagsWithDef('aes_creature_head');
        const creatureBody = getTagsWithDef('aes_creature_body');
        const creatureTexture = getTagsWithDef('aes_creature_texture'); 
        const creatureMood = getTagsWithDef('aes_creature_mood');
        const creatureAction = getTagsWithDef('aes_creature_action');
        
        const creaDesc = [
            join(creatureSize),
            join(creatureElement),
            join(creatureClass)
        ].filter(Boolean).join(" ");
        
        if (creaDesc) {
            chunkSubject = `A ${creaDesc}`;
        }

        // Details extraction (Independent of Subject Core existence)
        if (creatureHead.length > 0) detailParts.push(`with ${join(creatureHead)}`);
        if (creatureBody.length > 0) detailParts.push(`possessing ${join(creatureBody)}`);
        if (creatureTexture.length > 0) detailParts.push(`covered in ${join(creatureTexture)}`);
        if (creatureMood.length > 0) detailParts.push(`appearing ${join(creatureMood)}`);
        if (creatureAction.length > 0) actionParts.push(`executing ${join(creatureAction)}`);
    }
    
    // Assemble Subject String from all available components
    const finalSubjectParts = [];
    if (chunkSubject) finalSubjectParts.push(chunkSubject);
    if (detailParts.length > 0) finalSubjectParts.push(detailParts.join(", "));
    if (actionParts.length > 0) finalSubjectParts.push(actionParts.join(", "));
    if (subjectCustom.length > 0) finalSubjectParts.push(join(subjectCustom));

    contentMap['SUBJECT'] = finalSubjectParts.join(", ");

    // --- MODULE: STAGE (L3/L4) ---
    const scene = [...getTagsWithDef('aes_scene_real'), ...getTagsWithDef('aes_scene_abstract'), ...getTagsWithDef('aes_scene_surreal')];
    const era = getTagsWithDef('skin_era');
    const context = [...getTagsWithDef('skin_society'), ...getTagsWithDef('skin_ideology')];
    const sceneCustom = getTagsWithDef('aes_l3_custom');
    const atmosphereMedium = getTagsWithDef('aes_atmosphere');
    const atmosphereParticles = getTagsWithDef('aes_particles');
    
    let stageStr = "";
    const loc = join(scene);
    const time = join(era);
    const soc = join(context);
    const sceneCus = join(sceneCustom);
    
    if (loc || time || soc || sceneCus) {
        stageStr = `Located in ${[loc, time, soc, sceneCus].filter(Boolean).join(", ")}. `;
    }
    
    const atmoSentences = [];
    const surroundParts = [join(atmosphereMedium), join(atmosphereParticles)].filter(Boolean);
    if (surroundParts.length > 0) {
        let s = "";
        if (surroundParts.length > 0) s += `Surrounded by ${surroundParts.join(" and ")}`;
        atmoSentences.push(s);
    }
    contentMap['STAGE'] = stageStr + atmoSentences.join(". ");

    // --- MODULE: VIBE (L4 Lighting) ---
    const lighting = [...getTagsWithDef('aes_light_mood'), ...getTagsWithDef('aes_light_type'), ...getTagsWithDef('aes_light_direction'), ...getTagsWithDef('aes_light_shape')];
    if (lighting.length > 0) contentMap['VIBE'] = `Lighting: ${join(lighting)}`;

    // --- MODULE: RENDER (L5) ---
    const renderReal = getTagsWithDef('aes_render_real');
    const renderArt = getTagsWithDef('aes_render_art');
    const renderParts = [...renderReal, ...renderArt];
    if (renderParts.length > 0) contentMap['RENDER'] = `Rendered with ${join(renderParts)} quality`;


    // --- 3. FINAL ASSEMBLY ---
    // Use moduleOrder if logicMode is DEFAULT
    
    if (logicMode === 'DEFAULT') {
        const orderedSentences = moduleOrder.map(id => contentMap[id]).filter(Boolean);
        return orderedSentences.join(". ").replace(/\.\./g, ".").replace(/,\./g, ".").trim();
    } 

    // Legacy Fallback for Specific Modes (Optional - can be replaced by moduleOrder too if we wanted)
    
    const orderedSentences: string[] = [];
    const chunkStyle = contentMap['STYLE'];
    const chunkTech = [contentMap['L1.1'], contentMap['RENDER']].filter(Boolean).join(". ");
    const chunkStage = contentMap['STAGE']; 
    const chunkVibe = contentMap['VIBE']; 
    const chunkSubjectMap = contentMap['SUBJECT'];

    switch (logicMode) {
        case 'IDENTITY':
            // Subject -> Shot -> Env -> Style
            if (chunkSubjectMap) orderedSentences.push(chunkSubjectMap);
            if (contentMap['L1.2']) orderedSentences.push(contentMap['L1.2']);
            if (chunkStage) orderedSentences.push(chunkStage);
            if (chunkVibe) orderedSentences.push(chunkVibe);
            if (chunkStyle) orderedSentences.push(chunkStyle);
            if (chunkTech) orderedSentences.push(chunkTech);
            break;

        case 'ACTION':
            // Action -> Subject -> Shot -> Env
            if (chunkSubjectMap) orderedSentences.push(chunkSubjectMap);
            if (chunkStage) orderedSentences.push(chunkStage);
            if (chunkVibe) orderedSentences.push(chunkVibe);
            if (chunkTech) orderedSentences.push(chunkTech);
            if (chunkStyle) orderedSentences.push(chunkStyle);
            break;

        case 'ATMOSPHERE':
            // Environment -> Subject -> Shot -> Style
            if (chunkStage) orderedSentences.push(chunkStage);
            if (chunkVibe) orderedSentences.push(chunkVibe);
            if (chunkSubjectMap) orderedSentences.push(chunkSubjectMap);
            if (chunkStyle) orderedSentences.push(chunkStyle);
            if (chunkTech) orderedSentences.push(chunkTech);
            break;

        case 'LOOK':
            // Style -> Subject -> Tech
            if (chunkStyle) orderedSentences.push(chunkStyle);
            if (chunkSubjectMap) orderedSentences.push(chunkSubjectMap);
            if (chunkVibe) orderedSentences.push(chunkVibe);
            if (chunkTech) orderedSentences.push(chunkTech);
            if (chunkStage) orderedSentences.push(chunkStage);
            break;
            
        case 'TECH':
            // Tech -> Lighting -> Environment -> Subject
            if (chunkTech) orderedSentences.push(chunkTech);
            if (contentMap['L1.2']) orderedSentences.push(contentMap['L1.2']);
            if (chunkVibe) orderedSentences.push(chunkVibe);
            if (chunkStage) orderedSentences.push(chunkStage);
            if (chunkSubjectMap) orderedSentences.push(chunkSubjectMap);
            if (chunkStyle) orderedSentences.push(chunkStyle);
            break;

        default:
            // Fallback to DEFAULT logic
             const defOrdered = moduleOrder.map(id => contentMap[id]).filter(Boolean);
             return defOrdered.join(". ").replace(/\.\./g, ".").replace(/,\./g, ".").trim();
    }

    return orderedSentences.filter(Boolean).join(". ").replace(/\.\./g, ".").replace(/,\./g, ".").trim();
};

type AssetConceptKind = 'CHARACTER' | 'CREATURE' | 'ENVIRONMENT';

const cleanSentence = (text: string): string => {
    return text
        .replace(/\s+/g, ' ')
        .replace(/\s+,/g, ',')
        .replace(/,\s*\./g, '.')
        .replace(/\.\s*\./g, '.')
        .trim();
};

const firstNonEmpty = (...groups: string[][]): string => {
    for (const group of groups) {
        const value = group.find(Boolean);
        if (value) return value;
    }
    return "";
};

const takeBudget = (items: string[], limit: number): string[] => {
    return items.filter(Boolean).slice(0, limit);
};

export const generateAestheticAssetConceptPrompt = (
    fieldState: NarrativeFieldState,
    subjectType: SubjectType,
    lang: 'CN' | 'EN',
    customLibraryDefs: Record<string, { def: string; core: string }>
): string => {
    const getEnglishName = (tag: string) => {
        const match = tag.match(/\((.*?)\)/);
        return match ? match[1].trim() : tag.trim();
    };

    const getTags = (blockId: string, withDef = false): string[] => {
        const tags = fieldState[blockId];
        if (!tags || !Array.isArray(tags) || tags.length === 0) return [];

        return tags.map(tag => {
            if (blockId === 'aes_l2_custom' || blockId === 'aes_l3_custom') return tag.trim();

            const name = getEnglishName(tag);
            if (!withDef) return name;

            let def = "";
            if (customLibraryDefs && customLibraryDefs[tag]) {
                def = customLibraryDefs[tag].def;
            } else {
                const item = findAestheticItemFull(tag, blockId);
                if (item) {
                    if (lang === 'EN') {
                        def = (item as any).defEn || (!/[\u4e00-\u9fa5]/.test(item.def || "") ? item.def || "" : "");
                    } else {
                        def = item.def || (item as any).defEn || "";
                    }
                }
            }

            def = def.trim().replace(/[。.]$/, "");
            return def ? `${name} (${def})` : name;
        }).filter(Boolean);
    };

    const hasHuman = [
        'aes_age', 'aes_gender', 'aes_body_type', 'aes_ethnicity', 'aes_occupation', 'aes_persona',
        'aes_hair_color', 'aes_hair_style_f', 'aes_hair_style_m', 'aes_eye_color', 'aes_eye_shape',
        'aes_face_features', 'aes_expression', 'aes_body_features', 'aes_skin_texture',
        'aes_action_static', 'aes_action_dynamic', 'aes_action_complex', 'aes_l2_custom'
    ].some(id => (fieldState[id] || []).some(Boolean));
    const hasCreature = [
        'aes_creature_size', 'aes_creature_class', 'aes_creature_element', 'aes_creature_head',
        'aes_creature_body', 'aes_creature_mood', 'aes_creature_action', 'aes_creature_texture', 'aes_l2_custom'
    ].some(id => (fieldState[id] || []).some(Boolean));

    const assetKind: AssetConceptKind = subjectType === 'CREATURE' && hasCreature
        ? 'CREATURE'
        : subjectType === 'HUMAN' && hasHuman
            ? 'CHARACTER'
            : 'ENVIRONMENT';

    const style = firstNonEmpty(
        getTags('aes_director_style'),
        getTags('aes_photo_style'),
        getTags('aes_art_style'),
        getTags('aes_anim_director'),
        getTags('aes_art_movement'),
        getTags('aes_poster_style')
    );
    const styleLine = style ? `visual language: ${style}` : "";

    const camera = firstNonEmpty(getTags('aes_camera_system'), getTags('aes_lens_series'), getTags('aes_focal_length'));
    const shot = firstNonEmpty(getTags('aes_image_focus'), getTags('aes_shot_size'), getTags('aes_angle'), getTags('aes_perspective'));
    const lighting = firstNonEmpty(getTags('aes_light_mood'), getTags('aes_light_type'), getTags('aes_light_direction'), getTags('aes_light_shape'));
    const render = firstNonEmpty(getTags('aes_render_real'), getTags('aes_render_art'), getTags('aes_texture_render'), getTags('aes_art_medium'));
    const palette = firstNonEmpty(getTags('aes_color_palette'), getTags('aes_base_tone'), getTags('aes_color_science'));

    const scene = firstNonEmpty(getTags('aes_scene_real'), getTags('aes_scene_surreal'), getTags('aes_scene_abstract'));
    const era = firstNonEmpty(getTags('skin_era'));
    const atmosphere = firstNonEmpty(getTags('aes_atmosphere'), getTags('aes_particles'));
    const sceneCustom = firstNonEmpty(getTags('aes_l3_custom'));

    const sceneAnchor = cleanSentence([scene, era, sceneCustom].filter(Boolean).join(', '));
    const environmentLine = sceneAnchor ? `environment: ${sceneAnchor}` : "";
    const atmosphereLine = atmosphere ? `atmosphere: ${atmosphere}` : "";

    let subjectCore = "";
    let subjectDetails: string[] = [];
    let action = "";

    if (assetKind === 'CHARACTER') {
        subjectCore = cleanSentence([
            firstNonEmpty(getTags('aes_age')),
            firstNonEmpty(getTags('aes_ethnicity')),
            firstNonEmpty(getTags('aes_gender')),
            firstNonEmpty(getTags('aes_body_type')),
            firstNonEmpty(getTags('aes_occupation'), getTags('aes_persona'))
        ].filter(Boolean).join(' '));
        subjectDetails = takeBudget([
            firstNonEmpty(getTags('aes_hair_color'), getTags('aes_hair_style_f'), getTags('aes_hair_style_m')),
            firstNonEmpty(getTags('aes_eye_color'), getTags('aes_eye_shape')),
            firstNonEmpty(getTags('aes_face_features'), getTags('aes_expression')),
            firstNonEmpty(getTags('aes_skin_texture'), getTags('aes_body_features')),
            firstNonEmpty(getTags('aes_l2_custom'))
        ], 4);
        action = firstNonEmpty(getTags('aes_action_static'), getTags('aes_action_dynamic'), getTags('aes_action_complex'));
    } else if (assetKind === 'CREATURE') {
        subjectCore = cleanSentence([
            firstNonEmpty(getTags('aes_creature_size')),
            firstNonEmpty(getTags('aes_creature_element')),
            firstNonEmpty(getTags('aes_creature_class'))
        ].filter(Boolean).join(' '));
        subjectDetails = takeBudget([
            firstNonEmpty(getTags('aes_creature_head')),
            firstNonEmpty(getTags('aes_creature_body')),
            firstNonEmpty(getTags('aes_creature_texture')),
            firstNonEmpty(getTags('aes_creature_mood')),
            firstNonEmpty(getTags('aes_l2_custom'))
        ], 4);
        action = firstNonEmpty(getTags('aes_creature_action'));
    } else {
        subjectCore = scene || sceneCustom || "environment concept";
        subjectDetails = takeBudget([
            era,
            atmosphere,
            firstNonEmpty(getTags('aes_particles')),
            firstNonEmpty(getTags('aes_l3_custom'))
        ], 4);
    }

    const punctum = firstNonEmpty(
        getTags('aes_eye_fx'),
        getTags('aes_particles'),
        getTags('aes_scene_surreal'),
        getTags('aes_scene_abstract'),
        getTags('aes_l2_custom'),
        getTags('aes_l3_custom')
    );

    const assetLabel = assetKind === 'CHARACTER'
        ? 'Character Concept'
        : assetKind === 'CREATURE'
            ? 'Creature Concept'
            : 'Environment Concept';

    const subjectLine = cleanSentence([
        subjectCore || assetLabel.toLowerCase(),
        subjectDetails.length > 0 ? `with ${subjectDetails.join(', ')}` : "",
        action ? `action: ${action}` : ""
    ].filter(Boolean).join(', '));

    const mjParts = [
        `${assetLabel}: ${subjectLine}`,
        environmentLine,
        atmosphereLine,
        lighting ? `lighting: ${lighting}` : "",
        styleLine,
        shot ? `composition: ${shot}` : "",
        punctum ? `one surreal punctum only: ${punctum}` : "",
        render ? `finish: ${render}` : ""
    ].filter(Boolean);

    const gptParts = [
        `Create a precise ${assetLabel.toLowerCase()} image.`,
        `Primary subject: ${subjectLine}.`,
        environmentLine ? `Place it in this restrained setting: ${sceneAnchor}.` : "",
        atmosphere ? `Atmosphere: ${atmosphere}.` : "",
        lighting ? `Lighting: ${lighting}.` : "",
        palette ? `Color logic: ${palette}.` : "",
        style ? `Use one coherent style influence only: ${style}.` : "",
        camera || shot ? `Camera and composition: ${[camera, shot].filter(Boolean).join(', ')}.` : "",
        punctum ? `Add exactly one uncanny detail, not more: ${punctum}.` : "",
        "Keep the image readable: one dominant focal point, no extra characters, no crowded symbols, no decorative clutter."
    ].filter(Boolean);

    const designNotes = [
        `TYPE: ${assetLabel}`,
        `PRIMARY ANCHOR: ${subjectCore || assetLabel}`,
        `VISIBLE DETAILS: ${subjectDetails.join(' / ') || 'none'}`,
        `ENVIRONMENT: ${sceneAnchor || 'minimal or undefined'}`,
        `LIGHT: ${lighting || 'not specified'}`,
        `STYLE LIMIT: ${style || 'single coherent visual system'}`,
        `PUNCTUM: ${punctum || 'none'}`,
        `RULE: Full DNA is treated as background memory. Only the above elements should visibly appear in the generated image.`
    ];

    return [
        'ASSET CONCEPT COMPILER v1',
        '',
        '[MJ_SIMPLE]',
        cleanSentence(mjParts.join(', ')),
        '',
        '[GPT_IMAGE_2]',
        cleanSentence(gptParts.join(' ')),
        '',
        '[ASSET_DESIGN_NOTE]',
        designNotes.join('\n')
    ].join('\n');
};
