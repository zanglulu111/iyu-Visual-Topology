
import { MONTAGE_STYLES } from '../data/suture_montage';

// Helper to format montage styles for the prompt
const getMontageStyleList = () => {
  return MONTAGE_STYLES.map(s => `- ID: "${s.id}" | Name: "${s.name}" | Core Logic: "${s.core}"`).join('\n');
};

export const buildScriptBreakdownPrompt = (sourceText: string, instruction?: string, targetCount?: number): string => {
  const montageList = getMontageStyleList();

  let specialInstructions = "";
  if (targetCount) {
    specialInstructions += `*   **TARGET SCENE COUNT:** 请务必将其切分为 **恰好 ${targetCount} 个场次**。\n`;
  }
  if (instruction) {
    specialInstructions += `*   **CUSTOM LOGIC:** ${instruction}\n`;
  }

  const instructionSection = specialInstructions ? `
### 🚨 特殊分场指令 (USER SPECIAL INSTRUCTION)
用户明确要求以下分场规则，请务必将其作为**最高优先级**严格执行：
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
*   **MINIMUM SCENES:** **必须切分出至少 5 个场次 (Minimum 5 Scenes)**。严禁少于 5 场。
*   **PACING:** 标准的电影感分场，每场戏的文本容量通常在 300-400 字左右。对于 2000 字左右的故事，通常应分为 **5-8 场**。
*   **ACTION:** 请确保每一场戏都有明确的视觉重心和叙事推动力。

#### 2. 切分判断逻辑 (Logic)
*   **序幕原则 (Prologue):** 开头的环境描写、引用、背景介绍必须合并为 [SCENE 1]。
*   **转场吸附 (Transition Anchor):** "三天后"、"夜幕降临"等时间流逝词，标志着上一场的结束，它们应作为下一场的“建立镜头”吸附在下一场开头。
*   **物理跳跃:** 地点或时间的实质性变化必须分场。

### 场景类型参考 (Archetypes)
*   [SETUP] (铺垫), [ACTION] (动作), [RESPITE] (休憩), [TENSION] (悬疑), [CLIMAX] (高潮)。
*   请为每场戏分配一个最适合的 **Montage Style ID**：
${montageList}

---

### 目标 2: 视觉圣经提取 (VISUAL BIBLE EXTRACTION)

**必须基于全文分析，提取以下两层视觉数据。请务必生成详细内容，不可留白。**

#### A. 全局视觉基调 (Global Tone Analysis)
*   **Lighting (光影):** 高反差/低反差？冷调/暖调？霓虹/自然光？
*   **Texture (材质):** 颗粒感？光滑？生锈？潮湿？
*   **Art Style (风格):** 赛博朋克？维多利亚哥特？极简主义？
*   **Camera (镜头):** 变形宽银幕？手持？长焦？

#### B. 核心资产提取 (Asset Extraction)
提取故事中最关键的 **角色 (Characters)**、**场景 (Scenes)** 和 **道具 (Props)**。
*   **Anchors (高权重视觉锚点):** 提取 3-5 个最具辨识度、视觉冲击力强的关键词（如：红围巾, 锯齿伤疤, 锈迹斑斑的铁门）。**必须生成**。
*   **Description (详细视觉描述):** 详细的物理外貌、材质、光影与设计风格描述。不要写性格，只写视觉。**必须生成**。

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
      "title": "场景标题 (e.g. SCENE 1 - 盲者的荒原 [序幕])",
      "slugline": "EXT. [地点] - [时间]",
      "paragraph_indices": [0, 1, 2...],
      "montageId": "montage_prologue",
      "visualStyleName": "视觉序幕协议",
      "narrativeArc": "简述本场戏的叙事弧光...",
      "keyActionBeats": ["1. [动作]...", "2. [动作]..."],
      "audioAnchor": "核心听觉锚点",
      "visualAnchor": "核心视觉锚点",
      "subtext": "潜台词"
    }
    // ... 至少 5 个场次
  ],
  "visualBible": {
    "toneAnalysis": {
        "lighting": "CN description", "lightingEn": "EN description",
        "texture": "CN description", "textureEn": "EN description",
        "style": "CN description", "styleEn": "EN description",
        "camera": "CN description", "cameraEn": "EN description"
    },
    "assets": {
        "characters": [
            { "name": "Name(CN)", "nameEn": "Name(EN)", "type": "CHARACTER", "anchors": "High-weight Visual Keywords(CN)", "anchorsEn": "High-weight Visual Keywords(EN)", "description": "Detailed Visual Desc(CN)", "descriptionEn": "Detailed Visual Desc(EN)" }
        ],
        "scenes": [
            { "name": "Name(CN)", "nameEn": "Name(EN)", "type": "SCENE", "anchors": "...", "anchorsEn": "...", "description": "...", "descriptionEn": "..." }
        ],
        "props": [
            { "name": "Name(CN)", "nameEn": "Name(EN)", "type": "PROP", "anchors": "...", "anchorsEn": "...", "description": "...", "descriptionEn": "..." }
        ]
    }
  }
}
`;
};
