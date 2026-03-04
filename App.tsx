import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { NarrativeEngineField } from './components/NarrativeEngineField';
import { BlueprintEditor } from './components/BlueprintEditor';
import { HistoryModal } from './components/HistoryModal';
import { NarrativePathsView } from './components/NarrativePathsView';
import { ProductManualModal } from './components/ProductManualModal';
import { WorldLawModal } from './components/WorldLawModal';
import { SutureModal } from './components/SutureModal';
import { NarrativeLibraryModal } from './components/NarrativeLibraryModal';
import { MetonymyView } from './components/blueprint/MetonymyView';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { AppHeader } from './components/AppHeader';
import { EngineBottomBar } from './components/EngineBottomBar';
import { LandingView } from './components/LandingView';
import { VisionSidebar } from './components/VisionSidebar';
import { TheSkinSidebar } from './components/TheSkinSidebar';
import { AestheticInputSidebar } from './components/AestheticInputSidebar';
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
    AestheticMode,
    AestheticPreset
} from './types';
import {
    DRIVERS,
    NARRATIVE_ENGINE_BLOCKS, COMMERCIAL_ENGINE_BLOCKS, EXPERIMENTAL_ENGINE_BLOCKS, AESTHETIC_ENGINE_BLOCKS, TRAILER_ENGINE_BLOCKS,
    ALL_SKIN_BLOCKS, COMM_SKIN_BLOCKS, EXPERIMENTAL_SKIN_BLOCKS, TRAILER_SKIN_BLOCKS,
    BLOCK_LIMITS,
    AES_COLOR_PRESETS,
    NARRATIVE_ENGINE_LIBRARY, COMMERCIAL_ENGINE_LIBRARY, EXPERIMENTAL_ENGINE_LIBRARY, AESTHETIC_ENGINE_LIBRARY, TRAILER_ENGINE_LIBRARY,
    COMM_SKIN_LIBRARY, EXPERIMENTAL_SKIN_LIBRARY, TRAILER_SKIN_LIBRARY, SKIN_LIBRARY, GENRE_CATEGORIES
} from './constants';
import { ANIMATION_GENRE_CATEGORIES } from './data/animation_genres';
import { MASTER_PRESETS } from './data/master_presets';
import * as geminiService from './services/geminiService';
import * as randomizerService from './services/randomizer';
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

type ViewMode = 'ENGINE' | 'DIVERGENCE' | 'BIBLE' | 'METONYMY';

const App: React.FC = () => {
    const { isOpen: isSettingsOpen, openSettings, closeSettings } = useSettings();
    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState<0 | 1>(0);
    const [lang, setLang] = useState<'CN' | 'EN'>('CN');
    const [viewMode, setViewMode] = useState<ViewMode>('ENGINE');
    const [selectedDriver, setSelectedDriver] = useState<DriverType | null>(null);
    const [hoveredDriver, setHoveredDriver] = useState<DriverType | null>(null);
    const [subjectType, setSubjectType] = useState<SubjectType>('HUMAN');
    const [aestheticMode, setAestheticMode] = useState<AestheticMode>('REALISM');
    const [lockedModules, setLockedModules] = useState<Record<string, boolean>>({});
    const [lockedTags, setLockedTags] = useState<Record<string, string[]>>({});
    const [narrativeFieldState, setNarrativeFieldState] = useState<NarrativeFieldState>({});
    const [savedFieldStates, setSavedFieldStates] = useState<Record<string, NarrativeFieldState>>({});
    const [worldLawConfig, setWorldLawConfig] = useState<WorldLawConfig>({ physics: 'STRICT', context: 'PURE' });

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

    const [isAutoFilling, setIsAutoFilling] = useState(false);
    const [visionInput, setVisionInput] = useState("");
    const [visionImage, setVisionImage] = useState<string | null>(null);
    const [visionAnalysis, setVisionAnalysis] = useState("");
    const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);
    const [customLibraryDefs, setCustomLibraryDefs] = useState<Record<string, { def: string; core: string }>>({});

    const [pastStates, setPastStates] = useState<NarrativeFieldState[]>([]);
    const [futureStates, setFutureStates] = useState<NarrativeFieldState[]>([]);

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

    const [generatedTreatments, setGeneratedTreatments] = useState<CreativeTreatment[]>([]);

    const [activeBlueprint, setActiveBlueprint] = useState<CreativeBlueprint | null>(null);
    const [metonymyBlueprint, setMetonymyBlueprint] = useState<CreativeBlueprint | null>(null);
    const [cachedBlueprints, setCachedBlueprints] = useState<Record<string, CreativeBlueprint>>({});

    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [activeHistoryItem, setActiveHistoryItem] = useState<HistoryItem | null>(null);
    const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
    const [promptCopied, setPromptCopied] = useState(false);
    const [globalCopied, setGlobalCopied] = useState(false);

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
                const isProTierActive = ['pro', 'annual', 'lifetime'].includes(tier);
                const levelLabel = tier === 'lifetime' ? '终身造物主 (Lifetime Creator)' : tier === 'annual' ? '年度架构师 (Annual Architect)' : '未激活 (Not Activated)';
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

    const openManual = () => {
        navigate('/codex');
        setIsHistoryOpen(false);
        setIsSutureOpen(false);
    };
    const closeManual = () => {
        navigate('/');
        setIsManualOpen(false);
    };
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
        const isMembershipActive = ['pro', 'annual', 'lifetime'].includes(activeTier || '');

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
        if (viewMode === 'DIVERGENCE' || viewMode === 'BIBLE' || viewMode === 'METONYMY') {
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

    const saveToHistory = () => {
        setPastStates(prev => {
            const next = [...prev, JSON.parse(JSON.stringify(narrativeFieldState))];
            if (next.length > 20) return next.slice(1);
            return next;
        });
        if (futureStates.length > 0) setFutureStates([]);
    };

    const handleUndo = () => {
        if (pastStates.length === 0) return;
        const previous = pastStates[pastStates.length - 1];
        setFutureStates(prev => [JSON.parse(JSON.stringify(narrativeFieldState)), ...prev].slice(0, 20));
        setPastStates(prev => prev.slice(0, -1));
        setNarrativeFieldState(previous);
        if (selectedDriver) {
            setSavedFieldStates(prev => ({ ...prev, [selectedDriver]: previous }));
        }
    };

    const handleRedo = () => {
        if (futureStates.length === 0) return;
        const next = futureStates[0];
        setPastStates(prev => [...prev, JSON.parse(JSON.stringify(narrativeFieldState))].slice(-20));
        setFutureStates(prev => prev.slice(1));
        setNarrativeFieldState(next);
        if (selectedDriver) {
            setSavedFieldStates(prev => ({ ...prev, [selectedDriver]: next }));
        }
    };

    const updateNarrativeState = (newState: NarrativeFieldState) => {
        saveToHistory();
        setNarrativeFieldState(newState);
        setActiveHistoryItem(null);
        if (selectedDriver) {
            setSavedFieldStates(prev => ({ ...prev, [selectedDriver]: newState }));
        }
    };

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
        setPastStates([]);
        setFutureStates([]);
        if (savedFieldStates[id]) { setNarrativeFieldState(savedFieldStates[id]); }
        else { setNarrativeFieldState({}); }
        setActiveHistoryItem(null);
        setGeneratedTreatments([]);
        setActiveBlueprint(null);
        setCachedBlueprints({});
        setWorldLawConfig({ physics: 'STRICT', context: 'PURE' });

        if (id !== DriverType.AESTHETIC) {
            setIsSkinOpen(true);
        } else {
            setIsSkinOpen(false);
            // Ensure palette is clean for new aesthetic session
            setColorPalette(Array(7).fill(""));
        }
        setIsVisionOpen(false);
        setIsAestheticInputOpen(false);
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

            if (lockedTags[blockId]) {
                setLockedTags(prev => ({
                    ...prev,
                    [blockId]: (prev[blockId] || []).filter(t => t !== oldTag)
                }));
            }
        }
    };

    // Helper function to randomize a single block
    const handleRandomizeBlock = (blockId: string) => {
        if (lockedModules[blockId]) return;

        const newState = { ...narrativeFieldState };
        const currentTags = newState[blockId] || [];
        const limit = BLOCK_LIMITS[blockId] || 1;

        // Determine how many items to pick based on limit rules
        let count = 1;
        if (selectedDriver === DriverType.AESTHETIC && (blockId === 'aes_skin_texture' || blockId === 'aes_body_features' || blockId === 'aes_face_features')) {
            count = Math.floor(Math.random() * 2) + 1;
        } else if (limit > 1) {
            count = Math.floor(Math.random() * Math.min(limit, 3)) + 1;
        }

        // Get libraries
        let fullLibrary: any[] = [];
        if (selectedDriver === DriverType.COMMERCIAL) fullLibrary = [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY];
        else if (selectedDriver === DriverType.AESTHETIC) fullLibrary = [...AESTHETIC_ENGINE_LIBRARY, ...SKIN_LIBRARY];
        else if (selectedDriver === DriverType.EXPERIMENTAL) fullLibrary = [...EXPERIMENTAL_ENGINE_BLOCKS, ...EXPERIMENTAL_SKIN_BLOCKS];
        else if (selectedDriver === DriverType.TRAILER) fullLibrary = [...TRAILER_ENGINE_BLOCKS, ...TRAILER_SKIN_BLOCKS];
        else fullLibrary = [...NARRATIVE_ENGINE_BLOCKS, ...SKIN_LIBRARY, ...GENRE_CATEGORIES, ...ANIMATION_GENRE_CATEGORIES];

        const libId = blockId === 'skin_era' ? 'skin_era_lib' : `${blockId}_lib`;
        const category = fullLibrary.find(c => c.id === libId);

        // Handle Special Cases for Genre/Animation
        if (!category && blockId === 'skin_genre') {
            const allGenres = GENRE_CATEGORIES.flatMap(c => c.items);
            const available = allGenres.filter(i => !currentTags.includes(i.name));
            const selected: string[] = [];
            for (let i = 0; i < count; i++) {
                if (available.length === 0) break;
                const idx = Math.floor(Math.random() * available.length);
                selected.push(available[idx].name);
                available.splice(idx, 1);
            }
            newState[blockId] = selected;
            updateNarrativeState(newState);
            return;
        }

        if (category && category.items.length > 0) {
            // Apply Archetype Filtering
            const currentEraTags = newState['skin_era'] || [];
            const currentEra = currentEraTags.length > 0 ? currentEraTags[0] : "";
            const archetype = randomizerService.getArchetypeFromEra(currentEra);

            let availableItems = category.items;
            if (blockId === 'skin_location' || blockId === 'skin_profession' || blockId === 'skin_society' || blockId === 'skin_ideology' || blockId === 'comm_skin_scenario' || blockId === 'engine_m1' || blockId === 'skin_origin') {
                // Note: filterItemsByArchetype needs to be imported or duplicated. Using the service one.
                availableItems = randomizerService.filterItemsByArchetype(category.items, archetype, blockId);
                if (availableItems.length === 0) availableItems = category.items;
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
        }
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
            newState[blockId] = current.includes(tag) ? [] : [tag];
            updateNarrativeState(newState);
            return;
        }

        if (current.includes(tag)) {
            newState[blockId] = current.filter(t => t !== tag);
        } else {
            if (current.length >= limit) {
                alert(lang === 'EN' ? `Max ${limit} items for this module.` : `该模块最多选择 ${limit} 个。`);
                return;
            }
            newState[blockId] = [...current, tag];
        }
        updateNarrativeState(newState);
    };

    const handleBackStep = () => {
        if (viewMode === 'BIBLE') handleViewChange('DIVERGENCE');
        else if (viewMode === 'DIVERGENCE') {
            handleViewChange('ENGINE');
            setActiveHistoryItem(null);
            if (selectedDriver !== DriverType.AESTHETIC) setIsSkinOpen(true);
            setIsVisionOpen(false);
            setIsAestheticInputOpen(false);
        } else if (viewMode === 'METONYMY') {
            handleViewChange('ENGINE');
            setMetonymyBlueprint(null);
            if (selectedDriver !== DriverType.AESTHETIC) setIsSkinOpen(true);
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
            const treatments = await geminiService.generateFantasyTraverse(
                selectedDriver,
                "SHORT",
                narrativeFieldState,
                visionInput,
                visionImage,
                worldLawConfig,
                subjectType,
                visionAnalysis,
                colorPalette.filter(c => c !== "")
            );
            if (treatments?.length) {
                setGeneratedTreatments(treatments);
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
            setMetonymyBlueprint(blueprint);

            if (activeHistoryItem && activeHistoryItem.type === 'METONYMY') {
                // Only update memory/DB if we are working on an archived item
                const updatedItem = { ...activeHistoryItem, blueprint: blueprint };
                updateHistoryItem(updatedItem);
                setActiveHistoryItem(updatedItem);
            }
        } else {
            setActiveBlueprint(blueprint);

            if (activeHistoryItem && activeHistoryItem.type === 'NARRATIVE') {
                setCachedBlueprints(prev => ({
                    ...prev,
                    [blueprint.treatmentId]: blueprint
                }));

                const updatedItem = {
                    ...activeHistoryItem,
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
        if (activeHistoryItem) {
            // Updating existing history item
            const updatedItem = {
                ...activeHistoryItem,
                blueprint: activeHistoryItem.type === 'METONYMY' ? blueprint : activeHistoryItem.blueprint,
                savedBlueprints: activeHistoryItem.type === 'NARRATIVE' ? { ...(activeHistoryItem.savedBlueprints || {}), [blueprint.treatmentId]: blueprint } : undefined
            };
            updateHistoryItem(updatedItem);
            setActiveHistoryItem(updatedItem);
        } else {
            // Creating new history item
            const isMetonymy = viewMode === 'METONYMY';
            const newItem: HistoryItem = {
                id: Date.now(),
                date: new Date().toISOString(),
                type: isMetonymy ? 'METONYMY' : 'NARRATIVE',
                driverId: selectedDriver!,
                driverName: getDriverName(),
                fieldState: { ...narrativeFieldState },
                worldLaw: { ...worldLawConfig },
                blueprint: isMetonymy ? blueprint : null,
                treatments: isMetonymy ? [] : generatedTreatments,
                savedBlueprints: isMetonymy ? undefined : { [blueprint.treatmentId]: blueprint }
            };
            addHistoryItem(newItem);
            setActiveHistoryItem(newItem);
        }
    };

    const onHistoryRestore = (item: HistoryItem) => {
        setActiveHistoryItem(item);
        setNarrativeFieldState(item.fieldState);
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
        <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-gold-primary/30 selection:text-white overflow-hidden">
            {page === 0 ? (
                <LandingView
                    lang={lang}
                    setLang={setLang}
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
                />
            ) : (
                <div className="flex flex-col h-screen overflow-hidden relative">
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
                    />

                    <main className="flex-1 overflow-hidden relative">
                        {viewMode === 'ENGINE' && selectedDriver && (
                            <NarrativeEngineField
                                fieldState={narrativeFieldState}
                                onChange={handleNarrativeChange}
                                onAutoFill={handleAutoFill}
                                isAutoFilling={isAutoFilling}
                                lang={lang}
                                isSkinOpen={isSkinOpen}
                                onToggleSkin={() => setIsSkinOpen(!isSkinOpen)}
                                driverType={selectedDriver}
                                onRandomizeFormula={handleGlobalRandomize}
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
                            />
                        )}
                        {viewMode === 'DIVERGENCE' && (
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
                            />
                        )}
                        {viewMode === 'BIBLE' && (
                            <BlueprintEditor
                                blueprint={activeBlueprint}
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
                            />
                        )}
                        {/* MetonymyView integrated into main layout to share EngineBottomBar */}
                        {viewMode === 'METONYMY' && metonymyBlueprint && (
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
                            />
                        )}
                    </main>

                    {/* Show EngineBottomBar for ENGINE and METONYMY modes */}
                    {(viewMode === 'ENGINE' || viewMode === 'METONYMY') && (
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
                            setIsWorldLawOpen={setIsWorldLawOpen}
                            handleBackStep={handleBackStep}
                            handleUndo={handleUndo}
                            handleRedo={handleRedo}
                            pastStatesLength={pastStates.length}
                            futureStatesLength={futureStates.length}
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

            <ProductManualModal isOpen={isManualOpen} onClose={closeManual} driverType={selectedDriver} />
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
                    customLibraryData={
                        activeBlockId === 'aes_palette_preset'
                            ? [{ id: 'lib_master', name: '视觉大师预设 (Master Presets)', desc: 'Pre-configured Cinematic Styles', items: MASTER_PRESETS }]
                            : (activeBlockId === 'aes_color_palette'
                                ? [{ id: 'lib_color', name: '经典色板库 (Color Palettes)', desc: 'Classic Color Schemes', items: AES_COLOR_PRESETS }]
                                : undefined)
                    }
                />
            )}

            <WorldLawModal
                isOpen={isWorldLawOpen}
                onClose={() => setIsWorldLawOpen(false)}
                config={worldLawConfig}
                onChange={setWorldLawConfig}
                lang={lang}
                driverType={selectedDriver || DriverType.NARRATIVE}
            />
            {isSettingsOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
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
        </div>
    );
};

export default App;