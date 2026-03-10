
import React, { useState, useRef, useEffect } from 'react';
import { Trash2, Upload, Sparkles, Loader2, Edit3, Globe, ScanEye } from 'lucide-react';
import { CopyButton } from './SharedBlueprintComponents';
import { supabaseDatabase } from '../services/supabaseDatabase';

interface AssetCardProps {
    item: any;
    type: 'character' | 'prop' | 'location' | 'moodboard';
    language: 'CN' | 'EN';
    contentLanguage?: 'CN' | 'EN';
    onUpdate: (updatedItem: any) => void;
    onDelete: () => void;
    onGenerateImage: (prompt: string) => Promise<string | null>;
    onZoom: (url: string) => void;
    onReverseEngineer?: (url: string) => Promise<{ anchors: string, description: string } | null>;
    theme?: string;
}

export const AssetCard: React.FC<AssetCardProps> = ({ item, type, language, contentLanguage, onUpdate, onDelete, onGenerateImage, onZoom, onReverseEngineer, theme }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);
    const [isGeneratingImg, setIsGeneratingImg] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [viewIndex, setViewIndex] = useState(item.view?.images?.length ? item.view.images.length - 1 : -1);
    const [cardLang, setCardLang] = useState<'CN' | 'EN'>(language);

    const isEnContent = cardLang === 'EN';

    useEffect(() => {
        if (item.view?.images?.length) {
            setViewIndex(item.view.images.length - 1);
        } else {
            setViewIndex(-1);
        }
    }, [item.view?.images?.length]);

    // Auto-expand description textarea
    useEffect(() => {
        if (descRef.current) {
            descRef.current.style.height = 'auto';
            descRef.current.style.height = descRef.current.scrollHeight + 'px';
        }
    }, [item.desc, item.descEn, isEnContent]);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setIsUploading(true);
            try {
                const url = await supabaseDatabase.uploadImage(file);
                const newImage = { id: Date.now().toString(), url, timestamp: Date.now() };
                const updatedImages = [...(item.view?.images || []), newImage];
                onUpdate({
                    ...item,
                    view: { ...item.view, images: updatedImages }
                });
            } catch (err) {
                console.error("Upload failed", err);
            } finally {
                setIsUploading(false);
            }
        }
    };

    const handleDeleteImage = (e: React.MouseEvent, imgId: string) => {
        e.stopPropagation();
        const updatedImages = item.view?.images.filter((img: any) => img.id !== imgId) || [];
        onUpdate({
            ...item,
            view: { ...item.view, images: updatedImages }
        });
        if (updatedImages.length === 0) setViewIndex(-1);
        else setViewIndex(Math.max(0, updatedImages.length - 1));
    };

    const handleGenImage = async () => {
        const currentPrompt = cardLang === 'EN' ? item.view?.promptEn : (item.view?.promptCn || item.view?.prompt);
        if (!currentPrompt) return;
        setIsGeneratingImg(true);
        try {
            const url = await onGenerateImage(currentPrompt);
            if (url) {
                const newImage = { id: Date.now().toString(), url: url, timestamp: Date.now() };
                const updatedImages = [...(item.view?.images || []), newImage];
                onUpdate({
                    ...item,
                    view: { ...item.view, images: updatedImages }
                });
            }
        } finally {
            setIsGeneratingImg(false);
        }
    };

    const handleReverse = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!activeImage?.url || !onReverseEngineer) return;

        setIsAnalyzing(true);
        try {
            const result = await onReverseEngineer(activeImage.url);
            if (result) {
                onUpdate({
                    ...item,
                    desc: result.description,
                    // If tag/type field is generic, maybe append anchors? 
                    // Usually we map result.anchors to a tag if specific.
                    // For now, let's append anchors to description or update prompts.
                    view: {
                        ...item.view,
                        promptCn: result.anchors,
                        promptEn: result.anchors // Anchors are usually EN
                    }
                });
            }
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleFieldUpdate = (field: string, value: string) => {
        onUpdate({ ...item, [field]: value });
    };

    const activeImage = item.view?.images?.[viewIndex];
    const currentPrompt = cardLang === 'EN' ? (item.view?.promptEn || '') : (item.view?.promptCn || item.view?.prompt || '');

    return (
        <div className={`flex flex-col ${theme === 'retro' ? 'bg-white/40 border-black/10 hover:border-black/30' : 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700'} border rounded-xl overflow-hidden group transition-all shadow-xl`}>
            <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 mr-4 space-y-1">
                        <input
                            type="text"
                            value={isEnContent ? (item.nameEn || '') : item.name}
                            onChange={(e) => handleFieldUpdate(isEnContent ? 'nameEn' : 'name', e.target.value)}
                            placeholder={isEnContent ? "Asset Name" : "资产名称"}
                            className={`w-full bg-transparent text-xl font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} border-none focus:ring-0 p-0 focus:outline-none placeholder-zinc-700`}
                        />
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={item.tag || item.type || ""}
                                onChange={(e) => handleFieldUpdate(item.tag ? 'tag' : 'type', e.target.value)}
                                placeholder="TAG"
                                className={`${theme === 'retro' ? 'bg-black/5 text-[#8B261D]' : 'bg-zinc-800/50 text-zinc-500 font-bold'} text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest border-none focus:ring-0 focus:text-zinc-300 transition-colors w-24`}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button onClick={onDelete} className="p-1.5 text-zinc-600 hover:text-red-500 transition-colors" title="Delete Asset">
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>

                <div className="relative group/desc mb-4">
                    <textarea
                        ref={descRef}
                        value={isEnContent ? (item.descEn || '') : item.desc}
                        onChange={(e) => handleFieldUpdate(isEnContent ? 'descEn' : 'desc', e.target.value)}
                        rows={2}
                        placeholder={isEnContent ? "Enter description..." : "输入详细描述..."}
                        className={`w-full bg-transparent text-sm ${theme === 'retro' ? 'text-black/70' : 'text-zinc-400'} leading-relaxed border-none focus:ring-0 resize-none p-0 focus:outline-none placeholder-zinc-800 custom-scrollbar overflow-hidden`}
                    />
                    <Edit3 size={10} className="absolute -right-2 top-1 text-zinc-700 opacity-0 group-hover/desc:opacity-100 transition-opacity pointer-events-none" />
                </div>

                <div className={`${theme === 'retro' ? 'bg-[#F4EFE0] border-black/10' : 'bg-black/40 border-zinc-800/50'} p-3 rounded border mb-4 group/prompt`}>
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                            <span className={`text-[9px] font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-600'} uppercase tracking-widest`}>VISUAL ANCHORS</span>
                            <button
                                onClick={() => setCardLang(prev => prev === 'CN' ? 'EN' : 'CN')}
                                className={`flex items-center gap-1.5 px-2 py-0.5 rounded ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-[#8B261D]/60 hover:text-[#8B261D]' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-500 hover:text-white'} border transition-colors text-[8px] font-bold uppercase tracking-tighter`}
                            >
                                <Globe size={10} />
                                {cardLang === 'CN' ? "CN / EN" : "EN / CN"}
                            </button>
                        </div>
                        <CopyButton text={currentPrompt} className="text-zinc-700 hover:text-zinc-400" />
                    </div>
                    <textarea
                        value={currentPrompt}
                        onChange={(e) => {
                            const newView = { ...item.view };
                            if (cardLang === 'EN') newView.promptEn = e.target.value;
                            else newView.promptCn = e.target.value;
                            onUpdate({ ...item, view: newView });
                        }}
                        className={`w-full bg-transparent text-[10px] ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500 focus:text-zinc-300'} font-mono leading-tight border-none focus:ring-0 resize-none p-0 focus:outline-none transition-all min-h-[40px] custom-scrollbar`}
                        placeholder={`${cardLang} prompt...`}
                    />
                </div>
            </div>
            
            <div className={`mt-auto ${theme === 'retro' ? 'bg-[#DCD8CF] border-black/10' : 'bg-black border-zinc-800/50'} border-t aspect-video relative group/img overflow-hidden flex items-center justify-center`}>
                {activeImage ? (
                    <>
                        <div
                            className="w-full h-full cursor-zoom-in overflow-hidden relative flex items-center justify-center bg-zinc-950"
                            onClick={() => onZoom(activeImage.url)}
                        >
                            <img
                                src={activeImage.url}
                                alt={item.name}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover/img:scale-105"
                            />
                        </div>

                        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover/img:opacity-100 transition-opacity z-20">
                            {onReverseEngineer && (
                                <button
                                    onClick={handleReverse}
                                    disabled={isAnalyzing}
                                    className={`p-2 bg-black/60 rounded-full text-white backdrop-blur-sm transition-colors border border-white/10 shadow-lg ${isAnalyzing ? 'cursor-not-allowed opacity-50' : 'hover:bg-cyan-600/80'}`}
                                    title="Reverse Engineer"
                                >
                                    {isAnalyzing ? <Loader2 size={14} className="animate-spin" /> : <ScanEye size={14} />}
                                </button>
                            )}
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploading}
                                className={`p-2 bg-black/60 rounded-full text-white backdrop-blur-sm transition-colors border border-white/10 shadow-lg ${isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-600/80'}`}
                                title="Upload New"
                            >
                                {isUploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                            </button>
                            <button
                                onClick={(e) => handleDeleteImage(e, activeImage.id)}
                                className="p-2 bg-black/60 hover:bg-red-600/80 rounded-full text-white backdrop-blur-sm transition-colors border border-white/10 shadow-lg"
                                title="Delete Image"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>

                        {item.view.images.length > 1 && (
                            <div className="absolute bottom-2 left-2 right-2 flex gap-1.5 overflow-x-auto no-scrollbar z-20 px-2 pb-1 justify-center">
                                {item.view.images.map((img: any, idx: number) => (
                                    <button
                                        key={img.id}
                                        onClick={(e) => { e.stopPropagation(); setViewIndex(idx); }}
                                        className={`w-12 h-12 rounded border-2 overflow-hidden shrink-0 transition-all ${viewIndex === idx ? 'border-gold-primary scale-110 shadow-xl' : 'border-white/10 opacity-60 hover:opacity-100'}`}
                                    >
                                        <img src={img.url} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className={`flex flex-col items-center justify-center h-full gap-4 w-full ${theme === 'retro' ? 'bg-[#F9F7F1]/50' : 'bg-zinc-900/10'}`}>
                        <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${theme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-700'}`}>Visual Asset Pending</span>
                        <div className="flex gap-3">
                            <button
                                onClick={handleGenImage}
                                disabled={isGeneratingImg || !currentPrompt}
                                className={`flex items-center gap-2 text-[10px] font-black hover:text-white border px-5 py-2.5 rounded shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-widest ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-[#8B261D] hover:bg-[#F9F7F1]' : 'bg-zinc-800 border-zinc-700 hover:border-gold-primary text-zinc-400'}`}
                            >
                                {isGeneratingImg ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} className={theme === 'retro' ? "text-[#8B261D]" : "text-purple-400"} />}
                                {language === 'EN' ? "Generate" : "AI 生成"}
                            </button>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploading}
                                className={`flex items-center gap-2 text-[10px] font-black border px-5 py-2.5 rounded shadow-lg transition-all uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 hover:border-[#8B261D]/50 text-[#8B261D] hover:bg-[#F9F7F1]' : 'bg-zinc-800 border-zinc-700 hover:border-zinc-500 hover:text-white text-zinc-400'}`}
                            >
                                {isUploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                                {language === 'EN' ? (isUploading ? "Uploading..." : "Upload") : (isUploading ? "上传中..." : "手动上传")}
                            </button>
                        </div>
                    </div>
                )}
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleUpload} />
            </div>
        </div>
    );
};
