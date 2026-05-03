import React, { useMemo } from 'react';
import { Network, AlertTriangle, ShieldAlert, Cpu, Activity, Info, X } from 'lucide-react';
import { NarrativeFieldState, WorldLawConfig, DriverType } from '../types';
import { extractEngineInput, runMistEngine } from '../engine/mist_calculator';
import { useTheme } from '../contexts/ThemeContext';

interface TensionMonitorModalProps {
    isOpen: boolean;
    onClose: () => void;
    fieldState: NarrativeFieldState;
    worldLaw: WorldLawConfig;
    lang: 'CN' | 'EN';
    selectedDriver: DriverType | null;
}

export const TensionMonitorModal: React.FC<TensionMonitorModalProps> = ({
    isOpen, onClose, fieldState, worldLaw, lang, selectedDriver
}) => {
    const { theme } = useTheme();
    
    // Only process if modal is open
    const engineOutput = useMemo(() => {
        if (!isOpen) return null;
        return runMistEngine(fieldState, worldLaw);
    }, [isOpen, fieldState, worldLaw]);

    const input = useMemo(() => {
        return extractEngineInput(fieldState);
    }, [fieldState]);
    
    if (!isOpen || !engineOutput) return null;
    
    const { tension, redlines, directives } = engineOutput;
    
    // Determine bar color
    const barColor = tension.narrativeArc === 'TRAGEDY' ? 'bg-red-500' 
                   : tension.narrativeArc === 'DEADLOCK' ? 'bg-amber-500' 
                   : 'bg-emerald-500';
    
    // Pre-process redlines into a safe dense array
    const safeRedlines = redlines ? [...redlines].filter((r): r is typeof redlines[number] => r != null) : [];
    console.log('[MIST_DEBUG] redlines:', redlines, 'safeRedlines:', safeRedlines, 'length:', redlines?.length);
                   
    // Prevent close when clicking inside
    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none pb-[70px]">
            {/* Modal Overlay / Drawer */}
            <div 
                className={`relative w-full max-w-4xl mx-auto rounded-t-xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-l border-r pointer-events-auto transform transition-transform duration-300 ${
                    theme === 'retro' ? 'bg-[#F9F7F1]/95 border-[#1A1814]' : 'bg-black/90 border-zinc-800'
                } backdrop-blur-2xl flex flex-col max-h-[80vh]`}
                onClick={stopPropagation}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                
                {/* Header */}
                <div className={`relative px-6 py-4 flex items-center justify-between border-b ${theme === 'retro' ? 'border-[#1A1814]/20' : 'border-zinc-800'}`}>
                    <div className="flex items-center gap-3">
                        <Activity className={theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'} size={20} />
                        <h2 className={`font-black tracking-[0.2em] transform uppercase text-sm ${theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'}`}>
                            {lang === 'CN' ? '迷雾引擎 · 实时推演核心' : 'MIST ENGINE · TENSION DIAGNOSTICS'}
                        </h2>
                    </div>
                    <button 
                        onClick={onClose} 
                        className={`p-2 rounded-lg transition-colors ${theme === 'retro' ? 'hover:bg-black/10 text-zinc-600' : 'hover:bg-white/10 text-zinc-400'}`}
                    >
                        <X size={18} />
                    </button>
                </div>
                
                {/* Body */}
                <div className="relative p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6" style={{ position: 'relative', zIndex: 10 }}>
                    
                    {/* TOP SUMMARY GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        
                        {/* TENSION GAUGE */}
                        <div className={`p-4 rounded-lg border ${theme === 'retro' ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10'} flex flex-col`}>
                            <div className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                {lang === 'CN' ? '结构张力基数 (Tension Ratio)' : 'TENSION RATIO'}
                            </div>
                            <div className="flex items-end gap-2 mb-2">
                                <span className={`text-3xl font-black ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                                    {tension.ratio.toFixed(2)}
                                </span>
                            </div>
                            <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden mt-auto">
                                <div className={`h-full ${barColor} transition-all duration-500`} style={{ width: `${Math.min(100, Math.max(0, tension.ratio * 50))}%` }} />
                            </div>
                        </div>

                        {/* NARRATIVE ARC */}
                        <div className={`p-4 rounded-lg border ${theme === 'retro' ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10'}`}>
                            <div className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                {lang === 'CN' ? '走向判定 (Calculated Arc)' : 'CALCULATED ARC'}
                            </div>
                            <div className={`text-xl font-black mt-2 tracking-wider ${
                                tension.narrativeArc === 'TRAGEDY' ? 'text-red-500' : 
                                tension.narrativeArc === 'DEADLOCK' ? 'text-amber-500' : 
                                'text-emerald-500'
                            }`}>
                                {tension.narrativeArc}
                            </div>
                            <div className={`text-xs mt-1 opacity-70 ${theme === 'retro' ? 'text-zinc-700' : 'text-zinc-400'}`}>
                                {tension.narrativeArc === 'TRAGEDY' ? (lang === 'CN'?'大他者封锁成功，命运无可扭转':'The Other blocks the subject. Fate sealed.') : 
                                 tension.narrativeArc === 'DEADLOCK' ? (lang === 'CN'?'陷入无尽纠缠的死局':'A deadlock loop of desire.') : 
                                 (lang === 'CN'?'主体击穿象征界幻象':'The Subject punctures the Symbolic Order.')}
                            </div>
                        </div>

                        {/* WORLD LAW */}
                        <div className={`p-4 rounded-lg border ${theme === 'retro' ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10'}`}>
                            <div className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                {lang === 'CN' ? '重力法则 (Gravity Law)' : 'GRAVITY LAW'}
                            </div>
                            <div className={`text-xl font-black mt-2 tracking-wider ${theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'}`}>
                                LV.{worldLaw.gravity}
                            </div>
                            <div className={`text-xs mt-1 opacity-70 ${theme === 'retro' ? 'text-zinc-700' : 'text-zinc-400'}`}>
                                {lang === 'CN' ? '影响物理断裂、超自然限制、世界缝合度。' : 'Dictates physical constraints and surreal stitching.'}
                            </div>
                        </div>
                    </div>

                    {/* REDLINE VIOLATIONS — flat rendering, no overflow hidden, no absolute positioning */}
                    {safeRedlines.length > 0 && (
                        <div style={{ borderLeft: '4px solid #ef4444', padding: '16px 16px 16px 20px', borderRadius: '8px', backgroundColor: 'rgba(127, 29, 29, 0.2)', border: '1px solid rgba(239, 68, 68, 0.4)', borderLeftWidth: '4px', borderLeftColor: '#ef4444' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                <ShieldAlert size={16} style={{ color: '#ef4444', flexShrink: 0 }} />
                                <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.15em', color: '#ef4444', textTransform: 'uppercase' }}>
                                    {lang === 'CN' ? '不可扭转的冲突 (Redline Violations) [' + safeRedlines.length + ']' : 'REDLINE VIOLATIONS [' + safeRedlines.length + ']'}
                                </span>
                            </div>
                            {safeRedlines.map((v, i) => (
                                <div key={i} style={{ padding: '12px', marginTop: i > 0 ? '8px' : '0', borderRadius: '6px', border: '1px solid #ef4444', backgroundColor: 'rgba(153, 27, 27, 0.5)' }}>
                                    <div style={{ fontWeight: 700, fontSize: '11px', color: '#fca5a5', marginBottom: '4px' }}>
                                        [{v.code}] — {v.severity === 'ERROR' ? '🔴 红线冲突' : '🟡 结构警告'}
                                    </div>
                                    <div style={{ fontWeight: 500, fontSize: '13px', lineHeight: 1.5, color: '#ffffff' }}>
                                        {lang === 'CN' ? (v.messageCn || v.message) : (v.message || v.messageCn)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {/* Fallback: show header even if redlines exist but safeRedlines is empty (debug) */}
                    {redlines.length > 0 && safeRedlines.length === 0 && (
                        <div style={{ padding: '16px', borderRadius: '8px', border: '1px solid #ef4444', backgroundColor: 'rgba(127, 29, 29, 0.2)' }}>
                            <div style={{ color: '#fca5a5', fontSize: '12px' }}>
                                ⚠️ 引擎检测到 {redlines.length} 个冲突，但数据为空。原始数据: {JSON.stringify(redlines)}
                            </div>
                        </div>
                    )}

                    {/* TOPOLOGY METRICS (M0 ~ M7 Breakdown) */}
                    <div>
                        <div className={`text-[10px] font-bold tracking-widest uppercase mb-3 flex items-center gap-2 ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                            <Network size={14} />
                            {lang === 'CN' ? '拓扑参数阵列 (Topology Vectors)' : 'TOPOLOGY VECTORS'}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {Object.entries({
                                'M0 视觉拓扑': input.m0 ? 1 : 0,
                                'M1 凝视向量': input.m1 ? 1 : 0,
                                'M2 大他者场域': input.m2 ? 1 : 0,
                                'M3 创伤内核': input.m3 ? 1 : 0,
                                'M4 欲望诡计': input.m4 ? 1 : 0,
                                'M5 实在界碎片': input.m5 ? 1 : 0,
                                'M6 升华与死亡': input.m6 ? 1 : 0,
                                'M7B 实在余痕': input.m7b ? 1 : 0,
                            }).map(([key, active], idx) => (
                                <div key={idx} className={`p-2 rounded text-[10px] font-mono border ${
                                    active ? (theme === 'retro' ? 'border-[#8B261D]/30 bg-[#8B261D]/5 text-[#8B261D]' : 'border-gold-primary/30 bg-gold-primary/10 text-gold-primary') : 
                                    (theme === 'retro' ? 'border-black/5 bg-transparent text-zinc-400' : 'border-white/5 bg-transparent text-zinc-600')
                                }`}>
                                    {key.split(' ')[0]} : {active ? 'CONNECTED' : 'NULL'}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COMPILED DIRECTIVES */}
                    <div className="mt-2">
                        <div className={`text-[10px] font-bold tracking-widest uppercase mb-3 flex items-center gap-2 ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                            <Cpu size={14} />
                            {lang === 'CN' ? '底层硬指令列表 (Force Directives)' : 'FORCE DIRECTIVES'}
                        </div>
                        <div className="flex flex-col gap-1.5">
                            {directives.length === 0 ? (
                                <div className={`p-3 text-xs italic ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                    {lang === 'CN' ? '当前无可编译指令' : 'No compiled directives.'}
                                </div>
                            ) : directives.map((directive, idx) => (
                                <div key={idx} className={`flex text-xs p-2.5 rounded border ${theme === 'retro' ? 'bg-white border-black/10' : 'bg-[#111] border-zinc-800'}`}>
                                    <div className="w-[120px] shrink-0 font-mono opacity-60">[{directive.target}]</div>
                                    <div className={`w-[80px] shrink-0 font-bold ${
                                        directive.priority === 'CRITICAL' ? 'text-red-500' :
                                        directive.priority === 'HIGH' ? (theme === 'retro' ? 'text-[#8B261D]' : 'text-amber-400') :
                                        (theme === 'retro' ? 'text-emerald-700' : 'text-emerald-400')
                                    }`}>
                                        {directive.priority}
                                    </div>
                                    <div className={theme === 'retro' ? 'text-zinc-800' : 'text-zinc-300'}>
                                        {lang === 'CN' ? (directive.commandCn || directive.command) : directive.command}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
