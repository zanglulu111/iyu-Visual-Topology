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

    const formatDuration = (start: number, end?: number) => {
        const totalSeconds = Math.floor(((end || currentTime) - start) / 1000);
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const getModeAccent = () => {
        if (theme === 'retro') return {
            text: 'text-[#8B261D]',
            bg: 'bg-[#8B261D]',
            border: 'border-[#8B261D]',
            glow: 'rgba(139,38,29,0.15)',
            shadow: 'shadow-none'
        };
        if (driverType === DriverType.COMMERCIAL) return {
            text: 'text-mist-cyan',
            bg: 'bg-mist-cyan',
            border: 'border-mist-cyan',
            glow: 'rgba(120,200,207,0.3)',
            shadow: 'shadow-[0_0_30px_rgba(120,200,207,0.15)]'
        };
        return {
            text: 'text-[var(--mist-archive-red)]',
            bg: 'bg-[var(--mist-archive-red)]',
            border: 'border-[var(--mist-archive-red)]',
            glow: 'rgba(255,98,86,0.3)',
            shadow: 'shadow-[0_0_30px_rgba(255,98,86,0.15)]'
        };
    };

    const modeAccent = getModeAccent();

    const getStatusIcon = (status: string) => {
        if (theme === 'retro') {
            switch (status) {
                case 'generating': return <PlayCircle size={15} className="text-[#8B261D] animate-pulse" />;
                case 'completed': return <CheckCircle2 size={15} className="text-[#8B261D]" />;
                case 'failed': return <XCircle size={15} className="text-[#8B261D] opacity-60" />;
                case 'aborted': return <AlertCircle size={15} className="text-[#8B261D] opacity-40" />;
                default: return <Clock size={15} className="text-[#8B261D]/30" />;
            }
        }
        switch (status) {
            case 'generating': return <PlayCircle size={15} className={`${modeAccent.text} animate-pulse`} />;
            case 'completed': return <CheckCircle2 size={15} className="text-emerald-400" />;
            case 'failed': return <XCircle size={15} className="text-red-500" />;
            case 'aborted': return <AlertCircle size={15} className="text-zinc-500" />;
            default: return <Clock size={15} className="text-zinc-500" />;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'generating': return lang === 'CN' ? '计算中' : 'COMPUTING';
            case 'completed': return lang === 'CN' ? '已归档' : 'ARCHIVED';
            case 'failed': return lang === 'CN' ? '中断' : 'FAILED';
            case 'aborted': return lang === 'CN' ? '废止' : 'VOIDED';
            default: return status.toUpperCase();
        }
    };

    return (
        <div
            className={`mist-task-manager-panel mist-archive-modal fixed bottom-24 right-8 w-[380px] max-h-[520px] h-[65vh] ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]' : 'bg-[#050505] border-white/10 backdrop-blur-xl'} border rounded-2xl ${modeAccent.shadow} z-[120] flex flex-col transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0 pointer-events-none'}`}
            style={{
                backgroundImage: theme === 'retro' ? 'none' : `radial-gradient(circle at 100% 0%, ${modeAccent.glow}, transparent 40%), radial-gradient(circle at 0% 100%, rgba(255,255,255,0.03), transparent 40%)`
            }}
        >
            <div className={`mist-archive-toolbar flex justify-between items-center px-5 py-4 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F9F7F1]' : 'border-white/5 bg-white/[0.02]'} rounded-t-2xl relative overflow-hidden`}>
                {theme !== 'retro' && <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent pointer-events-none"></div>}
                <div className="flex items-center gap-3 relative z-10">
                    <div className={`mist-task-center-icon-shell p-1.5 rounded-lg ${theme === 'retro' ? 'bg-[#8B261D]/10' : 'bg-white/5'}`}>
                        <Activity size={16} className={`mist-task-center-icon ${theme === 'retro' ? 'text-[#8B261D]' : modeAccent.text}`} />
                    </div>
                    <div className="flex flex-col">
                        <h3 className={`text-[11px] font-black uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                            {lang === 'CN' ? '生成任务中心' : 'Task Center'}
                        </h3>
                        <span className="text-[8px] font-bold opacity-40 tracking-widest uppercase">
                            {lang === 'CN' ? '爱欲拓扑学 · 运算核心' : 'Eros Topology · Compute Core'}
                        </span>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className={`mist-archive-button mist-task-close-button transition-all duration-300 p-2 rounded-full ${theme === 'retro' ? 'hover:bg-[#8B261D]/10 text-[#8B261D]' : 'hover:bg-white/10 text-zinc-400 hover:text-white'}`}
                >
                    <X size={16} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar relative">
                {tasks.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-4 opacity-30">
                        <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center border-dashed animate-[spin_10s_linear_infinite]">
                            <Clock size={20} />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                            {lang === 'CN' ? '无活跃进程' : 'Idle State'}
                        </span>
                    </div>
                ) : (
                    tasks.map((task, idx) => (
                        <div
                            key={task.id}
                            className={`mist-archive-panel relative overflow-hidden group transition-all duration-500 animate-in fade-in slide-in-from-bottom-2 ${theme === 'retro' ? 'bg-[#F4EFE0]/50 border-[#8B261D]/15' : 'bg-white/[0.03] border-white/5'} border rounded-xl p-4 flex flex-col gap-3 hover:border-white/10`}
                            style={{ animationDelay: `${idx * 50}ms` }}
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3 max-w-[75%]">
                                    <div className={`mist-task-status-icon-shell p-1 rounded ${theme === 'retro' ? 'bg-[#8B261D]/5' : 'bg-black/40'}`}>
                                        {getStatusIcon(task.status)}
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className={`text-[11px] font-bold tracking-wide truncate ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-100'}`} title={task.name}>
                                            {task.name}
                                        </span>
                                        <span className={`text-[9px] font-mono tabular-nums opacity-40 ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                                            ID: {task.id.slice(0, 8)} • {formatDuration(task.startTime, task.endTime)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className={`text-[9px] font-black tracking-[0.15em] px-2 py-0.5 rounded ${theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' :
                                        (task.status === 'generating' ? `${modeAccent.bg}/20 ${modeAccent.text}` :
                                        task.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' :
                                        task.status === 'failed' ? 'bg-red-500/10 text-red-500' : 'bg-white/5 text-zinc-500')
                                        }`}>
                                        {getStatusText(task.status)}
                                    </span>
                                </div>

                                {task.status === 'generating' && (
                                    <button
                                        onClick={() => globalTaskManager.abortTask(task.id)}
                                        className={`flex items-center gap-1.5 px-3 py-1 rounded text-[9px] font-black tracking-widest uppercase transition-all ${theme === 'retro' ? 'bg-[#8B261D]/10 hover:bg-[#8B261D] hover:text-white text-[#8B261D]' : 'bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 border border-transparent hover:border-red-500/30'}`}
                                    >
                                        <Square size={8} fill="currentColor" />
                                        {lang === 'CN' ? '终止' : 'Abort'}
                                    </button>
                                )}
                            </div>

                            {task.status === 'generating' && (
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
                                    <div
                                        className={`h-full transition-all duration-1000 ${theme === 'retro' ? 'bg-[#8B261D]' : modeAccent.bg}`}
                                        style={{
                                            width: '100%',
                                            animation: 'mist-task-progress 2s linear infinite'
                                        }}
                                    ></div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            <div className={`p-5 border-t ${theme === 'retro' ? 'border-[#8B261D]/10 bg-[#F9F7F1]' : 'border-white/5 bg-white/[0.01]'} rounded-b-2xl`}>
                <button
                    onClick={() => globalTaskManager.clearCompletedTasks()}
                    disabled={tasks.filter(t => t.status !== 'generating').length === 0}
                    className={`w-full py-2.5 text-[10px] font-black uppercase tracking-[0.25em] rounded-lg transition-all duration-300 ${theme === 'retro' ? 'bg-[#8B261D] text-white hover:bg-[#631B15] disabled:opacity-30' : 'bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/5 disabled:opacity-20 disabled:cursor-not-allowed'}`}
                >
                    {lang === 'CN' ? '清除历史记录' : 'Purge Archives'}
                </button>
            </div>

            <style>{`
                @keyframes mist-task-progress {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: ${theme === 'retro' ? 'rgba(139,38,29,0.2)' : 'rgba(255,255,255,0.1)'};
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};
