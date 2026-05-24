import React from 'react';
import { NarrativeFieldState, WorldLawConfig, DriverType, FaceState, PromptFocusState, NarrativePromptVersion, NarrativeBlockDef, LibraryCategoryDef, MAxisMixerState, M7BResidueIntensity } from '../types';
import { buildNarrativePrompt } from '../services/narrativeGenerator';
import { appendFantasyTraverseOutputContract } from '../services/geminiService';
import { XRayInspectorModal, type XRaySourceGroup } from './XRayInspector';
import {
    normalizeWorldLawConfig,
    resolveWorldLawLevel,
    WORLD_LAW_LEVEL_OPTIONS
} from '../services/worldLaw';
import {
    AESTHETIC_ENGINE_BLOCKS,
    AESTHETIC_ENGINE_LIBRARY,
    ALL_SKIN_BLOCKS,
    BLOCK_LIMITS,
    COMMERCIAL_ENGINE_BLOCKS,
    COMMERCIAL_ENGINE_LIBRARY,
    COMM_SKIN_BLOCKS,
    COMM_SKIN_LIBRARY,
    EXPERIMENTAL_ENGINE_BLOCKS,
    EXPERIMENTAL_ENGINE_LIBRARY,
    EXPERIMENTAL_SKIN_BLOCKS,
    EXPERIMENTAL_SKIN_LIBRARY,
    NARRATIVE_ENGINE_BLOCKS,
    NARRATIVE_ENGINE_LIBRARY,
    SKIN_LIBRARY,
    TRAILER_ENGINE_BLOCKS,
    TRAILER_ENGINE_LIBRARY,
    TRAILER_SKIN_BLOCKS,
    TRAILER_SKIN_LIBRARY
} from '../constants';

interface PromptInspectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    fieldState: NarrativeFieldState;
    visionInput: string;
    visionAnalysis?: string;
    visionImage: string | null;
    worldLawConfig: WorldLawConfig;
    driverType: DriverType | null;
    faceState: FaceState;
    focusState?: PromptFocusState;
    mAxisMixer?: MAxisMixerState;
    m7bIntensity?: M7BResidueIntensity;
    promptVersion: NarrativePromptVersion;
    onPromptVersionChange: (version: NarrativePromptVersion) => void;
}

const getDriverBlocksAndLibrary = (driverType: DriverType | null): { blocks: NarrativeBlockDef[]; library: LibraryCategoryDef[] } => {
    switch (driverType) {
        case DriverType.COMMERCIAL:
            return { blocks: [...COMMERCIAL_ENGINE_BLOCKS, ...COMM_SKIN_BLOCKS], library: [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY] };
        case DriverType.EXPERIMENTAL:
            return { blocks: [...EXPERIMENTAL_ENGINE_BLOCKS, ...EXPERIMENTAL_SKIN_BLOCKS], library: [...EXPERIMENTAL_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY] };
        case DriverType.AESTHETIC:
            return { blocks: [...AESTHETIC_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS], library: [...AESTHETIC_ENGINE_LIBRARY, ...SKIN_LIBRARY] };
        case DriverType.TRAILER:
            return { blocks: [...TRAILER_ENGINE_BLOCKS, ...TRAILER_SKIN_BLOCKS], library: [...TRAILER_ENGINE_LIBRARY, ...TRAILER_SKIN_LIBRARY] };
        default:
            return { blocks: [...NARRATIVE_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS], library: [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY] };
    }
};

const getLibraryForBlock = (blockId: string, library: LibraryCategoryDef[]) => {
    if (blockId === 'skin_animation_genre') {
        return library.find(cat => cat.id === 'skin_era_lib');
    }
    return library.find(cat => cat.id === `${blockId}_lib`)
        || library.find(cat => cat.id.replace(/_lib$/, '') === blockId)
        || library.find(cat => cat.id.includes(blockId));
};

const getBlockPlaceholder = (block: NarrativeBlockDef, lang: 'CN' | 'EN') => {
    const label = lang === 'EN' ? (block.enName || block.name) : block.name;
    return label.replace(/^[A-Z]*\d+[A-Z]?[.。]?\s*/i, '').trim() || label;
};

const isSurfaceBlock = (blockId: string) => {
    return blockId.startsWith('skin_')
        || blockId.startsWith('comm_skin_')
        || blockId.startsWith('exp_skin_')
        || blockId.startsWith('trl_skin_')
        || blockId === 'sur10x';
};

const getLibraryBlockItems = (blocks: NarrativeBlockDef[], library: LibraryCategoryDef[], fieldState: NarrativeFieldState, lang: 'CN' | 'EN', driverType: DriverType) => {
    return blocks.map(block => {
        const cat = getLibraryForBlock(block.id, library);
        return {
            id: block.id,
            label: lang === 'EN' ? (block.enName || block.name) : block.name,
            kind: 'libraryBlock' as const,
            value: fieldState[block.id] || [],
            options: (cat?.items || []).map(item => ({
                value: item.name,
                label: lang === 'EN' ? (item.nameEn || item.name) : item.name,
                description: lang === 'EN'
                    ? (item.coreEn || item.defEn || item.essenceEn || item.core || item.def)
                    : (item.core || item.def || item.essence)
            })),
            editable: true,
            maxSelected: BLOCK_LIMITS[block.id] || 1,
            placeholder: getBlockPlaceholder(block, lang),
            driverType,
            description: lang === 'EN' ? (block.descriptionEn || block.description) : block.description
        };
    });
};

const collectFieldState = (values: Record<string, unknown>, blocks: NarrativeBlockDef[], fallback: NarrativeFieldState) => {
    const next: NarrativeFieldState = { ...fallback };
    blocks.forEach(block => {
        const raw = values[block.id];
        next[block.id] = Array.isArray(raw)
            ? raw.map(String)
            : String(raw || '').split(/[,，\n]/).map(v => v.trim()).filter(Boolean);
    });
    return next;
};

export const PromptInspectorModal: React.FC<PromptInspectorModalProps> = ({
    isOpen,
    onClose,
    lang,
    fieldState,
    visionInput,
    visionAnalysis = '',
    visionImage,
    worldLawConfig,
    driverType,
    faceState,
    focusState,
    mAxisMixer,
    m7bIntensity,
    promptVersion,
    onPromptVersionChange
}) => {
    const activeDriver = driverType || DriverType.NARRATIVE;
    const { blocks, library } = getDriverBlocksAndLibrary(activeDriver);
    const worldLawLevel = resolveWorldLawLevel(worldLawConfig);
    const worldLawOptions = WORLD_LAW_LEVEL_OPTIONS.map(option => ({
        value: option.id,
        label: lang === 'EN' ? option.shortEN : option.shortCN,
        description: lang === 'EN' ? option.descEN : option.descCN
    }));
    const engineBlocks = blocks.filter(block => !isSurfaceBlock(block.id));
    const surfaceBlocks = blocks.filter(block => isSurfaceBlock(block.id));
    const buildVisionGenerationContext = (values: Record<string, unknown>) => {
        const nextVisionInput = String(values.visionInput ?? '').trim();
        const nextVisionAnalysis = String(values.visionAnalysis ?? '').trim();
        const parts: string[] = [];
        if (nextVisionInput) parts.push(`【最高优先级：创意灵感 / 用户补充】\n${nextVisionInput}`);
        if (nextVisionAnalysis) parts.push(`【用户确认/可编辑的图片解析结果】\n${nextVisionAnalysis}`);
        return parts.join('\n\n');
    };

    const getSources = (): XRaySourceGroup[] => [
        {
            id: 'engine-params',
            title: lang === 'EN' ? 'Engine Parameters' : '引擎参数',
            items: getLibraryBlockItems(engineBlocks, library, fieldState, lang, activeDriver)
        },
        {
            id: 'surface-settings',
            title: lang === 'EN' ? 'Surface Settings' : '表层设定',
            items: [
                {
                    id: 'promptVersion',
                    label: lang === 'EN' ? 'Prompt Version' : '提示词版本',
                    kind: 'select',
                    value: promptVersion,
                    options: [
                        {
                            value: 'v4',
                            label: 'V4',
                            description: lang === 'EN'
                                ? 'External-story-first rebuild. Recommended for divergence quality.'
                                : '外部故事优先的新架构，推荐用于分歧点生成。'
                        },
                        {
                            value: 'v3',
                            label: 'V3',
                            description: lang === 'EN'
                                ? 'Director-brief architecture kept for comparison and fallback.'
                                : '导演笔记旧架构，用于对照和回退。'
                        }
                    ],
                    editable: true,
                    inlineOptions: true,
                    tone: 'surface',
                    placeholder: lang === 'EN' ? 'Prompt Version' : '提示词版本',
                    alwaysShow: true
                },
                {
                    id: 'worldLawLevel',
                    label: lang === 'EN' ? 'World Law' : '世界法则',
                    kind: 'select',
                    value: worldLawLevel,
                    options: worldLawOptions,
                    editable: true,
                    placeholder: lang === 'EN' ? 'World Law' : '世界法则'
                },
                ...getLibraryBlockItems(surfaceBlocks, library, fieldState, lang, activeDriver)
            ]
        },
        {
            id: 'text',
            title: lang === 'EN' ? 'Text & Image Sources' : '文本与图像源',
            items: [
                {
                    id: 'visionInput',
                    label: lang === 'EN' ? 'Text Seed / Semantic Lock' : '文本种子 / 语义锁定',
                    kind: 'textarea',
                    value: visionInput || '',
                    editable: true
                },
                {
                    id: 'visionAnalysis',
                    label: lang === 'EN' ? 'Confirmed Image Analysis' : '用户确认/可编辑的图片解析结果',
                    kind: 'textarea',
                    value: visionAnalysis || '',
                    editable: true
                },
                {
                    id: 'visionImage',
                    label: lang === 'EN' ? 'Image Seed / Visual Lock' : '图像种子 / 视觉锁定',
                    kind: visionImage ? 'image' : 'text',
                    value: visionImage || '',
                    editable: true
                }
            ]
        }
    ];

    const buildPayload = (values: Record<string, unknown>) => {
        try {
            const nextFieldState = collectFieldState(values, blocks, fieldState);
            const nextWorldLaw: WorldLawConfig = normalizeWorldLawConfig({
                ...worldLawConfig,
                gravity: Number(values.worldLawLevel || worldLawLevel)
            });
            const nextVisionImage = typeof values.visionImage === 'string' && values.visionImage.trim() ? values.visionImage : null;
            const hasConfirmedVisionAnalysis = Boolean(String(values.visionAnalysis ?? '').trim());
            const nextVisionInput = buildVisionGenerationContext(values);
            const nextPromptVersion = values.promptVersion === 'v3' ? 'v3' : 'v4';
            if (nextPromptVersion !== promptVersion) onPromptVersionChange(nextPromptVersion);

            const promptData = buildNarrativePrompt("SHORT", nextFieldState, nextVisionInput, hasConfirmedVisionAnalysis ? null : nextVisionImage, nextWorldLaw, nextPromptVersion, faceState, focusState, mAxisMixer, m7bIntensity);
            return appendFantasyTraverseOutputContract(promptData.text);
        } catch (e) {
            return `提示词生成过程中遇到错误，请检查左侧输入源。\n\n[ERROR DETAILS]\n${e instanceof Error ? e.stack : String(e)}`;
        }
    };

    return (
        <XRayInspectorModal
            isOpen={isOpen}
            onClose={onClose}
            lang={lang}
            title={lang === 'CN' ? 'X-Ray 指令透视仪' : 'X-Ray Prompt Inspector'}
            sources={getSources}
            buildPayload={buildPayload}
        />
    );
};
