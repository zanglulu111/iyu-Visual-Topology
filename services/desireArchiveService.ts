import {
    ConceptDesignRuntimeState,
    CreativeBlueprint,
    DesireArchiveStage,
    DesireArchiveVersion,
    DesireProject,
    DriverType,
    FinalAssetItem,
    FinalAssetsData,
    HistoryItem,
    ScreenplaySection,
    SubjectDossier,
    SubjectDossierStatus
} from '../types';

const emptyAssets = (): FinalAssetsData => ({ characters: [], props: [], scenes: [] });

const makeId = (prefix: string) => `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const textOr = (value: unknown, fallback = '') => (typeof value === 'string' && value.trim() ? value.trim() : fallback);

const truncate = (value: string, length = 180) => {
    const text = value.replace(/\s+/g, ' ').trim();
    return text.length > length ? `${text.slice(0, length)}...` : text;
};

const getTitleFromBlueprint = (blueprint?: CreativeBlueprint | null) => {
    return textOr(blueprint?.narrative?.title, '未命名主体');
};

const getBlueprintSummary = (blueprint?: CreativeBlueprint | null) => {
    if (!blueprint) return '';
    return textOr(blueprint.narrative.logline)
        || truncate(textOr(blueprint.narrative.synopsis), 220)
        || textOr(blueprint.context?.world)
        || textOr(blueprint.context?.tone);
};

const getStoryContent = (blueprint?: CreativeBlueprint | null, fallback = '') => {
    if (!blueprint) return fallback;
    return textOr(blueprint.narrative.synopsis)
        || textOr(blueprint.narrative.logline)
        || textOr(blueprint.context?.world)
        || fallback;
};

const normalizeScreenplaySections = (blueprint?: CreativeBlueprint | null): ScreenplaySection[] => {
    const screenplay = blueprint?.metonymyData?.screenplay;
    return Array.isArray(screenplay) ? screenplay : [];
};

const getSutureResponses = (section: ScreenplaySection) => {
    const responses = section.sutureDataMap ? Object.values(section.sutureDataMap) : [];
    if (section.sutureData) responses.push(section.sutureData);
    return responses;
};

export const getScreenplayContent = (blueprint?: CreativeBlueprint | null) => {
    const sections = normalizeScreenplaySections(blueprint);
    if (sections.length === 0) {
        const raw = blueprint?.metonymyData?.screenplay;
        return typeof raw === 'string' ? raw : '';
    }

    return sections.map((section, index) => {
        const generated = getSutureResponses(section)
            .map(response => response.literaryScript)
            .filter(Boolean)
            .join('\n\n');
        const body = generated || section.content || '';
        return `# ${String(index + 1).padStart(2, '0')} ${section.title}\n\n${body}`;
    }).join('\n\n');
};

const selectedAssetImage = (asset: { imageUrl?: string; view?: { images?: { id: string; url: string }[]; selectedImageId?: string | null } }) => {
    if (asset.imageUrl) return asset.imageUrl;
    const images = asset.view?.images || [];
    const selected = images.find(image => image.id === asset.view?.selectedImageId);
    return selected?.url || images[0]?.url;
};

const uniqAssets = (items: FinalAssetItem[]) => {
    const seen = new Set<string>();
    return items.filter(item => {
        const key = `${item.type}:${item.name}:${item.description}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
};

export const extractFinalAssets = (blueprint?: CreativeBlueprint | null): FinalAssetsData => {
    const assets = emptyAssets();
    if (!blueprint) return assets;

    blueprint.assets?.characters?.forEach(item => {
        assets.characters.push({
            id: item.id,
            name: item.name,
            nameEn: item.nameEn,
            type: 'CHARACTER',
            anchors: item.tag || item.name,
            description: item.desc,
            imageUrl: selectedAssetImage(item)
        });
    });

    blueprint.assets?.props?.forEach(item => {
        assets.props.push({
            id: item.id,
            name: item.name,
            nameEn: item.nameEn,
            type: 'PROP',
            anchors: item.type || item.name,
            description: item.desc,
            imageUrl: selectedAssetImage(item)
        });
    });

    blueprint.assets?.locations?.forEach(item => {
        assets.scenes.push({
            id: item.id,
            name: item.name,
            nameEn: item.nameEn,
            type: 'SCENE',
            anchors: item.tag || item.name,
            description: item.desc,
            imageUrl: selectedAssetImage(item)
        });
    });

    normalizeScreenplaySections(blueprint).forEach(section => {
        getSutureResponses(section).forEach(response => {
            if (!response.finalAssets) return;
            assets.characters.push(...response.finalAssets.characters);
            assets.props.push(...response.finalAssets.props);
            assets.scenes.push(...response.finalAssets.scenes);
        });
    });

    return {
        characters: uniqAssets(assets.characters),
        props: uniqAssets(assets.props),
        scenes: uniqAssets(assets.scenes)
    };
};

const buildDivergenceContent = (item: HistoryItem) => {
    return (item.treatments || []).map((treatment, index) => {
        return [
            `## ${index + 1}. ${treatment.title}`,
            treatment.tagline,
            treatment.pitch,
            treatment.structure,
            treatment.visualAnchor
        ].filter(Boolean).join('\n\n');
    }).join('\n\n---\n\n');
};

const buildTreatmentContent = (treatment: NonNullable<HistoryItem['treatments']>[number], index: number) => {
    return [
        `## ${index + 1}. ${treatment.title}`,
        treatment.tagline,
        treatment.pitch,
        treatment.structure,
        treatment.visualAnchor
    ].filter(Boolean).join('\n\n');
};

const getConceptRuntimeTitle = (item: HistoryItem) => {
    const runtime = item.conceptRuntimeState;
    const seed = textOr(runtime?.variables?.characterSeed);
    const source = textOr(runtime?.sourceLabel);
    return seed || source || item.driverName || '迷雾律令';
};

const buildConceptRuntimeContent = (item: HistoryItem) => {
    const runtime = item.conceptRuntimeState;
    if (!runtime) return '';
    const variables = runtime.variables || {} as Partial<ConceptDesignRuntimeState['variables']>;
    return [
        `# ${getConceptRuntimeTitle(item)}`,
        `## 编译律令\n\n${textOr(runtime.generationInstruction, '暂无编译律令。')}`,
        `## 终稿律令\n\n${textOr(runtime.finalPrompt, '暂无终稿律令。')}`,
        `## 九变量\n\n${[
            ['角色种子', variables.characterSeed],
            ['年龄 / 体型', variables.ageBodyType],
            ['时空场景', variables.timeSpaceScene],
            ['行动瞬间', variables.actionMoment],
            ['视觉媒介', variables.visualMedium],
            ['风格', variables.style],
            ['构图场景', variables.compositionScene],
            ['光线氛围', variables.lightingAtmosphere],
            ['补充细节', variables.otherDetails]
        ].map(([label, value]) => `- ${label}: ${textOr(value, '未填写')}`).join('\n')}`
    ].join('\n\n');
};

const buildArtifact = (
    stage: DesireArchiveStage,
    source: {
        title: string;
        createdAt: string;
        updatedAt?: string;
        sourceHistoryId?: number | string;
        sourceTreatmentId?: string;
        versionLabel?: string;
        content?: string;
        blueprint?: CreativeBlueprint | null;
        treatments?: HistoryItem['treatments'];
        archiveSource?: HistoryItem['archiveSource'];
        archiveReason?: HistoryItem['archiveReason'];
    }
): DesireArchiveVersion => ({
    id: `${stage.toLowerCase()}-${source.sourceHistoryId || makeId('artifact')}-${source.sourceTreatmentId || source.versionLabel || 'base'}`,
    stage,
    archiveSource: source.archiveSource,
    archiveReason: source.archiveReason,
    title: source.title,
    createdAt: source.createdAt,
    updatedAt: source.updatedAt || source.createdAt,
    status: stage === 'DIVERGENCE_SET' ? 'candidate' : 'draft',
    sourceHistoryId: source.sourceHistoryId,
    sourceTreatmentId: source.sourceTreatmentId,
    versionLabel: source.versionLabel,
    summary: truncate(source.content || getBlueprintSummary(source.blueprint), 220),
    content: source.content,
    blueprint: source.blueprint,
    treatments: source.treatments,
    assets: extractFinalAssets(source.blueprint)
});

const buildDivergenceProjectFromHistoryItem = (item: HistoryItem): DesireProject | null => {
    if (!item.treatments?.length) return null;

    const createdAt = item.date;
    const sourceId = item.id;
    const title = `分歧点｜${item.treatments[0]?.title || '未命名故事组'}`;

    return {
        id: `divergence-history-${sourceId}`,
        projectId: item.projectId,
        archiveKind: 'DIVERGENCE_BATCH',
        archiveSource: item.archiveSource,
        archiveReason: item.archiveReason,
        sourceType: 'ENGINE_GENERATED',
        title,
        engineType: item.driverId || DriverType.NARRATIVE,
        engineName: item.driverName || '爱欲迷宫',
        createdAt,
        updatedAt: item.date,
        fieldState: item.fieldState || {},
        worldLaw: item.worldLaw,
        visionInput: item.visionInput,
        visionAnalysis: item.visionAnalysis,
        visionImage: item.visionImage,
        visionImageNote: item.visionImageNote,
        visionImageMode: item.visionImageMode,
        visionImplantEnabled: item.visionImplantEnabled,
        subjectType: item.subjectType,
        aestheticMode: item.aestheticMode,
        colorPalette: item.colorPalette,
        faceState: item.faceState,
        conceptRuntimeState: item.conceptRuntimeState,
        sourceHistoryIds: [sourceId],
        candidateCount: item.treatments.length,
        divergence: buildArtifact('DIVERGENCE_SET', {
            title: '分歧点故事大纲',
            createdAt,
            sourceHistoryId: sourceId,
            content: buildDivergenceContent(item),
            archiveSource: item.archiveSource,
            archiveReason: item.archiveReason,
            treatments: item.treatments
        }),
        bibleDrafts: [],
        metonymyScripts: [],
        subjectDossierIds: []
    };
};

const buildEdictProjectFromHistoryItem = (item: HistoryItem): DesireProject | null => {
    if (item.driverId !== DriverType.CONCEPT_DESIGN || !item.conceptRuntimeState) return null;

    const createdAt = item.date;
    const sourceId = item.id;
    const runtime = item.conceptRuntimeState;

    return {
        id: `edict-history-${sourceId}`,
        projectId: item.projectId,
        archiveKind: 'EDICT_PROJECT',
        archiveSource: item.archiveSource,
        archiveReason: item.archiveReason,
        sourceType: 'ENGINE_GENERATED',
        title: `迷雾律令｜${getConceptRuntimeTitle(item)}`,
        engineType: DriverType.CONCEPT_DESIGN,
        engineName: item.driverName || '迷雾律令',
        createdAt,
        updatedAt: createdAt,
        fieldState: item.fieldState || {},
        worldLaw: item.worldLaw,
        visionInput: item.visionInput,
        visionAnalysis: item.visionAnalysis,
        visionImage: item.visionImage,
        visionImageNote: item.visionImageNote,
        visionImageMode: item.visionImageMode,
        visionImplantEnabled: item.visionImplantEnabled,
        subjectType: item.subjectType,
        aestheticMode: item.aestheticMode,
        colorPalette: item.colorPalette,
        faceState: item.faceState,
        conceptRuntimeState: runtime,
        sourceHistoryIds: [sourceId],
        originalStory: {
            title: getConceptRuntimeTitle(item),
            content: buildConceptRuntimeContent(item),
            source: 'engine'
        },
        bibleDrafts: [],
        metonymyScripts: [],
        subjectDossierIds: [],
        notes: textOr(runtime.finalPrompt, runtime.generationInstruction)
    };
};

const buildStoryProjectFromBlueprint = (
    item: HistoryItem,
    blueprint: CreativeBlueprint,
    index: number,
    mode: 'BIBLE' | 'METONYMY',
    projectIdOverride?: string
): DesireProject => {
    const createdAt = item.date;
    const sourceId = item.id;
    const sourceType = item.driverId === DriverType.EXPERIMENTAL ? 'CUSTOM_STORY' : 'ENGINE_GENERATED';
    const sourceTreatmentId = blueprint.treatmentId || `${mode.toLowerCase()}-${index + 1}`;
    const storyContent = getStoryContent(blueprint);
    const projectTitle = sourceType === 'CUSTOM_STORY'
        ? `自定义剧本｜${getTitleFromBlueprint(blueprint)}`
        : `叙事创作｜${getTitleFromBlueprint(blueprint)}`;
    const sourceDivergenceId = item.treatments?.length ? `divergence-history-${sourceId}` : undefined;

    const project: DesireProject = {
        id: projectIdOverride || `story-${sourceId}-${sourceTreatmentId}`,
        projectId: item.projectId,
        archiveKind: 'STORY_PROJECT',
        archiveSource: item.archiveSource,
        archiveReason: item.archiveReason,
        sourceType,
        title: projectTitle,
        engineType: item.driverId || DriverType.NARRATIVE,
        engineName: sourceType === 'CUSTOM_STORY' ? '换喻脚本' : (item.driverName || '爱欲迷宫'),
        createdAt,
        updatedAt: item.date,
        fieldState: item.fieldState || {},
        worldLaw: item.worldLaw,
        visionInput: item.visionInput,
        visionAnalysis: item.visionAnalysis,
        visionImage: item.visionImage,
        visionImageNote: item.visionImageNote,
        visionImageMode: item.visionImageMode,
        visionImplantEnabled: item.visionImplantEnabled,
        subjectType: item.subjectType,
        aestheticMode: item.aestheticMode,
        colorPalette: item.colorPalette,
        faceState: item.faceState,
        conceptRuntimeState: item.conceptRuntimeState,
        sourceHistoryIds: [sourceId],
        sourceDivergenceId,
        sourceCandidateId: sourceTreatmentId,
        originalStory: {
            title: getTitleFromBlueprint(blueprint),
            content: storyContent,
            source: sourceType === 'CUSTOM_STORY' ? 'user' : 'engine'
        },
        bibleDrafts: [],
        metonymyScripts: [],
        subjectDossierIds: []
    };

    if (mode === 'BIBLE' || sourceType === 'CUSTOM_STORY') {
        project.bibleDrafts = [buildArtifact('CREATIVE_BIBLE', {
            title: sourceType === 'CUSTOM_STORY' ? '自定义故事原文' : getTitleFromBlueprint(blueprint),
            createdAt,
            sourceHistoryId: sourceId,
            sourceTreatmentId,
            versionLabel: sourceType === 'CUSTOM_STORY' ? 'Original Story' : `Narrative ${index + 1}`,
            content: storyContent,
            archiveSource: item.archiveSource,
            archiveReason: item.archiveReason,
            blueprint
        })];
    }

    if (mode === 'METONYMY') {
        project.metonymyScripts = [buildArtifact('METONYMY_SCRIPT', {
            title: getTitleFromBlueprint(blueprint),
            createdAt,
            sourceHistoryId: sourceId,
            sourceTreatmentId,
            versionLabel: `Script ${index + 1}`,
            content: getScreenplayContent(blueprint),
            archiveSource: item.archiveSource,
            archiveReason: item.archiveReason,
            blueprint
        })];
    }

    return project;
};

const mergeStoryProjects = (items: DesireProject[]) => {
    const merged = new Map<string, DesireProject>();

    items.forEach(project => {
        if (project.archiveKind !== 'STORY_PROJECT') {
            merged.set(project.id, project);
            return;
        }

        const existing = merged.get(project.id);
        if (!existing) {
            merged.set(project.id, project);
            return;
        }

        const mergeArtifacts = (a: DesireArchiveVersion[], b: DesireArchiveVersion[]) => {
            const map = new Map<string, DesireArchiveVersion>();
            [...a, ...b].forEach(artifact => map.set(artifact.id, artifact));
            return Array.from(map.values()).sort((left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime());
        };

        merged.set(project.id, {
            ...existing,
            ...project,
            title: existing.title || project.title,
            createdAt: new Date(existing.createdAt).getTime() <= new Date(project.createdAt).getTime() ? existing.createdAt : project.createdAt,
            updatedAt: new Date(existing.updatedAt).getTime() >= new Date(project.updatedAt).getTime() ? existing.updatedAt : project.updatedAt,
            sourceHistoryIds: Array.from(new Set([...existing.sourceHistoryIds, ...project.sourceHistoryIds])),
            originalStory: existing.originalStory || project.originalStory,
            bibleDrafts: mergeArtifacts(existing.bibleDrafts, project.bibleDrafts),
            metonymyScripts: mergeArtifacts(existing.metonymyScripts, project.metonymyScripts),
            subjectDossierIds: Array.from(new Set([...existing.subjectDossierIds, ...project.subjectDossierIds]))
        });
    });

    return Array.from(merged.values());
};

export const buildDesireProjectsFromHistoryItem = (item: HistoryItem): DesireProject[] => {
    const projects: DesireProject[] = [];
    const divergenceProject = buildDivergenceProjectFromHistoryItem(item);
    if (divergenceProject) projects.push(divergenceProject);
    const edictProject = buildEdictProjectFromHistoryItem(item);
    if (edictProject) projects.push(edictProject);

    const bibleBlueprints = item.metonymyBlueprint
        ? []
        : item.savedBlueprints
            ? Object.values(item.savedBlueprints)
            : (item.type === 'BIBLE' && item.blueprint ? [item.blueprint] : []);
    bibleBlueprints.forEach((blueprint, index) => {
        projects.push(buildStoryProjectFromBlueprint(item, blueprint, index, 'BIBLE'));
    });

    if (item.type === 'METONYMY' && item.blueprint && !item.metonymyBlueprint) {
        projects.push(buildStoryProjectFromBlueprint(item, item.blueprint, 0, 'METONYMY'));
    }

    if (item.metonymyBlueprint) {
        const primaryBlueprint = item.blueprint || item.metonymyBlueprint;
        const combined = buildStoryProjectFromBlueprint(item, primaryBlueprint, 0, 'BIBLE', `story-${item.id}-workspace`);
        combined.title = `故事工作台｜${getTitleFromBlueprint(primaryBlueprint)}`;
        combined.metonymyScripts = [buildArtifact('METONYMY_SCRIPT', {
            title: getTitleFromBlueprint(item.metonymyBlueprint),
            createdAt: item.date,
            sourceHistoryId: item.id,
            sourceTreatmentId: item.metonymyBlueprint.treatmentId || 'metonymy',
            versionLabel: 'Metonymy Script',
            content: getScreenplayContent(item.metonymyBlueprint),
            archiveSource: item.archiveSource,
            archiveReason: item.archiveReason,
            blueprint: item.metonymyBlueprint
        })];
        projects.push(combined);
    }

    return mergeStoryProjects(projects);
};

export const buildDesireProjectFromHistoryItem = (item: HistoryItem): DesireProject => {
    return buildDesireProjectsFromHistoryItem(item)[0] || {
        id: `story-${item.id}`,
        projectId: item.projectId,
        archiveKind: 'STORY_PROJECT',
        archiveSource: item.archiveSource,
        archiveReason: item.archiveReason,
        sourceType: item.driverId === DriverType.EXPERIMENTAL ? 'CUSTOM_STORY' : 'ENGINE_GENERATED',
        title: item.blueprint ? `叙事创作｜${getTitleFromBlueprint(item.blueprint)}` : '未命名叙事创作',
        engineType: item.driverId || DriverType.NARRATIVE,
        engineName: item.driverName || '爱欲迷宫',
        createdAt: item.date,
        updatedAt: item.date,
        fieldState: item.fieldState || {},
        worldLaw: item.worldLaw,
        visionInput: item.visionInput,
        visionAnalysis: item.visionAnalysis,
        visionImage: item.visionImage,
        visionImageNote: item.visionImageNote,
        visionImageMode: item.visionImageMode,
        visionImplantEnabled: item.visionImplantEnabled,
        subjectType: item.subjectType,
        aestheticMode: item.aestheticMode,
        colorPalette: item.colorPalette,
        faceState: item.faceState,
        conceptRuntimeState: item.conceptRuntimeState,
        sourceHistoryIds: [item.id],
        bibleDrafts: [],
        metonymyScripts: [],
        subjectDossierIds: []
    };
};

export const mergeDesireProjects = (persisted: DesireProject[], history: HistoryItem[]) => {
    const merged = new Map<string, DesireProject>();
    history.forEach(item => {
        buildDesireProjectsFromHistoryItem(item).forEach(project => {
            merged.set(project.id, project);
        });
    });
    persisted.forEach(project => {
        const hasSplitReplacement = !project.archiveKind && project.sourceHistoryIds.some(sourceId => {
            return merged.has(`divergence-history-${sourceId}`)
                || merged.has(`edict-history-${sourceId}`)
                || project.bibleDrafts.some(artifact => merged.has(`story-${sourceId}-${artifact.sourceTreatmentId || artifact.blueprint?.treatmentId || 'base'}`))
                || project.metonymyScripts.some(artifact => merged.has(`story-${sourceId}-${artifact.sourceTreatmentId || artifact.blueprint?.treatmentId || 'base'}`));
        });
        if (hasSplitReplacement) return;
        merged.set(project.id, project);
    });
    return Array.from(merged.values()).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
};

export const choosePrimaryArtifact = (project: DesireProject | null): DesireArchiveVersion | null => {
    if (!project) return null;
    return project.metonymyScripts[0] || project.bibleDrafts[0] || project.divergence || null;
};

export const createSubjectDossierFromArtifact = (
    project: DesireProject,
    artifact: DesireArchiveVersion,
    status: SubjectDossierStatus = 'published'
): SubjectDossier => {
    const now = new Date().toISOString();
    const blueprint = artifact.blueprint || null;
    const story = getStoryContent(blueprint, artifact.content || '');
    const screenplay = artifact.stage === 'METONYMY_SCRIPT'
        ? (artifact.content || getScreenplayContent(blueprint))
        : getScreenplayContent(blueprint);
    const psychoanalysis = '待生成精神分析档案。';
    const assets = artifact.assets || extractFinalAssets(blueprint);

    return {
        id: makeId('subject'),
        sourceProjectId: project.id,
        sourceArtifactId: artifact.id,
        createdAt: now,
        updatedAt: now,
        publishedAt: status === 'published' ? now : undefined,
        status,
        category: 'UNCLASSIFIED',
        title: artifact.title || project.title,
        titleEn: blueprint?.narrative?.title,
        summary: getBlueprintSummary(blueprint) || truncate(story || artifact.summary || project.title, 180),
        imageUrl: blueprint?.context?.imageUrl || assets.characters[0]?.imageUrl || assets.scenes[0]?.imageUrl,
        story: {
            title: artifact.title || project.title,
            content: story || artifact.content || '',
            sourceArtifactId: artifact.id
        },
        psychoanalysis: {
            title: '精神分析档案',
            content: psychoanalysis,
            sourceArtifactId: artifact.id
        },
        assets,
        screenplay: {
            title: '完整电影脚本',
            content: screenplay || '',
            sections: normalizeScreenplaySections(blueprint),
            sourceArtifactId: artifact.id
        },
        sourceBlueprint: blueprint,
        adminNotes: `由欲望工作档案 ${project.id} 推送。`
    };
};

export const splitTextToParagraphs = (text: string) => {
    return text
        .split(/\n{2,}/)
        .map(part => part.trim())
        .filter(Boolean);
};
