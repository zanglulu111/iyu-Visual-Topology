
import React, { useState } from 'react';
import { X, Sparkles, Paintbrush, Camera, Box, Cpu, MessageSquare } from 'lucide-react';
import { VisualBibleAnalysisHints } from '../../../services/visualBibleGenerator';

interface VisualBibleConfigModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (hints: VisualBibleAnalysisHints) => void;
    lang: 'CN' | 'EN';
    themeAccent: string;
}

export const VisualBibleConfigModal: React.FC<VisualBibleConfigModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    lang,
    themeAccent
}) => {
    const [medium, setMedium] = useState<'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'tangible' | undefined>(undefined);
    const [dialogue, setDialogue] = useState('');

    if (!isOpen) return null;

    // Extract color base from themeAccent (e.g., "text-purple-400" -> "purple-400")
    const colorBase = themeAccent.replace('text-', '');

    const handleMediumSelect = (id: 'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'tangible') => {
        if (medium === id) {
            setMedium(undefined);
        } else {
            setMedium(id);
        }
    };

    const options = [
        {
            id: 'PAINTING',
            icon: Paintbrush,
            labelCN: '绘画/艺术媒介',
            labelEN: 'Graphic/Painterly',
            descCN: '数字绘画、油画、水粉、概念图等有明显笔触或艺术处理的。',
            descEN: 'Digital painting, oil, gouache, concept art with brushstrokes.'
        },
        {
            id: 'CGI',
            icon: Cpu,
            labelCN: '计算生成/数字建模',
            labelEN: 'CGI/Computational',
            descCN: '3D渲染、UE5/Unity游戏引擎、工业建模等物理模拟质感。',
            descEN: '3D renders, game engines, PBR materials, CAD modeling.'
        },
        {
            id: 'PHOTOGRAPHY',
            icon: Camera,
            labelCN: '镜头捕捉/写实摄影',
            labelEN: 'Lens-Based/Photography',
            descCN: '真实电影剧照、单反/胶片摄影、纪实图像。',
            descEN: 'Film stills, DSLR/Film photography, documentary images.'
        },
        {
            id: 'tangible',
            icon: Box,
            labelCN: '实体手作/定格媒介',
            labelEN: 'Tangible/Craft',
            descCN: '黏土、毛毡、纸模、微缩模型等实体质感，通常有手工痕迹。',
            descEN: 'Clay, felt, papercraft, miniatures with handmade textures.'
        }
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-16 pb-24 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-xl bg-[#0c0c0c] border border-zinc-800 rounded-xl shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900 shrink-0">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold text-white tracking-wider flex items-center gap-2">
                            <Sparkles size={18} className={themeAccent} />
                            {lang === 'CN' ? "视觉反推预设" : "Visual Analysis Pre-Config"}
                        </h2>
                        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                            Set physical boundary for better AI accuracy
                        </span>
                    </div>
                    <button onClick={onClose} className="p-1 text-zinc-500 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar max-h-[55vh]">
                    {/* Medium Selection Grid */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest px-1">
                            {lang === 'CN' ? "1. 选择物理媒介 (黄金准则)" : "1. SELECT PHYSICAL MEDIUM (GOLDEN RULE)"}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {options.map((opt) => (
                                <div
                                    key={opt.id}
                                    onClick={() => handleMediumSelect(opt.id as any)}
                                    className={`p-3 rounded-lg border cursor-pointer transition-all flex gap-3 ${medium === opt.id ? `border-[#D4AF37] bg-[#D4AF37]/5` : 'border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700'}`}
                                >
                                    <div className={`mt-0.5 p-2 rounded bg-black/40 border border-zinc-800 ${medium === opt.id ? 'text-[#D4AF37]' : 'text-zinc-500'}`}>
                                        <opt.icon size={16} />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className={`text-xs font-bold ${medium === opt.id ? 'text-white' : 'text-zinc-300'}`}>
                                            {lang === 'CN' ? opt.labelCN : opt.labelEN}
                                        </span>
                                        <p className="text-[11px] text-zinc-500 leading-tight">
                                            {lang === 'CN' ? opt.descCN : opt.descEN}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Dialogue */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest px-1 flex items-center gap-2">
                            <MessageSquare size={12} />
                            {lang === 'CN' ? "2. 人工引导与纠偏 (可选)" : "2. MANUAL GUIDANCE (OPTIONAL)"}
                        </label>
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
                            <textarea
                                value={dialogue}
                                onChange={(e) => setDialogue(e.target.value)}
                                placeholder={lang === 'CN' ? "例如：这是一个非常粗糙的超写实厚涂插画，注意笔触..." : "e.g. This is a very rough impasto painting, look for brushstrokes..."}
                                className="w-full h-24 bg-transparent border-none text-zinc-200 text-xs focus:ring-0 focus:outline-none focus:ring-offset-0 resize-none custom-scrollbar"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-zinc-900 flex justify-end gap-3 bg-black/20">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
                    >
                        {lang === 'CN' ? "取消" : "CANCEL"}
                    </button>
                    <button
                        onClick={() => onConfirm({ medium, dialogue })}
                        className={`px-6 py-2 bg-${colorBase}/10 hover:bg-${colorBase}/20 text-${colorBase} border border-${colorBase}/30 font-bold text-sm rounded transition-all flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.3)]`}
                    >
                        <Sparkles size={14} />
                        {lang === 'CN' ? "开始全局视觉反推" : "START ANALYSIS"}
                    </button>
                </div>
            </div>
        </div>
    );
};
