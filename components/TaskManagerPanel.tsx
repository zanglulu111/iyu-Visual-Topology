import React, { useEffect, useState } from 'react';
import { globalTaskManager, GenerationTask } from '../services/taskManager';
import { Activity, X, PlayCircle, CheckCircle2, XCircle, AlertCircle, Clock, Square } from 'lucide-react';

interface TaskManagerPanelProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
}

export const TaskManagerPanel: React.FC<TaskManagerPanelProps> = ({ isOpen, onClose, lang }) => {
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

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'generating': return <PlayCircle size={16} className="text-blue-400 animate-pulse" />;
            case 'completed': return <CheckCircle2 size={16} className="text-green-500" />;
            case 'failed': return <XCircle size={16} className="text-red-500" />;
            case 'aborted': return <AlertCircle size={16} className="text-orange-400" />;
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
        <div className={`fixed bottom-20 right-6 w-[400px] max-h-[500px] h-[60vh] bg-zinc-950 border border-zinc-800/80 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-[120] flex flex-col transform transition-all duration-300 origin-bottom ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
            <div className="flex justify-between items-center p-4 border-b border-zinc-800/80 bg-zinc-900/50 rounded-t-xl">
                <div className="flex items-center gap-2">
                    <Activity size={18} className="text-gold-primary" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white">
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
                        <div key={task.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2 max-w-[70%]">
                                    {getStatusIcon(task.status)}
                                    <span className="text-xs font-semibold text-zinc-200 truncate" title={task.name}>{task.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-[10px] text-zinc-500 tabular-nums">
                                        {formatDuration(task.startTime, task.endTime)}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-1">
                                <span className={`text-[10px] uppercase font-bold tracking-wider ${task.status === 'generating' ? 'text-blue-400' :
                                    task.status === 'completed' ? 'text-green-500' :
                                        task.status === 'failed' ? 'text-red-500' : 'text-orange-400'
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
                                <div className="absolute bottom-0 left-0 h-[2px] bg-blue-500/50 w-full animate-pulse"></div>
                            )}
                        </div>
                    ))
                )}
            </div>

            <div className="p-4 border-t border-zinc-800/80 bg-zinc-900/30 rounded-b-xl">
                <button
                    onClick={() => globalTaskManager.clearCompletedTasks()}
                    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-wider rounded transition-all"
                >
                    {lang === 'CN' ? '清除已完成记录' : 'Clear Completed'}
                </button>
            </div>
        </div>
    );
};
