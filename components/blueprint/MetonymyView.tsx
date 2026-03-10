
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
    Maximize2,
    Minimize2,
    Save,
    Plus,
    FileText,
    PanelLeft,
    PanelLeftClose,
    Check,
    ChevronDown,
    ChevronsUp,
    Layers,
    Loader2,
    Link,
    ImageIcon,
    Aperture,
    ArrowDownAZ,
    ChevronsDown,
    RefreshCw,
    RotateCcw,
    AlertCircle
} from 'lucide-react';
import { generateSutureScript, generateSutureStoryboard, breakdownScript, transformScriptStyle } from '../../services/geminiService';
import { analyzeAssetImage } from '../../services/visualBibleGenerator';
import { supabaseDatabase } from '../../services/supabaseDatabase';
import {
    CreativeBlueprint,
    BlueprintLanguage,
    NarrativeFieldState,
    ScreenplaySection,
    SutureResponse,
    GlobalVisualTone,
    FinalAssetItem,
    SutureConfig,
    MetonymyStylePreset,
    MetonymyAssetInput,
    StaticShot
} from '../../types';
import { SutureModal } from '../SutureModal';
import { splitIntoParagraphs, getSceneColor, formatDialogueList, formatStaticList, formatDynamicList, getStaticColumns, getDynamicColumns, parseLiteraryScriptToStaticShots, syncDynamicWithStatic } from '../../utils/metonymyUtils';
import { SourceViewer } from './metonymy/MetonymySourceViewer';
import { MetonymySceneCard } from './metonymy/MetonymySceneCard';
import { PreviewContentModal } from './metonymy/MetonymyPreviewModal';
import { VisualStyleManager } from './metonymy/VisualStyleManager';

// Define the 2 states now (COLLAPSED removed)
export type SceneCollapseState = 'EXPANDED' | 'PARTIAL';
export type SceneTabState = 'SCRIPT' | 'STATIC' | 'DYNAMIC';

interface MetonymyViewProps {
    blueprint: CreativeBlueprint;
    language: BlueprintLanguage;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    themeAccent: string;
    themeBorder: string;
    isFullScreen: boolean;
    onToggleFullScreen?: () => void;
    fieldState: NarrativeFieldState;
    onSaveToHistory: (blueprint: CreativeBlueprint) => void;
    onGenerateAssetImage?: (prompt: string) => Promise<string | null>;
    onSutureOpenChange?: (open: boolean) => void;
    theme?: string;
}

export const MetonymyView: React.FC<MetonymyViewProps> = ({
    blueprint, language, onUpdateBlueprint, themeAccent, themeBorder, isFullScreen, onToggleFullScreen, fieldState, onSaveToHistory, onGenerateAssetImage, onSutureOpenChange, theme
}) => {
    const rawMetonymyData = blueprint.metonymyData || { screenplay: [], staticStoryboard: [], dynamicScript: [], stylePresets: [] };

    const defaultPreset: MetonymyStylePreset = {
        id: 'original',
        name: language === 'EN' ? "Original Style" : "原文风格",
        toneAnalysis: { lighting: "", texture: "", style: "", camera: "", palette: [] },
        assets: { characters: [], scenes: [], props: [] }
    };

    // Ensure sections have sutureDataMap initialized if not present
    const currentSections = useMemo(() => {
        return (Array.isArray(rawMetonymyData.screenplay) ? rawMetonymyData.screenplay : []).map(s => {
            if (!s.sutureDataMap) {
                // Migration: move sutureData to map['original'] if exists
                const map: Record<string, SutureResponse> = {};
                if (s.sutureData) {
                    map['original'] = s.sutureData;
                } else {
                    map['original'] = { literaryScript: "", globalTone: { lighting: "", texture: "", style: "", camera: "", palette: [] }, staticStoryboard: [], dynamicStoryboard: [], finalAssets: { characters: [], props: [], scenes: [] } };
                }
                return { ...s, sutureDataMap: map, sutureData: undefined }; // Clean up old field if desired, or keep for safety
            }
            return s;
        });
    }, [rawMetonymyData.screenplay]);

    const currentPresets = rawMetonymyData.stylePresets && rawMetonymyData.stylePresets.length > 0
        ? rawMetonymyData.stylePresets
        : [defaultPreset];

    const rawActiveId = rawMetonymyData.activePresetId;
    const currentActivePresetId = currentPresets.find(p => p.id === rawActiveId) ? rawActiveId : currentPresets[0].id;

    const [isSutureOpen, setIsSutureOpen] = useState(false);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [scrollSyncTrigger, setScrollSyncTrigger] = useState(0); // Force scroll jump
    const [isGenerating, setIsGenerating] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState<string>("");
    const [editModeMap, setEditModeMap] = useState<Record<string, boolean>>({});

    // REFACTORED: Use a map for 2-state collapse
    const [sceneStateMap, setSceneStateMap] = useState<Record<string, SceneCollapseState>>({});
    // NEW: Use a map for tab state to persist across unmounts
    const [sceneTabMap, setSceneTabMap] = useState<Record<string, SceneTabState>>({});

    const [isSaved, setIsSaved] = useState(false);
    const [isBreakingDown, setIsBreakingDown] = useState(false);
    // 0 = Expand All, 1 = Partial All (Default)
    const [globalCollapseLevel, setGlobalCollapseLevel] = useState<0 | 1>(1);
    const [isStyleExpanded, setIsStyleExpanded] = useState(false);

    // Timers
    const [generationStartTime, setGenerationStartTime] = useState<number | null>(null);
    const [breakdownStartTime, setBreakdownStartTime] = useState<number | null>(null);

    const [sourceText, setSourceText] = useState<string>(blueprint.narrative?.synopsis || "");
    const [isSourceVisible, setIsSourceVisible] = useState(true);

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [previewContent, setPreviewContent] = useState<string>("");
    const [previewTitle, setPreviewTitle] = useState<string>("");

    const [analyzingAssetId, setAnalyzingAssetId] = useState<string | null>(null);
    const [batchAnalyzing, setBatchAnalyzing] = useState(false);
    const [assetDisplayLang, setAssetDisplayLang] = useState<'CN' | 'EN'>('CN');
    const [storyboardDisplayLang, setStoryboardDisplayLang] = useState<'CN' | 'EN'>('CN');
    const [dynamicDisplayLang, setDynamicDisplayLang] = useState<'CN' | 'EN'>('CN');

    const [draggedSceneId, setDraggedSceneId] = useState<string | null>(null);
    const [visualAnchors, setVisualAnchors] = useState<Record<string, string | null>>({});
    const [isAnchorUploadingMap, setIsAnchorUploadingMap] = useState<Record<string, boolean>>({});

    // NEW: Focused Scene State
    const [focusedSceneId, setFocusedSceneId] = useState<string | null>(null);

    // Sync local isSutureOpen with parent if callback exists
    const handleSetSutureOpen = useCallback((open: boolean) => {
        setIsSutureOpen(open);
        onSutureOpenChange?.(open);
    }, [onSutureOpenChange]);

    // NEW: Alert Modal State
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const updateMetonymyData = useCallback((updates: Partial<typeof rawMetonymyData>) => {
        onUpdateBlueprint({
            ...blueprint,
            metonymyData: {
                ...rawMetonymyData,
                screenplay: currentSections,
                stylePresets: currentPresets,
                activePresetId: currentActivePresetId || 'original',
                ...updates
            }
        });
    }, [blueprint, currentSections, currentPresets, currentActivePresetId, onUpdateBlueprint, rawMetonymyData]);

    const handleUpdatePresets = (newPresets: MetonymyStylePreset[]) => {
        updateMetonymyData({ stylePresets: newPresets });
    };

    const handleSetActivePreset = (id: string) => {
        updateMetonymyData({ activePresetId: id });
    };

    const handleUpdatePresetsAndActive = (newPresets: MetonymyStylePreset[], newActiveId: string) => {
        updateMetonymyData({
            stylePresets: newPresets,
            activePresetId: newActiveId
        });
    };

    // Function to update a single section completely (Used by SceneCard for deep updates)
    const handleUpdateSection = (updatedSection: ScreenplaySection) => {
        const newSections = currentSections.map(s => s.id === updatedSection.id ? updatedSection : s);
        updateMetonymyData({ screenplay: newSections });
    };

    const handleAddScene = useCallback(() => {
        setIsStyleExpanded(false); // Close Visual Bible when manually adding scenes
        const id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
        const title = language === 'EN' ? `Scene ${currentSections.length + 1}` : `第 ${currentSections.length + 1} 场`;
        const newSection: ScreenplaySection = {
            id, title, content: "",
            sutureDataMap: { 'original': { literaryScript: "", globalTone: { lighting: "", texture: "", style: "", camera: "", palette: [] }, staticStoryboard: [], dynamicStoryboard: [], finalAssets: { characters: [], props: [], scenes: [] } } },
            sourceIndices: [],
            isGlobalSynced: true
        };
        const newSectionsList = [...currentSections, newSection];

        onUpdateBlueprint({
            ...blueprint,
            metonymyData: {
                ...rawMetonymyData,
                screenplay: newSectionsList,
                stylePresets: currentPresets,
                activePresetId: currentActivePresetId || 'original'
            }
        });
        setActiveSectionId(id);
        setScrollSyncTrigger(prev => prev + 1);
        // Default new scene to expanded
        setSceneStateMap(prev => ({ ...prev, [id]: 'EXPANDED' }));
        // Default new scene to SCRIPT tab
        setSceneTabMap(prev => ({ ...prev, [id]: 'SCRIPT' }));
    }, [currentSections, language, onUpdateBlueprint, blueprint, rawMetonymyData, currentPresets, currentActivePresetId]);

    const handleSortScenes = () => {
        const sortedSections = [...currentSections].sort((a, b) => {
            const minA = (a.sourceIndices && a.sourceIndices.length > 0) ? Math.min(...a.sourceIndices) : Infinity;
            const minB = (b.sourceIndices && b.sourceIndices.length > 0) ? Math.min(...b.sourceIndices) : Infinity;

            // Stable sort for equal indices or empty ones
            if (minA === minB) return 0;
            return minA - minB;
        });
        updateMetonymyData({ screenplay: sortedSections });
    };

    // --- SYNC SOURCE TEXT IF BLUEPRINT CHANGES ---
    useEffect(() => {
        if (blueprint.narrative?.synopsis) {
            // Only update if significantly different to avoid cursor jump issues during typing
            // Or just trust the sourceViewer to update via props.
            if (blueprint.narrative.synopsis !== sourceText) {
                setSourceText(blueprint.narrative.synopsis);
            }
        }
    }, [blueprint.narrative?.synopsis]);

    useEffect(() => {
        if (currentSections.length > 0 && !activeSectionId) {
            setActiveSectionId(currentSections[0].id);
        }
    }, [currentSections, activeSectionId]);

    const handleSourceTextChange = (val: string) => {
        const oldParagraphs = splitIntoParagraphs(sourceText);
        const newParagraphs = splitIntoParagraphs(val);
        setSourceText(val);

        // Update the main blueprint as well so it persists
        onUpdateBlueprint({ ...blueprint, narrative: { ...blueprint.narrative, synopsis: val } });

        if (currentSections.length === 0) return;
        const diff = newParagraphs.length - oldParagraphs.length;
        if (diff === 0) return;

        let changeIndex = -1;
        const len = Math.min(oldParagraphs.length, newParagraphs.length);
        for (let i = 0; i < len; i++) {
            if (oldParagraphs[i] !== newParagraphs[i]) {
                changeIndex = i;
                break;
            }
        }
        if (changeIndex === -1) changeIndex = len;

        const newSections = currentSections.map(section => {
            if (!section.sourceIndices || section.sourceIndices.length === 0) return section;
            const newIndices: number[] = [];
            section.sourceIndices.forEach(idx => {
                if (idx < changeIndex) {
                    newIndices.push(idx);
                } else {
                    if (diff > 0) {
                        newIndices.push(idx + diff);
                        if (idx === changeIndex) {
                            for (let k = 0; k < diff; k++) newIndices.push(changeIndex + k);
                        }
                    } else {
                        const deleteCount = Math.abs(diff);
                        if (idx < changeIndex + deleteCount) {
                        } else {
                            newIndices.push(idx + diff);
                        }
                    }
                }
            });
            const uniqueSorted = Array.from(new Set(newIndices)).sort((a, b) => a - b);
            const content = uniqueSorted.map(i => newParagraphs[i] || "").join('\n\n');
            return { ...section, sourceIndices: uniqueSorted, content: content || section.content };
        });
        updateMetonymyData({ screenplay: newSections });
    };

    // NEW: Handle Source Text Change from Suture Modal (Console)
    const handleSectionSourceChange = (text: string) => {
        if (!activeSectionId) return;
        const newSections = currentSections.map(s => {
            if (s.id === activeSectionId) {
                return { ...s, content: text };
            }
            return s;
        });
        updateMetonymyData({ screenplay: newSections });
    };

    // Toggle between EXPANDED and PARTIAL
    const handleToggleSceneState = (id: string) => {
        // If scene is focused, it's always expanded visually in the UI due to layout, 
        // but we can toggle the state map for when it un-focuses.
        setSceneStateMap(prev => {
            const current = prev[id] || 'PARTIAL'; // Default to PARTIAL
            return { ...prev, [id]: current === 'EXPANDED' ? 'PARTIAL' : 'EXPANDED' };
        });
    };

    // Handle tab change for a specific scene
    const handleSceneTabChange = (id: string, tab: SceneTabState) => {
        setSceneTabMap(prev => ({ ...prev, [id]: tab }));
    };

    const handleSetSceneState = (id: string, state: SceneCollapseState) => {
        setSceneStateMap(prev => ({ ...prev, [id]: state }));
    };

    // Cycle global states: All Expanded (0) <-> All Partial (1)
    const handleCycleCollapse = () => {
        const nextLevel = (globalCollapseLevel + 1) % 2 as 0 | 1;
        setGlobalCollapseLevel(nextLevel);

        const newMap: Record<string, SceneCollapseState> = {};

        if (nextLevel === 0) {
            // Expand All
            currentSections.forEach(s => newMap[s.id] = 'EXPANDED');
        } else {
            // Partial All
            currentSections.forEach(s => newMap[s.id] = 'PARTIAL');
        }
        setSceneStateMap(newMap);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => onUpdateBlueprint({ ...blueprint, narrative: { ...blueprint.narrative, title: e.target.value } });
    const handleProjectNameChange = (name: string) => onUpdateBlueprint({ ...blueprint, narrative: { ...blueprint.narrative, title: name } });

    const handleManualSave = () => {
        if (onSaveToHistory) {
            onSaveToHistory({
                ...blueprint,
                metonymyData: {
                    ...rawMetonymyData,
                    screenplay: currentSections,
                    stylePresets: currentPresets,
                    activePresetId: currentActivePresetId || 'original'
                }
            });
            setIsSaved(true);
            setTimeout(() => setIsSaved(false), 2000);
        }
    };

    const handleDeleteScene = (id: string) => {
        const newSections = currentSections.filter(s => s.id !== id);
        updateMetonymyData({ screenplay: newSections });
        if (activeSectionId === id) {
            setActiveSectionId(newSections.length > 0 ? newSections[0].id : null);
        }
        // If deleted scene was focused, clear focus
        if (focusedSceneId === id) {
            setFocusedSceneId(null);
        }
    };

    const handleSyncToScene = (sceneId: string, indices: number[]) => {
        const paragraphs = splitIntoParagraphs(sourceText);

        const newSections = currentSections.map(s => {
            if (s.id === sceneId) {
                // Replacement logic: Use exactly the provided indices (Sync)
                const sortedIndices = [...indices].sort((a, b) => a - b);

                // Reconstruct content based on updated indices
                const newContent = sortedIndices.map(i => paragraphs[i] || "").join('\n\n');

                return { ...s, sourceIndices: sortedIndices, content: newContent };
            }
            return s;
        });

        updateMetonymyData({ screenplay: newSections });
        setActiveSectionId(sceneId);
        setScrollSyncTrigger(prev => prev + 1);
    };

    const handleSendSelectionToNew = (indices: number[]) => {
        const paragraphs = splitIntoParagraphs(sourceText);
        const id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
        const title = language === 'EN' ? `Scene ${currentSections.length + 1}` : `第 ${currentSections.length + 1} 场`;
        const sortedIndices = indices.sort((a, b) => a - b);
        const content = sortedIndices.map(i => paragraphs[i]).join('\n\n');

        const newSection: ScreenplaySection = {
            id, title, content,
            sutureDataMap: { 'original': { literaryScript: "", globalTone: { lighting: "", texture: "", style: "", camera: "", palette: [] }, staticStoryboard: [], dynamicStoryboard: [], finalAssets: { characters: [], props: [], scenes: [] } } },
            sourceIndices: sortedIndices,
            isGlobalSynced: true
        };

        updateMetonymyData({ screenplay: [...currentSections, newSection] });
        setActiveSectionId(id);
        setScrollSyncTrigger(prev => prev + 1);
    };

    const handleAutoBreakdown = useCallback(async (instruction?: string, targetCount?: number) => {
        setIsStyleExpanded(false); // Close Visual Bible when auto-breaking down scenes
        if (!sourceText.trim()) return;
        setIsBreakingDown(true);
        setBreakdownStartTime(Date.now());
        try {
            const result = await breakdownScript(sourceText, instruction, targetCount);
            if (result && result.scenes) {
                const newSections: ScreenplaySection[] = result.scenes.map((s, sIdx) => ({
                    id: `scene-${Date.now()}-${sIdx}`,
                    title: s.title,
                    content: s.content,
                    breakdownInfo: s.breakdownInfo,
                    sourceIndices: s.indices || [],
                    isGlobalSynced: true,
                    sutureDataMap: {
                        'original': {
                            literaryScript: "",
                            globalTone: { lighting: "", texture: "", style: "", camera: "", palette: [] },
                            staticStoryboard: [],
                            dynamicStoryboard: [],
                            finalAssets: { characters: [], props: [], scenes: [] }
                        }
                    }
                }));

                let newPresets = [...currentPresets];
                if (result.visualBible) {
                    newPresets = newPresets.map(p => {
                        if (p.id === 'original') {
                            return {
                                ...p,
                                toneAnalysis: result.visualBible!.toneAnalysis,
                                assets: {
                                    characters: result.visualBible!.assets.characters.map((c: any) => ({
                                        id: Date.now() + Math.random().toString(),
                                        name: c.name,
                                        nameEn: c.nameEn,
                                        type: 'CHARACTER',
                                        analysis: {
                                            description: c.description,
                                            descriptionEn: c.descriptionEn,
                                            anchors: c.anchors,
                                            anchorsEn: c.anchorsEn
                                        }
                                    })),
                                    scenes: result.visualBible!.assets.scenes.map((s: any) => ({
                                        id: Date.now() + Math.random().toString(),
                                        name: s.name,
                                        nameEn: s.nameEn,
                                        type: 'SCENE',
                                        analysis: {
                                            description: s.description,
                                            descriptionEn: s.descriptionEn,
                                            anchors: s.anchors,
                                            anchorsEn: s.anchorsEn
                                        }
                                    })),
                                    props: result.visualBible!.assets.props.map((p: any) => ({
                                        id: Date.now() + Math.random().toString(),
                                        name: p.name,
                                        nameEn: p.nameEn,
                                        type: 'PROP',
                                        analysis: {
                                            description: p.description,
                                            descriptionEn: p.descriptionEn,
                                            anchors: p.anchors,
                                            anchorsEn: p.anchorsEn
                                        }
                                    }))
                                }
                            };
                        }
                        return p;
                    });
                }

                updateMetonymyData({
                    screenplay: newSections,
                    stylePresets: newPresets
                });

                if (newSections.length > 0) {
                    setActiveSectionId(newSections[0].id);
                    setScrollSyncTrigger(prev => prev + 1);
                }
                setIsStyleExpanded(false);
            } else {
                setAlertMessage(language === 'EN' ? "Breakdown failed. AI returned empty result." : "分场失败。AI 未能返回有效结果。");
                setIsAlertOpen(true);
            }
        } catch (e) {
            console.error("Breakdown failed", e);
            setAlertMessage(language === 'EN' ? "Error during breakdown process." : "分场过程中发生错误。");
            setIsAlertOpen(true);
        } finally {
            setIsBreakingDown(false);
            setBreakdownStartTime(null);
        }
    }, [sourceText, language, updateMetonymyData, currentPresets]);

    // Helper: Map Preset Asset to Final Asset Item
    const mapPresetAssetToFinal = (asset: MetonymyAssetInput): FinalAssetItem => ({
        id: asset.id,
        name: asset.name,
        nameEn: asset.nameEn,
        type: asset.type,
        anchors: asset.analysis?.anchors || "",
        description: asset.analysis?.description || "",
        imageUrl: asset.imageUrl
    });

    const getActiveSutureData = (section: ScreenplaySection, presetId: string) => {
        if (!section.sutureDataMap) return section.sutureData; // Fallback
        return section.sutureDataMap[presetId] || section.sutureDataMap['original'];
    };

    // Helper to get Assets for display - Merges actual scene data with Preset fallback
    const getDisplayAssets = (section: ScreenplaySection, presetId: string) => {
        const sutureData = getActiveSutureData(section, presetId);

        // BUG FIX: Check if finalAssets exists, NOT if it has length. 
        // We want to allow empty arrays if the user deliberately deleted everything.
        if (sutureData?.finalAssets) {
            return sutureData.finalAssets;
        }

        // Fallback: If SutureData doesn't exist for this preset yet, default to preset assets
        const preset = currentPresets.find(p => p.id === presetId);
        if (preset) {
            return {
                characters: preset.assets.characters.map(mapPresetAssetToFinal),
                scenes: preset.assets.scenes.map(mapPresetAssetToFinal),
                props: preset.assets.props.map(mapPresetAssetToFinal)
            };
        }

        return { characters: [], props: [], scenes: [] };
    };

    // Helper: Ensure Suture Data exists before modification
    const ensureSutureDataExists = (sectionId: string, presetId: string) => {
        const section = currentSections.find(s => s.id === sectionId);
        if (!section) return null;

        let newMap = { ...section.sutureDataMap };

        // If data doesn't exist for this preset, we need to hydrate it
        // We hydrate it with the FALLBACK assets (from the preset) so the user is editing a real copy
        if (!newMap[presetId]) {
            const preset = currentPresets.find(p => p.id === presetId);
            const fallbackAssets = preset ? {
                characters: preset.assets.characters.map(mapPresetAssetToFinal),
                scenes: preset.assets.scenes.map(mapPresetAssetToFinal),
                props: preset.assets.props.map(mapPresetAssetToFinal)
            } : { characters: [], scenes: [], props: [] };

            // We also want to inherit the script from 'original' if available, or empty
            const baseScript = newMap['original']?.literaryScript || "";
            const baseTone = preset?.toneAnalysis || newMap['original']?.globalTone || { lighting: "", texture: "", style: "", camera: "", palette: [] };

            newMap[presetId] = {
                literaryScript: baseScript, // Inherit text base
                staticStoryboard: [],
                dynamicStoryboard: [],
                globalTone: baseTone,
                finalAssets: fallbackAssets
            };
        }
        return newMap;
    };


    const handleAddFinalAsset = (sectionId: string, type: 'characters' | 'props' | 'scenes') => {
        const presetId = currentSections.find(s => s.id === sectionId)?.mountedPresetId || currentActivePresetId || 'original';

        const newMap = ensureSutureDataExists(sectionId, presetId);
        if (!newMap) return;

        const currentData = newMap[presetId];
        const assets = currentData.finalAssets || { characters: [], props: [], scenes: [] };

        const newItem: FinalAssetItem = {
            id: `asset-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
            name: "New Asset",
            type: type === 'characters' ? 'CHARACTER' : (type === 'scenes' ? 'SCENE' : 'PROP'),
            anchors: "",
            description: ""
        };

        newMap[presetId] = {
            ...currentData,
            finalAssets: {
                ...assets,
                [type]: [...(assets as any)[type], newItem]
            }
        };

        const newSections = currentSections.map(s => s.id === sectionId ? { ...s, sutureDataMap: newMap } : s);
        updateMetonymyData({ screenplay: newSections });
    };

    const handleUpdateFinalAsset = (sectionId: string, type: 'characters' | 'props' | 'scenes', updatedItem: FinalAssetItem) => {
        const presetId = currentSections.find(s => s.id === sectionId)?.mountedPresetId || currentActivePresetId || 'original';

        const newMap = ensureSutureDataExists(sectionId, presetId);
        if (!newMap) return;

        const currentData = newMap[presetId];
        const assets = currentData.finalAssets || { characters: [], props: [], scenes: [] };

        newMap[presetId] = {
            ...currentData,
            finalAssets: {
                ...assets,
                [type]: (assets as any)[type].map((item: any) => item.id === updatedItem.id ? updatedItem : item)
            }
        };

        const newSections = currentSections.map(s => s.id === sectionId ? { ...s, sutureDataMap: newMap } : s);
        updateMetonymyData({ screenplay: newSections });
    };

    const handleDeleteFinalAsset = (sectionId: string, type: 'characters' | 'props' | 'scenes', itemId: string) => {
        const presetId = currentSections.find(s => s.id === sectionId)?.mountedPresetId || currentActivePresetId || 'original';

        const newMap = ensureSutureDataExists(sectionId, presetId);
        if (!newMap) return;

        const currentData = newMap[presetId];
        const assets = currentData.finalAssets || { characters: [], props: [], scenes: [] };

        newMap[presetId] = {
            ...currentData,
            finalAssets: {
                ...assets,
                [type]: (assets as any)[type].filter((item: any) => item.id !== itemId)
            }
        };

        const newSections = currentSections.map(s => s.id === sectionId ? { ...s, sutureDataMap: newMap } : s);
        updateMetonymyData({ screenplay: newSections });
    };

    // NEW: Handle Reset Final Assets to Preset Defaults
    const handleResetFinalAssets = (sectionId: string) => {
        const section = currentSections.find(s => s.id === sectionId);
        if (!section) return;

        const presetId = section.mountedPresetId || currentActivePresetId || 'original';
        const preset = currentPresets.find(p => p.id === presetId);

        if (!preset) return;

        const fallbackAssets = {
            characters: preset.assets.characters.map(mapPresetAssetToFinal),
            scenes: preset.assets.scenes.map(mapPresetAssetToFinal),
            props: preset.assets.props.map(mapPresetAssetToFinal)
        };

        // We can just overwrite the finalAssets in sutureDataMap
        const newMap = { ...section.sutureDataMap };
        // If data doesn't exist, we create it; if it exists, we just update finalAssets
        if (!newMap[presetId]) {
            // ... hydration logic similar to ensureSutureDataExists
            const baseScript = newMap['original']?.literaryScript || "";
            const baseTone = preset?.toneAnalysis || newMap['original']?.globalTone || { lighting: "", texture: "", style: "", camera: "", palette: [] };

            newMap[presetId] = {
                literaryScript: baseScript,
                staticStoryboard: [],
                dynamicStoryboard: [],
                globalTone: baseTone,
                finalAssets: fallbackAssets
            };
        } else {
            newMap[presetId] = {
                ...newMap[presetId],
                finalAssets: fallbackAssets
            };
        }

        const newSections = currentSections.map(s => s.id === sectionId ? { ...s, sutureDataMap: newMap } : s);
        updateMetonymyData({ screenplay: newSections });
    };


    const handleUpdateTone = (sectionId: string, field: keyof GlobalVisualTone, value: string) => {
        const newSections = currentSections.map(s => {
            if (s.id === sectionId) {
                const presetId = s.mountedPresetId || currentActivePresetId || 'original';

                let newMap = s.sutureDataMap ? { ...s.sutureDataMap } : {};
                if (!newMap[presetId]) {
                    // Hydrate if missing
                    const preset = currentPresets.find(p => p.id === presetId);
                    const fallbackAssets = preset ? {
                        characters: preset.assets.characters.map(mapPresetAssetToFinal),
                        scenes: preset.assets.scenes.map(mapPresetAssetToFinal),
                        props: preset.assets.props.map(mapPresetAssetToFinal)
                    } : { characters: [], scenes: [], props: [] };
                    const baseTone = preset?.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] };

                    newMap[presetId] = {
                        literaryScript: newMap['original']?.literaryScript || "",
                        staticStoryboard: [],
                        dynamicStoryboard: [],
                        globalTone: baseTone,
                        finalAssets: fallbackAssets
                    };
                }

                const currentData = newMap[presetId];
                const tone = currentData.globalTone || { lighting: "", texture: "", style: "", camera: "", palette: [] };

                newMap[presetId] = {
                    ...currentData,
                    globalTone: { ...tone, [field]: value }
                };

                return { ...s, sutureDataMap: newMap };
            }
            return s;
        });
        updateMetonymyData({ screenplay: newSections });
    };

    const handleUpdateBreakdownInfo = (sectionId: string, text: string) => {
        const newSections = currentSections.map(s => {
            if (s.id === sectionId) {
                return { ...s, breakdownInfo: text };
            }
            return s;
        });
        updateMetonymyData({ screenplay: newSections });
    };

    const handleReverseEngineer = async (sectionId: string, type: 'characters' | 'props' | 'scenes', item: FinalAssetItem) => {
        if (!item.imageUrl) return;
        setAnalyzingAssetId(item.id);
        try {
            const analysis = await analyzeAssetImage(item.imageUrl, item.type);
            if (analysis) {
                handleUpdateFinalAsset(sectionId, type, {
                    ...item,
                    anchors: analysis.anchors || item.anchors,
                    description: analysis.description || item.description
                });
            }
        } finally {
            setAnalyzingAssetId(null);
        }
    };

    const handleReverseEngineerAll = async (sectionId: string) => {
        const section = currentSections.find(s => s.id === sectionId);
        const presetId = section?.mountedPresetId || currentActivePresetId || 'original';
        const currentAssets = getDisplayAssets(section!, presetId);

        if (!currentAssets) return;

        setBatchAnalyzing(true);
        const tasks: { type: 'characters' | 'props' | 'scenes', item: FinalAssetItem }[] = [];
        ['characters', 'props', 'scenes'].forEach(type => {
            (currentAssets as any)[type].forEach((item: FinalAssetItem) => {
                if (item.imageUrl) tasks.push({ type: type as any, item });
            });
        });

        try {
            await Promise.all(tasks.map(t => handleReverseEngineer(sectionId, t.type, t.item)));
        } finally {
            setBatchAnalyzing(false);
        }
    };

    // GENERATE SUTURE (Base Script or Style Transfer)
    const handleSutureGenerate = async (text: string, config: SutureConfig) => {
        if (!activeSectionId) return null;

        const currentIndex = currentSections.findIndex(s => s.id === activeSectionId);
        const section = currentSections[currentIndex];
        const presetToUseId = config.targetPresetId || section.mountedPresetId || currentActivePresetId || 'original';

        setIsGenerating(true);
        setGenerationStartTime(Date.now());

        try {
            if (presetToUseId === 'original') {
                // CASE 1: Generate Base Script (Text Style)
                setLoadingStatus(language === 'EN' ? "Drafting Base Script..." : "生成基础剧本...");

                const result = await generateSutureScript(
                    text, config, blueprint.narrative?.synopsis || "", fieldState,
                    (status) => setLoadingStatus(status), currentIndex + 1, "",
                    undefined,
                    []
                );

                if (result) {
                    const response = result as SutureResponse;
                    const parsedStaticShots = parseLiteraryScriptToStaticShots(response.literaryScript);

                    // NEW LOGIC: Also initialize dynamic storyboard to ensure structure exists
                    const initialDynamicShots = syncDynamicWithStatic(parsedStaticShots, []);

                    const newSections = currentSections.map(s => {
                        if (s.id === activeSectionId) {
                            return {
                                ...s,
                                mountedPresetId: 'original', // Force mount original style per user request
                                sutureDataMap: {
                                    ...s.sutureDataMap,
                                    'original': {
                                        ...response,
                                        staticStoryboard: parsedStaticShots,
                                        dynamicStoryboard: initialDynamicShots,
                                        globalTone: response.globalTone || { lighting: "", texture: "", style: "", camera: "", palette: [] }
                                    }
                                }
                            };
                        }
                        return s;
                    });
                    updateMetonymyData({ screenplay: newSections });
                    return response.literaryScript;
                }
            } else {
                // CASE 2: Visual Style Transfer
                const baseData = section.sutureDataMap?.['original'];
                if (!baseData || !baseData.literaryScript) {
                    setAlertMessage(language === 'EN' ? "Please generate base script (Original Style) first." : "请先切换至【原文风格】生成基础剧本。");
                    setIsAlertOpen(true);
                    return null;
                }

                setLoadingStatus(language === 'EN' ? "Applying Visual Style..." : "正在进行视觉风格转译...");
                const targetPreset = currentPresets.find(p => p.id === presetToUseId);
                if (!targetPreset) return null;

                const transferredScript = await transformScriptStyle(baseData.literaryScript, targetPreset);

                if (transferredScript) {
                    const parsedStaticShots = parseLiteraryScriptToStaticShots(transferredScript);

                    const newSections = currentSections.map(s => {
                        if (s.id === activeSectionId) {

                            // IMPORTANT: Inherit existing assets if any, or map from preset
                            let finalAssets = s.sutureDataMap?.[presetToUseId]?.finalAssets;
                            if (!finalAssets || (finalAssets.characters.length === 0 && finalAssets.scenes.length === 0)) {
                                finalAssets = {
                                    characters: targetPreset.assets.characters.map(mapPresetAssetToFinal),
                                    scenes: targetPreset.assets.scenes.map(mapPresetAssetToFinal),
                                    props: targetPreset.assets.props.map(mapPresetAssetToFinal)
                                };
                            }

                            // Sync Dynamic with New Static
                            const existingDynamic = s.sutureDataMap?.[presetToUseId]?.dynamicStoryboard || [];
                            const syncedDynamicShots = syncDynamicWithStatic(parsedStaticShots, existingDynamic);

                            const newSutureData: SutureResponse = {
                                literaryScript: transferredScript,
                                staticStoryboard: parsedStaticShots,
                                dynamicStoryboard: syncedDynamicShots,
                                globalTone: targetPreset.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] },
                                finalAssets: finalAssets
                            };

                            return {
                                ...s,
                                sutureDataMap: {
                                    ...s.sutureDataMap,
                                    [presetToUseId]: newSutureData
                                }
                            };
                        }
                        return s;
                    });
                    updateMetonymyData({ screenplay: newSections });
                    return transferredScript;
                }
            }
            return null;
        } finally {
            setIsGenerating(false);
            setGenerationStartTime(null);
            setLoadingStatus("");
        }
    };

    const handleSyncStaticFromScript = (section: ScreenplaySection) => {
        const presetId = section.mountedPresetId || currentActivePresetId || 'original';
        const currentData = section.sutureDataMap?.[presetId];
        const scriptToUse = currentData?.literaryScript || "";

        if (!scriptToUse) return;

        const parsedStaticShots = parseLiteraryScriptToStaticShots(scriptToUse);

        // Sync Dynamic
        const existingDynamic = currentData?.dynamicStoryboard || [];
        const syncedDynamicShots = syncDynamicWithStatic(parsedStaticShots, existingDynamic);

        const newSections = currentSections.map(s => {
            if (s.id === section.id) {
                return {
                    ...s,
                    sutureDataMap: {
                        ...s.sutureDataMap,
                        [presetId]: {
                            ...currentData!,
                            staticStoryboard: parsedStaticShots,
                            dynamicStoryboard: syncedDynamicShots
                        }
                    }
                };
            }
            return s;
        });
        updateMetonymyData({ screenplay: newSections });
    };

    const handleGenerateVisuals = async (section: ScreenplaySection, target: 'STATIC' | 'DYNAMIC') => {
        if (target === 'STATIC') {
            handleSyncStaticFromScript(section);
            return;
        }

        const presetToUseId = section.mountedPresetId || currentActivePresetId || 'original';
        let currentData = section.sutureDataMap?.[presetToUseId] || section.sutureDataMap?.['original'];

        const scriptToUse = currentData?.literaryScript || section.content;

        if (presetToUseId !== 'original' && !currentData?.literaryScript) {
            setAlertMessage(language === 'EN' ? "Please generate script for this style first." : "请先为此风格生成剧本。");
            setIsAlertOpen(true);
            return;
        }

        if (!scriptToUse || !scriptToUse.trim()) {
            setAlertMessage(language === 'EN' ? "Please input narrative content or generate literary script first." : "请先输入叙事内容或点击【生成剧本】。");
            setIsAlertOpen(true);
            return;
        }

        // --- KEY FIX: FORCE SYNC STATIC SHOTS BEFORE DYNAMIC GENERATION ---
        const latestStaticShots = parseLiteraryScriptToStaticShots(scriptToUse);
        if (currentData) {
            currentData = { ...currentData, staticStoryboard: latestStaticShots };
        }
        // ------------------------------------------------------------------

        const activeGlobalPreset = currentPresets.find(p => p.id === presetToUseId);

        const globalContext = {
            tone: activeGlobalPreset?.toneAnalysis || { lighting: "", texture: "", style: "", camera: "", palette: [] },
            assets: activeGlobalPreset?.assets || { characters: [], scenes: [], props: [] }
        };

        const referenceImages: string[] = [];
        if (activeGlobalPreset) {
            if (activeGlobalPreset.toneImage) {
                referenceImages.push(activeGlobalPreset.toneImage);
            }
            activeGlobalPreset.assets.characters.forEach(c => {
                if (c.imageUrl) referenceImages.push(c.imageUrl);
            });
        }
        const sceneAnchor = visualAnchors[section.id];
        if (sceneAnchor) {
            referenceImages.push(sceneAnchor);
        }

        setIsGenerating(true);
        setGenerationStartTime(Date.now());
        setLoadingStatus("Generating Dynamic Shots...");
        try {
            const inputSutureData = currentData || { literaryScript: scriptToUse, globalTone: globalContext.tone, staticStoryboard: latestStaticShots, dynamicStoryboard: [], finalAssets: { characters: [], props: [], scenes: [] } };

            const result = await generateSutureStoryboard(
                inputSutureData,
                blueprint.narrative?.synopsis || "",
                fieldState || {},
                (status) => setLoadingStatus(status),
                target,
                referenceImages,
                globalContext as any
            );
            if (result) {
                const newSections = currentSections.map(s => {
                    if (s.id === section.id) {
                        return {
                            ...s,
                            sutureDataMap: {
                                ...s.sutureDataMap,
                                [presetToUseId]: {
                                    ...inputSutureData,
                                    ...result,
                                    staticStoryboard: latestStaticShots // Ensure we save the parsed static shots
                                }
                            }
                        };
                    }
                    return s;
                });
                updateMetonymyData({ screenplay: newSections });
            }
        } finally {
            setIsGenerating(false);
            setGenerationStartTime(null);
            setLoadingStatus("");
        }
    };

    const handleMountPreset = (sectionId: string, presetId: string) => {
        const newSections = currentSections.map(s => {
            if (s.id === sectionId) {
                return { ...s, mountedPresetId: presetId };
            }
            return s;
        });
        updateMetonymyData({ screenplay: newSections });
    };

    const handleToggleGlobalSync = (sectionId: string) => {
        const newSections = currentSections.map(s => s.id === sectionId ? { ...s, isGlobalSynced: !s.isGlobalSynced } : s);
        updateMetonymyData({ screenplay: newSections });
    };

    // Toggle Focused Scene ID Logic
    const handleToggleFocus = (sceneId: string) => {
        setFocusedSceneId(prev => prev === sceneId ? null : sceneId);

        // Also ensure scene is expanded if focused
        if (focusedSceneId !== sceneId) {
            setSceneStateMap(prev => ({ ...prev, [sceneId]: 'EXPANDED' }));
        }
    };

    const themeColorBase = themeAccent.replace('text-', '');
    const activeSectionIndex = currentSections.findIndex(s => s.id === activeSectionId) + 1;

    const activeSection = currentSections.find(s => s.id === activeSectionId);
    const activeSectionSourceContent = activeSection?.content || "";

    const btnWidthClass = language === 'EN' ? 'w-[124px]' : 'w-[104px]';
    const btnBaseClass = theme === 'retro' 
        ? `h-9 ${btnWidthClass} justify-center rounded-lg bg-[var(--bg-header)] border border-[#8B261D]/20 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#8B261D]/70 hover:text-[#8B261D] hover:border-[#8B261D]/40 transition-all duration-100 active:scale-95 shadow-sm focus:outline-none`
        : `h-9 ${btnWidthClass} justify-center rounded-lg bg-zinc-900 border border-zinc-700/50 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-100 active:scale-95 shadow-sm focus:outline-none`;

    const btnAddSceneClass = theme === 'retro'
        ? `h-9 px-4 rounded-lg bg-[#8B261D] border border-[#8B261D] flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-[#A52A2A] transition-all duration-100 active:scale-95 shadow-md focus:outline-none`
        : `h-9 px-4 rounded-lg bg-${themeColorBase}/20 border-current flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${themeAccent} hover:bg-${themeColorBase}/30 transition-all duration-100 active:scale-95 shadow-md focus:outline-none`;

    return (
        <div className={`${isFullScreen ? 'w-full px-0' : 'w-full'} flex flex-col h-full ${theme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-[#080808]'}`}>
            {/* Header */}
            <div className={`shrink-0 flex items-center justify-between border-b ${theme === 'retro' ? 'border-black/10 bg-[var(--bg-header)]' : 'border-zinc-800 bg-[#080808]'} h-16 px-6`}>
                <div className="flex items-center gap-3 flex-1">
                    <div className={`p-1.5 rounded-lg ${theme === 'retro' ? 'bg-white border-[#8B261D]/20' : 'bg-zinc-900 border-zinc-700'} border ${themeAccent}`}><FileText size={16} /></div>
                    <div className="flex flex-col justify-center">
                        <span className={`text-[10px] ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-100'} uppercase tracking-widest font-bold leading-none mb-0.5`}>
                            {language === 'EN' ? "Metonymy Engine" : "换喻引擎"}
                        </span>
                        <input value={blueprint.narrative?.title || ""} onChange={handleTitleChange} className={`bg-transparent ${theme === 'retro' ? 'text-black' : 'text-white'} font-serif font-bold text-sm focus:outline-none border-none p-0 w-full min-w-[200px]`} />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={onToggleFullScreen}
                        className={btnBaseClass}
                        title={isFullScreen ? (language === 'EN' ? "Exit Fullscreen" : "退出全屏") : (language === 'EN' ? "Expand Engine" : "全屏模式")}
                    >
                        {isFullScreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                        <span className="hidden lg:inline">{isFullScreen ? (language === 'EN' ? "NORMAL" : "常规视图") : (language === 'EN' ? "FULLSCREEN" : "全屏展开")}</span>
                    </button>

                    <button onClick={() => setIsSourceVisible(!isSourceVisible)} className={btnBaseClass} title={language === 'EN' ? "Toggle Sidebar" : "侧边开关"}>
                        {isSourceVisible ? <PanelLeftClose size={14} /> : <PanelLeft size={14} />}
                        <span className="hidden lg:inline">{language === 'EN' ? "SIDEBAR" : "侧边折叠"}</span>
                    </button>

                    <button onClick={handleManualSave} className={btnBaseClass} title={language === 'EN' ? "Save to History" : "保存至历史记录"}>
                        {isSaved ? <Check size={14} className="text-green-500" /> : <Save size={14} />}
                        <span className="hidden lg:inline">{isSaved ? (language === 'EN' ? "SAVED" : "已保存") : (language === 'EN' ? "SAVE" : "保存记录")}</span>
                    </button>

                    <button onClick={handleSortScenes} className={btnBaseClass} title={language === 'EN' ? "Sort Scenes by Text Order" : "按文本顺序排序"}>
                        <ArrowDownAZ size={14} />
                        <span className="hidden lg:inline">{language === 'EN' ? "SORT" : "排序"}</span>
                    </button>

                    <button onClick={handleCycleCollapse} className={btnBaseClass} title={language === 'EN' ? "Toggle Collapse" : "切换折叠"}>
                        {globalCollapseLevel === 1 ? <ChevronsDown size={14} /> : <ChevronsUp size={14} />}
                        <span className="hidden lg:inline">
                            {globalCollapseLevel === 1
                                ? (language === 'EN' ? "Partial" : "部分折叠")
                                : (language === 'EN' ? "Expand All" : "全部展开")
                            }
                        </span>
                    </button>

                    <button onClick={handleAddScene} className={btnAddSceneClass} title={language === 'EN' ? "Add New Scene" : "添加新场次"}>
                        <Plus size={14} />
                        <span>{language === 'EN' ? "ADD SCENE" : "新增场次"}</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 flex overflow-hidden">
                    <div className={`${isSourceVisible ? 'w-1/3 min-w-[320px] max-w-[500px] translate-x-0' : 'w-0 opacity-0 -translate-x-full overflow-hidden'} border-r ${theme === 'retro' ? 'border-black/10 bg-[var(--bg-header)]' : 'border-zinc-800 bg-[#0a0a0a]'} flex flex-col shrink-0 transition-all duration-310 ease-in-out`}>
                        <SourceViewer
                            text={sourceText}
                            onChange={handleSourceTextChange}
                            lang={language}
                            themeAccent={themeAccent}
                            themeColorBase={themeColorBase}
                            activeSceneIndex={activeSectionIndex}
                            activeSceneId={activeSectionId}
                            scrollSyncTrigger={scrollSyncTrigger}
                            sections={currentSections}
                            onSendToActive={(targetId, indices) => handleSyncToScene(targetId, indices)}
                            onSendToNew={handleSendSelectionToNew}
                            onAutoBreakdown={handleAutoBreakdown}
                            isBreakingDown={isBreakingDown}
                            breakdownStartTime={breakdownStartTime}
                            theme={theme}
                        />
                    </div>

                    <div className="flex-1 flex flex-col overflow-hidden">
                        {!focusedSceneId && (
                            <VisualStyleManager
                                presets={currentPresets}
                                activePresetId={currentActivePresetId}
                                onUpdatePresets={handleUpdatePresets}
                                onSetActivePreset={handleSetActivePreset}
                                onUpdatePresetsAndActive={handleUpdatePresetsAndActive}
                                lang={language}
                                themeAccent={themeAccent}
                                theme={theme}
                                isExpanded={isStyleExpanded}
                                onToggleExpand={setIsStyleExpanded}
                                sourceText={sourceText}
                            />
                        )}

                        {(!isStyleExpanded || focusedSceneId) && (
                            <div className={`flex-1 ${theme === 'retro' ? 'bg-[var(--bg-header)]' : 'bg-[#080808]'} animate-in fade-in duration-300 ${focusedSceneId ? 'overflow-hidden px-6 pt-6 pb-16 flex flex-col' : 'overflow-y-auto custom-scrollbar p-6 pb-32 space-y-8'}`}>
                                {currentSections.length > 0 ? currentSections
                                    // FILTER: Only show the focused scene if one is selected
                                    .filter(s => focusedSceneId ? s.id === focusedSceneId : true)
                                    .map((section, idx) => {
                                        // When filtered, map idx is 0, but we want original index for display #
                                        // Find original index in full list
                                        const originalIndex = currentSections.findIndex(s => s.id === section.id);

                                        const presetId = section.mountedPresetId || currentActivePresetId || 'original';
                                        const assetsToDisplay = getDisplayAssets(section, presetId);
                                        const globalTone = getActiveSutureData(section, presetId)?.globalTone || { lighting: "", texture: "", style: "", camera: "", palette: [] };

                                        return (
                                            <MetonymySceneCard
                                                key={section.id}
                                                section={{
                                                    ...section,
                                                    sutureData: getActiveSutureData(section, presetId)
                                                }}
                                                index={originalIndex}
                                                isActive={activeSectionId === section.id}
                                                collapseState={sceneStateMap[section.id] || 'PARTIAL'}
                                                onToggleState={() => handleToggleSceneState(section.id)}
                                                onSetActive={() => {
                                                    setActiveSectionId(section.id);
                                                    setScrollSyncTrigger(prev => prev + 1);
                                                }}
                                                onUpdateSectionTitle={(title) => { const newSecs = [...currentSections]; newSecs[originalIndex].title = title; updateMetonymyData({ screenplay: newSecs }); }}
                                                onDeleteScene={() => handleDeleteScene(section.id)}
                                                onOpenPreview={(c, t) => { setPreviewContent(c); setPreviewTitle(t); setIsPreviewOpen(true); }}
                                                isEditingScript={editModeMap[section.id] || false}
                                                toggleEditScript={() => setEditModeMap({ ...editModeMap, [section.id]: !editModeMap[section.id] })}
                                                onUpdateScript={(text) => {
                                                    const newMap = ensureSutureDataExists(section.id, presetId);
                                                    if (newMap) {
                                                        const currentData = newMap[presetId];
                                                        newMap[presetId] = { ...currentData, literaryScript: text };
                                                        const newSections = currentSections.map(s => s.id === section.id ? { ...s, sutureDataMap: newMap } : s);
                                                        updateMetonymyData({ screenplay: newSections });
                                                    }
                                                }}
                                                onUpdateProtocol={(text) => {
                                                    const newMap = ensureSutureDataExists(section.id, presetId);
                                                    if (newMap) {
                                                        const currentData = newMap[presetId];
                                                        newMap[presetId] = { ...currentData, protocolOverride: text };
                                                        const newSections = currentSections.map(s => s.id === section.id ? { ...s, sutureDataMap: newMap } : s);
                                                        updateMetonymyData({ screenplay: newSections });
                                                    }
                                                }}
                                                onUpdateBreakdownInfo={(text) => handleUpdateBreakdownInfo(section.id, text)}
                                                onGenerateSuture={() => {
                                                    setActiveSectionId(section.id);
                                                    setScrollSyncTrigger(prev => prev + 1);
                                                    handleSetSutureOpen(true);
                                                }}

                                                finalAssets={assetsToDisplay}

                                                onAddAsset={(type) => handleAddFinalAsset(section.id, type)}
                                                onUpdateAsset={(type, item) => handleUpdateFinalAsset(section.id, type, item)}
                                                onDeleteAsset={(type, id) => handleDeleteFinalAsset(section.id, type, id)}
                                                onReverseEngineerAsset={(type, item) => handleReverseEngineer(section.id, type, item)}
                                                onReverseEngineerAll={() => handleReverseEngineerAll(section.id)}
                                                analyzingAssetId={analyzingAssetId}
                                                batchAnalyzing={batchAnalyzing}
                                                assetDisplayLang={assetDisplayLang}
                                                onToggleAssetLang={() => setAssetDisplayLang(prev => prev === 'CN' ? 'EN' : 'CN')}

                                                globalTone={globalTone}
                                                onUpdateTone={(field, val) => handleUpdateTone(section.id, field, val)}

                                                isGenerating={isGenerating}
                                                generationStartTime={generationStartTime}
                                                onGenerateStatic={() => handleGenerateVisuals(section, 'STATIC')}
                                                onGenerateDynamic={() => handleGenerateVisuals(section, 'DYNAMIC')}
                                                anchorImage={visualAnchors[section.id] || null}
                                                isAnchorUploading={isAnchorUploadingMap[section.id] || false}
                                                onUploadAnchor={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        setIsAnchorUploadingMap(prev => ({ ...prev, [section.id]: true }));
                                                        try {
                                                            const url = await supabaseDatabase.uploadImage(file);
                                                            if (url) {
                                                                setVisualAnchors(prev => ({ ...prev, [section.id]: url }));
                                                            }
                                                        } catch (err) {
                                                            console.error("Upload failed:", err);
                                                        } finally {
                                                            setIsAnchorUploadingMap(prev => ({ ...prev, [section.id]: false }));
                                                        }
                                                    }
                                                }}
                                                onRemoveAnchor={() => setVisualAnchors(prev => { const n = { ...prev }; delete n[section.id]; return n; })}
                                                storyboardDisplayLang={storyboardDisplayLang}
                                                onToggleStoryboardLang={() => setStoryboardDisplayLang(prev => prev === 'CN' ? 'EN' : 'CN')}
                                                dynamicDisplayLang={dynamicDisplayLang}
                                                onToggleDynamicLang={() => setDynamicDisplayLang(prev => prev === 'CN' ? 'EN' : 'CN')}
                                                themeAccent={themeAccent}
                                                themeColorBase={themeColorBase}
                                                theme={theme}
                                                language={language}
                                                onDragStart={(e) => setDraggedSceneId(section.id)}
                                                onDragOver={(e) => e.preventDefault()}
                                                onDrop={(e) => { e.preventDefault(); if (!draggedSceneId || draggedSceneId === section.id) return; const sIdx = currentSections.findIndex(s => s.id === draggedSceneId); const tIdx = currentSections.findIndex(s => s.id === section.id); const n = [...currentSections]; const [r] = n.splice(sIdx, 1); n.splice(tIdx, 0, r); updateMetonymyData({ screenplay: n }); setDraggedSceneId(null); }}
                                                onDragEnd={() => setDraggedSceneId(null)}
                                                isDragged={draggedSceneId === section.id}
                                                onToggleGlobalSync={() => handleToggleGlobalSync(section.id)}
                                                presets={currentPresets}
                                                activePresetId={currentActivePresetId}
                                                onMountPreset={(pid) => handleMountPreset(section.id, pid)}
                                                onGenerateAssetImage={onGenerateAssetImage}
                                                onUpdateSection={handleUpdateSection}
                                                onResetAssets={() => handleResetFinalAssets(section.id)}

                                                activeTab={sceneTabMap[section.id] || 'SCRIPT'}
                                                onTabChange={(tab) => handleSceneTabChange(section.id, tab)}

                                                // NEW PROPS FOR FOCUS
                                                isFocused={focusedSceneId === section.id}
                                                onToggleFocus={() => handleToggleFocus(section.id)}
                                            />
                                        )
                                    }) : (
                                    <div className={`flex flex-col items-center justify-center h-full gap-4 mt-20 ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-600'}`}>
                                        <Layers size={48} className="opacity-20" />
                                        <div className="text-center">
                                            <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'}`}>{language === 'EN' ? "No Scenes Yet" : "暂无场次"}</p>
                                            <p className={`text-xs ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-600'}`}>{language === 'EN' ? "Use 'Breakdown' or 'Add Scene' to start." : "请使用左侧“AI 智能分场”或右上角“新增场次”开始。"}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <SutureModal
                isOpen={isSutureOpen}
                onClose={() => handleSetSutureOpen(false)}
                onGenerate={handleSutureGenerate}
                isGenerating={isGenerating}
                generationStartTime={generationStartTime}
                lang={language}
                driverType={blueprint.driverType}
                projectName={blueprint.narrative?.title}
                onProjectNameChange={handleProjectNameChange}
                onSave={() => onSaveToHistory(blueprint)}
                initialContent={activeSectionSourceContent}
                onSourceChange={handleSectionSourceChange}
                totalSourceText={sourceText}
                presets={currentPresets}
                activePresetId={currentSections.find(s => s.id === activeSectionId)?.mountedPresetId || currentActivePresetId || 'original'}
            />
            <PreviewContentModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} content={previewContent} title={previewTitle} themeAccent={themeAccent} lang={language} theme={theme} />

            {/* Simple Themed Alert Modal */}
            {isAlertOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className={`w-full max-w-sm ${theme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]' : 'bg-[#0c0c0c] border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.5)]'} border-2 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200`}>
                        <div className={`px-6 py-8 text-center ${theme === 'retro' ? 'text-black' : 'text-white'}`}>
                            <div className={`w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center ${theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-800 text-zinc-400'}`}>
                                <AlertCircle size={28} />
                            </div>
                            <h3 className={`text-sm font-bold uppercase tracking-[0.2em] mb-3 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-200'}`}>
                                {language === 'EN' ? "Attention" : "提示"}
                            </h3>
                            <p className={`text-xs ${theme === 'retro' ? 'text-[#3D1A16]/80' : 'text-zinc-400'} leading-relaxed font-medium px-4`}>
                                {alertMessage}
                            </p>
                        </div>
                        <div className={`p-4 border-t ${theme === 'retro' ? 'border-[#8B261D]/10 bg-[var(--bg-header)]/50' : 'border-zinc-900 bg-zinc-950/50'}`}>
                            <button
                                onClick={() => setIsAlertOpen(false)}
                                className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all active:scale-95 ${theme === 'retro' ? 'bg-[#8B261D] text-white hover:bg-[#A52A2A] shadow-md' : `bg-${themeColorBase}/20 text-${themeColorBase} hover:bg-${themeColorBase}/30 border border-current`}`}
                            >
                                {language === 'EN' ? "Got it" : "确认"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
