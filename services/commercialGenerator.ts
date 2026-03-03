
import { NarrativeFieldState, CreativeTreatment, WorldLawConfig, StyleConfig } from '../types';
import { COMMERCIAL_ENGINE_BLOCKS } from '../data/commercial_data';
import { COMM_SKIN_BLOCKS as SKIN_BLOCKS } from '../data/commercial_skin';
import { getVisionAnchorProtocol } from '../data/narrative_protocols';
import { findItemDetails } from './dataRegistry';

const buildContext = (fieldState: NarrativeFieldState) => {
    const engine = Object.entries(fieldState).map(([key, tags]) => {
        if (!tags || tags.length === 0 || !key.startsWith('comm_') || key.startsWith('comm_skin_')) return null;
        const blockDef = COMMERCIAL_ENGINE_BLOCKS.find(b => b.id === key);
        return `* **${blockDef?.enName || key}**: ${tags.join(' + ')} \n      (${tags.map(t => findItemDetails(t)).join('; ')})`;
    }).filter(Boolean).join('\n');

    const skin = Object.entries(fieldState).map(([key, tags]) => {
        if (!tags || tags.length === 0 || !key.startsWith('comm_skin_')) return null;
        const blockDef = SKIN_BLOCKS.find(b => b.id === key);
        return `* **${blockDef?.enName || key}**: ${tags.join(' + ')} \n      (${tags.map(t => findItemDetails(t)).join('; ')})`;
    }).filter(Boolean).join('\n');

    return `${engine}\n\n${skin}`;
};

// --- CHAPTER 1: CORE LOGIC & SYNTAX ---
const COMM_CORE_LOGIC = `
### I. 核心句式 (The Syntactical Formula)
**这是所有商业创意的标准语法结构，必须严格遵循：**
"一个处于 [C0. 底层欲望] 的 [C1. 缺失主体]，在 [C2. 痛点场景] 中，由于恐惧 [C6. 潜在威胁]，渴望获得作为救赎的 [C3. 产品图腾]；在得到 [C4. 信任背书] 提供的权威背书后，他通过 [C5. 转化仪式] 完成转化，最终抵达了 [C7. 承诺幻象]。"

### II. 八大逻辑模块详解 (The 8-Step Logic)
**1. 第一阶段：匮乏的诊断 (Diagnosis of Lack)**
*   **C0. 底层欲望 (Core Desire):** 能量入口。摄入回路(Oral)/留存回路(Anal)/观看回路(Scopic)。
*   **C1. 缺失主体 (Barred Subject / $):** 目标受众画像，侧重于他们的“病症”和异化感。
*   **C2. 痛点场景 (The Real Intrusion):** 日常幻象破裂的具体瞬间，实在界(The Real)入侵的时刻。
*   **C6. 潜在威胁 (The Threat):** 阉割焦虑。如果不买这个产品，面临的社会性死亡或主体性丧失。

**2. 第二阶段：幻想的构建 (Construction of Fantasy)**
*   **C3. 产品图腾 (The Product / Object a):** 产品作为“救赎者/对象a”。它不是物品，是神器。
*   **C4. 信任背书 (Endorsement / Big Other):** 大他者的担保。赋予产品合法性的力量（科学/历史/大众）。

**3. 第三阶段：缝合与转化 (Suture & Transformation)**
*   **C5. 转化仪式 (The Ritual):** 使用产品的具体动作。必须有声音、触感和视觉反馈，确认幻想的真实性。
*   **C7. 承诺幻象 (The Promise / Ideal Ego):** 缝合完成后的最终状态。一个没有裂痕的、完美的理想自我。
`;

// --- CHAPTER 2: SUTURE PATHS (THE LACANIAN TRIAD) ---
const COMM_SUTURE_PATHS = `
### V. 三重缝合路径 (THE THREE SUTURE PATHS)
**You must generate 3 distinct concepts based on Lacan's three registers.**

#### **OPTION 1: [THE_REAL] - 实在界 (硬核缝合 / Hard Sell)**
*   **Philosophy:** The Trauma & The Cure.
*   **Logic:** **Pain Point (C2) -> Solution.** Face the raw, ugly reality of the lack. The product is the only physical object that can plug this hole.
*   **Tone:** Clinical, Scientific, Brutal, Visceral.
*   **Visuals:** Macro shots, textures, chemical reactions, "Before/After" contrast.
*   **Keyword:** **"EFFECT" (功效)**

#### **OPTION 2: [IMAGINARY] - 想象界 (柔性缝合 / Soft Sell)**
*   **Philosophy:** Narcissism & The Mirror Stage.
*   **Logic:** **Ideal Ego (C7) -> Fulfillment.** Focus on the perfect self-image. The product is a magic wand that transforms the subject into their ideal version.
*   **Tone:** Dreamy, Romantic, Emotional, Aesthetic.
*   **Visuals:** Soft focus, mirrors, slow motion, beauty shots, filters.
*   **Keyword:** **"DREAM" (梦境)**

#### **OPTION 3: [SYMBOLIC] - 符号界 (地位缝合 / Status Sell)**
*   **Philosophy:** The Law & The Big Other.
*   **Logic:** **Social Status -> Recognition.** Focus on the social meaning of owning the product. It's a badge, a ticket to an exclusive club. Endorsed by Authority (C4).
*   **Tone:** Luxurious, Exclusive, Minimalist, Authoritative.
*   **Visuals:** Symmetry, architecture, logos, gold/black, crowds looking up.
*   **Keyword:** **"POWER" (权力)**
`;

export const buildCommercialPrompt = (
  duration: string,
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  worldLaw: WorldLawConfig
): { text: string, images: string[] } => {

  const fullContext = buildContext(fieldState);

  // VISION ANCHOR LOGIC
  let visionAnchorInstruction = "";
  if (visionInput) {
      visionAnchorInstruction = getVisionAnchorProtocol(visionInput);
  }

  // WORLD LAW PROTOCOLS
  let physicsInstruction = "";
  if (worldLaw.physics === 'STRICT') {
      physicsInstruction = `**[PHYSICS: STRICT] = Literalism.** Show the product as it is. Focus on mechanics and ingredients.`;
  } else {
      physicsInstruction = `**[PHYSICS: UNBOUND] = Metaphor.** The product can defy gravity or transform reality to show its effect.`;
  }

  let contextInstruction = "";
  if (worldLaw.context === 'PURE') {
      contextInstruction = `**[CONTEXT: IMMERSION] = Diegetic.** The story happens inside a closed world. Cinematic.`;
  } else {
      contextInstruction = `**[CONTEXT: META] = Non-Diegetic.** Break the 4th wall. Acknowledge it is an ad.`;
  }

  const promptText = `
    Role: Elite Creative Director & Lacanian Psychoanalyst.
    Task: Based on the **Visual Diagnosis** and **Suture Engine**, generate 3 distinct commercial concepts.

    ${visionAnchorInstruction}
    
    ## 1. 商业 DNA (THE SYMPTOM & FANTASY)
    ${fullContext}
    
    ${COMM_CORE_LOGIC}
    
    ## 2. 世界法则
    ${physicsInstruction}
    ${contextInstruction}

    ${COMM_SUTURE_PATHS}

    ## 3. 输出格式 (STRICT JSON)
    方案必须使用 **简体中文**。
    [
      {
        "id": "1",
        "type": "REAL", 
        "title": "方案标题 (Title)",
        "tagline": "硬核金句 (Slogan)",
        "visualKey": "视觉锤 (Iconic Image)",
        "pitch": "【实在界策略】... (描述如何直面痛点 C2 并提供物理救赎)",
        "structure": "The Real: [Trauma] -> [Cure]"
      },
      {
        "id": "2",
        "type": "IMAGINARY",
        "title": "方案标题 (Title)",
        "tagline": "梦幻金句 (Slogan)",
        "visualKey": "视觉锤 (Iconic Image)",
        "pitch": "【想象界策略】... (描述如何构建完美的理想自我 C7)",
        "structure": "The Imaginary: [Mirror] -> [Wholeness]"
      },
      {
        "id": "3",
        "type": "SYMBOLIC",
        "title": "方案标题 (Title)",
        "tagline": "权力金句 (Slogan)",
        "visualKey": "视觉锤 (Iconic Image)",
        "pitch": "【符号界策略】... (描述如何获得大他者的认可与社会地位)",
        "structure": "The Symbolic: [Code] -> [Power]"
      }
    ]
  `;

  return { text: promptText, images: visionImage ? [visionImage] : [] };
};

export const buildCommercialBiblePrompt = (
    treatment: CreativeTreatment,
    styleConfig: StyleConfig,
    fieldState?: NarrativeFieldState,
    visionInput?: string,
    worldLaw?: WorldLawConfig
): string => {
    
    let worldLawInstruction = "";
    if (worldLaw) {
         worldLawInstruction = `
         ## ⚖️ WORLD LAW (PHYSICS & CONTEXT)
         *   **PHYSICS:** ${worldLaw.physics === 'STRICT' ? 'LITERALISM (Focus on physical reality of product)' : 'METAPHOR (Focus on sensation/dream logic)'}
         *   **CONTEXT:** ${worldLaw.context === 'PURE' ? 'IMMERSION (Diegetic storytelling)' : 'META-AWARE (Breaking the 4th wall)'}
         `;
    }

    const visionContext = visionInput ? `
    ## VISUAL ANCHOR (HIGHEST PRIORITY)
    **User Vision:** "${visionInput}"
    **Directive:** The commercial MUST center around the visual and narrative core described above.
    ` : "";

    return `
        Role: Executive Creative Director & Commercial Film Director.
        Task: 将商业概念扩展为 **《商业广告创意圣经 (The Commercial Bible)》**。
        
        ## 核心原则
        1. **拒绝表格剧本 (No Table Scripts):** 不要生成表格形式的分镜。你需要以 **“画面叙事流 (Visual Narrative Flow)”** 的形式，用极具画面感、电影感的文字描述整个广告的视觉流程。
        2. **文案独立 (Copywriting Separation):** 将所有口播 (VO)、对白和屏幕文字 (Super) 提取出来，放在单独的 **“文案 (Copywriting)”** 字段中。
        3. **欲望缝合 (Suture Logic):** 叙事必须体现 **C0 (底层欲望) -> C2 (痛点) -> C3 (产品介入) -> C5 (仪式) -> C7 (幻象达成)** 的逻辑链条。
        
        ## 1. 核心要求
        1. **画面叙事 (Visual Narrative)**: 像写微小说或散文诗一样描述画面。强调光影、质感、运镜、剪辑节奏和情感流动。不要写 "00:00 镜头1" 这种格式。
        2. **文案 (Copywriting)**: 极具煽动性、诗意或力量感的广告词。
        3. **美术基准 (Art Direction)**: 明确材质球参数般的描述（如：拉丝不锈钢的折射率、液体的粘稠度、皮肤的纹理）。符合 **商业拜物教铁律**。
        4. **Midjourney 指令**: 为每一场戏生成能产出“广告大片”质感的提示词。
        5. **资产描述**: 所有资产描述必须使用中文。
        
        ${worldLawInstruction}

        ## 2. 输入数据
        *   **Concept:** ${treatment.title} - ${treatment.tagline}
        *   **Type:** ${treatment.type} (Real/Imaginary/Symbolic)
        *   **Visual Key:** ${treatment.visualKey}
        *   **Pitch:** ${treatment.pitch}
        *   **Style:** ${styleConfig.styleId || "Custom Director Style"}
        
        ${fieldState ? `**DNA Context:**\n${buildContext(fieldState)}` : ""}
        ${visionContext}

        ## 3. 输出格式 (STRICT JSON)
        必须使用 **简体中文** 输出。
        **IMPORTANT:** You MUST populate "visualFlow" and "copywriting". Leave "avScript" empty.
        **CRITICAL:** All asset descriptions ("desc") MUST be in **Simplified Chinese**.
        
        {
          "treatmentId": "${treatment.id}",
          "driverType": "COMMERCIAL",
          "styleName": "${styleConfig.styleId || 'Custom Style'}",
          "narrative": {
            "title": "Campaign Title (CN+EN)",
            "logline": "Slogan / Core Message",
            "synopsis": "Detailed strategy description explaining the Suture logic (C0->C7)."
          },
          "context": {
            "world": "The setting/stage description.",
            "tone": "Visual tone keywords.",
            "colorPalette": ["Hex1", "Hex2", "Hex3"],
            "moodboard": { "prompt": "MJ Prompt for Key Visual" }
          },
          "commercialData": {
              "slogan": "The final ad slogan",
              "strategy": {
                  "core_desire": "C0. 底层欲望描述",
                  "target_audience": "C1. 缺失主体描述",
                  "pain_point": "C2. 痛点场景描述",
                  "product_role": "C3. 产品图腾定义",
                  "endorsement": "C4. 信任背书描述",
                  "ritual": "C5. 转化仪式描述 (MUST NOT BE EMPTY)",
                  "threat": "C6. 潜在威胁描述",
                  "brand_promise": "C7. 承诺幻象描述 (MUST NOT BE EMPTY)"
              },
              "visualFlow": "这里是核心。用极具电影感的文字描述整个广告的画面流程。从开场到结尾，强调光影、动作、转场和情绪。字数约 600-800 字。",
              "copywriting": "这里是文案。包括旁白(VO)、对白和屏幕文字(Super)。按顺序列出，分行显示。风格要犀利、感人或洗脑。",
              "avScript": [], 
              "visualNotes": "Director's execution notes on lighting, texture, and pacing."
          },
          "assets": {
            "characters": [ { "id": "c1", "name": "Name (CN)", "desc": "Description (CN)", "tag": "Role", "view": { "prompt": "MJ Prompt" } } ],
            "locations": [ { "id": "l1", "name": "Name (CN)", "desc": "Description (CN)", "tag": "Type", "view": { "prompt": "MJ Prompt" } } ],
            "props": [ { "id": "p1", "name": "Name (CN)", "desc": "Description (CN)", "tag": "Type", "view": { "prompt": "MJ Prompt" } } ]
          }
        }`;
};
