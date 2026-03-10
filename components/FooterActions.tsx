
import React from 'react';
import { DriverType } from '../types';
import { Dice5, RotateCcw, Zap, Eraser, Undo2, Redo2 } from 'lucide-react';

interface FooterActionsProps {
  selectedDriver: DriverType | null;
  lang: 'CN' | 'EN';
  handleGlobalRandomize: () => void;
  handleGlobalReset: () => void;
  handleRandomizeFormulaOnly: () => void;
  handleResetFormulaOnly: () => void;
  handleUndo: () => void;
  handleRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  getFooterThemeColor: () => string;
  theme?: string;
}

export const FooterActions: React.FC<FooterActionsProps> = ({ 
  selectedDriver, lang, handleGlobalRandomize, handleGlobalReset, handleRandomizeFormulaOnly, handleResetFormulaOnly, handleUndo, handleRedo, canUndo, canRedo, getFooterThemeColor, theme
}) => {
    if (selectedDriver === DriverType.AESTHETIC) return null;

    return (
        <>
            <div className={`flex ${theme === 'retro' ? 'bg-[#F5F2E8]/80 border-black/10 shadow-sm' : 'bg-zinc-900/50 border-zinc-800'} border rounded-lg p-1 shrink-0 transition-all duration-300 hover:scale-105`}>
                <button 
                    onClick={handleUndo} 
                    disabled={!canUndo}
                    className={`p-2 transition-all rounded ${theme === 'retro' ? 'hover:bg-black/5' : 'hover:bg-white/5'} ${!canUndo ? 'opacity-30 grayscale cursor-not-allowed' : (theme === 'retro' ? 'text-black' : 'text-white')}`}
                    title={lang === 'CN' ? "撤销" : "Undo"}
                >
                    <Undo2 size={18} className={canUndo ? (theme === 'retro' ? 'text-zinc-700 group-hover:text-[#8B261D]' : (theme === 'dark' ? 'text-zinc-400 group-hover:text-white' : getFooterThemeColor())) : (theme === 'retro' ? 'text-zinc-300' : 'text-zinc-600')} />
                </button>
                <div className={`w-px h-4 ${theme === 'retro' ? 'bg-black/10' : 'bg-zinc-800'} self-center mx-1`}></div>
                <button 
                    onClick={handleRedo} 
                    disabled={!canRedo}
                    className={`p-2 transition-all rounded ${theme === 'retro' ? 'hover:bg-black/5' : 'hover:bg-white/5'} ${!canRedo ? 'opacity-30 grayscale cursor-not-allowed' : (theme === 'retro' ? 'text-black' : 'text-white')}`}
                    title={lang === 'CN' ? "重做" : "Redo"}
                >
                    <Redo2 size={18} className={canRedo ? (theme === 'retro' ? 'text-zinc-700 group-hover:text-[#8B261D]' : (theme === 'dark' ? 'text-zinc-400 group-hover:text-white' : getFooterThemeColor())) : (theme === 'retro' ? 'text-zinc-300' : 'text-zinc-600')} />
                </button>
            </div>

            <button onClick={handleGlobalRandomize} className="flex flex-col items-center gap-1.5 group transition-all duration-300 shrink-0 min-w-[60px] hover:scale-110 active:scale-95" >
                <Dice5 size={18} className={`transition-colors ${theme === 'retro' ? 'text-zinc-500 group-hover:text-[#8B261D]' : (theme === 'dark' ? 'text-zinc-400 group-hover:text-white' : getFooterThemeColor())}`} />
                <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${theme === 'retro' ? 'text-zinc-500 group-hover:text-[#8B261D]' : (theme === 'dark' ? 'text-zinc-400 group-hover:text-white' : getFooterThemeColor())}`}>{lang === 'CN' ? "随机生成" : "Randomize"}</span>
            </button>

            <button onClick={handleGlobalReset} className={`flex flex-col items-center gap-1.5 group transition-all duration-300 shrink-0 min-w-[60px] hover:scale-110 active:scale-95 ${theme === 'retro' ? 'text-zinc-600' : ''}`} >
                <RotateCcw size={18} className={`transition-colors ${theme === 'retro' ? 'text-zinc-500 group-hover:text-[#8B261D]' : 'text-zinc-400 group-hover:text-red-500'}`} />
                <span className={`font-bold uppercase tracking-wider transition-colors ${theme === 'retro' ? 'text-zinc-500 group-hover:text-[#8B261D]' : 'text-zinc-400 group-hover:text-red-500'}`} style={{ fontSize: '9px' }}>{lang === 'CN' ? "全局重置" : "Reset All"}</span>
            </button>

            <div className={`w-px h-8 ${theme === 'retro' ? 'bg-black/10' : 'bg-zinc-800'} shrink-0 mx-2`}></div>
            
            <button onClick={handleRandomizeFormulaOnly} className="flex flex-col items-center gap-1.5 group transition-all duration-300 shrink-0 min-w-[60px] hover:scale-110 active:scale-95" >
                <Zap size={18} className={`transition-colors ${theme === 'retro' ? 'text-[#8B261D] group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />
                <span className={`font-bold uppercase tracking-wider transition-colors ${theme === 'retro' ? 'text-[#8B261D] group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} style={{ fontSize: '9px' }}>{lang === 'CN' ? "仅公式" : "Formula Only"}</span>
            </button>
             <button onClick={handleResetFormulaOnly} className="flex flex-col items-center gap-1.5 group transition-all duration-300 shrink-0 min-w-[60px] hover:scale-110 active:scale-95" >
                <Eraser size={18} className={`transition-colors ${theme === 'retro' ? 'text-[#8B261D] group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} />
                <span className={`font-bold uppercase tracking-wider transition-colors ${theme === 'retro' ? 'text-[#8B261D] group-hover:text-black' : 'text-zinc-400 group-hover:text-white'}`} style={{ fontSize: '9px' }}>{lang === 'CN' ? "重置公式" : "Reset Formula"}</span>
            </button>
        </>
    );
};