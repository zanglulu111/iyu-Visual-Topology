
import React, { useState, useRef } from 'react';
import { Trash2, Plus, ImageIcon, Sparkles, Loader2, Palette, Camera, Zap, Layout, ChevronDown, ChevronUp, BookOpen, User, MapPin, Box, Globe, Copy, Check, ScanEye, Sun, Layers, Paintbrush, Film, Eraser } from 'lucide-react';
import { MetonymyStylePreset, BlueprintLanguage, GlobalVisualTone, MetonymyAssetInput } from '../../../types';
import { analyzeImageBasedVisualBible, analyzeToneImage, analyzeAssetImage, generateDesignImage, VisualBibleAnalysisHints } from '../../../services/visualBibleGenerator';
import { generateTextBasedVisualBible } from '../../../services/visualBibleGenerator';
import { supabaseDatabase } from '../../../services/supabaseDatabase';
import { VisualBibleConfigModal } from './VisualBibleConfigModal';
import { SourceAnalysisConfigModal } from './SourceAnalysisConfigModal';
import { AssetDesignConfigModal } from './AssetDesignConfigModal';
import { ProcessingTimer } from '../../SharedBlueprintComponents';

interface VisualStyleManagerProps {
    presets: MetonymyStylePreset[];
    activePresetId: string;
    onUpdatePresets: (newPresets: MetonymyStylePreset[]) => void;
    onSetActivePreset: (id: string) => void;
    onUpdatePresetsAndActive: (newPresets: MetonymyStylePreset[], newActiveId: string) => void;
    lang: BlueprintLanguage;
    themeAccent: string;
    isExpanded: boolean;
    onToggleExpand: (isExpanded: boolean) => void;
    sourceText: string;
}

export const VisualStyleManager: React.FC<VisualStyleManagerProps> = ({
    presets,
    activePresetId,
    onUpdatePresets,
    onSetActivePreset,
    onUpdatePresetsAndActive,
    lang,
    themeAccent,
    isExpanded,
    onToggleExpand,
    sourceText
}) => {
    const [displayLang, setDisplayLang] = useState<'CN' | 'EN'>('CN');
    const [sectionLangs, setSectionLangs] = useState<Record<'characters' | 'scenes' | 'props', 'CN' | 'EN'>>({
        characters: 'CN',
        scenes: 'CN',
        props: 'CN'
    });
    const [assetLangs, setAssetLangs] = useState<Record<string, 'CN' | 'EN'>>({});

    const getAssetLang = (assetId: string, type: 'characters' | 'scenes' | 'props') => {
        return assetLangs[assetId] || sectionLangs[type] || 'CN';
    };

    const toggleAssetLang = (assetId: string, type: 'characters' | 'scenes' | 'props') => {
        const current = getAssetLang(assetId, type);
        setAssetLangs(prev => ({ ...prev, [assetId]: current === 'CN' ? 'EN' : 'CN' }));
    };

    // SAFETY CHECK: Ensure activePreset exists, fallback to first if not
    const activePreset = presets.find(p => p.id === activePresetId) || presets[0];

    // SAFETY CHECK: If presets is empty (should not happen), return null to avoid crash
    if (!activePreset) return null;

    // Tone Image Ref
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Asset Image Ref & State tracking
    const assetFileInputRef = useRef<HTMLInputElement>(null);
    const [pendingAssetUpload, setPendingAssetUpload] = useState<{ type: 'characters' | 'scenes' | 'props', id: string } | null>(null);

    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisStartTime, setAnalysisStartTime] = useState<number | null>(null);
    const [isAnalyzingTone, setIsAnalyzingTone] = useState(false);
    const [toneAnalysisStartTime, setToneAnalysisStartTime] = useState<number | null>(null);

    const [isAnalyzingAsset, setIsAnalyzingAsset] = useState<string | null>(null);
    const [isBatchAnalyzing, setIsBatchAnalyzing] = useState<string | null>(null); // 'characters' | 'scenes' | 'props'

    const [isToneUploading, setIsToneUploading] = useState(false);
    const [isAssetUploadingMap, setIsAssetUploadingMap] = useState<Record<string, boolean>>({});

    const [copiedTone, setCopiedTone] = useState(false);
    const [copiedAssetId, setCopiedAssetId] = useState<string | null>(null);
    const [copiedAll, setCopiedAll] = useState(false);
    const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
    const [isSourceModalOpen, setIsSourceModalOpen] = useState(false);
    const [analysisMode, setAnalysisMode] = useState<'GLOBAL' | 'TONE'>('GLOBAL');
    const [assetConfigTarget, setAssetConfigTarget] = useState<{ type: 'characters' | 'scenes' | 'props', asset: MetonymyAssetInput } | null>(null);

    // Dynamic Color Base calculation for button styling (e.g. "cyan-400")
    const colorBase = themeAccent.replace('text-', '');

    const handleToggle = () => {
        onToggleExpand(!isExpanded);
    };

    const handleAddPreset = () => {
        const newId = Date.now().toString() + Math.random().toString(36).substr(2, 5);

        // SAFETY: Default assets if missing
        const currentAssets = activePreset.assets || { characters: [], scenes: [], props: [] };

        // Clone assets structure from active preset but clear analysis and images
        const clonedAssets = {
            characters: (currentAssets.characters || []).map(c => ({
                ...c,
                id: Date.now() + Math.random().toString(),
                imageUrl: undefined,
                analysis: { description: "", anchors: "", descriptionEn: "", anchorsEn: "" }
            })),
            scenes: (currentAssets.scenes || []).map(s => ({
                ...s,
                id: Date.now() + Math.random().toString(),
                imageUrl: undefined,
                analysis: { description: "", anchors: "", descriptionEn: "", anchorsEn: "" }
            })),
            props: (currentAssets.props || []).map(p => ({
                ...p,
                id: Date.now() + Math.random().toString(),
                imageUrl: undefined,
                analysis: { description: "", anchors: "", descriptionEn: "", anchorsEn: "" }
            }))
        };

        const newPreset: MetonymyStylePreset = {
            id: newId,
            name: lang === 'EN' ? `Style ${presets.length + 1}` : `风格 ${presets.length + 1}`,
            nameEn: `Style ${presets.length + 1}`,
            toneAnalysis: { lighting: "", texture: "", style: "", camera: "", palette: [] },
            assets: clonedAssets
        };
        onUpdatePresetsAndActive([...presets, newPreset], newId);
    };

    const handleDeletePreset = (e: React.MouseEvent, id?: string) => {
        e.stopPropagation();
        const targetId = id || activePresetId;
        if (targetId === 'original') return;
        if (presets.length <= 1) return;
        const newPresets = presets.filter(p => p.id !== targetId);
        onUpdatePresetsAndActive(newPresets, (targetId === activePresetId) ? newPresets[0].id : activePresetId);
    };

    const handleDeleteRefImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        updateActivePreset({ toneImage: undefined, toneAnalysis: { lighting: "", texture: "", style: "", camera: "", palette: [] } });
    };

    const updateActivePreset = (updates: Partial<MetonymyStylePreset>) => {
        const newPresets = presets.map(p => p.id === activePresetId ? { ...p, ...updates } : p);
        onUpdatePresets(newPresets);
    };

    // Handler for the main Tone Reference Image
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setIsToneUploading(true);
            try {
                const url = await supabaseDatabase.uploadImage(file);
                if (url) {
                    updateActivePreset({ toneImage: url });
                }
            } catch (err) {
                console.error("Upload failed:", err);
            } finally {
                setIsToneUploading(false);
            }
        }
        if (e.target) {
            e.target.value = '';
        }
    };

    // Handler to delete Tone Reference Image
    const handleDeleteToneImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        updateActivePreset({ toneImage: undefined });
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    // Handler for the Asset Grid Images
    const handleAssetFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && pendingAssetUpload) {
            const { type, id } = pendingAssetUpload;
            setIsAssetUploadingMap(prev => ({ ...prev, [id]: true }));
            try {
                const url = await supabaseDatabase.uploadImage(file);
                if (url) {
                    const assets = activePreset.assets || { characters: [], scenes: [], props: [] };
                    const next = { ...assets };
                    if (next[type]) {
                        const targetAsset = next[type].find(a => a.id === id);
                        if (targetAsset) {
                            const updatedAsset = { ...targetAsset, imageUrl: url };
                            next[type] = next[type].map(a => a.id === id ? updatedAsset : a);
                            updateActivePreset({ assets: next });
                        }
                    }
                }
            } catch (err) {
                console.error("Upload failed:", err);
            } finally {
                setIsAssetUploadingMap(prev => ({ ...prev, [id]: false }));
                setPendingAssetUpload(null);
            }
        }
        if (e.target) e.target.value = '';
    };

    // --- CORE LOGIC: REVERSE ENGINEER ASSET ---
    const handleReverseAsset = async (type: 'characters' | 'scenes' | 'props', asset: MetonymyAssetInput, hints: VisualBibleAnalysisHints) => {
        if (!asset.imageUrl) return;

        setIsAnalyzingAsset(asset.id);
        try {
            const apiType = type === 'characters' ? 'CHARACTER' : (type === 'scenes' ? 'SCENE' : 'PROP');
            const result = await analyzeAssetImage(asset.imageUrl, apiType, hints, asset.name || undefined);

            if (result) {
                const assets = activePreset.assets || { characters: [], scenes: [], props: [] };
                const next = { ...assets };
                if (next[type]) {
                    next[type] = next[type].map(a => a.id === asset.id ? {
                        ...a,
                        analysis: {
                            ...(a.analysis || {}),
                            description: result.description,
                            descriptionEn: result.descriptionEn,
                            anchors: result.anchors,
                            anchorsEn: result.anchorsEn,
                            designPrompt: result.designPrompt,
                            designPromptEn: result.designPromptEn,
                            conceptPrompt: result.conceptPrompt,
                            conceptPromptEn: result.conceptPromptEn
                        }
                    } : a);
                    updateActivePreset({ assets: next });
                }
            }
        } finally {
            setIsAnalyzingAsset(null);
        }
    };

    const handleCloseAssetDesign = (currentHints?: VisualBibleAnalysisHints) => {
        if (assetConfigTarget && currentHints) {
            const { type, asset } = assetConfigTarget;
            const updatedAssets = { ...activePreset.assets };
            updatedAssets[type] = updatedAssets[type].map(a =>
                a.id === asset.id ? { ...a, designConfig: currentHints } : a
            );
            updateActivePreset({ assets: updatedAssets });
        }
        setAssetConfigTarget(null);
    };

    const handleConfirmAssetDesign = async (hints: VisualBibleAnalysisHints) => {
        if (!assetConfigTarget) return;
        const { type, asset } = assetConfigTarget;

        // Always save hints
        const updatedAssets = { ...activePreset.assets };
        updatedAssets[type] = updatedAssets[type].map(a =>
            a.id === asset.id ? { ...a, designConfig: hints } : a
        );
        updateActivePreset({ assets: updatedAssets });

        setAssetConfigTarget(null);
        await handleReverseAsset(type, asset, hints);
    };

    const handleBatchAnalyze = async (type: 'characters' | 'scenes' | 'props') => {
        const assets = activePreset.assets || { characters: [], scenes: [], props: [] };
        const list = assets[type] || [];
        const toAnalyze = list.filter(a => a.imageUrl);
        if (toAnalyze.length === 0) return;

        setIsBatchAnalyzing(type);
        try {
            const promises = toAnalyze.map(async (asset) => {
                const apiType = type === 'characters' ? 'CHARACTER' : (type === 'scenes' ? 'SCENE' : 'PROP');
                const result = await analyzeAssetImage(asset.imageUrl!, apiType, asset.designConfig);
                return { id: asset.id, result };
            });

            const results = await Promise.all(promises);
            const next = { ...assets };

            results.forEach(({ id, result }) => {
                if (result) {
                    next[type] = next[type].map(a => a.id === id ? {
                        ...a,
                        analysis: {
                            ...(a.analysis || {}),
                            description: result.description,
                            descriptionEn: result.descriptionEn,
                            anchors: result.anchors,
                            anchorsEn: result.anchorsEn,
                            designPrompt: result.designPrompt,
                            designPromptEn: result.designPromptEn,
                            conceptPrompt: result.conceptPrompt,
                            conceptPromptEn: result.conceptPromptEn
                        }
                    } : a);
                }
            });
            updateActivePreset({ assets: next });
        } finally {
            setIsBatchAnalyzing(null);
        }
    };

    const triggerAssetUpload = (type: 'characters' | 'scenes' | 'props', id: string) => {
        setPendingAssetUpload({ type, id });
        if (assetFileInputRef.current) {
            assetFileInputRef.current.click();
        }
    };

    const handleAnalyzeTone = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!activePreset.toneImage) return;
        setAnalysisMode('TONE');
        setIsConfigModalOpen(true);
    };

    const performToneAnalysis = async (hints: VisualBibleAnalysisHints) => {
        setIsAnalyzingTone(true);
        setToneAnalysisStartTime(Date.now());
        try {
            const result = await analyzeToneImage(activePreset.toneImage!, hints);
            if (result) {
                const updates: Partial<MetonymyStylePreset> = { toneAnalysis: result };
                if (result.styleNameCN) updates.name = result.styleNameCN;
                if (result.styleNameEN) updates.nameEn = result.styleNameEN;
                updateActivePreset(updates);
            }
        } finally {
            setIsAnalyzingTone(false);
            setToneAnalysisStartTime(null);
        }
    };

    const handleCopyTone = (e: React.MouseEvent) => {
        e.stopPropagation();
        const t = activePreset.toneAnalysis;
        if (!t) return;

        let text = "";
        if (displayLang === 'CN') {
            text = [t.style, t.lighting, t.texture, t.camera].filter(Boolean).join('；');
        } else {
            text = [t.styleEn, t.lightingEn, t.textureEn, t.cameraEn].filter(Boolean).join('; ');
        }

        navigator.clipboard.writeText(text);
        setCopiedTone(true);
        setTimeout(() => setCopiedTone(false), 2000);
    };

    const handleCopyAsset = (type: string, asset: MetonymyAssetInput) => {
        const currentLang = getAssetLang(asset.id, type as any);
        const name = currentLang === 'CN' ? asset.name : (asset.nameEn || asset.name);
        const anchors = currentLang === 'CN' ? asset.analysis?.anchors : asset.analysis?.anchorsEn;
        const desc = currentLang === 'CN' ? asset.analysis?.description : asset.analysis?.descriptionEn;

        let typeLabel = "ASSET";
        if (type === 'characters') typeLabel = currentLang === 'CN' ? "主体" : "SUBJECT";
        if (type === 'scenes') typeLabel = currentLang === 'CN' ? "场景" : "SCENE";
        if (type === 'props') typeLabel = currentLang === 'CN' ? "道具" : "PROP";

        const designPrompt = currentLang === 'CN' ? asset.analysis?.designPrompt : asset.analysis?.designPromptEn;

        const text = `【${typeLabel}：${name} ${anchors ? `(${anchors})` : ''}】 ${desc ? `(${desc})` : ''}
${designPrompt ? `Design Prompt: ${designPrompt}` : ''}`;

        navigator.clipboard.writeText(text);
        setCopiedAssetId(asset.id);
        setTimeout(() => setCopiedAssetId(null), 2000);
    };

    const handleCopyAll = (e: React.MouseEvent) => {
        e.stopPropagation();
        // ... simplified copy logic for now
        const text = "Full export not implemented in this simplified view.";
        navigator.clipboard.writeText(text);
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2000);
    };

    const handleCopySection = (type: 'characters' | 'scenes' | 'props') => {
        const assets = activePreset.assets || { characters: [], scenes: [], props: [] };
        const list = assets[type] || [];
        const sectionLang = sectionLangs[type];

        if (list.length === 0) return;

        const container = list.map(asset => {
            const name = sectionLang === 'CN' ? asset.name : (asset.nameEn || asset.name);
            const anchors = sectionLang === 'CN' ? asset.analysis?.anchors : asset.analysis?.anchorsEn;
            const desc = sectionLang === 'CN' ? asset.analysis?.description : asset.analysis?.descriptionEn;
            const designPrompt = sectionLang === 'CN' ? asset.analysis?.designPrompt : asset.analysis?.designPromptEn;

            let label = "SUBJECT";
            if (type === 'scenes') label = "SCENE";
            if (type === 'props') label = "PROP";

            return `【${label}：${name}${anchors ? ` (${anchors})` : ''}】\n${desc ? `Description: ${desc}\n` : ''}${designPrompt ? `Design Prompt: ${designPrompt}\n` : ''}`;
        }).join('\n---\n');

        navigator.clipboard.writeText(container);
        setCopiedAssetId(`${type}_all`);
        setTimeout(() => setCopiedAssetId(null), 2000);
    };

    const handleCopyGlobal = (e: React.MouseEvent) => {
        e.stopPropagation();

        const langToUse = lang === 'EN' ? 'EN' : 'CN';
        const tone = activePreset.id === 'original'
            ? (langToUse === 'CN' ? "原文风格：以原始文本描述为准" : "Original Style: Based on original text description")
            : `【TONE & STYLE: ${langToUse === 'CN' ? activePreset.name : (activePreset.nameEn || activePreset.name)}】\n` +
            `Lighting: ${activePreset.toneAnalysis?.lighting || ''}\n` +
            `Texture: ${activePreset.toneAnalysis?.texture || ''}\n` +
            `Style: ${activePreset.toneAnalysis?.style || ''}\n` +
            `Camera: ${activePreset.toneAnalysis?.camera || ''}\n` +
            `Palette: ${(activePreset.toneAnalysis?.palette || []).filter(c => c).join(', ')}`;

        const assets = activePreset.assets || { characters: [], scenes: [], props: [] };

        const processList = (list: any[], label: string) => {
            if (list.length === 0) return "";
            return `\n\n--- ${label} ---\n` + list.map(asset => {
                const name = langToUse === 'CN' ? asset.name : (asset.nameEn || asset.name);
                const anchors = langToUse === 'CN' ? asset.analysis?.anchors : asset.analysis?.anchorsEn;
                const desc = langToUse === 'CN' ? asset.analysis?.description : asset.analysis?.descriptionEn;
                const designPrompt = langToUse === 'CN' ? asset.analysis?.designPrompt : asset.analysis?.designPromptEn;
                const conceptPrompt = langToUse === 'CN' ? asset.analysis?.conceptPrompt : asset.analysis?.conceptPromptEn;

                return `\n【${name}${anchors ? ` (${anchors})` : ''}】\n` +
                    `${desc ? `Description: ${desc}\n` : ''}` +
                    `${designPrompt ? `Design Prompt: ${designPrompt}\n` : ''}` +
                    `${conceptPrompt ? `Concept Prompt: ${conceptPrompt}\n` : ''}`;
            }).join('\n');
        };

        const charactersSection = processList(assets.characters || [], langToUse === 'CN' ? "核心角色资产" : "CHARACTER ASSETS");
        const scenesSection = processList(assets.scenes || [], langToUse === 'CN' ? "核心场景资产" : "SCENE ASSETS");
        const propsSection = processList(assets.props || [], langToUse === 'CN' ? "核心道具资产" : "PROP ASSETS");

        const fullContent = `${tone}${charactersSection}${scenesSection}${propsSection}`;
        navigator.clipboard.writeText(fullContent);

        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2000);
    };

    const handleAnalyzeAll = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activePreset.id === 'original') {
            setIsSourceModalOpen(true);
        } else {
            // For image styles, now only analyze the reference image style per user request
            if (!activePreset.toneImage) {
                alert(lang === 'EN' ? "Please upload a reference image first." : "请先上传参考图。");
                return;
            }
            await handleAnalyzeTone(e);
        }
    };

    const handleConfirmSourceAnalysis = async (hints: VisualBibleAnalysisHints) => {
        setIsSourceModalOpen(false);
        await performGlobalAnalysis(hints);
    };

    const handleConfirmAnalysis = async (hints: VisualBibleAnalysisHints) => {
        setIsConfigModalOpen(false);

        if (analysisMode === 'TONE') {
            await performToneAnalysis(hints);
            return;
        }

        await performGlobalAnalysis(hints);
    };

    const performGlobalAnalysis = async (hints: VisualBibleAnalysisHints) => {
        setIsAnalyzing(true);
        setAnalysisStartTime(Date.now());

        try {
            if (activePreset.id === 'original') {
                if (!sourceText) {
                    alert(lang === 'EN' ? "No source text available for analysis." : "暂无源文本可供分析。");
                    setIsAnalyzing(false);
                    return;
                }
                const result = await generateTextBasedVisualBible(sourceText, hints);
                if (result) {
                    updateActivePreset({
                        toneAnalysis: result.toneAnalysis,
                        assets: result.assets
                    });
                } else {
                    alert(lang === 'EN' ? "Analysis failed." : "分析失败。");
                }
            } else {
                const updatedPreset = await analyzeImageBasedVisualBible(activePreset, hints);
                updateActivePreset({
                    name: updatedPreset.name,
                    nameEn: updatedPreset.nameEn,
                    toneAnalysis: updatedPreset.toneAnalysis,
                    assets: updatedPreset.assets
                });
            }
        } catch (e) {
            console.error(e);
            alert(lang === 'EN' ? "Error during analysis." : "分析过程中发生错误。");
        } finally {
            setIsAnalyzing(false);
            setAnalysisStartTime(null);
        }
    };

    // Ensure palette has 7 slots
    const currentPalette = activePreset.toneAnalysis?.palette || Array(7).fill("");
    while (currentPalette.length < 7) currentPalette.push("");

    const updatePalette = (index: number, val: string) => {
        const newPalette = [...currentPalette];
        newPalette[index] = val;
        const currentTone = activePreset.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] };
        updateActivePreset({ toneAnalysis: { ...currentTone, palette: newPalette } });
    };

    const renderAssetGrid = (type: 'characters' | 'scenes' | 'props', label: string, Icon: any) => {
        const assets = activePreset.assets || { characters: [], scenes: [], props: [] };
        const list = assets[type] || [];
        const currentLang = sectionLangs[type];

        return (
            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-100 uppercase tracking-widest">
                        <Icon size={14} className={themeAccent} />
                        {label}
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Language Toggle */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const nextLang = currentLang === 'CN' ? 'EN' : 'CN';
                                setSectionLangs(prev => ({ ...prev, [type]: nextLang }));
                                // Clear individual asset overrides to force section-wide sync
                                const nextAssetLangs = { ...assetLangs };
                                list.forEach(a => delete nextAssetLangs[a.id]);
                                setAssetLangs(nextAssetLangs);
                            }}
                            className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white transition-all font-bold text-[10px] w-5 h-5 flex items-center justify-center outline-none"
                            title={lang === 'EN' ? "Toggle Section Language" : "切换本类目语言"}
                        >
                            {currentLang === 'CN' ? '中' : 'EN'}
                        </button>

                        {/* Copy Section Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); handleCopySection(type); }}
                            className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-100 hover:text-white transition-all duration-100 shadow-sm"
                            title={lang === 'EN' ? "Copy Entire Section" : "一键复制当前类目全部内容"}
                        >
                            {copiedAssetId === `${type}_all` ? <Check size={11} className="text-green-500" /> : <Copy size={11} />}
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const next = { ...assets };
                                // SAFETY: Initialize array if missing
                                if (!next[type]) next[type] = [];
                                next[type] = [...next[type], { id: Date.now().toString() + Math.random().toString(36).substr(2, 5), name: "", type: type.toUpperCase() as any, analysis: { description: "", anchors: "" } }];
                                updateActivePreset({ assets: next });
                            }}
                            className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-100 hover:text-white transition-all w-5 h-5 flex items-center justify-center"
                        >
                            <Plus size={12} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {list.map(asset => {
                        const currentAssetLang = getAssetLang(asset.id, type);
                        return (
                            <div key={asset.id} className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden flex flex-col group relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const next = { ...assets };
                                        next[type] = next[type].filter(a => a.id !== asset.id);
                                        updateActivePreset({ assets: next });
                                    }}
                                    className="absolute top-2 right-2 p-1 rounded bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-red-500/50 text-zinc-200 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-100 z-30 w-5 h-5 flex items-center justify-center shadow-lg"
                                    title={lang === 'EN' ? "Delete Asset" : "删除资产"}
                                >
                                    <Trash2 size={11} />
                                </button>

                                {/* Image Container */}
                                <div
                                    className="aspect-video bg-black relative cursor-pointer overflow-hidden flex items-center justify-center group/img"
                                    onClick={() => triggerAssetUpload(type, asset.id)}
                                >
                                    {isAssetUploadingMap[asset.id] ? (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                                            <Loader2 size={24} className={`animate-spin ${themeAccent} mb-2`} />
                                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{lang === 'EN' ? "Uploading..." : "上传中..."}</span>
                                        </div>
                                    ) : null}
                                    {isAssetUploadingMap[asset.id] ? (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                                            <Loader2 size={24} className={`animate-spin ${themeAccent} mb-2`} />
                                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{lang === 'EN' ? "Uploading..." : "上传中..."}</span>
                                        </div>
                                    ) : null}
                                    {asset.imageUrl ? (
                                        <img src={asset.imageUrl} className="w-full h-full object-contain" alt={asset.name} />
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 gap-2">
                                            <ImageIcon size={32} />
                                            <span className="text-xs uppercase font-bold tracking-widest">{lang === 'EN' ? "Upload" : "上传"}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-3 space-y-3 flex-1 flex flex-col">
                                    {/* Actions Row */}
                                    <div className="flex items-center gap-1.5">
                                        {asset.imageUrl && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setAssetConfigTarget({ type, asset });
                                                }}
                                                disabled={isAnalyzingAsset === asset.id}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all text-[11px] font-bold uppercase tracking-wider bg-${colorBase}/10 text-${colorBase} hover:bg-${colorBase}/20 border border-${colorBase}/30 disabled:opacity-50 disabled:cursor-not-allowed`}
                                                title={lang === 'EN' ? "Asset Design" : "资产设计"}
                                            >
                                                {isAnalyzingAsset === asset.id ? <Loader2 size={12} className="animate-spin" /> : <ScanEye size={12} />}
                                                <span className="whitespace-nowrap">{lang === 'EN' ? "ASSET DESIGN" : "资产设计"}</span>
                                            </button>
                                        )}
                                        <div className="flex-1"></div>

                                        {/* Copy Design Prompt */}
                                        {asset.analysis?.designPrompt && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const p = currentAssetLang === 'CN' ? asset.analysis?.designPrompt : asset.analysis?.designPromptEn;
                                                    if (p) navigator.clipboard.writeText(p);
                                                    setCopiedAssetId(asset.id + "_prompt");
                                                    setTimeout(() => setCopiedAssetId(null), 2000);
                                                }}
                                                className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-100 hover:text-white transition-all w-5 h-5 flex items-center justify-center outline-none shadow-sm"
                                                title={lang === 'EN' ? "Copy Design Prompt" : "复制设计图提示词"}
                                            >
                                                {copiedAssetId === asset.id + "_prompt" ? <Check size={11} className="text-green-500" /> : <Paintbrush size={11} />}
                                            </button>
                                        )}

                                        {/* Copy Concept Prompt */}
                                        {asset.analysis?.conceptPrompt && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const p = currentAssetLang === 'CN' ? asset.analysis?.conceptPrompt : asset.analysis?.conceptPromptEn;
                                                    if (p) navigator.clipboard.writeText(p);
                                                    setCopiedAssetId(asset.id + "_concept");
                                                    setTimeout(() => setCopiedAssetId(null), 2000);
                                                }}
                                                className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-100 hover:text-white transition-all w-5 h-5 flex items-center justify-center outline-none shadow-sm"
                                                title={lang === 'EN' ? "Copy Concept Prompt" : "复制概念图提示词"}
                                            >
                                                {copiedAssetId === asset.id + "_concept" ? <Check size={11} className="text-green-500" /> : <Layers size={11} />}
                                            </button>
                                        )}

                                        {/* Copy Subject Desc */}
                                        {(asset.analysis?.description || asset.analysis?.descriptionEn) && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const d = currentAssetLang === 'CN' ? asset.analysis?.description : asset.analysis?.descriptionEn;
                                                    if (d) navigator.clipboard.writeText(d);
                                                    setCopiedAssetId(asset.id + "_desc");
                                                    setTimeout(() => setCopiedAssetId(null), 2000);
                                                }}
                                                className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-100 hover:text-white transition-all w-5 h-5 flex items-center justify-center outline-none shadow-sm"
                                                title={lang === 'EN' ? "Copy Description" : "复制主体描述"}
                                            >
                                                {copiedAssetId === asset.id + "_desc" ? <Check size={11} className="text-green-500" /> : <Copy size={11} />}
                                            </button>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 border-b border-zinc-800/50 pb-1">
                                        <input
                                            value={currentAssetLang === 'CN' ? asset.name : (asset.nameEn || asset.name)}
                                            onChange={(e) => {
                                                const next = { ...assets };
                                                next[type] = next[type].map(a => a.id === asset.id ? { ...a, [currentAssetLang === 'CN' ? 'name' : 'nameEn']: e.target.value } : a);
                                                updateActivePreset({ assets: next });
                                            }}
                                            className="bg-transparent text-sm font-bold text-white focus:outline-none w-full"
                                            placeholder={lang === 'EN' ? (currentAssetLang === 'CN' ? "Name (中)..." : "Name (EN)...") : (currentAssetLang === 'CN' ? "名称 (中)..." : "名称 (英)...")}
                                        />
                                    </div>



                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-[9px] font-bold text-zinc-100 uppercase tracking-widest block">
                                                {lang === 'EN' ? `Design Sheet Prompt` : `设计图提示词`}
                                            </span>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); toggleAssetLang(asset.id, type); }}
                                                className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-100 hover:text-white transition-all font-bold text-[10px] w-5 h-5 flex items-center justify-center outline-none"
                                                title={lang === 'EN' ? "Toggle Language" : "切换中英"}
                                            >
                                                {currentAssetLang === 'CN' ? '中' : 'EN'}
                                            </button>
                                        </div>
                                        <textarea
                                            value={currentAssetLang === 'CN' ? (asset.analysis?.designPrompt || "") : (asset.analysis?.designPromptEn || "")}
                                            onChange={(e) => {
                                                const next = { ...assets };
                                                next[type] = next[type].map(a => a.id === asset.id ? { ...a, analysis: { ...(a.analysis || { description: "", anchors: "" }), [currentAssetLang === 'CN' ? 'designPrompt' : 'designPromptEn']: e.target.value } } : a);
                                                updateActivePreset({ assets: next });
                                            }}
                                            className="w-full bg-zinc-950/50 border border-zinc-800 rounded p-1.5 text-[10px] text-zinc-100 resize-none focus:outline-none focus:border-zinc-700 leading-relaxed h-16 custom-scrollbar"
                                            placeholder={lang === 'EN' ? "Prompt for generating design sheets..." : "用于生成设计图的提示词..."}
                                        />
                                    </div>

                                    {type !== 'props' && (
                                        <div className="space-y-1">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="text-[11px] font-bold text-white uppercase tracking-widest block">
                                                    {lang === 'EN' ? `Concept Art Prompt` : `概念图提示词`}
                                                </span>
                                            </div>
                                            <textarea
                                                value={currentAssetLang === 'CN' ? (asset.analysis?.conceptPrompt || "") : (asset.analysis?.conceptPromptEn || "")}
                                                onChange={(e) => {
                                                    const next = { ...assets };
                                                    next[type] = next[type].map(a => a.id === asset.id ? { ...a, analysis: { ...(a.analysis || { description: "", anchors: "" }), [currentAssetLang === 'CN' ? 'conceptPrompt' : 'conceptPromptEn']: e.target.value } } : a);
                                                    updateActivePreset({ assets: next });
                                                }}
                                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded p-1.5 text-[10px] text-zinc-100 resize-none focus:outline-none focus:border-zinc-700 leading-relaxed h-16 custom-scrollbar"
                                                placeholder={lang === 'EN' ? "Prompt for generating concept art..." : "用于生成概念图的提示词..."}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                    {list.length < 4 && (
                        <div
                            onClick={() => {
                                const next = { ...assets };
                                if (!next[type]) next[type] = [];
                                next[type] = [...next[type], { id: Date.now().toString() + Math.random().toString(36).substr(2, 5), name: "", type: type.toUpperCase() as any, analysis: { description: "", anchors: "" } }];
                                updateActivePreset({ assets: next });
                            }}
                            className="aspect-video border border-dashed border-zinc-800 rounded-lg flex flex-col items-center justify-center text-zinc-500 hover:text-zinc-200 hover:border-zinc-500 transition-all cursor-pointer group"
                        >
                            <Plus size={32} className="group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold uppercase tracking-widest mt-2">{lang === 'EN' ? "Add" : "添加"}</span>
                        </div>
                    )}
                </div>
            </div >
        );
    };

    return (
        <div className={`bg-[#0a0a0a] border-b border-zinc-800 flex flex-col shrink-0 ${isExpanded ? 'h-full' : ''}`}>
            <div
                onClick={handleToggle}
                className="h-16 px-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors border-b border-zinc-900 sticky top-0 bg-[#0a0a0a] z-20"
            >
                <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 ${themeAccent}`}>
                        <BookOpen size={18} />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-white uppercase tracking-widest">
                            {lang === 'EN' ? "Core Visual Bible" : "核心视觉圣经"}
                        </h3>
                        <p className="text-[11px] text-zinc-300 font-mono uppercase tracking-[0.2em] mt-1">
                            {lang === 'EN' ? "Unified Visual Language & Assets Specification" : "统一视觉语言与资产规范"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-zinc-300 hover:text-white transition-colors">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>
            </div>

            {isExpanded && (
                <div className="animate-in slide-in-from-top-2 duration-300 flex-1 overflow-y-auto custom-scrollbar bg-black flex flex-col">
                    {/* STICKY HEADER FOR TABS AND GLOBAL COPY */}
                    <div className="sticky top-0 z-30 flex items-center bg-black border-b border-zinc-800 shrink-0">
                        {/* PRESET TABS */}
                        <div className="flex-1 flex overflow-x-auto no-scrollbar px-4 items-center">
                            {presets.map(preset => {
                                const isTextStyle = preset.id === 'original';
                                const displayName = isTextStyle ? (lang === 'EN' ? "Original Style" : "原文风格") : (displayLang === 'CN' ? preset.name : (preset.nameEn || preset.name));
                                const isActive = activePresetId === preset.id;

                                return (
                                    <div
                                        key={preset.id}
                                        onClick={() => onSetActivePreset(preset.id)}
                                        className={`group relative flex items-center py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${isTextStyle ? 'px-4' : 'pl-4 pr-1.5'} ${isActive ? `${themeAccent} border-current bg-black` : 'text-zinc-400 border-transparent hover:text-zinc-100 bg-black'}`}
                                    >
                                        <span>{displayName}</span>

                                        {!isTextStyle && (
                                            <button
                                                onClick={(e) => handleDeletePreset(e, preset.id)}
                                                className="ml-1 p-1 rounded bg-zinc-900 border border-zinc-800 opacity-0 group-hover:opacity-100 hover:border-red-500/50 text-zinc-100 hover:text-red-500 transition-all w-5 h-5 flex items-center justify-center"
                                                title={lang === 'EN' ? "Delete Style" : "删除风格"}
                                            >
                                                <Trash2 size={10} />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                            <button onClick={handleAddPreset} className="px-4 py-3 text-zinc-400 hover:text-white transition-colors border-b-2 border-transparent">
                                <Plus size={14} />
                            </button>
                        </div>

                        {/* GLOBAL COPY BUTTON */}
                        <button
                            onClick={handleCopyGlobal}
                            className="flex items-center gap-1.5 px-4 h-[44px] bg-zinc-950 hover:bg-zinc-900 text-zinc-100 hover:text-white transition-all border-l border-zinc-800 group outline-none"
                        >
                            {copiedAll ? (
                                <Check size={12} className="text-green-500 animate-in zoom-in" />
                            ) : (
                                <Copy size={12} className="group-hover:scale-110 transition-transform" />
                            )}
                            <span className="text-[11px] font-bold uppercase tracking-widest">{lang === 'EN' ? "Global Copy" : "全局复制"}</span>
                        </button>
                    </div>

                    <div className="p-4 space-y-4 flex-1 pb-32">
                        {/* New Layout: Left Column (Title/Ref Image) + Right Column (Vertical Palette + Text Areas) */}
                        <div className="flex flex-col md:flex-row gap-4 items-stretch h-64">

                            {/* LEFT COLUMN: Title, Actions, Reference Image */}
                            <div className="w-full md:w-1/2 min-w-[300px] flex flex-col gap-2 h-full">
                                <div className="flex flex-col gap-1 shrink-0">
                                    <div className="flex items-center gap-2">
                                        <input
                                            value={activePreset.id === 'original' ? (lang === 'EN' ? "Original Style" : "原文风格") : (displayLang === 'CN' ? activePreset.name : (activePreset.nameEn || activePreset.name))}
                                            onChange={(e) => updateActivePreset({ [displayLang === 'CN' ? 'name' : 'nameEn']: e.target.value })}
                                            disabled={activePreset.id === 'original'}
                                            className="bg-transparent text-sm font-serif text-white font-bold focus:outline-none border-b border-transparent focus:border-zinc-700 w-auto min-w-0"
                                        />

                                        <div className="flex-1" />

                                        {/* Global Actions */}
                                        <div className="flex items-center gap-1.5 shrink-0">
                                            <button
                                                onClick={handleAnalyzeAll}
                                                disabled={isAnalyzing || isAnalyzingTone}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all text-[11px] font-bold uppercase tracking-wider bg-${colorBase}/10 text-${colorBase} hover:bg-${colorBase}/20 border border-${colorBase}/30 disabled:opacity-50 disabled:cursor-not-allowed`}
                                                title={lang === 'EN' ? "Reference Reverse" : (activePreset.id === 'original' ? "参考文本反推" : "参考图视觉反推")}
                                            >
                                                {isAnalyzing || isAnalyzingTone ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                                                <span>{lang === 'EN' ? "Ref Reverse" : (activePreset.id === 'original' ? "参考文本反推" : "参考图视觉反推")}</span>
                                            </button>

                                            {/* Timer */}
                                            {isAnalyzing && analysisStartTime && (
                                                <div className="ml-2">
                                                    <ProcessingTimer startTime={analysisStartTime} />
                                                </div>
                                            )}

                                            <button
                                                onClick={(e) => { e.stopPropagation(); setDisplayLang(prev => prev === 'CN' ? 'EN' : 'CN'); }}
                                                className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-100 hover:text-white transition-all font-bold text-[10px] w-5 h-5 flex items-center justify-center outline-none"
                                                title={lang === 'EN' ? "Toggle Language" : "切换中英"}
                                            >
                                                {displayLang === 'CN' ? '中' : 'EN'}
                                            </button>

                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleCopyAll(e); }}
                                                className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-100 hover:text-white transition-all w-5 h-5 flex items-center justify-center outline-none shadow-sm"
                                                title={lang === 'EN' ? "Copy All" : "一键复制"}
                                            >
                                                {copiedAll ? <Check size={11} className="text-green-500" /> : <Copy size={11} />}
                                            </button>

                                            <button
                                                onClick={handleDeleteRefImage}
                                                className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:text-red-400 transition-all w-5 h-5 flex items-center justify-center outline-none shadow-sm"
                                                title={lang === 'EN' ? "Delete Reference Image" : "删除参考图"}
                                            >
                                                <Trash2 size={11} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Reference Image Container - Stretches to fill height */}
                                <div
                                    className="flex-1 bg-black rounded-lg border border-zinc-800 relative group overflow-hidden cursor-pointer flex items-center justify-center aspect-[4/3] h-full"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    {isToneUploading ? (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                                            <Loader2 size={24} className={`animate-spin ${themeAccent} mb-2`} />
                                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{lang === 'EN' ? "Uploading..." : "上传中..."}</span>
                                        </div>
                                    ) : null}
                                    {activePreset.toneImage ? (
                                        <img src={activePreset.toneImage} className="w-full h-full object-contain opacity-100 transition-opacity" alt="Tone Reference" />
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 gap-2">
                                            <ImageIcon size={32} />
                                            <span className="text-xs uppercase font-bold tracking-widest">{lang === 'EN' ? "Upload Reference" : "点击上传参考图"}</span>
                                        </div>
                                    )}
                                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Vertical Palette + Text Areas */}
                            <div className="flex-1 flex gap-2 h-full">
                                {/* 1. Vertical Color Palette */}
                                <div className="w-6 flex flex-col gap-0.5 h-full bg-zinc-900/30 rounded border border-zinc-800 p-0.5">
                                    <div className="h-4 flex items-center justify-center mb-0.5">
                                        <Palette size={10} className="text-zinc-300" />
                                    </div>
                                    {currentPalette.map((color, i) => (
                                        <div key={i} className="flex-1 rounded-sm relative group cursor-pointer border border-white/5 w-full min-h-[0.5rem]" style={{ backgroundColor: color || '#111' }}>
                                            <input
                                                type="color"
                                                value={color || "#000000"}
                                                onChange={(e) => updatePalette(i, e.target.value)}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-auto z-10"
                                            />
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => updateActivePreset({ toneAnalysis: { ...(activePreset.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] }), palette: Array(7).fill("") } })}
                                        className="mt-0.5 h-4 flex items-center justify-center text-zinc-400 hover:text-red-400 transition-colors"
                                        title={lang === 'EN' ? "Clear Colors" : "清空色板"}
                                    >
                                        <Eraser size={10} />
                                    </button>
                                </div>

                                {/* 2. The 4 Text Areas Grid - Now stretches to fill remaining space */}
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1 h-full">
                                    {/* Art & Style */}
                                    <div className="bg-black/20 p-1 rounded border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col h-full overflow-hidden">
                                        <div className="text-[11px] font-bold text-zinc-400 uppercase mb-0.5 flex items-center gap-1 shrink-0">
                                            <Paintbrush size={10} /> {lang === 'EN' ? "Art & Style" : "艺术与风格"}
                                        </div>
                                        <textarea
                                            value={displayLang === 'CN' ? ((activePreset.toneAnalysis as any)?.style || "") : ((activePreset.toneAnalysis as any)?.styleEn || (activePreset.toneAnalysis as any)?.style || "")}
                                            onChange={(e) => {
                                                const currentTone = activePreset.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] };
                                                updateActivePreset({ toneAnalysis: { ...currentTone, [displayLang === 'CN' ? 'style' : 'styleEn']: e.target.value } });
                                            }}
                                            placeholder={lang === 'EN' ? "Director, Art Movement..." : "导演风格，艺术流派..."}
                                            className="w-full h-full bg-transparent text-sm text-white resize-none focus:outline-none placeholder-zinc-500 leading-tight custom-scrollbar"
                                        />
                                    </div>

                                    {/* Light & Atmosphere */}
                                    <div className="bg-black/20 p-1 rounded border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col h-full overflow-hidden">
                                        <div className="text-[11px] font-bold text-zinc-400 uppercase mb-0.5 flex items-center gap-1 shrink-0">
                                            <Zap size={10} /> {lang === 'EN' ? "Light & Atmosphere" : "光影与氛围"}
                                        </div>
                                        <textarea
                                            value={displayLang === 'CN' ? ((activePreset.toneAnalysis as any)?.lighting || "") : ((activePreset.toneAnalysis as any)?.lightingEn || (activePreset.toneAnalysis as any)?.lighting || "")}
                                            onChange={(e) => {
                                                const currentTone = activePreset.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] };
                                                updateActivePreset({ toneAnalysis: { ...currentTone, [displayLang === 'CN' ? 'lighting' : 'lightingEn']: e.target.value } });
                                            }}
                                            placeholder={lang === 'EN' ? "Temp, Tint, Range..." : "色温, 色调, 影调..."}
                                            className="w-full h-full bg-transparent text-sm text-white resize-none focus:outline-none placeholder-zinc-500 leading-tight custom-scrollbar"
                                        />
                                    </div>

                                    {/* Medium & Format */}
                                    <div className="bg-black/20 p-1 rounded border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col h-full overflow-hidden">
                                        <div className="text-[11px] font-bold text-zinc-400 uppercase mb-0.5 flex items-center gap-1 shrink-0">
                                            <Camera size={10} /> {lang === 'EN' ? "Medium & Format" : "媒介与格式"}
                                        </div>
                                        <textarea
                                            value={displayLang === 'CN' ? ((activePreset.toneAnalysis as any)?.camera || "") : ((activePreset.toneAnalysis as any)?.cameraEn || (activePreset.toneAnalysis as any)?.camera || "")}
                                            onChange={(e) => {
                                                const currentTone = activePreset.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] };
                                                updateActivePreset({ toneAnalysis: { ...currentTone, [displayLang === 'CN' ? 'camera' : 'cameraEn']: e.target.value } });
                                            }}
                                            placeholder={lang === 'EN' ? "Film Stock, IMAX..." : "胶片型号，IMAX..."}
                                            className="w-full h-full bg-transparent text-sm text-white resize-none focus:outline-none placeholder-zinc-500 leading-tight custom-scrollbar"
                                        />
                                    </div>

                                    {/* Texture & Character */}
                                    <div className="bg-black/20 p-1 rounded border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col h-full overflow-hidden">
                                        <div className="text-[11px] font-bold text-zinc-400 uppercase mb-0.5 flex items-center gap-1 shrink-0">
                                            <Layers size={10} /> {lang === 'EN' ? "Texture & Character" : "质感与特征"}
                                        </div>
                                        <textarea
                                            value={displayLang === 'CN' ? ((activePreset.toneAnalysis as any)?.texture || "") : ((activePreset.toneAnalysis as any)?.textureEn || (activePreset.toneAnalysis as any)?.texture || "")}
                                            onChange={(e) => {
                                                const currentTone = activePreset.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] };
                                                updateActivePreset({ toneAnalysis: { ...currentTone, [displayLang === 'CN' ? 'texture' : 'textureEn']: e.target.value } });
                                            }}
                                            placeholder={lang === 'EN' ? "Grain, Halation..." : "颗粒感，光晕..."}
                                            className="w-full h-full bg-transparent text-sm text-white resize-none focus:outline-none placeholder-zinc-500 leading-tight custom-scrollbar"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-12 pt-6">
                            {renderAssetGrid('characters', lang === 'EN' ? "Characters" : "核心角色资产", User)}
                            {renderAssetGrid('scenes', lang === 'EN' ? "Scenes" : "核心场景资产", MapPin)}
                            {renderAssetGrid('props', lang === 'EN' ? "Props" : "核心道具资产", Box)}
                        </div>

                        {/* Hidden Input for Asset Grid Uploads */}
                        <input
                            type="file"
                            ref={assetFileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleAssetFileChange}
                        />
                    </div>
                </div>
            )}

            <AssetDesignConfigModal
                isOpen={!!assetConfigTarget}
                onClose={handleCloseAssetDesign}
                onConfirm={handleConfirmAssetDesign}
                lang={lang === 'EN' ? 'EN' : 'CN'}
                themeAccent={themeAccent}
                initialHints={assetConfigTarget?.asset?.designConfig}
                assetType={assetConfigTarget?.type}
            />

            <VisualBibleConfigModal
                isOpen={isConfigModalOpen}
                onClose={() => setIsConfigModalOpen(false)}
                onConfirm={handleConfirmAnalysis}
                lang={lang === 'EN' ? 'EN' : 'CN'}
                themeAccent={themeAccent}
            />

            <SourceAnalysisConfigModal
                isOpen={isSourceModalOpen}
                onClose={() => setIsSourceModalOpen(false)}
                onConfirm={handleConfirmSourceAnalysis}
                lang={lang === 'EN' ? 'EN' : 'CN'}
                themeAccent={themeAccent}
            />
        </div>
    );
};
