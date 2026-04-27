import React from 'react';
import { CreativeTreatment, StyleConfig, NarrativeFieldState, WorldLawConfig, DriverType, NarrativeBlockDef, LibraryCategoryDef } from '../types';
import { buildNarrativeBiblePrompt } from '../services/narrativeGenerator';
import { buildCommercialBiblePrompt } from '../services/commercialGenerator';
import { buildExperimentalBiblePrompt } from '../services/experimentalGenerator';
import { buildAestheticBiblePrompt } from '../services/aestheticGenerator';
import { XRayInspectorModal, type XRaySourceGroup } from './XRayInspector';
import { STYLE_MATRIX, PERSPECTIVES, SENSORY_MODES } from '../data/style_matrix';
import { DIRECTOR_STYLES } from '../data/director_styles';
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

interface BiblePromptInspectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    treatment: CreativeTreatment | null;
    styleConfig: StyleConfig;
    fieldState?: NarrativeFieldState;
    visionInput?: string;
    worldLawConfig?: WorldLawConfig;
    driverType: DriverType;
}

const WORLD_LAW_OPTIONS = [
    { value: 1, label: '写实', description: '物理重力闭锁。' },
    { value: 2, label: '合理', description: '超现实元素必须被合理解释。' },
    { value: 3, label: '缝合', description: '现实为底，允许局部症状化超现实。' },
    { value: 4, label: '奇观', description: '高概念幻想公开运行。' },
    { value: 5, label: '狂想', description: '绝对无重力的疯狂拼贴。' }
];

const getDriverBlocksAndLibrary = (driverType: DriverType): { blocks: NarrativeBlockDef[]; library: LibraryCategoryDef[] } => {
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

const getStyleOptions = (driverType: DriverType) => {
    if (driverType === DriverType.COMMERCIAL) {
        return DIRECTOR_STYLES.map(item => ({
            value: item.id,
            label: item.name,
            description: item.core || item.def
        }));
    }

    return STYLE_MATRIX.flatMap(category => category.items.map(item => ({
        value: item.id,
        label: item.name,
        description: `${item.description || ''}${item.example ? ` | ${item.example}` : ''}`
    })));
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

export const BiblePromptInspectorModal: React.FC<BiblePromptInspectorModalProps> = ({
    isOpen,
    onClose,
    lang,
    treatment,
    styleConfig,
    fieldState,
    visionInput,
    worldLawConfig,
    driverType
}) => {
    const defaultFieldState = (fieldState || {}) as NarrativeFieldState;
    const defaultWorldLaw = (worldLawConfig || { gravity: 4 }) as WorldLawConfig;
    const { blocks, library } = getDriverBlocksAndLibrary(driverType);
    const engineBlocks = blocks.filter(block => !isSurfaceBlock(block.id));
    const surfaceBlocks = blocks.filter(block => isSurfaceBlock(block.id));

    const driverLabel = (() => {
        switch (driverType) {
            case DriverType.COMMERCIAL: return lang === 'CN' ? '商业演示圣经' : 'Commercial Bible';
            case DriverType.EXPERIMENTAL: return lang === 'CN' ? '实验圣经' : 'Experimental Bible';
            case DriverType.AESTHETIC: return lang === 'CN' ? '美学创意圣经' : 'Aesthetic Bible';
            case DriverType.TRAILER: return lang === 'CN' ? '预告片执行单' : 'Trailer Bible';
            default: return lang === 'CN' ? '创意圣经' : 'Creative Bible';
        }
    })();

    const getSources = (): XRaySourceGroup[] => [
        {
            id: 'engine-params',
            title: lang === 'EN' ? 'Engine Parameters' : '引擎参数',
            items: getLibraryBlockItems(engineBlocks, library, defaultFieldState, lang, driverType)
        },
        {
            id: 'surface-settings',
            title: lang === 'EN' ? 'Surface Settings' : '表层设定',
            items: [
                {
                    id: 'worldLawGravity',
                    label: lang === 'EN' ? 'World Law' : '世界法则',
                    kind: 'select',
                    value: defaultWorldLaw?.gravity || '',
                    options: WORLD_LAW_OPTIONS,
                    editable: true,
                    placeholder: lang === 'EN' ? 'World Law' : '世界法则',
                    alwaysShow: true,
                    inlineOptions: true
                },
                {
                    id: 'styleId',
                    label: lang === 'EN' ? 'Bible Style' : '圣经风格',
                    kind: 'select',
                    value: styleConfig.styleId || '',
                    options: getStyleOptions(driverType),
                    editable: true,
                    placeholder: lang === 'EN' ? 'Bible Style' : '圣经风格'
                },
                {
                    id: 'perspectiveId',
                    label: lang === 'EN' ? 'Perspective' : '叙事视点',
                    kind: 'select',
                    value: styleConfig.perspectiveId || '',
                    options: PERSPECTIVES.map(item => ({ value: item.id, label: item.name, description: item.prompt })),
                    editable: true,
                    placeholder: lang === 'EN' ? 'Perspective' : '叙事视点'
                },
                {
                    id: 'sensoryId',
                    label: lang === 'EN' ? 'Sensory Mode' : '感官侧重',
                    kind: 'select',
                    value: styleConfig.sensoryId || '',
                    options: SENSORY_MODES.map(item => ({ value: item.id, label: item.name, description: item.prompt })),
                    editable: true
                },
                ...getLibraryBlockItems(surfaceBlocks, library, defaultFieldState, lang, driverType)
            ]
        },
        {
            id: 'text',
            title: lang === 'EN' ? 'Text & Image Sources' : '文本与图像源',
            items: [
                {
                    id: 'treatmentTitle',
                    label: lang === 'EN' ? 'Selected Path' : '已选路径',
                    kind: 'text',
                    value: treatment?.title || '',
                    editable: Boolean(treatment),
                    placeholder: lang === 'EN' ? 'Select a path first' : '请先选择路径',
                    alwaysShow: true
                },
                {
                    id: 'treatmentTagline',
                    label: lang === 'EN' ? 'Tagline' : '一句话定位',
                    kind: 'text',
                    value: treatment?.tagline || '',
                    editable: Boolean(treatment),
                    placeholder: lang === 'EN' ? 'Tagline' : '一句话定位'
                },
                {
                    id: 'treatmentPitch',
                    label: lang === 'EN' ? 'Path Content' : '路径内容',
                    kind: 'textarea',
                    value: treatment?.pitch || '',
                    editable: Boolean(treatment),
                    placeholder: lang === 'EN' ? 'Path content' : '路径内容'
                },
                {
                    id: 'treatmentVisualAnchor',
                    label: lang === 'EN' ? 'Visual Anchor' : '视觉锚点',
                    kind: 'text',
                    value: treatment?.visualAnchor || '',
                    editable: Boolean(treatment),
                    placeholder: lang === 'EN' ? 'Visual anchor' : '视觉锚点'
                },
                {
                    id: 'treatmentStructure',
                    label: lang === 'EN' ? 'Structure' : '叙事结构',
                    kind: 'textarea',
                    value: treatment?.structure || '',
                    editable: Boolean(treatment),
                    placeholder: lang === 'EN' ? 'Structure' : '叙事结构'
                },
                {
                    id: 'visionInput',
                    label: lang === 'EN' ? 'Vision Input' : '视觉/创意输入',
                    kind: 'textarea',
                    value: visionInput || '',
                    editable: true,
                    placeholder: lang === 'EN' ? 'Vision input' : '视觉/创意输入'
                }
            ]
        }
    ];

    const buildPayload = (values: Record<string, unknown>) => {
        if (!treatment) {
            return lang === 'CN'
                ? '请先选择一个叙事路径，然后再查看完整的创意圣经指令。'
                : 'Select a narrative path first to inspect the full Creative Bible prompt.';
        }

        try {
            const nextTreatment: CreativeTreatment = {
                ...treatment,
                title: String(values.treatmentTitle || treatment.title || ''),
                tagline: String(values.treatmentTagline || treatment.tagline || ''),
                pitch: String(values.treatmentPitch || treatment.pitch || ''),
                visualAnchor: String(values.treatmentVisualAnchor || treatment.visualAnchor || ''),
                structure: String(values.treatmentStructure || treatment.structure || '')
            };
            const nextStyleConfig: StyleConfig = {
                ...styleConfig,
                styleId: typeof values.styleId === 'string' && values.styleId.trim() ? values.styleId : null,
                perspectiveId: typeof values.perspectiveId === 'string' && values.perspectiveId.trim() ? values.perspectiveId : null,
                sensoryId: typeof values.sensoryId === 'string' && values.sensoryId.trim() ? values.sensoryId : null
            };
            const nextFieldState = collectFieldState(values, blocks, defaultFieldState);
            const gravity = Number(values.worldLawGravity || defaultWorldLaw?.gravity || 4);
            const nextWorldLaw: WorldLawConfig = { ...defaultWorldLaw, gravity };
            const nextVisionInput = String(values.visionInput ?? '');
            const nextDriver = driverType;

            switch (nextDriver) {
                case DriverType.COMMERCIAL:
                    return buildCommercialBiblePrompt(nextTreatment, nextStyleConfig, nextFieldState, nextVisionInput, nextWorldLaw);
                case DriverType.EXPERIMENTAL:
                    return buildExperimentalBiblePrompt(nextTreatment, nextStyleConfig, nextFieldState, nextVisionInput, nextWorldLaw);
                case DriverType.AESTHETIC:
                    return buildAestheticBiblePrompt(nextTreatment, nextStyleConfig, nextFieldState, nextVisionInput, nextWorldLaw);
                default:
                    return buildNarrativeBiblePrompt(nextTreatment, nextStyleConfig, nextFieldState, nextVisionInput, nextWorldLaw);
            }
        } catch (e) {
            return `提示词生成过程中遇到错误。\n\n[ERROR]\n${e instanceof Error ? e.stack : String(e)}`;
        }
    };

    return (
        <XRayInspectorModal
            isOpen={isOpen}
            onClose={onClose}
            lang={lang}
            title={lang === 'CN' ? `X-Ray 圣经指令透视 · ${driverLabel}` : `Bible Prompt Inspector · ${driverLabel}`}
            sources={getSources}
            buildPayload={buildPayload}
        />
    );
};
