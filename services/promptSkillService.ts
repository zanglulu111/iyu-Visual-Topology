import { GenerateContentResponse } from '@google/genai';
import { configService } from '../src/services/configService';
import { EngineId } from '../src/types/config';
import { generateContentWithRuntime } from './geminiService';
import { LibraryItemDef } from '../types';

export type PromptSkillVariables = {
    characterSeed: string;
    ageBodyType: string;
    timeSpaceScene: string;
    actionMoment: string;
    visualMedium: string;
    style: string;
    compositionScene: string;
    lightingAtmosphere: string;
    otherDetails: string;
};

export type PromptSkillLanguage = 'CN' | 'EN';

export type LocalizedPromptSkillVariables = Record<PromptSkillLanguage, PromptSkillVariables>;

const stripJsonFences = (text: string) =>
    text.replace(/```(?:json)?/gi, '').replace(/```/g, '').trim();

const coerceSkillVariables = (value: any): PromptSkillVariables => ({
    characterSeed: String(value?.characterSeed || ''),
    ageBodyType: String(value?.ageBodyType || ''),
    timeSpaceScene: String(value?.timeSpaceScene || ''),
    actionMoment: String(value?.actionMoment || ''),
    visualMedium: String(value?.visualMedium || ''),
    style: String(value?.style || ''),
    compositionScene: String(value?.compositionScene || ''),
    lightingAtmosphere: String(value?.lightingAtmosphere || ''),
    otherDetails: String(value?.otherDetails || '')
});

const hasAnySkillVariable = (value: PromptSkillVariables): boolean =>
    Object.values(value).some(item => item.trim());

const parseSkillVariables = (text: string): LocalizedPromptSkillVariables | null => {
    const cleaned = stripJsonFences(text);
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    const candidate = firstBrace >= 0 && lastBrace > firstBrace
        ? cleaned.slice(firstBrace, lastBrace + 1)
        : cleaned;

    try {
        const json = JSON.parse(candidate);
        const cn = coerceSkillVariables(json.CN || json.cn || json.zh || json);
        const en = coerceSkillVariables(json.EN || json.en || json);

        if (!hasAnySkillVariable(cn) && !hasAnySkillVariable(en)) {
            return null;
        }

        return {
            CN: hasAnySkillVariable(cn) ? cn : en,
            EN: hasAnySkillVariable(en) ? en : cn
        };
    } catch (error) {
        console.error('Prompt skill variable JSON parse failed', error, text);
        return null;
    }
};

const coerceStringArray = (value: any): string[] | undefined => {
    if (!Array.isArray(value)) return undefined;
    const items = value.map(item => String(item || '').trim()).filter(Boolean);
    return items.length > 0 ? items : undefined;
};

const slugifyLexiconId = (value: string) => value
    .trim()
    .toLowerCase()
    .replace(/['"`]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 72);

const parseLexiconItem = (text: string): LibraryItemDef | null => {
    const cleaned = stripJsonFences(text);
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    const candidate = firstBrace >= 0 && lastBrace > firstBrace
        ? cleaned.slice(firstBrace, lastBrace + 1)
        : cleaned;

    try {
        const json = JSON.parse(candidate);
        const name = String(json.name || json.nameCn || '').trim();
        const nameEn = String(json.nameEn || '').trim();
        const fallbackId = slugifyLexiconId(nameEn || name) || `custom_${Date.now()}`;
        if (!name) return null;

        const ontologyLevelRaw = Number(json.ontologyLevel || 1);
        const ontologyLevel = ([1, 2, 3, 4, 5].includes(ontologyLevelRaw) ? ontologyLevelRaw : 1) as 1 | 2 | 3 | 4 | 5;
        const risk = ['clean', 'medium', 'high'].includes(json.risk) ? json.risk : 'clean';

        return {
            id: String(json.id || fallbackId).trim() || fallbackId,
            name,
            nameEn: nameEn || undefined,
            def: String(json.def || '').trim(),
            defEn: String(json.defEn || '').trim() || undefined,
            core: String(json.core || '').trim() || undefined,
            coreEn: String(json.coreEn || '').trim() || undefined,
            group: String(json.group || '').trim() || undefined,
            groupEn: String(json.groupEn || '').trim() || undefined,
            ontologyLevel,
            risk,
            eras: coerceStringArray(json.eras),
            affects: coerceStringArray(json.affects),
            controls: coerceStringArray(json.controls),
            forbids: coerceStringArray(json.forbids),
            absorptionRule: String(json.absorptionRule || '').trim() || undefined,
            absorptionRuleEn: String(json.absorptionRuleEn || '').trim() || undefined,
            tags: coerceStringArray(json.tags),
            styleTags: coerceStringArray(json.styleTags),
            timeTags: coerceStringArray(json.timeTags),
            personaCategory: String(json.personaCategory || '').trim() || undefined,
            personaCategoryEn: String(json.personaCategoryEn || '').trim() || undefined,
            personaSubgroup: String(json.personaSubgroup || '').trim() || undefined,
            personaSubgroupEn: String(json.personaSubgroupEn || '').trim() || undefined,
            personaKind: String(json.personaKind || '').trim() || undefined,
            personaKindEn: String(json.personaKindEn || '').trim() || undefined,
            personaStrength: ['light', 'medium', 'strong'].includes(json.personaStrength) ? json.personaStrength : undefined,
            isCompoundPersona: typeof json.isCompoundPersona === 'boolean' ? json.isCompoundPersona : undefined,
            protocolCategory: String(json.protocolCategory || '').trim() || undefined,
            protocolCategoryEn: String(json.protocolCategoryEn || '').trim() || undefined,
            protocolKind: json.protocolKind || undefined
        };
    } catch (error) {
        console.error('Lexicon item JSON parse failed', error, text);
        return null;
    }
};

const getMimeTypeFromBase64 = (base64String: string): string => {
    const match = base64String.match(/^data:(.+);base64,/);
    return match ? match[1] : 'image/jpeg';
};

const getBase64Data = (base64String: string): string => {
    return base64String.split(',')[1] || base64String;
};

export const generatePromptSkillVariables = async (
    prompt: string,
    imageDataUrl?: string | string[],
    modelOverride?: string,
    engineOverride?: EngineId
): Promise<LocalizedPromptSkillVariables | null> => {
    const imageDataUrls = Array.isArray(imageDataUrl)
        ? imageDataUrl.filter(Boolean)
        : imageDataUrl
            ? [imageDataUrl]
            : [];
    const hasImage = imageDataUrls.length > 0;
    const engineId: EngineId = engineOverride || (hasImage ? 'visualSeed' : 'coreEngine');
    const model = modelOverride || configService.getEngineModel(engineId) || 'gemini-3.1-flash-lite-preview';
    const parts: any[] = [{ text: prompt }];

    imageDataUrls.forEach((image) => {
        parts.push({
            inlineData: {
                mimeType: getMimeTypeFromBase64(image),
                data: getBase64Data(image)
            }
        });
    });

    const response = await generateContentWithRuntime({
        model,
        contents: { parts },
        config: {
            responseMimeType: 'application/json',
            maxOutputTokens: 4096,
            stream: false,
            engineId
        }
    }) as GenerateContentResponse;

    return parseSkillVariables(response.text || '');
};

export const generateLexiconItemDraft = async (
    prompt: string,
    modelOverride?: string,
    engineOverride?: EngineId
): Promise<LibraryItemDef | null> => {
    const engineId: EngineId = engineOverride || 'coreEngine';
    const model = modelOverride || configService.getEngineModel(engineId) || 'gemini-3.1-flash-lite-preview';
    const response = await generateContentWithRuntime({
        model,
        contents: { parts: [{ text: prompt }] },
        config: {
            responseMimeType: 'application/json',
            maxOutputTokens: 4096,
            stream: false,
            engineId
        }
    }) as GenerateContentResponse;

    return parseLexiconItem(response.text || '');
};
