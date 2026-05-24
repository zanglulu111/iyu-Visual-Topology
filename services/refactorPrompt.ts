import { ModifyInsertionRequest, ModifySectionRequest } from './geminiService';
import { STYLE_MATRIX } from '../data/narrative/style_matrix';
import { StyleItem } from '../types';

export type RefactorRewriteScope = 'full' | 'partial';
export type RefactorStyleRelation = 'preserve' | 'switch';

export interface RefactorPromptOptions {
    sourceStyle?: string;
    targetStyle?: string;
    rewriteScope?: RefactorRewriteScope;
    styleRelation?: RefactorStyleRelation;
}

const allStyleItems = STYLE_MATRIX.flatMap(category => category.items);

const normalizeStyleLabel = (value: string) =>
    value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' ');

const styleLabelVariants = (value: string) => {
    const raw = value.trim();
    if (!raw) return [];

    const base = raw.replace(/\s*\((.*?)\)\s*$/, '').trim();
    const english = raw.match(/\((.*?)\)/)?.[1]?.trim() || '';

    return [raw, base, english]
        .filter(Boolean)
        .map(normalizeStyleLabel);
};

const resolveStyleItem = (style: string): StyleItem | null => {
    const needle = new Set(styleLabelVariants(style));
    if (needle.size === 0) return null;

    return allStyleItems.find(item => {
        const candidates = [
            item.name,
            item.id,
            item.description,
            item.styleTitle,
            item.example
        ]
            .filter(Boolean)
            .flatMap(candidate => styleLabelVariants(candidate as string));

        return candidates.some(candidate => needle.has(candidate));
    }) || null;
};

const styleLabel = (value?: string, fallback = 'Standard Literary') => (value && value.trim()) || fallback;

const styleSignal = (styleItem: StyleItem | null): string => {
    if (!styleItem) return '';
    return styleItem.coreRewriteLogic || styleItem.dna || styleItem.styleTitle || '';
};

const sameStyle = (a?: string, b?: string) => {
    const left = new Set(styleLabelVariants(a || ''));
    const right = new Set(styleLabelVariants(b || ''));
    for (const item of left) {
        if (right.has(item)) return true;
    }
    return false;
};

const buildStyleLine = (
    relation: RefactorStyleRelation,
    sourceStyle: string,
    targetStyle: string
): string => {
    const sourceItem = resolveStyleItem(sourceStyle);
    const targetItem = resolveStyleItem(targetStyle);

    if (relation === 'switch') {
        const activeItem = targetItem || sourceItem;
        const signal = styleSignal(activeItem);
        const detail = signal ? `：${signal}` : '，仅按其抽象机制重写，不复制表层符号。';
        return `- **Style Note:** ${styleLabel(targetStyle)}${detail}`;
    }

    const activeItem = sourceItem || targetItem;
    const signal = styleSignal(activeItem);
    const detail = signal ? `：${signal}` : '，保持原文声线，只作为改写边界。';
    return `- **Style Note:** ${styleLabel(sourceStyle)}${detail}`;
};

const buildBoundaryRule = (
    relation: RefactorStyleRelation,
    rewriteScope: RefactorRewriteScope
): string => {
    if (rewriteScope === 'full') {
        return relation === 'switch'
            ? '- **Boundary Rule:** 全文统一采用目标风格，但不得改写原文的事件骨架、因果顺序和人物关系。'
            : '- **Boundary Rule:** 全文保持原文声线，不引入第二套作者签名。';
    }

    return relation === 'switch'
        ? '- **Boundary Rule:** 未改段保持原文风格，改写段采用目标风格，并让过渡尽量自然。'
        : '- **Boundary Rule:** 未改段完全不动，改写段也尽量贴近原文声线。';
};

const buildStylePolicyBlock = (
    sections: ModifySectionRequest[],
    options: RefactorPromptOptions = {}
): string => {
    const sourceStyle = styleLabel(options.sourceStyle);
    const targetStyle = styleLabel(options.targetStyle, sourceStyle);
    const rewriteScope = options.rewriteScope || 'partial';
    const styleRelation = options.styleRelation || (sameStyle(sourceStyle, targetStyle) ? 'preserve' : 'switch');

    return `
**OVERALL DIRECTION:**
- **Rewrite Scope:** ${rewriteScope === 'full' ? '全文重写' : '局部重写'}
- **Style Relation:** ${styleRelation === 'switch' ? '切换新风格' : '保持原风格'}
- **Source Style:** ${sourceStyle}
${styleRelation === 'switch' ? `- **Target Style:** ${targetStyle}` : ''}
${buildStyleLine(styleRelation, sourceStyle, targetStyle)}
${buildBoundaryRule(styleRelation, rewriteScope)}
`;
};

export const buildRefactorPrompt = (
    fullStory: string,
    sections: ModifySectionRequest[],
    insertions: ModifyInsertionRequest[],
    overallInstruction: string = "",
    style: string = "",
    options: RefactorPromptOptions = {}
): string => {
    const sourceStyle = styleLabel(options.sourceStyle);
    const targetStyle = styleLabel(options.targetStyle, style || sourceStyle);

    return `
Role: Senior Literary Editor & Script Doctor.
Task: Refactor and modify the provided narrative based on specific user instructions.

**INPUT SOURCE (Original Story):**
"""
${fullStory}
"""

${buildStylePolicyBlock(sections, {
    ...options,
    sourceStyle,
    targetStyle: options.targetStyle || style || sourceStyle
})}
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
