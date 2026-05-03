import React from 'react';
import { NarrativeFieldState, WorldLawConfig, DriverType, FaceState, NarrativeBlockDef, LibraryCategoryDef } from '../types';
import { buildNarrativePrompt } from '../services/narrativeGenerator';
import { XRayInspectorModal, type XRaySourceGroup } from './XRayInspector';
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
    visionImage: string | null;
    worldLawConfig: WorldLawConfig;
    driverType: DriverType | null;
    faceState: FaceState;
}

const WORLD_LAW_OPTIONS = [
    { value: 1, label: '写实', description: '物理重力闭锁。' },
    { value: 2, label: '合理', description: '超现实元素必须被合理解释。' },
    { value: 3, label: '缝合', description: '现实为底，允许局部症状化超现实。' },
    { value: 4, label: '奇观', description: '高概念幻想公开运行。' },
    { value: 5, label: '狂想', description: '绝对无重力的疯狂拼贴。' }
];

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
    visionImage,
    worldLawConfig,
    driverType,
    faceState
}) => {
    const activeDriver = driverType || DriverType.NARRATIVE;
    const { blocks, library } = getDriverBlocksAndLibrary(activeDriver);
    const engineBlocks = blocks.filter(block => !isSurfaceBlock(block.id));
    const surfaceBlocks = blocks.filter(block => isSurfaceBlock(block.id));

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
                    id: 'worldLawGravity',
                    label: lang === 'EN' ? 'World Law' : '世界法则',
                    kind: 'select',
                    value: worldLawConfig?.gravity || '',
                    options: WORLD_LAW_OPTIONS,
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
            const gravity = Number(values.worldLawGravity || worldLawConfig?.gravity || 1);
            const nextWorldLaw: WorldLawConfig = { ...worldLawConfig, gravity };
            const nextVisionInput = String(values.visionInput ?? '');
            const nextVisionImage = typeof values.visionImage === 'string' && values.visionImage.trim() ? values.visionImage : null;

            return buildNarrativePrompt("", nextFieldState, nextVisionInput, nextVisionImage, nextWorldLaw, 'v3', faceState).text;
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
