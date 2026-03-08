
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
}

export const AssetDesignConfigModal: React.FC<AssetDesignConfigModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    lang,
    themeAccent,
    initialHints,
    assetType
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
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-16 pb-24 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-2xl bg-[#0c0c0c] border border-zinc-800 rounded-xl shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900 shrink-0">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold text-white tracking-wider flex items-center gap-2">
                            <Sparkles size={18} className={themeAccent} />
                            {lang === 'CN' ? "资产设计" : "Asset Design Configuration"}
                        </h2>
                        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                            {lang === 'CN' ? "提供详细参考与约束以生成精准的资产描述" : "Provide details & constraints to generate accurate asset descriptions"}
                        </span>
                    </div>
                    <button onClick={() => onClose(currentHints)} className="p-1 text-zinc-500 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar max-h-[70vh]">
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
                                    className={`p-3 rounded-lg border cursor-pointer transition-all flex gap-3 ${medium === opt.id ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700'}`}
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

                    {/* Detail Images Upload */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between px-1">
                            <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                                <ImagePlus size={12} />
                                {lang === 'CN' ? "2. 附加细节参考图 (最多5张)" : "2. DETAIL REFERENCES (MAX 5)"}
                            </label>
                            <span className="text-xs text-zinc-500">
                                {detailImages.length} / 5
                            </span>
                        </div>
                        <p className="text-xs text-zinc-400 px-1 leading-tight">
                            {lang === 'CN'
                                ? "强烈建议上传角色的专属武器、配饰、重点材质或面部特征特写等。如果没有附加图，系统将完全以主图为准，绝不擅自增加不存在的道具。"
                                : "Upload close-ups for weapons, accessories, or specific features. If absent, the AI will strictly adhere ONLY to the main image without hallucinating extra props."}
                        </p>

                        <div className="flex gap-3">
                            {detailImages.map((img, idx) => (
                                <div key={idx} className="w-24 h-24 rounded-lg bg-black border border-zinc-800 group relative overflow-hidden flex-shrink-0">
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
                                    className={`w-24 h-24 rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 flex flex-col items-center justify-center gap-1 transition-colors flex-shrink-0 ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-zinc-500 hover:text-zinc-300 text-zinc-500'}`}
                                >
                                    {isUploading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin text-zinc-400" />
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
                        <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest px-1 flex items-center gap-2">
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
                                        className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[10px] text-zinc-400 hover:text-white transition-all shadow-sm"
                                    >
                                        + {tag.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
                            <textarea
                                value={dialogue}
                                onChange={(e) => setDialogue(e.target.value)}
                                placeholder={lang === 'CN' ? "说明需要注意的特定要求，例如：“手里拿的武器是一把血红色的日本武士刀”、“这只是半身照，下半身穿着中世纪骑士铠甲长靴”。如果留空，系统将根据推演规则执行。" : "Explain specific requirements... e.g. 'The weapon is a blood-red katana' or 'Infer a medieval knight armor for the lower body'."}
                                className="w-full h-24 bg-transparent border-none text-zinc-200 text-xs focus:ring-0 focus:outline-none focus:ring-offset-0 resize-none custom-scrollbar"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-zinc-900 flex justify-end gap-3 bg-black/20">
                    <button
                        onClick={() => onClose(currentHints)}
                        className="px-4 py-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
                    >
                        {lang === 'CN' ? "取消" : "CANCEL"}
                    </button>
                    <button
                        onClick={() => onConfirm(currentHints)}
                        className={`px-6 py-2 bg-${colorBase}/10 hover:bg-${colorBase}/20 text-${colorBase} border border-${colorBase}/30 font-bold text-sm rounded transition-all flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.3)]`}
                    >
                        <Sparkles size={14} />
                        {lang === 'CN' ? "生成资产设计" : "GENERATE DESIGN"}
                    </button>
                </div>
            </div>
        </div>
    );
};
