
import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Paintbrush, Camera, Box, Cpu, MessageSquare, ImagePlus, Trash2, Loader2 } from 'lucide-react';
import { VisualBibleAnalysisHints } from '../../../services/visualBibleGenerator';
import { supabaseDatabase } from '../../../services/supabaseDatabase';

interface AssetDesignConfigModalProps {
    isOpen: boolean;
    onClose: (currentHints?: VisualBibleAnalysisHints) => void;
    onConfirm: (hints: VisualBibleAnalysisHints) => void;
    lang: 'CN' | 'EN';
    themeAccent: string;
    initialHints?: VisualBibleAnalysisHints;
    assetType?: 'characters' | 'scenes' | 'props';
    theme?: string;
}

export const AssetDesignConfigModal: React.FC<AssetDesignConfigModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    lang,
    themeAccent,
    initialHints,
    assetType,
    theme
}) => {
    const [medium, setMedium] = useState<'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'tangible' | undefined>(undefined);
    const [dialogue, setDialogue] = useState('');
    const [detailImages, setDetailImages] = useState<string[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // Initialize/Sync with initialHints when modal opens
    useEffect(() => {
        if (isOpen) {
            setMedium(initialHints?.medium);
            setDialogue(initialHints?.dialogue || '');
            setDetailImages(initialHints?.detailImages || []);
        }
    }, [isOpen, initialHints]);

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

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []) as File[];
        if (!files.length) return;

        const remainingSlots = 5 - detailImages.length;
        const filesToProcess = files.slice(0, remainingSlots);

        setIsUploading(true);
        try {
            const uploadPromises = filesToProcess.map(async (file) => {
                const url = await supabaseDatabase.uploadImage(file);
                return url;
            });

            const urls = await Promise.all(uploadPromises);
            const validUrls = urls.filter((url): url is string => url !== null);

            setDetailImages(prev => {
                const next = [...prev, ...validUrls];
                return next.slice(0, 5);
            });
        } catch (err) {
            console.error("Upload failed:", err);
        } finally {
            setIsUploading(false);
        }

        if (e.target) e.target.value = '';
    };

    const handleDeleteImage = (index: number) => {
        setDetailImages(prev => prev.filter((_, i) => i !== index));
    };

    const options = [
        {
            id: 'PAINTING',
            icon: Paintbrush,
            labelCN: '绘画/艺术媒介',
            labelEN: 'Graphic/Painterly',
            descCN: '设定图、数字绘画、原画、插画材质。',
            descEN: 'Concept art, digital painting, illustration.'
        },
        {
            id: 'CGI',
            icon: Cpu,
            labelCN: '计算生成/数字建模',
            labelEN: 'CGI/Computational',
            descCN: '3D资产、游戏模型等。',
            descEN: '3D assets, game models.'
        },
        {
            id: 'PHOTOGRAPHY',
            icon: Camera,
            labelCN: '镜头捕捉/写实摄影',
            labelEN: 'Lens-Based/Photography',
            descCN: '真实演员照片、电影剧照、cosplay摄影。',
            descEN: 'Actor photos, film stills, live-action.'
        },
        {
            id: 'tangible',
            icon: Box,
            labelCN: '实体手作/定格媒介',
            labelEN: 'Tangible/Craft',
            descCN: '雕塑、微缩模型等。',
            descEN: 'Sculpture, miniatures.'
        }
    ];

    const currentHints: VisualBibleAnalysisHints = { medium, dialogue, detailImages };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center py-12 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`w-full max-w-xl max-h-[85vh] ${theme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]' : 'bg-[#0c0c0c] border-zinc-800'} border rounded-xl shadow-2xl flex flex-col overflow-hidden`}>
                {/* Header */}
                <div className={`flex items-center justify-between px-6 py-4 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[var(--bg-header)]' : 'border-zinc-900 bg-zinc-950'} shrink-0`}>
                    <div className="flex flex-col">
                        <h2 className={`text-lg font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} tracking-wider flex items-center gap-2`}>
                            <Sparkles size={18} className={theme === 'retro' ? 'text-[#8B261D]' : themeAccent} />
                            {lang === 'CN' ? "资产设计" : "Asset Design Configuration"}
                        </h2>
                        <span className={`text-[11px] font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-300'} uppercase tracking-widest mt-1`}>
                            {lang === 'CN' ? "提供详细参考与约束以生成精准的资产描述" : "Provide details & constraints to generate accurate asset descriptions"}
                        </span>
                    </div>
                    <button onClick={() => onClose(currentHints)} className={`p-1 ${theme === 'retro' ? 'text-[#8B261D]/50 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-white'} transition-colors`}>
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar max-h-[70vh]">
                    {/* Medium Selection Grid */}
                    <div className="space-y-3">
                        <label className={`text-xs font-bold ${theme === 'retro' ? 'text-black' : 'text-zinc-200'} uppercase tracking-widest px-1`}>
                            {lang === 'CN' ? "1. 选择物理媒介 (黄金准则)" : "1. SELECT PHYSICAL MEDIUM (GOLDEN RULE)"}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {options.map((opt) => (
                                <div
                                    key={opt.id}
                                    onClick={() => handleMediumSelect(opt.id as any)}
                                    className={`p-3 rounded-lg border cursor-pointer transition-all flex gap-3 ${medium === opt.id ? (theme === 'retro' ? 'border-[#8B261D] bg-[#8B261D]/5' : 'border-[#D4AF37] bg-[#D4AF37]/5') : (theme === 'retro' ? 'border-[#8B261D]/10 bg-[var(--bg-header)]/50 hover:bg-[var(--bg-header)]' : 'border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700')}`}
                                >
                                    <div className={`mt-0.5 w-10 h-10 shrink-0 rounded-none flex items-center justify-center border transition-all ${medium === opt.id ? (theme === 'retro' ? 'bg-[#8B261D] text-white border-[#8B261D]' : 'bg-[#D4AF37] text-black border-[#D4AF37]') : (theme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]/20 text-[#8B261D]/60' : 'bg-black border-zinc-800 text-zinc-500')}`}>
                                        <opt.icon size={16} />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className={`text-xs font-bold ${medium === opt.id ? (theme === 'retro' ? 'text-black' : 'text-white') : (theme === 'retro' ? 'text-black/70' : 'text-zinc-300')}`}>
                                            {lang === 'CN' ? opt.labelCN : opt.labelEN}
                                        </span>
                                        <p className={`text-[11px] leading-tight ${theme === 'retro' ? 'text-black/60' : 'text-zinc-300'}`}>
                                            {lang === 'CN' ? opt.descCN : opt.descEN}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detail Images Upload */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between px-1">
                            <label className={`text-xs font-bold ${theme === 'retro' ? 'text-black/60' : 'text-zinc-300'} uppercase tracking-widest flex items-center gap-2`}>
                                <ImagePlus size={12} />
                                {lang === 'CN' ? "2. 附加细节参考图 (最多5张)" : "2. DETAIL REFERENCES (MAX 5)"}
                            </label>
                            <span className={`text-xs ${theme === 'retro' ? 'text-black/40' : 'text-zinc-500'}`}>
                                {detailImages.length} / 5
                            </span>
                        </div>
                        <p className={`text-xs ${theme === 'retro' ? 'text-black/50' : 'text-zinc-400'} px-1 leading-tight`}>
                            {lang === 'CN'
                                ? "强烈建议上传角色的专属武器、配饰、重点材质或面部特征特写等。如果没有附加图，系统将完全以主图为准，绝不擅自增加不存在的道具。"
                                : "Upload close-ups for weapons, accessories, or specific features. If absent, the AI will strictly adhere ONLY to the main image without hallucinating extra props."}
                        </p>

                        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                            {detailImages.map((img, idx) => (
                                <div key={idx} className={`w-24 h-24 rounded-lg bg-black border ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} group relative overflow-hidden flex-shrink-0`}>
                                    <img src={img} className="w-full h-full object-cover" alt="Detail" />
                                    <button
                                        onClick={() => handleDeleteImage(idx)}
                                        className="absolute top-1 right-1 p-1 bg-black/60 text-zinc-400 hover:text-red-500 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 size={12} />
                                    </button>
                                </div>
                            ))}
                            {detailImages.length < 5 && (
                                <div
                                    onClick={() => !isUploading && fileInputRef.current?.click()}
                                    className={`w-24 h-24 rounded-lg border border-dashed flex flex-col items-center justify-center gap-1 transition-colors flex-shrink-0 ${theme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]/20 text-[#8B261D]/40 hover:text-[#8B261D] hover:border-[#8B261D]/40' : 'bg-zinc-900/30 border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300'} ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                    {isUploading ? (
                                        <>
                                            <Loader2 size={20} className={`animate-spin ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-400'}`} />
                                            <span className="text-[9px] font-bold uppercase">{lang === 'EN' ? "Uploading" : "上传中"}</span>
                                        </>
                                    ) : (
                                        <>
                                            <ImagePlus size={20} />
                                            <span className="text-[9px] font-bold uppercase">{lang === 'EN' ? "Upload" : "点击上传"}</span>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                        />
                    </div>

                    {/* Additional Dialogue */}
                    <div className="space-y-3">
                        <label className={`text-xs font-bold ${theme === 'retro' ? 'text-black/60' : 'text-zinc-300'} uppercase tracking-widest px-1 flex items-center gap-2`}>
                            <MessageSquare size={12} />
                            {lang === 'CN' ? "3. 人工引导与纠偏 (可选)" : "3. MANUAL GUIDANCE (OPTIONAL)"}
                        </label>

                        {assetType === 'characters' && (
                            <div className="flex flex-wrap gap-2 px-1 mb-1">
                                {[
                                    { label: '角色名字', text: '角色名字：' },
                                    { label: '武器', text: '武器：' },
                                    { label: '配饰', text: '配饰：' },
                                    { label: '特征', text: '特征：' },
                                    { label: '服装', text: '服装：' },
                                    { label: '动作', text: '动作：' }
                                ].map((tag, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setDialogue(prev => {
                                                const trimmed = prev.trim();
                                                if (!trimmed) return tag.text;
                                                return trimmed + "\n" + tag.text;
                                            });
                                        }}
                                        className={`px-2 py-1 rounded border transition-all shadow-sm text-[10px] ${theme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]/10 text-[#8B261D]/70 hover:text-[#8B261D] hover:border-[#8B261D]/40' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white'}`}
                                    >
                                        + {tag.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className={`border rounded-lg p-3 ${theme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]/20' : 'bg-zinc-950 border-zinc-800'}`}>
                            <textarea
                                value={dialogue}
                                onChange={(e) => setDialogue(e.target.value)}
                                placeholder={lang === 'CN' ? "说明需要注意的特定要求，例如：“手里拿的武器是一把血红色的日本武士刀”、“这只是半身照，下半身穿着中世纪骑士铠甲长靴”。如果留空，系统将根据推演规则执行。" : "Explain specific requirements... e.g. 'The weapon is a blood-red katana' or 'Infer a medieval knight armor for the lower body'."}
                                className={`w-full h-24 bg-transparent border-none ${theme === 'retro' ? 'text-black placeholder-black/50' : 'text-zinc-200 placeholder-zinc-400'} text-xs focus:ring-0 focus:outline-none focus:ring-offset-0 resize-none custom-scrollbar`}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className={`px-6 py-4 border-t ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[var(--bg-header)]' : 'border-zinc-900 bg-black/20'} flex justify-end gap-3`}>
                    <button
                        onClick={() => onClose(currentHints)}
                        className={`px-4 py-2 text-sm font-bold ${theme === 'retro' ? 'text-black/60 hover:text-black' : 'text-zinc-400 hover:text-white'} transition-colors uppercase tracking-widest`}
                    >
                        {lang === 'CN' ? "取消" : "CANCEL"}
                    </button>
                    <button
                        onClick={() => onConfirm(currentHints)}
                        className={`px-6 py-2 ${theme === 'retro' ? 'bg-[#8B261D] hover:bg-[#6D1E16] text-white overflow-hidden' : `bg-${colorBase}/20 hover:bg-${colorBase}/30 text-${colorBase} border border-current`} font-bold text-sm rounded transition-all flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.3)]`}
                    >
                        <Sparkles size={14} />
                        {lang === 'CN' ? "生成资产设计" : "GENERATE DESIGN"}
                    </button>
                </div>
            </div>
        </div>
    );
};
