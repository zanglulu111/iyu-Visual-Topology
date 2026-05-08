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
    choosePrimaryArtifact,
    createSubjectDossierFromArtifact,
    mergeDesireProjects
} from '../services/desireArchiveService';

type ArchiveRoot = 'DIVERGENCE' | 'STORIES' | 'SUBJECTS';
type StageFilter = DesireArchiveStage | 'SUBJECT_DOSSIERS';

interface HistoryModalProps {
    history: HistoryItem[];
    onRestore: (item: HistoryItem) => void;
    onClose: () => void;
    lang?: BlueprintLanguage;
}

const stageMeta: Record<StageFilter, { cn: string; en: string; short: string; icon: React.ElementType }> = {
    DIVERGENCE_SET: { cn: '分歧点故事大纲', en: 'Divergence Outlines', short: 'DIV', icon: GitFork },
    CREATIVE_BIBLE: { cn: '创意圣经版本', en: 'Creative Bible Drafts', short: 'BIB', icon: BookOpen },
    METONYMY_SCRIPT: { cn: '换喻电影脚本', en: 'Metonymy Screenplays', short: 'SCR', icon: Wand2 },
    SUBJECT_DOSSIERS: { cn: '主体档案推送', en: 'Subject Dossiers', short: 'SUB', icon: Database }
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
        if (project.divergence.treatments?.length) {
            return project.divergence.treatments.map((treatment, index) => ({
                ...project.divergence!,
                id: `${project.divergence!.id}-${treatment.id || index}`,
                title: treatment.title || `${index + 1}`,
                sourceTreatmentId: treatment.id,
                versionLabel: `Candidate ${index + 1}`,
                summary: treatment.tagline || treatment.pitch,
                content: [
                    treatment.tagline,
                    treatment.pitch,
                    treatment.structure,
                    treatment.visualAnchor
                ].filter(Boolean).join('\n\n'),
                treatments: [treatment]
            }));
        }
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

export const HistoryModal: React.FC<HistoryModalProps> = ({ history, onRestore, onClose, lang = 'CN' }) => {
    const { theme } = useTheme();
    const [persistedProjects, setPersistedProjects] = useState<DesireProject[]>([]);
    const [subjectDossiers, setSubjectDossiers] = useState<SubjectDossier[]>([]);
    const [selectedRoot, setSelectedRoot] = useState<ArchiveRoot>('DIVERGENCE');
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [selectedSubjectDossierId, setSelectedSubjectDossierId] = useState<string | null>(null);
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

    const visibleHistory = history;

    const projects = useMemo(() => {
        return mergeDesireProjects(persistedProjects, visibleHistory).filter(project => !deletedProjectIds.has(project.id));
    }, [deletedProjectIds, persistedProjects, visibleHistory]);

    const divergenceProjects = useMemo(() => {
        return projects.filter(project => project.archiveKind === 'DIVERGENCE_BATCH' || (!!project.divergence && project.bibleDrafts.length === 0 && project.metonymyScripts.length === 0));
    }, [projects]);

    const storyProjects = useMemo(() => {
        return projects.filter(project => project.archiveKind === 'STORY_PROJECT' || project.bibleDrafts.length > 0 || project.metonymyScripts.length > 0 || !!project.originalStory);
    }, [projects]);

    const activeProjectList = selectedRoot === 'DIVERGENCE'
        ? divergenceProjects
        : selectedRoot === 'STORIES'
            ? storyProjects
            : [];

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
    const selectedSubjectDossier = subjectDossiers.find(dossier => dossier.id === selectedSubjectDossierId) || subjectDossiers[0] || null;
    const activeArtifacts = getArtifactsForStage(selectedProject, activeStage);
    const selectedArtifact = activeStage === 'SUBJECT_DOSSIERS'
        ? choosePrimaryArtifact(selectedProject || null)
        : activeArtifacts.find(artifact => artifact.id === selectedArtifactId) || activeArtifacts[0] || null;
    const projectDossiers = selectedProject
        ? subjectDossiers.filter(dossier => dossier.sourceProjectId === selectedProject.id || selectedProject.subjectDossierIds.includes(dossier.id))
        : [];

    useEffect(() => {
        const nextArtifacts = getArtifactsForStage(selectedProject, activeStage);
        setSelectedArtifactId(nextArtifacts[0]?.id || null);
    }, [selectedProjectId, activeStage]);

    useEffect(() => {
        setSelectedProjectId(null);
        setSelectedArtifactId(null);
        setActiveStage(selectedRoot === 'DIVERGENCE' ? 'DIVERGENCE_SET' : 'CREATIVE_BIBLE');
    }, [selectedRoot]);

    useEffect(() => {
        if (selectedRoot === 'SUBJECTS' && !selectedSubjectDossierId && subjectDossiers.length > 0) {
            setSelectedSubjectDossierId(subjectDossiers[0].id);
        }
    }, [selectedRoot, selectedSubjectDossierId, subjectDossiers]);

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

            if (selectedArtifact?.stage === 'DIVERGENCE_SET') {
                onRestore({
                    ...hydrated,
                    type: 'NARRATIVE',
                    blueprint: null,
                    treatments: selectedArtifact.treatments || hydrated.treatments || []
                });
                return;
            }

            if (selectedArtifact?.stage === 'CREATIVE_BIBLE') {
                const blueprint = selectedArtifact.blueprint || hydrated.blueprint;
                onRestore({
                    ...hydrated,
                    type: 'BIBLE',
                    blueprint,
                    savedBlueprints: blueprint
                        ? { ...(hydrated.savedBlueprints || {}), [blueprint.treatmentId]: blueprint }
                        : hydrated.savedBlueprints
                });
                return;
            }

            if (selectedArtifact?.stage === 'METONYMY_SCRIPT') {
                onRestore({
                    ...hydrated,
                    type: 'METONYMY',
                    blueprint: selectedArtifact.blueprint || hydrated.blueprint
                });
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
        if (selectedRoot === 'SUBJECTS') {
            const ok = window.confirm(
                lang === 'CN'
                    ? `确认删除全部 ${subjectDossiers.length} 个主体档案？此操作不可撤销。`
                    : `Delete all ${subjectDossiers.length} subject dossiers? This cannot be undone.`
            );
            if (!ok) return;
            await Promise.all(subjectDossiers.map(dossier => persistence.deleteSubjectDossier(dossier.id)));
            setSubjectDossiers([]);
            setNotice(lang === 'CN' ? '主体档案已清空' : 'Subject dossiers cleared');
            setTimeout(() => setNotice(null), 1800);
            return;
        }

        const targetProjects = activeProjectList;
        const targetLabel = selectedRoot === 'DIVERGENCE'
            ? (lang === 'CN' ? '分歧点档案' : 'divergence archives')
            : (lang === 'CN' ? '故事工程档案' : 'story project archives');

        const ok = window.confirm(
            lang === 'CN'
                ? `确认删除全部 ${targetProjects.length} 个${targetLabel}？此操作不会删除另一栏档案。`
                : `Delete all ${targetProjects.length} ${targetLabel}? This will not delete the other archive tab.`
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

    const renderStageButton = (stage: StageFilter, count: number) => {
        const Icon = stageMeta[stage].icon;
        const isActive = activeStage === stage;
        return (
            <button
                key={stage}
                type="button"
                onClick={() => setActiveStage(stage)}
                className={`mist-archive-button h-12 px-4 flex items-center gap-3 border text-left transition-all ${isActive ? 'is-active' : ''}`}
            >
                <Icon size={15} />
                <span className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase truncate">
                        {lang === 'CN' ? stageMeta[stage].cn : stageMeta[stage].en}
                    </span>
                    <span className="text-[9px] text-zinc-500 font-mono">{stageMeta[stage].short} / {count}</span>
                </span>
            </button>
        );
    };

    return (
        <div className="mist-archive-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300">
            <div className={`mist-history-modal mist-archive-modal w-full h-full max-w-[1680px] max-h-[92vh] ${theme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]'} border ${theme === 'retro' ? 'border-[#8B261D]' : 'border-zinc-800'} rounded-sm shadow-2xl flex overflow-hidden relative`}>
                <aside className={`w-[370px] border-r ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#070707]'} flex flex-col shrink-0`}>
                    <div className={`p-5 border-b ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}`}>
                        <div className="flex items-start justify-between gap-4 mb-5">
                            <div>
                                <div className="flex items-center gap-2 text-[var(--mist-archive-red)] mb-2">
                                    <HistoryIcon size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.22em]">Desire Work Archive</span>
                                </div>
                                <h2 className={`font-serif text-2xl font-bold ${theme === 'retro' ? 'text-[#3E110D]' : 'text-white'}`}>
                                    {lang === 'CN' ? '欲望工作档案' : 'Desire Archive'}
                                </h2>
                                <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed">
                                    {lang === 'CN' ? '保存分歧点、圣经版本、换喻脚本，并择优推送主体档案。' : 'Divergence, bible drafts, screenplay versions, and subject promotions.'}
                                </p>
                            </div>
                            <button onClick={onClose} className="mist-archive-button h-9 w-9 flex items-center justify-center border">
                                <X size={16} />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <button
                                type="button"
                                onClick={() => setSelectedRoot('DIVERGENCE')}
                                className={`mist-archive-button h-9 border text-[10px] font-bold uppercase tracking-widest ${selectedRoot === 'DIVERGENCE' ? 'is-active' : ''}`}
                            >
                                {lang === 'CN' ? '分歧点' : 'Divergence'} / {divergenceProjects.length}
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedRoot('STORIES')}
                                className={`mist-archive-button h-9 border text-[10px] font-bold uppercase tracking-widest ${selectedRoot === 'STORIES' ? 'is-active' : ''}`}
                            >
                                {lang === 'CN' ? '故事工程' : 'Stories'} / {storyProjects.length}
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedRoot('SUBJECTS')}
                                className={`mist-archive-button h-9 border text-[10px] font-bold uppercase tracking-widest ${selectedRoot === 'SUBJECTS' ? 'is-active' : ''}`}
                            >
                                {lang === 'CN' ? '主体档案' : 'Subjects'} / {subjectDossiers.length}
                            </button>
                        </div>

                        {selectedRoot !== 'SUBJECTS' && (
                            <label className={`h-10 flex items-center gap-2 px-3 border ${theme === 'retro' ? 'border-[#8B261D]/20 bg-white/50' : 'border-zinc-800 bg-black/40'}`}>
                                <Search size={14} className="text-zinc-500" />
                                <input
                                    value={query}
                                    onChange={event => setQuery(event.target.value)}
                                    placeholder={selectedRoot === 'DIVERGENCE'
                                        ? (lang === 'CN' ? '检索分歧点 / 候选故事' : 'Search divergence / candidate')
                                        : (lang === 'CN' ? '检索故事工程 / 圣经 / 脚本' : 'Search story / bible / script')}
                                    className="bg-transparent outline-none text-xs flex-1 text-zinc-200 placeholder:text-zinc-600"
                                />
                            </label>
                        )}
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {selectedRoot !== 'SUBJECTS' ? (
                            filteredProjects.length === 0 ? (
                                <div className="p-8 text-center text-zinc-600 text-xs">
                                    {selectedRoot === 'DIVERGENCE'
                                        ? (lang === 'CN' ? '还没有分歧点档案。' : 'No divergence archives yet.')
                                        : (lang === 'CN' ? '还没有故事工程档案。' : 'No story project archives yet.')}
                                </div>
                            ) : filteredProjects.map(project => {
                                const isActive = selectedProject?.id === project.id;
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
                                                <span className="shrink-0 text-[8px] font-mono text-[var(--mist-archive-red)] border border-[var(--mist-archive-red-soft)] px-1.5 py-0.5">{project.engineName}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mt-3 text-[9px] font-mono text-zinc-500">
                                                <Clock size={11} />
                                                <span>{formatDate(project.updatedAt, lang)}</span>
                                                <span className="ml-auto">DIV {project.candidateCount || (project.divergence ? 1 : 0)}</span>
                                                <span>BIB {project.bibleDrafts.length}</span>
                                                <span>SCR {project.metonymyScripts.length}</span>
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
                            })
                        ) : (
                            subjectDossiers.length === 0 ? (
                                <div className="p-8 text-center text-zinc-600 text-xs">
                                    {lang === 'CN' ? '还没有推送到主体档案的作品。' : 'No promoted subject dossiers yet.'}
                                </div>
                            ) : subjectDossiers.map(dossier => (
                                <div
                                    key={dossier.id}
                                    className={`group flex items-stretch gap-2 border-b transition-all ${theme === 'retro' ? 'border-[#8B261D]/10 hover:bg-[#EBE5D5]' : 'border-zinc-900 hover:bg-zinc-900/60'} ${selectedSubjectDossier?.id === dossier.id ? 'bg-[var(--mist-archive-red-faint)] border-l-2 border-l-[var(--mist-archive-red)]' : 'border-l-2 border-l-transparent'}`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedSubjectDossierId(dossier.id);
                                        }}
                                        className="min-w-0 flex-1 text-left p-4"
                                    >
                                        <div className="flex items-center gap-2 text-[var(--mist-archive-red)] mb-2">
                                            <Database size={13} />
                                            <span className="text-[9px] font-bold uppercase tracking-widest">{dossier.status}</span>
                                        </div>
                                        <h3 className={`font-serif text-base font-bold ${theme === 'retro' ? 'text-[#3E110D]' : 'text-white'}`}>{dossier.title}</h3>
                                        <p className="text-[10px] text-zinc-500 mt-2 line-clamp-2">{dossier.summary}</p>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteSubjectDossier(dossier)}
                                        className="mr-3 my-3 h-9 w-9 shrink-0 self-center flex items-center justify-center border border-transparent text-zinc-600 opacity-70 transition-all hover:opacity-100 hover:text-[var(--mist-archive-red)] hover:border-[var(--mist-archive-red-soft)] hover:bg-[var(--mist-archive-red-faint)]"
                                        title={lang === 'CN' ? '删除这个主体档案' : 'Delete this subject dossier'}
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className={`p-4 border-t ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} flex items-center justify-between`}>
                        <button
                            type="button"
                            onClick={handleClearArchive}
                            disabled={selectedRoot === 'SUBJECTS' ? subjectDossiers.length === 0 : activeProjectList.length === 0}
                            className="text-zinc-600 hover:text-[var(--mist-archive-red)] transition-colors p-2 disabled:opacity-30 disabled:cursor-not-allowed"
                            title={selectedRoot === 'SUBJECTS'
                                ? (lang === 'CN' ? '清空全部主体档案' : 'Clear all subject dossiers')
                                : selectedRoot === 'DIVERGENCE'
                                    ? (lang === 'CN' ? '清空全部分歧点档案' : 'Clear all divergence archives')
                                    : (lang === 'CN' ? '清空全部故事工程档案' : 'Clear all story project archives')}
                        >
                            <Trash2 size={16} />
                        </button>
                        <span className="text-[9px] font-mono text-zinc-600">
                            {selectedRoot === 'SUBJECTS'
                                ? `${subjectDossiers.length} SUBJECTS`
                                : selectedRoot === 'DIVERGENCE'
                                    ? `${divergenceProjects.length} DIVERGENCE`
                                    : `${storyProjects.length} STORIES`}
                        </span>
                    </div>
                </aside>

                <main className="flex-1 flex flex-col min-w-0">
                    {selectedRoot === 'SUBJECTS' ? (
                        selectedSubjectDossier ? (
                            <>
                                <div className={`h-20 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#0b0b0b]'} px-7 flex items-center justify-between gap-6 shrink-0`}>
                                    <div className="min-w-0">
                                        <div className="text-[9px] font-mono uppercase tracking-[0.24em] text-[var(--mist-archive-red)] mb-1">
                                            {lang === 'CN' ? '主体档案 / Published Subject Dossier' : 'Published Subject Dossier'}
                                        </div>
                                        <h2 className={`font-serif text-2xl font-bold truncate ${theme === 'retro' ? 'text-[#3E110D]' : 'text-white'}`}>{selectedSubjectDossier.title}</h2>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {selectedSubjectDossier.sourceProjectId && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setSelectedRoot('STORIES');
                                                    setSelectedProjectId(selectedSubjectDossier.sourceProjectId || null);
                                                    setActiveStage('SUBJECT_DOSSIERS');
                                                }}
                                                className="mist-app-primary-action h-10 px-5 rounded-sm bg-white text-black hover:bg-zinc-200 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"
                                            >
                                                {lang === 'CN' ? '查看来源工程' : 'Source Project'}
                                                <ArrowRight size={14} />
                                            </button>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteSubjectDossier(selectedSubjectDossier)}
                                            className="h-10 w-10 flex items-center justify-center border border-zinc-800 text-zinc-600 transition-all hover:text-[var(--mist-archive-red)] hover:border-[var(--mist-archive-red-soft)] hover:bg-[var(--mist-archive-red-faint)]"
                                            title={lang === 'CN' ? '删除这个主体档案' : 'Delete this subject dossier'}
                                        >
                                            <Trash2 size={15} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                                    <div className="grid grid-cols-4 gap-3 mb-6">
                                        <div className="mist-archive-panel border p-4">
                                            <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2">Story</div>
                                            <div className="text-2xl font-serif text-white">{selectedSubjectDossier.story.content ? 'OK' : 'EMPTY'}</div>
                                        </div>
                                        <div className="mist-archive-panel border p-4">
                                            <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2">Analysis</div>
                                            <div className="text-2xl font-serif text-white">{selectedSubjectDossier.psychoanalysis.content ? 'OK' : 'EMPTY'}</div>
                                        </div>
                                        <div className="mist-archive-panel border p-4">
                                            <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2">Assets</div>
                                            <div className="text-2xl font-serif text-white">
                                                {(selectedSubjectDossier.assets?.characters?.length || 0) + (selectedSubjectDossier.assets?.props?.length || 0) + (selectedSubjectDossier.assets?.scenes?.length || 0)}
                                            </div>
                                        </div>
                                        <div className="mist-archive-panel border p-4">
                                            <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2">Script</div>
                                            <div className="text-2xl font-serif text-white">{selectedSubjectDossier.screenplay.content ? 'OK' : 'EMPTY'}</div>
                                        </div>
                                    </div>

                                    <div className="mist-archive-panel border p-6 mb-5">
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-4">
                                            <Database size={14} />
                                            {lang === 'CN' ? '主体摘要' : 'Subject summary'}
                                        </div>
                                        <p className="text-sm text-zinc-300 leading-8 whitespace-pre-wrap">{selectedSubjectDossier.summary || (lang === 'CN' ? '暂无摘要。' : 'No summary yet.')}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-5">
                                        <article className="mist-archive-panel border p-6">
                                            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--mist-archive-red)] mb-4">{lang === 'CN' ? '完整故事' : 'Full story'}</div>
                                            <div className="text-sm text-zinc-300 leading-8 whitespace-pre-wrap max-h-[360px] overflow-y-auto custom-scrollbar">
                                                {(selectedSubjectDossier.story.content || '').slice(0, 5000) || (lang === 'CN' ? '暂无正文。' : 'No story yet.')}
                                            </div>
                                        </article>
                                        <article className="mist-archive-panel border p-6">
                                            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--mist-archive-red)] mb-4">{lang === 'CN' ? '完整电影脚本' : 'Full screenplay'}</div>
                                            <div className="text-sm text-zinc-300 leading-8 whitespace-pre-wrap max-h-[360px] overflow-y-auto custom-scrollbar">
                                                {(selectedSubjectDossier.screenplay.content || '').slice(0, 5000) || (lang === 'CN' ? '暂无脚本。' : 'No screenplay yet.')}
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex items-center justify-center text-zinc-600 text-xs">
                                {lang === 'CN' ? '暂无主体档案。' : 'No subject dossiers.'}
                            </div>
                        )
                    ) : selectedProject ? (
                        <>
                            <div className={`h-20 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#0b0b0b]'} px-7 flex items-center justify-between gap-6 shrink-0`}>
                                <div className="min-w-0">
                                    <div className="text-[9px] font-mono uppercase tracking-[0.24em] text-[var(--mist-archive-red)] mb-1">
                                        {selectedRoot === 'DIVERGENCE'
                                            ? (lang === 'CN' ? '分歧点档案 / Divergence Batch' : 'Divergence Batch')
                                            : (selectedProject.sourceType === 'CUSTOM_STORY'
                                                ? (lang === 'CN' ? '自定义故事转译 / Custom Story' : 'Custom Story Translation')
                                                : (lang === 'CN' ? '故事工程 / Story Project' : 'Story Project'))}
                                    </div>
                                    <h2 className={`font-serif text-2xl font-bold truncate ${theme === 'retro' ? 'text-[#3E110D]' : 'text-white'}`}>{selectedProject.title}</h2>
                                </div>
                                <div className="flex items-center gap-2">
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
                                        className="mist-app-primary-action h-10 px-5 rounded-sm bg-white text-black hover:bg-zinc-200 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        {lang === 'CN' ? '恢复工作台' : 'Restore'}
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>

                            <div className={`p-6 border-b border-zinc-900 grid ${selectedRoot === 'DIVERGENCE' ? 'grid-cols-1' : 'grid-cols-3'} gap-3 shrink-0`}>
                                {selectedRoot === 'DIVERGENCE' ? (
                                    renderStageButton('DIVERGENCE_SET', selectedProject.candidateCount || selectedProject.divergence?.treatments?.length || (selectedProject.divergence ? 1 : 0))
                                ) : (
                                    <>
                                        {renderStageButton('CREATIVE_BIBLE', selectedProject.bibleDrafts.length)}
                                        {renderStageButton('METONYMY_SCRIPT', selectedProject.metonymyScripts.length)}
                                        {renderStageButton('SUBJECT_DOSSIERS', projectDossiers.length)}
                                    </>
                                )}
                            </div>

                            <div className="flex-1 min-h-0 grid grid-cols-[minmax(280px,0.85fr)_minmax(0,1.45fr)]">
                                <section className="border-r border-zinc-900 overflow-y-auto custom-scrollbar p-5">
                                    {activeStage === 'SUBJECT_DOSSIERS' ? (
                                        projectDossiers.length === 0 ? (
                                            <div className="h-full flex items-center justify-center text-zinc-600 text-xs text-center px-8">
                                                {lang === 'CN' ? '这个项目还没有推送出的主体档案。' : 'No subject dossier promoted from this project yet.'}
                                            </div>
                                        ) : projectDossiers.map(dossier => (
                                            <article key={dossier.id} className="mist-archive-panel p-4 mb-3 border">
                                                <div className="flex items-center justify-between gap-3 mb-2">
                                                    <div className="flex items-center gap-2 text-[var(--mist-archive-red)]">
                                                        <Database size={14} />
                                                        <span className="text-[9px] font-bold uppercase tracking-widest">{dossier.status}</span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDeleteSubjectDossier(dossier)}
                                                        className="h-7 w-7 flex items-center justify-center text-zinc-600 transition-colors hover:text-[var(--mist-archive-red)]"
                                                        title={lang === 'CN' ? '删除这个主体档案' : 'Delete this subject dossier'}
                                                    >
                                                        <Trash2 size={13} />
                                                    </button>
                                                </div>
                                                <h3 className="font-serif text-lg text-white font-bold mb-2">{dossier.title}</h3>
                                                <p className="text-xs text-zinc-500 leading-relaxed">{dossier.summary}</p>
                                            </article>
                                        ))
                                    ) : activeArtifacts.length === 0 ? (
                                        <div className="h-full flex items-center justify-center text-zinc-600 text-xs text-center px-8">
                                            {lang === 'CN' ? '这一阶段还没有保存版本。' : 'No saved versions in this stage.'}
                                        </div>
                                    ) : activeArtifacts.map(artifact => {
                                        const isActive = selectedArtifact?.id === artifact.id;
                                        const canPromote = artifact.stage !== 'DIVERGENCE_SET';
                                        return (
                                            <article key={artifact.id} className={`mist-archive-panel p-4 mb-3 border transition-all ${isActive ? 'border-[var(--mist-archive-red-soft)] bg-[var(--mist-archive-red-faint)]' : ''}`}>
                                                <button type="button" onClick={() => setSelectedArtifactId(artifact.id)} className="w-full text-left">
                                                    <div className="flex items-center justify-between gap-3 mb-2">
                                                        <span className="text-[9px] font-mono text-[var(--mist-archive-red)] uppercase tracking-widest">{stageMeta[artifact.stage].short} / {artifact.status}</span>
                                                        <span className="text-[9px] text-zinc-600">{formatDate(artifact.updatedAt, lang)}</span>
                                                    </div>
                                                    <h3 className="font-serif text-lg text-white font-bold mb-2">{artifact.title}</h3>
                                                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">{artifact.summary || artifact.content || 'No preview'}</p>
                                                </button>
                                                <div className="flex items-center gap-2 mt-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedArtifactId(artifact.id)}
                                                        className="mist-archive-button h-8 px-3 border text-[9px] font-bold uppercase tracking-widest"
                                                    >
                                                        {lang === 'CN' ? '检视' : 'Inspect'}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        disabled={!canPromote}
                                                        onClick={() => handlePromote(artifact)}
                                                        className="mist-archive-button h-8 px-3 border text-[9px] font-bold uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                                                    >
                                                        <UploadCloud size={12} />
                                                        {lang === 'CN' ? '推送主体' : 'Promote'}
                                                    </button>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </section>

                                <section className="overflow-y-auto custom-scrollbar p-8">
                                    {activeStage === 'SUBJECT_DOSSIERS' ? (
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-[var(--mist-archive-red)]">
                                                <Database size={16} />
                                                <span className="text-[10px] font-bold uppercase tracking-[0.22em]">{lang === 'CN' ? '主体档案快照' : 'Subject snapshots'}</span>
                                            </div>
                                            {projectDossiers.map(dossier => (
                                                <article key={dossier.id} className="mist-archive-panel border p-6">
                                                    <div className="flex items-start justify-between gap-4 mb-3">
                                                        <h3 className="font-serif text-2xl text-white font-bold">{dossier.title}</h3>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDeleteSubjectDossier(dossier)}
                                                            className="h-8 w-8 shrink-0 flex items-center justify-center border border-zinc-800 text-zinc-600 transition-all hover:text-[var(--mist-archive-red)] hover:border-[var(--mist-archive-red-soft)] hover:bg-[var(--mist-archive-red-faint)]"
                                                            title={lang === 'CN' ? '删除这个主体档案' : 'Delete this subject dossier'}
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-4 gap-2 text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-5">
                                                        <span>Story {dossier.story.content ? 'OK' : 'EMPTY'}</span>
                                                        <span>Analysis {dossier.psychoanalysis.content ? 'OK' : 'EMPTY'}</span>
                                                        <span>Assets {(dossier.assets?.characters?.length || 0) + (dossier.assets?.props?.length || 0) + (dossier.assets?.scenes?.length || 0)}</span>
                                                        <span>Script {dossier.screenplay.content ? 'OK' : 'EMPTY'}</span>
                                                    </div>
                                                    <p className="text-sm text-zinc-400 leading-relaxed">{dossier.summary}</p>
                                                </article>
                                            ))}
                                        </div>
                                    ) : selectedArtifact ? (
                                        <article>
                                            <div className="flex items-center gap-2 text-[var(--mist-archive-red)] mb-4">
                                                {React.createElement(stageMeta[selectedArtifact.stage].icon, { size: 16 })}
                                                <span className="text-[10px] font-bold uppercase tracking-[0.22em]">{lang === 'CN' ? stageMeta[selectedArtifact.stage].cn : stageMeta[selectedArtifact.stage].en}</span>
                                            </div>
                                            <h1 className="font-serif text-4xl text-white font-bold mb-4">{selectedArtifact.title}</h1>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                <span className="text-[9px] font-mono border border-[var(--mist-archive-red-soft)] text-[var(--mist-archive-red)] px-2 py-1 uppercase">{selectedArtifact.status}</span>
                                                <span className="text-[9px] font-mono border border-zinc-800 text-zinc-500 px-2 py-1 uppercase">{selectedArtifact.versionLabel || selectedArtifact.id}</span>
                                                <span className="text-[9px] font-mono border border-zinc-800 text-zinc-500 px-2 py-1 uppercase">{formatDate(selectedArtifact.updatedAt, lang)}</span>
                                            </div>
                                            <div className="mist-archive-panel border p-6 mb-5">
                                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-4">
                                                    <FileText size={14} />
                                                    {lang === 'CN' ? '内容预览' : 'Content preview'}
                                                </div>
                                                <div className="text-sm text-zinc-300 leading-8 whitespace-pre-wrap">
                                                    {(selectedArtifact.content || selectedArtifact.summary || '').slice(0, 5000) || (lang === 'CN' ? '暂无正文。' : 'No body yet.')}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="mist-archive-panel border p-4">
                                                    <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2">Characters</div>
                                                    <div className="text-2xl font-serif text-white">{selectedArtifact.assets?.characters.length || 0}</div>
                                                </div>
                                                <div className="mist-archive-panel border p-4">
                                                    <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2">Props</div>
                                                    <div className="text-2xl font-serif text-white">{selectedArtifact.assets?.props.length || 0}</div>
                                                </div>
                                                <div className="mist-archive-panel border p-4">
                                                    <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2">Scenes</div>
                                                    <div className="text-2xl font-serif text-white">{selectedArtifact.assets?.scenes.length || 0}</div>
                                                </div>
                                            </div>
                                        </article>
                                    ) : (
                                        <div className="h-full flex items-center justify-center text-zinc-600 text-xs">
                                            {lang === 'CN' ? '请选择一个阶段版本。' : 'Select a stage version.'}
                                        </div>
                                    )}
                                </section>
                            </div>
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
