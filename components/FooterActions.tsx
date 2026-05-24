
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

    const controlClass = 'mist-app-footer-control flex flex-col items-center gap-1.5 group transition-all duration-300 shrink-0 min-w-[60px] hover:scale-105 active:scale-95';
    const controlIconClass = 'transition-colors text-[var(--text-muted)] group-hover:text-[var(--text-header)]';
    const controlTextClass = 'text-[9px] font-bold uppercase tracking-wider transition-colors text-[var(--text-muted)] group-hover:text-[var(--text-header)]';

    return (
        <>
            <div className="mist-app-footer-segment mist-app-footer-history-controls flex border p-1 shrink-0 transition-all duration-300">
                <button 
                    onClick={handleUndo} 
                    disabled={!canUndo}
                    className={`mist-footer-icon-button mist-footer-undo-button p-2 transition-all hover:bg-white/5 ${!canUndo ? 'opacity-30 grayscale cursor-not-allowed' : 'text-white'}`}
                    title={lang === 'CN' ? "撤销" : "Undo"}
                >
                    <Undo2 size={18} className={canUndo ? 'text-zinc-400 hover:text-white' : 'text-zinc-600'} />
                </button>
                <div className="w-px h-4 bg-[var(--border-main)] self-center mx-1"></div>
                <button 
                    onClick={handleRedo} 
                    disabled={!canRedo}
                    className={`mist-footer-icon-button mist-footer-redo-button p-2 transition-all hover:bg-white/5 ${!canRedo ? 'opacity-30 grayscale cursor-not-allowed' : 'text-white'}`}
                    title={lang === 'CN' ? "重做" : "Redo"}
                >
                    <Redo2 size={18} className={canRedo ? 'text-zinc-400 hover:text-white' : 'text-zinc-600'} />
                </button>
            </div>

            <button onClick={handleGlobalRandomize} className={controlClass} >
                <Dice5 size={18} className={controlIconClass} />
                <span className={controlTextClass}>{lang === 'CN' ? "全局随机" : "Global Random"}</span>
            </button>

            <button onClick={handleGlobalReset} className={controlClass} >
                <RotateCcw size={18} className={controlIconClass} />
                <span className={controlTextClass}>{lang === 'CN' ? "全局重置" : "Reset All"}</span>
            </button>

            <div className="w-px h-8 bg-[var(--border-main)] shrink-0 mx-2"></div>
            
            <button onClick={handleRandomizeFormulaOnly} className={controlClass} >
                <Zap size={18} className={controlIconClass} />
                <span className={controlTextClass}>{lang === 'CN' ? "仅公式" : "Formula Only"}</span>
            </button>
             <button onClick={handleResetFormulaOnly} className={controlClass} >
                <Eraser size={18} className={controlIconClass} />
                <span className={controlTextClass}>{lang === 'CN' ? "重置公式" : "Reset Formula"}</span>
            </button>
        </>
    );
};
