
import { MONTAGE_STYLES } from '../data/suture_montage';

// Helper to format montage styles for the prompt
const getMontageStyleList = () => {
  return MONTAGE_STYLES.map(s => `- ID: "${s.id}" | Name: "${s.name}" | Core Logic: "${s.core}"`).join('\n');
};

export const buildScriptBreakdownPrompt = (sourceText: string, instruction?: string, targetCount?: number): string => {
  const montageList = getMontageStyleList();

  let specialInstructions = "";
  if (targetCount) {
    specialInstructions += `*   **TARGET SCENE COUNT:** 用户希望尽量切分为 **${targetCount} 个场次**。这是软目标：请尽量贴近，但不得破坏地点/时间边界、人物目标变化、信息释放顺序、动作链完整性和戏剧结果。\n`;
  }
  if (instruction) {
    specialInstructions += `*   **CUSTOM LOGIC:** ${instruction}\n`;
  }

  const instructionSection = specialInstructions ? `
### 🚨 特殊分场指令 (USER SPECIAL INSTRUCTION)
用户明确要求以下分场偏好。请优先尊重，但所有偏好都不得突破场景边界、动作链、信息释放顺序和视觉事实约束：
${specialInstructions}
` : "";

  return `
Role: 资深电影剪辑师 & 视觉叙事架构师 (Senior Editor & Narrative Architect).
Task: 对输入的故事文本进行 **"深度结构化拆解 (Deep Structural Breakdown)"**。

${instructionSection}

**此任务包含两个并行的核心目标：**
1.  **剧本分场 (Scene Segmentation):** 将文本切分为具体的戏剧性场次。
2.  **视觉圣经提取 (Visual Bible Extraction):** 分析全篇的视觉风格、影调与核心资产。

---

### 目标 1: 剧本分场法则 (SCENE SEGMENTATION LOGIC)

#### 1. 数量与体量约束 (Volume Constraints)
*   **目标场数:** 如果用户提供了目标场数，优先贴近该数量；但目标场数只是软约束，不得破坏场景边界、动作链、信息释放顺序和戏剧完整性。
*   **自动场数:** 如果用户未提供目标场数，不要按固定数量切分；必须根据地点、时间、人物目标、信息状态、动作链完成度和结果变化自动决定场数。
*   **标准体量:** 对 2000 字左右的故事，通常建议 5-8 场；但最终数量以戏剧结构为准。
*   **禁止硬切:** 不得为了凑够数量，把同一动作链拆成无意义小场；不得为了减少数量，把地点/时间/目标/信息状态已经明显变化的段落硬合并。
*   **每场底线:** 每一场必须有明确的视觉重心、人物处境、叙事推动力或信息状态变化。

#### 2. 切分判断逻辑 (Segmentation Logic)
按以下优先级判断是否分场：
1.  **地点变化:** 地点发生实质性变化，必须分场。
2.  **时间跳跃:** 出现明确时间跳跃，通常分场；时间词应吸附到新场开头作为建立信息。
3.  **人物目标变化:** 人物从“等待/观察”转为“攻击/逃跑/谈判/隐瞒/揭露”等新目标，优先分场。
4.  **信息状态变化:** 观众或角色获得关键新信息，导致当前场景功能改变，优先分场。
5.  **动作链完成:** 一个完整行动链结束并进入余波、休憩或新危机，优先分场。
6.  **权力关系变化:** 对峙双方的优势、威胁或控制权发生转移，优先分场。
7.  **仅有语气变化不分场:** 单纯情绪起伏、修辞变化、比喻变化、心理描写加深，不应单独分场。
*   **序幕原则 (Prologue):** 开头的环境描写、引用、背景介绍必须合并为 [SCENE 1]，除非它已经形成独立动作链。
*   **转场吸附 (Transition Anchor):** “三天后”、“夜幕降临”等时间流逝词，标志着上一场的结束，它们应作为下一场的“建立镜头”吸附在下一场开头。

### 场景类型参考 (Archetypes)
*   [SETUP] (铺垫), [ACTION] (动作), [RESPITE] (休憩), [TENSION] (悬疑), [CLIMAX] (高潮)。
*   请为每场戏分配一个最适合的 **Montage Style ID**：
${montageList}
*   **场景类型与剪辑结构必须拆开:** sceneType 只描述本场戏的戏剧功能；montageId 只描述镜头之间的剪辑关系。不得输出列表外的 montageId。

---

### 目标 2: 视觉圣经提取 (VISUAL BIBLE EXTRACTION)

**必须基于全文分析，提取以下两层视觉数据。请务必生成详细内容，不可留白。视觉圣经只提取事实资产与物理视觉条件，不提前染色，不生成最终美术风格。**
**字段容器必须与前端一致:** visualBible.toneAnalysis 会进入“原文风格”的全局影调容器；visualBible.assets.*[].analysis 会进入核心资产卡。不得把 anchors/description 直接放在资产根字段上。

#### A. 全局视觉事实 (Global Visual Facts)
*   **Lighting (光影):** 只写源文本明确出现或物理必然成立的光源、时间、天气、遮挡、明暗关系。不得写最终调色、滤镜、媒介风格。
*   **Texture (材质):** 只写源文本出现的材质、表面状态、磨损、潮湿、尘土、血迹、泥土、布料、金属等事实。
*   **World Look / Style (世界视觉事实):** 只写时代、地点、建筑、服饰、自然环境等世界视觉事实。不得擅自命名为赛博朋克、哥特、黑色电影、油画、动画等最终风格；除非源文本明确要求。
*   **Camera (镜头):** 只写从全文气质推导出的摄影倾向，如远景观察、近景身体细节、主观视线、长焦压缩或手持感；不得写具体镜头品牌、胶片型号或后期质感，除非源文本明确要求。
*   **修辞隔离:** 比喻只能转译为气氛、身体感、材质倾向或动作感，不得变成实际道具、颜色、实体或声音来源。例如“黑色闪电”不能变成真实黑色闪电，只能作为“箭矢速度快、雾中暗影掠过”的动作描述。

#### B. 核心资产提取 (Asset Extraction)
提取故事中最关键的 **角色 (Characters)**、**场景 (Scenes)** 和 **道具 (Props)**。
*   只提取全文中已经出现、反复影响叙事或后续需要保持一致的角色、场景和道具。
*   **Anchors (高权重视觉锚点):** 提取 3-5 个可被生图模型识别的视觉关键词。不得写性格、命运、关系评价。**必须生成**。
*   **Description (详细视觉描述):** 只写外貌、材质、颜色、结构、磨损、尺度、光影关系。不要写心理、主题和剧情解释。**必须生成**。
*   如果颜色、服装细节、材质未在源文本中明示，不要编造；写“未明示，需后续资产设计锁定”。
*   修辞比喻不得直译为实体资产；只能作为氛围或动作质感的描述依据。

---

### 输入素材 (SOURCE TEXT)
"""
${sourceText}
"""

### 输出格式 (STRICT JSON)
**严禁 Markdown 格式，只返回纯 JSON。**

{
  "scenes": [
    {
      "sceneId": "SCENE_01",
      "title": "场景标题 (e.g. SCENE 1 - 盲者的荒原 [序幕])",
      "slugline": "EXT. [地点] - [时间]",
      "sceneType": "SETUP",
      "paragraph_indices": [1, 2, 3],
      "sourceRange": {
        "paragraphStart": 1,
        "paragraphEnd": 3,
        "startQuote": "该场开头的短原文摘录",
        "endQuote": "该场结尾的短原文摘录"
      },
      "montageId": "montage_delayed_information",
      "visualStyleName": "视觉事实资产协议",
      "narrativeArc": "简述本场戏的叙事弧光...",
      "keyActionBeats": ["1. [动作]...", "2. [动作]..."],
      "audioAnchor": "核心听觉锚点",
      "visualAnchor": "核心视觉锚点",
      "continuityOut": "本场结束时保留下来的动作、位置、信息或情绪状态",
      "subtext": "潜台词"
    }
  ],
  "visualBible": {
    "toneAnalysis": {
        "styleNameCN": "原文事实视觉",
        "styleNameEN": "Source-Factual Visuals",
        "palette": ["#Hex1", "#Hex2", "#Hex3", "#Hex4", "#Hex5", "#Hex6", "#Hex7"],
        "lighting": "CN description", "lightingEn": "EN description",
        "texture": "CN description", "textureEn": "EN description",
        "style": "CN description", "styleEn": "EN description",
        "camera": "CN description", "cameraEn": "EN description"
    },
    "assets": {
        "characters": [
            { "name": "Name(CN)", "nameEn": "Name(EN)", "type": "CHARACTER", "analysis": { "anchors": "High-weight Visual Keywords(CN)", "anchorsEn": "High-weight Visual Keywords(EN)", "description": "Detailed appearance description(CN)", "descriptionEn": "Detailed appearance description(EN)", "designPrompt": "Neutral asset design prompt(CN)", "designPromptEn": "Neutral asset design prompt(EN)", "conceptPrompt": "Neutral concept prompt(CN)", "conceptPromptEn": "Neutral concept prompt(EN)" } }
        ],
        "scenes": [
            { "name": "Name(CN)", "nameEn": "Name(EN)", "type": "SCENE", "analysis": { "anchors": "...", "anchorsEn": "...", "description": "...", "descriptionEn": "...", "designPrompt": "Neutral environment design prompt(CN)", "designPromptEn": "Neutral environment design prompt(EN)", "conceptPrompt": "Neutral environment concept prompt(CN)", "conceptPromptEn": "Neutral environment concept prompt(EN)" } }
        ],
        "props": [
            { "name": "Name(CN)", "nameEn": "Name(EN)", "type": "PROP", "analysis": { "anchors": "...", "anchorsEn": "...", "description": "...", "descriptionEn": "...", "designPrompt": "Neutral prop design prompt(CN)", "designPromptEn": "Neutral prop design prompt(EN)", "conceptPrompt": "Neutral prop concept prompt(CN)", "conceptPromptEn": "Neutral prop concept prompt(EN)" } }
        ]
    }
  }
}
`;
};
