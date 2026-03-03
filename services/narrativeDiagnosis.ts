
// 叙事症候诊断指令构建器
// 用于 Narrative Driver 的 "植入症候" (Input Symptom) 环节

export const buildNarrativeDiagnosisPrompt = (textInput: string): string => {
    return `
Role: Visionary Storyteller & Visual Analyst.
Task: Perform a "Visual Narrative Decoding" (视觉叙事解码) on the input.

**INPUT CONTEXT:**
${textInput ? `Text Context: "${textInput}"` : "No text context provided (Rely on image)."}
[Image Context provided via attachment]

**MISSION:**
You are a film director analyzing a keyframe or a concept art. Deconstruct it into narrative elements.

1.  **图片反推 (Reverse Prompt):** Describe what is in the image physically (Visuals, Style, Lighting, Composition).
2.  **风格定位 (Style):** What is the aesthetic tone? (e.g. Cyberpunk, Noir, Ghibli, Wes Anderson, Horror, etc.)
3.  **叙事猜想 (Story Hypothesis):** Based on the image, propose a Logline or premise. What is the story here?
4.  **人物与事件 (Character & Event):**
    *   **Who** is the subject? (Infer personality, class, role)
    *   **What** is happening? (The conflict or action)
    *   **When/Where** is this? (The era and location)
5.  **引擎映射 (Engine Hints):** Suggest potential M-Engine parameters based on the visual evidence.
    *   *Subject:* Who is suffering?
    *   *Obstacle:* What is stopping them?
    *   *Desire:* What do they want?

**OUTPUT FORMAT (Markdown in Simplified Chinese):**
Keep it concise, professional, and inspiring. Use cinematic language.
This text will be used to auto-fill the Narrative Engine parameters.
`;
};
