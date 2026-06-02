import { X, Search, Layers, Check, Dice5, Trash2, Plus, Zap, Sparkles, Eye, Heart, Music, Sun, Moon, Cloud, Feather, Globe, Copy, LayoutGrid, Info, Hash, ChevronRight, ArrowLeftRight, Undo2, Redo2, Loader2, Terminal } from 'lucide-react';
import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../contexts/ThemeContext';
import { PromptFocusState, LibraryItemDef } from '../types';
import { generateLexiconItemDraft } from '../services/promptSkillService';
import { runWithTask } from '../services/taskManager';
import {
    NARRATIVE_ENGINE_BLOCKS,
    NARRATIVE_ENGINE_LIBRARY,
    COMMERCIAL_ENGINE_BLOCKS, COMMERCIAL_ENGINE_LIBRARY, COMM_SKIN_BLOCKS, COMM_SKIN_LIBRARY,
    EXPERIMENTAL_ENGINE_BLOCKS, EXPERIMENTAL_ENGINE_LIBRARY, EXPERIMENTAL_SKIN_BLOCKS, EXPERIMENTAL_SKIN_LIBRARY,
    AESTHETIC_ENGINE_BLOCKS,
    AESTHETIC_ENGINE_LIBRARY,
    CONCEPT_ENGINE_BLOCKS,
    CONCEPT_ENGINE_LIBRARY,
    TRAILER_ENGINE_BLOCKS, TRAILER_ENGINE_LIBRARY, TRAILER_SKIN_BLOCKS, TRAILER_SKIN_LIBRARY,
    POETIC_ENGINE_LIBRARY,
    BLOCK_LIMITS,
    GENRE_SUPER_GROUPS,
    AES_COLOR_PRESETS,
    SUR3_DATA,
    ALL_SKIN_BLOCKS,
    SKIN_LIBRARY,
    GENRE_CATEGORIES,
    WORLD_MOTIF_CATEGORIES
} from '../constants';
import { BlueprintLanguage, DriverType, LibraryCategoryDef } from '../types';
import { buildTermFocusPatch, clearFocusForTagsPatch, getFocusLimitReason, getFocusUnitKey, isFocusableBlock, MAX_FOCUS_TERMS } from '../utils/focusTerms';
import { XRayInspectorModal, type XRaySourceGroup } from './XRayInspector';

interface NarrativeLibraryModalProps {
    isOpen: boolean;
    onClose: () => void;
    blockId: string;
    blockName: string;
    selectedTags: string[];
    onToggleTag: (tag: string) => void;
    onSetTags?: (tags: string[]) => void;
    onClear?: () => void;
    lang?: BlueprintLanguage;
    customLibraryData?: LibraryCategoryDef[];
    driverType?: DriverType;
    onAddCustomDef?: (name: string, def: string, core: string, item?: LibraryItemDef, blockId?: string) => void;
    scrollToTag?: string;
    onTempLockChange?: (itemTempLock: Record<string, 'bright' | 'dark' | 'tension'>) => void;
    onFocusStateChange?: (focusState: PromptFocusState) => void;
    initialFaceState?: Record<string, 'bright' | 'dark' | 'tension'>;
    initialFocusState?: PromptFocusState;
    allSelectedTags?: string[];
    allSelectedFocusUnitMap?: Record<string, string>;
    allSelectedFocusBlockMap?: Record<string, string>;
    isAdmin?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
    Zap, Sparkles, Eye, Heart, Music, Sun, Moon, Cloud, Feather
};

const displayCnTag = (value: unknown) => String(value || '')
    .replace(/^\[?SUR-END[.。]\s*/i, '')
    .replace(/^\[?SURX[.。]\s*/i, '')
    .replace(/\s*\((?![^)]*[\u3400-\u9fff])[^)]*\)\s*/g, '')
    .replace(/^\[|\]$/g, '')
    .trim();

const containsCjk = (value: string) => /[\u3400-\u9fff]/.test(value);

const getEnglishLabel = (name?: string, nameEn?: string) => {
    if (nameEn) return nameEn.trim();
    const rawName = String(name || '');
    const parenthetical = rawName.match(/\((.*?)\)/)?.[1];
    if (parenthetical) return parenthetical.trim();
    return containsCjk(rawName) ? '' : rawName.trim();
};

const getLocalizedLabel = (name: string | undefined, nameEn: string | undefined, lang: BlueprintLanguage) => {
    if (lang === 'EN') return getEnglishLabel(name, nameEn);
    return displayCnTag(name);
};

const getLocalizedText = (item: any, cnKey: string, enKey: string, lang: BlueprintLanguage) => {
    const text = lang === 'EN' ? item?.[enKey] : item?.[cnKey];
    return typeof text === 'string' ? text.trim() : text;
};

const itemTagMatches = (item: any, tag: string) =>
    item?.name === tag
    || item?.id === tag
    || item?.aliases?.includes(tag)
    || item?.aliasesEn?.includes(tag);

const itemMatchesAnyTag = (item: any, tags: string[]) => tags.some(tag => itemTagMatches(item, tag));

export const NarrativeLibraryModal: React.FC<NarrativeLibraryModalProps> = ({
    isOpen, onClose, blockId, blockName, selectedTags, onToggleTag, onSetTags, onClear, lang = 'CN', customLibraryData, driverType, onAddCustomDef, scrollToTag, onTempLockChange, onFocusStateChange, initialFaceState, initialFocusState, allSelectedTags, allSelectedFocusUnitMap, allSelectedFocusBlockMap, isAdmin = false
}) => {
    const { theme: globalTheme } = useTheme();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customInputName, setCustomInputName] = useState("");
    const [customInputDef, setCustomInputDef] = useState("");
    const [customInputCore, setCustomInputCore] = useState("");
    const [customInputNote, setCustomInputNote] = useState("");
    const [customDraft, setCustomDraft] = useState<LibraryItemDef | null>(null);
    const [isGeneratingCustomDraft, setIsGeneratingCustomDraft] = useState(false);
    const [showCustomDraftPrompt, setShowCustomDraftPrompt] = useState(false);
    const [activeSuperGroup, setActiveSuperGroup] = useState<string | null>(null);
    const [activePersonaCategory, setActivePersonaCategory] = useState<string | null>(null);
    const [activeProtocolCategory, setActiveProtocolCategory] = useState<string | null>(null);
    const [copiedItemId, setCopiedItemId] = useState<string | null>(null);
    const [useAltGroup, setUseAltGroup] = useState(false);
    const [protocolOpenId, setProtocolOpenId] = useState<string | null>(null);
    const isSkinSV = blockId === 'skin_structure' || blockId === 'skin_volume';
    const isPersonaLibrary = blockId === 'cd_persona';
    const isStyleProtocolLibrary = blockId === 'cd_style_protocol_primary' || blockId === 'cd_style_protocol_secondary';
    const useTwoLevelSidebar = isPersonaLibrary || isStyleProtocolLibrary;
    const limit = BLOCK_LIMITS[blockId] || 1;
    const [activeSlotIndex, setActiveSlotIndex] = useState(0);
    const [selectionPast, setSelectionPast] = useState<string[][]>([]);
    const [selectionFuture, setSelectionFuture] = useState<string[][]>([]);

    const [currentLang, setCurrentLang] = useState<BlueprintLanguage>(lang);

    const isEngineLexicon = blockId.startsWith('engine_m');
    const canFocusTerms = isFocusableBlock(blockId);
    // Content version control: 'academic' shows def+core, 'ai' shows directive
    const [contentVersion, setContentVersion] = useState<'academic' | 'ai'>('ai'); // Default to AI version
    const effectiveContentVersion = isEngineLexicon ? contentVersion : 'academic';
    // Global temperature control for browsing (bright/dark/tension)
    const [directiveTemp, setDirectiveTemp] = useState<'bright' | 'dark' | 'tension'>('bright');
    const faceState = initialFaceState || {};
    const focusState = initialFocusState || {};
    const selectedFocusTags = allSelectedTags || selectedTags;
    const focusUnitMap = useMemo(() => {
        const map: Record<string, string> = { ...(allSelectedFocusUnitMap || {}) };
        selectedTags.forEach(tag => {
            map[tag] = getFocusUnitKey(blockId, tag);
        });
        return map;
    }, [allSelectedFocusUnitMap, blockId, selectedTags]);
    const focusBlockMap = useMemo(() => {
        const map: Record<string, string> = { ...(allSelectedFocusBlockMap || {}) };
        selectedTags.forEach(tag => {
            map[tag] = blockId;
        });
        return map;
    }, [allSelectedFocusBlockMap, blockId, selectedTags]);
    const setFace = (name: string, temp: 'bright' | 'dark' | 'tension') => {
        onTempLockChange?.({ [name]: temp });
    };

    const setTermFocus = (name: string, focus: boolean) => {
        const patch = buildTermFocusPatch(focusState, blockId, selectedTags, name, focus, selectedFocusTags, focusUnitMap, focusBlockMap);
        if (patch) onFocusStateChange?.(patch);
    };

    useEffect(() => {
        setCurrentLang(lang);
    }, [lang]);

    useEffect(() => {
        if (!isOpen) return;
        setSelectionPast([]);
        setSelectionFuture([]);
        setActiveSlotIndex(Math.max(0, Math.min(limit - 1, Math.max(0, selectedTags.length - 1))));
    }, [blockId, isOpen, limit]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Auto-scroll to the specified tag when modal opens
    useEffect(() => {
        if (isOpen && scrollToTag) {
            setTimeout(() => {
                handleScrollToCard(scrollToTag);
            }, 200);
        }
    }, [isOpen, scrollToTag]);

    const libraryData = useMemo(() => {
        if (customLibraryData) return customLibraryData;

        let allLibs: LibraryCategoryDef[] = [];
        if (driverType === DriverType.COMMERCIAL) {
            allLibs = [...COMMERCIAL_ENGINE_LIBRARY, ...COMM_SKIN_LIBRARY];
        } else if (driverType === DriverType.EXPERIMENTAL) {
            allLibs = [...EXPERIMENTAL_ENGINE_LIBRARY, ...EXPERIMENTAL_SKIN_LIBRARY];
        } else if (driverType === DriverType.AESTHETIC) {
            // FIXED: AESTHETIC mode needs to search across multiple libraries
            allLibs = [...AESTHETIC_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...COMMERCIAL_ENGINE_LIBRARY];
        } else if (driverType === DriverType.CONCEPT_DESIGN) {
            allLibs = [...CONCEPT_ENGINE_LIBRARY, ...AESTHETIC_ENGINE_LIBRARY];
        } else {
            allLibs = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES];
        }

        if (blockId === 'skin_genre') {
            return GENRE_CATEGORIES;
        }

        if (blockId === 'skin_animation_genre' || blockId === 'skin_era') {
            return WORLD_MOTIF_CATEGORIES;
        }

        if (blockId === 'skin_country_exact' || blockId === 'cd_space_anchor_exact') {
            return SUR3_DATA;
        }

        const libId = `${blockId}_lib`;
        const found = allLibs.find(c => c.id === libId);
        return found ? [found] : [];
    }, [blockId, customLibraryData, driverType]);

    const blockDisplayName = useMemo(() => {
        const skinBlocks = driverType === DriverType.COMMERCIAL
            ? COMM_SKIN_BLOCKS
            : driverType === DriverType.EXPERIMENTAL
                ? EXPERIMENTAL_SKIN_BLOCKS
                : driverType === DriverType.TRAILER
                    ? TRAILER_SKIN_BLOCKS
                    : ALL_SKIN_BLOCKS;
        const engineBlocks = driverType === DriverType.COMMERCIAL
            ? COMMERCIAL_ENGINE_BLOCKS
            : driverType === DriverType.EXPERIMENTAL
                ? EXPERIMENTAL_ENGINE_BLOCKS
                : driverType === DriverType.AESTHETIC
                    ? AESTHETIC_ENGINE_BLOCKS
                    : driverType === DriverType.CONCEPT_DESIGN
                        ? CONCEPT_ENGINE_BLOCKS
                        : driverType === DriverType.TRAILER
                            ? TRAILER_ENGINE_BLOCKS
                            : NARRATIVE_ENGINE_BLOCKS;
        const block = [...engineBlocks, ...skinBlocks].find(item => item.id === blockId);
        if (block) return getLocalizedLabel(block.name, block.enName, currentLang) || block.id;

        const library = libraryData.find(item => item.id === `${blockId}_lib` || item.id === blockId);
        if (library) return getLocalizedLabel(library.name, library.nameEn, currentLang) || library.id;

        return getLocalizedLabel(blockName, undefined, currentLang) || blockId;
    }, [blockId, blockName, currentLang, driverType, libraryData]);

    const personaCategoryOptions = useMemo(() => {
        if (!isPersonaLibrary) return [];
        const canSeeItem = (item: any) => isAdmin || !item?.adminOnly;
        const categoryMap = new Map<string, { id: string; name: string; count: number }>();
        libraryData.flatMap(cat => cat.items || []).filter(canSeeItem).forEach((item: any) => {
            const id = String(item.personaCategory || (currentLang === 'EN' ? 'Uncategorized Persona' : '未分类人设'));
            const name = currentLang === 'EN'
                ? String(item.personaCategoryEn || item.personaCategory || 'Uncategorized Persona')
                : String(item.personaCategory || '未分类人设');
            const existing = categoryMap.get(id);
            if (existing) {
                existing.count += 1;
            } else {
                categoryMap.set(id, { id, name, count: 1 });
            }
        });
        return Array.from(categoryMap.values());
    }, [currentLang, isAdmin, isPersonaLibrary, libraryData]);

    const protocolCategoryOptions = useMemo(() => {
        if (!isStyleProtocolLibrary) return [];
        const canSeeItem = (item: any) => isAdmin || !item?.adminOnly;
        const categoryMap = new Map<string, { id: string; name: string; count: number }>();
        libraryData.flatMap(cat => cat.items || []).filter(canSeeItem).forEach((item: any) => {
            const fallbackName = item.group || (currentLang === 'EN' ? 'Uncategorized Protocol' : '未分类协议');
            const fallbackNameEn = item.groupEn || item.group || 'Uncategorized Protocol';
            const id = String(item.protocolCategory || fallbackName);
            const name = currentLang === 'EN'
                ? String(item.protocolCategoryEn || item.protocolCategory || fallbackNameEn)
                : String(item.protocolCategory || fallbackName);
            const existing = categoryMap.get(id);
            if (existing) {
                existing.count += 1;
            } else {
                categoryMap.set(id, { id, name, count: 1 });
            }
        });
        return Array.from(categoryMap.values());
    }, [currentLang, isAdmin, isStyleProtocolLibrary, libraryData]);

    const activePersonaCategoryId = isPersonaLibrary
        ? (activePersonaCategory && personaCategoryOptions.some(item => item.id === activePersonaCategory)
            ? activePersonaCategory
            : personaCategoryOptions[0]?.id || null)
        : null;

    const activeProtocolCategoryId = isStyleProtocolLibrary
        ? (activeProtocolCategory && protocolCategoryOptions.some(item => item.id === activeProtocolCategory)
            ? activeProtocolCategory
            : protocolCategoryOptions[0]?.id || null)
        : null;

    const fullPersonaGroups = useMemo(() => {
        if (!isPersonaLibrary) return [];
        const formatName = (name: string, en?: string) => {
            if (!name && !en) return "";
            return getLocalizedLabel(name, en, currentLang) || name;
        };
        const canSeeItem = (item: any) => isAdmin || !item?.adminOnly;
        const category = libraryData[0];
        if (!category) return [];
        const groupedItems: Record<string, any[]> = {};
        (category.items || []).filter(canSeeItem).forEach((item: any) => {
            const groupKey = useAltGroup && item.altGroup ? item.altGroup : (item.group || '');
            const key = groupKey || (currentLang === 'EN' ? 'General' : '通用');
            if (!groupedItems[key]) groupedItems[key] = [];
            groupedItems[key].push(item);
        });
        return Object.keys(groupedItems).map(groupName => {
            const firstItem = groupedItems[groupName].find(i => useAltGroup && i.altGroupEn ? true : i.groupEn);
            const enName = useAltGroup && firstItem?.altGroupEn ? firstItem.altGroupEn : firstItem?.groupEn;
            return {
                id: groupName,
                name: formatName(groupName, enName) || (currentLang === 'EN' ? 'Group' : groupName),
                items: groupedItems[groupName]
            };
        }).sort((a, b) => a.id.localeCompare(b.id));
    }, [currentLang, isAdmin, isPersonaLibrary, libraryData, useAltGroup]);

    const fullProtocolGroups = useMemo(() => {
        if (!isStyleProtocolLibrary) return [];
        const formatName = (name: string, en?: string) => {
            if (!name && !en) return "";
            return getLocalizedLabel(name, en, currentLang) || name;
        };
        const canSeeItem = (item: any) => isAdmin || !item?.adminOnly;
        const groupedItems: Record<string, any[]> = {};
        libraryData.flatMap(cat => cat.items || []).filter(canSeeItem).forEach((item: any) => {
            const groupKey = useAltGroup && item.altGroup ? item.altGroup : (item.group || '');
            const key = groupKey || (currentLang === 'EN' ? 'General' : '通用');
            if (!groupedItems[key]) groupedItems[key] = [];
            groupedItems[key].push(item);
        });
        return Object.keys(groupedItems).map(groupName => {
            const firstItem = groupedItems[groupName].find(i => useAltGroup && i.altGroupEn ? true : i.groupEn);
            const enName = useAltGroup && firstItem?.altGroupEn ? firstItem.altGroupEn : firstItem?.groupEn;
            return {
                id: groupName,
                name: formatName(groupName, enName) || (currentLang === 'EN' ? 'Group' : groupName),
                items: groupedItems[groupName]
            };
        }).sort((a, b) => a.id.localeCompare(b.id));
    }, [currentLang, isAdmin, isStyleProtocolLibrary, libraryData, useAltGroup]);

    // Super group functionality removed to simplify genre selection
    /*
    useEffect(() => {
        if (blockId === 'skin_genre' && !activeSuperGroup) {
            setActiveSuperGroup(GENRE_SUPER_GROUPS[0].id);
        }
    }, [blockId, activeSuperGroup]);
    */

    const processedGroups = useMemo(() => {
        const formatName = (name: string, en?: string) => {
            if (!name && !en) return "";
            return getLocalizedLabel(name, en, currentLang) || name;
        };

        const canSeeItem = (item: any) => isAdmin || !item?.adminOnly;
        let filteredLibraryData = libraryData.map(cat => ({
            ...cat,
            items: (cat.items || []).filter(canSeeItem)
        }));

        // Filter by super group removed for simplicity
        /*
        if (blockId === 'skin_genre' && activeSuperGroup) {
            const superGroup = GENRE_SUPER_GROUPS.find(g => g.id === activeSuperGroup);
            if (superGroup) {
                filteredLibraryData = libraryData.filter(cat => superGroup.includes.includes(cat.id));
            }
        }
        */

        if (filteredLibraryData.length > 1) {
            return filteredLibraryData.map(cat => ({
                id: cat.id,
                name: formatName(cat.name, cat.nameEn) || cat.id,
                items: cat.items || []
            }));
        } else if (filteredLibraryData.length === 1) {
            const cat = filteredLibraryData[0];
            const groupedItems: Record<string, any[]> = {};
            const sourceItems = isPersonaLibrary && activePersonaCategoryId
                ? (cat.items || []).filter((item: any) => String(item.personaCategory || (currentLang === 'EN' ? 'Uncategorized Persona' : '未分类人设')) === activePersonaCategoryId)
                : isStyleProtocolLibrary && activeProtocolCategoryId
                    ? (cat.items || []).filter((item: any) => String(item.protocolCategory || item.group || (currentLang === 'EN' ? 'Uncategorized Protocol' : '未分类协议')) === activeProtocolCategoryId)
                    : (cat.items || []);

            sourceItems.forEach(item => {
                const groupKey = useAltGroup && item.altGroup ? item.altGroup : (item.group || '');
                if (groupKey) {
                    if (!groupedItems[groupKey]) groupedItems[groupKey] = [];
                    groupedItems[groupKey].push(item);
                } else {
                    const generalKey = currentLang === 'EN' ? "General" : "通用";
                    if (!groupedItems[generalKey]) groupedItems[generalKey] = [];
                    groupedItems[generalKey].push(item);
                }
            });

            const groups = Object.keys(groupedItems).map(groupName => {
                const firstItem = groupedItems[groupName].find(i => useAltGroup && i.altGroupEn ? true : i.groupEn);
                const enName = useAltGroup && firstItem?.altGroupEn ? firstItem.altGroupEn : firstItem?.groupEn;
                return {
                    id: groupName,
                    name: formatName(groupName, enName) || (currentLang === 'EN' ? 'Group' : groupName),
                    items: groupedItems[groupName]
                };
            }).sort((a, b) => a.id.localeCompare(b.id));

            if (groups.length === 0) {
                return [{
                    id: "default_empty",
                    name: currentLang === 'EN' ? "General" : "通用",
                    items: []
                }];
            }
            return groups;
        }
        return [{
            id: "default_empty",
            name: currentLang === 'EN' ? "General" : "通用",
            items: []
        }];
    }, [libraryData, currentLang, blockId, activeSuperGroup, useAltGroup, isAdmin, isPersonaLibrary, activePersonaCategoryId, isStyleProtocolLibrary, activeProtocolCategoryId]);

    useEffect(() => {
        if (!isPersonaLibrary) {
            if (activePersonaCategory) setActivePersonaCategory(null);
            return;
        }
        if (personaCategoryOptions.length === 0) return;
        if (!activePersonaCategory || !personaCategoryOptions.some(item => item.id === activePersonaCategory)) {
            setActivePersonaCategory(personaCategoryOptions[0].id);
        }
    }, [activePersonaCategory, isPersonaLibrary, personaCategoryOptions]);

    useEffect(() => {
        if (!isStyleProtocolLibrary) {
            if (activeProtocolCategory) setActiveProtocolCategory(null);
            return;
        }
        if (protocolCategoryOptions.length === 0) return;
        if (!activeProtocolCategory || !protocolCategoryOptions.some(item => item.id === activeProtocolCategory)) {
            setActiveProtocolCategory(protocolCategoryOptions[0].id);
        }
    }, [activeProtocolCategory, isStyleProtocolLibrary, protocolCategoryOptions]);

    useEffect(() => {
        if (processedGroups.length > 0) {
            if (!activeTab || !processedGroups.find(g => g.id === activeTab)) {
                setActiveTab(processedGroups[0].id);
            }
        }
    }, [processedGroups]);

    // Auto-scroll to first selected item when modal opens
    useEffect(() => {
        if (!isOpen || selectedTags.length === 0) return;

        // Wait for DOM to render and tab to switch
        const timer = setTimeout(() => {
            handleScrollToCard(selectedTags[0]);
        }, 300);

        return () => clearTimeout(timer);
    }, [isOpen]);

    const filteredItems = useMemo(() => {
        if (searchQuery.trim()) {
            const lowerQuery = searchQuery.toLowerCase();
            const searchSource = blockId === 'skin_genre'
                ? GENRE_CATEGORIES.map(cat => ({ id: cat.id, name: cat.name, items: cat.items }))
                : processedGroups;

            return searchSource.flatMap(group =>
                (group.items || []).filter(item =>
                    item.name.toLowerCase().includes(lowerQuery) ||
                    (item.nameEn && item.nameEn.toLowerCase().includes(lowerQuery)) ||
                    (item.def && item.def.toLowerCase().includes(lowerQuery)) ||
                    (item.defEn && item.defEn.toLowerCase().includes(lowerQuery)) ||
                    (item.core && item.core.toLowerCase().includes(lowerQuery)) ||
                    (item.coreEn && item.coreEn.toLowerCase().includes(lowerQuery)) ||
                    (item.essence && item.essence.toLowerCase().includes(lowerQuery)) ||
                    (item.essenceEn && item.essenceEn.toLowerCase().includes(lowerQuery)) ||
                    (item.reality && item.reality.toLowerCase().includes(lowerQuery))
                ).map(item => ({ ...item, _groupName: group.name }))
            );
        }
        if (!activeTab) return [];
        const group = processedGroups.find(g => g.id === activeTab);
        if (!group) return [];
        return group.items || [];
    }, [activeTab, processedGroups, searchQuery, blockId, currentLang]);

    const allCurrentLibraryItems = useMemo(() => {
        const seen = new Set<string>();
        return processedGroups.flatMap(group =>
            (group.items || [])
                .filter(item => {
                    if (!item?.name || seen.has(item.name)) return false;
                    seen.add(item.name);
                    return true;
                })
                .map(item => ({ ...item, _groupName: group.name }))
        );
    }, [processedGroups]);

    const activeGroupForCustom = useMemo(() => {
        if (searchQuery) return null;
        const group = processedGroups.find(item => item.id === activeTab) || processedGroups[0];
        return group ? { group: group.id, groupName: group.name } : null;
    }, [activeTab, processedGroups, searchQuery]);

    const buildCustomItemBase = (name: string, def = customInputDef, core = customInputCore): LibraryItemDef => {
        const cleanName = name.trim();
        const fallbackId = cleanName
            .toLowerCase()
            .replace(/['"`]/g, '')
            .replace(/[^a-z0-9\u3400-\u9fff]+/g, '_')
            .replace(/^_+|_+$/g, '')
            .slice(0, 64) || `custom_${Date.now()}`;
        const activeCategory = isPersonaLibrary
            ? personaCategoryOptions.find(item => item.id === activePersonaCategoryId)
            : null;
        const activeProtocol = isStyleProtocolLibrary
            ? protocolCategoryOptions.find(item => item.id === activeProtocolCategoryId)
            : null;

        return {
            id: `custom_${blockId}_${fallbackId}`,
            name: cleanName,
            def: def.trim(),
            core: core.trim() || undefined,
            group: activeGroupForCustom?.group || activeGroupForCustom?.groupName || (currentLang === 'EN' ? 'Custom' : '自定义'),
            groupEn: activeGroupForCustom?.groupName || 'Custom',
            tags: ['custom', blockId],
            ontologyLevel: 1,
            risk: 'clean',
            ...(activeCategory ? {
                personaCategory: activeCategory.id,
                personaCategoryEn: activeCategory.name,
                personaSubgroup: activeGroupForCustom?.group || activeGroupForCustom?.groupName,
                personaSubgroupEn: activeGroupForCustom?.groupName,
                personaKind: cleanName,
                personaKindEn: cleanName,
                personaStrength: 'medium' as const,
                isCompoundPersona: true
            } : {}),
            ...(activeProtocol ? {
                protocolCategory: activeProtocol.id,
                protocolCategoryEn: activeProtocol.name
            } : {})
        };
    };

    const resetCustomComposer = () => {
        setCustomInputName("");
        setCustomInputDef("");
        setCustomInputCore("");
        setCustomInputNote("");
        setCustomDraft(null);
        setShowCustomDraftPrompt(false);
        setShowCustomInput(false);
    };

    const getCustomLexiconGuide = (guideLang: BlueprintLanguage = currentLang) => {
        const targetName = blockDisplayName;
        if (blockId === 'cd_persona') {
            return guideLang === 'EN'
                ? `Write a persona tag for character / subject concept design.
The definition must contain five functions:
1. First-read identity: what the viewer immediately recognizes this character as. This is not merely an occupation or story role.
2. Character archetype / motif: the cultural or visual archetype being activated.
3. Core tension: one clear contradiction that prevents the persona from becoming flat.
4. Visible evidence: where the persona should appear on the body, face, posture, costume structure, materials, props, symbols, grooming, wear marks, or gaze.
5. Boundary control: what the prompt must not become.

Write for visual character design, not plot. Do not write backstory, world lore, a mood-only label, a pure outfit list, or a pile of props. Avoid template sentences like "built from..." or "constructed by...".`
                : `写角色 / 主体概念设计用的人设标签。
定义必须同时完成五个功能：
1. 第一识别身份：观者第一眼认出这个角色“是什么人”。这不是单纯职业名，也不是故事职位。
2. 人物母题：这个词条调用的角色原型、文化母题或视觉母题。
3. 核心张力：必须有一个清楚矛盾，让人设不变平。
4. 可视化证据：说明人设应优先落在脸、身体、姿态、服装结构、材料、道具、符号、妆发、磨损、眼神或社会接口中的哪些位置。
5. 边界控制：说明不要生成成什么。

这是造型人设，不是故事人设。不要写背景故事、世界观设定、纯情绪标签、纯服装清单或物件堆叠。避免“以……构成人设”这类模板句。`;
        }
        if (blockId === 'cd_occupation') {
            return guideLang === 'EN'
                ? 'Write an occupation term. Focus on job role, workflow, institution, tools, posture, labor traces, and era adaptation.'
                : '写职业身份词条。重点是岗位、流程、机构权限、工具、姿态、劳动痕迹和时代适配。';
        }
        if (isStyleProtocolLibrary) {
            return guideLang === 'EN'
                ? 'Write a character / subject form protocol. Focus on global design grammar, silhouette, materials, body boundary, clothing translation, and conflict absorption.'
                : '写角色 / 主体造型协议。重点是全局设计语法、剪影、材料、身体边界、服装转译和冲突吸收。';
        }
        if (blockId === 'cd_field_preset') {
            return guideLang === 'EN'
                ? 'Write a field preset. Focus on institution, space, objects, danger, group behavior, and downgrade rule across eras.'
                : '写场域预设。重点是制度、空间、物件、危险、群体行为和跨时代降级规则。';
        }
        if (blockId.includes('media') || blockId.startsWith('aes_')) {
            return guideLang === 'EN'
                ? 'Write a visual-style or medium term. Focus on concrete imaging language, material evidence, viewing relation, and prompt-ready constraints.'
                : '写视觉风格或媒介词条。重点是具体成像语言、材料证据、观看关系和可执行约束。';
        }
        return guideLang === 'EN'
            ? `Write a formal lexicon item for ${targetName}. Keep it precise, visual, and prompt-ready.`
            : `为「${targetName}」写正式词库条目。保持精确、可视化、可进入提示词。`;
    };

    const getCustomDraftContext = () => {
        const activeCategory = isPersonaLibrary
            ? personaCategoryOptions.find(item => item.id === activePersonaCategoryId)?.name
            : isStyleProtocolLibrary
                ? protocolCategoryOptions.find(item => item.id === activeProtocolCategoryId)?.name
                : '';
        const activeGroup = activeGroupForCustom?.groupName || activeGroupForCustom?.group || '';
        return {
            activeCategory: activeCategory || '当前词库区块分类',
            activeGroup: activeGroup || '当前可见分组',
            writingGuide: getCustomLexiconGuide('CN'),
            termName: customInputName.trim(),
            adminNote: customInputNote.trim() || '无'
        };
    };

    const buildCustomDraftPromptFromValues = (values?: Record<string, unknown>) => {
        const context = getCustomDraftContext();
        const activeCategory = String(values?.customDraftCategory ?? context.activeCategory).trim() || '当前词库区块分类';
        const activeGroup = String(values?.customDraftGroup ?? context.activeGroup).trim() || '当前可见分组';
        const writingGuide = String(values?.customDraftGuide ?? context.writingGuide).trim();
        const termName = String(values?.customDraftName ?? context.termName).trim();
        const adminNote = String(values?.customDraftNote ?? context.adminNote).trim() || '无';
        return `你是一个角色提示词模板引擎的词库编辑器。

当前词库区块：
- blockId：${blockId}
- blockName：${blockDisplayName}
- 分类：${activeCategory}
- 子分组：${activeGroup}

生成目标由当前词库区块决定。不要擅自改写为其他目标类型。

写作指南：
${writingGuide}

用户要生成的词条名称：
${termName}

管理员补充要求：
${adminNote}

只返回 JSON，不要输出 Markdown，不要输出解释。
必须符合以下结构：
{
  "id": "lower_snake_case_english_id",
  "name": "中文名",
  "nameEn": "English Name",
  "group": "${activeGroup || '自定义'}",
  "groupEn": "English subgroup name",
  "def": "中文定义。必须是完整但精简的正式词库定义，不要用'以...构成人设'这种模板句。",
  "defEn": "English definition.",
  "core": "中文核心规则或边界，可选但推荐。",
  "coreEn": "English core rule or boundary.",
  "ontologyLevel": 1,
  "risk": "clean",
  "eras": ["contemporary", "timeless"],
  "affects": ["costume", "pose", "prop"],
  "tags": ["short_tag"],
  "absorptionRule": "中文，说明冲突时如何被当前词条吸收或降级。",
  "absorptionRuleEn": "English absorption rule."
}

如果 blockId 是 cd_persona，还必须包含 personaCategory、personaCategoryEn、personaSubgroup、personaSubgroupEn、personaKind、personaKindEn、personaStrength、isCompoundPersona。
如果 blockId 是 cd_persona，def 必须按“第一识别身份 + 人物母题 + 核心张力 + 可视化证据 + 边界控制”的逻辑写成一段自然定义；不要写成故事梗概，不要写成职业说明，不要写成服装/道具清单，不要只靠词条标题撑概念。
如果 blockId 是风格协议区块，还必须包含 protocolCategory、protocolCategoryEn、protocolKind。`;
    };

    const buildCustomDraftPrompt = () => buildCustomDraftPromptFromValues();

    const getCustomDraftSources = (): XRaySourceGroup[] => {
        const context = getCustomDraftContext();
        return [
            {
                id: 'lexicon-generation',
                title: currentLang === 'EN' ? 'Lexicon Generation Instruction' : '词条生成指令',
                description: currentLang === 'EN'
                    ? 'This is the actual instruction sent when generating a formal lexicon item.'
                    : '这是点击“AI生成正式词条”时实际发送给 AI 的指令。',
                tone: 'engine',
                items: [
                    {
                        id: 'customDraftBlock',
                        label: currentLang === 'EN' ? 'Current Block' : '当前区块',
                        kind: 'text',
                        value: `${blockDisplayName} (${blockId})`,
                        editable: false,
                        alwaysShow: true
                    },
                    {
                        id: 'customDraftCategory',
                        label: currentLang === 'EN' ? 'Category' : '分类',
                        kind: 'text',
                        value: context.activeCategory,
                        editable: true,
                        alwaysShow: true
                    },
                    {
                        id: 'customDraftGroup',
                        label: currentLang === 'EN' ? 'Subgroup' : '子分组',
                        kind: 'text',
                        value: context.activeGroup,
                        editable: true,
                        alwaysShow: true
                    },
                    {
                        id: 'customDraftName',
                        label: currentLang === 'EN' ? 'Term Name' : '词条名称',
                        kind: 'text',
                        value: context.termName,
                        editable: true,
                        alwaysShow: true
                    },
                    {
                        id: 'customDraftNote',
                        label: currentLang === 'EN' ? 'Admin Note' : '管理员补充',
                        kind: 'textarea',
                        value: context.adminNote,
                        editable: true,
                        alwaysShow: true
                    }
                ]
            },
            {
                id: 'lexicon-output-contract',
                title: currentLang === 'EN' ? 'Writing Guide & Output Contract' : '写作指南与输出契约',
                description: currentLang === 'EN'
                    ? 'Local constraints that shape the JSON lexicon item.'
                    : '本地模板约束，用于规定词条的写法和 JSON 输出结构。',
                tone: 'director',
                items: [
                    {
                        id: 'customDraftGuide',
                        label: currentLang === 'EN' ? 'Writing Guide' : '写作指南',
                        kind: 'textarea',
                        value: context.writingGuide,
                        editable: true,
                        alwaysShow: true
                    }
                ]
            }
        ];
    };

    const handleGenerateCustomDraft = async () => {
        if (!customInputName.trim() || isGeneratingCustomDraft) return;
        setIsGeneratingCustomDraft(true);
        try {
            const draft = await runWithTask(
                currentLang === 'EN' ? 'Generate Lexicon Term' : '生成正式词条',
                async () => generateLexiconItemDraft(buildCustomDraftPrompt())
            );
            if (!draft) {
                alert(currentLang === 'EN' ? 'AI did not return a valid lexicon item.' : 'AI 没有返回可解析的正式词条。');
                return;
            }
            const base = buildCustomItemBase(draft.name || customInputName.trim(), draft.def || '', draft.core || '');
            setCustomDraft({
                ...base,
                ...draft,
                id: draft.id?.startsWith('custom_') ? draft.id : `custom_${blockId}_${draft.id || base.id}`,
                group: draft.group || base.group,
                groupEn: draft.groupEn || base.groupEn,
                personaCategory: draft.personaCategory || base.personaCategory,
                personaCategoryEn: draft.personaCategoryEn || base.personaCategoryEn,
                personaSubgroup: draft.personaSubgroup || base.personaSubgroup,
                personaSubgroupEn: draft.personaSubgroupEn || base.personaSubgroupEn,
                personaKind: draft.personaKind || draft.name || base.personaKind,
                personaKindEn: draft.personaKindEn || draft.nameEn || base.personaKindEn,
                protocolCategory: draft.protocolCategory || base.protocolCategory,
                protocolCategoryEn: draft.protocolCategoryEn || base.protocolCategoryEn
            });
        } catch (error: any) {
            if (error?.message !== 'AbortError') {
                console.error(error);
                alert(error?.message || (currentLang === 'EN' ? 'Failed to generate lexicon item.' : '生成正式词条失败。'));
            }
        } finally {
            setIsGeneratingCustomDraft(false);
        }
    };

    const handleAddCustom = () => {
        if (customInputName && onAddCustomDef) {
            const item = customDraft || buildCustomItemBase(customInputName);
            onAddCustomDef(item.name, item.def || customInputDef, item.core || customInputCore, item, blockId);
            applySlotSelection(item.name);
            resetCustomComposer();
        }
    };

    const getLocalizedItemName = (item: any) => {
        const rawNameCn = String(item.name || '');
        const volumeDuration = blockId === 'skin_volume' ? rawNameCn.match(/\(([^)]*(?:s|m|S|M)[^)]*)\)/)?.[1] : null;
        const nameCn = blockId === 'skin_volume' && volumeDuration
            ? `${rawNameCn.split('(')[0].trim()}（${volumeDuration}）`
            : displayCnTag(item.name);
        const nameEn = getEnglishLabel(item.name, item.nameEn) || item.aliasesEn?.[0] || (!containsCjk(rawNameCn) ? rawNameCn.trim() : '');
        return (currentLang === 'EN' ? nameEn : nameCn) || item.id || '';
    };

    const getItemMechanics = (item: any) => {
        if (currentLang === 'EN') return item.patch?.mechanicsEn || item.mechanicsEn || item.patch?.mechanics || item.mechanics;
        return item.patch?.mechanics || item.mechanics || item.patch?.mechanicsEn || item.mechanicsEn;
    };

    const normalizeTags = (tags: string[]) => {
        const seen = new Set<string>();
        return tags
            .filter(Boolean)
            .filter(tag => {
                if (seen.has(tag)) return false;
                seen.add(tag);
                return true;
            })
            .slice(0, limit);
    };

    const areTagsEqual = (a: string[], b: string[]) => a.length === b.length && a.every((tag, index) => tag === b[index]);

    const slotTags = useMemo(
        () => Array.from({ length: limit }, (_, index) => selectedTags[index] || ''),
        [limit, selectedTags]
    );

    const applyTags = (nextTags: string[], nextActiveSlot = activeSlotIndex, pushHistory = true) => {
        const normalizedNext = normalizeTags(nextTags);
        const normalizedCurrent = normalizeTags(selectedTags);
        if (areTagsEqual(normalizedCurrent, normalizedNext)) {
            setActiveSlotIndex(Math.max(0, Math.min(limit - 1, nextActiveSlot)));
            return;
        }

        if (pushHistory) {
            setSelectionPast(prev => [...prev.slice(-39), normalizedCurrent]);
            setSelectionFuture([]);
        }

        setActiveSlotIndex(Math.max(0, Math.min(limit - 1, nextActiveSlot)));
        const removedTags = normalizedCurrent.filter(tag => !normalizedNext.includes(tag));
        const addedTags = normalizedNext.filter(tag => !normalizedCurrent.includes(tag));

        if (onSetTags) {
            onSetTags(normalizedNext);
            const focusClear = clearFocusForTagsPatch(blockId, removedTags);
            if (removedTags.length > 0) onFocusStateChange?.(focusClear);
            return;
        }

        if (removedTags.length > 0) {
            onFocusStateChange?.(clearFocusForTagsPatch(blockId, removedTags));
        }
        removedTags.forEach(onToggleTag);
        if (removedTags.length > 0 && addedTags.length > 0) {
            setTimeout(() => {
                addedTags.forEach(onToggleTag);
            }, 0);
            return;
        }
        addedTags.forEach(onToggleTag);
    };

    const getTargetSlotIndex = () => {
        const firstEmptyIndex = slotTags.findIndex(tag => !tag);
        if (firstEmptyIndex !== -1) return firstEmptyIndex;
        return Math.max(0, Math.min(limit - 1, activeSlotIndex));
    };

    const applySlotSelection = (tag: string) => {
        const currentIndex = selectedTags.indexOf(tag);
        if (currentIndex !== -1) {
            setActiveSlotIndex(currentIndex);
            handleScrollToCard(tag);
            return;
        }

        const targetIndex = getTargetSlotIndex();
        const nextSlots = [...slotTags];
        nextSlots[targetIndex] = tag;
        applyTags(nextSlots.filter(Boolean), selectedTags.length + 1 >= limit ? targetIndex : Math.min(limit - 1, targetIndex + 1));
        setTimeout(() => {
            handleScrollToCard(tag);
        }, 100);
    };

    const removeSlotTag = (slotIndex: number) => {
        const tag = slotTags[slotIndex];
        if (!tag) {
            setActiveSlotIndex(slotIndex);
            return;
        }
        const nextTags = selectedTags.filter((_, index) => index !== slotIndex);
        applyTags(nextTags, Math.min(slotIndex, Math.max(0, limit - 1)));
    };

    const removeSelectedTag = (tag: string) => {
        const slotIndex = selectedTags.indexOf(tag);
        if (slotIndex === -1) return;
        removeSlotTag(slotIndex);
    };

    const handleSelectionUndo = () => {
        if (selectionPast.length === 0) return;
        const previousTags = selectionPast[selectionPast.length - 1];
        setSelectionPast(prev => prev.slice(0, -1));
        setSelectionFuture(prev => [normalizeTags(selectedTags), ...prev].slice(0, 40));
        applyTags(previousTags, Math.min(previousTags.length, limit) - 1, false);
    };

    const handleSelectionRedo = () => {
        if (selectionFuture.length === 0) return;
        const nextTags = selectionFuture[0];
        setSelectionFuture(prev => prev.slice(1));
        setSelectionPast(prev => [...prev.slice(-39), normalizeTags(selectedTags)]);
        applyTags(nextTags, Math.min(nextTags.length, limit) - 1, false);
    };

    const handleRandomize = () => {
        if (allCurrentLibraryItems.length === 0) return;
        const targetIndex = getTargetSlotIndex();
        const candidateItems = allCurrentLibraryItems.filter(item => !itemMatchesAnyTag(item, selectedTags));
        if (candidateItems.length === 0) return;
        const randomItem = candidateItems[Math.floor(Math.random() * candidateItems.length)];
        if (randomItem) {
            const isCurrentlySelected = itemMatchesAnyTag(randomItem, selectedTags);
            const nextSlots = [...slotTags];
            nextSlots[targetIndex] = randomItem.name;
            applyTags(nextSlots.filter(Boolean), selectedTags.length + 1 >= limit ? targetIndex : Math.min(limit - 1, targetIndex + 1));
            if (isEngineLexicon && !isCurrentlySelected && randomItem.directive && typeof randomItem.directive === 'object') {
                const temps: ('bright' | 'dark' | 'tension')[] = ['bright', 'dark', 'tension'];
                const randomTemp = temps[Math.floor(Math.random() * temps.length)];
                setFace(randomItem.name, randomTemp);
            }

            setTimeout(() => {
                handleScrollToCard(randomItem.name);
            }, 100);
        }
    };

    const handleCopyItem = (item: any) => {
        const nameCn = displayCnTag(item.name);
        const nameEn = getEnglishLabel(item.name, item.nameEn);

        let text = "";
        if (driverType === DriverType.AESTHETIC) {
            if (currentLang === 'CN') {
                const parts = [nameCn];
                if (item.essence) parts.push(item.essence);
                else {
                    if (item.def) parts.push(item.def);
                    if (item.core) parts.push(item.core);
                }
                text = parts.join('\n');
            } else {
                const parts = [nameEn].filter(Boolean);
                if (item.essenceEn) parts.push(item.essenceEn);
                else {
                    if (item.defEn) parts.push(item.defEn);
                    if (item.coreEn) parts.push(item.coreEn);
                }
                text = parts.join('\n');
            }
        } else {
            const name = currentLang === 'EN' ? nameEn : nameCn;
            const essence = getLocalizedText(item, 'essence', 'essenceEn', currentLang);
            const def = getLocalizedText(item, 'def', 'defEn', currentLang);
            const core = getLocalizedText(item, 'core', 'coreEn', currentLang);
            const parts = [name].filter(Boolean);
            if (essence) {
                parts.push(essence);
            } else {
                if (def) parts.push(def);
                if (core) parts.push(core);
            }
            const reality = getLocalizedText(item, 'reality', 'realityEn', currentLang);
            if (reality) {
                parts.push(reality);
            }
            text = parts.join('\n');
        }
        navigator.clipboard.writeText(text);
        setCopiedItemId(item.id || item.name);
        setTimeout(() => setCopiedItemId(null), 1000);
    };

    const handleScrollToCard = (tagName: string) => {
        const lookupGroups = isPersonaLibrary ? fullPersonaGroups : isStyleProtocolLibrary ? fullProtocolGroups : processedGroups;
        const item = lookupGroups.flatMap(g => g.items || []).find(i => itemTagMatches(i, tagName));
        if (!item) return;

        const groupContainingTag = lookupGroups.find(g => (g.items || []).some(i => itemTagMatches(i, tagName)));

        if (isPersonaLibrary) {
            const itemCategory = String(item.personaCategory || (currentLang === 'EN' ? 'Uncategorized Persona' : '未分类人设'));
            if (itemCategory && activePersonaCategoryId !== itemCategory) {
                setActivePersonaCategory(itemCategory);
            }
        }

        if (isStyleProtocolLibrary) {
            const itemCategory = String(item.protocolCategory || item.group || (currentLang === 'EN' ? 'Uncategorized Protocol' : '未分类协议'));
            if (itemCategory && activeProtocolCategoryId !== itemCategory) {
                setActiveProtocolCategory(itemCategory);
            }
        }

        if (groupContainingTag && activeTab !== groupContainingTag.id) {
            setActiveTab(groupContainingTag.id);
            setSearchQuery("");
        }

        setTimeout(() => {
            const elId = `card-${(item.id || item.name).replace(/\s+/g, '_')}`;
            const el = document.getElementById(elId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.style.transition = 'all 0.3s ease';
                el.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    el.style.transform = '';
                }, 1000);
            }
        }, 100);
    };

    const getThemeColor = () => {
        if (globalTheme === 'retro') return { text: "text-[var(--mist-active-accent)]", border: "border-[var(--mist-active-accent)]/50", hex: "var(--mist-active-accent)" };
        return { text: "text-[var(--mist-active-accent)]", border: "border-[var(--mist-active-accent)]/50", hex: "var(--mist-active-accent)" };
    };
    const themeData = getThemeColor();
    const themeText = themeData.text;
    const themeBorder = themeData.border;
    const themeHex = themeData.hex;

    const getLibraryTotalCount = () => {
        if (blockId === 'skin_genre') {
            return GENRE_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
        }
        let count = 0;
        libraryData.forEach(cat => count += (cat.items?.length || 0));
        return count;
    };

    const getLexiconIdentityLine = () => {
        if (currentLang === 'EN') {
            if (isEngineLexicon) {
                const match = blockDisplayName.match(/M\d+[AB]?/i)?.[0] || 'M';
                return `${match} defines this parameter's place in the engine: its narrative authority, desire pressure, and generative instruction role.`;
            }
            if (blockId.includes('skin')) {
                return 'This surface lexicon gives the engine a visible historical, bodily, social, and atmospheric form.';
            }
            return 'This lexicon translates abstract theory into selectable narrative decisions for the current module.';
        }

        if (isEngineLexicon) {
            const match = blockDisplayName.match(/M\d+[AB]?/)?.[0] || 'M参数';
            const cleanName = blockDisplayName.replace(/^M\d+[AB]?[.。]\s*/, '');
            return `${match} 词库说明「${cleanName}」在公式中的位格：它决定叙事权力、欲望压力与生成指令如何进入结构。`;
        }
        if (blockId.includes('skin')) {
            return '这个表层词库说明故事如何获得可见的历史外壳、身体坐标、社会肌理与氛围材质。';
        }
        return '这个词库把抽象理论参数转译为当前模块可选择、可组合、可进入生成流程的叙事决策。';
    };

    if (!isOpen) return null;

    return createPortal(
        <>
        <div className={`fixed inset-0 z-[100000] flex items-center justify-center ${globalTheme === 'retro' ? 'bg-[#8B261D]/5 backdrop-blur-md' : 'bg-black/80 backdrop-blur-[12px]'} p-0 md:p-2 xl:p-4 animate-in fade-in duration-500 pointer-events-auto`} onClick={onClose}>
            <div className={`mist-lexicon-modal w-full xl:w-[98vw] max-w-[1800px] h-full md:h-[96vh] ${globalTheme === 'retro' ? 'bg-[#EBE7DF] border-[#8B261D] border-2 shadow-[20px_20px_0px_0px_rgba(139,38,29,0.1)]' : `bg-[#080808] border-zinc-800/50 shadow-[0_0_100px_rgba(0,0,0,0.8)]`} md:rounded-3xl flex flex-col overflow-hidden relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform scale-100 animate-in zoom-in-95`} onClick={(e) => e.stopPropagation()}>
                <div className={`h-24 md:h-28 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/10 bg-[#F5F2EA]' : `bg-black/40 backdrop-blur-md border-[var(--mist-active-accent)]/10`} flex items-center justify-between px-8 md:px-12 shrink-0 z-20 relative`}>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-4 mb-1">
                                <h3 className={`text-2xl md:text-3xl font-serif font-black tracking-wider ${globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                                    {blockDisplayName}
                                </h3>
                                <div className={`px-3 py-1 rounded-full border ${themeBorder.replace('/50', '')} ${globalTheme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-white/5'} text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] ${themeText} flex items-center gap-2`}>
                                   <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${globalTheme === 'retro' ? 'bg-[#8B261D]' : themeText.replace('text-', 'bg-')}`} />
                                   {currentLang === 'EN' ? `TOTAL ${getLibraryTotalCount()} · SELECT ${limit}` : `统计 ${getLibraryTotalCount()} · 可选 ${limit}`}
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className={`max-w-[620px] text-[11px] md:text-xs font-medium tracking-[0.04em] leading-relaxed ${globalTheme === 'retro' ? 'text-[#3D1A16]/65' : 'text-zinc-500'}`}>
                                    {getLexiconIdentityLine()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 flex-1 justify-end ml-4 overflow-hidden">
                        <div className="mist-lexicon-selection-search shrink-0 flex flex-col gap-1">
                            <div className="mist-lexicon-selection-row flex items-center gap-2 overflow-x-auto custom-scrollbar justify-end max-w-full pr-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                <div className={`mist-lexicon-history-controls shrink-0 flex items-center rounded-lg border overflow-hidden ${globalTheme === 'retro' ? 'bg-white/55 border-[#8B261D]/20' : 'bg-black/40 border-white/10'}`}>
                                    <button
                                        type="button"
                                        onClick={handleSelectionUndo}
                                        disabled={selectionPast.length === 0}
                                        className="mist-lexicon-history-button"
                                        title={currentLang === 'EN' ? 'Undo selection' : '撤销选择'}
                                        aria-label={currentLang === 'EN' ? 'Undo selection' : '撤销选择'}
                                    >
                                        <Undo2 size={14} />
                                    </button>
                                    <div className={`mist-lexicon-soft-separator w-px h-4 ${globalTheme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-white/10'}`} />
                                    <button
                                        type="button"
                                        onClick={handleSelectionRedo}
                                        disabled={selectionFuture.length === 0}
                                        className="mist-lexicon-history-button"
                                        title={currentLang === 'EN' ? 'Redo selection' : '前进选择'}
                                        aria-label={currentLang === 'EN' ? 'Redo selection' : '前进选择'}
                                    >
                                        <Redo2 size={14} />
                                    </button>
                                </div>

                                {slotTags.map((tag, slotIndex) => {
                                    if (!tag) {
                                        const isActiveSlot = activeSlotIndex === slotIndex;
                                        return (
                                            <button
                                                key={`slot-empty-${slotIndex}`}
                                                type="button"
                                                onClick={() => setActiveSlotIndex(slotIndex)}
                                                className={`mist-lexicon-slot ${isActiveSlot ? 'is-active' : ''} is-empty flex shrink-0 items-center gap-1.5 h-8 px-2.5 rounded-lg border text-[10px] whitespace-nowrap font-black transition-all duration-300 active:scale-95`}
                                                title={currentLang === 'EN' ? `Slot ${slotIndex + 1}` : `槽位 ${slotIndex + 1}`}
                                            >
                                                <span className="mist-lexicon-slot-index">{slotIndex + 1}</span>
                                                <span>{currentLang === 'EN' ? 'EMPTY' : '空位'}</span>
                                            </button>
                                        );
                                    }

                                    const item = filteredItems.find(i => itemTagMatches(i, tag)) || processedGroups.flatMap(g => g.items || []).find(i => itemTagMatches(i, tag));
                                    const displayTag = item ? getLocalizedItemName(item) : displayCnTag(tag);
                                    const isActiveSlot = activeSlotIndex === slotIndex;

                                    // Get temperature color for this tag (only for engine lexicons)
                                    const tagTemp = isEngineLexicon ? faceState[tag] : undefined;
                                    let tempColorClass = '';
                                    let tempBorderClass = '';
                                    if (tagTemp === 'bright') {
                                        tempColorClass = globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-amber-400';
                                        tempBorderClass = globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-amber-500/30';
                                    } else if (tagTemp === 'dark') {
                                        tempColorClass = globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-indigo-400';
                                        tempBorderClass = globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-indigo-500/30';
                                    } else if (tagTemp === 'tension') {
                                        tempColorClass = globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-violet-400';
                                        tempBorderClass = globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-violet-500/30';
                                    } else {
                                        tempColorClass = globalTheme === 'retro' ? 'text-[#8B261D]' : themeText;
                                        tempBorderClass = globalTheme === 'retro' ? 'border-[#8B261D]/30' : 'border-white/10';
                                    }

                                    return (
                                        <div
                                            key={`${tag}-${slotIndex}`}
                                            role="button"
                                            tabIndex={0}
                                            onClick={() => {
                                                setActiveSlotIndex(slotIndex);
                                                handleScrollToCard(tag);
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    setActiveSlotIndex(slotIndex);
                                                    handleScrollToCard(tag);
                                                }
                                            }}
                                            className={`mist-lexicon-slot ${isActiveSlot ? 'is-active' : ''} is-filled flex shrink-0 items-center gap-1.5 h-8 px-2.5 rounded-lg text-[10px] whitespace-nowrap font-black border transition-all duration-300 transform active:scale-95 group shadow-sm ${tempBorderClass} ${tempColorClass}`}
                                        >
                                            <span className="mist-lexicon-slot-index">{slotIndex + 1}</span>
                                            <span className="max-w-[130px] truncate">{displayTag}</span>
                                            <button
                                                type="button"
                                                onClick={(e) => { e.stopPropagation(); removeSlotTag(slotIndex); }}
                                                className="opacity-50 hover:opacity-100 group-hover:rotate-90 transition-all ml-1 cursor-pointer p-0.5 rounded-full hover:bg-black/10"
                                                title={currentLang === 'EN' ? 'Remove' : '删除'}
                                                aria-label={currentLang === 'EN' ? `Remove ${displayTag}` : `删除 ${displayTag}`}
                                            >
                                                <X size={12} />
                                            </button>
                                        </div>
                                    );
                                })}

                                {selectedTags.length === 0 && (
                                    <div className="hidden 2xl:flex items-center gap-2 text-zinc-500 whitespace-nowrap opacity-60">
                                         <Info size={13} className={themeText} />
                                         <span className={`text-[10px] font-medium uppercase tracking-[0.16em] ${globalTheme === 'retro' ? 'text-[#8B261D]/70' : ''}`}>
                                             {currentLang === 'EN' ? "Select desired parameters" : "请从下方词库中选择所需的拓扑参数"}
                                         </span>
                                    </div>
                                )}
                            </div>

                            <div className="relative hidden lg:block group">
                                <Search size={13} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${globalTheme === 'retro' ? 'text-[#8B261D]/40' : 'text-zinc-600 group-focus-within:text-white'}`} />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={currentLang === 'EN' ? "SEARCH..." : "搜索词条..."}
                                    className={`w-full border rounded-xl pl-8 pr-3 py-2 text-xs focus:outline-none transition-all duration-500 ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black placeholder-[#8B261D]/30 focus:border-[#8B261D]/50' : `bg-black/60 ${themeText} border-white/10 focus:border-white/20 placeholder-zinc-700 shadow-xl shadow-black/50`}`}
                                />
                            </div>
                        </div>

                        {isEngineLexicon && (
                            <div className={`mist-lexicon-mode-stack shrink-0 mr-1 flex flex-col rounded-xl border overflow-hidden backdrop-blur-sm ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/10 shadow-sm' : 'bg-white/5 border-white/5'}`}>
                                <div className={`mist-lexicon-mode-row flex items-center p-1 gap-0.5 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/10' : 'border-white/5'}`}>
                                    <button
                                        onClick={() => setContentVersion('academic')}
                                        className={`mist-lexicon-mode-button ${contentVersion === 'academic' ? 'is-active' : 'is-inactive'} flex items-center justify-center gap-1.5 px-3 h-7 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                                            contentVersion === 'academic'
                                                ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : `${themeText} bg-zinc-800`)
                                                : (globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:bg-[#8B261D]/5' : 'text-zinc-400 hover:bg-white/10 hover:text-white')
                                        }`}
                                        title={currentLang === 'EN' ? "Academic Version" : "学术版"}
                                    >
                                        <span className="hidden xl:inline">{currentLang === 'EN' ? 'Academic' : '学术版'}</span>
                                        <span className="xl:hidden">{currentLang === 'EN' ? 'AC' : '学术'}</span>
                                    </button>
                                    <button
                                        onClick={() => setContentVersion('ai')}
                                        className={`mist-lexicon-mode-button ${contentVersion === 'ai' ? 'is-active' : 'is-inactive'} flex items-center justify-center gap-1.5 px-3 h-7 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                                            contentVersion === 'ai'
                                                ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : `${themeText} bg-zinc-800`)
                                                : (globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:bg-[#8B261D]/5' : 'text-zinc-400 hover:bg-white/10 hover:text-white')
                                        }`}
                                        title={currentLang === 'EN' ? "AI Directive Version" : "AI指令版"}
                                    >
                                        <span className="hidden xl:inline">{currentLang === 'EN' ? 'AI Directive' : 'AI指令版'}</span>
                                        <span className="xl:hidden">AI</span>
                                    </button>
                                </div>
                                <div className={`mist-lexicon-mode-row flex items-center p-1 gap-0.5 ${effectiveContentVersion !== 'ai' ? 'opacity-45' : ''}`}>
                                    <button
                                        onClick={() => setDirectiveTemp('bright')}
                                        disabled={effectiveContentVersion !== 'ai'}
                                    className={`mist-lexicon-face-button ${effectiveContentVersion === 'ai' && directiveTemp === 'bright' ? 'is-active' : 'is-inactive'} flex items-center justify-center gap-1.5 px-3 h-7 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                                        effectiveContentVersion === 'ai' && directiveTemp === 'bright'
                                            ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-amber-500/20 text-amber-400')
                                            : (globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:bg-[#8B261D]/5' : 'text-zinc-400 hover:bg-white/10 hover:text-amber-400/60')
                                    } ${effectiveContentVersion !== 'ai' ? 'cursor-not-allowed hover:bg-transparent' : ''}`}
                                    title={currentLang === 'EN' ? "Bright" : "亮面"}
                                >
                                    <span className="hidden xl:inline">{currentLang === 'EN' ? 'Bright' : '亮面'}</span>
                                    <span className="xl:hidden">{currentLang === 'EN' ? 'B' : '亮'}</span>
                                </button>
                                <button
                                    onClick={() => setDirectiveTemp('dark')}
                                    disabled={effectiveContentVersion !== 'ai'}
                                    className={`mist-lexicon-face-button ${effectiveContentVersion === 'ai' && directiveTemp === 'dark' ? 'is-active' : 'is-inactive'} flex items-center justify-center gap-1.5 px-3 h-7 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                                        effectiveContentVersion === 'ai' && directiveTemp === 'dark'
                                            ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-indigo-500/20 text-indigo-400')
                                            : (globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:bg-[#8B261D]/5' : 'text-zinc-400 hover:bg-white/10 hover:text-indigo-400/60')
                                    } ${effectiveContentVersion !== 'ai' ? 'cursor-not-allowed hover:bg-transparent' : ''}`}
                                    title={currentLang === 'EN' ? "Dark" : "暗面"}
                                >
                                    <span className="hidden xl:inline">{currentLang === 'EN' ? 'Dark' : '暗面'}</span>
                                    <span className="xl:hidden">{currentLang === 'EN' ? 'D' : '暗'}</span>
                                </button>
                                <button
                                    onClick={() => setDirectiveTemp('tension')}
                                    disabled={effectiveContentVersion !== 'ai'}
                                    className={`mist-lexicon-face-button ${effectiveContentVersion === 'ai' && directiveTemp === 'tension' ? 'is-active' : 'is-inactive'} flex items-center justify-center gap-1.5 px-3 h-7 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                                        effectiveContentVersion === 'ai' && directiveTemp === 'tension'
                                            ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-violet-500/20 text-violet-400')
                                            : (globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:bg-[#8B261D]/5' : 'text-zinc-400 hover:bg-white/10 hover:text-violet-400/60')
                                    } ${effectiveContentVersion !== 'ai' ? 'cursor-not-allowed hover:bg-transparent' : ''}`}
                                    title={currentLang === 'EN' ? "Tension" : "张力"}
                                >
                                    <span className="hidden xl:inline">{currentLang === 'EN' ? 'Tension' : '张力'}</span>
                                    <span className="xl:hidden">{currentLang === 'EN' ? 'T' : '张'}</span>
                                </button>
                                </div>
                            </div>
                        )}

                        <div className={`mist-lexicon-action-stack shrink-0 flex flex-col rounded-xl border backdrop-blur-sm overflow-hidden ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/10 shadow-sm' : 'bg-white/5 border-white/5'}`}>
                            <div className={`flex items-center p-1 gap-0.5 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/10' : 'border-white/5'}`}>
                                <button
                                    onClick={handleRandomize}
                                    className={`mist-lexicon-action-button flex items-center gap-1.5 px-3 h-8 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all ${globalTheme === 'retro' ? 'text-[#8B261D]' : `${themeText} hover:bg-white/10`} active:scale-95`}
                                    title={currentLang === 'EN' ? "RANDOM" : "随机"}
                                >
                                    <Dice5 size={14} />
                                    <span className="hidden xl:inline">{currentLang === 'EN' ? "RANDOM" : "随机"}</span>
                                </button>

                                {onClear && (
                                    <button
                                        onClick={() => applyTags([], 0)}
                                        disabled={selectedTags.length === 0}
                                        className={`flex items-center gap-1.5 px-3 h-8 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${selectedTags.length > 0 ? 'hover:bg-red-500/10 hover:text-red-500 cursor-pointer' : 'opacity-50 cursor-not-allowed'} group ${globalTheme === 'retro' ? 'text-black/40' : 'text-zinc-400'}`}
                                        title={currentLang === 'EN' ? "CLEAR" : "重置"}
                                    >
                                        <Trash2 size={14} className={selectedTags.length > 0 ? "group-hover:rotate-12 transition-transform" : ""} />
                                        <span className="hidden xl:inline">{currentLang === 'EN' ? "CLEAR" : "重置"}</span>
                                        <span className={`bg-red-500/20 px-1.5 py-0.5 rounded-full text-[9px] text-red-500`}>{selectedTags.length}</span>
                                    </button>
                                )}

                                <button
                                    onClick={() => setCurrentLang(prev => prev === 'CN' ? 'EN' : 'CN')}
                                    className={`mist-lexicon-lang-button w-8 h-8 flex items-center justify-center rounded-lg transition-all text-[10px] font-black tracking-widest ${globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-400 hover:bg-white/10 hover:text-white'}`}
                                    title={currentLang === 'CN' ? "Switch to English" : "切换中文"}
                                >
                                    {currentLang === 'CN' ? '中' : 'EN'}
                                </button>

                                <div className={`mist-lexicon-soft-separator w-[1px] h-4 mx-1 ${globalTheme === 'retro' ? 'bg-[#8B261D]/10' : 'bg-[var(--mist-active-accent)]/15'}`} />

                                <button
                                    onClick={onClose}
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all hover:bg-red-500 hover:text-white ${globalTheme === 'retro' ? 'text-black/40' : 'text-zinc-400'}`}
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <span className={`h-7 px-3 flex items-center justify-end text-[9px] font-mono whitespace-nowrap tracking-widest opacity-80 ${globalTheme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'}`}>
                                {currentLang === 'EN' ? "PRESS ESC TO CLOSE" : "点击 ESC 关闭当前面板"}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
                    <div className={`w-full ${useTwoLevelSidebar ? 'md:w-[34rem]' : 'md:w-64'} border-r border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/10 bg-[#FAF8F4]' : `bg-black/60`} flex shrink-0 overflow-hidden`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}1a` } : {}}>
                        <div className={`flex flex-col shrink-0 overflow-y-auto custom-scrollbar ${useTwoLevelSidebar ? 'w-64 border-r border-dashed' : 'w-full'} ${globalTheme === 'retro' ? 'border-[#8B261D]/10' : 'border-white/5'}`}>
                        {/* Alt-group toggle for M5 Four Discourses view */}
                        {(() => {
                            const hasAltGroups = libraryData.length === 1 && (libraryData[0].items || []).some(i => i.altGroup);
                            if (!hasAltGroups) return null;
                            return (
                                <div className={`p-2 border-b border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/10' : 'border-white/5'}`}>
                                    <button
                                        onClick={() => { setUseAltGroup(prev => !prev); setActiveTab(null); }}
                                        className={`w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all border ${useAltGroup
                                            ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white border-[#8B261D]' : `bg-zinc-800 ${themeText} ${themeBorder.replace('/50', '')}`)
                                            : (globalTheme === 'retro' ? 'bg-white/60 text-[#8B261D]/70 border-[#8B261D]/20 hover:bg-white' : 'bg-black/40 text-zinc-400 border-white/10 hover:text-white hover:border-white/20')
                                        }`}
                                    >
                                        <ArrowLeftRight size={13} />
                                        {useAltGroup
                                            ? (currentLang === 'EN' ? 'FOUR DISCOURSES VIEW' : '四话语分类')
                                            : (currentLang === 'EN' ? 'SWITCH TO DISCOURSES' : '切换：四话语分类')
                                        }
                                    </button>
                                </div>
                            );
                        })()}
                        {useTwoLevelSidebar && (isPersonaLibrary ? personaCategoryOptions : protocolCategoryOptions).length > 0 && (
                            <div className={`p-2 ${globalTheme === 'retro' ? 'bg-white/35' : 'bg-black/20'}`}>
                                <div className={`mb-2 flex items-center justify-between px-1 text-[9px] font-black uppercase tracking-[0.18em] ${globalTheme === 'retro' ? 'text-[#8B261D]/65' : 'text-zinc-500'}`}>
                                    <span>
                                        {isPersonaLibrary
                                            ? (currentLang === 'EN' ? 'L1 Persona' : '一级人设')
                                            : (currentLang === 'EN' ? 'L1 Protocol' : '一级协议')
                                        }
                                    </span>
                                    <span className="font-mono">{(isPersonaLibrary ? personaCategoryOptions : protocolCategoryOptions).length}</span>
                                </div>
                                <div className="space-y-1">
                                    {(isPersonaLibrary ? personaCategoryOptions : protocolCategoryOptions).map(category => {
                                        const isActive = isPersonaLibrary ? activePersonaCategoryId === category.id : activeProtocolCategoryId === category.id;
                                        return (
                                            <button
                                                key={category.id}
                                                type="button"
                                                onClick={() => {
                                                    if (isPersonaLibrary) {
                                                        setActivePersonaCategory(category.id);
                                                    } else {
                                                        setActiveProtocolCategory(category.id);
                                                    }
                                                    setActiveTab(null);
                                                    setSearchQuery("");
                                                }}
                                                className={`w-full rounded-lg border px-2.5 py-2.5 text-left transition-all duration-200 ${
                                                    isActive
                                                        ? (globalTheme === 'retro' ? 'border-[#8B261D] bg-[#8B261D] text-white shadow-sm' : `border-[var(--mist-active-accent)] bg-[rgba(var(--mist-active-accent-rgb),0.12)] text-[var(--mist-active-accent)]`)
                                                        : (globalTheme === 'retro' ? 'border-[#8B261D]/12 bg-white/45 text-[#3D1A16]/72 hover:border-[#8B261D]/35 hover:text-[#8B261D]' : 'border-white/8 bg-zinc-950/40 text-zinc-400 hover:border-white/20 hover:text-zinc-100')
                                                }`}
                                            >
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="truncate text-[12px] font-black tracking-[0.06em]">{category.name}</span>
                                                    <span className={`shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[9px] ${isActive ? 'bg-white/18' : (globalTheme === 'retro' ? 'bg-[#8B261D]/8 text-[#8B261D]/60' : 'bg-white/5 text-zinc-500')}`}>
                                                        {category.count}
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                        {!useTwoLevelSidebar && (
                            <div className="p-2 space-y-1">
                                {processedGroups.map(group => {
                                    const groupItemNames = new Set((group.items || []).map(i => i.name));
                                    const selectedCount = selectedTags.filter(tag => groupItemNames.has(tag)).length;
                                    const isActive = activeTab === group.id && !searchQuery;
                                    return (
                                        <button key={group.id} onClick={() => { setActiveTab(group.id); setSearchQuery(""); }} className={`w-full text-left px-3 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-between group ${isActive ? (globalTheme === 'retro' ? `bg-[#F9F7F1] border-l-2 border-[#8B261D] text-[#8B261D] shadow-sm` : `bg-zinc-800 border-l-2 ${themeBorder.replace('/50', '')} ${themeText}`) : (globalTheme === 'retro' ? 'text-[#3D1A16]/70 hover:text-[#8B261D] hover:bg-white/50' : 'text-zinc-200 hover:text-white hover:bg-zinc-900/50')}`}><span className="truncate pr-2">{group.name} <span className="opacity-40 text-[10px] ml-1 font-normal">({group.items?.length || 0})</span></span>{selectedCount > 0 && <span className={`flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold rounded-full ${isActive ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-white text-black') : (globalTheme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-700 text-zinc-100')}`}>{selectedCount}</span>}</button>
                                    );
                                })}
                            </div>
                        )}
                        </div>
                        {useTwoLevelSidebar && (
                        <div className="flex w-72 shrink-0 flex-col overflow-y-auto custom-scrollbar">
                            <div className={`px-3 pt-3 pb-1 text-[9px] font-black uppercase tracking-[0.18em] ${globalTheme === 'retro' ? 'text-[#8B261D]/65' : 'text-zinc-500'}`}>
                                {isPersonaLibrary
                                    ? (currentLang === 'EN' ? 'Subgroups' : '二级分类')
                                    : (currentLang === 'EN' ? 'Design Families' : '二级家族')
                                }
                            </div>
                            <div className="p-2 space-y-1">
                            {processedGroups.map(group => {
                                const groupItemNames = new Set((group.items || []).map(i => i.name));
                                const selectedCount = selectedTags.filter(tag => groupItemNames.has(tag)).length;
                                const isActive = activeTab === group.id && !searchQuery;
                                return (
                                    <button key={group.id} onClick={() => { setActiveTab(group.id); setSearchQuery(""); }} className={`w-full text-left px-3 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-between group ${isActive ? (globalTheme === 'retro' ? `bg-[#F9F7F1] border-l-2 border-[#8B261D] text-[#8B261D] shadow-sm` : `bg-zinc-800 border-l-2 ${themeBorder.replace('/50', '')} ${themeText}`) : (globalTheme === 'retro' ? 'text-[#3D1A16]/70 hover:text-[#8B261D] hover:bg-white/50' : 'text-zinc-200 hover:text-white hover:bg-zinc-900/50')}`}><span className="truncate pr-2">{group.name} <span className="opacity-40 text-[10px] ml-1 font-normal">({group.items?.length || 0})</span></span>{selectedCount > 0 && <span className={`flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold rounded-full ${isActive ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-white text-black') : (globalTheme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-700 text-zinc-100')}`}>{selectedCount}</span>}</button>
                                );
                            })}
                            </div>
                        </div>
                        )}
                    </div>
                    <div className={`flex-1 overflow-y-auto custom-scrollbar p-4 md:p-8 ${globalTheme === 'retro' ? 'bg-white' : 'bg-[#050505]'}`}>

                        {searchQuery && (
                            <div className="mb-4 text-xs text-zinc-500 font-mono uppercase tracking-widest flex items-center gap-2">
                                <Search size={12} /><span>{currentLang === 'EN' ? "Search Results" : "搜索结果"} ({filteredItems.length})</span>
                            </div>
                        )}
                        <div className={blockId === 'aes_palette_preset' ? "flex flex-col gap-2 pb-20" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 pb-20"}>
                            {filteredItems.map(item => {
                                const isSelected = itemMatchesAnyTag(item, selectedTags);
                                const isCopied = copiedItemId === (item.id || item.name);
                                const isPreset = blockId === 'aes_palette_preset';
                                const itemMechanics = getItemMechanics(item);
                                const effectiveItemTemp = isSelected ? (faceState[item.name] || directiveTemp) : directiveTemp;
                                const isFocused = canFocusTerms && Boolean(focusState[item.name]);
                                const focusLimitReason = getFocusLimitReason(focusState, blockId, item.name, selectedFocusTags, focusUnitMap, focusBlockMap);
                                const focusLimitReached = !isFocused && Boolean(focusLimitReason);
                                const focusLimitTitle = focusLimitReason === 'm'
                                    ? (currentLang === 'EN' ? 'Focus limit: max 2 M-axis terms' : 'M层重点最多2个')
                                    : focusLimitReason === 'surface'
                                        ? (currentLang === 'EN' ? 'Focus limit: max 2 SUR/SV focus groups' : 'SUR/SV重点最多2组')
                                        : (currentLang === 'EN' ? `Focus limit: max ${MAX_FOCUS_TERMS} focus groups` : `重点最多 ${MAX_FOCUS_TERMS} 组`);
                                const itemName = getLocalizedItemName(item);
                                const essenceText = getLocalizedText(item, 'essence', 'essenceEn', currentLang);
                                const defText = getLocalizedText(item, 'def', 'defEn', currentLang);
                                const coreText = getLocalizedText(item, 'core', 'coreEn', currentLang);
                                const topologyText = getLocalizedText(item, 'topology', 'topologyEn', currentLang);
                                const directiveValue = currentLang === 'EN' ? item.directiveEn : item.directive;
                                const directiveText = typeof directiveValue === 'string'
                                    ? directiveValue
                                    : directiveValue?.[effectiveItemTemp];
                                const realityText = getLocalizedText(item, 'reality', 'realityEn', currentLang);
                                const referenceText = getLocalizedText(item, 'reference', 'referenceEn', currentLang);

                                return (
                                    <div key={item.id || item.name}
                                        id={`card-${(item.id || item.name).replace(/\s+/g, '_')}`}
                                        onClick={() => {
                                            const matchedTag = selectedTags.find(tag => itemTagMatches(item, tag));
                                            if (matchedTag) {
                                                removeSelectedTag(matchedTag);
                                                return;
                                            }
                                            applySlotSelection(item.name);
                                            if (isEngineLexicon && item.directive && typeof item.directive === 'object') {
                                                const temps: ('bright' | 'dark' | 'tension')[] = ['bright', 'dark', 'tension'];
                                                const randomTemp = temps[Math.floor(Math.random() * temps.length)];
                                                setFace(item.name, randomTemp);
                                            }
                                        }}
                                        className={`mist-lexicon-item-card ${isSelected ? 'is-selected' : 'is-unselected'} relative flex ${isPreset ? 'flex-row items-center py-2 px-4' : 'flex-col p-5 md:p-6'} text-left rounded-xl border-2 transition-all duration-200 group h-full cursor-pointer hover:scale-[1.02] ${isSelected ? (globalTheme === 'retro' ? `bg-white border-[#8B261D] shadow-sm` : `${themeText} bg-zinc-900 ${themeBorder.replace('/50', '')}`) : (globalTheme === 'retro' ? 'bg-white/60 border-black/5 text-black hover:border-[#8B261D]/40' : 'bg-zinc-900/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-500 hover:text-zinc-100')}`}>

                                        {isPreset && (item as any).colors && (
                                            <div className="flex items-center gap-3 mr-6 shrink-0">
                                                <div className="flex gap-1">
                                                    {(item as any).colors.slice(0, 3).map((c: string, i: number) => (
                                                        <div key={i} className="flex items-center gap-1.5">
                                                            <div className="w-4 h-4 rounded-sm shadow-sm border border-black/5" style={{ backgroundColor: c }} />
                                                            <span className="text-[10px] font-mono uppercase opacity-50 hidden lg:inline">{c}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className={`flex justify-between ${isPreset ? 'flex-1 items-center' : 'w-full items-center mb-3'}`}>
                                            <h4 className={`font-serif font-bold ${isPreset ? 'text-base' : 'text-lg md:text-xl'} leading-tight ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-black/80' : 'text-zinc-100 group-hover:text-white')}`}>{itemName}</h4>
                                            {!isPreset && (
                                                <div className="flex items-center gap-2 shrink-0 ml-3">
                                                    {isSkinSV && item.core && (
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); setProtocolOpenId(item.id || item.name); }}
                                                            className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider transition-all border ${
                                                                globalTheme === 'retro'
                                                                    ? 'bg-transparent text-[#8B261D]/50 border-[#8B261D]/20 hover:border-[#8B261D]/50 hover:text-[#8B261D]'
                                                                    : 'bg-transparent text-zinc-500 border-zinc-700 hover:border-zinc-400 hover:text-zinc-200'
                                                            }`}
                                                        >
                                                            {currentLang === 'EN' ? 'Protocol' : '协议'}
                                                        </button>
                                                    )}
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button onClick={(e) => { e.stopPropagation(); handleCopyItem(item); }} className={`p-1.5 rounded-md ${globalTheme === 'retro' ? 'bg-white border-black/10 hover:bg-[#8B261D]/5 text-[#8B261D]' : 'bg-black/60 border-zinc-700 hover:bg-zinc-700 text-zinc-500 hover:text-white'} border transition-all shadow-sm`} title={currentLang === 'EN' ? "Copy" : "复制"}>{isCopied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {!isPreset && (
                                            <>
                                                {(item as any)._groupName && <div className={`mb-2 text-[9px] ${globalTheme === 'retro' ? 'text-[#8B261D]/50 bg-[#8B261D]/5' : 'text-zinc-500 bg-black/20'} font-mono uppercase tracking-wider px-1.5 py-0.5 rounded w-fit`}>{(item as any)._groupName}</div>}

                                                {/* Temperature / Focus Control */}
                                                {((effectiveContentVersion === 'ai' && item.directive && typeof item.directive === 'object') || canFocusTerms) && (
                                                    <div className="mb-4" onClick={(e) => e.stopPropagation()}>
                                                        <div className="flex gap-2">
                                                            {effectiveContentVersion === 'ai' && item.directive && typeof item.directive === 'object' && (
                                                                <>
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            const isCurrentlySelected = itemMatchesAnyTag(item, selectedTags);
                                                                            const currentTemp = faceState[item.name];

                                                                            if (isCurrentlySelected && currentTemp === 'bright') {
                                                                                removeSelectedTag(item.name);
                                                                            } else {
                                                                                if (!isCurrentlySelected) {
                                                                                    applySlotSelection(item.name);
                                                                                }
                                                                                setFace(item.name, 'bright');
                                                                            }
                                                                        }}
                                                                        className={`mist-lexicon-card-face-button is-bright ${isSelected && faceState[item.name] === 'bright' ? 'is-locked' : ''} ${effectiveItemTemp === 'bright' ? 'is-effective' : ''} flex-1 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all relative ${
                                                                            // Only highlight if selected AND this is the locked temperature
                                                                            isSelected && faceState[item.name] === 'bright'
                                                                                ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-amber-500/30 text-amber-300 border-2 border-amber-500')
                                                                                : effectiveItemTemp === 'bright'
                                                                                ? (globalTheme === 'retro' ? 'bg-white/60 text-[#8B261D]/40 border border-[#8B261D]/10' : 'bg-black/10 text-amber-400/40 border border-amber-500/20')
                                                                                : (globalTheme === 'retro' ? 'bg-white/40 text-[#8B261D]/30 border border-[#8B261D]/10 hover:bg-white/60' : 'bg-black/20 text-zinc-600 border border-white/5 hover:text-amber-400/60 hover:border-amber-500/30')
                                                                        }`}
                                                                    >
                                                                        {currentLang === 'EN' ? 'Bright' : '亮面'}
                                                                        {/* Checkmark for locked selection */}
                                                                        {isSelected && faceState[item.name] === 'bright' && (
                                                                            <span className="ml-1 text-xs">✓</span>
                                                                        )}
                                                                    </button>
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            const isCurrentlySelected = itemMatchesAnyTag(item, selectedTags);
                                                                            const currentTemp = faceState[item.name];

                                                                            if (isCurrentlySelected && currentTemp === 'dark') {
                                                                                removeSelectedTag(item.name);
                                                                            } else {
                                                                                if (!isCurrentlySelected) {
                                                                                    applySlotSelection(item.name);
                                                                                }
                                                                                setFace(item.name, 'dark');
                                                                            }
                                                                        }}
                                                                        className={`mist-lexicon-card-face-button is-dark ${isSelected && faceState[item.name] === 'dark' ? 'is-locked' : ''} ${effectiveItemTemp === 'dark' ? 'is-effective' : ''} flex-1 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all relative ${
                                                                            isSelected && faceState[item.name] === 'dark'
                                                                                ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-indigo-500/30 text-indigo-300 border-2 border-indigo-500')
                                                                                : effectiveItemTemp === 'dark'
                                                                                ? (globalTheme === 'retro' ? 'bg-white/60 text-[#8B261D]/40 border border-[#8B261D]/10' : 'bg-black/10 text-indigo-400/40 border border-indigo-500/20')
                                                                                : (globalTheme === 'retro' ? 'bg-white/40 text-[#8B261D]/30 border border-[#8B261D]/10 hover:bg-white/60' : 'bg-black/20 text-zinc-600 border border-white/5 hover:text-indigo-400/60 hover:border-indigo-500/30')
                                                                        }`}
                                                                    >
                                                                        {currentLang === 'EN' ? 'Dark' : '暗面'}
                                                                        {isSelected && faceState[item.name] === 'dark' && (
                                                                            <span className="ml-1 text-xs">✓</span>
                                                                        )}
                                                                    </button>
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            const isCurrentlySelected = itemMatchesAnyTag(item, selectedTags);
                                                                            const currentTemp = faceState[item.name];

                                                                            if (isCurrentlySelected && currentTemp === 'tension') {
                                                                                removeSelectedTag(item.name);
                                                                            } else {
                                                                                if (!isCurrentlySelected) {
                                                                                    applySlotSelection(item.name);
                                                                                }
                                                                                setFace(item.name, 'tension');
                                                                            }
                                                                        }}
                                                                        className={`mist-lexicon-card-face-button is-tension ${isSelected && faceState[item.name] === 'tension' ? 'is-locked' : ''} ${effectiveItemTemp === 'tension' ? 'is-effective' : ''} flex-1 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all relative ${
                                                                            isSelected && faceState[item.name] === 'tension'
                                                                                ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-violet-500/30 text-violet-300 border-2 border-violet-500')
                                                                                : effectiveItemTemp === 'tension'
                                                                                ? (globalTheme === 'retro' ? 'bg-white/60 text-[#8B261D]/40 border border-[#8B261D]/10' : 'bg-black/10 text-violet-400/40 border border-violet-500/20')
                                                                                : (globalTheme === 'retro' ? 'bg-white/40 text-[#8B261D]/30 border border-[#8B261D]/10 hover:bg-white/60' : 'bg-black/20 text-zinc-600 border border-white/5 hover:text-violet-400/60 hover:border-violet-500/30')
                                                                        }`}
                                                                    >
                                                                        {currentLang === 'EN' ? 'Tension' : '张力'}
                                                                        {isSelected && faceState[item.name] === 'tension' && (
                                                                            <span className="ml-1 text-xs">✓</span>
                                                                        )}
                                                                    </button>
                                                                </>
                                                            )}
                                                            {canFocusTerms && (
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        if (!isFocused && focusLimitReached) return;
                                                                        if (!isSelected && !isFocused) {
                                                                            applySlotSelection(item.name);
                                                                        }
                                                                        setTermFocus(item.name, !isFocused);
                                                                    }}
                                                                    className={`mist-lexicon-card-focus-button flex-1 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all relative border ${
                                                                        isFocused
                                                                            ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white shadow-md border-[#8B261D]' : 'bg-[rgba(var(--mist-active-accent-rgb),0.12)] text-[var(--mist-active-accent)] border-2 border-[var(--mist-active-accent)]')
                                                                            : focusLimitReached
                                                                            ? (globalTheme === 'retro' ? 'bg-white/20 text-[#8B261D]/20 border-[#8B261D]/10 cursor-not-allowed' : 'bg-black/20 text-zinc-700 border-white/5 cursor-not-allowed')
                                                                            : (globalTheme === 'retro' ? 'bg-white/40 text-[#8B261D]/40 border-[#8B261D]/10 hover:bg-white/60 hover:text-[#8B261D]' : 'bg-black/20 text-zinc-600 border-white/5 hover:text-[var(--mist-active-accent)] hover:border-[var(--mist-active-accent)]/40')
                                                                    }`}
                                                                    title={focusLimitReached
                                                                        ? focusLimitTitle
                                                                        : (currentLang === 'EN' ? 'Focus this term: global narrative core' : '重点此词条：作为全局叙事核心')
                                                                    }
                                                                    aria-label={currentLang === 'EN' ? `Focus ${itemName}` : `重点 ${itemName}`}
                                                                    disabled={focusLimitReached}
                                                                >
                                                                    <span>{currentLang === 'EN' ? 'Focus' : '重点'}</span>
                                                                    {isFocused && <span className="ml-1 text-xs">✓</span>}
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                                {/* Content Display Logic */}
                                {effectiveContentVersion === 'academic' ? (
                                    // Academic Version: Show def + core (or essence)
                                    <>
                                        {essenceText ? (
                                                            <div className={`mb-4 w-full`}><p className={`text-sm md:text-base leading-relaxed opacity-90 font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-white transition-colors')}`}>{essenceText}</p></div>
                                                        ) : (
                                                            <>
                                                                {defText && (
                                                                    <div className={`text-sm md:text-base leading-relaxed mb-3 font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white') : (globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200 group-hover:text-white transition-colors')}`}>
                                                                        <span className="mr-1">
                                                                            {blockId === 'skin_era' ? (currentLang === 'EN' ? "Background:" : "时空背景:") : blockId === 'skin_society' ? (currentLang === 'EN' ? "Social:" : "社会描写:") : (currentLang === 'EN' ? "Def:" : "定义:")}
                                                                        </span>
                                                                        <span>{defText}</span>
                                                                    </div>
                                                                )}
                                                                {coreText && !isSkinSV && (
                                                                    <div className={`text-sm md:text-base font-mono tracking-tight mb-4 ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-[#8B261D]/80 group-hover:text-[#8B261D]' : 'text-zinc-300 group-hover:text-zinc-100 transition-colors')}`}>
                                                                        <span className="mr-1">
                                                                            {blockId === 'skin_era' ? (currentLang === 'EN' ? "Core Tension:" : "核心张力:") : (currentLang === 'EN' ? "Core:" : "核心逻辑:")}
                                                                        </span>
                                                                        <span>{coreText}</span>
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}
                                                    </>
                                                ) : (
                                                    // AI Directive Version: Show topology first, then directive based on temperature
                                                    <>
                                                        {/* Topology Field */}
                                                        {topologyText && (
                                                            <div className={`mb-4 pb-3 border-b border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-white/10'}`}>
                                                                <div className={`text-xs md:text-sm leading-relaxed font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-[#3D1A16]/80' : 'text-zinc-400 group-hover:text-zinc-300 transition-colors')}`}>
                                                                    <span className="mr-1 opacity-60 font-bold uppercase tracking-wider">
                                                                        {currentLang === 'EN' ? 'Topology:' : '拓扑结构:'}
                                                                    </span>
                                                                    <span>{topologyText}</span>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Directive Field */}
                                                        {directiveText ? (
                                                            <div className={`text-sm md:text-base leading-relaxed mb-4 font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white') : (globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200 group-hover:text-white transition-colors')}`}>
                                                                <span>{directiveText}</span>
                                                            </div>
                                                        ) : (
                                                            // Fallback: If no directive, show def+core
                                                            <>
                                                                {defText && (
                                                                    <div className={`text-sm md:text-base leading-relaxed mb-3 font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white') : (globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200 group-hover:text-white transition-colors')}`}>
                                                                        <span className="mr-1 opacity-60">{currentLang === 'EN' ? "No directive available" : "无AI指令"}</span>
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                                {realityText && <div className={`mt-3 pt-3 border-t border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-white/10'} w-full`}><p className={`text-xs md:text-sm leading-relaxed ${globalTheme === 'retro' ? 'text-[#8B261D]/80' : 'text-zinc-400'}`}><span className="opacity-60 mr-1">{currentLang === 'EN' ? 'REALITY:' : '现实隐喻:'}</span>{realityText}</p></div>}
                                                {blockId === 'skin_volume' && itemMechanics && (
                                                    <div className={`mt-3 pt-3 border-t border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-white/10'} w-full`}>
                                                        <p className={`whitespace-pre-line text-[10px] md:text-xs font-mono leading-relaxed ${globalTheme === 'retro' ? 'text-[#8B261D]/75' : 'text-zinc-400 group-hover:text-zinc-300'} transition-colors`}>
                                                            <span className="mr-1 font-black uppercase tracking-wider">{currentLang === 'EN' ? 'MECHANICS:' : '字数机制:'}</span>
                                                            {itemMechanics}
                                                        </p>
                                                    </div>
                                                )}
                                                {referenceText && <div className={`mt-2 pt-2 border-t border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-white/10'} w-full`}><p className={`text-[10px] md:text-xs font-mono leading-relaxed ${globalTheme === 'retro' ? 'text-[#8B261D]/70' : 'text-zinc-400 group-hover:text-zinc-300'} transition-colors`}><span className="mr-1">{currentLang === 'EN' ? 'REF:' : '参考:'}</span>{referenceText}</p></div>}
                                                {/* DISPLAY PRESET COLORS */}
                                                {(item as any).colors && (
                                                    <div className="mt-4 flex gap-1.5 overflow-hidden">
                                                        {(item as any).colors.slice(0, 5).map((c: string, i: number) => (
                                                            <div key={i} className="w-5 h-5 rounded-full border border-black/10 shadow-sm shrink-0" style={{ backgroundColor: c }} />
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {filteredItems.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-zinc-600">
                                <Search size={32} className="mb-4 opacity-50" /><p className="text-sm font-mono uppercase tracking-widest">{currentLang === 'EN' ? "No items found." : "未找到相关条目"}</p>
                            </div>
                        )}
                    </div>
                </div>
                {onAddCustomDef && (
                    <div className={`p-4 border-t ${globalTheme === 'retro' ? 'border-[#8B261D]/10 bg-[#F5F2EA]' : `bg-[#0c0c0c]`} shrink-0`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}1a` } : {}}>
                        {!showCustomInput ? (
                            <button onClick={() => setShowCustomInput(true)} className={`w-full py-3 rounded-lg border border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/30 text-[#8B261D]/50 hover:bg-white/40' : `text-zinc-500 hover:text-white hover:bg-zinc-900`} transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}1a` } : {}}><Plus size={14} /> {currentLang === 'EN' ? "Custom term / AI term draft" : "自定义词条 / AI正式词条草稿"}</button>
                        ) : (
                            <div className={`space-y-3 p-4 rounded-xl border ${globalTheme === 'retro' ? 'bg-[#F2EDDE] border-[#8B261D]/20 shadow-sm' : 'bg-zinc-900 border-zinc-700'}`}>
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <div className={`text-xs font-black uppercase tracking-[0.18em] ${globalTheme === 'retro' ? 'text-[#8B261D]' : themeText}`}>
                                            {currentLang === 'EN' ? 'Current target' : '当前位置生成目标'}
                                        </div>
                                        <div className={`mt-1 text-[11px] leading-relaxed ${globalTheme === 'retro' ? 'text-[#3D1A16]/65' : 'text-zinc-400'}`}>
                                            {blockDisplayName}
                                            {activeGroupForCustom?.groupName ? ` / ${activeGroupForCustom.groupName}` : ''}
                                        </div>
                                    </div>
                                    {isAdmin && (
                                        <span
                                            className="rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em]"
                                            style={{
                                                borderColor: 'rgba(var(--mist-active-accent-rgb), 0.62)',
                                                backgroundColor: 'rgba(var(--mist-active-accent-rgb), 0.08)',
                                                color: 'var(--mist-active-accent)'
                                            }}
                                        >
                                            {currentLang === 'EN' ? 'Admin generator enabled' : '管理员生成可用'}
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input value={customInputName} onChange={e => setCustomInputName(e.target.value)} placeholder={currentLang === 'EN' ? "Name (e.g. My Concept)" : "名称 (如: 我的概念)"} className={`mist-lexicon-custom-input flex-1 ${globalTheme === 'retro' ? 'bg-[#F9F7F1] border-black/10 text-black placeholder-black/30' : 'bg-black border-zinc-700 text-white placeholder-zinc-600'} border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8B261D]`} />
                                    <input value={customInputCore} onChange={e => setCustomInputCore(e.target.value)} placeholder={currentLang === 'EN' ? "Core Logic" : "核心逻辑"} className={`mist-lexicon-custom-input flex-1 ${globalTheme === 'retro' ? 'bg-[#F9F7F1] border-black/10 text-black placeholder-black/30' : 'bg-black border-zinc-700 text-white placeholder-zinc-600'} border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8B261D]`} />
                                </div>
                                <input value={customInputDef} onChange={e => setCustomInputDef(e.target.value)} placeholder={currentLang === 'EN' ? "Definition" : "详细定义"} className={`mist-lexicon-custom-input w-full ${globalTheme === 'retro' ? 'bg-[#F9F7F1] border-black/10 text-black placeholder-black/30' : 'bg-black border-zinc-700 text-white placeholder-zinc-600'} border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8B261D]`} />
                                {isAdmin && (
                                    <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                                        <textarea
                                            value={customInputNote}
                                            onChange={e => setCustomInputNote(e.target.value)}
                                            placeholder={currentLang === 'EN' ? "Admin note for AI generation, optional" : "管理员补充要求，可选。例如：偏黑色电影，不要太甜美"}
                                            rows={2}
                                            className={`mist-lexicon-custom-input w-full resize-none ${globalTheme === 'retro' ? 'bg-[#F9F7F1] border-black/10 text-black placeholder-black/30' : 'bg-black border-zinc-700 text-white placeholder-zinc-600'} border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8B261D]`}
                                        />
                                        <div className="flex shrink-0 items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setShowCustomDraftPrompt(true)}
                                                disabled={!customInputName.trim()}
                                                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 group border shrink-0 hover:scale-105 active:scale-95 bg-[var(--bg-panel)]/50 border-[var(--border-main)] hover:bg-[var(--bg-panel)] hover:border-[var(--border-accent)] text-[var(--text-muted)] hover:text-[var(--text-main)] disabled:opacity-50 disabled:cursor-not-allowed"
                                                title={currentLang === 'EN' ? 'Inspect generation instruction' : '透视生成指令'}
                                                aria-label={currentLang === 'EN' ? 'Inspect generation instruction' : '透视生成指令'}
                                            >
                                                <Terminal size={18} className="group-hover:animate-pulse" />
                                            </button>
                                            <button
                                                onClick={handleGenerateCustomDraft}
                                                disabled={!customInputName.trim() || isGeneratingCustomDraft}
                                                className="mist-traverse-action mist-app-primary-action flex items-center gap-3 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group min-w-[180px] border hover:scale-105 active:scale-95"
                                                style={{ boxShadow: 'none' }}
                                            >
                                                {isGeneratingCustomDraft ? <Loader2 size={16} className="animate-spin" /> : <Zap size={16} className="group-hover:scale-110 transition-transform" />}
                                                <span className="tabular-nums w-full text-center">
                                                    {isGeneratingCustomDraft
                                                        ? (currentLang === 'EN' ? 'Generating...' : '生成中...')
                                                        : (currentLang === 'EN' ? 'AI generate' : 'AI生成正式词条')
                                                    }
                                                </span>
                                                {!isGeneratingCustomDraft && <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {customDraft && (
                                    <div className={`rounded-lg border p-3 ${globalTheme === 'retro' ? 'border-[#8B261D]/18 bg-white/45' : 'border-white/10 bg-black/35'}`}>
                                        <div className={`mb-2 flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.16em] ${globalTheme === 'retro' ? 'text-[#8B261D]/75' : 'text-zinc-500'}`}>
                                            <span>{currentLang === 'EN' ? 'AI draft preview' : 'AI草稿预览'}</span>
                                            <span>{customDraft.id}</span>
                                        </div>
                                        <div className={`font-serif text-lg font-black ${globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-white'}`}>
                                            {currentLang === 'EN' ? (customDraft.nameEn || customDraft.name) : customDraft.name}
                                        </div>
                                        <p className={`mt-2 text-sm leading-7 ${globalTheme === 'retro' ? 'text-[#3D1A16]/78' : 'text-zinc-200'}`}>
                                            {currentLang === 'EN' ? (customDraft.defEn || customDraft.def) : customDraft.def}
                                        </p>
                                        {(customDraft.core || customDraft.coreEn || customDraft.absorptionRule || customDraft.absorptionRuleEn) && (
                                            <p className={`mt-2 border-t pt-2 text-xs leading-6 ${globalTheme === 'retro' ? 'border-[#8B261D]/12 text-[#8B261D]/75' : 'border-white/10 text-zinc-400'}`}>
                                                {currentLang === 'EN'
                                                    ? (customDraft.coreEn || customDraft.absorptionRuleEn || customDraft.core || customDraft.absorptionRule)
                                                    : (customDraft.core || customDraft.absorptionRule || customDraft.coreEn || customDraft.absorptionRuleEn)
                                                }
                                            </p>
                                        )}
                                    </div>
                                )}
                                <div className="flex justify-end gap-2">
                                    <button onClick={resetCustomComposer} className={`px-4 py-2 text-xs font-bold ${globalTheme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-500'} hover:opacity-80`}>{currentLang === 'EN' ? "Cancel" : "取消"}</button>
                                    <button onClick={handleAddCustom} disabled={!customInputName && !customDraft} className={`px-6 py-2 text-xs font-bold ${globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-white text-black'} rounded hover:opacity-90 disabled:opacity-50`}>
                                        {customDraft
                                            ? (currentLang === 'EN' ? "Import & Select" : "导入并选择")
                                            : (currentLang === 'EN' ? "Add & Select" : "添加并选择")
                                        }
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
        {protocolOpenId && (() => {
            const protocolItem = allCurrentLibraryItems.find(i => (i.id || i.name) === protocolOpenId);
            const protocolCore = getLocalizedText(protocolItem, 'core', 'coreEn', currentLang);
            if (!protocolCore) return null;
            return (
                <div
                    className="fixed inset-0 z-[100001] flex items-center justify-center p-4"
                    onClick={() => setProtocolOpenId(null)}
                >
                    <div className={`absolute inset-0 ${globalTheme === 'retro' ? 'bg-[#3D1A16]/20 backdrop-blur-md' : 'bg-black/72 backdrop-blur-[10px]'}`} />
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative max-w-2xl w-full max-h-[76vh] overflow-y-auto custom-scrollbar rounded-2xl border-2 p-6 md:p-8 shadow-2xl ${
                            globalTheme === 'retro'
                                ? 'bg-[#F5F2EA] border-[#8B261D] text-[#2A1714] shadow-[16px_16px_0_rgba(139,38,29,0.10)]'
                                : 'bg-[#070707] border-[var(--mist-active-accent)] text-zinc-100 shadow-[0_0_0_1px_rgba(var(--mist-active-accent-rgb),0.18),0_30px_90px_rgba(0,0,0,0.78)]'
                        }`}
                    >
                        <button
                            onClick={() => setProtocolOpenId(null)}
                            className={`absolute top-4 right-4 p-1.5 rounded-md transition-colors ${
                                globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/10' : 'text-zinc-500 hover:text-[var(--mist-active-accent)] hover:bg-white/10'
                            }`}
                        >
                            <X size={16} />
                        </button>
                        <h3 className={`font-serif font-bold text-lg md:text-2xl mb-1 pr-8 ${
                            globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white'
                        }`}>
                            {getLocalizedLabel(protocolItem.name, protocolItem.nameEn, currentLang) || protocolItem.id}
                        </h3>
                        <div className={`mb-4 text-[9px] font-bold uppercase tracking-widest ${
                            globalTheme === 'retro' ? 'text-[#8B261D]/70' : 'text-[var(--mist-active-accent)]/85'
                        }`}>
                            {currentLang === 'EN' ? 'Protocol — Core Logic' : '协议 — 核心逻辑'}
                        </div>
                        <div className={`text-sm md:text-base font-mono tracking-tight leading-8 whitespace-pre-wrap ${
                            globalTheme === 'retro' ? 'text-[#2A1714]' : 'text-zinc-100'
                        }`}>
                            {protocolCore}
                        </div>
                    </div>
                </div>
            );
        })()}
        <XRayInspectorModal
            isOpen={showCustomDraftPrompt}
            onClose={() => setShowCustomDraftPrompt(false)}
            lang={currentLang === 'EN' ? 'EN' : 'CN'}
            title={currentLang === 'EN' ? 'Lexicon Generation X-Ray' : '词条生成指令透视仪'}
            sources={getCustomDraftSources}
            buildPayload={(values) => buildCustomDraftPromptFromValues(values)}
        />
    </>, document.body);
}
