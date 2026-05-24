import React, { useEffect, useMemo, useState } from 'react';
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Clock,
    Database,
    FileText,
    GitFork,
    History as HistoryIcon,
    Save,
    Search,
    Trash2,
    UploadCloud,
    Wand2,
    X
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import {
    BlueprintLanguage,
    DesireArchiveStage,
    DesireArchiveVersion,
    DesireProject,
    HistoryItem,
    SubjectDossier
} from '../types';
import { persistence } from '../services/persistence';
import {
    createSubjectDossierFromArtifact,
    mergeDesireProjects
} from '../services/desireArchiveService';
import { EngineParamsOverview } from './EngineParamsOverview';

type ArchiveRoot = 'DIVERGENCE' | 'WORKSPACE';
type StageFilter = DesireArchiveStage;

interface HistoryModalProps {
    history: HistoryItem[];
    onRestore: (item: HistoryItem) => void;
    onClose: () => void;
    lang?: BlueprintLanguage;
    activeProjectId?: string | null;
    onSaveCurrent?: (options?: { targetHistoryId?: number | string; saveAs?: boolean; title?: string }) => Promise<HistoryItem>;
}

const stageMeta: Record<StageFilter, { cn: string; en: string; short: string; icon: React.ElementType }> = {
    DIVERGENCE_SET: { cn: '分歧点故事大纲', en: 'Divergence Outlines', short: 'DIV', icon: GitFork },
    CREATIVE_BIBLE: { cn: '叙事创作版本', en: 'Narrative Drafts', short: 'NAR', icon: BookOpen },
    METONYMY_SCRIPT: { cn: '换喻电影脚本', en: 'Metonymy Screenplays', short: 'SCR', icon: Wand2 },
};

const formatDate = (value: string, lang: BlueprintLanguage) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString(lang === 'CN' ? 'zh-CN' : 'en-US', {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
};

const getArtifactsForStage = (project: DesireProject | null, stage: StageFilter) => {
    if (!project) return [];
    if (stage === 'DIVERGENCE_SET') {
        if (!project.divergence) return [];
        return [project.divergence];
    }
    if (stage === 'CREATIVE_BIBLE') return project.bibleDrafts;
    if (stage === 'METONYMY_SCRIPT') return project.metonymyScripts;
    return [];
};

const updateArtifactStatus = (project: DesireProject, artifactId: string): DesireProject => {
    const touch = (artifact: DesireArchiveVersion) => artifact.id === artifactId
        ? { ...artifact, status: 'promoted' as const, updatedAt: new Date().toISOString() }
        : artifact;
    return {
        ...project,
        divergence: project.divergence ? touch(project.divergence) : undefined,
        bibleDrafts: project.bibleDrafts.map(touch),
        metonymyScripts: project.metonymyScripts.map(touch),
        updatedAt: new Date().toISOString()
    };
};

const applyBlueprintGenerationSnapshot = (item: HistoryItem, blueprint?: DesireArchiveVersion['blueprint'] | null): HistoryItem => {
    if (!blueprint) return item;
    return {
        ...item,
        fieldState: blueprint.generationFieldState || item.fieldState,
        worldLaw: blueprint.generationWorldLaw || item.worldLaw,
        visionInput: blueprint.generationVisionInput ?? item.visionInput,
        visionAnalysis: blueprint.generationVisionAnalysis ?? item.visionAnalysis,
        visionImage: blueprint.generationVisionImage ?? item.visionImage,
        visionImageNote: blueprint.generationVisionImageNote ?? item.visionImageNote,
        visionImageMode: blueprint.generationVisionImageMode ?? item.visionImageMode,
        visionImplantEnabled: blueprint.generationVisionImplantEnabled ?? item.visionImplantEnabled,
        subjectType: blueprint.generationSubjectType || item.subjectType,
        aestheticMode: blueprint.generationAestheticMode || item.aestheticMode,
        colorPalette: blueprint.generationColorPalette || item.colorPalette,
        faceState: blueprint.generationFaceState || item.faceState,
        focusState: (blueprint as any).generationFocusState || (item as any).focusState
    };
};

export const HistoryModal: React.FC<HistoryModalProps> = ({ history, onRestore, onClose, lang = 'CN', activeProjectId, onSaveCurrent }) => {
    const { theme } = useTheme();
    const [persistedProjects, setPersistedProjects] = useState<DesireProject[]>([]);
    const [subjectDossiers, setSubjectDossiers] = useState<SubjectDossier[]>([]);
    const [selectedRoot, setSelectedRoot] = useState<ArchiveRoot>('DIVERGENCE');
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [activeStage, setActiveStage] = useState<StageFilter>('DIVERGENCE_SET');
    const [selectedArtifactId, setSelectedArtifactId] = useState<string | null>(null);
    const [deletedProjectIds, setDeletedProjectIds] = useState<Set<string>>(() => {
        try {
            return new Set(JSON.parse(localStorage.getItem('mistDeletedDesireProjectIds') || '[]'));
        } catch {
            return new Set();
        }
    });
    const [query, setQuery] = useState('');
    const [notice, setNotice] = useState<string | null>(null);

    useEffect(() => {
        const loadArchive = async () => {
            try {
                const [projects, dossiers] = await Promise.all([
                    persistence.getDesireProjects(),
                    persistence.getSubjectDossiers()
                ]);
                setPersistedProjects(projects);
                setSubjectDossiers(dossiers);
            } catch (error) {
                console.error('Failed to load desire archive', error);
            }
        };
        loadArchive();
    }, []);

    const visibleHistory = useMemo(() => {
        if (!activeProjectId) return history;
        return history.filter(item => item.projectId === activeProjectId);
    }, [activeProjectId, history]);

    const projects = useMemo(() => {
        return mergeDesireProjects(persistedProjects, visibleHistory).filter(project => {
            if (deletedProjectIds.has(project.id)) return false;
            if (!activeProjectId) return true;
            return project.projectId === activeProjectId;
        });
    }, [activeProjectId, deletedProjectIds, persistedProjects, visibleHistory]);

    const divergenceProjects = useMemo(() => {
        return projects.filter(project => project.archiveKind === 'DIVERGENCE_BATCH' || (!!project.divergence && project.bibleDrafts.length === 0 && project.metonymyScripts.length === 0));
    }, [projects]);

    const storyProjects = useMemo(() => {
        return projects.filter(project => project.archiveKind === 'STORY_PROJECT' || project.bibleDrafts.length > 0 || project.metonymyScripts.length > 0 || !!project.originalStory);
    }, [projects]);

    const activeProjectList = selectedRoot === 'DIVERGENCE'
        ? divergenceProjects
        : storyProjects;

    const filteredProjects = useMemo(() => {
        const needle = query.trim().toLowerCase();
        if (!needle) return activeProjectList;
        return activeProjectList.filter(project => {
            return [
                project.title,
                project.engineName,
                project.sourceType,
                project.originalStory?.content,
                project.divergence?.summary,
                ...project.bibleDrafts.map(item => item.title),
                ...project.metonymyScripts.map(item => item.title)
            ].filter(Boolean).join(' ').toLowerCase().includes(needle);
        });
    }, [activeProjectList, query]);

    useEffect(() => {
        if (!selectedProjectId && filteredProjects.length > 0) {
            setSelectedProjectId(filteredProjects[0].id);
        }
    }, [filteredProjects, selectedProjectId]);

    const selectedProject = activeProjectList.find(project => project.id === selectedProjectId) || filteredProjects[0] || null;
    const activeArtifacts = selectedRoot === 'WORKSPACE' && selectedProject
        ? [...selectedProject.bibleDrafts, ...selectedProject.metonymyScripts]
        : getArtifactsForStage(selectedProject, activeStage);
    const selectedArtifact = activeArtifacts.find(artifact => artifact.id === selectedArtifactId) || activeArtifacts[0] || null;

    useEffect(() => {
        const nextArtifacts = selectedRoot === 'WORKSPACE' && selectedProject
            ? [...selectedProject.bibleDrafts, ...selectedProject.metonymyScripts]
            : getArtifactsForStage(selectedProject, activeStage);
        setSelectedArtifactId(nextArtifacts[0]?.id || null);
    }, [selectedProjectId, activeStage, selectedProject, selectedRoot]);

    useEffect(() => {
        setSelectedProjectId(null);
        setSelectedArtifactId(null);
        setActiveStage(selectedRoot === 'DIVERGENCE' ? 'DIVERGENCE_SET' : 'CREATIVE_BIBLE');
    }, [selectedRoot]);

    const findSourceHistory = (project: DesireProject | null, artifact?: DesireArchiveVersion | null) => {
        const sourceId = artifact?.sourceHistoryId || project?.sourceHistoryIds[0];
        return visibleHistory.find(item => String(item.id) === String(sourceId)) || null;
    };

    const handleRestore = async () => {
        const source = findSourceHistory(selectedProject, selectedArtifact);
        if (!source) return;

        try {
            const hydrated = (source as any).is_partial
                ? await persistence.getHistoryItem(source.id)
                : source;
            if (!hydrated) {
                setNotice(lang === 'CN' ? '恢复失败：未找到完整档案' : 'Restore failed: full archive not found');
                setTimeout(() => setNotice(null), 2200);
                return;
            }

            if (selectedRoot === 'WORKSPACE') {
                const primaryBlueprint = hydrated.blueprint || selectedArtifact?.blueprint;
                onRestore(applyBlueprintGenerationSnapshot({
                    ...hydrated,
                    type: hydrated.metonymyBlueprint && !hydrated.blueprint ? 'METONYMY' : 'BIBLE',
                    blueprint: primaryBlueprint || hydrated.blueprint,
                    metonymyBlueprint: hydrated.metonymyBlueprint || (selectedArtifact?.stage === 'METONYMY_SCRIPT' ? selectedArtifact.blueprint : hydrated.metonymyBlueprint),
                    savedBlueprints: primaryBlueprint
                        ? { ...(hydrated.savedBlueprints || {}), [primaryBlueprint.treatmentId]: primaryBlueprint }
                        : hydrated.savedBlueprints
                }, primaryBlueprint));
                return;
            }

            if (selectedArtifact?.stage === 'DIVERGENCE_SET') {
                onRestore({
                    ...hydrated,
                    type: 'NARRATIVE',
                    blueprint: null,
                    fieldState: selectedProject?.fieldState || hydrated.fieldState,
                    worldLaw: selectedProject?.worldLaw || hydrated.worldLaw,
                    visionInput: selectedProject?.visionInput ?? hydrated.visionInput,
                    visionAnalysis: selectedProject?.visionAnalysis ?? hydrated.visionAnalysis,
                    visionImage: selectedProject?.visionImage ?? hydrated.visionImage,
                    visionImageNote: selectedProject?.visionImageNote ?? hydrated.visionImageNote,
                    visionImageMode: selectedProject?.visionImageMode ?? hydrated.visionImageMode,
                    visionImplantEnabled: selectedProject?.visionImplantEnabled ?? hydrated.visionImplantEnabled,
                    subjectType: selectedProject?.subjectType || hydrated.subjectType,
                    aestheticMode: selectedProject?.aestheticMode || hydrated.aestheticMode,
                    colorPalette: selectedProject?.colorPalette || hydrated.colorPalette,
                    faceState: selectedProject?.faceState || hydrated.faceState,
                    treatments: selectedArtifact.treatments || hydrated.treatments || []
                });
                return;
            }

            if (selectedArtifact?.stage === 'CREATIVE_BIBLE') {
                const blueprint = selectedArtifact.blueprint || hydrated.blueprint;
                onRestore(applyBlueprintGenerationSnapshot({
                    ...hydrated,
                    type: 'BIBLE',
                    blueprint,
                    savedBlueprints: blueprint
                        ? { ...(hydrated.savedBlueprints || {}), [blueprint.treatmentId]: blueprint }
                        : hydrated.savedBlueprints
                }, blueprint));
                return;
            }

            if (selectedArtifact?.stage === 'METONYMY_SCRIPT') {
                const blueprint = selectedArtifact.blueprint || hydrated.blueprint;
                onRestore(applyBlueprintGenerationSnapshot({
                    ...hydrated,
                    type: 'METONYMY',
                    blueprint
                }, blueprint));
                return;
            }

            onRestore(hydrated);
        } catch (error) {
            console.error('Failed to hydrate history item before restore', error);
            setNotice(lang === 'CN' ? '恢复失败' : 'Restore failed');
            setTimeout(() => setNotice(null), 2200);
        }
    };

    const handlePromote = async (artifact: DesireArchiveVersion) => {
        if (!selectedProject) return;
        try {
            const dossier = createSubjectDossierFromArtifact(selectedProject, artifact, 'published');
            await persistence.saveSubjectDossier(dossier);
            const nextProject = updateArtifactStatus({
                ...selectedProject,
                subjectDossierIds: Array.from(new Set([...selectedProject.subjectDossierIds, dossier.id]))
            }, artifact.id);
            await persistence.saveDesireProject(nextProject);
            setSubjectDossiers(prev => [dossier, ...prev]);
            setPersistedProjects(prev => [nextProject, ...prev.filter(project => project.id !== nextProject.id)]);
            setNotice(lang === 'CN' ? '已推送到主体档案' : 'Promoted to subject archive');
            setTimeout(() => setNotice(null), 2200);
        } catch (error) {
            console.error('Failed to promote subject dossier', error);
            setNotice(lang === 'CN' ? '推送失败' : 'Promotion failed');
        }
    };

    const reloadPersistedProjects = async () => {
        const projects = await persistence.getDesireProjects();
        setPersistedProjects(projects);
    };

    const handleSaveCurrent = async (saveAs = false) => {
        if (!onSaveCurrent) return;
        const source = findSourceHistory(selectedProject, selectedArtifact);
        if (!saveAs) {
            if (!source) {
                await handleSaveCurrent(true);
                return;
            }
            const ok = window.confirm(
                lang === 'CN'
                    ? `确认用当前工作台状态覆盖「${selectedProject?.title || '当前档案'}」？`
                    : `Overwrite "${selectedProject?.title || 'current archive'}" with the current workspace state?`
            );
            if (!ok) return;
        }

        const title = saveAs
            ? window.prompt(lang === 'CN' ? '另存为名称' : 'Save as name', selectedProject?.title || '')
            : undefined;
        if (saveAs && title === null) return;

        try {
            const saved = await onSaveCurrent({
                targetHistoryId: source?.id,
                saveAs,
                title: title || undefined
            });
            await reloadPersistedProjects();
            setSelectedProjectId(null);
            setNotice(saveAs
                ? (lang === 'CN' ? '已另存为新档案' : 'Saved as a new archive')
                : (lang === 'CN' ? '已覆盖当前档案' : 'Current archive overwritten'));
            setTimeout(() => setNotice(null), 2200);
            if (saved?.id) {
                const nextId = selectedRoot === 'DIVERGENCE'
                    ? `divergence-history-${saved.id}`
                    : `story-${saved.id}-workspace`;
                setSelectedProjectId(nextId);
            }
        } catch (error) {
            console.error('Failed to save current workspace into archive', error);
            setNotice(lang === 'CN' ? '保存失败' : 'Save failed');
            setTimeout(() => setNotice(null), 2200);
        }
    };

    const handleDeleteProject = async (project: DesireProject) => {
        const ok = window.confirm(
            lang === 'CN'
                ? `确认删除「${project.title}」？只删除这个档案记录，不影响另一栏的同源项目。`
                : `Delete "${project.title}"? This removes only this archive record.`
        );
        if (!ok) return;

        try {
            await persistence.deleteDesireProject(project.id);
            setDeletedProjectIds(prev => {
                const next = new Set(prev);
                next.add(project.id);
                localStorage.setItem('mistDeletedDesireProjectIds', JSON.stringify(Array.from(next)));
                return next;
            });
            setPersistedProjects(prev => prev.filter(item => item.id !== project.id));
            if (selectedProjectId === project.id) {
                const next = activeProjectList.find(item => item.id !== project.id);
                setSelectedProjectId(next?.id || null);
            }
            setNotice(lang === 'CN' ? '已删除工作档案' : 'Project deleted');
            setTimeout(() => setNotice(null), 1800);
        } catch (error) {
            console.error('Failed to delete desire project', error);
            setNotice(lang === 'CN' ? '删除失败' : 'Delete failed');
        }
    };

    const handleDeleteSubjectDossier = async (dossier: SubjectDossier) => {
        const ok = window.confirm(
            lang === 'CN'
                ? `确认删除主体档案「${dossier.title}」？`
                : `Delete subject dossier "${dossier.title}"?`
        );
        if (!ok) return;

        try {
            await persistence.deleteSubjectDossier(dossier.id);
            setSubjectDossiers(prev => prev.filter(item => item.id !== dossier.id));
            if (selectedProject?.subjectDossierIds.includes(dossier.id)) {
                const nextProject: DesireProject = {
                    ...selectedProject,
                    subjectDossierIds: selectedProject.subjectDossierIds.filter(id => id !== dossier.id),
                    updatedAt: new Date().toISOString()
                };
                await persistence.saveDesireProject(nextProject);
                setPersistedProjects(prev => [nextProject, ...prev.filter(project => project.id !== nextProject.id)]);
            }
            setNotice(lang === 'CN' ? '已删除主体档案' : 'Subject dossier deleted');
            setTimeout(() => setNotice(null), 1800);
        } catch (error) {
            console.error('Failed to delete subject dossier', error);
            setNotice(lang === 'CN' ? '删除失败' : 'Delete failed');
        }
    };

    const handleClearArchive = async () => {
        const targetProjects = activeProjectList;
        const targetLabel = selectedRoot === 'DIVERGENCE'
            ? (lang === 'CN' ? '分歧点档案' : 'divergence archives')
            : (lang === 'CN' ? '故事工作台档案' : 'story workspace archives');

        const ok = window.confirm(
            lang === 'CN'
                ? `确认删除全部 ${targetProjects.length} 个${targetLabel}？此操作不会删除其他阶段档案。`
                : `Delete all ${targetProjects.length} ${targetLabel}? This will not delete other archive stages.`
        );
        if (!ok) return;

        await Promise.all(targetProjects.map(project => persistence.deleteDesireProject(project.id)));
        setDeletedProjectIds(prev => {
            const next = new Set(prev);
            targetProjects.forEach(project => next.add(project.id));
            localStorage.setItem('mistDeletedDesireProjectIds', JSON.stringify(Array.from(next)));
            return next;
        });
        setPersistedProjects(prev => prev.filter(project => !targetProjects.some(target => target.id === project.id)));
        setSelectedProjectId(null);
        setNotice(lang === 'CN' ? `${targetLabel}已清空` : 'Archive tab cleared');
        setTimeout(() => setNotice(null), 1800);
    };

    const getProjectDossiers = (project: DesireProject | null) => {
        if (!project) return [];
        return subjectDossiers.filter(dossier => dossier.sourceProjectId === project.id || project.subjectDossierIds.includes(dossier.id));
    };

    const getPromotionLabel = (project: DesireProject | null) => {
        const promoted = getProjectDossiers(project).length > 0 || Boolean(project?.subjectDossierIds.length);
        if (lang === 'CN') return promoted ? '已推送' : '未推送';
        return promoted ? 'Promoted' : 'Unpromoted';
    };

    const getPromotionClass = (project: DesireProject | null) => {
        const promoted = getProjectDossiers(project).length > 0 || Boolean(project?.subjectDossierIds.length);
        return promoted
            ? 'border-[var(--mist-archive-red-soft)] text-[var(--mist-archive-red)] bg-[var(--mist-archive-red-faint)]'
            : 'border-zinc-800 text-zinc-500';
    };

    const getArchiveSourceLabel = (source?: DesireProject['archiveSource'] | DesireArchiveVersion['archiveSource']) => {
        if (source === 'AI_SNAPSHOT') return lang === 'CN' ? 'AI快照' : 'AI Snapshot';
        if (source === 'MANUAL_SAVE') return lang === 'CN' ? '手动保存' : 'Manual Save';
        return lang === 'CN' ? '历史档案' : 'Archive';
    };

    const getFullStoryText = (artifact: DesireArchiveVersion | null) => {
        if (!artifact) return '';
        return artifact.blueprint?.narrative?.synopsis || artifact.content || artifact.summary || '';
    };

    const renderParamsOverview = (project: DesireProject) => (
        <div className="mist-archive-panel border p-5 mb-5">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-4">
                <Database size={14} />
                {lang === 'CN' ? '生成参数' : 'Generation parameters'}
            </div>
            <div className="max-h-[260px] overflow-y-auto custom-scrollbar pr-2">
                <EngineParamsOverview
                    fieldState={project.fieldState}
                    language={lang}
                    theme={theme}
                    accentClass="text-[var(--mist-archive-red)]"
                    visionInput={project.visionInput}
                    visionAnalysis={project.visionAnalysis}
                    worldLawConfig={project.worldLaw}
                />
            </div>
        </div>
    );

    return (
        <div className="mist-archive-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300">
            <div className={`mist-history-modal mist-archive-modal w-full h-full max-w-[1680px] max-h-[92vh] ${theme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]'} border ${theme === 'retro' ? 'border-[#8B261D]' : 'border-zinc-800'} rounded-sm shadow-2xl flex overflow-hidden relative`}>
                {!selectedProject && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="mist-history-action-button mist-history-close-button mist-history-floating-close absolute right-4 top-4 z-30 h-10 w-10 flex items-center justify-center border"
                        aria-label={lang === 'CN' ? '关闭欲望存档' : 'Close desire archive'}
                        title={lang === 'CN' ? '关闭欲望存档' : 'Close desire archive'}
                    >
                        <X size={22} strokeWidth={2.2} />
                    </button>
                )}
                <aside className={`w-[370px] border-r ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#070707]'} flex flex-col shrink-0`}>
                    <div className={`p-5 border-b ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}`}>
                        <div className="flex items-start justify-between gap-4 mb-5">
                            <div>
                                <div className="flex items-center gap-2 text-[var(--mist-archive-red)] mb-2">
                                    <HistoryIcon size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                                        {lang === 'CN' ? '历史记录' : 'History'}
                                    </span>
                                </div>
                                <h2 className={`font-serif text-2xl font-bold ${theme === 'retro' ? 'text-[#3E110D]' : 'text-white'}`}>
                                    {lang === 'CN' ? '欲望存档' : 'Desire Archive'}
                                </h2>
                                <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed">
                                    {lang === 'CN'
                                        ? '保存并恢复你的分歧点、故事正文与脚本进度。'
                                        : 'Save and restore divergences, story drafts, and script progress.'}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <button
                                type="button"
                                onClick={() => setSelectedRoot('DIVERGENCE')}
                                className={`mist-archive-button h-9 border text-[10px] font-bold uppercase tracking-widest ${selectedRoot === 'DIVERGENCE' ? 'is-active' : ''}`}
                            >
                                {lang === 'CN' ? `分歧点 ${divergenceProjects.length}` : `Divergence ${divergenceProjects.length}`}
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedRoot('WORKSPACE')}
                                className={`mist-archive-button h-9 border text-[10px] font-bold uppercase tracking-widest ${selectedRoot === 'WORKSPACE' ? 'is-active' : ''}`}
                            >
                                {lang === 'CN' ? `故事工作台 ${storyProjects.length}` : `Workspace ${storyProjects.length}`}
                            </button>
                        </div>

                        <label className={`h-10 flex items-center gap-2 px-3 border outline-none ring-0 focus-within:outline-none focus-within:ring-0 ${theme === 'retro' ? 'border-[#8B261D]/20 bg-white/50 focus-within:border-[#8B261D]/20' : 'border-zinc-800 bg-black/40 focus-within:border-zinc-800'}`}>
                            <Search size={14} className="text-zinc-500" />
                            <input
                                value={query}
                                onChange={event => setQuery(event.target.value)}
                                placeholder={selectedRoot === 'DIVERGENCE'
                                    ? (lang === 'CN' ? '检索分歧点' : 'Search divergence')
                                    : (lang === 'CN' ? '检索故事工作台' : 'Search story workspace')}
                                className="bg-transparent border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 text-xs flex-1 text-zinc-200 placeholder:text-zinc-600"
                                style={{ outline: 'none', boxShadow: 'none' }}
                            />
                        </label>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {filteredProjects.length === 0 ? (
                            <div className="p-8 text-center text-zinc-600 text-xs">
                                {selectedRoot === 'DIVERGENCE'
                                    ? (lang === 'CN' ? '还没有分歧点档案。' : 'No divergence archives yet.')
                                    : (lang === 'CN' ? '还没有故事工作台档案。' : 'No story workspace archives yet.')}
                            </div>
                        ) : filteredProjects.map(project => {
                            const isActive = selectedProject?.id === project.id;
                            const promotionClass = getPromotionClass(project);
                            return (
                                <div
                                    key={project.id}
                                    className={`group flex items-stretch gap-2 border-b transition-all ${theme === 'retro' ? 'border-[#8B261D]/10 hover:bg-[#EBE5D5]' : 'border-zinc-900 hover:bg-zinc-900/60'} ${isActive ? 'bg-[var(--mist-archive-red-faint)] border-l-2 border-l-[var(--mist-archive-red)]' : 'border-l-2 border-l-transparent'}`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedProjectId(project.id);
                                            setSelectedRoot(selectedRoot);
                                        }}
                                        className="min-w-0 flex-1 text-left p-4"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className={`font-serif text-base font-bold leading-tight ${theme === 'retro' ? 'text-[#3E110D]' : 'text-white'}`}>{project.title}</h3>
                                            {selectedRoot === 'WORKSPACE' && (
                                                <span className={`shrink-0 text-[8px] font-mono border px-1.5 py-0.5 ${promotionClass}`}>{getPromotionLabel(project)}</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 mt-3 text-[9px] font-mono text-zinc-500">
                                            <Clock size={11} />
                                            <span>{formatDate(project.updatedAt, lang)}</span>
                                            <span className="border border-zinc-800 px-1.5 py-0.5">{getArchiveSourceLabel(project.archiveSource)}</span>
                                            {selectedRoot === 'DIVERGENCE' && (
                                                <span className="ml-auto">
                                                    {lang === 'CN'
                                                        ? `分歧 ${project.candidateCount || project.divergence?.treatments?.length || (project.divergence ? 1 : 0)}`
                                                        : `DIV ${project.candidateCount || project.divergence?.treatments?.length || (project.divergence ? 1 : 0)}`}
                                                </span>
                                            )}
                                            {selectedRoot === 'WORKSPACE' && (
                                                <span className="ml-auto">
                                                    {lang === 'CN'
                                                        ? `故事 ${project.bibleDrafts.length} · 脚本 ${project.metonymyScripts.length}`
                                                        : `STO ${project.bibleDrafts.length} / SCR ${project.metonymyScripts.length}`}
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteProject(project)}
                                        className="mr-3 my-3 h-9 w-9 shrink-0 self-center flex items-center justify-center border border-transparent text-zinc-600 opacity-70 transition-all hover:opacity-100 hover:text-[var(--mist-archive-red)] hover:border-[var(--mist-archive-red-soft)] hover:bg-[var(--mist-archive-red-faint)]"
                                        title={lang === 'CN' ? '删除这个工作档案' : 'Delete this work archive'}
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`p-4 border-t ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} flex items-center justify-between`}>
                        <button
                            type="button"
                            onClick={handleClearArchive}
                            disabled={activeProjectList.length === 0}
                            className="text-zinc-600 hover:text-[var(--mist-archive-red)] transition-colors p-2 disabled:opacity-30 disabled:cursor-not-allowed"
                            title={selectedRoot === 'DIVERGENCE'
                                ? (lang === 'CN' ? '清空全部分歧点档案' : 'Clear all divergence archives')
                                : (lang === 'CN' ? '清空全部故事工作台档案' : 'Clear all story workspace archives')}
                        >
                            <Trash2 size={16} />
                        </button>
                        <span className="text-[9px] font-mono text-zinc-600">
                            {selectedRoot === 'DIVERGENCE'
                                ? (lang === 'CN' ? `${divergenceProjects.length} 个分歧点` : `${divergenceProjects.length} Divergence`)
                                : (lang === 'CN' ? `${storyProjects.length} 个故事工作台` : `${storyProjects.length} Workspace`)}
                        </span>
                    </div>
                </aside>

                <main className="flex-1 flex flex-col min-w-0">
                    {selectedProject ? (
                        <>
                            <div className={`h-20 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#0b0b0b]'} pl-7 pr-5 flex items-center justify-between gap-6 shrink-0`}>
                                <div className="min-w-0">
                                    <div className="text-[9px] font-mono uppercase tracking-[0.24em] text-[var(--mist-archive-red)] mb-1">
                                        {selectedRoot === 'DIVERGENCE'
                                            ? (lang === 'CN' ? '分歧点档案' : 'Divergence Batch')
                                            : (lang === 'CN' ? '故事工作台' : 'Story Workspace')}
                                    </div>
                                    <h2 className={`font-serif text-2xl font-bold truncate ${theme === 'retro' ? 'text-[#3E110D]' : 'text-white'}`}>{selectedProject.title}</h2>
                                </div>
                                <div className="mist-history-action-row flex items-center gap-2">
                                    {selectedRoot === 'WORKSPACE' && (
                                        <span className={`h-10 px-4 border text-[10px] font-bold uppercase tracking-widest flex items-center ${getPromotionClass(selectedProject)}`}>
                                            {getPromotionLabel(selectedProject)}
                                        </span>
                                    )}
                                    {onSaveCurrent && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => handleSaveCurrent(false)}
                                                className="mist-history-action-button h-10 px-4 border text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"
                                            >
                                                <Save size={13} />
                                                {lang === 'CN' ? '保存' : 'Save'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleSaveCurrent(true)}
                                                className="mist-history-action-button h-10 px-4 border text-[10px] font-bold uppercase tracking-widest flex items-center justify-center"
                                            >
                                                {lang === 'CN' ? '另存为' : 'Save As'}
                                            </button>
                                        </>
                                    )}
                                    {notice && (
                                        <div className="h-10 px-4 border border-[var(--mist-archive-red-soft)] bg-[var(--mist-archive-red-faint)] text-[10px] font-bold uppercase tracking-widest text-[var(--mist-archive-red)] flex items-center gap-2">
                                            <CheckCircle2 size={14} />
                                            {notice}
                                        </div>
                                    )}
                                    <button
                                        type="button"
                                        disabled={!findSourceHistory(selectedProject, selectedArtifact)}
                                        onClick={handleRestore}
                                        className="mist-history-action-button mist-history-restore-button h-10 px-5 border text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        {lang === 'CN' ? '恢复工作台' : 'Restore'}
                                        <ArrowRight size={14} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="mist-history-action-button mist-history-close-button h-10 w-10 border flex items-center justify-center"
                                        aria-label={lang === 'CN' ? '关闭欲望存档' : 'Close desire archive'}
                                        title={lang === 'CN' ? '关闭欲望存档' : 'Close desire archive'}
                                    >
                                        <X size={22} strokeWidth={2.2} />
                                    </button>
                                </div>
                            </div>

                            <section className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-8">
                                {selectedRoot === 'DIVERGENCE' && selectedProject.divergence ? (
                                    <div>
                                        {renderParamsOverview(selectedProject)}
                                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                                            {(selectedProject.divergence.treatments || []).map((treatment, index) => (
                                                <article key={treatment.id || index} className="mist-archive-panel border p-5 min-h-[320px]">
                                                    <div className="flex items-center justify-between gap-3 mb-4">
                                                        <span className="text-[9px] font-mono text-[var(--mist-archive-red)] uppercase tracking-widest">
                                                            {lang === 'CN' ? `候选故事 ${index + 1}` : `Candidate ${index + 1}`}
                                                        </span>
                                                        <span className="text-[9px] text-zinc-600">{formatDate(selectedProject.divergence?.updatedAt || selectedProject.updatedAt, lang)}</span>
                                                    </div>
                                                    <h3 className="font-serif text-2xl text-white font-bold mb-3">{treatment.title}</h3>
                                                    {treatment.tagline && <p className="text-sm text-zinc-300 italic font-serif leading-7 mb-4">{treatment.tagline}</p>}
                                                    <div className="text-sm text-zinc-400 leading-8 whitespace-pre-wrap">
                                                        {[treatment.pitch, treatment.structure, treatment.visualAnchor].filter(Boolean).join('\n\n')}
                                                    </div>
                                                </article>
                                            ))}
                                            {(!selectedProject.divergence.treatments || selectedProject.divergence.treatments.length === 0) && (
                                                <article className="mist-archive-panel border p-6">
                                                    <div className="text-sm text-zinc-300 leading-8 whitespace-pre-wrap">
                                                        {selectedProject.divergence.content || selectedProject.divergence.summary || (lang === 'CN' ? '暂无分歧点内容。' : 'No divergence content.')}
                                                    </div>
                                                </article>
                                            )}
                                        </div>
                                    </div>
                                ) : activeArtifacts.length === 0 ? (
                                    <div className="h-full flex items-center justify-center text-zinc-600 text-xs text-center px-8">
                                        {lang === 'CN' ? '这一阶段还没有保存版本。' : 'No saved versions in this stage.'}
                                    </div>
                                ) : (
                                    <div>
                                        {renderParamsOverview(selectedProject)}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {activeArtifacts.map(artifact => (
                                                <button
                                                    key={artifact.id}
                                                    type="button"
                                                    onClick={() => setSelectedArtifactId(artifact.id)}
                                                    className={`mist-archive-button h-9 px-3 border text-[9px] font-bold uppercase tracking-widest ${selectedArtifact?.id === artifact.id ? 'is-active' : ''}`}
                                                >
                                                    {artifact.versionLabel || artifact.title}
                                                </button>
                                            ))}
                                            {selectedRoot === 'WORKSPACE' && (
                                                <button
                                                    type="button"
                                                    disabled={!selectedArtifact}
                                                    onClick={() => selectedArtifact && handlePromote(selectedArtifact)}
                                                    className="mist-archive-button h-9 px-3 border text-[9px] font-bold uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                                                >
                                                    <UploadCloud size={12} />
                                                    {lang === 'CN' ? '推送主体' : 'Promote'}
                                                </button>
                                            )}
                                        </div>
                                        {selectedArtifact && (
                                            <article>
                                                <div className="flex items-center gap-2 text-[var(--mist-archive-red)] mb-4">
                                                    {React.createElement(stageMeta[selectedArtifact.stage].icon, { size: 16 })}
                                                    <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                                                        {selectedArtifact.stage === 'METONYMY_SCRIPT'
                                                            ? (lang === 'CN' ? '换喻脚本' : 'Metonymy Script')
                                                            : (lang === 'CN' ? '叙事创作完整故事' : 'Full Narrative')}
                                                    </span>
                                                </div>
                                                <h1 className="font-serif text-4xl text-white font-bold mb-4">{selectedArtifact.title}</h1>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    <span className="text-[9px] font-mono border border-[var(--mist-archive-red-soft)] text-[var(--mist-archive-red)] px-2 py-1 uppercase">{selectedArtifact.status}</span>
                                                    <span className="text-[9px] font-mono border border-zinc-800 text-zinc-500 px-2 py-1 uppercase">{getArchiveSourceLabel(selectedArtifact.archiveSource || selectedProject?.archiveSource)}</span>
                                                    <span className="text-[9px] font-mono border border-zinc-800 text-zinc-500 px-2 py-1 uppercase">{formatDate(selectedArtifact.updatedAt, lang)}</span>
                                                    {selectedRoot === 'WORKSPACE' && (
                                                        <span className={`text-[9px] font-mono border px-2 py-1 uppercase ${getPromotionClass(selectedProject)}`}>{getPromotionLabel(selectedProject)}</span>
                                                    )}
                                                </div>
                                                <div className="mist-archive-panel border p-6">
                                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-4">
                                                        <FileText size={14} />
                                                        {selectedArtifact.stage === 'METONYMY_SCRIPT'
                                                            ? (lang === 'CN' ? '完整脚本' : 'Full screenplay')
                                                            : (lang === 'CN' ? '完整故事' : 'Full story')}
                                                    </div>
                                                    <div className="text-sm text-zinc-300 leading-8 whitespace-pre-wrap">
                                                        {getFullStoryText(selectedArtifact) || (lang === 'CN' ? '暂无正文。' : 'No body yet.')}
                                                    </div>
                                                </div>
                                            </article>
                                        )}
                                    </div>
                                )}
                            </section>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-zinc-600 text-xs">
                            {lang === 'CN' ? '暂无档案。' : 'No archive records.'}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};
