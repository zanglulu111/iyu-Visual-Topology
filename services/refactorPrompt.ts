
import { ModifySectionRequest, ModifyInsertionRequest } from './geminiService';

export const buildRefactorPrompt = (
    fullStory: string,
    sections: ModifySectionRequest[],
    insertions: ModifyInsertionRequest[],
    overallInstruction: string = "",
    style: string = ""
): string => {
    return `
Role: Senior Literary Editor & Script Doctor.
Task: Refactor and modify the provided narrative based on specific user instructions.

**INPUT SOURCE (Original Story):**
"""
${fullStory}
"""

**OVERALL DIRECTION:**
${style ? `- **Target Style/Tone:** ${style}` : ""}
${overallInstruction ? `- **Global Instruction:** ${overallInstruction}` : ""}

**MODIFICATION PLAN:**
The user has requested specific changes to certain sections of the story.
You must reconstruct the FULL story, keeping the unmodified parts EXACTLY as they are, and rewriting/inserting the requested parts.

**INSTRUCTIONS:**

${sections.map((sec, idx) => `
[SECTION ${idx + 1}]
- **Original Context:** "${sec.text.substring(0, 100)}..."
- **Status:** ${sec.instruction ? "REWRITE REQUIRED" : "KEEP AS IS"}
${sec.instruction ? `- **Rewrite Instruction:** ${sec.instruction}` : ""}
${sec.highlights.length > 0 ? `- **Specific Detail Edits:**\n` + sec.highlights.map(h => `  * Change "${h.text}" -> ${h.note}`).join('\n') : ""}
`).join('\n')}

${insertions.length > 0 ? `
**NEW INSERTIONS:**
${insertions.map(ins => `- **Insert BEFORE Section ${ins.index + 1}:** "${ins.instruction}"`).join('\n')}
` : ""}

**OUTPUT REQUIREMENT:**
- Return the **FULL, CONTINUOUS** text of the new story.
- Do NOT return JSON. Return markdown text only.
- Ensure the flow between unmodified and modified sections is smooth.
- Maintain the original tone and style unless instructed otherwise.
- **Do not** add commentary like "Here is the modified story". Just the story.
`;
};
