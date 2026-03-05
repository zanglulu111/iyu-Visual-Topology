
import { NarrativeFieldState } from '../types';
import { ENGINE_BIG_OTHER } from '../data/engine_big_other';
import { NARRATIVE_ENGINE_FORMULA } from '../data/narrative_protocols';
import { findItemDetails } from './dataRegistry';
import { runWithTask, getCallerName } from './taskManager';
// Added Gemini API imports per guidelines
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { configService } from '../src/services/configService';

// Helper to get a new AI instance with the current API key
const getAI = () => {
    try {
        const apiKey = configService.getApiKey();
        if (apiKey) {
            return new GoogleGenAI({ apiKey });
        }
    } catch (error) {
        console.warn('Failed to get config:', error);
    }
    // Fallback to environment variable
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

// --- Helper to build context string ---
const buildDetailedContext = (fieldState: NarrativeFieldState) => {
    return Object.entries(fieldState).map(([key, tags]) => {
        if (!tags || tags.length === 0) return null;
        const enrichedTags = tags.map(t => {
            const details = findItemDetails(t);
            return details ? `${t} [${details}]` : t;
        }).join(' + ');
        return `* **${key}**: ${enrichedTags}`;
    }).filter(Boolean).join('\n');
};

// --- Helper to select the correct Lacanian Formula ---
const getAlgebraicTemplate = (fieldState: NarrativeFieldState) => {
    const m0 = fieldState['engine_m0']?.[0] || "";
    const m4 = fieldState['engine_m4']?.[0] || "";

    // Find M4 definition to determine if it's Big Other (A) or Mirror (i(a))
    const m4Item = ENGINE_BIG_OTHER.find(i => i.name === m4);
    const isMirrorRival = m4Item && m4Item.group.includes("镜像");

    // 1. Perversion Structure (Instrumentality)
    if (["Fetishism", "Sadomasochism", "Scopophilia", "性倒错", "恋物癖", "施虐", "受虐", "窥淫"].some(t => m0.includes(t))) {
        return `
$$
Subject (主体) = \\frac{Object a (对象a)}{Phallus (菲勒斯)} \\to Fetish (恋物)
$$
`;
    }

    // 2. Psychosis Structure (Foreclosure)
    if (["Paranoia", "Schizophrenia", "Melancholia", "Ordinary Psychosis", "精神病", "偏执", "分裂", "忧郁", "普通精神病"].some(t => m0.includes(t))) {
        return `
$$
Subject (主体) = \\frac{Real (实在界)}{Foreclosure (排除)} \\to Delusion (妄想)
$$
`;
    }

    // 3. Autism Structure
    if (["Autism", "孤独症"].some(t => m0.includes(t))) {
        return `
$$
Subject (主体) = \\frac{Self (自我)}{Shell (硬壳)} \\to Silence (静默)
$$
`;
    }

    // 4. Neurosis / General Structure: DIFFERENTIATE A vs i(a)
    if (isMirrorRival) {
        // Horizontal Conflict: Imaginary Order (Jealousy/Rivalry)
        return `
$$
Aggressivity = Subject (\\$) \\leftrightarrow [ a ] \\leftrightarrow Rival (i(a))
$$
**公式解读：** 这是一个关于【镜像】的水平冲突。阻碍并非来自体制的压迫，而是来自“想象的他者”对欲望对象的争夺。这是嫉妒与自恋的战争。
`;
    } else {
        // Vertical Conflict: Symbolic Order (Prohibition/Law)
        return `
$$
Alienation = \\frac{Subject (\\$) \\diamond Fantasy (a)}{Law (A / 大他者)}
$$
**公式解读：** 这是一个关于【律法】的垂直冲突。阻碍来自不可见的结构性力量（A）。主体在试图穿越符号界的禁令以触碰欲望。
`;
    }
};

export const analyzePsychoStructure = async (fieldState: NarrativeFieldState, synopsis: string) => {
    const prompt = buildPsychoAnalysisPrompt(fieldState, synopsis);

    try {
        const response = await retryWithBackoff<GenerateContentResponse>(() => getAI().models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: { parts: [{ text: prompt }] }
        }));
        return response.text || "";
    } catch (e: any) {
        handleApiError("Psychoanalysis Error", e);
        return "Analysis generation failed. Please try again.";
    }
};

export const buildPsychoAnalysisPrompt = (fieldState: NarrativeFieldState, synopsis: string) => {
    const detailedState = buildDetailedContext(fieldState);
    // Use dynamic current date
    const dateStr = new Date().toISOString().substring(0, 10) + ' UTC';
    const algebraicFormula = getAlgebraicTemplate(fieldState);

    // Determine M4 Type for prompt instruction
    const m4 = fieldState['engine_m4']?.[0] || "";
    const m4Item = ENGINE_BIG_OTHER.find(i => i.name === m4);
    const isMirrorRival = m4Item && m4Item.group.includes("镜像");

    return `
# ROLE: VISIONARY (Mode: Žižekian Cultural Diagnosis & Lacanian Analyst)
# MISSION: Perform a deep psychoanalytic autopsy on the provided narrative.

## 1. THE NARRATIVE FORMULA (CORE LOGIC)
${NARRATIVE_ENGINE_FORMULA}

## 2. INPUT DATA (THE PATIENT)
**A. Engine Parameters (The DNA):**
${detailedState}

**B. Story Synopsis (The Text):**
"${synopsis}"

## 3. ★★★ OUTPUT PROTOCOL (CRITICAL) ★★★
You must output a "Clinical Report" following the **EXACT STRUCTURE** below.
The tone must be **academic, critical, slightly cynical, and profound**, imitating **Slavoj Žižek** and **Jacques Lacan**.
Language: **Simplified Chinese** (keep specific terms in English brackets).

## 4. REPORT TEMPLATE (STRICT FORMAT)

**Object of Analysis (分析对象):** [Story Title]
**分析员（分析员）：** 迷雾学派
**Clinical Focus (临床焦点):** [Abstract phrase summarizing the philosophical conflict, e.g. "The Self-Metabolism of the Symbolic"]
**日期（日期）：** ${dateStr}
**Status (状态):** [TERMINAL / ACUTE / CHRONIC / REMISSION] —— [One sentence diagnosis of the narrative's ideological state]

### 0. 核心算式 (The Narrative Equation)
本叙事并非通过传统的“英雄旅程”构建，而是一个关于拓扑结构塌陷的方程式。我们不仅是在阅读一个故事，而是在目睹一场代数运算。
${algebraicFormula}

*(Instructions for Formula: Replace the generic terms inside brackets with SPECIFIC concepts/characters/objects from the story. Keep the LaTex structure. Example: Replace 'Subject (主体)' with 'Subject (K)', Replace 'Fantasy' with 'The Golden Apple' etc.)*

### I、结构拆解（结构拆解）
*Analyze the algebraic function of the characters using Lacanian mathemes.*
*   **M1 (主体/[Protagonist Name]):** Analyze them as $ (Barred Subject). What is their fundamental lack?
*   **M4 (阻断/[Antagonist/Force]):** ${isMirrorRival ? "Analyze as i(a) (Specular Image/Rival). How does this rival reflect the subject's own narcissism and aggression? Why is this a horizontal struggle of jealousy?" : "Analyze as the Big Other (A). How does this System/Law prohibit enjoyment? Why is this a vertical struggle of alienation?"}
*   **Obj (客体/[MacGuffin/Goal]):** Analyze as Object a. Why is it an empty signifier?
*   **M5 (动作/[Key Action]):** Is this a true "Act" (breaking the symbolic) or just "Acting out"?

### II、拉康派拓扑学（真实、象征、虚构）
*   **想象界 (The Imaginary):** What illusion of wholeness creates the "Ideal Ego"? ${isMirrorRival ? "Focus on the mirror conflict." : ""}
*   **象征界 (The Symbolic):** What is the Law/Language/System governing this world? ${!isMirrorRival ? "Focus on the oppressive Law." : ""}
*   **实在界 (The Real):** Where does the logic break down? What trauma disrupts the symbolic order?

### III. 深度症候分析（深度症状分析）
*   **诊断 A:** [Identify a specific neurosis/perversion/psychosis structure based on M0].
*   **诊断 B:** [Identify a deeper ideological symptom].
*   **关键症候 (Key Symptom):** Identify the "Sinthome" - the knot that holds their reality together.

### IV. 意识形态批判 (Zizekian Critique)
*Adopt the voice of Slavoj Žižek (e.g. "and so on", "sniff").*
*   **大他者不存在 (The Big Other doesn't exist):** Reveal the central lie that everyone pretends to believe.
*   **神圣暴力 (Divine Violence) / 剩余快感 (Surplus Enjoyment):** Analyze the violence or excess in the story.

### V. 当代社会映射 (Contemporary Reality Mapping)
*This is the Parallax View. Map the abstract story onto a concrete, mundane modern context.*
*   **现实互文 (Real-World Parallax):** Strip away the genre shell. If this conflict happened in a modern city/office today, what would it look like?
*   **集体症候 (Collective Symptom):** What specific modern anxiety does this narrative allegorize?

### VI. 最终判词（最终判词）
*   **临床结论 (Clinical Conclusion):** Summarize the movement of the desire.
*   **判词 (The Verdict):** A poetic, philosophical judgment.
*   **病历归档:** [通过 / 驳回 / 需观察]
*   **建议后续观察:** A cryptic warning or prediction.
`;
};

// Retry logic helper using exponential backoff with API key selection support
async function retryWithBackoff<T>(fn: (signal?: AbortSignal) => Promise<T>, retries = 3, delay = 1000): Promise<T> {
    const taskName = getCallerName();
    return runWithTask(taskName, async (signal: AbortSignal) => {
        const attempt = async (currentRetries: number, currentDelay: number): Promise<T> => {
            try {
                return await fn(signal);
            } catch (err: any) {
                if (err?.message?.includes("Requested entity was not found.") || err?.message?.includes("API_KEY_INVALID")) {
                    if (typeof window !== 'undefined' && (window as any).aistudio?.openSelectKey) {
                        await (window as any).aistudio.openSelectKey();
                    }
                    throw err;
                }
                if (currentRetries === 0) throw err;
                await new Promise(resolve => setTimeout(resolve, currentDelay));
                return attempt(currentRetries - 1, currentDelay * 2);
            }
        };
        return attempt(retries, delay);
    });
}

const handleApiError = (context: string, e: any) => {
    console.error(`[PsychoAnalysisError] ${context}:`, e);
    const errorMsg = e?.message || e?.toString() || "Unknown error";
    if (typeof window !== 'undefined') {
        if (errorMsg.includes("429") || errorMsg.toLowerCase().includes("quota") || errorMsg.toLowerCase().includes("token") || errorMsg.includes("exhausted")) {
            alert(`API 额度已达上限或请求过于频繁 (Quota Exceeded)。\n请检查 API Key 额度或稍后重试。\n\n${errorMsg}`);
        } else if (errorMsg.includes("503") || errorMsg.toLowerCase().includes("unavailable") || errorMsg.toLowerCase().includes("high demand")) {
            alert(`当前模型请求量过大，服务暂时不可用 (503 Service Unavailable)。\n请稍后重试。\n\n${errorMsg}`);
        } else if (errorMsg.includes("API_KEY_INVALID") || errorMsg.toLowerCase().includes("not found")) {
            alert(`API Key 无效或未设置 (Invalid API Key)。\n请检查您的配置。\n\n${errorMsg}`);
        } else {
            alert(`${context} 失败:\n${errorMsg}`);
        }
    }
};
