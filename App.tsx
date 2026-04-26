import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { Cpu } from 'lucide-react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NarrativeEngineField } from './components/NarrativeEngineField';
import { BlueprintEditor } from './components/BlueprintEditor';
import { AnalysisView } from './components/blueprint/AnalysisView';
import { HistoryModal } from './components/HistoryModal';
import { NarrativePathsView } from './components/NarrativePathsView';
import { ProductManualModal } from './components/ProductManualModal';
import { SutureModal } from './components/SutureModal';
import { NarrativeLibraryModal } from './components/NarrativeLibraryModal';
import { TensionMonitorModal } from './components/TensionMonitorModal';
import { MetonymyView } from './components/blueprint/MetonymyView';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { AppHeader } from './components/AppHeader';
import { EngineBottomBar } from './components/EngineBottomBar';
import { TaskManagerPanel } from './components/TaskManagerPanel';
import { LandingView } from './components/LandingView';
import { UniversePortal } from './components/UniversePortal';
import { GlobalHomePage } from './components/GlobalHomePage';
import { VisionSidebar } from './components/VisionSidebar';
import { TheSkinSidebar } from './components/TheSkinSidebar';
import { AestheticInputSidebar } from './components/AestheticInputSidebar';
import { PromptInspectorModal } from './components/PromptInspectorModal';
import {
    DriverType,
    CreativeTreatment,
    CreativeBlueprint,
    NarrativeFieldState,
    HistoryItem,
    StyleConfig,
    WorldLawConfig,
    SutureConfig,
    SubjectType,
    User,
    ViewMode,
    AestheticMode,
    AestheticPreset,
    FaceState
} from './types';
import {
    DRIVERS,
    NARRATIVE_ENGINE_BLOCKS, COMMERCIAL_ENGINE_BLOCKS, EXPERIMENTAL_ENGINE_BLOCKS, AESTHETIC_ENGINE_BLOCKS, TRAILER_ENGINE_BLOCKS,
    ALL_SKIN_BLOCKS, COMM_SKIN_BLOCKS, EXPERIMENTAL_SKIN_BLOCKS, TRAILER_SKIN_BLOCKS,
    BLOCK_LIMITS,
    RANDOM_RANGES,
    AES_COLOR_PRESETS,
    NARRATIVE_ENGINE_LIBRARY, COMMERCIAL_ENGINE_LIBRARY, EXPERIMENTAL_ENGINE_LIBRARY, AESTHETIC_ENGINE_LIBRARY, TRAILER_ENGINE_LIBRARY,
    COMM_SKIN_LIBRARY, EXPERIMENTAL_SKIN_LIBRARY, TRAILER_SKIN_LIBRARY, SKIN_LIBRARY, GENRE_CATEGORIES, WORLD_MOTIF_CATEGORIES,
    COUNTRY_PRESETS
} from './constants';
import { MASTER_PRESETS } from './data/master_presets';
import * as geminiService from './services/geminiService';
import * as randomizerService from './services/randomizer';

// 创建 React Query 客户端
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity, // 哲学内容不会变化，永久缓存
            gcTime: 1000 * 60 * 60 * 24, // 24小时后清理
            retry: 1,
        },
    },
});
import { supabase } from './services/supabaseAuth';
import { generateGlobalDump } from './utils/exportUtils';
import { generateAestheticPrompt } from './utils/promptUtils';
import { getBlockName } from './utils/blockUtils';
import { findItemDetails, findItemFull } from './services/dataRegistry';
import { generateAestheticReverse } from './services/aestheticReverseService';
import { persistence } from './services/persistence';
import { supabaseAuthService, AuthUser } from './services/supabaseAuth';
import { supabaseDatabase } from './services/supabaseDatabase';
import { useSettings } from './contexts/SettingsContext';
import { SimpleConfigPanel } from './src/components/SimpleConfigPanel';
import { useTheme } from './contexts/ThemeContext';


import { LacanGraphView } from './components/LacanGraphView';
import { LacanTopologyView } from './components/LacanTopologyView';
import { ArchiveDirectoryModal } from './components/ArchiveDirectoryModal';
import { VideoLibrary } from './components/VideoLibrary';
import { PhilosophyCodexPage } from './components/PhilosophyCodexPage';
import { RorschachView } from './components/RorschachView';

// === Undo/Redo Reducer (defined outside component — no stale closures) ===
type UndoRedoAction =
    | { type: 'PUSH'; state: NarrativeFieldState }
    | { type: 'UNDO' }
    | { type: 'REDO' }
    | { type: 'SET'; state: NarrativeFieldState };

interface UndoRedoState {
    past: NarrativeFieldState[];
    present: NarrativeFieldState;
    future: NarrativeFieldState[];
}

function undoRedoReducer(state: UndoRedoState, action: UndoRedoAction): UndoRedoState {
    switch (action.type) {
        case 'PUSH': {
            if (JSON.stringify(state.present) === JSON.stringify(action.state)) return state;
            return {
                past: [...state.past, state.present].slice(-20),
                present: action.state,
                future: [],
            };
        }
        case 'UNDO': {
            if (state.past.length === 0) return state;
            return {
                past: state.past.slice(0, -1),
                present: state.past[state.past.length - 1],
                future: [state.present, ...state.future].slice(0, 20),
            };
        }
        case 'REDO': {
            if (state.future.length === 0) return state;
            return {
                past: [...state.past, state.present].slice(-20),
                present: state.future[0],
                future: state.future.slice(1),
            };
        }
        case 'SET': {
            return { past: [], present: action.state, future: [] };
        }
        default:
            return state;
    }
}

const App: React.FC = () => {
    const { theme } = useTheme();
    const { isOpen: isSettingsOpen, openSettings: openSettingsContext, closeSettings } = useSettings();
    const openSettings = () => {
        console.log("Portal/Header: Requesting to open settings...");
        openSettingsContext();
    };
    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState<-1 | 0 | 1 | 2>(-1);
    const [lang, setLang] = useState<'CN' | 'EN'>('CN');
    const [viewMode, setViewMode] = useState<ViewMode>('ENGINE');
    const [selectedDriver, setSelectedDriver] = useState<DriverType | null>(null);
    const [initialProtocol, setInitialProtocol] = useState<string | undefined>(undefined);
    const [hideSidebar, setHideSidebar] = useState(false);
    const [hoveredDriver, setHoveredDriver] = useState<DriverType | null>(null);
    const [subjectType, setSubjectType] = useState<SubjectType>('HUMAN');
    const [aestheticMode, setAestheticMode] = useState<AestheticMode>('REALISM');
    const [lockedModules, setLockedModules] = useState<Record<string, boolean>>({});
    const [lockedTags, setLockedTags] = useState<Record<string, string[]>>({});
    const [undoRedoState, undoRedoDispatch] = useReducer(undoRedoReducer, { past: [], present: {} as NarrativeFieldState, future: [] });
    const narrativeFieldState = undoRedoState.present;
    const [savedFieldStates, setSavedFieldStates] = useState<Record<string, NarrativeFieldState>>({});
    const [faceState, setFaceState] = useState<FaceState>({});
    const [worldLawConfig, setWorldLawConfig] = useState<WorldLawConfig>({ gravity: 1 });
    const [showRings, setShowRings] = useState(true);

    // FIXED: Always maintain 7 slots
    const [colorPalette, setColorPalette] = useState<string[]>(Array(7).fill(""));

    const [isWorldLawOpen, setIsWorldLawOpen] = useState(false);
    const [isSkinOpen, setIsSkinOpen] = useState(false);
    const [isVisionOpen, setIsVisionOpen] = useState(false);
    const [isAestheticInputOpen, setIsAestheticInputOpen] = useState(false);
    const [isManualOpen, setIsManualOpen] = useState(false);
    const [isSutureOpen, setIsSutureOpen] = useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [libraryModalOpen, setLibraryModalOpen] = useState(false);
    const [topSidebar, setTopSidebar] = useState<'skin' | 'vision' | null>(null);
    const [isPromptInspectorOpen, setIsPromptInspectorOpen] = useState(false);

    const [isAutoFilling, setIsAutoFilling] = useState(false);
    const [visionInput, setVisionInput] = useState("");
    const [visionImage, setVisionImage] = useState<string | null>(null);
    const [visionAnalysis, setVisionAnalysis] = useState("");
    const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);
    const [customLibraryDefs, setCustomLibraryDefs] = useState<Record<string, { def: string; core: string }>>({});

    // === Undo/Redo System (useReducer — no stale closures) ===
    const pastStatesLength = undoRedoState.past.length;
    const futureStatesLength = undoRedoState.future.length;

    // Sync savedFieldStates whenever the present state changes
    useEffect(() => {
        if (selectedDriver) {
            setSavedFieldStates(prev => {
                if (prev[selectedDriver] === undoRedoState.present) return prev;
                return { ...prev, [selectedDriver]: undoRedoState.present };
            });
        }
    }, [undoRedoState.present, selectedDriver]);

    const handleUndo = () => {
        undoRedoDispatch({ type: 'UNDO' });
    };

    const handleRedo = () => {
        undoRedoDispatch({ type: 'REDO' });
    };

    const updateNarrativeState = (newState: NarrativeFieldState) => {
        undoRedoDispatch({ type: 'PUSH', state: newState });
        setActiveHistoryItem(null);
    };

    const ensureFacesForTags = (tags: string[]) => {
        setFaceState(prev => {
            const updated = { ...prev };
            let changed = false;
            tags.forEach(tag => {
                if (!updated[tag]) {
                    updated[tag] = ['bright', 'dark', 'tension'][Math.floor(Math.random() * 3)] as 'bright' | 'dark' | 'tension';
                    changed = true;
                    console.log(`[ensureFacesForTags] Assigned face "${updated[tag]}" to tag "${tag}"`);
                }
            });
            if (changed) {
                console.log('[ensureFacesForTags] Updated faceState:', updated);
            }
            return changed ? updated : prev;
        });
    };

    const [currentUser, setCurrentUser] = useState<User>({
        id: 'guest_user',
        username: 'Guest',
        level: 'Visitor',
        isPro: false,
        avatarColor: 'bg-zinc-500',
        tokens: 0
    });
    const [isSutureGenerating, setIsSutureGenerating] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isMappingInput, setIsMappingInput] = useState(false);

    const [traverseStartTime, setTraverseStartTime] = useState<number | null>(null);
    const [bibleStartTime, setBibleStartTime] = useState<number | null>(null);
    const [visionStartTime, setVisionStartTime] = useState<number | null>(null);
    const [codexDictionary, setCodexDictionary] = useState<string>('LACAN');
    const [codexSection, setCodexSection] = useState<string>('CONCEPTS');
    const [codexDetailTab, setCodexDetailTab] = useState<'DEFINITION' | 'ANALOGY' | 'APPLICATION'>('DEFINITION');

    const [generatedTreatments, setGeneratedTreatments] = useState<CreativeTreatment[]>([]);
    const [thinkingXml, setThinkingXml] = useState<string>('');

    const [activeBlueprint, setActiveBlueprint] = useState<CreativeBlueprint | null>(null);
    const [metonymyBlueprint, setMetonymyBlueprint] = useState<CreativeBlueprint | null>(null);
    const [cachedBlueprints, setCachedBlueprints] = useState<Record<string, CreativeBlueprint>>({});

    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [activeHistoryItem, setActiveHistoryItem] = useState<HistoryItem | null>(null);
    const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
    const [promptCopied, setPromptCopied] = useState(false);
    const [globalCopied, setGlobalCopied] = useState(false);
    const [isTaskManagerOpen, setIsTaskManagerOpen] = useState(false);
    const [isTensionOpen, setIsTensionOpen] = useState(false);

    // DB Initialization and Loading
    useEffect(() => {
        persistence.init().then(() => {
            loadHistoryFromDB();
        });

        // Supabase Auth Listener
        const { data: authListener } = supabaseAuthService.onAuthStateChange(async (authUser) => {
            if (authUser) {
                const profile = await supabaseDatabase.getUserProfile();
                const tier = profile?.membership_tier || 'free';
                const isProTierActive = ['pro', 'annual', 'lifetime', 'admin'].includes(tier);
                const levelLabel = tier === 'admin' ? '系统管理员 (System Admin)' : tier === 'lifetime' ? '终身造物主 (Lifetime Creator)' : tier === 'annual' ? '年度架构师 (Annual Architect)' : '未激活 (Not Activated)';
                setCurrentUser({
                    id: authUser.id,
                    username: profile?.username || authUser.username || 'User',
                    level: levelLabel,
                    isPro: isProTierActive,
                    membershipTier: tier,
                    avatarColor: profile?.avatar_color || 'bg-zinc-600',
                    avatarUrl: profile?.avatar_url,
                    tokens: profile?.tokens ?? 0
                });
                // Reload history since cloud might have user's items
                loadHistoryFromDB();
            } else {
                setCurrentUser({
                    id: 'guest_user',
                    username: 'Guest',
                    level: 'Visitor',
                    isPro: false,
                    avatarColor: 'bg-zinc-500',
                    tokens: 0
                });
                loadHistoryFromDB(); // Guest views their local DB
            }
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    // Sync URL with modal states
    useEffect(() => {
        if (location.pathname === '/codex') {
            setIsManualOpen(true);
        } else if (location.pathname === '/') {
            setIsManualOpen(false);
        }
    }, [location.pathname]);

    const loadHistoryFromDB = async () => {
        try {
            const items = await persistence.getHistory();
            setHistory(items);
        } catch (e) {
            console.error("Failed to load history from DB", e);
        }
    };

    // Helper to add a new item to history state AND DB
    const addHistoryItem = async (item: HistoryItem) => {
        // Optimistic update
        setHistory(prev => [item, ...prev]);
        try {
            await persistence.saveHistoryItem(item);
        } catch (e) {
            console.error("Failed to save history item", e);
        }
    };

    // Helper to update an existing item in history
    const updateHistoryItem = async (updatedItem: HistoryItem) => {
        setHistory(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i));
        try {
            await persistence.saveHistoryItem(updatedItem);
        } catch (e) {
            console.error("Failed to update history item", e);
        }
    };

    const openHistory = () => {
        // Refresh list on open
        if (currentUser.id !== 'guest_user') {
            loadHistoryFromDB();
        }
        setIsHistoryOpen(true);
        setIsManualOpen(false);
        setIsSutureOpen(false);
    };
    const closeHistory = () => setIsHistoryOpen(false);

    const openAuth = () => { setIsAuthOpen(true); closeAllModals(); };
    const closeAllModals = () => {
        setIsHistoryOpen(false);
        if (location.pathname === '/codex') navigate('/');
        setIsManualOpen(false);
        setIsSutureOpen(false);
    };
    // Helpers
    const isProTier = (tier: string | undefined) => ['pro', 'annual', 'lifetime'].includes(tier || '');

    const checkAndDeductToken = async (cost: number = 1): Promise<boolean> => {
        if (!currentUser || currentUser.id === 'guest_user') {
            alert(lang === 'EN' ? "Please log in to use the engine." : "请先登录主体观测中心。");
            return false;
        }

        // Membership activation check
        const activeTier = currentUser.membershipTier;
        const isMembershipActive = ['pro', 'annual', 'lifetime', 'admin'].includes(activeTier || '');

        if (!isMembershipActive) {
            alert(lang === 'EN'
                ? "Your account has not been activated. Please enter an activation code in your profile to unlock the engine."
                : "您的账户尚未激活。请在「主体观测中心」输入激活码以解锁引擎。");
            setIsProfileOpen(true);
            return false;
        }

        // Pro tiers get unlimited usage
        if (currentUser.isPro) {
            return true;
        }

        if ((currentUser.tokens || 0) < cost) {
            alert(lang === 'EN' ? "Insufficient Compute Tokens. Please use an activation code to add more tokens." : "算力锚点不足，请使用激活码注入算力。");
            return false;
        }

        // Deduct in UI optimistically
        const newTokens = currentUser.tokens - cost;
        setCurrentUser(prev => ({ ...prev, tokens: newTokens }));

        // Deduct in DB
        const { error } = await supabase.from('profiles').update({ tokens: newTokens }).eq('id', currentUser.id);
        if (error) {
            console.error("Token deduction failed", error);
            // Revert on fail
            setCurrentUser(prev => ({ ...prev, tokens: prev.tokens + cost }));
            alert(lang === 'EN' ? "Token synchronization failed." : "算力同步失败。");
            return false;
        }

        return true;
    };

    const handleViewChange = (viewMode: ViewMode) => {
        setViewMode(viewMode);
        if (viewMode === 'DIVERGENCE' || viewMode === 'BIBLE' || viewMode === 'METONYMY' || viewMode === 'TOPOLOGY') {
            setIsVisionOpen(false);
            setIsSkinOpen(false);
            setIsAestheticInputOpen(false);
        }
    };

    const handleAddCustomDef = (name: string, def: string, core: string) => {
        setCustomLibraryDefs(prev => ({ ...prev, [name]: { def, core } }));
    };

    const handleEditCustomDef = (oldName: string, newName: string, def: string, core: string) => {
        // 1. Update Custom Defs map
        setCustomLibraryDefs(prev => {
            const next = { ...prev };
            // If name changed, remove old key
            if (oldName !== newName && next[oldName]) {
                delete next[oldName];
            }
            // Set new/updated key
            next[newName] = { def, core };
            return next;
        });

        // 2. If name changed, update the NarrativeFieldState to reflect the new name in any blocks
        if (oldName !== newName) {
            const newState = { ...narrativeFieldState };
            let hasChanges = false;

            Object.keys(newState).forEach(key => {
                const tags = newState[key];
                if (Array.isArray(tags) && tags.includes(oldName)) {
                    newState[key] = tags.map(t => t === oldName ? newName : t);
                    hasChanges = true;
                }
            });

            if (hasChanges) {
                updateNarrativeState(newState);
            }

            // Also update locked tags if necessary
            setLockedTags(prev => {
                const nextLocks = { ...prev };
                let lockChanged = false;
                Object.keys(nextLocks).forEach(key => {
                    const locks = nextLocks[key];
                    if (locks && locks.includes(oldName)) {
                        nextLocks[key] = locks.map(l => l === oldName ? newName : l);
                        lockChanged = true;
                    }
                });
                return lockChanged ? nextLocks : prev;
            });
        }
    };

    const getItemDetails = useCallback((tagName: string, blockId?: string) => {
        if (customLibraryDefs && customLibraryDefs[tagName]) {
            return { name: tagName, def: customLibraryDefs[tagName].def, core: customLibraryDefs[tagName].core };
        }
        return findItemFull(tagName, blockId);
    }, [customLibraryDefs]);



    const handleAestheticInputMap = async (text: string) => {
        setIsMappingInput(true);
        try {
            const mappedState = await geminiService.mapAestheticInputToEngine(text);
            const mergedState = { ...narrativeFieldState, ...mappedState };
            updateNarrativeState(mergedState);
        } catch (e) {
            console.error(e);
            alert(lang === 'EN' ? "Mapping failed." : "参数映射失败。");
        } finally {
            setIsMappingInput(false);
        }
    };

    const handleDriverSelect = (id: DriverType) => {
        setSelectedDriver(id);
        setPage(1);
        setViewMode('ENGINE');
        setLockedModules({});
        setLockedTags({});
        const newFieldState = savedFieldStates[id] || {};
        undoRedoDispatch({ type: 'SET', state: newFieldState });
        setActiveHistoryItem(null);
        setGeneratedTreatments([]);
        setActiveBlueprint(null);
        setCachedBlueprints({});
        setWorldLawConfig({ gravity: 1 });

        // All modes: close sidebars by default as per user request
        setIsSkinOpen(false);
        setIsVisionOpen(false);
        setIsAestheticInputOpen(false);
        if (id === DriverType.AESTHETIC) {
            // Ensure palette is clean for new aesthetic session
            setColorPalette(Array(7).fill(""));
        }
        closeAllModals();
    };

    const getDriverName = () => {
        const driver = DRIVERS.find(d => d.id === selectedDriver);
        if (!driver) return lang === 'EN' ? "Project" : "项目";
        return lang === 'EN' ? driver.nameEn : driver.name;
    };

    const handleNarrativeChange = (newState: NarrativeFieldState) => {
        updateNarrativeState(newState);
    };

    const handleAutoFill = async () => {
        if (!selectedDriver) return;
        if (!(await checkAndDeductToken(1))) return;
        setIsAutoFilling(true);
        try {
            const result = await geminiService.generateNarrativeAutoFill(selectedDriver, "", null);
            updateNarrativeState(result);
        } catch (e) { console.error(e); }
        finally { setIsAutoFilling(false); }
    };

    const openManual = () => {
        setPage(1);
        handleViewChange('DICTIONARY');
    };
    const handleOpenSkin = () => {
        setIsSkinOpen(true);
        setTopSidebar('skin');
    };

    const handleOpenVision = () => {
        setIsVisionOpen(true);
        setTopSidebar('vision');
    };

    const handleVisionAutoFill = async () => {
        if (!selectedDriver) return;
        if (!(await checkAndDeductToken(1))) return;

        setIsAutoFilling(true); setVisionStartTime(Date.now());
        try {
            let currentAnalysis = visionAnalysis;
            if (selectedDriver === DriverType.AESTHETIC) {
                if (visionInput || visionImage) {
                    setIsAnalyzingImage(true);
                    try {
                        const directive = await generateAestheticReverse(visionInput, visionImage);
                        currentAnalysis = directive;
                        setVisionAnalysis(directive);
                    } catch (e) {
                        console.error("Aesthetic Reverse Failed", e);
                    } finally {
                        setIsAnalyzingImage(false);
                    }
                }
                const result = await geminiService.generateNarrativeAutoFill(selectedDriver, visionInput, visionImage, currentAnalysis);
                updateNarrativeState(result);
                return;
            }

            if (selectedDriver === DriverType.COMMERCIAL) {
                setIsAnalyzingImage(true);
                try {
                    const diagnosis = await geminiService.analyzeImage(visionImage, visionInput);
                    currentAnalysis = diagnosis;
                    setVisionAnalysis(diagnosis);
                } catch (e) { console.error("Narrative diagnosis failed", e); }
                finally { setIsAnalyzingImage(false); }
            } else if (visionImage) {
                setIsAnalyzingImage(true);
                try {
                    const result = await geminiService.analyzeImage(visionImage, visionInput);
                    currentAnalysis = result;
                    setVisionAnalysis(result);
                } catch (e) { console.error("Image analysis failed", e); }
                finally { setIsAnalyzingImage(false); }
            }

            const result = await geminiService.generateNarrativeAutoFill(selectedDriver, visionInput, visionImage, currentAnalysis);
            updateNarrativeState(result);

        } catch (e) {
            console.error(e);
            alert(lang === 'EN' ? "Auto-match failed." : "自动匹配失败。");
        } finally {
            setIsAutoFilling(false);
            setVisionStartTime(null);
        }
    };

    const handleAnalyzeImage = async () => {
        if (!visionImage && !visionInput && selectedDriver !== DriverType.COMMERCIAL && selectedDriver !== DriverType.NARRATIVE && selectedDriver !== DriverType.AESTHETIC) return;

        if (!(await checkAndDeductToken(1))) return;

        setIsAnalyzingImage(true);
        try {
            if (selectedDriver === DriverType.AESTHETIC) {
                const result = await generateAestheticReverse(visionInput, visionImage);
                setVisionAnalysis(result);
            } else if (selectedDriver === DriverType.COMMERCIAL) {
                const diagnosis = await geminiService.analyzeImage(visionImage, visionInput);
                setVisionAnalysis(diagnosis);
            } else {
                const result = await geminiService.analyzeImage(visionImage!, visionInput);
                setVisionAnalysis(result);
            }
        } catch (e) {
            console.error(e);
            alert(lang === 'EN' ? "Analysis failed." : "分析失败。");
        } finally {
            setIsAnalyzingImage(false);
        }
    };

    const handleVisionImageGenerate = async (prompt: string) => {
        if (!(await checkAndDeductToken(2))) return null; // Image generation cost 2
        return await geminiService.generateAssetImage(prompt);
    };

    const handleSutureGenerate = async (text: string, config: SutureConfig) => {
        if (!(await checkAndDeductToken(1))) return null;

        setIsSutureGenerating(true);
        try {
            const result = await geminiService.generateSutureScript(text, config);
            return result ? result.literaryScript : null;
        } catch (e) { console.error(e); return null; }
        finally { setIsSutureGenerating(false); }
    };

    const handleAestheticSmartRandom = () => {
        if (selectedDriver !== DriverType.AESTHETIC) return;
        const newState = randomizerService.generateAestheticSmartRandom(narrativeFieldState, subjectType, lockedModules, lockedTags, aestheticMode);

        // Auto-sync colors if a preset is selected by randomizer
        const presetName = newState['aes_palette_preset']?.[0];
        if (presetName && !lockedModules['aes_color_palette']) {
            const preset = MASTER_PRESETS.find(p => p.name === presetName);
            if (preset && preset.colors) {
                const nextPalette = [...preset.colors];
                while (nextPalette.length < 7) nextPalette.push("");
                setColorPalette(nextPalette.slice(0, 7));
                newState['aes_color_palette'] = [presetName];
            }
        }

        updateNarrativeState(newState);
        ensureFacesForTags(Object.values(newState).flat());
    };

    const handleApplyPreset = (preset: AestheticPreset) => {
        const newState = { ...narrativeFieldState };

        // Clear L0 styles to ensure the preset has total control over the "Soul"
        ['aes_director_style', 'aes_photo_style', 'aes_art_style', 'aes_anim_director', 'aes_art_movement'].forEach(id => {
            newState[id] = [];
        });

        if (!lockedModules['aes_palette_preset']) {
            newState['aes_palette_preset'] = [preset.name];
        }
        Object.entries(preset.params).forEach(([key, values]) => {
            if (!lockedModules[key]) {
                newState[key] = values;
            }
        });

        // SYNC COLOR PALETTE FROM PRESET
        if (preset.colors && preset.colors.length > 0) {
            const nextPalette = [...preset.colors];
            while (nextPalette.length < 7) nextPalette.push("");
            setColorPalette(nextPalette.slice(0, 7));

            if (!lockedModules['aes_color_palette']) {
                newState['aes_color_palette'] = [preset.name];
            }
        }

        updateNarrativeState(newState);
    };

    const handleGlobalRandomize = () => {
        if (!selectedDriver) return;
        const newState = randomizerService.generateGlobalRandomState(selectedDriver, narrativeFieldState, lockedModules, lockedTags);
        updateNarrativeState(newState);
        ensureFacesForTags(Object.values(newState).flat());
    };

    const handleGlobalReset = () => {
        const isAesthetic = selectedDriver === DriverType.AESTHETIC;
        const newState = randomizerService.generateGlobalResetState(selectedDriver!, narrativeFieldState, lockedModules, lockedTags);
        updateNarrativeState(newState);
        if (!isAesthetic) setSubjectType('HUMAN');
        if (isAesthetic) {
            // FIXED: Reset to 7 empty slots
            setColorPalette(Array(7).fill(""));
        }
    };

    const handleResetFormulaOnly = () => {
        if (!selectedDriver) return;
        const newState = randomizerService.resetFormulaState(selectedDriver, narrativeFieldState, lockedModules, lockedTags);
        updateNarrativeState(newState);
    };

    const handleRandomizeSkinOnly = () => {
        if (!selectedDriver) return;
        const newState = randomizerService.randomizeSkinState(selectedDriver, narrativeFieldState, lockedModules, lockedTags);
        updateNarrativeState(newState);
        ensureFacesForTags(Object.values(newState).flat());
    };

    const handleResetSkinOnly = () => {
        if (!selectedDriver) return;
        const newState = randomizerService.resetSkinState(selectedDriver, narrativeFieldState, lockedModules, lockedTags);
        updateNarrativeState(newState);
    };

    const handleGlobalCopy = () => {
        const dumpText = generateGlobalDump({
            driverId: selectedDriver,
            fieldState: narrativeFieldState,
            worldLaw: worldLawConfig,
            visionInput,
            visionAnalysis,
            visionImage,
            cachedBlueprints,
            metonymyBlueprint,
            viewMode,
            user: currentUser,
            subjectType,
            lang
        });
        navigator.clipboard.writeText(dumpText);
        setGlobalCopied(true);
        setTimeout(() => setGlobalCopied(false), 2000);
    };

    const handleCopyAestheticPrompt = () => {
        const prompt = generateAestheticPrompt(narrativeFieldState, subjectType, lang, customLibraryDefs);
        navigator.clipboard.writeText(prompt);
        setPromptCopied(true);
        setTimeout(() => setPromptCopied(false), 2000);
    };

    const handleRandomizeFormulaOnly = () => {
        if (!selectedDriver) return;
        const newState = randomizerService.randomizeFormulaState(selectedDriver, narrativeFieldState, lockedModules, lockedTags, subjectType, aestheticMode);
        updateNarrativeState(newState);

        const allTags = Object.values(newState).flat();
        ensureFacesForTags(allTags);
    };

    const handleToggleTagLock = (blockId: string, tagName: string) => {
        setLockedTags(prev => {
            const currentLocks = prev[blockId] || [];
            if (currentLocks.includes(tagName)) {
                return { ...prev, [blockId]: currentLocks.filter(t => t !== tagName) };
            } else {
                return { ...prev, [blockId]: [...currentLocks, tagName] };
            }
        });
    };

    const handleToggleLock = (id: string) => {
        setLockedModules(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleRandomizeTag = (blockId: string, oldTag: string) => {
        const newTag = randomizerService.getSingleRandomTag(blockId, oldTag, selectedDriver, narrativeFieldState);
        if (newTag && newTag !== oldTag) {
            const currentTags = narrativeFieldState[blockId] || [];
            const updatedTags = currentTags.map(t => t === oldTag ? newTag : t);
            updateNarrativeState({
                ...narrativeFieldState,
                [blockId]: updatedTags
            });

            // Clean up old tag's face and assign new face to new tag
            setFaceState(prev => {
                const updated = { ...prev };
                delete updated[oldTag];
                if (!updated[newTag]) {
                    updated[newTag] = ['bright', 'dark', 'tension'][Math.floor(Math.random() * 3)] as 'bright' | 'dark' | 'tension';
                    console.log(`[handleRandomizeTag] Replaced "${oldTag}" with "${newTag}", assigned face "${updated[newTag]}"`);
                }
                return updated;
            });

            if (lockedTags[blockId]) {
                setLockedTags(prev => ({
                    ...prev,
                    [blockId]: (prev[blockId] || []).filter(t => t !== oldTag)
                }));
            }
        }
    };

    // Helper function to randomize a single block (Level 1: Individual randomization)
    const handleRandomizeBlock = (blockId: string) => {
        if (lockedModules[blockId]) return;

        const newState = { ...narrativeFieldState };
        const currentTags = newState[blockId] || [];

        // Use RANDOM_RANGES for count determination (v2.0 protocol)
        let count = 1;
        if (selectedDriver === DriverType.AESTHETIC && (blockId === 'aes_skin_texture' || blockId === 'aes_body_features' || blockId === 'aes_face_features')) {
            count = Math.floor(Math.random() * 2) + 1;
        } else {
            const range = RANDOM_RANGES[blockId];
            if (range) {
                const [min, max] = range;
                count = min === max ? min : Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
                // Fallback for aesthetic/other blocks without RANDOM_RANGES
                const limit = BLOCK_LIMITS[blockId] || 1;
                if (limit > 1) count = Math.floor(Math.random() * Math.min(limit, 3)) + 1;
            }
        }

        // For 0-count (0-1 range that rolled 0), clear the block
        if (count === 0) {
            const locks = lockedTags[blockId] || [];
            newState[blockId] = (newState[blockId] || []).filter(t => locks.includes(t));
            updateNarrativeState(newState);
            return;
        }

        // Get libraries
        let fullLibrary: any[] = [];
        if (selectedDriver === DriverType.COMMERCIAL) fullLibrary = [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY];
        else if (selectedDriver === DriverType.AESTHETIC) fullLibrary = [...AESTHETIC_ENGINE_LIBRARY, ...SKIN_LIBRARY];
        else if (selectedDriver === DriverType.EXPERIMENTAL) fullLibrary = [...EXPERIMENTAL_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY];
        else if (selectedDriver === DriverType.TRAILER) fullLibrary = [...TRAILER_ENGINE_LIBRARY, ...TRAILER_SKIN_LIBRARY];
        else fullLibrary = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES, ...WORLD_MOTIF_CATEGORIES];

        const libId = `${blockId}_lib`;
        const category = fullLibrary.find(c => c.id === libId);

        // Handle Special Cases for Genre/Animation/Era
        if (!category && (blockId === 'skin_genre' || blockId === 'skin_animation_genre' || blockId === 'skin_era')) {
            const sourceCats = blockId === 'skin_genre' ? GENRE_CATEGORIES : WORLD_MOTIF_CATEGORIES;
            const allItems = sourceCats.flatMap(c => c.items);
            const locks = lockedTags[blockId] || [];
            const keptTags = currentTags.filter(t => locks.includes(t));
            const available = allItems.filter(i => !keptTags.includes(i.name));
            const needed = Math.max(0, count - keptTags.length);
            const selected: string[] = [];
            for (let i = 0; i < needed; i++) {
                if (available.length === 0) break;
                const idx = Math.floor(Math.random() * available.length);
                selected.push(available[idx].name);
                available.splice(idx, 1);
            }
            newState[blockId] = [...keptTags, ...selected];
            updateNarrativeState(newState);
            ensureFacesForTags(newState[blockId] || []);
            return;
        }

        if (category && category.items.length > 0) {

            // Apply Archetype Filtering
            const currentEraTags = newState['skin_era'] || [];
            const currentEra = currentEraTags.length > 0 ? currentEraTags[0] : "";
            const archetype = randomizerService.getArchetypeFromEra(currentEra);

            let availableItems = category.items;
            if (blockId === 'skin_location' || blockId === 'skin_profession' || blockId === 'skin_society' || blockId === 'skin_ideology' || blockId === 'comm_skin_scenario' || blockId === 'engine_m1' || blockId === 'skin_origin') {
                availableItems = randomizerService.filterItemsByArchetype(category.items, archetype, blockId);
                if (availableItems.length === 0) availableItems = category.items;
            }

            // SUR7 Gender bias: 70% female, 30% male
            if (blockId === 'skin_gender') {
                const isFemale = Math.random() < 0.70;
                const femaleItems = availableItems.filter(i => {
                    const n = (i.name + ' ' + (i.group || '')).toLowerCase();
                    return n.includes('female') || n.includes('女');
                });
                const maleItems = availableItems.filter(i => {
                    const n = (i.name + ' ' + (i.group || '')).toLowerCase();
                    return n.includes('male') || n.includes('男');
                });
                const targetPool = isFemale && femaleItems.length > 0 ? femaleItems : (maleItems.length > 0 ? maleItems : availableItems);
                if (targetPool.length > 0) {
                    newState[blockId] = [targetPool[Math.floor(Math.random() * targetPool.length)].name];
                }
                updateNarrativeState(newState);
                ensureFacesForTags(newState[blockId] || []);
                return;
            }

            const locks = lockedTags[blockId] || [];
            const keptTags = currentTags.filter(t => locks.includes(t));
            const needed = Math.max(0, count - keptTags.length);
            const available = availableItems.filter(i => !keptTags.includes(i.name));
            const selected: string[] = [];
            for (let i = 0; i < needed; i++) {
                if (available.length === 0) break;
                const idx = Math.floor(Math.random() * available.length);
                selected.push(available[idx].name);
                available.splice(idx, 1);
            }
            newState[blockId] = [...keptTags, ...selected];
            updateNarrativeState(newState);
            ensureFacesForTags(newState[blockId] || []);
        }
    };

    // === Level 2a: Story Summary group randomize (weighted 12-word filter) ===
    const handleRandomizeSummaryGroup = () => {
        if (!selectedDriver) return;
        // Use the weighted surface filter to determine which blocks participate
        const participants = randomizerService.weightedSurfaceFilter(lockedModules, false);
        // For each participating block, randomize it individually
        const summaryBlocks = ['skin_era', 'skin_society', 'skin_age', 'skin_gender', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending'];
        const newState = { ...narrativeFieldState };

        summaryBlocks.forEach(blockId => {
            if (lockedModules[blockId]) return;
            
            let keepOld = true;
            // skin_age is not in the 12-word filter, give it independent 50% chance
            if (blockId === 'skin_age') {
                if (Math.random() >= 0.5) keepOld = false;
            } else {
                // Check if this block passed the weighted filter
                if (!participants.has(blockId)) keepOld = false;
            }
            if (!keepOld) {
                const locks = lockedTags[blockId] || [];
                newState[blockId] = (newState[blockId] || []).filter(t => locks.includes(t));
                return;
            }

            // Delegate to the single-block randomizer logic
            // We inline the logic here to batch all changes into one state update
            const range = RANDOM_RANGES[blockId];
            const count = range ? (range[0] === range[1] ? range[0] : Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]) : 1;
            if (count === 0) {
                const locks = lockedTags[blockId] || [];
                newState[blockId] = (newState[blockId] || []).filter(t => locks.includes(t));
                return;
            }

            // Handle special case for Era
            if (blockId === 'skin_era') {
                const allItems = WORLD_MOTIF_CATEGORIES.flatMap(c => c.items);
                const locks = lockedTags[blockId] || [];
                const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                const needed = Math.max(0, count - keptTags.length);
                const available = allItems.filter(i => !keptTags.includes(i.name));
                const selected: string[] = [];
                for (let i = 0; i < needed; i++) {
                    if (available.length === 0) break;
                    const idx = Math.floor(Math.random() * available.length);
                    selected.push(available[idx].name);
                    available.splice(idx, 1);
                }
                newState[blockId] = [...keptTags, ...selected];
                return;
            }

            // Get library
            let fullLibrary: any[] = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES, ...WORLD_MOTIF_CATEGORIES];
            const libId = `${blockId}_lib`;
            const category = fullLibrary.find(c => c.id === libId);

            if (category && category.items.length > 0) {
                let availableItems = category.items;
                const currentEraTags = newState['skin_era'] || [];
                const currentEra = currentEraTags.length > 0 ? currentEraTags[0] : "";
                const archetype = randomizerService.getArchetypeFromEra(currentEra);
                if (['skin_location', 'skin_profession', 'skin_society', 'skin_ideology'].includes(blockId)) {
                    availableItems = randomizerService.filterItemsByArchetype(category.items, archetype, blockId);
                    if (availableItems.length === 0) availableItems = category.items;
                }

                // SUR7 gender bias
                if (blockId === 'skin_gender') {
                    const isFemale = Math.random() < 0.70;
                    const femaleItems = availableItems.filter(i => (i.name + ' ' + (i.group || '')).toLowerCase().includes('female') || (i.name + ' ' + (i.group || '')).toLowerCase().includes('女'));
                    const maleItems = availableItems.filter(i => (i.name + ' ' + (i.group || '')).toLowerCase().includes('male') || (i.name + ' ' + (i.group || '')).toLowerCase().includes('男'));
                    const pool = isFemale && femaleItems.length > 0 ? femaleItems : (maleItems.length > 0 ? maleItems : availableItems);
                    if (pool.length > 0) newState[blockId] = [pool[Math.floor(Math.random() * pool.length)].name];
                    return;
                }

                const locks = lockedTags[blockId] || [];
                const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                const needed = Math.max(0, count - keptTags.length);
                const available = availableItems.filter(i => !keptTags.includes(i.name));
                const selected: string[] = [];
                for (let i = 0; i < needed; i++) {
                    if (available.length === 0) break;
                    const idx = Math.floor(Math.random() * available.length);
                    selected.push(available[idx].name);
                    available.splice(idx, 1);
                }
                newState[blockId] = [...keptTags, ...selected];
            }
        });

        // Also handle SUR3 coordinates if they passed the filter
        if (!lockedModules['skin_year_exact']) {
            if (participants.has('skin_year_exact')) {
                const year = Math.floor(Math.random() * (2050 - (-2000) + 1)) + (-2000);
                newState['skin_year_exact'] = [year.toString()];
            } else {
                newState['skin_year_exact'] = [];
            }
        }
        if (!lockedModules['skin_country_exact']) {
            if (participants.has('skin_country_exact')) {
                const r = COUNTRY_PRESETS[Math.floor(Math.random() * COUNTRY_PRESETS.length)];
                newState['skin_country_exact'] = [r.cn];
            } else {
                newState['skin_country_exact'] = [];
            }
        }

        updateNarrativeState(newState);
        ensureFacesForTags(Object.values(newState).flat());
    };

    // === Level 2c: Story Structure group randomize ===
    const handleRandomizeStructureGroup = () => {
        const structureBlocks = ['skin_genre', 'skin_structure', 'skin_volume'];
        const newState = { ...narrativeFieldState };

        structureBlocks.forEach(blockId => {
            if (lockedModules[blockId]) return;
            
            let keepOld = true;
            // skin_structure and skin_volume: independent 50% chance (not in 12-word filter)
            if (blockId === 'skin_structure' || blockId === 'skin_volume') {
                if (Math.random() >= 0.5) keepOld = false;
            }
            if (!keepOld) {
                const locks = lockedTags[blockId] || [];
                newState[blockId] = (newState[blockId] || []).filter(t => locks.includes(t));
                return;
            }

            const range = RANDOM_RANGES[blockId];
            const count = range ? (range[0] === range[1] ? range[0] : Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]) : 1;
            if (count === 0) {
                const locks = lockedTags[blockId] || [];
                newState[blockId] = (newState[blockId] || []).filter(t => locks.includes(t));
                return;
            }

            // Handle Genre separately
            if (blockId === 'skin_genre') {
                const genreLib = GENRE_CATEGORIES.flatMap(c => c.items);
                const locks = lockedTags[blockId] || [];
                const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                const needed = Math.max(0, count - keptTags.length);
                const available = genreLib.filter(i => !keptTags.includes(i.name));
                const selected: string[] = [];
                for (let i = 0; i < needed; i++) {
                    if (available.length === 0) break;
                    const idx = Math.floor(Math.random() * available.length);
                    selected.push(available[idx].name);
                    available.splice(idx, 1);
                }
                newState[blockId] = [...keptTags, ...selected];
                return;
            }

            // skin_structure, skin_volume
            let fullLibrary: any[] = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES, ...WORLD_MOTIF_CATEGORIES];
            const libId = `${blockId}_lib`;
            const category = fullLibrary.find(c => c.id === libId);
            if (category && category.items.length > 0) {
                const locks = lockedTags[blockId] || [];
                const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                const needed = Math.max(0, count - keptTags.length);
                const available = category.items.filter(i => !keptTags.includes(i.name));
                const selected: string[] = [];
                for (let i = 0; i < needed; i++) {
                    if (available.length === 0) break;
                    const idx = Math.floor(Math.random() * available.length);
                    selected.push(available[idx].name);
                    available.splice(idx, 1);
                }
                newState[blockId] = [...keptTags, ...selected];
            }
        });

        updateNarrativeState(newState);
        ensureFacesForTags(Object.values(newState).flat());
    };

    const handleClearBlock = (blockId: string) => {
        if (lockedModules[blockId]) return;
        const newState = { ...narrativeFieldState };
        newState[blockId] = [];
        updateNarrativeState(newState);
    };

    const openLibrary = (blockId: string) => {
        if (lockedModules[blockId]) return;
        setActiveBlockId(blockId);
        setLibraryModalOpen(true);
    };

    const removeTag = (blockId: string, tag: string) => {
        if (lockedModules[blockId]) return;
        const rawCurrent = narrativeFieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        handleNarrativeChange({
            ...narrativeFieldState,
            [blockId]: current.filter(t => t !== tag)
        });
    };

    const handleToggleTag = (blockId: string, tag: string) => {
        if (lockedModules[blockId]) return;

        if (blockId === 'aes_palette_preset') {
            const preset = MASTER_PRESETS.find(p => p.name === tag || p.id === tag);
            if (preset) {
                handleApplyPreset(preset);
            } else {
                const newState = { ...narrativeFieldState, [blockId]: [tag] };
                updateNarrativeState(newState);
            }
            return;
        }

        if (blockId === 'aes_color_palette') {
            const preset = AES_COLOR_PRESETS.find(p => p.name === tag || p.id === tag);
            if (preset) {
                // FIXED: Ensure we fill 7 slots from color preset
                const nextPalette = [...preset.colors];
                while (nextPalette.length < 7) nextPalette.push("");
                setColorPalette(nextPalette.slice(0, 7));

                // Also update state to show the selected palette tag
                const newState = { ...narrativeFieldState, [blockId]: [tag] };
                updateNarrativeState(newState);
            } else {
                // Fallback if preset not found but tag toggled
                const newState = { ...narrativeFieldState, [blockId]: [tag] };
                updateNarrativeState(newState);
            }
            setLibraryModalOpen(false);
            return;
        }

        const rawCurrent = narrativeFieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        const limit = BLOCK_LIMITS[blockId] || 1;
        let newState = { ...narrativeFieldState };
        if (selectedDriver === DriverType.AESTHETIC) {
            if (['aes_action_static', 'aes_action_dynamic', 'aes_action_complex'].includes(blockId)) {
                ['aes_action_static', 'aes_action_dynamic', 'aes_action_complex'].forEach(id => { if (id !== blockId) newState[id] = []; });
            }
            if (['aes_hair_style_f', 'aes_hair_style_m'].includes(blockId)) {
                ['aes_hair_style_f', 'aes_hair_style_m'].forEach(id => { if (id !== blockId) newState[id] = []; });
            }
            if (['aes_scene_real', 'aes_scene_abstract', 'aes_scene_surreal'].includes(blockId)) {
                ['aes_scene_real', 'aes_scene_abstract', 'aes_scene_surreal'].forEach(id => { if (id !== blockId) newState[id] = []; });
            }
            if (['aes_object_real', 'aes_object_unreal', 'aes_object_weapon'].includes(blockId)) {
                ['aes_object_real', 'aes_object_unreal', 'aes_object_weapon'].forEach(id => { if (id !== blockId) newState[id] = []; });
            }
        }

        if (limit === 1) {
            const isTogglingOn = !current.includes(tag);
            newState[blockId] = isTogglingOn ? [tag] : [];
            updateNarrativeState(newState);

            if (isTogglingOn && !faceState[tag]) {
                const faces: ('bright' | 'dark' | 'tension')[] = ['bright', 'dark', 'tension'];
                const randomFace = faces[Math.floor(Math.random() * faces.length)];
                setFaceState(prev => ({ ...prev, [tag]: randomFace }));
            } else if (!isTogglingOn) {
                setFaceState(prev => {
                    const next = { ...prev };
                    delete next[tag];
                    return next;
                });
            }
            return;
        }

        if (current.includes(tag)) {
            newState[blockId] = current.filter(t => t !== tag);
            // Remove face state when deselecting
            setFaceState(prev => {
                const next = { ...prev };
                delete next[tag];
                return next;
            });
        } else {
            if (current.length >= limit) {
                alert(lang === 'EN' ? `Max ${limit} items for this module.` : `该模块最多选择 ${limit} 个。`);
                return;
            }
            newState[blockId] = [...current, tag];

            // Auto-assign random face if no face exists
            if (!faceState[tag]) {
                const faces: ('bright' | 'dark' | 'tension')[] = ['bright', 'dark', 'tension'];
                const randomFace = faces[Math.floor(Math.random() * faces.length)];
                setFaceState(prev => ({ ...prev, [tag]: randomFace }));
                console.log(`[App] Auto-assigned random face "${randomFace}" to tag "${tag}"`);
            }
        }
        updateNarrativeState(newState);
    };

    const handleBackStep = () => {
        if (viewMode === 'BIBLE') handleViewChange('DIVERGENCE');
        else if (viewMode === 'DIVERGENCE') {
            handleViewChange('ENGINE');
            setActiveHistoryItem(null);
            setIsSkinOpen(false);
            setIsVisionOpen(false);
            setIsAestheticInputOpen(false);
        } else if (viewMode === 'METONYMY') {
            handleViewChange('ENGINE');
            setMetonymyBlueprint(null);
            setIsSkinOpen(false);
            setIsVisionOpen(false);
            setIsAestheticInputOpen(false);
        } else {
            if (selectedDriver) setSavedFieldStates(prev => ({ ...prev, [selectedDriver]: narrativeFieldState }));
            setPage(0);
            setActiveHistoryItem(null);
            closeAllModals();
            setIsSkinOpen(false);
            setIsVisionOpen(false);
            setIsAestheticInputOpen(false);
        }
    };

    const handleTraverseFantasy = async (force: boolean = false) => {
        if (!selectedDriver) return;
        if (!force && Object.keys(narrativeFieldState).length === 0) {
            alert("Please configure the engine first.");
            return;
        }
        if (!(await checkAndDeductToken(2))) return; // Traversal costs 2
        setIsGenerating(true);
        setTraverseStartTime(Date.now());
        try {
            const result = await geminiService.generateFantasyTraverse(
                selectedDriver,
                "SHORT",
                narrativeFieldState,
                visionInput,
                visionImage,
                worldLawConfig,
                subjectType,
                visionAnalysis,
                colorPalette.filter(c => c !== ""),
                faceState
            );
            const treatments = result.treatments;
            if (result.thinkingXml) setThinkingXml(result.thinkingXml);
            if (treatments?.length) {
                // Fix: Ensure all treatments have IDs
                const treatmentsWithIds = treatments.map((t, i) => ({
                    ...t,
                    id: t.id || `path-${Date.now()}-${i}`
                }));
                setGeneratedTreatments(treatmentsWithIds);
                handleViewChange('DIVERGENCE');
                const newItem: HistoryItem = {
                    id: Date.now(),
                    date: new Date().toISOString(),
                    type: 'NARRATIVE',
                    driverId: selectedDriver,
                    driverName: getDriverName(),
                    fieldState: { ...narrativeFieldState },
                    worldLaw: { ...worldLawConfig },
                    visionInput: visionInput,
                    visionAnalysis: visionAnalysis,
                    visionImage: visionImage,
                    subjectType: subjectType,
                    aestheticMode: aestheticMode,
                    colorPalette: [...colorPalette],
                    blueprint: null,
                    treatments: treatments,
                    savedBlueprints: {}
                };
                addHistoryItem(newItem);
                setActiveHistoryItem(newItem);
            }
        } catch (e) {
            console.error(e);
            alert("Generation failed.");
        } finally {
            setIsGenerating(false);
            setTraverseStartTime(null);
        }
    };

    const createDefaultBlueprint = (): CreativeBlueprint => {
        return {
            treatmentId: 'standalone_' + Date.now(),
            driverType: selectedDriver || DriverType.NARRATIVE,
            narrative: {
                title: lang === 'EN' ? "New Project" : "新建项目",
                logline: "",
                synopsis: ""
            },
            context: {
                world: "",
                tone: "",
                colorPalette: [...colorPalette].filter(c => c !== ""),
                moodboard: { prompt: "", images: [], selectedImageId: null }
            },
            assets: { characters: [], locations: [], props: [] },
            metonymyData: {
                screenplay: [],
                staticStoryboard: [],
                dynamicScript: []
            }
        };
    };

    const handleOpenMetonymyPage = () => {
        const standaloneBlueprint = createDefaultBlueprint();
        standaloneBlueprint.narrative.title = lang === 'EN' ? "New Suture Project" : "新建转译项目";

        setActiveHistoryItem(null);
        setMetonymyBlueprint(standaloneBlueprint);

        handleViewChange('METONYMY');
        setIsSutureOpen(false);
        setPage(1);
    };

    const handleUpdateBlueprintCache = (blueprint: CreativeBlueprint) => {
        if (viewMode === 'METONYMY') {
            // REDESIGNED: Metonymy only updates local state, NOT history DB.
            // History saving is manual-only via the save button in MetonymyView.
            setMetonymyBlueprint(blueprint);
            // If restoring from history, keep the activeHistoryItem reference but don't auto-persist
            if (activeHistoryItem && activeHistoryItem.type === 'METONYMY') {
                setActiveHistoryItem({ ...activeHistoryItem, blueprint: blueprint });
            }
        } else {
            setActiveBlueprint(blueprint);

            if (activeHistoryItem && (activeHistoryItem.type === 'NARRATIVE' || activeHistoryItem.type === 'BIBLE')) {
                setCachedBlueprints(prev => ({
                    ...prev,
                    [blueprint.treatmentId]: blueprint
                }));

                const updatedItem = {
                    ...activeHistoryItem,
                    type: 'BIBLE' as const,
                    blueprint: blueprint,
                    savedBlueprints: {
                        ...(activeHistoryItem.savedBlueprints || {}),
                        [blueprint.treatmentId]: blueprint
                    }
                };
                updateHistoryItem(updatedItem);
                setActiveHistoryItem(updatedItem);
            }
        }
    };

    const handleAddToHistory = (blueprint: CreativeBlueprint) => {
        const isMetonymy = viewMode === 'METONYMY';

        if (isMetonymy) {
            // REDESIGNED: Metonymy always creates or updates via manual save
            if (activeHistoryItem && activeHistoryItem.type === 'METONYMY') {
                // Update existing metonymy record
                const updatedItem = {
                    ...activeHistoryItem,
                    date: new Date().toISOString(),
                    blueprint: blueprint
                };
                updateHistoryItem(updatedItem);
                setActiveHistoryItem(updatedItem);
            } else {
                // Create new metonymy record
                const newItem: HistoryItem = {
                    id: Date.now(),
                    date: new Date().toISOString(),
                    type: 'METONYMY',
                    driverId: selectedDriver || DriverType.NARRATIVE,
                    driverName: getDriverName(),
                    fieldState: { ...narrativeFieldState },
                    worldLaw: { ...worldLawConfig },
                    blueprint: blueprint,
                    treatments: [],
                    savedBlueprints: undefined
                };
                addHistoryItem(newItem);
                setActiveHistoryItem(newItem);
            }
        } else {
            // Narrative / Bible: auto-save (update existing or create new)
            if (activeHistoryItem) {
                const updatedItem = {
                    ...activeHistoryItem,
                    type: 'BIBLE' as const,
                    blueprint: blueprint,
                    savedBlueprints: { ...(activeHistoryItem.savedBlueprints || {}), [blueprint.treatmentId]: blueprint }
                };
                updateHistoryItem(updatedItem);
                setActiveHistoryItem(updatedItem);
            } else {
                const newItem: HistoryItem = {
                    id: Date.now(),
                    date: new Date().toISOString(),
                    type: 'BIBLE',
                    driverId: selectedDriver!,
                    driverName: getDriverName(),
                    fieldState: { ...narrativeFieldState },
                    worldLaw: { ...worldLawConfig },
                    blueprint: blueprint,
                    treatments: generatedTreatments,
                    savedBlueprints: { [blueprint.treatmentId]: blueprint }
                };
                addHistoryItem(newItem);
                setActiveHistoryItem(newItem);
            }
        }
    };

    const onHistoryRestore = (item: HistoryItem) => {
        setActiveHistoryItem(item);
        undoRedoDispatch({ type: 'SET', state: item.fieldState });
        setSelectedDriver(item.driverId);

        if (item.type === 'METONYMY') {
            if (item.blueprint) setMetonymyBlueprint(item.blueprint);
            handleViewChange('METONYMY');
        } else {
            if (item.blueprint) setActiveBlueprint(item.blueprint);
            if (item.treatments) setGeneratedTreatments(item.treatments);
            if (item.savedBlueprints) setCachedBlueprints(item.savedBlueprints);
            if (item.blueprint) handleViewChange('BIBLE');
            else if (item.treatments && item.treatments.length) handleViewChange('DIVERGENCE');
            else handleViewChange('ENGINE');
        }

        setPage(1);
        closeAllModals();
    };

    const onHistoryClear = () => {
        setHistory([]);
        persistence.clearHistory();
    };

    const getMetonymyThemeAccent = () => {
        if (metonymyBlueprint?.driverType === DriverType.COMMERCIAL) return "text-cyan-400";
        if (metonymyBlueprint?.driverType === DriverType.AESTHETIC) return "text-rose-400";
        if (metonymyBlueprint?.driverType === DriverType.EXPERIMENTAL) return "text-purple-400";
        if (metonymyBlueprint?.driverType === DriverType.TRAILER) return "text-orange-400";
        return "text-gold-primary";
    };

    const getMetonymyThemeBorder = () => {
        if (metonymyBlueprint?.driverType === DriverType.COMMERCIAL) return "border-cyan-500/30";
        if (metonymyBlueprint?.driverType === DriverType.AESTHETIC) return "border-rose-500/30";
        if (metonymyBlueprint?.driverType === DriverType.EXPERIMENTAL) return "border-purple-500/30";
        if (metonymyBlueprint?.driverType === DriverType.TRAILER) return "border-orange-500/30";
        return "border-gold-primary/30";
    };

    const handleBibleGenerate = async (treatment: CreativeTreatment, style: StyleConfig, force: boolean = false) => {
        if (!force && cachedBlueprints[treatment.id]) {
            setActiveBlueprint(cachedBlueprints[treatment.id]);
            handleViewChange('BIBLE');
            return;
        }
        setIsGenerating(true);
        setBibleStartTime(Date.now());
        try {
            const bp = await geminiService.generateBlueprint(
                selectedDriver!,
                treatment,
                style,
                narrativeFieldState,
                visionInput,
                visionImage,
                worldLawConfig,
                visionAnalysis,
                colorPalette.filter(c => c !== "")
            );
            if (bp) {
                setCachedBlueprints(prev => ({ ...prev, [treatment.id]: bp }));
                setActiveBlueprint(bp);
                handleAddToHistory(bp); // Automatically save the generated Creative Bible
                handleViewChange('BIBLE');
            }
        } catch (e) {
            console.error(e);
            alert(lang === 'EN' ? "Failed to generate Bible." : "生成圣经失败，请重试。");
        } finally {
            setIsGenerating(false);
            setBibleStartTime(null);
        }
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-[var(--bg-main)] text-zinc-300 font-sans selection:bg-gold-primary/30 selection:text-white overflow-hidden transition-colors duration-1000">
                {page === -1 ? (
                    <UniversePortal
                        lang={lang}
                        setLang={setLang}
                        setPage={setPage}
                        setViewMode={handleViewChange}
                        setInitialProtocol={setInitialProtocol}
                        currentUser={currentUser}
                        openAuth={openAuth}
                        openSettings={openSettings}
                        openProfile={() => setIsProfileOpen(true)}
                        openManual={openManual}
                    />
                ) : page === 2 ? (
                    <GlobalHomePage
                        lang={lang}
                        setLang={setLang}
                        setPage={setPage}
                        setViewMode={handleViewChange}
                        setInitialProtocol={setInitialProtocol}
                        currentUser={currentUser}
                        openAuth={openAuth}
                        openProfile={() => setIsProfileOpen(true)}
                        showRings={showRings}
                        setShowRings={setShowRings}
                    />
                ) : page === 0 ? (
                    <LandingView
                        lang={lang}
                        setLang={setLang}
                        setPage={setPage}
                        setViewMode={handleViewChange}
                        selectedDriver={selectedDriver}
                        onDriverSelect={handleDriverSelect}
                        hoveredDriver={hoveredDriver}
                        setHoveredDriver={setHoveredDriver}
                        handleOpenMetonymyPage={() => {
                            setPage(1);
                            handleOpenMetonymyPage();
                        }}
                        openManual={openManual}
                        isManualOpen={isManualOpen}
                        closeManual={() => setIsManualOpen(false)}
                        openHistory={openHistory}
                        isHistoryOpen={isHistoryOpen}
                        openAuth={openAuth}
                        openProfile={() => setIsProfileOpen(true)}
                        onLogout={() => supabaseAuthService.signOut()}
                        currentUser={currentUser}
                        closeHistory={closeHistory}
                        isSutureOpen={isSutureOpen}
                        closeSuture={() => setIsSutureOpen(false)}
                        onSutureGenerate={handleSutureGenerate}
                        isSutureGenerating={isSutureGenerating}
                        history={history}
                        onHistoryRestore={onHistoryRestore}
                        onHistoryClear={onHistoryClear}
                        openSettings={openSettings}
                        showRings={showRings}
                        setShowRings={setShowRings}
                        initialProtocol={initialProtocol}
                    />
                ) : viewMode === 'DICTIONARY' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve">
                        <PhilosophyCodexPage
                            onClose={() => setPage(-1)}
                            driverType={selectedDriver}
                            lang={lang}
                            currentUser={currentUser}
                            setLang={setLang}
                            openHistory={openHistory}
                            openSettings={openSettings}
                            openAuth={openAuth}
                            openProfile={() => setIsProfileOpen(true)}
                            showRings={showRings}
                            setShowRings={setShowRings}
                            setViewMode={handleViewChange}
                            renderInPlace={false}
                            initialDictionary={codexDictionary}
                            initialSection={codexSection as any}
                            initialDetailTab={codexDetailTab}
                            onDictionaryChange={setCodexDictionary}
                            onSectionChange={setCodexSection}
                            onDetailTabChange={setCodexDetailTab}
                        />
                    </div>
                ) : viewMode === 'TOPOLOGY' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve">
                        <LacanGraphView
                            lang={lang}
                            setLang={setLang}
                            onClose={() => {
                                setViewMode('DICTIONARY');
                            }}
                            openManual={openManual}
                            openHistory={openHistory}
                            openSettings={openSettings}
                            openProfile={() => setIsProfileOpen(true)}
                            currentUser={currentUser}
                            showRings={showRings}
                            setShowRings={setShowRings}
                        />
                    </div>
                ) : viewMode === 'ARCHIVE' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve flex flex-col">
                        <AppHeader
                            page={page}
                            lang={lang}
                            setLang={setLang}
                            setPage={setPage}
                            selectedDriver={selectedDriver}
                            driverName={lang === 'CN' ? '迷雾学派：主体档案' : 'MIST: SUBJECT ARCHIVE'}
                            viewMode={viewMode}
                            setViewMode={handleViewChange}
                            handleOpenMetonymyPage={handleOpenMetonymyPage}
                            openManual={openManual}
                            isManualOpen={isManualOpen}
                            openHistory={openHistory}
                            isHistoryOpen={isHistoryOpen}
                            openSettings={openSettings}
                            openAuth={openAuth}
                            openProfile={() => setIsProfileOpen(true)}
                            onLogout={() => supabaseAuthService.signOut()}
                            currentUser={currentUser}
                            showRings={showRings}
                            setShowRings={setShowRings}
                        />
                        <div className="flex-1 overflow-hidden relative">
                            <ArchiveDirectoryModal
                                isOpen={true}
                                onClose={() => {
                                    setPage(0);
                                    setViewMode('ENGINE');
                                }}
                                lang={lang}
                                isFullScreen={true}
                            />
                        </div>
                    </div>
                ) : viewMode === 'VIDEO' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve flex flex-col">
                        <AppHeader
                            page={page}
                            lang={lang}
                            setLang={setLang}
                            setPage={setPage}
                            selectedDriver={selectedDriver}
                            driverName={lang === 'CN' ? '迷雾学派：邪典影像' : 'MIST: CULT VIDEO'}
                            viewMode={viewMode}
                            setViewMode={handleViewChange}
                            handleOpenMetonymyPage={handleOpenMetonymyPage}
                            openManual={openManual}
                            isManualOpen={isManualOpen}
                            openHistory={openHistory}
                            isHistoryOpen={isHistoryOpen}
                            openSettings={openSettings}
                            openAuth={openAuth}
                            openProfile={() => setIsProfileOpen(true)}
                            onLogout={() => supabaseAuthService.signOut()}
                            currentUser={currentUser}
                            showRings={showRings}
                            setShowRings={setShowRings}
                        />
                        <div className="flex-1 overflow-hidden relative">
                            <VideoLibrary
                                isOpen={true}
                                onClose={() => {
                                    setPage(0);
                                    setViewMode('ENGINE');
                                }}
                                lang={lang}
                                isAdmin={currentUser?.membershipTier === 'admin' || (currentUser as any)?.membership_tier === 'admin'}
                                isFullScreen={true}
                            />
                        </div>
                    </div>
                ) : viewMode === 'RSI' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve">
                        <LacanTopologyView
                            lang={lang}
                            setLang={setLang}
                            onClose={() => {
                                setViewMode('DICTIONARY');
                                setHideSidebar(false);
                            }}
                            openManual={openManual}
                            openHistory={openHistory}
                            openSettings={openSettings}
                            openProfile={() => setIsProfileOpen(true)}
                            currentUser={currentUser}
                            showRings={showRings}
                            setShowRings={setShowRings}
                            hideSidebar={initialProtocol === 'DICTIONARY'}
                        />
                    </div>
                ) : viewMode === 'RORSCHACH' ? (
                    <div className="h-screen w-screen overflow-hidden flex flex-col animate-page-dissolve">
                        <AppHeader
                            page={page}
                            lang={lang}
                            setLang={setLang}
                            setPage={setPage}
                            selectedDriver={selectedDriver}
                            driverName={lang === 'CN' ? '迷雾学派：精神分析' : 'MIST: PSYCHOANALYSIS'}
                            viewMode={viewMode}
                            setViewMode={handleViewChange}
                            handleOpenMetonymyPage={handleOpenMetonymyPage}
                            openManual={openManual}
                            isManualOpen={isManualOpen}
                            openHistory={openHistory}
                            isHistoryOpen={isHistoryOpen}
                            openSettings={openSettings}
                            openAuth={openAuth}
                            openProfile={() => setIsProfileOpen(true)}
                            onLogout={() => supabaseAuthService.signOut()}
                            currentUser={currentUser}
                            showRings={showRings}
                            setShowRings={setShowRings}
                        />
                        <div className="flex-1 overflow-hidden relative">
                            <RorschachView
                                lang={lang}
                                setLang={setLang}
                                setPage={setPage}
                                setViewMode={setViewMode}
                                onClose={() => {
                                    setPage(0);
                                    setViewMode('ENGINE');
                                }}
                                openManual={openManual}
                                openHistory={openHistory}
                                openSettings={openSettings}
                                openProfile={() => setIsProfileOpen(true)}
                                currentUser={currentUser}
                                showRings={showRings}
                                setShowRings={setShowRings}
                            />
                        </div>
                    </div>
                ) : viewMode === 'ANALYSIS' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve">
                        <AnalysisView
                            blueprint={activeBlueprint || {
                                treatmentId: Date.now().toString(),
                                driverType: DriverType.NARRATIVE,
                                narrative: {
                                    title: '',
                                    logline: '',
                                    synopsis: '',
                                    psychoanalysis: ''
                                },
                                context: {
                                    world: '',
                                    tone: '',
                                    colorPalette: [],
                                    moodboard: {
                                        prompt: null,
                                        images: [],
                                        selectedImageId: null
                                    }
                                },
                                assets: { characters: [], locations: [], props: [] }
                            }}
                            language={lang === 'CN' ? 'CN' : 'EN'}
                            isAesthetic={false}
                            onAnalyzePsycho={async (fieldState, synopsis) => {
                                const result = await geminiService.analyzePsychoStructure(fieldState, synopsis);
                                return result || '';
                            }}
                            onUpdateBlueprint={(bp) => setActiveBlueprint(bp)}
                            fieldState={narrativeFieldState}
                            themeAccent="text-rose-400"
                            theme={theme}
                            onBack={() => {
                                setPage(0);
                                setViewMode('ENGINE');
                            }}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col h-screen overflow-hidden relative">
                        {!isSutureOpen && (
                            <AppHeader
                                page={page}
                                lang={lang}
                                setLang={setLang}
                                setPage={setPage}
                                selectedDriver={selectedDriver}
                                driverName={getDriverName()}
                                viewMode={viewMode}
                                setViewMode={handleViewChange}
                                handleOpenMetonymyPage={handleOpenMetonymyPage}
                                openManual={openManual}
                                isManualOpen={isManualOpen}
                                openHistory={openHistory}
                                isHistoryOpen={isHistoryOpen}
                                openSettings={openSettings}
                                openAuth={openAuth}
                                openProfile={() => setIsProfileOpen(true)}
                                onLogout={() => supabaseAuthService.signOut()}
                                currentUser={currentUser}
                                showRings={showRings}
                                setShowRings={setShowRings}
                                setInitialProtocol={setInitialProtocol}
                            />
                        )}

                        <main
                            className="flex-1 overflow-hidden relative bg-[var(--bg-main)] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
                        >
                            {viewMode === 'ENGINE' && selectedDriver && (
                                <div className="w-full h-full animate-page-dissolve">
                                    <NarrativeEngineField
                                        key={selectedDriver}
                                        fieldState={narrativeFieldState}
                                        onChange={handleNarrativeChange}
                                        onAutoFill={handleAutoFill}
                                        isAutoFilling={isAutoFilling}
                                        lang={lang}
                                        isSkinOpen={isSkinOpen}
                                        onToggleSkin={() => setIsSkinOpen(!isSkinOpen)}
                                        driverType={selectedDriver}
                                        onRandomizeFormula={handleRandomizeFormulaOnly}
                                        onResetFormula={handleGlobalReset}
                                        subjectType={subjectType}
                                        lockedModules={lockedModules}
                                        onToggleLock={handleToggleLock}
                                        lockedTags={lockedTags}
                                        onToggleTagLock={handleToggleTagLock}
                                        onRandomizeTag={handleRandomizeTag}
                                        isHistoryMode={!!activeHistoryItem}
                                        customLibraryDefs={customLibraryDefs}
                                        onAddCustomDef={handleAddCustomDef}
                                        aestheticMode={aestheticMode}
                                        onAestheticModeChange={setAestheticMode}
                                        colorPalette={colorPalette}
                                        onPaletteChange={setColorPalette}
                                        onApplyPreset={handleApplyPreset}
                                        onEditCustomDef={handleEditCustomDef}
                                        showRings={showRings}
                                        faceState={faceState}
                                        onFaceStateChange={(locks) => {
                                            setFaceState(prev => ({ ...prev, ...locks }));
                                        }}
                                    />
                                </div>
                            )}

                            {/* Safety fallback for lost driver selection */}
                            {viewMode === 'ENGINE' && !selectedDriver && (
                                <div className="w-full h-full flex flex-col items-center justify-center animate-page-dissolve p-10 text-center">
                                    <div className="w-20 h-20 rounded-full border border-gold-primary/20 flex items-center justify-center mb-8 animate-pulse">
                                        <Cpu size={32} className="text-gold-primary/40" />
                                    </div>
                                    <h2 className="text-2xl font-serif tracking-[0.3em] uppercase text-gold-primary/60 mb-4">引擎未激活 // ENGINE INACTIVE</h2>
                                    <p className="max-w-md text-sm text-zinc-500 font-medium leading-relaxed mb-10">
                                        {lang === 'EN'
                                            ? "No desire structure detected. Please select a core driver to initiate production."
                                            : "未检测到任务欲望结构。请选择一个核心驱动器以开始生产。"}
                                    </p>
                                    <button
                                        onClick={() => setPage(0)}
                                        className="px-10 py-3 bg-gold-primary/10 hover:bg-gold-primary/20 border border-gold-primary/30 text-gold-primary text-xs font-black tracking-[0.4em] uppercase transition-all"
                                    >
                                        {lang === 'EN' ? "SELECT DRIVER" : "选择驱动器"}
                                    </button>
                                </div>
                            )}
                            {viewMode === 'DIVERGENCE' && (
                                <div className="w-full h-full animate-page-dissolve">
                                    <NarrativePathsView
                                        treatments={generatedTreatments}
                                        onSelect={handleBibleGenerate}
                                        isProcessing={isGenerating}
                                        bibleStartTime={bibleStartTime}
                                        isHistoryMode={!!activeHistoryItem}
                                        onRegenerate={() => handleTraverseFantasy(true)}
                                        onBack={handleBackStep}
                                        onOpenHistory={openHistory}
                                        lang={lang}
                                        activeDriver={selectedDriver}
                                        cachedBlueprints={cachedBlueprints}
                                        fieldState={activeHistoryItem?.fieldState || narrativeFieldState}
                                        visionInput={activeHistoryItem?.visionInput || visionInput}
                                        visionAnalysis={activeHistoryItem?.visionAnalysis || visionAnalysis}
                                        thinkingXml={thinkingXml}
                                        worldLawConfig={activeHistoryItem?.worldLaw || worldLawConfig}
                                        onToggleTag={handleToggleTag}
                                    />
                                </div>
                            )}
                            {viewMode === 'BIBLE' && (
                                <div className="w-full h-full animate-page-dissolve">
                                    <BlueprintEditor
                                        blueprint={activeBlueprint}
                                        theme={theme}
                                        onClose={() => handleViewChange('DIVERGENCE')}
                                        onGoHome={() => { handleViewChange('ENGINE'); setActiveHistoryItem(null); closeAllModals(); }}
                                        onSave={(bp) => {
                                            handleAddToHistory(bp);
                                        }}
                                        language={lang}
                                        onToggleLanguage={() => setLang(prev => prev === 'CN' ? 'EN' : 'CN')}
                                        onUpdateWithAI={geminiService.updateBlueprint}
                                        onGenerateAssetPrompt={geminiService.generateAssetPrompts}
                                        onGenerateAssetImage={handleVisionImageGenerate}
                                        onGenerateAssets={undefined}
                                        onAnalyzePsycho={geminiService.analyzePsychoStructure}
                                        fieldState={activeHistoryItem?.fieldState || narrativeFieldState}
                                        treatments={generatedTreatments}
                                        onUpdateBlueprint={handleUpdateBlueprintCache}
                                        driverName={getDriverName()}
                                        isHistoryMode={!!activeHistoryItem}
                                        onOpenHistory={openHistory}
                                        onOpenManual={openManual}
                                        onOpenSuture={() => setIsSutureOpen(true)}
                                        onSaveToHistory={handleAddToHistory}
                                        onSaveToCollection={handleAddToHistory}
                                        onGlobalCopy={handleGlobalCopy}
                                        selectedDriver={selectedDriver || DriverType.NARRATIVE}
                                        worldLaw={activeHistoryItem?.worldLaw || worldLawConfig}
                                        visionInput={activeHistoryItem?.visionInput || visionInput}
                                        visionAnalysis={activeHistoryItem?.visionAnalysis || visionAnalysis}
                                        subjectType={activeHistoryItem?.subjectType || subjectType}
                                        aestheticMode={activeHistoryItem?.aestheticMode || aestheticMode}
                                        customLibraryDefs={customLibraryDefs}
                                        isSutureOpen={isSutureOpen}
                                        onSutureOpenChange={setIsSutureOpen}
                                    />
                                </div>
                            )}
                            {/* MetonymyView integrated into main layout to share EngineBottomBar */}
                            {viewMode === 'METONYMY' && metonymyBlueprint && (
                                <div className="w-full h-full animate-page-dissolve">
                                    <MetonymyView
                                        blueprint={metonymyBlueprint}
                                        language={lang}
                                        onUpdateBlueprint={handleUpdateBlueprintCache}
                                        themeAccent={getMetonymyThemeAccent()}
                                        themeBorder={getMetonymyThemeBorder()}
                                        isFullScreen={false}
                                        onToggleFullScreen={() => handleViewChange('ENGINE')}
                                        fieldState={narrativeFieldState}
                                        onSaveToHistory={handleAddToHistory}
                                        onGenerateAssetImage={handleVisionImageGenerate}
                                        onSutureOpenChange={setIsSutureOpen}
                                    />
                                </div>
                            )}
                        </main>

                        {/* Show EngineBottomBar for ENGINE and METONYMY modes */}
                        {(viewMode === 'ENGINE' || viewMode === 'METONYMY') && !isSutureOpen && (
                            <EngineBottomBar
                                lang={lang}
                                selectedDriver={selectedDriver}
                                isSkinOpen={isSkinOpen}
                                setIsSkinOpen={setIsSkinOpen}
                                isVisionOpen={isVisionOpen}
                                setIsVisionOpen={setIsVisionOpen}
                                isAestheticInputOpen={isAestheticInputOpen}
                                setIsAestheticInputOpen={setIsAestheticInputOpen}
                                worldLawConfig={worldLawConfig}
                                setWorldLawConfig={setWorldLawConfig}
                                isWorldLawOpen={isWorldLawOpen}
                                setIsWorldLawOpen={setIsWorldLawOpen}
                                isTensionOpen={isTensionOpen}
                                setIsTensionOpen={setIsTensionOpen}
                                handleBackStep={handleBackStep}
                                handleUndo={handleUndo}
                                handleRedo={handleRedo}
                                pastStatesLength={pastStatesLength}
                                futureStatesLength={futureStatesLength}
                                subjectType={subjectType}
                                setSubjectType={setSubjectType}
                                handleAestheticSmartRandom={handleAestheticSmartRandom}
                                handleCopyAestheticPrompt={handleCopyAestheticPrompt}
                                handleGlobalReset={handleGlobalReset}
                                handleGlobalRandomize={handleGlobalRandomize}
                                handleRandomizeFormulaOnly={handleRandomizeFormulaOnly}
                                handleResetFormulaOnly={handleResetFormulaOnly}
                                promptCopied={promptCopied}
                                isGenerating={isGenerating}
                                traverseStartTime={traverseStartTime}
                                handleTraverseFantasy={handleTraverseFantasy}
                                hasFieldState={Object.keys(narrativeFieldState).length > 0}
                                onRandomizeBlock={handleRandomizeBlock}
                                onClearBlock={handleClearBlock}
                                isTaskManagerOpen={isTaskManagerOpen}
                                setIsTaskManagerOpen={setIsTaskManagerOpen}
                                setIsPromptInspectorOpen={setIsPromptInspectorOpen}
                            />
                        )}

                        <TheSkinSidebar
                            fieldState={narrativeFieldState}
                            onOpenLibrary={openLibrary}
                            onRemoveTag={removeTag}
                            isOpen={isSkinOpen}
                            onClose={() => setIsSkinOpen(false)}
                            onRandomize={handleRandomizeSkinOnly}
                            onReset={handleResetSkinOnly}
                            lang={lang}
                            driverType={selectedDriver || DriverType.NARRATIVE}
                            lockedModules={lockedModules}
                            onToggleLock={handleToggleLock}
                            lockedTags={lockedTags}
                            onToggleTagLock={handleToggleTagLock}
                            onRandomizeTag={handleRandomizeTag}
                            getItemDetails={getItemDetails}
                            onRandomizeBlock={handleRandomizeBlock}
                            onClearBlock={handleClearBlock}
                            onUpdateState={updateNarrativeState}
                            onAddCustomDef={handleAddCustomDef}
                            onEditCustomDef={handleEditCustomDef}
                            zIndex={topSidebar === 'skin' ? 70 : 60}
                            onRandomizeSummaryGroup={handleRandomizeSummaryGroup}
                            onRandomizeStructureGroup={handleRandomizeStructureGroup}
                        />

                        <VisionSidebar
                            isOpen={isVisionOpen}
                            onClose={() => setIsVisionOpen(false)}
                            visionInput={visionInput}
                            onVisionInputChange={setVisionInput}
                            visionImage={visionImage}
                            onVisionImageChange={setVisionImage}
                            onAutoFill={handleVisionAutoFill}
                            onGenerateImage={handleVisionImageGenerate}
                            isAutoFilling={isAutoFilling}
                            visionStartTime={visionStartTime}
                            lang={lang}
                            driverType={selectedDriver || DriverType.NARRATIVE}
                            visionAnalysis={visionAnalysis}
                            onVisionAnalysisChange={setVisionAnalysis}
                            onAnalyzeImage={handleAnalyzeImage}
                            isAnalyzingImage={isAnalyzingImage}
                            zIndex={topSidebar === 'vision' ? 70 : 60}
                        />

                        <AestheticInputSidebar
                            isOpen={isAestheticInputOpen}
                            onClose={() => setIsAestheticInputOpen(false)}
                            onAnalyzeAndMap={handleAestheticInputMap}
                            isProcessing={isMappingInput}
                            lang={lang}
                        />
                    </div>
                )}



                {/* Modal removed in favor of full page in the Routes flow above, but we keep the logic tethered to isManualOpen for now to minimize ripple effects */}
                {isHistoryOpen && <HistoryModal history={history} onRestore={onHistoryRestore} onClear={onHistoryClear} onClose={closeHistory} lang={lang} />}

                {activeBlockId && (
                    <NarrativeLibraryModal
                        isOpen={libraryModalOpen}
                        onClose={() => setLibraryModalOpen(false)}
                        blockId={activeBlockId}
                        blockName={getBlockName(activeBlockId, lang)}
                        selectedTags={narrativeFieldState[activeBlockId] || []}
                        onToggleTag={(tag) => handleToggleTag(activeBlockId, tag)}
                        onClear={() => {
                            const newState = { ...narrativeFieldState, [activeBlockId]: [] };
                            updateNarrativeState(newState);
                        }}
                        lang={lang}
                        driverType={selectedDriver || DriverType.NARRATIVE}
                        onAddCustomDef={handleAddCustomDef}
                        onTempLockChange={(locks) => {
                            setFaceState(prev => ({ ...prev, ...locks }));
                        }}
                        initialFaceState={faceState}
                        customLibraryData={
                            activeBlockId === 'aes_palette_preset'
                                ? [{ id: 'lib_master', name: '视觉大师预设 (Master Presets)', desc: 'Pre-configured Cinematic Styles', items: MASTER_PRESETS }]
                                : (activeBlockId === 'aes_color_palette'
                                    ? [{ id: 'lib_color', name: '经典色板库 (Color Palettes)', desc: 'Classic Color Schemes', items: AES_COLOR_PRESETS }]
                                    : undefined)
                        }
                    />
                )}

                <TensionMonitorModal
                    isOpen={isTensionOpen}
                    onClose={() => setIsTensionOpen(false)}
                    fieldState={narrativeFieldState}
                    worldLaw={worldLawConfig}
                    lang={lang}
                    selectedDriver={selectedDriver}
                />

                {/* WorldLawModal integrated into EngineBottomBar */}
                {isSettingsOpen && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[200] p-4">
                        <SimpleConfigPanel lang={lang} onClose={closeSettings} />
                    </div>
                )}

                <AuthModal
                    isOpen={isAuthOpen}
                    onClose={() => setIsAuthOpen(false)}
                    onLogin={(user) => setCurrentUser(user)}
                    lang={lang}
                />
                <UserProfileModal
                    isOpen={isProfileOpen}
                    onClose={() => setIsProfileOpen(false)}
                    currentUser={currentUser}
                    onProfileUpdate={(updates) => setCurrentUser(prev => ({ ...prev, ...updates }))}
                    onLogout={async () => {
                        await supabaseAuthService.signOut();
                        setIsProfileOpen(false);
                    }}
                    lang={lang}
                />
                <TaskManagerPanel
                    isOpen={isTaskManagerOpen}
                    onClose={() => setIsTaskManagerOpen(false)}
                    lang={lang}
                    driverType={selectedDriver}
                />
                
                <PromptInspectorModal
                    isOpen={isPromptInspectorOpen}
                    onClose={() => setIsPromptInspectorOpen(false)}
                    lang={lang}
                    fieldState={narrativeFieldState}
                    visionInput={visionInput}
                    visionImage={visionImage}
                    worldLawConfig={worldLawConfig}
                    driverType={selectedDriver}
                    faceState={faceState}
                />
            </div>
        </QueryClientProvider>
    );
};

export default App;