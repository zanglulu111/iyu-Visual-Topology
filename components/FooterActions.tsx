
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
}

export const FooterActions: React.FC<FooterActionsProps> = ({ 
  selectedDriver, lang, handleGlobalRandomize, handleGlobalReset, handleRandomizeFormulaOnly, handleResetFormulaOnly, handleUndo, handleRedo, canUndo, canRedo, getFooterThemeColor
}) => {
    if (selectedDriver === DriverType.AESTHETIC) return null;

    return (
        <>
            <div className="flex bg-zinc-900/50 border border-zinc-800 rounded-lg p-1 shrink-0">
                <button 
                    onClick={handleUndo} 
                    disabled={!canUndo}
                    className={`p-2 transition-all rounded hover:bg-white/5 ${!canUndo ? 'opacity-30 grayscale cursor-not-allowed' : 'text-white'}`}
                    title={lang === 'CN' ? "撤销" : "Undo"}
                >
                    <Undo2 size={18} className={canUndo ? getFooterThemeColor() : 'text-zinc-600'} />
                </button>
                <div className="w-px h-4 bg-zinc-800 self-center mx-1"></div>
                <button 
                    onClick={handleRedo} 
                    disabled={!canRedo}
                    className={`p-2 transition-all rounded hover:bg-white/5 ${!canRedo ? 'opacity-30 grayscale cursor-not-allowed' : 'text-white'}`}
                    title={lang === 'CN' ? "重做" : "Redo"}
                >
                    <Redo2 size={18} className={canRedo ? getFooterThemeColor() : 'text-zinc-600'} />
                </button>
            </div>

            <button onClick={handleGlobalRandomize} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]" >
                <Dice5 size={18} className={`transition-colors ${getFooterThemeColor()}`} />
                <span className={`text-[9px] font-bold uppercase tracking-wider transition-colors ${getFooterThemeColor()}`}>{lang === 'CN' ? "随机生成" : "Randomize"}</span>
            </button>

            <button onClick={handleGlobalReset} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]" >
                <RotateCcw size={18} className="text-zinc-400 group-hover:text-red-500 transition-colors" />
                <span className="font-bold uppercase tracking-wider text-zinc-400 group-hover:text-red-500" style={{ fontSize: '9px' }}>{lang === 'CN' ? "全局重置" : "Reset All"}</span>
            </button>

            <div className="w-px h-8 bg-zinc-800 shrink-0 mx-2"></div>
            
            <button onClick={handleRandomizeFormulaOnly} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]" >
                <Zap size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                <span className="font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white" style={{ fontSize: '9px' }}>{lang === 'CN' ? "仅公式" : "Formula Only"}</span>
            </button>
             <button onClick={handleResetFormulaOnly} className="flex flex-col items-center gap-1.5 group transition-all shrink-0 min-w-[60px]" >
                <Eraser size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                <span className="font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white" style={{ fontSize: '9px' }}>{lang === 'CN' ? "重置公式" : "Reset Formula"}</span>
            </button>
        </>
    );
};