
import { NarrativeFieldState, SubjectType, AestheticLogicMode, LibraryItemDef } from '../types';
import { AESTHETIC_ENGINE_LIBRARY } from '../data/aesthetic_data';
import { SKIN_LIBRARY } from '../data/skin_libraries';
import { COMMERCIAL_ENGINE_LIBRARY } from '../data/commercial_data';
import { MASTER_PRESETS } from '../data/master_presets';
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
    const weather = getTagsWithDef('aes_weather');
    
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
    const weatherStr = join(weather);
    
    if (surroundParts.length > 0 || weatherStr) {
        let s = "";
        if (surroundParts.length > 0) s += `Surrounded by ${surroundParts.join(" and ")}`;
        if (weatherStr) s += `${s ? ", " : ""}under ${weatherStr} conditions`;
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
