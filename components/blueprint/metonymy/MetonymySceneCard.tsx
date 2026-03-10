
import React, { useState, useMemo, useEffect } from 'react';
import {
    GripVertical, ChevronRight, ChevronDown, Eye, Trash2,
    FileText, Edit3, Wand2, Globe, Sparkles, Video, Zap,
    Link, LayoutTemplate, X, CheckCircle2, Image as ImageIcon, Aperture,
    List, Grid, Table as TableIcon, ChevronsDown, ChevronsUp, Minus,
    RefreshCw, RotateCcw, Maximize2, Minimize2, Lock, Unlock, Loader2
} from 'lucide-react';
import {
    ScreenplaySection, BlueprintLanguage, FinalAssetItem,
    GlobalVisualTone, MetonymyStylePreset, StaticShot, DynamicShot
} from '../../../types';
import { CopyButton, MarkdownRenderer, ProcessingTimer } from '../../SharedBlueprintComponents';
import {
    getStaticColumns, getDynamicColumns, formatDialogueList,
    formatStaticList, formatDynamicList, extractProtocolHeader
} from '../../../utils/metonymyUtils';
import { AssetCard } from '../../AssetCard';
import { SceneCollapseState, SceneTabState } from '../MetonymyView';
import { transformScriptStyle } from '../../../services/geminiService'; // Ensure import

interface MetonymySceneCardProps {
    section: ScreenplaySection;
    index: number;
    isActive: boolean;
    // UPDATED PROPS
    collapseState: SceneCollapseState;
    onToggleState: () => void;

    onSetActive: () => void;
    onUpdateSectionTitle: (title: string) => void;
    onDeleteScene: () => void;

    // Script Editing
    isEditingScript: boolean;
    toggleEditScript: () => void;
    onUpdateScript: (newScript: string) => void;
    onUpdateProtocol?: (newProtocol: string) => void;
    onUpdateBreakdownInfo?: (newInfo: string) => void;

    // Generation Handlers
    onGenerateSuture: () => void;
    isGenerating: boolean;
    generationStartTime?: number | null;
    onGenerateStatic: () => void;
    onGenerateDynamic: () => void;

    // Assets (Scene Specific)
    finalAssets: { characters: FinalAssetItem[], props: FinalAssetItem[], scenes: FinalAssetItem[] };
    onDeleteAsset: (type: 'characters' | 'props' | 'scenes', itemId: string) => void;
    onAddAsset: (type: 'characters' | 'props' | 'scenes') => void;
    onUpdateAsset: (type: 'characters' | 'props' | 'scenes', item: FinalAssetItem) => void;
    onReverseEngineerAsset: (type: 'characters' | 'props' | 'scenes', item: FinalAssetItem) => void;
    onReverseEngineerAll: () => void;
    // New: Reset Assets Handler
    onResetAssets: () => void;

    // Analysis State
    analyzingAssetId: string | null;
    batchAnalyzing: boolean;

    // Asset Display
    assetDisplayLang: 'CN' | 'EN';
    onToggleAssetLang: () => void;

    // Global Tone
    globalTone: GlobalVisualTone;
    onUpdateTone: (field: keyof GlobalVisualTone, value: string) => void;

    // Anchors
    anchorImage: string | null;
    isAnchorUploading: boolean;
    onUploadAnchor: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveAnchor: () => void;

    // Global Presets
    presets: MetonymyStylePreset[];
    activePresetId: string; // The specific preset mounted to this scene
    onMountPreset: (presetId: string) => void;

    // Toggles
    storyboardDisplayLang: 'CN' | 'EN';
    onToggleStoryboardLang: () => void;
    dynamicDisplayLang: 'CN' | 'EN';
    onToggleDynamicLang: () => void;

    themeAccent: string;
    themeColorBase: string;
    language: BlueprintLanguage;
    theme: string; // NEW PROP

    // Drag & Drop
    onDragStart: (e: React.DragEvent) => void;
    onDragOver: (e: React.DragEvent) => void;
    onDrop: (e: React.DragEvent) => void;
    onDragEnd: () => void;
    isDragged: boolean;

    onToggleGlobalSync: () => void;
    onOpenPreview: (content: string, title: string) => void;

    // New: Pass onGenerateAssetImage for visual grid
    onGenerateAssetImage?: (prompt: string) => Promise<string | null>;
    onUpdateSection?: (updatedSection: ScreenplaySection) => void;

    // NEW: Tab State Props
    activeTab: SceneTabState;
    onTabChange: (tab: SceneTabState) => void;

    // NEW: Focus Props
    isFocused?: boolean;
    onToggleFocus?: () => void;
}

const AssetChip: React.FC<{
    item: FinalAssetItem;
    type: 'characters' | 'props' | 'scenes';
    language: BlueprintLanguage;
    onDeleteAsset: (type: 'characters' | 'props' | 'scenes', itemId: string) => void;
    theme: string;
}> = ({
    item,
    type,
    language,
    onDeleteAsset,
    theme
}) => {
        const descCN = item.analysis?.description || item.description;
        const descEN = item.analysis?.descriptionEn || (item as any).descriptionEn || descCN;
        const desc = language === 'EN' ? descEN : descCN;

        return (
            <div className={`flex flex-col rounded border group/chip transition-colors w-[220px] ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/20 hover:border-[#8B261D]/40' : 'bg-black/40 border-zinc-800 hover:border-zinc-600'}`}>
                <div className="flex items-center gap-2 px-2 py-1">
                    {item.imageUrl && (
                        <div className="w-5 h-5 rounded-full overflow-hidden border border-zinc-700 shrink-0">
                            <img src={item.imageUrl} className="w-full h-full object-cover" />
                        </div>
                    )}
                    <span className={`text-[10px] font-bold truncate ${theme === 'retro' ? 'text-[#3D1A16]' : (type === 'characters' ? 'text-rose-300' : type === 'scenes' ? 'text-blue-300' : 'text-amber-300')}`}>
                        {language === 'EN' ? (item.nameEn || item.name) : item.name}
                    </span>
                    <div className="flex-1"></div>
                    <button
                        onClick={(e) => { e.stopPropagation(); onDeleteAsset(type, item.id); }}
                        className="text-zinc-600 hover:text-red-400 opacity-0 group-hover/chip:opacity-100 transition-opacity p-0.5 shrink-0"
                    >
                        <X size={10} />
                    </button>
                </div>
                {desc && (
                    <div className={`px-2 pb-1.5 text-[9px] leading-relaxed border-t pt-1 line-clamp-3 ${theme === 'retro' ? 'text-black/60 border-[#8B261D]/20' : 'text-zinc-500 border-zinc-800/30'}`} title={desc}>
                        {desc}
                    </div>
                )}
            </div>
        );
    };

export const MetonymySceneCard: React.FC<MetonymySceneCardProps> = (props) => {
    const {
        section, index, isActive, collapseState, onToggleState, onSetActive,
        onUpdateSectionTitle, onDeleteScene,
        isEditingScript, toggleEditScript, onUpdateScript, onUpdateProtocol, onUpdateBreakdownInfo, onGenerateSuture,
        finalAssets, onDeleteAsset, onResetAssets, // Added prop
        presets, activePresetId, onMountPreset,
        isGenerating, generationStartTime, onGenerateStatic, onGenerateDynamic,
        anchorImage, isAnchorUploading, onUploadAnchor, onRemoveAnchor, // Updated props
        storyboardDisplayLang, onToggleStoryboardLang, dynamicDisplayLang, onToggleDynamicLang,
        themeAccent, themeColorBase, language, theme,
        onDragStart, onDragOver, onDrop, onDragEnd, isDragged, onOpenPreview,
        onGenerateAssetImage, onUpdateSection,
        activeTab, onTabChange, // Use props instead of local state
        isFocused, onToggleFocus // Focus props
    } = props;

    const [isPreviewAssetsOpen, setIsPreviewAssetsOpen] = useState(false);
    const [isBreakdownVisible, setIsBreakdownVisible] = useState(false);
    const [isStyleTransferring, setIsStyleTransferring] = useState(false);
    const [styleTransferStartTime, setStyleTransferStartTime] = useState<number | null>(null);

    // Determine currently mounted preset name
    const mountedPresetId = section.mountedPresetId || activePresetId;
    const mountedPreset = presets.find(p => p.id === mountedPresetId) || presets[0];

    // Determine Content to Display based on active/mounted preset
    const displayContent = section.sutureData?.literaryScript || (mountedPresetId === 'original' ? section.content : "");
    const hasScript = !!section.sutureData?.literaryScript;

    // Special Logic: Check if Base Script Exists for Dependency
    const hasBaseScript = !!section.sutureDataMap?.['original']?.literaryScript;
    const isOriginalMode = !mountedPresetId;

    const staticCols = getStaticColumns(language, storyboardDisplayLang);
    const dynamicCols = getDynamicColumns(language, dynamicDisplayLang);

    // Dynamic button style based on theme
    const btnTheme = `${theme === 'retro' ? 'h-8 px-3 rounded-lg bg-[#8B261D] border-[#8B261D] text-white hover:bg-[#A52A2A]' : `h-8 px-3 rounded-lg bg-${themeColorBase}/20 text-${themeColorBase} border border-current hover:bg-${themeColorBase}/30`} text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed`;
    const btnGrey = `h-8 px-3 rounded-lg border text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 flex items-center gap-2 shadow-sm ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-[#8B261D] hover:bg-[#8B261D]/10' : 'bg-zinc-900/50 border-zinc-700/50 text-zinc-400 hover:text-white hover:bg-zinc-800'}`;

    const handleMountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onMountPreset(e.target.value);
        // setIsPreviewAssetsOpen(true); // Removed auto-open behavior
    };

    // Modified to prevent collapse when locked
    const handleToggleStateWrapper = () => {
        if (isFocused) {
            alert(language === 'EN' ? "Scene is locked in Focus Mode. Please unlock to collapse." : "当前处于专注锁定状态，请先解锁。");
            return;
        }
        onToggleState();
    };

    // Tab Change Handler Logic
    const handleTabClick = (tab: SceneTabState) => {
        if (collapseState === 'PARTIAL') {
            // If partial, expanding is always allowed (unless some other logic prevents it, but here lock usually means it's already expanded)
            // But if we are locked, we are definitely EXPANDED already.
            onToggleState();
            onTabChange(tab);
        } else {
            // If already expanded
            if (activeTab === tab) {
                // Clicking active tab usually retracts to PARTIAL
                // Check lock before retracting
                if (isFocused) {
                    alert(language === 'EN' ? "Scene is locked in Focus Mode. Please unlock to collapse." : "当前处于专注锁定状态，请先解锁。");
                    return;
                }
                onToggleState();
            } else {
                // Switching tab is allowed even if locked
                onTabChange(tab);
            }
        }
    };

    const getCollapseIcon = () => {
        if (collapseState === 'EXPANDED') return <ChevronDown size={16} />;
        return <ChevronRight size={16} />;
    };

    // --- NEW: STYLE TRANSFER HANDLER ---
    const handleStyleTransfer = async () => {
        // Base script must exist for transfer
        if (!section.sutureDataMap?.['original']?.literaryScript) return;

        setIsStyleTransferring(true);
        setStyleTransferStartTime(Date.now());
        try {
            // Call service
            const newScript = await transformScriptStyle(section.sutureDataMap['original'].literaryScript, mountedPreset);
            if (newScript && onUpdateSection) {
                // Deep update logic: update the map entry for THIS preset
                const newMap = { ...section.sutureDataMap };

                // CRITICAL FIX: PRESERVE ASSETS FROM BASE SCRIPT (Inheritance)
                const baseAssets = section.sutureDataMap['original'].finalAssets || { characters: [], props: [], scenes: [] };

                // Preserve existing data if any, overwrite script & inherit assets
                const existingData = newMap[mountedPresetId] || {
                    literaryScript: "",
                    globalTone: mountedPreset.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] },
                    staticStoryboard: [],
                    dynamicStoryboard: [],
                    finalAssets: baseAssets // Use inherited base assets
                };

                newMap[mountedPresetId] = {
                    ...existingData,
                    literaryScript: newScript,
                    finalAssets: baseAssets // Ensure assets are populated
                };

                onUpdateSection({
                    ...section,
                    sutureDataMap: newMap
                });
            }
        } catch (e) {
            console.error(e);
            alert(language === 'EN' ? "Transfer failed." : "转译失败。");
        } finally {
            setIsStyleTransferring(false);
            setStyleTransferStartTime(null);
        }
    };

    const isBibleMissing = isOriginalMode;

    // --- DATA PROCESSING FOR DISPLAY ---

    // Helper to format ID like #1-1-5 to #5
    // Forces reload
    const formatShotId = (id: string) => {
        if (!id) return id;
        if (id.includes('-')) {
            const parts = id.split('-');
            return `#${parts[parts.length - 1].replace('#', '')}`;
        }
        return id;
    };

    // Helper to filter out "No sound/None" content for cleaner display
    const cleanContent = (text: string | undefined): string => {
        if (!text) return "";
        // Regex to match "无", "无。", "No sound", "None", "N/A" case insensitive
        if (/^(无|无[。.]?|none|n\/a|no sound|no dialogue)[.。]?$/i.test(text.trim())) {
            return "";
        }
        return text;
    };

    // Static Shots Display Data
    const staticDisplayData = useMemo(() => {
        return (section.sutureData?.staticStoryboard || []).map(s => ({
            ...s,
            id: formatShotId(s.id)
        }));
    }, [section.sutureData?.staticStoryboard]);

    // Dynamic Shots Display Data (Updated)
    const dynamicDisplayData = useMemo(() => {
        const dynamicList = section.sutureData?.dynamicStoryboard || [];

        if (dynamicList.length === 0) return [];

        return dynamicList.map(dShot => {
            // Filter sound and dialogue content
            const soundContent = cleanContent(dShot.sound);
            // DynamicShot doesn't have soundEn anymore, so we only use sound.
            // For dialogue, we check lang.
            const dialogueContent = dynamicDisplayLang === 'CN'
                ? cleanContent(dShot.dialogue)
                : cleanContent(dShot.dialogueEn || dShot.dialogue);

            return {
                ...dShot,
                id: formatShotId(dShot.id),
                // Only show content if it's not empty/none
                sound: soundContent,
                dialogue: dialogueContent
            };
        });
    }, [section.sutureData?.dynamicStoryboard, dynamicDisplayLang]);

    // Protocol Header for Static Tab
    const protocolContent = section.sutureData?.protocolOverride ??
        (section.sutureData?.literaryScript ? extractProtocolHeader(section.sutureData.literaryScript) : "");

    const handleProtocolChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onUpdateProtocol?.(e.target.value);
    };

    return (
        <div 
            onDragOver={onDragOver}
            onDrop={onDrop}
            onClick={onSetActive}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isActive ? `border-${themeColorBase} ${theme === 'retro' ? 'bg-white' : 'bg-zinc-900/25'} shadow-2xl` : `${theme === 'retro' ? 'border-[#8B261D]/30 bg-[#F4EFE0]/50' : `border-zinc-800 bg-zinc-900/10 hover:border-${themeColorBase}/50`}`} ${isDragged ? 'opacity-50' : 'opacity-100'} ${isFocused ? 'h-full flex flex-col' : ''}`}
        >
            {/* Header */}
            <div
                className={`${theme === 'retro' ? 'bg-[#F4EFE0]/80 border-[#8B261D]/20' : 'bg-zinc-950/80 border-zinc-900/50 hover:bg-zinc-900/60'} px-4 py-3 flex items-center gap-4 border-b cursor-pointer h-14 shrink-0 transition-colors`}
                onClick={onSetActive}
            >
                <div className="flex items-center gap-3 shrink-0">
                    <div
                        className={`cursor-grab active:cursor-grabbing p-1 ${theme === 'retro' ? 'text-[#8B261D] hover:text-[#8B261D]/80' : 'text-zinc-600 hover:text-white'}`}
                        draggable={true}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        onClick={() => {}} // No stopPropagation means bubbles to container
                    >
                        <GripVertical size={16} />
                    </div>
                    <button
                        onClick={handleToggleStateWrapper}
                        className={`transition-colors p-1 ${isFocused ? 'text-zinc-700 cursor-not-allowed' : (theme === 'retro' ? 'text-[#8B261D] hover:text-[#8B261D]/80' : 'text-zinc-500 hover:text-white')}`}
                        title={isFocused ? (language === 'EN' ? "Locked" : "已锁定") : (language === 'EN' ? "Toggle Collapse" : "折叠/展开")}
                    >
                        {getCollapseIcon()}
                    </button>
                    {/* Dynamic Theme Color for Scene Number */}
                    <span className={`font-mono text-sm font-bold px-2 py-1 rounded ${theme === 'retro' ? 'bg-[#F9F7F1]/50 border border-[#8B261D]/20 text-[#8B261D]' : `bg-black ${themeAccent}`}`}>#{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                    <input
                        value={section.title}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => onUpdateSectionTitle(e.target.value)}
                        className={`bg-transparent font-bold focus:outline-none focus:border-b border-zinc-700 w-full truncate ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}
                    />
                </div>

                {/* Visual Bible Selector */}
                <div className={`flex items-center gap-2 shrink-0 rounded-lg p-1 border ${theme === 'retro' ? 'bg-[#F9F7F1]/50 border-[#8B261D]/20' : 'bg-black/40 border-zinc-800'}`} onClick={e => e.stopPropagation()}>
                    <div className={`flex items-center px-2 gap-2 border-r ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}`}>
                        <LayoutTemplate size={12} className={theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-400'} />
                        <select
                            value={section.mountedPresetId || ""}
                            onChange={handleMountChange}
                            className={`bg-transparent text-[10px] font-bold focus:outline-none w-24 md:w-32 cursor-pointer uppercase ${theme === 'retro' ? 'text-black' : 'text-zinc-300'}`}
                        >
                            <option value="" disabled>{language === 'EN' ? "Select Bible..." : "选择视觉圣经..."}</option>
                            {presets.map(p => (
                                <option key={p.id} value={p.id}>
                                    {language === 'EN' ? (p.nameEn || p.name) : p.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={() => setIsPreviewAssetsOpen(!isPreviewAssetsOpen)}
                        className={`p-1.5 rounded transition-colors ${isPreviewAssetsOpen ? (theme === 'retro' ? 'bg-white text-[#8B261D]' : 'bg-zinc-800 text-white') : (theme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-white')}`}
                        title={language === 'EN' ? "Preview & Filter Assets" : "预览与筛选资产"}
                    >
                        <Eye size={12} />
                    </button>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2" onClick={(e) => e.stopPropagation()}>
                    {/* Focus/Lock Button */}
                    {onToggleFocus && (
                        <button
                            onClick={onToggleFocus}
                            className={`p-1.5 rounded transition-colors ${theme === 'retro' ? 'hover:bg-white' : 'hover:bg-zinc-800'} ${isFocused ? themeAccent : (theme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D]' : 'text-zinc-600 hover:text-white')}`}
                            title={isFocused ? (language === 'EN' ? "Unlock Scene" : "解锁场次") : (language === 'EN' ? "Lock Focus" : "锁定专注")}
                        >
                            {isFocused ? <Lock size={16} /> : <Unlock size={16} />}
                        </button>
                    )}

                    <button onClick={onDeleteScene} className={`p-1.5 transition-all active:scale-95 rounded ${theme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/5' : 'text-zinc-600 hover:text-red-400 hover:bg-zinc-800'}`}><Trash2 size={16} /></button>
                </div>
            </div>

            {/* TAB BAR - Always Visible */}
            <div className={`${theme === 'retro' ? 'bg-black/5 border-[#8B261D]/20' : 'bg-black/20 border-zinc-900/50'} border-b flex items-center px-4 shrink-0`}>
                <button
                    onClick={() => handleTabClick('SCRIPT')}
                    className={`h-10 px-4 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all flex items-center gap-2 ${activeTab === 'SCRIPT' && collapseState === 'EXPANDED' ? `${themeAccent} border-current ${theme === 'retro' ? 'bg-[#8B261D]/5' : 'bg-white/5'}` : `${theme === 'retro' ? 'text-[#8B261D] border-transparent hover:bg-[#8B261D]/5' : 'text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-white/5'}`}`}
                >
                    <FileText size={12} /> {language === 'EN' ? "Literary Script" : "文学脚本"}
                </button>
                <button
                    onClick={() => handleTabClick('STATIC')}
                    className={`h-10 px-4 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all flex items-center gap-2 ${activeTab === 'STATIC' && collapseState === 'EXPANDED' ? `${themeAccent} border-current ${theme === 'retro' ? 'bg-[#8B261D]/5' : 'bg-white/5'}` : `${theme === 'retro' ? 'text-[#8B261D] border-transparent hover:bg-[#8B261D]/5' : 'text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-white/5'}`}`}
                >
                    <Aperture size={12} /> {language === 'EN' ? "Static Board" : "静态分镜"}
                </button>
                <button
                    onClick={() => handleTabClick('DYNAMIC')}
                    className={`h-10 px-4 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all flex items-center gap-2 ${activeTab === 'DYNAMIC' && collapseState === 'EXPANDED' ? `${themeAccent} border-current ${theme === 'retro' ? 'bg-[#8B261D]/5' : 'bg-white/5'}` : `${theme === 'retro' ? 'text-[#8B261D] border-transparent hover:bg-[#8B261D]/5' : 'text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-white/5'}`}`}
                >
                    <Video size={12} /> {language === 'EN' ? "Dynamic Board" : "动态分镜"}
                </button>
            </div>

            {/* Content Area - Render if EXPANDED */}
            {collapseState === 'EXPANDED' && (
                <div className={`flex flex-col ${isFocused ? 'flex-1 overflow-hidden' : ''}`}>
                    {/* Visual Context Panel (Asset Filter) */}
                    {isPreviewAssetsOpen && (
                        <div className={`${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/20' : 'bg-zinc-950/70 border-zinc-800'} border-b p-4 animate-in slide-in-from-top-2 duration-200 shrink-0`}>
                            <div className="flex items-start gap-6">
                                {/* Tone Summary */}
                                <div className={`w-1/4 min-w-[200px] text-[10px] text-zinc-500 leading-relaxed border-r ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-800'} pr-4`}>
                                    <div className={`font-bold ${theme === 'retro' ? 'text-black' : 'text-zinc-300'} mb-1 flex items-center gap-2`}>
                                        <ImageIcon size={10} className={theme === 'retro' ? 'text-[#8B261D]' : ''} /> {language === 'EN' ? "GLOBAL TONE" : "全局影调"}
                                    </div>
                                    <div className="line-clamp-4 italic">
                                        {mountedPreset?.toneAnalysis?.style
                                            ? `${mountedPreset.toneAnalysis.style} / ${mountedPreset.toneAnalysis.lighting}`
                                            : (language === 'EN' ? "No tone data." : "暂无影调数据。")}
                                    </div>
                                </div>

                                {/* Asset Filter List */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className={`text-[10px] font-bold ${theme === 'retro' ? 'text-black' : 'text-zinc-300'} uppercase tracking-widest flex items-center gap-2`}>
                                                <Link size={10} className={theme === 'retro' ? 'text-[#8B261D]' : themeAccent} />
                                                {language === 'EN' ? "Active Assets" : "本场生效资产"}
                                            </span>
                                            {/* Added Reset Button */}
                                            <button
                                                onClick={(e) => { e.stopPropagation(); onResetAssets(); }}
                                                className={`ml-2 p-1 rounded transition-colors ${theme === 'retro' ? 'bg-[#F9F7F1] border border-[#8B261D]/20 text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-white shadow-sm' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-500 hover:text-red-400'}`}
                                                title={language === 'EN' ? "Reset to Preset Assets" : "重置为预设资产"}
                                            >
                                                <RotateCcw size={10} />
                                            </button>
                                        </div>
                                        <span className="text-[9px] text-zinc-600">
                                            {finalAssets.characters.length + finalAssets.scenes.length + finalAssets.props.length} {language === 'EN' ? "Items" : "项"}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {finalAssets.characters.length === 0 && finalAssets.scenes.length === 0 && finalAssets.props.length === 0 && (
                                            <span className="text-[10px] text-zinc-600 italic">{language === 'EN' ? "No assets mounted." : "未挂载资产。"}</span>
                                        )}
                                        {finalAssets.characters.map(c => <AssetChip key={c.id} item={c} type="characters" language={language} onDeleteAsset={onDeleteAsset} theme={theme} />)}
                                        {finalAssets.scenes.map(s => <AssetChip key={s.id} item={s} type="scenes" language={language} onDeleteAsset={onDeleteAsset} theme={theme} />)}
                                        {finalAssets.props.map(p => <AssetChip key={p.id} item={p} type="props" language={language} onDeleteAsset={onDeleteAsset} theme={theme} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- TAB CONTENT: SCRIPT --- */}
                    <div className={`${activeTab === 'SCRIPT' ? (isFocused ? 'flex-1 overflow-hidden flex flex-col' : 'block') : 'hidden'}`}>
                        <div className={`h-full ${isFocused ? 'overflow-y-auto custom-scrollbar pb-12' : ''}`}>
                            <div className={`flex justify-between items-center px-4 md:px-8 py-5 ${theme === 'retro' ? 'bg-[#F4EFE0]' : 'bg-[#080808]'} z-20 ${isFocused ? `sticky top-0 border-b ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}` : 'mb-2'}`}>
                                <h4 className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-400'} font-bold text-xs uppercase tracking-wider flex items-center gap-2`}>
                                    <FileText size={14} /> {language === 'EN' ? "Scriptment" : "文学脚本"}
                                </h4>
                                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        onClick={() => setIsBreakdownVisible(!isBreakdownVisible)}
                                        className={`${btnGrey} ${isBreakdownVisible ? (theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-800 text-white') : ''}`}
                                        title={language === 'EN' ? "Toggle Breakdown Info" : "显示/隐藏分场信息"}
                                    >
                                        <List size={12} /> {language === 'EN' ? "Breakdown" : "分场详情"}
                                    </button>
                                    <button onClick={toggleEditScript} className={btnGrey}>
                                        {isEditingScript ? <Eye size={12} /> : <Edit3 size={12} />}
                                        <span>{isEditingScript ? "预览" : "编辑"}</span>
                                    </button>

                                    {/* UNIFIED GENERATION BUTTON - Forces update */}
                                    <button
                                        onClick={() => {
                                            if (!mountedPresetId || mountedPresetId === 'original') {
                                                onGenerateSuture();
                                            } else {
                                                handleStyleTransfer();
                                            }
                                        }}
                                        disabled={isGenerating || isStyleTransferring || (!!mountedPresetId && mountedPresetId !== 'original' && !hasBaseScript)}
                                        className={`${(!!mountedPresetId && mountedPresetId !== 'original' && !hasBaseScript) ? `h-8 px-3 rounded-lg border cursor-not-allowed flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider shadow-sm ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/20 text-[#8B261D]/40' : 'bg-zinc-900 border-zinc-800 text-zinc-600'}` : btnTheme}`}
                                        title={(!!mountedPresetId && mountedPresetId !== 'original' && !hasBaseScript) ? (language === 'EN' ? "Please generate base script first" : "请先生成基础剧本") : ""}
                                    >
                                        <Wand2 size={12} />
                                        {(!mountedPresetId || mountedPresetId === 'original')
                                            ? (language === 'EN' ? "Generate Base Script" : "生成基础剧本")
                                            : (language === 'EN' ? "Visual Bible Transfer" : "视觉圣经置换")
                                        }
                                        {(isGenerating || isStyleTransferring) && <ProcessingTimer startTime={isGenerating ? (generationStartTime || Date.now()) : (styleTransferStartTime || Date.now())} />}
                                    </button>

                                    <CopyButton text={displayContent} label={language === 'EN' ? "COPY" : "一键复制"} className={btnGrey} theme={theme} />
                                    <div className={`w-px h-6 mx-1 ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'}`}></div>
                                    <button
                                        onClick={() => {
                                            const input = document.createElement('input');
                                            input.type = 'file';
                                            input.accept = 'image/*';
                                            input.onchange = (e: any) => onUploadAnchor(e);
                                            input.click();
                                        }}
                                        className={btnGrey}
                                        title={language === 'EN' ? "Upload reference style anchor" : "上传视觉风格锚点图片"}
                                    >
                                        <ImageIcon size={12} />
                                        <span>{language === 'EN' ? "Anchor" : "风格锚点"}</span>
                                    </button>
                                </div>
                            </div>

                            <div className="px-4 md:px-8 pb-8">
                                {/* Breakdown Details Panel */}
                                {isBreakdownVisible && (
                                    <div className="mb-6 p-0 rounded-lg animate-in slide-in-from-top-2 duration-200">
                                        <textarea
                                            value={section.breakdownInfo || ""}
                                            onChange={(e) => onUpdateBreakdownInfo && onUpdateBreakdownInfo(e.target.value)}
                                            className={`w-full border-l-2 ${theme === 'retro' ? 'border-[#8B261D]' : 'border-indigo-500'} rounded-r-lg text-xs font-mono whitespace-pre-wrap leading-relaxed outline-none resize-none p-4 min-h-[150px] ${theme === 'retro' ? 'bg-white text-black/70 focus:border-[#8B261D]/50' : 'bg-zinc-900/50 border border-zinc-800 text-zinc-400 focus:border-zinc-700'}`}
                                            placeholder={language === 'EN' ? "Breakdown metadata (Slugline, Visual Style...)" : "分场元数据 (Slugline, Visual Style, Anchors...)"}
                                        />
                                    </div>
                                )}

                                {/* Main Script Area */}
                                <div className="flex gap-6">
                                    <div className="flex-1">
                                        {isEditingScript ? (
                                            <textarea
                                                value={displayContent}
                                                onChange={(e) => onUpdateScript(e.target.value)}
                                                className={`w-full min-h-[400px] bg-transparent text-zinc-300 font-serif leading-loose outline-none resize-none p-4 border border-zinc-800 focus:border-${themeColorBase}/50 rounded-lg ${isFocused ? 'h-full' : ''}`}
                                            />
                                        ) : (
                                            <div className={`pl-4 border-l-2 ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}`}>
                                                <MarkdownRenderer 
                                                    content={displayContent || (isOriginalMode ? (language === 'EN' ? "Please enter narrative content or click [Generate Script]." : "请先输入叙事内容或点击【生成剧本】。") : (language === 'EN' ? "No style script generated yet." : "暂无风格剧本。"))} 
                                                    themeAccent={displayContent ? themeAccent : (theme === 'retro' ? "text-[#8B261D]" : "text-zinc-500")} 
                                                    theme={theme}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Visual Anchor Sidebar */}
                                    {(anchorImage || isAnchorUploading) && (
                                        <div className="w-48 shrink-0 space-y-3 animate-in fade-in slide-in-from-right-2 duration-300">
                                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                                <ImageIcon size={12} className={themeAccent} /> {language === 'EN' ? "Visual Anchor" : "视觉锚点"}
                                            </div>
                                            <div className={`relative group rounded-xl overflow-hidden border aspect-[9/16] ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F9F7F1] shadow-sm' : 'border-zinc-800 bg-black/40'}`}>
                                                {isAnchorUploading ? (
                                                    <div className={`absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm z-10 ${theme === 'retro' ? 'bg-white/60' : 'bg-black/60'}`}>
                                                        <Loader2 size={24} className={`animate-spin ${themeAccent} mb-2`} />
                                                        <span className={`text-[9px] font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-400'}`}>{language === 'EN' ? "Uploading..." : "上传中..."}</span>
                                                    </div>
                                                ) : null}
                                                {anchorImage && (
                                                    <>
                                                        <img src={anchorImage} className="w-full h-full object-cover" alt="Anchor" />
                                                        <button
                                                            onClick={onRemoveAnchor}
                                                            className={`absolute top-2 right-2 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-red-600 ${theme === 'retro' ? 'bg-[#8B261D]/60' : 'bg-black/60'}`}
                                                        >
                                                            <X size={12} />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- TAB CONTENT: STATIC STORYBOARD --- */}
                    <div className={`${activeTab === 'STATIC' ? (isFocused ? 'flex-1 overflow-hidden flex flex-col' : 'block') : 'hidden'}`}>
                        <div className={`border-b ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} ${isFocused ? 'flex-1 overflow-hidden flex flex-col' : 'overflow-hidden'}`}>
                            <div className={`px-4 py-4 flex justify-between items-center shrink-0 ${theme === 'retro' ? 'bg-[#F9F7F1]/50' : 'bg-zinc-900/50'}`}>
                                <div className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]' : themeAccent}`}>
                                    <Aperture size={14} /> {language === 'EN' ? "Static Shots Table" : "静态分镜表"}
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={onGenerateStatic}
                                        className={btnGrey}
                                        title={language === 'EN' ? "Parse script text to update table" : "解析剧本以更新表格"}
                                    >
                                        <RefreshCw size={12} /> {language === 'EN' ? "Sync from Script" : "从剧本同步"}
                                    </button>
                                    <CopyButton
                                        text={formatDialogueList(section.sutureData?.staticStoryboard || [], storyboardDisplayLang)}
                                        label={language === 'EN' ? "DIALOGUE" : "台词复制"}
                                        className={btnGrey}
                                        theme={theme}
                                    />
                                    <button onClick={onToggleStoryboardLang} className={btnGrey}>
                                        <Globe size={12} /> {storyboardDisplayLang === 'CN' ? '中' : 'EN'}
                                    </button>
                                    <CopyButton text={formatStaticList(section.sutureData?.staticStoryboard || [], storyboardDisplayLang, protocolContent, section.sutureData?.globalTone)} label={language === 'EN' ? "COPY" : "一键复制"} className={btnGrey} theme={theme} />
                                </div>
                            </div>
                            <div className={`flex-1 overflow-y-auto custom-scrollbar ${isFocused ? 'pb-12' : ''}`}>
                                {protocolContent && (
                                    <div className={`px-4 py-2 border-b ${theme === 'retro' ? 'bg-[#F9F7F1]/50 border-[#8B261D]/20' : 'bg-zinc-900/50 border-zinc-800'}`}>
                                        <textarea
                                            value={protocolContent}
                                            onChange={handleProtocolChange}
                                            className={`w-full bg-transparent text-[10px] font-mono whitespace-pre-wrap leading-relaxed resize-y focus:outline-none focus:ring-1 rounded p-1 ${theme === 'retro' ? 'text-black focus:ring-[#8B261D]/30' : 'text-white focus:ring-zinc-700'}`}
                                            rows={protocolContent.split('\n').length + 1}
                                            placeholder="Protocol Header..."
                                        />
                                    </div>
                                )}
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead><tr className={`border-b text-xs font-bold uppercase tracking-wider ${theme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D]/20 text-[#8B261D]' : 'bg-black/40 border-zinc-800 text-white'}`}>{staticCols.map(col => <th key={col.key} className={`p-3 ${col.width} border-r last:border-0 ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}`}>{col.label}</th>)}</tr></thead>
                                        <tbody className={`divide-y text-xs font-mono ${theme === 'retro' ? 'divide-[#8B261D]/20 text-black/70' : 'divide-zinc-800 text-zinc-300'}`}>{staticDisplayData.length > 0 ? staticDisplayData.map((shot, sIdx) => (<tr key={sIdx} className={`transition-colors ${theme === 'retro' ? 'hover:bg-white' : 'hover:bg-white/5'}`}>{staticCols.map(col => <td key={col.key} className={`p-3 border-r last:border-0 ${col.width} ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}`}>{col.isHtml ? <div dangerouslySetInnerHTML={{ __html: (shot as any)[col.key] || '' }} className="leading-relaxed opacity-90" /> : (shot as any)[col.key]}</td>)}</tr>)) : (<tr><td colSpan={staticCols.length} className={`p-8 text-center italic ${theme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-600'}`}>No static shots.</td></tr>)}</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- TAB CONTENT: DYNAMIC STORYBOARD --- */}
                    <div className={`${activeTab === 'DYNAMIC' ? (isFocused ? 'flex-1 overflow-hidden flex flex-col' : 'block') : 'hidden'}`}>
                        <div className={`border-b ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} ${isFocused ? 'flex-1 overflow-hidden flex flex-col' : 'overflow-hidden'}`}>
                            <div className={`px-4 py-4 flex justify-between items-center shrink-0 ${theme === 'retro' ? 'bg-[#F9F7F1]/50' : 'bg-zinc-900/50'}`}>
                                <div className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]' : themeAccent}`}>
                                    <Video size={14} /> {language === 'EN' ? "Dynamic Storyboard" : "动态分镜表"}
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={onGenerateDynamic} disabled={isGenerating || isBibleMissing} className={`${btnTheme} ${isBibleMissing ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                        <Zap size={12} /> {isBibleMissing ? (language === 'EN' ? "Select Bible First" : "请先挂载圣经") : (language === 'EN' ? "Generate Dynamic" : "生成动态分镜")}
                                        {isGenerating && <ProcessingTimer startTime={generationStartTime || Date.now()} />}
                                    </button>
                                    <button onClick={onToggleDynamicLang} className={btnGrey}>
                                        <Globe size={12} /> {dynamicDisplayLang === 'CN' ? '中' : 'EN'}
                                    </button>
                                    <CopyButton text={formatDynamicList(section.sutureData?.dynamicStoryboard || [], section.sutureData?.staticStoryboard || [], dynamicDisplayLang)} label={language === 'EN' ? "COPY" : "一键复制"} className={btnGrey} theme={theme} />
                                </div>
                            </div>
                            <div className={`overflow-x-auto custom-scrollbar ${isFocused ? 'flex-1 overflow-y-auto pb-12' : ''}`}>
                                <table className="w-full text-left border-collapse table-fixed">
                                    <thead><tr className={`border-b text-xs font-bold uppercase tracking-wider ${theme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D]/20 text-[#8B261D]' : 'bg-black/40 border-zinc-800 text-white'}`}>{dynamicCols.map(col => <th key={col.key} className={`p-3 ${col.width} border-r last:border-0 ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}`}>{col.label}</th>)}</tr></thead>
                                    <tbody className={`divide-y text-xs font-mono ${theme === 'retro' ? 'divide-[#8B261D]/20 text-black/70' : 'divide-zinc-800 text-zinc-300'}`}>{dynamicDisplayData.length > 0 ? dynamicDisplayData.map((shot, sIdx) => (<tr key={sIdx} className={`transition-colors ${theme === 'retro' ? 'hover:bg-white' : 'hover:bg-white/5'}`}>{dynamicCols.map(col => <td key={col.key} className={`p-3 align-top border-r last:border-0 ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'}`}>{(shot as any)[col.key]}</td>)}</tr>)) : (<tr><td colSpan={dynamicCols.length} className={`p-8 text-center italic ${theme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-600'}`}>No dynamic shots.</td></tr>)}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
