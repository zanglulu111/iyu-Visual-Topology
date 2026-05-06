import React, { useEffect, useState } from 'react';
import { globalTaskManager, GenerationTask } from '../services/taskManager';
import { Activity, X, PlayCircle, CheckCircle2, XCircle, AlertCircle, Clock, Square } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { DriverType } from '../types';

interface TaskManagerPanelProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    driverType?: DriverType | null;
}

export const TaskManagerPanel: React.FC<TaskManagerPanelProps> = ({ isOpen, onClose, lang, driverType }) => {
    const { theme } = useTheme();
    const [tasks, setTasks] = useState<GenerationTask[]>([]);
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        if (!isOpen) return;
        const unsubscribe = globalTaskManager.subscribe(setTasks);
        return () => unsubscribe();
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const timer = setInterval(() => setCurrentTime(Date.now()), 1000);
        return () => clearInterval(timer);
    }, [isOpen]);

    // No early return so CSS animations can play out

    const formatDuration = (start: number, end?: number) => {
        const totalSeconds = Math.floor(((end || currentTime) - start) / 1000);
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const getModeAccent = () => {
        if (theme === 'retro') return { text: 'text-[#8B261D]', bg: 'bg-[#8B261D]', border: 'border-[#8B261D]', shadow: 'shadow-none' };
        if (driverType === DriverType.COMMERCIAL) return { text: 'text-mist-cyan', bg: 'bg-mist-cyan', border: 'border-mist-cyan', shadow: 'shadow-[0_0_24px_rgba(120,200,207,0.12)]' };
        return { text: 'text-[var(--mist-archive-red)]', bg: 'bg-[var(--mist-archive-red)]', border: 'border-[var(--mist-archive-red)]', shadow: 'shadow-[0_0_24px_rgba(255,98,86,0.12)]' };
    };

    const modeAccent = getModeAccent();

    const getStatusIcon = (status: string) => {
        if (theme === 'retro') {
            switch (status) {
                case 'generating': return <PlayCircle size={16} className="text-[#8B261D] animate-pulse" />;
                case 'completed': return <CheckCircle2 size={16} className="text-[#8B261D]" />;
                case 'failed': return <XCircle size={16} className="text-[#8B261D] opacity-60" />;
                case 'aborted': return <AlertCircle size={16} className="text-[#8B261D] opacity-40" />;
                default: return <Clock size={16} className="text-[#8B261D]/30" />;
            }
        }
        switch (status) {
            case 'generating': return <PlayCircle size={16} className={`${modeAccent.text} animate-pulse`} />;
            case 'completed': return <CheckCircle2 size={16} className="text-zinc-300" />;
            case 'failed': return <XCircle size={16} className="text-red-500" />;
            case 'aborted': return <AlertCircle size={16} className="text-zinc-500" />;
            default: return <Clock size={16} className="text-zinc-500" />;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'generating': return lang === 'CN' ? '生成中...' : 'Generating...';
            case 'completed': return lang === 'CN' ? '已完成' : 'Completed';
            case 'failed': return lang === 'CN' ? '失败' : 'Failed';
            case 'aborted': return lang === 'CN' ? '已中止' : 'Aborted';
            default: return status;
        }
    };

    return (
        <div className={`mist-task-manager-panel mist-archive-modal fixed bottom-20 right-6 w-[400px] max-h-[500px] h-[60vh] ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]' : 'bg-zinc-950 border-white/15'} border-2 rounded-xl ${modeAccent.shadow} z-[120] flex flex-col transform transition-all duration-300 origin-bottom ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
            <div className={`mist-archive-toolbar flex justify-between items-center p-4 border-b ${theme === 'retro' ? 'border-[#8B261D]/30 bg-[#F9F7F1]' : 'border-white/10 bg-zinc-900/50'} rounded-t-xl`}>
                <div className="flex items-center gap-2">
                    <Activity size={18} className={theme === 'retro' ? 'text-[#8B261D]' : modeAccent.text} />
                    <h3 className={`text-sm font-bold uppercase tracking-wider ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                        {lang === 'CN' ? '生成任务中心' : 'Task Manager'}
                    </h3>
                </div>
                <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors p-1">
                    <X size={18} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {tasks.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-2">
                        <Clock size={32} className="opacity-20" />
                        <span className="text-xs uppercase tracking-widest">
                            {lang === 'CN' ? '暂无任务' : 'No Active Tasks'}
                        </span>
                    </div>
                ) : (
                    tasks.map(task => (
                        <div key={task.id} className={`mist-archive-panel ${theme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D]/20 shadow-none' : 'bg-zinc-900 border-white/10 shadow-sm'} border rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group hover:border-white/20 transition-colors`}>
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2 max-w-[70%]">
                                    {getStatusIcon(task.status)}
                                    <span className={`text-xs font-semibold truncate ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200'}`} title={task.name}>{task.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`font-mono text-[10px] tabular-nums ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                        {formatDuration(task.startTime, task.endTime)}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-1">
                                <span className={`text-[10px] uppercase font-bold tracking-wider ${theme === 'retro' ? 'text-[#8B261D]' : 
                                    (task.status === 'generating' ? modeAccent.text :
                                    task.status === 'completed' ? 'text-zinc-300' :
                                        task.status === 'failed' ? 'text-red-500' : 'text-zinc-500')
                                    }`}>
                                    {getStatusText(task.status)}
                                </span>

                                {task.status === 'generating' && (
                                    <button
                                        onClick={() => globalTaskManager.abortTask(task.id)}
                                        className="flex items-center gap-1.5 px-2 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 border border-red-500/30 rounded text-[10px] uppercase tracking-wider font-bold transition-all"
                                    >
                                        <Square size={10} fill="currentColor" />
                                        {lang === 'CN' ? '强制停止' : 'Stop'}
                                    </button>
                                )}
                            </div>

                            {task.status === 'generating' && (
                                <div
                                    className="absolute bottom-0 left-0 h-[2px] w-full animate-pulse"
                                    style={{ backgroundColor: theme === 'retro' ? '#8B261D' : (driverType === DriverType.COMMERCIAL ? 'rgba(120,200,207,0.5)' : 'var(--mist-archive-red-soft)') }}
                                ></div>
                            )}
                        </div>
                    ))
                )}
            </div>

            <div className={`p-4 border-t ${theme === 'retro' ? 'border-black/10 bg-[#F9F7F1]' : 'border-zinc-800/80 bg-zinc-900/30'} rounded-b-xl`}>
                <button
                    onClick={() => globalTaskManager.clearCompletedTasks()}
                    className={`w-full py-2 ${theme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'} text-xs font-bold uppercase tracking-wider rounded transition-all`}
                >
                    {lang === 'CN' ? '清除已完成记录' : 'Clear Completed'}
                </button>
            </div>
        </div>
    );
};
