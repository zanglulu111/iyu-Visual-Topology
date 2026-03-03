
// 欲望缝合诊断指令构建器
// 用于 Commercial Driver 的 "欲望输入" 环节

export const buildDesireDiagnosisPrompt = (textInput: string): string => {
    return `
Role: Lacanian Psychoanalyst & Elite Creative Director.
Task: Perform a "Visual Desire Decoding" (视觉欲望解码) on the input to identify Commercial Suture opportunities.

**INPUT CONTEXT:**
${textInput ? `Client Brief / Concept: "${textInput}"` : "No text brief provided."}
[Visual/Image Context provided via attachment]

**MISSION:**
You are not just describing a product; you are diagnosing a **Symptom** in the market and offering a **Fetish** as the cure. You must look *through* the image/text to find the underlying Libidinal Economy.

**ANALYSIS STEPS:**

1.  **视觉/产品反推 (Visual Decoding):**
    *   **Signifier (能指):** Describe the physical object objectively (Material, Texture, Lighting, Form).
    *   **Aesthetic (美学):** What is the visual code? (e.g., Clinical Precision, Dirty Realism, Cyberpunk Neon).

2.  **主体症候 (The Symptom / $):**
    *   **Target Subject:** Who is the incomplete subject? (Do NOT use generic demographics. Use psychographics, e.g., "The Anxious Parent fearing chaos", "The Imposter Executive").
    *   **The Lack:** What fundamental anxiety does this subject suffer from? (e.g., Fear of aging, loss of control, social invisibility).

3.  **图腾升华 (The Totem / Object a):**
    *   Elevate the product from "Tool" to "Totem".
    *   What **Magic** does it perform? (e.g., "It doesn't just clean floors; it restores Order to a chaotic home").
    *   What is the **Ideal Ego** (完美镜像) it promises?

4.  **引擎映射 (Engine Mapping):** Suggest specific parameters for the Suture Engine based on the analysis.
    *   **C0 (底层欲望):** Is it Control (Anal), Display (Scopic), Consumption (Oral), or Security (Womb)?
    *   **C2 (痛点场景):** The specific moment reality breaks down for the subject.
    *   **C7 (承诺幻象):** The final fantasy of wholeness.

**OUTPUT FORMAT (Markdown in Simplified Chinese):**
Be concise, insightful, and persuasive. Use the tone of a high-end creative strategy deck.
`;
};
