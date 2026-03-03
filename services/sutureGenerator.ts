
import { NarrativeFieldState, GlobalVisualTone, FinalAssetsData } from '../types';
import { getBlockName } from '../utils/blockUtils';
import { findItemDetails } from './dataRegistry';

// Re-export Step 1 logic from new file
export { buildSutureStep1Prompt } from './suture_script_prompt';

// Helper to format field state for the prompt with definitions
const buildEngineContext = (fieldState?: NarrativeFieldState) => {
    if (!fieldState) return "";
    
    return Object.entries(fieldState).map(([key, tags]) => {
      if (!tags || tags.length === 0) return null;
      // Use utility to get correct name for any driver block
      const name = getBlockName(key, 'CN'); 
      
      const enrichedTags = tags.map(t => {
          const details = findItemDetails(t, key);
          const cleanDetails = details.replace(/Definition: | \| Core Logic: /g, ' ').trim();
          return cleanDetails ? `${t} <${cleanDetails}>` : t;
      }).join(' + ');

      return `* **${name} (${key})**: ${enrichedTags}`;
    }).filter(Boolean).join('\n');
};

// --- STEP 2: STORYBOARD DATA (GENERATE STATIC OR DYNAMIC) ---
export const buildSutureStep2Prompt = (
    script: string, 
    fullStory: string,
    fieldState: NarrativeFieldState,
    globalTone: GlobalVisualTone,
    target: 'STATIC' | 'DYNAMIC' | 'ALL' = 'ALL',
    visualAnchorImage: boolean = false, 
    globalStyleContext?: { tone: GlobalVisualTone, assets: FinalAssetsData }
): string => {

  const engineContext = buildEngineContext(fieldState);
  
  let roleInstruction = "";
  let targetInstruction = "";
  let jsonOutputInstruction = "";
  
  // NEW: Visual Anchor Protocol Injection
  let visualAnchorProtocol = "";
  if (visualAnchorImage) {
      visualAnchorProtocol = `
      ## 👁️ 视觉锚点协议 (SCENE ANCHOR - HIGH PRIORITY)
      **CRITICAL:** I have provided a **Reference Image** for this specific scene.
      Use this to ground the environment details.
      `;
  }

  // --- VISUAL BIBLE PROTOCOL (MOUNTED) FOR STORYBOARD ---
  let visualBibleInstruction = "";
  let assetInjection = "";
  let styleKeywords = "";
  
  if (globalStyleContext) {
      const g = globalStyleContext.tone;
      styleKeywords = `${g.style || ''} ${g.lighting || ''} ${g.texture || ''}`;

      assetInjection = `
      **ASSET DICTIONARY (Character/Object Replacement):**
      If the script mentions these assets, describe them using their Visual Anchors:
      ${globalStyleContext.assets.characters.map(c => `* "${c.name}" -> Visually: ${c.anchors}`).join('\n')}
      ${globalStyleContext.assets.scenes.map(s => `* "${s.name}" -> Visually: ${s.anchors}`).join('\n')}
      ${globalStyleContext.assets.props.map(p => `* "${p.name}" -> Visually: ${p.anchors}`).join('\n')}
      `;

      visualBibleInstruction = `
### 👁️ 视觉圣经强制协议 (VISUAL BIBLE PROTOCOL)
**Global Tone:** ${styleKeywords}
${assetInjection}
      `;
  }

  if (target === 'STATIC') {
      roleInstruction = `**Role: 世界级摄影指导 (DOP) & 美术总监 (Art Director)。**`;
      targetInstruction = `
      **任务目标：生成【静态分镜表 (Static Storyboard)】。**
      
      ### 核心逻辑：视觉对位 (VISUAL SYNTHESIS)**
      1.  **保留骨架：** 严格保留原剧本的【镜号】、【景别】、【构图】、【动作内容】和【台词】(1:1 复刻)。
      2.  **重塑皮相：** 使用【参考图/视觉圣经】的风格、质感、光影、色调，去“渲染”原剧本的画面描述。
      3.  **对位原则：** 如果故事内容与视觉风格冲突（如悲剧故事配喜剧风格），请保留这种冲突。**不要修改故事内容来迁就风格。**
      
      **绝对禁止** 生成 dynamicStoryboard。
      **请务必只返回 [staticStoryboard] 数组。**
      `;
      jsonOutputInstruction = `
      1. **staticStoryboard**: 数组对象。每个对象包含：
        *   *id*: 镜号 (如 "#1-1-1", 必须与剧本一致)。
        *   *shotSize*: **景别 (Size)**. (e.g., ECU, CU, MCU, MS, LS, ELS). **MUST NOT BE EMPTY.**
        *   *composition*: **构图 (Comp)**. (e.g., Center, Rule of Thirds, Low Angle). **MUST NOT BE EMPTY.**
        *   *angle*: **角度 (Angle)**. (e.g., Low, High, Eye Level). **MUST NOT BE EMPTY.**
        *   *visualDesc*: **画面美术描述 (中文)**. 必须包含 **【资产名】** 和 **详细的材质/光影描述**。这部分必须体现“视觉对位”的结果，用参考图的风格去描述剧本的事件。
        *   *visualDescEn*: **High-Fidelity Visual Prompt (English)**. Must include specific texture adjectives, lighting terms, and asset anchors from the Bible. (e.g. "Close up of Odo's rough fingers touching dry bread, texture of crust, rim lighting, dust particles, [Texture Keyword]").
        *   *sound*: **音效/音乐 (中文)**。仅包含非对白的声音信息。
        *   *dialogue*: **台词/语音/字幕 (中文)**。**必须1:1完整保留剧本中的所有台词和字幕(Text Card)。严禁删减，严禁使用省略号(...)。如果原剧本有字幕卡，也在此处写明。**
        *   *dialogueEn*: **Dialogue (English)**. Translated dialogue.
      `;
  } else if (target === 'DYNAMIC') {
      roleInstruction = `**Role: 资深执行导演 & 分镜师 (Senior Director & Storyboard Artist)。**`;
      targetInstruction = `
      **任务目标：生成【动态分镜表 (Dynamic Storyboard)】。**
      **绝对要求：**
      1.  **三合一视觉流：** 将【运镜】、【人物动作】、【画面变化】、【环境动态】全部合并写入 **[visualAction]** 字段。**仅生成这一份中文视觉描述，不要拆分。**
      2.  **声音与台词:** 必须生成 [sound] (仅中文) 和 [dialogue] (双语)。如果无声或无台词，填 "无"。
      3.  **台词格式 (自然语言):** 必须使用自然语言描述台词的情境与内容。例如：
          *   CN: "【对白】奥多生气地拍了下桌子，然后说：你这个笨蛋。"
          *   CN: "【旁白】一个苍老的叙述者的画外音：1840年，鸦片战争爆发。"
          *   EN: "[Dialogue] Odo slaps the table angrily and says: You idiot."
      
      ### 核心逻辑：流动叙事 (LIQUID NARRATIVE FLOW)
      请参考以下优秀范例 (Few-Shot Examples)，不要写死板的关键词，要写**“有时间流动感的一段话”**。
      
      **参考范例 (Examples):**
      *   "画里面的人物心虚的表情，眼睛左右看了看探出画框，快速的将手伸出画框拿起可乐喝了一口，然后露出一脸满足的表情，这时传来脚步声，画中的人物赶紧将可乐放回原位，此时一位西部牛仔拿起杯子里的可乐走了，最后镜头前推画面慢慢变得纯黑背景只有顶光照耀的罐装可乐，画面最下方出现艺术感字幕..."
      *   "镜头小幅度拉远（露出街头全景）并跟随女主移动，风吹拂着女主的裙摆，女主走在19世纪的伦敦大街上；女主走着走着右边街道驶来一辆蒸汽机车，快速驶过女主身旁，风将女主的裙摆吹起，女主一脸震惊的赶忙用双手向下捂住裙摆..."

      **写作规范 (Rules):**
      1.  **纯中文叙事:** 使用流畅的中文描写 [visualAction]。
      2.  **时间与变化:** 描述动作的**过程** (Process)，而不仅仅是状态。使用“然后”、“瞬间”、“此时”等连接词。
      3.  **合并运镜与环境:** 将“镜头跟随...”、“大雨倾盆...”等描述自然地融入动作描写中，形成完整的画面流。
      4.  **资产替换:** 如果剧本涉及核心资产（角色/道具），必须使用 Asset Dictionary 中的视觉描述。
      5.  **完整性:** 音效和台词必须完整对应，即使是留白镜头也要描述环境音。

      **绝对禁止** 生成 staticStoryboard。
      **请务必只返回 [dynamicStoryboard] 数组。**
      `;
      jsonOutputInstruction = `
      1. **dynamicStoryboard**: 数组对象 (ID 必须与剧本对应)。每个对象包含：
        *   *id*: (String) 镜号 (如 #1-1-1).
        *   *duration*: (String) 预估时长 (e.g. "4s").
        *   *visualAction*: (String - 中文) **动态视觉流**。必须包含：人物动作 + 运镜方式 + 环境氛围 + 画面变化。写成一段流畅的描述。
        *   *sound*: (String - 中文) 音效/音乐。例如："沉重的雷声，背景有低沉的管弦乐。" 如果无声，填 "无"。
        *   *dialogue*: (String - 中文) 自然语言格式的台词。例如："【对白】奥多大喊：停下！" 如果无台词，填 "无"。
        *   *dialogueEn*: (String - English) Natural language dialogue. e.g., "[Dialogue] Odo shouts: Stop!" If none, fill "None".
      `;
  } else {
      // ALL (Fallback)
      roleInstruction = `**Role: 全能电影视觉导演。**`;
      targetInstruction = `**任务：必须同时生成 [staticStoryboard] 和 [dynamicStoryboard] 两个数组。**`;
      jsonOutputInstruction = `
      1. **staticStoryboard**: [包含所有静态摄影参数，见上文定义]
      2. **dynamicStoryboard**: [包含所有动态视频指令，见上文定义]
      `;
  }

  // NOTE: For Dynamic mode, we do NOT inject the global tone or visual bible style suffix
  // to prevent overriding the "Liquid Narrative" logic and to respect the user's request for no style tags.
  // We only inject visual anchor logic if present.
  const dynamicVisualInjection = target === 'DYNAMIC' ? visualAnchorProtocol : `${visualAnchorProtocol}\n${visualBibleInstruction}`;

  return `
${roleInstruction}
${targetInstruction}

# 📖 1. 叙事语境 (理解灵魂)
*   **全故事大纲：** 
    "${fullStory.slice(0, 1000)}..."
*   **核心参数 (DNA)：**
    ${engineContext}

# 📷 2. 视觉锚点 & 圣经 (VISUAL BIBLE)
${dynamicVisualInjection}

# 🎬 3. 文学剧本 (原始素材)
**你必须将以下文本（分镜组）转化为视觉方案：**
"${script}"

# 🎨 4. 全局视觉基调 (Default Fallback)
*   **风格：** ${globalTone.style}
*   **摄影机/镜头：** ${globalTone.camera}
*   **材质/渲染：** ${globalTone.texture}
*   **光影：** ${globalTone.lighting}

# ⚙️ 5. 执行要求 (EXECUTION)
1.  **镜头对应：** 必须提取剧本中的**每一个**镜头。输出的 ID 必须与剧本表头 ID 完全一致 (例如 **#1-1-1**, **#1-1-2**...)。

2.  **画面细节格式 (关键 - 静态):** 
    在 'visualDesc' 字段中，必须使用以下格式：
    **[标签]: 内容 [标签]: 内容...**
    *   **资产引用：** 使用 **【资产名】** 格式。
    *   **标签：** [主体], [表情], [姿态], [道具], [环境], [场景], [前景], [背景]
    *   **约束：** 写成单行，不要换行。
    *   **再次强调：** 内容必须是**极具画面感、材质感、光影感**的描述 (Art Direction)，而不仅仅是动作描述。

3.  **声音与台词 (关键 - 静态):**
    *   在 'sound' 字段中，只包含音效 (SFX) 和音乐 (Music/Score)。
    *   在 'dialogue' 字段中，完整记录所有语音内容 (Dialogue/VO/Monologue) 以及字幕 (Text Card)。**严禁省略**，必须完整保留剧本中的台词内容。
    
4.  **动态专用 (关键 - 动态):**
    *   **不要生成 videoPrompt (英文 MJ 提示词)。**
    *   **必须生成 visualAction (中文动态视觉流)。**
    *   **不要生成 soundEn (英文音效)。**
    *   **三合一：** 将运镜、动作、环境写在一起。
    *   **推演原则：** 如果剧本中只写了“他很伤心”，你的 *visualAction* 必须写出：“他低着头，双手掩面，肩膀微微颤抖，眼泪从指缝中流出。” (将心理具象化为物理动作)。
    *   **音效与台词：** 必须生成 [sound] 和 [dialogue]。台词使用自然语言描述情境。如果无，请明确写"无"。

5.  **双语要求 (强制 - 静态)：**
    *   所有带 'En' 后缀的字段必须 provide 高质量的英文翻译。

# 📦 6. 输出格式 (STRICT JSON)

生成一个 JSON 对象。
${jsonOutputInstruction}

# START JSON:
`;
};
