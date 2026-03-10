
import React, { useState } from 'react';
import { X, Sparkles, Scissors, MessageSquare, Minus, Plus } from 'lucide-react';

interface BreakdownConfigModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (instruction: string, targetCount?: number) => void;
    lang: 'CN' | 'EN';
    themeAccent: string;
    theme?: string;
}

export const BreakdownConfigModal: React.FC<BreakdownConfigModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    lang,
    themeAccent,
    theme
}) => {
    const [instruction, setInstruction] = useState('');
    const [targetCount, setTargetCount] = useState<number | ''>('');

    if (!isOpen) return null;

    // Extract color base from themeAccent (e.g., "text-purple-400" -> "purple-400")
    const colorBase = themeAccent.replace('text-', '');

    return (
        <div className={`fixed inset-0 z-[100] flex items-start justify-center p-4 pt-4 pb-24 ${theme === 'retro' ? 'bg-[#F4EFE0]/60' : 'bg-black/60'} backdrop-blur-sm animate-in fade-in duration-200`}>
            <div className={`w-full max-w-2xl ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/20' : 'bg-[#0c0c0c] border-zinc-800'} border rounded-xl shadow-2xl flex flex-col overflow-hidden`}>
                {/* Header */}
                <div className={`flex items-center justify-between px-6 py-4 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F9F7F1]' : 'border-zinc-900 bg-zinc-950'} shrink-0`}>
                    <div className="flex flex-col">
                        <h2 className={`text-lg font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} tracking-wider flex items-center gap-2`}>
                            <Scissors size={18} className={theme === 'retro' ? 'text-[#8B261D]' : themeAccent} />
                            {lang === 'CN' ? "剧本分场预设" : "Script Breakdown Config"}
                        </h2>
                        <span className={`text-[11px] font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-300'} uppercase tracking-widest mt-1`}>
                            {lang === 'CN' ? "提供分场逻辑指引以生成精准的场次结构" : "Provide breakdown guidance for accurate scene structure"}
                        </span>
                    </div>
                    <button onClick={onClose} className={`p-1 ${theme === 'retro' ? 'text-[#8B261D]/80 hover:text-[#8B261D]' : 'text-zinc-400 hover:text-white'} transition-colors`}>
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar max-h-[55vh]">
                    {/* Target Scene Count */}
                    <div className="space-y-4">
                        <label className={`text-xs font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-300'} uppercase tracking-widest px-1 flex items-center gap-2`}>
                            <Scissors size={12} />
                            {lang === 'CN' ? "1. 目标分场数量 (可选)" : "1. TARGET SCENE COUNT (OPTIONAL)"}
                        </label>

                        <div className="space-y-4 px-1">
                            {/* Single Row of Quick Selection - No Custom Button */}
                            <div className="flex flex-wrap gap-2 text-zinc-500">
                                {[3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => setTargetCount(num)}
                                        className={`w-9 h-9 flex items-center justify-center rounded text-xs font-bold transition-all border ${targetCount === num ? (theme === 'retro' ? 'bg-[#8B261D] border-[#8B261D] text-white' : `bg-${colorBase}/20 border-${colorBase}/50 text-white`) : (theme === 'retro' ? 'bg-white border-[#8B261D]/10 text-[#8B261D]/80 hover:text-[#8B261D] hover:border-[#8B261D]/40' : 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:border-zinc-700')}`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>

                            {/* Stepper Input - Restoring Plus/Minus, Hiding Browser Spinners via CSS */}
                            <div className="flex items-center gap-3">
                                <div className={`w-40 border rounded flex items-center overflow-hidden h-10 ${theme === 'retro' ? 'bg-white border-[#8B261D]/20' : 'bg-zinc-950 border-zinc-800'}`}>
                                    <button
                                        onClick={() => setTargetCount(prev => (prev === '' ? 3 : Math.max(3, prev - 1)))}
                                        className={`p-2.5 transition-colors border-r ${theme === 'retro' ? 'text-[#8B261D]/50 hover:text-[#8B261D] hover:bg-[#F4EFE0] border-[#8B261D]/10' : 'text-zinc-500 hover:text-white hover:bg-zinc-900 border-zinc-800'}`}
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <input
                                        type="number"
                                        value={targetCount}
                                        onChange={(e) => {
                                            const val = e.target.value === '' ? '' : parseInt(e.target.value);
                                            setTargetCount(val);
                                        }}
                                        onBlur={() => {
                                            if (targetCount !== '' && targetCount < 3) setTargetCount(3);
                                        }}
                                        placeholder="--"
                                        className={`w-full bg-transparent border-none ${theme === 'retro' ? 'text-black placeholder-black/50' : 'text-zinc-100 placeholder-zinc-500'} text-xs focus:ring-0 focus:outline-none focus:ring-offset-0 text-center font-mono [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                                    />
                                    <button
                                        onClick={() => setTargetCount(prev => (prev === '' ? 4 : prev + 1))}
                                        className={`p-2.5 transition-colors border-l ${theme === 'retro' ? 'text-[#8B261D]/50 hover:text-[#8B261D] hover:bg-[#F4EFE0] border-[#8B261D]/10' : 'text-zinc-500 hover:text-white hover:bg-zinc-900 border-zinc-800'}`}
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                                <span className={`text-xs ${theme === 'retro' ? 'text-[#8B261D]/80' : 'text-zinc-300'} italic`}>
                                    {lang === 'CN' ? "最小分场数为 3" : "Min scenes is 3"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Instruction */}
                    <div className="space-y-3">
                        <label className={`text-xs font-bold ${theme === 'retro' ? 'text-black/60' : 'text-zinc-300'} uppercase tracking-widest px-1 flex items-center gap-2`}>
                            <MessageSquare size={12} />
                            {lang === 'CN' ? "2. 分场要求与指引 (可选)" : "2. BREAKDOWN REQUIREMENTS (OPTIONAL)"}
                        </label>
                        <div className={`bg-zinc-950 border ${theme === 'retro' ? 'bg-white border-[#8B261D]/20' : 'bg-zinc-950 border-zinc-800'} rounded-lg p-3`}>
                            <textarea
                                value={instruction}
                                onChange={(e) => setInstruction(e.target.value)}
                                placeholder={lang === 'CN' ? "输入对分场的要求，例如：“把打斗戏拆分为决战前准备、决斗和战斗后三个独立场次”、“每场戏的篇幅不要太长，保持快节奏”。" : "Enter scene splitting requirements, e.g. 'Split the fight into prep, duel, and aftermath', 'Keep scenes short for fast pacing'."}
                                className={`w-full h-32 bg-transparent border-none ${theme === 'retro' ? 'text-black placeholder-black/50' : 'text-zinc-100 placeholder-zinc-500'} text-xs focus:ring-0 focus:outline-none focus:ring-offset-0 resize-none custom-scrollbar`}
                            />
                        </div>
                        <p className={`text-xs ${theme === 'retro' ? 'text-black/70' : 'text-zinc-100'} px-1 leading-tight italic`}>
                            {lang === 'CN'
                                ? "提示：明确的指令能显著提升 AI 对剧情节奏的把控力。"
                                : "Tip: Clear instructions significantly improve AI's control over pacing."}
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className={`px-6 py-4 border-t ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F9F7F1]' : 'border-zinc-900 bg-black/20'} flex justify-end gap-3`}>
                    <button
                        onClick={onClose}
                        className={`px-4 py-2 text-sm font-bold ${theme === 'retro' ? 'text-black/60 hover:text-black' : 'text-zinc-400 hover:text-white'} transition-colors uppercase tracking-widest`}
                    >
                        {lang === 'CN' ? "取消" : "CANCEL"}
                    </button>
                    <button
                        onClick={() => onConfirm(instruction, targetCount === '' ? undefined : targetCount)}
                        className={`px-6 py-2 ${theme === 'retro' ? 'bg-[#8B261D] hover:bg-[#6D1E16] text-white overflow-hidden' : `bg-${colorBase}/20 hover:bg-${colorBase}/30 text-${colorBase} border border-current`} font-bold text-sm rounded transition-all flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.3)]`}
                    >
                        <Sparkles size={14} />
                        {lang === 'CN' ? "开始智能分场" : "START BREAKDOWN"}
                    </button>
                </div>
            </div>
        </div>
    );
};
