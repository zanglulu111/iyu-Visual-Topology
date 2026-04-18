import React, { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Terminal, Copy, Check, Layers, Boxes, FileText, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { NarrativeFieldState, WorldLawConfig, DriverType } from '../types';
import { buildNarrativePrompt, PromptArchVersion } from '../services/narrativeGenerator';

interface PromptInspectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'CN' | 'EN';
    fieldState: NarrativeFieldState;
    visionInput: string;
    visionImage: string | null;
    worldLawConfig: WorldLawConfig;
    driverType: DriverType | null;
}

// 版本选项卡配置
const VERSION_TABS: { id: PromptArchVersion; label: string; labelEn: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'v3', label: 'V3 导演笔记', labelEn: 'V3 Director', icon: <Sparkles size={13} />, desc: '导演语言 + M8 缝合点 (当前默认)' },
    { id: 'legacy', label: 'Legacy 原版', labelEn: 'Legacy', icon: <FileText size={13} />, desc: '旧版宪法模式' },
    { id: 'v1', label: 'V1 六层注意力', labelEn: 'V1 Attention', icon: <Layers size={13} />, desc: '注意力金字塔 + 计算器注入' },
    { id: 'v2', label: 'V2 五区块融合', labelEn: 'V2 Fusion', icon: <Boxes size={13} />, desc: '核心公式 + 表层 + 法则 + 结构 + 铁律' },
];

export const PromptInspectorModal: React.FC<PromptInspectorModalProps> = ({
    isOpen,
    onClose,
    lang,
    fieldState,
    visionInput,
    visionImage,
    worldLawConfig,
    driverType
}) => {
    const { theme } = useTheme();
    const [copied, setCopied] = useState(false);
    const [activeVersion, setActiveVersion] = useState<PromptArchVersion>('v3');

    // 计算实时生成的提示词（响应版本切换）
    const livePrompt = useMemo(() => {
        if (!isOpen) return "";
        try {
            const result = buildNarrativePrompt("", fieldState, visionInput, visionImage, worldLawConfig, activeVersion);
            return result.text;
        } catch (e) {
            console.error(e);
            return `提示词生成过程中遇到错误，请检查标签完整性。\n\n[ERROR DETAILS]\n${e instanceof Error ? e.stack : String(e)}`;
        }
    }, [isOpen, fieldState, visionInput, visionImage, worldLawConfig, driverType, activeVersion]);

    // 估算 token 数（粗略：中文约 2 token/字，英文约 1.3 token/word）
    const estimatedTokens = useMemo(() => {
        const cnChars = (livePrompt.match(/[\u4e00-\u9fff]/g) || []).length;
        const enWords = livePrompt.replace(/[\u4e00-\u9fff]/g, '').split(/\s+/).filter(Boolean).length;
        return Math.round(cnChars * 2 + enWords * 1.3);
    }, [livePrompt]);

    const handleCopy = () => {
        navigator.clipboard.writeText(livePrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isOpen) return null;

    return createPortal(
        <div className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300 ${theme === 'retro' ? 'bg-[#8B261D]/10 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-md'}`} onClick={onClose}>
            <div 
                className={`relative w-full max-w-[1200px] h-[90vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden animate-in zoom-in-95 duration-500
                ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/20 shadow-[0_20px_50px_rgba(139,38,29,0.1)]' : 'bg-[#050505] border-zinc-800 shadow-[0_0_100px_rgba(0,0,0,0.8)]'}
                `} 
                onClick={e => e.stopPropagation()}
            >
                {/* 顶部控制栏 */}
                <div className={`shrink-0 flex flex-col border-b ${theme === 'retro' ? 'bg-[#F2EDDE] border-[#8B261D]/10' : 'bg-[#0a0a0a] border-zinc-800/50'}`}>
                    {/* 第一行：标题 + 操作 */}
                    <div className="h-14 flex items-center justify-between px-6">
                        <div className="flex items-center gap-3">
                            <Terminal size={18} className={theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'} />
                            <h2 className={`font-serif font-black tracking-[0.15em] uppercase text-sm ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                                {lang === 'CN' ? 'X-Ray 指令透视仪' : 'Prompt Inspector'}
                            </h2>
                            <span className={`px-2 py-0.5 text-[9px] font-mono rounded ${theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-800 text-zinc-400'}`}>
                                ~{estimatedTokens.toLocaleString()} tokens
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <button 
                                onClick={handleCopy}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
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

                    {/* 第二行：版本切换 Tabs */}
                    <div className="flex items-center gap-1 px-6 pb-2">
                        {VERSION_TABS.map(tab => {
                            const isActive = activeVersion === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveVersion(tab.id)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all
                                    ${isActive
                                        ? theme === 'retro'
                                            ? 'bg-[#8B261D] text-white shadow-sm'
                                            : 'bg-white/10 text-white border border-zinc-600 shadow-sm'
                                        : theme === 'retro'
                                            ? 'text-[#8B261D]/50 hover:text-[#8B261D] hover:bg-[#8B261D]/5'
                                            : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                                    }`}
                                    title={tab.desc}
                                >
                                    {tab.icon}
                                    {lang === 'CN' ? tab.label : tab.labelEn}
                                </button>
                            );
                        })}
                        <span className={`ml-2 text-[10px] ${theme === 'retro' ? 'text-black/30' : 'text-zinc-600'}`}>
                            {VERSION_TABS.find(t => t.id === activeVersion)?.desc}
                        </span>
                    </div>
                </div>

                {/* 代码显示区 */}
                <div className={`flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 font-mono text-sm leading-relaxed ${theme === 'retro' ? 'bg-white text-[#3D1A16]' : 'bg-black text-[var(--text-main)]'}`}>
                    <div className="whitespace-pre-wrap break-words">
                        {livePrompt.split('\n').map((line, index) => {
                            // 🚨 CRITICAL markers
                            if (line.includes('🚨') || line.startsWith('[LOCK_')) {
                                return <div key={index} className={`font-sans font-bold text-sm mt-2 mb-1 px-2 py-1 rounded ${theme === 'retro' ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-red-950/30 text-red-400 border border-red-900/30'}`}>{line}</div>;
                            }
                            // Headers
                            if (line.startsWith('### ')) {
                                return <div key={index} className={`font-sans font-bold text-base mt-4 mb-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'}`}>{line.replace('### ', '')}</div>;
                            }
                            if (line.startsWith('## ')) {
                                return <div key={index} className={`font-sans font-black text-lg tracking-wide mt-6 mb-2 pb-1 border-b ${theme === 'retro' ? 'text-[#8B261D] border-[#8B261D]/20' : 'text-gold-primary border-zinc-800'}`}>{line.replace('## ', '')}</div>;
                            }
                            if (line.startsWith('# ')) {
                                return <div key={index} className={`font-sans font-black text-xl tracking-widest mt-8 mb-4 ${theme === 'retro' ? 'text-black' : 'text-white'}`}>{line.replace('# ', '')}</div>;
                            }
                            
                            // Bold text parser
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
                </div>
            </div>
        </div>
    , document.body);
};
