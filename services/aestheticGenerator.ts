
import { NarrativeFieldState, SubjectType, LibraryItemDef, WorldLawConfig, CreativeTreatment, StyleConfig } from '../types';
import { AESTHETIC_ENGINE_BLOCKS } from '../data/aesthetic_data';
import { getVisionAnchorProtocol } from '../data/narrative_protocols';
import { findItemDetails } from './dataRegistry';

// Block Definitions for Detection
const HUMAN_BLOCKS = ['aes_age', 'aes_gender', 'aes_body_type', 'aes_ethnicity', 'aes_occupation', 'aes_persona', 'aes_clothing', 'aes_prop_held', 'aes_accessories', 'aes_hair_color', 'aes_hair_style_f', 'aes_hair_style_m', 'aes_action_static', 'aes_action_dynamic', 'aes_action_complex', 'aes_eye_color', 'aes_eye_shape', 'aes_eye_fx', 'aes_face_features', 'aes_expression', 'aes_body_features', 'aes_skin_texture'];
const CREATURE_BLOCKS = ['aes_creature_size', 'aes_creature_class', 'aes_creature_element', 'aes_creature_head', 'aes_creature_body', 'aes_creature_mood', 'aes_creature_action', 'aes_creature_texture'];
// OBJECT_BLOCKS removed

// ============================================================================
// 1. THE IRON PROTOCOL V5.0 (AESTHETIC INTEGRITY & HARMONY)
// ============================================================================
const MIST_VISIONARY_PROTOCOL_V4 = `
# 🎨 MIST VISIONARY 视觉集成协议 v5.0 (INTEGRITY & HARMONY)

### 0. 核心宪法 (The Constitution)
*   **绝对参数映射 (Absolute Parameter Mapping):** 用户在 "DNA" 中选择的每一个技术参数（如摄影机型号、胶片类型、光效）**必须**逐字出现在最终的 "Universal Directive" (UVD) 中。严禁遗漏。
*   **尊重基因 (Respect the DNA):** 用户选择的 Tag 是核心意图，但作为 **DOP (摄影指导)**，你有权修正**技术上的逻辑矛盾**（例如：若用户同时选了“极简”和“极繁”，请根据主次进行融合）。
*   **纯净输出:** 不要添加任何 Midjourney 参数后缀（如 --ar, --v, --style）。

---

### I. 美学逻辑协调器 (AESTHETIC LOGIC HARMONIZER)
**CRITICAL: You must resolve contradictions between tags using the following hierarchy:**

**1. 风格宪法 (Style is Law):**
*   **Rule:** [L0. Style/Director] overrides [L1. Tech] & [L4. Light].
*   *Case:* If Style=[Wes Anderson] and Angle=[Dutch Angle], **IGNORE** Dutch Angle. Enforce **Symmetry/Flat Lay**.
*   *Case:* If Style=[Blade Runner] and Light=[High Key], **IGNORE** High Key. Enforce **Chiaroscuro/Neon**.

**2. 物理与尺度仲裁 (Physics & Scale):**
*   **Rule:** [L2. Subject] dictates the valid [L1. Shot Size].
*   *Case:* If Subject=[Ant] and Shot=[Extreme Wide], interpret as "Macro World Landscape" (Subject is huge in frame), OR "Microscopic Speck" (Subject is tiny). **Do not generate a physically impossible camera.**

**3. 光影逻辑修复 (Lighting Logic):**
*   **Rule:** [L4. Mood] overrides [L4. Type].
*   *Case:* If Mood=[Silhouette] and Light=[Frontal Flash], this is physically impossible. **EXECUTE:** [Silhouette] (Backlight) but add a subtle [Rim Light] to imply the flash, OR discard the flash.
*   *Case:* If Mood=[High Key] and Time=[Midnight], interpret as "Artificial Stadium Lighting" or "Alien Bright Night".

---

### II. 视觉转译准则 (Translation Guidelines)
1.  **保留原意:** 不要改变标签的本质含义。如果标签是“衰老”，不要转译成“成熟”。
2.  **词汇升级:** 使用更具画面感的专业词汇。例如将“灯光”升级为“Chiaroscuro”或“Volumetric cinematic lighting”。
3.  **冲突融合:** 当 [古代] 遇到 [赛博朋克] 时，使用 **"Anachronistic Fusion"** (时代错位融合)。例如：全息投影的卷轴，或青铜材质的义肢。

---

### III. 冲突仲裁与融合 (Conflict & World Law)
*   **[CONTEXT: PURE] (类型纯化):** 如果标签冲突（如：古代+赛博），以【时空锚点】为准，将异质元素“时代化”。
*   **[CONTEXT: FUSION] (混搭融合):** 主动寻找冲突点的平衡，创造混血美学（如：青铜材质的赛博义体）。
`;

const compileFullDNA = (fieldState: NarrativeFieldState): string => {
    let output = "=== ACTIVE AESTHETIC DNA (MUST ALL BE INCLUDED) ===\n";
    Object.entries(fieldState).forEach(([blockId, tags]) => {
        // --- Exclude aes_palette_preset from prompt generation (it is a macro) ---
        if (blockId === 'aes_palette_preset') return;

        if (tags && tags.length > 0) {
            // Enrich tags with their definitions from the registry
            const enrichedTags = tags.map(tag => {
                const details = findItemDetails(tag, blockId);
                // Clean up string to avoid clutter, remove prefixes
                const cleanDetails = details.replace(/Definition: | \| Core Logic: /g, ' ').trim();
                return cleanDetails ? `${tag} <${cleanDetails}>` : tag;
            });
            output += `[${blockId}]: ${enrichedTags.join(' + ')}\n`;
        }
    });
    return output;
};

const determineAestheticMode = (fieldState: NarrativeFieldState, subjectType: SubjectType): 'HUMAN' | 'CREATURE' | 'SCENE' => {
    let hasTags = false;
    
    if (subjectType === 'HUMAN') {
        hasTags = HUMAN_BLOCKS.some(id => fieldState[id] && fieldState[id].length > 0);
        if (hasTags) return 'HUMAN';
    } else if (subjectType === 'CREATURE') {
        hasTags = CREATURE_BLOCKS.some(id => fieldState[id] && fieldState[id].length > 0);
        if (hasTags) return 'CREATURE';
    } 
    
    // Fallback to SCENE mode
    return 'SCENE';
};

export const buildAestheticPrompt = (
  duration: string,
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  subjectType: SubjectType = 'HUMAN',
  worldLaw: WorldLawConfig = { physics: 'STRICT', context: 'PURE' },
  colorPalette: string[] = [] // ADDED PALETTE
): { text: string, images: string[] } => {

  const fullDNA = compileFullDNA(fieldState);
  const aestheticMode = determineAestheticMode(fieldState, subjectType);

  let modeInstruction = "";

  switch (aestheticMode) {
      case 'HUMAN':
          modeInstruction = `
          **CURRENT MODE: [HUMAN SUBJECT]**
          *   **Core Subject:** A human figure defined by L2 tags.
          *   **Focus:** Anatomy, fashion, expression, gesture.
          `;
          break;
      case 'CREATURE':
          modeInstruction = `
          **CURRENT MODE: [CREATURE SUBJECT]**
          *   **Core Subject:** A non-human creature defined by L2 tags.
          *   **Focus:** Biology, texture, scale, monster design.
          `;
          break;
      case 'SCENE':
          modeInstruction = `
          **CURRENT MODE: [SCENE ONLY]**
          *   **Core Subject:** The Environment / Architecture / Landscape.
          *   **CRITICAL RULE:** **DO NOT GENERATE A CENTRAL CHARACTER.** The 'Subject' L2 tags are empty. The Stage (L3) IS the protagonist.
          *   **Focus:** Atmosphere, lighting, depth, scale, architectural detail.
          `;
          break;
  }

  // VISION ANCHOR LOGIC
  let visionAnchorInstruction = "";
  if (visionInput) {
      visionAnchorInstruction = getVisionAnchorProtocol(visionInput);
  }

  // PALETTE INJECTION
  let paletteInstruction = "";
  if (colorPalette.length > 0) {
      paletteInstruction = `
## 🎨 CHOSEN COLOR PALETTE (DNA OVERRIDE)
**Mandatory Hex Colors:** ${colorPalette.join(', ')}
**Instruction:** You MUST strictly incorporate these specific hex colors into the visual descriptions and color theory for ALL options. Use them for lighting, costume details, or environmental tints.
      `;
  }

  const promptText = `
Role: Visionary Art Director & Technical DOP.
Task: 基于全基因组 DNA，解决潜在的技术冲突，生成 3 个不同聚焦的视觉方案。

${MIST_VISIONARY_PROTOCOL_V4}

${visionAnchorInstruction}

${paletteInstruction}

## 🧬 用户全量 DNA 配置 (THE FULL GENOME)
${fullDNA}

## ⚖️ 世界法则设定
*   物理法则: ${worldLaw.physics === 'STRICT' ? '严守现实 (Physics Apply)' : '梦境逻辑 (Dream Logic)'}
*   语境法则: ${worldLaw.context === 'PURE' ? '类型纯化 (Purify)' : '美学融合 (Mashup)'}

${modeInstruction}

## 🎯 三重电影感聚焦任务 (THE CINEMATIC TRIAD)
**All three options MUST embody the Chosen Cinematic Style (L0) perfectly.**
**所有三个选项都必须完美体现所选的[L0: Style] (导演/流派) 的电影感、构图、光影与质感。**

### **OPTION 1: [DIRECTOR_VISION] - 导演风格终极呈现**
*   **核心策略:** **Auteur Totalitarianism (作者独裁)**。
*   **执行:** 将 L2 (主体动作) 和 L3 (场景) 完美融入 L0 (导演/风格) 的视觉语言中。构图必须是该导演的标志性构图。
*   **技术:** 强制使用该导演标志性的摄影机、镜头、胶片颗粒和布光方式。
*   **目标:** **就像是该导演亲自掌镜的完美电影定场照 (Masterpiece Still)。极致的电影感。**

### **OPTION 2: [SUBJECT_PORTRAIT] - 角色情绪特写**
*   **核心策略:** **Cinematic Portraiture (电影肖像)**。
*   **执行:** 使用中长焦 (85mm+)，浅景深 (Bokeh)，**极致聚焦于 L2 (主体) 的微表情、眼神、妆容与服饰细节。** 
*   **风格:** 依然严格遵循 L0 (导演) 的光影和色调，但将环境虚化，让角色灵魂凸显。
*   **目标:** 一张充满情感张力的角色特写，展现人物内心世界，极具感染力。

### **OPTION 3: [SCENE_RELATION] - 人与场域的关系**
*   **核心策略:** **Environmental Storytelling (环境叙事)**。
*   **执行:** 使用广角或中景 (24mm-35mm)，**强调 L2 (主体) 在 L3 (环境) 中的位置、比例与互动。** 
*   **风格:** 环境不再是背景，而是叙事的一部分。强调空间感、氛围、天气与世界观的沉浸感。
*   **目标:** 展现主体被环境包裹、压迫或融合的状态。宏大或深邃的场景叙事。

## 4. 输出格式要求 (STRICT JSON)
"pitch" 字段必须严格遵循以下格式：
【翻译】提示词的中文翻译（准确、生动）。
【解析】对此视觉概念的深度美学分析。**重点解释你是如何体现[L0 导演风格]的**（例如：“使用了韦斯·安德森标志性的对称构图...”）。

**"universalPrompt" 字段要求 (UVD v2.0):**
必须严格遵循以下【Visionary Directive】格式。这不仅是 MJ 指令，更是一份导演备忘录。
**重要：花括号 {} 内的参数，必须严格提取自用户的 DNA 配置。如果用户选择了该参数（例如 aes_camera_system），你必须将其具体的英文标签值填入。不能遗漏。**
**如果 DNA 中没有该参数，则根据上下文智能填充。**

**Format Template:**
VISION
> (AI根据所有参数生成的一句话画面概括，英文)
SUBJECT
> Identity: {aes_age} {aes_gender} {aes_ethnicity} {aes_body_type} ({aes_occupation} {aes_persona})
> Appearance: {aes_hair_color} {aes_hair_style_f/m} {aes_eye_color} {aes_face_features}
> Look: {aes_clothing} {aes_accessories} + Holding {aes_prop_held} + {aes_l2_custom}
> Action: {aes_action_static} {aes_action_dynamic} {aes_action_complex}
SCENE
> Anchor: {skin_era} {skin_location} {aes_scene_real/abstract}
> Context: {skin_society} {skin_ideology}
> Atmosphere: {aes_atmosphere} + {aes_particles} + {aes_weather}
CINEMATOGRAPHY
> Camera: {aes_camera_system} + {aes_optical_format}
> Lens: {aes_lens_series} + {aes_focal_length}
> Optics: {aes_depth} + {aes_shutter} + {aes_lens_fx}
> Composition: {aes_image_focus} + {aes_shot_size} + {aes_angle} + {aes_perspective} + {aes_visual_balance}
> Lighting: {aes_light_mood} + {aes_light_type} + {aes_light_direction} + {aes_light_shape}
AESTHETICS
> Core Style: {aes_director_style} {aes_photo_style} {aes_art_style} {aes_anim_director} {aes_art_movement} {aes_poster_style}
> Process: {aes_base_tone} + {aes_color_science} + {aes_physical_grain}
> Texture: {aes_texture_render} + {aes_art_medium} + {aes_line_quality} + {aes_canvas_texture}
> Color: {aes_color_palette}
> Render: {aes_render_real} / {aes_render_art}

**CRITICAL:** JSON Object Array Output.

[
  {
    "id": "1",
    "type": "DIRECTOR_VISION", 
    "title": "方案标题 (CN + EN)",
    "tagline": "视觉核心金句",
    "visualKey": "标志性意象",
    "pitch": "【翻译】...\\n【解析】...",
    "pitchEn": "[Pure English Prompt String with Technical details included]",
    "universalPrompt": "VISION\n> ... (Follow UVD v2.0 format strictly)",
    "structure": "Full Cinematic Synthesis"
  },
  {
    "id": "2",
    "type": "SUBJECT_PORTRAIT", 
    "title": "方案标题 (CN + EN)",
    "tagline": "视觉核心金句",
    "visualKey": "标志性意象",
    "pitch": "【翻译】...\\n【解析】...",
    "pitchEn": "[Pure English Prompt String with Focus Priority]",
    "universalPrompt": "VISION\n> ... (Follow UVD v2.0 format strictly)",
    "structure": "Subject Emotion Focus"
  },
  {
    "id": "3",
    "type": "SCENE_RELATION", 
    "title": "方案标题 (CN + EN)",
    "tagline": "视觉核心金句",
    "visualKey": "标志性意象",
    "pitch": "【翻译】...\\n【解析】...",
    "pitchEn": "[Pure English Prompt String with Atmosphere Priority]",
    "universalPrompt": "VISION\n> ... (Follow UVD v2.0 format strictly)",
    "structure": "Subject in Context"
  }
]
`;

  return { text: promptText, images: visionImage ? [visionImage] : [] };
};

export const buildAestheticBiblePrompt = (
    treatment: CreativeTreatment,
    styleConfig: StyleConfig,
    fieldState?: NarrativeFieldState,
    visionInput?: string,
    worldLaw?: WorldLawConfig,
    colorPalette: string[] = [] // ADDED PALETTE
): string => {
    const dnaContext = fieldState ? compileFullDNA(fieldState) : "";
    
    let worldLawInstruction = "";
    if (worldLaw) {
         worldLawInstruction = `
         ## ⚖️ WORLD LAW (PHYSICS & CONTEXT)
         *   **PHYSICS:** ${worldLaw.physics === 'STRICT' ? 'STRICT REALISM' : 'DREAM LOGIC (Surreal allowed)'}
         *   **CONTEXT:** ${worldLaw.context === 'PURE' ? 'PURE ERA (Strict adherence)' : 'FUSION (Mix & Match)'}
         `;
    }

    const visionContext = visionInput ? `
    ## VISUAL ANCHOR (HIGHEST PRIORITY)
    **User Vision:** "${visionInput}"
    **Directive:** The aesthetic bible MUST elaborate on this specific vision.
    ` : "";

    let paletteInstruction = "";
    if (colorPalette.length > 0) {
        paletteInstruction = `
## 🎨 MANDATORY COLOR PALETTE
**Hex Colors:** ${colorPalette.join(', ')}
**Directive:** You MUST use these specific hex colors for asset descriptions and visual logic.
        `;
    }

    return `
        Role: Master Art Director.
        Task: Expand the chosen concept into a full **AESTHETIC BIBLE**.
        
        ## 核心原则
        1. **严禁丢弃基因:** 圣经内容必须彻底消化并体现 DNA 矩阵中所有的已选 Tag (及具体定义)。
        2. **逻辑自洽:** 如果 DNA 中存在技术冲突（如焦段与景别），请在描述中体现你作为摄影指导的解决方案。
        3. **视觉转译:** 描述应具有极高的艺术审美，使用摄影与美术专业术语。
        4. **资产描述**: 所有资产描述必须使用中文。
        
        ${worldLawInstruction}
        ${paletteInstruction}

        ## pitch 字段格式要求
        【翻译】提示词的中文翻译。
        【解析】完整的视觉美学逻辑论述。

        Concept: ${treatment.title}
        Focus: ${treatment.structure}
        
        ${dnaContext}
        ${visionContext}

        ## 输出格式 (STRICT JSON)
        **CRITICAL:** All asset descriptions ("desc") MUST be in **Simplified Chinese**.

        {
          "treatmentId": "${treatment.id}",
          "driverType": "AESTHETIC",
          "styleName": "Aesthetic Mastery",
          "narrative": { 
              "title": "${treatment.title}", 
              "logline": "${treatment.tagline}", 
              "synopsis": "对视觉美学逻辑的完整论述 (CN)。解释 L0-L5 是如何共同协作产生此画面的。" 
          },
          "context": { 
              "world": "世界观与场域背景描述", 
              "tone": "影调与美学风格", 
              "colorPalette": ${JSON.stringify(colorPalette.length > 0 ? colorPalette : ["#Hex1", "#Hex2", "#Hex3"])}, 
              "moodboard": { "prompt": "${treatment.pitchEn}" } 
          },
          "assets": { 
              "characters": [
                  { "id": "main", "name": "核心主体 (或核心细节)", "tag": "L2_SUBJECT", "desc": "极尽华丽的主体视觉细节描写 (CN)", "view": { "prompt": "MJ prompt focusing on the subject" } }
              ], 
              "locations": [
                   { "id": "env", "name": "核心场景", "tag": "L3_STAGE", "desc": "极尽华丽的环境视觉细节描写 (CN)", "view": { "prompt": "MJ prompt focusing on the environment" } }
              ], 
              "props": [] 
          },
          "aestheticData": {
              "visualConcept": "${treatment.pitch}",
              "techSpecs": [
                  { "label": "Camera", "value": "Arri Alexa 65 / Hasselblad Look" },
                  { "label": "Lens", "value": "Anamorphic / Macro / Wide" },
                  { "label": "Lighting", "value": "Volumetric / Chiaroscuro" }
              ],
              "colorLogic": "配色背后的心理学逻辑",
              "promptEngineering": "MJ Prompt Keywords Library"
          }
        }
    `;
};