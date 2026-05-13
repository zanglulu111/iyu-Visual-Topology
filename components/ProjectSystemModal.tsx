import React, { useMemo, useState } from 'react';
import { Check, FolderOpen, Plus, Save, Trash2, X } from 'lucide-react';
import { MistProject } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectSystemModalProps {
  projects: MistProject[];
  activeProjectId: string | null;
  lang: 'CN' | 'EN';
  onClose: () => void;
  onCreateProject: (title?: string) => void;
  onSaveProject: () => void;
  onRestoreProject: (project: MistProject) => void;
  onDeleteProject: (projectId: string) => void;
}

const formatProjectDate = (value?: string, lang: 'CN' | 'EN' = 'CN') => {
  if (!value) return lang === 'CN' ? '未保存' : 'Unsaved';
  return new Date(value).toLocaleString(lang === 'CN' ? 'zh-CN' : 'en-US', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const ProjectSystemModal: React.FC<ProjectSystemModalProps> = ({
  projects,
  activeProjectId,
  lang,
  onClose,
  onCreateProject,
  onSaveProject,
  onRestoreProject,
  onDeleteProject
}) => {
  const { theme } = useTheme();
  const [draftTitle, setDraftTitle] = useState('');

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }, [projects]);

  const handleCreate = () => {
    onCreateProject(draftTitle.trim() || undefined);
    setDraftTitle('');
  };

  return (
    <div className="mist-archive-overlay fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="mist-archive-modal w-[min(920px,calc(100vw-32px))] max-h-[82vh] overflow-hidden border border-[var(--border-main)] bg-[var(--bg-panel)] shadow-[0_24px_80px_rgba(0,0,0,0.55)] flex flex-col">
        <div className="h-14 px-5 border-b border-[var(--border-main)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FolderOpen size={17} className="text-[var(--text-header)]" />
            <div>
              <h2 className="text-sm font-serif font-bold tracking-[0.16em] uppercase text-[var(--text-header)]">
                {lang === 'CN' ? '项目系统' : 'PROJECTS'}
              </h2>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.14em]">
                {lang === 'CN' ? '项目管理当前工作台，档案保存版本证据' : 'Projects hold the workspace; archives hold versions'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--mist-active-accent)] transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] min-h-0 flex-1">
          <div className="border-r border-[var(--border-main)] p-4 space-y-3 bg-black/10">
            <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {lang === 'CN' ? '新建项目' : 'New project'}
            </label>
            <input
              value={draftTitle}
              onChange={(event) => setDraftTitle(event.target.value)}
              placeholder={lang === 'CN' ? '项目名称，可留空' : 'Project name, optional'}
              className="w-full h-10 bg-transparent border border-[var(--border-main)] px-3 text-xs text-[var(--text-header)] outline-none focus:border-[var(--border-strong)]"
            />
            <button
              onClick={handleCreate}
              className="w-full h-10 flex items-center justify-center gap-2 border border-[var(--border-main)] text-[var(--text-header)] hover:bg-[var(--surface-hover)] text-[11px] font-bold uppercase tracking-[0.14em] transition-colors"
            >
              <Plus size={14} />
              {lang === 'CN' ? '新建并切换' : 'Create and switch'}
            </button>
            <button
              onClick={onSaveProject}
              className={`w-full h-10 flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.14em] transition-all ${
                theme === 'retro'
                  ? 'bg-[var(--mist-active-accent)] text-[#fffaf2] hover:bg-[#6D1E16]'
                  : 'bg-[var(--text-header)] text-[var(--bg-main)] hover:opacity-90'
              }`}
            >
              <Save size={14} />
              {lang === 'CN' ? '保存当前项目' : 'Save current project'}
            </button>
          </div>

          <div className="min-h-0 overflow-y-auto p-4">
            {sortedProjects.length === 0 ? (
              <div className="h-56 flex items-center justify-center text-center text-[var(--text-muted)] text-xs">
                {lang === 'CN' ? '还没有项目。先新建一个项目。' : 'No projects yet. Create one first.'}
              </div>
            ) : (
              <div className="space-y-2">
                {sortedProjects.map(project => {
                  const active = project.id === activeProjectId;
                  return (
                    <div
                      key={project.id}
                      className={`border px-4 py-3 flex items-center gap-3 transition-colors ${
                        active
                          ? 'border-[var(--border-strong)] bg-[var(--surface-hover)]'
                          : 'border-[var(--border-main)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <button onClick={() => onRestoreProject(project)} className="flex-1 min-w-0 text-left">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-serif font-bold text-[var(--text-header)] truncate">{project.title}</h3>
                          {active && (
                            <span className="shrink-0 inline-flex items-center gap-1 border border-[var(--border-main)] px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em] text-[var(--text-header)]">
                              <Check size={10} />
                              {lang === 'CN' ? '当前' : 'Active'}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                          {lang === 'CN' ? '更新' : 'Updated'} {formatProjectDate(project.updatedAt, lang)}
                          <span className="mx-2">/</span>
                          {lang === 'CN' ? '保存' : 'Saved'} {formatProjectDate(project.lastSavedAt, lang)}
                        </p>
                      </button>
                      <button
                        onClick={() => onDeleteProject(project.id)}
                        className="w-8 h-8 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--mist-active-accent)] transition-colors"
                        title={lang === 'CN' ? '删除项目' : 'Delete project'}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
