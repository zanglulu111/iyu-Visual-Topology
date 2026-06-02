import React, { useState, useEffect, useCallback, useReducer, useRef } from 'react';
import { Cpu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UniversePortal } from './components/UniversePortalReplica';
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
    FaceState,
    PromptFocusState,
    MAxisMixerState,
    M7BResidueIntensity,
    NarrativePromptVersion,
    VisionImageUseMode,
    ConceptDesignRuntimeState,
    ConceptDesignWorkspacePage,
    MistProject,
    ProjectWorkspaceSnapshot,
    ArchiveSource,
    ArchiveReason
} from './types';
import {
    DRIVERS,
    NARRATIVE_ENGINE_BLOCKS, COMMERCIAL_ENGINE_BLOCKS, EXPERIMENTAL_ENGINE_BLOCKS, AESTHETIC_ENGINE_BLOCKS, CONCEPT_ENGINE_BLOCKS, TRAILER_ENGINE_BLOCKS,
    ALL_SKIN_BLOCKS, COMM_SKIN_BLOCKS, EXPERIMENTAL_SKIN_BLOCKS, TRAILER_SKIN_BLOCKS,
    BLOCK_LIMITS,
    RANDOM_RANGES,
    AES_COLOR_PRESETS,
    NARRATIVE_ENGINE_LIBRARY, COMMERCIAL_ENGINE_LIBRARY, EXPERIMENTAL_ENGINE_LIBRARY, AESTHETIC_ENGINE_LIBRARY, CONCEPT_ENGINE_LIBRARY, TRAILER_ENGINE_LIBRARY,
    COMM_SKIN_LIBRARY, EXPERIMENTAL_SKIN_LIBRARY, TRAILER_SKIN_LIBRARY, SKIN_LIBRARY, GENRE_CATEGORIES, WORLD_MOTIF_CATEGORIES,
    getRandomSur3CoordinatePreset
} from './constants';
import { MASTER_PRESETS } from './data/aesthetic/master_presets';
import * as geminiService from './services/geminiService';
import * as randomizerService from './services/randomizer';
import { normalizeWorldLawConfig } from './services/worldLaw';
import { buildVisibleFocusPatch, clearFocusForTagsPatch, getAllSelectedTags, getSelectedFocusBlockMap, getSelectedFocusUnitMap } from './utils/focusTerms';
import { withDefaultSvSelections, SV_DEFAULT_BLOCKS } from './data/engine_sv/defaults';

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

const isNoShiftEntryDriver = (driver: DriverType | null) =>
    driver === DriverType.COMMERCIAL || driver === DriverType.SUTURE || driver === DriverType.AESTHETIC || driver === DriverType.CONCEPT_DESIGN || driver === DriverType.NARRATIVE || driver === DriverType.TRAILER || driver === DriverType.EXPERIMENTAL;
import { supabase } from './services/supabaseAuth';
import { generateGlobalDump } from './utils/exportUtils';
import { generateAestheticPrompt } from './utils/promptUtils';
import { generateConceptDesignPrompt } from './utils/conceptDesignPrompt';
import { getBlockName } from './utils/blockUtils';
import { findItemDetails, findItemFull } from './services/dataRegistry';
import { generateAestheticReverse } from './services/aestheticReverseService';
import { persistence } from './services/persistence';
import { buildDesireProjectsFromHistoryItem } from './services/desireArchiveService';
import { supabaseAuthService, AuthUser } from './services/supabaseAuth';
import { supabaseDatabase } from './services/supabaseDatabase';
import { useSettings } from './contexts/SettingsContext';
import { useTheme } from './contexts/ThemeContext';
import { BorromeanRings } from './components/BorromeanRings';
import { TaskManagerPanel } from './components/TaskManagerPanel';

const loadNarrativeEngineField = () => import('./components/NarrativeEngineField').then(module => ({ default: module.NarrativeEngineField }));
const loadBlueprintEditor = () => import('./components/BlueprintEditor').then(module => ({ default: module.BlueprintEditor }));
const loadNarrativePathsView = () => import('./components/NarrativePathsView').then(module => ({ default: module.NarrativePathsView }));
const loadMetonymyView = () => import('./components/blueprint/MetonymyView').then(module => ({ default: module.MetonymyView }));
const loadAppHeader = () => import('./components/AppHeader').then(module => ({ default: module.AppHeader }));
const loadEngineBottomBar = () => import('./components/EngineBottomBar').then(module => ({ default: module.EngineBottomBar }));
const loadLandingView = () => import('./components/LandingView').then(module => ({ default: module.LandingView }));
const loadGlobalHomePage = () => import('./components/GlobalHomePage').then(module => ({ default: module.GlobalHomePage }));

const WORKFLOW_VIEW_MODES = new Set<ViewMode>(['ENGINE', 'DIVERGENCE', 'BIBLE', 'METONYMY']);

const getDriverEntryViewMode = (id: DriverType): ViewMode => (
    id === DriverType.TRAILER ? 'CANVAS' : id === DriverType.EXPERIMENTAL ? 'METONYMY' : 'ENGINE'
);

const preloadNarrativeWorkflowViews = () => {
    void loadAppHeader();
    void loadEngineBottomBar();
    void loadNarrativeEngineField();
    void loadNarrativePathsView();
    void loadBlueprintEditor();
    void loadMetonymyView();
};

const preloadWorkflowViewMode = (mode: ViewMode) => {
    void loadAppHeader();
    if (mode === 'ENGINE') {
        void loadEngineBottomBar();
        void loadNarrativeEngineField();
    } else if (mode === 'DIVERGENCE') {
        void loadNarrativePathsView();
    } else if (mode === 'BIBLE') {
        void loadBlueprintEditor();
    } else if (mode === 'METONYMY') {
        void loadEngineBottomBar();
        void loadMetonymyView();
    }
};

const preloadCoreDriverLanding = () => {
    void loadLandingView();
    preloadWorkflowViewMode('ENGINE');
};

const NarrativeEngineField = React.lazy(loadNarrativeEngineField);
const BlueprintEditor = React.lazy(loadBlueprintEditor);
const AnalysisView = React.lazy(() => import('./components/blueprint/AnalysisView').then(module => ({ default: module.AnalysisView })));
const HistoryModal = React.lazy(() => import('./components/HistoryModal').then(module => ({ default: module.HistoryModal })));
const NarrativePathsView = React.lazy(loadNarrativePathsView);
const NarrativeLibraryModal = React.lazy(() => import('./components/NarrativeLibraryModal').then(module => ({ default: module.NarrativeLibraryModal })));
const TensionMonitorModal = React.lazy(() => import('./components/TensionMonitorModal').then(module => ({ default: module.TensionMonitorModal })));
const MetonymyView = React.lazy(loadMetonymyView);
const MistCanvasEngine = React.lazy(() => import('./components/canvas/MistCanvasEngine').then(module => ({ default: module.MistCanvasEngine })));
const AuthModal = React.lazy(() => import('./components/AuthModal').then(module => ({ default: module.AuthModal })));
const UserProfileModal = React.lazy(() => import('./components/UserProfileModal').then(module => ({ default: module.UserProfileModal })));
const AppHeader = React.lazy(loadAppHeader);
const EngineBottomBar = React.lazy(loadEngineBottomBar);
const ProjectSystemModal = React.lazy(() => import('./components/ProjectSystemModal').then(module => ({ default: module.ProjectSystemModal })));
const LandingView = React.lazy(loadLandingView);
const GlobalHomePage = React.lazy(loadGlobalHomePage);
const VisionSidebar = React.lazy(() => import('./components/VisionSidebar').then(module => ({ default: module.VisionSidebar })));
const TheSkinSidebar = React.lazy(() => import('./components/TheSkinSidebar').then(module => ({ default: module.TheSkinSidebar })));
const AestheticInputSidebar = React.lazy(() => import('./components/AestheticInputSidebar').then(module => ({ default: module.AestheticInputSidebar })));
const PromptInspectorModal = React.lazy(() => import('./components/PromptInspectorModal').then(module => ({ default: module.PromptInspectorModal })));
const SimpleConfigPanel = React.lazy(() => import('./src/components/SimpleConfigPanel').then(module => ({ default: module.SimpleConfigPanel })));
const LacanGraphView = React.lazy(() => import('./components/LacanGraphView').then(module => ({ default: module.LacanGraphView })));
const LacanTopologyView = React.lazy(() => import('./components/LacanTopologyView').then(module => ({ default: module.LacanTopologyView })));
const ArchiveDirectoryModal = React.lazy(() => import('./components/ArchiveDirectoryModal').then(module => ({ default: module.ArchiveDirectoryModal })));
const VideoLibrary = React.lazy(() => import('./components/VideoLibrary').then(module => ({ default: module.VideoLibrary })));
const PhilosopherPosterIndexPage = React.lazy(() => import('./components/PhilosopherPosterIndexPage').then(module => ({ default: module.PhilosopherPosterIndexPage })));
const MistLexiconLandingPage = React.lazy(() => import('./components/MistLexiconLandingPage').then(module => ({ default: module.MistLexiconLandingPage })));
const RorschachView = React.lazy(() => import('./components/RorschachView').then(module => ({ default: module.RorschachView })));
const PromptSkillLibrary = React.lazy(() => import('./components/PromptSkillLibrary').then(module => ({ default: module.PromptSkillLibrary })));
const PromptArchivePage = React.lazy(() => import('./components/PromptArchivePage').then(module => ({ default: module.default })));

const DEFAULT_WORLD_LAW_CONFIG: WorldLawConfig = normalizeWorldLawConfig({ gravity: 2 });
const WORLD_LAW_LOCK_ID = 'world_law';

const shouldApplyNarrativeSvDefaults = (driver: DriverType | null | undefined) => (
    !driver || driver === DriverType.NARRATIVE
);

const normalizeNarrativeFieldState = (
    state: NarrativeFieldState | null | undefined,
    driver: DriverType | null | undefined
): NarrativeFieldState => {
    const base = { ...(state || {}) };
    return shouldApplyNarrativeSvDefaults(driver) ? withDefaultSvSelections(base) : base;
};

const useDelayedPresence = (isPresent: boolean, delayMs = 520) => {
    const [shouldRender, setShouldRender] = useState(isPresent);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        if (timerRef.current !== null) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        if (isPresent) {
            setShouldRender(true);
            return;
        }

        timerRef.current = window.setTimeout(() => {
            setShouldRender(false);
            timerRef.current = null;
        }, delayMs);

        return () => {
            if (timerRef.current !== null) {
                window.clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isPresent, delayMs]);

    return shouldRender;
};

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
            return { past: [], present: action.state || {}, future: [] };
        }
        default:
            return state;
    }
}

type SaveArchiveOptions = {
    archiveSource?: ArchiveSource;
    archiveReason?: ArchiveReason;
};

const ACTIVE_PROJECT_STORAGE_KEY = 'mistActiveProjectId';

const createProjectId = () => `mist_project_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const createUntitledProject = (lang: 'CN' | 'EN', title?: string): MistProject => {
    const now = new Date().toISOString();
    return {
        id: createProjectId(),
        title: title?.trim() || (lang === 'CN' ? `未命名项目 ${new Date().toLocaleDateString('zh-CN')}` : `Untitled Project ${new Date().toLocaleDateString('en-US')}`),
        createdAt: now,
        updatedAt: now,
        lastSavedAt: now
    };
};

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
    const [portalEntryMode, setPortalEntryMode] = useState<'intro' | 'return'>('intro');
    const [portalTransition, setPortalTransition] = useState<'to-engine' | 'to-portal' | null>(null);
    const [lang, setLang] = useState<'CN' | 'EN'>('CN');
    const [viewMode, setViewMode] = useState<ViewMode>('ENGINE');
    const [conceptWorkspacePage, setConceptWorkspacePage] = useState<ConceptDesignWorkspacePage>('ENGINE');
    const [selectedDriver, setSelectedDriver] = useState<DriverType | null>(null);
    const [initialProtocol, setInitialProtocol] = useState<string | undefined>(undefined);
    const [hideSidebar, setHideSidebar] = useState(false);
    const [hoveredDriver, setHoveredDriver] = useState<DriverType | null>(null);
    const [subjectType, setSubjectType] = useState<SubjectType>('HUMAN');
    const [aestheticMode, setAestheticMode] = useState<AestheticMode>('REALISM');
    const [lockedModules, setLockedModules] = useState<Record<string, boolean>>({});
    const [lockedTags, setLockedTags] = useState<Record<string, string[]>>({});
    const [undoRedoState, undoRedoDispatch] = useReducer(undoRedoReducer, { past: [], present: withDefaultSvSelections({} as NarrativeFieldState), future: [] });
    const narrativeFieldState = undoRedoState.present;
    const [faceState, setFaceState] = useState<FaceState>({});
    const [focusState, setFocusState] = useState<PromptFocusState>({});
    const [mAxisMixer, setMAxisMixer] = useState<MAxisMixerState>({});
    const [m7bIntensity, setM7bIntensity] = useState<M7BResidueIntensity>('light');
    const [worldLawConfig, setWorldLawConfig] = useState<WorldLawConfig>(DEFAULT_WORLD_LAW_CONFIG);
    const [showRings, setShowRings] = useState(true);
    const [ringAnimClass, setRingAnimClass] = useState(showRings ? 'animate-ring-entrance' : 'opacity-0');
    const [ringAnimKey, setRingAnimKey] = useState(0);
    const lastShowRingsRef = useRef(showRings);

    useEffect(() => {
        const win = window as Window & {
            requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
            cancelIdleCallback?: (handle: number) => void;
        };

        if (portalTransition === 'to-engine' || page === 0) {
            preloadCoreDriverLanding();

            const preloadRest = () => preloadNarrativeWorkflowViews();
            if (win.requestIdleCallback) {
                const idleId = win.requestIdleCallback(preloadRest, { timeout: 900 });
                return () => win.cancelIdleCallback?.(idleId);
            }

            const timer = window.setTimeout(preloadRest, 240);
            return () => window.clearTimeout(timer);
        }

        if (page !== 1 && !WORKFLOW_VIEW_MODES.has(viewMode)) return;

        const preload = () => preloadNarrativeWorkflowViews();

        if (win.requestIdleCallback) {
            const idleId = win.requestIdleCallback(preload, { timeout: 1200 });
            return () => win.cancelIdleCallback?.(idleId);
        }

        const timer = window.setTimeout(preload, 120);
        return () => window.clearTimeout(timer);
    }, [page, viewMode, portalTransition]);

    useEffect(() => {
        // Handle page transition exit animation
        if (portalTransition === 'to-portal') {
            if (ringAnimClass !== 'animate-ring-exit') {
                setRingAnimClass('animate-ring-exit');
                setRingAnimKey(prev => prev + 1);
            }
            return;
        }

        if (showRings === lastShowRingsRef.current) return;

        if (showRings) {
            setRingAnimClass('animate-ring-entrance');
        } else {
            setRingAnimClass('animate-ring-exit');
        }
        setRingAnimKey(prev => prev + 1);
        lastShowRingsRef.current = showRings;
    }, [showRings, portalTransition]);

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
    const [narrativePromptVersion, setNarrativePromptVersion] = useState<NarrativePromptVersion>('v4');
    const portalTransitionTimersRef = useRef<(number | null)[]>([null, null]);
    const shouldRenderSkinSidebar = useDelayedPresence(isSkinOpen);
    const shouldRenderVisionSidebar = useDelayedPresence(isVisionOpen);
    const shouldRenderAestheticInputSidebar = useDelayedPresence(isAestheticInputOpen);

    const [isAutoFilling, setIsAutoFilling] = useState(false);
    const [visionInput, setVisionInput] = useState("");
    const [visionImageNote, setVisionImageNote] = useState("");
    const [visionImageMode, setVisionImageMode] = useState<VisionImageUseMode>('auto');
    const [visionImage, setVisionImage] = useState<string | null>(null);
    const [visionAnalysis, setVisionAnalysis] = useState("");
    const [visionImplantEnabled, setVisionImplantEnabled] = useState(true);
    const [visionCandidateState, setVisionCandidateState] = useState<NarrativeFieldState>({});
    const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);
    const [customLibraryDefs, setCustomLibraryDefs] = useState<Record<string, { def: string; core: string }>>({});

    // === Undo/Redo System (useReducer — no stale closures) ===
    const pastStatesLength = undoRedoState.past.length;
    const futureStatesLength = undoRedoState.future.length;

    // Sync active accent color to CSS variables
    useEffect(() => {
        const driverDef = DRIVERS.find(d => d.id === selectedDriver);
        const accent = theme === 'retro'
            ? '#8B261D'
            : (driverDef?.accent || '#ff4f3f');

        document.documentElement.style.setProperty('--mist-active-accent', accent);

        // Convert hex to rgb for opacity support
        if (accent.startsWith('#')) {
            const r = parseInt(accent.slice(1, 3), 16);
            const g = parseInt(accent.slice(3, 5), 16);
            const b = parseInt(accent.slice(5, 7), 16);
            const rgb = `${r}, ${g}, ${b}`;
            document.documentElement.style.setProperty('--mist-active-accent-rgb', rgb);
            document.documentElement.style.setProperty('--text-accent', accent);
            document.documentElement.style.setProperty('--border-accent', accent);
            document.documentElement.style.setProperty('--accent-color', accent);
            document.documentElement.style.setProperty('--accent-glow', `rgba(${rgb}, 0.18)`);
            document.documentElement.style.setProperty('--gold-primary', accent);
            document.documentElement.style.setProperty('--gold-bright', accent);
            document.documentElement.style.setProperty('--gold-soft', `rgba(${rgb}, 0.18)`);
            document.documentElement.style.setProperty('--mist-archive-red', accent);
            document.documentElement.style.setProperty('--mist-archive-red-soft', `rgba(${rgb}, 0.72)`);
            document.documentElement.style.setProperty('--mist-archive-red-faint', `rgba(${rgb}, 0.12)`);
            document.documentElement.style.setProperty('--mist-archive-signal-line', `rgba(${rgb}, 0.05)`);
            document.documentElement.style.setProperty('--mist-archive-signal-line-strong', `rgba(${rgb}, 0.1)`);
            document.documentElement.style.setProperty('--mist-archive-signal-wash', `rgba(${rgb}, 0.045)`);
            document.documentElement.style.setProperty('--mist-archive-signal-wash-faint', `rgba(${rgb}, 0.026)`);
            document.documentElement.style.setProperty('--mist-archive-signal-glow', `rgba(${rgb}, 0.38)`);
            document.documentElement.style.setProperty('--mist-archive-signal-shadow', `rgba(${rgb}, 0.18)`);
        }
    }, [selectedDriver, theme]);

    useEffect(() => {
        return () => clearPortalTransitionTimers();
    }, []);

    const handleUndo = () => {
        undoRedoDispatch({ type: 'UNDO' });
    };

    const handleRedo = () => {
        undoRedoDispatch({ type: 'REDO' });
    };

    const clearFocusForRemovedStateTags = (previousState: NarrativeFieldState, nextState: NarrativeFieldState) => {
        const nextVisibleTags = new Set(getAllSelectedTags(nextState));
        const removedTags = Array.from(new Set(getAllSelectedTags(previousState).filter(tag => !nextVisibleTags.has(tag))));
        if (removedTags.length === 0) return;
        setFocusState(prev => ({
            ...prev,
            ...removedTags.reduce<PromptFocusState>((acc, tag) => {
                acc[tag] = false;
                return acc;
            }, {})
        }));
    };

    useEffect(() => {
        const patch = buildVisibleFocusPatch(
            focusState,
            getAllSelectedTags(narrativeFieldState),
            getSelectedFocusBlockMap(narrativeFieldState)
        );
        if (Object.keys(patch).length > 0) {
            setFocusState(prev => ({ ...prev, ...patch }));
        }
    }, [focusState, narrativeFieldState]);

    const updateNarrativeState = (newState: NarrativeFieldState) => {
        const normalizedState = normalizeNarrativeFieldState(newState, selectedDriver);
        clearFocusForRemovedStateTags(narrativeFieldState, normalizedState);
        undoRedoDispatch({ type: 'PUSH', state: normalizedState });
        setActiveHistoryItem(null);
    };

    const applyVisionCandidateState = (candidateState: NarrativeFieldState) => {
        const mergedState: NarrativeFieldState = { ...narrativeFieldState };
        Object.entries(candidateState).forEach(([blockId, tags]) => {
            const existing = mergedState[blockId] || [];
            const nextTags = [...existing];
            tags.forEach(tag => {
                if (!nextTags.includes(tag)) nextTags.push(tag);
            });
            if (nextTags.length > 0) mergedState[blockId] = nextTags;
        });
        updateNarrativeState(mergedState);
    };

    const buildVisionCreativeContext = () => {
        const parts: string[] = [];
        if (visionInput.trim()) parts.push(`【最高优先级：创意灵感 / 用户补充】\n${visionInput.trim()}`);
        return parts.join('\n\n');
    };

    const buildVisionAnalysisContext = () => {
        const parts: string[] = [];
        const creativeContext = buildVisionCreativeContext();
        if (creativeContext) parts.push(creativeContext);
        if (visionImage) parts.push(`【图像通用反推】\n请根据用户文字与图像本身，自行判断哪些是必须保留的图像事实，哪些只是氛围/构图/材质参考，哪些可以被用户文字替换。用户文字最高优先。`);
        if (visionImageNote.trim()) parts.push(`【图片解析提示】\n${visionImageNote.trim()}`);
        return parts.join('\n\n');
    };

    const buildVisionGenerationContext = (includeImplantContent: boolean = true) => {
        const parts = [buildVisionCreativeContext()];
        if (includeImplantContent && visionAnalysis.trim()) parts.push(`【用户确认/可编辑的图片解析结果】\n${visionAnalysis.trim()}`);
        return parts.filter(Boolean).join('\n\n');
    };

    const isVisionImplantPayloadEnabled = (snapshotEnabled?: boolean) => (
        visionImplantEnabled && snapshotEnabled !== false
    );

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
    const isAdmin = currentUser?.membershipTier === 'admin' || (currentUser as any)?.membership_tier === 'admin';
    const [isSutureGenerating, setIsSutureGenerating] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isMappingInput, setIsMappingInput] = useState(false);

    const [traverseStartTime, setTraverseStartTime] = useState<number | null>(null);
    const [bibleStartTime, setBibleStartTime] = useState<number | null>(null);
    const [visionStartTime, setVisionStartTime] = useState<number | null>(null);
    const [codexDictionary, setCodexDictionary] = useState<string>('MIST');
    const [codexSection, setCodexSection] = useState<string>('CONCEPTS');
    const [codexDetailTab, setCodexDetailTab] = useState<'DEFINITION' | 'ANALOGY' | 'APPLICATION'>('DEFINITION');

    const [generatedTreatments, setGeneratedTreatments] = useState<CreativeTreatment[]>([]);
    const [thinkingXml, setThinkingXml] = useState<string>('');

    const [activeBlueprint, setActiveBlueprint] = useState<CreativeBlueprint | null>(null);
    const [metonymyBlueprint, setMetonymyBlueprint] = useState<CreativeBlueprint | null>(null);
    const [cachedBlueprints, setCachedBlueprints] = useState<Record<string, CreativeBlueprint>>({});

    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [activeHistoryItem, setActiveHistoryItem] = useState<HistoryItem | null>(null);
    const [projects, setProjects] = useState<MistProject[]>([]);
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
    const [promptCopied, setPromptCopied] = useState(false);
    const [globalCopied, setGlobalCopied] = useState(false);
    const [isTaskManagerOpen, setIsTaskManagerOpen] = useState(false);
    const [isTensionOpen, setIsTensionOpen] = useState(false);
    const [conceptRuntimeState, setConceptRuntimeState] = useState<ConceptDesignRuntimeState | null>(null);
    const lastConceptArchiveSignatureRef = useRef<string>('');

    useEffect(() => {
        if (isSettingsOpen) {
            setIsTaskManagerOpen(false);
        }
    }, [isSettingsOpen]);

    // DB Initialization and Loading
    useEffect(() => {
        persistence.init().then(() => {
            loadHistoryFromDB();
            loadProjectsFromDB();
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

    const loadProjectsFromDB = async () => {
        try {
            const savedProjects = await persistence.getMistProjects();
            if (savedProjects.length > 0) {
                setProjects(savedProjects);
                const storedActiveId = localStorage.getItem(ACTIVE_PROJECT_STORAGE_KEY);
                const nextActiveId = storedActiveId && savedProjects.some(project => project.id === storedActiveId)
                    ? storedActiveId
                    : savedProjects[0].id;
                setActiveProjectId(nextActiveId);
                localStorage.setItem(ACTIVE_PROJECT_STORAGE_KEY, nextActiveId);
                const active = savedProjects.find(project => project.id === nextActiveId);
                if (active?.snapshot) restoreProjectWorkspace(active.snapshot, false);
                return;
            }

            const defaultProject = createUntitledProject(lang, lang === 'CN' ? '默认项目' : 'Default Project');
            await persistence.saveMistProject(defaultProject);
            setProjects([defaultProject]);
            setActiveProjectId(defaultProject.id);
            localStorage.setItem(ACTIVE_PROJECT_STORAGE_KEY, defaultProject.id);
        } catch (e) {
            console.error("Failed to load projects from DB", e);
        }
    };

    // Helper to add a new item to history state AND DB
    const addHistoryItem = async (item: HistoryItem) => {
        // Optimistic update
        setHistory(prev => [item, ...prev]);
        try {
            await persistence.saveHistoryItem(item);
            await Promise.all(buildDesireProjectsFromHistoryItem(item).map(project => persistence.saveDesireProject(project)));
        } catch (e) {
            console.error("Failed to save history item", e);
        }
    };

    // Helper to update an existing item in history
    const updateHistoryItem = async (updatedItem: HistoryItem) => {
        setHistory(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i));
        try {
            await persistence.saveHistoryItem(updatedItem);
            await Promise.all(buildDesireProjectsFromHistoryItem(updatedItem).map(project => persistence.saveDesireProject(project)));
        } catch (e) {
            console.error("Failed to update history item", e);
        }
    };

    const openHistory = () => {
        // Refresh list on open
        if (currentUser.id !== 'guest_user') {
            loadHistoryFromDB();
        }
        setIsTaskManagerOpen(false);
        setIsHistoryOpen(true);
        setIsProjectsOpen(false);
        setIsManualOpen(false);
        setIsSutureOpen(false);
    };
    const closeHistory = () => setIsHistoryOpen(false);

    const activeProject = projects.find(project => project.id === activeProjectId) || null;

    const openProjects = () => {
        setIsProjectsOpen(true);
        setIsHistoryOpen(false);
        setIsManualOpen(false);
        setIsSutureOpen(false);
    };

    const createWorkspaceSnapshot = (modeOverride?: ViewMode): ProjectWorkspaceSnapshot => ({
        selectedDriver,
        viewMode: modeOverride || viewMode,
        fieldState: { ...narrativeFieldState },
        worldLaw: normalizeWorldLawConfig(worldLawConfig),
        visionInput,
        visionAnalysis,
        visionImage,
        visionImageNote,
        visionImageMode,
        visionImplantEnabled,
        subjectType,
        aestheticMode,
        colorPalette: [...colorPalette],
        faceState: { ...faceState },
        focusState: { ...focusState },
        mAxisMixer: { ...mAxisMixer },
        m7bIntensity,
        conceptRuntimeState,
        treatments: generatedTreatments,
        activeBlueprint,
        metonymyBlueprint,
        cachedBlueprints,
        activeHistoryItem
    });

    const inferProjectTitle = (fallback?: string) => {
        const candidate = activeBlueprint?.narrative?.title
            || metonymyBlueprint?.narrative?.title
            || generatedTreatments[0]?.title
            || fallback
            || activeProject?.title;
        return candidate && candidate.trim() ? candidate.trim() : (lang === 'CN' ? '未命名项目' : 'Untitled Project');
    };

    const upsertProject = async (project: MistProject) => {
        setProjects(prev => [project, ...prev.filter(item => item.id !== project.id)]);
        setActiveProjectId(project.id);
        localStorage.setItem(ACTIVE_PROJECT_STORAGE_KEY, project.id);
        await persistence.saveMistProject(project);
    };

    const resetWorkspaceForProject = () => {
        setActiveHistoryItem(null);
        setActiveBlueprint(null);
        setMetonymyBlueprint(null);
        setCachedBlueprints({});
        setGeneratedTreatments([]);
        setThinkingXml('');
        undoRedoDispatch({ type: 'SET', state: normalizeNarrativeFieldState({}, selectedDriver) });
        setVisionInput('');
        setVisionAnalysis('');
        setVisionImage(null);
        setVisionImageNote('');
        setVisionImplantEnabled(true);
        setWorldLawConfig(DEFAULT_WORLD_LAW_CONFIG);
        setColorPalette(Array(7).fill(""));
        setFaceState({});
        setFocusState({});
        setMAxisMixer({});
        setM7bIntensity('light');
        setViewMode('ENGINE');
        setPage(1);
    };

    const handleCreateProject = async (title?: string) => {
        const nextProject: MistProject = {
            ...createUntitledProject(lang, title),
            snapshot: {
                ...createWorkspaceSnapshot('ENGINE'),
                selectedDriver,
                viewMode: 'ENGINE' as ViewMode,
                fieldState: normalizeNarrativeFieldState({}, selectedDriver),
                treatments: [],
                activeBlueprint: null,
                metonymyBlueprint: null,
                cachedBlueprints: {},
                activeHistoryItem: null
            }
        };
        await upsertProject(nextProject);
        resetWorkspaceForProject();
        setIsProjectsOpen(false);
    };

    const restoreProjectWorkspace = (snapshot?: ProjectWorkspaceSnapshot, jumpToPage: boolean = true) => {
        if (!snapshot) {
            resetWorkspaceForProject();
            return;
        }

        setSelectedDriver(snapshot.selectedDriver || null);
        const snapshotDriver = snapshot.selectedDriver || null;
        undoRedoDispatch({ type: 'SET', state: normalizeNarrativeFieldState(snapshot.fieldState || {}, snapshotDriver) });
        setWorldLawConfig(normalizeWorldLawConfig(snapshot.worldLaw || DEFAULT_WORLD_LAW_CONFIG));
        setVisionInput(snapshot.visionInput || '');
        setVisionAnalysis(snapshot.visionAnalysis || '');
        setVisionImage(snapshot.visionImage ?? null);
        setVisionImageNote(snapshot.visionImageNote || '');
        setVisionImageMode(snapshot.visionImageMode === 'anchor' ? 'anchor' : 'auto');
        setVisionImplantEnabled(snapshot.visionImplantEnabled !== false);
        setSubjectType(snapshot.subjectType || 'HUMAN');
        setAestheticMode(snapshot.aestheticMode || 'REALISM');
        setColorPalette(snapshot.colorPalette?.length ? snapshot.colorPalette : Array(7).fill(""));
        setFaceState(snapshot.faceState || {});
        setFocusState((snapshot as any).focusState || {});
        setMAxisMixer(snapshot.mAxisMixer || {});
        setM7bIntensity(snapshot.m7bIntensity || 'light');
        setConceptRuntimeState(snapshot.conceptRuntimeState || null);
        setGeneratedTreatments(snapshot.treatments || []);
        setActiveBlueprint(snapshot.activeBlueprint || null);
        setMetonymyBlueprint(snapshot.metonymyBlueprint || null);
        setCachedBlueprints(snapshot.cachedBlueprints || {});
        setActiveHistoryItem(snapshot.activeHistoryItem || null);
        setViewMode(snapshot.viewMode || 'ENGINE');
        if (jumpToPage) setPage(1);
    };

    // Auto-dismiss Task Manager on navigation
    useEffect(() => {
        setIsTaskManagerOpen(false);
    }, [viewMode, page]);

    const handleRestoreProject = async (project: MistProject) => {
        setActiveProjectId(project.id);
        localStorage.setItem(ACTIVE_PROJECT_STORAGE_KEY, project.id);
        restoreProjectWorkspace(project.snapshot);
        setIsProjectsOpen(false);
    };

    const handleDeleteProject = async (projectId: string) => {
        const target = projects.find(project => project.id === projectId);
        if (!target) return;
        const confirmed = window.confirm(lang === 'CN' ? `确认删除项目「${target.title}」？项目内历史档案不会被删除。` : `Delete project "${target.title}"? Its archives will remain.`);
        if (!confirmed) return;
        await persistence.deleteMistProject(projectId);
        const nextProjects = projects.filter(project => project.id !== projectId);
        setProjects(nextProjects);
        if (activeProjectId === projectId) {
            const nextProject = nextProjects[0] || createUntitledProject(lang, lang === 'CN' ? '默认项目' : 'Default Project');
            if (nextProjects.length === 0) await persistence.saveMistProject(nextProject);
            setProjects(nextProjects.length === 0 ? [nextProject] : nextProjects);
            setActiveProjectId(nextProject.id);
            localStorage.setItem(ACTIVE_PROJECT_STORAGE_KEY, nextProject.id);
            restoreProjectWorkspace(nextProject.snapshot);
        }
    };

    const saveProjectShell = async (overrides: Partial<MistProject> = {}, snapshotOverride?: Partial<ProjectWorkspaceSnapshot>) => {
        const now = new Date().toISOString();
        const project = activeProject || createUntitledProject(lang);
        const nextProject: MistProject = {
            ...project,
            ...overrides,
            title: overrides.title || inferProjectTitle(project.title),
            updatedAt: now,
            lastSavedAt: overrides.lastSavedAt !== undefined ? overrides.lastSavedAt : project.lastSavedAt,
            snapshot: {
                ...createWorkspaceSnapshot(),
                ...snapshotOverride
            }
        };
        await upsertProject(nextProject);
        return nextProject;
    };

    const handleSaveProject = async () => {
        let savedHistoryItem: HistoryItem | undefined;
        if (viewMode === 'BIBLE' && activeBlueprint) {
            savedHistoryItem = handleAddToHistory(activeBlueprint, {
                archiveSource: 'MANUAL_SAVE',
                archiveReason: 'PROJECT_SAVED'
            });
        } else if (viewMode === 'METONYMY' && metonymyBlueprint) {
            savedHistoryItem = handleAddToHistory(metonymyBlueprint, {
                archiveSource: 'MANUAL_SAVE',
                archiveReason: 'PROJECT_SAVED'
            });
        }

        await saveProjectShell(
            {
                activeHistoryId: savedHistoryItem?.id || activeHistoryItem?.id,
                title: inferProjectTitle(),
                lastSavedAt: new Date().toISOString()
            },
            {
                activeHistoryItem: savedHistoryItem || activeHistoryItem
            }
        );
        setIsProjectsOpen(false);
    };

    const cloneBlueprintWithArchiveTitle = (blueprint: CreativeBlueprint | null | undefined, title?: string) => {
        if (!blueprint || !title?.trim()) return blueprint || null;
        return {
            ...blueprint,
            narrative: {
                ...blueprint.narrative,
                title: title.trim()
            }
        };
    };

    const createCurrentArchiveItem = (options: SaveArchiveOptions & { id?: number; title?: string } = {}): HistoryItem => {
        const now = new Date().toISOString();
        const bibleBlueprint = cloneBlueprintWithArchiveTitle(activeBlueprint || activeHistoryItem?.blueprint || null, options.title);
        const scriptBlueprint = cloneBlueprintWithArchiveTitle(metonymyBlueprint || activeHistoryItem?.metonymyBlueprint || null, options.title);
        const primaryBlueprint = bibleBlueprint || scriptBlueprint;
        const snapshotFieldState = primaryBlueprint?.generationFieldState || activeHistoryItem?.fieldState || narrativeFieldState;
        const snapshotWorldLaw = primaryBlueprint?.generationWorldLaw || activeHistoryItem?.worldLaw || worldLawConfig;
        const snapshotVisionInput = primaryBlueprint?.generationVisionInput ?? activeHistoryItem?.visionInput ?? visionInput;
        const snapshotVisionAnalysis = primaryBlueprint?.generationVisionAnalysis ?? activeHistoryItem?.visionAnalysis ?? visionAnalysis;
        const snapshotVisionImage = primaryBlueprint?.generationVisionImage ?? activeHistoryItem?.visionImage ?? visionImage;
        const snapshotVisionImageNote = primaryBlueprint?.generationVisionImageNote ?? activeHistoryItem?.visionImageNote ?? visionImageNote;
        const snapshotVisionImageMode = primaryBlueprint?.generationVisionImageMode ?? activeHistoryItem?.visionImageMode ?? visionImageMode;
        const snapshotVisionImplantEnabled = primaryBlueprint?.generationVisionImplantEnabled ?? activeHistoryItem?.visionImplantEnabled ?? visionImplantEnabled;
        const snapshotSubjectType = primaryBlueprint?.generationSubjectType ?? activeHistoryItem?.subjectType ?? subjectType;
        const snapshotAestheticMode = primaryBlueprint?.generationAestheticMode ?? activeHistoryItem?.aestheticMode ?? aestheticMode;
        const snapshotColorPalette = primaryBlueprint?.generationColorPalette ?? activeHistoryItem?.colorPalette ?? [...colorPalette];
        const snapshotFaceState = primaryBlueprint?.generationFaceState ?? activeHistoryItem?.faceState ?? { ...faceState };
        const snapshotFocusState = primaryBlueprint?.generationFocusState ?? activeHistoryItem?.focusState ?? { ...focusState };
        const snapshotMAxisMixer = primaryBlueprint?.generationMAxisMixer ?? activeHistoryItem?.mAxisMixer ?? { ...mAxisMixer };
        const snapshotM7BIntensity = primaryBlueprint?.generationM7BIntensity ?? activeHistoryItem?.m7bIntensity ?? m7bIntensity;
        const snapshotConceptRuntimeState = (selectedDriver === DriverType.CONCEPT_DESIGN || activeHistoryItem?.driverId === DriverType.CONCEPT_DESIGN)
            ? (conceptRuntimeState || activeHistoryItem?.conceptRuntimeState || null)
            : null;
        const snapshotTreatments = activeHistoryItem?.treatments?.length ? activeHistoryItem.treatments : generatedTreatments;
        const savedBlueprints = bibleBlueprint
            ? { ...(activeHistoryItem?.savedBlueprints || {}), [bibleBlueprint.treatmentId]: bibleBlueprint }
            : activeHistoryItem?.savedBlueprints;

        return {
            id: options.id || Date.now(),
            projectId: activeProjectId || undefined,
            archiveSource: options.archiveSource || 'MANUAL_SAVE',
            archiveReason: options.archiveReason || 'USER_SAVED',
            date: now,
            type: scriptBlueprint && !bibleBlueprint ? 'METONYMY' : (primaryBlueprint ? 'BIBLE' : 'NARRATIVE'),
            driverId: selectedDriver || primaryBlueprint?.driverType || activeHistoryItem?.driverId || DriverType.NARRATIVE,
            driverName: getDriverName(),
            fieldState: { ...snapshotFieldState },
            worldLaw: { ...snapshotWorldLaw },
            visionInput: snapshotVisionInput,
            visionAnalysis: snapshotVisionAnalysis,
            visionImage: snapshotVisionImage,
            visionImageNote: snapshotVisionImageNote,
            visionImageMode: snapshotVisionImageMode,
            visionImplantEnabled: snapshotVisionImplantEnabled,
            subjectType: snapshotSubjectType,
            aestheticMode: snapshotAestheticMode,
            colorPalette: [...snapshotColorPalette],
            faceState: { ...snapshotFaceState },
            focusState: { ...snapshotFocusState },
            mAxisMixer: { ...snapshotMAxisMixer },
            m7bIntensity: snapshotM7BIntensity,
            conceptRuntimeState: snapshotConceptRuntimeState,
            blueprint: primaryBlueprint,
            metonymyBlueprint: scriptBlueprint,
            treatments: snapshotTreatments,
            savedBlueprints
        };
    };

    const handleSaveCurrentToArchive = async (options: { targetHistoryId?: number | string; saveAs?: boolean; title?: string } = {}) => {
        const targetId = !options.saveAs ? options.targetHistoryId : undefined;
        const existing = targetId !== undefined
            ? history.find(item => String(item.id) === String(targetId))
            : undefined;
        const nextItem = createCurrentArchiveItem({
            id: existing ? Number(existing.id) : undefined,
            title: options.title,
            archiveSource: 'MANUAL_SAVE',
            archiveReason: options.saveAs ? 'USER_SAVED' : 'PROJECT_SAVED'
        });

        if (existing) {
            await Promise.all(buildDesireProjectsFromHistoryItem(existing).map(project => persistence.deleteDesireProject(project.id)));
            await updateHistoryItem(nextItem);
        } else {
            await addHistoryItem(nextItem);
        }

        setActiveHistoryItem(nextItem);
        await saveProjectShell(
            {
                activeHistoryId: nextItem.id,
                title: inferProjectTitle(options.title),
                lastSavedAt: nextItem.date
            },
            {
                activeHistoryItem: nextItem,
                activeBlueprint: nextItem.blueprint,
                metonymyBlueprint: nextItem.metonymyBlueprint || metonymyBlueprint
            }
        );
        return nextItem;
    };

    const handleConceptRuntimeChange = (state: ConceptDesignRuntimeState, persist = false) => {
        setConceptRuntimeState(state);
        if (!persist || selectedDriver !== DriverType.CONCEPT_DESIGN) return;

        const signature = [
            state.sourceMode,
            state.sourceLabel,
            state.variables.characterSeed,
            state.finalPrompt
        ].join('|');
        if (lastConceptArchiveSignatureRef.current === signature) return;
        lastConceptArchiveSignatureRef.current = signature;

        const now = new Date().toISOString();
        const newItem: HistoryItem = {
            id: Date.now(),
            projectId: activeProjectId || undefined,
            archiveSource: 'AI_SNAPSHOT',
            archiveReason: 'STORY_GENERATED',
            date: now,
            type: 'NARRATIVE',
            driverId: DriverType.CONCEPT_DESIGN,
            driverName: lang === 'CN' ? '迷雾律令' : 'MIST EDICT',
            fieldState: { ...narrativeFieldState },
            worldLaw: normalizeWorldLawConfig(worldLawConfig),
            visionInput,
            visionAnalysis,
            visionImage,
            visionImageNote,
            visionImageMode,
            visionImplantEnabled,
            subjectType,
            aestheticMode,
            colorPalette: [...colorPalette],
            faceState: { ...faceState },
            focusState: { ...focusState },
            mAxisMixer: { ...mAxisMixer },
            m7bIntensity,
            conceptRuntimeState: state,
            blueprint: null,
            treatments: [],
            savedBlueprints: {}
        };
        addHistoryItem(newItem);
        setActiveHistoryItem(newItem);
        saveProjectShell(
            {
                activeHistoryId: newItem.id,
                title: inferProjectTitle(state.variables.characterSeed || state.sourceLabel || '迷雾律令'),
                lastSavedAt: now
            },
            {
                activeHistoryItem: newItem,
                conceptRuntimeState: state
            }
        );
    };

    const openAuth = () => { setIsAuthOpen(true); closeAllModals(); };
    const closeAllModals = () => {
        setIsHistoryOpen(false);
        setIsProjectsOpen(false);
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
        preloadWorkflowViewMode(viewMode);
        const applyViewChange = () => {
            setIsTaskManagerOpen(false);
            if (viewMode === 'DICTIONARY') {
                setCodexDictionary('MIST');
                setCodexSection('CONCEPTS');
                setCodexDetailTab('DEFINITION');
            }
            setViewMode(viewMode);
            if (viewMode === 'DIVERGENCE' || viewMode === 'BIBLE' || viewMode === 'METONYMY' || viewMode === 'CANVAS' || viewMode === 'TOPOLOGY') {
                setIsVisionOpen(false);
                setIsSkinOpen(false);
                setIsAestheticInputOpen(false);
            }
        };

        if (WORKFLOW_VIEW_MODES.has(viewMode)) {
            React.startTransition(applyViewChange);
            return;
        }

        applyViewChange();
    };

    const clearPortalTransitionTimers = () => {
        portalTransitionTimersRef.current.forEach((timer, index) => {
            if (timer) {
                window.clearTimeout(timer);
                portalTransitionTimersRef.current[index] = null;
            }
        });
    };

    const beginPortalToEngineTransition = () => {
        preloadCoreDriverLanding();
        clearPortalTransitionTimers();
        React.startTransition(() => {
            setPortalTransition('to-engine');
        });
        portalTransitionTimersRef.current[0] = window.setTimeout(() => {
            setPage(0);
            setViewMode('ENGINE');
        }, 260);
        portalTransitionTimersRef.current[1] = window.setTimeout(() => {
            setPortalTransition(null);
        }, 980);
    };

    const beginEngineToPortalTransition = () => {
        clearPortalTransitionTimers();
        // Set to 'intro' immediately so the portal begins its cinematic opening as it fades in
        setPortalEntryMode('intro');
        setPortalTransition('to-portal');

        portalTransitionTimersRef.current[0] = window.setTimeout(() => {
            setPage(-1);
            // Reset viewMode to default ENGINE state when returning to the main portal
            setViewMode('ENGINE');
        }, 260);

        portalTransitionTimersRef.current[1] = window.setTimeout(() => {
            setPortalTransition(null);
        }, 980);
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

    const preloadDriverSelection = (id: DriverType) => {
        const nextViewMode = getDriverEntryViewMode(id);
        preloadWorkflowViewMode(nextViewMode);
        if (nextViewMode === 'ENGINE') {
            preloadCoreDriverLanding();
        }
    };

    const handleDriverSelect = (id: DriverType) => {
        const nextViewMode = getDriverEntryViewMode(id);
        preloadDriverSelection(id);
        const applyDriverSelection = () => {
            setIsTaskManagerOpen(false);
            setSelectedDriver(id);
            setPage(1);
            setViewMode(nextViewMode);
            setConceptWorkspacePage('ENGINE');
            setLockedModules({});
            setLockedTags({});
            undoRedoDispatch({ type: 'SET', state: normalizeNarrativeFieldState({}, id) });
            setActiveHistoryItem(null);
            setGeneratedTreatments([]);
            setActiveBlueprint(null);
            setMetonymyBlueprint(null);
            setCachedBlueprints({});
            setWorldLawConfig(DEFAULT_WORLD_LAW_CONFIG);
            setVisionInput('');
            setVisionAnalysis('');
            setVisionImage(null);
            setVisionImageNote('');
            setVisionImageMode('auto');
            setVisionImplantEnabled(true);
            setVisionCandidateState({});
            setFaceState({});
            setFocusState({});
            setMAxisMixer({});
            setM7bIntensity('light');
            setColorPalette(Array(7).fill(""));

            // All modes: close sidebars by default as per user request
            setIsSkinOpen(false);
            setIsVisionOpen(false);
            setIsAestheticInputOpen(false);
            if (id === DriverType.EXPERIMENTAL) {
                const customBlueprint: CreativeBlueprint = {
                    treatmentId: `custom_story_${Date.now()}`,
                    driverType: DriverType.EXPERIMENTAL,
                    styleName: lang === 'EN' ? 'Story Translation Mode' : '故事转译模式',
                    narrative: {
                        title: lang === 'EN' ? 'Custom Story' : '自定义故事',
                        logline: lang === 'EN' ? 'Paste a complete story and translate it into a screenplay.' : '粘贴完整故事，并转译为电影脚本。',
                        synopsis: ''
                    },
                    context: {
                        world: '',
                        tone: '',
                        colorPalette: [],
                        moodboard: { prompt: '', images: [], selectedImageId: null }
                    },
                    assets: { characters: [], locations: [], props: [] },
                    metonymyData: {
                        screenplay: [],
                        staticStoryboard: [],
                        dynamicScript: []
                    }
                };
                setMetonymyBlueprint(customBlueprint);
            }
            closeAllModals();
        };

        if (WORKFLOW_VIEW_MODES.has(nextViewMode)) {
            React.startTransition(applyDriverSelection);
            return;
        }

        applyDriverSelection();
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
            setVisionCandidateState({});
            const implantPayloadEnabled = visionImplantEnabled;
            let currentAnalysis = implantPayloadEnabled ? visionAnalysis : '';
            const visionTextContext = implantPayloadEnabled ? buildVisionAnalysisContext() : buildVisionCreativeContext();
            const visionPayloadImage = implantPayloadEnabled ? visionImage : null;
            if (selectedDriver === DriverType.AESTHETIC) {
                if (implantPayloadEnabled && (visionTextContext || visionPayloadImage)) {
                    setIsAnalyzingImage(true);
                    try {
                        const directive = await generateAestheticReverse(visionTextContext, visionPayloadImage);
                        currentAnalysis = directive;
                        setVisionAnalysis(directive);
                    } catch (e) {
                        console.error("Aesthetic Reverse Failed", e);
                    } finally {
                        setIsAnalyzingImage(false);
                    }
                }
                const result = await geminiService.generateNarrativeAutoFill(selectedDriver, visionTextContext, visionPayloadImage, currentAnalysis);
                setVisionCandidateState(result);
                return;
            }

            if (implantPayloadEnabled && selectedDriver === DriverType.COMMERCIAL) {
                setIsAnalyzingImage(true);
                try {
                    const diagnosis = await geminiService.analyzeImage(visionPayloadImage, visionTextContext);
                    currentAnalysis = diagnosis;
                    setVisionAnalysis(diagnosis);
                } catch (e) { console.error("Narrative diagnosis failed", e); }
                finally { setIsAnalyzingImage(false); }
            } else if (implantPayloadEnabled && visionPayloadImage) {
                setIsAnalyzingImage(true);
                try {
                    const result = await geminiService.analyzeImage(visionPayloadImage, visionTextContext);
                    currentAnalysis = result;
                    setVisionAnalysis(result);
                } catch (e) { console.error("Image analysis failed", e); }
                finally { setIsAnalyzingImage(false); }
            }

            const result = await geminiService.generateNarrativeAutoFill(selectedDriver, visionTextContext, visionPayloadImage, currentAnalysis);
            setVisionCandidateState(result);

        } catch (e) {
            console.error(e);
            alert(lang === 'EN' ? "Auto-match failed." : "自动匹配失败。");
        } finally {
            setIsAutoFilling(false);
            setVisionStartTime(null);
        }
    };

    const handleAnalyzeImage = async () => {
        if (!visionImplantEnabled) return;
        const visionTextContext = buildVisionAnalysisContext();
        if (!visionImage && !visionTextContext && selectedDriver !== DriverType.COMMERCIAL && selectedDriver !== DriverType.NARRATIVE && selectedDriver !== DriverType.AESTHETIC) return;

        if (!(await checkAndDeductToken(1))) return;

        setIsAnalyzingImage(true);
        try {
            if (selectedDriver === DriverType.AESTHETIC) {
                const result = await generateAestheticReverse(visionTextContext, visionImage);
                setVisionAnalysis(result);
            } else if (selectedDriver === DriverType.COMMERCIAL) {
                const diagnosis = await geminiService.analyzeImage(visionImage, visionTextContext);
                setVisionAnalysis(diagnosis);
            } else {
                const result = await geminiService.analyzeImage(visionImage!, visionTextContext);
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

    const randomizeNarrativeGenerationControls = (newState: NarrativeFieldState, mode: 'global' | 'formula') => {
        if (selectedDriver !== DriverType.NARRATIVE) return;
        const nextFocusState = randomizerService.randomizePromptFocusState(
            newState,
            mode,
            mode === 'formula' ? focusState : undefined
        );
        setFocusState(nextFocusState);
        setMAxisMixer(randomizerService.randomizeMAxisMixerState(newState, nextFocusState));
        setM7bIntensity(randomizerService.randomizeM7BResidueIntensity(newState));
    };

    const handleGlobalRandomize = () => {
        if (!selectedDriver) return;
        if (selectedDriver === DriverType.CONCEPT_DESIGN) {
            const newState = randomizerService.randomizeFormulaState(selectedDriver, narrativeFieldState, lockedModules, lockedTags, subjectType, aestheticMode);
            updateNarrativeState(newState);
            return;
        }
        const newState = randomizerService.generateGlobalRandomState(selectedDriver, narrativeFieldState, lockedModules, lockedTags);
        updateNarrativeState(newState);
        randomizeNarrativeGenerationControls(newState, 'global');
        if (!lockedModules[WORLD_LAW_LOCK_ID]) {
            setWorldLawConfig(prev => randomizerService.randomizeWorldLawConfig(prev));
        }
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
        const prompt = selectedDriver === DriverType.CONCEPT_DESIGN
            ? (conceptRuntimeState?.generationInstruction || generateConceptDesignPrompt(narrativeFieldState, lang))
            : generateAestheticPrompt(narrativeFieldState, subjectType, lang, customLibraryDefs);
        navigator.clipboard.writeText(prompt);
        setPromptCopied(true);
        setTimeout(() => setPromptCopied(false), 2000);
    };

    const handleRandomizeFormulaOnly = () => {
        if (!selectedDriver) return;
        const newState = randomizerService.randomizeFormulaState(selectedDriver, narrativeFieldState, lockedModules, lockedTags, subjectType, aestheticMode);
        updateNarrativeState(newState);
        randomizeNarrativeGenerationControls(newState, 'formula');

        const allTags = Object.values(newState).flat();
        ensureFacesForTags(allTags);
    };

    const handleToggleTagLock = (blockId: string, tagName: string) => {
        const selectedTags = narrativeFieldState[blockId] || [];
        if (!selectedTags.includes(tagName)) return;

        setLockedTags(prev => {
            const currentLocks = (prev[blockId] || []).filter(t => selectedTags.includes(t));
            if (currentLocks.includes(tagName)) {
                const nextLocks = currentLocks.filter(t => t !== tagName);
                const next = { ...prev, [blockId]: nextLocks };
                if (nextLocks.length === 0) delete next[blockId];
                return next;
            }
            return { ...prev, [blockId]: [...currentLocks, tagName] };
        });
    };

    const getVisibleLockedTags = (blockId: string, sourceState: NarrativeFieldState = narrativeFieldState) => {
        return randomizerService.getVisibleLockedTags(sourceState, lockedTags, blockId);
    };

    const getSingleRandomTargetCount = (blockId: string, lockedCount: number, baseCount: number) => {
        if (blockId === 'skin_location' && lockedCount > 0) return Math.max(baseCount, 2);
        return Math.max(baseCount, lockedCount);
    };

    const pruneTagLocksToVisibleState = (blockIds: string[], nextFieldState: NarrativeFieldState) => {
        setLockedTags(prev => {
            let changed = false;
            const next = { ...prev };
            blockIds.forEach(blockId => {
                const currentVisible = new Set(narrativeFieldState[blockId] || []);
                const nextVisible = new Set(nextFieldState[blockId] || []);
                const locks = (prev[blockId] || []).filter(tag => currentVisible.has(tag) && nextVisible.has(tag));
                if (locks.length > 0) {
                    if (locks.length !== (prev[blockId] || []).length) changed = true;
                    next[blockId] = locks;
                } else if (prev[blockId]?.length) {
                    changed = true;
                    delete next[blockId];
                }
            });
            return changed ? next : prev;
        });
    };

    const handleToggleLock = (id: string) => {
        setLockedModules(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleRandomizeTag = (blockId: string, oldTag: string) => {
        if (lockedModules[blockId] || getVisibleLockedTags(blockId).includes(oldTag)) return;

        const newTag = randomizerService.getSingleRandomTag(blockId, oldTag, selectedDriver, narrativeFieldState);
        if (newTag && newTag !== oldTag) {
            const currentTags = narrativeFieldState[blockId] || [];
            const updatedTags = currentTags.map(t => t === oldTag ? newTag : t);
            const nextState = {
                ...narrativeFieldState,
                [blockId]: updatedTags
            };
            updateNarrativeState(nextState);
            pruneTagLocksToVisibleState([blockId], nextState);

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
        }
    };

    // Helper function to randomize a single block (Level 1: Individual randomization)
    const handleRandomizeBlock = (blockId: string) => {
        if (lockedModules[blockId]) return;

        const newState = { ...narrativeFieldState };
        const currentTags = newState[blockId] || [];

        // Single block randomization uses the non-empty single-random protocol.
        let count = 1;
        if (selectedDriver === DriverType.AESTHETIC) {
            if (blockId === 'aes_skin_texture' || blockId === 'aes_body_features' || blockId === 'aes_face_features') {
                count = Math.floor(Math.random() * 2) + 1;
            } else {
                const limit = BLOCK_LIMITS[blockId] || 1;
                if (limit > 1) count = Math.floor(Math.random() * Math.min(limit, 3)) + 1;
            }
        } else {
            count = randomizerService.getRandomCount(blockId, 'single');
        }

        // For 0-count (0-1 range that rolled 0), clear the block
        if (count === 0) {
            const locks = getVisibleLockedTags(blockId);
            newState[blockId] = (newState[blockId] || []).filter(t => locks.includes(t));
            updateNarrativeState(newState);
            pruneTagLocksToVisibleState([blockId], newState);
            return;
        }

        // Get libraries
        let fullLibrary: any[] = [];
        if (selectedDriver === DriverType.COMMERCIAL) fullLibrary = [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY];
        else if (selectedDriver === DriverType.AESTHETIC) fullLibrary = [...AESTHETIC_ENGINE_LIBRARY, ...SKIN_LIBRARY];
        else if (selectedDriver === DriverType.CONCEPT_DESIGN) fullLibrary = [...CONCEPT_ENGINE_LIBRARY];
        else if (selectedDriver === DriverType.EXPERIMENTAL) fullLibrary = [...EXPERIMENTAL_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY];
        else if (selectedDriver === DriverType.TRAILER) fullLibrary = [...TRAILER_ENGINE_LIBRARY, ...TRAILER_SKIN_LIBRARY];
        else fullLibrary = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES, ...WORLD_MOTIF_CATEGORIES];

        const libId = `${blockId}_lib`;
        const category = fullLibrary.find(c => c.id === libId);

        // Handle Special Cases for Genre/Animation/Era
        if (!category && (blockId === 'skin_genre' || blockId === 'skin_animation_genre' || blockId === 'skin_era')) {
            const sourceCats = blockId === 'skin_genre' ? GENRE_CATEGORIES : WORLD_MOTIF_CATEGORIES;
            const allItems = sourceCats.flatMap(c => c.items);
            const locks = getVisibleLockedTags(blockId);
            const keptTags = currentTags.filter(t => locks.includes(t));
            const available = allItems.filter(i => !keptTags.includes(i.name));
            const targetCount = getSingleRandomTargetCount(blockId, keptTags.length, count);
            const needed = Math.max(0, targetCount - keptTags.length);
            const selected: string[] = [];
            for (let i = 0; i < needed; i++) {
                if (available.length === 0) break;
                const idx = Math.floor(Math.random() * available.length);
                selected.push(available[idx].name);
                available.splice(idx, 1);
            }
            newState[blockId] = [...keptTags, ...selected];
            updateNarrativeState(newState);
            pruneTagLocksToVisibleState([blockId], newState);
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

            // SUR7 single-block random: choose uniformly from the remaining gender presets.
            if (blockId === 'skin_gender') {
                const locks = getVisibleLockedTags(blockId);
                const keptTags = currentTags.filter(t => locks.includes(t));
                if (keptTags.length > 0) {
                    newState[blockId] = keptTags;
                    updateNarrativeState(newState);
                    pruneTagLocksToVisibleState([blockId], newState);
                    ensureFacesForTags(newState[blockId] || []);
                    return;
                }
                const selectedGender = randomizerService.pickRemainingGenderName(availableItems, currentTags);
                newState[blockId] = selectedGender ? [selectedGender] : [];
                updateNarrativeState(newState);
                pruneTagLocksToVisibleState([blockId], newState);
                ensureFacesForTags(newState[blockId] || []);
                return;
            }

            const locks = getVisibleLockedTags(blockId);
            const keptTags = currentTags.filter(t => locks.includes(t));
            const targetCount = getSingleRandomTargetCount(blockId, keptTags.length, count);
            const needed = Math.max(0, targetCount - keptTags.length);
            const available = availableItems.filter(i => !keptTags.includes(i.name));
            const selected = randomizerService.pickRandomItemsForBlock(blockId, available, needed, newState).map(item => item.name);
            newState[blockId] = [...keptTags, ...selected];
            updateNarrativeState(newState);
            pruneTagLocksToVisibleState([blockId], newState);
            ensureFacesForTags(newState[blockId] || []);
        }
    };

    // === Level 2a: Story Summary group randomize (weighted 12-word filter) ===
    const handleRandomizeSummaryGroup = () => {
        if (!selectedDriver) return;
        // Use the weighted surface filter to determine which blocks participate
        const participants = randomizerService.weightedSurfaceFilter(lockedModules, false);
        // For each participating block, randomize it individually
        const summaryBlocks = ['skin_genre', 'skin_era', 'skin_society', 'skin_age', 'skin_gender', 'skin_profession', 'sur10x', 'skin_ideology', 'skin_everything', 'skin_location', 'skin_ending'];
        const newState = { ...narrativeFieldState };
        const shouldRandomizeYear = participants.has('skin_year_exact') && !lockedModules['skin_year_exact'];
        const shouldRandomizeSpace = participants.has('skin_country_exact') && !lockedModules['skin_country_exact'];
        const coordinatePreset = (shouldRandomizeYear || shouldRandomizeSpace)
            ? getRandomSur3CoordinatePreset()
            : null;

        if (!lockedModules['skin_year_exact']) {
            const locks = getVisibleLockedTags('skin_year_exact');
            const keptTags = (newState['skin_year_exact'] || []).filter(t => locks.includes(t));
            if (participants.has('skin_year_exact')) {
                if (keptTags.length > 0) {
                    newState['skin_year_exact'] = keptTags;
                } else {
                    newState['skin_year_exact'] = coordinatePreset?.timeMode === 'era'
                        ? [coordinatePreset.time || '']
                        : coordinatePreset?.year === null || coordinatePreset?.year === undefined
                        ? []
                        : [coordinatePreset.year.toString()];
                }
            } else {
                newState['skin_year_exact'] = keptTags;
            }
        }
        if (!lockedModules['skin_country_exact']) {
            const locks = getVisibleLockedTags('skin_country_exact');
            const keptTags = (newState['skin_country_exact'] || []).filter(t => locks.includes(t));
            if (participants.has('skin_country_exact')) {
                if (keptTags.length > 0) {
                    newState['skin_country_exact'] = keptTags;
                } else {
                    newState['skin_country_exact'] = coordinatePreset ? [coordinatePreset.spaceCn] : [];
                }
            } else {
                newState['skin_country_exact'] = keptTags;
            }
        }

        summaryBlocks.forEach(blockId => {
            if (lockedModules[blockId]) return;

            let keepOld = true;
            // skin_age is not in the 12-word filter, give it an independent 50% chance.
            if (blockId === 'skin_age') {
                if (Math.random() >= 0.5) keepOld = false;
            } else {
                // Check if this block passed the weighted filter
                if (!participants.has(blockId)) keepOld = false;
            }
            if (!keepOld) {
                const locks = getVisibleLockedTags(blockId);
                newState[blockId] = (newState[blockId] || []).filter(t => locks.includes(t));
                return;
            }

            // Delegate to the single-block randomizer logic
            // We inline the logic here to batch all changes into one state update
            const range = RANDOM_RANGES[blockId];
            const count = range ? (range[0] === range[1] ? range[0] : Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]) : 1;
            const lockedCount = getVisibleLockedTags(blockId).length;
            const targetCount = Math.max(count, lockedCount);
            if (count === 0) {
                const locks = getVisibleLockedTags(blockId);
                newState[blockId] = (newState[blockId] || []).filter(t => locks.includes(t));
                return;
            }

            // Handle special cases whose source libraries are flattened category groups.
            if (blockId === 'skin_genre') {
                const genreItems = GENRE_CATEGORIES.flatMap(c => c.items);
                const locks = getVisibleLockedTags(blockId);
                const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                const needed = Math.max(0, targetCount - keptTags.length);
                const previousTags = new Set(narrativeFieldState[blockId] || []);
                const available = genreItems.filter(i => !keptTags.includes(i.name) && !previousTags.has(i.name));
                const selected: string[] = [];
                for (let i = 0; i < needed; i++) {
                    if (available.length === 0) break;
                    const idx = Math.floor(Math.random() * available.length);
                    selected.push(available[idx].name);
                    available.splice(idx, 1);
                }
                if (selected.length < needed) {
                    const fallback = genreItems
                        .filter(i => !keptTags.includes(i.name) && !selected.includes(i.name))
                        .sort(() => 0.5 - Math.random())
                        .slice(0, needed - selected.length)
                        .map(i => i.name);
                    selected.push(...fallback);
                }
                newState[blockId] = [...keptTags, ...selected];
                return;
            }

            // Handle special case for Era
            if (blockId === 'skin_era') {
                const allItems = WORLD_MOTIF_CATEGORIES.flatMap(c => c.items);
                const locks = getVisibleLockedTags(blockId);
                const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                const needed = Math.max(0, targetCount - keptTags.length);
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

                // SUR7 story-summary random: preserve locks; otherwise only female/male with 70/30 bias.
                if (blockId === 'skin_gender') {
                    const locks = getVisibleLockedTags(blockId);
                    const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                    if (keptTags.length > 0) {
                        newState[blockId] = keptTags;
                        return;
                    }
                    const selectedGender = randomizerService.pickBiasedBinaryGenderName(availableItems);
                    newState[blockId] = selectedGender ? [selectedGender] : [];
                    return;
                }

                const locks = getVisibleLockedTags(blockId);
                const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                const needed = Math.max(0, targetCount - keptTags.length);
                const available = availableItems.filter(i => !keptTags.includes(i.name));
                const selected = randomizerService.pickRandomItemsForBlock(blockId, available, needed, newState).map(item => item.name);
                newState[blockId] = [...keptTags, ...selected];
            }
        });

        pruneTagLocksToVisibleState([...summaryBlocks, 'skin_year_exact', 'skin_country_exact'], newState);
        updateNarrativeState(newState);
        ensureFacesForTags(Object.values(newState).flat());
    };

    // === Level 2c: Story Structure group randomize ===
    const handleRandomizeStructureGroup = () => {
        const structureBlocks = ['skin_genre', 'skin_structure', 'skin_volume'];
        const newState = { ...narrativeFieldState };

        structureBlocks.forEach(blockId => {
            if (lockedModules[blockId]) return;

            const count = randomizerService.getRandomCount(blockId, 'single');
            const lockedCount = getVisibleLockedTags(blockId).length;
            const targetCount = getSingleRandomTargetCount(blockId, lockedCount, count);
            if (count === 0) {
                const locks = getVisibleLockedTags(blockId);
                newState[blockId] = (newState[blockId] || []).filter(t => locks.includes(t));
                return;
            }

            // Handle Genre separately
            if (blockId === 'skin_genre') {
                const genreLib = GENRE_CATEGORIES.flatMap(c => c.items);
                const locks = getVisibleLockedTags(blockId);
                const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                const needed = Math.max(0, targetCount - keptTags.length);
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
                const locks = getVisibleLockedTags(blockId);
                const keptTags = (newState[blockId] || []).filter(t => locks.includes(t));
                const needed = Math.max(0, targetCount - keptTags.length);
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

        pruneTagLocksToVisibleState(structureBlocks, newState);
        updateNarrativeState(newState);
        ensureFacesForTags(Object.values(newState).flat());
    };

    const handleClearBlock = (blockId: string) => {
        if (lockedModules[blockId]) return;
        const locks = getVisibleLockedTags(blockId);
        const newState = { ...narrativeFieldState };
        const current = newState[blockId] || [];
        const nextTags = current.filter(tag => locks.includes(tag));
        const removedTags = current.filter(tag => !nextTags.includes(tag));
        if (removedTags.length > 0) {
            setFocusState(prev => ({ ...prev, ...clearFocusForTagsPatch(blockId, removedTags) }));
        }
        newState[blockId] = nextTags;
        if (shouldApplyNarrativeSvDefaults(selectedDriver) && (SV_DEFAULT_BLOCKS as readonly string[]).includes(blockId)) {
            Object.assign(newState, withDefaultSvSelections(newState));
        }
        updateNarrativeState(newState);
        pruneTagLocksToVisibleState([blockId], newState);
    };

    const openLibrary = (blockId: string) => {
        if (lockedModules[blockId]) return;
        setActiveBlockId(blockId);
        setLibraryModalOpen(true);
    };

    const removeTag = (blockId: string, tag: string) => {
        if (lockedModules[blockId]) return;
        if (getVisibleLockedTags(blockId).includes(tag)) return;
        const rawCurrent = narrativeFieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        setFocusState(prev => ({ ...prev, ...clearFocusForTagsPatch(blockId, [tag]) }));
        handleNarrativeChange({
            ...narrativeFieldState,
            [blockId]: current.filter(t => t !== tag)
        });
    };

    const handleToggleTag = (blockId: string, tag: string) => {
        if (lockedModules[blockId]) return;
        const visibleLocks = getVisibleLockedTags(blockId);
        if (visibleLocks.includes(tag)) return;

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
        if (limit === 1 && visibleLocks.length > 0 && !visibleLocks.includes(tag)) return;
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
                setFocusState(prev => ({ ...prev, ...clearFocusForTagsPatch(blockId, [tag]) }));
            }
            return;
        }

        if (current.includes(tag)) {
            if (visibleLocks.includes(tag)) return;
            newState[blockId] = current.filter(t => t !== tag);
            setFocusState(prev => ({ ...prev, ...clearFocusForTagsPatch(blockId, [tag]) }));
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

    const handleSetBlockTags = (blockId: string, tags: string[]) => {
        if (lockedModules[blockId]) return;
        const visibleLocks = getVisibleLockedTags(blockId);

        if (blockId === 'aes_palette_preset') {
            const tag = tags[0];
            const preset = MASTER_PRESETS.find(p => p.name === tag || p.id === tag);
            if (preset) {
                handleApplyPreset(preset);
            } else {
                updateNarrativeState({ ...narrativeFieldState, [blockId]: tag ? [tag] : [] });
            }
            return;
        }

        if (blockId === 'aes_color_palette') {
            const tag = tags[0];
            const preset = AES_COLOR_PRESETS.find(p => p.name === tag || p.id === tag);
            if (preset) {
                const nextPalette = [...preset.colors];
                while (nextPalette.length < 7) nextPalette.push("");
                setColorPalette(nextPalette.slice(0, 7));
            }
            updateNarrativeState({ ...narrativeFieldState, [blockId]: tag ? [tag] : [] });
            return;
        }

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

        const seen = new Set<string>();
        const normalized = [...visibleLocks, ...tags]
            .filter(Boolean)
            .filter(tag => {
                if (seen.has(tag)) return false;
                seen.add(tag);
                return true;
            })
            .slice(0, limit);

        const rawCurrent = narrativeFieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        newState[blockId] = normalized;
        updateNarrativeState(newState);

        setFaceState(prev => {
            const next = { ...prev };
            const removedTags = current.filter(tag => !normalized.includes(tag));
            removedTags.forEach(tag => {
                delete next[tag];
            });
            if (removedTags.length > 0) {
                setFocusState(prevFocus => ({ ...prevFocus, ...clearFocusForTagsPatch(blockId, removedTags) }));
            }
            return next;
        });
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
            if (selectedDriver === DriverType.EXPERIMENTAL) {
                setPage(0);
            }
            handleViewChange('ENGINE');
            setMetonymyBlueprint(null);
            setIsSkinOpen(false);
            setIsVisionOpen(false);
            setIsAestheticInputOpen(false);
        } else {
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
        if (!force && Object.keys(narrativeFieldState || {}).length === 0) {
            alert("Please configure the engine first.");
            return;
        }
        if (!(await checkAndDeductToken(2))) return; // Traversal costs 2
        setIsGenerating(true);
        setTraverseStartTime(Date.now());
        const traverseTaskName = (() => {
            if (selectedDriver === DriverType.COMMERCIAL) return lang === 'EN' ? "SUTURE DESIRE" : "缝合欲望";
            if (selectedDriver === DriverType.EXPERIMENTAL) return lang === 'EN' ? "TRANSLATE STORY" : "转译故事";
            if (selectedDriver === DriverType.AESTHETIC) return lang === 'EN' ? "GENERATE AESTHETIC" : "生成美学";
            if (selectedDriver === DriverType.CONCEPT_DESIGN) return lang === 'EN' ? "COMPILE EDICT" : "编译律令";
            if (selectedDriver === DriverType.TRAILER) return lang === 'EN' ? "CUT TRAILER" : "剪辑预告";
            return lang === 'EN' ? "GENERATE DIVERGENCES" : "生成分歧点";
        })();
        try {
            const traverseVisionAnalysis = visionImplantEnabled ? visionAnalysis : '';
            const traverseVisionImage = visionImplantEnabled
                ? (selectedDriver === DriverType.NARRATIVE && traverseVisionAnalysis.trim() ? null : visionImage)
                : null;
            const result = await geminiService.generateFantasyTraverse(
                selectedDriver,
                "SHORT",
                narrativeFieldState,
                buildVisionGenerationContext(visionImplantEnabled),
                traverseVisionImage,
                worldLawConfig,
                subjectType,
                traverseVisionAnalysis,
                colorPalette.filter(c => c !== ""),
                faceState,
                focusState,
                narrativePromptVersion,
                traverseTaskName,
                mAxisMixer,
                m7bIntensity
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
                    projectId: activeProjectId || undefined,
                    archiveSource: 'AI_SNAPSHOT',
                    archiveReason: 'DIVERGENCE_GENERATED',
                    date: new Date().toISOString(),
                    type: 'NARRATIVE',
                    driverId: selectedDriver,
                    driverName: getDriverName(),
                    fieldState: { ...narrativeFieldState },
                    worldLaw: normalizeWorldLawConfig(worldLawConfig),
                    visionInput: visionInput,
                    visionAnalysis: visionAnalysis,
                    visionImage: visionImage,
                    visionImageNote: visionImageNote,
                    visionImageMode: visionImageMode,
                    visionImplantEnabled,
                    subjectType: subjectType,
                    aestheticMode: aestheticMode,
                    colorPalette: [...colorPalette],
                    faceState: { ...faceState },
                    focusState: { ...focusState },
                    mAxisMixer: { ...mAxisMixer },
                    m7bIntensity,
                    conceptRuntimeState: selectedDriver === DriverType.CONCEPT_DESIGN ? conceptRuntimeState : null,
                    blueprint: null,
                    treatments: treatmentsWithIds,
                    savedBlueprints: {}
                };
                addHistoryItem(newItem);
                setActiveHistoryItem(newItem);
                saveProjectShell(
                    {
                        activeHistoryId: newItem.id,
                        title: inferProjectTitle(treatmentsWithIds[0]?.title)
                    },
                    {
                        viewMode: 'DIVERGENCE',
                        treatments: treatmentsWithIds,
                        activeHistoryItem: newItem,
                        activeBlueprint: null,
                        metonymyBlueprint: null,
                        cachedBlueprints: {}
                    }
                );
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
        preloadWorkflowViewMode('METONYMY');
        const sourceBlueprint = activeBlueprint || null;
        const nextBlueprint = sourceBlueprint
            ? {
                ...sourceBlueprint,
                metonymyData: sourceBlueprint.metonymyData || {
                    screenplay: [],
                    staticStoryboard: [],
                    dynamicScript: []
                }
            }
            : createDefaultBlueprint();

        if (!sourceBlueprint) {
            nextBlueprint.narrative.title = lang === 'EN' ? "New Suture Project" : "新建转译项目";
            setActiveHistoryItem(null);
        }

        setMetonymyBlueprint(nextBlueprint);

        handleViewChange('METONYMY');
        setIsSutureOpen(false);
        setPage(1);
    };

    const handleUpdateBlueprintCache = (blueprint: CreativeBlueprint) => {
        if (viewMode === 'METONYMY') {
            // REDESIGNED: Metonymy only updates local state, NOT history DB.
            // History saving is manual-only via the save button in MetonymyView.
            setMetonymyBlueprint(blueprint);
        } else {
            const blueprintWithSnapshot: CreativeBlueprint = {
                ...blueprint,
                generationFieldState: blueprint.generationFieldState || activeBlueprint?.generationFieldState || activeHistoryItem?.fieldState,
                generationWorldLaw: blueprint.generationWorldLaw || activeBlueprint?.generationWorldLaw || activeHistoryItem?.worldLaw,
                generationVisionInput: blueprint.generationVisionInput ?? activeBlueprint?.generationVisionInput ?? activeHistoryItem?.visionInput,
                generationVisionAnalysis: blueprint.generationVisionAnalysis ?? activeBlueprint?.generationVisionAnalysis ?? activeHistoryItem?.visionAnalysis,
                generationVisionImage: blueprint.generationVisionImage ?? activeBlueprint?.generationVisionImage ?? activeHistoryItem?.visionImage,
                generationVisionImageNote: blueprint.generationVisionImageNote ?? activeBlueprint?.generationVisionImageNote ?? activeHistoryItem?.visionImageNote,
                generationVisionImageMode: blueprint.generationVisionImageMode ?? activeBlueprint?.generationVisionImageMode ?? activeHistoryItem?.visionImageMode,
                generationVisionImplantEnabled: blueprint.generationVisionImplantEnabled ?? activeBlueprint?.generationVisionImplantEnabled ?? activeHistoryItem?.visionImplantEnabled ?? visionImplantEnabled,
                generationSubjectType: blueprint.generationSubjectType ?? activeBlueprint?.generationSubjectType ?? activeHistoryItem?.subjectType,
                generationAestheticMode: blueprint.generationAestheticMode ?? activeBlueprint?.generationAestheticMode ?? activeHistoryItem?.aestheticMode,
                generationColorPalette: blueprint.generationColorPalette ?? activeBlueprint?.generationColorPalette ?? activeHistoryItem?.colorPalette,
                generationFaceState: blueprint.generationFaceState ?? activeBlueprint?.generationFaceState ?? activeHistoryItem?.faceState,
                generationFocusState: (blueprint as any).generationFocusState ?? activeBlueprint?.generationFocusState ?? activeHistoryItem?.focusState,
                generationMAxisMixer: blueprint.generationMAxisMixer ?? activeBlueprint?.generationMAxisMixer ?? activeHistoryItem?.mAxisMixer,
                generationM7BIntensity: blueprint.generationM7BIntensity ?? activeBlueprint?.generationM7BIntensity ?? activeHistoryItem?.m7bIntensity
            };

            setActiveBlueprint(blueprintWithSnapshot);
            setCachedBlueprints(prev => ({
                ...prev,
                [blueprintWithSnapshot.treatmentId]: blueprintWithSnapshot
            }));
        }
    };

    const handleAddToHistory = (blueprint: CreativeBlueprint, options: SaveArchiveOptions = {}) => {
        const archiveSource = options.archiveSource || 'MANUAL_SAVE';
        const archiveReason = options.archiveReason || 'USER_SAVED';
        const isMetonymy = viewMode === 'METONYMY';
        const snapshotFieldState = blueprint.generationFieldState || activeHistoryItem?.fieldState || narrativeFieldState;
        const snapshotWorldLaw = blueprint.generationWorldLaw || activeHistoryItem?.worldLaw || worldLawConfig;
        const snapshotVisionInput = blueprint.generationVisionInput ?? activeHistoryItem?.visionInput ?? visionInput;
        const snapshotVisionAnalysis = blueprint.generationVisionAnalysis ?? activeHistoryItem?.visionAnalysis ?? visionAnalysis;
        const snapshotVisionImage = blueprint.generationVisionImage ?? activeHistoryItem?.visionImage ?? visionImage;
        const snapshotVisionImageNote = blueprint.generationVisionImageNote ?? activeHistoryItem?.visionImageNote ?? visionImageNote;
        const snapshotVisionImageMode = blueprint.generationVisionImageMode ?? activeHistoryItem?.visionImageMode ?? visionImageMode;
        const snapshotVisionImplantEnabled = blueprint.generationVisionImplantEnabled ?? activeHistoryItem?.visionImplantEnabled ?? visionImplantEnabled;
        const snapshotSubjectType = blueprint.generationSubjectType ?? activeHistoryItem?.subjectType ?? subjectType;
        const snapshotAestheticMode = blueprint.generationAestheticMode ?? activeHistoryItem?.aestheticMode ?? aestheticMode;
        const snapshotColorPalette = blueprint.generationColorPalette ?? activeHistoryItem?.colorPalette ?? [...colorPalette];
        const snapshotFaceState = blueprint.generationFaceState ?? activeHistoryItem?.faceState ?? { ...faceState };
        const snapshotFocusState = (blueprint as any).generationFocusState ?? activeHistoryItem?.focusState ?? { ...focusState };
        const snapshotMAxisMixer = blueprint.generationMAxisMixer ?? activeHistoryItem?.mAxisMixer ?? { ...mAxisMixer };
        const snapshotM7BIntensity = blueprint.generationM7BIntensity ?? activeHistoryItem?.m7bIntensity ?? m7bIntensity;
        const snapshotConceptRuntimeState = (selectedDriver === DriverType.CONCEPT_DESIGN || blueprint.driverType === DriverType.CONCEPT_DESIGN || activeHistoryItem?.driverId === DriverType.CONCEPT_DESIGN)
            ? (conceptRuntimeState || activeHistoryItem?.conceptRuntimeState || null)
            : null;
        const snapshotTreatments = activeHistoryItem?.treatments?.length ? activeHistoryItem.treatments : generatedTreatments;

        if (isMetonymy) {
            const storyBlueprintForItem = activeBlueprint || activeHistoryItem?.blueprint || null;
            const newItem: HistoryItem = {
                id: Date.now(),
                projectId: activeProjectId || undefined,
                archiveSource,
                archiveReason,
                date: new Date().toISOString(),
                type: storyBlueprintForItem ? 'BIBLE' : 'METONYMY',
                driverId: selectedDriver || blueprint.driverType || activeHistoryItem?.driverId || DriverType.NARRATIVE,
                driverName: getDriverName(),
                fieldState: { ...snapshotFieldState },
                worldLaw: { ...snapshotWorldLaw },
                visionInput: snapshotVisionInput,
                visionAnalysis: snapshotVisionAnalysis,
                visionImage: snapshotVisionImage,
                visionImageNote: snapshotVisionImageNote,
                visionImageMode: snapshotVisionImageMode,
                visionImplantEnabled: snapshotVisionImplantEnabled,
                subjectType: snapshotSubjectType,
                aestheticMode: snapshotAestheticMode,
                colorPalette: [...snapshotColorPalette],
                faceState: { ...snapshotFaceState },
                focusState: { ...snapshotFocusState },
                mAxisMixer: { ...snapshotMAxisMixer },
                m7bIntensity: snapshotM7BIntensity,
                conceptRuntimeState: snapshotConceptRuntimeState,
                blueprint: storyBlueprintForItem || blueprint,
                metonymyBlueprint: blueprint,
                treatments: snapshotTreatments,
                savedBlueprints: storyBlueprintForItem
                    ? { ...(activeHistoryItem?.savedBlueprints || {}), [storyBlueprintForItem.treatmentId]: storyBlueprintForItem }
                    : activeHistoryItem?.savedBlueprints
            };
            addHistoryItem(newItem);
            setActiveHistoryItem(newItem);
            saveProjectShell(
                {
                    activeHistoryId: newItem.id,
                    title: inferProjectTitle(blueprint.narrative?.title),
                    lastSavedAt: archiveSource === 'MANUAL_SAVE' ? newItem.date : activeProject?.lastSavedAt
                },
                {
                    viewMode: 'METONYMY',
                    metonymyBlueprint: blueprint,
                    activeHistoryItem: newItem
                }
            );
            return newItem;
        } else {
            const newItem: HistoryItem = {
                id: Date.now(),
                projectId: activeProjectId || undefined,
                archiveSource,
                archiveReason,
                date: new Date().toISOString(),
                type: 'BIBLE',
                driverId: selectedDriver || blueprint.driverType || activeHistoryItem?.driverId || DriverType.NARRATIVE,
                driverName: getDriverName(),
                fieldState: { ...snapshotFieldState },
                worldLaw: { ...snapshotWorldLaw },
                visionInput: snapshotVisionInput,
                visionAnalysis: snapshotVisionAnalysis,
                visionImage: snapshotVisionImage,
                visionImageNote: snapshotVisionImageNote,
                visionImageMode: snapshotVisionImageMode,
                visionImplantEnabled: snapshotVisionImplantEnabled,
                subjectType: snapshotSubjectType,
                aestheticMode: snapshotAestheticMode,
                colorPalette: [...snapshotColorPalette],
                faceState: { ...snapshotFaceState },
                focusState: { ...snapshotFocusState },
                mAxisMixer: { ...snapshotMAxisMixer },
                m7bIntensity: snapshotM7BIntensity,
                conceptRuntimeState: snapshotConceptRuntimeState,
                blueprint,
                treatments: snapshotTreatments,
                savedBlueprints: { ...(activeHistoryItem?.savedBlueprints || {}), [blueprint.treatmentId]: blueprint }
            };
            addHistoryItem(newItem);
            setActiveHistoryItem(newItem);
            saveProjectShell(
                {
                    activeHistoryId: newItem.id,
                    title: inferProjectTitle(blueprint.narrative?.title),
                    lastSavedAt: archiveSource === 'MANUAL_SAVE' ? newItem.date : activeProject?.lastSavedAt
                },
                {
                    viewMode: 'BIBLE',
                    activeBlueprint: blueprint,
                    activeHistoryItem: newItem,
                    cachedBlueprints: { ...(cachedBlueprints || {}), [blueprint.treatmentId]: blueprint }
                }
            );
            return newItem;
        }
    };

    const onHistoryRestore = (item: HistoryItem) => {
        const normalizedItem: HistoryItem = {
            ...item,
            driverId: item.driverId || item.blueprint?.driverType || selectedDriver || DriverType.NARRATIVE,
            driverName: item.driverName || getDriverName(),
            fieldState: item.fieldState || item.blueprint?.generationFieldState || {},
            worldLaw: item.worldLaw || item.blueprint?.generationWorldLaw,
            visionInput: item.visionInput ?? item.blueprint?.generationVisionInput,
            visionAnalysis: item.visionAnalysis ?? item.blueprint?.generationVisionAnalysis,
            visionImage: item.visionImage ?? item.blueprint?.generationVisionImage,
            visionImageNote: item.visionImageNote ?? item.blueprint?.generationVisionImageNote,
            visionImageMode: item.visionImageMode ?? item.blueprint?.generationVisionImageMode,
            visionImplantEnabled: item.visionImplantEnabled ?? item.blueprint?.generationVisionImplantEnabled,
            subjectType: item.subjectType || item.blueprint?.generationSubjectType,
            aestheticMode: item.aestheticMode || item.blueprint?.generationAestheticMode,
            colorPalette: item.colorPalette || item.blueprint?.generationColorPalette,
            faceState: item.faceState || item.blueprint?.generationFaceState,
            focusState: item.focusState || (item.blueprint as any)?.generationFocusState,
            mAxisMixer: item.mAxisMixer || item.blueprint?.generationMAxisMixer,
            m7bIntensity: item.m7bIntensity || item.blueprint?.generationM7BIntensity,
            conceptRuntimeState: item.conceptRuntimeState || null,
            metonymyBlueprint: item.metonymyBlueprint || null,
            treatments: item.treatments || [],
            savedBlueprints: item.savedBlueprints || {}
        };

        setActiveHistoryItem(normalizedItem);
        if (normalizedItem.projectId) {
            setActiveProjectId(normalizedItem.projectId);
            localStorage.setItem(ACTIVE_PROJECT_STORAGE_KEY, normalizedItem.projectId);
        }
        undoRedoDispatch({ type: 'SET', state: normalizeNarrativeFieldState(normalizedItem.fieldState || {}, normalizedItem.driverId) });
        setSelectedDriver(normalizedItem.driverId);

        // Restore all other parameters including vision symptoms (植入症候)
        if (normalizedItem.visionInput !== undefined) setVisionInput(normalizedItem.visionInput);
        if (normalizedItem.visionAnalysis !== undefined) setVisionAnalysis(normalizedItem.visionAnalysis);
        if (normalizedItem.visionImage !== undefined) setVisionImage(normalizedItem.visionImage);
        if (normalizedItem.visionImageNote !== undefined) setVisionImageNote(normalizedItem.visionImageNote);
        if (normalizedItem.visionImageMode !== undefined) setVisionImageMode(normalizedItem.visionImageMode === 'anchor' ? 'anchor' : 'auto');
        setVisionImplantEnabled(normalizedItem.visionImplantEnabled !== false);
        if (normalizedItem.worldLaw) setWorldLawConfig(normalizeWorldLawConfig(normalizedItem.worldLaw));
        if (normalizedItem.subjectType) setSubjectType(normalizedItem.subjectType);
        if (normalizedItem.aestheticMode) setAestheticMode(normalizedItem.aestheticMode);
        if (normalizedItem.colorPalette) setColorPalette(normalizedItem.colorPalette);
        if (normalizedItem.faceState) setFaceState(normalizedItem.faceState);
        if ((normalizedItem as any).focusState) setFocusState((normalizedItem as any).focusState);
        setMAxisMixer(normalizedItem.mAxisMixer || {});
        setM7bIntensity(normalizedItem.m7bIntensity || 'light');
        setConceptRuntimeState(normalizedItem.conceptRuntimeState || null);

        if (normalizedItem.type === 'METONYMY') {
            if (normalizedItem.blueprint) setMetonymyBlueprint(normalizedItem.blueprint);
            handleViewChange('METONYMY');
        } else {
            setActiveBlueprint(normalizedItem.blueprint || null);
            setMetonymyBlueprint(normalizedItem.metonymyBlueprint || null);
            setGeneratedTreatments(normalizedItem.treatments || []);
            setCachedBlueprints(normalizedItem.savedBlueprints || {});
            if (normalizedItem.blueprint) handleViewChange('BIBLE');
            else if (normalizedItem.treatments && normalizedItem.treatments.length) handleViewChange('DIVERGENCE');
            else handleViewChange('ENGINE');
        }

        setPage(1);
        closeAllModals();
    };

    const onHistoryClear = () => {
        setHistory([]);
        persistence.clearHistory();
    };

    const onHistoryDelete = (id: string | number) => {
        setHistory(prev => prev.filter(item => String(item.id) !== String(id)));
        persistence.deleteHistory(id);
    };

    const isCommercialThemeActive = () => {
        return selectedDriver === DriverType.COMMERCIAL || activeBlueprint?.driverType === DriverType.COMMERCIAL || metonymyBlueprint?.driverType === DriverType.COMMERCIAL;
    };

    const getMetonymyThemeAccent = () => {
        return isCommercialThemeActive() ? "text-mist-cyan" : "text-[var(--mist-archive-red)]";
    };

    const getMetonymyThemeBorder = () => {
        return isCommercialThemeActive() ? "border-mist-cyan/30" : "border-[rgba(var(--mist-active-accent-rgb),0.3)]";
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
            const snapshotFieldState = { ...narrativeFieldState };
            const snapshotWorldLaw = activeHistoryItem?.worldLaw || { ...worldLawConfig };
            const snapshotVisionInput = activeHistoryItem?.visionInput ?? visionInput;
            const snapshotVisionImplantEnabled = activeHistoryItem?.visionImplantEnabled ?? visionImplantEnabled;
            const shouldSendVisionImplant = isVisionImplantPayloadEnabled(snapshotVisionImplantEnabled);
            const snapshotVisionAnalysis = shouldSendVisionImplant ? (activeHistoryItem?.visionAnalysis ?? visionAnalysis) : '';
            const snapshotVisionImage = shouldSendVisionImplant ? (activeHistoryItem?.visionImage ?? visionImage) : null;
            const snapshotVisionImageNote = shouldSendVisionImplant ? (activeHistoryItem?.visionImageNote ?? visionImageNote) : '';
            const snapshotVisionImageMode = activeHistoryItem?.visionImageMode ?? visionImageMode;
            const snapshotSubjectType = activeHistoryItem?.subjectType ?? subjectType;
            const snapshotAestheticMode = activeHistoryItem?.aestheticMode ?? aestheticMode;
            const snapshotColorPalette = activeHistoryItem?.colorPalette ?? [...colorPalette];
            const snapshotFaceState = activeHistoryItem?.faceState ?? { ...faceState };
            const snapshotFocusState = activeHistoryItem?.focusState ?? { ...focusState };
            const snapshotMAxisMixer = activeHistoryItem?.mAxisMixer ?? { ...mAxisMixer };
            const snapshotM7BIntensity = activeHistoryItem?.m7bIntensity ?? m7bIntensity;

            const bp = await geminiService.generateBlueprint(
                selectedDriver!,
                treatment,
                style,
                snapshotFieldState,
                snapshotVisionInput,
                snapshotVisionImage,
                snapshotWorldLaw,
                snapshotVisionAnalysis,
                snapshotColorPalette.filter(c => c !== ""),
                snapshotFocusState,
                snapshotMAxisMixer,
                snapshotM7BIntensity
            );
            if (bp) {
                const blueprintWithSnapshot: CreativeBlueprint = {
                    ...bp,
                    treatmentId: bp.treatmentId || treatment.id,
                    generationFieldState: { ...snapshotFieldState },
                    generationWorldLaw: { ...snapshotWorldLaw },
                    generationVisionInput: snapshotVisionInput,
                    generationVisionAnalysis: snapshotVisionAnalysis,
                    generationVisionImage: snapshotVisionImage,
                    generationVisionImageNote: snapshotVisionImageNote,
                    generationVisionImageMode: snapshotVisionImageMode,
                    generationVisionImplantEnabled: snapshotVisionImplantEnabled,
                    generationSubjectType: snapshotSubjectType,
                    generationAestheticMode: snapshotAestheticMode,
                    generationColorPalette: [...snapshotColorPalette],
                    generationFaceState: { ...snapshotFaceState },
                    generationFocusState: { ...snapshotFocusState },
                    generationMAxisMixer: { ...snapshotMAxisMixer },
                    generationM7BIntensity: snapshotM7BIntensity
                };
                setCachedBlueprints(prev => ({ ...prev, [treatment.id]: blueprintWithSnapshot }));
                setActiveBlueprint(blueprintWithSnapshot);
                handleAddToHistory(blueprintWithSnapshot, {
                    archiveSource: 'AI_SNAPSHOT',
                    archiveReason: 'STORY_GENERATED'
                }); // Automatically save the generated narrative writing
                handleViewChange('BIBLE');
            }
        } catch (e) {
            console.error(e);
            alert(lang === 'EN' ? "Failed to generate narrative." : "生成叙事创作失败，请重试。");
        } finally {
            setIsGenerating(false);
            setBibleStartTime(null);
        }
    };

    const showPortalLayer = page === -1 || portalTransition !== null;
    const showLandingLayer = page === 0 || portalTransition === 'to-engine';
    const portalLayerAbove = portalTransition === 'to-portal';
    const landingLayerAbove = portalTransition === 'to-engine';
    const portalLayerPointerEvents = page === -1 && portalTransition === null ? 'pointer-events-auto' : 'pointer-events-none';
    const landingLayerPointerEvents = page === 0 && portalTransition === null ? 'pointer-events-auto' : 'pointer-events-none';

    return (
        <QueryClientProvider client={queryClient}>
            <div className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-zinc-300 font-sans selection:bg-gold-primary/30 selection:text-white transition-colors duration-1000">
                <div className="relative z-10">
                <React.Suspense fallback={null}>
                {location.pathname === '/prompt-archive' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve">
                        <PromptArchivePage
                            lang={lang}
                            onClose={() => navigate('/')}
                        />
                    </div>
                ) : location.pathname === '/skills' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve flex flex-col">
                        <AppHeader
                            page={page}
                            lang={lang}
                            setLang={setLang}
                            setPage={setPage}
                            selectedDriver={selectedDriver}
                            driverName={lang === 'CN' ? '迷雾学派：技能库' : 'MIST: SKILL LIBRARY'}
                            viewMode="SKILLS"
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
                            onReturnToPortal={() => navigate('/')}
                        />
                        <div className="flex-1 overflow-hidden relative">
                            <PromptSkillLibrary lang={lang} />
                        </div>
                    </div>
                ) : location.pathname === '/philosophers' ? (
                    isAdmin ? (
                        <PhilosopherPosterIndexPage
                            lang={lang}
                            setLang={setLang}
                            onClose={() => navigate('/')}
                        />
                    ) : (
                        <div className="min-h-screen bg-[var(--bg-main)] text-zinc-300 flex items-center justify-center px-6">
                            <div className="max-w-md w-full border border-white/10 bg-black/20 p-8 text-center">
                                <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-zinc-500 mb-4">
                                    Admin Only
                                </div>
                                <h1 className="font-serif text-2xl text-white mb-3">
                                    {lang === 'CN' ? '发布工作台仅管理员可见' : 'Publishing desk is admin-only'}
                                </h1>
                                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                                    {lang === 'CN' ? '请使用管理员账号进入迷雾辞典，从管理员入口打开。' : 'Use an admin account and open it from the dictionary admin entry.'}
                                </p>
                                <button
                                    onClick={() => navigate('/')}
                                    className="px-5 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                                >
                                    {lang === 'CN' ? '返回入口' : 'Back to Portal'}
                                </button>
                            </div>
                        </div>
                    )
                ) : showPortalLayer || showLandingLayer ? (
                    <div className="relative min-h-screen overflow-hidden">
                        {showPortalLayer && (
                            <div className={`absolute inset-0 transition-opacity duration-[980ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${portalTransition === 'to-portal' ? 'opacity-100 z-20' : portalTransition === 'to-engine' ? 'opacity-0 z-10' : page === -1 ? 'opacity-100 z-20' : 'opacity-0 z-10'} ${portalLayerPointerEvents}`}>
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
                                    entryMode={portalEntryMode}
                                    onOpenCoreDrivers={beginPortalToEngineTransition}
                                />
                            </div>
                        )}
                        {showLandingLayer && (
                            <div className={`absolute inset-0 transition-opacity duration-[980ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${portalTransition === 'to-engine' ? 'opacity-100 z-20' : portalTransition === 'to-portal' ? 'opacity-0 z-10' : page === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'} ${landingLayerPointerEvents}`}>
                                <LandingView
                                    lang={lang}
                                    setLang={setLang}
                                    setPage={setPage}
                                    setViewMode={handleViewChange}
                                    onReturnToPortal={beginEngineToPortalTransition}
                                    portalTransition={portalTransition}
                                    selectedDriver={selectedDriver}
                                    onDriverSelect={handleDriverSelect}
                                    onPreloadDriver={preloadDriverSelection}
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
                                    isAdmin={isAdmin}
                                    history={history}
                                    onHistoryRestore={onHistoryRestore}
                                    onHistoryClear={onHistoryClear}
                                    openSettings={openSettings}
                                    showRings={showRings}
                                    setShowRings={setShowRings}
                                    initialProtocol={initialProtocol}
                                />
                            </div>
                        )}
                    </div>
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
                        onReturnToPortal={beginEngineToPortalTransition}
                        onPreloadCoreDrivers={preloadCoreDriverLanding}
                    />
                ) : viewMode === 'DICTIONARY' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve">
                        <MistLexiconLandingPage
                            onClose={beginEngineToPortalTransition}
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
                            isAdmin={isAdmin}
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
                            onClose={beginEngineToPortalTransition}
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
                            onReturnToPortal={beginEngineToPortalTransition}
                        />
                        <div className="flex-1 overflow-hidden relative">
                            <div
                                key={`rings-anim-archive-${ringAnimKey}`}
                                className={`absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none z-0 select-none overflow-hidden ${ringAnimClass}`}
                            >
                                <div className="w-[1000px] h-[1000px] flex items-center justify-center translate-x-1/4">
                                    <BorromeanRings centered={true} opacity={theme === 'retro' ? 0.85 : 0.95} driverType={selectedDriver || undefined} vivid={true} />
                                </div>
                            </div>
                            <ArchiveDirectoryModal
                                isOpen={true}
                                onClose={beginEngineToPortalTransition}
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
                            onReturnToPortal={beginEngineToPortalTransition}
                        />
                        <div className="flex-1 overflow-hidden relative">
                            <div
                                key={`rings-anim-video-${ringAnimKey}`}
                                className={`absolute inset-0 flex items-center justify-end pr-[5%] pointer-events-none z-0 select-none overflow-hidden ${ringAnimClass}`}
                            >
                                <div className="w-[1000px] h-[1000px] flex items-center justify-center translate-x-1/4">
                                    <BorromeanRings centered={true} opacity={theme === 'retro' ? 0.85 : 0.95} driverType={DriverType.SUTURE} vivid={true} />
                                </div>
                            </div>
                            <VideoLibrary
                                isOpen={true}
                                onClose={beginEngineToPortalTransition}
                                lang={lang}
                                isAdmin={isAdmin}
                                isFullScreen={true}
                                showRings={showRings}
                                setShowRings={setShowRings}
                            />
                        </div>
                    </div>
                ) : viewMode === 'SKILLS' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve flex flex-col">
                        <AppHeader
                            page={page}
                            lang={lang}
                            setLang={setLang}
                            setPage={setPage}
                            selectedDriver={selectedDriver}
                            driverName={lang === 'CN' ? '迷雾学派：技能库' : 'MIST: SKILL LIBRARY'}
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
                            onReturnToPortal={beginEngineToPortalTransition}
                        />
                        <div className="flex-1 overflow-hidden relative">
                            <PromptSkillLibrary lang={lang} />
                        </div>
                    </div>
                ) : viewMode === 'RSI' ? (
                    <div className="h-screen w-screen overflow-hidden animate-page-dissolve">
                        <LacanTopologyView
                            lang={lang}
                            setLang={setLang}
                            onClose={() => {
                                handleViewChange('DICTIONARY');
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
                            onReturnToPortal={beginEngineToPortalTransition}
                        />
                        <div className="flex-1 overflow-hidden relative">
                            <RorschachView
                                lang={lang}
                                setLang={setLang}
                                setPage={setPage}
                                setViewMode={setViewMode}
                                onClose={beginEngineToPortalTransition}
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
                            themeAccent={theme === 'retro' ? 'text-[#8B261D]' : 'text-rose-400'}
                            theme={theme}
                            isAdmin={isAdmin}
                            onBack={() => {
                                setPage(0);
                                setViewMode('ENGINE');
                            }}
                        />
                    </div>
                ) : (
                    <div className={`mist-app-shell ${selectedDriver ? `mist-driver-${selectedDriver.toLowerCase()}` : ''} ${selectedDriver === DriverType.NARRATIVE ? 'mist-narrative-mode' : ''} ${selectedDriver === DriverType.COMMERCIAL ? 'mist-commercial-mode' : ''} flex flex-col h-screen overflow-hidden relative`}>
                        <div className="mist-app-film-grain" aria-hidden="true" />
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
                                conceptWorkspacePage={conceptWorkspacePage}
                                setConceptWorkspacePage={setConceptWorkspacePage}
                                handleOpenMetonymyPage={handleOpenMetonymyPage}
                                openManual={openManual}
                                isManualOpen={isManualOpen}
                                openHistory={openHistory}
                                isHistoryOpen={isHistoryOpen}
                                openProjects={openProjects}
                                isProjectsOpen={isProjectsOpen}
                                activeProjectTitle={activeProject?.title}
                                openSettings={openSettings}
                                openAuth={openAuth}
                                openProfile={() => setIsProfileOpen(true)}
                                onLogout={() => supabaseAuthService.signOut()}
                                currentUser={currentUser}
                                showRings={showRings}
                                setShowRings={setShowRings}
                                setInitialProtocol={setInitialProtocol}
                                onPreloadView={preloadWorkflowViewMode}
                            />
                        )}

                        <main
                            className="mist-app-content-layer flex-1 overflow-hidden relative bg-transparent transition-colors duration-300"
                        >
                            {viewMode === 'ENGINE' && selectedDriver && (
                                <div
                                    key={`engine-open-${selectedDriver}`}
                                    className={`mist-engine-simple-entry w-full h-full ${isNoShiftEntryDriver(selectedDriver) ? 'mist-no-shift-entry' : 'animate-engine-simple-fade'}`}
                                >
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
                                        focusState={focusState}
                                        onFocusStateChange={(locks) => {
                                            setFocusState(prev => ({ ...prev, ...locks }));
                                        }}
                                        mAxisMixer={mAxisMixer}
                                        onMAxisMixerChange={setMAxisMixer}
                                        m7bIntensity={m7bIntensity}
                                        onM7BIntensityChange={setM7bIntensity}
                                        customTextSeed={visionInput}
                                        onCustomTextSeedChange={(value) => {
                                            setVisionInput(value);
                                            setVisionAnalysis('');
                                            setVisionCandidateState({});
                                        }}
                                        onRandomizeSummaryGroup={handleRandomizeSummaryGroup}
                                        visionImage={visionImage}
                                        onVisionImageChange={(value) => {
                                            setVisionImage(value);
                                            setVisionAnalysis('');
                                            setVisionCandidateState({});
                                        }}
                                        visionImageNote={visionImageNote}
                                        onVisionImageNoteChange={(value) => {
                                            setVisionImageNote(value);
                                            setVisionAnalysis('');
                                            setVisionCandidateState({});
                                        }}
                                        visionAnalysis={visionAnalysis}
                                        onVisionAnalysisChange={setVisionAnalysis}
                                        visionImplantEnabled={visionImplantEnabled}
                                        onVisionImplantEnabledChange={setVisionImplantEnabled}
                                        onAnalyzeImage={handleAnalyzeImage}
                                        isAnalyzingImage={isAnalyzingImage}
                                        onVisionAutoFill={handleVisionAutoFill}
                                        isVisionAutoFilling={isAutoFilling}
                                        visionCandidateState={visionCandidateState}
                                        onApplyVisionCandidateState={applyVisionCandidateState}
                                        onClearVisionCandidateState={() => setVisionCandidateState({})}
                                        worldLawConfig={worldLawConfig}
                                        setWorldLawConfig={setWorldLawConfig}
                                        onConceptRuntimeChange={handleConceptRuntimeChange}
                                        conceptWorkspacePage={conceptWorkspacePage}
                                        isAdmin={isAdmin}
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
                                            ? "No desire structure detected. Please select a desire reproduction entry to initiate production."
                                            : "未检测到欲望结构。请选择一个欲望再生产入口以开始生产。"}
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
                                <div className="mist-engine-simple-entry mist-no-shift-entry mist-workflow-view w-full h-full">
                                    <NarrativePathsView
                                        treatments={generatedTreatments}
                                        onSelect={handleBibleGenerate}
                                        isProcessing={isGenerating}
                                        isTaskManagerOpen={isTaskManagerOpen}
                                        setIsTaskManagerOpen={setIsTaskManagerOpen}
                                        bibleStartTime={bibleStartTime}
                                        isHistoryMode={!!activeHistoryItem}
                                        onRegenerate={() => handleTraverseFantasy(true)}
                                        isAdmin={isAdmin}
                                        onBack={handleBackStep}
                                        onOpenHistory={openHistory}
                                        lang={lang}
                                        activeDriver={selectedDriver}
                                        cachedBlueprints={cachedBlueprints}
                                        fieldState={generatedTreatments.length > 0 ? narrativeFieldState : {}}
                                        overviewFieldState={generatedTreatments.length > 0 ? (activeHistoryItem?.fieldState || narrativeFieldState) : {}}
                                        visionInput={generatedTreatments.length > 0 ? (activeHistoryItem?.visionInput || '') : ''}
                                        visionAnalysis={generatedTreatments.length > 0 && isVisionImplantPayloadEnabled(activeHistoryItem?.visionImplantEnabled) ? (activeHistoryItem?.visionAnalysis || '') : ''}
                                        visionImage={generatedTreatments.length > 0 && isVisionImplantPayloadEnabled(activeHistoryItem?.visionImplantEnabled) ? (activeHistoryItem?.visionImage || visionImage) : null}
                                        thinkingXml={thinkingXml}
                                        worldLawConfig={activeHistoryItem?.worldLaw || worldLawConfig}
                                        overviewWorldLawConfig={activeHistoryItem?.worldLaw || worldLawConfig}
                                        focusState={activeHistoryItem?.focusState || focusState}
                                        mAxisMixer={activeHistoryItem?.mAxisMixer || mAxisMixer}
                                        m7bIntensity={activeHistoryItem?.m7bIntensity || m7bIntensity}
                                        onToggleTag={handleToggleTag}
                                        onSetTags={handleSetBlockTags}
                                        onClearBlock={handleClearBlock}
                                        onAddCustomDef={handleAddCustomDef}
                                    />
                                </div>
                            )}
                            {viewMode === 'BIBLE' && (
                                <div className="mist-engine-simple-entry mist-no-shift-entry mist-workflow-view w-full h-full">
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
                                        fieldState={activeBlueprint?.generationFieldState || activeHistoryItem?.fieldState || {}}
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
                                        worldLaw={activeBlueprint?.generationWorldLaw || activeHistoryItem?.worldLaw || {}}
                                        visionInput={activeBlueprint?.generationVisionInput || activeHistoryItem?.visionInput || ''}
                                        visionAnalysis={isVisionImplantPayloadEnabled(activeBlueprint?.generationVisionImplantEnabled ?? activeHistoryItem?.visionImplantEnabled)
                                            ? (activeBlueprint?.generationVisionAnalysis || activeHistoryItem?.visionAnalysis || '')
                                            : ''}
                                        subjectType={activeBlueprint?.generationSubjectType || activeHistoryItem?.subjectType || subjectType}
                                        aestheticMode={activeBlueprint?.generationAestheticMode || activeHistoryItem?.aestheticMode || aestheticMode}
                                        customLibraryDefs={customLibraryDefs}
                                        isSutureOpen={isSutureOpen}
                                        onSutureOpenChange={setIsSutureOpen}
                                        isAdmin={isAdmin}
                                        isTaskManagerOpen={isTaskManagerOpen}
                                        setIsTaskManagerOpen={setIsTaskManagerOpen}
                                    />
                                </div>
                            )}
                            {/* MetonymyView integrated into main layout to share EngineBottomBar */}
                            {viewMode === 'METONYMY' && metonymyBlueprint && (
                                <div key="engine-open-metonymy" className="mist-engine-simple-entry mist-no-shift-entry mist-workflow-view w-full h-full">
                                    <MetonymyView
                                        blueprint={metonymyBlueprint}
                                        language={lang}
                                        onUpdateBlueprint={handleUpdateBlueprintCache}
                                        themeAccent={getMetonymyThemeAccent()}
                                        themeBorder={getMetonymyThemeBorder()}
                                        theme={theme}
                                        isFullScreen={false}
                                        onToggleFullScreen={() => handleViewChange('ENGINE')}
                                        fieldState={narrativeFieldState}
                                        onSaveToHistory={handleAddToHistory}
                                        onGenerateAssetImage={handleVisionImageGenerate}
                                        onSutureOpenChange={setIsSutureOpen}
                                        isAdmin={isAdmin}
                                    />
                                </div>
                            )}
                            {viewMode === 'CANVAS' && selectedDriver === DriverType.TRAILER && (
                                <div key="engine-open-canvas" className="mist-engine-simple-entry mist-no-shift-entry w-full h-full">
                                    <MistCanvasEngine
                                        lang={lang}
                                        isAdmin={isAdmin}
                                        showRings={showRings}
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
                                hasFieldState={Object.keys(narrativeFieldState || {}).length > 0}
                                onRandomizeBlock={handleRandomizeBlock}
                                onClearBlock={handleClearBlock}
                                isTaskManagerOpen={isTaskManagerOpen}
                                setIsTaskManagerOpen={setIsTaskManagerOpen}
                                setIsPromptInspectorOpen={setIsPromptInspectorOpen}
                                hideWorldLawControl={viewMode === 'ENGINE' && selectedDriver === DriverType.NARRATIVE}
                                isAdmin={isAdmin}
                                viewMode={viewMode}
                            />
                        )}

                        {shouldRenderSkinSidebar && (
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
                                customTextSeed={visionInput}
                                onCustomTextSeedChange={(value) => {
                                    setVisionInput(value);
                                    setVisionCandidateState({});
                                }}
                                focusState={focusState}
                                onFocusStateChange={(locks) => {
                                    setFocusState(prev => ({ ...prev, ...locks }));
                                }}
                            />
                        )}

                        {shouldRenderVisionSidebar && (
                            <VisionSidebar
                                isOpen={isVisionOpen}
                                onClose={() => setIsVisionOpen(false)}
                                visionInput={visionImageNote}
                                onVisionInputChange={(value) => {
                                    setVisionImageNote(value);
                                    setVisionAnalysis('');
                                    setVisionCandidateState({});
                                }}
                                analysisTextContext={visionImplantEnabled ? buildVisionAnalysisContext() : buildVisionCreativeContext()}
                                visionImage={visionImage}
                                onVisionImageChange={(value) => {
                                    setVisionImage(value);
                                    setVisionAnalysis('');
                                    setVisionCandidateState({});
                                }}
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
                                isAdmin={isAdmin}
                                zIndex={topSidebar === 'vision' ? 70 : 60}
                                candidateState={visionCandidateState}
                                onApplyCandidateState={applyVisionCandidateState}
                                onClearCandidateState={() => setVisionCandidateState({})}
                            />
                        )}

                        {shouldRenderAestheticInputSidebar && (
                            <AestheticInputSidebar
                                isOpen={isAestheticInputOpen}
                                onClose={() => setIsAestheticInputOpen(false)}
                                onAnalyzeAndMap={handleAestheticInputMap}
                                isProcessing={isMappingInput}
                                lang={lang}
                                isAdmin={isAdmin}
                            />
                        )}
                    </div>
                )}



                {/* Modal removed in favor of full page in the Routes flow above, but we keep the logic tethered to isManualOpen for now to minimize ripple effects */}
                {isHistoryOpen && (
                    <HistoryModal
                        history={history}
                        onRestore={onHistoryRestore}
                        onClose={closeHistory}
                        lang={lang}
                        activeProjectId={activeProjectId}
                        onSaveCurrent={handleSaveCurrentToArchive}
                    />
                )}
                {isProjectsOpen && (
                    <ProjectSystemModal
                        projects={projects}
                        activeProjectId={activeProjectId}
                        lang={lang}
                        onClose={() => setIsProjectsOpen(false)}
                        onCreateProject={handleCreateProject}
                        onSaveProject={handleSaveProject}
                        onRestoreProject={handleRestoreProject}
                        onDeleteProject={handleDeleteProject}
                    />
                )}

                {activeBlockId && libraryModalOpen && (
                    <NarrativeLibraryModal
                        isOpen={libraryModalOpen}
                        onClose={() => setLibraryModalOpen(false)}
                        blockId={activeBlockId}
                        blockName={getBlockName(activeBlockId, lang)}
                        selectedTags={narrativeFieldState[activeBlockId] || []}
                        onToggleTag={(tag) => handleToggleTag(activeBlockId, tag)}
                        onSetTags={(tags) => handleSetBlockTags(activeBlockId, tags)}
                        onClear={() => handleClearBlock(activeBlockId)}
                        lang={lang}
                        driverType={selectedDriver || DriverType.NARRATIVE}
                        onAddCustomDef={handleAddCustomDef}
                        onTempLockChange={(locks) => {
                            setFaceState(prev => ({ ...prev, ...locks }));
                        }}
                        onFocusStateChange={(locks) => {
                            setFocusState(prev => ({ ...prev, ...locks }));
                        }}
                        initialFaceState={faceState}
                        initialFocusState={focusState}
                        allSelectedTags={getAllSelectedTags(narrativeFieldState)}
                        allSelectedFocusUnitMap={getSelectedFocusUnitMap(narrativeFieldState)}
                        allSelectedFocusBlockMap={getSelectedFocusBlockMap(narrativeFieldState)}
                        customLibraryData={
                            activeBlockId === 'aes_palette_preset'
                                ? [{ id: 'lib_master', name: '视觉大师预设 (Master Presets)', desc: 'Pre-configured Cinematic Styles', items: MASTER_PRESETS }]
                                : (activeBlockId === 'aes_color_palette'
                                    ? [{ id: 'lib_color', name: '经典色板库 (Color Palettes)', desc: 'Classic Color Schemes', items: AES_COLOR_PRESETS }]
                                    : undefined)
                        }
                    />
                )}

                {isTensionOpen && (
                    <TensionMonitorModal
                        isOpen={isTensionOpen}
                        onClose={() => setIsTensionOpen(false)}
                        fieldState={narrativeFieldState}
                        worldLaw={worldLawConfig}
                        lang={lang}
                        selectedDriver={selectedDriver}
                    />
                )}

                {/* WorldLawModal integrated into EngineBottomBar */}
                {isSettingsOpen && (
                    <div className="mist-archive-overlay mist-config-overlay fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[200] p-0">
                        <SimpleConfigPanel lang={lang} onClose={closeSettings} />
                    </div>
                )}

                {isAuthOpen && (
                    <AuthModal
                        isOpen={isAuthOpen}
                        onClose={() => setIsAuthOpen(false)}
                        onLogin={(user) => setCurrentUser(user)}
                        lang={lang}
                    />
                )}
                {isProfileOpen && (
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
                )}
                <TaskManagerPanel
                    isOpen={isTaskManagerOpen}
                    onClose={() => setIsTaskManagerOpen(false)}
                    lang={lang}
                    driverType={selectedDriver}
                />

                {isPromptInspectorOpen && (
                    <PromptInspectorModal
                        isOpen={isPromptInspectorOpen}
                        onClose={() => setIsPromptInspectorOpen(false)}
                        lang={lang}
                        fieldState={narrativeFieldState}
                        visionInput={visionInput}
                        visionAnalysis={visionImplantEnabled ? visionAnalysis : ''}
                        visionImage={visionImplantEnabled ? visionImage : null}
                        worldLawConfig={worldLawConfig}
                        driverType={selectedDriver}
                        faceState={faceState}
                        focusState={focusState}
                        mAxisMixer={mAxisMixer}
                        m7bIntensity={m7bIntensity}
                        promptVersion={narrativePromptVersion}
                        onPromptVersionChange={setNarrativePromptVersion}
                        conceptRuntimeState={conceptRuntimeState}
                    />
                )}
                </React.Suspense>
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default App;
