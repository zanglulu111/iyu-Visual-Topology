import React from 'react';
import { CreativeTreatment, StyleConfig, NarrativeFieldState, WorldLawConfig, DriverType, PromptFocusState, NarrativeBlockDef, LibraryCategoryDef, M7BResidueIntensity } from '../types';
import { buildNarrativeBiblePrompt } from '../services/narrativeGenerator';
import { buildCommercialBiblePrompt } from '../services/commercialGenerator';
import { buildExperimentalBiblePrompt } from '../services/experimentalGenerator';
import { buildAestheticBiblePrompt } from '../services/aestheticGenerator';
import { XRayInspectorModal, type XRaySourceGroup } from './XRayInspector';
import { STYLE_MATRIX, PERSPECTIVES, SENSORY_MODES } from '../data/narrative/style_matrix';
import { DIRECTOR_STYLES } from '../data/narrative/director_styles';
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

interface BiblePromptInspectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    treatment: CreativeTreatment | null;
    styleConfig: StyleConfig;
    fieldState?: NarrativeFieldState;
    visionInput?: string;
    visionAnalysis?: string;
    worldLawConfig?: WorldLawConfig;
    driverType: DriverType;
    focusState?: PromptFocusState;
    m7bIntensity?: M7BResidueIntensity;
}

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
        // Only SV1 (skin_structure) and SV2 (skin_volume) are editable in the Bible Inspector.
        // Everything else is a generated engine parameter or surface setting and should be read-only.
        const isSV = block.id === 'skin_structure' || block.id === 'skin_volume';

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
            editable: isSV,
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

    const cnName = (name: string) => name.split('(')[0].trim();

    return STYLE_MATRIX.flatMap(category => category.items.map(item => ({
        value: item.id,
        label: cnName(item.name),
        description: `${item.styleTitle || item.description || ''}${item.coreRewriteLogic ? ` | ${item.coreRewriteLogic}` : ''}${item.example ? ` | ${item.example}` : ''}`
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
    visionAnalysis,
    worldLawConfig,
    driverType,
    focusState,
    m7bIntensity
}) => {
    const defaultFieldState = (fieldState || {}) as NarrativeFieldState;
    const defaultWorldLaw = normalizeWorldLawConfig(worldLawConfig || { gravity: 2 });
    const { blocks, library } = getDriverBlocksAndLibrary(driverType);
    const engineBlocks = blocks.filter(block => !isSurfaceBlock(block.id));
    const surfaceBlocks = blocks.filter(block => isSurfaceBlock(block.id));
    const showPerspectiveAndSensory = driverType !== DriverType.NARRATIVE || !styleConfig.styleId;
    const worldLawLevel = resolveWorldLawLevel(defaultWorldLaw);
    const worldLawOptions = WORLD_LAW_LEVEL_OPTIONS.map(option => ({
        value: option.id,
        label: lang === 'EN' ? option.shortEN : option.shortCN,
        description: lang === 'EN' ? option.descEN : option.descCN
    }));

    const driverLabel = (() => {
        switch (driverType) {
            case DriverType.COMMERCIAL: return lang === 'CN' ? '商业演示圣经' : 'Commercial Bible';
            case DriverType.EXPERIMENTAL: return lang === 'CN' ? '实验圣经' : 'Experimental Bible';
            case DriverType.AESTHETIC: return lang === 'CN' ? '美学创意圣经' : 'Aesthetic Bible';
            case DriverType.TRAILER: return lang === 'CN' ? '预告片执行单' : 'Trailer Bible';
            default: return lang === 'CN' ? '叙事创作' : 'Narrative Writing';
        }
    })();
    const inspectorTitle = driverType === DriverType.NARRATIVE
        ? (lang === 'CN' ? `X-Ray 叙事创作指令透视 · ${driverLabel}` : `Narrative Prompt Inspector · ${driverLabel}`)
        : (lang === 'CN' ? `X-Ray 圣经指令透视 · ${driverLabel}` : `Bible Prompt Inspector · ${driverLabel}`);

    const getSources = (values?: Record<string, any>): XRaySourceGroup[] => {
        const currentStyleId = values?.styleId ?? styleConfig.styleId;
        const isStyleLocked = !!currentStyleId;

        return [
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
                        id: 'worldLawLevel',
                        label: lang === 'EN' ? 'World Law' : '世界法则',
                        kind: 'select',
                        value: worldLawLevel,
                        options: worldLawOptions,
                        editable: false,
                        placeholder: lang === 'EN' ? 'World Law' : '世界法则'
                    },
                    {
                        id: 'styleId',
                        label: driverType === DriverType.NARRATIVE
                            ? (lang === 'EN' ? 'Author Style' : '作者风格')
                            : (lang === 'EN' ? 'Bible Style' : '圣经风格'),
                        kind: 'select',
                        value: styleConfig.styleId || '',
                        options: getStyleOptions(driverType),
                        editable: true,
                        placeholder: driverType === DriverType.NARRATIVE
                            ? (lang === 'EN' ? 'Author Style' : '作者风格')
                            : (lang === 'EN' ? 'Bible Style' : '圣经风格')
                    },
                    ...(showPerspectiveAndSensory ? [
                        {
                            id: 'perspectiveId',
                            label: lang === 'EN' ? 'Perspective' : '叙事视点',
                            kind: 'select' as const,
                            value: styleConfig.perspectiveId || '',
                            options: PERSPECTIVES.map(item => ({ value: item.id, label: item.name, description: item.prompt })),
                            editable: true,
                            disabled: isStyleLocked,
                            placeholder: lang === 'EN' ? 'Perspective' : '叙事视点'
                        },
                        {
                            id: 'sensoryId',
                            label: lang === 'EN' ? 'Sensory Mode' : '感官侧重',
                            kind: 'select' as const,
                            value: styleConfig.sensoryId || '',
                            options: SENSORY_MODES.map(item => ({ value: item.id, label: item.name, description: item.prompt })),
                            editable: true,
                            disabled: isStyleLocked
                        }
                    ] : []),
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
                    value: treatment?.visualAnchor || treatment?.visualKey || '',
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
                    label: lang === 'EN' ? 'Text Seed / Semantic Lock' : '文本种子 / 语义锁定',
                    kind: 'textarea',
                    value: visionInput || '',
                    editable: true,
                    placeholder: lang === 'EN' ? 'Text seed' : '文本种子'
                },
                {
                    id: 'visionAnalysis',
                    label: lang === 'EN' ? 'Vision/Text Analysis' : '图文解析结果',
                    kind: 'textarea',
                    value: visionAnalysis || '',
                    editable: true,
                    placeholder: lang === 'EN' ? 'Analysis source' : '图文解析结果'
                }
            ]
        }
    ];
    };

    const buildPayload = (values: Record<string, unknown>) => {
        if (!treatment) {
            return lang === 'CN'
                ? '请先选择一个叙事路径，然后再查看完整的叙事创作指令。'
                : 'Select a narrative path first to inspect the full Narrative Writing prompt.';
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
            if (driverType === DriverType.NARRATIVE && nextStyleConfig.styleId) {
                nextStyleConfig.perspectiveId = null;
                nextStyleConfig.sensoryId = null;
            }
            const nextFieldState = collectFieldState(values, blocks, defaultFieldState);
            const nextWorldLaw: WorldLawConfig = normalizeWorldLawConfig({
                ...defaultWorldLaw,
                gravity: Number(values.worldLawLevel || worldLawLevel)
            });
            const nextVisionInput = String(values.visionInput ?? '');
            const nextVisionAnalysis = String(values.visionAnalysis ?? '');
            const nextDriver = driverType;

            switch (nextDriver) {
                case DriverType.COMMERCIAL:
                    return buildCommercialBiblePrompt(nextTreatment, nextStyleConfig, nextFieldState, nextVisionInput, nextWorldLaw);
                case DriverType.EXPERIMENTAL:
                    return buildExperimentalBiblePrompt(nextTreatment, nextStyleConfig, nextFieldState, nextVisionInput, nextWorldLaw);
                case DriverType.AESTHETIC:
                    return buildAestheticBiblePrompt(nextTreatment, nextStyleConfig, nextFieldState, nextVisionInput, nextWorldLaw);
                default:
                    return buildNarrativeBiblePrompt(nextTreatment, nextStyleConfig, nextFieldState, nextVisionInput, null, nextWorldLaw, nextVisionAnalysis, focusState, m7bIntensity);
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
            title={inspectorTitle}
            sources={getSources}
            buildPayload={buildPayload}
        />
    );
};
