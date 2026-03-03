





import { 
  NarrativeFieldState, 
  CreativeTreatment,
  WorldLawConfig,
  StyleConfig
} from '../types';
import { 
  NARRATIVE_ENGINE_BLOCKS 
} from '../data/narrative_engine';
import { ALL_SKIN_BLOCKS } from '../data/skin_libraries';
import { STORY_VOLUMES } from '../data/story_volumes';
import { GENRE_CATEGORIES } from '../data/genres';
import { PERSPECTIVES, SENSORY_MODES, STYLE_MATRIX } from '../data/style_matrix';
import { DIRECTOR_STYLES } from '../data/director_styles';
import { ANIMATION_GENRE_CATEGORIES } from '../data/animation_genres';

// Import Protocols
import { 
    NAMING_PROTOCOL, 
    LITERARY_AESTHETIC_PROTOCOL, 
    NARRATIVE_ENGINE_FORMULA, 
    THE_IRON_LAWS,
    FALLBACK_TOPOLOGY_TEMPLATE,
    NARRATIVE_ALGEBRAIC_PROTOCOL,
    STYLE_LOGIC_PROTOCOL,
    getVisionAnchorProtocol,
    THE_MASK_PROTOCOL
} from '../data/narrative_protocols';

// Import Registry instead of raw data
import { findItemDetails, findItemFull } from './dataRegistry';

const buildContext = (fieldState: NarrativeFieldState) => {
    return Object.entries(fieldState).map(([key, tags]) => {
      if (!tags || tags.length === 0 || key.startsWith('comm_')) return null;
      // Map to correct name
      let name = key;
      const engineBlock = NARRATIVE_ENGINE_BLOCKS.find(b => b.id === key);
      const skinBlock = ALL_SKIN_BLOCKS.find(b => b.id === key);
      
      if (engineBlock) name = engineBlock.enName;
      else if (skinBlock) name = skinBlock.enName;
      
      const definitions = tags.map(t => {
          const detail = findItemDetails(t);
          return detail ? `[${t}]: ${detail}` : null;
      }).filter(Boolean).join('; ');

      return `* **${name} (${key})**: ${tags.join(' + ')} \n      (${definitions})`;
  }).filter(Boolean).join('\n');
};

const getBannedWords = (fieldState: NarrativeFieldState): string => {
    const tags = Object.values(fieldState).flat();
    if (tags.length === 0) return "";
    
    // Extract the main name part (before parenthesis)
    const words = tags.map(t => t.split('(')[0].trim()).filter(w => w.length > 1);
    // Also add full tags
    const fullTags = tags.filter(t => t.length > 1);
    
    // Add common philosophical terms to ban list to force concretization
    const philosophicalTerms = [
      "大他者", "Big Other", "Object a", "对象a", "Symbolic Order", "符号界", 
      "Real", "实在界", "Imaginary", "想象界", "Alienation", "异化", 
      "Castration", "阉割", "Sinthome", "圣状", "Phallus", "菲勒斯"
    ];
    
    return [...new Set([...words, ...fullTags, ...philosophicalTerms])].join(', ');
};

// --- UPDATED FUNCTION: Determine Topology based on Specific Sub-Genre in Library ---
const getNarrativeTopology = (fieldState: NarrativeFieldState): string => {
    const genreTags = fieldState['skin_genre'] || [];
    const animTags = fieldState['skin_animation_genre'] || [];
    
    // Combine both pools for topology consideration
    const allTags = [...genreTags, ...animTags];
    
    if (allTags.length === 0) return FALLBACK_TOPOLOGY_TEMPLATE;
    
    // Try to find the selected genre item and return its specific topology
    for (const tag of allTags) {
        // We use the registry full item lookup to check for topology property
        const item = findItemFull(tag);
        
        if (item && item.topology) {
            return `
### 📐 TOPOLOGY: [${item.name}]
${item.topology}
`;
        }
    }

    // Fallback if no specific topology field is found
    const genreDefs = allTags.map(t => findItemDetails(t)).join('\n');
    
    let topologyHeader = "### 📐 TOPOLOGY: [DYNAMIC CONSTRUCTION]";
    if (animTags.length > 0) {
        topologyHeader = "### 📐 TOPOLOGY: [ANIMATION MODE]";
    }
    
    return `
${topologyHeader}
*   **Active Genre(s):** ${allTags.join(', ')}
*   **CORE LOGIC EXTRACTION:** 
    ${genreDefs}
*   **DIRECTIVE:** Use the "Core Logic" described above to determine the structural weight of M1-M7. 
    ${animTags.length > 0 ? "*   **ANIMATION MODE ACTIVE:** Narrative logic should fit the Animation medium. However, PHYSICS constraints are defined strictly by the World Law setting below." : ""}
    *   If the logic emphasizes action/violence -> Focus on M5.
    *   If the logic emphasizes fear/unknown -> Focus on M4.
    *   If the logic emphasizes emotion/relationships -> Focus on M3.
    *   If the logic emphasizes society/world -> Focus on S3/M4.
`;
};

export const buildNarrativePrompt = (
  duration: string,
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null,
  worldLaw: WorldLawConfig
): { text: string, images: string[] } => {
    
  const engineContext = buildContext(fieldState);
  const bannedWords = getBannedWords(fieldState);
  const topologyInstruction = getNarrativeTopology(fieldState);

  // Extract Genre for Prompt Customization
  const genres = [...(fieldState['skin_genre'] || []), ...(fieldState['skin_animation_genre'] || [])].join(', ');
  const activeGenre = genres || "Cinema/Drama";

  // Detect Animation Mode
  const isAnime = fieldState['skin_animation_genre']?.length > 0;

  // --- STAGE 0: PSYCHO-STRUCTURAL PROTOCOL (Critical) ---
  const m0Tags = fieldState['engine_m0'];
  let psychoProtocol = "";
  if (m0Tags && m0Tags.length > 0) {
      const tag = m0Tags[0];
      const details = findItemDetails(tag);
      psychoProtocol = `
## 🧠 PSYCHIC STRUCTURE PROTOCOL (M0: CRITICAL PRIORITY)
**You must structure the narrative logic based on the specific clinical mechanism of [${tag}].**

**DIAGNOSIS:** ${details}

**INSTRUCTION:**
- **IF [Ordinary Psychosis]:** Do NOT write a standard "madman" story. The subject appears normal but relies on a specific "Patch" (Work/Hobby/Ritual) to hold their reality together. The story MUST be about the threat to this Patch.
- **IF [Autism]:** The logic must be about "Closure" and "Defense" against the Big Other's intrusion. A world without the Other.
- **IF [Perversion]:** The logic must be about "Disavowal" and "Instrumentality". The subject knows the law but enjoys transversing it, or makes themselves an instrument of the Other's enjoyment.
- **IF [Hysteria]:** The logic is constant "Questioning" and "Unsatisfied Desire".
- **IF [Obsession]:** The logic is "Control" and "Procrastination" to keep the Other alive (but at a distance).
- **IF [Paranoia]:** The logic is "Meaning Overload". Everything is a sign. The Other is malicious.
`;
  }

  // --- STAGE 1: DURATION STRATEGY (CRITICAL UPDATE) ---
  const volumeTagRaw = fieldState['skin_volume']?.[0] || "";
  const volumeDef = STORY_VOLUMES.find(v => volumeTagRaw.includes(v.name) || volumeTagRaw === v.id);
  const structureTagRaw = fieldState['skin_structure']?.[0] || "Unknown Structure";
  
  let volumeInstruction = "";
  
  if (volumeDef) {
    volumeInstruction = `
    ## ⏱️ VOLUME PROTOCOL: ${volumeDef.name}
    **CRITICAL INSTRUCTION FOR AI:**
    ${volumeDef.structure_density}
    
    ## 🧩 STRUCTURE RECONCILIATION (Volume vs Structure)
    **Selected Structure:** ${structureTagRaw}
    
    **RECONCILIATION LOGIC:**
    *   **IF MICRO (<60s):** The Structure tag (e.g. "Loop", "Reverse") MUST be interpreted as a **VISUAL/EDITING TECHNIQUE**, not a plot device.
    *   **IF SHORT (1-3m):** The Structure dictates a **TIGHT PLOT ARC**. Focus on a single conflict and resolution. DO NOT treat this as a mood video. It must be a story.
    *   **IF NARRATIVE (>3m):** The Structure dictates the **FULL PLOT ARC** including character development and world building details.
    
    **EXECUTION:**
    Based on the Volume [${volumeDef.id}], you must adjust the complexity of the Structure [${structureTagRaw}] to fit the duration. 
    `;
  } else {
    // FIX: change 'weightInstruction' to 'volumeInstruction'
    volumeInstruction = `
    ## ⏱️ VOLUME PROTOCOL: STANDARD SHORT
    **CRITICAL INSTRUCTION FOR AI:**
    Write a standard 3-act synopsis. Balance specific scenes with overall arc.
    `;
  }

  // 1. Physics Layer (Updated Logic to respect World Law)
  let instructions = "";
  let physicsConstraint = "";
  if (worldLaw.physics === 'STRICT') {
      instructions += "PHYSICS: STRICT REALISM. Strictly adhere to the laws of physics. Gravity and causality are absolute.";
      physicsConstraint = "STRICT REALISM (NO MAGIC, NO SUPERNATURAL, STRICT PHYSICS)";
      if (isAnime) {
          instructions += " (REALISTIC ANIMATION). The medium is animation, but the logic is grounded (e.g. 'Slam Dunk', 'Jin-Roh', 'Perfect Blue'). Do NOT use exaggerated physics or cartoon logic.";
      } else {
          instructions += " No magic. No super-science unless implied by the Genre.";
      }
      instructions += "\n";
  } else {
      instructions += "PHYSICS: UNBOUND / DREAM LOGIC. Metaphors can be literalized. Physics serves the dynamic tension.";
      physicsConstraint = "UNBOUND FANTASY (MAGIC, DREAM LOGIC, & SURREALISM ALLOWED)";
      if (isAnime) {
          instructions += " (ANIME LOGIC / SAKUGA). Allow exaggerated physics, visual spectacles, and stylized action.";
      }
      instructions += "\n";
  }

  // 2. Context Layer (Updated for Pure/Fusion)
  let contextConstraint = "";
  if (worldLaw.context === 'PURE') {
    instructions += "CONTEXT: GENRE PURITY. Treat the selected genre as an absolute. If it's Wuxia, keep it pure Wuxia. If it's Noir, keep it pure Noir. Do not mix conflicting tropes.\n";
    contextConstraint = "GENRE PURITY (STRICTLY FOLLOW THE CHOSEN GENRE/ERA)";
  } else {
    instructions += "CONTEXT: GENRE FUSION. Encourage creative mixing of styles and tropes. Deconstruct the genre conventions. Mashup is encouraged.\n";
    contextConstraint = "GENRE FUSION (CREATIVE MASHUP ALLOWED)";
  }
  
  // --- ⚠️ CRITICAL FIX: DEFAULT ANCHOR INJECTION FOR 3 CARDS ---
  // If user has NOT selected an Era/Location, force a deduction based on M-Engine.
  let defaultAnchorInstruction = "";
  const hasEra = fieldState['skin_era'] && fieldState['skin_era'].length > 0;
  const hasLoc = fieldState['skin_location'] && fieldState['skin_location'].length > 0;
  
  // Custom Exact Year/Country Logic
  const exactYear = fieldState['skin_year_exact']?.[0];
  const exactCountry = fieldState['skin_country_exact']?.[0];
  let customCoordinates = "";
  
  if (exactYear || exactCountry) {
      customCoordinates = `
      ## 📍 PRECISE SPACETIME COORDINATES (HIGHEST PRIORITY)
      **You MUST set the story strictly within these coordinates:**
      *   **Year:** ${exactYear || "Any"}
      *   **Location/Country:** ${exactCountry || "Any"}
      
      **Instruction:** 
      Research the historical context of ${exactCountry || "the world"} in ${exactYear || "this era"}. 
      Reflect the technology, fashion, politics, and social atmosphere of that specific time and place in the narrative.
      This OVERRIDES any generic Era tag (e.g. if tag says "Ancient" but year is "2024", use 2024).
      `;
  }
  
  if (!hasEra && !hasLoc && !exactYear && !exactCountry) {
      if (worldLaw.physics === 'STRICT') {
          // STRICT MODE: International Scope, Realistic Logic
          defaultAnchorInstruction = `
          ## ⚓ DEFAULT REALITY ANCHOR (STRICT REALISM - INTERNATIONAL)
          **CRITICAL:** The user has NOT defined an Era or Location, and World Law is set to **STRICT**.
          **INSTRUCTION:**
          1.  **NO DEFAULT ERA:** Do NOT force "Present Day". Deduce the most appropriate era/setting based on the M-Engine tags (e.g., "The King" implies Historical/Monarchy, "The CEO" implies Modern).
          2.  **INTERNATIONAL SCOPE:** The story should be **World-Class / International** (Hollywood, Cannes, European Cinema style). Do NOT default to a Chinese setting unless the tags specifically imply it (e.g., Wuxia, Xianxia).
          3.  **PHYSICS:** Adhere strictly to the physical laws of the deduced era.
          `;
      } else {
          // UNBOUND MODE: Allow creativity based on M-Tags
          defaultAnchorInstruction = `
          ## ⚓ DEFAULT REALITY ANCHOR (UNBOUND FANTASY - GLOBAL)
          **CRITICAL:** The user has NOT defined an Era or Location, BUT World Law is set to **UNBOUND**.
          **INSTRUCTION:**
          1.  **CREATIVE FREEDOM:** Invent a world that best fits the dramatic tension of the M-Engine tags.
          2.  **SCOPE:** Aim for a universal or mythic appeal.
          3.  **INTERPRETATION:** You MAY interpret M-Tags explicitly (e.g., "M1 Cyborg" = Literal Robot) if it serves the story.
          `;
      }
  }
  
  // VISION ANCHOR LOGIC (NEW - IMPORTED)
  let visionAnchorInstruction = "";
  if (visionInput) {
      visionAnchorInstruction = getVisionAnchorProtocol(visionInput);
  }

  const promptText = `
Role: 殿堂级电影编剧 & 叙事架构师（戛纳/奥斯卡级别）。
Task: 基于提供的 DNA (M0-M7) 和语境 (S0-S7)，生成 3 个电影级的故事概念。

${visionAnchorInstruction}
${customCoordinates}

# 🔗 结构转译指令 (STRUCTURAL TRANSLATION INSTRUCTION)
**关键：你必须将抽象的 [结构] 转译为具象的 [电影感]。**

1.  **M1 主体 (Subject) 转译:**
    *   关键词: ${fieldState['engine_m1']?.join('/') || 'Unknown'}
    *   语境 (S1/S6): ${fieldState['skin_era']?.join('/') || 'Unknown'} / ${fieldState['skin_profession']?.join('/') || 'Unknown'}
    *   **任务:** 在这个特定 world 中，此人具体是谁？他们具体的匮乏是什么？

2.  **M4 大他者 (The Other) 转译:**
    *   关键词: ${fieldState['engine_m4']?.join('/') || 'Unknown'}
    *   **任务:** 将此阻碍转化为具体的反派、机构或自然力量。

3.  **M3 欲望 (Desire) 转译:**
    *   关键词: ${fieldState['engine_m3']?.join('/') || 'Unknown'}
    *   **任务:** 将此欲望转化为具体的麦高芬 (MacGuffin) 或对象 a。

${NAMING_PROTOCOL}

${THE_IRON_LAWS}

${THE_MASK_PROTOCOL}

${NARRATIVE_ALGEBRAIC_PROTOCOL}

## 🚫 禁用词汇表 (BANNED VOCABULARY LIST)
**严禁在叙事文本中使用以下抽象术语。请将其转化为具象意象。**
**黑名单:** [ ${bannedWords} ]

${NARRATIVE_ENGINE_FORMULA}

## 1. DNA 序列 (源头)
${topologyInstruction}
${psychoProtocol}
${volumeInstruction}
${engineContext}

## 2. 世界法则与美学
${instructions}
${defaultAnchorInstruction}
${LITERARY_AESTHETIC_PROTOCOL}

## 3. ★★★ 叙事质量控制 ★★★
**关键：别像个数据库，要像个作家。**
1.  **拒绝抽象 (NO ABSTRACTIONS):** 不要说“他感到异化”，要写“他盯着玻璃幕墙，手指触碰不到对面的世界”。
2.  **具体性 (SPECIFICITY):** 给角色一道伤疤、一个习惯、一种气味。给房间一个温度。
3.  **戏剧性 (DRAMA):** 每个 Pitch 必须包含 **激励事件 (Inciting Incident)**，**反转 (Twist)** 和 **结局 (Ending)**。
4.  **语言 (LANGUAGE):** 使用极具画面感、电影感的中文。**严格使用简体中文。**

## 4. 三重叙事镜头 (输出)
**关键：适配类型 [${activeGenre}]。**
**强约束警告：所有生成的路径都必须严格遵守以下世界法则：**
*   **物理法则:** ${physicsConstraint}
*   **语境法则:** ${contextConstraint}
**任何违反此法则的生成都将被视为失败。例如：如果物理法则为 STRICT REALISM，则故事中严禁出现魔法、鬼魂或超光速。**

### **OPTION 1: [STRUCTURALIST] - 结构主义 (Genre Perfection)**
*   **Logic:** **经典类型执行。** 世界严格按照 [${activeGenre}] 的规则运行。
*   **Constraint:** 严格遵守 [${physicsConstraint}] 和 [${contextConstraint}]。
*   **Vibe:** 专业、高预算、定义类型的。
*   **Task:** 写一个标准的 **${activeGenre}** 故事，其中 M4 是具体的外部力量。

### **OPTION 2: [POST_STRUCTURALIST] - 后结构 (Deconstruction)**
*   **Logic:** **内在冲突。** 类型只是主角创伤的投射。
*   **Constraint:** 严格遵守 [${physicsConstraint}] 和 [${contextConstraint}]。
*   **Vibe:** 王家卫、朴赞郁、A24。私密、主观、情感化。
*   **Task:** 写一个人物研究故事，其中 M4 是内在或关系性的。解构类型套路。

### **OPTION 3: [THE_REAL] - 实在界 (Atmosphere/World)**
*   **Logic:** **环境冲突。** 设定本身就是主角。关注氛围、哲学和存在的诡异感。
*   **Constraint:** 严格遵守 [${physicsConstraint}] 和 [${contextConstraint}]。
*   **Vibe:** 维伦纽瓦、塔可夫斯基。萦绕、哲学、慢热。
*   **Task:** 写一个氛围主导的故事，其中环境 (S2) 压倒了主体 (M1)。

## 5. 输出格式 (STRICT JSON)
**请使用纯正的简体中文。**

[
  {
    "id": "1",
    "type": "STRUCTURALIST", 
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch": "完整的故事梗概 (约 600 字)。必须包含激励事件、上升动作、高潮和结局。严格遵循 [${activeGenre}] 逻辑。必须遵守 [${physicsConstraint}]。",
    "structure": "GENRE_DRIVEN"
  },
  {
    "id": "2",
    "type": "POST_STRUCTURALIST", 
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch": "完整的故事梗概 (约 600 字)。聚焦于心理、情感和人物弧光。强调内在冲突。必须遵守 [${physicsConstraint}]。",
    "structure": "CHARACTER_DRIVEN"
  },
  {
    "id": "3",
    "type": "THE_REAL", 
    "title": "电影标题 (中文)",
    "tagline": "一句有力量的 Logline。",
    "pitch": "完整的故事梗概 (约 600 字)。聚焦于氛围、世界构建和哲学。环境是反派。必须遵守 [${physicsConstraint}]。",
    "structure": "ATMOSPHERE_DRIVEN"
  }
]
`;

  return { text: promptText, images: visionImage ? [visionImage] : [] };
};

export const buildNarrativeBiblePrompt = (
    treatment: CreativeTreatment,
    styleConfig: StyleConfig,
    fieldState?: NarrativeFieldState,
    visionInput?: string,
    worldLaw?: WorldLawConfig
): string => {
    // 1. Get Volume Definition to enforce Pacing
    const volumeTagRaw = fieldState ? (fieldState['skin_volume']?.[0] || "") : "";
    const volumeDef = STORY_VOLUMES.find(v => volumeTagRaw.includes(v.name) || volumeTagRaw === v.id);
    
    // 2. Define Bible Strategy based on Volume
    let bibleStrategy = "";
    let targetWordCount = "1500"; 
    let literatureType = "Short Story";

    if (volumeDef) {
        targetWordCount = volumeDef.word_count;
        if (volumeDef.id.includes('15S') || volumeDef.id.includes('30S')) {
            literatureType = "Flash Fiction / Cinematic Prose Poem";
            bibleStrategy = `**模式：瞬间冲击 (MODE: INSTANT IMPACT)**\n聚焦于单瞬间的无限细节爆发。不要写冗长的背景故事。`;
        } else if (volumeDef.id.includes('60S') || volumeDef.id.includes('90S') || volumeDef.id.includes('3M')) {
            literatureType = "Compact Short Story";
            bibleStrategy = `**模式：紧凑叙事 (MODE: COMPACT NARRATIVE)**\n一个包含紧凑弧光的完整故事：激励事件 -> 高潮 -> 结局。保持快节奏。`;
        } else if (volumeDef.id.includes('5M') || volumeDef.id.includes('15M')) {
            literatureType = "Narrative Short Story";
            bibleStrategy = `**模式：丰富短篇 (MODE: RICH SHORT STORY)**\n具有强烈角色发展的标准三幕结构。给场景留出呼吸空间。`;
        } else {
            literatureType = "Novella Chapter / Treatment";
            bibleStrategy = `**模式：宏大叙事 (MODE: EXPANSIVE NARRATIVE)**\n一个丰富、宏大的叙事篇章，包含详细的世界构建。`;
        }
    } else {
        bibleStrategy = "**模式：标准短篇 (MODE: STANDARD SHORT STORY)**";
    }

    const bannedWords = fieldState ? getBannedWords(fieldState) : "";
    const topologyInstruction = fieldState ? getNarrativeTopology(fieldState) : "";

    // M0 PROTOCOL
    let psychoProtocol = "";
    if (fieldState) {
        const m0Tags = fieldState['engine_m0'];
        if (m0Tags && m0Tags.length > 0) {
            const tag = m0Tags[0];
            const details = findItemDetails(tag);
            psychoProtocol = `## 🧠 PSYCHIC STRUCTURE PROTOCOL\n**Mechanism:** ${details}`;
        }
    }
    
    // WORLD LAW INJECTION
    let worldLawInstruction = "";
    if (worldLaw) {
         const isAnime = fieldState ? (fieldState['skin_animation_genre']?.length > 0) : false;
         
         // 1. PHYSICS LOGIC
         let physicsContent = "";
         if (worldLaw.physics === 'STRICT') {
             physicsContent = `**STRICT REALISM (严守现实)**\n   *   **Rule:** 严格遵循现实世界的物理法则。严禁出现魔法、超能力或不符合时代背景的黑科技。\n   *   **Constraint:** 即使在描写心理活动时，也不要将其具象化为物理现象。重力、因果律是绝对的。`;
             if (isAnime) {
                 physicsContent = `**GROUNDED ANIMATION (写实动画逻辑)**\n   *   **Reference:** 类似于《灌篮高手》或《人狼》，虽然是动画，但物理法则严谨。`;
             }
         } else {
             physicsContent = `**UNBOUND FANTASY (幻想开放)**\n   *   **Rule:** 允许梦境逻辑、超自然现象或物理法则的扭局。隐喻可以变为现实。\n   *   **Constraint:** 这种自由必须服务于戏剧张力，而非随意的混乱。`;
             if (isAnime) {
                 physicsContent = `**ANIME LOGIC (动画逻辑)**\n   *   **Rule:** 允许夸张的物理表现 (Sakuga logic)、视觉隐喻实体化。`;
             }
         }

         // 2. CONTEXT LOGIC
         let contextContent = "";
         if (worldLaw.context === 'PURE') {
             contextContent = `**GENRE PURITY (类型纯化)**\n   *   **Rule:** 保持类型的一致性。如果设定是[古代]，就严禁出现[现代/科幻]元素。如果设定是[武侠]，就不要混入[西幻]。\n   *   **Constraint:** 清洗任何不属于该核心时空/类型的异质元素。`;
         } else {
             contextContent = `**GENRE FUSION (混搭融合)**\n   *   **Rule:** 鼓励类型的碰撞。将不相容的元素（如[古代]与[赛博]）进行创造性融合。\n   *   **Constraint:** 寻找缝合点，创造独特的混合美学。`;
         }

         worldLawInstruction = `
         ## ⚖️ WORLD LAW (世界法则 - 最高优先级)
         *   **PHYSICS:** ${physicsContent}
         *   **CONTEXT:** ${contextContent}
         `;
    }
    
    // SMART ANCHOR LOGIC
    let defaultAnchorInstruction = "";
    const hasEra = fieldState && fieldState['skin_era'] && fieldState['skin_era'].length > 0;
    const hasLoc = fieldState && fieldState['skin_location'] && fieldState['skin_location'].length > 0;
    
    // Custom Exact Year/Country Logic
    const exactYear = fieldState ? fieldState['skin_year_exact']?.[0] : null;
    const exactCountry = fieldState ? fieldState['skin_country_exact']?.[0] : null;
    let customCoordinates = "";
    
    if (exactYear || exactCountry) {
          customCoordinates = `
          ## 📍 PRECISE SPACETIME COORDINATES (HIGHEST PRIORITY)
          **You MUST set the story strictly within these coordinates:**
          *   **Year:** ${exactYear || "Any"}
          *   **Location/Country:** ${exactCountry || "Any"}
          
          **Instruction:** 
          Research the historical context of ${exactCountry || "the world"} in ${exactYear || "this era"}. 
          Reflect the technology, fashion, politics, and social atmosphere of that specific time and place in the narrative.
          This OVERRIDES any generic Era tag.
          `;
    }

    if (!hasEra || !hasLoc) {
         const missingParts = [];
         if (!hasEra) missingParts.push("ERA/TIME PERIOD");
         if (!hasLoc) missingParts.push("LOCATION/SETTING");
         
         if (worldLaw?.physics === 'STRICT') {
             defaultAnchorInstruction = `
            ## ⚓ 锚点推演 (ANCHOR DEDUCTION - STRICT REALISM)
            **关键：用户未定义：${missingParts.join(' & ')}。**
            **指令:**
            1.  **推演:** 你必须基于角色 (M1) 和类型推演出最合乎逻辑的 ${missingParts.join(' 和 ')}。
            2.  **范围:** 如果模棱两克，默认为**世界级/国际化**设定 (例如：如果是黑色电影，假设是洛杉矶或香港；如果是史诗奇幻，假设是中土世界原型)。
            3.  **一致性:** 确保推演出的设定严格遵循物理法则。
            `;
        } else {
             defaultAnchorInstruction = `
            ## ⚓ 锚点推演 (ANCHOR DEDUCTION - UNBOUND FANTASY)
            **关键：用户未定义：${missingParts.join(' & ')}。**
            **指令:**
            1.  **创造:** 发明一个能最大化 M-Engine 标签戏剧张力的 ${missingParts.join(' 和 ')}。
            2.  **范围:** 追求普世或神话般的吸引力。
            3.  **自由:** 你可以将隐喻具象化（例如：如果 M1 是“幽灵”，设定可以是字面意义上的炼狱）。
            `;
        }
    }

    const dnaContext = fieldState ? `## B. ENGINE DNA (Structure)\n${buildContext(fieldState)}` : "";
    
    let visionContext = "";
    if (visionInput) {
        visionContext = getVisionAnchorProtocol(visionInput);
    }

    // Construct Style Instructions
    const styleItem = STYLE_MATRIX.flatMap(c => c.items).find(i => i.id === styleConfig.styleId);
    const perspective = PERSPECTIVES.find(p => p.id === styleConfig.perspectiveId);
    const sensory = SENSORY_MODES.find(s => s.id === styleConfig.sensoryId);
    const directorStyle = DIRECTOR_STYLES.find(d => d.id === styleConfig.styleId); 
    
    let styleName = "Standard Literary";
    let styleDNA = "";

    if (directorStyle) {
        styleName = directorStyle.name;
        styleDNA = `Cinematic style of ${directorStyle.name}. Core traits: ${directorStyle.core}. Definition: ${directorStyle.def}`;
    } else if (styleItem) {
        styleName = styleItem.name;
        styleDNA = `Literary style of ${styleItem.name}. DNA: ${styleItem.dna}. ${styleItem.description || ''} ${styleItem.example ? `(e.g. ${styleItem.example})` : ''}`;
    }

    const povInstruction = perspective ? `**Point of View:** ${perspective.name}\n   *   **Directive:** ${perspective.prompt}` : "";
    const sensoryInstruction = sensory ? `**Sensory Priority:** ${sensory.name}\n   *   **Directive:** ${sensory.prompt}` : "";

    return `
# 1. Role: 文学大师 & 影子写手。
# Task: 撰写一篇 ${literatureType}。

**关键指令:**
你**不是**在写剧本大纲或摘要。你是在写一篇**完整的文学小说**。
**目标长度：大约 ${targetWordCount} 个中文字符。**

**命名协议:**
以简体中文输出创意圣经。
但是，对于所有**角色名**、**地名**、**物品名**和**专有名词**，必须使用格式：**中文名 (英文名)**。

# 2. 系统协议与法则
*(Internal Guidelines)*

${bibleStrategy}
${NAMING_PROTOCOL}
${LITERARY_AESTHETIC_PROTOCOL}
${STYLE_LOGIC_PROTOCOL}
${worldLawInstruction}
${defaultAnchorInstruction}
${customCoordinates}
${THE_IRON_LAWS}
${THE_MASK_PROTOCOL}
${NARRATIVE_ALGEBRAIC_PROTOCOL}
${NARRATIVE_ENGINE_FORMULA}

## 🧬 视觉资产美学标准 (VISUAL ASSET STANDARDS)
1. **人物 (Characters):** 必须遵循【美型 (Aesthetic Perfection)】原则。即使角色有残缺或伤痕，其整体形象必须具有高审美、高阶感。提示词应强调精致的面部比例、考究的质感。
2. **场景与物品 (Locations & Props):** 必须具有【极强电影感 (Cinematic)】与【深邃意境 (Atmospheric)】。侧重光影的艺术化表达（如 Chiaroscuro）、材质的真实感以及环境的叙事深度。
3. **提示词格式:** 每个资产的 \`view\` 对象中必须同时包含 \`promptCn\` (中文提示词) 和 \`promptEn\` (英文提示词)。

## 🚫 词汇黑名单
**不要使用抽象的引擎术语，如 "大他者", "对象 a"。请转译它们。**
**禁用标签:** [ ${bannedWords} ]

# 3. 原始素材
## A. 概念草案 (The Draft)
*   **标题:** ${treatment.title}
*   **基调:** ${treatment.tagline}
*   **核心创意:** ${treatment.pitch}

${visionContext}
${topologyInstruction}
${psychoProtocol}
${dnaContext}

# 4. ★★★ 风格执行 (关键) ★★★
**你必须完全采用以下人格面具和写作风格：**
*   **作者声音:** ${styleName}
*   **风格基因:** ${styleDNA}
*   **风格指令:** 模仿这位作者/导演的句式结构、节奏和词汇。
${povInstruction}
${sensoryInstruction}

# 5. 输出格式 (STRICT JSON)
Output ONLY valid JSON. 
**CRITICAL:** The 'synopsis' field MUST contain the **FULL STORY TEXT** (The actual prose/fiction), NOT a summary.
**CRITICAL:** All asset descriptions ("desc") MUST be in **Simplified Chinese**.

{
  "treatmentId": "${treatment.id}",
  "driverType": "NARRATIVE",
  "styleName": "${styleName}",
  "narrative": {
    "title": "Story Title (CN + EN)",
    "logline": "A one-sentence hook (CN).",
    "synopsis": "深度扩展后的剧本内容 (中文)。这是核心部分。\\n\\n**核心指令 1 (转译):** 严禁在正文中出现任何引擎参数名称以及哲学等理论学术名词（如 'M1', 'S2', '大他者', '对象a' 等）。你必须将这些参数和专业名词进行【文学性转译】(Literary Transcoding)，使其彻底消融在具体的故事描写、人物动作和环境氛围中。例如：不要写'M1感到了异化'，要写'他看着玻璃幕墙里的倒影，觉得那张脸比自己更像主人'。\\n\\n**核心指令 2 (文风):** 拒绝理工科式的枯燥陈述或说明书式的语言。追求极强的【电影感】(Cinematic)、【画面感】与【文艺感】。严格模仿 [${styleName}] 的笔触，注重光影、质感、气味与潜台词的描写。\\n\\n字数要求：${targetWordCount}字。"
  },
  "context": {
    "world": "Fallback text",
    "worldCn": "世界观与物理规律 (CN)",
    "worldEn": "World Building & Physics Rules (EN)",
    "tone": "Fallback text",
    "toneCn": "视觉影调与色彩 (CN)",
    "toneEn": "Visual & Atmospheric Tone (EN)",
    "colorPalette": ["#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", "#Hex6", "#Hex7"],
    "moodboard": { "prompt": "Midjourney Prompt for Key Visual", "promptCn": "中文提示词", "promptEn": "English Prompt" }
  },
  "assets": {
    "characters": [
      { "id": "char_1", "name": "Name (English Name)", "tag": "Archetype", "desc": "外观与心理描述 (必须使用中文)", "view": { "promptCn": "中文提示词 (美型、高审美)", "promptEn": "English Prompt (Aesthetic, high-end beauty)" } }
    ],
    "locations": [
      { "id": "loc_1", "name": "Name (English Name)", "tag": "Type", "desc": "氛围与细节描述 (必须使用中文)", "view": { "promptCn": "中文提示词 (电影感、意境)", "promptEn": "English Prompt (Cinematic, atmospheric)" } }
    ],
    "props": [
      { "id": "prop_1", "name": "Name (English Name)", "tag": "Type", "desc": "象征与材质描述 (必须使用中文)", "view": { "promptCn": "中文提示词 (质感、电影感)", "promptEn": "English Prompt (Textured, cinematic)" } }
    ]
  }
}
`;
};