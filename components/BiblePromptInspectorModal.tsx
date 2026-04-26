import React, { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Terminal, Copy, Check, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { CreativeTreatment, StyleConfig, NarrativeFieldState, WorldLawConfig, DriverType } from '../types';
import { buildNarrativeBiblePrompt } from '../services/narrativeGenerator';
import { buildCommercialBiblePrompt } from '../services/commercialGenerator';
import { buildExperimentalBiblePrompt } from '../services/experimentalGenerator';
import { buildAestheticBiblePrompt } from '../services/aestheticGenerator';

interface BiblePromptInspectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    treatment: CreativeTreatment | null;
    styleConfig: StyleConfig;
    fieldState?: NarrativeFieldState;
    visionInput?: string;
    worldLawConfig?: WorldLawConfig;
    driverType: DriverType;
}

export const BiblePromptInspectorModal: React.FC<BiblePromptInspectorModalProps> = ({
    isOpen,
    onClose,
    lang,
    treatment,
    styleConfig,
    fieldState,
    visionInput,
    worldLawConfig,
    driverType
}) => {
    const { theme } = useTheme();
    const [copied, setCopied] = useState(false);

    const livePrompt = useMemo(() => {
        if (!isOpen || !treatment) return "";
        try {
            const fs = fieldState || {} as NarrativeFieldState;
            const vi = visionInput || "";
            const wl = worldLawConfig || { gravity: 4 };

            switch (driverType) {
                case DriverType.COMMERCIAL:
                    return buildCommercialBiblePrompt(treatment, styleConfig, fs, vi, wl);
                case DriverType.EXPERIMENTAL:
                    return buildExperimentalBiblePrompt(treatment, styleConfig, fs, vi, wl);
                case DriverType.AESTHETIC:
                    return buildAestheticBiblePrompt(treatment, styleConfig, fs, vi, wl);
                default:
                    return buildNarrativeBiblePrompt(treatment, styleConfig, fs, vi, wl);
            }
        } catch (e) {
            console.error(e);
            return `提示词生成过程中遇到错误。\n\n[ERROR]\n${e instanceof Error ? e.stack : String(e)}`;
        }
    }, [isOpen, treatment, styleConfig, fieldState, visionInput, worldLawConfig, driverType]);

    const estimatedTokens = useMemo(() => {
        const cnChars = (livePrompt.match(/[一-鿿]/g) || []).length;
        const enWords = livePrompt.replace(/[一-鿿]/g, '').split(/\s+/).filter(Boolean).length;
        return Math.round(cnChars * 2 + enWords * 1.3);
    }, [livePrompt]);

    const handleCopy = () => {
        navigator.clipboard.writeText(livePrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isOpen) return null;

    const driverLabel = (() => {
        switch (driverType) {
            case DriverType.COMMERCIAL: return lang === 'CN' ? '商业演示圣经' : 'Commercial Bible';
            case DriverType.EXPERIMENTAL: return lang === 'CN' ? '实验圣经' : 'Experimental Bible';
            case DriverType.AESTHETIC: return lang === 'CN' ? '美学创意圣经' : 'Aesthetic Bible';
            case DriverType.TRAILER: return lang === 'CN' ? '预告片执行单' : 'Trailer Bible';
            default: return lang === 'CN' ? '创意圣经' : 'Creative Bible';
        }
    })();

    return createPortal(
        <div className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300 ${theme === 'retro' ? 'bg-[#8B261D]/10 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-md'}`} onClick={onClose}>
            <div
                className={`relative w-full max-w-[1200px] h-[90vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden animate-in zoom-in-95 duration-500
                ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/20 shadow-[0_20px_50px_rgba(139,38,29,0.1)]' : 'bg-[#050505] border-zinc-800 shadow-[0_0_100px_rgba(0,0,0,0.8)]'}
                `}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className={`shrink-0 flex items-center justify-between h-14 px-6 border-b ${theme === 'retro' ? 'bg-[#F2EDDE] border-[#8B261D]/10' : 'bg-[#0a0a0a] border-zinc-800/50'}`}>
                    <div className="flex items-center gap-3">
                        <Terminal size={18} className={theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'} />
                        <h2 className={`font-serif font-black tracking-[0.15em] uppercase text-sm ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                            {lang === 'CN' ? 'X-Ray 圣经指令透视' : 'Bible Prompt Inspector'}
                        </h2>
                        <span className={`px-2 py-0.5 text-[9px] font-mono rounded ${theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-800 text-zinc-400'}`}>
                            {driverLabel}
                        </span>
                        <span className={`px-2 py-0.5 text-[9px] font-mono rounded ${theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-800 text-zinc-400'}`}>
                            ~{estimatedTokens.toLocaleString()} tokens
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        {!treatment && (
                            <span className={`text-[11px] ${theme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-500'}`}>
                                {lang === 'CN' ? '请先选择一个叙事路径' : 'Select a narrative path first'}
                            </span>
                        )}
                        <button
                            onClick={handleCopy}
                            disabled={!treatment}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-40
                            ${theme === 'retro' ? 'bg-white border text-[#8B261D] border-[#8B261D]/20 hover:bg-[#8B261D]/5' : 'bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800'}`}
                        >
                            {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                            {copied ? (lang === 'CN' ? '已复制' : 'Copied') : (lang === 'CN' ? '复制' : 'Copy')}
                        </button>
                        <button
                            onClick={onClose}
                            className={`p-1.5 rounded-lg transition-colors ${theme === 'retro' ? 'text-black/50 hover:bg-black/5 hover:text-black' : 'text-zinc-500 hover:text-white hover:bg-white/10'}`}
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Prompt display */}
                <div className={`flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 font-mono text-sm leading-relaxed ${theme === 'retro' ? 'bg-white text-[#3D1A16]' : 'bg-black text-[var(--text-main)]'}`}>
                    {!treatment ? (
                        <div className="flex flex-col items-center justify-center h-full gap-4 opacity-40">
                            <BookOpen size={48} />
                            <p className="text-sm">{lang === 'CN' ? '选择一个叙事路径后，可在此预览完整的创意圣经指令' : 'Select a narrative path to preview the full Creative Bible prompt'}</p>
                        </div>
                    ) : (
                        <div className="whitespace-pre-wrap break-words">
                            {livePrompt.split('\n').map((line, index) => {
                                if (line.includes('🚨') || line.startsWith('[LOCK_')) {
                                    return <div key={index} className={`font-sans font-bold text-sm mt-2 mb-1 px-2 py-1 rounded ${theme === 'retro' ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-red-950/30 text-red-400 border border-red-900/30'}`}>{line}</div>;
                                }
                                if (line.startsWith('### ')) {
                                    return <div key={index} className={`font-sans font-bold text-base mt-4 mb-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'}`}>{line.replace('### ', '')}</div>;
                                }
                                if (line.startsWith('## ')) {
                                    return <div key={index} className={`font-sans font-black text-lg tracking-wide mt-6 mb-2 pb-1 border-b ${theme === 'retro' ? 'text-[#8B261D] border-[#8B261D]/20' : 'text-gold-primary border-zinc-800'}`}>{line.replace('## ', '')}</div>;
                                }
                                if (line.startsWith('# ')) {
                                    return <div key={index} className={`font-sans font-black text-xl tracking-widest mt-8 mb-4 ${theme === 'retro' ? 'text-black' : 'text-white'}`}>{line.replace('# ', '')}</div>;
                                }

                                const parts = line.split(/(\*\*.*?\*\*)/g);
                                return (
                                    <div key={index} className="min-h-[1.5em]">
                                        {parts.map((p, i) => {
                                            if (p.startsWith('**') && p.endsWith('**')) {
                                                return <strong key={i} className={`font-bold ${theme === 'retro' ? 'text-black' : 'text-zinc-200'}`}>{p.slice(2, -2)}</strong>;
                                            }
                                            return <span key={i} className={theme === 'retro' ? 'text-[#3D1A16]/80' : 'text-zinc-400'}>{p}</span>;
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    , document.body);
};
